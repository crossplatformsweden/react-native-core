import React from 'react';
import TestRenderer from 'react-test-renderer';
import { CrossSpinner, CrossSpinnerType } from './CrossSpinner';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

function setup(type?: CrossSpinnerType, size?: number, color?: string) {
  return TestRenderer.create(
    <CrossSpinner
      type={type || CrossSpinnerType.BallIndicator}
      color={color || 'blue'}
      size={size || 64}
    />
  );
}

jest.unmock('react-native');
jest.unmock('./CrossSpinner');

/**
   * Test component rendering. Properties of children might be tested by importing their type:
   *```
      const btn = wrapper.root.findByType(Button); // or findByProps({ mode: 'text' });
      expect(btn.props.title).toBe('child');
      ```
   */
describe('components', () => {
  describe('<CrossSpinner />', () => {
    describe('`CrossSpinnerType` enum', () => {
      it('Should match snapshot', () => {
        expect(CrossSpinnerType).toMatchSnapshot();
      });

      it('Should have `BallIndicator` enum with value "BallIndicator"', () => {
        expect(CrossSpinnerType.BallIndicator).toEqual('BallIndicator');
      });
    });

    it('Component should render', () => {
      const wrapper = setup();
      expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('Should have <BallIndicator /> with size 64', () => {
      const wrapper = setup(CrossSpinnerType.BallIndicator);
      const child = wrapper.root.findByType(BallIndicator);
      expect(child.props.size).toEqual(64);
    });

    it('Should have <BarIndicator /> with size 64', () => {
      const wrapper = setup();
      const child = wrapper.root.findByType(BarIndicator);
      expect(child.props.size).toEqual(64);
    });

    it('Should have <DotIndicator /> with size 64', () => {
      const wrapper = setup(CrossSpinnerType.DotIndicator);
      const child = wrapper.root.findByType(DotIndicator);
      expect(child.props.size).toEqual(64);
    });

    it('Should have <PacmanIndicator /> with size 64', () => {
      const wrapper = setup(CrossSpinnerType.PacmanIndicator);
      const child = wrapper.root.findByType(PacmanIndicator);
      expect(child.props.size).toEqual(64);
    });

    it('Should have <PulseIndicator /> with size 64', () => {
      const wrapper = setup(CrossSpinnerType.PulseIndicator);
      const child = wrapper.root.findByType(PulseIndicator);
      expect(child.props.size).toEqual(64);
    });

    it('Should have <SkypeIndicator /> with size 64', () => {
      const wrapper = setup(CrossSpinnerType.SkypeIndicator);
      const child = wrapper.root.findByType(SkypeIndicator);
      expect(child.props.size).toEqual(64);
    });

    it('Should have <UIActivityIndicator /> with size 64', () => {
      const wrapper = setup(CrossSpinnerType.UIActivityIndicator);
      const child = wrapper.root.findByType(UIActivityIndicator);
      expect(child.props.size).toEqual(64);
    });

    it('Should have <WaveIndicator /> with size 64', () => {
      const wrapper = setup(CrossSpinnerType.WaveIndicator);
      const child = wrapper.root.findByType(WaveIndicator);
      expect(child.props.size).toEqual(64);
    });

    it('Should have <MaterialIndicator /> with size 64', () => {
      const wrapper = setup(CrossSpinnerType.MaterialIndicator);
      const child = wrapper.root.findByType(MaterialIndicator);
      expect(child.props.size).toEqual(64);
    });
  });
});
