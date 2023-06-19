import { Module } from "@nestjs/common";
import { DiaryModule } from "./routes/diary/diary.module";
import { AuthModule } from "./routes/auth/auth.module";
import { IngredientModule } from "./routes/ingredient/ingredient.module";
import { RecipeModule } from "./routes/recipe/recipe.module";
import { UserModule } from "./routes/user/user.module";
@Module({
  imports: [IngredientModule, RecipeModule, DiaryModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
