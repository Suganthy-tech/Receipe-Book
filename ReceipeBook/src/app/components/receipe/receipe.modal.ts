import { Ingredient } from '../shared/Ingredient.modal';

export class Receipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredient: Ingredient[];
    constructor(name: string, desc: string, imagePath: string, ingredient: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredient = ingredient;
    }
}
