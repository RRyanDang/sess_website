import { Component } from '@angular/core';
import { SECCategory } from '../interfaces/seccategory';

@Component({
  selector: 'app-sec',
  standalone: true,
  imports: [],
  templateUrl: './sec.component.html',
  styleUrl: './sec.component.css'
})
export class SecComponent {

  categories: SECCategory[] = [
    {title: "Programming", 
      details: "Teams of up to 4 will tackle industry-based problems, focusing on creating readable, applicable software solutions. The main theme and equipment specifications are announced 7 days prior, and teams work in designated workrooms with internet access, relevant information, and one computer per member." , 
      description: "After a 15-minute Q&A and 6-8 hours of development, teams rest for 1 hour before presenting their solution for 20 minutes, followed by up to 10 minutes of judge questions.", 
      image: "../../assets/sec-programming.png"}, 

    {title: "Re-Engineering", 
      details: "Takes an existing engineering concept, product, technique, or technology and incrementally improving on its design to suit an alternate situation or application. 2 Members max per team." , 
      description: "Competitors receive the first case 7 days before the competition to prepare a solution, while the second case is provided on competition day, with both solutions due by the end of the design period. Presentations are 15 minutes per team, followed by a 7-minute Q&A.", 
      image: "../../assets/sec-reeng.png"}, 
  ]
}




