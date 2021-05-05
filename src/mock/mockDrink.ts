import * as d from "../components/drinks/model";

const lime = new d.DrinkIngredient("Lime", 30, "cl");
const vodka = new d.DrinkIngredient("Vodka", 40, "cl");

const ingredients = new d.IngredientList([vodka], [lime]);

const supportedLanguages = new Set([d.Language.NOR]);

const stepList = [];

stepList.push("Hell vodka i shaker.");
stepList.push("Press limejuice i shaker.");
stepList.push("Shakeshakeshake!");
stepList.push("Fyll i shortdrinkglass.");

const stepMap = new Map<d.Language, string[]>();
stepMap.set(d.Language.NOR, stepList);

const steps = new d.MixingSteps(stepMap, supportedLanguages);

const vodkaLime1 = new d.Drink("Vodka Lime", ingredients, steps);
const vodkaLime2 = new d.Drink("Vodka Lime2", ingredients, steps);
const vodkaLime3 = new d.Drink("Vodka Lime3", ingredients, steps);


export const MockDrinks = [vodkaLime1, vodkaLime2, vodkaLime3];