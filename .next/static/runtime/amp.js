(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/runtime/amp.js"],{

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/unfetch.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, _data, curPage, pageUpdated;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return (0, _unfetch["default"])("" + hotUpdatePath + curHash + ".hot-update.json");

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            _data = _context.sent;
            curPage = page === '/' ? 'index' : page;
            pageUpdated = Object.keys(_data.c).some(function (mod) {
              return mod.indexOf("pages" + (curPage.substr(0, 1) === '/' ? curPage : "/" + curPage)) !== -1 || mod.indexOf(("pages" + (curPage.substr(0, 1) === '/' ? curPage : "/" + curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource.getEventSourceWrapper)({
  path: assetPrefix + "/_next/webpack-hmr"
}).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    if (event.data.indexOf('action') !== -1) {
      eventCallbacks.forEach(function (cb) {
        return cb(event);
      });
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }

  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below


var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behaviour, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  (0, _unfetch["default"])(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = _unfetch["default"] != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent;

function displayContent(callback) {
  // This is the fallback helper that removes Next.js' no-FOUC styles when
  // CSS mode is enabled. This only really activates if you haven't created
  // _any_ styles in your application yet.
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  var url = assetPrefix + "/_next/webpack-hmr?page=" + currentPage;
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch["default"])(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvYW1wLWRldi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9mb3VjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9vbi1kZW1hbmQtZW50cmllcy11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfdW5mZXRjaCIsIl9ldmVudFNvdXJjZVBvbHlmaWxsIiwiX2V2ZW50c291cmNlIiwiX29uRGVtYW5kRW50cmllc1V0aWxzIiwiX2ZvdWMiLCJ3aW5kb3ciLCJFdmVudFNvdXJjZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhc3NldFByZWZpeCIsInBhZ2UiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJfX3dlYnBhY2tfaGFzaF9fIiwiaG90VXBkYXRlUGF0aCIsImVuZHNXaXRoIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJtb2R1bGUiLCJob3QiLCJzdGF0dXMiLCJ0cnlBcHBseVVwZGF0ZXMiLCJyZXMiLCJqc29uIiwiX2RhdGEiLCJjdXJQYWdlIiwicGFnZVVwZGF0ZWQiLCJPYmplY3QiLCJrZXlzIiwiYyIsInNvbWUiLCJtb2QiLCJpbmRleE9mIiwic3Vic3RyIiwicmVwbGFjZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uc29sZSIsImVycm9yIiwiZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIiwicGF0aCIsImFkZE1lc3NhZ2VMaXN0ZW5lciIsImV2ZW50IiwibWVzc2FnZSIsImFjdGlvbiIsImhhc2giLCJleCIsIndhcm4iLCJzZXR1cFBpbmciLCJkaXNwbGF5Q29udGVudCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZXZlbnRDYWxsYmFja3MiLCJFdmVudFNvdXJjZVdyYXBwZXIiLCJvcHRpb25zIiwic291cmNlIiwibGFzdEFjdGl2aXR5IiwiRGF0ZSIsImxpc3RlbmVycyIsInRpbWVvdXQiLCJpbml0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImhhbmRsZURpc2Nvbm5lY3QiLCJvbm9wZW4iLCJoYW5kbGVPbmxpbmUiLCJvbmVycm9yIiwib25tZXNzYWdlIiwiaGFuZGxlTWVzc2FnZSIsImxvZyIsImkiLCJsZW5ndGgiLCJmb3JFYWNoIiwiY2IiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwiZm4iLCJwdXNoIiwib25kZW1hbmQiLCJSZXNwb25zZSIsIlRleHREZWNvZGVyIiwiVGV4dEVuY29kZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJzaWduYWwiLCJhYm9ydCIsIlRleHREZWNvZGVyUG9seWZpbGwiLCJiaXRzTmVlZGVkIiwiY29kZVBvaW50IiwicHJvdG90eXBlIiwiZGVjb2RlIiwib2N0ZXRzIiwidmFsaWQiLCJzaGlmdCIsIm9jdGV0c0NvdW50IiwiRXJyb3IiLCJSRVBMQUNFUiIsInN0cmluZyIsIm9jdGV0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJlbmNvZGUiLCJzdHJlYW0iLCJrIiwiWEhSV3JhcHBlciIsInhociIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlVHlwZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0Iiwib25wcm9ncmVzcyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9jb250ZW50VHlwZSIsIl94aHIiLCJfc2VuZFRpbWVvdXQiLCJfYWJvcnQiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwidGhhdCIsInN0YXRlIiwic2lsZW50IiwiY2xlYXJUaW1lb3V0Iiwib25sb2FkIiwib25hYm9ydCIsIm9uU3RhcnQiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwib25Qcm9ncmVzcyIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJuYW1lIiwic2V0UmVxdWVzdEhlYWRlciIsInZhbHVlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2VuZCIsImVycm9yMSIsInRvTG93ZXJDYXNlIiwiY2hhckNvZGVBdCIsIkhlYWRlcnNQb2x5ZmlsbCIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImFycmF5Iiwic3BsaXQiLCJsaW5lIiwicGFydHMiLCJqb2luIiwiX21hcCIsImdldCIsIlhIUlRyYW5zcG9ydCIsIm9uU3RhcnRDYWxsYmFjayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJoZWFkZXJzIiwib2Zmc2V0IiwiY2h1bmsiLCJzbGljZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkhlYWRlcnNXcmFwcGVyIiwiX2hlYWRlcnMiLCJGZXRjaFRyYW5zcG9ydCIsImNvbnRyb2xsZXIiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWFkZXIiLCJib2R5IiwiZ2V0UmVhZGVyIiwiY2FuY2VsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkTmV4dENodW5rIiwicmVhZCIsInJlc3VsdCIsImRvbmUiLCJFdmVudFRhcmdldCIsIl9saXN0ZW5lcnMiLCJ0aHJvd0Vycm9yIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJ0YXJnZXQiLCJ0eXBlTGlzdGVuZXJzIiwidHlwZSIsImxpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm91bmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWQiLCJFdmVudCIsIk1lc3NhZ2VFdmVudCIsImxhc3RFdmVudElkIiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwiZGVmIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJmaXJlIiwiZiIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJfY2xvc2UiLCJzdGFydCIsImlzRmV0Y2hTdXBwb3J0ZWQiLCJlcyIsIkJvb2xlYW4iLCJpbml0aWFsUmV0cnkiLCJoZWFydGJlYXRUaW1lb3V0IiwicmV0cnkiLCJ3YXNBY3Rpdml0eSIsInN0cmluZ2lmeSIsIkN1cnJlbnRUcmFuc3BvcnQiLCJUcmFuc3BvcnQiLCJ0cmFuc3BvcnQiLCJjYW5jZWxGdW5jdGlvbiIsImN1cnJlbnRTdGF0ZSIsImRhdGFCdWZmZXIiLCJsYXN0RXZlbnRJZEJ1ZmZlciIsImV2ZW50VHlwZUJ1ZmZlciIsInRleHRCdWZmZXIiLCJmaWVsZFN0YXJ0IiwidmFsdWVTdGFydCIsInRlc3QiLCJ0ZXh0Q2h1bmsiLCJwb3NpdGlvbiIsImZpZWxkIiwicmVxdWVzdFVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RIZWFkZXJzIiwiX2RlZmF1bHQiLCJjYWxsYmFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIngiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY2xvc2VQaW5nIiwiY3VycmVudFBhZ2UiLCJldnRTb3VyY2UiLCJwYXRobmFtZUZuIiwicGF0aG5hbWUiLCJwYXlsb2FkIiwiaW52YWxpZCIsImhyZWYiLCJwYWdlUmVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsbUJBQU8sQ0FBQywwRUFBcUI7Ozs7Ozs7Ozs7OztBQ0E5Qyw2QkFBNkIsY0FBYywyQkFBMkIsdUNBQXVDLGNBQWMsT0FBTyxpR0FBaUcsdUNBQXVDLGlCQUFpQixtREFBbUQsaUJBQWlCLCtDQUErQyxrQkFBa0IsZ0JBQWdCLFNBQVMsb0JBQW9CLFNBQVMsaUJBQWlCLDBCQUEwQixpQkFBaUIsK0JBQStCLDhEQUE4RCxpRkFBaUYsK0RBQStELFNBQVMscUdBQXFHLHFCQUFxQjtBQUNsNEI7Ozs7Ozs7Ozs7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VztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4dEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvcnVudGltZS9hbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcclxuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlamVjdChlcnJvcik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoaW5mby5kb25lKSB7XHJcbiAgICByZXNvbHZlKHZhbHVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xyXG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xyXG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICBcImRlZmF1bHRcIjogb2JqXHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XHJcbiIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGUsbil7cmV0dXJuIG49bnx8e30sbmV3IFByb21pc2UoZnVuY3Rpb24odCxyKXt2YXIgcz1uZXcgWE1MSHR0cFJlcXVlc3Qsbz1bXSx1PVtdLGk9e30sYT1mdW5jdGlvbigpe3JldHVybntvazoyPT0ocy5zdGF0dXMvMTAwfDApLHN0YXR1c1RleHQ6cy5zdGF0dXNUZXh0LHN0YXR1czpzLnN0YXR1cyx1cmw6cy5yZXNwb25zZVVSTCx0ZXh0OmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzLnJlc3BvbnNlVGV4dCl9LGpzb246ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEpTT04ucGFyc2Uocy5yZXNwb25zZVRleHQpKX0sYmxvYjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3MucmVzcG9uc2VdKSl9LGNsb25lOmEsaGVhZGVyczp7a2V5czpmdW5jdGlvbigpe3JldHVybiBvfSxlbnRyaWVzOmZ1bmN0aW9uKCl7cmV0dXJuIHV9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gaVtlLnRvTG93ZXJDYXNlKCldfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKWluIGl9fX19O2Zvcih2YXIgbCBpbiBzLm9wZW4obi5tZXRob2R8fFwiZ2V0XCIsZSwhMCkscy5vbmxvYWQ9ZnVuY3Rpb24oKXtzLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnJlcGxhY2UoL14oLio/KTpbXlxcU1xcbl0qKFtcXHNcXFNdKj8pJC9nbSxmdW5jdGlvbihlLG4sdCl7by5wdXNoKG49bi50b0xvd2VyQ2FzZSgpKSx1LnB1c2goW24sdF0pLGlbbl09aVtuXT9pW25dK1wiLFwiK3Q6dH0pLHQoYSgpKX0scy5vbmVycm9yPXIscy53aXRoQ3JlZGVudGlhbHM9XCJpbmNsdWRlXCI9PW4uY3JlZGVudGlhbHMsbi5oZWFkZXJzKXMuc2V0UmVxdWVzdEhlYWRlcihsLG4uaGVhZGVyc1tsXSk7cy5zZW5kKG4uYm9keXx8bnVsbCl9KX07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuZmV0Y2guanMubWFwXHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX3VuZmV0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoXCIpKTt2YXIgX2V2ZW50U291cmNlUG9seWZpbGw9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ldmVudC1zb3VyY2UtcG9seWZpbGxcIikpO3ZhciBfZXZlbnRzb3VyY2U9cmVxdWlyZShcIi4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZVwiKTt2YXIgX29uRGVtYW5kRW50cmllc1V0aWxzPXJlcXVpcmUoXCIuL29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzXCIpO3ZhciBfZm91Yz1yZXF1aXJlKFwiLi9mb3VjXCIpOy8qIGdsb2JhbHMgX193ZWJwYWNrX2hhc2hfXyAqL2lmKCF3aW5kb3cuRXZlbnRTb3VyY2Upe3dpbmRvdy5FdmVudFNvdXJjZT1fZXZlbnRTb3VyY2VQb2x5ZmlsbC5kZWZhdWx0O312YXIgZGF0YT1KU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX05FWFRfREFUQV9fJykudGV4dENvbnRlbnQpO3Zhcnthc3NldFByZWZpeCxwYWdlfT1kYXRhO2Fzc2V0UHJlZml4PWFzc2V0UHJlZml4fHwnJzt2YXIgbW9zdFJlY2VudEhhc2g9bnVsbDsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi92YXIgY3VySGFzaD1fX3dlYnBhY2tfaGFzaF9fO3ZhciBob3RVcGRhdGVQYXRoPWFzc2V0UHJlZml4Kyhhc3NldFByZWZpeC5lbmRzV2l0aCgnLycpPycnOicvJykrJ19uZXh0L3N0YXRpYy93ZWJwYWNrLyc7Ly8gSXMgdGhlcmUgYSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgY29kZSBhdmFpbGFibGU/XHJcbmZ1bmN0aW9uIGlzVXBkYXRlQXZhaWxhYmxlKCl7Ly8gX193ZWJwYWNrX2hhc2hfXyBpcyB0aGUgaGFzaCBvZiB0aGUgY3VycmVudCBjb21waWxhdGlvbi5cclxuLy8gSXQncyBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBieSBXZWJwYWNrLlxyXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9yZXR1cm4gbW9zdFJlY2VudEhhc2ghPT1fX3dlYnBhY2tfaGFzaF9fO30vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cclxuZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGVzKCl7cmV0dXJuIG1vZHVsZS5ob3Quc3RhdHVzKCk9PT0naWRsZSc7fS8vIFRoaXMgZnVuY3Rpb24gcmVhZHMgY29kZSB1cGRhdGVzIG9uIHRoZSBmbHkgYW5kIGhhcmRcclxuLy8gcmVsb2FkcyB0aGUgcGFnZSB3aGVuIGl0IGhhcyBjaGFuZ2VkLlxyXG5hc3luYyBmdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKXtpZighaXNVcGRhdGVBdmFpbGFibGUoKXx8IWNhbkFwcGx5VXBkYXRlcygpKXtyZXR1cm47fXRyeXt2YXIgcmVzPWF3YWl0KDAsX3VuZmV0Y2guZGVmYXVsdCkoXCJcIitob3RVcGRhdGVQYXRoK2N1ckhhc2grXCIuaG90LXVwZGF0ZS5qc29uXCIpO3ZhciBfZGF0YT1hd2FpdCByZXMuanNvbigpO3ZhciBjdXJQYWdlPXBhZ2U9PT0nLyc/J2luZGV4JzpwYWdlO3ZhciBwYWdlVXBkYXRlZD1PYmplY3Qua2V5cyhfZGF0YS5jKS5zb21lKG1vZD0+e3JldHVybiBtb2QuaW5kZXhPZihcInBhZ2VzXCIrKGN1clBhZ2Uuc3Vic3RyKDAsMSk9PT0nLyc/Y3VyUGFnZTpcIi9cIitjdXJQYWdlKSkhPT0tMXx8bW9kLmluZGV4T2YoKFwicGFnZXNcIisoY3VyUGFnZS5zdWJzdHIoMCwxKT09PScvJz9jdXJQYWdlOlwiL1wiK2N1clBhZ2UpKS5yZXBsYWNlKC9cXC8vZywnXFxcXCcpKSE9PS0xO30pO2lmKHBhZ2VVcGRhdGVkKXtkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7fWVsc2V7Y3VySGFzaD1tb3N0UmVjZW50SGFzaDt9fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgY2hlY2tpbmcgZm9yIHVwZGF0ZScsZXJyKTtkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7fX0oMCxfZXZlbnRzb3VyY2UuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKSh7cGF0aDphc3NldFByZWZpeCtcIi9fbmV4dC93ZWJwYWNrLWhtclwifSkuYWRkTWVzc2FnZUxpc3RlbmVyKGV2ZW50PT57aWYoZXZlbnQuZGF0YT09PSdcXHVEODNEXFx1REM5Mycpe3JldHVybjt9dHJ5e3ZhciBtZXNzYWdlPUpTT04ucGFyc2UoZXZlbnQuZGF0YSk7aWYobWVzc2FnZS5hY3Rpb249PT0nc3luYyd8fG1lc3NhZ2UuYWN0aW9uPT09J2J1aWx0Jyl7aWYoIW1lc3NhZ2UuaGFzaCl7cmV0dXJuO31tb3N0UmVjZW50SGFzaD1tZXNzYWdlLmhhc2g7dHJ5QXBwbHlVcGRhdGVzKCk7fWVsc2UgaWYobWVzc2FnZS5hY3Rpb249PT0ncmVsb2FkUGFnZScpe2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTt9fWNhdGNoKGV4KXtjb25zb2xlLndhcm4oJ0ludmFsaWQgSE1SIG1lc3NhZ2U6ICcrZXZlbnQuZGF0YSsnXFxuJytleCk7fX0pOygwLF9vbkRlbWFuZEVudHJpZXNVdGlscy5zZXR1cFBpbmcpKGFzc2V0UHJlZml4LCgpPT5wYWdlKTsoMCxfZm91Yy5kaXNwbGF5Q29udGVudCkoKTsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldEV2ZW50U291cmNlV3JhcHBlcj1nZXRFdmVudFNvdXJjZVdyYXBwZXI7dmFyIGV2ZW50Q2FsbGJhY2tzPVtdO2Z1bmN0aW9uIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKXt2YXIgc291cmNlO3ZhciBsYXN0QWN0aXZpdHk9bmV3IERhdGUoKTt2YXIgbGlzdGVuZXJzPVtdO2lmKCFvcHRpb25zLnRpbWVvdXQpe29wdGlvbnMudGltZW91dD0yMCoxMDAwO31pbml0KCk7dmFyIHRpbWVyPXNldEludGVydmFsKGZ1bmN0aW9uKCl7aWYobmV3IERhdGUoKS1sYXN0QWN0aXZpdHk+b3B0aW9ucy50aW1lb3V0KXtoYW5kbGVEaXNjb25uZWN0KCk7fX0sb3B0aW9ucy50aW1lb3V0LzIpO2Z1bmN0aW9uIGluaXQoKXtzb3VyY2U9bmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpO3NvdXJjZS5vbm9wZW49aGFuZGxlT25saW5lO3NvdXJjZS5vbmVycm9yPWhhbmRsZURpc2Nvbm5lY3Q7c291cmNlLm9ubWVzc2FnZT1oYW5kbGVNZXNzYWdlO31mdW5jdGlvbiBoYW5kbGVPbmxpbmUoKXtpZihvcHRpb25zLmxvZyljb25zb2xlLmxvZygnW0hNUl0gY29ubmVjdGVkJyk7bGFzdEFjdGl2aXR5PW5ldyBEYXRlKCk7fWZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpe2xhc3RBY3Rpdml0eT1uZXcgRGF0ZSgpO2Zvcih2YXIgaT0wO2k8bGlzdGVuZXJzLmxlbmd0aDtpKyspe2xpc3RlbmVyc1tpXShldmVudCk7fWlmKGV2ZW50LmRhdGEuaW5kZXhPZignYWN0aW9uJykhPT0tMSl7ZXZlbnRDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoZXZlbnQpKTt9fWZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKXtjbGVhckludGVydmFsKHRpbWVyKTtzb3VyY2UuY2xvc2UoKTtzZXRUaW1lb3V0KGluaXQsb3B0aW9ucy50aW1lb3V0KTt9cmV0dXJue2Nsb3NlOigpPT57Y2xlYXJJbnRlcnZhbCh0aW1lcik7c291cmNlLmNsb3NlKCk7fSxhZGRNZXNzYWdlTGlzdGVuZXI6ZnVuY3Rpb24gYWRkTWVzc2FnZUxpc3RlbmVyKGZuKXtsaXN0ZW5lcnMucHVzaChmbik7fX07fWZ1bmN0aW9uIGdldEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKXtpZighb3B0aW9ucy5vbmRlbWFuZCl7cmV0dXJue2FkZE1lc3NhZ2VMaXN0ZW5lcjpjYj0+e2V2ZW50Q2FsbGJhY2tzLnB1c2goY2IpO319O31yZXR1cm4gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3VuZmV0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoXCIpKTsvKiBlc2xpbnQtZGlzYWJsZSAqLyAvLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXHJcbi8vIEF2YWlsYWJsZSB1bmRlciBNSVQgTGljZW5zZSAoTUlUKVxyXG4vLyBPbmx5IHRyaWVzIHRvIHN1cHBvcnQgSUUxMSBhbmQgbm90aGluZyBiZWxvd1xyXG52YXIgZG9jdW1lbnQ9d2luZG93LmRvY3VtZW50O3ZhciBSZXNwb25zZT13aW5kb3cuUmVzcG9uc2U7dmFyIFRleHREZWNvZGVyPXdpbmRvdy5UZXh0RGVjb2Rlcjt2YXIgVGV4dEVuY29kZXI9d2luZG93LlRleHRFbmNvZGVyO3ZhciBBYm9ydENvbnRyb2xsZXI9d2luZG93LkFib3J0Q29udHJvbGxlcjtpZihBYm9ydENvbnRyb2xsZXI9PXVuZGVmaW5lZCl7QWJvcnRDb250cm9sbGVyPWZ1bmN0aW9uIEFib3J0Q29udHJvbGxlcigpe3RoaXMuc2lnbmFsPW51bGw7dGhpcy5hYm9ydD1mdW5jdGlvbigpe307fTt9ZnVuY3Rpb24gVGV4dERlY29kZXJQb2x5ZmlsbCgpe3RoaXMuYml0c05lZWRlZD0wO3RoaXMuY29kZVBvaW50PTA7fVRleHREZWNvZGVyUG9seWZpbGwucHJvdG90eXBlLmRlY29kZT1mdW5jdGlvbihvY3RldHMpe2Z1bmN0aW9uIHZhbGlkKGNvZGVQb2ludCxzaGlmdCxvY3RldHNDb3VudCl7aWYob2N0ZXRzQ291bnQ9PT0xKXtyZXR1cm4gY29kZVBvaW50Pj0weDAwODA+PnNoaWZ0JiZjb2RlUG9pbnQ8PHNoaWZ0PD0weDA3ZmY7fWlmKG9jdGV0c0NvdW50PT09Mil7cmV0dXJuIGNvZGVQb2ludD49MHgwODAwPj5zaGlmdCYmY29kZVBvaW50PDxzaGlmdDw9MHhkN2ZmfHxjb2RlUG9pbnQ+PTB4ZTAwMD4+c2hpZnQmJmNvZGVQb2ludDw8c2hpZnQ8PTB4ZmZmZjt9aWYob2N0ZXRzQ291bnQ9PT0zKXtyZXR1cm4gY29kZVBvaW50Pj0weDAxMDAwMD4+c2hpZnQmJmNvZGVQb2ludDw8c2hpZnQ8PTB4MTBmZmZmO310aHJvdyBuZXcgRXJyb3IoKTt9ZnVuY3Rpb24gb2N0ZXRzQ291bnQoYml0c05lZWRlZCxjb2RlUG9pbnQpe2lmKGJpdHNOZWVkZWQ9PT02KjEpe3JldHVybiBjb2RlUG9pbnQ+PjY+MTU/Mzpjb2RlUG9pbnQ+MzE/MjoxO31pZihiaXRzTmVlZGVkPT09NioyKXtyZXR1cm4gY29kZVBvaW50PjE1PzM6Mjt9aWYoYml0c05lZWRlZD09PTYqMyl7cmV0dXJuIDM7fXRocm93IG5ldyBFcnJvcigpO312YXIgUkVQTEFDRVI9MHhmZmZkO3ZhciBzdHJpbmc9Jyc7dmFyIGJpdHNOZWVkZWQ9dGhpcy5iaXRzTmVlZGVkO3ZhciBjb2RlUG9pbnQ9dGhpcy5jb2RlUG9pbnQ7Zm9yKHZhciBpPTA7aTxvY3RldHMubGVuZ3RoO2krPTEpe3ZhciBvY3RldD1vY3RldHNbaV07aWYoYml0c05lZWRlZCE9PTApe2lmKG9jdGV0PDEyOHx8b2N0ZXQ+MTkxfHwhdmFsaWQoY29kZVBvaW50PDw2fG9jdGV0JjYzLGJpdHNOZWVkZWQtNixvY3RldHNDb3VudChiaXRzTmVlZGVkLGNvZGVQb2ludCkpKXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PVJFUExBQ0VSO3N0cmluZys9U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO319aWYoYml0c05lZWRlZD09PTApe2lmKG9jdGV0Pj0wJiZvY3RldDw9MTI3KXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PW9jdGV0O31lbHNlIGlmKG9jdGV0Pj0xOTImJm9jdGV0PD0yMjMpe2JpdHNOZWVkZWQ9NioxO2NvZGVQb2ludD1vY3RldCYzMTt9ZWxzZSBpZihvY3RldD49MjI0JiZvY3RldDw9MjM5KXtiaXRzTmVlZGVkPTYqMjtjb2RlUG9pbnQ9b2N0ZXQmMTU7fWVsc2UgaWYob2N0ZXQ+PTI0MCYmb2N0ZXQ8PTI0Nyl7Yml0c05lZWRlZD02KjM7Y29kZVBvaW50PW9jdGV0Jjc7fWVsc2V7Yml0c05lZWRlZD0wO2NvZGVQb2ludD1SRVBMQUNFUjt9aWYoYml0c05lZWRlZCE9PTAmJiF2YWxpZChjb2RlUG9pbnQsYml0c05lZWRlZCxvY3RldHNDb3VudChiaXRzTmVlZGVkLGNvZGVQb2ludCkpKXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PVJFUExBQ0VSO319ZWxzZXtiaXRzTmVlZGVkLT02O2NvZGVQb2ludD1jb2RlUG9pbnQ8PDZ8b2N0ZXQmNjM7fWlmKGJpdHNOZWVkZWQ9PT0wKXtpZihjb2RlUG9pbnQ8PTB4ZmZmZil7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7fWVsc2V7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZDgwMCsoY29kZVBvaW50LTB4ZmZmZi0xPj4xMCkpO3N0cmluZys9U3RyaW5nLmZyb21DaGFyQ29kZSgweGRjMDArKGNvZGVQb2ludC0weGZmZmYtMSYweDNmZikpO319fXRoaXMuYml0c05lZWRlZD1iaXRzTmVlZGVkO3RoaXMuY29kZVBvaW50PWNvZGVQb2ludDtyZXR1cm4gc3RyaW5nO307Ly8gRmlyZWZveCA8IDM4IHRocm93cyBhbiBlcnJvciB3aXRoIHN0cmVhbSBvcHRpb25cclxudmFyIHN1cHBvcnRzU3RyZWFtT3B0aW9uPWZ1bmN0aW9uIHN1cHBvcnRzU3RyZWFtT3B0aW9uKCl7dHJ5e3JldHVybiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKCd0ZXN0Jykse3N0cmVhbTp0cnVlfSk9PT0ndGVzdCc7fWNhdGNoKGVycm9yKXtjb25zb2xlLmxvZyhlcnJvcik7fXJldHVybiBmYWxzZTt9Oy8vIElFLCBFZGdlXHJcbmlmKFRleHREZWNvZGVyPT11bmRlZmluZWR8fFRleHRFbmNvZGVyPT11bmRlZmluZWR8fCFzdXBwb3J0c1N0cmVhbU9wdGlvbigpKXtUZXh0RGVjb2Rlcj1UZXh0RGVjb2RlclBvbHlmaWxsO312YXIgaz1mdW5jdGlvbiBrKCl7fTtmdW5jdGlvbiBYSFJXcmFwcGVyKHhocil7dGhpcy53aXRoQ3JlZGVudGlhbHM9ZmFsc2U7dGhpcy5yZXNwb25zZVR5cGU9Jyc7dGhpcy5yZWFkeVN0YXRlPTA7dGhpcy5zdGF0dXM9MDt0aGlzLnN0YXR1c1RleHQ9Jyc7dGhpcy5yZXNwb25zZVRleHQ9Jyc7dGhpcy5vbnByb2dyZXNzPWs7dGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2U9azt0aGlzLl9jb250ZW50VHlwZT0nJzt0aGlzLl94aHI9eGhyO3RoaXMuX3NlbmRUaW1lb3V0PTA7dGhpcy5fYWJvcnQ9azt9WEhSV3JhcHBlci5wcm90b3R5cGUub3Blbj1mdW5jdGlvbihtZXRob2QsdXJsKXt0aGlzLl9hYm9ydCh0cnVlKTt2YXIgdGhhdD10aGlzO3ZhciB4aHI9dGhpcy5feGhyO3ZhciBzdGF0ZT0xO3ZhciB0aW1lb3V0PTA7dGhpcy5fYWJvcnQ9ZnVuY3Rpb24oc2lsZW50KXtpZih0aGF0Ll9zZW5kVGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aGF0Ll9zZW5kVGltZW91dCk7dGhhdC5fc2VuZFRpbWVvdXQ9MDt9aWYoc3RhdGU9PT0xfHxzdGF0ZT09PTJ8fHN0YXRlPT09Myl7c3RhdGU9NDt4aHIub25sb2FkPWs7eGhyLm9uZXJyb3I9azt4aHIub25hYm9ydD1rO3hoci5vbnByb2dyZXNzPWs7eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZT1rOy8vIElFIDggLSA5OiBYRG9tYWluUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XHJcbi8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcclxueGhyLmFib3J0KCk7aWYodGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aW1lb3V0KTt0aW1lb3V0PTA7fWlmKCFzaWxlbnQpe3RoYXQucmVhZHlTdGF0ZT00O3RoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7fX1zdGF0ZT0wO307dmFyIG9uU3RhcnQ9ZnVuY3Rpb24gb25TdGFydCgpe2lmKHN0YXRlPT09MSl7Ly8gc3RhdGUgPSAyO1xyXG52YXIgc3RhdHVzPTA7dmFyIHN0YXR1c1RleHQ9Jyc7dmFyIGNvbnRlbnRUeXBlPXVuZGVmaW5lZDtpZighKCdjb250ZW50VHlwZSdpbiB4aHIpKXt0cnl7c3RhdHVzPXhoci5zdGF0dXM7c3RhdHVzVGV4dD14aHIuc3RhdHVzVGV4dDtjb250ZW50VHlwZT14aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO31jYXRjaChlcnJvcil7Ly8gSUUgPCAxMCB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMiB8fCB4aHIucmVhZHlTdGF0ZSA9PT0gM1xyXG4vLyBPcGVyYSA8IDExIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyXHJcbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTEyMVxyXG5zdGF0dXM9MDtzdGF0dXNUZXh0PScnO2NvbnRlbnRUeXBlPXVuZGVmaW5lZDsvLyBGaXJlZm94IDwgMTQsIENocm9tZSA/LCBTYWZhcmkgP1xyXG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcclxuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTc3ODU0XHJcbn19ZWxzZXtzdGF0dXM9MjAwO3N0YXR1c1RleHQ9J09LJztjb250ZW50VHlwZT14aHIuY29udGVudFR5cGU7fWlmKHN0YXR1cyE9PTApe3N0YXRlPTI7dGhhdC5yZWFkeVN0YXRlPTI7dGhhdC5zdGF0dXM9c3RhdHVzO3RoYXQuc3RhdHVzVGV4dD1zdGF0dXNUZXh0O3RoYXQuX2NvbnRlbnRUeXBlPWNvbnRlbnRUeXBlO3RoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7fX19O3ZhciBvblByb2dyZXNzPWZ1bmN0aW9uIG9uUHJvZ3Jlc3MoKXtvblN0YXJ0KCk7aWYoc3RhdGU9PT0yfHxzdGF0ZT09PTMpe3N0YXRlPTM7dmFyIHJlc3BvbnNlVGV4dD0nJzt0cnl7cmVzcG9uc2VUZXh0PXhoci5yZXNwb25zZVRleHQ7fWNhdGNoKGVycm9yKXsvLyBJRSA4IC0gOSB3aXRoIFhNTEh0dHBSZXF1ZXN0XHJcbn10aGF0LnJlYWR5U3RhdGU9Mzt0aGF0LnJlc3BvbnNlVGV4dD1yZXNwb25zZVRleHQ7dGhhdC5vbnByb2dyZXNzKCk7fX07dmFyIG9uRmluaXNoPWZ1bmN0aW9uIG9uRmluaXNoKCl7Ly8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxyXG4vLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcIlxyXG5vblByb2dyZXNzKCk7aWYoc3RhdGU9PT0xfHxzdGF0ZT09PTJ8fHN0YXRlPT09Myl7c3RhdGU9NDtpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9MDt9dGhhdC5yZWFkeVN0YXRlPTQ7dGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTt9fTt2YXIgb25SZWFkeVN0YXRlQ2hhbmdlPWZ1bmN0aW9uIG9uUmVhZHlTdGF0ZUNoYW5nZSgpe2lmKHhociE9dW5kZWZpbmVkKXsvLyBPcGVyYSAxMlxyXG5pZih4aHIucmVhZHlTdGF0ZT09PTQpe29uRmluaXNoKCk7fWVsc2UgaWYoeGhyLnJlYWR5U3RhdGU9PT0zKXtvblByb2dyZXNzKCk7fWVsc2UgaWYoeGhyLnJlYWR5U3RhdGU9PT0yKXtvblN0YXJ0KCk7fX19O3ZhciBvblRpbWVvdXQ9ZnVuY3Rpb24gb25UaW1lb3V0KCl7dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSw1MDApO2lmKHhoci5yZWFkeVN0YXRlPT09Myl7b25Qcm9ncmVzcygpO319Oy8vIFhEb21haW5SZXF1ZXN0I2Fib3J0IHJlbW92ZXMgb25wcm9ncmVzcywgb25lcnJvciwgb25sb2FkXHJcbnhoci5vbmxvYWQ9b25GaW5pc2g7eGhyLm9uZXJyb3I9b25GaW5pc2g7Ly8gaW1wcm9wZXIgZml4IHRvIG1hdGNoIEZpcmVmb3ggYmVoYXZpb3VyLCBidXQgaXQgaXMgYmV0dGVyIHRoYW4ganVzdCBpZ25vcmUgYWJvcnRcclxuLy8gc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc2ODU5NlxyXG4vLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODAyMDBcclxuLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTE1MzU3MFxyXG4vLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcclxueGhyLm9uYWJvcnQ9b25GaW5pc2g7Ly8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzXHJcbmlmKCEoJ3NlbmRBc0JpbmFyeSdpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpJiYhKCdtb3pBbm9uJ2luIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkpe3hoci5vbnByb2dyZXNzPW9uUHJvZ3Jlc3M7fS8vIElFIDggLSA5IChYTUxIVFRQUmVxdWVzdClcclxuLy8gT3BlcmEgPCAxMlxyXG4vLyBGaXJlZm94IDwgMy41XHJcbi8vIEZpcmVmb3ggMy41IC0gMy42IC0gPyA8IDkuMFxyXG4vLyBvbnByb2dyZXNzIGlzIG5vdCBmaXJlZCBzb21ldGltZXMgb3IgZGVsYXllZFxyXG4vLyBzZWUgYWxzbyAjNjRcclxueGhyLm9ucmVhZHlzdGF0ZWNoYW5nZT1vblJlYWR5U3RhdGVDaGFuZ2U7aWYoJ2NvbnRlbnRUeXBlJ2luIHhocil7dXJsKz0odXJsLmluZGV4T2YoJz8nKT09PS0xPyc/JzonJicpKydwYWRkaW5nPXRydWUnO314aHIub3BlbihtZXRob2QsdXJsLHRydWUpO2lmKCdyZWFkeVN0YXRlJ2luIHhocil7Ly8gd29ya2Fyb3VuZCBmb3IgT3BlcmEgMTIgaXNzdWUgd2l0aCBcInByb2dyZXNzXCIgZXZlbnRzXHJcbi8vICM5MVxyXG50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LDApO319O1hIUldyYXBwZXIucHJvdG90eXBlLmFib3J0PWZ1bmN0aW9uKCl7dGhpcy5fYWJvcnQoZmFsc2UpO307WEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXI9ZnVuY3Rpb24obmFtZSl7cmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlO307WEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlcj1mdW5jdGlvbihuYW1lLHZhbHVlKXt2YXIgeGhyPXRoaXMuX3hocjtpZignc2V0UmVxdWVzdEhlYWRlcidpbiB4aHIpe3hoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsdmFsdWUpO319O1hIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIT11bmRlZmluZWQ/dGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpOicnO307WEhSV3JhcHBlci5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbigpey8vIGxvYWRpbmcgaW5kaWNhdG9yIGluIFNhZmFyaSA8ID8gKDYpLCBDaHJvbWUgPCAxNCwgRmlyZWZveFxyXG5pZighKCdvbnRpbWVvdXQnaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSYmZG9jdW1lbnQhPXVuZGVmaW5lZCYmZG9jdW1lbnQucmVhZHlTdGF0ZSE9dW5kZWZpbmVkJiZkb2N1bWVudC5yZWFkeVN0YXRlIT09J2NvbXBsZXRlJyl7dmFyIHRoYXQ9dGhpczt0aGF0Ll9zZW5kVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhhdC5fc2VuZFRpbWVvdXQ9MDt0aGF0LnNlbmQoKTt9LDQpO3JldHVybjt9dmFyIHhocj10aGlzLl94aHI7Ly8gd2l0aENyZWRlbnRpYWxzIHNob3VsZCBiZSBzZXQgYWZ0ZXIgXCJvcGVuXCIgZm9yIFNhZmFyaSBhbmQgQ2hyb21lICg8IDE5ID8pXHJcbnhoci53aXRoQ3JlZGVudGlhbHM9dGhpcy53aXRoQ3JlZGVudGlhbHM7eGhyLnJlc3BvbnNlVHlwZT10aGlzLnJlc3BvbnNlVHlwZTt0cnl7Ly8geGhyLnNlbmQoKTsgdGhyb3dzIFwiTm90IGVub3VnaCBhcmd1bWVudHNcIiBpbiBGaXJlZm94IDMuMFxyXG54aHIuc2VuZCh1bmRlZmluZWQpO31jYXRjaChlcnJvcjEpey8vIFNhZmFyaSA1LjEuNywgT3BlcmEgMTJcclxudGhyb3cgZXJyb3IxO319O2Z1bmN0aW9uIHRvTG93ZXJDYXNlKG5hbWUpe3JldHVybiBuYW1lLnJlcGxhY2UoL1tBLVpdL2csZnVuY3Rpb24oYyl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYy5jaGFyQ29kZUF0KDApKzB4MjApO30pO31mdW5jdGlvbiBIZWFkZXJzUG9seWZpbGwoYWxsKXsvLyBHZXQgaGVhZGVyczogaW1wbGVtZW50ZWQgYWNjb3JkaW5nIHRvIG1vemlsbGEncyBleGFtcGxlIGNvZGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9nZXRBbGxSZXNwb25zZUhlYWRlcnMjRXhhbXBsZVxyXG52YXIgbWFwPU9iamVjdC5jcmVhdGUobnVsbCk7dmFyIGFycmF5PWFsbC5zcGxpdCgnXFxyXFxuJyk7Zm9yKHZhciBpPTA7aTxhcnJheS5sZW5ndGg7aSs9MSl7dmFyIGxpbmU9YXJyYXlbaV07dmFyIHBhcnRzPWxpbmUuc3BsaXQoJzogJyk7dmFyIG5hbWU9cGFydHMuc2hpZnQoKTt2YXIgdmFsdWU9cGFydHMuam9pbignOiAnKTttYXBbdG9Mb3dlckNhc2UobmFtZSldPXZhbHVlO310aGlzLl9tYXA9bWFwO31IZWFkZXJzUG9seWZpbGwucHJvdG90eXBlLmdldD1mdW5jdGlvbihuYW1lKXtyZXR1cm4gdGhpcy5fbWFwW3RvTG93ZXJDYXNlKG5hbWUpXTt9O2Z1bmN0aW9uIFhIUlRyYW5zcG9ydCgpe31YSFJUcmFuc3BvcnQucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oeGhyLG9uU3RhcnRDYWxsYmFjayxvblByb2dyZXNzQ2FsbGJhY2ssb25GaW5pc2hDYWxsYmFjayx1cmwsd2l0aENyZWRlbnRpYWxzLGhlYWRlcnMpe3hoci5vcGVuKCdHRVQnLHVybCk7dmFyIG9mZnNldD0wO3hoci5vbnByb2dyZXNzPWZ1bmN0aW9uKCl7dmFyIHJlc3BvbnNlVGV4dD14aHIucmVzcG9uc2VUZXh0O3ZhciBjaHVuaz1yZXNwb25zZVRleHQuc2xpY2Uob2Zmc2V0KTtvZmZzZXQrPWNodW5rLmxlbmd0aDtvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO307eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2lmKHhoci5yZWFkeVN0YXRlPT09Mil7dmFyIHN0YXR1cz14aHIuc3RhdHVzO3ZhciBzdGF0dXNUZXh0PXhoci5zdGF0dXNUZXh0O3ZhciBjb250ZW50VHlwZT14aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO3ZhciBoZWFkZXJzPXhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtvblN0YXJ0Q2FsbGJhY2soc3RhdHVzLHN0YXR1c1RleHQsY29udGVudFR5cGUsbmV3IEhlYWRlcnNQb2x5ZmlsbChoZWFkZXJzKSxmdW5jdGlvbigpe3hoci5hYm9ydCgpO30pO31lbHNlIGlmKHhoci5yZWFkeVN0YXRlPT09NCl7b25GaW5pc2hDYWxsYmFjaygpO319O3hoci53aXRoQ3JlZGVudGlhbHM9d2l0aENyZWRlbnRpYWxzO3hoci5yZXNwb25zZVR5cGU9J3RleHQnO2Zvcih2YXIgbmFtZSBpbiBoZWFkZXJzKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycyxuYW1lKSl7eGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSxoZWFkZXJzW25hbWVdKTt9fXhoci5zZW5kKCk7fTtmdW5jdGlvbiBIZWFkZXJzV3JhcHBlcihoZWFkZXJzKXt0aGlzLl9oZWFkZXJzPWhlYWRlcnM7fUhlYWRlcnNXcmFwcGVyLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24obmFtZSl7cmV0dXJuIHRoaXMuX2hlYWRlcnMuZ2V0KG5hbWUpO307ZnVuY3Rpb24gRmV0Y2hUcmFuc3BvcnQoKXt9RmV0Y2hUcmFuc3BvcnQucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oeGhyLG9uU3RhcnRDYWxsYmFjayxvblByb2dyZXNzQ2FsbGJhY2ssb25GaW5pc2hDYWxsYmFjayx1cmwsd2l0aENyZWRlbnRpYWxzLGhlYWRlcnMpe3ZhciBjb250cm9sbGVyPW5ldyBBYm9ydENvbnRyb2xsZXIoKTt2YXIgc2lnbmFsPWNvbnRyb2xsZXIuc2lnbmFsOy8vIHNlZSAjMTIwXHJcbnZhciB0ZXh0RGVjb2Rlcj1uZXcgVGV4dERlY29kZXIoKTsoMCxfdW5mZXRjaC5kZWZhdWx0KSh1cmwse2hlYWRlcnM6aGVhZGVycyxjcmVkZW50aWFsczp3aXRoQ3JlZGVudGlhbHM/J2luY2x1ZGUnOidzYW1lLW9yaWdpbicsc2lnbmFsOnNpZ25hbCxjYWNoZTonbm8tc3RvcmUnfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7dmFyIHJlYWRlcj1yZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO29uU3RhcnRDYWxsYmFjayhyZXNwb25zZS5zdGF0dXMscmVzcG9uc2Uuc3RhdHVzVGV4dCxyZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJyksbmV3IEhlYWRlcnNXcmFwcGVyKHJlc3BvbnNlLmhlYWRlcnMpLGZ1bmN0aW9uKCl7Y29udHJvbGxlci5hYm9ydCgpO3JlYWRlci5jYW5jZWwoKTt9KTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe3ZhciByZWFkTmV4dENodW5rPWZ1bmN0aW9uIHJlYWROZXh0Q2h1bmsoKXtyZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtpZihyZXN1bHQuZG9uZSl7Ly8gTm90ZTogYnl0ZXMgaW4gdGV4dERlY29kZXIgYXJlIGlnbm9yZWRcclxucmVzb2x2ZSh1bmRlZmluZWQpO31lbHNle3ZhciBjaHVuaz10ZXh0RGVjb2Rlci5kZWNvZGUocmVzdWx0LnZhbHVlLHtzdHJlYW06dHJ1ZX0pO29uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuayk7cmVhZE5leHRDaHVuaygpO319KVsnY2F0Y2gnXShmdW5jdGlvbihlcnJvcil7cmVqZWN0KGVycm9yKTt9KTt9O3JlYWROZXh0Q2h1bmsoKTt9KTt9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7b25GaW5pc2hDYWxsYmFjaygpO3JldHVybiByZXN1bHQ7fSxmdW5jdGlvbihlcnJvcil7b25GaW5pc2hDYWxsYmFjaygpO3JldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7fSk7fTtmdW5jdGlvbiBFdmVudFRhcmdldCgpe3RoaXMuX2xpc3RlbmVycz1PYmplY3QuY3JlYXRlKG51bGwpO31mdW5jdGlvbiB0aHJvd0Vycm9yKGUpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlO30sMCk7fUV2ZW50VGFyZ2V0LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50PWZ1bmN0aW9uKGV2ZW50KXtldmVudC50YXJnZXQ9dGhpczt2YXIgdHlwZUxpc3RlbmVycz10aGlzLl9saXN0ZW5lcnNbZXZlbnQudHlwZV07aWYodHlwZUxpc3RlbmVycyE9dW5kZWZpbmVkKXt2YXIgbGVuZ3RoPXR5cGVMaXN0ZW5lcnMubGVuZ3RoO2Zvcih2YXIgaT0wO2k8bGVuZ3RoO2krPTEpe3ZhciBsaXN0ZW5lcj10eXBlTGlzdGVuZXJzW2ldO3RyeXtpZih0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQ9PT0nZnVuY3Rpb24nKXtsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudCk7fWVsc2V7bGlzdGVuZXIuY2FsbCh0aGlzLGV2ZW50KTt9fWNhdGNoKGUpe3Rocm93RXJyb3IoZSk7fX19fTtFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGxpc3RlbmVyKXt0eXBlPVN0cmluZyh0eXBlKTt2YXIgbGlzdGVuZXJzPXRoaXMuX2xpc3RlbmVyczt2YXIgdHlwZUxpc3RlbmVycz1saXN0ZW5lcnNbdHlwZV07aWYodHlwZUxpc3RlbmVycz09dW5kZWZpbmVkKXt0eXBlTGlzdGVuZXJzPVtdO2xpc3RlbmVyc1t0eXBlXT10eXBlTGlzdGVuZXJzO312YXIgZm91bmQ9ZmFsc2U7Zm9yKHZhciBpPTA7aTx0eXBlTGlzdGVuZXJzLmxlbmd0aDtpKz0xKXtpZih0eXBlTGlzdGVuZXJzW2ldPT09bGlzdGVuZXIpe2ZvdW5kPXRydWU7fX1pZighZm91bmQpe3R5cGVMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7fX07RXZlbnRUYXJnZXQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24odHlwZSxsaXN0ZW5lcil7dHlwZT1TdHJpbmcodHlwZSk7dmFyIGxpc3RlbmVycz10aGlzLl9saXN0ZW5lcnM7dmFyIHR5cGVMaXN0ZW5lcnM9bGlzdGVuZXJzW3R5cGVdO2lmKHR5cGVMaXN0ZW5lcnMhPXVuZGVmaW5lZCl7dmFyIGZpbHRlcmVkPVtdO2Zvcih2YXIgaT0wO2k8dHlwZUxpc3RlbmVycy5sZW5ndGg7aSs9MSl7aWYodHlwZUxpc3RlbmVyc1tpXSE9PWxpc3RlbmVyKXtmaWx0ZXJlZC5wdXNoKHR5cGVMaXN0ZW5lcnNbaV0pO319aWYoZmlsdGVyZWQubGVuZ3RoPT09MCl7ZGVsZXRlIGxpc3RlbmVyc1t0eXBlXTt9ZWxzZXtsaXN0ZW5lcnNbdHlwZV09ZmlsdGVyZWQ7fX19O2Z1bmN0aW9uIEV2ZW50KHR5cGUpe3RoaXMudHlwZT10eXBlO3RoaXMudGFyZ2V0PXVuZGVmaW5lZDt9ZnVuY3Rpb24gTWVzc2FnZUV2ZW50KHR5cGUsb3B0aW9ucyl7RXZlbnQuY2FsbCh0aGlzLHR5cGUpO3RoaXMuZGF0YT1vcHRpb25zLmRhdGE7dGhpcy5sYXN0RXZlbnRJZD1vcHRpb25zLmxhc3RFdmVudElkO31NZXNzYWdlRXZlbnQucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKTtmdW5jdGlvbiBDb25uZWN0aW9uRXZlbnQodHlwZSxvcHRpb25zKXtFdmVudC5jYWxsKHRoaXMsdHlwZSk7dGhpcy5zdGF0dXM9b3B0aW9ucy5zdGF0dXM7dGhpcy5zdGF0dXNUZXh0PW9wdGlvbnMuc3RhdHVzVGV4dDt0aGlzLmhlYWRlcnM9b3B0aW9ucy5oZWFkZXJzO31Db25uZWN0aW9uRXZlbnQucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKTt2YXIgV0FJVElORz0tMTt2YXIgQ09OTkVDVElORz0wO3ZhciBPUEVOPTE7dmFyIENMT1NFRD0yO3ZhciBBRlRFUl9DUj0tMTt2YXIgRklFTERfU1RBUlQ9MDt2YXIgRklFTEQ9MTt2YXIgVkFMVUVfU1RBUlQ9Mjt2YXIgVkFMVUU9Mzt2YXIgY29udGVudFR5cGVSZWdFeHA9L150ZXh0XFwvZXZlbnRcXC1zdHJlYW07PyhcXHMqY2hhcnNldFxcPXV0ZlxcLTgpPyQvaTt2YXIgTUlOSU1VTV9EVVJBVElPTj0xMDAwO3ZhciBNQVhJTVVNX0RVUkFUSU9OPTE4MDAwMDAwO3ZhciBwYXJzZUR1cmF0aW9uPWZ1bmN0aW9uIHBhcnNlRHVyYXRpb24odmFsdWUsZGVmKXt2YXIgbj1wYXJzZUludCh2YWx1ZSwxMCk7aWYobiE9PW4pe249ZGVmO31yZXR1cm4gY2xhbXBEdXJhdGlvbihuKTt9O3ZhciBjbGFtcER1cmF0aW9uPWZ1bmN0aW9uIGNsYW1wRHVyYXRpb24obil7cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sTUlOSU1VTV9EVVJBVElPTiksTUFYSU1VTV9EVVJBVElPTik7fTt2YXIgZmlyZT1mdW5jdGlvbiBmaXJlKHRoYXQsZixldmVudCl7dHJ5e2lmKHR5cGVvZiBmPT09J2Z1bmN0aW9uJyl7Zi5jYWxsKHRoYXQsZXZlbnQpO319Y2F0Y2goZSl7dGhyb3dFcnJvcihlKTt9fTtmdW5jdGlvbiBFdmVudFNvdXJjZVBvbHlmaWxsKHVybCxvcHRpb25zKXtFdmVudFRhcmdldC5jYWxsKHRoaXMpO3RoaXMub25vcGVuPXVuZGVmaW5lZDt0aGlzLm9ubWVzc2FnZT11bmRlZmluZWQ7dGhpcy5vbmVycm9yPXVuZGVmaW5lZDt0aGlzLnVybD11bmRlZmluZWQ7dGhpcy5yZWFkeVN0YXRlPXVuZGVmaW5lZDt0aGlzLndpdGhDcmVkZW50aWFscz11bmRlZmluZWQ7dGhpcy5fY2xvc2U9dW5kZWZpbmVkO3N0YXJ0KHRoaXMsdXJsLG9wdGlvbnMpO312YXIgaXNGZXRjaFN1cHBvcnRlZD1fdW5mZXRjaC5kZWZhdWx0IT11bmRlZmluZWQmJlJlc3BvbnNlIT11bmRlZmluZWQmJidib2R5J2luIFJlc3BvbnNlLnByb3RvdHlwZTtmdW5jdGlvbiBzdGFydChlcyx1cmwsb3B0aW9ucyl7dXJsPVN0cmluZyh1cmwpO3ZhciB3aXRoQ3JlZGVudGlhbHM9b3B0aW9ucyE9dW5kZWZpbmVkJiZCb29sZWFuKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKTt2YXIgaW5pdGlhbFJldHJ5PWNsYW1wRHVyYXRpb24oMTAwMCk7dmFyIGhlYXJ0YmVhdFRpbWVvdXQ9b3B0aW9ucyE9dW5kZWZpbmVkJiZvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQhPXVuZGVmaW5lZD9wYXJzZUR1cmF0aW9uKG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCw0NTAwMCk6Y2xhbXBEdXJhdGlvbig0NTAwMCk7dmFyIGxhc3RFdmVudElkPScnO3ZhciByZXRyeT1pbml0aWFsUmV0cnk7dmFyIHdhc0FjdGl2aXR5PWZhbHNlO3ZhciBoZWFkZXJzPW9wdGlvbnMhPXVuZGVmaW5lZCYmb3B0aW9ucy5oZWFkZXJzIT11bmRlZmluZWQ/SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpb25zLmhlYWRlcnMpKTp1bmRlZmluZWQ7dmFyIEN1cnJlbnRUcmFuc3BvcnQ9b3B0aW9ucyE9dW5kZWZpbmVkJiZvcHRpb25zLlRyYW5zcG9ydCE9dW5kZWZpbmVkP29wdGlvbnMuVHJhbnNwb3J0OlhNTEh0dHBSZXF1ZXN0O3ZhciB4aHI9aXNGZXRjaFN1cHBvcnRlZCYmIShvcHRpb25zIT11bmRlZmluZWQmJm9wdGlvbnMuVHJhbnNwb3J0IT11bmRlZmluZWQpP3VuZGVmaW5lZDpuZXcgWEhSV3JhcHBlcihuZXcgQ3VycmVudFRyYW5zcG9ydCgpKTt2YXIgdHJhbnNwb3J0PXhocj09dW5kZWZpbmVkP25ldyBGZXRjaFRyYW5zcG9ydCgpOm5ldyBYSFJUcmFuc3BvcnQoKTt2YXIgY2FuY2VsRnVuY3Rpb249dW5kZWZpbmVkO3ZhciB0aW1lb3V0PTA7dmFyIGN1cnJlbnRTdGF0ZT1XQUlUSU5HO3ZhciBkYXRhQnVmZmVyPScnO3ZhciBsYXN0RXZlbnRJZEJ1ZmZlcj0nJzt2YXIgZXZlbnRUeXBlQnVmZmVyPScnO3ZhciB0ZXh0QnVmZmVyPScnO3ZhciBzdGF0ZT1GSUVMRF9TVEFSVDt2YXIgZmllbGRTdGFydD0wO3ZhciB2YWx1ZVN0YXJ0PTA7dmFyIG9uU3RhcnQ9ZnVuY3Rpb24gb25TdGFydChzdGF0dXMsc3RhdHVzVGV4dCxjb250ZW50VHlwZSxoZWFkZXJzLGNhbmNlbCl7aWYoY3VycmVudFN0YXRlPT09Q09OTkVDVElORyl7Y2FuY2VsRnVuY3Rpb249Y2FuY2VsO2lmKHN0YXR1cz09PTIwMCYmY29udGVudFR5cGUhPXVuZGVmaW5lZCYmY29udGVudFR5cGVSZWdFeHAudGVzdChjb250ZW50VHlwZSkpe2N1cnJlbnRTdGF0ZT1PUEVOO3dhc0FjdGl2aXR5PXRydWU7cmV0cnk9aW5pdGlhbFJldHJ5O2VzLnJlYWR5U3RhdGU9T1BFTjt2YXIgZXZlbnQ9bmV3IENvbm5lY3Rpb25FdmVudCgnb3Blbicse3N0YXR1czpzdGF0dXMsc3RhdHVzVGV4dDpzdGF0dXNUZXh0LGhlYWRlcnM6aGVhZGVyc30pO2VzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO2ZpcmUoZXMsZXMub25vcGVuLGV2ZW50KTt9ZWxzZXt2YXIgbWVzc2FnZT0nJztpZihzdGF0dXMhPT0yMDApe2lmKHN0YXR1c1RleHQpe3N0YXR1c1RleHQ9c3RhdHVzVGV4dC5yZXBsYWNlKC9cXHMrL2csJyAnKTt9bWVzc2FnZT1cIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgc3RhdHVzIFwiK3N0YXR1cysnICcrc3RhdHVzVGV4dCsnIHRoYXQgaXMgbm90IDIwMC4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJzt9ZWxzZXttZXNzYWdlPVwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBDb250ZW50LVR5cGUgc3BlY2lmeWluZyBhbiB1bnN1cHBvcnRlZCB0eXBlOiBcIisoY29udGVudFR5cGU9PXVuZGVmaW5lZD8nLSc6Y29udGVudFR5cGUucmVwbGFjZSgvXFxzKy9nLCcgJykpKycuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLic7fXRocm93RXJyb3IobmV3IEVycm9yKG1lc3NhZ2UpKTtjbG9zZSgpO3ZhciBldmVudD1uZXcgQ29ubmVjdGlvbkV2ZW50KCdlcnJvcicse3N0YXR1czpzdGF0dXMsc3RhdHVzVGV4dDpzdGF0dXNUZXh0LGhlYWRlcnM6aGVhZGVyc30pO2VzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO2ZpcmUoZXMsZXMub25lcnJvcixldmVudCk7fX19O3ZhciBvblByb2dyZXNzPWZ1bmN0aW9uIG9uUHJvZ3Jlc3ModGV4dENodW5rKXtpZihjdXJyZW50U3RhdGU9PT1PUEVOKXt2YXIgbj0tMTtmb3IodmFyIGk9MDtpPHRleHRDaHVuay5sZW5ndGg7aSs9MSl7dmFyIGM9dGV4dENodW5rLmNoYXJDb2RlQXQoaSk7aWYoYz09PSdcXG4nLmNoYXJDb2RlQXQoMCl8fGM9PT0nXFxyJy5jaGFyQ29kZUF0KDApKXtuPWk7fX12YXIgY2h1bms9KG4hPT0tMT90ZXh0QnVmZmVyOicnKSt0ZXh0Q2h1bmsuc2xpY2UoMCxuKzEpO3RleHRCdWZmZXI9KG49PT0tMT90ZXh0QnVmZmVyOicnKSt0ZXh0Q2h1bmsuc2xpY2UobisxKTtpZihjaHVuayE9PScnKXt3YXNBY3Rpdml0eT10cnVlO31mb3IodmFyIHBvc2l0aW9uPTA7cG9zaXRpb248Y2h1bmsubGVuZ3RoO3Bvc2l0aW9uKz0xKXt2YXIgYz1jaHVuay5jaGFyQ29kZUF0KHBvc2l0aW9uKTtpZihzdGF0ZT09PUFGVEVSX0NSJiZjPT09J1xcbicuY2hhckNvZGVBdCgwKSl7c3RhdGU9RklFTERfU1RBUlQ7fWVsc2V7aWYoc3RhdGU9PT1BRlRFUl9DUil7c3RhdGU9RklFTERfU1RBUlQ7fWlmKGM9PT0nXFxyJy5jaGFyQ29kZUF0KDApfHxjPT09J1xcbicuY2hhckNvZGVBdCgwKSl7aWYoc3RhdGUhPT1GSUVMRF9TVEFSVCl7aWYoc3RhdGU9PT1GSUVMRCl7dmFsdWVTdGFydD1wb3NpdGlvbisxO312YXIgZmllbGQ9Y2h1bmsuc2xpY2UoZmllbGRTdGFydCx2YWx1ZVN0YXJ0LTEpO3ZhciB2YWx1ZT1jaHVuay5zbGljZSh2YWx1ZVN0YXJ0Kyh2YWx1ZVN0YXJ0PHBvc2l0aW9uJiZjaHVuay5jaGFyQ29kZUF0KHZhbHVlU3RhcnQpPT09JyAnLmNoYXJDb2RlQXQoMCk/MTowKSxwb3NpdGlvbik7aWYoZmllbGQ9PT0nZGF0YScpe2RhdGFCdWZmZXIrPSdcXG4nO2RhdGFCdWZmZXIrPXZhbHVlO31lbHNlIGlmKGZpZWxkPT09J2lkJyl7bGFzdEV2ZW50SWRCdWZmZXI9dmFsdWU7fWVsc2UgaWYoZmllbGQ9PT0nZXZlbnQnKXtldmVudFR5cGVCdWZmZXI9dmFsdWU7fWVsc2UgaWYoZmllbGQ9PT0ncmV0cnknKXtpbml0aWFsUmV0cnk9cGFyc2VEdXJhdGlvbih2YWx1ZSxpbml0aWFsUmV0cnkpO3JldHJ5PWluaXRpYWxSZXRyeTt9ZWxzZSBpZihmaWVsZD09PSdoZWFydGJlYXRUaW1lb3V0Jyl7aGVhcnRiZWF0VGltZW91dD1wYXJzZUR1cmF0aW9uKHZhbHVlLGhlYXJ0YmVhdFRpbWVvdXQpO2lmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSxoZWFydGJlYXRUaW1lb3V0KTt9fX1pZihzdGF0ZT09PUZJRUxEX1NUQVJUKXtpZihkYXRhQnVmZmVyIT09Jycpe2xhc3RFdmVudElkPWxhc3RFdmVudElkQnVmZmVyO2lmKGV2ZW50VHlwZUJ1ZmZlcj09PScnKXtldmVudFR5cGVCdWZmZXI9J21lc3NhZ2UnO312YXIgZXZlbnQ9bmV3IE1lc3NhZ2VFdmVudChldmVudFR5cGVCdWZmZXIse2RhdGE6ZGF0YUJ1ZmZlci5zbGljZSgxKSxsYXN0RXZlbnRJZDpsYXN0RXZlbnRJZEJ1ZmZlcn0pO2VzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO2lmKGV2ZW50VHlwZUJ1ZmZlcj09PSdtZXNzYWdlJyl7ZmlyZShlcyxlcy5vbm1lc3NhZ2UsZXZlbnQpO31pZihjdXJyZW50U3RhdGU9PT1DTE9TRUQpe3JldHVybjt9fWRhdGFCdWZmZXI9Jyc7ZXZlbnRUeXBlQnVmZmVyPScnO31zdGF0ZT1jPT09J1xccicuY2hhckNvZGVBdCgwKT9BRlRFUl9DUjpGSUVMRF9TVEFSVDt9ZWxzZXtpZihzdGF0ZT09PUZJRUxEX1NUQVJUKXtmaWVsZFN0YXJ0PXBvc2l0aW9uO3N0YXRlPUZJRUxEO31pZihzdGF0ZT09PUZJRUxEKXtpZihjPT09JzonLmNoYXJDb2RlQXQoMCkpe3ZhbHVlU3RhcnQ9cG9zaXRpb24rMTtzdGF0ZT1WQUxVRV9TVEFSVDt9fWVsc2UgaWYoc3RhdGU9PT1WQUxVRV9TVEFSVCl7c3RhdGU9VkFMVUU7fX19fX19O3ZhciBvbkZpbmlzaD1mdW5jdGlvbiBvbkZpbmlzaCgpe2lmKGN1cnJlbnRTdGF0ZT09PU9QRU58fGN1cnJlbnRTdGF0ZT09PUNPTk5FQ1RJTkcpe2N1cnJlbnRTdGF0ZT1XQUlUSU5HO2lmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD0wO310aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LHJldHJ5KTtyZXRyeT1jbGFtcER1cmF0aW9uKE1hdGgubWluKGluaXRpYWxSZXRyeSoxNixyZXRyeSoyKSk7ZXMucmVhZHlTdGF0ZT1DT05ORUNUSU5HO3ZhciBldmVudD1uZXcgRXZlbnQoJ2Vycm9yJyk7ZXMuZGlzcGF0Y2hFdmVudChldmVudCk7ZmlyZShlcyxlcy5vbmVycm9yLGV2ZW50KTt9fTt2YXIgY2xvc2U9ZnVuY3Rpb24gY2xvc2UoKXtjdXJyZW50U3RhdGU9Q0xPU0VEO2lmKGNhbmNlbEZ1bmN0aW9uIT11bmRlZmluZWQpe2NhbmNlbEZ1bmN0aW9uKCk7Y2FuY2VsRnVuY3Rpb249dW5kZWZpbmVkO31pZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9MDt9ZXMucmVhZHlTdGF0ZT1DTE9TRUQ7fTt2YXIgb25UaW1lb3V0PWZ1bmN0aW9uIG9uVGltZW91dCgpe3RpbWVvdXQ9MDtpZihjdXJyZW50U3RhdGUhPT1XQUlUSU5HKXtpZighd2FzQWN0aXZpdHkmJmNhbmNlbEZ1bmN0aW9uIT11bmRlZmluZWQpe3Rocm93RXJyb3IobmV3IEVycm9yKCdObyBhY3Rpdml0eSB3aXRoaW4gJytoZWFydGJlYXRUaW1lb3V0KycgbWlsbGlzZWNvbmRzLiBSZWNvbm5lY3RpbmcuJykpO2NhbmNlbEZ1bmN0aW9uKCk7Y2FuY2VsRnVuY3Rpb249dW5kZWZpbmVkO31lbHNle3dhc0FjdGl2aXR5PWZhbHNlO3RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30saGVhcnRiZWF0VGltZW91dCk7fXJldHVybjt9d2FzQWN0aXZpdHk9ZmFsc2U7dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSxoZWFydGJlYXRUaW1lb3V0KTtjdXJyZW50U3RhdGU9Q09OTkVDVElORztkYXRhQnVmZmVyPScnO2V2ZW50VHlwZUJ1ZmZlcj0nJztsYXN0RXZlbnRJZEJ1ZmZlcj1sYXN0RXZlbnRJZDt0ZXh0QnVmZmVyPScnO2ZpZWxkU3RhcnQ9MDt2YWx1ZVN0YXJ0PTA7c3RhdGU9RklFTERfU1RBUlQ7Ly8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDI4OTE2XHJcbi8vIFJlcXVlc3QgaGVhZGVyIGZpZWxkIExhc3QtRXZlbnQtSUQgaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycy5cclxudmFyIHJlcXVlc3RVUkw9dXJsO2lmKHVybC5zbGljZSgwLDUpIT09J2RhdGE6JyYmdXJsLnNsaWNlKDAsNSkhPT0nYmxvYjonKXtpZihsYXN0RXZlbnRJZCE9PScnKXtyZXF1ZXN0VVJMKz0odXJsLmluZGV4T2YoJz8nKT09PS0xPyc/JzonJicpKydsYXN0RXZlbnRJZD0nK2VuY29kZVVSSUNvbXBvbmVudChsYXN0RXZlbnRJZCk7fX12YXIgcmVxdWVzdEhlYWRlcnM9e307cmVxdWVzdEhlYWRlcnNbJ0FjY2VwdCddPSd0ZXh0L2V2ZW50LXN0cmVhbSc7aWYoaGVhZGVycyE9dW5kZWZpbmVkKXtmb3IodmFyIG5hbWUgaW4gaGVhZGVycyl7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsbmFtZSkpe3JlcXVlc3RIZWFkZXJzW25hbWVdPWhlYWRlcnNbbmFtZV07fX19dHJ5e3RyYW5zcG9ydC5vcGVuKHhocixvblN0YXJ0LG9uUHJvZ3Jlc3Msb25GaW5pc2gscmVxdWVzdFVSTCx3aXRoQ3JlZGVudGlhbHMscmVxdWVzdEhlYWRlcnMpO31jYXRjaChlcnJvcil7Y2xvc2UoKTt0aHJvdyBlcnJvcjt9fTtlcy51cmw9dXJsO2VzLnJlYWR5U3RhdGU9Q09OTkVDVElORztlcy53aXRoQ3JlZGVudGlhbHM9d2l0aENyZWRlbnRpYWxzO2VzLl9jbG9zZT1jbG9zZTtvblRpbWVvdXQoKTt9RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShFdmVudFRhcmdldC5wcm90b3R5cGUpO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNPTk5FQ1RJTkc9Q09OTkVDVElORztFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5PUEVOPU9QRU47RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ0xPU0VEPUNMT1NFRDtFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuX2Nsb3NlKCk7fTtFdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkc9Q09OTkVDVElORztFdmVudFNvdXJjZVBvbHlmaWxsLk9QRU49T1BFTjtFdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRD1DTE9TRUQ7RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzPXVuZGVmaW5lZDt2YXIgX2RlZmF1bHQ9RXZlbnRTb3VyY2VQb2x5ZmlsbDtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kaXNwbGF5Q29udGVudD1kaXNwbGF5Q29udGVudDtmdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjayl7Ly8gVGhpcyBpcyB0aGUgZmFsbGJhY2sgaGVscGVyIHRoYXQgcmVtb3ZlcyBOZXh0LmpzJyBuby1GT1VDIHN0eWxlcyB3aGVuXHJcbi8vIENTUyBtb2RlIGlzIGVuYWJsZWQuIFRoaXMgb25seSByZWFsbHkgYWN0aXZhdGVzIGlmIHlvdSBoYXZlbid0IGNyZWF0ZWRcclxuLy8gX2FueV8gc3R5bGVzIGluIHlvdXIgYXBwbGljYXRpb24geWV0LlxyXG47KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQpKGZ1bmN0aW9uKCl7Zm9yKHZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLGk9eC5sZW5ndGg7aS0tOyl7eFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO31pZihjYWxsYmFjayl7Y2FsbGJhY2soKTt9fSk7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNsb3NlUGluZz1jbG9zZVBpbmc7ZXhwb3J0cy5zZXR1cFBpbmc9c2V0dXBQaW5nO2V4cG9ydHMuY3VycmVudFBhZ2U9dm9pZCAwO3ZhciBfdW5mZXRjaD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJuZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3VuZmV0Y2hcIikpO3ZhciBfZXZlbnRzb3VyY2U9cmVxdWlyZShcIi4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZVwiKTsvKiBnbG9iYWwgbG9jYXRpb24gKi92YXIgZXZ0U291cmNlO3ZhciBjdXJyZW50UGFnZTtleHBvcnRzLmN1cnJlbnRQYWdlPWN1cnJlbnRQYWdlO2Z1bmN0aW9uIGNsb3NlUGluZygpe2lmKGV2dFNvdXJjZSlldnRTb3VyY2UuY2xvc2UoKTtldnRTb3VyY2U9bnVsbDt9ZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LHBhdGhuYW1lRm4scmV0cnkpe3ZhciBwYXRobmFtZT1wYXRobmFtZUZuKCk7Ly8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcclxuaWYocGF0aG5hbWU9PT1jdXJyZW50UGFnZSYmIXJldHJ5KXJldHVybjtleHBvcnRzLmN1cnJlbnRQYWdlPWN1cnJlbnRQYWdlPXBhdGhuYW1lOy8vIGNsb3NlIGN1cnJlbnQgRXZlbnRTb3VyY2UgY29ubmVjdGlvblxyXG5jbG9zZVBpbmcoKTt2YXIgdXJsPWFzc2V0UHJlZml4K1wiL19uZXh0L3dlYnBhY2staG1yP3BhZ2U9XCIrY3VycmVudFBhZ2U7ZXZ0U291cmNlPSgwLF9ldmVudHNvdXJjZS5nZXRFdmVudFNvdXJjZVdyYXBwZXIpKHtwYXRoOnVybCx0aW1lb3V0OjUwMDAsb25kZW1hbmQ6MX0pO2V2dFNvdXJjZS5hZGRNZXNzYWdlTGlzdGVuZXIoZXZlbnQ9PntpZihldmVudC5kYXRhLmluZGV4T2YoJ3snKT09PS0xKXJldHVybjt0cnl7dmFyIHBheWxvYWQ9SlNPTi5wYXJzZShldmVudC5kYXRhKTtpZihwYXlsb2FkLmludmFsaWQpey8vIFBheWxvYWQgY2FuIGJlIGludmFsaWQgZXZlbiBpZiB0aGUgcGFnZSBkb2VzIG5vdCBleGlzdC5cclxuLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxyXG4oMCxfdW5mZXRjaC5kZWZhdWx0KShsb2NhdGlvbi5ocmVmLHtjcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihwYWdlUmVzPT57aWYocGFnZVJlcy5zdGF0dXM9PT0yMDApe2xvY2F0aW9uLnJlbG9hZCgpO319KTt9fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcignb24tZGVtYW5kLWVudHJpZXMgZmFpbGVkIHRvIHBhcnNlIHJlc3BvbnNlJyxlcnIpO319KTt9IiwiLyoqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKi9cclxuXHJcbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XHJcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xyXG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxyXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XHJcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcclxuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xyXG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XHJcblxyXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcclxuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxyXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XHJcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xyXG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XHJcblxyXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxyXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxyXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBnZW5lcmF0b3I7XHJcbiAgfVxyXG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XHJcblxyXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxyXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxyXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxyXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcclxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXHJcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xyXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXHJcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXHJcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxyXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cclxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcclxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcclxuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xyXG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XHJcblxyXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcclxuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXHJcbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcclxuXHJcbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXHJcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXHJcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcclxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XHJcbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cclxuXHJcbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxyXG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXHJcbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XHJcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xyXG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcclxuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcclxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXHJcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcclxuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXHJcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXHJcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xyXG4gIH1cclxuXHJcbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cclxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcclxuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xyXG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XHJcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cclxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xyXG5cclxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxyXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXHJcbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xyXG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xyXG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xyXG4gICAgcmV0dXJuIGN0b3JcclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxyXG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cclxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXHJcbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXHJcbiAgICAgIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XHJcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XHJcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcclxuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xyXG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcclxuICAgIHJldHVybiBnZW5GdW47XHJcbiAgfTtcclxuXHJcbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXHJcbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcclxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXHJcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cclxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XHJcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcclxuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xyXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcclxuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcclxuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXHJcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcclxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxyXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xyXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxyXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XHJcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxyXG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcclxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcclxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXHJcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cclxuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcclxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xyXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcclxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xyXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcclxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxyXG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cclxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcclxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxyXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cclxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXHJcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcclxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxyXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcclxuICB9XHJcblxyXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XHJcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XHJcblxyXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcclxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcclxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cclxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XHJcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xyXG5cclxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXHJcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxyXG4gICAgICBQcm9taXNlSW1wbFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXHJcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXHJcbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xyXG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICB0aHJvdyBhcmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxyXG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcclxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XHJcblxyXG4gICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XHJcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XHJcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcclxuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcclxuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XHJcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xyXG5cclxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XHJcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XHJcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XHJcbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXHJcbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxyXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXHJcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcclxuXHJcbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcclxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXHJcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXHJcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxyXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxyXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxyXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcclxuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XHJcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XHJcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXHJcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG5cclxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxyXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxyXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xyXG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxyXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cclxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcclxuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XHJcblxyXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcclxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcclxuXHJcbiAgICBpZiAoISBpbmZvKSB7XHJcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xyXG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcclxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbmZvLmRvbmUpIHtcclxuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcclxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cclxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XHJcblxyXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXHJcbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XHJcblxyXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcclxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxyXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxyXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcclxuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcclxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxyXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcclxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxyXG4gICAgICByZXR1cm4gaW5mbztcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxyXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cclxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgfVxyXG5cclxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxyXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cclxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xyXG5cclxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xyXG5cclxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxyXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXHJcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cclxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cclxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xyXG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcclxuXHJcbiAgICBpZiAoMSBpbiBsb2NzKSB7XHJcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoMiBpbiBsb2NzKSB7XHJcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xyXG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xyXG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XHJcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XHJcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcclxuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XHJcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcclxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cclxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cclxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XHJcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XHJcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XHJcbiAgICB2YXIga2V5cyA9IFtdO1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xyXG4gICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIGtleXMucmV2ZXJzZSgpO1xyXG5cclxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXHJcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xyXG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xyXG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm4gbmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxyXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xyXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cclxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xyXG4gICAgaWYgKGl0ZXJhYmxlKSB7XHJcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcclxuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XHJcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcclxuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XHJcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gbmV4dDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cclxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcclxuICB9XHJcbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XHJcblxyXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XHJcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcclxuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxyXG5cclxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XHJcbiAgICAgIHRoaXMucHJldiA9IDA7XHJcbiAgICAgIHRoaXMubmV4dCA9IDA7XHJcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXHJcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcclxuXHJcbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XHJcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XHJcblxyXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcclxuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcclxuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XHJcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXHJcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcclxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XHJcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xyXG5cclxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcclxuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcclxuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcclxuICAgICAgaWYgKHRoaXMuZG9uZSkge1xyXG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcclxuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcclxuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xyXG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcclxuXHJcbiAgICAgICAgaWYgKGNhdWdodCkge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcclxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXHJcbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xyXG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xyXG5cclxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xyXG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcclxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xyXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cclxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xyXG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XHJcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XHJcblxyXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXHJcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcclxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xyXG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXHJcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XHJcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxyXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcclxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xyXG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcclxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXHJcbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XHJcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcclxuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcclxuXHJcbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xyXG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xyXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XHJcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcclxuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xyXG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcclxuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xyXG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgIH0sXHJcblxyXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XHJcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xyXG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XHJcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcclxuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xyXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxyXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcclxuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcclxuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcclxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxyXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcclxuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxyXG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cclxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxyXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxyXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxyXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXHJcbiAgcmV0dXJuIGV4cG9ydHM7XHJcblxyXG59KFxyXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXHJcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcclxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXHJcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cclxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxyXG4pKTtcclxuXHJcbnRyeSB7XHJcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcclxufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcclxuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxyXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxyXG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxyXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxyXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxyXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXHJcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcclxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcclxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cclxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==