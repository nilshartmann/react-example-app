// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import { expect } from "chai";

import jsdom from "mocha-jsdom";

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

import PasswordForm from "../src/components/password/PasswordForm";
import { CheckLabel } from "../src/components/CoreComponents";

describe("PasswordForm", () => {
  jsdom();

  it("should work", () => {
    const restrictions = [
      {
        label: "eins",
        validate(v) {
          return !!v && v !== "zzzz" && v.length > 2;
        }
      },
      {
        label: "zwei",
        validate(v) {
          return (!!v && v === "yyyy") || v === "zzzz";
        }
      }
    ];

    let onPasswordSetCalled = false;
    const onPasswordSet = password => {
      onPasswordSetCalled = true;
    };

    const tree = TestUtils.renderIntoDocument(<PasswordForm restrictions={restrictions} onPasswordSet={onPasswordSet} />);
    expect(TestUtils.isCompositeComponentWithType(tree, PasswordForm)).to.be.true;
    const setPasswordButton = TestUtils.scryRenderedDOMComponentsWithTag(tree, "button")[1];
    expect(setPasswordButton).to.be.ok;

    // does not work with pure function components
    // const checkLabelComponents = TestUtils.findAllInRenderedTree(tree, (component) => TestUtils.isCompositeComponentWithType(component, CheckLabel));
    // expect(checkLabelComponents).to.have.length(2);

    // // nothing entered yet, so every check should be 'false'
    // expect(checkLabelComponents.map((c) => ({label: c.props.label, checked: c.props.checked})))
    //   .to.eql([
    //   {label: 'eins', checked: false},
    //   {label: 'zwei', checked: false}
    // ]);

    expect(setPasswordButton.disabled).to.be.true;

    const inputField = TestUtils.findRenderedDOMComponentWithTag(tree, "input");
    TestUtils.Simulate.change(inputField, { target: { value: "xxx" } });
    // expect(checkLabelComponents.map((c) => ({label: c.props.label, checked: c.props.checked})))
    //   .to.eql([
    //   {label: 'eins', checked: true},
    //   {label: 'zwei', checked: false}
    // ]);
    expect(setPasswordButton.disabled).to.be.true;

    // TestUtils.Simulate.change(inputField, {target: {value: 'zzzz'}});
    // expect(checkLabelComponents.map((c) => ({label: c.props.label, checked: c.props.checked})))
    //   .to.eql([
    //   {label: 'eins', checked: false},
    //   {label: 'zwei', checked: true}
    // ]);
    expect(setPasswordButton.disabled).to.be.true;

    TestUtils.Simulate.change(inputField, { target: { value: "yyyy" } });
    // expect(checkLabelComponents.map((c) => ({label: c.props.label, checked: c.props.checked})))
    //   .to.eql([
    //   {label: 'eins', checked: true},
    //   {label: 'zwei', checked: true}
    // ]);
    expect(setPasswordButton.disabled).to.be.false;

    // Click 'Set Password' Button and make sure callbacked get invoked
    TestUtils.Simulate.click(setPasswordButton);
    expect(onPasswordSetCalled).to.be.true;
  });
});
