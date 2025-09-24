import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
interface Section {
  header: string;
  content: string;
}
interface TeamMember{
  name: string;
  title: string;
}
@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.css',
})
export class WhoWeAreComponent {

  // static data
  sessInfo: Section[] = [
    {
      header: "Who We Are",
      content: "The Seneca Engineering Students' Society (SESS) is a dedicated organization formed to represent and support the engineering student community at Seneca Polytechnic. As an engineering student run organization, SESS aims to address the unique needs and challenges of engineering students by providing a robust platform for professional and social development."
    },
    {
      header: "Our Mission",
      content: "SESS is committed to fostering an environment where engineering students can thrive academically, professionally, and socially. The society's mission is to enhance the student experience through various programs, events, and initiatives that encourage innovation, leadership, and community engagement."
    },
    {
      header: "Compliance with CEAB Requirements",
      content: "SESS activities align with the Canadian Engineering Accreditation Board (CEAB) graduate attributes, ensuring that students develop essential skills such as problem analysis, teamwork, communication, and ethical practice. Participation in competitions and events supported by SESS provides practical experiences that are crucial for meeting CEAB standards."
    }
  ];

  teamMember: TeamMember[]=[
    {
      name: "Jasleen",
      title: "President",
    },
    {
      name: "Crissha Kaye Salaritan",
      title: "VPC",
    },
    {
      name: "Declan Graham",
      title: "VPX"
    },
    {
      name: "Vinh Minh (Ryan) Dang",
      title: "VPA"
    },
    {
      name: "Sthapanavichet Long",
      title: "Treasurer"
    }
  ];

  toggleSection(section: number) {
    const arrow = document.getElementById(`arrow${section}`);
    const content = document.getElementById(`content${section}`);
    if(arrow && content) {
      content.classList.toggle('hidden');
      arrow.classList.toggle('rotate-180');
    }
  }

  teamExpanded = false; 
  toggleTeam() {
    this.teamExpanded = !this.teamExpanded;
  }

  // for set 2 html

  // isSectionVisible: { [key: number]: boolean } = {
  //   1: false,
  //   2: false,
  //   3: false
  // };

  // toggleSection(sectionNumber: number): void {
  //   this.isSectionVisible[sectionNumber] = !this.isSectionVisible[sectionNumber];
  // }


}

