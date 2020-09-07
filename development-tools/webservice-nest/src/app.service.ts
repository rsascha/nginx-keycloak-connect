import { Injectable, Logger, HttpService } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger: Logger;

  constructor(private http: HttpService) {
    this.logger = new Logger("AppService");
  }

  private config = {
    realmUrl: "http://172.18.0.1:8080/auth/realms/master",
    clientId: "webservice-nest",
    secret: "4e70e485-470a-4976-8cb0-bce9808e4257",
  };

  getHello(tokenStr: string): string {

    this.logger.log(`Receive request with: '${tokenStr}'`);



    return "OK";
  }
}
