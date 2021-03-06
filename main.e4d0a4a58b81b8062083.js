(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _appviews_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appviews/clothing/clothing.component */ "./src/app/appviews/clothing/clothing.component.ts");
/* harmony import */ var _appviews_gloves_gloves_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appviews/gloves/gloves.component */ "./src/app/appviews/gloves/gloves.component.ts");
/* harmony import */ var _appviews_kits_kits_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appviews/kits/kits.component */ "./src/app/appviews/kits/kits.component.ts");
/* harmony import */ var _appviews_masks_masks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appviews/masks/masks.component */ "./src/app/appviews/masks/masks.component.ts");
/* harmony import */ var _appviews_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appviews/product/product.component */ "./src/app/appviews/product/product.component.ts");
/* harmony import */ var _appviews_sanitizers_sanitizers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appviews/sanitizers/sanitizers.component */ "./src/app/appviews/sanitizers/sanitizers.component.ts");
/* harmony import */ var _appviews_ventilators_ventilators_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appviews/ventilators/ventilators.component */ "./src/app/appviews/ventilators/ventilators.component.ts");
/* harmony import */ var _appviews_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./appviews/recommended/recommended.component */ "./src/app/appviews/recommended/recommended.component.ts");
/* harmony import */ var _appviews_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appviews/about/about.component */ "./src/app/appviews/about/about.component.ts");
/* harmony import */ var _appviews_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./appviews/contact/contact.component */ "./src/app/appviews/contact/contact.component.ts");
/* harmony import */ var _appviews_m31826_m31826_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./appviews/m31826/m31826.component */ "./src/app/appviews/m31826/m31826.component.ts");
/* harmony import */ var _appviews_kit_allplex_kit_allplex_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./appviews/kit-allplex/kit-allplex.component */ "./src/app/appviews/kit-allplex/kit-allplex.component.ts");
/* harmony import */ var _appviews_kit_medakit_kit_medakit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./appviews/kit-medakit/kit-medakit.component */ "./src/app/appviews/kit-medakit/kit-medakit.component.ts");
/* harmony import */ var _appviews_vent_yh830_vent_yh830_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./appviews/vent-yh830/vent-yh830.component */ "./src/app/appviews/vent-yh830/vent-yh830.component.ts");
/* harmony import */ var _appviews_vent_vg70_vent_vg70_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./appviews/vent-vg70/vent-vg70.component */ "./src/app/appviews/vent-vg70/vent-vg70.component.ts");
/* harmony import */ var _appviews_mask3m8210_mask3m8210_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./appviews/mask3m8210/mask3m8210.component */ "./src/app/appviews/mask3m8210/mask3m8210.component.ts");
/* harmony import */ var _appviews_mask_kn95_mask_kn95_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./appviews/mask-kn95/mask-kn95.component */ "./src/app/appviews/mask-kn95/mask-kn95.component.ts");
/* harmony import */ var _appviews_mask3m1860_mask3m1860_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./appviews/mask3m1860/mask3m1860.component */ "./src/app/appviews/mask3m1860/mask3m1860.component.ts");
/* harmony import */ var _appviews_mask3_ply_mask3_ply_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./appviews/mask3-ply/mask3-ply.component */ "./src/app/appviews/mask3-ply/mask3-ply.component.ts");
/* harmony import */ var _appviews_mask_n95_mask_n95_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./appviews/mask-n95/mask-n95.component */ "./src/app/appviews/mask-n95/mask-n95.component.ts");
/* harmony import */ var _appviews_mask_n95_niosh_mask_n95_niosh_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./appviews/mask-n95-niosh/mask-n95-niosh.component */ "./src/app/appviews/mask-n95-niosh/mask-n95-niosh.component.ts");
/* harmony import */ var _appviews_mask_face_shield_mask_face_shield_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./appviews/mask-face-shield/mask-face-shield.component */ "./src/app/appviews/mask-face-shield/mask-face-shield.component.ts");
/* harmony import */ var _appviews_mask_goggles_mask_goggles_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./appviews/mask-goggles/mask-goggles.component */ "./src/app/appviews/mask-goggles/mask-goggles.component.ts");
/* harmony import */ var _appviews_sanitizer_gallon_sanitizer_gallon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./appviews/sanitizer-gallon/sanitizer-gallon.component */ "./src/app/appviews/sanitizer-gallon/sanitizer-gallon.component.ts");
/* harmony import */ var _appviews_sanitizer16_sanitizer16_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./appviews/sanitizer16/sanitizer16.component */ "./src/app/appviews/sanitizer16/sanitizer16.component.ts");
/* harmony import */ var _appviews_gown_surgical_gown_surgical_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./appviews/gown-surgical/gown-surgical.component */ "./src/app/appviews/gown-surgical/gown-surgical.component.ts");
/* harmony import */ var _appviews_gown_isolation_gown_isolation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./appviews/gown-isolation/gown-isolation.component */ "./src/app/appviews/gown-isolation/gown-isolation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var routes = [
    {
        path: '',
        component: _appviews_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_9__["RecommendedComponent"],
        pathMatch: 'full'
    },
    {
        path: 'clothing',
        component: _appviews_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_2__["ClothingComponent"],
        pathMatch: 'full'
    },
    {
        path: 'gloves',
        component: _appviews_gloves_gloves_component__WEBPACK_IMPORTED_MODULE_3__["GlovesComponent"],
        pathMatch: 'full'
    },
    {
        path: 'kits',
        component: _appviews_kits_kits_component__WEBPACK_IMPORTED_MODULE_4__["KitsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'masks',
        component: _appviews_masks_masks_component__WEBPACK_IMPORTED_MODULE_5__["MasksComponent"],
        pathMatch: 'full'
    },
    {
        path: 'product',
        component: _appviews_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
        pathMatch: 'full'
    },
    {
        path: 'kits',
        component: _appviews_kits_kits_component__WEBPACK_IMPORTED_MODULE_4__["KitsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'sanitizers',
        component: _appviews_sanitizers_sanitizers_component__WEBPACK_IMPORTED_MODULE_7__["SanitizersComponent"],
        pathMatch: 'full'
    },
    {
        path: 'ventilators',
        component: _appviews_ventilators_ventilators_component__WEBPACK_IMPORTED_MODULE_8__["VentilatorsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: _appviews_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: _appviews_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
        pathMatch: 'full'
    },
    {
        path: '3m1826',
        component: _appviews_m31826_m31826_component__WEBPACK_IMPORTED_MODULE_12__["M31826Component"],
        pathMatch: 'full'
    },
    {
        path: 'allplex',
        component: _appviews_kit_allplex_kit_allplex_component__WEBPACK_IMPORTED_MODULE_13__["KitAllplexComponent"],
        pathMatch: 'full'
    },
    {
        path: 'medakit',
        component: _appviews_kit_medakit_kit_medakit_component__WEBPACK_IMPORTED_MODULE_14__["KitMedakitComponent"],
        pathMatch: 'full'
    },
    {
        path: 'vg70',
        component: _appviews_vent_vg70_vent_vg70_component__WEBPACK_IMPORTED_MODULE_16__["VentVG70Component"],
        pathMatch: 'full'
    },
    {
        path: 'yh830',
        component: _appviews_vent_yh830_vent_yh830_component__WEBPACK_IMPORTED_MODULE_15__["VentYH830Component"],
        pathMatch: 'full'
    },
    {
        path: '3m8210',
        component: _appviews_mask3m8210_mask3m8210_component__WEBPACK_IMPORTED_MODULE_17__["Mask3m8210Component"],
        pathMatch: 'full'
    },
    {
        path: 'kn95',
        component: _appviews_mask_kn95_mask_kn95_component__WEBPACK_IMPORTED_MODULE_18__["MaskKN95Component"],
        pathMatch: 'full'
    },
    {
        path: '3m1860',
        component: _appviews_mask3m1860_mask3m1860_component__WEBPACK_IMPORTED_MODULE_19__["Mask3m1860Component"],
        pathMatch: 'full'
    },
    {
        path: '3ply',
        component: _appviews_mask3_ply_mask3_ply_component__WEBPACK_IMPORTED_MODULE_20__["Mask3PlyComponent"],
        pathMatch: 'full'
    },
    {
        path: 'n95',
        component: _appviews_mask_n95_mask_n95_component__WEBPACK_IMPORTED_MODULE_21__["MaskN95Component"],
        pathMatch: 'full'
    },
    {
        path: 'n95niosh',
        component: _appviews_mask_n95_niosh_mask_n95_niosh_component__WEBPACK_IMPORTED_MODULE_22__["MaskN95NioshComponent"],
        pathMatch: 'full'
    },
    {
        path: 'shield',
        component: _appviews_mask_face_shield_mask_face_shield_component__WEBPACK_IMPORTED_MODULE_23__["MaskFaceShieldComponent"],
        pathMatch: 'full'
    },
    {
        path: 'goggles',
        component: _appviews_mask_goggles_mask_goggles_component__WEBPACK_IMPORTED_MODULE_24__["MaskGogglesComponent"],
        pathMatch: 'full'
    },
    {
        path: 'sanitizer16',
        component: _appviews_sanitizer16_sanitizer16_component__WEBPACK_IMPORTED_MODULE_26__["Sanitizer16Component"],
        pathMatch: 'full'
    },
    {
        path: 'sanitizergallon',
        component: _appviews_sanitizer_gallon_sanitizer_gallon_component__WEBPACK_IMPORTED_MODULE_25__["SanitizerGallonComponent"],
        pathMatch: 'full'
    },
    {
        path: 'surgicalgown',
        component: _appviews_gown_surgical_gown_surgical_component__WEBPACK_IMPORTED_MODULE_27__["GownSurgicalComponent"],
        pathMatch: 'full'
    },
    {
        path: 'isolationgown',
        component: _appviews_gown_isolation_gown_isolation_component__WEBPACK_IMPORTED_MODULE_28__["GownIsolationComponent"],
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    // useHash: true,
                    scrollPositionRestoration: 'enabled',
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper1{\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n/*.header1{*/\n/*flex-shrink: 0;*/\n/*flex-grow: 0;*/\n/*background: #039be5;*/\n/*padding: 3px 5px;*/\n/*}*/\n/*.content1{*/\n/*flex-shrink: 1;*/\n/*flex-grow: 1;*/\n/*padding: 3px 5px;*/\n/*position: relative;*/\n/*overflow-y: auto;*/\n/*}*/\n.footer1{\n\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper1\">\n\n  <div class=\"header1\">\n    <app-nav></app-nav>\n    <app-tabs></app-tabs>\n\n  <router-outlet></router-outlet>\n  </div>\n\n  <div class=\"footer1\">\n  <app-footer></app-footer>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'masks';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _appviews_all_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appviews/all/all.component */ "./src/app/appviews/all/all.component.ts");
/* harmony import */ var _appviews_masks_masks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appviews/masks/masks.component */ "./src/app/appviews/masks/masks.component.ts");
/* harmony import */ var _appviews_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appviews/clothing/clothing.component */ "./src/app/appviews/clothing/clothing.component.ts");
/* harmony import */ var _appviews_sanitizers_sanitizers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appviews/sanitizers/sanitizers.component */ "./src/app/appviews/sanitizers/sanitizers.component.ts");
/* harmony import */ var _appviews_kits_kits_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./appviews/kits/kits.component */ "./src/app/appviews/kits/kits.component.ts");
/* harmony import */ var _appviews_gloves_gloves_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appviews/gloves/gloves.component */ "./src/app/appviews/gloves/gloves.component.ts");
/* harmony import */ var _appviews_product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./appviews/product/product.component */ "./src/app/appviews/product/product.component.ts");
/* harmony import */ var _appviews_ventilators_ventilators_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./appviews/ventilators/ventilators.component */ "./src/app/appviews/ventilators/ventilators.component.ts");
/* harmony import */ var _appviews_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./appviews/nav/nav.component */ "./src/app/appviews/nav/nav.component.ts");
/* harmony import */ var _appviews_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./appviews/footer/footer.component */ "./src/app/appviews/footer/footer.component.ts");
/* harmony import */ var _appviews_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./appviews/tabs/tabs.component */ "./src/app/appviews/tabs/tabs.component.ts");
/* harmony import */ var _appviews_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./appviews/recommended/recommended.component */ "./src/app/appviews/recommended/recommended.component.ts");
/* harmony import */ var _appviews_about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./appviews/about/about.component */ "./src/app/appviews/about/about.component.ts");
/* harmony import */ var _appviews_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./appviews/contact/contact.component */ "./src/app/appviews/contact/contact.component.ts");
/* harmony import */ var _appviews_m31826_m31826_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./appviews/m31826/m31826.component */ "./src/app/appviews/m31826/m31826.component.ts");
/* harmony import */ var _appviews_kit_allplex_kit_allplex_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./appviews/kit-allplex/kit-allplex.component */ "./src/app/appviews/kit-allplex/kit-allplex.component.ts");
/* harmony import */ var _appviews_kit_medakit_kit_medakit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./appviews/kit-medakit/kit-medakit.component */ "./src/app/appviews/kit-medakit/kit-medakit.component.ts");
/* harmony import */ var _appviews_vent_yh830_vent_yh830_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./appviews/vent-yh830/vent-yh830.component */ "./src/app/appviews/vent-yh830/vent-yh830.component.ts");
/* harmony import */ var _appviews_vent_vg70_vent_vg70_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./appviews/vent-vg70/vent-vg70.component */ "./src/app/appviews/vent-vg70/vent-vg70.component.ts");
/* harmony import */ var _appviews_mask3m8210_mask3m8210_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./appviews/mask3m8210/mask3m8210.component */ "./src/app/appviews/mask3m8210/mask3m8210.component.ts");
/* harmony import */ var _appviews_mask_kn95_mask_kn95_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./appviews/mask-kn95/mask-kn95.component */ "./src/app/appviews/mask-kn95/mask-kn95.component.ts");
/* harmony import */ var _appviews_mask3m1860_mask3m1860_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./appviews/mask3m1860/mask3m1860.component */ "./src/app/appviews/mask3m1860/mask3m1860.component.ts");
/* harmony import */ var _appviews_mask3_ply_mask3_ply_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./appviews/mask3-ply/mask3-ply.component */ "./src/app/appviews/mask3-ply/mask3-ply.component.ts");
/* harmony import */ var _appviews_mask_n95_mask_n95_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./appviews/mask-n95/mask-n95.component */ "./src/app/appviews/mask-n95/mask-n95.component.ts");
/* harmony import */ var _appviews_mask_n95_niosh_mask_n95_niosh_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./appviews/mask-n95-niosh/mask-n95-niosh.component */ "./src/app/appviews/mask-n95-niosh/mask-n95-niosh.component.ts");
/* harmony import */ var _appviews_mask_face_shield_mask_face_shield_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./appviews/mask-face-shield/mask-face-shield.component */ "./src/app/appviews/mask-face-shield/mask-face-shield.component.ts");
/* harmony import */ var _appviews_mask_goggles_mask_goggles_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./appviews/mask-goggles/mask-goggles.component */ "./src/app/appviews/mask-goggles/mask-goggles.component.ts");
/* harmony import */ var _appviews_sanitizer16_sanitizer16_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./appviews/sanitizer16/sanitizer16.component */ "./src/app/appviews/sanitizer16/sanitizer16.component.ts");
/* harmony import */ var _appviews_sanitizer_gallon_sanitizer_gallon_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./appviews/sanitizer-gallon/sanitizer-gallon.component */ "./src/app/appviews/sanitizer-gallon/sanitizer-gallon.component.ts");
/* harmony import */ var _appviews_gown_surgical_gown_surgical_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./appviews/gown-surgical/gown-surgical.component */ "./src/app/appviews/gown-surgical/gown-surgical.component.ts");
/* harmony import */ var _appviews_gown_isolation_gown_isolation_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./appviews/gown-isolation/gown-isolation.component */ "./src/app/appviews/gown-isolation/gown-isolation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _appviews_all_all_component__WEBPACK_IMPORTED_MODULE_5__["AllComponent"],
                _appviews_masks_masks_component__WEBPACK_IMPORTED_MODULE_6__["MasksComponent"],
                _appviews_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_7__["ClothingComponent"],
                _appviews_sanitizers_sanitizers_component__WEBPACK_IMPORTED_MODULE_8__["SanitizersComponent"],
                _appviews_kits_kits_component__WEBPACK_IMPORTED_MODULE_9__["KitsComponent"],
                _appviews_gloves_gloves_component__WEBPACK_IMPORTED_MODULE_10__["GlovesComponent"],
                _appviews_product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                _appviews_ventilators_ventilators_component__WEBPACK_IMPORTED_MODULE_12__["VentilatorsComponent"],
                _appviews_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
                _appviews_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _appviews_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__["TabsComponent"],
                _appviews_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_16__["RecommendedComponent"],
                _appviews_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
                _appviews_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
                _appviews_m31826_m31826_component__WEBPACK_IMPORTED_MODULE_19__["M31826Component"],
                _appviews_kit_allplex_kit_allplex_component__WEBPACK_IMPORTED_MODULE_20__["KitAllplexComponent"],
                _appviews_kit_medakit_kit_medakit_component__WEBPACK_IMPORTED_MODULE_21__["KitMedakitComponent"],
                _appviews_vent_yh830_vent_yh830_component__WEBPACK_IMPORTED_MODULE_22__["VentYH830Component"],
                _appviews_vent_vg70_vent_vg70_component__WEBPACK_IMPORTED_MODULE_23__["VentVG70Component"],
                _appviews_mask3m8210_mask3m8210_component__WEBPACK_IMPORTED_MODULE_24__["Mask3m8210Component"],
                _appviews_mask_kn95_mask_kn95_component__WEBPACK_IMPORTED_MODULE_25__["MaskKN95Component"],
                _appviews_mask3m1860_mask3m1860_component__WEBPACK_IMPORTED_MODULE_26__["Mask3m1860Component"],
                _appviews_mask3_ply_mask3_ply_component__WEBPACK_IMPORTED_MODULE_27__["Mask3PlyComponent"],
                _appviews_mask_n95_mask_n95_component__WEBPACK_IMPORTED_MODULE_28__["MaskN95Component"],
                _appviews_mask_n95_niosh_mask_n95_niosh_component__WEBPACK_IMPORTED_MODULE_29__["MaskN95NioshComponent"],
                _appviews_mask_face_shield_mask_face_shield_component__WEBPACK_IMPORTED_MODULE_30__["MaskFaceShieldComponent"],
                _appviews_mask_goggles_mask_goggles_component__WEBPACK_IMPORTED_MODULE_31__["MaskGogglesComponent"],
                _appviews_sanitizer16_sanitizer16_component__WEBPACK_IMPORTED_MODULE_32__["Sanitizer16Component"],
                _appviews_sanitizer_gallon_sanitizer_gallon_component__WEBPACK_IMPORTED_MODULE_33__["SanitizerGallonComponent"],
                _appviews_gown_surgical_gown_surgical_component__WEBPACK_IMPORTED_MODULE_34__["GownSurgicalComponent"],
                _appviews_gown_isolation_gown_isolation_component__WEBPACK_IMPORTED_MODULE_35__["GownIsolationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/' }
                // , {provide: LocationStrategy, useClass: HashLocationStrategy}
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appviews/about/about.component.css":
/*!****************************************************!*\
  !*** ./src/app/appviews/about/about.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-green {\n    color: #269da1;\n}\n"

/***/ }),

