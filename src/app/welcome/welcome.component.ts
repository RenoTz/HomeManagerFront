import { Component, OnInit } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'welcome-root',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  title: string;

  constructor(private welcomeServiceRest: WelcomeService) {
    this.welcomeServiceRest.getWelcome().subscribe(result => this.title = result);
  }

  ngOnInit() {}

}
