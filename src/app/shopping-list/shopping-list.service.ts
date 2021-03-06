import { Subject } from "rxjs";
import { Ingredient } from "../shared/Ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    strartedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredient(index: number){
        return this.ingredients[index];
    }
    
    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(Ingredient: Ingredient){
        this.ingredients.push(Ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
}