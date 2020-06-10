import { Component, OnInit } from '@angular/core';
import {StoreService} from "../store.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private todosStore: StoreService) { }
  getCategories(){
    return this.todosStore.getCategories();
  };
  ngOnInit(): void {
  }

}
