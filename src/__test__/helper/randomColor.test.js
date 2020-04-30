import randomColor from '../../helper/randomColor';

describe('RandomColor Test', () => {
  it('Should create right format random color (6)', () => {
    expect(randomColor().length).toBe(6);
  });
});
