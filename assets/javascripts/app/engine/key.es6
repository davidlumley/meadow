(function(){

  class Key {
    constructor () {
      this.keys = [];
      this.codes = {
        'LEFT': 37,
        'UP': 38,
        'RIGHT': 39,
        'DOWN': 40,
        'A': 65,
        'W': 87,
        'D': 68,
        'S': 83,
      };
      document.addEventListener('keydown', (e) => {
        this.on_keydown(e.keyCode);
      });
      document.addEventListener('keyup', (e) => {
        this.on_keyup(e.keyCode);
      });
    }

    on_keydown(key_code) {
      if (!this.is_down(key_code)) {
        this.keys.push(key_code);
      }
    }

    on_keyup(key_code) {
      if (this.is_down(key_code)) {
        this.keys.splice(this.keys.indexOf(key_code), 1);
      }
    }

    is_down(key_code) {
      if (this.keys[key_code]) {
        key_code = this.keys[key_code];
      }
      if (this.keys.indexOf(key_code) == -1) {
        return false;
      } else {
        return true;
      }
    }
  }

  if(window.Engine === undefined) {
    window.Engine = {};
  }
  window.Engine.Key = new Key;
})();
