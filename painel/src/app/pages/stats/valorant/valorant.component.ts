import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/json.service';

@Component({
  selector: 'app-valorant',
  templateUrl: './valorant.component.html',
  styleUrls: ['./valorant.component.scss']
})
export class ValorantComponent implements OnInit {

  urlBase: string = 'https://';
  urlParam1: string = '';
  urlParam2: string = '';

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
