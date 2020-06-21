import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.css']
})
export class ReceipeEditComponent implements OnInit {
  public id: number;
  public editMode = false;
  constructor(private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe((ele: Params) => {
      this.id = ele['id'];
      this.editMode = ele['id'] != null;
    });
  }

}
