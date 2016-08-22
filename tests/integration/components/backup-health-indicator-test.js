import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('backup-health-indicator', 'Integration | Component | backup health indicator', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{backup-health-indicator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#backup-health-indicator}}
      template block text
    {{/backup-health-indicator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
