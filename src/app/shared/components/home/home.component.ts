import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  genderArray : Array<string> = ["Male", "Female", "Others"];
  emailPattern : string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
  constructor() { }

  ngOnInit(): void {
  } 
  onSubmit(form:NgForm){
    console.log(form.value);
    
  }

}
