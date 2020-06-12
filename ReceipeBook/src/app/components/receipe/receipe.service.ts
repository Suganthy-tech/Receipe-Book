import { Receipe } from './receipe.modal';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.modal';

export class receipeService {
    selectedReceipe = new EventEmitter<Receipe>();
    private receipeList: Receipe[] = [new Receipe(
        'A TestReceipe',
        'This is a simple test',
        'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-4.jpg', [new Ingredient('Chenna', 2), new Ingredient('malasa packet', 2)]
    ),
    new Receipe(
        'A TestReceipe',
        'This is a simple test',
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg', [new Ingredient('Chenna', 2), new Ingredient('malasa packet', 1)]

    )];
    getReceipeList() {
        return this.receipeList.slice();
    }

}