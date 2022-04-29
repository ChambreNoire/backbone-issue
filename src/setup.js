import TestOptions from './testoptions.js';

export default class Test {
  test() {
    const testOptions = new TestOptions();
    console.log(testOptions.test);
  }
}
