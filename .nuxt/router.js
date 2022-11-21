import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _21ff4601 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _ae99e474 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _50fce8c9 = () => interopDefault(import('..\\pages\\blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _61d3f45f = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _6f7622a3 = () => interopDefault(import('..\\pages\\collection\\index.vue' /* webpackChunkName: "pages/collection/index" */))
const _34980513 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _28b22dd0 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _913a95ec = () => interopDefault(import('..\\pages\\privacy-policy\\index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _5a3f0e78 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _808ed8da = () => interopDefault(import('..\\pages\\services-detail\\index.vue' /* webpackChunkName: "pages/services-detail/index" */))
const _a88890ce = () => interopDefault(import('..\\pages\\about\\team.vue' /* webpackChunkName: "pages/about/team" */))
const _49723d6b = () => interopDefault(import('..\\pages\\blog\\detail-blog.vue' /* webpackChunkName: "pages/blog/detail-blog" */))
const _758cd872 = () => interopDefault(import('..\\pages\\collection\\detail-product.vue' /* webpackChunkName: "pages/collection/detail-product" */))
const _11441b23 = () => interopDefault(import('..\\pages\\collection\\products.vue' /* webpackChunkName: "pages/collection/products" */))
const _5cd768a4 = () => interopDefault(import('..\\pages\\contact\\with-map.vue' /* webpackChunkName: "pages/contact/with-map" */))
const _422df997 = () => interopDefault(import('..\\pages\\utils\\coming-soon.vue' /* webpackChunkName: "pages/utils/coming-soon" */))
const _587e7066 = () => interopDefault(import('..\\pages\\utils\\faq.vue' /* webpackChunkName: "pages/utils/faq" */))
const _798059e3 = () => interopDefault(import('..\\pages\\utils\\maintenance.vue' /* webpackChunkName: "pages/utils/maintenance" */))
const _473e1116 = () => interopDefault(import('..\\pages\\utils\\pricing.vue' /* webpackChunkName: "pages/utils/pricing" */))

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
    component: _21ff4601,
    name: "index___ar"
  }, {
    path: "/de",
    component: _21ff4601,
    name: "index___de"
  }, {
    path: "/en",
    component: _21ff4601,
    name: "index___en"
  }, {
    path: "/id",
    component: _21ff4601,
    name: "index___id"
  }, {
    path: "/pt",
    component: _21ff4601,
    name: "index___pt"
  }, {
    path: "/zh",
    component: _21ff4601,
    name: "index___zh"
  }, {
    path: "/ar/about",
    component: _ae99e474,
    name: "about___ar"
  }, {
    path: "/ar/blank-page",
    component: _50fce8c9,
    name: "blank-page___ar"
  }, {
    path: "/ar/blog",
    component: _61d3f45f,
    name: "blog___ar"
  }, {
    path: "/ar/collection",
    component: _6f7622a3,
    name: "collection___ar"
  }, {
    path: "/ar/contact",
    component: _34980513,
    name: "contact___ar"
  }, {
    path: "/ar/login",
    component: _28b22dd0,
    name: "login___ar"
  }, {
    path: "/ar/privacy-policy",
    component: _913a95ec,
    name: "privacy-policy___ar"
  }, {
    path: "/ar/register",
    component: _5a3f0e78,
    name: "register___ar"
  }, {
    path: "/ar/services-detail",
    component: _808ed8da,
    name: "services-detail___ar"
  }, {
    path: "/de/about",
    component: _ae99e474,
    name: "about___de"
  }, {
    path: "/de/blank-page",
    component: _50fce8c9,
    name: "blank-page___de"
  }, {
    path: "/de/blog",
    component: _61d3f45f,
    name: "blog___de"
  }, {
    path: "/de/collection",
    component: _6f7622a3,
    name: "collection___de"
  }, {
    path: "/de/contact",
    component: _34980513,
    name: "contact___de"
  }, {
    path: "/de/login",
    component: _28b22dd0,
    name: "login___de"
  }, {
    path: "/de/privacy-policy",
    component: _913a95ec,
    name: "privacy-policy___de"
  }, {
    path: "/de/register",
    component: _5a3f0e78,
    name: "register___de"
  }, {
    path: "/de/services-detail",
    component: _808ed8da,
    name: "services-detail___de"
  }, {
    path: "/en/about",
    component: _ae99e474,
    name: "about___en"
  }, {
    path: "/en/blank-page",
    component: _50fce8c9,
    name: "blank-page___en"
  }, {
    path: "/en/blog",
    component: _61d3f45f,
    name: "blog___en"
  }, {
    path: "/en/collection",
    component: _6f7622a3,
    name: "collection___en"
  }, {
    path: "/en/contact",
    component: _34980513,
    name: "contact___en"
  }, {
    path: "/en/login",
    component: _28b22dd0,
    name: "login___en"
  }, {
    path: "/en/privacy-policy",
    component: _913a95ec,
    name: "privacy-policy___en"
  }, {
    path: "/en/register",
    component: _5a3f0e78,
    name: "register___en"
  }, {
    path: "/en/services-detail",
    component: _808ed8da,
    name: "services-detail___en"
  }, {
    path: "/id/about",
    component: _ae99e474,
    name: "about___id"
  }, {
    path: "/id/blank-page",
    component: _50fce8c9,
    name: "blank-page___id"
  }, {
    path: "/id/blog",
    component: _61d3f45f,
    name: "blog___id"
  }, {
    path: "/id/collection",
    component: _6f7622a3,
    name: "collection___id"
  }, {
    path: "/id/contact",
    component: _34980513,
    name: "contact___id"
  }, {
    path: "/id/login",
    component: _28b22dd0,
    name: "login___id"
  }, {
    path: "/id/privacy-policy",
    component: _913a95ec,
    name: "privacy-policy___id"
  }, {
    path: "/id/register",
    component: _5a3f0e78,
    name: "register___id"
  }, {
    path: "/id/services-detail",
    component: _808ed8da,
    name: "services-detail___id"
  }, {
    path: "/pt/about",
    component: _ae99e474,
    name: "about___pt"
  }, {
    path: "/pt/blank-page",
    component: _50fce8c9,
    name: "blank-page___pt"
  }, {
    path: "/pt/blog",
    component: _61d3f45f,
    name: "blog___pt"
  }, {
    path: "/pt/collection",
    component: _6f7622a3,
    name: "collection___pt"
  }, {
    path: "/pt/contact",
    component: _34980513,
    name: "contact___pt"
  }, {
    path: "/pt/login",
    component: _28b22dd0,
    name: "login___pt"
  }, {
    path: "/pt/privacy-policy",
    component: _913a95ec,
    name: "privacy-policy___pt"
  }, {
    path: "/pt/register",
    component: _5a3f0e78,
    name: "register___pt"
  }, {
    path: "/pt/services-detail",
    component: _808ed8da,
    name: "services-detail___pt"
  }, {
    path: "/zh/about",
    component: _ae99e474,
    name: "about___zh"
  }, {
    path: "/zh/blank-page",
    component: _50fce8c9,
    name: "blank-page___zh"
  }, {
    path: "/zh/blog",
    component: _61d3f45f,
    name: "blog___zh"
  }, {
    path: "/zh/collection",
    component: _6f7622a3,
    name: "collection___zh"
  }, {
    path: "/zh/contact",
    component: _34980513,
    name: "contact___zh"
  }, {
    path: "/zh/login",
    component: _28b22dd0,
    name: "login___zh"
  }, {
    path: "/zh/privacy-policy",
    component: _913a95ec,
    name: "privacy-policy___zh"
  }, {
    path: "/zh/register",
    component: _5a3f0e78,
    name: "register___zh"
  }, {
    path: "/zh/services-detail",
    component: _808ed8da,
    name: "services-detail___zh"
  }, {
    path: "/ar/about/team",
    component: _a88890ce,
    name: "about-team___ar"
  }, {
    path: "/ar/blog/detail-blog",
    component: _49723d6b,
    name: "blog-detail-blog___ar"
  }, {
    path: "/ar/collection/detail-product",
    component: _758cd872,
    name: "collection-detail-product___ar"
  }, {
    path: "/ar/collection/products",
    component: _11441b23,
    name: "collection-products___ar"
  }, {
    path: "/ar/contact/with-map",
    component: _5cd768a4,
    name: "contact-with-map___ar"
  }, {
    path: "/ar/utils/coming-soon",
    component: _422df997,
    name: "utils-coming-soon___ar"
  }, {
    path: "/ar/utils/faq",
    component: _587e7066,
    name: "utils-faq___ar"
  }, {
    path: "/ar/utils/maintenance",
    component: _798059e3,
    name: "utils-maintenance___ar"
  }, {
    path: "/ar/utils/pricing",
    component: _473e1116,
    name: "utils-pricing___ar"
  }, {
    path: "/de/about/team",
    component: _a88890ce,
    name: "about-team___de"
  }, {
    path: "/de/blog/detail-blog",
    component: _49723d6b,
    name: "blog-detail-blog___de"
  }, {
    path: "/de/collection/detail-product",
    component: _758cd872,
    name: "collection-detail-product___de"
  }, {
    path: "/de/collection/products",
    component: _11441b23,
    name: "collection-products___de"
  }, {
    path: "/de/contact/with-map",
    component: _5cd768a4,
    name: "contact-with-map___de"
  }, {
    path: "/de/utils/coming-soon",
    component: _422df997,
    name: "utils-coming-soon___de"
  }, {
    path: "/de/utils/faq",
    component: _587e7066,
    name: "utils-faq___de"
  }, {
    path: "/de/utils/maintenance",
    component: _798059e3,
    name: "utils-maintenance___de"
  }, {
    path: "/de/utils/pricing",
    component: _473e1116,
    name: "utils-pricing___de"
  }, {
    path: "/en/about/team",
    component: _a88890ce,
    name: "about-team___en"
  }, {
    path: "/en/blog/detail-blog",
    component: _49723d6b,
    name: "blog-detail-blog___en"
  }, {
    path: "/en/collection/detail-product",
    component: _758cd872,
    name: "collection-detail-product___en"
  }, {
    path: "/en/collection/products",
    component: _11441b23,
    name: "collection-products___en"
  }, {
    path: "/en/contact/with-map",
    component: _5cd768a4,
    name: "contact-with-map___en"
  }, {
    path: "/en/utils/coming-soon",
    component: _422df997,
    name: "utils-coming-soon___en"
  }, {
    path: "/en/utils/faq",
    component: _587e7066,
    name: "utils-faq___en"
  }, {
    path: "/en/utils/maintenance",
    component: _798059e3,
    name: "utils-maintenance___en"
  }, {
    path: "/en/utils/pricing",
    component: _473e1116,
    name: "utils-pricing___en"
  }, {
    path: "/id/about/team",
    component: _a88890ce,
    name: "about-team___id"
  }, {
    path: "/id/blog/detail-blog",
    component: _49723d6b,
    name: "blog-detail-blog___id"
  }, {
    path: "/id/collection/detail-product",
    component: _758cd872,
    name: "collection-detail-product___id"
  }, {
    path: "/id/collection/products",
    component: _11441b23,
    name: "collection-products___id"
  }, {
    path: "/id/contact/with-map",
    component: _5cd768a4,
    name: "contact-with-map___id"
  }, {
    path: "/id/utils/coming-soon",
    component: _422df997,
    name: "utils-coming-soon___id"
  }, {
    path: "/id/utils/faq",
    component: _587e7066,
    name: "utils-faq___id"
  }, {
    path: "/id/utils/maintenance",
    component: _798059e3,
    name: "utils-maintenance___id"
  }, {
    path: "/id/utils/pricing",
    component: _473e1116,
    name: "utils-pricing___id"
  }, {
    path: "/pt/about/team",
    component: _a88890ce,
    name: "about-team___pt"
  }, {
    path: "/pt/blog/detail-blog",
    component: _49723d6b,
    name: "blog-detail-blog___pt"
  }, {
    path: "/pt/collection/detail-product",
    component: _758cd872,
    name: "collection-detail-product___pt"
  }, {
    path: "/pt/collection/products",
    component: _11441b23,
    name: "collection-products___pt"
  }, {
    path: "/pt/contact/with-map",
    component: _5cd768a4,
    name: "contact-with-map___pt"
  }, {
    path: "/pt/utils/coming-soon",
    component: _422df997,
    name: "utils-coming-soon___pt"
  }, {
    path: "/pt/utils/faq",
    component: _587e7066,
    name: "utils-faq___pt"
  }, {
    path: "/pt/utils/maintenance",
    component: _798059e3,
    name: "utils-maintenance___pt"
  }, {
    path: "/pt/utils/pricing",
    component: _473e1116,
    name: "utils-pricing___pt"
  }, {
    path: "/zh/about/team",
    component: _a88890ce,
    name: "about-team___zh"
  }, {
    path: "/zh/blog/detail-blog",
    component: _49723d6b,
    name: "blog-detail-blog___zh"
  }, {
    path: "/zh/collection/detail-product",
    component: _758cd872,
    name: "collection-detail-product___zh"
  }, {
    path: "/zh/collection/products",
    component: _11441b23,
    name: "collection-products___zh"
  }, {
    path: "/zh/contact/with-map",
    component: _5cd768a4,
    name: "contact-with-map___zh"
  }, {
    path: "/zh/utils/coming-soon",
    component: _422df997,
    name: "utils-coming-soon___zh"
  }, {
    path: "/zh/utils/faq",
    component: _587e7066,
    name: "utils-faq___zh"
  }, {
    path: "/zh/utils/maintenance",
    component: _798059e3,
    name: "utils-maintenance___zh"
  }, {
    path: "/zh/utils/pricing",
    component: _473e1116,
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
