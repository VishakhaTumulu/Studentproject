import { LightningElement,api } from 'lwc';
import { NavigationMixin} from 'lightning/navigation';

export default class PaymentDetail extends LightningElement {

    handleCancel(event){
       

        this[NavigationMixin.Navigate]({   
            type: 'comm__namedPage',
            attributes: {
                name:'Home'
            },
        });
    }


}