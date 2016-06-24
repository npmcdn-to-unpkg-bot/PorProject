import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { provide } from '@angular/core';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,provide(APP_BASE_HREF, {useValue : '/' })
]);