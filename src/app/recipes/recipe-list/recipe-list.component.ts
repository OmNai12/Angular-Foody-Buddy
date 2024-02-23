import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.modal";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes:Recipe[] = [
    new Recipe('Test', 'Test DESC', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclsYCqwyXtgP-d0CnuUZqJ-H9flOoJYrGGg&usqp=CAU'),
  ];

  ngOnInit() {
  }
}
