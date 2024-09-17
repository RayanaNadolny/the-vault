import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {
  notesService = inject(NotesService);
  notes: any[] = [];

  ngOnInit() {
    this.notesService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  createEmptyNote() {
    this.notesService.createEmptyNote();
  }
}
