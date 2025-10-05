import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WEBSITE_CONTENT } from '../../constants/website-content';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  protected readonly content = WEBSITE_CONTENT;
}
