import { Component, OnInit } from '@angular/core';
import {StoreService} from "../store.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(public todosStore: StoreService) { }

  getContent(){
    return this.todosStore.getContent()
  }

  toggleDone(id){
    return this.todosStore.toggleDone(id)
  }

  toogleImportant(id){
    return this.todosStore.toogleImportant(id)
  }

  removeDone(){
    return this.todosStore.removeDone()
  }

  toogleOnlyImportant(){
    return this.todosStore.toggleOnlyImportant()
  }
  isOnlyImportant(){
    return this.todosStore.onlyImportant
  }
  ngOnInit(): void {
  }

}
