"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Exception = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*---------------------------------------------------------------------------------------------
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  Licensed under the MIT License. See License.txt in the project root for license information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *--------------------------------------------------------------------------------------------*/


var _cratisJavascriptReflection = require("cratis-javascript-reflection");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _message = new WeakMap();

/**
 * Defines a base for structured exceptions 
 */

var Exception = exports.Exception = function () {
  /**
   * Initializes a new instance of {Exception}
   * @param {message} Message to include with the exception 
   */
  function Exception(message) {
    _classCallCheck(this, Exception);

    _message.set(this, message);
  }

  /**
   * Get the message for the exception
   */


  _createClass(Exception, [{
    key: "message",
    get: function get() {
      if (_message.get(this)) return _message.get(this);
      return "";
    }

    /**
     * Throw an instance of the exception
     */

  }], [{
    key: "throw",
    value: function _throw() {
      var bindArguments = [null];
      for (var argumentIndex = 0; argumentIndex < arguments.length; argumentIndex++) {
        bindArguments.push(arguments[argumentIndex]);
      }var boundException = this.bind.apply(this, bindArguments);
      throw new boundException();
    }
  }]);

  return Exception;
}();
//# sourceMappingURL=Exception.js.map
