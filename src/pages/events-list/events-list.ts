import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { NavController, NavParams } from 'ionic-angular';
import { Event } from '../../models/event.model';
import * as momentNs from 'moment';
const moment = momentNs;

@Component({
  selector: 'events-list',
  templateUrl: 'events-list.html'
})
export class EventsList {
  allEvents: Event[] = [];
  filteredEvents: Event[] = [];
  filteredEventsDic = {};
  categories: string[];
  searchText: string = null;
  loading: Boolean = false;
  showErrorMsg=false;
  showNoDataMsg=false;
  constructor(private eventsService: EventsService, public navCtrl: NavController, public navParams: NavParams) {
    this.categories = ["Today", "This Week", "Other"];
  }
  ngOnInit(): void {
    this.getAllEvents();
  }
  getAllEvents() {
    this.loading = true;
    this.eventsService.getAllEvents().subscribe(result => {
      result.forEach(event => {
        let members = event.members;
        let momentObj = moment(event.dateTime, 'dd-MM-yyyy HH:mm:SS');

        let eventDate = Date.parse(momentObj.toString());
        let category = this.getEventCategory(momentObj);

        this.allEvents.push(
          { Title: event.title, Date: eventDate, ImageURL: event.image, 
            ID: event.id, IsGoing: event.status == 'going', Description:event.description,
            IsIgnored: event.status == 'ignore', Members: members, Category: category 
          }
        );
      });
 
      this.filteredEvents = this.deepCopy(this.allEvents);

      this.fillEventsDictionary();
      this.loading = false;
    },error=>{
      this.showErrorMsg=true;
    });
  }
  getEventCategory(eventDateTime: momentNs.Moment) {
    let eventDateObj = eventDateTime.toDate();

    let eventDateNum = Date.parse(eventDateTime.toString());
    let todayDate = new Date();
    let weekStartDate = Date.parse(moment(new Date()).add(-todayDate.getDay(), 'days').toString());
    let weekEndDate = Date.parse(moment(new Date()).add(7 - todayDate.getDay(), 'days').toString());

    if (eventDateObj.getDate() == todayDate.getDate() && eventDateObj.getMonth() == todayDate.getMonth() && eventDateObj.getFullYear() == todayDate.getFullYear())
      return 'Today';
    else if (eventDateNum < weekEndDate && eventDateNum > weekStartDate)
      return 'Week';
    else
      return 'Other';

  }
  filter($event) {
    this.showNoDataMsg=false;
    if (this.allEvents.length > 0) {
      if (this.searchText.length > 0)
       { 
         this.filteredEvents = this.allEvents.filter(event => event.Title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
         this.showNoDataMsg=this.filteredEvents.length==0;
       }
      else
       {
          this.filteredEvents = this.deepCopy(this.allEvents);
       }
    }
    else
      this.filteredEvents = [];

    this.fillEventsDictionary();
  }

  fillEventsDictionary() {
    this.filteredEventsDic = {};
    this.categories.forEach(category => {
      this.filteredEventsDic[category] = this.filteredEvents.filter(e => e.Category == category);
    });
  }
  onCancel($event) {
    this.filteredEvents = this.deepCopy(this.allEvents);
  }
  deepCopy(oldObj: any) {
    var newObj = oldObj;
    if (oldObj && typeof oldObj === "object") {
      newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
      for (var i in oldObj) {
        newObj[i] = this.deepCopy(oldObj[i]);
      }
    }
    return newObj;
  }

}
