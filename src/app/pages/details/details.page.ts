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

  constructor(private service: StreamServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
