import * as uuid from "uuid";


/**
 * TODO:
 * Glassforslag
 * Comments
 * private/public
 */

export enum Language {
    NOR = 0,
    ENG = 1
}

export class Drink {
    id: string;
    name: string;
    ingredients: IngredientList;
    steps: MixingSteps;

    constructor(name: string, ingredients: IngredientList, steps: MixingSteps) {
        this.id = uuid.v4();
        this.name = name;
        this.ingredients = ingredients;
        this.steps = steps;
    }
}

export class IngredientList {
    spirits: DrinkIngredient[];
    secondaries: DrinkIngredient[];

    constructor(spirits?: DrinkIngredient[], secondaries?: DrinkIngredient[]){

        this.spirits = spirits ? spirits : [];
        this.secondaries = secondaries ? secondaries : [];
    }
}

export class DrinkIngredient {
    ingredient: string;
    amount: number; // cl
    constructor(ingredient: string, amount: number) {
        this.ingredient = ingredient;
        this.amount = amount;
    }
}

export class MixingSteps {
    steps: Map<Language, string[]>;
    languages: Set<Language>;

    constructor(steps: Map<Language, string[]>, languages: Set<Language>){
        this.steps = steps;
        this.languages = languages;
    }
}
