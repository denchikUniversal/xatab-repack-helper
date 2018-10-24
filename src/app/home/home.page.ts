import { Component, OnInit } from '@angular/core';
import { Item, StreamServiceService } from '../services/stream-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  items: Item[]

  constructor(private service: StreamServiceService) {

  }

  ngOnInit() {
    this.service.getItems()
    .subscribe(res => {
      this.items = res;
    })
  }

}
