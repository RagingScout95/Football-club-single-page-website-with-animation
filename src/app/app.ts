import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Teams } from './components/teams/teams';
import { Academy } from './components/academy/academy';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Hero,
    About,
    Teams,
    Academy,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy, AfterViewInit {
  private scrollTween: gsap.core.Tween | null = null;

  ngOnInit() {
    // Add global error listeners
    window.addEventListener('error', (event) => {
      console.error('Global JavaScript Error:', event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled Promise Rejection:', event.reason);
    });

    // Register GSAP plugins
    try {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
      console.log('GSAP plugins registered successfully');
    } catch (error) {
      console.error('Error registering GSAP plugins:', error);
    }
  }

  ngAfterViewInit() {
    // Ensure page starts at top
    this.scrollToTop();
    
    // Initialize smooth scrolling with GSAP
    this.initSmoothScroll();
    
    // Initialize animations
    this.initAnimations();
  }

  ngOnDestroy() {
    // Clean up
    if (this.scrollTween) {
      this.scrollTween.kill();
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  private scrollToTop() {
    // Force scroll to absolute top on page load
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  private initSmoothScroll() {
    try {
      // Enhanced smooth scroll with snap animation for about section
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(anchor.getAttribute('href')!);
          if (target) {
            const isAboutSection = target.id === 'about';
            const isHomeSection = target.id === 'home';
            
            // Disable scroll snap and smooth behavior during navigation
            document.body.style.scrollSnapType = 'none';
            document.documentElement.style.scrollBehavior = 'auto';
            document.body.style.scrollBehavior = 'auto';
            
            // Kill any existing scroll tweens to prevent conflicts
            if (this.scrollTween) {
              this.scrollTween.kill();
            }
            
            if (isAboutSection) {
              // Special snap animation for about section - prevent flicker
              this.scrollTween = gsap.to(window, {
                duration: 1.2,
                ease: "power3.out",
                scrollTo: { y: target, offsetY: 0 },
                onStart: () => {
                  // Ensure smooth start
                  window.scrollTo(window.scrollX, window.scrollY);
                },
                onComplete: () => {
                  // Add snap bounce effect
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.classList.add('snap-bounce');
                    setTimeout(() => {
                      aboutSection.classList.remove('snap-bounce');
                    }, 600);
                  }
                  // Re-enable scroll snap after animation
                  this.restoreScrollBehavior();
                }
              });
            } else if (isHomeSection) {
              // Scroll to very top for home section - ensure complete scroll
              this.scrollTween = gsap.to(window, {
                duration: 1.5,
                ease: "power3.out",
                scrollTo: { y: 0 },
                onStart: () => {
                  // Ensure smooth start
                  window.scrollTo(window.scrollX, window.scrollY);
                },
                onComplete: () => {
                  // Force scroll to absolute top
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                  // Re-enable scroll snap after animation
                  this.restoreScrollBehavior();
                }
              });
            } else {
              // Standard smooth scroll for other sections
              this.scrollTween = gsap.to(window, {
                duration: 1,
                ease: "power2.inOut",
                scrollTo: { y: target, offsetY: 80 },
                onStart: () => {
                  // Ensure smooth start
                  window.scrollTo(window.scrollX, window.scrollY);
                },
                onComplete: () => {
                  // Re-enable scroll snap after animation
                  this.restoreScrollBehavior();
                }
              });
            }
          }
        });
      });

      // Add scroll snap behavior for about section
      this.initScrollSnapBehavior();

      console.log('GSAP smooth scroll with snap animation initialized successfully');
    } catch (error) {
      console.error('Error initializing GSAP smooth scroll:', error);
    }
  }

  private restoreScrollBehavior() {
    // Re-enable scroll snap and smooth behavior after animation
    setTimeout(() => {
      document.body.style.scrollSnapType = 'y mandatory';
      document.documentElement.style.scrollBehavior = 'smooth';
      document.body.style.scrollBehavior = 'smooth';
    }, 200);
  }

  private initScrollSnapBehavior() {
    try {
      let isScrolling = false;
      let scrollTimeout: any;

      window.addEventListener('scroll', () => {
        if (!isScrolling) {
          isScrolling = true;
          window.requestAnimationFrame(() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              const rect = aboutSection.getBoundingClientRect();
              const windowHeight = window.innerHeight;
              
              // Check if about section is in view (center of viewport)
              if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                // Add subtle snap effect
                aboutSection.classList.add('snap-transition');
                
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                  aboutSection.classList.remove('snap-transition');
                }, 100);
              } else {
                // Remove snap effect when not in view
                aboutSection.classList.remove('snap-transition');
              }
            }
            isScrolling = false;
          });
        }
      });
    } catch (error) {
      console.error('Error initializing scroll snap behavior:', error);
    }
  }


  private initAnimations() {
    try {
      // Page load animation
      gsap.fromTo('body', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      // Simple fade-in for sections
      setTimeout(() => {
        try {
          gsap.utils.toArray('section').forEach((section: any, index) => {
            gsap.fromTo(section, 
              { 
                opacity: 0, 
                y: 30 
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                delay: index * 0.1
              }
            );
          });
          console.log('GSAP animations initialized successfully');
        } catch (error) {
          console.error('Error initializing GSAP section animations:', error);
        }
      }, 300);
    } catch (error) {
      console.error('Error initializing GSAP animations:', error);
    }
  }
}
