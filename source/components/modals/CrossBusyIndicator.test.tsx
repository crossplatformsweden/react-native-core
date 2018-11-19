import React from 'react';
import TestRenderer from 'react-test-renderer';
import { CrossSpinnerType } from '../animations/CrossSpinner';
import _ from 'lodash';

import CrossBusyIndicator, { IBusyIndicatorProps } from './CrossBusyIndicator';
import { TouchableOpacity, Text } from 'react-native';

jest.unmock('react-native');
jest.unmock('./CrossBusyIndicator');
jest.mock('react-native-modal', () => 'View');

function setup(options?: IBusyIndicatorProps | undefined) {
  const props: IBusyIndicatorProps = {
    isBusy: true,
    isCancelButtonVisible: true,
    type: CrossSpinnerType.BallIndicator,
    onCancel: () => console.log('Cancelled'),
    ...options,
  };

  const wrapper = TestRenderer.create(<CrossBusyIndicator {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('components', () => {
  describe('<CrossBusyIndicator />', () => {
    it('Should render self and subcomponents', () => {
      const { wrapper } = setup();
      expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('Should not have <Modal /> when `isBusy` is `false`', () => {
      const { wrapper, props } = setup({
        type: CrossSpinnerType.DotIndicator,
        isBusy: false,
        isCancelButtonVisible: true,
      });
      expect(props.isBusy).toBeFalsy();

      const children = wrapper.root.findAllByProps({ visible: false });
      expect(children.length).toBe(0);
    });

    it('Should have <CrossSpinner /> of type "DotIndicator"', () => {
      const { wrapper } = setup({
        type: CrossSpinnerType.DotIndicator,
        isBusy: true,
        isCancelButtonVisible: true,
      });
      const child = wrapper.root.findByProps({
        type: CrossSpinnerType.DotIndicator,
      });
      expect(child).toBeDefined();
    });

    it('Should have <Text /> with value "Cancel"', () => {
      const { wrapper } = setup();
      const child = wrapper.root.findAllByType(Text).slice(-1)[0];
      expect(child.props.children).toBe('Cancel');
    });

    it('Cancel button onCancel should be called', () => {
      let called = false;
      const onCalled = () => (called = !called);

      const { wrapper } = setup({
        type: CrossSpinnerType.DotIndicator,
        isBusy: true,
        isCancelButtonVisible: true,
        onCancel: onCalled,
      });

      const child = wrapper.root.findByType(TouchableOpacity);
      child.props.onPress();
      expect(called).toBeTruthy();
    });
  });
});