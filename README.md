## Azure Functions + NestJS
  
- Getting started:
    - `nest new my-cool-app`
    - `npm start`
    - `curl http://localhost:3000/`
    - `nest add @nestjs/azure-func-http`
    - `npm run start:azure`
    - `curl http://localhost:7071/api`
    - `nest generate controller contact`
  
    ```
      import { Controller, Get } from '@nestjs/common';
        
        @Controller()
        export class ContactController {
          
          @Get('contact')
          getContact(): string {
            return 'Hello Contact';
        }
      }
    ```
    - `curl http://localhost:7071/api/contact`
    - deploy to Azure
    - `curl https://nest-azure-function.azurewebsites.net/api/contact`
  
- Full tutorial: https://trilon.io/blog/deploy-nestjs-azure-functions
- Learn more: https://nitr.ooo
  
## Roadmap

- Add `@AzureFunction()` annotation (see [@nestjs/azure-serverless](https://github.com/nestjs/azure-serverless)).
