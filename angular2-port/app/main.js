"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_deprecated_1.ROUTER_PROVIDERS, core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })
]);
//# sourceMappingURL=main.js.map