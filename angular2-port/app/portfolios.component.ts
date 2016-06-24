import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Portfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';
@Component({
  selector: 'my-portfolios',
  templateUrl: 'app/template/heroes.component.html',
  styleUrls:  ['app/css/heroes.component.css']
})
export class PortfoliosComponent implements OnInit {
  portfolios: Portfolio[];
  selectedPort: Portfolio;

  constructor(
    private router: Router,
    private portfolioService: PortfolioService) { }

  getPortolios() {
    this.portfolioService.getPortfolios().then(portfolios => this.portfolios = portfolios);
  }

  ngOnInit() {
    this.getPortolios();
  }

}