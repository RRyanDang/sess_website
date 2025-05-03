import { Component } from '@angular/core';
import { Carousel, initTWE } from 'tw-elements';
import { Highlighter } from './highlighter';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})


export class CarouselComponent {
  highlights: Highlighter[] = [
    {title: "NEM Event", description: "National Engineering Month Event 2024 @ Seneca", image:"../../../assets/nem_2024.jpeg"},
    {title: "Frosh Event", description: "Frosh Event Winter 2024 @ Seneca", image:"../../../assets/Frosh_Winter_2024.JPG"},
    {title: "Canada Engineering Conference - Career Fair", description: "OSPE Canada Engineering Conference 2023 Career Fair, Toronto, November 2023", image:"../../../assets/ospe_2023.jpeg"},
  ]
  ngOnInit() {
    initTWE({Carousel})
  }
}