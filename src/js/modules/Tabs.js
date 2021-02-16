

export const init = () => {
    const tabHeaders = Array.from(document.querySelectorAll('.tab-header > div'));
    const tabBodies = Array.from(document.querySelectorAll('.tab-body > div'));
    const indicator = document.querySelector('.tab-indicator');
    const wrapper = document.querySelector('.inner-wrapper');

    wrapper.style.opacity = .3;
    wrapper.style.filter = 'blur(2px)';

    tabHeaders.forEach((el, index) => {
        el.addEventListener('click', e => {

            indicator.style.left = `calc(calc(100% / 3) * ${index})`;
            if (e.currentTarget.classList.contains('active')) {
                return false
            } else {
                e.currentTarget.classList.add('active');
                tabHeaders.filter(tab => tab != e.currentTarget).forEach(tab => tab.classList.remove('active'));

                //esconder o tab body activo no momento do click
                tabBodies.find(el => el.classList.contains('active')).classList.remove('active');
                tabBodies[index].classList.add('active');

            }
        })
    })
}