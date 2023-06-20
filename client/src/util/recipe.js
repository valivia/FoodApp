export function combineNutrients(recipeIngredients) {
    // Combine all nutrients from all ingredients
    const combined = recipeIngredients.reduce((acc, recipeIngredient) => {
        const { ingredient } = recipeIngredient;

        if (!ingredient.nutrients) {
            return acc;
        }

        const converteQuantity = (quantity, value) => {
            return quantity * (value / 100);
        };

        acc.grams += recipeIngredient.quantity;

        for (const nutrient of Object.keys(ingredient.nutrients)) {
            if (nutrient === "id") continue;
            const value = converteQuantity(recipeIngredient.quantity, ingredient.nutrients[nutrient]);
            if (acc[nutrient]) {
                acc[nutrient] += value;
            } else {
                acc[nutrient] = value;
            }
        }

        return acc;
    }, { grams: 0 });

    // Round to 2 decimal places
    for (const nutrient of Object.keys(combined)) {
        combined[nutrient] = Math.round(combined[nutrient] * 100) / 100;
    }

    return combined;
}