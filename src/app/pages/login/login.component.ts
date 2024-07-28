declare var google:any;
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
private router=inject(Router)
 //private activerouter=inject(ActivatedRoute)


  ngOnInit(): void {
    setTimeout(()=>{
      console.log("Session time out");
    },2000)
        google.accounts.id.initialize({
      client_id:'276672952214-f0qgsvbqstq2hb11r5gk9nv2ekelaf3m.apps.googleusercontent.com',
      callback:(resp:any)=>{

this.handleLogin(resp)
      }
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      width: document.getElementById("parent-element")?.offsetWidth // Here
    })
  }

  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]))
  }
  handleLogin(response:any){
if(response){
  //decode
  const payLoad=this.decodeToken(response.credential);
  sessionStorage.setItem("loggedInUser",JSON.stringify(payLoad))

  //store in session
  
  //navigate to home/browse

  this.router.navigate(['browse'])
  .then(() => {
    window.location.reload();
  });

}
  }
}
