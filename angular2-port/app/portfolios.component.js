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
var PortfoliosComponent = (function () {
    function PortfoliosComponent(router, portfolioService) {
        this.router = router;
        this.portfolioService = portfolioService;
    }
    PortfoliosComponent.prototype.getPortolios = function () {
        var _this = this;
        this.portfolioService.getPortfolios().then(function (portfolios) { return _this.portfolios = portfolios; });
    };
    PortfoliosComponent.prototype.ngOnInit = function () {
        this.getPortolios();
    };
    PortfoliosComponent = __decorate([
        core_1.Component({
            selector: 'my-portfolios',
            templateUrl: 'app/template/heroes.component.html',
            styleUrls: ['app/css/heroes.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, portfolio_service_1.PortfolioService])
    ], PortfoliosComponent);
    return PortfoliosComponent;
}());
exports.PortfoliosComponent = PortfoliosComponent;
//# sourceMappingURL=portfolios.component.js.map