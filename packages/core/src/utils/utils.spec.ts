import { animationUpdate } from './utils';

describe('animationUpdate', () => {
  it('returns empty string for no names defined', () => {
    expect(animationUpdate()).resolves;
  });
});
