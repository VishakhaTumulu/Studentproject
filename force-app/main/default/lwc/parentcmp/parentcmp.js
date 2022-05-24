import { LightningElement, api } from 'lwc';


export default class parentcmp extends LightningElement


{

    strInput;

    handleChange( event ) {

        this.strInput = event.target.value;

    }

}