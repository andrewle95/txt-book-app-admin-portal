import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(@Inject(FormBuilder) fb:FormBuilder, private api:ApiService) { 
    this.loginForm = fb.group({
      user : ['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  submitButton(){
    console.log(this.loginForm.value.user, this.loginForm.value.pass);
  }

}
