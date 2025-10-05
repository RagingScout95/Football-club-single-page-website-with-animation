import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WEBSITE_CONTENT } from '../../constants/website-content';

@Component({
  selector: 'app-teams',
  imports: [CommonModule],
  templateUrl: './teams.html',
  styleUrl: './teams.css'
})
export class Teams {
  protected readonly content = WEBSITE_CONTENT;
  protected currentPlayerSlide = signal(0);
  
  nextPlayer() {
    const current = this.currentPlayerSlide();
    const max = this.content.teams.players.length - 1;
    this.currentPlayerSlide.set(current >= max ? 0 : current + 1);
  }
  
  prevPlayer() {
    const current = this.currentPlayerSlide();
    const max = this.content.teams.players.length - 1;
    this.currentPlayerSlide.set(current <= 0 ? max : current - 1);
  }
  
  setPlayerSlide(index: number) {
    this.currentPlayerSlide.set(index);
  }
}
