import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime } from 'rxjs';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, EditorModule, InputTextModule, FormsModule, ReactiveFormsModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnChanges, OnInit {

  formBuilder = inject(FormBuilder);
  notesService = inject(NotesService);

  @Input() currentNote: any = null;

  noteForm = this.formBuilder.group({
    name: '',
    content: ''
  });

  ngOnInit(): void {
    this.noteForm.valueChanges.pipe(debounceTime(1500)).subscribe((value) => {
      this.notesService.updateNote(this.currentNote.id, value);
    });
  }

  ngOnChanges() {
    if (this.currentNote) {
      this.noteForm.setValue({
        name: this.currentNote.name,
        content: this.currentNote.content
      });
    }
  }
}
