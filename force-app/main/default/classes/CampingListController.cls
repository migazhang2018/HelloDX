public with sharing class CampingListController {
    @AuraEnabled
    public static camping_item__c saveItem(camping_item__c cai){
        upsert cai;
        return cai;
    }

    @AuraEnabled
    public static list<camping_item__c> getItems(){
        return [select id,name,quantity__c,price__c,packed__c from camping_item__c];
    }
    public CampingListController() {

    }
}