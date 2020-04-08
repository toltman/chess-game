// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Piece.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Piece = function Piece(owner, img) {
  _classCallCheck(this, Piece);

  this.owner = owner;
  this.image = img;
};

var _default = Piece;
exports.default = _default;
},{}],"Pawn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Piece2 = _interopRequireDefault(require("./Piece.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Pawn = /*#__PURE__*/function (_Piece) {
  _inherits(Pawn, _Piece);

  var _super = _createSuper(Pawn);

  function Pawn(owner, img) {
    _classCallCheck(this, Pawn);

    return _super.call(this, owner, img);
  }

  return Pawn;
}(_Piece2.default);

var _default = Pawn;
exports.default = _default;
},{"./Piece.js":"Piece.js"}],"Bishop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Piece2 = _interopRequireDefault(require("./Piece.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Bishop = /*#__PURE__*/function (_Piece) {
  _inherits(Bishop, _Piece);

  var _super = _createSuper(Bishop);

  function Bishop(owner, img) {
    _classCallCheck(this, Bishop);

    return _super.call(this, owner, img);
  }

  return Bishop;
}(_Piece2.default);

var _default = Bishop;
exports.default = _default;
},{"./Piece.js":"Piece.js"}],"Knight.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Piece2 = _interopRequireDefault(require("./Piece.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Knight = /*#__PURE__*/function (_Piece) {
  _inherits(Knight, _Piece);

  var _super = _createSuper(Knight);

  function Knight(owner, img) {
    _classCallCheck(this, Knight);

    return _super.call(this, owner, img);
  }

  return Knight;
}(_Piece2.default);

var _default = Knight;
exports.default = _default;
},{"./Piece.js":"Piece.js"}],"Rook.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Piece2 = _interopRequireDefault(require("./Piece.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rook = /*#__PURE__*/function (_Piece) {
  _inherits(Rook, _Piece);

  var _super = _createSuper(Rook);

  function Rook(owner, img) {
    _classCallCheck(this, Rook);

    return _super.call(this, owner, img);
  }

  return Rook;
}(_Piece2.default);

var _default = Rook;
exports.default = _default;
},{"./Piece.js":"Piece.js"}],"Queen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Piece2 = _interopRequireDefault(require("./Piece.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Queen = /*#__PURE__*/function (_Piece) {
  _inherits(Queen, _Piece);

  var _super = _createSuper(Queen);

  function Queen(owner, img) {
    _classCallCheck(this, Queen);

    return _super.call(this, owner, img);
  }

  return Queen;
}(_Piece2.default);

var _default = Queen;
exports.default = _default;
},{"./Piece.js":"Piece.js"}],"King.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Piece2 = _interopRequireDefault(require("./Piece.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var King = /*#__PURE__*/function (_Piece) {
  _inherits(King, _Piece);

  var _super = _createSuper(King);

  function King(owner, img) {
    _classCallCheck(this, King);

    return _super.call(this, owner, img);
  }

  return King;
}(_Piece2.default);

