import "./index.css";
import j, { useEffect as ht } from "react";
var xr = { exports: {} }, Be = {};
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
    var e = j, a = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), b = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), Y = Symbol.iterator, je = "@@iterator";
    function Re(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = Y && t[Y] || t[je];
      return typeof c == "function" ? c : null;
    }
    var se = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(t) {
      {
        for (var c = arguments.length, g = new Array(c > 1 ? c - 1 : 0), E = 1; E < c; E++)
          g[E - 1] = arguments[E];
        z("error", t, g);
      }
    }
    function z(t, c, g) {
      {
        var E = se.ReactDebugCurrentFrame, O = E.getStackAddendum();
        O !== "" && (c += "%s", g = g.concat([O]));
        var P = g.map(function(k) {
          return String(k);
        });
        P.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, P);
      }
    }
    var ne = !1, U = !1, Se = !1, _e = !1, me = !1, le;
    le = Symbol.for("react.module.reference");
    function X(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === o || me || t === s || t === S || t === w || _e || t === H || ne || U || Se || typeof t == "object" && t !== null && (t.$$typeof === x || t.$$typeof === R || t.$$typeof === f || t.$$typeof === b || t.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === le || t.getModuleId !== void 0));
    }
    function Fe(t, c, g) {
      var E = t.displayName;
      if (E)
        return E;
      var O = c.displayName || c.name || "";
      return O !== "" ? g + "(" + O + ")" : g;
    }
    function F(t) {
      return t.displayName || "Context";
    }
    function V(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case S:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case b:
            var c = t;
            return F(c) + ".Consumer";
          case f:
            var g = t;
            return F(g._context) + ".Provider";
          case d:
            return Fe(t, t.render, "ForwardRef");
          case R:
            var E = t.displayName || null;
            return E !== null ? E : V(t.type) || "Memo";
          case x: {
            var O = t, P = O._payload, k = O._init;
            try {
              return V(k(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, I = 0, Z, K, ve, ue, pe, Pe, Ve;
    function Ne() {
    }
    Ne.__reactDisabledLog = !0;
    function Ke() {
      {
        if (I === 0) {
          Z = console.log, K = console.info, ve = console.warn, ue = console.error, pe = console.group, Pe = console.groupCollapsed, Ve = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        I++;
      }
    }
    function or() {
      {
        if (I--, I === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, t, {
              value: Z
            }),
            info: D({}, t, {
              value: K
            }),
            warn: D({}, t, {
              value: ve
            }),
            error: D({}, t, {
              value: ue
            }),
            group: D({}, t, {
              value: pe
            }),
            groupCollapsed: D({}, t, {
              value: Pe
            }),
            groupEnd: D({}, t, {
              value: Ve
            })
          });
        }
        I < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ae = se.ReactCurrentDispatcher, Ie;
    function ye(t, c, g) {
      {
        if (Ie === void 0)
          try {
            throw Error();
          } catch (O) {
            var E = O.stack.trim().match(/\n( *(at )?)/);
            Ie = E && E[1] || "";
          }
        return `
` + Ie + t;
      }
    }
    var ke = !1, he;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      he = new ze();
    }
    function Xe(t, c) {
      if (!t || ke)
        return "";
      {
        var g = he.get(t);
        if (g !== void 0)
          return g;
      }
      var E;
      ke = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = Ae.current, Ae.current = null, Ke();
      try {
        if (c) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (ce) {
              E = ce;
            }
            Reflect.construct(t, [], k);
          } else {
            try {
              k.call();
            } catch (ce) {
              E = ce;
            }
            t.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            E = ce;
          }
          t();
        }
      } catch (ce) {
        if (ce && E && typeof ce.stack == "string") {
          for (var A = ce.stack.split(`
`), J = E.stack.split(`
`), $ = A.length - 1, B = J.length - 1; $ >= 1 && B >= 0 && A[$] !== J[B]; )
            B--;
          for (; $ >= 1 && B >= 0; $--, B--)
            if (A[$] !== J[B]) {
              if ($ !== 1 || B !== 1)
                do
                  if ($--, B--, B < 0 || A[$] !== J[B]) {
                    var ee = `
` + A[$].replace(" at new ", " at ");
                    return t.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", t.displayName)), typeof t == "function" && he.set(t, ee), ee;
                  }
                while ($ >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        ke = !1, Ae.current = P, or(), Error.prepareStackTrace = O;
      }
      var De = t ? t.displayName || t.name : "", jr = De ? ye(De) : "";
      return typeof t == "function" && he.set(t, jr), jr;
    }
    function Ze(t, c, g) {
      return Xe(t, !1);
    }
    function lr(t) {
      var c = t.prototype;
      return !!(c && c.isReactComponent);
    }
    function xe(t, c, g) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Xe(t, lr(t));
      if (typeof t == "string")
        return ye(t);
      switch (t) {
        case S:
          return ye("Suspense");
        case w:
          return ye("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case d:
            return Ze(t.render);
          case R:
            return xe(t.type, c, g);
          case x: {
            var E = t, O = E._payload, P = E._init;
            try {
              return xe(P(O), c, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, fr = {}, cr = se.ReactDebugCurrentFrame;
    function Le(t) {
      if (t) {
        var c = t._owner, g = xe(t.type, t._source, c ? c.type : null);
        cr.setExtraStackFrame(g);
      } else
        cr.setExtraStackFrame(null);
    }
    function i(t, c, g, E, O) {
      {
        var P = Function.call.bind(Ee);
        for (var k in t)
          if (P(t, k)) {
            var A = void 0;
            try {
              if (typeof t[k] != "function") {
                var J = Error((E || "React class") + ": " + g + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              A = t[k](c, k, E, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              A = $;
            }
            A && !(A instanceof Error) && (Le(O), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", g, k, typeof A), Le(null)), A instanceof Error && !(A.message in fr) && (fr[A.message] = !0, Le(O), p("Failed %s type: %s", g, A.message), Le(null));
          }
      }
    }
    var u = Array.isArray;
    function l(t) {
      return u(t);
    }
    function _(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, g = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return g;
      }
    }
    function y(t) {
      try {
        return v(t), !1;
      } catch {
        return !0;
      }
    }
    function v(t) {
      return "" + t;
    }
    function m(t) {
      if (y(t))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _(t)), v(t);
    }
    var T = se.ReactCurrentOwner, M = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Q, fe, $e;
    $e = {};
    function Ue(t) {
      if (Ee.call(t, "ref")) {
        var c = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Me(t) {
      if (Ee.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function dr(t, c) {
      if (typeof t.ref == "string" && T.current && c && T.current.stateNode !== c) {
        var g = V(T.current.type);
        $e[g] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(T.current.type), t.ref), $e[g] = !0);
      }
    }
    function Qe(t, c) {
      {
        var g = function() {
          Q || (Q = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function vr(t, c) {
      {
        var g = function() {
          fe || (fe = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var er = function(t, c, g, E, O, P, k) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: g,
        props: k,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function st(t, c, g, E, O) {
      {
        var P, k = {}, A = null, J = null;
        g !== void 0 && (m(g), A = "" + g), Me(c) && (m(c.key), A = "" + c.key), Ue(c) && (J = c.ref, dr(c, O));
        for (P in c)
          Ee.call(c, P) && !M.hasOwnProperty(P) && (k[P] = c[P]);
        if (t && t.defaultProps) {
          var $ = t.defaultProps;
          for (P in $)
            k[P] === void 0 && (k[P] = $[P]);
        }
        if (A || J) {
          var B = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          A && Qe(k, B), J && vr(k, B);
        }
        return er(t, A, J, O, E, T.current, k);
      }
    }
    var yr = se.ReactCurrentOwner, Ar = se.ReactDebugCurrentFrame;
    function Ce(t) {
      if (t) {
        var c = t._owner, g = xe(t.type, t._source, c ? c.type : null);
        Ar.setExtraStackFrame(g);
      } else
        Ar.setExtraStackFrame(null);
    }
    var hr;
    hr = !1;
    function gr(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function kr() {
      {
        if (yr.current) {
          var t = V(yr.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ut(t) {
      {
        if (t !== void 0) {
          var c = t.fileName.replace(/^.*[\\\/]/, ""), g = t.lineNumber;
          return `

Check your code at ` + c + ":" + g + ".";
        }
        return "";
      }
    }
    var Cr = {};
    function ot(t) {
      {
        var c = kr();
        if (!c) {
          var g = typeof t == "string" ? t : t.displayName || t.name;
          g && (c = `

Check the top-level render call using <` + g + ">.");
        }
        return c;
      }
    }
    function Dr(t, c) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var g = ot(c);
        if (Cr[g])
          return;
        Cr[g] = !0;
        var E = "";
        t && t._owner && t._owner !== yr.current && (E = " It was passed a child from " + V(t._owner.type) + "."), Ce(t), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, E), Ce(null);
      }
    }
    function Tr(t, c) {
      {
        if (typeof t != "object")
          return;
        if (l(t))
          for (var g = 0; g < t.length; g++) {
            var E = t[g];
            gr(E) && Dr(E, c);
          }
        else if (gr(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var O = Re(t);
          if (typeof O == "function" && O !== t.entries)
            for (var P = O.call(t), k; !(k = P.next()).done; )
              gr(k.value) && Dr(k.value, c);
        }
      }
    }
    function lt(t) {
      {
        var c = t.type;
        if (c == null || typeof c == "string")
          return;
        var g;
        if (typeof c == "function")
          g = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === R))
          g = c.propTypes;
        else
          return;
        if (g) {
          var E = V(c);
          i(g, t.props, "prop", E, t);
        } else if (c.PropTypes !== void 0 && !hr) {
          hr = !0;
          var O = V(c);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ft(t) {
      {
        for (var c = Object.keys(t.props), g = 0; g < c.length; g++) {
          var E = c[g];
          if (E !== "children" && E !== "key") {
            Ce(t), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), Ce(null);
            break;
          }
        }
        t.ref !== null && (Ce(t), p("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    function Or(t, c, g, E, O, P) {
      {
        var k = X(t);
        if (!k) {
          var A = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = ut(O);
          J ? A += J : A += kr();
          var $;
          t === null ? $ = "null" : l(t) ? $ = "array" : t !== void 0 && t.$$typeof === a ? ($ = "<" + (V(t.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof t, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, A);
        }
        var B = st(t, c, g, O, P);
        if (B == null)
          return B;
        if (k) {
          var ee = c.children;
          if (ee !== void 0)
            if (E)
              if (l(ee)) {
                for (var De = 0; De < ee.length; De++)
                  Tr(ee[De], t);
                Object.freeze && Object.freeze(ee);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tr(ee, t);
        }
        return t === n ? ft(B) : lt(B), B;
      }
    }
    function ct(t, c, g) {
      return Or(t, c, g, !0);
    }
    function dt(t, c, g) {
      return Or(t, c, g, !1);
    }
    var vt = dt, yt = ct;
    Be.Fragment = n, Be.jsx = vt, Be.jsxs = yt;
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
  var e = j, a = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(b, d, S) {
    var w, R = {}, x = null, H = null;
    S !== void 0 && (x = "" + S), d.key !== void 0 && (x = "" + d.key), d.ref !== void 0 && (H = d.ref);
    for (w in d)
      n.call(d, w) && !o.hasOwnProperty(w) && (R[w] = d[w]);
    if (b && b.defaultProps)
      for (w in d = b.defaultProps, d)
        R[w] === void 0 && (R[w] = d[w]);
    return { $$typeof: a, type: b, key: x, ref: H, props: R, _owner: s.current };
  }
  return We.Fragment = r, We.jsx = f, We.jsxs = f, We;
}
process.env.NODE_ENV === "production" ? xr.exports = bt() : xr.exports = gt();
var C = xr.exports, Je = (e) => e.type === "checkbox", Oe = (e) => e instanceof Date, G = (e) => e == null;
const qr = (e) => typeof e == "object";
var W = (e) => !G(e) && !Array.isArray(e) && qr(e) && !Oe(e), Hr = (e) => W(e) && e.target ? Je(e.target) ? e.target.checked : e.target.value : e, _t = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Jr = (e, a) => e.has(_t(a)), mt = (e) => {
  const a = e.constructor && e.constructor.prototype;
  return W(a) && a.hasOwnProperty("isPrototypeOf");
}, wr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ie(e) {
  let a;
  const r = Array.isArray(e);
  if (e instanceof Date)
    a = new Date(e);
  else if (e instanceof Set)
    a = new Set(e);
  else if (!(wr && (e instanceof Blob || e instanceof FileList)) && (r || W(e)))
    if (a = r ? [] : {}, !r && !mt(e))
      a = e;
    else
      for (const n in e)
        e.hasOwnProperty(n) && (a[n] = ie(e[n]));
  else
    return e;
  return a;
}
var Ge = (e) => Array.isArray(e) ? e.filter(Boolean) : [], L = (e) => e === void 0, h = (e, a, r) => {
  if (!a || !W(e))
    return r;
  const n = Ge(a.split(/[,[\].]+?/)).reduce((s, o) => G(s) ? s : s[o], e);
  return L(n) || n === e ? L(e[a]) ? r : e[a] : n;
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
}, Gr = j.createContext(null), be = () => j.useContext(Gr), pt = (e) => {
  const { children: a, ...r } = e;
  return j.createElement(Gr.Provider, { value: r }, a);
};
var Kr = (e, a, r, n = !0) => {
  const s = {
    defaultValues: a._defaultValues
  };
  for (const o in e)
    Object.defineProperty(s, o, {
      get: () => {
        const f = o;
        return a._proxyFormState[f] !== ae.all && (a._proxyFormState[f] = !n || ae.all), r && (r[f] = !0), e[f];
      }
    });
  return s;
}, re = (e) => W(e) && !Object.keys(e).length, zr = (e, a, r, n) => {
  r(e);
  const { name: s, ...o } = e;
  return re(o) || Object.keys(o).length >= Object.keys(a).length || Object.keys(o).find((f) => a[f] === (!n || ae.all));
}, rr = (e) => Array.isArray(e) ? e : [e], Xr = (e, a, r) => !e || !a || e === a || rr(e).some((n) => n && (r ? n === a : n.startsWith(a) || a.startsWith(n)));
function Rr(e) {
  const a = j.useRef(e);
  a.current = e, j.useEffect(() => {
    const r = !e.disabled && a.current.subject && a.current.subject.subscribe({
      next: a.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function xt(e) {
  const a = be(), { control: r = a.control, disabled: n, name: s, exact: o } = e || {}, [f, b] = j.useState(r._formState), d = j.useRef(!0), S = j.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), w = j.useRef(s);
  return w.current = s, Rr({
    disabled: n,
    next: (R) => d.current && Xr(w.current, R.name, o) && zr(R, S.current, r._updateFormState) && b({
      ...r._formState,
      ...R
    }),
    subject: r._subjects.state
  }), j.useEffect(() => (d.current = !0, S.current.isValid && r._updateValid(!0), () => {
    d.current = !1;
  }), [r]), Kr(f, r, S.current, !1);
}
var oe = (e) => typeof e == "string", Zr = (e, a, r, n, s) => oe(e) ? (n && a.watch.add(e), h(r, e, s)) : Array.isArray(e) ? e.map((o) => (n && a.watch.add(o), h(r, o))) : (n && (a.watchAll = !0), r);
function Et(e) {
  const a = be(), { control: r = a.control, name: n, defaultValue: s, disabled: o, exact: f } = e || {}, b = j.useRef(n);
  b.current = n, Rr({
    disabled: o,
    subject: r._subjects.values,
    next: (w) => {
      Xr(b.current, w.name, f) && S(ie(Zr(b.current, r._names, w.values || r._formValues, !1, s)));
    }
  });
  const [d, S] = j.useState(r._getWatch(n, s));
  return j.useEffect(() => r._removeUnmounted()), d;
}
var Sr = (e) => /^\w*$/.test(e), Qr = (e) => Ge(e.replace(/["|']|\]/g, "").split(/\.|\[/)), N = (e, a, r) => {
  let n = -1;
  const s = Sr(a) ? [a] : Qr(a), o = s.length, f = o - 1;
  for (; ++n < o; ) {
    const b = s[n];
    let d = r;
    if (n !== f) {
      const S = e[b];
      d = W(S) || Array.isArray(S) ? S : isNaN(+s[n + 1]) ? {} : [];
    }
    e[b] = d, e = e[b];
  }
  return e;
};
function wt(e) {
  const a = be(), { name: r, disabled: n, control: s = a.control, shouldUnregister: o } = e, f = Jr(s._names.array, r), b = Et({
    control: s,
    name: r,
    defaultValue: h(s._formValues, r, h(s._defaultValues, r, e.defaultValue)),
    exact: !0
  }), d = xt({
    control: s,
    name: r
  }), S = j.useRef(s.register(r, {
    ...e.rules,
    value: b,
    ...te(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return j.useEffect(() => {
    const w = s._options.shouldUnregister || o, R = (x, H) => {
      const Y = h(s._fields, x);
      Y && (Y._f.mount = H);
    };
    if (R(r, !0), w) {
      const x = ie(h(s._options.defaultValues, r));
      N(s._defaultValues, r, x), L(h(s._formValues, r)) && N(s._formValues, r, x);
    }
    return () => {
      (f ? w && !s._state.action : w) ? s.unregister(r) : R(r, !1);
    };
  }, [r, s, f, o]), j.useEffect(() => {
    h(s._fields, r) && s._updateDisabledField({
      disabled: n,
      fields: s._fields,
      name: r,
      value: h(s._fields, r)._f.value
    });
  }, [n, r, s]), {
    field: {
      name: r,
      value: b,
      ...te(n) || te(d.disabled) ? { disabled: d.disabled || n } : {},
      onChange: j.useCallback((w) => S.current.onChange({
        target: {
          value: Hr(w),
          name: r
        },
        type: nr.CHANGE
      }), [r]),
      onBlur: j.useCallback(() => S.current.onBlur({
        target: {
          value: h(s._formValues, r),
          name: r
        },
        type: nr.BLUR
      }), [r, s]),
      ref: (w) => {
        const R = h(s._fields, r);
        R && w && (R._f.ref = {
          focus: () => w.focus(),
          select: () => w.select(),
          setCustomValidity: (x) => w.setCustomValidity(x),
          reportValidity: () => w.reportValidity()
        });
      }
    },
    formState: d,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!h(d.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!h(d.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!h(d.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => h(d.errors, r)
      }
    })
  };
}
const Rt = (e) => e.render(wt(e));
var St = (e, a, r, n, s) => a ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [n]: s || !0
  }
} : {}, Ir = (e) => ({
  isOnSubmit: !e || e === ae.onSubmit,
  isOnBlur: e === ae.onBlur,
  isOnChange: e === ae.onChange,
  isOnAll: e === ae.all,
  isOnTouch: e === ae.onTouched
}), Lr = (e, a, r) => !r && (a.watchAll || a.watch.has(e) || [...a.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const He = (e, a, r, n) => {
  for (const s of r || Object.keys(e)) {
    const o = h(e, s);
    if (o) {
      const { _f: f, ...b } = o;
      if (f) {
        if (f.refs && f.refs[0] && a(f.refs[0], s) && !n)
          break;
        if (f.ref && a(f.ref, f.name) && !n)
          break;
        He(b, a);
      } else
        W(b) && He(b, a);
    }
  }
};
var Ft = (e, a, r) => {
  const n = Ge(h(e, r));
  return N(n, "root", a[r]), N(e, r, n), e;
}, Fr = (e) => e.type === "file", ge = (e) => typeof e == "function", ir = (e) => {
  if (!wr)
    return !1;
  const a = e ? e.ownerDocument : 0;
  return e instanceof (a && a.defaultView ? a.defaultView.HTMLElement : HTMLElement);
}, tr = (e) => oe(e), Vr = (e) => e.type === "radio", ar = (e) => e instanceof RegExp;
const $r = {
  value: !1,
  isValid: !1
}, Ur = { value: !0, isValid: !0 };
var et = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const a = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: a, isValid: !!a.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !L(e[0].attributes.value) ? L(e[0].value) || e[0].value === "" ? Ur : { value: e[0].value, isValid: !0 } : Ur
    ) : $r;
  }
  return $r;
};
const Mr = {
  isValid: !1,
  value: null
};
var rt = (e) => Array.isArray(e) ? e.reduce((a, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : a, Mr) : Mr;
function Br(e, a, r = "validate") {
  if (tr(e) || Array.isArray(e) && e.every(tr) || te(e) && !e)
    return {
      type: r,
      message: tr(e) ? e : "",
      ref: a
    };
}
var Te = (e) => W(e) && !ar(e) ? e : {
  value: e,
  message: ""
}, Wr = async (e, a, r, n, s) => {
  const { ref: o, refs: f, required: b, maxLength: d, minLength: S, min: w, max: R, pattern: x, validate: H, name: Y, valueAsNumber: je, mount: Re, disabled: se } = e._f, p = h(a, Y);
  if (!Re || se)
    return {};
  const z = f ? f[0] : o, ne = (F) => {
    n && z.reportValidity && (z.setCustomValidity(te(F) ? "" : F || ""), z.reportValidity());
  }, U = {}, Se = Vr(o), _e = Je(o), me = Se || _e, le = (je || Fr(o)) && L(o.value) && L(p) || ir(o) && o.value === "" || p === "" || Array.isArray(p) && !p.length, X = St.bind(null, Y, r, U), Fe = (F, V, D, I = de.maxLength, Z = de.minLength) => {
    const K = F ? V : D;
    U[Y] = {
      type: F ? I : Z,
      message: K,
      ref: o,
      ...X(F ? I : Z, K)
    };
  };
  if (s ? !Array.isArray(p) || !p.length : b && (!me && (le || G(p)) || te(p) && !p || _e && !et(f).isValid || Se && !rt(f).isValid)) {
    const { value: F, message: V } = tr(b) ? { value: !!b, message: b } : Te(b);
    if (F && (U[Y] = {
      type: de.required,
      message: V,
      ref: z,
      ...X(de.required, V)
    }, !r))
      return ne(V), U;
  }
  if (!le && (!G(w) || !G(R))) {
    let F, V;
    const D = Te(R), I = Te(w);
    if (!G(p) && !isNaN(p)) {
      const Z = o.valueAsNumber || p && +p;
      G(D.value) || (F = Z > D.value), G(I.value) || (V = Z < I.value);
    } else {
      const Z = o.valueAsDate || new Date(p), K = (pe) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + pe), ve = o.type == "time", ue = o.type == "week";
      oe(D.value) && p && (F = ve ? K(p) > K(D.value) : ue ? p > D.value : Z > new Date(D.value)), oe(I.value) && p && (V = ve ? K(p) < K(I.value) : ue ? p < I.value : Z < new Date(I.value));
    }
    if ((F || V) && (Fe(!!F, D.message, I.message, de.max, de.min), !r))
      return ne(U[Y].message), U;
  }
  if ((d || S) && !le && (oe(p) || s && Array.isArray(p))) {
    const F = Te(d), V = Te(S), D = !G(F.value) && p.length > +F.value, I = !G(V.value) && p.length < +V.value;
    if ((D || I) && (Fe(D, F.message, V.message), !r))
      return ne(U[Y].message), U;
  }
  if (x && !le && oe(p)) {
    const { value: F, message: V } = Te(x);
    if (ar(F) && !p.match(F) && (U[Y] = {
      type: de.pattern,
      message: V,
      ref: o,
      ...X(de.pattern, V)
    }, !r))
      return ne(V), U;
  }
  if (H) {
    if (ge(H)) {
      const F = await H(p, a), V = Br(F, z);
      if (V && (U[Y] = {
        ...V,
        ...X(de.validate, V.message)
      }, !r))
        return ne(V.message), U;
    } else if (W(H)) {
      let F = {};
      for (const V in H) {
        if (!re(F) && !r)
          break;
        const D = Br(await H[V](p, a), z, V);
        D && (F = {
          ...D,
          ...X(V, D.message)
        }, ne(D.message), r && (U[Y] = F));
      }
      if (!re(F) && (U[Y] = {
        ref: z,
        ...F
      }, !r))
        return U;
    }
  }
  return ne(!0), U;
};
function Vt(e, a) {
  const r = a.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    e = L(e) ? n++ : e[a[n++]];
  return e;
}
function At(e) {
  for (const a in e)
    if (e.hasOwnProperty(a) && !L(e[a]))
      return !1;
  return !0;
}
function q(e, a) {
  const r = Array.isArray(a) ? a : Sr(a) ? [a] : Qr(a), n = r.length === 1 ? e : Vt(e, r), s = r.length - 1, o = r[s];
  return n && delete n[o], s !== 0 && (W(n) && re(n) || Array.isArray(n) && At(n)) && q(e, r.slice(0, -1)), e;
}
var br = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (s) => {
      for (const o of e)
        o.next && o.next(s);
    },
    subscribe: (s) => (e.push(s), {
      unsubscribe: () => {
        e = e.filter((o) => o !== s);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, sr = (e) => G(e) || !qr(e);
function we(e, a) {
  if (sr(e) || sr(a))
    return e === a;
  if (Oe(e) && Oe(a))
    return e.getTime() === a.getTime();
  const r = Object.keys(e), n = Object.keys(a);
  if (r.length !== n.length)
    return !1;
  for (const s of r) {
    const o = e[s];
    if (!n.includes(s))
      return !1;
    if (s !== "ref") {
      const f = a[s];
      if (Oe(o) && Oe(f) || W(o) && W(f) || Array.isArray(o) && Array.isArray(f) ? !we(o, f) : o !== f)
        return !1;
    }
  }
  return !0;
}
var tt = (e) => e.type === "select-multiple", kt = (e) => Vr(e) || Je(e), _r = (e) => ir(e) && e.isConnected, nt = (e) => {
  for (const a in e)
    if (ge(e[a]))
      return !0;
  return !1;
};
function ur(e, a = {}) {
  const r = Array.isArray(e);
  if (W(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || W(e[n]) && !nt(e[n]) ? (a[n] = Array.isArray(e[n]) ? [] : {}, ur(e[n], a[n])) : G(e[n]) || (a[n] = !0);
  return a;
}
function it(e, a, r) {
  const n = Array.isArray(e);
  if (W(e) || n)
    for (const s in e)
      Array.isArray(e[s]) || W(e[s]) && !nt(e[s]) ? L(a) || sr(r[s]) ? r[s] = Array.isArray(e[s]) ? ur(e[s], []) : { ...ur(e[s]) } : it(e[s], G(a) ? {} : a[s], r[s]) : r[s] = !we(e[s], a[s]);
  return r;
}
var mr = (e, a) => it(e, a, ur(a)), at = (e, { valueAsNumber: a, valueAsDate: r, setValueAs: n }) => L(e) ? e : a ? e === "" ? NaN : e && +e : r && oe(e) ? new Date(e) : n ? n(e) : e;
function pr(e) {
  const a = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : a.disabled))
    return Fr(a) ? a.files : Vr(a) ? rt(e.refs).value : tt(a) ? [...a.selectedOptions].map(({ value: r }) => r) : Je(a) ? et(e.refs).value : at(L(a.value) ? e.ref.value : a.value, e);
}
var Ct = (e, a, r, n) => {
  const s = {};
  for (const o of e) {
    const f = h(a, o);
    f && N(s, o, f._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: n
  };
}, Ye = (e) => L(e) ? e : ar(e) ? e.source : W(e) ? ar(e.value) ? e.value.source : e.value : e, Dt = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Yr(e, a, r) {
  const n = h(e, r);
  if (n || Sr(r))
    return {
      error: n,
      name: r
    };
  const s = r.split(".");
  for (; s.length; ) {
    const o = s.join("."), f = h(a, o), b = h(e, o);
    if (f && !Array.isArray(f) && r !== o)
      return { name: r };
    if (b && b.type)
      return {
        name: o,
        error: b
      };
    s.pop();
  }
  return {
    name: r
  };
}
var Tt = (e, a, r, n, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(a || e) : (r ? n.isOnBlur : s.isOnBlur) ? !e : (r ? n.isOnChange : s.isOnChange) ? e : !0, Ot = (e, a) => !Ge(h(e, a)).length && q(e, a);
const jt = {
  mode: ae.onSubmit,
  reValidateMode: ae.onChange,
  shouldFocusError: !0
};
function Pt(e = {}, a) {
  let r = {
    ...jt,
    ...e
  }, n = {
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
  }, s = {}, o = W(r.defaultValues) || W(r.values) ? ie(r.defaultValues || r.values) || {} : {}, f = r.shouldUnregister ? {} : ie(o), b = {
    action: !1,
    mount: !1,
    watch: !1
  }, d = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, S, w = 0;
  const R = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, x = {
    values: br(),
    array: br(),
    state: br()
  }, H = e.resetOptions && e.resetOptions.keepDirtyValues, Y = Ir(r.mode), je = Ir(r.reValidateMode), Re = r.criteriaMode === ae.all, se = (i) => (u) => {
    clearTimeout(w), w = setTimeout(i, u);
  }, p = async (i) => {
    if (R.isValid || i) {
      const u = r.resolver ? re((await X()).errors) : await F(s, !0);
      u !== n.isValid && x.state.next({
        isValid: u
      });
    }
  }, z = (i) => R.isValidating && x.state.next({
    isValidating: i
  }), ne = (i, u = [], l, _, y = !0, v = !0) => {
    if (_ && l) {
      if (b.action = !0, v && Array.isArray(h(s, i))) {
        const m = l(h(s, i), _.argA, _.argB);
        y && N(s, i, m);
      }
      if (v && Array.isArray(h(n.errors, i))) {
        const m = l(h(n.errors, i), _.argA, _.argB);
        y && N(n.errors, i, m), Ot(n.errors, i);
      }
      if (R.touchedFields && v && Array.isArray(h(n.touchedFields, i))) {
        const m = l(h(n.touchedFields, i), _.argA, _.argB);
        y && N(n.touchedFields, i, m);
      }
      R.dirtyFields && (n.dirtyFields = mr(o, f)), x.state.next({
        name: i,
        isDirty: D(i, u),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      N(f, i, u);
  }, U = (i, u) => {
    N(n.errors, i, u), x.state.next({
      errors: n.errors
    });
  }, Se = (i) => {
    n.errors = i, x.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, _e = (i, u, l, _) => {
    const y = h(s, i);
    if (y) {
      const v = h(f, i, L(l) ? h(o, i) : l);
      L(v) || _ && _.defaultChecked || u ? N(f, i, u ? v : pr(y._f)) : K(i, v), b.mount && p();
    }
  }, me = (i, u, l, _, y) => {
    let v = !1, m = !1;
    const T = {
      name: i
    }, M = !!(h(s, i) && h(s, i)._f.disabled);
    if (!l || _) {
      R.isDirty && (m = n.isDirty, n.isDirty = T.isDirty = D(), v = m !== T.isDirty);
      const Q = M || we(h(o, i), u);
      m = !!(!M && h(n.dirtyFields, i)), Q || M ? q(n.dirtyFields, i) : N(n.dirtyFields, i, !0), T.dirtyFields = n.dirtyFields, v = v || R.dirtyFields && m !== !Q;
    }
    if (l) {
      const Q = h(n.touchedFields, i);
      Q || (N(n.touchedFields, i, l), T.touchedFields = n.touchedFields, v = v || R.touchedFields && Q !== l);
    }
    return v && y && x.state.next(T), v ? T : {};
  }, le = (i, u, l, _) => {
    const y = h(n.errors, i), v = R.isValid && te(u) && n.isValid !== u;
    if (e.delayError && l ? (S = se(() => U(i, l)), S(e.delayError)) : (clearTimeout(w), S = null, l ? N(n.errors, i, l) : q(n.errors, i)), (l ? !we(y, l) : y) || !re(_) || v) {
      const m = {
        ..._,
        ...v && te(u) ? { isValid: u } : {},
        errors: n.errors,
        name: i
      };
      n = {
        ...n,
        ...m
      }, x.state.next(m);
    }
    z(!1);
  }, X = async (i) => r.resolver(f, r.context, Ct(i || d.mount, s, r.criteriaMode, r.shouldUseNativeValidation)), Fe = async (i) => {
    const { errors: u } = await X(i);
    if (i)
      for (const l of i) {
        const _ = h(u, l);
        _ ? N(n.errors, l, _) : q(n.errors, l);
      }
    else
      n.errors = u;
    return u;
  }, F = async (i, u, l = {
    valid: !0
  }) => {
    for (const _ in i) {
      const y = i[_];
      if (y) {
        const { _f: v, ...m } = y;
        if (v) {
          const T = d.array.has(v.name), M = await Wr(y, f, Re, r.shouldUseNativeValidation && !u, T);
          if (M[v.name] && (l.valid = !1, u))
            break;
          !u && (h(M, v.name) ? T ? Ft(n.errors, M, v.name) : N(n.errors, v.name, M[v.name]) : q(n.errors, v.name));
        }
        m && await F(m, u, l);
      }
    }
    return l.valid;
  }, V = () => {
    for (const i of d.unMount) {
      const u = h(s, i);
      u && (u._f.refs ? u._f.refs.every((l) => !_r(l)) : !_r(u._f.ref)) && ye(i);
    }
    d.unMount = /* @__PURE__ */ new Set();
  }, D = (i, u) => (i && u && N(f, i, u), !we(Ne(), o)), I = (i, u, l) => Zr(i, d, {
    ...b.mount ? f : L(u) ? o : oe(i) ? { [i]: u } : u
  }, l, u), Z = (i) => Ge(h(b.mount ? f : o, i, e.shouldUnregister ? h(o, i, []) : [])), K = (i, u, l = {}) => {
    const _ = h(s, i);
    let y = u;
    if (_) {
      const v = _._f;
      v && (!v.disabled && N(f, i, at(u, v)), y = ir(v.ref) && G(u) ? "" : u, tt(v.ref) ? [...v.ref.options].forEach((m) => m.selected = y.includes(m.value)) : v.refs ? Je(v.ref) ? v.refs.length > 1 ? v.refs.forEach((m) => (!m.defaultChecked || !m.disabled) && (m.checked = Array.isArray(y) ? !!y.find((T) => T === m.value) : y === m.value)) : v.refs[0] && (v.refs[0].checked = !!y) : v.refs.forEach((m) => m.checked = m.value === y) : Fr(v.ref) ? v.ref.value = "" : (v.ref.value = y, v.ref.type || x.values.next({
        name: i,
        values: { ...f }
      })));
    }
    (l.shouldDirty || l.shouldTouch) && me(i, y, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && Ve(i);
  }, ve = (i, u, l) => {
    for (const _ in u) {
      const y = u[_], v = `${i}.${_}`, m = h(s, v);
      (d.array.has(i) || !sr(y) || m && !m._f) && !Oe(y) ? ve(v, y, l) : K(v, y, l);
    }
  }, ue = (i, u, l = {}) => {
    const _ = h(s, i), y = d.array.has(i), v = ie(u);
    N(f, i, v), y ? (x.array.next({
      name: i,
      values: { ...f }
    }), (R.isDirty || R.dirtyFields) && l.shouldDirty && x.state.next({
      name: i,
      dirtyFields: mr(o, f),
      isDirty: D(i, v)
    })) : _ && !_._f && !G(v) ? ve(i, v, l) : K(i, v, l), Lr(i, d) && x.state.next({ ...n }), x.values.next({
      name: i,
      values: { ...f }
    }), !b.mount && a();
  }, pe = async (i) => {
    const u = i.target;
    let l = u.name, _ = !0;
    const y = h(s, l), v = () => u.type ? pr(y._f) : Hr(i), m = (T) => {
      _ = Number.isNaN(T) || T === h(f, l, T);
    };
    if (y) {
      let T, M;
      const Q = v(), fe = i.type === nr.BLUR || i.type === nr.FOCUS_OUT, $e = !Dt(y._f) && !r.resolver && !h(n.errors, l) && !y._f.deps || Tt(fe, h(n.touchedFields, l), n.isSubmitted, je, Y), Ue = Lr(l, d, fe);
      N(f, l, Q), fe ? (y._f.onBlur && y._f.onBlur(i), S && S(0)) : y._f.onChange && y._f.onChange(i);
      const Me = me(l, Q, fe, !1), dr = !re(Me) || Ue;
      if (!fe && x.values.next({
        name: l,
        type: i.type,
        values: { ...f }
      }), $e)
        return R.isValid && p(), dr && x.state.next({ name: l, ...Ue ? {} : Me });
      if (!fe && Ue && x.state.next({ ...n }), z(!0), r.resolver) {
        const { errors: Qe } = await X([l]);
        if (m(Q), _) {
          const vr = Yr(n.errors, s, l), er = Yr(Qe, s, vr.name || l);
          T = er.error, l = er.name, M = re(Qe);
        }
      } else
        T = (await Wr(y, f, Re, r.shouldUseNativeValidation))[l], m(Q), _ && (T ? M = !1 : R.isValid && (M = await F(s, !0)));
      _ && (y._f.deps && Ve(y._f.deps), le(l, M, T, Me));
    }
  }, Pe = (i, u) => {
    if (h(n.errors, u) && i.focus)
      return i.focus(), 1;
  }, Ve = async (i, u = {}) => {
    let l, _;
    const y = rr(i);
    if (z(!0), r.resolver) {
      const v = await Fe(L(i) ? i : y);
      l = re(v), _ = i ? !y.some((m) => h(v, m)) : l;
    } else
      i ? (_ = (await Promise.all(y.map(async (v) => {
        const m = h(s, v);
        return await F(m && m._f ? { [v]: m } : m);
      }))).every(Boolean), !(!_ && !n.isValid) && p()) : _ = l = await F(s);
    return x.state.next({
      ...!oe(i) || R.isValid && l !== n.isValid ? {} : { name: i },
      ...r.resolver || !i ? { isValid: l } : {},
      errors: n.errors,
      isValidating: !1
    }), u.shouldFocus && !_ && He(s, Pe, i ? y : d.mount), _;
  }, Ne = (i) => {
    const u = {
      ...o,
      ...b.mount ? f : {}
    };
    return L(i) ? u : oe(i) ? h(u, i) : i.map((l) => h(u, l));
  }, Ke = (i, u) => ({
    invalid: !!h((u || n).errors, i),
    isDirty: !!h((u || n).dirtyFields, i),
    isTouched: !!h((u || n).touchedFields, i),
    error: h((u || n).errors, i)
  }), or = (i) => {
    i && rr(i).forEach((u) => q(n.errors, u)), x.state.next({
      errors: i ? n.errors : {}
    });
  }, Ae = (i, u, l) => {
    const _ = (h(s, i, { _f: {} })._f || {}).ref;
    N(n.errors, i, {
      ...u,
      ref: _
    }), x.state.next({
      name: i,
      errors: n.errors,
      isValid: !1
    }), l && l.shouldFocus && _ && _.focus && _.focus();
  }, Ie = (i, u) => ge(i) ? x.values.subscribe({
    next: (l) => i(I(void 0, u), l)
  }) : I(i, u, !0), ye = (i, u = {}) => {
    for (const l of i ? rr(i) : d.mount)
      d.mount.delete(l), d.array.delete(l), u.keepValue || (q(s, l), q(f, l)), !u.keepError && q(n.errors, l), !u.keepDirty && q(n.dirtyFields, l), !u.keepTouched && q(n.touchedFields, l), !r.shouldUnregister && !u.keepDefaultValue && q(o, l);
    x.values.next({
      values: { ...f }
    }), x.state.next({
      ...n,
      ...u.keepDirty ? { isDirty: D() } : {}
    }), !u.keepIsValid && p();
  }, ke = ({ disabled: i, name: u, field: l, fields: _, value: y }) => {
    if (te(i)) {
      const v = i ? void 0 : L(y) ? pr(l ? l._f : h(_, u)._f) : y;
      N(f, u, v), me(u, v, !1, !1, !0);
    }
  }, he = (i, u = {}) => {
    let l = h(s, i);
    const _ = te(u.disabled);
    return N(s, i, {
      ...l || {},
      _f: {
        ...l && l._f ? l._f : { ref: { name: i } },
        name: i,
        mount: !0,
        ...u
      }
    }), d.mount.add(i), l ? ke({
      field: l,
      disabled: u.disabled,
      name: i,
      value: u.value
    }) : _e(i, !0, u.value), {
      ..._ ? { disabled: u.disabled } : {},
      ...r.progressive ? {
        required: !!u.required,
        min: Ye(u.min),
        max: Ye(u.max),
        minLength: Ye(u.minLength),
        maxLength: Ye(u.maxLength),
        pattern: Ye(u.pattern)
      } : {},
      name: i,
      onChange: pe,
      onBlur: pe,
      ref: (y) => {
        if (y) {
          he(i, u), l = h(s, i);
          const v = L(y.value) && y.querySelectorAll && y.querySelectorAll("input,select,textarea")[0] || y, m = kt(v), T = l._f.refs || [];
          if (m ? T.find((M) => M === v) : v === l._f.ref)
            return;
          N(s, i, {
            _f: {
              ...l._f,
              ...m ? {
                refs: [
                  ...T.filter(_r),
                  v,
                  ...Array.isArray(h(o, i)) ? [{}] : []
                ],
                ref: { type: v.type, name: i }
              } : { ref: v }
            }
          }), _e(i, !1, void 0, v);
        } else
          l = h(s, i, {}), l._f && (l._f.mount = !1), (r.shouldUnregister || u.shouldUnregister) && !(Jr(d.array, i) && b.action) && d.unMount.add(i);
      }
    };
  }, ze = () => r.shouldFocusError && He(s, Pe, d.mount), Xe = (i) => {
    te(i) && (x.state.next({ disabled: i }), He(s, (u, l) => {
      let _ = i;
      const y = h(s, l);
      y && te(y._f.disabled) && (_ || (_ = y._f.disabled)), u.disabled = _;
    }, 0, !1));
  }, Ze = (i, u) => async (l) => {
    l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
    let _ = ie(f);
    if (x.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: y, values: v } = await X();
      n.errors = y, _ = v;
    } else
      await F(s);
    q(n.errors, "root"), re(n.errors) ? (x.state.next({
      errors: {}
    }), await i(_, l)) : (u && await u({ ...n.errors }, l), ze(), setTimeout(ze)), x.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: re(n.errors),
      submitCount: n.submitCount + 1,
      errors: n.errors
    });
  }, lr = (i, u = {}) => {
    h(s, i) && (L(u.defaultValue) ? ue(i, h(o, i)) : (ue(i, u.defaultValue), N(o, i, u.defaultValue)), u.keepTouched || q(n.touchedFields, i), u.keepDirty || (q(n.dirtyFields, i), n.isDirty = u.defaultValue ? D(i, h(o, i)) : D()), u.keepError || (q(n.errors, i), R.isValid && p()), x.state.next({ ...n }));
  }, xe = (i, u = {}) => {
    const l = i ? ie(i) : o, _ = ie(l), y = i && !re(i) ? _ : o;
    if (u.keepDefaultValues || (o = l), !u.keepValues) {
      if (u.keepDirtyValues || H)
        for (const v of d.mount)
          h(n.dirtyFields, v) ? N(y, v, h(f, v)) : ue(v, h(y, v));
      else {
        if (wr && L(i))
          for (const v of d.mount) {
            const m = h(s, v);
            if (m && m._f) {
              const T = Array.isArray(m._f.refs) ? m._f.refs[0] : m._f.ref;
              if (ir(T)) {
                const M = T.closest("form");
                if (M) {
                  M.reset();
                  break;
                }
              }
            }
          }
        s = {};
      }
      f = e.shouldUnregister ? u.keepDefaultValues ? ie(o) : {} : ie(y), x.array.next({
        values: { ...y }
      }), x.values.next({
        values: { ...y }
      });
    }
    d = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !b.mount && a(), b.mount = !R.isValid || !!u.keepIsValid, b.watch = !!e.shouldUnregister, x.state.next({
      submitCount: u.keepSubmitCount ? n.submitCount : 0,
      isDirty: u.keepDirty ? n.isDirty : !!(u.keepDefaultValues && !we(i, o)),
      isSubmitted: u.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: u.keepDirtyValues ? n.dirtyFields : u.keepDefaultValues && i ? mr(o, i) : {},
      touchedFields: u.keepTouched ? n.touchedFields : {},
      errors: u.keepErrors ? n.errors : {},
      isSubmitSuccessful: u.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Ee = (i, u) => xe(ge(i) ? i(f) : i, u);
  return {
    control: {
      register: he,
      unregister: ye,
      getFieldState: Ke,
      handleSubmit: Ze,
      setError: Ae,
      _executeSchema: X,
      _getWatch: I,
      _getDirty: D,
      _updateValid: p,
      _removeUnmounted: V,
      _updateFieldArray: ne,
      _updateDisabledField: ke,
      _getFieldArray: Z,
      _reset: xe,
      _resetDefaultValues: () => ge(r.defaultValues) && r.defaultValues().then((i) => {
        Ee(i, r.resetOptions), x.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (i) => {
        n = {
          ...n,
          ...i
        };
      },
      _disableForm: Xe,
      _subjects: x,
      _proxyFormState: R,
      _setErrors: Se,
      get _fields() {
        return s;
      },
      get _formValues() {
        return f;
      },
      get _state() {
        return b;
      },
      set _state(i) {
        b = i;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return d;
      },
      set _names(i) {
        d = i;
      },
      get _formState() {
        return n;
      },
      set _formState(i) {
        n = i;
      },
      get _options() {
        return r;
      },
      set _options(i) {
        r = {
          ...r,
          ...i
        };
      }
    },
    trigger: Ve,
    register: he,
    handleSubmit: Ze,
    watch: Ie,
    setValue: ue,
    getValues: Ne,
    reset: Ee,
    resetField: lr,
    clearErrors: or,
    unregister: ye,
    setError: Ae,
    setFocus: (i, u = {}) => {
      const l = h(s, i), _ = l && l._f;
      if (_) {
        const y = _.refs ? _.refs[0] : _.ref;
        y.focus && (y.focus(), u.shouldSelect && y.select());
      }
    },
    getFieldState: Ke
  };
}
function Nt(e = {}) {
  const a = j.useRef(), r = j.useRef(), [n, s] = j.useState({
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
  a.current || (a.current = {
    ...Pt(e, () => s((f) => ({ ...f }))),
    formState: n
  });
  const o = a.current.control;
  return o._options = e, Rr({
    subject: o._subjects.state,
    next: (f) => {
      zr(f, o._proxyFormState, o._updateFormState, !0) && s({ ...o._formState });
    }
  }), j.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), j.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const f = o._getDirty();
      f !== n.isDirty && o._subjects.state.next({
        isDirty: f
      });
    }
  }, [o, n.isDirty]), j.useEffect(() => {
    e.values && !we(e.values, r.current) ? (o._reset(e.values, o._options.resetOptions), r.current = e.values, s((f) => ({ ...f }))) : o._resetDefaultValues();
  }, [e.values, o]), j.useEffect(() => {
    e.errors && o._setErrors(e.errors);
  }, [e.errors, o]), j.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), a.current.formState = Kr(n, o), a.current;
}
const qe = ({
  type: e,
  name: a,
  label: r,
  validation: n,
  classes: s,
  ...o
}) => {
  var S;
  const {
    register: f,
    formState: { errors: b }
  } = be(), d = `form-${a}`;
  return /* @__PURE__ */ C.jsxs("div", { className: s == null ? void 0 : s.container, children: [
    r && /* @__PURE__ */ C.jsx("label", { htmlFor: d, className: s == null ? void 0 : s.label, children: r }),
    /* @__PURE__ */ C.jsx(
      "input",
      {
        id: d,
        className: s == null ? void 0 : s.input,
        ...f(a, n),
        type: e,
        ...o,
        "aria-invalid": b[a] ? "true" : "false",
        "aria-describedby": `${d}-error`
      }
    ),
    b[a] && /* @__PURE__ */ C.jsx("span", { id: `${d}-error`, className: s == null ? void 0 : s.error, children: (S = b[a]) == null ? void 0 : S.message })
  ] });
}, It = ({
  name: e,
  options: a,
  classes: r,
  ...n
}) => {
  var f;
  const {
    register: s,
    formState: { errors: o }
  } = be();
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    a.map((b, d) => /* @__PURE__ */ C.jsxs("div", { className: r == null ? void 0 : r.container, children: [
      /* @__PURE__ */ C.jsx(
        "input",
        {
          id: `form-${e}-${d}`,
          ...s(e),
          type: "checkbox",
          value: b.value,
          className: r == null ? void 0 : r.checkbox,
          ...n
        }
      ),
      /* @__PURE__ */ C.jsx("label", { htmlFor: `form-${e}-${d}`, className: r == null ? void 0 : r.label, children: b.label })
    ] }, d)),
    o[e] && /* @__PURE__ */ C.jsx("span", { className: r == null ? void 0 : r.error, children: (f = o[e]) == null ? void 0 : f.message })
  ] });
}, Lt = ({
  name: e,
  options: a,
  classes: r,
  ...n
}) => {
  var f;
  const {
    register: s,
    formState: { errors: o }
  } = be();
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    a.map((b, d) => /* @__PURE__ */ C.jsxs("div", { className: r == null ? void 0 : r.container, children: [
      /* @__PURE__ */ C.jsx(
        "input",
        {
          id: `form-${e}-${d}`,
          ...s(e),
          type: "radio",
          value: b.value,
          className: r == null ? void 0 : r.radio,
          ...n
        }
      ),
      /* @__PURE__ */ C.jsx("label", { htmlFor: `form-${e}-${d}`, className: r == null ? void 0 : r.label, children: b.label })
    ] }, d)),
    o[e] && /* @__PURE__ */ C.jsx("span", { className: r == null ? void 0 : r.error, children: (f = o[e]) == null ? void 0 : f.message })
  ] });
}, $t = ({
  name: e,
  options: a,
  label: r,
  validation: n,
  classes: s,
  ...o
}) => {
  var S;
  const {
    register: f,
    formState: { errors: b }
  } = be(), d = `form-${e}`;
  return /* @__PURE__ */ C.jsxs("div", { className: s == null ? void 0 : s.container, children: [
    r && /* @__PURE__ */ C.jsx("label", { htmlFor: d, className: s == null ? void 0 : s.label, children: r }),
    /* @__PURE__ */ C.jsx(
      "select",
      {
        id: d,
        ...f(e, n),
        className: s == null ? void 0 : s.select,
        ...o,
        "aria-invalid": b[e] ? "true" : "false",
        "aria-describedby": `${d}-error`,
        children: a.map((w, R) => /* @__PURE__ */ C.jsx("option", { value: w.value, className: s == null ? void 0 : s.option, children: w.label }, R))
      }
    ),
    b[e] && /* @__PURE__ */ C.jsx("span", { id: `${d}-error`, className: s == null ? void 0 : s.error, children: (S = b[e]) == null ? void 0 : S.message })
  ] });
}, Er = {
  text: qe,
  password: qe,
  telephone: qe,
  email: qe,
  select: $t,
  radio: Lt,
  checkbox: It
}, Ut = (e, a) => {
  e in Er ? console.warn(
    `Input type "${e}" is already registered. Overriding existing component.`
  ) : console.log(`Registering new input type "${e}".`), Er[e] = a;
}, Mt = (e) => Er[e], Bt = ({ inputType: e, ...a }) => {
  const r = Mt(e) || qe;
  return /* @__PURE__ */ C.jsx(r, { type: e, ...a });
}, Wt = (e = []) => {
  const a = {};
  return e.forEach((r) => {
    r.defaultValue && (a[r.name] = r.defaultValue);
  }), a;
}, Jt = ({
  fieldsInput: e,
  onSubmit: a,
  resolver: r,
  classes: n,
  onGetValues: s
}) => {
  const o = Wt(
    e
  ), f = Nt({
    resolver: r,
    defaultValues: o
  }), { getValues: b } = f;
  return ht(() => {
    s && s(b);
  }, [b, s]), /* @__PURE__ */ C.jsx(pt, { ...f, children: /* @__PURE__ */ C.jsxs(
    "form",
    {
      onSubmit: f.handleSubmit(a),
      className: n == null ? void 0 : n.formContainer,
      children: [
        e.map((d, S) => /* @__PURE__ */ C.jsx(
          Bt,
          {
            inputType: d.inputType,
            name: d.name,
            label: d.label,
            options: d == null ? void 0 : d.options,
            validation: d.validation,
            classes: n
          },
          S
        )),
        /* @__PURE__ */ C.jsx("button", { type: "submit", className: n == null ? void 0 : n.submitButton, children: "Submit" })
      ]
    }
  ) });
}, Yt = ({
  name: e,
  classes: a,
  label: r,
  ...n
}) => {
  const { control: s } = be(), o = `switch-${e}`;
  return /* @__PURE__ */ C.jsxs("div", { className: `d-switch-container ${(a == null ? void 0 : a.switchContainer) ?? ""}`, children: [
    r && /* @__PURE__ */ C.jsx(
      "label",
      {
        htmlFor: o,
        className: `d-switch-label ${(a == null ? void 0 : a.label) ?? ""}`,
        children: r
      }
    ),
    /* @__PURE__ */ C.jsx(
      Rt,
      {
        name: e,
        control: s,
        render: ({ field: { onChange: f, onBlur: b, value: d = !1, ref: S } }) => /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
          /* @__PURE__ */ C.jsx(
            "input",
            {
              id: o,
              onChange: f,
              onBlur: b,
              ref: S,
              className: `d-switch-input ${(a == null ? void 0 : a.input) ?? ""}`,
              ...n,
              checked: d === !0,
              type: "checkbox",
              "aria-checked": d ? "true" : "false"
            }
          ),
          /* @__PURE__ */ C.jsx(
            "label",
            {
              htmlFor: o,
              className: `d-switch ${(a == null ? void 0 : a.switch) ?? ""} ${(a == null ? void 0 : a.activeSwitch) ?? ""}`,
              children: /* @__PURE__ */ C.jsx(
                "span",
                {
                  role: "button",
                  className: `d-switch-button ${(a == null ? void 0 : a.button) ?? ""} ${(a == null ? void 0 : a.activeButton) ?? ""}`
                }
              )
            }
          )
        ] })
      }
    )
  ] });
};
Ut("switch", Yt);
export {
  Jt as GenericForm,
  Ut as addInputType,
  Mt as getInputComponent
};