/***/ "./src/app/appviews/about/about.component.html":
/*!*****************************************************!*\
  !*** ./src/app/appviews/about/about.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<!--<section id=\"about\">-->\n  <div class=\"container my-5\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto text-center\">\n        <!--<h2 class=\"section-heading text-white\">Check out the 90 second pitch video!</h2>-->\n        <h2 class=\"section-heading\">About rsmed.github.io</h2>\n        <hr class=\"my-4\">\n        <p class=\" mb-4\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>\n        <p class=\" mb-4\">\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>\n        <!--<p class=\"text-faded mb-4\"><video height=\"500px\" controls=\"controls\" src=\"lasertagvid.MOV\"></video></p>-->\n        <a class=\"btn btn-primary btn-xl js-scroll-trigger\" routerLink=\"\">Buy Masks</a>\n      </div>\n    </div>\n  </div>\n<!--</section>-->\n"

/***/ }),

/***/ "./src/app/appviews/about/about.component.ts":
/*!***************************************************!*\
  !*** ./src/app/appviews/about/about.component.ts ***!
  \***************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/appviews/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/appviews/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/appviews/all/all.component.css":
/*!************************************************!*\
  !*** ./src/app/appviews/all/all.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/all/all.component.html":
/*!*************************************************!*\
  !*** ./src/app/appviews/all/all.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"\">\n      <!--<div class=\"container\">-->\n        <!--<div class=\"row\" >-->\n          <!--<div class=\"col-lg-12 text-center\">-->\n            <!--<h2 class=\"section-heading\">Products</h2>-->\n            <!--<hr class=\"my-4\">-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n      <div class=\"container-fluid\" id=\"products\">\n        <div class=\"row\">\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"assets/img/PRM.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">4 ply N95 Surgical Mask</h5>\n              <br><br class=\"d-xl-none\">\n              <p class=\"text-muted mb-0\">Our PRM-95 is a 4 Ply filter mask with a carbon layer with more filtration and highly comparable to the N95 filters in the marketplace.</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"1\"\n  data-item-price=\"2.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"Our PRM-95 is a 4 Ply filter mask with a carbon layer with more filtration and highly comparable to the N95 filters in the marketplace.\"\n  data-item-image=\"assets/img/PRM.png\"\n  data-item-name=\"4 ply N95 Surgical Mask\">\n  Add to cart\n</button>\n\n\n\n\n\n\n\n\n            </div>\n          </div>\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"assets/img/KN95.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">KN95 Respirator Face Mask</h5>\n              <br>\n              <p class=\"text-muted mb-0\">Multilayer protection: Filters out 95% of air born pollutants. Adjustable nose bridge and elastic ear loop for a tight seal</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n\n\n\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"2\"\n  data-item-price=\"4.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"Multilayer protection: Filters out 95% of air born pollutants. Adjustable nose bridge and elastic ear loop for a tight seal.\"\n  data-item-image=\"assets/img/KN95.png\"\n  data-item-name=\"KN95 Respirator Face Mask\">\n  Add to cart\n</button>\n\n\n\n\n            </div>\n          </div>\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"assets/img/N95.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">NIOSH Particulate Respirator Mask</h5>\n              <br>\n              <p class=\"text-muted mb-0\">Niosh Particulate Respirator Mask Filters out 95% of air born pollutants. Meets CDC guidelines for exposure control</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"3\"\n  data-item-price=\"5.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"Niosh Particulate Respirator Mask Filters out 95% of air born pollutants. Meets CDC guidelines for exposure control.\"\n  data-item-image=\"assets/img/N95.png\"\n  data-item-name=\"NIOSH Particulate Respirator Mask\">\n  Add to cart\n</button>\n\n\n\n            </div>\n          </div>\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"assets/img/3M3.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">FFP3 Surgical Mask 3 Ply</h5>\n              <br>\n              <p class=\"text-muted mb-0\">SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n\n\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n\n\n\n\n            </div>\n          </div>\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"assets/img/3M1860.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">3M 1860 Respirator Mask</h5>\n              <br>\n              <p class=\"text-muted mb-0\">3M 1860 Respirator Mask FDA Cleared for use as surgical mask, >99% BFE (Bacterial Filtration Efficiency) according to ASTM F2101 and Fluid resistant according to ASTM F1862</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n\n\n\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"5\"\n  data-item-price=\"7.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"3M 1860 Respirator Mask FDA Cleared for use as surgical mask, >99% BFE (Bacterial Filtration Efficiency) according to ASTM F2101 and Fluid resistant according to ASTM F1862.\"\n  data-item-image=\"assets/img/3M1860.png\"\n  data-item-name=\"3M 1860 Respirator Mask\">\n  Add to cart\n</button>\n\n\n\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n"

/***/ }),

/***/ "./src/app/appviews/all/all.component.ts":
/*!***********************************************!*\
  !*** ./src/app/appviews/all/all.component.ts ***!
  \***********************************************/
