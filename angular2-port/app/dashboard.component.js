"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var portfolio_service_1 = require('./portfolio.service');
var DashboardComponent = (function () {
    function DashboardComponent(router, portfolioService) {
        this.router = router;
        this.portfolioService = portfolioService;
        this.portfolios = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portfolioService.getPortfolios()
            .then(function (portfolios) { return _this.portfolios = portfolios.slice(0, 4); });
    };
    DashboardComponent.prototype.gotoDetail = function (portfolio) {
        console.log(' go to detail ' + portfolio.port_no);
        var link = ['PortDetail', { port_no: portfolio.port_no }];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/template/dashboard.component.html',
            styleUrls: ['app/css/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, portfolio_service_1.PortfolioService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map