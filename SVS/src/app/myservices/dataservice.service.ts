import { Injectable } from "@angular/core";
import { HttpClient ,HttpParams} from "@angular/common/http";


//a sservice is  a TS class it is used to contain business logic centrally
//we can inject service into the components
@Injectable({
    providedIn: 'root',
})
export class dataservice{

    constructor(public http:HttpClient){
    }
    // public addEmployee(emp){
    //     return this.http.post("http://localhost:8282/MockProject/DemoServlet",JSON.stringify(emp.value));              //returns observable
    // }

    public update(emp){
        return this.http.post("http://localhost:8282/pro/updatevehicle",JSON.stringify(emp.value));
    }
     
    public newGet(vno){
        let params = new HttpParams().set('logNamespace', vno);
        return this.http.get("http://localhost:8282/pro/selectvehicle", { params: params });
     }

     
    // public loggingService(Messsage){
    //     console.log(Messsage);
    // }


    public login(log){
        return this.http.post("http://localhost:8282/pro/login",JSON.stringify(log.value)); 
    }

    public register(reg){
        return this.http.post("http://localhost:8282/pro/vehicleinsert",JSON.stringify(reg.value)); 
    }
}
