import Backbone from 'backbone';

export default class TestOptions extends Backbone.Model {
  constructor() {
    super({ test: 1 });
  }

  get test() {
    return this.get('test');
  }
}
