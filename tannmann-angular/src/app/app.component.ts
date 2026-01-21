import { Component } from '@angular/core';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserFormComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tann Mann Foundation';
  currentYear = new Date().getFullYear();

  onUserAdded(): void {
    console.log('New user added - list should refresh');
  }
}