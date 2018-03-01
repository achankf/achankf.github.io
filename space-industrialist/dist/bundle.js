/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FleetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return MapDataKind; });
/* unused harmony export allMapDataKind */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__product__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__product__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__product__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_0__product__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_0__product__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_0__product__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_0__product__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_0__product__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colony__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__colony__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__industry__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__industry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inventory__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__inventory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__galaxy__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__galaxy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fleet__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__fleet__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__planet__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_6__planet__["a"]; });







var FleetState;
(function (FleetState) {
    FleetState[FleetState["Hold"] = 0] = "Hold";
    FleetState[FleetState["Move"] = 1] = "Move";
    FleetState[FleetState["Docked"] = 2] = "Docked";
})(FleetState || (FleetState = {}));
var MapDataKind;
(function (MapDataKind) {
    MapDataKind[MapDataKind["Planet"] = 0] = "Planet";
    MapDataKind[MapDataKind["Fleet"] = 1] = "Fleet";
    MapDataKind[MapDataKind["RouteSegment"] = 2] = "RouteSegment";
})(MapDataKind || (MapDataKind = {}));
const YEAR_PER_TICK = 120;
/* harmony export (immutable) */ __webpack_exports__["u"] = YEAR_PER_TICK;

const ANNUAL_INTEREST = 0.1;
/* harmony export (immutable) */ __webpack_exports__["a"] = ANNUAL_INTEREST;
 // 10% interest, compounded daily
const TRADER_COST = 10000;
/* harmony export (immutable) */ __webpack_exports__["t"] = TRADER_COST;

const INDUSTRY_COST = 10000;
/* harmony export (immutable) */ __webpack_exports__["h"] = INDUSTRY_COST;

const INDUSTRY_DEMOLISH_COST = INDUSTRY_COST / 10;
/* harmony export (immutable) */ __webpack_exports__["i"] = INDUSTRY_DEMOLISH_COST;

const POWER_PLANT_COST = 1000000;
/* harmony export (immutable) */ __webpack_exports__["n"] = POWER_PLANT_COST;

const MAP_DATA_KEYS = Object
    .keys(MapDataKind)
    .filter((k) => typeof MapDataKind[k] === "number");
const MAP_DATA_VALUES = MAP_DATA_KEYS
    .map((k) => Number(MapDataKind[k]));
function allMapDataKind() {
    return MAP_DATA_VALUES;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export position */
/* unused harmony export randomBetween */
/* unused harmony export rangeMean */
/* unused harmony export updateRange */
/* unused harmony export bound */
/* unused harmony export range */
/* unused harmony export rangeFrom */
/* unused harmony export rangeTranslateMean */
/* unused harmony export setRangeMin */
/* unused harmony export expandRange */
/* unused harmony export contractRange */
/* unused harmony export makePair */
/* unused harmony export shuffleSlice */
/* unused harmony export randomInt */
/* unused harmony export takeRandom */
/* unused harmony export lowerBound */
/* unused harmony export binarySearchPositiveNum */
/* unused harmony export binarySearchRange */
/* harmony export (immutable) */ __webpack_exports__["g"] = cmpStr;
/* unused harmony export defaultZero */
/* harmony export (immutable) */ __webpack_exports__["p"] = getQty;
/* harmony export (immutable) */ __webpack_exports__["w"] = swap;
/* unused harmony export seq */
/* unused harmony export take */
/* unused harmony export repeat */
/* unused harmony export isSorted */
/* harmony export (immutable) */ __webpack_exports__["n"] = getOr;
/* harmony export (immutable) */ __webpack_exports__["o"] = getOrSet;
/* unused harmony export setOrThrow */
/* unused harmony export mapGet */
/* unused harmony export mapAdd */
/* unused harmony export mapSubtract */
/* harmony export (immutable) */ __webpack_exports__["m"] = getAndSum;
/* unused harmony export mapFilter */
/* harmony export (immutable) */ __webpack_exports__["h"] = combineIt;
/* harmony export (immutable) */ __webpack_exports__["y"] = uniq;
/* unused harmony export group */
/* unused harmony export partition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__minheap__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mymath__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__mymath__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__mymath__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__mymath__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__mymath__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_1__mymath__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_1__mymath__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_1__mymath__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_1__mymath__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_1__mymath__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_1__mymath__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trie__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__trie__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__trie__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__trie__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__trie__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bimap__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__unionfind__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graph__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__graph__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__graph__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_5__graph__["c"]; });






/**
 *  Returns an indicator between 0 and 1 from the low side.
 *  Use 1-position to get an indicator from the high side.
 */
function position(r, cursor) {
    const numerator = cursor - r.low;
    const denominator = r.high - r.low;
    console.assert(denominator >= 0, "high < low, bug");
    if (numerator < 0) {
        return 0; // none
    }
    if (denominator === 0) {
        return 1; // infinity
    }
    return Math.min(1, numerator / denominator);
}
function randomBetween(r) {
    return Math.random() * (r.high - r.low) + r.low;
}
function rangeMean(r) {
    return (r.low + r.high) / 2;
}
function updateRange(r, value) {
    return {
        low: Math.min(r.low, value),
        high: Math.max(r.high, value),
    };
}
function bound(r, val) {
    const low = r.low;
    const high = r.high;
    return Math.min(Math.max(low, val), high);
}
function range(low, high) {
    if (high === undefined) {
        return { low, high: low };
    }
    return { low, high };
}
function rangeFrom(...nums) {
    if (nums.length < 1) {
        throw new Error("need at least 1 number to form a range");
    }
    let low = nums[0];
    let high = nums[0];
    for (const num of nums) {
        if (num < low) {
            low = num;
        }
        else if (num > high) {
            high = num;
        }
    }
    return { low, high };
}
function rangeTranslateMean(r, newMean) {
    const oldMean = rangeMean(r);
    const lowRange = oldMean - r.low;
    const highRange = r.high - oldMean;
    r.low = newMean - lowRange;
    r.high = newMean + highRange;
    console.assert(r.high >= r.low);
}
function setRangeMin(r, min) {
    const diff = r.high - r.low;
    r.low = min;
    r.high = min + diff;
    console.assert(r.high >= r.low);
}
function expandRange(r, factor) {
    const offset = (r.high - r.low) * factor;
    r.low = r.low - offset;
    r.high = r.high + offset;
    console.assert(r.high >= r.low);
}
function contractRange(r, factor) {
    const offset = (r.high - r.low) * factor;
    r.low = r.low + offset;
    r.high = r.high - offset;
    console.assert(r.high >= r.low);
}
function makePair(t, u) {
    return [t, u];
}
function* shuffleSlice(it) {
    const temp = Array.from(it);
    while (temp.length > 0) {
        const lastIdx = temp.length - 1;
        const idx = randomInt(0, lastIdx);
        yield temp[idx];
        if (idx === lastIdx) {
            temp.pop();
        }
        else {
            // swap the target with the last item
            temp[idx] = temp.pop();
        }
    }
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function takeRandom(arr) {
    console.assert(arr.length > 0, "bug: cannot take from empty array");
    return arr[randomInt(0, arr.length - 1)];
}
/**
 * Given a sorted dense array, find the first element that is >= target
 */
function lowerBound(arr, target, toVal, lessThan = (a, b) => a < b) {
    // binary search helper
    const binsearch = (low, high) => {
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const midVal = toVal(arr[mid]);
            if (lessThan(midVal, target)) {
                low = mid + 1;
            }
            else if (lessThan(target, midVal)) {
                high = mid - 1;
            }
            else {
                return [true, low, mid];
            }
        }
        return [false, low, low];
    };
    // keep repeating until duplicates run out
    {
        let [isFound, low, ret] = binsearch(0, arr.length - 1);
        let prevRet = ret;
        while (isFound) {
            prevRet = ret;
            // ret is the target and here we're interested
            // if any item in the lower partition is the same as the target
            [isFound, low, ret] = binsearch(low, ret - 1);
        }
        return prevRet;
    }
}
function binarySearchPositiveNum(target, maxPivot, toVal) {
    console.assert(target > 0);
    let cur = 0;
    let prev = 0;
    while (true) {
        if (cur >= maxPivot) {
            return maxPivot;
        }
        const val = toVal(cur);
        if (val <= target) {
            // located the range; do binary search on it
            return binarySearchRange(target, range(prev, cur), toVal);
        }
        // try the next range through hundred-drupling the upper bound
        prev = cur;
        cur = (cur + 1) * 100;
    }
}
function binarySearchRange(target, r, toVal) {
    if (target === 0) {
        return r.high;
    }
    else if (target === 1) {
        return r.low;
    }
    let low = r.low;
    let high = r.high;
    // we only care about 2 decimal places (I am not a mathematician)
    while (high - low > 0.01) {
        const pivot = (low + high) / 2;
        const pivotVal = toVal(pivot);
        if (pivotVal > target) {
            low = pivot;
        }
        else {
            high = pivot;
        }
    }
    return low;
}
function cmpStr(a, b) {
    if (a < b) {
        return -1;
    }
    else if (b < a) {
        return 1;
    }
    return 0;
}
function defaultZero(num) {
    return num === undefined ? 0 : num;
}
function getQty(map, key) {
    const qty = map.get(key);
    return defaultZero(qty);
}
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function* seq(start = 0) {
    for (let i = start;; i++) {
        yield i;
    }
}
function* take(it, num) {
    let i = 0;
    for (const item of it) {
        if (++i > num) {
            break;
        }
        yield item;
    }
}
function* repeat(data) {
    while (true) {
        yield data;
    }
}
function isSorted(it, lessThan = (a, b) => a < b) {
    let prev;
    for (const cur of it) {
        if (prev !== undefined && lessThan(cur, prev)) {
            return false;
        }
        prev = cur;
    }
    return true;
}
function getOr(map, key, defaultFn) {
    const ret = map.get(key);
    return ret === undefined ? defaultFn() : ret;
}
function getOrSet(map, key, defaultFn) {
    const ret = map.get(key);
    if (ret === undefined) {
        const def = defaultFn();
        map.set(key, def);
        return def;
    }
    return ret;
}
function setOrThrow(map, key, val) {
    const ret = map.get(key);
    if (ret !== undefined) {
        throw new Error("the map already has an entry for the given key");
    }
    map.set(key, val);
}
function mapGet(map, key, defaultVal) {
    const result = map.get(key);
    if (result === undefined) {
        if (defaultVal !== undefined) {
            return Option.some(defaultVal);
        }
        return Option.none();
    }
    else {
        return Option.some(result);
    }
}
function mapAdd(map1, map2) {
    const ret = new Map(map1);
    for (const [key, val] of map2) {
        getAndSum(ret, key, val);
    }
    return ret;
}
function mapSubtract(map1, map2) {
    const ret = new Map(map1);
    for (const [key, val] of map2) {
        getAndSum(ret, key, -val);
    }
    return ret;
}
function getAndSum(map, key, val) {
    const sum = getQty(map, key) + val;
    if (sum === 0) {
        map.delete(key);
        return 0;
    }
    map.set(key, sum);
    return sum;
}
function* mapFilter(map, pred) {
    for (const [key, val] of map) {
        if (pred(val)) {
            yield [key, val];
        }
    }
}
function* combineIt(...its) {
    for (const it of its) {
        for (const v of it) {
            yield v;
        }
    }
}
/**
 *  Return a list of unique values from a sorted list of values
 * @param sortedVals a sorted list
 * @param isEq equality comparator
 */
function* uniq(sortedVals, isEq = (a, b) => a === b) {
    if (sortedVals.length > 0) {
        let cur = sortedVals[0];
        for (const val of sortedVals) {
            if (!isEq(val, cur)) {
                yield cur;
                cur = val;
            }
        }
        yield cur; // either the last value is unique, or the previous value is not unique but haven't reported
    }
}
function group(valFn, ...vals) {
    const ret = new Map();
    for (const val of vals) {
        const u = valFn(val);
        getOrSet(ret, u, () => []).push(val);
    }
    return ret;
}
function partition(arr, pred) {
    return arr
        .reduce(([good, bad], cur) => {
        if (pred(cur)) {
            good.push(cur);
        }
        else {
            bad.push(cur);
        }
        return [good, bad];
    }, [[], []]);
}
class Option {
    static wrap(val) {
        const ret = new Option();
        ret.val = val;
        return ret;
    }
    static some(val) {
        if (val === undefined) {
            throw new Error("some cannot be undefined values");
        }
        return Option.wrap(val);
    }
    static none() {
        return new Option();
    }
    then(callback) {
        if (this.val !== undefined) {
            return callback(this.val);
        }
        else {
            return Option.none();
        }
    }
    thenSome(callback) {
        if (this.val !== undefined) {
            return Option.some(callback(this.val));
        }
        else {
            return Option.none();
        }
    }
    runSome(callback) {
        if (this.val !== undefined) {
            callback(this.val);
        }
    }
    filter(pred) {
        if (this.val !== undefined && pred(this.val)) {
            return Option.some(this.val);
        }
        else {
            return Option.none();
        }
    }
    unwrap(defaultVal) {
        if (this.val === undefined) {
            if (defaultVal !== undefined) {
                return defaultVal;
            }
            throw new Error("cannot unwrap a none value");
        }
        return this.val;
    }
    injectNone(badValFn) {
        return this.matchMap(() => this, () => Option.some(badValFn()));
    }
    match(some, none = () => { }) {
        if (this.val === undefined) {
            none();
        }
        else {
            some(this.val);
        }
    }
    matchMap(some, none = () => Option.none()) {
        if (this.val === undefined) {
            return none();
        }
        else {
            return some(this.val);
        }
    }
    isSome() {
        return this.val !== undefined;
    }
    isNone() {
        return !this.isSome();
    }
}
/* unused harmony export Option */



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = Immutable;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["k"] = bringToFront;
/* harmony export (immutable) */ __webpack_exports__["l"] = makeDraggable;
/* harmony export (immutable) */ __webpack_exports__["m"] = suspendDraggable;
/* harmony export (immutable) */ __webpack_exports__["c"] = $createTitlebar;
/* harmony export (immutable) */ __webpack_exports__["b"] = $addPanelClass;
/* harmony export (immutable) */ __webpack_exports__["a"] = $addContentPanelClass;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fleetview__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__fleetview__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__importexportview__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__importexportview__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapview__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__mapview__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__planetview__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__planetview__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routesegment__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__routesegment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectview__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__selectview__["a"]; });







function bringToFront(view) {
    const $view = $(view);
    $view.parent().append($view);
}
function makeDraggable(view, e) {
    const $ele = $(view);
    const pos = $ele.position();
    const clickPosDiff = {
        top: e.clientY - pos.top,
        left: e.clientX - pos.left,
    };
    const gesture = new Hammer.Manager(view);
    const pan = new Hammer.Pan()
        .set({ direction: Hammer.DIRECTION_ALL });
    gesture.add(pan);
    gesture.on("pan", (eInner) => {
        console.log(eInner.type);
        let [newY, newX] = [
            eInner.center.y - clickPosDiff.top,
            eInner.center.x - clickPosDiff.left,
        ];
        // let [newY, newX] = [eInner.clientY! - clickPosDiff.top, eInner.clientX! - clickPosDiff.left];
        if (newX < 0) {
            newX = 0;
        }
        const maxX = $(document.body).width() - $ele.innerWidth();
        if (newX > maxX) {
            newX = maxX;
        }
        if (newY < 0) {
            newY = 0;
        }
        const maxY = $(document.body).height() - $ele.innerHeight();
        if (newY > maxY) {
            newY = maxY;
        }
        $ele.offset({ top: newY, left: newX });
    });
    /*
    $(document)
        .mouseup(() => {
            suspendDraggable();
        })
        .mousemove((eInner) => {
            let [newY, newX] = [eInner.clientY! - clickPosDiff.top, eInner.clientX! - clickPosDiff.left];
            if (newX < 0) {
                newX = 0;
            }
            const maxX = $(document.body).width()! - $ele.innerWidth()!;
            if (newX > maxX) {
                newX = maxX;
            }
            if (newY < 0) {
                newY = 0;
            }
            const maxY = $(document.body).height()! - $ele.innerHeight()!;
            if (newY > maxY) {
                newY = maxY;
            }
            $ele.offset({ top: newY, left: newX });
        });
        */
}
function suspendDraggable() {
    $(document)
        .off("mouseup")
        .off("mousemove");
}
function $createTitlebar(game, view, title) {
    return $("<div>")
        .addClass("titlebar")
        .text(title)
        .append($("<span>")
        .append($("<span>")
        .html(`<i class="material-icons">create</i>`)
        .attr("title", "Pin this window")
        .click(() => game.pin(view)))
        .append($("<span>")
        .html(`<i class="material-icons">close</i>`)
        .attr("title", "Close this window")
        .click(() => game.close(view))));
}
function $addPanelClass(view) {
    return $(view.view).addClass("panel");
}
function $addContentPanelClass(element = document.createElement("div")) {
    return $(element).addClass("panel-content");
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UpdateChannel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dexie__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dexie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dexie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observer__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_view__ = __webpack_require__(3);




var UpdateChannel;
(function (UpdateChannel) {
    UpdateChannel[UpdateChannel["DataChange"] = 0] = "DataChange";
    UpdateChannel[UpdateChannel["TurnChange"] = 1] = "TurnChange";
    UpdateChannel[UpdateChannel["MapChange"] = 2] = "MapChange";
    UpdateChannel[UpdateChannel["RecreateIndustryLayout"] = 3] = "RecreateIndustryLayout";
})(UpdateChannel || (UpdateChannel = {}));
class DB extends __WEBPACK_IMPORTED_MODULE_0_dexie___default.a {
    constructor() {
        super("gameDB");
        this.version(1).stores({ saveTable: ",galaxySave,mapViewSave" });
    }
    save(saveData) {
        return this.saveTable.put(saveData, 0);
    }
    getSave() {
        return this.saveTable.get(0);
    }
}
class Game {
    constructor(saveData) {
        this.subject = new __WEBPACK_IMPORTED_MODULE_2__observer__["a" /* Subject */]();
        this.closables = new Set();
        this.isPinned = new Set();
        this.timePerFrame = 50;
        this.autoSaveSeconds = 60 * 1; // 1 minute
        this.db = new DB();
        this.menu = new __WEBPACK_IMPORTED_MODULE_3__view_view__["g" /* Menu */](this);
        this.reload(saveData);
    }
    static async tryLoad() {
        const saveData = await new DB().getSave();
        return new Game(saveData);
    }
    reload(saveData) {
        this.isPinned.clear();
        this.closeAll();
        if (saveData) {
            this.galaxy = __WEBPACK_IMPORTED_MODULE_1__model_model__["g" /* Galaxy */].createFrom(saveData.galaxySave);
            this.mapView = new __WEBPACK_IMPORTED_MODULE_3__view_view__["f" /* MapView */](this, saveData);
        }
        else {
            this.galaxy = new __WEBPACK_IMPORTED_MODULE_1__model_model__["g" /* Galaxy */]();
            this.galaxy.addPlanets(20, 1);
            this.mapView = new __WEBPACK_IMPORTED_MODULE_3__view_view__["f" /* MapView */](this);
        }
        // unsubsribe and then resubsribe
        this.subject.clear();
        this.subscribe(this.menu); // unchanged
        this.subscribe(this.mapView);
        // force-update the views (mainly mapview)
        this.queueUpdate(UpdateChannel.DataChange, UpdateChannel.TurnChange, UpdateChannel.MapChange);
        this.pause();
    }
    start() {
        this.resume();
        this.resumeAutoSave();
    }
    resume() {
        if (this.gameLoopId !== undefined) {
            clearInterval(this.gameLoopId);
        }
        this.gameLoopId = setInterval(() => {
            if (this.galaxy.turn()) {
                this.subject.queueUpdate(UpdateChannel.TurnChange);
            }
            this.subject.queueUpdate(UpdateChannel.DataChange);
        }, this.timePerFrame);
    }
    fastForward() {
        console.assert(this.canFastForward());
        this.timePerFrame -= 40;
        this.resume();
    }
    slowDown() {
        console.assert(this.canSlowDown());
        this.timePerFrame += 40;
        this.resume();
    }
    canFastForward() {
        return this.timePerFrame > 20;
    }
    canSlowDown() {
        return this.timePerFrame < 100;
    }
    pause() {
        if (this.gameLoopId !== undefined) {
            clearInterval(this.gameLoopId);
            this.gameLoopId = undefined;
        }
    }
    isGameRunning() {
        return this.gameLoopId !== undefined;
    }
    startRendering() {
        const startRender = () => {
            this.subject.update(this);
            requestAnimationFrame(() => startRender());
        };
        startRender();
    }
    unsubscribe(obs) {
        this.subject.unsubscribe(obs);
    }
    subscribe(...obs) {
        this.subject.subscribe(...obs);
    }
    queueUpdate(...channelTypes) {
        this.subject.queueUpdate(...channelTypes);
    }
    addClosable(obs) {
        this.closables.add(obs);
        this.subject.subscribe(obs);
    }
    pin(closable) {
        this.isPinned.add(closable);
    }
    close(closable) {
        this.unsubscribe(closable);
        closable.view.remove();
        const isDeleted = this.closables.delete(closable);
        this.isPinned.delete(closable);
        console.assert(isDeleted);
    }
    closeAll() {
        for (const closable of this.closables) {
            if (!this.isPinned.has(closable)) {
                this.close(closable);
            }
        }
    }
    serialize() {
        const galaxySave = this.galaxy.serialize();
        const mapViewSave = this.mapView.serialize();
        return {
            galaxySave,
            mapViewSave,
        };
    }
    async save() {
        const saveData = this.serialize();
        return this.db.save(saveData);
    }
    resumeAutoSave() {
        if (this.autoSaveId !== undefined) {
            clearInterval(this.autoSaveId);
        }
        this.autoSaveId = setInterval(() => {
            this.save();
        }, this.autoSaveSeconds * 1000);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Product; });
/* harmony export (immutable) */ __webpack_exports__["h"] = allProducts;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);

var Product;
(function (Product) {
    // raw materials
    Product[Product["Crop"] = 0] = "Crop";
    Product[Product["Metal"] = 1] = "Metal";
    Product[Product["Gem"] = 2] = "Gem";
    Product[Product["Fuel"] = 3] = "Fuel";
    // intermediate
    Product[Product["Fiber"] = 4] = "Fiber";
    Product[Product["Chemical"] = 5] = "Chemical";
    Product[Product["Circuit"] = 6] = "Circuit";
    Product[Product["Computer"] = 7] = "Computer";
    // common goods
    Product[Product["Food"] = 8] = "Food";
    Product[Product["Drink"] = 9] = "Drink";
    Product[Product["Apparel"] = 10] = "Apparel";
    Product[Product["Medicine"] = 11] = "Medicine";
    // luxuary
    Product[Product["Accessory"] = 12] = "Accessory";
    Product[Product["Furniture"] = 13] = "Furniture";
    Product[Product["Gadget"] = 14] = "Gadget";
    Product[Product["Vehicle"] = 15] = "Vehicle";
    // operational
    // Concrete, // construction, from metal
    Product[Product["Machine"] = 16] = "Machine";
    Product[Product["Tool"] = 17] = "Tool";
    /*
    Supply, // from common goods

    // spacecraft component points
    Hull, // from metals & chemicals
    Laser, // from metals & gems
    Gun, // from metals & gems
    Missile, // from metals & gems
    Engine, // from metals & gems
    Shield, // from gems
    Armor, // from metals
    Countermeasure, // from metals

    // solder equipments
    Rifle, // from metals
    Uniform, // from fibers
    Saber, // from metals & gems; think light saber
    Exoskeleton, // from chemicals & fibers
    */
})(Product || (Product = {}));
// https://github.com/Microsoft/TypeScript/issues/17198
const productKeys = Object
    .keys(Product)
    .filter((k) => typeof Product[k] === "number");
const productValues = productKeys
    .map((k) => Number(Product[k]))
    .sort((a, b) => a - b);
const NUM_PRODUCTS = productKeys.length;
/* harmony export (immutable) */ __webpack_exports__["c"] = NUM_PRODUCTS;

function allProducts() {
    return productValues.slice();
}
const RAW_MATERIALS = [
    Product.Crop,
    Product.Metal,
    Product.Gem,
    Product.Fuel,
];
/* harmony export (immutable) */ __webpack_exports__["e"] = RAW_MATERIALS;

const RAW_MATERIALS_SET = new Set(RAW_MATERIALS);
/* harmony export (immutable) */ __webpack_exports__["f"] = RAW_MATERIALS_SET;

function getDemandProductsHelper(productType) {
    switch (productType) {
        case Product.Crop:
        case Product.Metal:
        case Product.Gem:
        case Product.Fuel:
            return [];
        case Product.Food:
            return [new Set([Product.Crop])];
        case Product.Drink:
            return [new Set([Product.Crop])];
        case Product.Apparel:
            return [new Set([Product.Fiber])];
        case Product.Medicine:
            return [new Set([Product.Chemical])];
        case Product.Fiber:
            return [new Set([Product.Crop])];
        case Product.Chemical:
            return [new Set([
                    Product.Crop,
                    Product.Metal,
                    Product.Gem,
                    Product.Fuel,
                ])];
        case Product.Circuit:
            return [new Set([Product.Metal])];
        case Product.Computer:
            return [new Set([Product.Circuit])];
        case Product.Accessory:
            return [new Set([Product.Gem])];
        case Product.Furniture:
            return [new Set([Product.Fiber])];
        case Product.Gadget:
            return [new Set([Product.Computer])];
        case Product.Vehicle:
            return [new Set([Product.Metal])];
        case Product.Machine:
            return [
                new Set([Product.Metal]),
                new Set([Product.Computer]),
            ];
        case Product.Tool:
            return [new Set([Product.Metal])];
    }
}
const DEMAND_PRODUCTS = allProducts()
    .map((x) => getDemandProductsHelper(x));
/* harmony export (immutable) */ __webpack_exports__["a"] = DEMAND_PRODUCTS;

const FLAT_DEMAND_PRODUCTS = DEMAND_PRODUCTS
    .map((x) => __WEBPACK_IMPORTED_MODULE_0_immutable__["Set"]().union(...x));
/* harmony export (immutable) */ __webpack_exports__["b"] = FLAT_DEMAND_PRODUCTS;

const SECONDARY_PRODUCTS = __WEBPACK_IMPORTED_MODULE_0_immutable__["Set"](allProducts()
    .filter((product) => !RAW_MATERIALS_SET.has(product) && // not raw materials
    !FLAT_DEMAND_PRODUCTS[product]
        .subtract(RAW_MATERIALS_SET)
        .isEmpty()));
/* harmony export (immutable) */ __webpack_exports__["g"] = SECONDARY_PRODUCTS;
 // and requires non raw materials to produce (e.g. fibers -> apparels, where fiber needs crops to produce but apparels don't need any raw materials)
function getOpDemand(product) {
    switch (product) {
        case Product.Crop:
        case Product.Metal:
        case Product.Gem:
        case Product.Fuel:
            return Product.Tool;
        default:// post-processing industries
            return Product.Machine;
    }
}
const OP_PRODUCTS = allProducts()
    .map((x) => getOpDemand(x));
/* unused harmony export OP_PRODUCTS */



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__algorithm__ = __webpack_require__(1);

class UnionFind {
    constructor(sets) {
        this.toId = new Map();
        this.parents = new Map();
        this.id = 0;
        if (sets) {
            for (const item of sets) {
                this.add(item);
            }
        }
    }
    add(item) {
        let id = this.toId.get(item);
        if (id !== undefined) {
            return id;
        }
        // set item to be item's parent
        id = ++this.id;
        this.toId.set(item, id);
        return __WEBPACK_IMPORTED_MODULE_0__algorithm__["o" /* getOrSet */](this.parents, id, () => [id, 0]);
    }
    union(left, right) {
        const [lRoot, lRank] = this.find(left);
        const [rRoot, rRank] = this.find(right);
        if (lRoot === rRoot) {
            return;
        }
        if (lRank < rRank) {
            this.parents.set(lRoot, [rRoot, lRank]);
        }
        else if (lRank > rRank) {
            this.parents.set(rRoot, [lRoot, rRank]);
        }
        else {
            this.parents.set(lRoot, [rRoot, rRank + 1]);
        }
    }
    isSameSet(left, right) {
        const [lParent] = this.find(left);
        const [rParent] = this.find(right);
        return lParent === rParent;
    }
    find(node) {
        const path = [];
        let prev = this.toId.get(node);
        while (true) {
            const [parent, rank] = this.parents.get(prev);
            if (prev === parent) {
                // path compression
                const ret = [parent, rank];
                for (const id of path) {
                    this.parents.set(id, [...ret]);
                }
                return ret;
            }
            // collect ancestors for future path compression
            path.push(prev);
            prev = parent;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnionFind;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export list */
function list(data, id) {
    const ret = $("<select>")
        .append($("<option selected disabled hidden>"));
    if (id !== undefined) {
        ret.attr("id", id);
    }
    return ret.append(...Array
        .from(data)
        .map(([val, text]) => $("<option>")
        .attr("value", val.toString())
        .text(text)));
}
class DrawTable {
    constructor(columnHeader, refresh) {
        this.columnHeader = columnHeader;
        this.refresh = refresh;
        this.table = $("<table>");
        this.sortOrder = 0 /* Increasing */;
        if (columnHeader.length < 1) {
            throw new Error("table should have at least 1 column");
        }
        [, this.lessThan] = columnHeader[0];
        this.table
            .empty()
            .append($("<tr>").append(...this.columnHeader
            .map(([name, sortTarget]) => $("<th>")
            .text(name)
            .click(() => {
            this.lessThan = sortTarget;
            this.sortOrder = this.sortOrder === 0 /* Increasing */ ?
                1 /* Decreasing */ :
                0 /* Increasing */;
            this.refresh();
        }))));
    }
    $getTable() {
        return this.table;
    }
    render(allData, makeRowData) {
        if (this.lessThan !== undefined) {
            const lessThan = this.lessThan;
            allData
                .sort((a, b) => {
                const ord = lessThan(a, b);
                return this.sortOrder === 0 /* Increasing */ ? ord : -1 * ord;
            });
        }
        // remove everything except the header
        this.table.children().slice(1).remove();
        return this.table
            .append(...allData
            .map((data) => $("<tr>")
            .append(...makeRowData(data)
            .map((colData) => $("<td>").html(colData.toString())))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DrawTable;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(4);

// disable right-click context menu
document.body.oncontextmenu = () => false;
__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Game */]
    .tryLoad()
    .then((game) => {
    game.startRendering();
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = Dexie;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__(0);



const POWER_POTENTIAL = 200;
const PRICE_EXP_LOW = 0.7;
const PRICE_EXP_HIGH = 1.3;
const DAYS_KEEP_GOODS = 10; // number of days to keep consumption
const MIN_PRICE_PERCENT = 0.4; // percent of the base price
const COLONY_UNIT_DEMAND = (() => {
    const ret = new Array(__WEBPACK_IMPORTED_MODULE_2__model__["m" /* NUM_PRODUCTS */]).fill(0);
    ret[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Food] = 10;
    ret[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Drink] = 10;
    ret[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Apparel] = 10;
    ret[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Medicine] = 10;
    ret[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Accessory] = 5;
    ret[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Furniture] = 5;
    ret[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Gadget] = 5;
    ret[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Vehicle] = 5;
    return ret;
})();
class Colony {
    constructor(id, homePlanet, population, playerInventory, marketInventory, maxPopulation = 100, isLockPopulation = false, powerPlanetLevel = 0, powerOutputEff = 0, foodHappiness = 0, luxuryHappiness = 0, commonHappiness = 0) {
        this.id = id;
        this.homePlanet = homePlanet;
        this.population = population;
        this.playerInventory = playerInventory;
        this.marketInventory = marketInventory;
        this.maxPopulation = maxPopulation;
        this.isLockPopulation = isLockPopulation;
        this.powerPlanetLevel = powerPlanetLevel;
        this.powerOutputEff = powerOutputEff;
        this.foodHappiness = foodHappiness;
        this.luxuryHappiness = luxuryHappiness;
        this.commonHappiness = commonHappiness;
        this.derivedDemands = new Array(__WEBPACK_IMPORTED_MODULE_2__model__["m" /* NUM_PRODUCTS */]).fill(0);
    }
    static estimatePrice(demand, supply, elasticity, basePrice) {
        console.assert(elasticity > 0);
        // returns ratio in [0,2]
        const ratio = demand === 0 ?
            PRICE_EXP_LOW : // this makes 0-demand goods $1
            supply === 0 ?
                PRICE_EXP_HIGH :
                Math.min(PRICE_EXP_HIGH, demand / supply);
        // score ranges in (0,Math.pow(2,elasticity)]
        const score = Math.pow(ratio, elasticity);
        const price = basePrice * score;
        console.assert(Number.isFinite(price));
        return price;
    }
    static elasticity(product) {
        switch (product) {
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Crop:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Metal:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Gem:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Fuel:
                return 1;
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Food:
                return 1.5; // very elastic
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Drink:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Apparel:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Medicine:
                return 1;
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Accessory:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Furniture:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Gadget:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Vehicle:
                return 0.4;
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Fiber: // intermediate
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Chemical:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Circuit:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Computer:
            // case Model.Product.Concrete: // operational
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Machine:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Tool:
                return 1.5;
        }
    }
    static basePrice(product) {
        switch (product) {
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Crop: // raw materials
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Metal:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Gem:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Fuel:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Fiber: // intermediate
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Chemical:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Circuit:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Computer:
                return 1;
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Machine: // operational
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Tool:
                return 2;
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Accessory: // luxury
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Furniture:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Gadget:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Vehicle:
                return 4;
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Food: // basic
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Drink:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Apparel:
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Medicine:
                return 1.5;
        }
    }
    serialize() {
        return {
            id: this.id,
            homePlanetId: this.homePlanet.id,
            population: this.population,
            playerInventoryId: this.playerInventory.id,
            marketInventoryId: this.marketInventory.id,
            maxPopulation: this.maxPopulation,
            isLockPopulation: this.isLockPopulation,
            powerPlanetLevel: this.powerPlanetLevel,
            powerOutputEff: this.powerOutputEff,
            foodHappiness: this.foodHappiness,
            luxuryHappiness: this.luxuryHappiness,
            commonHappiness: this.commonHappiness,
        };
    }
    getHomePlanet() {
        return this.homePlanet;
    }
    getPlayerInventory() {
        return this.playerInventory;
    }
    getMarketInventory() {
        return this.marketInventory;
    }
    getPopulation() {
        return this.population;
    }
    getMaxPop() {
        return Math.ceil(this.maxPopulation);
    }
    growthRate(galaxy) {
        const baseGrowth = 0.1;
        if (this.foodHappiness < 1) {
            return this.foodHappiness - 1; // starve to death
        }
        const common = 1 + this.commonHappiness;
        // luxuary bonus only applies when common goods demands are fullfilled
        const luxury = common === 1 ? 1 + this.luxuryHappiness : 1;
        const energyUsage = 1 + this.getPowerUsageEff(galaxy);
        return energyUsage * common * luxury * baseGrowth;
    }
    getTraderPowerUsage(galaxy) {
        let numTraders = 0;
        const tos = galaxy.getTradeRoutes().get(this);
        if (tos !== undefined) {
            for (const to of tos) {
                numTraders += galaxy.getNumUsedTraders(this, to);
            }
        }
        return numTraders;
    }
    getIndustrialPowerUsage(galaxy) {
        return __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["u" /* sum */](...__WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](galaxy.getIndustries(this))
            .map((industry) => industry.getPowerUsage()));
    }
    getCivilianPowerUsage() {
        return Math.round(this.population * 10);
    }
    getTotalPowerUsage(galaxy) {
        const indUsage = this.getIndustrialPowerUsage(galaxy);
        const traderUsage = this.getTraderPowerUsage(galaxy);
        const civUsage = this.getCivilianPowerUsage();
        return indUsage + traderUsage + civUsage;
    }
    getPowerUsageEff(galaxy) {
        const usage = this.getTotalPowerUsage(galaxy);
        const output = this.getPowerOutput();
        if (usage === 0) {
            return output > 0 ? 0 : 1;
        }
        return Math.min(1, output / usage);
    }
    getPowerOutputEff() {
        return this.powerOutputEff;
    }
    getPowerOutput() {
        return Math.round(this.getMaxPowerPotential() * this.getPowerOutputEff());
    }
    getEnergyPrice(galaxy) {
        const demand = this.getTotalPowerUsage(galaxy);
        const supply = this.getPowerOutput();
        return Colony.estimatePrice(demand, supply, 1, Colony.basePrice(__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Fuel));
    }
    getMaxPowerPotential() {
        return this.powerPlanetLevel * POWER_POTENTIAL + 50;
    }
    getFuelDemand() {
        return this.getMaxPowerPotential();
    }
    getPowerPlanetLevel() {
        return this.powerPlanetLevel;
    }
    getCitizenDemand(product) {
        switch (product) {
            case __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Fuel:
                return this.getFuelDemand();
            default:
                const unitDemand = COLONY_UNIT_DEMAND[product];
                return Math.round(unitDemand * this.getPopulation());
        }
    }
    isProducing(galaxy, product) {
        for (const industry of galaxy.getIndustries(this)) {
            if (industry.productType === product) {
                return true;
            }
        }
        return false;
    }
    hasDemand(product) {
        return this.getDemand(product) > 0;
    }
    getDemand(product) {
        const base = this.getCitizenDemand(product);
        const derived = this.derivedDemands[product];
        return base + derived;
    }
    getSupply(product) {
        return this.marketInventory.getQty(product);
    }
    recalculate(galaxy) {
        this.consume();
        this.growth(galaxy);
        this.calDerivedDemand(galaxy);
    }
    calDerivedDemand(galaxy) {
        this.derivedDemands.fill(0);
        for (const industry of galaxy.getIndustries(this)) {
            const prodCap = industry.prodCap(galaxy);
            __WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](__WEBPACK_IMPORTED_MODULE_2__model__["j" /* Industry */].getDemandProducts(industry.productType))
                .map((x) => {
                return {
                    neededKinds: x,
                    qty: prodCap,
                };
            })
                .concat(industry.getOpDemand())
                .forEach((demand) => {
                for (const product of demand.neededKinds) {
                    this.derivedDemands[product] += demand.qty;
                }
            });
        }
    }
    canExpandPowerPlant(galaxy) {
        return 2 * this.getTotalPowerUsage(galaxy) > this.getMaxPowerPotential();
    }
    expandPowerPlanet(galaxy) {
        console.assert(this.canExpandPowerPlant(galaxy));
        this.powerPlanetLevel += 1;
    }
    getProdCap(galaxy, product) {
        return __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["u" /* sum */](...__WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](galaxy.getIndustries(this))
            .filter((industry) => industry.productType === product)
            .map((industry) => industry.prodCap(galaxy)));
    }
    trade(galaxy) {
        const playerInventory = this.playerInventory;
        for (const product of __WEBPACK_IMPORTED_MODULE_2__model__["v" /* allProducts */]()) {
            const qty = playerInventory.getQty(product);
            const demand = playerInventory.getDemand(galaxy, product);
            if (qty > demand) {
                const surplus = qty - demand;
                this.tryBuy(galaxy, playerInventory, product, surplus, 0);
            }
            else if (qty < demand) {
                const deficit = demand - qty;
                this.trySell(galaxy, playerInventory, product, deficit, Infinity, true);
            }
        }
    }
    lockPopulation(isLock) {
        if (isLock !== undefined) {
            this.isLockPopulation = isLock;
        }
        return this.isLockPopulation;
    }
    getPrice(product) {
        const supply = this.marketInventory.getQty(product);
        return this.realPrice(product, supply);
    }
    realPrice(product, supply) {
        const demand = this.getDemand(product); // galaxy.getGalacticDemands(product);
        const basePrice = Colony.basePrice(product);
        const elasticity = Colony.elasticity(product);
        const est = Colony.estimatePrice(demand, supply, elasticity, basePrice);
        console.assert(est >= 0);
        const minPrice = MIN_PRICE[product];
        console.assert(Number.isFinite(minPrice));
        return Math.max(minPrice, est);
    }
    tryBuy(galaxy, fromInventory, product, maxQty, minPrice) {
        console.assert(maxQty >= 0);
        const marketInventory = this.marketInventory;
        const marketQty = marketInventory.getQty(product);
        let bought = 0;
        let cost = 0;
        while (true) {
            const newMarketQty = marketQty + bought;
            const price = this.realPrice(product, newMarketQty);
            console.assert(price > 0);
            if (maxQty === bought ||
                price < minPrice) {
                break;
            }
            ++bought;
            cost += price;
        }
        if (bought > 0) {
            fromInventory.takeGoods(product, bought);
            marketInventory.putGoods(product, bought);
            galaxy.deposit(cost);
        }
        return bought;
    }
    trySell(galaxy, toInventory, product, maxQty, maxPrice, isInternalBuyer = false) {
        console.assert(maxQty >= 0);
        const marketInventory = this.marketInventory;
        const marketQty = marketInventory.getQty(product);
        const minStockQty = this.minStockQty(galaxy, product);
        let cost = 0;
        let sold = 0;
        while (true) {
            const newMarketQty = marketQty - sold;
            console.assert(newMarketQty >= 0);
            const price = this.realPrice(product, newMarketQty);
            if (maxQty === sold ||
                price > maxPrice ||
                newMarketQty === 0 ||
                !toInventory.hasSpaceFor(sold) ||
                (!isInternalBuyer && newMarketQty <= minStockQty) // cannot sell below the "safety line" to traders
            ) {
                break;
            }
            ++sold;
            cost += price;
        }
        if (sold > 0) {
            marketInventory.takeGoods(product, sold);
            toInventory.putGoods(product, sold);
            galaxy.withdraw(cost);
        }
    }
    getDeficit(galaxy, product) {
        const market = this.marketInventory;
        const qty = market.getQty(product);
        const keep = this.minStockQty(galaxy, product);
        return qty < keep ? keep - qty : 0;
    }
    minStockQty(galaxy, product) {
        const baseDemand = this.getDemand(product);
        // if the colony is producing the target goods, then keep only 1 day worth of goods for local consumption
        if (this.isProducing(galaxy, product)) {
            return baseDemand;
        }
        return DAYS_KEEP_GOODS * baseDemand;
    }
    growth(galaxy) {
        const rate = this.growthRate(galaxy) / __WEBPACK_IMPORTED_MODULE_2__model__["u" /* YEAR_PER_TICK */];
        const next = Math.max(1, this.population * (1 + rate));
        const maxPop = this.isLockPopulation ? this.population : this.getMaxPop();
        const diff = next - maxPop;
        if (diff > 0) {
            this.population = maxPop;
            galaxy.addColonists(diff); // excess population becomes colonists
        }
        else {
            this.population = Math.min(next, maxPop);
        }
    }
    consume() {
        const inventory = this.marketInventory;
        const consume1 = (product) => {
            const qty = inventory.getQty(product);
            const demand = Math.floor(this.getCitizenDemand(product));
            if (demand === 0) {
                return 1;
            }
            const consumed = qty >= demand ? demand : qty;
            inventory.takeGoods(product, consumed);
            return consumed / demand;
        };
        const allConsumption = __WEBPACK_IMPORTED_MODULE_2__model__["v" /* allProducts */]()
            .map((product) => consume1(product));
        this.commonHappiness = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["f" /* average */](allConsumption[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Drink], allConsumption[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Apparel], allConsumption[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Medicine]);
        this.luxuryHappiness = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["f" /* average */](allConsumption[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Accessory], allConsumption[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Furniture], allConsumption[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Gadget], allConsumption[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Vehicle]);
        this.foodHappiness = allConsumption[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Food];
        const fEff = allConsumption[__WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Fuel];
        this.powerOutputEff = fEff * fEff; // fEff squared
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Colony;

// needs to be placed after Colony for webpack'ed bundle to work
const MIN_PRICE = __WEBPACK_IMPORTED_MODULE_2__model__["v" /* allProducts */]()
    .map((product) => {
    const basePrice = Colony.basePrice(product);
    const elasticity = Colony.elasticity(product);
    return Math.pow(MIN_PRICE_PERCENT * basePrice, elasticity);
});


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__algorithm__ = __webpack_require__(1);

class MinHeap {
    constructor(it, lessThan = (a, b) => a < b) {
        this.lessThan = lessThan;
        this.arr = it ? Array.from(it) : [];
        MinHeap.heapify(this.arr, lessThan);
    }
    static heapify(arr, lessThan) {
        // walking up the heap by going backward
        for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--) {
            bubbleDown(arr, i, arr.length, lessThan);
        }
        return arr;
    }
    /**
     * Wraps a heapified array into a MinHeap without any checking whatsoever.
     * @param arr an heapified array slice, presumably generated from MinHeap.slice()
     * @param lessThan the comparator
     */
    static unsafeWrap(arr, lessThan = (a, b) => a < b) {
        const ret = new MinHeap([], lessThan);
        ret.arr = arr;
        return ret;
    }
    size() {
        return this.arr.length;
    }
    pop() {
        const ret = pop(this.arr, this.arr.length, this.lessThan); // swaps the head to the end
        const poped = this.arr.pop();
        console.assert(ret === poped);
        return ret;
    }
    peek() {
        return this.arr[0];
    }
    take(num) {
        if (num < 0) {
            throw new Error("cannot take negative items");
        }
        const max = Math.min(this.arr.length, num);
        const ret = new Array(max);
        for (let i = 0; i < max; i++) {
            ret[i] = this.pop();
        }
        return ret;
    }
    updateRoot(newValue) {
        this.arr[0] = newValue;
        bubbleDown(this.arr, 0, this.arr.length, this.lessThan);
    }
    slice() {
        return this.arr.slice();
    }
    // return a sorted iterable ordered by the least priority (i.e. high-to-low)
    // this is *the* in-place version
    reverseSort() {
        const arr = this.arr;
        this.arr = []; // clears the array in case for reusing this heap
        for (let len = arr.length; len > 0; len--) {
            pop(arr, len, this.lessThan);
        }
        return arr;
    }
    // return a sorted iterable ordered by the most priority (i.e. low-to-high)
    *sort() {
        const arr = this.arr;
        this.arr = []; // clears the array in case for reusing this heap
        let val = pop(arr, arr.length, this.lessThan);
        while (val !== undefined) {
            yield arr.pop();
            val = pop(arr, arr.length, this.lessThan);
        }
    }
    *sortSlice() {
        const arr = this.arr.slice();
        let val = pop(arr, arr.length, this.lessThan);
        while (val !== undefined) {
            yield arr.pop();
            val = pop(arr, arr.length, this.lessThan);
        }
    }
    insert(data) {
        const idx = this.arr.length;
        this.arr.push(data);
        bubbleUp(this.arr, idx, this.lessThan);
    }
}
/* unused harmony export MinHeap */

function ancestor(n, k) {
    return Math.floor((n + 1) / Math.pow(2, k) - 1);
}
function parent(n) {
    return ancestor(n, 1);
}
function leftChild(i) {
    return 2 * i + 1;
}
// pop swaps the root to the end of the array; caller is responsible for memeory management
function pop(arr, length, lessThan) {
    const lenMinus = length - 1;
    if (length === 0) {
        return;
    }
    else if (length === 1) {
        return arr[lenMinus];
    }
    const ret = arr[0];
    __WEBPACK_IMPORTED_MODULE_0__algorithm__["w" /* swap */](arr, 0, lenMinus); // replace root with the last element and then bubbledown
    bubbleDown(arr, 0, lenMinus, lessThan);
    return ret;
}
function bubbleDown(arr, start, length, lessThan) {
    const root = arr[start];
    let i = start; // iterator starting at the root node defined by start
    while (true) {
        let candidate = leftChild(i);
        if (candidate >= length) {
            break;
        }
        const left = arr[candidate];
        const rightIdx = candidate + 1;
        if (rightIdx < length && // right-child exists and
            lessThan(arr[rightIdx], left) // right child is less than left-child
        ) {
            candidate++;
        }
        if (lessThan(root, arr[candidate])) {
            break;
        }
        __WEBPACK_IMPORTED_MODULE_0__algorithm__["w" /* swap */](arr, i, candidate);
        i = candidate;
    }
}
function bubbleUp(arr, start, lessThan) {
    // O(loglog n) comparisons to look for number of ancestors to be swapped
    // ... not that it's an optimization or anything, it's just a copy-paste
    // from my homework back in school
    const numAncestorsToBeSwapped = () => {
        if (start === 0) {
            return 0;
        }
        let high = (Math.log(start + 1) / Math.log(2));
        let cur = start;
        let low = 0;
        let pivot;
        // binary search on a branch of heap -- O(lglg n) comparisions
        while (true) {
            pivot = Math.floor((high + low) / 2);
            if (high < low) {
                break;
            }
            cur = ancestor(start, pivot);
            if (lessThan(arr[start], arr[cur])) {
                low = pivot + 1;
            }
            else if (lessThan(arr[cur], arr[start])) {
                high = pivot - 1;
            }
            else {
                break;
            }
        }
        // pivot + boundary case adjustment
        if (lessThan(arr[start], arr[parent(cur)])) {
            return pivot + 1;
        }
        return pivot;
    };
    const num = numAncestorsToBeSwapped();
    let it = start;
    let par;
    for (let i = 0; i < num; i++) {
        par = parent(it);
        __WEBPACK_IMPORTED_MODULE_0__algorithm__["w" /* swap */](arr, it, par);
        it = par;
    }
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getQuantile */
/* harmony export (immutable) */ __webpack_exports__["h"] = sum;
/* harmony export (immutable) */ __webpack_exports__["a"] = average;
/* harmony export (immutable) */ __webpack_exports__["d"] = equal2D;
/* harmony export (immutable) */ __webpack_exports__["b"] = compare2D;
/* harmony export (immutable) */ __webpack_exports__["g"] = subtract2D;
/* harmony export (immutable) */ __webpack_exports__["i"] = sum2D;
/* harmony export (immutable) */ __webpack_exports__["e"] = norm2D;
/* harmony export (immutable) */ __webpack_exports__["c"] = distance2D;
/* unused harmony export scalarMult2D */
/* harmony export (immutable) */ __webpack_exports__["f"] = project2D;
/* unused harmony export determinant2D */
/* unused harmony export isPointInRect */
/* unused harmony export testLineCircleIntersect */
/* harmony export (immutable) */ __webpack_exports__["j"] = testLineSegmentCircleIntersect;
// IANAM (I am not a mathematician)
function getQuantile(data, parts) {
    const copy = data.slice().sort();
    const percentile = copy.length / parts;
    return new Array(parts)
        .fill(0)
        .map((_, i) => copy[Math.floor(i * percentile)]);
}
function sum(...args) {
    return args
        .filter((val) => !Number.isNaN(val))
        .reduce((prev, cur) => prev + cur, 0);
}
function average(...args) {
    return args.length === 0 ? NaN : sum(...args) / args.length;
}
function equal2D([ax, ay], [bx, by]) {
    return ax === bx && ay === by;
}
function compare2D([ax, ay], [bx, by]) {
    if (ax < bx) {
        return -1;
    }
    if (ax > bx) {
        return 1;
    }
    return ay - by;
}
function subtract2D([ax, ay], [bx, by]) {
    return [ax - bx, ay - by];
}
function sum2D([ax, ay], [bx, by]) {
    return [ax + bx, ay + by];
}
function norm2D([ax, ay]) {
    return Math.sqrt(ax * ax + ay * ay);
}
function distance2D(a, b) {
    return norm2D(subtract2D(a, b));
}
function scalarMult2D([ax, ay], scalar) {
    return [scalar * ax, scalar * ay];
}
function project2D(a, scalar = 1) {
    const norm = norm2D(a);
    console.assert(norm !== 0, "caller make sure the given vector is not the origin");
    return scalarMult2D(a, scalar / norm);
}
function determinant2D([ax, ay], [bx, by]) {
    return ax * by - bx * ay;
}
function isPointInRect([px, py], [ax, ay], [bx, by]) {
    const maxX = Math.max(ax, bx);
    const minX = Math.min(ax, bx);
    const maxY = Math.max(ay, by);
    const minY = Math.min(ay, by);
    return px <= maxX && px >= minX && py <= maxY && py >= minY;
}
/**
 * Test whether a given infinite line, defined by a & b, intersects a circle.
 * @param a a point in the line segment
 * @param b another point in the line segment
 * @param c the center of the target circle
 * @param r the target circle's radius
 * @see https://math.stackexchange.com/a/2035466
 * @see http://mathworld.wolfram.com/Circle-LineIntersection.html
 */
function testLineCircleIntersect(a, b, c, r) {
    // translate a and b by c, to simplify the problem to testing a line to a circle centered around the origin
    const ta = subtract2D(a, c);
    const tb = subtract2D(b, c);
    const dr = distance2D(a, b);
    const dr2 = dr * dr;
    const r2 = r * r;
    const det = determinant2D(ta, tb);
    const det2 = det * det;
    const discriminant = r2 * dr2 - det2;
    if (discriminant < 0) {
        return 0 /* None */;
    }
    else if (discriminant > 0) {
        return 2 /* Intersection */;
    }
    else {
        return 1 /* Tangent */;
    }
}
function testLineSegmentCircleIntersect(a, b, c, r) {
    // for finite line segments, test whether the center is within the rectangle defined by a,b
    if (!isPointInRect(c, a, b)) {
        return 0 /* None */;
    }
    return testLineCircleIntersect(a, b, c, r);
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__algorithm__ = __webpack_require__(1);

class OrderListSet {
    constructor(cmp) {
        this.cmp = cmp;
        this.map = new OrderListMap(this.cmp);
    }
    add(...key) {
        this.map.set(true, ...key);
        return this;
    }
    has(...key) {
        return this.map.get(...key) !== undefined;
    }
    delete(...key) {
        return this.map.delete(...key);
    }
    size() {
        return this.map.size();
    }
    values() {
        return this.map.keys();
    }
    [Symbol.iterator]() {
        return this.values();
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = OrderListSet;

class OrderListMap {
    constructor(cmp) {
        this.cmp = cmp;
        this.trie = new Trie();
    }
    set(val, ...key) {
        this.trie.set(this.sortKey(key), val);
        return this;
    }
    get(...key) {
        return this.trie.get(this.sortKey(key));
    }
    has(...key) {
        return this.trie.get(this.sortKey(key)) !== undefined;
    }
    delete(...key) {
        return this.trie.delete(this.sortKey(key));
    }
    clear() {
        this.trie = new Trie();
    }
    size() {
        return this.trie.size();
    }
    [Symbol.iterator]() {
        return this.trie.entries();
    }
    entries() {
        return this.trie.entries();
    }
    keys() {
        return this.trie.keys();
    }
    values() {
        return this.trie.values();
    }
    getOrSet(defaultVal, ...key) {
        return this.trie.getOrSet(this.sortKey(key), defaultVal);
    }
    sortKey(key) {
        return key.sort(this.cmp);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OrderListMap;

class TupleMap {
    constructor(...data) {
        this.trie = Trie.make(...data);
    }
    clear() {
        this.trie = new Trie();
    }
    size() {
        return this.trie.size();
    }
    has(key) {
        return this.trie.get(key) !== undefined;
    }
    get(key) {
        return this.trie.get(key);
    }
    set(key, value) {
        this.trie.set(key, value);
        return this;
    }
    delete(key) {
        return this.trie.delete(key);
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    entries() {
        return this.trie.entries();
    }
    keys() {
        return this.trie.keys();
    }
    values() {
        return this.trie.values();
    }
    getOrSet(key, defaultVal) {
        return this.trie.getOrSet(key, defaultVal);
    }
    *nextOrder() {
        return this.trie.nextOrder();
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = TupleMap;

class TupleSet {
    constructor(...data) {
        this.trie = Trie.make(...data.map((x) => [x, true]));
    }
    clear() {
        this.trie = new Trie();
    }
    size() {
        return this.trie.size();
    }
    has(key) {
        return this.trie.get(key) !== undefined;
    }
    add(key) {
        this.trie.set(key, true);
        return this;
    }
    delete(key) {
        return this.trie.delete(key);
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    entries() {
        return this.values();
    }
    keys() {
        return this.trie.keys();
    }
    values() {
        return this.keys();
    }
    getOrAdd(key) {
        return this.trie.getOrSet(key, () => true);
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = TupleSet;

class Trie {
    constructor() {
        this.next = new Map();
        this.size2 = 0;
    }
    static make(...list) {
        return list
            .reduce((acc, [keyString, val]) => acc
            .set(keyString, val), new Trie());
    }
    size() {
        return this.size2;
    }
    get(key) {
        const node = this.traverse(key);
        if (node) {
            return node.end;
        }
    }
    keyChar() {
        return this.keyChar;
    }
    delete(key) {
        const ancestors = [];
        const node = this.traverse(key, (kc, n) => ancestors.push([kc, n]));
        if (!node || node.end === undefined) {
            return false;
        }
        --this.size2;
        // clean up unused structure
        let cur = node;
        for (let i = ancestors.length - 1; i >= 0; i--) {
            // current node is still in used by other keys
            if (cur.next.size !== 0) {
                break;
            }
            // otherwise delete the current (unused) structure
            const [kc, parent] = ancestors[i];
            console.assert(parent.next.size > 0);
            parent.next.delete(kc);
            cur = parent;
        }
        return true;
    }
    set(key, val) {
        let temp = this;
        key.forEach((keyChar) => {
            if (keyChar === undefined) {
                throw new Error("undefined not allowed as part of the key");
            }
            let next = temp.next.get(keyChar);
            if (next === undefined) {
                next = new Trie();
                temp.next.set(keyChar, next);
            }
            next.keyChar2 = keyChar;
            temp = next;
        });
        temp.end = val;
        ++this.size2;
        return this;
    }
    getOrSet(key, defaulVal) {
        let temp = this;
        key.forEach((keyChar) => {
            if (keyChar === undefined) {
                throw new Error("undefined not allowed as part of the key");
            }
            let next = temp.next.get(keyChar);
            if (next === undefined) {
                next = new Trie();
                temp.next.set(keyChar, next);
            }
            next.keyChar2 = keyChar;
            temp = next;
        });
        if (temp.end === undefined) {
            temp.end = defaulVal();
            ++this.size2;
        }
        return temp.end;
    }
    /**
     * For debugging and unit-testing only.
     * @param key the key
     */
    getFanout(key) {
        const node = this.traverse(key);
        if (node) {
            return node.next.size;
        }
        return 0;
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    *entries() {
        const allNodes = __WEBPACK_IMPORTED_MODULE_0__algorithm__["j" /* depthFirstTraversal */](this, (me) => me.next.values());
        const key = [];
        let curDepth = 0;
        for (const [node, depth] of allNodes) {
            const depthDiff = curDepth - depth;
            for (let i = 0; i < depthDiff; i++) {
                key.pop();
                curDepth--;
            }
            if (node.keyChar2 !== undefined) {
                key.push(node.keyChar2);
            }
            else {
                console.assert(depth === 0);
            }
            ++curDepth;
            if (node.end !== undefined) {
                yield [key.slice(), node.end];
            }
        }
    }
    *keys() {
        for (const [key] of this.entries()) {
            yield key;
        }
    }
    *values() {
        for (const [, val] of this.entries()) {
            yield val;
        }
    }
    *nextOrder() {
        for (const subTrie of this.next.values()) {
            yield [subTrie.keyChar(), subTrie];
        }
    }
    traverse(key, visit = () => { }) {
        let cur = this;
        const isFound = key.every((keyChar) => {
            const temp = cur.next.get(keyChar);
            if (temp === undefined) {
                return false;
            }
            visit(keyChar, cur);
            cur = temp;
            return true;
        });
        if (isFound) {
            return cur;
        }
    }
}
/* unused harmony export Trie */



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Bi-direction map, based on two Map objects. Use this class for data that has a bijective relationship.
 */
class BiMap {
    constructor(...data) {
        this.leftMap = new Map(data);
        this.rightMap = new Map(data.map(([t, u]) => [u, t]));
    }
    size() {
        console.assert(this.leftMap.size === this.rightMap.size);
        return this.leftMap.size;
    }
    set(left, right) {
        this.leftMap.set(left, right);
        this.rightMap.set(right, left);
    }
    deleteLeft(left) {
        const right = this.leftMap.get(left);
        return right !== undefined && this.delete(left, right);
    }
    deleteRight(right) {
        const left = this.rightMap.get(right);
        return left !== undefined && this.delete(left, right);
    }
    getRight(left) {
        return this.leftMap.get(left);
    }
    getLeft(right) {
        return this.rightMap.get(right);
    }
    hasLeft(left) {
        return this.leftMap.has(left);
    }
    hasRight(right) {
        return this.rightMap.has(right);
    }
    lefts() {
        return this.leftMap.keys();
    }
    rights() {
        return this.rightMap.keys();
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    entries() {
        return this.leftMap.entries();
    }
    delete(left, right) {
        const ret1 = this.leftMap.delete(left);
        const ret2 = this.rightMap.delete(right);
        console.assert(ret1);
        console.assert(ret2);
        return true;
    }
}
/* unused harmony export BiMap */



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export breadthFirstTraversal */
/* harmony export (immutable) */ __webpack_exports__["b"] = depthFirstTraversal;
/* harmony export (immutable) */ __webpack_exports__["c"] = kruskalMST;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__algorithm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__unionfind__ = __webpack_require__(6);


/**
 * Breadth First Traversal
 * @param root the root node
 * @param neighbours a function that return edges of a node
 * @param key turns a node into a unique value, needed if the neighbours
 *  are derived values instead of pointing to the actual nodes in the graph, then a key function must be provided.
 */
function* breadthFirstTraversal(root, neighbours, key) {
    const workList = [[root, 0]];
    const visited = new Set();
    const keyit = key ? key : (me) => me;
    while (workList.length > 0) {
        const [cur, depth] = workList.shift();
        yield [cur, depth];
        visited.add(keyit(cur));
        const depth1 = depth + 1;
        for (const nei of neighbours(cur)) {
            visited.add(keyit(nei));
            if (!visited.has(keyit(nei))) {
                workList.push([nei, depth1]);
            }
        }
    }
}
/**
 * Depth First Traversal
 * @param root the root node
 * @param neighbours a function that return edges of a node
 * @param isVisited a function that indicates whether a node is visited; optional if the graph is a tree
 * @param markVisited a function that marks a node as visited; optional if the graph is a tree
 */
function* depthFirstTraversal(root, neighbours) {
    const workList = [[root, 0]];
    const visited = new Set();
    while (workList.length > 0) {
        const [cur, depth] = workList.pop();
        if (!visited.has(cur)) {
            yield [cur, depth];
            visited.add(cur);
            const depth1 = depth + 1;
            for (const nei of neighbours(cur)) {
                workList.push([nei, depth1]);
            }
        }
    }
}
/**
 * Minimum spanning tree, Kruskal's algorithm
 * @param vertices vertices
 * @param neighbours neighbours that forms an edge with a given vertex
 * @param weight the weight of each edge
 */
function kruskalMST(vertices, neighbours, weight) {
    /*
    https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
    KRUSKAL(G):
    1 A = ∅
    2 foreach v ∈ G.V:
    3    MAKE-SET(v)
    4 foreach (u, v) in G.E ordered by weight(u, v), increasing:
    5    if FIND-SET(u) ≠ FIND-SET(v):
    6       A = A ∪ {(u, v)}
    7       UNION(u, v)
    8 return A
    */
    const sets = new __WEBPACK_IMPORTED_MODULE_1__unionfind__["a" /* UnionFind */](vertices);
    const edges = Array
        .from(vertices)
        .reduce((acc, u) => {
        acc.push(...Array
            .from(neighbours(u))
            .map((v) => [u, v]));
        return acc;
    }, new Array())
        .sort(([u1, v1], [u2, v2]) => {
        return weight(u1, v1) - weight(u2, v2);
    });
    return edges.reduce((acc, [u, v]) => {
        if (!sets.isSameSet(u, v)) {
            __WEBPACK_IMPORTED_MODULE_0__algorithm__["o" /* getOrSet */](acc, u, () => []).push(v);
            __WEBPACK_IMPORTED_MODULE_0__algorithm__["o" /* getOrSet */](acc, v, () => []).push(u);
            sets.union(u, v);
        }
        return acc;
    }, new Map());
}
/**
 * All-pair shortest pairs, Floyd-Warshall algorithm
 * @see https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm
 */
class FloydWarshall {
    constructor(graph, weight) {
        /*
        let dist be a |V| * |V| array of minimum distances initialized to Infinity
        let next be a |V| * |V| array of vertex indices initialized to null

        procedure FloydWarshallWithPathReconstruction ()
        for each edge (u,v)
            dist[u][v] ← w(u,v)  // the weight of the edge (u,v)
            next[u][v] ← v
        for k from 1 to |V| // standard Floyd-Warshall implementation
            for i from 1 to |V|
                for j from 1 to |V|
                    if dist[i][j] > dist[i][k] + dist[k][j] then
                    dist[i][j] ← dist[i][k] + dist[k][j]
                    next[i][j] ← next[i][k]
        */
        console.assert(graph !== undefined);
        this.vertices = [...graph.keys()];
        this.verticesIdx = new Map(Array
            .from(this.vertices)
            .map((v, i) => [v, i]));
        const vSize = graph.size;
        const dist = new Array(vSize);
        const next = this.nextMap = new Array(vSize);
        for (let i = 0; i < vSize; i++) {
            dist[i] = new Array(vSize).fill(Infinity);
            next[i] = new Array(vSize);
        }
        for (const v of this.vertices) {
            const vIdx = this.verticesIdx.get(v);
            dist[vIdx][vIdx] = 0;
        }
        for (const [u, vs] of graph) {
            for (const v of vs) {
                const uIdx = this.verticesIdx.get(u);
                const vIdx = this.verticesIdx.get(v);
                dist[uIdx][vIdx] = weight(u, v);
                next[uIdx][vIdx] = vIdx;
            }
        }
        for (let k = 0; k < vSize; k++) {
            for (let i = 0; i < vSize; i++) {
                for (let j = 0; j < vSize; j++) {
                    const distIncludeK = dist[i][k] + dist[k][j];
                    if (dist[i][j] > distIncludeK) {
                        dist[i][j] = distIncludeK;
                        next[i][j] = next[i][k];
                    }
                }
            }
        }
    }
    *path(u, v) {
        /*
            procedure Path(u, v)
            if next[u][v] = null then
                return []
            path = [u]
            while u ≠ v
                u ← next[u][v]
                path.append(u)
            return path
        */
        let uIdx = this.verticesIdx.get(u);
        const vIdx = this.verticesIdx.get(v);
        const nextMap = this.nextMap;
        if (nextMap[uIdx][vIdx] !== undefined) {
            yield u;
            while (uIdx !== vIdx) {
                uIdx = nextMap[uIdx][vIdx];
                yield this.vertices[uIdx];
            }
        }
    }
    next(u, v) {
        const vIdx = this.verticesIdx.get(v);
        const uIdx = this.verticesIdx.get(u);
        const nextIdx = this.nextMap[uIdx][vIdx];
        if (nextIdx !== undefined) {
            return this.vertices[nextIdx];
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FloydWarshall;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product__ = __webpack_require__(5);


const BASE_YIELD = 10;
const MAX_OP_PRODUCTS = 10;
const MIN_OP_EFF = 0.1;
const REMAIN_CHANGE_EFF_FACTOR = 0.8; // i.e. 20% eff loss when upgrading/down-sizing industrial complex
const BASE_FIXED_COST = 0.3;
const MIN_FIXED_COST = 0.03;
const FIXED_COST_OFFSET = BASE_FIXED_COST - MIN_FIXED_COST;
console.assert(FIXED_COST_OFFSET > 0);
const BASE_POWER_USAGE = 10;
// bonus production modifiers
const OP_FACTOR_BONUS = 4;
const ENERGY_BONUS = 4;
class Industry {
    constructor(id, productType, colony, scale = 1, operationalEff = MIN_OP_EFF) {
        this.id = id;
        this.productType = productType;
        this.colony = colony;
        this.scale = scale;
        this.operationalEff = operationalEff;
    }
    static getDemandProducts(productType) {
        return __WEBPACK_IMPORTED_MODULE_0__model__["c" /* DEMAND_PRODUCTS */][productType];
    }
    static getFlatDemandProducts(productType) {
        return __WEBPACK_IMPORTED_MODULE_0__model__["d" /* FLAT_DEMAND_PRODUCTS */][productType];
    }
    serialize() {
        return {
            id: this.id,
            productType: this.productType,
            colonyId: this.colony.id,
            scale: this.scale,
            operationalEff: this.operationalEff,
        };
    }
    upgrade() {
        ++this.scale;
        this.operationalEff = Math.max(MIN_OP_EFF, REMAIN_CHANGE_EFF_FACTOR * this.operationalEff);
    }
    downSize() {
        this.scale = Math.max(1, this.scale - 1);
        this.operationalEff = Math.max(MIN_OP_EFF, REMAIN_CHANGE_EFF_FACTOR * this.operationalEff);
    }
    getScale() {
        return this.scale;
    }
    operate(galaxy) {
        const isRunProd = this.isRunProd(galaxy);
        const playerInventory = this.colony.getPlayerInventory();
        let numProduced = 0;
        if (isRunProd) {
            numProduced = this.produce(galaxy, playerInventory);
        }
        numProduced = Math.max(1, numProduced);
        const costPerUnit = this.getCostPerUnit();
        const prodCost = costPerUnit * numProduced;
        const energyCost = this.usedEnergy(galaxy) + this.colony.getEnergyPrice(galaxy);
        galaxy.withdraw(prodCost + energyCost);
        this.updateModifers(isRunProd, playerInventory);
    }
    getCostPerUnit() {
        const costReduction = 1 - this.operationalEff;
        console.assert(costReduction >= 0 && costReduction <= 1);
        return MIN_FIXED_COST + FIXED_COST_OFFSET * costReduction;
    }
    usedEnergy(galaxy) {
        return this.getPowerUsage() * this.colony.getPowerUsageEff(galaxy);
    }
    getOpDemand() {
        const qty = MAX_OP_PRODUCTS * this.scale;
        switch (this.productType) {
            case __WEBPACK_IMPORTED_MODULE_1__product__["d" /* Product */].Crop:
            case __WEBPACK_IMPORTED_MODULE_1__product__["d" /* Product */].Metal:
            case __WEBPACK_IMPORTED_MODULE_1__product__["d" /* Product */].Gem:
            case __WEBPACK_IMPORTED_MODULE_1__product__["d" /* Product */].Fuel:
                return {
                    neededKinds: new Set([__WEBPACK_IMPORTED_MODULE_1__product__["d" /* Product */].Tool]),
                    qty,
                };
            default:// post-processing industries
                return {
                    neededKinds: new Set([__WEBPACK_IMPORTED_MODULE_1__product__["d" /* Product */].Machine]),
                    qty,
                };
        }
    }
    prodCap(galaxy) {
        const operationalFactor = 1 + this.operationalEff * OP_FACTOR_BONUS;
        const energyBonus = 1 + this.colony.getPowerUsageEff(galaxy) * ENERGY_BONUS;
        return Math.max(1, Math.ceil(this.scale * BASE_YIELD * operationalFactor * energyBonus));
    }
    getOperationalEff() {
        return this.operationalEff;
    }
    getPowerUsage() {
        return this.getScale() * BASE_POWER_USAGE;
    }
    isRunProd(galaxy) {
        const productType = this.productType;
        const demandQty = 10 * galaxy.getGalacticDemands(productType);
        const supplyQty = this.colony.getSupply(productType);
        const playerInventory = this.colony.getPlayerInventory();
        const inStock = playerInventory.getQty(this.productType);
        // produce when there's excess demand
        return demandQty > inStock + supplyQty;
    }
    updateModifers(isRunProd, inventory) {
        const opDemand = this.getOpDemand();
        const consumed = inventory.consume(opDemand.neededKinds, opDemand.qty);
        const ratio = consumed / opDemand.qty;
        if (!isRunProd || ratio < 0.5) {
            // not running production or too few tools, penatly
            this.operationalEff = Math.max(MIN_OP_EFF, this.operationalEff - 0.001);
        }
        else {
            const consumptionFactor = (ratio - 0.5) / 0.5;
            this.operationalEff = Math.min(1, this.operationalEff + 0.01 * consumptionFactor);
        }
    }
    produce(galaxy, inventory) {
        const demandProducts = Industry.getFlatDemandProducts(this.productType);
        const prodCap = this.prodCap(galaxy);
        if (demandProducts.size === 0) {
            // no input requirement, produce full production capacity
            inventory.putGoods(this.productType, prodCap);
            return prodCap;
        }
        const produceQty = Math.min(prodCap, // note: cannot produce greater than the production capacity
        ...demandProducts.map((product) => inventory.getQty(product)));
        for (const demandGroup of Industry.getDemandProducts(this.productType)) {
            const consumed = inventory.consume(demandGroup, produceQty);
            console.assert(consumed === produceQty);
        }
        inventory.putGoods(this.productType, produceQty);
        return produceQty;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Industry;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__(0);



class Inventory {
    constructor(id, maxStorage = Infinity, inventory = new Array(__WEBPACK_IMPORTED_MODULE_2__model__["m" /* NUM_PRODUCTS */]).fill(0)) {
        this.id = id;
        this.maxStorage = maxStorage;
        this.inventory = inventory;
        // either generated on the fly or restored from some source
        this.demandSrcs = [];
        this.usedSpace = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["u" /* sum */](...this.inventory);
        console.assert(this.usedSpace <= maxStorage);
    }
    serialize() {
        return {
            id: this.id,
            maxStorage: this.maxStorage,
            inventory: this.inventory,
        };
    }
    getEmptySpace() {
        const space = this.maxStorage - this.usedSpace;
        console.assert(space >= 0);
        return space;
    }
    getMaxSpace() {
        return this.maxStorage;
    }
    getQty(productType) {
        const qty = this.inventory[productType];
        console.assert(qty >= 0);
        return qty;
    }
    putGoods(productType, qty) {
        console.assert(qty >= 0);
        console.assert(Number.isInteger(qty));
        const inStock = this.inventory[productType];
        const newQty = Math.min(this.maxStorage - this.usedSpace, qty);
        const newTotal = inStock + newQty;
        this.inventory[productType] = newTotal;
        this.usedSpace += newQty;
        return newTotal;
    }
    takeGoods(productType, qty) {
        console.assert(qty >= 0);
        console.assert(Number.isInteger(qty));
        const remain = this.inventory[productType] - qty;
        if (remain < 0) {
            throw new Error("bug: responsibility of maintaining non-negative quantity goes to the caller");
        }
        this.inventory[productType] = remain;
        this.usedSpace -= qty;
        return remain;
    }
    hasSpaceFor(qty) {
        console.assert(qty >= 0);
        return this.maxStorage >= this.usedSpace + qty;
    }
    addDemandSrc(demandSrc) {
        this.demandSrcs.push(demandSrc);
    }
    getDemand(galaxy, product) {
        const demands = new Array(__WEBPACK_IMPORTED_MODULE_2__model__["m" /* NUM_PRODUCTS */]).fill(0);
        for (const src of this.demandSrcs) {
            const prodCap = src.prodCap(galaxy);
            const allDemands = __WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](__WEBPACK_IMPORTED_MODULE_2__model__["j" /* Industry */].getDemandProducts(src.productType))
                .map((x) => {
                return {
                    neededKinds: x,
                    qty: prodCap,
                };
            }).concat(src.getOpDemand());
            for (const demand of allDemands) {
                if (!demand.neededKinds.has(product)) {
                    continue;
                }
                // try to fill alternatives demands
                let need = demand.qty;
                for (const kind of demand.neededKinds) {
                    const qty = this.getQty(kind);
                    if (qty > need) {
                        demands[kind] += need;
                        break;
                    }
                    else {
                        need -= qty;
                        demands[kind] += qty;
                    }
                }
                console.assert(need >= 0);
                // fill remaining needs with the target product
                demands[product] += need;
            }
        }
        return demands[product];
    }
    *getAllQty() {
        const it = this.inventory
            .map((qty, idx) => [idx, qty]);
        for (const pair of it) {
            // any entry must have qty >= 0
            console.assert(pair[1] >= 0);
            yield pair;
        }
    }
    consume(products, qty) {
        console.assert(qty >= 0);
        const sorted = Array
            .from(products)
            .sort((a, b) => this.getQty(b) - this.getQty(a));
        // try to consume products with the highest stock qty
        let consumed = qty;
        for (const product of sorted) {
            const inStock = this.getQty(product);
            if (consumed > inStock) {
                this.takeGoods(product, inStock);
                consumed -= inStock;
            }
            else {
                this.takeGoods(product, consumed);
                consumed = 0;
                break; // consumed everything needed
            }
        }
        return qty - consumed;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Inventory;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product__ = __webpack_require__(5);





const BIG_TURN = 50;
const STARTING_CAPITAL = 1000000;
function toMap(it) {
    return new Map(__WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](it)
        .map((v) => [v.id, v]));
}
class Galaxy {
    constructor() {
        //// cached, memoized, calculated-on-the-fly tables
        // arranged into a tile grid, where object coordinates are ceiled
        this.coorIndices = new __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["d" /* TupleMap */]();
        this.tradeRoutes = new Map();
        // demand-supply, trade routes
        this.galacticDemands = new Map();
        this.galacticSupplies = new Map();
        this.galacticProdCap = new Map();
        this.downstreamConsumers = new __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["d" /* TupleMap */]();
        this.consumers = __WEBPACK_IMPORTED_MODULE_2__model__["v" /* allProducts */]()
            .map(() => new Set());
        this.fleetFuelEff = new __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["b" /* OrderListMap */]((a, b) => a.id - b.id);
        //// game entities & relationships
        // map objects & their coordinates
        this.colonies = [];
        this.locatableCoors = new Map();
        this.colonyIndustries = new Map();
        this.tradeFleets = new __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["b" /* OrderListMap */]((a, b) => a.id - b.id);
        // internal variables
        this.genId = -1;
        this.turnCounter = -1;
        this.timestamp = 1;
        // player
        this.money = STARTING_CAPITAL;
        this.numColonists = 5;
        this.numTraders = 10;
    }
    static createFrom(saveData) {
        const galaxy = new Galaxy();
        galaxy.genId = saveData.genId;
        galaxy.turnCounter = saveData.turnCounter;
        galaxy.timestamp = saveData.timestamp;
        galaxy.money = saveData.money;
        galaxy.numColonists = saveData.numColonists;
        galaxy.numTraders = saveData.numTraders;
        const coors = toMap(saveData.locatables);
        const inventories = toMap(__WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](saveData.allInventories)
            .map((x) => new __WEBPACK_IMPORTED_MODULE_2__model__["k" /* Inventory */](x.id, x.maxStorage === null ? Infinity : x.maxStorage, x.inventory)));
        const planets = toMap(__WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](saveData.allPlanets)
            .map((x) => new __WEBPACK_IMPORTED_MODULE_2__model__["o" /* Planet */](x.id, x.resource)));
        for (const planet of planets.values()) {
            const coor = coors.get(planet.id);
            galaxy.addObj(planet, coor.coor);
        }
        const colonies = toMap(saveData.allColonies
            .map((x) => {
            const playerInventory = inventories.get(x.playerInventoryId);
            console.assert(playerInventory !== undefined);
            const marketInventory = inventories.get(x.marketInventoryId);
            console.assert(playerInventory !== undefined);
            const homePlanet = planets.get(x.homePlanetId);
            console.assert(homePlanet !== undefined);
            const colony = new __WEBPACK_IMPORTED_MODULE_2__model__["b" /* Colony */](x.id, homePlanet, x.population, playerInventory, marketInventory, x.maxPopulation, x.isLockPopulation, x.powerPlanetLevel, x.powerOutputEff, x.foodHappiness, x.luxuryHappiness, x.commonHappiness);
            return colony;
        }));
        colonies.forEach((colony) => {
            galaxy.colonizePlanetHelper(colony, false);
        });
        galaxy.calTradeRoutes();
        // add industries
        saveData.allIndustries
            .map((x) => {
            const colony = colonies.get(x.colonyId);
            const industry = new __WEBPACK_IMPORTED_MODULE_2__model__["j" /* Industry */](x.id, x.productType, colony, x.scale, x.operationalEff);
            return industry;
        })
            .forEach((industry) => galaxy.addIndustryHelper(industry));
        saveData.allFleets
            .forEach((x) => {
            const cargo = inventories.get(x.cargoId);
            console.assert(cargo !== undefined);
            const route = x.route.map((id) => {
                const ret = colonies.get(id);
                console.assert(ret !== undefined);
                return ret;
            });
            const fleet = new __WEBPACK_IMPORTED_MODULE_2__model__["e" /* Fleet */](x.id, cargo, route, x.routeAt, x.state, x.isRetiring);
            galaxy.addObj(fleet, coors.get(fleet.id).coor);
            galaxy.addTradeFleetHelper(fleet);
        });
        galaxy.calRouteFuelEff();
        galaxy.calGalacticMarketStats();
        return galaxy;
    }
    serialize() {
        return {
            locatables: __WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](this.locatableCoors)
                .map(([obj, coor]) => {
                return { id: obj.id, kind: obj.kind, coor };
            })
                .toArray(),
            allInventories: this.colonies
                .reduce((acc, x) => {
                acc.push(x.getPlayerInventory());
                acc.push(x.getMarketInventory());
                return acc;
            }, [])
                .concat(...__WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](__WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["h" /* combineIt */](...this.tradeFleets.values()))
                .map((x) => x.getCargo()))
                .map((x) => x.serialize()),
            allIndustries: __WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](__WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["h" /* combineIt */](...this.colonyIndustries.values()))
                .map((industry) => industry.serialize())
                .toArray(),
            allFleets: __WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](__WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["h" /* combineIt */](...this.tradeFleets.values()))
                .map((x) => x.serialize())
                .toArray(),
            allPlanets: __WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](this.locatableCoors.keys())
                .filter((x) => x.kind === __WEBPACK_IMPORTED_MODULE_2__model__["l" /* MapDataKind */].Planet)
                .map((x) => x.serialize())
                .toArray(),
            allColonies: this.colonies.map((x) => x.serialize()),
            // game data
            genId: this.genId,
            turnCounter: this.turnCounter,
            timestamp: this.timestamp,
            money: this.money,
            numColonists: this.numColonists,
            numTraders: this.numTraders,
        };
    }
    createInventory(maxStorage = Infinity) {
        return new __WEBPACK_IMPORTED_MODULE_2__model__["k" /* Inventory */](this.nextId(), maxStorage);
    }
    deposit(amount) {
        this.money += amount;
    }
    withdraw(amount) {
        this.money -= amount;
    }
    addPlanets(num, minDist) {
        const raws = __WEBPACK_IMPORTED_MODULE_2__model__["q" /* RAW_MATERIALS */];
        const numRaws = raws.length;
        const bound = num / 2;
        const findCoorForPlanets = () => {
            const coors = new __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["e" /* TupleSet */]();
            // naive algorithm
            NEXT_CANDIDATE: while (coors.size() < num) {
                const candidate = this.randomCoor(bound);
                for (const coor of coors) {
                    if (__WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["k" /* distance2D */](candidate, coor) < minDist) {
                        continue NEXT_CANDIDATE;
                    }
                }
                coors.add(candidate);
            }
            return coors.values();
        };
        let i = 0;
        for (const coor of findCoorForPlanets()) {
            const planet = new __WEBPACK_IMPORTED_MODULE_2__model__["o" /* Planet */](this.nextId(), raws[i % numRaws]);
            this.addObj(planet, coor);
            ++i;
        }
        this.calTradeRoutes();
    }
    addTradeFleet(from, to) {
        console.assert(this.numTraders >= 1);
        this.numTraders--;
        const fleet = new __WEBPACK_IMPORTED_MODULE_2__model__["e" /* Fleet */](this.nextId(), this.createInventory(1000), [from, to]);
        this.addObj(fleet, this.getCoor(from));
        this.addTradeFleetHelper(fleet);
        return fleet;
    }
    removeFleet(fleet) {
        const route = fleet.getRoute();
        console.assert(route.length === 2);
        const colony1 = route[0];
        const colony2 = route[1];
        // remove data, then the index
        const allFleets = this.tradeFleets.get(colony1, colony2);
        console.assert(allFleets !== undefined); // otherwise removing an nonexist object
        const isDeleted = allFleets.delete(fleet);
        console.assert(isDeleted); // otherwise removing an nonexist object
        this.removeObj(fleet);
        this.numTraders++;
    }
    getNumUsedTraders(from, to) {
        const allFleets = this.tradeFleets.get(from, to);
        if (allFleets !== undefined) {
            return allFleets.size;
        }
        return 0;
    }
    numColonies() {
        return this.colonies.length;
    }
    hasTradeRoute(from, to) {
        const edges = this.tradeRoutes.get(from);
        return edges && edges.some((x) => x === to);
    }
    colonizePlanet(planet, population) {
        console.assert(this.numColonists >= 1);
        this.numColonists -= 1;
        const colony = new __WEBPACK_IMPORTED_MODULE_2__model__["b" /* Colony */](this.nextId(), planet, population, this.createInventory(), this.createInventory());
        this.colonizePlanetHelper(colony);
        return colony;
    }
    getIndustries(colony) {
        return __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["n" /* getOr */](this.colonyIndustries, colony, () => new Set());
    }
    addIndustry(productType, colony) {
        console.assert(colony !== undefined);
        const industry = new __WEBPACK_IMPORTED_MODULE_2__model__["j" /* Industry */](this.nextId(), productType, colony);
        this.addIndustryHelper(industry);
        return industry;
    }
    shutdownIndustry(colony, industry) {
        const industries = this.colonyIndustries.get(colony);
        console.assert(industries !== undefined);
        // get depended products for all industries expect the target
        const overall = __WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](industries)
            .filter((industry2) => industry2 !== industry)
            .reduce((acc, industry2) => acc.union(this.getDemandedProducts(industry2)), __WEBPACK_IMPORTED_MODULE_0_immutable__["Set"]());
        const depend = this.getDemandedProducts(industry);
        for (const product of depend.subtract(overall)) {
            const isDeleted = this.consumers[product].delete(colony);
            console.assert(isDeleted);
        }
        {
            const isDeleted = industries.delete(industry);
            console.assert(isDeleted);
        }
    }
    getMoney() {
        return this.money;
    }
    getNumColonists() {
        return this.numColonists;
    }
    getNumUnusedTraders() {
        return this.numTraders;
    }
    addTrader() {
        this.numTraders += 1;
    }
    addColonists(growthDelta) {
        console.assert(growthDelta >= 0);
        this.numColonists += growthDelta / 10;
    }
    getRouteFuelEff(from, to) {
        const ret = this.fleetFuelEff.get(from, to);
        if (ret !== undefined) {
            return ret;
        }
        return 0;
    }
    getDay() {
        return this.timestamp % __WEBPACK_IMPORTED_MODULE_2__model__["u" /* YEAR_PER_TICK */];
    }
    getYear() {
        return Math.ceil(this.timestamp / __WEBPACK_IMPORTED_MODULE_2__model__["u" /* YEAR_PER_TICK */]);
    }
    getTimestamp() {
        return this.timestamp;
    }
    getScore() {
        console.assert(this.timestamp !== 0);
        const score = (this.money - STARTING_CAPITAL) / this.timestamp;
        if (score < 0) {
            return 0;
        }
        return Math.round(score);
    }
    /**
     * Progress a tick; return true if the tick is also the start of a new turn.
     */
    turn() {
        const fleets = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["h" /* combineIt */](...this.tradeFleets.values());
        for (const fleet of fleets) {
            fleet.operate(this);
        }
        this.turnCounter = (this.turnCounter + 1) % BIG_TURN;
        if (this.turnCounter !== 0) {
            return false;
        }
        this.timestamp += 1;
        if (this.money < 0) {
            this.money *= 1 + __WEBPACK_IMPORTED_MODULE_2__model__["a" /* ANNUAL_INTEREST */] / __WEBPACK_IMPORTED_MODULE_2__model__["u" /* YEAR_PER_TICK */];
        }
        this.calRouteFuelEff();
        this.calGalacticMarketStats();
        for (const colony of this.colonies) {
            colony.recalculate(this);
        }
        for (const industries of this.colonyIndustries.values()) {
            for (const industry of industries) {
                industry.operate(this);
            }
        }
        for (const colony of this.colonies) {
            colony.trade(this);
        }
        return true;
    }
    getCoor(obj) {
        let ret;
        if (obj instanceof __WEBPACK_IMPORTED_MODULE_2__model__["b" /* Colony */]) {
            const planet = obj.getHomePlanet();
            ret = this.locatableCoors.get(planet);
        }
        else {
            ret = this.locatableCoors.get(obj);
        }
        console.assert(ret !== undefined); // fix caller
        return ret;
    }
    getObjs() {
        return this.locatableCoors;
    }
    getObj(at, kind) {
        return this
            .searchNearbyObjs(at)
            .filter((x) => x.kind === kind)
            .first();
    }
    searchNearbyObjs(at, radius = 0, minDistance = 0) {
        const searchObs = () => {
            const [atX, atY] = at;
            const possibleCoors = [
                at,
                [atX - radius, atY - radius],
                [atX + radius, atY - radius],
                [atX - radius, atY + radius],
                [atX + radius, atY + radius],
            ];
            const sorted = possibleCoors
                .map((coor) => this.idxCoor(coor))
                .sort(__WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["i" /* compare2D */]);
            return __WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](__WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["y" /* uniq */](sorted, __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["l" /* equal2D */])) // find uniq elements from a sorted collection
                .map((coor) => this.getIdx(coor)) // extra objects from coordinates
                .reduce((acc, cur) => acc.union(cur), __WEBPACK_IMPORTED_MODULE_0_immutable__["Set"]()) // flatten collections
                .filter((obj) => {
                const coor = this.getCoor(obj);
                const dist = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["k" /* distance2D */](coor, at);
                return dist >= minDistance && dist <= radius;
            });
        };
        const routes = this.searchTradeRoutes(at, radius);
        const objs = searchObs();
        return objs.concat(routes);
    }
    move(obj, to, speed) {
        const finalSpeed = speed / BIG_TURN;
        const nextPos = () => {
            const at = this.locatableCoors.get(obj);
            console.assert(at !== undefined);
            const distanceLeft = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["k" /* distance2D */](to, at);
            if (distanceLeft < finalSpeed) {
                // close enough
                return {
                    distTravelled: distanceLeft,
                    nowAt: to,
                };
            }
            else {
                // far away, keep moving
                const dir = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["t" /* subtract2D */](to, at);
                const length = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["r" /* norm2D */](dir);
                const displacement = [
                    dir[0] / length * finalSpeed,
                    dir[1] / length * finalSpeed
                ];
                return {
                    distTravelled: length,
                    nowAt: __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["v" /* sum2D */](at, displacement),
                };
            }
        };
        const ret = nextPos();
        this.updateObj(obj, ret.nowAt);
        return ret;
    }
    getTradeRoutes() {
        return this.tradeRoutes;
    }
    getGalacticDemands(product) {
        return __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["p" /* getQty */](this.galacticDemands, product);
    }
    getGalacticSupplies(product) {
        return __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["p" /* getQty */](this.galacticSupplies, product);
    }
    getGalacticProdCap(product) {
        return __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["p" /* getQty */](this.galacticProdCap, product);
    }
    getDownstreamConsumers(product, from, next) {
        console.assert(from !== next);
        const recal = () => new Map(__WEBPACK_IMPORTED_MODULE_2__model__["v" /* allProducts */]()
            .map((product2) => [
            product2,
            // find all downstream sources that pass through "next"
            Array
                .from(this.consumers[product2])
                .filter((endPoint) => endPoint !== from &&
                this.nextTradeNode(from, endPoint) === next),
        ]));
        // lazily calculates all downstream sources
        const consumers = this.downstreamConsumers.getOrSet([from, next], () => recal());
        const ret = consumers.get(product);
        console.assert(ret !== undefined);
        return ret;
    }
    exists(obj) {
        return this.locatableCoors.has(obj);
    }
    nextTradeNode(from, to) {
        console.assert(from !== to); // caller checks this
        console.assert(this.tradeRoutePaths !== undefined);
        const ret = this.tradeRoutePaths.next(from, to);
        console.assert(ret !== undefined); // since we're dealing with the minimum spanning tree of a complete undirected graph, all vertices are reachable
        return ret;
    }
    calGalacticMarketStats() {
        this.galacticDemands.clear();
        this.galacticProdCap.clear();
        this.galacticSupplies.clear();
        for (const colony of this.colonies) {
            for (const product of Object(__WEBPACK_IMPORTED_MODULE_3__product__["h" /* allProducts */])()) {
                const demandQty = colony.getDemand(product);
                __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["m" /* getAndSum */](this.galacticDemands, product, demandQty);
                const supplyQty = colony.getSupply(product);
                __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["m" /* getAndSum */](this.galacticSupplies, product, supplyQty);
                const prodCap = colony.getProdCap(this, product);
                __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["m" /* getAndSum */](this.galacticProdCap, product, prodCap);
            }
        }
    }
    calTradeRoutes() {
        const distance = (a, b) => {
            const coorA = this.getCoor(a);
            const coorB = this.getCoor(b);
            return __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["k" /* distance2D */](coorA, coorB);
        };
        const vertices = new Set(this.colonies);
        // find a minimum spanning tree for the trade route map
        this.tradeRoutes = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["q" /* kruskalMST */](vertices, (vertex) => {
            // complete graph for now
            const ret = new Set(vertices);
            ret.delete(vertex);
            return ret.values();
        }, (a, b) => distance(a, b));
        // pre-compute all-pair shortest paths for the trade routes
        this.tradeRoutePaths = new __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["a" /* FloydWarshall */](this.tradeRoutes, (a, b) => distance(a, b));
        this.downstreamConsumers.clear();
    }
    addObj(obj, coor) {
        this.locatableCoors.set(obj, coor);
        this.addToIdx(obj, coor);
    }
    updateObj(obj, coor) {
        this.removeFromIdx(obj);
        this.locatableCoors.set(obj, coor);
        this.addToIdx(obj, coor);
    }
    idxCoor([x, y]) {
        return [Math.floor(x), Math.floor(y)];
    }
    removeFromIdx(obj) {
        const coor = this.locatableCoors.get(obj);
        console.assert(coor !== undefined); // fix caller: object not exist
        const idxCoor = this.idxCoor(coor);
        const objs = this.coorIndices.get(idxCoor);
        console.assert(objs !== undefined, "existing object should be indexed");
        const isDeleted1 = objs.delete(obj);
        console.assert(isDeleted1, "index does not have obj");
        if (objs.size === 0) {
            const isDeleted2 = this.coorIndices.delete(idxCoor);
            console.assert(isDeleted2);
        }
    }
    removeObj(obj) {
        this.removeFromIdx(obj);
        const isDeleted = this.locatableCoors.delete(obj);
        console.assert(isDeleted);
    }
    addToIdx(obj, coor) {
        const idxCoor = this.idxCoor(coor);
        const objs = this.coorIndices.getOrSet(idxCoor, () => new Set());
        console.assert(!objs.has(obj), "double-adding object to index");
        objs.add(obj);
    }
    getIdx(at) {
        const idxCoor = this.idxCoor(at);
        const ids = this.coorIndices.get(idxCoor);
        return ids ? ids : new Set();
    }
    randomCoor(bound) {
        return [Math.random() * bound, Math.random() * bound];
    }
    *searchTradeRoutes(at, radius) {
        const visited = new __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["c" /* OrderListSet */]((c1, c2) => c1.id - c2.id);
        for (const [a, bs] of this.getTradeRoutes()) {
            const coorA = this.getCoor(a.getHomePlanet());
            for (const b of bs) {
                const coorB = this.getCoor(b.getHomePlanet());
                if (visited.has(a, b)) {
                    continue;
                }
                visited.add(a, b);
                const test = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["x" /* testLineSegmentCircleIntersect */](coorA, coorB, at, radius);
                switch (test) {
                    case 2 /* Intersection */:
                    case 1 /* Tangent */:
                        yield {
                            kind: __WEBPACK_IMPORTED_MODULE_2__model__["l" /* MapDataKind */].RouteSegment,
                            from: coorA,
                            to: coorB,
                        };
                }
            }
        }
    }
    getDemandedProducts(industry) {
        return __WEBPACK_IMPORTED_MODULE_2__model__["j" /* Industry */]
            .getFlatDemandProducts(industry.productType)
            .union(industry.getOpDemand().neededKinds);
    }
    calRouteFuelEff() {
        this.fleetFuelEff.clear();
        for (const [from, tos] of this.tradeRoutes) {
            for (const to of tos) {
                this.fleetFuelEff.getOrSet(() => {
                    const fromEff = from.getPowerUsageEff(this);
                    const toEff = to.getPowerUsageEff(this);
                    return (fromEff + toEff) / 2;
                }, from, to);
            }
        }
    }
    nextId() {
        return ++this.genId;
    }
    colonizePlanetHelper(colony, isCalTradeRoutes = true) {
        const planet = colony.getHomePlanet();
        console.assert(this.locatableCoors.get(planet) !== undefined); // sanity check
        this.colonies.push(colony);
        planet.colonized(colony);
        // naturally consumes these goods, proportional to population
        const consumerGoods = [
            __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Food,
            __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Drink,
            __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Apparel,
            __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Medicine,
            __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Accessory,
            __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Furniture,
            __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Gadget,
            __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Vehicle,
            __WEBPACK_IMPORTED_MODULE_2__model__["p" /* Product */].Fuel,
        ];
        for (const product of consumerGoods) {
            this.consumers[product].add(colony);
        }
        if (isCalTradeRoutes) {
            this.calTradeRoutes();
        }
    }
    addIndustryHelper(industry) {
        const colony = industry.colony;
        __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["o" /* getOrSet */](this.colonyIndustries, colony, () => new Set())
            .add(industry);
        colony
            .getPlayerInventory()
            .addDemandSrc(industry);
        // add to consumer table
        for (const product of this.getDemandedProducts(industry)) {
            this.consumers[product].add(colony);
        }
        // clear cache, so that fleets will recalculate the downstream demands
        this.downstreamConsumers.clear();
    }
    addTradeFleetHelper(fleet) {
        console.assert(this.locatableCoors.get(fleet) !== undefined); // sanity check
        const [from, to] = fleet.getRoute();
        console.assert(from !== undefined);
        console.assert(to !== undefined);
        const fleets = this.tradeFleets.getOrSet(() => new Set(), from, to);
        fleets.add(fleet);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Galaxy;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__(0);



const PI_OVER_2 = Math.PI / 2;
const SPEED = 0.3;
class Fleet {
    constructor(id, cargo, route = [], routeAt = 0, state = __WEBPACK_IMPORTED_MODULE_2__model__["f" /* FleetState */].Move, isRetiring = false) {
        this.id = id;
        this.cargo = cargo;
        this.route = route;
        this.routeAt = routeAt;
        this.state = state;
        this.isRetiring = isRetiring;
        this.kind = __WEBPACK_IMPORTED_MODULE_2__model__["l" /* MapDataKind */].Fleet;
    }
    serialize() {
        return {
            id: this.id,
            cargoId: this.cargo.id,
            route: this.route.map((x) => x.id),
            routeAt: this.routeAt,
            state: this.state,
            isRetiring: this.isRetiring,
        };
    }
    getCargo() {
        return this.cargo;
    }
    getRoute() {
        return this.route;
    }
    getRouteAt() {
        return this.routeAt;
    }
    getSpeed(galaxy) {
        const from = this.getStop();
        console.assert(from !== undefined);
        const to = this.getNextStop();
        console.assert(to !== undefined);
        const fuelEff = galaxy.getRouteFuelEff(from, to);
        const fuelBonus = 1 + fuelEff;
        const fuelBonus2 = fuelBonus * fuelBonus;
        return SPEED * fuelBonus2;
    }
    operate(galaxy) {
        switch (this.state) {
            case __WEBPACK_IMPORTED_MODULE_2__model__["f" /* FleetState */].Hold:
                // do nothing
                break;
            case __WEBPACK_IMPORTED_MODULE_2__model__["f" /* FleetState */].Docked:
                this.handleDocked(galaxy);
                this.setMoveNextStop();
                break;
            case __WEBPACK_IMPORTED_MODULE_2__model__["f" /* FleetState */].Move:
                this.handleMove(galaxy);
                break;
        }
    }
    setRoute(...route) {
        console.assert(route.length > 0);
        this.route = route;
        this.state = __WEBPACK_IMPORTED_MODULE_2__model__["f" /* FleetState */].Hold;
    }
    resetRoute() {
        this.routeAt = 0;
    }
    start() {
        if (this.route.length > 0) {
            this.state = __WEBPACK_IMPORTED_MODULE_2__model__["f" /* FleetState */].Move;
        }
        else {
            console.assert(this.state === __WEBPACK_IMPORTED_MODULE_2__model__["f" /* FleetState */].Hold);
        }
    }
    retire() {
        this.isRetiring = true;
    }
    isRetire() {
        return this.isRetiring;
    }
    getAngle(galaxy) {
        if (this.route.length > 1) {
            const curPos = galaxy.getCoor(this);
            const stop = galaxy.getCoor(this.getStop());
            let from;
            let to;
            if (__WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["l" /* equal2D */](curPos, stop)) {
                from = stop;
                const next = galaxy.getCoor(this.nextStop());
                to = next;
            }
            else {
                from = curPos;
                to = stop;
            }
            const [x, y] = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["t" /* subtract2D */](from, to);
            const angle = Math.atan(y / x);
            return angle + (from[0] >= to[0] ? -PI_OVER_2 : PI_OVER_2);
        }
        return 0;
    }
    partitionCargo(routeDemands, lowToHigh) {
        const cargoSpace = this.cargo.getEmptySpace();
        // this method assign at least 1 unit space per commodity
        console.assert(cargoSpace >= __WEBPACK_IMPORTED_MODULE_2__model__["v" /* allProducts */]().length);
        const totalDemand = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["u" /* sum */](...routeDemands);
        const partition = new Map();
        if (totalDemand === 0) {
            return partition;
        }
        for (const product of lowToHigh) {
            const demand = routeDemands[product];
            // don't take goods if there's no demand for them
            if (demand === 0) {
                continue;
            }
            // underestimate "a bit"
            const qty = Math.max(1, Math.floor(demand / totalDemand * cargoSpace));
            console.assert(Number.isFinite(qty));
            partition.set(product, qty);
        }
        return partition;
    }
    getNextStop() {
        const next = this.nextStopIdx();
        return this.route[next];
    }
    handleDocked(galaxy) {
        const stop = this.getStop();
        const next = this.getNextStop();
        // sum all downstream demands from the next stop
        const routeDemands = __WEBPACK_IMPORTED_MODULE_2__model__["v" /* allProducts */]()
            .reduce((acc, product) => {
            // get all downstream consumers (end-points of shortest paths)
            const deficitSum = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["u" /* sum */](...galaxy
                .getDownstreamConsumers(product, stop, next)
                .map((consumer) => consumer.getDeficit(galaxy, product)));
            acc[product] += deficitSum;
            return acc;
        }, new Array(__WEBPACK_IMPORTED_MODULE_2__model__["m" /* NUM_PRODUCTS */]).fill(0));
        const goodsUnloaded = new Array(__WEBPACK_IMPORTED_MODULE_2__model__["m" /* NUM_PRODUCTS */]).fill(0);
        // sell goods
        for (const [product, qty] of this.cargo.getAllQty()) {
            if (qty === 0) {
                continue;
            }
            const unloaded = stop
                .tryBuy(galaxy, this.cargo, product, qty, 0); // Model.Market.basePrice(product));
            goodsUnloaded[product] += unloaded;
        }
        if (this.isRetiring || !galaxy.hasTradeRoute(stop, next)) {
            // there's a better path than the fleet's path, so retire
            galaxy.removeFleet(this);
            return;
        }
        const lowToHigh = __WEBPACK_IMPORTED_MODULE_2__model__["v" /* allProducts */]()
            .sort((a, b) => routeDemands[a] - routeDemands[b]);
        // buy goods - pass 1, try to spread out goods instead of filling
        {
            const demands = this.partitionCargo(routeDemands, lowToHigh);
            for (const [product, demandQty] of demands) {
                if (this.cargo.getEmptySpace() === 0) {
                    break;
                }
                // cannot grab items that have been unloaded
                if (goodsUnloaded[product] > 0) {
                    continue;
                }
                const inStock = this.cargo.getQty(product);
                // shouldn't buy back unloaded goods
                const purchaseQty = demandQty - inStock - goodsUnloaded[product];
                if (purchaseQty <= 0) {
                    continue;
                }
                const qty = Math.min(purchaseQty, this.cargo.getEmptySpace());
                if (qty === 0) {
                    continue;
                }
                console.assert(qty > 0);
                stop
                    .trySell(galaxy, this.cargo, product, qty, Infinity); // Model.Market.basePrice(product));
            }
        }
        // buy goods - pass 2, try to fill cargo space
        // pick at most 3 types of goods to fill cargo, from highest demand to lowest demand
        const fillQty = this.cargo.getEmptySpace() / 3;
        for (const product of __WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](lowToHigh).reverse()) {
            if (this.cargo.getEmptySpace() === 0) {
                break;
            }
            // cannot grab items that have been unloaded
            if (goodsUnloaded[product] > 0) {
                continue;
            }
            const inStock = this.cargo.getQty(product);
            const routeDemand = routeDemands[product];
            const purchaseQty = routeDemand - inStock - goodsUnloaded[product];
            if (purchaseQty <= 0) {
                continue;
            }
            // try to fill the remaining cargo space
            const qty = Math.min(fillQty, this.cargo.getEmptySpace());
            stop
                .trySell(galaxy, this.cargo, product, qty, Infinity); // Model.Market.basePrice(product));
        }
    }
    getStop() {
        return this.route[this.routeAt];
    }
    nextStop() {
        return this.route[this.nextStopIdx()];
    }
    nextStopIdx() {
        return (this.routeAt + 1) % this.route.length;
    }
    setMoveNextStop() {
        // set next stop and then travel
        this.routeAt = this.nextStopIdx();
        this.state = __WEBPACK_IMPORTED_MODULE_2__model__["f" /* FleetState */].Move;
    }
    handleMove(galaxy) {
        const stop = this.route[this.routeAt];
        const dest = galaxy.getCoor(stop);
        const { nowAt } = galaxy.move(this, dest, this.getSpeed(galaxy));
        if (__WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["l" /* equal2D */](nowAt, dest)) {
            this.state = __WEBPACK_IMPORTED_MODULE_2__model__["f" /* FleetState */].Docked;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Fleet;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(0);

class Planet {
    constructor(id, resource, colony) {
        this.id = id;
        this.resource = resource;
        this.colony = colony;
        this.kind = __WEBPACK_IMPORTED_MODULE_0__model__["l" /* MapDataKind */].Planet;
    }
    serialize() {
        return {
            id: this.id,
            resource: this.resource,
        };
    }
    colonized(colony) {
        this.colony = colony;
    }
    getColony() {
        return this.colony;
    }
    isColonized() {
        return this.colony !== undefined;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Planet;



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Subject {
    constructor() {
        this.observers = new Set();
        this.updateSet = new Set();
    }
    subscribe(...observers) {
        console.assert(observers.every((o) => !this.observers.has(o)), "go fix caller: duplicate observable subscription");
        observers.forEach((o) => this.observers.add(o));
    }
    unsubscribe(observer) {
        const result = this.observers.delete(observer);
        console.assert(result, "fix caller: observable doesn't exit");
    }
    queueUpdate(...channelTypes) {
        channelTypes.forEach((channel) => this.updateSet.add(channel));
    }
    update(model) {
        for (const observable of this.observers) {
            observable.update(model, this.updateSet);
        }
        this.updateSet.clear();
    }
    clear() {
        this.observers.clear();
        this.updateSet.clear();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Subject;



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__html__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view__ = __webpack_require__(3);





class FleetView {
    constructor(game, fleet) {
        this.fleet = fleet;
        this.view = document.createElement("div");
        this.theContents = document.createElement("div");
        const $title = __WEBPACK_IMPORTED_MODULE_4__view__["c" /* $createTitlebar */](game, this, `Trader ${fleet.id}`);
        const $contentPanel = __WEBPACK_IMPORTED_MODULE_4__view__["a" /* $addContentPanelClass */](this.theContents);
        const $tabs = $("<nav>")
            .addClass("tabs")
            .append($("<div>")
            .text("Route")
            .click(() => this.setRoutePanel(game)), $("<div>")
            .text("Cargo")
            .click(() => this.setCargoPanel()));
        this.setRoutePanel(game);
        __WEBPACK_IMPORTED_MODULE_4__view__["b" /* $addPanelClass */](this)
            .append($title, $tabs, $contentPanel)
            .mousedown((e) => {
            __WEBPACK_IMPORTED_MODULE_4__view__["l" /* makeDraggable */](this.view, e);
        })
            .click(() => {
            __WEBPACK_IMPORTED_MODULE_4__view__["k" /* bringToFront */](this.view);
        })
            .appendTo(document.body);
    }
    update(game, channels) {
        if (!game.galaxy.exists(this.fleet)) {
            game.close(this);
        }
        this.contents.update(game, channels);
    }
    setRoutePanel(game) {
        this.contents = new RoutePanel(game, this.theContents, this.fleet);
    }
    setCargoPanel() {
        this.contents = new CargoPanel(this.theContents, this.fleet);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FleetView;

class RoutePanel {
    constructor(game, view, fleet) {
        this.game = game;
        this.view = view;
        this.fleet = fleet;
        const galaxy = game.galaxy;
        this.tableDrawer = new __WEBPACK_IMPORTED_MODULE_2__html__["a" /* DrawTable */]([
            ["Place", undefined],
            ["Dest", undefined],
        ], () => this.update(game, new Set([__WEBPACK_IMPORTED_MODULE_1__game__["b" /* UpdateChannel */].DataChange])));
        const $speedLabel = $("<span>");
        const $speed = $("<div>")
            .text("Speed: ")
            .attr("title", "The speed indicates how far the trader is going to move per day.")
            .append($speedLabel);
        const $button = $("<button>")
            .text("Retire trader")
            .attr("title", "The trader will return to the trader pool and to be reassigned.")
            .click(() => fleet.retire());
        const $general = $("<fieldset>")
            .append($("<legend>").text("General"), $speed, $button);
        const $route = $("<fieldset>")
            .attr("title", "This table shows a list of places that the trader is going to trader. Dest means the trader is heading towards that place.")
            .append($("<legend>").text("Route"), this.tableDrawer.$getTable());
        $(view)
            .empty()
            .append($general, $route);
        this.observer = {
            update: () => {
                $button.prop("disabled", fleet.isRetire());
                $speedLabel.text(this.fleet.getSpeed(galaxy).toFixed(2));
            },
        };
    }
    update(game, channels) {
        const galaxy = game.galaxy;
        this.observer.update(game, channels);
        this.tableDrawer
            .render(this.fleet.getRoute(), (stop) => {
            const homePlanet = stop.getHomePlanet();
            const [x, y] = galaxy.getCoor(homePlanet);
            const coor = `Planet ${homePlanet.id} - (${x.toFixed(2)},${y.toFixed(2)})`;
            const route = this.fleet.getRoute();
            const at = this.fleet.getRouteAt();
            const isDest = route[at] === stop;
            return [
                coor,
                isDest ? `<i class="material-icons">check</i>` : "",
            ];
        });
    }
}
class CargoPanel {
    constructor(view, fleet) {
        this.view = view;
        this.fleet = fleet;
        this.tableDrawer = new __WEBPACK_IMPORTED_MODULE_2__html__["a" /* DrawTable */]([
            ["Goods", ([productA], [productB]) => productA - productB],
            ["Qty", ([, qtyA], [, qtyB]) => qtyA - qtyB],
        ], () => this.update());
        $(view)
            .empty()
            .append(this.tableDrawer.$getTable());
    }
    update() {
        this.tableDrawer
            .render(__WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](this.fleet.getCargo().getAllQty())
            .filter(([qty]) => qty > 0)
            .toArray(), ([product, qty]) => [
            __WEBPACK_IMPORTED_MODULE_3__model_model__["p" /* Product */][product],
            qty,
        ]);
    }
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(3);

function toSave(game) {
    const json = JSON.stringify(game.serialize());
    const withLen = JSON.stringify({
        json,
        len: json.length,
    });
    return LZString.compressToBase64(withLen);
}
function fromSave(input) {
    const withLen = LZString.decompressFromBase64(input);
    const json = JSON.parse(withLen);
    if (json &&
        Number.isSafeInteger(json.len) &&
        typeof json.json === "string" &&
        json.len === json.json.length) {
        // likely a valid save, close enough
        return JSON.parse(json.json);
    }
    throw new Error("not a valid save");
}
class ImportExportView {
    constructor(game) {
        this.view = document.createElement("div");
        const $title = __WEBPACK_IMPORTED_MODULE_0__view__["c" /* $createTitlebar */](game, this, `Import/Export Save`);
        const $contentPanel = __WEBPACK_IMPORTED_MODULE_0__view__["a" /* $addContentPanelClass */]();
        const $textarea = $("<textarea>")
            .width("350px")
            .height("300px")
            .prop("spellcheck", false)
            .val(toSave(game))
            .blur(() => $(this).focus())
            .mousemove(() => __WEBPACK_IMPORTED_MODULE_0__view__["m" /* suspendDraggable */]())
            .click((e) => e.stopPropagation()) // avoid bringing the view to front (hence losing focus)
        ;
        const $clearButton = $("<button>")
            .text("clear")
            .click(() => $textarea.val(""));
        const $importButton = $("<button>")
            .text("import")
            .click(async () => {
            try {
                const saveData = fromSave($textarea.val());
                game.reload(saveData);
                await game.save();
            }
            catch (error) {
                alert("invalid save");
            }
        });
        const $copyButton = $("<button>")
            .text("copy to clipboard")
            .click(() => {
            $textarea.select();
            document.execCommand("Copy");
        });
        const $refreshButton = $("<button>")
            .text("refresh")
            .click(() => $textarea.text(toSave(game)));
        const $restartButton = $("<button>")
            .text("restart")
            .click(async () => {
            const isOk = confirm("Are you sure?");
            if (isOk) {
                game.reload();
                await game.save();
            }
        });
        $contentPanel.append($textarea, $("<div>").append($clearButton, $importButton, $copyButton, $refreshButton, $restartButton));
        __WEBPACK_IMPORTED_MODULE_0__view__["b" /* $addPanelClass */](this)
            .append($title)
            .append($contentPanel)
            .mousedown((e) => __WEBPACK_IMPORTED_MODULE_0__view__["l" /* makeDraggable */](this.view, e))
            .click(() => __WEBPACK_IMPORTED_MODULE_0__view__["k" /* bringToFront */](this.view))
            .appendTo(document.body);
    }
    update() {
        // nothing
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImportExportView;



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_view__ = __webpack_require__(3);





const MIN_GRID_SIZE = 50;
const MAX_GRID_SIZE = 300;
const UI_INTERVAL = 17;
const RADIUS = 3 / 10;
const setup = {
    handleSelected: (view, game, coor) => {
        const galaxy = game.galaxy;
        const objs = galaxy.searchNearbyObjs(coor, 0.1).toArray();
        if (objs.length === 1) {
            const planet = objs[0];
            if (planet.kind === __WEBPACK_IMPORTED_MODULE_3__model_model__["l" /* MapDataKind */].Planet &&
                planet.resource === __WEBPACK_IMPORTED_MODULE_3__model_model__["p" /* Product */].Crop) {
                const colony = galaxy.colonizePlanet(planet, 10);
                colony.expandPowerPlanet(galaxy);
                view.setAction();
                game.queueUpdate(__WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].MapChange);
            }
        }
        return false;
    },
    handleZoom: () => false,
    getTexts: () => [
        "Hello. Select a food-producing (green)",
        "planet to be your starting planet, then",
        "unpause the game (button in top-right",
        "corner). After you're done, mouse over",
        "the user interface, like labels,buttons,",
        "tables, to see the tooltips about game",
        "concepts, especially the market panel on",
        "colonized planets, which explains the",
        "game economics. Feel free to click on",
        "any colored items on the map, as they",
        "are interactive.",
        "",
        "Also, try to change the viewport by",
        "panning and pinching, or click-and-drag",
        "and mouse wheel zooming if you are",
        "playing on a PC.",
    ],
};
class MapView {
    constructor(game, saveData) {
        this.view = document.createElement("canvas");
        // UI data
        this.topLeft = [0, 0];
        this.gridSize = MIN_GRID_SIZE;
        [, this.context] = this.getCanvasContext(this.view);
        this.cachedGrid = document.createElement("canvas");
        $("#mapContainer")
            .empty()
            .append(this.view);
        $(this.view).attr("id", "map");
        const gesture = new Hammer.Manager(this.view);
        const double = new Hammer.Tap({ event: "doubletap", taps: 2 });
        const single = new Hammer.Tap({ event: "singletap" });
        const pan = new Hammer.Pan()
            .set({ direction: Hammer.DIRECTION_ALL });
        gesture.add([
            new Hammer.Pinch(),
            double,
            single,
            pan,
        ]);
        double.recognizeWith(single);
        single.requireFailure(double);
        // setup events
        gesture.on("singletap", (e) => this.click(game, e));
        gesture.on("doubletap", (e) => this.dblclick(game, e));
        gesture.on("pinch", (e) => this.wheel(game, e));
        gesture.on("pan", (e) => this.pan(game, e));
        // mouse wheel event handled separately
        $(this.view)
            .on("wheel", (e) => this.wheel(game, e.originalEvent));
        if (saveData) {
            const mapViewSave = saveData.mapViewSave;
            if (!mapViewSave || !mapViewSave.hasSetup) {
                // first-time setup bonus
                this.currentAction = setup;
            }
            else {
                this.gridSize = mapViewSave.gridSize;
                this.topLeft = mapViewSave.topLeft;
            }
        }
        else {
            // first-time setup bonus
            this.currentAction = setup;
        }
        return this;
    }
    serialize() {
        return {
            topLeft: this.topLeft,
            gridSize: this.gridSize,
            hasSetup: this.currentAction === undefined,
        };
    }
    setAction(action) {
        this.currentAction = action;
    }
    update(game, channels) {
        const $view = $(this.view);
        // set up the size of the canvas
        const width = document.body.clientWidth;
        const height = document.body.clientHeight;
        const attrWidth = Number($view.attr("width"));
        const attrHeight = Number($view.attr("height"));
        if (attrWidth !== width || height !== attrHeight) {
            $view
                .attr("width", width)
                .attr("height", height)
                .width(width)
                .height(height);
            this.cachedGrid.width = document.body.clientWidth;
            this.cachedGrid.height = document.body.clientHeight;
            this.cachedGrid = this.drawGrid(game);
        }
        else if (channels.has(__WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].MapChange)) {
            // usually this happens whenever the user manipulates the UI
            this.cachedGrid = this.drawGrid(game);
        }
        // draw the map
        const ctx = this.context;
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(this.cachedGrid, 0, 0);
        ctx.drawImage(this.drawObjects(game), 0, 0);
        this.drawActionText(game);
    }
    drawActionText(game) {
        const ctx = this.context;
        if (!this.currentAction) {
            return;
        }
        const texts = this.currentAction.getTexts(this, game);
        if (texts.length === 0) {
            return;
        }
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "12pt sans-serif";
        let offset = 0;
        for (const text of this.currentAction.getTexts(this, game)) {
            ctx.fillText(text, Math.ceil(this.view.width / 2), Math.ceil(this.view.height / 2) + offset);
            offset += 17;
        }
        ctx.restore();
    }
    getCanvasContext(canvas) {
        if (!canvas) {
            canvas = document.createElement("canvas");
        }
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("cannot create context");
        }
        return [canvas, context];
    }
    drawObjects(game) {
        const galaxy = game.galaxy;
        const [canvas, ctx] = this.getCanvasContext();
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        const groups = __WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](galaxy.getObjs())
            .groupBy(([x]) => x.kind);
        const drawFleets = () => {
            const fleetGroup = groups.get(__WEBPACK_IMPORTED_MODULE_3__model_model__["l" /* MapDataKind */].Fleet);
            if (!fleetGroup) {
                return;
            }
            const fleets = fleetGroup.values();
            ctx.save();
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "yellow";
            for (const [obj, coor] of fleets) {
                const [vpX, vpY] = this.toVpCoor(coor);
                const fleet = obj;
                const angle = fleet.getAngle(galaxy);
                ctx.save();
                ctx.beginPath();
                ctx.translate(vpX, vpY);
                ctx.rotate(angle);
                ctx.scale(0.5, 0.5);
                this.drawTriangle(ctx);
                ctx.fill();
                ctx.restore();
            }
            ctx.restore();
        };
        const drawPlanets = () => {
            const planetGroup = groups.get(__WEBPACK_IMPORTED_MODULE_3__model_model__["l" /* MapDataKind */].Planet);
            if (!planetGroup) {
                throw new Error("game generation should generate at least 1 planet");
            }
            const planetArray = Array.from(planetGroup.values());
            const allPlanets = __WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](planetArray)
                .groupBy(([x]) => x.resource);
            ctx.save();
            // draw planet symbols (colored circles)
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "yellow";
            const radius = RADIUS * this.gridSize;
            const drawPlanetCircle = (color, resource) => {
                const planetByResource = allPlanets.get(resource);
                if (!planetByResource) {
                    console.assert(false, "all planets should be distributed about evenly in terms of raw material types"); // TODO validate this
                    return;
                }
                const planets = planetByResource.values();
                ctx.fillStyle = color;
                for (const [, coor] of planets) {
                    const [vpX, vpY] = this.toVpCoor(coor);
                    ctx.beginPath();
                    this.drawCircle(ctx, vpX, vpY, radius);
                    ctx.fill();
                }
            };
            drawPlanetCircle("green", __WEBPACK_IMPORTED_MODULE_3__model_model__["p" /* Product */].Crop);
            drawPlanetCircle("brown", __WEBPACK_IMPORTED_MODULE_3__model_model__["p" /* Product */].Metal);
            drawPlanetCircle("darkcyan", __WEBPACK_IMPORTED_MODULE_3__model_model__["p" /* Product */].Gem);
            drawPlanetCircle("orange", __WEBPACK_IMPORTED_MODULE_3__model_model__["p" /* Product */].Fuel);
            ctx.restore();
            // draw ids
            ctx.fillStyle = "yellow";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            const fontSize = Math.ceil(RADIUS * this.gridSize);
            ctx.font = `${fontSize}px sans-serif`;
            for (const [planet, coor] of planetArray) {
                const [vpX, vpY] = this.toVpCoor(coor);
                ctx.beginPath();
                ctx.fillText(`${planet.id}`, vpX, vpY);
            }
            ctx.restore();
            // draw colony indicators
            ctx.strokeStyle = "purple";
            ctx.lineWidth = 2;
            for (const [planet, coor] of planetArray) {
                if (planet.getColony() !== undefined) {
                    ctx.beginPath();
                    const [vpX, vpY] = this.toVpCoor(coor);
                    this.drawCircle(ctx, vpX, vpY, radius);
                    ctx.stroke();
                }
            }
            ctx.restore();
        };
        drawPlanets();
        drawFleets();
        return canvas;
    }
    drawCircle(ctx, x, y, r) {
        ctx.arc(x, y, r, 0, 2 * Math.PI);
    }
    drawTradeRoutes(game, canvas, ctx) {
        const galaxy = game.galaxy;
        const tradeRoutes = galaxy.getTradeRoutes();
        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "cyan";
        const drawn = new __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["c" /* OrderListSet */]((a, b) => a.id - b.id);
        for (const [u, vs] of tradeRoutes) {
            for (const v of vs) {
                const edge = [u, v];
                if (drawn.has(...edge)) {
                    continue;
                }
                drawn.add(...edge);
                const [ux, uy] = this.toVpCoor(galaxy.getCoor(u));
                const [vx, vy] = this.toVpCoor(galaxy.getCoor(v));
                ctx.beginPath();
                ctx.moveTo(ux, uy);
                ctx.lineTo(vx, vy);
                ctx.stroke();
            }
        }
        ctx.restore();
        return canvas;
    }
    drawGrid(game) {
        const canvas = this.cachedGrid;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            throw new Error("cannot create context");
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#494949";
        const gridSize = this.gridSize;
        // draw all horizontal lines
        const startX = ((this.topLeft[0] * gridSize) % gridSize + gridSize) % gridSize;
        for (let curX = 0; curX <= canvas.width; curX += gridSize) {
            const curX2 = Math.ceil(curX + startX);
            ctx.beginPath();
            ctx.moveTo(curX2 + 0.5, 0.5);
            ctx.lineTo(curX2 + 0.5, canvas.height + 0.5);
            ctx.stroke();
        }
        // draw all vertical lines
        const startY = ((this.topLeft[1] * gridSize) % gridSize + gridSize) % gridSize;
        for (let curY = 0; curY <= canvas.height; curY += gridSize) {
            const curY2 = Math.ceil(curY + startY);
            ctx.beginPath();
            ctx.moveTo(0.5, curY2 + 0.5);
            ctx.lineTo(canvas.width + 0.5, curY2 + 0.5);
            ctx.stroke();
        }
        ctx.restore();
        this.drawTradeRoutes(game, canvas, ctx);
        return canvas;
    }
    // helper function behind the event handlers
    panTo(game, vpFrom, vpTo) {
        this.stopAction();
        const from = this.toGameCoor(vpFrom);
        const to = this.toGameCoor(vpTo);
        const offset = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["t" /* subtract2D */](from, to);
        let distance = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["r" /* norm2D */](offset);
        const pid = setInterval(() => {
            const speed = distance * 0.02;
            let final;
            if (speed < 0.01 / this.gridSize) {
                clearInterval(pid);
                final = distance;
            }
            else {
                final = speed;
                distance -= speed;
            }
            const proj = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["s" /* project2D */](offset, final);
            this.topLeft = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["v" /* sum2D */](this.topLeft, proj);
            game.queueUpdate(__WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].MapChange);
        });
        return pid;
    }
    /*
    // https://stackoverflow.com/a/16027466
    private drawArrow(ctx: CanvasRenderingContext2D, from: [number, number], to: [number, number], color: string) {
        const [x, y] = Algo.subtract2D(to, from);
        let angle = Math.atan(y / x);
        angle += ((from[0] >= to[0]) ? -90 : 90) * Math.PI / 180;
        ctx.save();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(from[0], from[1]);
        ctx.lineTo(to[0], to[1]);
        ctx.stroke();

        // arrowhead
        ctx.translate(to[0], to[1]);
        ctx.rotate(angle);
        this.drawTriangle(ctx);
        ctx.fill();
        ctx.restore();
    }
    */
    drawTriangle(ctx) {
        ctx.moveTo(0, 0);
        ctx.lineTo(5, 20);
        ctx.lineTo(-5, 20);
        ctx.closePath();
    }
    stopAction() {
        if (this.pid !== undefined) {
            clearInterval(this.pid);
            this.pid = undefined;
        }
    }
    pan(game, e) {
        this.pid = this.panTo(game, this.getVpCenter(), __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["v" /* sum2D */](this.getVpCenter(), [e.deltaX, e.deltaY]));
    }
    click(game, e) {
        const galaxy = game.galaxy;
        const bb = e.target.getBoundingClientRect();
        const coor = [
            e.center.x - bb.left,
            e.center.y - bb.top,
        ];
        const gameCoor = this.toGameCoor(coor);
        if (this.currentAction) {
            this.currentAction.handleSelected(this, game, gameCoor);
        }
        else {
            const nearbyObjs = galaxy
                .searchNearbyObjs(gameCoor, RADIUS)
                .toArray();
            switch (nearbyObjs.length) {
                case 0: break;
                case 1: {
                    const obj = nearbyObjs[0];
                    __WEBPACK_IMPORTED_MODULE_4__view_view__["j" /* SelectView */].createSingle(game, obj);
                    break;
                }
                default: {
                    game.addClosable(new __WEBPACK_IMPORTED_MODULE_4__view_view__["j" /* SelectView */](game, nearbyObjs));
                    break;
                }
            }
        }
    }
    dblclick(game, e) {
        const bb = e.target.getBoundingClientRect();
        const coor = [
            e.center.x - bb.left,
            e.center.y - bb.top,
        ];
        this.pid = this.panTo(game, this.getVpCenter(), coor);
    }
    wheel(game, e) {
        this.stopAction();
        const isZoomingIn = e.deltaY < 0;
        const centerCoor = this.getCenter();
        let zoomSpeed = 10;
        this.pid = setInterval(() => {
            if (isZoomingIn) {
                this.gridSize = Math.min(MAX_GRID_SIZE, this.gridSize + zoomSpeed);
            }
            else {
                this.gridSize = Math.max(MIN_GRID_SIZE, this.gridSize - zoomSpeed);
            }
            this.topLeft = this.centerVp(this.toVpCoor(centerCoor));
            if (this.pid !== undefined) {
                zoomSpeed /= 1.1;
                if (zoomSpeed < 1) {
                    clearInterval(this.pid);
                }
            }
            game.queueUpdate(__WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].MapChange);
        }, UI_INTERVAL);
    }
    centerVp(vpAt) {
        const at = this.toGameCoor(vpAt);
        const offset = __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["t" /* subtract2D */](this.getCenter(), at);
        return __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["v" /* sum2D */](this.topLeft, offset);
    }
    toVpCoor([x, y]) {
        const [tlX, tlY] = this.topLeft;
        return [(x + tlX) * this.gridSize, (y + tlY) * this.gridSize];
    }
    toGameCoor([x, y]) {
        const [tlX, tlY] = this.topLeft;
        return [x / this.gridSize - tlX, y / this.gridSize - tlY];
    }
    getVpCenter() {
        const $view = $(this.view);
        return [$view.width() / 2, $view.height() / 2];
    }
    getCenter() {
        return this.toGameCoor(this.getVpCenter());
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MapView;



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view__ = __webpack_require__(3);



class Menu {
    constructor(game) {
        this.setupPauseButton(game);
        this.setupCloseAll(game);
        this.setupFastForwardButton(game);
        this.setupSlowDownButton(game);
        this.setupBuyTraderButton(game);
        this.setupSaveButton(game);
        this.setupImportExportButton(game);
    }
    update(game, channels) {
        const galaxy = game.galaxy;
        if (channels.has(__WEBPACK_IMPORTED_MODULE_0__game__["b" /* UpdateChannel */].DataChange)) {
            const money = galaxy.getMoney();
            $("#cash")
                .css("color", money >= 0 ? "green" : "red")
                .text(`$${money.toFixed(2)}`);
            $("#colonist").text(galaxy.getNumColonists().toFixed(2));
            $("#trader").text(galaxy.getNumUnusedTraders().toFixed(2));
            $("#fast").prop("disabled", !game.canFastForward());
            $("#slow").prop("disabled", !game.canSlowDown());
        }
        if (channels.has(__WEBPACK_IMPORTED_MODULE_0__game__["b" /* UpdateChannel */].TurnChange)) {
            $("#year").text(galaxy.getYear());
            $("#day").text(galaxy.getDay());
            $("#score").text(galaxy.getScore());
        }
        const $buttonLabel = $("#pause i");
        const $pauseButton = $("#pause");
        if (game.isGameRunning()) {
            $pauseButton.attr("title", "Pause");
            $buttonLabel.text("pause");
        }
        else {
            $pauseButton.attr("title", "Start");
            $buttonLabel.text("play_arrow");
        }
    }
    setupFastForwardButton(game) {
        $("#fast").click(() => game.fastForward());
    }
    setupSlowDownButton(game) {
        $("#slow").click(() => game.slowDown());
    }
    setupPauseButton(game) {
        $("#pause")
            .attr("title", "Pause")
            .click((e) => {
            if (!game.isGameRunning()) {
                game.resume();
            }
            else {
                game.pause();
            }
            e.stopPropagation();
        });
    }
    setupBuyTraderButton(game) {
        $("#buyTrader")
            .click((e) => {
            const isOk = e.ctrlKey || confirm(`Are you sure? This action costs $${__WEBPACK_IMPORTED_MODULE_1__model_model__["t" /* TRADER_COST */]}. (press ctrl while clicking the button suppresses this message)`);
            if (isOk) {
                const galaxy = game.galaxy;
                galaxy.addTrader();
                galaxy.withdraw(__WEBPACK_IMPORTED_MODULE_1__model_model__["t" /* TRADER_COST */]);
            }
        });
    }
    setupSaveButton(game) {
        $("#save").click(() => {
            game.save();
        });
    }
    setupImportExportButton(game) {
        $("#importExport").click(() => {
            const view = new __WEBPACK_IMPORTED_MODULE_2__view_view__["e" /* ImportExportView */](game);
            game.addClosable(view);
        });
    }
    setupCloseAll(game) {
        $("#closeAll").click((e) => {
            game.closeAll();
            e.stopPropagation();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__html__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_product__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view__ = __webpack_require__(3);







const BASIC_GOODS = [__WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */].Food, __WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */].Drink, __WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */].Apparel, __WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */].Medicine]
    .map((product) => __WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */][product])
    .join();
const LUXURY_GOODS = [__WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */].Accessory, __WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */].Furniture, __WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */].Gadget, __WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */].Vehicle]
    .map((product) => __WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */][product])
    .join();
const RAW_MATERIALS = __WEBPACK_IMPORTED_MODULE_4__model_model__["q" /* RAW_MATERIALS */]
    .map((product) => __WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */][product])
    .join();
const SECONDARY_MATERIALS = __WEBPACK_IMPORTED_MODULE_0_immutable__["Set"](Object(__WEBPACK_IMPORTED_MODULE_5__model_product__["h" /* allProducts */])())
    .subtract(__WEBPACK_IMPORTED_MODULE_4__model_model__["q" /* RAW_MATERIALS */])
    .map((product) => __WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */][product])
    .join();
class PlanetView {
    constructor(game, planet) {
        this.planet = planet;
        this.view = document.createElement("div");
        this.theContents = document.createElement("div");
        this.isPrevColonized = this.planet.isColonized();
        this.layout(game);
    }
    update(game, channels) {
        if (!this.isPrevColonized && this.planet.isColonized()) {
            this.isPrevColonized = true;
            this.layout(game);
        }
        else {
            this.contents.update(game, channels);
        }
    }
    setMarketPanel(game, colony) {
        const panel = new MarketPanel(game, this.theContents, colony);
        this.contents = panel;
        this.contents.update(game, new Set([__WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].DataChange]));
    }
    setIndustryPanel(game, colony) {
        const panel = new IndustryPanel(game, this.theContents, colony);
        this.contents = panel;
        panel.update(game, new Set([__WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].DataChange]));
    }
    setInfoPanel(game) {
        const panel = new PlanetInfoPanel(game, this.theContents, this.planet);
        this.contents = panel;
        panel.update(game, new Set([__WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].DataChange]));
    }
    layout(game) {
        const planet = this.planet;
        const $title = __WEBPACK_IMPORTED_MODULE_6__view__["c" /* $createTitlebar */](game, this, `Planet ${planet.id}`);
        const $contentPanel = __WEBPACK_IMPORTED_MODULE_6__view__["a" /* $addContentPanelClass */](this.theContents);
        const list = [$title];
        const $tabs = $("<nav>")
            .addClass("tabs");
        if (this.planet.isColonized()) {
            const colony = planet.getColony();
            $("<div>")
                .text("Planet")
                .click(() => this.setInfoPanel(game))
                .appendTo($tabs);
            $("<div>")
                .text("Market")
                .click(() => this.setMarketPanel(game, colony))
                .appendTo($tabs);
            $("<div>")
                .text("Industry")
                .click(() => this.setIndustryPanel(game, colony))
                .appendTo($tabs);
        }
        if ($tabs.children().length > 0) {
            list.push($tabs);
        }
        list.push($contentPanel);
        $(this.view).empty();
        __WEBPACK_IMPORTED_MODULE_6__view__["b" /* $addPanelClass */](this)
            .append(...list)
            .mousedown((e) => __WEBPACK_IMPORTED_MODULE_6__view__["l" /* makeDraggable */](this.view, e))
            .click(() => __WEBPACK_IMPORTED_MODULE_6__view__["k" /* bringToFront */](this.view));
        this.setInfoPanel(game);
        $(document.body).append(this.view);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlanetView;

class IndustryPanel {
    constructor(game, view, colony) {
        this.view = view;
        this.colony = colony;
        this.observables = [];
        this.layout(game);
    }
    update(game, channels) {
        if (channels.has(__WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].RecreateIndustryLayout)) {
            this.layout(game);
        }
        for (const observable of this.observables) {
            observable.update(game, channels);
        }
    }
    layout(game) {
        const colony = this.colony;
        const galaxy = game.galaxy;
        const industries = galaxy.getIndustries(colony);
        const groups = new Map(Array
            .from(industries)
            .map((x) => [x.productType, x]));
        const localResource = colony.getHomePlanet().resource;
        // only show goods that the planet can produce
        const displayProducts = Object(__WEBPACK_IMPORTED_MODULE_5__model_product__["h" /* allProducts */])()
            .filter((product) => product === localResource || // is the raw material that the planet can produce
            __WEBPACK_IMPORTED_MODULE_4__model_model__["s" /* SECONDARY_PRODUCTS */].has(product) || // is a secondary product (one that require post-processed goods to produce)
            __WEBPACK_IMPORTED_MODULE_4__model_model__["j" /* Industry */]
                .getFlatDemandProducts(product)
                .has(localResource)) // or the produce is needed by industries
            .sort();
        const data = $("<table>").append(...this.makeIndustryDivContainer(game, groups, displayProducts));
        $(this.view)
            .empty()
            .append(data)
            .click((e) => e.stopPropagation());
    }
    *makeIndustryDivContainer(game, industries, products) {
        const galaxy = game.galaxy;
        let showProducts;
        if (industries.size < 2) {
            showProducts = products;
        }
        else {
            showProducts = Array
                .from(industries.values())
                .map((x) => x.productType);
        }
        for (const product of showProducts) {
            const industry = industries.get(product);
            let contents;
            const controlButtons = $("<div>");
            if (industry === undefined) {
                contents = this.makeBuildButton(game, product);
            }
            else {
                contents = this.makeIndustryDiv(game, industry);
                controlButtons
                    .append($("<button>")
                    .text("+")
                    .attr("title", "expand industry (increase scale by 1)")
                    .click((e) => {
                    const isOk = e.shiftKey || e.ctrlKey || confirm(`Are you sure? This action costs $${__WEBPACK_IMPORTED_MODULE_4__model_model__["h" /* INDUSTRY_COST */]} reduces operational efficiency. (press ctrl while clicking the button suppresses this message, press shift for 10 times this operation)`);
                    if (e.shiftKey) {
                        for (let i = 0; i < 10; i++) {
                            industry.upgrade();
                            galaxy.withdraw(__WEBPACK_IMPORTED_MODULE_4__model_model__["h" /* INDUSTRY_COST */]);
                        }
                    }
                    else if (isOk) {
                        industry.upgrade();
                        galaxy.withdraw(__WEBPACK_IMPORTED_MODULE_4__model_model__["h" /* INDUSTRY_COST */]);
                    }
                    else {
                        return; // nothing changes
                    }
                    game.queueUpdate(__WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].DataChange);
                }), $("<button>")
                    .text("-")
                    .attr("title", "down size (decrease scale by 1)")
                    .click((e) => {
                    const isOk = e.shiftKey || e.ctrlKey || confirm(`Are you sure? This action costs $${__WEBPACK_IMPORTED_MODULE_4__model_model__["i" /* INDUSTRY_DEMOLISH_COST */]} reduces operational efficiency. (press ctrl while clicking the button suppresses this message, press shift for 10 times this operation)`);
                    if (isOk) {
                        if (e.shiftKey) {
                            for (let i = 0; i < 10; i++) {
                                industry.downSize();
                                galaxy.withdraw(__WEBPACK_IMPORTED_MODULE_4__model_model__["i" /* INDUSTRY_DEMOLISH_COST */]);
                            }
                        }
                        else {
                            industry.downSize();
                            galaxy.withdraw(__WEBPACK_IMPORTED_MODULE_4__model_model__["i" /* INDUSTRY_DEMOLISH_COST */]);
                        }
                        game.queueUpdate(__WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].DataChange);
                    }
                }), $("<button>")
                    .text("X")
                    .attr("title", "shut down (free up the industry slot)")
                    .click((e) => {
                    const industryScale = industry.getScale();
                    const demolishCost = industryScale * __WEBPACK_IMPORTED_MODULE_4__model_model__["i" /* INDUSTRY_DEMOLISH_COST */];
                    const isOk = e.ctrlKey || confirm(`Are you sure? This action costs $${demolishCost} reduces operational efficiency. (press ctrl while clicking the button suppresses this message)`);
                    if (isOk) {
                        galaxy.shutdownIndustry(this.colony, industry);
                        galaxy.withdraw(demolishCost);
                        game.queueUpdate(__WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].RecreateIndustryLayout, __WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].DataChange);
                    }
                }));
            }
            yield $("<tr>").append($("<td>")
                .text(__WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */][product])
                .attr("title", PRODUCT_HOVER_TEXT.get(product))
                .append(controlButtons), $("<td>").append(contents));
        }
    }
    makeBuildButton(game, product) {
        return $("<button>")
            .text("+ Build")
            .click((e) => {
            const isOk = e.ctrlKey || confirm(`Are you sure? This action costs $${__WEBPACK_IMPORTED_MODULE_4__model_model__["h" /* INDUSTRY_COST */]}, and will take up a building slot (max 2 per planet). (press ctrl while clicking the button suppresses this message)`);
            if (isOk) {
                const galaxy = game.galaxy;
                galaxy.addIndustry(product, this.colony);
                galaxy.withdraw(__WEBPACK_IMPORTED_MODULE_4__model_model__["h" /* INDUSTRY_COST */]);
                game.queueUpdate(__WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].RecreateIndustryLayout);
                this.layout(game);
            }
        });
    }
    makeIndustryDiv(game, industry) {
        const galaxy = game.galaxy;
        const $container = $("<div>");
        const $scaleLabel = $("<span>");
        $("<div>")
            .attr("title", "Production scale is the size of your industrial complex. It determines production capacity and input consumption.")
            .text("Production Scale: ")
            .append($scaleLabel)
            .appendTo($container);
        const $prodCapLabel = $("<span>");
        $("<div>")
            .attr("title", "Production capacity is the number of goods that the industrial complex can produce when running 100% efficiency and has enough input goods.")
            .text("Production Capacity: ")
            .append($prodCapLabel)
            .appendTo($container);
        const $opEffLabel = $("<span>");
        $("<div>")
            .attr("title", `Operational efficiency determines prod cap and the fixed cost per unit. Industrial complexes that produce raw materials [${RAW_MATERIALS}] need [${__WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */][__WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */].Tool]}] to increase eff, while secondary products [${SECONDARY_MATERIALS}] need [${__WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */][__WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */].Machine]}] to increase eff.`)
            .text("Operational Eff.: ")
            .append($opEffLabel)
            .appendTo($container);
        const $usedEnergyLabel = $("<span>");
        $("<div>")
            .attr("title", "The amount of energy used by this industrial complex. The real cost is Energy Usage times Unit Price (found this in planet panel).")
            .text("Energy Usage: ")
            .append($usedEnergyLabel)
            .appendTo($container);
        const $costPerUnitLabel = $("<span>");
        $("<div>")
            .attr("title", "Fixed cost the amount of money that is used to produce a unit of product; input materials & energy cost aren't included.")
            .text("Fixed Cost Per Unit: ")
            .append($costPerUnitLabel)
            .appendTo($container);
        this.observables.push({
            update: () => {
                $scaleLabel.text(industry.getScale());
                $prodCapLabel.text(industry.prodCap(galaxy));
                const opEff = industry.getOperationalEff() * 100;
                $opEffLabel.text(opEff.toFixed(2));
                const usedEnergy = industry.usedEnergy(galaxy);
                $usedEnergyLabel.text(usedEnergy.toFixed(2));
                const costPerUnit = industry.getCostPerUnit();
                $costPerUnitLabel.text(`$${costPerUnit.toFixed(2)}`);
            },
        });
        return $container;
    }
}
function createProductHoverText(product) {
    const isRaw = __WEBPACK_IMPORTED_MODULE_4__model_model__["r" /* RAW_MATERIALS_SET */].has(product);
    const consumes = __WEBPACK_IMPORTED_MODULE_0_immutable__["Seq"](__WEBPACK_IMPORTED_MODULE_4__model_model__["c" /* DEMAND_PRODUCTS */][product])
        .reduce((acc, cur) => acc.union(cur), __WEBPACK_IMPORTED_MODULE_0_immutable__["Set"]())
        .map((x) => __WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */][x])
        .join(", ");
    return `Is ${isRaw ? "RAW material" : `SECONDARY product; consumes ${consumes}`}`;
}
const PRODUCT_HOVER_TEXT = new Map(__WEBPACK_IMPORTED_MODULE_4__model_model__["v" /* allProducts */]()
    .map((x) => [x, createProductHoverText(x)]));
class PlanetInfoPanel {
    constructor(game, view, planet) {
        this.game = game;
        this.view = view;
        this.observables = new Set();
        const galaxy = game.galaxy;
        const resource = planet.resource;
        const [x, y] = galaxy.getCoor(planet);
        const isColonized = planet.isColonized();
        const rows = [
            $("<tr>")
                .attr("title", "This is the type of resource that this planet can produce locally.")
                .append($("<td>").text(`Resource`), $("<td>").text(`${__WEBPACK_IMPORTED_MODULE_5__model_product__["d" /* Product */][resource]}`)),
            $("<tr>")
                .attr("title", "This is the coordinates of the planet.")
                .append($("<td>").text(`Coor`), $("<td>").append(`(${x.toFixed(2)},${y.toFixed(2)})`)),
        ];
        // population row
        if (isColonized) {
            const $planetPopLabel = $("<span>");
            rows.push($("<tr>")
                .attr("title", `A planet's population determines domestic consumption of basic goods [${BASIC_GOODS}] and luxury goods [${LUXURY_GOODS}], which is one of the 2 ways that allow you to trade goods for money (the other way being supply fuel to power plants).`)
                .append($("<td>").text("Population"), $("<td>").append($planetPopLabel)));
            const colony = planet.getColony();
            console.assert(colony !== undefined);
            this.observables.add({
                update: () => {
                    const pop = colony.getPopulation();
                    const max = colony.getMaxPop();
                    $planetPopLabel.text(`${pop.toFixed(2)}/${max}`);
                },
            });
        }
        else {
            const $colonizeButton = $("<button>")
                .text("Colonize")
                .click(() => {
                galaxy.colonizePlanet(planet, 1);
                $(this).remove();
                this.game.queueUpdate(__WEBPACK_IMPORTED_MODULE_2__game__["b" /* UpdateChannel */].MapChange);
            });
            rows.push($("<tr>")
                .attr("title", "Spend 1 free colonist to colonize this planet. You can encourage growth from colonized planets.")
                .append($("<td>")
                .attr("colspan", 2)
                .append($colonizeButton)));
            this.observables.add({
                update: () => {
                    $colonizeButton.prop("disabled", galaxy.getNumColonists() < 1);
                },
            });
        }
        if (isColonized) {
            {
                const colony = planet.getColony();
                console.assert(colony !== undefined);
                const $growthLabel = $("<span>");
                rows.push($("<tr>")
                    .attr("title", `Growth occurs when population consumes enough food; similarly starvation occurs when citizens lack food. Bonus growth is determined by 2 major factors: 1) citizens' satisfaction of basic [${BASIC_GOODS}] and luxuary goods [${LUXURY_GOODS}], and 2) sufficient power supply.`)
                    .append($("<td>").text("Annual growth"), $("<td>").append($growthLabel)));
                this.observables.add({
                    update: () => {
                        const growthRate = colony.growthRate(galaxy);
                        $growthLabel.text(`${growthRate > 0 ? "+" : ""}${Math.round(growthRate * 100)}%`);
                    },
                });
                const checkbox = document.createElement("input");
                const $checkbox = $(checkbox)
                    .attr("type", "checkbox")
                    .change(() => {
                    const isLimitPop = checkbox.checked;
                    colony.lockPopulation(isLimitPop);
                });
                this.observables.add({
                    update: () => {
                        $checkbox.prop("checked", colony.lockPopulation());
                    },
                });
                rows.push($("<tr>")
                    .attr("title", "This option locks the current population, and any growth on this planet will be transferred to the colonist pool. Since industrial production is not affected by population, encouraging colonists a great way to lock down power usage.")
                    .append($("<td>").text("Encourage Colonists?"), $("<td>").append($checkbox)));
                {
                    const $fuelDemand = $("<span>");
                    const $powerPlanetLvl = $("<span>");
                    const $powerOutput = $("<span>");
                    const $price = $("<span>");
                    const $producerTable = $("<table>").append($("<tr>")
                        .attr("title", "This is the size of the power plant. Each level proportionally affects power output and fuel consumption -- the higher the level, the more power to be output and more fuel to be consumed.")
                        .append($("<td>").text("Power planet level"), $("<td>").append($powerPlanetLvl)), $("<tr>")
                        .attr("title", "Fuel demand is the quantity needed to run the power plants at 100% efficiency. This quantity is the same as what you see in the market for fuel demand.")
                        .append($("<td>").text("Fuel demand"), $("<td>").append($fuelDemand)), $("<tr>")
                        .attr("title", "This is the actual power output of the power plants.")
                        .append($("<td>").text("Output"), $("<td>").append($powerOutput)), $("<tr>")
                        .attr("title", "This is how much 1 unit of energy is worth, subject to demand/supply. Both industries and civilians use power, so in the early game you might want to separate industrial planets and consumer planets.")
                        .append($("<td>").text("Unit price"), $("<td>").append($price)));
                    const $indUsage = $("<span>");
                    const $traderUsage = $("<span>");
                    const $civUsage = $("<span>");
                    const $consumerTable = $("<table>").append($("<tr>")
                        .attr("title", "This is the maximum energy that your industrial complexes need.")
                        .append($("<td>").text("Industry"), $("<td>").append($indUsage)), $("<tr>")
                        .attr("title", "This is the maximum energy that your traders need.")
                        .append($("<td>").text("Trader"), $("<td>").append($traderUsage)), $("<tr>")
                        .attr("title", "This is the maximum energy that the local population needs.")
                        .append($("<td>").text("Civilian"), $("<td>").append($civUsage)));
                    const $expandButton = $("<button>")
                        .text("+")
                        .attr("title", `Invest $${__WEBPACK_IMPORTED_MODULE_4__model_model__["n" /* POWER_PLANT_COST */]} to build a new power plant, if you have the money. Just a reminder, you don't own any power plants; however, these power plants buy fuel from you.`)
                        .click((e) => {
                        const isOk = e.ctrlKey || confirm(`Are you sure to invest in power planet at planet ${planet.id}? This action costs $${__WEBPACK_IMPORTED_MODULE_4__model_model__["n" /* POWER_PLANT_COST */]}. (press ctrl while clicking the button suppresses this message)`);
                        if (isOk) {
                            colony.expandPowerPlanet(galaxy);
                            galaxy.withdraw(__WEBPACK_IMPORTED_MODULE_4__model_model__["n" /* POWER_PLANT_COST */]);
                        }
                    });
                    const $producer = $("<fieldset>")
                        .attr("title", "The producer panel shows details about power plants of this planet.")
                        .append($("<legend>").text("Producer"))
                        .append($producerTable);
                    const $consumer = $("<fieldset>")
                        .attr("title", "The consumer panel shows details about *POTENTIAL* energy consumption on this planet. If the planet has a shortage, energy will be distributed evenly with best effort.")
                        .append($("<legend>").text("Consumer"))
                        .append($consumerTable);
                    const $summary = $("<span>");
                    rows.push($("<tr>")
                        .append($("<td>")
                        .attr("colspan", 2)
                        .attr("title", "Citizens and industrial complexes need power to be run efficiently. Ideally, you want to keep power surplus, so that the local colony and your industrial complexes can run at optimal efficiency.")
                        .text("Power")
                        .append($summary)
                        .append($expandButton, $producer, $consumer)));
                    this.observables.add({
                        update: () => {
                            const powerPlanetLvl = colony.getPowerPlanetLevel();
                            $fuelDemand.text(colony.getFuelDemand());
                            $powerPlanetLvl.text(powerPlanetLvl);
                            const output = colony.getPowerOutput();
                            const eff = colony.getPowerOutputEff() * 100;
                            $powerOutput.text(`${output} (eff:${eff.toFixed(0)}%)`);
                            $indUsage.text(colony.getIndustrialPowerUsage(galaxy));
                            $traderUsage.text(colony.getTraderPowerUsage(galaxy));
                            $civUsage.text(colony.getCivilianPowerUsage());
                            const canExpand = galaxy.getMoney() > __WEBPACK_IMPORTED_MODULE_4__model_model__["n" /* POWER_PLANT_COST */] && colony.canExpandPowerPlant(galaxy);
                            $expandButton.prop("disabled", !canExpand);
                            const totalUsage = colony.getTotalPowerUsage(galaxy);
                            const totalOutput = colony.getPowerOutput();
                            const powerUsageEff = colony.getPowerUsageEff(galaxy) * 100;
                            const summary = ` ${totalUsage}/${totalOutput} (${powerUsageEff.toFixed(2)}%) `;
                            $summary.text(summary);
                            const price = colony.getEnergyPrice(galaxy);
                            $price.text(`$${price.toFixed(2)}`);
                        },
                    });
                }
            }
        }
        $(this.view)
            .empty()
            .append($("<table>").append(...rows));
    }
    update(game, channels) {
        for (const observable of this.observables) {
            observable.update(game, channels);
        }
    }
}
class MarketPanel {
    constructor(game, view, colony) {
        this.game = game;
        this.view = view;
        this.colony = colony;
        this.tableDrawer = new __WEBPACK_IMPORTED_MODULE_3__html__["a" /* DrawTable */]([
            ["Id", (rowA, rowB) => rowA.product - rowB.product],
            ["Goods", (rowA, rowB) => {
                    const strA = __WEBPACK_IMPORTED_MODULE_4__model_model__["p" /* Product */][rowA.product];
                    const strB = __WEBPACK_IMPORTED_MODULE_4__model_model__["p" /* Product */][rowB.product];
                    return __WEBPACK_IMPORTED_MODULE_1__algorithm_algorithm__["g" /* cmpStr */](strA, strB);
                }],
            ["Price", (rowA, rowB) => rowA.price - rowB.price],
            ["Qty", (rowA, rowB) => rowA.qty - rowB.qty],
            ["Galactic Demand", (rowA, rowB) => rowA.globalDemands - rowB.globalDemands],
            ["Galactic ProdCap", (rowA, rowB) => rowA.globalProdCap - rowB.globalProdCap],
        ], () => this.update(game));
        $(view)
            .empty()
            .append(this.tableDrawer
            .$getTable()
            .attr("title", `The market determines local price by demand & supply. Looking at the big picture, you want to make sure the market reaches equilibrium by matching up the galactic demand and the galactic production cap.

The galactic production cap is a potential quantity that the entire galaxy can produce. However, if your industrial complexes lack input resource, they might produce goods at a lower quantity than the prod cap.

Since you are the only player in the galaxy, the only way to earn money is to sell goods that are consumed by citizens [${BASIC_GOODS}, ${LUXURY_GOODS}] and by power plants [${__WEBPACK_IMPORTED_MODULE_4__model_model__["p" /* Product */][__WEBPACK_IMPORTED_MODULE_4__model_model__["p" /* Product */].Fuel]}] -- other intermediate goods are merely transferred to your industry by your traders, e.g. when you trader sells a unit of Crop, your industry will buy it back, so no money is earned.

Finally, you want to overproduce goods that are used to maintain civilian & industrial growth [Food, Fuel, Tool, Machine], instead of maintaining equilibrium. Your real cash cows are luxury goods.`));
    }
    update(game) {
        const galaxy = game.galaxy;
        const data = __WEBPACK_IMPORTED_MODULE_4__model_model__["v" /* allProducts */]()
            .map((product) => {
            return {
                product,
                price: this.colony.getPrice(product),
                qty: this.colony.getSupply(product),
                demand: this.colony.getDemand(product),
                globalDemands: galaxy.getGalacticDemands(product),
                globalProdCap: galaxy.getGalacticProdCap(product),
                globalSupply: galaxy.getGalacticSupplies(product),
            };
        });
        this.tableDrawer
            .render(data, (row) => [
            row.product,
            __WEBPACK_IMPORTED_MODULE_4__model_model__["p" /* Product */][row.product],
            row.price.toFixed(2),
            row.qty,
            row.globalDemands,
            row.globalProdCap,
        ]);
    }
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(3);


class RouteSegmentView {
    constructor(game, route) {
        this.route = route;
        this.view = document.createElement("div");
        const galaxy = game.galaxy;
        const fromObj = galaxy.getObj(route.from, __WEBPACK_IMPORTED_MODULE_0__model_model__["l" /* MapDataKind */].Planet);
        console.assert(fromObj !== undefined);
        console.assert(fromObj.isColonized());
        const toObj = galaxy.getObj(route.to, __WEBPACK_IMPORTED_MODULE_0__model_model__["l" /* MapDataKind */].Planet);
        console.assert(toObj !== undefined);
        console.assert(toObj.isColonized());
        if (fromObj.id < toObj.id) {
            this.lowPlanetId = fromObj.id;
            this.highPlanetId = toObj.id;
            this.lowColony = fromObj.getColony();
            this.highColony = toObj.getColony();
        }
        else {
            this.lowPlanetId = toObj.id;
            this.highPlanetId = fromObj.id;
            this.lowColony = toObj.getColony();
            this.highColony = fromObj.getColony();
        }
        this.layout(game);
    }
    static routeTitleText(game, route) {
        const galaxy = game.galaxy;
        const fromObj = galaxy.getObj(route.from, __WEBPACK_IMPORTED_MODULE_0__model_model__["l" /* MapDataKind */].Planet);
        console.assert(fromObj !== undefined);
        const toObj = galaxy.getObj(route.to, __WEBPACK_IMPORTED_MODULE_0__model_model__["l" /* MapDataKind */].Planet);
        console.assert(toObj !== undefined);
        if (fromObj.id < toObj.id) {
            return `Route (${fromObj.id} ⇆ ${toObj.id})`;
        }
        return `Route (${toObj.id} ⇆ ${fromObj.id})`;
    }
    update(game, channels) {
        this.contents.update(game, channels);
    }
    layout(game) {
        const galaxy = game.galaxy;
        const $title = __WEBPACK_IMPORTED_MODULE_1__view__["c" /* $createTitlebar */](game, this, RouteSegmentView.routeTitleText(game, this.route));
        const $numTraders = $("<span>");
        const $fuelEff = $("<span>");
        const $general = $("<fieldset>")
            .append($("<legend>").text("General"), $("<table>")
            .append($("<tr>")
            .attr("title", "This is the number of traders who trade in this trade lane.")
            .append($("<td>").text("#Traders"), $("<td>").append($numTraders)), $("<tr>")
            .attr("title", "Fuel efficiency determines how fast spaceships can travel due to extra fuel usage.")
            .append($("<td>").text("Fuel Eff."), $("<td>").append($fuelEff))));
        // buttons for adding traders to route
        const $button1 = $("<button>")
            .text("+")
            .click(() => galaxy.addTradeFleet(this.lowColony, this.highColony));
        const $button2 = $("<button>")
            .text("+")
            .click(() => galaxy.addTradeFleet(this.highColony, this.lowColony));
        const $addRoutes = $("<fieldset>")
            .attr("title", "If you have a free trader, you can add the trader to this lane, transferring goods for you. If you don't have a free trader, you can either buy one from the top menu bar or can free one by retiring a trader from the trader screen.")
            .append($("<legend>").text("Add Routes"), $("<table>")
            .append($("<tr>")
            .append($("<td>")
            .text(`${this.lowPlanetId} ⇆ ${this.highPlanetId}`), $("<td>")
            .append($button1)), $("<tr>")
            .append($("<td>")
            .text(`${this.highPlanetId} ⇆ ${this.lowPlanetId}`), $("<td>")
            .append($button2))));
        const $contentPanel = __WEBPACK_IMPORTED_MODULE_1__view__["a" /* $addContentPanelClass */]()
            .append($general, $addRoutes);
        $(this.view).empty();
        __WEBPACK_IMPORTED_MODULE_1__view__["b" /* $addPanelClass */](this)
            .append($title, $contentPanel)
            .mousedown((e) => {
            __WEBPACK_IMPORTED_MODULE_1__view__["l" /* makeDraggable */](this.view, e);
        })
            .click(() => {
            __WEBPACK_IMPORTED_MODULE_1__view__["k" /* bringToFront */](this.view);
        });
        $(document.body).append(this.view);
        this.contents = {
            update: () => {
                const numTraders = galaxy.getNumUsedTraders(this.lowColony, this.highColony);
                $numTraders.text(numTraders);
                const routeEffPercent = Math.round(galaxy.getRouteFuelEff(this.lowColony, this.highColony) * 100);
                $fuelEff.text(`${routeEffPercent}%`);
                const isNoAvailTraders = galaxy.getNumUnusedTraders() === 0;
                $button1.prop("disabled", isNoAvailTraders);
                $button2.prop("disabled", isNoAvailTraders);
            },
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RouteSegmentView;



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_view__ = __webpack_require__(3);


class SelectView {
    constructor(game, objs) {
        this.view = document.createElement("div");
        console.assert(objs.length > 0);
        const $title = __WEBPACK_IMPORTED_MODULE_1__view_view__["c" /* $createTitlebar */](game, this, `Open Which?`);
        const $contentPanel = __WEBPACK_IMPORTED_MODULE_1__view_view__["a" /* $addContentPanelClass */]()
            .append(objs
            .map((obj) => {
            const objLabel = $("<div>")
                .addClass("selectLabel");
            switch (obj.kind) {
                case __WEBPACK_IMPORTED_MODULE_0__model_model__["l" /* MapDataKind */].Fleet:
                    objLabel
                        .text(`Trader ${obj.id}`)
                        .css("color", "yellow");
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__model_model__["l" /* MapDataKind */].Planet:
                    objLabel
                        .text(`Planet ${obj.id}`);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__model_model__["l" /* MapDataKind */].RouteSegment:
                    objLabel
                        .text(__WEBPACK_IMPORTED_MODULE_1__view_view__["i" /* RouteSegmentView */].routeTitleText(game, obj))
                        .css("color", "darkcyan");
                    break;
            }
            return objLabel.click(() => this.clickSelect(game, obj));
        }));
        __WEBPACK_IMPORTED_MODULE_1__view_view__["b" /* $addPanelClass */](this)
            .append($title)
            .append($contentPanel)
            .mousedown((e) => {
            __WEBPACK_IMPORTED_MODULE_1__view_view__["l" /* makeDraggable */](this.view, e);
        })
            .click(() => {
            __WEBPACK_IMPORTED_MODULE_1__view_view__["k" /* bringToFront */](this.view);
        })
            .appendTo(document.body);
    }
    static createSingle(game, obj) {
        const createHelper = () => {
            switch (obj.kind) {
                case __WEBPACK_IMPORTED_MODULE_0__model_model__["l" /* MapDataKind */].Fleet:
                    return new __WEBPACK_IMPORTED_MODULE_1__view_view__["d" /* FleetView */](game, obj);
                case __WEBPACK_IMPORTED_MODULE_0__model_model__["l" /* MapDataKind */].Planet:
                    return new __WEBPACK_IMPORTED_MODULE_1__view_view__["h" /* PlanetView */](game, obj);
                case __WEBPACK_IMPORTED_MODULE_0__model_model__["l" /* MapDataKind */].RouteSegment:
                    return new __WEBPACK_IMPORTED_MODULE_1__view_view__["i" /* RouteSegmentView */](game, obj);
            }
        };
        game.addClosable(createHelper());
    }
    update() {
        //
    }
    clickSelect(game, obj) {
        SelectView.createSingle(game, obj);
        game.close(this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SelectView;



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTU2ZTUyZDEyOWQ0NThjOGZlN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9hbGdvcml0aG0vYWxnb3JpdGhtLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkltbXV0YWJsZVwiIiwid2VicGFjazovLy8uL3NyYy92aWV3L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL3Byb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobS91bmlvbmZpbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkRleGllXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2NvbG9ueS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtL21pbmhlYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobS9teW1hdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobS90cmllLnRzIiwid2VicGFjazovLy8uL3NyYy9hbGdvcml0aG0vYmltYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobS9ncmFwaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaW5kdXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZ2FsYXh5LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9mbGVldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvcGxhbmV0LnRzIiwid2VicGFjazovLy8uL3NyYy9vYnNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9mbGVldHZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvaW1wb3J0ZXhwb3J0dmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9tYXB2aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L21lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvcGxhbmV0dmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9yb3V0ZXNlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2VsZWN0dmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUQwQjtBQUNEO0FBQ0U7QUFDQztBQUNIO0FBQ0Q7QUFDQztBQVN6QixJQUFZLFVBSVg7QUFKRCxXQUFZLFVBQVU7SUFDbEIsMkNBQUk7SUFDSiwyQ0FBSTtJQUNKLCtDQUFNO0FBQ1YsQ0FBQyxFQUpXLFVBQVUsS0FBVixVQUFVLFFBSXJCO0FBRUQsSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ25CLGlEQUFNO0lBQ04sK0NBQUs7SUFDTCw2REFBWTtBQUNoQixDQUFDLEVBSlcsV0FBVyxLQUFYLFdBQVcsUUFJdEI7QUFzQk0sTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBQUE7QUFBQTtBQUMxQixNQUFNLGVBQWUsR0FBRyxHQUFHLENBQUM7QUFBQTtBQUFB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QUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUUsQ0FBQztnQkFDdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM3QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUU3QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxD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QUFDLENBQUM7Z0JBQzFELEtBQUssaUVBQVcsQ0FBQyxZQUFZO29CQUN6QixNQUFNLENBQUMsSUFBSSxvRUFBcUIsQ0FBQyxJQUFJLEVBQUUsR0FBMEIsQ0FBQyxDQUFDO1lBQzNFLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQW1ETSxNQUFNO1FBQ1QsRUFBRTtJQUNOLENBQUM7SUFFTyxXQUFXLENBQUMsSUFBVSxFQUFFLEdBQW1CO1FBQy9DLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBQUE7QUFBQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NTZlNTJkMTI5ZDQ1OGM4ZmU3ZCIsIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbG9ueVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pbmR1c3RyeVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pbnZlbnRvcnlcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2FsYXh5XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZsZWV0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BsYW5ldFwiO1xyXG5cclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9wRGVtYW5kIHtcclxuICAgIG5lZWRlZEtpbmRzOiBTZXQ8UHJvZHVjdD47XHJcbiAgICBxdHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRmxlZXRTdGF0ZSB7XHJcbiAgICBIb2xkLFxyXG4gICAgTW92ZSxcclxuICAgIERvY2tlZCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFwRGF0YUtpbmQge1xyXG4gICAgUGxhbmV0LFxyXG4gICAgRmxlZXQsXHJcbiAgICBSb3V0ZVNlZ21lbnQsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1hcERhdGEge1xyXG4gICAgcmVhZG9ubHkga2luZDogTWFwRGF0YUtpbmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVudGl0eSB7XHJcbiAgICByZWFkb25seSBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhdGFibGUgZXh0ZW5kcyBJRW50aXR5IHtcclxuICAgIHJlYWRvbmx5IGtpbmQ6IE1hcERhdGFLaW5kLlBsYW5ldCB8IE1hcERhdGFLaW5kLkZsZWV0O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSb3V0ZVNlZ21lbnQge1xyXG4gICAgcmVhZG9ubHkga2luZDogTWFwRGF0YUtpbmQuUm91dGVTZWdtZW50O1xyXG4gICAgcmVhZG9ubHkgZnJvbTogQ29vclQ7XHJcbiAgICByZWFkb25seSB0bzogQ29vclQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENvb3JUID0gW251bWJlciwgbnVtYmVyXTtcclxuXHJcbmV4cG9ydCBjb25zdCBZRUFSX1BFUl9USUNLID0gMTIwO1xyXG5leHBvcnQgY29uc3QgQU5OVUFMX0lOVEVSRVNUID0gMC4xOyAvLyAxMCUgaW50ZXJlc3QsIGNvbXBvdW5kZWQgZGFpbHlcclxuZXhwb3J0IGNvbnN0IFRSQURFUl9DT1NUID0gMTAwMDA7XHJcbmV4cG9ydCBjb25zdCBJTkRVU1RSWV9DT1NUID0gMTAwMDA7XHJcbmV4cG9ydCBjb25zdCBJTkRVU1RSWV9ERU1PTElTSF9DT1NUID0gSU5EVVNUUllfQ09TVCAvIDEwO1xyXG5leHBvcnQgY29uc3QgUE9XRVJfUExBTlRfQ09TVCA9IDEwMDAwMDA7XHJcblxyXG5jb25zdCBNQVBfREFUQV9LRVlTID0gT2JqZWN0XHJcbiAgICAua2V5cyhNYXBEYXRhS2luZClcclxuICAgIC5maWx0ZXIoKGspID0+IHR5cGVvZiBNYXBEYXRhS2luZFtrIGFzIGFueV0gPT09IFwibnVtYmVyXCIpO1xyXG5jb25zdCBNQVBfREFUQV9WQUxVRVMgPSBNQVBfREFUQV9LRVlTXHJcbiAgICAubWFwKChrKSA9PiBOdW1iZXIoTWFwRGF0YUtpbmRbayBhcyBhbnldKSBhcyBNYXBEYXRhS2luZCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxsTWFwRGF0YUtpbmQoKSB7XHJcbiAgICByZXR1cm4gTUFQX0RBVEFfVkFMVUVTO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbC9tb2RlbC50cyIsImV4cG9ydCAqIGZyb20gXCIuL21pbmhlYXBcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXltYXRoXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RyaWVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYmltYXBcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdW5pb25maW5kXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2dyYXBoXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmFuZ2Uge1xyXG4gICAgbG93OiBudW1iZXI7XHJcbiAgICBoaWdoOiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgUmV0dXJucyBhbiBpbmRpY2F0b3IgYmV0d2VlbiAwIGFuZCAxIGZyb20gdGhlIGxvdyBzaWRlLlxyXG4gKiAgVXNlIDEtcG9zaXRpb24gdG8gZ2V0IGFuIGluZGljYXRvciBmcm9tIHRoZSBoaWdoIHNpZGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb24ocjogSVJhbmdlLCBjdXJzb3I6IG51bWJlcikge1xyXG4gICAgY29uc3QgbnVtZXJhdG9yID0gY3Vyc29yIC0gci5sb3c7XHJcbiAgICBjb25zdCBkZW5vbWluYXRvciA9IHIuaGlnaCAtIHIubG93O1xyXG5cclxuICAgIGNvbnNvbGUuYXNzZXJ0KGRlbm9taW5hdG9yID49IDAsIFwiaGlnaCA8IGxvdywgYnVnXCIpO1xyXG5cclxuICAgIGlmIChudW1lcmF0b3IgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7IC8vIG5vbmVcclxuICAgIH1cclxuICAgIGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAxOyAvLyBpbmZpbml0eVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGgubWluKDEsIG51bWVyYXRvciAvIGRlbm9taW5hdG9yKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUJldHdlZW4ocjogSVJhbmdlKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChyLmhpZ2ggLSByLmxvdykgKyByLmxvdztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlTWVhbihyOiBJUmFuZ2UpIHtcclxuICAgIHJldHVybiAoci5sb3cgKyByLmhpZ2gpIC8gMjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJhbmdlKHI6IElSYW5nZSwgdmFsdWU6IG51bWJlcik6IElSYW5nZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvdzogTWF0aC5taW4oci5sb3csIHZhbHVlKSxcclxuICAgICAgICBoaWdoOiBNYXRoLm1heChyLmhpZ2gsIHZhbHVlKSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBib3VuZChyOiBJUmFuZ2UsIHZhbDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBsb3cgPSByLmxvdztcclxuICAgIGNvbnN0IGhpZ2ggPSByLmhpZ2g7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobG93LCB2YWwpLCBoaWdoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKGxvdzogbnVtYmVyLCBoaWdoPzogbnVtYmVyKTogSVJhbmdlIHtcclxuICAgIGlmIChoaWdoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4geyBsb3csIGhpZ2g6IGxvdyB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbG93LCBoaWdoIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZUZyb20oLi4ubnVtczogbnVtYmVyW10pOiBJUmFuZ2Uge1xyXG4gICAgaWYgKG51bXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5lZWQgYXQgbGVhc3QgMSBudW1iZXIgdG8gZm9ybSBhIHJhbmdlXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IGxvdyA9IG51bXNbMF07XHJcbiAgICBsZXQgaGlnaCA9IG51bXNbMF07XHJcbiAgICBmb3IgKGNvbnN0IG51bSBvZiBudW1zKSB7XHJcbiAgICAgICAgaWYgKG51bSA8IGxvdykge1xyXG4gICAgICAgICAgICBsb3cgPSBudW07XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPiBoaWdoKSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSBudW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbG93LCBoaWdoIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZVRyYW5zbGF0ZU1lYW4ocjogSVJhbmdlLCBuZXdNZWFuOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG9sZE1lYW4gPSByYW5nZU1lYW4ocik7XHJcbiAgICBjb25zdCBsb3dSYW5nZSA9IG9sZE1lYW4gLSByLmxvdztcclxuICAgIGNvbnN0IGhpZ2hSYW5nZSA9IHIuaGlnaCAtIG9sZE1lYW47XHJcbiAgICByLmxvdyA9IG5ld01lYW4gLSBsb3dSYW5nZTtcclxuICAgIHIuaGlnaCA9IG5ld01lYW4gKyBoaWdoUmFuZ2U7XHJcbiAgICBjb25zb2xlLmFzc2VydChyLmhpZ2ggPj0gci5sb3cpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UmFuZ2VNaW4ocjogSVJhbmdlLCBtaW46IG51bWJlcikge1xyXG4gICAgY29uc3QgZGlmZiA9IHIuaGlnaCAtIHIubG93O1xyXG4gICAgci5sb3cgPSBtaW47XHJcbiAgICByLmhpZ2ggPSBtaW4gKyBkaWZmO1xyXG4gICAgY29uc29sZS5hc3NlcnQoci5oaWdoID49IHIubG93KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZFJhbmdlKHI6IElSYW5nZSwgZmFjdG9yOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG9mZnNldCA9IChyLmhpZ2ggLSByLmxvdykgKiBmYWN0b3I7XHJcbiAgICByLmxvdyA9IHIubG93IC0gb2Zmc2V0O1xyXG4gICAgci5oaWdoID0gci5oaWdoICsgb2Zmc2V0O1xyXG4gICAgY29uc29sZS5hc3NlcnQoci5oaWdoID49IHIubG93KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyYWN0UmFuZ2UocjogSVJhbmdlLCBmYWN0b3I6IG51bWJlcikge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gKHIuaGlnaCAtIHIubG93KSAqIGZhY3RvcjtcclxuICAgIHIubG93ID0gci5sb3cgKyBvZmZzZXQ7XHJcbiAgICByLmhpZ2ggPSByLmhpZ2ggLSBvZmZzZXQ7XHJcbiAgICBjb25zb2xlLmFzc2VydChyLmhpZ2ggPj0gci5sb3cpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBhaXI8VCwgVT4odDogVCwgdTogVSk6IFtULCBVXSB7XHJcbiAgICByZXR1cm4gW3QsIHVdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHNodWZmbGVTbGljZTxUPihpdDogSXRlcmFibGU8VD4pIHtcclxuICAgIGNvbnN0IHRlbXAgPSBBcnJheS5mcm9tKGl0KTtcclxuXHJcbiAgICB3aGlsZSAodGVtcC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdElkeCA9IHRlbXAubGVuZ3RoIC0gMTtcclxuICAgICAgICBjb25zdCBpZHggPSByYW5kb21JbnQoMCwgbGFzdElkeCk7XHJcbiAgICAgICAgeWllbGQgdGVtcFtpZHhdO1xyXG5cclxuICAgICAgICBpZiAoaWR4ID09PSBsYXN0SWR4KSB7XHJcbiAgICAgICAgICAgIHRlbXAucG9wKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc3dhcCB0aGUgdGFyZ2V0IHdpdGggdGhlIGxhc3QgaXRlbVxyXG4gICAgICAgICAgICB0ZW1wW2lkeF0gPSB0ZW1wLnBvcCgpITtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRha2VSYW5kb208VD4oYXJyOiBUW10pIHtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KGFyci5sZW5ndGggPiAwLCBcImJ1ZzogY2Fubm90IHRha2UgZnJvbSBlbXB0eSBhcnJheVwiKTtcclxuICAgIHJldHVybiBhcnJbcmFuZG9tSW50KDAsIGFyci5sZW5ndGggLSAxKV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHaXZlbiBhIHNvcnRlZCBkZW5zZSBhcnJheSwgZmluZCB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IGlzID49IHRhcmdldFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvd2VyQm91bmQ8VCwgVT4oXHJcbiAgICBhcnI6IFRbXSxcclxuICAgIHRhcmdldDogVSxcclxuICAgIHRvVmFsOiAodmFsOiBUKSA9PiBVLFxyXG4gICAgbGVzc1RoYW46IChhOiBVLCBiOiBVKSA9PiBib29sZWFuID0gKGEsIGIpID0+IGEgPCBiLFxyXG4pIHtcclxuICAgIC8vIGJpbmFyeSBzZWFyY2ggaGVscGVyXHJcbiAgICBjb25zdCBiaW5zZWFyY2ggPSAobG93OiBudW1iZXIsIGhpZ2g6IG51bWJlcik6IFtib29sZWFuLCBudW1iZXIsIG51bWJlcl0gPT4ge1xyXG5cclxuICAgICAgICB3aGlsZSAobG93IDw9IGhpZ2gpIHtcclxuICAgICAgICAgICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcigobG93ICsgaGlnaCkgLyAyKTtcclxuICAgICAgICAgICAgY29uc3QgbWlkVmFsID0gdG9WYWwoYXJyW21pZF0pO1xyXG4gICAgICAgICAgICBpZiAobGVzc1RoYW4obWlkVmFsLCB0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBsb3cgPSBtaWQgKyAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlc3NUaGFuKHRhcmdldCwgbWlkVmFsKSkge1xyXG4gICAgICAgICAgICAgICAgaGlnaCA9IG1pZCAtIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3RydWUsIGxvdywgbWlkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgbG93LCBsb3ddO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBrZWVwIHJlcGVhdGluZyB1bnRpbCBkdXBsaWNhdGVzIHJ1biBvdXRcclxuICAgIHtcclxuICAgICAgICBsZXQgW2lzRm91bmQsIGxvdywgcmV0XSA9IGJpbnNlYXJjaCgwLCBhcnIubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgbGV0IHByZXZSZXQgPSByZXQ7XHJcbiAgICAgICAgd2hpbGUgKGlzRm91bmQpIHtcclxuICAgICAgICAgICAgcHJldlJldCA9IHJldDtcclxuICAgICAgICAgICAgLy8gcmV0IGlzIHRoZSB0YXJnZXQgYW5kIGhlcmUgd2UncmUgaW50ZXJlc3RlZFxyXG4gICAgICAgICAgICAvLyBpZiBhbnkgaXRlbSBpbiB0aGUgbG93ZXIgcGFydGl0aW9uIGlzIHRoZSBzYW1lIGFzIHRoZSB0YXJnZXRcclxuICAgICAgICAgICAgW2lzRm91bmQsIGxvdywgcmV0XSA9IGJpbnNlYXJjaChsb3csIHJldCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJldlJldDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVNlYXJjaFBvc2l0aXZlTnVtKHRhcmdldDogbnVtYmVyLCBtYXhQaXZvdDogbnVtYmVyLCB0b1ZhbDogKHBpdm90OiBudW1iZXIpID0+IG51bWJlcikge1xyXG4gICAgY29uc29sZS5hc3NlcnQodGFyZ2V0ID4gMCk7XHJcblxyXG4gICAgbGV0IGN1ciA9IDA7XHJcbiAgICBsZXQgcHJldiA9IDA7XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGlmIChjdXIgPj0gbWF4UGl2b3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1heFBpdm90O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsID0gdG9WYWwoY3VyKTtcclxuICAgICAgICBpZiAodmFsIDw9IHRhcmdldCkge1xyXG4gICAgICAgICAgICAvLyBsb2NhdGVkIHRoZSByYW5nZTsgZG8gYmluYXJ5IHNlYXJjaCBvbiBpdFxyXG4gICAgICAgICAgICByZXR1cm4gYmluYXJ5U2VhcmNoUmFuZ2UodGFyZ2V0LCByYW5nZShwcmV2LCBjdXIpLCB0b1ZhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0cnkgdGhlIG5leHQgcmFuZ2UgdGhyb3VnaCBodW5kcmVkLWRydXBsaW5nIHRoZSB1cHBlciBib3VuZFxyXG4gICAgICAgIHByZXYgPSBjdXI7XHJcbiAgICAgICAgY3VyID0gKGN1ciArIDEpICogMTAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoUmFuZ2UodGFyZ2V0OiBudW1iZXIsIHI6IElSYW5nZSwgdG9WYWw6IChwaXZvdDogbnVtYmVyKSA9PiBudW1iZXIpIHtcclxuXHJcbiAgICBpZiAodGFyZ2V0ID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHIuaGlnaDtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHIubG93O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBsb3cgPSByLmxvdztcclxuICAgIGxldCBoaWdoID0gci5oaWdoO1xyXG5cclxuICAgIC8vIHdlIG9ubHkgY2FyZSBhYm91dCAyIGRlY2ltYWwgcGxhY2VzIChJIGFtIG5vdCBhIG1hdGhlbWF0aWNpYW4pXHJcbiAgICB3aGlsZSAoaGlnaCAtIGxvdyA+IDAuMDEpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcGl2b3QgPSAobG93ICsgaGlnaCkgLyAyO1xyXG4gICAgICAgIGNvbnN0IHBpdm90VmFsID0gdG9WYWwocGl2b3QpO1xyXG4gICAgICAgIGlmIChwaXZvdFZhbCA+IHRhcmdldCkge1xyXG4gICAgICAgICAgICBsb3cgPSBwaXZvdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoaWdoID0gcGl2b3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvdztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNtcFN0cihhOiBzdHJpbmcsIGI6IHN0cmluZykge1xyXG4gICAgaWYgKGEgPCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfSBlbHNlIGlmIChiIDwgYSkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0WmVybyhudW0/OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBudW0gPT09IHVuZGVmaW5lZCA/IDAgOiBudW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdHk8VD4obWFwOiBNYXA8VCwgbnVtYmVyPiwga2V5OiBUKSB7XHJcbiAgICBjb25zdCBxdHkgPSBtYXAuZ2V0KGtleSk7XHJcbiAgICByZXR1cm4gZGVmYXVsdFplcm8ocXR5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3YXA8VD4oYXJyOiBUW10sIGk6IG51bWJlciwgajogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xyXG4gICAgYXJyW2ldID0gYXJyW2pdO1xyXG4gICAgYXJyW2pdID0gdGVtcDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBzZXEoc3RhcnQ6IG51bWJlciA9IDApIHtcclxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgOyBpKyspIHtcclxuICAgICAgICB5aWVsZCBpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHRha2U8VD4oaXQ6IEl0ZXJhYmxlSXRlcmF0b3I8VD4sIG51bTogbnVtYmVyKSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXQpIHtcclxuICAgICAgICBpZiAoKytpID4gbnVtKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB5aWVsZCBpdGVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHJlcGVhdDxUPihkYXRhOiBUKSB7XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIHlpZWxkIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NvcnRlZDxUPihpdDogVFtdLCBsZXNzVGhhbiA9IChhOiBULCBiOiBUKSA9PiBhIDwgYikge1xyXG4gICAgbGV0IHByZXY7XHJcbiAgICBmb3IgKGNvbnN0IGN1ciBvZiBpdCkge1xyXG4gICAgICAgIGlmIChwcmV2ICE9PSB1bmRlZmluZWQgJiYgbGVzc1RoYW4oY3VyLCBwcmV2KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXYgPSBjdXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yPEtleVQsIFZhbFQ+KG1hcDogTWFwPEtleVQsIFZhbFQ+LCBrZXk6IEtleVQsIGRlZmF1bHRGbjogKCkgPT4gVmFsVCkge1xyXG4gICAgY29uc3QgcmV0ID0gbWFwLmdldChrZXkpO1xyXG4gICAgcmV0dXJuIHJldCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdEZuKCkgOiByZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPclNldDxLZXlULCBWYWxUPihtYXA6IE1hcDxLZXlULCBWYWxUPiwga2V5OiBLZXlULCBkZWZhdWx0Rm46ICgpID0+IFZhbFQpIHtcclxuICAgIGNvbnN0IHJldCA9IG1hcC5nZXQoa2V5KTtcclxuICAgIGlmIChyZXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IGRlZiA9IGRlZmF1bHRGbigpO1xyXG4gICAgICAgIG1hcC5zZXQoa2V5LCBkZWYpO1xyXG4gICAgICAgIHJldHVybiBkZWY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0T3JUaHJvdzxLZXlULCBWYWxUPihtYXA6IE1hcDxLZXlULCBWYWxUPiwga2V5OiBLZXlULCB2YWw6IFZhbFQpIHtcclxuICAgIGNvbnN0IHJldCA9IG1hcC5nZXQoa2V5KTtcclxuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInRoZSBtYXAgYWxyZWFkeSBoYXMgYW4gZW50cnkgZm9yIHRoZSBnaXZlbiBrZXlcIik7XHJcbiAgICB9XHJcbiAgICBtYXAuc2V0KGtleSwgdmFsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcEdldDxLZXlULCBWYWxUPihtYXA6IE1hcDxLZXlULCBWYWxUPiwga2V5OiBLZXlULCBkZWZhdWx0VmFsPzogVmFsVCk6IE9wdGlvbjxWYWxUPiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBtYXAuZ2V0KGtleSk7XHJcbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoZGVmYXVsdFZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPcHRpb24uc29tZShkZWZhdWx0VmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9wdGlvbi5ub25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBPcHRpb24uc29tZShyZXN1bHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwQWRkPEtleVQ+KFxyXG4gICAgbWFwMTogSXRlcmFibGVJdGVyYXRvcjxbS2V5VCwgbnVtYmVyXT4gfCBNYXA8S2V5VCwgbnVtYmVyPixcclxuICAgIG1hcDI6IEl0ZXJhYmxlSXRlcmF0b3I8W0tleVQsIG51bWJlcl0+IHwgTWFwPEtleVQsIG51bWJlcj4sXHJcbikge1xyXG4gICAgY29uc3QgcmV0ID0gbmV3IE1hcDxLZXlULCBudW1iZXI+KG1hcDEpO1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIG1hcDIpIHtcclxuICAgICAgICBnZXRBbmRTdW0ocmV0LCBrZXksIHZhbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwU3VidHJhY3Q8S2V5VD4oXHJcbiAgICBtYXAxOiBJdGVyYWJsZUl0ZXJhdG9yPFtLZXlULCBudW1iZXJdPiB8IE1hcDxLZXlULCBudW1iZXI+LFxyXG4gICAgbWFwMjogSXRlcmFibGVJdGVyYXRvcjxbS2V5VCwgbnVtYmVyXT4gfCBNYXA8S2V5VCwgbnVtYmVyPixcclxuKSB7XHJcbiAgICBjb25zdCByZXQgPSBuZXcgTWFwPEtleVQsIG51bWJlcj4obWFwMSk7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgbWFwMikge1xyXG4gICAgICAgIGdldEFuZFN1bShyZXQsIGtleSwgLXZhbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5kU3VtPEtleVQ+KG1hcDogTWFwPEtleVQsIG51bWJlcj4sIGtleTogS2V5VCwgdmFsOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHN1bSA9IGdldFF0eShtYXAsIGtleSkgKyB2YWw7XHJcbiAgICBpZiAoc3VtID09PSAwKSB7XHJcbiAgICAgICAgbWFwLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgbWFwLnNldChrZXksIHN1bSk7XHJcbiAgICByZXR1cm4gc3VtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIG1hcEZpbHRlcjxLZXlULCBWYWxUPihtYXA6IE1hcDxLZXlULCBWYWxUPiwgcHJlZDogKHZhbDogVmFsVCkgPT4gYm9vbGVhbikge1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIG1hcCkge1xyXG4gICAgICAgIGlmIChwcmVkKHZhbCkpIHtcclxuICAgICAgICAgICAgeWllbGQgW2tleSwgdmFsXSBhcyBbS2V5VCwgVmFsVF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNvbWJpbmVJdDxUPiguLi5pdHM6IEFycmF5PEl0ZXJhYmxlSXRlcmF0b3I8VD4gfCBUW10gfCBTZXQ8VD4gfCBJbW11dGFibGUuU2VxLkluZGV4ZWQ8VD4+KSB7XHJcbiAgICBmb3IgKGNvbnN0IGl0IG9mIGl0cykge1xyXG4gICAgICAgIGZvciAoY29uc3QgdiBvZiBpdCkge1xyXG4gICAgICAgICAgICB5aWVsZCB2O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqICBSZXR1cm4gYSBsaXN0IG9mIHVuaXF1ZSB2YWx1ZXMgZnJvbSBhIHNvcnRlZCBsaXN0IG9mIHZhbHVlc1xyXG4gKiBAcGFyYW0gc29ydGVkVmFscyBhIHNvcnRlZCBsaXN0XHJcbiAqIEBwYXJhbSBpc0VxIGVxdWFsaXR5IGNvbXBhcmF0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiogdW5pcTxUPihzb3J0ZWRWYWxzOiBUW10sIGlzRXEgPSAoYTogVCwgYjogVCkgPT4gYSA9PT0gYikge1xyXG5cclxuICAgIGlmIChzb3J0ZWRWYWxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgY3VyID0gc29ydGVkVmFsc1swXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiBzb3J0ZWRWYWxzKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNFcSh2YWwsIGN1cikpIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIGN1cjtcclxuICAgICAgICAgICAgICAgIGN1ciA9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB5aWVsZCBjdXI7IC8vIGVpdGhlciB0aGUgbGFzdCB2YWx1ZSBpcyB1bmlxdWUsIG9yIHRoZSBwcmV2aW91cyB2YWx1ZSBpcyBub3QgdW5pcXVlIGJ1dCBoYXZlbid0IHJlcG9ydGVkXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncm91cDxULCBVPih2YWxGbjogKHQ6IFQpID0+IFUsIC4uLnZhbHM6IFRbXSkge1xyXG4gICAgY29uc3QgcmV0ID0gbmV3IE1hcDxVLCBUW10+KCk7XHJcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiB2YWxzKSB7XHJcbiAgICAgICAgY29uc3QgdSA9IHZhbEZuKHZhbCk7XHJcbiAgICAgICAgZ2V0T3JTZXQocmV0LCB1LCAoKSA9PiBbXSkucHVzaCh2YWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpdGlvbjxUPihhcnI6IFRbXSwgcHJlZDogKHZhbDogVCkgPT4gYm9vbGVhbikge1xyXG4gICAgcmV0dXJuIGFyclxyXG4gICAgICAgIC5yZWR1Y2UoKFtnb29kLCBiYWRdLCBjdXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByZWQoY3VyKSkge1xyXG4gICAgICAgICAgICAgICAgZ29vZC5wdXNoKGN1cik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYWQucHVzaChjdXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbZ29vZCwgYmFkXSBhcyBbVFtdLCBUW11dO1xyXG4gICAgICAgIH0sIFtbXSwgW11dIGFzIFtUW10sIFRbXV0pO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3B0aW9uPFQ+IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHdyYXA8VD4odmFsPzogVCkge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IG5ldyBPcHRpb248VD4oKTtcclxuICAgICAgICByZXQudmFsID0gdmFsO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzb21lPFQ+KHZhbDogVCkge1xyXG4gICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzb21lIGNhbm5vdCBiZSB1bmRlZmluZWQgdmFsdWVzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gT3B0aW9uLndyYXAodmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5vbmU8VD4oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPcHRpb248VD4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbD86IFQ7XHJcblxyXG4gICAgcHVibGljIHRoZW48VT4oY2FsbGJhY2s6ICh2YWw6IFQpID0+IE9wdGlvbjxVPikge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh0aGlzLnZhbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbi5ub25lPFU+KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0aGVuU29tZTxVPihjYWxsYmFjazogKHZhbDogVCkgPT4gVSkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPcHRpb24uc29tZShjYWxsYmFjayh0aGlzLnZhbCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPcHRpb24ubm9uZTxVPigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcnVuU29tZShjYWxsYmFjazogKHZhbDogVCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMudmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbHRlcihwcmVkOiAodmFsOiBUKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsICE9PSB1bmRlZmluZWQgJiYgcHJlZCh0aGlzLnZhbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbi5zb21lKHRoaXMudmFsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uLm5vbmU8VD4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVud3JhcChkZWZhdWx0VmFsPzogVCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbm5vdCB1bndyYXAgYSBub25lIHZhbHVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy52YWwhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbmplY3ROb25lKGJhZFZhbEZuOiAoKSA9PiBUKTogT3B0aW9uPFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaE1hcChcclxuICAgICAgICAgICAgKCkgPT4gdGhpcyxcclxuICAgICAgICAgICAgKCkgPT4gT3B0aW9uLnNvbWUoYmFkVmFsRm4oKSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWF0Y2goXHJcbiAgICAgICAgc29tZTogKHZhbDogVCkgPT4gdm9pZCxcclxuICAgICAgICBub25lID0gKCkgPT4geyAvKiBlbXB0eSAqLyB9LFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbm9uZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNvbWUodGhpcy52YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWF0Y2hNYXA8VT4oXHJcbiAgICAgICAgc29tZTogKHZhbDogVCkgPT4gT3B0aW9uPFU+LFxyXG4gICAgICAgIG5vbmUgPSAoKSA9PiBPcHRpb24ubm9uZTxVPigpLFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vbmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc29tZSh0aGlzLnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1NvbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTm9uZSgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNTb21lKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FsZ29yaXRobS9hbGdvcml0aG0udHMiLCJtb2R1bGUuZXhwb3J0cyA9IEltbXV0YWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkltbXV0YWJsZVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEdhbWUsIFVwZGF0ZUNoYW5uZWwgfSBmcm9tIFwiLi4vZ2FtZVwiO1xyXG5pbXBvcnQgeyBJT2JzZXJ2ZXIgfSBmcm9tIFwiLi4vb2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHsgRmxlZXRWaWV3IH0gZnJvbSBcIi4vZmxlZXR2aWV3XCI7XHJcbmltcG9ydCB7IEltcG9ydEV4cG9ydFZpZXcgfSBmcm9tIFwiLi9pbXBvcnRleHBvcnR2aWV3XCI7XHJcbmltcG9ydCB7IFBsYW5ldFZpZXcgfSBmcm9tIFwiLi9wbGFuZXR2aWV3XCI7XHJcbmltcG9ydCB7IFJvdXRlU2VnbWVudFZpZXcgfSBmcm9tIFwiLi9yb3V0ZXNlZ21lbnRcIjtcclxuaW1wb3J0IHsgU2VsZWN0VmlldyB9IGZyb20gXCIuL3NlbGVjdHZpZXdcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZsZWV0dmlld1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pbXBvcnRleHBvcnR2aWV3XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21hcHZpZXdcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWVudVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wbGFuZXR2aWV3XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JvdXRlc2VnbWVudFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zZWxlY3R2aWV3XCI7XHJcblxyXG5leHBvcnQgdHlwZSBPYnNlcnZlciA9IElPYnNlcnZlcjxHYW1lLCBVcGRhdGVDaGFubmVsPjtcclxuZXhwb3J0IHR5cGUgQ2xvc2FibGVWaWV3ID0gRmxlZXRWaWV3IHwgSW1wb3J0RXhwb3J0VmlldyB8IFBsYW5ldFZpZXcgfCBTZWxlY3RWaWV3IHwgUm91dGVTZWdtZW50VmlldztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBicmluZ1RvRnJvbnQodmlldzogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0ICR2aWV3ID0gJCh2aWV3KTtcclxuICAgICR2aWV3LnBhcmVudCgpLmFwcGVuZCgkdmlldyk7XHJcbn1cclxuXHJcbnR5cGUgRXZlbnQgPSBKUXVlcnkuRXZlbnQ8SFRNTEVsZW1lbnQsIG51bGw+O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEcmFnZ2FibGUodmlldzogSFRNTEVsZW1lbnQsIGU6IEV2ZW50KSB7XHJcbiAgICBjb25zdCAkZWxlID0gJCh2aWV3KTtcclxuICAgIGNvbnN0IHBvcyA9ICRlbGUucG9zaXRpb24oKTtcclxuICAgIGNvbnN0IGNsaWNrUG9zRGlmZiA9IHtcclxuICAgICAgICB0b3A6IGUuY2xpZW50WSEgLSBwb3MudG9wLFxyXG4gICAgICAgIGxlZnQ6IGUuY2xpZW50WCEgLSBwb3MubGVmdCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2VzdHVyZSA9IG5ldyBIYW1tZXIuTWFuYWdlcih2aWV3KTtcclxuICAgIGNvbnN0IHBhbiA9IG5ldyBIYW1tZXIuUGFuKClcclxuICAgICAgICAuc2V0KHsgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTCB9KTtcclxuICAgIGdlc3R1cmUuYWRkKHBhbik7XHJcbiAgICBnZXN0dXJlLm9uKFwicGFuXCIsIChlSW5uZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlSW5uZXIudHlwZSk7XHJcbiAgICAgICAgbGV0IFtuZXdZLCBuZXdYXSA9IFtcclxuICAgICAgICAgICAgZUlubmVyLmNlbnRlci55IC0gY2xpY2tQb3NEaWZmLnRvcCxcclxuICAgICAgICAgICAgZUlubmVyLmNlbnRlci54IC0gY2xpY2tQb3NEaWZmLmxlZnQsXHJcbiAgICAgICAgXSBhcyBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgICAgIC8vIGxldCBbbmV3WSwgbmV3WF0gPSBbZUlubmVyLmNsaWVudFkhIC0gY2xpY2tQb3NEaWZmLnRvcCwgZUlubmVyLmNsaWVudFghIC0gY2xpY2tQb3NEaWZmLmxlZnRdO1xyXG4gICAgICAgIGlmIChuZXdYIDwgMCkge1xyXG4gICAgICAgICAgICBuZXdYID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF4WCA9ICQoZG9jdW1lbnQuYm9keSkud2lkdGgoKSEgLSAkZWxlLmlubmVyV2lkdGgoKSE7XHJcbiAgICAgICAgaWYgKG5ld1ggPiBtYXhYKSB7XHJcbiAgICAgICAgICAgIG5ld1ggPSBtYXhYO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV3WSA8IDApIHtcclxuICAgICAgICAgICAgbmV3WSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1heFkgPSAkKGRvY3VtZW50LmJvZHkpLmhlaWdodCgpISAtICRlbGUuaW5uZXJIZWlnaHQoKSE7XHJcbiAgICAgICAgaWYgKG5ld1kgPiBtYXhZKSB7XHJcbiAgICAgICAgICAgIG5ld1kgPSBtYXhZO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkZWxlLm9mZnNldCh7IHRvcDogbmV3WSwgbGVmdDogbmV3WCB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICAkKGRvY3VtZW50KVxyXG4gICAgICAgIC5tb3VzZXVwKCgpID0+IHtcclxuICAgICAgICAgICAgc3VzcGVuZERyYWdnYWJsZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1vdXNlbW92ZSgoZUlubmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBbbmV3WSwgbmV3WF0gPSBbZUlubmVyLmNsaWVudFkhIC0gY2xpY2tQb3NEaWZmLnRvcCwgZUlubmVyLmNsaWVudFghIC0gY2xpY2tQb3NEaWZmLmxlZnRdO1xyXG4gICAgICAgICAgICBpZiAobmV3WCA8IDApIHtcclxuICAgICAgICAgICAgICAgIG5ld1ggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFggPSAkKGRvY3VtZW50LmJvZHkpLndpZHRoKCkhIC0gJGVsZS5pbm5lcldpZHRoKCkhO1xyXG4gICAgICAgICAgICBpZiAobmV3WCA+IG1heFgpIHtcclxuICAgICAgICAgICAgICAgIG5ld1ggPSBtYXhYO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdZIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbmV3WSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWF4WSA9ICQoZG9jdW1lbnQuYm9keSkuaGVpZ2h0KCkhIC0gJGVsZS5pbm5lckhlaWdodCgpITtcclxuICAgICAgICAgICAgaWYgKG5ld1kgPiBtYXhZKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdZID0gbWF4WTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkZWxlLm9mZnNldCh7IHRvcDogbmV3WSwgbGVmdDogbmV3WCB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAqL1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3VzcGVuZERyYWdnYWJsZSgpIHtcclxuICAgICQoZG9jdW1lbnQpXHJcbiAgICAgICAgLm9mZihcIm1vdXNldXBcIilcclxuICAgICAgICAub2ZmKFwibW91c2Vtb3ZlXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gJGNyZWF0ZVRpdGxlYmFyKFxyXG4gICAgZ2FtZTogR2FtZSxcclxuICAgIHZpZXc6IENsb3NhYmxlVmlldyxcclxuICAgIHRpdGxlOiBzdHJpbmcpIHtcclxuXHJcbiAgICByZXR1cm4gJChcIjxkaXY+XCIpXHJcbiAgICAgICAgLmFkZENsYXNzKFwidGl0bGViYXJcIilcclxuICAgICAgICAudGV4dCh0aXRsZSlcclxuICAgICAgICAuYXBwZW5kKCQoXCI8c3Bhbj5cIilcclxuICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHNwYW4+XCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNyZWF0ZTwvaT5gKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIlBpbiB0aGlzIHdpbmRvd1wiKVxyXG4gICAgICAgICAgICAgICAgLmNsaWNrKCgpID0+IGdhbWUucGluKHZpZXcpKSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHNwYW4+XCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9pPmApXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiQ2xvc2UgdGhpcyB3aW5kb3dcIilcclxuICAgICAgICAgICAgICAgIC5jbGljaygoKSA9PiBnYW1lLmNsb3NlKHZpZXcpKSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gJGFkZFBhbmVsQ2xhc3ModmlldzogQ2xvc2FibGVWaWV3KSB7XHJcbiAgICByZXR1cm4gJCh2aWV3LnZpZXcpLmFkZENsYXNzKFwicGFuZWxcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAkYWRkQ29udGVudFBhbmVsQ2xhc3MoZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpIHtcclxuICAgIHJldHVybiAkKGVsZW1lbnQpLmFkZENsYXNzKFwicGFuZWwtY29udGVudFwiKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy92aWV3LnRzIiwiaW1wb3J0IERleGllIGZyb20gXCJkZXhpZVwiO1xyXG5pbXBvcnQgKiBhcyBNb2RlbCBmcm9tIFwiLi9tb2RlbC9tb2RlbFwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcIi4vb2JzZXJ2ZXJcIjtcclxuaW1wb3J0ICogYXMgVmlldyBmcm9tIFwiLi92aWV3L3ZpZXdcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFVwZGF0ZUNoYW5uZWwge1xyXG4gICAgRGF0YUNoYW5nZSxcclxuICAgIFR1cm5DaGFuZ2UsXHJcbiAgICBNYXBDaGFuZ2UsXHJcbiAgICBSZWNyZWF0ZUluZHVzdHJ5TGF5b3V0LFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTYXZlRGF0YSB7XHJcbiAgICBnYWxheHlTYXZlOiBNb2RlbC5JR2FsYXh5U2F2ZURhdGE7XHJcbiAgICBtYXBWaWV3U2F2ZTogVmlldy5JTWFwVmlld1NhdmVEYXRhO1xyXG59XHJcblxyXG5jbGFzcyBEQiBleHRlbmRzIERleGllIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNhdmVUYWJsZT86IERleGllLlRhYmxlPElTYXZlRGF0YSwgbnVtYmVyPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcImdhbWVEQlwiKTtcclxuICAgICAgICB0aGlzLnZlcnNpb24oMSkuc3RvcmVzKHsgc2F2ZVRhYmxlOiBcIixnYWxheHlTYXZlLG1hcFZpZXdTYXZlXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmUoc2F2ZURhdGE6IElTYXZlRGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNhdmVUYWJsZSEucHV0KHNhdmVEYXRhLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2F2ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zYXZlVGFibGUhLmdldCgwKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgdHJ5TG9hZCgpIHtcclxuICAgICAgICBjb25zdCBzYXZlRGF0YSA9IGF3YWl0IG5ldyBEQigpLmdldFNhdmUoKTtcclxuICAgICAgICByZXR1cm4gbmV3IEdhbWUoc2F2ZURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnYWxheHk6IE1vZGVsLkdhbGF4eTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3ViamVjdCA9IG5ldyBTdWJqZWN0PHRoaXMsIFVwZGF0ZUNoYW5uZWw+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNsb3NhYmxlcyA9IG5ldyBTZXQ8Vmlldy5DbG9zYWJsZVZpZXc+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlzUGlubmVkID0gbmV3IFNldDxWaWV3LkNsb3NhYmxlVmlldz4oKTtcclxuICAgIHByaXZhdGUgZ2FtZUxvb3BJZD86IG51bWJlcjtcclxuICAgIHByaXZhdGUgdGltZVBlckZyYW1lID0gNTA7XHJcbiAgICBwcml2YXRlIGF1dG9TYXZlU2Vjb25kcyA9IDYwICogMTsgLy8gMSBtaW51dGVcclxuICAgIHByaXZhdGUgYXV0b1NhdmVJZD86IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIG1hcFZpZXc6IFZpZXcuTWFwVmlldztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVudTogVmlldy5NZW51O1xyXG5cclxuICAgIHByaXZhdGUgZGIgPSBuZXcgREIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzYXZlRGF0YT86IElTYXZlRGF0YSkge1xyXG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBWaWV3Lk1lbnUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWxvYWQoc2F2ZURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWxvYWQoc2F2ZURhdGE/OiBJU2F2ZURhdGEpIHtcclxuICAgICAgICB0aGlzLmlzUGlubmVkLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUFsbCgpO1xyXG5cclxuICAgICAgICBpZiAoc2F2ZURhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5nYWxheHkgPSBNb2RlbC5HYWxheHkuY3JlYXRlRnJvbShzYXZlRGF0YS5nYWxheHlTYXZlKTtcclxuICAgICAgICAgICAgdGhpcy5tYXBWaWV3ID0gbmV3IFZpZXcuTWFwVmlldyh0aGlzLCBzYXZlRGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYWxheHkgPSBuZXcgTW9kZWwuR2FsYXh5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FsYXh5LmFkZFBsYW5ldHMoMjAsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLm1hcFZpZXcgPSBuZXcgVmlldy5NYXBWaWV3KHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdW5zdWJzcmliZSBhbmQgdGhlbiByZXN1YnNyaWJlXHJcbiAgICAgICAgdGhpcy5zdWJqZWN0LmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUodGhpcy5tZW51KTsgLy8gdW5jaGFuZ2VkXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUodGhpcy5tYXBWaWV3KTtcclxuXHJcbiAgICAgICAgLy8gZm9yY2UtdXBkYXRlIHRoZSB2aWV3cyAobWFpbmx5IG1hcHZpZXcpXHJcbiAgICAgICAgdGhpcy5xdWV1ZVVwZGF0ZShVcGRhdGVDaGFubmVsLkRhdGFDaGFuZ2UsIFVwZGF0ZUNoYW5uZWwuVHVybkNoYW5nZSwgVXBkYXRlQ2hhbm5lbC5NYXBDaGFuZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLnBhdXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgICAgICAgdGhpcy5yZXN1bWVBdXRvU2F2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXN1bWUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVMb29wSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZ2FtZUxvb3BJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVMb29wSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbGF4eS50dXJuKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdC5xdWV1ZVVwZGF0ZShVcGRhdGVDaGFubmVsLlR1cm5DaGFuZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdC5xdWV1ZVVwZGF0ZShVcGRhdGVDaGFubmVsLkRhdGFDaGFuZ2UpO1xyXG4gICAgICAgIH0sIHRoaXMudGltZVBlckZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmFzdEZvcndhcmQoKSB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQodGhpcy5jYW5GYXN0Rm9yd2FyZCgpKTtcclxuICAgICAgICB0aGlzLnRpbWVQZXJGcmFtZSAtPSA0MDtcclxuICAgICAgICB0aGlzLnJlc3VtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzbG93RG93bigpIHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0aGlzLmNhblNsb3dEb3duKCkpO1xyXG4gICAgICAgIHRoaXMudGltZVBlckZyYW1lICs9IDQwO1xyXG4gICAgICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbkZhc3RGb3J3YXJkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVQZXJGcmFtZSA+IDIwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5TbG93RG93bigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lUGVyRnJhbWUgPCAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdXNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVMb29wSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZ2FtZUxvb3BJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxvb3BJZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzR2FtZVJ1bm5pbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUxvb3BJZCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydFJlbmRlcmluZygpIHtcclxuICAgICAgICBjb25zdCBzdGFydFJlbmRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdWJqZWN0LnVwZGF0ZSh0aGlzKTtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHN0YXJ0UmVuZGVyKCkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN0YXJ0UmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVuc3Vic2NyaWJlKG9iczogVmlldy5PYnNlcnZlcikge1xyXG4gICAgICAgIHRoaXMuc3ViamVjdC51bnN1YnNjcmliZShvYnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJzY3JpYmUoLi4ub2JzOiBWaWV3Lk9ic2VydmVyW10pIHtcclxuICAgICAgICB0aGlzLnN1YmplY3Quc3Vic2NyaWJlKC4uLm9icyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHF1ZXVlVXBkYXRlKC4uLmNoYW5uZWxUeXBlczogVXBkYXRlQ2hhbm5lbFtdKSB7XHJcbiAgICAgICAgdGhpcy5zdWJqZWN0LnF1ZXVlVXBkYXRlKC4uLmNoYW5uZWxUeXBlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENsb3NhYmxlKG9iczogVmlldy5DbG9zYWJsZVZpZXcpIHtcclxuICAgICAgICB0aGlzLmNsb3NhYmxlcy5hZGQob2JzKTtcclxuICAgICAgICB0aGlzLnN1YmplY3Quc3Vic2NyaWJlKG9icyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBpbihjbG9zYWJsZTogVmlldy5DbG9zYWJsZVZpZXcpIHtcclxuICAgICAgICB0aGlzLmlzUGlubmVkLmFkZChjbG9zYWJsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKGNsb3NhYmxlOiBWaWV3LkNsb3NhYmxlVmlldykge1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoY2xvc2FibGUpO1xyXG4gICAgICAgIGNsb3NhYmxlLnZpZXcucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaXNEZWxldGVkID0gdGhpcy5jbG9zYWJsZXMuZGVsZXRlKGNsb3NhYmxlKTtcclxuICAgICAgICB0aGlzLmlzUGlubmVkLmRlbGV0ZShjbG9zYWJsZSk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoaXNEZWxldGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VBbGwoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjbG9zYWJsZSBvZiB0aGlzLmNsb3NhYmxlcykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNQaW5uZWQuaGFzKGNsb3NhYmxlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZShjbG9zYWJsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBJU2F2ZURhdGEge1xyXG4gICAgICAgIGNvbnN0IGdhbGF4eVNhdmUgPSB0aGlzLmdhbGF4eS5zZXJpYWxpemUoKTtcclxuICAgICAgICBjb25zdCBtYXBWaWV3U2F2ZSA9IHRoaXMubWFwVmlldy5zZXJpYWxpemUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ2FsYXh5U2F2ZSxcclxuICAgICAgICAgICAgbWFwVmlld1NhdmUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc2F2ZSgpIHtcclxuICAgICAgICBjb25zdCBzYXZlRGF0YSA9IHRoaXMuc2VyaWFsaXplKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIuc2F2ZShzYXZlRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXN1bWVBdXRvU2F2ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvU2F2ZUlkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9TYXZlSWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdXRvU2F2ZUlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgICAgICB9LCB0aGlzLmF1dG9TYXZlU2Vjb25kcyAqIDEwMDApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lLnRzIiwiaW1wb3J0ICogYXMgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFByb2R1Y3Qge1xyXG5cclxuICAgIC8vIHJhdyBtYXRlcmlhbHNcclxuICAgIENyb3AsIC8vIHRvIGZvb2QsIGNoZW1pY2FsIChzZWFzb25hbCBoaWdoLXlpZWxkIGhhcnZlc3QpXHJcbiAgICBNZXRhbCwgLy8gdG8gdmVoaWNsZXMsIG1hY2hpbmVzLCB3ZWFwb25zXHJcbiAgICBHZW0sIC8vIHRvIGFjY2Vzc29yeSwgd2VhcG9uc1xyXG4gICAgRnVlbCwgLy8gZnVlbCBmb3Igc3BhY2VjcmFmdCwgcG93ZXIgcGxhbnRcclxuXHJcbiAgICAvLyBpbnRlcm1lZGlhdGVcclxuICAgIEZpYmVyLCAvLyB0byBhcHBhcmVscywgZnJvbSBjcm9wc1xyXG4gICAgQ2hlbWljYWwsIC8vIHRvIG1lZGljaW5lcyAmIGh1bGxzLCBmcm9tIGFueSByYXcgbWF0ZXJpYWxzXHJcbiAgICBDaXJjdWl0LCAvLyB0byBnYWRnZXRzLCBjb21wdXRlcnMsIGZyb20gbWV0YWxzXHJcbiAgICBDb21wdXRlciwgLy8gZnJvbSBjaXJjdWl0c1xyXG5cclxuICAgIC8vIGNvbW1vbiBnb29kc1xyXG4gICAgRm9vZCwgLy8gZ2VuZXJpYyBmb29kLCBmcm9tIGFuaW1hbHMgb3IgY3JvcHNcclxuICAgIERyaW5rLCAvLyBmcm9tIGNyb3BzXHJcbiAgICBBcHBhcmVsLCAvLyBmcm9tIGZpYmVyc1xyXG4gICAgTWVkaWNpbmUsIC8vIGZyb20gY2hlbWljYWxzXHJcblxyXG4gICAgLy8gbHV4dWFyeVxyXG4gICAgQWNjZXNzb3J5LCAvLyBmcm9tIGdlbXNcclxuICAgIEZ1cm5pdHVyZSwgLy8gZnJvbSBmaWJlclxyXG4gICAgR2FkZ2V0LCAvLyBmcm9tIGNvbXB1dGVyc1xyXG4gICAgVmVoaWNsZSwgLy8gZnJvbSBtZXRhbHNcclxuXHJcbiAgICAvLyBvcGVyYXRpb25hbFxyXG4gICAgLy8gQ29uY3JldGUsIC8vIGNvbnN0cnVjdGlvbiwgZnJvbSBtZXRhbFxyXG4gICAgTWFjaGluZSwgLy8gZnJvbSBtZXRhbCBhbmQgY29tcHV0ZXJzLCB1c2VkIGJ5IGluZHVzdHJpZXNcclxuICAgIFRvb2wsIC8vIGZyb20gbWV0YWwsIHVzZWQgZm9yIHJhdyBtYXRlcmlhbCBwcm9kdWN0aW9uXHJcbiAgICAvKlxyXG4gICAgU3VwcGx5LCAvLyBmcm9tIGNvbW1vbiBnb29kc1xyXG5cclxuICAgIC8vIHNwYWNlY3JhZnQgY29tcG9uZW50IHBvaW50c1xyXG4gICAgSHVsbCwgLy8gZnJvbSBtZXRhbHMgJiBjaGVtaWNhbHNcclxuICAgIExhc2VyLCAvLyBmcm9tIG1ldGFscyAmIGdlbXNcclxuICAgIEd1biwgLy8gZnJvbSBtZXRhbHMgJiBnZW1zXHJcbiAgICBNaXNzaWxlLCAvLyBmcm9tIG1ldGFscyAmIGdlbXNcclxuICAgIEVuZ2luZSwgLy8gZnJvbSBtZXRhbHMgJiBnZW1zXHJcbiAgICBTaGllbGQsIC8vIGZyb20gZ2Vtc1xyXG4gICAgQXJtb3IsIC8vIGZyb20gbWV0YWxzXHJcbiAgICBDb3VudGVybWVhc3VyZSwgLy8gZnJvbSBtZXRhbHNcclxuXHJcbiAgICAvLyBzb2xkZXIgZXF1aXBtZW50c1xyXG4gICAgUmlmbGUsIC8vIGZyb20gbWV0YWxzXHJcbiAgICBVbmlmb3JtLCAvLyBmcm9tIGZpYmVyc1xyXG4gICAgU2FiZXIsIC8vIGZyb20gbWV0YWxzICYgZ2VtczsgdGhpbmsgbGlnaHQgc2FiZXJcclxuICAgIEV4b3NrZWxldG9uLCAvLyBmcm9tIGNoZW1pY2FscyAmIGZpYmVyc1xyXG4gICAgKi9cclxufVxyXG5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xNzE5OFxyXG5jb25zdCBwcm9kdWN0S2V5cyA9IE9iamVjdFxyXG4gICAgLmtleXMoUHJvZHVjdClcclxuICAgIC5maWx0ZXIoKGspID0+IHR5cGVvZiBQcm9kdWN0W2sgYXMgYW55XSA9PT0gXCJudW1iZXJcIik7XHJcbmNvbnN0IHByb2R1Y3RWYWx1ZXMgPSBwcm9kdWN0S2V5c1xyXG4gICAgLm1hcCgoaykgPT4gTnVtYmVyKFByb2R1Y3RbayBhcyBhbnldKSBhcyBQcm9kdWN0KVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOVU1fUFJPRFVDVFMgPSBwcm9kdWN0S2V5cy5sZW5ndGg7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxsUHJvZHVjdHMoKSB7XHJcbiAgICByZXR1cm4gcHJvZHVjdFZhbHVlcy5zbGljZSgpO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSYXdNYXRlcmlhbCA9IFByb2R1Y3QuQ3JvcCB8IFByb2R1Y3QuTWV0YWwgfCBQcm9kdWN0LkdlbSB8IFByb2R1Y3QuRnVlbDtcclxuZXhwb3J0IGNvbnN0IFJBV19NQVRFUklBTFM6IFJhd01hdGVyaWFsW10gPSBbXHJcbiAgICBQcm9kdWN0LkNyb3AsXHJcbiAgICBQcm9kdWN0Lk1ldGFsLFxyXG4gICAgUHJvZHVjdC5HZW0sXHJcbiAgICBQcm9kdWN0LkZ1ZWwsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUkFXX01BVEVSSUFMU19TRVQgPSBuZXcgU2V0KFJBV19NQVRFUklBTFMpO1xyXG5cclxuZnVuY3Rpb24gZ2V0RGVtYW5kUHJvZHVjdHNIZWxwZXIocHJvZHVjdFR5cGU6IFByb2R1Y3QpIHtcclxuICAgIHN3aXRjaCAocHJvZHVjdFR5cGUpIHtcclxuICAgICAgICBjYXNlIFByb2R1Y3QuQ3JvcDpcclxuICAgICAgICBjYXNlIFByb2R1Y3QuTWV0YWw6XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0LkdlbTpcclxuICAgICAgICBjYXNlIFByb2R1Y3QuRnVlbDpcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5Gb29kOlxyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBTZXQoW1Byb2R1Y3QuQ3JvcF0pXTtcclxuICAgICAgICBjYXNlIFByb2R1Y3QuRHJpbms6XHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFNldChbUHJvZHVjdC5Dcm9wXSldO1xyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5BcHBhcmVsOlxyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBTZXQoW1Byb2R1Y3QuRmliZXJdKV07XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0Lk1lZGljaW5lOlxyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBTZXQoW1Byb2R1Y3QuQ2hlbWljYWxdKV07XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0LkZpYmVyOlxyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBTZXQoW1Byb2R1Y3QuQ3JvcF0pXTtcclxuICAgICAgICBjYXNlIFByb2R1Y3QuQ2hlbWljYWw6XHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFNldChbXHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0LkNyb3AsXHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0Lk1ldGFsLFxyXG4gICAgICAgICAgICAgICAgUHJvZHVjdC5HZW0sXHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0LkZ1ZWwsXHJcbiAgICAgICAgICAgIF0pXTtcclxuICAgICAgICBjYXNlIFByb2R1Y3QuQ2lyY3VpdDpcclxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgU2V0KFtQcm9kdWN0Lk1ldGFsXSldO1xyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5Db21wdXRlcjpcclxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgU2V0KFtQcm9kdWN0LkNpcmN1aXRdKV07XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0LkFjY2Vzc29yeTpcclxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgU2V0KFtQcm9kdWN0LkdlbV0pXTtcclxuICAgICAgICBjYXNlIFByb2R1Y3QuRnVybml0dXJlOlxyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBTZXQoW1Byb2R1Y3QuRmliZXJdKV07XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0LkdhZGdldDpcclxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgU2V0KFtQcm9kdWN0LkNvbXB1dGVyXSldO1xyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5WZWhpY2xlOlxyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBTZXQoW1Byb2R1Y3QuTWV0YWxdKV07XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0Lk1hY2hpbmU6XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBuZXcgU2V0KFtQcm9kdWN0Lk1ldGFsXSksXHJcbiAgICAgICAgICAgICAgICBuZXcgU2V0KFtQcm9kdWN0LkNvbXB1dGVyXSksXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0LlRvb2w6XHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFNldChbUHJvZHVjdC5NZXRhbF0pXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERFTUFORF9QUk9EVUNUUyA9IGFsbFByb2R1Y3RzKClcclxuICAgIC5tYXAoKHgpID0+IGdldERlbWFuZFByb2R1Y3RzSGVscGVyKHgpKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGTEFUX0RFTUFORF9QUk9EVUNUUyA9IERFTUFORF9QUk9EVUNUU1xyXG4gICAgLm1hcCgoeCkgPT4gSW1tdXRhYmxlLlNldDxQcm9kdWN0PigpLnVuaW9uKC4uLngpKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfUFJPRFVDVFMgPSBJbW11dGFibGVcclxuICAgIC5TZXQoYWxsUHJvZHVjdHMoKVxyXG4gICAgICAgIC5maWx0ZXIoKHByb2R1Y3QpID0+ICFSQVdfTUFURVJJQUxTX1NFVC5oYXMocHJvZHVjdCBhcyBSYXdNYXRlcmlhbCkgJiYgLy8gbm90IHJhdyBtYXRlcmlhbHNcclxuICAgICAgICAgICAgIUZMQVRfREVNQU5EX1BST0RVQ1RTW3Byb2R1Y3RdXHJcbiAgICAgICAgICAgICAgICAuc3VidHJhY3QoUkFXX01BVEVSSUFMU19TRVQpXHJcbiAgICAgICAgICAgICAgICAuaXNFbXB0eSgpKSk7IC8vIGFuZCByZXF1aXJlcyBub24gcmF3IG1hdGVyaWFscyB0byBwcm9kdWNlIChlLmcuIGZpYmVycyAtPiBhcHBhcmVscywgd2hlcmUgZmliZXIgbmVlZHMgY3JvcHMgdG8gcHJvZHVjZSBidXQgYXBwYXJlbHMgZG9uJ3QgbmVlZCBhbnkgcmF3IG1hdGVyaWFscylcclxuXHJcbmZ1bmN0aW9uIGdldE9wRGVtYW5kKHByb2R1Y3Q6IFByb2R1Y3QpOiBQcm9kdWN0IHtcclxuICAgIHN3aXRjaCAocHJvZHVjdCkge1xyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5Dcm9wOlxyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5NZXRhbDpcclxuICAgICAgICBjYXNlIFByb2R1Y3QuR2VtOlxyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5GdWVsOlxyXG4gICAgICAgICAgICByZXR1cm4gUHJvZHVjdC5Ub29sO1xyXG4gICAgICAgIGRlZmF1bHQ6IC8vIHBvc3QtcHJvY2Vzc2luZyBpbmR1c3RyaWVzXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9kdWN0Lk1hY2hpbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBPUF9QUk9EVUNUUzogUHJvZHVjdFtdID0gYWxsUHJvZHVjdHMoKVxyXG4gICAgLm1hcCgoeCkgPT4gZ2V0T3BEZW1hbmQoeCkpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWwvcHJvZHVjdC50cyIsImltcG9ydCAqIGFzIEFsZ28gZnJvbSBcIi4vYWxnb3JpdGhtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVW5pb25GaW5kPFQ+IHtcclxuXHJcbiAgICBwcml2YXRlIHRvSWQgPSBuZXcgTWFwPFQsIG51bWJlcj4oKTtcclxuICAgIHByaXZhdGUgcGFyZW50cyA9IG5ldyBNYXA8bnVtYmVyLCBbbnVtYmVyLCBudW1iZXJdPigpO1xyXG4gICAgcHJpdmF0ZSBpZCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2V0cz86IFNldDxUPikge1xyXG4gICAgICAgIGlmIChzZXRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGl0ZW06IFQpIHtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLnRvSWQuZ2V0KGl0ZW0pO1xyXG4gICAgICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCBpdGVtIHRvIGJlIGl0ZW0ncyBwYXJlbnRcclxuICAgICAgICBpZCA9ICsrdGhpcy5pZDtcclxuICAgICAgICB0aGlzLnRvSWQuc2V0KGl0ZW0sIGlkKTtcclxuICAgICAgICByZXR1cm4gQWxnby5nZXRPclNldChcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRzLFxyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgKCkgPT4gW2lkLCAwXSBhcyBbbnVtYmVyLCBudW1iZXJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5pb24obGVmdDogVCwgcmlnaHQ6IFQpIHtcclxuICAgICAgICBjb25zdCBbbFJvb3QsIGxSYW5rXSA9IHRoaXMuZmluZChsZWZ0KTtcclxuICAgICAgICBjb25zdCBbclJvb3QsIHJSYW5rXSA9IHRoaXMuZmluZChyaWdodCk7XHJcblxyXG4gICAgICAgIGlmIChsUm9vdCA9PT0gclJvb3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxSYW5rIDwgclJhbmspIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRzLnNldChsUm9vdCwgW3JSb290LCBsUmFua10pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobFJhbmsgPiByUmFuaykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudHMuc2V0KHJSb290LCBbbFJvb3QsIHJSYW5rXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRzLnNldChsUm9vdCwgW3JSb290LCByUmFuayArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzU2FtZVNldChsZWZ0OiBULCByaWdodDogVCkge1xyXG4gICAgICAgIGNvbnN0IFtsUGFyZW50XSA9IHRoaXMuZmluZChsZWZ0KTtcclxuICAgICAgICBjb25zdCBbclBhcmVudF0gPSB0aGlzLmZpbmQocmlnaHQpO1xyXG4gICAgICAgIHJldHVybiBsUGFyZW50ID09PSByUGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZChub2RlOiBUKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGg6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgbGV0IHByZXYgPSB0aGlzLnRvSWQuZ2V0KG5vZGUpITtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgW3BhcmVudCwgcmFua10gPSB0aGlzLnBhcmVudHMuZ2V0KHByZXYpITtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcmV2ID09PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHBhdGggY29tcHJlc3Npb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IFtwYXJlbnQsIHJhbmtdIGFzIFtudW1iZXIsIG51bWJlcl07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudHMuc2V0KGlkLCBbLi4ucmV0XSBhcyBbbnVtYmVyLCBudW1iZXJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbGxlY3QgYW5jZXN0b3JzIGZvciBmdXR1cmUgcGF0aCBjb21wcmVzc2lvblxyXG4gICAgICAgICAgICBwYXRoLnB1c2gocHJldik7XHJcbiAgICAgICAgICAgIHByZXYgPSBwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbGdvcml0aG0vdW5pb25maW5kLnRzIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0PFZhbFQ+KGRhdGE6IEl0ZXJhYmxlPFtWYWxULCBzdHJpbmddPiwgaWQ/OiBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJldCA9ICQoXCI8c2VsZWN0PlwiKVxyXG4gICAgICAgIC5hcHBlbmQoJChcIjxvcHRpb24gc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPlwiKSk7XHJcblxyXG4gICAgaWYgKGlkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXQuYXR0cihcImlkXCIsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0LmFwcGVuZCguLi5BcnJheVxyXG4gICAgICAgIC5mcm9tKGRhdGEpXHJcbiAgICAgICAgLm1hcCgoW3ZhbCwgdGV4dF0pID0+XHJcbiAgICAgICAgICAgICQoXCI8b3B0aW9uPlwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCB2YWwudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIC50ZXh0KHRleHQpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFNvcnRPcmRlciB7XHJcbiAgICBJbmNyZWFzaW5nLFxyXG4gICAgRGVjcmVhc2luZyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERyYXdUYWJsZTxUPiB7XHJcblxyXG4gICAgcHJpdmF0ZSB0YWJsZSA9ICQoXCI8dGFibGU+XCIpO1xyXG4gICAgcHJpdmF0ZSBsZXNzVGhhbjogKChhOiBULCBiOiBUKSA9PiBudW1iZXIpIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBzb3J0T3JkZXIgPSBTb3J0T3JkZXIuSW5jcmVhc2luZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNvbHVtbkhlYWRlcjogQXJyYXk8W3N0cmluZywgKChhOiBULCBiOiBUKSA9PiBudW1iZXIpIHwgdW5kZWZpbmVkXT4sXHJcbiAgICAgICAgcHJpdmF0ZSByZWZyZXNoOiAoKSA9PiB2b2lkLFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKGNvbHVtbkhlYWRlci5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRhYmxlIHNob3VsZCBoYXZlIGF0IGxlYXN0IDEgY29sdW1uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBbLCB0aGlzLmxlc3NUaGFuXSA9IGNvbHVtbkhlYWRlclswXTtcclxuXHJcbiAgICAgICAgdGhpcy50YWJsZVxyXG4gICAgICAgICAgICAuZW1wdHkoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCQoXCI8dHI+XCIpLmFwcGVuZCguLi50aGlzLmNvbHVtbkhlYWRlclxyXG4gICAgICAgICAgICAgICAgLm1hcCgoW25hbWUsIHNvcnRUYXJnZXRdKSA9PiAkKFwiPHRoPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXNzVGhhbiA9IHNvcnRUYXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydE9yZGVyID0gdGhpcy5zb3J0T3JkZXIgPT09IFNvcnRPcmRlci5JbmNyZWFzaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvcnRPcmRlci5EZWNyZWFzaW5nIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvcnRPcmRlci5JbmNyZWFzaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgJGdldFRhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoXHJcbiAgICAgICAgYWxsRGF0YTogVFtdLFxyXG4gICAgICAgIG1ha2VSb3dEYXRhOiAoZGF0YTogVCkgPT4gQXJyYXk8KG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW4pPixcclxuICAgICkge1xyXG4gICAgICAgIGlmICh0aGlzLmxlc3NUaGFuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbGVzc1RoYW4gPSB0aGlzLmxlc3NUaGFuO1xyXG4gICAgICAgICAgICBhbGxEYXRhXHJcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZCA9IGxlc3NUaGFuKGEsIGIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRPcmRlciA9PT0gU29ydE9yZGVyLkluY3JlYXNpbmcgPyBvcmQgOiAtMSAqIG9yZDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGV2ZXJ5dGhpbmcgZXhjZXB0IHRoZSBoZWFkZXJcclxuICAgICAgICB0aGlzLnRhYmxlLmNoaWxkcmVuKCkuc2xpY2UoMSkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlXHJcbiAgICAgICAgICAgIC5hcHBlbmQoLi4uYWxsRGF0YVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoZGF0YSkgPT4gJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKC4uLm1ha2VSb3dEYXRhKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNvbERhdGEpID0+ICQoXCI8dGQ+XCIpLmh0bWwoY29sRGF0YS50b1N0cmluZygpKSkpKSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2h0bWwudHMiLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxuLy8gZGlzYWJsZSByaWdodC1jbGljayBjb250ZXh0IG1lbnVcclxuZG9jdW1lbnQuYm9keS5vbmNvbnRleHRtZW51ID0gKCkgPT4gZmFsc2U7XHJcblxyXG5HYW1lXHJcbiAgICAudHJ5TG9hZCgpXHJcbiAgICAudGhlbigoZ2FtZSkgPT4ge1xyXG4gICAgICAgIGdhbWUuc3RhcnRSZW5kZXJpbmcoKTtcclxuICAgIH0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IERleGllO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiRGV4aWVcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBBbGdvIGZyb20gXCIuLi9hbGdvcml0aG0vYWxnb3JpdGhtXCI7XHJcbmltcG9ydCAqIGFzIE1vZGVsIGZyb20gXCIuL21vZGVsXCI7XHJcblxyXG5jb25zdCBQT1dFUl9QT1RFTlRJQUwgPSAyMDA7XHJcbmNvbnN0IFBSSUNFX0VYUF9MT1cgPSAwLjc7XHJcbmNvbnN0IFBSSUNFX0VYUF9ISUdIID0gMS4zO1xyXG5jb25zdCBEQVlTX0tFRVBfR09PRFMgPSAxMDsgLy8gbnVtYmVyIG9mIGRheXMgdG8ga2VlcCBjb25zdW1wdGlvblxyXG5jb25zdCBNSU5fUFJJQ0VfUEVSQ0VOVCA9IDAuNDsgLy8gcGVyY2VudCBvZiB0aGUgYmFzZSBwcmljZVxyXG5cclxuY29uc3QgQ09MT05ZX1VOSVRfREVNQU5EID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHJldCA9IG5ldyBBcnJheTxudW1iZXI+KE1vZGVsLk5VTV9QUk9EVUNUUykuZmlsbCgwKTtcclxuICAgIHJldFtNb2RlbC5Qcm9kdWN0LkZvb2RdID0gMTA7XHJcbiAgICByZXRbTW9kZWwuUHJvZHVjdC5Ecmlua10gPSAxMDtcclxuICAgIHJldFtNb2RlbC5Qcm9kdWN0LkFwcGFyZWxdID0gMTA7XHJcbiAgICByZXRbTW9kZWwuUHJvZHVjdC5NZWRpY2luZV0gPSAxMDtcclxuICAgIHJldFtNb2RlbC5Qcm9kdWN0LkFjY2Vzc29yeV0gPSA1O1xyXG4gICAgcmV0W01vZGVsLlByb2R1Y3QuRnVybml0dXJlXSA9IDU7XHJcbiAgICByZXRbTW9kZWwuUHJvZHVjdC5HYWRnZXRdID0gNTtcclxuICAgIHJldFtNb2RlbC5Qcm9kdWN0LlZlaGljbGVdID0gNTtcclxuICAgIHJldHVybiByZXQ7XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb255IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVzdGltYXRlUHJpY2UoZGVtYW5kOiBudW1iZXIsIHN1cHBseTogbnVtYmVyLCBlbGFzdGljaXR5OiBudW1iZXIsIGJhc2VQcmljZTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGVsYXN0aWNpdHkgPiAwKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJucyByYXRpbyBpbiBbMCwyXVxyXG4gICAgICAgIGNvbnN0IHJhdGlvID0gZGVtYW5kID09PSAwID9cclxuICAgICAgICAgICAgUFJJQ0VfRVhQX0xPVyA6IC8vIHRoaXMgbWFrZXMgMC1kZW1hbmQgZ29vZHMgJDFcclxuICAgICAgICAgICAgc3VwcGx5ID09PSAwID9cclxuICAgICAgICAgICAgICAgIFBSSUNFX0VYUF9ISUdIIDpcclxuICAgICAgICAgICAgICAgIE1hdGgubWluKFBSSUNFX0VYUF9ISUdILCBkZW1hbmQgLyBzdXBwbHkpO1xyXG5cclxuICAgICAgICAvLyBzY29yZSByYW5nZXMgaW4gKDAsTWF0aC5wb3coMixlbGFzdGljaXR5KV1cclxuICAgICAgICBjb25zdCBzY29yZSA9IE1hdGgucG93KHJhdGlvLCBlbGFzdGljaXR5KTtcclxuICAgICAgICBjb25zdCBwcmljZSA9IGJhc2VQcmljZSAqIHNjb3JlO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KE51bWJlci5pc0Zpbml0ZShwcmljZSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlbGFzdGljaXR5KHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QpIHtcclxuICAgICAgICBzd2l0Y2ggKHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkNyb3A6XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5NZXRhbDpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkdlbTpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkZ1ZWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkZvb2Q6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMS41OyAvLyB2ZXJ5IGVsYXN0aWNcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkRyaW5rOlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuQXBwYXJlbDpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0Lk1lZGljaW5lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5BY2Nlc3Nvcnk6XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5GdXJuaXR1cmU6XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5HYWRnZXQ6XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5WZWhpY2xlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDAuNDtcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkZpYmVyOiAvLyBpbnRlcm1lZGlhdGVcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkNoZW1pY2FsOlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuQ2lyY3VpdDpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkNvbXB1dGVyOlxyXG4gICAgICAgICAgICAvLyBjYXNlIE1vZGVsLlByb2R1Y3QuQ29uY3JldGU6IC8vIG9wZXJhdGlvbmFsXHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5NYWNoaW5lOlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuVG9vbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYmFzZVByaWNlKHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QpIHtcclxuICAgICAgICBzd2l0Y2ggKHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkNyb3A6IC8vIHJhdyBtYXRlcmlhbHNcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0Lk1ldGFsOlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuR2VtOlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuRnVlbDpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkZpYmVyOiAvLyBpbnRlcm1lZGlhdGVcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkNoZW1pY2FsOlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuQ2lyY3VpdDpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkNvbXB1dGVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5NYWNoaW5lOiAvLyBvcGVyYXRpb25hbFxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuVG9vbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuQWNjZXNzb3J5OiAvLyBsdXh1cnlcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkZ1cm5pdHVyZTpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkdhZGdldDpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LlZlaGljbGU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkZvb2Q6IC8vIGJhc2ljXHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5EcmluazpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkFwcGFyZWw6XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5NZWRpY2luZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkZXJpdmVkRGVtYW5kcyA9IG5ldyBBcnJheTxNb2RlbC5Qcm9kdWN0PihNb2RlbC5OVU1fUFJPRFVDVFMpLmZpbGwoMCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBob21lUGxhbmV0OiBNb2RlbC5QbGFuZXQsXHJcbiAgICAgICAgcHJpdmF0ZSBwb3B1bGF0aW9uOiBudW1iZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBwbGF5ZXJJbnZlbnRvcnk6IE1vZGVsLkludmVudG9yeSxcclxuICAgICAgICBwcml2YXRlIG1hcmtldEludmVudG9yeTogTW9kZWwuSW52ZW50b3J5LFxyXG4gICAgICAgIHByaXZhdGUgbWF4UG9wdWxhdGlvbiA9IDEwMCxcclxuICAgICAgICBwcml2YXRlIGlzTG9ja1BvcHVsYXRpb24gPSBmYWxzZSxcclxuICAgICAgICBwcml2YXRlIHBvd2VyUGxhbmV0TGV2ZWwgPSAwLFxyXG4gICAgICAgIHByaXZhdGUgcG93ZXJPdXRwdXRFZmYgPSAwLFxyXG4gICAgICAgIHByaXZhdGUgZm9vZEhhcHBpbmVzcyA9IDAsXHJcbiAgICAgICAgcHJpdmF0ZSBsdXh1cnlIYXBwaW5lc3MgPSAwLFxyXG4gICAgICAgIHByaXZhdGUgY29tbW9uSGFwcGluZXNzID0gMCxcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBNb2RlbC5JQ29sb255IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgaG9tZVBsYW5ldElkOiB0aGlzLmhvbWVQbGFuZXQuaWQsXHJcbiAgICAgICAgICAgIHBvcHVsYXRpb246IHRoaXMucG9wdWxhdGlvbixcclxuICAgICAgICAgICAgcGxheWVySW52ZW50b3J5SWQ6IHRoaXMucGxheWVySW52ZW50b3J5LmlkLFxyXG4gICAgICAgICAgICBtYXJrZXRJbnZlbnRvcnlJZDogdGhpcy5tYXJrZXRJbnZlbnRvcnkuaWQsXHJcbiAgICAgICAgICAgIG1heFBvcHVsYXRpb246IHRoaXMubWF4UG9wdWxhdGlvbixcclxuICAgICAgICAgICAgaXNMb2NrUG9wdWxhdGlvbjogdGhpcy5pc0xvY2tQb3B1bGF0aW9uLFxyXG4gICAgICAgICAgICBwb3dlclBsYW5ldExldmVsOiB0aGlzLnBvd2VyUGxhbmV0TGV2ZWwsXHJcbiAgICAgICAgICAgIHBvd2VyT3V0cHV0RWZmOiB0aGlzLnBvd2VyT3V0cHV0RWZmLFxyXG4gICAgICAgICAgICBmb29kSGFwcGluZXNzOiB0aGlzLmZvb2RIYXBwaW5lc3MsXHJcbiAgICAgICAgICAgIGx1eHVyeUhhcHBpbmVzczogdGhpcy5sdXh1cnlIYXBwaW5lc3MsXHJcbiAgICAgICAgICAgIGNvbW1vbkhhcHBpbmVzczogdGhpcy5jb21tb25IYXBwaW5lc3MsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SG9tZVBsYW5ldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ob21lUGxhbmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQbGF5ZXJJbnZlbnRvcnkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVySW52ZW50b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYXJrZXRJbnZlbnRvcnkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFya2V0SW52ZW50b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQb3B1bGF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvcHVsYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1heFBvcCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMubWF4UG9wdWxhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdyb3d0aFJhdGUoZ2FsYXh5OiBNb2RlbC5HYWxheHkpIHtcclxuICAgICAgICBjb25zdCBiYXNlR3Jvd3RoID0gMC4xO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mb29kSGFwcGluZXNzIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb29kSGFwcGluZXNzIC0gMTsgLy8gc3RhcnZlIHRvIGRlYXRoXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb21tb24gPSAxICsgdGhpcy5jb21tb25IYXBwaW5lc3M7XHJcblxyXG4gICAgICAgIC8vIGx1eHVhcnkgYm9udXMgb25seSBhcHBsaWVzIHdoZW4gY29tbW9uIGdvb2RzIGRlbWFuZHMgYXJlIGZ1bGxmaWxsZWRcclxuICAgICAgICBjb25zdCBsdXh1cnkgPSBjb21tb24gPT09IDEgPyAxICsgdGhpcy5sdXh1cnlIYXBwaW5lc3MgOiAxO1xyXG5cclxuICAgICAgICBjb25zdCBlbmVyZ3lVc2FnZSA9IDEgKyB0aGlzLmdldFBvd2VyVXNhZ2VFZmYoZ2FsYXh5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVuZXJneVVzYWdlICogY29tbW9uICogbHV4dXJ5ICogYmFzZUdyb3d0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VHJhZGVyUG93ZXJVc2FnZShnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG4gICAgICAgIGxldCBudW1UcmFkZXJzID0gMDtcclxuICAgICAgICBjb25zdCB0b3MgPSBnYWxheHkuZ2V0VHJhZGVSb3V0ZXMoKS5nZXQodGhpcyk7XHJcblxyXG4gICAgICAgIGlmICh0b3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRvIG9mIHRvcykge1xyXG4gICAgICAgICAgICAgICAgbnVtVHJhZGVycyArPSBnYWxheHkuZ2V0TnVtVXNlZFRyYWRlcnModGhpcywgdG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVtVHJhZGVycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5kdXN0cmlhbFBvd2VyVXNhZ2UoZ2FsYXh5OiBNb2RlbC5HYWxheHkpIHtcclxuICAgICAgICByZXR1cm4gQWxnby5zdW0oLi4uSW1tdXRhYmxlXHJcbiAgICAgICAgICAgIC5TZXEoZ2FsYXh5LmdldEluZHVzdHJpZXModGhpcykpXHJcbiAgICAgICAgICAgIC5tYXAoKGluZHVzdHJ5KSA9PiBpbmR1c3RyeS5nZXRQb3dlclVzYWdlKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2l2aWxpYW5Qb3dlclVzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMucG9wdWxhdGlvbiAqIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VG90YWxQb3dlclVzYWdlKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcbiAgICAgICAgY29uc3QgaW5kVXNhZ2UgPSB0aGlzLmdldEluZHVzdHJpYWxQb3dlclVzYWdlKGdhbGF4eSk7XHJcbiAgICAgICAgY29uc3QgdHJhZGVyVXNhZ2UgPSB0aGlzLmdldFRyYWRlclBvd2VyVXNhZ2UoZ2FsYXh5KTtcclxuICAgICAgICBjb25zdCBjaXZVc2FnZSA9IHRoaXMuZ2V0Q2l2aWxpYW5Qb3dlclVzYWdlKCk7XHJcbiAgICAgICAgcmV0dXJuIGluZFVzYWdlICsgdHJhZGVyVXNhZ2UgKyBjaXZVc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UG93ZXJVc2FnZUVmZihnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG4gICAgICAgIGNvbnN0IHVzYWdlID0gdGhpcy5nZXRUb3RhbFBvd2VyVXNhZ2UoZ2FsYXh5KTtcclxuICAgICAgICBjb25zdCBvdXRwdXQgPSB0aGlzLmdldFBvd2VyT3V0cHV0KCk7XHJcbiAgICAgICAgaWYgKHVzYWdlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQgPiAwID8gMCA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLm1pbigxLCBvdXRwdXQgLyB1c2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBvd2VyT3V0cHV0RWZmKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvd2VyT3V0cHV0RWZmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQb3dlck91dHB1dCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmdldE1heFBvd2VyUG90ZW50aWFsKCkgKiB0aGlzLmdldFBvd2VyT3V0cHV0RWZmKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFbmVyZ3lQcmljZShnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG4gICAgICAgIGNvbnN0IGRlbWFuZCA9IHRoaXMuZ2V0VG90YWxQb3dlclVzYWdlKGdhbGF4eSk7XHJcbiAgICAgICAgY29uc3Qgc3VwcGx5ID0gdGhpcy5nZXRQb3dlck91dHB1dCgpO1xyXG4gICAgICAgIHJldHVybiBDb2xvbnkuZXN0aW1hdGVQcmljZShkZW1hbmQsIHN1cHBseSwgMSwgQ29sb255LmJhc2VQcmljZShNb2RlbC5Qcm9kdWN0LkZ1ZWwpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWF4UG93ZXJQb3RlbnRpYWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG93ZXJQbGFuZXRMZXZlbCAqIFBPV0VSX1BPVEVOVElBTCArIDUwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGdWVsRGVtYW5kKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1heFBvd2VyUG90ZW50aWFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBvd2VyUGxhbmV0TGV2ZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG93ZXJQbGFuZXRMZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2l0aXplbkRlbWFuZChwcm9kdWN0OiBNb2RlbC5Qcm9kdWN0KSB7XHJcbiAgICAgICAgc3dpdGNoIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5GdWVsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnVlbERlbWFuZCgpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc3QgdW5pdERlbWFuZCA9IENPTE9OWV9VTklUX0RFTUFORFtwcm9kdWN0XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHVuaXREZW1hbmQgKiB0aGlzLmdldFBvcHVsYXRpb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1Byb2R1Y2luZyhnYWxheHk6IE1vZGVsLkdhbGF4eSwgcHJvZHVjdDogTW9kZWwuUHJvZHVjdCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgaW5kdXN0cnkgb2YgZ2FsYXh5LmdldEluZHVzdHJpZXModGhpcykpIHtcclxuICAgICAgICAgICAgaWYgKGluZHVzdHJ5LnByb2R1Y3RUeXBlID09PSBwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhc0RlbWFuZChwcm9kdWN0OiBNb2RlbC5Qcm9kdWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVtYW5kKHByb2R1Y3QpID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGVtYW5kKHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QpIHtcclxuICAgICAgICBjb25zdCBiYXNlID0gdGhpcy5nZXRDaXRpemVuRGVtYW5kKHByb2R1Y3QpO1xyXG4gICAgICAgIGNvbnN0IGRlcml2ZWQgPSB0aGlzLmRlcml2ZWREZW1hbmRzW3Byb2R1Y3RdO1xyXG4gICAgICAgIHJldHVybiBiYXNlICsgZGVyaXZlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3VwcGx5KHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXJrZXRJbnZlbnRvcnkuZ2V0UXR5KHByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWNhbGN1bGF0ZShnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG4gICAgICAgIHRoaXMuY29uc3VtZSgpO1xyXG4gICAgICAgIHRoaXMuZ3Jvd3RoKGdhbGF4eSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FsRGVyaXZlZERlbWFuZChnYWxheHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxEZXJpdmVkRGVtYW5kKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcbiAgICAgICAgdGhpcy5kZXJpdmVkRGVtYW5kcy5maWxsKDApO1xyXG4gICAgICAgIGZvciAoY29uc3QgaW5kdXN0cnkgb2YgZ2FsYXh5LmdldEluZHVzdHJpZXModGhpcykpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZENhcCA9IGluZHVzdHJ5LnByb2RDYXAoZ2FsYXh5KTtcclxuICAgICAgICAgICAgSW1tdXRhYmxlXHJcbiAgICAgICAgICAgICAgICAuU2VxKE1vZGVsLkluZHVzdHJ5LmdldERlbWFuZFByb2R1Y3RzKGluZHVzdHJ5LnByb2R1Y3RUeXBlKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWVkZWRLaW5kczogeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXR5OiBwcm9kQ2FwLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdChpbmR1c3RyeS5nZXRPcERlbWFuZCgpKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGRlbWFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBkZW1hbmQubmVlZGVkS2luZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXJpdmVkRGVtYW5kc1twcm9kdWN0XSArPSBkZW1hbmQucXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuRXhwYW5kUG93ZXJQbGFudChnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG4gICAgICAgIHJldHVybiAyICogdGhpcy5nZXRUb3RhbFBvd2VyVXNhZ2UoZ2FsYXh5KSA+IHRoaXMuZ2V0TWF4UG93ZXJQb3RlbnRpYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhwYW5kUG93ZXJQbGFuZXQoZ2FsYXh5OiBNb2RlbC5HYWxheHkpIHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0aGlzLmNhbkV4cGFuZFBvd2VyUGxhbnQoZ2FsYXh5KSk7XHJcbiAgICAgICAgdGhpcy5wb3dlclBsYW5ldExldmVsICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFByb2RDYXAoZ2FsYXh5OiBNb2RlbC5HYWxheHksIHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QpIHtcclxuICAgICAgICByZXR1cm4gQWxnby5zdW0oLi4uSW1tdXRhYmxlXHJcbiAgICAgICAgICAgIC5TZXEoZ2FsYXh5LmdldEluZHVzdHJpZXModGhpcykpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGluZHVzdHJ5KSA9PiBpbmR1c3RyeS5wcm9kdWN0VHlwZSA9PT0gcHJvZHVjdClcclxuICAgICAgICAgICAgLm1hcCgoaW5kdXN0cnkpID0+IGluZHVzdHJ5LnByb2RDYXAoZ2FsYXh5KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFkZShnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG5cclxuICAgICAgICBjb25zdCBwbGF5ZXJJbnZlbnRvcnkgPSB0aGlzLnBsYXllckludmVudG9yeTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIE1vZGVsLmFsbFByb2R1Y3RzKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgcXR5ID0gcGxheWVySW52ZW50b3J5LmdldFF0eShwcm9kdWN0KTtcclxuICAgICAgICAgICAgY29uc3QgZGVtYW5kID0gcGxheWVySW52ZW50b3J5LmdldERlbWFuZChnYWxheHksIHByb2R1Y3QpO1xyXG4gICAgICAgICAgICBpZiAocXR5ID4gZGVtYW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdXJwbHVzID0gcXR5IC0gZGVtYW5kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cnlCdXkoZ2FsYXh5LCBwbGF5ZXJJbnZlbnRvcnksIHByb2R1Y3QsIHN1cnBsdXMsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF0eSA8IGRlbWFuZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVmaWNpdCA9IGRlbWFuZCAtIHF0eTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5U2VsbChnYWxheHksIHBsYXllckludmVudG9yeSwgcHJvZHVjdCwgZGVmaWNpdCwgSW5maW5pdHksIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2NrUG9wdWxhdGlvbihpc0xvY2s/OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGlzTG9jayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2NrUG9wdWxhdGlvbiA9IGlzTG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNMb2NrUG9wdWxhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UHJpY2UocHJvZHVjdDogTW9kZWwuUHJvZHVjdCkge1xyXG4gICAgICAgIGNvbnN0IHN1cHBseSA9IHRoaXMubWFya2V0SW52ZW50b3J5LmdldFF0eShwcm9kdWN0KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFsUHJpY2UocHJvZHVjdCwgc3VwcGx5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVhbFByaWNlKHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QsIHN1cHBseTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGVtYW5kID0gdGhpcy5nZXREZW1hbmQocHJvZHVjdCk7IC8vIGdhbGF4eS5nZXRHYWxhY3RpY0RlbWFuZHMocHJvZHVjdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhc2VQcmljZSA9IENvbG9ueS5iYXNlUHJpY2UocHJvZHVjdCk7XHJcbiAgICAgICAgY29uc3QgZWxhc3RpY2l0eSA9IENvbG9ueS5lbGFzdGljaXR5KHByb2R1Y3QpO1xyXG4gICAgICAgIGNvbnN0IGVzdCA9IENvbG9ueS5lc3RpbWF0ZVByaWNlKFxyXG4gICAgICAgICAgICBkZW1hbmQsXHJcbiAgICAgICAgICAgIHN1cHBseSxcclxuICAgICAgICAgICAgZWxhc3RpY2l0eSxcclxuICAgICAgICAgICAgYmFzZVByaWNlKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChlc3QgPj0gMCk7XHJcbiAgICAgICAgY29uc3QgbWluUHJpY2UgPSBNSU5fUFJJQ0VbcHJvZHVjdF07XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoTnVtYmVyLmlzRmluaXRlKG1pblByaWNlKSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KG1pblByaWNlLCBlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cnlCdXkoXHJcbiAgICAgICAgZ2FsYXh5OiBNb2RlbC5HYWxheHksXHJcbiAgICAgICAgZnJvbUludmVudG9yeTogTW9kZWwuSW52ZW50b3J5LFxyXG4gICAgICAgIHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QsXHJcbiAgICAgICAgbWF4UXR5OiBudW1iZXIsXHJcbiAgICAgICAgbWluUHJpY2U6IG51bWJlcixcclxuICAgICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmFzc2VydChtYXhRdHkgPj0gMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmtldEludmVudG9yeSA9IHRoaXMubWFya2V0SW52ZW50b3J5O1xyXG4gICAgICAgIGNvbnN0IG1hcmtldFF0eSA9IG1hcmtldEludmVudG9yeS5nZXRRdHkocHJvZHVjdCk7XHJcblxyXG4gICAgICAgIGxldCBib3VnaHQgPSAwO1xyXG4gICAgICAgIGxldCBjb3N0ID0gMDtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdNYXJrZXRRdHkgPSBtYXJrZXRRdHkgKyBib3VnaHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gdGhpcy5yZWFsUHJpY2UocHJvZHVjdCwgbmV3TWFya2V0UXR5KTtcclxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQocHJpY2UgPiAwKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbWF4UXR5ID09PSBib3VnaHQgfHxcclxuICAgICAgICAgICAgICAgIHByaWNlIDwgbWluUHJpY2VcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICArK2JvdWdodDtcclxuICAgICAgICAgICAgY29zdCArPSBwcmljZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvdWdodCA+IDApIHtcclxuICAgICAgICAgICAgZnJvbUludmVudG9yeS50YWtlR29vZHMocHJvZHVjdCwgYm91Z2h0KTtcclxuICAgICAgICAgICAgbWFya2V0SW52ZW50b3J5LnB1dEdvb2RzKHByb2R1Y3QsIGJvdWdodCk7XHJcbiAgICAgICAgICAgIGdhbGF4eS5kZXBvc2l0KGNvc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYm91Z2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cnlTZWxsKFxyXG4gICAgICAgIGdhbGF4eTogTW9kZWwuR2FsYXh5LFxyXG4gICAgICAgIHRvSW52ZW50b3J5OiBNb2RlbC5JbnZlbnRvcnksXHJcbiAgICAgICAgcHJvZHVjdDogTW9kZWwuUHJvZHVjdCxcclxuICAgICAgICBtYXhRdHk6IG51bWJlcixcclxuICAgICAgICBtYXhQcmljZTogbnVtYmVyLFxyXG4gICAgICAgIGlzSW50ZXJuYWxCdXllcjogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KG1heFF0eSA+PSAwKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFya2V0SW52ZW50b3J5ID0gdGhpcy5tYXJrZXRJbnZlbnRvcnk7XHJcbiAgICAgICAgY29uc3QgbWFya2V0UXR5ID0gbWFya2V0SW52ZW50b3J5LmdldFF0eShwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgY29uc3QgbWluU3RvY2tRdHkgPSB0aGlzLm1pblN0b2NrUXR5KGdhbGF4eSwgcHJvZHVjdCk7XHJcblxyXG4gICAgICAgIGxldCBjb3N0ID0gMDtcclxuICAgICAgICBsZXQgc29sZCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3TWFya2V0UXR5ID0gbWFya2V0UXR5IC0gc29sZDtcclxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQobmV3TWFya2V0UXR5ID49IDApO1xyXG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IHRoaXMucmVhbFByaWNlKHByb2R1Y3QsIG5ld01hcmtldFF0eSk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIG1heFF0eSA9PT0gc29sZCB8fFxyXG4gICAgICAgICAgICAgICAgcHJpY2UgPiBtYXhQcmljZSB8fFxyXG4gICAgICAgICAgICAgICAgbmV3TWFya2V0UXR5ID09PSAwIHx8XHJcbiAgICAgICAgICAgICAgICAhdG9JbnZlbnRvcnkuaGFzU3BhY2VGb3Ioc29sZCkgfHxcclxuICAgICAgICAgICAgICAgICghaXNJbnRlcm5hbEJ1eWVyICYmIG5ld01hcmtldFF0eSA8PSBtaW5TdG9ja1F0eSkgLy8gY2Fubm90IHNlbGwgYmVsb3cgdGhlIFwic2FmZXR5IGxpbmVcIiB0byB0cmFkZXJzXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKytzb2xkO1xyXG4gICAgICAgICAgICBjb3N0ICs9IHByaWNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc29sZCA+IDApIHtcclxuICAgICAgICAgICAgbWFya2V0SW52ZW50b3J5LnRha2VHb29kcyhwcm9kdWN0LCBzb2xkKTtcclxuICAgICAgICAgICAgdG9JbnZlbnRvcnkucHV0R29vZHMocHJvZHVjdCwgc29sZCk7XHJcbiAgICAgICAgICAgIGdhbGF4eS53aXRoZHJhdyhjb3N0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERlZmljaXQoZ2FsYXh5OiBNb2RlbC5HYWxheHksIHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QpIHtcclxuICAgICAgICBjb25zdCBtYXJrZXQgPSB0aGlzLm1hcmtldEludmVudG9yeTtcclxuICAgICAgICBjb25zdCBxdHkgPSBtYXJrZXQuZ2V0UXR5KHByb2R1Y3QpO1xyXG4gICAgICAgIGNvbnN0IGtlZXAgPSB0aGlzLm1pblN0b2NrUXR5KGdhbGF4eSwgcHJvZHVjdCk7XHJcbiAgICAgICAgcmV0dXJuIHF0eSA8IGtlZXAgPyBrZWVwIC0gcXR5IDogMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1pblN0b2NrUXR5KGdhbGF4eTogTW9kZWwuR2FsYXh5LCBwcm9kdWN0OiBNb2RlbC5Qcm9kdWN0KSB7XHJcbiAgICAgICAgY29uc3QgYmFzZURlbWFuZCA9IHRoaXMuZ2V0RGVtYW5kKHByb2R1Y3QpO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgY29sb255IGlzIHByb2R1Y2luZyB0aGUgdGFyZ2V0IGdvb2RzLCB0aGVuIGtlZXAgb25seSAxIGRheSB3b3J0aCBvZiBnb29kcyBmb3IgbG9jYWwgY29uc3VtcHRpb25cclxuICAgICAgICBpZiAodGhpcy5pc1Byb2R1Y2luZyhnYWxheHksIHByb2R1Y3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiYXNlRGVtYW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gREFZU19LRUVQX0dPT0RTICogYmFzZURlbWFuZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdyb3d0aChnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG4gICAgICAgIGNvbnN0IHJhdGUgPSB0aGlzLmdyb3d0aFJhdGUoZ2FsYXh5KSAvIE1vZGVsLllFQVJfUEVSX1RJQ0s7XHJcbiAgICAgICAgY29uc3QgbmV4dCA9IE1hdGgubWF4KDEsIHRoaXMucG9wdWxhdGlvbiAqICgxICsgcmF0ZSkpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXhQb3AgPSB0aGlzLmlzTG9ja1BvcHVsYXRpb24gPyB0aGlzLnBvcHVsYXRpb24gOiB0aGlzLmdldE1heFBvcCgpO1xyXG4gICAgICAgIGNvbnN0IGRpZmYgPSBuZXh0IC0gbWF4UG9wO1xyXG5cclxuICAgICAgICBpZiAoZGlmZiA+IDApIHsgLy8gaWYgcG9wdWxhdGlvbiBncm93dGggaXMgcG9zaXRpdmUgJiBpcyBncm93aW5nIGJleW9uZCBjYXBcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uID0gbWF4UG9wO1xyXG4gICAgICAgICAgICBnYWxheHkuYWRkQ29sb25pc3RzKGRpZmYpOyAvLyBleGNlc3MgcG9wdWxhdGlvbiBiZWNvbWVzIGNvbG9uaXN0c1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbiA9IE1hdGgubWluKG5leHQsIG1heFBvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3VtZSgpIHtcclxuICAgICAgICBjb25zdCBpbnZlbnRvcnkgPSB0aGlzLm1hcmtldEludmVudG9yeTtcclxuXHJcbiAgICAgICAgY29uc3QgY29uc3VtZTEgPSAocHJvZHVjdDogTW9kZWwuUHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBxdHkgPSBpbnZlbnRvcnkuZ2V0UXR5KHByb2R1Y3QpO1xyXG4gICAgICAgICAgICBjb25zdCBkZW1hbmQgPSBNYXRoLmZsb29yKHRoaXMuZ2V0Q2l0aXplbkRlbWFuZChwcm9kdWN0KSk7XHJcbiAgICAgICAgICAgIGlmIChkZW1hbmQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN1bWVkID0gcXR5ID49IGRlbWFuZCA/IGRlbWFuZCA6IHF0eTtcclxuICAgICAgICAgICAgaW52ZW50b3J5LnRha2VHb29kcyhwcm9kdWN0LCBjb25zdW1lZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29uc3VtZWQgLyBkZW1hbmQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxsQ29uc3VtcHRpb24gPSBNb2RlbFxyXG4gICAgICAgICAgICAuYWxsUHJvZHVjdHMoKVxyXG4gICAgICAgICAgICAubWFwKChwcm9kdWN0KSA9PiBjb25zdW1lMShwcm9kdWN0KSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tbW9uSGFwcGluZXNzID0gQWxnby5hdmVyYWdlKFxyXG4gICAgICAgICAgICBhbGxDb25zdW1wdGlvbltNb2RlbC5Qcm9kdWN0LkRyaW5rXSxcclxuICAgICAgICAgICAgYWxsQ29uc3VtcHRpb25bTW9kZWwuUHJvZHVjdC5BcHBhcmVsXSxcclxuICAgICAgICAgICAgYWxsQ29uc3VtcHRpb25bTW9kZWwuUHJvZHVjdC5NZWRpY2luZV0sXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5sdXh1cnlIYXBwaW5lc3MgPSBBbGdvLmF2ZXJhZ2UoXHJcbiAgICAgICAgICAgIGFsbENvbnN1bXB0aW9uW01vZGVsLlByb2R1Y3QuQWNjZXNzb3J5XSxcclxuICAgICAgICAgICAgYWxsQ29uc3VtcHRpb25bTW9kZWwuUHJvZHVjdC5GdXJuaXR1cmVdLFxyXG4gICAgICAgICAgICBhbGxDb25zdW1wdGlvbltNb2RlbC5Qcm9kdWN0LkdhZGdldF0sXHJcbiAgICAgICAgICAgIGFsbENvbnN1bXB0aW9uW01vZGVsLlByb2R1Y3QuVmVoaWNsZV0sXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb29kSGFwcGluZXNzID0gYWxsQ29uc3VtcHRpb25bTW9kZWwuUHJvZHVjdC5Gb29kXTtcclxuXHJcbiAgICAgICAgY29uc3QgZkVmZiA9IGFsbENvbnN1bXB0aW9uW01vZGVsLlByb2R1Y3QuRnVlbF07XHJcbiAgICAgICAgdGhpcy5wb3dlck91dHB1dEVmZiA9IGZFZmYgKiBmRWZmOyAvLyBmRWZmIHNxdWFyZWRcclxuICAgIH1cclxufVxyXG5cclxuLy8gbmVlZHMgdG8gYmUgcGxhY2VkIGFmdGVyIENvbG9ueSBmb3Igd2VicGFjaydlZCBidW5kbGUgdG8gd29ya1xyXG5jb25zdCBNSU5fUFJJQ0UgPSBNb2RlbFxyXG4gICAgLmFsbFByb2R1Y3RzKClcclxuICAgIC5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICBjb25zdCBiYXNlUHJpY2UgPSBDb2xvbnkuYmFzZVByaWNlKHByb2R1Y3QpO1xyXG4gICAgICAgIGNvbnN0IGVsYXN0aWNpdHkgPSBDb2xvbnkuZWxhc3RpY2l0eShwcm9kdWN0KTtcclxuICAgICAgICByZXR1cm4gTWF0aC5wb3coTUlOX1BSSUNFX1BFUkNFTlQgKiBiYXNlUHJpY2UsIGVsYXN0aWNpdHkpO1xyXG4gICAgfSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbC9jb2xvbnkudHMiLCJpbXBvcnQgKiBhcyBBbGdvIGZyb20gXCIuL2FsZ29yaXRobVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1pbkhlYXA8VD4ge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaGVhcGlmeTxUPihcclxuICAgICAgICBhcnI6IFRbXSxcclxuICAgICAgICBsZXNzVGhhbjogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4sXHJcbiAgICApIHtcclxuICAgICAgICAvLyB3YWxraW5nIHVwIHRoZSBoZWFwIGJ5IGdvaW5nIGJhY2t3YXJkXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IE1hdGguZmxvb3IoKGFyci5sZW5ndGggLSAxKSAvIDIpOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBidWJibGVEb3duKGFyciwgaSwgYXJyLmxlbmd0aCwgbGVzc1RoYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV3JhcHMgYSBoZWFwaWZpZWQgYXJyYXkgaW50byBhIE1pbkhlYXAgd2l0aG91dCBhbnkgY2hlY2tpbmcgd2hhdHNvZXZlci5cclxuICAgICAqIEBwYXJhbSBhcnIgYW4gaGVhcGlmaWVkIGFycmF5IHNsaWNlLCBwcmVzdW1hYmx5IGdlbmVyYXRlZCBmcm9tIE1pbkhlYXAuc2xpY2UoKVxyXG4gICAgICogQHBhcmFtIGxlc3NUaGFuIHRoZSBjb21wYXJhdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdW5zYWZlV3JhcDxUPihhcnI6IFRbXSwgbGVzc1RoYW4gPSAoYTogVCwgYjogVCkgPT4gYSA8IGIpIHtcclxuICAgICAgICBjb25zdCByZXQgPSBuZXcgTWluSGVhcDxUPihbXSwgbGVzc1RoYW4pO1xyXG4gICAgICAgIHJldC5hcnIgPSBhcnI7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFycjogVFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGl0PzogSXRlcmFibGU8VD4sXHJcbiAgICAgICAgcHJpdmF0ZSBsZXNzVGhhbiA9IChhOiBULCBiOiBUKSA9PiBhIDwgYixcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuYXJyID0gaXQgPyBBcnJheS5mcm9tKGl0KSA6IFtdO1xyXG4gICAgICAgIE1pbkhlYXAuaGVhcGlmeSh0aGlzLmFyciwgbGVzc1RoYW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyci5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvcCgpIHtcclxuICAgICAgICBjb25zdCByZXQgPSBwb3AodGhpcy5hcnIsIHRoaXMuYXJyLmxlbmd0aCwgdGhpcy5sZXNzVGhhbik7IC8vIHN3YXBzIHRoZSBoZWFkIHRvIHRoZSBlbmRcclxuICAgICAgICBjb25zdCBwb3BlZCA9IHRoaXMuYXJyLnBvcCgpO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHJldCA9PT0gcG9wZWQpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBlZWsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0YWtlKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKG51bSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IHRha2UgbmVnYXRpdmUgaXRlbXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWluKHRoaXMuYXJyLmxlbmd0aCwgbnVtKTtcclxuICAgICAgICBjb25zdCByZXQgPSBuZXcgQXJyYXk8VD4obWF4KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJldFtpXSA9IHRoaXMucG9wKCkhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVSb290KG5ld1ZhbHVlOiBUKSB7XHJcbiAgICAgICAgdGhpcy5hcnJbMF0gPSBuZXdWYWx1ZTtcclxuICAgICAgICBidWJibGVEb3duKHRoaXMuYXJyLCAwLCB0aGlzLmFyci5sZW5ndGgsIHRoaXMubGVzc1RoYW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzbGljZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnIuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYSBzb3J0ZWQgaXRlcmFibGUgb3JkZXJlZCBieSB0aGUgbGVhc3QgcHJpb3JpdHkgKGkuZS4gaGlnaC10by1sb3cpXHJcbiAgICAvLyB0aGlzIGlzICp0aGUqIGluLXBsYWNlIHZlcnNpb25cclxuICAgIHB1YmxpYyByZXZlcnNlU29ydCgpIHtcclxuICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmFycjtcclxuICAgICAgICB0aGlzLmFyciA9IFtdOyAvLyBjbGVhcnMgdGhlIGFycmF5IGluIGNhc2UgZm9yIHJldXNpbmcgdGhpcyBoZWFwXHJcbiAgICAgICAgZm9yIChsZXQgbGVuID0gYXJyLmxlbmd0aDsgbGVuID4gMDsgbGVuLS0pIHtcclxuICAgICAgICAgICAgcG9wKGFyciwgbGVuLCB0aGlzLmxlc3NUaGFuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYSBzb3J0ZWQgaXRlcmFibGUgb3JkZXJlZCBieSB0aGUgbW9zdCBwcmlvcml0eSAoaS5lLiBsb3ctdG8taGlnaClcclxuICAgIHB1YmxpYyAqc29ydCgpIHtcclxuICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmFycjtcclxuICAgICAgICB0aGlzLmFyciA9IFtdOyAvLyBjbGVhcnMgdGhlIGFycmF5IGluIGNhc2UgZm9yIHJldXNpbmcgdGhpcyBoZWFwXHJcbiAgICAgICAgbGV0IHZhbCA9IHBvcChhcnIsIGFyci5sZW5ndGgsIHRoaXMubGVzc1RoYW4pO1xyXG4gICAgICAgIHdoaWxlICh2YWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB5aWVsZCBhcnIucG9wKCkhO1xyXG4gICAgICAgICAgICB2YWwgPSBwb3AoYXJyLCBhcnIubGVuZ3RoLCB0aGlzLmxlc3NUaGFuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljICpzb3J0U2xpY2UoKSB7XHJcbiAgICAgICAgY29uc3QgYXJyID0gdGhpcy5hcnIuc2xpY2UoKTtcclxuICAgICAgICBsZXQgdmFsID0gcG9wKGFyciwgYXJyLmxlbmd0aCwgdGhpcy5sZXNzVGhhbik7XHJcbiAgICAgICAgd2hpbGUgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIGFyci5wb3AoKSE7XHJcbiAgICAgICAgICAgIHZhbCA9IHBvcChhcnIsIGFyci5sZW5ndGgsIHRoaXMubGVzc1RoYW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5zZXJ0KGRhdGE6IFQpIHtcclxuICAgICAgICBjb25zdCBpZHggPSB0aGlzLmFyci5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5hcnIucHVzaChkYXRhKTtcclxuICAgICAgICBidWJibGVVcCh0aGlzLmFyciwgaWR4LCB0aGlzLmxlc3NUaGFuKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYW5jZXN0b3IobjogbnVtYmVyLCBrOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKChuICsgMSkgLyBNYXRoLnBvdygyLCBrKSAtIDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJlbnQobjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gYW5jZXN0b3IobiwgMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxlZnRDaGlsZChpOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAyICogaSArIDE7XHJcbn1cclxuXHJcbi8vIHBvcCBzd2FwcyB0aGUgcm9vdCB0byB0aGUgZW5kIG9mIHRoZSBhcnJheTsgY2FsbGVyIGlzIHJlc3BvbnNpYmxlIGZvciBtZW1lb3J5IG1hbmFnZW1lbnRcclxuZnVuY3Rpb24gcG9wPFQ+KGFycjogVFtdLCBsZW5ndGg6IG51bWJlciwgbGVzc1RoYW46IChhOiBULCBiOiBUKSA9PiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBsZW5NaW51cyA9IGxlbmd0aCAtIDE7XHJcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChsZW5ndGggPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gYXJyW2xlbk1pbnVzXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXQgPSBhcnJbMF07XHJcbiAgICBBbGdvLnN3YXAoYXJyLCAwLCBsZW5NaW51cyk7IC8vIHJlcGxhY2Ugcm9vdCB3aXRoIHRoZSBsYXN0IGVsZW1lbnQgYW5kIHRoZW4gYnViYmxlZG93blxyXG4gICAgYnViYmxlRG93bihhcnIsIDAsIGxlbk1pbnVzLCBsZXNzVGhhbik7XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWJibGVEb3duPFQ+KGFycjogVFtdLCBzdGFydDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgbGVzc1RoYW46IChhOiBULCBiOiBUKSA9PiBib29sZWFuKSB7XHJcbiAgICBjb25zdCByb290ID0gYXJyW3N0YXJ0XTtcclxuICAgIGxldCBpID0gc3RhcnQ7IC8vIGl0ZXJhdG9yIHN0YXJ0aW5nIGF0IHRoZSByb290IG5vZGUgZGVmaW5lZCBieSBzdGFydFxyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBsZXQgY2FuZGlkYXRlID0gbGVmdENoaWxkKGkpO1xyXG4gICAgICAgIGlmIChjYW5kaWRhdGUgPj0gbGVuZ3RoKSB7IC8vIGxlZnQtY2hpbGQgZG9lc24ndCBleGlzdFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBhcnJbY2FuZGlkYXRlXTtcclxuICAgICAgICBjb25zdCByaWdodElkeCA9IGNhbmRpZGF0ZSArIDE7XHJcbiAgICAgICAgaWYgKHJpZ2h0SWR4IDwgbGVuZ3RoICYmIC8vIHJpZ2h0LWNoaWxkIGV4aXN0cyBhbmRcclxuICAgICAgICAgICAgbGVzc1RoYW4oYXJyW3JpZ2h0SWR4XSwgbGVmdCkgIC8vIHJpZ2h0IGNoaWxkIGlzIGxlc3MgdGhhbiBsZWZ0LWNoaWxkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNhbmRpZGF0ZSsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxlc3NUaGFuKHJvb3QsIGFycltjYW5kaWRhdGVdKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFsZ28uc3dhcChhcnIsIGksIGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgaSA9IGNhbmRpZGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYnViYmxlVXA8VD4oYXJyOiBUW10sIHN0YXJ0OiBudW1iZXIsIGxlc3NUaGFuOiAoYTogVCwgYjogVCkgPT4gYm9vbGVhbikge1xyXG5cclxuICAgIC8vIE8obG9nbG9nIG4pIGNvbXBhcmlzb25zIHRvIGxvb2sgZm9yIG51bWJlciBvZiBhbmNlc3RvcnMgdG8gYmUgc3dhcHBlZFxyXG4gICAgLy8gLi4uIG5vdCB0aGF0IGl0J3MgYW4gb3B0aW1pemF0aW9uIG9yIGFueXRoaW5nLCBpdCdzIGp1c3QgYSBjb3B5LXBhc3RlXHJcbiAgICAvLyBmcm9tIG15IGhvbWV3b3JrIGJhY2sgaW4gc2Nob29sXHJcbiAgICBjb25zdCBudW1BbmNlc3RvcnNUb0JlU3dhcHBlZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc3RhcnQgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGlnaCA9IChNYXRoLmxvZyhzdGFydCArIDEpIC8gTWF0aC5sb2coMikpO1xyXG4gICAgICAgIGxldCBjdXIgPSBzdGFydDtcclxuICAgICAgICBsZXQgbG93ID0gMDtcclxuICAgICAgICBsZXQgcGl2b3Q6IG51bWJlcjtcclxuXHJcbiAgICAgICAgLy8gYmluYXJ5IHNlYXJjaCBvbiBhIGJyYW5jaCBvZiBoZWFwIC0tIE8obGdsZyBuKSBjb21wYXJpc2lvbnNcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBwaXZvdCA9IE1hdGguZmxvb3IoKGhpZ2ggKyBsb3cpIC8gMik7XHJcbiAgICAgICAgICAgIGlmIChoaWdoIDwgbG93KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXIgPSBhbmNlc3RvcihzdGFydCwgcGl2b3QpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxlc3NUaGFuKGFycltzdGFydF0sIGFycltjdXJdKSkge1xyXG4gICAgICAgICAgICAgICAgbG93ID0gcGl2b3QgKyAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlc3NUaGFuKGFycltjdXJdLCBhcnJbc3RhcnRdKSkge1xyXG4gICAgICAgICAgICAgICAgaGlnaCA9IHBpdm90IC0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwaXZvdCArIGJvdW5kYXJ5IGNhc2UgYWRqdXN0bWVudFxyXG4gICAgICAgIGlmIChsZXNzVGhhbihhcnJbc3RhcnRdLCBhcnJbcGFyZW50KGN1cildKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGl2b3QgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGl2b3Q7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG51bSA9IG51bUFuY2VzdG9yc1RvQmVTd2FwcGVkKCk7XHJcbiAgICBsZXQgaXQgPSBzdGFydDtcclxuICAgIGxldCBwYXI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgIHBhciA9IHBhcmVudChpdCk7XHJcbiAgICAgICAgQWxnby5zd2FwKGFyciwgaXQsIHBhcik7XHJcbiAgICAgICAgaXQgPSBwYXI7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FsZ29yaXRobS9taW5oZWFwLnRzIiwiLy8gSUFOQU0gKEkgYW0gbm90IGEgbWF0aGVtYXRpY2lhbilcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWFudGlsZShkYXRhOiBudW1iZXJbXSB8IEZsb2F0MzJBcnJheSwgcGFydHM6IG51bWJlcikge1xyXG4gICAgY29uc3QgY29weSA9IGRhdGEuc2xpY2UoKS5zb3J0KCk7XHJcbiAgICBjb25zdCBwZXJjZW50aWxlID0gY29weS5sZW5ndGggLyBwYXJ0cztcclxuXHJcbiAgICByZXR1cm4gbmV3IEFycmF5PG51bWJlcj4ocGFydHMpXHJcbiAgICAgICAgLmZpbGwoMClcclxuICAgICAgICAubWFwKChfLCBpKSA9PiBjb3B5W01hdGguZmxvb3IoaSAqIHBlcmNlbnRpbGUpXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW0oLi4uYXJnczogbnVtYmVyW10pIHtcclxuICAgIHJldHVybiBhcmdzXHJcbiAgICAgICAgLmZpbHRlcigodmFsKSA9PiAhTnVtYmVyLmlzTmFOKHZhbCkpXHJcbiAgICAgICAgLnJlZHVjZSgocHJldjogbnVtYmVyLCBjdXI6IG51bWJlcikgPT4gcHJldiArIGN1ciwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdmVyYWdlKC4uLmFyZ3M6IG51bWJlcltdKSB7XHJcbiAgICByZXR1cm4gYXJncy5sZW5ndGggPT09IDAgPyBOYU4gOiBzdW0oLi4uYXJncykgLyBhcmdzLmxlbmd0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsMkQoW2F4LCBheV06IFtudW1iZXIsIG51bWJlcl0sIFtieCwgYnldOiBbbnVtYmVyLCBudW1iZXJdKSB7XHJcbiAgICByZXR1cm4gYXggPT09IGJ4ICYmIGF5ID09PSBieTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUyRChbYXgsIGF5XTogW251bWJlciwgbnVtYmVyXSwgW2J4LCBieV06IFtudW1iZXIsIG51bWJlcl0pIHtcclxuICAgIGlmIChheCA8IGJ4KSB7IHJldHVybiAtMTsgfVxyXG4gICAgaWYgKGF4ID4gYngpIHsgcmV0dXJuIDE7IH1cclxuICAgIHJldHVybiBheSAtIGJ5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3QyRChbYXgsIGF5XTogW251bWJlciwgbnVtYmVyXSwgW2J4LCBieV06IFtudW1iZXIsIG51bWJlcl0pOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIHJldHVybiBbYXggLSBieCwgYXkgLSBieV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW0yRChbYXgsIGF5XTogW251bWJlciwgbnVtYmVyXSwgW2J4LCBieV06IFtudW1iZXIsIG51bWJlcl0pOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIHJldHVybiBbYXggKyBieCwgYXkgKyBieV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtMkQoW2F4LCBheV06IFtudW1iZXIsIG51bWJlcl0pIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoYXggKiBheCArIGF5ICogYXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UyRChhOiBbbnVtYmVyLCBudW1iZXJdLCBiOiBbbnVtYmVyLCBudW1iZXJdKSB7XHJcbiAgICByZXR1cm4gbm9ybTJEKHN1YnRyYWN0MkQoYSwgYikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGFyTXVsdDJEKFtheCwgYXldOiBbbnVtYmVyLCBudW1iZXJdLCBzY2FsYXI6IG51bWJlcik6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgcmV0dXJuIFtzY2FsYXIgKiBheCwgc2NhbGFyICogYXldO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdDJEKGE6IFtudW1iZXIsIG51bWJlcl0sIHNjYWxhciA9IDEpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGNvbnN0IG5vcm0gPSBub3JtMkQoYSk7XHJcbiAgICBjb25zb2xlLmFzc2VydChub3JtICE9PSAwLCBcImNhbGxlciBtYWtlIHN1cmUgdGhlIGdpdmVuIHZlY3RvciBpcyBub3QgdGhlIG9yaWdpblwiKTtcclxuICAgIHJldHVybiBzY2FsYXJNdWx0MkQoYSwgc2NhbGFyIC8gbm9ybSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudDJEKFtheCwgYXldOiBbbnVtYmVyLCBudW1iZXJdLCBbYngsIGJ5XTogW251bWJlciwgbnVtYmVyXSkge1xyXG4gICAgcmV0dXJuIGF4ICogYnkgLSBieCAqIGF5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQb2ludEluUmVjdChbcHgsIHB5XTogW251bWJlciwgbnVtYmVyXSwgW2F4LCBheV06IFtudW1iZXIsIG51bWJlcl0sIFtieCwgYnldOiBbbnVtYmVyLCBudW1iZXJdKSB7XHJcbiAgICBjb25zdCBtYXhYID0gTWF0aC5tYXgoYXgsIGJ4KTtcclxuICAgIGNvbnN0IG1pblggPSBNYXRoLm1pbihheCwgYngpO1xyXG4gICAgY29uc3QgbWF4WSA9IE1hdGgubWF4KGF5LCBieSk7XHJcbiAgICBjb25zdCBtaW5ZID0gTWF0aC5taW4oYXksIGJ5KTtcclxuICAgIHJldHVybiBweCA8PSBtYXhYICYmIHB4ID49IG1pblggJiYgcHkgPD0gbWF4WSAmJiBweSA+PSBtaW5ZO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBJbnRlcnNlY3Rpb24yRCB7XHJcbiAgICBOb25lLFxyXG4gICAgVGFuZ2VudCxcclxuICAgIEludGVyc2VjdGlvbixcclxufVxyXG5cclxuLyoqXHJcbiAqIFRlc3Qgd2hldGhlciBhIGdpdmVuIGluZmluaXRlIGxpbmUsIGRlZmluZWQgYnkgYSAmIGIsIGludGVyc2VjdHMgYSBjaXJjbGUuXHJcbiAqIEBwYXJhbSBhIGEgcG9pbnQgaW4gdGhlIGxpbmUgc2VnbWVudFxyXG4gKiBAcGFyYW0gYiBhbm90aGVyIHBvaW50IGluIHRoZSBsaW5lIHNlZ21lbnRcclxuICogQHBhcmFtIGMgdGhlIGNlbnRlciBvZiB0aGUgdGFyZ2V0IGNpcmNsZVxyXG4gKiBAcGFyYW0gciB0aGUgdGFyZ2V0IGNpcmNsZSdzIHJhZGl1c1xyXG4gKiBAc2VlIGh0dHBzOi8vbWF0aC5zdGFja2V4Y2hhbmdlLmNvbS9hLzIwMzU0NjZcclxuICogQHNlZSBodHRwOi8vbWF0aHdvcmxkLndvbGZyYW0uY29tL0NpcmNsZS1MaW5lSW50ZXJzZWN0aW9uLmh0bWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0TGluZUNpcmNsZUludGVyc2VjdChhOiBbbnVtYmVyLCBudW1iZXJdLCBiOiBbbnVtYmVyLCBudW1iZXJdLCBjOiBbbnVtYmVyLCBudW1iZXJdLCByOiBudW1iZXIpIHtcclxuXHJcbiAgICAvLyB0cmFuc2xhdGUgYSBhbmQgYiBieSBjLCB0byBzaW1wbGlmeSB0aGUgcHJvYmxlbSB0byB0ZXN0aW5nIGEgbGluZSB0byBhIGNpcmNsZSBjZW50ZXJlZCBhcm91bmQgdGhlIG9yaWdpblxyXG4gICAgY29uc3QgdGEgPSBzdWJ0cmFjdDJEKGEsIGMpO1xyXG4gICAgY29uc3QgdGIgPSBzdWJ0cmFjdDJEKGIsIGMpO1xyXG4gICAgY29uc3QgZHIgPSBkaXN0YW5jZTJEKGEsIGIpO1xyXG4gICAgY29uc3QgZHIyID0gZHIgKiBkcjtcclxuICAgIGNvbnN0IHIyID0gciAqIHI7XHJcbiAgICBjb25zdCBkZXQgPSBkZXRlcm1pbmFudDJEKHRhLCB0Yik7XHJcbiAgICBjb25zdCBkZXQyID0gZGV0ICogZGV0O1xyXG4gICAgY29uc3QgZGlzY3JpbWluYW50ID0gcjIgKiBkcjIgLSBkZXQyO1xyXG5cclxuICAgIGlmIChkaXNjcmltaW5hbnQgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIEludGVyc2VjdGlvbjJELk5vbmU7XHJcbiAgICB9IGVsc2UgaWYgKGRpc2NyaW1pbmFudCA+IDApIHtcclxuICAgICAgICByZXR1cm4gSW50ZXJzZWN0aW9uMkQuSW50ZXJzZWN0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gSW50ZXJzZWN0aW9uMkQuVGFuZ2VudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RMaW5lU2VnbWVudENpcmNsZUludGVyc2VjdChhOiBbbnVtYmVyLCBudW1iZXJdLCBiOiBbbnVtYmVyLCBudW1iZXJdLCBjOiBbbnVtYmVyLCBudW1iZXJdLCByOiBudW1iZXIpIHtcclxuICAgIC8vIGZvciBmaW5pdGUgbGluZSBzZWdtZW50cywgdGVzdCB3aGV0aGVyIHRoZSBjZW50ZXIgaXMgd2l0aGluIHRoZSByZWN0YW5nbGUgZGVmaW5lZCBieSBhLGJcclxuICAgIGlmICghaXNQb2ludEluUmVjdChjLCBhLCBiKSkge1xyXG4gICAgICAgIHJldHVybiBJbnRlcnNlY3Rpb24yRC5Ob25lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlc3RMaW5lQ2lyY2xlSW50ZXJzZWN0KGEsIGIsIGMsIHIpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbGdvcml0aG0vbXltYXRoLnRzIiwiaW1wb3J0ICogYXMgQWxnbyBmcm9tIFwiLi9hbGdvcml0aG1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPcmRlckxpc3RTZXQ8VD4ge1xyXG4gICAgcHJpdmF0ZSBtYXAgPSBuZXcgT3JkZXJMaXN0TWFwPFQsIGJvb2xlYW4+KHRoaXMuY21wKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNtcD86IChhOiBULCBiOiBUKSA9PiBudW1iZXIsXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoLi4ua2V5OiBUW10pIHtcclxuICAgICAgICB0aGlzLm1hcC5zZXQodHJ1ZSwgLi4ua2V5KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzKC4uLmtleTogVFtdKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldCguLi5rZXkpICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZSguLi5rZXk6IFRbXSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5kZWxldGUoLi4ua2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuc2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmtleXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPcmRlckxpc3RNYXA8VCwgVT4ge1xyXG4gICAgcHJpdmF0ZSB0cmllID0gbmV3IFRyaWU8VT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNtcD86IChhOiBULCBiOiBUKSA9PiBudW1iZXIsXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQodmFsOiBVLCAuLi5rZXk6IFRbXSkge1xyXG4gICAgICAgIHRoaXMudHJpZS5zZXQodGhpcy5zb3J0S2V5KGtleSksIHZhbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCguLi5rZXk6IFRbXSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuZ2V0KHRoaXMuc29ydEtleShrZXkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzKC4uLmtleTogVFtdKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5nZXQodGhpcy5zb3J0S2V5KGtleSkpICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZSguLi5rZXk6IFRbXSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuZGVsZXRlKHRoaXMuc29ydEtleShrZXkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy50cmllID0gbmV3IFRyaWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmllLnNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgW1N5bWJvbC5pdGVyYXRvcl0oKTogSXRlcmFibGVJdGVyYXRvcjxbVFtdLCBVXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuZW50cmllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnRyaWVzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8W1RbXSwgVV0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmllLmVudHJpZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMga2V5cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmllLmtleXMoKSBhcyBJdGVyYWJsZUl0ZXJhdG9yPFRbXT47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbHVlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmllLnZhbHVlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPclNldChkZWZhdWx0VmFsOiAoKSA9PiBVLCAuLi5rZXk6IFRbXSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuZ2V0T3JTZXQodGhpcy5zb3J0S2V5KGtleSksIGRlZmF1bHRWYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc29ydEtleShrZXk6IFRbXSkge1xyXG4gICAgICAgIHJldHVybiBrZXkuc29ydCh0aGlzLmNtcCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUdXBsZU1hcDxLZXlUIGV4dGVuZHMgYW55W10sIFZhbFQ+IHtcclxuXHJcbiAgICBwcml2YXRlIHRyaWU6IFRyaWU8VmFsVD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgLi4uZGF0YTogQXJyYXk8W0tleVQsIFZhbFRdPixcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudHJpZSA9IFRyaWUubWFrZSguLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy50cmllID0gbmV3IFRyaWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmllLnNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzKGtleTogS2V5VCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuZ2V0KGtleSkgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogS2V5VCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuZ2V0KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChrZXk6IEtleVQsIHZhbHVlOiBWYWxUKSB7XHJcbiAgICAgICAgdGhpcy50cmllLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGtleTogS2V5VCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW50cmllcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmllLmVudHJpZXMoKSBhcyBJdGVyYWJsZUl0ZXJhdG9yPFtLZXlULCBWYWxUXT47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGtleXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5rZXlzKCkgYXMgSXRlcmFibGVJdGVyYXRvcjxLZXlUPjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUudmFsdWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE9yU2V0KGtleTogS2V5VCwgZGVmYXVsdFZhbDogKCkgPT4gVmFsVCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuZ2V0T3JTZXQoa2V5LCBkZWZhdWx0VmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgKm5leHRPcmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmllLm5leHRPcmRlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHVwbGVTZXQ8S2V5VCBleHRlbmRzIGFueVtdPiB7XHJcblxyXG4gICAgcHJpdmF0ZSB0cmllOiBUcmllPGJvb2xlYW4+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC4uLmRhdGE6IEtleVRbXSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudHJpZSA9IFRyaWUubWFrZSguLi5kYXRhLm1hcCgoeCkgPT4gW3gsIHRydWVdIGFzIFtLZXlULCBib29sZWFuXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnRyaWUgPSBuZXcgVHJpZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuc2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXMoa2V5OiBLZXlUKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5nZXQoa2V5KSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoa2V5OiBLZXlUKSB7XHJcbiAgICAgICAgdGhpcy50cmllLnNldChrZXksIHRydWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoa2V5OiBLZXlUKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnRyaWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBrZXlzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUua2V5cygpIGFzIEl0ZXJhYmxlSXRlcmF0b3I8S2V5VD47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbHVlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE9yQWRkKGtleTogS2V5VCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuZ2V0T3JTZXQoa2V5LCAoKSA9PiB0cnVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWU8VmFsVD4ge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWFrZTxWPiguLi5saXN0OiBBcnJheTxbYW55W10sIFZdPikge1xyXG4gICAgICAgIHJldHVybiBsaXN0XHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgW2tleVN0cmluZywgdmFsXSkgPT4gYWNjXHJcbiAgICAgICAgICAgICAgICAuc2V0KGtleVN0cmluZywgdmFsKSxcclxuICAgICAgICAgICAgICAgIG5ldyBUcmllPFY+KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUga2V5Q2hhcjI6IGFueTtcclxuICAgIHByaXZhdGUgZW5kPzogVmFsVDtcclxuICAgIHByaXZhdGUgbmV4dCA9IG5ldyBNYXA8YW55LCBUcmllPFZhbFQ+PigpO1xyXG4gICAgcHJpdmF0ZSBzaXplMiA9IDA7XHJcblxyXG4gICAgcHVibGljIHNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChrZXk6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMudHJhdmVyc2Uoa2V5KTtcclxuICAgICAgICBpZiAobm9kZSkgeyByZXR1cm4gbm9kZS5lbmQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMga2V5Q2hhcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlDaGFyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoa2V5OiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnN0IGFuY2VzdG9yczogQXJyYXk8W2FueSwgVHJpZTxWYWxUPl0+ID0gW107XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMudHJhdmVyc2Uoa2V5LCAoa2MsIG4pID0+IGFuY2VzdG9ycy5wdXNoKFtrYywgbl0pKTtcclxuICAgICAgICBpZiAoIW5vZGUgfHwgbm9kZS5lbmQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC0tdGhpcy5zaXplMjtcclxuXHJcbiAgICAgICAgLy8gY2xlYW4gdXAgdW51c2VkIHN0cnVjdHVyZVxyXG4gICAgICAgIGxldCBjdXIgPSBub2RlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBhbmNlc3RvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnQgbm9kZSBpcyBzdGlsbCBpbiB1c2VkIGJ5IG90aGVyIGtleXNcclxuICAgICAgICAgICAgaWYgKGN1ci5uZXh0LnNpemUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZGVsZXRlIHRoZSBjdXJyZW50ICh1bnVzZWQpIHN0cnVjdHVyZVxyXG4gICAgICAgICAgICBjb25zdCBba2MsIHBhcmVudF0gPSBhbmNlc3RvcnNbaV07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHBhcmVudC5uZXh0LnNpemUgPiAwKTtcclxuICAgICAgICAgICAgcGFyZW50Lm5leHQuZGVsZXRlKGtjKTtcclxuICAgICAgICAgICAgY3VyID0gcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogYW55W10sIHZhbDogVmFsVCkge1xyXG4gICAgICAgIGxldCB0ZW1wID0gdGhpcyBhcyBUcmllPFZhbFQ+O1xyXG4gICAgICAgIGtleS5mb3JFYWNoKChrZXlDaGFyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2V5Q2hhciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmRlZmluZWQgbm90IGFsbG93ZWQgYXMgcGFydCBvZiB0aGUga2V5XCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV4dCA9IHRlbXAubmV4dC5nZXQoa2V5Q2hhcik7XHJcbiAgICAgICAgICAgIGlmIChuZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG5leHQgPSBuZXcgVHJpZSgpO1xyXG4gICAgICAgICAgICAgICAgdGVtcC5uZXh0LnNldChrZXlDaGFyLCBuZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXh0LmtleUNoYXIyID0ga2V5Q2hhcjtcclxuICAgICAgICAgICAgdGVtcCA9IG5leHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGVtcC5lbmQgPSB2YWw7XHJcbiAgICAgICAgKyt0aGlzLnNpemUyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPclNldChrZXk6IGFueVtdLCBkZWZhdWxWYWw6ICgpID0+IFZhbFQpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IHRoaXMgYXMgVHJpZTxWYWxUPjtcclxuICAgICAgICBrZXkuZm9yRWFjaCgoa2V5Q2hhcikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGtleUNoYXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5kZWZpbmVkIG5vdCBhbGxvd2VkIGFzIHBhcnQgb2YgdGhlIGtleVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IG5leHQgPSB0ZW1wLm5leHQuZ2V0KGtleUNoYXIpO1xyXG4gICAgICAgICAgICBpZiAobmV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0ID0gbmV3IFRyaWUoKTtcclxuICAgICAgICAgICAgICAgIHRlbXAubmV4dC5zZXQoa2V5Q2hhciwgbmV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV4dC5rZXlDaGFyMiA9IGtleUNoYXI7XHJcbiAgICAgICAgICAgIHRlbXAgPSBuZXh0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0ZW1wLmVuZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRlbXAuZW5kID0gZGVmYXVsVmFsKCk7XHJcbiAgICAgICAgICAgICsrdGhpcy5zaXplMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXAuZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9yIGRlYnVnZ2luZyBhbmQgdW5pdC10ZXN0aW5nIG9ubHkuXHJcbiAgICAgKiBAcGFyYW0ga2V5IHRoZSBrZXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEZhbm91dChrZXk6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMudHJhdmVyc2Uoa2V5KTtcclxuICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5uZXh0LnNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljICplbnRyaWVzKCkge1xyXG4gICAgICAgIGNvbnN0IGFsbE5vZGVzID0gQWxnby5kZXB0aEZpcnN0VHJhdmVyc2FsKFxyXG4gICAgICAgICAgICB0aGlzIGFzIFRyaWU8VmFsVD4sXHJcbiAgICAgICAgICAgIChtZSkgPT4gbWUubmV4dC52YWx1ZXMoKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGtleTogYW55W10gPSBbXTtcclxuICAgICAgICBsZXQgY3VyRGVwdGggPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3QgW25vZGUsIGRlcHRoXSBvZiBhbGxOb2Rlcykge1xyXG4gICAgICAgICAgICBjb25zdCBkZXB0aERpZmYgPSBjdXJEZXB0aCAtIGRlcHRoO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlcHRoRGlmZjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBjdXJEZXB0aC0tO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobm9kZS5rZXlDaGFyMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkucHVzaChub2RlLmtleUNoYXIyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGRlcHRoID09PSAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICArK2N1ckRlcHRoO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGUuZW5kICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIFtrZXkuc2xpY2UoKSwgbm9kZS5lbmRdIGFzIFthbnlbXSwgVmFsVF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljICprZXlzKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleV0gb2YgdGhpcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgeWllbGQga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgKnZhbHVlcygpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IFssIHZhbF0gb2YgdGhpcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgeWllbGQgdmFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgKm5leHRPcmRlcigpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHN1YlRyaWUgb2YgdGhpcy5uZXh0LnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIFtzdWJUcmllLmtleUNoYXIoKSwgc3ViVHJpZV0gYXMgW2FueSwgVHJpZTxWYWxUPl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmF2ZXJzZShrZXk6IGFueVtdLCB2aXNpdDogKGtleUNoYXI6IGFueSwgbm9kZTogVHJpZTxWYWxUPikgPT4gdm9pZCA9ICgpID0+IHsgLyogZW1wdHkgKi8gfSkge1xyXG4gICAgICAgIGxldCBjdXI6IFRyaWU8VmFsVD4gPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zdCBpc0ZvdW5kID0ga2V5LmV2ZXJ5KChrZXlDaGFyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBjdXIubmV4dC5nZXQoa2V5Q2hhcik7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2aXNpdChrZXlDaGFyLCBjdXIpO1xyXG4gICAgICAgICAgICBjdXIgPSB0ZW1wO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaXNGb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWxnb3JpdGhtL3RyaWUudHMiLCJcclxuLyoqXHJcbiAqIEJpLWRpcmVjdGlvbiBtYXAsIGJhc2VkIG9uIHR3byBNYXAgb2JqZWN0cy4gVXNlIHRoaXMgY2xhc3MgZm9yIGRhdGEgdGhhdCBoYXMgYSBiaWplY3RpdmUgcmVsYXRpb25zaGlwLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJpTWFwPFQsIFU+IHtcclxuXHJcbiAgICBwcml2YXRlIGxlZnRNYXA6IE1hcDxULCBVPjtcclxuICAgIHByaXZhdGUgcmlnaHRNYXA6IE1hcDxVLCBUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciguLi5kYXRhOiBBcnJheTxbVCwgVV0+KSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0TWFwID0gbmV3IE1hcChkYXRhKTtcclxuICAgICAgICB0aGlzLnJpZ2h0TWFwID0gbmV3IE1hcChkYXRhLm1hcCgoW3QsIHVdKSA9PiBbdSwgdF0gYXMgW1UsIFRdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNpemUoKSB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQodGhpcy5sZWZ0TWFwLnNpemUgPT09IHRoaXMucmlnaHRNYXAuc2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdE1hcC5zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQobGVmdDogVCwgcmlnaHQ6IFUpIHtcclxuICAgICAgICB0aGlzLmxlZnRNYXAuc2V0KGxlZnQsIHJpZ2h0KTtcclxuICAgICAgICB0aGlzLnJpZ2h0TWFwLnNldChyaWdodCwgbGVmdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZUxlZnQobGVmdDogVCkge1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5sZWZ0TWFwLmdldChsZWZ0KTtcclxuICAgICAgICByZXR1cm4gcmlnaHQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmRlbGV0ZShsZWZ0LCByaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVJpZ2h0KHJpZ2h0OiBVKSB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMucmlnaHRNYXAuZ2V0KHJpZ2h0KTtcclxuICAgICAgICByZXR1cm4gbGVmdCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZGVsZXRlKGxlZnQsIHJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmlnaHQobGVmdDogVCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxlZnRNYXAuZ2V0KGxlZnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMZWZ0KHJpZ2h0OiBVKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmlnaHRNYXAuZ2V0KHJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzTGVmdChsZWZ0OiBUKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdE1hcC5oYXMobGVmdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhc1JpZ2h0KHJpZ2h0OiBVKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmlnaHRNYXAuaGFzKHJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGVmdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdE1hcC5rZXlzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJpZ2h0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yaWdodE1hcC5rZXlzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW50cmllcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0TWFwLmVudHJpZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZShsZWZ0OiBULCByaWdodDogVSkge1xyXG4gICAgICAgIGNvbnN0IHJldDEgPSB0aGlzLmxlZnRNYXAuZGVsZXRlKGxlZnQpO1xyXG4gICAgICAgIGNvbnN0IHJldDIgPSB0aGlzLnJpZ2h0TWFwLmRlbGV0ZShyaWdodCk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQocmV0MSk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQocmV0Mik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FsZ29yaXRobS9iaW1hcC50cyIsImltcG9ydCAqIGFzIEFsZ28gZnJvbSBcIi4vYWxnb3JpdGhtXCI7XHJcbmltcG9ydCB7IFVuaW9uRmluZCB9IGZyb20gXCIuL3VuaW9uZmluZFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgR3JhcGg8VD4gPSBNYXA8VCwgVFtdPjsgLy8gYWRqYWNlbmN5IGxpc3RcclxuXHJcbi8qKlxyXG4gKiBCcmVhZHRoIEZpcnN0IFRyYXZlcnNhbFxyXG4gKiBAcGFyYW0gcm9vdCB0aGUgcm9vdCBub2RlXHJcbiAqIEBwYXJhbSBuZWlnaGJvdXJzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm4gZWRnZXMgb2YgYSBub2RlXHJcbiAqIEBwYXJhbSBrZXkgdHVybnMgYSBub2RlIGludG8gYSB1bmlxdWUgdmFsdWUsIG5lZWRlZCBpZiB0aGUgbmVpZ2hib3Vyc1xyXG4gKiAgYXJlIGRlcml2ZWQgdmFsdWVzIGluc3RlYWQgb2YgcG9pbnRpbmcgdG8gdGhlIGFjdHVhbCBub2RlcyBpbiB0aGUgZ3JhcGgsIHRoZW4gYSBrZXkgZnVuY3Rpb24gbXVzdCBiZSBwcm92aWRlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiogYnJlYWR0aEZpcnN0VHJhdmVyc2FsPFQsIFU+KFxyXG4gICAgcm9vdDogVCxcclxuICAgIG5laWdoYm91cnM6ICh2ZXJ0ZXg6IFQpID0+IEl0ZXJhYmxlSXRlcmF0b3I8VD4sXHJcbiAgICBrZXk/OiAodmVydGV4OiBUKSA9PiBVLFxyXG4pOiBJdGVyYWJsZUl0ZXJhdG9yPFtULCBudW1iZXJdPiB7XHJcblxyXG4gICAgY29uc3Qgd29ya0xpc3Q6IEFycmF5PFtULCBudW1iZXJdPiA9IFtbcm9vdCwgMF1dO1xyXG4gICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQ8VCB8IFU+KCk7XHJcbiAgICBjb25zdCBrZXlpdCA9IGtleSA/IGtleSA6IChtZTogVCkgPT4gbWU7XHJcblxyXG4gICAgd2hpbGUgKHdvcmtMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBbY3VyLCBkZXB0aF0gPSB3b3JrTGlzdC5zaGlmdCgpITtcclxuICAgICAgICB5aWVsZCBbY3VyLCBkZXB0aF07XHJcbiAgICAgICAgdmlzaXRlZC5hZGQoa2V5aXQoY3VyKSk7XHJcbiAgICAgICAgY29uc3QgZGVwdGgxID0gZGVwdGggKyAxO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG5laSBvZiBuZWlnaGJvdXJzKGN1cikpIHtcclxuICAgICAgICAgICAgdmlzaXRlZC5hZGQoa2V5aXQobmVpKSk7XHJcbiAgICAgICAgICAgIGlmICghdmlzaXRlZC5oYXMoa2V5aXQobmVpKSkpIHtcclxuICAgICAgICAgICAgICAgIHdvcmtMaXN0LnB1c2goW25laSwgZGVwdGgxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXB0aCBGaXJzdCBUcmF2ZXJzYWxcclxuICogQHBhcmFtIHJvb3QgdGhlIHJvb3Qgbm9kZVxyXG4gKiBAcGFyYW0gbmVpZ2hib3VycyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJuIGVkZ2VzIG9mIGEgbm9kZVxyXG4gKiBAcGFyYW0gaXNWaXNpdGVkIGEgZnVuY3Rpb24gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciBhIG5vZGUgaXMgdmlzaXRlZDsgb3B0aW9uYWwgaWYgdGhlIGdyYXBoIGlzIGEgdHJlZVxyXG4gKiBAcGFyYW0gbWFya1Zpc2l0ZWQgYSBmdW5jdGlvbiB0aGF0IG1hcmtzIGEgbm9kZSBhcyB2aXNpdGVkOyBvcHRpb25hbCBpZiB0aGUgZ3JhcGggaXMgYSB0cmVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24qIGRlcHRoRmlyc3RUcmF2ZXJzYWw8VCwgVT4oXHJcbiAgICByb290OiBULFxyXG4gICAgbmVpZ2hib3VyczogKHZlcnRleDogVCkgPT4gSXRlcmFibGVJdGVyYXRvcjxUPixcclxuKTogSXRlcmFibGVJdGVyYXRvcjxbVCwgbnVtYmVyXT4ge1xyXG5cclxuICAgIGNvbnN0IHdvcmtMaXN0OiBBcnJheTxbVCwgbnVtYmVyXT4gPSBbW3Jvb3QsIDBdXTtcclxuICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0PFQgfCBVPigpO1xyXG5cclxuICAgIHdoaWxlICh3b3JrTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgW2N1ciwgZGVwdGhdID0gd29ya0xpc3QucG9wKCkhO1xyXG4gICAgICAgIGlmICghdmlzaXRlZC5oYXMoY3VyKSkge1xyXG4gICAgICAgICAgICB5aWVsZCBbY3VyLCBkZXB0aF07XHJcbiAgICAgICAgICAgIHZpc2l0ZWQuYWRkKGN1cik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXB0aDEgPSBkZXB0aCArIDE7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmVpIG9mIG5laWdoYm91cnMoY3VyKSkge1xyXG4gICAgICAgICAgICAgICAgd29ya0xpc3QucHVzaChbbmVpLCBkZXB0aDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1pbmltdW0gc3Bhbm5pbmcgdHJlZSwgS3J1c2thbCdzIGFsZ29yaXRobVxyXG4gKiBAcGFyYW0gdmVydGljZXMgdmVydGljZXNcclxuICogQHBhcmFtIG5laWdoYm91cnMgbmVpZ2hib3VycyB0aGF0IGZvcm1zIGFuIGVkZ2Ugd2l0aCBhIGdpdmVuIHZlcnRleFxyXG4gKiBAcGFyYW0gd2VpZ2h0IHRoZSB3ZWlnaHQgb2YgZWFjaCBlZGdlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24ga3J1c2thbE1TVDxUPihcclxuICAgIHZlcnRpY2VzOiBTZXQ8VD4sXHJcbiAgICBuZWlnaGJvdXJzOiAodmVydGV4OiBUKSA9PiBJdGVyYWJsZUl0ZXJhdG9yPFQ+LFxyXG4gICAgd2VpZ2h0OiAodTogVCwgdjogVCkgPT4gbnVtYmVyLFxyXG4pOiBHcmFwaDxUPiB7XHJcbiAgICAvKlxyXG4gICAgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS3J1c2thbCUyN3NfYWxnb3JpdGhtXHJcbiAgICBLUlVTS0FMKEcpOlxyXG4gICAgMSBBID0g4oiFXHJcbiAgICAyIGZvcmVhY2ggdiDiiIggRy5WOlxyXG4gICAgMyAgICBNQUtFLVNFVCh2KVxyXG4gICAgNCBmb3JlYWNoICh1LCB2KSBpbiBHLkUgb3JkZXJlZCBieSB3ZWlnaHQodSwgdiksIGluY3JlYXNpbmc6XHJcbiAgICA1ICAgIGlmIEZJTkQtU0VUKHUpIOKJoCBGSU5ELVNFVCh2KTpcclxuICAgIDYgICAgICAgQSA9IEEg4oiqIHsodSwgdil9XHJcbiAgICA3ICAgICAgIFVOSU9OKHUsIHYpXHJcbiAgICA4IHJldHVybiBBXHJcbiAgICAqL1xyXG5cclxuICAgIGNvbnN0IHNldHMgPSBuZXcgVW5pb25GaW5kKHZlcnRpY2VzKTtcclxuICAgIGNvbnN0IGVkZ2VzID0gQXJyYXlcclxuXHJcbiAgICAgICAgLy8gZ2V0IGFsbCBlZGdlc1xyXG4gICAgICAgIC5mcm9tKHZlcnRpY2VzKVxyXG4gICAgICAgIC5yZWR1Y2UoKGFjYywgdSkgPT4ge1xyXG4gICAgICAgICAgICBhY2MucHVzaCguLi5BcnJheVxyXG4gICAgICAgICAgICAgICAgLmZyb20obmVpZ2hib3Vycyh1KSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKHYpID0+IFt1LCB2XSBhcyBbVCwgVF0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICB9LCBuZXcgQXJyYXk8W1QsIFRdPigpKVxyXG5cclxuICAgICAgICAvLyBzb3J0IGJ5IGFzY2VuZGluZyBvcmRlclxyXG4gICAgICAgIC5zb3J0KChbdTEsIHYxXSwgW3UyLCB2Ml0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdlaWdodCh1MSwgdjEpIC0gd2VpZ2h0KHUyLCB2Mik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGVkZ2VzLnJlZHVjZSgoYWNjLCBbdSwgdl0pID0+IHtcclxuICAgICAgICBpZiAoIXNldHMuaXNTYW1lU2V0KHUsIHYpKSB7XHJcbiAgICAgICAgICAgIEFsZ28uZ2V0T3JTZXQoYWNjLCB1LCAoKSA9PiBbXSkucHVzaCh2KTtcclxuICAgICAgICAgICAgQWxnby5nZXRPclNldChhY2MsIHYsICgpID0+IFtdKS5wdXNoKHUpO1xyXG4gICAgICAgICAgICBzZXRzLnVuaW9uKHUsIHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgbmV3IE1hcDxULCBUW10+KCkpO1xyXG59XHJcblxyXG4vKipcclxuICogQWxsLXBhaXIgc2hvcnRlc3QgcGFpcnMsIEZsb3lkLVdhcnNoYWxsIGFsZ29yaXRobVxyXG4gKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zsb3lkJUUyJTgwJTkzV2Fyc2hhbGxfYWxnb3JpdGhtXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxveWRXYXJzaGFsbDxUPiB7XHJcblxyXG4gICAgcHJpdmF0ZSBuZXh0TWFwOiBudW1iZXJbXVtdO1xyXG4gICAgcHJpdmF0ZSB2ZXJ0aWNlc0lkeDogTWFwPFQsIG51bWJlcj47XHJcbiAgICBwcml2YXRlIHZlcnRpY2VzOiBUW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ3JhcGg6IE1hcDxULCBUW10+LFxyXG4gICAgICAgIHdlaWdodDogKHU6IFQsIHY6IFQpID0+IG51bWJlcixcclxuICAgICkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbGV0IGRpc3QgYmUgYSB8VnwgKiB8VnwgYXJyYXkgb2YgbWluaW11bSBkaXN0YW5jZXMgaW5pdGlhbGl6ZWQgdG8gSW5maW5pdHlcclxuICAgICAgICBsZXQgbmV4dCBiZSBhIHxWfCAqIHxWfCBhcnJheSBvZiB2ZXJ0ZXggaW5kaWNlcyBpbml0aWFsaXplZCB0byBudWxsXHJcblxyXG4gICAgICAgIHByb2NlZHVyZSBGbG95ZFdhcnNoYWxsV2l0aFBhdGhSZWNvbnN0cnVjdGlvbiAoKVxyXG4gICAgICAgIGZvciBlYWNoIGVkZ2UgKHUsdilcclxuICAgICAgICAgICAgZGlzdFt1XVt2XSDihpAgdyh1LHYpICAvLyB0aGUgd2VpZ2h0IG9mIHRoZSBlZGdlICh1LHYpXHJcbiAgICAgICAgICAgIG5leHRbdV1bdl0g4oaQIHZcclxuICAgICAgICBmb3IgayBmcm9tIDEgdG8gfFZ8IC8vIHN0YW5kYXJkIEZsb3lkLVdhcnNoYWxsIGltcGxlbWVudGF0aW9uXHJcbiAgICAgICAgICAgIGZvciBpIGZyb20gMSB0byB8VnxcclxuICAgICAgICAgICAgICAgIGZvciBqIGZyb20gMSB0byB8VnxcclxuICAgICAgICAgICAgICAgICAgICBpZiBkaXN0W2ldW2pdID4gZGlzdFtpXVtrXSArIGRpc3Rba11bal0gdGhlblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RbaV1bal0g4oaQIGRpc3RbaV1ba10gKyBkaXN0W2tdW2pdXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFtpXVtqXSDihpAgbmV4dFtpXVtrXVxyXG4gICAgICAgICovXHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZ3JhcGggIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFsuLi5ncmFwaC5rZXlzKCldO1xyXG4gICAgICAgIHRoaXMudmVydGljZXNJZHggPSBuZXcgTWFwKEFycmF5XHJcbiAgICAgICAgICAgIC5mcm9tKHRoaXMudmVydGljZXMpXHJcbiAgICAgICAgICAgIC5tYXAoKHYsIGkpID0+IFt2LCBpXSBhcyBbVCwgbnVtYmVyXSkpO1xyXG5cclxuICAgICAgICBjb25zdCB2U2l6ZSA9IGdyYXBoLnNpemU7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3QgPSBuZXcgQXJyYXk8bnVtYmVyW10+KHZTaXplKTtcclxuICAgICAgICBjb25zdCBuZXh0ID0gdGhpcy5uZXh0TWFwID0gbmV3IEFycmF5PG51bWJlcltdPih2U2l6ZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdlNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBkaXN0W2ldID0gbmV3IEFycmF5KHZTaXplKS5maWxsKEluZmluaXR5KTtcclxuICAgICAgICAgICAgbmV4dFtpXSA9IG5ldyBBcnJheSh2U2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgdiBvZiB0aGlzLnZlcnRpY2VzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZJZHggPSB0aGlzLnZlcnRpY2VzSWR4LmdldCh2KSE7XHJcbiAgICAgICAgICAgIGRpc3RbdklkeF1bdklkeF0gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBbdSwgdnNdIG9mIGdyYXBoKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdiBvZiB2cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdUlkeCA9IHRoaXMudmVydGljZXNJZHguZ2V0KHUpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZJZHggPSB0aGlzLnZlcnRpY2VzSWR4LmdldCh2KSE7XHJcbiAgICAgICAgICAgICAgICBkaXN0W3VJZHhdW3ZJZHhdID0gd2VpZ2h0KHUsIHYpO1xyXG4gICAgICAgICAgICAgICAgbmV4dFt1SWR4XVt2SWR4XSA9IHZJZHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdlNpemU7IGsrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZTaXplOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdlNpemU7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0SW5jbHVkZUsgPSBkaXN0W2ldW2tdICsgZGlzdFtrXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdFtpXVtqXSA+IGRpc3RJbmNsdWRlSykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0W2ldW2pdID0gZGlzdEluY2x1ZGVLO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0W2ldW2pdID0gbmV4dFtpXVtrXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljICpwYXRoKHU6IFQsIHY6IFQpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICBwcm9jZWR1cmUgUGF0aCh1LCB2KVxyXG4gICAgICAgICAgICBpZiBuZXh0W3VdW3ZdID0gbnVsbCB0aGVuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW11cclxuICAgICAgICAgICAgcGF0aCA9IFt1XVxyXG4gICAgICAgICAgICB3aGlsZSB1IOKJoCB2XHJcbiAgICAgICAgICAgICAgICB1IOKGkCBuZXh0W3VdW3ZdXHJcbiAgICAgICAgICAgICAgICBwYXRoLmFwcGVuZCh1KVxyXG4gICAgICAgICAgICByZXR1cm4gcGF0aFxyXG4gICAgICAgICovXHJcbiAgICAgICAgbGV0IHVJZHggPSB0aGlzLnZlcnRpY2VzSWR4LmdldCh1KSE7XHJcbiAgICAgICAgY29uc3QgdklkeCA9IHRoaXMudmVydGljZXNJZHguZ2V0KHYpITtcclxuXHJcbiAgICAgICAgY29uc3QgbmV4dE1hcCA9IHRoaXMubmV4dE1hcDtcclxuICAgICAgICBpZiAobmV4dE1hcFt1SWR4XVt2SWR4XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHU7XHJcbiAgICAgICAgICAgIHdoaWxlICh1SWR4ICE9PSB2SWR4KSB7XHJcbiAgICAgICAgICAgICAgICB1SWR4ID0gbmV4dE1hcFt1SWR4XVt2SWR4XTtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMudmVydGljZXNbdUlkeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5leHQodTogVCwgdjogVCkge1xyXG4gICAgICAgIGNvbnN0IHZJZHggPSB0aGlzLnZlcnRpY2VzSWR4LmdldCh2KSE7XHJcbiAgICAgICAgY29uc3QgdUlkeCA9IHRoaXMudmVydGljZXNJZHguZ2V0KHUpITtcclxuICAgICAgICBjb25zdCBuZXh0SWR4ID0gdGhpcy5uZXh0TWFwW3VJZHhdW3ZJZHhdO1xyXG4gICAgICAgIGlmIChuZXh0SWR4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNbbmV4dElkeF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbGdvcml0aG0vZ3JhcGgudHMiLCJpbXBvcnQgKiBhcyBNb2RlbCBmcm9tIFwiLi9tb2RlbFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vcHJvZHVjdFwiO1xyXG5cclxuY29uc3QgQkFTRV9ZSUVMRCA9IDEwO1xyXG5jb25zdCBNQVhfT1BfUFJPRFVDVFMgPSAxMDtcclxuY29uc3QgTUlOX09QX0VGRiA9IDAuMTtcclxuY29uc3QgUkVNQUlOX0NIQU5HRV9FRkZfRkFDVE9SID0gMC44OyAvLyBpLmUuIDIwJSBlZmYgbG9zcyB3aGVuIHVwZ3JhZGluZy9kb3duLXNpemluZyBpbmR1c3RyaWFsIGNvbXBsZXhcclxuY29uc3QgQkFTRV9GSVhFRF9DT1NUID0gMC4zO1xyXG5jb25zdCBNSU5fRklYRURfQ09TVCA9IDAuMDM7XHJcbmNvbnN0IEZJWEVEX0NPU1RfT0ZGU0VUID0gQkFTRV9GSVhFRF9DT1NUIC0gTUlOX0ZJWEVEX0NPU1Q7XHJcbmNvbnNvbGUuYXNzZXJ0KEZJWEVEX0NPU1RfT0ZGU0VUID4gMCk7XHJcblxyXG5jb25zdCBCQVNFX1BPV0VSX1VTQUdFID0gMTA7XHJcblxyXG4vLyBib251cyBwcm9kdWN0aW9uIG1vZGlmaWVyc1xyXG5jb25zdCBPUF9GQUNUT1JfQk9OVVMgPSA0O1xyXG5jb25zdCBFTkVSR1lfQk9OVVMgPSA0O1xyXG5cclxuZXhwb3J0IGNsYXNzIEluZHVzdHJ5IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldERlbWFuZFByb2R1Y3RzKHByb2R1Y3RUeXBlOiBQcm9kdWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIE1vZGVsLkRFTUFORF9QUk9EVUNUU1twcm9kdWN0VHlwZV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRGbGF0RGVtYW5kUHJvZHVjdHMocHJvZHVjdFR5cGU6IFByb2R1Y3QpIHtcclxuICAgICAgICByZXR1cm4gTW9kZWwuRkxBVF9ERU1BTkRfUFJPRFVDVFNbcHJvZHVjdFR5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBpZDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBwcm9kdWN0VHlwZTogUHJvZHVjdCxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY29sb255OiBNb2RlbC5Db2xvbnksXHJcbiAgICAgICAgcHJpdmF0ZSBzY2FsZSA9IDEsXHJcbiAgICAgICAgcHJpdmF0ZSBvcGVyYXRpb25hbEVmZiA9IE1JTl9PUF9FRkYsIC8vIDAuMSB0byAxXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogTW9kZWwuSUluZHVzdHJ5IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgcHJvZHVjdFR5cGU6IHRoaXMucHJvZHVjdFR5cGUsXHJcbiAgICAgICAgICAgIGNvbG9ueUlkOiB0aGlzLmNvbG9ueS5pZCxcclxuICAgICAgICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbmFsRWZmOiB0aGlzLm9wZXJhdGlvbmFsRWZmLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZ3JhZGUoKSB7XHJcbiAgICAgICAgKyt0aGlzLnNjYWxlO1xyXG4gICAgICAgIHRoaXMub3BlcmF0aW9uYWxFZmYgPSBNYXRoLm1heChNSU5fT1BfRUZGLCBSRU1BSU5fQ0hBTkdFX0VGRl9GQUNUT1IgKiB0aGlzLm9wZXJhdGlvbmFsRWZmKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZG93blNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IE1hdGgubWF4KDEsIHRoaXMuc2NhbGUgLSAxKTtcclxuICAgICAgICB0aGlzLm9wZXJhdGlvbmFsRWZmID0gTWF0aC5tYXgoTUlOX09QX0VGRiwgUkVNQUlOX0NIQU5HRV9FRkZfRkFDVE9SICogdGhpcy5vcGVyYXRpb25hbEVmZik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjYWxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVyYXRlKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzUnVuUHJvZCA9IHRoaXMuaXNSdW5Qcm9kKGdhbGF4eSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllckludmVudG9yeSA9IHRoaXMuY29sb255LmdldFBsYXllckludmVudG9yeSgpO1xyXG5cclxuICAgICAgICBsZXQgbnVtUHJvZHVjZWQgPSAwO1xyXG4gICAgICAgIGlmIChpc1J1blByb2QpIHtcclxuICAgICAgICAgICAgbnVtUHJvZHVjZWQgPSB0aGlzLnByb2R1Y2UoZ2FsYXh5LCBwbGF5ZXJJbnZlbnRvcnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbnVtUHJvZHVjZWQgPSBNYXRoLm1heCgxLCBudW1Qcm9kdWNlZCk7XHJcbiAgICAgICAgY29uc3QgY29zdFBlclVuaXQgPSB0aGlzLmdldENvc3RQZXJVbml0KCk7XHJcbiAgICAgICAgY29uc3QgcHJvZENvc3QgPSBjb3N0UGVyVW5pdCAqIG51bVByb2R1Y2VkO1xyXG4gICAgICAgIGNvbnN0IGVuZXJneUNvc3QgPSB0aGlzLnVzZWRFbmVyZ3koZ2FsYXh5KSArIHRoaXMuY29sb255LmdldEVuZXJneVByaWNlKGdhbGF4eSk7XHJcblxyXG4gICAgICAgIGdhbGF4eS53aXRoZHJhdyhwcm9kQ29zdCArIGVuZXJneUNvc3QpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmZXJzKGlzUnVuUHJvZCwgcGxheWVySW52ZW50b3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29zdFBlclVuaXQoKSB7XHJcbiAgICAgICAgY29uc3QgY29zdFJlZHVjdGlvbiA9IDEgLSB0aGlzLm9wZXJhdGlvbmFsRWZmO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGNvc3RSZWR1Y3Rpb24gPj0gMCAmJiBjb3N0UmVkdWN0aW9uIDw9IDEpO1xyXG4gICAgICAgIHJldHVybiBNSU5fRklYRURfQ09TVCArIEZJWEVEX0NPU1RfT0ZGU0VUICogY29zdFJlZHVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXNlZEVuZXJneShnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvd2VyVXNhZ2UoKSAqIHRoaXMuY29sb255LmdldFBvd2VyVXNhZ2VFZmYoZ2FsYXh5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3BEZW1hbmQoKTogTW9kZWwuSU9wRGVtYW5kIHtcclxuICAgICAgICBjb25zdCBxdHkgPSBNQVhfT1BfUFJPRFVDVFMgKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9kdWN0VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFByb2R1Y3QuQ3JvcDpcclxuICAgICAgICAgICAgY2FzZSBQcm9kdWN0Lk1ldGFsOlxyXG4gICAgICAgICAgICBjYXNlIFByb2R1Y3QuR2VtOlxyXG4gICAgICAgICAgICBjYXNlIFByb2R1Y3QuRnVlbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVlZGVkS2luZHM6IG5ldyBTZXQoW1Byb2R1Y3QuVG9vbF0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHF0eSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IC8vIHBvc3QtcHJvY2Vzc2luZyBpbmR1c3RyaWVzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5lZWRlZEtpbmRzOiBuZXcgU2V0KFtQcm9kdWN0Lk1hY2hpbmVdKSxcclxuICAgICAgICAgICAgICAgICAgICBxdHksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJvZENhcChnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbmFsRmFjdG9yID0gMSArIHRoaXMub3BlcmF0aW9uYWxFZmYgKiBPUF9GQUNUT1JfQk9OVVM7XHJcbiAgICAgICAgY29uc3QgZW5lcmd5Qm9udXMgPSAxICsgdGhpcy5jb2xvbnkuZ2V0UG93ZXJVc2FnZUVmZihnYWxheHkpICogRU5FUkdZX0JPTlVTO1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heCgxLCBNYXRoLmNlaWwodGhpcy5zY2FsZSAqIEJBU0VfWUlFTEQgKiBvcGVyYXRpb25hbEZhY3RvciAqIGVuZXJneUJvbnVzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE9wZXJhdGlvbmFsRWZmKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZXJhdGlvbmFsRWZmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQb3dlclVzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNjYWxlKCkgKiBCQVNFX1BPV0VSX1VTQUdFO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNSdW5Qcm9kKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdFR5cGUgPSB0aGlzLnByb2R1Y3RUeXBlO1xyXG4gICAgICAgIGNvbnN0IGRlbWFuZFF0eSA9IDEwICogZ2FsYXh5LmdldEdhbGFjdGljRGVtYW5kcyhwcm9kdWN0VHlwZSk7XHJcbiAgICAgICAgY29uc3Qgc3VwcGx5UXR5ID0gdGhpcy5jb2xvbnkuZ2V0U3VwcGx5KHByb2R1Y3RUeXBlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVySW52ZW50b3J5ID0gdGhpcy5jb2xvbnkuZ2V0UGxheWVySW52ZW50b3J5KCk7XHJcbiAgICAgICAgY29uc3QgaW5TdG9jayA9IHBsYXllckludmVudG9yeS5nZXRRdHkodGhpcy5wcm9kdWN0VHlwZSk7XHJcblxyXG4gICAgICAgIC8vIHByb2R1Y2Ugd2hlbiB0aGVyZSdzIGV4Y2VzcyBkZW1hbmRcclxuICAgICAgICByZXR1cm4gZGVtYW5kUXR5ID4gaW5TdG9jayArIHN1cHBseVF0eTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZU1vZGlmZXJzKGlzUnVuUHJvZDogYm9vbGVhbiwgaW52ZW50b3J5OiBNb2RlbC5JbnZlbnRvcnkpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgb3BEZW1hbmQgPSB0aGlzLmdldE9wRGVtYW5kKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnN1bWVkID0gaW52ZW50b3J5LmNvbnN1bWUob3BEZW1hbmQubmVlZGVkS2luZHMsIG9wRGVtYW5kLnF0eSk7XHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSBjb25zdW1lZCAvIG9wRGVtYW5kLnF0eTtcclxuICAgICAgICBpZiAoIWlzUnVuUHJvZCB8fCByYXRpbyA8IDAuNSkge1xyXG4gICAgICAgICAgICAvLyBub3QgcnVubmluZyBwcm9kdWN0aW9uIG9yIHRvbyBmZXcgdG9vbHMsIHBlbmF0bHlcclxuICAgICAgICAgICAgdGhpcy5vcGVyYXRpb25hbEVmZiA9IE1hdGgubWF4KE1JTl9PUF9FRkYsIHRoaXMub3BlcmF0aW9uYWxFZmYgLSAwLjAwMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY29uc3VtcHRpb25GYWN0b3IgPSAocmF0aW8gLSAwLjUpIC8gMC41O1xyXG4gICAgICAgICAgICB0aGlzLm9wZXJhdGlvbmFsRWZmID0gTWF0aC5taW4oMSwgdGhpcy5vcGVyYXRpb25hbEVmZiArIDAuMDEgKiBjb25zdW1wdGlvbkZhY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvZHVjZShnYWxheHk6IE1vZGVsLkdhbGF4eSwgaW52ZW50b3J5OiBNb2RlbC5JbnZlbnRvcnkpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZGVtYW5kUHJvZHVjdHMgPSBJbmR1c3RyeS5nZXRGbGF0RGVtYW5kUHJvZHVjdHModGhpcy5wcm9kdWN0VHlwZSk7XHJcbiAgICAgICAgY29uc3QgcHJvZENhcCA9IHRoaXMucHJvZENhcChnYWxheHkpO1xyXG5cclxuICAgICAgICBpZiAoZGVtYW5kUHJvZHVjdHMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBubyBpbnB1dCByZXF1aXJlbWVudCwgcHJvZHVjZSBmdWxsIHByb2R1Y3Rpb24gY2FwYWNpdHlcclxuICAgICAgICAgICAgaW52ZW50b3J5LnB1dEdvb2RzKHRoaXMucHJvZHVjdFR5cGUsIHByb2RDYXApO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvZENhcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2R1Y2VRdHkgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgcHJvZENhcCwgLy8gbm90ZTogY2Fubm90IHByb2R1Y2UgZ3JlYXRlciB0aGFuIHRoZSBwcm9kdWN0aW9uIGNhcGFjaXR5XHJcbiAgICAgICAgICAgIC4uLmRlbWFuZFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gaW52ZW50b3J5LmdldFF0eShwcm9kdWN0KSkpO1xyXG4gICAgICAgIGZvciAoY29uc3QgZGVtYW5kR3JvdXAgb2YgSW5kdXN0cnkuZ2V0RGVtYW5kUHJvZHVjdHModGhpcy5wcm9kdWN0VHlwZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgY29uc3VtZWQgPSBpbnZlbnRvcnkuY29uc3VtZShkZW1hbmRHcm91cCwgcHJvZHVjZVF0eSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGNvbnN1bWVkID09PSBwcm9kdWNlUXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW52ZW50b3J5LnB1dEdvb2RzKHRoaXMucHJvZHVjdFR5cGUsIHByb2R1Y2VRdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvZHVjZVF0eTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVsL2luZHVzdHJ5LnRzIiwiaW1wb3J0ICogYXMgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0ICogYXMgQWxnbyBmcm9tIFwiLi4vYWxnb3JpdGhtL2FsZ29yaXRobVwiO1xyXG5pbXBvcnQgKiBhcyBNb2RlbCBmcm9tIFwiLi9tb2RlbFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vcHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludmVudG9yeSB7XHJcblxyXG4gICAgLy8gZWl0aGVyIGdlbmVyYXRlZCBvbiB0aGUgZmx5IG9yIHJlc3RvcmVkIGZyb20gc29tZSBzb3VyY2VcclxuICAgIHByaXZhdGUgZGVtYW5kU3JjczogTW9kZWwuSW5kdXN0cnlbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB1c2VkU3BhY2UgPSBBbGdvLnN1bSguLi50aGlzLmludmVudG9yeSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBtYXhTdG9yYWdlID0gSW5maW5pdHksXHJcbiAgICAgICAgcHJpdmF0ZSBpbnZlbnRvcnkgPSBuZXcgQXJyYXk8bnVtYmVyPihNb2RlbC5OVU1fUFJPRFVDVFMpLmZpbGwoMCksXHJcbiAgICApIHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0aGlzLnVzZWRTcGFjZSA8PSBtYXhTdG9yYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IE1vZGVsLklJbnZlbnRvcnkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBtYXhTdG9yYWdlOiB0aGlzLm1heFN0b3JhZ2UsXHJcbiAgICAgICAgICAgIGludmVudG9yeTogdGhpcy5pbnZlbnRvcnksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RW1wdHlTcGFjZSgpIHtcclxuICAgICAgICBjb25zdCBzcGFjZSA9IHRoaXMubWF4U3RvcmFnZSAtIHRoaXMudXNlZFNwYWNlO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHNwYWNlID49IDApO1xyXG4gICAgICAgIHJldHVybiBzcGFjZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWF4U3BhY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4U3RvcmFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UXR5KHByb2R1Y3RUeXBlOiBNb2RlbC5Qcm9kdWN0KSB7XHJcbiAgICAgICAgY29uc3QgcXR5ID0gdGhpcy5pbnZlbnRvcnlbcHJvZHVjdFR5cGVdO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHF0eSA+PSAwKTtcclxuICAgICAgICByZXR1cm4gcXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXRHb29kcyhwcm9kdWN0VHlwZTogTW9kZWwuUHJvZHVjdCwgcXR5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHF0eSA+PSAwKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChOdW1iZXIuaXNJbnRlZ2VyKHF0eSkpO1xyXG4gICAgICAgIGNvbnN0IGluU3RvY2sgPSB0aGlzLmludmVudG9yeVtwcm9kdWN0VHlwZV07XHJcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gTWF0aC5taW4odGhpcy5tYXhTdG9yYWdlIC0gdGhpcy51c2VkU3BhY2UsIHF0eSk7XHJcbiAgICAgICAgY29uc3QgbmV3VG90YWwgPSBpblN0b2NrICsgbmV3UXR5O1xyXG4gICAgICAgIHRoaXMuaW52ZW50b3J5W3Byb2R1Y3RUeXBlXSA9IG5ld1RvdGFsO1xyXG4gICAgICAgIHRoaXMudXNlZFNwYWNlICs9IG5ld1F0eTtcclxuICAgICAgICByZXR1cm4gbmV3VG90YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRha2VHb29kcyhwcm9kdWN0VHlwZTogTW9kZWwuUHJvZHVjdCwgcXR5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHF0eSA+PSAwKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChOdW1iZXIuaXNJbnRlZ2VyKHF0eSkpO1xyXG5cclxuICAgICAgICBjb25zdCByZW1haW4gPSB0aGlzLmludmVudG9yeVtwcm9kdWN0VHlwZV0gLSBxdHk7XHJcbiAgICAgICAgaWYgKHJlbWFpbiA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYnVnOiByZXNwb25zaWJpbGl0eSBvZiBtYWludGFpbmluZyBub24tbmVnYXRpdmUgcXVhbnRpdHkgZ29lcyB0byB0aGUgY2FsbGVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlbcHJvZHVjdFR5cGVdID0gcmVtYWluO1xyXG4gICAgICAgIHRoaXMudXNlZFNwYWNlIC09IHF0eTtcclxuICAgICAgICByZXR1cm4gcmVtYWluO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNTcGFjZUZvcihxdHk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHF0eSA+PSAwKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXhTdG9yYWdlID49IHRoaXMudXNlZFNwYWNlICsgcXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGREZW1hbmRTcmMoZGVtYW5kU3JjOiBNb2RlbC5JbmR1c3RyeSkge1xyXG4gICAgICAgIHRoaXMuZGVtYW5kU3Jjcy5wdXNoKGRlbWFuZFNyYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERlbWFuZChnYWxheHk6IE1vZGVsLkdhbGF4eSwgcHJvZHVjdDogTW9kZWwuUHJvZHVjdCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZGVtYW5kcyA9IG5ldyBBcnJheTxudW1iZXI+KE1vZGVsLk5VTV9QUk9EVUNUUykuZmlsbCgwKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNyYyBvZiB0aGlzLmRlbWFuZFNyY3MpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2RDYXAgPSBzcmMucHJvZENhcChnYWxheHkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsRGVtYW5kcyA9IEltbXV0YWJsZVxyXG4gICAgICAgICAgICAgICAgLlNlcShNb2RlbC5JbmR1c3RyeS5nZXREZW1hbmRQcm9kdWN0cyhzcmMucHJvZHVjdFR5cGUpKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRlZEtpbmRzOiB4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdHk6IHByb2RDYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pLmNvbmNhdChzcmMuZ2V0T3BEZW1hbmQoKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRlbWFuZCBvZiBhbGxEZW1hbmRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRlbWFuZC5uZWVkZWRLaW5kcy5oYXMocHJvZHVjdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRyeSB0byBmaWxsIGFsdGVybmF0aXZlcyBkZW1hbmRzXHJcbiAgICAgICAgICAgICAgICBsZXQgbmVlZCA9IGRlbWFuZC5xdHk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtpbmQgb2YgZGVtYW5kLm5lZWRlZEtpbmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXR5ID0gdGhpcy5nZXRRdHkoa2luZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF0eSA+IG5lZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVtYW5kc1traW5kXSArPSBuZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWVkIC09IHF0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVtYW5kc1traW5kXSArPSBxdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQobmVlZCA+PSAwKTtcclxuICAgICAgICAgICAgICAgIC8vIGZpbGwgcmVtYWluaW5nIG5lZWRzIHdpdGggdGhlIHRhcmdldCBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICBkZW1hbmRzW3Byb2R1Y3RdICs9IG5lZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkZW1hbmRzW3Byb2R1Y3RdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyAqZ2V0QWxsUXR5KCkge1xyXG4gICAgICAgIGNvbnN0IGl0ID0gdGhpcy5pbnZlbnRvcnlcclxuICAgICAgICAgICAgLm1hcCgocXR5LCBpZHgpID0+IFtpZHgsIHF0eV0gYXMgW1Byb2R1Y3QsIG51bWJlcl0pO1xyXG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBpdCkge1xyXG4gICAgICAgICAgICAvLyBhbnkgZW50cnkgbXVzdCBoYXZlIHF0eSA+PSAwXHJcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHBhaXJbMV0gPj0gMCk7XHJcbiAgICAgICAgICAgIHlpZWxkIHBhaXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdW1lKHByb2R1Y3RzOiBTZXQ8TW9kZWwuUHJvZHVjdD4gfCBJbW11dGFibGUuU2V0PE1vZGVsLlByb2R1Y3Q+LCBxdHk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHF0eSA+PSAwKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc29ydGVkID0gQXJyYXlcclxuICAgICAgICAgICAgLmZyb20ocHJvZHVjdHMpXHJcbiAgICAgICAgICAgIC8vIHNvcnQgYnkgZGVzY2VuZGluZyBvcmRlclxyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gdGhpcy5nZXRRdHkoYikgLSB0aGlzLmdldFF0eShhKSk7XHJcblxyXG4gICAgICAgIC8vIHRyeSB0byBjb25zdW1lIHByb2R1Y3RzIHdpdGggdGhlIGhpZ2hlc3Qgc3RvY2sgcXR5XHJcbiAgICAgICAgbGV0IGNvbnN1bWVkID0gcXR5O1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBzb3J0ZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5TdG9jayA9IHRoaXMuZ2V0UXR5KHByb2R1Y3QpO1xyXG4gICAgICAgICAgICBpZiAoY29uc3VtZWQgPiBpblN0b2NrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRha2VHb29kcyhwcm9kdWN0LCBpblN0b2NrKTtcclxuICAgICAgICAgICAgICAgIGNvbnN1bWVkIC09IGluU3RvY2s7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRha2VHb29kcyhwcm9kdWN0LCBjb25zdW1lZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdW1lZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gY29uc3VtZWQgZXZlcnl0aGluZyBuZWVkZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcXR5IC0gY29uc3VtZWQ7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVsL2ludmVudG9yeS50cyIsImltcG9ydCAqIGFzIEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCAqIGFzIEFsZ28gZnJvbSBcIi4uL2FsZ29yaXRobS9hbGdvcml0aG1cIjtcclxuaW1wb3J0ICogYXMgTW9kZWwgZnJvbSBcIi4vbW9kZWxcIjtcclxuaW1wb3J0IHsgQ29vclQsIElMb2NhdGFibGUsIElSb3V0ZVNlZ21lbnQsIE1hcERhdGFLaW5kIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuaW1wb3J0IHsgYWxsUHJvZHVjdHMgfSBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcblxyXG5jb25zdCBCSUdfVFVSTiA9IDUwO1xyXG5jb25zdCBTVEFSVElOR19DQVBJVEFMID0gMTAwMDAwMDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUludmVudG9yeSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbWF4U3RvcmFnZTogbnVtYmVyO1xyXG4gICAgaW52ZW50b3J5OiBudW1iZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRmxlZXQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGNhcmdvSWQ6IG51bWJlcjtcclxuICAgIHJvdXRlOiBudW1iZXJbXTtcclxuICAgIHJvdXRlQXQ6IG51bWJlcjtcclxuICAgIHN0YXRlOiBNb2RlbC5GbGVldFN0YXRlO1xyXG4gICAgaXNSZXRpcmluZzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29vciB7XHJcbiAgICBjb29yOiBNb2RlbC5Db29yVDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSW5kdXN0cnkge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHByb2R1Y3RUeXBlOiBNb2RlbC5Qcm9kdWN0O1xyXG4gICAgY29sb255SWQ6IG51bWJlcjtcclxuICAgIHNjYWxlOiBudW1iZXI7XHJcbiAgICBvcGVyYXRpb25hbEVmZjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNYXJrZXQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGludmVudG9yeUlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBsYW5ldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgcmVzb3VyY2U6IE1vZGVsLlJhd01hdGVyaWFsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb2xvbnkge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGhvbWVQbGFuZXRJZDogbnVtYmVyO1xyXG4gICAgcG9wdWxhdGlvbjogbnVtYmVyO1xyXG4gICAgcGxheWVySW52ZW50b3J5SWQ6IG51bWJlcjtcclxuICAgIG1hcmtldEludmVudG9yeUlkOiBudW1iZXI7XHJcbiAgICBtYXhQb3B1bGF0aW9uOiBudW1iZXI7XHJcbiAgICBpc0xvY2tQb3B1bGF0aW9uOiBib29sZWFuO1xyXG4gICAgcG93ZXJQbGFuZXRMZXZlbDogbnVtYmVyO1xyXG4gICAgcG93ZXJPdXRwdXRFZmY6IG51bWJlcjtcclxuICAgIGZvb2RIYXBwaW5lc3M6IG51bWJlcjtcclxuICAgIGx1eHVyeUhhcHBpbmVzczogbnVtYmVyO1xyXG4gICAgY29tbW9uSGFwcGluZXNzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlRmxlZXQge1xyXG4gICAgZnJvbTogbnVtYmVyO1xyXG4gICAgdG86IG51bWJlcjtcclxuICAgIGZsZWV0SWRzOiBudW1iZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJR2FsYXh5U2F2ZURhdGEge1xyXG4gICAgbG9jYXRhYmxlczogQXJyYXk8KE1vZGVsLklMb2NhdGFibGUgJiBNb2RlbC5JQ29vcik+O1xyXG4gICAgYWxsSW52ZW50b3JpZXM6IE1vZGVsLklJbnZlbnRvcnlbXTtcclxuICAgIGFsbEluZHVzdHJpZXM6IE1vZGVsLklJbmR1c3RyeVtdO1xyXG4gICAgYWxsRmxlZXRzOiBNb2RlbC5JRmxlZXRbXTtcclxuICAgIGFsbFBsYW5ldHM6IE1vZGVsLklQbGFuZXRbXTtcclxuICAgIGFsbENvbG9uaWVzOiBNb2RlbC5JQ29sb255W107XHJcblxyXG4gICAgLy8gaW50ZXJuYWwgdmFyaWFibGVzXHJcbiAgICBnZW5JZDogbnVtYmVyO1xyXG4gICAgdHVybkNvdW50ZXI6IG51bWJlcjtcclxuICAgIHRpbWVzdGFtcDogbnVtYmVyO1xyXG5cclxuICAgIC8vIHBsYXllclxyXG4gICAgbW9uZXk6IG51bWJlcjtcclxuICAgIG51bUNvbG9uaXN0czogbnVtYmVyO1xyXG4gICAgbnVtVHJhZGVyczogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b01hcDxUIGV4dGVuZHMgTW9kZWwuSUVudGl0eT4oaXQ6IEl0ZXJhYmxlPFQ+KSB7XHJcbiAgICByZXR1cm4gbmV3IE1hcChJbW11dGFibGVcclxuICAgICAgICAuU2VxKGl0KVxyXG4gICAgICAgIC5tYXAoKHYpID0+IFt2LmlkLCB2XSBhcyBbbnVtYmVyLCBUXSkpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2FsYXh5IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUZyb20oc2F2ZURhdGE6IElHYWxheHlTYXZlRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGdhbGF4eSA9IG5ldyBHYWxheHkoKTtcclxuICAgICAgICBnYWxheHkuZ2VuSWQgPSBzYXZlRGF0YS5nZW5JZDtcclxuICAgICAgICBnYWxheHkudHVybkNvdW50ZXIgPSBzYXZlRGF0YS50dXJuQ291bnRlcjtcclxuICAgICAgICBnYWxheHkudGltZXN0YW1wID0gc2F2ZURhdGEudGltZXN0YW1wO1xyXG4gICAgICAgIGdhbGF4eS5tb25leSA9IHNhdmVEYXRhLm1vbmV5O1xyXG4gICAgICAgIGdhbGF4eS5udW1Db2xvbmlzdHMgPSBzYXZlRGF0YS5udW1Db2xvbmlzdHM7XHJcbiAgICAgICAgZ2FsYXh5Lm51bVRyYWRlcnMgPSBzYXZlRGF0YS5udW1UcmFkZXJzO1xyXG5cclxuICAgICAgICBjb25zdCBjb29ycyA9IHRvTWFwKHNhdmVEYXRhLmxvY2F0YWJsZXMpO1xyXG5cclxuICAgICAgICBjb25zdCBpbnZlbnRvcmllcyA9IHRvTWFwKEltbXV0YWJsZVxyXG4gICAgICAgICAgICAuU2VxKHNhdmVEYXRhLmFsbEludmVudG9yaWVzKVxyXG4gICAgICAgICAgICAubWFwKCh4KSA9PiBuZXcgTW9kZWwuSW52ZW50b3J5KHguaWQsIHgubWF4U3RvcmFnZSA9PT0gbnVsbCA/IEluZmluaXR5IDogeC5tYXhTdG9yYWdlLCB4LmludmVudG9yeSkpKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGxhbmV0cyA9IHRvTWFwKEltbXV0YWJsZVxyXG4gICAgICAgICAgICAuU2VxKHNhdmVEYXRhLmFsbFBsYW5ldHMpXHJcbiAgICAgICAgICAgIC5tYXAoKHgpID0+IG5ldyBNb2RlbC5QbGFuZXQoeC5pZCwgeC5yZXNvdXJjZSkpKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwbGFuZXQgb2YgcGxhbmV0cy52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb29yID0gY29vcnMuZ2V0KHBsYW5ldC5pZCkhO1xyXG4gICAgICAgICAgICBnYWxheHkuYWRkT2JqKHBsYW5ldCwgY29vci5jb29yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbG9uaWVzID0gdG9NYXAoc2F2ZURhdGEuYWxsQ29sb25pZXNcclxuICAgICAgICAgICAgLm1hcCgoeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVySW52ZW50b3J5ID0gaW52ZW50b3JpZXMuZ2V0KHgucGxheWVySW52ZW50b3J5SWQpITtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHBsYXllckludmVudG9yeSAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtldEludmVudG9yeSA9IGludmVudG9yaWVzLmdldCh4Lm1hcmtldEludmVudG9yeUlkKSE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChwbGF5ZXJJbnZlbnRvcnkgIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob21lUGxhbmV0ID0gcGxhbmV0cy5nZXQoeC5ob21lUGxhbmV0SWQpITtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGhvbWVQbGFuZXQgIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvbnkgPSBuZXcgTW9kZWwuQ29sb255KHguaWQsIGhvbWVQbGFuZXQsIHgucG9wdWxhdGlvbiwgcGxheWVySW52ZW50b3J5LCBtYXJrZXRJbnZlbnRvcnksIHgubWF4UG9wdWxhdGlvbiwgeC5pc0xvY2tQb3B1bGF0aW9uLCB4LnBvd2VyUGxhbmV0TGV2ZWwsIHgucG93ZXJPdXRwdXRFZmYsIHguZm9vZEhhcHBpbmVzcywgeC5sdXh1cnlIYXBwaW5lc3MsIHguY29tbW9uSGFwcGluZXNzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvbnk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgY29sb25pZXMuZm9yRWFjaCgoY29sb255KSA9PiB7XHJcbiAgICAgICAgICAgIGdhbGF4eS5jb2xvbml6ZVBsYW5ldEhlbHBlcihjb2xvbnksIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnYWxheHkuY2FsVHJhZGVSb3V0ZXMoKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGluZHVzdHJpZXNcclxuICAgICAgICBzYXZlRGF0YS5hbGxJbmR1c3RyaWVzXHJcbiAgICAgICAgICAgIC5tYXAoKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9ueSA9IGNvbG9uaWVzLmdldCh4LmNvbG9ueUlkKSE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmR1c3RyeSA9IG5ldyBNb2RlbC5JbmR1c3RyeSh4LmlkLCB4LnByb2R1Y3RUeXBlLCBjb2xvbnksIHguc2NhbGUsIHgub3BlcmF0aW9uYWxFZmYpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZHVzdHJ5O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoaW5kdXN0cnkpID0+IGdhbGF4eS5hZGRJbmR1c3RyeUhlbHBlcihpbmR1c3RyeSkpO1xyXG5cclxuICAgICAgICBzYXZlRGF0YS5hbGxGbGVldHNcclxuICAgICAgICAgICAgLmZvckVhY2goKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmdvID0gaW52ZW50b3JpZXMuZ2V0KHguY2FyZ29JZCkhO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoY2FyZ28gIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZSA9IHgucm91dGUubWFwKChpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IGNvbG9uaWVzLmdldChpZCkhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHJldCAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmbGVldCA9IG5ldyBNb2RlbC5GbGVldCh4LmlkLCBjYXJnbywgcm91dGUsIHgucm91dGVBdCwgeC5zdGF0ZSwgeC5pc1JldGlyaW5nKTtcclxuICAgICAgICAgICAgICAgIGdhbGF4eS5hZGRPYmooZmxlZXQsIGNvb3JzLmdldChmbGVldC5pZCkhLmNvb3IpO1xyXG4gICAgICAgICAgICAgICAgZ2FsYXh5LmFkZFRyYWRlRmxlZXRIZWxwZXIoZmxlZXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ2FsYXh5LmNhbFJvdXRlRnVlbEVmZigpO1xyXG4gICAgICAgIGdhbGF4eS5jYWxHYWxhY3RpY01hcmtldFN0YXRzKCk7XHJcbiAgICAgICAgcmV0dXJuIGdhbGF4eTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vIGNhY2hlZCwgbWVtb2l6ZWQsIGNhbGN1bGF0ZWQtb24tdGhlLWZseSB0YWJsZXNcclxuXHJcbiAgICAvLyBhcnJhbmdlZCBpbnRvIGEgdGlsZSBncmlkLCB3aGVyZSBvYmplY3QgY29vcmRpbmF0ZXMgYXJlIGNlaWxlZFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb29ySW5kaWNlcyA9IG5ldyBBbGdvLlR1cGxlTWFwPFtudW1iZXIsIG51bWJlcl0sIFNldDxJTG9jYXRhYmxlPj4oKTtcclxuICAgIHByaXZhdGUgdHJhZGVSb3V0ZXMgPSBuZXcgTWFwPE1vZGVsLkNvbG9ueSwgTW9kZWwuQ29sb255W10+KCk7XHJcblxyXG4gICAgLy8gZGVtYW5kLXN1cHBseSwgdHJhZGUgcm91dGVzXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGdhbGFjdGljRGVtYW5kcyA9IG5ldyBNYXA8TW9kZWwuUHJvZHVjdCwgbnVtYmVyPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBnYWxhY3RpY1N1cHBsaWVzID0gbmV3IE1hcDxNb2RlbC5Qcm9kdWN0LCBudW1iZXI+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGdhbGFjdGljUHJvZENhcCA9IG5ldyBNYXA8TW9kZWwuUHJvZHVjdCwgbnVtYmVyPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb3duc3RyZWFtQ29uc3VtZXJzID0gbmV3IEFsZ28uVHVwbGVNYXA8W01vZGVsLkNvbG9ueSwgTW9kZWwuQ29sb255XSwgTWFwPE1vZGVsLlByb2R1Y3QsIE1vZGVsLkNvbG9ueVtdPj4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uc3VtZXJzID0gTW9kZWxcclxuICAgICAgICAuYWxsUHJvZHVjdHMoKVxyXG4gICAgICAgIC5tYXAoKCkgPT4gbmV3IFNldDxNb2RlbC5Db2xvbnk+KCkpO1xyXG4gICAgcHJpdmF0ZSB0cmFkZVJvdXRlUGF0aHM6IEFsZ28uRmxveWRXYXJzaGFsbDxNb2RlbC5Db2xvbnk+O1xyXG4gICAgcHJpdmF0ZSBmbGVldEZ1ZWxFZmYgPSBuZXcgQWxnby5PcmRlckxpc3RNYXA8TW9kZWwuQ29sb255LCBudW1iZXI+KChhLCBiKSA9PiBhLmlkIC0gYi5pZCk7XHJcblxyXG4gICAgLy8vLyBnYW1lIGVudGl0aWVzICYgcmVsYXRpb25zaGlwc1xyXG5cclxuICAgIC8vIG1hcCBvYmplY3RzICYgdGhlaXIgY29vcmRpbmF0ZXNcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29sb25pZXM6IE1vZGVsLkNvbG9ueVtdID0gW107XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvY2F0YWJsZUNvb3JzID0gbmV3IE1hcDxJTG9jYXRhYmxlLCBDb29yVD4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29sb255SW5kdXN0cmllcyA9IG5ldyBNYXA8TW9kZWwuQ29sb255LCBTZXQ8TW9kZWwuSW5kdXN0cnk+PigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmFkZUZsZWV0cyA9IG5ldyBBbGdvLk9yZGVyTGlzdE1hcDxNb2RlbC5Db2xvbnksIFNldDxNb2RlbC5GbGVldD4+KChhLCBiKSA9PiBhLmlkIC0gYi5pZCk7XHJcblxyXG4gICAgLy8gaW50ZXJuYWwgdmFyaWFibGVzXHJcbiAgICBwcml2YXRlIGdlbklkID0gLTE7XHJcbiAgICBwcml2YXRlIHR1cm5Db3VudGVyID0gLTE7XHJcbiAgICBwcml2YXRlIHRpbWVzdGFtcCA9IDE7XHJcblxyXG4gICAgLy8gcGxheWVyXHJcbiAgICBwcml2YXRlIG1vbmV5ID0gU1RBUlRJTkdfQ0FQSVRBTDtcclxuICAgIHByaXZhdGUgbnVtQ29sb25pc3RzID0gNTtcclxuICAgIHByaXZhdGUgbnVtVHJhZGVycyA9IDEwO1xyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxvY2F0YWJsZXM6IEltbXV0YWJsZVxyXG4gICAgICAgICAgICAgICAgLlNlcSh0aGlzLmxvY2F0YWJsZUNvb3JzKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoW29iaiwgY29vcl0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogb2JqLmlkLCBraW5kOiBvYmoua2luZCwgY29vciB9IGFzIElMb2NhdGFibGUgJiBJQ29vcjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpLFxyXG4gICAgICAgICAgICBhbGxJbnZlbnRvcmllczogdGhpcy5jb2xvbmllc1xyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjLnB1c2goeC5nZXRQbGF5ZXJJbnZlbnRvcnkoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjLnB1c2goeC5nZXRNYXJrZXRJbnZlbnRvcnkoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgIH0sIFtdIGFzIE1vZGVsLkludmVudG9yeVtdKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCguLi5JbW11dGFibGVcclxuICAgICAgICAgICAgICAgICAgICAuU2VxKEFsZ28uY29tYmluZUl0KC4uLnRoaXMudHJhZGVGbGVldHMudmFsdWVzKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHgpID0+IHguZ2V0Q2FyZ28oKSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh4KSA9PiB4LnNlcmlhbGl6ZSgpKSxcclxuICAgICAgICAgICAgYWxsSW5kdXN0cmllczogSW1tdXRhYmxlXHJcbiAgICAgICAgICAgICAgICAuU2VxKEFsZ28uY29tYmluZUl0KC4uLnRoaXMuY29sb255SW5kdXN0cmllcy52YWx1ZXMoKSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKChpbmR1c3RyeSkgPT4gaW5kdXN0cnkuc2VyaWFsaXplKCkpXHJcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpLFxyXG4gICAgICAgICAgICBhbGxGbGVldHM6IEltbXV0YWJsZVxyXG4gICAgICAgICAgICAgICAgLlNlcShBbGdvLmNvbWJpbmVJdCguLi50aGlzLnRyYWRlRmxlZXRzLnZhbHVlcygpKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKHgpID0+IHguc2VyaWFsaXplKCkpXHJcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpLFxyXG4gICAgICAgICAgICBhbGxQbGFuZXRzOiBJbW11dGFibGVcclxuICAgICAgICAgICAgICAgIC5TZXEodGhpcy5sb2NhdGFibGVDb29ycy5rZXlzKCkpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh4KSA9PiB4LmtpbmQgPT09IE1hcERhdGFLaW5kLlBsYW5ldClcclxuICAgICAgICAgICAgICAgIC5tYXAoKHgpID0+ICh4IGFzIE1vZGVsLlBsYW5ldCkuc2VyaWFsaXplKCkpXHJcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpLFxyXG4gICAgICAgICAgICBhbGxDb2xvbmllczogdGhpcy5jb2xvbmllcy5tYXAoKHgpID0+IHguc2VyaWFsaXplKCkpLFxyXG5cclxuICAgICAgICAgICAgLy8gZ2FtZSBkYXRhXHJcbiAgICAgICAgICAgIGdlbklkOiB0aGlzLmdlbklkLFxyXG4gICAgICAgICAgICB0dXJuQ291bnRlcjogdGhpcy50dXJuQ291bnRlcixcclxuICAgICAgICAgICAgdGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcCxcclxuICAgICAgICAgICAgbW9uZXk6IHRoaXMubW9uZXksXHJcbiAgICAgICAgICAgIG51bUNvbG9uaXN0czogdGhpcy5udW1Db2xvbmlzdHMsXHJcbiAgICAgICAgICAgIG51bVRyYWRlcnM6IHRoaXMubnVtVHJhZGVycyxcclxuICAgICAgICB9IGFzIElHYWxheHlTYXZlRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlSW52ZW50b3J5KG1heFN0b3JhZ2U6IG51bWJlciA9IEluZmluaXR5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNb2RlbC5JbnZlbnRvcnkodGhpcy5uZXh0SWQoKSwgbWF4U3RvcmFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlcG9zaXQoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1vbmV5ICs9IGFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2l0aGRyYXcoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1vbmV5IC09IGFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkUGxhbmV0cyhudW06IG51bWJlciwgbWluRGlzdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgcmF3cyA9IE1vZGVsLlJBV19NQVRFUklBTFM7XHJcbiAgICAgICAgY29uc3QgbnVtUmF3cyA9IHJhd3MubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGJvdW5kID0gbnVtIC8gMjtcclxuXHJcbiAgICAgICAgY29uc3QgZmluZENvb3JGb3JQbGFuZXRzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29vcnMgPSBuZXcgQWxnby5UdXBsZVNldDxNb2RlbC5Db29yVD4oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5haXZlIGFsZ29yaXRobVxyXG4gICAgICAgICAgICBORVhUX0NBTkRJREFURTogd2hpbGUgKGNvb3JzLnNpemUoKSA8IG51bSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gdGhpcy5yYW5kb21Db29yKGJvdW5kKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29vciBvZiBjb29ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChBbGdvLmRpc3RhbmNlMkQoY2FuZGlkYXRlLCBjb29yKSA8IG1pbkRpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUgTkVYVF9DQU5ESURBVEU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29vcnMuYWRkKGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvb3JzLnZhbHVlcygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29vciBvZiBmaW5kQ29vckZvclBsYW5ldHMoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwbGFuZXQgPSBuZXcgTW9kZWwuUGxhbmV0KHRoaXMubmV4dElkKCksIHJhd3NbaSAlIG51bVJhd3NdKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPYmoocGxhbmV0LCBjb29yKTtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbFRyYWRlUm91dGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRyYWRlRmxlZXQoZnJvbTogTW9kZWwuQ29sb255LCB0bzogTW9kZWwuQ29sb255KSB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQodGhpcy5udW1UcmFkZXJzID49IDEpO1xyXG4gICAgICAgIHRoaXMubnVtVHJhZGVycy0tO1xyXG5cclxuICAgICAgICBjb25zdCBmbGVldCA9IG5ldyBNb2RlbC5GbGVldCh0aGlzLm5leHRJZCgpLCB0aGlzLmNyZWF0ZUludmVudG9yeSgxMDAwKSwgW2Zyb20sIHRvXSk7XHJcbiAgICAgICAgdGhpcy5hZGRPYmooZmxlZXQsIHRoaXMuZ2V0Q29vcihmcm9tKSk7XHJcbiAgICAgICAgdGhpcy5hZGRUcmFkZUZsZWV0SGVscGVyKGZsZWV0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZsZWV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVGbGVldChmbGVldDogTW9kZWwuRmxlZXQpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSBmbGVldC5nZXRSb3V0ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHJvdXRlLmxlbmd0aCA9PT0gMik7XHJcbiAgICAgICAgY29uc3QgY29sb255MSA9IHJvdXRlWzBdO1xyXG4gICAgICAgIGNvbnN0IGNvbG9ueTIgPSByb3V0ZVsxXTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGRhdGEsIHRoZW4gdGhlIGluZGV4XHJcbiAgICAgICAgY29uc3QgYWxsRmxlZXRzID0gdGhpcy50cmFkZUZsZWV0cy5nZXQoY29sb255MSwgY29sb255MikhO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGFsbEZsZWV0cyAhPT0gdW5kZWZpbmVkKTsgLy8gb3RoZXJ3aXNlIHJlbW92aW5nIGFuIG5vbmV4aXN0IG9iamVjdFxyXG4gICAgICAgIGNvbnN0IGlzRGVsZXRlZCA9IGFsbEZsZWV0cy5kZWxldGUoZmxlZXQpO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGlzRGVsZXRlZCk7IC8vIG90aGVyd2lzZSByZW1vdmluZyBhbiBub25leGlzdCBvYmplY3RcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVPYmooZmxlZXQpO1xyXG4gICAgICAgIHRoaXMubnVtVHJhZGVycysrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROdW1Vc2VkVHJhZGVycyhmcm9tOiBNb2RlbC5Db2xvbnksIHRvOiBNb2RlbC5Db2xvbnkpIHtcclxuICAgICAgICBjb25zdCBhbGxGbGVldHMgPSB0aGlzLnRyYWRlRmxlZXRzLmdldChmcm9tLCB0byk7XHJcbiAgICAgICAgaWYgKGFsbEZsZWV0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGxGbGVldHMuc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG51bUNvbG9uaWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9uaWVzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzVHJhZGVSb3V0ZShmcm9tOiBNb2RlbC5Db2xvbnksIHRvOiBNb2RlbC5Db2xvbnkpIHtcclxuICAgICAgICBjb25zdCBlZGdlcyA9IHRoaXMudHJhZGVSb3V0ZXMuZ2V0KGZyb20pO1xyXG4gICAgICAgIHJldHVybiBlZGdlcyAmJiBlZGdlcy5zb21lKCh4KSA9PiB4ID09PSB0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbG9uaXplUGxhbmV0KHBsYW5ldDogTW9kZWwuUGxhbmV0LCBwb3B1bGF0aW9uOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0aGlzLm51bUNvbG9uaXN0cyA+PSAxKTtcclxuICAgICAgICB0aGlzLm51bUNvbG9uaXN0cyAtPSAxO1xyXG4gICAgICAgIGNvbnN0IGNvbG9ueSA9IG5ldyBNb2RlbC5Db2xvbnkodGhpcy5uZXh0SWQoKSwgcGxhbmV0LCBwb3B1bGF0aW9uLCB0aGlzLmNyZWF0ZUludmVudG9yeSgpLCB0aGlzLmNyZWF0ZUludmVudG9yeSgpKTtcclxuICAgICAgICB0aGlzLmNvbG9uaXplUGxhbmV0SGVscGVyKGNvbG9ueSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9ueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5kdXN0cmllcyhjb2xvbnk6IE1vZGVsLkNvbG9ueSkge1xyXG4gICAgICAgIHJldHVybiBBbGdvLmdldE9yKHRoaXMuY29sb255SW5kdXN0cmllcywgY29sb255LCAoKSA9PiBuZXcgU2V0PE1vZGVsLkluZHVzdHJ5PigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSW5kdXN0cnkocHJvZHVjdFR5cGU6IE1vZGVsLlByb2R1Y3QsIGNvbG9ueTogTW9kZWwuQ29sb255KSB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoY29sb255ICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgIGNvbnN0IGluZHVzdHJ5ID0gbmV3IE1vZGVsLkluZHVzdHJ5KHRoaXMubmV4dElkKCksIHByb2R1Y3RUeXBlLCBjb2xvbnkpO1xyXG4gICAgICAgIHRoaXMuYWRkSW5kdXN0cnlIZWxwZXIoaW5kdXN0cnkpO1xyXG4gICAgICAgIHJldHVybiBpbmR1c3RyeTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2h1dGRvd25JbmR1c3RyeShjb2xvbnk6IE1vZGVsLkNvbG9ueSwgaW5kdXN0cnk6IE1vZGVsLkluZHVzdHJ5KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZHVzdHJpZXMgPSB0aGlzLmNvbG9ueUluZHVzdHJpZXMuZ2V0KGNvbG9ueSkhO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGluZHVzdHJpZXMgIT09IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgIC8vIGdldCBkZXBlbmRlZCBwcm9kdWN0cyBmb3IgYWxsIGluZHVzdHJpZXMgZXhwZWN0IHRoZSB0YXJnZXRcclxuICAgICAgICBjb25zdCBvdmVyYWxsID0gSW1tdXRhYmxlXHJcbiAgICAgICAgICAgIC5TZXEoaW5kdXN0cmllcylcclxuICAgICAgICAgICAgLmZpbHRlcigoaW5kdXN0cnkyKSA9PiBpbmR1c3RyeTIgIT09IGluZHVzdHJ5KVxyXG4gICAgICAgICAgICAucmVkdWNlKChhY2MsIGluZHVzdHJ5MikgPT4gYWNjLnVuaW9uKHRoaXMuZ2V0RGVtYW5kZWRQcm9kdWN0cyhpbmR1c3RyeTIpKSwgSW1tdXRhYmxlLlNldDxNb2RlbC5Qcm9kdWN0PigpKTtcclxuICAgICAgICBjb25zdCBkZXBlbmQgPSB0aGlzLmdldERlbWFuZGVkUHJvZHVjdHMoaW5kdXN0cnkpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgZGVwZW5kLnN1YnRyYWN0KG92ZXJhbGwpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRGVsZXRlZCA9IHRoaXMuY29uc3VtZXJzW3Byb2R1Y3RdLmRlbGV0ZShjb2xvbnkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydChpc0RlbGV0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRGVsZXRlZCA9IGluZHVzdHJpZXMuZGVsZXRlKGluZHVzdHJ5KTtcclxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoaXNEZWxldGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1vbmV5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vbmV5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROdW1Db2xvbmlzdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtQ29sb25pc3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROdW1VbnVzZWRUcmFkZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bVRyYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRyYWRlcigpIHtcclxuICAgICAgICB0aGlzLm51bVRyYWRlcnMgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQ29sb25pc3RzKGdyb3d0aERlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChncm93dGhEZWx0YSA+PSAwKTtcclxuICAgICAgICB0aGlzLm51bUNvbG9uaXN0cyArPSBncm93dGhEZWx0YSAvIDEwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSb3V0ZUZ1ZWxFZmYoZnJvbTogTW9kZWwuQ29sb255LCB0bzogTW9kZWwuQ29sb255KSB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gdGhpcy5mbGVldEZ1ZWxFZmYuZ2V0KGZyb20sIHRvKSE7XHJcbiAgICAgICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXN0YW1wICUgTW9kZWwuWUVBUl9QRVJfVElDSztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0WWVhcigpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMudGltZXN0YW1wIC8gTW9kZWwuWUVBUl9QRVJfVElDSyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRpbWVzdGFtcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lc3RhbXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjb3JlKCkge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRoaXMudGltZXN0YW1wICE9PSAwKTtcclxuICAgICAgICBjb25zdCBzY29yZSA9ICh0aGlzLm1vbmV5IC0gU1RBUlRJTkdfQ0FQSVRBTCkgLyB0aGlzLnRpbWVzdGFtcDtcclxuICAgICAgICBpZiAoc2NvcmUgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChzY29yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9ncmVzcyBhIHRpY2s7IHJldHVybiB0cnVlIGlmIHRoZSB0aWNrIGlzIGFsc28gdGhlIHN0YXJ0IG9mIGEgbmV3IHR1cm4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0dXJuKCkge1xyXG5cclxuICAgICAgICBjb25zdCBmbGVldHMgPSBBbGdvLmNvbWJpbmVJdCguLi50aGlzLnRyYWRlRmxlZXRzLnZhbHVlcygpKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZsZWV0IG9mIGZsZWV0cykge1xyXG4gICAgICAgICAgICBmbGVldC5vcGVyYXRlKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnR1cm5Db3VudGVyID0gKHRoaXMudHVybkNvdW50ZXIgKyAxKSAlIEJJR19UVVJOO1xyXG4gICAgICAgIGlmICh0aGlzLnR1cm5Db3VudGVyICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgKz0gMTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW9uZXkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uZXkgKj0gMSArIE1vZGVsLkFOTlVBTF9JTlRFUkVTVCAvIE1vZGVsLllFQVJfUEVSX1RJQ0s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbFJvdXRlRnVlbEVmZigpO1xyXG4gICAgICAgIHRoaXMuY2FsR2FsYWN0aWNNYXJrZXRTdGF0cygpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNvbG9ueSBvZiB0aGlzLmNvbG9uaWVzKSB7XHJcbiAgICAgICAgICAgIGNvbG9ueS5yZWNhbGN1bGF0ZSh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBpbmR1c3RyaWVzIG9mIHRoaXMuY29sb255SW5kdXN0cmllcy52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGluZHVzdHJ5IG9mIGluZHVzdHJpZXMpIHtcclxuICAgICAgICAgICAgICAgIGluZHVzdHJ5Lm9wZXJhdGUodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBjb2xvbnkgb2YgdGhpcy5jb2xvbmllcykge1xyXG4gICAgICAgICAgICBjb2xvbnkudHJhZGUodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29vcihvYmo6IE1vZGVsLklMb2NhdGFibGUgfCBNb2RlbC5Db2xvbnkpIHtcclxuICAgICAgICBsZXQgcmV0O1xyXG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBNb2RlbC5Db2xvbnkpIHtcclxuICAgICAgICAgICAgY29uc3QgcGxhbmV0ID0gb2JqLmdldEhvbWVQbGFuZXQoKTtcclxuICAgICAgICAgICAgcmV0ID0gdGhpcy5sb2NhdGFibGVDb29ycy5nZXQocGxhbmV0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXQgPSB0aGlzLmxvY2F0YWJsZUNvb3JzLmdldChvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmFzc2VydChyZXQgIT09IHVuZGVmaW5lZCk7IC8vIGZpeCBjYWxsZXJcclxuICAgICAgICByZXR1cm4gcmV0ITtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T2JqcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGFibGVDb29ycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T2JqKGF0OiBDb29yVCwga2luZDogTWFwRGF0YUtpbmQuUGxhbmV0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgICAgICAgICAgLnNlYXJjaE5lYXJieU9ianMoYXQpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+IHgua2luZCA9PT0ga2luZClcclxuICAgICAgICAgICAgLmZpcnN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlYXJjaE5lYXJieU9ianMoYXQ6IENvb3JULCByYWRpdXM6IG51bWJlciA9IDAsIG1pbkRpc3RhbmNlID0gMCkge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaE9icyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW2F0WCwgYXRZXSA9IGF0O1xyXG4gICAgICAgICAgICBjb25zdCBwb3NzaWJsZUNvb3JzOiBDb29yVFtdID0gW1xyXG4gICAgICAgICAgICAgICAgYXQsIC8vIGNlbnRlclxyXG4gICAgICAgICAgICAgICAgW2F0WCAtIHJhZGl1cywgYXRZIC0gcmFkaXVzXSwgLy8gdG9wLWxlZnRcclxuICAgICAgICAgICAgICAgIFthdFggKyByYWRpdXMsIGF0WSAtIHJhZGl1c10sIC8vIHRvcC1yaWdodFxyXG4gICAgICAgICAgICAgICAgW2F0WCAtIHJhZGl1cywgYXRZICsgcmFkaXVzXSwgLy8gYm90dG9tLWxlZnRcclxuICAgICAgICAgICAgICAgIFthdFggKyByYWRpdXMsIGF0WSArIHJhZGl1c10sIC8vIGJvdHRvbS1yaWdodFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc29ydGVkID0gcG9zc2libGVDb29yc1xyXG4gICAgICAgICAgICAgICAgLm1hcCgoY29vcikgPT4gdGhpcy5pZHhDb29yKGNvb3IpKVxyXG4gICAgICAgICAgICAgICAgLnNvcnQoQWxnby5jb21wYXJlMkQpO1xyXG4gICAgICAgICAgICByZXR1cm4gSW1tdXRhYmxlXHJcbiAgICAgICAgICAgICAgICAuU2VxKEFsZ28udW5pcShzb3J0ZWQsIEFsZ28uZXF1YWwyRCkpIC8vIGZpbmQgdW5pcSBlbGVtZW50cyBmcm9tIGEgc29ydGVkIGNvbGxlY3Rpb25cclxuICAgICAgICAgICAgICAgIC5tYXAoKGNvb3IpID0+IHRoaXMuZ2V0SWR4KGNvb3IpKSAvLyBleHRyYSBvYmplY3RzIGZyb20gY29vcmRpbmF0ZXNcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MudW5pb24oY3VyKSwgSW1tdXRhYmxlLlNldDxNb2RlbC5JTG9jYXRhYmxlPigpKSAvLyBmbGF0dGVuIGNvbGxlY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yID0gdGhpcy5nZXRDb29yKG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzdCA9IEFsZ28uZGlzdGFuY2UyRChjb29yLCBhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpc3QgPj0gbWluRGlzdGFuY2UgJiYgZGlzdCA8PSByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByb3V0ZXMgPSB0aGlzLnNlYXJjaFRyYWRlUm91dGVzKGF0LCByYWRpdXMpO1xyXG4gICAgICAgIGNvbnN0IG9ianMgPSBzZWFyY2hPYnMoKTtcclxuICAgICAgICByZXR1cm4gb2Jqcy5jb25jYXQocm91dGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZShvYmo6IElMb2NhdGFibGUsIHRvOiBDb29yVCwgc3BlZWQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICBjb25zdCBmaW5hbFNwZWVkID0gc3BlZWQgLyBCSUdfVFVSTjtcclxuXHJcbiAgICAgICAgY29uc3QgbmV4dFBvcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXQgPSB0aGlzLmxvY2F0YWJsZUNvb3JzLmdldChvYmopITtcclxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoYXQgIT09IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxlZnQgPSBBbGdvLmRpc3RhbmNlMkQodG8sIGF0KTtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlTGVmdCA8IGZpbmFsU3BlZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsb3NlIGVub3VnaFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXN0VHJhdmVsbGVkOiBkaXN0YW5jZUxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm93QXQ6IHRvLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGZhciBhd2F5LCBrZWVwIG1vdmluZ1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyID0gQWxnby5zdWJ0cmFjdDJEKHRvLCBhdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBBbGdvLm5vcm0yRChkaXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGxhY2VtZW50ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIGRpclswXSAvIGxlbmd0aCAqIGZpbmFsU3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyWzFdIC8gbGVuZ3RoICogZmluYWxTcGVlZF0gYXMgW251bWJlciwgbnVtYmVyXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdFRyYXZlbGxlZDogbGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vd0F0OiBBbGdvLnN1bTJEKGF0LCBkaXNwbGFjZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJldCA9IG5leHRQb3MoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU9iaihvYmosIHJldC5ub3dBdCk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VHJhZGVSb3V0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhZGVSb3V0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEdhbGFjdGljRGVtYW5kcyhwcm9kdWN0OiBNb2RlbC5Qcm9kdWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIEFsZ28uZ2V0UXR5KHRoaXMuZ2FsYWN0aWNEZW1hbmRzLCBwcm9kdWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0R2FsYWN0aWNTdXBwbGllcyhwcm9kdWN0OiBNb2RlbC5Qcm9kdWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIEFsZ28uZ2V0UXR5KHRoaXMuZ2FsYWN0aWNTdXBwbGllcywgcHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEdhbGFjdGljUHJvZENhcChwcm9kdWN0OiBNb2RlbC5Qcm9kdWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIEFsZ28uZ2V0UXR5KHRoaXMuZ2FsYWN0aWNQcm9kQ2FwLCBwcm9kdWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RG93bnN0cmVhbUNvbnN1bWVycyhwcm9kdWN0OiBNb2RlbC5Qcm9kdWN0LCBmcm9tOiBNb2RlbC5Db2xvbnksIG5leHQ6IE1vZGVsLkNvbG9ueSkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmFzc2VydChmcm9tICE9PSBuZXh0KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjYWwgPSAoKSA9PiBuZXcgTWFwKE1vZGVsXHJcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBkb3duc3RyZWFtIHNvdXJjZXMgZm9yIGFsbCBwcm9kdWN0c1xyXG4gICAgICAgICAgICAuYWxsUHJvZHVjdHMoKVxyXG4gICAgICAgICAgICAubWFwKChwcm9kdWN0MikgPT4gW1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdDIsXHJcbiAgICAgICAgICAgICAgICAvLyBmaW5kIGFsbCBkb3duc3RyZWFtIHNvdXJjZXMgdGhhdCBwYXNzIHRocm91Z2ggXCJuZXh0XCJcclxuICAgICAgICAgICAgICAgIEFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgLmZyb20odGhpcy5jb25zdW1lcnNbcHJvZHVjdDJdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVuZFBvaW50KSA9PiBlbmRQb2ludCAhPT0gZnJvbSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRUcmFkZU5vZGUoZnJvbSwgZW5kUG9pbnQpID09PSBuZXh0KSxcclxuICAgICAgICAgICAgXSBhcyBbTW9kZWwuUHJvZHVjdCwgTW9kZWwuQ29sb255W11dKSk7XHJcblxyXG4gICAgICAgIC8vIGxhemlseSBjYWxjdWxhdGVzIGFsbCBkb3duc3RyZWFtIHNvdXJjZXNcclxuICAgICAgICBjb25zdCBjb25zdW1lcnMgPSB0aGlzLmRvd25zdHJlYW1Db25zdW1lcnMuZ2V0T3JTZXQoW2Zyb20sIG5leHRdLCAoKSA9PiByZWNhbCgpKTtcclxuICAgICAgICBjb25zdCByZXQgPSBjb25zdW1lcnMuZ2V0KHByb2R1Y3QpITtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChyZXQgIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhpc3RzKG9iajogSUxvY2F0YWJsZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2F0YWJsZUNvb3JzLmhhcyhvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV4dFRyYWRlTm9kZShmcm9tOiBNb2RlbC5Db2xvbnksIHRvOiBNb2RlbC5Db2xvbnkpIHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChmcm9tICE9PSB0byk7IC8vIGNhbGxlciBjaGVja3MgdGhpc1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRoaXMudHJhZGVSb3V0ZVBhdGhzICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgIGNvbnN0IHJldCA9IHRoaXMudHJhZGVSb3V0ZVBhdGhzLm5leHQoZnJvbSwgdG8pO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHJldCAhPT0gdW5kZWZpbmVkKTsgLy8gc2luY2Ugd2UncmUgZGVhbGluZyB3aXRoIHRoZSBtaW5pbXVtIHNwYW5uaW5nIHRyZWUgb2YgYSBjb21wbGV0ZSB1bmRpcmVjdGVkIGdyYXBoLCBhbGwgdmVydGljZXMgYXJlIHJlYWNoYWJsZVxyXG4gICAgICAgIHJldHVybiByZXQhO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsR2FsYWN0aWNNYXJrZXRTdGF0cygpIHtcclxuICAgICAgICB0aGlzLmdhbGFjdGljRGVtYW5kcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZ2FsYWN0aWNQcm9kQ2FwLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5nYWxhY3RpY1N1cHBsaWVzLmNsZWFyKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb2xvbnkgb2YgdGhpcy5jb2xvbmllcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgYWxsUHJvZHVjdHMoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVtYW5kUXR5ID0gY29sb255LmdldERlbWFuZChwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgIEFsZ28uZ2V0QW5kU3VtKHRoaXMuZ2FsYWN0aWNEZW1hbmRzLCBwcm9kdWN0LCBkZW1hbmRRdHkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1cHBseVF0eSA9IGNvbG9ueS5nZXRTdXBwbHkocHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICBBbGdvLmdldEFuZFN1bSh0aGlzLmdhbGFjdGljU3VwcGxpZXMsIHByb2R1Y3QsIHN1cHBseVF0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZENhcCA9IGNvbG9ueS5nZXRQcm9kQ2FwKHRoaXMsIHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAgICAgQWxnby5nZXRBbmRTdW0odGhpcy5nYWxhY3RpY1Byb2RDYXAsIHByb2R1Y3QsIHByb2RDYXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsVHJhZGVSb3V0ZXMoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gKGE6IE1vZGVsLkNvbG9ueSwgYjogTW9kZWwuQ29sb255KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JBID0gdGhpcy5nZXRDb29yKGEpO1xyXG4gICAgICAgICAgICBjb25zdCBjb29yQiA9IHRoaXMuZ2V0Q29vcihiKTtcclxuICAgICAgICAgICAgcmV0dXJuIEFsZ28uZGlzdGFuY2UyRChjb29yQSwgY29vckIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHZlcnRpY2VzID0gbmV3IFNldCh0aGlzLmNvbG9uaWVzKTtcclxuXHJcbiAgICAgICAgLy8gZmluZCBhIG1pbmltdW0gc3Bhbm5pbmcgdHJlZSBmb3IgdGhlIHRyYWRlIHJvdXRlIG1hcFxyXG4gICAgICAgIHRoaXMudHJhZGVSb3V0ZXMgPSBBbGdvLmtydXNrYWxNU1QoXHJcbiAgICAgICAgICAgIHZlcnRpY2VzLFxyXG4gICAgICAgICAgICAodmVydGV4OiBNb2RlbC5Db2xvbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbXBsZXRlIGdyYXBoIGZvciBub3dcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IG5ldyBTZXQodmVydGljZXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0LmRlbGV0ZSh2ZXJ0ZXgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldC52YWx1ZXMoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGE6IE1vZGVsLkNvbG9ueSwgYjogTW9kZWwuQ29sb255KSA9PiBkaXN0YW5jZShhLCBiKSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBwcmUtY29tcHV0ZSBhbGwtcGFpciBzaG9ydGVzdCBwYXRocyBmb3IgdGhlIHRyYWRlIHJvdXRlc1xyXG4gICAgICAgIHRoaXMudHJhZGVSb3V0ZVBhdGhzID0gbmV3IEFsZ28uRmxveWRXYXJzaGFsbCh0aGlzLnRyYWRlUm91dGVzLFxyXG4gICAgICAgICAgICAoYTogTW9kZWwuQ29sb255LCBiOiBNb2RlbC5Db2xvbnkpID0+IGRpc3RhbmNlKGEsIGIpKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb3duc3RyZWFtQ29uc3VtZXJzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRPYmoob2JqOiBJTG9jYXRhYmxlLCBjb29yOiBDb29yVCkge1xyXG4gICAgICAgIHRoaXMubG9jYXRhYmxlQ29vcnMuc2V0KG9iaiwgY29vcik7XHJcbiAgICAgICAgdGhpcy5hZGRUb0lkeChvYmosIGNvb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlT2JqKG9iajogSUxvY2F0YWJsZSwgY29vcjogQ29vclQpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUZyb21JZHgob2JqKTtcclxuICAgICAgICB0aGlzLmxvY2F0YWJsZUNvb3JzLnNldChvYmosIGNvb3IpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9JZHgob2JqLCBjb29yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlkeENvb3IoW3gsIHldOiBDb29yVCk6IENvb3JUIHtcclxuICAgICAgICByZXR1cm4gW01hdGguZmxvb3IoeCksIE1hdGguZmxvb3IoeSldO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlRnJvbUlkeChvYmo6IElMb2NhdGFibGUpIHtcclxuICAgICAgICBjb25zdCBjb29yID0gdGhpcy5sb2NhdGFibGVDb29ycy5nZXQob2JqKSE7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoY29vciAhPT0gdW5kZWZpbmVkKTsgLy8gZml4IGNhbGxlcjogb2JqZWN0IG5vdCBleGlzdFxyXG5cclxuICAgICAgICBjb25zdCBpZHhDb29yID0gdGhpcy5pZHhDb29yKGNvb3IpO1xyXG4gICAgICAgIGNvbnN0IG9ianMgPSB0aGlzLmNvb3JJbmRpY2VzLmdldChpZHhDb29yKSE7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQob2JqcyAhPT0gdW5kZWZpbmVkLCBcImV4aXN0aW5nIG9iamVjdCBzaG91bGQgYmUgaW5kZXhlZFwiKTtcclxuICAgICAgICBjb25zdCBpc0RlbGV0ZWQxID0gb2Jqcy5kZWxldGUob2JqKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChpc0RlbGV0ZWQxLCBcImluZGV4IGRvZXMgbm90IGhhdmUgb2JqXCIpO1xyXG5cclxuICAgICAgICBpZiAob2Jqcy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRGVsZXRlZDIgPSB0aGlzLmNvb3JJbmRpY2VzLmRlbGV0ZShpZHhDb29yKTtcclxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoaXNEZWxldGVkMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlT2JqKG9iajogSUxvY2F0YWJsZSkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUlkeChvYmopO1xyXG4gICAgICAgIGNvbnN0IGlzRGVsZXRlZCA9IHRoaXMubG9jYXRhYmxlQ29vcnMuZGVsZXRlKG9iaik7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoaXNEZWxldGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFRvSWR4KG9iajogSUxvY2F0YWJsZSwgY29vcjogQ29vclQpIHtcclxuICAgICAgICBjb25zdCBpZHhDb29yID0gdGhpcy5pZHhDb29yKGNvb3IpO1xyXG4gICAgICAgIGNvbnN0IG9ianMgPSB0aGlzLmNvb3JJbmRpY2VzLmdldE9yU2V0KGlkeENvb3IsICgpID0+IG5ldyBTZXQoKSk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoIW9ianMuaGFzKG9iaiksIFwiZG91YmxlLWFkZGluZyBvYmplY3QgdG8gaW5kZXhcIik7XHJcbiAgICAgICAgb2Jqcy5hZGQob2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldElkeChhdDogQ29vclQpIHtcclxuICAgICAgICBjb25zdCBpZHhDb29yID0gdGhpcy5pZHhDb29yKGF0KTtcclxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLmNvb3JJbmRpY2VzLmdldChpZHhDb29yKTtcclxuICAgICAgICByZXR1cm4gaWRzID8gaWRzIDogbmV3IFNldDxNb2RlbC5JTG9jYXRhYmxlPigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFuZG9tQ29vcihib3VuZDogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLnJhbmRvbSgpICogYm91bmQsIE1hdGgucmFuZG9tKCkgKiBib3VuZF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSAqIHNlYXJjaFRyYWRlUm91dGVzKGF0OiBDb29yVCwgcmFkaXVzOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB2aXNpdGVkID0gbmV3IEFsZ28uT3JkZXJMaXN0U2V0PE1vZGVsLkNvbG9ueT4oKGMxLCBjMikgPT4gYzEuaWQgLSBjMi5pZCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbYSwgYnNdIG9mIHRoaXMuZ2V0VHJhZGVSb3V0ZXMoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb29yQSA9IHRoaXMuZ2V0Q29vcihhLmdldEhvbWVQbGFuZXQoKSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYiBvZiBicykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29vckIgPSB0aGlzLmdldENvb3IoYi5nZXRIb21lUGxhbmV0KCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZpc2l0ZWQuaGFzKGEsIGIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkLmFkZChhLCBiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gQWxnby50ZXN0TGluZVNlZ21lbnRDaXJjbGVJbnRlcnNlY3QoY29vckEsIGNvb3JCLCBhdCwgcmFkaXVzKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQWxnby5JbnRlcnNlY3Rpb24yRC5JbnRlcnNlY3Rpb246XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBbGdvLkludGVyc2VjdGlvbjJELlRhbmdlbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6IE1hcERhdGFLaW5kLlJvdXRlU2VnbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGNvb3JBLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IGNvb3JCLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGFzIElSb3V0ZVNlZ21lbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREZW1hbmRlZFByb2R1Y3RzKGluZHVzdHJ5OiBNb2RlbC5JbmR1c3RyeSkge1xyXG4gICAgICAgIHJldHVybiBNb2RlbC5JbmR1c3RyeVxyXG4gICAgICAgICAgICAuZ2V0RmxhdERlbWFuZFByb2R1Y3RzKGluZHVzdHJ5LnByb2R1Y3RUeXBlKVxyXG4gICAgICAgICAgICAudW5pb24oaW5kdXN0cnkuZ2V0T3BEZW1hbmQoKS5uZWVkZWRLaW5kcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxSb3V0ZUZ1ZWxFZmYoKSB7XHJcbiAgICAgICAgdGhpcy5mbGVldEZ1ZWxFZmYuY2xlYXIoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtmcm9tLCB0b3NdIG9mIHRoaXMudHJhZGVSb3V0ZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB0byBvZiB0b3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxlZXRGdWVsRWZmLmdldE9yU2V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9tRWZmID0gZnJvbS5nZXRQb3dlclVzYWdlRWZmKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRWZmID0gdG8uZ2V0UG93ZXJVc2FnZUVmZih0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChmcm9tRWZmICsgdG9FZmYpIC8gMjtcclxuICAgICAgICAgICAgICAgIH0sIGZyb20sIHRvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5leHRJZCgpIHtcclxuICAgICAgICByZXR1cm4gKyt0aGlzLmdlbklkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29sb25pemVQbGFuZXRIZWxwZXIoY29sb255OiBNb2RlbC5Db2xvbnksIGlzQ2FsVHJhZGVSb3V0ZXMgPSB0cnVlKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYW5ldCA9IGNvbG9ueS5nZXRIb21lUGxhbmV0KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRoaXMubG9jYXRhYmxlQ29vcnMuZ2V0KHBsYW5ldCkgIT09IHVuZGVmaW5lZCk7IC8vIHNhbml0eSBjaGVja1xyXG5cclxuICAgICAgICB0aGlzLmNvbG9uaWVzLnB1c2goY29sb255KTtcclxuICAgICAgICBwbGFuZXQuY29sb25pemVkKGNvbG9ueSk7XHJcblxyXG4gICAgICAgIC8vIG5hdHVyYWxseSBjb25zdW1lcyB0aGVzZSBnb29kcywgcHJvcG9ydGlvbmFsIHRvIHBvcHVsYXRpb25cclxuICAgICAgICBjb25zdCBjb25zdW1lckdvb2RzID0gW1xyXG4gICAgICAgICAgICBNb2RlbC5Qcm9kdWN0LkZvb2QsXHJcbiAgICAgICAgICAgIE1vZGVsLlByb2R1Y3QuRHJpbmssXHJcbiAgICAgICAgICAgIE1vZGVsLlByb2R1Y3QuQXBwYXJlbCxcclxuICAgICAgICAgICAgTW9kZWwuUHJvZHVjdC5NZWRpY2luZSxcclxuICAgICAgICAgICAgTW9kZWwuUHJvZHVjdC5BY2Nlc3NvcnksXHJcbiAgICAgICAgICAgIE1vZGVsLlByb2R1Y3QuRnVybml0dXJlLFxyXG4gICAgICAgICAgICBNb2RlbC5Qcm9kdWN0LkdhZGdldCxcclxuICAgICAgICAgICAgTW9kZWwuUHJvZHVjdC5WZWhpY2xlLFxyXG4gICAgICAgICAgICBNb2RlbC5Qcm9kdWN0LkZ1ZWwsIC8vIGRlcml2ZWQgZGVtYW5kIGZyb20gcG93ZXIgcGxhbnRzXHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgY29uc3VtZXJHb29kcykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWVyc1twcm9kdWN0XS5hZGQoY29sb255KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0NhbFRyYWRlUm91dGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsVHJhZGVSb3V0ZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRJbmR1c3RyeUhlbHBlcihpbmR1c3RyeTogTW9kZWwuSW5kdXN0cnkpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY29sb255ID0gaW5kdXN0cnkuY29sb255O1xyXG5cclxuICAgICAgICBBbGdvXHJcbiAgICAgICAgICAgIC5nZXRPclNldCh0aGlzLmNvbG9ueUluZHVzdHJpZXMsIGNvbG9ueSwgKCkgPT4gbmV3IFNldCgpKVxyXG4gICAgICAgICAgICAuYWRkKGluZHVzdHJ5KTtcclxuXHJcbiAgICAgICAgY29sb255XHJcbiAgICAgICAgICAgIC5nZXRQbGF5ZXJJbnZlbnRvcnkoKVxyXG4gICAgICAgICAgICAuYWRkRGVtYW5kU3JjKGluZHVzdHJ5KTtcclxuXHJcbiAgICAgICAgLy8gYWRkIHRvIGNvbnN1bWVyIHRhYmxlXHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHRoaXMuZ2V0RGVtYW5kZWRQcm9kdWN0cyhpbmR1c3RyeSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lcnNbcHJvZHVjdF0uYWRkKGNvbG9ueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjbGVhciBjYWNoZSwgc28gdGhhdCBmbGVldHMgd2lsbCByZWNhbGN1bGF0ZSB0aGUgZG93bnN0cmVhbSBkZW1hbmRzXHJcbiAgICAgICAgdGhpcy5kb3duc3RyZWFtQ29uc3VtZXJzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRUcmFkZUZsZWV0SGVscGVyKGZsZWV0OiBNb2RlbC5GbGVldCkge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRoaXMubG9jYXRhYmxlQ29vcnMuZ2V0KGZsZWV0KSAhPT0gdW5kZWZpbmVkKTsgLy8gc2FuaXR5IGNoZWNrXHJcbiAgICAgICAgY29uc3QgW2Zyb20sIHRvXSA9IGZsZWV0LmdldFJvdXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZnJvbSAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0byAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICBjb25zdCBmbGVldHMgPSB0aGlzLnRyYWRlRmxlZXRzLmdldE9yU2V0KCgpID0+IG5ldyBTZXQoKSwgZnJvbSwgdG8pO1xyXG4gICAgICAgIGZsZWV0cy5hZGQoZmxlZXQpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbC9nYWxheHkudHMiLCJpbXBvcnQgKiBhcyBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBBbGdvIGZyb20gXCIuLi9hbGdvcml0aG0vYWxnb3JpdGhtXCI7XHJcbmltcG9ydCAqIGFzIE1vZGVsIGZyb20gXCIuL21vZGVsXCI7XHJcblxyXG5jb25zdCBQSV9PVkVSXzIgPSBNYXRoLlBJIC8gMjtcclxuY29uc3QgU1BFRUQgPSAwLjM7XHJcblxyXG5leHBvcnQgY2xhc3MgRmxlZXQgaW1wbGVtZW50cyBNb2RlbC5JTG9jYXRhYmxlIHtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkga2luZCA9IE1vZGVsLk1hcERhdGFLaW5kLkZsZWV0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBpZDogbnVtYmVyLFxyXG4gICAgICAgIHByaXZhdGUgY2FyZ286IE1vZGVsLkludmVudG9yeSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBNb2RlbC5Db2xvbnlbXSA9IFtdLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVBdDogbnVtYmVyID0gMCxcclxuICAgICAgICBwcml2YXRlIHN0YXRlID0gTW9kZWwuRmxlZXRTdGF0ZS5Nb3ZlLFxyXG4gICAgICAgIHByaXZhdGUgaXNSZXRpcmluZyA9IGZhbHNlLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IE1vZGVsLklGbGVldCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIGNhcmdvSWQ6IHRoaXMuY2FyZ28uaWQsXHJcbiAgICAgICAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLm1hcCgoeCkgPT4geC5pZCksXHJcbiAgICAgICAgICAgIHJvdXRlQXQ6IHRoaXMucm91dGVBdCxcclxuICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIGlzUmV0aXJpbmc6IHRoaXMuaXNSZXRpcmluZyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDYXJnbygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJnbztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Um91dGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJvdXRlQXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVBdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3BlZWQoZ2FsYXh5OiBNb2RlbC5HYWxheHkpIHtcclxuICAgICAgICBjb25zdCBmcm9tID0gdGhpcy5nZXRTdG9wKCk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZnJvbSAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICBjb25zdCB0byA9IHRoaXMuZ2V0TmV4dFN0b3AoKSE7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQodG8gIT09IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZ1ZWxFZmYgPSBnYWxheHkuZ2V0Um91dGVGdWVsRWZmKGZyb20sIHRvKTtcclxuICAgICAgICBjb25zdCBmdWVsQm9udXMgPSAxICsgZnVlbEVmZjtcclxuICAgICAgICBjb25zdCBmdWVsQm9udXMyID0gZnVlbEJvbnVzICogZnVlbEJvbnVzO1xyXG4gICAgICAgIHJldHVybiBTUEVFRCAqIGZ1ZWxCb251czI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZXJhdGUoZ2FsYXh5OiBNb2RlbC5HYWxheHkpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5GbGVldFN0YXRlLkhvbGQ6XHJcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5GbGVldFN0YXRlLkRvY2tlZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRG9ja2VkKGdhbGF4eSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1vdmVOZXh0U3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuRmxlZXRTdGF0ZS5Nb3ZlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb3ZlKGdhbGF4eSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJvdXRlKC4uLnJvdXRlOiBNb2RlbC5Db2xvbnlbXSkge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHJvdXRlLmxlbmd0aCA+IDApO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gTW9kZWwuRmxlZXRTdGF0ZS5Ib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldFJvdXRlKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVBdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJvdXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IE1vZGVsLkZsZWV0U3RhdGUuTW92ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydCh0aGlzLnN0YXRlID09PSBNb2RlbC5GbGVldFN0YXRlLkhvbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmV0aXJlKCkge1xyXG4gICAgICAgIHRoaXMuaXNSZXRpcmluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzUmV0aXJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzUmV0aXJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFuZ2xlKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucm91dGUubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJQb3MgPSBnYWxheHkuZ2V0Q29vcih0aGlzKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RvcCA9IGdhbGF4eS5nZXRDb29yKHRoaXMuZ2V0U3RvcCgpKTtcclxuICAgICAgICAgICAgbGV0IGZyb207XHJcbiAgICAgICAgICAgIGxldCB0bztcclxuICAgICAgICAgICAgaWYgKEFsZ28uZXF1YWwyRChjdXJQb3MsIHN0b3ApKSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tID0gc3RvcDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBnYWxheHkuZ2V0Q29vcih0aGlzLm5leHRTdG9wKCkpO1xyXG4gICAgICAgICAgICAgICAgdG8gPSBuZXh0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZnJvbSA9IGN1clBvcztcclxuICAgICAgICAgICAgICAgIHRvID0gc3RvcDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gQWxnby5zdWJ0cmFjdDJEKGZyb20sIHRvKTtcclxuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4oeSAvIHgpO1xyXG4gICAgICAgICAgICByZXR1cm4gYW5nbGUgKyAoZnJvbVswXSA+PSB0b1swXSA/IC1QSV9PVkVSXzIgOiBQSV9PVkVSXzIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnRpdGlvbkNhcmdvKHJvdXRlRGVtYW5kczogbnVtYmVyW10sIGxvd1RvSGlnaDogTW9kZWwuUHJvZHVjdFtdKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmdvU3BhY2UgPSB0aGlzLmNhcmdvLmdldEVtcHR5U3BhY2UoKTtcclxuICAgICAgICAvLyB0aGlzIG1ldGhvZCBhc3NpZ24gYXQgbGVhc3QgMSB1bml0IHNwYWNlIHBlciBjb21tb2RpdHlcclxuICAgICAgICBjb25zb2xlLmFzc2VydChjYXJnb1NwYWNlID49IE1vZGVsLmFsbFByb2R1Y3RzKCkubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCB0b3RhbERlbWFuZCA9IEFsZ28uc3VtKC4uLnJvdXRlRGVtYW5kcyk7XHJcbiAgICAgICAgY29uc3QgcGFydGl0aW9uID0gbmV3IE1hcDxNb2RlbC5Qcm9kdWN0LCBudW1iZXI+KCk7XHJcblxyXG4gICAgICAgIGlmICh0b3RhbERlbWFuZCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydGl0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIGxvd1RvSGlnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZW1hbmQgPSByb3V0ZURlbWFuZHNbcHJvZHVjdF07XHJcblxyXG4gICAgICAgICAgICAvLyBkb24ndCB0YWtlIGdvb2RzIGlmIHRoZXJlJ3Mgbm8gZGVtYW5kIGZvciB0aGVtXHJcbiAgICAgICAgICAgIGlmIChkZW1hbmQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB1bmRlcmVzdGltYXRlIFwiYSBiaXRcIlxyXG4gICAgICAgICAgICBjb25zdCBxdHkgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKGRlbWFuZCAvIHRvdGFsRGVtYW5kICogY2FyZ29TcGFjZSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydChOdW1iZXIuaXNGaW5pdGUocXR5KSk7XHJcbiAgICAgICAgICAgIHBhcnRpdGlvbi5zZXQocHJvZHVjdCwgcXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJ0aXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROZXh0U3RvcCgpIHtcclxuICAgICAgICBjb25zdCBuZXh0ID0gdGhpcy5uZXh0U3RvcElkeCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlW25leHRdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRG9ja2VkKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0b3AgPSB0aGlzLmdldFN0b3AoKTtcclxuICAgICAgICBjb25zdCBuZXh0ID0gdGhpcy5nZXROZXh0U3RvcCgpO1xyXG5cclxuICAgICAgICAvLyBzdW0gYWxsIGRvd25zdHJlYW0gZGVtYW5kcyBmcm9tIHRoZSBuZXh0IHN0b3BcclxuICAgICAgICBjb25zdCByb3V0ZURlbWFuZHMgPSBNb2RlbFxyXG4gICAgICAgICAgICAuYWxsUHJvZHVjdHMoKVxyXG4gICAgICAgICAgICAucmVkdWNlKChhY2MsIHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGdldCBhbGwgZG93bnN0cmVhbSBjb25zdW1lcnMgKGVuZC1wb2ludHMgb2Ygc2hvcnRlc3QgcGF0aHMpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZpY2l0U3VtID0gQWxnby5zdW0oLi4uZ2FsYXh5XHJcbiAgICAgICAgICAgICAgICAgICAgLmdldERvd25zdHJlYW1Db25zdW1lcnMocHJvZHVjdCwgc3RvcCwgbmV4dClcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChjb25zdW1lcikgPT4gY29uc3VtZXIuZ2V0RGVmaWNpdChnYWxheHksIHByb2R1Y3QpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWNjW3Byb2R1Y3RdICs9IGRlZmljaXRTdW07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICB9LCBuZXcgQXJyYXk8bnVtYmVyPihNb2RlbC5OVU1fUFJPRFVDVFMpLmZpbGwoMCkpO1xyXG5cclxuICAgICAgICBjb25zdCBnb29kc1VubG9hZGVkID0gbmV3IEFycmF5PG51bWJlcj4oTW9kZWwuTlVNX1BST0RVQ1RTKS5maWxsKDApO1xyXG5cclxuICAgICAgICAvLyBzZWxsIGdvb2RzXHJcbiAgICAgICAgZm9yIChjb25zdCBbcHJvZHVjdCwgcXR5XSBvZiB0aGlzLmNhcmdvLmdldEFsbFF0eSgpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocXR5ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdW5sb2FkZWQgPSBzdG9wXHJcbiAgICAgICAgICAgICAgICAudHJ5QnV5KFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbGF4eSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmdvLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgcXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIDApOyAvLyBNb2RlbC5NYXJrZXQuYmFzZVByaWNlKHByb2R1Y3QpKTtcclxuICAgICAgICAgICAgZ29vZHNVbmxvYWRlZFtwcm9kdWN0XSArPSB1bmxvYWRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzUmV0aXJpbmcgfHwgIWdhbGF4eS5oYXNUcmFkZVJvdXRlKHN0b3AsIG5leHQpKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZXJlJ3MgYSBiZXR0ZXIgcGF0aCB0aGFuIHRoZSBmbGVldCdzIHBhdGgsIHNvIHJldGlyZVxyXG4gICAgICAgICAgICBnYWxheHkucmVtb3ZlRmxlZXQodGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxvd1RvSGlnaCA9IE1vZGVsXHJcbiAgICAgICAgICAgIC5hbGxQcm9kdWN0cygpXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiByb3V0ZURlbWFuZHNbYV0gLSByb3V0ZURlbWFuZHNbYl0pO1xyXG5cclxuICAgICAgICAvLyBidXkgZ29vZHMgLSBwYXNzIDEsIHRyeSB0byBzcHJlYWQgb3V0IGdvb2RzIGluc3RlYWQgb2YgZmlsbGluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgZGVtYW5kcyA9IHRoaXMucGFydGl0aW9uQ2FyZ28ocm91dGVEZW1hbmRzLCBsb3dUb0hpZ2gpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtwcm9kdWN0LCBkZW1hbmRRdHldIG9mIGRlbWFuZHMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJnby5nZXRFbXB0eVNwYWNlKCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjYW5ub3QgZ3JhYiBpdGVtcyB0aGF0IGhhdmUgYmVlbiB1bmxvYWRlZFxyXG4gICAgICAgICAgICAgICAgaWYgKGdvb2RzVW5sb2FkZWRbcHJvZHVjdF0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5TdG9jayA9IHRoaXMuY2FyZ28uZ2V0UXR5KHByb2R1Y3QpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNob3VsZG4ndCBidXkgYmFjayB1bmxvYWRlZCBnb29kc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHVyY2hhc2VRdHkgPSBkZW1hbmRRdHkgLSBpblN0b2NrIC0gZ29vZHNVbmxvYWRlZFtwcm9kdWN0XTtcclxuICAgICAgICAgICAgICAgIGlmIChwdXJjaGFzZVF0eSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcXR5ID0gTWF0aC5taW4ocHVyY2hhc2VRdHksIHRoaXMuY2FyZ28uZ2V0RW1wdHlTcGFjZSgpKTtcclxuICAgICAgICAgICAgICAgIGlmIChxdHkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHF0eSA+IDApO1xyXG4gICAgICAgICAgICAgICAgc3RvcFxyXG4gICAgICAgICAgICAgICAgICAgIC50cnlTZWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYWxheHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZ28sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSW5maW5pdHkpOyAvLyBNb2RlbC5NYXJrZXQuYmFzZVByaWNlKHByb2R1Y3QpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYnV5IGdvb2RzIC0gcGFzcyAyLCB0cnkgdG8gZmlsbCBjYXJnbyBzcGFjZVxyXG5cclxuICAgICAgICAvLyBwaWNrIGF0IG1vc3QgMyB0eXBlcyBvZiBnb29kcyB0byBmaWxsIGNhcmdvLCBmcm9tIGhpZ2hlc3QgZGVtYW5kIHRvIGxvd2VzdCBkZW1hbmRcclxuICAgICAgICBjb25zdCBmaWxsUXR5ID0gdGhpcy5jYXJnby5nZXRFbXB0eVNwYWNlKCkgLyAzO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgSW1tdXRhYmxlLlNlcShsb3dUb0hpZ2gpLnJldmVyc2UoKSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FyZ28uZ2V0RW1wdHlTcGFjZSgpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY2Fubm90IGdyYWIgaXRlbXMgdGhhdCBoYXZlIGJlZW4gdW5sb2FkZWRcclxuICAgICAgICAgICAgaWYgKGdvb2RzVW5sb2FkZWRbcHJvZHVjdF0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5TdG9jayA9IHRoaXMuY2FyZ28uZ2V0UXR5KHByb2R1Y3QpO1xyXG4gICAgICAgICAgICBjb25zdCByb3V0ZURlbWFuZCA9IHJvdXRlRGVtYW5kc1twcm9kdWN0XTtcclxuICAgICAgICAgICAgY29uc3QgcHVyY2hhc2VRdHkgPSByb3V0ZURlbWFuZCAtIGluU3RvY2sgLSBnb29kc1VubG9hZGVkW3Byb2R1Y3RdO1xyXG4gICAgICAgICAgICBpZiAocHVyY2hhc2VRdHkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdHJ5IHRvIGZpbGwgdGhlIHJlbWFpbmluZyBjYXJnbyBzcGFjZVxyXG4gICAgICAgICAgICBjb25zdCBxdHkgPSBNYXRoLm1pbihmaWxsUXR5LCB0aGlzLmNhcmdvLmdldEVtcHR5U3BhY2UoKSk7XHJcbiAgICAgICAgICAgIHN0b3BcclxuICAgICAgICAgICAgICAgIC50cnlTZWxsKFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbGF4eSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmdvLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgcXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIEluZmluaXR5KTsgLy8gTW9kZWwuTWFya2V0LmJhc2VQcmljZShwcm9kdWN0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U3RvcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZVt0aGlzLnJvdXRlQXRdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV4dFN0b3AoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVbdGhpcy5uZXh0U3RvcElkeCgpXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5leHRTdG9wSWR4KCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5yb3V0ZUF0ICsgMSkgJSB0aGlzLnJvdXRlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldE1vdmVOZXh0U3RvcCgpIHtcclxuICAgICAgICAvLyBzZXQgbmV4dCBzdG9wIGFuZCB0aGVuIHRyYXZlbFxyXG4gICAgICAgIHRoaXMucm91dGVBdCA9IHRoaXMubmV4dFN0b3BJZHgoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gTW9kZWwuRmxlZXRTdGF0ZS5Nb3ZlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlTW92ZShnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG5cclxuICAgICAgICBjb25zdCBzdG9wID0gdGhpcy5yb3V0ZVt0aGlzLnJvdXRlQXRdO1xyXG4gICAgICAgIGNvbnN0IGRlc3QgPSBnYWxheHkuZ2V0Q29vcihzdG9wKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBub3dBdCB9ID0gZ2FsYXh5Lm1vdmUodGhpcywgZGVzdCwgdGhpcy5nZXRTcGVlZChnYWxheHkpKTtcclxuXHJcbiAgICAgICAgaWYgKEFsZ28uZXF1YWwyRChub3dBdCwgZGVzdCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IE1vZGVsLkZsZWV0U3RhdGUuRG9ja2VkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWwvZmxlZXQudHMiLCJpbXBvcnQgKiBhcyBNb2RlbCBmcm9tIFwiLi9tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYW5ldCBpbXBsZW1lbnRzIE1vZGVsLklMb2NhdGFibGUge1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBraW5kID0gTW9kZWwuTWFwRGF0YUtpbmQuUGxhbmV0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBpZDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSByZXNvdXJjZTogTW9kZWwuUmF3TWF0ZXJpYWwsXHJcbiAgICAgICAgcHJpdmF0ZSBjb2xvbnk/OiBNb2RlbC5Db2xvbnksXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogTW9kZWwuSVBsYW5ldCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIHJlc291cmNlOiB0aGlzLnJlc291cmNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbG9uaXplZChjb2xvbnk6IE1vZGVsLkNvbG9ueSkge1xyXG4gICAgICAgIHRoaXMuY29sb255ID0gY29sb255O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb2xvbnkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb255O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0NvbG9uaXplZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xvbnkgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWwvcGxhbmV0LnRzIiwiXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmVyPE1vZGVsVCwgQ2hhbm5lbFQ+IHtcclxuICAgIHVwZGF0ZShtb2RlbDogTW9kZWxULCBjaGFubmVsczogU2V0PENoYW5uZWxUPik6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJqZWN0PE1vZGVsVCwgQ2hhbm5lbFQ+IHtcclxuXHJcbiAgICBwcml2YXRlIG9ic2VydmVycyA9IG5ldyBTZXQ8SU9ic2VydmVyPE1vZGVsVCwgQ2hhbm5lbFQ+PigpO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTZXQgPSBuZXcgU2V0PENoYW5uZWxUPigpO1xyXG5cclxuICAgIHB1YmxpYyBzdWJzY3JpYmUoLi4ub2JzZXJ2ZXJzOiBBcnJheTxJT2JzZXJ2ZXI8TW9kZWxULCBDaGFubmVsVD4+KSB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQob2JzZXJ2ZXJzLmV2ZXJ5KChvKSA9PiAhdGhpcy5vYnNlcnZlcnMuaGFzKG8pKSwgXCJnbyBmaXggY2FsbGVyOiBkdXBsaWNhdGUgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25cIik7XHJcblxyXG4gICAgICAgIG9ic2VydmVycy5mb3JFYWNoKChvKSA9PiB0aGlzLm9ic2VydmVycy5hZGQobykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bnN1YnNjcmliZShvYnNlcnZlcjogSU9ic2VydmVyPE1vZGVsVCwgQ2hhbm5lbFQ+KSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5vYnNlcnZlcnMuZGVsZXRlKG9ic2VydmVyKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChyZXN1bHQsIFwiZml4IGNhbGxlcjogb2JzZXJ2YWJsZSBkb2Vzbid0IGV4aXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHF1ZXVlVXBkYXRlKC4uLmNoYW5uZWxUeXBlczogQ2hhbm5lbFRbXSkge1xyXG4gICAgICAgIGNoYW5uZWxUeXBlcy5mb3JFYWNoKChjaGFubmVsKSA9PiB0aGlzLnVwZGF0ZVNldC5hZGQoY2hhbm5lbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUobW9kZWw6IE1vZGVsVCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2YWJsZSBvZiB0aGlzLm9ic2VydmVycykge1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnVwZGF0ZShtb2RlbCwgdGhpcy51cGRhdGVTZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVNldC5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2V0LmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29ic2VydmVyLnRzIiwiaW1wb3J0ICogYXMgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IHsgR2FtZSwgVXBkYXRlQ2hhbm5lbCB9IGZyb20gXCIuLi9nYW1lXCI7XHJcbmltcG9ydCB7IERyYXdUYWJsZSB9IGZyb20gXCIuLi9odG1sXCI7XHJcbmltcG9ydCAqIGFzIE1vZGVsIGZyb20gXCIuLi9tb2RlbC9tb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBWaWV3IGZyb20gXCIuL3ZpZXdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGbGVldFZpZXcgaW1wbGVtZW50cyBWaWV3Lk9ic2VydmVyIHtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgcHJpdmF0ZSBjb250ZW50czogVmlldy5PYnNlcnZlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGhlQ29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGdhbWU6IEdhbWUsXHJcbiAgICAgICAgcHJpdmF0ZSBmbGVldDogTW9kZWwuRmxlZXQsXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCAkdGl0bGUgPSBWaWV3LiRjcmVhdGVUaXRsZWJhcihnYW1lLCB0aGlzLCBgVHJhZGVyICR7ZmxlZXQuaWR9YCk7XHJcbiAgICAgICAgY29uc3QgJGNvbnRlbnRQYW5lbCA9IFZpZXcuJGFkZENvbnRlbnRQYW5lbENsYXNzKHRoaXMudGhlQ29udGVudHMpO1xyXG5cclxuICAgICAgICBjb25zdCAkdGFicyA9ICQoXCI8bmF2PlwiKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJ0YWJzXCIpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAkKFwiPGRpdj5cIilcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChcIlJvdXRlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsaWNrKCgpID0+IHRoaXMuc2V0Um91dGVQYW5lbChnYW1lKSksXHJcbiAgICAgICAgICAgICAgICAkKFwiPGRpdj5cIilcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChcIkNhcmdvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsaWNrKCgpID0+IHRoaXMuc2V0Q2FyZ29QYW5lbCgpKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Um91dGVQYW5lbChnYW1lKTtcclxuXHJcbiAgICAgICAgVmlld1xyXG4gICAgICAgICAgICAuJGFkZFBhbmVsQ2xhc3ModGhpcylcclxuICAgICAgICAgICAgLmFwcGVuZCgkdGl0bGUsICR0YWJzLCAkY29udGVudFBhbmVsKVxyXG4gICAgICAgICAgICAubW91c2Vkb3duKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBWaWV3Lm1ha2VEcmFnZ2FibGUodGhpcy52aWV3LCBlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFZpZXcuYnJpbmdUb0Zyb250KHRoaXMudmlldyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGdhbWU6IEdhbWUsIGNoYW5uZWxzOiBTZXQ8VXBkYXRlQ2hhbm5lbD4pIHtcclxuXHJcbiAgICAgICAgaWYgKCFnYW1lLmdhbGF4eS5leGlzdHModGhpcy5mbGVldCkpIHtcclxuICAgICAgICAgICAgZ2FtZS5jbG9zZSh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudHMudXBkYXRlKGdhbWUsIGNoYW5uZWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFJvdXRlUGFuZWwoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBuZXcgUm91dGVQYW5lbChnYW1lLCB0aGlzLnRoZUNvbnRlbnRzLCB0aGlzLmZsZWV0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENhcmdvUGFuZWwoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IG5ldyBDYXJnb1BhbmVsKHRoaXMudGhlQ29udGVudHMsIHRoaXMuZmxlZXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBSb3V0ZVBhbmVsIGltcGxlbWVudHMgVmlldy5PYnNlcnZlciB7XHJcblxyXG4gICAgcHJpdmF0ZSB0YWJsZURyYXdlcjogRHJhd1RhYmxlPE1vZGVsLkNvbG9ueT47XHJcbiAgICBwcml2YXRlIG9ic2VydmVyOiBWaWV3Lk9ic2VydmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHJlYWRvbmx5IGdhbWU6IEdhbWUsXHJcbiAgICAgICAgcmVhZG9ubHkgdmlldzogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmbGVldDogTW9kZWwuRmxlZXQsXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBnYWxheHkgPSBnYW1lLmdhbGF4eTtcclxuICAgICAgICB0aGlzLnRhYmxlRHJhd2VyID0gbmV3IERyYXdUYWJsZTxNb2RlbC5Db2xvbnk+KFtcclxuICAgICAgICAgICAgW1wiUGxhY2VcIiwgdW5kZWZpbmVkXSxcclxuICAgICAgICAgICAgW1wiRGVzdFwiLCB1bmRlZmluZWRdLFxyXG4gICAgICAgIF0sICgpID0+IHRoaXMudXBkYXRlKGdhbWUsIG5ldyBTZXQoW1VwZGF0ZUNoYW5uZWwuRGF0YUNoYW5nZV0pKSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRzcGVlZExhYmVsID0gJChcIjxzcGFuPlwiKTtcclxuICAgICAgICBjb25zdCAkc3BlZWQgPSAkKFwiPGRpdj5cIilcclxuICAgICAgICAgICAgLnRleHQoXCJTcGVlZDogXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJUaGUgc3BlZWQgaW5kaWNhdGVzIGhvdyBmYXIgdGhlIHRyYWRlciBpcyBnb2luZyB0byBtb3ZlIHBlciBkYXkuXCIpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJHNwZWVkTGFiZWwpO1xyXG5cclxuICAgICAgICBjb25zdCAkYnV0dG9uID0gJChcIjxidXR0b24+XCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwiUmV0aXJlIHRyYWRlclwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiVGhlIHRyYWRlciB3aWxsIHJldHVybiB0byB0aGUgdHJhZGVyIHBvb2wgYW5kIHRvIGJlIHJlYXNzaWduZWQuXCIpXHJcbiAgICAgICAgICAgIC5jbGljaygoKSA9PiBmbGVldC5yZXRpcmUoKSk7XHJcbiAgICAgICAgY29uc3QgJGdlbmVyYWwgPSAkKFwiPGZpZWxkc2V0PlwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgJChcIjxsZWdlbmQ+XCIpLnRleHQoXCJHZW5lcmFsXCIpLFxyXG4gICAgICAgICAgICAgICAgJHNwZWVkLFxyXG4gICAgICAgICAgICAgICAgJGJ1dHRvbixcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCAkcm91dGUgPSAkKFwiPGZpZWxkc2V0PlwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiVGhpcyB0YWJsZSBzaG93cyBhIGxpc3Qgb2YgcGxhY2VzIHRoYXQgdGhlIHRyYWRlciBpcyBnb2luZyB0byB0cmFkZXIuIERlc3QgbWVhbnMgdGhlIHRyYWRlciBpcyBoZWFkaW5nIHRvd2FyZHMgdGhhdCBwbGFjZS5cIilcclxuICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICQoXCI8bGVnZW5kPlwiKS50ZXh0KFwiUm91dGVcIiksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRHJhd2VyLiRnZXRUYWJsZSgpLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgICQodmlldylcclxuICAgICAgICAgICAgLmVtcHR5KClcclxuICAgICAgICAgICAgLmFwcGVuZCgkZ2VuZXJhbCwgJHJvdXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IHtcclxuICAgICAgICAgICAgdXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCBmbGVldC5pc1JldGlyZSgpKTtcclxuICAgICAgICAgICAgICAgICRzcGVlZExhYmVsLnRleHQodGhpcy5mbGVldC5nZXRTcGVlZChnYWxheHkpLnRvRml4ZWQoMikpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShnYW1lOiBHYW1lLCBjaGFubmVsczogU2V0PFVwZGF0ZUNoYW5uZWw+KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGdhbGF4eSA9IGdhbWUuZ2FsYXh5O1xyXG5cclxuICAgICAgICB0aGlzLm9ic2VydmVyLnVwZGF0ZShnYW1lLCBjaGFubmVscyk7XHJcblxyXG4gICAgICAgIHRoaXMudGFibGVEcmF3ZXJcclxuICAgICAgICAgICAgLnJlbmRlcih0aGlzLmZsZWV0LmdldFJvdXRlKCksIChzdG9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob21lUGxhbmV0ID0gc3RvcC5nZXRIb21lUGxhbmV0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBnYWxheHkuZ2V0Q29vcihob21lUGxhbmV0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3IgPSBgUGxhbmV0ICR7aG9tZVBsYW5ldC5pZH0gLSAoJHt4LnRvRml4ZWQoMil9LCR7eS50b0ZpeGVkKDIpfSlgO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0aGlzLmZsZWV0LmdldFJvdXRlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdCA9IHRoaXMuZmxlZXQuZ2V0Um91dGVBdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNEZXN0ID0gcm91dGVbYXRdID09PSBzdG9wO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICBjb29yLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGVzdCA/IGA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2hlY2s8L2k+YCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ2FyZ29QYW5lbCBpbXBsZW1lbnRzIFZpZXcuT2JzZXJ2ZXIge1xyXG5cclxuICAgIHByaXZhdGUgdGFibGVEcmF3ZXIgPSBuZXcgRHJhd1RhYmxlPFtNb2RlbC5Qcm9kdWN0LCBudW1iZXJdPihbXHJcbiAgICAgICAgW1wiR29vZHNcIiwgKFtwcm9kdWN0QV0sIFtwcm9kdWN0Ql0pID0+IHByb2R1Y3RBIC0gcHJvZHVjdEJdLFxyXG4gICAgICAgIFtcIlF0eVwiLCAoWywgcXR5QV0sIFssIHF0eUJdKSA9PiBxdHlBIC0gcXR5Ql0sXHJcbiAgICBdLCAoKSA9PiB0aGlzLnVwZGF0ZSgpKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICByZWFkb25seSB2aWV3OiBIVE1MRWxlbWVudCxcclxuICAgICAgICBwcml2YXRlIGZsZWV0OiBNb2RlbC5GbGVldCxcclxuICAgICkge1xyXG4gICAgICAgICQodmlldylcclxuICAgICAgICAgICAgLmVtcHR5KClcclxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLnRhYmxlRHJhd2VyLiRnZXRUYWJsZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMudGFibGVEcmF3ZXJcclxuICAgICAgICAgICAgLnJlbmRlcihJbW11dGFibGVcclxuICAgICAgICAgICAgICAgIC5TZXEodGhpcy5mbGVldC5nZXRDYXJnbygpLmdldEFsbFF0eSgpKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoW3F0eV0pID0+IHF0eSA+IDApXHJcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpLFxyXG4gICAgICAgICAgICAgICAgKFtwcm9kdWN0LCBxdHldKSA9PiBbXHJcbiAgICAgICAgICAgICAgICAgICAgTW9kZWwuUHJvZHVjdFtwcm9kdWN0XSxcclxuICAgICAgICAgICAgICAgICAgICBxdHksXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9mbGVldHZpZXcudHMiLCJpbXBvcnQgeyBHYW1lLCBJU2F2ZURhdGEgfSBmcm9tIFwiLi4vZ2FtZVwiO1xyXG5pbXBvcnQgKiBhcyBWaWV3IGZyb20gXCIuL3ZpZXdcIjtcclxuXHJcbmRlY2xhcmUgY2xhc3MgTFpTdHJpbmcge1xyXG4gICAgcHVibGljIHN0YXRpYyBjb21wcmVzc1RvQmFzZTY0KGlucHV0OiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29tcHJlc3NGcm9tQmFzZTY0KGlucHV0OiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvU2F2ZShnYW1lOiBHYW1lKSB7XHJcbiAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoZ2FtZS5zZXJpYWxpemUoKSk7XHJcbiAgICBjb25zdCB3aXRoTGVuID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGpzb24sXHJcbiAgICAgICAgbGVuOiBqc29uLmxlbmd0aCwgLy8gYWN0cyBhcyBhIHNpbXBsZSBjaGVja3N1bVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gTFpTdHJpbmcuY29tcHJlc3NUb0Jhc2U2NCh3aXRoTGVuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbVNhdmUoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgd2l0aExlbiA9IExaU3RyaW5nLmRlY29tcHJlc3NGcm9tQmFzZTY0KGlucHV0KTtcclxuICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHdpdGhMZW4pIGFzIHsgbGVuOiBudW1iZXIsIGpzb246IHN0cmluZyB9O1xyXG4gICAgaWYgKFxyXG4gICAgICAgIGpzb24gJiZcclxuICAgICAgICBOdW1iZXIuaXNTYWZlSW50ZWdlcihqc29uLmxlbikgJiZcclxuICAgICAgICB0eXBlb2YganNvbi5qc29uID09PSBcInN0cmluZ1wiICYmXHJcbiAgICAgICAganNvbi5sZW4gPT09IGpzb24uanNvbi5sZW5ndGhcclxuICAgICkge1xyXG4gICAgICAgIC8vIGxpa2VseSBhIHZhbGlkIHNhdmUsIGNsb3NlIGVub3VnaFxyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24uanNvbikgYXMgSVNhdmVEYXRhO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwibm90IGEgdmFsaWQgc2F2ZVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEltcG9ydEV4cG9ydFZpZXcgaW1wbGVtZW50cyBWaWV3Lk9ic2VydmVyIHtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2FtZTogR2FtZSxcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0ICR0aXRsZSA9IFZpZXcuJGNyZWF0ZVRpdGxlYmFyKGdhbWUsIHRoaXMsIGBJbXBvcnQvRXhwb3J0IFNhdmVgKTtcclxuICAgICAgICBjb25zdCAkY29udGVudFBhbmVsID0gVmlldy4kYWRkQ29udGVudFBhbmVsQ2xhc3MoKTtcclxuXHJcbiAgICAgICAgY29uc3QgJHRleHRhcmVhID0gJChcIjx0ZXh0YXJlYT5cIilcclxuICAgICAgICAgICAgLndpZHRoKFwiMzUwcHhcIilcclxuICAgICAgICAgICAgLmhlaWdodChcIjMwMHB4XCIpXHJcbiAgICAgICAgICAgIC5wcm9wKFwic3BlbGxjaGVja1wiLCBmYWxzZSlcclxuICAgICAgICAgICAgLnZhbCh0b1NhdmUoZ2FtZSkpXHJcbiAgICAgICAgICAgIC5ibHVyKCgpID0+ICQodGhpcykuZm9jdXMoKSlcclxuICAgICAgICAgICAgLm1vdXNlbW92ZSgoKSA9PiBWaWV3LnN1c3BlbmREcmFnZ2FibGUoKSlcclxuICAgICAgICAgICAgLmNsaWNrKChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKSAvLyBhdm9pZCBicmluZ2luZyB0aGUgdmlldyB0byBmcm9udCAoaGVuY2UgbG9zaW5nIGZvY3VzKVxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgICAgIGNvbnN0ICRjbGVhckJ1dHRvbiA9ICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAgICAgICAudGV4dChcImNsZWFyXCIpXHJcbiAgICAgICAgICAgIC5jbGljaygoKSA9PiAkdGV4dGFyZWEudmFsKFwiXCIpKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGltcG9ydEJ1dHRvbiA9ICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAgICAgICAudGV4dChcImltcG9ydFwiKVxyXG4gICAgICAgICAgICAuY2xpY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYXZlRGF0YSA9IGZyb21TYXZlKCR0ZXh0YXJlYS52YWwoKSBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUucmVsb2FkKHNhdmVEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBnYW1lLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJpbnZhbGlkIHNhdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCAkY29weUJ1dHRvbiA9ICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAgICAgICAudGV4dChcImNvcHkgdG8gY2xpcGJvYXJkXCIpXHJcbiAgICAgICAgICAgIC5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkdGV4dGFyZWEuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIkNvcHlcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCAkcmVmcmVzaEJ1dHRvbiA9ICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAgICAgICAudGV4dChcInJlZnJlc2hcIilcclxuICAgICAgICAgICAgLmNsaWNrKCgpID0+ICR0ZXh0YXJlYS50ZXh0KHRvU2F2ZShnYW1lKSkpO1xyXG5cclxuICAgICAgICBjb25zdCAkcmVzdGFydEJ1dHRvbiA9ICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAgICAgICAudGV4dChcInJlc3RhcnRcIilcclxuICAgICAgICAgICAgLmNsaWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzT2sgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlP1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc09rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBnYW1lLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRjb250ZW50UGFuZWwuYXBwZW5kKFxyXG4gICAgICAgICAgICAkdGV4dGFyZWEsXHJcbiAgICAgICAgICAgICQoXCI8ZGl2PlwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAkY2xlYXJCdXR0b24sXHJcbiAgICAgICAgICAgICAgICAkaW1wb3J0QnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgJGNvcHlCdXR0b24sXHJcbiAgICAgICAgICAgICAgICAkcmVmcmVzaEJ1dHRvbixcclxuICAgICAgICAgICAgICAgICRyZXN0YXJ0QnV0dG9uLFxyXG4gICAgICAgICAgICApKTtcclxuXHJcbiAgICAgICAgVmlld1xyXG4gICAgICAgICAgICAuJGFkZFBhbmVsQ2xhc3ModGhpcylcclxuICAgICAgICAgICAgLmFwcGVuZCgkdGl0bGUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJGNvbnRlbnRQYW5lbClcclxuICAgICAgICAgICAgLm1vdXNlZG93bigoZSkgPT4gVmlldy5tYWtlRHJhZ2dhYmxlKHRoaXMudmlldywgZSkpXHJcbiAgICAgICAgICAgIC5jbGljaygoKSA9PiBWaWV3LmJyaW5nVG9Gcm9udCh0aGlzLnZpZXcpKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBub3RoaW5nXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXcvaW1wb3J0ZXhwb3J0dmlldy50cyIsImltcG9ydCAqIGFzIEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCAqIGFzIEFsZ28gZnJvbSBcIi4uL2FsZ29yaXRobS9hbGdvcml0aG1cIjtcclxuaW1wb3J0IHsgR2FtZSwgSVNhdmVEYXRhLCBVcGRhdGVDaGFubmVsIH0gZnJvbSBcIi4uL2dhbWVcIjtcclxuaW1wb3J0ICogYXMgTW9kZWwgZnJvbSBcIi4uL21vZGVsL21vZGVsXCI7XHJcbmltcG9ydCAqIGFzIFZpZXcgZnJvbSBcIi4uL3ZpZXcvdmlld1wiO1xyXG5cclxuY29uc3QgTUlOX0dSSURfU0laRSA9IDUwO1xyXG5jb25zdCBNQVhfR1JJRF9TSVpFID0gMzAwO1xyXG5jb25zdCBVSV9JTlRFUlZBTCA9IDE3O1xyXG5jb25zdCBSQURJVVMgPSAzIC8gMTA7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNYXBWaWV3QWN0aW9uIHtcclxuICAgIGhhbmRsZVNlbGVjdGVkKHZpZXc6IE1hcFZpZXcsIGdhbWU6IEdhbWUsIGNvb3I6IE1vZGVsLkNvb3JUKTogYm9vbGVhbjtcclxuICAgIGhhbmRsZVpvb20odmlldzogTWFwVmlldywgZ2FtZTogR2FtZSk6IGJvb2xlYW47XHJcbiAgICBnZXRUZXh0cyh2aWV3OiBNYXBWaWV3LCBnYW1lOiBHYW1lKTogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IHNldHVwOiBJTWFwVmlld0FjdGlvbiA9IHtcclxuICAgIGhhbmRsZVNlbGVjdGVkOiAodmlldzogTWFwVmlldywgZ2FtZTogR2FtZSwgY29vcjogTW9kZWwuQ29vclQpID0+IHtcclxuICAgICAgICBjb25zdCBnYWxheHkgPSBnYW1lLmdhbGF4eTtcclxuICAgICAgICBjb25zdCBvYmpzID0gZ2FsYXh5LnNlYXJjaE5lYXJieU9ianMoY29vciwgMC4xKS50b0FycmF5KCk7XHJcbiAgICAgICAgaWYgKG9ianMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYW5ldCA9IG9ianNbMF0gYXMgTW9kZWwuUGxhbmV0O1xyXG4gICAgICAgICAgICBpZiAocGxhbmV0LmtpbmQgPT09IE1vZGVsLk1hcERhdGFLaW5kLlBsYW5ldCAmJlxyXG4gICAgICAgICAgICAgICAgcGxhbmV0LnJlc291cmNlID09PSBNb2RlbC5Qcm9kdWN0LkNyb3ApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9ueSA9IGdhbGF4eS5jb2xvbml6ZVBsYW5ldChwbGFuZXQsIDEwKTtcclxuICAgICAgICAgICAgICAgIGNvbG9ueS5leHBhbmRQb3dlclBsYW5ldChnYWxheHkpO1xyXG4gICAgICAgICAgICAgICAgdmlldy5zZXRBY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIGdhbWUucXVldWVVcGRhdGUoVXBkYXRlQ2hhbm5lbC5NYXBDaGFuZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVab29tOiAoKSA9PiBmYWxzZSxcclxuICAgIGdldFRleHRzOiAoKSA9PiBbXHJcbiAgICAgICAgXCJIZWxsby4gU2VsZWN0IGEgZm9vZC1wcm9kdWNpbmcgKGdyZWVuKVwiLFxyXG4gICAgICAgIFwicGxhbmV0IHRvIGJlIHlvdXIgc3RhcnRpbmcgcGxhbmV0LCB0aGVuXCIsXHJcbiAgICAgICAgXCJ1bnBhdXNlIHRoZSBnYW1lIChidXR0b24gaW4gdG9wLXJpZ2h0XCIsXHJcbiAgICAgICAgXCJjb3JuZXIpLiBBZnRlciB5b3UncmUgZG9uZSwgbW91c2Ugb3ZlclwiLFxyXG4gICAgICAgIFwidGhlIHVzZXIgaW50ZXJmYWNlLCBsaWtlIGxhYmVscyxidXR0b25zLFwiLFxyXG4gICAgICAgIFwidGFibGVzLCB0byBzZWUgdGhlIHRvb2x0aXBzIGFib3V0IGdhbWVcIixcclxuICAgICAgICBcImNvbmNlcHRzLCBlc3BlY2lhbGx5IHRoZSBtYXJrZXQgcGFuZWwgb25cIixcclxuICAgICAgICBcImNvbG9uaXplZCBwbGFuZXRzLCB3aGljaCBleHBsYWlucyB0aGVcIixcclxuICAgICAgICBcImdhbWUgZWNvbm9taWNzLiBGZWVsIGZyZWUgdG8gY2xpY2sgb25cIixcclxuICAgICAgICBcImFueSBjb2xvcmVkIGl0ZW1zIG9uIHRoZSBtYXAsIGFzIHRoZXlcIixcclxuICAgICAgICBcImFyZSBpbnRlcmFjdGl2ZS5cIixcclxuICAgICAgICBcIlwiLFxyXG4gICAgICAgIFwiQWxzbywgdHJ5IHRvIGNoYW5nZSB0aGUgdmlld3BvcnQgYnlcIixcclxuICAgICAgICBcInBhbm5pbmcgYW5kIHBpbmNoaW5nLCBvciBjbGljay1hbmQtZHJhZ1wiLFxyXG4gICAgICAgIFwiYW5kIG1vdXNlIHdoZWVsIHpvb21pbmcgaWYgeW91IGFyZVwiLFxyXG4gICAgICAgIFwicGxheWluZyBvbiBhIFBDLlwiLFxyXG4gICAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1hcFZpZXdTYXZlRGF0YSB7XHJcbiAgICB0b3BMZWZ0OiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgZ3JpZFNpemU6IG51bWJlcjtcclxuICAgIGhhc1NldHVwOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwVmlldyBpbXBsZW1lbnRzIFZpZXcuT2JzZXJ2ZXIge1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICAgIC8vIFVJIGRhdGFcclxuICAgIHByaXZhdGUgdG9wTGVmdDogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcclxuICAgIHByaXZhdGUgZ3JpZFNpemUgPSBNSU5fR1JJRF9TSVpFO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudEFjdGlvbj86IElNYXBWaWV3QWN0aW9uO1xyXG4gICAgcHJpdmF0ZSBjYWNoZWRHcmlkOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgcGlkPzogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHNhdmVEYXRhPzogSVNhdmVEYXRhKSB7XHJcbiAgICAgICAgWywgdGhpcy5jb250ZXh0XSA9IHRoaXMuZ2V0Q2FudmFzQ29udGV4dCh0aGlzLnZpZXcpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblxyXG4gICAgICAgICQoXCIjbWFwQ29udGFpbmVyXCIpXHJcbiAgICAgICAgICAgIC5lbXB0eSgpXHJcbiAgICAgICAgICAgIC5hcHBlbmQodGhpcy52aWV3KTtcclxuXHJcbiAgICAgICAgJCh0aGlzLnZpZXcpLmF0dHIoXCJpZFwiLCBcIm1hcFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2VzdHVyZSA9IG5ldyBIYW1tZXIuTWFuYWdlcih0aGlzLnZpZXcpO1xyXG4gICAgICAgIGNvbnN0IGRvdWJsZSA9IG5ldyBIYW1tZXIuVGFwKHsgZXZlbnQ6IFwiZG91YmxldGFwXCIsIHRhcHM6IDIgfSk7XHJcbiAgICAgICAgY29uc3Qgc2luZ2xlID0gbmV3IEhhbW1lci5UYXAoeyBldmVudDogXCJzaW5nbGV0YXBcIiB9KTtcclxuICAgICAgICBjb25zdCBwYW4gPSBuZXcgSGFtbWVyLlBhbigpXHJcbiAgICAgICAgICAgIC5zZXQoeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMIH0pO1xyXG4gICAgICAgIGdlc3R1cmUuYWRkKFtcclxuICAgICAgICAgICAgbmV3IEhhbW1lci5QaW5jaCgpLFxyXG4gICAgICAgICAgICBkb3VibGUsXHJcbiAgICAgICAgICAgIHNpbmdsZSxcclxuICAgICAgICAgICAgcGFuLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGRvdWJsZS5yZWNvZ25pemVXaXRoKHNpbmdsZSk7XHJcbiAgICAgICAgc2luZ2xlLnJlcXVpcmVGYWlsdXJlKGRvdWJsZSk7XHJcblxyXG4gICAgICAgIC8vIHNldHVwIGV2ZW50c1xyXG4gICAgICAgIGdlc3R1cmUub24oXCJzaW5nbGV0YXBcIiwgKGUpID0+IHRoaXMuY2xpY2soZ2FtZSwgZSkpO1xyXG4gICAgICAgIGdlc3R1cmUub24oXCJkb3VibGV0YXBcIiwgKGUpID0+IHRoaXMuZGJsY2xpY2soZ2FtZSwgZSkpO1xyXG4gICAgICAgIGdlc3R1cmUub24oXCJwaW5jaFwiLCAoZSkgPT4gdGhpcy53aGVlbChnYW1lLCBlKSk7XHJcbiAgICAgICAgZ2VzdHVyZS5vbihcInBhblwiLCAoZSkgPT4gdGhpcy5wYW4oZ2FtZSwgZSkpO1xyXG5cclxuICAgICAgICAvLyBtb3VzZSB3aGVlbCBldmVudCBoYW5kbGVkIHNlcGFyYXRlbHlcclxuICAgICAgICAoJCh0aGlzLnZpZXcpIGFzIEpRdWVyeTxIVE1MQ2FudmFzRWxlbWVudD4pXHJcbiAgICAgICAgICAgIC5vbihcIndoZWVsXCIsIChlKSA9PiB0aGlzLndoZWVsKGdhbWUsIGUub3JpZ2luYWxFdmVudCBhcyBXaGVlbEV2ZW50KSk7XHJcblxyXG4gICAgICAgIGlmIChzYXZlRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXBWaWV3U2F2ZSA9IHNhdmVEYXRhLm1hcFZpZXdTYXZlO1xyXG4gICAgICAgICAgICBpZiAoIW1hcFZpZXdTYXZlIHx8ICFtYXBWaWV3U2F2ZS5oYXNTZXR1cCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZmlyc3QtdGltZSBzZXR1cCBib251c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gc2V0dXA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRTaXplID0gbWFwVmlld1NhdmUuZ3JpZFNpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcExlZnQgPSBtYXBWaWV3U2F2ZS50b3BMZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZSBzZXR1cCBib251c1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBzZXR1cDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogSU1hcFZpZXdTYXZlRGF0YSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9wTGVmdDogdGhpcy50b3BMZWZ0LFxyXG4gICAgICAgICAgICBncmlkU2l6ZTogdGhpcy5ncmlkU2l6ZSxcclxuICAgICAgICAgICAgaGFzU2V0dXA6IHRoaXMuY3VycmVudEFjdGlvbiA9PT0gdW5kZWZpbmVkLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEFjdGlvbihhY3Rpb24/OiBJTWFwVmlld0FjdGlvbikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGdhbWU6IEdhbWUsIGNoYW5uZWxzOiBTZXQ8VXBkYXRlQ2hhbm5lbD4pIHtcclxuICAgICAgICBjb25zdCAkdmlldyA9ICQodGhpcy52aWV3KSBhcyBKUXVlcnk8SFRNTENhbnZhc0VsZW1lbnQ+O1xyXG5cclxuICAgICAgICAvLyBzZXQgdXAgdGhlIHNpemUgb2YgdGhlIGNhbnZhc1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuICAgICAgICBjb25zdCBhdHRyV2lkdGggPSBOdW1iZXIoJHZpZXcuYXR0cihcIndpZHRoXCIpKTtcclxuICAgICAgICBjb25zdCBhdHRySGVpZ2h0ID0gTnVtYmVyKCR2aWV3LmF0dHIoXCJoZWlnaHRcIikpO1xyXG4gICAgICAgIGlmIChhdHRyV2lkdGggIT09IHdpZHRoIHx8IGhlaWdodCAhPT0gYXR0ckhlaWdodCkge1xyXG4gICAgICAgICAgICAkdmlld1xyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcclxuICAgICAgICAgICAgICAgIC53aWR0aCh3aWR0aClcclxuICAgICAgICAgICAgICAgIC5oZWlnaHQoaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkR3JpZC53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkR3JpZC5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkR3JpZCA9IHRoaXMuZHJhd0dyaWQoZ2FtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFubmVscy5oYXMoVXBkYXRlQ2hhbm5lbC5NYXBDaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgIC8vIHVzdWFsbHkgdGhpcyBoYXBwZW5zIHdoZW5ldmVyIHRoZSB1c2VyIG1hbmlwdWxhdGVzIHRoZSBVSVxyXG4gICAgICAgICAgICB0aGlzLmNhY2hlZEdyaWQgPSB0aGlzLmRyYXdHcmlkKGdhbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZHJhdyB0aGUgbWFwXHJcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhY2hlZEdyaWQsIDAsIDApO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5kcmF3T2JqZWN0cyhnYW1lKSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kcmF3QWN0aW9uVGV4dChnYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXdBY3Rpb25UZXh0KGdhbWU6IEdhbWUpIHtcclxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRBY3Rpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0ZXh0cyA9IHRoaXMuY3VycmVudEFjdGlvbi5nZXRUZXh0cyh0aGlzLCBnYW1lKTtcclxuICAgICAgICBpZiAodGV4dHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICAgICAgICBjdHguZm9udCA9IFwiMTJwdCBzYW5zLXNlcmlmXCI7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCB0ZXh0IG9mIHRoaXMuY3VycmVudEFjdGlvbi5nZXRUZXh0cyh0aGlzLCBnYW1lKSkge1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgTWF0aC5jZWlsKHRoaXMudmlldy53aWR0aCAvIDIpLCBNYXRoLmNlaWwodGhpcy52aWV3LmhlaWdodCAvIDIpICsgb2Zmc2V0KTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2FudmFzQ29udGV4dChjYW52YXM/OiBIVE1MQ2FudmFzRWxlbWVudCk6IFtIVE1MQ2FudmFzRWxlbWVudCwgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXSB7XHJcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbm5vdCBjcmVhdGUgY29udGV4dFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtjYW52YXMsIGNvbnRleHRdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd09iamVjdHMoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIGNvbnN0IGdhbGF4eSA9IGdhbWUuZ2FsYXh5O1xyXG4gICAgICAgIGNvbnN0IFtjYW52YXMsIGN0eF0gPSB0aGlzLmdldENhbnZhc0NvbnRleHQoKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gSW1tdXRhYmxlXHJcbiAgICAgICAgICAgIC5TZXEoZ2FsYXh5LmdldE9ianMoKSlcclxuICAgICAgICAgICAgLmdyb3VwQnkoKFt4XSkgPT4geC5raW5kKTtcclxuXHJcbiAgICAgICAgY29uc3QgZHJhd0ZsZWV0cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmxlZXRHcm91cCA9IGdyb3Vwcy5nZXQoTW9kZWwuTWFwRGF0YUtpbmQuRmxlZXQpO1xyXG4gICAgICAgICAgICBpZiAoIWZsZWV0R3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBmbGVldHMgPSBmbGVldEdyb3VwLnZhbHVlcygpO1xyXG5cclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwieWVsbG93XCI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW29iaiwgY29vcl0gb2YgZmxlZXRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbdnBYLCB2cFldID0gdGhpcy50b1ZwQ29vcihjb29yKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmbGVldCA9IG9iaiBhcyBNb2RlbC5GbGVldDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gZmxlZXQuZ2V0QW5nbGUoZ2FsYXh5KTtcclxuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKHZwWCwgdnBZKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnNjYWxlKDAuNSwgMC41KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1RyaWFuZ2xlKGN0eCk7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGRyYXdQbGFuZXRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwbGFuZXRHcm91cCA9IGdyb3Vwcy5nZXQoTW9kZWwuTWFwRGF0YUtpbmQuUGxhbmV0KTtcclxuICAgICAgICAgICAgaWYgKCFwbGFuZXRHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2FtZSBnZW5lcmF0aW9uIHNob3VsZCBnZW5lcmF0ZSBhdCBsZWFzdCAxIHBsYW5ldFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwbGFuZXRBcnJheSA9IEFycmF5LmZyb20ocGxhbmV0R3JvdXAudmFsdWVzKCkpIGFzIEFycmF5PFtNb2RlbC5QbGFuZXQsIE1vZGVsLkNvb3JUXT47XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbFBsYW5ldHMgPSBJbW11dGFibGVcclxuICAgICAgICAgICAgICAgIC5TZXEocGxhbmV0QXJyYXkpXHJcbiAgICAgICAgICAgICAgICAuZ3JvdXBCeSgoW3hdKSA9PiAoeCBhcyBNb2RlbC5QbGFuZXQpLnJlc291cmNlKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBkcmF3IHBsYW5ldCBzeW1ib2xzIChjb2xvcmVkIGNpcmNsZXMpXHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInllbGxvd1wiO1xyXG4gICAgICAgICAgICBjb25zdCByYWRpdXMgPSBSQURJVVMgKiB0aGlzLmdyaWRTaXplO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJhd1BsYW5ldENpcmNsZSA9IChjb2xvcjogc3RyaW5nLCByZXNvdXJjZTogTW9kZWwuUmF3TWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYW5ldEJ5UmVzb3VyY2UgPSBhbGxQbGFuZXRzLmdldChyZXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBsYW5ldEJ5UmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgXCJhbGwgcGxhbmV0cyBzaG91bGQgYmUgZGlzdHJpYnV0ZWQgYWJvdXQgZXZlbmx5IGluIHRlcm1zIG9mIHJhdyBtYXRlcmlhbCB0eXBlc1wiKTsgLy8gVE9ETyB2YWxpZGF0ZSB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxhbmV0cyA9IHBsYW5ldEJ5UmVzb3VyY2UudmFsdWVzKCk7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFssIGNvb3JdIG9mIHBsYW5ldHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbdnBYLCB2cFldID0gdGhpcy50b1ZwQ29vcihjb29yKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKGN0eCwgdnBYLCB2cFksIHJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGRyYXdQbGFuZXRDaXJjbGUoXCJncmVlblwiLCBNb2RlbC5Qcm9kdWN0LkNyb3ApO1xyXG4gICAgICAgICAgICBkcmF3UGxhbmV0Q2lyY2xlKFwiYnJvd25cIiwgTW9kZWwuUHJvZHVjdC5NZXRhbCk7XHJcbiAgICAgICAgICAgIGRyYXdQbGFuZXRDaXJjbGUoXCJkYXJrY3lhblwiLCBNb2RlbC5Qcm9kdWN0LkdlbSk7XHJcbiAgICAgICAgICAgIGRyYXdQbGFuZXRDaXJjbGUoXCJvcmFuZ2VcIiwgTW9kZWwuUHJvZHVjdC5GdWVsKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRyYXcgaWRzXHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xyXG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvbnRTaXplID0gTWF0aC5jZWlsKFJBRElVUyAqIHRoaXMuZ3JpZFNpemUpO1xyXG4gICAgICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4IHNhbnMtc2VyaWZgO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtwbGFuZXQsIGNvb3JdIG9mIHBsYW5ldEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbdnBYLCB2cFldID0gdGhpcy50b1ZwQ29vcihjb29yKTtcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHtwbGFuZXQuaWR9YCwgdnBYLCB2cFkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBkcmF3IGNvbG9ueSBpbmRpY2F0b3JzXHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicHVycGxlXCI7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtwbGFuZXQsIGNvb3JdIG9mIHBsYW5ldEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGxhbmV0LmdldENvbG9ueSgpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW3ZwWCwgdnBZXSA9IHRoaXMudG9WcENvb3IoY29vcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKGN0eCwgdnBYLCB2cFksIHJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZHJhd1BsYW5ldHMoKTtcclxuICAgICAgICBkcmF3RmxlZXRzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3Q2lyY2xlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgcjogbnVtYmVyKSB7XHJcbiAgICAgICAgY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3VHJhZGVSb3V0ZXMoZ2FtZTogR2FtZSwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcbiAgICAgICAgY29uc3QgdHJhZGVSb3V0ZXMgPSBnYWxheHkuZ2V0VHJhZGVSb3V0ZXMoKTtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImN5YW5cIjtcclxuXHJcbiAgICAgICAgY29uc3QgZHJhd24gPSBuZXcgQWxnby5PcmRlckxpc3RTZXQ8TW9kZWwuQ29sb255PigoYSwgYikgPT4gYS5pZCAtIGIuaWQpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IFt1LCB2c10gb2YgdHJhZGVSb3V0ZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB2IG9mIHZzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWRnZSA9IFt1LCB2XTtcclxuICAgICAgICAgICAgICAgIGlmIChkcmF3bi5oYXMoLi4uZWRnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRyYXduLmFkZCguLi5lZGdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBbdXgsIHV5XSA9IHRoaXMudG9WcENvb3IoZ2FsYXh5LmdldENvb3IodSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3Z4LCB2eV0gPSB0aGlzLnRvVnBDb29yKGdhbGF4eS5nZXRDb29yKHYpKTtcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8odXgsIHV5KTtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odngsIHZ5KTtcclxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd0dyaWQoZ2FtZTogR2FtZSkge1xyXG5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhY2hlZEdyaWQ7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBpZiAoIWN0eCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYW5ub3QgY3JlYXRlIGNvbnRleHRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjNDk0OTQ5XCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGdyaWRTaXplID0gdGhpcy5ncmlkU2l6ZTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyBhbGwgaG9yaXpvbnRhbCBsaW5lc1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0WCA9ICgodGhpcy50b3BMZWZ0WzBdICogZ3JpZFNpemUpICUgZ3JpZFNpemUgKyBncmlkU2l6ZSkgJSBncmlkU2l6ZTtcclxuICAgICAgICBmb3IgKGxldCBjdXJYID0gMDsgY3VyWCA8PSBjYW52YXMud2lkdGg7IGN1clggKz0gZ3JpZFNpemUpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyWDIgPSBNYXRoLmNlaWwoY3VyWCArIHN0YXJ0WCk7XHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyhjdXJYMiArIDAuNSwgMC41KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhjdXJYMiArIDAuNSwgY2FudmFzLmhlaWdodCArIDAuNSk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRyYXcgYWxsIHZlcnRpY2FsIGxpbmVzXHJcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gKCh0aGlzLnRvcExlZnRbMV0gKiBncmlkU2l6ZSkgJSBncmlkU2l6ZSArIGdyaWRTaXplKSAlIGdyaWRTaXplO1xyXG4gICAgICAgIGZvciAobGV0IGN1clkgPSAwOyBjdXJZIDw9IGNhbnZhcy5oZWlnaHQ7IGN1clkgKz0gZ3JpZFNpemUpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyWTIgPSBNYXRoLmNlaWwoY3VyWSArIHN0YXJ0WSk7XHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbygwLjUsIGN1clkyICsgMC41KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyhjYW52YXMud2lkdGggKyAwLjUsIGN1clkyICsgMC41KTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3VHJhZGVSb3V0ZXMoZ2FtZSwgY2FudmFzLCBjdHgpO1xyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uIGJlaGluZCB0aGUgZXZlbnQgaGFuZGxlcnNcclxuICAgIHByaXZhdGUgcGFuVG8oZ2FtZTogR2FtZSwgdnBGcm9tOiBbbnVtYmVyLCBudW1iZXJdLCB2cFRvOiBbbnVtYmVyLCBudW1iZXJdKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wQWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgZnJvbSA9IHRoaXMudG9HYW1lQ29vcih2cEZyb20pO1xyXG4gICAgICAgIGNvbnN0IHRvID0gdGhpcy50b0dhbWVDb29yKHZwVG8pO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IEFsZ28uc3VidHJhY3QyRChmcm9tLCB0byk7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gQWxnby5ub3JtMkQob2Zmc2V0KTtcclxuICAgICAgICBjb25zdCBwaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gZGlzdGFuY2UgKiAwLjAyO1xyXG4gICAgICAgICAgICBsZXQgZmluYWw7XHJcbiAgICAgICAgICAgIGlmIChzcGVlZCA8IDAuMDEgLyB0aGlzLmdyaWRTaXplKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHBpZCk7XHJcbiAgICAgICAgICAgICAgICBmaW5hbCA9IGRpc3RhbmNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmluYWwgPSBzcGVlZDtcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlIC09IHNwZWVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2ogPSBBbGdvLnByb2plY3QyRChvZmZzZXQsIGZpbmFsKTtcclxuICAgICAgICAgICAgdGhpcy50b3BMZWZ0ID0gQWxnby5zdW0yRCh0aGlzLnRvcExlZnQsIHByb2opO1xyXG4gICAgICAgICAgICBnYW1lLnF1ZXVlVXBkYXRlKFVwZGF0ZUNoYW5uZWwuTWFwQ2hhbmdlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcGlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTYwMjc0NjZcclxuICAgIHByaXZhdGUgZHJhd0Fycm93KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBmcm9tOiBbbnVtYmVyLCBudW1iZXJdLCB0bzogW251bWJlciwgbnVtYmVyXSwgY29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IEFsZ28uc3VidHJhY3QyRCh0bywgZnJvbSk7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuKHkgLyB4KTtcclxuICAgICAgICBhbmdsZSArPSAoKGZyb21bMF0gPj0gdG9bMF0pID8gLTkwIDogOTApICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyhmcm9tWzBdLCBmcm9tWzFdKTtcclxuICAgICAgICBjdHgubGluZVRvKHRvWzBdLCB0b1sxXSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyBhcnJvd2hlYWRcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHRvWzBdLCB0b1sxXSk7XHJcbiAgICAgICAgY3R4LnJvdGF0ZShhbmdsZSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VHJpYW5nbGUoY3R4KTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuICAgIHByaXZhdGUgZHJhd1RyaWFuZ2xlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgY3R4Lm1vdmVUbygwLCAwKTtcclxuICAgICAgICBjdHgubGluZVRvKDUsIDIwKTtcclxuICAgICAgICBjdHgubGluZVRvKC01LCAyMCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcEFjdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5waWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucGlkKTtcclxuICAgICAgICAgICAgdGhpcy5waWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFuKGdhbWU6IEdhbWUsIGU6IEhhbW1lcklucHV0KSB7XHJcbiAgICAgICAgdGhpcy5waWQgPSB0aGlzLnBhblRvKGdhbWUsIHRoaXMuZ2V0VnBDZW50ZXIoKSwgQWxnby5zdW0yRCh0aGlzLmdldFZwQ2VudGVyKCksIFtlLmRlbHRhWCwgZS5kZWx0YVldKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGljayhnYW1lOiBHYW1lLCBlOiBIYW1tZXJJbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IGdhbGF4eSA9IGdhbWUuZ2FsYXh5O1xyXG4gICAgICAgIGNvbnN0IGJiID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgY29vciA9IFtcclxuICAgICAgICAgICAgZS5jZW50ZXIueCAtIGJiLmxlZnQsXHJcbiAgICAgICAgICAgIGUuY2VudGVyLnkgLSBiYi50b3AsXHJcbiAgICAgICAgXSBhcyBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgICAgIGNvbnN0IGdhbWVDb29yID0gdGhpcy50b0dhbWVDb29yKGNvb3IpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbi5oYW5kbGVTZWxlY3RlZCh0aGlzLCBnYW1lLCBnYW1lQ29vcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbmVhcmJ5T2JqcyA9IGdhbGF4eVxyXG4gICAgICAgICAgICAgICAgLnNlYXJjaE5lYXJieU9ianMoZ2FtZUNvb3IsIFJBRElVUylcclxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobmVhcmJ5T2Jqcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBuZWFyYnlPYmpzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIFZpZXcuU2VsZWN0Vmlldy5jcmVhdGVTaW5nbGUoZ2FtZSwgb2JqKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lLmFkZENsb3NhYmxlKG5ldyBWaWV3LlNlbGVjdFZpZXcoZ2FtZSwgbmVhcmJ5T2JqcykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGJsY2xpY2soZ2FtZTogR2FtZSwgZTogSGFtbWVySW5wdXQpIHtcclxuICAgICAgICBjb25zdCBiYiA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGNvb3IgPSBbXHJcbiAgICAgICAgICAgIGUuY2VudGVyLnggLSBiYi5sZWZ0LFxyXG4gICAgICAgICAgICBlLmNlbnRlci55IC0gYmIudG9wLFxyXG4gICAgICAgIF0gYXMgW251bWJlciwgbnVtYmVyXTtcclxuICAgICAgICB0aGlzLnBpZCA9IHRoaXMucGFuVG8oZ2FtZSwgdGhpcy5nZXRWcENlbnRlcigpLCBjb29yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdoZWVsKGdhbWU6IEdhbWUsIGU6IFdoZWVsRXZlbnQgfCBIYW1tZXJJbnB1dCkge1xyXG4gICAgICAgIHRoaXMuc3RvcEFjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGlzWm9vbWluZ0luID0gZS5kZWx0YVkgPCAwO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlckNvb3IgPSB0aGlzLmdldENlbnRlcigpO1xyXG4gICAgICAgIGxldCB6b29tU3BlZWQgPSAxMDtcclxuICAgICAgICB0aGlzLnBpZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzWm9vbWluZ0luKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRTaXplID0gTWF0aC5taW4oTUFYX0dSSURfU0laRSwgdGhpcy5ncmlkU2l6ZSArIHpvb21TcGVlZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRTaXplID0gTWF0aC5tYXgoTUlOX0dSSURfU0laRSwgdGhpcy5ncmlkU2l6ZSAtIHpvb21TcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50b3BMZWZ0ID0gdGhpcy5jZW50ZXJWcCh0aGlzLnRvVnBDb29yKGNlbnRlckNvb3IpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBpZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB6b29tU3BlZWQgLz0gMS4xO1xyXG4gICAgICAgICAgICAgICAgaWYgKHpvb21TcGVlZCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnYW1lLnF1ZXVlVXBkYXRlKFVwZGF0ZUNoYW5uZWwuTWFwQ2hhbmdlKTtcclxuICAgICAgICB9LCBVSV9JTlRFUlZBTCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjZW50ZXJWcCh2cEF0OiBbbnVtYmVyLCBudW1iZXJdKSB7XHJcbiAgICAgICAgY29uc3QgYXQgPSB0aGlzLnRvR2FtZUNvb3IodnBBdCk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gQWxnby5zdWJ0cmFjdDJEKHRoaXMuZ2V0Q2VudGVyKCksIGF0KTtcclxuICAgICAgICByZXR1cm4gQWxnby5zdW0yRCh0aGlzLnRvcExlZnQsIG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b1ZwQ29vcihbeCwgeV06IFtudW1iZXIsIG51bWJlcl0pOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICBjb25zdCBbdGxYLCB0bFldID0gdGhpcy50b3BMZWZ0O1xyXG4gICAgICAgIHJldHVybiBbKHggKyB0bFgpICogdGhpcy5ncmlkU2l6ZSwgKHkgKyB0bFkpICogdGhpcy5ncmlkU2l6ZV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b0dhbWVDb29yKFt4LCB5XTogW251bWJlciwgbnVtYmVyXSk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIGNvbnN0IFt0bFgsIHRsWV0gPSB0aGlzLnRvcExlZnQ7XHJcbiAgICAgICAgcmV0dXJuIFt4IC8gdGhpcy5ncmlkU2l6ZSAtIHRsWCwgeSAvIHRoaXMuZ3JpZFNpemUgLSB0bFldO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VnBDZW50ZXIoKTogW251bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgY29uc3QgJHZpZXcgPSAkKHRoaXMudmlldyk7XHJcbiAgICAgICAgcmV0dXJuIFskdmlldy53aWR0aCgpISAvIDIsICR2aWV3LmhlaWdodCgpISAvIDJdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2VudGVyKCk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvR2FtZUNvb3IodGhpcy5nZXRWcENlbnRlcigpKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9tYXB2aWV3LnRzIiwiaW1wb3J0IHsgR2FtZSwgVXBkYXRlQ2hhbm5lbCB9IGZyb20gXCIuLi9nYW1lXCI7XHJcbmltcG9ydCAqIGFzIE1vZGVsIGZyb20gXCIuLi9tb2RlbC9tb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBWaWV3IGZyb20gXCIuLi92aWV3L3ZpZXdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51IGltcGxlbWVudHMgVmlldy5PYnNlcnZlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBQYXVzZUJ1dHRvbihnYW1lKTtcclxuICAgICAgICB0aGlzLnNldHVwQ2xvc2VBbGwoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5zZXR1cEZhc3RGb3J3YXJkQnV0dG9uKGdhbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBTbG93RG93bkJ1dHRvbihnYW1lKTtcclxuICAgICAgICB0aGlzLnNldHVwQnV5VHJhZGVyQnV0dG9uKGdhbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBTYXZlQnV0dG9uKGdhbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBJbXBvcnRFeHBvcnRCdXR0b24oZ2FtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShnYW1lOiBHYW1lLCBjaGFubmVsczogU2V0PFVwZGF0ZUNoYW5uZWw+KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGdhbGF4eSA9IGdhbWUuZ2FsYXh5O1xyXG5cclxuICAgICAgICBpZiAoY2hhbm5lbHMuaGFzKFVwZGF0ZUNoYW5uZWwuRGF0YUNoYW5nZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9uZXkgPSBnYWxheHkuZ2V0TW9uZXkoKTtcclxuICAgICAgICAgICAgJChcIiNjYXNoXCIpXHJcbiAgICAgICAgICAgICAgICAuY3NzKFwiY29sb3JcIiwgbW9uZXkgPj0gMCA/IFwiZ3JlZW5cIiA6IFwicmVkXCIpXHJcbiAgICAgICAgICAgICAgICAudGV4dChgJCR7bW9uZXkudG9GaXhlZCgyKX1gKTtcclxuICAgICAgICAgICAgJChcIiNjb2xvbmlzdFwiKS50ZXh0KGdhbGF4eS5nZXROdW1Db2xvbmlzdHMoKS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgJChcIiN0cmFkZXJcIikudGV4dChnYWxheHkuZ2V0TnVtVW51c2VkVHJhZGVycygpLnRvRml4ZWQoMikpO1xyXG4gICAgICAgICAgICAkKFwiI2Zhc3RcIikucHJvcChcImRpc2FibGVkXCIsICFnYW1lLmNhbkZhc3RGb3J3YXJkKCkpO1xyXG4gICAgICAgICAgICAkKFwiI3Nsb3dcIikucHJvcChcImRpc2FibGVkXCIsICFnYW1lLmNhblNsb3dEb3duKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbm5lbHMuaGFzKFVwZGF0ZUNoYW5uZWwuVHVybkNoYW5nZSkpIHtcclxuICAgICAgICAgICAgJChcIiN5ZWFyXCIpLnRleHQoZ2FsYXh5LmdldFllYXIoKSk7XHJcbiAgICAgICAgICAgICQoXCIjZGF5XCIpLnRleHQoZ2FsYXh5LmdldERheSgpKTtcclxuICAgICAgICAgICAgJChcIiNzY29yZVwiKS50ZXh0KGdhbGF4eS5nZXRTY29yZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0ICRidXR0b25MYWJlbCA9ICQoXCIjcGF1c2UgaVwiKTtcclxuICAgICAgICBjb25zdCAkcGF1c2VCdXR0b24gPSAkKFwiI3BhdXNlXCIpO1xyXG4gICAgICAgIGlmIChnYW1lLmlzR2FtZVJ1bm5pbmcoKSkge1xyXG4gICAgICAgICAgICAkcGF1c2VCdXR0b24uYXR0cihcInRpdGxlXCIsIFwiUGF1c2VcIik7XHJcbiAgICAgICAgICAgICRidXR0b25MYWJlbC50ZXh0KFwicGF1c2VcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHBhdXNlQnV0dG9uLmF0dHIoXCJ0aXRsZVwiLCBcIlN0YXJ0XCIpO1xyXG4gICAgICAgICAgICAkYnV0dG9uTGFiZWwudGV4dChcInBsYXlfYXJyb3dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBGYXN0Rm9yd2FyZEJ1dHRvbihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgJChcIiNmYXN0XCIpLmNsaWNrKCgpID0+IGdhbWUuZmFzdEZvcndhcmQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cFNsb3dEb3duQnV0dG9uKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICAkKFwiI3Nsb3dcIikuY2xpY2soKCkgPT4gZ2FtZS5zbG93RG93bigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldHVwUGF1c2VCdXR0b24oZ2FtZTogR2FtZSkge1xyXG4gICAgICAgICQoXCIjcGF1c2VcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIlBhdXNlXCIpXHJcbiAgICAgICAgICAgIC5jbGljaygoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFnYW1lLmlzR2FtZVJ1bm5pbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUucmVzdW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBCdXlUcmFkZXJCdXR0b24oZ2FtZTogR2FtZSkge1xyXG4gICAgICAgICQoXCIjYnV5VHJhZGVyXCIpXHJcbiAgICAgICAgICAgIC5jbGljaygoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNPayA9IGUuY3RybEtleSB8fCBjb25maXJtKGBBcmUgeW91IHN1cmU/IFRoaXMgYWN0aW9uIGNvc3RzICQke01vZGVsLlRSQURFUl9DT1NUfS4gKHByZXNzIGN0cmwgd2hpbGUgY2xpY2tpbmcgdGhlIGJ1dHRvbiBzdXBwcmVzc2VzIHRoaXMgbWVzc2FnZSlgKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc09rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FsYXh5LmFkZFRyYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbGF4eS53aXRoZHJhdyhNb2RlbC5UUkFERVJfQ09TVCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBTYXZlQnV0dG9uKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICAkKFwiI3NhdmVcIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBnYW1lLnNhdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldHVwSW1wb3J0RXhwb3J0QnV0dG9uKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICAkKFwiI2ltcG9ydEV4cG9ydFwiKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgVmlldy5JbXBvcnRFeHBvcnRWaWV3KGdhbWUpO1xyXG4gICAgICAgICAgICBnYW1lLmFkZENsb3NhYmxlKHZpZXcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBDbG9zZUFsbChnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgJChcIiNjbG9zZUFsbFwiKS5jbGljaygoZSkgPT4ge1xyXG4gICAgICAgICAgICBnYW1lLmNsb3NlQWxsKCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXcvbWVudS50cyIsImltcG9ydCAqIGFzIEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCAqIGFzIEFsZ28gZnJvbSBcIi4uL2FsZ29yaXRobS9hbGdvcml0aG1cIjtcclxuaW1wb3J0IHsgR2FtZSwgVXBkYXRlQ2hhbm5lbCB9IGZyb20gXCIuLi9nYW1lXCI7XHJcbmltcG9ydCB7IERyYXdUYWJsZSB9IGZyb20gXCIuLi9odG1sXCI7XHJcbmltcG9ydCAqIGFzIE1vZGVsIGZyb20gXCIuLi9tb2RlbC9tb2RlbFwiO1xyXG5pbXBvcnQgeyBhbGxQcm9kdWN0cywgUHJvZHVjdCB9IGZyb20gXCIuLi9tb2RlbC9wcm9kdWN0XCI7XHJcbmltcG9ydCAqIGFzIFZpZXcgZnJvbSBcIi4vdmlld1wiO1xyXG5cclxuY29uc3QgQkFTSUNfR09PRFMgPSBbUHJvZHVjdC5Gb29kLCBQcm9kdWN0LkRyaW5rLCBQcm9kdWN0LkFwcGFyZWwsIFByb2R1Y3QuTWVkaWNpbmVdXHJcbiAgICAubWFwKChwcm9kdWN0KSA9PiBQcm9kdWN0W3Byb2R1Y3RdKVxyXG4gICAgLmpvaW4oKTtcclxuY29uc3QgTFVYVVJZX0dPT0RTID0gW1Byb2R1Y3QuQWNjZXNzb3J5LCBQcm9kdWN0LkZ1cm5pdHVyZSwgUHJvZHVjdC5HYWRnZXQsIFByb2R1Y3QuVmVoaWNsZV1cclxuICAgIC5tYXAoKHByb2R1Y3QpID0+IFByb2R1Y3RbcHJvZHVjdF0pXHJcbiAgICAuam9pbigpO1xyXG5jb25zdCBSQVdfTUFURVJJQUxTID0gTW9kZWwuUkFXX01BVEVSSUFMU1xyXG4gICAgLm1hcCgocHJvZHVjdCkgPT4gUHJvZHVjdFtwcm9kdWN0XSlcclxuICAgIC5qb2luKCk7XHJcbmNvbnN0IFNFQ09OREFSWV9NQVRFUklBTFMgPSBJbW11dGFibGVcclxuICAgIC5TZXQoYWxsUHJvZHVjdHMoKSlcclxuICAgIC5zdWJ0cmFjdChNb2RlbC5SQVdfTUFURVJJQUxTKVxyXG4gICAgLm1hcCgocHJvZHVjdCkgPT4gUHJvZHVjdFtwcm9kdWN0XSlcclxuICAgIC5qb2luKCk7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhbmV0VmlldyBpbXBsZW1lbnRzIFZpZXcuT2JzZXJ2ZXIge1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnRlbnRzOiBWaWV3Lk9ic2VydmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aGVDb250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcml2YXRlIGlzUHJldkNvbG9uaXplZCA9IHRoaXMucGxhbmV0LmlzQ29sb25pemVkKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2FtZTogR2FtZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHBsYW5ldDogTW9kZWwuUGxhbmV0LFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQoZ2FtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShnYW1lOiBHYW1lLCBjaGFubmVsczogU2V0PFVwZGF0ZUNoYW5uZWw+KSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1ByZXZDb2xvbml6ZWQgJiYgdGhpcy5wbGFuZXQuaXNDb2xvbml6ZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUHJldkNvbG9uaXplZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0KGdhbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudHMudXBkYXRlKGdhbWUsIGNoYW5uZWxzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1hcmtldFBhbmVsKGdhbWU6IEdhbWUsIGNvbG9ueTogTW9kZWwuQ29sb255KSB7XHJcbiAgICAgICAgY29uc3QgcGFuZWwgPSBuZXcgTWFya2V0UGFuZWwoZ2FtZSwgdGhpcy50aGVDb250ZW50cywgY29sb255KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzID0gcGFuZWw7XHJcbiAgICAgICAgdGhpcy5jb250ZW50cy51cGRhdGUoZ2FtZSwgbmV3IFNldChbVXBkYXRlQ2hhbm5lbC5EYXRhQ2hhbmdlXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJbmR1c3RyeVBhbmVsKGdhbWU6IEdhbWUsIGNvbG9ueTogTW9kZWwuQ29sb255KSB7XHJcbiAgICAgICAgY29uc3QgcGFuZWwgPSBuZXcgSW5kdXN0cnlQYW5lbChnYW1lLCB0aGlzLnRoZUNvbnRlbnRzLCBjb2xvbnkpO1xyXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBwYW5lbDtcclxuICAgICAgICBwYW5lbC51cGRhdGUoZ2FtZSwgbmV3IFNldChbVXBkYXRlQ2hhbm5lbC5EYXRhQ2hhbmdlXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJbmZvUGFuZWwoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIGNvbnN0IHBhbmVsID0gbmV3IFBsYW5ldEluZm9QYW5lbChnYW1lLCB0aGlzLnRoZUNvbnRlbnRzLCB0aGlzLnBsYW5ldCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IHBhbmVsO1xyXG4gICAgICAgIHBhbmVsLnVwZGF0ZShnYW1lLCBuZXcgU2V0KFtVcGRhdGVDaGFubmVsLkRhdGFDaGFuZ2VdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsYXlvdXQoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIGNvbnN0IHBsYW5ldCA9IHRoaXMucGxhbmV0O1xyXG4gICAgICAgIGNvbnN0ICR0aXRsZSA9IFZpZXcuJGNyZWF0ZVRpdGxlYmFyKGdhbWUsIHRoaXMsIGBQbGFuZXQgJHtwbGFuZXQuaWR9YCk7XHJcbiAgICAgICAgY29uc3QgJGNvbnRlbnRQYW5lbCA9IFZpZXcuJGFkZENvbnRlbnRQYW5lbENsYXNzKHRoaXMudGhlQ29udGVudHMpO1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0ID0gWyR0aXRsZV07XHJcblxyXG4gICAgICAgIGNvbnN0ICR0YWJzID0gJChcIjxuYXY+XCIpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcInRhYnNcIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYW5ldC5pc0NvbG9uaXplZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ueSA9IHBsYW5ldC5nZXRDb2xvbnkoKSE7XHJcbiAgICAgICAgICAgICQoXCI8ZGl2PlwiKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoXCJQbGFuZXRcIilcclxuICAgICAgICAgICAgICAgIC5jbGljaygoKSA9PiB0aGlzLnNldEluZm9QYW5lbChnYW1lKSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkdGFicyk7XHJcblxyXG4gICAgICAgICAgICAkKFwiPGRpdj5cIilcclxuICAgICAgICAgICAgICAgIC50ZXh0KFwiTWFya2V0XCIpXHJcbiAgICAgICAgICAgICAgICAuY2xpY2soKCkgPT4gdGhpcy5zZXRNYXJrZXRQYW5lbChnYW1lLCBjb2xvbnkpKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKCR0YWJzKTtcclxuXHJcbiAgICAgICAgICAgICQoXCI8ZGl2PlwiKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoXCJJbmR1c3RyeVwiKVxyXG4gICAgICAgICAgICAgICAgLmNsaWNrKCgpID0+IHRoaXMuc2V0SW5kdXN0cnlQYW5lbChnYW1lLCBjb2xvbnkpKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKCR0YWJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkdGFicy5jaGlsZHJlbigpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKCR0YWJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpc3QucHVzaCgkY29udGVudFBhbmVsKTtcclxuXHJcbiAgICAgICAgJCh0aGlzLnZpZXcpLmVtcHR5KCk7XHJcbiAgICAgICAgVmlld1xyXG4gICAgICAgICAgICAuJGFkZFBhbmVsQ2xhc3ModGhpcylcclxuICAgICAgICAgICAgLmFwcGVuZCguLi5saXN0KVxyXG4gICAgICAgICAgICAubW91c2Vkb3duKChlKSA9PiBWaWV3Lm1ha2VEcmFnZ2FibGUodGhpcy52aWV3LCBlKSlcclxuICAgICAgICAgICAgLmNsaWNrKCgpID0+IFZpZXcuYnJpbmdUb0Zyb250KHRoaXMudmlldykpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEluZm9QYW5lbChnYW1lKTtcclxuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLnZpZXcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBJbmR1c3RyeVBhbmVsIGltcGxlbWVudHMgVmlldy5PYnNlcnZlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBvYnNlcnZhYmxlczogVmlldy5PYnNlcnZlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2FtZTogR2FtZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXc6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgY29sb255OiBNb2RlbC5Db2xvbnksXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmxheW91dChnYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGdhbWU6IEdhbWUsIGNoYW5uZWxzOiBTZXQ8VXBkYXRlQ2hhbm5lbD4pIHtcclxuICAgICAgICBpZiAoY2hhbm5lbHMuaGFzKFVwZGF0ZUNoYW5uZWwuUmVjcmVhdGVJbmR1c3RyeUxheW91dCkpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQoZ2FtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2YWJsZSBvZiB0aGlzLm9ic2VydmFibGVzKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudXBkYXRlKGdhbWUsIGNoYW5uZWxzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsYXlvdXQoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbG9ueSA9IHRoaXMuY29sb255O1xyXG4gICAgICAgIGNvbnN0IGdhbGF4eSA9IGdhbWUuZ2FsYXh5O1xyXG4gICAgICAgIGNvbnN0IGluZHVzdHJpZXMgPSBnYWxheHkuZ2V0SW5kdXN0cmllcyhjb2xvbnkpO1xyXG5cclxuICAgICAgICBjb25zdCBncm91cHMgPSBuZXcgTWFwKEFycmF5XHJcbiAgICAgICAgICAgIC5mcm9tKGluZHVzdHJpZXMpXHJcbiAgICAgICAgICAgIC5tYXAoKHgpID0+IFt4LnByb2R1Y3RUeXBlLCB4XSBhcyBbUHJvZHVjdCwgTW9kZWwuSW5kdXN0cnldKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvY2FsUmVzb3VyY2UgPSBjb2xvbnkuZ2V0SG9tZVBsYW5ldCgpLnJlc291cmNlO1xyXG4gICAgICAgIC8vIG9ubHkgc2hvdyBnb29kcyB0aGF0IHRoZSBwbGFuZXQgY2FuIHByb2R1Y2VcclxuICAgICAgICBjb25zdCBkaXNwbGF5UHJvZHVjdHMgPSBhbGxQcm9kdWN0cygpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3QgPT09IGxvY2FsUmVzb3VyY2UgfHwgLy8gaXMgdGhlIHJhdyBtYXRlcmlhbCB0aGF0IHRoZSBwbGFuZXQgY2FuIHByb2R1Y2VcclxuICAgICAgICAgICAgICAgIE1vZGVsLlNFQ09OREFSWV9QUk9EVUNUUy5oYXMocHJvZHVjdCkgfHwgLy8gaXMgYSBzZWNvbmRhcnkgcHJvZHVjdCAob25lIHRoYXQgcmVxdWlyZSBwb3N0LXByb2Nlc3NlZCBnb29kcyB0byBwcm9kdWNlKVxyXG4gICAgICAgICAgICAgICAgTW9kZWwuSW5kdXN0cnlcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0RmxhdERlbWFuZFByb2R1Y3RzKHByb2R1Y3QpXHJcbiAgICAgICAgICAgICAgICAgICAgLmhhcyhsb2NhbFJlc291cmNlKSkgLy8gb3IgdGhlIHByb2R1Y2UgaXMgbmVlZGVkIGJ5IGluZHVzdHJpZXNcclxuICAgICAgICAgICAgLnNvcnQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9ICQoXCI8dGFibGU+XCIpLmFwcGVuZCguLi50aGlzLm1ha2VJbmR1c3RyeURpdkNvbnRhaW5lcihnYW1lLCBncm91cHMsIGRpc3BsYXlQcm9kdWN0cykpO1xyXG5cclxuICAgICAgICAkKHRoaXMudmlldylcclxuICAgICAgICAgICAgLmVtcHR5KClcclxuICAgICAgICAgICAgLmFwcGVuZChkYXRhKVxyXG4gICAgICAgICAgICAuY2xpY2soKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgKm1ha2VJbmR1c3RyeURpdkNvbnRhaW5lcihnYW1lOiBHYW1lLCBpbmR1c3RyaWVzOiBNYXA8UHJvZHVjdCwgTW9kZWwuSW5kdXN0cnk+LCBwcm9kdWN0czogUHJvZHVjdFtdKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGdhbGF4eSA9IGdhbWUuZ2FsYXh5O1xyXG5cclxuICAgICAgICBsZXQgc2hvd1Byb2R1Y3RzO1xyXG4gICAgICAgIGlmIChpbmR1c3RyaWVzLnNpemUgPCAyKSB7XHJcbiAgICAgICAgICAgIHNob3dQcm9kdWN0cyA9IHByb2R1Y3RzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dQcm9kdWN0cyA9IEFycmF5XHJcbiAgICAgICAgICAgICAgICAuZnJvbShpbmR1c3RyaWVzLnZhbHVlcygpKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoeCkgPT4geC5wcm9kdWN0VHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2Ygc2hvd1Byb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZHVzdHJ5ID0gaW5kdXN0cmllcy5nZXQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50cztcclxuICAgICAgICAgICAgY29uc3QgY29udHJvbEJ1dHRvbnMgPSAkKFwiPGRpdj5cIik7XHJcbiAgICAgICAgICAgIGlmIChpbmR1c3RyeSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50cyA9IHRoaXMubWFrZUJ1aWxkQnV0dG9uKGdhbWUsIHByb2R1Y3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGVudHMgPSB0aGlzLm1ha2VJbmR1c3RyeURpdihnYW1lLCBpbmR1c3RyeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udHJvbEJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPGJ1dHRvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KFwiK1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcImV4cGFuZCBpbmR1c3RyeSAoaW5jcmVhc2Ugc2NhbGUgYnkgMSlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jbGljaygoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzT2sgPSBlLnNoaWZ0S2V5IHx8IGUuY3RybEtleSB8fCBjb25maXJtKGBBcmUgeW91IHN1cmU/IFRoaXMgYWN0aW9uIGNvc3RzICQke01vZGVsLklORFVTVFJZX0NPU1R9IHJlZHVjZXMgb3BlcmF0aW9uYWwgZWZmaWNpZW5jeS4gKHByZXNzIGN0cmwgd2hpbGUgY2xpY2tpbmcgdGhlIGJ1dHRvbiBzdXBwcmVzc2VzIHRoaXMgbWVzc2FnZSwgcHJlc3Mgc2hpZnQgZm9yIDEwIHRpbWVzIHRoaXMgb3BlcmF0aW9uKWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kdXN0cnkudXBncmFkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FsYXh5LndpdGhkcmF3KE1vZGVsLklORFVTVFJZX0NPU1QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc09rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZHVzdHJ5LnVwZ3JhZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FsYXh5LndpdGhkcmF3KE1vZGVsLklORFVTVFJZX0NPU1QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gbm90aGluZyBjaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUucXVldWVVcGRhdGUoVXBkYXRlQ2hhbm5lbC5EYXRhQ2hhbmdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPGJ1dHRvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KFwiLVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcImRvd24gc2l6ZSAoZGVjcmVhc2Ugc2NhbGUgYnkgMSlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jbGljaygoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzT2sgPSBlLnNoaWZ0S2V5IHx8IGUuY3RybEtleSB8fCBjb25maXJtKGBBcmUgeW91IHN1cmU/IFRoaXMgYWN0aW9uIGNvc3RzICQke01vZGVsLklORFVTVFJZX0RFTU9MSVNIX0NPU1R9IHJlZHVjZXMgb3BlcmF0aW9uYWwgZWZmaWNpZW5jeS4gKHByZXNzIGN0cmwgd2hpbGUgY2xpY2tpbmcgdGhlIGJ1dHRvbiBzdXBwcmVzc2VzIHRoaXMgbWVzc2FnZSwgcHJlc3Mgc2hpZnQgZm9yIDEwIHRpbWVzIHRoaXMgb3BlcmF0aW9uKWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc09rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR1c3RyeS5kb3duU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGF4eS53aXRoZHJhdyhNb2RlbC5JTkRVU1RSWV9ERU1PTElTSF9DT1NUKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZHVzdHJ5LmRvd25TaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYWxheHkud2l0aGRyYXcoTW9kZWwuSU5EVVNUUllfREVNT0xJU0hfQ09TVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5xdWV1ZVVwZGF0ZShVcGRhdGVDaGFubmVsLkRhdGFDaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPGJ1dHRvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KFwiWFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcInNodXQgZG93biAoZnJlZSB1cCB0aGUgaW5kdXN0cnkgc2xvdClcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jbGljaygoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZHVzdHJ5U2NhbGUgPSBpbmR1c3RyeS5nZXRTY2FsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbW9saXNoQ29zdCA9IGluZHVzdHJ5U2NhbGUgKiBNb2RlbC5JTkRVU1RSWV9ERU1PTElTSF9DT1NUO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzT2sgPSBlLmN0cmxLZXkgfHwgY29uZmlybShgQXJlIHlvdSBzdXJlPyBUaGlzIGFjdGlvbiBjb3N0cyAkJHtkZW1vbGlzaENvc3R9IHJlZHVjZXMgb3BlcmF0aW9uYWwgZWZmaWNpZW5jeS4gKHByZXNzIGN0cmwgd2hpbGUgY2xpY2tpbmcgdGhlIGJ1dHRvbiBzdXBwcmVzc2VzIHRoaXMgbWVzc2FnZSlgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNPaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYWxheHkuc2h1dGRvd25JbmR1c3RyeSh0aGlzLmNvbG9ueSwgaW5kdXN0cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYWxheHkud2l0aGRyYXcoZGVtb2xpc2hDb3N0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5xdWV1ZVVwZGF0ZShVcGRhdGVDaGFubmVsLlJlY3JlYXRlSW5kdXN0cnlMYXlvdXQsIFVwZGF0ZUNoYW5uZWwuRGF0YUNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHlpZWxkICQoXCI8dHI+XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQoUHJvZHVjdFtwcm9kdWN0XSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFBST0RVQ1RfSE9WRVJfVEVYVC5nZXQocHJvZHVjdCkhKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoY29udHJvbEJ1dHRvbnMpLFxyXG4gICAgICAgICAgICAgICAgJChcIjx0ZD5cIikuYXBwZW5kKGNvbnRlbnRzKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYWtlQnVpbGRCdXR0b24oZ2FtZTogR2FtZSwgcHJvZHVjdDogUHJvZHVjdCkge1xyXG4gICAgICAgIHJldHVybiAkKFwiPGJ1dHRvbj5cIilcclxuICAgICAgICAgICAgLnRleHQoXCIrIEJ1aWxkXCIpXHJcbiAgICAgICAgICAgIC5jbGljaygoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNPayA9IGUuY3RybEtleSB8fCBjb25maXJtKGBBcmUgeW91IHN1cmU/IFRoaXMgYWN0aW9uIGNvc3RzICQke01vZGVsLklORFVTVFJZX0NPU1R9LCBhbmQgd2lsbCB0YWtlIHVwIGEgYnVpbGRpbmcgc2xvdCAobWF4IDIgcGVyIHBsYW5ldCkuIChwcmVzcyBjdHJsIHdoaWxlIGNsaWNraW5nIHRoZSBidXR0b24gc3VwcHJlc3NlcyB0aGlzIG1lc3NhZ2UpYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNPaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhbGF4eSA9IGdhbWUuZ2FsYXh5O1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbGF4eS5hZGRJbmR1c3RyeShwcm9kdWN0LCB0aGlzLmNvbG9ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FsYXh5LndpdGhkcmF3KE1vZGVsLklORFVTVFJZX0NPU1QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUucXVldWVVcGRhdGUoVXBkYXRlQ2hhbm5lbC5SZWNyZWF0ZUluZHVzdHJ5TGF5b3V0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxheW91dChnYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYWtlSW5kdXN0cnlEaXYoZ2FtZTogR2FtZSwgaW5kdXN0cnk6IE1vZGVsLkluZHVzdHJ5KSB7XHJcbiAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcbiAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICQoXCI8ZGl2PlwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgJHNjYWxlTGFiZWwgPSAkKFwiPHNwYW4+XCIpO1xyXG4gICAgICAgICQoXCI8ZGl2PlwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiUHJvZHVjdGlvbiBzY2FsZSBpcyB0aGUgc2l6ZSBvZiB5b3VyIGluZHVzdHJpYWwgY29tcGxleC4gSXQgZGV0ZXJtaW5lcyBwcm9kdWN0aW9uIGNhcGFjaXR5IGFuZCBpbnB1dCBjb25zdW1wdGlvbi5cIilcclxuICAgICAgICAgICAgLnRleHQoXCJQcm9kdWN0aW9uIFNjYWxlOiBcIilcclxuICAgICAgICAgICAgLmFwcGVuZCgkc2NhbGVMYWJlbClcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCRjb250YWluZXIpO1xyXG5cclxuICAgICAgICBjb25zdCAkcHJvZENhcExhYmVsID0gJChcIjxzcGFuPlwiKTtcclxuICAgICAgICAkKFwiPGRpdj5cIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIlByb2R1Y3Rpb24gY2FwYWNpdHkgaXMgdGhlIG51bWJlciBvZiBnb29kcyB0aGF0IHRoZSBpbmR1c3RyaWFsIGNvbXBsZXggY2FuIHByb2R1Y2Ugd2hlbiBydW5uaW5nIDEwMCUgZWZmaWNpZW5jeSBhbmQgaGFzIGVub3VnaCBpbnB1dCBnb29kcy5cIilcclxuICAgICAgICAgICAgLnRleHQoXCJQcm9kdWN0aW9uIENhcGFjaXR5OiBcIilcclxuICAgICAgICAgICAgLmFwcGVuZCgkcHJvZENhcExhYmVsKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGNvbnN0ICRvcEVmZkxhYmVsID0gJChcIjxzcGFuPlwiKTtcclxuICAgICAgICAkKFwiPGRpdj5cIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBgT3BlcmF0aW9uYWwgZWZmaWNpZW5jeSBkZXRlcm1pbmVzIHByb2QgY2FwIGFuZCB0aGUgZml4ZWQgY29zdCBwZXIgdW5pdC4gSW5kdXN0cmlhbCBjb21wbGV4ZXMgdGhhdCBwcm9kdWNlIHJhdyBtYXRlcmlhbHMgWyR7UkFXX01BVEVSSUFMU31dIG5lZWQgWyR7UHJvZHVjdFtQcm9kdWN0LlRvb2xdfV0gdG8gaW5jcmVhc2UgZWZmLCB3aGlsZSBzZWNvbmRhcnkgcHJvZHVjdHMgWyR7U0VDT05EQVJZX01BVEVSSUFMU31dIG5lZWQgWyR7UHJvZHVjdFtQcm9kdWN0Lk1hY2hpbmVdfV0gdG8gaW5jcmVhc2UgZWZmLmApXHJcbiAgICAgICAgICAgIC50ZXh0KFwiT3BlcmF0aW9uYWwgRWZmLjogXCIpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJG9wRWZmTGFiZWwpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygkY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgJHVzZWRFbmVyZ3lMYWJlbCA9ICQoXCI8c3Bhbj5cIik7XHJcbiAgICAgICAgJChcIjxkaXY+XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJUaGUgYW1vdW50IG9mIGVuZXJneSB1c2VkIGJ5IHRoaXMgaW5kdXN0cmlhbCBjb21wbGV4LiBUaGUgcmVhbCBjb3N0IGlzIEVuZXJneSBVc2FnZSB0aW1lcyBVbml0IFByaWNlIChmb3VuZCB0aGlzIGluIHBsYW5ldCBwYW5lbCkuXCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwiRW5lcmd5IFVzYWdlOiBcIilcclxuICAgICAgICAgICAgLmFwcGVuZCgkdXNlZEVuZXJneUxhYmVsKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGNvbnN0ICRjb3N0UGVyVW5pdExhYmVsID0gJChcIjxzcGFuPlwiKTtcclxuICAgICAgICAkKFwiPGRpdj5cIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIkZpeGVkIGNvc3QgdGhlIGFtb3VudCBvZiBtb25leSB0aGF0IGlzIHVzZWQgdG8gcHJvZHVjZSBhIHVuaXQgb2YgcHJvZHVjdDsgaW5wdXQgbWF0ZXJpYWxzICYgZW5lcmd5IGNvc3QgYXJlbid0IGluY2x1ZGVkLlwiKVxyXG4gICAgICAgICAgICAudGV4dChcIkZpeGVkIENvc3QgUGVyIFVuaXQ6IFwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCRjb3N0UGVyVW5pdExhYmVsKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHVwZGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJHNjYWxlTGFiZWwudGV4dChpbmR1c3RyeS5nZXRTY2FsZSgpKTtcclxuICAgICAgICAgICAgICAgICRwcm9kQ2FwTGFiZWwudGV4dChpbmR1c3RyeS5wcm9kQ2FwKGdhbGF4eSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wRWZmID0gaW5kdXN0cnkuZ2V0T3BlcmF0aW9uYWxFZmYoKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICRvcEVmZkxhYmVsLnRleHQob3BFZmYudG9GaXhlZCgyKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlZEVuZXJneSA9IGluZHVzdHJ5LnVzZWRFbmVyZ3koZ2FsYXh5KTtcclxuICAgICAgICAgICAgICAgICR1c2VkRW5lcmd5TGFiZWwudGV4dCh1c2VkRW5lcmd5LnRvRml4ZWQoMikpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvc3RQZXJVbml0ID0gaW5kdXN0cnkuZ2V0Q29zdFBlclVuaXQoKTtcclxuICAgICAgICAgICAgICAgICRjb3N0UGVyVW5pdExhYmVsLnRleHQoYCQke2Nvc3RQZXJVbml0LnRvRml4ZWQoMil9YCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAkY29udGFpbmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9kdWN0SG92ZXJUZXh0KHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgIGNvbnN0IGlzUmF3ID0gTW9kZWwuUkFXX01BVEVSSUFMU19TRVQuaGFzKHByb2R1Y3QgYXMgTW9kZWwuUmF3TWF0ZXJpYWwpO1xyXG4gICAgY29uc3QgY29uc3VtZXMgPSBJbW11dGFibGVcclxuICAgICAgICAuU2VxKE1vZGVsLkRFTUFORF9QUk9EVUNUU1twcm9kdWN0XSlcclxuICAgICAgICAucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjLnVuaW9uKGN1ciksIEltbXV0YWJsZS5TZXQ8UHJvZHVjdD4oKSlcclxuICAgICAgICAubWFwKCh4KSA9PiBQcm9kdWN0W3hdKVxyXG4gICAgICAgIC5qb2luKFwiLCBcIik7XHJcbiAgICByZXR1cm4gYElzICR7aXNSYXcgPyBcIlJBVyBtYXRlcmlhbFwiIDogYFNFQ09OREFSWSBwcm9kdWN0OyBjb25zdW1lcyAke2NvbnN1bWVzfWB9YDtcclxufVxyXG5cclxuY29uc3QgUFJPRFVDVF9IT1ZFUl9URVhUID0gbmV3IE1hcChNb2RlbFxyXG4gICAgLmFsbFByb2R1Y3RzKClcclxuICAgIC5tYXAoKHgpID0+IFt4LCBjcmVhdGVQcm9kdWN0SG92ZXJUZXh0KHgpXSBhcyBbUHJvZHVjdCwgc3RyaW5nXSkpO1xyXG5cclxuY2xhc3MgUGxhbmV0SW5mb1BhbmVsIGltcGxlbWVudHMgVmlldy5PYnNlcnZlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBvYnNlcnZhYmxlcyA9IG5ldyBTZXQ8Vmlldy5PYnNlcnZlcj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGdhbWU6IEdhbWUsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBIVE1MRWxlbWVudCxcclxuICAgICAgICBwbGFuZXQ6IE1vZGVsLlBsYW5ldCxcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGdhbGF4eSA9IGdhbWUuZ2FsYXh5O1xyXG4gICAgICAgIGNvbnN0IHJlc291cmNlID0gcGxhbmV0LnJlc291cmNlO1xyXG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGdhbGF4eS5nZXRDb29yKHBsYW5ldCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQ29sb25pemVkID0gcGxhbmV0LmlzQ29sb25pemVkKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBbXHJcbiAgICAgICAgICAgICQoXCI8dHI+XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiVGhpcyBpcyB0aGUgdHlwZSBvZiByZXNvdXJjZSB0aGF0IHRoaXMgcGxhbmV0IGNhbiBwcm9kdWNlIGxvY2FsbHkuXCIpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLnRleHQoYFJlc291cmNlYCksXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikudGV4dChgJHtQcm9kdWN0W3Jlc291cmNlXX1gKSksXHJcbiAgICAgICAgICAgICQoXCI8dHI+XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiVGhpcyBpcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHBsYW5ldC5cIilcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikudGV4dChgQ29vcmApLFxyXG4gICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLmFwcGVuZChgKCR7eC50b0ZpeGVkKDIpfSwke3kudG9GaXhlZCgyKX0pYCkpLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIHBvcHVsYXRpb24gcm93XHJcbiAgICAgICAgaWYgKGlzQ29sb25pemVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwbGFuZXRQb3BMYWJlbCA9ICQoXCI8c3Bhbj5cIik7XHJcbiAgICAgICAgICAgIHJvd3MucHVzaCgkKFwiPHRyPlwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBgQSBwbGFuZXQncyBwb3B1bGF0aW9uIGRldGVybWluZXMgZG9tZXN0aWMgY29uc3VtcHRpb24gb2YgYmFzaWMgZ29vZHMgWyR7QkFTSUNfR09PRFN9XSBhbmQgbHV4dXJ5IGdvb2RzIFske0xVWFVSWV9HT09EU31dLCB3aGljaCBpcyBvbmUgb2YgdGhlIDIgd2F5cyB0aGF0IGFsbG93IHlvdSB0byB0cmFkZSBnb29kcyBmb3IgbW9uZXkgKHRoZSBvdGhlciB3YXkgYmVpbmcgc3VwcGx5IGZ1ZWwgdG8gcG93ZXIgcGxhbnRzKS5gKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS50ZXh0KFwiUG9wdWxhdGlvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS5hcHBlbmQoJHBsYW5ldFBvcExhYmVsKSkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sb255ID0gcGxhbmV0LmdldENvbG9ueSgpITtcclxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoY29sb255ICE9PSB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wID0gY29sb255LmdldFBvcHVsYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBjb2xvbnkuZ2V0TWF4UG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHBsYW5ldFBvcExhYmVsLnRleHQoYCR7cG9wLnRvRml4ZWQoMil9LyR7bWF4fWApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgJGNvbG9uaXplQnV0dG9uID0gJChcIjxidXR0b24+XCIpXHJcbiAgICAgICAgICAgICAgICAudGV4dChcIkNvbG9uaXplXCIpXHJcbiAgICAgICAgICAgICAgICAuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbGF4eS5jb2xvbml6ZVBsYW5ldChwbGFuZXQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnF1ZXVlVXBkYXRlKFVwZGF0ZUNoYW5uZWwuTWFwQ2hhbmdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByb3dzLnB1c2goJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJTcGVuZCAxIGZyZWUgY29sb25pc3QgdG8gY29sb25pemUgdGhpcyBwbGFuZXQuIFlvdSBjYW4gZW5jb3VyYWdlIGdyb3d0aCBmcm9tIGNvbG9uaXplZCBwbGFuZXRzLlwiKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImNvbHNwYW5cIiwgMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkY29sb25pemVCdXR0b24pKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmFibGVzLmFkZCh7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkY29sb25pemVCdXR0b24ucHJvcChcImRpc2FibGVkXCIsIGdhbGF4eS5nZXROdW1Db2xvbmlzdHMoKSA8IDEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNDb2xvbml6ZWQpIHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb255ID0gcGxhbmV0LmdldENvbG9ueSgpITtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGNvbG9ueSAhPT0gdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZ3Jvd3RoTGFiZWwgPSAkKFwiPHNwYW4+XCIpO1xyXG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKCQoXCI8dHI+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBgR3Jvd3RoIG9jY3VycyB3aGVuIHBvcHVsYXRpb24gY29uc3VtZXMgZW5vdWdoIGZvb2Q7IHNpbWlsYXJseSBzdGFydmF0aW9uIG9jY3VycyB3aGVuIGNpdGl6ZW5zIGxhY2sgZm9vZC4gQm9udXMgZ3Jvd3RoIGlzIGRldGVybWluZWQgYnkgMiBtYWpvciBmYWN0b3JzOiAxKSBjaXRpemVucycgc2F0aXNmYWN0aW9uIG9mIGJhc2ljIFske0JBU0lDX0dPT0RTfV0gYW5kIGx1eHVhcnkgZ29vZHMgWyR7TFVYVVJZX0dPT0RTfV0sIGFuZCAyKSBzdWZmaWNpZW50IHBvd2VyIHN1cHBseS5gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLnRleHQoXCJBbm51YWwgZ3Jvd3RoXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS5hcHBlbmQoJGdyb3d0aExhYmVsKSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2YWJsZXMuYWRkKHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3Jvd3RoUmF0ZSA9IGNvbG9ueS5ncm93dGhSYXRlKGdhbGF4eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRncm93dGhMYWJlbC50ZXh0KGAke2dyb3d0aFJhdGUgPiAwID8gXCIrXCIgOiBcIlwifSR7TWF0aC5yb3VuZChncm93dGhSYXRlICogMTAwKX0lYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNoZWNrYm94ID0gJChjaGVja2JveClcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInR5cGVcIiwgXCJjaGVja2JveFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGFuZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0xpbWl0UG9wID0gY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb255LmxvY2tQb3B1bGF0aW9uKGlzTGltaXRQb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2YWJsZXMuYWRkKHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGNoZWNrYm94LnByb3AoXCJjaGVja2VkXCIsIGNvbG9ueS5sb2NrUG9wdWxhdGlvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKCQoXCI8dHI+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIlRoaXMgb3B0aW9uIGxvY2tzIHRoZSBjdXJyZW50IHBvcHVsYXRpb24sIGFuZCBhbnkgZ3Jvd3RoIG9uIHRoaXMgcGxhbmV0IHdpbGwgYmUgdHJhbnNmZXJyZWQgdG8gdGhlIGNvbG9uaXN0IHBvb2wuIFNpbmNlIGluZHVzdHJpYWwgcHJvZHVjdGlvbiBpcyBub3QgYWZmZWN0ZWQgYnkgcG9wdWxhdGlvbiwgZW5jb3VyYWdpbmcgY29sb25pc3RzIGEgZ3JlYXQgd2F5IHRvIGxvY2sgZG93biBwb3dlciB1c2FnZS5cIilcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS50ZXh0KFwiRW5jb3VyYWdlIENvbG9uaXN0cz9cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLmFwcGVuZCgkY2hlY2tib3gpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRmdWVsRGVtYW5kID0gJChcIjxzcGFuPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcG93ZXJQbGFuZXRMdmwgPSAkKFwiPHNwYW4+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwb3dlck91dHB1dCA9ICQoXCI8c3Bhbj5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByaWNlID0gJChcIjxzcGFuPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjZXJUYWJsZSA9ICQoXCI8dGFibGU+XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJUaGlzIGlzIHRoZSBzaXplIG9mIHRoZSBwb3dlciBwbGFudC4gRWFjaCBsZXZlbCBwcm9wb3J0aW9uYWxseSBhZmZlY3RzIHBvd2VyIG91dHB1dCBhbmQgZnVlbCBjb25zdW1wdGlvbiAtLSB0aGUgaGlnaGVyIHRoZSBsZXZlbCwgdGhlIG1vcmUgcG93ZXIgdG8gYmUgb3V0cHV0IGFuZCBtb3JlIGZ1ZWwgdG8gYmUgY29uc3VtZWQuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLnRleHQoXCJQb3dlciBwbGFuZXQgbGV2ZWxcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikuYXBwZW5kKCRwb3dlclBsYW5ldEx2bCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dHI+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiRnVlbCBkZW1hbmQgaXMgdGhlIHF1YW50aXR5IG5lZWRlZCB0byBydW4gdGhlIHBvd2VyIHBsYW50cyBhdCAxMDAlIGVmZmljaWVuY3kuIFRoaXMgcXVhbnRpdHkgaXMgdGhlIHNhbWUgYXMgd2hhdCB5b3Ugc2VlIGluIHRoZSBtYXJrZXQgZm9yIGZ1ZWwgZGVtYW5kLlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS50ZXh0KFwiRnVlbCBkZW1hbmRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikuYXBwZW5kKCRmdWVsRGVtYW5kKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJUaGlzIGlzIHRoZSBhY3R1YWwgcG93ZXIgb3V0cHV0IG9mIHRoZSBwb3dlciBwbGFudHMuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLnRleHQoXCJPdXRwdXRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikuYXBwZW5kKCRwb3dlck91dHB1dCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dHI+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiVGhpcyBpcyBob3cgbXVjaCAxIHVuaXQgb2YgZW5lcmd5IGlzIHdvcnRoLCBzdWJqZWN0IHRvIGRlbWFuZC9zdXBwbHkuIEJvdGggaW5kdXN0cmllcyBhbmQgY2l2aWxpYW5zIHVzZSBwb3dlciwgc28gaW4gdGhlIGVhcmx5IGdhbWUgeW91IG1pZ2h0IHdhbnQgdG8gc2VwYXJhdGUgaW5kdXN0cmlhbCBwbGFuZXRzIGFuZCBjb25zdW1lciBwbGFuZXRzLlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS50ZXh0KFwiVW5pdCBwcmljZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS5hcHBlbmQoJHByaWNlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkaW5kVXNhZ2UgPSAkKFwiPHNwYW4+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR0cmFkZXJVc2FnZSA9ICQoXCI8c3Bhbj5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNpdlVzYWdlID0gJChcIjxzcGFuPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY29uc3VtZXJUYWJsZSA9ICQoXCI8dGFibGU+XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJUaGlzIGlzIHRoZSBtYXhpbXVtIGVuZXJneSB0aGF0IHlvdXIgaW5kdXN0cmlhbCBjb21wbGV4ZXMgbmVlZC5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikudGV4dChcIkluZHVzdHJ5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLmFwcGVuZCgkaW5kVXNhZ2UpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRyPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIlRoaXMgaXMgdGhlIG1heGltdW0gZW5lcmd5IHRoYXQgeW91ciB0cmFkZXJzIG5lZWQuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLnRleHQoXCJUcmFkZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikuYXBwZW5kKCR0cmFkZXJVc2FnZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dHI+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiVGhpcyBpcyB0aGUgbWF4aW11bSBlbmVyZ3kgdGhhdCB0aGUgbG9jYWwgcG9wdWxhdGlvbiBuZWVkcy5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikudGV4dChcIkNpdmlsaWFuXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLmFwcGVuZCgkY2l2VXNhZ2UpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRleHBhbmRCdXR0b24gPSAkKFwiPGJ1dHRvbj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoXCIrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgYEludmVzdCAkJHtNb2RlbC5QT1dFUl9QTEFOVF9DT1NUfSB0byBidWlsZCBhIG5ldyBwb3dlciBwbGFudCwgaWYgeW91IGhhdmUgdGhlIG1vbmV5LiBKdXN0IGEgcmVtaW5kZXIsIHlvdSBkb24ndCBvd24gYW55IHBvd2VyIHBsYW50czsgaG93ZXZlciwgdGhlc2UgcG93ZXIgcGxhbnRzIGJ1eSBmdWVsIGZyb20geW91LmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGljaygoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNPayA9IGUuY3RybEtleSB8fCBjb25maXJtKGBBcmUgeW91IHN1cmUgdG8gaW52ZXN0IGluIHBvd2VyIHBsYW5ldCBhdCBwbGFuZXQgJHtwbGFuZXQuaWR9PyBUaGlzIGFjdGlvbiBjb3N0cyAkJHtNb2RlbC5QT1dFUl9QTEFOVF9DT1NUfS4gKHByZXNzIGN0cmwgd2hpbGUgY2xpY2tpbmcgdGhlIGJ1dHRvbiBzdXBwcmVzc2VzIHRoaXMgbWVzc2FnZSlgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc09rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb255LmV4cGFuZFBvd2VyUGxhbmV0KGdhbGF4eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FsYXh5LndpdGhkcmF3KE1vZGVsLlBPV0VSX1BMQU5UX0NPU1QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y2VyID0gJChcIjxmaWVsZHNldD5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIlRoZSBwcm9kdWNlciBwYW5lbCBzaG93cyBkZXRhaWxzIGFib3V0IHBvd2VyIHBsYW50cyBvZiB0aGlzIHBsYW5ldC5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPGxlZ2VuZD5cIikudGV4dChcIlByb2R1Y2VyXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCRwcm9kdWNlclRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNvbnN1bWVyID0gJChcIjxmaWVsZHNldD5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIlRoZSBjb25zdW1lciBwYW5lbCBzaG93cyBkZXRhaWxzIGFib3V0ICpQT1RFTlRJQUwqIGVuZXJneSBjb25zdW1wdGlvbiBvbiB0aGlzIHBsYW5ldC4gSWYgdGhlIHBsYW5ldCBoYXMgYSBzaG9ydGFnZSwgZW5lcmd5IHdpbGwgYmUgZGlzdHJpYnV0ZWQgZXZlbmx5IHdpdGggYmVzdCBlZmZvcnQuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjxsZWdlbmQ+XCIpLnRleHQoXCJDb25zdW1lclwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkY29uc3VtZXJUYWJsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRzdW1tYXJ5ID0gJChcIjxzcGFuPlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKCQoXCI8dHI+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY29sc3BhblwiLCAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJDaXRpemVucyBhbmQgaW5kdXN0cmlhbCBjb21wbGV4ZXMgbmVlZCBwb3dlciB0byBiZSBydW4gZWZmaWNpZW50bHkuIElkZWFsbHksIHlvdSB3YW50IHRvIGtlZXAgcG93ZXIgc3VycGx1cywgc28gdGhhdCB0aGUgbG9jYWwgY29sb255IGFuZCB5b3VyIGluZHVzdHJpYWwgY29tcGxleGVzIGNhbiBydW4gYXQgb3B0aW1hbCBlZmZpY2llbmN5LlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KFwiUG93ZXJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCRzdW1tYXJ5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJGV4cGFuZEJ1dHRvbiwgJHByb2R1Y2VyLCAkY29uc3VtZXIpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2YWJsZXMuYWRkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3dlclBsYW5ldEx2bCA9IGNvbG9ueS5nZXRQb3dlclBsYW5ldExldmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZnVlbERlbWFuZC50ZXh0KGNvbG9ueS5nZXRGdWVsRGVtYW5kKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBvd2VyUGxhbmV0THZsLnRleHQocG93ZXJQbGFuZXRMdmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gY29sb255LmdldFBvd2VyT3V0cHV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlZmYgPSBjb2xvbnkuZ2V0UG93ZXJPdXRwdXRFZmYoKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwb3dlck91dHB1dC50ZXh0KGAke291dHB1dH0gKGVmZjoke2VmZi50b0ZpeGVkKDApfSUpYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5kVXNhZ2UudGV4dChjb2xvbnkuZ2V0SW5kdXN0cmlhbFBvd2VyVXNhZ2UoZ2FsYXh5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdHJhZGVyVXNhZ2UudGV4dChjb2xvbnkuZ2V0VHJhZGVyUG93ZXJVc2FnZShnYWxheHkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjaXZVc2FnZS50ZXh0KGNvbG9ueS5nZXRDaXZpbGlhblBvd2VyVXNhZ2UoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuRXhwYW5kID0gZ2FsYXh5LmdldE1vbmV5KCkgPiBNb2RlbC5QT1dFUl9QTEFOVF9DT1NUICYmIGNvbG9ueS5jYW5FeHBhbmRQb3dlclBsYW50KGdhbGF4eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXhwYW5kQnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCAhY2FuRXhwYW5kKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFVzYWdlID0gY29sb255LmdldFRvdGFsUG93ZXJVc2FnZShnYWxheHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWxPdXRwdXQgPSBjb2xvbnkuZ2V0UG93ZXJPdXRwdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvd2VyVXNhZ2VFZmYgPSBjb2xvbnkuZ2V0UG93ZXJVc2FnZUVmZihnYWxheHkpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGAgJHt0b3RhbFVzYWdlfS8ke3RvdGFsT3V0cHV0fSAoJHtwb3dlclVzYWdlRWZmLnRvRml4ZWQoMil9JSkgYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzdW1tYXJ5LnRleHQoc3VtbWFyeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBjb2xvbnkuZ2V0RW5lcmd5UHJpY2UoZ2FsYXh5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcmljZS50ZXh0KGAkJHtwcmljZS50b0ZpeGVkKDIpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHRoaXMudmlldylcclxuICAgICAgICAgICAgLmVtcHR5KClcclxuICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRhYmxlPlwiKS5hcHBlbmQoLi4ucm93cykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZ2FtZTogR2FtZSwgY2hhbm5lbHM6IFNldDxVcGRhdGVDaGFubmVsPikge1xyXG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2YWJsZSBvZiB0aGlzLm9ic2VydmFibGVzKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudXBkYXRlKGdhbWUsIGNoYW5uZWxzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBJTWFya2V0Um93IHtcclxuICAgIHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3Q7XHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG4gICAgcXR5OiBudW1iZXI7XHJcbiAgICBnbG9iYWxEZW1hbmRzOiBudW1iZXI7XHJcbiAgICBnbG9iYWxQcm9kQ2FwOiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIE1hcmtldFBhbmVsIGltcGxlbWVudHMgVmlldy5PYnNlcnZlciB7XHJcblxyXG4gICAgcHJpdmF0ZSB0YWJsZURyYXdlcjogRHJhd1RhYmxlPElNYXJrZXRSb3c+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHJlYWRvbmx5IGdhbWU6IEdhbWUsXHJcbiAgICAgICAgcmVhZG9ubHkgdmlldzogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjb2xvbnk6IE1vZGVsLkNvbG9ueSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudGFibGVEcmF3ZXIgPSBuZXcgRHJhd1RhYmxlPElNYXJrZXRSb3c+KFtcclxuICAgICAgICAgICAgW1wiSWRcIiwgKHJvd0EsIHJvd0IpID0+IHJvd0EucHJvZHVjdCAtIHJvd0IucHJvZHVjdF0sXHJcbiAgICAgICAgICAgIFtcIkdvb2RzXCIsIChyb3dBLCByb3dCKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJBID0gTW9kZWwuUHJvZHVjdFtyb3dBLnByb2R1Y3RdO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyQiA9IE1vZGVsLlByb2R1Y3Rbcm93Qi5wcm9kdWN0XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBBbGdvLmNtcFN0cihzdHJBLCBzdHJCKTtcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFtcIlByaWNlXCIsIChyb3dBLCByb3dCKSA9PiByb3dBLnByaWNlIC0gcm93Qi5wcmljZV0sXHJcbiAgICAgICAgICAgIFtcIlF0eVwiLCAocm93QSwgcm93QikgPT4gcm93QS5xdHkgLSByb3dCLnF0eV0sXHJcbiAgICAgICAgICAgIFtcIkdhbGFjdGljIERlbWFuZFwiLCAocm93QSwgcm93QikgPT4gcm93QS5nbG9iYWxEZW1hbmRzIC0gcm93Qi5nbG9iYWxEZW1hbmRzXSxcclxuICAgICAgICAgICAgW1wiR2FsYWN0aWMgUHJvZENhcFwiLCAocm93QSwgcm93QikgPT4gcm93QS5nbG9iYWxQcm9kQ2FwIC0gcm93Qi5nbG9iYWxQcm9kQ2FwXSxcclxuICAgICAgICBdLCAoKSA9PiB0aGlzLnVwZGF0ZShnYW1lKSk7XHJcblxyXG4gICAgICAgICQodmlldylcclxuICAgICAgICAgICAgLmVtcHR5KClcclxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLnRhYmxlRHJhd2VyXHJcbiAgICAgICAgICAgICAgICAuJGdldFRhYmxlKClcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgYFRoZSBtYXJrZXQgZGV0ZXJtaW5lcyBsb2NhbCBwcmljZSBieSBkZW1hbmQgJiBzdXBwbHkuIExvb2tpbmcgYXQgdGhlIGJpZyBwaWN0dXJlLCB5b3Ugd2FudCB0byBtYWtlIHN1cmUgdGhlIG1hcmtldCByZWFjaGVzIGVxdWlsaWJyaXVtIGJ5IG1hdGNoaW5nIHVwIHRoZSBnYWxhY3RpYyBkZW1hbmQgYW5kIHRoZSBnYWxhY3RpYyBwcm9kdWN0aW9uIGNhcC5cclxuXHJcblRoZSBnYWxhY3RpYyBwcm9kdWN0aW9uIGNhcCBpcyBhIHBvdGVudGlhbCBxdWFudGl0eSB0aGF0IHRoZSBlbnRpcmUgZ2FsYXh5IGNhbiBwcm9kdWNlLiBIb3dldmVyLCBpZiB5b3VyIGluZHVzdHJpYWwgY29tcGxleGVzIGxhY2sgaW5wdXQgcmVzb3VyY2UsIHRoZXkgbWlnaHQgcHJvZHVjZSBnb29kcyBhdCBhIGxvd2VyIHF1YW50aXR5IHRoYW4gdGhlIHByb2QgY2FwLlxyXG5cclxuU2luY2UgeW91IGFyZSB0aGUgb25seSBwbGF5ZXIgaW4gdGhlIGdhbGF4eSwgdGhlIG9ubHkgd2F5IHRvIGVhcm4gbW9uZXkgaXMgdG8gc2VsbCBnb29kcyB0aGF0IGFyZSBjb25zdW1lZCBieSBjaXRpemVucyBbJHtCQVNJQ19HT09EU30sICR7TFVYVVJZX0dPT0RTfV0gYW5kIGJ5IHBvd2VyIHBsYW50cyBbJHtNb2RlbC5Qcm9kdWN0W01vZGVsLlByb2R1Y3QuRnVlbF19XSAtLSBvdGhlciBpbnRlcm1lZGlhdGUgZ29vZHMgYXJlIG1lcmVseSB0cmFuc2ZlcnJlZCB0byB5b3VyIGluZHVzdHJ5IGJ5IHlvdXIgdHJhZGVycywgZS5nLiB3aGVuIHlvdSB0cmFkZXIgc2VsbHMgYSB1bml0IG9mIENyb3AsIHlvdXIgaW5kdXN0cnkgd2lsbCBidXkgaXQgYmFjaywgc28gbm8gbW9uZXkgaXMgZWFybmVkLlxyXG5cclxuRmluYWxseSwgeW91IHdhbnQgdG8gb3ZlcnByb2R1Y2UgZ29vZHMgdGhhdCBhcmUgdXNlZCB0byBtYWludGFpbiBjaXZpbGlhbiAmIGluZHVzdHJpYWwgZ3Jvd3RoIFtGb29kLCBGdWVsLCBUb29sLCBNYWNoaW5lXSwgaW5zdGVhZCBvZiBtYWludGFpbmluZyBlcXVpbGlicml1bS4gWW91ciByZWFsIGNhc2ggY293cyBhcmUgbHV4dXJ5IGdvb2RzLmApKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGdhbWU6IEdhbWUpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBNb2RlbFxyXG4gICAgICAgICAgICAuYWxsUHJvZHVjdHMoKVxyXG4gICAgICAgICAgICAubWFwKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHRoaXMuY29sb255LmdldFByaWNlKHByb2R1Y3QpLFxyXG4gICAgICAgICAgICAgICAgICAgIHF0eTogdGhpcy5jb2xvbnkuZ2V0U3VwcGx5KHByb2R1Y3QpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbWFuZDogdGhpcy5jb2xvbnkuZ2V0RGVtYW5kKHByb2R1Y3QpLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbERlbWFuZHM6IGdhbGF4eS5nZXRHYWxhY3RpY0RlbWFuZHMocHJvZHVjdCksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsUHJvZENhcDogZ2FsYXh5LmdldEdhbGFjdGljUHJvZENhcChwcm9kdWN0KSxcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxTdXBwbHk6IGdhbGF4eS5nZXRHYWxhY3RpY1N1cHBsaWVzKHByb2R1Y3QpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGFibGVEcmF3ZXJcclxuICAgICAgICAgICAgLnJlbmRlcihkYXRhLCAocm93KSA9PiBbXHJcbiAgICAgICAgICAgICAgICByb3cucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgIE1vZGVsLlByb2R1Y3Rbcm93LnByb2R1Y3RdLFxyXG4gICAgICAgICAgICAgICAgcm93LnByaWNlLnRvRml4ZWQoMiksXHJcbiAgICAgICAgICAgICAgICByb3cucXR5LFxyXG4gICAgICAgICAgICAgICAgcm93Lmdsb2JhbERlbWFuZHMsXHJcbiAgICAgICAgICAgICAgICByb3cuZ2xvYmFsUHJvZENhcCxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXcvcGxhbmV0dmlldy50cyIsImltcG9ydCB7IEdhbWUsIFVwZGF0ZUNoYW5uZWwgfSBmcm9tIFwiLi4vZ2FtZVwiO1xyXG5pbXBvcnQgKiBhcyBNb2RlbCBmcm9tIFwiLi4vbW9kZWwvbW9kZWxcIjtcclxuaW1wb3J0ICogYXMgVmlldyBmcm9tIFwiLi92aWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm91dGVTZWdtZW50VmlldyBpbXBsZW1lbnRzIFZpZXcuT2JzZXJ2ZXIge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcm91dGVUaXRsZVRleHQoZ2FtZTogR2FtZSwgcm91dGU6IE1vZGVsLklSb3V0ZVNlZ21lbnQpIHtcclxuICAgICAgICBjb25zdCBnYWxheHkgPSBnYW1lLmdhbGF4eTtcclxuICAgICAgICBjb25zdCBmcm9tT2JqID0gZ2FsYXh5LmdldE9iaihyb3V0ZS5mcm9tLCBNb2RlbC5NYXBEYXRhS2luZC5QbGFuZXQpIGFzIE1vZGVsLlBsYW5ldDtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChmcm9tT2JqICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgIGNvbnN0IHRvT2JqID0gZ2FsYXh5LmdldE9iaihyb3V0ZS50bywgTW9kZWwuTWFwRGF0YUtpbmQuUGxhbmV0KSBhcyBNb2RlbC5QbGFuZXQ7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQodG9PYmogIT09IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgIGlmIChmcm9tT2JqLmlkIDwgdG9PYmouaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBSb3V0ZSAoJHtmcm9tT2JqLmlkfSDih4YgJHt0b09iai5pZH0pYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGBSb3V0ZSAoJHt0b09iai5pZH0g4oeGICR7ZnJvbU9iai5pZH0pYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgcHJpdmF0ZSBjb250ZW50czogVmlldy5PYnNlcnZlcjtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvd1BsYW5ldElkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhpZ2hQbGFuZXRJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsb3dDb2xvbnk6IE1vZGVsLkNvbG9ueTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaGlnaENvbG9ueTogTW9kZWwuQ29sb255O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGdhbWU6IEdhbWUsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZTogTW9kZWwuSVJvdXRlU2VnbWVudCxcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGdhbGF4eSA9IGdhbWUuZ2FsYXh5O1xyXG4gICAgICAgIGNvbnN0IGZyb21PYmogPSBnYWxheHkuZ2V0T2JqKHJvdXRlLmZyb20sIE1vZGVsLk1hcERhdGFLaW5kLlBsYW5ldCkgYXMgTW9kZWwuUGxhbmV0O1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZyb21PYmogIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZnJvbU9iai5pc0NvbG9uaXplZCgpKTtcclxuICAgICAgICBjb25zdCB0b09iaiA9IGdhbGF4eS5nZXRPYmoocm91dGUudG8sIE1vZGVsLk1hcERhdGFLaW5kLlBsYW5ldCkgYXMgTW9kZWwuUGxhbmV0O1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRvT2JqICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRvT2JqLmlzQ29sb25pemVkKCkpO1xyXG5cclxuICAgICAgICBpZiAoZnJvbU9iai5pZCA8IHRvT2JqLmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG93UGxhbmV0SWQgPSBmcm9tT2JqLmlkO1xyXG4gICAgICAgICAgICB0aGlzLmhpZ2hQbGFuZXRJZCA9IHRvT2JqLmlkO1xyXG4gICAgICAgICAgICB0aGlzLmxvd0NvbG9ueSA9IGZyb21PYmouZ2V0Q29sb255KCkhO1xyXG4gICAgICAgICAgICB0aGlzLmhpZ2hDb2xvbnkgPSB0b09iai5nZXRDb2xvbnkoKSE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb3dQbGFuZXRJZCA9IHRvT2JqLmlkO1xyXG4gICAgICAgICAgICB0aGlzLmhpZ2hQbGFuZXRJZCA9IGZyb21PYmouaWQ7XHJcbiAgICAgICAgICAgIHRoaXMubG93Q29sb255ID0gdG9PYmouZ2V0Q29sb255KCkhO1xyXG4gICAgICAgICAgICB0aGlzLmhpZ2hDb2xvbnkgPSBmcm9tT2JqLmdldENvbG9ueSgpITtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGF5b3V0KGdhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZ2FtZTogR2FtZSwgY2hhbm5lbHM6IFNldDxVcGRhdGVDaGFubmVsPikge1xyXG4gICAgICAgIHRoaXMuY29udGVudHMudXBkYXRlKGdhbWUsIGNoYW5uZWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxheW91dChnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcbiAgICAgICAgY29uc3QgJHRpdGxlID0gVmlldy4kY3JlYXRlVGl0bGViYXIoZ2FtZSwgdGhpcywgUm91dGVTZWdtZW50Vmlldy5yb3V0ZVRpdGxlVGV4dChnYW1lLCB0aGlzLnJvdXRlKSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRudW1UcmFkZXJzID0gJChcIjxzcGFuPlwiKTtcclxuICAgICAgICBjb25zdCAkZnVlbEVmZiA9ICQoXCI8c3Bhbj5cIik7XHJcblxyXG4gICAgICAgIGNvbnN0ICRnZW5lcmFsID0gJChcIjxmaWVsZHNldD5cIilcclxuICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICQoXCI8bGVnZW5kPlwiKS50ZXh0KFwiR2VuZXJhbFwiKSxcclxuICAgICAgICAgICAgICAgICQoXCI8dGFibGU+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRyPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiVGhpcyBpcyB0aGUgbnVtYmVyIG9mIHRyYWRlcnMgd2hvIHRyYWRlIGluIHRoaXMgdHJhZGUgbGFuZS5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLnRleHQoXCIjVHJhZGVyc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLmFwcGVuZCgkbnVtVHJhZGVycyksXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJGdWVsIGVmZmljaWVuY3kgZGV0ZXJtaW5lcyBob3cgZmFzdCBzcGFjZXNoaXBzIGNhbiB0cmF2ZWwgZHVlIHRvIGV4dHJhIGZ1ZWwgdXNhZ2UuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLnRleHQoXCJGdWVsIEVmZi5cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikuYXBwZW5kKCRmdWVsRWZmKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSksXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gYnV0dG9ucyBmb3IgYWRkaW5nIHRyYWRlcnMgdG8gcm91dGVcclxuICAgICAgICBjb25zdCAkYnV0dG9uMSA9ICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAgICAgICAudGV4dChcIitcIilcclxuICAgICAgICAgICAgLmNsaWNrKCgpID0+IGdhbGF4eS5hZGRUcmFkZUZsZWV0KHRoaXMubG93Q29sb255LCB0aGlzLmhpZ2hDb2xvbnkpKTtcclxuICAgICAgICBjb25zdCAkYnV0dG9uMiA9ICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAgICAgICAudGV4dChcIitcIilcclxuICAgICAgICAgICAgLmNsaWNrKCgpID0+IGdhbGF4eS5hZGRUcmFkZUZsZWV0KHRoaXMuaGlnaENvbG9ueSwgdGhpcy5sb3dDb2xvbnkpKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGFkZFJvdXRlcyA9ICQoXCI8ZmllbGRzZXQ+XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJJZiB5b3UgaGF2ZSBhIGZyZWUgdHJhZGVyLCB5b3UgY2FuIGFkZCB0aGUgdHJhZGVyIHRvIHRoaXMgbGFuZSwgdHJhbnNmZXJyaW5nIGdvb2RzIGZvciB5b3UuIElmIHlvdSBkb24ndCBoYXZlIGEgZnJlZSB0cmFkZXIsIHlvdSBjYW4gZWl0aGVyIGJ1eSBvbmUgZnJvbSB0aGUgdG9wIG1lbnUgYmFyIG9yIGNhbiBmcmVlIG9uZSBieSByZXRpcmluZyBhIHRyYWRlciBmcm9tIHRoZSB0cmFkZXIgc2NyZWVuLlwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgJChcIjxsZWdlbmQ+XCIpLnRleHQoXCJBZGQgUm91dGVzXCIpLFxyXG4gICAgICAgICAgICAgICAgJChcIjx0YWJsZT5cIilcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRyPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChgJHt0aGlzLmxvd1BsYW5ldElkfSDih4YgJHt0aGlzLmhpZ2hQbGFuZXRJZH1gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCRidXR0b24xKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoYCR7dGhpcy5oaWdoUGxhbmV0SWR9IOKHhiAke3RoaXMubG93UGxhbmV0SWR9YCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkYnV0dG9uMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRjb250ZW50UGFuZWwgPSBWaWV3XHJcbiAgICAgICAgICAgIC4kYWRkQ29udGVudFBhbmVsQ2xhc3MoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCRnZW5lcmFsLCAkYWRkUm91dGVzKTtcclxuXHJcbiAgICAgICAgJCh0aGlzLnZpZXcpLmVtcHR5KCk7XHJcbiAgICAgICAgVmlld1xyXG4gICAgICAgICAgICAuJGFkZFBhbmVsQ2xhc3ModGhpcylcclxuICAgICAgICAgICAgLmFwcGVuZCgkdGl0bGUsICRjb250ZW50UGFuZWwpXHJcbiAgICAgICAgICAgIC5tb3VzZWRvd24oKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIFZpZXcubWFrZURyYWdnYWJsZSh0aGlzLnZpZXcsIGUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVmlldy5icmluZ1RvRnJvbnQodGhpcy52aWV3KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy52aWV3KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IHtcclxuICAgICAgICAgICAgdXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBudW1UcmFkZXJzID0gZ2FsYXh5LmdldE51bVVzZWRUcmFkZXJzKHRoaXMubG93Q29sb255LCB0aGlzLmhpZ2hDb2xvbnkpO1xyXG4gICAgICAgICAgICAgICAgJG51bVRyYWRlcnMudGV4dChudW1UcmFkZXJzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRWZmUGVyY2VudCA9IE1hdGgucm91bmQoZ2FsYXh5LmdldFJvdXRlRnVlbEVmZih0aGlzLmxvd0NvbG9ueSwgdGhpcy5oaWdoQ29sb255KSAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAkZnVlbEVmZi50ZXh0KGAke3JvdXRlRWZmUGVyY2VudH0lYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNOb0F2YWlsVHJhZGVycyA9IGdhbGF4eS5nZXROdW1VbnVzZWRUcmFkZXJzKCkgPT09IDA7XHJcbiAgICAgICAgICAgICAgICAkYnV0dG9uMS5wcm9wKFwiZGlzYWJsZWRcIiwgaXNOb0F2YWlsVHJhZGVycyk7XHJcbiAgICAgICAgICAgICAgICAkYnV0dG9uMi5wcm9wKFwiZGlzYWJsZWRcIiwgaXNOb0F2YWlsVHJhZGVycyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9yb3V0ZXNlZ21lbnQudHMiLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL2dhbWVcIjtcclxuaW1wb3J0ICogYXMgTW9kZWwgZnJvbSBcIi4uL21vZGVsL21vZGVsXCI7XHJcbmltcG9ydCB7IE1hcERhdGFLaW5kIH0gZnJvbSBcIi4uL21vZGVsL21vZGVsXCI7XHJcbmltcG9ydCAqIGFzIFZpZXcgZnJvbSBcIi4uL3ZpZXcvdmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdFZpZXcgaW1wbGVtZW50cyBWaWV3Lk9ic2VydmVyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNpbmdsZShnYW1lOiBHYW1lLCBvYmo6IE1vZGVsLklNYXBEYXRhKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlSGVscGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9iai5raW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1hcERhdGFLaW5kLkZsZWV0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmlldy5GbGVldFZpZXcoZ2FtZSwgb2JqIGFzIE1vZGVsLkZsZWV0KTtcclxuICAgICAgICAgICAgICAgIGNhc2UgTWFwRGF0YUtpbmQuUGxhbmV0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmlldy5QbGFuZXRWaWV3KGdhbWUsIG9iaiBhcyBNb2RlbC5QbGFuZXQpO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNYXBEYXRhS2luZC5Sb3V0ZVNlZ21lbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWaWV3LlJvdXRlU2VnbWVudFZpZXcoZ2FtZSwgb2JqIGFzIE1vZGVsLklSb3V0ZVNlZ21lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBnYW1lLmFkZENsb3NhYmxlKGNyZWF0ZUhlbHBlcigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2FtZTogR2FtZSxcclxuICAgICAgICBvYmpzOiBNb2RlbC5JTWFwRGF0YVtdLFxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQob2Jqcy5sZW5ndGggPiAwKTtcclxuXHJcbiAgICAgICAgY29uc3QgJHRpdGxlID0gVmlldy4kY3JlYXRlVGl0bGViYXIoZ2FtZSwgdGhpcywgYE9wZW4gV2hpY2g/YCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRjb250ZW50UGFuZWwgPSBWaWV3XHJcbiAgICAgICAgICAgIC4kYWRkQ29udGVudFBhbmVsQ2xhc3MoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKG9ianNcclxuICAgICAgICAgICAgICAgIC5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iakxhYmVsID0gJChcIjxkaXY+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcInNlbGVjdExhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAob2JqLmtpbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNYXBEYXRhS2luZC5GbGVldDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoYFRyYWRlciAkeyhvYmogYXMgTW9kZWwuRmxlZXQpLmlkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcImNvbG9yXCIsIFwieWVsbG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTWFwRGF0YUtpbmQuUGxhbmV0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChgUGxhbmV0ICR7KG9iaiBhcyBNb2RlbC5QbGFuZXQpLmlkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTWFwRGF0YUtpbmQuUm91dGVTZWdtZW50OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChWaWV3LlJvdXRlU2VnbWVudFZpZXcucm91dGVUaXRsZVRleHQoZ2FtZSwgb2JqIGFzIE1vZGVsLklSb3V0ZVNlZ21lbnQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoXCJjb2xvclwiLCBcImRhcmtjeWFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqTGFiZWwuY2xpY2soKCkgPT4gdGhpcy5jbGlja1NlbGVjdChnYW1lLCBvYmopKTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgVmlld1xyXG4gICAgICAgICAgICAuJGFkZFBhbmVsQ2xhc3ModGhpcylcclxuICAgICAgICAgICAgLmFwcGVuZCgkdGl0bGUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJGNvbnRlbnRQYW5lbClcclxuICAgICAgICAgICAgLm1vdXNlZG93bigoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVmlldy5tYWtlRHJhZ2dhYmxlKHRoaXMudmlldywgZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBWaWV3LmJyaW5nVG9Gcm9udCh0aGlzLnZpZXcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xpY2tTZWxlY3QoZ2FtZTogR2FtZSwgb2JqOiBNb2RlbC5JTWFwRGF0YSkge1xyXG4gICAgICAgIFNlbGVjdFZpZXcuY3JlYXRlU2luZ2xlKGdhbWUsIG9iaik7XHJcbiAgICAgICAgZ2FtZS5jbG9zZSh0aGlzKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9zZWxlY3R2aWV3LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==