function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/toolbar/toolbar.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Kirsova-UI';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [["fxLayout", "row", "fxLayoutAlign", "stretch", "fxFill", "", 1, "main"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"]],
      styles: ["app-sidebar[_ngcontent-%COMP%] {\r\n  width: 260px;\r\n  background-color: lightblue;\r\n}\r\n\r\n  app-content {\r\n  position: relative;\r\n  overflow: auto;\r\n  width: 100%;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  padding-top: 60px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc2lkZWJhciB7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuL2RlZXAvIGFwcC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxuXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/toolbar/toolbar.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _services_area_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/area.service */
    "./src/app/services/area.service.ts");
    /* harmony import */


    var _area_view_area_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./area-view/area-view.component */
    "./src/app/area-view/area-view.component.ts");
    /* harmony import */


    var _brigade_view_brigade_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./brigade-view/brigade-view.component */
    "./src/app/brigade-view/brigade-view.component.ts");
    /* harmony import */


    var _services_brigade_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/brigade.service */
    "./src/app/services/brigade.service.ts");
    /* harmony import */


    var _services_equipment_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/equipment.service */
    "./src/app/services/equipment.service.ts");
    /* harmony import */


    var _equipment_view_equipment_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./equipment-view/equipment-view.component */
    "./src/app/equipment-view/equipment-view.component.ts");
    /* harmony import */


    var _services_laboratory_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/laboratory.service */
    "./src/app/services/laboratory.service.ts");
    /* harmony import */


    var _laboratory_view_laboratory_view_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./laboratory-view/laboratory-view.component */
    "./src/app/laboratory-view/laboratory-view.component.ts");
    /* harmony import */


    var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./product-view/product-view.component */
    "./src/app/product-view/product-view.component.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _team_of_area_boss_view_team_of_area_boss_view_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./team-of-area-boss-view/team-of-area-boss-view.component */
    "./src/app/team-of-area-boss-view/team-of-area-boss-view.component.ts");
    /* harmony import */


    var _services_teamOfAreaBoss_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./services/teamOfAreaBoss.service */
    "./src/app/services/teamOfAreaBoss.service.ts");
    /* harmony import */


    var _services_techPersonalService__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./services/techPersonalService */
    "./src/app/services/techPersonalService.ts");
    /* harmony import */


    var _technical_personal_view_technical_personal_view_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./technical-personal-view/technical-personal-view.component */
    "./src/app/technical-personal-view/technical-personal-view.component.ts");
    /* harmony import */


    var _services_worker_my_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./services/worker-my.service */
    "./src/app/services/worker-my.service.ts");
    /* harmony import */


    var _worker_my_view_worker_my_view_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./worker-my-view/worker-my-view.component */
    "./src/app/worker-my-view/worker-my-view.component.ts");
    /* harmony import */


    var _services_workshop_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./services/workshop.service */
    "./src/app/services/workshop.service.ts");
    /* harmony import */


    var _workshop_view_workshop_view_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./workshop-view/workshop-view.component */
    "./src/app/workshop-view/workshop-view.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./select-dialog-single/select-dialog-single.component */
    "./src/app/select-dialog-single/select-dialog-single.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_area_service__WEBPACK_IMPORTED_MODULE_19__["AreaService"], _services_brigade_service__WEBPACK_IMPORTED_MODULE_22__["BrigadeService"], _services_equipment_service__WEBPACK_IMPORTED_MODULE_23__["EquipmentService"], _services_laboratory_service__WEBPACK_IMPORTED_MODULE_25__["LaboratoryService"], _services_product_service__WEBPACK_IMPORTED_MODULE_28__["ProductService"], _services_teamOfAreaBoss_service__WEBPACK_IMPORTED_MODULE_30__["TeamOfAreaBossService"], _services_techPersonalService__WEBPACK_IMPORTED_MODULE_31__["TechPersonalService"], _services_worker_my_service__WEBPACK_IMPORTED_MODULE_33__["WorkerMyService"], _services_workshop_service__WEBPACK_IMPORTED_MODULE_35__["WorkshopService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_10__["appRoutes"]), _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_38__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_39__["MatSelectModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_40__["MatDialogModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"], _area_view_area_view_component__WEBPACK_IMPORTED_MODULE_20__["AreaViewComponent"], _brigade_view_brigade_view_component__WEBPACK_IMPORTED_MODULE_21__["BrigadeViewComponent"], _equipment_view_equipment_view_component__WEBPACK_IMPORTED_MODULE_24__["EquipmentViewComponent"], _laboratory_view_laboratory_view_component__WEBPACK_IMPORTED_MODULE_26__["LaboratoryViewComponent"], _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_27__["ProductViewComponent"], _team_of_area_boss_view_team_of_area_boss_view_component__WEBPACK_IMPORTED_MODULE_29__["TeamOfAreaBossViewComponent"], _technical_personal_view_technical_personal_view_component__WEBPACK_IMPORTED_MODULE_32__["TechnicalPersonalViewComponent"], _worker_my_view_worker_my_view_component__WEBPACK_IMPORTED_MODULE_34__["WorkerMyViewComponent"], _workshop_view_workshop_view_component__WEBPACK_IMPORTED_MODULE_36__["WorkshopViewComponent"], _select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_41__["SelectDialogSingleComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_38__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_39__["MatSelectModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_40__["MatDialogModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"], _area_view_area_view_component__WEBPACK_IMPORTED_MODULE_20__["AreaViewComponent"], _brigade_view_brigade_view_component__WEBPACK_IMPORTED_MODULE_21__["BrigadeViewComponent"], _equipment_view_equipment_view_component__WEBPACK_IMPORTED_MODULE_24__["EquipmentViewComponent"], _laboratory_view_laboratory_view_component__WEBPACK_IMPORTED_MODULE_26__["LaboratoryViewComponent"], _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_27__["ProductViewComponent"], _team_of_area_boss_view_team_of_area_boss_view_component__WEBPACK_IMPORTED_MODULE_29__["TeamOfAreaBossViewComponent"], _technical_personal_view_technical_personal_view_component__WEBPACK_IMPORTED_MODULE_32__["TechnicalPersonalViewComponent"], _worker_my_view_worker_my_view_component__WEBPACK_IMPORTED_MODULE_34__["WorkerMyViewComponent"], _workshop_view_workshop_view_component__WEBPACK_IMPORTED_MODULE_36__["WorkshopViewComponent"], _select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_41__["SelectDialogSingleComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_10__["appRoutes"]), _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_38__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_39__["MatSelectModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_40__["MatDialogModule"]],
          providers: [_services_area_service__WEBPACK_IMPORTED_MODULE_19__["AreaService"], _services_brigade_service__WEBPACK_IMPORTED_MODULE_22__["BrigadeService"], _services_equipment_service__WEBPACK_IMPORTED_MODULE_23__["EquipmentService"], _services_laboratory_service__WEBPACK_IMPORTED_MODULE_25__["LaboratoryService"], _services_product_service__WEBPACK_IMPORTED_MODULE_28__["ProductService"], _services_teamOfAreaBoss_service__WEBPACK_IMPORTED_MODULE_30__["TeamOfAreaBossService"], _services_techPersonalService__WEBPACK_IMPORTED_MODULE_31__["TechPersonalService"], _services_worker_my_service__WEBPACK_IMPORTED_MODULE_33__["WorkerMyService"], _services_workshop_service__WEBPACK_IMPORTED_MODULE_35__["WorkshopService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: appRoutes */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutes", function () {
      return appRoutes;
    });
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _area_view_area_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./area-view/area-view.component */
    "./src/app/area-view/area-view.component.ts");
    /* harmony import */


    var _brigade_view_brigade_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./brigade-view/brigade-view.component */
    "./src/app/brigade-view/brigade-view.component.ts");
    /* harmony import */


    var _equipment_view_equipment_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./equipment-view/equipment-view.component */
    "./src/app/equipment-view/equipment-view.component.ts");
    /* harmony import */


    var _laboratory_view_laboratory_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./laboratory-view/laboratory-view.component */
    "./src/app/laboratory-view/laboratory-view.component.ts");
    /* harmony import */


    var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-view/product-view.component */
    "./src/app/product-view/product-view.component.ts");
    /* harmony import */


    var _team_of_area_boss_view_team_of_area_boss_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./team-of-area-boss-view/team-of-area-boss-view.component */
    "./src/app/team-of-area-boss-view/team-of-area-boss-view.component.ts");
    /* harmony import */


    var _technical_personal_view_technical_personal_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./technical-personal-view/technical-personal-view.component */
    "./src/app/technical-personal-view/technical-personal-view.component.ts");
    /* harmony import */


    var _worker_my_view_worker_my_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./worker-my-view/worker-my-view.component */
    "./src/app/worker-my-view/worker-my-view.component.ts");
    /* harmony import */


    var _workshop_view_workshop_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./workshop-view/workshop-view.component */
    "./src/app/workshop-view/workshop-view.component.ts");

    var appRoutes = [{
      path: 'sidebar',
      component: _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__["SidebarComponent"]
    }, {
      path: 'content',
      component: _content_content_component__WEBPACK_IMPORTED_MODULE_1__["ContentComponent"]
    }, {
      path: 'areaView',
      component: _area_view_area_view_component__WEBPACK_IMPORTED_MODULE_2__["AreaViewComponent"]
    }, {
      path: 'brigadeView',
      component: _brigade_view_brigade_view_component__WEBPACK_IMPORTED_MODULE_3__["BrigadeViewComponent"]
    }, {
      path: 'equipmentView',
      component: _equipment_view_equipment_view_component__WEBPACK_IMPORTED_MODULE_4__["EquipmentViewComponent"]
    }, {
      path: 'laboratoryView',
      component: _laboratory_view_laboratory_view_component__WEBPACK_IMPORTED_MODULE_5__["LaboratoryViewComponent"]
    }, {
      path: 'productView',
      component: _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_6__["ProductViewComponent"]
    }, {
      path: 'teamOfAreaBossView',
      component: _team_of_area_boss_view_team_of_area_boss_view_component__WEBPACK_IMPORTED_MODULE_7__["TeamOfAreaBossViewComponent"]
    }, {
      path: 'technicalPersonalView',
      component: _technical_personal_view_technical_personal_view_component__WEBPACK_IMPORTED_MODULE_8__["TechnicalPersonalViewComponent"]
    }, {
      path: 'workerView',
      component: _worker_my_view_worker_my_view_component__WEBPACK_IMPORTED_MODULE_9__["WorkerMyViewComponent"]
    }, {
      path: 'workshopView',
      component: _workshop_view_workshop_view_component__WEBPACK_IMPORTED_MODULE_10__["WorkshopViewComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/area-view/area-view.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/area-view/area-view.component.ts ***!
    \**************************************************/

  /*! exports provided: AreaViewComponent */

  /***/
  function srcAppAreaViewAreaViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreaViewComponent", function () {
      return AreaViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/area */
    "./src/app/model/area.ts");
    /* harmony import */


    var _model_area_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/area-edit */
    "./src/app/model/area-edit.ts");
    /* harmony import */


    var _model_select_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/select-data */
    "./src/app/model/select-data.ts");
    /* harmony import */


    var _select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../select-dialog-single/select-dialog-single.component */
    "./src/app/select-dialog-single/select-dialog-single.component.ts");
    /* harmony import */


    var _services_area_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/area.service */
    "./src/app/services/area.service.ts");
    /* harmony import */


    var _services_teamOfAreaBoss_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/teamOfAreaBoss.service */
    "./src/app/services/teamOfAreaBoss.service.ts");
    /* harmony import */


    var _services_brigade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/brigade.service */
    "./src/app/services/brigade.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _services_workshop_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/workshop.service */
    "./src/app/services/workshop.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function AreaViewComponent_mat_expansion_panel_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Area id: NEW ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add new Area ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AreaViewComponent_mat_expansion_panel_3_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.newAreaDescription = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreaViewComponent_mat_expansion_panel_3_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.createArea(_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreaViewComponent_mat_expansion_panel_3_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r8.addAreaEvent = false;
          return ctx_r8.newAreaDescription = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.newAreaDescription);
      }
    }

    function AreaViewComponent_mat_expansion_panel_4_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Team of Boss id:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreaViewComponent_mat_expansion_panel_4_div_18_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var area_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.deleteTeamOfAreaBossEvent(area_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var area_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r9.teamOfAreaBoss.teamId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r9.teamOfAreaBoss.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r9.teamOfAreaBoss.modified);
      }
    }

    function AreaViewComponent_mat_expansion_panel_4_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Team Of Area Boss is not assigned ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreaViewComponent_mat_expansion_panel_4_ng_template_19_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var area_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.addTeamOfAreaBossEvent(area_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AreaViewComponent_mat_expansion_panel_4_div_29_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ID:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreaViewComponent_mat_expansion_panel_4_div_29_div_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var brigade_r30 = ctx.$implicit;

          var area_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.deleteBrigadeEvent(area_r9, brigade_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var brigade_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brigade_r30.brigadeId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brigade_r30.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brigade_r30.modified);
      }
    }

    function AreaViewComponent_mat_expansion_panel_4_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AreaViewComponent_mat_expansion_panel_4_div_29_div_1_Template, 19, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var area_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", area_r9.brigades);
      }
    }

    function AreaViewComponent_mat_expansion_panel_4_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Are not assigned");
      }
    }

    function AreaViewComponent_mat_expansion_panel_4_ng_container_40_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Category:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Type:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreaViewComponent_mat_expansion_panel_4_ng_container_40_ng_container_1_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var product_r36 = ctx.$implicit;

          var area_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.deleteProductEvent(area_r9, product_r36);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var product_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r36.productId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r36.category);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r36.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r36.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r36.modified);
      }
    }

    function AreaViewComponent_mat_expansion_panel_4_ng_container_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AreaViewComponent_mat_expansion_panel_4_ng_container_40_ng_container_1_Template, 31, 5, "ng-container", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var area_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", area_r9.products);
      }
    }

    function AreaViewComponent_mat_expansion_panel_4_ng_template_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Are not assigned");
      }
    }

    function AreaViewComponent_mat_expansion_panel_4_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Workshop id:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var area_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r9.workshop.workshopId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r9.workshop.definition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r9.workshop.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r9.workshop.modified);
      }
    }

    function AreaViewComponent_mat_expansion_panel_4_ng_template_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Workshop is not assigned");
      }
    }

    function AreaViewComponent_mat_expansion_panel_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function AreaViewComponent_mat_expansion_panel_4_Template_mat_expansion_panel_closed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var area_r9 = ctx.$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.onAfterCollapse(area_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AreaViewComponent_mat_expansion_panel_4_div_18_Template, 22, 3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AreaViewComponent_mat_expansion_panel_4_ng_template_19_Template, 4, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Brigades:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreaViewComponent_mat_expansion_panel_4_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var area_r9 = ctx.$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.addBrigadeEvent(area_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "add_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AreaViewComponent_mat_expansion_panel_4_div_29_Template, 2, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AreaViewComponent_mat_expansion_panel_4_ng_template_30_Template, 1, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Products:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreaViewComponent_mat_expansion_panel_4_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var area_r9 = ctx.$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.addProductEvent(area_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "add_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AreaViewComponent_mat_expansion_panel_4_ng_container_40_Template, 2, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AreaViewComponent_mat_expansion_panel_4_ng_template_41_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AreaViewComponent_mat_expansion_panel_4_div_44_Template, 24, 4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AreaViewComponent_mat_expansion_panel_4_ng_template_45_Template, 1, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreaViewComponent_mat_expansion_panel_4_Template_button_click_49_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var area_r9 = ctx.$implicit;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.cancelArea(area_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreaViewComponent_mat_expansion_panel_4_Template_button_click_51_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var area_r9 = ctx.$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.saveArea(area_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreaViewComponent_mat_expansion_panel_4_Template_button_click_53_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var area_r9 = ctx.$implicit;

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.deleteArea(area_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var area_r9 = ctx.$implicit;

        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Area id: ", area_r9.areaId, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created at: ", area_r9.created, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r9.modified);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r9.definition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", area_r9.teamOfAreaBoss !== undefined)("ngIfElse", _r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", area_r9.brigades !== undefined)("ngIfElse", _r14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", area_r9.products !== undefined)("ngIfElse", _r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", area_r9.workshop !== undefined)("ngIfElse", _r20);
      }
    }

    var AreaViewComponent = /*#__PURE__*/function () {
      function AreaViewComponent(areaService, teamOfAreaBossService, brigadeService, productService, workshopService, dialog) {
        _classCallCheck(this, AreaViewComponent);

        this.areaService = areaService;
        this.teamOfAreaBossService = teamOfAreaBossService;
        this.brigadeService = brigadeService;
        this.productService = productService;
        this.workshopService = workshopService;
        this.dialog = dialog;
        this.areas = [];
        this.newAreaDescription = '';
        this.addAreaEvent = false;
        this.isAreaDataChanged = false; // TeamOfAreaBoss values

        this.teamOfAreaBossList = []; // Brigade values

        this.brigadeList = []; // Product values

        this.productList = []; // Workshop values

        this.workshopList = [];
      }

      _createClass(AreaViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllAreas();
        } // -------------------------------------
        // Area methods
        // -------------------------------------

      }, {
        key: "loadAllAreas",
        value: function loadAllAreas() {
          var _this = this;

          this.areaService.loadAllAreas().subscribe(function (data) {
            _this.areas = data;
            console.log(_this.areas);
          });
        }
      }, {
        key: "addArea",
        value: function addArea() {
          this.addAreaEvent = true;
          console.log('Add Area event');
        }
      }, {
        key: "createArea",
        value: function createArea(areaDescription) {
          var _this2 = this;

          console.log('Create Area description: ' + areaDescription.model);
          var areaEdit = new _model_area_edit__WEBPACK_IMPORTED_MODULE_2__["AreaEdit"]();
          areaEdit.areaDefinition = areaDescription.model;
          this.areaService.createNewArea(areaEdit).subscribe(function (data) {
            _this2.areas.push(data);
          }, function (error) {
            return console.log(error);
          }); // Clear values

          this.newAreaDescription = '';
          this.addAreaEvent = false;
        }
      }, {
        key: "saveArea",
        value: function saveArea(area) {
          var _this3 = this;

          if (this.isAreaDataChanged) {
            console.log('Save Area id: ' + area.areaId);
            var areaEdit = new _model_area_edit__WEBPACK_IMPORTED_MODULE_2__["AreaEdit"]();
            areaEdit.update(area);
            this.areaService.saveArea(areaEdit).subscribe(function (data) {
              var currentArea = _this3.areas.find(function (value) {
                return value.areaId === area.areaId;
              });

              _model_area__WEBPACK_IMPORTED_MODULE_1__["Area"].updateArea(currentArea, data);

              _this3.isAreaDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        }
      }, {
        key: "deleteArea",
        value: function deleteArea(area) {
          var _this4 = this;

          this.areaService.deleteArea(area.areaId).subscribe(function (data) {
            _this4.areas = _this4.areas.filter(function (value) {
              return value.areaId !== area.areaId;
            });
            console.log('Area id: ' + area.areaId + ' is deleted');
            _this4.isAreaDataChanged = false;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "cancelArea",
        value: function cancelArea(area) {
          console.log('Cancel Area id: ' + area.areaId);
          if (this.isAreaDataChanged) this.onAfterCollapse(area);
        }
      }, {
        key: "onAfterCollapse",
        value: function onAfterCollapse(area) {
          var _this5 = this;

          console.log('OnAfterCollapse event, Area id: ' + area.areaId);

          if (this.isAreaDataChanged) {
            console.log('The Area Data changed, clear changes for Area id: ' + area.areaId);
            this.areaService.loadAreaById(area.areaId).subscribe(function (data) {
              var currentArea = _this5.areas.find(function (value) {
                return value.areaId === area.areaId;
              });

              _model_area__WEBPACK_IMPORTED_MODULE_1__["Area"].updateArea(currentArea, data);

              _this5.isAreaDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        } // -------------------------------------
        // TeamOfAreaBoss methods
        // -------------------------------------

      }, {
        key: "addTeamOfAreaBossEvent",
        value: function addTeamOfAreaBossEvent(area) {
          var _this6 = this;

          console.log('AddTeamOfAreaBossEvent enter');
          this.teamOfAreaBossService.loadAllTeams().subscribe(function (data) {
            _this6.teamOfAreaBossList = data;
            var selectData = [];

            _this6.teamOfAreaBossList.forEach(function (value) {
              var viewValue = 'Team id: ' + value.teamId;
              var disableValue = false;

              if (value.area !== undefined) {
                disableValue = true;
                viewValue = viewValue + '  [ Area id: ' + value.area.areaId + ' ]';
              }

              selectData.push(new _model_select_data__WEBPACK_IMPORTED_MODULE_3__["SelectDataImpl"](value.teamId, viewValue, disableValue));
            });

            _this6.openTeamOfAreaBossDialog(area, selectData);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "openTeamOfAreaBossDialog",
        value: function openTeamOfAreaBossDialog(area, data) {
          var _this7 = this;

          console.log('Open Dialog for Area id: ' + area.areaId);
          var dialogRef = this.dialog.open(_select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_4__["SelectDialogSingleComponent"], {
            width: '350px',
            data: {
              "selectedDataList": data,
              "isMultiple": false
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed, selected value: ' + result);
            if (result === undefined || result.length === 0) return;
            var teamId = result[0];

            var teamOfAreaBoss = _this7.teamOfAreaBossList.find(function (value) {
              return value.teamId === teamId;
            });

            var currentArea = _this7.areas.find(function (value) {
              return value.areaId === area.areaId;
            });

            currentArea.teamOfAreaBoss = teamOfAreaBoss; // Update this.isAreaDataChanged value

            _this7.isAreaDataChanged = true;

            _this7.dialog.ngOnDestroy();
          });
        }
      }, {
        key: "deleteTeamOfAreaBossEvent",
        value: function deleteTeamOfAreaBossEvent(area) {
          console.log('DeleteTeamOfAreaBossEvent, Area id: ' + area.areaId);
          var currentArea = this.areas.find(function (value) {
            return value.areaId === area.areaId;
          });
          currentArea.teamOfAreaBoss = undefined; // Update this.isAreaDataChanged value

          this.isAreaDataChanged = true;
        } // -------------------------------------
        // Brigade methods
        // -------------------------------------

      }, {
        key: "addBrigadeEvent",
        value: function addBrigadeEvent(area) {
          var _this8 = this;

          console.log('AddBrigadeEvent enter');
          this.brigadeService.loadAllBrigades().subscribe(function (data) {
            _this8.brigadeList = data;
            var selectData = [];

            _this8.brigadeList.forEach(function (value) {
              var viewValue = 'Id: ' + value.brigadeId;
              var disableValue = false;

              if (value.area !== undefined) {
                disableValue = true;
                viewValue += ', Area id: ' + value.area.areaId;
              }

              selectData.push(new _model_select_data__WEBPACK_IMPORTED_MODULE_3__["SelectDataImpl"](value.brigadeId, viewValue, disableValue));
            });

            _this8.openBrigadeDialog(area, selectData);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "openBrigadeDialog",
        value: function openBrigadeDialog(area, data) {
          var _this9 = this;

          console.log('Open Dialog for Area id: ' + area.areaId);
          var dialogRef = this.dialog.open(_select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_4__["SelectDialogSingleComponent"], {
            width: '350px',
            data: {
              "selectedDataList": data,
              "isMultiple": true
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed, selected value: ' + result);
            if (result === undefined || result.length === 0) return;

            var currentArea = _this9.areas.find(function (value) {
              return value.areaId === area.areaId;
            });

            result.forEach(function (brigadeId) {
              var brigade = _this9.brigadeList.find(function (value) {
                return value.brigadeId === brigadeId;
              });

              if (currentArea.brigades === undefined) currentArea.brigades = [];
              currentArea.brigades.push(brigade);
            });

            _this9.dialog.ngOnDestroy(); // Update this.isAreaDataChanged value


            _this9.isAreaDataChanged = true;
          });
        }
      }, {
        key: "deleteBrigadeEvent",
        value: function deleteBrigadeEvent(area, brigade) {
          console.log('DeleteBrigadeEvent, Area id: ' + area.areaId + ', Brigade id: ' + brigade.brigadeId);
          var currentArea = this.areas.find(function (value) {
            return value.areaId === area.areaId;
          });
          if (currentArea.brigades === undefined || currentArea.brigades.length === 0) return;
          currentArea.brigades = currentArea.brigades.filter(function (value) {
            return value.brigadeId !== brigade.brigadeId;
          }); // Update this.isAreaDataChanged value

          this.isAreaDataChanged = true;
        } // -------------------------------------
        // Product methods
        // -------------------------------------

      }, {
        key: "addProductEvent",
        value: function addProductEvent(area) {
          var _this10 = this;

          console.log('AddProductEvent enter');
          this.productService.loadAllProducts().subscribe(function (data) {
            _this10.productList = data;
            var selectData = [];

            _this10.productList.forEach(function (value) {
              var viewValue = 'Id: ' + value.productId;
              var disableValue = false;

              if (value.area !== undefined) {
                disableValue = true;
                viewValue += ', Area id: ' + value.area.areaId;
              }

              selectData.push(new _model_select_data__WEBPACK_IMPORTED_MODULE_3__["SelectDataImpl"](value.productId, viewValue, disableValue));
            });

            _this10.openProductDialog(area, selectData);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "openProductDialog",
        value: function openProductDialog(area, data) {
          var _this11 = this;

          console.log('Open Dialog for Area id: ' + area.areaId);
          var dialogRef = this.dialog.open(_select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_4__["SelectDialogSingleComponent"], {
            width: '350px',
            data: {
              "selectedDataList": data,
              "isMultiple": true
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed, selected value: ' + result);
            if (result === undefined || result.length === 0) return;

            var currentArea = _this11.areas.find(function (value) {
              return value.areaId === area.areaId;
            });

            result.forEach(function (productId) {
              var product = _this11.productList.find(function (value) {
                return value.productId === productId;
              });

              if (currentArea.products === undefined) currentArea.products = [];
              currentArea.products.push(product);
            });

            _this11.dialog.ngOnDestroy(); // Update this.isAreaDataChanged value


            _this11.isAreaDataChanged = true;
          });
        }
      }, {
        key: "deleteProductEvent",
        value: function deleteProductEvent(area, product) {
          console.log('DeleteProductEvent, Area id: ' + area.areaId + ', Product id: ' + product.productId);
          var currentArea = this.areas.find(function (value) {
            return value.areaId === area.areaId;
          });
          if (currentArea.products === undefined || currentArea.products.length === 0) return;
          currentArea.products = currentArea.products.filter(function (value) {
            return value.productId !== product.productId;
          }); // Update this.isAreaDataChanged value

          this.isAreaDataChanged = true;
        } // -------------------------------------
        // Workshop methods
        // -------------------------------------

      }, {
        key: "addWorkshopEvent",
        value: function addWorkshopEvent(area) {
          var _this12 = this;

          console.log('AddWorkshopEvent enter');
          this.workshopService.loadAllWorkshops().subscribe(function (data) {
            _this12.workshopList = data;
            var selectData = [];

            _this12.workshopList.forEach(function (value) {
              var viewValue = 'Id: ' + value.workshopId;
              var disableValue = false;

              if (value.definition !== undefined && value.definition.length !== 0) {
                disableValue = true;
                viewValue += ', definition: ' + value.definition;
              }

              selectData.push(new _model_select_data__WEBPACK_IMPORTED_MODULE_3__["SelectDataImpl"](value.workshopId, viewValue, disableValue));
            });

            _this12.openWorkshopDialog(area, selectData);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "openWorkshopDialog",
        value: function openWorkshopDialog(area, data) {
          var _this13 = this;

          console.log('Open Dialog for Area id: ' + area.areaId);
          var dialogRef = this.dialog.open(_select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_4__["SelectDialogSingleComponent"], {
            width: '350px',
            data: {
              "selectedDataList": data,
              "isMultiple": false
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed, selected value: ' + result);
            if (result === undefined || result.length === 0) return;

            var currentArea = _this13.areas.find(function (value) {
              return value.areaId === area.areaId;
            });

            result.forEach(function (workshopId) {
              var workshop = _this13.workshopList.find(function (value) {
                return value.workshopId === workshopId;
              });

              if (currentArea.workshop === undefined) currentArea.workshop = null;
              currentArea.workshop = area.workshop;
            });

            _this13.dialog.ngOnDestroy(); // Update this.isAreaDataChanged value


            _this13.isAreaDataChanged = true;
          });
        }
      }, {
        key: "deleteWorkshopEvent",
        value: function deleteWorkshopEvent(area) {
          console.log('DeleteWorkshopEvent, Area id: ' + area.areaId + ', Workshop id: ' + area.workshop.workshopId);
          var currentArea = this.areas.find(function (value) {
            return value.areaId === area.areaId;
          });
          if (currentArea.workshop === undefined || currentArea.workshop === null) return;
          currentArea.workshop.workshopId = area.workshop.workshopId; // Update this.isAreaDataChanged value

          this.isAreaDataChanged = true;
        }
      }]);

      return AreaViewComponent;
    }();

    AreaViewComponent.ɵfac = function AreaViewComponent_Factory(t) {
      return new (t || AreaViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_area_service__WEBPACK_IMPORTED_MODULE_5__["AreaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_teamOfAreaBoss_service__WEBPACK_IMPORTED_MODULE_6__["TeamOfAreaBossService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_brigade_service__WEBPACK_IMPORTED_MODULE_7__["BrigadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_workshop_service__WEBPACK_IMPORTED_MODULE_9__["WorkshopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]));
    };

    AreaViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AreaViewComponent,
      selectors: [["app-areaview"]],
      decls: 5,
      vars: 2,
      consts: [["mat-raised-button", "", 1, "add-item-button", 3, "click"], ["expanded", "true", 4, "ngIf"], [3, "closed", 4, "ngFor", "ngForOf"], ["expanded", "true"], ["fxLayout", "row", "fxLayoutAlign", "start", 1, "item-description"], [1, "example-full-width"], ["matInput", "", "placeholder", "Add Area description", 3, "ngModel", "ngModelChange"], ["areaDescription", "ngModel"], ["fxLayout", "row", "fxLayoutAlign", "end", 1, "item-description"], ["mat-raised-button", "", 3, "click"], [3, "closed"], [4, "ngIf", "ngIfElse"], ["elseTeamBlock", ""], ["mat-icon-button", "", "color", "primary", 1, "add-component-button", 3, "click"], ["elseBrigadeBlock", ""], ["elseProductBlock", ""], ["elseWorkshopBlock", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "item-description"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["class", "item-description", "fxLayout", "row", "fxLayoutAlign", "space-between center", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"]],
      template: function AreaViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreaViewComponent_Template_button_click_0_listener() {
            return ctx.addArea();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AreaViewComponent_mat_expansion_panel_3_Template, 19, 1, "mat-expansion-panel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AreaViewComponent_mat_expansion_panel_4_Template, 55, 12, "mat-expansion-panel", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addAreaEvent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.areas);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"]],
      styles: [".add-item-button[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.add-component-button[_ngcontent-%COMP%] {\r\n  margin-left: 6px;\r\n}\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n  min-width: 600px;\r\n}\r\n\r\n.item-description[_ngcontent-%COMP%] {\r\n  margin-top: 2px;\r\n}\r\n\r\n.item-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.item-description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\nmat-divider[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%] {\r\n   margin-right: 10px;\r\n }\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n}\r\n\r\n.mat-icon-button[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 0;\r\n  width: 20px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n  line-height: 20px;\r\n}\r\n\r\n.add-select-part[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYS12aWV3L2FyZWEtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtHQUNHLGtCQUFrQjtDQUNwQjs7QUFFRDtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FyZWEtdmlldy9hcmVhLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtaXRlbS1idXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5hZGQtY29tcG9uZW50LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIG1pbi13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5pdGVtLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5pdGVtLWRlc2NyaXB0aW9uIGRpdiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLml0ZW0tZGVzY3JpcHRpb24gYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxubWF0LWRpdmlkZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRlci1pY29uLWJ1dHRvbiB7XHJcbiAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuIH1cclxuXHJcbi5wYW5lbC1oZWFkZXItaWNvbi1idXR0b24gLm1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvbi1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmFkZC1zZWxlY3QtcGFydCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AreaViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-areaview',
          templateUrl: './area-view.component.html',
          styleUrls: ['./area-view.component.css']
        }]
      }], function () {
        return [{
          type: _services_area_service__WEBPACK_IMPORTED_MODULE_5__["AreaService"]
        }, {
          type: _services_teamOfAreaBoss_service__WEBPACK_IMPORTED_MODULE_6__["TeamOfAreaBossService"]
        }, {
          type: _services_brigade_service__WEBPACK_IMPORTED_MODULE_7__["BrigadeService"]
        }, {
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]
        }, {
          type: _services_workshop_service__WEBPACK_IMPORTED_MODULE_9__["WorkshopService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/brigade-view/brigade-view.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/brigade-view/brigade-view.component.ts ***!
    \********************************************************/

  /*! exports provided: BrigadeViewComponent */

  /***/
  function srcAppBrigadeViewBrigadeViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrigadeViewComponent", function () {
      return BrigadeViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_brigade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/brigade */
    "./src/app/model/brigade.ts");
    /* harmony import */


    var _model_brigade_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/brigade-edit */
    "./src/app/model/brigade-edit.ts");
    /* harmony import */


    var _model_select_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/select-data */
    "./src/app/model/select-data.ts");
    /* harmony import */


    var _select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../select-dialog-single/select-dialog-single.component */
    "./src/app/select-dialog-single/select-dialog-single.component.ts");
    /* harmony import */


    var _services_brigade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/brigade.service */
    "./src/app/services/brigade.service.ts");
    /* harmony import */


    var _services_worker_my_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/worker-my.service */
    "./src/app/services/worker-my.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function BrigadeViewComponent_mat_expansion_panel_3_ng_container_20_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Type:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrigadeViewComponent_mat_expansion_panel_3_ng_container_20_ng_container_1_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var worker_r58 = ctx.$implicit;

          var brigade_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.deleteWorkerEvent(brigade_r50, worker_r58);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var worker_r58 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](worker_r58.workerId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](worker_r58.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](worker_r58.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](worker_r58.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](worker_r58.modified);
      }
    }

    function BrigadeViewComponent_mat_expansion_panel_3_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BrigadeViewComponent_mat_expansion_panel_3_ng_container_20_ng_container_1_Template, 31, 5, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var brigade_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", brigade_r50.workers);
      }
    }

    function BrigadeViewComponent_mat_expansion_panel_3_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Are not assigned");
      }
    }

    function BrigadeViewComponent_mat_expansion_panel_3_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Area id:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var brigade_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brigade_r50.area.areaId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brigade_r50.area.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brigade_r50.area.modified);
      }
    }

    function BrigadeViewComponent_mat_expansion_panel_3_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Area is not assigned");
      }
    }

    function BrigadeViewComponent_mat_expansion_panel_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function BrigadeViewComponent_mat_expansion_panel_3_Template_mat_expansion_panel_closed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var brigade_r50 = ctx.$implicit;

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r64.onAfterCollapse(brigade_r50);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Workers:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrigadeViewComponent_mat_expansion_panel_3_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var brigade_r50 = ctx.$implicit;

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r66.addWorkerEvent(brigade_r50);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "add_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BrigadeViewComponent_mat_expansion_panel_3_ng_container_20_Template, 2, 1, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BrigadeViewComponent_mat_expansion_panel_3_ng_template_21_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BrigadeViewComponent_mat_expansion_panel_3_div_24_Template, 19, 3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BrigadeViewComponent_mat_expansion_panel_3_ng_template_25_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrigadeViewComponent_mat_expansion_panel_3_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var brigade_r50 = ctx.$implicit;

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r67.cancelBrigade(brigade_r50);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrigadeViewComponent_mat_expansion_panel_3_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var brigade_r50 = ctx.$implicit;

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.saveBrigade(brigade_r50);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrigadeViewComponent_mat_expansion_panel_3_Template_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var brigade_r50 = ctx.$implicit;

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r69.deleteBrigade(brigade_r50);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var brigade_r50 = ctx.$implicit;

        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Brigade id: ", brigade_r50.brigadeId, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created at: ", brigade_r50.created, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brigade_r50.modified);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", brigade_r50.workers !== undefined)("ngIfElse", _r52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", brigade_r50.area !== undefined)("ngIfElse", _r55);
      }
    }

    var BrigadeViewComponent = /*#__PURE__*/function () {
      function BrigadeViewComponent(brigadeService, workerService, dialog) {
        _classCallCheck(this, BrigadeViewComponent);

        this.brigadeService = brigadeService;
        this.workerService = workerService;
        this.dialog = dialog;
        this.brigades = [];
        this.isBrigadeDataChanged = false;
        this.addBrigadeEvent = false; //  Worker values

        this.workerList = [];
      }

      _createClass(BrigadeViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllBrigades();
        } // -------------------------------------
        // Brigade methods
        // -------------------------------------

      }, {
        key: "loadAllBrigades",
        value: function loadAllBrigades() {
          var _this14 = this;

          this.brigadeService.loadAllBrigades().subscribe(function (data) {
            _this14.brigades = data;
            console.log(_this14.brigades);
          });
        }
      }, {
        key: "addBrigade",
        value: function addBrigade() {
          this.addBrigadeEvent = true;
          console.log('Add Brigade event');
        }
      }, {
        key: "createBrigade",
        value: function createBrigade() {
          var _this15 = this;

          console.log('Create Brigade');
          var brigadeEdit = new _model_brigade_edit__WEBPACK_IMPORTED_MODULE_2__["BrigadeEdit"]();
          this.brigadeService.createNewBrigade(brigadeEdit).subscribe(function (data) {
            _this15.brigades.push(data);
          }, function (error) {
            return console.log(error);
          }); // Clear values

          this.addBrigadeEvent = false;
        }
      }, {
        key: "saveBrigade",
        value: function saveBrigade(brigade) {
          var _this16 = this;

          if (this.isBrigadeDataChanged) {
            console.log('Save Brigade id: ' + brigade.brigadeId);
            var brigadeEdit = new _model_brigade_edit__WEBPACK_IMPORTED_MODULE_2__["BrigadeEdit"]();
            brigadeEdit.update(brigade);
            this.brigadeService.saveBrigade(brigadeEdit).subscribe(function (data) {
              var currentBrigade = _this16.brigades.find(function (value) {
                return value.brigadeId === brigade.brigadeId;
              });

              _model_brigade__WEBPACK_IMPORTED_MODULE_1__["Brigade"].update(currentBrigade, data);

              _this16.isBrigadeDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        }
      }, {
        key: "deleteBrigade",
        value: function deleteBrigade(brigade) {
          var _this17 = this;

          this.brigadeService.deleteBrigade(brigade.brigadeId).subscribe(function (data) {
            _this17.brigades = _this17.brigades.filter(function (value) {
              return value.brigadeId !== brigade.brigadeId;
            });
            console.log('Brigade id: ' + brigade.brigadeId + ' is deleted');
            _this17.isBrigadeDataChanged = false;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "cancelBrigade",
        value: function cancelBrigade(brigade) {
          console.log('Cancel Brigade id: ' + brigade.brigadeId);
          if (this.isBrigadeDataChanged) this.onAfterCollapse(brigade);
        }
      }, {
        key: "onAfterCollapse",
        value: function onAfterCollapse(brigade) {
          var _this18 = this;

          console.log('OnAfterCollapse event, Brigade id: ' + brigade.brigadeId);

          if (this.isBrigadeDataChanged) {
            console.log('The Brigade Data changed, clear changes for Brigade id: ' + brigade.brigadeId);
            this.brigadeService.loadBrigadeById(brigade.brigadeId).subscribe(function (data) {
              var currentBrigade = _this18.brigades.find(function (value) {
                return value.brigadeId === brigade.brigadeId;
              });

              _model_brigade__WEBPACK_IMPORTED_MODULE_1__["Brigade"].update(currentBrigade, data);

              _this18.isBrigadeDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        } // -------------------------------------
        // Brigade methods
        // -------------------------------------

      }, {
        key: "addWorkerEvent",
        value: function addWorkerEvent(brigade) {
          var _this19 = this;

          console.log('AddBrigadeEvent enter');
          this.workerService.loadAllWorkers().subscribe(function (data) {
            _this19.workerList = data;
            var selectData = [];

            _this19.workerList.forEach(function (value) {
              var viewValue = 'Id: ' + value.workerId + ', ' + value.name + ' - ' + value.type;
              var disableValue = false;

              if (value.brigade !== undefined && value.brigade !== null) {
                disableValue = true;
                viewValue += ' : ' + value.brigade.brigadeId;
              }

              selectData.push(new _model_select_data__WEBPACK_IMPORTED_MODULE_3__["SelectDataImpl"](value.workerId, viewValue, disableValue));
            });

            _this19.openWorkerDialog(brigade, selectData);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "openWorkerDialog",
        value: function openWorkerDialog(brigade, data) {
          var _this20 = this;

          console.log('Open Dialog for Brigade id: ' + brigade.brigadeId);
          var dialogRef = this.dialog.open(_select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_4__["SelectDialogSingleComponent"], {
            width: '450px',
            data: {
              "selectedDataList": data,
              "isMultiple": true
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed, selected value: ' + result);
            if (result === undefined || result.length === 0) return;

            var currentBrigade = _this20.brigades.find(function (value) {
              return value.brigadeId === brigade.brigadeId;
            });

            result.forEach(function (workerId) {
              var worker = _this20.workerList.find(function (value) {
                return value.workerId === workerId;
              });

              if (currentBrigade.workers === undefined) currentBrigade.workers = [];
              currentBrigade.workers.push(worker);
            });

            _this20.dialog.ngOnDestroy(); // Update this.isAreaDataChanged value


            _this20.isBrigadeDataChanged = true;
          });
        }
      }, {
        key: "deleteWorkerEvent",
        value: function deleteWorkerEvent(brigade, worker) {
          console.log('DeleteWorkerEvent, Brigade id: ' + brigade.brigadeId + ', Area id: ' + brigade.area.areaId);
          var currentBrigade = this.brigades.find(function (value) {
            return value.brigadeId === brigade.brigadeId;
          });
          if (currentBrigade.workers === undefined || currentBrigade.workers.length === 0) return;
          currentBrigade.workers = currentBrigade.workers.filter(function (value) {
            return value.workerId !== worker.workerId;
          }); // Update this.isAreaDataChanged value

          this.isBrigadeDataChanged = true;
        }
      }]);

      return BrigadeViewComponent;
    }();

    BrigadeViewComponent.ɵfac = function BrigadeViewComponent_Factory(t) {
      return new (t || BrigadeViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_brigade_service__WEBPACK_IMPORTED_MODULE_5__["BrigadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_worker_my_service__WEBPACK_IMPORTED_MODULE_6__["WorkerMyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]));
    };

    BrigadeViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BrigadeViewComponent,
      selectors: [["app-brigadeview"]],
      decls: 4,
      vars: 1,
      consts: [["mat-raised-button", "", 1, "add-item-button", 3, "click"], [3, "closed", 4, "ngFor", "ngForOf"], [3, "closed"], ["fxLayout", "row", "fxLayoutAlign", "start", 1, "item-description"], ["mat-icon-button", "", "color", "primary", 1, "add-component-button", 3, "click"], [4, "ngIf", "ngIfElse"], ["elseWorkerBlock", ""], ["elseAreaBlock", ""], ["fxLayout", "row", "fxLayoutAlign", "end", 1, "item-description"], ["mat-raised-button", "", 3, "click"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "item-description"], ["mat-icon-button", "", "color", "primary", 3, "click"]],
      template: function BrigadeViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrigadeViewComponent_Template_button_click_0_listener() {
            return ctx.createBrigade();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BrigadeViewComponent_mat_expansion_panel_3_Template, 35, 7, "mat-expansion-panel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brigades);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
      styles: [".add-item-button[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.add-component-button[_ngcontent-%COMP%] {\r\n  margin-left: 6px;\r\n}\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n  min-width: 470px;\r\n}\r\n\r\n.item-description[_ngcontent-%COMP%] {\r\n  margin-top: 2px;\r\n}\r\n\r\n.item-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.item-description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\nmat-divider[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n}\r\n\r\n.mat-icon-button[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 0;\r\n  width: 20px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n  line-height: 20px;\r\n}\r\n\r\n.add-select-part[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJpZ2FkZS12aWV3L2JyaWdhZGUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2JyaWdhZGUtdmlldy9icmlnYWRlLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtaXRlbS1idXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5hZGQtY29tcG9uZW50LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIG1pbi13aWR0aDogNDcwcHg7XHJcbn1cclxuXHJcbi5pdGVtLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5pdGVtLWRlc2NyaXB0aW9uIGRpdiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLml0ZW0tZGVzY3JpcHRpb24gYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxubWF0LWRpdmlkZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRlci1pY29uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucGFuZWwtaGVhZGVyLWljb24tYnV0dG9uIC5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ubWF0LWljb24tYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1pbi13aWR0aDogMDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5hZGQtc2VsZWN0LXBhcnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrigadeViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-brigadeview',
          templateUrl: './brigade-view.component.html',
          styleUrls: ['./brigade-view.component.css']
        }]
      }], function () {
        return [{
          type: _services_brigade_service__WEBPACK_IMPORTED_MODULE_5__["BrigadeService"]
        }, {
          type: _services_worker_my_service__WEBPACK_IMPORTED_MODULE_6__["WorkerMyService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/content/content.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/content/content.component.ts ***!
    \**********************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent() {
        _classCallCheck(this, ContentComponent);
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)();
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      decls: 2,
      vars: 0,
      consts: [[1, "content-body"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".content-body[_ngcontent-%COMP%] {\r\n  padding: 40px;\r\n  max-width: 700px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1ib2R5IHtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content',
          templateUrl: './content.component.html',
          styleUrls: ['./content.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipment-view/equipment-view.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/equipment-view/equipment-view.component.ts ***!
    \************************************************************/

  /*! exports provided: EquipmentViewComponent */

  /***/
  function srcAppEquipmentViewEquipmentViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentViewComponent", function () {
      return EquipmentViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_equipment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/equipment */
    "./src/app/model/equipment.ts");
    /* harmony import */


    var _model_equipment_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/equipment-edit */
    "./src/app/model/equipment-edit.ts");
    /* harmony import */


    var _services_equipment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/equipment.service */
    "./src/app/services/equipment.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function EquipmentViewComponent_mat_expansion_panel_3_mat_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r73 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r73.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r73.viewValue, " ");
      }
    }

    function EquipmentViewComponent_mat_expansion_panel_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Equipment id: NEW ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add new Equipment ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Definition:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EquipmentViewComponent_mat_expansion_panel_3_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.newDefinition = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EquipmentViewComponent_mat_expansion_panel_3_Template_mat_select_selectionChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76.onTypeChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EquipmentViewComponent_mat_expansion_panel_3_mat_option_15_Template, 2, 2, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentViewComponent_mat_expansion_panel_3_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.createEquipment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentViewComponent_mat_expansion_panel_3_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r78.addEquipmentEvent = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r70.newDefinition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r70.types);
      }
    }

    function EquipmentViewComponent_mat_expansion_panel_4_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Definition:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var equipment_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r79.definition);
      }
    }

    function EquipmentViewComponent_mat_expansion_panel_4_div_12_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Definition:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EquipmentViewComponent_mat_expansion_panel_4_div_12_div_2_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r92.newDefinition = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r90.newDefinition);
      }
    }

    function EquipmentViewComponent_mat_expansion_panel_4_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EquipmentViewComponent_mat_expansion_panel_4_div_12_div_1_Template, 5, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EquipmentViewComponent_mat_expansion_panel_4_div_12_div_2_Template, 5, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r80.editEquipmentEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r80.editEquipmentEvent);
      }
    }

    function EquipmentViewComponent_mat_expansion_panel_4_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Definition is not assigned");
      }
    }

    function EquipmentViewComponent_mat_expansion_panel_4_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Equipment type:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var equipment_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r79.type);
      }
    }

    function EquipmentViewComponent_mat_expansion_panel_4_div_19_div_2_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r98 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r98.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r98.viewValue, " ");
      }
    }

    function EquipmentViewComponent_mat_expansion_panel_4_div_19_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EquipmentViewComponent_mat_expansion_panel_4_div_19_div_2_Template_mat_select_selectionChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r99.onTypeChange($event);
        })("valueChange", function EquipmentViewComponent_mat_expansion_panel_4_div_19_div_2_Template_mat_select_valueChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r101.selectedType.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EquipmentViewComponent_mat_expansion_panel_4_div_19_div_2_mat_option_5_Template, 2, 2, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r95.selectedType.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r95.types);
      }
    }

    function EquipmentViewComponent_mat_expansion_panel_4_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EquipmentViewComponent_mat_expansion_panel_4_div_19_div_1_Template, 5, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EquipmentViewComponent_mat_expansion_panel_4_div_19_div_2_Template, 6, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r83.editEquipmentEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r83.editEquipmentEvent);
      }
    }

    function EquipmentViewComponent_mat_expansion_panel_4_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Type is not assigned");
      }
    }

    function EquipmentViewComponent_mat_expansion_panel_4_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Laboratory id:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Definition:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var equipment_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r79.laboratory.laboratoryId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r79.laboratory.definition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r79.laboratory.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r79.laboratory.modified);
      }
    }

    function EquipmentViewComponent_mat_expansion_panel_4_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Laboratory is not assigned");
      }
    }

    function EquipmentViewComponent_mat_expansion_panel_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function EquipmentViewComponent_mat_expansion_panel_4_Template_mat_expansion_panel_closed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var equipment_r79 = ctx.$implicit;

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r103.onAfterCollapse(equipment_r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EquipmentViewComponent_mat_expansion_panel_4_div_12_Template, 3, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EquipmentViewComponent_mat_expansion_panel_4_ng_template_13_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentViewComponent_mat_expansion_panel_4_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var equipment_r79 = ctx.$implicit;

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r105.editEquipment(equipment_r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EquipmentViewComponent_mat_expansion_panel_4_div_19_Template, 3, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EquipmentViewComponent_mat_expansion_panel_4_ng_template_20_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EquipmentViewComponent_mat_expansion_panel_4_div_23_Template, 25, 4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EquipmentViewComponent_mat_expansion_panel_4_ng_template_24_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentViewComponent_mat_expansion_panel_4_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var equipment_r79 = ctx.$implicit;

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r106.cancelEquipment(equipment_r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentViewComponent_mat_expansion_panel_4_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var equipment_r79 = ctx.$implicit;

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r107.saveEquipment(equipment_r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentViewComponent_mat_expansion_panel_4_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var equipment_r79 = ctx.$implicit;

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r108.deleteEquipment(equipment_r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var equipment_r79 = ctx.$implicit;

        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Equipment id: ", equipment_r79.equipmentId, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created at: ", equipment_r79.created, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r79.modified);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", equipment_r79.definition !== undefined)("ngIfElse", _r81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", equipment_r79.type !== undefined)("ngIfElse", _r84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", equipment_r79.laboratory !== undefined)("ngIfElse", _r87);
      }
    }

    var EquipmentViewComponent = /*#__PURE__*/function () {
      function EquipmentViewComponent(equipmentService) {
        _classCallCheck(this, EquipmentViewComponent);

        this.equipmentService = equipmentService;
        this.types = [{
          value: '0',
          viewValue: 'TESTING_STAND'
        }, {
          value: '1',
          viewValue: 'DEFECTIVE_CHECK'
        }, {
          value: '2',
          viewValue: 'ASSEMBLY_DISASSEMBLY'
        }];
        this.equipments = [];
        this.newDefinition = '';
        this.newType = null;
        this.addEquipmentEvent = false;
        this.editEquipmentEvent = false;
        this.selectedType = null;
        this.isDataChanged = false;
      }

      _createClass(EquipmentViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllEquipments();
        } // -------------------------------------
        // Equipment methods
        // -------------------------------------

      }, {
        key: "loadAllEquipments",
        value: function loadAllEquipments() {
          var _this21 = this;

          this.equipmentService.loadAllEquipments().subscribe(function (data) {
            _this21.equipments = data;
            console.log(_this21.equipments);
          });
        }
      }, {
        key: "addEquipment",
        value: function addEquipment() {
          this.addEquipmentEvent = true;
          console.log('Add Equipment event');
        }
      }, {
        key: "editEquipment",
        value: function editEquipment(equipment) {
          console.log('Edit Equipment event id: ' + equipment.equipmentId);
          this.newDefinition = equipment.definition;
          this.newType = equipment.type;
          this.setSelectedTypeValue(equipment.type);
          this.editEquipmentEvent = true;
          this.isDataChanged = true;
        }
      }, {
        key: "onTypeChange",
        value: function onTypeChange(event) {
          this.newType = event.value;
          console.log('This New Type: ' + _model_equipment__WEBPACK_IMPORTED_MODULE_1__["EquipmentType"][this.newType]);
        }
      }, {
        key: "createEquipment",
        value: function createEquipment() {
          var _this22 = this;

          var equipmentEdit = new _model_equipment_edit__WEBPACK_IMPORTED_MODULE_2__["EquipmentEdit"]();
          equipmentEdit.definition = this.newDefinition;
          equipmentEdit.equipmentType = _model_equipment__WEBPACK_IMPORTED_MODULE_1__["EquipmentType"][this.newType];
          this.equipmentService.createNewEquipment(equipmentEdit).subscribe(function (data) {
            _this22.equipments.push(data);
          }, function (error) {
            return console.log(error);
          });
          this.clearEditValues();
          this.addEquipmentEvent = false;
        }
      }, {
        key: "deleteEquipment",
        value: function deleteEquipment(equipment) {
          var _this23 = this;

          this.equipmentService.deleteEquipment(equipment.equipmentId).subscribe(function (data) {
            _this23.equipments = _this23.equipments.filter(function (value) {
              return value.equipmentId !== equipment.equipmentId;
            });
            console.log('Equipment id: ' + equipment.equipmentId + ' is deleted');

            _this23.clearEditValues();
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "saveEquipment",
        value: function saveEquipment(equipment) {
          var _this24 = this;

          if (this.isDataChanged) {
            console.log('Save Equipment id: ' + equipment.equipmentId);
            var equipmentEdit = new _model_equipment_edit__WEBPACK_IMPORTED_MODULE_2__["EquipmentEdit"]();
            equipmentEdit.definition = this.newDefinition;
            equipmentEdit.equipmentType = _model_equipment__WEBPACK_IMPORTED_MODULE_1__["EquipmentType"][this.newType];
            equipmentEdit.equipmentId = equipment.equipmentId;
            if (equipment.laboratory) equipmentEdit.laboratoryId = equipment.laboratory.laboratoryId;
            this.equipmentService.saveEquipment(equipmentEdit).subscribe(function (data) {
              var currentEquipment = _this24.equipments.find(function (value) {
                return value.equipmentId === equipment.equipmentId;
              });

              _model_equipment__WEBPACK_IMPORTED_MODULE_1__["Equipment"].update(currentEquipment, data);

              _this24.clearEditValues();

              _this24.isDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        }
      }, {
        key: "cancelEquipment",
        value: function cancelEquipment(equipment) {
          console.log('Cancel Equipment id: ' + equipment.equipmentId);
          if (this.isDataChanged) this.onAfterCollapse(equipment);
        }
      }, {
        key: "onAfterCollapse",
        value: function onAfterCollapse(equipment) {
          var _this25 = this;

          console.log('OnAfterCollapse event, Equipment id: ' + equipment.equipmentId);
          this.clearEditValues();

          if (this.isDataChanged) {
            console.log('The Equipment Data changed, clear changes for Equipment id: ' + equipment.equipmentId);
            this.equipmentService.loadEquipmentById(equipment.equipmentId).subscribe(function (data) {
              var currentEquipment = _this25.equipments.find(function (value) {
                return value.equipmentId === equipment.equipmentId;
              });

              _model_equipment__WEBPACK_IMPORTED_MODULE_1__["Equipment"].update(currentEquipment, data); // Update isDataChanged value top false


              _this25.isDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        }
      }, {
        key: "clearEditValues",
        value: function clearEditValues() {
          this.editEquipmentEvent = false;
          this.newDefinition = '';
          this.newType = null;
          this.selectedType = null;
        }
      }, {
        key: "setSelectedTypeValue",
        value: function setSelectedTypeValue(type) {
          this.selectedType = {
            value: _model_equipment__WEBPACK_IMPORTED_MODULE_1__["EquipmentType"][type].toString(),
            viewValue: type.toString()
          };
        }
      }]);

      return EquipmentViewComponent;
    }();

    EquipmentViewComponent.ɵfac = function EquipmentViewComponent_Factory(t) {
      return new (t || EquipmentViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_equipment_service__WEBPACK_IMPORTED_MODULE_3__["EquipmentService"]));
    };

    EquipmentViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EquipmentViewComponent,
      selectors: [["app-equipment-view"]],
      decls: 5,
      vars: 2,
      consts: [["mat-raised-button", "", 1, "add-equipment-button", 3, "click"], ["expanded", "true", 4, "ngIf"], [3, "closed", 4, "ngFor", "ngForOf"], ["expanded", "true"], ["fxLayout", "row", "fxLayoutAlign", "start", 1, "equipment-description"], [1, "equipment-add-panel-form"], ["matInput", "", "placeholder", "Equipment definition", 3, "ngModel", "ngModelChange"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "end", 1, "equipment-description"], ["mat-raised-button", "", 3, "click"], [3, "value"], [3, "closed"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "equipment-description"], [4, "ngIf", "ngIfElse"], ["elseDefinitionBlock", ""], ["mat-icon-button", "", "color", "primary", 1, "add-component-button", 3, "click"], ["elseTypeBlock", ""], ["elseLaboratoryBlock", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Definition", 3, "ngModel", "ngModelChange"], [3, "value", "selectionChange", "valueChange"]],
      template: function EquipmentViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentViewComponent_Template_button_click_0_listener() {
            return ctx.addEquipment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EquipmentViewComponent_mat_expansion_panel_3_Template, 22, 2, "mat-expansion-panel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EquipmentViewComponent_mat_expansion_panel_4_Template, 34, 9, "mat-expansion-panel", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addEquipmentEvent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.equipments);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"]],
      styles: [".add-equipment-button[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.add-component-button[_ngcontent-%COMP%] {\r\n  margin-left: 6px;\r\n}\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n  min-width: 600px;\r\n}\r\n\r\n.equipment-description[_ngcontent-%COMP%] {\r\n  margin-top: 2px;\r\n}\r\n\r\n.equipment-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.equipment-description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\nmat-divider[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n}\r\n\r\n.mat-icon-button[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 0;\r\n  width: 20px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n  line-height: 20px;\r\n}\r\n\r\n.equipment-add-panel-form[_ngcontent-%COMP%] {\r\n  margin-right: 46px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXF1aXBtZW50LXZpZXcvZXF1aXBtZW50LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9lcXVpcG1lbnQtdmlldy9lcXVpcG1lbnQtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1lcXVpcG1lbnQtYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYWRkLWNvbXBvbmVudC1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBtaW4td2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4uZXF1aXBtZW50LWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtZGVzY3JpcHRpb24gZGl2IHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4uZXF1aXBtZW50LWRlc2NyaXB0aW9uIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1kaXZpZGVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkZXItaWNvbi1idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRlci1pY29uLWJ1dHRvbiAubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZXF1aXBtZW50LWFkZC1wYW5lbC1mb3JtIHtcclxuICBtYXJnaW4tcmlnaHQ6IDQ2cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipmentViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-equipment-view',
          templateUrl: './equipment-view.component.html',
          styleUrls: ['./equipment-view.component.css']
        }]
      }], function () {
        return [{
          type: _services_equipment_service__WEBPACK_IMPORTED_MODULE_3__["EquipmentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/laboratory-view/laboratory-view.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/laboratory-view/laboratory-view.component.ts ***!
    \**************************************************************/

  /*! exports provided: LaboratoryViewComponent */

  /***/
  function srcAppLaboratoryViewLaboratoryViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaboratoryViewComponent", function () {
      return LaboratoryViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_laboratory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/laboratory.service */
    "./src/app/services/laboratory.service.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    function LaboratoryViewComponent_mat_expansion_panel_1_ng_container_22_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Type:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Definition:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var equipment_r121 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r121.equipmentId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r121.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r121.definition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r121.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r121.modified);
      }
    }

    function LaboratoryViewComponent_mat_expansion_panel_1_ng_container_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LaboratoryViewComponent_mat_expansion_panel_1_ng_container_22_ng_container_1_Template, 28, 5, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var laboratory_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", laboratory_r110.equipments);
      }
    }

    function LaboratoryViewComponent_mat_expansion_panel_1_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Are not assigned");
      }
    }

    function LaboratoryViewComponent_mat_expansion_panel_1_ng_container_30_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Category:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Type:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var product_r124 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r124.productId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r124.category);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r124.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r124.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r124.modified);
      }
    }

    function LaboratoryViewComponent_mat_expansion_panel_1_ng_container_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LaboratoryViewComponent_mat_expansion_panel_1_ng_container_30_ng_container_1_Template, 28, 5, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var laboratory_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", laboratory_r110.products);
      }
    }

    function LaboratoryViewComponent_mat_expansion_panel_1_ng_template_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Are not assigned");
      }
    }

    function LaboratoryViewComponent_mat_expansion_panel_1_ng_container_34_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Workshop id:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var workshop_r127 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](workshop_r127.workshopId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](workshop_r127.definition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](workshop_r127.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](workshop_r127.modified);
      }
    }

    function LaboratoryViewComponent_mat_expansion_panel_1_ng_container_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LaboratoryViewComponent_mat_expansion_panel_1_ng_container_34_ng_container_1_Template, 24, 4, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var laboratory_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", laboratory_r110.workshops);
      }
    }

    function LaboratoryViewComponent_mat_expansion_panel_1_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Are not assigned");
      }
    }

    function LaboratoryViewComponent_mat_expansion_panel_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Equipments:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LaboratoryViewComponent_mat_expansion_panel_1_ng_container_22_Template, 2, 1, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LaboratoryViewComponent_mat_expansion_panel_1_ng_template_23_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Products:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LaboratoryViewComponent_mat_expansion_panel_1_ng_container_30_Template, 2, 1, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LaboratoryViewComponent_mat_expansion_panel_1_ng_template_31_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LaboratoryViewComponent_mat_expansion_panel_1_ng_container_34_Template, 2, 1, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, LaboratoryViewComponent_mat_expansion_panel_1_ng_template_35_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var laboratory_r110 = ctx.$implicit;

        var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

        var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

        var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Laboratory id: ", laboratory_r110.laboratoryId, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created at: ", laboratory_r110.created, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](laboratory_r110.modified);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](laboratory_r110.definition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", laboratory_r110.equipments !== undefined)("ngIfElse", _r112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", laboratory_r110.products !== undefined)("ngIfElse", _r115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", laboratory_r110.workshops !== undefined)("ngIfElse", _r118);
      }
    }

    var LaboratoryViewComponent = /*#__PURE__*/function () {
      function LaboratoryViewComponent(laboratoryService) {
        _classCallCheck(this, LaboratoryViewComponent);

        this.laboratoryService = laboratoryService;
        this.laboratories = [];
      }

      _createClass(LaboratoryViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllLaboratories();
        }
      }, {
        key: "loadAllLaboratories",
        value: function loadAllLaboratories() {
          var _this26 = this;

          this.laboratoryService.loadAllLaboratories().subscribe(function (data) {
            _this26.laboratories = data;
            console.log(_this26.laboratories);
          });
        }
      }]);

      return LaboratoryViewComponent;
    }();

    LaboratoryViewComponent.ɵfac = function LaboratoryViewComponent_Factory(t) {
      return new (t || LaboratoryViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_laboratory_service__WEBPACK_IMPORTED_MODULE_1__["LaboratoryService"]));
    };

    LaboratoryViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LaboratoryViewComponent,
      selectors: [["app-laboratory-view"]],
      decls: 2,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start", 1, "laboratory-description"], [4, "ngIf", "ngIfElse"], ["elseEquipmentBlock", ""], ["elseProductBlock", ""], ["elseWorkshopBlock", ""], [1, "laboratory-description"]],
      template: function LaboratoryViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LaboratoryViewComponent_mat_expansion_panel_1_Template, 37, 10, "mat-expansion-panel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.laboratories);
        }
      },
      directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".laboratory-description[_ngcontent-%COMP%] {\r\n  margin-top: 2px;\r\n}\r\n\r\n.laboratory-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n  margin-top: 2px;\r\n}\r\n\r\nmat-divider[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFib3JhdG9yeS12aWV3L2xhYm9yYXRvcnktdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xhYm9yYXRvcnktdmlldy9sYWJvcmF0b3J5LXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJvcmF0b3J5LWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5sYWJvcmF0b3J5LWRlc2NyaXB0aW9uIGRpdiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxubWF0LWRpdmlkZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LaboratoryViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-laboratory-view',
          templateUrl: './laboratory-view.component.html',
          styleUrls: ['./laboratory-view.component.css']
        }]
      }], function () {
        return [{
          type: _services_laboratory_service__WEBPACK_IMPORTED_MODULE_1__["LaboratoryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/area-edit.ts":
  /*!************************************!*\
    !*** ./src/app/model/area-edit.ts ***!
    \************************************/

  /*! exports provided: AreaEdit */

  /***/
  function srcAppModelAreaEditTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreaEdit", function () {
      return AreaEdit;
    });

    var AreaEdit = /*#__PURE__*/function () {
      function AreaEdit() {
        _classCallCheck(this, AreaEdit);

        this.areaId = null;
        this.teamOfAreaBoss = null;
        this.brigadeIds = [];
        this.productIds = [];
        this.workshopId = null;
        this.areaDefinition = '';
      }

      _createClass(AreaEdit, [{
        key: "update",
        value: function update(area) {
          var _this27 = this;

          this.areaId = area.areaId;
          this.areaDefinition = area.definition;
          if (area.teamOfAreaBoss) this.teamOfAreaBoss = area.teamOfAreaBoss.teamId;
          if (area.brigades) area.brigades.forEach(function (value) {
            return _this27.brigadeIds.push(value.brigadeId);
          });
          if (area.products) area.products.forEach(function (value) {
            return _this27.productIds.push(value.productId);
          });
          if (area.workshop) this.workshopId = area.workshop.workshopId;
        }
      }]);

      return AreaEdit;
    }();
    /***/

  },

  /***/
  "./src/app/model/area.ts":
  /*!*******************************!*\
    !*** ./src/app/model/area.ts ***!
    \*******************************/

  /*! exports provided: Area */

  /***/
  function srcAppModelAreaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Area", function () {
      return Area;
    });

    var Area = /*#__PURE__*/function () {
      function Area() {
        _classCallCheck(this, Area);

        this.areaId = null;
        this.teamOfAreaBoss = null;
        this.brigades = new Array();
        this.products = new Array();
        this.workshop = null;
        this.definition = '';
      }

      _createClass(Area, null, [{
        key: "updateArea",
        value: function updateArea(currentArea, area) {
          currentArea.teamOfAreaBoss = area.teamOfAreaBoss;
          currentArea.brigades = area.brigades;
          if (currentArea.brigades !== undefined && currentArea.brigades !== null) currentArea.brigades.sort(function (b, a) {
            return b.brigadeId - a.brigadeId;
          });
          currentArea.products = area.products;
          if (currentArea.products !== undefined && currentArea.products !== null) currentArea.products.sort(function (b, a) {
            return b.productId - a.productId;
          });
          currentArea.workshop = area.workshop;
          currentArea.modified = area.modified;
        }
      }]);

      return Area;
    }();
    /***/

  },

  /***/
  "./src/app/model/brigade-edit.ts":
  /*!***************************************!*\
    !*** ./src/app/model/brigade-edit.ts ***!
    \***************************************/

  /*! exports provided: BrigadeEdit */

  /***/
  function srcAppModelBrigadeEditTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrigadeEdit", function () {
      return BrigadeEdit;
    });

    var BrigadeEdit = /*#__PURE__*/function () {
      function BrigadeEdit() {
        _classCallCheck(this, BrigadeEdit);

        this.brigadeId = null;
        this.areaId = null;
        this.workerIds = [];
      }

      _createClass(BrigadeEdit, [{
        key: "update",
        value: function update(brigade) {
          var _this28 = this;

          this.brigadeId = brigade.brigadeId;
          if (brigade.area) this.areaId = brigade.area.areaId;
          if (brigade.workers) brigade.workers.forEach(function (value) {
            return _this28.workerIds.push(value.workerId);
          });
        }
      }]);

      return BrigadeEdit;
    }();
    /***/

  },

  /***/
  "./src/app/model/brigade.ts":
  /*!**********************************!*\
    !*** ./src/app/model/brigade.ts ***!
    \**********************************/

  /*! exports provided: Brigade */

  /***/
  function srcAppModelBrigadeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Brigade", function () {
      return Brigade;
    });

    var Brigade = /*#__PURE__*/function () {
      function Brigade() {
        _classCallCheck(this, Brigade);

        this.brigadeId = null;
        this.workers = [];
        this.area = null;
      }

      _createClass(Brigade, null, [{
        key: "update",
        value: function update(currentBrigade, brigade) {
          currentBrigade.workers = brigade.workers;
          if (currentBrigade.workers !== undefined && currentBrigade.workers !== null) currentBrigade.workers.sort(function (b, a) {
            return b.workerId - a.workerId;
          });
          currentBrigade.area = brigade.area;
          currentBrigade.modified = brigade.modified;
        }
      }]);

      return Brigade;
    }();
    /***/

  },

  /***/
  "./src/app/model/equipment-edit.ts":
  /*!*****************************************!*\
    !*** ./src/app/model/equipment-edit.ts ***!
    \*****************************************/

  /*! exports provided: EquipmentEdit */

  /***/
  function srcAppModelEquipmentEditTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentEdit", function () {
      return EquipmentEdit;
    });

    var EquipmentEdit = function EquipmentEdit() {
      _classCallCheck(this, EquipmentEdit);

      this.equipmentId = null;
      this.equipmentType = '';
      this.definition = '';
      this.laboratoryId = null;
    };
    /***/

  },

  /***/
  "./src/app/model/equipment.ts":
  /*!************************************!*\
    !*** ./src/app/model/equipment.ts ***!
    \************************************/

  /*! exports provided: EquipmentType, Equipment */

  /***/
  function srcAppModelEquipmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentType", function () {
      return EquipmentType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Equipment", function () {
      return Equipment;
    });

    var EquipmentType;

    (function (EquipmentType) {
      EquipmentType[EquipmentType["TESTING_STAND"] = 0] = "TESTING_STAND";
      EquipmentType[EquipmentType["DEFECTIVE_CHECK"] = 1] = "DEFECTIVE_CHECK";
      EquipmentType[EquipmentType["ASSEMBLY_DISASSEMBLY"] = 2] = "ASSEMBLY_DISASSEMBLY";
    })(EquipmentType || (EquipmentType = {}));

    var Equipment = /*#__PURE__*/function () {
      function Equipment() {
        _classCallCheck(this, Equipment);

        this.equipmentId = null;
        this.laboratory = null;
        this.type = null;
        this.definition = '';
      }

      _createClass(Equipment, null, [{
        key: "update",
        value: function update(currentEquipment, equipment) {
          currentEquipment.laboratory = equipment.laboratory;
          currentEquipment.type = equipment.type;
          currentEquipment.definition = equipment.definition;
          currentEquipment.modified = equipment.modified;
        }
      }]);

      return Equipment;
    }();
    /***/

  },

  /***/
  "./src/app/model/product-edit.ts":
  /*!***************************************!*\
    !*** ./src/app/model/product-edit.ts ***!
    \***************************************/

  /*! exports provided: ProductEdit */

  /***/
  function srcAppModelProductEditTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductEdit", function () {
      return ProductEdit;
    });
    /* harmony import */


    var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./product */
    "./src/app/model/product.ts");

    var ProductEdit = /*#__PURE__*/function () {
      function ProductEdit() {
        _classCallCheck(this, ProductEdit);

        this.productId = null;
        this.category = null;
        this.type = null;
        this.areaId = null;
        this.laboratoryId = null;
      }

      _createClass(ProductEdit, [{
        key: "update",
        value: function update(product) {
          this.productId = product.productId;
          if (product.category) this.category = _product__WEBPACK_IMPORTED_MODULE_0__["ProductCategory"][product.category];
          if (product.type) this.type = _product__WEBPACK_IMPORTED_MODULE_0__["ProductType"][product.type];
          if (product.area) this.areaId = product.area.areaId;
          if (product.laboratory) this.laboratoryId = product.laboratory.laboratoryId;
        }
      }]);

      return ProductEdit;
    }();
    /***/

  },

  /***/
  "./src/app/model/product.ts":
  /*!**********************************!*\
    !*** ./src/app/model/product.ts ***!
    \**********************************/

  /*! exports provided: ProductCategory, ProductType, Product */

  /***/
  function srcAppModelProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCategory", function () {
      return ProductCategory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductType", function () {
      return ProductType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });

    var ProductCategory;

    (function (ProductCategory) {
      ProductCategory[ProductCategory["LEHKOVIY"] = 0] = "LEHKOVIY";
      ProductCategory[ProductCategory["GRUSOVIY"] = 1] = "GRUSOVIY";
      ProductCategory[ProductCategory["AVTOBUS"] = 2] = "AVTOBUS";
    })(ProductCategory || (ProductCategory = {}));

    var ProductType;

    (function (ProductType) {
      ProductType[ProductType["SEDAN"] = 0] = "SEDAN";
      ProductType[ProductType["HACHBEK"] = 1] = "HACHBEK";
      ProductType[ProductType["UNIVERSAL"] = 2] = "UNIVERSAL";
      ProductType[ProductType["SAMOSVAL"] = 3] = "SAMOSVAL";
      ProductType[ProductType["TIAGACH"] = 4] = "TIAGACH";
      ProductType[ProductType["PLATFORMA"] = 5] = "PLATFORMA";
    })(ProductType || (ProductType = {}));

    var Product = /*#__PURE__*/function () {
      function Product() {
        _classCallCheck(this, Product);

        this.productId = null;
        this.area = null;
        this.laboratory = null;
        this.category = null;
        this.type = null;
      }

      _createClass(Product, null, [{
        key: "update",
        value: function update(currentProduct, product) {
          currentProduct.area = product.area;
          currentProduct.laboratory = product.laboratory;
          currentProduct.category = product.category;
          currentProduct.type = product.type;
          currentProduct.modified = product.modified;
        }
      }]);

      return Product;
    }();
    /***/

  },

  /***/
  "./src/app/model/select-data.ts":
  /*!**************************************!*\
    !*** ./src/app/model/select-data.ts ***!
    \**************************************/

  /*! exports provided: SelectDataImpl */

  /***/
  function srcAppModelSelectDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectDataImpl", function () {
      return SelectDataImpl;
    });

    var SelectDataImpl = function SelectDataImpl(value, viewValue, disable) {
      _classCallCheck(this, SelectDataImpl);

      this.value = value;
      this.viewValue = viewValue;
      this.disable = disable;
    };
    /***/

  },

  /***/
  "./src/app/model/teamOfAreaBoss-edit.ts":
  /*!**********************************************!*\
    !*** ./src/app/model/teamOfAreaBoss-edit.ts ***!
    \**********************************************/

  /*! exports provided: TeamOfAreaBossEdit */

  /***/
  function srcAppModelTeamOfAreaBossEditTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamOfAreaBossEdit", function () {
      return TeamOfAreaBossEdit;
    });

    var TeamOfAreaBossEdit = /*#__PURE__*/function () {
      function TeamOfAreaBossEdit() {
        _classCallCheck(this, TeamOfAreaBossEdit);

        this.technicalPersonalIds = [];
        this.teamId = null;
        this.areaId = null;
        this.technicalPersonalIds = [];
      }

      _createClass(TeamOfAreaBossEdit, [{
        key: "update",
        value: function update(team) {
          var _this29 = this;

          this.teamId = team.teamId;
          if (team.technicalPersonals) team.technicalPersonals.forEach(function (value) {
            return _this29.technicalPersonalIds.push(value.techPersonalId);
          });
          if (team.area) this.areaId = team.area.areaId;
        }
      }]);

      return TeamOfAreaBossEdit;
    }();
    /***/

  },

  /***/
  "./src/app/model/teamOfAreaBoss.ts":
  /*!*****************************************!*\
    !*** ./src/app/model/teamOfAreaBoss.ts ***!
    \*****************************************/

  /*! exports provided: TeamOfAreaBoss */

  /***/
  function srcAppModelTeamOfAreaBossTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamOfAreaBoss", function () {
      return TeamOfAreaBoss;
    });

    var TeamOfAreaBoss = /*#__PURE__*/function () {
      function TeamOfAreaBoss() {
        _classCallCheck(this, TeamOfAreaBoss);

        this.teamId = null;
        this.technicalPersonals = [];
        this.area = null;
      }

      _createClass(TeamOfAreaBoss, null, [{
        key: "updateTeam",
        value: function updateTeam(currentTeam, team) {
          currentTeam.technicalPersonals = team.technicalPersonals;
          if (currentTeam.technicalPersonals !== undefined && currentTeam.technicalPersonals !== null) currentTeam.technicalPersonals.sort(function (b, a) {
            return b.techPersonalId - a.techPersonalId;
          });
          currentTeam.area = team.area;
          currentTeam.modified = team.modified;
        }
      }]);

      return TeamOfAreaBoss;
    }();
    /***/

  },

  /***/
  "./src/app/model/technicalPersonal-edit.ts":
  /*!*************************************************!*\
    !*** ./src/app/model/technicalPersonal-edit.ts ***!
    \*************************************************/

  /*! exports provided: TechnicalPersonalEdit */

  /***/
  function srcAppModelTechnicalPersonalEditTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechnicalPersonalEdit", function () {
      return TechnicalPersonalEdit;
    });

    var TechnicalPersonalEdit = function TechnicalPersonalEdit() {
      _classCallCheck(this, TechnicalPersonalEdit);

      this.techPersonalId = null;
      this.name = '';
      this.type = '';
      this.description = '';
      this.teamOfAreaBossId = null;
    };
    /***/

  },

  /***/
  "./src/app/model/technicalPersonal.ts":
  /*!********************************************!*\
    !*** ./src/app/model/technicalPersonal.ts ***!
    \********************************************/

  /*! exports provided: TechPersonalType, TechnicalPersonal */

  /***/
  function srcAppModelTechnicalPersonalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechPersonalType", function () {
      return TechPersonalType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechnicalPersonal", function () {
      return TechnicalPersonal;
    });

    var TechPersonalType;

    (function (TechPersonalType) {
      TechPersonalType[TechPersonalType["ENGINEER"] = 0] = "ENGINEER";
      TechPersonalType[TechPersonalType["TECHNOLOG"] = 1] = "TECHNOLOG";
      TechPersonalType[TechPersonalType["TECHNIC"] = 2] = "TECHNIC";
      TechPersonalType[TechPersonalType["TEAM_OF_AREA_BOSS"] = 3] = "TEAM_OF_AREA_BOSS";
      TechPersonalType[TechPersonalType["WORKSHOP_BOSS"] = 4] = "WORKSHOP_BOSS";
      TechPersonalType[TechPersonalType["MASTER"] = 5] = "MASTER";
    })(TechPersonalType || (TechPersonalType = {}));

    var TechnicalPersonal = /*#__PURE__*/function () {
      function TechnicalPersonal() {
        _classCallCheck(this, TechnicalPersonal);

        this.techPersonalId = null;
        this.teamOfAreaBoss = null;
        this.personalName = '';
        this.personalType = null;
        this.description = '';
      }

      _createClass(TechnicalPersonal, null, [{
        key: "update",
        value: function update(currentPersonal, personal) {
          currentPersonal.teamOfAreaBoss = personal.teamOfAreaBoss;
          currentPersonal.personalName = personal.personalName;
          currentPersonal.personalType = personal.personalType;
          currentPersonal.description = personal.description;
          currentPersonal.modified = personal.modified;
        }
      }]);

      return TechnicalPersonal;
    }();
    /***/

  },

  /***/
  "./src/app/model/worker-my-edit.ts":
  /*!*****************************************!*\
    !*** ./src/app/model/worker-my-edit.ts ***!
    \*****************************************/

  /*! exports provided: WorkerMyEdit */

  /***/
  function srcAppModelWorkerMyEditTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkerMyEdit", function () {
      return WorkerMyEdit;
    });

    var WorkerMyEdit = function WorkerMyEdit() {
      _classCallCheck(this, WorkerMyEdit);

      this.workerId = null;
      this.name = '';
      this.type = '';
      this.brigadeId = null;
    };
    /***/

  },

  /***/
  "./src/app/model/worker-my.ts":
  /*!************************************!*\
    !*** ./src/app/model/worker-my.ts ***!
    \************************************/

  /*! exports provided: WorkerMyType, WorkerMy */

  /***/
  function srcAppModelWorkerMyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkerMyType", function () {
      return WorkerMyType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkerMy", function () {
      return WorkerMy;
    });

    var WorkerMyType;

    (function (WorkerMyType) {
      WorkerMyType[WorkerMyType["SBORSCHIK"] = 0] = "SBORSCHIK";
      WorkerMyType[WorkerMyType["TOKAR"] = 1] = "TOKAR";
      WorkerMyType[WorkerMyType["SVARSCHIK"] = 2] = "SVARSCHIK";
      WorkerMyType[WorkerMyType["SLUSAR"] = 3] = "SLUSAR";
      WorkerMyType[WorkerMyType["BRIGADIER"] = 4] = "BRIGADIER";
    })(WorkerMyType || (WorkerMyType = {}));

    ;

    var WorkerMy = /*#__PURE__*/function () {
      function WorkerMy() {
        _classCallCheck(this, WorkerMy);

        this.workerId = null;
        this.brigade = null;
        this.name = '';
        this.type = null;
      }

      _createClass(WorkerMy, null, [{
        key: "update",
        value: function update(currentWorker, worker) {
          currentWorker.brigade = worker.brigade;
          currentWorker.name = worker.name;
          currentWorker.type = worker.type;
          currentWorker.modified = worker.modified;
        }
      }]);

      return WorkerMy;
    }();
    /***/

  },

  /***/
  "./src/app/model/workshop-edit.ts":
  /*!****************************************!*\
    !*** ./src/app/model/workshop-edit.ts ***!
    \****************************************/

  /*! exports provided: WorkshopEdit */

  /***/
  function srcAppModelWorkshopEditTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkshopEdit", function () {
      return WorkshopEdit;
    });

    var WorkshopEdit = /*#__PURE__*/function () {
      function WorkshopEdit() {
        _classCallCheck(this, WorkshopEdit);

        this.workshopId = null;
        this.definition = '';
        this.areaIds = [];
        this.laboratoryIds = [];
      }

      _createClass(WorkshopEdit, [{
        key: "update",
        value: function update(workshop) {
          var _this30 = this;

          this.workshopId = workshop.workshopId;
          this.definition = workshop.definition;
          if (workshop.areas) workshop.areas.forEach(function (value) {
            return _this30.areaIds.push(value.areaId);
          });
          if (workshop.laboratories) workshop.laboratories.forEach(function (value) {
            return _this30.laboratoryIds.push(value.laboratoryId);
          });
        }
      }]);

      return WorkshopEdit;
    }();
    /***/

  },

  /***/
  "./src/app/model/workshop.ts":
  /*!***********************************!*\
    !*** ./src/app/model/workshop.ts ***!
    \***********************************/

  /*! exports provided: Workshop */

  /***/
  function srcAppModelWorkshopTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Workshop", function () {
      return Workshop;
    });

    var Workshop = /*#__PURE__*/function () {
      function Workshop() {
        _classCallCheck(this, Workshop);

        this.workshopId = null;
        this.areas = [];
        this.laboratories = [];
        this.definition = '';
      }

      _createClass(Workshop, null, [{
        key: "update",
        value: function update(currentWorkshop, workshop) {
          currentWorkshop.areas = workshop.areas;
          if (currentWorkshop.areas !== undefined && currentWorkshop.areas !== null) currentWorkshop.areas.sort(function (b, a) {
            return b.areaId - a.areaId;
          });
          currentWorkshop.laboratories = workshop.laboratories;
          if (currentWorkshop.laboratories !== undefined && currentWorkshop.laboratories !== null) currentWorkshop.laboratories.sort(function (b, a) {
            return b.laboratoryId - a.laboratoryId;
          });
          currentWorkshop.definition = workshop.definition;
          currentWorkshop.modified = workshop.modified;
        }
      }]);

      return Workshop;
    }();
    /***/

  },

  /***/
  "./src/app/product-view/product-view.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/product-view/product-view.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductViewComponent */

  /***/
  function srcAppProductViewProductViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductViewComponent", function () {
      return ProductViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/product */
    "./src/app/model/product.ts");
    /* harmony import */


    var _model_product_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/product-edit */
    "./src/app/model/product-edit.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _services_area_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/area.service */
    "./src/app/services/area.service.ts");
    /* harmony import */


    var _services_laboratory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/laboratory.service */
    "./src/app/services/laboratory.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ProductViewComponent_mat_expansion_panel_3_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r133 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r133.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r133.viewValue, " ");
      }
    }

    function ProductViewComponent_mat_expansion_panel_3_mat_option_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r134 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r134.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r134.viewValue, " ");
      }
    }

    function ProductViewComponent_mat_expansion_panel_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Area id: NEW ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add new Product ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Category:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ProductViewComponent_mat_expansion_panel_3_Template_mat_select_selectionChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136);

          var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r135.onCategoryChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductViewComponent_mat_expansion_panel_3_mat_option_11_Template, 2, 2, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ProductViewComponent_mat_expansion_panel_3_Template_mat_select_selectionChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136);

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r137.onTypeChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProductViewComponent_mat_expansion_panel_3_mat_option_16_Template, 2, 2, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductViewComponent_mat_expansion_panel_3_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136);

          var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r138.createProduct();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductViewComponent_mat_expansion_panel_3_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136);

          var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r139.addProductEvent = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r129.categories);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r129.types);
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Category:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r140.category);
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_div_17_div_2_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r157 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r157.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r157.viewValue, " ");
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_div_17_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Category:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ProductViewComponent_mat_expansion_panel_4_div_17_div_2_Template_mat_select_selectionChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r159);

          var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r158.onCategoryChange($event);
        })("valueChange", function ProductViewComponent_mat_expansion_panel_4_div_17_div_2_Template_mat_select_valueChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r159);

          var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r160.selectedCategory.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductViewComponent_mat_expansion_panel_4_div_17_div_2_mat_option_5_Template, 2, 2, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r154.selectedCategory.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r154.categories);
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductViewComponent_mat_expansion_panel_4_div_17_div_1_Template, 5, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductViewComponent_mat_expansion_panel_4_div_17_div_2_Template, 6, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r141.editProductEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r141.editProductEvent);
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Category is not assigned");
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_div_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Product type:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r140.type);
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_div_21_div_2_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r165 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r165.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r165.viewValue, " ");
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_div_21_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ProductViewComponent_mat_expansion_panel_4_div_21_div_2_Template_mat_select_selectionChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r167);

          var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r166.onTypeChange($event);
        })("valueChange", function ProductViewComponent_mat_expansion_panel_4_div_21_div_2_Template_mat_select_valueChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r167);

          var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r168.selectedType.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductViewComponent_mat_expansion_panel_4_div_21_div_2_mat_option_5_Template, 2, 2, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r162.selectedType.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r162.types);
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductViewComponent_mat_expansion_panel_4_div_21_div_1_Template, 5, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductViewComponent_mat_expansion_panel_4_div_21_div_2_Template, 6, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r144.editProductEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r144.editProductEvent);
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Type is not assigned");
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Area id:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Definition:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r140.area.areaId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r140.area.definition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r140.area.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r140.area.modified);
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Area is not assigned");
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Laboratory id:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Definition:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r140.laboratory.laboratoryId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r140.laboratory.definition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r140.laboratory.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r140.laboratory.modified);
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Laboratory is not assigned");
      }
    }

    function ProductViewComponent_mat_expansion_panel_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function ProductViewComponent_mat_expansion_panel_4_Template_mat_expansion_panel_closed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172);

          var product_r140 = ctx.$implicit;

          var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r171.onAfterCollapse(product_r140);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductViewComponent_mat_expansion_panel_4_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172);

          var product_r140 = ctx.$implicit;

          var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r173.editProduct(product_r140);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProductViewComponent_mat_expansion_panel_4_div_17_Template, 3, 2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProductViewComponent_mat_expansion_panel_4_ng_template_18_Template, 1, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProductViewComponent_mat_expansion_panel_4_div_21_Template, 3, 2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductViewComponent_mat_expansion_panel_4_ng_template_22_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProductViewComponent_mat_expansion_panel_4_div_25_Template, 24, 4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProductViewComponent_mat_expansion_panel_4_ng_template_26_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProductViewComponent_mat_expansion_panel_4_div_29_Template, 24, 4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProductViewComponent_mat_expansion_panel_4_ng_template_30_Template, 1, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductViewComponent_mat_expansion_panel_4_Template_button_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172);

          var product_r140 = ctx.$implicit;

          var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r174.cancelProduct(product_r140);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductViewComponent_mat_expansion_panel_4_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172);

          var product_r140 = ctx.$implicit;

          var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r175.saveProduct(product_r140);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductViewComponent_mat_expansion_panel_4_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172);

          var product_r140 = ctx.$implicit;

          var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r176.deleteProduct(product_r140);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r140 = ctx.$implicit;

        var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        var _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Product id: ", product_r140.productId, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created at: ", product_r140.created, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r140.modified);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r140.category !== undefined)("ngIfElse", _r145);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r140.type !== undefined)("ngIfElse", _r142);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r140.area !== undefined)("ngIfElse", _r148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r140.laboratory !== undefined)("ngIfElse", _r151);
      }
    }

    var ProductViewComponent = /*#__PURE__*/function () {
      function ProductViewComponent(productService, areaService, laboratoryService) {
        _classCallCheck(this, ProductViewComponent);

        this.productService = productService;
        this.areaService = areaService;
        this.laboratoryService = laboratoryService;
        this.categories = [{
          value: '0',
          viewValue: 'LEHKOVIY'
        }, {
          value: '1',
          viewValue: 'GRUSOVIY'
        }, {
          value: '2',
          viewValue: 'AVTOBUS'
        }];
        this.types = [{
          value: '0',
          viewValue: 'SEDAN'
        }, {
          value: '1',
          viewValue: 'HACHBEK'
        }, {
          value: '2',
          viewValue: 'UNIVERSAL'
        }, {
          value: '3',
          viewValue: 'SAMOSVAL'
        }, {
          value: '4',
          viewValue: 'TIAGACH'
        }, {
          value: '5',
          viewValue: 'PLATFORMA'
        }];
        this.products = [];
        this.newCategory = null;
        this.newType = null;
        this.addProductEvent = false;
        this.editProductEvent = false;
        this.selectedCategory = null;
        this.selectedType = null;
        this.isDataChanged = false;
      }

      _createClass(ProductViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllProducts();
        } // -------------------------------------
        // Product methods
        // -------------------------------------

      }, {
        key: "loadAllProducts",
        value: function loadAllProducts() {
          var _this31 = this;

          this.productService.loadAllProducts().subscribe(function (data) {
            _this31.products = data;
            console.log(_this31.products);
          });
        }
      }, {
        key: "addProduct",
        value: function addProduct() {
          this.addProductEvent = true;
          console.log('Add Product event');
        }
      }, {
        key: "onCategoryChange",
        value: function onCategoryChange(event) {
          this.newCategory = event.value;
          console.log('This New category ' + _model_product__WEBPACK_IMPORTED_MODULE_1__["ProductCategory"][this.newCategory]);
        }
      }, {
        key: "onTypeChange",
        value: function onTypeChange(event) {
          this.newType = event.value;
          console.log('This New type ' + _model_product__WEBPACK_IMPORTED_MODULE_1__["ProductType"][this.newType]);
        }
      }, {
        key: "editProduct",
        value: function editProduct(product) {
          console.log('Edit Product event id: ' + product.productId);
          this.newCategory = product.category;
          this.newType = product.type;
          this.setSelectedCategoryValue(product.category);
          this.setSelectedTypeValue(product.type);
          this.editProductEvent = true;
          this.isDataChanged = true;
        }
      }, {
        key: "createProduct",
        value: function createProduct() {
          var _this32 = this;

          var productEdit = new _model_product_edit__WEBPACK_IMPORTED_MODULE_2__["ProductEdit"]();
          productEdit.category = _model_product__WEBPACK_IMPORTED_MODULE_1__["ProductCategory"][this.newCategory];
          productEdit.type = _model_product__WEBPACK_IMPORTED_MODULE_1__["ProductType"][this.newType];
          this.productService.createNewProduct(productEdit).subscribe(function (data) {
            _this32.products.push(data);
          }, function (error) {
            return console.log(error);
          });
          this.clearEditValues();
          this.addProductEvent = false;
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(product) {
          var _this33 = this;

          this.productService.deleteProduct(product.productId).subscribe(function (data) {
            _this33.products = _this33.products.filter(function (value) {
              return value.productId !== product.productId;
            });
            console.log('Product id: ' + product.productId + ' is deleted');

            _this33.clearEditValues();
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "saveProduct",
        value: function saveProduct(product) {
          var _this34 = this;

          if (this.isDataChanged) {
            console.log('Save Product id: ' + product.productId);
            var productEdit = new _model_product_edit__WEBPACK_IMPORTED_MODULE_2__["ProductEdit"]();
            productEdit.category = _model_product__WEBPACK_IMPORTED_MODULE_1__["ProductCategory"][this.newCategory];
            productEdit.type = _model_product__WEBPACK_IMPORTED_MODULE_1__["ProductType"][this.newType];
            productEdit.productId = product.productId;
            if (product.area) productEdit.areaId = product.area.areaId;
            if (product.laboratory) productEdit.laboratoryId = product.laboratory.laboratoryId;
            this.productService.saveProduct(productEdit).subscribe(function (data) {
              var currentProduct = _this34.products.find(function (value) {
                return value.productId === product.productId;
              });

              _model_product__WEBPACK_IMPORTED_MODULE_1__["Product"].update(currentProduct, data);

              _this34.clearEditValues();

              _this34.isDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        }
      }, {
        key: "cancelProduct",
        value: function cancelProduct(product) {
          console.log('Cancel Product id: ' + product.productId);
          if (this.isDataChanged) this.onAfterCollapse(product);
        }
      }, {
        key: "onAfterCollapse",
        value: function onAfterCollapse(product) {
          var _this35 = this;

          console.log('OnAfterCollapse event, Product id: ' + product.productId);

          if (this.isDataChanged) {
            console.log('The Product Data changed, clear changes for Product id: ' + product.productId);
            this.productService.loadProductById(product.productId).subscribe(function (data) {
              var currentProduct = _this35.products.find(function (value) {
                return value.productId === product.productId;
              });

              _model_product__WEBPACK_IMPORTED_MODULE_1__["Product"].update(currentProduct, data);

              _this35.clearEditValues(); // Update isDataChanged value top false


              _this35.isDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        }
      }, {
        key: "clearEditValues",
        value: function clearEditValues() {
          this.selectedCategory = null;
          this.selectedType = null;
          this.editProductEvent = false;
        }
      }, {
        key: "setSelectedTypeValue",
        value: function setSelectedTypeValue(type) {
          this.selectedType = {
            value: _model_product__WEBPACK_IMPORTED_MODULE_1__["ProductType"][type].toString(),
            viewValue: type.toString()
          };
        }
      }, {
        key: "setSelectedCategoryValue",
        value: function setSelectedCategoryValue(category) {
          this.selectedCategory = {
            value: _model_product__WEBPACK_IMPORTED_MODULE_1__["ProductCategory"][category].toString(),
            viewValue: category.toString()
          };
        }
      }]);

      return ProductViewComponent;
    }();

    ProductViewComponent.ɵfac = function ProductViewComponent_Factory(t) {
      return new (t || ProductViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_area_service__WEBPACK_IMPORTED_MODULE_4__["AreaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_laboratory_service__WEBPACK_IMPORTED_MODULE_5__["LaboratoryService"]));
    };

    ProductViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductViewComponent,
      selectors: [["app-product-view"]],
      decls: 5,
      vars: 2,
      consts: [["mat-raised-button", "", 1, "add-product-button", 3, "click"], ["expanded", "true", 4, "ngIf"], [3, "closed", 4, "ngFor", "ngForOf"], ["expanded", "true"], ["fxLayout", "row", "fxLayoutAlign", "start", 1, "item-description"], [1, "product-add-panel-form"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "end", 1, "product-description"], ["mat-raised-button", "", 3, "click"], [3, "value"], [3, "closed"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "product-description"], ["mat-icon-button", "", "color", "primary", 1, "add-component-button", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start", 1, "product-description"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["elseCategoryBlock", ""], ["elseAreaBlock", ""], ["elseLaboratoryBlock", ""], [4, "ngIf"], [3, "value", "selectionChange", "valueChange"]],
      template: function ProductViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductViewComponent_Template_button_click_0_listener() {
            return ctx.addProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductViewComponent_mat_expansion_panel_3_Template, 23, 2, "mat-expansion-panel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductViewComponent_mat_expansion_panel_4_Template, 40, 11, "mat-expansion-panel", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addProductEvent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"]],
      styles: [".add-product-button[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.add-component-button[_ngcontent-%COMP%] {\r\n  margin-left: 6px;\r\n}\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n  min-width: 600px;\r\n}\r\n\r\n.product-description[_ngcontent-%COMP%] {\r\n  margin-top: 2px;\r\n}\r\n\r\n.product-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.product-description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\nmat-divider[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n}\r\n\r\n.mat-icon-button[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 0;\r\n  width: 20px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n  line-height: 20px;\r\n}\r\n\r\n.product-add-panel-form[_ngcontent-%COMP%] {\r\n  margin-right: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC12aWV3L3Byb2R1Y3Qtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcHJvZHVjdC1idXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5hZGQtY29tcG9uZW50LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIG1pbi13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRlc2NyaXB0aW9uIGRpdiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLnByb2R1Y3QtZGVzY3JpcHRpb24gYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxubWF0LWRpdmlkZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRlci1pY29uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucGFuZWwtaGVhZGVyLWljb24tYnV0dG9uIC5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ubWF0LWljb24tYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1pbi13aWR0aDogMDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWFkZC1wYW5lbC1mb3JtIHtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-view',
          templateUrl: './product-view.component.html',
          styleUrls: ['./product-view.component.css']
        }]
      }], function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }, {
          type: _services_area_service__WEBPACK_IMPORTED_MODULE_4__["AreaService"]
        }, {
          type: _services_laboratory_service__WEBPACK_IMPORTED_MODULE_5__["LaboratoryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/select-dialog-single/select-dialog-single.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/select-dialog-single/select-dialog-single.component.ts ***!
    \************************************************************************/

  /*! exports provided: SelectDialogSingleComponent */

  /***/
  function srcAppSelectDialogSingleSelectDialogSingleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectDialogSingleComponent", function () {
      return SelectDialogSingleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function SelectDialogSingleComponent_mat_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.value)("disabled", item_r1.disable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.viewValue, " ");
      }
    }

    var SelectDialogSingleComponent = /*#__PURE__*/function () {
      function SelectDialogSingleComponent(dialogRef, data) {
        _classCallCheck(this, SelectDialogSingleComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.selectedValues = [];
      }

      _createClass(SelectDialogSingleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "onSelectEvent",
        value: function onSelectEvent(event) {
          console.log('Dialog select event value: ' + event.value);
          if (event.value instanceof Array) this.selectedValues = event.value;else this.selectedValues.push(event.value);
        }
      }]);

      return SelectDialogSingleComponent;
    }();

    SelectDialogSingleComponent.ɵfac = function SelectDialogSingleComponent_Factory(t) {
      return new (t || SelectDialogSingleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    SelectDialogSingleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectDialogSingleComponent,
      selectors: [["app-select-dialog-single"]],
      decls: 13,
      vars: 3,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "single-dialog"], [3, "multiple", "selectionChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", "fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], [3, "value", "disabled"]],
      template: function SelectDialogSingleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose one item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SelectDialogSingleComponent_Template_mat_select_selectionChange_6_listener($event) {
            return ctx.onSelectEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SelectDialogSingleComponent_mat_option_7_Template, 2, 3, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectDialogSingleComponent_Template_button_click_9_listener() {
            return ctx.onNoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", ctx.data.isMultiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.selectedDataList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.selectedValues);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]],
      styles: [".single-dialog .mat-form-field {\r\n  width: 99% !important;\r\n}\r\n\r\n  .single-dialog .mat-label {\r\n  width: 99% !important;\r\n}\r\n\r\n  .single-dialog .mat-select {\r\n  width: 99% !important;\r\n}\r\n\r\n  .single-dialog .mat-option {\r\n  width: 99% !important;\r\n}\r\n\r\n  .single-dialog .mat-select-panel {\r\n  min-width: calc(100% + 1px) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LWRpYWxvZy1zaW5nbGUvc2VsZWN0LWRpYWxvZy1zaW5nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3QtZGlhbG9nLXNpbmdsZS9zZWxlY3QtZGlhbG9nLXNpbmdsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjo6bmctZGVlcCAuc2luZ2xlLWRpYWxvZyAubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiA5OSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zaW5nbGUtZGlhbG9nIC5tYXQtbGFiZWwge1xyXG4gIHdpZHRoOiA5OSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zaW5nbGUtZGlhbG9nIC5tYXQtc2VsZWN0IHtcclxuICB3aWR0aDogOTklICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc2luZ2xlLWRpYWxvZyAubWF0LW9wdGlvbiB7XHJcbiAgd2lkdGg6IDk5JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnNpbmdsZS1kaWFsb2cgLm1hdC1zZWxlY3QtcGFuZWwge1xyXG4gIG1pbi13aWR0aDogY2FsYygxMDAlICsgMXB4KSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectDialogSingleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-select-dialog-single',
          templateUrl: './select-dialog-single.component.html',
          styleUrls: ['./select-dialog-single.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/area.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/area.service.ts ***!
    \******************************************/

  /*! exports provided: AreaService */

  /***/
  function srcAppServicesAreaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreaService", function () {
      return AreaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var localUrl = 'http://localhost:8888/api/area';

    var AreaService = /*#__PURE__*/function () {
      function AreaService(http) {
        _classCallCheck(this, AreaService);

        this.http = http;
      }

      _createClass(AreaService, [{
        key: "loadAllAreas",
        value: function loadAllAreas() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list', {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "loadAreaById",
        value: function loadAreaById(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list/' + id, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "createNewArea",
        value: function createNewArea(area) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.post(localUrl + '/add', area, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "saveArea",
        value: function saveArea(area) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.put(localUrl + '/edit', area, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "deleteArea",
        value: function deleteArea(id) {
          return this.http["delete"](localUrl + '/delete/' + id);
        }
      }]);

      return AreaService;
    }();

    AreaService.ɵfac = function AreaService_Factory(t) {
      return new (t || AreaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AreaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AreaService,
      factory: AreaService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AreaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/brigade.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/brigade.service.ts ***!
    \*********************************************/

  /*! exports provided: BrigadeService */

  /***/
  function srcAppServicesBrigadeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrigadeService", function () {
      return BrigadeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var localUrl = 'http://localhost:8888/api/brigade';

    var BrigadeService = /*#__PURE__*/function () {
      function BrigadeService(http) {
        _classCallCheck(this, BrigadeService);

        this.http = http;
      }

      _createClass(BrigadeService, [{
        key: "loadAllBrigades",
        value: function loadAllBrigades() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list', {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "loadBrigadeById",
        value: function loadBrigadeById(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list/' + id, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "createNewBrigade",
        value: function createNewBrigade(brigade) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.post(localUrl + '/add', brigade, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "saveBrigade",
        value: function saveBrigade(brigade) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.put(localUrl + '/edit', brigade, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "deleteBrigade",
        value: function deleteBrigade(id) {
          return this.http["delete"](localUrl + '/delete/' + id);
        }
      }]);

      return BrigadeService;
    }();

    BrigadeService.ɵfac = function BrigadeService_Factory(t) {
      return new (t || BrigadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BrigadeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BrigadeService,
      factory: BrigadeService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrigadeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/equipment.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/equipment.service.ts ***!
    \***********************************************/

  /*! exports provided: EquipmentService */

  /***/
  function srcAppServicesEquipmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentService", function () {
      return EquipmentService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var localUrl = 'http://localhost:8888/api/equipment';

    var EquipmentService = /*#__PURE__*/function () {
      function EquipmentService(http) {
        _classCallCheck(this, EquipmentService);

        this.http = http;
      }

      _createClass(EquipmentService, [{
        key: "loadAllEquipments",
        value: function loadAllEquipments() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list', {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "createNewEquipment",
        value: function createNewEquipment(equipment) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.post(localUrl + '/add', equipment, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "loadEquipmentById",
        value: function loadEquipmentById(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list/' + id, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "saveEquipment",
        value: function saveEquipment(equipment) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.put(localUrl + '/edit', equipment, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "deleteEquipment",
        value: function deleteEquipment(id) {
          return this.http["delete"](localUrl + '/delete/' + id);
        }
      }]);

      return EquipmentService;
    }();

    EquipmentService.ɵfac = function EquipmentService_Factory(t) {
      return new (t || EquipmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    EquipmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: EquipmentService,
      factory: EquipmentService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EquipmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/laboratory.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/laboratory.service.ts ***!
    \************************************************/

  /*! exports provided: LaboratoryService */

  /***/
  function srcAppServicesLaboratoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaboratoryService", function () {
      return LaboratoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var localUrl = 'http://localhost:8888/api/laboratory';

    var LaboratoryService = /*#__PURE__*/function () {
      function LaboratoryService(http) {
        _classCallCheck(this, LaboratoryService);

        this.http = http;
      }

      _createClass(LaboratoryService, [{
        key: "loadAllLaboratories",
        value: function loadAllLaboratories() {
          return this.http.get(localUrl + '/list');
        }
      }]);

      return LaboratoryService;
    }();

    LaboratoryService.ɵfac = function LaboratoryService_Factory(t) {
      return new (t || LaboratoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LaboratoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LaboratoryService,
      factory: LaboratoryService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LaboratoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var localUrl = 'http://localhost:8888/api/product';

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
      }

      _createClass(ProductService, [{
        key: "loadAllProducts",
        value: function loadAllProducts() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list', {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "loadProductById",
        value: function loadProductById(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list/' + id, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "createNewProduct",
        value: function createNewProduct(product) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.post(localUrl + '/add', product, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "saveProduct",
        value: function saveProduct(product) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.put(localUrl + '/edit', product, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(id) {
          return this.http["delete"](localUrl + '/delete/' + id);
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/teamOfAreaBoss.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/teamOfAreaBoss.service.ts ***!
    \****************************************************/

  /*! exports provided: TeamOfAreaBossService */

  /***/
  function srcAppServicesTeamOfAreaBossServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamOfAreaBossService", function () {
      return TeamOfAreaBossService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var localUrl = 'http://localhost:8888/api/teamOfAreaBoss';

    var TeamOfAreaBossService = /*#__PURE__*/function () {
      function TeamOfAreaBossService(http) {
        _classCallCheck(this, TeamOfAreaBossService);

        this.http = http;
      }

      _createClass(TeamOfAreaBossService, [{
        key: "loadAllTeams",
        value: function loadAllTeams() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list', {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "loadTeamById",
        value: function loadTeamById(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list/' + id, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "createNewTeam",
        value: function createNewTeam(team) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.post(localUrl + '/add', team, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "saveTeam",
        value: function saveTeam(team) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.put(localUrl + '/edit', team, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "deleteTeam",
        value: function deleteTeam(id) {
          return this.http["delete"](localUrl + '/delete/' + id);
        }
      }]);

      return TeamOfAreaBossService;
    }();

    TeamOfAreaBossService.ɵfac = function TeamOfAreaBossService_Factory(t) {
      return new (t || TeamOfAreaBossService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TeamOfAreaBossService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TeamOfAreaBossService,
      factory: TeamOfAreaBossService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamOfAreaBossService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/techPersonalService.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/techPersonalService.ts ***!
    \*************************************************/

  /*! exports provided: TechPersonalService */

  /***/
  function srcAppServicesTechPersonalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechPersonalService", function () {
      return TechPersonalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var localUrl = 'http://localhost:8888/api/technicalPersonal';

    var TechPersonalService = /*#__PURE__*/function () {
      function TechPersonalService(http) {
        _classCallCheck(this, TechPersonalService);

        this.http = http;
      }

      _createClass(TechPersonalService, [{
        key: "loadAllTechnicalPersonals",
        value: function loadAllTechnicalPersonals() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list', {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "loadTechnicalPersonalById",
        value: function loadTechnicalPersonalById(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list/' + id, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "createNewTechnicalPersonal",
        value: function createNewTechnicalPersonal(technicalPersonal) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.post(localUrl + '/add', technicalPersonal, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "saveTechnicalPersonal",
        value: function saveTechnicalPersonal(technicalPersonal) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.put(localUrl + '/edit', technicalPersonal, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "deleteTechnicalPersonal",
        value: function deleteTechnicalPersonal(id) {
          return this.http["delete"](localUrl + '/delete/' + id);
        }
      }]);

      return TechPersonalService;
    }();

    TechPersonalService.ɵfac = function TechPersonalService_Factory(t) {
      return new (t || TechPersonalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TechPersonalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TechPersonalService,
      factory: TechPersonalService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechPersonalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/worker-my.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/worker-my.service.ts ***!
    \***********************************************/

  /*! exports provided: WorkerMyService */

  /***/
  function srcAppServicesWorkerMyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkerMyService", function () {
      return WorkerMyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var localUrl = 'http://localhost:8888/api/worker';

    var WorkerMyService = /*#__PURE__*/function () {
      function WorkerMyService(http) {
        _classCallCheck(this, WorkerMyService);

        this.http = http;
      }

      _createClass(WorkerMyService, [{
        key: "loadAllWorkers",
        value: function loadAllWorkers() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list', {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "loadWorkerById",
        value: function loadWorkerById(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list/' + id, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "createNewWorker",
        value: function createNewWorker(worker) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.post(localUrl + '/add', worker, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "saveWorker",
        value: function saveWorker(worker) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.put(localUrl + '/edit', worker, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "deleteWorker",
        value: function deleteWorker(id) {
          return this.http["delete"](localUrl + '/delete/' + id);
        }
      }]);

      return WorkerMyService;
    }();

    WorkerMyService.ɵfac = function WorkerMyService_Factory(t) {
      return new (t || WorkerMyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    WorkerMyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WorkerMyService,
      factory: WorkerMyService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkerMyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/workshop.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/workshop.service.ts ***!
    \**********************************************/

  /*! exports provided: WorkshopService */

  /***/
  function srcAppServicesWorkshopServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkshopService", function () {
      return WorkshopService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var localUrl = 'http://localhost:8888/api/workshop';

    var WorkshopService = /*#__PURE__*/function () {
      function WorkshopService(http) {
        _classCallCheck(this, WorkshopService);

        this.http = http;
      }

      _createClass(WorkshopService, [{
        key: "loadAllWorkshops",
        value: function loadAllWorkshops() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list', {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "loadWorkshopById",
        value: function loadWorkshopById(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.get(localUrl + '/list/' + id, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "createNewWorkshop",
        value: function createNewWorkshop(workshop) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.post(localUrl + '/add', workshop, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "saveWorkshop",
        value: function saveWorkshop(workshop) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
          return this.http.put(localUrl + '/edit', workshop, {
            headers: headers,
            responseType: 'json'
          });
        }
      }, {
        key: "deleteWorkshop",
        value: function deleteWorkshop(id) {
          return this.http["delete"](localUrl + '/delete/' + id);
        }
      }]);

      return WorkshopService;
    }();

    WorkshopService.ɵfac = function WorkshopService_Factory(t) {
      return new (t || WorkshopService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    WorkshopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WorkshopService,
      factory: WorkshopService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkshopService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 18,
      vars: 0,
      consts: [["mat-raised-button", "", "routerLink", "/areaView", "routerLinkActive", "router-active"], ["mat-raised-button", "", "routerLink", "/brigadeView", "routerLinkActive", "router-active"], ["mat-raised-button", "", "routerLink", "/equipmentView", "routerLinkActive", "router-active"], ["mat-raised-button", "", "routerLink", "/laboratoryView", "routerLinkActive", "router-active"], ["mat-raised-button", "", "routerLink", "/productView", "routerLinkActive", "router-active"], ["mat-raised-button", "", "routerLink", "/teamOfAreaBossView", "routerLinkActive", "router-active"], ["mat-raised-button", "", "routerLink", "/technicalPersonalView", "routerLinkActive", "router-active"], ["mat-raised-button", "", "routerLink", "/workerView", "routerLinkActive", "router-active"], ["mat-raised-button", "", "routerLink", "/workshopView", "routerLinkActive", "router-active"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Areas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Brigades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Equipments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Laboratories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Boss Teams");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tech Personals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Workers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Workshops");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["button[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n  border-color: #1976d2 !important;\r\n  background-color: paleturquoise;\r\n  height: 36px;\r\n  width: 180px;\r\n  margin-top: 20px;\r\n  margin-right: 40px;\r\n  margin-left: 40px;\r\n  font-size: 20px;\r\n}\r\n\r\napp-sidebar[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n.router-active[_ngcontent-%COMP%] {\r\n  background-color: #1976d2;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXR1cnF1b2lzZTtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuYXBwLXNpZGViYXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnJvdXRlci1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/team-of-area-boss-view/team-of-area-boss-view.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/team-of-area-boss-view/team-of-area-boss-view.component.ts ***!
    \****************************************************************************/

  /*! exports provided: TeamOfAreaBossViewComponent */

  /***/
  function srcAppTeamOfAreaBossViewTeamOfAreaBossViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamOfAreaBossViewComponent", function () {
      return TeamOfAreaBossViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_teamOfAreaBoss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/teamOfAreaBoss */
    "./src/app/model/teamOfAreaBoss.ts");
    /* harmony import */


    var _model_teamOfAreaBoss_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/teamOfAreaBoss-edit */
    "./src/app/model/teamOfAreaBoss-edit.ts");
    /* harmony import */


    var _model_select_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/select-data */
    "./src/app/model/select-data.ts");
    /* harmony import */


    var _select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../select-dialog-single/select-dialog-single.component */
    "./src/app/select-dialog-single/select-dialog-single.component.ts");
    /* harmony import */


    var _services_teamOfAreaBoss_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/teamOfAreaBoss.service */
    "./src/app/services/teamOfAreaBoss.service.ts");
    /* harmony import */


    var _services_area_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/area.service */
    "./src/app/services/area.service.ts");
    /* harmony import */


    var _services_techPersonalService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/techPersonalService */
    "./src/app/services/techPersonalService.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function TeamOfAreaBossViewComponent_mat_expansion_panel_3_ng_container_20_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Type:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamOfAreaBossViewComponent_mat_expansion_panel_3_ng_container_20_ng_container_1_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var techPersonal_r186 = ctx.$implicit;

          var team_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r187.deletePersonalEvent(team_r178, techPersonal_r186);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var techPersonal_r186 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](techPersonal_r186.techPersonalId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](techPersonal_r186.personalName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](techPersonal_r186.personalType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](techPersonal_r186.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](techPersonal_r186.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](techPersonal_r186.modified);
      }
    }

    function TeamOfAreaBossViewComponent_mat_expansion_panel_3_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamOfAreaBossViewComponent_mat_expansion_panel_3_ng_container_20_ng_container_1_Template, 36, 6, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var team_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", team_r178.technicalPersonals);
      }
    }

    function TeamOfAreaBossViewComponent_mat_expansion_panel_3_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Are not assigned");
      }
    }

    function TeamOfAreaBossViewComponent_mat_expansion_panel_3_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Area id:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamOfAreaBossViewComponent_mat_expansion_panel_3_div_24_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r193);

          var team_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r191.deleteAreaEvent(team_r178);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var team_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r178.area.areaId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r178.area.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r178.area.modified);
      }
    }

    function TeamOfAreaBossViewComponent_mat_expansion_panel_3_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Area is not assigned ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamOfAreaBossViewComponent_mat_expansion_panel_3_ng_template_25_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r197);

          var team_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r195.addAreaEvent(team_r178);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TeamOfAreaBossViewComponent_mat_expansion_panel_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function TeamOfAreaBossViewComponent_mat_expansion_panel_3_Template_mat_expansion_panel_closed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199);

          var team_r178 = ctx.$implicit;

          var ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r198.onAfterCollapse(team_r178);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "TechnicalPersonals:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamOfAreaBossViewComponent_mat_expansion_panel_3_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199);

          var team_r178 = ctx.$implicit;

          var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r200.addPersonalEvent(team_r178);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "add_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TeamOfAreaBossViewComponent_mat_expansion_panel_3_ng_container_20_Template, 2, 1, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TeamOfAreaBossViewComponent_mat_expansion_panel_3_ng_template_21_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TeamOfAreaBossViewComponent_mat_expansion_panel_3_div_24_Template, 22, 3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TeamOfAreaBossViewComponent_mat_expansion_panel_3_ng_template_25_Template, 4, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamOfAreaBossViewComponent_mat_expansion_panel_3_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199);

          var team_r178 = ctx.$implicit;

          var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r201.cancelTeam(team_r178);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamOfAreaBossViewComponent_mat_expansion_panel_3_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199);

          var team_r178 = ctx.$implicit;

          var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r202.saveTeam(team_r178);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamOfAreaBossViewComponent_mat_expansion_panel_3_Template_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199);

          var team_r178 = ctx.$implicit;

          var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r203.deleteTeam(team_r178);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var team_r178 = ctx.$implicit;

        var _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        var _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Team id: ", team_r178.teamId, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created at: ", team_r178.created, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r178.modified);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", team_r178.technicalPersonals !== undefined)("ngIfElse", _r180);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", team_r178.area !== undefined)("ngIfElse", _r183);
      }
    }

    var TeamOfAreaBossViewComponent = /*#__PURE__*/function () {
      function TeamOfAreaBossViewComponent(teamService, areaService, personalService, dialog) {
        _classCallCheck(this, TeamOfAreaBossViewComponent);

        this.teamService = teamService;
        this.areaService = areaService;
        this.personalService = personalService;
        this.dialog = dialog;
        this.teams = [];
        this.isDataChanged = false; //  Area values

        this.areaList = []; //  TechnicalPersonal values

        this.technicalPersonalList = [];
      }

      _createClass(TeamOfAreaBossViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllTeams();
        } // -------------------------------------
        // TeamOfAreaBoss methods
        // -------------------------------------

      }, {
        key: "loadAllTeams",
        value: function loadAllTeams() {
          var _this36 = this;

          this.teamService.loadAllTeams().subscribe(function (data) {
            _this36.teams = data;
            console.log(_this36.teams);
          });
        }
      }, {
        key: "createTeam",
        value: function createTeam() {
          var _this37 = this;

          var teamEdit = new _model_teamOfAreaBoss_edit__WEBPACK_IMPORTED_MODULE_2__["TeamOfAreaBossEdit"]();
          console.log('Create Team');
          this.teamService.createNewTeam(teamEdit).subscribe(function (data) {
            _this37.teams.push(data);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "saveTeam",
        value: function saveTeam(team) {
          var _this38 = this;

          if (this.isDataChanged) {
            console.log('Save Area id: ' + team.teamId);
            var teamEdit = new _model_teamOfAreaBoss_edit__WEBPACK_IMPORTED_MODULE_2__["TeamOfAreaBossEdit"]();
            teamEdit.update(team);
            this.teamService.saveTeam(teamEdit).subscribe(function (data) {
              var currentTeam = _this38.teams.find(function (value) {
                return value.teamId === team.teamId;
              });

              _model_teamOfAreaBoss__WEBPACK_IMPORTED_MODULE_1__["TeamOfAreaBoss"].updateTeam(currentTeam, data);

              _this38.isDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        }
      }, {
        key: "deleteTeam",
        value: function deleteTeam(team) {
          var _this39 = this;

          this.teamService.deleteTeam(team.teamId).subscribe(function (data) {
            _this39.teams = _this39.teams.filter(function (value) {
              return value.teamId !== team.teamId;
            });
            console.log('Team id: ' + team.teamId + ' is deleted');
            _this39.isDataChanged = false;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "cancelTeam",
        value: function cancelTeam(team) {
          console.log('Cancel Team id: ' + team.teamId);
          if (this.isDataChanged) this.onAfterCollapse(team);
        }
      }, {
        key: "onAfterCollapse",
        value: function onAfterCollapse(team) {
          var _this40 = this;

          console.log('OnAfterCollapse event, Team id: ' + team.teamId);

          if (this.isDataChanged) {
            console.log('The Team Data changed, clear changes for Team id: ' + team.teamId);
            this.teamService.loadTeamById(team.teamId).subscribe(function (data) {
              var currentTeam = _this40.teams.find(function (value) {
                return value.teamId === team.teamId;
              });

              _model_teamOfAreaBoss__WEBPACK_IMPORTED_MODULE_1__["TeamOfAreaBoss"].updateTeam(currentTeam, data);

              _this40.isDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        } // -------------------------------------
        // Area methods
        // -------------------------------------

      }, {
        key: "addAreaEvent",
        value: function addAreaEvent(team) {
          var _this41 = this;

          console.log('AddAreaEvent enter');
          this.areaService.loadAllAreas().subscribe(function (data) {
            _this41.areaList = data;
            var selectData = [];

            _this41.areaList.forEach(function (value) {
              var viewValue = 'Area id: ' + value.areaId;
              var disableValue = false;

              if (value.teamOfAreaBoss !== undefined) {
                disableValue = true;
                viewValue = viewValue + '  [ Team id: ' + value.teamOfAreaBoss.teamId + ' ]';
              }

              selectData.push(new _model_select_data__WEBPACK_IMPORTED_MODULE_3__["SelectDataImpl"](value.areaId, viewValue, disableValue));
            });

            _this41.openAreaDialog(team, selectData);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "openAreaDialog",
        value: function openAreaDialog(team, data) {
          var _this42 = this;

          console.log('Open Dialog for Team id: ' + team.teamId);
          var dialogRef = this.dialog.open(_select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_4__["SelectDialogSingleComponent"], {
            width: '350px',
            data: {
              "selectedDataList": data,
              "isMultiple": false
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed, selected value: ' + result);
            if (result === undefined || result.length === 0) return;
            var areaId = result[0];

            var area = _this42.areaList.find(function (value) {
              return value.areaId === areaId;
            });

            var currentTeam = _this42.teams.find(function (value) {
              return value.teamId === team.teamId;
            });

            currentTeam.area = area;

            _this42.dialog.ngOnDestroy(); // Update this.isAreaDataChanged value


            _this42.isDataChanged = true;
          });
        }
      }, {
        key: "deleteAreaEvent",
        value: function deleteAreaEvent(team) {
          console.log('DeleteAreaEvent, Team id: ' + team.teamId);
          var currentTeam = this.teams.find(function (value) {
            return value.teamId === team.teamId;
          });
          currentTeam.area = undefined; // Update this.isAreaDataChanged value

          this.isDataChanged = true;
        } // -------------------------------------
        // TechnicalPersonal methods
        // -------------------------------------

      }, {
        key: "addPersonalEvent",
        value: function addPersonalEvent(team) {
          var _this43 = this;

          console.log('AddPersonalEvent enter');
          this.personalService.loadAllTechnicalPersonals().subscribe(function (data) {
            _this43.technicalPersonalList = data;
            var selectData = [];

            _this43.technicalPersonalList.forEach(function (value) {
              var viewValue = 'Id: ' + value.techPersonalId + ', ' + value.personalName + ' - ' + value.personalType;
              var disableValue = false;
              if (value.teamOfAreaBoss !== undefined) disableValue = true;
              selectData.push(new _model_select_data__WEBPACK_IMPORTED_MODULE_3__["SelectDataImpl"](value.techPersonalId, viewValue, disableValue));
            });

            _this43.openPersonalDialog(team, selectData);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "openPersonalDialog",
        value: function openPersonalDialog(team, data) {
          var _this44 = this;

          console.log('Open Dialog for Team id: ' + team.teamId);
          var dialogRef = this.dialog.open(_select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_4__["SelectDialogSingleComponent"], {
            width: '550px',
            data: {
              "selectedDataList": data,
              "isMultiple": true
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed, selected value: ' + result);
            if (result === undefined || result.length === 0) return;

            var currentTeam = _this44.teams.find(function (value) {
              return value.teamId === team.teamId;
            });

            result.forEach(function (personalId) {
              var technicalPersonal = _this44.technicalPersonalList.find(function (value) {
                return value.techPersonalId === personalId;
              });

              if (currentTeam.technicalPersonals === undefined) currentTeam.technicalPersonals = [];
              currentTeam.technicalPersonals.push(technicalPersonal);
            });

            _this44.dialog.ngOnDestroy(); // Update this.isAreaDataChanged value


            _this44.isDataChanged = true;
          });
        }
      }, {
        key: "deletePersonalEvent",
        value: function deletePersonalEvent(team, personal) {
          console.log('DeleteAreaEvent, Team id: ' + team.teamId + ', personal id: ' + personal.techPersonalId);
          var currentTeam = this.teams.find(function (value) {
            return value.teamId === team.teamId;
          });
          if (currentTeam.technicalPersonals === undefined || currentTeam.technicalPersonals.length === 0) return;
          currentTeam.technicalPersonals = currentTeam.technicalPersonals.filter(function (value) {
            return value.techPersonalId !== personal.techPersonalId;
          }); // Update this.isAreaDataChanged value

          this.isDataChanged = true;
        }
      }]);

      return TeamOfAreaBossViewComponent;
    }();

    TeamOfAreaBossViewComponent.ɵfac = function TeamOfAreaBossViewComponent_Factory(t) {
      return new (t || TeamOfAreaBossViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_teamOfAreaBoss_service__WEBPACK_IMPORTED_MODULE_5__["TeamOfAreaBossService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_area_service__WEBPACK_IMPORTED_MODULE_6__["AreaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_techPersonalService__WEBPACK_IMPORTED_MODULE_7__["TechPersonalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]));
    };

    TeamOfAreaBossViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamOfAreaBossViewComponent,
      selectors: [["app-team-of-area-boss-view"]],
      decls: 4,
      vars: 1,
      consts: [["mat-raised-button", "", 1, "add-item-button", 3, "click"], [3, "closed", 4, "ngFor", "ngForOf"], [3, "closed"], ["fxLayout", "row", "fxLayoutAlign", "start", 1, "item-description"], ["mat-icon-button", "", "color", "primary", 1, "add-component-button", 3, "click"], [4, "ngIf", "ngIfElse"], ["elsePersonalBlock", ""], ["elseAreaBlock", ""], ["fxLayout", "row", "fxLayoutAlign", "end", 1, "item-description"], ["mat-raised-button", "", 3, "click"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "item-description"], ["mat-icon-button", "", "color", "primary", 3, "click"]],
      template: function TeamOfAreaBossViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamOfAreaBossViewComponent_Template_button_click_0_listener() {
            return ctx.createTeam();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamOfAreaBossViewComponent_mat_expansion_panel_3_Template, 35, 7, "mat-expansion-panel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teams);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]],
      styles: [".add-item-button[_ngcontent-%COMP%] {\r\n   margin-bottom: 20px;\r\n }\r\n\r\n.add-component-button[_ngcontent-%COMP%] {\r\n  margin-left: 6px;\r\n}\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n  min-width: 600px;\r\n}\r\n\r\n.item-description[_ngcontent-%COMP%] {\r\n  margin-top: 2px;\r\n}\r\n\r\n.item-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.item-description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\nmat-divider[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n}\r\n\r\n.mat-icon-button[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 0;\r\n  width: 20px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n  line-height: 20px;\r\n}\r\n\r\n.add-select-part[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1vZi1hcmVhLWJvc3Mtdmlldy90ZWFtLW9mLWFyZWEtYm9zcy12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxtQkFBbUI7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdGVhbS1vZi1hcmVhLWJvc3Mtdmlldy90ZWFtLW9mLWFyZWEtYm9zcy12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWl0ZW0tYnV0dG9uIHtcclxuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuIH1cclxuXHJcbi5hZGQtY29tcG9uZW50LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIG1pbi13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5pdGVtLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5pdGVtLWRlc2NyaXB0aW9uIGRpdiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLml0ZW0tZGVzY3JpcHRpb24gYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxubWF0LWRpdmlkZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRlci1pY29uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucGFuZWwtaGVhZGVyLWljb24tYnV0dG9uIC5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ubWF0LWljb24tYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1pbi13aWR0aDogMDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5hZGQtc2VsZWN0LXBhcnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamOfAreaBossViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team-of-area-boss-view',
          templateUrl: './team-of-area-boss-view.component.html',
          styleUrls: ['./team-of-area-boss-view.component.css']
        }]
      }], function () {
        return [{
          type: _services_teamOfAreaBoss_service__WEBPACK_IMPORTED_MODULE_5__["TeamOfAreaBossService"]
        }, {
          type: _services_area_service__WEBPACK_IMPORTED_MODULE_6__["AreaService"]
        }, {
          type: _services_techPersonalService__WEBPACK_IMPORTED_MODULE_7__["TechPersonalService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/technical-personal-view/technical-personal-view.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/technical-personal-view/technical-personal-view.component.ts ***!
    \******************************************************************************/

  /*! exports provided: TechnicalPersonalViewComponent */

  /***/
  function srcAppTechnicalPersonalViewTechnicalPersonalViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechnicalPersonalViewComponent", function () {
      return TechnicalPersonalViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_technicalPersonal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/technicalPersonal */
    "./src/app/model/technicalPersonal.ts");
    /* harmony import */


    var _model_technicalPersonal_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/technicalPersonal-edit */
    "./src/app/model/technicalPersonal-edit.ts");
    /* harmony import */


    var _services_techPersonalService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/techPersonalService */
    "./src/app/services/techPersonalService.ts");
    /* harmony import */


    var _services_teamOfAreaBoss_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/teamOfAreaBoss.service */
    "./src/app/services/teamOfAreaBoss.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function TechnicalPersonalViewComponent_mat_expansion_panel_3_mat_option_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r207 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r207.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r207.viewValue, " ");
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Personal id: NEW ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add new Technical Personal ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TechnicalPersonalViewComponent_mat_expansion_panel_3_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209);

          var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r208.newName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function TechnicalPersonalViewComponent_mat_expansion_panel_3_Template_mat_select_selectionChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209);

          var ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r210.onTypeChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TechnicalPersonalViewComponent_mat_expansion_panel_3_mat_option_16_Template, 2, 2, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TechnicalPersonalViewComponent_mat_expansion_panel_3_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209);

          var ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r211.newDescription = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnicalPersonalViewComponent_mat_expansion_panel_3_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209);

          var ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r212.createTechnicalPersonal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnicalPersonalViewComponent_mat_expansion_panel_3_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209);

          var ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r213.addPersonalEvent = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r204.newName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r204.types);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r204.newDescription);
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var personal_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](personal_r214.description);
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Description:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_14_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r228);

          var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r227.newDescription = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r216.newDescription);
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var personal_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](personal_r214.personalName);
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_20_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_20_div_2_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r233);

          var ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r232.newName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r230.newName);
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TechnicalPersonalViewComponent_mat_expansion_panel_4_div_20_div_1_Template, 5, 1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TechnicalPersonalViewComponent_mat_expansion_panel_4_div_20_div_2_Template, 5, 1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r217.editPersonalEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r217.editPersonalEvent);
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Name is not assigned");
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_23_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var personal_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](personal_r214.personalType);
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_23_div_2_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r238 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r238.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r238.viewValue, " ");
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_23_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_23_div_2_Template_mat_select_selectionChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r240);

          var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r239.onTypeChange($event);
        })("valueChange", function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_23_div_2_Template_mat_select_valueChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r240);

          var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r241.selectedType.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TechnicalPersonalViewComponent_mat_expansion_panel_4_div_23_div_2_mat_option_5_Template, 2, 2, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r235.selectedType.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r235.types);
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TechnicalPersonalViewComponent_mat_expansion_panel_4_div_23_div_1_Template, 5, 1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TechnicalPersonalViewComponent_mat_expansion_panel_4_div_23_div_2_Template, 6, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r220.editPersonalEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r220.editPersonalEvent);
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Type is not assigned");
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Team id:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var personal_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](personal_r214.teamOfAreaBoss.teamId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](personal_r214.teamOfAreaBoss.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](personal_r214.teamOfAreaBoss.modified);
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Team is not assigned");
      }
    }

    function TechnicalPersonalViewComponent_mat_expansion_panel_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function TechnicalPersonalViewComponent_mat_expansion_panel_4_Template_mat_expansion_panel_closed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244);

          var personal_r214 = ctx.$implicit;

          var ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r243.onAfterCollapse(personal_r214);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TechnicalPersonalViewComponent_mat_expansion_panel_4_div_13_Template, 5, 1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TechnicalPersonalViewComponent_mat_expansion_panel_4_div_14_Template, 5, 1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnicalPersonalViewComponent_mat_expansion_panel_4_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244);

          var personal_r214 = ctx.$implicit;

          var ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r245.editTechnicalPersonal(personal_r214);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TechnicalPersonalViewComponent_mat_expansion_panel_4_div_20_Template, 3, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TechnicalPersonalViewComponent_mat_expansion_panel_4_ng_template_21_Template, 1, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TechnicalPersonalViewComponent_mat_expansion_panel_4_div_23_Template, 3, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TechnicalPersonalViewComponent_mat_expansion_panel_4_ng_template_24_Template, 1, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TechnicalPersonalViewComponent_mat_expansion_panel_4_div_27_Template, 19, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TechnicalPersonalViewComponent_mat_expansion_panel_4_ng_template_28_Template, 1, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnicalPersonalViewComponent_mat_expansion_panel_4_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244);

          var personal_r214 = ctx.$implicit;

          var ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r246.cancelPersonal(personal_r214);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnicalPersonalViewComponent_mat_expansion_panel_4_Template_button_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244);

          var personal_r214 = ctx.$implicit;

          var ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r247.savePersonal(personal_r214);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnicalPersonalViewComponent_mat_expansion_panel_4_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244);

          var personal_r214 = ctx.$implicit;

          var ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r248.deletePersonal(personal_r214);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var personal_r214 = ctx.$implicit;

        var _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        var _r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

        var _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

        var ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Personal id: ", personal_r214.techPersonalId, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created at: ", personal_r214.created, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](personal_r214.modified);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r205.editPersonalEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r205.editPersonalEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", personal_r214.personalName !== undefined)("ngIfElse", _r218);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", personal_r214.personalType !== undefined)("ngIfElse", _r221);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", personal_r214.teamOfAreaBoss !== undefined)("ngIfElse", _r224);
      }
    }

    var TechnicalPersonalViewComponent = /*#__PURE__*/function () {
      function TechnicalPersonalViewComponent(techService, teamService, dialog) {
        _classCallCheck(this, TechnicalPersonalViewComponent);

        this.techService = techService;
        this.teamService = teamService;
        this.dialog = dialog;
        this.types = [{
          value: '0',
          viewValue: 'ENGINEER'
        }, {
          value: '1',
          viewValue: 'TECHNOLOG'
        }, {
          value: '2',
          viewValue: 'TECHNIC'
        }, {
          value: '3',
          viewValue: 'TEAM_OF_AREA_BOSS'
        }, {
          value: '4',
          viewValue: 'WORKSHOP_BOSS'
        }, {
          value: '5',
          viewValue: 'MASTER'
        }];
        this.personals = [];
        this.newType = null;
        this.newName = '';
        this.newDescription = '';
        this.isDataChanged = false;
        this.addPersonalEvent = false;
        this.editPersonalEvent = false;
        this.selectedType = null; // For TeamOfAreaBoss

        this.teams = [];
      }

      _createClass(TechnicalPersonalViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllTechnicalPersonals();
        } // -------------------------------------
        // TechnicalPersonal methods
        // -------------------------------------

      }, {
        key: "loadAllTechnicalPersonals",
        value: function loadAllTechnicalPersonals() {
          var _this45 = this;

          this.techService.loadAllTechnicalPersonals().subscribe(function (data) {
            _this45.personals = data;
            console.log(_this45.personals);
          });
        }
      }, {
        key: "addTechnicalPersonal",
        value: function addTechnicalPersonal() {
          this.addPersonalEvent = true;
          console.log('Add TechnicalPersonal event');
        }
      }, {
        key: "editTechnicalPersonal",
        value: function editTechnicalPersonal(personal) {
          console.log('Edit TechnicalPersonal event id: ' + personal.techPersonalId);
          this.newName = personal.personalName;
          this.newType = personal.personalType;
          this.newDescription = personal.description;
          this.setSelectedTypeValue(personal.personalType);
          this.editPersonalEvent = true;
          this.isDataChanged = true;
        }
      }, {
        key: "onTypeChange",
        value: function onTypeChange(event) {
          this.newType = event.value;
          console.log('This New type ' + _model_technicalPersonal__WEBPACK_IMPORTED_MODULE_1__["TechPersonalType"][this.newType]);
        }
      }, {
        key: "createTechnicalPersonal",
        value: function createTechnicalPersonal() {
          var _this46 = this;

          var techPersonalEdit = new _model_technicalPersonal_edit__WEBPACK_IMPORTED_MODULE_2__["TechnicalPersonalEdit"]();
          techPersonalEdit.name = this.newName;
          techPersonalEdit.description = this.newDescription;
          techPersonalEdit.type = _model_technicalPersonal__WEBPACK_IMPORTED_MODULE_1__["TechPersonalType"][this.newType];
          this.techService.createNewTechnicalPersonal(techPersonalEdit).subscribe(function (data) {
            _this46.personals.push(data);
          }, function (error) {
            return console.log(error);
          });
          this.clearEditValues();
          this.addPersonalEvent = false;
        }
      }, {
        key: "deletePersonal",
        value: function deletePersonal(techPersonal) {
          var _this47 = this;

          this.techService.deleteTechnicalPersonal(techPersonal.techPersonalId).subscribe(function (data) {
            _this47.personals = _this47.personals.filter(function (value) {
              return value.techPersonalId !== techPersonal.techPersonalId;
            });
            console.log('TechnicalPersonal id: ' + techPersonal.techPersonalId + ' is deleted');

            _this47.clearEditValues();
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "savePersonal",
        value: function savePersonal(techPersonal) {
          var _this48 = this;

          if (this.isDataChanged) {
            console.log('Save TechnicalPersonal id: ' + techPersonal.techPersonalId);
            var personalEdit = new _model_technicalPersonal_edit__WEBPACK_IMPORTED_MODULE_2__["TechnicalPersonalEdit"]();
            personalEdit.name = this.newName;
            personalEdit.type = _model_technicalPersonal__WEBPACK_IMPORTED_MODULE_1__["TechPersonalType"][this.newType];
            personalEdit.description = this.newDescription;
            personalEdit.techPersonalId = techPersonal.techPersonalId;
            if (techPersonal.teamOfAreaBoss) personalEdit.teamOfAreaBossId = techPersonal.teamOfAreaBoss.teamId;
            this.techService.saveTechnicalPersonal(personalEdit).subscribe(function (data) {
              var currentPersonal = _this48.personals.find(function (value) {
                return value.techPersonalId === techPersonal.techPersonalId;
              });

              _model_technicalPersonal__WEBPACK_IMPORTED_MODULE_1__["TechnicalPersonal"].update(currentPersonal, data);

              _this48.clearEditValues();

              _this48.isDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        }
      }, {
        key: "cancelPersonal",
        value: function cancelPersonal(techPersonal) {
          console.log('Cancel Personal id: ' + techPersonal.techPersonalId);
          if (this.isDataChanged) this.onAfterCollapse(techPersonal);
        }
      }, {
        key: "onAfterCollapse",
        value: function onAfterCollapse(techPersonal) {
          var _this49 = this;

          console.log('OnAfterCollapse event, Personal id: ' + techPersonal.techPersonalId);

          if (this.isDataChanged) {
            console.log('The Personal Data changed, clear changes for Team id: ' + techPersonal.techPersonalId);
            this.techService.loadTechnicalPersonalById(techPersonal.techPersonalId).subscribe(function (data) {
              var currentPersonal = _this49.personals.find(function (value) {
                return value.techPersonalId === techPersonal.techPersonalId;
              });

              _model_technicalPersonal__WEBPACK_IMPORTED_MODULE_1__["TechnicalPersonal"].update(currentPersonal, data);

              _this49.clearEditValues(); // Update isDataChanged value top false


              _this49.isDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        }
      }, {
        key: "clearEditValues",
        value: function clearEditValues() {
          this.newName = '';
          this.newType = null;
          this.newDescription = '';
          this.editPersonalEvent = false;
        }
      }, {
        key: "setSelectedTypeValue",
        value: function setSelectedTypeValue(type) {
          this.selectedType = {
            value: _model_technicalPersonal__WEBPACK_IMPORTED_MODULE_1__["TechPersonalType"][type].toString(),
            viewValue: type.toString()
          };
        }
      }]);

      return TechnicalPersonalViewComponent;
    }();

    TechnicalPersonalViewComponent.ɵfac = function TechnicalPersonalViewComponent_Factory(t) {
      return new (t || TechnicalPersonalViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_techPersonalService__WEBPACK_IMPORTED_MODULE_3__["TechPersonalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_teamOfAreaBoss_service__WEBPACK_IMPORTED_MODULE_4__["TeamOfAreaBossService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    TechnicalPersonalViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TechnicalPersonalViewComponent,
      selectors: [["app-technical-personal"]],
      decls: 5,
      vars: 2,
      consts: [["mat-raised-button", "", 1, "add-personal-button", 3, "click"], ["expanded", "true", 4, "ngIf"], [3, "closed", 4, "ngFor", "ngForOf"], ["expanded", "true"], [1, "item-description"], ["fxLayout", "row", "fxLayoutAlign", "start"], [1, "personal-add-panel-form"], ["matInput", "", "placeholder", "Personal Name", 3, "ngModel", "ngModelChange"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Description", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "end", 1, "personal-description"], ["mat-raised-button", "", 3, "click"], [3, "value"], [3, "closed"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "personal-description"], [4, "ngIf"], ["mat-icon-button", "", "color", "primary", 1, "add-component-button", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start", 1, "personal-description"], [4, "ngIf", "ngIfElse"], ["elseNameBlock", ""], ["elseTypeBlock", ""], ["elseTeamBlock", ""], [3, "value", "selectionChange", "valueChange"]],
      template: function TechnicalPersonalViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnicalPersonalViewComponent_Template_button_click_0_listener() {
            return ctx.addTechnicalPersonal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TechnicalPersonalViewComponent_mat_expansion_panel_3_Template, 27, 3, "mat-expansion-panel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TechnicalPersonalViewComponent_mat_expansion_panel_4_Template, 38, 11, "mat-expansion-panel", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addPersonalEvent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.personals);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"]],
      styles: [".personal-description[_ngcontent-%COMP%] {\r\n  margin-top: 2px;\r\n}\r\n\r\n.personal-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.personal-description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\nmat-divider[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.item-description[_ngcontent-%COMP%]   .personal-add-panel-form[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n}\r\n\r\n.add-personal-button[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.add-component-button[_ngcontent-%COMP%] {\r\n  margin-left: 6px;\r\n}\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n  min-width: 600px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n}\r\n\r\n.mat-icon-button[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 0;\r\n  width: 20px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n  line-height: 20px;\r\n}\r\n\r\n.add-select-part[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVjaG5pY2FsLXBlcnNvbmFsLXZpZXcvdGVjaG5pY2FsLXBlcnNvbmFsLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC90ZWNobmljYWwtcGVyc29uYWwtdmlldy90ZWNobmljYWwtcGVyc29uYWwtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcnNvbmFsLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1kZXNjcmlwdGlvbiBkaXYge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1kZXNjcmlwdGlvbiBidXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5tYXQtZGl2aWRlciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaXRlbS1kZXNjcmlwdGlvbiAucGVyc29uYWwtYWRkLXBhbmVsLWZvcm0ge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmFkZC1wZXJzb25hbC1idXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5hZGQtY29tcG9uZW50LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIG1pbi13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkZXItaWNvbi1idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRlci1pY29uLWJ1dHRvbiAubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYWRkLXNlbGVjdC1wYXJ0IHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechnicalPersonalViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-technical-personal',
          templateUrl: './technical-personal-view.component.html',
          styleUrls: ['./technical-personal-view.component.css']
        }]
      }], function () {
        return [{
          type: _services_techPersonalService__WEBPACK_IMPORTED_MODULE_3__["TechPersonalService"]
        }, {
          type: _services_teamOfAreaBoss_service__WEBPACK_IMPORTED_MODULE_4__["TeamOfAreaBossService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/toolbar/toolbar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/toolbar/toolbar.component.ts ***!
    \**********************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ToolbarComponent = /*#__PURE__*/function () {
      function ToolbarComponent() {
        _classCallCheck(this, ToolbarComponent);
      }

      _createClass(ToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
      return new (t || ToolbarComponent)();
    };

    ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["app-toolbar"]],
      decls: 5,
      vars: 0,
      consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".toolbar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 0 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRvb2xiYXIgaW1nIHtcclxuICBtYXJnaW46IDAgMTZweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toolbar',
          templateUrl: './toolbar.component.html',
          styleUrls: ['./toolbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/worker-my-view/worker-my-view.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/worker-my-view/worker-my-view.component.ts ***!
    \************************************************************/

  /*! exports provided: WorkerMyViewComponent */

  /***/
  function srcAppWorkerMyViewWorkerMyViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkerMyViewComponent", function () {
      return WorkerMyViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_worker_my__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/worker-my */
    "./src/app/model/worker-my.ts");
    /* harmony import */


    var _model_worker_my_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/worker-my-edit */
    "./src/app/model/worker-my-edit.ts");
    /* harmony import */


    var _services_worker_my_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/worker-my.service */
    "./src/app/services/worker-my.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function WorkerMyViewComponent_mat_expansion_panel_3_mat_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r252 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r252.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r252.viewValue, " ");
      }
    }

    function WorkerMyViewComponent_mat_expansion_panel_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Worker id: NEW ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add new Worker ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorkerMyViewComponent_mat_expansion_panel_3_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r254);

          var ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r253.newName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function WorkerMyViewComponent_mat_expansion_panel_3_Template_mat_select_selectionChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r254);

          var ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r255.onTypeChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WorkerMyViewComponent_mat_expansion_panel_3_mat_option_15_Template, 2, 2, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkerMyViewComponent_mat_expansion_panel_3_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r254);

          var ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r256.createWorker();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkerMyViewComponent_mat_expansion_panel_3_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r254);

          var ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r257.addWorkerEvent = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r249.newName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r249.types);
      }
    }

    function WorkerMyViewComponent_mat_expansion_panel_4_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var worker_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](worker_r258.name);
      }
    }

    function WorkerMyViewComponent_mat_expansion_panel_4_div_17_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorkerMyViewComponent_mat_expansion_panel_4_div_17_div_2_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r272);

          var ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r271.newName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r269.newName);
      }
    }

    function WorkerMyViewComponent_mat_expansion_panel_4_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkerMyViewComponent_mat_expansion_panel_4_div_17_div_1_Template, 5, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkerMyViewComponent_mat_expansion_panel_4_div_17_div_2_Template, 5, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r259.editWorkerEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r259.editWorkerEvent);
      }
    }

    function WorkerMyViewComponent_mat_expansion_panel_4_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Name is not assigned");
      }
    }

    function WorkerMyViewComponent_mat_expansion_panel_4_div_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var worker_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](worker_r258.type);
      }
    }

    function WorkerMyViewComponent_mat_expansion_panel_4_div_20_div_2_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r277 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r277.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r277.viewValue, " ");
      }
    }

    function WorkerMyViewComponent_mat_expansion_panel_4_div_20_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function WorkerMyViewComponent_mat_expansion_panel_4_div_20_div_2_Template_mat_select_selectionChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279);

          var ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r278.onTypeChange($event);
        })("valueChange", function WorkerMyViewComponent_mat_expansion_panel_4_div_20_div_2_Template_mat_select_valueChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279);

          var ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r280.selectedType.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WorkerMyViewComponent_mat_expansion_panel_4_div_20_div_2_mat_option_5_Template, 2, 2, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r274.selectedType.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r274.types);
      }
    }

    function WorkerMyViewComponent_mat_expansion_panel_4_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkerMyViewComponent_mat_expansion_panel_4_div_20_div_1_Template, 5, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkerMyViewComponent_mat_expansion_panel_4_div_20_div_2_Template, 6, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r262.editWorkerEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r262.editWorkerEvent);
      }
    }

    function WorkerMyViewComponent_mat_expansion_panel_4_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Type is not assigned");
      }
    }

    function WorkerMyViewComponent_mat_expansion_panel_4_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Brigade id:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var worker_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](worker_r258.brigade.brigadeId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](worker_r258.brigade.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](worker_r258.brigade.modified);
      }
    }

    function WorkerMyViewComponent_mat_expansion_panel_4_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Brigade is not assigned");
      }
    }

    function WorkerMyViewComponent_mat_expansion_panel_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function WorkerMyViewComponent_mat_expansion_panel_4_Template_mat_expansion_panel_closed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283);

          var worker_r258 = ctx.$implicit;

          var ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r282.onAfterCollapse(worker_r258);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkerMyViewComponent_mat_expansion_panel_4_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283);

          var worker_r258 = ctx.$implicit;

          var ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r284.editWorker(worker_r258);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WorkerMyViewComponent_mat_expansion_panel_4_div_17_Template, 3, 2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WorkerMyViewComponent_mat_expansion_panel_4_ng_template_18_Template, 1, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WorkerMyViewComponent_mat_expansion_panel_4_div_20_Template, 3, 2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WorkerMyViewComponent_mat_expansion_panel_4_ng_template_21_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, WorkerMyViewComponent_mat_expansion_panel_4_div_24_Template, 19, 3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WorkerMyViewComponent_mat_expansion_panel_4_ng_template_25_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkerMyViewComponent_mat_expansion_panel_4_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283);

          var worker_r258 = ctx.$implicit;

          var ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r285.cancelWorker(worker_r258);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkerMyViewComponent_mat_expansion_panel_4_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283);

          var worker_r258 = ctx.$implicit;

          var ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r286.saveWorker(worker_r258);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkerMyViewComponent_mat_expansion_panel_4_Template_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283);

          var worker_r258 = ctx.$implicit;

          var ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r287.deleteWorker(worker_r258);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var worker_r258 = ctx.$implicit;

        var _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        var _r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        var _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Worker id: ", worker_r258.workerId, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created at: ", worker_r258.created, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](worker_r258.modified);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", worker_r258.name !== undefined)("ngIfElse", _r260);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", worker_r258.type !== undefined)("ngIfElse", _r263);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", worker_r258.brigade !== undefined)("ngIfElse", _r266);
      }
    }

    var WorkerMyViewComponent = /*#__PURE__*/function () {
      function WorkerMyViewComponent(workerService) {
        _classCallCheck(this, WorkerMyViewComponent);

        this.workerService = workerService;
        this.types = [{
          value: '0',
          viewValue: 'SBORSCHIK'
        }, {
          value: '1',
          viewValue: 'TOKAR'
        }, {
          value: '2',
          viewValue: 'SVARSCHIK'
        }, {
          value: '3',
          viewValue: 'SLUSAR'
        }, {
          value: '4',
          viewValue: 'BRIGADIER'
        }];
        this.workers = [];
        this.newType = null;
        this.newName = '';
        this.addWorkerEvent = false;
        this.editWorkerEvent = false;
        this.selectedType = null;
        this.isDataChanged = false;
      }

      _createClass(WorkerMyViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllWorkers();
        } // -------------------------------------
        // Worker methods
        // -------------------------------------

      }, {
        key: "loadAllWorkers",
        value: function loadAllWorkers() {
          var _this50 = this;

          this.workerService.loadAllWorkers().subscribe(function (data) {
            _this50.workers = data;
            console.log(_this50.workers);
          });
        }
      }, {
        key: "addWorker",
        value: function addWorker() {
          this.addWorkerEvent = true;
          console.log('Add worker event');
        }
      }, {
        key: "editWorker",
        value: function editWorker(worker) {
          console.log('Edit Worker event id: ' + worker.workerId);
          this.newName = worker.name;
          this.newType = worker.type;
          this.setSelectedTypeValue(worker.type);
          this.editWorkerEvent = true;
          this.isDataChanged = true;
        }
      }, {
        key: "onTypeChange",
        value: function onTypeChange(event) {
          this.newType = event.value;
          console.log('This New type ' + _model_worker_my__WEBPACK_IMPORTED_MODULE_1__["WorkerMyType"][this.newType]);
        }
      }, {
        key: "createWorker",
        value: function createWorker() {
          var _this51 = this;

          var workerEdit = new _model_worker_my_edit__WEBPACK_IMPORTED_MODULE_2__["WorkerMyEdit"]();
          workerEdit.name = this.newName;
          workerEdit.type = _model_worker_my__WEBPACK_IMPORTED_MODULE_1__["WorkerMyType"][this.newType];
          this.workerService.createNewWorker(workerEdit).subscribe(function (data) {
            _this51.workers.push(data);
          }, function (error) {
            return console.log(error);
          });
          this.clearEditValues();
          this.addWorkerEvent = false;
        }
      }, {
        key: "deleteWorker",
        value: function deleteWorker(worker) {
          var _this52 = this;

          this.workerService.deleteWorker(worker.workerId).subscribe(function (data) {
            _this52.workers = _this52.workers.filter(function (value) {
              return value.workerId !== worker.workerId;
            });
            console.log('Worker id: ' + worker.workerId + ' is deleted');

            _this52.clearEditValues();
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "saveWorker",
        value: function saveWorker(worker) {
          var _this53 = this;

          if (this.isDataChanged) {
            console.log('Save Worker id: ' + worker.workerId);
            var workerEdit = new _model_worker_my_edit__WEBPACK_IMPORTED_MODULE_2__["WorkerMyEdit"]();
            workerEdit.name = this.newName;
            workerEdit.type = _model_worker_my__WEBPACK_IMPORTED_MODULE_1__["WorkerMyType"][this.newType];
            workerEdit.workerId = worker.workerId;
            if (worker.brigade) workerEdit.brigadeId = worker.brigade.brigadeId;
            this.workerService.saveWorker(workerEdit).subscribe(function (data) {
              var currentWorker = _this53.workers.find(function (value) {
                return value.workerId === worker.workerId;
              });

              _model_worker_my__WEBPACK_IMPORTED_MODULE_1__["WorkerMy"].update(currentWorker, data);

              _this53.clearEditValues();

              _this53.isDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        }
      }, {
        key: "cancelWorker",
        value: function cancelWorker(worker) {
          console.log('Cancel Worker id: ' + worker.workerId);
          if (this.isDataChanged) this.onAfterCollapse(worker);
        }
      }, {
        key: "onAfterCollapse",
        value: function onAfterCollapse(worker) {
          var _this54 = this;

          console.log('OnAfterCollapse event, Worker id: ' + worker.workerId);

          if (this.isDataChanged) {
            console.log('The Worker Data changed, clear changes for Worker id: ' + worker.workerId);
            this.workerService.loadWorkerById(worker.workerId).subscribe(function (data) {
              var currentWorker = _this54.workers.find(function (value) {
                return value.workerId === worker.workerId;
              });

              _model_worker_my__WEBPACK_IMPORTED_MODULE_1__["WorkerMy"].update(currentWorker, data);

              _this54.clearEditValues(); // Update isDataChanged value top false


              _this54.isDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        }
      }, {
        key: "clearEditValues",
        value: function clearEditValues() {
          this.newName = '';
          this.newType = null;
          this.editWorkerEvent = false;
        }
      }, {
        key: "setSelectedTypeValue",
        value: function setSelectedTypeValue(type) {
          this.selectedType = {
            value: _model_worker_my__WEBPACK_IMPORTED_MODULE_1__["WorkerMyType"][type].toString(),
            viewValue: type.toString()
          };
        }
      }]);

      return WorkerMyViewComponent;
    }();

    WorkerMyViewComponent.ɵfac = function WorkerMyViewComponent_Factory(t) {
      return new (t || WorkerMyViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_worker_my_service__WEBPACK_IMPORTED_MODULE_3__["WorkerMyService"]));
    };

    WorkerMyViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkerMyViewComponent,
      selectors: [["app-worker-my-view"]],
      decls: 5,
      vars: 2,
      consts: [["mat-raised-button", "", 1, "add-worker-button", 3, "click"], ["expanded", "true", 4, "ngIf"], [3, "closed", 4, "ngFor", "ngForOf"], ["expanded", "true"], ["fxLayout", "row", "fxLayoutAlign", "start", 1, "worker-description"], [1, "worker-add-panel-form"], ["matInput", "", "placeholder", "Worker Name", 3, "ngModel", "ngModelChange"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "end", 1, "worker-description"], ["mat-raised-button", "", 3, "click"], [3, "value"], [3, "closed"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "worker-description"], ["mat-icon-button", "", "color", "primary", 1, "add-component-button", 3, "click"], [4, "ngIf", "ngIfElse"], ["elseNameBlock", ""], ["elseTypeBlock", ""], ["elseBrigadeBlock", ""], [4, "ngIf"], [3, "value", "selectionChange", "valueChange"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "worker-description"]],
      template: function WorkerMyViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkerMyViewComponent_Template_button_click_0_listener() {
            return ctx.addWorker();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkerMyViewComponent_mat_expansion_panel_3_Template, 22, 2, "mat-expansion-panel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkerMyViewComponent_mat_expansion_panel_4_Template, 35, 9, "mat-expansion-panel", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addWorkerEvent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workers);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"]],
      styles: [".add-worker-button[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.add-component-button[_ngcontent-%COMP%] {\r\n  margin-left: 6px;\r\n}\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n  min-width: 600px;\r\n}\r\n\r\n.worker-description[_ngcontent-%COMP%] {\r\n  margin-top: 2px;\r\n}\r\n\r\n.worker-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.worker-description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\nmat-divider[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n}\r\n\r\n.mat-icon-button[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 0;\r\n  width: 20px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n  line-height: 20px;\r\n}\r\n\r\n.worker-add-panel-form[_ngcontent-%COMP%] {\r\n  margin-right: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya2VyLW15LXZpZXcvd29ya2VyLW15LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC93b3JrZXItbXktdmlldy93b3JrZXItbXktdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC13b3JrZXItYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYWRkLWNvbXBvbmVudC1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBtaW4td2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4ud29ya2VyLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi53b3JrZXItZGVzY3JpcHRpb24gZGl2IHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4ud29ya2VyLWRlc2NyaXB0aW9uIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1kaXZpZGVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkZXItaWNvbi1idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRlci1pY29uLWJ1dHRvbiAubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ud29ya2VyLWFkZC1wYW5lbC1mb3JtIHtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkerMyViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-worker-my-view',
          templateUrl: './worker-my-view.component.html',
          styleUrls: ['./worker-my-view.component.css']
        }]
      }], function () {
        return [{
          type: _services_worker_my_service__WEBPACK_IMPORTED_MODULE_3__["WorkerMyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/workshop-view/workshop-view.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/workshop-view/workshop-view.component.ts ***!
    \**********************************************************/

  /*! exports provided: WorkshopViewComponent */

  /***/
  function srcAppWorkshopViewWorkshopViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkshopViewComponent", function () {
      return WorkshopViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_workshop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/workshop */
    "./src/app/model/workshop.ts");
    /* harmony import */


    var _model_workshop_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/workshop-edit */
    "./src/app/model/workshop-edit.ts");
    /* harmony import */


    var _model_select_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/select-data */
    "./src/app/model/select-data.ts");
    /* harmony import */


    var _select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../select-dialog-single/select-dialog-single.component */
    "./src/app/select-dialog-single/select-dialog-single.component.ts");
    /* harmony import */


    var _services_workshop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/workshop.service */
    "./src/app/services/workshop.service.ts");
    /* harmony import */


    var _services_area_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/area.service */
    "./src/app/services/area.service.ts");
    /* harmony import */


    var _services_laboratory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/laboratory.service */
    "./src/app/services/laboratory.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function WorkshopViewComponent_mat_expansion_panel_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Workshop id: NEW ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add new Workshop ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Definition:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorkshopViewComponent_mat_expansion_panel_3_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292);

          var ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r291.newDefinition = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkshopViewComponent_mat_expansion_panel_3_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292);

          var _r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r293.createWorkshop(_r290);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkshopViewComponent_mat_expansion_panel_3_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292);

          var ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r294.addWorkshopEvent = false;
          return ctx_r294.newDefinition = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r288.newDefinition);
      }
    }

    function WorkshopViewComponent_mat_expansion_panel_4_ng_container_25_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Definition:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkshopViewComponent_mat_expansion_panel_4_ng_container_25_ng_container_1_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r306);

          var area_r303 = ctx.$implicit;

          var workshop_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r304.deleteAreaEvent(workshop_r295, area_r303);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var area_r303 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r303.areaId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r303.definition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r303.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r303.modified);
      }
    }

    function WorkshopViewComponent_mat_expansion_panel_4_ng_container_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkshopViewComponent_mat_expansion_panel_4_ng_container_25_ng_container_1_Template, 26, 4, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var workshop_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", workshop_r295.areas);
      }
    }

    function WorkshopViewComponent_mat_expansion_panel_4_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Are not assigned");
      }
    }

    function WorkshopViewComponent_mat_expansion_panel_4_ng_container_36_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Definition:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Created at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkshopViewComponent_mat_expansion_panel_4_ng_container_36_ng_container_1_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r312);

          var laboratory_r309 = ctx.$implicit;

          var workshop_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r310.deleteLaboratoryEvent(workshop_r295, laboratory_r309);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var laboratory_r309 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](laboratory_r309.laboratoryId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](laboratory_r309.definition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](laboratory_r309.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](laboratory_r309.modified);
      }
    }

    function WorkshopViewComponent_mat_expansion_panel_4_ng_container_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkshopViewComponent_mat_expansion_panel_4_ng_container_36_ng_container_1_Template, 26, 4, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var workshop_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", workshop_r295.laboratories);
      }
    }

    function WorkshopViewComponent_mat_expansion_panel_4_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Are not assigned");
      }
    }

    function WorkshopViewComponent_mat_expansion_panel_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function WorkshopViewComponent_mat_expansion_panel_4_Template_mat_expansion_panel_closed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315);

          var workshop_r295 = ctx.$implicit;

          var ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r314.onAfterCollapse(workshop_r295);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Modified at:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description:\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Areas:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkshopViewComponent_mat_expansion_panel_4_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315);

          var workshop_r295 = ctx.$implicit;

          var ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r316.addAreaEvent(workshop_r295);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "add_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WorkshopViewComponent_mat_expansion_panel_4_ng_container_25_Template, 2, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WorkshopViewComponent_mat_expansion_panel_4_ng_template_26_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Laboratories:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkshopViewComponent_mat_expansion_panel_4_Template_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315);

          var workshop_r295 = ctx.$implicit;

          var ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r317.addLaboratoryEvent(workshop_r295);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "add_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, WorkshopViewComponent_mat_expansion_panel_4_ng_container_36_Template, 2, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, WorkshopViewComponent_mat_expansion_panel_4_ng_template_37_Template, 1, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkshopViewComponent_mat_expansion_panel_4_Template_button_click_41_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315);

          var workshop_r295 = ctx.$implicit;

          var ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r318.cancelWorkshop(workshop_r295);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkshopViewComponent_mat_expansion_panel_4_Template_button_click_43_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315);

          var workshop_r295 = ctx.$implicit;

          var ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r319.saveWorkshop(workshop_r295);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkshopViewComponent_mat_expansion_panel_4_Template_button_click_45_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315);

          var workshop_r295 = ctx.$implicit;

          var ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r320.deleteWorkshop(workshop_r295);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var workshop_r295 = ctx.$implicit;

        var _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

        var _r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Workshop id: ", workshop_r295.workshopId, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created at: ", workshop_r295.created, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](workshop_r295.modified);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](workshop_r295.definition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", workshop_r295.areas !== undefined)("ngIfElse", _r297);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", workshop_r295.laboratories !== undefined)("ngIfElse", _r300);
      }
    }

    var WorkshopViewComponent = /*#__PURE__*/function () {
      function WorkshopViewComponent(workshopService, areaService, laboratoryService, dialog) {
        _classCallCheck(this, WorkshopViewComponent);

        this.workshopService = workshopService;
        this.areaService = areaService;
        this.laboratoryService = laboratoryService;
        this.dialog = dialog;
        this.workshops = [];
        this.newDefinition = '';
        this.addWorkshopEvent = false;
        this.isWorkshopDataChanged = false; //  Area values

        this.areaList = []; //  Laboratory values

        this.laboratoryList = [];
      }

      _createClass(WorkshopViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllWorkshops();
        } // -------------------------------------
        // Workshop methods
        // -------------------------------------

      }, {
        key: "loadAllWorkshops",
        value: function loadAllWorkshops() {
          var _this55 = this;

          this.workshopService.loadAllWorkshops().subscribe(function (data) {
            _this55.workshops = data;
            console.log(_this55.workshops);
          });
        }
      }, {
        key: "addWorkshop",
        value: function addWorkshop() {
          this.addWorkshopEvent = true;
          console.log('Add Workshop event');
        }
      }, {
        key: "createWorkshop",
        value: function createWorkshop(workshopDefinition) {
          var _this56 = this;

          console.log('Create Workshop definition: ' + workshopDefinition.model);
          var workshopEdit = new _model_workshop_edit__WEBPACK_IMPORTED_MODULE_2__["WorkshopEdit"]();
          workshopEdit.definition = workshopDefinition.model;
          this.workshopService.createNewWorkshop(workshopEdit).subscribe(function (data) {
            _this56.workshops.push(data);
          }, function (error) {
            return console.log(error);
          }); // Clear values

          this.newDefinition = '';
          this.addWorkshopEvent = false;
        }
      }, {
        key: "saveWorkshop",
        value: function saveWorkshop(workshop) {
          var _this57 = this;

          if (this.isWorkshopDataChanged) {
            console.log('Save Workshop id: ' + workshop.workshopId);
            var workshopEdit = new _model_workshop_edit__WEBPACK_IMPORTED_MODULE_2__["WorkshopEdit"]();
            workshopEdit.update(workshop);
            this.workshopService.saveWorkshop(workshopEdit).subscribe(function (data) {
              var currentWorkshop = _this57.workshops.find(function (value) {
                return value.workshopId === workshop.workshopId;
              });

              _model_workshop__WEBPACK_IMPORTED_MODULE_1__["Workshop"].update(currentWorkshop, data);

              _this57.isWorkshopDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        }
      }, {
        key: "deleteWorkshop",
        value: function deleteWorkshop(workshop) {
          var _this58 = this;

          this.workshopService.deleteWorkshop(workshop.workshopId).subscribe(function (data) {
            _this58.workshops = _this58.workshops.filter(function (value) {
              return value.workshopId !== workshop.workshopId;
            });
            console.log('Workshop id: ' + workshop.workshopId + ' is deleted');
            _this58.isWorkshopDataChanged = false;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "cancelWorkshop",
        value: function cancelWorkshop(workshop) {
          console.log('Cancel Workshop id: ' + workshop.workshopId);
          if (this.isWorkshopDataChanged) this.onAfterCollapse(workshop);
        }
      }, {
        key: "onAfterCollapse",
        value: function onAfterCollapse(workshop) {
          var _this59 = this;

          console.log('OnAfterCollapse event, Workshop id: ' + workshop.workshopId);

          if (this.isWorkshopDataChanged) {
            console.log('The Workshop Data changed, clear changes for Workshop id: ' + workshop.workshopId);
            this.workshopService.loadWorkshopById(workshop.workshopId).subscribe(function (data) {
              var currentWorkshop = _this59.workshops.find(function (value) {
                return value.workshopId === workshop.workshopId;
              });

              _model_workshop__WEBPACK_IMPORTED_MODULE_1__["Workshop"].update(currentWorkshop, data);

              _this59.isWorkshopDataChanged = false;
            }, function (error) {
              return console.log(error);
            });
          }
        } // -------------------------------------
        // Area methods
        // -------------------------------------

      }, {
        key: "addAreaEvent",
        value: function addAreaEvent(workshop) {
          var _this60 = this;

          console.log('AddWorkshopEvent enter');
          this.areaService.loadAllAreas().subscribe(function (data) {
            _this60.areaList = data;
            var selectData = [];

            _this60.areaList.forEach(function (value) {
              var viewValue = 'Id: ' + value.areaId;
              var disableValue = false;
              if (value.workshop !== undefined && value.workshop !== null) disableValue = true;
              if (value.definition !== undefined) viewValue += ', ' + value.definition;
              selectData.push(new _model_select_data__WEBPACK_IMPORTED_MODULE_3__["SelectDataImpl"](value.areaId, viewValue, disableValue));
            });

            _this60.openAreaDialog(workshop, selectData);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "openAreaDialog",
        value: function openAreaDialog(workshop, data) {
          var _this61 = this;

          console.log('Open Dialog for Workshop id: ' + workshop.workshopId);
          var dialogRef = this.dialog.open(_select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_4__["SelectDialogSingleComponent"], {
            width: '350px',
            data: {
              "selectedDataList": data,
              "isMultiple": true
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed, selected value: ' + result);
            if (result === undefined || result.length === 0) return;

            var currentWorkshop = _this61.workshops.find(function (value) {
              return value.workshopId === workshop.workshopId;
            });

            result.forEach(function (areaId) {
              var area = _this61.areaList.find(function (value) {
                return value.areaId === areaId;
              });

              if (currentWorkshop.areas === undefined) currentWorkshop.areas = [];
              currentWorkshop.areas.push(area);
            });

            _this61.dialog.ngOnDestroy(); // Update this.isAreaDataChanged value


            _this61.isWorkshopDataChanged = true;
          });
        }
      }, {
        key: "deleteAreaEvent",
        value: function deleteAreaEvent(workshop, area) {
          console.log('DeleteAreaEvent, Workshop id: ' + workshop.workshopId + ', Area id: ' + area.areaId);
          var currentWorkshop = this.workshops.find(function (value) {
            return value.workshopId === workshop.workshopId;
          });
          if (currentWorkshop.areas === undefined || currentWorkshop.areas.length === 0) return;
          currentWorkshop.areas = currentWorkshop.areas.filter(function (value) {
            return value.areaId !== area.areaId;
          }); // Update this.isAreaDataChanged value

          this.isWorkshopDataChanged = true;
        } // -------------------------------------
        // Laboratory methods
        // -------------------------------------

      }, {
        key: "addLaboratoryEvent",
        value: function addLaboratoryEvent(workshop) {
          var _this62 = this;

          console.log('AddWorkshopEvent enter');
          this.laboratoryService.loadAllLaboratories().subscribe(function (data) {
            _this62.laboratoryList = data;
            var selectData = [];

            _this62.laboratoryList.forEach(function (value) {
              var viewValue = 'Id: ' + value.laboratoryId;
              var disableValue = false;

              if (value.definition !== undefined) {
                viewValue += ', ' + value.definition;
              }

              selectData.push(new _model_select_data__WEBPACK_IMPORTED_MODULE_3__["SelectDataImpl"](value.laboratoryId, viewValue, disableValue));
            });

            _this62.openLaboratoryDialog(workshop, selectData);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "openLaboratoryDialog",
        value: function openLaboratoryDialog(workshop, data) {
          var _this63 = this;

          console.log('Open Dialog for Workshop id: ' + workshop.workshopId);
          var dialogRef = this.dialog.open(_select_dialog_single_select_dialog_single_component__WEBPACK_IMPORTED_MODULE_4__["SelectDialogSingleComponent"], {
            width: '350px',
            data: {
              "selectedDataList": data,
              "isMultiple": true
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed, selected value: ' + result);
            if (result === undefined || result.length === 0) return;

            var currentWorkshop = _this63.workshops.find(function (value) {
              return value.workshopId === workshop.workshopId;
            });

            result.forEach(function (laboratoryId) {
              var laboratory = _this63.laboratoryList.find(function (value) {
                return value.laboratoryId === laboratoryId;
              });

              if (currentWorkshop.laboratories === undefined) currentWorkshop.laboratories = [];
              currentWorkshop.laboratories.push(laboratory);
            });

            _this63.dialog.ngOnDestroy(); // Update this.isAreaDataChanged value


            _this63.isWorkshopDataChanged = true;
          });
        }
      }, {
        key: "deleteLaboratoryEvent",
        value: function deleteLaboratoryEvent(workshop, laboratory) {
          console.log('DeleteAreaEvent, Workshop id: ' + workshop.workshopId + ', Laboratory id: ' + laboratory.laboratoryId);
          var currentWorkshop = this.workshops.find(function (value) {
            return value.workshopId === workshop.workshopId;
          });
          if (currentWorkshop.laboratories === undefined || currentWorkshop.laboratories.length === 0) return;
          currentWorkshop.laboratories = currentWorkshop.laboratories.filter(function (value) {
            return value.laboratoryId !== laboratory.laboratoryId;
          }); // Update this.isAreaDataChanged value

          this.isWorkshopDataChanged = true;
        }
      }]);

      return WorkshopViewComponent;
    }();

    WorkshopViewComponent.ɵfac = function WorkshopViewComponent_Factory(t) {
      return new (t || WorkshopViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_workshop_service__WEBPACK_IMPORTED_MODULE_5__["WorkshopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_area_service__WEBPACK_IMPORTED_MODULE_6__["AreaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_laboratory_service__WEBPACK_IMPORTED_MODULE_7__["LaboratoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]));
    };

    WorkshopViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkshopViewComponent,
      selectors: [["app-workshop-view"]],
      decls: 5,
      vars: 2,
      consts: [["mat-raised-button", "", 1, "add-item-button", 3, "click"], ["expanded", "true", 4, "ngIf"], [3, "closed", 4, "ngFor", "ngForOf"], ["expanded", "true"], ["fxLayout", "row", "fxLayoutAlign", "start", 1, "item-description"], [1, "example-full-width"], ["matInput", "", "placeholder", "Add Workshop description", 3, "ngModel", "ngModelChange"], ["workshopDefinition", "ngModel"], ["fxLayout", "row", "fxLayoutAlign", "end", 1, "item-description"], ["mat-raised-button", "", 3, "click"], [3, "closed"], ["mat-icon-button", "", "color", "primary", 1, "add-component-button", 3, "click"], [4, "ngIf", "ngIfElse"], ["elseAreaBlock", ""], ["elseLaboratoryBlock", ""], [4, "ngFor", "ngForOf"], ["fxFlex", "30"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "item-description"], ["mat-icon-button", "", "color", "primary", 3, "click"]],
      template: function WorkshopViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkshopViewComponent_Template_button_click_0_listener() {
            return ctx.addWorkshop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkshopViewComponent_mat_expansion_panel_3_Template, 19, 1, "mat-expansion-panel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkshopViewComponent_mat_expansion_panel_4_Template, 47, 8, "mat-expansion-panel", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addWorkshopEvent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workshops);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelDescription"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"]],
      styles: [".add-item-button[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.add-component-button[_ngcontent-%COMP%] {\r\n  margin-left: 6px;\r\n}\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n  min-width: 600px;\r\n}\r\n\r\n.item-description[_ngcontent-%COMP%] {\r\n  margin-top: 2px;\r\n}\r\n\r\n.item-description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.item-description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\nmat-divider[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n.panel-header-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n}\r\n\r\n.mat-icon-button[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 0;\r\n  width: 20px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n  line-height: 20px;\r\n}\r\n\r\n.add-select-part[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya3Nob3Atdmlldy93b3Jrc2hvcC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvd29ya3Nob3Atdmlldy93b3Jrc2hvcC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWl0ZW0tYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYWRkLWNvbXBvbmVudC1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBtaW4td2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4uaXRlbS1kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4uaXRlbS1kZXNjcmlwdGlvbiBkaXYge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5pdGVtLWRlc2NyaXB0aW9uIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1kaXZpZGVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkZXItaWNvbi1idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRlci1pY29uLWJ1dHRvbiAubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYWRkLXNlbGVjdC1wYXJ0IHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkshopViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-workshop-view',
          templateUrl: './workshop-view.component.html',
          styleUrls: ['./workshop-view.component.css']
        }]
      }], function () {
        return [{
          type: _services_workshop_service__WEBPACK_IMPORTED_MODULE_5__["WorkshopService"]
        }, {
          type: _services_area_service__WEBPACK_IMPORTED_MODULE_6__["AreaService"]
        }, {
          type: _services_laboratory_service__WEBPACK_IMPORTED_MODULE_7__["LaboratoryService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Max_Progs\AngularProjects\Kursova_UI\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map