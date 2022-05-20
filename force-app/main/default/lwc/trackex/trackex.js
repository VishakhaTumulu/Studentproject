import { LightningElement,track } from 'lwc';
 
export default class Lwc8 extends LightningElement {
   @track fullname = {firstname: "John", lastname:"A"};
 
   fnamechange(event){
       const n = event.target.name;
       if(n == 'fname'){
        this.fullname.firstname = event.target.value;
    }
}

}
