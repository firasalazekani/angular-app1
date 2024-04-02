import { Routes } from '@angular/router';
import { Test1Component } from './test/test1/test1.component';
import { AppComponent } from './app.component';
import { DarkComponent } from './dark/dark.component';

export const routes: Routes = [
//    { path: '', redirectTo:'dark',pathMatch:'full'},
    // {path:'login',component:LoginComponent},
    {path:'dark',component:DarkComponent,title:'dark'},
      {path:'',component:Test1Component}
      
     //  {path:'test',component:LoginComponent,title:'login'},
   // {path:'test',component:}
   
];
