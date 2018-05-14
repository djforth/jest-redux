import toJson from 'enzyme-to-json';

export default componentFn => {
  describe('Basic component tests', () => {
    let component;
    beforeAll(() => {
      component = componentFn();
    });

    test('Should render', () => {
      expect(component.exists()).toBeTrue();
    });

    test('snapshot matches', () => {
      // If you change component change props - see https://facebook.github.io/jest/docs/snapshot-testing.html

      expect(toJson(component)).toMatchSnapshot();
    });
  });
};
