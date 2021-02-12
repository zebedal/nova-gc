

import '../scss/style.scss';
import {Menu} from './modules/Menu';
import {Carteira} from './modules/Carteira';
import buildChart from './modules/Chart';
import {startCalendar} from './modules/calendar-setup';

Menu.init();
Carteira.init();

window.addEventListener('load', () => {
    const chart = buildChart();
    startCalendar();
    
    /* const test = document.querySelector('[aria-labelledby=id-66-title]').style.display = 'none'; */
  

   
})


