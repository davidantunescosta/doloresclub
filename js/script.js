import SlideNav from './modules/slide.js'
import initScrollSuave from './modules/scroll-suave.js'
import initMenuMobile from './modules/menu-mobile.js'


initScrollSuave()
initMenuMobile()


const slide = new SlideNav('.slide','.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next')
slide.addControl('.custom-controls')