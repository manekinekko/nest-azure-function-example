import { Controller, Get } from '@nestjs/common';
    
    @Controller()
    export class ContactController {
      
      @Get('contact')
      getContact(): string {
        return 'Hello Contact';
    }
  }