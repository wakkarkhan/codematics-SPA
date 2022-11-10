import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c69fe29 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _f1f0e232 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _68c709a1 = () => interopDefault(import('../pages/blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _0da317de = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _29ca0f1a = () => interopDefault(import('../pages/collection/index.vue' /* webpackChunkName: "pages/collection/index" */))
const _accbe00c = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _0611a140 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _082620c8 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _479be350 = () => interopDefault(import('../pages/about/team.vue' /* webpackChunkName: "pages/about/team" */))
const _565285aa = () => interopDefault(import('../pages/blog/detail-blog.vue' /* webpackChunkName: "pages/blog/detail-blog" */))
const _29f3fc4a = () => interopDefault(import('../pages/collection/detail-product.vue' /* webpackChunkName: "pages/collection/detail-product" */))
const _3d8ec74c = () => interopDefault(import('../pages/collection/products.vue' /* webpackChunkName: "pages/collection/products" */))
const _94ebbf46 = () => interopDefault(import('../pages/contact/with-map.vue' /* webpackChunkName: "pages/contact/with-map" */))
const _28bd03c0 = () => interopDefault(import('../pages/utils/coming-soon.vue' /* webpackChunkName: "pages/utils/coming-soon" */))
const _39ea98e2 = () => interopDefault(import('../pages/utils/faq.vue' /* webpackChunkName: "pages/utils/faq" */))
const _600f640c = () => interopDefault(import('../pages/utils/maintenance.vue' /* webpackChunkName: "pages/utils/maintenance" */))
const _5e3297bf = () => interopDefault(import('../pages/utils/pricing.vue' /* webpackChunkName: "pages/utils/pricing" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _3c69fe29,
    name: "index___ar"
  }, {
    path: "/de",
    component: _3c69fe29,
    name: "index___de"
  }, {
    path: "/en",
    component: _3c69fe29,
    name: "index___en"
  }, {
    path: "/id",
    component: _3c69fe29,
    name: "index___id"
  }, {
    path: "/pt",
    component: _3c69fe29,
    name: "index___pt"
  }, {
    path: "/zh",
    component: _3c69fe29,
    name: "index___zh"
  }, {
    path: "/ar/about",
    component: _f1f0e232,
    name: "about___ar"
  }, {
    path: "/ar/blank-page",
    component: _68c709a1,
    name: "blank-page___ar"
  }, {
    path: "/ar/blog",
    component: _0da317de,
    name: "blog___ar"
  }, {
    path: "/ar/collection",
    component: _29ca0f1a,
    name: "collection___ar"
  }, {
    path: "/ar/contact",
    component: _accbe00c,
    name: "contact___ar"
  }, {
    path: "/ar/login",
    component: _0611a140,
    name: "login___ar"
  }, {
    path: "/ar/register",
    component: _082620c8,
    name: "register___ar"
  }, {
    path: "/de/about",
    component: _f1f0e232,
    name: "about___de"
  }, {
    path: "/de/blank-page",
    component: _68c709a1,
    name: "blank-page___de"
  }, {
    path: "/de/blog",
    component: _0da317de,
    name: "blog___de"
  }, {
    path: "/de/collection",
    component: _29ca0f1a,
    name: "collection___de"
  }, {
    path: "/de/contact",
    component: _accbe00c,
    name: "contact___de"
  }, {
    path: "/de/login",
    component: _0611a140,
    name: "login___de"
  }, {
    path: "/de/register",
    component: _082620c8,
    name: "register___de"
  }, {
    path: "/en/about",
    component: _f1f0e232,
    name: "about___en"
  }, {
    path: "/en/blank-page",
    component: _68c709a1,
    name: "blank-page___en"
  }, {
    path: "/en/blog",
    component: _0da317de,
    name: "blog___en"
  }, {
    path: "/en/collection",
    component: _29ca0f1a,
    name: "collection___en"
  }, {
    path: "/en/contact",
    component: _accbe00c,
    name: "contact___en"
  }, {
    path: "/en/login",
    component: _0611a140,
    name: "login___en"
  }, {
    path: "/en/register",
    component: _082620c8,
    name: "register___en"
  }, {
    path: "/id/about",
    component: _f1f0e232,
    name: "about___id"
  }, {
    path: "/id/blank-page",
    component: _68c709a1,
    name: "blank-page___id"
  }, {
    path: "/id/blog",
    component: _0da317de,
    name: "blog___id"
  }, {
    path: "/id/collection",
    component: _29ca0f1a,
    name: "collection___id"
  }, {
    path: "/id/contact",
    component: _accbe00c,
    name: "contact___id"
  }, {
    path: "/id/login",
    component: _0611a140,
    name: "login___id"
  }, {
    path: "/id/register",
    component: _082620c8,
    name: "register___id"
  }, {
    path: "/pt/about",
    component: _f1f0e232,
    name: "about___pt"
  }, {
    path: "/pt/blank-page",
    component: _68c709a1,
    name: "blank-page___pt"
  }, {
    path: "/pt/blog",
    component: _0da317de,
    name: "blog___pt"
  }, {
    path: "/pt/collection",
    component: _29ca0f1a,
    name: "collection___pt"
  }, {
    path: "/pt/contact",
    component: _accbe00c,
    name: "contact___pt"
  }, {
    path: "/pt/login",
    component: _0611a140,
    name: "login___pt"
  }, {
    path: "/pt/register",
    component: _082620c8,
    name: "register___pt"
  }, {
    path: "/zh/about",
    component: _f1f0e232,
    name: "about___zh"
  }, {
    path: "/zh/blank-page",
    component: _68c709a1,
    name: "blank-page___zh"
  }, {
    path: "/zh/blog",
    component: _0da317de,
    name: "blog___zh"
  }, {
    path: "/zh/collection",
    component: _29ca0f1a,
    name: "collection___zh"
  }, {
    path: "/zh/contact",
    component: _accbe00c,
    name: "contact___zh"
  }, {
    path: "/zh/login",
    component: _0611a140,
    name: "login___zh"
  }, {
    path: "/zh/register",
    component: _082620c8,
    name: "register___zh"
  }, {
    path: "/ar/about/team",
    component: _479be350,
    name: "about-team___ar"
  }, {
    path: "/ar/blog/detail-blog",
    component: _565285aa,
    name: "blog-detail-blog___ar"
  }, {
    path: "/ar/collection/detail-product",
    component: _29f3fc4a,
    name: "collection-detail-product___ar"
  }, {
    path: "/ar/collection/products",
    component: _3d8ec74c,
    name: "collection-products___ar"
  }, {
    path: "/ar/contact/with-map",
    component: _94ebbf46,
    name: "contact-with-map___ar"
  }, {
    path: "/ar/utils/coming-soon",
    component: _28bd03c0,
    name: "utils-coming-soon___ar"
  }, {
    path: "/ar/utils/faq",
    component: _39ea98e2,
    name: "utils-faq___ar"
  }, {
    path: "/ar/utils/maintenance",
    component: _600f640c,
    name: "utils-maintenance___ar"
  }, {
    path: "/ar/utils/pricing",
    component: _5e3297bf,
    name: "utils-pricing___ar"
  }, {
    path: "/de/about/team",
    component: _479be350,
    name: "about-team___de"
  }, {
    path: "/de/blog/detail-blog",
    component: _565285aa,
    name: "blog-detail-blog___de"
  }, {
    path: "/de/collection/detail-product",
    component: _29f3fc4a,
    name: "collection-detail-product___de"
  }, {
    path: "/de/collection/products",
    component: _3d8ec74c,
    name: "collection-products___de"
  }, {
    path: "/de/contact/with-map",
    component: _94ebbf46,
    name: "contact-with-map___de"
  }, {
    path: "/de/utils/coming-soon",
    component: _28bd03c0,
    name: "utils-coming-soon___de"
  }, {
    path: "/de/utils/faq",
    component: _39ea98e2,
    name: "utils-faq___de"
  }, {
    path: "/de/utils/maintenance",
    component: _600f640c,
    name: "utils-maintenance___de"
  }, {
    path: "/de/utils/pricing",
    component: _5e3297bf,
    name: "utils-pricing___de"
  }, {
    path: "/en/about/team",
    component: _479be350,
    name: "about-team___en"
  }, {
    path: "/en/blog/detail-blog",
    component: _565285aa,
    name: "blog-detail-blog___en"
  }, {
    path: "/en/collection/detail-product",
    component: _29f3fc4a,
    name: "collection-detail-product___en"
  }, {
    path: "/en/collection/products",
    component: _3d8ec74c,
    name: "collection-products___en"
  }, {
    path: "/en/contact/with-map",
    component: _94ebbf46,
    name: "contact-with-map___en"
  }, {
    path: "/en/utils/coming-soon",
    component: _28bd03c0,
    name: "utils-coming-soon___en"
  }, {
    path: "/en/utils/faq",
    component: _39ea98e2,
    name: "utils-faq___en"
  }, {
    path: "/en/utils/maintenance",
    component: _600f640c,
    name: "utils-maintenance___en"
  }, {
    path: "/en/utils/pricing",
    component: _5e3297bf,
    name: "utils-pricing___en"
  }, {
    path: "/id/about/team",
    component: _479be350,
    name: "about-team___id"
  }, {
    path: "/id/blog/detail-blog",
    component: _565285aa,
    name: "blog-detail-blog___id"
  }, {
    path: "/id/collection/detail-product",
    component: _29f3fc4a,
    name: "collection-detail-product___id"
  }, {
    path: "/id/collection/products",
    component: _3d8ec74c,
    name: "collection-products___id"
  }, {
    path: "/id/contact/with-map",
    component: _94ebbf46,
    name: "contact-with-map___id"
  }, {
    path: "/id/utils/coming-soon",
    component: _28bd03c0,
    name: "utils-coming-soon___id"
  }, {
    path: "/id/utils/faq",
    component: _39ea98e2,
    name: "utils-faq___id"
  }, {
    path: "/id/utils/maintenance",
    component: _600f640c,
    name: "utils-maintenance___id"
  }, {
    path: "/id/utils/pricing",
    component: _5e3297bf,
    name: "utils-pricing___id"
  }, {
    path: "/pt/about/team",
    component: _479be350,
    name: "about-team___pt"
  }, {
    path: "/pt/blog/detail-blog",
    component: _565285aa,
    name: "blog-detail-blog___pt"
  }, {
    path: "/pt/collection/detail-product",
    component: _29f3fc4a,
    name: "collection-detail-product___pt"
  }, {
    path: "/pt/collection/products",
    component: _3d8ec74c,
    name: "collection-products___pt"
  }, {
    path: "/pt/contact/with-map",
    component: _94ebbf46,
    name: "contact-with-map___pt"
  }, {
    path: "/pt/utils/coming-soon",
    component: _28bd03c0,
    name: "utils-coming-soon___pt"
  }, {
    path: "/pt/utils/faq",
    component: _39ea98e2,
    name: "utils-faq___pt"
  }, {
    path: "/pt/utils/maintenance",
    component: _600f640c,
    name: "utils-maintenance___pt"
  }, {
    path: "/pt/utils/pricing",
    component: _5e3297bf,
    name: "utils-pricing___pt"
  }, {
    path: "/zh/about/team",
    component: _479be350,
    name: "about-team___zh"
  }, {
    path: "/zh/blog/detail-blog",
    component: _565285aa,
    name: "blog-detail-blog___zh"
  }, {
    path: "/zh/collection/detail-product",
    component: _29f3fc4a,
    name: "collection-detail-product___zh"
  }, {
    path: "/zh/collection/products",
    component: _3d8ec74c,
    name: "collection-products___zh"
  }, {
    path: "/zh/contact/with-map",
    component: _94ebbf46,
    name: "contact-with-map___zh"
  }, {
    path: "/zh/utils/coming-soon",
    component: _28bd03c0,
    name: "utils-coming-soon___zh"
  }, {
    path: "/zh/utils/faq",
    component: _39ea98e2,
    name: "utils-faq___zh"
  }, {
    path: "/zh/utils/maintenance",
    component: _600f640c,
    name: "utils-maintenance___zh"
  }, {
    path: "/zh/utils/pricing",
    component: _5e3297bf,
    name: "utils-pricing___zh"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
