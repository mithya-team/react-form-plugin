import "./index.css";
import j from "react";
var wr = { exports: {} }, Be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr;
function gt() {
  return Pr || (Pr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = j, i = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), m = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), Y = Symbol.iterator, je = "@@iterator";
    function Fe(n) {
      if (n === null || typeof n != "object")
        return null;
      var c = Y && n[Y] || n[je];
      return typeof c == "function" ? c : null;
    }
    var oe = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(n) {
      {
        for (var c = arguments.length, g = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
          g[w - 1] = arguments[w];
        z("error", n, g);
      }
    }
    function z(n, c, g) {
      {
        var w = oe.ReactDebugCurrentFrame, O = w.getStackAddendum();
        O !== "" && (c += "%s", g = g.concat([O]));
        var $ = g.map(function(C) {
          return String(C);
        });
        $.unshift("Warning: " + c), Function.prototype.apply.call(console[n], console, $);
      }
    }
    var ne = !1, U = !1, Re = !1, me = !1, _e = !1, le;
    le = Symbol.for("react.module.reference");
    function X(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === t || n === s || _e || n === o || n === F || n === E || me || n === H || ne || U || Re || typeof n == "object" && n !== null && (n.$$typeof === x || n.$$typeof === R || n.$$typeof === f || n.$$typeof === m || n.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === le || n.getModuleId !== void 0));
    }
    function Se(n, c, g) {
      var w = n.displayName;
      if (w)
        return w;
      var O = c.displayName || c.name || "";
      return O !== "" ? g + "(" + O + ")" : g;
    }
    function V(n) {
      return n.displayName || "Context";
    }
    function A(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case t:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case F:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case m:
            var c = n;
            return V(c) + ".Consumer";
          case f:
            var g = n;
            return V(g._context) + ".Provider";
          case v:
            return Se(n, n.render, "ForwardRef");
          case R:
            var w = n.displayName || null;
            return w !== null ? w : A(n.type) || "Memo";
          case x: {
            var O = n, $ = O._payload, C = O._init;
            try {
              return A(C($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, N = 0, Z, K, ve, ue, pe, $e, Ve;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function Ke() {
      {
        if (N === 0) {
          Z = console.log, K = console.info, ve = console.warn, ue = console.error, pe = console.group, $e = console.groupCollapsed, Ve = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        N++;
      }
    }
    function fr() {
      {
        if (N--, N === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, n, {
              value: Z
            }),
            info: T({}, n, {
              value: K
            }),
            warn: T({}, n, {
              value: ve
            }),
            error: T({}, n, {
              value: ue
            }),
            group: T({}, n, {
              value: pe
            }),
            groupCollapsed: T({}, n, {
              value: $e
            }),
            groupEnd: T({}, n, {
              value: Ve
            })
          });
        }
        N < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ae = oe.ReactCurrentDispatcher, Ne;
    function ye(n, c, g) {
      {
        if (Ne === void 0)
          try {
            throw Error();
          } catch (O) {
            var w = O.stack.trim().match(/\n( *(at )?)/);
            Ne = w && w[1] || "";
          }
        return `
` + Ne + n;
      }
    }
    var ke = !1, he;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      he = new ze();
    }
    function Xe(n, c) {
      if (!n || ke)
        return "";
      {
        var g = he.get(n);
        if (g !== void 0)
          return g;
      }
      var w;
      ke = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = Ae.current, Ae.current = null, Ke();
      try {
        if (c) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (ce) {
              w = ce;
            }
            Reflect.construct(n, [], C);
          } else {
            try {
              C.call();
            } catch (ce) {
              w = ce;
            }
            n.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            w = ce;
          }
          n();
        }
      } catch (ce) {
        if (ce && w && typeof ce.stack == "string") {
          for (var k = ce.stack.split(`
`), G = w.stack.split(`
`), L = k.length - 1, B = G.length - 1; L >= 1 && B >= 0 && k[L] !== G[B]; )
            B--;
          for (; L >= 1 && B >= 0; L--, B--)
            if (k[L] !== G[B]) {
              if (L !== 1 || B !== 1)
                do
                  if (L--, B--, B < 0 || k[L] !== G[B]) {
                    var ee = `
` + k[L].replace(" at new ", " at ");
                    return n.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", n.displayName)), typeof n == "function" && he.set(n, ee), ee;
                  }
                while (L >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        ke = !1, Ae.current = $, fr(), Error.prepareStackTrace = O;
      }
      var Te = n ? n.displayName || n.name : "", $r = Te ? ye(Te) : "";
      return typeof n == "function" && he.set(n, $r), $r;
    }
    function Ze(n, c, g) {
      return Xe(n, !1);
    }
    function cr(n) {
      var c = n.prototype;
      return !!(c && c.isReactComponent);
    }
    function xe(n, c, g) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Xe(n, cr(n));
      if (typeof n == "string")
        return ye(n);
      switch (n) {
        case F:
          return ye("Suspense");
        case E:
          return ye("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case v:
            return Ze(n.render);
          case R:
            return xe(n.type, c, g);
          case x: {
            var w = n, O = w._payload, $ = w._init;
            try {
              return xe($(O), c, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, dr = {}, vr = oe.ReactDebugCurrentFrame;
    function Ie(n) {
      if (n) {
        var c = n._owner, g = xe(n.type, n._source, c ? c.type : null);
        vr.setExtraStackFrame(g);
      } else
        vr.setExtraStackFrame(null);
    }
    function a(n, c, g, w, O) {
      {
        var $ = Function.call.bind(Ee);
        for (var C in n)
          if ($(n, C)) {
            var k = void 0;
            try {
              if (typeof n[C] != "function") {
                var G = Error((w || "React class") + ": " + g + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              k = n[C](c, C, w, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              k = L;
            }
            k && !(k instanceof Error) && (Ie(O), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", g, C, typeof k), Ie(null)), k instanceof Error && !(k.message in dr) && (dr[k.message] = !0, Ie(O), p("Failed %s type: %s", g, k.message), Ie(null));
          }
      }
    }
    var u = Array.isArray;
    function l(n) {
      return u(n);
    }
    function b(n) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, g = c && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return g;
      }
    }
    function y(n) {
      try {
        return d(n), !1;
      } catch {
        return !0;
      }
    }
    function d(n) {
      return "" + n;
    }
    function _(n) {
      if (y(n))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", b(n)), d(n);
    }
    var D = oe.ReactCurrentOwner, M = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Q, fe, Le;
    Le = {};
    function Ue(n) {
      if (Ee.call(n, "ref")) {
        var c = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Me(n) {
      if (Ee.call(n, "key")) {
        var c = Object.getOwnPropertyDescriptor(n, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function yr(n, c) {
      if (typeof n.ref == "string" && D.current && c && D.current.stateNode !== c) {
        var g = A(D.current.type);
        Le[g] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(D.current.type), n.ref), Le[g] = !0);
      }
    }
    function Qe(n, c) {
      {
        var g = function() {
          Q || (Q = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        g.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function hr(n, c) {
      {
        var g = function() {
          fe || (fe = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        g.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var er = function(n, c, g, w, O, $, C) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: n,
        key: c,
        ref: g,
        props: C,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function ut(n, c, g, w, O) {
      {
        var $, C = {}, k = null, G = null;
        g !== void 0 && (_(g), k = "" + g), Me(c) && (_(c.key), k = "" + c.key), Ue(c) && (G = c.ref, yr(c, O));
        for ($ in c)
          Ee.call(c, $) && !M.hasOwnProperty($) && (C[$] = c[$]);
        if (n && n.defaultProps) {
          var L = n.defaultProps;
          for ($ in L)
            C[$] === void 0 && (C[$] = L[$]);
        }
        if (k || G) {
          var B = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          k && Qe(C, B), G && hr(C, B);
        }
        return er(n, k, G, O, w, D.current, C);
      }
    }
    var gr = oe.ReactCurrentOwner, kr = oe.ReactDebugCurrentFrame;
    function Ce(n) {
      if (n) {
        var c = n._owner, g = xe(n.type, n._source, c ? c.type : null);
        kr.setExtraStackFrame(g);
      } else
        kr.setExtraStackFrame(null);
    }
    var br;
    br = !1;
    function mr(n) {
      return typeof n == "object" && n !== null && n.$$typeof === i;
    }
    function Cr() {
      {
        if (gr.current) {
          var n = A(gr.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function st(n) {
      {
        if (n !== void 0) {
          var c = n.fileName.replace(/^.*[\\\/]/, ""), g = n.lineNumber;
          return `

Check your code at ` + c + ":" + g + ".";
        }
        return "";
      }
    }
    var Tr = {};
    function lt(n) {
      {
        var c = Cr();
        if (!c) {
          var g = typeof n == "string" ? n : n.displayName || n.name;
          g && (c = `

Check the top-level render call using <` + g + ">.");
        }
        return c;
      }
    }
    function Dr(n, c) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var g = lt(c);
        if (Tr[g])
          return;
        Tr[g] = !0;
        var w = "";
        n && n._owner && n._owner !== gr.current && (w = " It was passed a child from " + A(n._owner.type) + "."), Ce(n), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, w), Ce(null);
      }
    }
    function Or(n, c) {
      {
        if (typeof n != "object")
          return;
        if (l(n))
          for (var g = 0; g < n.length; g++) {
            var w = n[g];
            mr(w) && Dr(w, c);
          }
        else if (mr(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var O = Fe(n);
          if (typeof O == "function" && O !== n.entries)
            for (var $ = O.call(n), C; !(C = $.next()).done; )
              mr(C.value) && Dr(C.value, c);
        }
      }
    }
    function ft(n) {
      {
        var c = n.type;
        if (c == null || typeof c == "string")
          return;
        var g;
        if (typeof c == "function")
          g = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === R))
          g = c.propTypes;
        else
          return;
        if (g) {
          var w = A(c);
          a(g, n.props, "prop", w, n);
        } else if (c.PropTypes !== void 0 && !br) {
          br = !0;
          var O = A(c);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ct(n) {
      {
        for (var c = Object.keys(n.props), g = 0; g < c.length; g++) {
          var w = c[g];
          if (w !== "children" && w !== "key") {
            Ce(n), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), Ce(null);
            break;
          }
        }
        n.ref !== null && (Ce(n), p("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    function jr(n, c, g, w, O, $) {
      {
        var C = X(n);
        if (!C) {
          var k = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = st(O);
          G ? k += G : k += Cr();
          var L;
          n === null ? L = "null" : l(n) ? L = "array" : n !== void 0 && n.$$typeof === i ? (L = "<" + (A(n.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : L = typeof n, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, k);
        }
        var B = ut(n, c, g, O, $);
        if (B == null)
          return B;
        if (C) {
          var ee = c.children;
          if (ee !== void 0)
            if (w)
              if (l(ee)) {
                for (var Te = 0; Te < ee.length; Te++)
                  Or(ee[Te], n);
                Object.freeze && Object.freeze(ee);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Or(ee, n);
        }
        return n === t ? ct(B) : ft(B), B;
      }
    }
    function dt(n, c, g) {
      return jr(n, c, g, !0);
    }
    function vt(n, c, g) {
      return jr(n, c, g, !1);
    }
    var yt = vt, ht = dt;
    Be.Fragment = t, Be.jsx = yt, Be.jsxs = ht;
  }()), Be;
}
var We = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function bt() {
  if (Nr)
    return We;
  Nr = 1;
  var e = j, i = Symbol.for("react.element"), r = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(m, v, F) {
    var E, R = {}, x = null, H = null;
    F !== void 0 && (x = "" + F), v.key !== void 0 && (x = "" + v.key), v.ref !== void 0 && (H = v.ref);
    for (E in v)
      t.call(v, E) && !s.hasOwnProperty(E) && (R[E] = v[E]);
    if (m && m.defaultProps)
      for (E in v = m.defaultProps, v)
        R[E] === void 0 && (R[E] = v[E]);
    return { $$typeof: i, type: m, key: x, ref: H, props: R, _owner: o.current };
  }
  return We.Fragment = r, We.jsx = f, We.jsxs = f, We;
}
process.env.NODE_ENV === "production" ? wr.exports = bt() : wr.exports = gt();
var S = wr.exports, Ge = (e) => e.type === "checkbox", Oe = (e) => e instanceof Date, J = (e) => e == null;
const Hr = (e) => typeof e == "object";
var W = (e) => !J(e) && !Array.isArray(e) && Hr(e) && !Oe(e), Gr = (e) => W(e) && e.target ? Ge(e.target) ? e.target.checked : e.target.value : e, mt = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Jr = (e, i) => e.has(mt(i)), _t = (e) => {
  const i = e.constructor && e.constructor.prototype;
  return W(i) && i.hasOwnProperty("isPrototypeOf");
}, Fr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ie(e) {
  let i;
  const r = Array.isArray(e);
  if (e instanceof Date)
    i = new Date(e);
  else if (e instanceof Set)
    i = new Set(e);
  else if (!(Fr && (e instanceof Blob || e instanceof FileList)) && (r || W(e)))
    if (i = r ? [] : {}, !r && !_t(e))
      i = e;
    else
      for (const t in e)
        e.hasOwnProperty(t) && (i[t] = ie(e[t]));
  else
    return e;
  return i;
}
var Je = (e) => Array.isArray(e) ? e.filter(Boolean) : [], I = (e) => e === void 0, h = (e, i, r) => {
  if (!i || !W(e))
    return r;
  const t = Je(i.split(/[,[\].]+?/)).reduce((o, s) => J(o) ? o : o[s], e);
  return I(t) || t === e ? I(e[i]) ? r : e[i] : t;
}, te = (e) => typeof e == "boolean";
const nr = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, ae = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, de = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Kr = j.createContext(null), be = () => j.useContext(Kr), pt = (e) => {
  const { children: i, ...r } = e;
  return j.createElement(Kr.Provider, { value: r }, i);
};
var zr = (e, i, r, t = !0) => {
  const o = {
    defaultValues: i._defaultValues
  };
  for (const s in e)
    Object.defineProperty(o, s, {
      get: () => {
        const f = s;
        return i._proxyFormState[f] !== ae.all && (i._proxyFormState[f] = !t || ae.all), r && (r[f] = !0), e[f];
      }
    });
  return o;
}, re = (e) => W(e) && !Object.keys(e).length, Xr = (e, i, r, t) => {
  r(e);
  const { name: o, ...s } = e;
  return re(s) || Object.keys(s).length >= Object.keys(i).length || Object.keys(s).find((f) => i[f] === (!t || ae.all));
}, rr = (e) => Array.isArray(e) ? e : [e], Zr = (e, i, r) => !e || !i || e === i || rr(e).some((t) => t && (r ? t === i : t.startsWith(i) || i.startsWith(t)));
function Rr(e) {
  const i = j.useRef(e);
  i.current = e, j.useEffect(() => {
    const r = !e.disabled && i.current.subject && i.current.subject.subscribe({
      next: i.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function xt(e) {
  const i = be(), { control: r = i.control, disabled: t, name: o, exact: s } = e || {}, [f, m] = j.useState(r._formState), v = j.useRef(!0), F = j.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), E = j.useRef(o);
  return E.current = o, Rr({
    disabled: t,
    next: (R) => v.current && Zr(E.current, R.name, s) && Xr(R, F.current, r._updateFormState) && m({
      ...r._formState,
      ...R
    }),
    subject: r._subjects.state
  }), j.useEffect(() => (v.current = !0, F.current.isValid && r._updateValid(!0), () => {
    v.current = !1;
  }), [r]), zr(f, r, F.current, !1);
}
var se = (e) => typeof e == "string", Qr = (e, i, r, t, o) => se(e) ? (t && i.watch.add(e), h(r, e, o)) : Array.isArray(e) ? e.map((s) => (t && i.watch.add(s), h(r, s))) : (t && (i.watchAll = !0), r);
function Et(e) {
  const i = be(), { control: r = i.control, name: t, defaultValue: o, disabled: s, exact: f } = e || {}, m = j.useRef(t);
  m.current = t, Rr({
    disabled: s,
    subject: r._subjects.values,
    next: (E) => {
      Zr(m.current, E.name, f) && F(ie(Qr(m.current, r._names, E.values || r._formValues, !1, o)));
    }
  });
  const [v, F] = j.useState(r._getWatch(t, o));
  return j.useEffect(() => r._removeUnmounted()), v;
}
var Sr = (e) => /^\w*$/.test(e), et = (e) => Je(e.replace(/["|']|\]/g, "").split(/\.|\[/)), P = (e, i, r) => {
  let t = -1;
  const o = Sr(i) ? [i] : et(i), s = o.length, f = s - 1;
  for (; ++t < s; ) {
    const m = o[t];
    let v = r;
    if (t !== f) {
      const F = e[m];
      v = W(F) || Array.isArray(F) ? F : isNaN(+o[t + 1]) ? {} : [];
    }
    e[m] = v, e = e[m];
  }
  return e;
};
function wt(e) {
  const i = be(), { name: r, disabled: t, control: o = i.control, shouldUnregister: s } = e, f = Jr(o._names.array, r), m = Et({
    control: o,
    name: r,
    defaultValue: h(o._formValues, r, h(o._defaultValues, r, e.defaultValue)),
    exact: !0
  }), v = xt({
    control: o,
    name: r
  }), F = j.useRef(o.register(r, {
    ...e.rules,
    value: m,
    ...te(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return j.useEffect(() => {
    const E = o._options.shouldUnregister || s, R = (x, H) => {
      const Y = h(o._fields, x);
      Y && (Y._f.mount = H);
    };
    if (R(r, !0), E) {
      const x = ie(h(o._options.defaultValues, r));
      P(o._defaultValues, r, x), I(h(o._formValues, r)) && P(o._formValues, r, x);
    }
    return () => {
      (f ? E && !o._state.action : E) ? o.unregister(r) : R(r, !1);
    };
  }, [r, o, f, s]), j.useEffect(() => {
    h(o._fields, r) && o._updateDisabledField({
      disabled: t,
      fields: o._fields,
      name: r,
      value: h(o._fields, r)._f.value
    });
  }, [t, r, o]), {
    field: {
      name: r,
      value: m,
      ...te(t) || te(v.disabled) ? { disabled: v.disabled || t } : {},
      onChange: j.useCallback((E) => F.current.onChange({
        target: {
          value: Gr(E),
          name: r
        },
        type: nr.CHANGE
      }), [r]),
      onBlur: j.useCallback(() => F.current.onBlur({
        target: {
          value: h(o._formValues, r),
          name: r
        },
        type: nr.BLUR
      }), [r, o]),
      ref: (E) => {
        const R = h(o._fields, r);
        R && E && (R._f.ref = {
          focus: () => E.focus(),
          select: () => E.select(),
          setCustomValidity: (x) => E.setCustomValidity(x),
          reportValidity: () => E.reportValidity()
        });
      }
    },
    formState: v,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!h(v.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!h(v.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!h(v.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => h(v.errors, r)
      }
    })
  };
}
const Ft = (e) => e.render(wt(e));
var Rt = (e, i, r, t, o) => i ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [t]: o || !0
  }
} : {}, Ir = (e) => ({
  isOnSubmit: !e || e === ae.onSubmit,
  isOnBlur: e === ae.onBlur,
  isOnChange: e === ae.onChange,
  isOnAll: e === ae.all,
  isOnTouch: e === ae.onTouched
}), Lr = (e, i, r) => !r && (i.watchAll || i.watch.has(e) || [...i.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
const He = (e, i, r, t) => {
  for (const o of r || Object.keys(e)) {
    const s = h(e, o);
    if (s) {
      const { _f: f, ...m } = s;
      if (f) {
        if (f.refs && f.refs[0] && i(f.refs[0], o) && !t)
          break;
        if (f.ref && i(f.ref, f.name) && !t)
          break;
        He(m, i);
      } else
        W(m) && He(m, i);
    }
  }
};
var St = (e, i, r) => {
  const t = Je(h(e, r));
  return P(t, "root", i[r]), P(e, r, t), e;
}, Vr = (e) => e.type === "file", ge = (e) => typeof e == "function", ir = (e) => {
  if (!Fr)
    return !1;
  const i = e ? e.ownerDocument : 0;
  return e instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
}, tr = (e) => se(e), Ar = (e) => e.type === "radio", ar = (e) => e instanceof RegExp;
const Ur = {
  value: !1,
  isValid: !1
}, Mr = { value: !0, isValid: !0 };
var rt = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const i = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: i, isValid: !!i.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !I(e[0].attributes.value) ? I(e[0].value) || e[0].value === "" ? Mr : { value: e[0].value, isValid: !0 } : Mr
    ) : Ur;
  }
  return Ur;
};
const Br = {
  isValid: !1,
  value: null
};
var tt = (e) => Array.isArray(e) ? e.reduce((i, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : i, Br) : Br;
function Wr(e, i, r = "validate") {
  if (tr(e) || Array.isArray(e) && e.every(tr) || te(e) && !e)
    return {
      type: r,
      message: tr(e) ? e : "",
      ref: i
    };
}
var De = (e) => W(e) && !ar(e) ? e : {
  value: e,
  message: ""
}, Yr = async (e, i, r, t, o) => {
  const { ref: s, refs: f, required: m, maxLength: v, minLength: F, min: E, max: R, pattern: x, validate: H, name: Y, valueAsNumber: je, mount: Fe, disabled: oe } = e._f, p = h(i, Y);
  if (!Fe || oe)
    return {};
  const z = f ? f[0] : s, ne = (V) => {
    t && z.reportValidity && (z.setCustomValidity(te(V) ? "" : V || ""), z.reportValidity());
  }, U = {}, Re = Ar(s), me = Ge(s), _e = Re || me, le = (je || Vr(s)) && I(s.value) && I(p) || ir(s) && s.value === "" || p === "" || Array.isArray(p) && !p.length, X = Rt.bind(null, Y, r, U), Se = (V, A, T, N = de.maxLength, Z = de.minLength) => {
    const K = V ? A : T;
    U[Y] = {
      type: V ? N : Z,
      message: K,
      ref: s,
      ...X(V ? N : Z, K)
    };
  };
  if (o ? !Array.isArray(p) || !p.length : m && (!_e && (le || J(p)) || te(p) && !p || me && !rt(f).isValid || Re && !tt(f).isValid)) {
    const { value: V, message: A } = tr(m) ? { value: !!m, message: m } : De(m);
    if (V && (U[Y] = {
      type: de.required,
      message: A,
      ref: z,
      ...X(de.required, A)
    }, !r))
      return ne(A), U;
  }
  if (!le && (!J(E) || !J(R))) {
    let V, A;
    const T = De(R), N = De(E);
    if (!J(p) && !isNaN(p)) {
      const Z = s.valueAsNumber || p && +p;
      J(T.value) || (V = Z > T.value), J(N.value) || (A = Z < N.value);
    } else {
      const Z = s.valueAsDate || new Date(p), K = (pe) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + pe), ve = s.type == "time", ue = s.type == "week";
      se(T.value) && p && (V = ve ? K(p) > K(T.value) : ue ? p > T.value : Z > new Date(T.value)), se(N.value) && p && (A = ve ? K(p) < K(N.value) : ue ? p < N.value : Z < new Date(N.value));
    }
    if ((V || A) && (Se(!!V, T.message, N.message, de.max, de.min), !r))
      return ne(U[Y].message), U;
  }
  if ((v || F) && !le && (se(p) || o && Array.isArray(p))) {
    const V = De(v), A = De(F), T = !J(V.value) && p.length > +V.value, N = !J(A.value) && p.length < +A.value;
    if ((T || N) && (Se(T, V.message, A.message), !r))
      return ne(U[Y].message), U;
  }
  if (x && !le && se(p)) {
    const { value: V, message: A } = De(x);
    if (ar(V) && !p.match(V) && (U[Y] = {
      type: de.pattern,
      message: A,
      ref: s,
      ...X(de.pattern, A)
    }, !r))
      return ne(A), U;
  }
  if (H) {
    if (ge(H)) {
      const V = await H(p, i), A = Wr(V, z);
      if (A && (U[Y] = {
        ...A,
        ...X(de.validate, A.message)
      }, !r))
        return ne(A.message), U;
    } else if (W(H)) {
      let V = {};
      for (const A in H) {
        if (!re(V) && !r)
          break;
        const T = Wr(await H[A](p, i), z, A);
        T && (V = {
          ...T,
          ...X(A, T.message)
        }, ne(T.message), r && (U[Y] = V));
      }
      if (!re(V) && (U[Y] = {
        ref: z,
        ...V
      }, !r))
        return U;
    }
  }
  return ne(!0), U;
};
function Vt(e, i) {
  const r = i.slice(0, -1).length;
  let t = 0;
  for (; t < r; )
    e = I(e) ? t++ : e[i[t++]];
  return e;
}
function At(e) {
  for (const i in e)
    if (e.hasOwnProperty(i) && !I(e[i]))
      return !1;
  return !0;
}
function q(e, i) {
  const r = Array.isArray(i) ? i : Sr(i) ? [i] : et(i), t = r.length === 1 ? e : Vt(e, r), o = r.length - 1, s = r[o];
  return t && delete t[s], o !== 0 && (W(t) && re(t) || Array.isArray(t) && At(t)) && q(e, r.slice(0, -1)), e;
}
var _r = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (o) => {
      for (const s of e)
        s.next && s.next(o);
    },
    subscribe: (o) => (e.push(o), {
      unsubscribe: () => {
        e = e.filter((s) => s !== o);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, or = (e) => J(e) || !Hr(e);
function we(e, i) {
  if (or(e) || or(i))
    return e === i;
  if (Oe(e) && Oe(i))
    return e.getTime() === i.getTime();
  const r = Object.keys(e), t = Object.keys(i);
  if (r.length !== t.length)
    return !1;
  for (const o of r) {
    const s = e[o];
    if (!t.includes(o))
      return !1;
    if (o !== "ref") {
      const f = i[o];
      if (Oe(s) && Oe(f) || W(s) && W(f) || Array.isArray(s) && Array.isArray(f) ? !we(s, f) : s !== f)
        return !1;
    }
  }
  return !0;
}
var nt = (e) => e.type === "select-multiple", kt = (e) => Ar(e) || Ge(e), pr = (e) => ir(e) && e.isConnected, it = (e) => {
  for (const i in e)
    if (ge(e[i]))
      return !0;
  return !1;
};
function ur(e, i = {}) {
  const r = Array.isArray(e);
  if (W(e) || r)
    for (const t in e)
      Array.isArray(e[t]) || W(e[t]) && !it(e[t]) ? (i[t] = Array.isArray(e[t]) ? [] : {}, ur(e[t], i[t])) : J(e[t]) || (i[t] = !0);
  return i;
}
function at(e, i, r) {
  const t = Array.isArray(e);
  if (W(e) || t)
    for (const o in e)
      Array.isArray(e[o]) || W(e[o]) && !it(e[o]) ? I(i) || or(r[o]) ? r[o] = Array.isArray(e[o]) ? ur(e[o], []) : { ...ur(e[o]) } : at(e[o], J(i) ? {} : i[o], r[o]) : r[o] = !we(e[o], i[o]);
  return r;
}
var xr = (e, i) => at(e, i, ur(i)), ot = (e, { valueAsNumber: i, valueAsDate: r, setValueAs: t }) => I(e) ? e : i ? e === "" ? NaN : e && +e : r && se(e) ? new Date(e) : t ? t(e) : e;
function Er(e) {
  const i = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : i.disabled))
    return Vr(i) ? i.files : Ar(i) ? tt(e.refs).value : nt(i) ? [...i.selectedOptions].map(({ value: r }) => r) : Ge(i) ? rt(e.refs).value : ot(I(i.value) ? e.ref.value : i.value, e);
}
var Ct = (e, i, r, t) => {
  const o = {};
  for (const s of e) {
    const f = h(i, s);
    f && P(o, s, f._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: t
  };
}, Ye = (e) => I(e) ? e : ar(e) ? e.source : W(e) ? ar(e.value) ? e.value.source : e.value : e, Tt = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function qr(e, i, r) {
  const t = h(e, r);
  if (t || Sr(r))
    return {
      error: t,
      name: r
    };
  const o = r.split(".");
  for (; o.length; ) {
    const s = o.join("."), f = h(i, s), m = h(e, s);
    if (f && !Array.isArray(f) && r !== s)
      return { name: r };
    if (m && m.type)
      return {
        name: s,
        error: m
      };
    o.pop();
  }
  return {
    name: r
  };
}
var Dt = (e, i, r, t, o) => o.isOnAll ? !1 : !r && o.isOnTouch ? !(i || e) : (r ? t.isOnBlur : o.isOnBlur) ? !e : (r ? t.isOnChange : o.isOnChange) ? e : !0, Ot = (e, i) => !Je(h(e, i)).length && q(e, i);
const jt = {
  mode: ae.onSubmit,
  reValidateMode: ae.onChange,
  shouldFocusError: !0
};
function $t(e = {}, i) {
  let r = {
    ...jt,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: ge(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: !1
  }, o = {}, s = W(r.defaultValues) || W(r.values) ? ie(r.defaultValues || r.values) || {} : {}, f = r.shouldUnregister ? {} : ie(s), m = {
    action: !1,
    mount: !1,
    watch: !1
  }, v = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, F, E = 0;
  const R = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, x = {
    values: _r(),
    array: _r(),
    state: _r()
  }, H = e.resetOptions && e.resetOptions.keepDirtyValues, Y = Ir(r.mode), je = Ir(r.reValidateMode), Fe = r.criteriaMode === ae.all, oe = (a) => (u) => {
    clearTimeout(E), E = setTimeout(a, u);
  }, p = async (a) => {
    if (R.isValid || a) {
      const u = r.resolver ? re((await X()).errors) : await V(o, !0);
      u !== t.isValid && x.state.next({
        isValid: u
      });
    }
  }, z = (a) => R.isValidating && x.state.next({
    isValidating: a
  }), ne = (a, u = [], l, b, y = !0, d = !0) => {
    if (b && l) {
      if (m.action = !0, d && Array.isArray(h(o, a))) {
        const _ = l(h(o, a), b.argA, b.argB);
        y && P(o, a, _);
      }
      if (d && Array.isArray(h(t.errors, a))) {
        const _ = l(h(t.errors, a), b.argA, b.argB);
        y && P(t.errors, a, _), Ot(t.errors, a);
      }
      if (R.touchedFields && d && Array.isArray(h(t.touchedFields, a))) {
        const _ = l(h(t.touchedFields, a), b.argA, b.argB);
        y && P(t.touchedFields, a, _);
      }
      R.dirtyFields && (t.dirtyFields = xr(s, f)), x.state.next({
        name: a,
        isDirty: T(a, u),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      P(f, a, u);
  }, U = (a, u) => {
    P(t.errors, a, u), x.state.next({
      errors: t.errors
    });
  }, Re = (a) => {
    t.errors = a, x.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, me = (a, u, l, b) => {
    const y = h(o, a);
    if (y) {
      const d = h(f, a, I(l) ? h(s, a) : l);
      I(d) || b && b.defaultChecked || u ? P(f, a, u ? d : Er(y._f)) : K(a, d), m.mount && p();
    }
  }, _e = (a, u, l, b, y) => {
    let d = !1, _ = !1;
    const D = {
      name: a
    }, M = !!(h(o, a) && h(o, a)._f.disabled);
    if (!l || b) {
      R.isDirty && (_ = t.isDirty, t.isDirty = D.isDirty = T(), d = _ !== D.isDirty);
      const Q = M || we(h(s, a), u);
      _ = !!(!M && h(t.dirtyFields, a)), Q || M ? q(t.dirtyFields, a) : P(t.dirtyFields, a, !0), D.dirtyFields = t.dirtyFields, d = d || R.dirtyFields && _ !== !Q;
    }
    if (l) {
      const Q = h(t.touchedFields, a);
      Q || (P(t.touchedFields, a, l), D.touchedFields = t.touchedFields, d = d || R.touchedFields && Q !== l);
    }
    return d && y && x.state.next(D), d ? D : {};
  }, le = (a, u, l, b) => {
    const y = h(t.errors, a), d = R.isValid && te(u) && t.isValid !== u;
    if (e.delayError && l ? (F = oe(() => U(a, l)), F(e.delayError)) : (clearTimeout(E), F = null, l ? P(t.errors, a, l) : q(t.errors, a)), (l ? !we(y, l) : y) || !re(b) || d) {
      const _ = {
        ...b,
        ...d && te(u) ? { isValid: u } : {},
        errors: t.errors,
        name: a
      };
      t = {
        ...t,
        ..._
      }, x.state.next(_);
    }
    z(!1);
  }, X = async (a) => r.resolver(f, r.context, Ct(a || v.mount, o, r.criteriaMode, r.shouldUseNativeValidation)), Se = async (a) => {
    const { errors: u } = await X(a);
    if (a)
      for (const l of a) {
        const b = h(u, l);
        b ? P(t.errors, l, b) : q(t.errors, l);
      }
    else
      t.errors = u;
    return u;
  }, V = async (a, u, l = {
    valid: !0
  }) => {
    for (const b in a) {
      const y = a[b];
      if (y) {
        const { _f: d, ..._ } = y;
        if (d) {
          const D = v.array.has(d.name), M = await Yr(y, f, Fe, r.shouldUseNativeValidation && !u, D);
          if (M[d.name] && (l.valid = !1, u))
            break;
          !u && (h(M, d.name) ? D ? St(t.errors, M, d.name) : P(t.errors, d.name, M[d.name]) : q(t.errors, d.name));
        }
        _ && await V(_, u, l);
      }
    }
    return l.valid;
  }, A = () => {
    for (const a of v.unMount) {
      const u = h(o, a);
      u && (u._f.refs ? u._f.refs.every((l) => !pr(l)) : !pr(u._f.ref)) && ye(a);
    }
    v.unMount = /* @__PURE__ */ new Set();
  }, T = (a, u) => (a && u && P(f, a, u), !we(Pe(), s)), N = (a, u, l) => Qr(a, v, {
    ...m.mount ? f : I(u) ? s : se(a) ? { [a]: u } : u
  }, l, u), Z = (a) => Je(h(m.mount ? f : s, a, e.shouldUnregister ? h(s, a, []) : [])), K = (a, u, l = {}) => {
    const b = h(o, a);
    let y = u;
    if (b) {
      const d = b._f;
      d && (!d.disabled && P(f, a, ot(u, d)), y = ir(d.ref) && J(u) ? "" : u, nt(d.ref) ? [...d.ref.options].forEach((_) => _.selected = y.includes(_.value)) : d.refs ? Ge(d.ref) ? d.refs.length > 1 ? d.refs.forEach((_) => (!_.defaultChecked || !_.disabled) && (_.checked = Array.isArray(y) ? !!y.find((D) => D === _.value) : y === _.value)) : d.refs[0] && (d.refs[0].checked = !!y) : d.refs.forEach((_) => _.checked = _.value === y) : Vr(d.ref) ? d.ref.value = "" : (d.ref.value = y, d.ref.type || x.values.next({
        name: a,
        values: { ...f }
      })));
    }
    (l.shouldDirty || l.shouldTouch) && _e(a, y, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && Ve(a);
  }, ve = (a, u, l) => {
    for (const b in u) {
      const y = u[b], d = `${a}.${b}`, _ = h(o, d);
      (v.array.has(a) || !or(y) || _ && !_._f) && !Oe(y) ? ve(d, y, l) : K(d, y, l);
    }
  }, ue = (a, u, l = {}) => {
    const b = h(o, a), y = v.array.has(a), d = ie(u);
    P(f, a, d), y ? (x.array.next({
      name: a,
      values: { ...f }
    }), (R.isDirty || R.dirtyFields) && l.shouldDirty && x.state.next({
      name: a,
      dirtyFields: xr(s, f),
      isDirty: T(a, d)
    })) : b && !b._f && !J(d) ? ve(a, d, l) : K(a, d, l), Lr(a, v) && x.state.next({ ...t }), x.values.next({
      name: a,
      values: { ...f }
    }), !m.mount && i();
  }, pe = async (a) => {
    const u = a.target;
    let l = u.name, b = !0;
    const y = h(o, l), d = () => u.type ? Er(y._f) : Gr(a), _ = (D) => {
      b = Number.isNaN(D) || D === h(f, l, D);
    };
    if (y) {
      let D, M;
      const Q = d(), fe = a.type === nr.BLUR || a.type === nr.FOCUS_OUT, Le = !Tt(y._f) && !r.resolver && !h(t.errors, l) && !y._f.deps || Dt(fe, h(t.touchedFields, l), t.isSubmitted, je, Y), Ue = Lr(l, v, fe);
      P(f, l, Q), fe ? (y._f.onBlur && y._f.onBlur(a), F && F(0)) : y._f.onChange && y._f.onChange(a);
      const Me = _e(l, Q, fe, !1), yr = !re(Me) || Ue;
      if (!fe && x.values.next({
        name: l,
        type: a.type,
        values: { ...f }
      }), Le)
        return R.isValid && p(), yr && x.state.next({ name: l, ...Ue ? {} : Me });
      if (!fe && Ue && x.state.next({ ...t }), z(!0), r.resolver) {
        const { errors: Qe } = await X([l]);
        if (_(Q), b) {
          const hr = qr(t.errors, o, l), er = qr(Qe, o, hr.name || l);
          D = er.error, l = er.name, M = re(Qe);
        }
      } else
        D = (await Yr(y, f, Fe, r.shouldUseNativeValidation))[l], _(Q), b && (D ? M = !1 : R.isValid && (M = await V(o, !0)));
      b && (y._f.deps && Ve(y._f.deps), le(l, M, D, Me));
    }
  }, $e = (a, u) => {
    if (h(t.errors, u) && a.focus)
      return a.focus(), 1;
  }, Ve = async (a, u = {}) => {
    let l, b;
    const y = rr(a);
    if (z(!0), r.resolver) {
      const d = await Se(I(a) ? a : y);
      l = re(d), b = a ? !y.some((_) => h(d, _)) : l;
    } else
      a ? (b = (await Promise.all(y.map(async (d) => {
        const _ = h(o, d);
        return await V(_ && _._f ? { [d]: _ } : _);
      }))).every(Boolean), !(!b && !t.isValid) && p()) : b = l = await V(o);
    return x.state.next({
      ...!se(a) || R.isValid && l !== t.isValid ? {} : { name: a },
      ...r.resolver || !a ? { isValid: l } : {},
      errors: t.errors,
      isValidating: !1
    }), u.shouldFocus && !b && He(o, $e, a ? y : v.mount), b;
  }, Pe = (a) => {
    const u = {
      ...s,
      ...m.mount ? f : {}
    };
    return I(a) ? u : se(a) ? h(u, a) : a.map((l) => h(u, l));
  }, Ke = (a, u) => ({
    invalid: !!h((u || t).errors, a),
    isDirty: !!h((u || t).dirtyFields, a),
    isTouched: !!h((u || t).touchedFields, a),
    error: h((u || t).errors, a)
  }), fr = (a) => {
    a && rr(a).forEach((u) => q(t.errors, u)), x.state.next({
      errors: a ? t.errors : {}
    });
  }, Ae = (a, u, l) => {
    const b = (h(o, a, { _f: {} })._f || {}).ref;
    P(t.errors, a, {
      ...u,
      ref: b
    }), x.state.next({
      name: a,
      errors: t.errors,
      isValid: !1
    }), l && l.shouldFocus && b && b.focus && b.focus();
  }, Ne = (a, u) => ge(a) ? x.values.subscribe({
    next: (l) => a(N(void 0, u), l)
  }) : N(a, u, !0), ye = (a, u = {}) => {
    for (const l of a ? rr(a) : v.mount)
      v.mount.delete(l), v.array.delete(l), u.keepValue || (q(o, l), q(f, l)), !u.keepError && q(t.errors, l), !u.keepDirty && q(t.dirtyFields, l), !u.keepTouched && q(t.touchedFields, l), !r.shouldUnregister && !u.keepDefaultValue && q(s, l);
    x.values.next({
      values: { ...f }
    }), x.state.next({
      ...t,
      ...u.keepDirty ? { isDirty: T() } : {}
    }), !u.keepIsValid && p();
  }, ke = ({ disabled: a, name: u, field: l, fields: b, value: y }) => {
    if (te(a)) {
      const d = a ? void 0 : I(y) ? Er(l ? l._f : h(b, u)._f) : y;
      P(f, u, d), _e(u, d, !1, !1, !0);
    }
  }, he = (a, u = {}) => {
    let l = h(o, a);
    const b = te(u.disabled);
    return P(o, a, {
      ...l || {},
      _f: {
        ...l && l._f ? l._f : { ref: { name: a } },
        name: a,
        mount: !0,
        ...u
      }
    }), v.mount.add(a), l ? ke({
      field: l,
      disabled: u.disabled,
      name: a,
      value: u.value
    }) : me(a, !0, u.value), {
      ...b ? { disabled: u.disabled } : {},
      ...r.progressive ? {
        required: !!u.required,
        min: Ye(u.min),
        max: Ye(u.max),
        minLength: Ye(u.minLength),
        maxLength: Ye(u.maxLength),
        pattern: Ye(u.pattern)
      } : {},
      name: a,
      onChange: pe,
      onBlur: pe,
      ref: (y) => {
        if (y) {
          he(a, u), l = h(o, a);
          const d = I(y.value) && y.querySelectorAll && y.querySelectorAll("input,select,textarea")[0] || y, _ = kt(d), D = l._f.refs || [];
          if (_ ? D.find((M) => M === d) : d === l._f.ref)
            return;
          P(o, a, {
            _f: {
              ...l._f,
              ..._ ? {
                refs: [
                  ...D.filter(pr),
                  d,
                  ...Array.isArray(h(s, a)) ? [{}] : []
                ],
                ref: { type: d.type, name: a }
              } : { ref: d }
            }
          }), me(a, !1, void 0, d);
        } else
          l = h(o, a, {}), l._f && (l._f.mount = !1), (r.shouldUnregister || u.shouldUnregister) && !(Jr(v.array, a) && m.action) && v.unMount.add(a);
      }
    };
  }, ze = () => r.shouldFocusError && He(o, $e, v.mount), Xe = (a) => {
    te(a) && (x.state.next({ disabled: a }), He(o, (u, l) => {
      let b = a;
      const y = h(o, l);
      y && te(y._f.disabled) && (b || (b = y._f.disabled)), u.disabled = b;
    }, 0, !1));
  }, Ze = (a, u) => async (l) => {
    l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
    let b = ie(f);
    if (x.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: y, values: d } = await X();
      t.errors = y, b = d;
    } else
      await V(o);
    q(t.errors, "root"), re(t.errors) ? (x.state.next({
      errors: {}
    }), await a(b, l)) : (u && await u({ ...t.errors }, l), ze(), setTimeout(ze)), x.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: re(t.errors),
      submitCount: t.submitCount + 1,
      errors: t.errors
    });
  }, cr = (a, u = {}) => {
    h(o, a) && (I(u.defaultValue) ? ue(a, h(s, a)) : (ue(a, u.defaultValue), P(s, a, u.defaultValue)), u.keepTouched || q(t.touchedFields, a), u.keepDirty || (q(t.dirtyFields, a), t.isDirty = u.defaultValue ? T(a, h(s, a)) : T()), u.keepError || (q(t.errors, a), R.isValid && p()), x.state.next({ ...t }));
  }, xe = (a, u = {}) => {
    const l = a ? ie(a) : s, b = ie(l), y = a && !re(a) ? b : s;
    if (u.keepDefaultValues || (s = l), !u.keepValues) {
      if (u.keepDirtyValues || H)
        for (const d of v.mount)
          h(t.dirtyFields, d) ? P(y, d, h(f, d)) : ue(d, h(y, d));
      else {
        if (Fr && I(a))
          for (const d of v.mount) {
            const _ = h(o, d);
            if (_ && _._f) {
              const D = Array.isArray(_._f.refs) ? _._f.refs[0] : _._f.ref;
              if (ir(D)) {
                const M = D.closest("form");
                if (M) {
                  M.reset();
                  break;
                }
              }
            }
          }
        o = {};
      }
      f = e.shouldUnregister ? u.keepDefaultValues ? ie(s) : {} : ie(y), x.array.next({
        values: { ...y }
      }), x.values.next({
        values: { ...y }
      });
    }
    v = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !m.mount && i(), m.mount = !R.isValid || !!u.keepIsValid, m.watch = !!e.shouldUnregister, x.state.next({
      submitCount: u.keepSubmitCount ? t.submitCount : 0,
      isDirty: u.keepDirty ? t.isDirty : !!(u.keepDefaultValues && !we(a, s)),
      isSubmitted: u.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: u.keepDirtyValues ? t.dirtyFields : u.keepDefaultValues && a ? xr(s, a) : {},
      touchedFields: u.keepTouched ? t.touchedFields : {},
      errors: u.keepErrors ? t.errors : {},
      isSubmitSuccessful: u.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Ee = (a, u) => xe(ge(a) ? a(f) : a, u);
  return {
    control: {
      register: he,
      unregister: ye,
      getFieldState: Ke,
      handleSubmit: Ze,
      setError: Ae,
      _executeSchema: X,
      _getWatch: N,
      _getDirty: T,
      _updateValid: p,
      _removeUnmounted: A,
      _updateFieldArray: ne,
      _updateDisabledField: ke,
      _getFieldArray: Z,
      _reset: xe,
      _resetDefaultValues: () => ge(r.defaultValues) && r.defaultValues().then((a) => {
        Ee(a, r.resetOptions), x.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (a) => {
        t = {
          ...t,
          ...a
        };
      },
      _disableForm: Xe,
      _subjects: x,
      _proxyFormState: R,
      _setErrors: Re,
      get _fields() {
        return o;
      },
      get _formValues() {
        return f;
      },
      get _state() {
        return m;
      },
      set _state(a) {
        m = a;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return v;
      },
      set _names(a) {
        v = a;
      },
      get _formState() {
        return t;
      },
      set _formState(a) {
        t = a;
      },
      get _options() {
        return r;
      },
      set _options(a) {
        r = {
          ...r,
          ...a
        };
      }
    },
    trigger: Ve,
    register: he,
    handleSubmit: Ze,
    watch: Ne,
    setValue: ue,
    getValues: Pe,
    reset: Ee,
    resetField: cr,
    clearErrors: fr,
    unregister: ye,
    setError: Ae,
    setFocus: (a, u = {}) => {
      const l = h(o, a), b = l && l._f;
      if (b) {
        const y = b.refs ? b.refs[0] : b.ref;
        y.focus && (y.focus(), u.shouldSelect && y.select());
      }
    },
    getFieldState: Ke
  };
}
function Pt(e = {}) {
  const i = j.useRef(), r = j.useRef(), [t, o] = j.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: ge(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: !1,
    defaultValues: ge(e.defaultValues) ? void 0 : e.defaultValues
  });
  i.current || (i.current = {
    ...$t(e, () => o((f) => ({ ...f }))),
    formState: t
  });
  const s = i.current.control;
  return s._options = e, Rr({
    subject: s._subjects.state,
    next: (f) => {
      Xr(f, s._proxyFormState, s._updateFormState, !0) && o({ ...s._formState });
    }
  }), j.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]), j.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const f = s._getDirty();
      f !== t.isDirty && s._subjects.state.next({
        isDirty: f
      });
    }
  }, [s, t.isDirty]), j.useEffect(() => {
    e.values && !we(e.values, r.current) ? (s._reset(e.values, s._options.resetOptions), r.current = e.values, o((f) => ({ ...f }))) : s._resetDefaultValues();
  }, [e.values, s]), j.useEffect(() => {
    e.errors && s._setErrors(e.errors);
  }, [e.errors, s]), j.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), i.current.formState = zr(t, s), i.current;
}
const lr = ({ error: e, id: i, className: r }) => {
  const t = typeof e == "string" ? e : e == null ? void 0 : e.message;
  return t ? /* @__PURE__ */ S.jsx("span", { id: i, className: `error ${r || ""}`, children: t }) : null;
}, qe = ({
  type: e,
  name: i,
  label: r,
  classes: t,
  inputProps: o,
  ...s
}) => {
  const {
    register: f,
    formState: { errors: m }
  } = be(), v = `form-${i}`;
  return /* @__PURE__ */ S.jsxs("div", { className: `container ${(t == null ? void 0 : t.container) ?? ""}`, children: [
    r && /* @__PURE__ */ S.jsx("label", { htmlFor: v, className: `input-label ${(t == null ? void 0 : t.label) ?? ""}`, children: r }),
    /* @__PURE__ */ S.jsxs("div", { className: `input-container ${(t == null ? void 0 : t.inputContainer) ?? ""}`, children: [
      o != null && o.startAdornment ? o.startAdornment : null,
      /* @__PURE__ */ S.jsx(
        "input",
        {
          id: v,
          className: `input ${t == null ? void 0 : t.input}`,
          ...f(i),
          type: e,
          ...s,
          ...o,
          "aria-invalid": m[i] ? "true" : "false",
          "aria-describedby": `${v}-error`
        }
      ),
      o != null && o.endAdornment ? o.endAdornment : null
    ] }),
    /* @__PURE__ */ S.jsx(
      lr,
      {
        id: `${v}-error`,
        className: t == null ? void 0 : t.error,
        error: m == null ? void 0 : m[i]
      }
    )
  ] });
}, Nt = ({
  name: e,
  options: i,
  classes: r,
  inputProps: t,
  label: o,
  ...s
}) => {
  const {
    register: f,
    formState: { errors: m }
  } = be(), v = `form-${e}`;
  return /* @__PURE__ */ S.jsxs("div", { className: `container ${(r == null ? void 0 : r.container) ?? ""}`, children: [
    o && /* @__PURE__ */ S.jsx(
      "label",
      {
        htmlFor: v,
        className: `checkbox-label ${(r == null ? void 0 : r.label) ?? ""}`,
        children: o
      }
    ),
    i.map((F, E) => /* @__PURE__ */ S.jsxs("div", { className: `checkbox-container ${r == null ? void 0 : r.container}`, children: [
      /* @__PURE__ */ S.jsx(
        "input",
        {
          id: `${v}-${E}`,
          ...f(e),
          ...s,
          ...t,
          type: "checkbox",
          value: F.value,
          className: `checkbox-input ${(r == null ? void 0 : r.checkbox) ?? ""}`
        }
      ),
      /* @__PURE__ */ S.jsx(
        "label",
        {
          htmlFor: `${v}-${E}`,
          className: `checkbox-label ${r == null ? void 0 : r.label}`,
          children: F.label
        }
      )
    ] }, E)),
    /* @__PURE__ */ S.jsx(
      lr,
      {
        id: `${v}-error`,
        className: r == null ? void 0 : r.error,
        error: m[e]
      }
    )
  ] });
}, It = ({
  name: e,
  options: i,
  classes: r,
  inputProps: t,
  label: o,
  ...s
}) => {
  const {
    register: f,
    formState: { errors: m }
  } = be(), v = `form-${e}`;
  return /* @__PURE__ */ S.jsxs("div", { className: `container ${(r == null ? void 0 : r.container) ?? ""}`, children: [
    o && /* @__PURE__ */ S.jsx(
      "label",
      {
        htmlFor: v,
        className: `radio-label ${(r == null ? void 0 : r.rootLabel) ?? ""}`,
        children: o
      }
    ),
    i.map((F, E) => /* @__PURE__ */ S.jsxs(
      "div",
      {
        className: `radio-container ${(r == null ? void 0 : r.container) ?? ""}`,
        children: [
          /* @__PURE__ */ S.jsx(
            "input",
            {
              id: `${v}-${E}`,
              ...f(e),
              ...s,
              type: "radio",
              ...t,
              value: F.value,
              className: `radio-input ${(r == null ? void 0 : r.radio) ?? ""}`
            }
          ),
          /* @__PURE__ */ S.jsx(
            "label",
            {
              htmlFor: `${v}-${E}`,
              className: `radio-label ${r == null ? void 0 : r.label}`,
              children: F.label
            }
          )
        ]
      },
      E
    )),
    /* @__PURE__ */ S.jsx(
      lr,
      {
        id: `${v}-error`,
        className: r == null ? void 0 : r.error,
        error: m[e]
      }
    )
  ] });
}, Lt = ({
  name: e,
  options: i,
  label: r,
  classes: t,
  inputProps: o,
  ...s
}) => {
  const {
    register: f,
    formState: { errors: m }
  } = be(), v = `form-${e}`;
  return /* @__PURE__ */ S.jsxs("div", { className: `container ${(t == null ? void 0 : t.container) ?? ""}`, children: [
    r && /* @__PURE__ */ S.jsx("label", { htmlFor: v, className: `select-input ${(t == null ? void 0 : t.label) ?? ""}`, children: r }),
    /* @__PURE__ */ S.jsx(
      "select",
      {
        id: v,
        ...f(e),
        className: `select-input ${t == null ? void 0 : t.select}`,
        ...s,
        ...o,
        "aria-invalid": m[e] ? "true" : "false",
        "aria-describedby": `${v}-error`,
        children: i.map((F, E) => /* @__PURE__ */ S.jsx(
          "option",
          {
            value: F.value,
            className: `select-option ${(t == null ? void 0 : t.option) ?? ""}`,
            children: F.label
          },
          E
        ))
      }
    ),
    /* @__PURE__ */ S.jsx(
      lr,
      {
        id: `${v}-error`,
        className: t == null ? void 0 : t.error,
        error: m[e]
      }
    )
  ] });
}, Ut = (e) => {
  const { text: i, className: r } = e;
  return /* @__PURE__ */ S.jsx(S.Fragment, { children: typeof i == "string" ? /* @__PURE__ */ S.jsx(
    "div",
    {
      className: `pain-text ${r}`,
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : /* @__PURE__ */ S.jsx(S.Fragment, { children: i }) });
}, sr = {
  text: qe,
  password: qe,
  telephone: qe,
  email: qe,
  select: Lt,
  radio: It,
  checkbox: Nt,
  plainText: Ut
}, Mt = (e, i) => {
  e in sr ? console.warn(
    `Input type "${e}" is already registered. Overriding existing component.`
  ) : console.log(`Registering new input type "${e}".`), sr[e] = i;
}, Bt = (e) => e in sr ? sr[e] : qe, Wt = ({ type: e, ...i }) => {
  const r = Bt(e);
  return /* @__PURE__ */ S.jsx(r, { type: e, ...i });
}, Yt = (e = []) => {
  const i = {};
  return e.forEach((r) => {
    r != null && r.defaultValue && (i[r.name] = r == null ? void 0 : r.defaultValue);
  }), i;
}, qt = (e, i) => {
  var t;
  const r = { ...i };
  return (t = i.conditions) == null || t.forEach((o) => {
    const s = o.when;
    (typeof s == "function" ? s(e) : !1) && Object.assign(r, o.then(i));
  }), r;
}, Kt = ({
  fields: e,
  onSubmit: i,
  validation: r,
  classes: t
}) => {
  const o = Yt(
    e
  ), s = Pt({
    resolver: r,
    defaultValues: o
  }), f = s.watch();
  return /* @__PURE__ */ S.jsx(pt, { ...s, children: /* @__PURE__ */ S.jsxs(
    "form",
    {
      onSubmit: s.handleSubmit(i),
      className: t == null ? void 0 : t.formContainer,
      children: [
        e.map((m, v) => {
          const {
            type: F,
            hide: E = !1,
            ...R
          } = qt(f, m), x = F;
          return E ? null : /* @__PURE__ */ S.jsx(Wt, { ...R, type: x }, v);
        }),
        /* @__PURE__ */ S.jsx("button", { type: "submit", className: t == null ? void 0 : t.submitButton, children: "Submit" })
      ]
    }
  ) });
}, Ht = ({
  name: e,
  classes: i,
  label: r,
  inputProps: t
}) => {
  const { control: o } = be(), s = `switch-${e}`;
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      className: `d-switch-container switch-container ${(i == null ? void 0 : i.switchContainer) ?? ""}`,
      children: [
        r && /* @__PURE__ */ S.jsx(
          "label",
          {
            htmlFor: s,
            className: `d-switch-label switch-root-label ${(i == null ? void 0 : i.label) ?? ""}`,
            children: r
          }
        ),
        /* @__PURE__ */ S.jsx(
          Ft,
          {
            name: e,
            control: o,
            render: ({ field: { onChange: f, onBlur: m, value: v = !1, ref: F } }) => /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  id: s,
                  ...t,
                  value: v,
                  onChange: f,
                  onBlur: m,
                  ref: F,
                  className: `d-switch-input switch-input ${(i == null ? void 0 : i.input) ?? ""}`,
                  checked: v === !0,
                  type: "checkbox",
                  "aria-checked": v ? "true" : "false"
                }
              ),
              /* @__PURE__ */ S.jsx(
                "label",
                {
                  htmlFor: s,
                  className: `d-switch switch-label ${(i == null ? void 0 : i.switch) ?? ""} ${(i == null ? void 0 : i.activeSwitch) ?? ""}`,
                  children: /* @__PURE__ */ S.jsx(
                    "span",
                    {
                      role: "button",
                      className: `d-switch-button switch-button ${(i == null ? void 0 : i.button) ?? ""} ${(i == null ? void 0 : i.activeButton) ?? ""}`
                    }
                  )
                }
              )
            ] })
          }
        )
      ]
    }
  );
};
Mt("switch", Ht);
export {
  Kt as ReactForm,
  Mt as addInputType,
  Bt as getInputComponent
};
