import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: String;
  public description: String;
  public imgPath: String;
  public ingredients: Ingredient[];

  constructor(
    name: String,
    description: String,
    imgPath: String,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.imgPath = imgPath;
    this.ingredients = ingredients;
  }

  set setName(value: String) {
    this.name = value;
  }

  get getName(): String {
    return this.name;
  }

  set setDescription(value: String) {
    this.description = value;
  }

  get getDescription(): String {
    return this.description;
  }

  set setImgPath(value: String) {
    this.imgPath = value;
  }

  get getImgPath(): String {
    return this.imgPath;
  }

  set setIngredients(value: Ingredient[]) {
    this.ingredients = value;
  }

  get getIngredients(): Ingredient[] {
    return this.ingredients;
  }
}
