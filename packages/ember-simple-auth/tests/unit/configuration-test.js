import { module, test } from 'qunit';
import Configuration from 'ember-simple-auth/configuration';

module('Configuration', function(hooks) {
  hooks.afterEach(function() {
    Configuration.load({});
  });

  module('rootURL', function() {
    test('defaults to ""', function(assert) {
      Configuration.load({});

      assert.equal(Configuration.rootURL, '');
    });
  });

  module('routeAfterInvalidation', function() {
    test('defaults to ""', function(assert) {
      Configuration.load({});

      assert.equal(Configuration.routeAfterInvalidation, '');
    });
  });

  module('routeAfterAuthentication', function() {
    test('defaults to "index"', function(assert) {
      Configuration.load({});

      assert.equal(Configuration.routeAfterAuthentication, 'index');
    });
  });

  module('.load', function() {
    test('sets rootURL correctly', function(assert) {
      Configuration.load({ rootURL: '/rootURL' });

      assert.equal(Configuration.rootURL, '/rootURL');
    });

    test('sets routeAfterInvalidation correctly', function(assert) {
      Configuration.load({ routeAfterInvalidation: '/some-route' });

      assert.equal(Configuration.routeAfterInvalidation, '/some-route');
    });

    test('sets routeAfterAuthentication correctly', function(assert) {
      Configuration.load({ routeAfterAuthentication: '/some-route' });

      assert.equal(Configuration.routeAfterAuthentication, '/some-route');
    });
  });
});
