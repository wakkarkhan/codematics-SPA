import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {"defaultBreakpoint":"default","breakpoints":{"xsDown":599,"xsUp":600,"smDown":959,"smUp":960,"mdDown":1279,"mdUp":1280,"lgDown":1919,"lgUp":1920,"xl":Infinity}})