/*! exports provided: AllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllComponent", function() { return AllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllComponent = /** @class */ (function () {
    function AllComponent() {
    }
    AllComponent.prototype.ngOnInit = function () {
    };
    AllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all',
            template: __webpack_require__(/*! ./all.component.html */ "./src/app/appviews/all/all.component.html"),
            styles: [__webpack_require__(/*! ./all.component.css */ "./src/app/appviews/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/appviews/clothing/clothing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/appviews/clothing/clothing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/clothing/clothing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/appviews/clothing/clothing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"products\">\n\n\n\n\n\n\n\n\n    <div class=\"row my-4 d-flex justify-content-center\">\n\n\n      <!--one-->\n      <div class=\"col-12 col-sm-6 col-lg-4 text-center d-flex flex-column justify-content-between\">\n\n\n            <div class=\"service-box mt-5 mx-auto\">\n              <a routerLink=\"../surgicalgown\"><img style=\"max-height: 250px\" src=\"assets/img/surgicalgown.jpg\"></a>\n              <br><br>\n                <a routerLink=\"../surgicalgown\"><h5 class=\"mb-3\" style=\"font-weight: bold\">Disposable Surgical Gowns</h5></a>\n              <br>\n              <p class=\"text-muted mb-0\">3120 Standard High-Performance Gown, 45g\nPolycarbonate, Disposable, Anti-static, Splash Resistant\nStandard EN 13795:2019, FDA & CE Certified.\nUsed to reduce infection and create a layer of protection\nagainst splash.</p>\n              <br>\n            </div>\n\n\n            <div class=\"pb-4\">\n\n\n\n\n\n                <button class=\"snipcart-add-item btn btn-primary\"\n                  data-item-id=\"4\"\n                  data-item-price=\"3.99\"\n                  data-item-url=\"https://rsmed.github.io/products.json\"\n                  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                  data-item-image=\"assets/img/3M3.png\"\n                  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                  Add to cart\n                </button>\n\n            </div>\n\n\n      </div>\n\n\n      <!--two-->\n      <div class=\"col-12 col-sm-6 col-lg-4 text-center d-flex flex-column justify-content-between\">\n\n\n            <div class=\"service-box mt-5 mx-auto\">\n              <a routerLink=\"../isolationgown\"><img style=\"max-height: 250px\" src=\"assets/img/isolationgown.jpg\"></a>\n              <br><br>\n              <a routerLink=\"../isolationgown\"><h5 class=\"mb-3\" style=\"font-weight: bold\">Disposable Isolation Gowns</h5></a>\n              <br>\n              <p class=\"text-muted mb-0\">Non-sterile non-surgical Isolation gown.\nMaterial: PP+PE non-woven fabric 50gm.\nWater proof AAMI level 2.</p>\n              <br>\n            </div>\n\n\n            <div class=\"pb-4\">\n\n\n\n                <button class=\"snipcart-add-item btn btn-primary\"\n                  data-item-id=\"4\"\n                  data-item-price=\"3.99\"\n                  data-item-url=\"https://rsmed.github.io/products.json\"\n                  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                  data-item-image=\"assets/img/3M3.png\"\n                  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                  Add to cart\n                </button>\n\n            </div>\n\n\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/clothing/clothing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/appviews/clothing/clothing.component.ts ***!
  \*********************************************************/
/*! exports provided: ClothingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothingComponent", function() { return ClothingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClothingComponent = /** @class */ (function () {
    function ClothingComponent() {
    }
    ClothingComponent.prototype.ngOnInit = function () {
    };
    ClothingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clothing',
            template: __webpack_require__(/*! ./clothing.component.html */ "./src/app/appviews/clothing/clothing.component.html"),
            styles: [__webpack_require__(/*! ./clothing.component.css */ "./src/app/appviews/clothing/clothing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClothingComponent);
    return ClothingComponent;
}());



/***/ }),

/***/ "./src/app/appviews/contact/contact.component.css":
/*!********************************************************!*\
  !*** ./src/app/appviews/contact/contact.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/contact/contact.component.html":
/*!*********************************************************!*\
  !*** ./src/app/appviews/contact/contact.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<section id=\"contact\">-->\n  <div class=\"container my-5\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto text-center\">\n        <h2 class=\"section-heading\">Contact Us</h2>\n        <hr class=\"my-4\">\n        <p class=\"mb-5\">rsmed.github.io is headquartered in Chicago encorporated ©2020  </p>\n        <p>Creator/Developer: <a target=\"_blank\" href=\"https://surakhchin.github.io\">Serge Urakhchin</a></p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 ml-auto text-center\">\n        <i class=\"fa fa-phone fa-3x mb-3 sr-contact\"></i>\n        <p>630-999-8734</p>\n      </div>\n      <div class=\"col-lg-4 mr-auto text-center\">\n        <i class=\"fa fa-envelope-o fa-3x mb-3 sr-contact\"></i>\n        <p>\n          <a href=\"mailto:your-email@your-domain.com\">urakhchin@gmail.com</a>\n        </p>\n      </div>\n    </div>\n  </div>\n<!--</section>-->\n"

/***/ }),

/***/ "./src/app/appviews/contact/contact.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/appviews/contact/contact.component.ts ***!
  \*******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/appviews/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/appviews/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/appviews/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/appviews/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/appviews/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<section class=\"bg-primary\" id=\"about\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-8 mx-auto text-center\">-->\n        <!--&lt;!&ndash;<h2 class=\"section-heading text-white\">Check out the 90 second pitch video!</h2>&ndash;&gt;-->\n        <!--<h2 class=\"section-heading text-white\">About masks.com</h2>-->\n        <!--<hr class=\"light my-4\">-->\n        <!--<p class=\"text-faded mb-4\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>-->\n        <!--<p class=\"text-faded mb-4\">\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>-->\n        <!--<p class=\"text-faded mb-4\"> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>-->\n        <!--&lt;!&ndash;<p class=\"text-faded mb-4\"><video height=\"500px\" controls=\"controls\" src=\"lasertagvid.MOV\"></video></p>&ndash;&gt;-->\n        <!--<a class=\"btn btn-light btn-xl js-scroll-trigger\" href=\"#products\">Buy Masks</a>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</section>-->\n\n\n\n\n\n<!--<section class=\"bg-dark text-whitey\" id=\"team\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-8 mx-auto text-center\">-->\n        <!--&lt;!&ndash;<h2 class=\"section-heading text-white\">Check out the 90 second pitch video!</h2>&ndash;&gt;-->\n        <!--<h2 class=\"section-heading text-white\">Executive Team</h2>-->\n        <!--<hr class=\"light my-4\">-->\n        <!--<p class=\"text-faded mb-4\">\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>-->\n        <!--<p class=\"text-faded mb-4\">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>-->\n        <!--<p class=\"text-faded mb-4\">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"</p>-->\n        <!--&lt;!&ndash;<p class=\"text-faded mb-4\"><video height=\"500px\" controls=\"controls\" src=\"lasertagvid.MOV\"></video></p>&ndash;&gt;-->\n        <!--<a class=\"btn btn-light btn-xl js-scroll-trigger\" href=\"#products\">Buy Masks</a>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</section>-->\n\n\n\n\n\n<!--<section id=\"contact\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-8 mx-auto text-center\">-->\n        <!--<h2 class=\"section-heading\">Contact Us</h2>-->\n        <!--<hr class=\"my-4\">-->\n        <!--<p class=\"mb-5\">masks.com is headquartered in Chicago encorporated ©2020  </p>-->\n        <!--<p>Creator/Developer: <a target=\"_blank\" href=\"https://surakhchin.github.io\">Serge Urakhchin</a></p>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-4 ml-auto text-center\">-->\n        <!--<i class=\"fa fa-phone fa-3x mb-3 sr-contact\"></i>-->\n        <!--<p>630-999-8734</p>-->\n      <!--</div>-->\n      <!--<div class=\"col-lg-4 mr-auto text-center\">-->\n        <!--<i class=\"fa fa-envelope-o fa-3x mb-3 sr-contact\"></i>-->\n        <!--<p>-->\n          <!--<a href=\"mailto:your-email@your-domain.com\">urakhchin@gmail.com</a>-->\n        <!--</p>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</section>-->\n\n\n\n<!-- Footer-->\n<footer class=\"bg-light py-5\">\n    <div class=\"container\"><div class=\"small text-center text-muted\">Copyright © 2020 - rsmed.github.io</div></div>\n</footer>\n"

/***/ }),

/***/ "./src/app/appviews/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/appviews/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/appviews/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/appviews/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/appviews/gloves/gloves.component.css":
/*!******************************************************!*\
  !*** ./src/app/appviews/gloves/gloves.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/appviews/gloves/gloves.component.html":
/*!*******************************************************!*\
  !*** ./src/app/appviews/gloves/gloves.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"products\">\n\n\n\n\n\n\n    <div class=\"row m-4 d-flex justify-content-center\" >\n\n\n\n\n        <div class=\"col-12 col-md-6 d-flex col-lg-4  justify-content-center align-items-center  \" >\n\n            <div><a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-width: 300px \" src=\"assets/img/gloves.jpg\"></a></div>\n\n        </div>\n        <div class=\"col-12 col-md-6 col-lg-4 my-4\">\n            <h5 style=\"font-weight: bold\">Existing Products:</h5>\n            <p>BPG Sterile Latex Surgical Gloves (Powdered)</p>\n            <p>Excell Sterile Latex Surgical Gloves (Powder-Free)</p>\n            <p>Excell Sterile Latex Surgical Under Gloves (Powder-Free)</p>\n            <p>BPG Latex Examination Gloves (Powdered)</p>\n            <p>BPG Latex Examination Gloves (Powder-Free)</p>\n            <p>ExtraCare Sterile Latex Surgical Gloves (Powdered)</p>\n            <p>ExtraFit Latex Examination Gloves (Powdered)</p>\n            <p>Polycare Latex Examination Gloves (Powder-Free)</p>\n            <p>Ekselfit Nitrile Examination Gloves (Powder-Free)</p>\n\n        </div>\n\n\n\n\n    </div>\n\n\n\n\n\n\n</div>\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">Surgical Gloves</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/gloves.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/gloves/gloves.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/appviews/gloves/gloves.component.ts ***!
  \*****************************************************/
/*! exports provided: GlovesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlovesComponent", function() { return GlovesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlovesComponent = /** @class */ (function () {
    function GlovesComponent() {
    }
    GlovesComponent.prototype.ngOnInit = function () {
    };
    GlovesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gloves',
            template: __webpack_require__(/*! ./gloves.component.html */ "./src/app/appviews/gloves/gloves.component.html"),
            styles: [__webpack_require__(/*! ./gloves.component.css */ "./src/app/appviews/gloves/gloves.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GlovesComponent);
    return GlovesComponent;
}());



/***/ }),

/***/ "./src/app/appviews/gown-isolation/gown-isolation.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/appviews/gown-isolation/gown-isolation.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/gown-isolation/gown-isolation.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/appviews/gown-isolation/gown-isolation.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/isolationgown.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">Disposable Isolation Gowns</h1>\n            <br>\n            <p class=\"text-muted\">Non-sterile non-surgical Isolation gown</p>\n            <p class=\"text-muted\">Material: PP+PE non-woven fabric 50gm</p>\n            <p class=\"text-muted \">Water proof AAMI level 2</p>\n            <p class=\"text-muted \">50x40x45cm, 50pcs/1 ctn, 8Kg</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">Disposable Isolation Gowns</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/isolationgown.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/gown-isolation/gown-isolation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/appviews/gown-isolation/gown-isolation.component.ts ***!
  \*********************************************************************/
/*! exports provided: GownIsolationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GownIsolationComponent", function() { return GownIsolationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GownIsolationComponent = /** @class */ (function () {
    function GownIsolationComponent() {
    }
    GownIsolationComponent.prototype.ngOnInit = function () {
    };
    GownIsolationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gown-isolation',
            template: __webpack_require__(/*! ./gown-isolation.component.html */ "./src/app/appviews/gown-isolation/gown-isolation.component.html"),
            styles: [__webpack_require__(/*! ./gown-isolation.component.css */ "./src/app/appviews/gown-isolation/gown-isolation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GownIsolationComponent);
    return GownIsolationComponent;
}());



/***/ }),

/***/ "./src/app/appviews/gown-surgical/gown-surgical.component.css":
/*!********************************************************************!*\
  !*** ./src/app/appviews/gown-surgical/gown-surgical.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/gown-surgical/gown-surgical.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/appviews/gown-surgical/gown-surgical.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/surgicalgown.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">Disposable Surgical Gowns</h1>\n            <br>\n            <p class=\"text-muted\">3120 Standard High-Performance Gown, 45g</p>\n            <p class=\"text-muted\">Polycarbonate, Disposable, Anti-static, Splash Resistant</p>\n            <p class=\"text-muted \">Standard EN 13795:2019, FDA & CE Certified</p>\n            <p class=\"text-muted \">Used to reduce infection and create a layer of protection against splash</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">Disposable Surgical Gowns</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/surgicalgown.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/gown-surgical/gown-surgical.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/appviews/gown-surgical/gown-surgical.component.ts ***!
  \*******************************************************************/
/*! exports provided: GownSurgicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GownSurgicalComponent", function() { return GownSurgicalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GownSurgicalComponent = /** @class */ (function () {
    function GownSurgicalComponent() {
    }
    GownSurgicalComponent.prototype.ngOnInit = function () {
    };
    GownSurgicalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gown-surgical',
            template: __webpack_require__(/*! ./gown-surgical.component.html */ "./src/app/appviews/gown-surgical/gown-surgical.component.html"),
            styles: [__webpack_require__(/*! ./gown-surgical.component.css */ "./src/app/appviews/gown-surgical/gown-surgical.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GownSurgicalComponent);
    return GownSurgicalComponent;
}());



/***/ }),

/***/ "./src/app/appviews/kit-allplex/kit-allplex.component.css":
/*!****************************************************************!*\
  !*** ./src/app/appviews/kit-allplex/kit-allplex.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/kit-allplex/kit-allplex.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/appviews/kit-allplex/kit-allplex.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/allplex.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">Allplex™ 2019-nCoV Assay</h1>\n            <br>\n            <p class=\"text-muted\"><span style=\"font-weight: bold\">Powerful Performance: </span>PCR with high sensitivity and specificity</p>\n            <p class=\"text-muted\"><span style=\"font-weight: bold\">Short TAT: </span>Results within 1 hour and 50 min after extraction</p>\n            <p class=\"text-muted\"><span style=\"font-weight: bold\">Multiplex real-time PCR: </span>Detection and identification of target genes (E gene, RdRP gene, N gene) specific for COVID-19 in a single tube</p>\n            <p class=\"text-muted\"><span style=\"font-weight: bold\">Whole Process Validation: </span>Whole process validation from extraction to PCR by whole process control</p>\n            <p class=\"text-muted\"><span style=\"font-weight: bold\">Automatic Data Analyzer: </span>Automated data interpretation and LIS interlocking with Seegene viewer</p>\n            <p class=\"text-muted\"><span style=\"font-weight: bold\">Proper Patient Care: </span>Quick and proper treatment provided by accurate testing results</p>\n            <p class=\"text-muted\"><span style=\"font-weight: bold\">User-friendly workflow: </span>Convenient workflow using Seegene's automated one platform</p>\n\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">Allplex™ 2019-nCoV Assay</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/allplexfull.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/kit-allplex/kit-allplex.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/appviews/kit-allplex/kit-allplex.component.ts ***!
  \***************************************************************/
