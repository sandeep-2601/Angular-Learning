import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector:'app-forms-assignment',
    templateUrl:'./forms-assignment.component.html',
    styleUrls:['./forms-assignment.component.css']
})
export class FormsAssignmentComponent implements OnInit{
    @ViewChild('FormElement') formElement: NgForm;
    submitted: boolean = false;
    form :{emailid: string,password: string,subscription: string} = {
        emailid :'',
        password:'',
        subscription:''
    };
    constructor() {}
    ngOnInit(): void {

    }
    onSubmit(): void {
        
        this.form.emailid = this.formElement.value.email;
        this.form.password = this.formElement.value.password;
        this.form.subscription = this.formElement.value.subscription;   
        this.submitted=true;
    }
}