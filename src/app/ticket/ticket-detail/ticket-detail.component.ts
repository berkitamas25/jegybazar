import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../shared/ticket.service';
import {EventService} from '../../shared/event.service';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';
import {TicketModel} from '../../shared/ticket-model';
import {EventModel} from '../../shared/event-model';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  ticket: TicketModel;
  events: EventModel[];

  constructor(private _ticketService: TicketService,
              private _eventService: EventService,
              private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
    this.ticket = new TicketModel(TicketModel.emptyTicket);
    this.ticket.sellerUserId = this._userService.getCurrentUser().id;
    // this.events = this._eventService.getAllEvents();
    console.log(this._userService.getCurrentUser());
  }
  onSubmit() {
    console.log(this.ticket);
    this._ticketService.create(this.ticket);
    this._router.navigate(['/ticket']);
  }

}
