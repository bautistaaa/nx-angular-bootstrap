import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Program } from '@lcmp/quick-view-data';

@Component({
  selector: 'lcmp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  programs: Program[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http
      .get<Program[]>('/api/programs')
      .subscribe((t) => (this.programs = t));
  }

  addProgram() {
    this.http.post('/api/programs', {}).subscribe(() => {
      this.fetch();
    });
  }
}
