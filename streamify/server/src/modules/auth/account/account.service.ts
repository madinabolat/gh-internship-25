import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
    findAll() {
        return [
          {
            id: '1',
            email: 'test@example.com',
            name: 'Test User',
          },
        ];
      }
}
