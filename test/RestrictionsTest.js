const Restrictions = require('../src/Restrictions');
const expect = require('chai').expect;

describe('Restrictions', function() {
  describe('NotEmpty', function() {
    it('should fail on empty string', function() {
      expect(Restrictions.NotEmpty.validate('')).to.eql(false);
    });
    it('should succeed on non-empty string', function() {
      expect(Restrictions.NotEmpty.validate('xxx')).to.eql(true);
    });
  });

  describe('AtLeastEightCharacters', function() {
    it('should not work for strings shorter than eight chars', function() {
      expect(Restrictions.AtLeastEightCharacters.validate('1234567')).to.eql(false);
    });
    it('should work for strings exactly than eight chars', function() {
      expect(Restrictions.AtLeastEightCharacters.validate('12345678')).to.eql(true);
    });
    it('should work for strings larger than eight chars', function() {
      expect(Restrictions.AtLeastEightCharacters.validate('123456789')).to.eql(true);
    });
  });

  describe('UppercaseLetters', function() {
    it('should work with mixed cases', function() {
      expect(Restrictions.UppercaseLetters.validate('aA1')).to.eql(true);
    });
    it('should work with uppercase only string', function() {
      expect(Restrictions.UppercaseLetters.validate('AAA')).to.eql(true);
    });
    it('should fail with only lowercase', function() {
      expect(Restrictions.UppercaseLetters.validate('aaa')).to.eql(false);
    });

  });

  describe('LowercaseLetters', function() {
    it('should work with mixed cases', function() {
      expect(Restrictions.LowercaseLetters.validate('aA1')).to.eql(true);
    });
    it('should work with loweercase only string', function() {
      expect(Restrictions.LowercaseLetters.validate('aaa')).to.eql(true);
      expect(Restrictions.LowercaseLetters.validate('a')).to.eql(true);
    });
    it('should fail with only uppercase', function() {
      expect(Restrictions.LowercaseLetters.validate('AAA')).to.eql(false);
    });

  });

  describe('Numbers', function() {
    it('should work with numeric chars only', function() {
      expect(Restrictions.Numbers.validate('1')).to.eql(true);
    });
    it('should work with mixed numeric and non-numeric chars', function() {
      expect(Restrictions.Numbers.validate('1a')).to.eql(true);
      expect(Restrictions.Numbers.validate('A1')).to.eql(true);
    });
    it('should work with only numeric chars', function() {
      expect(Restrictions.Numbers.validate('1')).to.eql(true);
      expect(Restrictions.Numbers.validate('123')).to.eql(true);
    });
    it('should fail without numeric chars', function() {
      expect(Restrictions.Numbers.validate('')).to.eql(false);
      expect(Restrictions.Numbers.validate('AAA')).to.eql(false);
    });
  });

  describe('Punctuation', function() {
    it('should work on dots only', function() {
      expect(Restrictions.Punctuation.validate('...')).to.eql(true);
    });
    it('should work on mixed string', function() {
      expect(Restrictions.Punctuation.validate('Hello!')).to.eql(true);
    });
    it('should fail on numbers only', function() {
      expect(Restrictions.Punctuation.validate('1')).to.eql(false);
    });
    it('should fail on chars only', function() {
      expect(Restrictions.Punctuation.validate('Aa')).to.eql(false);
    });
  });
});
