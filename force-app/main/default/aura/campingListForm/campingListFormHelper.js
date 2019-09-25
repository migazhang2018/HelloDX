({
    createItem : function(component, newitem) {
        var ev = component.getEvent("addItem");
            ev.setParams({"item":newitem});
            ev.fire();
            var resetItem = { 'sobjectType': 'Camping_Item__c',
                'Name': '',
                'Quantity': 0,
                'Price__c': 0,
                'Packed__c': false };
                component.set("v.newItem",resetItem);
    }
})