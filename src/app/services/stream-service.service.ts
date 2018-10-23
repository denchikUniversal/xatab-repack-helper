import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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
  private items: Observable<Item[]>

  constructor(private db: AngularFirestore) {
    this.itemsCollection = db.collection<Item>('items')

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        })
      })
    )
   }

   getItem(id) {
     return this.itemsCollection.doc<Item>(id).valueChanges()
   }
}
