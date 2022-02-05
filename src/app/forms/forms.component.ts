import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @ViewChild('formElement') userForm: NgForm;
  answer: string;
  genders: string[] = ['male','female'];
  submitted: boolean;
  userName: string;
  emaiL: string;
  question: string;
  gender: string;
  constructor() { }

  ngOnInit(): void {
  }
  suggestUsername(): void {
    this.userForm.form.patchValue({
      userdata:{
        username:'suggested'
      }
    })
  }
  onSubmit(): void {
    this.submitted = true;
    this.userName = this.userForm.value.userdata.username;
    this.emaiL = this.userForm.value.userdata.email;
    this.answer = this.userForm.value.answer;
    this.question = this.userForm.value.question;
    this.gender = this.userForm.value.gender;
    this.userForm.reset();
  }

}
