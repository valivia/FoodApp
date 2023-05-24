import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeController } from './recipe/recipe.controller';
import { FoodController } from './food/food.controller';

@Module({
  imports: [],
  controllers: [AppController, RecipeController, FoodController],
  providers: [AppService],
})
export class AppModule {}
