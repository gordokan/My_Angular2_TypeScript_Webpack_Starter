import { Component } from '@angular/core';
import { Meal } from './meal';
import * as _ from 'lodash';


@Component({
    selector: 'meals',
    styles: ['.meal-list {list-style-type: none;}'],
    template: `
    <input #mealInput (keyup.enter)="addMeal(mealInput.value); mealInput.value = '' "/>
    <ul *ngIf="meals.length" class="meal-list">
        <li *ngFor="let meal of meals">
            {{meal.name}}
            <i class="fa fa-times" (click)="removeMeal(meal)"></i>
        </li>
    </ul>
    <div *ngIf="!meals.length">
        {{emptyListMessage}}
    </div>
    `
})
export class Meals {
    meals: Meal[];
    emptyListMessage: string;

    constructor() {}

    ngOnInit() {
        this.meals = [
            new Meal(0, 'Breakfast'),
            new Meal(1, 'Snack')
        ];

        this.emptyListMessage = 'Create a meal!';
    }

    addMeal(newName: string) {
        let nextSeq: number = this.getNextSeq();
        let tempMeals = this.meals;
        if (newName) {
            tempMeals.push(new Meal(nextSeq, newName))
            this.setMeals(tempMeals);
        }
    }

    removeMeal(mealToRemove: Meal) {
        this.setMeals(_.filter(this.meals, function(meal) {
            return meal.seq !== mealToRemove.seq;
        }));
    }

    private getNextSeq(): number {
        return _.get(this.meals, 'length') ? _.maxBy(this.meals, 'seq').seq + 1 : 0;
    }

    private setMeals(meals: Meal[]) {
        this.meals = _.sortBy(meals, 'seq');
    }
}