/*! exports provided: KitAllplexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitAllplexComponent", function() { return KitAllplexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KitAllplexComponent = /** @class */ (function () {
    function KitAllplexComponent() {
    }
    KitAllplexComponent.prototype.ngOnInit = function () {
    };
    KitAllplexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kit-allplex',
            template: __webpack_require__(/*! ./kit-allplex.component.html */ "./src/app/appviews/kit-allplex/kit-allplex.component.html"),
            styles: [__webpack_require__(/*! ./kit-allplex.component.css */ "./src/app/appviews/kit-allplex/kit-allplex.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KitAllplexComponent);
    return KitAllplexComponent;
}());



/***/ }),

/***/ "./src/app/appviews/kit-medakit/kit-medakit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/appviews/kit-medakit/kit-medakit.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/kit-medakit/kit-medakit.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/appviews/kit-medakit/kit-medakit.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/kit1.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">Covid-19 IgG/IgM Antibody\nRapid Test Kit</h1>\n            <br>\n            <p class=\"text-muted\">Kit uses immunochromatographic technology to detect the\nIgG/IgM antibody of COVID-19 in human serum/ plasma/\nwhole blood</p>\n          <p class=\"text-muted\"><span style=\"font-weight: bold\">Includes: </span> Test Cassete, Diluent, Dropper Tip, Alcohol Pad,\nInstruction Manual</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">Covid-19 IgG/IgM Antibody\nRapid Test Kit</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/kit1.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/kit-medakit/kit-medakit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/appviews/kit-medakit/kit-medakit.component.ts ***!
  \***************************************************************/
/*! exports provided: KitMedakitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitMedakitComponent", function() { return KitMedakitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KitMedakitComponent = /** @class */ (function () {
    function KitMedakitComponent() {
    }
    KitMedakitComponent.prototype.ngOnInit = function () {
    };
    KitMedakitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kit-medakit',
            template: __webpack_require__(/*! ./kit-medakit.component.html */ "./src/app/appviews/kit-medakit/kit-medakit.component.html"),
            styles: [__webpack_require__(/*! ./kit-medakit.component.css */ "./src/app/appviews/kit-medakit/kit-medakit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KitMedakitComponent);
    return KitMedakitComponent;
}());



/***/ }),

/***/ "./src/app/appviews/kits/kits.component.css":
/*!**************************************************!*\
  !*** ./src/app/appviews/kits/kits.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/kits/kits.component.html":
/*!***************************************************!*\
  !*** ./src/app/appviews/kits/kits.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"products\">\n\n\n\n\n\n\n\n\n    <div class=\"row my-4 d-flex justify-content-center\">\n\n\n      <!--one-->\n      <div class=\"col-12 col-sm-6 col-lg-4 text-center d-flex flex-column justify-content-between\">\n\n\n            <div class=\"service-box mt-5 mx-auto\">\n              <a routerLink=\"../medakit\"><img style=\"max-height: 250px\" src=\"assets/img/kit1.jpg\"></a>\n              <br><br>\n                <a routerLink=\"../medakit\"><h5 class=\"mb-3\" style=\"font-weight: bold\">Covid-19 IgG/IgM Antibody\nRapid Test Kit</h5></a>\n              <br>\n              <p class=\"text-muted mb-0\">Kit uses immunochromatographic technology to detect the\nIgG/IgM antibody of COVID-19 in human serum/ plasma/\nwhole blood. Includes: Test Cassete, Diluent, Dropper Tip, Alcohol Pad,\nInstruction Manual.</p>\n              <br>\n            </div>\n\n\n            <div class=\"pb-4\">\n\n\n\n\n\n                <button class=\"snipcart-add-item btn btn-primary\"\n                  data-item-id=\"4\"\n                  data-item-price=\"3.99\"\n                  data-item-url=\"https://rsmed.github.io/products.json\"\n                  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                  data-item-image=\"assets/img/3M3.png\"\n                  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                  Add to cart\n                </button>\n\n            </div>\n\n\n      </div>\n\n\n      <!--two-->\n      <div class=\"col-12 col-sm-6 col-lg-4 text-center d-flex flex-column justify-content-between\">\n\n\n            <div class=\"service-box mt-5 mx-auto\">\n              <a routerLink=\"../allplex\"><img style=\"max-height: 250px\" src=\"assets/img/allplex.jpg\"></a>\n              <br><br>\n              <a routerLink=\"../allplex\"><h5 class=\"mb-3\" style=\"font-weight: bold\">Allplex™ 2019-nCoV Assay</h5></a>\n              <br>\n              <p class=\"text-muted mb-0\">Simultaneus detection and identification of 3 target genes specific for COVID-19. Powerful performance. Short TAT. Multiplex real-time PCR. Whole process validation. Automatic data analyzer. Proper patient care. User-friendly workflow.</p>\n              <br>\n            </div>\n\n\n            <div class=\"pb-4\">\n\n\n\n                <button class=\"snipcart-add-item btn btn-primary\"\n                  data-item-id=\"4\"\n                  data-item-price=\"3.99\"\n                  data-item-url=\"https://rsmed.github.io/products.json\"\n                  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                  data-item-image=\"assets/img/3M3.png\"\n                  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                  Add to cart\n                </button>\n\n            </div>\n\n\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/kits/kits.component.ts":
/*!*************************************************!*\
  !*** ./src/app/appviews/kits/kits.component.ts ***!
  \*************************************************/
/*! exports provided: KitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitsComponent", function() { return KitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KitsComponent = /** @class */ (function () {
    function KitsComponent() {
    }
    KitsComponent.prototype.ngOnInit = function () {
    };
    KitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kits',
            template: __webpack_require__(/*! ./kits.component.html */ "./src/app/appviews/kits/kits.component.html"),
            styles: [__webpack_require__(/*! ./kits.component.css */ "./src/app/appviews/kits/kits.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KitsComponent);
    return KitsComponent;
}());



/***/ }),

/***/ "./src/app/appviews/m31826/m31826.component.css":
/*!******************************************************!*\
  !*** ./src/app/appviews/m31826/m31826.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/m31826/m31826.component.html":
/*!*******************************************************!*\
  !*** ./src/app/appviews/m31826/m31826.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/3m1826.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">3M 1826 Face Mask</h1>\n\n            <p class=\"text-muted\">98% bacterial filtration efficacy (conforms to European standard EN14683:2004)</p>\n            <p class=\"text-muted\">Ear Loops</p>\n            <p class=\"text-muted \">Aluminum nose piece to ensure proper fit and comfort</p>\n            <p class=\"text-muted \">Lightweight, hypoallergenic (latex free)</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"px-4\">\n\n\n\n\n\n            <!--<button class=\"snipcart-add-item btn btn-primary\"-->\n  <!--data-item-id=\"4\"-->\n  <!--data-item-price=\"3.99\"-->\n  <!--data-item-url=\"https://rsmed.github.io/products.json\"-->\n  <!--data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"-->\n  <!--data-item-image=\"assets/img/3M3.png\"-->\n  <!--data-item-name=\"FFP3 Surgical Mask 3 Ply\">-->\n  <!--Add to cart-->\n<!--</button>-->\n\n\n\n<form target=\"paypal\" action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\">\n<input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n<input type=\"hidden\" name=\"hosted_button_id\" value=\"KX4EM4FV5S6GQ\">\n\n\n<div style=\"\" class=\"d-flex justify-content-center align-items-center\">\n\n  <div>\n    <table>\n<tr><td><input type=\"hidden\" name=\"on0\" value=\"Quantity\">Quantity</td></tr><tr><td><select name=\"os0\">\n\t<option value=\"1 Box\">1 Box $30.00 USD</option>\n\t<option value=\"10 Boxes\">10 Boxes $290.00 USD</option>\n\t<option value=\"50 Boxes\">50 Boxes $1,300.00 USD</option>\n</select> </td></tr>\n</table>\n</div>\n\n</div>\n<div style=\"\" class=\"d-flex justify-content-center align-items-center\">\n    <div class=\"p-2\">\n\n        <input type=\"hidden\" name=\"currency_code\" value=\"USD\">\n    <input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\" style=\"\">\n    <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n    </div>\n</div>\n</form>\n\n\n\n\n\n\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">3M 1826 Face Mask</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/3m1826.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/m31826/m31826.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/appviews/m31826/m31826.component.ts ***!
  \*****************************************************/
/*! exports provided: M31826Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M31826Component", function() { return M31826Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var M31826Component = /** @class */ (function () {
    function M31826Component() {
    }
    M31826Component.prototype.ngOnInit = function () {
    };
    M31826Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-m31826',
            template: __webpack_require__(/*! ./m31826.component.html */ "./src/app/appviews/m31826/m31826.component.html"),
            styles: [__webpack_require__(/*! ./m31826.component.css */ "./src/app/appviews/m31826/m31826.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], M31826Component);
    return M31826Component;
}());



/***/ }),

/***/ "./src/app/appviews/mask-face-shield/mask-face-shield.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/appviews/mask-face-shield/mask-face-shield.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/mask-face-shield/mask-face-shield.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/appviews/mask-face-shield/mask-face-shield.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/shield.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">Face Shields</h1>\n            <br>\n            <p class=\"text-muted\">Plastic face shields (disposable)</p>\n            <p class=\"text-muted\">9 x13 in plastic shield</p>\n            <p class=\"text-muted\">Foam forehead support</p>\n            <p class=\"text-muted\">Elastic strap</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">Face Shields</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/shield.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/mask-face-shield/mask-face-shield.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/appviews/mask-face-shield/mask-face-shield.component.ts ***!
  \*************************************************************************/
/*! exports provided: MaskFaceShieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskFaceShieldComponent", function() { return MaskFaceShieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaskFaceShieldComponent = /** @class */ (function () {
    function MaskFaceShieldComponent() {
    }
    MaskFaceShieldComponent.prototype.ngOnInit = function () {
    };
    MaskFaceShieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mask-face-shield',
            template: __webpack_require__(/*! ./mask-face-shield.component.html */ "./src/app/appviews/mask-face-shield/mask-face-shield.component.html"),
            styles: [__webpack_require__(/*! ./mask-face-shield.component.css */ "./src/app/appviews/mask-face-shield/mask-face-shield.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaskFaceShieldComponent);
    return MaskFaceShieldComponent;
}());



/***/ }),

/***/ "./src/app/appviews/mask-goggles/mask-goggles.component.css":
/*!******************************************************************!*\
  !*** ./src/app/appviews/mask-goggles/mask-goggles.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/mask-goggles/mask-goggles.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/appviews/mask-goggles/mask-goggles.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-width: 250px;\" src=\"assets/img/goggles.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">Protective Goggles</h1>\n            <br>\n            <p class=\"text-muted\">Vents are designed to help protect against liquids entering the eye area</p>\n            <p class=\"text-muted\">Helps protect eyes from certain airborne particulates and chemical splash</p>\n            <p class=\"text-muted\">Chemical-resistant headband</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">Protective Goggles</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/goggles.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/mask-goggles/mask-goggles.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/appviews/mask-goggles/mask-goggles.component.ts ***!
  \*****************************************************************/
/*! exports provided: MaskGogglesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskGogglesComponent", function() { return MaskGogglesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaskGogglesComponent = /** @class */ (function () {
    function MaskGogglesComponent() {
    }
    MaskGogglesComponent.prototype.ngOnInit = function () {
    };
    MaskGogglesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mask-goggles',
            template: __webpack_require__(/*! ./mask-goggles.component.html */ "./src/app/appviews/mask-goggles/mask-goggles.component.html"),
            styles: [__webpack_require__(/*! ./mask-goggles.component.css */ "./src/app/appviews/mask-goggles/mask-goggles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaskGogglesComponent);
    return MaskGogglesComponent;
}());



/***/ }),

/***/ "./src/app/appviews/mask-kn95/mask-kn95.component.css":
/*!************************************************************!*\
  !*** ./src/app/appviews/mask-kn95/mask-kn95.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/mask-kn95/mask-kn95.component.html":
/*!*************************************************************!*\
  !*** ./src/app/appviews/mask-kn95/mask-kn95.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/kn95.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">KN-95 Disposable Face Masks</h1>\n            <br>\n            <p class=\"text-muted\">FDA certified through MicroKy Services, LLC</p>\n            <p class=\"text-muted\">5 layer maximum filtration (filters out 95% of air/particles from outside to inside of mask)</p>\n            <p class=\"text-muted\">Includes bendable nose-clip to ensure proper fit</p>\n            <p class=\"text-muted\">Soft, odorless, highly fluid resistant</p>\n            <p class=\"text-muted\">Each are individually packaged to ensure additional sanitation</p>\n            <p class=\"text-muted\">Ear loops</p>\n            <p class=\"text-muted\">10 masks per box</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">KN-95 Disposable Face Masks</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/kn95.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/appviews/mask-kn95/mask-kn95.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/appviews/mask-kn95/mask-kn95.component.ts ***!
  \***********************************************************/
/*! exports provided: MaskKN95Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskKN95Component", function() { return MaskKN95Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaskKN95Component = /** @class */ (function () {
    function MaskKN95Component() {
    }
    MaskKN95Component.prototype.ngOnInit = function () {
    };
    MaskKN95Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mask-kn95',
            template: __webpack_require__(/*! ./mask-kn95.component.html */ "./src/app/appviews/mask-kn95/mask-kn95.component.html"),
            styles: [__webpack_require__(/*! ./mask-kn95.component.css */ "./src/app/appviews/mask-kn95/mask-kn95.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaskKN95Component);
    return MaskKN95Component;
}());



/***/ }),

