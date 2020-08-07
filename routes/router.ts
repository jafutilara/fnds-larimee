const { Router } = require("express");

export const router = Router();

import * as _ from "../controllers/main";

router.get('/', _.root);
router.get('/checkout', _.checkout);


/**
 * @router
 * @cdn
 */

router.get('/assets/logo', _.siteLogo);
router.get('/assets/background', _.siteBackground);
router.get('/assets/name', _.siteName);
router.get('/assets/name3', _.siteNameTwo);
router.get('/MuseoSans.otf', _.font);
router.get('/stylesheets/main', _.mainCss);
router.get('/scripts/main', _.mainJs);
router.get('/media/first', _.first);
router.get('/media/second', _.second);
router.get('/assets/icon', _.icon);
router.get('/slider1.jpeg', _.sl1);
router.get('/slider2.jpeg', _.sl2);
router.get('/slider3.jpeg', _.sl3);
