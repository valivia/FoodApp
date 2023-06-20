import { Module } from "@nestjs/common";
import { DiaryModule } from "./routes/diary/diary.module";
import { AuthModule } from "./routes/auth/auth.module";
import { IngredientModule } from "./routes/ingredient/ingredient.module";
import { RecipeModule } from "./routes/recipe/recipe.module";
import { UserModule } from "./routes/user/user.module";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";


@Module({
  imports: [
    IngredientModule,
    RecipeModule,
    DiaryModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
