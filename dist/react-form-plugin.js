import "./index.css";
import j from "react";
var Er = { exports: {} }, Be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function gt() {
  return Nr || (Nr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = j, a = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), _ = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), U = Symbol.iterator, me = "@@iterator";
    function ve(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = U && t[U] || t[me];
      return typeof c == "function" ? c : null;
    }
    var ee = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(t) {
      {
        for (var c = arguments.length, g = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
          g[w - 1] = arguments[w];
        z("error", t, g);
      }
    }
    function z(t, c, g) {
      {
        var w = ee.ReactDebugCurrentFrame, O = w.getStackAddendum();
        O !== "" && (c += "%s", g = g.concat([O]));
        var P = g.map(function(k) {
          return String(k);
        });
        P.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, P);
      }
    }
    var ie = !1, M = !1, Se = !1, pe = !1, xe = !1, le;
    le = Symbol.for("react.module.reference");
    function X(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === u || xe || t === s || t === x || t === R || pe || t === q || ie || M || Se || typeof t == "object" && t !== null && (t.$$typeof === E || t.$$typeof === F || t.$$typeof === f || t.$$typeof === _ || t.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === le || t.getModuleId !== void 0));
    }
    function Ve(t, c, g) {
      var w = t.displayName;
      if (w)
        return w;
      var O = c.displayName || c.name || "";
      return O !== "" ? g + "(" + O + ")" : g;
    }
    function S(t) {
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
        case u:
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
            return S(c) + ".Consumer";
          case f:
            var g = t;
            return S(g._context) + ".Provider";
          case y:
            return Ve(t, t.render, "ForwardRef");
          case F:
            var w = t.displayName || null;
            return w !== null ? w : V(t.type) || "Memo";
          case E: {
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
    var D = Object.assign, I = 0, Z, K, ye, oe, Ee, Pe, Ae;
    function Ne() {
    }
    Ne.__reactDisabledLog = !0;
    function Ke() {
      {
        if (I === 0) {
          Z = console.log, K = console.info, ye = console.warn, oe = console.error, Ee = console.group, Pe = console.groupCollapsed, Ae = console.groupEnd;
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
    function lr() {
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
              value: ye
            }),
            error: D({}, t, {
              value: oe
            }),
            group: D({}, t, {
              value: Ee
            }),
            groupCollapsed: D({}, t, {
              value: Pe
            }),
            groupEnd: D({}, t, {
              value: Ae
            })
          });
        }
        I < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ce = ee.ReactCurrentDispatcher, Ie;
    function he(t, c, g) {
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
    var ke = !1, ge;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new ze();
    }
    function Xe(t, c) {
      if (!t || ke)
        return "";
      {
        var g = ge.get(t);
        if (g !== void 0)
          return g;
      }
      var w;
      ke = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = Ce.current, Ce.current = null, Ke();
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
              w = ce;
            }
            Reflect.construct(t, [], k);
          } else {
            try {
              k.call();
            } catch (ce) {
              w = ce;
            }
            t.call(k.prototype);
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
`), L = A.length - 1, W = G.length - 1; L >= 1 && W >= 0 && A[L] !== G[W]; )
            W--;
          for (; L >= 1 && W >= 0; L--, W--)
            if (A[L] !== G[W]) {
              if (L !== 1 || W !== 1)
                do
                  if (L--, W--, W < 0 || A[L] !== G[W]) {
                    var re = `
` + A[L].replace(" at new ", " at ");
                    return t.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", t.displayName)), typeof t == "function" && ge.set(t, re), re;
                  }
                while (L >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        ke = !1, Ce.current = P, lr(), Error.prepareStackTrace = O;
      }
      var Te = t ? t.displayName || t.name : "", Pr = Te ? he(Te) : "";
      return typeof t == "function" && ge.set(t, Pr), Pr;
    }
    function Ze(t, c, g) {
      return Xe(t, !1);
    }
    function fr(t) {
      var c = t.prototype;
      return !!(c && c.isReactComponent);
    }
    function we(t, c, g) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Xe(t, fr(t));
      if (typeof t == "string")
        return he(t);
      switch (t) {
        case x:
          return he("Suspense");
        case R:
          return he("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case y:
            return Ze(t.render);
          case F:
            return we(t.type, c, g);
          case E: {
            var w = t, O = w._payload, P = w._init;
            try {
              return we(P(O), c, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, cr = {}, dr = ee.ReactDebugCurrentFrame;
    function $e(t) {
      if (t) {
        var c = t._owner, g = we(t.type, t._source, c ? c.type : null);
        dr.setExtraStackFrame(g);
      } else
        dr.setExtraStackFrame(null);
    }
    function i(t, c, g, w, O) {
      {
        var P = Function.call.bind(Re);
        for (var k in t)
          if (P(t, k)) {
            var A = void 0;
            try {
              if (typeof t[k] != "function") {
                var G = Error((w || "React class") + ": " + g + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              A = t[k](c, k, w, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              A = L;
            }
            A && !(A instanceof Error) && ($e(O), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", g, k, typeof A), $e(null)), A instanceof Error && !(A.message in cr) && (cr[A.message] = !0, $e(O), p("Failed %s type: %s", g, A.message), $e(null));
          }
      }
    }
    var o = Array.isArray;
    function l(t) {
      return o(t);
    }
    function b(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, g = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return g;
      }
    }
    function v(t) {
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
      if (v(t))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", b(t)), d(t);
    }
    var T = ee.ReactCurrentOwner, B = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Q, fe, Le;
    Le = {};
    function Ue(t) {
      if (Re.call(t, "ref")) {
        var c = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Me(t) {
      if (Re.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function vr(t, c) {
      if (typeof t.ref == "string" && T.current && c && T.current.stateNode !== c) {
        var g = V(T.current.type);
        Le[g] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(T.current.type), t.ref), Le[g] = !0);
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
    function yr(t, c) {
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
    var er = function(t, c, g, w, O, P, k) {
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
        value: w
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function ot(t, c, g, w, O) {
      {
        var P, k = {}, A = null, G = null;
        g !== void 0 && (m(g), A = "" + g), Me(c) && (m(c.key), A = "" + c.key), Ue(c) && (G = c.ref, vr(c, O));
        for (P in c)
          Re.call(c, P) && !B.hasOwnProperty(P) && (k[P] = c[P]);
        if (t && t.defaultProps) {
          var L = t.defaultProps;
          for (P in L)
            k[P] === void 0 && (k[P] = L[P]);
        }
        if (A || G) {
          var W = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          A && Qe(k, W), G && yr(k, W);
        }
        return er(t, A, G, O, w, T.current, k);
      }
    }
    var hr = ee.ReactCurrentOwner, Cr = ee.ReactDebugCurrentFrame;
    function De(t) {
      if (t) {
        var c = t._owner, g = we(t.type, t._source, c ? c.type : null);
        Cr.setExtraStackFrame(g);
      } else
        Cr.setExtraStackFrame(null);
    }
    var gr;
    gr = !1;
    function br(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function kr() {
      {
        if (hr.current) {
          var t = V(hr.current.type);
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
    var Dr = {};
    function lt(t) {
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
    function Tr(t, c) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var g = lt(c);
        if (Dr[g])
          return;
        Dr[g] = !0;
        var w = "";
        t && t._owner && t._owner !== hr.current && (w = " It was passed a child from " + V(t._owner.type) + "."), De(t), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, w), De(null);
      }
    }
    function Or(t, c) {
      {
        if (typeof t != "object")
          return;
        if (l(t))
          for (var g = 0; g < t.length; g++) {
            var w = t[g];
            br(w) && Tr(w, c);
          }
        else if (br(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var O = ve(t);
          if (typeof O == "function" && O !== t.entries)
            for (var P = O.call(t), k; !(k = P.next()).done; )
              br(k.value) && Tr(k.value, c);
        }
      }
    }
    function ft(t) {
      {
        var c = t.type;
        if (c == null || typeof c == "string")
          return;
        var g;
        if (typeof c == "function")
          g = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === F))
          g = c.propTypes;
        else
          return;
        if (g) {
          var w = V(c);
          i(g, t.props, "prop", w, t);
        } else if (c.PropTypes !== void 0 && !gr) {
          gr = !0;
          var O = V(c);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ct(t) {
      {
        for (var c = Object.keys(t.props), g = 0; g < c.length; g++) {
          var w = c[g];
          if (w !== "children" && w !== "key") {
            De(t), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), De(null);
            break;
          }
        }
        t.ref !== null && (De(t), p("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    function jr(t, c, g, w, O, P) {
      {
        var k = X(t);
        if (!k) {
          var A = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = ut(O);
          G ? A += G : A += kr();
          var L;
          t === null ? L = "null" : l(t) ? L = "array" : t !== void 0 && t.$$typeof === a ? (L = "<" + (V(t.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : L = typeof t, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, A);
        }
        var W = ot(t, c, g, O, P);
        if (W == null)
          return W;
        if (k) {
          var re = c.children;
          if (re !== void 0)
            if (w)
              if (l(re)) {
                for (var Te = 0; Te < re.length; Te++)
                  Or(re[Te], t);
                Object.freeze && Object.freeze(re);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Or(re, t);
        }
        return t === n ? ct(W) : ft(W), W;
      }
    }
    function dt(t, c, g) {
      return jr(t, c, g, !0);
    }
    function vt(t, c, g) {
      return jr(t, c, g, !1);
    }
    var yt = vt, ht = dt;
    Be.Fragment = n, Be.jsx = yt, Be.jsxs = ht;
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
var Ir;
function bt() {
  if (Ir)
    return We;
  Ir = 1;
  var e = j, a = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(_, y, x) {
    var R, F = {}, E = null, q = null;
    x !== void 0 && (E = "" + x), y.key !== void 0 && (E = "" + y.key), y.ref !== void 0 && (q = y.ref);
    for (R in y)
      n.call(y, R) && !u.hasOwnProperty(R) && (F[R] = y[R]);
    if (_ && _.defaultProps)
      for (R in y = _.defaultProps, y)
        F[R] === void 0 && (F[R] = y[R]);
    return { $$typeof: a, type: _, key: E, ref: q, props: F, _owner: s.current };
  }
  return We.Fragment = r, We.jsx = f, We.jsxs = f, We;
}
process.env.NODE_ENV === "production" ? Er.exports = bt() : Er.exports = gt();
var C = Er.exports, Ge = (e) => e.type === "checkbox", je = (e) => e instanceof Date, J = (e) => e == null;
const Hr = (e) => typeof e == "object";
var Y = (e) => !J(e) && !Array.isArray(e) && Hr(e) && !je(e), Gr = (e) => Y(e) && e.target ? Ge(e.target) ? e.target.checked : e.target.value : e, _t = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Jr = (e, a) => e.has(_t(a)), mt = (e) => {
  const a = e.constructor && e.constructor.prototype;
  return Y(a) && a.hasOwnProperty("isPrototypeOf");
}, Rr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ae(e) {
  let a;
  const r = Array.isArray(e);
  if (e instanceof Date)
    a = new Date(e);
  else if (e instanceof Set)
    a = new Set(e);
  else if (!(Rr && (e instanceof Blob || e instanceof FileList)) && (r || Y(e)))
    if (a = r ? [] : {}, !r && !mt(e))
      a = e;
    else
      for (const n in e)
        e.hasOwnProperty(n) && (a[n] = ae(e[n]));
  else
    return e;
  return a;
}
var Je = (e) => Array.isArray(e) ? e.filter(Boolean) : [], $ = (e) => e === void 0, h = (e, a, r) => {
  if (!a || !Y(e))
    return r;
  const n = Je(a.split(/[,[\].]+?/)).reduce((s, u) => J(s) ? s : s[u], e);
  return $(n) || n === e ? $(e[a]) ? r : e[a] : n;
}, ne = (e) => typeof e == "boolean";
const nr = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, se = {
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
}, Kr = j.createContext(null), _e = () => j.useContext(Kr), pt = (e) => {
  const { children: a, ...r } = e;
  return j.createElement(Kr.Provider, { value: r }, a);
};
var zr = (e, a, r, n = !0) => {
  const s = {
    defaultValues: a._defaultValues
  };
  for (const u in e)
    Object.defineProperty(s, u, {
      get: () => {
        const f = u;
        return a._proxyFormState[f] !== se.all && (a._proxyFormState[f] = !n || se.all), r && (r[f] = !0), e[f];
      }
    });
  return s;
}, te = (e) => Y(e) && !Object.keys(e).length, Xr = (e, a, r, n) => {
  r(e);
  const { name: s, ...u } = e;
  return te(u) || Object.keys(u).length >= Object.keys(a).length || Object.keys(u).find((f) => a[f] === (!n || se.all));
}, rr = (e) => Array.isArray(e) ? e : [e], Zr = (e, a, r) => !e || !a || e === a || rr(e).some((n) => n && (r ? n === a : n.startsWith(a) || a.startsWith(n)));
function Fr(e) {
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
  const a = _e(), { control: r = a.control, disabled: n, name: s, exact: u } = e || {}, [f, _] = j.useState(r._formState), y = j.useRef(!0), x = j.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), R = j.useRef(s);
  return R.current = s, Fr({
    disabled: n,
    next: (F) => y.current && Zr(R.current, F.name, u) && Xr(F, x.current, r._updateFormState) && _({
      ...r._formState,
      ...F
    }),
    subject: r._subjects.state
  }), j.useEffect(() => (y.current = !0, x.current.isValid && r._updateValid(!0), () => {
    y.current = !1;
  }), [r]), zr(f, r, x.current, !1);
}
var ue = (e) => typeof e == "string", Qr = (e, a, r, n, s) => ue(e) ? (n && a.watch.add(e), h(r, e, s)) : Array.isArray(e) ? e.map((u) => (n && a.watch.add(u), h(r, u))) : (n && (a.watchAll = !0), r);
function Et(e) {
  const a = _e(), { control: r = a.control, name: n, defaultValue: s, disabled: u, exact: f } = e || {}, _ = j.useRef(n);
  _.current = n, Fr({
    disabled: u,
    subject: r._subjects.values,
    next: (R) => {
      Zr(_.current, R.name, f) && x(ae(Qr(_.current, r._names, R.values || r._formValues, !1, s)));
    }
  });
  const [y, x] = j.useState(r._getWatch(n, s));
  return j.useEffect(() => r._removeUnmounted()), y;
}
var Sr = (e) => /^\w*$/.test(e), et = (e) => Je(e.replace(/["|']|\]/g, "").split(/\.|\[/)), N = (e, a, r) => {
  let n = -1;
  const s = Sr(a) ? [a] : et(a), u = s.length, f = u - 1;
  for (; ++n < u; ) {
    const _ = s[n];
    let y = r;
    if (n !== f) {
      const x = e[_];
      y = Y(x) || Array.isArray(x) ? x : isNaN(+s[n + 1]) ? {} : [];
    }
    e[_] = y, e = e[_];
  }
  return e;
};
function wt(e) {
  const a = _e(), { name: r, disabled: n, control: s = a.control, shouldUnregister: u } = e, f = Jr(s._names.array, r), _ = Et({
    control: s,
    name: r,
    defaultValue: h(s._formValues, r, h(s._defaultValues, r, e.defaultValue)),
    exact: !0
  }), y = xt({
    control: s,
    name: r
  }), x = j.useRef(s.register(r, {
    ...e.rules,
    value: _,
    ...ne(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return j.useEffect(() => {
    const R = s._options.shouldUnregister || u, F = (E, q) => {
      const U = h(s._fields, E);
      U && (U._f.mount = q);
    };
    if (F(r, !0), R) {
      const E = ae(h(s._options.defaultValues, r));
      N(s._defaultValues, r, E), $(h(s._formValues, r)) && N(s._formValues, r, E);
    }
    return () => {
      (f ? R && !s._state.action : R) ? s.unregister(r) : F(r, !1);
    };
  }, [r, s, f, u]), j.useEffect(() => {
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
      ...ne(n) || ne(y.disabled) ? { disabled: y.disabled || n } : {},
      onChange: j.useCallback((R) => x.current.onChange({
        target: {
          value: Gr(R),
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
        const F = h(s._fields, r);
        F && R && (F._f.ref = {
          focus: () => R.focus(),
          select: () => R.select(),
          setCustomValidity: (E) => R.setCustomValidity(E),
          reportValidity: () => R.reportValidity()
        });
      }
    },
    formState: y,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!h(y.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!h(y.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!h(y.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => h(y.errors, r)
      }
    })
  };
}
const Rt = (e) => e.render(wt(e));
var Ft = (e, a, r, n, s) => a ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [n]: s || !0
  }
} : {}, $r = (e) => ({
  isOnSubmit: !e || e === se.onSubmit,
  isOnBlur: e === se.onBlur,
  isOnChange: e === se.onChange,
  isOnAll: e === se.all,
  isOnTouch: e === se.onTouched
}), Lr = (e, a, r) => !r && (a.watchAll || a.watch.has(e) || [...a.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const He = (e, a, r, n) => {
  for (const s of r || Object.keys(e)) {
    const u = h(e, s);
    if (u) {
      const { _f: f, ..._ } = u;
      if (f) {
        if (f.refs && f.refs[0] && a(f.refs[0], s) && !n)
          break;
        if (f.ref && a(f.ref, f.name) && !n)
          break;
        He(_, a);
      } else
        Y(_) && He(_, a);
    }
  }
};
var St = (e, a, r) => {
  const n = Je(h(e, r));
  return N(n, "root", a[r]), N(e, r, n), e;
}, Vr = (e) => e.type === "file", be = (e) => typeof e == "function", ir = (e) => {
  if (!Rr)
    return !1;
  const a = e ? e.ownerDocument : 0;
  return e instanceof (a && a.defaultView ? a.defaultView.HTMLElement : HTMLElement);
}, tr = (e) => ue(e), Ar = (e) => e.type === "radio", ar = (e) => e instanceof RegExp;
const Ur = {
  value: !1,
  isValid: !1
}, Mr = { value: !0, isValid: !0 };
var rt = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const a = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: a, isValid: !!a.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !$(e[0].attributes.value) ? $(e[0].value) || e[0].value === "" ? Mr : { value: e[0].value, isValid: !0 } : Mr
    ) : Ur;
  }
  return Ur;
};
const Br = {
  isValid: !1,
  value: null
};
var tt = (e) => Array.isArray(e) ? e.reduce((a, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : a, Br) : Br;
function Wr(e, a, r = "validate") {
  if (tr(e) || Array.isArray(e) && e.every(tr) || ne(e) && !e)
    return {
      type: r,
      message: tr(e) ? e : "",
      ref: a
    };
}
var Oe = (e) => Y(e) && !ar(e) ? e : {
  value: e,
  message: ""
}, Yr = async (e, a, r, n, s) => {
  const { ref: u, refs: f, required: _, maxLength: y, minLength: x, min: R, max: F, pattern: E, validate: q, name: U, valueAsNumber: me, mount: ve, disabled: ee } = e._f, p = h(a, U);
  if (!ve || ee)
    return {};
  const z = f ? f[0] : u, ie = (S) => {
    n && z.reportValidity && (z.setCustomValidity(ne(S) ? "" : S || ""), z.reportValidity());
  }, M = {}, Se = Ar(u), pe = Ge(u), xe = Se || pe, le = (me || Vr(u)) && $(u.value) && $(p) || ir(u) && u.value === "" || p === "" || Array.isArray(p) && !p.length, X = Ft.bind(null, U, r, M), Ve = (S, V, D, I = de.maxLength, Z = de.minLength) => {
    const K = S ? V : D;
    M[U] = {
      type: S ? I : Z,
      message: K,
      ref: u,
      ...X(S ? I : Z, K)
    };
  };
  if (s ? !Array.isArray(p) || !p.length : _ && (!xe && (le || J(p)) || ne(p) && !p || pe && !rt(f).isValid || Se && !tt(f).isValid)) {
    const { value: S, message: V } = tr(_) ? { value: !!_, message: _ } : Oe(_);
    if (S && (M[U] = {
      type: de.required,
      message: V,
      ref: z,
      ...X(de.required, V)
    }, !r))
      return ie(V), M;
  }
  if (!le && (!J(R) || !J(F))) {
    let S, V;
    const D = Oe(F), I = Oe(R);
    if (!J(p) && !isNaN(p)) {
      const Z = u.valueAsNumber || p && +p;
      J(D.value) || (S = Z > D.value), J(I.value) || (V = Z < I.value);
    } else {
      const Z = u.valueAsDate || new Date(p), K = (Ee) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Ee), ye = u.type == "time", oe = u.type == "week";
      ue(D.value) && p && (S = ye ? K(p) > K(D.value) : oe ? p > D.value : Z > new Date(D.value)), ue(I.value) && p && (V = ye ? K(p) < K(I.value) : oe ? p < I.value : Z < new Date(I.value));
    }
    if ((S || V) && (Ve(!!S, D.message, I.message, de.max, de.min), !r))
      return ie(M[U].message), M;
  }
  if ((y || x) && !le && (ue(p) || s && Array.isArray(p))) {
    const S = Oe(y), V = Oe(x), D = !J(S.value) && p.length > +S.value, I = !J(V.value) && p.length < +V.value;
    if ((D || I) && (Ve(D, S.message, V.message), !r))
      return ie(M[U].message), M;
  }
  if (E && !le && ue(p)) {
    const { value: S, message: V } = Oe(E);
    if (ar(S) && !p.match(S) && (M[U] = {
      type: de.pattern,
      message: V,
      ref: u,
      ...X(de.pattern, V)
    }, !r))
      return ie(V), M;
  }
  if (q) {
    if (be(q)) {
      const S = await q(p, a), V = Wr(S, z);
      if (V && (M[U] = {
        ...V,
        ...X(de.validate, V.message)
      }, !r))
        return ie(V.message), M;
    } else if (Y(q)) {
      let S = {};
      for (const V in q) {
        if (!te(S) && !r)
          break;
        const D = Wr(await q[V](p, a), z, V);
        D && (S = {
          ...D,
          ...X(V, D.message)
        }, ie(D.message), r && (M[U] = S));
      }
      if (!te(S) && (M[U] = {
        ref: z,
        ...S
      }, !r))
        return M;
    }
  }
  return ie(!0), M;
};
function Vt(e, a) {
  const r = a.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    e = $(e) ? n++ : e[a[n++]];
  return e;
}
function At(e) {
  for (const a in e)
    if (e.hasOwnProperty(a) && !$(e[a]))
      return !1;
  return !0;
}
function H(e, a) {
  const r = Array.isArray(a) ? a : Sr(a) ? [a] : et(a), n = r.length === 1 ? e : Vt(e, r), s = r.length - 1, u = r[s];
  return n && delete n[u], s !== 0 && (Y(n) && te(n) || Array.isArray(n) && At(n)) && H(e, r.slice(0, -1)), e;
}
var _r = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (s) => {
      for (const u of e)
        u.next && u.next(s);
    },
    subscribe: (s) => (e.push(s), {
      unsubscribe: () => {
        e = e.filter((u) => u !== s);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, sr = (e) => J(e) || !Hr(e);
function Fe(e, a) {
  if (sr(e) || sr(a))
    return e === a;
  if (je(e) && je(a))
    return e.getTime() === a.getTime();
  const r = Object.keys(e), n = Object.keys(a);
  if (r.length !== n.length)
    return !1;
  for (const s of r) {
    const u = e[s];
    if (!n.includes(s))
      return !1;
    if (s !== "ref") {
      const f = a[s];
      if (je(u) && je(f) || Y(u) && Y(f) || Array.isArray(u) && Array.isArray(f) ? !Fe(u, f) : u !== f)
        return !1;
    }
  }
  return !0;
}
var nt = (e) => e.type === "select-multiple", Ct = (e) => Ar(e) || Ge(e), mr = (e) => ir(e) && e.isConnected, it = (e) => {
  for (const a in e)
    if (be(e[a]))
      return !0;
  return !1;
};
function or(e, a = {}) {
  const r = Array.isArray(e);
  if (Y(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || Y(e[n]) && !it(e[n]) ? (a[n] = Array.isArray(e[n]) ? [] : {}, or(e[n], a[n])) : J(e[n]) || (a[n] = !0);
  return a;
}
function at(e, a, r) {
  const n = Array.isArray(e);
  if (Y(e) || n)
    for (const s in e)
      Array.isArray(e[s]) || Y(e[s]) && !it(e[s]) ? $(a) || sr(r[s]) ? r[s] = Array.isArray(e[s]) ? or(e[s], []) : { ...or(e[s]) } : at(e[s], J(a) ? {} : a[s], r[s]) : r[s] = !Fe(e[s], a[s]);
  return r;
}
var pr = (e, a) => at(e, a, or(a)), st = (e, { valueAsNumber: a, valueAsDate: r, setValueAs: n }) => $(e) ? e : a ? e === "" ? NaN : e && +e : r && ue(e) ? new Date(e) : n ? n(e) : e;
function xr(e) {
  const a = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : a.disabled))
    return Vr(a) ? a.files : Ar(a) ? tt(e.refs).value : nt(a) ? [...a.selectedOptions].map(({ value: r }) => r) : Ge(a) ? rt(e.refs).value : st($(a.value) ? e.ref.value : a.value, e);
}
var kt = (e, a, r, n) => {
  const s = {};
  for (const u of e) {
    const f = h(a, u);
    f && N(s, u, f._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: n
  };
}, Ye = (e) => $(e) ? e : ar(e) ? e.source : Y(e) ? ar(e.value) ? e.value.source : e.value : e, Dt = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function qr(e, a, r) {
  const n = h(e, r);
  if (n || Sr(r))
    return {
      error: n,
      name: r
    };
  const s = r.split(".");
  for (; s.length; ) {
    const u = s.join("."), f = h(a, u), _ = h(e, u);
    if (f && !Array.isArray(f) && r !== u)
      return { name: r };
    if (_ && _.type)
      return {
        name: u,
        error: _
      };
    s.pop();
  }
  return {
    name: r
  };
}
var Tt = (e, a, r, n, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(a || e) : (r ? n.isOnBlur : s.isOnBlur) ? !e : (r ? n.isOnChange : s.isOnChange) ? e : !0, Ot = (e, a) => !Je(h(e, a)).length && H(e, a);
const jt = {
  mode: se.onSubmit,
  reValidateMode: se.onChange,
  shouldFocusError: !0
};
function Pt(e = {}, a) {
  let r = {
    ...jt,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: be(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: !1
  }, s = {}, u = Y(r.defaultValues) || Y(r.values) ? ae(r.defaultValues || r.values) || {} : {}, f = r.shouldUnregister ? {} : ae(u), _ = {
    action: !1,
    mount: !1,
    watch: !1
  }, y = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, x, R = 0;
  const F = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, E = {
    values: _r(),
    array: _r(),
    state: _r()
  }, q = e.resetOptions && e.resetOptions.keepDirtyValues, U = $r(r.mode), me = $r(r.reValidateMode), ve = r.criteriaMode === se.all, ee = (i) => (o) => {
    clearTimeout(R), R = setTimeout(i, o);
  }, p = async (i) => {
    if (F.isValid || i) {
      const o = r.resolver ? te((await X()).errors) : await S(s, !0);
      o !== n.isValid && E.state.next({
        isValid: o
      });
    }
  }, z = (i) => F.isValidating && E.state.next({
    isValidating: i
  }), ie = (i, o = [], l, b, v = !0, d = !0) => {
    if (b && l) {
      if (_.action = !0, d && Array.isArray(h(s, i))) {
        const m = l(h(s, i), b.argA, b.argB);
        v && N(s, i, m);
      }
      if (d && Array.isArray(h(n.errors, i))) {
        const m = l(h(n.errors, i), b.argA, b.argB);
        v && N(n.errors, i, m), Ot(n.errors, i);
      }
      if (F.touchedFields && d && Array.isArray(h(n.touchedFields, i))) {
        const m = l(h(n.touchedFields, i), b.argA, b.argB);
        v && N(n.touchedFields, i, m);
      }
      F.dirtyFields && (n.dirtyFields = pr(u, f)), E.state.next({
        name: i,
        isDirty: D(i, o),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      N(f, i, o);
  }, M = (i, o) => {
    N(n.errors, i, o), E.state.next({
      errors: n.errors
    });
  }, Se = (i) => {
    n.errors = i, E.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, pe = (i, o, l, b) => {
    const v = h(s, i);
    if (v) {
      const d = h(f, i, $(l) ? h(u, i) : l);
      $(d) || b && b.defaultChecked || o ? N(f, i, o ? d : xr(v._f)) : K(i, d), _.mount && p();
    }
  }, xe = (i, o, l, b, v) => {
    let d = !1, m = !1;
    const T = {
      name: i
    }, B = !!(h(s, i) && h(s, i)._f.disabled);
    if (!l || b) {
      F.isDirty && (m = n.isDirty, n.isDirty = T.isDirty = D(), d = m !== T.isDirty);
      const Q = B || Fe(h(u, i), o);
      m = !!(!B && h(n.dirtyFields, i)), Q || B ? H(n.dirtyFields, i) : N(n.dirtyFields, i, !0), T.dirtyFields = n.dirtyFields, d = d || F.dirtyFields && m !== !Q;
    }
    if (l) {
      const Q = h(n.touchedFields, i);
      Q || (N(n.touchedFields, i, l), T.touchedFields = n.touchedFields, d = d || F.touchedFields && Q !== l);
    }
    return d && v && E.state.next(T), d ? T : {};
  }, le = (i, o, l, b) => {
    const v = h(n.errors, i), d = F.isValid && ne(o) && n.isValid !== o;
    if (e.delayError && l ? (x = ee(() => M(i, l)), x(e.delayError)) : (clearTimeout(R), x = null, l ? N(n.errors, i, l) : H(n.errors, i)), (l ? !Fe(v, l) : v) || !te(b) || d) {
      const m = {
        ...b,
        ...d && ne(o) ? { isValid: o } : {},
        errors: n.errors,
        name: i
      };
      n = {
        ...n,
        ...m
      }, E.state.next(m);
    }
    z(!1);
  }, X = async (i) => r.resolver(f, r.context, kt(i || y.mount, s, r.criteriaMode, r.shouldUseNativeValidation)), Ve = async (i) => {
    const { errors: o } = await X(i);
    if (i)
      for (const l of i) {
        const b = h(o, l);
        b ? N(n.errors, l, b) : H(n.errors, l);
      }
    else
      n.errors = o;
    return o;
  }, S = async (i, o, l = {
    valid: !0
  }) => {
    for (const b in i) {
      const v = i[b];
      if (v) {
        const { _f: d, ...m } = v;
        if (d) {
          const T = y.array.has(d.name), B = await Yr(v, f, ve, r.shouldUseNativeValidation && !o, T);
          if (B[d.name] && (l.valid = !1, o))
            break;
          !o && (h(B, d.name) ? T ? St(n.errors, B, d.name) : N(n.errors, d.name, B[d.name]) : H(n.errors, d.name));
        }
        m && await S(m, o, l);
      }
    }
    return l.valid;
  }, V = () => {
    for (const i of y.unMount) {
      const o = h(s, i);
      o && (o._f.refs ? o._f.refs.every((l) => !mr(l)) : !mr(o._f.ref)) && he(i);
    }
    y.unMount = /* @__PURE__ */ new Set();
  }, D = (i, o) => (i && o && N(f, i, o), !Fe(Ne(), u)), I = (i, o, l) => Qr(i, y, {
    ..._.mount ? f : $(o) ? u : ue(i) ? { [i]: o } : o
  }, l, o), Z = (i) => Je(h(_.mount ? f : u, i, e.shouldUnregister ? h(u, i, []) : [])), K = (i, o, l = {}) => {
    const b = h(s, i);
    let v = o;
    if (b) {
      const d = b._f;
      d && (!d.disabled && N(f, i, st(o, d)), v = ir(d.ref) && J(o) ? "" : o, nt(d.ref) ? [...d.ref.options].forEach((m) => m.selected = v.includes(m.value)) : d.refs ? Ge(d.ref) ? d.refs.length > 1 ? d.refs.forEach((m) => (!m.defaultChecked || !m.disabled) && (m.checked = Array.isArray(v) ? !!v.find((T) => T === m.value) : v === m.value)) : d.refs[0] && (d.refs[0].checked = !!v) : d.refs.forEach((m) => m.checked = m.value === v) : Vr(d.ref) ? d.ref.value = "" : (d.ref.value = v, d.ref.type || E.values.next({
        name: i,
        values: { ...f }
      })));
    }
    (l.shouldDirty || l.shouldTouch) && xe(i, v, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && Ae(i);
  }, ye = (i, o, l) => {
    for (const b in o) {
      const v = o[b], d = `${i}.${b}`, m = h(s, d);
      (y.array.has(i) || !sr(v) || m && !m._f) && !je(v) ? ye(d, v, l) : K(d, v, l);
    }
  }, oe = (i, o, l = {}) => {
    const b = h(s, i), v = y.array.has(i), d = ae(o);
    N(f, i, d), v ? (E.array.next({
      name: i,
      values: { ...f }
    }), (F.isDirty || F.dirtyFields) && l.shouldDirty && E.state.next({
      name: i,
      dirtyFields: pr(u, f),
      isDirty: D(i, d)
    })) : b && !b._f && !J(d) ? ye(i, d, l) : K(i, d, l), Lr(i, y) && E.state.next({ ...n }), E.values.next({
      name: i,
      values: { ...f }
    }), !_.mount && a();
  }, Ee = async (i) => {
    const o = i.target;
    let l = o.name, b = !0;
    const v = h(s, l), d = () => o.type ? xr(v._f) : Gr(i), m = (T) => {
      b = Number.isNaN(T) || T === h(f, l, T);
    };
    if (v) {
      let T, B;
      const Q = d(), fe = i.type === nr.BLUR || i.type === nr.FOCUS_OUT, Le = !Dt(v._f) && !r.resolver && !h(n.errors, l) && !v._f.deps || Tt(fe, h(n.touchedFields, l), n.isSubmitted, me, U), Ue = Lr(l, y, fe);
      N(f, l, Q), fe ? (v._f.onBlur && v._f.onBlur(i), x && x(0)) : v._f.onChange && v._f.onChange(i);
      const Me = xe(l, Q, fe, !1), vr = !te(Me) || Ue;
      if (!fe && E.values.next({
        name: l,
        type: i.type,
        values: { ...f }
      }), Le)
        return F.isValid && p(), vr && E.state.next({ name: l, ...Ue ? {} : Me });
      if (!fe && Ue && E.state.next({ ...n }), z(!0), r.resolver) {
        const { errors: Qe } = await X([l]);
        if (m(Q), b) {
          const yr = qr(n.errors, s, l), er = qr(Qe, s, yr.name || l);
          T = er.error, l = er.name, B = te(Qe);
        }
      } else
        T = (await Yr(v, f, ve, r.shouldUseNativeValidation))[l], m(Q), b && (T ? B = !1 : F.isValid && (B = await S(s, !0)));
      b && (v._f.deps && Ae(v._f.deps), le(l, B, T, Me));
    }
  }, Pe = (i, o) => {
    if (h(n.errors, o) && i.focus)
      return i.focus(), 1;
  }, Ae = async (i, o = {}) => {
    let l, b;
    const v = rr(i);
    if (z(!0), r.resolver) {
      const d = await Ve($(i) ? i : v);
      l = te(d), b = i ? !v.some((m) => h(d, m)) : l;
    } else
      i ? (b = (await Promise.all(v.map(async (d) => {
        const m = h(s, d);
        return await S(m && m._f ? { [d]: m } : m);
      }))).every(Boolean), !(!b && !n.isValid) && p()) : b = l = await S(s);
    return E.state.next({
      ...!ue(i) || F.isValid && l !== n.isValid ? {} : { name: i },
      ...r.resolver || !i ? { isValid: l } : {},
      errors: n.errors,
      isValidating: !1
    }), o.shouldFocus && !b && He(s, Pe, i ? v : y.mount), b;
  }, Ne = (i) => {
    const o = {
      ...u,
      ..._.mount ? f : {}
    };
    return $(i) ? o : ue(i) ? h(o, i) : i.map((l) => h(o, l));
  }, Ke = (i, o) => ({
    invalid: !!h((o || n).errors, i),
    isDirty: !!h((o || n).dirtyFields, i),
    isTouched: !!h((o || n).touchedFields, i),
    error: h((o || n).errors, i)
  }), lr = (i) => {
    i && rr(i).forEach((o) => H(n.errors, o)), E.state.next({
      errors: i ? n.errors : {}
    });
  }, Ce = (i, o, l) => {
    const b = (h(s, i, { _f: {} })._f || {}).ref;
    N(n.errors, i, {
      ...o,
      ref: b
    }), E.state.next({
      name: i,
      errors: n.errors,
      isValid: !1
    }), l && l.shouldFocus && b && b.focus && b.focus();
  }, Ie = (i, o) => be(i) ? E.values.subscribe({
    next: (l) => i(I(void 0, o), l)
  }) : I(i, o, !0), he = (i, o = {}) => {
    for (const l of i ? rr(i) : y.mount)
      y.mount.delete(l), y.array.delete(l), o.keepValue || (H(s, l), H(f, l)), !o.keepError && H(n.errors, l), !o.keepDirty && H(n.dirtyFields, l), !o.keepTouched && H(n.touchedFields, l), !r.shouldUnregister && !o.keepDefaultValue && H(u, l);
    E.values.next({
      values: { ...f }
    }), E.state.next({
      ...n,
      ...o.keepDirty ? { isDirty: D() } : {}
    }), !o.keepIsValid && p();
  }, ke = ({ disabled: i, name: o, field: l, fields: b, value: v }) => {
    if (ne(i)) {
      const d = i ? void 0 : $(v) ? xr(l ? l._f : h(b, o)._f) : v;
      N(f, o, d), xe(o, d, !1, !1, !0);
    }
  }, ge = (i, o = {}) => {
    let l = h(s, i);
    const b = ne(o.disabled);
    return N(s, i, {
      ...l || {},
      _f: {
        ...l && l._f ? l._f : { ref: { name: i } },
        name: i,
        mount: !0,
        ...o
      }
    }), y.mount.add(i), l ? ke({
      field: l,
      disabled: o.disabled,
      name: i,
      value: o.value
    }) : pe(i, !0, o.value), {
      ...b ? { disabled: o.disabled } : {},
      ...r.progressive ? {
        required: !!o.required,
        min: Ye(o.min),
        max: Ye(o.max),
        minLength: Ye(o.minLength),
        maxLength: Ye(o.maxLength),
        pattern: Ye(o.pattern)
      } : {},
      name: i,
      onChange: Ee,
      onBlur: Ee,
      ref: (v) => {
        if (v) {
          ge(i, o), l = h(s, i);
          const d = $(v.value) && v.querySelectorAll && v.querySelectorAll("input,select,textarea")[0] || v, m = Ct(d), T = l._f.refs || [];
          if (m ? T.find((B) => B === d) : d === l._f.ref)
            return;
          N(s, i, {
            _f: {
              ...l._f,
              ...m ? {
                refs: [
                  ...T.filter(mr),
                  d,
                  ...Array.isArray(h(u, i)) ? [{}] : []
                ],
                ref: { type: d.type, name: i }
              } : { ref: d }
            }
          }), pe(i, !1, void 0, d);
        } else
          l = h(s, i, {}), l._f && (l._f.mount = !1), (r.shouldUnregister || o.shouldUnregister) && !(Jr(y.array, i) && _.action) && y.unMount.add(i);
      }
    };
  }, ze = () => r.shouldFocusError && He(s, Pe, y.mount), Xe = (i) => {
    ne(i) && (E.state.next({ disabled: i }), He(s, (o, l) => {
      let b = i;
      const v = h(s, l);
      v && ne(v._f.disabled) && (b || (b = v._f.disabled)), o.disabled = b;
    }, 0, !1));
  }, Ze = (i, o) => async (l) => {
    l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
    let b = ae(f);
    if (E.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: v, values: d } = await X();
      n.errors = v, b = d;
    } else
      await S(s);
    H(n.errors, "root"), te(n.errors) ? (E.state.next({
      errors: {}
    }), await i(b, l)) : (o && await o({ ...n.errors }, l), ze(), setTimeout(ze)), E.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: te(n.errors),
      submitCount: n.submitCount + 1,
      errors: n.errors
    });
  }, fr = (i, o = {}) => {
    h(s, i) && ($(o.defaultValue) ? oe(i, h(u, i)) : (oe(i, o.defaultValue), N(u, i, o.defaultValue)), o.keepTouched || H(n.touchedFields, i), o.keepDirty || (H(n.dirtyFields, i), n.isDirty = o.defaultValue ? D(i, h(u, i)) : D()), o.keepError || (H(n.errors, i), F.isValid && p()), E.state.next({ ...n }));
  }, we = (i, o = {}) => {
    const l = i ? ae(i) : u, b = ae(l), v = i && !te(i) ? b : u;
    if (o.keepDefaultValues || (u = l), !o.keepValues) {
      if (o.keepDirtyValues || q)
        for (const d of y.mount)
          h(n.dirtyFields, d) ? N(v, d, h(f, d)) : oe(d, h(v, d));
      else {
        if (Rr && $(i))
          for (const d of y.mount) {
            const m = h(s, d);
            if (m && m._f) {
              const T = Array.isArray(m._f.refs) ? m._f.refs[0] : m._f.ref;
              if (ir(T)) {
                const B = T.closest("form");
                if (B) {
                  B.reset();
                  break;
                }
              }
            }
          }
        s = {};
      }
      f = e.shouldUnregister ? o.keepDefaultValues ? ae(u) : {} : ae(v), E.array.next({
        values: { ...v }
      }), E.values.next({
        values: { ...v }
      });
    }
    y = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !_.mount && a(), _.mount = !F.isValid || !!o.keepIsValid, _.watch = !!e.shouldUnregister, E.state.next({
      submitCount: o.keepSubmitCount ? n.submitCount : 0,
      isDirty: o.keepDirty ? n.isDirty : !!(o.keepDefaultValues && !Fe(i, u)),
      isSubmitted: o.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: o.keepDirtyValues ? n.dirtyFields : o.keepDefaultValues && i ? pr(u, i) : {},
      touchedFields: o.keepTouched ? n.touchedFields : {},
      errors: o.keepErrors ? n.errors : {},
      isSubmitSuccessful: o.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Re = (i, o) => we(be(i) ? i(f) : i, o);
  return {
    control: {
      register: ge,
      unregister: he,
      getFieldState: Ke,
      handleSubmit: Ze,
      setError: Ce,
      _executeSchema: X,
      _getWatch: I,
      _getDirty: D,
      _updateValid: p,
      _removeUnmounted: V,
      _updateFieldArray: ie,
      _updateDisabledField: ke,
      _getFieldArray: Z,
      _reset: we,
      _resetDefaultValues: () => be(r.defaultValues) && r.defaultValues().then((i) => {
        Re(i, r.resetOptions), E.state.next({
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
      _proxyFormState: F,
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
        return u;
      },
      get _names() {
        return y;
      },
      set _names(i) {
        y = i;
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
    trigger: Ae,
    register: ge,
    handleSubmit: Ze,
    watch: Ie,
    setValue: oe,
    getValues: Ne,
    reset: Re,
    resetField: fr,
    clearErrors: lr,
    unregister: he,
    setError: Ce,
    setFocus: (i, o = {}) => {
      const l = h(s, i), b = l && l._f;
      if (b) {
        const v = b.refs ? b.refs[0] : b.ref;
        v.focus && (v.focus(), o.shouldSelect && v.select());
      }
    },
    getFieldState: Ke
  };
}
function Nt(e = {}) {
  const a = j.useRef(), r = j.useRef(), [n, s] = j.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: be(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: !1,
    defaultValues: be(e.defaultValues) ? void 0 : e.defaultValues
  });
  a.current || (a.current = {
    ...Pt(e, () => s((f) => ({ ...f }))),
    formState: n
  });
  const u = a.current.control;
  return u._options = e, Fr({
    subject: u._subjects.state,
    next: (f) => {
      Xr(f, u._proxyFormState, u._updateFormState, !0) && s({ ...u._formState });
    }
  }), j.useEffect(() => u._disableForm(e.disabled), [u, e.disabled]), j.useEffect(() => {
    if (u._proxyFormState.isDirty) {
      const f = u._getDirty();
      f !== n.isDirty && u._subjects.state.next({
        isDirty: f
      });
    }
  }, [u, n.isDirty]), j.useEffect(() => {
    e.values && !Fe(e.values, r.current) ? (u._reset(e.values, u._options.resetOptions), r.current = e.values, s((f) => ({ ...f }))) : u._resetDefaultValues();
  }, [e.values, u]), j.useEffect(() => {
    e.errors && u._setErrors(e.errors);
  }, [e.errors, u]), j.useEffect(() => {
    u._state.mount || (u._updateValid(), u._state.mount = !0), u._state.watch && (u._state.watch = !1, u._subjects.state.next({ ...u._formState })), u._removeUnmounted();
  }), a.current.formState = zr(n, u), a.current;
}
const ur = ({ error: e, id: a, className: r }) => {
  const n = typeof e == "string" ? e : e == null ? void 0 : e.message;
  return n ? /* @__PURE__ */ C.jsx("span", { id: a, className: r || "", children: n }) : null;
}, qe = ({
  type: e,
  name: a,
  label: r,
  validation: n,
  classes: s,
  inputProps: u,
  ...f
}) => {
  const {
    register: _,
    formState: { errors: y }
  } = _e(), x = `form-${a}`;
  return /* @__PURE__ */ C.jsxs("div", { className: s == null ? void 0 : s.container, children: [
    r && /* @__PURE__ */ C.jsx("label", { htmlFor: x, className: s == null ? void 0 : s.label, children: r }),
    /* @__PURE__ */ C.jsx(
      "input",
      {
        id: x,
        className: s == null ? void 0 : s.input,
        ..._(a, n),
        type: e,
        ...f,
        ...u,
        "aria-invalid": y[a] ? "true" : "false",
        "aria-describedby": `${x}-error`
      }
    ),
    /* @__PURE__ */ C.jsx(
      ur,
      {
        id: `${x}-error`,
        className: s == null ? void 0 : s.error,
        error: y == null ? void 0 : y[a]
      }
    )
  ] });
}, It = ({
  name: e,
  options: a,
  classes: r,
  inputProps: n,
  ...s
}) => {
  const {
    register: u,
    formState: { errors: f }
  } = _e(), _ = `form-${e}`;
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    a.map((y, x) => /* @__PURE__ */ C.jsxs("div", { className: r == null ? void 0 : r.container, children: [
      /* @__PURE__ */ C.jsx(
        "input",
        {
          id: `${_}-${x}`,
          ...u(e),
          ...s,
          ...n,
          type: "checkbox",
          value: y.value,
          className: r == null ? void 0 : r.checkbox
        }
      ),
      /* @__PURE__ */ C.jsx("label", { htmlFor: `${_}-${x}`, className: r == null ? void 0 : r.label, children: y.label })
    ] }, x)),
    /* @__PURE__ */ C.jsx(
      ur,
      {
        id: `${_}-error`,
        className: r == null ? void 0 : r.error,
        error: f[e]
      }
    )
  ] });
}, $t = ({
  name: e,
  options: a,
  classes: r,
  inputProps: n,
  ...s
}) => {
  const {
    register: u,
    formState: { errors: f }
  } = _e(), _ = `form-${e}`;
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    a.map((y, x) => /* @__PURE__ */ C.jsxs("div", { className: r == null ? void 0 : r.container, children: [
      /* @__PURE__ */ C.jsx(
        "input",
        {
          id: `${_}-${x}`,
          ...u(e),
          ...s,
          type: "radio",
          ...n,
          value: y.value,
          className: r == null ? void 0 : r.radio
        }
      ),
      /* @__PURE__ */ C.jsx("label", { htmlFor: `${_}-${x}`, className: r == null ? void 0 : r.label, children: y.label })
    ] }, x)),
    /* @__PURE__ */ C.jsx(
      ur,
      {
        id: `${_}-error`,
        className: r == null ? void 0 : r.error,
        error: f[e]
      }
    )
  ] });
}, Lt = ({
  name: e,
  options: a,
  label: r,
  validation: n,
  classes: s,
  inputProps: u,
  ...f
}) => {
  const {
    register: _,
    formState: { errors: y }
  } = _e(), x = `form-${e}`;
  return /* @__PURE__ */ C.jsxs("div", { className: s == null ? void 0 : s.container, children: [
    r && /* @__PURE__ */ C.jsx("label", { htmlFor: x, className: s == null ? void 0 : s.label, children: r }),
    /* @__PURE__ */ C.jsx(
      "select",
      {
        id: x,
        ..._(e, n),
        className: s == null ? void 0 : s.select,
        ...f,
        ...u,
        "aria-invalid": y[e] ? "true" : "false",
        "aria-describedby": `${x}-error`,
        children: a.map((R, F) => /* @__PURE__ */ C.jsx("option", { value: R.value, className: s == null ? void 0 : s.option, children: R.label }, F))
      }
    ),
    /* @__PURE__ */ C.jsx(
      ur,
      {
        id: `${x}-error`,
        className: s == null ? void 0 : s.error,
        error: y[e]
      }
    )
  ] });
}, wr = {
  text: qe,
  password: qe,
  telephone: qe,
  email: qe,
  select: Lt,
  radio: $t,
  checkbox: It
}, Ut = (e, a) => {
  e in wr ? console.warn(
    `Input type "${e}" is already registered. Overriding existing component.`
  ) : console.log(`Registering new input type "${e}".`), wr[e] = a;
}, Mt = (e) => wr[e], Bt = ({ type: e, ...a }) => {
  const r = Mt(e) || qe;
  return /* @__PURE__ */ C.jsx(r, { type: e, ...a });
}, Wt = (e = []) => {
  const a = {};
  return e.forEach((r) => {
    r.defaultValue && (a[r.name] = r.defaultValue);
  }), a;
}, Yt = (e, a) => {
  var n;
  const r = { ...a };
  return (n = a.conditions) == null || n.forEach((s) => {
    const u = s.when;
    (typeof u == "function" ? u(e) : !1) && Object.assign(r, s.then(a));
  }), r;
}, Jt = ({
  fields: e,
  onSubmit: a,
  validation: r,
  classes: n
}) => {
  const s = Wt(
    e
  ), u = Nt({
    resolver: r,
    defaultValues: s
  }), f = u.watch();
  return /* @__PURE__ */ C.jsx(pt, { ...u, children: /* @__PURE__ */ C.jsxs(
    "form",
    {
      onSubmit: u.handleSubmit(a),
      className: n == null ? void 0 : n.formContainer,
      children: [
        e.map((_, y) => {
          const {
            name: x,
            label: R,
            type: F,
            options: E = [],
            validation: q,
            classes: U,
            hide: me = !1,
            inputProps: ve,
            ...ee
          } = Yt(f, _);
          return me ? null : /* @__PURE__ */ C.jsx(
            Bt,
            {
              ...ee,
              type: F,
              name: x,
              label: R,
              options: E,
              validation: q,
              classes: U,
              inputProps: ve
            },
            y
          );
        }),
        /* @__PURE__ */ C.jsx("button", { type: "submit", className: n == null ? void 0 : n.submitButton, children: "Submit" })
      ]
    }
  ) });
}, qt = ({
  name: e,
  classes: a,
  label: r,
  inputProps: n,
  ...s
}) => {
  const { control: u } = _e(), f = `switch-${e}`;
  return /* @__PURE__ */ C.jsxs("div", { className: `d-switch-container ${(a == null ? void 0 : a.switchContainer) ?? ""}`, children: [
    r && /* @__PURE__ */ C.jsx(
      "label",
      {
        htmlFor: f,
        className: `d-switch-label ${(a == null ? void 0 : a.label) ?? ""}`,
        children: r
      }
    ),
    /* @__PURE__ */ C.jsx(
      Rt,
      {
        name: e,
        control: u,
        render: ({ field: { onChange: _, onBlur: y, value: x = !1, ref: R } }) => /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
          /* @__PURE__ */ C.jsx(
            "input",
            {
              id: f,
              onChange: _,
              onBlur: y,
              ref: R,
              className: `d-switch-input ${(a == null ? void 0 : a.input) ?? ""}`,
              ...s,
              ...n,
              checked: x === !0,
              type: "checkbox",
              "aria-checked": x ? "true" : "false"
            }
          ),
          /* @__PURE__ */ C.jsx(
            "label",
            {
              htmlFor: f,
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
Ut("switch", qt);
export {
  Jt as ReactForm,
  Ut as addInputType,
  Mt as getInputComponent
};
