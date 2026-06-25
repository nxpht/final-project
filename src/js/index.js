import '../scss/style.scss'
import { createSwipers } from './swiper'
import { sidebar } from './sidebar'
import { tabsFn } from './tabs'
import { expand } from './expand'
createSwipers()

window.addEventListener('resize', createSwipers)
sidebar()
tabsFn()
expand()
