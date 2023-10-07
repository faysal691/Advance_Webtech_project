import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';



// function globalMiddleWareOne(req: Request, res:Response, next: NextFunction){
//   console.log("This is the global middleware number 1");
//   next();
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.use(globalMiddleWareOne);
  await app.listen(3000);
}
bootstrap();