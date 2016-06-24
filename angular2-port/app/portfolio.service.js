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
var mock_portfolios_1 = require('./mock-portfolios');
var core_1 = require('@angular/core');
var PortfolioService = (function () {
    function PortfolioService() {
    }
    PortfolioService.prototype.getPortfolios = function () {
        return Promise.resolve(mock_portfolios_1.PORTFOLIOS);
    };
    // See the "Take it slow" appendix
    PortfolioService.prototype.getHeroesSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_portfolios_1.PORTFOLIOS); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    PortfolioService.prototype.getHero = function (port_no) {
        return this.getPortfolios()
            .then(function (portfolios) { return portfolios.filter(function (portfolio) { return portfolio.port_no === port_no; })[0]; });
    };
    PortfolioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PortfolioService);
    return PortfolioService;
}());
exports.PortfolioService = PortfolioService;
//# sourceMappingURL=portfolio.service.js.map