import { CommonModule } from '@angular/common';
import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.scss'
})
export class Test1Component {
  darkMode=signal<boolean>(false);

  @HostBinding('class.dark') get mode(){
    return this.darkMode();
  }
}
