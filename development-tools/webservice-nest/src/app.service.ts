import { Injectable, Logger } from '@nestjs/common';
import { GrantManager } from 'keycloak-auth-utils';
@Injectable()
export class AppService {
  private logger: Logger;

  constructor() {
    this.logger = new Logger("AppService");
  }

  getHello(token: string): string {

    // {
    //   "realm": "master",
    //   "auth-server-url": "http://localhost:8080/auth/",
    //   "ssl-required": "external",
    //   "resource": "nginx-proxy",
    //   "credentials": {
    //     "secret": "5cbb59bd-e353-4528-889d-253f05ed7fc7"
    //   },
    //   "confidential-port": 0
    // }

    const config = {
      realmUrl: "http://172.18.0.1:8080/auth/realms/master",
      clientId: "nginx-proxy",
      secret: "5cbb59bd-e353-4528-889d-253f05ed7fc7",
    };

    this.logger.log(`Receive request with ${token}`);
    const gm = new GrantManager(config);
    const result = gm.validateAccessToken(token);
    this.logger.log(`Result ${result}`);

    return result;
  }
}
