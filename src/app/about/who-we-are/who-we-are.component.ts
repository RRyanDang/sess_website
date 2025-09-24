import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
// import { trigger, state, style, transition, animate } from '@angular/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
interface Section {
  header: string;
  content: string;
}
interface TeamMember {
  name: string;
  title: string;
}
interface YearlyTeam{
  year: string;
  member: TeamMember[];
  toggleState: boolean;
}
@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.css',
})
export class WhoWeAreComponent {

  //################################ FUNCTION ################################
  toggleSection(section: number) {
    const arrow = document.getElementById(`arrow${section}`);
    const content = document.getElementById(`content${section}`);
    if (arrow && content) {
      content.classList.toggle('hidden');
      arrow.classList.toggle('rotate-180');
    }
  }

  toggleTeam(team: YearlyTeam) {
    team.toggleState = !team.toggleState;
  }

  //################################ DATA SECTION ################################
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

  member2022_2023: TeamMember[] = [
    {
      name: "Dayson Yiyuan Dong",
      title: "President",
    },
    {
      name: "Kannav Sethi",
      title: "VP Internal",
    },
    {
      name: "Dennis Audu",
      title: "VP Finance"
    },
  ];

  member2023_2024: TeamMember[] = [
    {
      name: "Dayson Yiyuan Dong",
      title: "President",
    },
    {
      name: "Kannav Sethi",
      title: "VP Internal",
    },
    {
      name: "Dennis Audu",
      title: "VP Finance"
    },
    {
      name: "George Paul Robert",
      title: "VP Communication",
    },
    {
      name: "Crissha Salaritan",
      title: "VP Student Life",
    },
    {
      name: 'Jasleen Kaur & Ma Toan Bach',
      title:"VP Academic",
    },
    {
      name: "Kevin Liu",
      title: "Director NEM",
    },
  ];

  member2024_2025: TeamMember[] = [
    {
      name: "Dayson Yiyuan Dong",
      title: "President",
    },
    {
      name: "Kannav Sethi",
      title: "VP Internal",
    },
    {
      name: "Sthapanavichet Long",
      title: "VP Finance",
    },
    {
      name: "George Paul Robert",
      title: "VP Communication"
    },
    {
      name: "Crissha Salaritan",
      title: "VP Student Life",
    },
    {
      name: 'Jasleen Kaur',
      title:"VP Academic",
    },
    {
      name: "Kevin Liu",
      title: "Director NEM",
    },
    {
      name: "Rajini Paranagamage",
      title:"Media Coordinator",
    },
  ];

  member2025_2026: TeamMember[]=[
    {
      name: "Jasleen Kaur",
      title: "President",
    },
    {
      name: "Crissha Salaritan",
      title:"VP Internal & VP Student Life",
    },
    {
      name: "Sthapanavichet Long",
      title: "VP Finance",
    },
    {
      name: "Declan Graham",
      title: "VP Communication",
    },
    {
      name: "Vinh Minh (Ryan) Dang",
      title: "VP Academic",
    },
    {
      name: "Rajini Paranagamage",
      title:"Media Coordinator",
    },
  ];

  teams: YearlyTeam[] = [
    {
      year: "2025 - 2026",
      member: this.member2025_2026,
      toggleState: false
    },
    {
      year: "2024 - 2025",
      member: this.member2024_2025,
      toggleState: false
    },
    {
      year: "2023 - 2024",
      member: this.member2023_2024,
      toggleState: false
    },
    {
      year: "2022 - 2023",
      member: this.member2022_2023,
      toggleState: false
    },
  ];
}

