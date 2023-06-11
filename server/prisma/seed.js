const { PrismaClient } = require("@prisma/client");
const dataset = require("./source/dataset.json");


async function main() {
    const prisma = new PrismaClient();

    const promises = [];

    let count = 0;

    for (const entry of dataset) {
        count++;

        const nutrients = {
            ENERCC: entry["ENERCC (kcal)"],
            FAT: entry["FAT (g)"],
            PROT: entry["PROT (g)"],
            PROTPL: entry["PROTPL (g)"],
            PROTAN: entry["PROTAN (g)"],
            CHO: entry["CHO (g)"],
            FIBT: entry["FIBT (g)"],
            FAPUN3: entry["FAPUN3 (g)"],
            FAPUN6: entry["FAPUN6 (g)"],
            F18_3CN3: entry["F18:3CN3 (g)"],
            F18_4CN3: entry["F18:4CN3 (g)"],
            F20_3CN3: entry["F20:3CN3 (g)"],
            F20_4CN3: entry["F20:4CN3 (g)"],
            F20_5CN3: entry["F20:5CN3 (g)"],
            F21_5CN3: entry["F21:5CN3 (g)"],
            F22_2CN3: entry["F22:2CN3 (g)"],
            F22_3CN3: entry["F22:3CN3 (g)"],
            F22_5CN3: entry["F22:5CN3 (g)"],
            F22_6CN3: entry["F22:6CN3 (g)"],
            F18_2CN6: entry["F18:2CN6 (g)"],
            F18_3CN6: entry["F18:3CN6 (g)"],
            F20_2CN6: entry["F20:2CN6 (g)"],
            F20_3CN6: entry["F20:3CN6 (g)"],
            F20_4CN6: entry["F20:4CN6 (g)"],
            F22_2CN6: entry["F22:2CN6 (g)"],
            F22_4CN6: entry["F22:4CN6 (g)"],
            F22_5CN6: entry["F22:5CN6 (g)"],
            F24_2CN6: entry["F24:2CN6 (g)"],
            MG: entry["MG (mg)"],
            FE: entry["FE (mg)"],
            HAEM: entry["HAEM (mg)"],
            NHAEM: entry["NHAEM (mg)"],
            SE: entry["SE (µg)"],
            ZN: entry["ZN (mg)"],
            ID: entry["ID (µg)"],
            VITD: entry["VITD (µg)"],
            CHOCALOH: entry["CHOCALOH (µg)"],
            CHOCAL: entry["CHOCAL (µg)"],
            THIA: entry["THIA (mg)"],
            RIBF: entry["RIBF (mg)"],
            VITB6: entry["VITB6 (mg)"],
            VITB12: entry["VITB12 (µg)"],
            NIA: entry["NIA (mg)"],
        };

        // Sanitize
        for (const key in nutrients) {
            const value = nutrients[key];

            if (value === undefined) {
                console.warn(`Missing value for ${key} in ${entry["NEVO-code"]}`);
                continue;
            }

            if (value === "NULL") {
                nutrients[key] = 0;
                continue;
            }

            if (typeof value === "string") {
                nutrients[key] = parseFloat(value.replace(",", "."));

                if (isNaN(nutrients[key])) {
                    console.warn(`Invalid value for ${key} in ${entry["NEVO-code"]}`);
                    nutrients[key] = null;
                    return;
                }
                continue;
            }

            if (typeof value === "number") {
                continue;
            }


            console.warn(`Invalid value for ${key} in ${entry["NEVO-code"]}`);
            return;
        }

        promises.push(
            prisma.ingredient.create({
                data: {
                    code: entry["NEVO-code"],
                    name: entry["Engelse naam/Food name"],
                    name_nl: entry["Voedingsmiddelnaam/Dutch food name"],
                    category: entry["Food group"],
                    category_nl: entry["Voedingsmiddelgroep"],
                    nutrients: {
                        create: nutrients
                    }
                },
            })
        );
    }

    console.log(`Created ${count} ingredients`);
    await prisma.$transaction(promises);
}

main();