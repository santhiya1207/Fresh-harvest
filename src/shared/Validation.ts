import { AbstractControl,ValidatorFn } from "@angular/forms";

export default class Validation{
    static match(controlName:string,checkControlName:string):ValidatorFn{
        return(controls:AbstractControl) => {
            console.log("1")
            const control = controls.get(controlName);
            const checkControl = controls.get(checkControlName);
            console.log('Validation called');
            if(checkControl?.errors && !checkControl.errors['matching']){
                return null;
            }
            if(control?.value !==checkControl?.value){
                console.log('if block')
                controls.get(checkControlName)?.setErrors({maching:true});
                return {matching:true};
            }
            else{
                return null;
            }
        }
    }
}