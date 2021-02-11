export class Menu {


    static init() {
        this.getMenuItems().then(menuItemsObj => this.buildMenu(menuItemsObj));
    }

    static async getMenuItems() {
        try {
            const response = await fetch('../menus.json');
            const data = await response.json();
            return data
        } catch (e) {
            console.log(e);
        }
    }

    static buildSubMenu(subMenuItems) {
        return `<ul class="sub-menu">
        <li class="sub-menu-item"><a href="#">Sub item 1</a></li>
        <li class="sub-menu-item"><a href="#">Sub item 2</a></li>
        <li class="sub-menu-item"><a href="#">Sub item 3</a></li>
        <li class="sub-menu-item"><a href="#">Sub item 4</a></li>
        </ul>`;
    }



    static buildMenu(menuItemsObj) {
        const hook = document.getElementById('navbar');
        for (const menuItem of menuItemsObj) {
            console.log(menuItem.MenuToolTip);
            const htmlString = `<li class="menu-item" title=${menuItem.MenuToolTip.replace(/[ ]/g,"\u00a0")}>
            <a href="#" data-url=${menuItem.MenuHTMLId}>${menuItem.MenuText} </a><svg width="12.471" height="7.568" viewBox="0 0 12.471 7.568">
                <path class="chevron-down" 
                    d="M6.149,16.051.6,10.5a.685.685,0,0,1,0-.969l.647-.647a.685.685,0,0,1,.968,0l4.419,4.4,4.419-4.4a.685.685,0,0,1,.968,0l.647.647a.685.685,0,0,1,0,.969l-5.55,5.55A.685.685,0,0,1,6.149,16.051Z"
                    transform="translate(-0.398 -8.683)" fill="#363636" />
            </svg>
            ${menuItem.subMenuItems ? this.buildSubMenu(menuItem.subMenuItems) : ''}
            
        </li>`;

            hook.insertAdjacentHTML("beforeend", htmlString);




        }
    }
}


