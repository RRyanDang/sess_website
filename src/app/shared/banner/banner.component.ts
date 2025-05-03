import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() title: string = '';
  @Input() url: string = '';
}


// about 
// https://educationsnapshots.com/wp-content/uploads/sites/4/2022/01/seneca-college-newnham-campus-food-hall-3.jpg