/***/ "./src/app/appviews/mask-n95-niosh/mask-n95-niosh.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/appviews/mask-n95-niosh/mask-n95-niosh.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/mask-n95-niosh/mask-n95-niosh.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/appviews/mask-n95-niosh/mask-n95-niosh.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/n95niosh.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">N95 NIOSH Disposable Face Masks</h1>\n            <br>\n            <p class=\"text-muted\">Niosh Particulate Respirator Mask Filters out 95% of air born pollutants</p>\n            <p class=\"text-muted\">Meets CDC guidelines for exposure control</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">N95 NIOSH Disposable Face Masks</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/n95niosh.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/mask-n95-niosh/mask-n95-niosh.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/appviews/mask-n95-niosh/mask-n95-niosh.component.ts ***!
  \*********************************************************************/
/*! exports provided: MaskN95NioshComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskN95NioshComponent", function() { return MaskN95NioshComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaskN95NioshComponent = /** @class */ (function () {
    function MaskN95NioshComponent() {
    }
    MaskN95NioshComponent.prototype.ngOnInit = function () {
    };
    MaskN95NioshComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mask-n95-niosh',
            template: __webpack_require__(/*! ./mask-n95-niosh.component.html */ "./src/app/appviews/mask-n95-niosh/mask-n95-niosh.component.html"),
            styles: [__webpack_require__(/*! ./mask-n95-niosh.component.css */ "./src/app/appviews/mask-n95-niosh/mask-n95-niosh.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaskN95NioshComponent);
    return MaskN95NioshComponent;
}());



/***/ }),

/***/ "./src/app/appviews/mask-n95/mask-n95.component.css":
/*!**********************************************************!*\
  !*** ./src/app/appviews/mask-n95/mask-n95.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/mask-n95/mask-n95.component.html":
/*!***********************************************************!*\
  !*** ./src/app/appviews/mask-n95/mask-n95.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/n95.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">N95 Disposable Face Masks</h1>\n            <br>\n            <p class=\"text-muted\">FDA certified through UCL-REG Services, LLC</p>\n            <p class=\"text-muted\">Filters out 95% of non-oily particles</p>\n            <p class=\"text-muted\">Contains a non-woven, antibacterial layer on the outside of mask to\nserve as a protective layer, as well as two additional filtration layers</p>\n            <p class=\"text-muted\">Includes an adjustable aluminum nose-clip to ensure proper fit</p>\n            <p class=\"text-muted\">Ear loops</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">N95 Disposable Face Masks</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/n95.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/mask-n95/mask-n95.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/appviews/mask-n95/mask-n95.component.ts ***!
  \*********************************************************/
/*! exports provided: MaskN95Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskN95Component", function() { return MaskN95Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaskN95Component = /** @class */ (function () {
    function MaskN95Component() {
    }
    MaskN95Component.prototype.ngOnInit = function () {
    };
    MaskN95Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mask-n95',
            template: __webpack_require__(/*! ./mask-n95.component.html */ "./src/app/appviews/mask-n95/mask-n95.component.html"),
            styles: [__webpack_require__(/*! ./mask-n95.component.css */ "./src/app/appviews/mask-n95/mask-n95.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaskN95Component);
    return MaskN95Component;
}());



/***/ }),

/***/ "./src/app/appviews/mask3-ply/mask3-ply.component.css":
/*!************************************************************!*\
  !*** ./src/app/appviews/mask3-ply/mask3-ply.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/mask3-ply/mask3-ply.component.html":
/*!*************************************************************!*\
  !*** ./src/app/appviews/mask3-ply/mask3-ply.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/3ply.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">3 Ply Disposable Surgical Face Masks</h1>\n            <br>\n            <p class=\"text-muted\">Fluid-resistant</p>\n            <p class=\"text-muted\">Pleated</p>\n            <p class=\"text-muted\">3 PLY Non woven material</p>\n            <p class=\"text-muted\">Pliable nose piece for proper fit across nose & cheekbones. 100% fiberglass & latex free.</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">3 Ply Disposable Surgical Face Masks</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/3ply.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/mask3-ply/mask3-ply.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/appviews/mask3-ply/mask3-ply.component.ts ***!
  \***********************************************************/
/*! exports provided: Mask3PlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mask3PlyComponent", function() { return Mask3PlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Mask3PlyComponent = /** @class */ (function () {
    function Mask3PlyComponent() {
    }
    Mask3PlyComponent.prototype.ngOnInit = function () {
    };
    Mask3PlyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mask3-ply',
            template: __webpack_require__(/*! ./mask3-ply.component.html */ "./src/app/appviews/mask3-ply/mask3-ply.component.html"),
            styles: [__webpack_require__(/*! ./mask3-ply.component.css */ "./src/app/appviews/mask3-ply/mask3-ply.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Mask3PlyComponent);
    return Mask3PlyComponent;
}());



/***/ }),

/***/ "./src/app/appviews/mask3m1860/mask3m1860.component.css":
/*!**************************************************************!*\
  !*** ./src/app/appviews/mask3m1860/mask3m1860.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/mask3m1860/mask3m1860.component.html":
/*!***************************************************************!*\
  !*** ./src/app/appviews/mask3m1860/mask3m1860.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/3m1860.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">3M 1860 Face Mask</h1>\n            <br>\n            <p class=\"text-muted\">NIOSH approved, FDA cleared</p>\n            <p class=\"text-muted\">Fluid resistant (ASTM F1862)</p>\n            <p class=\"text-muted \">Latex free</p>\n            <p class=\"text-muted \">Collapse resistant cup design</p>\n            <p class=\"text-muted \">Cushioning nose piece and elastic headbands for comfort and proper fit</p>\n            <p class=\"text-muted \">20 masks per box</p>\n            <p class=\"text-muted \">Braided Comfort Strap</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">3M 1860 Face Mask</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/3m1860.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/mask3m1860/mask3m1860.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/appviews/mask3m1860/mask3m1860.component.ts ***!
  \*************************************************************/
/*! exports provided: Mask3m1860Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mask3m1860Component", function() { return Mask3m1860Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Mask3m1860Component = /** @class */ (function () {
    function Mask3m1860Component() {
    }
    Mask3m1860Component.prototype.ngOnInit = function () {
    };
    Mask3m1860Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mask3m1860',
            template: __webpack_require__(/*! ./mask3m1860.component.html */ "./src/app/appviews/mask3m1860/mask3m1860.component.html"),
            styles: [__webpack_require__(/*! ./mask3m1860.component.css */ "./src/app/appviews/mask3m1860/mask3m1860.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Mask3m1860Component);
    return Mask3m1860Component;
}());



/***/ }),

/***/ "./src/app/appviews/mask3m8210/mask3m8210.component.css":
/*!**************************************************************!*\
  !*** ./src/app/appviews/mask3m8210/mask3m8210.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/mask3m8210/mask3m8210.component.html":
/*!***************************************************************!*\
  !*** ./src/app/appviews/mask3m8210/mask3m8210.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/3mstubborn.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">3M 8210 N95 Face Mask</h1>\n            <br>\n            <p class=\"text-muted\">98% bacterial filtration efficacy (conforms to European standard EN14683:2004)</p>\n            <p class=\"text-muted\">Ear Loops</p>\n            <p class=\"text-muted \">Aluminum nose piece to ensure proper fit and comfort</p>\n            <p class=\"text-muted \">Lightweight, hypoallergenic (latex free)</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">3M 8210 N95 Face Mask</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/3mstubborn.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/mask3m8210/mask3m8210.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/appviews/mask3m8210/mask3m8210.component.ts ***!
  \*************************************************************/
/*! exports provided: Mask3m8210Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mask3m8210Component", function() { return Mask3m8210Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Mask3m8210Component = /** @class */ (function () {
    function Mask3m8210Component() {
    }
    Mask3m8210Component.prototype.ngOnInit = function () {
    };
    Mask3m8210Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mask3m8210',
            template: __webpack_require__(/*! ./mask3m8210.component.html */ "./src/app/appviews/mask3m8210/mask3m8210.component.html"),
            styles: [__webpack_require__(/*! ./mask3m8210.component.css */ "./src/app/appviews/mask3m8210/mask3m8210.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Mask3m8210Component);
    return Mask3m8210Component;
}());



/***/ }),

/***/ "./src/app/appviews/masks/masks.component.css":
/*!****************************************************!*\
  !*** ./src/app/appviews/masks/masks.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/masks/masks.component.html":
/*!*****************************************************!*\
  !*** ./src/app/appviews/masks/masks.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<section class=\"\">-->\n      <!--<div class=\"container\">-->\n        <!--<div class=\"row\" >-->\n          <!--<div class=\"col-lg-12 text-center\">-->\n            <!--<h2 class=\"section-heading\">Products</h2>-->\n            <!--<hr class=\"my-4\">-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n      <div class=\"container-fluid\" id=\"products\">\n\n\n\n\n\n\n\n\n          <div class=\"row my-4\">\n\n\n              <!--one-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../3m1826\"><img style=\"max-height: 250px\" src=\"assets/img/3m1826.jpg\"></a>\n                      <br><br>\n                        <a routerLink=\"../3m1826\"><h5 class=\"mb-3\" style=\"font-weight: bold\">3M 1826 Face Mask</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">98% bacterial filtration efficacy. Aluminum nose piece and ear loops to ensure proper fit and comfort.                                     Lightweight and hypoallergenic (latex free).</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n\n\n\n<form target=\"paypal\" action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\">\n<input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n<input type=\"hidden\" name=\"hosted_button_id\" value=\"KX4EM4FV5S6GQ\">\n\n\n<div style=\"\" class=\"d-flex justify-content-center align-items-center\">\n\n  <div>\n    <table>\n<tr><td><input type=\"hidden\" name=\"on0\" value=\"Quantity\">Quantity</td></tr><tr><td><select name=\"os0\">\n\t<option value=\"1 Box\">1 Box $30.00 USD</option>\n\t<option value=\"10 Boxes\">10 Boxes $290.00 USD</option>\n\t<option value=\"50 Boxes\">50 Boxes $1,300.00 USD</option>\n</select> </td></tr>\n</table>\n</div>\n\n</div>\n<div style=\"\" class=\"d-flex justify-content-center align-items-center\">\n    <div class=\"p-2\">\n\n        <input type=\"hidden\" name=\"currency_code\" value=\"USD\">\n    <input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\" style=\"\">\n    <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n    </div>\n</div>\n</form>\n\n\n\n\n\n\n\n\n\n\n\n\n                        <!--<button class=\"snipcart-add-item btn btn-primary\"-->\n                          <!--data-item-id=\"4\"-->\n                          <!--data-item-price=\"3.99\"-->\n                          <!--data-item-url=\"https://rsmed.github.io/products.json\"-->\n                          <!--data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"-->\n                          <!--data-item-image=\"assets/img/3M3.png\"-->\n                          <!--data-item-name=\"FFP3 Surgical Mask 3 Ply\">-->\n                          <!--Add to cart-->\n                        <!--</button>-->\n\n                    </div>\n\n\n              </div>\n\n\n              <!--two-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../3m8210\"><img style=\"max-height: 250px\" src=\"assets/img/3mstubborn.jpg\"></a>\n                      <br><br>\n                      <a routerLink=\"../3m8210\"><h5 class=\"mb-3\" style=\"font-weight: bold\">3M 8210 N95 Face Mask</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">FDA certified. Filters out 95% of non-oily particles. Contains a non-woven, antibacterial layer on the outside of\nmask to serve as a protective layer, as well as two additional filtration layers.</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n\n              <!--three-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../3m1860\"><img style=\"max-height: 250px\" src=\"assets/img/3m1860.jpg\"></a>\n                      <br><br>\n                      <a routerLink=\"../3m1860\"><h5 class=\"mb-3\" style=\"font-weight: bold\">3M 1860 Face Mask</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">NIOSH approved, FDA cleared. 99% BFE (Bacterial Filtration Efficiency). Fluid resistant & latex free. Cushioning nose piece and elastic headbands for comfort and proper fit.</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n\n              <!--four-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../n95niosh\"><img style=\"max-height: 250px\" src=\"assets/img/n95niosh.jpg\"></a>\n                      <br><br>\n                      <a routerLink=\"../n95niosh\"><h5 class=\"mb-3\" style=\"font-weight: bold\">N95 NIOSH Disposable Face Masks</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">Niosh Particulate Respirator Mask Filters out 95% of air born pollutants.\n                          Meets CDC guidelines for exposure control.</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n\n\n\n\n\n\n\n\n\n          </div>\n\n\n\n\n\n\n          <div class=\"row my-4\">\n\n\n              <!--one-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../kn95\"><img style=\"max-height: 250px\" src=\"assets/img/kn95.jpg\"></a>\n                      <br><br>\n                        <a routerLink=\"../kn95\"><h5 class=\"mb-3\" style=\"font-weight: bold\">KN-95 Disposable Face Masks</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">5 layer maximum filtration (filters out 95% of air/particles from outside to inside of mask). Includes bendable nose-clip to ensure proper fit. Soft, odorless, highly fluid resistant.</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n              <!--two-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../n95\"><img style=\"max-height: 250px\" src=\"assets/img/n95.jpg\"></a>\n                      <br><br>\n                      <a routerLink=\"../n95\"><h5 class=\"mb-3\" style=\"font-weight: bold\">N95 Disposable Face Masks</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">Filters out 95% of non-oily particles. Contains a non-woven,\n                          antibacterial layer on the outside of mask to serve as a protective layer,\n                           as well as two additional filtration layers. Includes an adjustable aluminum nose-clip to ensure proper fit</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n\n              <!--three-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../3ply\"><img style=\"max-height: 250px\" src=\"assets/img/3ply.jpg\"></a>\n                      <br><br>\n                      <a routerLink=\"../3ply\"><h5 class=\"mb-3\" style=\"font-weight: bold\">3 Ply Disposable Surgical Face Masks</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">Fluid-resistant. Pleated. 3 PLY Non woven material. Pliable nose piece for proper fit across nose & cheekbones. 100% fiberglass & latex free.</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n\n              <!--four-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../shield\"><img style=\"max-height: 250px\" src=\"assets/img/shield.jpg\"></a>\n                      <br><br>\n                      <a routerLink=\"../shield\"><h5 class=\"mb-3\" style=\"font-weight: bold\">Face Shields</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">Plastic face shields (disposable). 9 x13 in plastic shield. Foam forehead support.\n                      Elastic strap.</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n\n\n\n\n\n\n\n\n\n          </div>\n\n\n\n\n          <div class=\"row my-4\" >\n\n\n              <!--one-->\n              <div class=\"col-12 col-sm-6 col-lg-3 text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../goggles\"><img style=\"max-width: 250px\" src=\"assets/img/goggles.jpg\"></a>\n                      <br><br>\n                        <a routerLink=\"../goggles\"><h5 class=\"mb-3\" style=\"font-weight: bold\">Protective Goggles</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">Vents are designed to help protect against liquids entering the eye area.\n                          Helps protect eyes from certain airborne particulates and chemical splash. Chemical-resistant headband</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n          </div>\n\n\n      </div>\n    <!--</section>-->\n"

/***/ }),

