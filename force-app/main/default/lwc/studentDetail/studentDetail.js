import {LightningElement, api } from 'lwc';

import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class StudentDetail extends NavigationMixin(LightningElement) {
     
 
  
    redirect = true;
    resetpage = false;
    @api  recordId;

    handleSuccess(event) {
        const even = new ShowToastEvent({
            title: 'Success!',
            message: 'Record created!'+ event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(even);

        const selectEvent = new CustomEvent('studentsaved', {
            detail:  event.detail.id  });
        this.dispatchEvent(selectEvent);
       
        if(this.resetpage== true){
            this.handleReset();
        }
    }

    handleError(event){
      const evt = new ShowToastEvent({
          title: 'Error!',
          message: event.detail.detail,
          variant: 'error',
          mode:'dismissable'
      });
      this.dispatchEvent(evt);
  }
   
  connectedCallback(event){
            console.log('in connected call back recordId--->'+this.recordId);
  }

  saveAndNewClick() {
    this.redirect = false;
    this.template.querySelector('lightning-record-edit-form').submit(this.fields);
    this.resetpage = true;
}
handleReset() {
  const inputFields = this.template.querySelectorAll(
      'lightning-input-field'
  );
  if (inputFields) {
      inputFields.forEach(field => {
          field.reset();
      });
  }
}

    handleCancel(event){
        /*var url = window.location.href; 
        var value = url.substr(0,url.lastIndexOf('/') + 1);
        window.history.back();
        return false;*/

        this[NavigationMixin.Navigate]({   
            type: 'comm__namedPage',
            attributes: {
                name:'Home'
            },
        });
    }
}

