import moment from "moment";

export const defaultNutrients = {
    ENERCC: 0,
    FAT: 0,
    PROT: 0,
    PROTPL: 0,
    PROTAN: 0,
    CHO: 0,
    FIBT: 0,
    FAPUN3: 0,
    FAPUN6: 0,
    F18_3CN3: 0,
    F18_4CN3: 0,
    F20_3CN3: 0,
    F20_4CN3: 0,
    F20_5CN3: 0,
    F21_5CN3: 0,
    F22_2CN3: 0,
    F22_3CN3: 0,
    F22_5CN3: 0,
    F22_6CN3: 0,
    F18_2CN6: 0,
    F18_3CN6: 0,
    F20_2CN6: 0,
    F20_3CN6: 0,
    F20_4CN6: 0,
    F22_2CN6: 0,
    F22_4CN6: 0,
    F22_5CN6: 0,
    F24_2CN6: 0,
    MG: 0,
    FE: 0,
    HAEM: 0,
    NHAEM: 0,
    SE: 0,
    ZN: 0,
    ID: 0,
    VITD: 0,
    CHOCALOH: 0,
    CHOCAL: 0,
    THIA: 0,
    RIBF: 0,
    VITB6: 0,
    VITB12: 0,
    NIA: 0
}

export const nutrientMap = {
    ENERCC: {
        name: "Energy",
        unit: "kcal",
        formula: (user) => {
            // https://ostrovit.com/en/blog/caloric-demand-how-to-calculate-it-what-does-it-depend-on-1620652901.html#:~:text=Here%20is%20the%20simplest%20formula,6.8%20%C3%97%20age%20in%20years).
            // for women
            return (655 + (9.6 * user.weight) + (1.8 * user.height) - (4.7 * moment().diff(user.birthdate, 'years')));
            // for men
            // 66 + (13.7 × weight in kg) + (5 × height in cm) - (6.8 × age in years)
        }
    },

    FAT: {
        name: "Fat",
        unit: "g",
        formula: (user) => {
            // https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=85&contentid=P00221#:~:text=No%20more%20than%2030%25%20of,calories%20and%20multiply%20by%2030%25.
            return (0.3 * nutrientMap.ENERCC.formula(user)) / 9;
        }
    },

    PROT: {
        name: "Protein",
        unit: "g",
        formula: (user) => {
            return (user.weight * 2.2) * .36;
        }
    },

    FIBT: {
        name: "Fiber",
        unit: "g",
        formula: (user) => {
            // https://www.livestrong.com/article/375772-how-to-calculate-the-daily-percent-value-for-fiber/#:~:text=If%20your%20calorie%20goal%20is,by%201%2C000%2C%20which%20equals%201.5.
            return (nutrientMap.ENERCC.formula(user) / 1000) * 14;
        },
    },

    FE: {
        name: "Iron",
        unit: "mg",
        formula: (user) => {
            // https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/
            return 18;
        }
    },

}

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

        // Add each nutrient to the accumulator
        for (const nutrient of Object.keys(ingredient.nutrients)) {
            if (nutrient === "id") continue;
            const value = converteQuantity(recipeIngredient.quantity, ingredient.nutrients[nutrient]);

            if (acc[nutrient]) acc[nutrient] += value;
            else acc[nutrient] = value;
        }

        return acc;
    }, { grams: 0 });

    // Round to 2 decimal places
    for (const nutrient of Object.keys(combined)) {
        combined[nutrient] = Math.round(combined[nutrient] * 100) / 100;
    }

    return combined;
}

export function calculateProgress(nutrients, goal) {
    const progress = {};

    for (const nutrient of Object.keys(nutrients)) {
        if (!goal[nutrient]) progress[nutrient] = 0;
        else progress[nutrient] = nutrients[nutrient] / goal[nutrient];
    }

    return progress;
}

export function calculateGoal(nutrients, user) {
    const goal = {};

    for (const nutrient of Object.keys(nutrients)) {
        const entry = nutrientMap[nutrient];
        if (!entry) continue;

        if (entry.formula) {
            goal[nutrient] = entry.formula(user);
        }
    }

    return goal;
}
