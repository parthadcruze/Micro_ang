import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ApiService } from './app/services/api.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure HttpClientModule is provided
    provideRouter(routes),
    ApiService // Explicitly provide ApiService
  ]
})
.catch(err => console.error(err));
