(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-landing-landing-module"],{

/***/ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm5/ngu-carousel.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ngu/carousel/__ivy_ngcc__/fesm5/ngu-carousel.js ***!
  \***********************************************************************/
/*! exports provided: NguCarousel, NguCarouselConfig, NguCarouselModule, NguCarouselStore, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarousel", function() { return NguCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselConfig", function() { return NguCarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselModule", function() { return NguCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselStore", function() { return NguCarouselStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ItemsControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NguButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NguCarouselItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NguCarouselNextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NguCarouselPrevDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NguCarouselPointDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NguCarouselDefDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NguCarouselOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NguItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NguTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");











var _c0 = ["ngucarousel"];
var _c1 = ["nguItemsContainer"];
var _c2 = ["touchContainer"];
var _c3 = [[["", "NguCarouselPrev", ""]], [["", "NguCarouselNext", ""]], [["", "NguCarouselPoint", ""]]];
var _c4 = ["[NguCarouselPrev]", "[NguCarouselNext]", "[NguCarouselPoint]"];
var _c5 = ["*"];
var NguCarouselStore = /** @class */ (function () {
    function NguCarouselStore(touch, vertical, interval, transform, button, visibleItems, deviceType, type, token, items, load, deviceWidth, carouselWidth, itemWidth, slideItems, itemWidthPer, itemLength, currentSlide, easing, speed, loop, dexVal, touchTransform, isEnd, isFirst, isLast, RTL, point, velocity) {
        if (touch === void 0) { touch = new Touch(); }
        if (vertical === void 0) { vertical = new Vertical(); }
        if (transform === void 0) { transform = new Transfrom(); }
        if (type === void 0) { type = 'fixed'; }
        if (token === void 0) { token = ''; }
        if (items === void 0) { items = 0; }
        if (load === void 0) { load = 0; }
        if (deviceWidth === void 0) { deviceWidth = 0; }
        if (carouselWidth === void 0) { carouselWidth = 0; }
        if (itemWidth === void 0) { itemWidth = 0; }
        if (slideItems === void 0) { slideItems = 0; }
        if (itemWidthPer === void 0) { itemWidthPer = 0; }
        if (itemLength === void 0) { itemLength = 0; }
        if (currentSlide === void 0) { currentSlide = 0; }
        if (easing === void 0) { easing = 'cubic-bezier(0, 0, 0.2, 1)'; }
        if (speed === void 0) { speed = 200; }
        if (loop === void 0) { loop = false; }
        if (dexVal === void 0) { dexVal = 0; }
        if (touchTransform === void 0) { touchTransform = 0; }
        if (isEnd === void 0) { isEnd = false; }
        if (isFirst === void 0) { isFirst = true; }
        if (isLast === void 0) { isLast = false; }
        if (RTL === void 0) { RTL = false; }
        if (point === void 0) { point = true; }
        if (velocity === void 0) { velocity = 1; }
        this.touch = touch;
        this.vertical = vertical;
        this.interval = interval;
        this.transform = transform;
        this.button = button;
        this.visibleItems = visibleItems;
        this.deviceType = deviceType;
        this.type = type;
        this.token = token;
        this.items = items;
        this.load = load;
        this.deviceWidth = deviceWidth;
        this.carouselWidth = carouselWidth;
        this.itemWidth = itemWidth;
        this.slideItems = slideItems;
        this.itemWidthPer = itemWidthPer;
        this.itemLength = itemLength;
        this.currentSlide = currentSlide;
        this.easing = easing;
        this.speed = speed;
        this.loop = loop;
        this.dexVal = dexVal;
        this.touchTransform = touchTransform;
        this.isEnd = isEnd;
        this.isFirst = isFirst;
        this.isLast = isLast;
        this.RTL = RTL;
        this.point = point;
        this.velocity = velocity;
    }
    return NguCarouselStore;
}());
var ItemsControl = /** @class */ (function () {
    function ItemsControl() {
    }
    return ItemsControl;
}());
var Vertical = /** @class */ (function () {
    function Vertical() {
    }
    return Vertical;
}());
var NguButton = /** @class */ (function () {
    function NguButton() {
    }
    return NguButton;
}());
var Touch = /** @class */ (function () {
    function Touch() {
    }
    return Touch;
}());
var Transfrom = /** @class */ (function () {
    function Transfrom(xs, sm, md, lg, all) {
        if (xs === void 0) { xs = 0; }
        if (sm === void 0) { sm = 0; }
        if (md === void 0) { md = 0; }
        if (lg === void 0) { lg = 0; }
        if (all === void 0) { all = 0; }
        this.xs = xs;
        this.sm = sm;
        this.md = md;
        this.lg = lg;
        this.all = all;
    }
    return Transfrom;
}());
var NguCarouselConfig = /** @class */ (function () {
    function NguCarouselConfig() {
    }
    return NguCarouselConfig;
}());
var NguCarouselOutletContext = /** @class */ (function () {
    function NguCarouselOutletContext(data) {
        this.$implicit = data;
    }
    return NguCarouselOutletContext;
}());

var NguCarouselItemDirective = /** @class */ (function () {
    function NguCarouselItemDirective() {
    }
NguCarouselItemDirective.ɵfac = function NguCarouselItemDirective_Factory(t) { return new (t || NguCarouselItemDirective)(); };
NguCarouselItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NguCarouselItemDirective, selectors: [["", "NguCarouselItem", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NguCarouselItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselItem]'
            }]
    }], function () { return []; }, null); })();
    return NguCarouselItemDirective;
}());
var NguCarouselNextDirective = /** @class */ (function () {
    function NguCarouselNextDirective() {
    }
NguCarouselNextDirective.ɵfac = function NguCarouselNextDirective_Factory(t) { return new (t || NguCarouselNextDirective)(); };
NguCarouselNextDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NguCarouselNextDirective, selectors: [["", "NguCarouselNext", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NguCarouselNextDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselNext]'
            }]
    }], function () { return []; }, null); })();
    return NguCarouselNextDirective;
}());
var NguCarouselPrevDirective = /** @class */ (function () {
    function NguCarouselPrevDirective() {
    }
NguCarouselPrevDirective.ɵfac = function NguCarouselPrevDirective_Factory(t) { return new (t || NguCarouselPrevDirective)(); };
NguCarouselPrevDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NguCarouselPrevDirective, selectors: [["", "NguCarouselPrev", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NguCarouselPrevDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPrev]'
            }]
    }], function () { return []; }, null); })();
    return NguCarouselPrevDirective;
}());
var NguCarouselPointDirective = /** @class */ (function () {
    function NguCarouselPointDirective() {
    }
NguCarouselPointDirective.ɵfac = function NguCarouselPointDirective_Factory(t) { return new (t || NguCarouselPointDirective)(); };
NguCarouselPointDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NguCarouselPointDirective, selectors: [["", "NguCarouselPoint", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NguCarouselPointDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPoint]'
            }]
    }], function () { return []; }, null); })();
    return NguCarouselPointDirective;
}());
var NguCarouselDefDirective = /** @class */ (function () {
    function NguCarouselDefDirective(template) {
        this.template = template;
    }
    NguCarouselDefDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
NguCarouselDefDirective.ɵfac = function NguCarouselDefDirective_Factory(t) { return new (t || NguCarouselDefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
NguCarouselDefDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NguCarouselDefDirective, selectors: [["", "nguCarouselDef", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NguCarouselDefDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[nguCarouselDef]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
    return NguCarouselDefDirective;
}());
var NguCarouselOutlet = /** @class */ (function () {
    function NguCarouselOutlet(viewContainer) {
        this.viewContainer = viewContainer;
    }
    NguCarouselOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }
    ]; };
NguCarouselOutlet.ɵfac = function NguCarouselOutlet_Factory(t) { return new (t || NguCarouselOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"])); };
NguCarouselOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NguCarouselOutlet, selectors: [["", "nguCarouselOutlet", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NguCarouselOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[nguCarouselOutlet]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }]; }, null); })();
    return NguCarouselOutlet;
}());

var NguCarousel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NguCarousel, _super);
    function NguCarousel(_el, _renderer, _differs, platformId, cdr) {
        var _this = _super.call(this) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._differs = _differs;
        _this.platformId = platformId;
        _this.cdr = cdr;
        _this.withAnim = true;
        _this.isHovered = false;
        _this.carouselLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        _this.onMove = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        _this._intervalController$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this.pointNumbers = [];
        return _this;
    }
    Object.defineProperty(NguCarousel.prototype, "dataSource", {
        get: function () {
            return this._dataSource;
        },
        set: function (data) {
            if (data) {
                // console.log(data, this.dataSource);
                // this.isFirstss++;
                this._switchDataSource(data);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NguCarousel.prototype, "nextBtn", {
        /** The setter is used to catch the button if the button has ngIf
         * issue id #91
         */
        set: function (btn) {
            var _this = this;
            this.listener2 && this.listener2();
            if (btn) {
                this.listener2 = this._renderer.listen(btn.nativeElement, 'click', function () {
                    return _this._carouselScrollOne(1);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NguCarousel.prototype, "prevBtn", {
        /** The setter is used to catch the button if the button has ngIf
         * issue id #91
         */
        set: function (btn) {
            var _this = this;
            this.listener1 && this.listener1();
            if (btn) {
                this.listener1 = this._renderer.listen(btn.nativeElement, 'click', function () {
                    return _this._carouselScrollOne(0);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NguCarousel.prototype, "trackBy", {
        /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
         * relative to the function to know if a Items should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         */
        get: function () {
            return this._trackByFn;
        },
        set: function (fn) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() &&
                fn != null &&
                typeof fn !== 'function' &&
                console &&
                console.warn) {
                console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ".");
            }
            this._trackByFn = fn;
        },
        enumerable: true,
        configurable: true
    });
    NguCarousel.prototype.ngOnInit = function () {
        var _this = this;
        this._dataDiffer = this._differs
            .find([])
            .create(function (_i, item) {
            return _this.trackBy ? _this.trackBy(item.dataIndex, item.data) : item;
        });
    };
    NguCarousel.prototype.ngDoCheck = function () {
        this.arrayChanges = this._dataDiffer.diff(this.dataSource);
        if (this.arrayChanges && this._defDirec) {
            // console.log('Changes detected!');
            this._observeRenderChanges();
        }
    };
    NguCarousel.prototype._switchDataSource = function (dataSource) {
        this._dataSource = dataSource;
        if (this._defDirec) {
            this._observeRenderChanges();
        }
    };
    NguCarousel.prototype._observeRenderChanges = function () {
        var _this = this;
        var dataStream;
        if (this._dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._intervalController$))
                .subscribe(function (data) {
                _this.renderNodeChanges(data);
                _this.isLast = false;
            });
        }
    };
    NguCarousel.prototype.renderNodeChanges = function (data, viewContainer) {
        var _this = this;
        if (viewContainer === void 0) { viewContainer = this._nodeOutlet.viewContainer; }
        if (!this.arrayChanges)
            return;
        this.arrayChanges.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
            // const node = this._defDirec.find(items => item.item);
            var node = _this._getNodeDef(data[currentIndex], currentIndex);
            if (item.previousIndex == null) {
                var context = new NguCarouselOutletContext(data[currentIndex]);
                context.index = currentIndex;
                viewContainer.createEmbeddedView(node.template, context, currentIndex);
            }
            else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
            }
            else {
                var view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
            }
        });
        this._updateItemIndexContext();
        if (this.carousel) {
            this._storeCarouselData();
        }
        // console.log(this.dataSource);
    };
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    NguCarousel.prototype._updateItemIndexContext = function () {
        var viewContainer = this._nodeOutlet.viewContainer;
        for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            var viewRef = viewContainer.get(renderIndex);
            var context = viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    };
    NguCarousel.prototype._getNodeDef = function (data, i) {
        // console.log(this._defDirec);
        if (this._defDirec.length === 1) {
            return this._defDirec.first;
        }
        var nodeDef = this._defDirec.find(function (def) { return def.when && def.when(i, data); }) ||
            this._defaultNodeDef;
        return nodeDef;
    };
    NguCarousel.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.carousel = this._el.nativeElement;
        this._inputValidation();
        this.carouselCssNode = this._createStyleElem();
        // this._buttonControl();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this._carouselInterval();
            if (!this.vertical.enabled) {
                this._touch();
            }
            this.listener3 = this._renderer.listen('window', 'resize', function (event) {
                _this._onResizing(event);
            });
            this._onWindowScrolling();
        }
    };
    NguCarousel.prototype.ngAfterContentInit = function () {
        this._observeRenderChanges();
        this.cdr.markForCheck();
    };
    NguCarousel.prototype._inputValidation = function () {
        this.type = this.inputs.grid.all !== 0 ? 'fixed' : 'responsive';
        this.loop = this.inputs.loop || false;
        this.inputs.easing = this.inputs.easing || 'cubic-bezier(0, 0, 0.2, 1)';
        this.touch.active = this.inputs.touch || false;
        this.RTL = this.inputs.RTL ? true : false;
        this.interval = this.inputs.interval || null;
        this.velocity =
            typeof this.inputs.velocity === 'number'
                ? this.inputs.velocity
                : this.velocity;
        if (this.inputs.vertical && this.inputs.vertical.enabled) {
            this.vertical.enabled = this.inputs.vertical.enabled;
            this.vertical.height = this.inputs.vertical.height;
        }
        this.directionSym = this.RTL ? '' : '-';
        this.point =
            this.inputs.point && typeof this.inputs.point.visible !== 'undefined'
                ? this.inputs.point.visible
                : true;
        this._carouselSize();
    };
    NguCarousel.prototype.ngOnDestroy = function () {
        // clearInterval(this.carouselInt);
        this.carouselInt && this.carouselInt.unsubscribe();
        this._intervalController$.unsubscribe();
        this.carouselLoad.complete();
        this.onMove.complete();
        /** remove listeners */
        for (var i = 1; i <= 4; i++) {
            var str = "listener" + i;
            this[str] && this[str]();
        }
    };
    NguCarousel.prototype._onResizing = function (event) {
        var _this = this;
        clearTimeout(this.onResize);
        this.onResize = setTimeout(function () {
            if (_this.deviceWidth !== event.target.outerWidth) {
                _this._setStyle(_this.nguItemsContainer.nativeElement, 'transition', "");
                _this._storeCarouselData();
            }
        }, 500);
    };
    /** Get Touch input */
    NguCarousel.prototype._touch = function () {
        var _this = this;
        if (this.inputs.touch) {
            var hammertime = new hammerjs__WEBPACK_IMPORTED_MODULE_2__(this.touchContainer.nativeElement);
            hammertime.get('pan').set({ direction: hammerjs__WEBPACK_IMPORTED_MODULE_2__["DIRECTION_HORIZONTAL"] });
            hammertime.on('panstart', function (ev) {
                _this.carouselWidth = _this.nguItemsContainer.nativeElement.offsetWidth;
                _this.touchTransform = _this.transform[_this.deviceType];
                _this.dexVal = 0;
                _this._setStyle(_this.nguItemsContainer.nativeElement, 'transition', '');
            });
            if (this.vertical.enabled) {
                hammertime.on('panup', function (ev) {
                    _this._touchHandling('panleft', ev);
                });
                hammertime.on('pandown', function (ev) {
                    _this._touchHandling('panright', ev);
                });
            }
            else {
                hammertime.on('panleft', function (ev) {
                    _this._touchHandling('panleft', ev);
                });
                hammertime.on('panright', function (ev) {
                    _this._touchHandling('panright', ev);
                });
            }
            hammertime.on('panend pancancel', function (ev) {
                if (Math.abs(ev.velocity) >= _this.velocity) {
                    _this.touch.velocity = ev.velocity;
                    var direc = 0;
                    if (!_this.RTL) {
                        direc = _this.touch.swipe === 'panright' ? 0 : 1;
                    }
                    else {
                        direc = _this.touch.swipe === 'panright' ? 1 : 0;
                    }
                    _this._carouselScrollOne(direc);
                }
                else {
                    _this.dexVal = 0;
                    _this._setStyle(_this.nguItemsContainer.nativeElement, 'transition', 'transform 324ms cubic-bezier(0, 0, 0.2, 1)');
                    _this._setStyle(_this.nguItemsContainer.nativeElement, 'transform', '');
                }
            });
            hammertime.on('hammer.input', function (ev) {
                // allow nested touch events to no propagate, this may have other side affects but works for now.
                // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
                ev.srcEvent.stopPropagation();
            });
        }
    };
    /** handle touch input */
    NguCarousel.prototype._touchHandling = function (e, ev) {
        // vertical touch events seem to cause to panstart event with an odd delta
        // and a center of {x:0,y:0} so this will ignore them
        if (ev.center.x === 0) {
            return;
        }
        ev = Math.abs(this.vertical.enabled ? ev.deltaY : ev.deltaX);
        var valt = ev - this.dexVal;
        valt =
            this.type === 'responsive'
                ? (Math.abs(ev - this.dexVal) /
                    (this.vertical.enabled
                        ? this.vertical.height
                        : this.carouselWidth)) *
                    100
                : valt;
        this.dexVal = ev;
        this.touch.swipe = e;
        this._setTouchTransfrom(e, valt);
        this._setTransformFromTouch();
    };
    NguCarousel.prototype._setTouchTransfrom = function (e, valt) {
        var condition = this.RTL ? 'panright' : 'panleft';
        this.touchTransform =
            e === condition ? valt + this.touchTransform : this.touchTransform - valt;
    };
    NguCarousel.prototype._setTransformFromTouch = function () {
        if (this.touchTransform < 0) {
            this.touchTransform = 0;
        }
        var type = this.type === 'responsive' ? '%' : 'px';
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', this.vertical.enabled
            ? "translate3d(0, " + this.directionSym + this.touchTransform + type + ", 0)"
            : "translate3d(" + this.directionSym + this.touchTransform + type + ", 0, 0)");
    };
    /** this fn used to disable the interval when it is not on the viewport */
    NguCarousel.prototype._onWindowScrolling = function () {
        var top = this.carousel.offsetTop;
        var scrollY = window.scrollY;
        var heightt = window.innerHeight;
        var carouselHeight = this.carousel.offsetHeight;
        var isCarouselOnScreen = top <= scrollY + heightt - carouselHeight / 4 &&
            top + carouselHeight / 2 >= scrollY;
        if (isCarouselOnScreen) {
            this._intervalController$.next(1);
        }
        else {
            this._intervalController$.next(0);
        }
    };
    /** store data based on width of the screen for the carousel */
    NguCarousel.prototype._storeCarouselData = function () {
        this.deviceWidth = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)
            ? window.innerWidth
            : 1200;
        this.carouselWidth = this.carouselMain1.nativeElement.offsetWidth;
        if (this.type === 'responsive') {
            this.deviceType =
                this.deviceWidth >= 1200
                    ? 'lg'
                    : this.deviceWidth >= 992
                        ? 'md'
                        : this.deviceWidth >= 768
                            ? 'sm'
                            : 'xs';
            this.items = this.inputs.grid[this.deviceType];
            this.itemWidth = this.carouselWidth / this.items;
        }
        else {
            this.items = Math.trunc(this.carouselWidth / this.inputs.grid.all);
            this.itemWidth = this.inputs.grid.all;
            this.deviceType = 'all';
        }
        this.slideItems = +(this.inputs.slide < this.items
            ? this.inputs.slide
            : this.items);
        this.load =
            this.inputs.load >= this.slideItems ? this.inputs.load : this.slideItems;
        this.speed =
            this.inputs.speed && this.inputs.speed > -1 ? this.inputs.speed : 400;
        this._carouselPoint();
    };
    /** Used to reset the carousel */
    NguCarousel.prototype.reset = function (withOutAnimation) {
        withOutAnimation && (this.withAnim = false);
        this.carouselCssNode.innerHTML = '';
        this.moveTo(0);
        this._carouselPoint();
    };
    /** Init carousel point */
    NguCarousel.prototype._carouselPoint = function () {
        // debugger;
        // if (this.userData.point.visible === true) {
        var Nos = this.dataSource.length - (this.items - this.slideItems);
        this.pointIndex = Math.ceil(Nos / this.slideItems);
        var pointers = [];
        if (this.pointIndex > 1 || !this.inputs.point.hideOnSingleSlide) {
            for (var i = 0; i < this.pointIndex; i++) {
                pointers.push(i);
            }
        }
        this.pointNumbers = pointers;
        // console.log(this.pointNumbers);
        this._carouselPointActiver();
        if (this.pointIndex <= 1) {
            this._btnBoolean(1, 1);
        }
        else {
            if (this.currentSlide === 0 && !this.loop) {
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
            }
        }
        // }
    };
    /** change the active point in carousel */
    NguCarousel.prototype._carouselPointActiver = function () {
        var i = Math.ceil(this.currentSlide / this.slideItems);
        this.activePoint = i;
        // console.log(this.data);
        this.cdr.markForCheck();
    };
    /** this function is used to scoll the carousel when point is clicked */
    NguCarousel.prototype.moveTo = function (slide, withOutAnimation) {
        // slide = slide - 1;
        withOutAnimation && (this.withAnim = false);
        if (this.activePoint !== slide && slide < this.pointIndex) {
            var slideremains = void 0;
            var btns = this.currentSlide < slide ? 1 : 0;
            switch (slide) {
                case 0:
                    this._btnBoolean(1, 0);
                    slideremains = slide * this.slideItems;
                    break;
                case this.pointIndex - 1:
                    this._btnBoolean(0, 1);
                    slideremains = this.dataSource.length - this.items;
                    break;
                default:
                    this._btnBoolean(0, 0);
                    slideremains = slide * this.slideItems;
            }
            this._carouselScrollTwo(btns, slideremains, this.speed);
        }
    };
    /** set the style of the carousel based the inputs data */
    NguCarousel.prototype._carouselSize = function () {
        this.token = this._generateID();
        var dism = '';
        this.styleid = "." + this.token + " > .ngucarousel > .ngu-touch-container > .ngucarousel-items";
        if (this.inputs.custom === 'banner') {
            this._renderer.addClass(this.carousel, 'banner');
        }
        if (this.inputs.animation === 'lazy') {
            dism += this.styleid + " > .item {transition: transform .6s ease;}";
        }
        var itemStyle = '';
        if (this.vertical.enabled) {
            var itemWidth_xs = this.styleid + " > .item {height: " + this.vertical
                .height / +this.inputs.grid.xs + "px}";
            var itemWidth_sm = this.styleid + " > .item {height: " + this.vertical
                .height / +this.inputs.grid.sm + "px}";
            var itemWidth_md = this.styleid + " > .item {height: " + this.vertical
                .height / +this.inputs.grid.md + "px}";
            var itemWidth_lg = this.styleid + " > .item {height: " + this.vertical
                .height / +this.inputs.grid.lg + "px}";
            itemStyle = "@media (max-width:767px){" + itemWidth_xs + "}\n                    @media (min-width:768px){" + itemWidth_sm + "}\n                    @media (min-width:992px){" + itemWidth_md + "}\n                    @media (min-width:1200px){" + itemWidth_lg + "}";
        }
        else if (this.type === 'responsive') {
            var itemWidth_xs = this.inputs.type === 'mobile'
                ? this.styleid + " .item {flex: 0 0 " + 95 /
                    +this.inputs.grid.xs + "%; width: " + 95 / +this.inputs.grid.xs + "%;}"
                : this.styleid + " .item {flex: 0 0 " + 100 /
                    +this.inputs.grid.xs + "%; width: " + 100 / +this.inputs.grid.xs + "%;}";
            var itemWidth_sm = this.styleid + " > .item {flex: 0 0 " + 100 /
                +this.inputs.grid.sm + "%; width: " + 100 / +this.inputs.grid.sm + "%}";
            var itemWidth_md = this.styleid + " > .item {flex: 0 0 " + 100 /
                +this.inputs.grid.md + "%; width: " + 100 / +this.inputs.grid.md + "%}";
            var itemWidth_lg = this.styleid + " > .item {flex: 0 0 " + 100 /
                +this.inputs.grid.lg + "%; width: " + 100 / +this.inputs.grid.lg + "%}";
            itemStyle = "@media (max-width:767px){" + itemWidth_xs + "}\n                    @media (min-width:768px){" + itemWidth_sm + "}\n                    @media (min-width:992px){" + itemWidth_md + "}\n                    @media (min-width:1200px){" + itemWidth_lg + "}";
        }
        else {
            itemStyle = this.styleid + " .item {flex: 0 0 " + this.inputs.grid.all + "px; width: " + this.inputs.grid.all + "px;}";
        }
        this._renderer.addClass(this.carousel, this.token);
        if (this.vertical.enabled) {
            this._renderer.addClass(this.nguItemsContainer.nativeElement, 'nguvertical');
            this._renderer.setStyle(this.carouselMain1.nativeElement, 'height', this.vertical.height + "px");
        }
        // tslint:disable-next-line:no-unused-expression
        this.RTL &&
            !this.vertical.enabled &&
            this._renderer.addClass(this.carousel, 'ngurtl');
        this._createStyleElem(dism + " " + itemStyle);
        this._storeCarouselData();
    };
    /** logic to scroll the carousel step 1 */
    NguCarousel.prototype._carouselScrollOne = function (Btn) {
        var itemSpeed = this.speed;
        var translateXval, currentSlide = 0;
        var touchMove = Math.ceil(this.dexVal / this.itemWidth);
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
        if (this.pointIndex === 1) {
            return;
        }
        else if (Btn === 0 && ((!this.loop && !this.isFirst) || this.loop)) {
            var slide = this.slideItems * this.pointIndex;
            var currentSlideD = this.currentSlide - this.slideItems;
            var MoveSlide = currentSlideD + this.slideItems;
            this._btnBoolean(0, 1);
            if (this.currentSlide === 0) {
                currentSlide = this.dataSource.length - this.items;
                itemSpeed = 400;
                this._btnBoolean(0, 1);
            }
            else if (this.slideItems >= MoveSlide) {
                currentSlide = translateXval = 0;
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
                if (touchMove > this.slideItems) {
                    currentSlide = this.currentSlide - touchMove;
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.currentSlide - this.slideItems;
                }
            }
            this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        else if (Btn === 1 && ((!this.loop && !this.isLast) || this.loop)) {
            if (this.dataSource.length <=
                this.currentSlide + this.items + this.slideItems &&
                !this.isLast) {
                currentSlide = this.dataSource.length - this.items;
                this._btnBoolean(0, 1);
            }
            else if (this.isLast) {
                currentSlide = translateXval = 0;
                itemSpeed = 400;
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
                if (touchMove > this.slideItems) {
                    currentSlide =
                        this.currentSlide + this.slideItems + (touchMove - this.slideItems);
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.currentSlide + this.slideItems;
                }
            }
            this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        // cubic-bezier(0.15, 1.04, 0.54, 1.13)
    };
    /** logic to scroll the carousel step 2 */
    NguCarousel.prototype._carouselScrollTwo = function (Btn, currentSlide, itemSpeed) {
        // tslint:disable-next-line:no-unused-expression
        if (this.dexVal !== 0) {
            var val = Math.abs(this.touch.velocity);
            var somt = Math.floor((this.dexVal / val / this.dexVal) * (this.deviceWidth - this.dexVal));
            somt = somt > itemSpeed ? itemSpeed : somt;
            itemSpeed = somt < 200 ? 200 : somt;
            this.dexVal = 0;
        }
        if (this.withAnim) {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', "transform " + itemSpeed + "ms " + this.inputs.easing);
            this.inputs.animation &&
                this._carouselAnimator(Btn, currentSlide + 1, currentSlide + this.items, itemSpeed, Math.abs(this.currentSlide - currentSlide));
        }
        else {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', "");
        }
        // console.log(this.dataSource);
        this.itemLength = this.dataSource.length;
        this._transformStyle(currentSlide);
        this.currentSlide = currentSlide;
        this.onMove.emit(this);
        this._carouselPointActiver();
        this._carouselLoadTrigger();
        this.withAnim = true;
        // if (currentSlide === 12) {
        //   this._switchDataSource(this.dataSource);
        // }
    };
    /** boolean function for making isFirst and isLast */
    NguCarousel.prototype._btnBoolean = function (first, last) {
        this.isFirst = !!first;
        this.isLast = !!last;
    };
    NguCarousel.prototype._transformString = function (grid, slide) {
        var collect = '';
        collect += this.styleid + " { transform: translate3d(";
        if (this.vertical.enabled) {
            this.transform[grid] =
                (this.vertical.height / this.inputs.grid[grid]) * slide;
            collect += "0, -" + this.transform[grid] + "px, 0";
        }
        else {
            this.transform[grid] = (100 / this.inputs.grid[grid]) * slide;
            collect += "" + this.directionSym + this.transform[grid] + "%, 0, 0";
        }
        collect += "); }";
        return collect;
    };
    /** set the transform style to scroll the carousel  */
    NguCarousel.prototype._transformStyle = function (slide) {
        var slideCss = '';
        if (this.type === 'responsive') {
            slideCss = "@media (max-width: 767px) {" + this._transformString('xs', slide) + "}\n      @media (min-width: 768px) {" + this._transformString('sm', slide) + " }\n      @media (min-width: 992px) {" + this._transformString('md', slide) + " }\n      @media (min-width: 1200px) {" + this._transformString('lg', slide) + " }";
        }
        else {
            this.transform.all = this.inputs.grid.all * slide;
            slideCss = this.styleid + " { transform: translate3d(" + this.directionSym + this.transform.all + "px, 0, 0);";
        }
        this.carouselCssNode.innerHTML = slideCss;
    };
    /** this will trigger the carousel to load the items */
    NguCarousel.prototype._carouselLoadTrigger = function () {
        if (typeof this.inputs.load === 'number') {
            this.dataSource.length - this.load <= this.currentSlide + this.items &&
                this.carouselLoad.emit(this.currentSlide);
        }
    };
    /** generate Class for each carousel to set specific style */
    NguCarousel.prototype._generateID = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return "ngucarousel" + text;
    };
    /** handle the auto slide */
    NguCarousel.prototype._carouselInterval = function () {
        var _this = this;
        var container = this.carouselMain1.nativeElement;
        if (this.interval && this.loop) {
            this.listener4 = this._renderer.listen('window', 'scroll', function () {
                clearTimeout(_this.onScrolling);
                _this.onScrolling = setTimeout(function () {
                    _this._onWindowScrolling();
                }, 600);
            });
            var play$_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(container, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(1));
            var pause$_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(container, 'mouseenter').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(0));
            var touchPlay$_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(container, 'touchstart').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(1));
            var touchPause$_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(container, 'touchend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(0));
            var interval$_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(this.inputs.interval.timing).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(1));
            setTimeout(function () {
                _this.carouselInt = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(play$_1, touchPlay$_1, pause$_1, touchPause$_1, _this._intervalController$)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (val) {
                    _this.isHovered = !val;
                    _this.cdr.markForCheck();
                    return val ? interval$_1 : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"])();
                }))
                    .subscribe(function (res) {
                    _this._carouselScrollOne(1);
                });
            }, this.interval.initialDelay);
        }
    };
    NguCarousel.prototype._updateItemIndexContextAni = function () {
        var viewContainer = this._nodeOutlet.viewContainer;
        for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            var viewRef = viewContainer.get(renderIndex);
            var context = viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    };
    /** animate the carousel items */
    NguCarousel.prototype._carouselAnimator = function (direction, start, end, speed, length, viewContainer) {
        var _this = this;
        if (viewContainer === void 0) { viewContainer = this._nodeOutlet.viewContainer; }
        var val = length < 5 ? length : 5;
        val = val === 1 ? 3 : val;
        var collectIndex = [];
        if (direction === 1) {
            for (var i = start - 1; i < end; i++) {
                collectIndex.push(i);
                val = val * 2;
                var viewRef = viewContainer.get(i);
                var context = viewRef.context;
                context.animate = { value: true, params: { distance: val } };
            }
        }
        else {
            for (var i = end - 1; i >= start - 1; i--) {
                collectIndex.push(i);
                val = val * 2;
                var viewRef = viewContainer.get(i);
                var context = viewRef.context;
                context.animate = { value: true, params: { distance: -val } };
            }
        }
        this.cdr.markForCheck();
        setTimeout(function () {
            _this._removeAnimations(collectIndex);
        }, speed * 0.7);
    };
    NguCarousel.prototype._removeAnimations = function (indexs) {
        var viewContainer = this._nodeOutlet.viewContainer;
        indexs.forEach(function (i) {
            var viewRef = viewContainer.get(i);
            var context = viewRef.context;
            context.animate = { value: false, params: { distance: 0 } };
        });
        this.cdr.markForCheck();
    };
    /** Short form for setElementStyle */
    NguCarousel.prototype._setStyle = function (el, prop, val) {
        this._renderer.setStyle(el, prop, val);
    };
    /** For generating style tag */
    NguCarousel.prototype._createStyleElem = function (datas) {
        var styleItem = this._renderer.createElement('style');
        if (datas) {
            var styleText = this._renderer.createText(datas);
            this._renderer.appendChild(styleItem, styleText);
        }
        this._renderer.appendChild(this.carousel, styleItem);
        return styleItem;
    };
    NguCarousel.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('inputs')
    ], NguCarousel.prototype, "inputs", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])('carouselLoad')
    ], NguCarousel.prototype, "carouselLoad", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])('onMove')
    ], NguCarousel.prototype, "onMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('dataSource')
    ], NguCarousel.prototype, "dataSource", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"])(NguCarouselDefDirective)
    ], NguCarousel.prototype, "_defDirec", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(NguCarouselOutlet, { static: true })
    ], NguCarousel.prototype, "_nodeOutlet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"])(NguCarouselNextDirective, /* TODO: add static flag */ { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] })
    ], NguCarousel.prototype, "nextBtn", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"])(NguCarouselPrevDirective, /* TODO: add static flag */ { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] })
    ], NguCarousel.prototype, "prevBtn", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ngucarousel', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: true })
    ], NguCarousel.prototype, "carouselMain1", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('nguItemsContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: true })
    ], NguCarousel.prototype, "nguItemsContainer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('touchContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: true })
    ], NguCarousel.prototype, "touchContainer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
    ], NguCarousel.prototype, "trackBy", null);
    NguCarousel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]))
    ], NguCarousel);
