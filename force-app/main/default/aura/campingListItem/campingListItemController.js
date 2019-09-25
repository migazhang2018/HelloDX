({
	packItem : function(component, event, helper) {
		var bt = event.getSource();
        var it = component.get('v.item');
        it.packed__c = bt.checked;
        component.set('v.item',it);
        bt.set('v.disabled',true);
	}
})