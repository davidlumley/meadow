(function(){

  class Point {
    constructor() {
    }

    static to_iso(point) {
      return {
        x : ((point.x - point.y) / 2),
        y : ((point.x + point.y) / 2),
      };
    }
    
  }

  if(window.Engine === undefined) {
    window.Engine = {};
  }
  window.Engine.Point = Point;

}());