NguCarousel.ɵfac = function NguCarousel_Factory(t) { return new (t || NguCarousel)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
NguCarousel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NguCarousel, selectors: [["ngu-carousel"]], contentQueries: function NguCarousel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NguCarouselNextDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NguCarouselPrevDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NguCarouselDefDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nextBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.prevBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._defDirec = _t);
    } }, viewQuery: function NguCarousel_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](NguCarouselOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.carouselMain1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nguItemsContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.touchContainer = _t.first);
    } }, inputs: { dataSource: "dataSource", trackBy: "trackBy", inputs: "inputs" }, outputs: { carouselLoad: "carouselLoad", onMove: "onMove" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c4, decls: 11, vars: 0, consts: [[1, "ngucarousel"], ["ngucarousel", ""], [1, "ngu-touch-container"], ["touchContainer", ""], [1, "ngucarousel-items"], ["nguItemsContainer", ""], ["nguCarouselOutlet", ""], [1, "nguclearFix"]], template: function NguCarousel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](10, 2);
    } }, directives: [NguCarouselOutlet], styles: ["[_nghost-%COMP%]{display:block;position:relative}.ngurtl[_nghost-%COMP%]{direction:rtl}.ngucarousel[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:100%}.ngucarousel[_ngcontent-%COMP%]   .ngucarousel-items[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:flex;height:100%}.nguvertical[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:20px}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:rgba(255,255,255,.55)}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#fff}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;border-radius:50%;background:rgba(0,0,0,.55);padding:4px;margin:0 4px;-webkit-transition:.4s;transition:.4s}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#6b6b6b;-webkit-transform:scale(1.8);transform:scale(1.8)}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.nguclearFix[_ngcontent-%COMP%]{clear:both}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NguCarousel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-carousel',
                template: "<div #ngucarousel class=\"ngucarousel\">\r\n  <div #touchContainer class=\"ngu-touch-container\">\r\n    <div #nguItemsContainer class=\"ngucarousel-items\">\r\n      <ng-container nguCarouselOutlet></ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"nguclearFix\"></div>\r\n  <ng-content select=\"[NguCarouselPrev]\"></ng-content>\r\n  <ng-content select=\"[NguCarouselNext]\"></ng-content>\r\n</div>\r\n<ng-content select=\"[NguCarouselPoint]\"></ng-content>\r\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                styles: [":host{display:block;position:relative}:host.ngurtl{direction:rtl}.ngucarousel{position:relative;overflow:hidden;height:100%}.ngucarousel .ngucarousel-items{position:relative;display:-webkit-box;display:flex;height:100%}.nguvertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.banner .ngucarouselPointDefault .ngucarouselPoint{position:absolute;width:100%;bottom:20px}.banner .ngucarouselPointDefault .ngucarouselPoint li{background:rgba(255,255,255,.55)}.banner .ngucarouselPointDefault .ngucarouselPoint li.active{background:#fff}.banner .ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.ngucarouselPointDefault .ngucarouselPoint{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault .ngucarouselPoint li{display:inline-block;border-radius:50%;background:rgba(0,0,0,.55);padding:4px;margin:0 4px;-webkit-transition:.4s;transition:.4s}.ngucarouselPointDefault .ngucarouselPoint li.active{background:#6b6b6b;-webkit-transform:scale(1.8);transform:scale(1.8)}.ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.nguclearFix{clear:both}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, { dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['dataSource']
        }], nextBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [NguCarouselNextDirective, /* TODO: add static flag */ { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]
        }], prevBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [NguCarouselPrevDirective, /* TODO: add static flag */ { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]
        }], trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], inputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['inputs']
        }], carouselLoad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
            args: ['carouselLoad']
        }], onMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
            args: ['onMove']
        }], _defDirec: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [NguCarouselDefDirective]
        }], _nodeOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [NguCarouselOutlet, { static: true }]
        }], carouselMain1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['ngucarousel', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: true }]
        }], nguItemsContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['nguItemsContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: true }]
        }], touchContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['touchContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: true }]
        }] }); })();
    return NguCarousel;
}(NguCarouselStore));

var NguItemComponent = /** @class */ (function () {
    function NguItemComponent() {
        this.classes = true;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.item')
    ], NguItemComponent.prototype, "classes", void 0);
NguItemComponent.ɵfac = function NguItemComponent_Factory(t) { return new (t || NguItemComponent)(); };
NguItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NguItemComponent, selectors: [["ngu-item"]], hostVars: 2, hostBindings: function NguItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("item", ctx.classes);
    } }, ngContentSelectors: _c5, decls: 1, vars: 0, template: function NguItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    } }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NguItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-item',
                template: "<ng-content></ng-content>\r\n",
                styles: [""]
            }]
    }], function () { return []; }, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.item']
        }] }); })();
    return NguItemComponent;
}());

var NguTileComponent = /** @class */ (function () {
    function NguTileComponent() {
        this.classes = true;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.item')
    ], NguTileComponent.prototype, "classes", void 0);
NguTileComponent.ɵfac = function NguTileComponent_Factory(t) { return new (t || NguTileComponent)(); };
NguTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NguTileComponent, selectors: [["ngu-tile"]], hostVars: 2, hostBindings: function NguTileComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("item", ctx.classes);
    } }, ngContentSelectors: _c5, decls: 2, vars: 0, consts: [[1, "tile"]], template: function NguTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]{padding:10px;box-sizing:border-box}.tile[_ngcontent-%COMP%]{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NguTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-tile',
                template: "<div class=\"tile\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [":host{padding:10px;box-sizing:border-box}.tile{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
            }]
    }], function () { return []; }, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.item']
        }] }); })();
    return NguTileComponent;
}());

var NguCarouselModule = /** @class */ (function () {
    function NguCarouselModule() {
    }
NguCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NguCarouselModule });
NguCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NguCarouselModule_Factory(t) { return new (t || NguCarouselModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NguCarouselModule, { declarations: function () { return [NguCarousel,
        NguItemComponent,
        NguTileComponent,
        NguCarouselPointDirective,
        NguCarouselItemDirective,
        NguCarouselNextDirective,
        NguCarouselPrevDirective,
        NguCarouselDefDirective,
        NguCarouselOutlet]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerModule"]]; }, exports: function () { return [NguCarousel,
        NguItemComponent,
        NguTileComponent,
        NguCarouselPointDirective,
        NguCarouselItemDirective,
        NguCarouselNextDirective,
        NguCarouselPrevDirective,
        NguCarouselDefDirective,
        NguCarouselOutlet]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NguCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerModule"]],
                exports: [
                    NguCarousel,
                    NguItemComponent,
                    NguTileComponent,
                    NguCarouselPointDirective,
                    NguCarouselItemDirective,
                    NguCarouselNextDirective,
                    NguCarouselPrevDirective,
                    NguCarouselDefDirective,
                    NguCarouselOutlet
                ],
                declarations: [
                    NguCarousel,
                    NguItemComponent,
                    NguTileComponent,
                    NguCarouselPointDirective,
                    NguCarouselItemDirective,
                    NguCarouselNextDirective,
                    NguCarouselPrevDirective,
                    NguCarouselDefDirective,
                    NguCarouselOutlet
                ]
            }]
    }], function () { return []; }, null); })();
    return NguCarouselModule;
}());

/*
 * Public API Surface of carousel
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngu-carousel.js.map

/***/ }),

/***/ "./src/app/views/landing/blog-details-page/blog-details-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/landing/blog-details-page/blog-details-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: BlogDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsPageComponent", function() { return BlogDetailsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/blog-details/blog-details.component */ "./src/app/views/landing/components/blog-details/blog-details.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");





