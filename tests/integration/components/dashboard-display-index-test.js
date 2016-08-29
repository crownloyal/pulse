import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dashboard-display-index', 'Integration | Component | dashboard display index', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dashboard-display-index}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dashboard-display-index}}
      template block text
    {{/dashboard-display-index}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
