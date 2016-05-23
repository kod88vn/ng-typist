import malarkey from 'malarkey';

class TypistController {
  constructor() {
    this.name = 'typist';
    var elem = document.querySelector('.' + this.config.id);
    var opts = {
      typeSpeed: this.config.typeSpeed,
      deleteSpeed: this.config.deleteSpeed,
      pauseDelay: this.config.pauseDelay,
      loop: this.config.loop,
      postfix: this.config.postfix
    };

    var act = malarkey(elem, opts);
    this.config.words.forEach(w => {
    	act.type(w).pause().delete();
    });
  }
}

export default TypistController;