var _default = King;
exports.default = _default;
},{"./Piece.js":"Piece.js"}],"images/Chess_bdt60.png":[function(require,module,exports) {
module.exports = "/Chess_bdt60.be8cff8f.png";
},{}],"images/Chess_klt60.png":[function(require,module,exports) {
module.exports = "/Chess_klt60.99d87d31.png";
},{}],"images/Chess_kdt60.png":[function(require,module,exports) {
module.exports = "/Chess_kdt60.cb048e8d.png";
},{}],"images/Chess_blt60.png":[function(require,module,exports) {
module.exports = "/Chess_blt60.e65e2137.png";
},{}],"images/Chess_ndt60.png":[function(require,module,exports) {
module.exports = "/Chess_ndt60.c9d49293.png";
},{}],"images/Chess_nlt60.png":[function(require,module,exports) {
module.exports = "/Chess_nlt60.3288c199.png";
},{}],"images/Chess_plt60.png":[function(require,module,exports) {
module.exports = "/Chess_plt60.62ebd350.png";
},{}],"images/Chess_pdt60.png":[function(require,module,exports) {
module.exports = "/Chess_pdt60.c1e9e5d0.png";
},{}],"images/Chess_qdt60.png":[function(require,module,exports) {
module.exports = "/Chess_qdt60.30799a77.png";
},{}],"images/Chess_qlt60.png":[function(require,module,exports) {
module.exports = "/Chess_qlt60.6629caa5.png";
},{}],"images/Chess_rdt60.png":[function(require,module,exports) {
module.exports = "/Chess_rdt60.729f6c66.png";
},{}],"images/Chess_rlt60.png":[function(require,module,exports) {
module.exports = "/Chess_rlt60.a51c5eab.png";
},{}],"images/*.png":[function(require,module,exports) {
module.exports = {
  "Chess_bdt60": require("./Chess_bdt60.png"),
  "Chess_klt60": require("./Chess_klt60.png"),
  "Chess_kdt60": require("./Chess_kdt60.png"),
  "Chess_blt60": require("./Chess_blt60.png"),
  "Chess_ndt60": require("./Chess_ndt60.png"),
  "Chess_nlt60": require("./Chess_nlt60.png"),
  "Chess_plt60": require("./Chess_plt60.png"),
  "Chess_pdt60": require("./Chess_pdt60.png"),
  "Chess_qdt60": require("./Chess_qdt60.png"),
  "Chess_qlt60": require("./Chess_qlt60.png"),
  "Chess_rdt60": require("./Chess_rdt60.png"),
  "Chess_rlt60": require("./Chess_rlt60.png")
};
},{"./Chess_bdt60.png":"images/Chess_bdt60.png","./Chess_klt60.png":"images/Chess_klt60.png","./Chess_kdt60.png":"images/Chess_kdt60.png","./Chess_blt60.png":"images/Chess_blt60.png","./Chess_ndt60.png":"images/Chess_ndt60.png","./Chess_nlt60.png":"images/Chess_nlt60.png","./Chess_plt60.png":"images/Chess_plt60.png","./Chess_pdt60.png":"images/Chess_pdt60.png","./Chess_qdt60.png":"images/Chess_qdt60.png","./Chess_qlt60.png":"images/Chess_qlt60.png","./Chess_rdt60.png":"images/Chess_rdt60.png","./Chess_rlt60.png":"images/Chess_rlt60.png"}],"Player.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Pawn = _interopRequireDefault(require("./Pawn.js"));

var _Bishop = _interopRequireDefault(require("./Bishop.js"));

var _Knight = _interopRequireDefault(require("./Knight.js"));

var _Rook = _interopRequireDefault(require("./Rook.js"));

var _Queen = _interopRequireDefault(require("./Queen.js"));

var _King = _interopRequireDefault(require("./King.js"));

var _ = _interopRequireDefault(require("./images/*.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player = /*#__PURE__*/function () {
  function Player(color) {
    _classCallCheck(this, Player);

    this.color = color;
    this.pawns = this.createPawns();
    this.bishops = this.createBishops();
    this.knights = this.createKnights();
    this.rooks = this.createRooks();
    this.queens = this.createQueen();
    this.king = this.createKing();
  }

  _createClass(Player, [{
    key: "createPawns",
    value: function createPawns() {
      var pawns = [];
      var pawn_img = this.color === "white" ? _.default.Chess_plt60 : _.default.Chess_pdt60;

      for (var i = 0; i < 8; i++) {
        var pawn = new _Pawn.default(this, pawn_img);
        pawns.push(pawn);
      }

      return pawns;
    }
  }, {
    key: "createBishops",
    value: function createBishops() {
      var bishops = [];
      var bishop_img = this.color === "white" ? _.default.Chess_blt60 : _.default.Chess_bdt60;

      for (var i = 0; i < 2; i++) {
        var bishop = new _Bishop.default(this, bishop_img);
        bishops.push(bishop);
      }

      return bishops;
    }
  }, {
    key: "createKnights",
    value: function createKnights() {
      var knights = [];
      var knight_img = this.color === "white" ? _.default.Chess_nlt60 : _.default.Chess_ndt60;

      for (var i = 0; i < 2; i++) {
        var knight = new _Knight.default(this, knight_img);
        knights.push(knight);
      }

      return knights;
    }
  }, {
    key: "createRooks",
    value: function createRooks() {
      var rooks = [];
      var rook_img = this.color === "white" ? _.default.Chess_rlt60 : _.default.Chess_rdt60;

      for (var i = 0; i < 2; i++) {
        var rook = new _Rook.default(this, rook_img);
        rooks.push(rook);
      }

      return rooks;
    }
  }, {
    key: "createQueen",
    value: function createQueen() {
      var queens = [];
      var queen_img = this.color === "white" ? _.default.Chess_qlt60 : _.default.Chess_qdt60;
      var queen = new _Queen.default(this, queen_img);
      queens.push(queen);
      return queens;
    }
  }, {
    key: "createKing",
    value: function createKing() {
      var king_img = this.color === "white" ? _.default.Chess_klt60 : _.default.Chess_kdt60;
      var king = new _King.default(this, king_img);
      return king;
    }
  }]);

  return Player;
}();

var _default = Player;
exports.default = _default;
},{"./Pawn.js":"Pawn.js","./Bishop.js":"Bishop.js","./Knight.js":"Knight.js","./Rook.js":"Rook.js","./Queen.js":"Queen.js","./King.js":"King.js","./images/*.png":"images/*.png"}],"Square.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Square = function Square(name) {
  _classCallCheck(this, Square);

  this.name = name;
  this.piece = null;
};

