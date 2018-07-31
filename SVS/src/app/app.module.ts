import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes , RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentHeadComponent } from './component-head/component-head.component';
import { ComponentFormComponent } from './component-form/component-form.component';
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from './footer/footer.component';
import { UpdateComponent } from './update/update.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReportComponent } from './report/report.component';
import { ChallanComponent } from './challan/challan.component';
import { Challan1Component } from './challan1/challan1.component';
import { SignalComponent } from './signal/signal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { NgbdTabsetBasic } from './challan1/tabset-basic';
import { HttpClientModule} from '@angular/common/http';

const appRoutes: Routes =[
  {
    path:'',
    component:AuthComponent
  },
  {
    path:'register',
    component:ComponentFormComponent
  },
  {
    path:'home',
    component:ComponentHeadComponent,
    children: [
      {
        path:'',
        component:ReportComponent
      },
      {
        path:'report',
        component:ReportComponent
      },
      {
        path:'update',
        component:UpdateComponent
      },
      {
        path:'signal',
        component:SignalComponent
      },
      {
        path:'challan',
        component:Challan1Component, 
      },
      {
        path:"**",
        component:PagenotfoundComponent
      }
    ]
  },
  {
    path:"**",
    component:PagenotfoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ComponentHeadComponent,
    ComponentFormComponent,
    AuthComponent,
    FooterComponent,
    UpdateComponent,
    PagenotfoundComponent,
    ReportComponent,
    ChallanComponent,
    SignalComponent,
    Challan1Component,
    ViewComponent,
    NgbdTabsetBasic
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

