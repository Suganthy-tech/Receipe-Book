import { Component, OnInit } from '@angular/core';
import {Receipe} from '../receipe.modal';
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  public receipeList:Receipe[]=[new Receipe(
    'A TestReceipe',
    'This is a simple test',
    'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-4.jpg'
  ) ];
  constructor() { }

  ngOnInit() {
  }

}
