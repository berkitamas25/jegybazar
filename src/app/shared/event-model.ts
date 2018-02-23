export class EventModel {
  date: string;
  description: string;
  id?: string;
  name: string;
  pictureURL: string;

  constructor(param?: EventModel) {
    if (param) {
    Object.assign(this, param);
    }
  }
  static  get emptyEvent(): EventModel {
    return {
      name: '',
      date: '',
      pictureURL: '',
      description: ''
    };
  }
}
