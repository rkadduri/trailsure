// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { importProvidersFrom } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(BrowserAnimationsModule), 
//   ]
// }).catch(err => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// import { provideRouter, withComponentInputBinding } from '@angular/router';
// import { importProvidersFrom } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { routes } from './app/app.routes';

// export const appConfig = {
//   providers: [
//     provideRouter(routes, withComponentInputBinding()), // Configures routing
//     importProvidersFrom(HttpClientModule), // Import HttpClientModule for HTTP services
//   ],
// };
