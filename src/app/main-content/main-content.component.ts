import { Component } from '@angular/core';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [EditorModule, InputTextModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
