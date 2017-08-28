'use strict';

var _utils = require('./utils');

var MyComponent = function MyComponent() {
  return React.createElement('div', null);
};

describe('utils', function () {
  describe('renderList', function () {
    var LIST_LENGTH = 5;
    it('returns a list with the correct number of items', function () {
      var list = (0, _utils.renderList)(MyComponent, LIST_LENGTH);
      expect(list).toHaveLength(5);
    });
    it('returns a list where each item is an instance of the passed component', function () {
      var list = (0, _utils.renderList)(MyComponent, LIST_LENGTH);
      list.forEach(function (item) {
        expect(item.type).toEqual(MyComponent);
      });
    });
    it('properly applies props when `props` is an object', function () {
      var props = { testProp: 'hello' };
      var list = (0, _utils.renderList)(MyComponent, LIST_LENGTH, props);
      list.forEach(function (item) {
        expect(item.props).toEqual(props);
        // the props passed down to the component should be a clone
        // of the passed props, and should not have referential
        // equality with the passed props object
        expect(item.props).not.toBe(props);
      });
    });
    it('properly applies props when `props` is function which returns an object', function () {
      var props = function props(index) {
        return { testProp: 'hello ' + index };
      };
      var list = (0, _utils.renderList)(MyComponent, LIST_LENGTH, props);
      list.forEach(function (item, index) {
        expect(item.props).toEqual(props(index));
      });
    });
  });

  describe('compareRender', function () {
    it('sorts by inclusiveRenderTime ASC');
  });
});