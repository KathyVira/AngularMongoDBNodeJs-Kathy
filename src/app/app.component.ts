import { Component } from '@angular/core';
import { AuthService } from '../app/services/auth.service';
import { LoginComponent} from '../app/components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular client';

  constructor(public authService: AuthService) { }

  logout() {
    this.authService.logout()
  }
}
