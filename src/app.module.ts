import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactController } from './contact/contact.controller';

@Module({
  imports: [],
  controllers: [AppController, ContactController],
  providers: [AppService],
})
export class AppModule {}
