import { expect } from 'chai';
import * as userApi from './api';

describe('users', () => {
  describe('user(id: String!): User', () => {
    it('returns a user when a user can be found', async () => {
      const expectedResult = {
        data: {
          user: {
            id: '1',
            username: 'tundaey',
            email: 'tundaey@gmail.com',
            role: 'ADMIN',
          },
        },
      };
      const result = await userApi.user({ id: '1' });
      // console.log('result', result);
      expect(result.data).to.eql(expectedResult);
    });
  });
});
