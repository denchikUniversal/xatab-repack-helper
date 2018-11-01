import { Component, OnInit } from '@angular/core';
import { Item, StreamServiceService } from '../../services/stream-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  item: Item

  itemId = null;


  constructor(private service: StreamServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id')
    if (this.itemId) {
      this.loadItem()
    }
  }

  loadItem() {
    this.service.getItem(this.itemId).subscribe(res => {
      this.item = res;
    })
  }

}
