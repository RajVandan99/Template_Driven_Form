import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form')  signUpForm !: NgForm;
  //========= patterns =============//
  emailPattern :string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern : string = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20}$";

  genderArray :Array<string> = ["Female","Male","Others"]
  subjectsArray: Array<string> = ["Physics", "Chemistry", "Mathematics", "Biology"];

  studentInfo = {
    username:"Rajvandan",
    password: "zaq1ZAQ!@99!",
    email: "dhp@gmail.com",
    gender: "Male",
    subject: true,
    secreteQuestion: "mothername"
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.signUpForm.form.patchValue(this.studentInfo)
    })
  }
  onSubmit(){
    if(this.signUpForm.form.valid){
      console.log(this.signUpForm.value);
    }
    this.signUpForm.reset();
  }
}
