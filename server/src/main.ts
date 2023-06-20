import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(cookieParser("TODO"));
  app.enableCors({ origin: "http://localhost:3001", methods: ["POST", "PUT", "PATCH"], credentials: true });
  await app.listen(3000);
}
bootstrap();
