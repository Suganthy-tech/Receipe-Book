import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'receipe';
  selectedFeature(feature: string) {
    this.loadedFeature = feature;
  }
}
