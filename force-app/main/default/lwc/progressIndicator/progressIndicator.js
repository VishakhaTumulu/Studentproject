import { api, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
 
export default class LWCProgressIndicator extends NavigationMixin(LightningElement) {
  @api currentTab;
 
  
    /*StudentDetail(event){      
    
    this[NavigationMixin.Navigate]({   
        type: 'comm__namedPage',
        attributes: {
            name:'StudentDetail__c'
        },
    });
    
    }
 
    ContactDetail(event){      
    this[NavigationMixin.Navigate]({   
        type: 'comm__namedPage',
        attributes: {
            name:'ContactDetail__c'
        },
    });
   

   
    }

    CourseDetail(event){      
      
        console.log(event.target.value);
        this[NavigationMixin.Navigate]({   
            type: 'comm__namedPage',
            attributes: {
                name:'CourseDetail__c'
            },
        });
        
    }
    PaymentDetail(event){      
    
        console.log(event.target.value);
        this[NavigationMixin.Navigate]({   
            type: 'comm__namedPage',
            attributes: {
                name:'PaymentDetail__c'
            },
        });
        
    
    }
    ReviewDetail(event){      
       
        this[NavigationMixin.Navigate]({   
            type: 'comm__namedPage',
            attributes: {
                name:'ReviewDetail__c'
            },
        });
        
    }*/

    NavigateToTab(event){
        this.currentTab = event.target.value;
       /* if(currentPage == 'Student Detail'){ 
            currentPage = 'StudentDetail__c'
        }
        if(currentPage == 'Contact Details'){
            currentPage = 'ContactDetail__c'
        }
        if(currentPage == 'Course Detail'){
            currentPage = 'CourseDetail__c'
        }
        if(currentPage == 'Payment Detail'){
            currentPage = 'PaymentDetail__c'
        }
        if(currentPage == 'Review'){
            currentPage = 'ReviewDetail__c'
        }*/

      /*  this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: currentPage
            },
        }); */

        const selectEvent = new CustomEvent('changetab', {
            detail:  event.target.value  });
        this.dispatchEvent(selectEvent);




        

    }

}