/***/ "./src/app/appviews/masks/masks.component.ts":
/*!***************************************************!*\
  !*** ./src/app/appviews/masks/masks.component.ts ***!
  \***************************************************/
/*! exports provided: MasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasksComponent", function() { return MasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasksComponent = /** @class */ (function () {
    function MasksComponent() {
    }
    MasksComponent.prototype.ngOnInit = function () {
    };
    MasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masks',
            template: __webpack_require__(/*! ./masks.component.html */ "./src/app/appviews/masks/masks.component.html"),
            styles: [__webpack_require__(/*! ./masks.component.css */ "./src/app/appviews/masks/masks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MasksComponent);
    return MasksComponent;
}());



/***/ }),

/***/ "./src/app/appviews/nav/nav.component.css":
/*!************************************************!*\
  !*** ./src/app/appviews/nav/nav.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/nav/nav.component.html":
/*!*************************************************!*\
  !*** ./src/app/appviews/nav/nav.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n  <div class=\"container\">\n\n    <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"\">rsmed.github.io</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"\">Products</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"about\">About</a>\n        </li>\n        <!--<li class=\"nav-item\">-->\n          <!--<a class=\"nav-link js-scroll-trigger\" href=\"#team\">Executive Team</a>-->\n        <!--</li>-->\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"contact\">Contact</a>\n        </li>\n        <!--<li class=\"nav-item\">-->\n\n\n\n<!--<a class=\"header__checkout snipcart-checkout nav-link\">-->\n    <!--<svg width=\"31\" height=\"27\" viewBox=\"0 0 31 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">-->\n      <!--<path d=\"M1.10512 0.368718C0.560256 0.368718 0.118164 0.812066 0.118164 1.35848C0.118164 1.9049 0.560256 2.34824 1.10512 2.34824H4.90887L8.30138 18.4009C8.43503 19.0053 8.83085 19.5079 9.32946 19.5041H25.7788C26.3005 19.5118 26.7799 19.0375 26.7799 18.5143C26.7799 17.9911 26.3006 17.5168 25.7788 17.5245H10.1315L9.71003 15.545H27.095C27.5371 15.5412 27.9547 15.2048 28.0511 14.7718L30.354 4.87412C30.4825 4.29933 29.9852 3.67172 29.3979 3.66786H7.21171L6.6771 1.15221C6.58329 0.71276 6.15921 0.368652 5.7107 0.368652L1.10512 0.368718ZM7.623 5.64746H12.7634L13.2569 8.61674H8.25005L7.623 5.64746ZM14.7785 5.64746H20.9881L20.4946 8.61674H15.2719L14.7785 5.64746ZM23.0031 5.64746H28.1537L27.4649 8.61674H22.5097L23.0031 5.64746ZM8.67181 10.5963H13.5862L14.0797 13.5656H9.29919L8.67181 10.5963ZM15.6009 10.5963H20.1656L19.6721 13.5656H16.0944L15.6009 10.5963ZM22.1807 10.5963H27.0023L26.3135 13.5656H21.6872L22.1807 10.5963ZM12.6197 20.164C10.8141 20.164 9.32979 21.6525 9.32979 23.4632C9.32979 25.2739 10.8141 26.7624 12.6197 26.7624C14.4252 26.7624 15.9095 25.2739 15.9095 23.4632C15.9095 21.6525 14.4252 20.164 12.6197 20.164ZM22.4892 20.164C20.6837 20.164 19.1994 21.6525 19.1994 23.4632C19.1994 25.2739 20.6837 26.7624 22.4892 26.7624C24.2948 26.7624 25.7791 25.2739 25.7791 23.4632C25.7791 21.6525 24.2948 20.164 22.4892 20.164ZM12.6197 22.1435C13.3586 22.1435 13.9356 22.7222 13.9356 23.4632C13.9356 24.2042 13.3586 24.7829 12.6197 24.7829C11.8807 24.7829 11.3037 24.2042 11.3037 23.4632C11.3037 22.7222 11.8807 22.1435 12.6197 22.1435ZM22.4892 22.1435C23.2282 22.1435 23.8052 22.7222 23.8052 23.4632C23.8052 24.2042 23.2282 24.7829 22.4892 24.7829C21.7503 24.7829 21.1733 24.2042 21.1733 23.4632C21.1733 22.7222 21.7503 22.1435 22.4892 22.1435Z\" fill=\"#269da1\" class=\"header__checkout-fill\"></path>-->\n    <!--</svg>-->\n    <!--<span class=\"snipcart-total-price\">$0.00</span>-->\n    <!--(<span class=\"snipcart-items-count\">0</span>)-->\n  <!--</a>-->\n\n\n\n\n\n        <!--</li>-->\n\n        <li class=\"nav-item mt-2\">\n          <form target=\"paypal\" action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" >\n<input type=\"hidden\" name=\"cmd\" value=\"_cart\">\n<input type=\"hidden\" name=\"business\" value=\"DSU9FUQHRA9KS\">\n<input type=\"hidden\" name=\"display\" value=\"1\">\n<input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">\n<img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n</form>\n\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</nav>\n\n<!--<header class=\"masthead text-center text-white d-flex\">-->\n  <!--<div class=\"container my-auto\">-->\n    <!--&lt;!&ndash;style=\"text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;\"&ndash;&gt;-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-10 mx-auto\">-->\n        <!--<h1 class=\"text-uppercase\">-->\n          <!--<strong>Your Online Store for Medical Masks</strong>-->\n        <!--</h1>-->\n        <!--<hr>-->\n      <!--</div>-->\n      <!--<div class=\"col-lg-8 mx-auto\">-->\n        <!--<p style=\"font-weight: bold\" class=\" mb-5\">We are working with our manufacturing and supply chain partners, as well as global health organizations, to provide much needed medical masks around the US.</p>-->\n        <!--<a class=\"btn btn-primary btn-xl js-scroll-trigger\" href=\"#products\">Find Out More</a>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</header>-->\n\n\n"

/***/ }),

/***/ "./src/app/appviews/nav/nav.component.ts":
/*!***********************************************!*\
  !*** ./src/app/appviews/nav/nav.component.ts ***!
  \***********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
        __webpack_require__(/*! src/assets/js/creative.js */ "./src/assets/js/creative.js");
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/appviews/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/appviews/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/appviews/product/product.component.css":
/*!********************************************************!*\
  !*** ./src/app/appviews/product/product.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/product/product.component.html":
/*!*********************************************************!*\
  !*** ./src/app/appviews/product/product.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Single Product</h1>\n"

/***/ }),

/***/ "./src/app/appviews/product/product.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/appviews/product/product.component.ts ***!
  \*******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/appviews/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/appviews/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/appviews/recommended/recommended.component.css":