var _default = Square;
exports.default = _default;
},{}],"Board.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Square = _interopRequireDefault(require("./Square.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var colNames = ["a", "b", "c", "d", "e", "f", "g", "h"];

var Board = /*#__PURE__*/function () {
  function Board() {
    _classCallCheck(this, Board);

    this.rows = 8;
    this.cols = 8;
    this.squares = this.createSquares();
  }
  /**
   * Creates a 2D array of squares
   */


  _createClass(Board, [{
    key: "createSquares",
    value: function createSquares() {
      var board = [];

      for (var i = 0; i < this.rows; i++) {
        var row = [];

        var _iterator = _createForOfIteratorHelper(colNames),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var col = _step.value;
            var square = new _Square.default("".concat(col + (i + 1)));
            row.push(square);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        board.push(row);
      }

      return board;
    }
  }, {
    key: "renderPieces",
    value: function renderPieces() {
      for (var row = 0; row < this.rows; row++) {
        for (var col = 0; col < this.cols; col++) {
          var piece = this.squares[row][col].piece;

          if (piece) {
            var htmlPiece = document.createElement("img");
            htmlPiece.src = piece.image;
            htmlPiece.alt = "img";
            document.getElementById("".concat(col, "-").concat(row)).appendChild(htmlPiece);
          }
        }
      }
    }
  }]);

  return Board;
}();

var _default = Board;
exports.default = _default;
},{"./Square.js":"Square.js"}],"Game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Player = _interopRequireDefault(require("./Player.js"));

var _Board = _interopRequireDefault(require("./Board.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.playerWhite = new _Player.default("white");
    this.playerBlack = new _Player.default("black");
    this.board = new _Board.default();
  }

  _createClass(Game, [{
    key: "setUpPieces",
    value: function setUpPieces() {
      for (var i = 0; i < 8; i++) {
        this.board.squares[1][i].piece = this.playerWhite.pawns[i];
      }

      for (var _i = 0; _i < 8; _i++) {
        this.board.squares[6][_i].piece = this.playerBlack.pawns[_i];
      }

      this.board.squares[0][0].piece = this.playerWhite.rooks[0];
      this.board.squares[0][1].piece = this.playerWhite.knights[0];
      this.board.squares[0][2].piece = this.playerWhite.bishops[0];
      this.board.squares[0][3].piece = this.playerWhite.queens[0];
      this.board.squares[0][4].piece = this.playerWhite.king;
      this.board.squares[0][5].piece = this.playerWhite.bishops[1];
      this.board.squares[0][6].piece = this.playerWhite.knights[1];
      this.board.squares[0][7].piece = this.playerWhite.rooks[1];
      this.board.squares[7][0].piece = this.playerBlack.rooks[0];
      this.board.squares[7][1].piece = this.playerBlack.knights[0];
      this.board.squares[7][2].piece = this.playerBlack.bishops[0];
      this.board.squares[7][3].piece = this.playerBlack.queens[0];
      this.board.squares[7][4].piece = this.playerBlack.king;
      this.board.squares[7][5].piece = this.playerBlack.bishops[1];
      this.board.squares[7][6].piece = this.playerBlack.knights[1];
      this.board.squares[7][7].piece = this.playerBlack.rooks[1];
    }
  }]);

  return Game;
}();

var _default = Game;
exports.default = _default;
},{"./Player.js":"Player.js","./Board.js":"Board.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _Game = _interopRequireDefault(require("./Game.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
var board = document.getElementById("chess-board"); // Maps letters onto numbers
// const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 + 1;
// Get square color

var getSquareColor = function getSquareColor(row, col) {
  return (row + col + 1) % 2 == 0 ? "white" : "black";
};

for (var row = 0; row < 8; row++) {
  var rowDiv = document.createElement("div");
  rowDiv.setAttribute("class", "row");
  board.appendChild(rowDiv);

  for (var col = 0; col < 8; col++) {
    var htmlSquare = document.createElement("div");
    htmlSquare.id = "".concat(col, "-").concat(row);
    htmlSquare.className = "square ".concat(getSquareColor(row, col));
    rowDiv.appendChild(htmlSquare);
  }
}

var game = new _Game.default();
console.log(game);
game.setUpPieces();
game.board.renderPieces();
},{"./Game.js":"Game.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57385" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map