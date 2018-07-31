import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dataservice } from './../myservices/dataservice.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  
  currentVeh;
  updateForm: FormGroup;
  
  // public get vnum() {
  //   return this.updateForm.get('vehicle_number');
  // }
  
  ngOnInit() {
  }

  constructor(public ds:dataservice) {
    this.updateForm = new FormGroup({
      vehicle_number : new FormControl(Validators.required),
      owner_address : new FormControl([
                                      Validators.required,
                                      Validators.minLength(10)]),
      dob : new FormControl(Validators.required),
      city : new FormControl(Validators.required),
      phone: new FormControl(Validators.required),
      mail: new FormControl(Validators.required),
      owner_name: new FormControl([
                                  Validators.required,
                                  Validators.minLength(10)]),
      proof: new FormControl(Validators.required)
    });
  
  
  }
  
  
  getData() {
    if(this.updateForm.get('vehicle_number').value.length === 10){
      console.log("10")
        this.ds.newGet(this.updateForm.get('vehicle_number').value).subscribe(
          (response) => {
              this.currentVeh = response;
              console.log(this.currentVeh);
        });
    }
    else{console.log(this.updateForm.get('vehicle_number').value.length)}
    console.log("from getData")
    if (this.currentVeh) {
        this.updateForm.get('vehicle_number').setValue(this.currentVeh.vehicle_number);
        this.updateForm.get('city').setValue(this.currentVeh.city);
        this.updateForm.get('owner_name').setValue(this.currentVeh.owner_name);
        this.updateForm.get('owner_address').setValue(this.currentVeh.owner_address);
        this.updateForm.get('dob').setValue(this.currentVeh.dob);
        this.updateForm.get('phone').setValue(this.currentVeh.phone);
        this.updateForm.get('mail').setValue(this.currentVeh.mail);
        this.updateForm.get('proof').setValue(this.currentVeh.proof);
    }
  }
  
  UpdateVeh(){
    console.log(this.updateForm.value)
    this.ds.update(this.updateForm).subscribe((response)=>{
      console.log(response.toString);
      if(response==='Done'){
        console.log('Done')
      }else{  
        console.log('Not')
      }
  });
  }
  
  

}


