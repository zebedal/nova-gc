export class Menu {


    static init() {
        this.getMenuItems().then(menuItemsObj => {
            this.buildMenu(menuItemsObj);
            this.openTabsListener();
            this.closeTabsListener();
        });
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
        let htmlString = "";
        for(const item of subMenuItems) {
            htmlString += `<li class="sub-menu-item"><a href="${item.subMenuUrl}">${item.menuText}</a></li>`;
        }
        return htmlString;
    }

    static buildMenu(menuItemsObj) {
        const hook = document.getElementById('navbar');
        for (const menuItem of menuItemsObj) {
            const htmlString = `<li class="menu-item" title=${menuItem.MenuToolTip.replace(/[ ]/g,"\u00a0")}>
            <a href="#" data-url=${menuItem.MenuHTMLId}>${menuItem.MenuText} </a><svg width="12.471" height="7.568" viewBox="0 0 12.471 7.568">
                <path class="chevron-down" 
                    d="M6.149,16.051.6,10.5a.685.685,0,0,1,0-.969l.647-.647a.685.685,0,0,1,.968,0l4.419,4.4,4.419-4.4a.685.685,0,0,1,.968,0l.647.647a.685.685,0,0,1,0,.969l-5.55,5.55A.685.685,0,0,1,6.149,16.051Z"
                    transform="translate(-0.398 -8.683)" fill="#363636" />
            </svg>
            ${menuItem.subMenuItems ? `<ul class="sub-menu">` : ""}
            ${menuItem.subMenuItems ? this.buildSubMenu(menuItem.subMenuItems) : ''}
            ${menuItem.subMenuItems ? `</ul>` : ""}
        </li>`;
            hook.insertAdjacentHTML("beforeend", htmlString);
        }
    }

    static openTabsListener() {
        document.querySelector('.user-notifications-wrapper').addEventListener('click', () => {
            const innerWrapper = document.querySelector('.inner-wrapper');
            innerWrapper.classList.add('blur');
            document.querySelector('.tabs').classList.add('open');
        })
    }

    static closeTabsListener() {
        const tabs = document.querySelector('.tabs');
        const closeTab = document.getElementById('closeTabs').addEventListener('click', () => {
            const innerWrapper = document.querySelector('.inner-wrapper');
            innerWrapper.classList.remove('blur');
            tabs.classList.remove('open');
        })
    }
}


