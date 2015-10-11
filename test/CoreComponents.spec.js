// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import { expect } from 'chai';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import * as CoreComponents from '../src/components/CoreComponents';

describe('CoreComponents', () => {
  describe('CheckLabel', () => {
    const CheckLabel = CoreComponents.CheckLabel;

    it('should render a "checked" label', () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(
        <CheckLabel label='My Label' checked={true}/>
      );
      const tree = renderer.getRenderOutput();
      expect(tree.type).to.equal('div');
      expect(tree.props.className).to.equal('CheckLabel-checked');
      expect(tree.props.children).to.equal('My Label');
    });

    it('should render an "unchecked" label', () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(
        <CheckLabel label='My Label' checked={false}/>
      );
      const tree = renderer.getRenderOutput();
      expect(tree.type).to.equal('div');
      expect(tree.props.className).to.equal('CheckLabel-unchecked');
      expect(tree.props.children).to.equal('My Label');
    })
  });

  describe('CheckLabelList', () => {
    const CheckLabel = CoreComponents.CheckLabel;
    const CheckLabelList = CoreComponents.CheckLabelList;
    it('should render a list', () => {
      const checks = [
        {label: 'eins', checked: true},
        {label: 'zwei', checked: false}
      ];

      const renderer = TestUtils.createRenderer();
      renderer.render(
        <CheckLabelList checks={checks}/>
      );
      const tree = renderer.getRenderOutput();
      expect(tree.type).to.equal('div');
      expect(tree.props.children).to.have.length(2);
      expect(tree.props.children
        .map((c)=>({type: c.type.name, label: c.props.label, checked: c.props.checked})))
        .to.eql([
        {type: 'CheckLabel', checked: true, label: 'eins'},
        {type: 'CheckLabel', checked: false, label: 'zwei'}
      ]);
    });
  });

  describe('Button', () => {
    const Button = CoreComponents.Button;
    const onClickHandler = () => {};

    it('should render an enabled button', () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(
        <Button enabled={true} label="My Button" onClickHandler={onClickHandler} />
      );
      const tree = renderer.getRenderOutput();
      expect(tree.type).to.equal('button');
      expect(tree.props.children).to.equal("My Button");
      expect(tree.props.onClick).to.equal(onClickHandler);
      expect(tree.props.disabled).to.be.false;
    });

    it('should render a disabled button', () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(
        <Button enabled={false} label="My disabled Button" onClickHandler={onClickHandler} />
      );
      const tree = renderer.getRenderOutput();
      expect(tree.type).to.equal('button');
      expect(tree.props.children).to.equal("My disabled Button");
      expect(tree.props.onClick).to.be.falsy;
      expect(tree.props.disabled).to.be.true;
    });
  })

});