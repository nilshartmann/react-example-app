import Restrictions from '../src/model/Restrictions';
import { expect } from 'chai';

describe('Restrictions', () => {
  describe('NotEmpty', () => {
    it('should fail on null and undefined', () => {
      expect(Restrictions.NotEmpty.validate(null)).to.eql(false);
      expect(Restrictions.NotEmpty.validate(undefined)).to.eql(false);
    });
    it('should fail on empty string', () => {
      expect(Restrictions.NotEmpty.validate('')).to.eql(false);
    });
    it('should succeed on non-empty string', () => {
      expect(Restrictions.NotEmpty.validate('xxx')).to.eql(true);
    });
  });

  describe('AtLeastEightCharacters', () => {
    it('should fail on null and undefined', () => {
      expect(Restrictions.AtLeastEightCharacters.validate(null)).to.eql(false);
      expect(Restrictions.AtLeastEightCharacters.validate(undefined)).to.eql(false);
    });
    it('should not work for strings shorter than eight chars', () => {
      expect(Restrictions.AtLeastEightCharacters.validate('1234567')).to.eql(false);
    });
    it('should work for strings exactly than eight chars', () => {
      expect(Restrictions.AtLeastEightCharacters.validate('12345678')).to.eql(true);
    });
    it('should work for strings larger than eight chars', () => {
      expect(Restrictions.AtLeastEightCharacters.validate('123456789')).to.eql(true);
    });
  });

  describe('UppercaseLetters', () => {
    it('should fail on null and undefined', () => {
      expect(Restrictions.UppercaseLetters.validate(null)).to.eql(false);
      expect(Restrictions.UppercaseLetters.validate(undefined)).to.eql(false);
    });
    it('should work with mixed cases', () => {
      expect(Restrictions.UppercaseLetters.validate('aA1')).to.eql(true);
    });
    it('should work with uppercase only string', () => {
      expect(Restrictions.UppercaseLetters.validate('AAA')).to.eql(true);
    });
    it('should fail with only lowercase', () => {
      expect(Restrictions.UppercaseLetters.validate('aaa')).to.eql(false);
    });

  });

  describe('LowercaseLetters', () => {
    it('should fail on null and undefined', () => {
      expect(Restrictions.LowercaseLetters.validate(null)).to.eql(false);
      expect(Restrictions.LowercaseLetters.validate(undefined)).to.eql(false);
    });
    it('should work with mixed cases', () => {
      expect(Restrictions.LowercaseLetters.validate('aA1')).to.eql(true);
    });
    it('should work with loweercase only string', () => {
      expect(Restrictions.LowercaseLetters.validate('aaa')).to.eql(true);
      expect(Restrictions.LowercaseLetters.validate('a')).to.eql(true);
    });
    it('should fail with only uppercase', () => {
      expect(Restrictions.LowercaseLetters.validate('AAA')).to.eql(false);
    });

  });

  describe('Numbers', () => {
    it('should fail on null and undefined', () => {
      expect(Restrictions.Numbers.validate(null)).to.eql(false);
      expect(Restrictions.Numbers.validate(undefined)).to.eql(false);
    });
    it('should work with numeric chars only', () => {
      expect(Restrictions.Numbers.validate('1')).to.eql(true);
    });
    it('should work with mixed numeric and non-numeric chars', () => {
      expect(Restrictions.Numbers.validate('1a')).to.eql(true);
      expect(Restrictions.Numbers.validate('A1')).to.eql(true);
    });
    it('should work with only numeric chars', () => {
      expect(Restrictions.Numbers.validate('1')).to.eql(true);
      expect(Restrictions.Numbers.validate('123')).to.eql(true);
    });
    it('should fail without numeric chars', () => {
      expect(Restrictions.Numbers.validate('')).to.eql(false);
      expect(Restrictions.Numbers.validate('AAA')).to.eql(false);
    });
  });

  describe('Punctuation', () => {
    it('should fail on null and undefined', () => {
      expect(Restrictions.Punctuation.validate(null)).to.eql(false);
      expect(Restrictions.Punctuation.validate(undefined)).to.eql(false);
    });
    it('should work on dots only', () => {
      expect(Restrictions.Punctuation.validate('...')).to.eql(true);
    });
    it('should work on mixed string', () => {
      expect(Restrictions.Punctuation.validate('Hello!')).to.eql(true);
    });
    it('should fail on numbers only', () => {
      expect(Restrictions.Punctuation.validate('1')).to.eql(false);
    });
    it('should fail on chars only', () => {
      expect(Restrictions.Punctuation.validate('Aa')).to.eql(false);
    });
  });
});
