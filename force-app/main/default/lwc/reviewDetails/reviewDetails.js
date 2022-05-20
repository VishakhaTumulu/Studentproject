import { LightningElement, api } from 'lwc';
import { getRecord } from "lightning/uiRecordApi";
import { getObjectInfo } from "lightning/uiObjectInfoApi";


import NAME_FIELD from '@salesforce/schema/Student_Details__c'; 
export default class ReviewDetails extends LightningElement {

    @api Student_Details__c;
  @api recordId;
}