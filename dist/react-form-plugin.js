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
var $r;
function gt() {
  return $r || ($r = 1, process.env.NODE_ENV !== "production" && function() {
    var e = j, i = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), U = Symbol.iterator, _e = "@@iterator";
    function ve(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = U && t[U] || t[_e];
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
        var P = g.map(function(C) {
          return String(C);
        });
        P.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, P);
      }
    }
    var ie = !1, M = !1, Se = !1, pe = !1, xe = !1, le;
    le = Symbol.for("react.module.reference");
    function X(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === o || xe || t === s || t === x || t === F || pe || t === q || ie || M || Se || typeof t == "object" && t !== null && (t.$$typeof === E || t.$$typeof === R || t.$$typeof === f || t.$$typeof === m || t.$$typeof === y || // This needs to include all possible module reference object
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
    function V(t) {
      return t.displayName || "Context";
    }
    function A(t) {
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
        case F:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case m:
            var c = t;
            return V(c) + ".Consumer";
          case f:
            var g = t;
            return V(g._context) + ".Provider";
          case y:
            return Ve(t, t.render, "ForwardRef");
          case R:
            var w = t.displayName || null;
            return w !== null ? w : A(t.type) || "Memo";
          case E: {
            var O = t, P = O._payload, C = O._init;
            try {
              return A(C(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, N = 0, Z, K, ye, oe, Ee, Pe, Ae;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function Ke() {
      {
        if (N === 0) {
          Z = console.log, K = console.info, ye = console.warn, oe = console.error, Ee = console.group, Pe = console.groupCollapsed, Ae = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: $e,
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
        N++;
      }
    }
    function lr() {
      {
        if (N--, N === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, t, {
              value: Z
            }),
            info: T({}, t, {
              value: K
            }),
            warn: T({}, t, {
              value: ye
            }),
            error: T({}, t, {
              value: oe
            }),
            group: T({}, t, {
              value: Ee
            }),
            groupCollapsed: T({}, t, {
              value: Pe
            }),
            groupEnd: T({}, t, {
              value: Ae
            })
          });
        }
        N < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = ee.ReactCurrentDispatcher, Ne;
    function he(t, c, g) {
      {
        if (Ne === void 0)
          try {
            throw Error();
          } catch (O) {
            var w = O.stack.trim().match(/\n( *(at )?)/);
            Ne = w && w[1] || "";
          }
        return `
` + Ne + t;
      }
    }
    var Ce = !1, ge;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new ze();
    }
    function Xe(t, c) {
      if (!t || Ce)
        return "";
      {
        var g = ge.get(t);
        if (g !== void 0)
          return g;
      }
      var w;
      Ce = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = ke.current, ke.current = null, Ke();
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
          for (var k = ce.stack.split(`
`), G = w.stack.split(`
`), L = k.length - 1, W = G.length - 1; L >= 1 && W >= 0 && k[L] !== G[W]; )
            W--;
          for (; L >= 1 && W >= 0; L--, W--)
            if (k[L] !== G[W]) {
              if (L !== 1 || W !== 1)
                do
                  if (L--, W--, W < 0 || k[L] !== G[W]) {
                    var re = `
` + k[L].replace(" at new ", " at ");
                    return t.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", t.displayName)), typeof t == "function" && ge.set(t, re), re;
                  }
                while (L >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        Ce = !1, ke.current = P, lr(), Error.prepareStackTrace = O;
      }
      var De = t ? t.displayName || t.name : "", Pr = De ? he(De) : "";
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
        case F:
          return he("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case y:
            return Ze(t.render);
          case R:
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
    var Fe = Object.prototype.hasOwnProperty, cr = {}, dr = ee.ReactDebugCurrentFrame;
    function Ie(t) {
      if (t) {
        var c = t._owner, g = we(t.type, t._source, c ? c.type : null);
        dr.setExtraStackFrame(g);
      } else
        dr.setExtraStackFrame(null);
    }
    function a(t, c, g, w, O) {
      {
        var P = Function.call.bind(Fe);
        for (var C in t)
          if (P(t, C)) {
            var k = void 0;
            try {
              if (typeof t[C] != "function") {
                var G = Error((w || "React class") + ": " + g + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              k = t[C](c, C, w, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              k = L;
            }
            k && !(k instanceof Error) && (Ie(O), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", g, C, typeof k), Ie(null)), k instanceof Error && !(k.message in cr) && (cr[k.message] = !0, Ie(O), p("Failed %s type: %s", g, k.message), Ie(null));
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
    function _(t) {
      if (v(t))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", b(t)), d(t);
    }
    var D = ee.ReactCurrentOwner, B = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Q, fe, Le;
    Le = {};
    function Ue(t) {
      if (Fe.call(t, "ref")) {
        var c = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Me(t) {
      if (Fe.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function vr(t, c) {
      if (typeof t.ref == "string" && D.current && c && D.current.stateNode !== c) {
        var g = A(D.current.type);
        Le[g] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(D.current.type), t.ref), Le[g] = !0);
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
    var er = function(t, c, g, w, O, P, C) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: g,
        props: C,
        // Record the component responsible for creating this element.
        _owner: P
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
    function ot(t, c, g, w, O) {
      {
        var P, C = {}, k = null, G = null;
        g !== void 0 && (_(g), k = "" + g), Me(c) && (_(c.key), k = "" + c.key), Ue(c) && (G = c.ref, vr(c, O));
        for (P in c)
          Fe.call(c, P) && !B.hasOwnProperty(P) && (C[P] = c[P]);
        if (t && t.defaultProps) {
          var L = t.defaultProps;
          for (P in L)
            C[P] === void 0 && (C[P] = L[P]);
        }
        if (k || G) {
          var W = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          k && Qe(C, W), G && yr(C, W);
        }
        return er(t, k, G, O, w, D.current, C);
      }
    }
    var hr = ee.ReactCurrentOwner, kr = ee.ReactDebugCurrentFrame;
    function Te(t) {
      if (t) {
        var c = t._owner, g = we(t.type, t._source, c ? c.type : null);
        kr.setExtraStackFrame(g);
      } else
        kr.setExtraStackFrame(null);
    }
    var gr;
    gr = !1;
    function br(t) {
      return typeof t == "object" && t !== null && t.$$typeof === i;
    }
    function Cr() {
      {
        if (hr.current) {
          var t = A(hr.current.type);
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
    var Tr = {};
    function lt(t) {
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
        var g = lt(c);
        if (Tr[g])
          return;
        Tr[g] = !0;
        var w = "";
        t && t._owner && t._owner !== hr.current && (w = " It was passed a child from " + A(t._owner.type) + "."), Te(t), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, w), Te(null);
      }
    }
    function Or(t, c) {
      {
        if (typeof t != "object")
          return;
        if (l(t))
          for (var g = 0; g < t.length; g++) {
            var w = t[g];
            br(w) && Dr(w, c);
          }
        else if (br(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var O = ve(t);
          if (typeof O == "function" && O !== t.entries)
            for (var P = O.call(t), C; !(C = P.next()).done; )
              br(C.value) && Dr(C.value, c);
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
        c.$$typeof === R))
          g = c.propTypes;
        else
          return;
        if (g) {
          var w = A(c);
          a(g, t.props, "prop", w, t);
        } else if (c.PropTypes !== void 0 && !gr) {
          gr = !0;
          var O = A(c);
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
            Te(t), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), Te(null);
            break;
          }
        }
        t.ref !== null && (Te(t), p("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    function jr(t, c, g, w, O, P) {
      {
        var C = X(t);
        if (!C) {
          var k = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = ut(O);
          G ? k += G : k += Cr();
          var L;
          t === null ? L = "null" : l(t) ? L = "array" : t !== void 0 && t.$$typeof === i ? (L = "<" + (A(t.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : L = typeof t, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, k);
        }
        var W = ot(t, c, g, O, P);
        if (W == null)
          return W;
        if (C) {
          var re = c.children;
          if (re !== void 0)
            if (w)
              if (l(re)) {
                for (var De = 0; De < re.length; De++)
                  Or(re[De], t);
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
var Nr;
function bt() {
  if (Nr)
    return We;
  Nr = 1;
  var e = j, i = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(m, y, x) {
    var F, R = {}, E = null, q = null;
    x !== void 0 && (E = "" + x), y.key !== void 0 && (E = "" + y.key), y.ref !== void 0 && (q = y.ref);
    for (F in y)
      n.call(y, F) && !o.hasOwnProperty(F) && (R[F] = y[F]);
    if (m && m.defaultProps)
      for (F in y = m.defaultProps, y)
        R[F] === void 0 && (R[F] = y[F]);
    return { $$typeof: i, type: m, key: E, ref: q, props: R, _owner: s.current };
  }
  return We.Fragment = r, We.jsx = f, We.jsxs = f, We;
}
process.env.NODE_ENV === "production" ? Er.exports = bt() : Er.exports = gt();
var S = Er.exports, Ge = (e) => e.type === "checkbox", je = (e) => e instanceof Date, J = (e) => e == null;
const Hr = (e) => typeof e == "object";
var Y = (e) => !J(e) && !Array.isArray(e) && Hr(e) && !je(e), Gr = (e) => Y(e) && e.target ? Ge(e.target) ? e.target.checked : e.target.value : e, mt = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Jr = (e, i) => e.has(mt(i)), _t = (e) => {
  const i = e.constructor && e.constructor.prototype;
  return Y(i) && i.hasOwnProperty("isPrototypeOf");
}, Fr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ae(e) {
  let i;
  const r = Array.isArray(e);
  if (e instanceof Date)
    i = new Date(e);
  else if (e instanceof Set)
    i = new Set(e);
  else if (!(Fr && (e instanceof Blob || e instanceof FileList)) && (r || Y(e)))
    if (i = r ? [] : {}, !r && !_t(e))
      i = e;
    else
      for (const n in e)
        e.hasOwnProperty(n) && (i[n] = ae(e[n]));
  else
    return e;
  return i;
}
var Je = (e) => Array.isArray(e) ? e.filter(Boolean) : [], I = (e) => e === void 0, h = (e, i, r) => {
  if (!i || !Y(e))
    return r;
  const n = Je(i.split(/[,[\].]+?/)).reduce((s, o) => J(s) ? s : s[o], e);
  return I(n) || n === e ? I(e[i]) ? r : e[i] : n;
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
}, Kr = j.createContext(null), me = () => j.useContext(Kr), pt = (e) => {
  const { children: i, ...r } = e;
  return j.createElement(Kr.Provider, { value: r }, i);
};
var zr = (e, i, r, n = !0) => {
  const s = {
    defaultValues: i._defaultValues
  };
  for (const o in e)
    Object.defineProperty(s, o, {
      get: () => {
        const f = o;
        return i._proxyFormState[f] !== se.all && (i._proxyFormState[f] = !n || se.all), r && (r[f] = !0), e[f];
      }
    });
  return s;
}, te = (e) => Y(e) && !Object.keys(e).length, Xr = (e, i, r, n) => {
  r(e);
  const { name: s, ...o } = e;
  return te(o) || Object.keys(o).length >= Object.keys(i).length || Object.keys(o).find((f) => i[f] === (!n || se.all));
}, rr = (e) => Array.isArray(e) ? e : [e], Zr = (e, i, r) => !e || !i || e === i || rr(e).some((n) => n && (r ? n === i : n.startsWith(i) || i.startsWith(n)));
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
  const i = me(), { control: r = i.control, disabled: n, name: s, exact: o } = e || {}, [f, m] = j.useState(r._formState), y = j.useRef(!0), x = j.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), F = j.useRef(s);
  return F.current = s, Rr({
    disabled: n,
    next: (R) => y.current && Zr(F.current, R.name, o) && Xr(R, x.current, r._updateFormState) && m({
      ...r._formState,
      ...R
    }),
    subject: r._subjects.state
  }), j.useEffect(() => (y.current = !0, x.current.isValid && r._updateValid(!0), () => {
    y.current = !1;
  }), [r]), zr(f, r, x.current, !1);
}
var ue = (e) => typeof e == "string", Qr = (e, i, r, n, s) => ue(e) ? (n && i.watch.add(e), h(r, e, s)) : Array.isArray(e) ? e.map((o) => (n && i.watch.add(o), h(r, o))) : (n && (i.watchAll = !0), r);
function Et(e) {
  const i = me(), { control: r = i.control, name: n, defaultValue: s, disabled: o, exact: f } = e || {}, m = j.useRef(n);
  m.current = n, Rr({
    disabled: o,
    subject: r._subjects.values,
    next: (F) => {
      Zr(m.current, F.name, f) && x(ae(Qr(m.current, r._names, F.values || r._formValues, !1, s)));
    }
  });
  const [y, x] = j.useState(r._getWatch(n, s));
  return j.useEffect(() => r._removeUnmounted()), y;
}
var Sr = (e) => /^\w*$/.test(e), et = (e) => Je(e.replace(/["|']|\]/g, "").split(/\.|\[/)), $ = (e, i, r) => {
  let n = -1;
  const s = Sr(i) ? [i] : et(i), o = s.length, f = o - 1;
  for (; ++n < o; ) {
    const m = s[n];
    let y = r;
    if (n !== f) {
      const x = e[m];
      y = Y(x) || Array.isArray(x) ? x : isNaN(+s[n + 1]) ? {} : [];
    }
    e[m] = y, e = e[m];
  }
  return e;
};
function wt(e) {
  const i = me(), { name: r, disabled: n, control: s = i.control, shouldUnregister: o } = e, f = Jr(s._names.array, r), m = Et({
    control: s,
    name: r,
    defaultValue: h(s._formValues, r, h(s._defaultValues, r, e.defaultValue)),
    exact: !0
  }), y = xt({
    control: s,
    name: r
  }), x = j.useRef(s.register(r, {
    ...e.rules,
    value: m,
    ...ne(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return j.useEffect(() => {
    const F = s._options.shouldUnregister || o, R = (E, q) => {
      const U = h(s._fields, E);
      U && (U._f.mount = q);
    };
    if (R(r, !0), F) {
      const E = ae(h(s._options.defaultValues, r));
      $(s._defaultValues, r, E), I(h(s._formValues, r)) && $(s._formValues, r, E);
    }
    return () => {
      (f ? F && !s._state.action : F) ? s.unregister(r) : R(r, !1);
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
      value: m,
      ...ne(n) || ne(y.disabled) ? { disabled: y.disabled || n } : {},
      onChange: j.useCallback((F) => x.current.onChange({
        target: {
          value: Gr(F),
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
      ref: (F) => {
        const R = h(s._fields, r);
        R && F && (R._f.ref = {
          focus: () => F.focus(),
          select: () => F.select(),
          setCustomValidity: (E) => F.setCustomValidity(E),
          reportValidity: () => F.reportValidity()
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
const Ft = (e) => e.render(wt(e));
var Rt = (e, i, r, n, s) => i ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [n]: s || !0
  }
} : {}, Ir = (e) => ({
  isOnSubmit: !e || e === se.onSubmit,
  isOnBlur: e === se.onBlur,
  isOnChange: e === se.onChange,
  isOnAll: e === se.all,
  isOnTouch: e === se.onTouched
}), Lr = (e, i, r) => !r && (i.watchAll || i.watch.has(e) || [...i.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const He = (e, i, r, n) => {
  for (const s of r || Object.keys(e)) {
    const o = h(e, s);
    if (o) {
      const { _f: f, ...m } = o;
      if (f) {
        if (f.refs && f.refs[0] && i(f.refs[0], s) && !n)
          break;
        if (f.ref && i(f.ref, f.name) && !n)
          break;
        He(m, i);
      } else
        Y(m) && He(m, i);
    }
  }
};
var St = (e, i, r) => {
  const n = Je(h(e, r));
  return $(n, "root", i[r]), $(e, r, n), e;
}, Vr = (e) => e.type === "file", be = (e) => typeof e == "function", ir = (e) => {
  if (!Fr)
    return !1;
  const i = e ? e.ownerDocument : 0;
  return e instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
}, tr = (e) => ue(e), Ar = (e) => e.type === "radio", ar = (e) => e instanceof RegExp;
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
  if (tr(e) || Array.isArray(e) && e.every(tr) || ne(e) && !e)
    return {
      type: r,
      message: tr(e) ? e : "",
      ref: i
    };
}
var Oe = (e) => Y(e) && !ar(e) ? e : {
  value: e,
  message: ""
}, Yr = async (e, i, r, n, s) => {
  const { ref: o, refs: f, required: m, maxLength: y, minLength: x, min: F, max: R, pattern: E, validate: q, name: U, valueAsNumber: _e, mount: ve, disabled: ee } = e._f, p = h(i, U);
  if (!ve || ee)
    return {};
  const z = f ? f[0] : o, ie = (V) => {
    n && z.reportValidity && (z.setCustomValidity(ne(V) ? "" : V || ""), z.reportValidity());
  }, M = {}, Se = Ar(o), pe = Ge(o), xe = Se || pe, le = (_e || Vr(o)) && I(o.value) && I(p) || ir(o) && o.value === "" || p === "" || Array.isArray(p) && !p.length, X = Rt.bind(null, U, r, M), Ve = (V, A, T, N = de.maxLength, Z = de.minLength) => {
    const K = V ? A : T;
    M[U] = {
      type: V ? N : Z,
      message: K,
      ref: o,
      ...X(V ? N : Z, K)
    };
  };
  if (s ? !Array.isArray(p) || !p.length : m && (!xe && (le || J(p)) || ne(p) && !p || pe && !rt(f).isValid || Se && !tt(f).isValid)) {
    const { value: V, message: A } = tr(m) ? { value: !!m, message: m } : Oe(m);
    if (V && (M[U] = {
      type: de.required,
      message: A,
      ref: z,
      ...X(de.required, A)
    }, !r))
      return ie(A), M;
  }
  if (!le && (!J(F) || !J(R))) {
    let V, A;
    const T = Oe(R), N = Oe(F);
    if (!J(p) && !isNaN(p)) {
      const Z = o.valueAsNumber || p && +p;
      J(T.value) || (V = Z > T.value), J(N.value) || (A = Z < N.value);
    } else {
      const Z = o.valueAsDate || new Date(p), K = (Ee) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Ee), ye = o.type == "time", oe = o.type == "week";
      ue(T.value) && p && (V = ye ? K(p) > K(T.value) : oe ? p > T.value : Z > new Date(T.value)), ue(N.value) && p && (A = ye ? K(p) < K(N.value) : oe ? p < N.value : Z < new Date(N.value));
    }
    if ((V || A) && (Ve(!!V, T.message, N.message, de.max, de.min), !r))
      return ie(M[U].message), M;
  }
  if ((y || x) && !le && (ue(p) || s && Array.isArray(p))) {
    const V = Oe(y), A = Oe(x), T = !J(V.value) && p.length > +V.value, N = !J(A.value) && p.length < +A.value;
    if ((T || N) && (Ve(T, V.message, A.message), !r))
      return ie(M[U].message), M;
  }
  if (E && !le && ue(p)) {
    const { value: V, message: A } = Oe(E);
    if (ar(V) && !p.match(V) && (M[U] = {
      type: de.pattern,
      message: A,
      ref: o,
      ...X(de.pattern, A)
    }, !r))
      return ie(A), M;
  }
  if (q) {
    if (be(q)) {
      const V = await q(p, i), A = Wr(V, z);
      if (A && (M[U] = {
        ...A,
        ...X(de.validate, A.message)
      }, !r))
        return ie(A.message), M;
    } else if (Y(q)) {
      let V = {};
      for (const A in q) {
        if (!te(V) && !r)
          break;
        const T = Wr(await q[A](p, i), z, A);
        T && (V = {
          ...T,
          ...X(A, T.message)
        }, ie(T.message), r && (M[U] = V));
      }
      if (!te(V) && (M[U] = {
        ref: z,
        ...V
      }, !r))
        return M;
    }
  }
  return ie(!0), M;
};
function Vt(e, i) {
  const r = i.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    e = I(e) ? n++ : e[i[n++]];
  return e;
}
function At(e) {
  for (const i in e)
    if (e.hasOwnProperty(i) && !I(e[i]))
      return !1;
  return !0;
}
function H(e, i) {
  const r = Array.isArray(i) ? i : Sr(i) ? [i] : et(i), n = r.length === 1 ? e : Vt(e, r), s = r.length - 1, o = r[s];
  return n && delete n[o], s !== 0 && (Y(n) && te(n) || Array.isArray(n) && At(n)) && H(e, r.slice(0, -1)), e;
}
var mr = () => {
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
}, sr = (e) => J(e) || !Hr(e);
function Re(e, i) {
  if (sr(e) || sr(i))
    return e === i;
  if (je(e) && je(i))
    return e.getTime() === i.getTime();
  const r = Object.keys(e), n = Object.keys(i);
  if (r.length !== n.length)
    return !1;
  for (const s of r) {
    const o = e[s];
    if (!n.includes(s))
      return !1;
    if (s !== "ref") {
      const f = i[s];
      if (je(o) && je(f) || Y(o) && Y(f) || Array.isArray(o) && Array.isArray(f) ? !Re(o, f) : o !== f)
        return !1;
    }
  }
  return !0;
}
var nt = (e) => e.type === "select-multiple", kt = (e) => Ar(e) || Ge(e), _r = (e) => ir(e) && e.isConnected, it = (e) => {
  for (const i in e)
    if (be(e[i]))
      return !0;
  return !1;
};
function or(e, i = {}) {
  const r = Array.isArray(e);
  if (Y(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || Y(e[n]) && !it(e[n]) ? (i[n] = Array.isArray(e[n]) ? [] : {}, or(e[n], i[n])) : J(e[n]) || (i[n] = !0);
  return i;
}
function at(e, i, r) {
  const n = Array.isArray(e);
  if (Y(e) || n)
    for (const s in e)
      Array.isArray(e[s]) || Y(e[s]) && !it(e[s]) ? I(i) || sr(r[s]) ? r[s] = Array.isArray(e[s]) ? or(e[s], []) : { ...or(e[s]) } : at(e[s], J(i) ? {} : i[s], r[s]) : r[s] = !Re(e[s], i[s]);
  return r;
}
var pr = (e, i) => at(e, i, or(i)), st = (e, { valueAsNumber: i, valueAsDate: r, setValueAs: n }) => I(e) ? e : i ? e === "" ? NaN : e && +e : r && ue(e) ? new Date(e) : n ? n(e) : e;
function xr(e) {
  const i = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : i.disabled))
    return Vr(i) ? i.files : Ar(i) ? tt(e.refs).value : nt(i) ? [...i.selectedOptions].map(({ value: r }) => r) : Ge(i) ? rt(e.refs).value : st(I(i.value) ? e.ref.value : i.value, e);
}
var Ct = (e, i, r, n) => {
  const s = {};
  for (const o of e) {
    const f = h(i, o);
    f && $(s, o, f._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: n
  };
}, Ye = (e) => I(e) ? e : ar(e) ? e.source : Y(e) ? ar(e.value) ? e.value.source : e.value : e, Tt = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function qr(e, i, r) {
  const n = h(e, r);
  if (n || Sr(r))
    return {
      error: n,
      name: r
    };
  const s = r.split(".");
  for (; s.length; ) {
    const o = s.join("."), f = h(i, o), m = h(e, o);
    if (f && !Array.isArray(f) && r !== o)
      return { name: r };
    if (m && m.type)
      return {
        name: o,
        error: m
      };
    s.pop();
  }
  return {
    name: r
  };
}
var Dt = (e, i, r, n, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(i || e) : (r ? n.isOnBlur : s.isOnBlur) ? !e : (r ? n.isOnChange : s.isOnChange) ? e : !0, Ot = (e, i) => !Je(h(e, i)).length && H(e, i);
const jt = {
  mode: se.onSubmit,
  reValidateMode: se.onChange,
  shouldFocusError: !0
};
function Pt(e = {}, i) {
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
  }, s = {}, o = Y(r.defaultValues) || Y(r.values) ? ae(r.defaultValues || r.values) || {} : {}, f = r.shouldUnregister ? {} : ae(o), m = {
    action: !1,
    mount: !1,
    watch: !1
  }, y = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, x, F = 0;
  const R = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, E = {
    values: mr(),
    array: mr(),
    state: mr()
  }, q = e.resetOptions && e.resetOptions.keepDirtyValues, U = Ir(r.mode), _e = Ir(r.reValidateMode), ve = r.criteriaMode === se.all, ee = (a) => (u) => {
    clearTimeout(F), F = setTimeout(a, u);
  }, p = async (a) => {
    if (R.isValid || a) {
      const u = r.resolver ? te((await X()).errors) : await V(s, !0);
      u !== n.isValid && E.state.next({
        isValid: u
      });
    }
  }, z = (a) => R.isValidating && E.state.next({
    isValidating: a
  }), ie = (a, u = [], l, b, v = !0, d = !0) => {
    if (b && l) {
      if (m.action = !0, d && Array.isArray(h(s, a))) {
        const _ = l(h(s, a), b.argA, b.argB);
        v && $(s, a, _);
      }
      if (d && Array.isArray(h(n.errors, a))) {
        const _ = l(h(n.errors, a), b.argA, b.argB);
        v && $(n.errors, a, _), Ot(n.errors, a);
      }
      if (R.touchedFields && d && Array.isArray(h(n.touchedFields, a))) {
        const _ = l(h(n.touchedFields, a), b.argA, b.argB);
        v && $(n.touchedFields, a, _);
      }
      R.dirtyFields && (n.dirtyFields = pr(o, f)), E.state.next({
        name: a,
        isDirty: T(a, u),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      $(f, a, u);
  }, M = (a, u) => {
    $(n.errors, a, u), E.state.next({
      errors: n.errors
    });
  }, Se = (a) => {
    n.errors = a, E.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, pe = (a, u, l, b) => {
    const v = h(s, a);
    if (v) {
      const d = h(f, a, I(l) ? h(o, a) : l);
      I(d) || b && b.defaultChecked || u ? $(f, a, u ? d : xr(v._f)) : K(a, d), m.mount && p();
    }
  }, xe = (a, u, l, b, v) => {
    let d = !1, _ = !1;
    const D = {
      name: a
    }, B = !!(h(s, a) && h(s, a)._f.disabled);
    if (!l || b) {
      R.isDirty && (_ = n.isDirty, n.isDirty = D.isDirty = T(), d = _ !== D.isDirty);
      const Q = B || Re(h(o, a), u);
      _ = !!(!B && h(n.dirtyFields, a)), Q || B ? H(n.dirtyFields, a) : $(n.dirtyFields, a, !0), D.dirtyFields = n.dirtyFields, d = d || R.dirtyFields && _ !== !Q;
    }
    if (l) {
      const Q = h(n.touchedFields, a);
      Q || ($(n.touchedFields, a, l), D.touchedFields = n.touchedFields, d = d || R.touchedFields && Q !== l);
    }
    return d && v && E.state.next(D), d ? D : {};
  }, le = (a, u, l, b) => {
    const v = h(n.errors, a), d = R.isValid && ne(u) && n.isValid !== u;
    if (e.delayError && l ? (x = ee(() => M(a, l)), x(e.delayError)) : (clearTimeout(F), x = null, l ? $(n.errors, a, l) : H(n.errors, a)), (l ? !Re(v, l) : v) || !te(b) || d) {
      const _ = {
        ...b,
        ...d && ne(u) ? { isValid: u } : {},
        errors: n.errors,
        name: a
      };
      n = {
        ...n,
        ..._
      }, E.state.next(_);
    }
    z(!1);
  }, X = async (a) => r.resolver(f, r.context, Ct(a || y.mount, s, r.criteriaMode, r.shouldUseNativeValidation)), Ve = async (a) => {
    const { errors: u } = await X(a);
    if (a)
      for (const l of a) {
        const b = h(u, l);
        b ? $(n.errors, l, b) : H(n.errors, l);
      }
    else
      n.errors = u;
    return u;
  }, V = async (a, u, l = {
    valid: !0
  }) => {
    for (const b in a) {
      const v = a[b];
      if (v) {
        const { _f: d, ..._ } = v;
        if (d) {
          const D = y.array.has(d.name), B = await Yr(v, f, ve, r.shouldUseNativeValidation && !u, D);
          if (B[d.name] && (l.valid = !1, u))
            break;
          !u && (h(B, d.name) ? D ? St(n.errors, B, d.name) : $(n.errors, d.name, B[d.name]) : H(n.errors, d.name));
        }
        _ && await V(_, u, l);
      }
    }
    return l.valid;
  }, A = () => {
    for (const a of y.unMount) {
      const u = h(s, a);
      u && (u._f.refs ? u._f.refs.every((l) => !_r(l)) : !_r(u._f.ref)) && he(a);
    }
    y.unMount = /* @__PURE__ */ new Set();
  }, T = (a, u) => (a && u && $(f, a, u), !Re($e(), o)), N = (a, u, l) => Qr(a, y, {
    ...m.mount ? f : I(u) ? o : ue(a) ? { [a]: u } : u
  }, l, u), Z = (a) => Je(h(m.mount ? f : o, a, e.shouldUnregister ? h(o, a, []) : [])), K = (a, u, l = {}) => {
    const b = h(s, a);
    let v = u;
    if (b) {
      const d = b._f;
      d && (!d.disabled && $(f, a, st(u, d)), v = ir(d.ref) && J(u) ? "" : u, nt(d.ref) ? [...d.ref.options].forEach((_) => _.selected = v.includes(_.value)) : d.refs ? Ge(d.ref) ? d.refs.length > 1 ? d.refs.forEach((_) => (!_.defaultChecked || !_.disabled) && (_.checked = Array.isArray(v) ? !!v.find((D) => D === _.value) : v === _.value)) : d.refs[0] && (d.refs[0].checked = !!v) : d.refs.forEach((_) => _.checked = _.value === v) : Vr(d.ref) ? d.ref.value = "" : (d.ref.value = v, d.ref.type || E.values.next({
        name: a,
        values: { ...f }
      })));
    }
    (l.shouldDirty || l.shouldTouch) && xe(a, v, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && Ae(a);
  }, ye = (a, u, l) => {
    for (const b in u) {
      const v = u[b], d = `${a}.${b}`, _ = h(s, d);
      (y.array.has(a) || !sr(v) || _ && !_._f) && !je(v) ? ye(d, v, l) : K(d, v, l);
    }
  }, oe = (a, u, l = {}) => {
    const b = h(s, a), v = y.array.has(a), d = ae(u);
    $(f, a, d), v ? (E.array.next({
      name: a,
      values: { ...f }
    }), (R.isDirty || R.dirtyFields) && l.shouldDirty && E.state.next({
      name: a,
      dirtyFields: pr(o, f),
      isDirty: T(a, d)
    })) : b && !b._f && !J(d) ? ye(a, d, l) : K(a, d, l), Lr(a, y) && E.state.next({ ...n }), E.values.next({
      name: a,
      values: { ...f }
    }), !m.mount && i();
  }, Ee = async (a) => {
    const u = a.target;
    let l = u.name, b = !0;
    const v = h(s, l), d = () => u.type ? xr(v._f) : Gr(a), _ = (D) => {
      b = Number.isNaN(D) || D === h(f, l, D);
    };
    if (v) {
      let D, B;
      const Q = d(), fe = a.type === nr.BLUR || a.type === nr.FOCUS_OUT, Le = !Tt(v._f) && !r.resolver && !h(n.errors, l) && !v._f.deps || Dt(fe, h(n.touchedFields, l), n.isSubmitted, _e, U), Ue = Lr(l, y, fe);
      $(f, l, Q), fe ? (v._f.onBlur && v._f.onBlur(a), x && x(0)) : v._f.onChange && v._f.onChange(a);
      const Me = xe(l, Q, fe, !1), vr = !te(Me) || Ue;
      if (!fe && E.values.next({
        name: l,
        type: a.type,
        values: { ...f }
      }), Le)
        return R.isValid && p(), vr && E.state.next({ name: l, ...Ue ? {} : Me });
      if (!fe && Ue && E.state.next({ ...n }), z(!0), r.resolver) {
        const { errors: Qe } = await X([l]);
        if (_(Q), b) {
          const yr = qr(n.errors, s, l), er = qr(Qe, s, yr.name || l);
          D = er.error, l = er.name, B = te(Qe);
        }
      } else
        D = (await Yr(v, f, ve, r.shouldUseNativeValidation))[l], _(Q), b && (D ? B = !1 : R.isValid && (B = await V(s, !0)));
      b && (v._f.deps && Ae(v._f.deps), le(l, B, D, Me));
    }
  }, Pe = (a, u) => {
    if (h(n.errors, u) && a.focus)
      return a.focus(), 1;
  }, Ae = async (a, u = {}) => {
    let l, b;
    const v = rr(a);
    if (z(!0), r.resolver) {
      const d = await Ve(I(a) ? a : v);
      l = te(d), b = a ? !v.some((_) => h(d, _)) : l;
    } else
      a ? (b = (await Promise.all(v.map(async (d) => {
        const _ = h(s, d);
        return await V(_ && _._f ? { [d]: _ } : _);
      }))).every(Boolean), !(!b && !n.isValid) && p()) : b = l = await V(s);
    return E.state.next({
      ...!ue(a) || R.isValid && l !== n.isValid ? {} : { name: a },
      ...r.resolver || !a ? { isValid: l } : {},
      errors: n.errors,
      isValidating: !1
    }), u.shouldFocus && !b && He(s, Pe, a ? v : y.mount), b;
  }, $e = (a) => {
    const u = {
      ...o,
      ...m.mount ? f : {}
    };
    return I(a) ? u : ue(a) ? h(u, a) : a.map((l) => h(u, l));
  }, Ke = (a, u) => ({
    invalid: !!h((u || n).errors, a),
    isDirty: !!h((u || n).dirtyFields, a),
    isTouched: !!h((u || n).touchedFields, a),
    error: h((u || n).errors, a)
  }), lr = (a) => {
    a && rr(a).forEach((u) => H(n.errors, u)), E.state.next({
      errors: a ? n.errors : {}
    });
  }, ke = (a, u, l) => {
    const b = (h(s, a, { _f: {} })._f || {}).ref;
    $(n.errors, a, {
      ...u,
      ref: b
    }), E.state.next({
      name: a,
      errors: n.errors,
      isValid: !1
    }), l && l.shouldFocus && b && b.focus && b.focus();
  }, Ne = (a, u) => be(a) ? E.values.subscribe({
    next: (l) => a(N(void 0, u), l)
  }) : N(a, u, !0), he = (a, u = {}) => {
    for (const l of a ? rr(a) : y.mount)
      y.mount.delete(l), y.array.delete(l), u.keepValue || (H(s, l), H(f, l)), !u.keepError && H(n.errors, l), !u.keepDirty && H(n.dirtyFields, l), !u.keepTouched && H(n.touchedFields, l), !r.shouldUnregister && !u.keepDefaultValue && H(o, l);
    E.values.next({
      values: { ...f }
    }), E.state.next({
      ...n,
      ...u.keepDirty ? { isDirty: T() } : {}
    }), !u.keepIsValid && p();
  }, Ce = ({ disabled: a, name: u, field: l, fields: b, value: v }) => {
    if (ne(a)) {
      const d = a ? void 0 : I(v) ? xr(l ? l._f : h(b, u)._f) : v;
      $(f, u, d), xe(u, d, !1, !1, !0);
    }
  }, ge = (a, u = {}) => {
    let l = h(s, a);
    const b = ne(u.disabled);
    return $(s, a, {
      ...l || {},
      _f: {
        ...l && l._f ? l._f : { ref: { name: a } },
        name: a,
        mount: !0,
        ...u
      }
    }), y.mount.add(a), l ? Ce({
      field: l,
      disabled: u.disabled,
      name: a,
      value: u.value
    }) : pe(a, !0, u.value), {
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
      onChange: Ee,
      onBlur: Ee,
      ref: (v) => {
        if (v) {
          ge(a, u), l = h(s, a);
          const d = I(v.value) && v.querySelectorAll && v.querySelectorAll("input,select,textarea")[0] || v, _ = kt(d), D = l._f.refs || [];
          if (_ ? D.find((B) => B === d) : d === l._f.ref)
            return;
          $(s, a, {
            _f: {
              ...l._f,
              ..._ ? {
                refs: [
                  ...D.filter(_r),
                  d,
                  ...Array.isArray(h(o, a)) ? [{}] : []
                ],
                ref: { type: d.type, name: a }
              } : { ref: d }
            }
          }), pe(a, !1, void 0, d);
        } else
          l = h(s, a, {}), l._f && (l._f.mount = !1), (r.shouldUnregister || u.shouldUnregister) && !(Jr(y.array, a) && m.action) && y.unMount.add(a);
      }
    };
  }, ze = () => r.shouldFocusError && He(s, Pe, y.mount), Xe = (a) => {
    ne(a) && (E.state.next({ disabled: a }), He(s, (u, l) => {
      let b = a;
      const v = h(s, l);
      v && ne(v._f.disabled) && (b || (b = v._f.disabled)), u.disabled = b;
    }, 0, !1));
  }, Ze = (a, u) => async (l) => {
    l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
    let b = ae(f);
    if (E.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: v, values: d } = await X();
      n.errors = v, b = d;
    } else
      await V(s);
    H(n.errors, "root"), te(n.errors) ? (E.state.next({
      errors: {}
    }), await a(b, l)) : (u && await u({ ...n.errors }, l), ze(), setTimeout(ze)), E.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: te(n.errors),
      submitCount: n.submitCount + 1,
      errors: n.errors
    });
  }, fr = (a, u = {}) => {
    h(s, a) && (I(u.defaultValue) ? oe(a, h(o, a)) : (oe(a, u.defaultValue), $(o, a, u.defaultValue)), u.keepTouched || H(n.touchedFields, a), u.keepDirty || (H(n.dirtyFields, a), n.isDirty = u.defaultValue ? T(a, h(o, a)) : T()), u.keepError || (H(n.errors, a), R.isValid && p()), E.state.next({ ...n }));
  }, we = (a, u = {}) => {
    const l = a ? ae(a) : o, b = ae(l), v = a && !te(a) ? b : o;
    if (u.keepDefaultValues || (o = l), !u.keepValues) {
      if (u.keepDirtyValues || q)
        for (const d of y.mount)
          h(n.dirtyFields, d) ? $(v, d, h(f, d)) : oe(d, h(v, d));
      else {
        if (Fr && I(a))
          for (const d of y.mount) {
            const _ = h(s, d);
            if (_ && _._f) {
              const D = Array.isArray(_._f.refs) ? _._f.refs[0] : _._f.ref;
              if (ir(D)) {
                const B = D.closest("form");
                if (B) {
                  B.reset();
                  break;
                }
              }
            }
          }
        s = {};
      }
      f = e.shouldUnregister ? u.keepDefaultValues ? ae(o) : {} : ae(v), E.array.next({
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
    }, !m.mount && i(), m.mount = !R.isValid || !!u.keepIsValid, m.watch = !!e.shouldUnregister, E.state.next({
      submitCount: u.keepSubmitCount ? n.submitCount : 0,
      isDirty: u.keepDirty ? n.isDirty : !!(u.keepDefaultValues && !Re(a, o)),
      isSubmitted: u.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: u.keepDirtyValues ? n.dirtyFields : u.keepDefaultValues && a ? pr(o, a) : {},
      touchedFields: u.keepTouched ? n.touchedFields : {},
      errors: u.keepErrors ? n.errors : {},
      isSubmitSuccessful: u.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Fe = (a, u) => we(be(a) ? a(f) : a, u);
  return {
    control: {
      register: ge,
      unregister: he,
      getFieldState: Ke,
      handleSubmit: Ze,
      setError: ke,
      _executeSchema: X,
      _getWatch: N,
      _getDirty: T,
      _updateValid: p,
      _removeUnmounted: A,
      _updateFieldArray: ie,
      _updateDisabledField: Ce,
      _getFieldArray: Z,
      _reset: we,
      _resetDefaultValues: () => be(r.defaultValues) && r.defaultValues().then((a) => {
        Fe(a, r.resetOptions), E.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (a) => {
        n = {
          ...n,
          ...a
        };
      },
      _disableForm: Xe,
      _subjects: E,
      _proxyFormState: R,
      _setErrors: Se,
      get _fields() {
        return s;
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
        return o;
      },
      get _names() {
        return y;
      },
      set _names(a) {
        y = a;
      },
      get _formState() {
        return n;
      },
      set _formState(a) {
        n = a;
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
    trigger: Ae,
    register: ge,
    handleSubmit: Ze,
    watch: Ne,
    setValue: oe,
    getValues: $e,
    reset: Fe,
    resetField: fr,
    clearErrors: lr,
    unregister: he,
    setError: ke,
    setFocus: (a, u = {}) => {
      const l = h(s, a), b = l && l._f;
      if (b) {
        const v = b.refs ? b.refs[0] : b.ref;
        v.focus && (v.focus(), u.shouldSelect && v.select());
      }
    },
    getFieldState: Ke
  };
}
function $t(e = {}) {
  const i = j.useRef(), r = j.useRef(), [n, s] = j.useState({
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
  i.current || (i.current = {
    ...Pt(e, () => s((f) => ({ ...f }))),
    formState: n
  });
  const o = i.current.control;
  return o._options = e, Rr({
    subject: o._subjects.state,
    next: (f) => {
      Xr(f, o._proxyFormState, o._updateFormState, !0) && s({ ...o._formState });
    }
  }), j.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), j.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const f = o._getDirty();
      f !== n.isDirty && o._subjects.state.next({
        isDirty: f
      });
    }
  }, [o, n.isDirty]), j.useEffect(() => {
    e.values && !Re(e.values, r.current) ? (o._reset(e.values, o._options.resetOptions), r.current = e.values, s((f) => ({ ...f }))) : o._resetDefaultValues();
  }, [e.values, o]), j.useEffect(() => {
    e.errors && o._setErrors(e.errors);
  }, [e.errors, o]), j.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), i.current.formState = zr(n, o), i.current;
}
const ur = ({ error: e, id: i, className: r }) => {
  const n = typeof e == "string" ? e : e == null ? void 0 : e.message;
  return n ? /* @__PURE__ */ S.jsx("span", { id: i, className: `error ${r || ""}`, children: n }) : null;
}, qe = ({
  type: e,
  name: i,
  label: r,
  validation: n,
  classes: s,
  inputProps: o,
  ...f
}) => {
  const {
    register: m,
    formState: { errors: y }
  } = me(), x = `form-${i}`;
  return /* @__PURE__ */ S.jsxs("div", { className: `container ${(s == null ? void 0 : s.container) ?? ""}`, children: [
    r && /* @__PURE__ */ S.jsx("label", { htmlFor: x, className: `input-label ${(s == null ? void 0 : s.label) ?? ""}`, children: r }),
    /* @__PURE__ */ S.jsxs("div", { className: `input-container ${(s == null ? void 0 : s.inputContainer) ?? ""}`, children: [
      o != null && o.startAdornment ? o.startAdornment : null,
      /* @__PURE__ */ S.jsx(
        "input",
        {
          id: x,
          className: `input ${s == null ? void 0 : s.input}`,
          ...m(i, n),
          type: e,
          ...f,
          ...o,
          "aria-invalid": y[i] ? "true" : "false",
          "aria-describedby": `${x}-error`
        }
      ),
      o != null && o.endAdornment ? o.endAdornment : null
    ] }),
    /* @__PURE__ */ S.jsx(
      ur,
      {
        id: `${x}-error`,
        className: s == null ? void 0 : s.error,
        error: y == null ? void 0 : y[i]
      }
    )
  ] });
}, Nt = ({
  name: e,
  options: i,
  classes: r,
  inputProps: n,
  ...s
}) => {
  const {
    register: o,
    formState: { errors: f }
  } = me(), m = `form-${e}`;
  return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    i.map((y, x) => /* @__PURE__ */ S.jsxs("div", { className: `checkbox-container ${r == null ? void 0 : r.container}`, children: [
      /* @__PURE__ */ S.jsx(
        "input",
        {
          id: `${m}-${x}`,
          ...o(e),
          ...s,
          ...n,
          type: "checkbox",
          value: y.value,
          className: `checkbox-input ${(r == null ? void 0 : r.checkbox) ?? ""}`
        }
      ),
      /* @__PURE__ */ S.jsx(
        "label",
        {
          htmlFor: `${m}-${x}`,
          className: `checkbox-label ${r == null ? void 0 : r.label}`,
          children: y.label
        }
      )
    ] }, x)),
    /* @__PURE__ */ S.jsx(
      ur,
      {
        id: `${m}-error`,
        className: r == null ? void 0 : r.error,
        error: f[e]
      }
    )
  ] });
}, It = ({
  name: e,
  options: i,
  classes: r,
  inputProps: n,
  ...s
}) => {
  const {
    register: o,
    formState: { errors: f }
  } = me(), m = `form-${e}`;
  return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    i.map((y, x) => /* @__PURE__ */ S.jsxs(
      "div",
      {
        className: `radio-container ${(r == null ? void 0 : r.container) ?? ""}`,
        children: [
          /* @__PURE__ */ S.jsx(
            "input",
            {
              id: `${m}-${x}`,
              ...o(e),
              ...s,
              type: "radio",
              ...n,
              value: y.value,
              className: `radio-input ${(r == null ? void 0 : r.radio) ?? ""}`
            }
          ),
          /* @__PURE__ */ S.jsx(
            "label",
            {
              htmlFor: `${m}-${x}`,
              className: `radio-label ${r == null ? void 0 : r.label}`,
              children: y.label
            }
          )
        ]
      },
      x
    )),
    /* @__PURE__ */ S.jsx(
      ur,
      {
        id: `${m}-error`,
        className: r == null ? void 0 : r.error,
        error: f[e]
      }
    )
  ] });
}, Lt = ({
  name: e,
  options: i,
  label: r,
  validation: n,
  classes: s,
  inputProps: o,
  ...f
}) => {
  const {
    register: m,
    formState: { errors: y }
  } = me(), x = `form-${e}`;
  return /* @__PURE__ */ S.jsxs("div", { className: `container ${(s == null ? void 0 : s.container) ?? ""}`, children: [
    r && /* @__PURE__ */ S.jsx("label", { htmlFor: x, className: `select-input ${(s == null ? void 0 : s.label) ?? ""}`, children: r }),
    /* @__PURE__ */ S.jsx(
      "select",
      {
        id: x,
        ...m(e, n),
        className: `select-input ${s == null ? void 0 : s.select}`,
        ...f,
        ...o,
        "aria-invalid": y[e] ? "true" : "false",
        "aria-describedby": `${x}-error`,
        children: i.map((F, R) => /* @__PURE__ */ S.jsx(
          "option",
          {
            value: F.value,
            className: `select-option ${(s == null ? void 0 : s.option) ?? ""}`,
            children: F.label
          },
          R
        ))
      }
    ),
    /* @__PURE__ */ S.jsx(
      ur,
      {
        id: `${x}-error`,
        className: s == null ? void 0 : s.error,
        error: y[e]
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
}, wr = {
  text: qe,
  password: qe,
  telephone: qe,
  email: qe,
  select: Lt,
  radio: It,
  checkbox: Nt,
  plainText: Ut
}, Mt = (e, i) => {
  e in wr ? console.warn(
    `Input type "${e}" is already registered. Overriding existing component.`
  ) : console.log(`Registering new input type "${e}".`), wr[e] = i;
}, Bt = (e) => wr[e], Wt = ({ type: e, ...i }) => {
  const r = Bt(e) || qe;
  return /* @__PURE__ */ S.jsx(r, { type: e, ...i });
}, Yt = (e = []) => {
  const i = {};
  return e.forEach((r) => {
    r.defaultValue && (i[r.name] = r.defaultValue);
  }), i;
}, qt = (e, i) => {
  var n;
  const r = { ...i };
  return (n = i.conditions) == null || n.forEach((s) => {
    const o = s.when;
    (typeof o == "function" ? o(e) : !1) && Object.assign(r, s.then(i));
  }), r;
}, Kt = ({
  fields: e,
  onSubmit: i,
  validation: r,
  classes: n
}) => {
  const s = Yt(
    e
  ), o = $t({
    resolver: r,
    defaultValues: s
  }), f = o.watch();
  return /* @__PURE__ */ S.jsx(pt, { ...o, children: /* @__PURE__ */ S.jsxs(
    "form",
    {
      onSubmit: o.handleSubmit(i),
      className: n == null ? void 0 : n.formContainer,
      children: [
        e.map((m, y) => {
          const {
            name: x,
            label: F,
            type: R,
            options: E = [],
            validation: q,
            classes: U,
            hide: _e = !1,
            inputProps: ve,
            ...ee
          } = qt(f, m);
          return _e ? null : /* @__PURE__ */ S.jsx(
            Wt,
            {
              ...ee,
              type: R,
              name: x,
              label: F,
              options: E,
              validation: q,
              classes: U,
              inputProps: ve
            },
            y
          );
        }),
        /* @__PURE__ */ S.jsx("button", { type: "submit", className: n == null ? void 0 : n.submitButton, children: "Submit" })
      ]
    }
  ) });
}, Ht = ({
  name: e,
  classes: i,
  label: r,
  inputProps: n,
  ...s
}) => {
  const { control: o } = me(), f = `switch-${e}`;
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      className: `d-switch-container switch-container ${(i == null ? void 0 : i.switchContainer) ?? ""}`,
      children: [
        r && /* @__PURE__ */ S.jsx(
          "label",
          {
            htmlFor: f,
            className: `d-switch-label switch-root-label ${(i == null ? void 0 : i.label) ?? ""}`,
            children: r
          }
        ),
        /* @__PURE__ */ S.jsx(
          Ft,
          {
            name: e,
            control: o,
            render: ({ field: { onChange: m, onBlur: y, value: x = !1, ref: F } }) => /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  id: f,
                  onChange: m,
                  onBlur: y,
                  ref: F,
                  className: `d-switch-input switch-input ${(i == null ? void 0 : i.input) ?? ""}`,
                  ...s,
                  ...n,
                  checked: x === !0,
                  type: "checkbox",
                  "aria-checked": x ? "true" : "false"
                }
              ),
              /* @__PURE__ */ S.jsx(
                "label",
                {
                  htmlFor: f,
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
