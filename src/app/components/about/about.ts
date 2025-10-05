import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WEBSITE_CONTENT } from '../../constants/website-content';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit, OnDestroy {
  protected readonly content = WEBSITE_CONTENT;
  
  // Image slider properties
  clubHistoryImages = [
    '1165713.png',
    '1348112.png', 
    '1355011.jpeg',
    '1376387.png',
    '1378913.png',
    '1384114.png',
    '1385112.png',
    '1391543.jpg',
    '1391614.jpg',
    '1395392.png',
    '1395820.png'
  ];
  
  currentImageIndex = 0;
  currentImage = this.clubHistoryImages[0];
  showSlider = false;
  private autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  // Auto-slide functionality
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, 4000); // Change image every 4 seconds
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  // Image navigation methods
  nextImage(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.currentImageIndex = (this.currentImageIndex + 1) % this.clubHistoryImages.length;
    this.currentImage = this.clubHistoryImages[this.currentImageIndex];
  }

  previousImage(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.currentImageIndex = this.currentImageIndex === 0 
      ? this.clubHistoryImages.length - 1 
      : this.currentImageIndex - 1;
    this.currentImage = this.clubHistoryImages[this.currentImageIndex];
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
    this.currentImage = this.clubHistoryImages[this.currentImageIndex];
  }

  // Slider modal methods
  toggleSlider() {
    this.showSlider = true;
    this.stopAutoSlide(); // Stop auto-slide when slider is open
  }

  closeSlider() {
    this.showSlider = false;
    this.startAutoSlide(); // Resume auto-slide when slider is closed
  }

  // Error handling for images
  onImageError(event: any) {
    console.warn('Image failed to load:', event.target.src);
    // Fallback to next image
    this.nextImage();
  }
}
