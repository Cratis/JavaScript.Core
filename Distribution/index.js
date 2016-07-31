"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Exception = require("./Exception");

Object.keys(_Exception).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Exception[key];
    }
  });
});

var _NotImplemented = require("./NotImplemented");

Object.keys(_NotImplemented).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _NotImplemented[key];
    }
  });
});
//# sourceMappingURL=index.js.map
