import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { isNumeric } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders: string[] = ['male','female'];
  signupForm: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData':new FormGroup({
      'username': new FormControl(null,[Validators.required,this.userNameValidator.bind(this)]),
      'email': new FormControl(null,[Validators.required,Validators.email],this.emailValidator)}),
      'gender': new FormControl(null),  
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm.value)
  }

  addHobby() {
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  userNameValidator(control: FormControl) : {[errorcode: string]: boolean} {
  if(control.value!=null &&( isNumeric(control.value) || control.value.length<7)) return {'userNameInvalid':true};
  return null;
  }

  emailValidator(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value=='test@test.com') resolve( {'emailInvalid':true});
        else resolve( null);
      },2000)
    });
    return promise;
  } 
}
