import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WEBSITE_CONTENT } from '../../constants/website-content';

@Component({
  selector: 'app-academy',
  imports: [CommonModule],
  templateUrl: './academy.html',
  styleUrl: './academy.css'
})
export class Academy {
  protected readonly content = WEBSITE_CONTENT;
}
