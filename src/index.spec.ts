import { greetings } from './index';

describe('index.ts', () => {
  describe('.greetings', () => {
    it("should return 'Good morning' when the hour is between 0 and 11", () => {
      const currentDate = new Date(2021, 0, 1, 10, 0, 0);
      const result = greetings(currentDate);
      expect(result).toEqual('Good morning');
    });

    it("should return 'Good afternoon' when the hour is between 12 and 16", () => {
      const currentDate = new Date(2021, 0, 1, 15, 0, 0);
      const result = greetings(currentDate);
      expect(result).toEqual('Good afternoon');
    });

    it("should return 'Good evening' when the hour is between 17 and 23", () => {
      const currentDate = new Date(2021, 0, 1, 20, 0, 0);
      const result = greetings(currentDate);
      expect(result).toEqual('Good evening');
    });
  });
});
