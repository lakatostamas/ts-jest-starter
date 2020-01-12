jest.mock('../dep.ts', () => jest.fn());

import index from '../index.ts';
import dep from '../dep.ts';

describe('index', () => {
  describe('#getName', () => {
    test('should return the name', () => {
      expect(index.getName()).toBe('test');
    });
  });
});

