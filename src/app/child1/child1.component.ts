import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


function format(value:string){
   return "Hi "+value;
}

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [ FormsModule,CommonModule ],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  // name="ramya"
  // isDisabled=false
  // inputValue="test"

  // onClick(event:Event){
  //   (event.target as HTMLButtonElement).innerText="ramya";
  // }

  users=[
    {name:"Ramya"},
    {name:"Ramya"},
    {name:"Sravya"},
    {name:"Alekhya"},
    {name:"Ankitha"},
  ]

  // @Input({transform:format}) name=""
  
 
}
