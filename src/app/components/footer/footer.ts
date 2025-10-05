import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WEBSITE_CONTENT } from '../../constants/website-content';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  protected readonly content = WEBSITE_CONTENT;
}
