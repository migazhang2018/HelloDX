({
    createItem : function(component, item) {
        var action = component.get("c.saveItem");
        action.setParams({"cai":item});
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
        
    }
})