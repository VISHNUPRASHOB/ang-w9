import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  popup : boolean = false;
  popme(){
    this.popup = !this.popup;
  }
}
