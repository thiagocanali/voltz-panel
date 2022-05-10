import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/json.service';

@Component({
  selector: 'app-tf2',
  templateUrl: './tf2.component.html',
  styleUrls: ['./tf2.component.scss']
})
export class Tf2Component implements OnInit {

  urlBase: string = 'https://logs.tf/json/';
  urlParam1: string = '3073905';
  urlParam2: string = '76561198066828088';

  // urlBase: string = 'https://logs.tf/json/';
  // urlParam1: string = '2880055';
  // urlParam2: string = '76561198066828088';

  arrDatas = [];


  constructor(
    public json: JsonService
  ) { }

  ngOnInit(): void {
    this.noClick();
  }

  noClick() {
    this.json.getJson(`${this.urlBase}${this.urlParam1}#${this.urlParam2}`).subscribe((res: any) => {
      console.log('res: ', res);

      // res.forEach(element => {
      //   this.arrDatas.push(element);
      // });

    });

  }

}