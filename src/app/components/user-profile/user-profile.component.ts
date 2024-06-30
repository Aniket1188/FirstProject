import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, booleanAttribute, numberAttribute, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { users } from '../../../Models/users';
import { CountrycodesPipe } from '../../pipes/countrycodes.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
function formatName(value:string){
  return "Hi  "+value
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,CountrycodesPipe,HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit , OnDestroy,OnChanges{
 @Input() name=""
 @Input({transform:numberAttribute}) mobile!:""
 @Input({transform:numberAttribute}) salary!:"";

 constructor(){
  //init properties
  //dependency injection
  //event listner register
  console.log("Constructor called",this.name)
 }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges",changes);
  }
 ngOnInit(){
  //initial Api called
  //init properties
  //dependency injection
  //event listner register
  console.log("ngoninit called",this.name)
 }
 ngOnDestroy(){
  //cleanup the code
  //clean the unregister listner
  console.log("Data get Destroy")
 }
  @Input({transform:formatName}) username=""
 //@Input() name="";

 @Input({transform:booleanAttribute}) issingle!:boolean;
  
  // @Output() myEvent=new EventEmitter<string>()
  // senddata(){
  //   this.myEvent.emit("Hello Angular")
  // }
  @Output()myEvent=new EventEmitter<users>()
  senddata(){
    this.myEvent.emit({name:this.name,newsalary:25000})
  }
// name="Aniket Wankhade"
// status ="Single"
// Mobile=9130537006
// isbtndisable=false
// inputvalue="Abcdef"

//Users=[
 //{name:"Aniket" ,status:true ,Mobile:9130537006},
// {name:"Shubham" ,status:false, Mobile:9130537556},
// {name:"Suraj", status:true ,Mobile:9130537008},
 //]
// onchange(e:Event){
//   const value=(e.target as HTMLInputElement).value
//   //console.log(value)
//   this.inputvalue=value
// }

}
