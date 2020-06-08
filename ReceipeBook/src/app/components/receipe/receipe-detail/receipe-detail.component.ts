import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from '../receipe.modal'
@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  @Input() selectedReceipeDetails: Receipe;
  constructor() { }

  ngOnInit() {
  }

}
