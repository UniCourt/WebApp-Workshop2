import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello() : string {
        return "Hellow from NESTJS <3";
    }
}