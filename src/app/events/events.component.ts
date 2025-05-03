import { Component } from '@angular/core';
import { EventCardComponent } from './event-card/event-card.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { CFES_EVENTS } from '../../data/cfes.events';
import { INTERNAL_EVENTS } from '../../data/internal.events';
import { ESSCO_EVENTS } from '../../data/essco.events';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventCardComponent, BannerComponent, NavbarComponent, RouterOutlet, MatTabsModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  title: string = 'Events';
  bannerUrl: string = 'https://students.senecapolytechnic.ca/attachment?file=e1kVwFuW19CSYDjK2wGG2Q%3D%3D';

  items = [
    {title: "Internal", events: INTERNAL_EVENTS},
    {title: "ESSCO", events: ESSCO_EVENTS},
    {title: "CFES", events: CFES_EVENTS},
  ]

  constructor(private router: Router) { }

  ngOnInit() {}

  onTabChange(index: number) {}

}
