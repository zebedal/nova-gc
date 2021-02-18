import { startCalendar } from './calendar-setup';

export class Agenda {

    static init() {
        this.getAgendaItems().then(res => this.buildAgendaItems(res));
        startCalendar();
        this.openPeriodSelector();
        this.changePeriodEventListeners();
    }

    static async getAgendaItems() {
        try {
            const response = await fetch('../agendaItems.json');
            const data = await response.json();
            return data
        } catch (e) {
            console.log(e);
        }
    }

    static buildAgendaItems(agendaItems) {
        const hook = document.querySelector('.agenda-container');
        for(const item of agendaItems) {
            
            let htmlString = `<div class="agenda-item">
        <div class="agenda-item-icon"><img src="img/${item.iconUrl}"></div>
        <div class="agenda-item-details">
            <p class="agenda-item-details-title">${item.title}</p>
            <p class="agenda-item-details-date">${item.date}</p>
        </div>
    </div>`;
    hook.insertAdjacentHTML('beforeend', htmlString);
        }
    }

    static openPeriodSelector() {
        document.querySelector('.agenda .more-options-icon').addEventListener('click', e => {
            e.currentTarget.nextElementSibling.classList.toggle('open');
        });
    }

    static changePeriodEventListeners() {
        const selectors = Array.from(document.querySelectorAll('.selector-input.agenda'));
        selectors.forEach(selector => {
            selector.addEventListener('click', function(e) {
                this.classList.toggle('selected');
                selectors.filter(el => el != this).forEach(el => el.classList.remove('selected'));
            })
        })
        
    }

    static addAgendaItem(type, title, date) {

    }
}