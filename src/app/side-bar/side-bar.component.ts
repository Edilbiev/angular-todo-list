import { Component, OnInit } from '@angular/core';
import {StoreService} from "../store.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private todosStore: StoreService) { }

  getCategories(){
    return this.todosStore.getCategories();
  };
  selectCategory(category){
    return this.todosStore.selectCategory(category);
  };
  ngOnInit(): void {
  }

}
