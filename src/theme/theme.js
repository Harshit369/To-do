import { EventEmitter } from 'events';
import { normal, dark } from './colors';

const themes = {
  normal,
  dark
}

class Theme extends EventEmitter {
  currentTheme = 'normal';
  
  setTheme (theme) {
    this.currentTheme = theme;
    this.emit('change');
  }

  getTheme() {
    return themes[this.currentTheme];
  }
}

export default new Theme();