import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import '@djforth/jest-matchers';
import mockFetch from 'jest-fetch-mock';
global.fetch = mockFetch;
configure({ adapter: new Adapter() });
