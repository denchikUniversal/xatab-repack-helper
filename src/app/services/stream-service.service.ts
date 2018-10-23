import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface Item {
  id?: string;
  name: string;
  ddr: string;
  descr: string;
  developer: string;
  ganre: string;
  hdd: string;
  imgUrl: string;
  pill: string;
  processor: string;
  type: string;
  video: string;
}

@Injectable({
  providedIn: 'root'
})
export class StreamServiceService {

  private itemsCollection: AngularFirestoreCollection<Item>

  constructor(private db: AngularFirestore) {
    this.itemsCollection = db.collection<Item>('items')
   }
}
