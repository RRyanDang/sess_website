import { LowerCasePipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { iEvent } from '../../interfaces/ievent';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input() event?: iEvent;
}
