import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('backup-storage-usage', 'Integration | Component | backup storage usage', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{backup-storage-usage}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#backup-storage-usage}}
      template block text
    {{/backup-storage-usage}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
