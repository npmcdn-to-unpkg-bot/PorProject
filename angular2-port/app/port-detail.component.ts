import { Component, OnInit, Input} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Portfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'my-port-detail',
  templateUrl: 'app/template/hero-detail.component.html',
  styleUrls: ['app/css/hero-detail.component.css']
})
export class PortDetailComponent implements OnInit {
  portfolio: Portfolio;

  constructor(
    private portfolioService: PortfolioService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let port = +this.routeParams.get('port_no');
    console.log('port'+port)
    this.portfolioService.getPortfolio(port)
      .then(portfolio => this.portfolio = portfolio);
  }

  goBack() {
    window.history.back();
  }
}

