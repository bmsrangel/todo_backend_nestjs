import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot('mongodb://root:root@localhost:27017/admin'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
