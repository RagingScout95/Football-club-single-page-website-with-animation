import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WEBSITE_CONTENT } from '../../constants/website-content';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, OnDestroy {
  protected readonly content = WEBSITE_CONTENT;
  protected isMenuOpen = signal(false);
  protected activeSection = signal('home');
  
  ngOnInit() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll(); // Check initial position
  }
  
  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
  
  private onScroll = () => {
    const sections = ['home', 'about', 'teams', 'academy', 'contact'];
    const scrollPosition = window.scrollY + 200; // Offset for navbar height
    
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  };
  
  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
  
  closeMenu() {
    this.isMenuOpen.set(false);
  }
  
  isActive(href: string): boolean {
    const sectionId = href.replace('#', '');
    return this.activeSection() === sectionId;
  }
}
