"use strict";
var PiniaSharedState = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/broadcast-channel/node_modules/@babel/runtime/helpers/asyncToGenerator.js
  var require_asyncToGenerator = __commonJS({
    "node_modules/broadcast-channel/node_modules/@babel/runtime/helpers/asyncToGenerator.js"(exports, module) {
      "use strict";
      function asyncGeneratorStep(n, t, e, r, o, a, c) {
        try {
          var i = n[a](c), u = i.value;
        } catch (n2) {
          return void e(n2);
        }
        i.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function _asyncToGenerator2(n) {
        return function() {
          var t = this, e = arguments;
          return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n2) {
              asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
            }
            function _throw(n2) {
              asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
            }
            _next(void 0);
          });
        };
      }
      module.exports = _asyncToGenerator2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/broadcast-channel/node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    "node_modules/broadcast-channel/node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
      "use strict";
      function _typeof(o) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/broadcast-channel/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
  var require_regeneratorRuntime = __commonJS({
    "node_modules/broadcast-channel/node_modules/@babel/runtime/helpers/regeneratorRuntime.js"(exports, module) {
      "use strict";
      var _typeof = require_typeof()["default"];
      function _regeneratorRuntime2() {
        "use strict";
        module.exports = _regeneratorRuntime2 = function _regeneratorRuntime3() {
          return e;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
          t2[e2] = r2.value;
        }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
        function define(t2, e2, r2) {
          return Object.defineProperty(t2, e2, {
            value: r2,
            enumerable: true,
            configurable: true,
            writable: true
          }), t2[e2];
        }
        try {
          define({}, "");
        } catch (t2) {
          define = function define2(t3, e2, r2) {
            return t3[e2] = r2;
          };
        }
        function wrap(t2, e2, r2, n2) {
          var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
          return o(a2, "_invoke", {
            value: makeInvokeMethod(t2, r2, c2)
          }), a2;
        }
        function tryCatch(t2, e2, r2) {
          try {
            return {
              type: "normal",
              arg: t2.call(e2, r2)
            };
          } catch (t3) {
            return {
              type: "throw",
              arg: t3
            };
          }
        }
        e.wrap = wrap;
        var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
        function Generator() {
        }
        function GeneratorFunction() {
        }
        function GeneratorFunctionPrototype() {
        }
        var p = {};
        define(p, a, function() {
          return this;
        });
        var d = Object.getPrototypeOf, v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
        function defineIteratorMethods(t2) {
          ["next", "throw", "return"].forEach(function(e2) {
            define(t2, e2, function(t3) {
              return this._invoke(e2, t3);
            });
          });
        }
        function AsyncIterator(t2, e2) {
          function invoke(r3, o2, i2, a2) {
            var c2 = tryCatch(t2[r3], t2, o2);
            if ("throw" !== c2.type) {
              var u2 = c2.arg, h2 = u2.value;
              return h2 && "object" == _typeof(h2) && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
                invoke("next", t3, i2, a2);
              }, function(t3) {
                invoke("throw", t3, i2, a2);
              }) : e2.resolve(h2).then(function(t3) {
                u2.value = t3, i2(u2);
              }, function(t3) {
                return invoke("throw", t3, i2, a2);
              });
            }
            a2(c2.arg);
          }
          var r2;
          o(this, "_invoke", {
            value: function value(t3, n2) {
              function callInvokeWithMethodAndArg() {
                return new e2(function(e3, r3) {
                  invoke(t3, n2, e3, r3);
                });
              }
              return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }
        function makeInvokeMethod(e2, r2, n2) {
          var o2 = h;
          return function(i2, a2) {
            if (o2 === f) throw Error("Generator is already running");
            if (o2 === s) {
              if ("throw" === i2) throw a2;
              return {
                value: t,
                done: true
              };
            }
            for (n2.method = i2, n2.arg = a2; ; ) {
              var c2 = n2.delegate;
              if (c2) {
                var u2 = maybeInvokeDelegate(c2, n2);
                if (u2) {
                  if (u2 === y) continue;
                  return u2;
                }
              }
              if ("next" === n2.method) n2.sent = n2._sent = n2.arg;
              else if ("throw" === n2.method) {
                if (o2 === h) throw o2 = s, n2.arg;
                n2.dispatchException(n2.arg);
              } else "return" === n2.method && n2.abrupt("return", n2.arg);
              o2 = f;
              var p2 = tryCatch(e2, r2, n2);
              if ("normal" === p2.type) {
                if (o2 = n2.done ? s : l, p2.arg === y) continue;
                return {
                  value: p2.arg,
                  done: n2.done
                };
              }
              "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
            }
          };
        }
        function maybeInvokeDelegate(e2, r2) {
          var n2 = r2.method, o2 = e2.iterator[n2];
          if (o2 === t) return r2.delegate = null, "throw" === n2 && e2.iterator["return"] && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
          var i2 = tryCatch(o2, e2.iterator, r2.arg);
          if ("throw" === i2.type) return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
          var a2 = i2.arg;
          return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
        }
        function pushTryEntry(t2) {
          var e2 = {
            tryLoc: t2[0]
          };
          1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
        }
        function resetTryEntry(t2) {
          var e2 = t2.completion || {};
          e2.type = "normal", delete e2.arg, t2.completion = e2;
        }
        function Context(t2) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t2.forEach(pushTryEntry, this), this.reset(true);
        }
        function values(e2) {
          if (e2 || "" === e2) {
            var r2 = e2[a];
            if (r2) return r2.call(e2);
            if ("function" == typeof e2.next) return e2;
            if (!isNaN(e2.length)) {
              var o2 = -1, i2 = function next() {
                for (; ++o2 < e2.length; ) if (n.call(e2, o2)) return next.value = e2[o2], next.done = false, next;
                return next.value = t, next.done = true, next;
              };
              return i2.next = i2;
            }
          }
          throw new TypeError(_typeof(e2) + " is not iterable");
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: true
        }), o(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: true
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
          var e2 = "function" == typeof t2 && t2.constructor;
          return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
        }, e.mark = function(t2) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
        }, e.awrap = function(t2) {
          return {
            __await: t2
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
          return this;
        }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
          void 0 === i2 && (i2 = Promise);
          var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
          return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
            return t3.done ? t3.value : a2.next();
          });
        }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
          return this;
        }), define(g, "toString", function() {
          return "[object Generator]";
        }), e.keys = function(t2) {
          var e2 = Object(t2), r2 = [];
          for (var n2 in e2) r2.push(n2);
          return r2.reverse(), function next() {
            for (; r2.length; ) {
              var t3 = r2.pop();
              if (t3 in e2) return next.value = t3, next.done = false, next;
            }
            return next.done = true, next;
          };
        }, e.values = values, Context.prototype = {
          constructor: Context,
          reset: function reset(e2) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2) for (var r2 in this) "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
          },
          stop: function stop() {
            this.done = true;
            var t2 = this.tryEntries[0].completion;
            if ("throw" === t2.type) throw t2.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(e2) {
            if (this.done) throw e2;
            var r2 = this;
            function handle(n2, o3) {
              return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
            }
            for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
              var i2 = this.tryEntries[o2], a2 = i2.completion;
              if ("root" === i2.tryLoc) return handle("end");
              if (i2.tryLoc <= this.prev) {
                var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
                if (c2 && u2) {
                  if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
                  if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
                } else if (c2) {
                  if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
                } else {
                  if (!u2) throw Error("try statement without catch or finally");
                  if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(t2, e2) {
            for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
              var o2 = this.tryEntries[r2];
              if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
                var i2 = o2;
                break;
              }
            }
            i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
            var a2 = i2 ? i2.completion : {};
            return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
          },
          complete: function complete(t2, e2) {
            if ("throw" === t2.type) throw t2.arg;
            return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
          },
          finish: function finish(t2) {
            for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
              var r2 = this.tryEntries[e2];
              if (r2.finallyLoc === t2) return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
            }
          },
          "catch": function _catch(t2) {
            for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
              var r2 = this.tryEntries[e2];
              if (r2.tryLoc === t2) {
                var n2 = r2.completion;
                if ("throw" === n2.type) {
                  var o2 = n2.arg;
                  resetTryEntry(r2);
                }
                return o2;
              }
            }
            throw Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(e2, r2, n2) {
            return this.delegate = {
              iterator: values(e2),
              resultName: r2,
              nextLoc: n2
            }, "next" === this.method && (this.arg = t), y;
          }
        }, e;
      }
      module.exports = _regeneratorRuntime2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/broadcast-channel/node_modules/@babel/runtime/regenerator/index.js
  var require_regenerator = __commonJS({
    "node_modules/broadcast-channel/node_modules/@babel/runtime/regenerator/index.js"(exports, module) {
      "use strict";
      var runtime = require_regeneratorRuntime()();
      module.exports = runtime;
      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        if (typeof globalThis === "object") {
          globalThis.regeneratorRuntime = runtime;
        } else {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      }
    }
  });

  // node_modules/eventemitter3/index.js
  var require_eventemitter3 = __commonJS({
    "node_modules/eventemitter3/index.js"(exports, module) {
      "use strict";
      var has = Object.prototype.hasOwnProperty;
      var prefix = "~";
      function Events() {
      }
      if (Object.create) {
        Events.prototype = /* @__PURE__ */ Object.create(null);
        if (!new Events().__proto__) prefix = false;
      }
      function EE(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
      }
      function addListener(emitter, event, fn, context, once) {
        if (typeof fn !== "function") {
          throw new TypeError("The listener must be a function");
        }
        var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
        if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
        else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
        else emitter._events[evt] = [emitter._events[evt], listener];
        return emitter;
      }
      function clearEvent(emitter, evt) {
        if (--emitter._eventsCount === 0) emitter._events = new Events();
        else delete emitter._events[evt];
      }
      function EventEmitter() {
        this._events = new Events();
        this._eventsCount = 0;
      }
      EventEmitter.prototype.eventNames = function eventNames() {
        var names = [], events2, name;
        if (this._eventsCount === 0) return names;
        for (name in events2 = this._events) {
          if (has.call(events2, name)) names.push(prefix ? name.slice(1) : name);
        }
        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events2));
        }
        return names;
      };
      EventEmitter.prototype.listeners = function listeners(event) {
        var evt = prefix ? prefix + event : event, handlers = this._events[evt];
        if (!handlers) return [];
        if (handlers.fn) return [handlers.fn];
        for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
          ee[i] = handlers[i].fn;
        }
        return ee;
      };
      EventEmitter.prototype.listenerCount = function listenerCount(event) {
        var evt = prefix ? prefix + event : event, listeners = this._events[evt];
        if (!listeners) return 0;
        if (listeners.fn) return 1;
        return listeners.length;
      };
      EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return false;
        var listeners = this._events[evt], len = arguments.length, args, i;
        if (listeners.fn) {
          if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
          switch (len) {
            case 1:
              return listeners.fn.call(listeners.context), true;
            case 2:
              return listeners.fn.call(listeners.context, a1), true;
            case 3:
              return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
          }
          for (i = 1, args = new Array(len - 1); i < len; i++) {
            args[i - 1] = arguments[i];
          }
          listeners.fn.apply(listeners.context, args);
        } else {
          var length = listeners.length, j;
          for (i = 0; i < length; i++) {
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
            switch (len) {
              case 1:
                listeners[i].fn.call(listeners[i].context);
                break;
              case 2:
                listeners[i].fn.call(listeners[i].context, a1);
                break;
              case 3:
                listeners[i].fn.call(listeners[i].context, a1, a2);
                break;
              case 4:
                listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                break;
              default:
                if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
                listeners[i].fn.apply(listeners[i].context, args);
            }
          }
        }
        return true;
      };
      EventEmitter.prototype.on = function on(event, fn, context) {
        return addListener(this, event, fn, context, false);
      };
      EventEmitter.prototype.once = function once(event, fn, context) {
        return addListener(this, event, fn, context, true);
      };
      EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return this;
        if (!fn) {
          clearEvent(this, evt);
          return this;
        }
        var listeners = this._events[evt];
        if (listeners.fn) {
          if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
          }
        } else {
          for (var i = 0, events2 = [], length = listeners.length; i < length; i++) {
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
              events2.push(listeners[i]);
            }
          }
          if (events2.length) this._events[evt] = events2.length === 1 ? events2[0] : events2;
          else clearEvent(this, evt);
        }
        return this;
      };
      EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;
        if (event) {
          evt = prefix ? prefix + event : event;
          if (this._events[evt]) clearEvent(this, evt);
        } else {
          this._events = new Events();
          this._eventsCount = 0;
        }
        return this;
      };
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.addListener = EventEmitter.prototype.on;
      EventEmitter.prefixed = prefix;
      EventEmitter.EventEmitter = EventEmitter;
      if ("undefined" !== typeof module) {
        module.exports = EventEmitter;
      }
    }
  });

  // node_modules/p-finally/index.js
  var require_p_finally = __commonJS({
    "node_modules/p-finally/index.js"(exports, module) {
      "use strict";
      module.exports = (promise, onFinally) => {
        onFinally = onFinally || (() => {
        });
        return promise.then(
          (val) => new Promise((resolve) => {
            resolve(onFinally());
          }).then(() => val),
          (err) => new Promise((resolve) => {
            resolve(onFinally());
          }).then(() => {
            throw err;
          })
        );
      };
    }
  });

  // node_modules/p-timeout/index.js
  var require_p_timeout = __commonJS({
    "node_modules/p-timeout/index.js"(exports, module) {
      "use strict";
      var pFinally = require_p_finally();
      var TimeoutError = class extends Error {
        constructor(message) {
          super(message);
          this.name = "TimeoutError";
        }
      };
      var pTimeout = (promise, milliseconds, fallback) => new Promise((resolve, reject) => {
        if (typeof milliseconds !== "number" || milliseconds < 0) {
          throw new TypeError("Expected `milliseconds` to be a positive number");
        }
        if (milliseconds === Infinity) {
          resolve(promise);
          return;
        }
        const timer = setTimeout(() => {
          if (typeof fallback === "function") {
            try {
              resolve(fallback());
            } catch (error) {
              reject(error);
            }
            return;
          }
          const message = typeof fallback === "string" ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
          const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);
          if (typeof promise.cancel === "function") {
            promise.cancel();
          }
          reject(timeoutError);
        }, milliseconds);
        pFinally(
          // eslint-disable-next-line promise/prefer-await-to-then
          promise.then(resolve, reject),
          () => {
            clearTimeout(timer);
          }
        );
      });
      module.exports = pTimeout;
      module.exports.default = pTimeout;
      module.exports.TimeoutError = TimeoutError;
    }
  });

  // node_modules/p-queue/dist/lower-bound.js
  var require_lower_bound = __commonJS({
    "node_modules/p-queue/dist/lower-bound.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function lowerBound(array, value, comparator) {
        let first = 0;
        let count = array.length;
        while (count > 0) {
          const step = count / 2 | 0;
          let it = first + step;
          if (comparator(array[it], value) <= 0) {
            first = ++it;
            count -= step + 1;
          } else {
            count = step;
          }
        }
        return first;
      }
      exports.default = lowerBound;
    }
  });

  // node_modules/p-queue/dist/priority-queue.js
  var require_priority_queue = __commonJS({
    "node_modules/p-queue/dist/priority-queue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var lower_bound_1 = require_lower_bound();
      var PriorityQueue = class {
        constructor() {
          this._queue = [];
        }
        enqueue(run, options) {
          options = Object.assign({ priority: 0 }, options);
          const element = {
            priority: options.priority,
            run
          };
          if (this.size && this._queue[this.size - 1].priority >= options.priority) {
            this._queue.push(element);
            return;
          }
          const index = lower_bound_1.default(this._queue, element, (a, b) => b.priority - a.priority);
          this._queue.splice(index, 0, element);
        }
        dequeue() {
          const item = this._queue.shift();
          return item === null || item === void 0 ? void 0 : item.run;
        }
        filter(options) {
          return this._queue.filter((element) => element.priority === options.priority).map((element) => element.run);
        }
        get size() {
          return this._queue.length;
        }
      };
      exports.default = PriorityQueue;
    }
  });

  // node_modules/p-queue/dist/index.js
  var require_dist = __commonJS({
    "node_modules/p-queue/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var EventEmitter = require_eventemitter3();
      var p_timeout_1 = require_p_timeout();
      var priority_queue_1 = require_priority_queue();
      var empty = () => {
      };
      var timeoutError = new p_timeout_1.TimeoutError();
      var PQueue2 = class extends EventEmitter {
        constructor(options) {
          var _a, _b, _c, _d;
          super();
          this._intervalCount = 0;
          this._intervalEnd = 0;
          this._pendingCount = 0;
          this._resolveEmpty = empty;
          this._resolveIdle = empty;
          options = Object.assign({ carryoverConcurrencyCount: false, intervalCap: Infinity, interval: 0, concurrency: Infinity, autoStart: true, queueClass: priority_queue_1.default }, options);
          if (!(typeof options.intervalCap === "number" && options.intervalCap >= 1)) {
            throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""}\` (${typeof options.intervalCap})`);
          }
          if (options.interval === void 0 || !(Number.isFinite(options.interval) && options.interval >= 0)) {
            throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""}\` (${typeof options.interval})`);
          }
          this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
          this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
          this._intervalCap = options.intervalCap;
          this._interval = options.interval;
          this._queue = new options.queueClass();
          this._queueClass = options.queueClass;
          this.concurrency = options.concurrency;
          this._timeout = options.timeout;
          this._throwOnTimeout = options.throwOnTimeout === true;
          this._isPaused = options.autoStart === false;
        }
        get _doesIntervalAllowAnother() {
          return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
        }
        get _doesConcurrentAllowAnother() {
          return this._pendingCount < this._concurrency;
        }
        _next() {
          this._pendingCount--;
          this._tryToStartAnother();
          this.emit("next");
        }
        _resolvePromises() {
          this._resolveEmpty();
          this._resolveEmpty = empty;
          if (this._pendingCount === 0) {
            this._resolveIdle();
            this._resolveIdle = empty;
            this.emit("idle");
          }
        }
        _onResumeInterval() {
          this._onInterval();
          this._initializeIntervalIfNeeded();
          this._timeoutId = void 0;
        }
        _isIntervalPaused() {
          const now3 = Date.now();
          if (this._intervalId === void 0) {
            const delay = this._intervalEnd - now3;
            if (delay < 0) {
              this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
            } else {
              if (this._timeoutId === void 0) {
                this._timeoutId = setTimeout(() => {
                  this._onResumeInterval();
                }, delay);
              }
              return true;
            }
          }
          return false;
        }
        _tryToStartAnother() {
          if (this._queue.size === 0) {
            if (this._intervalId) {
              clearInterval(this._intervalId);
            }
            this._intervalId = void 0;
            this._resolvePromises();
            return false;
          }
          if (!this._isPaused) {
            const canInitializeInterval = !this._isIntervalPaused();
            if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
              const job = this._queue.dequeue();
              if (!job) {
                return false;
              }
              this.emit("active");
              job();
              if (canInitializeInterval) {
                this._initializeIntervalIfNeeded();
              }
              return true;
            }
          }
          return false;
        }
        _initializeIntervalIfNeeded() {
          if (this._isIntervalIgnored || this._intervalId !== void 0) {
            return;
          }
          this._intervalId = setInterval(() => {
            this._onInterval();
          }, this._interval);
          this._intervalEnd = Date.now() + this._interval;
        }
        _onInterval() {
          if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = void 0;
          }
          this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
          this._processQueue();
        }
        /**
        Executes all queued functions until it reaches the limit.
        */
        _processQueue() {
          while (this._tryToStartAnother()) {
          }
        }
        get concurrency() {
          return this._concurrency;
        }
        set concurrency(newConcurrency) {
          if (!(typeof newConcurrency === "number" && newConcurrency >= 1)) {
            throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
          }
          this._concurrency = newConcurrency;
          this._processQueue();
        }
        /**
        Adds a sync or async task to the queue. Always returns a promise.
        */
        async add(fn, options = {}) {
          return new Promise((resolve, reject) => {
            const run = async () => {
              this._pendingCount++;
              this._intervalCount++;
              try {
                const operation = this._timeout === void 0 && options.timeout === void 0 ? fn() : p_timeout_1.default(Promise.resolve(fn()), options.timeout === void 0 ? this._timeout : options.timeout, () => {
                  if (options.throwOnTimeout === void 0 ? this._throwOnTimeout : options.throwOnTimeout) {
                    reject(timeoutError);
                  }
                  return void 0;
                });
                resolve(await operation);
              } catch (error) {
                reject(error);
              }
              this._next();
            };
            this._queue.enqueue(run, options);
            this._tryToStartAnother();
            this.emit("add");
          });
        }
        /**
            Same as `.add()`, but accepts an array of sync or async functions.
        
            @returns A promise that resolves when all functions are resolved.
            */
        async addAll(functions, options) {
          return Promise.all(functions.map(async (function_) => this.add(function_, options)));
        }
        /**
        Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
        */
        start() {
          if (!this._isPaused) {
            return this;
          }
          this._isPaused = false;
          this._processQueue();
          return this;
        }
        /**
        Put queue execution on hold.
        */
        pause() {
          this._isPaused = true;
        }
        /**
        Clear the queue.
        */
        clear() {
          this._queue = new this._queueClass();
        }
        /**
            Can be called multiple times. Useful if you for example add additional items at a later time.
        
            @returns A promise that settles when the queue becomes empty.
            */
        async onEmpty() {
          if (this._queue.size === 0) {
            return;
          }
          return new Promise((resolve) => {
            const existingResolve = this._resolveEmpty;
            this._resolveEmpty = () => {
              existingResolve();
              resolve();
            };
          });
        }
        /**
            The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
        
            @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
            */
        async onIdle() {
          if (this._pendingCount === 0 && this._queue.size === 0) {
            return;
          }
          return new Promise((resolve) => {
            const existingResolve = this._resolveIdle;
            this._resolveIdle = () => {
              existingResolve();
              resolve();
            };
          });
        }
        /**
        Size of the queue.
        */
        get size() {
          return this._queue.size;
        }
        /**
            Size of the queue, filtered by the given options.
        
            For example, this can be used to find the number of items remaining in the queue with a specific priority level.
            */
        sizeBy(options) {
          return this._queue.filter(options).length;
        }
        /**
        Number of pending promises.
        */
        get pending() {
          return this._pendingCount;
        }
        /**
        Whether the queue is currently paused.
        */
        get isPaused() {
          return this._isPaused;
        }
        get timeout() {
          return this._timeout;
        }
        /**
        Set the timeout for future operations.
        */
        set timeout(milliseconds) {
          this._timeout = milliseconds;
        }
      };
      exports.default = PQueue2;
    }
  });

  // src/index.ts
  var index_exports = {};
  __export(index_exports, {
    PiniaSharedState: () => PiniaSharedState,
    share: () => share
  });

  // node_modules/broadcast-channel/dist/esnode/util.js
  function isPromise(obj) {
    return obj && typeof obj.then === "function";
  }
  var PROMISE_RESOLVED_FALSE = Promise.resolve(false);
  var PROMISE_RESOLVED_TRUE = Promise.resolve(true);
  var PROMISE_RESOLVED_VOID = Promise.resolve();
  function sleep(time, resolveWith) {
    if (!time) time = 0;
    return new Promise(function(res) {
      return setTimeout(function() {
        return res(resolveWith);
      }, time);
    });
  }
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function randomToken() {
    return Math.random().toString(36).substring(2);
  }
  var lastMs = 0;
  function microSeconds() {
    var ret = Date.now() * 1e3;
    if (ret <= lastMs) {
      ret = lastMs + 1;
    }
    lastMs = ret;
    return ret;
  }

  // node_modules/broadcast-channel/dist/esnode/methods/native.js
  var microSeconds2 = microSeconds;
  var type = "native";
  function create(channelName) {
    var state = {
      time: microSeconds(),
      messagesCallback: null,
      bc: new BroadcastChannel(channelName),
      subFns: []
      // subscriberFunctions
    };
    state.bc.onmessage = function(msgEvent) {
      if (state.messagesCallback) {
        state.messagesCallback(msgEvent.data);
      }
    };
    return state;
  }
  function close(channelState) {
    channelState.bc.close();
    channelState.subFns = [];
  }
  function postMessage(channelState, messageJson) {
    try {
      channelState.bc.postMessage(messageJson, false);
      return PROMISE_RESOLVED_VOID;
    } catch (err) {
      return Promise.reject(err);
    }
  }
  function onMessage(channelState, fn) {
    channelState.messagesCallback = fn;
  }
  function canBeUsed() {
    if (typeof globalThis !== "undefined" && globalThis.Deno && globalThis.Deno.args) {
      return true;
    }
    if ((typeof window !== "undefined" || typeof self !== "undefined") && typeof BroadcastChannel === "function") {
      if (BroadcastChannel._pubkey) {
        throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
      }
      return true;
    } else {
      return false;
    }
  }
  function averageResponseTime() {
    return 150;
  }
  var NativeMethod = {
    create,
    close,
    onMessage,
    postMessage,
    canBeUsed,
    type,
    averageResponseTime,
    microSeconds: microSeconds2
  };

  // node_modules/oblivious-set/dist/esm/src/index.js
  var ObliviousSet = class {
    ttl;
    map = /* @__PURE__ */ new Map();
    /**
     * Creating calls to setTimeout() is expensive,
     * so we only do that if there is not timeout already open.
     */
    _to = false;
    constructor(ttl) {
      this.ttl = ttl;
    }
    has(value) {
      return this.map.has(value);
    }
    add(value) {
      this.map.set(value, now());
      if (!this._to) {
        this._to = true;
        setTimeout(() => {
          this._to = false;
          removeTooOldValues(this);
        }, 0);
      }
    }
    clear() {
      this.map.clear();
    }
  };
  function removeTooOldValues(obliviousSet) {
    const olderThen = now() - obliviousSet.ttl;
    const iterator = obliviousSet.map[Symbol.iterator]();
    while (true) {
      const next = iterator.next().value;
      if (!next) {
        return;
      }
      const value = next[0];
      const time = next[1];
      if (time < olderThen) {
        obliviousSet.map.delete(value);
      } else {
        return;
      }
    }
  }
  function now() {
    return Date.now();
  }

  // node_modules/broadcast-channel/dist/esnode/options.js
  function fillOptionsWithDefaults() {
    var originalOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var options = JSON.parse(JSON.stringify(originalOptions));
    if (typeof options.webWorkerSupport === "undefined") options.webWorkerSupport = true;
    if (!options.idb) options.idb = {};
    if (!options.idb.ttl) options.idb.ttl = 1e3 * 45;
    if (!options.idb.fallbackInterval) options.idb.fallbackInterval = 150;
    if (originalOptions.idb && typeof originalOptions.idb.onclose === "function") options.idb.onclose = originalOptions.idb.onclose;
    if (!options.localstorage) options.localstorage = {};
    if (!options.localstorage.removeTimeout) options.localstorage.removeTimeout = 1e3 * 60;
    if (originalOptions.methods) options.methods = originalOptions.methods;
    if (!options.node) options.node = {};
    if (!options.node.ttl) options.node.ttl = 1e3 * 60 * 2;
    if (!options.node.maxParallelWrites) options.node.maxParallelWrites = 2048;
    if (typeof options.node.useFastPath === "undefined") options.node.useFastPath = true;
    return options;
  }

  // node_modules/broadcast-channel/dist/esnode/methods/indexed-db.js
  var microSeconds3 = microSeconds;
  var DB_PREFIX = "pubkey.broadcast-channel-0-";
  var OBJECT_STORE_ID = "messages";
  var TRANSACTION_SETTINGS = {
    durability: "relaxed"
  };
  var type2 = "idb";
  function getIdb() {
    if (typeof indexedDB !== "undefined") return indexedDB;
    if (typeof window !== "undefined") {
      if (typeof window.mozIndexedDB !== "undefined") return window.mozIndexedDB;
      if (typeof window.webkitIndexedDB !== "undefined") return window.webkitIndexedDB;
      if (typeof window.msIndexedDB !== "undefined") return window.msIndexedDB;
    }
    return false;
  }
  function commitIndexedDBTransaction(tx) {
    if (tx.commit) {
      tx.commit();
    }
  }
  function createDatabase(channelName) {
    var IndexedDB = getIdb();
    var dbName = DB_PREFIX + channelName;
    var openRequest = IndexedDB.open(dbName);
    openRequest.onupgradeneeded = function(ev) {
      var db = ev.target.result;
      db.createObjectStore(OBJECT_STORE_ID, {
        keyPath: "id",
        autoIncrement: true
      });
    };
    return new Promise(function(res, rej) {
      openRequest.onerror = function(ev) {
        return rej(ev);
      };
      openRequest.onsuccess = function() {
        res(openRequest.result);
      };
    });
  }
  function writeMessage(db, readerUuid, messageJson) {
    var time = Date.now();
    var writeObject = {
      uuid: readerUuid,
      time,
      data: messageJson
    };
    var tx = db.transaction([OBJECT_STORE_ID], "readwrite", TRANSACTION_SETTINGS);
    return new Promise(function(res, rej) {
      tx.oncomplete = function() {
        return res();
      };
      tx.onerror = function(ev) {
        return rej(ev);
      };
      var objectStore = tx.objectStore(OBJECT_STORE_ID);
      objectStore.add(writeObject);
      commitIndexedDBTransaction(tx);
    });
  }
  function getMessagesHigherThan(db, lastCursorId) {
    var tx = db.transaction(OBJECT_STORE_ID, "readonly", TRANSACTION_SETTINGS);
    var objectStore = tx.objectStore(OBJECT_STORE_ID);
    var ret = [];
    var keyRangeValue = IDBKeyRange.bound(lastCursorId + 1, Infinity);
    if (objectStore.getAll) {
      var getAllRequest = objectStore.getAll(keyRangeValue);
      return new Promise(function(res, rej) {
        getAllRequest.onerror = function(err) {
          return rej(err);
        };
        getAllRequest.onsuccess = function(e) {
          res(e.target.result);
        };
      });
    }
    function openCursor() {
      try {
        keyRangeValue = IDBKeyRange.bound(lastCursorId + 1, Infinity);
        return objectStore.openCursor(keyRangeValue);
      } catch (e) {
        return objectStore.openCursor();
      }
    }
    return new Promise(function(res, rej) {
      var openCursorRequest = openCursor();
      openCursorRequest.onerror = function(err) {
        return rej(err);
      };
      openCursorRequest.onsuccess = function(ev) {
        var cursor = ev.target.result;
        if (cursor) {
          if (cursor.value.id < lastCursorId + 1) {
            cursor["continue"](lastCursorId + 1);
          } else {
            ret.push(cursor.value);
            cursor["continue"]();
          }
        } else {
          commitIndexedDBTransaction(tx);
          res(ret);
        }
      };
    });
  }
  function removeMessagesById(channelState, ids) {
    if (channelState.closed) {
      return Promise.resolve([]);
    }
    var tx = channelState.db.transaction(OBJECT_STORE_ID, "readwrite", TRANSACTION_SETTINGS);
    var objectStore = tx.objectStore(OBJECT_STORE_ID);
    return Promise.all(ids.map(function(id) {
      var deleteRequest = objectStore["delete"](id);
      return new Promise(function(res) {
        deleteRequest.onsuccess = function() {
          return res();
        };
      });
    }));
  }
  function getOldMessages(db, ttl) {
    var olderThen = Date.now() - ttl;
    var tx = db.transaction(OBJECT_STORE_ID, "readonly", TRANSACTION_SETTINGS);
    var objectStore = tx.objectStore(OBJECT_STORE_ID);
    var ret = [];
    return new Promise(function(res) {
      objectStore.openCursor().onsuccess = function(ev) {
        var cursor = ev.target.result;
        if (cursor) {
          var msgObk = cursor.value;
          if (msgObk.time < olderThen) {
            ret.push(msgObk);
            cursor["continue"]();
          } else {
            commitIndexedDBTransaction(tx);
            res(ret);
          }
        } else {
          res(ret);
        }
      };
    });
  }
  function cleanOldMessages(channelState) {
    return getOldMessages(channelState.db, channelState.options.idb.ttl).then(function(tooOld) {
      return removeMessagesById(channelState, tooOld.map(function(msg) {
        return msg.id;
      }));
    });
  }
  function create2(channelName, options) {
    options = fillOptionsWithDefaults(options);
    return createDatabase(channelName).then(function(db) {
      var state = {
        closed: false,
        lastCursorId: 0,
        channelName,
        options,
        uuid: randomToken(),
        /**
         * emittedMessagesIds
         * contains all messages that have been emitted before
         * @type {ObliviousSet}
         */
        eMIs: new ObliviousSet(options.idb.ttl * 2),
        // ensures we do not read messages in parallel
        writeBlockPromise: PROMISE_RESOLVED_VOID,
        messagesCallback: null,
        readQueuePromises: [],
        db
      };
      db.onclose = function() {
        state.closed = true;
        if (options.idb.onclose) options.idb.onclose();
      };
      _readLoop(state);
      return state;
    });
  }
  function _readLoop(state) {
    if (state.closed) return;
    readNewMessages(state).then(function() {
      return sleep(state.options.idb.fallbackInterval);
    }).then(function() {
      return _readLoop(state);
    });
  }
  function _filterMessage(msgObj, state) {
    if (msgObj.uuid === state.uuid) return false;
    if (state.eMIs.has(msgObj.id)) return false;
    if (msgObj.data.time < state.messagesCallbackTime) return false;
    return true;
  }
  function readNewMessages(state) {
    if (state.closed) return PROMISE_RESOLVED_VOID;
    if (!state.messagesCallback) return PROMISE_RESOLVED_VOID;
    return getMessagesHigherThan(state.db, state.lastCursorId).then(function(newerMessages) {
      var useMessages = newerMessages.filter(function(msgObj) {
        return !!msgObj;
      }).map(function(msgObj) {
        if (msgObj.id > state.lastCursorId) {
          state.lastCursorId = msgObj.id;
        }
        return msgObj;
      }).filter(function(msgObj) {
        return _filterMessage(msgObj, state);
      }).sort(function(msgObjA, msgObjB) {
        return msgObjA.time - msgObjB.time;
      });
      useMessages.forEach(function(msgObj) {
        if (state.messagesCallback) {
          state.eMIs.add(msgObj.id);
          state.messagesCallback(msgObj.data);
        }
      });
      return PROMISE_RESOLVED_VOID;
    });
  }
  function close2(channelState) {
    channelState.closed = true;
    channelState.db.close();
  }
  function postMessage2(channelState, messageJson) {
    channelState.writeBlockPromise = channelState.writeBlockPromise.then(function() {
      return writeMessage(channelState.db, channelState.uuid, messageJson);
    }).then(function() {
      if (randomInt(0, 10) === 0) {
        cleanOldMessages(channelState);
      }
    });
    return channelState.writeBlockPromise;
  }
  function onMessage2(channelState, fn, time) {
    channelState.messagesCallbackTime = time;
    channelState.messagesCallback = fn;
    readNewMessages(channelState);
  }
  function canBeUsed2() {
    return !!getIdb();
  }
  function averageResponseTime2(options) {
    return options.idb.fallbackInterval * 2;
  }
  var IndexedDBMethod = {
    create: create2,
    close: close2,
    onMessage: onMessage2,
    postMessage: postMessage2,
    canBeUsed: canBeUsed2,
    type: type2,
    averageResponseTime: averageResponseTime2,
    microSeconds: microSeconds3
  };

  // node_modules/broadcast-channel/dist/esnode/methods/localstorage.js
  var microSeconds4 = microSeconds;
  var KEY_PREFIX = "pubkey.broadcastChannel-";
  var type3 = "localstorage";
  function getLocalStorage() {
    var localStorage;
    if (typeof window === "undefined") return null;
    try {
      localStorage = window.localStorage;
      localStorage = window["ie8-eventlistener/storage"] || window.localStorage;
    } catch (e) {
    }
    return localStorage;
  }
  function storageKey(channelName) {
    return KEY_PREFIX + channelName;
  }
  function postMessage3(channelState, messageJson) {
    return new Promise(function(res) {
      sleep().then(function() {
        var key = storageKey(channelState.channelName);
        var writeObj = {
          token: randomToken(),
          time: Date.now(),
          data: messageJson,
          uuid: channelState.uuid
        };
        var value = JSON.stringify(writeObj);
        getLocalStorage().setItem(key, value);
        var ev = document.createEvent("Event");
        ev.initEvent("storage", true, true);
        ev.key = key;
        ev.newValue = value;
        window.dispatchEvent(ev);
        res();
      });
    });
  }
  function addStorageEventListener(channelName, fn) {
    var key = storageKey(channelName);
    var listener = function listener2(ev) {
      if (ev.key === key) {
        fn(JSON.parse(ev.newValue));
      }
    };
    window.addEventListener("storage", listener);
    return listener;
  }
  function removeStorageEventListener(listener) {
    window.removeEventListener("storage", listener);
  }
  function create3(channelName, options) {
    options = fillOptionsWithDefaults(options);
    if (!canBeUsed3()) {
      throw new Error("BroadcastChannel: localstorage cannot be used");
    }
    var uuid = randomToken();
    var eMIs = new ObliviousSet(options.localstorage.removeTimeout);
    var state = {
      channelName,
      uuid,
      eMIs
      // emittedMessagesIds
    };
    state.listener = addStorageEventListener(channelName, function(msgObj) {
      if (!state.messagesCallback) return;
      if (msgObj.uuid === uuid) return;
      if (!msgObj.token || eMIs.has(msgObj.token)) return;
      if (msgObj.data.time && msgObj.data.time < state.messagesCallbackTime) return;
      eMIs.add(msgObj.token);
      state.messagesCallback(msgObj.data);
    });
    return state;
  }
  function close3(channelState) {
    removeStorageEventListener(channelState.listener);
  }
  function onMessage3(channelState, fn, time) {
    channelState.messagesCallbackTime = time;
    channelState.messagesCallback = fn;
  }
  function canBeUsed3() {
    var ls = getLocalStorage();
    if (!ls) return false;
    try {
      var key = "__broadcastchannel_check";
      ls.setItem(key, "works");
      ls.removeItem(key);
    } catch (e) {
      return false;
    }
    return true;
  }
  function averageResponseTime3() {
    var defaultTime = 120;
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
      return defaultTime * 2;
    }
    return defaultTime;
  }
  var LocalstorageMethod = {
    create: create3,
    close: close3,
    onMessage: onMessage3,
    postMessage: postMessage3,
    canBeUsed: canBeUsed3,
    type: type3,
    averageResponseTime: averageResponseTime3,
    microSeconds: microSeconds4
  };

  // node_modules/broadcast-channel/dist/esnode/methods/simulate.js
  var microSeconds5 = microSeconds;
  var type4 = "simulate";
  var SIMULATE_CHANNELS = /* @__PURE__ */ new Set();
  function create4(channelName) {
    var state = {
      time: microSeconds5(),
      name: channelName,
      messagesCallback: null
    };
    SIMULATE_CHANNELS.add(state);
    return state;
  }
  function close4(channelState) {
    SIMULATE_CHANNELS["delete"](channelState);
  }
  var SIMULATE_DELAY_TIME = 5;
  function postMessage4(channelState, messageJson) {
    return new Promise(function(res) {
      return setTimeout(function() {
        var channelArray = Array.from(SIMULATE_CHANNELS);
        channelArray.forEach(function(channel) {
          if (channel.name === channelState.name && // has same name
          channel !== channelState && // not own channel
          !!channel.messagesCallback && // has subscribers
          channel.time < messageJson.time) {
            channel.messagesCallback(messageJson);
          }
        });
        res();
      }, SIMULATE_DELAY_TIME);
    });
  }
  function onMessage4(channelState, fn) {
    channelState.messagesCallback = fn;
  }
  function canBeUsed4() {
    return true;
  }
  function averageResponseTime4() {
    return SIMULATE_DELAY_TIME;
  }
  var SimulateMethod = {
    create: create4,
    close: close4,
    onMessage: onMessage4,
    postMessage: postMessage4,
    canBeUsed: canBeUsed4,
    type: type4,
    averageResponseTime: averageResponseTime4,
    microSeconds: microSeconds5
  };

  // node_modules/broadcast-channel/dist/esnode/methods/node.js
  var node_exports = {};
  __export(node_exports, {
    TMP_FOLDER_BASE: () => TMP_FOLDER_BASE,
    _filterMessage: () => _filterMessage2,
    averageResponseTime: () => averageResponseTime5,
    canBeUsed: () => canBeUsed5,
    cleanOldMessages: () => cleanOldMessages2,
    cleanPipeName: () => cleanPipeName,
    clearNodeFolder: () => clearNodeFolder,
    close: () => close5,
    countChannelFolders: () => countChannelFolders,
    create: () => create5,
    createSocketEventEmitter: () => createSocketEventEmitter,
    createSocketInfoFile: () => createSocketInfoFile,
    emitOverFastPath: () => emitOverFastPath,
    ensureFoldersExist: () => ensureFoldersExist,
    getAllMessages: () => getAllMessages,
    getPaths: () => getPaths,
    getReadersUuids: () => getReadersUuids,
    getSingleMessage: () => getSingleMessage,
    handleMessagePing: () => handleMessagePing,
    messagePath: () => messagePath,
    microSeconds: () => microSeconds6,
    onMessage: () => onMessage5,
    openClientConnection: () => openClientConnection,
    postMessage: () => postMessage5,
    readMessage: () => readMessage,
    refreshReaderClients: () => refreshReaderClients,
    socketInfoPath: () => socketInfoPath,
    socketPath: () => socketPath,
    type: () => type5,
    writeMessage: () => writeMessage2
  });
  var import_asyncToGenerator = __toESM(require_asyncToGenerator(), 1);
  var import_regenerator = __toESM(require_regenerator(), 1);
  var import_util5 = __toESM(__require("util"), 1);
  var import_fs = __toESM(__require("fs"), 1);
  var import_crypto = __toESM(__require("crypto"), 1);
  var import_os = __toESM(__require("os"), 1);
  var import_events = __toESM(__require("events"), 1);
  var import_net = __toESM(__require("net"), 1);
  var import_path = __toESM(__require("path"), 1);
  var import_p_queue = __toESM(require_dist(), 1);

  // node_modules/unload/dist/es/browser.js
  function addBrowser(fn) {
    if (typeof WorkerGlobalScope === "function" && self instanceof WorkerGlobalScope) {
      var oldClose = self.close.bind(self);
      self.close = function() {
        fn();
        return oldClose();
      };
    } else {
      if (typeof window.addEventListener !== "function") {
        return;
      }
      window.addEventListener("beforeunload", function() {
        fn();
      }, true);
      window.addEventListener("unload", function() {
        fn();
      }, true);
    }
  }

  // node_modules/unload/dist/es/node.js
  function addNode(fn) {
    process.on("exit", function() {
      return fn();
    });
    process.on("beforeExit", function() {
      return fn().then(function() {
        return process.exit();
      });
    });
    process.on("SIGINT", function() {
      return fn().then(function() {
        return process.exit();
      });
    });
    process.on("uncaughtException", function(err) {
      return fn().then(function() {
        console.trace(err);
        process.exit(101);
      });
    });
  }

  // node_modules/unload/dist/es/index.js
  var isNode = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
  var USE_METHOD = isNode ? addNode : addBrowser;
  var LISTENERS = /* @__PURE__ */ new Set();
  var startedListening = false;
  function startListening() {
    if (startedListening) {
      return;
    }
    startedListening = true;
    USE_METHOD(runAll);
  }
  function add(fn) {
    startListening();
    if (typeof fn !== "function") {
      throw new Error("Listener is no function");
    }
    LISTENERS.add(fn);
    var addReturn = {
      remove: function remove() {
        return LISTENERS["delete"](fn);
      },
      run: function run() {
        LISTENERS["delete"](fn);
        return fn();
      }
    };
    return addReturn;
  }
  function runAll() {
    var promises = [];
    LISTENERS.forEach(function(fn) {
      promises.push(fn());
      LISTENERS["delete"](fn);
    });
    return Promise.all(promises);
  }

  // node_modules/broadcast-channel/dist/esnode/methods/node.js
  var PQueueConstructor = import_p_queue.default["default"] ? import_p_queue.default["default"] : import_p_queue.default;
  function cleanPipeName(str) {
    if (process.platform === "win32" && !str.startsWith("\\\\.\\pipe\\")) {
      str = str.replace(/^\//, "");
      str = str.replace(/\//g, "-");
      return "\\\\.\\pipe\\" + str;
    } else {
      return str;
    }
  }
  var mkdir = import_util5.default.promisify(import_fs.default.mkdir);
  var writeFile = import_util5.default.promisify(import_fs.default.writeFile);
  var readFile = import_util5.default.promisify(import_fs.default.readFile);
  var unlink = import_util5.default.promisify(import_fs.default.unlink);
  var readdir = import_util5.default.promisify(import_fs.default.readdir);
  var chmod = import_util5.default.promisify(import_fs.default.chmod);
  var rmDir = import_util5.default.promisify(import_fs.default.rm);
  var removeDir = /* @__PURE__ */ function() {
    var _ref = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee(p) {
      return import_regenerator.default.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return rmDir(p, {
              recursive: true
            });
          case 3:
            return _context.abrupt("return", _context.sent);
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            if (!(_context.t0.code !== "ENOENT")) {
              _context.next = 10;
              break;
            }
            throw _context.t0;
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 6]]);
    }));
    return function removeDir2(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var OTHER_INSTANCES = {};
  var TMP_FOLDER_NAME = "pubkey.bc";
  var TMP_FOLDER_BASE = import_path.default.join(import_os.default.tmpdir(), TMP_FOLDER_NAME);
  var getPathsCache = /* @__PURE__ */ new Map();
  function getPaths(channelName) {
    if (!getPathsCache.has(channelName)) {
      var channelHash = import_crypto.default.createHash("sha256").update(channelName).digest("hex");
      var channelFolder = "A" + channelHash.substring(0, 20);
      var channelPathBase = import_path.default.join(TMP_FOLDER_BASE, channelFolder);
      var folderPathReaders = import_path.default.join(channelPathBase, "rdrs");
      var folderPathMessages = import_path.default.join(channelPathBase, "msgs");
      var ret = {
        channelBase: channelPathBase,
        readers: folderPathReaders,
        messages: folderPathMessages
      };
      getPathsCache.set(channelName, ret);
      return ret;
    }
    return getPathsCache.get(channelName);
  }
  var ENSURE_BASE_FOLDER_EXISTS_PROMISE = null;
  function ensureBaseFolderExists() {
    return _ensureBaseFolderExists.apply(this, arguments);
  }
  function _ensureBaseFolderExists() {
    _ensureBaseFolderExists = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee4() {
      return import_regenerator.default.wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!ENSURE_BASE_FOLDER_EXISTS_PROMISE) {
              ENSURE_BASE_FOLDER_EXISTS_PROMISE = mkdir(TMP_FOLDER_BASE)["catch"](function() {
                return null;
              });
            }
            return _context4.abrupt("return", ENSURE_BASE_FOLDER_EXISTS_PROMISE);
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _ensureBaseFolderExists.apply(this, arguments);
  }
  function ensureFoldersExist(_x2, _x3) {
    return _ensureFoldersExist.apply(this, arguments);
  }
  function _ensureFoldersExist() {
    _ensureFoldersExist = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee5(channelName, paths) {
      var chmodValue;
      return import_regenerator.default.wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            paths = paths || getPaths(channelName);
            _context5.next = 3;
            return ensureBaseFolderExists();
          case 3:
            _context5.next = 5;
            return mkdir(paths.channelBase)["catch"](function() {
              return null;
            });
          case 5:
            _context5.next = 7;
            return Promise.all([mkdir(paths.readers)["catch"](function() {
              return null;
            }), mkdir(paths.messages)["catch"](function() {
              return null;
            })]);
          case 7:
            chmodValue = "777";
            _context5.next = 10;
            return Promise.all([chmod(paths.channelBase, chmodValue), chmod(paths.readers, chmodValue), chmod(paths.messages, chmodValue)])["catch"](function() {
              return null;
            });
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return _ensureFoldersExist.apply(this, arguments);
  }
  function clearNodeFolder() {
    return _clearNodeFolder.apply(this, arguments);
  }
  function _clearNodeFolder() {
    _clearNodeFolder = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee6() {
      return import_regenerator.default.wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!(!TMP_FOLDER_BASE || TMP_FOLDER_BASE === "" || TMP_FOLDER_BASE === "/")) {
              _context6.next = 2;
              break;
            }
            throw new Error("BroadcastChannel.clearNodeFolder(): path is wrong");
          case 2:
            ENSURE_BASE_FOLDER_EXISTS_PROMISE = null;
            _context6.next = 5;
            return removeDir(TMP_FOLDER_BASE);
          case 5:
            ENSURE_BASE_FOLDER_EXISTS_PROMISE = null;
            return _context6.abrupt("return", true);
          case 7:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return _clearNodeFolder.apply(this, arguments);
  }
  function socketPath(channelName, readerUuid, paths) {
    paths = paths || getPaths(channelName);
    var socketPath2 = import_path.default.join(paths.readers, readerUuid + ".s");
    return cleanPipeName(socketPath2);
  }
  function socketInfoPath(channelName, readerUuid, paths) {
    paths = paths || getPaths(channelName);
    return import_path.default.join(paths.readers, readerUuid + ".json");
  }
  function createSocketInfoFile(channelName, readerUuid, paths) {
    var pathToFile = socketInfoPath(channelName, readerUuid, paths);
    return writeFile(pathToFile, JSON.stringify({
      time: microSeconds6()
    })).then(function() {
      return pathToFile;
    });
  }
  function countChannelFolders() {
    return _countChannelFolders.apply(this, arguments);
  }
  function _countChannelFolders() {
    _countChannelFolders = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee7() {
      var folders;
      return import_regenerator.default.wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return ensureBaseFolderExists();
          case 2:
            _context7.next = 4;
            return readdir(TMP_FOLDER_BASE);
          case 4:
            folders = _context7.sent;
            return _context7.abrupt("return", folders.length);
          case 6:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return _countChannelFolders.apply(this, arguments);
  }
  function connectionError(_x4) {
    return _connectionError.apply(this, arguments);
  }
  function _connectionError() {
    _connectionError = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee8(originalError) {
      var count, addObj, text;
      return import_regenerator.default.wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return countChannelFolders();
          case 2:
            count = _context8.sent;
            if (!(count < 30)) {
              _context8.next = 5;
              break;
            }
            return _context8.abrupt("return", originalError);
          case 5:
            addObj = {};
            Object.entries(originalError).forEach(function(_ref4) {
              var k = _ref4[0], v = _ref4[1];
              return addObj[k] = v;
            });
            text = "BroadcastChannel.create(): error: This might happen if you have created to many channels, like when you use BroadcastChannel in unit-tests.Try using BroadcastChannel.clearNodeFolder() to clear the tmp-folder before each test.See https://github.com/pubkey/broadcast-channel#clear-tmp-folder";
            return _context8.abrupt("return", new Error(text + ": " + JSON.stringify(addObj, null, 2)));
          case 9:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return _connectionError.apply(this, arguments);
  }
  function createSocketEventEmitter(_x5, _x6, _x7) {
    return _createSocketEventEmitter.apply(this, arguments);
  }
  function _createSocketEventEmitter() {
    _createSocketEventEmitter = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee11(channelName, readerUuid, paths) {
      var pathToSocket, emitter, server;
      return import_regenerator.default.wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            pathToSocket = socketPath(channelName, readerUuid, paths);
            emitter = new import_events.default.EventEmitter();
            server = import_net.default.createServer(function(stream) {
              stream.on("end", function() {
              });
              stream.on("data", function(msg) {
                emitter.emit("data", msg.toString());
              });
            });
            _context11.next = 5;
            return new Promise(function(resolve, reject) {
              server.on("error", /* @__PURE__ */ function() {
                var _ref5 = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee9(err) {
                  var useErr;
                  return import_regenerator.default.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.next = 2;
                        return connectionError(err);
                      case 2:
                        useErr = _context9.sent;
                        reject(useErr);
                      case 4:
                      case "end":
                        return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function(_x27) {
                  return _ref5.apply(this, arguments);
                };
              }());
              server.listen(pathToSocket, /* @__PURE__ */ function() {
                var _ref6 = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee10(err, res) {
                  var useErr;
                  return import_regenerator.default.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!err) {
                          _context10.next = 7;
                          break;
                        }
                        _context10.next = 3;
                        return connectionError(err);
                      case 3:
                        useErr = _context10.sent;
                        reject(useErr);
                        _context10.next = 8;
                        break;
                      case 7:
                        resolve(res);
                      case 8:
                      case "end":
                        return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function(_x28, _x29) {
                  return _ref6.apply(this, arguments);
                };
              }());
            });
          case 5:
            return _context11.abrupt("return", {
              path: pathToSocket,
              emitter,
              server
            });
          case 6:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return _createSocketEventEmitter.apply(this, arguments);
  }
  function openClientConnection(_x8, _x9) {
    return _openClientConnection.apply(this, arguments);
  }
  function _openClientConnection() {
    _openClientConnection = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee12(channelName, readerUuid) {
      var pathToSocket, client;
      return import_regenerator.default.wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            pathToSocket = socketPath(channelName, readerUuid);
            client = new import_net.default.Socket();
            return _context12.abrupt("return", new Promise(function(res, rej) {
              client.connect(pathToSocket, function() {
                return res(client);
              });
              client.on("error", function(err) {
                return rej(err);
              });
            }));
          case 3:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return _openClientConnection.apply(this, arguments);
  }
  function writeMessage2(channelName, readerUuid, messageJson, paths) {
    var time = messageJson.time;
    if (!time) {
      time = microSeconds6();
    }
    paths = paths || getPaths(channelName);
    var writeObject = {
      uuid: readerUuid,
      data: messageJson
    };
    var token = randomToken();
    var fileName = time + "_" + readerUuid + "_" + token + ".json";
    var msgPath = import_path.default.join(paths.messages, fileName);
    return writeFile(msgPath, JSON.stringify(writeObject)).then(function() {
      return {
        time,
        uuid: readerUuid,
        token,
        path: msgPath
      };
    });
  }
  function getReadersUuids(_x10, _x11) {
    return _getReadersUuids.apply(this, arguments);
  }
  function _getReadersUuids() {
    _getReadersUuids = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee13(channelName, paths) {
      var readersPath, files;
      return import_regenerator.default.wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            paths = paths || getPaths(channelName);
            readersPath = paths.readers;
            _context13.next = 4;
            return readdir(readersPath);
          case 4:
            files = _context13.sent;
            return _context13.abrupt("return", files.map(function(file) {
              return file.split(".");
            }).filter(function(split) {
              return split[1] === "json";
            }).map(function(split) {
              return split[0];
            }));
          case 6:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    return _getReadersUuids.apply(this, arguments);
  }
  function messagePath(_x12, _x13, _x14, _x15) {
    return _messagePath.apply(this, arguments);
  }
  function _messagePath() {
    _messagePath = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee14(channelName, time, token, writerUuid) {
      var fileName;
      return import_regenerator.default.wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            fileName = time + "_" + writerUuid + "_" + token + ".json";
            return _context14.abrupt("return", import_path.default.join(getPaths(channelName).messages, fileName));
          case 2:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    return _messagePath.apply(this, arguments);
  }
  function getAllMessages(_x16, _x17) {
    return _getAllMessages.apply(this, arguments);
  }
  function _getAllMessages() {
    _getAllMessages = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee15(channelName, paths) {
      var messagesPath, files;
      return import_regenerator.default.wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            paths = paths || getPaths(channelName);
            messagesPath = paths.messages;
            _context15.next = 4;
            return readdir(messagesPath);
          case 4:
            files = _context15.sent;
            return _context15.abrupt("return", files.map(function(file) {
              var fileName = file.split(".")[0];
              var split = fileName.split("_");
              return {
                path: import_path.default.join(messagesPath, file),
                time: parseInt(split[0]),
                senderUuid: split[1],
                token: split[2]
              };
            }));
          case 6:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    }));
    return _getAllMessages.apply(this, arguments);
  }
  function getSingleMessage(channelName, msgObj, paths) {
    paths = paths || getPaths(channelName);
    return {
      path: import_path.default.join(paths.messages, msgObj.t + "_" + msgObj.u + "_" + msgObj.to + ".json"),
      time: msgObj.t,
      senderUuid: msgObj.u,
      token: msgObj.to
    };
  }
  function readMessage(messageObj) {
    return readFile(messageObj.path, "utf8").then(function(content) {
      return JSON.parse(content);
    });
  }
  function cleanOldMessages2(_x18, _x19) {
    return _cleanOldMessages.apply(this, arguments);
  }
  function _cleanOldMessages() {
    _cleanOldMessages = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee16(messageObjects, ttl) {
      var olderThan;
      return import_regenerator.default.wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            olderThan = microSeconds6() - ttl * 1e3;
            _context16.next = 3;
            return Promise.all(messageObjects.filter(function(obj) {
              return obj.time < olderThan;
            }).map(function(obj) {
              return unlink(obj.path)["catch"](function() {
                return null;
              });
            }));
          case 3:
          case "end":
            return _context16.stop();
        }
      }, _callee16);
    }));
    return _cleanOldMessages.apply(this, arguments);
  }
  var type5 = "node";
  function create5(_x20) {
    return _create.apply(this, arguments);
  }
  function _create() {
    _create = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee17(channelName) {
      var options, time, paths, ensureFolderExistsPromise, uuid, state, _yield$Promise$all, socketEE, infoFilePath, _args17 = arguments;
      return import_regenerator.default.wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            options = _args17.length > 1 && _args17[1] !== void 0 ? _args17[1] : {};
            options = fillOptionsWithDefaults(options);
            time = microSeconds6();
            paths = getPaths(channelName);
            ensureFolderExistsPromise = ensureFoldersExist(channelName, paths);
            uuid = randomToken();
            state = {
              time,
              channelName,
              options,
              uuid,
              paths,
              // contains all messages that have been emitted before
              emittedMessagesIds: new ObliviousSet(options.node.ttl * 2),
              /**
               * Used to ensure we do not write too many files at once
               * which could throw an error.
               * Must always be smaller than options.node.maxParallelWrites
               */
              writeFileQueue: new PQueueConstructor({
                concurrency: options.node.maxParallelWrites
              }),
              messagesCallbackTime: null,
              messagesCallback: null,
              // ensures we do not read messages in parallel
              writeBlockPromise: PROMISE_RESOLVED_VOID,
              otherReaderClients: {},
              // ensure if process crashes, everything is cleaned up
              removeUnload: add(function() {
                return close5(state);
              }),
              closed: false
            };
            if (!OTHER_INSTANCES[channelName]) OTHER_INSTANCES[channelName] = [];
            OTHER_INSTANCES[channelName].push(state);
            _context17.next = 11;
            return ensureFolderExistsPromise;
          case 11:
            _context17.next = 13;
            return Promise.all([createSocketEventEmitter(channelName, uuid, paths), createSocketInfoFile(channelName, uuid, paths), refreshReaderClients(state)]);
          case 13:
            _yield$Promise$all = _context17.sent;
            socketEE = _yield$Promise$all[0];
            infoFilePath = _yield$Promise$all[1];
            state.socketEE = socketEE;
            state.infoFilePath = infoFilePath;
            socketEE.emitter.on("data", function(data) {
              var singleOnes = data.split("|");
              singleOnes.filter(function(single) {
                return single !== "";
              }).forEach(function(single) {
                try {
                  var obj = JSON.parse(single);
                  handleMessagePing(state, obj);
                } catch (err) {
                  throw new Error("could not parse data: " + single);
                }
              });
            });
            return _context17.abrupt("return", state);
          case 20:
          case "end":
            return _context17.stop();
        }
      }, _callee17);
    }));
    return _create.apply(this, arguments);
  }
  function _filterMessage2(msgObj, state) {
    if (msgObj.senderUuid === state.uuid) return false;
    if (state.emittedMessagesIds.has(msgObj.token)) return false;
    if (!state.messagesCallback) return false;
    if (msgObj.time < state.messagesCallbackTime) return false;
    if (msgObj.time < state.time) return false;
    state.emittedMessagesIds.add(msgObj.token);
    return true;
  }
  function handleMessagePing(_x21, _x22) {
    return _handleMessagePing.apply(this, arguments);
  }
  function _handleMessagePing() {
    _handleMessagePing = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee18(state, msgObj) {
      var messages, useMessages;
      return import_regenerator.default.wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            if (state.messagesCallback) {
              _context18.next = 2;
              break;
            }
            return _context18.abrupt("return");
          case 2:
            if (msgObj) {
              _context18.next = 8;
              break;
            }
            _context18.next = 5;
            return getAllMessages(state.channelName, state.paths);
          case 5:
            messages = _context18.sent;
            _context18.next = 9;
            break;
          case 8:
            messages = [getSingleMessage(state.channelName, msgObj, state.paths)];
          case 9:
            useMessages = messages.filter(function(msgObj2) {
              return _filterMessage2(msgObj2, state);
            }).sort(function(msgObjA, msgObjB) {
              return msgObjA.time - msgObjB.time;
            });
            if (!(!useMessages.length || !state.messagesCallback)) {
              _context18.next = 12;
              break;
            }
            return _context18.abrupt("return");
          case 12:
            _context18.next = 14;
            return Promise.all(useMessages.map(function(msgObj2) {
              return readMessage(msgObj2).then(function(content) {
                return msgObj2.content = content;
              });
            }));
          case 14:
            useMessages.forEach(function(msgObj2) {
              state.emittedMessagesIds.add(msgObj2.token);
              if (state.messagesCallback) {
                state.messagesCallback(msgObj2.content.data);
              }
            });
          case 15:
          case "end":
            return _context18.stop();
        }
      }, _callee18);
    }));
    return _handleMessagePing.apply(this, arguments);
  }
  function refreshReaderClients(channelState) {
    return getReadersUuids(channelState.channelName, channelState.paths).then(function(otherReaders) {
      Object.keys(channelState.otherReaderClients).filter(function(readerUuid) {
        return !otherReaders.includes(readerUuid);
      }).forEach(/* @__PURE__ */ function() {
        var _ref2 = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee2(readerUuid) {
          return import_regenerator.default.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return channelState.otherReaderClients[readerUuid].destroy();
              case 3:
                _context2.next = 7;
                break;
              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);
              case 7:
                delete channelState.otherReaderClients[readerUuid];
              case 8:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[0, 5]]);
        }));
        return function(_x23) {
          return _ref2.apply(this, arguments);
        };
      }());
      return Promise.all(otherReaders.filter(function(readerUuid) {
        return readerUuid !== channelState.uuid;
      }).filter(function(readerUuid) {
        return !channelState.otherReaderClients[readerUuid];
      }).map(/* @__PURE__ */ function() {
        var _ref3 = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee3(readerUuid) {
          var client;
          return import_regenerator.default.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                if (!channelState.closed) {
                  _context3.next = 3;
                  break;
                }
                return _context3.abrupt("return");
              case 3:
                _context3.prev = 3;
                _context3.next = 6;
                return openClientConnection(channelState.channelName, readerUuid);
              case 6:
                client = _context3.sent;
                channelState.otherReaderClients[readerUuid] = client;
                _context3.next = 12;
                break;
              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](3);
              case 12:
                _context3.next = 16;
                break;
              case 14:
                _context3.prev = 14;
                _context3.t1 = _context3["catch"](0);
              case 16:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[0, 14], [3, 10]]);
        }));
        return function(_x24) {
          return _ref3.apply(this, arguments);
        };
      }()));
    });
  }
  function postMessage5(_x25, _x26) {
    return _postMessage.apply(this, arguments);
  }
  function _postMessage() {
    _postMessage = (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee20(channelState, messageJson) {
      var writePromise;
      return import_regenerator.default.wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            writePromise = channelState.writeFileQueue.add(function() {
              return writeMessage2(channelState.channelName, channelState.uuid, messageJson, channelState.paths);
            });
            channelState.writeBlockPromise = channelState.writeBlockPromise.then(/* @__PURE__ */ (0, import_asyncToGenerator.default)(/* @__PURE__ */ import_regenerator.default.mark(function _callee19() {
              var _yield$Promise$all2, msgObj, pingStr, writeToReadersPromise;
              return import_regenerator.default.wrap(function _callee19$(_context19) {
                while (1) switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return new Promise(function(res) {
                      return setTimeout(res, 0);
                    });
                  case 2:
                    _context19.next = 4;
                    return Promise.all([writePromise, refreshReaderClients(channelState)]);
                  case 4:
                    _yield$Promise$all2 = _context19.sent;
                    msgObj = _yield$Promise$all2[0];
                    emitOverFastPath(channelState, msgObj, messageJson);
                    pingStr = '{"t":' + msgObj.time + ',"u":"' + msgObj.uuid + '","to":"' + msgObj.token + '"}|';
                    writeToReadersPromise = Promise.all(Object.values(channelState.otherReaderClients).filter(function(client) {
                      return client.writable;
                    }).map(function(client) {
                      return new Promise(function(res) {
                        client.write(pingStr, res);
                      });
                    }));
                    if (randomInt(0, 20) === 0) {
                      getAllMessages(channelState.channelName, channelState.paths).then(function(allMessages) {
                        return cleanOldMessages2(allMessages, channelState.options.node.ttl);
                      });
                    }
                    return _context19.abrupt("return", writeToReadersPromise);
                  case 11:
                  case "end":
                    return _context19.stop();
                }
              }, _callee19);
            })));
            return _context20.abrupt("return", channelState.writeBlockPromise);
          case 3:
          case "end":
            return _context20.stop();
        }
      }, _callee20);
    }));
    return _postMessage.apply(this, arguments);
  }
  function emitOverFastPath(state, msgObj, messageJson) {
    if (!state.options.node.useFastPath) {
      return;
    }
    var others = OTHER_INSTANCES[state.channelName].filter(function(s) {
      return s !== state;
    });
    var checkObj = {
      time: msgObj.time,
      senderUuid: msgObj.uuid,
      token: msgObj.token
    };
    others.filter(function(otherState) {
      return _filterMessage2(checkObj, otherState);
    }).forEach(function(otherState) {
      otherState.messagesCallback(messageJson);
    });
  }
  function onMessage5(channelState, fn) {
    var time = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : microSeconds6();
    channelState.messagesCallbackTime = time;
    channelState.messagesCallback = fn;
    handleMessagePing(channelState);
  }
  function close5(channelState) {
    if (channelState.closed) return PROMISE_RESOLVED_VOID;
    channelState.closed = true;
    channelState.emittedMessagesIds.clear();
    OTHER_INSTANCES[channelState.channelName] = OTHER_INSTANCES[channelState.channelName].filter(function(o) {
      return o !== channelState;
    });
    if (channelState.removeUnload) {
      channelState.removeUnload.remove();
    }
    return new Promise(function(res) {
      if (channelState.socketEE) channelState.socketEE.emitter.removeAllListeners();
      Object.values(channelState.otherReaderClients).forEach(function(client) {
        return client.destroy();
      });
      if (channelState.infoFilePath) {
        try {
          import_fs.default.unlinkSync(channelState.infoFilePath);
        } catch (err) {
        }
      }
      setTimeout(function() {
        channelState.socketEE.server.close();
        res();
      }, 200);
    });
  }
  function canBeUsed5() {
    return typeof import_fs.default.mkdir === "function";
  }
  function averageResponseTime5() {
    return 200;
  }
  function microSeconds6() {
    return parseInt(now2() / 1e3);
  }
  function now2() {
    return Number(process.hrtime.bigint());
  }

  // node_modules/broadcast-channel/dist/esnode/method-chooser.js
  var METHODS = [
    NativeMethod,
    // fastest
    IndexedDBMethod,
    LocalstorageMethod
  ];
  function chooseMethod(options) {
    var chooseMethods = [].concat(options.methods, METHODS).filter(Boolean);
    chooseMethods.push(node_exports);
    if (options.type) {
      if (options.type === "simulate") {
        return SimulateMethod;
      }
      var ret = chooseMethods.find(function(m) {
        return m.type === options.type;
      });
      if (!ret) throw new Error("method-type " + options.type + " not found");
      else return ret;
    }
    if (!options.webWorkerSupport) {
      chooseMethods = chooseMethods.filter(function(m) {
        return m.type !== "idb";
      });
    }
    var useMethod = chooseMethods.find(function(method) {
      return method.canBeUsed();
    });
    if (!useMethod) {
      throw new Error("No usable method found in " + JSON.stringify(METHODS.map(function(m) {
        return m.type;
      })));
    } else {
      return useMethod;
    }
  }

  // node_modules/broadcast-channel/dist/esnode/broadcast-channel.js
  var OPEN_BROADCAST_CHANNELS = /* @__PURE__ */ new Set();
  var lastId = 0;
  var BroadcastChannel2 = function BroadcastChannel3(name, options) {
    this.id = lastId++;
    OPEN_BROADCAST_CHANNELS.add(this);
    this.name = name;
    if (ENFORCED_OPTIONS) {
      options = ENFORCED_OPTIONS;
    }
    this.options = fillOptionsWithDefaults(options);
    this.method = chooseMethod(this.options);
    this._iL = false;
    this._onML = null;
    this._addEL = {
      message: [],
      internal: []
    };
    this._uMP = /* @__PURE__ */ new Set();
    this._befC = [];
    this._prepP = null;
    _prepareChannel(this);
  };
  BroadcastChannel2._pubkey = true;
  var ENFORCED_OPTIONS;
  BroadcastChannel2.prototype = {
    postMessage: function postMessage6(msg) {
      if (this.closed) {
        throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed " + /**
         * In the past when this error appeared, it was really hard to debug.
         * So now we log the msg together with the error so it at least
         * gives some clue about where in your application this happens.
         */
        JSON.stringify(msg));
      }
      return _post(this, "message", msg);
    },
    postInternal: function postInternal(msg) {
      return _post(this, "internal", msg);
    },
    set onmessage(fn) {
      var time = this.method.microSeconds();
      var listenObj = {
        time,
        fn
      };
      _removeListenerObject(this, "message", this._onML);
      if (fn && typeof fn === "function") {
        this._onML = listenObj;
        _addListenerObject(this, "message", listenObj);
      } else {
        this._onML = null;
      }
    },
    addEventListener: function addEventListener(type6, fn) {
      var time = this.method.microSeconds();
      var listenObj = {
        time,
        fn
      };
      _addListenerObject(this, type6, listenObj);
    },
    removeEventListener: function removeEventListener(type6, fn) {
      var obj = this._addEL[type6].find(function(obj2) {
        return obj2.fn === fn;
      });
      _removeListenerObject(this, type6, obj);
    },
    close: function close6() {
      var _this = this;
      if (this.closed) {
        return;
      }
      OPEN_BROADCAST_CHANNELS["delete"](this);
      this.closed = true;
      var awaitPrepare = this._prepP ? this._prepP : PROMISE_RESOLVED_VOID;
      this._onML = null;
      this._addEL.message = [];
      return awaitPrepare.then(function() {
        return Promise.all(Array.from(_this._uMP));
      }).then(function() {
        return Promise.all(_this._befC.map(function(fn) {
          return fn();
        }));
      }).then(function() {
        return _this.method.close(_this._state);
      });
    },
    get type() {
      return this.method.type;
    },
    get isClosed() {
      return this.closed;
    }
  };
  function _post(broadcastChannel, type6, msg) {
    var time = broadcastChannel.method.microSeconds();
    var msgObj = {
      time,
      type: type6,
      data: msg
    };
    var awaitPrepare = broadcastChannel._prepP ? broadcastChannel._prepP : PROMISE_RESOLVED_VOID;
    return awaitPrepare.then(function() {
      var sendPromise = broadcastChannel.method.postMessage(broadcastChannel._state, msgObj);
      broadcastChannel._uMP.add(sendPromise);
      sendPromise["catch"]().then(function() {
        return broadcastChannel._uMP["delete"](sendPromise);
      });
      return sendPromise;
    });
  }
  function _prepareChannel(channel) {
    var maybePromise = channel.method.create(channel.name, channel.options);
    if (isPromise(maybePromise)) {
      channel._prepP = maybePromise;
      maybePromise.then(function(s) {
        channel._state = s;
      });
    } else {
      channel._state = maybePromise;
    }
  }
  function _hasMessageListeners(channel) {
    if (channel._addEL.message.length > 0) return true;
    if (channel._addEL.internal.length > 0) return true;
    return false;
  }
  function _addListenerObject(channel, type6, obj) {
    channel._addEL[type6].push(obj);
    _startListening(channel);
  }
  function _removeListenerObject(channel, type6, obj) {
    channel._addEL[type6] = channel._addEL[type6].filter(function(o) {
      return o !== obj;
    });
    _stopListening(channel);
  }
  function _startListening(channel) {
    if (!channel._iL && _hasMessageListeners(channel)) {
      var listenerFn = function listenerFn2(msgObj) {
        channel._addEL[msgObj.type].forEach(function(listenerObject) {
          if (msgObj.time >= listenerObject.time) {
            listenerObject.fn(msgObj.data);
          }
        });
      };
      var time = channel.method.microSeconds();
      if (channel._prepP) {
        channel._prepP.then(function() {
          channel._iL = true;
          channel.method.onMessage(channel._state, listenerFn, time);
        });
      } else {
        channel._iL = true;
        channel.method.onMessage(channel._state, listenerFn, time);
      }
    }
  }
  function _stopListening(channel) {
    if (channel._iL && !_hasMessageListeners(channel)) {
      channel._iL = false;
      var time = channel.method.microSeconds();
      channel.method.onMessage(channel._state, null, time);
    }
  }

  // src/utils.ts
  function serialize(obj, serializer = { serialize: JSON.stringify, deserialize: JSON.parse }) {
    return serializer.serialize(obj);
  }

  // src/vanilla.ts
  function share(key, store, { initialize, serializer, type: type6 }) {
    const channelName = `${store.$id}-${key.toString()}`;
    const channel = new BroadcastChannel2(channelName, {
      type: type6
    });
    let externalUpdate = false;
    let timestamp = 0;
    store.$subscribe((_, state) => {
      if (!externalUpdate) {
        timestamp = Date.now();
        channel.postMessage({
          timestamp,
          newValue: serialize(state, serializer)[key]
        });
      }
      externalUpdate = false;
    });
    channel.onmessage = (evt) => {
      if (evt === void 0) {
        channel.postMessage({
          timestamp,
          // @ts-expect-error: TODO
          newValue: serialize(store.$state, serializer)[key]
        });
        return;
      }
      if (evt.timestamp <= timestamp)
        return;
      externalUpdate = true;
      timestamp = evt.timestamp;
      store[key] = evt.newValue;
    };
    const sync = () => channel.postMessage(void 0);
    const unshare = () => {
      return channel.close();
    };
    if (initialize)
      sync();
    return { sync, unshare };
  }

  // src/index.ts
  function stateHasKey(key, $state) {
    return Object.keys($state).includes(key);
  }
  function PiniaSharedState({
    enable = true,
    initialize = true,
    type: type6,
    serializer
  }) {
    return ({ store, options }) => {
      const isEnabled = options?.share?.enable ?? enable;
      const omittedKeys = options?.share?.omit ?? [];
      if (!isEnabled)
        return;
      const channel = new BroadcastChannel2(store.$id, {
        type: type6
      });
      let timestamp = 0;
      let externalUpdate = false;
      const keysToUpdate = Object.keys(store.$state).filter((key) => !omittedKeys.includes(key) && stateHasKey(key, store.$state));
      channel.onmessage = (newState) => {
        if (newState === void 0) {
          channel.postMessage({
            timestamp,
            state: serialize(store.$state, serializer)
          });
          return;
        }
        if (newState.timestamp <= timestamp)
          return;
        externalUpdate = true;
        timestamp = newState.timestamp;
        const deserializedState = serializer?.deserialize(newState.serializedState);
        store.$patch((state) => {
          keysToUpdate.forEach((key) => {
            state[key] = deserializedState[key];
          });
        });
      };
      const shouldInitialize = options?.share?.initialize ?? initialize;
      if (shouldInitialize)
        channel.postMessage(void 0);
      store.$subscribe((_, state) => {
        if (!externalUpdate) {
          timestamp = Date.now();
          channel.postMessage({
            timestamp,
            state: serialize(state, serializer)
          });
        }
        externalUpdate = false;
      });
    };
  }
  return __toCommonJS(index_exports);
})();
/*! Bundled license information:

@babel/runtime/helpers/regeneratorRuntime.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
//# sourceMappingURL=index.global.js.map