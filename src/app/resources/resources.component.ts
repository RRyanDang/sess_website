import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {
  title: string = 'Resources';
  bannerUrl: string = 'https://photos.applyboard.com/school_photos/000/014/167/photos/original/SenecaCollegeYorkgate-ComputerLab-Jan2021.jpg?1659724026'

}
