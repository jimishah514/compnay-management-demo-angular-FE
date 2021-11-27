import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private api: ApiService,private router: Router) {
    this.api.helloWorld().then(res =>{
      console.log("server Response : ",res);
    }
      
    );
 }

 routerNavigator(path){
   if(path === 'addEmployee'){
    this.router.navigate(['/','addEmployee'])
   } else if (path === 'addOffice') {
    this.router.navigate(['/','addOffice'])
   } else if(path === 'addTag'){
    this.router.navigate(['/','addTag'])
   } else if (path === 'viewEmployees') {
    this.router.navigate(['/','viewEmployees'])
   } else if(path === 'viewOffices'){
    this.router.navigate(['/','viewOffices'])
   } else if (path === 'viewEmployeeTags') {
    this.router.navigate(['/','viewEmployeeTags'])
   }
 }
}