/*!****************************************************************!*\
  !*** ./src/app/appviews/recommended/recommended.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/recommended/recommended.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/appviews/recommended/recommended.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<section class=\"\">-->\n      <!--<div class=\"container\">-->\n        <!--<div class=\"row\" >-->\n          <!--<div class=\"col-lg-12 text-center\">-->\n            <!--<h2 class=\"section-heading\">Products</h2>-->\n            <!--<hr class=\"my-4\">-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n      <div class=\"container-fluid\" id=\"products\">\n\n\n\n\n\n\n\n\n          <div class=\"row my-4\">\n\n\n              <!--one-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../3m1826\"><img style=\"max-height: 250px\" src=\"assets/img/3m1826.jpg\"></a>\n                      <br><br>\n                        <a routerLink=\"../3m1826\"><h5 class=\"mb-3\" style=\"font-weight: bold\">3M 1826 Face Mask</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">98% bacterial filtration efficacy. Aluminum nose piece and ear loops to ensure proper fit and comfort.                                     Lightweight and hypoallergenic (latex free).</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n\n\n\n<form target=\"paypal\" action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\">\n<input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n<input type=\"hidden\" name=\"hosted_button_id\" value=\"KX4EM4FV5S6GQ\">\n\n\n<div style=\"\" class=\"d-flex justify-content-center align-items-center\">\n\n  <div>\n    <table>\n<tr><td><input type=\"hidden\" name=\"on0\" value=\"Quantity\">Quantity</td></tr><tr><td><select name=\"os0\">\n\t<option value=\"1 Box\">1 Box $30.00 USD</option>\n\t<option value=\"10 Boxes\">10 Boxes $290.00 USD</option>\n\t<option value=\"50 Boxes\">50 Boxes $1,300.00 USD</option>\n</select> </td></tr>\n</table>\n</div>\n\n</div>\n<div style=\"\" class=\"d-flex justify-content-center align-items-center\">\n    <div class=\"p-2\">\n\n        <input type=\"hidden\" name=\"currency_code\" value=\"USD\">\n    <input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\" style=\"\">\n    <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n    </div>\n</div>\n</form>\n\n\n\n\n\n\n\n\n\n\n\n\n                        <!--<button class=\"snipcart-add-item btn btn-primary\"-->\n                          <!--data-item-id=\"4\"-->\n                          <!--data-item-price=\"3.99\"-->\n                          <!--data-item-url=\"https://rsmed.github.io/products.json\"-->\n                          <!--data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"-->\n                          <!--data-item-image=\"assets/img/3M3.png\"-->\n                          <!--data-item-name=\"FFP3 Surgical Mask 3 Ply\">-->\n                          <!--Add to cart-->\n                        <!--</button>-->\n\n                    </div>\n\n\n              </div>\n\n\n              <!--two-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n              <a routerLink=\"../allplex\"><img style=\"max-height: 250px\" src=\"assets/img/allplex.jpg\"></a>\n              <br><br>\n              <a routerLink=\"../allplex\"><h5 class=\"mb-3\" style=\"font-weight: bold\">Allplex™ 2019-nCoV Assay</h5></a>\n              <br>\n              <p class=\"text-muted mb-0\">Simultaneus detection and identification of 3 target genes specific for COVID-19. Powerful performance. Short TAT. Multiplex real-time PCR. Whole process validation. Automatic data analyzer. Proper patient care. User-friendly workflow.</p>\n              <br>\n            </div>\n\n\n            <div class=\"pb-4\">\n\n\n\n                <button class=\"snipcart-add-item btn btn-primary\"\n                  data-item-id=\"4\"\n                  data-item-price=\"3.99\"\n                  data-item-url=\"https://rsmed.github.io/products.json\"\n                  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                  data-item-image=\"assets/img/3M3.png\"\n                  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                  Add to cart\n                </button>\n\n            </div>\n\n\n              </div>\n\n\n\n              <!--three-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n              <a routerLink=\"../yh830\"><img style=\"max-height: 250px\" src=\"assets/img/yh830.jpg\"></a>\n              <br><br>\n              <a routerLink=\"../yh830\"><h5 class=\"mb-3\" style=\"font-weight: bold\">YH-830 Ventilator</h5></a>\n              <br>\n              <p class=\"text-muted mb-0\">Different treatment schemes can be provided according to patients' needs, from CPAP to S, T, S / T, and VGPS.\nAdjustable trigger sensitivity.\nReal-time monitoring and recording of blood oxygen saturation.\nPrompt function.\nRecord function (SD card).\nMaximum leak compensation function.\nCloud platform management function for wireless uploading data\n(WIFI module).</p>\n              <br>\n            </div>\n\n\n            <div class=\"pb-4\">\n\n\n\n                <button class=\"snipcart-add-item btn btn-primary\"\n                  data-item-id=\"4\"\n                  data-item-price=\"3.99\"\n                  data-item-url=\"https://rsmed.github.io/products.json\"\n                  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                  data-item-image=\"assets/img/3M3.png\"\n                  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                  Add to cart\n                </button>\n\n            </div>\n\n\n              </div>\n\n\n\n              <!--four-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../3m8210\"><img style=\"max-height: 250px\" src=\"assets/img/3mstubborn.jpg\"></a>\n                      <br><br>\n                      <a routerLink=\"../3m8210\"><h5 class=\"mb-3\" style=\"font-weight: bold\">3M 8210 N95 Face Mask</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">FDA certified. Filters out 95% of non-oily particles. Contains a non-woven, antibacterial layer on the outside of\nmask to serve as a protective layer, as well as two additional filtration layers.</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n\n\n\n\n\n\n\n\n\n          </div>\n\n\n\n\n\n\n          <div class=\"row my-4\">\n\n\n              <!--one-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../kn95\"><img style=\"max-height: 250px\" src=\"assets/img/kn95.jpg\"></a>\n                      <br><br>\n                        <a routerLink=\"../kn95\"><h5 class=\"mb-3\" style=\"font-weight: bold\">KN-95 Disposable Face Masks</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">5 layer maximum filtration (filters out 95% of air/particles from outside to inside of mask). Includes bendable nose-clip to ensure proper fit. Soft, odorless, highly fluid resistant.</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n              <!--two-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                   <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../3m1860\"><img style=\"max-height: 250px\" src=\"assets/img/3m1860.jpg\"></a>\n                      <br><br>\n                      <a routerLink=\"../3m1860\"><h5 class=\"mb-3\" style=\"font-weight: bold\">3M 1860 Face Mask</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">NIOSH approved, FDA cleared. 99% BFE (Bacterial Filtration Efficiency). Fluid resistant & latex free. Cushioning nose piece and elastic headbands for comfort and proper fit.</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n\n              <!--three-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../3ply\"><img style=\"max-height: 250px\" src=\"assets/img/3ply.jpg\"></a>\n                      <br><br>\n                      <a routerLink=\"../3ply\"><h5 class=\"mb-3\" style=\"font-weight: bold\">3 Ply Disposable Surgical Face Masks</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">Fluid-resistant. Pleated. 3 PLY Non woven material. Pliable nose piece for proper fit across nose & cheekbones. 100% fiberglass & latex free.</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n\n              <!--four-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n              <a routerLink=\"../medakit\"><img style=\"max-height: 250px\" src=\"assets/img/kit1.jpg\"></a>\n              <br><br>\n                <a routerLink=\"../medakit\"><h5 class=\"mb-3\" style=\"font-weight: bold\">Covid-19 IgG/IgM Antibody\nRapid Test Kit</h5></a>\n              <br>\n              <p class=\"text-muted mb-0\">Kit uses immunochromatographic technology to detect the\nIgG/IgM antibody of COVID-19 in human serum/ plasma/\nwhole blood. Includes: Test Cassete, Diluent, Dropper Tip, Alcohol Pad,\nInstruction Manual.</p>\n              <br>\n            </div>\n\n\n            <div class=\"pb-4\">\n\n\n\n\n\n                <button class=\"snipcart-add-item btn btn-primary\"\n                  data-item-id=\"4\"\n                  data-item-price=\"3.99\"\n                  data-item-url=\"https://rsmed.github.io/products.json\"\n                  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                  data-item-image=\"assets/img/3M3.png\"\n                  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                  Add to cart\n                </button>\n\n            </div>\n\n\n              </div>\n\n\n\n\n\n\n\n\n\n\n\n          </div>\n\n\n\n\n          <div class=\"row my-4\">\n\n\n              <!--one-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n              <a routerLink=\"../surgicalgown\"><img style=\"max-height: 250px\" src=\"assets/img/surgicalgown.jpg\"></a>\n              <br><br>\n                <a routerLink=\"../surgicalgown\"><h5 class=\"mb-3\" style=\"font-weight: bold\">Disposable Surgical Gowns</h5></a>\n              <br>\n              <p class=\"text-muted mb-0\">3120 Standard High-Performance Gown, 45g\nPolycarbonate, Disposable, Anti-static, Splash Resistant\nStandard EN 13795:2019, FDA & CE Certified.\nUsed to reduce infection and create a layer of protection\nagainst splash.</p>\n              <br>\n            </div>\n\n\n            <div class=\"pb-4\">\n\n\n\n\n\n                <button class=\"snipcart-add-item btn btn-primary\"\n                  data-item-id=\"4\"\n                  data-item-price=\"3.99\"\n                  data-item-url=\"https://rsmed.github.io/products.json\"\n                  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                  data-item-image=\"assets/img/3M3.png\"\n                  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                  Add to cart\n                </button>\n\n            </div>\n\n\n              </div>\n\n\n              <!--two-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../n95\"><img style=\"max-height: 250px\" src=\"assets/img/n95.jpg\"></a>\n                      <br><br>\n                      <a routerLink=\"../n95\"><h5 class=\"mb-3\" style=\"font-weight: bold\">N95 Disposable Face Masks</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">Filters out 95% of non-oily particles. Contains a non-woven,\n                          antibacterial layer on the outside of mask to serve as a protective layer,\n                           as well as two additional filtration layers. Includes an adjustable aluminum nose-clip to ensure proper fit</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n\n              <!--three-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n              <a routerLink=\"../sanitizer16\"><img style=\"max-height: 250px\" src=\"assets/img/sanatizer16.jpg\"></a>\n              <br><br>\n                <a routerLink=\"../sanitizer16\"><h5 class=\"mb-3\" style=\"font-weight: bold\">16.9OZ Anti-Bacterial Hand\nSanitizer</h5></a>\n              <br>\n              <p class=\"text-muted mb-0\">Alcohol antiseptic 80% topical solution.</p>\n              <br>\n            </div>\n\n\n            <div class=\"pb-4\">\n\n\n\n\n\n                <button class=\"snipcart-add-item btn btn-primary\"\n                  data-item-id=\"4\"\n                  data-item-price=\"3.99\"\n                  data-item-url=\"https://rsmed.github.io/products.json\"\n                  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                  data-item-image=\"assets/img/3M3.png\"\n                  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                  Add to cart\n                </button>\n\n            </div>\n\n\n              </div>\n\n\n\n              <!--four-->\n              <div class=\"col-12 col-sm-6 col-lg text-center d-flex flex-column justify-content-between\">\n\n\n                    <div class=\"service-box mt-5 mx-auto\">\n                      <a routerLink=\"../shield\"><img style=\"max-height: 250px\" src=\"assets/img/shield.jpg\"></a>\n                      <br><br>\n                      <a routerLink=\"../shield\"><h5 class=\"mb-3\" style=\"font-weight: bold\">Face Shields</h5></a>\n                      <br>\n                      <p class=\"text-muted mb-0\">Plastic face shields (disposable). 9 x13 in plastic shield. Foam forehead support.\n                      Elastic strap.</p>\n                      <br>\n                    </div>\n\n\n                    <div class=\"pb-4\">\n\n\n\n                        <button class=\"snipcart-add-item btn btn-primary\"\n                          data-item-id=\"4\"\n                          data-item-price=\"3.99\"\n                          data-item-url=\"https://rsmed.github.io/products.json\"\n                          data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                          data-item-image=\"assets/img/3M3.png\"\n                          data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                          Add to cart\n                        </button>\n\n                    </div>\n\n\n              </div>\n\n\n\n\n\n\n\n\n\n\n\n          </div>\n\n\n      </div>\n    <!--</section>-->\n"

/***/ }),

/***/ "./src/app/appviews/recommended/recommended.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/appviews/recommended/recommended.component.ts ***!
  \***************************************************************/
/*! exports provided: RecommendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedComponent", function() { return RecommendedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecommendedComponent = /** @class */ (function () {
    function RecommendedComponent() {
    }
    RecommendedComponent.prototype.ngOnInit = function () {
    };
    RecommendedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recommended',
            template: __webpack_require__(/*! ./recommended.component.html */ "./src/app/appviews/recommended/recommended.component.html"),
            styles: [__webpack_require__(/*! ./recommended.component.css */ "./src/app/appviews/recommended/recommended.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecommendedComponent);
    return RecommendedComponent;
}());



/***/ }),

/***/ "./src/app/appviews/sanitizer-gallon/sanitizer-gallon.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/appviews/sanitizer-gallon/sanitizer-gallon.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/sanitizer-gallon/sanitizer-gallon.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/appviews/sanitizer-gallon/sanitizer-gallon.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/sanatizergallon.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">1 Gallon Anti-Bacterial Hand\nSanitizer</h1>\n            <br>\n            <p class=\"text-muted\">Alcohol antiseptic 80% topical solution</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">1 Gallon Anti-Bacterial Hand\nSanitizer</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/sanatizergallon.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/sanitizer-gallon/sanitizer-gallon.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/appviews/sanitizer-gallon/sanitizer-gallon.component.ts ***!
  \*************************************************************************/
/*! exports provided: SanitizerGallonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizerGallonComponent", function() { return SanitizerGallonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SanitizerGallonComponent = /** @class */ (function () {
    function SanitizerGallonComponent() {
    }
    SanitizerGallonComponent.prototype.ngOnInit = function () {
    };
    SanitizerGallonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sanitizer-gallon',
            template: __webpack_require__(/*! ./sanitizer-gallon.component.html */ "./src/app/appviews/sanitizer-gallon/sanitizer-gallon.component.html"),
            styles: [__webpack_require__(/*! ./sanitizer-gallon.component.css */ "./src/app/appviews/sanitizer-gallon/sanitizer-gallon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SanitizerGallonComponent);
    return SanitizerGallonComponent;
}());



/***/ }),

/***/ "./src/app/appviews/sanitizer16/sanitizer16.component.css":
/*!****************************************************************!*\
  !*** ./src/app/appviews/sanitizer16/sanitizer16.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/sanitizer16/sanitizer16.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/appviews/sanitizer16/sanitizer16.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/sanatizer16.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">16.9OZ Anti-Bacterial Hand\nSanitizer</h1>\n            <br>\n            <p class=\"text-muted\">Alcohol antiseptic 80% topical solution</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">16.9OZ Anti-Bacterial Hand\nSanitizer</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/sanatizer16.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/sanitizer16/sanitizer16.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/appviews/sanitizer16/sanitizer16.component.ts ***!
  \***************************************************************/
/*! exports provided: Sanitizer16Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sanitizer16Component", function() { return Sanitizer16Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Sanitizer16Component = /** @class */ (function () {
    function Sanitizer16Component() {
    }
    Sanitizer16Component.prototype.ngOnInit = function () {
    };
    Sanitizer16Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sanitizer16',
            template: __webpack_require__(/*! ./sanitizer16.component.html */ "./src/app/appviews/sanitizer16/sanitizer16.component.html"),
            styles: [__webpack_require__(/*! ./sanitizer16.component.css */ "./src/app/appviews/sanitizer16/sanitizer16.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Sanitizer16Component);
    return Sanitizer16Component;
}());



/***/ }),

/***/ "./src/app/appviews/sanitizers/sanitizers.component.css":
/*!**************************************************************!*\
  !*** ./src/app/appviews/sanitizers/sanitizers.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/sanitizers/sanitizers.component.html":
/*!***************************************************************!*\
  !*** ./src/app/appviews/sanitizers/sanitizers.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"products\">\n\n\n\n\n\n\n\n\n    <div class=\"row my-4 d-flex justify-content-center\">\n\n\n      <!--one-->\n      <div class=\"col-12 col-sm-6 col-lg-4 text-center d-flex flex-column justify-content-between\">\n\n\n            <div class=\"service-box mt-5 mx-auto\">\n              <a routerLink=\"../sanitizer16\"><img style=\"max-height: 250px\" src=\"assets/img/sanatizer16.jpg\"></a>\n              <br><br>\n                <a routerLink=\"../sanitizer16\"><h5 class=\"mb-3\" style=\"font-weight: bold\">16.9OZ Anti-Bacterial Hand\nSanitizer</h5></a>\n              <br>\n              <p class=\"text-muted mb-0\">Alcohol antiseptic 80% topical solution.</p>\n              <br>\n            </div>\n\n\n            <div class=\"pb-4\">\n\n\n\n\n\n                <button class=\"snipcart-add-item btn btn-primary\"\n                  data-item-id=\"4\"\n                  data-item-price=\"3.99\"\n                  data-item-url=\"https://rsmed.github.io/products.json\"\n                  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                  data-item-image=\"assets/img/3M3.png\"\n                  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                  Add to cart\n                </button>\n\n            </div>\n\n\n      </div>\n\n\n      <!--two-->\n      <div class=\"col-12 col-sm-6 col-lg-4 text-center d-flex flex-column justify-content-between\">\n\n\n            <div class=\"service-box mt-5 mx-auto\">\n              <a routerLink=\"../sanitizergallon\"><img style=\"max-height: 250px\" src=\"assets/img/sanatizergallon.jpg\"></a>\n              <br><br>\n              <a routerLink=\"../sanitizergallon\"><h5 class=\"mb-3\" style=\"font-weight: bold\">1 Gallon Anti-Bacterial Hand\nSanitizer</h5></a>\n              <br>\n              <p class=\"text-muted mb-0\">Alcohol antiseptic 80% topical solution.</p>\n              <br>\n            </div>\n\n\n            <div class=\"pb-4\">\n\n\n\n                <button class=\"snipcart-add-item btn btn-primary\"\n                  data-item-id=\"4\"\n                  data-item-price=\"3.99\"\n                  data-item-url=\"https://rsmed.github.io/products.json\"\n                  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                  data-item-image=\"assets/img/3M3.png\"\n                  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                  Add to cart\n                </button>\n\n            </div>\n\n\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/sanitizers/sanitizers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/appviews/sanitizers/sanitizers.component.ts ***!
  \*************************************************************/
