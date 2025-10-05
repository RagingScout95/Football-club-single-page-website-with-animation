import { Component, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WEBSITE_CONTENT } from '../../constants/website-content';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit, AfterViewInit, OnDestroy {
  protected readonly content = WEBSITE_CONTENT;
  isLoaded = false;
  isScrolled = false;
  private scrollThreshold = 200; // Pixels to scroll before triggering animation

  ngOnInit() {
    // Preload the player image to ensure smooth animation
    this.preloadImage();
  }

  ngAfterViewInit() {
    // Small delay to ensure DOM is ready, then trigger animations
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  // Removed scroll listener to prevent conflicts with GSAP smooth scroll

  private preloadImage() {
    const img = new Image();
    img.onload = () => {
      console.log('Player image preloaded successfully');
    };
    img.onerror = () => {
      console.warn('Failed to preload player image');
    };
    img.src = `/assets/${this.content.teams.players[0].image}`;
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    // Fallback to a default placeholder or the first available image
    img.src = '/assets/player1.png';
    console.warn('Image failed to load, using fallback:', img.src);
  }
}
