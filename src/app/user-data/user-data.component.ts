import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  username: string = ""
  activeButton: boolean = this.username.length > 0 
  constructor() { }
  handleInput(event: Event){
    this.username=(<HTMLInputElement>event.target).value
    this.activeButton = this.username.length>0
  }
  handleChange(){
    this.username=""
  }
  ngOnInit(): void {
  }

}
