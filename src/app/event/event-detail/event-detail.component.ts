import {Component, OnInit} from '@angular/core';
import {EventModel} from '../../shared/event-model';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../shared/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: EventModel;

  constructor(private _route: ActivatedRoute,
              private _eventService: EventService,
              private _router: Router) {
  }

  ngOnInit() {
    const evId = +this._route.snapshot.params['id'];
    if (evId) {
      this.event = this._eventService.getEventById(evId);
      console.log('kaptunk eventId-t', evId);
      console.log('kaptunk event-t', this.event);
    } else {
      this.event = new EventModel(EventModel.emptyEvent);
      console.log('nem kaptunk is-t úygh csináltunk gyorsan');
    }
  }

  onSubmit(form) {
    if (this.event.id) {
      console.log('update ágban vagyunk');
      this._eventService.update(this.event);
    } else {
      console.log('create ágban vagyunk');
      this._eventService.create(this.event);
    }
    this._router.navigate(['/event/list']);
  }

}
