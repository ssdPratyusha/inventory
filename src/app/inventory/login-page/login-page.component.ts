import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder ,Validators} from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  LoginForm: any;
  submitted: boolean;
  details: Object;
 

  constructor(private formBuilder:FormBuilder,private router: Router, ht:HttpClient) {
    this.LoginForm=this.formBuilder.group({
      firstname:['',Validators.required ],
    password:['', [Validators.required,  Validators.minLength(6)]],
  })
   }
   newChange(): void {
    this.router.navigateByUrl('register');
}
get f() { return this.LoginForm.controls; }
  ngOnInit() {
   
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.LoginForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.LoginForm.value))
}



// dis(){
//   this.service.display().subscribe( response => { console.log(response);
//     this.details=response;
//     })
// }
// post(c){
  
//   this.ht.get('http://localhost:2525/user',c).subscribe(res=>{
//    console.log(res)
   
//  })
 
//  }
//   
}
