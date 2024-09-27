import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, query, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  firestore = inject(Firestore);

  constructor() { }

  getNotes(): Observable<any[]> {
    return collectionData(query(collection(this.firestore, 'notes')), { idField: 'id' });
  }

  createEmptyNote() {
    const collectionRef = collection(this.firestore, 'notes')
    const name = prompt("Digite o nome");

    addDoc(collectionRef, {
      name: name,
      content: ""
    });
  }

  updateNote(id: string, fields: any) {
    const docRef = doc(this.firestore, 'notes', id);
    updateDoc(docRef, fields);
  }

  deleteNote(id: string) {
    const docRef = doc(this.firestore, 'notes', id);
    deleteDoc(docRef);
  }
}
