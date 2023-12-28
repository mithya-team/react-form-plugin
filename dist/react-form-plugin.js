import "./index.css";
import j from "react";
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
function ht() {
  return Pr || (Pr = 1, process.env.NODE_ENV !== "production" && function () {
    var e = j, a = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), _ = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), Y = Symbol.iterator, je = "@@iterator";
    function Re(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = Y && t[Y] || t[je];
      return typeof c == "function" ? c : null;
    }
    var se = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(t) {
      {
        for (var c = arguments.length, g = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
          g[w - 1] = arguments[w];
        z("error", t, g);
      }
    }
    function z(t, c, g) {
      {
        var w = se.ReactDebugCurrentFrame, O = w.getStackAddendum();
        O !== "" && (c += "%s", g = g.concat([O]));
        var P = g.map(function (C) {
          return String(C);
        });
        P.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, P);
      }
    }
    var ne = !1, U = !1, Se = !1, _e = !1, me = !1, le;
    le = Symbol.for("react.module.reference");
    function X(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === o || me || t === s || t === x || t === R || _e || t === H || ne || U || Se || typeof t == "object" && t !== null && (t.$$typeof === E || t.$$typeof === S || t.$$typeof === f || t.$$typeof === _ || t.$$typeof === v || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        t.$$typeof === le || t.getModuleId !== void 0));
    }
    function Fe(t, c, g) {
      var w = t.displayName;
      if (w)
        return w;
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
        case x:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case _:
            var c = t;
            return F(c) + ".Consumer";
          case f:
            var g = t;
            return F(g._context) + ".Provider";
          case v:
            return Fe(t, t.render, "ForwardRef");
          case S:
            var w = t.displayName || null;
            return w !== null ? w : V(t.type) || "Memo";
          case E: {
            var O = t, P = O._payload, C = O._init;
            try {
              return V(C(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, I = 0, Z, K, ve, oe, pe, Pe, Ve;
    function Ne() {
    }
    Ne.__reactDisabledLog = !0;
    function Ke() {
      {
        if (I === 0) {
          Z = console.log, K = console.info, ve = console.warn, oe = console.error, pe = console.group, Pe = console.groupCollapsed, Ve = console.groupEnd;
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
    function ur() {
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
              value: oe
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
            var w = O.stack.trim().match(/\n( *(at )?)/);
            Ie = w && w[1] || "";
          }
        return `
` + Ie + t;
      }
    }
    var Ce = !1, he;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      he = new ze();
    }
    function Xe(t, c) {
      if (!t || Ce)
        return "";
      {
        var g = he.get(t);
        if (g !== void 0)
          return g;
      }
      var w;
      Ce = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = Ae.current, Ae.current = null, Ke();
      try {
        if (c) {
          var C = function () {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function () {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (ce) {
              w = ce;
            }
            Reflect.construct(t, [], C);
          } else {
            try {
              C.call();
            } catch (ce) {
              w = ce;
            }
            t.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            w = ce;
          }
          t();
        }
      } catch (ce) {
        if (ce && w && typeof ce.stack == "string") {
          for (var A = ce.stack.split(`
`), G = w.stack.split(`
`), $ = A.length - 1, B = G.length - 1; $ >= 1 && B >= 0 && A[$] !== G[B];)
            B--;
          for (; $ >= 1 && B >= 0; $--, B--)
            if (A[$] !== G[B]) {
              if ($ !== 1 || B !== 1)
                do
                  if ($--, B--, B < 0 || A[$] !== G[B]) {
                    var ee = `
` + A[$].replace(" at new ", " at ");
                    return t.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", t.displayName)), typeof t == "function" && he.set(t, ee), ee;
                  }
                while ($ >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        Ce = !1, Ae.current = P, ur(), Error.prepareStackTrace = O;
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
        case x:
          return ye("Suspense");
        case R:
          return ye("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case v:
            return Ze(t.render);
          case S:
            return xe(t.type, c, g);
          case E: {
            var w = t, O = w._payload, P = w._init;
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
    function i(t, c, g, w, O) {
      {
        var P = Function.call.bind(Ee);
        for (var C in t)
          if (P(t, C)) {
            var A = void 0;
            try {
              if (typeof t[C] != "function") {
                var G = Error((w || "React class") + ": " + g + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              A = t[C](c, C, w, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              A = $;
            }
            A && !(A instanceof Error) && (Le(O), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", g, C, typeof A), Le(null)), A instanceof Error && !(A.message in fr) && (fr[A.message] = !0, Le(O), p("Failed %s type: %s", g, A.message), Le(null));
          }
      }
    }
    var u = Array.isArray;
    function l(t) {
      return u(t);
    }
    function b(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, g = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return g;
      }
    }
    function y(t) {
      try {
        return d(t), !1;
      } catch {
        return !0;
      }
    }
    function d(t) {
      return "" + t;
    }
    function m(t) {
      if (y(t))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", b(t)), d(t);
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
        var g = function () {
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
        var g = function () {
          fe || (fe = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var er = function (t, c, g, w, O, P, C) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: g,
        props: C,
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
        value: w
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function st(t, c, g, w, O) {
      {
        var P, C = {}, A = null, G = null;
        g !== void 0 && (m(g), A = "" + g), Me(c) && (m(c.key), A = "" + c.key), Ue(c) && (G = c.ref, dr(c, O));
        for (P in c)
          Ee.call(c, P) && !M.hasOwnProperty(P) && (C[P] = c[P]);
        if (t && t.defaultProps) {
          var $ = t.defaultProps;
          for (P in $)
            C[P] === void 0 && (C[P] = $[P]);
        }
        if (A || G) {
          var B = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          A && Qe(C, B), G && vr(C, B);
        }
        return er(t, A, G, O, w, T.current, C);
      }
    }
    var yr = se.ReactCurrentOwner, Ar = se.ReactDebugCurrentFrame;
    function ke(t) {
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
    function Cr() {
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
    function ot(t) {
      {
        if (t !== void 0) {
          var c = t.fileName.replace(/^.*[\\\/]/, ""), g = t.lineNumber;
          return `

Check your code at ` + c + ":" + g + ".";
        }
        return "";
      }
    }
    var kr = {};
    function ut(t) {
      {
        var c = Cr();
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
        var g = ut(c);
        if (kr[g])
          return;
        kr[g] = !0;
        var w = "";
        t && t._owner && t._owner !== yr.current && (w = " It was passed a child from " + V(t._owner.type) + "."), ke(t), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, w), ke(null);
      }
    }
    function Tr(t, c) {
      {
        if (typeof t != "object")
          return;
        if (l(t))
          for (var g = 0; g < t.length; g++) {
            var w = t[g];
            gr(w) && Dr(w, c);
          }
        else if (gr(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var O = Re(t);
          if (typeof O == "function" && O !== t.entries)
            for (var P = O.call(t), C; !(C = P.next()).done;)
              gr(C.value) && Dr(C.value, c);
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
        else if (typeof c == "object" && (c.$$typeof === v || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          c.$$typeof === S))
          g = c.propTypes;
        else
          return;
        if (g) {
          var w = V(c);
          i(g, t.props, "prop", w, t);
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
          var w = c[g];
          if (w !== "children" && w !== "key") {
            ke(t), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), ke(null);
            break;
          }
        }
        t.ref !== null && (ke(t), p("Invalid attribute `ref` supplied to `React.Fragment`."), ke(null));
      }
    }
    function Or(t, c, g, w, O, P) {
      {
        var C = X(t);
        if (!C) {
          var A = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = ot(O);
          G ? A += G : A += Cr();
          var $;
          t === null ? $ = "null" : l(t) ? $ = "array" : t !== void 0 && t.$$typeof === a ? ($ = "<" + (V(t.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof t, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, A);
        }
        var B = st(t, c, g, O, P);
        if (B == null)
          return B;
        if (C) {
          var ee = c.children;
          if (ee !== void 0)
            if (w)
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
function gt() {
  if (Nr)
    return We;
  Nr = 1;
  var e = j, a = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(_, v, x) {
    var R, S = {}, E = null, H = null;
    x !== void 0 && (E = "" + x), v.key !== void 0 && (E = "" + v.key), v.ref !== void 0 && (H = v.ref);
    for (R in v)
      n.call(v, R) && !o.hasOwnProperty(R) && (S[R] = v[R]);
    if (_ && _.defaultProps)
      for (R in v = _.defaultProps, v)
        S[R] === void 0 && (S[R] = v[R]);
    return { $$typeof: a, type: _, key: E, ref: H, props: S, _owner: s.current };
  }
  return We.Fragment = r, We.jsx = f, We.jsxs = f, We;
}
process.env.NODE_ENV === "production" ? xr.exports = gt() : xr.exports = ht();
var k = xr.exports, Ge = (e) => e.type === "checkbox", Oe = (e) => e instanceof Date, J = (e) => e == null;
const qr = (e) => typeof e == "object";
var W = (e) => !J(e) && !Array.isArray(e) && qr(e) && !Oe(e), Hr = (e) => W(e) && e.target ? Ge(e.target) ? e.target.checked : e.target.value : e, bt = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Gr = (e, a) => e.has(bt(a)), _t = (e) => {
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
    if (a = r ? [] : {}, !r && !_t(e))
      a = e;
    else
      for (const n in e)
        e.hasOwnProperty(n) && (a[n] = ie(e[n]));
  else
    return e;
  return a;
}
var Je = (e) => Array.isArray(e) ? e.filter(Boolean) : [], L = (e) => e === void 0, h = (e, a, r) => {
  if (!a || !W(e))
    return r;
  const n = Je(a.split(/[,[\].]+?/)).reduce((s, o) => J(s) ? s : s[o], e);
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
}, Jr = j.createContext(null), be = () => j.useContext(Jr), mt = (e) => {
  const { children: a, ...r } = e;
  return j.createElement(Jr.Provider, { value: r }, a);
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
function pt(e) {
  const a = be(), { control: r = a.control, disabled: n, name: s, exact: o } = e || {}, [f, _] = j.useState(r._formState), v = j.useRef(!0), x = j.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), R = j.useRef(s);
  return R.current = s, Rr({
    disabled: n,
    next: (S) => v.current && Xr(R.current, S.name, o) && zr(S, x.current, r._updateFormState) && _({
      ...r._formState,
      ...S
    }),
    subject: r._subjects.state
  }), j.useEffect(() => (v.current = !0, x.current.isValid && r._updateValid(!0), () => {
    v.current = !1;
  }), [r]), Kr(f, r, x.current, !1);
}
var ue = (e) => typeof e == "string", Zr = (e, a, r, n, s) => ue(e) ? (n && a.watch.add(e), h(r, e, s)) : Array.isArray(e) ? e.map((o) => (n && a.watch.add(o), h(r, o))) : (n && (a.watchAll = !0), r);
function xt(e) {
  const a = be(), { control: r = a.control, name: n, defaultValue: s, disabled: o, exact: f } = e || {}, _ = j.useRef(n);
  _.current = n, Rr({
    disabled: o,
    subject: r._subjects.values,
    next: (R) => {
      Xr(_.current, R.name, f) && x(ie(Zr(_.current, r._names, R.values || r._formValues, !1, s)));
    }
  });
  const [v, x] = j.useState(r._getWatch(n, s));
  return j.useEffect(() => r._removeUnmounted()), v;
}
var Sr = (e) => /^\w*$/.test(e), Qr = (e) => Je(e.replace(/["|']|\]/g, "").split(/\.|\[/)), N = (e, a, r) => {
  let n = -1;
  const s = Sr(a) ? [a] : Qr(a), o = s.length, f = o - 1;
  for (; ++n < o;) {
    const _ = s[n];
    let v = r;
    if (n !== f) {
      const x = e[_];
      v = W(x) || Array.isArray(x) ? x : isNaN(+s[n + 1]) ? {} : [];
    }
    e[_] = v, e = e[_];
  }
  return e;
};
function Et(e) {
  const a = be(), { name: r, disabled: n, control: s = a.control, shouldUnregister: o } = e, f = Gr(s._names.array, r), _ = xt({
    control: s,
    name: r,
    defaultValue: h(s._formValues, r, h(s._defaultValues, r, e.defaultValue)),
    exact: !0
  }), v = pt({
    control: s,
    name: r
  }), x = j.useRef(s.register(r, {
    ...e.rules,
    value: _,
    ...te(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return j.useEffect(() => {
    const R = s._options.shouldUnregister || o, S = (E, H) => {
      const Y = h(s._fields, E);
      Y && (Y._f.mount = H);
    };
    if (S(r, !0), R) {
      const E = ie(h(s._options.defaultValues, r));
      N(s._defaultValues, r, E), L(h(s._formValues, r)) && N(s._formValues, r, E);
    }
    return () => {
      (f ? R && !s._state.action : R) ? s.unregister(r) : S(r, !1);
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
      value: _,
      ...te(n) || te(v.disabled) ? { disabled: v.disabled || n } : {},
      onChange: j.useCallback((R) => x.current.onChange({
        target: {
          value: Hr(R),
          name: r
        },
        type: nr.CHANGE
      }), [r]),
      onBlur: j.useCallback(() => x.current.onBlur({
        target: {
          value: h(s._formValues, r),
          name: r
        },
        type: nr.BLUR
      }), [r, s]),
      ref: (R) => {
        const S = h(s._fields, r);
        S && R && (S._f.ref = {
          focus: () => R.focus(),
          select: () => R.select(),
          setCustomValidity: (E) => R.setCustomValidity(E),
          reportValidity: () => R.reportValidity()
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
const wt = (e) => e.render(Et(e));
var Rt = (e, a, r, n, s) => a ? {
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
      const { _f: f, ..._ } = o;
      if (f) {
        if (f.refs && f.refs[0] && a(f.refs[0], s) && !n)
          break;
        if (f.ref && a(f.ref, f.name) && !n)
          break;
        He(_, a);
      } else
        W(_) && He(_, a);
    }
  }
};
var St = (e, a, r) => {
  const n = Je(h(e, r));
  return N(n, "root", a[r]), N(e, r, n), e;
}, Fr = (e) => e.type === "file", ge = (e) => typeof e == "function", ir = (e) => {
  if (!wr)
    return !1;
  const a = e ? e.ownerDocument : 0;
  return e instanceof (a && a.defaultView ? a.defaultView.HTMLElement : HTMLElement);
}, tr = (e) => ue(e), Vr = (e) => e.type === "radio", ar = (e) => e instanceof RegExp;
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
  const { ref: o, refs: f, required: _, maxLength: v, minLength: x, min: R, max: S, pattern: E, validate: H, name: Y, valueAsNumber: je, mount: Re, disabled: se } = e._f, p = h(a, Y);
  if (!Re || se)
    return {};
  const z = f ? f[0] : o, ne = (F) => {
    n && z.reportValidity && (z.setCustomValidity(te(F) ? "" : F || ""), z.reportValidity());
  }, U = {}, Se = Vr(o), _e = Ge(o), me = Se || _e, le = (je || Fr(o)) && L(o.value) && L(p) || ir(o) && o.value === "" || p === "" || Array.isArray(p) && !p.length, X = Rt.bind(null, Y, r, U), Fe = (F, V, D, I = de.maxLength, Z = de.minLength) => {
    const K = F ? V : D;
    U[Y] = {
      type: F ? I : Z,
      message: K,
      ref: o,
      ...X(F ? I : Z, K)
    };
  };
  if (s ? !Array.isArray(p) || !p.length : _ && (!me && (le || J(p)) || te(p) && !p || _e && !et(f).isValid || Se && !rt(f).isValid)) {
    const { value: F, message: V } = tr(_) ? { value: !!_, message: _ } : Te(_);
    if (F && (U[Y] = {
      type: de.required,
      message: V,
      ref: z,
      ...X(de.required, V)
    }, !r))
      return ne(V), U;
  }
  if (!le && (!J(R) || !J(S))) {
    let F, V;
    const D = Te(S), I = Te(R);
    if (!J(p) && !isNaN(p)) {
      const Z = o.valueAsNumber || p && +p;
      J(D.value) || (F = Z > D.value), J(I.value) || (V = Z < I.value);
    } else {
      const Z = o.valueAsDate || new Date(p), K = (pe) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + pe), ve = o.type == "time", oe = o.type == "week";
      ue(D.value) && p && (F = ve ? K(p) > K(D.value) : oe ? p > D.value : Z > new Date(D.value)), ue(I.value) && p && (V = ve ? K(p) < K(I.value) : oe ? p < I.value : Z < new Date(I.value));
    }
    if ((F || V) && (Fe(!!F, D.message, I.message, de.max, de.min), !r))
      return ne(U[Y].message), U;
  }
  if ((v || x) && !le && (ue(p) || s && Array.isArray(p))) {
    const F = Te(v), V = Te(x), D = !J(F.value) && p.length > +F.value, I = !J(V.value) && p.length < +V.value;
    if ((D || I) && (Fe(D, F.message, V.message), !r))
      return ne(U[Y].message), U;
  }
  if (E && !le && ue(p)) {
    const { value: F, message: V } = Te(E);
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
function Ft(e, a) {
  const r = a.slice(0, -1).length;
  let n = 0;
  for (; n < r;)
    e = L(e) ? n++ : e[a[n++]];
  return e;
}
function Vt(e) {
  for (const a in e)
    if (e.hasOwnProperty(a) && !L(e[a]))
      return !1;
  return !0;
}
function q(e, a) {
  const r = Array.isArray(a) ? a : Sr(a) ? [a] : Qr(a), n = r.length === 1 ? e : Ft(e, r), s = r.length - 1, o = r[s];
  return n && delete n[o], s !== 0 && (W(n) && re(n) || Array.isArray(n) && Vt(n)) && q(e, r.slice(0, -1)), e;
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
}, sr = (e) => J(e) || !qr(e);
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
var tt = (e) => e.type === "select-multiple", At = (e) => Vr(e) || Ge(e), _r = (e) => ir(e) && e.isConnected, nt = (e) => {
  for (const a in e)
    if (ge(e[a]))
      return !0;
  return !1;
};
function or(e, a = {}) {
  const r = Array.isArray(e);
  if (W(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || W(e[n]) && !nt(e[n]) ? (a[n] = Array.isArray(e[n]) ? [] : {}, or(e[n], a[n])) : J(e[n]) || (a[n] = !0);
  return a;
}
function it(e, a, r) {
  const n = Array.isArray(e);
  if (W(e) || n)
    for (const s in e)
      Array.isArray(e[s]) || W(e[s]) && !nt(e[s]) ? L(a) || sr(r[s]) ? r[s] = Array.isArray(e[s]) ? or(e[s], []) : { ...or(e[s]) } : it(e[s], J(a) ? {} : a[s], r[s]) : r[s] = !we(e[s], a[s]);
  return r;
}
var mr = (e, a) => it(e, a, or(a)), at = (e, { valueAsNumber: a, valueAsDate: r, setValueAs: n }) => L(e) ? e : a ? e === "" ? NaN : e && +e : r && ue(e) ? new Date(e) : n ? n(e) : e;
function pr(e) {
  const a = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : a.disabled))
    return Fr(a) ? a.files : Vr(a) ? rt(e.refs).value : tt(a) ? [...a.selectedOptions].map(({ value: r }) => r) : Ge(a) ? et(e.refs).value : at(L(a.value) ? e.ref.value : a.value, e);
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
}, Ye = (e) => L(e) ? e : ar(e) ? e.source : W(e) ? ar(e.value) ? e.value.source : e.value : e, kt = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Yr(e, a, r) {
  const n = h(e, r);
  if (n || Sr(r))
    return {
      error: n,
      name: r
    };
  const s = r.split(".");
  for (; s.length;) {
    const o = s.join("."), f = h(a, o), _ = h(e, o);
    if (f && !Array.isArray(f) && r !== o)
      return { name: r };
    if (_ && _.type)
      return {
        name: o,
        error: _
      };
    s.pop();
  }
  return {
    name: r
  };
}
var Dt = (e, a, r, n, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(a || e) : (r ? n.isOnBlur : s.isOnBlur) ? !e : (r ? n.isOnChange : s.isOnChange) ? e : !0, Tt = (e, a) => !Je(h(e, a)).length && q(e, a);
const Ot = {
  mode: ae.onSubmit,
  reValidateMode: ae.onChange,
  shouldFocusError: !0
};
function jt(e = {}, a) {
  let r = {
    ...Ot,
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
  }, s = {}, o = W(r.defaultValues) || W(r.values) ? ie(r.defaultValues || r.values) || {} : {}, f = r.shouldUnregister ? {} : ie(o), _ = {
    action: !1,
    mount: !1,
    watch: !1
  }, v = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, x, R = 0;
  const S = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, E = {
    values: br(),
    array: br(),
    state: br()
  }, H = e.resetOptions && e.resetOptions.keepDirtyValues, Y = Ir(r.mode), je = Ir(r.reValidateMode), Re = r.criteriaMode === ae.all, se = (i) => (u) => {
    clearTimeout(R), R = setTimeout(i, u);
  }, p = async (i) => {
    if (S.isValid || i) {
      const u = r.resolver ? re((await X()).errors) : await F(s, !0);
      u !== n.isValid && E.state.next({
        isValid: u
      });
    }
  }, z = (i) => S.isValidating && E.state.next({
    isValidating: i
  }), ne = (i, u = [], l, b, y = !0, d = !0) => {
    if (b && l) {
      if (_.action = !0, d && Array.isArray(h(s, i))) {
        const m = l(h(s, i), b.argA, b.argB);
        y && N(s, i, m);
      }
      if (d && Array.isArray(h(n.errors, i))) {
        const m = l(h(n.errors, i), b.argA, b.argB);
        y && N(n.errors, i, m), Tt(n.errors, i);
      }
      if (S.touchedFields && d && Array.isArray(h(n.touchedFields, i))) {
        const m = l(h(n.touchedFields, i), b.argA, b.argB);
        y && N(n.touchedFields, i, m);
      }
      S.dirtyFields && (n.dirtyFields = mr(o, f)), E.state.next({
        name: i,
        isDirty: D(i, u),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      N(f, i, u);
  }, U = (i, u) => {
    N(n.errors, i, u), E.state.next({
      errors: n.errors
    });
  }, Se = (i) => {
    n.errors = i, E.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, _e = (i, u, l, b) => {
    const y = h(s, i);
    if (y) {
      const d = h(f, i, L(l) ? h(o, i) : l);
      L(d) || b && b.defaultChecked || u ? N(f, i, u ? d : pr(y._f)) : K(i, d), _.mount && p();
    }
  }, me = (i, u, l, b, y) => {
    let d = !1, m = !1;
    const T = {
      name: i
    }, M = !!(h(s, i) && h(s, i)._f.disabled);
    if (!l || b) {
      S.isDirty && (m = n.isDirty, n.isDirty = T.isDirty = D(), d = m !== T.isDirty);
      const Q = M || we(h(o, i), u);
      m = !!(!M && h(n.dirtyFields, i)), Q || M ? q(n.dirtyFields, i) : N(n.dirtyFields, i, !0), T.dirtyFields = n.dirtyFields, d = d || S.dirtyFields && m !== !Q;
    }
    if (l) {
      const Q = h(n.touchedFields, i);
      Q || (N(n.touchedFields, i, l), T.touchedFields = n.touchedFields, d = d || S.touchedFields && Q !== l);
    }
    return d && y && E.state.next(T), d ? T : {};
  }, le = (i, u, l, b) => {
    const y = h(n.errors, i), d = S.isValid && te(u) && n.isValid !== u;
    if (e.delayError && l ? (x = se(() => U(i, l)), x(e.delayError)) : (clearTimeout(R), x = null, l ? N(n.errors, i, l) : q(n.errors, i)), (l ? !we(y, l) : y) || !re(b) || d) {
      const m = {
        ...b,
        ...d && te(u) ? { isValid: u } : {},
        errors: n.errors,
        name: i
      };
      n = {
        ...n,
        ...m
      }, E.state.next(m);
    }
    z(!1);
  }, X = async (i) => r.resolver(f, r.context, Ct(i || v.mount, s, r.criteriaMode, r.shouldUseNativeValidation)), Fe = async (i) => {
    const { errors: u } = await X(i);
    if (i)
      for (const l of i) {
        const b = h(u, l);
        b ? N(n.errors, l, b) : q(n.errors, l);
      }
    else
      n.errors = u;
    return u;
  }, F = async (i, u, l = {
    valid: !0
  }) => {
    for (const b in i) {
      const y = i[b];
      if (y) {
        const { _f: d, ...m } = y;
        if (d) {
          const T = v.array.has(d.name), M = await Wr(y, f, Re, r.shouldUseNativeValidation && !u, T);
          if (M[d.name] && (l.valid = !1, u))
            break;
          !u && (h(M, d.name) ? T ? St(n.errors, M, d.name) : N(n.errors, d.name, M[d.name]) : q(n.errors, d.name));
        }
        m && await F(m, u, l);
      }
    }
    return l.valid;
  }, V = () => {
    for (const i of v.unMount) {
      const u = h(s, i);
      u && (u._f.refs ? u._f.refs.every((l) => !_r(l)) : !_r(u._f.ref)) && ye(i);
    }
    v.unMount = /* @__PURE__ */ new Set();
  }, D = (i, u) => (i && u && N(f, i, u), !we(Ne(), o)), I = (i, u, l) => Zr(i, v, {
    ..._.mount ? f : L(u) ? o : ue(i) ? { [i]: u } : u
  }, l, u), Z = (i) => Je(h(_.mount ? f : o, i, e.shouldUnregister ? h(o, i, []) : [])), K = (i, u, l = {}) => {
    const b = h(s, i);
    let y = u;
    if (b) {
      const d = b._f;
      d && (!d.disabled && N(f, i, at(u, d)), y = ir(d.ref) && J(u) ? "" : u, tt(d.ref) ? [...d.ref.options].forEach((m) => m.selected = y.includes(m.value)) : d.refs ? Ge(d.ref) ? d.refs.length > 1 ? d.refs.forEach((m) => (!m.defaultChecked || !m.disabled) && (m.checked = Array.isArray(y) ? !!y.find((T) => T === m.value) : y === m.value)) : d.refs[0] && (d.refs[0].checked = !!y) : d.refs.forEach((m) => m.checked = m.value === y) : Fr(d.ref) ? d.ref.value = "" : (d.ref.value = y, d.ref.type || E.values.next({
        name: i,
        values: { ...f }
      })));
    }
    (l.shouldDirty || l.shouldTouch) && me(i, y, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && Ve(i);
  }, ve = (i, u, l) => {
    for (const b in u) {
      const y = u[b], d = `${i}.${b}`, m = h(s, d);
      (v.array.has(i) || !sr(y) || m && !m._f) && !Oe(y) ? ve(d, y, l) : K(d, y, l);
    }
  }, oe = (i, u, l = {}) => {
    const b = h(s, i), y = v.array.has(i), d = ie(u);
    N(f, i, d), y ? (E.array.next({
      name: i,
      values: { ...f }
    }), (S.isDirty || S.dirtyFields) && l.shouldDirty && E.state.next({
      name: i,
      dirtyFields: mr(o, f),
      isDirty: D(i, d)
    })) : b && !b._f && !J(d) ? ve(i, d, l) : K(i, d, l), Lr(i, v) && E.state.next({ ...n }), E.values.next({
      name: i,
      values: { ...f }
    }), !_.mount && a();
  }, pe = async (i) => {
    const u = i.target;
    let l = u.name, b = !0;
    const y = h(s, l), d = () => u.type ? pr(y._f) : Hr(i), m = (T) => {
      b = Number.isNaN(T) || T === h(f, l, T);
    };
    if (y) {
      let T, M;
      const Q = d(), fe = i.type === nr.BLUR || i.type === nr.FOCUS_OUT, $e = !kt(y._f) && !r.resolver && !h(n.errors, l) && !y._f.deps || Dt(fe, h(n.touchedFields, l), n.isSubmitted, je, Y), Ue = Lr(l, v, fe);
      N(f, l, Q), fe ? (y._f.onBlur && y._f.onBlur(i), x && x(0)) : y._f.onChange && y._f.onChange(i);
      const Me = me(l, Q, fe, !1), dr = !re(Me) || Ue;
      if (!fe && E.values.next({
        name: l,
        type: i.type,
        values: { ...f }
      }), $e)
        return S.isValid && p(), dr && E.state.next({ name: l, ...Ue ? {} : Me });
      if (!fe && Ue && E.state.next({ ...n }), z(!0), r.resolver) {
        const { errors: Qe } = await X([l]);
        if (m(Q), b) {
          const vr = Yr(n.errors, s, l), er = Yr(Qe, s, vr.name || l);
          T = er.error, l = er.name, M = re(Qe);
        }
      } else
        T = (await Wr(y, f, Re, r.shouldUseNativeValidation))[l], m(Q), b && (T ? M = !1 : S.isValid && (M = await F(s, !0)));
      b && (y._f.deps && Ve(y._f.deps), le(l, M, T, Me));
    }
  }, Pe = (i, u) => {
    if (h(n.errors, u) && i.focus)
      return i.focus(), 1;
  }, Ve = async (i, u = {}) => {
    let l, b;
    const y = rr(i);
    if (z(!0), r.resolver) {
      const d = await Fe(L(i) ? i : y);
      l = re(d), b = i ? !y.some((m) => h(d, m)) : l;
    } else
      i ? (b = (await Promise.all(y.map(async (d) => {
        const m = h(s, d);
        return await F(m && m._f ? { [d]: m } : m);
      }))).every(Boolean), !(!b && !n.isValid) && p()) : b = l = await F(s);
    return E.state.next({
      ...!ue(i) || S.isValid && l !== n.isValid ? {} : { name: i },
      ...r.resolver || !i ? { isValid: l } : {},
      errors: n.errors,
      isValidating: !1
    }), u.shouldFocus && !b && He(s, Pe, i ? y : v.mount), b;
  }, Ne = (i) => {
    const u = {
      ...o,
      ..._.mount ? f : {}
    };
    return L(i) ? u : ue(i) ? h(u, i) : i.map((l) => h(u, l));
  }, Ke = (i, u) => ({
    invalid: !!h((u || n).errors, i),
    isDirty: !!h((u || n).dirtyFields, i),
    isTouched: !!h((u || n).touchedFields, i),
    error: h((u || n).errors, i)
  }), ur = (i) => {
    i && rr(i).forEach((u) => q(n.errors, u)), E.state.next({
      errors: i ? n.errors : {}
    });
  }, Ae = (i, u, l) => {
    const b = (h(s, i, { _f: {} })._f || {}).ref;
    N(n.errors, i, {
      ...u,
      ref: b
    }), E.state.next({
      name: i,
      errors: n.errors,
      isValid: !1
    }), l && l.shouldFocus && b && b.focus && b.focus();
  }, Ie = (i, u) => ge(i) ? E.values.subscribe({
    next: (l) => i(I(void 0, u), l)
  }) : I(i, u, !0), ye = (i, u = {}) => {
    for (const l of i ? rr(i) : v.mount)
      v.mount.delete(l), v.array.delete(l), u.keepValue || (q(s, l), q(f, l)), !u.keepError && q(n.errors, l), !u.keepDirty && q(n.dirtyFields, l), !u.keepTouched && q(n.touchedFields, l), !r.shouldUnregister && !u.keepDefaultValue && q(o, l);
    E.values.next({
      values: { ...f }
    }), E.state.next({
      ...n,
      ...u.keepDirty ? { isDirty: D() } : {}
    }), !u.keepIsValid && p();
  }, Ce = ({ disabled: i, name: u, field: l, fields: b, value: y }) => {
    if (te(i)) {
      const d = i ? void 0 : L(y) ? pr(l ? l._f : h(b, u)._f) : y;
      N(f, u, d), me(u, d, !1, !1, !0);
    }
  }, he = (i, u = {}) => {
    let l = h(s, i);
    const b = te(u.disabled);
    return N(s, i, {
      ...l || {},
      _f: {
        ...l && l._f ? l._f : { ref: { name: i } },
        name: i,
        mount: !0,
        ...u
      }
    }), v.mount.add(i), l ? Ce({
      field: l,
      disabled: u.disabled,
      name: i,
      value: u.value
    }) : _e(i, !0, u.value), {
      ...b ? { disabled: u.disabled } : {},
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
          const d = L(y.value) && y.querySelectorAll && y.querySelectorAll("input,select,textarea")[0] || y, m = At(d), T = l._f.refs || [];
          if (m ? T.find((M) => M === d) : d === l._f.ref)
            return;
          N(s, i, {
            _f: {
              ...l._f,
              ...m ? {
                refs: [
                  ...T.filter(_r),
                  d,
                  ...Array.isArray(h(o, i)) ? [{}] : []
                ],
                ref: { type: d.type, name: i }
              } : { ref: d }
            }
          }), _e(i, !1, void 0, d);
        } else
          l = h(s, i, {}), l._f && (l._f.mount = !1), (r.shouldUnregister || u.shouldUnregister) && !(Gr(v.array, i) && _.action) && v.unMount.add(i);
      }
    };
  }, ze = () => r.shouldFocusError && He(s, Pe, v.mount), Xe = (i) => {
    te(i) && (E.state.next({ disabled: i }), He(s, (u, l) => {
      let b = i;
      const y = h(s, l);
      y && te(y._f.disabled) && (b || (b = y._f.disabled)), u.disabled = b;
    }, 0, !1));
  }, Ze = (i, u) => async (l) => {
    l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
    let b = ie(f);
    if (E.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: y, values: d } = await X();
      n.errors = y, b = d;
    } else
      await F(s);
    q(n.errors, "root"), re(n.errors) ? (E.state.next({
      errors: {}
    }), await i(b, l)) : (u && await u({ ...n.errors }, l), ze(), setTimeout(ze)), E.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: re(n.errors),
      submitCount: n.submitCount + 1,
      errors: n.errors
    });
  }, lr = (i, u = {}) => {
    h(s, i) && (L(u.defaultValue) ? oe(i, h(o, i)) : (oe(i, u.defaultValue), N(o, i, u.defaultValue)), u.keepTouched || q(n.touchedFields, i), u.keepDirty || (q(n.dirtyFields, i), n.isDirty = u.defaultValue ? D(i, h(o, i)) : D()), u.keepError || (q(n.errors, i), S.isValid && p()), E.state.next({ ...n }));
  }, xe = (i, u = {}) => {
    const l = i ? ie(i) : o, b = ie(l), y = i && !re(i) ? b : o;
    if (u.keepDefaultValues || (o = l), !u.keepValues) {
      if (u.keepDirtyValues || H)
        for (const d of v.mount)
          h(n.dirtyFields, d) ? N(y, d, h(f, d)) : oe(d, h(y, d));
      else {
        if (wr && L(i))
          for (const d of v.mount) {
            const m = h(s, d);
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
      f = e.shouldUnregister ? u.keepDefaultValues ? ie(o) : {} : ie(y), E.array.next({
        values: { ...y }
      }), E.values.next({
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
    }, !_.mount && a(), _.mount = !S.isValid || !!u.keepIsValid, _.watch = !!e.shouldUnregister, E.state.next({
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
      _updateDisabledField: Ce,
      _getFieldArray: Z,
      _reset: xe,
      _resetDefaultValues: () => ge(r.defaultValues) && r.defaultValues().then((i) => {
        Ee(i, r.resetOptions), E.state.next({
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
      _subjects: E,
      _proxyFormState: S,
      _setErrors: Se,
      get _fields() {
        return s;
      },
      get _formValues() {
        return f;
      },
      get _state() {
        return _;
      },
      set _state(i) {
        _ = i;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return v;
      },
      set _names(i) {
        v = i;
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
    setValue: oe,
    getValues: Ne,
    reset: Ee,
    resetField: lr,
    clearErrors: ur,
    unregister: ye,
    setError: Ae,
    setFocus: (i, u = {}) => {
      const l = h(s, i), b = l && l._f;
      if (b) {
        const y = b.refs ? b.refs[0] : b.ref;
        y.focus && (y.focus(), u.shouldSelect && y.select());
      }
    },
    getFieldState: Ke
  };
}
function Pt(e = {}) {
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
    ...jt(e, () => s((f) => ({ ...f }))),
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
  var x;
  const {
    register: f,
    formState: { errors: _ }
  } = be(), v = `form-${a}`;
  return /* @__PURE__ */ k.jsxs("div", {
    className: s == null ? void 0 : s.container, children: [
      r && /* @__PURE__ */ k.jsx("label", { htmlFor: v, className: s == null ? void 0 : s.label, children: r }),
    /* @__PURE__ */ k.jsx(
        "input",
        {
          id: v,
          className: s == null ? void 0 : s.input,
          ...f(a, n),
          type: e,
          ...o,
          "aria-invalid": _[a] ? "true" : "false",
          "aria-describedby": `${v}-error`
        }
      ),
      _[a] && /* @__PURE__ */ k.jsx("span", { id: `${v}-error`, className: s == null ? void 0 : s.error, children: (x = _[a]) == null ? void 0 : x.message })
    ]
  });
}, Nt = ({
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
  return /* @__PURE__ */ k.jsxs(k.Fragment, {
    children: [
      a.map((_, v) => /* @__PURE__ */ k.jsxs("div", {
        className: r == null ? void 0 : r.container, children: [
      /* @__PURE__ */ k.jsx(
          "input",
          {
            id: `form-${e}-${v}`,
            ...s(e),
            type: "checkbox",
            value: _.value,
            className: r == null ? void 0 : r.checkbox,
            ...n
          }
        ),
      /* @__PURE__ */ k.jsx("label", { htmlFor: `form-${e}-${v}`, className: r == null ? void 0 : r.label, children: _.label })
        ]
      }, v)),
      o[e] && /* @__PURE__ */ k.jsx("span", { className: r == null ? void 0 : r.error, children: (f = o[e]) == null ? void 0 : f.message })
    ]
  });
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
  return /* @__PURE__ */ k.jsxs(k.Fragment, {
    children: [
      a.map((_, v) => /* @__PURE__ */ k.jsxs("div", {
        className: r == null ? void 0 : r.container, children: [
      /* @__PURE__ */ k.jsx(
          "input",
          {
            id: `form-${e}-${v}`,
            ...s(e),
            type: "radio",
            value: _.value,
            className: r == null ? void 0 : r.radio,
            ...n
          }
        ),
      /* @__PURE__ */ k.jsx("label", { htmlFor: `form-${e}-${v}`, className: r == null ? void 0 : r.label, children: _.label })
        ]
      }, v)),
      o[e] && /* @__PURE__ */ k.jsx("span", { className: r == null ? void 0 : r.error, children: (f = o[e]) == null ? void 0 : f.message })
    ]
  });
}, Lt = ({
  name: e,
  options: a,
  label: r,
  validation: n,
  classes: s,
  ...o
}) => {
  var x;
  const {
    register: f,
    formState: { errors: _ }
  } = be(), v = `form-${e}`;
  return /* @__PURE__ */ k.jsxs("div", {
    className: s == null ? void 0 : s.container, children: [
      r && /* @__PURE__ */ k.jsx("label", { htmlFor: v, className: s == null ? void 0 : s.label, children: r }),
    /* @__PURE__ */ k.jsx(
        "select",
        {
          id: v,
          ...f(e, n),
          className: s == null ? void 0 : s.select,
          ...o,
          "aria-invalid": _[e] ? "true" : "false",
          "aria-describedby": `${v}-error`,
          children: a.map((R, S) => /* @__PURE__ */ k.jsx("option", { value: R.value, className: s == null ? void 0 : s.option, children: R.label }, S))
        }
      ),
      _[e] && /* @__PURE__ */ k.jsx("span", { id: `${v}-error`, className: s == null ? void 0 : s.error, children: (x = _[e]) == null ? void 0 : x.message })
    ]
  });
}, Er = {
  text: qe,
  password: qe,
  telephone: qe,
  email: qe,
  select: Lt,
  radio: It,
  checkbox: Nt
}, $t = (e, a) => {
  e in Er ? console.warn(
    `Input type "${e}" is already registered. Overriding existing component.`
  ) : console.log(`Registering new input type "${e}".`), Er[e] = a;
}, Ut = (e) => Er[e], Mt = ({ type: e, ...a }) => {
  const r = Ut(e) || qe;
  return /* @__PURE__ */ k.jsx(r, { type: e, ...a });
}, Bt = (e = []) => {
  const a = {};
  return e.forEach((r) => {
    r.defaultValue && (a[r.name] = r.defaultValue);
  }), a;
}, Wt = (e, a) => {
  var n;
  const r = { ...a };
  return (n = a.conditions) == null || n.forEach((s) => {
    const o = s.when;
    (typeof o == "function" ? o(e) : !1) && Object.assign(r, s.then(a));
  }), r;
}, Gt = ({
  fieldsInput: e,
  onSubmit: a,
  resolver: r,
  classes: n
}) => {
  const s = Bt(
    e
  ), o = Pt({
    resolver: r,
    defaultValues: s
  }), f = o.watch();
  return /* @__PURE__ */ k.jsx(mt, {
    ...o, children: /* @__PURE__ */ k.jsxs(
      "form",
      {
        onSubmit: o.handleSubmit(a),
        className: n == null ? void 0 : n.formContainer,
        children: [
          e.map((_, v) => {
            const x = Wt(f, _);
            return x != null && x.hide ? null : /* @__PURE__ */ k.jsx(
              Mt,
              {
                type: x.type,
                name: x.name,
                label: x.label,
                options: x == null ? void 0 : x.options,
                validation: x.validation,
                classes: x == null ? void 0 : x.classes
              },
              v
            );
          }),
        /* @__PURE__ */ k.jsx("button", { type: "submit", className: n == null ? void 0 : n.submitButton, children: "Submit" })
        ]
      }
    )
  });
}, Yt = ({
  name: e,
  classes: a,
  label: r,
  ...n
}) => {
  const { control: s } = be(), o = `switch-${e}`;
  return /* @__PURE__ */ k.jsxs("div", {
    className: `d-switch-container ${(a == null ? void 0 : a.switchContainer) ?? ""}`, children: [
      r && /* @__PURE__ */ k.jsx(
        "label",
        {
          htmlFor: o,
          className: `d-switch-label ${(a == null ? void 0 : a.label) ?? ""}`,
          children: r
        }
      ),
    /* @__PURE__ */ k.jsx(
        wt,
        {
          name: e,
          control: s,
          render: ({ field: { onChange: f, onBlur: _, value: v = !1, ref: x } }) => /* @__PURE__ */ k.jsxs(k.Fragment, {
            children: [
          /* @__PURE__ */ k.jsx(
              "input",
              {
                id: o,
                onChange: f,
                onBlur: _,
                ref: x,
                className: `d-switch-input ${(a == null ? void 0 : a.input) ?? ""}`,
                ...n,
                checked: v === !0,
                type: "checkbox",
                "aria-checked": v ? "true" : "false"
              }
            ),
          /* @__PURE__ */ k.jsx(
              "label",
              {
                htmlFor: o,
                className: `d-switch ${(a == null ? void 0 : a.switch) ?? ""} ${(a == null ? void 0 : a.activeSwitch) ?? ""}`,
                children: /* @__PURE__ */ k.jsx(
                  "span",
                  {
                    role: "button",
                    className: `d-switch-button ${(a == null ? void 0 : a.button) ?? ""} ${(a == null ? void 0 : a.activeButton) ?? ""}`
                  }
                )
              }
            )
            ]
          })
        }
      )
    ]
  });
};
$t("switch", Yt);
export {
  Gt as ReactForm,
  $t as addtype,
  Ut as getInputComponent
};
