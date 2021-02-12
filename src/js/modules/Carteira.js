export class Carteira {

    static boxesColors = ['#4D4F54', '#363636', '#606B72','#4D4F54'];

    static init() {
        this.getCarteiraBoxes().then(res => this.buildCarteiraBoxes(res));
    }

    static async getCarteiraBoxes() {
        try {
            const response = await fetch('../carteiraBoxes.json');
            const data = await response.json();
            return data
        } catch (e) {
            console.log(e);
        }
    }

    static buildCarteiraBoxes(boxes) {
        const hook = document.querySelector('.carteira-boxes-container');

        boxes.forEach((box, index) => {
            let htmlString = "";
            console.log(box.id);
            if (box.id == 1) {
                htmlString = `<div class="carteira-box triangle" style="background-color: ${this.boxesColors[index]}"><div class="carteira-box-icon"><div class="arrow-up green"></div></div><div class="carteira-box-text">${box.boxText}</div><div class="carteira-box-value">${box.boxValue}</div></div>`;
                hook.insertAdjacentHTML('beforeend', htmlString)
            }
            if(box.id == 2) {
                htmlString = `<div class="carteira-box triangle" style="background-color: ${this.boxesColors[index]}"><div class="carteira-box-icon"><div class="arrow-up red"></div></div><div class="carteira-box-text">${box.boxText}</div><div class="carteira-box-value">${box.boxValue}</div></div>`;
                hook.insertAdjacentHTML('beforeend', htmlString)
            }
            if(box.id == 3) {
                htmlString = `<div class="carteira-box" style="background-color: ${this.boxesColors[index]}"><div class="carteira-box-icon"><svg xmlns="http://www.w3.org/2000/svg" width="49.293" height="20" viewBox="0 0 49.293 31.543">
                <g id="group" transform="translate(0 0)">
                  <g id="Group_290" data-name="Group 290" transform="translate(13.892 0)">
                    <g id="Group_289" data-name="Group 289">
                      <path id="Path_418" data-name="Path 418" d="M163.54,109.954l-4.2-1.865a.822.822,0,0,1-.488-.751v-1.152a6.115,6.115,0,0,0,2.315-4.791V99.774a1.5,1.5,0,0,0,.772-1.308v-.157a6.131,6.131,0,0,0-6.124-6.124h-1.544a6.131,6.131,0,0,0-6.124,6.124v1.428a1.514,1.514,0,0,0,.576,1.213,1.409,1.409,0,0,0,.2.127v.319a6.115,6.115,0,0,0,2.315,4.79v1.152a.822.822,0,0,1-.488.751l-4.2,1.865a3.812,3.812,0,0,0-2.262,3.481V123a.722.722,0,1,0,1.444,0v-9.57a2.357,2.357,0,0,1,.015-.248l1.933,1.933a1.583,1.583,0,0,1,.467,1.127V123a.722.722,0,1,0,1.444,0v-6.759a3.017,3.017,0,0,0-.89-2.148l-2.3-2.305a2.359,2.359,0,0,1,.74-.52l4.125-1.833,3.059,3.059V123a.722.722,0,1,0,1.444,0V112.5l3.059-3.059,4.125,1.833a2.357,2.357,0,0,1,.74.52l-2.3,2.3a3.017,3.017,0,0,0-.89,2.148V123a.722.722,0,1,0,1.444,0v-6.759a1.583,1.583,0,0,1,.467-1.127l1.933-1.933a2.357,2.357,0,0,1,.015.248V123a.722.722,0,1,0,1.444,0v-9.57A3.813,3.813,0,0,0,163.54,109.954Zm-8.493,1.225-2.684-2.684a2.262,2.262,0,0,0,.319-1.156v-.294a6.119,6.119,0,0,0,4.73,0v.294a2.261,2.261,0,0,0,.319,1.156Zm0-5.1a4.685,4.685,0,0,1-4.68-4.68v-.325a4.269,4.269,0,0,0,1.311-.851.722.722,0,0,0-.98-1.061,2.594,2.594,0,0,1-1.072.64l-.019,0a.147.147,0,0,1-.012-.065V98.309a4.686,4.686,0,0,1,4.68-4.68h1.543a4.686,4.686,0,0,1,4.68,4.68v.157a.046.046,0,0,1-.033.047c-4.324.854-6.493-.755-7.224-1.487a.722.722,0,0,0-1.021,1.021c2.242,2.242,5.514,2.283,7.506,2.043v1.3A4.686,4.686,0,0,1,155.047,106.076Z" transform="translate(-144.292 -92.184)" fill="#fff"/>
                    </g>
                  </g>
                  <g id="Group_292" data-name="Group 292" transform="translate(0 3.859)">
                    <g id="Group_291" data-name="Group 291" transform="translate(0 0)">
                      <path id="Path_419" data-name="Path 419" d="M13.021,142.248V140.7a5.352,5.352,0,0,0-2.454-4.5,3.037,3.037,0,1,0-5.8,0,5.351,5.351,0,0,0-2.454,4.5v1.544a5.35,5.35,0,0,0,2.315,4.4v1.588a.817.817,0,0,1-.454.735l-2.5,1.249A3.021,3.021,0,0,0,0,152.94v6.287a.722.722,0,1,0,1.444,0v-5.974l1.176,1.176a1.583,1.583,0,0,1,.467,1.127v3.671a.722.722,0,1,0,1.444,0v-3.671a3.018,3.018,0,0,0-.89-2.148L2,151.771l-.024-.022a1.611,1.611,0,0,1,.345-.233l2.5-1.249a2.3,2.3,0,0,0,.358-.224l1.765,1.766v7.419a.722.722,0,1,0,1.444,0v-7.419l1.766-1.766a2.292,2.292,0,0,0,.358.224l.689.344a.722.722,0,1,0,.646-1.292l-.689-.344a.817.817,0,0,1-.454-.735v-1.588A5.35,5.35,0,0,0,13.021,142.248Zm-5.353-8.539A1.6,1.6,0,0,1,9.261,135.3a1.618,1.618,0,0,1-.025.285,5.352,5.352,0,0,0-3.134,0,1.583,1.583,0,0,1,1.566-1.877Zm0,3.087a3.913,3.913,0,0,1,3.909,3.909v.262A4.533,4.533,0,0,1,6.7,139.5a.722.722,0,0,0-1.088-.077A4.724,4.724,0,0,1,3.762,140.6,3.912,3.912,0,0,1,7.668,136.8Zm0,13.692L6,148.82a2.286,2.286,0,0,0,.075-.579v-.881a5.362,5.362,0,0,0,3.186,0v.881a2.286,2.286,0,0,0,.075.579Zm0-4.331a3.913,3.913,0,0,1-3.909-3.909v-.15a5.79,5.79,0,0,0,2.32-1.156,6.515,6.515,0,0,0,1.339.975,5.743,5.743,0,0,0,2.76.712,6.05,6.05,0,0,0,1.392-.167A3.913,3.913,0,0,1,7.668,146.157Z" transform="translate(0 -132.265)" fill="#fff"/>
                    </g>
                  </g>
                  <g id="Group_294" data-name="Group 294" transform="translate(34.729 5.402)">
                    <g id="Group_293" data-name="Group 293">
                      <path id="Path_420" data-name="Path 420" d="M373.611,163.17l-4.041-2.021a.817.817,0,0,1-.454-.735v-1.023a4.57,4.57,0,0,0,1.543-3.425v-.822h.05a.722.722,0,0,0,.722-.722v-1.544a4.586,4.586,0,0,0-4.581-4.581h-1.544a4.586,4.586,0,0,0-4.581,4.581v1.544a.722.722,0,0,0,.722.722h.05v.823a4.57,4.57,0,0,0,1.544,3.425v1.023a.817.817,0,0,1-.454.735.722.722,0,1,0,.646,1.292,2.3,2.3,0,0,0,.358-.224l1.766,1.766v9.734a.722.722,0,1,0,1.444,0v-9.734l1.765-1.766a2.291,2.291,0,0,0,.358.224l3.91,1.955-1.186,1.186a3.018,3.018,0,0,0-.89,2.148v5.987a.722.722,0,1,0,1.444,0V167.73a1.583,1.583,0,0,1,.467-1.127l1.123-1.123a1.609,1.609,0,0,1,.053.407v7.83a.722.722,0,1,0,1.444,0v-7.83A3.02,3.02,0,0,0,373.611,163.17Zm-11.441-9.618v-.673h0a3.14,3.14,0,0,1,3.137-3.137h1.544a3.14,3.14,0,0,1,3.137,3.137v.8a11.044,11.044,0,0,1-5.052-1.4.722.722,0,0,0-.911.09A4.729,4.729,0,0,1,362.17,153.552Zm3.909,9.111-1.669-1.669a2.286,2.286,0,0,0,.075-.579v-.154a4.577,4.577,0,0,0,3.186,0v.154a2.281,2.281,0,0,0,.075.579Zm0-3.56a3.14,3.14,0,0,1-3.137-3.137V154.8h0a6.11,6.11,0,0,0,1.695-1.034,12.828,12.828,0,0,0,4.579,1.3v.9A3.14,3.14,0,0,1,366.079,159.1Z" transform="translate(-360.726 -148.298)" fill="#fff"/>
                    </g>
                  </g>
                </g>
              </svg>
              </div><div class="carteira-box-value" style="font-size: 22px">${box.boxValue}</div><div class="carteira-box-text">${box.boxText}</div></div>`;
                hook.insertAdjacentHTML('beforeend', htmlString)
            }
            if(box.id == 4) {
                htmlString = `<div class="carteira-box" style="background-color: ${this.boxesColors[index]}"><div class="carteira-box-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28.735" height="20" viewBox="0 0 28.735 27.586">
                <g id="business-man-walking-with-suitcase" transform="translate(0)">
                  <g id="Group_4" data-name="Group 4">
                    <path id="Path_374" data-name="Path 374" d="M139.745,598.533c-.623.6-.384,1.42.532,1.83a2.7,2.7,0,0,0,2.781-.349c.311-.3,3.444-3.316,6.49-6.26l-2.431-2.335C143.6,594.817,139.977,598.306,139.745,598.533Z" transform="translate(-139.398 -573.007)" fill="#fff"/>
                    <path id="Path_375" data-name="Path 375" d="M266.739,2.383c0,1.318,1.624,2.386,3.626,2.386S273.99,3.7,273.99,2.383,272.367,0,270.365,0,266.739,1.066,266.739,2.383Z" transform="translate(-260.714)" fill="#fff"/>
                    <path id="Path_376" data-name="Path 376" d="M177.635,187.817H174.8v-.956c0-.258-.318-.467-.71-.467h-1.508a.744.744,0,0,0-.254-.669l-7.626-7.3a3.071,3.071,0,0,0-2.165-.76h-5.722a3.111,3.111,0,0,0-2,.627s-3.428,3.087-4.191,3.771a.771.771,0,0,0-.286.672c0,.5,0,3-.005,3.76,0,.55.675.994,1.505.994s1.512-.443,1.515-.991c0-.233,0-2.436,0-3.528l2.167-1.947v4.749a3.5,3.5,0,0,0,1.045,2.771c2.526,2.424,10.523,10.107,11.031,10.6a2.711,2.711,0,0,0,2.784.349c.915-.41,1.152-1.231.531-1.83-.153-.148-1.855-1.783-4.029-3.87h10.74c.51,0,.924-.272.924-.608v-4.76C178.559,188.089,178.146,187.817,177.635,187.817Zm-9.883-.956v.956h-2.734c-.51,0-.924.272-.924.608V191.1l-.911-.874V180.47l6.188,5.923h-.909C168.07,186.394,167.752,186.6,167.752,186.861Zm5.631.956h-4.212v-.489h4.212Z" transform="translate(-149.824 -172.136)" fill="#fff"/>
                  </g>
                </g>
              </svg>
              </div><div class="carteira-box-value" style="font-size: 22px">${box.boxValue}</div><div class="carteira-box-text">${box.boxText}</div></div>`;
                hook.insertAdjacentHTML('beforeend', htmlString)
            }
        });




        ;
    }
}