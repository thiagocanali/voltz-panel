import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/json.service';

@Component({
  selector: 'app-algo-pra-mim',
  templateUrl: './algo-pra-mim.component.html',
  styleUrls: ['./algo-pra-mim.component.scss']
})
export class AlgoPraMimComponent implements OnInit {

  urlBase: string = 'https://api.adviceslip.com/advice';

  mensagemNaGarrafa: string = 'Lansa a braba';

  constructor(
    public json: JsonService
  ) { }

  ngOnInit(): void {

  }

  mandaOutra() {
    this.json.getJson(`${this.urlBase}`).subscribe((response: any) => {
      console.log('response: ', response);
      this.mensagemNaGarrafa = response.slip['advice'];

      // res.forEach(element => {
      //   this.arrDatas.push(element);
      // });

    });

  }

}
