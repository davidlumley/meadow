(function(){
  class Application {
    constructor() {
      this.renderer = PIXI.autoDetectRenderer(
        window.Engine.Window.width,
        window.Engine.Window.height,
        {}
      );
      document.body.appendChild(this.renderer.view);
      this.main_stage = new PIXI.Container();
      this.animate();

      window.Engine.Window.on_resize(() => {
        this.renderer.resize(
          window.Engine.Window.width,
          window.Engine.Window.height
        );
      });
    }

    animate() {
      this.renderer.render(this.main_stage);
      window.requestAnimationFrame(() => {
        this.animate();
      });
    }
  }

  if(window.Engine === undefined) {
    window.Engine = {};
  }

  window.Engine.Application = Application;
}());
