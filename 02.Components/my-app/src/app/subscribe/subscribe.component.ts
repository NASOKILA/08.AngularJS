import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../../app/game';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})

export class SubscribeComponent implements OnInit {

  @Input('subGame') subGame: Game;

  @Output() notification = new EventEmitter<String>();

  public gameIdShow: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showSubscription() {

    this.notification.emit("Subscription success !");
  }

  showGameId() {
    this.gameIdShow = !this.gameIdShow;
  }
}
