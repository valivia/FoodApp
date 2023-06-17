import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { IngredientModule } from "./ingredient/ingredient.module";
import { RecipeModule } from "./recipe/recipe.module";
import { DiaryModule } from "./diary/diary.module";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [IngredientModule, RecipeModule, DiaryModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
