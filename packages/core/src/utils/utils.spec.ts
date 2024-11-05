import { animationUpdate } from './utils';

describe('animationUpdate', () => {
  it('returns a promise', () => {
    expect(animationUpdate()).resolves;
  });
});
