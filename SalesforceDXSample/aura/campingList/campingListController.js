({
    doInit : function(component, event, helper) {
        var action = component.get("c.getItems");
        action.setCallback(this, response => {
            var st = response.getState();    
            if(st == 'SUCCESS'){
                component.set("v.items", response.getReturnValue());
            } else {
                alert("Failed with state: " + st);
            }

        

        });
        $A.enqueueAction(action);
    },
    handleAdditem : function(component, event, helper) {
        var newItem = event.getParam("item");
        //helper.createItem(component, newItem);
        var action = component.get("c.saveItem");
        action.setParams({"cai":newItem});
        action.setCallback(this,response =>{
            var st = response.getState();
            if (st == "SUCCESS") {
                var items = component.get("v.items");
                var returnValue = response.getReturnValue();
                items.push(returnValue);
                component.set("v.items",items);
                /*var resetItem = { 'sobjectType': 'Camping_Item__c',
                'Name': '',
                'Quantity': 0,
                'Price__c': 0,
                'Packed__c': false };
                component.set("v.newItem",resetItem);*/
            }
        });
        $A.enqueueAction(action);
    },

    clickCreateItem : function(component, event, helper) {
        var validItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validItem){
            // Create the new expense
            var newitem = component.get("v.newItem");
            //var theItems = component.get("v.items");
 
            // Copy the expense to a new object
            // THIS IS A DISGUSTING, TEMPORARY HACK
            //var newitem2 = JSON.parse(JSON.stringify(newitem));
            helper.createItem(component,newitem);
           /* theItems.push(newitem);
            component.set("v.items", theItems);
            var resetItem = { 'sobjectType': 'Camping_Item__c',
            'Name': '',
            'Quantity': 0,
            'Price__c': 0,
            'Packed__c': false };
            component.set("v.newItem",resetItem);*/
        }
    }
})