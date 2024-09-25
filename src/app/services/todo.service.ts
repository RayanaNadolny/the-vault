import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, query, updateDoc } from '@angular/fire/firestore';
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

  updateTodoState(id: string, completed: boolean) {
    const docRef = doc(this.firestore, 'todos', id);
    updateDoc(docRef, {
      completed: completed
    })
  }

  deleteTodo(id: string) {
    const docRef = doc(this.firestore, 'todos', id);
    deleteDoc(docRef);
  }
}
