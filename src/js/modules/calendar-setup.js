import '../../css/theme2.css';
import {caleandar} from './caleandar.min';

 export function startCalendar() {
    let events = [
        {'Date': new Date(2021, 1, 14), 'Title': 'Doctor appointment at 3:25pm.'},
        {'Date': new Date(2021, 1, 18), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},
        {'Date': new Date(2016, 6, 27), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
    ];
    
    const settings = {
      Color: '',
      LinkColor: '',
      NavShow: true,
      NavVertical: false,
      NavLocation: '',
      DateTimeShow: true,
      DateTimeFormat: 'mmm, yyyy',
      DatetimeLocation: '',
      EventClick: '',
      EventTargetWholeDay: false,
      DisabledDays: [],
      ModelChange: 'model'
    };
    
    
    const element = document.getElementById('caleandar');
    caleandar(element, events, settings);
}

