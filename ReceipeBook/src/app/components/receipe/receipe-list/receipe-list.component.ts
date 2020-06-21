import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Receipe } from '../receipe.modal';
import { receipeService } from '../receipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  public receipeList: Receipe[];
  constructor(private routes: ActivatedRoute, private receipeservice: receipeService, private route: Router) { }

  ngOnInit() {
    this.receipeList = this.receipeservice.getReceipeList();
  }
  onClickReceipe(receipe: Receipe) {
    this.receipeservice.selectedReceipe.emit(receipe);
  }
  onNewReceipeClick() {
    this.route.navigate(['new'], { relativeTo: this.routes });
  }
}
