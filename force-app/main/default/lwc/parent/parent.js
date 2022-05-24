import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';



    export default class Parent extends NavigationMixin(LightningElement) {

    
    currentTab = 'Student Detail';
     studentid;
     contactid;
     courseid;
     paymentid;
     reviewid;


   // step=1;
    isStep1=true;
    isStep2=false;
    isStep3=false;
    isStep4=false;
    isStep5=false;

    handleChangeTab(event){
        console.log('studentId-->'+this.studentId);
        const currentTab = event.detail;

        if(currentTab == 'Student Detail'){ 
            this.toggleTab(true,false,false,false,false);
        }
        if(currentTab == 'Contact Details'){
            this.toggleTab(false,true,false,false,false);
        }
        if(currentTab == 'Course Detail'){
            this.toggleTab(false,false,true,false,false);
        }
        if(currentTab == 'Payment Detail'){
            this.toggleTab(false,false,false,true,false);
        }
        if(currentTab == 'Review'){
            this.toggleTab(false,false,false,false,true);
        }

    }

    toggleTab(step1, step2, step3, step4, step5){
        this.isStep1 = step1;

        this.isStep2=step2;
        this.isStep3=step3;
        this.isStep4=step4;
        this.isStep5=step5;
    
    }

    doNextPage(){

        if(this.currentTab == 'Student Detail'){ 
            this.currentTab = 'Contact Details';
            this.toggleTab(false,true,false,false,false);
        }
        else if(this.currentTab == 'Contact Details'){
            this.currentTab = 'Course Detail';
            this.toggleTab(false,false,true,false,false);
        }
        else if(this.currentTab == 'Course Detail'){
            this.currentTab = 'Payment Detail';
            this.toggleTab(false,false,false,true,false);
        }
        else if(this.currentTab == 'Payment Detail'){
            this.currentTab = 'Review';
            this.toggleTab(false,false,false,false,true);
        }
       
    }

    doPreviousPage(){
        console.log('in doPreviousPage');
        if(this.currentTab == 'Contact Details'){ 
            this.currentTab = 'Student Detail';
            this.toggleTab(true,false,false,false,false);
        }
        else if(this.currentTab == 'Course Detail'){
            this.currentTab = 'Contact Details';
            this.toggleTab(false,true,false,false,false);
        }
        else if(this.currentTab == 'Payment Detail'){
            this.currentTab = 'Course Detail';
            this.toggleTab(false,false,true,false,false);
        }
        else if(this.currentTab == 'Review'){
            this.currentTab = 'Payment Detail';
            this.toggleTab(false,false,false,true,false);
        }

    }

    handleStudentData(event){
        if(event.detail != undefined)
         { 
            console.log(event.detail);
            this.studentid =  event.detail;
            console.log(this.studentid);
        }

    }

    handleContactData(event){
        if(event.detail != undefined)
         { 
            console.log(event.detail);
            this.contactid =  event.detail;
            console.log(this.contactid);
        }

    }

    handleCourseData(event){
        if(event.detail != undefined)
         { 
            console.log(event.detail);
            this.courseid =  event.detail;
            console.log(this.courseid);
        }

    }

    handlePaymentData(event){
        if(event.detail != undefined)
         { 
            console.log(event.detail);
            this.paymentid =  event.detail;
            console.log(this.paymentid);
        }

    }

    handleReviewData(event){
        if(event.detail != undefined)
         { 
            console.log(event.detail);
            this.reviewid =  event.detail;
            console.log(this.reviewid);
        }

    }
}
    
/* get isStep1(){
    console.log("isStep1");
    return this.step === 1;
}

get isStep2(){
    console.log("isStep2");
    return this.step === 2;
}

get isStep3(){
    console.log("isStep3");
    return this.step === 3;
}

get isStep4(){
    console.log("isStep4");
    return this.step === 4;
}

get isStep5(){
    console.log("isStep5");
    return this.step === 6;
}

handlechange1(){
    this.isStep1=false;
    this.isStep2=true;
    this.isStep3=false;
    this.isStep4=false;
    this.isStep5=false;

}

handlechange2(){
    this.isStep1=false;
    this.isStep2=false;
    this.isStep3=true;
    this.isStep4=false;
    this.isStep5=false;

}

handlechange3(){
    this.isStep1=false;
    this.isStep2=false;
    this.isStep3=false;
    this.isStep4=true;
    this.isStep5=false;

}

handlechange4(){
    this.isStep1=false;
    this.isStep2=false;
    this.isStep3=false;
    this.isStep4=false;
    this.isStep5=true;

}

handlechange5(){
    this.isStep1=false;
    this.isStep2=false;
    this.isStep3=false;
    this.isStep4=false;
    this.isStep5=true;

} */





