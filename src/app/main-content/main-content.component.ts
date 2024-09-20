import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, EditorModule, InputTextModule, FormsModule, ReactiveFormsModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnChanges {

  formBuilder = inject(FormBuilder);

  @Input() currentNote: any = null;

  noteForm = this.formBuilder.group({
    name: '',
    content: ''
  });
  
  ngOnChanges() {
    if (this.currentNote) {
      this.noteForm.setValue({
        name: this.currentNote.name,
        content: this.currentNote.content
      });
    }
  }
}
