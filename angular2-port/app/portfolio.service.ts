import { Portfolio } from './portfolio';
import { PORTFOLIOS } from './mock-portfolios';
import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {
  getPortfolios() {
    return Promise.resolve(PORTFOLIOS);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly() {
    return new Promise<Portfolio[]>(resolve =>
      setTimeout(()=>resolve(PORTFOLIOS), 2000) // 2 seconds
    );
  }

  getPortfolio(port_no: number) {
    return this.getPortfolios()
               .then(portfolios => portfolios.filter(portfolio => portfolio.port_no === port_no)[0]);
  }
}
