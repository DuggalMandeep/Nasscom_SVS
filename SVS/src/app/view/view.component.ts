import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  veh_no = "123";
  owner_name = "";
  Sno = "";
  Challan_id = "";
  OffenceDate = "";
  Place = "";
  trafficPSlimits ="";
  Offence_Desc = "";
  Fine_amt = "";
  User_charges = "";
  Total = "";
  Officer_name = "";



  constructor() { }

  ngOnInit() {
  }

}
