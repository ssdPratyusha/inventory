import { Component, OnInit } from '@angular/core';

import{FormBuilder,Validators, FormGroup} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted: boolean = false;
  RegisterForm: any;
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private formBuilder:FormBuilder,private http:HttpClient, private router: Router, private service:ApiService) {
    // this.dis() ;
    this.RegisterForm=this.formBuilder.group({
     
      empid:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      useremail:['',[Validators.required, Validators.pattern(this.emailRegEx)]],
      password:['', [Validators.required,  Validators.minLength(6)]],
      userrole:['', Validators.required],
      dateofbirth:['', Validators.required]
    })
  }

  ngOnInit() {
 

  }
  get f() { return this.RegisterForm.controls; }
  onSubmit(a) {
   
    this.submitted = true
    
    this.service.getApi(this.RegisterForm.value).subscribe(res=>{
      console.log(res)
      
    }) 

    // stop here if form is invalid
    if (this.RegisterForm.invalid) {

        return ;
               
      
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.RegisterForm.value))
    
     
  }
  getApi(a){
  
 
   
   }

  

  // getApi(){
  
  //   this.http.get('http://localhost:2525/user').subscribe(res=>{
  //    console.log(res)
     
  //  })
   
  //  }
//    dis(){
//  this.service.display().subscribe( response => { console.log(response);
//       })
//   }
}






     
  
  
 
  