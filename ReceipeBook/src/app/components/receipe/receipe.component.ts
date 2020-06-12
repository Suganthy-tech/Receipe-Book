import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.modal';
import { receipeService } from './receipe.service';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css'],
  providers: [receipeService]
})
export class ReceipeComponent implements OnInit {
  selectedReceipe: Receipe;
  constructor(private receipeservice: receipeService) { }

  ngOnInit() {
    this.receipeservice.selectedReceipe.subscribe((ele: Receipe) => {
      this.selectedReceipe = ele;
    });
  }
}
