import "./index.css";
import O, { useRef as _t, useEffect as xt, createElement as Et, useState as Lr } from "react";
var Sr = { exports: {} }, We = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur;
function wt() {
  return Ur || (Ur = 1, process.env.NODE_ENV !== "production" && function() {
    var e = O, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), b = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), $ = Symbol.iterator, K = "@@iterator";
    function M(i) {
      if (i === null || typeof i != "object")
        return null;
      var c = $ && i[$] || i[K];
      return typeof c == "function" ? c : null;
    }
    var te = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(i) {
      {
        for (var c = arguments.length, g = new Array(c > 1 ? c - 1 : 0), R = 1; R < c; R++)
          g[R - 1] = arguments[R];
        Z("error", i, g);
      }
    }
    function Z(i, c, g) {
      {
        var R = te.ReactDebugCurrentFrame, D = R.getStackAddendum();
        D !== "" && (c += "%s", g = g.concat([D]));
        var N = g.map(function(k) {
          return String(k);
        });
        N.unshift("Warning: " + c), Function.prototype.apply.call(console[i], console, N);
      }
    }
    var oe = !1, W = !1, Re = !1, _e = !1, xe = !1, de;
    de = Symbol.for("react.module.reference");
    function Q(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === t || i === u || xe || i === o || i === F || i === x || _e || i === U || oe || W || Re || typeof i == "object" && i !== null && (i.$$typeof === p || i.$$typeof === S || i.$$typeof === f || i.$$typeof === b || i.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === de || i.getModuleId !== void 0));
    }
    function Ve(i, c, g) {
      var R = i.displayName;
      if (R)
        return R;
      var D = c.displayName || c.name || "";
      return D !== "" ? g + "(" + D + ")" : g;
    }
    function V(i) {
      return i.displayName || "Context";
    }
    function A(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case t:
          return "Fragment";
        case r:
          return "Portal";
        case u:
          return "Profiler";
        case o:
          return "StrictMode";
        case F:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case b:
            var c = i;
            return V(c) + ".Consumer";
          case f:
            var g = i;
            return V(g._context) + ".Provider";
          case d:
            return Ve(i, i.render, "ForwardRef");
          case S:
            var R = i.displayName || null;
            return R !== null ? R : A(i.type) || "Memo";
          case p: {
            var D = i, N = D._payload, k = D._init;
            try {
              return A(k(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, I = 0, ee, X, ge, le, Ee, Ne, Ae;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function ze() {
      {
        if (I === 0) {
          ee = console.log, X = console.info, ge = console.warn, le = console.error, Ee = console.group, Ne = console.groupCollapsed, Ae = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        I++;
      }
    }
    function cr() {
      {
        if (I--, I === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, i, {
              value: ee
            }),
            info: j({}, i, {
              value: X
            }),
            warn: j({}, i, {
              value: ge
            }),
            error: j({}, i, {
              value: le
            }),
            group: j({}, i, {
              value: Ee
            }),
            groupCollapsed: j({}, i, {
              value: Ne
            }),
            groupEnd: j({}, i, {
              value: Ae
            })
          });
        }
        I < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ce = te.ReactCurrentDispatcher, Ie;
    function be(i, c, g) {
      {
        if (Ie === void 0)
          try {
            throw Error();
          } catch (D) {
            var R = D.stack.trim().match(/\n( *(at )?)/);
            Ie = R && R[1] || "";
          }
        return `
` + Ie + i;
      }
    }
    var ke = !1, me;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      me = new Xe();
    }
    function Ze(i, c) {
      if (!i || ke)
        return "";
      {
        var g = me.get(i);
        if (g !== void 0)
          return g;
      }
      var R;
      ke = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = Ce.current, Ce.current = null, ze();
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
            } catch (ye) {
              R = ye;
            }
            Reflect.construct(i, [], k);
          } else {
            try {
              k.call();
            } catch (ye) {
              R = ye;
            }
            i.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            R = ye;
          }
          i();
        }
      } catch (ye) {
        if (ye && R && typeof ye.stack == "string") {
          for (var C = ye.stack.split(`
`), J = R.stack.split(`
`), B = C.length - 1, q = J.length - 1; B >= 1 && q >= 0 && C[B] !== J[q]; )
            q--;
          for (; B >= 1 && q >= 0; B--, q--)
            if (C[B] !== J[q]) {
              if (B !== 1 || q !== 1)
                do
                  if (B--, q--, q < 0 || C[B] !== J[q]) {
                    var ne = `
` + C[B].replace(" at new ", " at ");
                    return i.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", i.displayName)), typeof i == "function" && me.set(i, ne), ne;
                  }
                while (B >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        ke = !1, Ce.current = N, cr(), Error.prepareStackTrace = D;
      }
      var Te = i ? i.displayName || i.name : "", Ir = Te ? be(Te) : "";
      return typeof i == "function" && me.set(i, Ir), Ir;
    }
    function Qe(i, c, g) {
      return Ze(i, !1);
    }
    function dr(i) {
      var c = i.prototype;
      return !!(c && c.isReactComponent);
    }
    function we(i, c, g) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Ze(i, dr(i));
      if (typeof i == "string")
        return be(i);
      switch (i) {
        case F:
          return be("Suspense");
        case x:
          return be("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case d:
            return Qe(i.render);
          case S:
            return we(i.type, c, g);
          case p: {
            var R = i, D = R._payload, N = R._init;
            try {
              return we(N(D), c, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, vr = {}, yr = te.ReactDebugCurrentFrame;
    function Le(i) {
      if (i) {
        var c = i._owner, g = we(i.type, i._source, c ? c.type : null);
        yr.setExtraStackFrame(g);
      } else
        yr.setExtraStackFrame(null);
    }
    function a(i, c, g, R, D) {
      {
        var N = Function.call.bind(Se);
        for (var k in i)
          if (N(i, k)) {
            var C = void 0;
            try {
              if (typeof i[k] != "function") {
                var J = Error((R || "React class") + ": " + g + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              C = i[k](c, k, R, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              C = B;
            }
            C && !(C instanceof Error) && (Le(D), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", g, k, typeof C), Le(null)), C instanceof Error && !(C.message in vr) && (vr[C.message] = !0, Le(D), w("Failed %s type: %s", g, C.message), Le(null));
          }
      }
    }
    var s = Array.isArray;
    function l(i) {
      return s(i);
    }
    function m(i) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, g = c && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return g;
      }
    }
    function y(i) {
      try {
        return v(i), !1;
      } catch {
        return !0;
      }
    }
    function v(i) {
      return "" + i;
    }
    function E(i) {
      if (y(i))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", m(i)), v(i);
    }
    var T = te.ReactCurrentOwner, Y = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, re, ve, Ue;
    Ue = {};
    function Me(i) {
      if (Se.call(i, "ref")) {
        var c = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function Be(i) {
      if (Se.call(i, "key")) {
        var c = Object.getOwnPropertyDescriptor(i, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function hr(i, c) {
      if (typeof i.ref == "string" && T.current && c && T.current.stateNode !== c) {
        var g = A(T.current.type);
        Ue[g] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(T.current.type), i.ref), Ue[g] = !0);
      }
    }
    function er(i, c) {
      {
        var g = function() {
          re || (re = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function gr(i, c) {
      {
        var g = function() {
          ve || (ve = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var rr = function(i, c, g, R, D, N, k) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: i,
        key: c,
        ref: g,
        props: k,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(C, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function ct(i, c, g, R, D) {
      {
        var N, k = {}, C = null, J = null;
        g !== void 0 && (E(g), C = "" + g), Be(c) && (E(c.key), C = "" + c.key), Me(c) && (J = c.ref, hr(c, D));
        for (N in c)
          Se.call(c, N) && !Y.hasOwnProperty(N) && (k[N] = c[N]);
        if (i && i.defaultProps) {
          var B = i.defaultProps;
          for (N in B)
            k[N] === void 0 && (k[N] = B[N]);
        }
        if (C || J) {
          var q = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          C && er(k, q), J && gr(k, q);
        }
        return rr(i, C, J, D, R, T.current, k);
      }
    }
    var br = te.ReactCurrentOwner, Tr = te.ReactDebugCurrentFrame;
    function je(i) {
      if (i) {
        var c = i._owner, g = we(i.type, i._source, c ? c.type : null);
        Tr.setExtraStackFrame(g);
      } else
        Tr.setExtraStackFrame(null);
    }
    var mr;
    mr = !1;
    function pr(i) {
      return typeof i == "object" && i !== null && i.$$typeof === n;
    }
    function Dr() {
      {
        if (br.current) {
          var i = A(br.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function dt(i) {
      {
        if (i !== void 0) {
          var c = i.fileName.replace(/^.*[\\\/]/, ""), g = i.lineNumber;
          return `

Check your code at ` + c + ":" + g + ".";
        }
        return "";
      }
    }
    var Or = {};
    function vt(i) {
      {
        var c = Dr();
        if (!c) {
          var g = typeof i == "string" ? i : i.displayName || i.name;
          g && (c = `

Check the top-level render call using <` + g + ">.");
        }
        return c;
      }
    }
    function $r(i, c) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var g = vt(c);
        if (Or[g])
          return;
        Or[g] = !0;
        var R = "";
        i && i._owner && i._owner !== br.current && (R = " It was passed a child from " + A(i._owner.type) + "."), je(i), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, R), je(null);
      }
    }
    function Nr(i, c) {
      {
        if (typeof i != "object")
          return;
        if (l(i))
          for (var g = 0; g < i.length; g++) {
            var R = i[g];
            pr(R) && $r(R, c);
          }
        else if (pr(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var D = M(i);
          if (typeof D == "function" && D !== i.entries)
            for (var N = D.call(i), k; !(k = N.next()).done; )
              pr(k.value) && $r(k.value, c);
        }
      }
    }
    function yt(i) {
      {
        var c = i.type;
        if (c == null || typeof c == "string")
          return;
        var g;
        if (typeof c == "function")
          g = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === S))
          g = c.propTypes;
        else
          return;
        if (g) {
          var R = A(c);
          a(g, i.props, "prop", R, i);
        } else if (c.PropTypes !== void 0 && !mr) {
          mr = !0;
          var D = A(c);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(i) {
      {
        for (var c = Object.keys(i.props), g = 0; g < c.length; g++) {
          var R = c[g];
          if (R !== "children" && R !== "key") {
            je(i), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), je(null);
            break;
          }
        }
        i.ref !== null && (je(i), w("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    function Pr(i, c, g, R, D, N) {
      {
        var k = Q(i);
        if (!k) {
          var C = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = dt(D);
          J ? C += J : C += Dr();
          var B;
          i === null ? B = "null" : l(i) ? B = "array" : i !== void 0 && i.$$typeof === n ? (B = "<" + (A(i.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : B = typeof i, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, C);
        }
        var q = ct(i, c, g, D, N);
        if (q == null)
          return q;
        if (k) {
          var ne = c.children;
          if (ne !== void 0)
            if (R)
              if (l(ne)) {
                for (var Te = 0; Te < ne.length; Te++)
                  Nr(ne[Te], i);
                Object.freeze && Object.freeze(ne);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nr(ne, i);
        }
        return i === t ? ht(q) : yt(q), q;
      }
    }
    function gt(i, c, g) {
      return Pr(i, c, g, !0);
    }
    function bt(i, c, g) {
      return Pr(i, c, g, !1);
    }
    var mt = bt, pt = gt;
    We.Fragment = t, We.jsx = mt, We.jsxs = pt;
  }()), We;
}
var Ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function St() {
  if (Mr)
    return Ye;
  Mr = 1;
  var e = O, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(b, d, F) {
    var x, S = {}, p = null, U = null;
    F !== void 0 && (p = "" + F), d.key !== void 0 && (p = "" + d.key), d.ref !== void 0 && (U = d.ref);
    for (x in d)
      t.call(d, x) && !u.hasOwnProperty(x) && (S[x] = d[x]);
    if (b && b.defaultProps)
      for (x in d = b.defaultProps, d)
        S[x] === void 0 && (S[x] = d[x]);
    return { $$typeof: n, type: b, key: p, ref: U, props: S, _owner: o.current };
  }
  return Ye.Fragment = r, Ye.jsx = f, Ye.jsxs = f, Ye;
}
process.env.NODE_ENV === "production" ? Sr.exports = St() : Sr.exports = wt();
var _ = Sr.exports, Ge = (e) => e.type === "checkbox", Oe = (e) => e instanceof Date, z = (e) => e == null;
const zr = (e) => typeof e == "object";
var H = (e) => !z(e) && !Array.isArray(e) && zr(e) && !Oe(e), Xr = (e) => H(e) && e.target ? Ge(e.target) ? e.target.checked : e.target.value : e, Ft = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Zr = (e, n) => e.has(Ft(n)), Rt = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return H(n) && n.hasOwnProperty("isPrototypeOf");
}, Fr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ue(e) {
  let n;
  const r = Array.isArray(e);
  if (e instanceof Date)
    n = new Date(e);
  else if (e instanceof Set)
    n = new Set(e);
  else if (!(Fr && (e instanceof Blob || e instanceof FileList)) && (r || H(e)))
    if (n = r ? [] : {}, !r && !Rt(e))
      n = e;
    else
      for (const t in e)
        e.hasOwnProperty(t) && (n[t] = ue(e[t]));
  else
    return e;
  return n;
}
var Je = (e) => Array.isArray(e) ? e.filter(Boolean) : [], L = (e) => e === void 0, h = (e, n, r) => {
  if (!n || !H(e))
    return r;
  const t = Je(n.split(/[,[\].]+?/)).reduce((o, u) => z(o) ? o : o[u], e);
  return L(t) || t === e ? L(e[n]) ? r : e[n] : t;
}, ae = (e) => typeof e == "boolean";
const ar = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, se = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, he = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Qr = O.createContext(null), ce = () => O.useContext(Qr), Vt = (e) => {
  const { children: n, ...r } = e;
  return O.createElement(Qr.Provider, { value: r }, n);
};
var et = (e, n, r, t = !0) => {
  const o = {
    defaultValues: n._defaultValues
  };
  for (const u in e)
    Object.defineProperty(o, u, {
      get: () => {
        const f = u;
        return n._proxyFormState[f] !== se.all && (n._proxyFormState[f] = !t || se.all), r && (r[f] = !0), e[f];
      }
    });
  return o;
}, ie = (e) => H(e) && !Object.keys(e).length, rt = (e, n, r, t) => {
  r(e);
  const { name: o, ...u } = e;
  return ie(u) || Object.keys(u).length >= Object.keys(n).length || Object.keys(u).find((f) => n[f] === (!t || se.all));
}, nr = (e) => Array.isArray(e) ? e : [e], tt = (e, n, r) => !e || !n || e === n || nr(e).some((t) => t && (r ? t === n : t.startsWith(n) || n.startsWith(t)));
function Rr(e) {
  const n = O.useRef(e);
  n.current = e, O.useEffect(() => {
    const r = !e.disabled && n.current.subject && n.current.subject.subscribe({
      next: n.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function At(e) {
  const n = ce(), { control: r = n.control, disabled: t, name: o, exact: u } = e || {}, [f, b] = O.useState(r._formState), d = O.useRef(!0), F = O.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), x = O.useRef(o);
  return x.current = o, Rr({
    disabled: t,
    next: (S) => d.current && tt(x.current, S.name, u) && rt(S, F.current, r._updateFormState) && b({
      ...r._formState,
      ...S
    }),
    subject: r._subjects.state
  }), O.useEffect(() => (d.current = !0, F.current.isValid && r._updateValid(!0), () => {
    d.current = !1;
  }), [r]), et(f, r, F.current, !1);
}
var fe = (e) => typeof e == "string", nt = (e, n, r, t, o) => fe(e) ? (t && n.watch.add(e), h(r, e, o)) : Array.isArray(e) ? e.map((u) => (t && n.watch.add(u), h(r, u))) : (t && (n.watchAll = !0), r);
function Ct(e) {
  const n = ce(), { control: r = n.control, name: t, defaultValue: o, disabled: u, exact: f } = e || {}, b = O.useRef(t);
  b.current = t, Rr({
    disabled: u,
    subject: r._subjects.values,
    next: (x) => {
      tt(b.current, x.name, f) && F(ue(nt(b.current, r._names, x.values || r._formValues, !1, o)));
    }
  });
  const [d, F] = O.useState(r._getWatch(t, o));
  return O.useEffect(() => r._removeUnmounted()), d;
}
var Vr = (e) => /^\w*$/.test(e), it = (e) => Je(e.replace(/["|']|\]/g, "").split(/\.|\[/)), P = (e, n, r) => {
  let t = -1;
  const o = Vr(n) ? [n] : it(n), u = o.length, f = u - 1;
  for (; ++t < u; ) {
    const b = o[t];
    let d = r;
    if (t !== f) {
      const F = e[b];
      d = H(F) || Array.isArray(F) ? F : isNaN(+o[t + 1]) ? {} : [];
    }
    e[b] = d, e = e[b];
  }
  return e;
};
function kt(e) {
  const n = ce(), { name: r, disabled: t, control: o = n.control, shouldUnregister: u } = e, f = Zr(o._names.array, r), b = Ct({
    control: o,
    name: r,
    defaultValue: h(o._formValues, r, h(o._defaultValues, r, e.defaultValue)),
    exact: !0
  }), d = At({
    control: o,
    name: r
  }), F = O.useRef(o.register(r, {
    ...e.rules,
    value: b,
    ...ae(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return O.useEffect(() => {
    const x = o._options.shouldUnregister || u, S = (p, U) => {
      const $ = h(o._fields, p);
      $ && ($._f.mount = U);
    };
    if (S(r, !0), x) {
      const p = ue(h(o._options.defaultValues, r));
      P(o._defaultValues, r, p), L(h(o._formValues, r)) && P(o._formValues, r, p);
    }
    return () => {
      (f ? x && !o._state.action : x) ? o.unregister(r) : S(r, !1);
    };
  }, [r, o, f, u]), O.useEffect(() => {
    h(o._fields, r) && o._updateDisabledField({
      disabled: t,
      fields: o._fields,
      name: r,
      value: h(o._fields, r)._f.value
    });
  }, [t, r, o]), {
    field: {
      name: r,
      value: b,
      ...ae(t) || ae(d.disabled) ? { disabled: d.disabled || t } : {},
      onChange: O.useCallback((x) => F.current.onChange({
        target: {
          value: Xr(x),
          name: r
        },
        type: ar.CHANGE
      }), [r]),
      onBlur: O.useCallback(() => F.current.onBlur({
        target: {
          value: h(o._formValues, r),
          name: r
        },
        type: ar.BLUR
      }), [r, o]),
      ref: (x) => {
        const S = h(o._fields, r);
        S && x && (S._f.ref = {
          focus: () => x.focus(),
          select: () => x.select(),
          setCustomValidity: (p) => x.setCustomValidity(p),
          reportValidity: () => x.reportValidity()
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
const Ar = (e) => e.render(kt(e));
var jt = (e, n, r, t, o) => n ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [t]: o || !0
  }
} : {}, Br = (e) => ({
  isOnSubmit: !e || e === se.onSubmit,
  isOnBlur: e === se.onBlur,
  isOnChange: e === se.onChange,
  isOnAll: e === se.all,
  isOnTouch: e === se.onTouched
}), Wr = (e, n, r) => !r && (n.watchAll || n.watch.has(e) || [...n.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
const Ke = (e, n, r, t) => {
  for (const o of r || Object.keys(e)) {
    const u = h(e, o);
    if (u) {
      const { _f: f, ...b } = u;
      if (f) {
        if (f.refs && f.refs[0] && n(f.refs[0], o) && !t)
          break;
        if (f.ref && n(f.ref, f.name) && !t)
          break;
        Ke(b, n);
      } else
        H(b) && Ke(b, n);
    }
  }
};
var Tt = (e, n, r) => {
  const t = Je(h(e, r));
  return P(t, "root", n[r]), P(e, r, t), e;
}, Cr = (e) => e.type === "file", pe = (e) => typeof e == "function", or = (e) => {
  if (!Fr)
    return !1;
  const n = e ? e.ownerDocument : 0;
  return e instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
}, ir = (e) => fe(e), kr = (e) => e.type === "radio", ur = (e) => e instanceof RegExp;
const Yr = {
  value: !1,
  isValid: !1
}, qr = { value: !0, isValid: !0 };
var at = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const n = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: n, isValid: !!n.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !L(e[0].attributes.value) ? L(e[0].value) || e[0].value === "" ? qr : { value: e[0].value, isValid: !0 } : qr
    ) : Yr;
  }
  return Yr;
};
const Hr = {
  isValid: !1,
  value: null
};
var ot = (e) => Array.isArray(e) ? e.reduce((n, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : n, Hr) : Hr;
function Kr(e, n, r = "validate") {
  if (ir(e) || Array.isArray(e) && e.every(ir) || ae(e) && !e)
    return {
      type: r,
      message: ir(e) ? e : "",
      ref: n
    };
}
var De = (e) => H(e) && !ur(e) ? e : {
  value: e,
  message: ""
}, Gr = async (e, n, r, t, o) => {
  const { ref: u, refs: f, required: b, maxLength: d, minLength: F, min: x, max: S, pattern: p, validate: U, name: $, valueAsNumber: K, mount: M, disabled: te } = e._f, w = h(n, $);
  if (!M || te)
    return {};
  const Z = f ? f[0] : u, oe = (V) => {
    t && Z.reportValidity && (Z.setCustomValidity(ae(V) ? "" : V || ""), Z.reportValidity());
  }, W = {}, Re = kr(u), _e = Ge(u), xe = Re || _e, de = (K || Cr(u)) && L(u.value) && L(w) || or(u) && u.value === "" || w === "" || Array.isArray(w) && !w.length, Q = jt.bind(null, $, r, W), Ve = (V, A, j, I = he.maxLength, ee = he.minLength) => {
    const X = V ? A : j;
    W[$] = {
      type: V ? I : ee,
      message: X,
      ref: u,
      ...Q(V ? I : ee, X)
    };
  };
  if (o ? !Array.isArray(w) || !w.length : b && (!xe && (de || z(w)) || ae(w) && !w || _e && !at(f).isValid || Re && !ot(f).isValid)) {
    const { value: V, message: A } = ir(b) ? { value: !!b, message: b } : De(b);
    if (V && (W[$] = {
      type: he.required,
      message: A,
      ref: Z,
      ...Q(he.required, A)
    }, !r))
      return oe(A), W;
  }
  if (!de && (!z(x) || !z(S))) {
    let V, A;
    const j = De(S), I = De(x);
    if (!z(w) && !isNaN(w)) {
      const ee = u.valueAsNumber || w && +w;
      z(j.value) || (V = ee > j.value), z(I.value) || (A = ee < I.value);
    } else {
      const ee = u.valueAsDate || new Date(w), X = (Ee) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Ee), ge = u.type == "time", le = u.type == "week";
      fe(j.value) && w && (V = ge ? X(w) > X(j.value) : le ? w > j.value : ee > new Date(j.value)), fe(I.value) && w && (A = ge ? X(w) < X(I.value) : le ? w < I.value : ee < new Date(I.value));
    }
    if ((V || A) && (Ve(!!V, j.message, I.message, he.max, he.min), !r))
      return oe(W[$].message), W;
  }
  if ((d || F) && !de && (fe(w) || o && Array.isArray(w))) {
    const V = De(d), A = De(F), j = !z(V.value) && w.length > +V.value, I = !z(A.value) && w.length < +A.value;
    if ((j || I) && (Ve(j, V.message, A.message), !r))
      return oe(W[$].message), W;
  }
  if (p && !de && fe(w)) {
    const { value: V, message: A } = De(p);
    if (ur(V) && !w.match(V) && (W[$] = {
      type: he.pattern,
      message: A,
      ref: u,
      ...Q(he.pattern, A)
    }, !r))
      return oe(A), W;
  }
  if (U) {
    if (pe(U)) {
      const V = await U(w, n), A = Kr(V, Z);
      if (A && (W[$] = {
        ...A,
        ...Q(he.validate, A.message)
      }, !r))
        return oe(A.message), W;
    } else if (H(U)) {
      let V = {};
      for (const A in U) {
        if (!ie(V) && !r)
          break;
        const j = Kr(await U[A](w, n), Z, A);
        j && (V = {
          ...j,
          ...Q(A, j.message)
        }, oe(j.message), r && (W[$] = V));
      }
      if (!ie(V) && (W[$] = {
        ref: Z,
        ...V
      }, !r))
        return W;
    }
  }
  return oe(!0), W;
};
function Dt(e, n) {
  const r = n.slice(0, -1).length;
  let t = 0;
  for (; t < r; )
    e = L(e) ? t++ : e[n[t++]];
  return e;
}
function Ot(e) {
  for (const n in e)
    if (e.hasOwnProperty(n) && !L(e[n]))
      return !1;
  return !0;
}
function G(e, n) {
  const r = Array.isArray(n) ? n : Vr(n) ? [n] : it(n), t = r.length === 1 ? e : Dt(e, r), o = r.length - 1, u = r[o];
  return t && delete t[u], o !== 0 && (H(t) && ie(t) || Array.isArray(t) && Ot(t)) && G(e, r.slice(0, -1)), e;
}
var _r = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (o) => {
      for (const u of e)
        u.next && u.next(o);
    },
    subscribe: (o) => (e.push(o), {
      unsubscribe: () => {
        e = e.filter((u) => u !== o);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, sr = (e) => z(e) || !zr(e);
function Fe(e, n) {
  if (sr(e) || sr(n))
    return e === n;
  if (Oe(e) && Oe(n))
    return e.getTime() === n.getTime();
  const r = Object.keys(e), t = Object.keys(n);
  if (r.length !== t.length)
    return !1;
  for (const o of r) {
    const u = e[o];
    if (!t.includes(o))
      return !1;
    if (o !== "ref") {
      const f = n[o];
      if (Oe(u) && Oe(f) || H(u) && H(f) || Array.isArray(u) && Array.isArray(f) ? !Fe(u, f) : u !== f)
        return !1;
    }
  }
  return !0;
}
var ut = (e) => e.type === "select-multiple", $t = (e) => kr(e) || Ge(e), xr = (e) => or(e) && e.isConnected, st = (e) => {
  for (const n in e)
    if (pe(e[n]))
      return !0;
  return !1;
};
function lr(e, n = {}) {
  const r = Array.isArray(e);
  if (H(e) || r)
    for (const t in e)
      Array.isArray(e[t]) || H(e[t]) && !st(e[t]) ? (n[t] = Array.isArray(e[t]) ? [] : {}, lr(e[t], n[t])) : z(e[t]) || (n[t] = !0);
  return n;
}
function lt(e, n, r) {
  const t = Array.isArray(e);
  if (H(e) || t)
    for (const o in e)
      Array.isArray(e[o]) || H(e[o]) && !st(e[o]) ? L(n) || sr(r[o]) ? r[o] = Array.isArray(e[o]) ? lr(e[o], []) : { ...lr(e[o]) } : lt(e[o], z(n) ? {} : n[o], r[o]) : r[o] = !Fe(e[o], n[o]);
  return r;
}
var Er = (e, n) => lt(e, n, lr(n)), ft = (e, { valueAsNumber: n, valueAsDate: r, setValueAs: t }) => L(e) ? e : n ? e === "" ? NaN : e && +e : r && fe(e) ? new Date(e) : t ? t(e) : e;
function wr(e) {
  const n = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : n.disabled))
    return Cr(n) ? n.files : kr(n) ? ot(e.refs).value : ut(n) ? [...n.selectedOptions].map(({ value: r }) => r) : Ge(n) ? at(e.refs).value : ft(L(n.value) ? e.ref.value : n.value, e);
}
var Nt = (e, n, r, t) => {
  const o = {};
  for (const u of e) {
    const f = h(n, u);
    f && P(o, u, f._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: t
  };
}, qe = (e) => L(e) ? e : ur(e) ? e.source : H(e) ? ur(e.value) ? e.value.source : e.value : e, Pt = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Jr(e, n, r) {
  const t = h(e, r);
  if (t || Vr(r))
    return {
      error: t,
      name: r
    };
  const o = r.split(".");
  for (; o.length; ) {
    const u = o.join("."), f = h(n, u), b = h(e, u);
    if (f && !Array.isArray(f) && r !== u)
      return { name: r };
    if (b && b.type)
      return {
        name: u,
        error: b
      };
    o.pop();
  }
  return {
    name: r
  };
}
var It = (e, n, r, t, o) => o.isOnAll ? !1 : !r && o.isOnTouch ? !(n || e) : (r ? t.isOnBlur : o.isOnBlur) ? !e : (r ? t.isOnChange : o.isOnChange) ? e : !0, Lt = (e, n) => !Je(h(e, n)).length && G(e, n);
const Ut = {
  mode: se.onSubmit,
  reValidateMode: se.onChange,
  shouldFocusError: !0
};
function Mt(e = {}, n) {
  let r = {
    ...Ut,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: pe(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: !1
  }, o = {}, u = H(r.defaultValues) || H(r.values) ? ue(r.defaultValues || r.values) || {} : {}, f = r.shouldUnregister ? {} : ue(u), b = {
    action: !1,
    mount: !1,
    watch: !1
  }, d = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, F, x = 0;
  const S = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, p = {
    values: _r(),
    array: _r(),
    state: _r()
  }, U = e.resetOptions && e.resetOptions.keepDirtyValues, $ = Br(r.mode), K = Br(r.reValidateMode), M = r.criteriaMode === se.all, te = (a) => (s) => {
    clearTimeout(x), x = setTimeout(a, s);
  }, w = async (a) => {
    if (S.isValid || a) {
      const s = r.resolver ? ie((await Q()).errors) : await V(o, !0);
      s !== t.isValid && p.state.next({
        isValid: s
      });
    }
  }, Z = (a) => S.isValidating && p.state.next({
    isValidating: a
  }), oe = (a, s = [], l, m, y = !0, v = !0) => {
    if (m && l) {
      if (b.action = !0, v && Array.isArray(h(o, a))) {
        const E = l(h(o, a), m.argA, m.argB);
        y && P(o, a, E);
      }
      if (v && Array.isArray(h(t.errors, a))) {
        const E = l(h(t.errors, a), m.argA, m.argB);
        y && P(t.errors, a, E), Lt(t.errors, a);
      }
      if (S.touchedFields && v && Array.isArray(h(t.touchedFields, a))) {
        const E = l(h(t.touchedFields, a), m.argA, m.argB);
        y && P(t.touchedFields, a, E);
      }
      S.dirtyFields && (t.dirtyFields = Er(u, f)), p.state.next({
        name: a,
        isDirty: j(a, s),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      P(f, a, s);
  }, W = (a, s) => {
    P(t.errors, a, s), p.state.next({
      errors: t.errors
    });
  }, Re = (a) => {
    t.errors = a, p.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, _e = (a, s, l, m) => {
    const y = h(o, a);
    if (y) {
      const v = h(f, a, L(l) ? h(u, a) : l);
      L(v) || m && m.defaultChecked || s ? P(f, a, s ? v : wr(y._f)) : X(a, v), b.mount && w();
    }
  }, xe = (a, s, l, m, y) => {
    let v = !1, E = !1;
    const T = {
      name: a
    }, Y = !!(h(o, a) && h(o, a)._f.disabled);
    if (!l || m) {
      S.isDirty && (E = t.isDirty, t.isDirty = T.isDirty = j(), v = E !== T.isDirty);
      const re = Y || Fe(h(u, a), s);
      E = !!(!Y && h(t.dirtyFields, a)), re || Y ? G(t.dirtyFields, a) : P(t.dirtyFields, a, !0), T.dirtyFields = t.dirtyFields, v = v || S.dirtyFields && E !== !re;
    }
    if (l) {
      const re = h(t.touchedFields, a);
      re || (P(t.touchedFields, a, l), T.touchedFields = t.touchedFields, v = v || S.touchedFields && re !== l);
    }
    return v && y && p.state.next(T), v ? T : {};
  }, de = (a, s, l, m) => {
    const y = h(t.errors, a), v = S.isValid && ae(s) && t.isValid !== s;
    if (e.delayError && l ? (F = te(() => W(a, l)), F(e.delayError)) : (clearTimeout(x), F = null, l ? P(t.errors, a, l) : G(t.errors, a)), (l ? !Fe(y, l) : y) || !ie(m) || v) {
      const E = {
        ...m,
        ...v && ae(s) ? { isValid: s } : {},
        errors: t.errors,
        name: a
      };
      t = {
        ...t,
        ...E
      }, p.state.next(E);
    }
    Z(!1);
  }, Q = async (a) => r.resolver(f, r.context, Nt(a || d.mount, o, r.criteriaMode, r.shouldUseNativeValidation)), Ve = async (a) => {
    const { errors: s } = await Q(a);
    if (a)
      for (const l of a) {
        const m = h(s, l);
        m ? P(t.errors, l, m) : G(t.errors, l);
      }
    else
      t.errors = s;
    return s;
  }, V = async (a, s, l = {
    valid: !0
  }) => {
    for (const m in a) {
      const y = a[m];
      if (y) {
        const { _f: v, ...E } = y;
        if (v) {
          const T = d.array.has(v.name), Y = await Gr(y, f, M, r.shouldUseNativeValidation && !s, T);
          if (Y[v.name] && (l.valid = !1, s))
            break;
          !s && (h(Y, v.name) ? T ? Tt(t.errors, Y, v.name) : P(t.errors, v.name, Y[v.name]) : G(t.errors, v.name));
        }
        E && await V(E, s, l);
      }
    }
    return l.valid;
  }, A = () => {
    for (const a of d.unMount) {
      const s = h(o, a);
      s && (s._f.refs ? s._f.refs.every((l) => !xr(l)) : !xr(s._f.ref)) && be(a);
    }
    d.unMount = /* @__PURE__ */ new Set();
  }, j = (a, s) => (a && s && P(f, a, s), !Fe(Pe(), u)), I = (a, s, l) => nt(a, d, {
    ...b.mount ? f : L(s) ? u : fe(a) ? { [a]: s } : s
  }, l, s), ee = (a) => Je(h(b.mount ? f : u, a, e.shouldUnregister ? h(u, a, []) : [])), X = (a, s, l = {}) => {
    const m = h(o, a);
    let y = s;
    if (m) {
      const v = m._f;
      v && (!v.disabled && P(f, a, ft(s, v)), y = or(v.ref) && z(s) ? "" : s, ut(v.ref) ? [...v.ref.options].forEach((E) => E.selected = y.includes(E.value)) : v.refs ? Ge(v.ref) ? v.refs.length > 1 ? v.refs.forEach((E) => (!E.defaultChecked || !E.disabled) && (E.checked = Array.isArray(y) ? !!y.find((T) => T === E.value) : y === E.value)) : v.refs[0] && (v.refs[0].checked = !!y) : v.refs.forEach((E) => E.checked = E.value === y) : Cr(v.ref) ? v.ref.value = "" : (v.ref.value = y, v.ref.type || p.values.next({
        name: a,
        values: { ...f }
      })));
    }
    (l.shouldDirty || l.shouldTouch) && xe(a, y, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && Ae(a);
  }, ge = (a, s, l) => {
    for (const m in s) {
      const y = s[m], v = `${a}.${m}`, E = h(o, v);
      (d.array.has(a) || !sr(y) || E && !E._f) && !Oe(y) ? ge(v, y, l) : X(v, y, l);
    }
  }, le = (a, s, l = {}) => {
    const m = h(o, a), y = d.array.has(a), v = ue(s);
    P(f, a, v), y ? (p.array.next({
      name: a,
      values: { ...f }
    }), (S.isDirty || S.dirtyFields) && l.shouldDirty && p.state.next({
      name: a,
      dirtyFields: Er(u, f),
      isDirty: j(a, v)
    })) : m && !m._f && !z(v) ? ge(a, v, l) : X(a, v, l), Wr(a, d) && p.state.next({ ...t }), p.values.next({
      name: a,
      values: { ...f }
    }), !b.mount && n();
  }, Ee = async (a) => {
    const s = a.target;
    let l = s.name, m = !0;
    const y = h(o, l), v = () => s.type ? wr(y._f) : Xr(a), E = (T) => {
      m = Number.isNaN(T) || T === h(f, l, T);
    };
    if (y) {
      let T, Y;
      const re = v(), ve = a.type === ar.BLUR || a.type === ar.FOCUS_OUT, Ue = !Pt(y._f) && !r.resolver && !h(t.errors, l) && !y._f.deps || It(ve, h(t.touchedFields, l), t.isSubmitted, K, $), Me = Wr(l, d, ve);
      P(f, l, re), ve ? (y._f.onBlur && y._f.onBlur(a), F && F(0)) : y._f.onChange && y._f.onChange(a);
      const Be = xe(l, re, ve, !1), hr = !ie(Be) || Me;
      if (!ve && p.values.next({
        name: l,
        type: a.type,
        values: { ...f }
      }), Ue)
        return S.isValid && w(), hr && p.state.next({ name: l, ...Me ? {} : Be });
      if (!ve && Me && p.state.next({ ...t }), Z(!0), r.resolver) {
        const { errors: er } = await Q([l]);
        if (E(re), m) {
          const gr = Jr(t.errors, o, l), rr = Jr(er, o, gr.name || l);
          T = rr.error, l = rr.name, Y = ie(er);
        }
      } else
        T = (await Gr(y, f, M, r.shouldUseNativeValidation))[l], E(re), m && (T ? Y = !1 : S.isValid && (Y = await V(o, !0)));
      m && (y._f.deps && Ae(y._f.deps), de(l, Y, T, Be));
    }
  }, Ne = (a, s) => {
    if (h(t.errors, s) && a.focus)
      return a.focus(), 1;
  }, Ae = async (a, s = {}) => {
    let l, m;
    const y = nr(a);
    if (Z(!0), r.resolver) {
      const v = await Ve(L(a) ? a : y);
      l = ie(v), m = a ? !y.some((E) => h(v, E)) : l;
    } else
      a ? (m = (await Promise.all(y.map(async (v) => {
        const E = h(o, v);
        return await V(E && E._f ? { [v]: E } : E);
      }))).every(Boolean), !(!m && !t.isValid) && w()) : m = l = await V(o);
    return p.state.next({
      ...!fe(a) || S.isValid && l !== t.isValid ? {} : { name: a },
      ...r.resolver || !a ? { isValid: l } : {},
      errors: t.errors,
      isValidating: !1
    }), s.shouldFocus && !m && Ke(o, Ne, a ? y : d.mount), m;
  }, Pe = (a) => {
    const s = {
      ...u,
      ...b.mount ? f : {}
    };
    return L(a) ? s : fe(a) ? h(s, a) : a.map((l) => h(s, l));
  }, ze = (a, s) => ({
    invalid: !!h((s || t).errors, a),
    isDirty: !!h((s || t).dirtyFields, a),
    isTouched: !!h((s || t).touchedFields, a),
    error: h((s || t).errors, a)
  }), cr = (a) => {
    a && nr(a).forEach((s) => G(t.errors, s)), p.state.next({
      errors: a ? t.errors : {}
    });
  }, Ce = (a, s, l) => {
    const m = (h(o, a, { _f: {} })._f || {}).ref;
    P(t.errors, a, {
      ...s,
      ref: m
    }), p.state.next({
      name: a,
      errors: t.errors,
      isValid: !1
    }), l && l.shouldFocus && m && m.focus && m.focus();
  }, Ie = (a, s) => pe(a) ? p.values.subscribe({
    next: (l) => a(I(void 0, s), l)
  }) : I(a, s, !0), be = (a, s = {}) => {
    for (const l of a ? nr(a) : d.mount)
      d.mount.delete(l), d.array.delete(l), s.keepValue || (G(o, l), G(f, l)), !s.keepError && G(t.errors, l), !s.keepDirty && G(t.dirtyFields, l), !s.keepTouched && G(t.touchedFields, l), !r.shouldUnregister && !s.keepDefaultValue && G(u, l);
    p.values.next({
      values: { ...f }
    }), p.state.next({
      ...t,
      ...s.keepDirty ? { isDirty: j() } : {}
    }), !s.keepIsValid && w();
  }, ke = ({ disabled: a, name: s, field: l, fields: m, value: y }) => {
    if (ae(a)) {
      const v = a ? void 0 : L(y) ? wr(l ? l._f : h(m, s)._f) : y;
      P(f, s, v), xe(s, v, !1, !1, !0);
    }
  }, me = (a, s = {}) => {
    let l = h(o, a);
    const m = ae(s.disabled);
    return P(o, a, {
      ...l || {},
      _f: {
        ...l && l._f ? l._f : { ref: { name: a } },
        name: a,
        mount: !0,
        ...s
      }
    }), d.mount.add(a), l ? ke({
      field: l,
      disabled: s.disabled,
      name: a,
      value: s.value
    }) : _e(a, !0, s.value), {
      ...m ? { disabled: s.disabled } : {},
      ...r.progressive ? {
        required: !!s.required,
        min: qe(s.min),
        max: qe(s.max),
        minLength: qe(s.minLength),
        maxLength: qe(s.maxLength),
        pattern: qe(s.pattern)
      } : {},
      name: a,
      onChange: Ee,
      onBlur: Ee,
      ref: (y) => {
        if (y) {
          me(a, s), l = h(o, a);
          const v = L(y.value) && y.querySelectorAll && y.querySelectorAll("input,select,textarea")[0] || y, E = $t(v), T = l._f.refs || [];
          if (E ? T.find((Y) => Y === v) : v === l._f.ref)
            return;
          P(o, a, {
            _f: {
              ...l._f,
              ...E ? {
                refs: [
                  ...T.filter(xr),
                  v,
                  ...Array.isArray(h(u, a)) ? [{}] : []
                ],
                ref: { type: v.type, name: a }
              } : { ref: v }
            }
          }), _e(a, !1, void 0, v);
        } else
          l = h(o, a, {}), l._f && (l._f.mount = !1), (r.shouldUnregister || s.shouldUnregister) && !(Zr(d.array, a) && b.action) && d.unMount.add(a);
      }
    };
  }, Xe = () => r.shouldFocusError && Ke(o, Ne, d.mount), Ze = (a) => {
    ae(a) && (p.state.next({ disabled: a }), Ke(o, (s, l) => {
      let m = a;
      const y = h(o, l);
      y && ae(y._f.disabled) && (m || (m = y._f.disabled)), s.disabled = m;
    }, 0, !1));
  }, Qe = (a, s) => async (l) => {
    l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
    let m = ue(f);
    if (p.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: y, values: v } = await Q();
      t.errors = y, m = v;
    } else
      await V(o);
    G(t.errors, "root"), ie(t.errors) ? (p.state.next({
      errors: {}
    }), await a(m, l)) : (s && await s({ ...t.errors }, l), Xe(), setTimeout(Xe)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: ie(t.errors),
      submitCount: t.submitCount + 1,
      errors: t.errors
    });
  }, dr = (a, s = {}) => {
    h(o, a) && (L(s.defaultValue) ? le(a, h(u, a)) : (le(a, s.defaultValue), P(u, a, s.defaultValue)), s.keepTouched || G(t.touchedFields, a), s.keepDirty || (G(t.dirtyFields, a), t.isDirty = s.defaultValue ? j(a, h(u, a)) : j()), s.keepError || (G(t.errors, a), S.isValid && w()), p.state.next({ ...t }));
  }, we = (a, s = {}) => {
    const l = a ? ue(a) : u, m = ue(l), y = a && !ie(a) ? m : u;
    if (s.keepDefaultValues || (u = l), !s.keepValues) {
      if (s.keepDirtyValues || U)
        for (const v of d.mount)
          h(t.dirtyFields, v) ? P(y, v, h(f, v)) : le(v, h(y, v));
      else {
        if (Fr && L(a))
          for (const v of d.mount) {
            const E = h(o, v);
            if (E && E._f) {
              const T = Array.isArray(E._f.refs) ? E._f.refs[0] : E._f.ref;
              if (or(T)) {
                const Y = T.closest("form");
                if (Y) {
                  Y.reset();
                  break;
                }
              }
            }
          }
        o = {};
      }
      f = e.shouldUnregister ? s.keepDefaultValues ? ue(u) : {} : ue(y), p.array.next({
        values: { ...y }
      }), p.values.next({
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
    }, !b.mount && n(), b.mount = !S.isValid || !!s.keepIsValid, b.watch = !!e.shouldUnregister, p.state.next({
      submitCount: s.keepSubmitCount ? t.submitCount : 0,
      isDirty: s.keepDirty ? t.isDirty : !!(s.keepDefaultValues && !Fe(a, u)),
      isSubmitted: s.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: s.keepDirtyValues ? t.dirtyFields : s.keepDefaultValues && a ? Er(u, a) : {},
      touchedFields: s.keepTouched ? t.touchedFields : {},
      errors: s.keepErrors ? t.errors : {},
      isSubmitSuccessful: s.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Se = (a, s) => we(pe(a) ? a(f) : a, s);
  return {
    control: {
      register: me,
      unregister: be,
      getFieldState: ze,
      handleSubmit: Qe,
      setError: Ce,
      _executeSchema: Q,
      _getWatch: I,
      _getDirty: j,
      _updateValid: w,
      _removeUnmounted: A,
      _updateFieldArray: oe,
      _updateDisabledField: ke,
      _getFieldArray: ee,
      _reset: we,
      _resetDefaultValues: () => pe(r.defaultValues) && r.defaultValues().then((a) => {
        Se(a, r.resetOptions), p.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (a) => {
        t = {
          ...t,
          ...a
        };
      },
      _disableForm: Ze,
      _subjects: p,
      _proxyFormState: S,
      _setErrors: Re,
      get _fields() {
        return o;
      },
      get _formValues() {
        return f;
      },
      get _state() {
        return b;
      },
      set _state(a) {
        b = a;
      },
      get _defaultValues() {
        return u;
      },
      get _names() {
        return d;
      },
      set _names(a) {
        d = a;
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
    trigger: Ae,
    register: me,
    handleSubmit: Qe,
    watch: Ie,
    setValue: le,
    getValues: Pe,
    reset: Se,
    resetField: dr,
    clearErrors: cr,
    unregister: be,
    setError: Ce,
    setFocus: (a, s = {}) => {
      const l = h(o, a), m = l && l._f;
      if (m) {
        const y = m.refs ? m.refs[0] : m.ref;
        y.focus && (y.focus(), s.shouldSelect && y.select());
      }
    },
    getFieldState: ze
  };
}
function Bt(e = {}) {
  const n = O.useRef(), r = O.useRef(), [t, o] = O.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: pe(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: !1,
    defaultValues: pe(e.defaultValues) ? void 0 : e.defaultValues
  });
  n.current || (n.current = {
    ...Mt(e, () => o((f) => ({ ...f }))),
    formState: t
  });
  const u = n.current.control;
  return u._options = e, Rr({
    subject: u._subjects.state,
    next: (f) => {
      rt(f, u._proxyFormState, u._updateFormState, !0) && o({ ...u._formState });
    }
  }), O.useEffect(() => u._disableForm(e.disabled), [u, e.disabled]), O.useEffect(() => {
    if (u._proxyFormState.isDirty) {
      const f = u._getDirty();
      f !== t.isDirty && u._subjects.state.next({
        isDirty: f
      });
    }
  }, [u, t.isDirty]), O.useEffect(() => {
    e.values && !Fe(e.values, r.current) ? (u._reset(e.values, u._options.resetOptions), r.current = e.values, o((f) => ({ ...f }))) : u._resetDefaultValues();
  }, [e.values, u]), O.useEffect(() => {
    e.errors && u._setErrors(e.errors);
  }, [e.errors, u]), O.useEffect(() => {
    u._state.mount || (u._updateValid(), u._state.mount = !0), u._state.watch && (u._state.watch = !1, u._subjects.state.next({ ...u._formState })), u._removeUnmounted();
  }), n.current.formState = et(t, u), n.current;
}
const $e = ({ error: e, id: n, className: r }) => {
  const t = typeof e == "string" ? e : e == null ? void 0 : e.message;
  return t ? /* @__PURE__ */ _.jsx("span", { id: n, className: `error ${r || ""}`, children: t }) : null;
}, He = ({
  type: e,
  name: n,
  label: r,
  classes: t,
  inputProps: o,
  ...u
}) => {
  const {
    register: f,
    formState: { errors: b }
  } = ce(), d = `form-${n}`;
  return /* @__PURE__ */ _.jsxs("div", { className: `container ${(t == null ? void 0 : t.container) ?? ""}`, children: [
    r && /* @__PURE__ */ _.jsx("label", { htmlFor: d, className: `input-label ${(t == null ? void 0 : t.label) ?? ""}`, children: r }),
    /* @__PURE__ */ _.jsxs("div", { className: `input-container ${(t == null ? void 0 : t.inputContainer) ?? ""}`, children: [
      o != null && o.startAdornment ? o.startAdornment : null,
      /* @__PURE__ */ _.jsx(
        "input",
        {
          id: d,
          className: `input ${t == null ? void 0 : t.input}`,
          ...f(n),
          type: e,
          ...u,
          ...o,
          "aria-invalid": b[n] ? "true" : "false",
          "aria-describedby": `${d}-error`
        }
      ),
      o != null && o.endAdornment ? o.endAdornment : null
    ] }),
    /* @__PURE__ */ _.jsx(
      $e,
      {
        id: `${d}-error`,
        className: t == null ? void 0 : t.error,
        error: b == null ? void 0 : b[n]
      }
    )
  ] });
}, Wt = ({
  name: e,
  options: n,
  classes: r,
  inputProps: t,
  label: o,
  ...u
}) => {
  const {
    register: f,
    formState: { errors: b }
  } = ce(), d = `form-${e}`;
  return /* @__PURE__ */ _.jsxs("div", { className: `container ${(r == null ? void 0 : r.container) ?? ""}`, children: [
    o && /* @__PURE__ */ _.jsx(
      "label",
      {
        htmlFor: d,
        className: `checkbox-label ${(r == null ? void 0 : r.label) ?? ""}`,
        children: o
      }
    ),
    n.map((F, x) => /* @__PURE__ */ _.jsxs("div", { className: `checkbox-container ${r == null ? void 0 : r.container}`, children: [
      /* @__PURE__ */ _.jsx(
        "input",
        {
          id: `${d}-${x}`,
          ...f(e),
          ...u,
          ...t,
          type: "checkbox",
          value: F.value,
          className: `checkbox-input ${(r == null ? void 0 : r.checkbox) ?? ""}`
        }
      ),
      /* @__PURE__ */ _.jsx(
        "label",
        {
          htmlFor: `${d}-${x}`,
          className: `checkbox-label ${r == null ? void 0 : r.label}`,
          children: F.label
        }
      )
    ] }, x)),
    /* @__PURE__ */ _.jsx(
      $e,
      {
        id: `${d}-error`,
        className: r == null ? void 0 : r.error,
        error: b[e]
      }
    )
  ] });
}, Yt = ({
  name: e,
  options: n,
  classes: r,
  inputProps: t,
  label: o,
  ...u
}) => {
  const {
    register: f,
    formState: { errors: b }
  } = ce(), d = `form-${e}`;
  return /* @__PURE__ */ _.jsxs("div", { className: `container ${(r == null ? void 0 : r.container) ?? ""}`, children: [
    o && /* @__PURE__ */ _.jsx(
      "label",
      {
        htmlFor: d,
        className: `radio-label ${(r == null ? void 0 : r.rootLabel) ?? ""}`,
        children: o
      }
    ),
    n.map((F, x) => /* @__PURE__ */ _.jsxs(
      "div",
      {
        className: `radio-container ${(r == null ? void 0 : r.container) ?? ""}`,
        children: [
          /* @__PURE__ */ _.jsx(
            "input",
            {
              id: `${d}-${x}`,
              ...f(e),
              ...u,
              type: "radio",
              ...t,
              value: F.value,
              className: `radio-input ${(r == null ? void 0 : r.radio) ?? ""}`
            }
          ),
          /* @__PURE__ */ _.jsx(
            "label",
            {
              htmlFor: `${d}-${x}`,
              className: `radio-label ${r == null ? void 0 : r.label}`,
              children: F.label
            }
          )
        ]
      },
      x
    )),
    /* @__PURE__ */ _.jsx(
      $e,
      {
        id: `${d}-error`,
        className: r == null ? void 0 : r.error,
        error: b[e]
      }
    )
  ] });
}, qt = ({
  name: e,
  options: n,
  label: r,
  classes: t,
  inputProps: o,
  ...u
}) => {
  const {
    register: f,
    formState: { errors: b }
  } = ce(), d = `form-${e}`;
  return /* @__PURE__ */ _.jsxs("div", { className: `container ${(t == null ? void 0 : t.container) ?? ""}`, children: [
    r && /* @__PURE__ */ _.jsx("label", { htmlFor: d, className: `select-input ${(t == null ? void 0 : t.label) ?? ""}`, children: r }),
    /* @__PURE__ */ _.jsx(
      "select",
      {
        id: d,
        ...f(e),
        className: `select-input ${t == null ? void 0 : t.select}`,
        ...u,
        ...o,
        "aria-invalid": b[e] ? "true" : "false",
        "aria-describedby": `${d}-error`,
        children: n.map((F, x) => /* @__PURE__ */ _.jsx(
          "option",
          {
            value: F.value,
            className: `select-option ${(t == null ? void 0 : t.option) ?? ""}`,
            children: F.label
          },
          x
        ))
      }
    ),
    /* @__PURE__ */ _.jsx(
      $e,
      {
        id: `${d}-error`,
        className: t == null ? void 0 : t.error,
        error: b[e]
      }
    )
  ] });
}, Ht = (e) => {
  const { text: n, className: r } = e;
  return /* @__PURE__ */ _.jsx(_.Fragment, { children: typeof n == "string" ? /* @__PURE__ */ _.jsx(
    "div",
    {
      className: `pain-text ${r}`,
      dangerouslySetInnerHTML: { __html: n }
    }
  ) : /* @__PURE__ */ _.jsx(_.Fragment, { children: n }) });
}, fr = {
  text: He,
  password: He,
  telephone: He,
  email: He,
  select: qt,
  radio: Yt,
  checkbox: Wt,
  plainText: Ht
}, jr = (e, n) => {
  e in fr ? console.warn(
    `Input type "${e}" is already registered. Overriding existing component.`
  ) : console.log(`Registering new input type "${e}".`), fr[e] = n;
}, Kt = (e) => e in fr ? fr[e] : He, Gt = ({ type: e, ...n }) => {
  const r = Kt(e);
  return /* @__PURE__ */ _.jsx(r, { type: e, ...n });
}, Jt = (e = []) => {
  const n = {};
  return e.forEach((r) => {
    r != null && r.defaultValue && (n[r.name] = r == null ? void 0 : r.defaultValue);
  }), n;
}, zt = (e, n) => {
  var t;
  const r = { ...n };
  return (t = n.conditions) == null || t.forEach((o) => {
    const u = o.when;
    (typeof u == "function" ? u(e) : !1) && Object.assign(r, o.then(n));
  }), r;
}, tn = ({
  fields: e,
  onSubmit: n,
  validation: r,
  classes: t
}) => {
  const o = Jt(
    e
  ), u = Bt({
    resolver: r,
    defaultValues: o
  }), f = u.watch();
  return /* @__PURE__ */ _.jsx(Vt, { ...u, children: /* @__PURE__ */ _.jsxs(
    "form",
    {
      onSubmit: u.handleSubmit(n),
      className: t == null ? void 0 : t.formContainer,
      children: [
        e.map((b, d) => {
          const {
            type: F,
            hide: x = !1,
            ...S
          } = zt(f, b), p = F;
          return x ? null : /* @__PURE__ */ _.jsx(Gt, { ...S, type: p }, d);
        }),
        /* @__PURE__ */ _.jsx("button", { type: "submit", className: t == null ? void 0 : t.submitButton, children: "Submit" })
      ]
    }
  ) });
}, Xt = ({
  name: e,
  length: n,
  classes: r,
  label: t,
  inputProps: o
}) => {
  const {
    control: u,
    formState: { errors: f }
  } = ce(), b = _t([]);
  xt(() => {
    b.current = b.current.slice(0, n);
  }, [n]);
  const d = (x, S) => {
    var p, U;
    x.key === "Backspace" ? S > 0 && ((p = b.current[S - 1]) == null || p.focus()) : S < n - 1 && ((U = b.current[S + 1]) == null || U.focus());
  }, F = `form-${e}`;
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsx(
      Ar,
      {
        name: e,
        control: u,
        render: ({ field: { onChange: x, onBlur: S, value: p = "" } }) => /* @__PURE__ */ _.jsxs(
          "div",
          {
            className: `phone-otp-input ${(r == null ? void 0 : r.root) ?? ""}`,
            role: "group",
            "aria-labelledby": `${F}-label`,
            children: [
              t && /* @__PURE__ */ _.jsx(
                "div",
                {
                  id: `${F}-label`,
                  className: `phone-otp-input ${(r == null ? void 0 : r.label) ?? ""}`,
                  children: t
                }
              ),
              Array.from({ length: n }).map((U, $) => /* @__PURE__ */ Et(
                "input",
                {
                  ...o,
                  key: $,
                  ref: (K) => b.current[$] = K,
                  type: "numeric",
                  maxLength: 1,
                  onChange: (K) => {
                    const M = p == null ? void 0 : p.split("");
                    M[$] = K.target.value, x(M.join(""));
                  },
                  "aria-label": `Digit ${$ + 1}`,
                  onKeyUp: (K) => d(K, $),
                  onBlur: S,
                  value: (p == null ? void 0 : p[$]) || "",
                  className: `otp-input ${(r == null ? void 0 : r.input) ?? ""}`,
                  "aria-invalid": !!(f != null && f[e]),
                  autoComplete: "one-time-code"
                }
              ))
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ _.jsx(
      $e,
      {
        id: `${F}-error`,
        className: r == null ? void 0 : r.error,
        error: f == null ? void 0 : f[e]
      }
    )
  ] });
}, tr = [
  { name: "United States", code: "+1", pattern: "(xxx) xxx-xxxx" },
  { name: "United Kingdom", code: "+44", pattern: "xxxx xxxxxx" },
  { name: "Canada", code: "+1", pattern: "(xxx) xxx-xxxx" }
], Zt = ({
  name: e,
  classes: n,
  label: r,
  inputProps: t,
  selectProps: o
}) => {
  const {
    control: u,
    formState: { errors: f }
  } = ce(), [b, d] = Lr(
    tr[0].code
  ), [, F] = Lr(tr[0].pattern), x = `form-${e}`;
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsx(
      Ar,
      {
        name: e,
        control: u,
        render: ({ field: { onChange: S, onBlur: p, value: U = "", ref: $ } }) => /* @__PURE__ */ _.jsxs("div", { className: `rf--phone-number ${(n == null ? void 0 : n.root) ?? ""}`, children: [
          r && /* @__PURE__ */ _.jsx(
            "div",
            {
              id: `${x}-label`,
              className: `phone-otp-input ${(n == null ? void 0 : n.label) ?? ""}`,
              children: r
            }
          ),
          /* @__PURE__ */ _.jsx(
            "div",
            {
              className: `rf--phone-number-country-select-wrapper ${(n == null ? void 0 : n.selectWrapper) ?? ""}`,
              children: /* @__PURE__ */ _.jsx(
                "select",
                {
                  ...o,
                  onChange: (K) => {
                    const M = tr.find(
                      (te) => te.name === K.target.value
                    );
                    d((M == null ? void 0 : M.code) || ""), F((M == null ? void 0 : M.pattern) || ""), S(`${M == null ? void 0 : M.code} `);
                  },
                  "aria-label": "Country Code",
                  onBlur: p,
                  ref: $,
                  className: `rf--phone-numbe-country-select ${(n == null ? void 0 : n.select) ?? ""}`,
                  children: tr.map((K, M) => /* @__PURE__ */ _.jsxs("option", { value: K.name, children: [
                    K.name,
                    " (",
                    K.code,
                    ")"
                  ] }, M))
                }
              )
            }
          ),
          /* @__PURE__ */ _.jsx(
            "div",
            {
              className: `rf--phone-number-input-wrapper ${(n == null ? void 0 : n.inputWrapper) ?? ""}`,
              children: /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "tel",
                  ...t,
                  onChange: S,
                  onBlur: p,
                  value: U,
                  className: `rf--phone-number-input ${(n == null ? void 0 : n.input) ?? ""}`,
                  placeholder: `${b} `,
                  "aria-invalid": !!(f != null && f[e]),
                  "aria-label": "Phone Number"
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ _.jsx(
      $e,
      {
        id: `${x}-error`,
        className: n == null ? void 0 : n.error,
        error: f == null ? void 0 : f[e]
      }
    )
  ] });
}, Qt = ({
  name: e,
  classes: n,
  label: r,
  inputProps: t
}) => {
  const { control: o } = ce(), u = `switch-${e}`;
  return /* @__PURE__ */ _.jsxs(
    "div",
    {
      className: `d-switch-container switch-container ${(n == null ? void 0 : n.switchContainer) ?? ""}`,
      children: [
        r && /* @__PURE__ */ _.jsx(
          "label",
          {
            htmlFor: u,
            className: `d-switch-label switch-root-label ${(n == null ? void 0 : n.label) ?? ""}`,
            children: r
          }
        ),
        /* @__PURE__ */ _.jsx(
          Ar,
          {
            name: e,
            control: o,
            render: ({ field: { onChange: f, onBlur: b, value: d = !1, ref: F } }) => /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
              /* @__PURE__ */ _.jsx(
                "input",
                {
                  id: u,
                  ...t,
                  value: d,
                  onChange: f,
                  onBlur: b,
                  ref: F,
                  className: `d-switch-input switch-input ${(n == null ? void 0 : n.input) ?? ""}`,
                  checked: d === !0,
                  type: "checkbox",
                  "aria-checked": d ? "true" : "false"
                }
              ),
              /* @__PURE__ */ _.jsx(
                "label",
                {
                  htmlFor: u,
                  className: `d-switch switch-label ${(n == null ? void 0 : n.switch) ?? ""} ${(n == null ? void 0 : n.activeSwitch) ?? ""}`,
                  children: /* @__PURE__ */ _.jsx(
                    "span",
                    {
                      role: "button",
                      className: `d-switch-button switch-button ${(n == null ? void 0 : n.button) ?? ""} ${(n == null ? void 0 : n.activeButton) ?? ""}`
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
jr("switch", Qt);
jr("country-phone-number", Zt);
jr("otp", Xt);
export {
  tn as ReactForm,
  jr as addInputType,
  Kt as getInputComponent
};
