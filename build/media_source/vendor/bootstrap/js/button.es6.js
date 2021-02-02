import nojQueryMode from './nojquerymode.es6';
import Button from '../../../../../node_modules/bootstrap/js/src/button';

window.bootstrap = window.bootstrap || {};
window.bootstrap.Button = Button;

if (nojQueryMode && Joomla && Joomla.getOptions) {
  // Get the elements/configurations from the PHP
  const buttons = Joomla.getOptions('bootstrap.button');
  // Initialise the elements
  if (buttons && buttons.length) {
    buttons.forEach((selector) => {
      Array.from(document.querySelectorAll(selector))
        .map((el) => new window.bootstrap.Button(el));
    });
  }
}

export default Button;
