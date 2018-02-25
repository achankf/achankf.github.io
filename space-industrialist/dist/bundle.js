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
        "Hello. Select a food-producing (green) planet to",
        "be your starting planet, then unpause the game",
        "(button in top-right corner). After you're done,",
        "mouse over the user interface, like labels,",
        "buttons, tables, to see the tooltips about game",
        "concepts, especially the market panel on",
        "colonized planets, which explains the game",
        "economics. Feel free to click on any colored items",
        "on the map, as they are interactive.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2ZlNGJmNzYxZmU3MzMxMmIwYWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9hbGdvcml0aG0vYWxnb3JpdGhtLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkltbXV0YWJsZVwiIiwid2VicGFjazovLy8uL3NyYy92aWV3L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL3Byb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobS91bmlvbmZpbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkRleGllXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2NvbG9ueS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtL21pbmhlYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobS9teW1hdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobS90cmllLnRzIiwid2VicGFjazovLy8uL3NyYy9hbGdvcml0aG0vYmltYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobS9ncmFwaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaW5kdXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZ2FsYXh5LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9mbGVldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvcGxhbmV0LnRzIiwid2VicGFjazovLy8uL3NyYy9vYnNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9mbGVldHZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvaW1wb3J0ZXhwb3J0dmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9tYXB2aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L21lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvcGxhbmV0dmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9yb3V0ZXNlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvc2VsZWN0dmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUQwQjtBQUNEO0FBQ0U7QUFDQztBQUNIO0FBQ0Q7QUFDQztBQVN6QixJQUFZLFVBSVg7QUFKRCxXQUFZLFVBQVU7SUFDbEIsMkNBQUk7SUFDSiwyQ0FBSTtJQUNKLCtDQUFNO0FBQ1YsQ0FBQyxFQUpXLFVBQVUsS0FBVixVQUFVLFFBSXJCO0FBRUQsSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ25CLGlEQUFNO0lBQ04sK0NBQUs7SUFDTCw2REFBWTtBQUNoQixDQUFDLEVBSlcsV0FBVyxLQUFYLFdBQVcsUUFJdEI7QUFzQk0sTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBQUE7QUFBQTtBQUMxQixNQUFNLGVBQWUsR0FBRyxHQUFHLENBQUM7QUFBQTtBQUFB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QUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUUsQ0FBQztnQkFDdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM3QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUU3QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxD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Q0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDL0UsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUN4RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQztZQUN2QyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBRUQsMEJBQTBCO1FBQzFCLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDL0UsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUN6RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQztZQUN2QyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxHQUFHLEdBQUcs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QUFDLENBQUM7WUFDM0UsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBbURNLE1BQU07UUFDVCxFQUFFO0lBQ04sQ0FBQztJQUVPLFdBQVcsQ0FBQyxJQUFVLEVBQUUsR0FBbUI7UUFDL0MsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFBQTtBQUFBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdmZTRiZjc2MWZlNzMzMTJiMGFlIiwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29sb255XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2luZHVzdHJ5XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ludmVudG9yeVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nYWxheHlcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZmxlZXRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGxhbmV0XCI7XHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vcHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT3BEZW1hbmQge1xyXG4gICAgbmVlZGVkS2luZHM6IFNldDxQcm9kdWN0PjtcclxuICAgIHF0eTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBGbGVldFN0YXRlIHtcclxuICAgIEhvbGQsXHJcbiAgICBNb3ZlLFxyXG4gICAgRG9ja2VkLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNYXBEYXRhS2luZCB7XHJcbiAgICBQbGFuZXQsXHJcbiAgICBGbGVldCxcclxuICAgIFJvdXRlU2VnbWVudCxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWFwRGF0YSB7XHJcbiAgICByZWFkb25seSBraW5kOiBNYXBEYXRhS2luZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5IHtcclxuICAgIHJlYWRvbmx5IGlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2F0YWJsZSBleHRlbmRzIElFbnRpdHkge1xyXG4gICAgcmVhZG9ubHkga2luZDogTWFwRGF0YUtpbmQuUGxhbmV0IHwgTWFwRGF0YUtpbmQuRmxlZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlU2VnbWVudCB7XHJcbiAgICByZWFkb25seSBraW5kOiBNYXBEYXRhS2luZC5Sb3V0ZVNlZ21lbnQ7XHJcbiAgICByZWFkb25seSBmcm9tOiBDb29yVDtcclxuICAgIHJlYWRvbmx5IHRvOiBDb29yVDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ29vclQgPSBbbnVtYmVyLCBudW1iZXJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFlFQVJfUEVSX1RJQ0sgPSAxMjA7XHJcbmV4cG9ydCBjb25zdCBBTk5VQUxfSU5URVJFU1QgPSAwLjE7IC8vIDEwJSBpbnRlcmVzdCwgY29tcG91bmRlZCBkYWlseVxyXG5leHBvcnQgY29uc3QgVFJBREVSX0NPU1QgPSAxMDAwMDtcclxuZXhwb3J0IGNvbnN0IElORFVTVFJZX0NPU1QgPSAxMDAwMDtcclxuZXhwb3J0IGNvbnN0IElORFVTVFJZX0RFTU9MSVNIX0NPU1QgPSBJTkRVU1RSWV9DT1NUIC8gMTA7XHJcbmV4cG9ydCBjb25zdCBQT1dFUl9QTEFOVF9DT1NUID0gMTAwMDAwMDtcclxuXHJcbmNvbnN0IE1BUF9EQVRBX0tFWVMgPSBPYmplY3RcclxuICAgIC5rZXlzKE1hcERhdGFLaW5kKVxyXG4gICAgLmZpbHRlcigoaykgPT4gdHlwZW9mIE1hcERhdGFLaW5kW2sgYXMgYW55XSA9PT0gXCJudW1iZXJcIik7XHJcbmNvbnN0IE1BUF9EQVRBX1ZBTFVFUyA9IE1BUF9EQVRBX0tFWVNcclxuICAgIC5tYXAoKGspID0+IE51bWJlcihNYXBEYXRhS2luZFtrIGFzIGFueV0pIGFzIE1hcERhdGFLaW5kKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGxNYXBEYXRhS2luZCgpIHtcclxuICAgIHJldHVybiBNQVBfREFUQV9WQUxVRVM7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVsL21vZGVsLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vbWluaGVhcFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teW1hdGhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdHJpZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9iaW1hcFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91bmlvbmZpbmRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ3JhcGhcIjtcclxuXHJcbmltcG9ydCAqIGFzIEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSYW5nZSB7XHJcbiAgICBsb3c6IG51bWJlcjtcclxuICAgIGhpZ2g6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqICBSZXR1cm5zIGFuIGluZGljYXRvciBiZXR3ZWVuIDAgYW5kIDEgZnJvbSB0aGUgbG93IHNpZGUuXHJcbiAqICBVc2UgMS1wb3NpdGlvbiB0byBnZXQgYW4gaW5kaWNhdG9yIGZyb20gdGhlIGhpZ2ggc2lkZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbihyOiBJUmFuZ2UsIGN1cnNvcjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBudW1lcmF0b3IgPSBjdXJzb3IgLSByLmxvdztcclxuICAgIGNvbnN0IGRlbm9taW5hdG9yID0gci5oaWdoIC0gci5sb3c7XHJcblxyXG4gICAgY29uc29sZS5hc3NlcnQoZGVub21pbmF0b3IgPj0gMCwgXCJoaWdoIDwgbG93LCBidWdcIik7XHJcblxyXG4gICAgaWYgKG51bWVyYXRvciA8IDApIHtcclxuICAgICAgICByZXR1cm4gMDsgLy8gbm9uZVxyXG4gICAgfVxyXG4gICAgaWYgKGRlbm9taW5hdG9yID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7IC8vIGluZmluaXR5XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0aC5taW4oMSwgbnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tQmV0d2VlbihyOiBJUmFuZ2UpIHtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKHIuaGlnaCAtIHIubG93KSArIHIubG93O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VNZWFuKHI6IElSYW5nZSkge1xyXG4gICAgcmV0dXJuIChyLmxvdyArIHIuaGlnaCkgLyAyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUmFuZ2UocjogSVJhbmdlLCB2YWx1ZTogbnVtYmVyKTogSVJhbmdlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbG93OiBNYXRoLm1pbihyLmxvdywgdmFsdWUpLFxyXG4gICAgICAgIGhpZ2g6IE1hdGgubWF4KHIuaGlnaCwgdmFsdWUpLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kKHI6IElSYW5nZSwgdmFsOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGxvdyA9IHIubG93O1xyXG4gICAgY29uc3QgaGlnaCA9IHIuaGlnaDtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChsb3csIHZhbCksIGhpZ2gpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UobG93OiBudW1iZXIsIGhpZ2g/OiBudW1iZXIpOiBJUmFuZ2Uge1xyXG4gICAgaWYgKGhpZ2ggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB7IGxvdywgaGlnaDogbG93IH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBsb3csIGhpZ2ggfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlRnJvbSguLi5udW1zOiBudW1iZXJbXSk6IElSYW5nZSB7XHJcbiAgICBpZiAobnVtcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibmVlZCBhdCBsZWFzdCAxIG51bWJlciB0byBmb3JtIGEgcmFuZ2VcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgbG93ID0gbnVtc1swXTtcclxuICAgIGxldCBoaWdoID0gbnVtc1swXTtcclxuICAgIGZvciAoY29uc3QgbnVtIG9mIG51bXMpIHtcclxuICAgICAgICBpZiAobnVtIDwgbG93KSB7XHJcbiAgICAgICAgICAgIGxvdyA9IG51bTtcclxuICAgICAgICB9IGVsc2UgaWYgKG51bSA+IGhpZ2gpIHtcclxuICAgICAgICAgICAgaGlnaCA9IG51bTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBsb3csIGhpZ2ggfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlVHJhbnNsYXRlTWVhbihyOiBJUmFuZ2UsIG5ld01lYW46IG51bWJlcikge1xyXG4gICAgY29uc3Qgb2xkTWVhbiA9IHJhbmdlTWVhbihyKTtcclxuICAgIGNvbnN0IGxvd1JhbmdlID0gb2xkTWVhbiAtIHIubG93O1xyXG4gICAgY29uc3QgaGlnaFJhbmdlID0gci5oaWdoIC0gb2xkTWVhbjtcclxuICAgIHIubG93ID0gbmV3TWVhbiAtIGxvd1JhbmdlO1xyXG4gICAgci5oaWdoID0gbmV3TWVhbiArIGhpZ2hSYW5nZTtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KHIuaGlnaCA+PSByLmxvdyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRSYW5nZU1pbihyOiBJUmFuZ2UsIG1pbjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBkaWZmID0gci5oaWdoIC0gci5sb3c7XHJcbiAgICByLmxvdyA9IG1pbjtcclxuICAgIHIuaGlnaCA9IG1pbiArIGRpZmY7XHJcbiAgICBjb25zb2xlLmFzc2VydChyLmhpZ2ggPj0gci5sb3cpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kUmFuZ2UocjogSVJhbmdlLCBmYWN0b3I6IG51bWJlcikge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gKHIuaGlnaCAtIHIubG93KSAqIGZhY3RvcjtcclxuICAgIHIubG93ID0gci5sb3cgLSBvZmZzZXQ7XHJcbiAgICByLmhpZ2ggPSByLmhpZ2ggKyBvZmZzZXQ7XHJcbiAgICBjb25zb2xlLmFzc2VydChyLmhpZ2ggPj0gci5sb3cpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udHJhY3RSYW5nZShyOiBJUmFuZ2UsIGZhY3RvcjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBvZmZzZXQgPSAoci5oaWdoIC0gci5sb3cpICogZmFjdG9yO1xyXG4gICAgci5sb3cgPSByLmxvdyArIG9mZnNldDtcclxuICAgIHIuaGlnaCA9IHIuaGlnaCAtIG9mZnNldDtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KHIuaGlnaCA+PSByLmxvdyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUGFpcjxULCBVPih0OiBULCB1OiBVKTogW1QsIFVdIHtcclxuICAgIHJldHVybiBbdCwgdV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogc2h1ZmZsZVNsaWNlPFQ+KGl0OiBJdGVyYWJsZTxUPikge1xyXG4gICAgY29uc3QgdGVtcCA9IEFycmF5LmZyb20oaXQpO1xyXG5cclxuICAgIHdoaWxlICh0ZW1wLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBsYXN0SWR4ID0gdGVtcC5sZW5ndGggLSAxO1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHJhbmRvbUludCgwLCBsYXN0SWR4KTtcclxuICAgICAgICB5aWVsZCB0ZW1wW2lkeF07XHJcblxyXG4gICAgICAgIGlmIChpZHggPT09IGxhc3RJZHgpIHtcclxuICAgICAgICAgICAgdGVtcC5wb3AoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzd2FwIHRoZSB0YXJnZXQgd2l0aCB0aGUgbGFzdCBpdGVtXHJcbiAgICAgICAgICAgIHRlbXBbaWR4XSA9IHRlbXAucG9wKCkhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGFrZVJhbmRvbTxUPihhcnI6IFRbXSkge1xyXG4gICAgY29uc29sZS5hc3NlcnQoYXJyLmxlbmd0aCA+IDAsIFwiYnVnOiBjYW5ub3QgdGFrZSBmcm9tIGVtcHR5IGFycmF5XCIpO1xyXG4gICAgcmV0dXJuIGFycltyYW5kb21JbnQoMCwgYXJyLmxlbmd0aCAtIDEpXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdpdmVuIGEgc29ydGVkIGRlbnNlIGFycmF5LCBmaW5kIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgaXMgPj0gdGFyZ2V0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG93ZXJCb3VuZDxULCBVPihcclxuICAgIGFycjogVFtdLFxyXG4gICAgdGFyZ2V0OiBVLFxyXG4gICAgdG9WYWw6ICh2YWw6IFQpID0+IFUsXHJcbiAgICBsZXNzVGhhbjogKGE6IFUsIGI6IFUpID0+IGJvb2xlYW4gPSAoYSwgYikgPT4gYSA8IGIsXHJcbikge1xyXG4gICAgLy8gYmluYXJ5IHNlYXJjaCBoZWxwZXJcclxuICAgIGNvbnN0IGJpbnNlYXJjaCA9IChsb3c6IG51bWJlciwgaGlnaDogbnVtYmVyKTogW2Jvb2xlYW4sIG51bWJlciwgbnVtYmVyXSA9PiB7XHJcblxyXG4gICAgICAgIHdoaWxlIChsb3cgPD0gaGlnaCkge1xyXG4gICAgICAgICAgICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKChsb3cgKyBoaWdoKSAvIDIpO1xyXG4gICAgICAgICAgICBjb25zdCBtaWRWYWwgPSB0b1ZhbChhcnJbbWlkXSk7XHJcbiAgICAgICAgICAgIGlmIChsZXNzVGhhbihtaWRWYWwsIHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGxvdyA9IG1pZCArIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVzc1RoYW4odGFyZ2V0LCBtaWRWYWwpKSB7XHJcbiAgICAgICAgICAgICAgICBoaWdoID0gbWlkIC0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbdHJ1ZSwgbG93LCBtaWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW2ZhbHNlLCBsb3csIGxvd107XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGtlZXAgcmVwZWF0aW5nIHVudGlsIGR1cGxpY2F0ZXMgcnVuIG91dFxyXG4gICAge1xyXG4gICAgICAgIGxldCBbaXNGb3VuZCwgbG93LCByZXRdID0gYmluc2VhcmNoKDAsIGFyci5sZW5ndGggLSAxKTtcclxuICAgICAgICBsZXQgcHJldlJldCA9IHJldDtcclxuICAgICAgICB3aGlsZSAoaXNGb3VuZCkge1xyXG4gICAgICAgICAgICBwcmV2UmV0ID0gcmV0O1xyXG4gICAgICAgICAgICAvLyByZXQgaXMgdGhlIHRhcmdldCBhbmQgaGVyZSB3ZSdyZSBpbnRlcmVzdGVkXHJcbiAgICAgICAgICAgIC8vIGlmIGFueSBpdGVtIGluIHRoZSBsb3dlciBwYXJ0aXRpb24gaXMgdGhlIHNhbWUgYXMgdGhlIHRhcmdldFxyXG4gICAgICAgICAgICBbaXNGb3VuZCwgbG93LCByZXRdID0gYmluc2VhcmNoKGxvdywgcmV0IC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmV2UmV0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoUG9zaXRpdmVOdW0odGFyZ2V0OiBudW1iZXIsIG1heFBpdm90OiBudW1iZXIsIHRvVmFsOiAocGl2b3Q6IG51bWJlcikgPT4gbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmFzc2VydCh0YXJnZXQgPiAwKTtcclxuXHJcbiAgICBsZXQgY3VyID0gMDtcclxuICAgIGxldCBwcmV2ID0gMDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGN1ciA+PSBtYXhQaXZvdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWF4UGl2b3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWwgPSB0b1ZhbChjdXIpO1xyXG4gICAgICAgIGlmICh2YWwgPD0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIC8vIGxvY2F0ZWQgdGhlIHJhbmdlOyBkbyBiaW5hcnkgc2VhcmNoIG9uIGl0XHJcbiAgICAgICAgICAgIHJldHVybiBiaW5hcnlTZWFyY2hSYW5nZSh0YXJnZXQsIHJhbmdlKHByZXYsIGN1ciksIHRvVmFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRyeSB0aGUgbmV4dCByYW5nZSB0aHJvdWdoIGh1bmRyZWQtZHJ1cGxpbmcgdGhlIHVwcGVyIGJvdW5kXHJcbiAgICAgICAgcHJldiA9IGN1cjtcclxuICAgICAgICBjdXIgPSAoY3VyICsgMSkgKiAxMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2hSYW5nZSh0YXJnZXQ6IG51bWJlciwgcjogSVJhbmdlLCB0b1ZhbDogKHBpdm90OiBudW1iZXIpID0+IG51bWJlcikge1xyXG5cclxuICAgIGlmICh0YXJnZXQgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gci5oaWdoO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gci5sb3c7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGxvdyA9IHIubG93O1xyXG4gICAgbGV0IGhpZ2ggPSByLmhpZ2g7XHJcblxyXG4gICAgLy8gd2Ugb25seSBjYXJlIGFib3V0IDIgZGVjaW1hbCBwbGFjZXMgKEkgYW0gbm90IGEgbWF0aGVtYXRpY2lhbilcclxuICAgIHdoaWxlIChoaWdoIC0gbG93ID4gMC4wMSkge1xyXG5cclxuICAgICAgICBjb25zdCBwaXZvdCA9IChsb3cgKyBoaWdoKSAvIDI7XHJcbiAgICAgICAgY29uc3QgcGl2b3RWYWwgPSB0b1ZhbChwaXZvdCk7XHJcbiAgICAgICAgaWYgKHBpdm90VmFsID4gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGxvdyA9IHBpdm90O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSBwaXZvdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbG93O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY21wU3RyKGE6IHN0cmluZywgYjogc3RyaW5nKSB7XHJcbiAgICBpZiAoYSA8IGIpIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9IGVsc2UgaWYgKGIgPCBhKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRaZXJvKG51bT86IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG51bSA9PT0gdW5kZWZpbmVkID8gMCA6IG51bTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFF0eTxUPihtYXA6IE1hcDxULCBudW1iZXI+LCBrZXk6IFQpIHtcclxuICAgIGNvbnN0IHF0eSA9IG1hcC5nZXQoa2V5KTtcclxuICAgIHJldHVybiBkZWZhdWx0WmVybyhxdHkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3dhcDxUPihhcnI6IFRbXSwgaTogbnVtYmVyLCBqOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XHJcbiAgICBhcnJbaV0gPSBhcnJbal07XHJcbiAgICBhcnJbal0gPSB0ZW1wO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHNlcShzdGFydDogbnVtYmVyID0gMCkge1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyA7IGkrKykge1xyXG4gICAgICAgIHlpZWxkIGk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogdGFrZTxUPihpdDogSXRlcmFibGVJdGVyYXRvcjxUPiwgbnVtOiBudW1iZXIpIHtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdCkge1xyXG4gICAgICAgIGlmICgrK2kgPiBudW0pIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHlpZWxkIGl0ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogcmVwZWF0PFQ+KGRhdGE6IFQpIHtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgeWllbGQgZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU29ydGVkPFQ+KGl0OiBUW10sIGxlc3NUaGFuID0gKGE6IFQsIGI6IFQpID0+IGEgPCBiKSB7XHJcbiAgICBsZXQgcHJldjtcclxuICAgIGZvciAoY29uc3QgY3VyIG9mIGl0KSB7XHJcbiAgICAgICAgaWYgKHByZXYgIT09IHVuZGVmaW5lZCAmJiBsZXNzVGhhbihjdXIsIHByZXYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJldiA9IGN1cjtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3I8S2V5VCwgVmFsVD4obWFwOiBNYXA8S2V5VCwgVmFsVD4sIGtleTogS2V5VCwgZGVmYXVsdEZuOiAoKSA9PiBWYWxUKSB7XHJcbiAgICBjb25zdCByZXQgPSBtYXAuZ2V0KGtleSk7XHJcbiAgICByZXR1cm4gcmV0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0Rm4oKSA6IHJldDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yU2V0PEtleVQsIFZhbFQ+KG1hcDogTWFwPEtleVQsIFZhbFQ+LCBrZXk6IEtleVQsIGRlZmF1bHRGbjogKCkgPT4gVmFsVCkge1xyXG4gICAgY29uc3QgcmV0ID0gbWFwLmdldChrZXkpO1xyXG4gICAgaWYgKHJldCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgZGVmID0gZGVmYXVsdEZuKCk7XHJcbiAgICAgICAgbWFwLnNldChrZXksIGRlZik7XHJcbiAgICAgICAgcmV0dXJuIGRlZjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRPclRocm93PEtleVQsIFZhbFQ+KG1hcDogTWFwPEtleVQsIFZhbFQ+LCBrZXk6IEtleVQsIHZhbDogVmFsVCkge1xyXG4gICAgY29uc3QgcmV0ID0gbWFwLmdldChrZXkpO1xyXG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGhlIG1hcCBhbHJlYWR5IGhhcyBhbiBlbnRyeSBmb3IgdGhlIGdpdmVuIGtleVwiKTtcclxuICAgIH1cclxuICAgIG1hcC5zZXQoa2V5LCB2YWwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwR2V0PEtleVQsIFZhbFQ+KG1hcDogTWFwPEtleVQsIFZhbFQ+LCBrZXk6IEtleVQsIGRlZmF1bHRWYWw/OiBWYWxUKTogT3B0aW9uPFZhbFQ+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG1hcC5nZXQoa2V5KTtcclxuICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChkZWZhdWx0VmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbi5zb21lKGRlZmF1bHRWYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gT3B0aW9uLm5vbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIE9wdGlvbi5zb21lKHJlc3VsdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBBZGQ8S2V5VD4oXHJcbiAgICBtYXAxOiBJdGVyYWJsZUl0ZXJhdG9yPFtLZXlULCBudW1iZXJdPiB8IE1hcDxLZXlULCBudW1iZXI+LFxyXG4gICAgbWFwMjogSXRlcmFibGVJdGVyYXRvcjxbS2V5VCwgbnVtYmVyXT4gfCBNYXA8S2V5VCwgbnVtYmVyPixcclxuKSB7XHJcbiAgICBjb25zdCByZXQgPSBuZXcgTWFwPEtleVQsIG51bWJlcj4obWFwMSk7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgbWFwMikge1xyXG4gICAgICAgIGdldEFuZFN1bShyZXQsIGtleSwgdmFsKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBTdWJ0cmFjdDxLZXlUPihcclxuICAgIG1hcDE6IEl0ZXJhYmxlSXRlcmF0b3I8W0tleVQsIG51bWJlcl0+IHwgTWFwPEtleVQsIG51bWJlcj4sXHJcbiAgICBtYXAyOiBJdGVyYWJsZUl0ZXJhdG9yPFtLZXlULCBudW1iZXJdPiB8IE1hcDxLZXlULCBudW1iZXI+LFxyXG4pIHtcclxuICAgIGNvbnN0IHJldCA9IG5ldyBNYXA8S2V5VCwgbnVtYmVyPihtYXAxKTtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBtYXAyKSB7XHJcbiAgICAgICAgZ2V0QW5kU3VtKHJldCwga2V5LCAtdmFsKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmRTdW08S2V5VD4obWFwOiBNYXA8S2V5VCwgbnVtYmVyPiwga2V5OiBLZXlULCB2YWw6IG51bWJlcikge1xyXG4gICAgY29uc3Qgc3VtID0gZ2V0UXR5KG1hcCwga2V5KSArIHZhbDtcclxuICAgIGlmIChzdW0gPT09IDApIHtcclxuICAgICAgICBtYXAuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBtYXAuc2V0KGtleSwgc3VtKTtcclxuICAgIHJldHVybiBzdW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogbWFwRmlsdGVyPEtleVQsIFZhbFQ+KG1hcDogTWFwPEtleVQsIFZhbFQ+LCBwcmVkOiAodmFsOiBWYWxUKSA9PiBib29sZWFuKSB7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgbWFwKSB7XHJcbiAgICAgICAgaWYgKHByZWQodmFsKSkge1xyXG4gICAgICAgICAgICB5aWVsZCBba2V5LCB2YWxdIGFzIFtLZXlULCBWYWxUXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY29tYmluZUl0PFQ+KC4uLml0czogQXJyYXk8SXRlcmFibGVJdGVyYXRvcjxUPiB8IFRbXSB8IFNldDxUPiB8IEltbXV0YWJsZS5TZXEuSW5kZXhlZDxUPj4pIHtcclxuICAgIGZvciAoY29uc3QgaXQgb2YgaXRzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB2IG9mIGl0KSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogIFJldHVybiBhIGxpc3Qgb2YgdW5pcXVlIHZhbHVlcyBmcm9tIGEgc29ydGVkIGxpc3Qgb2YgdmFsdWVzXHJcbiAqIEBwYXJhbSBzb3J0ZWRWYWxzIGEgc29ydGVkIGxpc3RcclxuICogQHBhcmFtIGlzRXEgZXF1YWxpdHkgY29tcGFyYXRvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uKiB1bmlxPFQ+KHNvcnRlZFZhbHM6IFRbXSwgaXNFcSA9IChhOiBULCBiOiBUKSA9PiBhID09PSBiKSB7XHJcblxyXG4gICAgaWYgKHNvcnRlZFZhbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBjdXIgPSBzb3J0ZWRWYWxzWzBdO1xyXG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHNvcnRlZFZhbHMpIHtcclxuICAgICAgICAgICAgaWYgKCFpc0VxKHZhbCwgY3VyKSkge1xyXG4gICAgICAgICAgICAgICAgeWllbGQgY3VyO1xyXG4gICAgICAgICAgICAgICAgY3VyID0gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHlpZWxkIGN1cjsgLy8gZWl0aGVyIHRoZSBsYXN0IHZhbHVlIGlzIHVuaXF1ZSwgb3IgdGhlIHByZXZpb3VzIHZhbHVlIGlzIG5vdCB1bmlxdWUgYnV0IGhhdmVuJ3QgcmVwb3J0ZWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwPFQsIFU+KHZhbEZuOiAodDogVCkgPT4gVSwgLi4udmFsczogVFtdKSB7XHJcbiAgICBjb25zdCByZXQgPSBuZXcgTWFwPFUsIFRbXT4oKTtcclxuICAgIGZvciAoY29uc3QgdmFsIG9mIHZhbHMpIHtcclxuICAgICAgICBjb25zdCB1ID0gdmFsRm4odmFsKTtcclxuICAgICAgICBnZXRPclNldChyZXQsIHUsICgpID0+IFtdKS5wdXNoKHZhbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFydGl0aW9uPFQ+KGFycjogVFtdLCBwcmVkOiAodmFsOiBUKSA9PiBib29sZWFuKSB7XHJcbiAgICByZXR1cm4gYXJyXHJcbiAgICAgICAgLnJlZHVjZSgoW2dvb2QsIGJhZF0sIGN1cikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJlZChjdXIpKSB7XHJcbiAgICAgICAgICAgICAgICBnb29kLnB1c2goY3VyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJhZC5wdXNoKGN1cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFtnb29kLCBiYWRdIGFzIFtUW10sIFRbXV07XHJcbiAgICAgICAgfSwgW1tdLCBbXV0gYXMgW1RbXSwgVFtdXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPcHRpb248VD4ge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgd3JhcDxUPih2YWw/OiBUKSB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gbmV3IE9wdGlvbjxUPigpO1xyXG4gICAgICAgIHJldC52YWwgPSB2YWw7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNvbWU8VD4odmFsOiBUKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNvbWUgY2Fubm90IGJlIHVuZGVmaW5lZCB2YWx1ZXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBPcHRpb24ud3JhcCh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbm9uZTxUPigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE9wdGlvbjxUPigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsPzogVDtcclxuXHJcbiAgICBwdWJsaWMgdGhlbjxVPihjYWxsYmFjazogKHZhbDogVCkgPT4gT3B0aW9uPFU+KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHRoaXMudmFsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uLm5vbmU8VT4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRoZW5Tb21lPFU+KGNhbGxiYWNrOiAodmFsOiBUKSA9PiBVKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbi5zb21lKGNhbGxiYWNrKHRoaXMudmFsKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbi5ub25lPFU+KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBydW5Tb21lKGNhbGxiYWNrOiAodmFsOiBUKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcy52YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlsdGVyKHByZWQ6ICh2YWw6IFQpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy52YWwgIT09IHVuZGVmaW5lZCAmJiBwcmVkKHRoaXMudmFsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uLnNvbWUodGhpcy52YWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPcHRpb24ubm9uZTxUPigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW53cmFwKGRlZmF1bHRWYWw/OiBUKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKGRlZmF1bHRWYWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IHVud3JhcCBhIG5vbmUgdmFsdWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbCE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluamVjdE5vbmUoYmFkVmFsRm46ICgpID0+IFQpOiBPcHRpb248VD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hdGNoTWFwKFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLFxyXG4gICAgICAgICAgICAoKSA9PiBPcHRpb24uc29tZShiYWRWYWxGbigpKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXRjaChcclxuICAgICAgICBzb21lOiAodmFsOiBUKSA9PiB2b2lkLFxyXG4gICAgICAgIG5vbmUgPSAoKSA9PiB7IC8qIGVtcHR5ICovIH0sXHJcbiAgICApIHtcclxuICAgICAgICBpZiAodGhpcy52YWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBub25lKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc29tZSh0aGlzLnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXRjaE1hcDxVPihcclxuICAgICAgICBzb21lOiAodmFsOiBUKSA9PiBPcHRpb248VT4sXHJcbiAgICAgICAgbm9uZSA9ICgpID0+IE9wdGlvbi5ub25lPFU+KCksXHJcbiAgICApIHtcclxuICAgICAgICBpZiAodGhpcy52YWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9uZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzb21lKHRoaXMudmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzU29tZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWwgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNOb25lKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc1NvbWUoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWxnb3JpdGhtL2FsZ29yaXRobS50cyIsIm1vZHVsZS5leHBvcnRzID0gSW1tdXRhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiSW1tdXRhYmxlXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgR2FtZSwgVXBkYXRlQ2hhbm5lbCB9IGZyb20gXCIuLi9nYW1lXCI7XHJcbmltcG9ydCB7IElPYnNlcnZlciB9IGZyb20gXCIuLi9vYnNlcnZlclwiO1xyXG5pbXBvcnQgeyBGbGVldFZpZXcgfSBmcm9tIFwiLi9mbGVldHZpZXdcIjtcclxuaW1wb3J0IHsgSW1wb3J0RXhwb3J0VmlldyB9IGZyb20gXCIuL2ltcG9ydGV4cG9ydHZpZXdcIjtcclxuaW1wb3J0IHsgUGxhbmV0VmlldyB9IGZyb20gXCIuL3BsYW5ldHZpZXdcIjtcclxuaW1wb3J0IHsgUm91dGVTZWdtZW50VmlldyB9IGZyb20gXCIuL3JvdXRlc2VnbWVudFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RWaWV3IH0gZnJvbSBcIi4vc2VsZWN0dmlld1wiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vZmxlZXR2aWV3XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ltcG9ydGV4cG9ydHZpZXdcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWFwdmlld1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tZW51XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BsYW5ldHZpZXdcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcm91dGVzZWdtZW50XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NlbGVjdHZpZXdcIjtcclxuXHJcbmV4cG9ydCB0eXBlIE9ic2VydmVyID0gSU9ic2VydmVyPEdhbWUsIFVwZGF0ZUNoYW5uZWw+O1xyXG5leHBvcnQgdHlwZSBDbG9zYWJsZVZpZXcgPSBGbGVldFZpZXcgfCBJbXBvcnRFeHBvcnRWaWV3IHwgUGxhbmV0VmlldyB8IFNlbGVjdFZpZXcgfCBSb3V0ZVNlZ21lbnRWaWV3O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJyaW5nVG9Gcm9udCh2aWV3OiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3QgJHZpZXcgPSAkKHZpZXcpO1xyXG4gICAgJHZpZXcucGFyZW50KCkuYXBwZW5kKCR2aWV3KTtcclxufVxyXG5cclxudHlwZSBFdmVudCA9IEpRdWVyeS5FdmVudDxIVE1MRWxlbWVudCwgbnVsbD47XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZURyYWdnYWJsZSh2aWV3OiBIVE1MRWxlbWVudCwgZTogRXZlbnQpIHtcclxuICAgIGNvbnN0ICRlbGUgPSAkKHZpZXcpO1xyXG4gICAgY29uc3QgcG9zID0gJGVsZS5wb3NpdGlvbigpO1xyXG4gICAgY29uc3QgY2xpY2tQb3NEaWZmID0ge1xyXG4gICAgICAgIHRvcDogZS5jbGllbnRZISAtIHBvcy50b3AsXHJcbiAgICAgICAgbGVmdDogZS5jbGllbnRYISAtIHBvcy5sZWZ0LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXN0dXJlID0gbmV3IEhhbW1lci5NYW5hZ2VyKHZpZXcpO1xyXG4gICAgY29uc3QgcGFuID0gbmV3IEhhbW1lci5QYW4oKVxyXG4gICAgICAgIC5zZXQoeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMIH0pO1xyXG4gICAgZ2VzdHVyZS5hZGQocGFuKTtcclxuICAgIGdlc3R1cmUub24oXCJwYW5cIiwgKGVJbm5lcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVJbm5lci50eXBlKTtcclxuICAgICAgICBsZXQgW25ld1ksIG5ld1hdID0gW1xyXG4gICAgICAgICAgICBlSW5uZXIuY2VudGVyLnkgLSBjbGlja1Bvc0RpZmYudG9wLFxyXG4gICAgICAgICAgICBlSW5uZXIuY2VudGVyLnggLSBjbGlja1Bvc0RpZmYubGVmdCxcclxuICAgICAgICBdIGFzIFtudW1iZXIsIG51bWJlcl07XHJcbiAgICAgICAgLy8gbGV0IFtuZXdZLCBuZXdYXSA9IFtlSW5uZXIuY2xpZW50WSEgLSBjbGlja1Bvc0RpZmYudG9wLCBlSW5uZXIuY2xpZW50WCEgLSBjbGlja1Bvc0RpZmYubGVmdF07XHJcbiAgICAgICAgaWYgKG5ld1ggPCAwKSB7XHJcbiAgICAgICAgICAgIG5ld1ggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXhYID0gJChkb2N1bWVudC5ib2R5KS53aWR0aCgpISAtICRlbGUuaW5uZXJXaWR0aCgpITtcclxuICAgICAgICBpZiAobmV3WCA+IG1heFgpIHtcclxuICAgICAgICAgICAgbmV3WCA9IG1heFg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdZIDwgMCkge1xyXG4gICAgICAgICAgICBuZXdZID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF4WSA9ICQoZG9jdW1lbnQuYm9keSkuaGVpZ2h0KCkhIC0gJGVsZS5pbm5lckhlaWdodCgpITtcclxuICAgICAgICBpZiAobmV3WSA+IG1heFkpIHtcclxuICAgICAgICAgICAgbmV3WSA9IG1heFk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRlbGUub2Zmc2V0KHsgdG9wOiBuZXdZLCBsZWZ0OiBuZXdYIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLypcclxuICAgICQoZG9jdW1lbnQpXHJcbiAgICAgICAgLm1vdXNldXAoKCkgPT4ge1xyXG4gICAgICAgICAgICBzdXNwZW5kRHJhZ2dhYmxlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAubW91c2Vtb3ZlKChlSW5uZXIpID0+IHtcclxuICAgICAgICAgICAgbGV0IFtuZXdZLCBuZXdYXSA9IFtlSW5uZXIuY2xpZW50WSEgLSBjbGlja1Bvc0RpZmYudG9wLCBlSW5uZXIuY2xpZW50WCEgLSBjbGlja1Bvc0RpZmYubGVmdF07XHJcbiAgICAgICAgICAgIGlmIChuZXdYIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbmV3WCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWF4WCA9ICQoZG9jdW1lbnQuYm9keSkud2lkdGgoKSEgLSAkZWxlLmlubmVyV2lkdGgoKSE7XHJcbiAgICAgICAgICAgIGlmIChuZXdYID4gbWF4WCkge1xyXG4gICAgICAgICAgICAgICAgbmV3WCA9IG1heFg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld1kgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdZID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXhZID0gJChkb2N1bWVudC5ib2R5KS5oZWlnaHQoKSEgLSAkZWxlLmlubmVySGVpZ2h0KCkhO1xyXG4gICAgICAgICAgICBpZiAobmV3WSA+IG1heFkpIHtcclxuICAgICAgICAgICAgICAgIG5ld1kgPSBtYXhZO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRlbGUub2Zmc2V0KHsgdG9wOiBuZXdZLCBsZWZ0OiBuZXdYIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICovXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdXNwZW5kRHJhZ2dhYmxlKCkge1xyXG4gICAgJChkb2N1bWVudClcclxuICAgICAgICAub2ZmKFwibW91c2V1cFwiKVxyXG4gICAgICAgIC5vZmYoXCJtb3VzZW1vdmVcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAkY3JlYXRlVGl0bGViYXIoXHJcbiAgICBnYW1lOiBHYW1lLFxyXG4gICAgdmlldzogQ2xvc2FibGVWaWV3LFxyXG4gICAgdGl0bGU6IHN0cmluZykge1xyXG5cclxuICAgIHJldHVybiAkKFwiPGRpdj5cIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJ0aXRsZWJhclwiKVxyXG4gICAgICAgIC50ZXh0KHRpdGxlKVxyXG4gICAgICAgIC5hcHBlbmQoJChcIjxzcGFuPlwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCQoXCI8c3Bhbj5cIilcclxuICAgICAgICAgICAgICAgIC5odG1sKGA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y3JlYXRlPC9pPmApXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiUGluIHRoaXMgd2luZG93XCIpXHJcbiAgICAgICAgICAgICAgICAuY2xpY2soKCkgPT4gZ2FtZS5waW4odmlldykpKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCQoXCI8c3Bhbj5cIilcclxuICAgICAgICAgICAgICAgIC5odG1sKGA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L2k+YClcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJDbG9zZSB0aGlzIHdpbmRvd1wiKVxyXG4gICAgICAgICAgICAgICAgLmNsaWNrKCgpID0+IGdhbWUuY2xvc2UodmlldykpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAkYWRkUGFuZWxDbGFzcyh2aWV3OiBDbG9zYWJsZVZpZXcpIHtcclxuICAgIHJldHVybiAkKHZpZXcudmlldykuYWRkQ2xhc3MoXCJwYW5lbFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uICRhZGRDb250ZW50UGFuZWxDbGFzcyhlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkge1xyXG4gICAgcmV0dXJuICQoZWxlbWVudCkuYWRkQ2xhc3MoXCJwYW5lbC1jb250ZW50XCIpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L3ZpZXcudHMiLCJpbXBvcnQgRGV4aWUgZnJvbSBcImRleGllXCI7XHJcbmltcG9ydCAqIGFzIE1vZGVsIGZyb20gXCIuL21vZGVsL21vZGVsXCI7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwiLi9vYnNlcnZlclwiO1xyXG5pbXBvcnQgKiBhcyBWaWV3IGZyb20gXCIuL3ZpZXcvdmlld1wiO1xyXG5cclxuZXhwb3J0IGVudW0gVXBkYXRlQ2hhbm5lbCB7XHJcbiAgICBEYXRhQ2hhbmdlLFxyXG4gICAgVHVybkNoYW5nZSxcclxuICAgIE1hcENoYW5nZSxcclxuICAgIFJlY3JlYXRlSW5kdXN0cnlMYXlvdXQsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNhdmVEYXRhIHtcclxuICAgIGdhbGF4eVNhdmU6IE1vZGVsLklHYWxheHlTYXZlRGF0YTtcclxuICAgIG1hcFZpZXdTYXZlOiBWaWV3LklNYXBWaWV3U2F2ZURhdGE7XHJcbn1cclxuXHJcbmNsYXNzIERCIGV4dGVuZHMgRGV4aWUge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2F2ZVRhYmxlPzogRGV4aWUuVGFibGU8SVNhdmVEYXRhLCBudW1iZXI+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwiZ2FtZURCXCIpO1xyXG4gICAgICAgIHRoaXMudmVyc2lvbigxKS5zdG9yZXMoeyBzYXZlVGFibGU6IFwiLGdhbGF4eVNhdmUsbWFwVmlld1NhdmVcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZShzYXZlRGF0YTogSVNhdmVEYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZVRhYmxlIS5wdXQoc2F2ZURhdGEsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTYXZlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNhdmVUYWJsZSEuZ2V0KDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyB0cnlMb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IHNhdmVEYXRhID0gYXdhaXQgbmV3IERCKCkuZ2V0U2F2ZSgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgR2FtZShzYXZlRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdhbGF4eTogTW9kZWwuR2FsYXh5O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8dGhpcywgVXBkYXRlQ2hhbm5lbD4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2xvc2FibGVzID0gbmV3IFNldDxWaWV3LkNsb3NhYmxlVmlldz4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaXNQaW5uZWQgPSBuZXcgU2V0PFZpZXcuQ2xvc2FibGVWaWV3PigpO1xyXG4gICAgcHJpdmF0ZSBnYW1lTG9vcElkPzogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0aW1lUGVyRnJhbWUgPSA1MDtcclxuICAgIHByaXZhdGUgYXV0b1NhdmVTZWNvbmRzID0gNjAgKiAxOyAvLyAxIG1pbnV0ZVxyXG4gICAgcHJpdmF0ZSBhdXRvU2F2ZUlkPzogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgbWFwVmlldzogVmlldy5NYXBWaWV3O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBtZW51OiBWaWV3Lk1lbnU7XHJcblxyXG4gICAgcHJpdmF0ZSBkYiA9IG5ldyBEQigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNhdmVEYXRhPzogSVNhdmVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IFZpZXcuTWVudSh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbG9hZChzYXZlRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbG9hZChzYXZlRGF0YT86IElTYXZlRGF0YSkge1xyXG4gICAgICAgIHRoaXMuaXNQaW5uZWQuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNsb3NlQWxsKCk7XHJcblxyXG4gICAgICAgIGlmIChzYXZlRGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbGF4eSA9IE1vZGVsLkdhbGF4eS5jcmVhdGVGcm9tKHNhdmVEYXRhLmdhbGF4eVNhdmUpO1xyXG4gICAgICAgICAgICB0aGlzLm1hcFZpZXcgPSBuZXcgVmlldy5NYXBWaWV3KHRoaXMsIHNhdmVEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbGF4eSA9IG5ldyBNb2RlbC5HYWxheHkoKTtcclxuICAgICAgICAgICAgdGhpcy5nYWxheHkuYWRkUGxhbmV0cygyMCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMubWFwVmlldyA9IG5ldyBWaWV3Lk1hcFZpZXcodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB1bnN1YnNyaWJlIGFuZCB0aGVuIHJlc3Vic3JpYmVcclxuICAgICAgICB0aGlzLnN1YmplY3QuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSh0aGlzLm1lbnUpOyAvLyB1bmNoYW5nZWRcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSh0aGlzLm1hcFZpZXcpO1xyXG5cclxuICAgICAgICAvLyBmb3JjZS11cGRhdGUgdGhlIHZpZXdzIChtYWlubHkgbWFwdmlldylcclxuICAgICAgICB0aGlzLnF1ZXVlVXBkYXRlKFVwZGF0ZUNoYW5uZWwuRGF0YUNoYW5nZSwgVXBkYXRlQ2hhbm5lbC5UdXJuQ2hhbmdlLCBVcGRhdGVDaGFubmVsLk1hcENoYW5nZSk7XHJcblxyXG4gICAgICAgIHRoaXMucGF1c2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgICAgICB0aGlzLnJlc3VtZUF1dG9TYXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc3VtZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUxvb3BJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lTG9vcElkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3BJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FsYXh5LnR1cm4oKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0LnF1ZXVlVXBkYXRlKFVwZGF0ZUNoYW5uZWwuVHVybkNoYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdWJqZWN0LnF1ZXVlVXBkYXRlKFVwZGF0ZUNoYW5uZWwuRGF0YUNoYW5nZSk7XHJcbiAgICAgICAgfSwgdGhpcy50aW1lUGVyRnJhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmYXN0Rm9yd2FyZCgpIHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0aGlzLmNhbkZhc3RGb3J3YXJkKCkpO1xyXG4gICAgICAgIHRoaXMudGltZVBlckZyYW1lIC09IDQwO1xyXG4gICAgICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNsb3dEb3duKCkge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRoaXMuY2FuU2xvd0Rvd24oKSk7XHJcbiAgICAgICAgdGhpcy50aW1lUGVyRnJhbWUgKz0gNDA7XHJcbiAgICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuRmFzdEZvcndhcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZVBlckZyYW1lID4gMjA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhblNsb3dEb3duKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVQZXJGcmFtZSA8IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF1c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUxvb3BJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lTG9vcElkKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTG9vcElkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNHYW1lUnVubmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lTG9vcElkICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0UmVuZGVyaW5nKCkge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0UmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN1YmplY3QudXBkYXRlKHRoaXMpO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gc3RhcnRSZW5kZXIoKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3RhcnRSZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5zdWJzY3JpYmUob2JzOiBWaWV3Lk9ic2VydmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdWJqZWN0LnVuc3Vic2NyaWJlKG9icyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1YnNjcmliZSguLi5vYnM6IFZpZXcuT2JzZXJ2ZXJbXSkge1xyXG4gICAgICAgIHRoaXMuc3ViamVjdC5zdWJzY3JpYmUoLi4ub2JzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcXVldWVVcGRhdGUoLi4uY2hhbm5lbFR5cGVzOiBVcGRhdGVDaGFubmVsW10pIHtcclxuICAgICAgICB0aGlzLnN1YmplY3QucXVldWVVcGRhdGUoLi4uY2hhbm5lbFR5cGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQ2xvc2FibGUob2JzOiBWaWV3LkNsb3NhYmxlVmlldykge1xyXG4gICAgICAgIHRoaXMuY2xvc2FibGVzLmFkZChvYnMpO1xyXG4gICAgICAgIHRoaXMuc3ViamVjdC5zdWJzY3JpYmUob2JzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGluKGNsb3NhYmxlOiBWaWV3LkNsb3NhYmxlVmlldykge1xyXG4gICAgICAgIHRoaXMuaXNQaW5uZWQuYWRkKGNsb3NhYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2UoY2xvc2FibGU6IFZpZXcuQ2xvc2FibGVWaWV3KSB7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZShjbG9zYWJsZSk7XHJcbiAgICAgICAgY2xvc2FibGUudmlldy5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpc0RlbGV0ZWQgPSB0aGlzLmNsb3NhYmxlcy5kZWxldGUoY2xvc2FibGUpO1xyXG4gICAgICAgIHRoaXMuaXNQaW5uZWQuZGVsZXRlKGNsb3NhYmxlKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChpc0RlbGV0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZUFsbCgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNsb3NhYmxlIG9mIHRoaXMuY2xvc2FibGVzKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1Bpbm5lZC5oYXMoY2xvc2FibGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKGNsb3NhYmxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IElTYXZlRGF0YSB7XHJcbiAgICAgICAgY29uc3QgZ2FsYXh5U2F2ZSA9IHRoaXMuZ2FsYXh5LnNlcmlhbGl6ZSgpO1xyXG4gICAgICAgIGNvbnN0IG1hcFZpZXdTYXZlID0gdGhpcy5tYXBWaWV3LnNlcmlhbGl6ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBnYWxheHlTYXZlLFxyXG4gICAgICAgICAgICBtYXBWaWV3U2F2ZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzYXZlKCkge1xyXG4gICAgICAgIGNvbnN0IHNhdmVEYXRhID0gdGhpcy5zZXJpYWxpemUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYi5zYXZlKHNhdmVEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc3VtZUF1dG9TYXZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9TYXZlSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1NhdmVJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF1dG9TYXZlSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgICAgIH0sIHRoaXMuYXV0b1NhdmVTZWNvbmRzICogMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUudHMiLCJpbXBvcnQgKiBhcyBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gUHJvZHVjdCB7XHJcblxyXG4gICAgLy8gcmF3IG1hdGVyaWFsc1xyXG4gICAgQ3JvcCwgLy8gdG8gZm9vZCwgY2hlbWljYWwgKHNlYXNvbmFsIGhpZ2gteWllbGQgaGFydmVzdClcclxuICAgIE1ldGFsLCAvLyB0byB2ZWhpY2xlcywgbWFjaGluZXMsIHdlYXBvbnNcclxuICAgIEdlbSwgLy8gdG8gYWNjZXNzb3J5LCB3ZWFwb25zXHJcbiAgICBGdWVsLCAvLyBmdWVsIGZvciBzcGFjZWNyYWZ0LCBwb3dlciBwbGFudFxyXG5cclxuICAgIC8vIGludGVybWVkaWF0ZVxyXG4gICAgRmliZXIsIC8vIHRvIGFwcGFyZWxzLCBmcm9tIGNyb3BzXHJcbiAgICBDaGVtaWNhbCwgLy8gdG8gbWVkaWNpbmVzICYgaHVsbHMsIGZyb20gYW55IHJhdyBtYXRlcmlhbHNcclxuICAgIENpcmN1aXQsIC8vIHRvIGdhZGdldHMsIGNvbXB1dGVycywgZnJvbSBtZXRhbHNcclxuICAgIENvbXB1dGVyLCAvLyBmcm9tIGNpcmN1aXRzXHJcblxyXG4gICAgLy8gY29tbW9uIGdvb2RzXHJcbiAgICBGb29kLCAvLyBnZW5lcmljIGZvb2QsIGZyb20gYW5pbWFscyBvciBjcm9wc1xyXG4gICAgRHJpbmssIC8vIGZyb20gY3JvcHNcclxuICAgIEFwcGFyZWwsIC8vIGZyb20gZmliZXJzXHJcbiAgICBNZWRpY2luZSwgLy8gZnJvbSBjaGVtaWNhbHNcclxuXHJcbiAgICAvLyBsdXh1YXJ5XHJcbiAgICBBY2Nlc3NvcnksIC8vIGZyb20gZ2Vtc1xyXG4gICAgRnVybml0dXJlLCAvLyBmcm9tIGZpYmVyXHJcbiAgICBHYWRnZXQsIC8vIGZyb20gY29tcHV0ZXJzXHJcbiAgICBWZWhpY2xlLCAvLyBmcm9tIG1ldGFsc1xyXG5cclxuICAgIC8vIG9wZXJhdGlvbmFsXHJcbiAgICAvLyBDb25jcmV0ZSwgLy8gY29uc3RydWN0aW9uLCBmcm9tIG1ldGFsXHJcbiAgICBNYWNoaW5lLCAvLyBmcm9tIG1ldGFsIGFuZCBjb21wdXRlcnMsIHVzZWQgYnkgaW5kdXN0cmllc1xyXG4gICAgVG9vbCwgLy8gZnJvbSBtZXRhbCwgdXNlZCBmb3IgcmF3IG1hdGVyaWFsIHByb2R1Y3Rpb25cclxuICAgIC8qXHJcbiAgICBTdXBwbHksIC8vIGZyb20gY29tbW9uIGdvb2RzXHJcblxyXG4gICAgLy8gc3BhY2VjcmFmdCBjb21wb25lbnQgcG9pbnRzXHJcbiAgICBIdWxsLCAvLyBmcm9tIG1ldGFscyAmIGNoZW1pY2Fsc1xyXG4gICAgTGFzZXIsIC8vIGZyb20gbWV0YWxzICYgZ2Vtc1xyXG4gICAgR3VuLCAvLyBmcm9tIG1ldGFscyAmIGdlbXNcclxuICAgIE1pc3NpbGUsIC8vIGZyb20gbWV0YWxzICYgZ2Vtc1xyXG4gICAgRW5naW5lLCAvLyBmcm9tIG1ldGFscyAmIGdlbXNcclxuICAgIFNoaWVsZCwgLy8gZnJvbSBnZW1zXHJcbiAgICBBcm1vciwgLy8gZnJvbSBtZXRhbHNcclxuICAgIENvdW50ZXJtZWFzdXJlLCAvLyBmcm9tIG1ldGFsc1xyXG5cclxuICAgIC8vIHNvbGRlciBlcXVpcG1lbnRzXHJcbiAgICBSaWZsZSwgLy8gZnJvbSBtZXRhbHNcclxuICAgIFVuaWZvcm0sIC8vIGZyb20gZmliZXJzXHJcbiAgICBTYWJlciwgLy8gZnJvbSBtZXRhbHMgJiBnZW1zOyB0aGluayBsaWdodCBzYWJlclxyXG4gICAgRXhvc2tlbGV0b24sIC8vIGZyb20gY2hlbWljYWxzICYgZmliZXJzXHJcbiAgICAqL1xyXG59XHJcblxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzE3MTk4XHJcbmNvbnN0IHByb2R1Y3RLZXlzID0gT2JqZWN0XHJcbiAgICAua2V5cyhQcm9kdWN0KVxyXG4gICAgLmZpbHRlcigoaykgPT4gdHlwZW9mIFByb2R1Y3RbayBhcyBhbnldID09PSBcIm51bWJlclwiKTtcclxuY29uc3QgcHJvZHVjdFZhbHVlcyA9IHByb2R1Y3RLZXlzXHJcbiAgICAubWFwKChrKSA9PiBOdW1iZXIoUHJvZHVjdFtrIGFzIGFueV0pIGFzIFByb2R1Y3QpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5VTV9QUk9EVUNUUyA9IHByb2R1Y3RLZXlzLmxlbmd0aDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGxQcm9kdWN0cygpIHtcclxuICAgIHJldHVybiBwcm9kdWN0VmFsdWVzLnNsaWNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJhd01hdGVyaWFsID0gUHJvZHVjdC5Dcm9wIHwgUHJvZHVjdC5NZXRhbCB8IFByb2R1Y3QuR2VtIHwgUHJvZHVjdC5GdWVsO1xyXG5leHBvcnQgY29uc3QgUkFXX01BVEVSSUFMUzogUmF3TWF0ZXJpYWxbXSA9IFtcclxuICAgIFByb2R1Y3QuQ3JvcCxcclxuICAgIFByb2R1Y3QuTWV0YWwsXHJcbiAgICBQcm9kdWN0LkdlbSxcclxuICAgIFByb2R1Y3QuRnVlbCxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSQVdfTUFURVJJQUxTX1NFVCA9IG5ldyBTZXQoUkFXX01BVEVSSUFMUyk7XHJcblxyXG5mdW5jdGlvbiBnZXREZW1hbmRQcm9kdWN0c0hlbHBlcihwcm9kdWN0VHlwZTogUHJvZHVjdCkge1xyXG4gICAgc3dpdGNoIChwcm9kdWN0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5Dcm9wOlxyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5NZXRhbDpcclxuICAgICAgICBjYXNlIFByb2R1Y3QuR2VtOlxyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5GdWVsOlxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0LkZvb2Q6XHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFNldChbUHJvZHVjdC5Dcm9wXSldO1xyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5EcmluazpcclxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgU2V0KFtQcm9kdWN0LkNyb3BdKV07XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0LkFwcGFyZWw6XHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFNldChbUHJvZHVjdC5GaWJlcl0pXTtcclxuICAgICAgICBjYXNlIFByb2R1Y3QuTWVkaWNpbmU6XHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFNldChbUHJvZHVjdC5DaGVtaWNhbF0pXTtcclxuICAgICAgICBjYXNlIFByb2R1Y3QuRmliZXI6XHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFNldChbUHJvZHVjdC5Dcm9wXSldO1xyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5DaGVtaWNhbDpcclxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgU2V0KFtcclxuICAgICAgICAgICAgICAgIFByb2R1Y3QuQ3JvcCxcclxuICAgICAgICAgICAgICAgIFByb2R1Y3QuTWV0YWwsXHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0LkdlbSxcclxuICAgICAgICAgICAgICAgIFByb2R1Y3QuRnVlbCxcclxuICAgICAgICAgICAgXSldO1xyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5DaXJjdWl0OlxyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBTZXQoW1Byb2R1Y3QuTWV0YWxdKV07XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0LkNvbXB1dGVyOlxyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBTZXQoW1Byb2R1Y3QuQ2lyY3VpdF0pXTtcclxuICAgICAgICBjYXNlIFByb2R1Y3QuQWNjZXNzb3J5OlxyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBTZXQoW1Byb2R1Y3QuR2VtXSldO1xyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5GdXJuaXR1cmU6XHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFNldChbUHJvZHVjdC5GaWJlcl0pXTtcclxuICAgICAgICBjYXNlIFByb2R1Y3QuR2FkZ2V0OlxyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBTZXQoW1Byb2R1Y3QuQ29tcHV0ZXJdKV07XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0LlZlaGljbGU6XHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFNldChbUHJvZHVjdC5NZXRhbF0pXTtcclxuICAgICAgICBjYXNlIFByb2R1Y3QuTWFjaGluZTpcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIG5ldyBTZXQoW1Byb2R1Y3QuTWV0YWxdKSxcclxuICAgICAgICAgICAgICAgIG5ldyBTZXQoW1Byb2R1Y3QuQ29tcHV0ZXJdKSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICBjYXNlIFByb2R1Y3QuVG9vbDpcclxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgU2V0KFtQcm9kdWN0Lk1ldGFsXSldO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgREVNQU5EX1BST0RVQ1RTID0gYWxsUHJvZHVjdHMoKVxyXG4gICAgLm1hcCgoeCkgPT4gZ2V0RGVtYW5kUHJvZHVjdHNIZWxwZXIoeCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZMQVRfREVNQU5EX1BST0RVQ1RTID0gREVNQU5EX1BST0RVQ1RTXHJcbiAgICAubWFwKCh4KSA9PiBJbW11dGFibGUuU2V0PFByb2R1Y3Q+KCkudW5pb24oLi4ueCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9QUk9EVUNUUyA9IEltbXV0YWJsZVxyXG4gICAgLlNldChhbGxQcm9kdWN0cygpXHJcbiAgICAgICAgLmZpbHRlcigocHJvZHVjdCkgPT4gIVJBV19NQVRFUklBTFNfU0VULmhhcyhwcm9kdWN0IGFzIFJhd01hdGVyaWFsKSAmJiAvLyBub3QgcmF3IG1hdGVyaWFsc1xyXG4gICAgICAgICAgICAhRkxBVF9ERU1BTkRfUFJPRFVDVFNbcHJvZHVjdF1cclxuICAgICAgICAgICAgICAgIC5zdWJ0cmFjdChSQVdfTUFURVJJQUxTX1NFVClcclxuICAgICAgICAgICAgICAgIC5pc0VtcHR5KCkpKTsgLy8gYW5kIHJlcXVpcmVzIG5vbiByYXcgbWF0ZXJpYWxzIHRvIHByb2R1Y2UgKGUuZy4gZmliZXJzIC0+IGFwcGFyZWxzLCB3aGVyZSBmaWJlciBuZWVkcyBjcm9wcyB0byBwcm9kdWNlIGJ1dCBhcHBhcmVscyBkb24ndCBuZWVkIGFueSByYXcgbWF0ZXJpYWxzKVxyXG5cclxuZnVuY3Rpb24gZ2V0T3BEZW1hbmQocHJvZHVjdDogUHJvZHVjdCk6IFByb2R1Y3Qge1xyXG4gICAgc3dpdGNoIChwcm9kdWN0KSB7XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0LkNyb3A6XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0Lk1ldGFsOlxyXG4gICAgICAgIGNhc2UgUHJvZHVjdC5HZW06XHJcbiAgICAgICAgY2FzZSBQcm9kdWN0LkZ1ZWw6XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9kdWN0LlRvb2w7XHJcbiAgICAgICAgZGVmYXVsdDogLy8gcG9zdC1wcm9jZXNzaW5nIGluZHVzdHJpZXNcclxuICAgICAgICAgICAgcmV0dXJuIFByb2R1Y3QuTWFjaGluZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE9QX1BST0RVQ1RTOiBQcm9kdWN0W10gPSBhbGxQcm9kdWN0cygpXHJcbiAgICAubWFwKCh4KSA9PiBnZXRPcERlbWFuZCh4KSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbC9wcm9kdWN0LnRzIiwiaW1wb3J0ICogYXMgQWxnbyBmcm9tIFwiLi9hbGdvcml0aG1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVbmlvbkZpbmQ8VD4ge1xyXG5cclxuICAgIHByaXZhdGUgdG9JZCA9IG5ldyBNYXA8VCwgbnVtYmVyPigpO1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRzID0gbmV3IE1hcDxudW1iZXIsIFtudW1iZXIsIG51bWJlcl0+KCk7XHJcbiAgICBwcml2YXRlIGlkID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZXRzPzogU2V0PFQ+KSB7XHJcbiAgICAgICAgaWYgKHNldHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNldHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoaXRlbTogVCkge1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMudG9JZC5nZXQoaXRlbSk7XHJcbiAgICAgICAgaWYgKGlkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IGl0ZW0gdG8gYmUgaXRlbSdzIHBhcmVudFxyXG4gICAgICAgIGlkID0gKyt0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMudG9JZC5zZXQoaXRlbSwgaWQpO1xyXG4gICAgICAgIHJldHVybiBBbGdvLmdldE9yU2V0KFxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudHMsXHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAoKSA9PiBbaWQsIDBdIGFzIFtudW1iZXIsIG51bWJlcl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bmlvbihsZWZ0OiBULCByaWdodDogVCkge1xyXG4gICAgICAgIGNvbnN0IFtsUm9vdCwgbFJhbmtdID0gdGhpcy5maW5kKGxlZnQpO1xyXG4gICAgICAgIGNvbnN0IFtyUm9vdCwgclJhbmtdID0gdGhpcy5maW5kKHJpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKGxSb290ID09PSByUm9vdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobFJhbmsgPCByUmFuaykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudHMuc2V0KGxSb290LCBbclJvb3QsIGxSYW5rXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsUmFuayA+IHJSYW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50cy5zZXQoclJvb3QsIFtsUm9vdCwgclJhbmtdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudHMuc2V0KGxSb290LCBbclJvb3QsIHJSYW5rICsgMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNTYW1lU2V0KGxlZnQ6IFQsIHJpZ2h0OiBUKSB7XHJcbiAgICAgICAgY29uc3QgW2xQYXJlbnRdID0gdGhpcy5maW5kKGxlZnQpO1xyXG4gICAgICAgIGNvbnN0IFtyUGFyZW50XSA9IHRoaXMuZmluZChyaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGxQYXJlbnQgPT09IHJQYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kKG5vZGU6IFQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcGF0aDogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBsZXQgcHJldiA9IHRoaXMudG9JZC5nZXQobm9kZSkhO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBbcGFyZW50LCByYW5rXSA9IHRoaXMucGFyZW50cy5nZXQocHJldikhO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByZXYgPT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gcGF0aCBjb21wcmVzc2lvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0ID0gW3BhcmVudCwgcmFua10gYXMgW251bWJlciwgbnVtYmVyXTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgcGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50cy5zZXQoaWQsIFsuLi5yZXRdIGFzIFtudW1iZXIsIG51bWJlcl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY29sbGVjdCBhbmNlc3RvcnMgZm9yIGZ1dHVyZSBwYXRoIGNvbXByZXNzaW9uXHJcbiAgICAgICAgICAgIHBhdGgucHVzaChwcmV2KTtcclxuICAgICAgICAgICAgcHJldiA9IHBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FsZ29yaXRobS91bmlvbmZpbmQudHMiLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3Q8VmFsVD4oZGF0YTogSXRlcmFibGU8W1ZhbFQsIHN0cmluZ10+LCBpZD86IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgY29uc3QgcmV0ID0gJChcIjxzZWxlY3Q+XCIpXHJcbiAgICAgICAgLmFwcGVuZCgkKFwiPG9wdGlvbiBzZWxlY3RlZCBkaXNhYmxlZCBoaWRkZW4+XCIpKTtcclxuXHJcbiAgICBpZiAoaWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldC5hdHRyKFwiaWRcIiwgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXQuYXBwZW5kKC4uLkFycmF5XHJcbiAgICAgICAgLmZyb20oZGF0YSlcclxuICAgICAgICAubWFwKChbdmFsLCB0ZXh0XSkgPT5cclxuICAgICAgICAgICAgJChcIjxvcHRpb24+XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInZhbHVlXCIsIHZhbC50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgLnRleHQodGV4dCkpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gU29ydE9yZGVyIHtcclxuICAgIEluY3JlYXNpbmcsXHJcbiAgICBEZWNyZWFzaW5nLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhd1RhYmxlPFQ+IHtcclxuXHJcbiAgICBwcml2YXRlIHRhYmxlID0gJChcIjx0YWJsZT5cIik7XHJcbiAgICBwcml2YXRlIGxlc3NUaGFuOiAoKGE6IFQsIGI6IFQpID0+IG51bWJlcikgfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIHNvcnRPcmRlciA9IFNvcnRPcmRlci5JbmNyZWFzaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgY29sdW1uSGVhZGVyOiBBcnJheTxbc3RyaW5nLCAoKGE6IFQsIGI6IFQpID0+IG51bWJlcikgfCB1bmRlZmluZWRdPixcclxuICAgICAgICBwcml2YXRlIHJlZnJlc2g6ICgpID0+IHZvaWQsXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoY29sdW1uSGVhZGVyLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGFibGUgc2hvdWxkIGhhdmUgYXQgbGVhc3QgMSBjb2x1bW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFssIHRoaXMubGVzc1RoYW5dID0gY29sdW1uSGVhZGVyWzBdO1xyXG5cclxuICAgICAgICB0aGlzLnRhYmxlXHJcbiAgICAgICAgICAgIC5lbXB0eSgpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0cj5cIikuYXBwZW5kKC4uLnRoaXMuY29sdW1uSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAubWFwKChbbmFtZSwgc29ydFRhcmdldF0pID0+ICQoXCI8dGg+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQobmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlc3NUaGFuID0gc29ydFRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0T3JkZXIgPSB0aGlzLnNvcnRPcmRlciA9PT0gU29ydE9yZGVyLkluY3JlYXNpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU29ydE9yZGVyLkRlY3JlYXNpbmcgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU29ydE9yZGVyLkluY3JlYXNpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyAkZ2V0VGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcihcclxuICAgICAgICBhbGxEYXRhOiBUW10sXHJcbiAgICAgICAgbWFrZVJvd0RhdGE6IChkYXRhOiBUKSA9PiBBcnJheTwobnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbik+LFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGVzc1RoYW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBsZXNzVGhhbiA9IHRoaXMubGVzc1RoYW47XHJcbiAgICAgICAgICAgIGFsbERhdGFcclxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkID0gbGVzc1RoYW4oYSwgYik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydE9yZGVyID09PSBTb3J0T3JkZXIuSW5jcmVhc2luZyA/IG9yZCA6IC0xICogb3JkO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZW1vdmUgZXZlcnl0aGluZyBleGNlcHQgdGhlIGhlYWRlclxyXG4gICAgICAgIHRoaXMudGFibGUuY2hpbGRyZW4oKS5zbGljZSgxKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVcclxuICAgICAgICAgICAgLmFwcGVuZCguLi5hbGxEYXRhXHJcbiAgICAgICAgICAgICAgICAubWFwKChkYXRhKSA9PiAkKFwiPHRyPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoLi4ubWFrZVJvd0RhdGEoZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY29sRGF0YSkgPT4gJChcIjx0ZD5cIikuaHRtbChjb2xEYXRhLnRvU3RyaW5nKCkpKSkpKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaHRtbC50cyIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG4vLyBkaXNhYmxlIHJpZ2h0LWNsaWNrIGNvbnRleHQgbWVudVxyXG5kb2N1bWVudC5ib2R5Lm9uY29udGV4dG1lbnUgPSAoKSA9PiBmYWxzZTtcclxuXHJcbkdhbWVcclxuICAgIC50cnlMb2FkKClcclxuICAgIC50aGVuKChnYW1lKSA9PiB7XHJcbiAgICAgICAgZ2FtZS5zdGFydFJlbmRlcmluZygpO1xyXG4gICAgfSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gRGV4aWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJEZXhpZVwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCAqIGFzIEFsZ28gZnJvbSBcIi4uL2FsZ29yaXRobS9hbGdvcml0aG1cIjtcclxuaW1wb3J0ICogYXMgTW9kZWwgZnJvbSBcIi4vbW9kZWxcIjtcclxuXHJcbmNvbnN0IFBPV0VSX1BPVEVOVElBTCA9IDIwMDtcclxuY29uc3QgUFJJQ0VfRVhQX0xPVyA9IDAuNztcclxuY29uc3QgUFJJQ0VfRVhQX0hJR0ggPSAxLjM7XHJcbmNvbnN0IERBWVNfS0VFUF9HT09EUyA9IDEwOyAvLyBudW1iZXIgb2YgZGF5cyB0byBrZWVwIGNvbnN1bXB0aW9uXHJcbmNvbnN0IE1JTl9QUklDRV9QRVJDRU5UID0gMC40OyAvLyBwZXJjZW50IG9mIHRoZSBiYXNlIHByaWNlXHJcblxyXG5jb25zdCBDT0xPTllfVU5JVF9ERU1BTkQgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgcmV0ID0gbmV3IEFycmF5PG51bWJlcj4oTW9kZWwuTlVNX1BST0RVQ1RTKS5maWxsKDApO1xyXG4gICAgcmV0W01vZGVsLlByb2R1Y3QuRm9vZF0gPSAxMDtcclxuICAgIHJldFtNb2RlbC5Qcm9kdWN0LkRyaW5rXSA9IDEwO1xyXG4gICAgcmV0W01vZGVsLlByb2R1Y3QuQXBwYXJlbF0gPSAxMDtcclxuICAgIHJldFtNb2RlbC5Qcm9kdWN0Lk1lZGljaW5lXSA9IDEwO1xyXG4gICAgcmV0W01vZGVsLlByb2R1Y3QuQWNjZXNzb3J5XSA9IDU7XHJcbiAgICByZXRbTW9kZWwuUHJvZHVjdC5GdXJuaXR1cmVdID0gNTtcclxuICAgIHJldFtNb2RlbC5Qcm9kdWN0LkdhZGdldF0gPSA1O1xyXG4gICAgcmV0W01vZGVsLlByb2R1Y3QuVmVoaWNsZV0gPSA1O1xyXG4gICAgcmV0dXJuIHJldDtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xvbnkge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZXN0aW1hdGVQcmljZShkZW1hbmQ6IG51bWJlciwgc3VwcGx5OiBudW1iZXIsIGVsYXN0aWNpdHk6IG51bWJlciwgYmFzZVByaWNlOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZWxhc3RpY2l0eSA+IDApO1xyXG5cclxuICAgICAgICAvLyByZXR1cm5zIHJhdGlvIGluIFswLDJdXHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSBkZW1hbmQgPT09IDAgP1xyXG4gICAgICAgICAgICBQUklDRV9FWFBfTE9XIDogLy8gdGhpcyBtYWtlcyAwLWRlbWFuZCBnb29kcyAkMVxyXG4gICAgICAgICAgICBzdXBwbHkgPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgUFJJQ0VfRVhQX0hJR0ggOlxyXG4gICAgICAgICAgICAgICAgTWF0aC5taW4oUFJJQ0VfRVhQX0hJR0gsIGRlbWFuZCAvIHN1cHBseSk7XHJcblxyXG4gICAgICAgIC8vIHNjb3JlIHJhbmdlcyBpbiAoMCxNYXRoLnBvdygyLGVsYXN0aWNpdHkpXVxyXG4gICAgICAgIGNvbnN0IHNjb3JlID0gTWF0aC5wb3cocmF0aW8sIGVsYXN0aWNpdHkpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlID0gYmFzZVByaWNlICogc2NvcmU7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoTnVtYmVyLmlzRmluaXRlKHByaWNlKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcmljZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVsYXN0aWNpdHkocHJvZHVjdDogTW9kZWwuUHJvZHVjdCkge1xyXG4gICAgICAgIHN3aXRjaCAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuQ3JvcDpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0Lk1ldGFsOlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuR2VtOlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuRnVlbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuRm9vZDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxLjU7IC8vIHZlcnkgZWxhc3RpY1xyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuRHJpbms6XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5BcHBhcmVsOlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuTWVkaWNpbmU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkFjY2Vzc29yeTpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkZ1cm5pdHVyZTpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkdhZGdldDpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LlZlaGljbGU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMC40O1xyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuRmliZXI6IC8vIGludGVybWVkaWF0ZVxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuQ2hlbWljYWw6XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5DaXJjdWl0OlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuQ29tcHV0ZXI6XHJcbiAgICAgICAgICAgIC8vIGNhc2UgTW9kZWwuUHJvZHVjdC5Db25jcmV0ZTogLy8gb3BlcmF0aW9uYWxcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0Lk1hY2hpbmU6XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5Ub29sOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEuNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBiYXNlUHJpY2UocHJvZHVjdDogTW9kZWwuUHJvZHVjdCkge1xyXG4gICAgICAgIHN3aXRjaCAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuQ3JvcDogLy8gcmF3IG1hdGVyaWFsc1xyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuTWV0YWw6XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5HZW06XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5GdWVsOlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuRmliZXI6IC8vIGludGVybWVkaWF0ZVxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuQ2hlbWljYWw6XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5DaXJjdWl0OlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuQ29tcHV0ZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0Lk1hY2hpbmU6IC8vIG9wZXJhdGlvbmFsXHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5Ub29sOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgICAgIGNhc2UgTW9kZWwuUHJvZHVjdC5BY2Nlc3Nvcnk6IC8vIGx1eHVyeVxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuRnVybml0dXJlOlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuR2FkZ2V0OlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuVmVoaWNsZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuRm9vZDogLy8gYmFzaWNcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkRyaW5rOlxyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLlByb2R1Y3QuQXBwYXJlbDpcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0Lk1lZGljaW5lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEuNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRlcml2ZWREZW1hbmRzID0gbmV3IEFycmF5PE1vZGVsLlByb2R1Y3Q+KE1vZGVsLk5VTV9QUk9EVUNUUykuZmlsbCgwKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IG51bWJlcixcclxuICAgICAgICBwcml2YXRlIGhvbWVQbGFuZXQ6IE1vZGVsLlBsYW5ldCxcclxuICAgICAgICBwcml2YXRlIHBvcHVsYXRpb246IG51bWJlcixcclxuICAgICAgICBwcml2YXRlIHBsYXllckludmVudG9yeTogTW9kZWwuSW52ZW50b3J5LFxyXG4gICAgICAgIHByaXZhdGUgbWFya2V0SW52ZW50b3J5OiBNb2RlbC5JbnZlbnRvcnksXHJcbiAgICAgICAgcHJpdmF0ZSBtYXhQb3B1bGF0aW9uID0gMTAwLFxyXG4gICAgICAgIHByaXZhdGUgaXNMb2NrUG9wdWxhdGlvbiA9IGZhbHNlLFxyXG4gICAgICAgIHByaXZhdGUgcG93ZXJQbGFuZXRMZXZlbCA9IDAsXHJcbiAgICAgICAgcHJpdmF0ZSBwb3dlck91dHB1dEVmZiA9IDAsXHJcbiAgICAgICAgcHJpdmF0ZSBmb29kSGFwcGluZXNzID0gMCxcclxuICAgICAgICBwcml2YXRlIGx1eHVyeUhhcHBpbmVzcyA9IDAsXHJcbiAgICAgICAgcHJpdmF0ZSBjb21tb25IYXBwaW5lc3MgPSAwLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IE1vZGVsLklDb2xvbnkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBob21lUGxhbmV0SWQ6IHRoaXMuaG9tZVBsYW5ldC5pZCxcclxuICAgICAgICAgICAgcG9wdWxhdGlvbjogdGhpcy5wb3B1bGF0aW9uLFxyXG4gICAgICAgICAgICBwbGF5ZXJJbnZlbnRvcnlJZDogdGhpcy5wbGF5ZXJJbnZlbnRvcnkuaWQsXHJcbiAgICAgICAgICAgIG1hcmtldEludmVudG9yeUlkOiB0aGlzLm1hcmtldEludmVudG9yeS5pZCxcclxuICAgICAgICAgICAgbWF4UG9wdWxhdGlvbjogdGhpcy5tYXhQb3B1bGF0aW9uLFxyXG4gICAgICAgICAgICBpc0xvY2tQb3B1bGF0aW9uOiB0aGlzLmlzTG9ja1BvcHVsYXRpb24sXHJcbiAgICAgICAgICAgIHBvd2VyUGxhbmV0TGV2ZWw6IHRoaXMucG93ZXJQbGFuZXRMZXZlbCxcclxuICAgICAgICAgICAgcG93ZXJPdXRwdXRFZmY6IHRoaXMucG93ZXJPdXRwdXRFZmYsXHJcbiAgICAgICAgICAgIGZvb2RIYXBwaW5lc3M6IHRoaXMuZm9vZEhhcHBpbmVzcyxcclxuICAgICAgICAgICAgbHV4dXJ5SGFwcGluZXNzOiB0aGlzLmx1eHVyeUhhcHBpbmVzcyxcclxuICAgICAgICAgICAgY29tbW9uSGFwcGluZXNzOiB0aGlzLmNvbW1vbkhhcHBpbmVzcyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIb21lUGxhbmV0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhvbWVQbGFuZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBsYXllckludmVudG9yeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJJbnZlbnRvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1hcmtldEludmVudG9yeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXJrZXRJbnZlbnRvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBvcHVsYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9wdWxhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWF4UG9wKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5tYXhQb3B1bGF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ3Jvd3RoUmF0ZShnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG4gICAgICAgIGNvbnN0IGJhc2VHcm93dGggPSAwLjE7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvb2RIYXBwaW5lc3MgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvb2RIYXBwaW5lc3MgLSAxOyAvLyBzdGFydmUgdG8gZGVhdGhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbW1vbiA9IDEgKyB0aGlzLmNvbW1vbkhhcHBpbmVzcztcclxuXHJcbiAgICAgICAgLy8gbHV4dWFyeSBib251cyBvbmx5IGFwcGxpZXMgd2hlbiBjb21tb24gZ29vZHMgZGVtYW5kcyBhcmUgZnVsbGZpbGxlZFxyXG4gICAgICAgIGNvbnN0IGx1eHVyeSA9IGNvbW1vbiA9PT0gMSA/IDEgKyB0aGlzLmx1eHVyeUhhcHBpbmVzcyA6IDE7XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZXJneVVzYWdlID0gMSArIHRoaXMuZ2V0UG93ZXJVc2FnZUVmZihnYWxheHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZW5lcmd5VXNhZ2UgKiBjb21tb24gKiBsdXh1cnkgKiBiYXNlR3Jvd3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUcmFkZXJQb3dlclVzYWdlKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcbiAgICAgICAgbGV0IG51bVRyYWRlcnMgPSAwO1xyXG4gICAgICAgIGNvbnN0IHRvcyA9IGdhbGF4eS5nZXRUcmFkZVJvdXRlcygpLmdldCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKHRvcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdG8gb2YgdG9zKSB7XHJcbiAgICAgICAgICAgICAgICBudW1UcmFkZXJzICs9IGdhbGF4eS5nZXROdW1Vc2VkVHJhZGVycyh0aGlzLCB0byk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudW1UcmFkZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbmR1c3RyaWFsUG93ZXJVc2FnZShnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG4gICAgICAgIHJldHVybiBBbGdvLnN1bSguLi5JbW11dGFibGVcclxuICAgICAgICAgICAgLlNlcShnYWxheHkuZ2V0SW5kdXN0cmllcyh0aGlzKSlcclxuICAgICAgICAgICAgLm1hcCgoaW5kdXN0cnkpID0+IGluZHVzdHJ5LmdldFBvd2VyVXNhZ2UoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDaXZpbGlhblBvd2VyVXNhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5wb3B1bGF0aW9uICogMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb3RhbFBvd2VyVXNhZ2UoZ2FsYXh5OiBNb2RlbC5HYWxheHkpIHtcclxuICAgICAgICBjb25zdCBpbmRVc2FnZSA9IHRoaXMuZ2V0SW5kdXN0cmlhbFBvd2VyVXNhZ2UoZ2FsYXh5KTtcclxuICAgICAgICBjb25zdCB0cmFkZXJVc2FnZSA9IHRoaXMuZ2V0VHJhZGVyUG93ZXJVc2FnZShnYWxheHkpO1xyXG4gICAgICAgIGNvbnN0IGNpdlVzYWdlID0gdGhpcy5nZXRDaXZpbGlhblBvd2VyVXNhZ2UoKTtcclxuICAgICAgICByZXR1cm4gaW5kVXNhZ2UgKyB0cmFkZXJVc2FnZSArIGNpdlVzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQb3dlclVzYWdlRWZmKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcbiAgICAgICAgY29uc3QgdXNhZ2UgPSB0aGlzLmdldFRvdGFsUG93ZXJVc2FnZShnYWxheHkpO1xyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuZ2V0UG93ZXJPdXRwdXQoKTtcclxuICAgICAgICBpZiAodXNhZ2UgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dCA+IDAgPyAwIDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKDEsIG91dHB1dCAvIHVzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UG93ZXJPdXRwdXRFZmYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG93ZXJPdXRwdXRFZmY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBvd2VyT3V0cHV0KCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuZ2V0TWF4UG93ZXJQb3RlbnRpYWwoKSAqIHRoaXMuZ2V0UG93ZXJPdXRwdXRFZmYoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVuZXJneVByaWNlKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcbiAgICAgICAgY29uc3QgZGVtYW5kID0gdGhpcy5nZXRUb3RhbFBvd2VyVXNhZ2UoZ2FsYXh5KTtcclxuICAgICAgICBjb25zdCBzdXBwbHkgPSB0aGlzLmdldFBvd2VyT3V0cHV0KCk7XHJcbiAgICAgICAgcmV0dXJuIENvbG9ueS5lc3RpbWF0ZVByaWNlKGRlbWFuZCwgc3VwcGx5LCAxLCBDb2xvbnkuYmFzZVByaWNlKE1vZGVsLlByb2R1Y3QuRnVlbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYXhQb3dlclBvdGVudGlhbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3dlclBsYW5ldExldmVsICogUE9XRVJfUE9URU5USUFMICsgNTA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEZ1ZWxEZW1hbmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWF4UG93ZXJQb3RlbnRpYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UG93ZXJQbGFuZXRMZXZlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3dlclBsYW5ldExldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDaXRpemVuRGVtYW5kKHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QpIHtcclxuICAgICAgICBzd2l0Y2ggKHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5Qcm9kdWN0LkZ1ZWw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGdWVsRGVtYW5kKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1bml0RGVtYW5kID0gQ09MT05ZX1VOSVRfREVNQU5EW3Byb2R1Y3RdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodW5pdERlbWFuZCAqIHRoaXMuZ2V0UG9wdWxhdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzUHJvZHVjaW5nKGdhbGF4eTogTW9kZWwuR2FsYXh5LCBwcm9kdWN0OiBNb2RlbC5Qcm9kdWN0KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpbmR1c3RyeSBvZiBnYWxheHkuZ2V0SW5kdXN0cmllcyh0aGlzKSkge1xyXG4gICAgICAgICAgICBpZiAoaW5kdXN0cnkucHJvZHVjdFR5cGUgPT09IHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzRGVtYW5kKHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREZW1hbmQocHJvZHVjdCkgPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREZW1hbmQocHJvZHVjdDogTW9kZWwuUHJvZHVjdCkge1xyXG4gICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLmdldENpdGl6ZW5EZW1hbmQocHJvZHVjdCk7XHJcbiAgICAgICAgY29uc3QgZGVyaXZlZCA9IHRoaXMuZGVyaXZlZERlbWFuZHNbcHJvZHVjdF07XHJcbiAgICAgICAgcmV0dXJuIGJhc2UgKyBkZXJpdmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdXBwbHkocHJvZHVjdDogTW9kZWwuUHJvZHVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtldEludmVudG9yeS5nZXRRdHkocHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlY2FsY3VsYXRlKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKCk7XHJcbiAgICAgICAgdGhpcy5ncm93dGgoZ2FsYXh5KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxEZXJpdmVkRGVtYW5kKGdhbGF4eSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbERlcml2ZWREZW1hbmQoZ2FsYXh5OiBNb2RlbC5HYWxheHkpIHtcclxuICAgICAgICB0aGlzLmRlcml2ZWREZW1hbmRzLmZpbGwoMCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpbmR1c3RyeSBvZiBnYWxheHkuZ2V0SW5kdXN0cmllcyh0aGlzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kQ2FwID0gaW5kdXN0cnkucHJvZENhcChnYWxheHkpO1xyXG4gICAgICAgICAgICBJbW11dGFibGVcclxuICAgICAgICAgICAgICAgIC5TZXEoTW9kZWwuSW5kdXN0cnkuZ2V0RGVtYW5kUHJvZHVjdHMoaW5kdXN0cnkucHJvZHVjdFR5cGUpKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRlZEtpbmRzOiB4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdHk6IHByb2RDYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KGluZHVzdHJ5LmdldE9wRGVtYW5kKCkpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoZGVtYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIGRlbWFuZC5uZWVkZWRLaW5kcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlcml2ZWREZW1hbmRzW3Byb2R1Y3RdICs9IGRlbWFuZC5xdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5FeHBhbmRQb3dlclBsYW50KGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcbiAgICAgICAgcmV0dXJuIDIgKiB0aGlzLmdldFRvdGFsUG93ZXJVc2FnZShnYWxheHkpID4gdGhpcy5nZXRNYXhQb3dlclBvdGVudGlhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleHBhbmRQb3dlclBsYW5ldChnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRoaXMuY2FuRXhwYW5kUG93ZXJQbGFudChnYWxheHkpKTtcclxuICAgICAgICB0aGlzLnBvd2VyUGxhbmV0TGV2ZWwgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UHJvZENhcChnYWxheHk6IE1vZGVsLkdhbGF4eSwgcHJvZHVjdDogTW9kZWwuUHJvZHVjdCkge1xyXG4gICAgICAgIHJldHVybiBBbGdvLnN1bSguLi5JbW11dGFibGVcclxuICAgICAgICAgICAgLlNlcShnYWxheHkuZ2V0SW5kdXN0cmllcyh0aGlzKSlcclxuICAgICAgICAgICAgLmZpbHRlcigoaW5kdXN0cnkpID0+IGluZHVzdHJ5LnByb2R1Y3RUeXBlID09PSBwcm9kdWN0KVxyXG4gICAgICAgICAgICAubWFwKChpbmR1c3RyeSkgPT4gaW5kdXN0cnkucHJvZENhcChnYWxheHkpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYWRlKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllckludmVudG9yeSA9IHRoaXMucGxheWVySW52ZW50b3J5O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgTW9kZWwuYWxsUHJvZHVjdHMoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBxdHkgPSBwbGF5ZXJJbnZlbnRvcnkuZ2V0UXR5KHByb2R1Y3QpO1xyXG4gICAgICAgICAgICBjb25zdCBkZW1hbmQgPSBwbGF5ZXJJbnZlbnRvcnkuZ2V0RGVtYW5kKGdhbGF4eSwgcHJvZHVjdCk7XHJcbiAgICAgICAgICAgIGlmIChxdHkgPiBkZW1hbmQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1cnBsdXMgPSBxdHkgLSBkZW1hbmQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyeUJ1eShnYWxheHksIHBsYXllckludmVudG9yeSwgcHJvZHVjdCwgc3VycGx1cywgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXR5IDwgZGVtYW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZpY2l0ID0gZGVtYW5kIC0gcXR5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cnlTZWxsKGdhbGF4eSwgcGxheWVySW52ZW50b3J5LCBwcm9kdWN0LCBkZWZpY2l0LCBJbmZpbml0eSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvY2tQb3B1bGF0aW9uKGlzTG9jaz86IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoaXNMb2NrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvY2tQb3B1bGF0aW9uID0gaXNMb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pc0xvY2tQb3B1bGF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQcmljZShwcm9kdWN0OiBNb2RlbC5Qcm9kdWN0KSB7XHJcbiAgICAgICAgY29uc3Qgc3VwcGx5ID0gdGhpcy5tYXJrZXRJbnZlbnRvcnkuZ2V0UXR5KHByb2R1Y3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWxQcmljZShwcm9kdWN0LCBzdXBwbHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWFsUHJpY2UocHJvZHVjdDogTW9kZWwuUHJvZHVjdCwgc3VwcGx5OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkZW1hbmQgPSB0aGlzLmdldERlbWFuZChwcm9kdWN0KTsgLy8gZ2FsYXh5LmdldEdhbGFjdGljRGVtYW5kcyhwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgY29uc3QgYmFzZVByaWNlID0gQ29sb255LmJhc2VQcmljZShwcm9kdWN0KTtcclxuICAgICAgICBjb25zdCBlbGFzdGljaXR5ID0gQ29sb255LmVsYXN0aWNpdHkocHJvZHVjdCk7XHJcbiAgICAgICAgY29uc3QgZXN0ID0gQ29sb255LmVzdGltYXRlUHJpY2UoXHJcbiAgICAgICAgICAgIGRlbWFuZCxcclxuICAgICAgICAgICAgc3VwcGx5LFxyXG4gICAgICAgICAgICBlbGFzdGljaXR5LFxyXG4gICAgICAgICAgICBiYXNlUHJpY2UpO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGVzdCA+PSAwKTtcclxuICAgICAgICBjb25zdCBtaW5QcmljZSA9IE1JTl9QUklDRVtwcm9kdWN0XTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChOdW1iZXIuaXNGaW5pdGUobWluUHJpY2UpKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgobWluUHJpY2UsIGVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyeUJ1eShcclxuICAgICAgICBnYWxheHk6IE1vZGVsLkdhbGF4eSxcclxuICAgICAgICBmcm9tSW52ZW50b3J5OiBNb2RlbC5JbnZlbnRvcnksXHJcbiAgICAgICAgcHJvZHVjdDogTW9kZWwuUHJvZHVjdCxcclxuICAgICAgICBtYXhRdHk6IG51bWJlcixcclxuICAgICAgICBtaW5QcmljZTogbnVtYmVyLFxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KG1heFF0eSA+PSAwKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFya2V0SW52ZW50b3J5ID0gdGhpcy5tYXJrZXRJbnZlbnRvcnk7XHJcbiAgICAgICAgY29uc3QgbWFya2V0UXR5ID0gbWFya2V0SW52ZW50b3J5LmdldFF0eShwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgbGV0IGJvdWdodCA9IDA7XHJcbiAgICAgICAgbGV0IGNvc3QgPSAwO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01hcmtldFF0eSA9IG1hcmtldFF0eSArIGJvdWdodDtcclxuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSB0aGlzLnJlYWxQcmljZShwcm9kdWN0LCBuZXdNYXJrZXRRdHkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydChwcmljZSA+IDApO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBtYXhRdHkgPT09IGJvdWdodCB8fFxyXG4gICAgICAgICAgICAgICAgcHJpY2UgPCBtaW5QcmljZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICsrYm91Z2h0O1xyXG4gICAgICAgICAgICBjb3N0ICs9IHByaWNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm91Z2h0ID4gMCkge1xyXG4gICAgICAgICAgICBmcm9tSW52ZW50b3J5LnRha2VHb29kcyhwcm9kdWN0LCBib3VnaHQpO1xyXG4gICAgICAgICAgICBtYXJrZXRJbnZlbnRvcnkucHV0R29vZHMocHJvZHVjdCwgYm91Z2h0KTtcclxuICAgICAgICAgICAgZ2FsYXh5LmRlcG9zaXQoY29zdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib3VnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyeVNlbGwoXHJcbiAgICAgICAgZ2FsYXh5OiBNb2RlbC5HYWxheHksXHJcbiAgICAgICAgdG9JbnZlbnRvcnk6IE1vZGVsLkludmVudG9yeSxcclxuICAgICAgICBwcm9kdWN0OiBNb2RlbC5Qcm9kdWN0LFxyXG4gICAgICAgIG1heFF0eTogbnVtYmVyLFxyXG4gICAgICAgIG1heFByaWNlOiBudW1iZXIsXHJcbiAgICAgICAgaXNJbnRlcm5hbEJ1eWVyOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQobWF4UXR5ID49IDApO1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrZXRJbnZlbnRvcnkgPSB0aGlzLm1hcmtldEludmVudG9yeTtcclxuICAgICAgICBjb25zdCBtYXJrZXRRdHkgPSBtYXJrZXRJbnZlbnRvcnkuZ2V0UXR5KHByb2R1Y3QpO1xyXG5cclxuICAgICAgICBjb25zdCBtaW5TdG9ja1F0eSA9IHRoaXMubWluU3RvY2tRdHkoZ2FsYXh5LCBwcm9kdWN0KTtcclxuXHJcbiAgICAgICAgbGV0IGNvc3QgPSAwO1xyXG4gICAgICAgIGxldCBzb2xkID0gMDtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdNYXJrZXRRdHkgPSBtYXJrZXRRdHkgLSBzb2xkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydChuZXdNYXJrZXRRdHkgPj0gMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gdGhpcy5yZWFsUHJpY2UocHJvZHVjdCwgbmV3TWFya2V0UXR5KTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbWF4UXR5ID09PSBzb2xkIHx8XHJcbiAgICAgICAgICAgICAgICBwcmljZSA+IG1heFByaWNlIHx8XHJcbiAgICAgICAgICAgICAgICBuZXdNYXJrZXRRdHkgPT09IDAgfHxcclxuICAgICAgICAgICAgICAgICF0b0ludmVudG9yeS5oYXNTcGFjZUZvcihzb2xkKSB8fFxyXG4gICAgICAgICAgICAgICAgKCFpc0ludGVybmFsQnV5ZXIgJiYgbmV3TWFya2V0UXR5IDw9IG1pblN0b2NrUXR5KSAvLyBjYW5ub3Qgc2VsbCBiZWxvdyB0aGUgXCJzYWZldHkgbGluZVwiIHRvIHRyYWRlcnNcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICArK3NvbGQ7XHJcbiAgICAgICAgICAgIGNvc3QgKz0gcHJpY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzb2xkID4gMCkge1xyXG4gICAgICAgICAgICBtYXJrZXRJbnZlbnRvcnkudGFrZUdvb2RzKHByb2R1Y3QsIHNvbGQpO1xyXG4gICAgICAgICAgICB0b0ludmVudG9yeS5wdXRHb29kcyhwcm9kdWN0LCBzb2xkKTtcclxuICAgICAgICAgICAgZ2FsYXh5LndpdGhkcmF3KGNvc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGVmaWNpdChnYWxheHk6IE1vZGVsLkdhbGF4eSwgcHJvZHVjdDogTW9kZWwuUHJvZHVjdCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmtldCA9IHRoaXMubWFya2V0SW52ZW50b3J5O1xyXG4gICAgICAgIGNvbnN0IHF0eSA9IG1hcmtldC5nZXRRdHkocHJvZHVjdCk7XHJcbiAgICAgICAgY29uc3Qga2VlcCA9IHRoaXMubWluU3RvY2tRdHkoZ2FsYXh5LCBwcm9kdWN0KTtcclxuICAgICAgICByZXR1cm4gcXR5IDwga2VlcCA/IGtlZXAgLSBxdHkgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWluU3RvY2tRdHkoZ2FsYXh5OiBNb2RlbC5HYWxheHksIHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QpIHtcclxuICAgICAgICBjb25zdCBiYXNlRGVtYW5kID0gdGhpcy5nZXREZW1hbmQocHJvZHVjdCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBjb2xvbnkgaXMgcHJvZHVjaW5nIHRoZSB0YXJnZXQgZ29vZHMsIHRoZW4ga2VlcCBvbmx5IDEgZGF5IHdvcnRoIG9mIGdvb2RzIGZvciBsb2NhbCBjb25zdW1wdGlvblxyXG4gICAgICAgIGlmICh0aGlzLmlzUHJvZHVjaW5nKGdhbGF4eSwgcHJvZHVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJhc2VEZW1hbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBEQVlTX0tFRVBfR09PRFMgKiBiYXNlRGVtYW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ3Jvd3RoKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcbiAgICAgICAgY29uc3QgcmF0ZSA9IHRoaXMuZ3Jvd3RoUmF0ZShnYWxheHkpIC8gTW9kZWwuWUVBUl9QRVJfVElDSztcclxuICAgICAgICBjb25zdCBuZXh0ID0gTWF0aC5tYXgoMSwgdGhpcy5wb3B1bGF0aW9uICogKDEgKyByYXRlKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1heFBvcCA9IHRoaXMuaXNMb2NrUG9wdWxhdGlvbiA/IHRoaXMucG9wdWxhdGlvbiA6IHRoaXMuZ2V0TWF4UG9wKCk7XHJcbiAgICAgICAgY29uc3QgZGlmZiA9IG5leHQgLSBtYXhQb3A7XHJcblxyXG4gICAgICAgIGlmIChkaWZmID4gMCkgeyAvLyBpZiBwb3B1bGF0aW9uIGdyb3d0aCBpcyBwb3NpdGl2ZSAmIGlzIGdyb3dpbmcgYmV5b25kIGNhcFxyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRpb24gPSBtYXhQb3A7XHJcbiAgICAgICAgICAgIGdhbGF4eS5hZGRDb2xvbmlzdHMoZGlmZik7IC8vIGV4Y2VzcyBwb3B1bGF0aW9uIGJlY29tZXMgY29sb25pc3RzXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uID0gTWF0aC5taW4obmV4dCwgbWF4UG9wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdW1lKCkge1xyXG4gICAgICAgIGNvbnN0IGludmVudG9yeSA9IHRoaXMubWFya2V0SW52ZW50b3J5O1xyXG5cclxuICAgICAgICBjb25zdCBjb25zdW1lMSA9IChwcm9kdWN0OiBNb2RlbC5Qcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF0eSA9IGludmVudG9yeS5nZXRRdHkocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbWFuZCA9IE1hdGguZmxvb3IodGhpcy5nZXRDaXRpemVuRGVtYW5kKHByb2R1Y3QpKTtcclxuICAgICAgICAgICAgaWYgKGRlbWFuZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29uc3VtZWQgPSBxdHkgPj0gZGVtYW5kID8gZGVtYW5kIDogcXR5O1xyXG4gICAgICAgICAgICBpbnZlbnRvcnkudGFrZUdvb2RzKHByb2R1Y3QsIGNvbnN1bWVkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdW1lZCAvIGRlbWFuZDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhbGxDb25zdW1wdGlvbiA9IE1vZGVsXHJcbiAgICAgICAgICAgIC5hbGxQcm9kdWN0cygpXHJcbiAgICAgICAgICAgIC5tYXAoKHByb2R1Y3QpID0+IGNvbnN1bWUxKHByb2R1Y3QpKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21tb25IYXBwaW5lc3MgPSBBbGdvLmF2ZXJhZ2UoXHJcbiAgICAgICAgICAgIGFsbENvbnN1bXB0aW9uW01vZGVsLlByb2R1Y3QuRHJpbmtdLFxyXG4gICAgICAgICAgICBhbGxDb25zdW1wdGlvbltNb2RlbC5Qcm9kdWN0LkFwcGFyZWxdLFxyXG4gICAgICAgICAgICBhbGxDb25zdW1wdGlvbltNb2RlbC5Qcm9kdWN0Lk1lZGljaW5lXSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmx1eHVyeUhhcHBpbmVzcyA9IEFsZ28uYXZlcmFnZShcclxuICAgICAgICAgICAgYWxsQ29uc3VtcHRpb25bTW9kZWwuUHJvZHVjdC5BY2Nlc3NvcnldLFxyXG4gICAgICAgICAgICBhbGxDb25zdW1wdGlvbltNb2RlbC5Qcm9kdWN0LkZ1cm5pdHVyZV0sXHJcbiAgICAgICAgICAgIGFsbENvbnN1bXB0aW9uW01vZGVsLlByb2R1Y3QuR2FkZ2V0XSxcclxuICAgICAgICAgICAgYWxsQ29uc3VtcHRpb25bTW9kZWwuUHJvZHVjdC5WZWhpY2xlXSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmZvb2RIYXBwaW5lc3MgPSBhbGxDb25zdW1wdGlvbltNb2RlbC5Qcm9kdWN0LkZvb2RdO1xyXG5cclxuICAgICAgICBjb25zdCBmRWZmID0gYWxsQ29uc3VtcHRpb25bTW9kZWwuUHJvZHVjdC5GdWVsXTtcclxuICAgICAgICB0aGlzLnBvd2VyT3V0cHV0RWZmID0gZkVmZiAqIGZFZmY7IC8vIGZFZmYgc3F1YXJlZFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBuZWVkcyB0byBiZSBwbGFjZWQgYWZ0ZXIgQ29sb255IGZvciB3ZWJwYWNrJ2VkIGJ1bmRsZSB0byB3b3JrXHJcbmNvbnN0IE1JTl9QUklDRSA9IE1vZGVsXHJcbiAgICAuYWxsUHJvZHVjdHMoKVxyXG4gICAgLm1hcCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJhc2VQcmljZSA9IENvbG9ueS5iYXNlUHJpY2UocHJvZHVjdCk7XHJcbiAgICAgICAgY29uc3QgZWxhc3RpY2l0eSA9IENvbG9ueS5lbGFzdGljaXR5KHByb2R1Y3QpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhNSU5fUFJJQ0VfUEVSQ0VOVCAqIGJhc2VQcmljZSwgZWxhc3RpY2l0eSk7XHJcbiAgICB9KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVsL2NvbG9ueS50cyIsImltcG9ydCAqIGFzIEFsZ28gZnJvbSBcIi4vYWxnb3JpdGhtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWluSGVhcDxUPiB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBoZWFwaWZ5PFQ+KFxyXG4gICAgICAgIGFycjogVFtdLFxyXG4gICAgICAgIGxlc3NUaGFuOiAoYTogVCwgYjogVCkgPT4gYm9vbGVhbixcclxuICAgICkge1xyXG4gICAgICAgIC8vIHdhbGtpbmcgdXAgdGhlIGhlYXAgYnkgZ29pbmcgYmFja3dhcmRcclxuICAgICAgICBmb3IgKGxldCBpID0gTWF0aC5mbG9vcigoYXJyLmxlbmd0aCAtIDEpIC8gMik7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGJ1YmJsZURvd24oYXJyLCBpLCBhcnIubGVuZ3RoLCBsZXNzVGhhbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXcmFwcyBhIGhlYXBpZmllZCBhcnJheSBpbnRvIGEgTWluSGVhcCB3aXRob3V0IGFueSBjaGVja2luZyB3aGF0c29ldmVyLlxyXG4gICAgICogQHBhcmFtIGFyciBhbiBoZWFwaWZpZWQgYXJyYXkgc2xpY2UsIHByZXN1bWFibHkgZ2VuZXJhdGVkIGZyb20gTWluSGVhcC5zbGljZSgpXHJcbiAgICAgKiBAcGFyYW0gbGVzc1RoYW4gdGhlIGNvbXBhcmF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB1bnNhZmVXcmFwPFQ+KGFycjogVFtdLCBsZXNzVGhhbiA9IChhOiBULCBiOiBUKSA9PiBhIDwgYikge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IG5ldyBNaW5IZWFwPFQ+KFtdLCBsZXNzVGhhbik7XHJcbiAgICAgICAgcmV0LmFyciA9IGFycjtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXJyOiBUW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaXQ/OiBJdGVyYWJsZTxUPixcclxuICAgICAgICBwcml2YXRlIGxlc3NUaGFuID0gKGE6IFQsIGI6IFQpID0+IGEgPCBiLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5hcnIgPSBpdCA/IEFycmF5LmZyb20oaXQpIDogW107XHJcbiAgICAgICAgTWluSGVhcC5oZWFwaWZ5KHRoaXMuYXJyLCBsZXNzVGhhbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9wKCkge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IHBvcCh0aGlzLmFyciwgdGhpcy5hcnIubGVuZ3RoLCB0aGlzLmxlc3NUaGFuKTsgLy8gc3dhcHMgdGhlIGhlYWQgdG8gdGhlIGVuZFxyXG4gICAgICAgIGNvbnN0IHBvcGVkID0gdGhpcy5hcnIucG9wKCk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQocmV0ID09PSBwb3BlZCk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVlaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRha2UobnVtOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAobnVtIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYW5ub3QgdGFrZSBuZWdhdGl2ZSBpdGVtc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5taW4odGhpcy5hcnIubGVuZ3RoLCBudW0pO1xyXG4gICAgICAgIGNvbnN0IHJldCA9IG5ldyBBcnJheTxUPihtYXgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcclxuICAgICAgICAgICAgcmV0W2ldID0gdGhpcy5wb3AoKSE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVJvb3QobmV3VmFsdWU6IFQpIHtcclxuICAgICAgICB0aGlzLmFyclswXSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIGJ1YmJsZURvd24odGhpcy5hcnIsIDAsIHRoaXMuYXJyLmxlbmd0aCwgdGhpcy5sZXNzVGhhbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNsaWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFyci5zbGljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBhIHNvcnRlZCBpdGVyYWJsZSBvcmRlcmVkIGJ5IHRoZSBsZWFzdCBwcmlvcml0eSAoaS5lLiBoaWdoLXRvLWxvdylcclxuICAgIC8vIHRoaXMgaXMgKnRoZSogaW4tcGxhY2UgdmVyc2lvblxyXG4gICAgcHVibGljIHJldmVyc2VTb3J0KCkge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuYXJyO1xyXG4gICAgICAgIHRoaXMuYXJyID0gW107IC8vIGNsZWFycyB0aGUgYXJyYXkgaW4gY2FzZSBmb3IgcmV1c2luZyB0aGlzIGhlYXBcclxuICAgICAgICBmb3IgKGxldCBsZW4gPSBhcnIubGVuZ3RoOyBsZW4gPiAwOyBsZW4tLSkge1xyXG4gICAgICAgICAgICBwb3AoYXJyLCBsZW4sIHRoaXMubGVzc1RoYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBhIHNvcnRlZCBpdGVyYWJsZSBvcmRlcmVkIGJ5IHRoZSBtb3N0IHByaW9yaXR5IChpLmUuIGxvdy10by1oaWdoKVxyXG4gICAgcHVibGljICpzb3J0KCkge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuYXJyO1xyXG4gICAgICAgIHRoaXMuYXJyID0gW107IC8vIGNsZWFycyB0aGUgYXJyYXkgaW4gY2FzZSBmb3IgcmV1c2luZyB0aGlzIGhlYXBcclxuICAgICAgICBsZXQgdmFsID0gcG9wKGFyciwgYXJyLmxlbmd0aCwgdGhpcy5sZXNzVGhhbik7XHJcbiAgICAgICAgd2hpbGUgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIGFyci5wb3AoKSE7XHJcbiAgICAgICAgICAgIHZhbCA9IHBvcChhcnIsIGFyci5sZW5ndGgsIHRoaXMubGVzc1RoYW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgKnNvcnRTbGljZSgpIHtcclxuICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmFyci5zbGljZSgpO1xyXG4gICAgICAgIGxldCB2YWwgPSBwb3AoYXJyLCBhcnIubGVuZ3RoLCB0aGlzLmxlc3NUaGFuKTtcclxuICAgICAgICB3aGlsZSAodmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgeWllbGQgYXJyLnBvcCgpITtcclxuICAgICAgICAgICAgdmFsID0gcG9wKGFyciwgYXJyLmxlbmd0aCwgdGhpcy5sZXNzVGhhbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnNlcnQoZGF0YTogVCkge1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuYXJyLmxlbmd0aDtcclxuICAgICAgICB0aGlzLmFyci5wdXNoKGRhdGEpO1xyXG4gICAgICAgIGJ1YmJsZVVwKHRoaXMuYXJyLCBpZHgsIHRoaXMubGVzc1RoYW4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhbmNlc3RvcihuOiBudW1iZXIsIGs6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKG4gKyAxKSAvIE1hdGgucG93KDIsIGspIC0gMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcmVudChuOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBhbmNlc3RvcihuLCAxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGVmdENoaWxkKGk6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIDIgKiBpICsgMTtcclxufVxyXG5cclxuLy8gcG9wIHN3YXBzIHRoZSByb290IHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5OyBjYWxsZXIgaXMgcmVzcG9uc2libGUgZm9yIG1lbWVvcnkgbWFuYWdlbWVudFxyXG5mdW5jdGlvbiBwb3A8VD4oYXJyOiBUW10sIGxlbmd0aDogbnVtYmVyLCBsZXNzVGhhbjogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGxlbk1pbnVzID0gbGVuZ3RoIC0gMTtcclxuICAgIGlmIChsZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBhcnJbbGVuTWludXNdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldCA9IGFyclswXTtcclxuICAgIEFsZ28uc3dhcChhcnIsIDAsIGxlbk1pbnVzKTsgLy8gcmVwbGFjZSByb290IHdpdGggdGhlIGxhc3QgZWxlbWVudCBhbmQgdGhlbiBidWJibGVkb3duXHJcbiAgICBidWJibGVEb3duKGFyciwgMCwgbGVuTWludXMsIGxlc3NUaGFuKTtcclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1YmJsZURvd248VD4oYXJyOiBUW10sIHN0YXJ0OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyLCBsZXNzVGhhbjogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IHJvb3QgPSBhcnJbc3RhcnRdO1xyXG4gICAgbGV0IGkgPSBzdGFydDsgLy8gaXRlcmF0b3Igc3RhcnRpbmcgYXQgdGhlIHJvb3Qgbm9kZSBkZWZpbmVkIGJ5IHN0YXJ0XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGxldCBjYW5kaWRhdGUgPSBsZWZ0Q2hpbGQoaSk7XHJcbiAgICAgICAgaWYgKGNhbmRpZGF0ZSA+PSBsZW5ndGgpIHsgLy8gbGVmdC1jaGlsZCBkb2Vzbid0IGV4aXN0XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbGVmdCA9IGFycltjYW5kaWRhdGVdO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0SWR4ID0gY2FuZGlkYXRlICsgMTtcclxuICAgICAgICBpZiAocmlnaHRJZHggPCBsZW5ndGggJiYgLy8gcmlnaHQtY2hpbGQgZXhpc3RzIGFuZFxyXG4gICAgICAgICAgICBsZXNzVGhhbihhcnJbcmlnaHRJZHhdLCBsZWZ0KSAgLy8gcmlnaHQgY2hpbGQgaXMgbGVzcyB0aGFuIGxlZnQtY2hpbGRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY2FuZGlkYXRlKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGVzc1RoYW4ocm9vdCwgYXJyW2NhbmRpZGF0ZV0pKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQWxnby5zd2FwKGFyciwgaSwgY2FuZGlkYXRlKTtcclxuICAgICAgICBpID0gY2FuZGlkYXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBidWJibGVVcDxUPihhcnI6IFRbXSwgc3RhcnQ6IG51bWJlciwgbGVzc1RoYW46IChhOiBULCBiOiBUKSA9PiBib29sZWFuKSB7XHJcblxyXG4gICAgLy8gTyhsb2dsb2cgbikgY29tcGFyaXNvbnMgdG8gbG9vayBmb3IgbnVtYmVyIG9mIGFuY2VzdG9ycyB0byBiZSBzd2FwcGVkXHJcbiAgICAvLyAuLi4gbm90IHRoYXQgaXQncyBhbiBvcHRpbWl6YXRpb24gb3IgYW55dGhpbmcsIGl0J3MganVzdCBhIGNvcHktcGFzdGVcclxuICAgIC8vIGZyb20gbXkgaG9tZXdvcmsgYmFjayBpbiBzY2hvb2xcclxuICAgIGNvbnN0IG51bUFuY2VzdG9yc1RvQmVTd2FwcGVkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdGFydCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoaWdoID0gKE1hdGgubG9nKHN0YXJ0ICsgMSkgLyBNYXRoLmxvZygyKSk7XHJcbiAgICAgICAgbGV0IGN1ciA9IHN0YXJ0O1xyXG4gICAgICAgIGxldCBsb3cgPSAwO1xyXG4gICAgICAgIGxldCBwaXZvdDogbnVtYmVyO1xyXG5cclxuICAgICAgICAvLyBiaW5hcnkgc2VhcmNoIG9uIGEgYnJhbmNoIG9mIGhlYXAgLS0gTyhsZ2xnIG4pIGNvbXBhcmlzaW9uc1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIHBpdm90ID0gTWF0aC5mbG9vcigoaGlnaCArIGxvdykgLyAyKTtcclxuICAgICAgICAgICAgaWYgKGhpZ2ggPCBsb3cpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1ciA9IGFuY2VzdG9yKHN0YXJ0LCBwaXZvdCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobGVzc1RoYW4oYXJyW3N0YXJ0XSwgYXJyW2N1cl0pKSB7XHJcbiAgICAgICAgICAgICAgICBsb3cgPSBwaXZvdCArIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVzc1RoYW4oYXJyW2N1cl0sIGFycltzdGFydF0pKSB7XHJcbiAgICAgICAgICAgICAgICBoaWdoID0gcGl2b3QgLSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHBpdm90ICsgYm91bmRhcnkgY2FzZSBhZGp1c3RtZW50XHJcbiAgICAgICAgaWYgKGxlc3NUaGFuKGFycltzdGFydF0sIGFycltwYXJlbnQoY3VyKV0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwaXZvdCArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwaXZvdDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbnVtID0gbnVtQW5jZXN0b3JzVG9CZVN3YXBwZWQoKTtcclxuICAgIGxldCBpdCA9IHN0YXJ0O1xyXG4gICAgbGV0IHBhcjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcbiAgICAgICAgcGFyID0gcGFyZW50KGl0KTtcclxuICAgICAgICBBbGdvLnN3YXAoYXJyLCBpdCwgcGFyKTtcclxuICAgICAgICBpdCA9IHBhcjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWxnb3JpdGhtL21pbmhlYXAudHMiLCIvLyBJQU5BTSAoSSBhbSBub3QgYSBtYXRoZW1hdGljaWFuKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1YW50aWxlKGRhdGE6IG51bWJlcltdIHwgRmxvYXQzMkFycmF5LCBwYXJ0czogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjb3B5ID0gZGF0YS5zbGljZSgpLnNvcnQoKTtcclxuICAgIGNvbnN0IHBlcmNlbnRpbGUgPSBjb3B5Lmxlbmd0aCAvIHBhcnRzO1xyXG5cclxuICAgIHJldHVybiBuZXcgQXJyYXk8bnVtYmVyPihwYXJ0cylcclxuICAgICAgICAuZmlsbCgwKVxyXG4gICAgICAgIC5tYXAoKF8sIGkpID0+IGNvcHlbTWF0aC5mbG9vcihpICogcGVyY2VudGlsZSldKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1bSguLi5hcmdzOiBudW1iZXJbXSkge1xyXG4gICAgcmV0dXJuIGFyZ3NcclxuICAgICAgICAuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNOYU4odmFsKSlcclxuICAgICAgICAucmVkdWNlKChwcmV2OiBudW1iZXIsIGN1cjogbnVtYmVyKSA9PiBwcmV2ICsgY3VyLCAwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGF2ZXJhZ2UoLi4uYXJnczogbnVtYmVyW10pIHtcclxuICAgIHJldHVybiBhcmdzLmxlbmd0aCA9PT0gMCA/IE5hTiA6IHN1bSguLi5hcmdzKSAvIGFyZ3MubGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXF1YWwyRChbYXgsIGF5XTogW251bWJlciwgbnVtYmVyXSwgW2J4LCBieV06IFtudW1iZXIsIG51bWJlcl0pIHtcclxuICAgIHJldHVybiBheCA9PT0gYnggJiYgYXkgPT09IGJ5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZTJEKFtheCwgYXldOiBbbnVtYmVyLCBudW1iZXJdLCBbYngsIGJ5XTogW251bWJlciwgbnVtYmVyXSkge1xyXG4gICAgaWYgKGF4IDwgYngpIHsgcmV0dXJuIC0xOyB9XHJcbiAgICBpZiAoYXggPiBieCkgeyByZXR1cm4gMTsgfVxyXG4gICAgcmV0dXJuIGF5IC0gYnk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDJEKFtheCwgYXldOiBbbnVtYmVyLCBudW1iZXJdLCBbYngsIGJ5XTogW251bWJlciwgbnVtYmVyXSk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgcmV0dXJuIFtheCAtIGJ4LCBheSAtIGJ5XTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1bTJEKFtheCwgYXldOiBbbnVtYmVyLCBudW1iZXJdLCBbYngsIGJ5XTogW251bWJlciwgbnVtYmVyXSk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgcmV0dXJuIFtheCArIGJ4LCBheSArIGJ5XTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm0yRChbYXgsIGF5XTogW251bWJlciwgbnVtYmVyXSkge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChheCAqIGF4ICsgYXkgKiBheSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZTJEKGE6IFtudW1iZXIsIG51bWJlcl0sIGI6IFtudW1iZXIsIG51bWJlcl0pIHtcclxuICAgIHJldHVybiBub3JtMkQoc3VidHJhY3QyRChhLCBiKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsYXJNdWx0MkQoW2F4LCBheV06IFtudW1iZXIsIG51bWJlcl0sIHNjYWxhcjogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XHJcbiAgICByZXR1cm4gW3NjYWxhciAqIGF4LCBzY2FsYXIgKiBheV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0MkQoYTogW251bWJlciwgbnVtYmVyXSwgc2NhbGFyID0gMSk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgY29uc3Qgbm9ybSA9IG5vcm0yRChhKTtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KG5vcm0gIT09IDAsIFwiY2FsbGVyIG1ha2Ugc3VyZSB0aGUgZ2l2ZW4gdmVjdG9yIGlzIG5vdCB0aGUgb3JpZ2luXCIpO1xyXG4gICAgcmV0dXJuIHNjYWxhck11bHQyRChhLCBzY2FsYXIgLyBub3JtKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50MkQoW2F4LCBheV06IFtudW1iZXIsIG51bWJlcl0sIFtieCwgYnldOiBbbnVtYmVyLCBudW1iZXJdKSB7XHJcbiAgICByZXR1cm4gYXggKiBieSAtIGJ4ICogYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BvaW50SW5SZWN0KFtweCwgcHldOiBbbnVtYmVyLCBudW1iZXJdLCBbYXgsIGF5XTogW251bWJlciwgbnVtYmVyXSwgW2J4LCBieV06IFtudW1iZXIsIG51bWJlcl0pIHtcclxuICAgIGNvbnN0IG1heFggPSBNYXRoLm1heChheCwgYngpO1xyXG4gICAgY29uc3QgbWluWCA9IE1hdGgubWluKGF4LCBieCk7XHJcbiAgICBjb25zdCBtYXhZID0gTWF0aC5tYXgoYXksIGJ5KTtcclxuICAgIGNvbnN0IG1pblkgPSBNYXRoLm1pbihheSwgYnkpO1xyXG4gICAgcmV0dXJuIHB4IDw9IG1heFggJiYgcHggPj0gbWluWCAmJiBweSA8PSBtYXhZICYmIHB5ID49IG1pblk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEludGVyc2VjdGlvbjJEIHtcclxuICAgIE5vbmUsXHJcbiAgICBUYW5nZW50LFxyXG4gICAgSW50ZXJzZWN0aW9uLFxyXG59XHJcblxyXG4vKipcclxuICogVGVzdCB3aGV0aGVyIGEgZ2l2ZW4gaW5maW5pdGUgbGluZSwgZGVmaW5lZCBieSBhICYgYiwgaW50ZXJzZWN0cyBhIGNpcmNsZS5cclxuICogQHBhcmFtIGEgYSBwb2ludCBpbiB0aGUgbGluZSBzZWdtZW50XHJcbiAqIEBwYXJhbSBiIGFub3RoZXIgcG9pbnQgaW4gdGhlIGxpbmUgc2VnbWVudFxyXG4gKiBAcGFyYW0gYyB0aGUgY2VudGVyIG9mIHRoZSB0YXJnZXQgY2lyY2xlXHJcbiAqIEBwYXJhbSByIHRoZSB0YXJnZXQgY2lyY2xlJ3MgcmFkaXVzXHJcbiAqIEBzZWUgaHR0cHM6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL2EvMjAzNTQ2NlxyXG4gKiBAc2VlIGh0dHA6Ly9tYXRod29ybGQud29sZnJhbS5jb20vQ2lyY2xlLUxpbmVJbnRlcnNlY3Rpb24uaHRtbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RMaW5lQ2lyY2xlSW50ZXJzZWN0KGE6IFtudW1iZXIsIG51bWJlcl0sIGI6IFtudW1iZXIsIG51bWJlcl0sIGM6IFtudW1iZXIsIG51bWJlcl0sIHI6IG51bWJlcikge1xyXG5cclxuICAgIC8vIHRyYW5zbGF0ZSBhIGFuZCBiIGJ5IGMsIHRvIHNpbXBsaWZ5IHRoZSBwcm9ibGVtIHRvIHRlc3RpbmcgYSBsaW5lIHRvIGEgY2lyY2xlIGNlbnRlcmVkIGFyb3VuZCB0aGUgb3JpZ2luXHJcbiAgICBjb25zdCB0YSA9IHN1YnRyYWN0MkQoYSwgYyk7XHJcbiAgICBjb25zdCB0YiA9IHN1YnRyYWN0MkQoYiwgYyk7XHJcbiAgICBjb25zdCBkciA9IGRpc3RhbmNlMkQoYSwgYik7XHJcbiAgICBjb25zdCBkcjIgPSBkciAqIGRyO1xyXG4gICAgY29uc3QgcjIgPSByICogcjtcclxuICAgIGNvbnN0IGRldCA9IGRldGVybWluYW50MkQodGEsIHRiKTtcclxuICAgIGNvbnN0IGRldDIgPSBkZXQgKiBkZXQ7XHJcbiAgICBjb25zdCBkaXNjcmltaW5hbnQgPSByMiAqIGRyMiAtIGRldDI7XHJcblxyXG4gICAgaWYgKGRpc2NyaW1pbmFudCA8IDApIHtcclxuICAgICAgICByZXR1cm4gSW50ZXJzZWN0aW9uMkQuTm9uZTtcclxuICAgIH0gZWxzZSBpZiAoZGlzY3JpbWluYW50ID4gMCkge1xyXG4gICAgICAgIHJldHVybiBJbnRlcnNlY3Rpb24yRC5JbnRlcnNlY3Rpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBJbnRlcnNlY3Rpb24yRC5UYW5nZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGVzdExpbmVTZWdtZW50Q2lyY2xlSW50ZXJzZWN0KGE6IFtudW1iZXIsIG51bWJlcl0sIGI6IFtudW1iZXIsIG51bWJlcl0sIGM6IFtudW1iZXIsIG51bWJlcl0sIHI6IG51bWJlcikge1xyXG4gICAgLy8gZm9yIGZpbml0ZSBsaW5lIHNlZ21lbnRzLCB0ZXN0IHdoZXRoZXIgdGhlIGNlbnRlciBpcyB3aXRoaW4gdGhlIHJlY3RhbmdsZSBkZWZpbmVkIGJ5IGEsYlxyXG4gICAgaWYgKCFpc1BvaW50SW5SZWN0KGMsIGEsIGIpKSB7XHJcbiAgICAgICAgcmV0dXJuIEludGVyc2VjdGlvbjJELk5vbmU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVzdExpbmVDaXJjbGVJbnRlcnNlY3QoYSwgYiwgYywgcik7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FsZ29yaXRobS9teW1hdGgudHMiLCJpbXBvcnQgKiBhcyBBbGdvIGZyb20gXCIuL2FsZ29yaXRobVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9yZGVyTGlzdFNldDxUPiB7XHJcbiAgICBwcml2YXRlIG1hcCA9IG5ldyBPcmRlckxpc3RNYXA8VCwgYm9vbGVhbj4odGhpcy5jbXApO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgY21wPzogKGE6IFQsIGI6IFQpID0+IG51bWJlcixcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIGFkZCguLi5rZXk6IFRbXSkge1xyXG4gICAgICAgIHRoaXMubWFwLnNldCh0cnVlLCAuLi5rZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXMoLi4ua2V5OiBUW10pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KC4uLmtleSkgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKC4uLmtleTogVFtdKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmRlbGV0ZSguLi5rZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5zaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbHVlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAua2V5cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9yZGVyTGlzdE1hcDxULCBVPiB7XHJcbiAgICBwcml2YXRlIHRyaWUgPSBuZXcgVHJpZTxVPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgY21wPzogKGE6IFQsIGI6IFQpID0+IG51bWJlcixcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIHNldCh2YWw6IFUsIC4uLmtleTogVFtdKSB7XHJcbiAgICAgICAgdGhpcy50cmllLnNldCh0aGlzLnNvcnRLZXkoa2V5KSwgdmFsKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KC4uLmtleTogVFtdKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5nZXQodGhpcy5zb3J0S2V5KGtleSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXMoLi4ua2V5OiBUW10pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmllLmdldCh0aGlzLnNvcnRLZXkoa2V5KSkgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKC4uLmtleTogVFtdKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5kZWxldGUodGhpcy5zb3J0S2V5KGtleSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnRyaWUgPSBuZXcgVHJpZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuc2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYWJsZUl0ZXJhdG9yPFtUW10sIFVdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5lbnRyaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudHJpZXMoKTogSXRlcmFibGVJdGVyYXRvcjxbVFtdLCBVXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuZW50cmllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBrZXlzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUua2V5cygpIGFzIEl0ZXJhYmxlSXRlcmF0b3I8VFtdPjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUudmFsdWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE9yU2V0KGRlZmF1bHRWYWw6ICgpID0+IFUsIC4uLmtleTogVFtdKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5nZXRPclNldCh0aGlzLnNvcnRLZXkoa2V5KSwgZGVmYXVsdFZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzb3J0S2V5KGtleTogVFtdKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleS5zb3J0KHRoaXMuY21wKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFR1cGxlTWFwPEtleVQgZXh0ZW5kcyBhbnlbXSwgVmFsVD4ge1xyXG5cclxuICAgIHByaXZhdGUgdHJpZTogVHJpZTxWYWxUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAuLi5kYXRhOiBBcnJheTxbS2V5VCwgVmFsVF0+LFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50cmllID0gVHJpZS5tYWtlKC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnRyaWUgPSBuZXcgVHJpZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuc2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXMoa2V5OiBLZXlUKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5nZXQoa2V5KSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBLZXlUKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5nZXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogS2V5VCwgdmFsdWU6IFZhbFQpIHtcclxuICAgICAgICB0aGlzLnRyaWUuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoa2V5OiBLZXlUKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnRyaWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUuZW50cmllcygpIGFzIEl0ZXJhYmxlSXRlcmF0b3I8W0tleVQsIFZhbFRdPjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMga2V5cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmllLmtleXMoKSBhcyBJdGVyYWJsZUl0ZXJhdG9yPEtleVQ+O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS52YWx1ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3JTZXQoa2V5OiBLZXlULCBkZWZhdWx0VmFsOiAoKSA9PiBWYWxUKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5nZXRPclNldChrZXksIGRlZmF1bHRWYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyAqbmV4dE9yZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyaWUubmV4dE9yZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUdXBsZVNldDxLZXlUIGV4dGVuZHMgYW55W10+IHtcclxuXHJcbiAgICBwcml2YXRlIHRyaWU6IFRyaWU8Ym9vbGVhbj47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgLi4uZGF0YTogS2V5VFtdLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50cmllID0gVHJpZS5tYWtlKC4uLmRhdGEubWFwKCh4KSA9PiBbeCwgdHJ1ZV0gYXMgW0tleVQsIGJvb2xlYW5dKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMudHJpZSA9IG5ldyBUcmllKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5zaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhcyhrZXk6IEtleVQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmllLmdldChrZXkpICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChrZXk6IEtleVQpIHtcclxuICAgICAgICB0aGlzLnRyaWUuc2V0KGtleSwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShrZXk6IEtleVQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmllLmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudHJpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGtleXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5rZXlzKCkgYXMgSXRlcmFibGVJdGVyYXRvcjxLZXlUPjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3JBZGQoa2V5OiBLZXlUKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZS5nZXRPclNldChrZXksICgpID0+IHRydWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpZTxWYWxUPiB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtYWtlPFY+KC4uLmxpc3Q6IEFycmF5PFthbnlbXSwgVl0+KSB7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RcclxuICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBba2V5U3RyaW5nLCB2YWxdKSA9PiBhY2NcclxuICAgICAgICAgICAgICAgIC5zZXQoa2V5U3RyaW5nLCB2YWwpLFxyXG4gICAgICAgICAgICAgICAgbmV3IFRyaWU8Vj4oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBrZXlDaGFyMjogYW55O1xyXG4gICAgcHJpdmF0ZSBlbmQ/OiBWYWxUO1xyXG4gICAgcHJpdmF0ZSBuZXh0ID0gbmV3IE1hcDxhbnksIFRyaWU8VmFsVD4+KCk7XHJcbiAgICBwcml2YXRlIHNpemUyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgc2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplMjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogYW55W10pIHtcclxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy50cmF2ZXJzZShrZXkpO1xyXG4gICAgICAgIGlmIChub2RlKSB7IHJldHVybiBub2RlLmVuZDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBrZXlDaGFyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleUNoYXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShrZXk6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc3QgYW5jZXN0b3JzOiBBcnJheTxbYW55LCBUcmllPFZhbFQ+XT4gPSBbXTtcclxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy50cmF2ZXJzZShrZXksIChrYywgbikgPT4gYW5jZXN0b3JzLnB1c2goW2tjLCBuXSkpO1xyXG4gICAgICAgIGlmICghbm9kZSB8fCBub2RlLmVuZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLS10aGlzLnNpemUyO1xyXG5cclxuICAgICAgICAvLyBjbGVhbiB1cCB1bnVzZWQgc3RydWN0dXJlXHJcbiAgICAgICAgbGV0IGN1ciA9IG5vZGU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGFuY2VzdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cclxuICAgICAgICAgICAgLy8gY3VycmVudCBub2RlIGlzIHN0aWxsIGluIHVzZWQgYnkgb3RoZXIga2V5c1xyXG4gICAgICAgICAgICBpZiAoY3VyLm5leHQuc2l6ZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBkZWxldGUgdGhlIGN1cnJlbnQgKHVudXNlZCkgc3RydWN0dXJlXHJcbiAgICAgICAgICAgIGNvbnN0IFtrYywgcGFyZW50XSA9IGFuY2VzdG9yc1tpXTtcclxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQocGFyZW50Lm5leHQuc2l6ZSA+IDApO1xyXG4gICAgICAgICAgICBwYXJlbnQubmV4dC5kZWxldGUoa2MpO1xyXG4gICAgICAgICAgICBjdXIgPSBwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OiBhbnlbXSwgdmFsOiBWYWxUKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSB0aGlzIGFzIFRyaWU8VmFsVD47XHJcbiAgICAgICAga2V5LmZvckVhY2goKGtleUNoYXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChrZXlDaGFyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuZGVmaW5lZCBub3QgYWxsb3dlZCBhcyBwYXJ0IG9mIHRoZSBrZXlcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBuZXh0ID0gdGVtcC5uZXh0LmdldChrZXlDaGFyKTtcclxuICAgICAgICAgICAgaWYgKG5leHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbmV4dCA9IG5ldyBUcmllKCk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wLm5leHQuc2V0KGtleUNoYXIsIG5leHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5leHQua2V5Q2hhcjIgPSBrZXlDaGFyO1xyXG4gICAgICAgICAgICB0ZW1wID0gbmV4dDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0ZW1wLmVuZCA9IHZhbDtcclxuICAgICAgICArK3RoaXMuc2l6ZTI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE9yU2V0KGtleTogYW55W10sIGRlZmF1bFZhbDogKCkgPT4gVmFsVCkge1xyXG4gICAgICAgIGxldCB0ZW1wID0gdGhpcyBhcyBUcmllPFZhbFQ+O1xyXG4gICAgICAgIGtleS5mb3JFYWNoKChrZXlDaGFyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2V5Q2hhciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmRlZmluZWQgbm90IGFsbG93ZWQgYXMgcGFydCBvZiB0aGUga2V5XCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV4dCA9IHRlbXAubmV4dC5nZXQoa2V5Q2hhcik7XHJcbiAgICAgICAgICAgIGlmIChuZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG5leHQgPSBuZXcgVHJpZSgpO1xyXG4gICAgICAgICAgICAgICAgdGVtcC5uZXh0LnNldChrZXlDaGFyLCBuZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXh0LmtleUNoYXIyID0ga2V5Q2hhcjtcclxuICAgICAgICAgICAgdGVtcCA9IG5leHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRlbXAuZW5kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGVtcC5lbmQgPSBkZWZhdWxWYWwoKTtcclxuICAgICAgICAgICAgKyt0aGlzLnNpemUyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcC5lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3IgZGVidWdnaW5nIGFuZCB1bml0LXRlc3Rpbmcgb25seS5cclxuICAgICAqIEBwYXJhbSBrZXkgdGhlIGtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RmFub3V0KGtleTogYW55W10pIHtcclxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy50cmF2ZXJzZShrZXkpO1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLm5leHQuc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgKmVudHJpZXMoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsTm9kZXMgPSBBbGdvLmRlcHRoRmlyc3RUcmF2ZXJzYWwoXHJcbiAgICAgICAgICAgIHRoaXMgYXMgVHJpZTxWYWxUPixcclxuICAgICAgICAgICAgKG1lKSA9PiBtZS5uZXh0LnZhbHVlcygpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qga2V5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjdXJEZXB0aCA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCBbbm9kZSwgZGVwdGhdIG9mIGFsbE5vZGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlcHRoRGlmZiA9IGN1ckRlcHRoIC0gZGVwdGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVwdGhEaWZmOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGtleS5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGN1ckRlcHRoLS07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChub2RlLmtleUNoYXIyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGtleS5wdXNoKG5vZGUua2V5Q2hhcjIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoZGVwdGggPT09IDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICsrY3VyRGVwdGg7XHJcblxyXG4gICAgICAgICAgICBpZiAobm9kZS5lbmQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgeWllbGQgW2tleS5zbGljZSgpLCBub2RlLmVuZF0gYXMgW2FueVtdLCBWYWxUXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgKmtleXMoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5XSBvZiB0aGlzLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICB5aWVsZCBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyAqdmFsdWVzKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgWywgdmFsXSBvZiB0aGlzLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICB5aWVsZCB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyAqbmV4dE9yZGVyKCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3ViVHJpZSBvZiB0aGlzLm5leHQudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgeWllbGQgW3N1YlRyaWUua2V5Q2hhcigpLCBzdWJUcmllXSBhcyBbYW55LCBUcmllPFZhbFQ+XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYXZlcnNlKGtleTogYW55W10sIHZpc2l0OiAoa2V5Q2hhcjogYW55LCBub2RlOiBUcmllPFZhbFQ+KSA9PiB2b2lkID0gKCkgPT4geyAvKiBlbXB0eSAqLyB9KSB7XHJcbiAgICAgICAgbGV0IGN1cjogVHJpZTxWYWxUPiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzRm91bmQgPSBrZXkuZXZlcnkoKGtleUNoYXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IGN1ci5uZXh0LmdldChrZXlDaGFyKTtcclxuICAgICAgICAgICAgaWYgKHRlbXAgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZpc2l0KGtleUNoYXIsIGN1cik7XHJcbiAgICAgICAgICAgIGN1ciA9IHRlbXA7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc0ZvdW5kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbGdvcml0aG0vdHJpZS50cyIsIlxyXG4vKipcclxuICogQmktZGlyZWN0aW9uIG1hcCwgYmFzZWQgb24gdHdvIE1hcCBvYmplY3RzLiBVc2UgdGhpcyBjbGFzcyBmb3IgZGF0YSB0aGF0IGhhcyBhIGJpamVjdGl2ZSByZWxhdGlvbnNoaXAuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmlNYXA8VCwgVT4ge1xyXG5cclxuICAgIHByaXZhdGUgbGVmdE1hcDogTWFwPFQsIFU+O1xyXG4gICAgcHJpdmF0ZSByaWdodE1hcDogTWFwPFUsIFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKC4uLmRhdGE6IEFycmF5PFtULCBVXT4pIHtcclxuICAgICAgICB0aGlzLmxlZnRNYXAgPSBuZXcgTWFwKGRhdGEpO1xyXG4gICAgICAgIHRoaXMucmlnaHRNYXAgPSBuZXcgTWFwKGRhdGEubWFwKChbdCwgdV0pID0+IFt1LCB0XSBhcyBbVSwgVF0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2l6ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0aGlzLmxlZnRNYXAuc2l6ZSA9PT0gdGhpcy5yaWdodE1hcC5zaXplKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0TWFwLnNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldChsZWZ0OiBULCByaWdodDogVSkge1xyXG4gICAgICAgIHRoaXMubGVmdE1hcC5zZXQobGVmdCwgcmlnaHQpO1xyXG4gICAgICAgIHRoaXMucmlnaHRNYXAuc2V0KHJpZ2h0LCBsZWZ0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlTGVmdChsZWZ0OiBUKSB7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmxlZnRNYXAuZ2V0KGxlZnQpO1xyXG4gICAgICAgIHJldHVybiByaWdodCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZGVsZXRlKGxlZnQsIHJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlUmlnaHQocmlnaHQ6IFUpIHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5yaWdodE1hcC5nZXQocmlnaHQpO1xyXG4gICAgICAgIHJldHVybiBsZWZ0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5kZWxldGUobGVmdCwgcmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSaWdodChsZWZ0OiBUKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdE1hcC5nZXQobGVmdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExlZnQocmlnaHQ6IFUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yaWdodE1hcC5nZXQocmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNMZWZ0KGxlZnQ6IFQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0TWFwLmhhcyhsZWZ0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzUmlnaHQocmlnaHQ6IFUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yaWdodE1hcC5oYXMocmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsZWZ0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0TWFwLmtleXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmlnaHRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJpZ2h0TWFwLmtleXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnRyaWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxlZnRNYXAuZW50cmllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsZXRlKGxlZnQ6IFQsIHJpZ2h0OiBVKSB7XHJcbiAgICAgICAgY29uc3QgcmV0MSA9IHRoaXMubGVmdE1hcC5kZWxldGUobGVmdCk7XHJcbiAgICAgICAgY29uc3QgcmV0MiA9IHRoaXMucmlnaHRNYXAuZGVsZXRlKHJpZ2h0KTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChyZXQxKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChyZXQyKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWxnb3JpdGhtL2JpbWFwLnRzIiwiaW1wb3J0ICogYXMgQWxnbyBmcm9tIFwiLi9hbGdvcml0aG1cIjtcclxuaW1wb3J0IHsgVW5pb25GaW5kIH0gZnJvbSBcIi4vdW5pb25maW5kXCI7XHJcblxyXG5leHBvcnQgdHlwZSBHcmFwaDxUPiA9IE1hcDxULCBUW10+OyAvLyBhZGphY2VuY3kgbGlzdFxyXG5cclxuLyoqXHJcbiAqIEJyZWFkdGggRmlyc3QgVHJhdmVyc2FsXHJcbiAqIEBwYXJhbSByb290IHRoZSByb290IG5vZGVcclxuICogQHBhcmFtIG5laWdoYm91cnMgYSBmdW5jdGlvbiB0aGF0IHJldHVybiBlZGdlcyBvZiBhIG5vZGVcclxuICogQHBhcmFtIGtleSB0dXJucyBhIG5vZGUgaW50byBhIHVuaXF1ZSB2YWx1ZSwgbmVlZGVkIGlmIHRoZSBuZWlnaGJvdXJzXHJcbiAqICBhcmUgZGVyaXZlZCB2YWx1ZXMgaW5zdGVhZCBvZiBwb2ludGluZyB0byB0aGUgYWN0dWFsIG5vZGVzIGluIHRoZSBncmFwaCwgdGhlbiBhIGtleSBmdW5jdGlvbiBtdXN0IGJlIHByb3ZpZGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uKiBicmVhZHRoRmlyc3RUcmF2ZXJzYWw8VCwgVT4oXHJcbiAgICByb290OiBULFxyXG4gICAgbmVpZ2hib3VyczogKHZlcnRleDogVCkgPT4gSXRlcmFibGVJdGVyYXRvcjxUPixcclxuICAgIGtleT86ICh2ZXJ0ZXg6IFQpID0+IFUsXHJcbik6IEl0ZXJhYmxlSXRlcmF0b3I8W1QsIG51bWJlcl0+IHtcclxuXHJcbiAgICBjb25zdCB3b3JrTGlzdDogQXJyYXk8W1QsIG51bWJlcl0+ID0gW1tyb290LCAwXV07XHJcbiAgICBjb25zdCB2aXNpdGVkID0gbmV3IFNldDxUIHwgVT4oKTtcclxuICAgIGNvbnN0IGtleWl0ID0ga2V5ID8ga2V5IDogKG1lOiBUKSA9PiBtZTtcclxuXHJcbiAgICB3aGlsZSAod29ya0xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IFtjdXIsIGRlcHRoXSA9IHdvcmtMaXN0LnNoaWZ0KCkhO1xyXG4gICAgICAgIHlpZWxkIFtjdXIsIGRlcHRoXTtcclxuICAgICAgICB2aXNpdGVkLmFkZChrZXlpdChjdXIpKTtcclxuICAgICAgICBjb25zdCBkZXB0aDEgPSBkZXB0aCArIDE7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgbmVpIG9mIG5laWdoYm91cnMoY3VyKSkge1xyXG4gICAgICAgICAgICB2aXNpdGVkLmFkZChrZXlpdChuZWkpKTtcclxuICAgICAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhrZXlpdChuZWkpKSkge1xyXG4gICAgICAgICAgICAgICAgd29ya0xpc3QucHVzaChbbmVpLCBkZXB0aDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlcHRoIEZpcnN0IFRyYXZlcnNhbFxyXG4gKiBAcGFyYW0gcm9vdCB0aGUgcm9vdCBub2RlXHJcbiAqIEBwYXJhbSBuZWlnaGJvdXJzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm4gZWRnZXMgb2YgYSBub2RlXHJcbiAqIEBwYXJhbSBpc1Zpc2l0ZWQgYSBmdW5jdGlvbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIGEgbm9kZSBpcyB2aXNpdGVkOyBvcHRpb25hbCBpZiB0aGUgZ3JhcGggaXMgYSB0cmVlXHJcbiAqIEBwYXJhbSBtYXJrVmlzaXRlZCBhIGZ1bmN0aW9uIHRoYXQgbWFya3MgYSBub2RlIGFzIHZpc2l0ZWQ7IG9wdGlvbmFsIGlmIHRoZSBncmFwaCBpcyBhIHRyZWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiogZGVwdGhGaXJzdFRyYXZlcnNhbDxULCBVPihcclxuICAgIHJvb3Q6IFQsXHJcbiAgICBuZWlnaGJvdXJzOiAodmVydGV4OiBUKSA9PiBJdGVyYWJsZUl0ZXJhdG9yPFQ+LFxyXG4pOiBJdGVyYWJsZUl0ZXJhdG9yPFtULCBudW1iZXJdPiB7XHJcblxyXG4gICAgY29uc3Qgd29ya0xpc3Q6IEFycmF5PFtULCBudW1iZXJdPiA9IFtbcm9vdCwgMF1dO1xyXG4gICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQ8VCB8IFU+KCk7XHJcblxyXG4gICAgd2hpbGUgKHdvcmtMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBbY3VyLCBkZXB0aF0gPSB3b3JrTGlzdC5wb3AoKSE7XHJcbiAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhjdXIpKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIFtjdXIsIGRlcHRoXTtcclxuICAgICAgICAgICAgdmlzaXRlZC5hZGQoY3VyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlcHRoMSA9IGRlcHRoICsgMTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBuZWkgb2YgbmVpZ2hib3VycyhjdXIpKSB7XHJcbiAgICAgICAgICAgICAgICB3b3JrTGlzdC5wdXNoKFtuZWksIGRlcHRoMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWluaW11bSBzcGFubmluZyB0cmVlLCBLcnVza2FsJ3MgYWxnb3JpdGhtXHJcbiAqIEBwYXJhbSB2ZXJ0aWNlcyB2ZXJ0aWNlc1xyXG4gKiBAcGFyYW0gbmVpZ2hib3VycyBuZWlnaGJvdXJzIHRoYXQgZm9ybXMgYW4gZWRnZSB3aXRoIGEgZ2l2ZW4gdmVydGV4XHJcbiAqIEBwYXJhbSB3ZWlnaHQgdGhlIHdlaWdodCBvZiBlYWNoIGVkZ2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBrcnVza2FsTVNUPFQ+KFxyXG4gICAgdmVydGljZXM6IFNldDxUPixcclxuICAgIG5laWdoYm91cnM6ICh2ZXJ0ZXg6IFQpID0+IEl0ZXJhYmxlSXRlcmF0b3I8VD4sXHJcbiAgICB3ZWlnaHQ6ICh1OiBULCB2OiBUKSA9PiBudW1iZXIsXHJcbik6IEdyYXBoPFQ+IHtcclxuICAgIC8qXHJcbiAgICBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LcnVza2FsJTI3c19hbGdvcml0aG1cclxuICAgIEtSVVNLQUwoRyk6XHJcbiAgICAxIEEgPSDiiIVcclxuICAgIDIgZm9yZWFjaCB2IOKIiCBHLlY6XHJcbiAgICAzICAgIE1BS0UtU0VUKHYpXHJcbiAgICA0IGZvcmVhY2ggKHUsIHYpIGluIEcuRSBvcmRlcmVkIGJ5IHdlaWdodCh1LCB2KSwgaW5jcmVhc2luZzpcclxuICAgIDUgICAgaWYgRklORC1TRVQodSkg4omgIEZJTkQtU0VUKHYpOlxyXG4gICAgNiAgICAgICBBID0gQSDiiKogeyh1LCB2KX1cclxuICAgIDcgICAgICAgVU5JT04odSwgdilcclxuICAgIDggcmV0dXJuIEFcclxuICAgICovXHJcblxyXG4gICAgY29uc3Qgc2V0cyA9IG5ldyBVbmlvbkZpbmQodmVydGljZXMpO1xyXG4gICAgY29uc3QgZWRnZXMgPSBBcnJheVxyXG5cclxuICAgICAgICAvLyBnZXQgYWxsIGVkZ2VzXHJcbiAgICAgICAgLmZyb20odmVydGljZXMpXHJcbiAgICAgICAgLnJlZHVjZSgoYWNjLCB1KSA9PiB7XHJcbiAgICAgICAgICAgIGFjYy5wdXNoKC4uLkFycmF5XHJcbiAgICAgICAgICAgICAgICAuZnJvbShuZWlnaGJvdXJzKHUpKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgodikgPT4gW3UsIHZdIGFzIFtULCBUXSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIG5ldyBBcnJheTxbVCwgVF0+KCkpXHJcblxyXG4gICAgICAgIC8vIHNvcnQgYnkgYXNjZW5kaW5nIG9yZGVyXHJcbiAgICAgICAgLnNvcnQoKFt1MSwgdjFdLCBbdTIsIHYyXSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2VpZ2h0KHUxLCB2MSkgLSB3ZWlnaHQodTIsIHYyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZWRnZXMucmVkdWNlKChhY2MsIFt1LCB2XSkgPT4ge1xyXG4gICAgICAgIGlmICghc2V0cy5pc1NhbWVTZXQodSwgdikpIHtcclxuICAgICAgICAgICAgQWxnby5nZXRPclNldChhY2MsIHUsICgpID0+IFtdKS5wdXNoKHYpO1xyXG4gICAgICAgICAgICBBbGdvLmdldE9yU2V0KGFjYywgdiwgKCkgPT4gW10pLnB1c2godSk7XHJcbiAgICAgICAgICAgIHNldHMudW5pb24odSwgdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBuZXcgTWFwPFQsIFRbXT4oKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGwtcGFpciBzaG9ydGVzdCBwYWlycywgRmxveWQtV2Fyc2hhbGwgYWxnb3JpdGhtXHJcbiAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmxveWQlRTIlODAlOTNXYXJzaGFsbF9hbGdvcml0aG1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG95ZFdhcnNoYWxsPFQ+IHtcclxuXHJcbiAgICBwcml2YXRlIG5leHRNYXA6IG51bWJlcltdW107XHJcbiAgICBwcml2YXRlIHZlcnRpY2VzSWR4OiBNYXA8VCwgbnVtYmVyPjtcclxuICAgIHByaXZhdGUgdmVydGljZXM6IFRbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBncmFwaDogTWFwPFQsIFRbXT4sXHJcbiAgICAgICAgd2VpZ2h0OiAodTogVCwgdjogVCkgPT4gbnVtYmVyLFxyXG4gICAgKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBsZXQgZGlzdCBiZSBhIHxWfCAqIHxWfCBhcnJheSBvZiBtaW5pbXVtIGRpc3RhbmNlcyBpbml0aWFsaXplZCB0byBJbmZpbml0eVxyXG4gICAgICAgIGxldCBuZXh0IGJlIGEgfFZ8ICogfFZ8IGFycmF5IG9mIHZlcnRleCBpbmRpY2VzIGluaXRpYWxpemVkIHRvIG51bGxcclxuXHJcbiAgICAgICAgcHJvY2VkdXJlIEZsb3lkV2Fyc2hhbGxXaXRoUGF0aFJlY29uc3RydWN0aW9uICgpXHJcbiAgICAgICAgZm9yIGVhY2ggZWRnZSAodSx2KVxyXG4gICAgICAgICAgICBkaXN0W3VdW3ZdIOKGkCB3KHUsdikgIC8vIHRoZSB3ZWlnaHQgb2YgdGhlIGVkZ2UgKHUsdilcclxuICAgICAgICAgICAgbmV4dFt1XVt2XSDihpAgdlxyXG4gICAgICAgIGZvciBrIGZyb20gMSB0byB8VnwgLy8gc3RhbmRhcmQgRmxveWQtV2Fyc2hhbGwgaW1wbGVtZW50YXRpb25cclxuICAgICAgICAgICAgZm9yIGkgZnJvbSAxIHRvIHxWfFxyXG4gICAgICAgICAgICAgICAgZm9yIGogZnJvbSAxIHRvIHxWfFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIGRpc3RbaV1bal0gPiBkaXN0W2ldW2tdICsgZGlzdFtrXVtqXSB0aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdFtpXVtqXSDihpAgZGlzdFtpXVtrXSArIGRpc3Rba11bal1cclxuICAgICAgICAgICAgICAgICAgICBuZXh0W2ldW2pdIOKGkCBuZXh0W2ldW2tdXHJcbiAgICAgICAgKi9cclxuICAgICAgICBjb25zb2xlLmFzc2VydChncmFwaCAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gWy4uLmdyYXBoLmtleXMoKV07XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNlc0lkeCA9IG5ldyBNYXAoQXJyYXlcclxuICAgICAgICAgICAgLmZyb20odGhpcy52ZXJ0aWNlcylcclxuICAgICAgICAgICAgLm1hcCgodiwgaSkgPT4gW3YsIGldIGFzIFtULCBudW1iZXJdKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZTaXplID0gZ3JhcGguc2l6ZTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdCA9IG5ldyBBcnJheTxudW1iZXJbXT4odlNpemUpO1xyXG4gICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLm5leHRNYXAgPSBuZXcgQXJyYXk8bnVtYmVyW10+KHZTaXplKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2U2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpc3RbaV0gPSBuZXcgQXJyYXkodlNpemUpLmZpbGwoSW5maW5pdHkpO1xyXG4gICAgICAgICAgICBuZXh0W2ldID0gbmV3IEFycmF5KHZTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCB2IG9mIHRoaXMudmVydGljZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdklkeCA9IHRoaXMudmVydGljZXNJZHguZ2V0KHYpITtcclxuICAgICAgICAgICAgZGlzdFt2SWR4XVt2SWR4XSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IFt1LCB2c10gb2YgZ3JhcGgpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB2IG9mIHZzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1SWR4ID0gdGhpcy52ZXJ0aWNlc0lkeC5nZXQodSkhO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdklkeCA9IHRoaXMudmVydGljZXNJZHguZ2V0KHYpITtcclxuICAgICAgICAgICAgICAgIGRpc3RbdUlkeF1bdklkeF0gPSB3ZWlnaHQodSwgdik7XHJcbiAgICAgICAgICAgICAgICBuZXh0W3VJZHhdW3ZJZHhdID0gdklkeDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB2U2l6ZTsgaysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdlNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2U2l6ZTsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RJbmNsdWRlSyA9IGRpc3RbaV1ba10gKyBkaXN0W2tdW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0W2ldW2pdID4gZGlzdEluY2x1ZGVLKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RbaV1bal0gPSBkaXN0SW5jbHVkZUs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRbaV1bal0gPSBuZXh0W2ldW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgKnBhdGgodTogVCwgdjogVCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIHByb2NlZHVyZSBQYXRoKHUsIHYpXHJcbiAgICAgICAgICAgIGlmIG5leHRbdV1bdl0gPSBudWxsIHRoZW5cclxuICAgICAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgICAgICBwYXRoID0gW3VdXHJcbiAgICAgICAgICAgIHdoaWxlIHUg4omgIHZcclxuICAgICAgICAgICAgICAgIHUg4oaQIG5leHRbdV1bdl1cclxuICAgICAgICAgICAgICAgIHBhdGguYXBwZW5kKHUpXHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoXHJcbiAgICAgICAgKi9cclxuICAgICAgICBsZXQgdUlkeCA9IHRoaXMudmVydGljZXNJZHguZ2V0KHUpITtcclxuICAgICAgICBjb25zdCB2SWR4ID0gdGhpcy52ZXJ0aWNlc0lkeC5nZXQodikhO1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0TWFwID0gdGhpcy5uZXh0TWFwO1xyXG4gICAgICAgIGlmIChuZXh0TWFwW3VJZHhdW3ZJZHhdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgeWllbGQgdTtcclxuICAgICAgICAgICAgd2hpbGUgKHVJZHggIT09IHZJZHgpIHtcclxuICAgICAgICAgICAgICAgIHVJZHggPSBuZXh0TWFwW3VJZHhdW3ZJZHhdO1xyXG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy52ZXJ0aWNlc1t1SWR4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV4dCh1OiBULCB2OiBUKSB7XHJcbiAgICAgICAgY29uc3QgdklkeCA9IHRoaXMudmVydGljZXNJZHguZ2V0KHYpITtcclxuICAgICAgICBjb25zdCB1SWR4ID0gdGhpcy52ZXJ0aWNlc0lkeC5nZXQodSkhO1xyXG4gICAgICAgIGNvbnN0IG5leHRJZHggPSB0aGlzLm5leHRNYXBbdUlkeF1bdklkeF07XHJcbiAgICAgICAgaWYgKG5leHRJZHggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1tuZXh0SWR4XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FsZ29yaXRobS9ncmFwaC50cyIsImltcG9ydCAqIGFzIE1vZGVsIGZyb20gXCIuL21vZGVsXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcblxyXG5jb25zdCBCQVNFX1lJRUxEID0gMTA7XHJcbmNvbnN0IE1BWF9PUF9QUk9EVUNUUyA9IDEwO1xyXG5jb25zdCBNSU5fT1BfRUZGID0gMC4xO1xyXG5jb25zdCBSRU1BSU5fQ0hBTkdFX0VGRl9GQUNUT1IgPSAwLjg7IC8vIGkuZS4gMjAlIGVmZiBsb3NzIHdoZW4gdXBncmFkaW5nL2Rvd24tc2l6aW5nIGluZHVzdHJpYWwgY29tcGxleFxyXG5jb25zdCBCQVNFX0ZJWEVEX0NPU1QgPSAwLjM7XHJcbmNvbnN0IE1JTl9GSVhFRF9DT1NUID0gMC4wMztcclxuY29uc3QgRklYRURfQ09TVF9PRkZTRVQgPSBCQVNFX0ZJWEVEX0NPU1QgLSBNSU5fRklYRURfQ09TVDtcclxuY29uc29sZS5hc3NlcnQoRklYRURfQ09TVF9PRkZTRVQgPiAwKTtcclxuXHJcbmNvbnN0IEJBU0VfUE9XRVJfVVNBR0UgPSAxMDtcclxuXHJcbi8vIGJvbnVzIHByb2R1Y3Rpb24gbW9kaWZpZXJzXHJcbmNvbnN0IE9QX0ZBQ1RPUl9CT05VUyA9IDQ7XHJcbmNvbnN0IEVORVJHWV9CT05VUyA9IDQ7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5kdXN0cnkge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGVtYW5kUHJvZHVjdHMocHJvZHVjdFR5cGU6IFByb2R1Y3QpIHtcclxuICAgICAgICByZXR1cm4gTW9kZWwuREVNQU5EX1BST0RVQ1RTW3Byb2R1Y3RUeXBlXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEZsYXREZW1hbmRQcm9kdWN0cyhwcm9kdWN0VHlwZTogUHJvZHVjdCkge1xyXG4gICAgICAgIHJldHVybiBNb2RlbC5GTEFUX0RFTUFORF9QUk9EVUNUU1twcm9kdWN0VHlwZV07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHByb2R1Y3RUeXBlOiBQcm9kdWN0LFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBjb2xvbnk6IE1vZGVsLkNvbG9ueSxcclxuICAgICAgICBwcml2YXRlIHNjYWxlID0gMSxcclxuICAgICAgICBwcml2YXRlIG9wZXJhdGlvbmFsRWZmID0gTUlOX09QX0VGRiwgLy8gMC4xIHRvIDFcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBNb2RlbC5JSW5kdXN0cnkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBwcm9kdWN0VHlwZTogdGhpcy5wcm9kdWN0VHlwZSxcclxuICAgICAgICAgICAgY29sb255SWQ6IHRoaXMuY29sb255LmlkLFxyXG4gICAgICAgICAgICBzY2FsZTogdGhpcy5zY2FsZSxcclxuICAgICAgICAgICAgb3BlcmF0aW9uYWxFZmY6IHRoaXMub3BlcmF0aW9uYWxFZmYsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBncmFkZSgpIHtcclxuICAgICAgICArK3RoaXMuc2NhbGU7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb25hbEVmZiA9IE1hdGgubWF4KE1JTl9PUF9FRkYsIFJFTUFJTl9DSEFOR0VfRUZGX0ZBQ1RPUiAqIHRoaXMub3BlcmF0aW9uYWxFZmYpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkb3duU2l6ZSgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlID0gTWF0aC5tYXgoMSwgdGhpcy5zY2FsZSAtIDEpO1xyXG4gICAgICAgIHRoaXMub3BlcmF0aW9uYWxFZmYgPSBNYXRoLm1heChNSU5fT1BfRUZGLCBSRU1BSU5fQ0hBTkdFX0VGRl9GQUNUT1IgKiB0aGlzLm9wZXJhdGlvbmFsRWZmKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NhbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZXJhdGUoZ2FsYXh5OiBNb2RlbC5HYWxheHkpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaXNSdW5Qcm9kID0gdGhpcy5pc1J1blByb2QoZ2FsYXh5KTtcclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVySW52ZW50b3J5ID0gdGhpcy5jb2xvbnkuZ2V0UGxheWVySW52ZW50b3J5KCk7XHJcblxyXG4gICAgICAgIGxldCBudW1Qcm9kdWNlZCA9IDA7XHJcbiAgICAgICAgaWYgKGlzUnVuUHJvZCkge1xyXG4gICAgICAgICAgICBudW1Qcm9kdWNlZCA9IHRoaXMucHJvZHVjZShnYWxheHksIHBsYXllckludmVudG9yeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBudW1Qcm9kdWNlZCA9IE1hdGgubWF4KDEsIG51bVByb2R1Y2VkKTtcclxuICAgICAgICBjb25zdCBjb3N0UGVyVW5pdCA9IHRoaXMuZ2V0Q29zdFBlclVuaXQoKTtcclxuICAgICAgICBjb25zdCBwcm9kQ29zdCA9IGNvc3RQZXJVbml0ICogbnVtUHJvZHVjZWQ7XHJcbiAgICAgICAgY29uc3QgZW5lcmd5Q29zdCA9IHRoaXMudXNlZEVuZXJneShnYWxheHkpICsgdGhpcy5jb2xvbnkuZ2V0RW5lcmd5UHJpY2UoZ2FsYXh5KTtcclxuXHJcbiAgICAgICAgZ2FsYXh5LndpdGhkcmF3KHByb2RDb3N0ICsgZW5lcmd5Q29zdCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlTW9kaWZlcnMoaXNSdW5Qcm9kLCBwbGF5ZXJJbnZlbnRvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb3N0UGVyVW5pdCgpIHtcclxuICAgICAgICBjb25zdCBjb3N0UmVkdWN0aW9uID0gMSAtIHRoaXMub3BlcmF0aW9uYWxFZmY7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoY29zdFJlZHVjdGlvbiA+PSAwICYmIGNvc3RSZWR1Y3Rpb24gPD0gMSk7XHJcbiAgICAgICAgcmV0dXJuIE1JTl9GSVhFRF9DT1NUICsgRklYRURfQ09TVF9PRkZTRVQgKiBjb3N0UmVkdWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1c2VkRW5lcmd5KGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG93ZXJVc2FnZSgpICogdGhpcy5jb2xvbnkuZ2V0UG93ZXJVc2FnZUVmZihnYWxheHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPcERlbWFuZCgpOiBNb2RlbC5JT3BEZW1hbmQge1xyXG4gICAgICAgIGNvbnN0IHF0eSA9IE1BWF9PUF9QUk9EVUNUUyAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb2R1Y3RUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUHJvZHVjdC5Dcm9wOlxyXG4gICAgICAgICAgICBjYXNlIFByb2R1Y3QuTWV0YWw6XHJcbiAgICAgICAgICAgIGNhc2UgUHJvZHVjdC5HZW06XHJcbiAgICAgICAgICAgIGNhc2UgUHJvZHVjdC5GdWVsOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWVkZWRLaW5kczogbmV3IFNldChbUHJvZHVjdC5Ub29sXSksXHJcbiAgICAgICAgICAgICAgICAgICAgcXR5LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGVmYXVsdDogLy8gcG9zdC1wcm9jZXNzaW5nIGluZHVzdHJpZXNcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVlZGVkS2luZHM6IG5ldyBTZXQoW1Byb2R1Y3QuTWFjaGluZV0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHF0eSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcm9kQ2FwKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uYWxGYWN0b3IgPSAxICsgdGhpcy5vcGVyYXRpb25hbEVmZiAqIE9QX0ZBQ1RPUl9CT05VUztcclxuICAgICAgICBjb25zdCBlbmVyZ3lCb251cyA9IDEgKyB0aGlzLmNvbG9ueS5nZXRQb3dlclVzYWdlRWZmKGdhbGF4eSkgKiBFTkVSR1lfQk9OVVM7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KDEsIE1hdGguY2VpbCh0aGlzLnNjYWxlICogQkFTRV9ZSUVMRCAqIG9wZXJhdGlvbmFsRmFjdG9yICogZW5lcmd5Qm9udXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3BlcmF0aW9uYWxFZmYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlcmF0aW9uYWxFZmY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBvd2VyVXNhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2NhbGUoKSAqIEJBU0VfUE9XRVJfVVNBR0U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1J1blByb2QoZ2FsYXh5OiBNb2RlbC5HYWxheHkpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0VHlwZSA9IHRoaXMucHJvZHVjdFR5cGU7XHJcbiAgICAgICAgY29uc3QgZGVtYW5kUXR5ID0gMTAgKiBnYWxheHkuZ2V0R2FsYWN0aWNEZW1hbmRzKHByb2R1Y3RUeXBlKTtcclxuICAgICAgICBjb25zdCBzdXBwbHlRdHkgPSB0aGlzLmNvbG9ueS5nZXRTdXBwbHkocHJvZHVjdFR5cGUpO1xyXG5cclxuICAgICAgICBjb25zdCBwbGF5ZXJJbnZlbnRvcnkgPSB0aGlzLmNvbG9ueS5nZXRQbGF5ZXJJbnZlbnRvcnkoKTtcclxuICAgICAgICBjb25zdCBpblN0b2NrID0gcGxheWVySW52ZW50b3J5LmdldFF0eSh0aGlzLnByb2R1Y3RUeXBlKTtcclxuXHJcbiAgICAgICAgLy8gcHJvZHVjZSB3aGVuIHRoZXJlJ3MgZXhjZXNzIGRlbWFuZFxyXG4gICAgICAgIHJldHVybiBkZW1hbmRRdHkgPiBpblN0b2NrICsgc3VwcGx5UXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlTW9kaWZlcnMoaXNSdW5Qcm9kOiBib29sZWFuLCBpbnZlbnRvcnk6IE1vZGVsLkludmVudG9yeSkge1xyXG5cclxuICAgICAgICBjb25zdCBvcERlbWFuZCA9IHRoaXMuZ2V0T3BEZW1hbmQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29uc3VtZWQgPSBpbnZlbnRvcnkuY29uc3VtZShvcERlbWFuZC5uZWVkZWRLaW5kcywgb3BEZW1hbmQucXR5KTtcclxuICAgICAgICBjb25zdCByYXRpbyA9IGNvbnN1bWVkIC8gb3BEZW1hbmQucXR5O1xyXG4gICAgICAgIGlmICghaXNSdW5Qcm9kIHx8IHJhdGlvIDwgMC41KSB7XHJcbiAgICAgICAgICAgIC8vIG5vdCBydW5uaW5nIHByb2R1Y3Rpb24gb3IgdG9vIGZldyB0b29scywgcGVuYXRseVxyXG4gICAgICAgICAgICB0aGlzLm9wZXJhdGlvbmFsRWZmID0gTWF0aC5tYXgoTUlOX09QX0VGRiwgdGhpcy5vcGVyYXRpb25hbEVmZiAtIDAuMDAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdW1wdGlvbkZhY3RvciA9IChyYXRpbyAtIDAuNSkgLyAwLjU7XHJcbiAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uYWxFZmYgPSBNYXRoLm1pbigxLCB0aGlzLm9wZXJhdGlvbmFsRWZmICsgMC4wMSAqIGNvbnN1bXB0aW9uRmFjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9kdWNlKGdhbGF4eTogTW9kZWwuR2FsYXh5LCBpbnZlbnRvcnk6IE1vZGVsLkludmVudG9yeSkge1xyXG5cclxuICAgICAgICBjb25zdCBkZW1hbmRQcm9kdWN0cyA9IEluZHVzdHJ5LmdldEZsYXREZW1hbmRQcm9kdWN0cyh0aGlzLnByb2R1Y3RUeXBlKTtcclxuICAgICAgICBjb25zdCBwcm9kQ2FwID0gdGhpcy5wcm9kQ2FwKGdhbGF4eSk7XHJcblxyXG4gICAgICAgIGlmIChkZW1hbmRQcm9kdWN0cy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIG5vIGlucHV0IHJlcXVpcmVtZW50LCBwcm9kdWNlIGZ1bGwgcHJvZHVjdGlvbiBjYXBhY2l0eVxyXG4gICAgICAgICAgICBpbnZlbnRvcnkucHV0R29vZHModGhpcy5wcm9kdWN0VHlwZSwgcHJvZENhcCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9kQ2FwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvZHVjZVF0eSA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICBwcm9kQ2FwLCAvLyBub3RlOiBjYW5ub3QgcHJvZHVjZSBncmVhdGVyIHRoYW4gdGhlIHByb2R1Y3Rpb24gY2FwYWNpdHlcclxuICAgICAgICAgICAgLi4uZGVtYW5kUHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiBpbnZlbnRvcnkuZ2V0UXR5KHByb2R1Y3QpKSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBkZW1hbmRHcm91cCBvZiBJbmR1c3RyeS5nZXREZW1hbmRQcm9kdWN0cyh0aGlzLnByb2R1Y3RUeXBlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdW1lZCA9IGludmVudG9yeS5jb25zdW1lKGRlbWFuZEdyb3VwLCBwcm9kdWNlUXR5KTtcclxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoY29uc3VtZWQgPT09IHByb2R1Y2VRdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnZlbnRvcnkucHV0R29vZHModGhpcy5wcm9kdWN0VHlwZSwgcHJvZHVjZVF0eSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9kdWNlUXR5O1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWwvaW5kdXN0cnkudHMiLCJpbXBvcnQgKiBhcyBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBBbGdvIGZyb20gXCIuLi9hbGdvcml0aG0vYWxnb3JpdGhtXCI7XHJcbmltcG9ydCAqIGFzIE1vZGVsIGZyb20gXCIuL21vZGVsXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5IHtcclxuXHJcbiAgICAvLyBlaXRoZXIgZ2VuZXJhdGVkIG9uIHRoZSBmbHkgb3IgcmVzdG9yZWQgZnJvbSBzb21lIHNvdXJjZVxyXG4gICAgcHJpdmF0ZSBkZW1hbmRTcmNzOiBNb2RlbC5JbmR1c3RyeVtdID0gW107XHJcbiAgICBwcml2YXRlIHVzZWRTcGFjZSA9IEFsZ28uc3VtKC4uLnRoaXMuaW52ZW50b3J5KTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IG51bWJlcixcclxuICAgICAgICBwcml2YXRlIG1heFN0b3JhZ2UgPSBJbmZpbml0eSxcclxuICAgICAgICBwcml2YXRlIGludmVudG9yeSA9IG5ldyBBcnJheTxudW1iZXI+KE1vZGVsLk5VTV9QUk9EVUNUUykuZmlsbCgwKSxcclxuICAgICkge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRoaXMudXNlZFNwYWNlIDw9IG1heFN0b3JhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogTW9kZWwuSUludmVudG9yeSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG1heFN0b3JhZ2U6IHRoaXMubWF4U3RvcmFnZSxcclxuICAgICAgICAgICAgaW52ZW50b3J5OiB0aGlzLmludmVudG9yeSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFbXB0eVNwYWNlKCkge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlID0gdGhpcy5tYXhTdG9yYWdlIC0gdGhpcy51c2VkU3BhY2U7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoc3BhY2UgPj0gMCk7XHJcbiAgICAgICAgcmV0dXJuIHNwYWNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYXhTcGFjZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXhTdG9yYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRRdHkocHJvZHVjdFR5cGU6IE1vZGVsLlByb2R1Y3QpIHtcclxuICAgICAgICBjb25zdCBxdHkgPSB0aGlzLmludmVudG9yeVtwcm9kdWN0VHlwZV07XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQocXR5ID49IDApO1xyXG4gICAgICAgIHJldHVybiBxdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1dEdvb2RzKHByb2R1Y3RUeXBlOiBNb2RlbC5Qcm9kdWN0LCBxdHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQocXR5ID49IDApO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KE51bWJlci5pc0ludGVnZXIocXR5KSk7XHJcbiAgICAgICAgY29uc3QgaW5TdG9jayA9IHRoaXMuaW52ZW50b3J5W3Byb2R1Y3RUeXBlXTtcclxuICAgICAgICBjb25zdCBuZXdRdHkgPSBNYXRoLm1pbih0aGlzLm1heFN0b3JhZ2UgLSB0aGlzLnVzZWRTcGFjZSwgcXR5KTtcclxuICAgICAgICBjb25zdCBuZXdUb3RhbCA9IGluU3RvY2sgKyBuZXdRdHk7XHJcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlbcHJvZHVjdFR5cGVdID0gbmV3VG90YWw7XHJcbiAgICAgICAgdGhpcy51c2VkU3BhY2UgKz0gbmV3UXR5O1xyXG4gICAgICAgIHJldHVybiBuZXdUb3RhbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGFrZUdvb2RzKHByb2R1Y3RUeXBlOiBNb2RlbC5Qcm9kdWN0LCBxdHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQocXR5ID49IDApO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KE51bWJlci5pc0ludGVnZXIocXR5KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbWFpbiA9IHRoaXMuaW52ZW50b3J5W3Byb2R1Y3RUeXBlXSAtIHF0eTtcclxuICAgICAgICBpZiAocmVtYWluIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJidWc6IHJlc3BvbnNpYmlsaXR5IG9mIG1haW50YWluaW5nIG5vbi1uZWdhdGl2ZSBxdWFudGl0eSBnb2VzIHRvIHRoZSBjYWxsZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmludmVudG9yeVtwcm9kdWN0VHlwZV0gPSByZW1haW47XHJcbiAgICAgICAgdGhpcy51c2VkU3BhY2UgLT0gcXR5O1xyXG4gICAgICAgIHJldHVybiByZW1haW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhc1NwYWNlRm9yKHF0eTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQocXR5ID49IDApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heFN0b3JhZ2UgPj0gdGhpcy51c2VkU3BhY2UgKyBxdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZERlbWFuZFNyYyhkZW1hbmRTcmM6IE1vZGVsLkluZHVzdHJ5KSB7XHJcbiAgICAgICAgdGhpcy5kZW1hbmRTcmNzLnB1c2goZGVtYW5kU3JjKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGVtYW5kKGdhbGF4eTogTW9kZWwuR2FsYXh5LCBwcm9kdWN0OiBNb2RlbC5Qcm9kdWN0KTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBkZW1hbmRzID0gbmV3IEFycmF5PG51bWJlcj4oTW9kZWwuTlVNX1BST0RVQ1RTKS5maWxsKDApO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3JjIG9mIHRoaXMuZGVtYW5kU3Jjcykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvZENhcCA9IHNyYy5wcm9kQ2FwKGdhbGF4eSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbGxEZW1hbmRzID0gSW1tdXRhYmxlXHJcbiAgICAgICAgICAgICAgICAuU2VxKE1vZGVsLkluZHVzdHJ5LmdldERlbWFuZFByb2R1Y3RzKHNyYy5wcm9kdWN0VHlwZSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVlZGVkS2luZHM6IHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eTogcHJvZENhcCxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSkuY29uY2F0KHNyYy5nZXRPcERlbWFuZCgpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZGVtYW5kIG9mIGFsbERlbWFuZHMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZGVtYW5kLm5lZWRlZEtpbmRzLmhhcyhwcm9kdWN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdHJ5IHRvIGZpbGwgYWx0ZXJuYXRpdmVzIGRlbWFuZHNcclxuICAgICAgICAgICAgICAgIGxldCBuZWVkID0gZGVtYW5kLnF0eTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2luZCBvZiBkZW1hbmQubmVlZGVkS2luZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdHkgPSB0aGlzLmdldFF0eShraW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocXR5ID4gbmVlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZW1hbmRzW2tpbmRdICs9IG5lZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWQgLT0gcXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZW1hbmRzW2tpbmRdICs9IHF0eTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChuZWVkID49IDApO1xyXG4gICAgICAgICAgICAgICAgLy8gZmlsbCByZW1haW5pbmcgbmVlZHMgd2l0aCB0aGUgdGFyZ2V0IHByb2R1Y3RcclxuICAgICAgICAgICAgICAgIGRlbWFuZHNbcHJvZHVjdF0gKz0gbmVlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRlbWFuZHNbcHJvZHVjdF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljICpnZXRBbGxRdHkoKSB7XHJcbiAgICAgICAgY29uc3QgaXQgPSB0aGlzLmludmVudG9yeVxyXG4gICAgICAgICAgICAubWFwKChxdHksIGlkeCkgPT4gW2lkeCwgcXR5XSBhcyBbUHJvZHVjdCwgbnVtYmVyXSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIGl0KSB7XHJcbiAgICAgICAgICAgIC8vIGFueSBlbnRyeSBtdXN0IGhhdmUgcXR5ID49IDBcclxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQocGFpclsxXSA+PSAwKTtcclxuICAgICAgICAgICAgeWllbGQgcGFpcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN1bWUocHJvZHVjdHM6IFNldDxNb2RlbC5Qcm9kdWN0PiB8IEltbXV0YWJsZS5TZXQ8TW9kZWwuUHJvZHVjdD4sIHF0eTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQocXR5ID49IDApO1xyXG5cclxuICAgICAgICBjb25zdCBzb3J0ZWQgPSBBcnJheVxyXG4gICAgICAgICAgICAuZnJvbShwcm9kdWN0cylcclxuICAgICAgICAgICAgLy8gc29ydCBieSBkZXNjZW5kaW5nIG9yZGVyXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB0aGlzLmdldFF0eShiKSAtIHRoaXMuZ2V0UXR5KGEpKTtcclxuXHJcbiAgICAgICAgLy8gdHJ5IHRvIGNvbnN1bWUgcHJvZHVjdHMgd2l0aCB0aGUgaGlnaGVzdCBzdG9jayBxdHlcclxuICAgICAgICBsZXQgY29uc3VtZWQgPSBxdHk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHNvcnRlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpblN0b2NrID0gdGhpcy5nZXRRdHkocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIGlmIChjb25zdW1lZCA+IGluU3RvY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFrZUdvb2RzKHByb2R1Y3QsIGluU3RvY2spO1xyXG4gICAgICAgICAgICAgICAgY29uc3VtZWQgLT0gaW5TdG9jaztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFrZUdvb2RzKHByb2R1Y3QsIGNvbnN1bWVkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN1bWVkID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBjb25zdW1lZCBldmVyeXRoaW5nIG5lZWRlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBxdHkgLSBjb25zdW1lZDtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWwvaW52ZW50b3J5LnRzIiwiaW1wb3J0ICogYXMgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0ICogYXMgQWxnbyBmcm9tIFwiLi4vYWxnb3JpdGhtL2FsZ29yaXRobVwiO1xyXG5pbXBvcnQgKiBhcyBNb2RlbCBmcm9tIFwiLi9tb2RlbFwiO1xyXG5pbXBvcnQgeyBDb29yVCwgSUxvY2F0YWJsZSwgSVJvdXRlU2VnbWVudCwgTWFwRGF0YUtpbmQgfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5pbXBvcnQgeyBhbGxQcm9kdWN0cyB9IGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuXHJcbmNvbnN0IEJJR19UVVJOID0gNTA7XHJcbmNvbnN0IFNUQVJUSU5HX0NBUElUQUwgPSAxMDAwMDAwO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSW52ZW50b3J5IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBtYXhTdG9yYWdlOiBudW1iZXI7XHJcbiAgICBpbnZlbnRvcnk6IG51bWJlcltdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElGbGVldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgY2FyZ29JZDogbnVtYmVyO1xyXG4gICAgcm91dGU6IG51bWJlcltdO1xyXG4gICAgcm91dGVBdDogbnVtYmVyO1xyXG4gICAgc3RhdGU6IE1vZGVsLkZsZWV0U3RhdGU7XHJcbiAgICBpc1JldGlyaW5nOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb29yIHtcclxuICAgIGNvb3I6IE1vZGVsLkNvb3JUO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElJbmR1c3RyeSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgcHJvZHVjdFR5cGU6IE1vZGVsLlByb2R1Y3Q7XHJcbiAgICBjb2xvbnlJZDogbnVtYmVyO1xyXG4gICAgc2NhbGU6IG51bWJlcjtcclxuICAgIG9wZXJhdGlvbmFsRWZmOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1hcmtldCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaW52ZW50b3J5SWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGxhbmV0IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICByZXNvdXJjZTogTW9kZWwuUmF3TWF0ZXJpYWw7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbG9ueSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaG9tZVBsYW5ldElkOiBudW1iZXI7XHJcbiAgICBwb3B1bGF0aW9uOiBudW1iZXI7XHJcbiAgICBwbGF5ZXJJbnZlbnRvcnlJZDogbnVtYmVyO1xyXG4gICAgbWFya2V0SW52ZW50b3J5SWQ6IG51bWJlcjtcclxuICAgIG1heFBvcHVsYXRpb246IG51bWJlcjtcclxuICAgIGlzTG9ja1BvcHVsYXRpb246IGJvb2xlYW47XHJcbiAgICBwb3dlclBsYW5ldExldmVsOiBudW1iZXI7XHJcbiAgICBwb3dlck91dHB1dEVmZjogbnVtYmVyO1xyXG4gICAgZm9vZEhhcHBpbmVzczogbnVtYmVyO1xyXG4gICAgbHV4dXJ5SGFwcGluZXNzOiBudW1iZXI7XHJcbiAgICBjb21tb25IYXBwaW5lc3M6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUm91dGVGbGVldCB7XHJcbiAgICBmcm9tOiBudW1iZXI7XHJcbiAgICB0bzogbnVtYmVyO1xyXG4gICAgZmxlZXRJZHM6IG51bWJlcltdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElHYWxheHlTYXZlRGF0YSB7XHJcbiAgICBsb2NhdGFibGVzOiBBcnJheTwoTW9kZWwuSUxvY2F0YWJsZSAmIE1vZGVsLklDb29yKT47XHJcbiAgICBhbGxJbnZlbnRvcmllczogTW9kZWwuSUludmVudG9yeVtdO1xyXG4gICAgYWxsSW5kdXN0cmllczogTW9kZWwuSUluZHVzdHJ5W107XHJcbiAgICBhbGxGbGVldHM6IE1vZGVsLklGbGVldFtdO1xyXG4gICAgYWxsUGxhbmV0czogTW9kZWwuSVBsYW5ldFtdO1xyXG4gICAgYWxsQ29sb25pZXM6IE1vZGVsLklDb2xvbnlbXTtcclxuXHJcbiAgICAvLyBpbnRlcm5hbCB2YXJpYWJsZXNcclxuICAgIGdlbklkOiBudW1iZXI7XHJcbiAgICB0dXJuQ291bnRlcjogbnVtYmVyO1xyXG4gICAgdGltZXN0YW1wOiBudW1iZXI7XHJcblxyXG4gICAgLy8gcGxheWVyXHJcbiAgICBtb25leTogbnVtYmVyO1xyXG4gICAgbnVtQ29sb25pc3RzOiBudW1iZXI7XHJcbiAgICBudW1UcmFkZXJzOiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvTWFwPFQgZXh0ZW5kcyBNb2RlbC5JRW50aXR5PihpdDogSXRlcmFibGU8VD4pIHtcclxuICAgIHJldHVybiBuZXcgTWFwKEltbXV0YWJsZVxyXG4gICAgICAgIC5TZXEoaXQpXHJcbiAgICAgICAgLm1hcCgodikgPT4gW3YuaWQsIHZdIGFzIFtudW1iZXIsIFRdKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHYWxheHkge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRnJvbShzYXZlRGF0YTogSUdhbGF4eVNhdmVEYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZ2FsYXh5ID0gbmV3IEdhbGF4eSgpO1xyXG4gICAgICAgIGdhbGF4eS5nZW5JZCA9IHNhdmVEYXRhLmdlbklkO1xyXG4gICAgICAgIGdhbGF4eS50dXJuQ291bnRlciA9IHNhdmVEYXRhLnR1cm5Db3VudGVyO1xyXG4gICAgICAgIGdhbGF4eS50aW1lc3RhbXAgPSBzYXZlRGF0YS50aW1lc3RhbXA7XHJcbiAgICAgICAgZ2FsYXh5Lm1vbmV5ID0gc2F2ZURhdGEubW9uZXk7XHJcbiAgICAgICAgZ2FsYXh5Lm51bUNvbG9uaXN0cyA9IHNhdmVEYXRhLm51bUNvbG9uaXN0cztcclxuICAgICAgICBnYWxheHkubnVtVHJhZGVycyA9IHNhdmVEYXRhLm51bVRyYWRlcnM7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvb3JzID0gdG9NYXAoc2F2ZURhdGEubG9jYXRhYmxlcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGludmVudG9yaWVzID0gdG9NYXAoSW1tdXRhYmxlXHJcbiAgICAgICAgICAgIC5TZXEoc2F2ZURhdGEuYWxsSW52ZW50b3JpZXMpXHJcbiAgICAgICAgICAgIC5tYXAoKHgpID0+IG5ldyBNb2RlbC5JbnZlbnRvcnkoeC5pZCwgeC5tYXhTdG9yYWdlID09PSBudWxsID8gSW5maW5pdHkgOiB4Lm1heFN0b3JhZ2UsIHguaW52ZW50b3J5KSkpO1xyXG5cclxuICAgICAgICBjb25zdCBwbGFuZXRzID0gdG9NYXAoSW1tdXRhYmxlXHJcbiAgICAgICAgICAgIC5TZXEoc2F2ZURhdGEuYWxsUGxhbmV0cylcclxuICAgICAgICAgICAgLm1hcCgoeCkgPT4gbmV3IE1vZGVsLlBsYW5ldCh4LmlkLCB4LnJlc291cmNlKSkpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHBsYW5ldCBvZiBwbGFuZXRzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3IgPSBjb29ycy5nZXQocGxhbmV0LmlkKSE7XHJcbiAgICAgICAgICAgIGdhbGF4eS5hZGRPYmoocGxhbmV0LCBjb29yLmNvb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29sb25pZXMgPSB0b01hcChzYXZlRGF0YS5hbGxDb2xvbmllc1xyXG4gICAgICAgICAgICAubWFwKCh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJJbnZlbnRvcnkgPSBpbnZlbnRvcmllcy5nZXQoeC5wbGF5ZXJJbnZlbnRvcnlJZCkhO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQocGxheWVySW52ZW50b3J5ICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2V0SW52ZW50b3J5ID0gaW52ZW50b3JpZXMuZ2V0KHgubWFya2V0SW52ZW50b3J5SWQpITtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHBsYXllckludmVudG9yeSAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvbWVQbGFuZXQgPSBwbGFuZXRzLmdldCh4LmhvbWVQbGFuZXRJZCkhO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoaG9tZVBsYW5ldCAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9ueSA9IG5ldyBNb2RlbC5Db2xvbnkoeC5pZCwgaG9tZVBsYW5ldCwgeC5wb3B1bGF0aW9uLCBwbGF5ZXJJbnZlbnRvcnksIG1hcmtldEludmVudG9yeSwgeC5tYXhQb3B1bGF0aW9uLCB4LmlzTG9ja1BvcHVsYXRpb24sIHgucG93ZXJQbGFuZXRMZXZlbCwgeC5wb3dlck91dHB1dEVmZiwgeC5mb29kSGFwcGluZXNzLCB4Lmx1eHVyeUhhcHBpbmVzcywgeC5jb21tb25IYXBwaW5lc3MpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9ueTtcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBjb2xvbmllcy5mb3JFYWNoKChjb2xvbnkpID0+IHtcclxuICAgICAgICAgICAgZ2FsYXh5LmNvbG9uaXplUGxhbmV0SGVscGVyKGNvbG9ueSwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdhbGF4eS5jYWxUcmFkZVJvdXRlcygpO1xyXG5cclxuICAgICAgICAvLyBhZGQgaW5kdXN0cmllc1xyXG4gICAgICAgIHNhdmVEYXRhLmFsbEluZHVzdHJpZXNcclxuICAgICAgICAgICAgLm1hcCgoeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb255ID0gY29sb25pZXMuZ2V0KHguY29sb255SWQpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZHVzdHJ5ID0gbmV3IE1vZGVsLkluZHVzdHJ5KHguaWQsIHgucHJvZHVjdFR5cGUsIGNvbG9ueSwgeC5zY2FsZSwgeC5vcGVyYXRpb25hbEVmZik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kdXN0cnk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChpbmR1c3RyeSkgPT4gZ2FsYXh5LmFkZEluZHVzdHJ5SGVscGVyKGluZHVzdHJ5KSk7XHJcblxyXG4gICAgICAgIHNhdmVEYXRhLmFsbEZsZWV0c1xyXG4gICAgICAgICAgICAuZm9yRWFjaCgoeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZ28gPSBpbnZlbnRvcmllcy5nZXQoeC5jYXJnb0lkKSE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChjYXJnbyAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlID0geC5yb3V0ZS5tYXAoKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0ID0gY29sb25pZXMuZ2V0KGlkKSE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQocmV0ICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZsZWV0ID0gbmV3IE1vZGVsLkZsZWV0KHguaWQsIGNhcmdvLCByb3V0ZSwgeC5yb3V0ZUF0LCB4LnN0YXRlLCB4LmlzUmV0aXJpbmcpO1xyXG4gICAgICAgICAgICAgICAgZ2FsYXh5LmFkZE9iaihmbGVldCwgY29vcnMuZ2V0KGZsZWV0LmlkKSEuY29vcik7XHJcbiAgICAgICAgICAgICAgICBnYWxheHkuYWRkVHJhZGVGbGVldEhlbHBlcihmbGVldCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnYWxheHkuY2FsUm91dGVGdWVsRWZmKCk7XHJcbiAgICAgICAgZ2FsYXh5LmNhbEdhbGFjdGljTWFya2V0U3RhdHMoKTtcclxuICAgICAgICByZXR1cm4gZ2FsYXh5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8gY2FjaGVkLCBtZW1vaXplZCwgY2FsY3VsYXRlZC1vbi10aGUtZmx5IHRhYmxlc1xyXG5cclxuICAgIC8vIGFycmFuZ2VkIGludG8gYSB0aWxlIGdyaWQsIHdoZXJlIG9iamVjdCBjb29yZGluYXRlcyBhcmUgY2VpbGVkXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvb3JJbmRpY2VzID0gbmV3IEFsZ28uVHVwbGVNYXA8W251bWJlciwgbnVtYmVyXSwgU2V0PElMb2NhdGFibGU+PigpO1xyXG4gICAgcHJpdmF0ZSB0cmFkZVJvdXRlcyA9IG5ldyBNYXA8TW9kZWwuQ29sb255LCBNb2RlbC5Db2xvbnlbXT4oKTtcclxuXHJcbiAgICAvLyBkZW1hbmQtc3VwcGx5LCB0cmFkZSByb3V0ZXNcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZ2FsYWN0aWNEZW1hbmRzID0gbmV3IE1hcDxNb2RlbC5Qcm9kdWN0LCBudW1iZXI+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGdhbGFjdGljU3VwcGxpZXMgPSBuZXcgTWFwPE1vZGVsLlByb2R1Y3QsIG51bWJlcj4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZ2FsYWN0aWNQcm9kQ2FwID0gbmV3IE1hcDxNb2RlbC5Qcm9kdWN0LCBudW1iZXI+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRvd25zdHJlYW1Db25zdW1lcnMgPSBuZXcgQWxnby5UdXBsZU1hcDxbTW9kZWwuQ29sb255LCBNb2RlbC5Db2xvbnldLCBNYXA8TW9kZWwuUHJvZHVjdCwgTW9kZWwuQ29sb255W10+PigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25zdW1lcnMgPSBNb2RlbFxyXG4gICAgICAgIC5hbGxQcm9kdWN0cygpXHJcbiAgICAgICAgLm1hcCgoKSA9PiBuZXcgU2V0PE1vZGVsLkNvbG9ueT4oKSk7XHJcbiAgICBwcml2YXRlIHRyYWRlUm91dGVQYXRoczogQWxnby5GbG95ZFdhcnNoYWxsPE1vZGVsLkNvbG9ueT47XHJcbiAgICBwcml2YXRlIGZsZWV0RnVlbEVmZiA9IG5ldyBBbGdvLk9yZGVyTGlzdE1hcDxNb2RlbC5Db2xvbnksIG51bWJlcj4oKGEsIGIpID0+IGEuaWQgLSBiLmlkKTtcclxuXHJcbiAgICAvLy8vIGdhbWUgZW50aXRpZXMgJiByZWxhdGlvbnNoaXBzXHJcblxyXG4gICAgLy8gbWFwIG9iamVjdHMgJiB0aGVpciBjb29yZGluYXRlc1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb2xvbmllczogTW9kZWwuQ29sb255W10gPSBbXTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9jYXRhYmxlQ29vcnMgPSBuZXcgTWFwPElMb2NhdGFibGUsIENvb3JUPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb2xvbnlJbmR1c3RyaWVzID0gbmV3IE1hcDxNb2RlbC5Db2xvbnksIFNldDxNb2RlbC5JbmR1c3RyeT4+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRyYWRlRmxlZXRzID0gbmV3IEFsZ28uT3JkZXJMaXN0TWFwPE1vZGVsLkNvbG9ueSwgU2V0PE1vZGVsLkZsZWV0Pj4oKGEsIGIpID0+IGEuaWQgLSBiLmlkKTtcclxuXHJcbiAgICAvLyBpbnRlcm5hbCB2YXJpYWJsZXNcclxuICAgIHByaXZhdGUgZ2VuSWQgPSAtMTtcclxuICAgIHByaXZhdGUgdHVybkNvdW50ZXIgPSAtMTtcclxuICAgIHByaXZhdGUgdGltZXN0YW1wID0gMTtcclxuXHJcbiAgICAvLyBwbGF5ZXJcclxuICAgIHByaXZhdGUgbW9uZXkgPSBTVEFSVElOR19DQVBJVEFMO1xyXG4gICAgcHJpdmF0ZSBudW1Db2xvbmlzdHMgPSA1O1xyXG4gICAgcHJpdmF0ZSBudW1UcmFkZXJzID0gMTA7XHJcblxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbG9jYXRhYmxlczogSW1tdXRhYmxlXHJcbiAgICAgICAgICAgICAgICAuU2VxKHRoaXMubG9jYXRhYmxlQ29vcnMpXHJcbiAgICAgICAgICAgICAgICAubWFwKChbb2JqLCBjb29yXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBvYmouaWQsIGtpbmQ6IG9iai5raW5kLCBjb29yIH0gYXMgSUxvY2F0YWJsZSAmIElDb29yO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50b0FycmF5KCksXHJcbiAgICAgICAgICAgIGFsbEludmVudG9yaWVzOiB0aGlzLmNvbG9uaWVzXHJcbiAgICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhY2MucHVzaCh4LmdldFBsYXllckludmVudG9yeSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBhY2MucHVzaCh4LmdldE1hcmtldEludmVudG9yeSgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfSwgW10gYXMgTW9kZWwuSW52ZW50b3J5W10pXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KC4uLkltbXV0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIC5TZXEoQWxnby5jb21iaW5lSXQoLi4udGhpcy50cmFkZUZsZWV0cy52YWx1ZXMoKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoeCkgPT4geC5nZXRDYXJnbygpKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKHgpID0+IHguc2VyaWFsaXplKCkpLFxyXG4gICAgICAgICAgICBhbGxJbmR1c3RyaWVzOiBJbW11dGFibGVcclxuICAgICAgICAgICAgICAgIC5TZXEoQWxnby5jb21iaW5lSXQoLi4udGhpcy5jb2xvbnlJbmR1c3RyaWVzLnZhbHVlcygpKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKGluZHVzdHJ5KSA9PiBpbmR1c3RyeS5zZXJpYWxpemUoKSlcclxuICAgICAgICAgICAgICAgIC50b0FycmF5KCksXHJcbiAgICAgICAgICAgIGFsbEZsZWV0czogSW1tdXRhYmxlXHJcbiAgICAgICAgICAgICAgICAuU2VxKEFsZ28uY29tYmluZUl0KC4uLnRoaXMudHJhZGVGbGVldHMudmFsdWVzKCkpKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoeCkgPT4geC5zZXJpYWxpemUoKSlcclxuICAgICAgICAgICAgICAgIC50b0FycmF5KCksXHJcbiAgICAgICAgICAgIGFsbFBsYW5ldHM6IEltbXV0YWJsZVxyXG4gICAgICAgICAgICAgICAgLlNlcSh0aGlzLmxvY2F0YWJsZUNvb3JzLmtleXMoKSlcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+IHgua2luZCA9PT0gTWFwRGF0YUtpbmQuUGxhbmV0KVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoeCkgPT4gKHggYXMgTW9kZWwuUGxhbmV0KS5zZXJpYWxpemUoKSlcclxuICAgICAgICAgICAgICAgIC50b0FycmF5KCksXHJcbiAgICAgICAgICAgIGFsbENvbG9uaWVzOiB0aGlzLmNvbG9uaWVzLm1hcCgoeCkgPT4geC5zZXJpYWxpemUoKSksXHJcblxyXG4gICAgICAgICAgICAvLyBnYW1lIGRhdGFcclxuICAgICAgICAgICAgZ2VuSWQ6IHRoaXMuZ2VuSWQsXHJcbiAgICAgICAgICAgIHR1cm5Db3VudGVyOiB0aGlzLnR1cm5Db3VudGVyLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wLFxyXG4gICAgICAgICAgICBtb25leTogdGhpcy5tb25leSxcclxuICAgICAgICAgICAgbnVtQ29sb25pc3RzOiB0aGlzLm51bUNvbG9uaXN0cyxcclxuICAgICAgICAgICAgbnVtVHJhZGVyczogdGhpcy5udW1UcmFkZXJzLFxyXG4gICAgICAgIH0gYXMgSUdhbGF4eVNhdmVEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVJbnZlbnRvcnkobWF4U3RvcmFnZTogbnVtYmVyID0gSW5maW5pdHkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1vZGVsLkludmVudG9yeSh0aGlzLm5leHRJZCgpLCBtYXhTdG9yYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVwb3NpdChhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubW9uZXkgKz0gYW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3aXRoZHJhdyhhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubW9uZXkgLT0gYW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRQbGFuZXRzKG51bTogbnVtYmVyLCBtaW5EaXN0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCByYXdzID0gTW9kZWwuUkFXX01BVEVSSUFMUztcclxuICAgICAgICBjb25zdCBudW1SYXdzID0gcmF3cy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgYm91bmQgPSBudW0gLyAyO1xyXG5cclxuICAgICAgICBjb25zdCBmaW5kQ29vckZvclBsYW5ldHMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb29ycyA9IG5ldyBBbGdvLlR1cGxlU2V0PE1vZGVsLkNvb3JUPigpO1xyXG5cclxuICAgICAgICAgICAgLy8gbmFpdmUgYWxnb3JpdGhtXHJcbiAgICAgICAgICAgIE5FWFRfQ0FORElEQVRFOiB3aGlsZSAoY29vcnMuc2l6ZSgpIDwgbnVtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5kaWRhdGUgPSB0aGlzLnJhbmRvbUNvb3IoYm91bmQpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb29yIG9mIGNvb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFsZ28uZGlzdGFuY2UyRChjYW5kaWRhdGUsIGNvb3IpIDwgbWluRGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBORVhUX0NBTkRJREFURTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb29ycy5hZGQoY2FuZGlkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29vcnMudmFsdWVzKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb29yIG9mIGZpbmRDb29yRm9yUGxhbmV0cygpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYW5ldCA9IG5ldyBNb2RlbC5QbGFuZXQodGhpcy5uZXh0SWQoKSwgcmF3c1tpICUgbnVtUmF3c10pO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9iaihwbGFuZXQsIGNvb3IpO1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsVHJhZGVSb3V0ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVHJhZGVGbGVldChmcm9tOiBNb2RlbC5Db2xvbnksIHRvOiBNb2RlbC5Db2xvbnkpIHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0aGlzLm51bVRyYWRlcnMgPj0gMSk7XHJcbiAgICAgICAgdGhpcy5udW1UcmFkZXJzLS07XHJcblxyXG4gICAgICAgIGNvbnN0IGZsZWV0ID0gbmV3IE1vZGVsLkZsZWV0KHRoaXMubmV4dElkKCksIHRoaXMuY3JlYXRlSW52ZW50b3J5KDEwMDApLCBbZnJvbSwgdG9dKTtcclxuICAgICAgICB0aGlzLmFkZE9iaihmbGVldCwgdGhpcy5nZXRDb29yKGZyb20pKTtcclxuICAgICAgICB0aGlzLmFkZFRyYWRlRmxlZXRIZWxwZXIoZmxlZXQpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmxlZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUZsZWV0KGZsZWV0OiBNb2RlbC5GbGVldCkge1xyXG5cclxuICAgICAgICBjb25zdCByb3V0ZSA9IGZsZWV0LmdldFJvdXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQocm91dGUubGVuZ3RoID09PSAyKTtcclxuICAgICAgICBjb25zdCBjb2xvbnkxID0gcm91dGVbMF07XHJcbiAgICAgICAgY29uc3QgY29sb255MiA9IHJvdXRlWzFdO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgZGF0YSwgdGhlbiB0aGUgaW5kZXhcclxuICAgICAgICBjb25zdCBhbGxGbGVldHMgPSB0aGlzLnRyYWRlRmxlZXRzLmdldChjb2xvbnkxLCBjb2xvbnkyKSE7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoYWxsRmxlZXRzICE9PSB1bmRlZmluZWQpOyAvLyBvdGhlcndpc2UgcmVtb3ZpbmcgYW4gbm9uZXhpc3Qgb2JqZWN0XHJcbiAgICAgICAgY29uc3QgaXNEZWxldGVkID0gYWxsRmxlZXRzLmRlbGV0ZShmbGVldCk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoaXNEZWxldGVkKTsgLy8gb3RoZXJ3aXNlIHJlbW92aW5nIGFuIG5vbmV4aXN0IG9iamVjdFxyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZU9iaihmbGVldCk7XHJcbiAgICAgICAgdGhpcy5udW1UcmFkZXJzKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE51bVVzZWRUcmFkZXJzKGZyb206IE1vZGVsLkNvbG9ueSwgdG86IE1vZGVsLkNvbG9ueSkge1xyXG4gICAgICAgIGNvbnN0IGFsbEZsZWV0cyA9IHRoaXMudHJhZGVGbGVldHMuZ2V0KGZyb20sIHRvKTtcclxuICAgICAgICBpZiAoYWxsRmxlZXRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsbEZsZWV0cy5zaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbnVtQ29sb25pZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb25pZXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNUcmFkZVJvdXRlKGZyb206IE1vZGVsLkNvbG9ueSwgdG86IE1vZGVsLkNvbG9ueSkge1xyXG4gICAgICAgIGNvbnN0IGVkZ2VzID0gdGhpcy50cmFkZVJvdXRlcy5nZXQoZnJvbSk7XHJcbiAgICAgICAgcmV0dXJuIGVkZ2VzICYmIGVkZ2VzLnNvbWUoKHgpID0+IHggPT09IHRvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29sb25pemVQbGFuZXQocGxhbmV0OiBNb2RlbC5QbGFuZXQsIHBvcHVsYXRpb246IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRoaXMubnVtQ29sb25pc3RzID49IDEpO1xyXG4gICAgICAgIHRoaXMubnVtQ29sb25pc3RzIC09IDE7XHJcbiAgICAgICAgY29uc3QgY29sb255ID0gbmV3IE1vZGVsLkNvbG9ueSh0aGlzLm5leHRJZCgpLCBwbGFuZXQsIHBvcHVsYXRpb24sIHRoaXMuY3JlYXRlSW52ZW50b3J5KCksIHRoaXMuY3JlYXRlSW52ZW50b3J5KCkpO1xyXG4gICAgICAgIHRoaXMuY29sb25pemVQbGFuZXRIZWxwZXIoY29sb255KTtcclxuICAgICAgICByZXR1cm4gY29sb255O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbmR1c3RyaWVzKGNvbG9ueTogTW9kZWwuQ29sb255KSB7XHJcbiAgICAgICAgcmV0dXJuIEFsZ28uZ2V0T3IodGhpcy5jb2xvbnlJbmR1c3RyaWVzLCBjb2xvbnksICgpID0+IG5ldyBTZXQ8TW9kZWwuSW5kdXN0cnk+KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRJbmR1c3RyeShwcm9kdWN0VHlwZTogTW9kZWwuUHJvZHVjdCwgY29sb255OiBNb2RlbC5Db2xvbnkpIHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChjb2xvbnkgIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgaW5kdXN0cnkgPSBuZXcgTW9kZWwuSW5kdXN0cnkodGhpcy5uZXh0SWQoKSwgcHJvZHVjdFR5cGUsIGNvbG9ueSk7XHJcbiAgICAgICAgdGhpcy5hZGRJbmR1c3RyeUhlbHBlcihpbmR1c3RyeSk7XHJcbiAgICAgICAgcmV0dXJuIGluZHVzdHJ5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaHV0ZG93bkluZHVzdHJ5KGNvbG9ueTogTW9kZWwuQ29sb255LCBpbmR1c3RyeTogTW9kZWwuSW5kdXN0cnkpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kdXN0cmllcyA9IHRoaXMuY29sb255SW5kdXN0cmllcy5nZXQoY29sb255KSE7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoaW5kdXN0cmllcyAhPT0gdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IGRlcGVuZGVkIHByb2R1Y3RzIGZvciBhbGwgaW5kdXN0cmllcyBleHBlY3QgdGhlIHRhcmdldFxyXG4gICAgICAgIGNvbnN0IG92ZXJhbGwgPSBJbW11dGFibGVcclxuICAgICAgICAgICAgLlNlcShpbmR1c3RyaWVzKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChpbmR1c3RyeTIpID0+IGluZHVzdHJ5MiAhPT0gaW5kdXN0cnkpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgaW5kdXN0cnkyKSA9PiBhY2MudW5pb24odGhpcy5nZXREZW1hbmRlZFByb2R1Y3RzKGluZHVzdHJ5MikpLCBJbW11dGFibGUuU2V0PE1vZGVsLlByb2R1Y3Q+KCkpO1xyXG4gICAgICAgIGNvbnN0IGRlcGVuZCA9IHRoaXMuZ2V0RGVtYW5kZWRQcm9kdWN0cyhpbmR1c3RyeSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBkZXBlbmQuc3VidHJhY3Qob3ZlcmFsbCkpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNEZWxldGVkID0gdGhpcy5jb25zdW1lcnNbcHJvZHVjdF0uZGVsZXRlKGNvbG9ueSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGlzRGVsZXRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaXNEZWxldGVkID0gaW5kdXN0cmllcy5kZWxldGUoaW5kdXN0cnkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydChpc0RlbGV0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TW9uZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9uZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE51bUNvbG9uaXN0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1Db2xvbmlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE51bVVudXNlZFRyYWRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtVHJhZGVycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVHJhZGVyKCkge1xyXG4gICAgICAgIHRoaXMubnVtVHJhZGVycyArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDb2xvbmlzdHMoZ3Jvd3RoRGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGdyb3d0aERlbHRhID49IDApO1xyXG4gICAgICAgIHRoaXMubnVtQ29sb25pc3RzICs9IGdyb3d0aERlbHRhIC8gMTA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJvdXRlRnVlbEVmZihmcm9tOiBNb2RlbC5Db2xvbnksIHRvOiBNb2RlbC5Db2xvbnkpIHtcclxuICAgICAgICBjb25zdCByZXQgPSB0aGlzLmZsZWV0RnVlbEVmZi5nZXQoZnJvbSwgdG8pITtcclxuICAgICAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lc3RhbXAgJSBNb2RlbC5ZRUFSX1BFUl9USUNLO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRZZWFyKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy50aW1lc3RhbXAgLyBNb2RlbC5ZRUFSX1BFUl9USUNLKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGltZXN0YW1wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVzdGFtcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NvcmUoKSB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQodGhpcy50aW1lc3RhbXAgIT09IDApO1xyXG4gICAgICAgIGNvbnN0IHNjb3JlID0gKHRoaXMubW9uZXkgLSBTVEFSVElOR19DQVBJVEFMKSAvIHRoaXMudGltZXN0YW1wO1xyXG4gICAgICAgIGlmIChzY29yZSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHNjb3JlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2dyZXNzIGEgdGljazsgcmV0dXJuIHRydWUgaWYgdGhlIHRpY2sgaXMgYWxzbyB0aGUgc3RhcnQgb2YgYSBuZXcgdHVybi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHR1cm4oKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGZsZWV0cyA9IEFsZ28uY29tYmluZUl0KC4uLnRoaXMudHJhZGVGbGVldHMudmFsdWVzKCkpO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmxlZXQgb2YgZmxlZXRzKSB7XHJcbiAgICAgICAgICAgIGZsZWV0Lm9wZXJhdGUodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHVybkNvdW50ZXIgPSAodGhpcy50dXJuQ291bnRlciArIDEpICUgQklHX1RVUk47XHJcbiAgICAgICAgaWYgKHRoaXMudHVybkNvdW50ZXIgIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVzdGFtcCArPSAxO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tb25leSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb25leSAqPSAxICsgTW9kZWwuQU5OVUFMX0lOVEVSRVNUIC8gTW9kZWwuWUVBUl9QRVJfVElDSztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FsUm91dGVGdWVsRWZmKCk7XHJcbiAgICAgICAgdGhpcy5jYWxHYWxhY3RpY01hcmtldFN0YXRzKCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY29sb255IG9mIHRoaXMuY29sb25pZXMpIHtcclxuICAgICAgICAgICAgY29sb255LnJlY2FsY3VsYXRlKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGluZHVzdHJpZXMgb2YgdGhpcy5jb2xvbnlJbmR1c3RyaWVzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5kdXN0cnkgb2YgaW5kdXN0cmllcykge1xyXG4gICAgICAgICAgICAgICAgaW5kdXN0cnkub3BlcmF0ZSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGNvbG9ueSBvZiB0aGlzLmNvbG9uaWVzKSB7XHJcbiAgICAgICAgICAgIGNvbG9ueS50cmFkZSh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yKG9iajogTW9kZWwuSUxvY2F0YWJsZSB8IE1vZGVsLkNvbG9ueSkge1xyXG4gICAgICAgIGxldCByZXQ7XHJcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIE1vZGVsLkNvbG9ueSkge1xyXG4gICAgICAgICAgICBjb25zdCBwbGFuZXQgPSBvYmouZ2V0SG9tZVBsYW5ldCgpO1xyXG4gICAgICAgICAgICByZXQgPSB0aGlzLmxvY2F0YWJsZUNvb3JzLmdldChwbGFuZXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldCA9IHRoaXMubG9jYXRhYmxlQ29vcnMuZ2V0KG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHJldCAhPT0gdW5kZWZpbmVkKTsgLy8gZml4IGNhbGxlclxyXG4gICAgICAgIHJldHVybiByZXQhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPYmpzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2F0YWJsZUNvb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPYmooYXQ6IENvb3JULCBraW5kOiBNYXBEYXRhS2luZC5QbGFuZXQpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgICAgICAuc2VhcmNoTmVhcmJ5T2JqcyhhdClcclxuICAgICAgICAgICAgLmZpbHRlcigoeCkgPT4geC5raW5kID09PSBraW5kKVxyXG4gICAgICAgICAgICAuZmlyc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoTmVhcmJ5T2JqcyhhdDogQ29vclQsIHJhZGl1czogbnVtYmVyID0gMCwgbWluRGlzdGFuY2UgPSAwKSB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoT2JzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBbYXRYLCBhdFldID0gYXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlQ29vcnM6IENvb3JUW10gPSBbXHJcbiAgICAgICAgICAgICAgICBhdCwgLy8gY2VudGVyXHJcbiAgICAgICAgICAgICAgICBbYXRYIC0gcmFkaXVzLCBhdFkgLSByYWRpdXNdLCAvLyB0b3AtbGVmdFxyXG4gICAgICAgICAgICAgICAgW2F0WCArIHJhZGl1cywgYXRZIC0gcmFkaXVzXSwgLy8gdG9wLXJpZ2h0XHJcbiAgICAgICAgICAgICAgICBbYXRYIC0gcmFkaXVzLCBhdFkgKyByYWRpdXNdLCAvLyBib3R0b20tbGVmdFxyXG4gICAgICAgICAgICAgICAgW2F0WCArIHJhZGl1cywgYXRZICsgcmFkaXVzXSwgLy8gYm90dG9tLXJpZ2h0XHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBwb3NzaWJsZUNvb3JzXHJcbiAgICAgICAgICAgICAgICAubWFwKChjb29yKSA9PiB0aGlzLmlkeENvb3IoY29vcikpXHJcbiAgICAgICAgICAgICAgICAuc29ydChBbGdvLmNvbXBhcmUyRCk7XHJcbiAgICAgICAgICAgIHJldHVybiBJbW11dGFibGVcclxuICAgICAgICAgICAgICAgIC5TZXEoQWxnby51bmlxKHNvcnRlZCwgQWxnby5lcXVhbDJEKSkgLy8gZmluZCB1bmlxIGVsZW1lbnRzIGZyb20gYSBzb3J0ZWQgY29sbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgLm1hcCgoY29vcikgPT4gdGhpcy5nZXRJZHgoY29vcikpIC8vIGV4dHJhIG9iamVjdHMgZnJvbSBjb29yZGluYXRlc1xyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYy51bmlvbihjdXIpLCBJbW11dGFibGUuU2V0PE1vZGVsLklMb2NhdGFibGU+KCkpIC8vIGZsYXR0ZW4gY29sbGVjdGlvbnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3IgPSB0aGlzLmdldENvb3Iob2JqKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0ID0gQWxnby5kaXN0YW5jZTJEKGNvb3IsIGF0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlzdCA+PSBtaW5EaXN0YW5jZSAmJiBkaXN0IDw9IHJhZGl1cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IHRoaXMuc2VhcmNoVHJhZGVSb3V0ZXMoYXQsIHJhZGl1cyk7XHJcbiAgICAgICAgY29uc3Qgb2JqcyA9IHNlYXJjaE9icygpO1xyXG4gICAgICAgIHJldHVybiBvYmpzLmNvbmNhdChyb3V0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlKG9iajogSUxvY2F0YWJsZSwgdG86IENvb3JULCBzcGVlZDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbmFsU3BlZWQgPSBzcGVlZCAvIEJJR19UVVJOO1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0UG9zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhdCA9IHRoaXMubG9jYXRhYmxlQ29vcnMuZ2V0KG9iaikhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydChhdCAhPT0gdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGVmdCA9IEFsZ28uZGlzdGFuY2UyRCh0bywgYXQpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2VMZWZ0IDwgZmluYWxTcGVlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2xvc2UgZW5vdWdoXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RUcmF2ZWxsZWQ6IGRpc3RhbmNlTGVmdCxcclxuICAgICAgICAgICAgICAgICAgICBub3dBdDogdG8sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gZmFyIGF3YXksIGtlZXAgbW92aW5nXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXIgPSBBbGdvLnN1YnRyYWN0MkQodG8sIGF0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IEFsZ28ubm9ybTJEKGRpcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGFjZW1lbnQgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyWzBdIC8gbGVuZ3RoICogZmluYWxTcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICBkaXJbMV0gLyBsZW5ndGggKiBmaW5hbFNwZWVkXSBhcyBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXN0VHJhdmVsbGVkOiBsZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgbm93QXQ6IEFsZ28uc3VtMkQoYXQsIGRpc3BsYWNlbWVudCksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmV0ID0gbmV4dFBvcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT2JqKG9iaiwgcmV0Lm5vd0F0KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUcmFkZVJvdXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFkZVJvdXRlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0R2FsYWN0aWNEZW1hbmRzKHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QpIHtcclxuICAgICAgICByZXR1cm4gQWxnby5nZXRRdHkodGhpcy5nYWxhY3RpY0RlbWFuZHMsIHByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRHYWxhY3RpY1N1cHBsaWVzKHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QpIHtcclxuICAgICAgICByZXR1cm4gQWxnby5nZXRRdHkodGhpcy5nYWxhY3RpY1N1cHBsaWVzLCBwcm9kdWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0R2FsYWN0aWNQcm9kQ2FwKHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QpIHtcclxuICAgICAgICByZXR1cm4gQWxnby5nZXRRdHkodGhpcy5nYWxhY3RpY1Byb2RDYXAsIHByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREb3duc3RyZWFtQ29uc3VtZXJzKHByb2R1Y3Q6IE1vZGVsLlByb2R1Y3QsIGZyb206IE1vZGVsLkNvbG9ueSwgbmV4dDogTW9kZWwuQ29sb255KSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZyb20gIT09IG5leHQpO1xyXG5cclxuICAgICAgICBjb25zdCByZWNhbCA9ICgpID0+IG5ldyBNYXAoTW9kZWxcclxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGRvd25zdHJlYW0gc291cmNlcyBmb3IgYWxsIHByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5hbGxQcm9kdWN0cygpXHJcbiAgICAgICAgICAgIC5tYXAoKHByb2R1Y3QyKSA9PiBbXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0MixcclxuICAgICAgICAgICAgICAgIC8vIGZpbmQgYWxsIGRvd25zdHJlYW0gc291cmNlcyB0aGF0IHBhc3MgdGhyb3VnaCBcIm5leHRcIlxyXG4gICAgICAgICAgICAgICAgQXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAuZnJvbSh0aGlzLmNvbnN1bWVyc1twcm9kdWN0Ml0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZW5kUG9pbnQpID0+IGVuZFBvaW50ICE9PSBmcm9tICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dFRyYWRlTm9kZShmcm9tLCBlbmRQb2ludCkgPT09IG5leHQpLFxyXG4gICAgICAgICAgICBdIGFzIFtNb2RlbC5Qcm9kdWN0LCBNb2RlbC5Db2xvbnlbXV0pKTtcclxuXHJcbiAgICAgICAgLy8gbGF6aWx5IGNhbGN1bGF0ZXMgYWxsIGRvd25zdHJlYW0gc291cmNlc1xyXG4gICAgICAgIGNvbnN0IGNvbnN1bWVycyA9IHRoaXMuZG93bnN0cmVhbUNvbnN1bWVycy5nZXRPclNldChbZnJvbSwgbmV4dF0sICgpID0+IHJlY2FsKCkpO1xyXG4gICAgICAgIGNvbnN0IHJldCA9IGNvbnN1bWVycy5nZXQocHJvZHVjdCkhO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHJldCAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGlzdHMob2JqOiBJTG9jYXRhYmxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYXRhYmxlQ29vcnMuaGFzKG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZXh0VHJhZGVOb2RlKGZyb206IE1vZGVsLkNvbG9ueSwgdG86IE1vZGVsLkNvbG9ueSkge1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZyb20gIT09IHRvKTsgLy8gY2FsbGVyIGNoZWNrcyB0aGlzXHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQodGhpcy50cmFkZVJvdXRlUGF0aHMgIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gdGhpcy50cmFkZVJvdXRlUGF0aHMubmV4dChmcm9tLCB0byk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQocmV0ICE9PSB1bmRlZmluZWQpOyAvLyBzaW5jZSB3ZSdyZSBkZWFsaW5nIHdpdGggdGhlIG1pbmltdW0gc3Bhbm5pbmcgdHJlZSBvZiBhIGNvbXBsZXRlIHVuZGlyZWN0ZWQgZ3JhcGgsIGFsbCB2ZXJ0aWNlcyBhcmUgcmVhY2hhYmxlXHJcbiAgICAgICAgcmV0dXJuIHJldCE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxHYWxhY3RpY01hcmtldFN0YXRzKCkge1xyXG4gICAgICAgIHRoaXMuZ2FsYWN0aWNEZW1hbmRzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5nYWxhY3RpY1Byb2RDYXAuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmdhbGFjdGljU3VwcGxpZXMuY2xlYXIoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbG9ueSBvZiB0aGlzLmNvbG9uaWVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBhbGxQcm9kdWN0cygpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZW1hbmRRdHkgPSBjb2xvbnkuZ2V0RGVtYW5kKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAgICAgQWxnby5nZXRBbmRTdW0odGhpcy5nYWxhY3RpY0RlbWFuZHMsIHByb2R1Y3QsIGRlbWFuZFF0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VwcGx5UXR5ID0gY29sb255LmdldFN1cHBseShwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgIEFsZ28uZ2V0QW5kU3VtKHRoaXMuZ2FsYWN0aWNTdXBwbGllcywgcHJvZHVjdCwgc3VwcGx5UXR5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kQ2FwID0gY29sb255LmdldFByb2RDYXAodGhpcywgcHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICBBbGdvLmdldEFuZFN1bSh0aGlzLmdhbGFjdGljUHJvZENhcCwgcHJvZHVjdCwgcHJvZENhcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxUcmFkZVJvdXRlcygpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAoYTogTW9kZWwuQ29sb255LCBiOiBNb2RlbC5Db2xvbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29vckEgPSB0aGlzLmdldENvb3IoYSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JCID0gdGhpcy5nZXRDb29yKGIpO1xyXG4gICAgICAgICAgICByZXR1cm4gQWxnby5kaXN0YW5jZTJEKGNvb3JBLCBjb29yQik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdmVydGljZXMgPSBuZXcgU2V0KHRoaXMuY29sb25pZXMpO1xyXG5cclxuICAgICAgICAvLyBmaW5kIGEgbWluaW11bSBzcGFubmluZyB0cmVlIGZvciB0aGUgdHJhZGUgcm91dGUgbWFwXHJcbiAgICAgICAgdGhpcy50cmFkZVJvdXRlcyA9IEFsZ28ua3J1c2thbE1TVChcclxuICAgICAgICAgICAgdmVydGljZXMsXHJcbiAgICAgICAgICAgICh2ZXJ0ZXg6IE1vZGVsLkNvbG9ueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29tcGxldGUgZ3JhcGggZm9yIG5vd1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0ID0gbmV3IFNldCh2ZXJ0aWNlcyk7XHJcbiAgICAgICAgICAgICAgICByZXQuZGVsZXRlKHZlcnRleCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0LnZhbHVlcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoYTogTW9kZWwuQ29sb255LCBiOiBNb2RlbC5Db2xvbnkpID0+IGRpc3RhbmNlKGEsIGIpLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIHByZS1jb21wdXRlIGFsbC1wYWlyIHNob3J0ZXN0IHBhdGhzIGZvciB0aGUgdHJhZGUgcm91dGVzXHJcbiAgICAgICAgdGhpcy50cmFkZVJvdXRlUGF0aHMgPSBuZXcgQWxnby5GbG95ZFdhcnNoYWxsKHRoaXMudHJhZGVSb3V0ZXMsXHJcbiAgICAgICAgICAgIChhOiBNb2RlbC5Db2xvbnksIGI6IE1vZGVsLkNvbG9ueSkgPT4gZGlzdGFuY2UoYSwgYikpO1xyXG5cclxuICAgICAgICB0aGlzLmRvd25zdHJlYW1Db25zdW1lcnMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZE9iaihvYmo6IElMb2NhdGFibGUsIGNvb3I6IENvb3JUKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhdGFibGVDb29ycy5zZXQob2JqLCBjb29yKTtcclxuICAgICAgICB0aGlzLmFkZFRvSWR4KG9iaiwgY29vcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVPYmoob2JqOiBJTG9jYXRhYmxlLCBjb29yOiBDb29yVCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUlkeChvYmopO1xyXG4gICAgICAgIHRoaXMubG9jYXRhYmxlQ29vcnMuc2V0KG9iaiwgY29vcik7XHJcbiAgICAgICAgdGhpcy5hZGRUb0lkeChvYmosIGNvb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaWR4Q29vcihbeCwgeV06IENvb3JUKTogQ29vclQge1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5mbG9vcih4KSwgTWF0aC5mbG9vcih5KV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVGcm9tSWR4KG9iajogSUxvY2F0YWJsZSkge1xyXG4gICAgICAgIGNvbnN0IGNvb3IgPSB0aGlzLmxvY2F0YWJsZUNvb3JzLmdldChvYmopITtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChjb29yICE9PSB1bmRlZmluZWQpOyAvLyBmaXggY2FsbGVyOiBvYmplY3Qgbm90IGV4aXN0XHJcblxyXG4gICAgICAgIGNvbnN0IGlkeENvb3IgPSB0aGlzLmlkeENvb3IoY29vcik7XHJcbiAgICAgICAgY29uc3Qgb2JqcyA9IHRoaXMuY29vckluZGljZXMuZ2V0KGlkeENvb3IpITtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChvYmpzICE9PSB1bmRlZmluZWQsIFwiZXhpc3Rpbmcgb2JqZWN0IHNob3VsZCBiZSBpbmRleGVkXCIpO1xyXG4gICAgICAgIGNvbnN0IGlzRGVsZXRlZDEgPSBvYmpzLmRlbGV0ZShvYmopO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGlzRGVsZXRlZDEsIFwiaW5kZXggZG9lcyBub3QgaGF2ZSBvYmpcIik7XHJcblxyXG4gICAgICAgIGlmIChvYmpzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaXNEZWxldGVkMiA9IHRoaXMuY29vckluZGljZXMuZGVsZXRlKGlkeENvb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydChpc0RlbGV0ZWQyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVPYmoob2JqOiBJTG9jYXRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tSWR4KG9iaik7XHJcbiAgICAgICAgY29uc3QgaXNEZWxldGVkID0gdGhpcy5sb2NhdGFibGVDb29ycy5kZWxldGUob2JqKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChpc0RlbGV0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkVG9JZHgob2JqOiBJTG9jYXRhYmxlLCBjb29yOiBDb29yVCkge1xyXG4gICAgICAgIGNvbnN0IGlkeENvb3IgPSB0aGlzLmlkeENvb3IoY29vcik7XHJcbiAgICAgICAgY29uc3Qgb2JqcyA9IHRoaXMuY29vckluZGljZXMuZ2V0T3JTZXQoaWR4Q29vciwgKCkgPT4gbmV3IFNldCgpKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCghb2Jqcy5oYXMob2JqKSwgXCJkb3VibGUtYWRkaW5nIG9iamVjdCB0byBpbmRleFwiKTtcclxuICAgICAgICBvYmpzLmFkZChvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SWR4KGF0OiBDb29yVCkge1xyXG4gICAgICAgIGNvbnN0IGlkeENvb3IgPSB0aGlzLmlkeENvb3IoYXQpO1xyXG4gICAgICAgIGNvbnN0IGlkcyA9IHRoaXMuY29vckluZGljZXMuZ2V0KGlkeENvb3IpO1xyXG4gICAgICAgIHJldHVybiBpZHMgPyBpZHMgOiBuZXcgU2V0PE1vZGVsLklMb2NhdGFibGU+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByYW5kb21Db29yKGJvdW5kOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW01hdGgucmFuZG9tKCkgKiBib3VuZCwgTWF0aC5yYW5kb20oKSAqIGJvdW5kXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlICogc2VhcmNoVHJhZGVSb3V0ZXMoYXQ6IENvb3JULCByYWRpdXM6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgQWxnby5PcmRlckxpc3RTZXQ8TW9kZWwuQ29sb255PigoYzEsIGMyKSA9PiBjMS5pZCAtIGMyLmlkKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFthLCBic10gb2YgdGhpcy5nZXRUcmFkZVJvdXRlcygpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JBID0gdGhpcy5nZXRDb29yKGEuZ2V0SG9tZVBsYW5ldCgpKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBiIG9mIGJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yQiA9IHRoaXMuZ2V0Q29vcihiLmdldEhvbWVQbGFuZXQoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmlzaXRlZC5oYXMoYSwgYikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZpc2l0ZWQuYWRkKGEsIGIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBBbGdvLnRlc3RMaW5lU2VnbWVudENpcmNsZUludGVyc2VjdChjb29yQSwgY29vckIsIGF0LCByYWRpdXMpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBbGdvLkludGVyc2VjdGlvbjJELkludGVyc2VjdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEFsZ28uSW50ZXJzZWN0aW9uMkQuVGFuZ2VudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogTWFwRGF0YUtpbmQuUm91dGVTZWdtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogY29vckEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogY29vckIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgSVJvdXRlU2VnbWVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERlbWFuZGVkUHJvZHVjdHMoaW5kdXN0cnk6IE1vZGVsLkluZHVzdHJ5KSB7XHJcbiAgICAgICAgcmV0dXJuIE1vZGVsLkluZHVzdHJ5XHJcbiAgICAgICAgICAgIC5nZXRGbGF0RGVtYW5kUHJvZHVjdHMoaW5kdXN0cnkucHJvZHVjdFR5cGUpXHJcbiAgICAgICAgICAgIC51bmlvbihpbmR1c3RyeS5nZXRPcERlbWFuZCgpLm5lZWRlZEtpbmRzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbFJvdXRlRnVlbEVmZigpIHtcclxuICAgICAgICB0aGlzLmZsZWV0RnVlbEVmZi5jbGVhcigpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2Zyb20sIHRvc10gb2YgdGhpcy50cmFkZVJvdXRlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRvIG9mIHRvcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGVldEZ1ZWxFZmYuZ2V0T3JTZXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyb21FZmYgPSBmcm9tLmdldFBvd2VyVXNhZ2VFZmYodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9FZmYgPSB0by5nZXRQb3dlclVzYWdlRWZmKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGZyb21FZmYgKyB0b0VmZikgLyAyO1xyXG4gICAgICAgICAgICAgICAgfSwgZnJvbSwgdG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV4dElkKCkge1xyXG4gICAgICAgIHJldHVybiArK3RoaXMuZ2VuSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xvbml6ZVBsYW5ldEhlbHBlcihjb2xvbnk6IE1vZGVsLkNvbG9ueSwgaXNDYWxUcmFkZVJvdXRlcyA9IHRydWUpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcGxhbmV0ID0gY29sb255LmdldEhvbWVQbGFuZXQoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQodGhpcy5sb2NhdGFibGVDb29ycy5nZXQocGxhbmV0KSAhPT0gdW5kZWZpbmVkKTsgLy8gc2FuaXR5IGNoZWNrXHJcblxyXG4gICAgICAgIHRoaXMuY29sb25pZXMucHVzaChjb2xvbnkpO1xyXG4gICAgICAgIHBsYW5ldC5jb2xvbml6ZWQoY29sb255KTtcclxuXHJcbiAgICAgICAgLy8gbmF0dXJhbGx5IGNvbnN1bWVzIHRoZXNlIGdvb2RzLCBwcm9wb3J0aW9uYWwgdG8gcG9wdWxhdGlvblxyXG4gICAgICAgIGNvbnN0IGNvbnN1bWVyR29vZHMgPSBbXHJcbiAgICAgICAgICAgIE1vZGVsLlByb2R1Y3QuRm9vZCxcclxuICAgICAgICAgICAgTW9kZWwuUHJvZHVjdC5EcmluayxcclxuICAgICAgICAgICAgTW9kZWwuUHJvZHVjdC5BcHBhcmVsLFxyXG4gICAgICAgICAgICBNb2RlbC5Qcm9kdWN0Lk1lZGljaW5lLFxyXG4gICAgICAgICAgICBNb2RlbC5Qcm9kdWN0LkFjY2Vzc29yeSxcclxuICAgICAgICAgICAgTW9kZWwuUHJvZHVjdC5GdXJuaXR1cmUsXHJcbiAgICAgICAgICAgIE1vZGVsLlByb2R1Y3QuR2FkZ2V0LFxyXG4gICAgICAgICAgICBNb2RlbC5Qcm9kdWN0LlZlaGljbGUsXHJcbiAgICAgICAgICAgIE1vZGVsLlByb2R1Y3QuRnVlbCwgLy8gZGVyaXZlZCBkZW1hbmQgZnJvbSBwb3dlciBwbGFudHNcclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBjb25zdW1lckdvb2RzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZXJzW3Byb2R1Y3RdLmFkZChjb2xvbnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQ2FsVHJhZGVSb3V0ZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxUcmFkZVJvdXRlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEluZHVzdHJ5SGVscGVyKGluZHVzdHJ5OiBNb2RlbC5JbmR1c3RyeSkge1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvbnkgPSBpbmR1c3RyeS5jb2xvbnk7XHJcblxyXG4gICAgICAgIEFsZ29cclxuICAgICAgICAgICAgLmdldE9yU2V0KHRoaXMuY29sb255SW5kdXN0cmllcywgY29sb255LCAoKSA9PiBuZXcgU2V0KCkpXHJcbiAgICAgICAgICAgIC5hZGQoaW5kdXN0cnkpO1xyXG5cclxuICAgICAgICBjb2xvbnlcclxuICAgICAgICAgICAgLmdldFBsYXllckludmVudG9yeSgpXHJcbiAgICAgICAgICAgIC5hZGREZW1hbmRTcmMoaW5kdXN0cnkpO1xyXG5cclxuICAgICAgICAvLyBhZGQgdG8gY29uc3VtZXIgdGFibGVcclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgdGhpcy5nZXREZW1hbmRlZFByb2R1Y3RzKGluZHVzdHJ5KSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWVyc1twcm9kdWN0XS5hZGQoY29sb255KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIGNhY2hlLCBzbyB0aGF0IGZsZWV0cyB3aWxsIHJlY2FsY3VsYXRlIHRoZSBkb3duc3RyZWFtIGRlbWFuZHNcclxuICAgICAgICB0aGlzLmRvd25zdHJlYW1Db25zdW1lcnMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFRyYWRlRmxlZXRIZWxwZXIoZmxlZXQ6IE1vZGVsLkZsZWV0KSB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQodGhpcy5sb2NhdGFibGVDb29ycy5nZXQoZmxlZXQpICE9PSB1bmRlZmluZWQpOyAvLyBzYW5pdHkgY2hlY2tcclxuICAgICAgICBjb25zdCBbZnJvbSwgdG9dID0gZmxlZXQuZ2V0Um91dGUoKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChmcm9tICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRvICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgIGNvbnN0IGZsZWV0cyA9IHRoaXMudHJhZGVGbGVldHMuZ2V0T3JTZXQoKCkgPT4gbmV3IFNldCgpLCBmcm9tLCB0byk7XHJcbiAgICAgICAgZmxlZXRzLmFkZChmbGVldCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVsL2dhbGF4eS50cyIsImltcG9ydCAqIGFzIEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCAqIGFzIEFsZ28gZnJvbSBcIi4uL2FsZ29yaXRobS9hbGdvcml0aG1cIjtcclxuaW1wb3J0ICogYXMgTW9kZWwgZnJvbSBcIi4vbW9kZWxcIjtcclxuXHJcbmNvbnN0IFBJX09WRVJfMiA9IE1hdGguUEkgLyAyO1xyXG5jb25zdCBTUEVFRCA9IDAuMztcclxuXHJcbmV4cG9ydCBjbGFzcyBGbGVldCBpbXBsZW1lbnRzIE1vZGVsLklMb2NhdGFibGUge1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBraW5kID0gTW9kZWwuTWFwRGF0YUtpbmQuRmxlZXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBjYXJnbzogTW9kZWwuSW52ZW50b3J5LFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IE1vZGVsLkNvbG9ueVtdID0gW10sXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZUF0OiBudW1iZXIgPSAwLFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGUgPSBNb2RlbC5GbGVldFN0YXRlLk1vdmUsXHJcbiAgICAgICAgcHJpdmF0ZSBpc1JldGlyaW5nID0gZmFsc2UsXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogTW9kZWwuSUZsZWV0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgY2FyZ29JZDogdGhpcy5jYXJnby5pZCxcclxuICAgICAgICAgICAgcm91dGU6IHRoaXMucm91dGUubWFwKCh4KSA9PiB4LmlkKSxcclxuICAgICAgICAgICAgcm91dGVBdDogdGhpcy5yb3V0ZUF0LFxyXG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgaXNSZXRpcmluZzogdGhpcy5pc1JldGlyaW5nLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENhcmdvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmdvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSb3V0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Um91dGVBdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZUF0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTcGVlZChnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG4gICAgICAgIGNvbnN0IGZyb20gPSB0aGlzLmdldFN0b3AoKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChmcm9tICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgIGNvbnN0IHRvID0gdGhpcy5nZXROZXh0U3RvcCgpITtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0byAhPT0gdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgY29uc3QgZnVlbEVmZiA9IGdhbGF4eS5nZXRSb3V0ZUZ1ZWxFZmYoZnJvbSwgdG8pO1xyXG4gICAgICAgIGNvbnN0IGZ1ZWxCb251cyA9IDEgKyBmdWVsRWZmO1xyXG4gICAgICAgIGNvbnN0IGZ1ZWxCb251czIgPSBmdWVsQm9udXMgKiBmdWVsQm9udXM7XHJcbiAgICAgICAgcmV0dXJuIFNQRUVEICogZnVlbEJvbnVzMjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlcmF0ZShnYWxheHk6IE1vZGVsLkdhbGF4eSkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLkZsZWV0U3RhdGUuSG9sZDpcclxuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE1vZGVsLkZsZWV0U3RhdGUuRG9ja2VkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVEb2NrZWQoZ2FsYXh5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TW92ZU5leHRTdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBNb2RlbC5GbGVldFN0YXRlLk1vdmU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU1vdmUoZ2FsYXh5KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Um91dGUoLi4ucm91dGU6IE1vZGVsLkNvbG9ueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQocm91dGUubGVuZ3RoID4gMCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBNb2RlbC5GbGVldFN0YXRlLkhvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0Um91dGUoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZUF0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucm91dGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gTW9kZWwuRmxlZXRTdGF0ZS5Nb3ZlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRoaXMuc3RhdGUgPT09IE1vZGVsLkZsZWV0U3RhdGUuSG9sZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXRpcmUoKSB7XHJcbiAgICAgICAgdGhpcy5pc1JldGlyaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNSZXRpcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNSZXRpcmluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QW5nbGUoZ2FsYXh5OiBNb2RlbC5HYWxheHkpIHtcclxuICAgICAgICBpZiAodGhpcy5yb3V0ZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clBvcyA9IGdhbGF4eS5nZXRDb29yKHRoaXMpO1xyXG4gICAgICAgICAgICBjb25zdCBzdG9wID0gZ2FsYXh5LmdldENvb3IodGhpcy5nZXRTdG9wKCkpO1xyXG4gICAgICAgICAgICBsZXQgZnJvbTtcclxuICAgICAgICAgICAgbGV0IHRvO1xyXG4gICAgICAgICAgICBpZiAoQWxnby5lcXVhbDJEKGN1clBvcywgc3RvcCkpIHtcclxuICAgICAgICAgICAgICAgIGZyb20gPSBzdG9wO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IGdhbGF4eS5nZXRDb29yKHRoaXMubmV4dFN0b3AoKSk7XHJcbiAgICAgICAgICAgICAgICB0byA9IG5leHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tID0gY3VyUG9zO1xyXG4gICAgICAgICAgICAgICAgdG8gPSBzdG9wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBBbGdvLnN1YnRyYWN0MkQoZnJvbSwgdG8pO1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbih5IC8geCk7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmdsZSArIChmcm9tWzBdID49IHRvWzBdID8gLVBJX09WRVJfMiA6IFBJX09WRVJfMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFydGl0aW9uQ2FyZ28ocm91dGVEZW1hbmRzOiBudW1iZXJbXSwgbG93VG9IaWdoOiBNb2RlbC5Qcm9kdWN0W10pIHtcclxuXHJcbiAgICAgICAgY29uc3QgY2FyZ29TcGFjZSA9IHRoaXMuY2FyZ28uZ2V0RW1wdHlTcGFjZSgpO1xyXG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIGFzc2lnbiBhdCBsZWFzdCAxIHVuaXQgc3BhY2UgcGVyIGNvbW1vZGl0eVxyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGNhcmdvU3BhY2UgPj0gTW9kZWwuYWxsUHJvZHVjdHMoKS5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsRGVtYW5kID0gQWxnby5zdW0oLi4ucm91dGVEZW1hbmRzKTtcclxuICAgICAgICBjb25zdCBwYXJ0aXRpb24gPSBuZXcgTWFwPE1vZGVsLlByb2R1Y3QsIG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgaWYgKHRvdGFsRGVtYW5kID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0aXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgbG93VG9IaWdoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbWFuZCA9IHJvdXRlRGVtYW5kc1twcm9kdWN0XTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRvbid0IHRha2UgZ29vZHMgaWYgdGhlcmUncyBubyBkZW1hbmQgZm9yIHRoZW1cclxuICAgICAgICAgICAgaWYgKGRlbWFuZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHVuZGVyZXN0aW1hdGUgXCJhIGJpdFwiXHJcbiAgICAgICAgICAgIGNvbnN0IHF0eSA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IoZGVtYW5kIC8gdG90YWxEZW1hbmQgKiBjYXJnb1NwYWNlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KE51bWJlci5pc0Zpbml0ZShxdHkpKTtcclxuICAgICAgICAgICAgcGFydGl0aW9uLnNldChwcm9kdWN0LCBxdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcnRpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5leHRTdG9wKCkge1xyXG4gICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLm5leHRTdG9wSWR4KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVbbmV4dF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVEb2NrZWQoZ2FsYXh5OiBNb2RlbC5HYWxheHkpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RvcCA9IHRoaXMuZ2V0U3RvcCgpO1xyXG4gICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLmdldE5leHRTdG9wKCk7XHJcblxyXG4gICAgICAgIC8vIHN1bSBhbGwgZG93bnN0cmVhbSBkZW1hbmRzIGZyb20gdGhlIG5leHQgc3RvcFxyXG4gICAgICAgIGNvbnN0IHJvdXRlRGVtYW5kcyA9IE1vZGVsXHJcbiAgICAgICAgICAgIC5hbGxQcm9kdWN0cygpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgcHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZ2V0IGFsbCBkb3duc3RyZWFtIGNvbnN1bWVycyAoZW5kLXBvaW50cyBvZiBzaG9ydGVzdCBwYXRocylcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmljaXRTdW0gPSBBbGdvLnN1bSguLi5nYWxheHlcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0RG93bnN0cmVhbUNvbnN1bWVycyhwcm9kdWN0LCBzdG9wLCBuZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGNvbnN1bWVyKSA9PiBjb25zdW1lci5nZXREZWZpY2l0KGdhbGF4eSwgcHJvZHVjdCkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhY2NbcHJvZHVjdF0gKz0gZGVmaWNpdFN1bTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgIH0sIG5ldyBBcnJheTxudW1iZXI+KE1vZGVsLk5VTV9QUk9EVUNUUykuZmlsbCgwKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdvb2RzVW5sb2FkZWQgPSBuZXcgQXJyYXk8bnVtYmVyPihNb2RlbC5OVU1fUFJPRFVDVFMpLmZpbGwoMCk7XHJcblxyXG4gICAgICAgIC8vIHNlbGwgZ29vZHNcclxuICAgICAgICBmb3IgKGNvbnN0IFtwcm9kdWN0LCBxdHldIG9mIHRoaXMuY2FyZ28uZ2V0QWxsUXR5KCkpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChxdHkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1bmxvYWRlZCA9IHN0b3BcclxuICAgICAgICAgICAgICAgIC50cnlCdXkoXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FsYXh5LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZ28sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICBxdHksXHJcbiAgICAgICAgICAgICAgICAgICAgMCk7IC8vIE1vZGVsLk1hcmtldC5iYXNlUHJpY2UocHJvZHVjdCkpO1xyXG4gICAgICAgICAgICBnb29kc1VubG9hZGVkW3Byb2R1Y3RdICs9IHVubG9hZGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZXRpcmluZyB8fCAhZ2FsYXh5Lmhhc1RyYWRlUm91dGUoc3RvcCwgbmV4dCkpIHtcclxuICAgICAgICAgICAgLy8gdGhlcmUncyBhIGJldHRlciBwYXRoIHRoYW4gdGhlIGZsZWV0J3MgcGF0aCwgc28gcmV0aXJlXHJcbiAgICAgICAgICAgIGdhbGF4eS5yZW1vdmVGbGVldCh0aGlzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbG93VG9IaWdoID0gTW9kZWxcclxuICAgICAgICAgICAgLmFsbFByb2R1Y3RzKClcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHJvdXRlRGVtYW5kc1thXSAtIHJvdXRlRGVtYW5kc1tiXSk7XHJcblxyXG4gICAgICAgIC8vIGJ1eSBnb29kcyAtIHBhc3MgMSwgdHJ5IHRvIHNwcmVhZCBvdXQgZ29vZHMgaW5zdGVhZCBvZiBmaWxsaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBkZW1hbmRzID0gdGhpcy5wYXJ0aXRpb25DYXJnbyhyb3V0ZURlbWFuZHMsIGxvd1RvSGlnaCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3Byb2R1Y3QsIGRlbWFuZFF0eV0gb2YgZGVtYW5kcykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhcmdvLmdldEVtcHR5U3BhY2UoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNhbm5vdCBncmFiIGl0ZW1zIHRoYXQgaGF2ZSBiZWVuIHVubG9hZGVkXHJcbiAgICAgICAgICAgICAgICBpZiAoZ29vZHNVbmxvYWRlZFtwcm9kdWN0XSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpblN0b2NrID0gdGhpcy5jYXJnby5nZXRRdHkocHJvZHVjdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkbid0IGJ1eSBiYWNrIHVubG9hZGVkIGdvb2RzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwdXJjaGFzZVF0eSA9IGRlbWFuZFF0eSAtIGluU3RvY2sgLSBnb29kc1VubG9hZGVkW3Byb2R1Y3RdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHB1cmNoYXNlUXR5IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdHkgPSBNYXRoLm1pbihwdXJjaGFzZVF0eSwgdGhpcy5jYXJnby5nZXRFbXB0eVNwYWNlKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHF0eSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQocXR5ID4gMCk7XHJcbiAgICAgICAgICAgICAgICBzdG9wXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyeVNlbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbGF4eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJnbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbmZpbml0eSk7IC8vIE1vZGVsLk1hcmtldC5iYXNlUHJpY2UocHJvZHVjdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBidXkgZ29vZHMgLSBwYXNzIDIsIHRyeSB0byBmaWxsIGNhcmdvIHNwYWNlXHJcblxyXG4gICAgICAgIC8vIHBpY2sgYXQgbW9zdCAzIHR5cGVzIG9mIGdvb2RzIHRvIGZpbGwgY2FyZ28sIGZyb20gaGlnaGVzdCBkZW1hbmQgdG8gbG93ZXN0IGRlbWFuZFxyXG4gICAgICAgIGNvbnN0IGZpbGxRdHkgPSB0aGlzLmNhcmdvLmdldEVtcHR5U3BhY2UoKSAvIDM7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBJbW11dGFibGUuU2VxKGxvd1RvSGlnaCkucmV2ZXJzZSgpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jYXJnby5nZXRFbXB0eVNwYWNlKCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjYW5ub3QgZ3JhYiBpdGVtcyB0aGF0IGhhdmUgYmVlbiB1bmxvYWRlZFxyXG4gICAgICAgICAgICBpZiAoZ29vZHNVbmxvYWRlZFtwcm9kdWN0XSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpblN0b2NrID0gdGhpcy5jYXJnby5nZXRRdHkocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlRGVtYW5kID0gcm91dGVEZW1hbmRzW3Byb2R1Y3RdO1xyXG4gICAgICAgICAgICBjb25zdCBwdXJjaGFzZVF0eSA9IHJvdXRlRGVtYW5kIC0gaW5TdG9jayAtIGdvb2RzVW5sb2FkZWRbcHJvZHVjdF07XHJcbiAgICAgICAgICAgIGlmIChwdXJjaGFzZVF0eSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0cnkgdG8gZmlsbCB0aGUgcmVtYWluaW5nIGNhcmdvIHNwYWNlXHJcbiAgICAgICAgICAgIGNvbnN0IHF0eSA9IE1hdGgubWluKGZpbGxRdHksIHRoaXMuY2FyZ28uZ2V0RW1wdHlTcGFjZSgpKTtcclxuICAgICAgICAgICAgc3RvcFxyXG4gICAgICAgICAgICAgICAgLnRyeVNlbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FsYXh5LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZ28sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICBxdHksXHJcbiAgICAgICAgICAgICAgICAgICAgSW5maW5pdHkpOyAvLyBNb2RlbC5NYXJrZXQuYmFzZVByaWNlKHByb2R1Y3QpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTdG9wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlW3RoaXMucm91dGVBdF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZXh0U3RvcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZVt0aGlzLm5leHRTdG9wSWR4KCldO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV4dFN0b3BJZHgoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnJvdXRlQXQgKyAxKSAlIHRoaXMucm91dGUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TW92ZU5leHRTdG9wKCkge1xyXG4gICAgICAgIC8vIHNldCBuZXh0IHN0b3AgYW5kIHRoZW4gdHJhdmVsXHJcbiAgICAgICAgdGhpcy5yb3V0ZUF0ID0gdGhpcy5uZXh0U3RvcElkeCgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBNb2RlbC5GbGVldFN0YXRlLk1vdmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVNb3ZlKGdhbGF4eTogTW9kZWwuR2FsYXh5KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0b3AgPSB0aGlzLnJvdXRlW3RoaXMucm91dGVBdF07XHJcbiAgICAgICAgY29uc3QgZGVzdCA9IGdhbGF4eS5nZXRDb29yKHN0b3ApO1xyXG5cclxuICAgICAgICBjb25zdCB7IG5vd0F0IH0gPSBnYWxheHkubW92ZSh0aGlzLCBkZXN0LCB0aGlzLmdldFNwZWVkKGdhbGF4eSkpO1xyXG5cclxuICAgICAgICBpZiAoQWxnby5lcXVhbDJEKG5vd0F0LCBkZXN0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gTW9kZWwuRmxlZXRTdGF0ZS5Eb2NrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbC9mbGVldC50cyIsImltcG9ydCAqIGFzIE1vZGVsIGZyb20gXCIuL21vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhbmV0IGltcGxlbWVudHMgTW9kZWwuSUxvY2F0YWJsZSB7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IGtpbmQgPSBNb2RlbC5NYXBEYXRhS2luZC5QbGFuZXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHJlc291cmNlOiBNb2RlbC5SYXdNYXRlcmlhbCxcclxuICAgICAgICBwcml2YXRlIGNvbG9ueT86IE1vZGVsLkNvbG9ueSxcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBNb2RlbC5JUGxhbmV0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgcmVzb3VyY2U6IHRoaXMucmVzb3VyY2UsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29sb25pemVkKGNvbG9ueTogTW9kZWwuQ29sb255KSB7XHJcbiAgICAgICAgdGhpcy5jb2xvbnkgPSBjb2xvbnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbG9ueSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xvbnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzQ29sb25pemVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9ueSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbC9wbGFuZXQudHMiLCJcclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2ZXI8TW9kZWxULCBDaGFubmVsVD4ge1xyXG4gICAgdXBkYXRlKG1vZGVsOiBNb2RlbFQsIGNoYW5uZWxzOiBTZXQ8Q2hhbm5lbFQ+KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1YmplY3Q8TW9kZWxULCBDaGFubmVsVD4ge1xyXG5cclxuICAgIHByaXZhdGUgb2JzZXJ2ZXJzID0gbmV3IFNldDxJT2JzZXJ2ZXI8TW9kZWxULCBDaGFubmVsVD4+KCk7XHJcbiAgICBwcml2YXRlIHVwZGF0ZVNldCA9IG5ldyBTZXQ8Q2hhbm5lbFQ+KCk7XHJcblxyXG4gICAgcHVibGljIHN1YnNjcmliZSguLi5vYnNlcnZlcnM6IEFycmF5PElPYnNlcnZlcjxNb2RlbFQsIENoYW5uZWxUPj4pIHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChvYnNlcnZlcnMuZXZlcnkoKG8pID0+ICF0aGlzLm9ic2VydmVycy5oYXMobykpLCBcImdvIGZpeCBjYWxsZXI6IGR1cGxpY2F0ZSBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvblwiKTtcclxuXHJcbiAgICAgICAgb2JzZXJ2ZXJzLmZvckVhY2goKG8pID0+IHRoaXMub2JzZXJ2ZXJzLmFkZChvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVuc3Vic2NyaWJlKG9ic2VydmVyOiBJT2JzZXJ2ZXI8TW9kZWxULCBDaGFubmVsVD4pIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHJlc3VsdCwgXCJmaXggY2FsbGVyOiBvYnNlcnZhYmxlIGRvZXNuJ3QgZXhpdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcXVldWVVcGRhdGUoLi4uY2hhbm5lbFR5cGVzOiBDaGFubmVsVFtdKSB7XHJcbiAgICAgICAgY2hhbm5lbFR5cGVzLmZvckVhY2goKGNoYW5uZWwpID0+IHRoaXMudXBkYXRlU2V0LmFkZChjaGFubmVsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShtb2RlbDogTW9kZWxUKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZhYmxlIG9mIHRoaXMub2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUudXBkYXRlKG1vZGVsLCB0aGlzLnVwZGF0ZVNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlU2V0LmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTZXQuY2xlYXIoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb2JzZXJ2ZXIudHMiLCJpbXBvcnQgKiBhcyBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgeyBHYW1lLCBVcGRhdGVDaGFubmVsIH0gZnJvbSBcIi4uL2dhbWVcIjtcclxuaW1wb3J0IHsgRHJhd1RhYmxlIH0gZnJvbSBcIi4uL2h0bWxcIjtcclxuaW1wb3J0ICogYXMgTW9kZWwgZnJvbSBcIi4uL21vZGVsL21vZGVsXCI7XHJcbmltcG9ydCAqIGFzIFZpZXcgZnJvbSBcIi4vdmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZsZWV0VmlldyBpbXBsZW1lbnRzIFZpZXcuT2JzZXJ2ZXIge1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnRlbnRzOiBWaWV3Lk9ic2VydmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aGVDb250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2FtZTogR2FtZSxcclxuICAgICAgICBwcml2YXRlIGZsZWV0OiBNb2RlbC5GbGVldCxcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0ICR0aXRsZSA9IFZpZXcuJGNyZWF0ZVRpdGxlYmFyKGdhbWUsIHRoaXMsIGBUcmFkZXIgJHtmbGVldC5pZH1gKTtcclxuICAgICAgICBjb25zdCAkY29udGVudFBhbmVsID0gVmlldy4kYWRkQ29udGVudFBhbmVsQ2xhc3ModGhpcy50aGVDb250ZW50cyk7XHJcblxyXG4gICAgICAgIGNvbnN0ICR0YWJzID0gJChcIjxuYXY+XCIpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcInRhYnNcIilcclxuICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICQoXCI8ZGl2PlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KFwiUm91dGVcIilcclxuICAgICAgICAgICAgICAgICAgICAuY2xpY2soKCkgPT4gdGhpcy5zZXRSb3V0ZVBhbmVsKGdhbWUpKSxcclxuICAgICAgICAgICAgICAgICQoXCI8ZGl2PlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KFwiQ2FyZ29cIilcclxuICAgICAgICAgICAgICAgICAgICAuY2xpY2soKCkgPT4gdGhpcy5zZXRDYXJnb1BhbmVsKCkpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRSb3V0ZVBhbmVsKGdhbWUpO1xyXG5cclxuICAgICAgICBWaWV3XHJcbiAgICAgICAgICAgIC4kYWRkUGFuZWxDbGFzcyh0aGlzKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCR0aXRsZSwgJHRhYnMsICRjb250ZW50UGFuZWwpXHJcbiAgICAgICAgICAgIC5tb3VzZWRvd24oKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIFZpZXcubWFrZURyYWdnYWJsZSh0aGlzLnZpZXcsIGUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVmlldy5icmluZ1RvRnJvbnQodGhpcy52aWV3KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZ2FtZTogR2FtZSwgY2hhbm5lbHM6IFNldDxVcGRhdGVDaGFubmVsPikge1xyXG5cclxuICAgICAgICBpZiAoIWdhbWUuZ2FsYXh5LmV4aXN0cyh0aGlzLmZsZWV0KSkge1xyXG4gICAgICAgICAgICBnYW1lLmNsb3NlKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50cy51cGRhdGUoZ2FtZSwgY2hhbm5lbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Um91dGVQYW5lbChnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IG5ldyBSb3V0ZVBhbmVsKGdhbWUsIHRoaXMudGhlQ29udGVudHMsIHRoaXMuZmxlZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Q2FyZ29QYW5lbCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzID0gbmV3IENhcmdvUGFuZWwodGhpcy50aGVDb250ZW50cywgdGhpcy5mbGVldCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJvdXRlUGFuZWwgaW1wbGVtZW50cyBWaWV3Lk9ic2VydmVyIHtcclxuXHJcbiAgICBwcml2YXRlIHRhYmxlRHJhd2VyOiBEcmF3VGFibGU8TW9kZWwuQ29sb255PjtcclxuICAgIHByaXZhdGUgb2JzZXJ2ZXI6IFZpZXcuT2JzZXJ2ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcmVhZG9ubHkgZ2FtZTogR2FtZSxcclxuICAgICAgICByZWFkb25seSB2aWV3OiBIVE1MRWxlbWVudCxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGZsZWV0OiBNb2RlbC5GbGVldCxcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGdhbGF4eSA9IGdhbWUuZ2FsYXh5O1xyXG4gICAgICAgIHRoaXMudGFibGVEcmF3ZXIgPSBuZXcgRHJhd1RhYmxlPE1vZGVsLkNvbG9ueT4oW1xyXG4gICAgICAgICAgICBbXCJQbGFjZVwiLCB1bmRlZmluZWRdLFxyXG4gICAgICAgICAgICBbXCJEZXN0XCIsIHVuZGVmaW5lZF0sXHJcbiAgICAgICAgXSwgKCkgPT4gdGhpcy51cGRhdGUoZ2FtZSwgbmV3IFNldChbVXBkYXRlQ2hhbm5lbC5EYXRhQ2hhbmdlXSkpKTtcclxuXHJcbiAgICAgICAgY29uc3QgJHNwZWVkTGFiZWwgPSAkKFwiPHNwYW4+XCIpO1xyXG4gICAgICAgIGNvbnN0ICRzcGVlZCA9ICQoXCI8ZGl2PlwiKVxyXG4gICAgICAgICAgICAudGV4dChcIlNwZWVkOiBcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIlRoZSBzcGVlZCBpbmRpY2F0ZXMgaG93IGZhciB0aGUgdHJhZGVyIGlzIGdvaW5nIHRvIG1vdmUgcGVyIGRheS5cIilcclxuICAgICAgICAgICAgLmFwcGVuZCgkc3BlZWRMYWJlbCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRidXR0b24gPSAkKFwiPGJ1dHRvbj5cIilcclxuICAgICAgICAgICAgLnRleHQoXCJSZXRpcmUgdHJhZGVyXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJUaGUgdHJhZGVyIHdpbGwgcmV0dXJuIHRvIHRoZSB0cmFkZXIgcG9vbCBhbmQgdG8gYmUgcmVhc3NpZ25lZC5cIilcclxuICAgICAgICAgICAgLmNsaWNrKCgpID0+IGZsZWV0LnJldGlyZSgpKTtcclxuICAgICAgICBjb25zdCAkZ2VuZXJhbCA9ICQoXCI8ZmllbGRzZXQ+XCIpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAkKFwiPGxlZ2VuZD5cIikudGV4dChcIkdlbmVyYWxcIiksXHJcbiAgICAgICAgICAgICAgICAkc3BlZWQsXHJcbiAgICAgICAgICAgICAgICAkYnV0dG9uLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRyb3V0ZSA9ICQoXCI8ZmllbGRzZXQ+XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJUaGlzIHRhYmxlIHNob3dzIGEgbGlzdCBvZiBwbGFjZXMgdGhhdCB0aGUgdHJhZGVyIGlzIGdvaW5nIHRvIHRyYWRlci4gRGVzdCBtZWFucyB0aGUgdHJhZGVyIGlzIGhlYWRpbmcgdG93YXJkcyB0aGF0IHBsYWNlLlwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgJChcIjxsZWdlbmQ+XCIpLnRleHQoXCJSb3V0ZVwiKSxcclxuICAgICAgICAgICAgICAgIHRoaXMudGFibGVEcmF3ZXIuJGdldFRhYmxlKCksXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgJCh2aWV3KVxyXG4gICAgICAgICAgICAuZW1wdHkoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCRnZW5lcmFsLCAkcm91dGUpO1xyXG5cclxuICAgICAgICB0aGlzLm9ic2VydmVyID0ge1xyXG4gICAgICAgICAgICB1cGRhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICRidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZsZWV0LmlzUmV0aXJlKCkpO1xyXG4gICAgICAgICAgICAgICAgJHNwZWVkTGFiZWwudGV4dCh0aGlzLmZsZWV0LmdldFNwZWVkKGdhbGF4eSkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGdhbWU6IEdhbWUsIGNoYW5uZWxzOiBTZXQ8VXBkYXRlQ2hhbm5lbD4pIHtcclxuXHJcbiAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcblxyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIudXBkYXRlKGdhbWUsIGNoYW5uZWxzKTtcclxuXHJcbiAgICAgICAgdGhpcy50YWJsZURyYXdlclxyXG4gICAgICAgICAgICAucmVuZGVyKHRoaXMuZmxlZXQuZ2V0Um91dGUoKSwgKHN0b3ApID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvbWVQbGFuZXQgPSBzdG9wLmdldEhvbWVQbGFuZXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IGdhbGF4eS5nZXRDb29yKGhvbWVQbGFuZXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29vciA9IGBQbGFuZXQgJHtob21lUGxhbmV0LmlkfSAtICgke3gudG9GaXhlZCgyKX0sJHt5LnRvRml4ZWQoMil9KWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRoaXMuZmxlZXQuZ2V0Um91dGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0ID0gdGhpcy5mbGVldC5nZXRSb3V0ZUF0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0Rlc3QgPSByb3V0ZVthdF0gPT09IHN0b3A7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNEZXN0ID8gYDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGVjazwvaT5gIDogXCJcIixcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDYXJnb1BhbmVsIGltcGxlbWVudHMgVmlldy5PYnNlcnZlciB7XHJcblxyXG4gICAgcHJpdmF0ZSB0YWJsZURyYXdlciA9IG5ldyBEcmF3VGFibGU8W01vZGVsLlByb2R1Y3QsIG51bWJlcl0+KFtcclxuICAgICAgICBbXCJHb29kc1wiLCAoW3Byb2R1Y3RBXSwgW3Byb2R1Y3RCXSkgPT4gcHJvZHVjdEEgLSBwcm9kdWN0Ql0sXHJcbiAgICAgICAgW1wiUXR5XCIsIChbLCBxdHlBXSwgWywgcXR5Ql0pID0+IHF0eUEgLSBxdHlCXSxcclxuICAgIF0sICgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHJlYWRvbmx5IHZpZXc6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIHByaXZhdGUgZmxlZXQ6IE1vZGVsLkZsZWV0LFxyXG4gICAgKSB7XHJcbiAgICAgICAgJCh2aWV3KVxyXG4gICAgICAgICAgICAuZW1wdHkoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMudGFibGVEcmF3ZXIuJGdldFRhYmxlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZURyYXdlclxyXG4gICAgICAgICAgICAucmVuZGVyKEltbXV0YWJsZVxyXG4gICAgICAgICAgICAgICAgLlNlcSh0aGlzLmZsZWV0LmdldENhcmdvKCkuZ2V0QWxsUXR5KCkpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChbcXR5XSkgPT4gcXR5ID4gMClcclxuICAgICAgICAgICAgICAgIC50b0FycmF5KCksXHJcbiAgICAgICAgICAgICAgICAoW3Byb2R1Y3QsIHF0eV0pID0+IFtcclxuICAgICAgICAgICAgICAgICAgICBNb2RlbC5Qcm9kdWN0W3Byb2R1Y3RdLFxyXG4gICAgICAgICAgICAgICAgICAgIHF0eSxcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L2ZsZWV0dmlldy50cyIsImltcG9ydCB7IEdhbWUsIElTYXZlRGF0YSB9IGZyb20gXCIuLi9nYW1lXCI7XHJcbmltcG9ydCAqIGFzIFZpZXcgZnJvbSBcIi4vdmlld1wiO1xyXG5cclxuZGVjbGFyZSBjbGFzcyBMWlN0cmluZyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbXByZXNzVG9CYXNlNjQoaW5wdXQ6IHN0cmluZyk6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdGF0aWMgZGVjb21wcmVzc0Zyb21CYXNlNjQoaW5wdXQ6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gdG9TYXZlKGdhbWU6IEdhbWUpIHtcclxuICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShnYW1lLnNlcmlhbGl6ZSgpKTtcclxuICAgIGNvbnN0IHdpdGhMZW4gPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAganNvbixcclxuICAgICAgICBsZW46IGpzb24ubGVuZ3RoLCAvLyBhY3RzIGFzIGEgc2ltcGxlIGNoZWNrc3VtXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBMWlN0cmluZy5jb21wcmVzc1RvQmFzZTY0KHdpdGhMZW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tU2F2ZShpbnB1dDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB3aXRoTGVuID0gTFpTdHJpbmcuZGVjb21wcmVzc0Zyb21CYXNlNjQoaW5wdXQpO1xyXG4gICAgY29uc3QganNvbiA9IEpTT04ucGFyc2Uod2l0aExlbikgYXMgeyBsZW46IG51bWJlciwganNvbjogc3RyaW5nIH07XHJcbiAgICBpZiAoXHJcbiAgICAgICAganNvbiAmJlxyXG4gICAgICAgIE51bWJlci5pc1NhZmVJbnRlZ2VyKGpzb24ubGVuKSAmJlxyXG4gICAgICAgIHR5cGVvZiBqc29uLmpzb24gPT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgICBqc29uLmxlbiA9PT0ganNvbi5qc29uLmxlbmd0aFxyXG4gICAgKSB7XHJcbiAgICAgICAgLy8gbGlrZWx5IGEgdmFsaWQgc2F2ZSwgY2xvc2UgZW5vdWdoXHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbi5qc29uKSBhcyBJU2F2ZURhdGE7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3QgYSB2YWxpZCBzYXZlXCIpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW1wb3J0RXhwb3J0VmlldyBpbXBsZW1lbnRzIFZpZXcuT2JzZXJ2ZXIge1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBnYW1lOiBHYW1lLFxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgJHRpdGxlID0gVmlldy4kY3JlYXRlVGl0bGViYXIoZ2FtZSwgdGhpcywgYEltcG9ydC9FeHBvcnQgU2F2ZWApO1xyXG4gICAgICAgIGNvbnN0ICRjb250ZW50UGFuZWwgPSBWaWV3LiRhZGRDb250ZW50UGFuZWxDbGFzcygpO1xyXG5cclxuICAgICAgICBjb25zdCAkdGV4dGFyZWEgPSAkKFwiPHRleHRhcmVhPlwiKVxyXG4gICAgICAgICAgICAud2lkdGgoXCIzNTBweFwiKVxyXG4gICAgICAgICAgICAuaGVpZ2h0KFwiMzAwcHhcIilcclxuICAgICAgICAgICAgLnByb3AoXCJzcGVsbGNoZWNrXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICAudmFsKHRvU2F2ZShnYW1lKSlcclxuICAgICAgICAgICAgLmJsdXIoKCkgPT4gJCh0aGlzKS5mb2N1cygpKVxyXG4gICAgICAgICAgICAubW91c2Vtb3ZlKCgpID0+IFZpZXcuc3VzcGVuZERyYWdnYWJsZSgpKVxyXG4gICAgICAgICAgICAuY2xpY2soKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpIC8vIGF2b2lkIGJyaW5naW5nIHRoZSB2aWV3IHRvIGZyb250IChoZW5jZSBsb3NpbmcgZm9jdXMpXHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgY29uc3QgJGNsZWFyQnV0dG9uID0gJChcIjxidXR0b24+XCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwiY2xlYXJcIilcclxuICAgICAgICAgICAgLmNsaWNrKCgpID0+ICR0ZXh0YXJlYS52YWwoXCJcIikpO1xyXG5cclxuICAgICAgICBjb25zdCAkaW1wb3J0QnV0dG9uID0gJChcIjxidXR0b24+XCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwiaW1wb3J0XCIpXHJcbiAgICAgICAgICAgIC5jbGljayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVEYXRhID0gZnJvbVNhdmUoJHRleHRhcmVhLnZhbCgpIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5yZWxvYWQoc2F2ZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGdhbWUuc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcImludmFsaWQgc2F2ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRjb3B5QnV0dG9uID0gJChcIjxidXR0b24+XCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwiY29weSB0byBjbGlwYm9hcmRcIilcclxuICAgICAgICAgICAgLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICR0ZXh0YXJlYS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiQ29weVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRyZWZyZXNoQnV0dG9uID0gJChcIjxidXR0b24+XCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwicmVmcmVzaFwiKVxyXG4gICAgICAgICAgICAuY2xpY2soKCkgPT4gJHRleHRhcmVhLnRleHQodG9TYXZlKGdhbWUpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRyZXN0YXJ0QnV0dG9uID0gJChcIjxidXR0b24+XCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwicmVzdGFydFwiKVxyXG4gICAgICAgICAgICAuY2xpY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNPayA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzT2spIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGdhbWUuc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRQYW5lbC5hcHBlbmQoXHJcbiAgICAgICAgICAgICR0ZXh0YXJlYSxcclxuICAgICAgICAgICAgJChcIjxkaXY+XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICRjbGVhckJ1dHRvbixcclxuICAgICAgICAgICAgICAgICRpbXBvcnRCdXR0b24sXHJcbiAgICAgICAgICAgICAgICAkY29weUJ1dHRvbixcclxuICAgICAgICAgICAgICAgICRyZWZyZXNoQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgJHJlc3RhcnRCdXR0b24sXHJcbiAgICAgICAgICAgICkpO1xyXG5cclxuICAgICAgICBWaWV3XHJcbiAgICAgICAgICAgIC4kYWRkUGFuZWxDbGFzcyh0aGlzKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCR0aXRsZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkY29udGVudFBhbmVsKVxyXG4gICAgICAgICAgICAubW91c2Vkb3duKChlKSA9PiBWaWV3Lm1ha2VEcmFnZ2FibGUodGhpcy52aWV3LCBlKSlcclxuICAgICAgICAgICAgLmNsaWNrKCgpID0+IFZpZXcuYnJpbmdUb0Zyb250KHRoaXMudmlldykpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgICAgIC8vIG5vdGhpbmdcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9pbXBvcnRleHBvcnR2aWV3LnRzIiwiaW1wb3J0ICogYXMgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0ICogYXMgQWxnbyBmcm9tIFwiLi4vYWxnb3JpdGhtL2FsZ29yaXRobVwiO1xyXG5pbXBvcnQgeyBHYW1lLCBJU2F2ZURhdGEsIFVwZGF0ZUNoYW5uZWwgfSBmcm9tIFwiLi4vZ2FtZVwiO1xyXG5pbXBvcnQgKiBhcyBNb2RlbCBmcm9tIFwiLi4vbW9kZWwvbW9kZWxcIjtcclxuaW1wb3J0ICogYXMgVmlldyBmcm9tIFwiLi4vdmlldy92aWV3XCI7XHJcblxyXG5jb25zdCBNSU5fR1JJRF9TSVpFID0gNTA7XHJcbmNvbnN0IE1BWF9HUklEX1NJWkUgPSAzMDA7XHJcbmNvbnN0IFVJX0lOVEVSVkFMID0gMTc7XHJcbmNvbnN0IFJBRElVUyA9IDMgLyAxMDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1hcFZpZXdBY3Rpb24ge1xyXG4gICAgaGFuZGxlU2VsZWN0ZWQodmlldzogTWFwVmlldywgZ2FtZTogR2FtZSwgY29vcjogTW9kZWwuQ29vclQpOiBib29sZWFuO1xyXG4gICAgaGFuZGxlWm9vbSh2aWV3OiBNYXBWaWV3LCBnYW1lOiBHYW1lKTogYm9vbGVhbjtcclxuICAgIGdldFRleHRzKHZpZXc6IE1hcFZpZXcsIGdhbWU6IEdhbWUpOiBzdHJpbmdbXTtcclxufVxyXG5cclxuY29uc3Qgc2V0dXA6IElNYXBWaWV3QWN0aW9uID0ge1xyXG4gICAgaGFuZGxlU2VsZWN0ZWQ6ICh2aWV3OiBNYXBWaWV3LCBnYW1lOiBHYW1lLCBjb29yOiBNb2RlbC5Db29yVCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdhbGF4eSA9IGdhbWUuZ2FsYXh5O1xyXG4gICAgICAgIGNvbnN0IG9ianMgPSBnYWxheHkuc2VhcmNoTmVhcmJ5T2Jqcyhjb29yLCAwLjEpLnRvQXJyYXkoKTtcclxuICAgICAgICBpZiAob2Jqcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgcGxhbmV0ID0gb2Jqc1swXSBhcyBNb2RlbC5QbGFuZXQ7XHJcbiAgICAgICAgICAgIGlmIChwbGFuZXQua2luZCA9PT0gTW9kZWwuTWFwRGF0YUtpbmQuUGxhbmV0ICYmXHJcbiAgICAgICAgICAgICAgICBwbGFuZXQucmVzb3VyY2UgPT09IE1vZGVsLlByb2R1Y3QuQ3JvcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb255ID0gZ2FsYXh5LmNvbG9uaXplUGxhbmV0KHBsYW5ldCwgMTApO1xyXG4gICAgICAgICAgICAgICAgY29sb255LmV4cGFuZFBvd2VyUGxhbmV0KGdhbGF4eSk7XHJcbiAgICAgICAgICAgICAgICB2aWV3LnNldEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5xdWV1ZVVwZGF0ZShVcGRhdGVDaGFubmVsLk1hcENoYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZVpvb206ICgpID0+IGZhbHNlLFxyXG4gICAgZ2V0VGV4dHM6ICgpID0+IFtcclxuICAgICAgICBcIkhlbGxvLiBTZWxlY3QgYSBmb29kLXByb2R1Y2luZyAoZ3JlZW4pIHBsYW5ldCB0b1wiLFxyXG4gICAgICAgIFwiYmUgeW91ciBzdGFydGluZyBwbGFuZXQsIHRoZW4gdW5wYXVzZSB0aGUgZ2FtZVwiLFxyXG4gICAgICAgIFwiKGJ1dHRvbiBpbiB0b3AtcmlnaHQgY29ybmVyKS4gQWZ0ZXIgeW91J3JlIGRvbmUsXCIsXHJcbiAgICAgICAgXCJtb3VzZSBvdmVyIHRoZSB1c2VyIGludGVyZmFjZSwgbGlrZSBsYWJlbHMsXCIsXHJcbiAgICAgICAgXCJidXR0b25zLCB0YWJsZXMsIHRvIHNlZSB0aGUgdG9vbHRpcHMgYWJvdXQgZ2FtZVwiLFxyXG4gICAgICAgIFwiY29uY2VwdHMsIGVzcGVjaWFsbHkgdGhlIG1hcmtldCBwYW5lbCBvblwiLFxyXG4gICAgICAgIFwiY29sb25pemVkIHBsYW5ldHMsIHdoaWNoIGV4cGxhaW5zIHRoZSBnYW1lXCIsXHJcbiAgICAgICAgXCJlY29ub21pY3MuIEZlZWwgZnJlZSB0byBjbGljayBvbiBhbnkgY29sb3JlZCBpdGVtc1wiLFxyXG4gICAgICAgIFwib24gdGhlIG1hcCwgYXMgdGhleSBhcmUgaW50ZXJhY3RpdmUuXCIsXHJcbiAgICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWFwVmlld1NhdmVEYXRhIHtcclxuICAgIHRvcExlZnQ6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICBncmlkU2l6ZTogbnVtYmVyO1xyXG4gICAgaGFzU2V0dXA6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXBWaWV3IGltcGxlbWVudHMgVmlldy5PYnNlcnZlciB7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG4gICAgLy8gVUkgZGF0YVxyXG4gICAgcHJpdmF0ZSB0b3BMZWZ0OiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDBdO1xyXG4gICAgcHJpdmF0ZSBncmlkU2l6ZSA9IE1JTl9HUklEX1NJWkU7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50QWN0aW9uPzogSU1hcFZpZXdBY3Rpb247XHJcbiAgICBwcml2YXRlIGNhY2hlZEdyaWQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBwaWQ/OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgc2F2ZURhdGE/OiBJU2F2ZURhdGEpIHtcclxuICAgICAgICBbLCB0aGlzLmNvbnRleHRdID0gdGhpcy5nZXRDYW52YXNDb250ZXh0KHRoaXMudmlldyk7XHJcbiAgICAgICAgdGhpcy5jYWNoZWRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuXHJcbiAgICAgICAgJChcIiNtYXBDb250YWluZXJcIilcclxuICAgICAgICAgICAgLmVtcHR5KClcclxuICAgICAgICAgICAgLmFwcGVuZCh0aGlzLnZpZXcpO1xyXG5cclxuICAgICAgICAkKHRoaXMudmlldykuYXR0cihcImlkXCIsIFwibWFwXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBnZXN0dXJlID0gbmV3IEhhbW1lci5NYW5hZ2VyKHRoaXMudmlldyk7XHJcbiAgICAgICAgY29uc3QgZG91YmxlID0gbmV3IEhhbW1lci5UYXAoeyBldmVudDogXCJkb3VibGV0YXBcIiwgdGFwczogMiB9KTtcclxuICAgICAgICBjb25zdCBzaW5nbGUgPSBuZXcgSGFtbWVyLlRhcCh7IGV2ZW50OiBcInNpbmdsZXRhcFwiIH0pO1xyXG4gICAgICAgIGNvbnN0IHBhbiA9IG5ldyBIYW1tZXIuUGFuKClcclxuICAgICAgICAgICAgLnNldCh7IGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEwgfSk7XHJcbiAgICAgICAgZ2VzdHVyZS5hZGQoW1xyXG4gICAgICAgICAgICBuZXcgSGFtbWVyLlBpbmNoKCksXHJcbiAgICAgICAgICAgIGRvdWJsZSxcclxuICAgICAgICAgICAgc2luZ2xlLFxyXG4gICAgICAgICAgICBwYW4sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgZG91YmxlLnJlY29nbml6ZVdpdGgoc2luZ2xlKTtcclxuICAgICAgICBzaW5nbGUucmVxdWlyZUZhaWx1cmUoZG91YmxlKTtcclxuXHJcbiAgICAgICAgLy8gc2V0dXAgZXZlbnRzXHJcbiAgICAgICAgZ2VzdHVyZS5vbihcInNpbmdsZXRhcFwiLCAoZSkgPT4gdGhpcy5jbGljayhnYW1lLCBlKSk7XHJcbiAgICAgICAgZ2VzdHVyZS5vbihcImRvdWJsZXRhcFwiLCAoZSkgPT4gdGhpcy5kYmxjbGljayhnYW1lLCBlKSk7XHJcbiAgICAgICAgZ2VzdHVyZS5vbihcInBpbmNoXCIsIChlKSA9PiB0aGlzLndoZWVsKGdhbWUsIGUpKTtcclxuICAgICAgICBnZXN0dXJlLm9uKFwicGFuXCIsIChlKSA9PiB0aGlzLnBhbihnYW1lLCBlKSk7XHJcblxyXG4gICAgICAgIC8vIG1vdXNlIHdoZWVsIGV2ZW50IGhhbmRsZWQgc2VwYXJhdGVseVxyXG4gICAgICAgICgkKHRoaXMudmlldykgYXMgSlF1ZXJ5PEhUTUxDYW52YXNFbGVtZW50PilcclxuICAgICAgICAgICAgLm9uKFwid2hlZWxcIiwgKGUpID0+IHRoaXMud2hlZWwoZ2FtZSwgZS5vcmlnaW5hbEV2ZW50IGFzIFdoZWVsRXZlbnQpKTtcclxuXHJcbiAgICAgICAgaWYgKHNhdmVEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcFZpZXdTYXZlID0gc2F2ZURhdGEubWFwVmlld1NhdmU7XHJcbiAgICAgICAgICAgIGlmICghbWFwVmlld1NhdmUgfHwgIW1hcFZpZXdTYXZlLmhhc1NldHVwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmaXJzdC10aW1lIHNldHVwIGJvbnVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBzZXR1cDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFNpemUgPSBtYXBWaWV3U2F2ZS5ncmlkU2l6ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wTGVmdCA9IG1hcFZpZXdTYXZlLnRvcExlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lIHNldHVwIGJvbnVzXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IHNldHVwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBJTWFwVmlld1NhdmVEYXRhIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3BMZWZ0OiB0aGlzLnRvcExlZnQsXHJcbiAgICAgICAgICAgIGdyaWRTaXplOiB0aGlzLmdyaWRTaXplLFxyXG4gICAgICAgICAgICBoYXNTZXR1cDogdGhpcy5jdXJyZW50QWN0aW9uID09PSB1bmRlZmluZWQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QWN0aW9uKGFjdGlvbj86IElNYXBWaWV3QWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZ2FtZTogR2FtZSwgY2hhbm5lbHM6IFNldDxVcGRhdGVDaGFubmVsPikge1xyXG4gICAgICAgIGNvbnN0ICR2aWV3ID0gJCh0aGlzLnZpZXcpIGFzIEpRdWVyeTxIVE1MQ2FudmFzRWxlbWVudD47XHJcblxyXG4gICAgICAgIC8vIHNldCB1cCB0aGUgc2l6ZSBvZiB0aGUgY2FudmFzXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGF0dHJXaWR0aCA9IE51bWJlcigkdmlldy5hdHRyKFwid2lkdGhcIikpO1xyXG4gICAgICAgIGNvbnN0IGF0dHJIZWlnaHQgPSBOdW1iZXIoJHZpZXcuYXR0cihcImhlaWdodFwiKSk7XHJcbiAgICAgICAgaWYgKGF0dHJXaWR0aCAhPT0gd2lkdGggfHwgaGVpZ2h0ICE9PSBhdHRySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICR2aWV3XHJcbiAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLndpZHRoKHdpZHRoKVxyXG4gICAgICAgICAgICAgICAgLmhlaWdodChoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYWNoZWRHcmlkLndpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZWRHcmlkLmhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYWNoZWRHcmlkID0gdGhpcy5kcmF3R3JpZChnYW1lKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoYW5uZWxzLmhhcyhVcGRhdGVDaGFubmVsLk1hcENoYW5nZSkpIHtcclxuICAgICAgICAgICAgLy8gdXN1YWxseSB0aGlzIGhhcHBlbnMgd2hlbmV2ZXIgdGhlIHVzZXIgbWFuaXB1bGF0ZXMgdGhlIFVJXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkR3JpZCA9IHRoaXMuZHJhd0dyaWQoZ2FtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkcmF3IHRoZSBtYXBcclxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FjaGVkR3JpZCwgMCwgMCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmRyYXdPYmplY3RzKGdhbWUpLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRyYXdBY3Rpb25UZXh0KGdhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd0FjdGlvblRleHQoZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudEFjdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRleHRzID0gdGhpcy5jdXJyZW50QWN0aW9uLmdldFRleHRzKHRoaXMsIGdhbWUpO1xyXG4gICAgICAgIGlmICh0ZXh0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gICAgICAgIGN0eC5mb250ID0gXCIxMnB0IHNhbnMtc2VyaWZcIjtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IHRleHQgb2YgdGhpcy5jdXJyZW50QWN0aW9uLmdldFRleHRzKHRoaXMsIGdhbWUpKSB7XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCBNYXRoLmNlaWwodGhpcy52aWV3LndpZHRoIC8gMiksIE1hdGguY2VpbCh0aGlzLnZpZXcuaGVpZ2h0IC8gMikgKyBvZmZzZXQpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gMTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDYW52YXNDb250ZXh0KGNhbnZhcz86IEhUTUxDYW52YXNFbGVtZW50KTogW0hUTUxDYW52YXNFbGVtZW50LCBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRdIHtcclxuICAgICAgICBpZiAoIWNhbnZhcykge1xyXG4gICAgICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IGNyZWF0ZSBjb250ZXh0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW2NhbnZhcywgY29udGV4dF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3T2JqZWN0cyhnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcbiAgICAgICAgY29uc3QgW2NhbnZhcywgY3R4XSA9IHRoaXMuZ2V0Q2FudmFzQ29udGV4dCgpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBncm91cHMgPSBJbW11dGFibGVcclxuICAgICAgICAgICAgLlNlcShnYWxheHkuZ2V0T2JqcygpKVxyXG4gICAgICAgICAgICAuZ3JvdXBCeSgoW3hdKSA9PiB4LmtpbmQpO1xyXG5cclxuICAgICAgICBjb25zdCBkcmF3RmxlZXRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmbGVldEdyb3VwID0gZ3JvdXBzLmdldChNb2RlbC5NYXBEYXRhS2luZC5GbGVldCk7XHJcbiAgICAgICAgICAgIGlmICghZmxlZXRHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGZsZWV0cyA9IGZsZWV0R3JvdXAudmFsdWVzKCk7XHJcblxyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ5ZWxsb3dcIjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBbb2JqLCBjb29yXSBvZiBmbGVldHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFt2cFgsIHZwWV0gPSB0aGlzLnRvVnBDb29yKGNvb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZsZWV0ID0gb2JqIGFzIE1vZGVsLkZsZWV0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBmbGVldC5nZXRBbmdsZShnYWxheHkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUodnBYLCB2cFkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZShhbmdsZSk7XHJcbiAgICAgICAgICAgICAgICBjdHguc2NhbGUoMC41LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3VHJpYW5nbGUoY3R4KTtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZHJhd1BsYW5ldHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYW5ldEdyb3VwID0gZ3JvdXBzLmdldChNb2RlbC5NYXBEYXRhS2luZC5QbGFuZXQpO1xyXG4gICAgICAgICAgICBpZiAoIXBsYW5ldEdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnYW1lIGdlbmVyYXRpb24gc2hvdWxkIGdlbmVyYXRlIGF0IGxlYXN0IDEgcGxhbmV0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYW5ldEFycmF5ID0gQXJyYXkuZnJvbShwbGFuZXRHcm91cC52YWx1ZXMoKSkgYXMgQXJyYXk8W01vZGVsLlBsYW5ldCwgTW9kZWwuQ29vclRdPjtcclxuICAgICAgICAgICAgY29uc3QgYWxsUGxhbmV0cyA9IEltbXV0YWJsZVxyXG4gICAgICAgICAgICAgICAgLlNlcShwbGFuZXRBcnJheSlcclxuICAgICAgICAgICAgICAgIC5ncm91cEJ5KChbeF0pID0+ICh4IGFzIE1vZGVsLlBsYW5ldCkucmVzb3VyY2UpO1xyXG5cclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRyYXcgcGxhbmV0IHN5bWJvbHMgKGNvbG9yZWQgY2lyY2xlcylcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwieWVsbG93XCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IFJBRElVUyAqIHRoaXMuZ3JpZFNpemU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmF3UGxhbmV0Q2lyY2xlID0gKGNvbG9yOiBzdHJpbmcsIHJlc291cmNlOiBNb2RlbC5SYXdNYXRlcmlhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxhbmV0QnlSZXNvdXJjZSA9IGFsbFBsYW5ldHMuZ2V0KHJlc291cmNlKTtcclxuICAgICAgICAgICAgICAgIGlmICghcGxhbmV0QnlSZXNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBcImFsbCBwbGFuZXRzIHNob3VsZCBiZSBkaXN0cmlidXRlZCBhYm91dCBldmVubHkgaW4gdGVybXMgb2YgcmF3IG1hdGVyaWFsIHR5cGVzXCIpOyAvLyBUT0RPIHZhbGlkYXRlIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGFuZXRzID0gcGxhbmV0QnlSZXNvdXJjZS52YWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgWywgY29vcl0gb2YgcGxhbmV0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFt2cFgsIHZwWV0gPSB0aGlzLnRvVnBDb29yKGNvb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdDaXJjbGUoY3R4LCB2cFgsIHZwWSwgcmFkaXVzKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZHJhd1BsYW5ldENpcmNsZShcImdyZWVuXCIsIE1vZGVsLlByb2R1Y3QuQ3JvcCk7XHJcbiAgICAgICAgICAgIGRyYXdQbGFuZXRDaXJjbGUoXCJicm93blwiLCBNb2RlbC5Qcm9kdWN0Lk1ldGFsKTtcclxuICAgICAgICAgICAgZHJhd1BsYW5ldENpcmNsZShcImRhcmtjeWFuXCIsIE1vZGVsLlByb2R1Y3QuR2VtKTtcclxuICAgICAgICAgICAgZHJhd1BsYW5ldENpcmNsZShcIm9yYW5nZVwiLCBNb2RlbC5Qcm9kdWN0LkZ1ZWwpO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gZHJhdyBpZHNcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XHJcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSBNYXRoLmNlaWwoUkFESVVTICogdGhpcy5ncmlkU2l6ZSk7XHJcbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggc2Fucy1zZXJpZmA7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3BsYW5ldCwgY29vcl0gb2YgcGxhbmV0QXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFt2cFgsIHZwWV0gPSB0aGlzLnRvVnBDb29yKGNvb3IpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke3BsYW5ldC5pZH1gLCB2cFgsIHZwWSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRyYXcgY29sb255IGluZGljYXRvcnNcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJwdXJwbGVcIjtcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3BsYW5ldCwgY29vcl0gb2YgcGxhbmV0QXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwbGFuZXQuZ2V0Q29sb255KCkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbdnBYLCB2cFldID0gdGhpcy50b1ZwQ29vcihjb29yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdDaXJjbGUoY3R4LCB2cFgsIHZwWSwgcmFkaXVzKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBkcmF3UGxhbmV0cygpO1xyXG4gICAgICAgIGRyYXdGbGVldHMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXdDaXJjbGUoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCByOiBudW1iZXIpIHtcclxuICAgICAgICBjdHguYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXdUcmFkZVJvdXRlcyhnYW1lOiBHYW1lLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG5cclxuICAgICAgICBjb25zdCBnYWxheHkgPSBnYW1lLmdhbGF4eTtcclxuICAgICAgICBjb25zdCB0cmFkZVJvdXRlcyA9IGdhbGF4eS5nZXRUcmFkZVJvdXRlcygpO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiY3lhblwiO1xyXG5cclxuICAgICAgICBjb25zdCBkcmF3biA9IG5ldyBBbGdvLk9yZGVyTGlzdFNldDxNb2RlbC5Db2xvbnk+KChhLCBiKSA9PiBhLmlkIC0gYi5pZCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgW3UsIHZzXSBvZiB0cmFkZVJvdXRlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHYgb2YgdnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlZGdlID0gW3UsIHZdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRyYXduLmhhcyguLi5lZGdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZHJhd24uYWRkKC4uLmVkZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IFt1eCwgdXldID0gdGhpcy50b1ZwQ29vcihnYWxheHkuZ2V0Q29vcih1KSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbdngsIHZ5XSA9IHRoaXMudG9WcENvb3IoZ2FsYXh5LmdldENvb3IodikpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyh1eCwgdXkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh2eCwgdnkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3R3JpZChnYW1lOiBHYW1lKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FjaGVkR3JpZDtcclxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGlmICghY3R4KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbm5vdCBjcmVhdGUgY29udGV4dFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiM0OTQ5NDlcIjtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JpZFNpemUgPSB0aGlzLmdyaWRTaXplO1xyXG5cclxuICAgICAgICAvLyBkcmF3IGFsbCBob3Jpem9udGFsIGxpbmVzXHJcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gKCh0aGlzLnRvcExlZnRbMF0gKiBncmlkU2l6ZSkgJSBncmlkU2l6ZSArIGdyaWRTaXplKSAlIGdyaWRTaXplO1xyXG4gICAgICAgIGZvciAobGV0IGN1clggPSAwOyBjdXJYIDw9IGNhbnZhcy53aWR0aDsgY3VyWCArPSBncmlkU2l6ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJYMiA9IE1hdGguY2VpbChjdXJYICsgc3RhcnRYKTtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKGN1clgyICsgMC41LCAwLjUpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKGN1clgyICsgMC41LCBjYW52YXMuaGVpZ2h0ICsgMC41KTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZHJhdyBhbGwgdmVydGljYWwgbGluZXNcclxuICAgICAgICBjb25zdCBzdGFydFkgPSAoKHRoaXMudG9wTGVmdFsxXSAqIGdyaWRTaXplKSAlIGdyaWRTaXplICsgZ3JpZFNpemUpICUgZ3JpZFNpemU7XHJcbiAgICAgICAgZm9yIChsZXQgY3VyWSA9IDA7IGN1clkgPD0gY2FudmFzLmhlaWdodDsgY3VyWSArPSBncmlkU2l6ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJZMiA9IE1hdGguY2VpbChjdXJZICsgc3RhcnRZKTtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKDAuNSwgY3VyWTIgKyAwLjUpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKGNhbnZhcy53aWR0aCArIDAuNSwgY3VyWTIgKyAwLjUpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdUcmFkZVJvdXRlcyhnYW1lLCBjYW52YXMsIGN0eCk7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBoZWxwZXIgZnVuY3Rpb24gYmVoaW5kIHRoZSBldmVudCBoYW5kbGVyc1xyXG4gICAgcHJpdmF0ZSBwYW5UbyhnYW1lOiBHYW1lLCB2cEZyb206IFtudW1iZXIsIG51bWJlcl0sIHZwVG86IFtudW1iZXIsIG51bWJlcl0pIHtcclxuICAgICAgICB0aGlzLnN0b3BBY3Rpb24oKTtcclxuICAgICAgICBjb25zdCBmcm9tID0gdGhpcy50b0dhbWVDb29yKHZwRnJvbSk7XHJcbiAgICAgICAgY29uc3QgdG8gPSB0aGlzLnRvR2FtZUNvb3IodnBUbyk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gQWxnby5zdWJ0cmFjdDJEKGZyb20sIHRvKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBBbGdvLm5vcm0yRChvZmZzZXQpO1xyXG4gICAgICAgIGNvbnN0IHBpZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSBkaXN0YW5jZSAqIDAuMDI7XHJcbiAgICAgICAgICAgIGxldCBmaW5hbDtcclxuICAgICAgICAgICAgaWYgKHNwZWVkIDwgMC4wMSAvIHRoaXMuZ3JpZFNpemUpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocGlkKTtcclxuICAgICAgICAgICAgICAgIGZpbmFsID0gZGlzdGFuY2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaW5hbCA9IHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcHJvaiA9IEFsZ28ucHJvamVjdDJEKG9mZnNldCwgZmluYWwpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcExlZnQgPSBBbGdvLnN1bTJEKHRoaXMudG9wTGVmdCwgcHJvaik7XHJcbiAgICAgICAgICAgIGdhbWUucXVldWVVcGRhdGUoVXBkYXRlQ2hhbm5lbC5NYXBDaGFuZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjAyNzQ2NlxyXG4gICAgcHJpdmF0ZSBkcmF3QXJyb3coY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGZyb206IFtudW1iZXIsIG51bWJlcl0sIHRvOiBbbnVtYmVyLCBudW1iZXJdLCBjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgW3gsIHldID0gQWxnby5zdWJ0cmFjdDJEKHRvLCBmcm9tKTtcclxuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4oeSAvIHgpO1xyXG4gICAgICAgIGFuZ2xlICs9ICgoZnJvbVswXSA+PSB0b1swXSkgPyAtOTAgOiA5MCkgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKGZyb21bMF0sIGZyb21bMV0pO1xyXG4gICAgICAgIGN0eC5saW5lVG8odG9bMF0sIHRvWzFdKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vIGFycm93aGVhZFxyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodG9bMF0sIHRvWzFdKTtcclxuICAgICAgICBjdHgucm90YXRlKGFuZ2xlKTtcclxuICAgICAgICB0aGlzLmRyYXdUcmlhbmdsZShjdHgpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICAgICovXHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3VHJpYW5nbGUoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBjdHgubW92ZVRvKDAsIDApO1xyXG4gICAgICAgIGN0eC5saW5lVG8oNSwgMjApO1xyXG4gICAgICAgIGN0eC5saW5lVG8oLTUsIDIwKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9wQWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBpZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5waWQpO1xyXG4gICAgICAgICAgICB0aGlzLnBpZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYW4oZ2FtZTogR2FtZSwgZTogSGFtbWVySW5wdXQpIHtcclxuICAgICAgICB0aGlzLnBpZCA9IHRoaXMucGFuVG8oZ2FtZSwgdGhpcy5nZXRWcENlbnRlcigpLCBBbGdvLnN1bTJEKHRoaXMuZ2V0VnBDZW50ZXIoKSwgW2UuZGVsdGFYLCBlLmRlbHRhWV0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsaWNrKGdhbWU6IEdhbWUsIGU6IEhhbW1lcklucHV0KSB7XHJcbiAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcbiAgICAgICAgY29uc3QgYmIgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBjb29yID0gW1xyXG4gICAgICAgICAgICBlLmNlbnRlci54IC0gYmIubGVmdCxcclxuICAgICAgICAgICAgZS5jZW50ZXIueSAtIGJiLnRvcCxcclxuICAgICAgICBdIGFzIFtudW1iZXIsIG51bWJlcl07XHJcbiAgICAgICAgY29uc3QgZ2FtZUNvb3IgPSB0aGlzLnRvR2FtZUNvb3IoY29vcik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLmhhbmRsZVNlbGVjdGVkKHRoaXMsIGdhbWUsIGdhbWVDb29yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBuZWFyYnlPYmpzID0gZ2FsYXh5XHJcbiAgICAgICAgICAgICAgICAuc2VhcmNoTmVhcmJ5T2JqcyhnYW1lQ29vciwgUkFESVVTKVxyXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcclxuICAgICAgICAgICAgc3dpdGNoIChuZWFyYnlPYmpzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IG5lYXJieU9ianNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgVmlldy5TZWxlY3RWaWV3LmNyZWF0ZVNpbmdsZShnYW1lLCBvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYWRkQ2xvc2FibGUobmV3IFZpZXcuU2VsZWN0VmlldyhnYW1lLCBuZWFyYnlPYmpzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkYmxjbGljayhnYW1lOiBHYW1lLCBlOiBIYW1tZXJJbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IGJiID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgY29vciA9IFtcclxuICAgICAgICAgICAgZS5jZW50ZXIueCAtIGJiLmxlZnQsXHJcbiAgICAgICAgICAgIGUuY2VudGVyLnkgLSBiYi50b3AsXHJcbiAgICAgICAgXSBhcyBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgICAgIHRoaXMucGlkID0gdGhpcy5wYW5UbyhnYW1lLCB0aGlzLmdldFZwQ2VudGVyKCksIGNvb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd2hlZWwoZ2FtZTogR2FtZSwgZTogV2hlZWxFdmVudCB8IEhhbW1lcklucHV0KSB7XHJcbiAgICAgICAgdGhpcy5zdG9wQWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgaXNab29taW5nSW4gPSBlLmRlbHRhWSA8IDA7XHJcbiAgICAgICAgY29uc3QgY2VudGVyQ29vciA9IHRoaXMuZ2V0Q2VudGVyKCk7XHJcbiAgICAgICAgbGV0IHpvb21TcGVlZCA9IDEwO1xyXG4gICAgICAgIHRoaXMucGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNab29taW5nSW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFNpemUgPSBNYXRoLm1pbihNQVhfR1JJRF9TSVpFLCB0aGlzLmdyaWRTaXplICsgem9vbVNwZWVkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFNpemUgPSBNYXRoLm1heChNSU5fR1JJRF9TSVpFLCB0aGlzLmdyaWRTaXplIC0gem9vbVNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRvcExlZnQgPSB0aGlzLmNlbnRlclZwKHRoaXMudG9WcENvb3IoY2VudGVyQ29vcikpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGlkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHpvb21TcGVlZCAvPSAxLjE7XHJcbiAgICAgICAgICAgICAgICBpZiAoem9vbVNwZWVkIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5waWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdhbWUucXVldWVVcGRhdGUoVXBkYXRlQ2hhbm5lbC5NYXBDaGFuZ2UpO1xyXG4gICAgICAgIH0sIFVJX0lOVEVSVkFMKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNlbnRlclZwKHZwQXQ6IFtudW1iZXIsIG51bWJlcl0pIHtcclxuICAgICAgICBjb25zdCBhdCA9IHRoaXMudG9HYW1lQ29vcih2cEF0KTtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSBBbGdvLnN1YnRyYWN0MkQodGhpcy5nZXRDZW50ZXIoKSwgYXQpO1xyXG4gICAgICAgIHJldHVybiBBbGdvLnN1bTJEKHRoaXMudG9wTGVmdCwgb2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvVnBDb29yKFt4LCB5XTogW251bWJlciwgbnVtYmVyXSk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIGNvbnN0IFt0bFgsIHRsWV0gPSB0aGlzLnRvcExlZnQ7XHJcbiAgICAgICAgcmV0dXJuIFsoeCArIHRsWCkgKiB0aGlzLmdyaWRTaXplLCAoeSArIHRsWSkgKiB0aGlzLmdyaWRTaXplXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvR2FtZUNvb3IoW3gsIHldOiBbbnVtYmVyLCBudW1iZXJdKTogW251bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgY29uc3QgW3RsWCwgdGxZXSA9IHRoaXMudG9wTGVmdDtcclxuICAgICAgICByZXR1cm4gW3ggLyB0aGlzLmdyaWRTaXplIC0gdGxYLCB5IC8gdGhpcy5ncmlkU2l6ZSAtIHRsWV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRWcENlbnRlcigpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICBjb25zdCAkdmlldyA9ICQodGhpcy52aWV3KTtcclxuICAgICAgICByZXR1cm4gWyR2aWV3LndpZHRoKCkhIC8gMiwgJHZpZXcuaGVpZ2h0KCkhIC8gMl07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDZW50ZXIoKTogW251bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9HYW1lQ29vcih0aGlzLmdldFZwQ2VudGVyKCkpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L21hcHZpZXcudHMiLCJpbXBvcnQgeyBHYW1lLCBVcGRhdGVDaGFubmVsIH0gZnJvbSBcIi4uL2dhbWVcIjtcclxuaW1wb3J0ICogYXMgTW9kZWwgZnJvbSBcIi4uL21vZGVsL21vZGVsXCI7XHJcbmltcG9ydCAqIGFzIFZpZXcgZnJvbSBcIi4uL3ZpZXcvdmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnUgaW1wbGVtZW50cyBWaWV3Lk9ic2VydmVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cFBhdXNlQnV0dG9uKGdhbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBDbG9zZUFsbChnYW1lKTtcclxuICAgICAgICB0aGlzLnNldHVwRmFzdEZvcndhcmRCdXR0b24oZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNsb3dEb3duQnV0dG9uKGdhbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBCdXlUcmFkZXJCdXR0b24oZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFNhdmVCdXR0b24oZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5zZXR1cEltcG9ydEV4cG9ydEJ1dHRvbihnYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGdhbWU6IEdhbWUsIGNoYW5uZWxzOiBTZXQ8VXBkYXRlQ2hhbm5lbD4pIHtcclxuXHJcbiAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcblxyXG4gICAgICAgIGlmIChjaGFubmVscy5oYXMoVXBkYXRlQ2hhbm5lbC5EYXRhQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtb25leSA9IGdhbGF4eS5nZXRNb25leSgpO1xyXG4gICAgICAgICAgICAkKFwiI2Nhc2hcIilcclxuICAgICAgICAgICAgICAgIC5jc3MoXCJjb2xvclwiLCBtb25leSA+PSAwID8gXCJncmVlblwiIDogXCJyZWRcIilcclxuICAgICAgICAgICAgICAgIC50ZXh0KGAkJHttb25leS50b0ZpeGVkKDIpfWApO1xyXG4gICAgICAgICAgICAkKFwiI2NvbG9uaXN0XCIpLnRleHQoZ2FsYXh5LmdldE51bUNvbG9uaXN0cygpLnRvRml4ZWQoMikpO1xyXG4gICAgICAgICAgICAkKFwiI3RyYWRlclwiKS50ZXh0KGdhbGF4eS5nZXROdW1VbnVzZWRUcmFkZXJzKCkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICQoXCIjZmFzdFwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgIWdhbWUuY2FuRmFzdEZvcndhcmQoKSk7XHJcbiAgICAgICAgICAgICQoXCIjc2xvd1wiKS5wcm9wKFwiZGlzYWJsZWRcIiwgIWdhbWUuY2FuU2xvd0Rvd24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFubmVscy5oYXMoVXBkYXRlQ2hhbm5lbC5UdXJuQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICAkKFwiI3llYXJcIikudGV4dChnYWxheHkuZ2V0WWVhcigpKTtcclxuICAgICAgICAgICAgJChcIiNkYXlcIikudGV4dChnYWxheHkuZ2V0RGF5KCkpO1xyXG4gICAgICAgICAgICAkKFwiI3Njb3JlXCIpLnRleHQoZ2FsYXh5LmdldFNjb3JlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgJGJ1dHRvbkxhYmVsID0gJChcIiNwYXVzZSBpXCIpO1xyXG4gICAgICAgIGNvbnN0ICRwYXVzZUJ1dHRvbiA9ICQoXCIjcGF1c2VcIik7XHJcbiAgICAgICAgaWYgKGdhbWUuaXNHYW1lUnVubmluZygpKSB7XHJcbiAgICAgICAgICAgICRwYXVzZUJ1dHRvbi5hdHRyKFwidGl0bGVcIiwgXCJQYXVzZVwiKTtcclxuICAgICAgICAgICAgJGJ1dHRvbkxhYmVsLnRleHQoXCJwYXVzZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkcGF1c2VCdXR0b24uYXR0cihcInRpdGxlXCIsIFwiU3RhcnRcIik7XHJcbiAgICAgICAgICAgICRidXR0b25MYWJlbC50ZXh0KFwicGxheV9hcnJvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cEZhc3RGb3J3YXJkQnV0dG9uKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICAkKFwiI2Zhc3RcIikuY2xpY2soKCkgPT4gZ2FtZS5mYXN0Rm9yd2FyZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldHVwU2xvd0Rvd25CdXR0b24oZ2FtZTogR2FtZSkge1xyXG4gICAgICAgICQoXCIjc2xvd1wiKS5jbGljaygoKSA9PiBnYW1lLnNsb3dEb3duKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBQYXVzZUJ1dHRvbihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgJChcIiNwYXVzZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiUGF1c2VcIilcclxuICAgICAgICAgICAgLmNsaWNrKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdhbWUuaXNHYW1lUnVubmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5yZXN1bWUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cEJ1eVRyYWRlckJ1dHRvbihnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgJChcIiNidXlUcmFkZXJcIilcclxuICAgICAgICAgICAgLmNsaWNrKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc09rID0gZS5jdHJsS2V5IHx8IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZT8gVGhpcyBhY3Rpb24gY29zdHMgJCR7TW9kZWwuVFJBREVSX0NPU1R9LiAocHJlc3MgY3RybCB3aGlsZSBjbGlja2luZyB0aGUgYnV0dG9uIHN1cHByZXNzZXMgdGhpcyBtZXNzYWdlKWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzT2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnYWxheHkgPSBnYW1lLmdhbGF4eTtcclxuICAgICAgICAgICAgICAgICAgICBnYWxheHkuYWRkVHJhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FsYXh5LndpdGhkcmF3KE1vZGVsLlRSQURFUl9DT1NUKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cFNhdmVCdXR0b24oZ2FtZTogR2FtZSkge1xyXG4gICAgICAgICQoXCIjc2F2ZVwiKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGdhbWUuc2F2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBJbXBvcnRFeHBvcnRCdXR0b24oZ2FtZTogR2FtZSkge1xyXG4gICAgICAgICQoXCIjaW1wb3J0RXhwb3J0XCIpLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBWaWV3LkltcG9ydEV4cG9ydFZpZXcoZ2FtZSk7XHJcbiAgICAgICAgICAgIGdhbWUuYWRkQ2xvc2FibGUodmlldyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cENsb3NlQWxsKGdhbWU6IEdhbWUpIHtcclxuICAgICAgICAkKFwiI2Nsb3NlQWxsXCIpLmNsaWNrKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGdhbWUuY2xvc2VBbGwoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9tZW51LnRzIiwiaW1wb3J0ICogYXMgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0ICogYXMgQWxnbyBmcm9tIFwiLi4vYWxnb3JpdGhtL2FsZ29yaXRobVwiO1xyXG5pbXBvcnQgeyBHYW1lLCBVcGRhdGVDaGFubmVsIH0gZnJvbSBcIi4uL2dhbWVcIjtcclxuaW1wb3J0IHsgRHJhd1RhYmxlIH0gZnJvbSBcIi4uL2h0bWxcIjtcclxuaW1wb3J0ICogYXMgTW9kZWwgZnJvbSBcIi4uL21vZGVsL21vZGVsXCI7XHJcbmltcG9ydCB7IGFsbFByb2R1Y3RzLCBQcm9kdWN0IH0gZnJvbSBcIi4uL21vZGVsL3Byb2R1Y3RcIjtcclxuaW1wb3J0ICogYXMgVmlldyBmcm9tIFwiLi92aWV3XCI7XHJcblxyXG5jb25zdCBCQVNJQ19HT09EUyA9IFtQcm9kdWN0LkZvb2QsIFByb2R1Y3QuRHJpbmssIFByb2R1Y3QuQXBwYXJlbCwgUHJvZHVjdC5NZWRpY2luZV1cclxuICAgIC5tYXAoKHByb2R1Y3QpID0+IFByb2R1Y3RbcHJvZHVjdF0pXHJcbiAgICAuam9pbigpO1xyXG5jb25zdCBMVVhVUllfR09PRFMgPSBbUHJvZHVjdC5BY2Nlc3NvcnksIFByb2R1Y3QuRnVybml0dXJlLCBQcm9kdWN0LkdhZGdldCwgUHJvZHVjdC5WZWhpY2xlXVxyXG4gICAgLm1hcCgocHJvZHVjdCkgPT4gUHJvZHVjdFtwcm9kdWN0XSlcclxuICAgIC5qb2luKCk7XHJcbmNvbnN0IFJBV19NQVRFUklBTFMgPSBNb2RlbC5SQVdfTUFURVJJQUxTXHJcbiAgICAubWFwKChwcm9kdWN0KSA9PiBQcm9kdWN0W3Byb2R1Y3RdKVxyXG4gICAgLmpvaW4oKTtcclxuY29uc3QgU0VDT05EQVJZX01BVEVSSUFMUyA9IEltbXV0YWJsZVxyXG4gICAgLlNldChhbGxQcm9kdWN0cygpKVxyXG4gICAgLnN1YnRyYWN0KE1vZGVsLlJBV19NQVRFUklBTFMpXHJcbiAgICAubWFwKChwcm9kdWN0KSA9PiBQcm9kdWN0W3Byb2R1Y3RdKVxyXG4gICAgLmpvaW4oKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGFuZXRWaWV3IGltcGxlbWVudHMgVmlldy5PYnNlcnZlciB7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIHByaXZhdGUgY29udGVudHM6IFZpZXcuT2JzZXJ2ZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRoZUNvbnRlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByaXZhdGUgaXNQcmV2Q29sb25pemVkID0gdGhpcy5wbGFuZXQuaXNDb2xvbml6ZWQoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBnYW1lOiBHYW1lLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcGxhbmV0OiBNb2RlbC5QbGFuZXQsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmxheW91dChnYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGdhbWU6IEdhbWUsIGNoYW5uZWxzOiBTZXQ8VXBkYXRlQ2hhbm5lbD4pIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUHJldkNvbG9uaXplZCAmJiB0aGlzLnBsYW5ldC5pc0NvbG9uaXplZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQcmV2Q29sb25pemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQoZ2FtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50cy51cGRhdGUoZ2FtZSwgY2hhbm5lbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWFya2V0UGFuZWwoZ2FtZTogR2FtZSwgY29sb255OiBNb2RlbC5Db2xvbnkpIHtcclxuICAgICAgICBjb25zdCBwYW5lbCA9IG5ldyBNYXJrZXRQYW5lbChnYW1lLCB0aGlzLnRoZUNvbnRlbnRzLCBjb2xvbnkpO1xyXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBwYW5lbDtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzLnVwZGF0ZShnYW1lLCBuZXcgU2V0KFtVcGRhdGVDaGFubmVsLkRhdGFDaGFuZ2VdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEluZHVzdHJ5UGFuZWwoZ2FtZTogR2FtZSwgY29sb255OiBNb2RlbC5Db2xvbnkpIHtcclxuICAgICAgICBjb25zdCBwYW5lbCA9IG5ldyBJbmR1c3RyeVBhbmVsKGdhbWUsIHRoaXMudGhlQ29udGVudHMsIGNvbG9ueSk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IHBhbmVsO1xyXG4gICAgICAgIHBhbmVsLnVwZGF0ZShnYW1lLCBuZXcgU2V0KFtVcGRhdGVDaGFubmVsLkRhdGFDaGFuZ2VdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEluZm9QYW5lbChnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcGFuZWwgPSBuZXcgUGxhbmV0SW5mb1BhbmVsKGdhbWUsIHRoaXMudGhlQ29udGVudHMsIHRoaXMucGxhbmV0KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzID0gcGFuZWw7XHJcbiAgICAgICAgcGFuZWwudXBkYXRlKGdhbWUsIG5ldyBTZXQoW1VwZGF0ZUNoYW5uZWwuRGF0YUNoYW5nZV0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxheW91dChnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcGxhbmV0ID0gdGhpcy5wbGFuZXQ7XHJcbiAgICAgICAgY29uc3QgJHRpdGxlID0gVmlldy4kY3JlYXRlVGl0bGViYXIoZ2FtZSwgdGhpcywgYFBsYW5ldCAke3BsYW5ldC5pZH1gKTtcclxuICAgICAgICBjb25zdCAkY29udGVudFBhbmVsID0gVmlldy4kYWRkQ29udGVudFBhbmVsQ2xhc3ModGhpcy50aGVDb250ZW50cyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBbJHRpdGxlXTtcclxuXHJcbiAgICAgICAgY29uc3QgJHRhYnMgPSAkKFwiPG5hdj5cIilcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwidGFic1wiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxhbmV0LmlzQ29sb25pemVkKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sb255ID0gcGxhbmV0LmdldENvbG9ueSgpITtcclxuICAgICAgICAgICAgJChcIjxkaXY+XCIpXHJcbiAgICAgICAgICAgICAgICAudGV4dChcIlBsYW5ldFwiKVxyXG4gICAgICAgICAgICAgICAgLmNsaWNrKCgpID0+IHRoaXMuc2V0SW5mb1BhbmVsKGdhbWUpKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKCR0YWJzKTtcclxuXHJcbiAgICAgICAgICAgICQoXCI8ZGl2PlwiKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoXCJNYXJrZXRcIilcclxuICAgICAgICAgICAgICAgIC5jbGljaygoKSA9PiB0aGlzLnNldE1hcmtldFBhbmVsKGdhbWUsIGNvbG9ueSkpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJHRhYnMpO1xyXG5cclxuICAgICAgICAgICAgJChcIjxkaXY+XCIpXHJcbiAgICAgICAgICAgICAgICAudGV4dChcIkluZHVzdHJ5XCIpXHJcbiAgICAgICAgICAgICAgICAuY2xpY2soKCkgPT4gdGhpcy5zZXRJbmR1c3RyeVBhbmVsKGdhbWUsIGNvbG9ueSkpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJHRhYnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCR0YWJzLmNoaWxkcmVuKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goJHRhYnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGlzdC5wdXNoKCRjb250ZW50UGFuZWwpO1xyXG5cclxuICAgICAgICAkKHRoaXMudmlldykuZW1wdHkoKTtcclxuICAgICAgICBWaWV3XHJcbiAgICAgICAgICAgIC4kYWRkUGFuZWxDbGFzcyh0aGlzKVxyXG4gICAgICAgICAgICAuYXBwZW5kKC4uLmxpc3QpXHJcbiAgICAgICAgICAgIC5tb3VzZWRvd24oKGUpID0+IFZpZXcubWFrZURyYWdnYWJsZSh0aGlzLnZpZXcsIGUpKVxyXG4gICAgICAgICAgICAuY2xpY2soKCkgPT4gVmlldy5icmluZ1RvRnJvbnQodGhpcy52aWV3KSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SW5mb1BhbmVsKGdhbWUpO1xyXG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMudmlldyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEluZHVzdHJ5UGFuZWwgaW1wbGVtZW50cyBWaWV3Lk9ic2VydmVyIHtcclxuXHJcbiAgICBwcml2YXRlIG9ic2VydmFibGVzOiBWaWV3Lk9ic2VydmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBnYW1lOiBHYW1lLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjb2xvbnk6IE1vZGVsLkNvbG9ueSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubGF5b3V0KGdhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZ2FtZTogR2FtZSwgY2hhbm5lbHM6IFNldDxVcGRhdGVDaGFubmVsPikge1xyXG4gICAgICAgIGlmIChjaGFubmVscy5oYXMoVXBkYXRlQ2hhbm5lbC5SZWNyZWF0ZUluZHVzdHJ5TGF5b3V0KSkge1xyXG4gICAgICAgICAgICB0aGlzLmxheW91dChnYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZhYmxlIG9mIHRoaXMub2JzZXJ2YWJsZXMpIHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS51cGRhdGUoZ2FtZSwgY2hhbm5lbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxheW91dChnYW1lOiBHYW1lKSB7XHJcbiAgICAgICAgY29uc3QgY29sb255ID0gdGhpcy5jb2xvbnk7XHJcbiAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcbiAgICAgICAgY29uc3QgaW5kdXN0cmllcyA9IGdhbGF4eS5nZXRJbmR1c3RyaWVzKGNvbG9ueSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXAoQXJyYXlcclxuICAgICAgICAgICAgLmZyb20oaW5kdXN0cmllcylcclxuICAgICAgICAgICAgLm1hcCgoeCkgPT4gW3gucHJvZHVjdFR5cGUsIHhdIGFzIFtQcm9kdWN0LCBNb2RlbC5JbmR1c3RyeV0pKTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9jYWxSZXNvdXJjZSA9IGNvbG9ueS5nZXRIb21lUGxhbmV0KCkucmVzb3VyY2U7XHJcbiAgICAgICAgLy8gb25seSBzaG93IGdvb2RzIHRoYXQgdGhlIHBsYW5ldCBjYW4gcHJvZHVjZVxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlQcm9kdWN0cyA9IGFsbFByb2R1Y3RzKClcclxuICAgICAgICAgICAgLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdCA9PT0gbG9jYWxSZXNvdXJjZSB8fCAvLyBpcyB0aGUgcmF3IG1hdGVyaWFsIHRoYXQgdGhlIHBsYW5ldCBjYW4gcHJvZHVjZVxyXG4gICAgICAgICAgICAgICAgTW9kZWwuU0VDT05EQVJZX1BST0RVQ1RTLmhhcyhwcm9kdWN0KSB8fCAvLyBpcyBhIHNlY29uZGFyeSBwcm9kdWN0IChvbmUgdGhhdCByZXF1aXJlIHBvc3QtcHJvY2Vzc2VkIGdvb2RzIHRvIHByb2R1Y2UpXHJcbiAgICAgICAgICAgICAgICBNb2RlbC5JbmR1c3RyeVxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRGbGF0RGVtYW5kUHJvZHVjdHMocHJvZHVjdClcclxuICAgICAgICAgICAgICAgICAgICAuaGFzKGxvY2FsUmVzb3VyY2UpKSAvLyBvciB0aGUgcHJvZHVjZSBpcyBuZWVkZWQgYnkgaW5kdXN0cmllc1xyXG4gICAgICAgICAgICAuc29ydCgpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gJChcIjx0YWJsZT5cIikuYXBwZW5kKC4uLnRoaXMubWFrZUluZHVzdHJ5RGl2Q29udGFpbmVyKGdhbWUsIGdyb3VwcywgZGlzcGxheVByb2R1Y3RzKSk7XHJcblxyXG4gICAgICAgICQodGhpcy52aWV3KVxyXG4gICAgICAgICAgICAuZW1wdHkoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKGRhdGEpXHJcbiAgICAgICAgICAgIC5jbGljaygoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSAqbWFrZUluZHVzdHJ5RGl2Q29udGFpbmVyKGdhbWU6IEdhbWUsIGluZHVzdHJpZXM6IE1hcDxQcm9kdWN0LCBNb2RlbC5JbmR1c3RyeT4sIHByb2R1Y3RzOiBQcm9kdWN0W10pIHtcclxuXHJcbiAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcblxyXG4gICAgICAgIGxldCBzaG93UHJvZHVjdHM7XHJcbiAgICAgICAgaWYgKGluZHVzdHJpZXMuc2l6ZSA8IDIpIHtcclxuICAgICAgICAgICAgc2hvd1Byb2R1Y3RzID0gcHJvZHVjdHM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd1Byb2R1Y3RzID0gQXJyYXlcclxuICAgICAgICAgICAgICAgIC5mcm9tKGluZHVzdHJpZXMudmFsdWVzKCkpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh4KSA9PiB4LnByb2R1Y3RUeXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBzaG93UHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kdXN0cnkgPSBpbmR1c3RyaWVzLmdldChwcm9kdWN0KTtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBjb25zdCBjb250cm9sQnV0dG9ucyA9ICQoXCI8ZGl2PlwiKTtcclxuICAgICAgICAgICAgaWYgKGluZHVzdHJ5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRzID0gdGhpcy5tYWtlQnVpbGRCdXR0b24oZ2FtZSwgcHJvZHVjdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50cyA9IHRoaXMubWFrZUluZHVzdHJ5RGl2KGdhbWUsIGluZHVzdHJ5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250cm9sQnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoXCIrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiZXhwYW5kIGluZHVzdHJ5IChpbmNyZWFzZSBzY2FsZSBieSAxKVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsaWNrKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNPayA9IGUuc2hpZnRLZXkgfHwgZS5jdHJsS2V5IHx8IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZT8gVGhpcyBhY3Rpb24gY29zdHMgJCR7TW9kZWwuSU5EVVNUUllfQ09TVH0gcmVkdWNlcyBvcGVyYXRpb25hbCBlZmZpY2llbmN5LiAocHJlc3MgY3RybCB3aGlsZSBjbGlja2luZyB0aGUgYnV0dG9uIHN1cHByZXNzZXMgdGhpcyBtZXNzYWdlLCBwcmVzcyBzaGlmdCBmb3IgMTAgdGltZXMgdGhpcyBvcGVyYXRpb24pYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR1c3RyeS51cGdyYWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYWxheHkud2l0aGRyYXcoTW9kZWwuSU5EVVNUUllfQ09TVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kdXN0cnkudXBncmFkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYWxheHkud2l0aGRyYXcoTW9kZWwuSU5EVVNUUllfQ09TVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBub3RoaW5nIGNoYW5nZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5xdWV1ZVVwZGF0ZShVcGRhdGVDaGFubmVsLkRhdGFDaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoXCItXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiZG93biBzaXplIChkZWNyZWFzZSBzY2FsZSBieSAxKVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsaWNrKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNPayA9IGUuc2hpZnRLZXkgfHwgZS5jdHJsS2V5IHx8IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZT8gVGhpcyBhY3Rpb24gY29zdHMgJCR7TW9kZWwuSU5EVVNUUllfREVNT0xJU0hfQ09TVH0gcmVkdWNlcyBvcGVyYXRpb25hbCBlZmZpY2llbmN5LiAocHJlc3MgY3RybCB3aGlsZSBjbGlja2luZyB0aGUgYnV0dG9uIHN1cHByZXNzZXMgdGhpcyBtZXNzYWdlLCBwcmVzcyBzaGlmdCBmb3IgMTAgdGltZXMgdGhpcyBvcGVyYXRpb24pYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZHVzdHJ5LmRvd25TaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FsYXh5LndpdGhkcmF3KE1vZGVsLklORFVTVFJZX0RFTU9MSVNIX0NPU1QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kdXN0cnkuZG93blNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGF4eS53aXRoZHJhdyhNb2RlbC5JTkRVU1RSWV9ERU1PTElTSF9DT1NUKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnF1ZXVlVXBkYXRlKFVwZGF0ZUNoYW5uZWwuRGF0YUNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoXCJYXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwic2h1dCBkb3duIChmcmVlIHVwIHRoZSBpbmR1c3RyeSBzbG90KVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsaWNrKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kdXN0cnlTY2FsZSA9IGluZHVzdHJ5LmdldFNjYWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVtb2xpc2hDb3N0ID0gaW5kdXN0cnlTY2FsZSAqIE1vZGVsLklORFVTVFJZX0RFTU9MSVNIX0NPU1Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNPayA9IGUuY3RybEtleSB8fCBjb25maXJtKGBBcmUgeW91IHN1cmU/IFRoaXMgYWN0aW9uIGNvc3RzICQke2RlbW9saXNoQ29zdH0gcmVkdWNlcyBvcGVyYXRpb25hbCBlZmZpY2llbmN5LiAocHJlc3MgY3RybCB3aGlsZSBjbGlja2luZyB0aGUgYnV0dG9uIHN1cHByZXNzZXMgdGhpcyBtZXNzYWdlKWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc09rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGF4eS5zaHV0ZG93bkluZHVzdHJ5KHRoaXMuY29sb255LCBpbmR1c3RyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbGF4eS53aXRoZHJhdyhkZW1vbGlzaENvc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnF1ZXVlVXBkYXRlKFVwZGF0ZUNoYW5uZWwuUmVjcmVhdGVJbmR1c3RyeUxheW91dCwgVXBkYXRlQ2hhbm5lbC5EYXRhQ2hhbmdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeWllbGQgJChcIjx0cj5cIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgJChcIjx0ZD5cIilcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChQcm9kdWN0W3Byb2R1Y3RdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgUFJPRFVDVF9IT1ZFUl9URVhULmdldChwcm9kdWN0KSEpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChjb250cm9sQnV0dG9ucyksXHJcbiAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS5hcHBlbmQoY29udGVudHMpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1ha2VCdWlsZEJ1dHRvbihnYW1lOiBHYW1lLCBwcm9kdWN0OiBQcm9kdWN0KSB7XHJcbiAgICAgICAgcmV0dXJuICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAgICAgICAudGV4dChcIisgQnVpbGRcIilcclxuICAgICAgICAgICAgLmNsaWNrKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc09rID0gZS5jdHJsS2V5IHx8IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZT8gVGhpcyBhY3Rpb24gY29zdHMgJCR7TW9kZWwuSU5EVVNUUllfQ09TVH0sIGFuZCB3aWxsIHRha2UgdXAgYSBidWlsZGluZyBzbG90IChtYXggMiBwZXIgcGxhbmV0KS4gKHByZXNzIGN0cmwgd2hpbGUgY2xpY2tpbmcgdGhlIGJ1dHRvbiBzdXBwcmVzc2VzIHRoaXMgbWVzc2FnZSlgKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc09rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FsYXh5LmFkZEluZHVzdHJ5KHByb2R1Y3QsIHRoaXMuY29sb255KTtcclxuICAgICAgICAgICAgICAgICAgICBnYWxheHkud2l0aGRyYXcoTW9kZWwuSU5EVVNUUllfQ09TVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5xdWV1ZVVwZGF0ZShVcGRhdGVDaGFubmVsLlJlY3JlYXRlSW5kdXN0cnlMYXlvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0KGdhbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1ha2VJbmR1c3RyeURpdihnYW1lOiBHYW1lLCBpbmR1c3RyeTogTW9kZWwuSW5kdXN0cnkpIHtcclxuICAgICAgICBjb25zdCBnYWxheHkgPSBnYW1lLmdhbGF4eTtcclxuICAgICAgICBjb25zdCAkY29udGFpbmVyID0gJChcIjxkaXY+XCIpO1xyXG5cclxuICAgICAgICBjb25zdCAkc2NhbGVMYWJlbCA9ICQoXCI8c3Bhbj5cIik7XHJcbiAgICAgICAgJChcIjxkaXY+XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJQcm9kdWN0aW9uIHNjYWxlIGlzIHRoZSBzaXplIG9mIHlvdXIgaW5kdXN0cmlhbCBjb21wbGV4LiBJdCBkZXRlcm1pbmVzIHByb2R1Y3Rpb24gY2FwYWNpdHkgYW5kIGlucHV0IGNvbnN1bXB0aW9uLlwiKVxyXG4gICAgICAgICAgICAudGV4dChcIlByb2R1Y3Rpb24gU2NhbGU6IFwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCRzY2FsZUxhYmVsKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGNvbnN0ICRwcm9kQ2FwTGFiZWwgPSAkKFwiPHNwYW4+XCIpO1xyXG4gICAgICAgICQoXCI8ZGl2PlwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiUHJvZHVjdGlvbiBjYXBhY2l0eSBpcyB0aGUgbnVtYmVyIG9mIGdvb2RzIHRoYXQgdGhlIGluZHVzdHJpYWwgY29tcGxleCBjYW4gcHJvZHVjZSB3aGVuIHJ1bm5pbmcgMTAwJSBlZmZpY2llbmN5IGFuZCBoYXMgZW5vdWdoIGlucHV0IGdvb2RzLlwiKVxyXG4gICAgICAgICAgICAudGV4dChcIlByb2R1Y3Rpb24gQ2FwYWNpdHk6IFwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCRwcm9kQ2FwTGFiZWwpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygkY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgJG9wRWZmTGFiZWwgPSAkKFwiPHNwYW4+XCIpO1xyXG4gICAgICAgICQoXCI8ZGl2PlwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIGBPcGVyYXRpb25hbCBlZmZpY2llbmN5IGRldGVybWluZXMgcHJvZCBjYXAgYW5kIHRoZSBmaXhlZCBjb3N0IHBlciB1bml0LiBJbmR1c3RyaWFsIGNvbXBsZXhlcyB0aGF0IHByb2R1Y2UgcmF3IG1hdGVyaWFscyBbJHtSQVdfTUFURVJJQUxTfV0gbmVlZCBbJHtQcm9kdWN0W1Byb2R1Y3QuVG9vbF19XSB0byBpbmNyZWFzZSBlZmYsIHdoaWxlIHNlY29uZGFyeSBwcm9kdWN0cyBbJHtTRUNPTkRBUllfTUFURVJJQUxTfV0gbmVlZCBbJHtQcm9kdWN0W1Byb2R1Y3QuTWFjaGluZV19XSB0byBpbmNyZWFzZSBlZmYuYClcclxuICAgICAgICAgICAgLnRleHQoXCJPcGVyYXRpb25hbCBFZmYuOiBcIilcclxuICAgICAgICAgICAgLmFwcGVuZCgkb3BFZmZMYWJlbClcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCRjb250YWluZXIpO1xyXG5cclxuICAgICAgICBjb25zdCAkdXNlZEVuZXJneUxhYmVsID0gJChcIjxzcGFuPlwiKTtcclxuICAgICAgICAkKFwiPGRpdj5cIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIlRoZSBhbW91bnQgb2YgZW5lcmd5IHVzZWQgYnkgdGhpcyBpbmR1c3RyaWFsIGNvbXBsZXguIFRoZSByZWFsIGNvc3QgaXMgRW5lcmd5IFVzYWdlIHRpbWVzIFVuaXQgUHJpY2UgKGZvdW5kIHRoaXMgaW4gcGxhbmV0IHBhbmVsKS5cIilcclxuICAgICAgICAgICAgLnRleHQoXCJFbmVyZ3kgVXNhZ2U6IFwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCR1c2VkRW5lcmd5TGFiZWwpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygkY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGNvc3RQZXJVbml0TGFiZWwgPSAkKFwiPHNwYW4+XCIpO1xyXG4gICAgICAgICQoXCI8ZGl2PlwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiRml4ZWQgY29zdCB0aGUgYW1vdW50IG9mIG1vbmV5IHRoYXQgaXMgdXNlZCB0byBwcm9kdWNlIGEgdW5pdCBvZiBwcm9kdWN0OyBpbnB1dCBtYXRlcmlhbHMgJiBlbmVyZ3kgY29zdCBhcmVuJ3QgaW5jbHVkZWQuXCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwiRml4ZWQgQ29zdCBQZXIgVW5pdDogXCIpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJGNvc3RQZXJVbml0TGFiZWwpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygkY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKHtcclxuICAgICAgICAgICAgdXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkc2NhbGVMYWJlbC50ZXh0KGluZHVzdHJ5LmdldFNjYWxlKCkpO1xyXG4gICAgICAgICAgICAgICAgJHByb2RDYXBMYWJlbC50ZXh0KGluZHVzdHJ5LnByb2RDYXAoZ2FsYXh5KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BFZmYgPSBpbmR1c3RyeS5nZXRPcGVyYXRpb25hbEVmZigpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgJG9wRWZmTGFiZWwudGV4dChvcEVmZi50b0ZpeGVkKDIpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VkRW5lcmd5ID0gaW5kdXN0cnkudXNlZEVuZXJneShnYWxheHkpO1xyXG4gICAgICAgICAgICAgICAgJHVzZWRFbmVyZ3lMYWJlbC50ZXh0KHVzZWRFbmVyZ3kudG9GaXhlZCgyKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29zdFBlclVuaXQgPSBpbmR1c3RyeS5nZXRDb3N0UGVyVW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgJGNvc3RQZXJVbml0TGFiZWwudGV4dChgJCR7Y29zdFBlclVuaXQudG9GaXhlZCgyKX1gKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRjb250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RIb3ZlclRleHQocHJvZHVjdDogUHJvZHVjdCkge1xyXG4gICAgY29uc3QgaXNSYXcgPSBNb2RlbC5SQVdfTUFURVJJQUxTX1NFVC5oYXMocHJvZHVjdCBhcyBNb2RlbC5SYXdNYXRlcmlhbCk7XHJcbiAgICBjb25zdCBjb25zdW1lcyA9IEltbXV0YWJsZVxyXG4gICAgICAgIC5TZXEoTW9kZWwuREVNQU5EX1BST0RVQ1RTW3Byb2R1Y3RdKVxyXG4gICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MudW5pb24oY3VyKSwgSW1tdXRhYmxlLlNldDxQcm9kdWN0PigpKVxyXG4gICAgICAgIC5tYXAoKHgpID0+IFByb2R1Y3RbeF0pXHJcbiAgICAgICAgLmpvaW4oXCIsIFwiKTtcclxuICAgIHJldHVybiBgSXMgJHtpc1JhdyA/IFwiUkFXIG1hdGVyaWFsXCIgOiBgU0VDT05EQVJZIHByb2R1Y3Q7IGNvbnN1bWVzICR7Y29uc3VtZXN9YH1gO1xyXG59XHJcblxyXG5jb25zdCBQUk9EVUNUX0hPVkVSX1RFWFQgPSBuZXcgTWFwKE1vZGVsXHJcbiAgICAuYWxsUHJvZHVjdHMoKVxyXG4gICAgLm1hcCgoeCkgPT4gW3gsIGNyZWF0ZVByb2R1Y3RIb3ZlclRleHQoeCldIGFzIFtQcm9kdWN0LCBzdHJpbmddKSk7XHJcblxyXG5jbGFzcyBQbGFuZXRJbmZvUGFuZWwgaW1wbGVtZW50cyBWaWV3Lk9ic2VydmVyIHtcclxuXHJcbiAgICBwcml2YXRlIG9ic2VydmFibGVzID0gbmV3IFNldDxWaWV3Lk9ic2VydmVyPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZ2FtZTogR2FtZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXc6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIHBsYW5ldDogTW9kZWwuUGxhbmV0LFxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBwbGFuZXQucmVzb3VyY2U7XHJcbiAgICAgICAgY29uc3QgW3gsIHldID0gZ2FsYXh5LmdldENvb3IocGxhbmV0KTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNDb2xvbml6ZWQgPSBwbGFuZXQuaXNDb2xvbml6ZWQoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93cyA9IFtcclxuICAgICAgICAgICAgJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJUaGlzIGlzIHRoZSB0eXBlIG9mIHJlc291cmNlIHRoYXQgdGhpcyBwbGFuZXQgY2FuIHByb2R1Y2UgbG9jYWxseS5cIilcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikudGV4dChgUmVzb3VyY2VgKSxcclxuICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS50ZXh0KGAke1Byb2R1Y3RbcmVzb3VyY2VdfWApKSxcclxuICAgICAgICAgICAgJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJUaGlzIGlzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgcGxhbmV0LlwiKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS50ZXh0KGBDb29yYCksXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikuYXBwZW5kKGAoJHt4LnRvRml4ZWQoMil9LCR7eS50b0ZpeGVkKDIpfSlgKSksXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gcG9wdWxhdGlvbiByb3dcclxuICAgICAgICBpZiAoaXNDb2xvbml6ZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgJHBsYW5ldFBvcExhYmVsID0gJChcIjxzcGFuPlwiKTtcclxuICAgICAgICAgICAgcm93cy5wdXNoKCQoXCI8dHI+XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIGBBIHBsYW5ldCdzIHBvcHVsYXRpb24gZGV0ZXJtaW5lcyBkb21lc3RpYyBjb25zdW1wdGlvbiBvZiBiYXNpYyBnb29kcyBbJHtCQVNJQ19HT09EU31dIGFuZCBsdXh1cnkgZ29vZHMgWyR7TFVYVVJZX0dPT0RTfV0sIHdoaWNoIGlzIG9uZSBvZiB0aGUgMiB3YXlzIHRoYXQgYWxsb3cgeW91IHRvIHRyYWRlIGdvb2RzIGZvciBtb25leSAodGhlIG90aGVyIHdheSBiZWluZyBzdXBwbHkgZnVlbCB0byBwb3dlciBwbGFudHMpLmApXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLnRleHQoXCJQb3B1bGF0aW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLmFwcGVuZCgkcGxhbmV0UG9wTGFiZWwpKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvbnkgPSBwbGFuZXQuZ2V0Q29sb255KCkhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydChjb2xvbnkgIT09IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmFibGVzLmFkZCh7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3AgPSBjb2xvbnkuZ2V0UG9wdWxhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IGNvbG9ueS5nZXRNYXhQb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAkcGxhbmV0UG9wTGFiZWwudGV4dChgJHtwb3AudG9GaXhlZCgyKX0vJHttYXh9YCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCAkY29sb25pemVCdXR0b24gPSAkKFwiPGJ1dHRvbj5cIilcclxuICAgICAgICAgICAgICAgIC50ZXh0KFwiQ29sb25pemVcIilcclxuICAgICAgICAgICAgICAgIC5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FsYXh5LmNvbG9uaXplUGxhbmV0KHBsYW5ldCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUucXVldWVVcGRhdGUoVXBkYXRlQ2hhbm5lbC5NYXBDaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJvd3MucHVzaCgkKFwiPHRyPlwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIlNwZW5kIDEgZnJlZSBjb2xvbmlzdCB0byBjb2xvbml6ZSB0aGlzIHBsYW5ldC4gWW91IGNhbiBlbmNvdXJhZ2UgZ3Jvd3RoIGZyb20gY29sb25pemVkIHBsYW5ldHMuXCIpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY29sc3BhblwiLCAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCRjb2xvbml6ZUJ1dHRvbikpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2YWJsZXMuYWRkKHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICRjb2xvbml6ZUJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgZ2FsYXh5LmdldE51bUNvbG9uaXN0cygpIDwgMSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0NvbG9uaXplZCkge1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvbnkgPSBwbGFuZXQuZ2V0Q29sb255KCkhO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoY29sb255ICE9PSB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRncm93dGhMYWJlbCA9ICQoXCI8c3Bhbj5cIik7XHJcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIGBHcm93dGggb2NjdXJzIHdoZW4gcG9wdWxhdGlvbiBjb25zdW1lcyBlbm91Z2ggZm9vZDsgc2ltaWxhcmx5IHN0YXJ2YXRpb24gb2NjdXJzIHdoZW4gY2l0aXplbnMgbGFjayBmb29kLiBCb251cyBncm93dGggaXMgZGV0ZXJtaW5lZCBieSAyIG1ham9yIGZhY3RvcnM6IDEpIGNpdGl6ZW5zJyBzYXRpc2ZhY3Rpb24gb2YgYmFzaWMgWyR7QkFTSUNfR09PRFN9XSBhbmQgbHV4dWFyeSBnb29kcyBbJHtMVVhVUllfR09PRFN9XSwgYW5kIDIpIHN1ZmZpY2llbnQgcG93ZXIgc3VwcGx5LmApXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikudGV4dChcIkFubnVhbCBncm93dGhcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLmFwcGVuZCgkZ3Jvd3RoTGFiZWwpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncm93dGhSYXRlID0gY29sb255Lmdyb3d0aFJhdGUoZ2FsYXh5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGdyb3d0aExhYmVsLnRleHQoYCR7Z3Jvd3RoUmF0ZSA+IDAgPyBcIitcIiA6IFwiXCJ9JHtNYXRoLnJvdW5kKGdyb3d0aFJhdGUgKiAxMDApfSVgKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY2hlY2tib3ggPSAkKGNoZWNrYm94KVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidHlwZVwiLCBcImNoZWNrYm94XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYW5nZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzTGltaXRQb3AgPSBjaGVja2JveC5jaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvbnkubG9ja1BvcHVsYXRpb24oaXNMaW1pdFBvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY2hlY2tib3gucHJvcChcImNoZWNrZWRcIiwgY29sb255LmxvY2tQb3B1bGF0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiVGhpcyBvcHRpb24gbG9ja3MgdGhlIGN1cnJlbnQgcG9wdWxhdGlvbiwgYW5kIGFueSBncm93dGggb24gdGhpcyBwbGFuZXQgd2lsbCBiZSB0cmFuc2ZlcnJlZCB0byB0aGUgY29sb25pc3QgcG9vbC4gU2luY2UgaW5kdXN0cmlhbCBwcm9kdWN0aW9uIGlzIG5vdCBhZmZlY3RlZCBieSBwb3B1bGF0aW9uLCBlbmNvdXJhZ2luZyBjb2xvbmlzdHMgYSBncmVhdCB3YXkgdG8gbG9jayBkb3duIHBvd2VyIHVzYWdlLlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLnRleHQoXCJFbmNvdXJhZ2UgQ29sb25pc3RzP1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikuYXBwZW5kKCRjaGVja2JveCkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGZ1ZWxEZW1hbmQgPSAkKFwiPHNwYW4+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwb3dlclBsYW5ldEx2bCA9ICQoXCI8c3Bhbj5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHBvd2VyT3V0cHV0ID0gJChcIjxzcGFuPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcHJpY2UgPSAkKFwiPHNwYW4+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWNlclRhYmxlID0gJChcIjx0YWJsZT5cIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRyPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIlRoaXMgaXMgdGhlIHNpemUgb2YgdGhlIHBvd2VyIHBsYW50LiBFYWNoIGxldmVsIHByb3BvcnRpb25hbGx5IGFmZmVjdHMgcG93ZXIgb3V0cHV0IGFuZCBmdWVsIGNvbnN1bXB0aW9uIC0tIHRoZSBoaWdoZXIgdGhlIGxldmVsLCB0aGUgbW9yZSBwb3dlciB0byBiZSBvdXRwdXQgYW5kIG1vcmUgZnVlbCB0byBiZSBjb25zdW1lZC5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikudGV4dChcIlBvd2VyIHBsYW5ldCBsZXZlbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS5hcHBlbmQoJHBvd2VyUGxhbmV0THZsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJGdWVsIGRlbWFuZCBpcyB0aGUgcXVhbnRpdHkgbmVlZGVkIHRvIHJ1biB0aGUgcG93ZXIgcGxhbnRzIGF0IDEwMCUgZWZmaWNpZW5jeS4gVGhpcyBxdWFudGl0eSBpcyB0aGUgc2FtZSBhcyB3aGF0IHlvdSBzZWUgaW4gdGhlIG1hcmtldCBmb3IgZnVlbCBkZW1hbmQuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLnRleHQoXCJGdWVsIGRlbWFuZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS5hcHBlbmQoJGZ1ZWxEZW1hbmQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRyPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIlRoaXMgaXMgdGhlIGFjdHVhbCBwb3dlciBvdXRwdXQgb2YgdGhlIHBvd2VyIHBsYW50cy5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikudGV4dChcIk91dHB1dFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS5hcHBlbmQoJHBvd2VyT3V0cHV0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJUaGlzIGlzIGhvdyBtdWNoIDEgdW5pdCBvZiBlbmVyZ3kgaXMgd29ydGgsIHN1YmplY3QgdG8gZGVtYW5kL3N1cHBseS4gQm90aCBpbmR1c3RyaWVzIGFuZCBjaXZpbGlhbnMgdXNlIHBvd2VyLCBzbyBpbiB0aGUgZWFybHkgZ2FtZSB5b3UgbWlnaHQgd2FudCB0byBzZXBhcmF0ZSBpbmR1c3RyaWFsIHBsYW5ldHMgYW5kIGNvbnN1bWVyIHBsYW5ldHMuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLnRleHQoXCJVbml0IHByaWNlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpLmFwcGVuZCgkcHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRpbmRVc2FnZSA9ICQoXCI8c3Bhbj5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHRyYWRlclVzYWdlID0gJChcIjxzcGFuPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY2l2VXNhZ2UgPSAkKFwiPHNwYW4+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRjb25zdW1lclRhYmxlID0gJChcIjx0YWJsZT5cIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRyPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIlRoaXMgaXMgdGhlIG1heGltdW0gZW5lcmd5IHRoYXQgeW91ciBpbmR1c3RyaWFsIGNvbXBsZXhlcyBuZWVkLlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS50ZXh0KFwiSW5kdXN0cnlcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikuYXBwZW5kKCRpbmRVc2FnZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dHI+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiVGhpcyBpcyB0aGUgbWF4aW11bSBlbmVyZ3kgdGhhdCB5b3VyIHRyYWRlcnMgbmVlZC5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikudGV4dChcIlRyYWRlclwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS5hcHBlbmQoJHRyYWRlclVzYWdlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJUaGlzIGlzIHRoZSBtYXhpbXVtIGVuZXJneSB0aGF0IHRoZSBsb2NhbCBwb3B1bGF0aW9uIG5lZWRzLlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS50ZXh0KFwiQ2l2aWxpYW5cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikuYXBwZW5kKCRjaXZVc2FnZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGV4cGFuZEJ1dHRvbiA9ICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChcIitcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBgSW52ZXN0ICQke01vZGVsLlBPV0VSX1BMQU5UX0NPU1R9IHRvIGJ1aWxkIGEgbmV3IHBvd2VyIHBsYW50LCBpZiB5b3UgaGF2ZSB0aGUgbW9uZXkuIEp1c3QgYSByZW1pbmRlciwgeW91IGRvbid0IG93biBhbnkgcG93ZXIgcGxhbnRzOyBob3dldmVyLCB0aGVzZSBwb3dlciBwbGFudHMgYnV5IGZ1ZWwgZnJvbSB5b3UuYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsaWNrKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc09rID0gZS5jdHJsS2V5IHx8IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB0byBpbnZlc3QgaW4gcG93ZXIgcGxhbmV0IGF0IHBsYW5ldCAke3BsYW5ldC5pZH0/IFRoaXMgYWN0aW9uIGNvc3RzICQke01vZGVsLlBPV0VSX1BMQU5UX0NPU1R9LiAocHJlc3MgY3RybCB3aGlsZSBjbGlja2luZyB0aGUgYnV0dG9uIHN1cHByZXNzZXMgdGhpcyBtZXNzYWdlKWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzT2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvbnkuZXhwYW5kUG93ZXJQbGFuZXQoZ2FsYXh5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYWxheHkud2l0aGRyYXcoTW9kZWwuUE9XRVJfUExBTlRfQ09TVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjZXIgPSAkKFwiPGZpZWxkc2V0PlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiVGhlIHByb2R1Y2VyIHBhbmVsIHNob3dzIGRldGFpbHMgYWJvdXQgcG93ZXIgcGxhbnRzIG9mIHRoaXMgcGxhbmV0LlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8bGVnZW5kPlwiKS50ZXh0KFwiUHJvZHVjZXJcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJHByb2R1Y2VyVGFibGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY29uc3VtZXIgPSAkKFwiPGZpZWxkc2V0PlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIFwiVGhlIGNvbnN1bWVyIHBhbmVsIHNob3dzIGRldGFpbHMgYWJvdXQgKlBPVEVOVElBTCogZW5lcmd5IGNvbnN1bXB0aW9uIG9uIHRoaXMgcGxhbmV0LiBJZiB0aGUgcGxhbmV0IGhhcyBhIHNob3J0YWdlLCBlbmVyZ3kgd2lsbCBiZSBkaXN0cmlidXRlZCBldmVubHkgd2l0aCBiZXN0IGVmZm9ydC5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPGxlZ2VuZD5cIikudGV4dChcIkNvbnN1bWVyXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCRjb25zdW1lclRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHN1bW1hcnkgPSAkKFwiPHNwYW4+XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByb3dzLnB1c2goJChcIjx0cj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjb2xzcGFuXCIsIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIkNpdGl6ZW5zIGFuZCBpbmR1c3RyaWFsIGNvbXBsZXhlcyBuZWVkIHBvd2VyIHRvIGJlIHJ1biBlZmZpY2llbnRseS4gSWRlYWxseSwgeW91IHdhbnQgdG8ga2VlcCBwb3dlciBzdXJwbHVzLCBzbyB0aGF0IHRoZSBsb2NhbCBjb2xvbnkgYW5kIHlvdXIgaW5kdXN0cmlhbCBjb21wbGV4ZXMgY2FuIHJ1biBhdCBvcHRpbWFsIGVmZmljaWVuY3kuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoXCJQb3dlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJHN1bW1hcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkZXhwYW5kQnV0dG9uLCAkcHJvZHVjZXIsICRjb25zdW1lcikpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvd2VyUGxhbmV0THZsID0gY29sb255LmdldFBvd2VyUGxhbmV0TGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmdWVsRGVtYW5kLnRleHQoY29sb255LmdldEZ1ZWxEZW1hbmQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcG93ZXJQbGFuZXRMdmwudGV4dChwb3dlclBsYW5ldEx2bCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBjb2xvbnkuZ2V0UG93ZXJPdXRwdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVmZiA9IGNvbG9ueS5nZXRQb3dlck91dHB1dEVmZigpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBvd2VyT3V0cHV0LnRleHQoYCR7b3V0cHV0fSAoZWZmOiR7ZWZmLnRvRml4ZWQoMCl9JSlgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbmRVc2FnZS50ZXh0KGNvbG9ueS5nZXRJbmR1c3RyaWFsUG93ZXJVc2FnZShnYWxheHkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0cmFkZXJVc2FnZS50ZXh0KGNvbG9ueS5nZXRUcmFkZXJQb3dlclVzYWdlKGdhbGF4eSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNpdlVzYWdlLnRleHQoY29sb255LmdldENpdmlsaWFuUG93ZXJVc2FnZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW5FeHBhbmQgPSBnYWxheHkuZ2V0TW9uZXkoKSA+IE1vZGVsLlBPV0VSX1BMQU5UX0NPU1QgJiYgY29sb255LmNhbkV4cGFuZFBvd2VyUGxhbnQoZ2FsYXh5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRleHBhbmRCdXR0b24ucHJvcChcImRpc2FibGVkXCIsICFjYW5FeHBhbmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsVXNhZ2UgPSBjb2xvbnkuZ2V0VG90YWxQb3dlclVzYWdlKGdhbGF4eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbE91dHB1dCA9IGNvbG9ueS5nZXRQb3dlck91dHB1dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG93ZXJVc2FnZUVmZiA9IGNvbG9ueS5nZXRQb3dlclVzYWdlRWZmKGdhbGF4eSkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYCAke3RvdGFsVXNhZ2V9LyR7dG90YWxPdXRwdXR9ICgke3Bvd2VyVXNhZ2VFZmYudG9GaXhlZCgyKX0lKSBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHN1bW1hcnkudGV4dChzdW1tYXJ5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGNvbG9ueS5nZXRFbmVyZ3lQcmljZShnYWxheHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByaWNlLnRleHQoYCQke3ByaWNlLnRvRml4ZWQoMil9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQodGhpcy52aWV3KVxyXG4gICAgICAgICAgICAuZW1wdHkoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGFibGU+XCIpLmFwcGVuZCguLi5yb3dzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShnYW1lOiBHYW1lLCBjaGFubmVsczogU2V0PFVwZGF0ZUNoYW5uZWw+KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBvYnNlcnZhYmxlIG9mIHRoaXMub2JzZXJ2YWJsZXMpIHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS51cGRhdGUoZ2FtZSwgY2hhbm5lbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIElNYXJrZXRSb3cge1xyXG4gICAgcHJvZHVjdDogTW9kZWwuUHJvZHVjdDtcclxuICAgIHByaWNlOiBudW1iZXI7XHJcbiAgICBxdHk6IG51bWJlcjtcclxuICAgIGdsb2JhbERlbWFuZHM6IG51bWJlcjtcclxuICAgIGdsb2JhbFByb2RDYXA6IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgTWFya2V0UGFuZWwgaW1wbGVtZW50cyBWaWV3Lk9ic2VydmVyIHtcclxuXHJcbiAgICBwcml2YXRlIHRhYmxlRHJhd2VyOiBEcmF3VGFibGU8SU1hcmtldFJvdz47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcmVhZG9ubHkgZ2FtZTogR2FtZSxcclxuICAgICAgICByZWFkb25seSB2aWV3OiBIVE1MRWxlbWVudCxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNvbG9ueTogTW9kZWwuQ29sb255LFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZURyYXdlciA9IG5ldyBEcmF3VGFibGU8SU1hcmtldFJvdz4oW1xyXG4gICAgICAgICAgICBbXCJJZFwiLCAocm93QSwgcm93QikgPT4gcm93QS5wcm9kdWN0IC0gcm93Qi5wcm9kdWN0XSxcclxuICAgICAgICAgICAgW1wiR29vZHNcIiwgKHJvd0EsIHJvd0IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ckEgPSBNb2RlbC5Qcm9kdWN0W3Jvd0EucHJvZHVjdF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJCID0gTW9kZWwuUHJvZHVjdFtyb3dCLnByb2R1Y3RdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFsZ28uY21wU3RyKHN0ckEsIHN0ckIpO1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgW1wiUHJpY2VcIiwgKHJvd0EsIHJvd0IpID0+IHJvd0EucHJpY2UgLSByb3dCLnByaWNlXSxcclxuICAgICAgICAgICAgW1wiUXR5XCIsIChyb3dBLCByb3dCKSA9PiByb3dBLnF0eSAtIHJvd0IucXR5XSxcclxuICAgICAgICAgICAgW1wiR2FsYWN0aWMgRGVtYW5kXCIsIChyb3dBLCByb3dCKSA9PiByb3dBLmdsb2JhbERlbWFuZHMgLSByb3dCLmdsb2JhbERlbWFuZHNdLFxyXG4gICAgICAgICAgICBbXCJHYWxhY3RpYyBQcm9kQ2FwXCIsIChyb3dBLCByb3dCKSA9PiByb3dBLmdsb2JhbFByb2RDYXAgLSByb3dCLmdsb2JhbFByb2RDYXBdLFxyXG4gICAgICAgIF0sICgpID0+IHRoaXMudXBkYXRlKGdhbWUpKTtcclxuXHJcbiAgICAgICAgJCh2aWV3KVxyXG4gICAgICAgICAgICAuZW1wdHkoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKHRoaXMudGFibGVEcmF3ZXJcclxuICAgICAgICAgICAgICAgIC4kZ2V0VGFibGUoKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBgVGhlIG1hcmtldCBkZXRlcm1pbmVzIGxvY2FsIHByaWNlIGJ5IGRlbWFuZCAmIHN1cHBseS4gTG9va2luZyBhdCB0aGUgYmlnIHBpY3R1cmUsIHlvdSB3YW50IHRvIG1ha2Ugc3VyZSB0aGUgbWFya2V0IHJlYWNoZXMgZXF1aWxpYnJpdW0gYnkgbWF0Y2hpbmcgdXAgdGhlIGdhbGFjdGljIGRlbWFuZCBhbmQgdGhlIGdhbGFjdGljIHByb2R1Y3Rpb24gY2FwLlxyXG5cclxuVGhlIGdhbGFjdGljIHByb2R1Y3Rpb24gY2FwIGlzIGEgcG90ZW50aWFsIHF1YW50aXR5IHRoYXQgdGhlIGVudGlyZSBnYWxheHkgY2FuIHByb2R1Y2UuIEhvd2V2ZXIsIGlmIHlvdXIgaW5kdXN0cmlhbCBjb21wbGV4ZXMgbGFjayBpbnB1dCByZXNvdXJjZSwgdGhleSBtaWdodCBwcm9kdWNlIGdvb2RzIGF0IGEgbG93ZXIgcXVhbnRpdHkgdGhhbiB0aGUgcHJvZCBjYXAuXHJcblxyXG5TaW5jZSB5b3UgYXJlIHRoZSBvbmx5IHBsYXllciBpbiB0aGUgZ2FsYXh5LCB0aGUgb25seSB3YXkgdG8gZWFybiBtb25leSBpcyB0byBzZWxsIGdvb2RzIHRoYXQgYXJlIGNvbnN1bWVkIGJ5IGNpdGl6ZW5zIFske0JBU0lDX0dPT0RTfSwgJHtMVVhVUllfR09PRFN9XSBhbmQgYnkgcG93ZXIgcGxhbnRzIFske01vZGVsLlByb2R1Y3RbTW9kZWwuUHJvZHVjdC5GdWVsXX1dIC0tIG90aGVyIGludGVybWVkaWF0ZSBnb29kcyBhcmUgbWVyZWx5IHRyYW5zZmVycmVkIHRvIHlvdXIgaW5kdXN0cnkgYnkgeW91ciB0cmFkZXJzLCBlLmcuIHdoZW4geW91IHRyYWRlciBzZWxscyBhIHVuaXQgb2YgQ3JvcCwgeW91ciBpbmR1c3RyeSB3aWxsIGJ1eSBpdCBiYWNrLCBzbyBubyBtb25leSBpcyBlYXJuZWQuXHJcblxyXG5GaW5hbGx5LCB5b3Ugd2FudCB0byBvdmVycHJvZHVjZSBnb29kcyB0aGF0IGFyZSB1c2VkIHRvIG1haW50YWluIGNpdmlsaWFuICYgaW5kdXN0cmlhbCBncm93dGggW0Zvb2QsIEZ1ZWwsIFRvb2wsIE1hY2hpbmVdLCBpbnN0ZWFkIG9mIG1haW50YWluaW5nIGVxdWlsaWJyaXVtLiBZb3VyIHJlYWwgY2FzaCBjb3dzIGFyZSBsdXh1cnkgZ29vZHMuYCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZ2FtZTogR2FtZSkge1xyXG5cclxuICAgICAgICBjb25zdCBnYWxheHkgPSBnYW1lLmdhbGF4eTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IE1vZGVsXHJcbiAgICAgICAgICAgIC5hbGxQcm9kdWN0cygpXHJcbiAgICAgICAgICAgIC5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogdGhpcy5jb2xvbnkuZ2V0UHJpY2UocHJvZHVjdCksXHJcbiAgICAgICAgICAgICAgICAgICAgcXR5OiB0aGlzLmNvbG9ueS5nZXRTdXBwbHkocHJvZHVjdCksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVtYW5kOiB0aGlzLmNvbG9ueS5nZXREZW1hbmQocHJvZHVjdCksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGVtYW5kczogZ2FsYXh5LmdldEdhbGFjdGljRGVtYW5kcyhwcm9kdWN0KSxcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxQcm9kQ2FwOiBnYWxheHkuZ2V0R2FsYWN0aWNQcm9kQ2FwKHByb2R1Y3QpLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFN1cHBseTogZ2FsYXh5LmdldEdhbGFjdGljU3VwcGxpZXMocHJvZHVjdCksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50YWJsZURyYXdlclxyXG4gICAgICAgICAgICAucmVuZGVyKGRhdGEsIChyb3cpID0+IFtcclxuICAgICAgICAgICAgICAgIHJvdy5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgTW9kZWwuUHJvZHVjdFtyb3cucHJvZHVjdF0sXHJcbiAgICAgICAgICAgICAgICByb3cucHJpY2UudG9GaXhlZCgyKSxcclxuICAgICAgICAgICAgICAgIHJvdy5xdHksXHJcbiAgICAgICAgICAgICAgICByb3cuZ2xvYmFsRGVtYW5kcyxcclxuICAgICAgICAgICAgICAgIHJvdy5nbG9iYWxQcm9kQ2FwLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9wbGFuZXR2aWV3LnRzIiwiaW1wb3J0IHsgR2FtZSwgVXBkYXRlQ2hhbm5lbCB9IGZyb20gXCIuLi9nYW1lXCI7XHJcbmltcG9ydCAqIGFzIE1vZGVsIGZyb20gXCIuLi9tb2RlbC9tb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBWaWV3IGZyb20gXCIuL3ZpZXdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZVNlZ21lbnRWaWV3IGltcGxlbWVudHMgVmlldy5PYnNlcnZlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByb3V0ZVRpdGxlVGV4dChnYW1lOiBHYW1lLCByb3V0ZTogTW9kZWwuSVJvdXRlU2VnbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGdhbGF4eSA9IGdhbWUuZ2FsYXh5O1xyXG4gICAgICAgIGNvbnN0IGZyb21PYmogPSBnYWxheHkuZ2V0T2JqKHJvdXRlLmZyb20sIE1vZGVsLk1hcERhdGFLaW5kLlBsYW5ldCkgYXMgTW9kZWwuUGxhbmV0O1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZyb21PYmogIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc3QgdG9PYmogPSBnYWxheHkuZ2V0T2JqKHJvdXRlLnRvLCBNb2RlbC5NYXBEYXRhS2luZC5QbGFuZXQpIGFzIE1vZGVsLlBsYW5ldDtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCh0b09iaiAhPT0gdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgaWYgKGZyb21PYmouaWQgPCB0b09iai5pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFJvdXRlICgke2Zyb21PYmouaWR9IOKHhiAke3RvT2JqLmlkfSlgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYFJvdXRlICgke3RvT2JqLmlkfSDih4YgJHtmcm9tT2JqLmlkfSlgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnRlbnRzOiBWaWV3Lk9ic2VydmVyO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG93UGxhbmV0SWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaGlnaFBsYW5ldElkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvd0NvbG9ueTogTW9kZWwuQ29sb255O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBoaWdoQ29sb255OiBNb2RlbC5Db2xvbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2FtZTogR2FtZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlOiBNb2RlbC5JUm91dGVTZWdtZW50LFxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgZ2FsYXh5ID0gZ2FtZS5nYWxheHk7XHJcbiAgICAgICAgY29uc3QgZnJvbU9iaiA9IGdhbGF4eS5nZXRPYmoocm91dGUuZnJvbSwgTW9kZWwuTWFwRGF0YUtpbmQuUGxhbmV0KSBhcyBNb2RlbC5QbGFuZXQ7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZnJvbU9iaiAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChmcm9tT2JqLmlzQ29sb25pemVkKCkpO1xyXG4gICAgICAgIGNvbnN0IHRvT2JqID0gZ2FsYXh5LmdldE9iaihyb3V0ZS50bywgTW9kZWwuTWFwRGF0YUtpbmQuUGxhbmV0KSBhcyBNb2RlbC5QbGFuZXQ7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQodG9PYmogIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQodG9PYmouaXNDb2xvbml6ZWQoKSk7XHJcblxyXG4gICAgICAgIGlmIChmcm9tT2JqLmlkIDwgdG9PYmouaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb3dQbGFuZXRJZCA9IGZyb21PYmouaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuaGlnaFBsYW5ldElkID0gdG9PYmouaWQ7XHJcbiAgICAgICAgICAgIHRoaXMubG93Q29sb255ID0gZnJvbU9iai5nZXRDb2xvbnkoKSE7XHJcbiAgICAgICAgICAgIHRoaXMuaGlnaENvbG9ueSA9IHRvT2JqLmdldENvbG9ueSgpITtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvd1BsYW5ldElkID0gdG9PYmouaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuaGlnaFBsYW5ldElkID0gZnJvbU9iai5pZDtcclxuICAgICAgICAgICAgdGhpcy5sb3dDb2xvbnkgPSB0b09iai5nZXRDb2xvbnkoKSE7XHJcbiAgICAgICAgICAgIHRoaXMuaGlnaENvbG9ueSA9IGZyb21PYmouZ2V0Q29sb255KCkhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYXlvdXQoZ2FtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShnYW1lOiBHYW1lLCBjaGFubmVsczogU2V0PFVwZGF0ZUNoYW5uZWw+KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50cy51cGRhdGUoZ2FtZSwgY2hhbm5lbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGF5b3V0KGdhbWU6IEdhbWUpIHtcclxuICAgICAgICBjb25zdCBnYWxheHkgPSBnYW1lLmdhbGF4eTtcclxuICAgICAgICBjb25zdCAkdGl0bGUgPSBWaWV3LiRjcmVhdGVUaXRsZWJhcihnYW1lLCB0aGlzLCBSb3V0ZVNlZ21lbnRWaWV3LnJvdXRlVGl0bGVUZXh0KGdhbWUsIHRoaXMucm91dGUpKTtcclxuXHJcbiAgICAgICAgY29uc3QgJG51bVRyYWRlcnMgPSAkKFwiPHNwYW4+XCIpO1xyXG4gICAgICAgIGNvbnN0ICRmdWVsRWZmID0gJChcIjxzcGFuPlwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGdlbmVyYWwgPSAkKFwiPGZpZWxkc2V0PlwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgJChcIjxsZWdlbmQ+XCIpLnRleHQoXCJHZW5lcmFsXCIpLFxyXG4gICAgICAgICAgICAgICAgJChcIjx0YWJsZT5cIilcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dHI+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidGl0bGVcIiwgXCJUaGlzIGlzIHRoZSBudW1iZXIgb2YgdHJhZGVycyB3aG8gdHJhZGUgaW4gdGhpcyB0cmFkZSBsYW5lLlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikudGV4dChcIiNUcmFkZXJzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikuYXBwZW5kKCRudW1UcmFkZXJzKSxcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRyPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIkZ1ZWwgZWZmaWNpZW5jeSBkZXRlcm1pbmVzIGhvdyBmYXN0IHNwYWNlc2hpcHMgY2FuIHRyYXZlbCBkdWUgdG8gZXh0cmEgZnVlbCB1c2FnZS5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIjx0ZD5cIikudGV4dChcIkZ1ZWwgRWZmLlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKS5hcHBlbmQoJGZ1ZWxFZmYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBidXR0b25zIGZvciBhZGRpbmcgdHJhZGVycyB0byByb3V0ZVxyXG4gICAgICAgIGNvbnN0ICRidXR0b24xID0gJChcIjxidXR0b24+XCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwiK1wiKVxyXG4gICAgICAgICAgICAuY2xpY2soKCkgPT4gZ2FsYXh5LmFkZFRyYWRlRmxlZXQodGhpcy5sb3dDb2xvbnksIHRoaXMuaGlnaENvbG9ueSkpO1xyXG4gICAgICAgIGNvbnN0ICRidXR0b24yID0gJChcIjxidXR0b24+XCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwiK1wiKVxyXG4gICAgICAgICAgICAuY2xpY2soKCkgPT4gZ2FsYXh5LmFkZFRyYWRlRmxlZXQodGhpcy5oaWdoQ29sb255LCB0aGlzLmxvd0NvbG9ueSkpO1xyXG5cclxuICAgICAgICBjb25zdCAkYWRkUm91dGVzID0gJChcIjxmaWVsZHNldD5cIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0aXRsZVwiLCBcIklmIHlvdSBoYXZlIGEgZnJlZSB0cmFkZXIsIHlvdSBjYW4gYWRkIHRoZSB0cmFkZXIgdG8gdGhpcyBsYW5lLCB0cmFuc2ZlcnJpbmcgZ29vZHMgZm9yIHlvdS4gSWYgeW91IGRvbid0IGhhdmUgYSBmcmVlIHRyYWRlciwgeW91IGNhbiBlaXRoZXIgYnV5IG9uZSBmcm9tIHRoZSB0b3AgbWVudSBiYXIgb3IgY2FuIGZyZWUgb25lIGJ5IHJldGlyaW5nIGEgdHJhZGVyIGZyb20gdGhlIHRyYWRlciBzY3JlZW4uXCIpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAkKFwiPGxlZ2VuZD5cIikudGV4dChcIkFkZCBSb3V0ZXNcIiksXHJcbiAgICAgICAgICAgICAgICAkKFwiPHRhYmxlPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dHI+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGAke3RoaXMubG93UGxhbmV0SWR9IOKHhiAke3RoaXMuaGlnaFBsYW5ldElkfWApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCI8dGQ+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJGJ1dHRvbjEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRyPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChgJHt0aGlzLmhpZ2hQbGFuZXRJZH0g4oeGICR7dGhpcy5sb3dQbGFuZXRJZH1gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiPHRkPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCRidXR0b24yKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSksXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGNvbnRlbnRQYW5lbCA9IFZpZXdcclxuICAgICAgICAgICAgLiRhZGRDb250ZW50UGFuZWxDbGFzcygpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJGdlbmVyYWwsICRhZGRSb3V0ZXMpO1xyXG5cclxuICAgICAgICAkKHRoaXMudmlldykuZW1wdHkoKTtcclxuICAgICAgICBWaWV3XHJcbiAgICAgICAgICAgIC4kYWRkUGFuZWxDbGFzcyh0aGlzKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCR0aXRsZSwgJGNvbnRlbnRQYW5lbClcclxuICAgICAgICAgICAgLm1vdXNlZG93bigoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVmlldy5tYWtlRHJhZ2dhYmxlKHRoaXMudmlldywgZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBWaWV3LmJyaW5nVG9Gcm9udCh0aGlzLnZpZXcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLnZpZXcpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnRzID0ge1xyXG4gICAgICAgICAgICB1cGRhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG51bVRyYWRlcnMgPSBnYWxheHkuZ2V0TnVtVXNlZFRyYWRlcnModGhpcy5sb3dDb2xvbnksIHRoaXMuaGlnaENvbG9ueSk7XHJcbiAgICAgICAgICAgICAgICAkbnVtVHJhZGVycy50ZXh0KG51bVRyYWRlcnMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVFZmZQZXJjZW50ID0gTWF0aC5yb3VuZChnYWxheHkuZ2V0Um91dGVGdWVsRWZmKHRoaXMubG93Q29sb255LCB0aGlzLmhpZ2hDb2xvbnkpICogMTAwKTtcclxuICAgICAgICAgICAgICAgICRmdWVsRWZmLnRleHQoYCR7cm91dGVFZmZQZXJjZW50fSVgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc05vQXZhaWxUcmFkZXJzID0gZ2FsYXh5LmdldE51bVVudXNlZFRyYWRlcnMoKSA9PT0gMDtcclxuICAgICAgICAgICAgICAgICRidXR0b24xLnByb3AoXCJkaXNhYmxlZFwiLCBpc05vQXZhaWxUcmFkZXJzKTtcclxuICAgICAgICAgICAgICAgICRidXR0b24yLnByb3AoXCJkaXNhYmxlZFwiLCBpc05vQXZhaWxUcmFkZXJzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L3JvdXRlc2VnbWVudC50cyIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vZ2FtZVwiO1xyXG5pbXBvcnQgKiBhcyBNb2RlbCBmcm9tIFwiLi4vbW9kZWwvbW9kZWxcIjtcclxuaW1wb3J0IHsgTWFwRGF0YUtpbmQgfSBmcm9tIFwiLi4vbW9kZWwvbW9kZWxcIjtcclxuaW1wb3J0ICogYXMgVmlldyBmcm9tIFwiLi4vdmlldy92aWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0VmlldyBpbXBsZW1lbnRzIFZpZXcuT2JzZXJ2ZXIge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlU2luZ2xlKGdhbWU6IEdhbWUsIG9iajogTW9kZWwuSU1hcERhdGEpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVIZWxwZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAob2JqLmtpbmQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgTWFwRGF0YUtpbmQuRmxlZXQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWaWV3LkZsZWV0VmlldyhnYW1lLCBvYmogYXMgTW9kZWwuRmxlZXQpO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBNYXBEYXRhS2luZC5QbGFuZXQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWaWV3LlBsYW5ldFZpZXcoZ2FtZSwgb2JqIGFzIE1vZGVsLlBsYW5ldCk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE1hcERhdGFLaW5kLlJvdXRlU2VnbWVudDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZpZXcuUm91dGVTZWdtZW50VmlldyhnYW1lLCBvYmogYXMgTW9kZWwuSVJvdXRlU2VnbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGdhbWUuYWRkQ2xvc2FibGUoY3JlYXRlSGVscGVyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBnYW1lOiBHYW1lLFxyXG4gICAgICAgIG9ianM6IE1vZGVsLklNYXBEYXRhW10sXHJcbiAgICApIHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChvYmpzLmxlbmd0aCA+IDApO1xyXG5cclxuICAgICAgICBjb25zdCAkdGl0bGUgPSBWaWV3LiRjcmVhdGVUaXRsZWJhcihnYW1lLCB0aGlzLCBgT3BlbiBXaGljaD9gKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGNvbnRlbnRQYW5lbCA9IFZpZXdcclxuICAgICAgICAgICAgLiRhZGRDb250ZW50UGFuZWxDbGFzcygpXHJcbiAgICAgICAgICAgIC5hcHBlbmQob2Jqc1xyXG4gICAgICAgICAgICAgICAgLm1hcCgob2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqTGFiZWwgPSAkKFwiPGRpdj5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKFwic2VsZWN0TGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvYmoua2luZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1hcERhdGFLaW5kLkZsZWV0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChgVHJhZGVyICR7KG9iaiBhcyBNb2RlbC5GbGVldCkuaWR9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NzKFwiY29sb3JcIiwgXCJ5ZWxsb3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNYXBEYXRhS2luZC5QbGFuZXQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGBQbGFuZXQgJHsob2JqIGFzIE1vZGVsLlBsYW5ldCkuaWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNYXBEYXRhS2luZC5Sb3V0ZVNlZ21lbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KFZpZXcuUm91dGVTZWdtZW50Vmlldy5yb3V0ZVRpdGxlVGV4dChnYW1lLCBvYmogYXMgTW9kZWwuSVJvdXRlU2VnbWVudCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyhcImNvbG9yXCIsIFwiZGFya2N5YW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpMYWJlbC5jbGljaygoKSA9PiB0aGlzLmNsaWNrU2VsZWN0KGdhbWUsIG9iaikpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBWaWV3XHJcbiAgICAgICAgICAgIC4kYWRkUGFuZWxDbGFzcyh0aGlzKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCR0aXRsZSlcclxuICAgICAgICAgICAgLmFwcGVuZCgkY29udGVudFBhbmVsKVxyXG4gICAgICAgICAgICAubW91c2Vkb3duKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBWaWV3Lm1ha2VEcmFnZ2FibGUodGhpcy52aWV3LCBlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFZpZXcuYnJpbmdUb0Zyb250KHRoaXMudmlldyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGlja1NlbGVjdChnYW1lOiBHYW1lLCBvYmo6IE1vZGVsLklNYXBEYXRhKSB7XHJcbiAgICAgICAgU2VsZWN0Vmlldy5jcmVhdGVTaW5nbGUoZ2FtZSwgb2JqKTtcclxuICAgICAgICBnYW1lLmNsb3NlKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L3NlbGVjdHZpZXcudHMiXSwic291cmNlUm9vdCI6IiJ9