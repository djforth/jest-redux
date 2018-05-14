import React from 'react';

import Component from '../__dummy__/components';
import { shallow } from 'enzyme';

import ComponentBasics from 'components';

describe('<Component />', () => {
  let component;
  beforeAll(() => {
    component = shallow(<Component />);
  });

  ComponentBasics(() => component);
});
