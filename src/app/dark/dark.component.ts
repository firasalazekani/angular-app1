import { CommonModule } from '@angular/common';
import { Component, HostBinding, signal } from '@angular/core';

@Component({
  selector: 'app-dark',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark.component.html',
  styleUrl: './dark.component.scss'
})
export class DarkComponent {
darkMode=signal<boolean>(false);

@HostBinding('class.dark') get mode(){
  return this.darkMode();
}
}
