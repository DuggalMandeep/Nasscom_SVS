import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataservice } from '../myservices/dataservice.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public err:boolean;
  constructor(public ds:dataservice,public router:Router){ 
    this.err=false;
  }

  ngOnInit() {
  }


  goto(){
    this.router.navigate(['register']);
  }


  Authenticate(log){

    console.log(log.value);
    this.ds.login(log).subscribe((response)=>{
        console.log(response);
        if(response==='abc'){
          this.err=false;
          this.router.navigate(['home']);
        }else{  
          this.err=true;
        }
    });


    
  }
}




// onAddEmployee(empForm){
//   this.ds.addEmployee(empForm).subscribe((response)=>{
//       this.ds.loggingService(response);
//   });
// }
