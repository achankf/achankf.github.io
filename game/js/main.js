"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
System.register("algorithm", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function makePair(t, u) {
        return [t, u];
    }
    exports_1("makePair", makePair);
    function* breadthFirstTraversal(root, edges, key) {
        const list = [[root, 0]];
        const visited = new Set();
        const keyit = key ? key : (me) => me;
        while (list.length > 0) {
            const [cur, depth] = list.shift();
            yield [cur, depth];
            visited.add(keyit(cur));
            const depth1 = depth + 1;
            list
                .push(...edges(cur)
                .filter((node) => {
                const result = !visited.has(keyit(node));
                visited.add(keyit(node));
                return result;
            })
                .map((node) => [node, depth1]));
        }
    }
    exports_1("breadthFirstTraversal", breadthFirstTraversal);
    function qtyGet(map, key) {
        const qty = map.get(key);
        return qty === undefined ? 0 : qty;
    }
    exports_1("qtyGet", qtyGet);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("box", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Box;
    return {
        setters: [],
        execute: function () {
            Box = class Box {
                constructor(data) {
                    this.data = data;
                }
                unbox() {
                    return this.data;
                }
                wrap(data) {
                    this.data = data;
                }
            };
            exports_2("default", Box);
        }
    };
});
System.register("constants", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var FPS, REFRESH_TIME;
    return {
        setters: [],
        execute: function () {
            exports_3("FPS", FPS = 30);
            exports_3("REFRESH_TIME", REFRESH_TIME = 1000 / FPS);
        }
    };
});
System.register("html", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function list(data, id) {
        const ret = $("<select>")
            .append($("<option selected disabled hidden>"));
        if (id !== undefined) {
            ret.attr("id", id);
        }
        Immutable.Seq(data)
            .forEach(([val, text]) => {
            $("<option>")
                .attr("value", val.toString())
                .text(text)
                .appendTo(ret);
        });
        return ret;
    }
    exports_4("list", list);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("model/db", ["algorithm", "model/model"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var Algo, Model, MAX_PERSON_ATTRIBUTE, DB;
    return {
        setters: [
            function (Algo_1) {
                Algo = Algo_1;
            },
            function (Model_1) {
                Model = Model_1;
            }
        ],
        execute: function () {
            MAX_PERSON_ATTRIBUTE = 255;
            DB = class DB {
                constructor() {
                    this.allPeople = new Map();
                    this.allDistricts = [];
                    this.allGroups = new Map();
                    this.allZones = new Map();
                    this.allBuildings = new Map();
                    this.idGen = 0;
                }
                createMap(seed, order, roughness) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (this.theWorldMap !== undefined) {
                            this.theWorldMap.terminate();
                        }
                        this.theWorldMap = new Model.WorldMap(order, seed);
                        return this.theWorldMap.generate(roughness);
                    });
                }
                worldMap() {
                    chai.assert(this.theWorldMap !== undefined, "caller should have set up the world map by now");
                    return this.theWorldMap;
                }
                getZone(id) {
                    const ret = this.allZones.get(id);
                    if (ret === undefined) {
                        throw new Error("bug from the caller");
                    }
                    return ret;
                }
                pushZone(zone) {
                    zone.setId(this);
                    this.allZones.set(zone.getId(), zone);
                    return zone;
                }
                getBuilding(idx) {
                    const ret = this.allBuildings.get(idx);
                    if (ret === undefined) {
                        throw new Error("bug from the caller");
                    }
                    return ret;
                }
                pushBuilding(building) {
                    building.setId(this);
                    this.allBuildings.set(building.getId(), building);
                    this.getGroup(building.getOwnerId())
                        .addOwnedBuildings(building.getId());
                    return building;
                }
                getGroup(id) {
                    const ret = this.allGroups.get(id);
                    if (ret === undefined) {
                        throw new Error("bug from the caller");
                    }
                    return ret;
                }
                getAllGroup() {
                    return Immutable.Seq(this.allGroups.values());
                }
                pushGroup(group) {
                    group.setId(this);
                    this.allGroups.set(group.getId(), group);
                    return group;
                }
                tryPlaceZone(worldCoor, plotCoor, zoneKind) {
                    const tileETS1 = Model.District.ETS - 1;
                    const idx = this.worldMap().idx(worldCoor);
                    let district = this.allDistricts[idx];
                    if (district === undefined) {
                        district = this.allDistricts[idx] = new Model.District();
                    }
                    if (district.getZoneId(plotCoor) !== undefined) {
                        return false;
                    }
                    const zone = this.pushZone(new Model.Zone(worldCoor, plotCoor, zoneKind));
                    district.set(this, worldCoor, plotCoor, zone.getId());
                    return true;
                }
                randomlyPlaceBuildings(repeat, maxTry = 100) {
                    const worldMap = this.worldMap();
                    chai.assert(worldMap.isMapReady());
                    const rng = Math.random;
                    const nside1 = worldMap.nside - 1;
                    const tileETS1 = Model.District.ETS - 1;
                    const inner = () => {
                        const candidates = worldMap.nearestLands(Math.floor(rng() * nside1), Math.floor(rng() * nside1));
                        if (candidates.length === 0) {
                            return false;
                        }
                        return candidates.some((worldCoor) => {
                            const plotCoor = Algo.makePair(Math.floor(rng() * tileETS1), Math.floor(rng() * tileETS1));
                            return this.tryPlaceZone(worldCoor, plotCoor, Model.ZoneKind.Residential);
                        });
                    };
                    for (let i = 0; i < repeat; i++) {
                        for (let j = 0; j < maxTry && !inner(); j++) {
                        }
                    }
                    return this;
                }
                addPerson(name) {
                    const peopleId = this.nextId();
                    const people = new Model.People(peopleId, name, Math.random() * MAX_PERSON_ATTRIBUTE, Math.random() * MAX_PERSON_ATTRIBUTE, Math.random() * MAX_PERSON_ATTRIBUTE, Math.random() * MAX_PERSON_ATTRIBUTE, Math.random() * MAX_PERSON_ATTRIBUTE, Math.random() * MAX_PERSON_ATTRIBUTE);
                    this.allPeople.set(peopleId, people);
                    return people;
                }
                getPeople(idx) {
                    const ret = this.allPeople.get(idx);
                    if (ret === undefined) {
                        throw new Error("bug from the caller");
                    }
                    return ret;
                }
                getAllPeople() {
                    return Immutable.Seq(this.allPeople.values());
                }
                district(coor) {
                    const worldMap = this.worldMap();
                    chai.assert(worldMap.isMapReady());
                    return this.allDistricts[worldMap.idx(coor)];
                }
                turn() {
                    const player = this.getPlayer();
                    this.allPeople.forEach((people) => {
                        if (people !== player) {
                            people.think();
                        }
                    });
                    this.allGroups.forEach((group) => {
                        group.operate(this);
                    });
                    this.allDistricts.forEach((tile) => {
                        tile.recalculate(this);
                    });
                }
                nextId() {
                    return this.idGen++;
                }
                setPlayer(player) {
                    this.playerId = player.getId();
                }
                getPlayer() {
                    if (this.playerId === undefined) {
                        throw new Error("bug: player should be set up by now");
                    }
                    return this.getPeople(this.playerId);
                }
            };
            exports_5("DB", DB);
        }
    };
});
System.register("model/people", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var People;
    return {
        setters: [],
        execute: function () {
            People = class People {
                constructor(id, name, str, dex, int, wis, cha, mag, relatedGroups = new Set()) {
                    this.id = id;
                    this.name = name;
                    this.str = str;
                    this.dex = dex;
                    this.int = int;
                    this.wis = wis;
                    this.cha = cha;
                    this.mag = mag;
                    this.relatedGroups = relatedGroups;
                }
                getId() {
                    return this.id;
                }
                setId(db) {
                    this.id = db.nextId();
                }
                think() {
                }
                addGroup(group) {
                    this.relatedGroups.add(group.getId());
                }
                getGroupIds() {
                    return Immutable.Set(this.relatedGroups);
                }
            };
            exports_6("People", People);
        }
    };
});
System.register("trie", [], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var Trie, input, t;
    return {
        setters: [],
        execute: function () {
            Trie = class Trie {
                static makeTrie(list) {
                    const ret = new Trie();
                    list.forEach(([keyString, val]) => {
                        let temp = ret;
                        keyString.forEach((keyChar) => {
                            if (temp.next === undefined) {
                                temp.next = new Map();
                            }
                            let next = temp.next.get(keyChar);
                            if (next === undefined) {
                                next = new Trie();
                                temp.next.set(keyChar, next);
                            }
                            temp = next;
                        });
                        if (temp.end !== undefined) {
                            throw new Error("cannot make trie: duplicate ends");
                        }
                        temp.end = val;
                    });
                    return ret;
                }
                find(key) {
                    let cur = this;
                    const isFound = key.every((keyChar) => {
                        const temp = cur.next.get(keyChar);
                        if (temp === undefined) {
                            return false;
                        }
                        cur = temp;
                        return true;
                    });
                    return isFound ? cur.end : undefined;
                }
            };
            exports_7("default", Trie);
            chai.expect(() => Trie.makeTrie([[[], 0], [[], 1]])).to.throw();
            input = [
                [[1], 2],
                [[1, 2, 3, 4], 5],
                [[1, 2, 3], 1],
                [[], 12],
                [[7], 24],
                [[7, 6], 99],
            ];
            t = Trie.makeTrie(input);
            chai.assert(t.find([1, 2, 3, 4]) === 5);
            chai.assert(t.find([1, 2, 3]) === 1);
            chai.assert(t.find([1]) === 2);
            chai.assert(t.find([]) === 12);
            chai.assert(t.find([7]) === 24);
            chai.assert(t.find([7, 6]) === 99);
            chai.assert(t.find([4]) === undefined);
            chai.assert(t.find([1, 2]) === undefined);
        }
    };
});
System.register("model/plot", ["algorithm", "model/model"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    function getAllowedResourceType(moduleKind) {
        switch (moduleKind) {
            case BuildingKind.Produce:
                return [
                    Model.Goods.Crop,
                    Model.Goods.Gem,
                    Model.Goods.Herb,
                    Model.Goods.Stone,
                    Model.Goods.Metal,
                    Model.Goods.Stone,
                    Model.Goods.Alloy,
                    Model.Goods.Cereal,
                    Model.Goods.Tool,
                    Model.Goods.Medicine,
                    Model.Goods.Paper,
                    Model.Goods.Handcraft,
                    Model.Goods.Machine,
                    Model.Goods.Vehicle,
                ];
        }
        throw new Error("not handled");
    }
    exports_8("getAllowedResourceType", getAllowedResourceType);
    function getInputGoodsRecipe(productType) {
        switch (productType) {
            case Model.Goods.Cereal:
                return new Set([Model.Goods.Crop]);
            default:
                return new Set();
        }
    }
    exports_8("getInputGoodsRecipe", getInputGoodsRecipe);
    var Algo, Model, ZoneKind, BuildingKind, Building, Zone;
    return {
        setters: [
            function (Algo_2) {
                Algo = Algo_2;
            },
            function (Model_2) {
                Model = Model_2;
            }
        ],
        execute: function () {
            (function (ZoneKind) {
                ZoneKind[ZoneKind["Production"] = 0] = "Production";
                ZoneKind[ZoneKind["Residential"] = 1] = "Residential";
            })(ZoneKind || (ZoneKind = {}));
            exports_8("ZoneKind", ZoneKind);
            (function (BuildingKind) {
                BuildingKind[BuildingKind["Produce"] = 0] = "Produce";
                BuildingKind[BuildingKind["Storage"] = 1] = "Storage";
                BuildingKind[BuildingKind["Residence"] = 2] = "Residence";
            })(BuildingKind || (BuildingKind = {}));
            exports_8("BuildingKind", BuildingKind);
            Building = class Building {
                constructor(parentZoneId, kind, ownerId, importLinks = Immutable.Set(), productType, inventory = new Map(), inventoryLevel = new Map(), population = 1) {
                    this.parentZoneId = parentZoneId;
                    this.kind = kind;
                    this.ownerId = ownerId;
                    this.importLinks = importLinks;
                    this.productType = productType;
                    this.inventory = inventory;
                    this.inventoryLevel = inventoryLevel;
                    this.population = population;
                }
                getId() {
                    return this.id;
                }
                setId(db) {
                    this.id = db.nextId();
                }
                getOwnerId() {
                    return this.ownerId;
                }
                setOwnerId(ownerId) {
                    this.ownerId = ownerId;
                }
                getConsumption() {
                    switch (this.kind) {
                        case BuildingKind.Residence:
                            return Immutable.Map([
                                [Model.Goods.Cereal, Math.ceil(this.population)],
                            ]);
                        case BuildingKind.Produce:
                            {
                                switch (this.productType) {
                                    case Model.Goods.Cereal:
                                        return Immutable.Map([
                                            [Model.Goods.Crop, 1],
                                        ]);
                                    default:
                                        return Immutable.Map();
                                }
                            }
                    }
                    return Immutable.Map();
                }
                setProduceType(productType) {
                    this.productType = productType;
                }
                getProductType() {
                    chai.assert(this.kind === BuildingKind.Produce);
                    return this.productType;
                }
                getLinks() {
                    return this.importLinks;
                }
                setLinks(links) {
                    this.importLinks = Immutable.Set(links);
                }
                getYield(db) {
                    const ret = new Map();
                    chai.assert(this.productType !== undefined);
                    ret.set(this.productType, 1);
                    return Immutable.Map(ret);
                }
                productionCycle(db) {
                    const linkBuildings = Immutable.Seq(this.importLinks.values())
                        .map((id) => db.getBuilding(id))
                        .groupBy((building) => building.getProductType());
                    this.getConsumption()
                        .forEach((qty, productType) => {
                        const buildings = linkBuildings.get(productType);
                        if (!buildings) {
                            return;
                        }
                        buildings.takeWhile((building) => {
                            const targetBuilding = building;
                            const targetInv = targetBuilding.getInventory();
                            const targetQty = Algo.qtyGet(targetInv, productType);
                            let buyQty;
                            if (targetQty <= qty) {
                                buyQty = targetQty;
                            }
                            else {
                                buyQty = qty;
                            }
                            targetInv.set(productType, targetQty - buyQty);
                            const newQty = Algo.qtyGet(this.inventory, productType) + buyQty;
                            this.inventory.set(productType, newQty);
                            qty -= buyQty;
                            return qty > 0;
                        }).toArray();
                    });
                    const consume = this.getConsumption();
                    const hasShortage = Array.from(consume)
                        .some(([productType, qty]) => qty > Algo.qtyGet(this.inventory, productType));
                    if (!hasShortage) {
                        consume.forEach((qty, productType) => {
                            const total = Algo.qtyGet(this.inventory, productType) - qty;
                            this.inventory.set(productType, total);
                        });
                        this.getYield(db).forEach((qty, productType) => {
                            const total = qty + Algo.qtyGet(this.inventory, productType);
                            this.inventory.set(productType, total);
                        });
                    }
                }
                getInventory() {
                    return this.inventory;
                }
            };
            exports_8("Building", Building);
            Zone = class Zone {
                constructor(worldCoor, tileCoor, kind, buildings = new Set()) {
                    this.worldCoor = worldCoor;
                    this.tileCoor = tileCoor;
                    this.kind = kind;
                    this.buildings = buildings;
                }
                getId() {
                    return this.id;
                }
                setId(db) {
                    this.id = db.nextId();
                }
                addBuilding(idx) {
                    this.buildings.add(idx);
                }
                getBuildings() {
                    return Immutable.Seq(this.buildings);
                }
                numModules() {
                    return this.buildings.size;
                }
                allowedModules() {
                    return [
                        BuildingKind.Produce,
                        BuildingKind.Storage,
                        BuildingKind.Residence,
                    ];
                }
                getYield(db) {
                    return this.getBuildings()
                        .map((idx) => db.getBuilding(idx))
                        .map((building) => building.getYield(db))
                        .reduce((acc, curYield) => {
                        curYield.forEach((qty, goodsType) => {
                            const totalQty = qty + Algo.qtyGet(acc, goodsType);
                            acc.set(goodsType, totalQty);
                        });
                        return acc;
                    }, new Map());
                }
                productionCycle(db) {
                    this.buildings.forEach((buildingIdx) => {
                        db
                            .getBuilding(buildingIdx)
                            .productionCycle(db);
                    });
                }
            };
            exports_8("Zone", Zone);
        }
    };
});
System.register("mymath", [], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    function getQuantile(data, parts) {
        const copy = data.slice().sort();
        const percentile = copy.length / parts;
        return new Array(parts)
            .fill(0)
            .map((_, i) => copy[Math.floor(i * percentile)]);
    }
    exports_9("getQuantile", getQuantile);
    function sum(...args) {
        return args
            .reduce((prev, cur) => prev + cur, 0);
    }
    exports_9("sum", sum);
    function average(...args) {
        return sum(...args) / args.length;
    }
    exports_9("average", average);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("random", [], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var Random;
    return {
        setters: [],
        execute: function () {
            Random = class Random {
                static create(seed) {
                    return Math.seedrandom(seed, { global: false });
                }
            };
            exports_10("default", Random);
        }
    };
});
System.register("model/worldmap", ["algorithm", "mymath", "random"], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    function isLand(terrain) {
        return terrain !== 1 && terrain !== 0;
    }
    var Algo, MyMath, random_js_1, WorldMap;
    return {
        setters: [
            function (Algo_3) {
                Algo = Algo_3;
            },
            function (MyMath_1) {
                MyMath = MyMath_1;
            },
            function (random_js_1_1) {
                random_js_1 = random_js_1_1;
            }
        ],
        execute: function () {
            WorldMap = class WorldMap {
                constructor(sideOrder, seed) {
                    this.sideOrder = sideOrder;
                    this.seed = seed;
                    this.nside = Math.pow(2, this.sideOrder) + 1;
                    this.dimension = this.nside * this.nside;
                    this.isReady = false;
                    chai.assert(sideOrder >= 0, "side order must be non-negative");
                }
                debugMountainfy() {
                    const idx = Math.floor(Math.random() * this.dimension);
                    this.terrainMap[idx] = 4;
                    return this.ridx(idx);
                }
                idx([x, y]) {
                    return y * this.nside + x;
                }
                ridx(idx) {
                    const x = idx % this.nside;
                    const y = Math.floor(idx / this.nside);
                    return [x, y];
                }
                isValidCoor([x, y]) {
                    return x >= 0 && x < this.nside
                        && y >= 0 && y < this.nside;
                }
                getNorth([x, y]) {
                    const coor = [x, y - 1];
                    if (this.isValidCoor(coor)) {
                        return coor;
                    }
                }
                getSouth([x, y]) {
                    const coor = [x, y + 1];
                    if (this.isValidCoor(coor)) {
                        return coor;
                    }
                }
                getEast([x, y]) {
                    const coor = [x + 1, y];
                    if (this.isValidCoor(coor)) {
                        return coor;
                    }
                }
                getWest([x, y]) {
                    const coor = [x - 1, y];
                    if (this.isValidCoor(coor)) {
                        return coor;
                    }
                }
                getNeighbours([x, y]) {
                    return [
                        Algo.makePair(x, y - 1),
                        Algo.makePair(x - 1, y),
                        Algo.makePair(x + 1, y),
                        Algo.makePair(x, y + 1),
                        Algo.makePair(x - 1, y - 1),
                        Algo.makePair(x + 1, y - 1),
                        Algo.makePair(x - 1, y + 1),
                        Algo.makePair(x + 1, y + 1),
                    ].filter(this.isValidCoor, this);
                }
                getTerrain(coor) {
                    return this.get(this.terrainMap, coor);
                }
                getGroupId(coor) {
                    return this.groupMap[this.idx(coor)];
                }
                isLand(coor) {
                    const groupId = this.getGroupId(coor);
                    return this.isLandMap[groupId];
                }
                nearestLands(px, py) {
                    let targetDepth = Number.MAX_VALUE;
                    return Array.from(Algo.breadthFirstTraversal(Algo.makePair(px, py), (coor) => this.getNeighbours(coor), (coor) => this.idx(coor)))
                        .reduce((acc, cur) => {
                        const [coor, depth] = cur;
                        if (this.isLand(coor)) {
                            chai.assert(targetDepth <= depth || targetDepth === Number.MAX_VALUE);
                            targetDepth = depth;
                            acc.push(coor);
                        }
                        return acc;
                    }, new Array());
                }
                isMapReady() {
                    return this.isReady;
                }
                terminate() {
                    this.isReady = false;
                    if (this.generateWorker !== undefined) {
                        this.generateWorker.terminate();
                        this.generateWorker = undefined;
                    }
                }
                generate(roughness) {
                    return __awaiter(this, void 0, void 0, function* () {
                        this.isReady = false;
                        const worker = this.generateWorker = new Worker("./js/worker/diamondSquare.js");
                        worker.postMessage([this.seed, this.nside, roughness]);
                        const promise = new Promise((resolve, reject) => {
                            worker.onmessage = (e) => {
                                const data = e.data;
                                resolve(data);
                            };
                        });
                        return promise.then((data) => {
                            this.postProcess(data);
                            this.isReady = true;
                        });
                    });
                }
                set(arr, coor, val) {
                    arr[this.idx(coor)] = val;
                }
                get(arr, coor) {
                    return arr[this.idx(coor)];
                }
                postProcess(data) {
                    const rng = random_js_1.default.create(this.seed);
                    {
                        const max = data.reduce((acc, cur) => acc > cur ? acc : cur, 0);
                        this.heightMap = data.map((val) => val / max);
                    }
                    {
                        const quantile = MyMath.getQuantile(this.heightMap, 100);
                        this.terrainMap = Array.from(this.heightMap.map((val) => {
                            const prob = rng();
                            if (val < quantile[70]) {
                                if (prob < 0.8) {
                                    return 0;
                                }
                                else if (prob < 0.9) {
                                    return 2;
                                }
                                else {
                                    return 3;
                                }
                            }
                            else if (val < quantile[90]) {
                                if (prob < 0.9) {
                                    return 2;
                                }
                                else if (prob < 0.95) {
                                    return 3;
                                }
                                else {
                                    return 0;
                                }
                            }
                            else {
                                if (prob < 0.2) {
                                    return 4;
                                }
                                else {
                                    return 2;
                                }
                            }
                        }));
                    }
                    {
                        for (let y = 0; y < this.nside; y++) {
                            for (let x = 0; x < this.nside; x++) {
                                const coor = Algo.makePair(x, y);
                                if (!isLand(this.getTerrain(coor))) {
                                    continue;
                                }
                                const neighbours = this.getNeighbours(coor);
                                const removeSmallIslands = () => {
                                    const waterCount = neighbours
                                        .map(this.getTerrain, this)
                                        .filter((terrain) => !isLand(terrain))
                                        .length;
                                    if (waterCount >= 6) {
                                        this.set(this.terrainMap, coor, 0);
                                    }
                                };
                                const fixLand = () => {
                                    const hillyCount = neighbours
                                        .map(this.getTerrain, this)
                                        .filter((terrain) => terrain === 3 ||
                                        terrain === 4)
                                        .length;
                                    if (hillyCount === 7) {
                                        this.set(this.terrainMap, coor, 3);
                                    }
                                    const isNearMountain = neighbours
                                        .map(this.getTerrain, this)
                                        .some((terrain) => terrain === 4);
                                    if (isNearMountain) {
                                        this.set(this.terrainMap, coor, 3);
                                    }
                                };
                                fixLand();
                                removeSmallIslands();
                            }
                        }
                        for (let y = 0; y < this.nside; y++) {
                            for (let x = 0; x < this.nside; x++) {
                                const coor = Algo.makePair(x, y);
                                const curTerrain = this.get(this.terrainMap, coor);
                                if (isLand(this.getTerrain([x, y]))) {
                                    continue;
                                }
                                const isNextToHill = this
                                    .getNeighbours(coor)
                                    .map(this.getTerrain, this)
                                    .some((terrain) => terrain === 3 ||
                                    terrain === 4);
                                if (isNextToHill) {
                                    if (rng() < 0.5) {
                                        this.set(this.terrainMap, coor, 2);
                                    }
                                }
                            }
                        }
                        for (let y = 0; y < this.nside; y++) {
                            for (let x = 0; x < this.nside; x++) {
                                const coor = Algo.makePair(x, y);
                                const curTerrain = this.get(this.terrainMap, coor);
                                if (isLand(curTerrain)) {
                                    continue;
                                }
                                const isNextToHill = this.getNeighbours(coor)
                                    .map(this.getTerrain, this)
                                    .some((terrain) => terrain === 3 ||
                                    terrain === 4);
                                if (isNextToHill) {
                                    this.set(this.terrainMap, coor, 2);
                                }
                                const landNeighbour = this.getNeighbours(coor)
                                    .map(this.getTerrain, this)
                                    .filter(isLand);
                                if (landNeighbour.length === 8) {
                                    this.set(this.terrainMap, coor, 2);
                                }
                                else if (landNeighbour.length > 0) {
                                    this.set(this.terrainMap, coor, 1);
                                }
                            }
                        }
                    }
                    {
                        let groupId = 0;
                        const fillGroupMap = (pred) => {
                            const buffer = new Array(this.dimension);
                            while (true) {
                                const idx = buffer.findIndex((value, i) => value === undefined && pred(this.terrainMap[i]));
                                if (idx === -1) {
                                    break;
                                }
                                const worklist = [idx];
                                while (worklist.length > 0) {
                                    const cur = worklist.pop();
                                    buffer[cur] = groupId;
                                    const candidates = this.getNeighbours(this.ridx(cur))
                                        .map((coor) => this.idx(coor))
                                        .filter((cidx) => buffer[cidx] === undefined && pred(this.terrainMap[cidx]));
                                    worklist.push(...candidates);
                                }
                                groupId++;
                            }
                            return buffer;
                        };
                        this.groupMap = fillGroupMap(isLand);
                        this.isLandMap = new Array(groupId).fill(true);
                        fillGroupMap((terrain) => !isLand(terrain)).forEach((val, idx) => {
                            if (val !== undefined) {
                                this.groupMap[idx] = val;
                                this.isLandMap[val] = false;
                            }
                        });
                    }
                }
            };
            exports_11("WorldMap", WorldMap);
        }
    };
});
System.register("model/district", [], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var District;
    return {
        setters: [],
        execute: function () {
            District = class District {
                constructor() {
                    this.allZones = new Map();
                    this.length = 0;
                }
                len() {
                    return this.length;
                }
                recalculate(db) {
                    this.allZones.forEach((zoneIdx) => {
                        db
                            .getZone(zoneIdx)
                            .productionCycle(db);
                    });
                }
                set(db, worldCoor, tileCoor, zoneId) {
                    const idx = this.idx(tileCoor);
                    const zone = this.allZones.get(idx);
                    if (zone !== undefined) {
                        throw new Error(`tile at ${tileCoor} of world ${worldCoor} is already set`);
                    }
                    this.allZones.set(idx, zoneId);
                    this.length += 1;
                }
                getZoneId(tileCoor) {
                    const idx = this.idx(tileCoor);
                    return this.allZones.get(idx);
                }
                all() {
                    return this.allZones;
                }
                idx([p, q]) {
                    return q * District.ETS + p;
                }
            };
            District.MAP_SIDE = 10;
            District.EDGE_THICK = 2;
            District.ETS = District.MAP_SIDE - District.EDGE_THICK;
            District.ETS_DIM = District.ETS * District.ETS;
            exports_12("District", District);
        }
    };
});
System.register("model/group", ["mymath"], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var MyMath, GroupKind, OwnerKind, OwnerEntity, SharesEntity, Company;
    return {
        setters: [
            function (MyMath_2) {
                MyMath = MyMath_2;
            }
        ],
        execute: function () {
            (function (GroupKind) {
                GroupKind[GroupKind["Company"] = 0] = "Company";
            })(GroupKind || (GroupKind = {}));
            exports_13("GroupKind", GroupKind);
            (function (OwnerKind) {
                OwnerKind[OwnerKind["Group"] = 0] = "Group";
                OwnerKind[OwnerKind["Personal"] = 1] = "Personal";
            })(OwnerKind || (OwnerKind = {}));
            exports_13("OwnerKind", OwnerKind);
            OwnerEntity = class OwnerEntity {
                constructor(kind, ownerId) {
                    this.kind = kind;
                    this.ownerId = ownerId;
                }
                getOwnerId() {
                    return this.ownerId;
                }
            };
            exports_13("OwnerEntity", OwnerEntity);
            SharesEntity = class SharesEntity {
                constructor(kind, ownerId, numShares) {
                    this.kind = kind;
                    this.ownerId = ownerId;
                    this.numShares = numShares;
                }
                getOwnerId() {
                    return this.ownerId;
                }
            };
            exports_13("SharesEntity", SharesEntity);
            Company = class Company {
                constructor(cash, ownedBuildings = new Set()) {
                    this.cash = cash;
                    this.ownedBuildings = ownedBuildings;
                    this.kind = GroupKind.Company;
                    this.toEntIdMap = new Map();
                    this.fromEntIdMap = new Map();
                    this.shareDistribution = [];
                }
                setId(db) {
                    this.id = db.nextId();
                }
                setPersonalShares(people, numShares) {
                    this.setShares(OwnerKind.Personal, people.getId(), numShares);
                    people.addGroup(this);
                }
                getShares(ownerKind, peopleOrGroupId) {
                    const kindMap = this.toEntIdMap.get(peopleOrGroupId);
                    if (kindMap === undefined) {
                        return 0;
                    }
                    const entId = kindMap.get(ownerKind);
                    return entId === undefined ? 0 : this.shareDistribution[entId];
                }
                hasPersonalControl(people) {
                    const total = this.getTotalShares();
                    const peoShare = this.getShares(OwnerKind.Personal, people.getId());
                    return (peoShare / total) > 0.5;
                }
                getShareDistribution() {
                    return Immutable
                        .Map(this.fromEntIdMap)
                        .map(([kind, peoGeoId], entId) => [kind, peoGeoId, this.shareDistribution[entId]])
                        .toIndexedSeq();
                }
                getId() {
                    return this.id;
                }
                getCash() {
                    return this.cash;
                }
                getTotalShares() {
                    return MyMath.sum(...this.shareDistribution);
                }
                addOwnedBuildings(buildingId) {
                    chai.assert(!this.ownedBuildings.has(buildingId), "bug: re-adding building to group");
                    this.ownedBuildings.add(buildingId);
                }
                getOwnedBuildings() {
                    return Immutable.Set(this.ownedBuildings);
                }
                operate(db) {
                    this.ownedBuildings.forEach((idx) => {
                        db
                            .getBuilding(idx)
                            .productionCycle(db);
                    });
                }
                setShares(ownerKind, peopleOrGroupId, numShares) {
                    let kindMap = this.toEntIdMap.get(peopleOrGroupId);
                    if (kindMap === undefined) {
                        this.toEntIdMap.set(peopleOrGroupId, new Map());
                        kindMap = this.toEntIdMap.get(peopleOrGroupId);
                    }
                    let entId = kindMap.get(ownerKind);
                    if (entId === undefined) {
                        entId = this.shareDistribution.push(numShares) - 1;
                        kindMap.set(ownerKind, entId);
                        const toKinds = this.fromEntIdMap.get(entId);
                        if (toKinds === undefined) {
                            this.fromEntIdMap.set(entId, [ownerKind, peopleOrGroupId]);
                        }
                    }
                    else {
                        this.shareDistribution[entId] = numShares;
                    }
                }
            };
            exports_13("Company", Company);
        }
    };
});
System.register("model/goods", [], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var Goods;
    return {
        setters: [],
        execute: function () {
            (function (Goods) {
                Goods[Goods["Crop"] = 0] = "Crop";
                Goods[Goods["Herb"] = 1] = "Herb";
                Goods[Goods["Metal"] = 2] = "Metal";
                Goods[Goods["Wood"] = 3] = "Wood";
                Goods[Goods["Stone"] = 4] = "Stone";
                Goods[Goods["Gem"] = 5] = "Gem";
                Goods[Goods["Cereal"] = 6] = "Cereal";
                Goods[Goods["Tool"] = 7] = "Tool";
                Goods[Goods["Medicine"] = 8] = "Medicine";
                Goods[Goods["Paper"] = 9] = "Paper";
                Goods[Goods["Handcraft"] = 10] = "Handcraft";
                Goods[Goods["Machine"] = 11] = "Machine";
                Goods[Goods["Alloy"] = 12] = "Alloy";
                Goods[Goods["Vehicle"] = 13] = "Vehicle";
            })(Goods || (Goods = {}));
            exports_14("Goods", Goods);
        }
    };
});
System.register("model/model", ["model/db", "model/people", "model/plot", "model/worldmap", "model/district", "model/group", "model/goods"], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var Entity;
    var exportedNames_1 = {
        "Entity": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_15(exports);
    }
    return {
        setters: [
            function (db_js_1_1) {
                exportStar_1(db_js_1_1);
            },
            function (people_js_1_1) {
                exportStar_1(people_js_1_1);
            },
            function (plot_js_1_1) {
                exportStar_1(plot_js_1_1);
            },
            function (worldmap_js_1_1) {
                exportStar_1(worldmap_js_1_1);
            },
            function (district_js_1_1) {
                exportStar_1(district_js_1_1);
            },
            function (group_js_1_1) {
                exportStar_1(group_js_1_1);
            },
            function (goods_js_1_1) {
                exportStar_1(goods_js_1_1);
            }
        ],
        execute: function () {
            Entity = class Entity {
                getId() {
                    return this.id;
                }
                setId(id) {
                    this.id = id;
                }
                regId(db) {
                    this.setId(db.nextId());
                }
            };
            exports_15("Entity", Entity);
        }
    };
});
System.register("observer", [], function (exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var Observer;
    return {
        setters: [],
        execute: function () {
            Observer = class Observer {
                constructor() {
                    this.isUpdateAll = false;
                    this.channels = new Map();
                    this.subscribedChannels = new Map();
                    this.updateSet = new Set();
                }
                subscribe(observable, ...channelTypes) {
                    const subscribe1 = (channelType) => {
                        const channel = this.tryCreateChannel(channelType);
                        if (channel.has(name)) {
                            throw new Error(`go fix caller: duplicate observable name [${name}] -- unsubscribe the old one first`);
                        }
                        channel.add(observable);
                        this.tryCreateSubscribedChannel(observable)
                            .add(channelType);
                    };
                    if (channelTypes.length === 0) {
                        throw new Error("subscribing observable without channels");
                    }
                    channelTypes.forEach((channelType) => subscribe1(channelType));
                }
                unsubscribe(observable) {
                    const unsubscribe1 = (channelType) => {
                        const channel = this.channels.get(channelType);
                        if (!channel) {
                            throw new Error(`fix caller: removing from channel ${channelType}, but channel is not initialized`);
                        }
                        if (!channel.delete(name)) {
                            throw new Error(`fix caller: no observable named [${name}] found in channel ${channelType}`);
                        }
                    };
                    const subsribed = this.subscribedChannels.get(observable);
                    if (!subsribed) {
                        throw new Error(`fix caller: observable named [${name}] wasn"t subscribed in anything`);
                    }
                    subsribed.forEach(unsubscribe1);
                    this.subscribedChannels.delete(observable);
                }
                queueAllUpdate() {
                    this.isUpdateAll = true;
                }
                queueUpdate(...channelTypes) {
                    channelTypes.forEach((channel) => this.updateSet.add(channel));
                }
                update(subject) {
                    const allObservables = this.isUpdateAll ?
                        this.subscribedChannels.keys() :
                        Immutable.Seq(this.updateSet)
                            .map((channelType) => {
                            const channel = this.channels.get(channelType);
                            if (channel === undefined) {
                                throw new Error("fix caller: channel has nothing to update");
                            }
                            return channel;
                        })
                            .reduce((acc, observables) => acc.union(observables), Immutable.Set());
                    for (const observable of allObservables) {
                        observable.update(subject);
                    }
                    this.updateSet.clear();
                    this.isUpdateAll = false;
                }
                tryCreateChannel(channelType) {
                    let channel = this.channels.get(channelType);
                    if (!channel) {
                        this.channels.set(channelType, new Set());
                        channel = this.channels.get(channelType);
                    }
                    return channel;
                }
                tryCreateSubscribedChannel(observable) {
                    let subscribed = this.subscribedChannels.get(observable);
                    if (!subscribed) {
                        this.subscribedChannels.set(observable, new Set());
                        subscribed = this.subscribedChannels.get(observable);
                    }
                    return subscribed;
                }
            };
            exports_16("Observer", Observer);
        }
    };
});
System.register("view/group", ["model/model", "view/view"], function (exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var Model, View, GroupRenderer;
    return {
        setters: [
            function (Model_3) {
                Model = Model_3;
            },
            function (View_1) {
                View = View_1;
            }
        ],
        execute: function () {
            GroupRenderer = class GroupRenderer {
                constructor(renderers) {
                    this.renderers = renderers;
                    this.parent = $("#groupContainer");
                    const db = renderers.db;
                    const observer = renderers.observer;
                    observer.subscribe(this, 2, 3);
                }
                render(db) {
                    this.parent.append($("<h3>").text("Group"));
                    db.getAllGroup()
                        .forEach((group) => this.render1(db, group));
                }
                update(db) {
                    this.parent
                        .empty();
                    this.render(db);
                }
                render1(db, group) {
                    if (group.kind === Model.GroupKind.Company) {
                        this.renderCompany(db, group);
                    }
                }
                renderCompany(db, company) {
                    const id = company.getId();
                    const ret = $("<div>")
                        .css("border", "1px solid black");
                    $("<div>")
                        .text(`Company ${id}`)
                        .appendTo(ret);
                    $("<div>")
                        .text(`Cash: $${company.getCash()}`)
                        .appendTo(ret);
                    $("<div>")
                        .text(`Shares Issued: ${company.getTotalShares()}`)
                        .appendTo(ret);
                    const table = $("<table>")
                        .append($("<th>").text("Owner"))
                        .append($("<th>").text("#Shares"))
                        .appendTo(ret);
                    company
                        .getShareDistribution()
                        .reduce((acc, [ownerKind, peoGeoId, numShares]) => {
                        const row = $("<tr>")
                            .appendTo(acc);
                        if (ownerKind === Model.OwnerKind.Personal) {
                            const name = db.getPeople(peoGeoId).name;
                            $("<td>")
                                .text(`${name}`)
                                .appendTo(row);
                        }
                        else {
                            throw new Error("not handled");
                        }
                        $("<td>")
                            .text(numShares)
                            .appendTo(row);
                        return acc;
                    }, table);
                    const buildingList = $("<ul>")
                        .appendTo(ret);
                    company
                        .getOwnedBuildings()
                        .toIndexedSeq()
                        .map(db.getBuilding, db)
                        .forEach((building) => {
                        const listItem = $("<li>")
                            .appendTo(buildingList);
                        const zone = db.getZone(building.parentZoneId);
                        $("<div>")
                            .text(`Zone ${zone.tileCoor} of ${zone.worldCoor}`)
                            .appendTo(listItem);
                        $("<div>")
                            .text(`${Model.BuildingKind[building.kind]}`)
                            .appendTo(listItem);
                    });
                    ret.appendTo(this.parent);
                }
            };
            exports_17("default", GroupRenderer);
        }
    };
});
System.register("view/people", ["view/view"], function (exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var View, PersonRenderer;
    return {
        setters: [
            function (View_2) {
                View = View_2;
            }
        ],
        execute: function () {
            PersonRenderer = class PersonRenderer {
                constructor(renderers) {
                    this.renderers = renderers;
                    this.parent = $("#peopleContainer");
                    const db = renderers.db;
                    const observer = renderers.observer;
                    observer.subscribe(this, 1);
                }
                render(db) {
                    const render1 = (people) => {
                        const createStat = (name, val) => {
                            return $("<div>").text(`${name}: ${Math.floor(val)}`);
                        };
                        return $("<div>")
                            .attr("class", "peopleInfo")
                            .attr("id", people.getId())
                            .append($("<div>").text(people.name))
                            .append(createStat("str", people.str))
                            .append(createStat("dex", people.dex))
                            .append(createStat("int", people.int))
                            .append(createStat("wis", people.wis))
                            .append(createStat("cha", people.cha))
                            .append(createStat("mag", people.mag));
                    };
                    const peopleList = $("<div>").attr("id", "peopleList");
                    db
                        .getAllPeople()
                        .forEach((people) => peopleList.append(render1(people)));
                    return peopleList;
                }
                update(db) {
                    this.parent
                        .empty()
                        .append(this.render(db));
                }
            };
            exports_18("default", PersonRenderer);
        }
    };
});
System.register("view/player", ["model/model", "view/view"], function (exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var Model, View, PlayerRenderer;
    return {
        setters: [
            function (Model_4) {
                Model = Model_4;
            },
            function (View_3) {
                View = View_3;
            }
        ],
        execute: function () {
            PlayerRenderer = class PlayerRenderer {
                constructor(renderers) {
                    this.renderers = renderers;
                    this.parent = $("#playerContainer");
                    const db = renderers.db;
                    const observer = renderers.observer;
                    observer.subscribe(this, 1);
                }
                render(db) {
                    const render1 = (people) => {
                        const createStat = (name, val) => {
                            return $("<div>").text(`${name}: ${Math.floor(val)}`);
                        };
                        return $("<div>")
                            .attr("class", "peopleInfo")
                            .attr("id", people.getId())
                            .append($("<div>").text(people.name))
                            .append(createStat("str", people.str))
                            .append(createStat("dex", people.dex))
                            .append(createStat("int", people.int))
                            .append(createStat("wis", people.wis))
                            .append(createStat("cha", people.cha))
                            .append(createStat("mag", people.mag));
                    };
                    this.parent
                        .append($("<h3>").text("Player"));
                    const player = db.getPlayer();
                    if (player === undefined) {
                        this.parent
                            .append($("<div>").text("no player selected"));
                        return;
                    }
                    const groupTable = $("<table>")
                        .append($("<th>").text("Group Id"))
                        .append($("<th>").text("#Shares"))
                        .append($("<th>").text("%"));
                    player
                        .getGroupIds()
                        .map((id) => db.getGroup(id))
                        .map((group) => {
                        const numShares = group.getShares(Model.OwnerKind.Personal, player.getId());
                        return [group, numShares, group.getTotalShares()];
                    })
                        .reduce((acc, [group, numShares, totalShares]) => {
                        const row = $("<tr>").appendTo(acc);
                        $("<td>")
                            .text(group.getId())
                            .appendTo(row);
                        $("<td>")
                            .text(numShares)
                            .appendTo(row);
                        $("<td>")
                            .text(`${numShares / totalShares * 100}%`)
                            .appendTo(row);
                        return acc;
                    }, groupTable);
                    this.parent
                        .append(render1(player))
                        .append(groupTable);
                }
                update(db) {
                    this.parent
                        .empty();
                    this.render(db);
                }
            };
            exports_19("default", PlayerRenderer);
        }
    };
});
System.register("view/tilemap", ["algorithm", "model/model", "view/view"], function (exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var Algo, Model, View, DESELECT_BUTTON, TileMapRenderer;
    return {
        setters: [
            function (Algo_4) {
                Algo = Algo_4;
            },
            function (Model_5) {
                Model = Model_5;
            },
            function (View_4) {
                View = View_4;
            }
        ],
        execute: function () {
            DESELECT_BUTTON = "deselectButton";
            TileMapRenderer = class TileMapRenderer {
                constructor(renderers) {
                    this.renderers = renderers;
                    this.tileMapContainer = $("#tileMapContainer");
                    this.districtInfo = $("#districtInfo");
                    const db = renderers.db;
                    const observer = renderers.observer;
                    observer.subscribe(this, 3);
                }
                renderDistrictInfo(db) {
                    const worldMap = db.worldMap();
                    const worldCoor = this.renderers.getViewModel().worldCoor.getWorldCoor();
                    if (worldCoor === undefined ||
                        !worldMap.isMapReady()) {
                        return this.districtInfo.text("no tile selected");
                    }
                    const deselectButton = $("<input>")
                        .attr("id", DESELECT_BUTTON)
                        .attr("type", "button")
                        .val("deselect district")
                        .click(() => this.renderers.getViewModel().worldCoor.unlockWorldCoor());
                    const terrainType = worldMap.getTerrain(worldCoor);
                    return this.districtInfo
                        .append(deselectButton)
                        .append($("<div>").text(`Tile: ${[worldCoor]}`))
                        .append($("<div>").text(`Type: ${terrainType}`));
                }
                renderMap(db) {
                    const container = $("<div>");
                    const worldCoor = this.renderers.getViewModel().worldCoor.getWorldCoor();
                    if (worldCoor === undefined) {
                        return container;
                    }
                    const worldMap = db.worldMap();
                    if (!worldMap.isMapReady()) {
                        return container;
                    }
                    const [th, tw] = [Model.District.MAP_SIDE, Model.District.MAP_SIDE];
                    const edgeThick = Model.District.EDGE_THICK;
                    const north = worldMap.getNorth(worldCoor);
                    const south = worldMap.getSouth(worldCoor);
                    const east = worldMap.getEast(worldCoor);
                    const west = worldMap.getWest(worldCoor);
                    const terrainNorth = north ? worldMap.getTerrain(north) : 5;
                    const terrainSouth = south ? worldMap.getTerrain(south) : 5;
                    const terrainEast = east ? worldMap.getTerrain(east) : 5;
                    const terrainWest = west ? worldMap.getTerrain(west) : 5;
                    const curTerrain = worldMap.getTerrain(worldCoor);
                    const tileMap = new Array(th * tw).fill(curTerrain);
                    const setRange = (xbegin, xend, ybegin, yend, terrain) => {
                        for (let y = ybegin; y < yend; y++) {
                            for (let x = xbegin; x < xend; x++) {
                                tileMap[y * th + x] = terrain;
                            }
                        }
                    };
                    setRange(0, edgeThick, edgeThick, tw - edgeThick, terrainWest);
                    setRange(th - edgeThick, th, edgeThick, tw - edgeThick, terrainEast);
                    setRange(edgeThick, th - edgeThick, 0, edgeThick, terrainNorth);
                    setRange(edgeThick, th - edgeThick, tw - edgeThick, tw, terrainSouth);
                    setRange(0, edgeThick, tw - edgeThick, tw, 5);
                    setRange(0, edgeThick, 0, edgeThick, 5);
                    setRange(th - edgeThick, th, tw - edgeThick, tw, 5);
                    setRange(th - edgeThick, th, 0, edgeThick, 5);
                    const table = $("<table>");
                    for (let i = 0; i < th; i++) {
                        const row = $("<tr>");
                        for (let j = 0; j < tw; j++) {
                            const color = View.terrainToColor(tileMap[j * tw + i]);
                            const column = $("<td>")
                                .append($("<input>")
                                .attr("type", "button")
                                .width("20px")
                                .css("background-color", color)
                                .css("border", 0)
                                .css("box-shadow", "none")
                                .css("border-radius", 0)
                                .click(() => {
                                if (i < edgeThick ||
                                    i >= tw - edgeThick ||
                                    j < edgeThick ||
                                    j >= tw - edgeThick) {
                                    return;
                                }
                                const plotCoor = Algo.makePair(j - edgeThick, i - edgeThick);
                                this.renderers.getViewModel().districtCoor.coor = [worldCoor, plotCoor];
                                this.renderers.observer.queueUpdate(3);
                            }));
                            row.append(column);
                        }
                        table.append(row);
                    }
                    return container.append(table);
                }
                update(db) {
                    this.tileMapContainer
                        .empty()
                        .append(this.renderMap(db));
                    this.districtInfo
                        .empty()
                        .append(this.renderDistrictInfo(db));
                }
            };
            exports_20("default", TileMapRenderer);
        }
    };
});
System.register("view/worldmap", ["algorithm", "constants", "view/view"], function (exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var Algo, Constants, View, WorldMapRenderer;
    return {
        setters: [
            function (Algo_5) {
                Algo = Algo_5;
            },
            function (Constants_1) {
                Constants = Constants_1;
            },
            function (View_5) {
                View = View_5;
            }
        ],
        execute: function () {
            WorldMapRenderer = class WorldMapRenderer {
                constructor(renderers) {
                    this.renderers = renderers;
                    this.numShowWidth = 10;
                    this.numShowHeight = 10;
                    this.tileLen = 30;
                    this.house = new Image();
                    const db = renderers.db;
                    const observer = renderers.observer;
                    observer.subscribe(this, 0);
                    this.setupController(observer, db, renderers);
                    this.canvas = $("#map");
                    this.canvas
                        .attr("id", "map")
                        .css("margin", "0")
                        .css("padding", "0")
                        .css("user-select", "none");
                    const context = this.canvas[0].getContext("2d");
                    if (!context) {
                        throw new Error("cannot get canvas context");
                    }
                    this.context = context;
                    this.house.src = "./house.svg";
                }
                moveViewport(db) {
                    const worldMap = db.worldMap();
                    if (!worldMap.isMapReady()) {
                        return;
                    }
                    const [width, height] = this.getWidthHeight(worldMap);
                    let [viewportX, viewportY] = this.renderers.getViewModel().mapData.viewportCoor;
                    const moveViewportVertical = (howMuch) => {
                        let row = viewportY + Math.ceil(howMuch);
                        const bottomBound = worldMap.nside - height;
                        if (row < 0) {
                            row = 0;
                        }
                        else if (row > bottomBound) {
                            row = bottomBound;
                        }
                        return row;
                    };
                    const moveViewportHorizontal = (howMuch) => {
                        chai.assert(howMuch !== undefined);
                        let column = viewportX + Math.ceil(howMuch);
                        const rightBound = worldMap.nside - width;
                        if (column < 0) {
                            column = 0;
                        }
                        else if (column > rightBound) {
                            column = rightBound;
                        }
                        return column;
                    };
                    const coor = this.getCoorUnbound(db);
                    if (coor === undefined) {
                        return;
                    }
                    const [x, y] = coor;
                    if (x >= width) {
                        viewportX = moveViewportHorizontal(1);
                    }
                    else if (x < 0) {
                        viewportX = moveViewportHorizontal(-1);
                    }
                    if (y >= height) {
                        viewportY = moveViewportVertical(1);
                    }
                    else if (y < 0) {
                        viewportY = moveViewportVertical(-1);
                    }
                    this.renderers.getViewModel().mapData.viewportCoor = [viewportX, viewportY];
                }
                isMouseInBound(db) {
                    const coor = this.getCoorUnbound(db);
                    if (coor === undefined) {
                        return false;
                    }
                    const worldMap = db.worldMap();
                    const [width, height] = this.getWidthHeight(worldMap);
                    const [x, y] = coor;
                    if (x >= width ||
                        x < 0 ||
                        y >= height ||
                        y < 0) {
                        return false;
                    }
                    return true;
                }
                getCoorUnbound(db) {
                    const worldMap = db.worldMap();
                    if (!worldMap.isMapReady()) {
                        return;
                    }
                    const mouseCoor = this.renderers.getViewModel().mapData.mapMouseCoor;
                    if (mouseCoor === undefined) {
                        return;
                    }
                    const [mx, my] = mouseCoor;
                    const [cx, cy] = this.fromIso(worldMap, mx, my, this.tileLen);
                    const x = Math.floor(cx);
                    const y = Math.floor(cy);
                    return [x, y];
                }
                getCoor(db) {
                    const coor = this.getCoorUnbound(db);
                    if (coor === undefined) {
                        return;
                    }
                    const [cx, cy] = coor;
                    const x = Math.floor(cx);
                    const y = Math.floor(cy);
                    const [width, height] = this.getWidthHeight(db.worldMap());
                    if (x < 0 || x >= width
                        || y < 0 || y >= height) {
                        return undefined;
                    }
                    return [x, y];
                }
                getAbsCoor(db) {
                    const pos = this.getCoor(db);
                    const [viewportX, viewportY] = this.renderers.getViewModel().mapData.viewportCoor;
                    if (pos) {
                        const [x, y] = pos;
                        return [x + viewportX, y + viewportY];
                    }
                }
                render(db) {
                    const worldMap = db.worldMap();
                    const sideLen = this.tileLen * worldMap.nside;
                    const [showTileWidth, showTileHeight] = this.getDimension(worldMap);
                    const canvas = document.createElement("canvas");
                    canvas.width = showTileWidth;
                    canvas.height = showTileHeight;
                    const context = canvas.getContext("2d");
                    if (sideLen !== this.canvas.width() || sideLen !== this.canvas.height()) {
                        this.canvas
                            .attr("width", showTileWidth)
                            .attr("height", showTileHeight)
                            .width(showTileWidth)
                            .height(showTileHeight);
                    }
                    context.save();
                    this.context.clearRect(0, 0, showTileWidth, showTileHeight);
                    if (!worldMap.isMapReady()) {
                        context.save();
                        context.font = "30px Aerial";
                        context.fillStyle = "black";
                        context.textAlign = "center";
                        context.fillText("Creating map...", showTileWidth / 2, showTileHeight / 2);
                        context.restore();
                        this.context.drawImage(canvas, 0, 0);
                        return;
                    }
                    const [width, height] = this.getWidthHeight(worldMap);
                    const d = this.tileLen * width / 2;
                    const toIso = (x, y) => {
                        const [x2, y2] = [x / 2, y / 2];
                        return [x2 - y2 + d, (y2 + x2) / 2];
                    };
                    const drawDiamond = (x, y, side) => {
                        context.beginPath();
                        const [tlX, tlY] = toIso(x, y);
                        const [trX, trY] = toIso(x + side, y);
                        const [blX, blY] = toIso(x + side, y + side);
                        const [brX, brY] = toIso(x, y + side);
                        context.moveTo(tlX, tlY);
                        context.lineTo(trX, trY);
                        context.lineTo(blX, blY);
                        context.lineTo(brX, brY);
                        context.closePath();
                    };
                    const [viewportX, viewportY] = this.renderers.getViewModel().mapData.viewportCoor;
                    for (let y = 0; y < height; y++) {
                        for (let x = 0; x < width; x++) {
                            const vpCoor = Algo.makePair(x + viewportX, y + viewportY);
                            context.fillStyle = View.terrainToColor(worldMap.getTerrain(vpCoor));
                            context.strokeStyle = View.terrainToColor(worldMap.getTerrain(vpCoor));
                            drawDiamond(x * this.tileLen, y * this.tileLen, this.tileLen);
                            context.stroke();
                            context.fill();
                            const district = db.district(vpCoor);
                            if (district && district.len() > 0) {
                                const [tempx, tempy] = toIso(x * this.tileLen, y * this.tileLen);
                                const [realx, realy] = [tempx - this.tileLen / 2, tempy - this.tileLen / 2];
                                context.drawImage(this.house, realx, realy, this.tileLen, this.tileLen);
                            }
                        }
                    }
                    context.restore();
                    context.save();
                    {
                        const tilePos = this.getCoor(db);
                        if (tilePos) {
                            const [x, y] = tilePos;
                            context.beginPath();
                            context.strokeStyle = "black";
                            context.lineWidth = 3;
                            drawDiamond(x * this.tileLen, y * this.tileLen, this.tileLen);
                            context.stroke();
                            worldMap.getNeighbours(tilePos)
                                .forEach(([x2, y2]) => {
                                context.beginPath();
                                context.strokeStyle = "red";
                                context.lineWidth = 1;
                                drawDiamond(x2 * this.tileLen, y2 * this.tileLen, this.tileLen);
                                context.stroke();
                            });
                        }
                    }
                    context.restore();
                    this.context.drawImage(canvas, 0, 0);
                }
                update(db) {
                    this.render(db);
                }
                getWidthHeight(gameMap) {
                    return [
                        Math.min(this.numShowWidth, gameMap.nside),
                        Math.min(this.numShowHeight, gameMap.nside),
                    ];
                }
                fromIso(gameMap, x, y, side) {
                    const [width] = this.getWidthHeight(gameMap);
                    const d = this.tileLen * width / 2;
                    x -= d;
                    y *= 2;
                    const sidehalf = side / 2;
                    return [
                        (x / sidehalf + y / sidehalf) / 2,
                        (y / sidehalf - x / sidehalf) / 2,
                    ];
                }
                getDimension(gameMap) {
                    const [width, height] = this.getWidthHeight(gameMap);
                    return [width * this.tileLen, height * this.tileLen / 2];
                }
                setupController(observer, db, renderers) {
                    let isDrag = false;
                    let dragInterval = null;
                    const worldMap = $("#map");
                    const clearDrag = () => {
                        if (dragInterval) {
                            clearInterval(dragInterval);
                            dragInterval = null;
                        }
                        isDrag = false;
                    };
                    const setMousePos = (pageX, pageY) => {
                        const offset = worldMap.offset();
                        const mouseCoor = Algo.makePair(pageX - offset.left, pageY - offset.top);
                        renderers.getViewModel().mapData.mapMouseCoor = mouseCoor;
                        observer.queueUpdate(0);
                    };
                    worldMap.mousemove((e) => {
                        if (!e) {
                            return;
                        }
                        setMousePos(e.pageX, e.pageY);
                        const channels = [0];
                        const pos = renderers.gameMap.getAbsCoor(db);
                        if (pos) {
                            renderers.getViewModel().worldCoor.setWorldCoor(pos);
                            channels.push(3);
                        }
                        observer.queueUpdate(...channels);
                    }).mousedown((e) => {
                        if (!e) {
                            return;
                        }
                        setMousePos(e.pageX, e.pageY);
                        renderers.getViewModel().worldCoor.lockWorldCoor();
                        isDrag = true;
                        dragInterval = setInterval(() => {
                            if (isDrag) {
                                renderers.gameMap.moveViewport(db);
                                observer.queueUpdate(0);
                            }
                        }, Constants.REFRESH_TIME);
                    }).mouseleave((e) => {
                        observer.queueUpdate(0);
                    }).mouseup((e) => {
                        clearDrag();
                        setMousePos(e.pageX, e.pageY);
                    }).mouseenter((e) => {
                        clearDrag();
                        setMousePos(e.pageX, e.pageY);
                    });
                }
            };
            exports_21("default", WorldMapRenderer);
        }
    };
});
System.register("view/zoneInfo", ["algorithm", "html", "model/model", "view/view"], function (exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    function makeLinkListTable(parent, tableId, db, zone, selectTarget, existBuilding) {
        const productType = Number(selectTarget.value);
        let linkedBuildings;
        if (existBuilding) {
            linkedBuildings = existBuilding.getLinks();
        }
        else {
            linkedBuildings = Immutable.Set();
        }
        const linkTable = $("<table>")
            .attr("id", tableId)
            .append($("<th>").text("Src Id"))
            .append($("<th>").text("Resource"))
            .append($("<th>").text("Contract"));
        const inputRecipe = Model.getInputGoodsRecipe(productType);
        zone.getBuildings()
            .map((buildingIdx) => db.getBuilding(buildingIdx))
            .filter((bu) => inputRecipe.has(bu.getProductType()))
            .map((bu) => {
            const checkbox = $("<input>")
                .attr("type", "checkbox")
                .val(bu.getId());
            if (linkedBuildings.has(bu.getId())) {
                checkbox.prop("checked", true);
            }
            return $("<tr>")
                .append($("<td>").text(bu.getId()))
                .append($("<td>").text(Model.Goods[bu.getProductType()]))
                .append($("<td>")
                .append(checkbox));
        })
            .forEach((row) => linkTable.append(row));
        parent
            .empty()
            .append(linkTable);
    }
    function makeAddModuleDetail(db, zone, existBuilding) {
        const zoneId = zone.getId();
        const select = `${zoneId}select`;
        const extra = `${zoneId}extra`;
        const prodId = `${zoneId}prodId`;
        const ownerId = `${zoneId}ownerId`;
        const linkTableId = `${zoneId}linkTableId`;
        const updateExtra = (parent, moduleKind, selected) => {
            parent.empty();
            switch (moduleKind) {
                case Model.BuildingKind.Produce:
                    {
                        const suggestedLinks = $("<div>");
                        const resourceTypes = Model.getAllowedResourceType(moduleKind)
                            .map((res) => Algo.makePair(res, Model.Goods[res]));
                        const showProductionList = $("<div>")
                            .text("Production Type:")
                            .append(HTML.list(resourceTypes, prodId)
                            .change((e) => {
                            makeLinkListTable(suggestedLinks, linkTableId, db, zone, e.target, existBuilding);
                        }));
                        const showOwnerList = $("<div>")
                            .text("Owner:")
                            .append(HTML.list(db.getPlayer()
                            .getGroupIds()
                            .toIndexedSeq()
                            .map(db.getGroup, db)
                            .filter((group) => group.hasPersonalControl(db.getPlayer()))
                            .map((group) => Algo.makePair(group.getId(), group.getId().toString())), ownerId));
                        parent
                            .append(showOwnerList)
                            .append(showProductionList)
                            .append(suggestedLinks);
                        if (selected !== undefined) {
                            $(`#${prodId}`)
                                .val(selected.getProductType())
                                .trigger("change");
                            $(`#${ownerId}`)
                                .val(selected.getOwnerId())
                                .prop("disabled", true);
                        }
                    }
                    break;
            }
        };
        const title = $("<h3>").text(`${existBuilding ? "Updating" : "Adding"} Module`);
        const modulelist = HTML.list(zone
            .allowedModules()
            .map((moduleKind) => Algo.makePair(moduleKind, Model.BuildingKind[moduleKind])), select)
            .change(() => {
            const moduleKind = Number($(`#${select}`).val());
            updateExtra(extraDiv, moduleKind);
        });
        const extraDiv = $("<div>")
            .attr("id", extra);
        const okButton = $("<input>")
            .attr("type", "button")
            .val("ok")
            .click(() => {
            (() => {
                const selectList = $(`#${select}`);
                if (selectList.val() === null) {
                    return;
                }
                const moduleKind = Number(selectList.val());
                switch (moduleKind) {
                    case Model.BuildingKind.Produce:
                        {
                            const productType = Number($(`#${prodId}`).val());
                            if (productType === null) {
                                return;
                            }
                            const linkIds = Immutable.Seq($(`#${linkTableId} input:checked`).toArray())
                                .map((element) => {
                                const inputEle = element;
                                return Number(inputEle.value);
                            });
                            const ownId = $(`#${ownerId}`).val();
                            if (ownId === undefined) {
                                return;
                            }
                            if (existBuilding) {
                                existBuilding.setProduceType(productType);
                                existBuilding.setLinks(linkIds);
                            }
                            else {
                                const building = db.pushBuilding(new Model.Building(zone.getId(), moduleKind, Number(ownId)));
                                building.setProduceType(productType);
                                building.setLinks(linkIds);
                                zone.addBuilding(building.getId());
                            }
                            return;
                        }
                }
                throw new Error("not handled");
            })();
            $("#changePanel").empty();
        });
        const cancelButton = $("<input>")
            .attr("type", "button")
            .val("cancel")
            .click(() => $(`#changePanel`).empty());
        const ret = $("<div>")
            .css("border", "1px solid black")
            .append(title)
            .append(modulelist)
            .append(extraDiv)
            .append(okButton)
            .append(cancelButton);
        if (existBuilding) {
            modulelist
                .val(existBuilding.kind)
                .prop("disabled", true);
            updateExtra(extraDiv, existBuilding.kind, existBuilding);
        }
        $(`#changePanel`)
            .empty()
            .append(ret);
    }
    var Algo, HTML, Model, View, ZoneRenderer;
    return {
        setters: [
            function (Algo_6) {
                Algo = Algo_6;
            },
            function (HTML_1) {
                HTML = HTML_1;
            },
            function (Model_6) {
                Model = Model_6;
            },
            function (View_6) {
                View = View_6;
            }
        ],
        execute: function () {
            ZoneRenderer = class ZoneRenderer {
                constructor(renderers) {
                    this.renderers = renderers;
                    this.parent = $("#zoneInfo");
                    const db = renderers.db;
                    const observer = renderers.observer;
                    observer.subscribe(this, 3);
                }
                update(db) {
                    this.parent.empty();
                    if (this.renderers.getViewModel().worldCoor.getWorldCoor()) {
                        this.parent.append(this.render(db));
                    }
                }
                render(db) {
                    const worldCoor = this.renderers.getViewModel().worldCoor.getWorldCoor();
                    const zoneList = $("<div>")
                        .attr("id", "zoneList")
                        .append($("<h3>").text("Zone"));
                    const district = db.district(worldCoor);
                    const renderZones = (zone, idx) => {
                        const listItems = $("<li>");
                        const ret = $("<ul>");
                        $("<div>")
                            .append(this.makeZoneDetail(db, zone))
                            .append($("<div>")
                            .attr("id", `${zone.getId()}zone-add`))
                            .appendTo(listItems);
                        return ret.append(listItems);
                    };
                    if (district !== undefined) {
                        district.all().forEach((zoneId, idx) => {
                            const zone = db.getZone(zoneId);
                            zoneList.append(renderZones(zone, idx));
                        });
                    }
                    return zoneList;
                }
                makeZoneDetail(db, zone) {
                    const zoneDetail = $("<span>").text(`${Model.ZoneKind[zone.kind]}`);
                    $("<input>")
                        .attr("type", "button")
                        .val("+")
                        .click(() => {
                        makeAddModuleDetail(db, zone);
                        this.renderers.observer.queueUpdate(3);
                    })
                        .appendTo(zoneDetail);
                    const totalYield = $("<div>")
                        .text("Total Yield:")
                        .appendTo(zoneDetail);
                    const yieldList = $("<ul>")
                        .appendTo(totalYield);
                    zone.getYield(db).forEach((qty, goods) => {
                        $("<li>")
                            .text(`${Model.Goods[goods]}: ${qty}`)
                            .appendTo(yieldList);
                    });
                    $("<div>")
                        .text("Modules")
                        .appendTo(zoneDetail);
                    if (zone.numModules() > 0) {
                        zone.getBuildings()
                            .map((buildingIdx) => db.getBuilding(buildingIdx))
                            .reduce((acc, cur) => {
                            const temp = $("<li>")
                                .text(`${Model.BuildingKind[cur.kind]} ${cur.getId()}`);
                            $("<input>")
                                .attr("type", "button")
                                .val("U")
                                .click(() => {
                                makeAddModuleDetail(db, zone, cur);
                            })
                                .appendTo(temp);
                            if (cur.kind === Model.BuildingKind.Produce) {
                                $("<div>")
                                    .text(`Resource Type: ${Model.Goods[cur.getProductType()]}`)
                                    .appendTo(temp);
                            }
                            const curInventory = cur.getInventory();
                            const curYield = cur.getYield(db);
                            Immutable.Seq(curInventory)
                                .filter(([, qty]) => qty > 0)
                                .forEach(([productType, qty]) => {
                                const thisYield = Algo.qtyGet(curYield, productType);
                                $("<div>")
                                    .text(`> ${Model.Goods[productType]}: ${qty} (+${thisYield})`)
                                    .appendTo(temp);
                            });
                            return acc.append(temp);
                        }, $("<ul>"))
                            .appendTo(zoneDetail);
                    }
                    return zoneDetail;
                }
            };
            exports_22("default", ZoneRenderer);
        }
    };
});
System.register("view/view", ["model/model", "box", "view/group", "view/people", "view/player", "view/tilemap", "view/worldmap", "view/zoneInfo"], function (exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    function terrainToColor(terrain) {
        switch (terrain) {
            case 0:
                return "darkblue";
            case 1:
                return "blue";
            case 2:
                return "green";
            case 3:
                return "yellow";
            case 4:
                return "brown";
            case 5:
                return "black";
        }
        throw new Error("unreachable code");
    }
    exports_23("terrainToColor", terrainToColor);
    var Model, box_js_1, Group, People, Player, TileMap, WorldMap, ZoneInfo, Renderers, MapData, WorldCoor, DistrictCoor, ViewModel;
    return {
        setters: [
            function (Model_7) {
                Model = Model_7;
            },
            function (box_js_1_1) {
                box_js_1 = box_js_1_1;
            },
            function (Group_1) {
                Group = Group_1;
            },
            function (People_1) {
                People = People_1;
            },
            function (Player_1) {
                Player = Player_1;
            },
            function (TileMap_1) {
                TileMap = TileMap_1;
            },
            function (WorldMap_1) {
                WorldMap = WorldMap_1;
            },
            function (ZoneInfo_1) {
                ZoneInfo = ZoneInfo_1;
            }
        ],
        execute: function () {
            Renderers = class Renderers {
                constructor(db, observer) {
                    this.db = db;
                    this.observer = observer;
                    this.viewModel = new box_js_1.default(new ViewModel(this));
                    this.gameMap = new WorldMap.default(this);
                    this.people = new People.default(this);
                    this.tileMap = new TileMap.default(this);
                    this.zoneInfo = new ZoneInfo.default(this);
                    this.player = new Player.default(this);
                    this.group = new Group.default(this);
                    const refreshButton = $("#refreshMapButton")
                        .click(() => {
                        const order = $("#mapOrder").val();
                        const seed = $("#mapSeed").val();
                        db
                            .createMap(seed, order, 0.8)
                            .then(() => observer.queueUpdate(0));
                        this.reset();
                        observer.queueUpdate(0);
                    });
                    const debugMountainfyButton = $("#debugMountainfyButton")
                        .click(() => {
                        observer.queueUpdate(0);
                    });
                }
                getViewModel() {
                    return this.viewModel.unbox();
                }
                reset() {
                    this.viewModel.wrap(new ViewModel(this));
                }
            };
            exports_23("default", Renderers);
            MapData = class MapData {
                constructor() {
                    this.viewportCoor = [0, 0];
                }
            };
            exports_23("MapData", MapData);
            WorldCoor = class WorldCoor {
                constructor(viewModel) {
                    this.viewModel = viewModel;
                    this.isLockWorldCoor = false;
                }
                setWorldCoor(coor) {
                    if (!this.isLockWorldCoor) {
                        this.worldCoor = coor;
                    }
                }
                getWorldCoor() {
                    return this.worldCoor;
                }
                lockWorldCoor() {
                    const isMouseInBound = this.viewModel.renderers.gameMap.isMouseInBound(this.viewModel.renderers.db);
                    if (isMouseInBound) {
                        this.isLockWorldCoor = true;
                    }
                }
                unlockWorldCoor(isLock) {
                    this.isLockWorldCoor = false;
                }
            };
            exports_23("WorldCoor", WorldCoor);
            DistrictCoor = class DistrictCoor {
            };
            exports_23("DistrictCoor", DistrictCoor);
            ViewModel = class ViewModel {
                constructor(renderers) {
                    this.renderers = renderers;
                    this.mapData = new MapData();
                    this.worldCoor = new WorldCoor(this);
                    this.districtCoor = new DistrictCoor();
                }
            };
            exports_23("ViewModel", ViewModel);
        }
    };
});
System.register("main", ["model/model", "observer", "view/view"], function (exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    function makeDB() {
        return __awaiter(this, void 0, void 0, function* () {
            const order = $("#mapOrder").val();
            const seed = $("#mapSeed").val();
            const db = new Model.DB();
            const mapPromise = db.createMap(seed, order, 0.8);
            const player = db.addPerson("Robert");
            db.setPlayer(player);
            db.addPerson("Tom");
            db.addPerson("Sam");
            const numShareOwned = 1;
            const startingCaptial = 10000;
            const company = db.pushGroup(new Model.Company(startingCaptial));
            company.setPersonalShares(player, 1);
            yield mapPromise;
            db.randomlyPlaceBuildings(10);
            db.tryPlaceZone([4, 5], [3, 3], Model.ZoneKind.Residential);
            db.tryPlaceZone([4, 5], [3, 1], Model.ZoneKind.Production);
            return db;
        });
    }
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield makeDB();
            const observer = new Observer.Observer();
            const renderers = new View.default(db, observer);
            const startRender = () => {
                observer.update(db);
                requestAnimationFrame(() => startRender());
            };
            observer.queueAllUpdate();
            startRender();
            setInterval(() => {
                db.turn();
                observer.queueAllUpdate();
            }, 1000);
        });
    }
    exports_24("main", main);
    var Model, Observer, View;
    return {
        setters: [
            function (Model_8) {
                Model = Model_8;
            },
            function (Observer_1) {
                Observer = Observer_1;
            },
            function (View_7) {
                View = View_7;
            }
        ],
        execute: function () {
            main();
        }
    };
});
//# sourceMappingURL=main.js.map