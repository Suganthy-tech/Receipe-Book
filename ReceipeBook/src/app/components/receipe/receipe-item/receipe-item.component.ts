import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from '../receipe.modal';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input() receipeItem: Receipe;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
