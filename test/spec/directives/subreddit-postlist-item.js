'use strict';

describe('Directive: subredditPostlistItem', function () {

  // load the directive's module
  beforeEach(module('angledditApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<subreddit-postlist-item></subreddit-postlist-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the subredditPostlistItem directive');
  }));
});
