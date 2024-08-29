import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, getDocs, query, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  firestore = inject(Firestore);

  constructor() { }

  getTodos(): Observable<any[]> {
    return collectionData(query(collection(this.firestore, 'todos')), { idField: 'id' });
  }

  saveTodo(name: string) {
    const collectionRef = collection(this.firestore, 'todos')

    addDoc(collectionRef, {
      name: name,
      completed: false
    })
  }

  async deleteTodo(id: string) {
    const docRef = doc(this.firestore, 'todos', id);
    await deleteDoc(docRef);
  }
}
