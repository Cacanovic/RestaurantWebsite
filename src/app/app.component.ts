import { Component, Inject } from '@angular/core'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'restauran';
  sidebarShow = false;

  showSidebar() {
    this.sidebarShow = !this.sidebarShow;
  }
}
