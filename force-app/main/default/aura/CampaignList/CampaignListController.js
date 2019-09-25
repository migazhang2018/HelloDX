({
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
            var theItems = component.get("v.items");
 
            // Copy the expense to a new object
            // THIS IS A DISGUSTING, TEMPORARY HACK
            //var newitem2 = JSON.parse(JSON.stringify(newitem));
    
            theItems.push(newitem);
            component.set("v.items", theItems);
            var resetItem = { 'sobjectType': 'Camping_Item__c',
            'Name': '',
            'Quantity': 0,
            'Price__c': 0,
            'Packed__c': false };
            component.set("v.newItem",resetItem);
        }
    }
})