import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { dataservice } from '../myservices/dataservice.service';

@Component({
  selector: 'app-component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.css']
})
export class ComponentFormComponent implements OnInit {
  public err :boolean;
  constructor(public router : Router,public ds:dataservice) {
      this.err=false;
   }
  ngOnInit() {
      
  }

  goto(){
    this.router.navigate(['/']);
  }
  

  RegisterVeh(log){
    console.log(log.value);
    this.ds.register(log).subscribe((response)=>{
        console.log(response);
        if(response==='Done'){
          this.router.navigate(['/']);
        }else{  
          this.err=true;
        }
    });
 
  }
}
