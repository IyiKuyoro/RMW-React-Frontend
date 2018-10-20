import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Component
import StatusNav from '../../../src/components/compounds/StatusNav';

let store;
describe('StatusNav signed-out', () => {
  beforeEach(() => {
    const initialStore = {
      user: {
        isAuthenticated: false,
      },
    };

    store = createStore(() => initialStore);
  });

  it('should render RideMyWay', () => {
    const wrapper = mount(<Provider store={store}><StatusNav /></Provider>);

    expect(wrapper.find('h1').text()).toEqual('Ride My Way');
    expect(wrapper.find('p').text()).toEqual('Simply tag along');
  });
});

describe('StatusNav signed-in', () => {
  beforeEach(() => {
    const initialStore = {
      user: {
        isAuthenticated: true,
      },
    };

    store = createStore(() => initialStore);
  });

  it('should render RideMyWay', () => {
    const wrapper = mount(<Provider store={store}><StatusNav /></Provider>);

    expect(wrapper.find('div').text()).toEqual('User');
  });
});