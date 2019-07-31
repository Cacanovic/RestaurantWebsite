import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(+100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ transform: 'translateX(+100%)' }))
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit, OnChanges {

  @Input('sidebarShow') sidebarShow: any;
  @Output() hideSidebar = new EventEmitter<any>();
  constructor() { }

  displaySidebar = false;

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.sidebarShow.previousValue!=undefined) {
      this.displaySidebar = true;
    }
  }

}
