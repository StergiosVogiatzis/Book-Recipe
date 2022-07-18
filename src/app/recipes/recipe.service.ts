import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();

  recipeSelected = new Subject<Recipe>();
  private recipes: Recipe[] = [];
    // private recipes: Recipe[] = [
    //     new Recipe('A Test Recipe', 'This simply a Test',
    //     'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F04%2F19%2Fmrtrending0475-2000.jpg',
    //     [
    //       new Ingredient('Meat', 1),
    //       new Ingredient('French Fries', 20)
    //     ]) 
    //   ];
    
    constructor(private slService: ShoppingListService) {
           
    }

    setRecipes(recipes: Recipe[]){
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
      return this.recipes.slice();
    }
    getRecipe(index: number){
      return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe:Recipe){
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
      
      
}