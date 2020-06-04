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
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fpasta&psig=AOvVaw0478ID2MHdHgkS4liyv0cj&ust=1591362315058000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiFzYau6OkCFQAAAAAdAAAAABAD"
  ) ];
  constructor() { }

  ngOnInit() {
  }

}
