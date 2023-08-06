export class ComponentUtils {
  constructor() {
    this.timer = null;
  }
  debounce = (fn, d) => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      fn();
    }, d);
  };
}
