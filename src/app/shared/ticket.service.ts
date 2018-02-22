import {Injectable} from '@angular/core';
import {TicketModel} from './ticket-model';
import {EventService} from './event.service';
import {UserService} from './user.service';

@Injectable()
export class TicketService {
  private _tickets: TicketModel[];

  constructor(private _eventService: EventService,
              private _userService: UserService) {
    this._tickets = [
      new TicketModel({
        'id': 1,
        'date': '2017-10-21',
        'numberOfTickets': 5,
        'minimalBidPrice': 2000,
        'bidStep': 500,
        'eventId': 1,
        'sellerUserId': 1
      }),
      new TicketModel({
        'id': 2,
        'date': '2017-10-21',
        'numberOfTickets': 5,
        'minimalBidPrice': 5000,
        'bidStep': 500,
        'eventId': 1,
        'sellerUserId': 2
      }),
      new TicketModel({
        'id': 3,
        'date': '2017-10-21',
        'numberOfTickets': 5,
        'minimalBidPrice': 3400,
        'bidStep': 400,
        'eventId': 1,
        'sellerUserId': 3
      })
    ];
  }
  getAllTickets() {
    return this._tickets.map(ticket => {
      return {
        ...ticket,
        event: this._eventService.getEventById(ticket.eventId),
        seller: this._userService.getUserById(ticket.sellerUserId)
      };
    });
  }
  create(param: TicketModel) {
    this._tickets = [
      ...this._tickets,
      new TicketModel({
        id: this._tickets.reduce((x, y) => x.id > y.id ? x : y).id + 1,
        ...param,
        event: this._eventService.getEventById(param.eventId),
        seller: this._userService.getUserById(param.sellerUserId)
      })
    ];
    console.log(this._tickets);
  }

  getEventNameById(id: number) {
    return this._eventService.getEventById(id).name;

}
}