/*! exports provided: SanitizersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizersComponent", function() { return SanitizersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SanitizersComponent = /** @class */ (function () {
    function SanitizersComponent() {
    }
    SanitizersComponent.prototype.ngOnInit = function () {
    };
    SanitizersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sanitizers',
            template: __webpack_require__(/*! ./sanitizers.component.html */ "./src/app/appviews/sanitizers/sanitizers.component.html"),
            styles: [__webpack_require__(/*! ./sanitizers.component.css */ "./src/app/appviews/sanitizers/sanitizers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SanitizersComponent);
    return SanitizersComponent;
}());



/***/ }),

/***/ "./src/app/appviews/tabs/tabs.component.css":
/*!**************************************************!*\
  !*** ./src/app/appviews/tabs/tabs.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 1281px){\n    nav {\n        margin-top: 100px;\n\n    }\n}\n@media (max-width: 1280px){\n    nav {\n        margin-top: 85px;\n\n    }\n}\n/*nav {*/\n/*!*position: fixed;*!*/\n/*margin-top: 85px;*/\n/*!*width: 100%;*!*/\n/*!*z-index: 1;*!*/\n/*}*/\n.navbar-serge .nav-link {\n    padding-top: .75rem;\n    padding-bottom: .75rem;\n    font-size: .875rem;\n    color: #373a3c;\n    border-color: darkgray;\n    border-style: solid;\n    border-width: thin;\n  }\n.navbar-serge .active {\n    font-weight: 600;\n    background-color: #11A6BD;\n    color: #fff;\n  }\n.navbar-serge {\n    background: white;\n    background-color:white;\n  }\n"

/***/ }),

/***/ "./src/app/appviews/tabs/tabs.component.html":
/*!***************************************************!*\
  !*** ./src/app/appviews/tabs/tabs.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<br><br><br>-->\n <nav role=\"navigation\" class=\"navbar-serge nav-tabs\">\n\n<div class=\"container\">\n<div class=\"row bg-light\">\n\n    <a class=\"col nav-item nav-link btn-light text-center\" data-toggle=\"tab\" routerLink=\"\" [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        Recommended\n    </a>\n    <a class=\"col nav-item nav-link btn-light  text-center\" data-toggle=\"tab\" routerLink=\"masks\" [routerLinkActive]=\"'active'\">\n        Masks\n    </a>\n    <a class=\"col nav-item nav-link btn-light 3 text-center\" data-toggle=\"tab\" routerLink=\"clothing\" [routerLinkActive]=\"'active'\">\n        Clothing\n    </a>\n    <a class=\"col nav-item nav-link btn-light  text-center\" data-toggle=\"tab\" routerLink=\"sanitizers\" [routerLinkActive]=\"'active'\">\n        Sanitizers\n    </a>\n    <a class=\"col nav-item nav-link btn-light  text-center\" data-toggle=\"tab\" routerLink=\"ventilators\" [routerLinkActive]=\"'active'\">\n        Ventilators\n    </a>\n    <a class=\"col nav-item nav-link btn-light  text-center\" data-toggle=\"tab\" routerLink=\"gloves\" [routerLinkActive]=\"'active'\">\n        Gloves\n    </a>\n    <a class=\"col nav-item nav-link btn-light  text-center\" data-toggle=\"tab\" routerLink=\"kits\" [routerLinkActive]=\"'active'\">\n        Testing Kits\n    </a>\n\n</div>\n\n</div>\n\n\n</nav>\n"

/***/ }),

/***/ "./src/app/appviews/tabs/tabs.component.ts":
/*!*************************************************!*\
  !*** ./src/app/appviews/tabs/tabs.component.ts ***!
  \*************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.sections = ['masks', 'clothing', 'hand sanitizers', 'ventilators', 'testing kits', 'gloves'];
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/appviews/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/appviews/tabs/tabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/appviews/vent-vg70/vent-vg70.component.css":
/*!************************************************************!*\
  !*** ./src/app/appviews/vent-vg70/vent-vg70.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/vent-vg70/vent-vg70.component.html":
/*!*************************************************************!*\
  !*** ./src/app/appviews/vent-vg70/vent-vg70.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/vg70.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">VG 70 Ventilator</h1>\n            <br>\n            <p class=\"text-muted\">FDA Certified</p>\n            <p class=\"text-muted\">Apnea ventilation</p>\n            <p class=\"text-muted\">Lung mechanic</p>\n            <p class=\"text-muted\">Pressure and Flow trigger</p>\n            <p class=\"text-muted\">Automatic Tube Compensation (ATC)</p>\n            <p class=\"text-muted\">Smart</p>\n            <p class=\"text-muted\">Manual breath</p>\n            <p class=\"text-muted\">Insp/Exp hold</p>\n            <p class=\"text-muted\">Waveform freeze</p>\n            <p class=\"text-muted\">Nebulization</p>\n            <p class=\"text-muted\">Non-invasive ventilation (NIV)</p>\n            <p class=\"text-muted\">EtCO2 measurement</p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">VG 70 Ventilator</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/vg70.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/vent-vg70/vent-vg70.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/appviews/vent-vg70/vent-vg70.component.ts ***!
  \***********************************************************/
/*! exports provided: VentVG70Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentVG70Component", function() { return VentVG70Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VentVG70Component = /** @class */ (function () {
    function VentVG70Component() {
    }
    VentVG70Component.prototype.ngOnInit = function () {
    };
    VentVG70Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vent-vg70',
            template: __webpack_require__(/*! ./vent-vg70.component.html */ "./src/app/appviews/vent-vg70/vent-vg70.component.html"),
            styles: [__webpack_require__(/*! ./vent-vg70.component.css */ "./src/app/appviews/vent-vg70/vent-vg70.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VentVG70Component);
    return VentVG70Component;
}());



/***/ }),

/***/ "./src/app/appviews/vent-yh830/vent-yh830.component.css":
/*!**************************************************************!*\
  !*** ./src/app/appviews/vent-yh830/vent-yh830.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/vent-yh830/vent-yh830.component.html":
/*!***************************************************************!*\
  !*** ./src/app/appviews/vent-yh830/vent-yh830.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"container py-5\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-6 col-md-4 justify-content-center align-items-center d-flex\">\n            <a data-toggle=\"modal\" href=\"#myModal\"><img style=\"max-height: 250px;\" src=\"assets/img/yh830.jpg\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-8 mt-5 p-sm-3 px-3\" >\n            <h1 style=\"font-weight: bold\">YH-830 Ventilator</h1>\n            <br>\n            <p class=\"text-muted\">Different treatment schemes can be provided according to patients' needs, from CPAP to S, T, S / T, and VGPS</p>\n            <p class=\"text-muted\">Adjustable trigger sensitivity</p>\n            <p class=\"text-muted \">Real-time monitoring and recording of blood oxygen saturation</p>\n            <p class=\"text-muted \">Prompt function</p>\n            <p class=\"text-muted\">Record function (SD card).</p>\n            <p class=\"text-muted\">Maximum leak compensation function.</p>\n            <p class=\"text-muted\">Cloud platform management function for wireless uploading data\n(WIFI module).</p>\n            <p class=\"text-muted\"></p>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-end\" >\n        <div class=\"p-5\">\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://rsmed.github.io/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" style=\"font-weight: bold\">YH-830 Ventilator</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\" style=\"background-color: transparent\">\n        <img style=\"width: 100%\" src=\"assets/img/yh830.jpg\">\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/vent-yh830/vent-yh830.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/appviews/vent-yh830/vent-yh830.component.ts ***!
  \*************************************************************/
/*! exports provided: VentYH830Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentYH830Component", function() { return VentYH830Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VentYH830Component = /** @class */ (function () {
    function VentYH830Component() {
    }
    VentYH830Component.prototype.ngOnInit = function () {
    };
    VentYH830Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vent-yh830',
            template: __webpack_require__(/*! ./vent-yh830.component.html */ "./src/app/appviews/vent-yh830/vent-yh830.component.html"),
            styles: [__webpack_require__(/*! ./vent-yh830.component.css */ "./src/app/appviews/vent-yh830/vent-yh830.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VentYH830Component);
    return VentYH830Component;
}());



/***/ }),

/***/ "./src/app/appviews/ventilators/ventilators.component.css":
/*!****************************************************************!*\
  !*** ./src/app/appviews/ventilators/ventilators.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/ventilators/ventilators.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/appviews/ventilators/ventilators.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"products\">\n\n\n\n\n\n\n\n\n    <div class=\"row my-4 d-flex justify-content-center\">\n\n\n      <!--one-->\n      <div class=\"col-12 col-sm-6 col-lg-4 text-center d-flex flex-column justify-content-between\">\n\n\n            <div class=\"service-box mt-5 mx-auto\">\n              <a routerLink=\"../vg70\"><img style=\"max-height: 250px\" src=\"assets/img/vg70.jpg\"></a>\n              <br><br>\n                <a routerLink=\"../vg70\"><h5 class=\"mb-3\" style=\"font-weight: bold\">VG 70 Ventilator</h5></a>\n              <br>\n              <p class=\"text-muted mb-0\">FDA Certified.\nApnea ventilation.\nLung mechanic.\nPressure and Flow trigger.\nAutomatic Tube Compensation (ATC).\nSmart.\nManual breath.\nInsp/Exp hold.\nWaveform freeze.\nNebulization.\nNon-invasive ventilation (NIV).\nEtCO2 measurement.</p>\n              <br>\n            </div>\n\n\n            <div class=\"pb-4\">\n\n\n\n\n\n                <button class=\"snipcart-add-item btn btn-primary\"\n                  data-item-id=\"4\"\n                  data-item-price=\"3.99\"\n                  data-item-url=\"https://rsmed.github.io/products.json\"\n                  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                  data-item-image=\"assets/img/3M3.png\"\n                  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                  Add to cart\n                </button>\n\n            </div>\n\n\n      </div>\n\n\n      <!--two-->\n      <div class=\"col-12 col-sm-6 col-lg-4 text-center d-flex flex-column justify-content-between\">\n\n\n            <div class=\"service-box mt-5 mx-auto\">\n              <a routerLink=\"../yh830\"><img style=\"max-height: 250px\" src=\"assets/img/yh830.jpg\"></a>\n              <br><br>\n              <a routerLink=\"../yh830\"><h5 class=\"mb-3\" style=\"font-weight: bold\">YH-830 Ventilator</h5></a>\n              <br>\n              <p class=\"text-muted mb-0\">Different treatment schemes can be provided according to patients' needs, from CPAP to S, T, S / T, and VGPS.\nAdjustable trigger sensitivity.\nReal-time monitoring and recording of blood oxygen saturation.\nPrompt function.\nRecord function (SD card).\nMaximum leak compensation function.\nCloud platform management function for wireless uploading data\n(WIFI module).</p>\n              <br>\n            </div>\n\n\n            <div class=\"pb-4\">\n\n\n\n                <button class=\"snipcart-add-item btn btn-primary\"\n                  data-item-id=\"4\"\n                  data-item-price=\"3.99\"\n                  data-item-url=\"https://rsmed.github.io/products.json\"\n                  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n                  data-item-image=\"assets/img/3M3.png\"\n                  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n                  Add to cart\n                </button>\n\n            </div>\n\n\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/ventilators/ventilators.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/appviews/ventilators/ventilators.component.ts ***!
  \***************************************************************/
/*! exports provided: VentilatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentilatorsComponent", function() { return VentilatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VentilatorsComponent = /** @class */ (function () {
    function VentilatorsComponent() {
    }
    VentilatorsComponent.prototype.ngOnInit = function () {
    };
    VentilatorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ventilators',
            template: __webpack_require__(/*! ./ventilators.component.html */ "./src/app/appviews/ventilators/ventilators.component.html"),
            styles: [__webpack_require__(/*! ./ventilators.component.css */ "./src/app/appviews/ventilators/ventilators.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VentilatorsComponent);
    return VentilatorsComponent;
}());



/***/ }),

/***/ "./src/assets/js/creative.js":
/*!***********************************!*\
  !*** ./src/assets/js/creative.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// setTimeout(function(){

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {

    if ($("#mainNav").length) {
  if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
}

  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });




// code to fix modal back button
 $(".modal").on("shown.bs.modal", function()  { // any time a modal is shown
    var urlReplace = "#" + $(this).attr('id'); // make the hash the id of the modal shown
    history.pushState(null, null, urlReplace); // push state that hash into the url
  });

  // If a pushstate has previously happened and the back button is clicked, hide any modals.
  $(window).on('popstate', function() {
    $(".modal").modal('hide');
  });
})(jQuery); // End of use strict


// }, 100);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/georgeurakhchin/Documents/rsmed-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.e4d0a4a58b81b8062083.js.map