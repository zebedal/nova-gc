

import '../scss/style.scss';
import { Menu } from './modules/Menu';
import { Carteira } from './modules/Carteira';
import { Pipeline } from './modules/Pipeline';
import {Agenda} from './modules/Agenda';
import {init} from './modules/Tabs';

window.addEventListener('load', () => {
  Menu.init();
  Carteira.init();
  Pipeline.init();
  Agenda.init();

  init();
  
})


