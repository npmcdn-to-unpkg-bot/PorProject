import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { PortfolioService } from './portfolio.service';
import { PortfoliosComponent } from './portfolios.component';
import { PortDetailComponent } from './port-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/css/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    PortfolioService
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:port_no',
    name: 'PortDetail',
    component: PortDetailComponent
  },
  {
    path: '/portfolios',
    name: 'Portfolios',
    component: PortfoliosComponent
  }
])
export class AppComponent {
  title = 'Portfolios';
}
