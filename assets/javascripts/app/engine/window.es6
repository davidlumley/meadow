(function(){

  class Window {
    constructor() {
      this.height = window.innerHeight;
      this.width = window.innerWidth;

      this.callback_function = () => {};
      this.timeout = undefined;

      window.onresize = () => {
        this.resize_callback();
      }
    }

    resize_callback() {
      if (this.timeout != undefined) {
        window.clearTimeout(this.timeout);
        this.timeout = undefined;
      }

      this.timeout = window.setTimeout( () => {
        this.height = window.innerHeight;
        this.width = window.innerWidth;

        this.callback_function();
      }, 50);
    }

    on_resize(callback_function) {
      this.callback_function = callback_function;
    }
  }

  if(window.Engine === undefined) {
    window.Engine = {};
  }

  window.Engine.Window = new Window();

}());
