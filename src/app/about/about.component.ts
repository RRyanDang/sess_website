import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { BannerComponent } from '../shared/banner/banner.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgClass, BannerComponent, NavbarComponent, MatTabsModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title: string = 'about us';
  bannerUrl: string = 'https://educationsnapshots.com/wp-content/uploads/sites/4/2022/01/seneca-college-newnham-campus-food-hall-3.jpg';

  // enable our team later.
  
  items = [
    {title: "Who We Are", link: "who-we-are"},
    // {title: "Our Team", link: "our-team"},
    {title: "Get Involved", link: "get-involved"},
  ]
  
  activeLink =  this.items[0].link

}