var BlogDetailsPageComponent = /** @class */ (function () {
    function BlogDetailsPageComponent() {
    }
    BlogDetailsPageComponent.prototype.ngOnInit = function () {
    };
    BlogDetailsPageComponent.ɵfac = function BlogDetailsPageComponent_Factory(t) { return new (t || BlogDetailsPageComponent)(); };
    BlogDetailsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogDetailsPageComponent, selectors: [["app-blog-details-page"]], decls: 4, vars: 0, consts: [[1, "landing_wrap", "landing-gradient-purple-indigo"]], template: function BlogDetailsPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-blog-details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_2__["BlogDetailsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__["ContactFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvYmxvZy1kZXRhaWxzLXBhZ2UvYmxvZy1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
    return BlogDetailsPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogDetailsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-details-page',
                templateUrl: './blog-details-page.component.html',
                styleUrls: ['./blog-details-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/best/best.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/landing/components/best/best.component.ts ***!
  \*****************************************************************/
/*! exports provided: BestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestComponent", function() { return BestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var BestComponent = /** @class */ (function () {
    function BestComponent() {
    }
    BestComponent.prototype.ngOnInit = function () {
    };
    BestComponent.ɵfac = function BestComponent_Factory(t) { return new (t || BestComponent)(); };
    BestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BestComponent, selectors: [["app-best"]], decls: 48, vars: 0, consts: [["id", "extra-feature-wrap", 1, "best-wrap", "p-t-b-80", "light-gray"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "mb-4"], [1, "card", "o-hidden", "text-left"], [1, "card-body"], [1, "left_icon", "float-left", "w-20", "p-3", "text-center"], [1, "eva", "eva-clock-outline"], [1, "right_content", "w-70", "float-left", "p-3"], [1, "card-title", "font-weight-bold"], [1, "card-text"], [1, "eva", "eva-calendar-outline"], [1, "col-md-6", "mb-4", "mb-lg-0", "mb-md-0"], [1, "eva", "eva-lock-outline"], [1, "col-md-6", "mb-lg-0", "mb-md-0"], [1, "eva", "eva-book-open-outline"]], template: function BestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " What Best For you");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Get Response Faster");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Year-Round Availability");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Security & compliance");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Automate Invoicing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9iZXN0L2Jlc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
    return BestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-best',
                templateUrl: './best.component.html',
                styleUrls: ['./best.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/blog-details/blog-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/landing/components/blog-details/blog-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BlogDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsComponent", function() { return BlogDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");



var BlogDetailsComponent = /** @class */ (function () {
    function BlogDetailsComponent() {
    }
    BlogDetailsComponent.prototype.ngOnInit = function () {
    };
    BlogDetailsComponent.ɵfac = function BlogDetailsComponent_Factory(t) { return new (t || BlogDetailsComponent)(); };
    BlogDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogDetailsComponent, selectors: [["app-blog-details"]], decls: 105, vars: 0, consts: [["id", "intro-wrap", 1, "blog-details-wrap"], [1, "blog_header", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "text-white"], [1, "mt-4", "text-white"], [1, "lead", "text-white"], [1, "container", "p-t-b-80"], [1, "col-lg-8"], [1, "lead"], [1, "blockquote"], [1, "mb-0"], [1, "blockquote-footer"], ["title", "Source Title"], [1, "card", "my-5", "mb-5"], [1, "card-header"], [1, "card-body"], [1, "form-group"], ["rows", "3", 1, "form-control"], ["type", "submit", 1, "btn", "btn-gradient"], [1, "media", "mb-4"], ["src", "./assets/images/landing/faces/15.jpg", "alt", "", 1, "d-flex", "mr-3", "w-10", "rounded-circle"], [1, "media-body"], [1, "mt-0"], [1, "media"], ["src", "./assets/images/landing/faces/13.jpg", "alt", "", 1, "d-flex", "mr-3", "w-10", "rounded-circle"], [1, "media", "mt-4"], ["src", "./assets/images/landing/faces/12.jpg", "alt", "", 1, "d-flex", "mr-3", "w-10", "rounded-circle"], ["src", "./assets/images/landing/faces/5.jpg", "alt", "", 1, "d-flex", "mr-3", "w-10", "rounded-circle"], [1, "col-md-4"], [1, "card", "my-4"], [1, "input-group"], ["type", "text", "placeholder", "Search for...", 1, "form-control", "rounded-pill"], [1, "input-group-btn", "ml-2"], ["type", "button", 1, "btn", "btn-gradient"], [1, "col-lg-6"], [1, "list-unstyled", "mb-0"], ["href", "#"]], template: function BlogDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Beauty of Sunshine");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " by Alex Micheal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "blockquote", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "footer", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Someone famous in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "cite", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Source Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Leave a Comment:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "textarea", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Jhon Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, tenetur. Repellat a quaerat culpa illo excepturi. Dignissimos, officia eum! Architecto dolores porro dolor delectus corrupti earum nesciunt sapiente aliquam dignissimos? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Alex Petro");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, tenetur. Repellat a quaerat culpa illo excepturi. Dignissimos, officia eum! Architecto dolores porro dolor delectus corrupti earum nesciunt sapiente aliquam dignissimos? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Jassica Pearl");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, tenetur. Repellat a quaerat culpa illo excepturi. Dignissimos, officia eum! Architecto dolores porro dolor delectus corrupti earum nesciunt sapiente aliquam dignissimos? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Micheal Clark");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, tenetur. Repellat a quaerat culpa illo excepturi. Dignissimos, officia eum! Architecto dolores porro dolor delectus corrupti earum nesciunt sapiente aliquam dignissimos? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Technology");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Sports");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Media");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Life Style");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Movies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Drama");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h5", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Sidebar Content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem minima debitis beatae, recusandae similique quibusdam, sint tenetur blanditiis quia at, itaque reprehenderit eaque. Veritatis repellat ad modi corrupti ab? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9ibG9nLWRldGFpbHMvYmxvZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return BlogDetailsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-blog-details",
                templateUrl: "./blog-details.component.html",
                styleUrls: ["./blog-details.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/contact-form/contact-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/landing/components/contact-form/contact-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");





var _c0 = function () { return { y: "-120px", opacity: "0", delay: "100ms", duration: "400ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
function ContactFormComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactFormComponent_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.success = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Your Message Sent succefully");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
} }
var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
        this.formValues = {
            'email': null,
            'name': null,
            'subject': null,
            'message': null,
        };
        this.error = null;
        this.success = null;
    }
    ContactFormComponent.prototype.ngOnInit = function () { };
    ContactFormComponent.prototype.submitForm = function (form) {
        this.formValues.email = form.value.email;
        this.formValues.name = form.value.name;
        this.formValues.subject = form.value.subject;
        this.formValues.message = form.value.message;
        this.success = true;
    };
    ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); };
    ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], decls: 34, vars: 2, consts: [["id", "contacts-wrap", 1, "contact-form-wrap", "light-gray", "p-t-b-80"], [1, "container"], [1, "row"], [1, "form-wrap", "col-md-6", "mb-4"], [1, "section-header", "mb-5"], [1, "font-weight-bold"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["role", "form", 1, "row", "form", 3, "ngSubmit"], ["contactForm", "ngForm"], [1, "form-group", "mb-4", "col-md-6"], ["for", ""], [1, "eva", "eva-person-outline"], ["type", "text", "name", "Name", "id", "", "placeholder", "Nombre", "required", "", "ngModel", "", 1, "form-control"], [1, "eva", "eva-email-outline"], ["type", "email", "required", "", "name", "email", "email", "", "ngModel", "", "placeholder", "Correo", "aria-describedby", "helpId", 1, "form-control"], [1, "form-group", "mb-4", "col-md-12"], [1, "eva", "eva-edit-2-outline"], ["type", "text", "required", "", "name", "subject", "ngModel", "", "placeholder", "Asunto", "aria-describedby", "helpId", 1, "form-control"], [1, "eva", "eva-edit-outline"], ["placeholder", "Escribe tu mensaje aqui", "required", "", "name", "message", "ngModel", "", "rows", "5", 1, "form-control"], [1, "form-group", "col-md-12"], ["type", "submit", 1, "btn", "btn-block", "half-button", "form-submit-button", "btn-large", "btn-gradient", 3, "disabled"], [1, "col-md-6", "align-items-center"], [1, "right-contact-wrap", "ml-5"], ["src", "./assets/images/landing/svg/contact2.svg", "alt", "Image", 1, "img-responsive", "zoom-fade"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
            var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Comunicate con nosotros!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ContactFormComponent_div_9_Template, 6, 4, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); return ctx.submitForm(_r38); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "textarea", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Enviar mensaje ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r38.valid);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"]], styles: ["#contacts-wrap[_ngcontent-%COMP%] {\n  background-color: #f1bc32 !important;\n}\n\n.form-submit-button[_ngcontent-%COMP%] {\n  background: #195267 !important;\n  color: white;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2NvbnRhY3QtZm9ybS9DOlxcVXNlcnNcXE1hcmNvXFxEZXNrdG9wXFxkZXhhbVxcZGV4YW0tYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGxhbmRpbmdcXGNvbXBvbmVudHNcXGNvbnRhY3QtZm9ybVxcY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFjdHMtd3JhcHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFiYzMyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLXN1Ym1pdC1idXR0b257XHJcbiAgYmFja2dyb3VuZDogIzE5NTI2NyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiI2NvbnRhY3RzLXdyYXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFiYzMyICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLXN1Ym1pdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTk1MjY3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufSJdfQ== */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return ContactFormComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-contact-form",
                templateUrl: "./contact-form.component.html",
                styleUrls: ["./contact-form.component.scss"],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/demos/demos.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/landing/components/demos/demos.component.ts ***!
  \*******************************************************************/
/*! exports provided: DemosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemosComponent", function() { return DemosComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/scrollTo.directives */ "./src/app/views/landing/helpers/scrollTo.directives.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var DemosComponent = /** @class */ (function () {
    function DemosComponent() {
        this.isCollapsed = true;
    }
    DemosComponent.prototype.ngOnInit = function () {
    };
    DemosComponent.ɵfac = function DemosComponent_Factory(t) { return new (t || DemosComponent)(); };
    DemosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DemosComponent, selectors: [["app-demos"]], decls: 224, vars: 6, consts: [["id", "home-header", 1, "navbar", "navbar-expand-lg", "text-16"], [1, "container"], [1, "d-flex", "flex-grow-1", "mobile_menu"], [1, "w-100", "d-lg-none", "d-block"], ["href", "# ", 1, "navbar-brand-two", "mx-auto", "d-inline-block"], ["src", "./assets/images/landing/lOGO_d/logo_white.png ", "alt", "logo "], [1, "w-100", "text-right"], ["type", "button ", "aria-controls", "collapseExample ", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "eva", "eva-menu-outline", "text-30", "text-white"], ["id", "collapseExample ", 1, "collapse", "navbar-collapse", "flex-grow-1", "text-right", 3, "ngbCollapse"], [1, "navbar-nav", "ml-auto", "flex-nowrap"], [1, "nav-item"], ["href", "# ", "scrollTo", "intro-wrap", 1, "nav-link", "m-2", "menu-item", "nav-active"], ["href", "# ", "scrollTo", "demos-wrap", 1, "nav-link", "m-2", "menu-item", "nav-active"], ["href", "# ", "scrollTo", "features-wrap", 1, "nav-link", "m-2", "menu-item"], ["id", "intro-wrap", 1, "demo-intro-Wrap", "bg-primary", "text-left", "text-white"], [1, "row"], [1, "col-lg", "demo-intro-LeftSection", "pb-5"], [1, "introTitle", "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "introDescription", "text-20", "mb-4"], [1, "introList", "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "demo-intro-Buttons"], ["scrollTo", "demos-wrap", "href", "# ", "role", "button ", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase"], ["id", " ", "target", "_blank", "href", "https://themeforest.net/item/dexam-angular-bootstrap-app-landing-page/23137988", "role", "button ", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-lg", "demo-intro-RightSection", "d-flex", "align-items-center"], [1, "demo-intro-ProductImage"], ["src", "./assets/images/landing/header/demo.svg", "alt", " ", 1, "img-responsive"], [1, "overlay"], ["id", "demos-wrap", 1, "work1Wrap"], [1, "section-header", "col-md-12", "mb-5"], [1, "font-weight-bold", "mb-3"], [1, "col-md-6", "mb-4"], [1, "card", "o-hidden"], ["routerLink", "/landing/v1"], ["src", "./assets/images/landing/demos/1.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body", "text-center"], [1, "card-title", "font-weight-bold", "m-0"], [1, "card-footer", "text-center"], ["routerLink", "/landing/v1", 1, "btn", "btn-primary"], ["routerLink", "/landing/v2"], ["src", "./assets/images/landing/demos/2.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v2", 1, "btn", "btn-primary"], ["routerLink", "/landing/v3"], ["src", "./assets/images/landing/demos/3.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v3", 1, "btn", "btn-primary"], ["routerLink", "/landing/v4"], ["src", "./assets/images/landing/demos/4.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v4", 1, "btn", "btn-primary"], ["routerLink", "/landing/v5"], ["src", "./assets/images/landing/demos/5.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v5", 1, "btn", "btn-primary"], ["routerLink", "/landing/v6"], ["src", "./assets/images/landing/demos/6.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v6", 1, "btn", "btn-primary"], ["routerLink", "/landing/v7"], ["src", "./assets/images/landing/demos/7.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v7", 1, "btn", "btn-primary"], ["routerLink", "/landing/v8"], ["src", "./assets/images/landing/demos/8.png", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v8", 1, "btn", "btn-primary"], ["routerLink", "/landing/v9"], ["src", "./assets/images/landing/demos/9.png", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v9", 1, "btn", "btn-primary"], ["routerLink", "/landing/v10"], ["src", "./assets/images/landing/demos/10.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v10", 1, "btn", "btn-primary"], ["routerLink", "/landing/v11"], ["src", "./assets/images/landing/demos/11.png", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v11", 1, "btn", "btn-primary"], ["id", "features-wrap", 1, "features_wrap", "p-t-b-80"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-4", "mb-4"], [1, "card"], [1, "card-body", "p-5", "text-center"], [1, "card-title", "pt-2", "font-weight-medium"], [1, "col-md-12", "mt-4", "text-center"], ["scrollTo", "demos-wrap", "href", "# ", "role", "button ", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase"], ["id", " ", "target", "_blank", "href", "https://themeforest.net/item/dexam-angular-bootstrap-app-landing-page/23137988", "role", "button ", 1, "btn", "btn-success", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase"]], template: function DemosComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemosComponent_Template_button_click_7_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Demos");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Features");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "section", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h1", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Dexam- Angular+HTML App Landing Page");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Dexam is highly customizable Angular 9 + Bootstrap 4 Landing Page. Dexam is built with Official @angular/cli tool and uses NG Bootstrap .");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Angular Authentication Pages ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Super Flexible And Customizable ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " View Demos");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Buy Dexam ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "section", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h2", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Ten Amazing Demos");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "All Sections are individual Components So You can use whatever You want .");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Version One");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Version Two");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "img", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Version Three");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "a", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "img", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Version Four");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "img", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Version Five");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "a", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "a", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "img", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Version Six");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "a", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "a", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "img", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Version Seven");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "a", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "a", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "img", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Version Eight");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "a", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "a", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "img", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Version Nine");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "a", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "a", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "img", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Version Ten");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "a", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "a", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "img", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Version Eleven");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "section", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "h2", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Some Features Of Dexam");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Angular CLI");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Responsive");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Major Browser Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "NGU Carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "NG-Bootstrap");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Easy to Customize");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "SignUp Page");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "SignIn Page");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Forgot password page");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "a", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, " View Demos");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "a", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, " Buy Dexam ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0)));
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_3__["ScrollToDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["#home-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background: transparent !important;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 5px 0;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  z-index: 9999;\n  position: absolute;\n}\n#home-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\nspan.navbar-toggler-icon[_ngcontent-%COMP%]   .eva[_ngcontent-%COMP%] {\n  -webkit-text-fill-color: #fff;\n}\n.mobile_menu[_ngcontent-%COMP%] {\n  height: 60px;\n  align-items: center;\n}\n.mobile_menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n}\n#home-header[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n  height: auto;\n}\n.hometop-btn[_ngcontent-%COMP%]:hover     .mat-button-focus-overlay {\n  display: none;\n}\n#home-header[_ngcontent-%COMP%]:not(.header-fixed)   .hometop-btn[_ngcontent-%COMP%]     .mat-button-ripple {\n  top: -22px;\n  bottom: -22px;\n}\n.home-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.home-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inherit;\n}\n#menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 5px;\n  top: 10px;\n}\n.icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media (max-width: 991px) {\n  #home-header[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  #home-header[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n    height: 60px;\n    padding: 0;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .header-mobile-top[_ngcontent-%COMP%] {\n    padding: 13px 0;\n  }\n\n  #menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n\n  .home-logo[_ngcontent-%COMP%] {\n    margin-left: 15px;\n  }\n\n  .top-menu[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .top-menu[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100% !important;\n    flex: none !important;\n    background: #f3f3f3;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .top-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    line-height: 56px !important;\n  }\n}\n.navbar-toggler[_ngcontent-%COMP%]:hover, .navbar-toggler[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n}\n.demo-intro-Wrap[_ngcontent-%COMP%] {\n  padding: 180px 0px 30px;\n  color: #fff !important;\n  overflow: hidden;\n  position: relative;\n  z-index: 99;\n}\n.demo-intro-Wrap[_ngcontent-%COMP%]   .demo-intro-RightSection[_ngcontent-%COMP%] {\n  position: relative;\n}\n.demo-intro-Wrap[_ngcontent-%COMP%]   .demo-intro-RightSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.demo-intro-Wrap[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  opacity: 1;\n}\n.demo-intro-Wrap[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  height: 100%;\n  background-size: cover;\n  position: absolute;\n  bottom: -8px;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  background-size: cover;\n}\n@media only screen and (max-width: 992px) {\n  .demo-intro-Wrap[_ngcontent-%COMP%]   .demo-intro-LeftSection[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n}\n@media only screen and (max-width: 765px) {\n  .mobile_menu[_ngcontent-%COMP%] {\n    height: 60px;\n    align-items: center;\n    padding: 0px 20px;\n  }\n}\n@media only screen and (max-width: 746px) {\n  .navbar-collapse[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    flex-grow: 1;\n    align-items: center;\n    background: #2f3883 !important;\n    margin-top: 0px;\n    text-align: center;\n  }\n\n  li.nav-item[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2RlbW9zL0M6XFxVc2Vyc1xcTWFyY29cXERlc2t0b3BcXGRleGFtXFxkZXhhbS1hbmd1bGFyL3NyY1xcYXBwXFx2aWV3c1xcbGFuZGluZ1xcY29tcG9uZW50c1xcZGVtb3NcXGRlbW9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvZGVtb3MvZGVtb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7QUNFSjtBREVBO0VBQ0UsNkJBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRUo7QURFQTtFQUNFLFlBQUE7QUNDRjtBREVBO0VBQ0UsYUFBQTtBQ0NGO0FERUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ0NGO0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsZ0JBQUE7QUNFSjtBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDRjtBREdFO0VBQ0UsZUFBQTtBQ0FKO0FESUE7RUFDRTtJQUNFLFVBQUE7RUNERjs7RURHQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDQUY7O0VERUE7SUFDRSxlQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxjQUFBO0VDRUY7O0VEQUE7SUFDRSx1QkFBQTtFQ0dGOztFRERBO0lBQ0UsaUJBQUE7RUNJRjs7RURGQTtJQUNFLHdCQUFBO0VDS0Y7O0VESEE7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ01GOztFREpBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSw0QkFBQTtFQ09GO0FBQ0Y7QURKQTs7RUFFRSxxQkFBQTtFQUNBLGFBQUE7QUNNRjtBREZBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDS0Y7QURKRTtFQUNFLGtCQUFBO0FDTUo7QURMSTtFQUNFLG1CQUFBO0FDT047QURKRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNNSjtBREVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFQSxzQkFBQTtBQ0RKO0FES0E7RUFFSTtJQUNFLGtCQUFBO0VDSEo7QUFDRjtBRE1BO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQ0pGO0FBQ0Y7QURNQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ0pGOztFRE1BO0lBQ0Usa0JBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2RlbW9zL2RlbW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XHJcbiAgfVxyXG59XHJcblxyXG5zcGFuLm5hdmJhci10b2dnbGVyLWljb24gLmV2YSB7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tb2JpbGVfbWVudSB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYSB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICB9XHJcbn1cclxuXHJcbiNob21lLWhlYWRlciA+IC5jb250YWluZXIge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmhvbWV0b3AtYnRuOmhvdmVyIDo6bmctZGVlcCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jaG9tZS1oZWFkZXI6bm90KC5oZWFkZXItZml4ZWQpIC5ob21ldG9wLWJ0biA6Om5nLWRlZXAgLm1hdC1idXR0b24tcmlwcGxlIHtcclxuICB0b3A6IC0yMnB4O1xyXG4gIGJvdHRvbTogLTIycHg7XHJcbn1cclxuXHJcbi5ob21lLWxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG4jbWVudS10b2dnbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbi1idXR0b24ge1xyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAjaG9tZS1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgI2hvbWUtaGVhZGVyID4gLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAubWVudS1vcGVuZWQ6aG9zdCAuaGVhZGVyLW1vYmlsZS10b3Age1xyXG4gICAgcGFkZGluZzogMTNweCAwO1xyXG4gIH1cclxuICAjbWVudS10b2dnbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5tZW51LW9wZW5lZDpob3N0IC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5ob21lLWxvZ28ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIC50b3AtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tZW51LW9wZW5lZDpob3N0IC50b3AtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgfVxyXG4gIC5tZW51LW9wZW5lZDpob3N0IC50b3AtbWVudSBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXI6aG92ZXIsXHJcbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8vIGludHJvIHBhcnRcclxuLmRlbW8taW50cm8tV3JhcCB7XHJcbiAgcGFkZGluZzogMTgwcHggMHB4IDMwcHg7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA5OTtcclxuICAuZGVtby1pbnRyby1SaWdodFNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW1nIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMkEyNjNCO1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0yOWRlZywgcmdiKDE5MywgMTUsIDY1KSAwLCByZ2IoMzUsIDU5LCAxMzYpIDEwMCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTI5ZGVnLCByZ2IoMTkzLCAxNSwgNjUpIDAsIHJnYigzNSwgNTksIDEzNikgMTAwJSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC0yOWRlZywgcmdiKDE5MywgMTUsIDY1KSAwLCByZ2IoMzUsIDU5LCAxMzYpIDEwMCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC0yOWRlZywgcmdiKDE5MywgMTUsIDY1KSAwLCByZ2IoMzUsIDU5LCAxMzYpIDEwMCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0yOWRlZywgcmdiKDE5MywgMTUsIDY1KSAwLCByZ2IoMzUsIDU5LCAxMzYpIDEwMCUpO1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC04cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIC8vIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9sYW5kaW5nL3BhdHRlcm4vYmcucG5nKSBib3R0b20gbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuZGVtby1pbnRyby1XcmFwIHtcclxuICAgIC5kZW1vLWludHJvLUxlZnRTZWN0aW9uIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NXB4KSB7XHJcbiAgLm1vYmlsZV9tZW51IHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDZweCkge1xyXG4gIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmYzODgzICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGxpLm5hdi1pdGVtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiI2hvbWUtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiA5OTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4jaG9tZS1oZWFkZXIgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xufVxuXG5zcGFuLm5hdmJhci10b2dnbGVyLWljb24gLmV2YSB7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZmZmO1xufVxuXG4ubW9iaWxlX21lbnUge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubW9iaWxlX21lbnUgYSB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbiNob21lLWhlYWRlciA+IC5jb250YWluZXIge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ob21ldG9wLWJ0bjpob3ZlciA6Om5nLWRlZXAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNob21lLWhlYWRlcjpub3QoLmhlYWRlci1maXhlZCkgLmhvbWV0b3AtYnRuIDo6bmctZGVlcCAubWF0LWJ1dHRvbi1yaXBwbGUge1xuICB0b3A6IC0yMnB4O1xuICBib3R0b206IC0yMnB4O1xufVxuXG4uaG9tZS1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ob21lLWxvZ28gYSB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG59XG5cbiNtZW51LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uaWNvbi1idXR0b24gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgI2hvbWUtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgI2hvbWUtaGVhZGVyID4gLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubWVudS1vcGVuZWQ6aG9zdCAuaGVhZGVyLW1vYmlsZS10b3Age1xuICAgIHBhZGRpbmc6IDEzcHggMDtcbiAgfVxuXG4gICNtZW51LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubWVudS1vcGVuZWQ6aG9zdCAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ob21lLWxvZ28ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgLnRvcC1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWVudS1vcGVuZWQ6aG9zdCAudG9wLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBmbGV4OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgfVxuXG4gIC5tZW51LW9wZW5lZDpob3N0IC50b3AtbWVudSBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5uYXZiYXItdG9nZ2xlcjpob3Zlcixcbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmRlbW8taW50cm8tV3JhcCB7XG4gIHBhZGRpbmc6IDE4MHB4IDBweCAzMHB4O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xufVxuLmRlbW8taW50cm8tV3JhcCAuZGVtby1pbnRyby1SaWdodFNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGVtby1pbnRyby1XcmFwIC5kZW1vLWludHJvLVJpZ2h0U2VjdGlvbiBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmRlbW8taW50cm8tV3JhcCAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMTtcbn1cbi5kZW1vLWludHJvLVdyYXA6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLThweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5kZW1vLWludHJvLVdyYXAgLmRlbW8taW50cm8tTGVmdFNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjVweCkge1xuICAubW9iaWxlX21lbnUge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0NnB4KSB7XG4gIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzJmMzg4MyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBsaS5uYXYtaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return DemosComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DemosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-demos',
                templateUrl: './demos.component.html',
                styleUrls: ['./demos.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/etapas/etapas.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/etapas/etapas.component.ts ***!
  \*********************************************************************/
/*! exports provided: EtapasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtapasComponent", function() { return EtapasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



function EtapasComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var etapa_r66 = ctx.$implicit;
    var i_r67 = ctx.index;
    var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r65.getPosition(i_r67));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](etapa_r66);
} }
var EtapasComponent = /** @class */ (function () {
    function EtapasComponent() {
        this.etapas = [
            "Asesoria",
            "Diseño",
            "Fabricación",
            "Instalación",
        ];
    }
    EtapasComponent.prototype.getPosition = function (i) {
        var n = this.etapas.length;
        var pos = 95 / (n - 1) * i;
        return { "left": pos + "%" };
    };
    EtapasComponent.prototype.ngOnInit = function () {
    };
    EtapasComponent.ɵfac = function EtapasComponent_Factory(t) { return new (t || EtapasComponent)(); };
    EtapasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EtapasComponent, selectors: [["app-etapas"]], decls: 6, vars: 1, consts: [[1, "barra"], [1, "line"], [1, "etapas"], ["class", "etapa", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "etapa", 3, "ngStyle"]], template: function EtapasComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ETAPAS DEL PROYECTO ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EtapasComponent_div_5_Template, 3, 2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.etapas);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".barra[_ngcontent-%COMP%] {\n  margin: 4em 0;\n}\n\n.line[_ngcontent-%COMP%] {\n  height: 0.75em;\n  width: 100%;\n  background-color: #f1bc32;\n  width: 95%;\n  margin-left: 2.5%;\n}\n\n.etapa[_ngcontent-%COMP%] {\n  background-color: #f1bc32;\n  height: 2em;\n  width: 2em;\n  border-radius: 50%;\n  position: absolute;\n}\n\n.etapas[_ngcontent-%COMP%] {\n  margin-top: -1.4em;\n  width: 100%;\n  position: relative;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2em;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin-left: -4em;\n  margin-top: 2em;\n  width: 10em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2V0YXBhcy9DOlxcVXNlcnNcXE1hcmNvXFxEZXNrdG9wXFxkZXhhbVxcZGV4YW0tYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGxhbmRpbmdcXGNvbXBvbmVudHNcXGV0YXBhc1xcZXRhcGFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvZXRhcGFzL2V0YXBhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvZXRhcGFzL2V0YXBhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJyYXtcclxuICBtYXJnaW46IDRlbSAwO1xyXG59XHJcbi5saW5le1xyXG4gIGhlaWdodDogMC43NWVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWJjMzI7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW4tbGVmdDogMi41JTtcclxufVxyXG5cclxuLmV0YXBhe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWJjMzI7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgd2lkdGg6IDJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5ldGFwYXN7XHJcbiAgbWFyZ2luLXRvcDogLTEuNGVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaDF7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5oNHtcclxuICBtYXJnaW4tbGVmdDogLTRlbTtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgd2lkdGg6IDEwZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5iYXJyYSB7XG4gIG1hcmdpbjogNGVtIDA7XG59XG5cbi5saW5lIHtcbiAgaGVpZ2h0OiAwLjc1ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFiYzMyO1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tbGVmdDogMi41JTtcbn1cblxuLmV0YXBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYmMzMjtcbiAgaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZXRhcGFzIHtcbiAgbWFyZ2luLXRvcDogLTEuNGVtO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG5oNCB7XG4gIG1hcmdpbi1sZWZ0OiAtNGVtO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIHdpZHRoOiAxMGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
    return EtapasComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EtapasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-etapas',
                templateUrl: './etapas.component.html',
                styleUrls: ['./etapas.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/faqs/faqs.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/landing/components/faqs/faqs.component.ts ***!
  \*****************************************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");




var _c0 = function () { return { y: "20px", opacity: "0", delay: "0ms", duration: "400ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
function FaqsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
} }
function FaqsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Support duration \u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FaqsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
} }
function FaqsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
} }
var FaqsComponent = /** @class */ (function () {
    function FaqsComponent() {
    }
    FaqsComponent.prototype.ngOnInit = function () {
    };
    FaqsComponent.ɵfac = function FaqsComponent_Factory(t) { return new (t || FaqsComponent)(); };
    FaqsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqsComponent, selectors: [["app-faqs"]], decls: 21, vars: 1, consts: [["id", "faqs-wrap", 1, "faqs-wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "col-sm-12", "mb-4", "mb-lg-0", "mb-md-0", "mb-4"], ["activeIds", "ngb-panel-0", 3, "closeOthers"], ["acc", "ngbAccordion"], ["title", "Why we Best of all"], ["ngbPanelContent", ""], ["ngbPanelTitle", ""], ["title", "How we serve customer"], [1, "col-md-5", "offset-md-1", "col-sm-12", "d-flex", "align-items-center"], ["src", "./assets/images/landing/svg/faqs2.svg", "alt", "", 1, "img-responsive", "w-100"]], template: function FaqsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngb-accordion", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngb-panel", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FaqsComponent_ng_template_13_Template, 2, 4, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ngb-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FaqsComponent_ng_template_15_Template, 5, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FaqsComponent_ng_template_16_Template, 2, 4, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ngb-panel", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FaqsComponent_ng_template_18_Template, 2, 4, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelTitle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9mYXFzL2ZhcXMuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]] } });
    return FaqsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faqs',
                templateUrl: './faqs.component.html',
                styleUrls: ['./faqs.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/features-two/features-two.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/landing/components/features-two/features-two.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FeaturesTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesTwoComponent", function() { return FeaturesTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FeaturesTwoComponent = /** @class */ (function () {
    function FeaturesTwoComponent() {
    }
    FeaturesTwoComponent.prototype.ngOnInit = function () {
    };
    FeaturesTwoComponent.ɵfac = function FeaturesTwoComponent_Factory(t) { return new (t || FeaturesTwoComponent)(); };
    FeaturesTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturesTwoComponent, selectors: [["app-features-two"]], decls: 44, vars: 0, consts: [["id", "features-wrap", 1, "features_wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-12", "col-lg-6", "col-sm-12", "mb-4", "mb-lg-0"], [1, "col-md-6", "col-sm-6", "mb-4"], [1, "card"], [1, "card-body", "pt-4", "pb-4", "text-center"], [1, "eva", "eva-clock-outline", "text-36"], [1, "card-title", "pt-2", "font-weight-medium"], [1, "eva", "eva-shopping-bag-outline", "text-36"], [1, "col-md-6", "col-sm-6", "mb-4", "mb-lg-0", "mb-md-0"], [1, "eva", "eva-lock-outline", "text-36"], [1, "eva", "eva-people-outline", "text-36"], [1, "col-md-12", "col-sm-12", "col-lg-5", "offset-lg-1", "d-flex", "align-items-center"], ["src", "./assets/images/landing/svg/features2.svg", "alt", "", 1, "img-responsive", "w-100"]], template: function FeaturesTwoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our Exciting Features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Time Tracking");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem Ipsum is simply dummy text of the printing .");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sales Report");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem Ipsum is simply dummy text of the printing .");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Data Safety");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem Ipsum is simply dummy text of the printing .");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contracts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Lorem Ipsum is simply dummy text of the printing .");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9mZWF0dXJlcy10d28vZmVhdHVyZXMtdHdvLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return FeaturesTwoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-features-two',
                templateUrl: './features-two.component.html',
                styleUrls: ['./features-two.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/features/features.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/landing/components/features/features.component.ts ***!
  \*************************************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) { return new (t || FeaturesComponent)(); };
    FeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturesComponent, selectors: [["app-features"]], decls: 48, vars: 0, consts: [["id", "features-wrap", 1, "features_wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], ["animateOnScroll", "", "animationName", "animated fadeIn", 1, "col-md-6", "col-lg-6", "col-sm-12", "mb-4", "mb-lg-0"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-4"], [1, "card"], [1, "card-body", "pt-4", "pb-4", "text-center"], [1, "eva", "eva-clock-outline", "text-30"], [1, "card-title", "pt-2", "text-16"], [1, "eva", "eva-file-text-outline", "text-30"], [1, "eva", "eva-shopping-bag-outline", "text-30"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-4", "mb-lg-0"], [1, "eva", "eva-lock-outline", "text-30"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-4", "mb-lg-0", "mb-md-0"], [1, "eva", "eva-people-outline", "text-30"], [1, "eva", "eva-bell-outline", "text-30", "text-gradient"], [1, "col-md-6", "col-lg-5", "col-sm-12", "offset-lg-1", "d-flex", "align-items-center"], ["src", "./assets/images/landing/svg/features2.svg", "alt", "", 1, "img-responsive", "w-100"]], template: function FeaturesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our Exciting Features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Time Tracking");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Invoicing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sales Report");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Data Safety");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contracts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Notification");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return FeaturesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-features',
                templateUrl: './features.component.html',
                styleUrls: ['./features.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/footer/footer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/footer/footer.component.ts ***!
  \*********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 0, consts: [["id", "footer-wrap", 1, "footer_wrap"], [1, "container"], ["src", "assets/images/disenno.png"], [1, "row"], [1, "col-2"], ["src", "assets/images/logoLetras.png", 1, "logo"], [1, "col-2", "contacto"], [1, "col-5"], [1, "col-3"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "cine.fera@gmail.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+569 8655 0178");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "+569 8655 0178");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".logo[_ngcontent-%COMP%] {\n  margin-top: 4em;\n}\n\n.contacto[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  line-height: 0;\n  margin-top: 8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2Zvb3Rlci9DOlxcVXNlcnNcXE1hcmNvXFxEZXNrdG9wXFxkZXhhbVxcZGV4YW0tYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGxhbmRpbmdcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XHJcbiAgbWFyZ2luLXRvcDogNGVtO1xyXG59XHJcblxyXG4uY29udGFjdG97XHJcbiAgZm9udC1zaXplOiAwLjZlbTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBtYXJnaW4tdG9wOiA4ZW07XHJcbn1cclxuIiwiLmxvZ28ge1xuICBtYXJnaW4tdG9wOiA0ZW07XG59XG5cbi5jb250YWN0byB7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiA4ZW07XG59Il19 */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/header-white/header-white.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/landing/components/header-white/header-white.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HeaderWhiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWhiteComponent", function() { return HeaderWhiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _helpers_window_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/window.helpers */ "./src/app/views/landing/helpers/window.helpers.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/scrollTo.directives */ "./src/app/views/landing/helpers/scrollTo.directives.ts");







var _c0 = function (a0) { return { "header-fixed": a0 }; };
var HeaderWhiteComponent = /** @class */ (function () {
    function HeaderWhiteComponent(document, window) {
        this.document = document;
        this.window = window;
        this.isCollapsed = true;
        this.menuOpened = false;
    }
    HeaderWhiteComponent.prototype.ngOnInit = function () { };
    HeaderWhiteComponent.prototype.onWindowScroll = function () {
        var offset = this.window.pageYOffset ||
            this.document.documentElement.scrollTop ||
            this.document.body.scrollTop ||
            0;
        if (offset > 10) {
            this.isFixed = true;
        }
        else {
            this.isFixed = false;
        }
    };
    HeaderWhiteComponent.prototype.toggleMenu = function () {
        this.menuOpened = !this.menuOpened;
    };
    HeaderWhiteComponent.prototype.buyEgret = function () {
        this.window.open("https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi");
    };
    HeaderWhiteComponent.ɵfac = function HeaderWhiteComponent_Factory(t) { return new (t || HeaderWhiteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helpers_window_helpers__WEBPACK_IMPORTED_MODULE_2__["WINDOW"])); };
    HeaderWhiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderWhiteComponent, selectors: [["app-header-white"]], hostVars: 2, hostBindings: function HeaderWhiteComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderWhiteComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-opened", ctx.menuOpened);
        } }, decls: 39, vars: 5, consts: [["id", "home-header", 1, "navbar", "navbar-expand-lg", "text-16", 3, "ngClass"], [1, "container"], [1, "d-flex", "flex-grow-1", "mobile_menu"], [1, "w-100", "d-lg-none", "d-block"], ["href", "#", 1, "navbar-brand-two", "mx-auto", "d-inline-block"], ["src", "./assets/images/landing/lOGO_d/logo_white.png", "alt", "logo"], [1, "w-100", "text-right"], ["type", "button", "aria-controls", "collapseExample", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "eva", "eva-menu-outline", "text-30", "text-white"], ["id", "collapseExample", 1, "collapse", "navbar-collapse", "flex-grow-1", "text-right", 3, "ngbCollapse"], [1, "navbar-nav", "ml-auto", "flex-nowrap"], [1, "nav-item"], ["href", "#", "scrollTo", "intro-wrap", 1, "nav-link", "m-2", "menu-item", "nav-active"], ["href", "#", "scrollTo", "features-wrap", 1, "nav-link", "m-2", "menu-item", "nav-active"], ["href", "#", "scrollTo", "services-wrap", 1, "nav-link", "m-2", "menu-item"], ["href", "#", "scrollTo", "works-wrap", 1, "nav-link", "m-2", "menu-item"], ["href", "#", "scrollTo", "pricing-wrap", 1, "nav-link", "m-2", "menu-item"], ["href", "#", "scrollTo", "teams-wrap", 1, "nav-link", "m-2", "menu-item"], ["href", "#", "scrollTo", "testimonials-wrap", 1, "nav-link", "m-2", "menu-item"], ["href", "#", "scrollTo", "news-wrap", 1, "nav-link", "m-2", "menu-item"], ["href", "#", "scrollTo", "contacts-wrap", 1, "nav-link", "m-2", "menu-item"]], template: function HeaderWhiteComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderWhiteComponent_Template_button_click_7_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Works");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Pricing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Blog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Contact Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isFixed));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"], _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_4__["ScrollToDirective"]], styles: ["#home-header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  background: transparent;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 22px 0;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  z-index: 9999;\n}\n\n#home-header[_ngcontent-%COMP%]   span.navbar-toggler-icon[_ngcontent-%COMP%]   .eva[_ngcontent-%COMP%] {\n  -webkit-text-fill-color: #fff;\n}\n\n.header-fixed[_ngcontent-%COMP%]   span.navbar-toggler-icon[_ngcontent-%COMP%]   .eva[_ngcontent-%COMP%] {\n  -webkit-text-fill-color: #3c3754 !important;\n}\n\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\n.mobile_menu[_ngcontent-%COMP%] {\n  height: 60px;\n  align-items: center;\n}\n\n.mobile_menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n}\n\n#home-header[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.hometop-btn[_ngcontent-%COMP%]:hover     .mat-button-focus-overlay {\n  display: none;\n}\n\n#home-header[_ngcontent-%COMP%]:not(.header-fixed)   .hometop-btn[_ngcontent-%COMP%]     .mat-button-ripple {\n  top: -22px;\n  bottom: -22px;\n}\n\n.header-fixed[_ngcontent-%COMP%] {\n  position: fixed !important;\n  left: 0;\n  right: 0;\n  top: 0;\n  background: #fff !important;\n  padding: 0 !important;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n  -webkit-animation: 0.6s slideDown forwards;\n          animation: 0.6s slideDown forwards;\n  transition: all 0.5s ease-in-out !important;\n}\n\n.header-fixed[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333 !important;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\n.header-fixed[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 60px !important;\n}\n\n.header-fixed[_ngcontent-%COMP%]   .hometop-btn[_ngcontent-%COMP%] {\n  line-height: 60px !important;\n}\n\n.home-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.home-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inherit;\n}\n\n#menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 5px;\n  top: 10px;\n}\n\n.icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n@media (max-width: 991px) {\n  #home-header[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  #home-header[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n    height: 60px;\n    padding: 0;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .header-mobile-top[_ngcontent-%COMP%] {\n    padding: 13px 0;\n  }\n\n  #menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n\n  .home-logo[_ngcontent-%COMP%] {\n    margin-left: 15px;\n  }\n\n  .top-menu[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .top-menu[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100% !important;\n    flex: none !important;\n    background: #f3f3f3;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .top-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    line-height: 56px !important;\n  }\n\n  .navbar-collapse[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    flex-grow: 1;\n    align-items: center;\n    background: #fff;\n    margin-top: 0px;\n    text-align: center;\n  }\n\n  li.nav-item[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .header-fixed[_ngcontent-%COMP%]   .eva[_ngcontent-%COMP%] {\n    color: #3c3754 !important;\n  }\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:hover, .navbar-toggler[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n}\n\n@media only screen and (max-width: 765px) {\n  .mobile_menu[_ngcontent-%COMP%] {\n    height: 60px;\n    align-items: center;\n    padding: 0px 20px;\n  }\n}\n\n@media only screen and (max-width: 746px) {\n  a[_ngcontent-%COMP%] {\n    color: #333;\n    text-decoration: none;\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2hlYWRlci13aGl0ZS9DOlxcVXNlcnNcXE1hcmNvXFxEZXNrdG9wXFxkZXhhbVxcZGV4YW0tYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGxhbmRpbmdcXGNvbXBvbmVudHNcXGhlYWRlci13aGl0ZVxcaGVhZGVyLXdoaXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvaGVhZGVyLXdoaXRlL2hlYWRlci13aGl0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLHNFQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLDJDQUFBO0FDQ0Y7O0FEQUU7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtBQ0VKOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURBRTtFQUNFLGdCQUFBO0FDRUo7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREdFO0VBQ0UsZUFBQTtBQ0FKOztBRElBO0VBQ0U7SUFDRSxVQUFBO0VDREY7O0VER0E7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ0FGOztFREVBO0lBQ0UsZUFBQTtFQ0NGOztFRENBO0lBQ0UsY0FBQTtFQ0VGOztFREFBO0lBQ0UsdUJBQUE7RUNHRjs7RUREQTtJQUNFLGlCQUFBO0VDSUY7O0VERkE7SUFDRSx3QkFBQTtFQ0tGOztFREhBO0lBQ0UseUJBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNNRjs7RURKQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsNEJBQUE7RUNPRjs7RURMQTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUNRRjs7RUROQTtJQUNFLGtCQUFBO0VDU0Y7O0VEUEE7SUFDRSx5QkFBQTtFQ1VGO0FBQ0Y7O0FEUEE7O0VBRUUscUJBQUE7RUFDQSxhQUFBO0FDU0Y7O0FEUEE7RUFDRTtJQUNFLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VDVUY7QUFDRjs7QURSQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsNkJBQUE7SUFDQSxxQ0FBQTtFQ1VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvaGVhZGVyLXdoaXRlL2hlYWRlci13aGl0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDIycHggMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbiNob21lLWhlYWRlciBzcGFuLm5hdmJhci10b2dnbGVyLWljb24gLmV2YSB7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5oZWFkZXItZml4ZWQgc3Bhbi5uYXZiYXItdG9nZ2xlci1pY29uIC5ldmEge1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjM2MzNzU0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xyXG59XHJcblxyXG4ubW9iaWxlX21lbnUge1xyXG4gIGhlaWdodDogNjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGEge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4jaG9tZS1oZWFkZXIgPiAuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5ob21ldG9wLWJ0bjpob3ZlciA6Om5nLWRlZXAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2hvbWUtaGVhZGVyOm5vdCguaGVhZGVyLWZpeGVkKSAuaG9tZXRvcC1idG4gOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXJpcHBsZSB7XHJcbiAgdG9wOiAtMjJweDtcclxuICBib3R0b206IC0yMnB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWZpeGVkIHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XHJcbiAgYW5pbWF0aW9uOiAwLjZzIHNsaWRlRG93biBmb3J3YXJkcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG4gIGEge1xyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItZml4ZWQgLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItZml4ZWQgLmhvbWV0b3AtYnRuIHtcclxuICBsaW5lLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaG9tZS1sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuI21lbnUtdG9nZ2xlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNXB4O1xyXG4gIHRvcDogMTBweDtcclxufVxyXG5cclxuLmljb24tYnV0dG9uIHtcclxuICAubWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgI2hvbWUtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gICNob21lLWhlYWRlciA+IC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLm1lbnUtb3BlbmVkOmhvc3QgLmhlYWRlci1tb2JpbGUtdG9wIHtcclxuICAgIHBhZGRpbmc6IDEzcHggMDtcclxuICB9XHJcbiAgI21lbnUtdG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAubWVudS1vcGVuZWQ6aG9zdCAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaG9tZS1sb2dvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuICAudG9wLW1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWVudS1vcGVuZWQ6aG9zdCAudG9wLW1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gIH1cclxuICAubWVudS1vcGVuZWQ6aG9zdCAudG9wLW1lbnUgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogNTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgbGkubmF2LWl0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaGVhZGVyLWZpeGVkIC5ldmEge1xyXG4gICAgY29sb3I6ICMzYzM3NTQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlcjpob3ZlcixcclxuLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NXB4KSB7XHJcbiAgLm1vYmlsZV9tZW51IHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDZweCkge1xyXG4gIGEge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XHJcbiAgfVxyXG59XHJcbiIsIiNob21lLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAyMnB4IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4jaG9tZS1oZWFkZXIgc3Bhbi5uYXZiYXItdG9nZ2xlci1pY29uIC5ldmEge1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogI2ZmZjtcbn1cblxuLmhlYWRlci1maXhlZCBzcGFuLm5hdmJhci10b2dnbGVyLWljb24gLmV2YSB7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjM2MzNzU0ICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcbn1cblxuLm1vYmlsZV9tZW51IHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1vYmlsZV9tZW51IGEge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4jaG9tZS1oZWFkZXIgPiAuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaG9tZXRvcC1idG46aG92ZXIgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jaG9tZS1oZWFkZXI6bm90KC5oZWFkZXItZml4ZWQpIC5ob21ldG9wLWJ0biA6Om5nLWRlZXAgLm1hdC1idXR0b24tcmlwcGxlIHtcbiAgdG9wOiAtMjJweDtcbiAgYm90dG9tOiAtMjJweDtcbn1cblxuLmhlYWRlci1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgYW5pbWF0aW9uOiAwLjZzIHNsaWRlRG93biBmb3J3YXJkcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItZml4ZWQgYSB7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XG59XG5cbi5oZWFkZXItZml4ZWQgLmNvbnRhaW5lciB7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWZpeGVkIC5ob21ldG9wLWJ0biB7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhvbWUtbG9nbyBhIHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbn1cblxuI21lbnUtdG9nZ2xlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5pY29uLWJ1dHRvbiAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAjaG9tZS1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAjaG9tZS1oZWFkZXIgPiAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5tZW51LW9wZW5lZDpob3N0IC5oZWFkZXItbW9iaWxlLXRvcCB7XG4gICAgcGFkZGluZzogMTNweCAwO1xuICB9XG5cbiAgI21lbnUtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5tZW51LW9wZW5lZDpob3N0IC5jb250YWluZXIge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhvbWUtbG9nbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cblxuICAudG9wLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tZW51LW9wZW5lZDpob3N0IC50b3AtbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGZsZXg6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICB9XG5cbiAgLm1lbnUtb3BlbmVkOmhvc3QgLnRvcC1tZW51IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgbGkubmF2LWl0ZW0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5oZWFkZXItZml4ZWQgLmV2YSB7XG4gICAgY29sb3I6ICMzYzM3NTQgIWltcG9ydGFudDtcbiAgfVxufVxuLm5hdmJhci10b2dnbGVyOmhvdmVyLFxuLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NXB4KSB7XG4gIC5tb2JpbGVfbWVudSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQ2cHgpIHtcbiAgYSB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XG4gIH1cbn0iXX0= */"] });
    return HeaderWhiteComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderWhiteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-header-white",
                templateUrl: "./header-white.component.html",
                styleUrls: ["./header-white.component.scss"]
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: Window, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_helpers_window_helpers__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]]
            }] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }], menuOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.menu-opened"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/landing/components/header/header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/header/header.component.ts ***!
  \*********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _helpers_window_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/window.helpers */ "./src/app/views/landing/helpers/window.helpers.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");






