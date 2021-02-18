import buildChart from "./Chart";
import {utils} from '../utils/utils';


export class Pipeline {

    static init() {
        buildChart();
        this.getSum().then(res => {
            this.buildValues(res);
            this.openPeriodSelector();
            this.changePeriodEventListeners();
        });
    };


    static async getSum() {
        try {
            const response = await fetch('../getSum.json');
            const data = await response.json();
            return data
        } catch (e) {
            console.log(e);
        }
    }

    static buildValues(values) {
        const valueBoxes = document.querySelectorAll('.objectivo-global-box-value');
        values.forEach((el, index) => {
            let num = utils.numberToReal(el.TCV);
            console.log(num);
            valueBoxes[index].textContent = num + '€';
        });
       
    }

    static openPeriodSelector() {
        document.querySelector('.pipeline .more-options-icon').addEventListener('click', e => {
            e.currentTarget.nextElementSibling.classList.toggle('open');
        });
    }

    static changePeriodEventListeners() {
        const selectors = Array.from(document.querySelectorAll('.selector-input.pipeline'));
        selectors.forEach(selector => {
            selector.addEventListener('click', function(e) {
                this.classList.toggle('selected');
                selectors.filter(el => el != this).forEach(el => el.classList.remove('selected'));
            })
        })
        
    }
    
}