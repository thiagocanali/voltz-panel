import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  items = [
    { game: 'valorant', flag: 'assets/images/flags/us.jpg', id: 1 },
    { game: 'lol', flag: 'assets/images/flags/italy.jpg', id: 2 },
    { game: 'csgo', flag: 'assets/images/flags/germany.jpg', id: 3 },
    { game: 'tf2', flag: 'assets/images/flags/spain.jpg', id: 4 },
  ];

  constructor() { }

  ngOnInit(): void {

  }

  redirecionaGame(p: number) {
    console.log(p);
    console.log(this.items);

    setTimeout(() => {

      switch (p) {
        case 1:
          window.location.href = this.items[0].game;
          break;
        case 2:
          window.location.href = this.items[1].game;
          break;
        case 3:
          window.location.href = this.items[2].game;
          break;
        case 4:
          window.location.href = this.items[3].game;
          break;
        default:
          break;
      }

    }, 500);

  }

}


