import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private router: Router) { }

  navigateAbout() {
    // console.log('Navigating to about page');
    this.router.navigate(['about']);
  }

  navigateGetInvolved() {
    // console.log('Navigating to get involved page');
    this.router.navigate(['about/get-involved']);
  }

  navigateAnnouncements() {
    this.router.navigate(['sec']);
  }

}