var _c0 = function (a0) { return { "header-fixed": a0 }; };
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(document, window) {
        this.document = document;
        this.window = window;
        this.isCollapsed = true;
        this.menuOpened = false;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.onWindowScroll = function () {
        var offset = this.window.pageYOffset ||
            this.document.documentElement.scrollTop ||
            this.document.body.scrollTop ||
            0;
        if (offset > 10) {
            this.isFixed = true;
        }
        else {
            this.isFixed = false;
        }
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.menuOpened = !this.menuOpened;
    };
    HeaderComponent.prototype.hidemenu = function () {
        this.isCollapsed = true;
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helpers_window_helpers__WEBPACK_IMPORTED_MODULE_2__["WINDOW"])); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostVars: 2, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-opened", ctx.menuOpened);
        } }, decls: 3, vars: 3, consts: [["id", "home-header", 1, "navbar", "navbar-expand-lg", "text-16", 3, "ngClass"], [1, "container"], ["src", "assets/images/disenno.png"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isFixed));
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["#home-header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  background: white !important;\n  color: black !important;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 22px 0;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  z-index: 9999;\n}\n\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n  text-transform: uppercase;\n}\n\n.mobile_menu[_ngcontent-%COMP%] {\n  height: 60px;\n  align-items: center;\n}\n\n.mobile_menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n}\n\n#home-header[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.hometop-btn[_ngcontent-%COMP%]:hover     .mat-button-focus-overlay {\n  display: none;\n}\n\n#home-header[_ngcontent-%COMP%]:not(.header-fixed)   .hometop-btn[_ngcontent-%COMP%]     .mat-button-ripple {\n  top: -22px;\n  bottom: -22px;\n}\n\n.header-fixed[_ngcontent-%COMP%] {\n  position: fixed !important;\n  left: 0;\n  right: 0;\n  top: 0;\n  padding: 0 !important;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n  -webkit-animation: 0.6s slideDown forwards;\n          animation: 0.6s slideDown forwards;\n  transition: all 0.5s ease-in-out !important;\n}\n\n.header-fixed[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 60px !important;\n}\n\n.header-fixed[_ngcontent-%COMP%]   .hometop-btn[_ngcontent-%COMP%] {\n  line-height: 60px !important;\n}\n\n.home-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.home-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inherit;\n}\n\n#menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 5px;\n  top: 10px;\n}\n\n.icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  position: relative;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: black;\n  cursor: pointer;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 15px 1px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);\n  text-align: center;\n  padding: 10px;\n  cursor: pointer;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: left;\n  background: transparent;\n}\n\n\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  opacity: 0;\n  visibility: hidden;\n  transform-origin: 0% 0%;\n  transition: transform 0.3s, opacity 0.3s;\n  transform-style: preserve-3d;\n  transform: rotateX(-75deg);\n  position: absolute;\n  top: 50px;\n  \n}\n\n\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: rotateX(0deg);\n}\n\n\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 170px;\n  float: none;\n  display: list-item;\n  position: relative;\n}\n\n\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  top: -50px;\n  left: 145px;\n}\n\n\n\nli[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  content: \" +\";\n}\n\nli[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:only-child:after {\n  content: \"\";\n}\n\n@media (max-width: 991px) {\n  #home-header[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  #home-header[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n    height: 60px;\n    padding: 0;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .header-mobile-top[_ngcontent-%COMP%] {\n    padding: 13px 0;\n  }\n\n  #menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n\n  .home-logo[_ngcontent-%COMP%] {\n    margin-left: 15px;\n  }\n\n  .top-menu[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .top-menu[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100% !important;\n    flex: none !important;\n    background: #f3f3f3;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .top-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    line-height: 56px !important;\n  }\n\n  .navbar-collapse[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    flex-grow: 1;\n    align-items: center;\n    margin-top: 0px;\n    text-align: center;\n    height: 100vh;\n    overflow-y: scroll;\n  }\n\n  li.nav-item[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: none;\n    position: relative;\n    top: 10px;\n    \n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    position: relative;\n    top: 10px;\n    left: 5px;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:hover, .navbar-toggler[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n}\n\nspan.navbar-toggler-icon[_ngcontent-%COMP%]   .eva[_ngcontent-%COMP%] {\n  -webkit-text-fill-color: #fff;\n}\n\n@media only screen and (max-width: 765px) {\n  .mobile_menu[_ngcontent-%COMP%] {\n    height: 60px;\n    align-items: center;\n    padding: 0px 20px;\n  }\n}\n\n.navbar-brand-two[_ngcontent-%COMP%] {\n  width: 160px !important;\n  padding-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2hlYWRlci9DOlxcVXNlcnNcXE1hcmNvXFxEZXNrdG9wXFxkZXhhbVxcZGV4YW0tYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGxhbmRpbmdcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURBRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRUo7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxxQkFBQTtFQUNBLHNFQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREFFO0VBQ0UsZ0JBQUE7QUNFSjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FER0U7RUFDRSxlQUFBO0FDQUo7O0FES0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNGRjs7QURHRTtFQUNFLFdBQUE7QUNESjs7QURHRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREVJO0VBQ0UscUJBQUE7QUNBTjs7QURDTTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NSOztBRENNO0VBQ0UsZ0JBQUE7QUNDUjs7QURBUTtFQUNFLDZFQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NWOztBREFVO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtBQ0VaOztBREFVO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtBQ0VaOztBREFVO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBQ0VaOztBRE1BLDhCQUFBOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtBQ0pGOztBRE9BLCtCQUFBOztBQUVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNMRjs7QURRQSx3QkFBQTs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFNBLGlDQUFBOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ1BGOztBRFVBLHVEQUFBOztBQUVBO0VBQ0UsYUFBQTtBQ1JGOztBRFdBO0VBQ0UsV0FBQTtBQ1JGOztBRFdBO0VBQ0U7SUFDRSxVQUFBO0VDUkY7O0VEVUE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ1BGOztFRFNBO0lBQ0UsZUFBQTtFQ05GOztFRFFBO0lBQ0UsY0FBQTtFQ0xGOztFRE9BO0lBQ0UsdUJBQUE7RUNKRjs7RURNQTtJQUNFLGlCQUFBO0VDSEY7O0VES0E7SUFDRSx3QkFBQTtFQ0ZGOztFRElBO0lBQ0UseUJBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUNERjs7RURHQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsNEJBQUE7RUNBRjs7RURFQTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxrQkFBQTtFQ0VGOztFREFBO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLCtCQUFBO0VDR0Y7O0VEREE7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0VDSUY7O0VERkE7SUFDRSxxQkFBQTtFQ0tGO0FBQ0Y7O0FERkE7O0VBRUUscUJBQUE7RUFDQSxhQUFBO0FDSUY7O0FEREE7RUFDRSw2QkFBQTtBQ0lGOztBRERBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQ0lGO0FBQ0Y7O0FEREE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMjJweCAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm1vYmlsZV9tZW51IHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuI2hvbWUtaGVhZGVyID4gLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaG9tZXRvcC1idG46aG92ZXIgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNob21lLWhlYWRlcjpub3QoLmhlYWRlci1maXhlZCkgLmhvbWV0b3AtYnRuIDo6bmctZGVlcCAubWF0LWJ1dHRvbi1yaXBwbGUge1xyXG4gIHRvcDogLTIycHg7XHJcbiAgYm90dG9tOiAtMjJweDtcclxufVxyXG5cclxuLmhlYWRlci1maXhlZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XHJcbiAgYW5pbWF0aW9uOiAwLjZzIHNsaWRlRG93biBmb3J3YXJkcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWZpeGVkIC5jb250YWluZXIge1xyXG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWZpeGVkIC5ob21ldG9wLWJ0biB7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhvbWUtbG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGEge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbiNtZW51LXRvZ2dsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDVweDtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLWJ1dHRvbiB7XHJcbiAgLm1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIGRyb3Bkb3duIG1lbnVcclxubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGkge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgdWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMTVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSxcclxuICAgICAgICAgICAgMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogSGlkZSBEcm9wZG93bnMgYnkgRGVmYXVsdCAqL1xyXG5cclxubmF2IHVsIHVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IDAuM3M7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTc1ZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIC8qIHRoZSBoZWlnaHQgb2YgdGhlIG1haW4gbmF2ICovXHJcbn1cclxuXHJcbi8qIERpc3BsYXkgRHJvcGRvd25zIG9uIEhvdmVyICovXHJcblxyXG5uYXYgdWwgbGk6aG92ZXIgPiB1bCB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxufVxyXG5cclxuLyogRmlzcnQgVGllciBEcm9wZG93biAqL1xyXG5cclxubmF2IHVsIHVsIGxpIHtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLyogU2Vjb25kLCBUaGlyZCBhbmQgbW9yZSBUaWVyc1x0Ki9cclxuXHJcbm5hdiB1bCB1bCB1bCBsaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTUwcHg7XHJcbiAgbGVmdDogMTQ1cHg7XHJcbn1cclxuXHJcbi8qIENoYW5nZSB0aGlzIGluIG9yZGVyIHRvIGNoYW5nZSB0aGUgRHJvcGRvd24gc3ltYm9sICovXHJcblxyXG5saSA+IGE6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiICtcIjtcclxufVxyXG5cclxubGkgPiBhOm9ubHktY2hpbGQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICNob21lLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAjaG9tZS1oZWFkZXIgPiAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5tZW51LW9wZW5lZDpob3N0IC5oZWFkZXItbW9iaWxlLXRvcCB7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDA7XHJcbiAgfVxyXG4gICNtZW51LXRvZ2dsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLm1lbnUtb3BlbmVkOmhvc3QgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmhvbWUtbG9nbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbiAgLnRvcC1tZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1lbnUtb3BlbmVkOmhvc3QgLnRvcC1tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICB9XHJcbiAgLm1lbnUtb3BlbmVkOmhvc3QgLnRvcC1tZW51IGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG4gIGxpLm5hdi1pdGVtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgbmF2IHVsIHVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICAvKiB0aGUgaGVpZ2h0IG9mIHRoZSBtYWluIG5hdiAqL1xyXG4gIH1cclxuICBuYXYgdWwgdWwgdWwgbGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG4gIH1cclxuICBuYXYgdWwgbGk6aG92ZXIgPiB1bCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXI6aG92ZXIsXHJcbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbnNwYW4ubmF2YmFyLXRvZ2dsZXItaWNvbiAuZXZhIHtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjVweCkge1xyXG4gIC5tb2JpbGVfbWVudSB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kLXR3b3tcclxuICB3aWR0aDogMTYwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMWVtO1xyXG59XHJcbiIsIiNob21lLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAyMnB4IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG5hIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb2JpbGVfbWVudSB7XG4gIGhlaWdodDogNjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tb2JpbGVfbWVudSBhIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbn1cblxuI2hvbWUtaGVhZGVyID4gLmNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhvbWV0b3AtYnRuOmhvdmVyIDo6bmctZGVlcCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2hvbWUtaGVhZGVyOm5vdCguaGVhZGVyLWZpeGVkKSAuaG9tZXRvcC1idG4gOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXJpcHBsZSB7XG4gIHRvcDogLTIycHg7XG4gIGJvdHRvbTogLTIycHg7XG59XG5cbi5oZWFkZXItZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBhbmltYXRpb246IDAuNnMgc2xpZGVEb3duIGZvcndhcmRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWZpeGVkIC5jb250YWluZXIge1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1maXhlZCAuaG9tZXRvcC1idG4ge1xuICBsaW5lLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4uaG9tZS1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ob21lLWxvZ28gYSB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG59XG5cbiNtZW51LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uaWNvbi1idXR0b24gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxubmF2IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxubmF2IHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5uYXYgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5uYXYgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm5hdiB1bCBsaSB1bCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5uYXYgdWwgbGkgdWwgbGkge1xuICBib3gtc2hhZG93OiAwIDFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5uYXYgdWwgbGkgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cbm5hdiB1bCBsaSB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5uYXYgdWwgbGkgdWwgbGkgdWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLyogSGlkZSBEcm9wZG93bnMgYnkgRGVmYXVsdCAqL1xubmF2IHVsIHVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IDAuM3M7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtNzVkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgLyogdGhlIGhlaWdodCBvZiB0aGUgbWFpbiBuYXYgKi9cbn1cblxuLyogRGlzcGxheSBEcm9wZG93bnMgb24gSG92ZXIgKi9cbm5hdiB1bCBsaTpob3ZlciA+IHVsIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xufVxuXG4vKiBGaXNydCBUaWVyIERyb3Bkb3duICovXG5uYXYgdWwgdWwgbGkge1xuICB3aWR0aDogMTcwcHg7XG4gIGZsb2F0OiBub25lO1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogU2Vjb25kLCBUaGlyZCBhbmQgbW9yZSBUaWVyc1x0Ki9cbm5hdiB1bCB1bCB1bCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbiAgbGVmdDogMTQ1cHg7XG59XG5cbi8qIENoYW5nZSB0aGlzIGluIG9yZGVyIHRvIGNoYW5nZSB0aGUgRHJvcGRvd24gc3ltYm9sICovXG5saSA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIiArXCI7XG59XG5cbmxpID4gYTpvbmx5LWNoaWxkOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNob21lLWhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gICNob21lLWhlYWRlciA+IC5jb250YWluZXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLm1lbnUtb3BlbmVkOmhvc3QgLmhlYWRlci1tb2JpbGUtdG9wIHtcbiAgICBwYWRkaW5nOiAxM3B4IDA7XG4gIH1cblxuICAjbWVudS10b2dnbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm1lbnUtb3BlbmVkOmhvc3QgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaG9tZS1sb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuXG4gIC50b3AtbWVudSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1lbnUtb3BlbmVkOmhvc3QgLnRvcC1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZmxleDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIH1cblxuICAubWVudS1vcGVuZWQ6aG9zdCAudG9wLW1lbnUgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogNTZweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG5cbiAgbGkubmF2LWl0ZW0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIG5hdiB1bCB1bCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIC8qIHRoZSBoZWlnaHQgb2YgdGhlIG1haW4gbmF2ICovXG4gIH1cblxuICBuYXYgdWwgdWwgdWwgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogNXB4O1xuICB9XG5cbiAgbmF2IHVsIGxpOmhvdmVyID4gdWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufVxuLm5hdmJhci10b2dnbGVyOmhvdmVyLFxuLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5zcGFuLm5hdmJhci10b2dnbGVyLWljb24gLmV2YSB7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NXB4KSB7XG4gIC5tb2JpbGVfbWVudSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gIH1cbn1cbi5uYXZiYXItYnJhbmQtdHdvIHtcbiAgd2lkdGg6IDE2MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxZW07XG59Il19 */"] });
    return HeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-header",
                templateUrl: "./header.component.html",
                styleUrls: ["./header.component.scss"]
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: Window, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_helpers_window_helpers__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]]
            }] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }], menuOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.menu-opened"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/landing/components/home-slider/home-slider.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/landing/components/home-slider/home-slider.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HomeSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSliderComponent", function() { return HomeSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




function HomeSliderComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} }
function HomeSliderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeSliderComponent_ng_template_2_div_0_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CREACI\u00D3N ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " DE ESPACIOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "COMERCIAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "RESIDENCIAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "OFICINAS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "AREA SALUD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "UNIVERSIDADES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r59.protector);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r59.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var HomeSliderComponent = /** @class */ (function () {
    function HomeSliderComponent() {
        this.protector = true;
        this.images = [
            "assets/images/laudus2.png",
            "assets/images/KROOSBAR.jpg",
            "assets/images/foto2.jpg",
        ];
    }
    HomeSliderComponent.prototype.ngOnInit = function () {
    };
    HomeSliderComponent.ɵfac = function HomeSliderComponent_Factory(t) { return new (t || HomeSliderComponent)(); };
    HomeSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeSliderComponent, selectors: [["app-home-slider"]], decls: 3, vars: 1, consts: [[1, "carrousel"], [3, "showNavigationArrows"], ["ngbSlide", ""], ["id", "protector", 4, "ngIf"], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"], [1, "row"], [1, "col-6"], ["id", "protector"]], template: function HomeSliderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeSliderComponent_ng_template_2_Template, 22, 2, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", false);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".carrousel[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.carrousel[_ngcontent-%COMP%]   ngb-carousel[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n.carrousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n  top: 35.5%;\n  max-width: 60%;\n  left: 25%;\n  font-family: \"Montserrat\";\n  font-size: 1vw;\n}\n.carrousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 2em;\n  text-align: left;\n  font-weight: 200;\n  border-left: 1px solid #f1bc32;\n  list-style-type: none;\n}\n.carrousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #f1bc32;\n  font-size: 3.5em;\n  font-weight: 800;\n  text-align: left;\n  margin-top: 12.5%;\n}\n.carrousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 2.5em;\n  font-weight: bold;\n}\n.carrousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: 200;\n}\n[_nghost-%COMP%]     .carousel-item {\n  max-height: 100vh !important;\n  min-height: 50vh !important;\n}\n#protector[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1;\n}\n@media screen and (orientation: portrait) {\n  [_nghost-%COMP%]     .carousel-item img {\n    width: auto !important;\n    height: 65vh;\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n}\n@media screen and (orientation: landscape) {\n  [_nghost-%COMP%]     .carousel-item img {\n    width: 100% !important;\n    height: auto;\n  }\n}\n@media (max-width: 600px) {\n  .carousel-caption[_ngcontent-%COMP%] {\n    font-size: 1.25vw !important;\n    max-width: 70%;\n    left: 20% !important;\n  }\n}\n@media (min-width: 601px) and (max-width: 1200px) {\n  .carousel-caption[_ngcontent-%COMP%] {\n    max-width: 70%;\n    font-size: 1.15vw !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2hvbWUtc2xpZGVyL0M6XFxVc2Vyc1xcTWFyY29cXERlc2t0b3BcXGRleGFtXFxkZXhhbS1hbmd1bGFyL3NyY1xcYXBwXFx2aWV3c1xcbGFuZGluZ1xcY29tcG9uZW50c1xcaG9tZS1zbGlkZXJcXGhvbWUtc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvaG9tZS1zbGlkZXIvaG9tZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNFSjtBRERJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDR047QURESTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dOO0FERE07RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNHUjtBRERNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0dSO0FERUE7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7QUNDRjtBREVBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtPQUFBLGlCQUFBO0VDQ0Y7QUFDRjtBRENBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLFlBQUE7RUNDRjtBQUNGO0FERUE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsY0FBQTtJQUNBLG9CQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsNEJBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2hvbWUtc2xpZGVyL2hvbWUtc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnJvdXNlbHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbmdiLWNhcm91c2Vse1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLmNhcm91c2VsLWNhcHRpb257XHJcbiAgICB0b3A6IDM1LjUlO1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICB1bHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YxYmMzMjtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgIGNvbG9yOiAjZjFiYzMyO1xyXG4gICAgICBmb250LXNpemU6IDMuNWVtO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMi41JTtcclxuICAgIH1cclxuICAgICAgaDN7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1pdGVte1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogNTB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jcHJvdGVjdG9ye1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkge1xyXG4gIDpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbSBpbWd7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2NXZoO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcclxuICA6aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWl0ZW0gaW1ne1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxLjI1dncgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgbGVmdDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY2Fyb3VzZWwtY2FwdGlvbntcclxuICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgZm9udC1zaXplOiAxLjE1dncgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiLmNhcnJvdXNlbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXJyb3VzZWwgbmdiLWNhcm91c2VsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcnJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHRvcDogMzUuNSU7XG4gIG1heC13aWR0aDogNjAlO1xuICBsZWZ0OiAyNSU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgZm9udC1zaXplOiAxdnc7XG59XG4uY2Fycm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIHVsIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YxYmMzMjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLmNhcnJvdXNlbCAuY2Fyb3VzZWwtY2FwdGlvbiBoMSB7XG4gIGNvbG9yOiAjZjFiYzMyO1xuICBmb250LXNpemU6IDMuNWVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMi41JTtcbn1cbi5jYXJyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gaDMge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2Fycm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWl0ZW0ge1xuICBtYXgtaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XG59XG5cbiNwcm90ZWN0b3Ige1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgei1pbmRleDogMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWl0ZW0gaW1nIHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjV2aDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1pdGVtIGltZyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjI1dncgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBsZWZ0OiAyMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBmb250LXNpemU6IDEuMTV2dyAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });
    return HomeSliderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-slider',
                templateUrl: './home-slider.component.html',
                styleUrls: ['./home-slider.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-eight/intro-eight.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-eight/intro-eight.component.ts ***!
  \*******************************************************************************/
/*! exports provided: IntroEightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroEightComponent", function() { return IntroEightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var IntroEightComponent = /** @class */ (function () {
    function IntroEightComponent() {
    }
    IntroEightComponent.prototype.ngOnInit = function () {
    };
    IntroEightComponent.ɵfac = function IntroEightComponent_Factory(t) { return new (t || IntroEightComponent)(); };
    IntroEightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroEightComponent, selectors: [["app-intro-eight"]], decls: 18, vars: 0, consts: [["id", "intro-wrap", 1, "intro-eight-Wrap", "text-white", "text-center"], [1, "container"], [1, "row"], [1, "col-sm"], [1, "intro-eight-subtitle"], [1, "font-weight-bold", "mb-3", "text-white"], [1, "intro-eight-Title", "font-weight-bold", "text-42", "t-shadow", "mb-3", "text-white"], [1, "intro-eight-Description"], [1, "text-18", "mb-4"], [1, "intro-eight-Buttons", "mb-5"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "overlay"]], template: function IntroEightComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dexam Angular Landing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Be Productive While working with a team ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 admin template. Dexam is built with Official @angular/cli tool, supports AOT compilation and uses NG Bootstrap and third-party NGX packages.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1laWdodC9pbnRyby1laWdodC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return IntroEightComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroEightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro-eight',
                templateUrl: './intro-eight.component.html',
                styleUrls: ['./intro-eight.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-eleven/intro-eleven.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-eleven/intro-eleven.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IntroElevenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroElevenComponent", function() { return IntroElevenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");



var IntroElevenComponent = /** @class */ (function () {
    function IntroElevenComponent() {
    }
    IntroElevenComponent.prototype.ngOnInit = function () {
    };
    IntroElevenComponent.prototype.submitForm = function (form) {
    };
    IntroElevenComponent.ɵfac = function IntroElevenComponent_Factory(t) { return new (t || IntroElevenComponent)(); };
    IntroElevenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroElevenComponent, selectors: [["app-intro-eleven"]], decls: 21, vars: 1, consts: [["id", "intro-wrap", 1, "intro-eleven-Wrap", "text-white", "text-center"], [1, "container"], [1, "row"], [1, "col-sm"], [1, "intro-eleven-subtitle"], [1, "font-weight-bold", "mb-3", "text-white"], [1, "intro-eleven-Title", "font-weight-bold", "text-42", "t-shadow", "mb-3", "text-white"], [1, "intro-eleven-Description", "text-16"], [1, "mb-4"], [1, "intro-eleven-Buttons", "mb-5"], [1, "d-flex", "align-items-center", "justify-content-center", "subscription_form", "m-auto", 3, "ngSubmit"], ["subscription", "ngForm"], [1, "form-group"], ["type", "email", "required", "", "ngModel", "", "name", "email", "email", "", "id", "", "aria-describedby", "emailHelpId", "placeholder", "", 1, "form-control", "email_field"], ["type", "submit", 1, "btn", "btn-submit", "btn-success", 3, "disabled"], [1, "overlay"]], template: function IntroElevenComponent_Template(rf, ctx) { if (rf & 1) {
            var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dexam Angular Landing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your complete Angular App Landing Page ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing template. Dexam is built with Official @angular/cli tool and uses NG Bootstrap and third-party packages. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function IntroElevenComponent_Template_form_ngSubmit_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx.submitForm(_r57); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Subscribe Now");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r57.valid);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1lbGV2ZW4vaW50cm8tZWxldmVuLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return IntroElevenComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroElevenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro-eleven',
                templateUrl: './intro-eleven.component.html',
                styleUrls: ['./intro-eleven.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-five/intro-five.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-five/intro-five.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IntroFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroFiveComponent", function() { return IntroFiveComponent; });
/* harmony import */ var _shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var IntroFiveComponent = /** @class */ (function () {
    function IntroFiveComponent() {
    }
    IntroFiveComponent.prototype.ngOnInit = function () {
    };
    IntroFiveComponent.ɵfac = function IntroFiveComponent_Factory(t) { return new (t || IntroFiveComponent)(); };
    IntroFiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroFiveComponent, selectors: [["app-intro-five"]], decls: 25, vars: 4, consts: [["id", "intro-wrap", 1, "intro-five-Wrap", "bg-primary", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro-five-LeftSection", "pb-5"], [1, "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro-five-Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-md-6", "intro-five-RightSection", "d-flex", "align-items-center"], [1, "intro-five-ProductImage"], ["src", "./assets/images/landing/svg/v5-header.svg", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function IntroFiveComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "New way to Build your Dreams ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing Pages. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Minimal, Intuitive and Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Super Flexible And Customizable");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1maXZlL2ludHJvLWZpdmUuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return IntroFiveComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroFiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-intro-five',
                templateUrl: './intro-five.component.html',
                styleUrls: ['./intro-five.component.scss'],
                animations: [_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-four/intro-four.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-four/intro-four.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IntroFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroFourComponent", function() { return IntroFourComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var IntroFourComponent = /** @class */ (function () {
    function IntroFourComponent() {
    }
    IntroFourComponent.prototype.ngOnInit = function () {
    };
    IntroFourComponent.ɵfac = function IntroFourComponent_Factory(t) { return new (t || IntroFourComponent)(); };
    IntroFourComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroFourComponent, selectors: [["app-intro-four"]], decls: 25, vars: 4, consts: [["id", "intro-wrap", 1, "intro-four-Wrap", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro-four-LeftSection", "pb-5"], [1, "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro-four-Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-md-6", "intro-four-RightSection", "d-flex", "align-items-center"], [1, "intro-four-ProductImage"], ["src", "./assets/images/landing/svg/v4-header3.svg", "alt", "", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function IntroFourComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "A Place to Keep your Projects secure");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing Pages.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Minimal, Intuitive and Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Super Flexible And Customizable");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1mb3VyL2ludHJvLWZvdXIuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return IntroFourComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroFourComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-intro-four',
                templateUrl: './intro-four.component.html',
                styleUrls: ['./intro-four.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-nine/intro-nine.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-nine/intro-nine.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IntroNineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroNineComponent", function() { return IntroNineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");




function IntroNineComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r55.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function IntroNineComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r56.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var IntroNineComponent = /** @class */ (function () {
    function IntroNineComponent() {
        this.images = [
            "assets/images/laudus2.png",
            "assets/images/KROOSBAR.jpg",
            "assets/images/foto2.jpg",
        ];
    }
    IntroNineComponent.prototype.ngOnInit = function () {
    };
    IntroNineComponent.ɵfac = function IntroNineComponent_Factory(t) { return new (t || IntroNineComponent)(); };
    IntroNineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroNineComponent, selectors: [["app-intro-nine"]], decls: 4, vars: 0, consts: [[1, "carrousel"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"]], template: function IntroNineComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IntroNineComponent_ng_template_2_Template, 7, 1, "ng-template", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IntroNineComponent_ng_template_3_Template, 7, 1, "ng-template", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]], styles: [".carrousel[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.carrousel[_ngcontent-%COMP%]   ngb-carousel[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2ludHJvLW5pbmUvQzpcXFVzZXJzXFxNYXJjb1xcRGVza3RvcFxcZGV4YW1cXGRleGFtLWFuZ3VsYXIvc3JjXFxhcHBcXHZpZXdzXFxsYW5kaW5nXFxjb21wb25lbnRzXFxpbnRyby1uaW5lXFxpbnRyby1uaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvaW50cm8tbmluZS9pbnRyby1uaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1uaW5lL2ludHJvLW5pbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fycm91c2Vse1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBuZ2ItY2Fyb3VzZWx7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxufVxyXG4iLCIuY2Fycm91c2VsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNhcnJvdXNlbCBuZ2ItY2Fyb3VzZWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]] } });
    return IntroNineComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroNineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro-nine',
                templateUrl: './intro-nine.component.html',
                styleUrls: ['./intro-nine.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-seven/intro-seven.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-seven/intro-seven.component.ts ***!
  \*******************************************************************************/
/*! exports provided: IntroSevenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroSevenComponent", function() { return IntroSevenComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var IntroSevenComponent = /** @class */ (function () {
    function IntroSevenComponent() {
    }
    IntroSevenComponent.prototype.ngOnInit = function () {
    };
    IntroSevenComponent.ɵfac = function IntroSevenComponent_Factory(t) { return new (t || IntroSevenComponent)(); };
    IntroSevenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroSevenComponent, selectors: [["app-intro-seven"]], decls: 25, vars: 4, consts: [["id", "intro-wrap", 1, "intro-seven-Wrap", "bg-primary", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro-seven-LeftSection", "pb-5"], [1, "introTitle", "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "introDescription", "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro-seven-Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-md-6", "intro-seven-RightSection", "d-flex", "align-items-center"], [1, "intro-seven-ProductImage"], ["src", "./assets/images/landing/svg/v7-header.svg", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function IntroSevenComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Manage Your Entire Business with one App ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 admin template. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Minimal, Intuitive and Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Super Flexible And Customizable");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1zZXZlbi9pbnRyby1zZXZlbi5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return IntroSevenComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroSevenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-intro-seven',
                templateUrl: './intro-seven.component.html',
                styleUrls: ['./intro-seven.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-six/intro-six.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-six/intro-six.component.ts ***!
  \***************************************************************************/
/*! exports provided: IntroSixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroSixComponent", function() { return IntroSixComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var IntroSixComponent = /** @class */ (function () {
    function IntroSixComponent() {
    }
    IntroSixComponent.prototype.ngOnInit = function () {
    };
    IntroSixComponent.ɵfac = function IntroSixComponent_Factory(t) { return new (t || IntroSixComponent)(); };
    IntroSixComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroSixComponent, selectors: [["app-intro-six"]], decls: 25, vars: 4, consts: [["id", "intro-wrap", 1, "intro-six-Wrap", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro-six-LeftSection", "pb-5"], [1, "introTitle", "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "introDescription", "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro-six-Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-md-6", "intro-six-RightSection", "d-flex", "align-items-center"], [1, "intro-six-ProductImage"], ["src", "./assets/images/landing/svg/v6-header.svg", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function IntroSixComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Build Relationships That infulence Your Business ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing Page.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Minimal, Intuitive and Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Super Flexible And Customizable");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1zaXgvaW50cm8tc2l4LmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return IntroSixComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroSixComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-intro-six',
                templateUrl: './intro-six.component.html',
                styleUrls: ['./intro-six.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-ten/intro-ten.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-ten/intro-ten.component.ts ***!
  \***************************************************************************/
/*! exports provided: IntroTenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroTenComponent", function() { return IntroTenComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var IntroTenComponent = /** @class */ (function () {
    function IntroTenComponent() {
    }
    IntroTenComponent.prototype.ngOnInit = function () {
    };
    IntroTenComponent.ɵfac = function IntroTenComponent_Factory(t) { return new (t || IntroTenComponent)(); };
    IntroTenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroTenComponent, selectors: [["app-intro-ten"]], decls: 28, vars: 4, consts: [["id", "intro-wrap", 1, "intro-ten-Wrap", "bg-primary", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro-ten-LeftSection", "pb-3"], [1, "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro-ten-Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-md-6", "intro-ten-RightSection", "d-flex", "align-items-center"], [1, "intro-ten-ProductImage"], ["src", "./assets/images/landing/svg/v10-header4.svg", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function IntroTenComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "More Effecient CRM Software for you.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing Pages. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Minimal, Intuitive and Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Authentication Pages ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Super Flexible And Customizable");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby10ZW4vaW50cm8tdGVuLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return IntroTenComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroTenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-intro-ten',
                templateUrl: './intro-ten.component.html',
                styleUrls: ['./intro-ten.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-three/intro-three.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-three/intro-three.component.ts ***!
  \*******************************************************************************/
/*! exports provided: IntroThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroThreeComponent", function() { return IntroThreeComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "400ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var IntroThreeComponent = /** @class */ (function () {
    function IntroThreeComponent() {
    }
    IntroThreeComponent.prototype.ngOnInit = function () {
    };
    IntroThreeComponent.ɵfac = function IntroThreeComponent_Factory(t) { return new (t || IntroThreeComponent)(); };
    IntroThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroThreeComponent, selectors: [["app-intro-three"]], decls: 25, vars: 4, consts: [["id", "intro-wrap", 1, "intro-three-Wrap", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro-three-LeftSection", "pb-5"], [1, "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro-three-Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-md-6", "intro-three-RightSection", "d-flex", "align-items-center"], [1, "intro-three-ProductImage"], ["src", "./assets/images/landing/svg/v3-header.svg", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function IntroThreeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Live Your life with Passion and Dreams ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing Pages. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Minimal, Intuitive and Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Super Flexible And Customizable");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby10aHJlZS9pbnRyby10aHJlZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return IntroThreeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroThreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-intro-three',
                templateUrl: './intro-three.component.html',
                styleUrls: ['./intro-three.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro1/intro1.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/intro1/intro1.component.ts ***!
  \*********************************************************************/
/*! exports provided: Intro1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro1Component", function() { return Intro1Component; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");



var Intro1Component = /** @class */ (function () {
    function Intro1Component() {
    }
    Intro1Component.prototype.ngOnInit = function () { };
    Intro1Component.ɵfac = function Intro1Component_Factory(t) { return new (t || Intro1Component)(); };
    Intro1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Intro1Component, selectors: [["app-intro1"]], decls: 9, vars: 0, consts: [["id", "intro-wrap", 1, "intro1Wrap", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro1LeftSection", "pb-5"], [1, "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "text-20", "mb-4"], [1, "overlay"]], template: function Intro1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Your complete Angular App Landing Page ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing template. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, styles: [".intro1-wrap[_ngcontent-%COMP%] {\n  background: red !important;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background-image: url(\"https://www.arquitecturaydiseno.es/medio/2019/10/30/salon-con-sofa-de-obra-y-sillon-amarillo-vigas-de-madera_5eb782ae_2000x1315.jpg\") !important;\n  background-size: cover !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2ludHJvMS9DOlxcVXNlcnNcXE1hcmNvXFxEZXNrdG9wXFxkZXhhbVxcZGV4YW0tYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGxhbmRpbmdcXGNvbXBvbmVudHNcXGludHJvMVxcaW50cm8xLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvaW50cm8xL2ludHJvMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1S0FBQTtFQUNBLGlDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvaW50cm8xL2ludHJvMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRybzEtd3JhcHtcclxuICBiYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm92ZXJsYXl7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cuYXJxdWl0ZWN0dXJheWRpc2Vuby5lcy9tZWRpby8yMDE5LzEwLzMwL3NhbG9uLWNvbi1zb2ZhLWRlLW9icmEteS1zaWxsb24tYW1hcmlsbG8tdmlnYXMtZGUtbWFkZXJhXzVlYjc4MmFlXzIwMDB4MTMxNS5qcGdcIikgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmludHJvMS13cmFwIHtcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cuYXJxdWl0ZWN0dXJheWRpc2Vuby5lcy9tZWRpby8yMDE5LzEwLzMwL3NhbG9uLWNvbi1zb2ZhLWRlLW9icmEteS1zaWxsb24tYW1hcmlsbG8tdmlnYXMtZGUtbWFkZXJhXzVlYjc4MmFlXzIwMDB4MTMxNS5qcGdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufSJdfQ== */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return Intro1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Intro1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-intro1",
                templateUrl: "./intro1.component.html",
                styleUrls: ["./intro1.component.scss"],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro2/intro2.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/intro2/intro2.component.ts ***!
  \*********************************************************************/
/*! exports provided: Intro2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro2Component", function() { return Intro2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");



var Intro2Component = /** @class */ (function () {
    function Intro2Component() {
    }
    Intro2Component.prototype.ngOnInit = function () {
    };
    Intro2Component.ɵfac = function Intro2Component_Factory(t) { return new (t || Intro2Component)(); };
    Intro2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Intro2Component, selectors: [["app-intro2"]], decls: 2, vars: 0, consts: [["id", "intro-wrap", 1, "intro2Wrap", "text-white", "text-center"]], template: function Intro2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngb-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRybzIvaW50cm8yLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Intro2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Intro2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro2',
                templateUrl: './intro2.component.html',
                styleUrls: ['./intro2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/left-image/left-image.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/landing/components/left-image/left-image.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LeftImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftImageComponent", function() { return LeftImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm5/ngu-carousel.js");



function LeftImageComponent_ngu_tile_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r44.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var LeftImageComponent = /** @class */ (function () {
    function LeftImageComponent() {
        this.carouselTileItems = [
            {
                // photo: "./assets/images/landing/app_screenshots/550/01.png"
                photo: "./assets/images/landing/svg/slider8.svg"
            },
            {
                photo: "./assets/images/landing/svg/slider7.svg"
                // photo: "./assets/images/landing/app_screenshots/550/02.png"
            },
            {
                photo: "./assets/images/landing/svg/slider9.svg"
                // photo: "./assets/images/landing/app_screenshots/550/03.png"
            },
            {
                photo: "./assets/images/landing/svg/slider10.svg"
                // photo: "./assets/images/landing/app_screenshots/550/04.png"
            },
            {
                photo: "./assets/images/landing/svg/slider1.svg"
                // photo: "./assets/images/landing/app_screenshots/550/05.png"
            },
            {
                photo: "./assets/images/landing/svg/slider4.svg"
                // photo: "./assets/images/landing/app_screenshots/550/01.png"
            }
        ];
        this.carouselTiles = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };
        this.carouselTile = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 3,
            speed: 250,
            point: {
                visible: true
            },
            load: 1,
            velocity: 0,
            touch: true,
            easing: 'cubic-bezier(0, 0, 0.2, 1)'
        };
    }
    LeftImageComponent.prototype.ngOnInit = function () { };
    LeftImageComponent.ɵfac = function LeftImageComponent_Factory(t) { return new (t || LeftImageComponent)(); };
    LeftImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftImageComponent, selectors: [["app-left-image"]], decls: 39, vars: 6, consts: [[1, "left-image-wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "col-sm-12", "mb-5", "mb-lg-0", "mb-md-0", "mt-mb-5", "mt-lg-5"], [3, "inputs", "dataSource"], ["myCarousel", ""], [4, "nguCarouselDef"], ["NguCarouselPrev", "", 1, "ngu_control_button", "half-button", "leftRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-left-outline"], ["NguCarouselNext", "", 1, "ngu_control_button", "half-button", "rightRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-right-outline"], [1, "col-md-5", "offset-md-1", "col-sm-12"], [1, "col-md-12", "col-sm-6", "mb-4"], [1, "card"], [1, "card-body", "pt-3", "pb-3"], [1, "card-title", "font-weight-bold"], [1, "m-0"], [1, "col-md-12", "col-sm-6", "mb-lg-0", "mb-md-0", "mb-sm-0"], ["alt", "Card image cap", 1, "img-responsive", "w-100", "mb-4", 3, "src"]], template: function LeftImageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We Ready to Provide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngu-carousel", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LeftImageComponent_ngu_tile_11_Template, 2, 1, "ngu-tile", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sales and Marketing Alignment");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Relationship-based Engagement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Transparent Pricing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.carouselTile)("dataSource", ctx.carouselTileItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r42.isFirst ? 0.5 : 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r42.isLast ? 0.5 : 1);
        } }, directives: [_ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["NguCarousel"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵg"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵe"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵd"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵj"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9sZWZ0LWltYWdlL2xlZnQtaW1hZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
    return LeftImageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-left-image",
                templateUrl: "./left-image.component.html",
                styleUrls: ["./left-image.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/logo/logo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/landing/components/logo/logo.component.ts ***!
  \*****************************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
    LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 3, vars: 0, consts: [["id", "logo", 1, "logo"], [1, "container", "center"], ["src", "assets/images/logo.png"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.center[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2xvZ28vQzpcXFVzZXJzXFxNYXJjb1xcRGVza3RvcFxcZGV4YW1cXGRleGFtLWFuZ3VsYXIvc3JjXFxhcHBcXHZpZXdzXFxsYW5kaW5nXFxjb21wb25lbnRzXFxsb2dvXFxsb2dvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsVUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbn1cclxuIiwiLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2VudGVyIGltZyB7XG4gIHdpZHRoOiAzMCU7XG59Il19 */"] });
    return LogoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/news-two/news-two.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/landing/components/news-two/news-two.component.ts ***!
  \*************************************************************************/
/*! exports provided: NewsTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsTwoComponent", function() { return NewsTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var NewsTwoComponent = /** @class */ (function () {
    function NewsTwoComponent() {
    }
    NewsTwoComponent.prototype.ngOnInit = function () {
    };
    NewsTwoComponent.ɵfac = function NewsTwoComponent_Factory(t) { return new (t || NewsTwoComponent)(); };
    NewsTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsTwoComponent, selectors: [["app-news-two"]], decls: 39, vars: 0, consts: [["id", "news-wrap", 1, "news-two-wrap", "light-gray", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "col-sm-12", "mb-lg-0", "mb-md-0", "mb-4"], [1, "card", "text-left", "o-hidden"], [1, "card_img_left", "w-40", "float-left"], ["src", "./assets/images/landing/news/news1.svg", "alt", "Card image", 1, "card-img"], [1, "card_right_content", "w-60", "p-3", "float-right"], [1, "pt-3", "pb-4"], [1, "m-0", "text-capitalize", "font-weight-bold"], [1, "font-weight-light", "text-uppercase"], [1, "font-weight-light", "pb-3"], ["routerLink", "/landing/blog-details", 1, "btn", "btn-gradient", "half-button"], [1, "col-md-6", "col-sm-12", "mb-lg-0", "mb-md-0", "mb-0"], ["src", "./assets/images/landing/news/news2.svg", "alt", "Card image", 1, "card-img"]], template: function NewsTwoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recent News From Blog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Beauty of Sunshine");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "by Alex Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Read More");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Never look backward");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "by Smith Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Read More");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9uZXdzLXR3by9uZXdzLXR3by5jb21wb25lbnQuc2NzcyJ9 */"] });
    return NewsTwoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-two',
                templateUrl: './news-two.component.html',
                styleUrls: ['./news-two.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/news/news.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/landing/components/news/news.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(); };
    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 72, vars: 0, consts: [["id", "news-wrap", 1, "news-wrap", "light-gray", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-4", "col-sm-6", "mb-lg-0", "mb-md-0", "mb-4"], [1, "card", "bg-dark", "text-white", "o-hidden"], ["src", "./assets/images/landing/news/news1.jpg", "alt", "Card image", 1, "card-img"], [1, "card-img-overlay"], [1, "text-center", "pt-4"], [1, "font-weight-bold", "mb-2", "text-white"], ["routerLink", "/landing/blog-details", 1, "btn", "btn-gradient", "half-button"], [1, "p-1", "text-left", "card-footer", "font-weight-light"], [1, "mr-2"], [1, "eva", "eva-message-circle-outline", "text-white", "mr-1"], [1, "eva", "eva-calendar-outline", "text-white", "mr-1"], [1, ""], [1, "eva", "eva-person-outline", "text-white", "mr-1"], ["src", "./assets/images/landing/news/news4.jpg", "alt", "Card image", 1, "card-img"], ["src", "./assets/images/landing/news/news3.jpg", "alt", "Card image", 1, "card-img"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recent News From Blog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Read More");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "12 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "03.12.2018");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Alex Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem ipsum dolor");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Read More");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "12 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "03.12.2018");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Alex Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Lorem ipsum dolor");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Read More");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "12 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "03.12.2018");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Alex Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MifQ== */"] });
    return NewsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/presentacion/presentacion.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/landing/components/presentacion/presentacion.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PresentacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentacionComponent", function() { return PresentacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PresentacionComponent = /** @class */ (function () {
    function PresentacionComponent() {
    }
    PresentacionComponent.prototype.ngOnInit = function () {
    };
    PresentacionComponent.ɵfac = function PresentacionComponent_Factory(t) { return new (t || PresentacionComponent)(); };
    PresentacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PresentacionComponent, selectors: [["app-presentacion"]], decls: 6, vars: 0, consts: [["id", "presentacion-wrap", 1, "presentacion-wrap"], [1, "container"], [1, "row"], [1, "col-md-6", "col-lg-6", "col-10"]], template: function PresentacionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Somos un grupo de realizadores buscando nuevas formas de hacer pel\u00EDculas");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".presentacion-wrap[_ngcontent-%COMP%] {\n  font-size: 1.7em;\n  padding: 2em 0;\n  margin-top: 2em;\n}\n.presentacion-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: 400 !important;\n  font-size: 1.4em;\n}\n.presentacion-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.presentacion-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: black !important;\n  text-align: center;\n  font-weight: 800 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL3ByZXNlbnRhY2lvbi9DOlxcVXNlcnNcXE1hcmNvXFxEZXNrdG9wXFxkZXhhbVxcZGV4YW0tYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGxhbmRpbmdcXGNvbXBvbmVudHNcXHByZXNlbnRhY2lvblxccHJlc2VudGFjaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvcHJlc2VudGFjaW9uL3ByZXNlbnRhY2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDRjtBREFFO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0FDRUo7QURBRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvcHJlc2VudGFjaW9uL3ByZXNlbnRhY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmVzZW50YWNpb24td3JhcHtcclxuICBmb250LXNpemU6IDEuN2VtO1xyXG4gIHBhZGRpbmc6IDJlbSAwO1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxuICBoMntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gIH1cclxuICBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiLnByZXNlbnRhY2lvbi13cmFwIHtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgcGFkZGluZzogMmVtIDA7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cbi5wcmVzZW50YWNpb24td3JhcCBoMiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cbi5wcmVzZW50YWNpb24td3JhcCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByZXNlbnRhY2lvbi13cmFwIGgxIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
    return PresentacionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresentacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-presentacion',
                templateUrl: './presentacion.component.html',
                styleUrls: ['./presentacion.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/landing/components/pricing-one/pricing-one.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PricingOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingOneComponent", function() { return PricingOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PricingOneComponent = /** @class */ (function () {
    function PricingOneComponent() {
    }
    PricingOneComponent.prototype.ngOnInit = function () {
    };
    PricingOneComponent.ɵfac = function PricingOneComponent_Factory(t) { return new (t || PricingOneComponent)(); };
    PricingOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingOneComponent, selectors: [["app-pricing-one"]], decls: 136, vars: 0, consts: [["id", "pricing-wrap", 1, "pricing-one-wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-sm-6", "col-md-6", "col-lg-3", "mb-lg-0", "mb-4", "pricing-single-wrap"], [1, "card", "o-hidden"], [1, "card-header", "text-center", "p-3", "mb-2"], [1, "card-title", "font-weight-bold", "mb-2", "text-uppercase"], [1, "text-uppercase", "mb-0"], [1, "card-body", "pt-0", "text-center"], [1, "card-text", "mb-2"], [1, "money", "text-shadow", "text-45", "font-weight-bold"], [1, "text-30", "font-weight-normal"], [1, "offer-lists", "mb-4"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "p-1"], [1, "list-group-item", "p-1", "text-muted"], ["href", "#", 1, "btn", "btn-gradient", "half-button", "pl-5", "pr-5", "pt-2", "pb-2"], [1, "card-header", "text-center", "p-3", "mb-2", "bg-gradient", "text-white"], [1, "card-title", "text-white", "font-weight-bold", "mb-2", "text-uppercase"], [1, "col-sm-6", "col-md-6", "col-lg-3", "mb-lg-0", "mb-md-0", "mb-sm-0", "mb-4", "pricing-single-wrap"], [1, "col-sm-6", "col-md-6", "col-lg-3", "mb-lg-0", "mb-md-0", "mb-sm-0", "pricing-single-wrap"]], template: function PricingOneComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose a Plan");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Developer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "sup", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "9");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ".00 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "/Month");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1 Users access");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "10 GB of Bandwidth");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Unlimited secure storage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "24/7 phone support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Advanced branding");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "starter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "sup", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "20");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ".00 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "/Month");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "5 Users access");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "20 GB of Bandwidth");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Unlimited secure storage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "24/7 phone support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Advanced branding");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "business");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "sup", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "60");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, ".00 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "/Month");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "10 Users access");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "40 GB of Bandwidth");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Unlimited secure storage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "24/7 phone support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Advanced branding");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "enterprise");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "sup", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "100");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, ".00 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "/Month");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "20 Users access");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Unlimited Bandwidth");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Unlimited secure storage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "24/7 phone support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Advanced branding");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9wcmljaW5nLW9uZS9wcmljaW5nLW9uZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return PricingOneComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pricing-one',
                templateUrl: './pricing-one.component.html',
                styleUrls: ['./pricing-one.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/productos-preview/productos-preview.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/landing/components/productos-preview/productos-preview.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductosPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPreviewComponent", function() { return ProductosPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ProductosPreviewComponent = /** @class */ (function () {
    function ProductosPreviewComponent() {
    }
    ProductosPreviewComponent.prototype.ngOnInit = function () {
    };
    ProductosPreviewComponent.ɵfac = function ProductosPreviewComponent_Factory(t) { return new (t || ProductosPreviewComponent)(); };
    ProductosPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductosPreviewComponent, selectors: [["app-productos-preview"]], decls: 10, vars: 0, consts: [["id", "productos-preview-wrap", 1, "productos-preview-wrap"], [1, "container"], [1, "row"], [1, "col-md-6", "col-lg-6", "col-12"], [1, "btn"], ["src", "https://cdn1.mueblesrey.com/2832-large_default/mueble-para-tv-delta.jpg"]], template: function ProductosPreviewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00BFViste nuestros productos?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "TIENDA");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".productos-preview-wrap[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  padding: 2em 0;\n  height: 15em;\n}\n.productos-preview-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 800 !important;\n  font-size: 1.4em;\n}\n.productos-preview-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.productos-preview-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: black !important;\n  text-align: center;\n  font-weight: 800 !important;\n  width: 90%;\n  margin-left: 5%;\n}\n.productos-preview-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 15em;\n  width: auto;\n  margin-top: -3em;\n  margin-left: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL3Byb2R1Y3Rvcy1wcmV2aWV3L0M6XFxVc2Vyc1xcTWFyY29cXERlc2t0b3BcXGRleGFtXFxkZXhhbS1hbmd1bGFyL3NyY1xcYXBwXFx2aWV3c1xcbGFuZGluZ1xcY29tcG9uZW50c1xccHJvZHVjdG9zLXByZXZpZXdcXHByb2R1Y3Rvcy1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvcHJvZHVjdG9zLXByZXZpZXcvcHJvZHVjdG9zLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUU7RUFDRSxrQkFBQTtBQ0VKO0FEQUU7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRUo7QURBRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL3Byb2R1Y3Rvcy1wcmV2aWV3L3Byb2R1Y3Rvcy1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3Rvcy1wcmV2aWV3LXdyYXB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBwYWRkaW5nOiAyZW0gMDtcclxuICBoZWlnaHQ6IDE1ZW07XHJcbiAgaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gIH1cclxuICBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIGhlaWdodDogMTVlbTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogLTNlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1ZW07XHJcbiAgfVxyXG59XHJcbiIsIi5wcm9kdWN0b3MtcHJldmlldy13cmFwIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgcGFkZGluZzogMmVtIDA7XG4gIGhlaWdodDogMTVlbTtcbn1cbi5wcm9kdWN0b3MtcHJldmlldy13cmFwIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG4ucHJvZHVjdG9zLXByZXZpZXctd3JhcCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2R1Y3Rvcy1wcmV2aWV3LXdyYXAgaDEge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5wcm9kdWN0b3MtcHJldmlldy13cmFwIGltZyB7XG4gIGhlaWdodDogMTVlbTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0zZW07XG4gIG1hcmdpbi1sZWZ0OiA1ZW07XG59Il19 */"] });
    return ProductosPreviewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductosPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-productos-preview',
                templateUrl: './productos-preview.component.html',
                styleUrls: ['./productos-preview.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/proyectos/proyectos.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/landing/components/proyectos/proyectos.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProyectosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosComponent", function() { return ProyectosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _etapas_etapas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etapas/etapas.component */ "./src/app/views/landing/components/etapas/etapas.component.ts");




var _c0 = function () { return { background: "black", color: "white", "font-weight": "800" }; };
var _c1 = function () { return {}; };
function ProyectosComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProyectosComponent_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); var proyecto_r62 = ctx.$implicit; var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.select(proyecto_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var proyecto_r62 = ctx.$implicit;
    var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r61.selected == proyecto_r62 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyecto_r62);
} }
var ProyectosComponent = /** @class */ (function () {
    function ProyectosComponent() {
        var _this = this;
        this.proyectos = [
            "Kross",
            "Uss",
            "Laudus",
            "UC Christus",
            "Clinica Santa María",
            "Residencial"
        ];
        this.imagenes = {
            "Kross": [],
            "Uss": [],
            "Laudus": [],
            "UC Christus": [],
            "Clinica Santa María": [],
            "Residencial": []
        };
        this.cambiarProyecto = function () {
            var i = _this.proyectos.findIndex(function (proyecto) { return proyecto == _this.selected; });
            var newIndex;
            if (i == _this.proyectos.length - 1) {
                newIndex = 0;
            }
            newIndex = i + 1;
            _this.selected = _this.proyectos[newIndex];
        };
        this.selected = this.proyectos[0];
    }
    ProyectosComponent.prototype.ngOnInit = function () {
        setInterval(this.cambiarProyecto, 5000);
    };
    ProyectosComponent.prototype.select = function (proyecto) {
        this.selected = proyecto;
    };
    ProyectosComponent.ɵfac = function ProyectosComponent_Factory(t) { return new (t || ProyectosComponent)(); };
    ProyectosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProyectosComponent, selectors: [["app-proyectos"]], decls: 12, vars: 1, consts: [["id", "proyectos-wrap", 1, "proyectos-wrap"], [1, "container"], [1, "row"], [1, "col-7"], [1, "images-container"], [1, "col-5"], [1, "lista"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", "click"]], template: function ProyectosComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PROYECTOS");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProyectosComponent_li_10_Template, 2, 4, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-etapas");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _etapas_etapas_component__WEBPACK_IMPORTED_MODULE_2__["EtapasComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".proyectos-wrap[_ngcontent-%COMP%] {\n  padding-bottom: 2em;\n}\n.proyectos-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.55em;\n  color: black !important;\n  text-align: center;\n  font-weight: 800 !important;\n  margin-bottom: 2em;\n}\n.proyectos-wrap[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 100%;\n  background-image: url(\"/assets/images/KROOSBAR.jpg\");\n  background-size: cover;\n}\n.proyectos-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2em;\n  margin: 0.25em;\n  padding-left: 1em;\n  transition: 0.3s ease;\n}\n.proyectos-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: rgba(0, 0, 0, 0.4);\n  color: white;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL3Byb3llY3Rvcy9DOlxcVXNlcnNcXE1hcmNvXFxEZXNrdG9wXFxkZXhhbVxcZGV4YW0tYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGxhbmRpbmdcXGNvbXBvbmVudHNcXHByb3llY3Rvc1xccHJveWVjdG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvcHJveWVjdG9zL3Byb3llY3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREFFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxvREFBQTtFQUNBLHNCQUFBO0FDRUo7QURBRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNFSjtBRERJO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvcHJveWVjdG9zL3Byb3llY3Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm95ZWN0b3Mtd3JhcHtcclxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAyLjU1ZW07XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICB9XHJcbiAgLmltYWdlcy1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9LUk9PU0JBUi5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBsaXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW46IDAuMjVlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnByb3llY3Rvcy13cmFwIHtcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcbn1cbi5wcm95ZWN0b3Mtd3JhcCBoMSB7XG4gIGZvbnQtc2l6ZTogMi41NWVtO1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbi5wcm95ZWN0b3Mtd3JhcCAuaW1hZ2VzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9LUk9PU0JBUi5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ucHJveWVjdG9zLXdyYXAgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC4yNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuLnByb3llY3Rvcy13cmFwIGxpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn0iXX0= */"] });
    return ProyectosComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProyectosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-proyectos',
                templateUrl: './proyectos.component.html',
                styleUrls: ['./proyectos.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/right-image/right-image.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/landing/components/right-image/right-image.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RightImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightImageComponent", function() { return RightImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm5/ngu-carousel.js");



function RightImageComponent_ngu_tile_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r48.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var RightImageComponent = /** @class */ (function () {
    function RightImageComponent() {
        this.carouselTileItems = [
            {
                // photo: "./assets/images/landing/app_screenshots/550/01.png"
                photo: "./assets/images/landing/svg/slider1.svg"
            },
            {
                photo: "./assets/images/landing/svg/slider2.svg"
                // photo: "./assets/images/landing/app_screenshots/550/02.png"
            },
            {
                photo: "./assets/images/landing/svg/slider3.svg"
                // photo: "./assets/images/landing/app_screenshots/550/03.png"
            },
            {
                photo: "./assets/images/landing/svg/slider4.svg"
                // photo: "./assets/images/landing/app_screenshots/550/04.png"
            },
            {
                photo: "./assets/images/landing/svg/slider5.svg"
                // photo: "./assets/images/landing/app_screenshots/550/05.png"
            },
            {
                photo: "./assets/images/landing/svg/slider6.svg"
                // photo: "./assets/images/landing/app_screenshots/550/01.png"
            }
        ];
        this.carouselTiles = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };
        this.carouselTile = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 3,
            speed: 250,
            point: {
                visible: true
            },
            load: 1,
            velocity: 0,
            touch: true,
            easing: "cubic-bezier(0, 0, 0.2, 1)"
        };
    }
    RightImageComponent.prototype.ngOnInit = function () { };
    RightImageComponent.ɵfac = function RightImageComponent_Factory(t) { return new (t || RightImageComponent)(); };
    RightImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RightImageComponent, selectors: [["app-right-image"]], decls: 58, vars: 6, consts: [[1, "right-image-wrap", "p-t-b-80", "light-gray"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-12", "col-lg-6", "col-sm-12", "mb-4", "mb-lg-0"], [1, "row", "m-0"], [1, "col-md-6", "col-sm-6", "mb-4"], [1, "card"], [1, "card-body", "d-flex", "pt-4", "pb-4"], [1, "mr-2"], [1, "eva", "eva-pie-chart-outline", "mr-1", "text-36"], [1, ""], [1, "card-title", "font-weight-bold"], [1, "m-0"], [1, "eva", "eva-clock-outline", "mr-1", "text-36"], [1, "col-md-6", "col-sm-6", "mb-4", "mb-lg-0", "mb-md-0", "mb-sm-0"], [1, "eva", "eva-lock-outline", "mr-1", "text-36"], [1, "col-md-6", "col-sm-6", "mb-0", "mb-lg-0", "mb-md-0", "mb-sm-0"], [1, "eva", "eva-pricetags-outline", "mr-1", "text-36"], [1, "col-md-12", "col-lg-5", "col-sm-12", "offset-lg-1"], [3, "inputs", "dataSource"], ["myCarousel", ""], [4, "nguCarouselDef"], ["NguCarouselPrev", "", 1, "ngu_control_button", "half-button", "leftRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-left-outline"], ["NguCarouselNext", "", 1, "ngu_control_button", "half-button", "rightRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-right-outline"], ["alt", "Card image cap", 1, "img-responsive", "mb-4", 3, "src"]], template: function RightImageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "What Customer Love Most");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Full Analytics ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Diagnose quickly");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Safe & Secure");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Best Pricing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ngu-carousel", 21, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RightImageComponent_ngu_tile_53_Template, 2, 1, "ngu-tile", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.carouselTile)("dataSource", ctx.carouselTileItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r46.isFirst ? 0.5 : 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r46.isLast ? 0.5 : 1);
        } }, directives: [_ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["NguCarousel"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵg"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵe"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵd"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵj"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9yaWdodC1pbWFnZS9yaWdodC1pbWFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return RightImageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-right-image",
                templateUrl: "./right-image.component.html",
                styleUrls: ["./right-image.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ServicesCauroselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesCauroselComponent", function() { return ServicesCauroselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm5/ngu-carousel.js");



function ServicesCauroselComponent_ngu_tile_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r31.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r31.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r31.text);
} }
var ServicesCauroselComponent = /** @class */ (function () {
    function ServicesCauroselComponent() {
        this.carouselTileItems = [
            {
                icon: "./assets/images/landing/services/service1.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Service One"
            },
            {
                icon: "./assets/images/landing/services/services14.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Service Two"
            },
            {
                icon: "./assets/images/landing/services/services15.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Service Three"
            },
            {
                icon: "./assets/images/landing/services/services16.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Service Four"
            },
            {
                icon: "./assets/images/landing/services/services9.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Service Five"
            },
            {
                icon: "./assets/images/landing/services/services6.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Service Six"
            }
        ];
        this.carouselTiles = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };
        this.carouselTile = {
            grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
            slide: 4,
            speed: 250,
            point: {
                visible: true
            },
            load: 2,
            velocity: 0,
            touch: true,
            easing: "cubic-bezier(0, 0, 0.2, 1)"
        };
    }
    ServicesCauroselComponent.prototype.ngOnInit = function () { };
    ServicesCauroselComponent.ɵfac = function ServicesCauroselComponent_Factory(t) { return new (t || ServicesCauroselComponent)(); };
    ServicesCauroselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesCauroselComponent, selectors: [["app-services-caurosel"]], decls: 16, vars: 6, consts: [["id", "services-wrap", 1, "services-caurosel-wrap", "light-gray"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-12"], [3, "inputs", "dataSource"], ["myCarousel", ""], [4, "nguCarouselDef"], ["NguCarouselPrev", "", 1, "ngu_control_button", "half-button", "leftRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-left-outline"], ["NguCarouselNext", "", 1, "ngu_control_button", "half-button", "rightRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-right-outline"], [1, "service-wrap"], [1, "card", "o-hidden", "mb-4"], [1, "card-header", "p-0", "text-left"], [1, "img-responsive", 3, "src"], [1, "card-body", "text-left"], [1, "card-title", "text-capitalize", "font-weight-bold"], [1, "card-text"], [1, "card-footer", "pl-3", "text-left"], ["href", "#", 1, "btn", "btn-lg", "p-1", "mr-1", "text-dark"], [1, "eva", "eva-link-2-outline"], [1, "eva", "eva-share"]], template: function ServicesCauroselComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our Services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngu-carousel", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ServicesCauroselComponent_ngu_tile_11_Template, 15, 3, "ngu-tile", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.carouselTile)("dataSource", ctx.carouselTileItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r29.isFirst ? 0.5 : 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r29.isLast ? 0.5 : 1);
        } }, directives: [_ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["NguCarousel"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵg"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵe"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵd"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵj"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9zZXJ2aWNlcy1jYXVyb3NlbC9zZXJ2aWNlcy1jYXVyb3NlbC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return ServicesCauroselComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesCauroselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-services-caurosel",
                templateUrl: "./services-caurosel.component.html",
                styleUrls: ["./services-caurosel.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/services/services.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/landing/components/services/services.component.ts ***!
  \*************************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 120, vars: 0, consts: [["id", "services-wrap", 1, "services-wrap", "light-gray"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "service-wrap", "col-md-6", "col-lg-3", "col-sm-12"], [1, "card", "o-hidden", "mb-4"], [1, "card-header", "p-0", "text-center"], ["src", "./assets/images/landing/services/service1.svg", 1, "img-responsive"], [1, "card-body"], [1, "card-title", "text-capitalize", "font-weight-bold"], [1, "card-text"], [1, "card-footer", "pl-3"], ["href", "#", 1, "btn", "btn-lg", "p-1", "mr-1", "text-dark"], [1, "eva", "eva-link-2-outline"], [1, "eva", "eva-share"], ["src", "./assets/images/landing/services/services9.svg", 1, "img-responsive"], ["src", "./assets/images/landing/services/services10.svg", 1, "img-responsive"], ["src", "./assets/images/landing/services/services5.svg", 1, "img-responsive"], [1, "card", "o-hidden", "mb-4", "mb-lg-0"], ["src", "./assets/images/landing/services/services6.svg", 1, "img-responsive"], ["src", "./assets/images/landing/services/services14.svg", 1, "img-responsive"], [1, "card", "o-hidden", "mb-4", "mb-lg-0", "mb-md-0"], ["src", "./assets/images/landing/services/services15.svg", 1, "img-responsive"], [1, "card", "o-hidden", "mb-lg-0", "mb-md-0"], ["src", "./assets/images/landing/services/services16.svg", 1, "img-responsive"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our Services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Service One");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Service Two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "With supporting text below as a natural lead-in to additional content.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Service Three");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "With supporting text below as a natural lead-in to additional content.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Service Four");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "With supporting text below as a natural lead-in to additional content.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Service Five");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "With supporting text below as a natural lead-in to additional content.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Service Six");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "With supporting text below as a natural lead-in to additional content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Service Seven");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "With supporting text below as a natural lead-in to additional content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Servcie Eight");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "With supporting text below as a natural lead-in to additional content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return ServicesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/servicios-scroll/servicios-scroll.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/landing/components/servicios-scroll/servicios-scroll.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ServiciosScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosScrollComponent", function() { return ServiciosScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ServiciosScrollComponent = /** @class */ (function () {
    function ServiciosScrollComponent() {
    }
    ServiciosScrollComponent.prototype.ngOnInit = function () {
    };
    ServiciosScrollComponent.ɵfac = function ServiciosScrollComponent_Factory(t) { return new (t || ServiciosScrollComponent)(); };
    ServiciosScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiciosScrollComponent, selectors: [["app-servicios-scroll"]], decls: 2, vars: 0, template: function ServiciosScrollComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "servicios-scroll works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9zZXJ2aWNpb3Mtc2Nyb2xsL3NlcnZpY2lvcy1zY3JvbGwuY29tcG9uZW50LnNjc3MifQ== */"] });
    return ServiciosScrollComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiciosScrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-servicios-scroll',
                templateUrl: './servicios-scroll.component.html',
                styleUrls: ['./servicios-scroll.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/team/team.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/landing/components/team/team.component.ts ***!
  \*****************************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 89, vars: 0, consts: [["id", "teams-wrap", 1, "team-wrap", "p-t-b-80", "light-gray"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "col-lg-3", "col-sm-6", "mb-lg-0", "mb-4"], [1, "card", "card-profile-1"], [1, "card-body", "text-center"], [1, "avatar", "box-shadow-2", "mb-3"], ["src", "./assets/images/landing/faces/15.jpg", "alt", ""], [1, "font-weight-medium", "card-title", "m-0"], [1, "mt-0"], [1, "btn", "btn-gradient", "half-button"], [1, "card-socials-simple", "mt-4"], ["href", "", 1, "text-20", "mr-2"], [1, "eva", "eva-twitter", "twitter"], [1, "eva", "eva-google", "google"], [1, "eva", "eva-facebook", "facebook"], ["src", "./assets/images/landing/faces/12.jpg", "alt", ""], [1, "col-md-6", "col-lg-3", "col-sm-6", "mb-lg-0", "mb-md-0", "mb-sm-0", "mb-4"], ["src", "./assets/images/landing/faces/16.jpg", "alt", ""], [1, "col-md-6", "col-lg-3", "col-sm-6", "mb-lg-0", "mb-md-0", "mb-sm-0"], ["src", "./assets/images/landing/faces/5.jpg", "alt", ""]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Meet our Team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Jhon Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "UI/UX Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact Jhon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Jassica Pearl");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "QA Tester");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Contact Jassica");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Kara Smith");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Backend Developer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Contact Kara");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Mike Danvers");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Frontend Developer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Contact Mike");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MifQ== */"] });
    return TeamComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TestimonialCauroselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialCauroselComponent", function() { return TestimonialCauroselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm5/ngu-carousel.js");



function TestimonialCauroselComponent_ngu_tile_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r35.testimonial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r35.user_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r35.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r35.user_designation);
} }
var TestimonialCauroselComponent = /** @class */ (function () {
    function TestimonialCauroselComponent() {
        this.carouselTileItems = [
            {
                testimonial: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                user_image: "./assets/images/landing/faces/15.jpg",
                user_name: "Jhone Doe",
                user_designation: "Software Engineer"
            },
            {
                testimonial: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                user_image: "./assets/images/landing/faces/3.jpg",
                user_name: "Smith DOe",
                user_designation: "Creative Manager"
            },
            {
                testimonial: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                user_image: "./assets/images/landing/faces/5.jpg",
                user_name: "Micheal Clark",
                user_designation: "Marketing Manager"
            },
            {
                testimonial: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                user_image: "./assets/images/landing/faces/12.jpg",
                user_name: "Jassica june",
                user_designation: "Frontend Developer"
            },
            {
                testimonial: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                user_image: "./assets/images/landing/faces/13.jpg",
                user_name: "Gray Simon",
                user_designation: "Production Leader"
            },
            {
                testimonial: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                user_image: "./assets/images/landing/faces/5.jpg",
                user_name: "Jhone Doe",
                user_designation: "Software Engineer"
            }
        ];
        this.carouselTiles = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };
        this.carouselTile = {
            grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
            slide: 3,
            speed: 250,
            point: {
                visible: true
            },
            load: 2,
            velocity: 0,
            touch: true,
            easing: "cubic-bezier(0, 0, 0.2, 1)"
        };
    }
    TestimonialCauroselComponent.prototype.ngOnInit = function () { };
    TestimonialCauroselComponent.ɵfac = function TestimonialCauroselComponent_Factory(t) { return new (t || TestimonialCauroselComponent)(); };
    TestimonialCauroselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialCauroselComponent, selectors: [["app-testimonial-caurosel"]], decls: 16, vars: 6, consts: [["id", "testimonials-wrap", 1, "testimonial-caurosel-wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "section-header", "col-md-12", "mb-5"], [1, "font-weight-bold"], [1, "col-md-12"], [3, "inputs", "dataSource"], ["myCarousel", ""], [4, "nguCarouselDef"], ["NguCarouselPrev", "", 1, "ngu_control_button", "half-button", "leftRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-left-outline"], ["NguCarouselNext", "", 1, "ngu_control_button", "half-button", "rightRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-right-outline"], [1, "card", "mb-4", "p-3", "single-testimonial-wrap"], [1, "card-body", "text-left"], [1, "mb-4"], [1, "test-user-details", "text-left", "abs"], [1, "user-img", "w-20", "float-left", "mr-1"], ["alt", "", 1, "rounded-circle", 3, "src"], [1, "user-name", "font-weight-bold", "mt-1", "w-75", "float-right"], [1, "user-designation", "w-75", "float-right"]], template: function TestimonialCauroselComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "What our customers says");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngu-carousel", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TestimonialCauroselComponent_ngu_tile_11_Template, 12, 4, "ngu-tile", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.carouselTile)("dataSource", ctx.carouselTileItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r33.isFirst ? 0.5 : 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r33.isLast ? 0.5 : 1);
        } }, directives: [_ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["NguCarousel"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵg"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵe"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵd"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵj"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy90ZXN0aW1vbmlhbC1jYXVyb3NlbC90ZXN0aW1vbmlhbC1jYXVyb3NlbC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return TestimonialCauroselComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialCauroselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-testimonial-caurosel",
                templateUrl: "./testimonial-caurosel.component.html",
                styleUrls: ["./testimonial-caurosel.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/testimonial/testimonial.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/landing/components/testimonial/testimonial.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent() {
    }
    TestimonialComponent.prototype.ngOnInit = function () {
    };
    TestimonialComponent.ɵfac = function TestimonialComponent_Factory(t) { return new (t || TestimonialComponent)(); };
    TestimonialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialComponent, selectors: [["app-testimonial"]], decls: 80, vars: 0, consts: [["id", "testimonials-wrap", 1, "testimonial-wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "section-header", "col-md-12", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "col-lg-4", "col-sm-12", "mb-4", "single-testimonial-wrap"], [1, "card", "p-3"], [1, "card-body"], [1, "mb-4"], [1, "test-user-details", "text-left", "abs"], [1, "user-img", "w-20", "float-left", "mr-1"], ["src", "./assets/images/landing/faces/15.jpg", "alt", "", 1, "rounded-circle"], [1, "user-name", "font-weight-bold", "mt-1", "w-75", "float-right"], [1, "user-designation", "w-75", "float-right"], ["src", "./assets/images/landing/faces/2.jpg", "alt", "", 1, "rounded-circle"], ["src", "./assets/images/landing/faces/3.jpg", "alt", "", 1, "rounded-circle"], [1, "col-md-6", "col-lg-4", "col-sm-12", "mb-lg-0", "mb-4", "single-testimonial-wrap"], ["src", "./assets/images/landing/faces/5.jpg", "alt", "", 1, "rounded-circle"], ["src", "./assets/images/landing/faces/12.jpg", "alt", "", 1, "rounded-circle"], [1, "col-md-6", "col-lg-4", "col-sm-12", "mb-lg-0", "mb-md-0", "mb-sm-0", "mb-0", "single-testimonial-wrap"], ["src", "./assets/images/landing/faces/13.jpg", "alt", "", 1, "rounded-circle"]], template: function TestimonialComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "What our customers says");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Jhone Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Product Manager");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Alex Dan");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Creative Manager");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Smith Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Assistant Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Micheal Clark");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Marketing Manager");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Jassica June");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Frontend Developer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Gray Simon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Production Leader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy90ZXN0aW1vbmlhbC90ZXN0aW1vbmlhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return TestimonialComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testimonial',
                templateUrl: './testimonial.component.html',
                styleUrls: ['./testimonial.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/videos/videos.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/videos/videos.component.ts ***!
  \*********************************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



function VideosComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var video_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", video_r69.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", video_r69.titulo, " | ", video_r69.duracion, " min ");
} }
var VideosComponent = /** @class */ (function () {
    function VideosComponent() {
        this.videos = [
            {
                titulo: "Recuerdos Nocturnos",
                url: "",
                duracion: "12",
                imagePreview: "https://i.pinimg.com/originals/8f/92/fa/8f92fa142c263dc8d862dcb6010fa30d.jpg",
                resumen: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            },
            {
                titulo: "Caminos de Bosque",
                url: "",
                duracion: "12",
                imagePreview: "https://i.pinimg.com/originals/8f/92/fa/8f92fa142c263dc8d862dcb6010fa30d.jpg",
                resumen: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            }
        ];
    }
    VideosComponent.prototype.ngOnInit = function () {
    };
    VideosComponent.ɵfac = function VideosComponent_Factory(t) { return new (t || VideosComponent)(); };
    VideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosComponent, selectors: [["app-videos"]], decls: 6, vars: 1, consts: [["id", "videos-wrap", 1, "videos-wrap"], [1, "container"], [1, "row"], ["class", "video col-6", 4, "ngFor", "ngForOf"], [1, "video", "col-6"], [1, "preview"], [3, "src"]], template: function VideosComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PROYECTOS");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VideosComponent_div_5_Template, 7, 3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videos);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".preview[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1em;\n}\n\n.videos-wrap[_ngcontent-%COMP%] {\n  margin-top: 3em;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.videos-wrap[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .videos-wrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL3ZpZGVvcy9DOlxcVXNlcnNcXE1hcmNvXFxEZXNrdG9wXFxkZXhhbVxcZGV4YW0tYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGxhbmRpbmdcXGNvbXBvbmVudHNcXHZpZGVvc1xcdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvdmlkZW9zL3ZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBSUUsZUFBQTtFQUNBLHFDQUFBO0FDRkY7O0FERkU7RUFDRSxnQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL3ZpZGVvcy92aWRlb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJldmlld3tcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi52aWRlb3Mtd3JhcHtcclxuICBoNSxoNHtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG4gIG1hcmdpbi10b3A6IDNlbTtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiIsIi5wcmV2aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLnZpZGVvcy13cmFwIHtcbiAgbWFyZ2luLXRvcDogM2VtO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4udmlkZW9zLXdyYXAgaDUsIC52aWRlb3Mtd3JhcCBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59Il19 */"] });
    return VideosComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-videos',
                templateUrl: './videos.component.html',
                styleUrls: ['./videos.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/landing/components/works-carousel/works-carousel.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WorksCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksCarouselComponent", function() { return WorksCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var WorksCarouselComponent = /** @class */ (function () {
    function WorksCarouselComponent() {
        this.carouselTileItems = [
            {
                photo: "./assets/images/landing/products/products9.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Project One"
            },
            {
                photo: "./assets/images/landing/products/products11.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Project Two"
            },
            {
                photo: "./assets/images/landing/products/products15.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Project Three"
            },
            {
                photo: "./assets/images/landing/products/products17.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Project Four"
            },
            {
                photo: "./assets/images/landing/products/products13.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Project Five"
            },
            {
                photo: "./assets/images/landing/products/products12.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Project Six"
            }
        ];
        this.carouselTiles = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };
        this.carouselTile = {
            grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
            slide: 3,
            speed: 250,
            point: {
                visible: true
            },
            load: 2,
            velocity: 0,
            touch: true,
            easing: "cubic-bezier(0, 0, 0.2, 1)"
        };
    }
    WorksCarouselComponent.prototype.ngOnInit = function () { };
    WorksCarouselComponent.ɵfac = function WorksCarouselComponent_Factory(t) { return new (t || WorksCarouselComponent)(); };
    WorksCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorksCarouselComponent, selectors: [["app-works-carousel"]], decls: 2, vars: 0, consts: [["id", "works-wrap", 1, "work-carousel-wrap"], [1, "container"]], template: function WorksCarouselComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["#works-wrap[_ngcontent-%COMP%] {\n  background-image: URL(\"assets/images/KROOSBAR.jpg\") !important;\n  background-size: cover !important;\n  background-attachment: fixed !important;\n  color: white !important;\n}\n#works-wrap[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.container[_ngcontent-%COMP%] {\n  height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL3dvcmtzLWNhcm91c2VsL0M6XFxVc2Vyc1xcTWFyY29cXERlc2t0b3BcXGRleGFtXFxkZXhhbS1hbmd1bGFyL3NyY1xcYXBwXFx2aWV3c1xcbGFuZGluZ1xcY29tcG9uZW50c1xcd29ya3MtY2Fyb3VzZWxcXHdvcmtzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvd29ya3MtY2Fyb3VzZWwvd29ya3MtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4REFBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQUU7RUFDRSx1QkFBQTtBQ0VKO0FEQ0E7RUFDRSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvd29ya3MtY2Fyb3VzZWwvd29ya3MtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd29ya3Mtd3JhcHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBVUkwoXCJhc3NldHMvaW1hZ2VzL0tST09TQkFSLmpwZ1wiKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgaDJ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcbiIsIiN3b3Jrcy13cmFwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogVVJMKFwiYXNzZXRzL2ltYWdlcy9LUk9PU0JBUi5qcGdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuI3dvcmtzLXdyYXAgaDIge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogNjAwcHg7XG59Il19 */"] });
    return WorksCarouselComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorksCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-works-carousel",
                templateUrl: "./works-carousel.component.html",
                styleUrls: ["./works-carousel.component.scss"]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/works1/works1.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/works1/works1.component.ts ***!
  \*********************************************************************/
/*! exports provided: Works1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Works1Component", function() { return Works1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var Works1Component = /** @class */ (function () {
    function Works1Component() {
    }
    Works1Component.prototype.ngOnInit = function () {
    };
    Works1Component.ɵfac = function Works1Component_Factory(t) { return new (t || Works1Component)(); };
    Works1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Works1Component, selectors: [["app-works1"]], decls: 86, vars: 0, consts: [["id", "works-wrap", 1, "work1Wrap"], [1, "container"], [1, "row"], [1, "section-header", "col-md-12", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-4"], [1, "card", "o-hidden"], ["src", "./assets/images/landing/products/products9.svg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title", "font-weight-bold"], [1, "card-text"], [1, "card-footer", "pl-3"], ["href", "#", 1, "btn", "btn-lg", "p-1", "text-dark", "mr-1"], [1, "eva", "eva-link-2-outline"], [1, "eva", "eva-share"], ["src", "./assets/images/landing/products/products15.svg", "alt", "Card image cap", 1, "card-img-top"], ["src", "./assets/images/landing/products/products11.svg", "alt", "Card image cap", 1, "card-img-top"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-lg-0", "mb-4"], ["src", "./assets/images/landing/products/products12.svg", "alt", "Card image cap", 1, "card-img-top"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-lg-0", "mb-md-0", "mb-sm-0", "mb-4"], ["src", "./assets/images/landing/products/products14.svg", "alt", "Card image cap", 1, "card-img-top"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-lg-0", "mb-md-0", "mb-sm-0"], ["src", "./assets/images/landing/products/products17.svg", "alt", "Card image cap", 1, "card-img-top"]], template: function Works1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Recent Works");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Work one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Work two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Work Three");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Work Four");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Work Five");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Work Six");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy93b3JrczEvd29ya3MxLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Works1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Works1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-works1',
                templateUrl: './works1.component.html',
                styleUrls: ['./works1.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/works2/works2.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/works2/works2.component.ts ***!
  \*********************************************************************/
/*! exports provided: Works2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Works2Component", function() { return Works2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var Works2Component = /** @class */ (function () {
    function Works2Component() {
    }
    Works2Component.prototype.ngOnInit = function () {
    };
    Works2Component.ɵfac = function Works2Component_Factory(t) { return new (t || Works2Component)(); };
    Works2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Works2Component, selectors: [["app-works2"]], decls: 3, vars: 0, consts: [[1, "work2Wrap"], [1, "container"], [1, "row"]], template: function Works2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy93b3JrczIvd29ya3MyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Works2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Works2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-works2',
                templateUrl: './works2.component.html',
                styleUrls: ['./works2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/helpers/scrollTo.directives.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/landing/helpers/scrollTo.directives.ts ***!
  \**************************************************************/
/*! exports provided: ScrollToDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function() { return ScrollToDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ScrollToDirective = /** @class */ (function () {
    function ScrollToDirective(elmID, el) {
        this.elmID = elmID;
        this.el = el;
    }
    ScrollToDirective.prototype.ngOnInit = function () { };
    ScrollToDirective.prototype.currentYPosition = function () {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset)
            return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)
            return document.body.scrollTop;
        return 0;
    };
    ScrollToDirective.prototype.elmYPosition = function (eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    };
    ScrollToDirective.prototype.smoothScroll = function (e) {
        // console.log(e);
        e.preventDefault();
        if (!this.elmID)
            return;
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(this.elmID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }
        return false;
    };
    ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) { return new (t || ScrollToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]("scrollTo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    ScrollToDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollToDirective, selectors: [["", "scrollTo", ""]], hostBindings: function ScrollToDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollToDirective_click_HostBindingHandler($event) { return ctx.smoothScroll($event); });
        } } });
    return ScrollToDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollToDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: "[scrollTo]" }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ["scrollTo"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { smoothScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/views/landing/helpers/window.helpers.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/landing/helpers/window.helpers.ts ***!
  \*********************************************************/
/*! exports provided: _window, WINDOW, WindowRef, BrowserWindowRef, windowProvider, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_window", function() { return _window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserWindowRef", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowProvider", function() { return windowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


function _window() {
    return window;
}
var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("WindowToken");
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            throw new Error("Not implemented.");
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());

var BrowserWindowRef = /** @class */ (function (_super) {
    __extends(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) { return new (t || BrowserWindowRef)(); };
    BrowserWindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrowserWindowRef, factory: BrowserWindowRef.ɵfac });
    return BrowserWindowRef;
}(WindowRef));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserWindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
var browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
var windowProvider = {
    provide: WINDOW,
    useFactory: _window,
    deps: []
};
var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];


/***/ }),

/***/ "./src/app/views/landing/landing-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/landing/landing-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _blog_details_page_blog_details_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-details-page/blog-details-page.component */ "./src/app/views/landing/blog-details-page/blog-details-page.component.ts");
/* harmony import */ var _landing_v4_landing_v4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-v4/landing-v4.component */ "./src/app/views/landing/landing-v4/landing-v4.component.ts");
/* harmony import */ var _landing_v2_landing_v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-v2/landing-v2.component */ "./src/app/views/landing/landing-v2/landing-v2.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _landing_v1_landing_v1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-v1/landing-v1.component */ "./src/app/views/landing/landing-v1/landing-v1.component.ts");
/* harmony import */ var _landing_v3_landing_v3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-v3/landing-v3.component */ "./src/app/views/landing/landing-v3/landing-v3.component.ts");
/* harmony import */ var _landing_v5_landing_v5_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-v5/landing-v5.component */ "./src/app/views/landing/landing-v5/landing-v5.component.ts");
/* harmony import */ var _landing_v6_landing_v6_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing-v6/landing-v6.component */ "./src/app/views/landing/landing-v6/landing-v6.component.ts");
/* harmony import */ var _landing_v7_landing_v7_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing-v7/landing-v7.component */ "./src/app/views/landing/landing-v7/landing-v7.component.ts");
/* harmony import */ var _landing_v8_landing_v8_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing-v8/landing-v8.component */ "./src/app/views/landing/landing-v8/landing-v8.component.ts");
/* harmony import */ var _landing_v9_landing_v9_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing-v9/landing-v9.component */ "./src/app/views/landing/landing-v9/landing-v9.component.ts");
/* harmony import */ var _landing_v10_landing_v10_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing-v10/landing-v10.component */ "./src/app/views/landing/landing-v10/landing-v10.component.ts");
/* harmony import */ var _landing_v11_landing_v11_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing-v11/landing-v11.component */ "./src/app/views/landing/landing-v11/landing-v11.component.ts");
















var routes = [
    {
        path: "",
        component: _landing_v6_landing_v6_component__WEBPACK_IMPORTED_MODULE_8__["LandingV6Component"]
    },
    {
        path: "v1",
        component: _landing_v1_landing_v1_component__WEBPACK_IMPORTED_MODULE_5__["LandingV1Component"]
    },
    {
        path: "v2",
        component: _landing_v2_landing_v2_component__WEBPACK_IMPORTED_MODULE_3__["LandingV2Component"]
    },
    {
        path: "v3",
        component: _landing_v3_landing_v3_component__WEBPACK_IMPORTED_MODULE_6__["LandingV3Component"]
    },
    {
        path: "v4",
        component: _landing_v4_landing_v4_component__WEBPACK_IMPORTED_MODULE_2__["LandingV4Component"]
    },
    {
        path: "v5",
        component: _landing_v5_landing_v5_component__WEBPACK_IMPORTED_MODULE_7__["LandingV5Component"]
    },
    {
        path: "v6",
        component: _landing_v6_landing_v6_component__WEBPACK_IMPORTED_MODULE_8__["LandingV6Component"]
    },
    {
        path: "v7",
        component: _landing_v7_landing_v7_component__WEBPACK_IMPORTED_MODULE_9__["LandingV7Component"]
    },
    {
        path: "v8",
        component: _landing_v8_landing_v8_component__WEBPACK_IMPORTED_MODULE_10__["LandingV8Component"]
    },
    {
        path: "v9",
        component: _landing_v9_landing_v9_component__WEBPACK_IMPORTED_MODULE_11__["LandingV9Component"]
    },
    {
        path: "v10",
        component: _landing_v10_landing_v10_component__WEBPACK_IMPORTED_MODULE_12__["LandingV10Component"]
    },
    {
        path: "v11",
        component: _landing_v11_landing_v11_component__WEBPACK_IMPORTED_MODULE_13__["LandingV11Component"]
    },
    {
        path: "blog-details",
        component: _blog_details_page_blog_details_page_component__WEBPACK_IMPORTED_MODULE_1__["BlogDetailsPageComponent"]
    },
    {
        path: "demos",
        component: _landing_v2_landing_v2_component__WEBPACK_IMPORTED_MODULE_3__["LandingV2Component"]
    }
];
var LandingRoutingModule = /** @class */ (function () {
    function LandingRoutingModule() {
    }
    LandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingRoutingModule });
    LandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingRoutingModule_Factory(t) { return new (t || LandingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
    return LandingRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v1/landing-v1.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v1/landing-v1.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV1Component", function() { return LandingV1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro1_intro1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro1/intro1.component */ "./src/app/views/landing/components/intro1/intro1.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services-caurosel/services-caurosel.component */ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV1Component = /** @class */ (function () {
    function LandingV1Component() {
        this.backgroundColor = "landing-gradient-black-gray";
        this.showCustomizer = false;
    }
    LandingV1Component.prototype.ngOnInit = function () { };
    LandingV1Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV1Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV1Component.ɵfac = function LandingV1Component_Factory(t) { return new (t || LandingV1Component)(); };
    LandingV1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV1Component, selectors: [["app-landing-v1"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro1_intro1_component__WEBPACK_IMPORTED_MODULE_3__["Intro1Component"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__["ServicesCauroselComponent"], _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__["WorksCarouselComponent"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12MS9sYW5kaW5nLXYxLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v1",
                templateUrl: "./landing-v1.component.html",
                styleUrls: ["./landing-v1.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v10/landing-v10.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/landing/landing-v10/landing-v10.component.ts ***!
  \********************************************************************/
/*! exports provided: LandingV10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV10Component", function() { return LandingV10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_ten_intro_ten_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-ten/intro-ten.component */ "./src/app/views/landing/components/intro-ten/intro-ten.component.ts");
/* harmony import */ var _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features-two/features-two.component */ "./src/app/views/landing/components/features-two/features-two.component.ts");
/* harmony import */ var _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services-caurosel/services-caurosel.component */ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts");
/* harmony import */ var _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works1/works1.component */ "./src/app/views/landing/components/works1/works1.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial-caurosel/testimonial-caurosel.component */ "./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV10Component = /** @class */ (function () {
    function LandingV10Component() {
        this.backgroundColor = "landing-purple";
        this.showCustomizer = false;
    }
    LandingV10Component.prototype.ngOnInit = function () { };
    LandingV10Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV10Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV10Component.ɵfac = function LandingV10Component_Factory(t) { return new (t || LandingV10Component)(); };
    LandingV10Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV10Component, selectors: [["app-landing-v10"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV10Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-ten");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_ten_intro_ten_component__WEBPACK_IMPORTED_MODULE_3__["IntroTenComponent"], _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesTwoComponent"], _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__["ServicesCauroselComponent"], _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__["Works1Component"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialCauroselComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12MTAvbGFuZGluZy12MTAuY29tcG9uZW50LnNjc3MifQ== */"] });
    return LandingV10Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV10Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v10",
                templateUrl: "./landing-v10.component.html",
                styleUrls: ["./landing-v10.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v11/landing-v11.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/landing/landing-v11/landing-v11.component.ts ***!
  \********************************************************************/
/*! exports provided: LandingV11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV11Component", function() { return LandingV11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_eleven_intro_eleven_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-eleven/intro-eleven.component */ "./src/app/views/landing/components/intro-eleven/intro-eleven.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services/services.component */ "./src/app/views/landing/components/services/services.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV11Component = /** @class */ (function () {
    function LandingV11Component() {
        this.backgroundColor = "landing-gradient-steel-gray";
        this.showCustomizer = false;
    }
    LandingV11Component.prototype.ngOnInit = function () {
    };
    LandingV11Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV11Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV11Component.ɵfac = function LandingV11Component_Factory(t) { return new (t || LandingV11Component)(); };
    LandingV11Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV11Component, selectors: [["app-landing-v11"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV11Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-eleven");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_eleven_intro_eleven_component__WEBPACK_IMPORTED_MODULE_3__["IntroElevenComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"], _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__["WorksCarouselComponent"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12MTEvbGFuZGluZy12MTEuY29tcG9uZW50LnNjc3MifQ== */"] });
    return LandingV11Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV11Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-v11',
                templateUrl: './landing-v11.component.html',
                styleUrls: ['./landing-v11.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v2/landing-v2.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v2/landing-v2.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV2Component", function() { return LandingV2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/presentacion/presentacion.component */ "./src/app/views/landing/components/presentacion/presentacion.component.ts");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/logo/logo.component */ "./src/app/views/landing/components/logo/logo.component.ts");
/* harmony import */ var _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/videos/videos.component */ "./src/app/views/landing/components/videos/videos.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");








var _c0 = function (a0) { return { show: a0 }; };
function LandingV2Component_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toggleCustomizer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Solid Colors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeBg("teal"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeBg("blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.changeBg("midnight-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changeBg("indigo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.changeBg("dark-purple"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeBg("purple"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeBg("pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changeBg("red"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.changeBg("gray"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.changeBg("slate-gray"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Gradient Colors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.changeBg("gradient-purple-indigo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.changeBg("gradient-blue-red"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.changeBg("gradient-black-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.changeBg("gradient-black-gray"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.changeBg("gradient-steel-gray"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changeBg("gradient-grade-gray"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.changeBg("gradient-cristal-clear"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.changeBg("gradient-cool-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.changeBg("gradient-moonlight-asteriod"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.changeBg("gradient-hervey"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.changeBg("gradient-altra-violet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.changeBg("gradient-slight-ocean"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.changeBg("gradient-red-sunset"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.changeBg("gradient-quepal"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.changeBg("gradient-lawrencium"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_div_6_Template_a_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.changeBg("gradient-meridian"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.showCustomizer));
} }
var _c1 = function (a0) { return [a0]; };
var LandingV2Component = /** @class */ (function () {
    function LandingV2Component() {
        this.backgroundColor = "landing-indigo-light";
        this.showCustomizer = false;
    }
    LandingV2Component.prototype.ngOnInit = function () { };
    LandingV2Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV2Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV2Component.ɵfac = function LandingV2Component_Factory(t) { return new (t || LandingV2Component)(); };
    LandingV2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV2Component, selectors: [["app-landing-v2"]], decls: 7, vars: 4, consts: [[1, "landing_wrap", 3, "ngClass"], ["class", "customizer card", 3, "ngClass", 4, "ngIf"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-presentacion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-logo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-videos");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LandingV2Component_div_6_Template, 40, 3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_3__["PresentacionComponent"], _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_5__["VideosComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12Mi9sYW5kaW5nLXYyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v2",
                templateUrl: "./landing-v2.component.html",
                styleUrls: ["./landing-v2.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v3/landing-v3.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v3/landing-v3.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV3Component", function() { return LandingV3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_three_intro_three_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-three/intro-three.component */ "./src/app/views/landing/components/intro-three/intro-three.component.ts");
/* harmony import */ var _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features-two/features-two.component */ "./src/app/views/landing/components/features-two/features-two.component.ts");
/* harmony import */ var _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services-caurosel/services-caurosel.component */ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts");
/* harmony import */ var _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works1/works1.component */ "./src/app/views/landing/components/works1/works1.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial-caurosel/testimonial-caurosel.component */ "./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV3Component = /** @class */ (function () {
    function LandingV3Component() {
        this.backgroundColor = "landing-gradient-meridian";
        this.showCustomizer = false;
    }
    LandingV3Component.prototype.ngOnInit = function () {
    };
    LandingV3Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV3Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV3Component.ɵfac = function LandingV3Component_Factory(t) { return new (t || LandingV3Component)(); };
    LandingV3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV3Component, selectors: [["app-landing-v3"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV3Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-three");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV3Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_three_intro_three_component__WEBPACK_IMPORTED_MODULE_3__["IntroThreeComponent"], _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesTwoComponent"], _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__["ServicesCauroselComponent"], _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__["Works1Component"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialCauroselComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12My9sYW5kaW5nLXYzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV3Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-v3',
                templateUrl: './landing-v3.component.html',
                styleUrls: ['./landing-v3.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v4/landing-v4.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v4/landing-v4.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV4Component", function() { return LandingV4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_four_intro_four_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-four/intro-four.component */ "./src/app/views/landing/components/intro-four/intro-four.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services/services.component */ "./src/app/views/landing/components/services/services.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV4Component = /** @class */ (function () {
    function LandingV4Component() {
        this.backgroundColor = "landing-red-light";
        this.showCustomizer = false;
    }
    LandingV4Component.prototype.ngOnInit = function () { };
    LandingV4Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV4Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV4Component.ɵfac = function LandingV4Component_Factory(t) { return new (t || LandingV4Component)(); };
    LandingV4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV4Component, selectors: [["app-landing-v4"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV4Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-four");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_four_intro_four_component__WEBPACK_IMPORTED_MODULE_3__["IntroFourComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"], _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__["WorksCarouselComponent"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12NC9sYW5kaW5nLXY0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV4Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v4",
                templateUrl: "./landing-v4.component.html",
                styleUrls: ["./landing-v4.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v5/landing-v5.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v5/landing-v5.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV5Component", function() { return LandingV5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_five_intro_five_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-five/intro-five.component */ "./src/app/views/landing/components/intro-five/intro-five.component.ts");
/* harmony import */ var _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features-two/features-two.component */ "./src/app/views/landing/components/features-two/features-two.component.ts");
/* harmony import */ var _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services-caurosel/services-caurosel.component */ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts");
/* harmony import */ var _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works1/works1.component */ "./src/app/views/landing/components/works1/works1.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial-caurosel/testimonial-caurosel.component */ "./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV5Component = /** @class */ (function () {
    function LandingV5Component() {
        this.backgroundColor = "landing-gradient-slight-ocean";
        this.showCustomizer = false;
    }
    LandingV5Component.prototype.ngOnInit = function () {
    };
    LandingV5Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV5Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV5Component.ɵfac = function LandingV5Component_Factory(t) { return new (t || LandingV5Component)(); };
    LandingV5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV5Component, selectors: [["app-landing-v5"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV5Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-five");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_five_intro_five_component__WEBPACK_IMPORTED_MODULE_3__["IntroFiveComponent"], _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesTwoComponent"], _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__["ServicesCauroselComponent"], _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__["Works1Component"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialCauroselComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12NS9sYW5kaW5nLXY1LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV5Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-v5',
                templateUrl: './landing-v5.component.html',
                styleUrls: ['./landing-v5.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v6/landing-v6.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v6/landing-v6.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV6Component", function() { return LandingV6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_six_intro_six_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-six/intro-six.component */ "./src/app/views/landing/components/intro-six/intro-six.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services/services.component */ "./src/app/views/landing/components/services/services.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV6Component = /** @class */ (function () {
    function LandingV6Component() {
        this.backgroundColor = "landing-gradient-blue-red";
        this.showCustomizer = false;
    }
    LandingV6Component.prototype.ngOnInit = function () { };
    LandingV6Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV6Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV6Component.ɵfac = function LandingV6Component_Factory(t) { return new (t || LandingV6Component)(); };
    LandingV6Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV6Component, selectors: [["app-landing-v6"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV6Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-six");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_six_intro_six_component__WEBPACK_IMPORTED_MODULE_3__["IntroSixComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"], _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__["WorksCarouselComponent"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12Ni9sYW5kaW5nLXY2LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV6Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV6Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v6",
                templateUrl: "./landing-v6.component.html",
                styleUrls: ["./landing-v6.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v7/landing-v7.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v7/landing-v7.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV7Component", function() { return LandingV7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_seven_intro_seven_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-seven/intro-seven.component */ "./src/app/views/landing/components/intro-seven/intro-seven.component.ts");
/* harmony import */ var _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features-two/features-two.component */ "./src/app/views/landing/components/features-two/features-two.component.ts");
/* harmony import */ var _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services-caurosel/services-caurosel.component */ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts");
/* harmony import */ var _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works1/works1.component */ "./src/app/views/landing/components/works1/works1.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial-caurosel/testimonial-caurosel.component */ "./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV7Component = /** @class */ (function () {
    function LandingV7Component() {
        this.backgroundColor = "landing-gradient-purple-indigo";
        this.showCustomizer = false;
    }
    LandingV7Component.prototype.ngOnInit = function () {
    };
    LandingV7Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV7Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV7Component.ɵfac = function LandingV7Component_Factory(t) { return new (t || LandingV7Component)(); };
    LandingV7Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV7Component, selectors: [["app-landing-v7"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV7Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-seven");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_seven_intro_seven_component__WEBPACK_IMPORTED_MODULE_3__["IntroSevenComponent"], _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesTwoComponent"], _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__["ServicesCauroselComponent"], _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__["Works1Component"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialCauroselComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12Ny9sYW5kaW5nLXY3LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV7Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV7Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-v7',
                templateUrl: './landing-v7.component.html',
                styleUrls: ['./landing-v7.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v8/landing-v8.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v8/landing-v8.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV8Component", function() { return LandingV8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_eight_intro_eight_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-eight/intro-eight.component */ "./src/app/views/landing/components/intro-eight/intro-eight.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services/services.component */ "./src/app/views/landing/components/services/services.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV8Component = /** @class */ (function () {
    function LandingV8Component() {
        this.backgroundColor = "landing-indigo-deep";
        this.showCustomizer = false;
    }
    LandingV8Component.prototype.ngOnInit = function () { };
    LandingV8Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV8Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV8Component.ɵfac = function LandingV8Component_Factory(t) { return new (t || LandingV8Component)(); };
    LandingV8Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV8Component, selectors: [["app-landing-v8"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV8Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-eight");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_eight_intro_eight_component__WEBPACK_IMPORTED_MODULE_3__["IntroEightComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"], _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__["WorksCarouselComponent"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12OC9sYW5kaW5nLXY4LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV8Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV8Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v8",
                templateUrl: "./landing-v8.component.html",
                styleUrls: ["./landing-v8.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v9/landing-v9.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v9/landing-v9.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV9Component", function() { return LandingV9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro2_intro2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro2/intro2.component */ "./src/app/views/landing/components/intro2/intro2.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services/services.component */ "./src/app/views/landing/components/services/services.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV9Component = /** @class */ (function () {
    function LandingV9Component() {
        this.backgroundColor = "landing-sky-blue";
        this.showCustomizer = false;
    }
    LandingV9Component.prototype.ngOnInit = function () { };
    LandingV9Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV9Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV9Component.ɵfac = function LandingV9Component_Factory(t) { return new (t || LandingV9Component)(); };
    LandingV9Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV9Component, selectors: [["app-landing-v9"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV9Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro2_intro2_component__WEBPACK_IMPORTED_MODULE_3__["Intro2Component"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"], _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__["WorksCarouselComponent"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12OS9sYW5kaW5nLXY5LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV9Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV9Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v9",
                templateUrl: "./landing-v9.component.html",
                styleUrls: ["./landing-v9.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/scrollTo.directives */ "./src/app/views/landing/helpers/scrollTo.directives.ts");
/* harmony import */ var _helpers_window_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/window.helpers */ "./src/app/views/landing/helpers/window.helpers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm5/ngu-carousel.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/views/landing/landing-routing.module.ts");
/* harmony import */ var _landing_v1_landing_v1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-v1/landing-v1.component */ "./src/app/views/landing/landing-v1/landing-v1.component.ts");
/* harmony import */ var _components_intro1_intro1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/intro1/intro1.component */ "./src/app/views/landing/components/intro1/intro1.component.ts");
/* harmony import */ var _components_intro2_intro2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/intro2/intro2.component */ "./src/app/views/landing/components/intro2/intro2.component.ts");
/* harmony import */ var _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/works1/works1.component */ "./src/app/views/landing/components/works1/works1.component.ts");
/* harmony import */ var _components_works2_works2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/works2/works2.component */ "./src/app/views/landing/components/works2/works2.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/views/landing/components/services/services.component.ts");
/* harmony import */ var _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/services-caurosel/services-caurosel.component */ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/testimonial-caurosel/testimonial-caurosel.component */ "./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");
/* harmony import */ var _landing_v2_landing_v2_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./landing-v2/landing-v2.component */ "./src/app/views/landing/landing-v2/landing-v2.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/features-two/features-two.component */ "./src/app/views/landing/components/features-two/features-two.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/views/landing/components/news/news.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_intro_three_intro_three_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/intro-three/intro-three.component */ "./src/app/views/landing/components/intro-three/intro-three.component.ts");
/* harmony import */ var _landing_v3_landing_v3_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./landing-v3/landing-v3.component */ "./src/app/views/landing/landing-v3/landing-v3.component.ts");
/* harmony import */ var _components_intro_four_intro_four_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/intro-four/intro-four.component */ "./src/app/views/landing/components/intro-four/intro-four.component.ts");
/* harmony import */ var _landing_v4_landing_v4_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./landing-v4/landing-v4.component */ "./src/app/views/landing/landing-v4/landing-v4.component.ts");
/* harmony import */ var _components_intro_five_intro_five_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/intro-five/intro-five.component */ "./src/app/views/landing/components/intro-five/intro-five.component.ts");
/* harmony import */ var _landing_v5_landing_v5_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./landing-v5/landing-v5.component */ "./src/app/views/landing/landing-v5/landing-v5.component.ts");
/* harmony import */ var _landing_v6_landing_v6_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./landing-v6/landing-v6.component */ "./src/app/views/landing/landing-v6/landing-v6.component.ts");
/* harmony import */ var _components_intro_six_intro_six_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/intro-six/intro-six.component */ "./src/app/views/landing/components/intro-six/intro-six.component.ts");
/* harmony import */ var _components_intro_seven_intro_seven_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/intro-seven/intro-seven.component */ "./src/app/views/landing/components/intro-seven/intro-seven.component.ts");
/* harmony import */ var _landing_v7_landing_v7_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./landing-v7/landing-v7.component */ "./src/app/views/landing/landing-v7/landing-v7.component.ts");
/* harmony import */ var _components_intro_eight_intro_eight_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/intro-eight/intro-eight.component */ "./src/app/views/landing/components/intro-eight/intro-eight.component.ts");
/* harmony import */ var _landing_v8_landing_v8_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./landing-v8/landing-v8.component */ "./src/app/views/landing/landing-v8/landing-v8.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_header_white_header_white_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/header-white/header-white.component */ "./src/app/views/landing/components/header-white/header-white.component.ts");
/* harmony import */ var _components_intro_nine_intro_nine_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/intro-nine/intro-nine.component */ "./src/app/views/landing/components/intro-nine/intro-nine.component.ts");
/* harmony import */ var _landing_v9_landing_v9_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./landing-v9/landing-v9.component */ "./src/app/views/landing/landing-v9/landing-v9.component.ts");
/* harmony import */ var _components_intro_ten_intro_ten_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/intro-ten/intro-ten.component */ "./src/app/views/landing/components/intro-ten/intro-ten.component.ts");
/* harmony import */ var _landing_v10_landing_v10_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./landing-v10/landing-v10.component */ "./src/app/views/landing/landing-v10/landing-v10.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _components_demos_demos_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/demos/demos.component */ "./src/app/views/landing/components/demos/demos.component.ts");
/* harmony import */ var _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/blog-details/blog-details.component */ "./src/app/views/landing/components/blog-details/blog-details.component.ts");
/* harmony import */ var _blog_details_page_blog_details_page_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./blog-details-page/blog-details-page.component */ "./src/app/views/landing/blog-details-page/blog-details-page.component.ts");
/* harmony import */ var _components_intro_eleven_intro_eleven_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/intro-eleven/intro-eleven.component */ "./src/app/views/landing/components/intro-eleven/intro-eleven.component.ts");
/* harmony import */ var _landing_v11_landing_v11_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./landing-v11/landing-v11.component */ "./src/app/views/landing/landing-v11/landing-v11.component.ts");
/* harmony import */ var _components_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/home-slider/home-slider.component */ "./src/app/views/landing/components/home-slider/home-slider.component.ts");
/* harmony import */ var _components_servicios_scroll_servicios_scroll_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/servicios-scroll/servicios-scroll.component */ "./src/app/views/landing/components/servicios-scroll/servicios-scroll.component.ts");
/* harmony import */ var _components_presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/presentacion/presentacion.component */ "./src/app/views/landing/components/presentacion/presentacion.component.ts");
/* harmony import */ var _components_productos_preview_productos_preview_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/productos-preview/productos-preview.component */ "./src/app/views/landing/components/productos-preview/productos-preview.component.ts");
/* harmony import */ var _components_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/proyectos/proyectos.component */ "./src/app/views/landing/components/proyectos/proyectos.component.ts");
/* harmony import */ var _components_etapas_etapas_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/etapas/etapas.component */ "./src/app/views/landing/components/etapas/etapas.component.ts");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/logo/logo.component */ "./src/app/views/landing/components/logo/logo.component.ts");
/* harmony import */ var _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/videos/videos.component */ "./src/app/views/landing/components/videos/videos.component.ts");



// import { NgForm } from "@angular/forms";




























































var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LandingModule });
    LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function LandingModule_Factory(t) { return new (t || LandingModule)(); }, providers: [_helpers_window_helpers__WEBPACK_IMPORTED_MODULE_1__["WINDOW_PROVIDERS"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__["LandingRoutingModule"],
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__["NguCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_48__["FormsModule"]
            ]] });
    return LandingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_components_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_54__["HomeSliderComponent"],
        _components_servicios_scroll_servicios_scroll_component__WEBPACK_IMPORTED_MODULE_55__["ServiciosScrollComponent"],
        _landing_v1_landing_v1_component__WEBPACK_IMPORTED_MODULE_7__["LandingV1Component"],
        _components_intro1_intro1_component__WEBPACK_IMPORTED_MODULE_8__["Intro1Component"],
        _components_intro2_intro2_component__WEBPACK_IMPORTED_MODULE_9__["Intro2Component"],
        _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_10__["Works1Component"],
        _components_works2_works2_component__WEBPACK_IMPORTED_MODULE_11__["Works2Component"],
        _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_12__["WorksCarouselComponent"],
        _components_services_services_component__WEBPACK_IMPORTED_MODULE_13__["ServicesComponent"],
        _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_14__["ServicesCauroselComponent"],
        _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_15__["TestimonialComponent"],
        _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_16__["TestimonialCauroselComponent"],
        _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_17__["PricingOneComponent"],
        _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_18__["ContactFormComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
        _landing_v2_landing_v2_component__WEBPACK_IMPORTED_MODULE_20__["LandingV2Component"],
        _components_features_features_component__WEBPACK_IMPORTED_MODULE_21__["FeaturesComponent"],
        _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_22__["FeaturesTwoComponent"],
        _components_best_best_component__WEBPACK_IMPORTED_MODULE_23__["BestComponent"],
        _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_24__["LeftImageComponent"],
        _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_25__["RightImageComponent"],
        _components_team_team_component__WEBPACK_IMPORTED_MODULE_26__["TeamComponent"],
        _components_news_news_component__WEBPACK_IMPORTED_MODULE_27__["NewsComponent"],
        _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_28__["FaqsComponent"],
        _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_29__["NewsTwoComponent"],
        _components_intro_three_intro_three_component__WEBPACK_IMPORTED_MODULE_30__["IntroThreeComponent"],
        _landing_v3_landing_v3_component__WEBPACK_IMPORTED_MODULE_31__["LandingV3Component"],
        _components_intro_four_intro_four_component__WEBPACK_IMPORTED_MODULE_32__["IntroFourComponent"],
        _landing_v4_landing_v4_component__WEBPACK_IMPORTED_MODULE_33__["LandingV4Component"],
        _components_intro_five_intro_five_component__WEBPACK_IMPORTED_MODULE_34__["IntroFiveComponent"],
        _landing_v5_landing_v5_component__WEBPACK_IMPORTED_MODULE_35__["LandingV5Component"],
        _landing_v6_landing_v6_component__WEBPACK_IMPORTED_MODULE_36__["LandingV6Component"],
        _components_intro_six_intro_six_component__WEBPACK_IMPORTED_MODULE_37__["IntroSixComponent"],
        _components_intro_seven_intro_seven_component__WEBPACK_IMPORTED_MODULE_38__["IntroSevenComponent"],
        _landing_v7_landing_v7_component__WEBPACK_IMPORTED_MODULE_39__["LandingV7Component"],
        _components_intro_eight_intro_eight_component__WEBPACK_IMPORTED_MODULE_40__["IntroEightComponent"],
        _landing_v8_landing_v8_component__WEBPACK_IMPORTED_MODULE_41__["LandingV8Component"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_42__["HeaderComponent"],
        _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_0__["ScrollToDirective"],
        _components_header_white_header_white_component__WEBPACK_IMPORTED_MODULE_43__["HeaderWhiteComponent"],
        _components_intro_nine_intro_nine_component__WEBPACK_IMPORTED_MODULE_44__["IntroNineComponent"],
        _landing_v9_landing_v9_component__WEBPACK_IMPORTED_MODULE_45__["LandingV9Component"],
        _components_intro_ten_intro_ten_component__WEBPACK_IMPORTED_MODULE_46__["IntroTenComponent"],
        _landing_v10_landing_v10_component__WEBPACK_IMPORTED_MODULE_47__["LandingV10Component"],
        _components_demos_demos_component__WEBPACK_IMPORTED_MODULE_49__["DemosComponent"],
        _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_50__["BlogDetailsComponent"],
        _blog_details_page_blog_details_page_component__WEBPACK_IMPORTED_MODULE_51__["BlogDetailsPageComponent"],
        _components_intro_eleven_intro_eleven_component__WEBPACK_IMPORTED_MODULE_52__["IntroElevenComponent"],
        _landing_v11_landing_v11_component__WEBPACK_IMPORTED_MODULE_53__["LandingV11Component"],
        _components_presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_56__["PresentacionComponent"],
        _components_productos_preview_productos_preview_component__WEBPACK_IMPORTED_MODULE_57__["ProductosPreviewComponent"],
        _components_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_58__["ProyectosComponent"],
        _components_etapas_etapas_component__WEBPACK_IMPORTED_MODULE_59__["EtapasComponent"],
        _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_60__["LogoComponent"],
        _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_61__["VideosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__["LandingRoutingModule"],
        _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__["NguCarouselModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_48__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__["LandingRoutingModule"],
                    _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__["NguCarouselModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_48__["FormsModule"]
                ],
                declarations: [
                    _components_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_54__["HomeSliderComponent"],
                    _components_servicios_scroll_servicios_scroll_component__WEBPACK_IMPORTED_MODULE_55__["ServiciosScrollComponent"],
                    _landing_v1_landing_v1_component__WEBPACK_IMPORTED_MODULE_7__["LandingV1Component"],
                    _components_intro1_intro1_component__WEBPACK_IMPORTED_MODULE_8__["Intro1Component"],
                    _components_intro2_intro2_component__WEBPACK_IMPORTED_MODULE_9__["Intro2Component"],
                    _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_10__["Works1Component"],
                    _components_works2_works2_component__WEBPACK_IMPORTED_MODULE_11__["Works2Component"],
                    _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_12__["WorksCarouselComponent"],
                    _components_services_services_component__WEBPACK_IMPORTED_MODULE_13__["ServicesComponent"],
                    _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_14__["ServicesCauroselComponent"],
                    _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_15__["TestimonialComponent"],
                    _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_16__["TestimonialCauroselComponent"],
                    _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_17__["PricingOneComponent"],
                    _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_18__["ContactFormComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                    _landing_v2_landing_v2_component__WEBPACK_IMPORTED_MODULE_20__["LandingV2Component"],
                    _components_features_features_component__WEBPACK_IMPORTED_MODULE_21__["FeaturesComponent"],
                    _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_22__["FeaturesTwoComponent"],
                    _components_best_best_component__WEBPACK_IMPORTED_MODULE_23__["BestComponent"],
                    _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_24__["LeftImageComponent"],
                    _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_25__["RightImageComponent"],
                    _components_team_team_component__WEBPACK_IMPORTED_MODULE_26__["TeamComponent"],
                    _components_news_news_component__WEBPACK_IMPORTED_MODULE_27__["NewsComponent"],
                    _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_28__["FaqsComponent"],
                    _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_29__["NewsTwoComponent"],
                    _components_intro_three_intro_three_component__WEBPACK_IMPORTED_MODULE_30__["IntroThreeComponent"],
                    _landing_v3_landing_v3_component__WEBPACK_IMPORTED_MODULE_31__["LandingV3Component"],
                    _components_intro_four_intro_four_component__WEBPACK_IMPORTED_MODULE_32__["IntroFourComponent"],
                    _landing_v4_landing_v4_component__WEBPACK_IMPORTED_MODULE_33__["LandingV4Component"],
                    _components_intro_five_intro_five_component__WEBPACK_IMPORTED_MODULE_34__["IntroFiveComponent"],
                    _landing_v5_landing_v5_component__WEBPACK_IMPORTED_MODULE_35__["LandingV5Component"],
                    _landing_v6_landing_v6_component__WEBPACK_IMPORTED_MODULE_36__["LandingV6Component"],
                    _components_intro_six_intro_six_component__WEBPACK_IMPORTED_MODULE_37__["IntroSixComponent"],
                    _components_intro_seven_intro_seven_component__WEBPACK_IMPORTED_MODULE_38__["IntroSevenComponent"],
                    _landing_v7_landing_v7_component__WEBPACK_IMPORTED_MODULE_39__["LandingV7Component"],
                    _components_intro_eight_intro_eight_component__WEBPACK_IMPORTED_MODULE_40__["IntroEightComponent"],
                    _landing_v8_landing_v8_component__WEBPACK_IMPORTED_MODULE_41__["LandingV8Component"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_42__["HeaderComponent"],
                    _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_0__["ScrollToDirective"],
                    _components_header_white_header_white_component__WEBPACK_IMPORTED_MODULE_43__["HeaderWhiteComponent"],
                    _components_intro_nine_intro_nine_component__WEBPACK_IMPORTED_MODULE_44__["IntroNineComponent"],
                    _landing_v9_landing_v9_component__WEBPACK_IMPORTED_MODULE_45__["LandingV9Component"],
                    _components_intro_ten_intro_ten_component__WEBPACK_IMPORTED_MODULE_46__["IntroTenComponent"],
                    _landing_v10_landing_v10_component__WEBPACK_IMPORTED_MODULE_47__["LandingV10Component"],
                    _components_demos_demos_component__WEBPACK_IMPORTED_MODULE_49__["DemosComponent"],
                    _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_50__["BlogDetailsComponent"],
                    _blog_details_page_blog_details_page_component__WEBPACK_IMPORTED_MODULE_51__["BlogDetailsPageComponent"],
                    _components_intro_eleven_intro_eleven_component__WEBPACK_IMPORTED_MODULE_52__["IntroElevenComponent"],
                    _landing_v11_landing_v11_component__WEBPACK_IMPORTED_MODULE_53__["LandingV11Component"],
                    _components_presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_56__["PresentacionComponent"],
                    _components_productos_preview_productos_preview_component__WEBPACK_IMPORTED_MODULE_57__["ProductosPreviewComponent"],
                    _components_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_58__["ProyectosComponent"],
                    _components_etapas_etapas_component__WEBPACK_IMPORTED_MODULE_59__["EtapasComponent"],
                    _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_60__["LogoComponent"],
                    _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_61__["VideosComponent"],
                ],
                providers: [_helpers_window_helpers__WEBPACK_IMPORTED_MODULE_1__["WINDOW_PROVIDERS"]]
                // exports: ScrollToDirective
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-landing-landing-module.js.map