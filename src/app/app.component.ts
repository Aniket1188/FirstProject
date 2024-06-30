import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { users } from '../Models/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First-Project';
  name="Aniket"
  //  users=[
  //   {name:"Aniket" ,issingle:true,salary:45000},
  //   {name:"Wankhade" ,issingle:true,salary:50000},
  //   {name:"Hello" ,issingle:false,salary:55000},
  // ]
  // RecivedData(e:string){
  //   console.log(e)
  // }
  // RecivedData(e:users){
  //   console.log(e)

  //  const userIndex= this.users.findIndex(users=>users.name == e.name)
  //  this.users[userIndex].salary=e.newsalary
  // }
clear(){
  this.name=""
}

}
