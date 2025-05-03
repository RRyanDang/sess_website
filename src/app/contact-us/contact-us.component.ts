import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  title: string = 'Contact Us';
  bannerUrl: string = 'https://www.nakdesignstrategies.com/cms/wp-content/uploads/2018/07/1723-001_2x1-1200x600.jpg';
}
