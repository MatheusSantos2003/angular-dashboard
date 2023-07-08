import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { provideRouter, withDisabledInitialNavigation } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withDisabledInitialNavigation()),
    // { provide: CoursesService, useClass: CoursesService },
    importProvidersFrom(
      CommonModule,
      HttpClientModule,
      BrowserAnimationsModule,
      HttpClientJsonpModule
    ),
  ],
});
