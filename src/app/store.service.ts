import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  content = [
    {id:1, text: 'Выиграть олимпиаду в Токио', done: false, category:'Цели', important: true},
    {id:2, text: 'Купить новую приору 2018 года', done: false, category:'Покупки', important: false},
    {id:3, text: 'Купить молоко', done: true, category:'Покупки', important: false},
    {id:4, text: 'Встретиться с Мариной', done: false, category:'Личные дела', important: false},
    {id:5, text: 'Прочитать 52 книги до конца года', done: false, category:'Цели', important: false},
  ];

  selectedCategory = null;
  selectCategory(category){
    this.selectedCategory = category;
  };




  getCategories(){
    const categories = [];

      this.content.forEach(item => {
        if (categories.indexOf(item.category) === -1){
        categories.push(item.category)
        }})
    return categories
  }

  onlyImportant = false;
  toggleOnlyImportant(){
    return this.onlyImportant = !this.onlyImportant
  }

  getContent(){
    let content;
    if (this.onlyImportant){
      content = this.content.filter(item => item.important)
    }
    else{
      content = this.content;
    }
    if (this.selectedCategory !== null)
      return content.filter(item => item.category === this.selectedCategory)
    return content
  }

  removeDone(){
    this.content = this.content.filter(item => !item.done)
  }

  toggleDone(id){
    this.content = this.content.map(item => {
      if (id === item.id){
        return {
          ...item,
          done: !item.done
        };
      }
      return item;
    })
  };

  toogleImportant(id){
    this.content = this.content.map(item => {
      if (id === item.id){
        return{
          ...item,
          important: !item.important
        };
      }
      return item
    })
  };

  constructor() { }
}
