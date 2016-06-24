import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Portfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/template/dashboard.component.html',
  styleUrls: ['app/css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  portfolios: Portfolio[] = [];

  constructor(
    private router: Router,
    private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.portfolioService.getPortfolios()
      .then(portfolios => this.portfolios = portfolios.slice(0,4));
  }


  gotoDetail(portfolio: Portfolio) {
    console.log(' go to detail '+portfolio.port_no)
    let link = ['PortDetail', { port_no: portfolio.port_no }];
    this.router.navigate(link);
  }
  
}

