module.exports = [
"[project]/devume-client3/node_modules/google-protobuf/google-protobuf.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value);
}, e = "undefined" != ("TURBOPACK compile-time value", "undefined") && window === /*TURBOPACK member replacement*/ __turbopack_context__.e ? "TURBOPACK unreachable" : "undefined" != ("TURBOPACK compile-time value", "object") && null != /*TURBOPACK member replacement*/ __turbopack_context__.g ? /*TURBOPACK member replacement*/ __turbopack_context__.g : /*TURBOPACK member replacement*/ __turbopack_context__.e;
function ba(a, b) {
    if (b) {
        var c = e;
        a = a.split(".");
        for(var d = 0; d < a.length - 1; d++){
            var f = a[d];
            f in c || (c[f] = {});
            c = c[f];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        });
    }
}
function ca(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        };
    };
}
function da() {
    da = function() {};
    e.Symbol || (e.Symbol = ea);
}
function fa(a, b) {
    this.a = a;
    aa(this, "description", {
        configurable: !0,
        writable: !0,
        value: b
    });
}
fa.prototype.toString = function() {
    return this.a;
};
var ea = function() {
    function a(c) {
        if (this instanceof a) throw new TypeError("Symbol is not a constructor");
        return new fa("jscomp_symbol_" + (c || "") + "_" + b++, c);
    }
    var b = 0;
    return a;
}();
function ha() {
    da();
    var a = e.Symbol.iterator;
    a || (a = e.Symbol.iterator = e.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
            return ia(ca(this));
        }
    });
    ha = function() {};
}
function ia(a) {
    ha();
    a = {
        next: a
    };
    a[e.Symbol.iterator] = function() {
        return this;
    };
    return a;
}
function ja(a, b) {
    ha();
    a instanceof String && (a += "");
    var c = 0, d = {
        next: function() {
            if (c < a.length) {
                var f = c++;
                return {
                    value: b(f, a[f]),
                    done: !1
                };
            }
            d.next = function() {
                return {
                    done: !0,
                    value: void 0
                };
            };
            return d.next();
        }
    };
    d[Symbol.iterator] = function() {
        return d;
    };
    return d;
}
ba("Array.prototype.entries", function(a) {
    return a ? a : function() {
        return ja(this, function(b, c) {
            return [
                b,
                c
            ];
        });
    };
});
var ka = /*TURBOPACK member replacement*/ __turbopack_context__.e || self;
function g(a, b, c) {
    a = a.split(".");
    c = c || ka;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for(var d; a.length && (d = a.shift());)a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
}
function k(a) {
    var b = typeof a;
    if ("object" == b) if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
    } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
}
function la(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b;
}
function ma(a, b, c) {
    g(a, b, c);
}
function na(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
}
;
var oa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function pa(a, b) {
    for(var c, d, f = 1; f < arguments.length; f++){
        d = arguments[f];
        for(c in d)a[c] = d[c];
        for(var h = 0; h < oa.length; h++)c = oa[h], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
}
;
var qa = Array.prototype.forEach ? function(a, b) {
    Array.prototype.forEach.call(a, b, void 0);
} : function(a, b) {
    for(var c = a.length, d = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)f in d && b.call(void 0, d[f], f, a);
}, l = Array.prototype.map ? function(a, b) {
    return Array.prototype.map.call(a, b, void 0);
} : function(a, b) {
    for(var c = a.length, d = Array(c), f = "string" === typeof a ? a.split("") : a, h = 0; h < c; h++)h in f && (d[h] = b.call(void 0, f[h], h, a));
    return d;
};
function ra(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
}
;
function sa(a, b, c, d) {
    var f = "Assertion failed";
    if (c) {
        f += ": " + c;
        var h = d;
    } else a && (f += ": " + a, h = b);
    throw Error(f, h || []);
}
function n(a, b, c) {
    for(var d = [], f = 2; f < arguments.length; ++f)d[f - 2] = arguments[f];
    a || sa("", null, b, d);
    return a;
}
function ta(a, b, c) {
    for(var d = [], f = 2; f < arguments.length; ++f)d[f - 2] = arguments[f];
    "string" !== typeof a && sa("Expected string but got %s: %s.", [
        k(a),
        a
    ], b, d);
}
function ua(a, b, c) {
    for(var d = [], f = 2; f < arguments.length; ++f)d[f - 2] = arguments[f];
    Array.isArray(a) || sa("Expected array but got %s: %s.", [
        k(a),
        a
    ], b, d);
}
function p(a, b) {
    for(var c = [], d = 1; d < arguments.length; ++d)c[d - 1] = arguments[d];
    throw Error("Failure" + (a ? ": " + a : ""), c);
}
function q(a, b, c, d) {
    for(var f = [], h = 3; h < arguments.length; ++h)f[h - 3] = arguments[h];
    a instanceof b || sa("Expected instanceof %s but got %s.", [
        va(b),
        va(a)
    ], c, f);
}
function va(a) {
    return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
}
;
function r(a, b) {
    this.c = a;
    this.b = b;
    this.a = {};
    this.arrClean = !0;
    if (0 < this.c.length) {
        for(a = 0; a < this.c.length; a++){
            b = this.c[a];
            var c = b[0];
            this.a[c.toString()] = new wa(c, b[1]);
        }
        this.arrClean = !0;
    }
}
g("jspb.Map", r, void 0);
r.prototype.g = function() {
    if (this.arrClean) {
        if (this.b) {
            var a = this.a, b;
            for(b in a)if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b].a;
                c && c.g();
            }
        }
    } else {
        this.c.length = 0;
        a = u(this);
        a.sort();
        for(b = 0; b < a.length; b++){
            var d = this.a[a[b]];
            (c = d.a) && c.g();
            this.c.push([
                d.key,
                d.value
            ]);
        }
        this.arrClean = !0;
    }
    return this.c;
};
r.prototype.toArray = r.prototype.g;
r.prototype.Mc = function(a, b) {
    for(var c = this.g(), d = [], f = 0; f < c.length; f++){
        var h = this.a[c[f][0].toString()];
        v(this, h);
        var m = h.a;
        m ? (n(b), d.push([
            h.key,
            b(a, m)
        ])) : d.push([
            h.key,
            h.value
        ]);
    }
    return d;
};
r.prototype.toObject = r.prototype.Mc;
r.fromObject = function(a, b, c) {
    b = new r([], b);
    for(var d = 0; d < a.length; d++){
        var f = a[d][0], h = c(a[d][1]);
        b.set(f, h);
    }
    return b;
};
function w(a) {
    this.a = 0;
    this.b = a;
}
w.prototype.next = function() {
    return this.a < this.b.length ? {
        done: !1,
        value: this.b[this.a++]
    } : {
        done: !0,
        value: void 0
    };
};
"undefined" != typeof Symbol && (w.prototype[Symbol.iterator] = function() {
    return this;
});
r.prototype.Jb = function() {
    return u(this).length;
};
r.prototype.getLength = r.prototype.Jb;
r.prototype.clear = function() {
    this.a = {};
    this.arrClean = !1;
};
r.prototype.clear = r.prototype.clear;
r.prototype.Cb = function(a) {
    a = a.toString();
    var b = this.a.hasOwnProperty(a);
    delete this.a[a];
    this.arrClean = !1;
    return b;
};
r.prototype.del = r.prototype.Cb;
r.prototype.Eb = function() {
    var a = [], b = u(this);
    b.sort();
    for(var c = 0; c < b.length; c++){
        var d = this.a[b[c]];
        a.push([
            d.key,
            d.value
        ]);
    }
    return a;
};
r.prototype.getEntryList = r.prototype.Eb;
r.prototype.entries = function() {
    var a = [], b = u(this);
    b.sort();
    for(var c = 0; c < b.length; c++){
        var d = this.a[b[c]];
        a.push([
            d.key,
            v(this, d)
        ]);
    }
    return new w(a);
};
r.prototype.entries = r.prototype.entries;
r.prototype.keys = function() {
    var a = [], b = u(this);
    b.sort();
    for(var c = 0; c < b.length; c++)a.push(this.a[b[c]].key);
    return new w(a);
};
r.prototype.keys = r.prototype.keys;
r.prototype.values = function() {
    var a = [], b = u(this);
    b.sort();
    for(var c = 0; c < b.length; c++)a.push(v(this, this.a[b[c]]));
    return new w(a);
};
r.prototype.values = r.prototype.values;
r.prototype.forEach = function(a, b) {
    var c = u(this);
    c.sort();
    for(var d = 0; d < c.length; d++){
        var f = this.a[c[d]];
        a.call(b, v(this, f), f.key, this);
    }
};
r.prototype.forEach = r.prototype.forEach;
r.prototype.set = function(a, b) {
    var c = new wa(a);
    this.b ? (c.a = b, c.value = b.g()) : c.value = b;
    this.a[a.toString()] = c;
    this.arrClean = !1;
    return this;
};
r.prototype.set = r.prototype.set;
function v(a, b) {
    return a.b ? (b.a || (b.a = new a.b(b.value)), b.a) : b.value;
}
r.prototype.get = function(a) {
    if (a = this.a[a.toString()]) return v(this, a);
};
r.prototype.get = r.prototype.get;
r.prototype.has = function(a) {
    return a.toString() in this.a;
};
r.prototype.has = r.prototype.has;
r.prototype.Jc = function(a, b, c, d, f) {
    var h = u(this);
    h.sort();
    for(var m = 0; m < h.length; m++){
        var t = this.a[h[m]];
        b.Va(a);
        c.call(b, 1, t.key);
        this.b ? d.call(b, 2, v(this, t), f) : d.call(b, 2, t.value);
        b.Ya();
    }
};
r.prototype.serializeBinary = r.prototype.Jc;
r.deserializeBinary = function(a, b, c, d, f, h, m) {
    for(; b.oa() && !b.bb();){
        var t = b.c;
        1 == t ? h = c.call(b) : 2 == t && (a.b ? (n(f), m || (m = new a.b), d.call(b, m, f)) : m = d.call(b));
    }
    n(void 0 != h);
    n(void 0 != m);
    a.set(h, m);
};
function u(a) {
    a = a.a;
    var b = [], c;
    for(c in a)Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
    return b;
}
function wa(a, b) {
    this.key = a;
    this.value = b;
    this.a = void 0;
}
;
function xa(a) {
    if (8192 >= a.length) return String.fromCharCode.apply(null, a);
    for(var b = "", c = 0; c < a.length; c += 8192)b += String.fromCharCode.apply(null, ra(a, c, c + 8192));
    return b;
}
;
var ya = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\",
    "<": "\\u003C"
}, za = {
    "'": "\\'"
};
var Aa = {}, x = null;
function Ba(a, b) {
    void 0 === b && (b = 0);
    Ca();
    b = Aa[b];
    for(var c = [], d = 0; d < a.length; d += 3){
        var f = a[d], h = d + 1 < a.length, m = h ? a[d + 1] : 0, t = d + 2 < a.length, B = t ? a[d + 2] : 0, M = f >> 2;
        f = (f & 3) << 4 | m >> 4;
        m = (m & 15) << 2 | B >> 6;
        B &= 63;
        t || (B = 64, h || (m = 64));
        c.push(b[M], b[f], b[m] || "", b[B] || "");
    }
    return c.join("");
}
function Da(a) {
    var b = a.length, c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c), f = 0;
    Ea(a, function(h) {
        d[f++] = h;
    });
    return d.subarray(0, f);
}
function Ea(a, b) {
    function c(B) {
        for(; d < a.length;){
            var M = a.charAt(d++), La = x[M];
            if (null != La) return La;
            if (!/^[\s\xa0]*$/.test(M)) throw Error("Unknown base64 encoding at char: " + M);
        }
        return B;
    }
    Ca();
    for(var d = 0;;){
        var f = c(-1), h = c(0), m = c(64), t = c(64);
        if (64 === t && -1 === f) break;
        b(f << 2 | h >> 4);
        64 != m && (b(h << 4 & 240 | m >> 2), 64 != t && b(m << 6 & 192 | t));
    }
}
function Ca() {
    if (!x) {
        x = {};
        for(var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = [
            "+/=",
            "+/",
            "-_=",
            "-_.",
            "-_"
        ], c = 0; 5 > c; c++){
            var d = a.concat(b[c].split(""));
            Aa[c] = d;
            for(var f = 0; f < d.length; f++){
                var h = d[f];
                void 0 === x[h] && (x[h] = f);
            }
        }
    }
}
;
g("jspb.ConstBinaryMessage", function() {}, void 0);
g("jspb.BinaryMessage", function() {}, void 0);
g("jspb.BinaryConstants.FieldType", {
    yb: -1,
    ee: 1,
    FLOAT: 2,
    ke: 3,
    te: 4,
    je: 5,
    xb: 6,
    wb: 7,
    BOOL: 8,
    re: 9,
    ie: 10,
    le: 11,
    ce: 12,
    se: 13,
    ge: 14,
    me: 15,
    ne: 16,
    oe: 17,
    pe: 18,
    he: 30,
    ve: 31
}, void 0);
g("jspb.BinaryConstants.WireType", {
    yb: -1,
    ue: 0,
    xb: 1,
    de: 2,
    qe: 3,
    fe: 4,
    wb: 5
}, void 0);
g("jspb.BinaryConstants.FieldTypeToWireType", function(a) {
    switch(a){
        case 5:
        case 3:
        case 13:
        case 4:
        case 17:
        case 18:
        case 8:
        case 14:
        case 31:
            return 0;
        case 1:
        case 6:
        case 16:
        case 30:
            return 1;
        case 9:
        case 11:
        case 12:
            return 2;
        case 2:
        case 7:
        case 15:
            return 5;
        default:
            return -1;
    }
}, void 0);
g("jspb.BinaryConstants.INVALID_FIELD_NUMBER", -1, void 0);
g("jspb.BinaryConstants.FLOAT32_EPS", 1.401298464324817E-45, void 0);
g("jspb.BinaryConstants.FLOAT32_MIN", 1.1754943508222875E-38, void 0);
g("jspb.BinaryConstants.FLOAT32_MAX", 3.4028234663852886E38, void 0);
g("jspb.BinaryConstants.FLOAT64_EPS", 4.9E-324, void 0);
g("jspb.BinaryConstants.FLOAT64_MIN", 2.2250738585072014E-308, void 0);
g("jspb.BinaryConstants.FLOAT64_MAX", 1.7976931348623157E308, void 0);
g("jspb.BinaryConstants.TWO_TO_20", 1048576, void 0);
g("jspb.BinaryConstants.TWO_TO_23", 8388608, void 0);
g("jspb.BinaryConstants.TWO_TO_31", 2147483648, void 0);
g("jspb.BinaryConstants.TWO_TO_32", 4294967296, void 0);
g("jspb.BinaryConstants.TWO_TO_52", 4503599627370496, void 0);
g("jspb.BinaryConstants.TWO_TO_63", 0x7fffffffffffffff, void 0);
g("jspb.BinaryConstants.TWO_TO_64", 1.8446744073709552E19, void 0);
g("jspb.BinaryConstants.ZERO_HASH", "\x00\x00\x00\x00\x00\x00\x00\x00", void 0);
var y = 0, z = 0;
g("jspb.utils.getSplit64Low", function() {
    return y;
}, void 0);
g("jspb.utils.getSplit64High", function() {
    return z;
}, void 0);
function Fa(a) {
    var b = a >>> 0;
    a = Math.floor((a - b) / 4294967296) >>> 0;
    y = b;
    z = a;
}
g("jspb.utils.splitUint64", Fa, void 0);
function A(a) {
    var b = 0 > a;
    a = Math.abs(a);
    var c = a >>> 0;
    a = Math.floor((a - c) / 4294967296);
    a >>>= 0;
    b && (a = ~a >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a++, 4294967295 < a && (a = 0)));
    y = c;
    z = a;
}
g("jspb.utils.splitInt64", A, void 0);
function Ga(a) {
    var b = 0 > a;
    a = 2 * Math.abs(a);
    Fa(a);
    a = y;
    var c = z;
    b && (0 == a ? 0 == c ? c = a = 4294967295 : (c--, a = 4294967295) : a--);
    y = a;
    z = c;
}
g("jspb.utils.splitZigzag64", Ga, void 0);
function Ha(a) {
    var b = 0 > a ? 1 : 0;
    a = b ? -a : a;
    if (0 === a) 0 < 1 / a ? y = z = 0 : (z = 0, y = 2147483648);
    else if (isNaN(a)) z = 0, y = 2147483647;
    else if (3.4028234663852886E38 < a) z = 0, y = (b << 31 | 2139095040) >>> 0;
    else if (1.1754943508222875E-38 > a) a = Math.round(a / Math.pow(2, -149)), z = 0, y = (b << 31 | a) >>> 0;
    else {
        var c = Math.floor(Math.log(a) / Math.LN2);
        a *= Math.pow(2, -c);
        a = Math.round(8388608 * a);
        16777216 <= a && ++c;
        z = 0;
        y = (b << 31 | c + 127 << 23 | a & 8388607) >>> 0;
    }
}
g("jspb.utils.splitFloat32", Ha, void 0);
function Ia(a) {
    var b = 0 > a ? 1 : 0;
    a = b ? -a : a;
    if (0 === a) z = 0 < 1 / a ? 0 : 2147483648, y = 0;
    else if (isNaN(a)) z = 2147483647, y = 4294967295;
    else if (1.7976931348623157E308 < a) z = (b << 31 | 2146435072) >>> 0, y = 0;
    else if (2.2250738585072014E-308 > a) a /= Math.pow(2, -1074), z = (b << 31 | a / 4294967296) >>> 0, y = a >>> 0;
    else {
        var c = a, d = 0;
        if (2 <= c) for(; 2 <= c && 1023 > d;)d++, c /= 2;
        else for(; 1 > c && -1022 < d;)c *= 2, d--;
        a *= Math.pow(2, -d);
        z = (b << 31 | d + 1023 << 20 | 1048576 * a & 1048575) >>> 0;
        y = 4503599627370496 * a >>> 0;
    }
}
g("jspb.utils.splitFloat64", Ia, void 0);
function C(a) {
    var b = a.charCodeAt(4), c = a.charCodeAt(5), d = a.charCodeAt(6), f = a.charCodeAt(7);
    y = a.charCodeAt(0) + (a.charCodeAt(1) << 8) + (a.charCodeAt(2) << 16) + (a.charCodeAt(3) << 24) >>> 0;
    z = b + (c << 8) + (d << 16) + (f << 24) >>> 0;
}
g("jspb.utils.splitHash64", C, void 0);
function D(a, b) {
    return 4294967296 * b + (a >>> 0);
}
g("jspb.utils.joinUint64", D, void 0);
function E(a, b) {
    var c = b & 2147483648;
    c && (a = ~a + 1 >>> 0, b = ~b >>> 0, 0 == a && (b = b + 1 >>> 0));
    a = D(a, b);
    return c ? -a : a;
}
g("jspb.utils.joinInt64", E, void 0);
function Ja(a, b, c) {
    var d = b >> 31;
    return c(a << 1 ^ d, (b << 1 | a >>> 31) ^ d);
}
g("jspb.utils.toZigzag64", Ja, void 0);
function Ka(a, b) {
    return Ma(a, b, E);
}
g("jspb.utils.joinZigzag64", Ka, void 0);
function Ma(a, b, c) {
    var d = -(a & 1);
    return c((a >>> 1 | b << 31) ^ d, b >>> 1 ^ d);
}
g("jspb.utils.fromZigzag64", Ma, void 0);
function Na(a) {
    var b = 2 * (a >> 31) + 1, c = a >>> 23 & 255;
    a &= 8388607;
    return 255 == c ? a ? NaN : Infinity * b : 0 == c ? b * Math.pow(2, -149) * a : b * Math.pow(2, c - 150) * (a + Math.pow(2, 23));
}
g("jspb.utils.joinFloat32", Na, void 0);
function Oa(a, b) {
    var c = 2 * (b >> 31) + 1, d = b >>> 20 & 2047;
    a = 4294967296 * (b & 1048575) + a;
    return 2047 == d ? a ? NaN : Infinity * c : 0 == d ? c * Math.pow(2, -1074) * a : c * Math.pow(2, d - 1075) * (a + 4503599627370496);
}
g("jspb.utils.joinFloat64", Oa, void 0);
function Pa(a, b) {
    return String.fromCharCode(a >>> 0 & 255, a >>> 8 & 255, a >>> 16 & 255, a >>> 24 & 255, b >>> 0 & 255, b >>> 8 & 255, b >>> 16 & 255, b >>> 24 & 255);
}
g("jspb.utils.joinHash64", Pa, void 0);
g("jspb.utils.DIGITS", "0123456789abcdef".split(""), void 0);
function F(a, b) {
    function c(f, h) {
        f = f ? String(f) : "";
        return h ? "0000000".slice(f.length) + f : f;
    }
    if (2097151 >= b) return "" + D(a, b);
    var d = (a >>> 24 | b << 8) >>> 0 & 16777215;
    b = b >> 16 & 65535;
    a = (a & 16777215) + 6777216 * d + 6710656 * b;
    d += 8147497 * b;
    b *= 2;
    1E7 <= a && (d += Math.floor(a / 1E7), a %= 1E7);
    1E7 <= d && (b += Math.floor(d / 1E7), d %= 1E7);
    return c(b, 0) + c(d, b) + c(a, 1);
}
g("jspb.utils.joinUnsignedDecimalString", F, void 0);
function G(a, b) {
    var c = b & 2147483648;
    c && (a = ~a + 1 >>> 0, b = ~b + (0 == a ? 1 : 0) >>> 0);
    a = F(a, b);
    return c ? "-" + a : a;
}
g("jspb.utils.joinSignedDecimalString", G, void 0);
function Qa(a, b) {
    C(a);
    a = y;
    var c = z;
    return b ? G(a, c) : F(a, c);
}
g("jspb.utils.hash64ToDecimalString", Qa, void 0);
g("jspb.utils.hash64ArrayToDecimalStrings", function(a, b) {
    for(var c = Array(a.length), d = 0; d < a.length; d++)c[d] = Qa(a[d], b);
    return c;
}, void 0);
function H(a) {
    function b(m, t) {
        for(var B = 0; 8 > B && (1 !== m || 0 < t); B++)t = m * f[B] + t, f[B] = t & 255, t >>>= 8;
    }
    function c() {
        for(var m = 0; 8 > m; m++)f[m] = ~f[m] & 255;
    }
    n(0 < a.length);
    var d = !1;
    "-" === a[0] && (d = !0, a = a.slice(1));
    for(var f = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ], h = 0; h < a.length; h++)b(10, a.charCodeAt(h) - 48);
    d && (c(), b(1, 1));
    return xa(f);
}
g("jspb.utils.decimalStringToHash64", H, void 0);
g("jspb.utils.splitDecimalString", function(a) {
    C(H(a));
}, void 0);
function Ra(a) {
    return String.fromCharCode(10 > a ? 48 + a : 87 + a);
}
function Sa(a) {
    return 97 <= a ? a - 97 + 10 : a - 48;
}
g("jspb.utils.hash64ToHexString", function(a) {
    var b = Array(18);
    b[0] = "0";
    b[1] = "x";
    for(var c = 0; 8 > c; c++){
        var d = a.charCodeAt(7 - c);
        b[2 * c + 2] = Ra(d >> 4);
        b[2 * c + 3] = Ra(d & 15);
    }
    return b.join("");
}, void 0);
g("jspb.utils.hexStringToHash64", function(a) {
    a = a.toLowerCase();
    n(18 == a.length);
    n("0" == a[0]);
    n("x" == a[1]);
    for(var b = "", c = 0; 8 > c; c++)b = String.fromCharCode(16 * Sa(a.charCodeAt(2 * c + 2)) + Sa(a.charCodeAt(2 * c + 3))) + b;
    return b;
}, void 0);
g("jspb.utils.hash64ToNumber", function(a, b) {
    C(a);
    a = y;
    var c = z;
    return b ? E(a, c) : D(a, c);
}, void 0);
g("jspb.utils.numberToHash64", function(a) {
    A(a);
    return Pa(y, z);
}, void 0);
g("jspb.utils.countVarints", function(a, b, c) {
    for(var d = 0, f = b; f < c; f++)d += a[f] >> 7;
    return c - b - d;
}, void 0);
g("jspb.utils.countVarintFields", function(a, b, c, d) {
    var f = 0;
    d *= 8;
    if (128 > d) for(; b < c && a[b++] == d;)for(f++;;){
        var h = a[b++];
        if (0 == (h & 128)) break;
    }
    else for(; b < c;){
        for(h = d; 128 < h;){
            if (a[b] != (h & 127 | 128)) return f;
            b++;
            h >>= 7;
        }
        if (a[b++] != h) break;
        for(f++; h = a[b++], 0 != (h & 128););
    }
    return f;
}, void 0);
function Ta(a, b, c, d, f) {
    var h = 0;
    if (128 > d) for(; b < c && a[b++] == d;)h++, b += f;
    else for(; b < c;){
        for(var m = d; 128 < m;){
            if (a[b++] != (m & 127 | 128)) return h;
            m >>= 7;
        }
        if (a[b++] != m) break;
        h++;
        b += f;
    }
    return h;
}
g("jspb.utils.countFixed32Fields", function(a, b, c, d) {
    return Ta(a, b, c, 8 * d + 5, 4);
}, void 0);
g("jspb.utils.countFixed64Fields", function(a, b, c, d) {
    return Ta(a, b, c, 8 * d + 1, 8);
}, void 0);
g("jspb.utils.countDelimitedFields", function(a, b, c, d) {
    var f = 0;
    for(d = 8 * d + 2; b < c;){
        for(var h = d; 128 < h;){
            if (a[b++] != (h & 127 | 128)) return f;
            h >>= 7;
        }
        if (a[b++] != h) break;
        f++;
        for(var m = 0, t = 1; h = a[b++], m += (h & 127) * t, t *= 128, 0 != (h & 128););
        b += m;
    }
    return f;
}, void 0);
g("jspb.utils.debugBytesToTextFormat", function(a) {
    var b = '"';
    if (a) {
        a = Ua(a);
        for(var c = 0; c < a.length; c++)b += "\\x", 16 > a[c] && (b += "0"), b += a[c].toString(16);
    }
    return b + '"';
}, void 0);
g("jspb.utils.debugScalarToTextFormat", function(a) {
    if ("string" === typeof a) {
        a = String(a);
        for(var b = [
            '"'
        ], c = 0; c < a.length; c++){
            var d = a.charAt(c), f = d.charCodeAt(0), h = c + 1, m;
            if (!(m = ya[d])) {
                if (!(31 < f && 127 > f)) if (f = d, f in za) d = za[f];
                else if (f in ya) d = za[f] = ya[f];
                else {
                    m = f.charCodeAt(0);
                    if (31 < m && 127 > m) d = f;
                    else {
                        if (256 > m) {
                            if (d = "\\x", 16 > m || 256 < m) d += "0";
                        } else d = "\\u", 4096 > m && (d += "0");
                        d += m.toString(16).toUpperCase();
                    }
                    d = za[f] = d;
                }
                m = d;
            }
            b[h] = m;
        }
        b.push('"');
        a = b.join("");
    } else a = a.toString();
    return a;
}, void 0);
g("jspb.utils.stringToByteArray", function(a) {
    for(var b = new Uint8Array(a.length), c = 0; c < a.length; c++){
        var d = a.charCodeAt(c);
        if (255 < d) throw Error("Conversion error: string contains codepoint outside of byte range");
        b[c] = d;
    }
    return b;
}, void 0);
function Ua(a) {
    if (a.constructor === Uint8Array) return a;
    if (a.constructor === ArrayBuffer) return new Uint8Array(a);
    if (a.constructor === Array) return new Uint8Array(a);
    if (a.constructor === String) return Da(a);
    if (a instanceof Uint8Array) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
    p("Type not convertible to Uint8Array.");
    return new Uint8Array(0);
}
g("jspb.utils.byteSourceToUint8Array", Ua, void 0);
function I(a, b, c) {
    this.b = null;
    this.a = this.c = this.h = 0;
    this.v = !1;
    a && this.H(a, b, c);
}
g("jspb.BinaryDecoder", I, void 0);
var Va = [];
I.getInstanceCacheLength = function() {
    return Va.length;
};
function Wa(a, b, c) {
    if (Va.length) {
        var d = Va.pop();
        a && d.H(a, b, c);
        return d;
    }
    return new I(a, b, c);
}
I.alloc = Wa;
I.prototype.Ca = function() {
    this.clear();
    100 > Va.length && Va.push(this);
};
I.prototype.free = I.prototype.Ca;
I.prototype.clone = function() {
    return Wa(this.b, this.h, this.c - this.h);
};
I.prototype.clone = I.prototype.clone;
I.prototype.clear = function() {
    this.b = null;
    this.a = this.c = this.h = 0;
    this.v = !1;
};
I.prototype.clear = I.prototype.clear;
I.prototype.Y = function() {
    return this.b;
};
I.prototype.getBuffer = I.prototype.Y;
I.prototype.H = function(a, b, c) {
    this.b = Ua(a);
    this.h = void 0 !== b ? b : 0;
    this.c = void 0 !== c ? this.h + c : this.b.length;
    this.a = this.h;
};
I.prototype.setBlock = I.prototype.H;
I.prototype.Db = function() {
    return this.c;
};
I.prototype.getEnd = I.prototype.Db;
I.prototype.setEnd = function(a) {
    this.c = a;
};
I.prototype.setEnd = I.prototype.setEnd;
I.prototype.reset = function() {
    this.a = this.h;
};
I.prototype.reset = I.prototype.reset;
I.prototype.B = function() {
    return this.a;
};
I.prototype.getCursor = I.prototype.B;
I.prototype.Ma = function(a) {
    this.a = a;
};
I.prototype.setCursor = I.prototype.Ma;
I.prototype.advance = function(a) {
    this.a += a;
    n(this.a <= this.c);
};
I.prototype.advance = I.prototype.advance;
I.prototype.ya = function() {
    return this.a == this.c;
};
I.prototype.atEnd = I.prototype.ya;
I.prototype.Qb = function() {
    return this.a > this.c;
};
I.prototype.pastEnd = I.prototype.Qb;
I.prototype.getError = function() {
    return this.v || 0 > this.a || this.a > this.c;
};
I.prototype.getError = I.prototype.getError;
I.prototype.w = function(a) {
    for(var b = 128, c = 0, d = 0, f = 0; 4 > f && 128 <= b; f++)b = this.b[this.a++], c |= (b & 127) << 7 * f;
    128 <= b && (b = this.b[this.a++], c |= (b & 127) << 28, d |= (b & 127) >> 4);
    if (128 <= b) for(f = 0; 5 > f && 128 <= b; f++)b = this.b[this.a++], d |= (b & 127) << 7 * f + 3;
    if (128 > b) return a(c >>> 0, d >>> 0);
    p("Failed to read varint, encoding is invalid.");
    this.v = !0;
};
I.prototype.readSplitVarint64 = I.prototype.w;
I.prototype.ea = function(a) {
    return this.w(function(b, c) {
        return Ma(b, c, a);
    });
};
I.prototype.readSplitZigzagVarint64 = I.prototype.ea;
I.prototype.ta = function(a) {
    var b = this.b, c = this.a;
    this.a += 8;
    for(var d = 0, f = 0, h = c + 7; h >= c; h--)d = d << 8 | b[h], f = f << 8 | b[h + 4];
    return a(d, f);
};
I.prototype.readSplitFixed64 = I.prototype.ta;
I.prototype.kb = function() {
    for(; this.b[this.a] & 128;)this.a++;
    this.a++;
};
I.prototype.skipVarint = I.prototype.kb;
I.prototype.mb = function(a) {
    for(; 128 < a;)this.a--, a >>>= 7;
    this.a--;
};
I.prototype.unskipVarint = I.prototype.mb;
I.prototype.o = function() {
    var a = this.b;
    var b = a[this.a];
    var c = b & 127;
    if (128 > b) return this.a += 1, n(this.a <= this.c), c;
    b = a[this.a + 1];
    c |= (b & 127) << 7;
    if (128 > b) return this.a += 2, n(this.a <= this.c), c;
    b = a[this.a + 2];
    c |= (b & 127) << 14;
    if (128 > b) return this.a += 3, n(this.a <= this.c), c;
    b = a[this.a + 3];
    c |= (b & 127) << 21;
    if (128 > b) return this.a += 4, n(this.a <= this.c), c;
    b = a[this.a + 4];
    c |= (b & 15) << 28;
    if (128 > b) return this.a += 5, n(this.a <= this.c), c >>> 0;
    this.a += 5;
    128 <= a[this.a++] && 128 <= a[this.a++] && 128 <= a[this.a++] && 128 <= a[this.a++] && 128 <= a[this.a++] && n(!1);
    n(this.a <= this.c);
    return c;
};
I.prototype.readUnsignedVarint32 = I.prototype.o;
I.prototype.da = function() {
    return ~~this.o();
};
I.prototype.readSignedVarint32 = I.prototype.da;
I.prototype.O = function() {
    return this.o().toString();
};
I.prototype.Ea = function() {
    return this.da().toString();
};
I.prototype.readSignedVarint32String = I.prototype.Ea;
I.prototype.Ia = function() {
    var a = this.o();
    return a >>> 1 ^ -(a & 1);
};
I.prototype.readZigzagVarint32 = I.prototype.Ia;
I.prototype.Ga = function() {
    return this.w(D);
};
I.prototype.readUnsignedVarint64 = I.prototype.Ga;
I.prototype.Ha = function() {
    return this.w(F);
};
I.prototype.readUnsignedVarint64String = I.prototype.Ha;
I.prototype.sa = function() {
    return this.w(E);
};
I.prototype.readSignedVarint64 = I.prototype.sa;
I.prototype.Fa = function() {
    return this.w(G);
};
I.prototype.readSignedVarint64String = I.prototype.Fa;
I.prototype.Ja = function() {
    return this.w(Ka);
};
I.prototype.readZigzagVarint64 = I.prototype.Ja;
I.prototype.fb = function() {
    return this.ea(Pa);
};
I.prototype.readZigzagVarintHash64 = I.prototype.fb;
I.prototype.Ka = function() {
    return this.ea(G);
};
I.prototype.readZigzagVarint64String = I.prototype.Ka;
I.prototype.Gc = function() {
    var a = this.b[this.a];
    this.a += 1;
    n(this.a <= this.c);
    return a;
};
I.prototype.readUint8 = I.prototype.Gc;
I.prototype.Ec = function() {
    var a = this.b[this.a], b = this.b[this.a + 1];
    this.a += 2;
    n(this.a <= this.c);
    return a << 0 | b << 8;
};
I.prototype.readUint16 = I.prototype.Ec;
I.prototype.m = function() {
    var a = this.b[this.a], b = this.b[this.a + 1], c = this.b[this.a + 2], d = this.b[this.a + 3];
    this.a += 4;
    n(this.a <= this.c);
    return (a << 0 | b << 8 | c << 16 | d << 24) >>> 0;
};
I.prototype.readUint32 = I.prototype.m;
I.prototype.ga = function() {
    var a = this.m(), b = this.m();
    return D(a, b);
};
I.prototype.readUint64 = I.prototype.ga;
I.prototype.ha = function() {
    var a = this.m(), b = this.m();
    return F(a, b);
};
I.prototype.readUint64String = I.prototype.ha;
I.prototype.Xb = function() {
    var a = this.b[this.a];
    this.a += 1;
    n(this.a <= this.c);
    return a << 24 >> 24;
};
I.prototype.readInt8 = I.prototype.Xb;
I.prototype.Vb = function() {
    var a = this.b[this.a], b = this.b[this.a + 1];
    this.a += 2;
    n(this.a <= this.c);
    return (a << 0 | b << 8) << 16 >> 16;
};
I.prototype.readInt16 = I.prototype.Vb;
I.prototype.P = function() {
    var a = this.b[this.a], b = this.b[this.a + 1], c = this.b[this.a + 2], d = this.b[this.a + 3];
    this.a += 4;
    n(this.a <= this.c);
    return a << 0 | b << 8 | c << 16 | d << 24;
};
I.prototype.readInt32 = I.prototype.P;
I.prototype.ba = function() {
    var a = this.m(), b = this.m();
    return E(a, b);
};
I.prototype.readInt64 = I.prototype.ba;
I.prototype.ca = function() {
    var a = this.m(), b = this.m();
    return G(a, b);
};
I.prototype.readInt64String = I.prototype.ca;
I.prototype.aa = function() {
    var a = this.m();
    return Na(a, 0);
};
I.prototype.readFloat = I.prototype.aa;
I.prototype.Z = function() {
    var a = this.m(), b = this.m();
    return Oa(a, b);
};
I.prototype.readDouble = I.prototype.Z;
I.prototype.pa = function() {
    return !!this.b[this.a++];
};
I.prototype.readBool = I.prototype.pa;
I.prototype.ra = function() {
    return this.da();
};
I.prototype.readEnum = I.prototype.ra;
I.prototype.fa = function(a) {
    var b = this.b, c = this.a;
    a = c + a;
    for(var d = [], f = ""; c < a;){
        var h = b[c++];
        if (128 > h) d.push(h);
        else if (192 > h) continue;
        else if (224 > h) {
            var m = b[c++];
            d.push((h & 31) << 6 | m & 63);
        } else if (240 > h) {
            m = b[c++];
            var t = b[c++];
            d.push((h & 15) << 12 | (m & 63) << 6 | t & 63);
        } else if (248 > h) {
            m = b[c++];
            t = b[c++];
            var B = b[c++];
            h = (h & 7) << 18 | (m & 63) << 12 | (t & 63) << 6 | B & 63;
            h -= 65536;
            d.push((h >> 10 & 1023) + 55296, (h & 1023) + 56320);
        }
        8192 <= d.length && (f += String.fromCharCode.apply(null, d), d.length = 0);
    }
    f += xa(d);
    this.a = c;
    return f;
};
I.prototype.readString = I.prototype.fa;
I.prototype.Dc = function() {
    var a = this.o();
    return this.fa(a);
};
I.prototype.readStringWithLength = I.prototype.Dc;
I.prototype.qa = function(a) {
    if (0 > a || this.a + a > this.b.length) return this.v = !0, p("Invalid byte length!"), new Uint8Array(0);
    var b = this.b.subarray(this.a, this.a + a);
    this.a += a;
    n(this.a <= this.c);
    return b;
};
I.prototype.readBytes = I.prototype.qa;
I.prototype.ia = function() {
    return this.w(Pa);
};
I.prototype.readVarintHash64 = I.prototype.ia;
I.prototype.$ = function() {
    var a = this.b, b = this.a, c = a[b], d = a[b + 1], f = a[b + 2], h = a[b + 3], m = a[b + 4], t = a[b + 5], B = a[b + 6];
    a = a[b + 7];
    this.a += 8;
    return String.fromCharCode(c, d, f, h, m, t, B, a);
};
I.prototype.readFixedHash64 = I.prototype.$;
function J(a, b, c) {
    this.a = Wa(a, b, c);
    this.O = this.a.B();
    this.b = this.c = -1;
    this.h = !1;
    this.v = null;
}
g("jspb.BinaryReader", J, void 0);
var K = [];
J.clearInstanceCache = function() {
    K = [];
};
J.getInstanceCacheLength = function() {
    return K.length;
};
function Xa(a, b, c) {
    if (K.length) {
        var d = K.pop();
        a && d.a.H(a, b, c);
        return d;
    }
    return new J(a, b, c);
}
J.alloc = Xa;
J.prototype.zb = Xa;
J.prototype.alloc = J.prototype.zb;
J.prototype.Ca = function() {
    this.a.clear();
    this.b = this.c = -1;
    this.h = !1;
    this.v = null;
    100 > K.length && K.push(this);
};
J.prototype.free = J.prototype.Ca;
J.prototype.Fb = function() {
    return this.O;
};
J.prototype.getFieldCursor = J.prototype.Fb;
J.prototype.B = function() {
    return this.a.B();
};
J.prototype.getCursor = J.prototype.B;
J.prototype.Y = function() {
    return this.a.Y();
};
J.prototype.getBuffer = J.prototype.Y;
J.prototype.Hb = function() {
    return this.c;
};
J.prototype.getFieldNumber = J.prototype.Hb;
J.prototype.Lb = function() {
    return this.b;
};
J.prototype.getWireType = J.prototype.Lb;
J.prototype.Mb = function() {
    return 2 == this.b;
};
J.prototype.isDelimited = J.prototype.Mb;
J.prototype.bb = function() {
    return 4 == this.b;
};
J.prototype.isEndGroup = J.prototype.bb;
J.prototype.getError = function() {
    return this.h || this.a.getError();
};
J.prototype.getError = J.prototype.getError;
J.prototype.H = function(a, b, c) {
    this.a.H(a, b, c);
    this.b = this.c = -1;
};
J.prototype.setBlock = J.prototype.H;
J.prototype.reset = function() {
    this.a.reset();
    this.b = this.c = -1;
};
J.prototype.reset = J.prototype.reset;
J.prototype.advance = function(a) {
    this.a.advance(a);
};
J.prototype.advance = J.prototype.advance;
J.prototype.oa = function() {
    if (this.a.ya()) return !1;
    if (this.getError()) return p("Decoder hit an error"), !1;
    this.O = this.a.B();
    var a = this.a.o(), b = a >>> 3;
    a &= 7;
    if (0 != a && 5 != a && 1 != a && 2 != a && 3 != a && 4 != a) return p("Invalid wire type: %s (at position %s)", a, this.O), this.h = !0, !1;
    this.c = b;
    this.b = a;
    return !0;
};
J.prototype.nextField = J.prototype.oa;
J.prototype.Oa = function() {
    this.a.mb(this.c << 3 | this.b);
};
J.prototype.unskipHeader = J.prototype.Oa;
J.prototype.Lc = function() {
    var a = this.c;
    for(this.Oa(); this.oa() && this.c == a;)this.C();
    this.a.ya() || this.Oa();
};
J.prototype.skipMatchingFields = J.prototype.Lc;
J.prototype.lb = function() {
    0 != this.b ? (p("Invalid wire type for skipVarintField"), this.C()) : this.a.kb();
};
J.prototype.skipVarintField = J.prototype.lb;
J.prototype.gb = function() {
    if (2 != this.b) p("Invalid wire type for skipDelimitedField"), this.C();
    else {
        var a = this.a.o();
        this.a.advance(a);
    }
};
J.prototype.skipDelimitedField = J.prototype.gb;
J.prototype.hb = function() {
    5 != this.b ? (p("Invalid wire type for skipFixed32Field"), this.C()) : this.a.advance(4);
};
J.prototype.skipFixed32Field = J.prototype.hb;
J.prototype.ib = function() {
    1 != this.b ? (p("Invalid wire type for skipFixed64Field"), this.C()) : this.a.advance(8);
};
J.prototype.skipFixed64Field = J.prototype.ib;
J.prototype.jb = function() {
    var a = this.c;
    do {
        if (!this.oa()) {
            p("Unmatched start-group tag: stream EOF");
            this.h = !0;
            break;
        }
        if (4 == this.b) {
            this.c != a && (p("Unmatched end-group tag"), this.h = !0);
            break;
        }
        this.C();
    }while (1)
};
J.prototype.skipGroup = J.prototype.jb;
J.prototype.C = function() {
    switch(this.b){
        case 0:
            this.lb();
            break;
        case 1:
            this.ib();
            break;
        case 2:
            this.gb();
            break;
        case 5:
            this.hb();
            break;
        case 3:
            this.jb();
            break;
        default:
            p("Invalid wire encoding for field.");
    }
};
J.prototype.skipField = J.prototype.C;
J.prototype.Hc = function(a, b) {
    null === this.v && (this.v = {});
    n(!this.v[a]);
    this.v[a] = b;
};
J.prototype.registerReadCallback = J.prototype.Hc;
J.prototype.Ic = function(a) {
    n(null !== this.v);
    a = this.v[a];
    n(a);
    return a(this);
};
J.prototype.runReadCallback = J.prototype.Ic;
J.prototype.Yb = function(a, b) {
    n(2 == this.b);
    var c = this.a.c, d = this.a.o();
    d = this.a.B() + d;
    this.a.setEnd(d);
    b(a, this);
    this.a.Ma(d);
    this.a.setEnd(c);
};
J.prototype.readMessage = J.prototype.Yb;
J.prototype.Ub = function(a, b, c) {
    n(3 == this.b);
    n(this.c == a);
    c(b, this);
    this.h || 4 == this.b || (p("Group submessage did not end with an END_GROUP tag"), this.h = !0);
};
J.prototype.readGroup = J.prototype.Ub;
J.prototype.Gb = function() {
    n(2 == this.b);
    var a = this.a.o(), b = this.a.B(), c = b + a;
    a = Wa(this.a.Y(), b, a);
    this.a.Ma(c);
    return a;
};
J.prototype.getFieldDecoder = J.prototype.Gb;
J.prototype.P = function() {
    n(0 == this.b);
    return this.a.da();
};
J.prototype.readInt32 = J.prototype.P;
J.prototype.Wb = function() {
    n(0 == this.b);
    return this.a.Ea();
};
J.prototype.readInt32String = J.prototype.Wb;
J.prototype.ba = function() {
    n(0 == this.b);
    return this.a.sa();
};
J.prototype.readInt64 = J.prototype.ba;
J.prototype.ca = function() {
    n(0 == this.b);
    return this.a.Fa();
};
J.prototype.readInt64String = J.prototype.ca;
J.prototype.m = function() {
    n(0 == this.b);
    return this.a.o();
};
J.prototype.readUint32 = J.prototype.m;
J.prototype.Fc = function() {
    n(0 == this.b);
    return this.a.O();
};
J.prototype.readUint32String = J.prototype.Fc;
J.prototype.ga = function() {
    n(0 == this.b);
    return this.a.Ga();
};
J.prototype.readUint64 = J.prototype.ga;
J.prototype.ha = function() {
    n(0 == this.b);
    return this.a.Ha();
};
J.prototype.readUint64String = J.prototype.ha;
J.prototype.zc = function() {
    n(0 == this.b);
    return this.a.Ia();
};
J.prototype.readSint32 = J.prototype.zc;
J.prototype.Ac = function() {
    n(0 == this.b);
    return this.a.Ja();
};
J.prototype.readSint64 = J.prototype.Ac;
J.prototype.Bc = function() {
    n(0 == this.b);
    return this.a.Ka();
};
J.prototype.readSint64String = J.prototype.Bc;
J.prototype.Rb = function() {
    n(5 == this.b);
    return this.a.m();
};
J.prototype.readFixed32 = J.prototype.Rb;
J.prototype.Sb = function() {
    n(1 == this.b);
    return this.a.ga();
};
J.prototype.readFixed64 = J.prototype.Sb;
J.prototype.Tb = function() {
    n(1 == this.b);
    return this.a.ha();
};
J.prototype.readFixed64String = J.prototype.Tb;
J.prototype.vc = function() {
    n(5 == this.b);
    return this.a.P();
};
J.prototype.readSfixed32 = J.prototype.vc;
J.prototype.wc = function() {
    n(5 == this.b);
    return this.a.P().toString();
};
J.prototype.readSfixed32String = J.prototype.wc;
J.prototype.xc = function() {
    n(1 == this.b);
    return this.a.ba();
};
J.prototype.readSfixed64 = J.prototype.xc;
J.prototype.yc = function() {
    n(1 == this.b);
    return this.a.ca();
};
J.prototype.readSfixed64String = J.prototype.yc;
J.prototype.aa = function() {
    n(5 == this.b);
    return this.a.aa();
};
J.prototype.readFloat = J.prototype.aa;
J.prototype.Z = function() {
    n(1 == this.b);
    return this.a.Z();
};
J.prototype.readDouble = J.prototype.Z;
J.prototype.pa = function() {
    n(0 == this.b);
    return !!this.a.o();
};
J.prototype.readBool = J.prototype.pa;
J.prototype.ra = function() {
    n(0 == this.b);
    return this.a.sa();
};
J.prototype.readEnum = J.prototype.ra;
J.prototype.fa = function() {
    n(2 == this.b);
    var a = this.a.o();
    return this.a.fa(a);
};
J.prototype.readString = J.prototype.fa;
J.prototype.qa = function() {
    n(2 == this.b);
    var a = this.a.o();
    return this.a.qa(a);
};
J.prototype.readBytes = J.prototype.qa;
J.prototype.ia = function() {
    n(0 == this.b);
    return this.a.ia();
};
J.prototype.readVarintHash64 = J.prototype.ia;
J.prototype.Cc = function() {
    n(0 == this.b);
    return this.a.fb();
};
J.prototype.readSintHash64 = J.prototype.Cc;
J.prototype.w = function(a) {
    n(0 == this.b);
    return this.a.w(a);
};
J.prototype.readSplitVarint64 = J.prototype.w;
J.prototype.ea = function(a) {
    n(0 == this.b);
    return this.a.w(function(b, c) {
        return Ma(b, c, a);
    });
};
J.prototype.readSplitZigzagVarint64 = J.prototype.ea;
J.prototype.$ = function() {
    n(1 == this.b);
    return this.a.$();
};
J.prototype.readFixedHash64 = J.prototype.$;
J.prototype.ta = function(a) {
    n(1 == this.b);
    return this.a.ta(a);
};
J.prototype.readSplitFixed64 = J.prototype.ta;
function L(a, b) {
    n(2 == a.b);
    var c = a.a.o();
    c = a.a.B() + c;
    for(var d = []; a.a.B() < c;)d.push(b.call(a.a));
    return d;
}
J.prototype.gc = function() {
    return L(this, this.a.da);
};
J.prototype.readPackedInt32 = J.prototype.gc;
J.prototype.hc = function() {
    return L(this, this.a.Ea);
};
J.prototype.readPackedInt32String = J.prototype.hc;
J.prototype.ic = function() {
    return L(this, this.a.sa);
};
J.prototype.readPackedInt64 = J.prototype.ic;
J.prototype.jc = function() {
    return L(this, this.a.Fa);
};
J.prototype.readPackedInt64String = J.prototype.jc;
J.prototype.qc = function() {
    return L(this, this.a.o);
};
J.prototype.readPackedUint32 = J.prototype.qc;
J.prototype.rc = function() {
    return L(this, this.a.O);
};
J.prototype.readPackedUint32String = J.prototype.rc;
J.prototype.sc = function() {
    return L(this, this.a.Ga);
};
J.prototype.readPackedUint64 = J.prototype.sc;
J.prototype.tc = function() {
    return L(this, this.a.Ha);
};
J.prototype.readPackedUint64String = J.prototype.tc;
J.prototype.nc = function() {
    return L(this, this.a.Ia);
};
J.prototype.readPackedSint32 = J.prototype.nc;
J.prototype.oc = function() {
    return L(this, this.a.Ja);
};
J.prototype.readPackedSint64 = J.prototype.oc;
J.prototype.pc = function() {
    return L(this, this.a.Ka);
};
J.prototype.readPackedSint64String = J.prototype.pc;
J.prototype.bc = function() {
    return L(this, this.a.m);
};
J.prototype.readPackedFixed32 = J.prototype.bc;
J.prototype.cc = function() {
    return L(this, this.a.ga);
};
J.prototype.readPackedFixed64 = J.prototype.cc;
J.prototype.dc = function() {
    return L(this, this.a.ha);
};
J.prototype.readPackedFixed64String = J.prototype.dc;
J.prototype.kc = function() {
    return L(this, this.a.P);
};
J.prototype.readPackedSfixed32 = J.prototype.kc;
J.prototype.lc = function() {
    return L(this, this.a.ba);
};
J.prototype.readPackedSfixed64 = J.prototype.lc;
J.prototype.mc = function() {
    return L(this, this.a.ca);
};
J.prototype.readPackedSfixed64String = J.prototype.mc;
J.prototype.fc = function() {
    return L(this, this.a.aa);
};
J.prototype.readPackedFloat = J.prototype.fc;
J.prototype.$b = function() {
    return L(this, this.a.Z);
};
J.prototype.readPackedDouble = J.prototype.$b;
J.prototype.Zb = function() {
    return L(this, this.a.pa);
};
J.prototype.readPackedBool = J.prototype.Zb;
J.prototype.ac = function() {
    return L(this, this.a.ra);
};
J.prototype.readPackedEnum = J.prototype.ac;
J.prototype.uc = function() {
    return L(this, this.a.ia);
};
J.prototype.readPackedVarintHash64 = J.prototype.uc;
J.prototype.ec = function() {
    return L(this, this.a.$);
};
J.prototype.readPackedFixedHash64 = J.prototype.ec;
function Ya(a, b, c, d, f) {
    this.ma = a;
    this.Ba = b;
    this.la = c;
    this.Na = d;
    this.na = f;
}
g("jspb.ExtensionFieldInfo", Ya, void 0);
function Za(a, b, c, d, f, h) {
    this.Za = a;
    this.za = b;
    this.Aa = c;
    this.Wa = d;
    this.Ab = f;
    this.Nb = h;
}
g("jspb.ExtensionFieldBinaryInfo", Za, void 0);
Ya.prototype.F = function() {
    return !!this.la;
};
Ya.prototype.isMessageType = Ya.prototype.F;
function N() {}
g("jspb.Message", N, void 0);
N.GENERATE_TO_OBJECT = !0;
N.GENERATE_FROM_OBJECT = !0;
var $a = "function" == typeof Uint8Array;
N.prototype.Ib = function() {
    return this.b;
};
N.prototype.getJsPbMessageId = N.prototype.Ib;
N.initialize = function(a, b, c, d, f, h) {
    a.f = null;
    b || (b = c ? [
        c
    ] : []);
    a.b = c ? String(c) : void 0;
    a.D = 0 === c ? -1 : 0;
    a.u = b;
    a: {
        c = a.u.length;
        b = -1;
        if (c && (b = c - 1, c = a.u[b], !(null === c || "object" != typeof c || Array.isArray(c) || $a && c instanceof Uint8Array))) {
            a.G = b - a.D;
            a.i = c;
            break a;
        }
        -1 < d ? (a.G = Math.max(d, b + 1 - a.D), a.i = null) : a.G = Number.MAX_VALUE;
    }
    a.a = {};
    if (f) for(d = 0; d < f.length; d++)b = f[d], b < a.G ? (b += a.D, a.u[b] = a.u[b] || ab) : (bb(a), a.i[b] = a.i[b] || ab);
    if (h && h.length) for(d = 0; d < h.length; d++)cb(a, h[d]);
};
var ab = Object.freeze ? Object.freeze([]) : [];
function bb(a) {
    var b = a.G + a.D;
    a.u[b] || (a.i = a.u[b] = {});
}
function db(a, b, c) {
    for(var d = [], f = 0; f < a.length; f++)d[f] = b.call(a[f], c, a[f]);
    return d;
}
N.toObjectList = db;
N.toObjectExtension = function(a, b, c, d, f) {
    for(var h in c){
        var m = c[h], t = d.call(a, m);
        if (null != t) {
            for(var B in m.Ba)if (m.Ba.hasOwnProperty(B)) break;
            b[B] = m.Na ? m.na ? db(t, m.Na, f) : m.Na(f, t) : t;
        }
    }
};
N.serializeBinaryExtensions = function(a, b, c, d) {
    for(var f in c){
        var h = c[f], m = h.Za;
        if (!h.Aa) throw Error("Message extension present that was generated without binary serialization support");
        var t = d.call(a, m);
        if (null != t) if (m.F()) if (h.Wa) h.Aa.call(b, m.ma, t, h.Wa);
        else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
        else h.Aa.call(b, m.ma, t);
    }
};
N.readBinaryExtension = function(a, b, c, d, f) {
    var h = c[b.c];
    if (h) {
        c = h.Za;
        if (!h.za) throw Error("Deserializing extension whose generated code does not support binary format");
        if (c.F()) {
            var m = new c.la;
            h.za.call(b, m, h.Ab);
        } else m = h.za.call(b);
        c.na && !h.Nb ? (b = d.call(a, c)) ? b.push(m) : f.call(a, c, [
            m
        ]) : f.call(a, c, m);
    } else b.C();
};
function O(a, b) {
    if (b < a.G) {
        b += a.D;
        var c = a.u[b];
        return c === ab ? a.u[b] = [] : c;
    }
    if (a.i) return c = a.i[b], c === ab ? a.i[b] = [] : c;
}
N.getField = O;
N.getRepeatedField = function(a, b) {
    return O(a, b);
};
function eb(a, b) {
    a = O(a, b);
    return null == a ? a : +a;
}
N.getOptionalFloatingPointField = eb;
function fb(a, b) {
    a = O(a, b);
    return null == a ? a : !!a;
}
N.getBooleanField = fb;
N.getRepeatedFloatingPointField = function(a, b) {
    var c = O(a, b);
    a.a || (a.a = {});
    if (!a.a[b]) {
        for(var d = 0; d < c.length; d++)c[d] = +c[d];
        a.a[b] = !0;
    }
    return c;
};
N.getRepeatedBooleanField = function(a, b) {
    var c = O(a, b);
    a.a || (a.a = {});
    if (!a.a[b]) {
        for(var d = 0; d < c.length; d++)c[d] = !!c[d];
        a.a[b] = !0;
    }
    return c;
};
function gb(a) {
    if (null == a || "string" === typeof a) return a;
    if ($a && a instanceof Uint8Array) return Ba(a);
    p("Cannot coerce to b64 string: " + k(a));
    return null;
}
N.bytesAsB64 = gb;
function hb(a) {
    if (null == a || a instanceof Uint8Array) return a;
    if ("string" === typeof a) return Da(a);
    p("Cannot coerce to Uint8Array: " + k(a));
    return null;
}
N.bytesAsU8 = hb;
N.bytesListAsB64 = function(a) {
    ib(a);
    return a.length && "string" !== typeof a[0] ? l(a, gb) : a;
};
N.bytesListAsU8 = function(a) {
    ib(a);
    return !a.length || a[0] instanceof Uint8Array ? a : l(a, hb);
};
function ib(a) {
    if (a && 1 < a.length) {
        var b = k(a[0]);
        qa(a, function(c) {
            k(c) != b && p("Inconsistent type in JSPB repeated field array. Got " + k(c) + " expected " + b);
        });
    }
}
function jb(a, b, c) {
    a = O(a, b);
    return null == a ? c : a;
}
N.getFieldWithDefault = jb;
N.getBooleanFieldWithDefault = function(a, b, c) {
    a = fb(a, b);
    return null == a ? c : a;
};
N.getFloatingPointFieldWithDefault = function(a, b, c) {
    a = eb(a, b);
    return null == a ? c : a;
};
N.getFieldProto3 = jb;
N.getMapField = function(a, b, c, d) {
    a.f || (a.f = {});
    if (b in a.f) return a.f[b];
    var f = O(a, b);
    if (!f) {
        if (c) return;
        f = [];
        P(a, b, f);
    }
    return a.f[b] = new r(f, d);
};
function P(a, b, c) {
    q(a, N);
    b < a.G ? a.u[b + a.D] = c : (bb(a), a.i[b] = c);
    return a;
}
N.setField = P;
N.setProto3IntField = function(a, b, c) {
    return Q(a, b, c, 0);
};
N.setProto3FloatField = function(a, b, c) {
    return Q(a, b, c, 0);
};
N.setProto3BooleanField = function(a, b, c) {
    return Q(a, b, c, !1);
};
N.setProto3StringField = function(a, b, c) {
    return Q(a, b, c, "");
};
N.setProto3BytesField = function(a, b, c) {
    return Q(a, b, c, "");
};
N.setProto3EnumField = function(a, b, c) {
    return Q(a, b, c, 0);
};
N.setProto3StringIntField = function(a, b, c) {
    return Q(a, b, c, "0");
};
function Q(a, b, c, d) {
    q(a, N);
    c !== d ? P(a, b, c) : b < a.G ? a.u[b + a.D] = null : (bb(a), delete a.i[b]);
    return a;
}
N.addToRepeatedField = function(a, b, c, d) {
    q(a, N);
    b = O(a, b);
    void 0 != d ? b.splice(d, 0, c) : b.push(c);
    return a;
};
function kb(a, b, c, d) {
    q(a, N);
    (c = cb(a, c)) && c !== b && void 0 !== d && (a.f && c in a.f && (a.f[c] = void 0), P(a, c, void 0));
    return P(a, b, d);
}
N.setOneofField = kb;
function cb(a, b) {
    for(var c, d, f = 0; f < b.length; f++){
        var h = b[f], m = O(a, h);
        null != m && (c = h, d = m, P(a, h, void 0));
    }
    return c ? (P(a, c, d), c) : 0;
}
N.computeOneofCase = cb;
N.getWrapperField = function(a, b, c, d) {
    a.f || (a.f = {});
    if (!a.f[c]) {
        var f = O(a, c);
        if (d || f) a.f[c] = new b(f);
    }
    return a.f[c];
};
N.getRepeatedWrapperField = function(a, b, c) {
    lb(a, b, c);
    b = a.f[c];
    b == ab && (b = a.f[c] = []);
    return b;
};
function lb(a, b, c) {
    a.f || (a.f = {});
    if (!a.f[c]) {
        for(var d = O(a, c), f = [], h = 0; h < d.length; h++)f[h] = new b(d[h]);
        a.f[c] = f;
    }
}
N.setWrapperField = function(a, b, c) {
    q(a, N);
    a.f || (a.f = {});
    var d = c ? c.g() : c;
    a.f[b] = c;
    return P(a, b, d);
};
N.setOneofWrapperField = function(a, b, c, d) {
    q(a, N);
    a.f || (a.f = {});
    var f = d ? d.g() : d;
    a.f[b] = d;
    return kb(a, b, c, f);
};
N.setRepeatedWrapperField = function(a, b, c) {
    q(a, N);
    a.f || (a.f = {});
    c = c || [];
    for(var d = [], f = 0; f < c.length; f++)d[f] = c[f].g();
    a.f[b] = c;
    return P(a, b, d);
};
N.addToRepeatedWrapperField = function(a, b, c, d, f) {
    lb(a, d, b);
    var h = a.f[b];
    h || (h = a.f[b] = []);
    c = c ? c : new d;
    a = O(a, b);
    void 0 != f ? (h.splice(f, 0, c), a.splice(f, 0, c.g())) : (h.push(c), a.push(c.g()));
    return c;
};
N.toMap = function(a, b, c, d) {
    for(var f = {}, h = 0; h < a.length; h++)f[b.call(a[h])] = c ? c.call(a[h], d, a[h]) : a[h];
    return f;
};
function mb(a) {
    if (a.f) for(var b in a.f){
        var c = a.f[b];
        if (Array.isArray(c)) for(var d = 0; d < c.length; d++)c[d] && c[d].g();
        else c && c.g();
    }
}
N.prototype.g = function() {
    mb(this);
    return this.u;
};
N.prototype.toArray = N.prototype.g;
N.prototype.toString = function() {
    mb(this);
    return this.u.toString();
};
N.prototype.getExtension = function(a) {
    if (this.i) {
        this.f || (this.f = {});
        var b = a.ma;
        if (a.na) {
            if (a.F()) return this.f[b] || (this.f[b] = l(this.i[b] || [], function(c) {
                return new a.la(c);
            })), this.f[b];
        } else if (a.F()) return !this.f[b] && this.i[b] && (this.f[b] = new a.la(this.i[b])), this.f[b];
        return this.i[b];
    }
};
N.prototype.getExtension = N.prototype.getExtension;
N.prototype.Kc = function(a, b) {
    this.f || (this.f = {});
    bb(this);
    var c = a.ma;
    a.na ? (b = b || [], a.F() ? (this.f[c] = b, this.i[c] = l(b, function(d) {
        return d.g();
    })) : this.i[c] = b) : a.F() ? (this.f[c] = b, this.i[c] = b ? b.g() : b) : this.i[c] = b;
    return this;
};
N.prototype.setExtension = N.prototype.Kc;
N.difference = function(a, b) {
    if (!(a instanceof b.constructor)) throw Error("Messages have different types.");
    var c = a.g();
    b = b.g();
    var d = [], f = 0, h = c.length > b.length ? c.length : b.length;
    a.b && (d[0] = a.b, f = 1);
    for(; f < h; f++)nb(c[f], b[f]) || (d[f] = b[f]);
    return new a.constructor(d);
};
N.equals = function(a, b) {
    return a == b || !(!a || !b) && a instanceof b.constructor && nb(a.g(), b.g());
};
function ob(a, b) {
    a = a || {};
    b = b || {};
    var c = {}, d;
    for(d in a)c[d] = 0;
    for(d in b)c[d] = 0;
    for(d in c)if (!nb(a[d], b[d])) return !1;
    return !0;
}
N.compareExtensions = ob;
function nb(a, b) {
    if (a == b) return !0;
    if (!la(a) || !la(b)) return "number" === typeof a && isNaN(a) || "number" === typeof b && isNaN(b) ? String(a) == String(b) : !1;
    if (a.constructor != b.constructor) return !1;
    if ($a && a.constructor === Uint8Array) {
        if (a.length != b.length) return !1;
        for(var c = 0; c < a.length; c++)if (a[c] != b[c]) return !1;
        return !0;
    }
    if (a.constructor === Array) {
        var d = void 0, f = void 0, h = Math.max(a.length, b.length);
        for(c = 0; c < h; c++){
            var m = a[c], t = b[c];
            m && m.constructor == Object && (n(void 0 === d), n(c === a.length - 1), d = m, m = void 0);
            t && t.constructor == Object && (n(void 0 === f), n(c === b.length - 1), f = t, t = void 0);
            if (!nb(m, t)) return !1;
        }
        return d || f ? (d = d || {}, f = f || {}, ob(d, f)) : !0;
    }
    if (a.constructor === Object) return ob(a, b);
    throw Error("Invalid type in JSPB array");
}
N.compareFields = nb;
N.prototype.Bb = function() {
    return pb(this);
};
N.prototype.cloneMessage = N.prototype.Bb;
N.prototype.clone = function() {
    return pb(this);
};
N.prototype.clone = N.prototype.clone;
N.clone = function(a) {
    return pb(a);
};
function pb(a) {
    return new a.constructor(qb(a.g()));
}
N.copyInto = function(a, b) {
    q(a, N);
    q(b, N);
    n(a.constructor == b.constructor, "Copy source and target message should have the same type.");
    a = pb(a);
    for(var c = b.g(), d = a.g(), f = c.length = 0; f < d.length; f++)c[f] = d[f];
    b.f = a.f;
    b.i = a.i;
};
function qb(a) {
    if (Array.isArray(a)) {
        for(var b = Array(a.length), c = 0; c < a.length; c++){
            var d = a[c];
            null != d && (b[c] = "object" == typeof d ? qb(n(d)) : d);
        }
        return b;
    }
    if ($a && a instanceof Uint8Array) return new Uint8Array(a);
    b = {};
    for(c in a)d = a[c], null != d && (b[c] = "object" == typeof d ? qb(n(d)) : d);
    return b;
}
N.registerMessageType = function(a, b) {
    b.we = a;
};
var R = {
    dump: function(a) {
        q(a, N, "jspb.Message instance expected");
        n(a.getExtension, "Only unobfuscated and unoptimized compilation modes supported.");
        return R.X(a);
    }
};
g("jspb.debug.dump", R.dump, void 0);
R.X = function(a) {
    var b = k(a);
    if ("number" == b || "string" == b || "boolean" == b || "null" == b || "undefined" == b || "undefined" !== typeof Uint8Array && a instanceof Uint8Array) return a;
    if ("array" == b) return ua(a), l(a, R.X);
    if (a instanceof r) {
        var c = {};
        a = a.entries();
        for(var d = a.next(); !d.done; d = a.next())c[d.value[0]] = R.X(d.value[1]);
        return c;
    }
    q(a, N, "Only messages expected: " + a);
    b = a.constructor;
    var f = {
        $name: b.name || b.displayName
    };
    for(t in b.prototype){
        var h = /^get([A-Z]\w*)/.exec(t);
        if (h && "getExtension" != t && "getJsPbMessageId" != t) {
            var m = "has" + h[1];
            if (!a[m] || a[m]()) m = a[t](), f[R.$a(h[1])] = R.X(m);
        }
    }
    if (a.extensionObject_) return f.$extensions = "Recursive dumping of extensions not supported in compiled code. Switch to uncompiled or dump extension object directly", f;
    for(d in b.extensions)if (/^\d+$/.test(d)) {
        m = b.extensions[d];
        var t = a.getExtension(m);
        h = void 0;
        m = m.Ba;
        var B = [], M = 0;
        for(h in m)B[M++] = h;
        h = B[0];
        null != t && (c || (c = f.$extensions = {}), c[R.$a(h)] = R.X(t));
    }
    return f;
};
R.$a = function(a) {
    return a.replace(/^[A-Z]/, function(b) {
        return b.toLowerCase();
    });
};
function S() {
    this.a = [];
}
g("jspb.BinaryEncoder", S, void 0);
S.prototype.length = function() {
    return this.a.length;
};
S.prototype.length = S.prototype.length;
S.prototype.end = function() {
    var a = this.a;
    this.a = [];
    return a;
};
S.prototype.end = S.prototype.end;
S.prototype.l = function(a, b) {
    n(a == Math.floor(a));
    n(b == Math.floor(b));
    n(0 <= a && 4294967296 > a);
    for(n(0 <= b && 4294967296 > b); 0 < b || 127 < a;)this.a.push(a & 127 | 128), a = (a >>> 7 | b << 25) >>> 0, b >>>= 7;
    this.a.push(a);
};
S.prototype.writeSplitVarint64 = S.prototype.l;
S.prototype.A = function(a, b) {
    n(a == Math.floor(a));
    n(b == Math.floor(b));
    n(0 <= a && 4294967296 > a);
    n(0 <= b && 4294967296 > b);
    this.s(a);
    this.s(b);
};
S.prototype.writeSplitFixed64 = S.prototype.A;
S.prototype.j = function(a) {
    n(a == Math.floor(a));
    for(n(0 <= a && 4294967296 > a); 127 < a;)this.a.push(a & 127 | 128), a >>>= 7;
    this.a.push(a);
};
S.prototype.writeUnsignedVarint32 = S.prototype.j;
S.prototype.M = function(a) {
    n(a == Math.floor(a));
    n(-2147483648 <= a && 2147483648 > a);
    if (0 <= a) this.j(a);
    else {
        for(var b = 0; 9 > b; b++)this.a.push(a & 127 | 128), a >>= 7;
        this.a.push(1);
    }
};
S.prototype.writeSignedVarint32 = S.prototype.M;
S.prototype.va = function(a) {
    n(a == Math.floor(a));
    n(0 <= a && 1.8446744073709552E19 > a);
    A(a);
    this.l(y, z);
};
S.prototype.writeUnsignedVarint64 = S.prototype.va;
S.prototype.ua = function(a) {
    n(a == Math.floor(a));
    n(-9223372036854775808 <= a && 0x7fffffffffffffff > a);
    A(a);
    this.l(y, z);
};
S.prototype.writeSignedVarint64 = S.prototype.ua;
S.prototype.wa = function(a) {
    n(a == Math.floor(a));
    n(-2147483648 <= a && 2147483648 > a);
    this.j((a << 1 ^ a >> 31) >>> 0);
};
S.prototype.writeZigzagVarint32 = S.prototype.wa;
S.prototype.xa = function(a) {
    n(a == Math.floor(a));
    n(-9223372036854775808 <= a && 0x7fffffffffffffff > a);
    Ga(a);
    this.l(y, z);
};
S.prototype.writeZigzagVarint64 = S.prototype.xa;
S.prototype.Ta = function(a) {
    this.W(H(a));
};
S.prototype.writeZigzagVarint64String = S.prototype.Ta;
S.prototype.W = function(a) {
    var b = this;
    C(a);
    Ja(y, z, function(c, d) {
        b.l(c >>> 0, d >>> 0);
    });
};
S.prototype.writeZigzagVarintHash64 = S.prototype.W;
S.prototype.be = function(a) {
    n(a == Math.floor(a));
    n(0 <= a && 256 > a);
    this.a.push(a >>> 0 & 255);
};
S.prototype.writeUint8 = S.prototype.be;
S.prototype.ae = function(a) {
    n(a == Math.floor(a));
    n(0 <= a && 65536 > a);
    this.a.push(a >>> 0 & 255);
    this.a.push(a >>> 8 & 255);
};
S.prototype.writeUint16 = S.prototype.ae;
S.prototype.s = function(a) {
    n(a == Math.floor(a));
    n(0 <= a && 4294967296 > a);
    this.a.push(a >>> 0 & 255);
    this.a.push(a >>> 8 & 255);
    this.a.push(a >>> 16 & 255);
    this.a.push(a >>> 24 & 255);
};
S.prototype.writeUint32 = S.prototype.s;
S.prototype.V = function(a) {
    n(a == Math.floor(a));
    n(0 <= a && 1.8446744073709552E19 > a);
    Fa(a);
    this.s(y);
    this.s(z);
};
S.prototype.writeUint64 = S.prototype.V;
S.prototype.Qc = function(a) {
    n(a == Math.floor(a));
    n(-128 <= a && 128 > a);
    this.a.push(a >>> 0 & 255);
};
S.prototype.writeInt8 = S.prototype.Qc;
S.prototype.Pc = function(a) {
    n(a == Math.floor(a));
    n(-32768 <= a && 32768 > a);
    this.a.push(a >>> 0 & 255);
    this.a.push(a >>> 8 & 255);
};
S.prototype.writeInt16 = S.prototype.Pc;
S.prototype.S = function(a) {
    n(a == Math.floor(a));
    n(-2147483648 <= a && 2147483648 > a);
    this.a.push(a >>> 0 & 255);
    this.a.push(a >>> 8 & 255);
    this.a.push(a >>> 16 & 255);
    this.a.push(a >>> 24 & 255);
};
S.prototype.writeInt32 = S.prototype.S;
S.prototype.T = function(a) {
    n(a == Math.floor(a));
    n(-9223372036854775808 <= a && 0x7fffffffffffffff > a);
    A(a);
    this.A(y, z);
};
S.prototype.writeInt64 = S.prototype.T;
S.prototype.ka = function(a) {
    n(a == Math.floor(a));
    n(-9223372036854775808 <= +a && 0x7fffffffffffffff > +a);
    C(H(a));
    this.A(y, z);
};
S.prototype.writeInt64String = S.prototype.ka;
S.prototype.L = function(a) {
    n(Infinity === a || -Infinity === a || isNaN(a) || -3.4028234663852886E38 <= a && 3.4028234663852886E38 >= a);
    Ha(a);
    this.s(y);
};
S.prototype.writeFloat = S.prototype.L;
S.prototype.J = function(a) {
    n(Infinity === a || -Infinity === a || isNaN(a) || -1.7976931348623157E308 <= a && 1.7976931348623157E308 >= a);
    Ia(a);
    this.s(y);
    this.s(z);
};
S.prototype.writeDouble = S.prototype.J;
S.prototype.I = function(a) {
    n("boolean" === typeof a || "number" === typeof a);
    this.a.push(a ? 1 : 0);
};
S.prototype.writeBool = S.prototype.I;
S.prototype.R = function(a) {
    n(a == Math.floor(a));
    n(-2147483648 <= a && 2147483648 > a);
    this.M(a);
};
S.prototype.writeEnum = S.prototype.R;
S.prototype.ja = function(a) {
    this.a.push.apply(this.a, a);
};
S.prototype.writeBytes = S.prototype.ja;
S.prototype.N = function(a) {
    C(a);
    this.l(y, z);
};
S.prototype.writeVarintHash64 = S.prototype.N;
S.prototype.K = function(a) {
    C(a);
    this.s(y);
    this.s(z);
};
S.prototype.writeFixedHash64 = S.prototype.K;
S.prototype.U = function(a) {
    var b = this.a.length;
    ta(a);
    for(var c = 0; c < a.length; c++){
        var d = a.charCodeAt(c);
        if (128 > d) this.a.push(d);
        else if (2048 > d) this.a.push(d >> 6 | 192), this.a.push(d & 63 | 128);
        else if (65536 > d) if (55296 <= d && 56319 >= d && c + 1 < a.length) {
            var f = a.charCodeAt(c + 1);
            56320 <= f && 57343 >= f && (d = 1024 * (d - 55296) + f - 56320 + 65536, this.a.push(d >> 18 | 240), this.a.push(d >> 12 & 63 | 128), this.a.push(d >> 6 & 63 | 128), this.a.push(d & 63 | 128), c++);
        } else this.a.push(d >> 12 | 224), this.a.push(d >> 6 & 63 | 128), this.a.push(d & 63 | 128);
    }
    return this.a.length - b;
};
S.prototype.writeString = S.prototype.U;
function T(a, b) {
    this.lo = a;
    this.hi = b;
}
g("jspb.arith.UInt64", T, void 0);
T.prototype.cmp = function(a) {
    return this.hi < a.hi || this.hi == a.hi && this.lo < a.lo ? -1 : this.hi == a.hi && this.lo == a.lo ? 0 : 1;
};
T.prototype.cmp = T.prototype.cmp;
T.prototype.La = function() {
    return new T((this.lo >>> 1 | (this.hi & 1) << 31) >>> 0, this.hi >>> 1 >>> 0);
};
T.prototype.rightShift = T.prototype.La;
T.prototype.Da = function() {
    return new T(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0);
};
T.prototype.leftShift = T.prototype.Da;
T.prototype.cb = function() {
    return !!(this.hi & 2147483648);
};
T.prototype.msb = T.prototype.cb;
T.prototype.Ob = function() {
    return !!(this.lo & 1);
};
T.prototype.lsb = T.prototype.Ob;
T.prototype.Ua = function() {
    return 0 == this.lo && 0 == this.hi;
};
T.prototype.zero = T.prototype.Ua;
T.prototype.add = function(a) {
    return new T((this.lo + a.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a.lo ? 1 : 0) >>> 0);
};
T.prototype.add = T.prototype.add;
T.prototype.sub = function(a) {
    return new T((this.lo - a.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a.hi & 4294967295) >>> 0) - (0 > this.lo - a.lo ? 1 : 0) >>> 0);
};
T.prototype.sub = T.prototype.sub;
function rb(a, b) {
    var c = a & 65535;
    a >>>= 16;
    var d = b & 65535, f = b >>> 16;
    b = c * d + 65536 * (c * f & 65535) + 65536 * (a * d & 65535);
    for(c = a * f + (c * f >>> 16) + (a * d >>> 16); 4294967296 <= b;)b -= 4294967296, c += 1;
    return new T(b >>> 0, c >>> 0);
}
T.mul32x32 = rb;
T.prototype.eb = function(a) {
    var b = rb(this.lo, a);
    a = rb(this.hi, a);
    a.hi = a.lo;
    a.lo = 0;
    return b.add(a);
};
T.prototype.mul = T.prototype.eb;
T.prototype.Xa = function(a) {
    if (0 == a) return [];
    var b = new T(0, 0), c = new T(this.lo, this.hi);
    a = new T(a, 0);
    for(var d = new T(1, 0); !a.cb();)a = a.Da(), d = d.Da();
    for(; !d.Ua();)0 >= a.cmp(c) && (b = b.add(d), c = c.sub(a)), a = a.La(), d = d.La();
    return [
        b,
        c
    ];
};
T.prototype.div = T.prototype.Xa;
T.prototype.toString = function() {
    for(var a = "", b = this; !b.Ua();){
        b = b.Xa(10);
        var c = b[0];
        a = b[1].lo + a;
        b = c;
    }
    "" == a && (a = "0");
    return a;
};
T.prototype.toString = T.prototype.toString;
function U(a) {
    for(var b = new T(0, 0), c = new T(0, 0), d = 0; d < a.length; d++){
        if ("0" > a[d] || "9" < a[d]) return null;
        c.lo = parseInt(a[d], 10);
        b = b.eb(10).add(c);
    }
    return b;
}
T.fromString = U;
T.prototype.clone = function() {
    return new T(this.lo, this.hi);
};
T.prototype.clone = T.prototype.clone;
function V(a, b) {
    this.lo = a;
    this.hi = b;
}
g("jspb.arith.Int64", V, void 0);
V.prototype.add = function(a) {
    return new V((this.lo + a.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a.lo ? 1 : 0) >>> 0);
};
V.prototype.add = V.prototype.add;
V.prototype.sub = function(a) {
    return new V((this.lo - a.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a.hi & 4294967295) >>> 0) - (0 > this.lo - a.lo ? 1 : 0) >>> 0);
};
V.prototype.sub = V.prototype.sub;
V.prototype.clone = function() {
    return new V(this.lo, this.hi);
};
V.prototype.clone = V.prototype.clone;
V.prototype.toString = function() {
    var a = 0 != (this.hi & 2147483648), b = new T(this.lo, this.hi);
    a && (b = new T(0, 0).sub(b));
    return (a ? "-" : "") + b.toString();
};
V.prototype.toString = V.prototype.toString;
function sb(a) {
    var b = 0 < a.length && "-" == a[0];
    b && (a = a.substring(1));
    a = U(a);
    if (null === a) return null;
    b && (a = new T(0, 0).sub(a));
    return new V(a.lo, a.hi);
}
V.fromString = sb;
function W() {
    this.c = [];
    this.b = 0;
    this.a = new S;
    this.h = [];
}
g("jspb.BinaryWriter", W, void 0);
function tb(a, b) {
    var c = a.a.end();
    a.c.push(c);
    a.c.push(b);
    a.b += c.length + b.length;
}
function X(a, b) {
    Y(a, b, 2);
    b = a.a.end();
    a.c.push(b);
    a.b += b.length;
    b.push(a.b);
    return b;
}
function Z(a, b) {
    var c = b.pop();
    c = a.b + a.a.length() - c;
    for(n(0 <= c); 127 < c;)b.push(c & 127 | 128), c >>>= 7, a.b++;
    b.push(c);
    a.b++;
}
W.prototype.pb = function(a, b, c) {
    tb(this, a.subarray(b, c));
};
W.prototype.writeSerializedMessage = W.prototype.pb;
W.prototype.Pb = function(a, b, c) {
    null != a && null != b && null != c && this.pb(a, b, c);
};
W.prototype.maybeWriteSerializedMessage = W.prototype.Pb;
W.prototype.reset = function() {
    this.c = [];
    this.a.end();
    this.b = 0;
    this.h = [];
};
W.prototype.reset = W.prototype.reset;
W.prototype.ab = function() {
    n(0 == this.h.length);
    for(var a = new Uint8Array(this.b + this.a.length()), b = this.c, c = b.length, d = 0, f = 0; f < c; f++){
        var h = b[f];
        a.set(h, d);
        d += h.length;
    }
    b = this.a.end();
    a.set(b, d);
    d += b.length;
    n(d == a.length);
    this.c = [
        a
    ];
    return a;
};
W.prototype.getResultBuffer = W.prototype.ab;
W.prototype.Kb = function(a) {
    return Ba(this.ab(), a);
};
W.prototype.getResultBase64String = W.prototype.Kb;
W.prototype.Va = function(a) {
    this.h.push(X(this, a));
};
W.prototype.beginSubMessage = W.prototype.Va;
W.prototype.Ya = function() {
    n(0 <= this.h.length);
    Z(this, this.h.pop());
};
W.prototype.endSubMessage = W.prototype.Ya;
function Y(a, b, c) {
    n(1 <= b && b == Math.floor(b));
    a.a.j(8 * b + c);
}
W.prototype.Nc = function(a, b, c) {
    switch(a){
        case 1:
            this.J(b, c);
            break;
        case 2:
            this.L(b, c);
            break;
        case 3:
            this.T(b, c);
            break;
        case 4:
            this.V(b, c);
            break;
        case 5:
            this.S(b, c);
            break;
        case 6:
            this.Qa(b, c);
            break;
        case 7:
            this.Pa(b, c);
            break;
        case 8:
            this.I(b, c);
            break;
        case 9:
            this.U(b, c);
            break;
        case 10:
            p("Group field type not supported in writeAny()");
            break;
        case 11:
            p("Message field type not supported in writeAny()");
            break;
        case 12:
            this.ja(b, c);
            break;
        case 13:
            this.s(b, c);
            break;
        case 14:
            this.R(b, c);
            break;
        case 15:
            this.Ra(b, c);
            break;
        case 16:
            this.Sa(b, c);
            break;
        case 17:
            this.rb(b, c);
            break;
        case 18:
            this.sb(b, c);
            break;
        case 30:
            this.K(b, c);
            break;
        case 31:
            this.N(b, c);
            break;
        default:
            p("Invalid field type in writeAny()");
    }
};
W.prototype.writeAny = W.prototype.Nc;
function ub(a, b, c) {
    null != c && (Y(a, b, 0), a.a.j(c));
}
function vb(a, b, c) {
    null != c && (Y(a, b, 0), a.a.M(c));
}
W.prototype.S = function(a, b) {
    null != b && (n(-2147483648 <= b && 2147483648 > b), vb(this, a, b));
};
W.prototype.writeInt32 = W.prototype.S;
W.prototype.ob = function(a, b) {
    null != b && (b = parseInt(b, 10), n(-2147483648 <= b && 2147483648 > b), vb(this, a, b));
};
W.prototype.writeInt32String = W.prototype.ob;
W.prototype.T = function(a, b) {
    null != b && (n(-9223372036854775808 <= b && 0x7fffffffffffffff > b), null != b && (Y(this, a, 0), this.a.ua(b)));
};
W.prototype.writeInt64 = W.prototype.T;
W.prototype.ka = function(a, b) {
    null != b && (b = sb(b), Y(this, a, 0), this.a.l(b.lo, b.hi));
};
W.prototype.writeInt64String = W.prototype.ka;
W.prototype.s = function(a, b) {
    null != b && (n(0 <= b && 4294967296 > b), ub(this, a, b));
};
W.prototype.writeUint32 = W.prototype.s;
W.prototype.ub = function(a, b) {
    null != b && (b = parseInt(b, 10), n(0 <= b && 4294967296 > b), ub(this, a, b));
};
W.prototype.writeUint32String = W.prototype.ub;
W.prototype.V = function(a, b) {
    null != b && (n(0 <= b && 1.8446744073709552E19 > b), null != b && (Y(this, a, 0), this.a.va(b)));
};
W.prototype.writeUint64 = W.prototype.V;
W.prototype.vb = function(a, b) {
    null != b && (b = U(b), Y(this, a, 0), this.a.l(b.lo, b.hi));
};
W.prototype.writeUint64String = W.prototype.vb;
W.prototype.rb = function(a, b) {
    null != b && (n(-2147483648 <= b && 2147483648 > b), null != b && (Y(this, a, 0), this.a.wa(b)));
};
W.prototype.writeSint32 = W.prototype.rb;
W.prototype.sb = function(a, b) {
    null != b && (n(-9223372036854775808 <= b && 0x7fffffffffffffff > b), null != b && (Y(this, a, 0), this.a.xa(b)));
};
W.prototype.writeSint64 = W.prototype.sb;
W.prototype.$d = function(a, b) {
    null != b && null != b && (Y(this, a, 0), this.a.W(b));
};
W.prototype.writeSintHash64 = W.prototype.$d;
W.prototype.Zd = function(a, b) {
    null != b && null != b && (Y(this, a, 0), this.a.Ta(b));
};
W.prototype.writeSint64String = W.prototype.Zd;
W.prototype.Pa = function(a, b) {
    null != b && (n(0 <= b && 4294967296 > b), Y(this, a, 5), this.a.s(b));
};
W.prototype.writeFixed32 = W.prototype.Pa;
W.prototype.Qa = function(a, b) {
    null != b && (n(0 <= b && 1.8446744073709552E19 > b), Y(this, a, 1), this.a.V(b));
};
W.prototype.writeFixed64 = W.prototype.Qa;
W.prototype.nb = function(a, b) {
    null != b && (b = U(b), Y(this, a, 1), this.a.A(b.lo, b.hi));
};
W.prototype.writeFixed64String = W.prototype.nb;
W.prototype.Ra = function(a, b) {
    null != b && (n(-2147483648 <= b && 2147483648 > b), Y(this, a, 5), this.a.S(b));
};
W.prototype.writeSfixed32 = W.prototype.Ra;
W.prototype.Sa = function(a, b) {
    null != b && (n(-9223372036854775808 <= b && 0x7fffffffffffffff > b), Y(this, a, 1), this.a.T(b));
};
W.prototype.writeSfixed64 = W.prototype.Sa;
W.prototype.qb = function(a, b) {
    null != b && (b = sb(b), Y(this, a, 1), this.a.A(b.lo, b.hi));
};
W.prototype.writeSfixed64String = W.prototype.qb;
W.prototype.L = function(a, b) {
    null != b && (Y(this, a, 5), this.a.L(b));
};
W.prototype.writeFloat = W.prototype.L;
W.prototype.J = function(a, b) {
    null != b && (Y(this, a, 1), this.a.J(b));
};
W.prototype.writeDouble = W.prototype.J;
W.prototype.I = function(a, b) {
    null != b && (n("boolean" === typeof b || "number" === typeof b), Y(this, a, 0), this.a.I(b));
};
W.prototype.writeBool = W.prototype.I;
W.prototype.R = function(a, b) {
    null != b && (n(-2147483648 <= b && 2147483648 > b), Y(this, a, 0), this.a.M(b));
};
W.prototype.writeEnum = W.prototype.R;
W.prototype.U = function(a, b) {
    null != b && (a = X(this, a), this.a.U(b), Z(this, a));
};
W.prototype.writeString = W.prototype.U;
W.prototype.ja = function(a, b) {
    null != b && (b = Ua(b), Y(this, a, 2), this.a.j(b.length), tb(this, b));
};
W.prototype.writeBytes = W.prototype.ja;
W.prototype.Rc = function(a, b, c) {
    null != b && (a = X(this, a), c(b, this), Z(this, a));
};
W.prototype.writeMessage = W.prototype.Rc;
W.prototype.Sc = function(a, b, c) {
    null != b && (Y(this, 1, 3), Y(this, 2, 0), this.a.M(a), a = X(this, 3), c(b, this), Z(this, a), Y(this, 1, 4));
};
W.prototype.writeMessageSet = W.prototype.Sc;
W.prototype.Oc = function(a, b, c) {
    null != b && (Y(this, a, 3), c(b, this), Y(this, a, 4));
};
W.prototype.writeGroup = W.prototype.Oc;
W.prototype.K = function(a, b) {
    null != b && (n(8 == b.length), Y(this, a, 1), this.a.K(b));
};
W.prototype.writeFixedHash64 = W.prototype.K;
W.prototype.N = function(a, b) {
    null != b && (n(8 == b.length), Y(this, a, 0), this.a.N(b));
};
W.prototype.writeVarintHash64 = W.prototype.N;
W.prototype.A = function(a, b, c) {
    Y(this, a, 1);
    this.a.A(b, c);
};
W.prototype.writeSplitFixed64 = W.prototype.A;
W.prototype.l = function(a, b, c) {
    Y(this, a, 0);
    this.a.l(b, c);
};
W.prototype.writeSplitVarint64 = W.prototype.l;
W.prototype.tb = function(a, b, c) {
    Y(this, a, 0);
    var d = this.a;
    Ja(b, c, function(f, h) {
        d.l(f >>> 0, h >>> 0);
    });
};
W.prototype.writeSplitZigzagVarint64 = W.prototype.tb;
W.prototype.Ed = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)vb(this, a, b[c]);
};
W.prototype.writeRepeatedInt32 = W.prototype.Ed;
W.prototype.Fd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.ob(a, b[c]);
};
W.prototype.writeRepeatedInt32String = W.prototype.Fd;
W.prototype.Gd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++){
        var d = b[c];
        null != d && (Y(this, a, 0), this.a.ua(d));
    }
};
W.prototype.writeRepeatedInt64 = W.prototype.Gd;
W.prototype.Qd = function(a, b, c, d) {
    if (null != b) for(var f = 0; f < b.length; f++)this.A(a, c(b[f]), d(b[f]));
};
W.prototype.writeRepeatedSplitFixed64 = W.prototype.Qd;
W.prototype.Rd = function(a, b, c, d) {
    if (null != b) for(var f = 0; f < b.length; f++)this.l(a, c(b[f]), d(b[f]));
};
W.prototype.writeRepeatedSplitVarint64 = W.prototype.Rd;
W.prototype.Sd = function(a, b, c, d) {
    if (null != b) for(var f = 0; f < b.length; f++)this.tb(a, c(b[f]), d(b[f]));
};
W.prototype.writeRepeatedSplitZigzagVarint64 = W.prototype.Sd;
W.prototype.Hd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.ka(a, b[c]);
};
W.prototype.writeRepeatedInt64String = W.prototype.Hd;
W.prototype.Ud = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)ub(this, a, b[c]);
};
W.prototype.writeRepeatedUint32 = W.prototype.Ud;
W.prototype.Vd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.ub(a, b[c]);
};
W.prototype.writeRepeatedUint32String = W.prototype.Vd;
W.prototype.Wd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++){
        var d = b[c];
        null != d && (Y(this, a, 0), this.a.va(d));
    }
};
W.prototype.writeRepeatedUint64 = W.prototype.Wd;
W.prototype.Xd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.vb(a, b[c]);
};
W.prototype.writeRepeatedUint64String = W.prototype.Xd;
W.prototype.Md = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++){
        var d = b[c];
        null != d && (Y(this, a, 0), this.a.wa(d));
    }
};
W.prototype.writeRepeatedSint32 = W.prototype.Md;
W.prototype.Nd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++){
        var d = b[c];
        null != d && (Y(this, a, 0), this.a.xa(d));
    }
};
W.prototype.writeRepeatedSint64 = W.prototype.Nd;
W.prototype.Od = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++){
        var d = b[c];
        null != d && (Y(this, a, 0), this.a.Ta(d));
    }
};
W.prototype.writeRepeatedSint64String = W.prototype.Od;
W.prototype.Pd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++){
        var d = b[c];
        null != d && (Y(this, a, 0), this.a.W(d));
    }
};
W.prototype.writeRepeatedSintHash64 = W.prototype.Pd;
W.prototype.yd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.Pa(a, b[c]);
};
W.prototype.writeRepeatedFixed32 = W.prototype.yd;
W.prototype.zd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.Qa(a, b[c]);
};
W.prototype.writeRepeatedFixed64 = W.prototype.zd;
W.prototype.Ad = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.nb(a, b[c]);
};
W.prototype.writeRepeatedFixed64String = W.prototype.Ad;
W.prototype.Jd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.Ra(a, b[c]);
};
W.prototype.writeRepeatedSfixed32 = W.prototype.Jd;
W.prototype.Kd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.Sa(a, b[c]);
};
W.prototype.writeRepeatedSfixed64 = W.prototype.Kd;
W.prototype.Ld = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.qb(a, b[c]);
};
W.prototype.writeRepeatedSfixed64String = W.prototype.Ld;
W.prototype.Cd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.L(a, b[c]);
};
W.prototype.writeRepeatedFloat = W.prototype.Cd;
W.prototype.wd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.J(a, b[c]);
};
W.prototype.writeRepeatedDouble = W.prototype.wd;
W.prototype.ud = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.I(a, b[c]);
};
W.prototype.writeRepeatedBool = W.prototype.ud;
W.prototype.xd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.R(a, b[c]);
};
W.prototype.writeRepeatedEnum = W.prototype.xd;
W.prototype.Td = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.U(a, b[c]);
};
W.prototype.writeRepeatedString = W.prototype.Td;
W.prototype.vd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.ja(a, b[c]);
};
W.prototype.writeRepeatedBytes = W.prototype.vd;
W.prototype.Id = function(a, b, c) {
    if (null != b) for(var d = 0; d < b.length; d++){
        var f = X(this, a);
        c(b[d], this);
        Z(this, f);
    }
};
W.prototype.writeRepeatedMessage = W.prototype.Id;
W.prototype.Dd = function(a, b, c) {
    if (null != b) for(var d = 0; d < b.length; d++)Y(this, a, 3), c(b[d], this), Y(this, a, 4);
};
W.prototype.writeRepeatedGroup = W.prototype.Dd;
W.prototype.Bd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.K(a, b[c]);
};
W.prototype.writeRepeatedFixedHash64 = W.prototype.Bd;
W.prototype.Yd = function(a, b) {
    if (null != b) for(var c = 0; c < b.length; c++)this.N(a, b[c]);
};
W.prototype.writeRepeatedVarintHash64 = W.prototype.Yd;
W.prototype.ad = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++)this.a.M(b[c]);
        Z(this, a);
    }
};
W.prototype.writePackedInt32 = W.prototype.ad;
W.prototype.bd = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++)this.a.M(parseInt(b[c], 10));
        Z(this, a);
    }
};
W.prototype.writePackedInt32String = W.prototype.bd;
W.prototype.cd = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++)this.a.ua(b[c]);
        Z(this, a);
    }
};
W.prototype.writePackedInt64 = W.prototype.cd;
W.prototype.md = function(a, b, c, d) {
    if (null != b) {
        a = X(this, a);
        for(var f = 0; f < b.length; f++)this.a.A(c(b[f]), d(b[f]));
        Z(this, a);
    }
};
W.prototype.writePackedSplitFixed64 = W.prototype.md;
W.prototype.nd = function(a, b, c, d) {
    if (null != b) {
        a = X(this, a);
        for(var f = 0; f < b.length; f++)this.a.l(c(b[f]), d(b[f]));
        Z(this, a);
    }
};
W.prototype.writePackedSplitVarint64 = W.prototype.nd;
W.prototype.od = function(a, b, c, d) {
    if (null != b) {
        a = X(this, a);
        for(var f = this.a, h = 0; h < b.length; h++)Ja(c(b[h]), d(b[h]), function(m, t) {
            f.l(m >>> 0, t >>> 0);
        });
        Z(this, a);
    }
};
W.prototype.writePackedSplitZigzagVarint64 = W.prototype.od;
W.prototype.dd = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++){
            var d = sb(b[c]);
            this.a.l(d.lo, d.hi);
        }
        Z(this, a);
    }
};
W.prototype.writePackedInt64String = W.prototype.dd;
W.prototype.pd = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++)this.a.j(b[c]);
        Z(this, a);
    }
};
W.prototype.writePackedUint32 = W.prototype.pd;
W.prototype.qd = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++)this.a.j(parseInt(b[c], 10));
        Z(this, a);
    }
};
W.prototype.writePackedUint32String = W.prototype.qd;
W.prototype.rd = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++)this.a.va(b[c]);
        Z(this, a);
    }
};
W.prototype.writePackedUint64 = W.prototype.rd;
W.prototype.sd = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++){
            var d = U(b[c]);
            this.a.l(d.lo, d.hi);
        }
        Z(this, a);
    }
};
W.prototype.writePackedUint64String = W.prototype.sd;
W.prototype.hd = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++)this.a.wa(b[c]);
        Z(this, a);
    }
};
W.prototype.writePackedSint32 = W.prototype.hd;
W.prototype.jd = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++)this.a.xa(b[c]);
        Z(this, a);
    }
};
W.prototype.writePackedSint64 = W.prototype.jd;
W.prototype.kd = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++)this.a.W(H(b[c]));
        Z(this, a);
    }
};
W.prototype.writePackedSint64String = W.prototype.kd;
W.prototype.ld = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++)this.a.W(b[c]);
        Z(this, a);
    }
};
W.prototype.writePackedSintHash64 = W.prototype.ld;
W.prototype.Wc = function(a, b) {
    if (null != b && b.length) for(Y(this, a, 2), this.a.j(4 * b.length), a = 0; a < b.length; a++)this.a.s(b[a]);
};
W.prototype.writePackedFixed32 = W.prototype.Wc;
W.prototype.Xc = function(a, b) {
    if (null != b && b.length) for(Y(this, a, 2), this.a.j(8 * b.length), a = 0; a < b.length; a++)this.a.V(b[a]);
};
W.prototype.writePackedFixed64 = W.prototype.Xc;
W.prototype.Yc = function(a, b) {
    if (null != b && b.length) for(Y(this, a, 2), this.a.j(8 * b.length), a = 0; a < b.length; a++){
        var c = U(b[a]);
        this.a.A(c.lo, c.hi);
    }
};
W.prototype.writePackedFixed64String = W.prototype.Yc;
W.prototype.ed = function(a, b) {
    if (null != b && b.length) for(Y(this, a, 2), this.a.j(4 * b.length), a = 0; a < b.length; a++)this.a.S(b[a]);
};
W.prototype.writePackedSfixed32 = W.prototype.ed;
W.prototype.fd = function(a, b) {
    if (null != b && b.length) for(Y(this, a, 2), this.a.j(8 * b.length), a = 0; a < b.length; a++)this.a.T(b[a]);
};
W.prototype.writePackedSfixed64 = W.prototype.fd;
W.prototype.gd = function(a, b) {
    if (null != b && b.length) for(Y(this, a, 2), this.a.j(8 * b.length), a = 0; a < b.length; a++)this.a.ka(b[a]);
};
W.prototype.writePackedSfixed64String = W.prototype.gd;
W.prototype.$c = function(a, b) {
    if (null != b && b.length) for(Y(this, a, 2), this.a.j(4 * b.length), a = 0; a < b.length; a++)this.a.L(b[a]);
};
W.prototype.writePackedFloat = W.prototype.$c;
W.prototype.Uc = function(a, b) {
    if (null != b && b.length) for(Y(this, a, 2), this.a.j(8 * b.length), a = 0; a < b.length; a++)this.a.J(b[a]);
};
W.prototype.writePackedDouble = W.prototype.Uc;
W.prototype.Tc = function(a, b) {
    if (null != b && b.length) for(Y(this, a, 2), this.a.j(b.length), a = 0; a < b.length; a++)this.a.I(b[a]);
};
W.prototype.writePackedBool = W.prototype.Tc;
W.prototype.Vc = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++)this.a.R(b[c]);
        Z(this, a);
    }
};
W.prototype.writePackedEnum = W.prototype.Vc;
W.prototype.Zc = function(a, b) {
    if (null != b && b.length) for(Y(this, a, 2), this.a.j(8 * b.length), a = 0; a < b.length; a++)this.a.K(b[a]);
};
W.prototype.writePackedFixedHash64 = W.prototype.Zc;
W.prototype.td = function(a, b) {
    if (null != b && b.length) {
        a = X(this, a);
        for(var c = 0; c < b.length; c++)this.a.N(b[c]);
        Z(this, a);
    }
};
W.prototype.writePackedVarintHash64 = W.prototype.td;
"object" === ("TURBOPACK compile-time value", "object") && (exports.debug = R, exports.Map = r, exports.Message = N, exports.BinaryReader = J, exports.BinaryWriter = W, exports.ExtensionFieldInfo = Ya, exports.ExtensionFieldBinaryInfo = Za, exports.exportSymbol = ma, exports.inherits = na, exports.object = {
    extend: pa
}, exports.typeOf = k);
}),
"[project]/devume-client3/node_modules/@js-sdsl/ordered-map/dist/esm/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderedMap",
    ()=>OrderedMap
]);
var extendStatics = function(e, r) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(e, r) {
        e.__proto__ = r;
    } || function(e, r) {
        for(var t in r)if (Object.prototype.hasOwnProperty.call(r, t)) e[t] = r[t];
    };
    return extendStatics(e, r);
};
function __extends(e, r) {
    if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    extendStatics(e, r);
    function __() {
        this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (__.prototype = r.prototype, new __);
}
function __generator(e, r) {
    var t = {
        label: 0,
        sent: function() {
            if (s[0] & 1) throw s[1];
            return s[1];
        },
        trys: [],
        ops: []
    }, i, n, s, h;
    return h = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
    }, typeof Symbol === "function" && (h[Symbol.iterator] = function() {
        return this;
    }), h;
    //TURBOPACK unreachable
    ;
    function verb(e) {
        return function(r) {
            return step([
                e,
                r
            ]);
        };
    }
    function step(a) {
        if (i) throw new TypeError("Generator is already executing.");
        while(h && (h = 0, a[0] && (t = 0)), t)try {
            if (i = 1, n && (s = a[0] & 2 ? n["return"] : a[0] ? n["throw"] || ((s = n["return"]) && s.call(n), 0) : n.next) && !(s = s.call(n, a[1])).done) return s;
            if (n = 0, s) a = [
                a[0] & 2,
                s.value
            ];
            switch(a[0]){
                case 0:
                case 1:
                    s = a;
                    break;
                case 4:
                    t.label++;
                    return {
                        value: a[1],
                        done: false
                    };
                case 5:
                    t.label++;
                    n = a[1];
                    a = [
                        0
                    ];
                    continue;
                case 7:
                    a = t.ops.pop();
                    t.trys.pop();
                    continue;
                default:
                    if (!(s = t.trys, s = s.length > 0 && s[s.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                        t = 0;
                        continue;
                    }
                    if (a[0] === 3 && (!s || a[1] > s[0] && a[1] < s[3])) {
                        t.label = a[1];
                        break;
                    }
                    if (a[0] === 6 && t.label < s[1]) {
                        t.label = s[1];
                        s = a;
                        break;
                    }
                    if (s && t.label < s[2]) {
                        t.label = s[2];
                        t.ops.push(a);
                        break;
                    }
                    if (s[2]) t.ops.pop();
                    t.trys.pop();
                    continue;
            }
            a = r.call(e, t);
        } catch (e) {
            a = [
                6,
                e
            ];
            n = 0;
        } finally{
            i = s = 0;
        }
        if (a[0] & 5) throw a[1];
        return {
            value: a[0] ? a[1] : void 0,
            done: true
        };
    }
}
typeof SuppressedError === "function" ? SuppressedError : function(e, r, t) {
    var i = new Error(t);
    return i.name = "SuppressedError", i.error = e, i.suppressed = r, i;
};
var TreeNode = function() {
    function TreeNode(e, r, t) {
        if (t === void 0) {
            t = 1;
        }
        this.t = undefined;
        this.i = undefined;
        this.h = undefined;
        this.u = e;
        this.o = r;
        this.l = t;
    }
    TreeNode.prototype.v = function() {
        var e = this;
        var r = e.h.h === e;
        if (r && e.l === 1) {
            e = e.i;
        } else if (e.t) {
            e = e.t;
            while(e.i){
                e = e.i;
            }
        } else {
            if (r) {
                return e.h;
            }
            var t = e.h;
            while(t.t === e){
                e = t;
                t = e.h;
            }
            e = t;
        }
        return e;
    };
    TreeNode.prototype.p = function() {
        var e = this;
        if (e.i) {
            e = e.i;
            while(e.t){
                e = e.t;
            }
            return e;
        } else {
            var r = e.h;
            while(r.i === e){
                e = r;
                r = e.h;
            }
            if (e.i !== r) {
                return r;
            } else return e;
        }
    };
    TreeNode.prototype.T = function() {
        var e = this.h;
        var r = this.i;
        var t = r.t;
        if (e.h === this) e.h = r;
        else if (e.t === this) e.t = r;
        else e.i = r;
        r.h = e;
        r.t = this;
        this.h = r;
        this.i = t;
        if (t) t.h = this;
        return r;
    };
    TreeNode.prototype.I = function() {
        var e = this.h;
        var r = this.t;
        var t = r.i;
        if (e.h === this) e.h = r;
        else if (e.t === this) e.t = r;
        else e.i = r;
        r.h = e;
        r.i = this;
        this.h = r;
        this.t = t;
        if (t) t.h = this;
        return r;
    };
    return TreeNode;
}();
var TreeNodeEnableIndex = function(e) {
    __extends(TreeNodeEnableIndex, e);
    function TreeNodeEnableIndex() {
        var r = e !== null && e.apply(this, arguments) || this;
        r.O = 1;
        return r;
    }
    TreeNodeEnableIndex.prototype.T = function() {
        var r = e.prototype.T.call(this);
        this.M();
        r.M();
        return r;
    };
    TreeNodeEnableIndex.prototype.I = function() {
        var r = e.prototype.I.call(this);
        this.M();
        r.M();
        return r;
    };
    TreeNodeEnableIndex.prototype.M = function() {
        this.O = 1;
        if (this.t) {
            this.O += this.t.O;
        }
        if (this.i) {
            this.O += this.i.O;
        }
    };
    return TreeNodeEnableIndex;
}(TreeNode);
var ContainerIterator = function() {
    function ContainerIterator(e) {
        if (e === void 0) {
            e = 0;
        }
        this.iteratorType = e;
    }
    ContainerIterator.prototype.equals = function(e) {
        return this.C === e.C;
    };
    return ContainerIterator;
}();
var Base = function() {
    function Base() {
        this._ = 0;
    }
    Object.defineProperty(Base.prototype, "length", {
        get: function() {
            return this._;
        },
        enumerable: false,
        configurable: true
    });
    Base.prototype.size = function() {
        return this._;
    };
    Base.prototype.empty = function() {
        return this._ === 0;
    };
    return Base;
}();
var Container = function(e) {
    __extends(Container, e);
    function Container() {
        return e !== null && e.apply(this, arguments) || this;
    }
    return Container;
}(Base);
function throwIteratorAccessError() {
    throw new RangeError("Iterator access denied!");
}
var TreeContainer = function(e) {
    __extends(TreeContainer, e);
    function TreeContainer(r, t) {
        if (r === void 0) {
            r = function(e, r) {
                if (e < r) return -1;
                if (e > r) return 1;
                return 0;
            };
        }
        if (t === void 0) {
            t = false;
        }
        var i = e.call(this) || this;
        i.N = undefined;
        i.g = r;
        i.enableIndex = t;
        i.S = t ? TreeNodeEnableIndex : TreeNode;
        i.A = new i.S;
        return i;
    }
    TreeContainer.prototype.m = function(e, r) {
        var t = this.A;
        while(e){
            var i = this.g(e.u, r);
            if (i < 0) {
                e = e.i;
            } else if (i > 0) {
                t = e;
                e = e.t;
            } else return e;
        }
        return t;
    };
    TreeContainer.prototype.B = function(e, r) {
        var t = this.A;
        while(e){
            var i = this.g(e.u, r);
            if (i <= 0) {
                e = e.i;
            } else {
                t = e;
                e = e.t;
            }
        }
        return t;
    };
    TreeContainer.prototype.j = function(e, r) {
        var t = this.A;
        while(e){
            var i = this.g(e.u, r);
            if (i < 0) {
                t = e;
                e = e.i;
            } else if (i > 0) {
                e = e.t;
            } else return e;
        }
        return t;
    };
    TreeContainer.prototype.k = function(e, r) {
        var t = this.A;
        while(e){
            var i = this.g(e.u, r);
            if (i < 0) {
                t = e;
                e = e.i;
            } else {
                e = e.t;
            }
        }
        return t;
    };
    TreeContainer.prototype.R = function(e) {
        while(true){
            var r = e.h;
            if (r === this.A) return;
            if (e.l === 1) {
                e.l = 0;
                return;
            }
            if (e === r.t) {
                var t = r.i;
                if (t.l === 1) {
                    t.l = 0;
                    r.l = 1;
                    if (r === this.N) {
                        this.N = r.T();
                    } else r.T();
                } else {
                    if (t.i && t.i.l === 1) {
                        t.l = r.l;
                        r.l = 0;
                        t.i.l = 0;
                        if (r === this.N) {
                            this.N = r.T();
                        } else r.T();
                        return;
                    } else if (t.t && t.t.l === 1) {
                        t.l = 1;
                        t.t.l = 0;
                        t.I();
                    } else {
                        t.l = 1;
                        e = r;
                    }
                }
            } else {
                var t = r.t;
                if (t.l === 1) {
                    t.l = 0;
                    r.l = 1;
                    if (r === this.N) {
                        this.N = r.I();
                    } else r.I();
                } else {
                    if (t.t && t.t.l === 1) {
                        t.l = r.l;
                        r.l = 0;
                        t.t.l = 0;
                        if (r === this.N) {
                            this.N = r.I();
                        } else r.I();
                        return;
                    } else if (t.i && t.i.l === 1) {
                        t.l = 1;
                        t.i.l = 0;
                        t.T();
                    } else {
                        t.l = 1;
                        e = r;
                    }
                }
            }
        }
    };
    TreeContainer.prototype.G = function(e) {
        if (this._ === 1) {
            this.clear();
            return;
        }
        var r = e;
        while(r.t || r.i){
            if (r.i) {
                r = r.i;
                while(r.t)r = r.t;
            } else {
                r = r.t;
            }
            var t = e.u;
            e.u = r.u;
            r.u = t;
            var i = e.o;
            e.o = r.o;
            r.o = i;
            e = r;
        }
        if (this.A.t === r) {
            this.A.t = r.h;
        } else if (this.A.i === r) {
            this.A.i = r.h;
        }
        this.R(r);
        var n = r.h;
        if (r === n.t) {
            n.t = undefined;
        } else n.i = undefined;
        this._ -= 1;
        this.N.l = 0;
        if (this.enableIndex) {
            while(n !== this.A){
                n.O -= 1;
                n = n.h;
            }
        }
    };
    TreeContainer.prototype.P = function(e) {
        var r = typeof e === "number" ? e : undefined;
        var t = typeof e === "function" ? e : undefined;
        var i = typeof e === "undefined" ? [] : undefined;
        var n = 0;
        var s = this.N;
        var h = [];
        while(h.length || s){
            if (s) {
                h.push(s);
                s = s.t;
            } else {
                s = h.pop();
                if (n === r) return s;
                i && i.push(s);
                t && t(s, n, this);
                n += 1;
                s = s.i;
            }
        }
        return i;
    };
    TreeContainer.prototype.q = function(e) {
        while(true){
            var r = e.h;
            if (r.l === 0) return;
            var t = r.h;
            if (r === t.t) {
                var i = t.i;
                if (i && i.l === 1) {
                    i.l = r.l = 0;
                    if (t === this.N) return;
                    t.l = 1;
                    e = t;
                    continue;
                } else if (e === r.i) {
                    e.l = 0;
                    if (e.t) {
                        e.t.h = r;
                    }
                    if (e.i) {
                        e.i.h = t;
                    }
                    r.i = e.t;
                    t.t = e.i;
                    e.t = r;
                    e.i = t;
                    if (t === this.N) {
                        this.N = e;
                        this.A.h = e;
                    } else {
                        var n = t.h;
                        if (n.t === t) {
                            n.t = e;
                        } else n.i = e;
                    }
                    e.h = t.h;
                    r.h = e;
                    t.h = e;
                    t.l = 1;
                } else {
                    r.l = 0;
                    if (t === this.N) {
                        this.N = t.I();
                    } else t.I();
                    t.l = 1;
                    return;
                }
            } else {
                var i = t.t;
                if (i && i.l === 1) {
                    i.l = r.l = 0;
                    if (t === this.N) return;
                    t.l = 1;
                    e = t;
                    continue;
                } else if (e === r.t) {
                    e.l = 0;
                    if (e.t) {
                        e.t.h = t;
                    }
                    if (e.i) {
                        e.i.h = r;
                    }
                    t.i = e.t;
                    r.t = e.i;
                    e.t = t;
                    e.i = r;
                    if (t === this.N) {
                        this.N = e;
                        this.A.h = e;
                    } else {
                        var n = t.h;
                        if (n.t === t) {
                            n.t = e;
                        } else n.i = e;
                    }
                    e.h = t.h;
                    r.h = e;
                    t.h = e;
                    t.l = 1;
                } else {
                    r.l = 0;
                    if (t === this.N) {
                        this.N = t.T();
                    } else t.T();
                    t.l = 1;
                    return;
                }
            }
            if (this.enableIndex) {
                r.M();
                t.M();
                e.M();
            }
            return;
        }
    };
    TreeContainer.prototype.D = function(e, r, t) {
        if (this.N === undefined) {
            this._ += 1;
            this.N = new this.S(e, r, 0);
            this.N.h = this.A;
            this.A.h = this.A.t = this.A.i = this.N;
            return this._;
        }
        var i;
        var n = this.A.t;
        var s = this.g(n.u, e);
        if (s === 0) {
            n.o = r;
            return this._;
        } else if (s > 0) {
            n.t = new this.S(e, r);
            n.t.h = n;
            i = n.t;
            this.A.t = i;
        } else {
            var h = this.A.i;
            var a = this.g(h.u, e);
            if (a === 0) {
                h.o = r;
                return this._;
            } else if (a < 0) {
                h.i = new this.S(e, r);
                h.i.h = h;
                i = h.i;
                this.A.i = i;
            } else {
                if (t !== undefined) {
                    var u = t.C;
                    if (u !== this.A) {
                        var f = this.g(u.u, e);
                        if (f === 0) {
                            u.o = r;
                            return this._;
                        } else if (f > 0) {
                            var o = u.v();
                            var d = this.g(o.u, e);
                            if (d === 0) {
                                o.o = r;
                                return this._;
                            } else if (d < 0) {
                                i = new this.S(e, r);
                                if (o.i === undefined) {
                                    o.i = i;
                                    i.h = o;
                                } else {
                                    u.t = i;
                                    i.h = u;
                                }
                            }
                        }
                    }
                }
                if (i === undefined) {
                    i = this.N;
                    while(true){
                        var c = this.g(i.u, e);
                        if (c > 0) {
                            if (i.t === undefined) {
                                i.t = new this.S(e, r);
                                i.t.h = i;
                                i = i.t;
                                break;
                            }
                            i = i.t;
                        } else if (c < 0) {
                            if (i.i === undefined) {
                                i.i = new this.S(e, r);
                                i.i.h = i;
                                i = i.i;
                                break;
                            }
                            i = i.i;
                        } else {
                            i.o = r;
                            return this._;
                        }
                    }
                }
            }
        }
        if (this.enableIndex) {
            var l = i.h;
            while(l !== this.A){
                l.O += 1;
                l = l.h;
            }
        }
        this.q(i);
        this._ += 1;
        return this._;
    };
    TreeContainer.prototype.F = function(e, r) {
        while(e){
            var t = this.g(e.u, r);
            if (t < 0) {
                e = e.i;
            } else if (t > 0) {
                e = e.t;
            } else return e;
        }
        return e || this.A;
    };
    TreeContainer.prototype.clear = function() {
        this._ = 0;
        this.N = undefined;
        this.A.h = undefined;
        this.A.t = this.A.i = undefined;
    };
    TreeContainer.prototype.updateKeyByIterator = function(e, r) {
        var t = e.C;
        if (t === this.A) {
            throwIteratorAccessError();
        }
        if (this._ === 1) {
            t.u = r;
            return true;
        }
        var i = t.p().u;
        if (t === this.A.t) {
            if (this.g(i, r) > 0) {
                t.u = r;
                return true;
            }
            return false;
        }
        var n = t.v().u;
        if (t === this.A.i) {
            if (this.g(n, r) < 0) {
                t.u = r;
                return true;
            }
            return false;
        }
        if (this.g(n, r) >= 0 || this.g(i, r) <= 0) return false;
        t.u = r;
        return true;
    };
    TreeContainer.prototype.eraseElementByPos = function(e) {
        if (e < 0 || e > this._ - 1) {
            throw new RangeError;
        }
        var r = this.P(e);
        this.G(r);
        return this._;
    };
    TreeContainer.prototype.eraseElementByKey = function(e) {
        if (this._ === 0) return false;
        var r = this.F(this.N, e);
        if (r === this.A) return false;
        this.G(r);
        return true;
    };
    TreeContainer.prototype.eraseElementByIterator = function(e) {
        var r = e.C;
        if (r === this.A) {
            throwIteratorAccessError();
        }
        var t = r.i === undefined;
        var i = e.iteratorType === 0;
        if (i) {
            if (t) e.next();
        } else {
            if (!t || r.t === undefined) e.next();
        }
        this.G(r);
        return e;
    };
    TreeContainer.prototype.getHeight = function() {
        if (this._ === 0) return 0;
        function traversal(e) {
            if (!e) return 0;
            return Math.max(traversal(e.t), traversal(e.i)) + 1;
        }
        return traversal(this.N);
    };
    return TreeContainer;
}(Container);
var TreeIterator = function(e) {
    __extends(TreeIterator, e);
    function TreeIterator(r, t, i) {
        var n = e.call(this, i) || this;
        n.C = r;
        n.A = t;
        if (n.iteratorType === 0) {
            n.pre = function() {
                if (this.C === this.A.t) {
                    throwIteratorAccessError();
                }
                this.C = this.C.v();
                return this;
            };
            n.next = function() {
                if (this.C === this.A) {
                    throwIteratorAccessError();
                }
                this.C = this.C.p();
                return this;
            };
        } else {
            n.pre = function() {
                if (this.C === this.A.i) {
                    throwIteratorAccessError();
                }
                this.C = this.C.p();
                return this;
            };
            n.next = function() {
                if (this.C === this.A) {
                    throwIteratorAccessError();
                }
                this.C = this.C.v();
                return this;
            };
        }
        return n;
    }
    Object.defineProperty(TreeIterator.prototype, "index", {
        get: function() {
            var e = this.C;
            var r = this.A.h;
            if (e === this.A) {
                if (r) {
                    return r.O - 1;
                }
                return 0;
            }
            var t = 0;
            if (e.t) {
                t += e.t.O;
            }
            while(e !== r){
                var i = e.h;
                if (e === i.i) {
                    t += 1;
                    if (i.t) {
                        t += i.t.O;
                    }
                }
                e = i;
            }
            return t;
        },
        enumerable: false,
        configurable: true
    });
    TreeIterator.prototype.isAccessible = function() {
        return this.C !== this.A;
    };
    return TreeIterator;
}(ContainerIterator);
var OrderedMapIterator = function(e) {
    __extends(OrderedMapIterator, e);
    function OrderedMapIterator(r, t, i, n) {
        var s = e.call(this, r, t, n) || this;
        s.container = i;
        return s;
    }
    Object.defineProperty(OrderedMapIterator.prototype, "pointer", {
        get: function() {
            if (this.C === this.A) {
                throwIteratorAccessError();
            }
            var e = this;
            return new Proxy([], {
                get: function(r, t) {
                    if (t === "0") return e.C.u;
                    else if (t === "1") return e.C.o;
                    r[0] = e.C.u;
                    r[1] = e.C.o;
                    return r[t];
                },
                set: function(r, t, i) {
                    if (t !== "1") {
                        throw new TypeError("prop must be 1");
                    }
                    e.C.o = i;
                    return true;
                }
            });
        },
        enumerable: false,
        configurable: true
    });
    OrderedMapIterator.prototype.copy = function() {
        return new OrderedMapIterator(this.C, this.A, this.container, this.iteratorType);
    };
    return OrderedMapIterator;
}(TreeIterator);
var OrderedMap = function(e) {
    __extends(OrderedMap, e);
    function OrderedMap(r, t, i) {
        if (r === void 0) {
            r = [];
        }
        var n = e.call(this, t, i) || this;
        var s = n;
        r.forEach(function(e) {
            s.setElement(e[0], e[1]);
        });
        return n;
    }
    OrderedMap.prototype.begin = function() {
        return new OrderedMapIterator(this.A.t || this.A, this.A, this);
    };
    OrderedMap.prototype.end = function() {
        return new OrderedMapIterator(this.A, this.A, this);
    };
    OrderedMap.prototype.rBegin = function() {
        return new OrderedMapIterator(this.A.i || this.A, this.A, this, 1);
    };
    OrderedMap.prototype.rEnd = function() {
        return new OrderedMapIterator(this.A, this.A, this, 1);
    };
    OrderedMap.prototype.front = function() {
        if (this._ === 0) return;
        var e = this.A.t;
        return [
            e.u,
            e.o
        ];
    };
    OrderedMap.prototype.back = function() {
        if (this._ === 0) return;
        var e = this.A.i;
        return [
            e.u,
            e.o
        ];
    };
    OrderedMap.prototype.lowerBound = function(e) {
        var r = this.m(this.N, e);
        return new OrderedMapIterator(r, this.A, this);
    };
    OrderedMap.prototype.upperBound = function(e) {
        var r = this.B(this.N, e);
        return new OrderedMapIterator(r, this.A, this);
    };
    OrderedMap.prototype.reverseLowerBound = function(e) {
        var r = this.j(this.N, e);
        return new OrderedMapIterator(r, this.A, this);
    };
    OrderedMap.prototype.reverseUpperBound = function(e) {
        var r = this.k(this.N, e);
        return new OrderedMapIterator(r, this.A, this);
    };
    OrderedMap.prototype.forEach = function(e) {
        this.P(function(r, t, i) {
            e([
                r.u,
                r.o
            ], t, i);
        });
    };
    OrderedMap.prototype.setElement = function(e, r, t) {
        return this.D(e, r, t);
    };
    OrderedMap.prototype.getElementByPos = function(e) {
        if (e < 0 || e > this._ - 1) {
            throw new RangeError;
        }
        var r = this.P(e);
        return [
            r.u,
            r.o
        ];
    };
    OrderedMap.prototype.find = function(e) {
        var r = this.F(this.N, e);
        return new OrderedMapIterator(r, this.A, this);
    };
    OrderedMap.prototype.getElementByKey = function(e) {
        var r = this.F(this.N, e);
        return r.o;
    };
    OrderedMap.prototype.union = function(e) {
        var r = this;
        e.forEach(function(e) {
            r.setElement(e[0], e[1]);
        });
        return this._;
    };
    OrderedMap.prototype[Symbol.iterator] = function() {
        var e, r, t, i;
        return __generator(this, function(n) {
            switch(n.label){
                case 0:
                    e = this._;
                    r = this.P();
                    t = 0;
                    n.label = 1;
                case 1:
                    if (!(t < e)) return [
                        3,
                        4
                    ];
                    i = r[t];
                    return [
                        4,
                        [
                            i.u,
                            i.o
                        ]
                    ];
                case 2:
                    n.sent();
                    n.label = 3;
                case 3:
                    ++t;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    };
    return OrderedMap;
}(TreeContainer);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/devume-client3/node_modules/lodash.camelcase/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match words composed of alphanumeric characters. */ var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
/** Used to match Latin Unicode letters (excluding mathematical operators). */ var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
/** Used to compose unicode character classes. */ var rsAstralRange = '\\ud800-\\udfff', rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23', rsComboSymbolsRange = '\\u20d0-\\u20f0', rsDingbatRange = '\\u2700-\\u27bf', rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff', rsMathOpRange = '\\xac\\xb1\\xd7\\xf7', rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf', rsPunctuationRange = '\\u2000-\\u206f', rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000', rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde', rsVarRange = '\\ufe0e\\ufe0f', rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
/** Used to compose unicode capture groups. */ var rsApos = "['\u2019]", rsAstral = '[' + rsAstralRange + ']', rsBreak = '[' + rsBreakRange + ']', rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']', rsDigits = '\\d+', rsDingbat = '[' + rsDingbatRange + ']', rsLower = '[' + rsLowerRange + ']', rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']', rsFitz = '\\ud83c[\\udffb-\\udfff]', rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')', rsNonAstral = '[^' + rsAstralRange + ']', rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}', rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]', rsUpper = '[' + rsUpperRange + ']', rsZWJ = '\\u200d';
/** Used to compose unicode regexes. */ var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')', rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')', rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?', rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?', reOptMod = rsModifier + '?', rsOptVar = '[' + rsVarRange + ']?', rsOptJoin = '(?:' + rsZWJ + '(?:' + [
    rsNonAstral,
    rsRegional,
    rsSurrPair
].join('|') + ')' + rsOptVar + reOptMod + ')*', rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = '(?:' + [
    rsDingbat,
    rsRegional,
    rsSurrPair
].join('|') + ')' + rsSeq, rsSymbol = '(?:' + [
    rsNonAstral + rsCombo + '?',
    rsCombo,
    rsRegional,
    rsSurrPair,
    rsAstral
].join('|') + ')';
/** Used to match apostrophes. */ var reApos = RegExp(rsApos, 'g');
/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */ var reComboMark = RegExp(rsCombo, 'g');
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
/** Used to match complex or compound words. */ var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [
        rsBreak,
        rsUpper,
        '$'
    ].join('|') + ')',
    rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [
        rsBreak,
        rsUpper + rsLowerMisc,
        '$'
    ].join('|') + ')',
    rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
    rsUpper + '+' + rsOptUpperContr,
    rsDigits,
    rsEmoji
].join('|'), 'g');
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');
/** Used to detect strings that need a more robust regexp to match words. */ var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
/** Used to map Latin Unicode letters to basic Latin letters. */ var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',
    '\xc1': 'A',
    '\xc2': 'A',
    '\xc3': 'A',
    '\xc4': 'A',
    '\xc5': 'A',
    '\xe0': 'a',
    '\xe1': 'a',
    '\xe2': 'a',
    '\xe3': 'a',
    '\xe4': 'a',
    '\xe5': 'a',
    '\xc7': 'C',
    '\xe7': 'c',
    '\xd0': 'D',
    '\xf0': 'd',
    '\xc8': 'E',
    '\xc9': 'E',
    '\xca': 'E',
    '\xcb': 'E',
    '\xe8': 'e',
    '\xe9': 'e',
    '\xea': 'e',
    '\xeb': 'e',
    '\xcc': 'I',
    '\xcd': 'I',
    '\xce': 'I',
    '\xcf': 'I',
    '\xec': 'i',
    '\xed': 'i',
    '\xee': 'i',
    '\xef': 'i',
    '\xd1': 'N',
    '\xf1': 'n',
    '\xd2': 'O',
    '\xd3': 'O',
    '\xd4': 'O',
    '\xd5': 'O',
    '\xd6': 'O',
    '\xd8': 'O',
    '\xf2': 'o',
    '\xf3': 'o',
    '\xf4': 'o',
    '\xf5': 'o',
    '\xf6': 'o',
    '\xf8': 'o',
    '\xd9': 'U',
    '\xda': 'U',
    '\xdb': 'U',
    '\xdc': 'U',
    '\xf9': 'u',
    '\xfa': 'u',
    '\xfb': 'u',
    '\xfc': 'u',
    '\xdd': 'Y',
    '\xfd': 'y',
    '\xff': 'y',
    '\xc6': 'Ae',
    '\xe6': 'ae',
    '\xde': 'Th',
    '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',
    '\u0102': 'A',
    '\u0104': 'A',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u0105': 'a',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010a': 'C',
    '\u010c': 'C',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010b': 'c',
    '\u010d': 'c',
    '\u010e': 'D',
    '\u0110': 'D',
    '\u010f': 'd',
    '\u0111': 'd',
    '\u0112': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u0118': 'E',
    '\u011a': 'E',
    '\u0113': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u0119': 'e',
    '\u011b': 'e',
    '\u011c': 'G',
    '\u011e': 'G',
    '\u0120': 'G',
    '\u0122': 'G',
    '\u011d': 'g',
    '\u011f': 'g',
    '\u0121': 'g',
    '\u0123': 'g',
    '\u0124': 'H',
    '\u0126': 'H',
    '\u0125': 'h',
    '\u0127': 'h',
    '\u0128': 'I',
    '\u012a': 'I',
    '\u012c': 'I',
    '\u012e': 'I',
    '\u0130': 'I',
    '\u0129': 'i',
    '\u012b': 'i',
    '\u012d': 'i',
    '\u012f': 'i',
    '\u0131': 'i',
    '\u0134': 'J',
    '\u0135': 'j',
    '\u0136': 'K',
    '\u0137': 'k',
    '\u0138': 'k',
    '\u0139': 'L',
    '\u013b': 'L',
    '\u013d': 'L',
    '\u013f': 'L',
    '\u0141': 'L',
    '\u013a': 'l',
    '\u013c': 'l',
    '\u013e': 'l',
    '\u0140': 'l',
    '\u0142': 'l',
    '\u0143': 'N',
    '\u0145': 'N',
    '\u0147': 'N',
    '\u014a': 'N',
    '\u0144': 'n',
    '\u0146': 'n',
    '\u0148': 'n',
    '\u014b': 'n',
    '\u014c': 'O',
    '\u014e': 'O',
    '\u0150': 'O',
    '\u014d': 'o',
    '\u014f': 'o',
    '\u0151': 'o',
    '\u0154': 'R',
    '\u0156': 'R',
    '\u0158': 'R',
    '\u0155': 'r',
    '\u0157': 'r',
    '\u0159': 'r',
    '\u015a': 'S',
    '\u015c': 'S',
    '\u015e': 'S',
    '\u0160': 'S',
    '\u015b': 's',
    '\u015d': 's',
    '\u015f': 's',
    '\u0161': 's',
    '\u0162': 'T',
    '\u0164': 'T',
    '\u0166': 'T',
    '\u0163': 't',
    '\u0165': 't',
    '\u0167': 't',
    '\u0168': 'U',
    '\u016a': 'U',
    '\u016c': 'U',
    '\u016e': 'U',
    '\u0170': 'U',
    '\u0172': 'U',
    '\u0169': 'u',
    '\u016b': 'u',
    '\u016d': 'u',
    '\u016f': 'u',
    '\u0171': 'u',
    '\u0173': 'u',
    '\u0174': 'W',
    '\u0175': 'w',
    '\u0176': 'Y',
    '\u0177': 'y',
    '\u0178': 'Y',
    '\u0179': 'Z',
    '\u017b': 'Z',
    '\u017d': 'Z',
    '\u017a': 'z',
    '\u017c': 'z',
    '\u017e': 'z',
    '\u0132': 'IJ',
    '\u0133': 'ij',
    '\u0152': 'Oe',
    '\u0153': 'oe',
    '\u0149': "'n",
    '\u017f': 'ss'
};
/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */ function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array ? array.length : 0;
    if (initAccum && length) {
        accumulator = array[++index];
    }
    while(++index < length){
        accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
}
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function asciiToArray(string) {
    return string.split('');
}
/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function asciiWords(string) {
    return string.match(reAsciiWord) || [];
}
/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */ function basePropertyOf(object) {
    return function(key) {
        return object == null ? undefined : object[key];
    };
}
/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */ var deburrLetter = basePropertyOf(deburredLetters);
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */ function hasUnicode(string) {
    return reHasUnicode.test(string);
}
/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */ function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
}
/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function unicodeToArray(string) {
    return string.match(reUnicode) || [];
}
/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
}
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Built-in value references. */ var Symbol = root.Symbol;
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) {
        start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while(++index < length){
        result[index] = array[index + start];
    }
    return result;
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
        return value;
    }
    if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */ function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
}
/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */ function createCaseFirst(methodName) {
    return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
        return chr[methodName]() + trailing;
    };
}
/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */ function createCompounder(callback) {
    return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
    };
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? '' : baseToString(value);
}
/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */ var camelCase = createCompounder(function(result, word, index) {
    word = word.toLowerCase();
    return result + (index ? capitalize(word) : word);
});
/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */ function capitalize(string) {
    return upperFirst(toString(string).toLowerCase());
}
/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */ function deburr(string) {
    string = toString(string);
    return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}
/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */ var upperFirst = createCaseFirst('toUpperCase');
/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */ function words(string, pattern, guard) {
    string = toString(string);
    pattern = guard ? undefined : pattern;
    if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    }
    return string.match(pattern) || [];
}
module.exports = camelCase;
}),
"[project]/devume-client3/node_modules/@protobufjs/aspromise/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = asPromise;
/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */ /**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */ function asPromise(fn, ctx /*, varargs */ ) {
    var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
    while(index < arguments.length)params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err /*, varargs */ ) {
            if (pending) {
                pending = false;
                if (err) reject(err);
                else {
                    var params = new Array(arguments.length - 1), offset = 0;
                    while(offset < params.length)params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}
}),
"[project]/devume-client3/node_modules/@protobufjs/base64/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */ var base64 = exports;
/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */ base64.length = function length(string) {
    var p = string.length;
    if (!p) return 0;
    var n = 0;
    while(--p % 4 > 1 && string.charAt(p) === "=")++n;
    return Math.ceil(string.length * 3) / 4 - n;
};
// Base64 encoding table
var b64 = new Array(64);
// Base64 decoding table
var s64 = new Array(123);
// 65..90, 97..122, 48..57, 43, 47
for(var i = 0; i < 64;)s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */ base64.encode = function encode(buffer, start, end) {
    var parts = null, chunk = [];
    var i = 0, j = 0, t; // temporary
    while(start < end){
        var b = buffer[start++];
        switch(j){
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1) chunk[i++] = 61;
    }
    if (parts) {
        if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};
var invalidEncoding = "invalid encoding";
/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */ base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, t; // temporary
    for(var i = 0; i < string.length;){
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1) break;
        if ((c = s64[c]) === undefined) throw Error(invalidEncoding);
        switch(j){
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1) throw Error(invalidEncoding);
    return offset - start;
};
/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */ base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};
}),
"[project]/devume-client3/node_modules/@protobufjs/eventemitter/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = EventEmitter;
/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */ function EventEmitter() {
    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */ this._listeners = {};
}
/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */ EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn: fn,
        ctx: ctx || this
    });
    return this;
};
/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */ EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined) this._listeners = {};
    else {
        if (fn === undefined) this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for(var i = 0; i < listeners.length;)if (listeners[i].fn === fn) listeners.splice(i, 1);
            else ++i;
        }
    }
    return this;
};
/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */ EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [], i = 1;
        for(; i < arguments.length;)args.push(arguments[i++]);
        for(i = 0; i < listeners.length;)listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};
}),
"[project]/devume-client3/node_modules/@protobufjs/float/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = factory(factory);
/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */ /**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */ /**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */ /**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */ /**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */ /**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */ /**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */ /**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */ /**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */ // Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {
    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {
        var f32 = new Float32Array([
            -0
        ]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }
        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }
        /* istanbul ignore next */ exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */ exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }
        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }
        /* istanbul ignore next */ exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */ exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
    // float: ieee754
    })();
    else (function() {
        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign) val = -val;
            if (val === 0) writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val)) writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }
        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
            return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
             ? sign * 1.401298464324817e-45 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }
        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
    })();
    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {
        var f64 = new Float64Array([
            -0
        ]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }
        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }
        /* istanbul ignore next */ exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */ exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }
        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }
        /* istanbul ignore next */ exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */ exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
    // double: ieee754
    })();
    else (function() {
        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign) val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) {
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) {
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024) exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }
        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
             ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }
        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
    })();
    return exports;
}
// uint helpers
function writeUintLE(val, buf, pos) {
    buf[pos] = val & 255;
    buf[pos + 1] = val >>> 8 & 255;
    buf[pos + 2] = val >>> 16 & 255;
    buf[pos + 3] = val >>> 24;
}
function writeUintBE(val, buf, pos) {
    buf[pos] = val >>> 24;
    buf[pos + 1] = val >>> 16 & 255;
    buf[pos + 2] = val >>> 8 & 255;
    buf[pos + 3] = val & 255;
}
function readUintLE(buf, pos) {
    return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
}
function readUintBE(buf, pos) {
    return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
}
}),
"[project]/devume-client3/node_modules/@protobufjs/inquire/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = inquire;
/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */ function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/, "re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length)) return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}
}),
"[project]/devume-client3/node_modules/@protobufjs/utf8/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */ var utf8 = exports;
/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */ utf8.length = function utf8_length(string) {
    var len = 0, c = 0;
    for(var i = 0; i < string.length; ++i){
        c = string.charCodeAt(i);
        if (c < 128) len += 1;
        else if (c < 2048) len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else len += 3;
    }
    return len;
};
/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */ utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1) return "";
    var parts = null, chunk = [], i = 0, t; // temporary
    while(start < end){
        t = buffer[start++];
        if (t < 128) chunk[i++] = t;
        else if (t > 191 && t < 224) chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};
/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */ utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset, c1, c2; // character 2
    for(var i = 0; i < string.length; ++i){
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6 | 192;
            buffer[offset++] = c1 & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18 | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12 | 224;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
        }
    }
    return offset - start;
};
}),
"[project]/devume-client3/node_modules/@protobufjs/pool/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = pool;
/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */ /**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */ /**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */ function pool(alloc, slice, size) {
    var SIZE = size || 8192;
    var MAX = SIZE >>> 1;
    var slab = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX) return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) offset = (offset | 7) + 1;
        return buf;
    };
}
}),
"[project]/devume-client3/node_modules/@protobufjs/codegen/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = codegen;
/**
 * Begins generating a function.
 * @memberof util
 * @param {string[]} functionParams Function parameter names
 * @param {string} [functionName] Function name if not anonymous
 * @returns {Codegen} Appender that appends code to the function's body
 */ function codegen(functionParams, functionName) {
    /* istanbul ignore if */ if (typeof functionParams === "string") {
        functionName = functionParams;
        functionParams = undefined;
    }
    var body = [];
    /**
     * Appends code to the function's body or finishes generation.
     * @typedef Codegen
     * @type {function}
     * @param {string|Object.<string,*>} [formatStringOrScope] Format string or, to finish the function, an object of additional scope variables, if any
     * @param {...*} [formatParams] Format parameters
     * @returns {Codegen|Function} Itself or the generated function if finished
     * @throws {Error} If format parameter counts do not match
     */ function Codegen(formatStringOrScope) {
        // note that explicit array handling below makes this ~50% faster
        // finish the function
        if (typeof formatStringOrScope !== "string") {
            var source = toString();
            if (codegen.verbose) console.log("codegen: " + source); // eslint-disable-line no-console
            source = "return " + source;
            if (formatStringOrScope) {
                var scopeKeys = Object.keys(formatStringOrScope), scopeParams = new Array(scopeKeys.length + 1), scopeValues = new Array(scopeKeys.length), scopeOffset = 0;
                while(scopeOffset < scopeKeys.length){
                    scopeParams[scopeOffset] = scopeKeys[scopeOffset];
                    scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
                }
                scopeParams[scopeOffset] = source;
                return Function.apply(null, scopeParams).apply(null, scopeValues); // eslint-disable-line no-new-func
            }
            return Function(source)(); // eslint-disable-line no-new-func
        }
        // otherwise append to body
        var formatParams = new Array(arguments.length - 1), formatOffset = 0;
        while(formatOffset < formatParams.length)formatParams[formatOffset] = arguments[++formatOffset];
        formatOffset = 0;
        formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
            var value = formatParams[formatOffset++];
            switch($1){
                case "d":
                case "f":
                    return String(Number(value));
                case "i":
                    return String(Math.floor(value));
                case "j":
                    return JSON.stringify(value);
                case "s":
                    return String(value);
            }
            return "%";
        });
        if (formatOffset !== formatParams.length) throw Error("parameter count mismatch");
        body.push(formatStringOrScope);
        return Codegen;
    }
    function toString(functionNameOverride) {
        return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
    }
    Codegen.toString = toString;
    return Codegen;
}
/**
 * Begins generating a function.
 * @memberof util
 * @function codegen
 * @param {string} [functionName] Function name if not anonymous
 * @returns {Codegen} Appender that appends code to the function's body
 * @variation 2
 */ /**
 * When set to `true`, codegen will log generated code to console. Useful for debugging.
 * @name util.codegen.verbose
 * @type {boolean}
 */ codegen.verbose = false;
}),
"[project]/devume-client3/node_modules/@protobufjs/fetch/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = fetch;
var asPromise = __turbopack_context__.r("[project]/devume-client3/node_modules/@protobufjs/aspromise/index.js [app-rsc] (ecmascript)"), inquire = __turbopack_context__.r("[project]/devume-client3/node_modules/@protobufjs/inquire/index.js [app-rsc] (ecmascript)");
var fs = inquire("fs");
/**
 * Node-style callback as used by {@link util.fetch}.
 * @typedef FetchCallback
 * @type {function}
 * @param {?Error} error Error, if any, otherwise `null`
 * @param {string} [contents] File contents, if there hasn't been an error
 * @returns {undefined}
 */ /**
 * Options as used by {@link util.fetch}.
 * @typedef FetchOptions
 * @type {Object}
 * @property {boolean} [binary=false] Whether expecting a binary response
 * @property {boolean} [xhr=false] If `true`, forces the use of XMLHttpRequest
 */ /**
 * Fetches the contents of a file.
 * @memberof util
 * @param {string} filename File path or url
 * @param {FetchOptions} options Fetch options
 * @param {FetchCallback} callback Callback function
 * @returns {undefined}
 */ function fetch(filename, options, callback) {
    if (typeof options === "function") {
        callback = options;
        options = {};
    } else if (!options) options = {};
    if (!callback) return asPromise(fetch, this, filename, options); // eslint-disable-line no-invalid-this
    // if a node-like filesystem is present, try it first but fall back to XHR if nothing is found.
    if (!options.xhr && fs && fs.readFile) return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
        return err && typeof XMLHttpRequest !== "undefined" ? fetch.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
    });
    // use the XHR version otherwise.
    return fetch.xhr(filename, options, callback);
}
/**
 * Fetches the contents of a file.
 * @name util.fetch
 * @function
 * @param {string} path File path or url
 * @param {FetchCallback} callback Callback function
 * @returns {undefined}
 * @variation 2
 */ /**
 * Fetches the contents of a file.
 * @name util.fetch
 * @function
 * @param {string} path File path or url
 * @param {FetchOptions} [options] Fetch options
 * @returns {Promise<string|Uint8Array>} Promise
 * @variation 3
 */ /**/ fetch.xhr = function fetch_xhr(filename, options, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function fetchOnReadyStateChange() {
        if (xhr.readyState !== 4) return undefined;
        // local cors security errors return status 0 / empty string, too. afaik this cannot be
        // reliably distinguished from an actually empty file for security reasons. feel free
        // to send a pull request if you are aware of a solution.
        if (xhr.status !== 0 && xhr.status !== 200) return callback(Error("status " + xhr.status));
        // if binary data is expected, make sure that some sort of array is returned, even if
        // ArrayBuffers are not supported. the binary string fallback, however, is unsafe.
        if (options.binary) {
            var buffer = xhr.response;
            if (!buffer) {
                buffer = [];
                for(var i = 0; i < xhr.responseText.length; ++i)buffer.push(xhr.responseText.charCodeAt(i) & 255);
            }
            return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
        }
        return callback(null, xhr.responseText);
    };
    if (options.binary) {
        // ref: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data#Receiving_binary_data_in_older_browsers
        if ("overrideMimeType" in xhr) xhr.overrideMimeType("text/plain; charset=x-user-defined");
        xhr.responseType = "arraybuffer";
    }
    xhr.open("GET", filename);
    xhr.send();
};
}),
"[project]/devume-client3/node_modules/@protobufjs/path/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A minimal path module to resolve Unix, Windows and URL paths alike.
 * @memberof util
 * @namespace
 */ var path = exports;
var isAbsolute = /**
 * Tests if the specified path is absolute.
 * @param {string} path Path to test
 * @returns {boolean} `true` if path is absolute
 */ path.isAbsolute = function isAbsolute(path) {
    return /^(?:\/|\w+:)/.test(path);
};
var normalize = /**
 * Normalizes the specified path.
 * @param {string} path Path to normalize
 * @returns {string} Normalized path
 */ path.normalize = function normalize(path) {
    path = path.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
    var parts = path.split("/"), absolute = isAbsolute(path), prefix = "";
    if (absolute) prefix = parts.shift() + "/";
    for(var i = 0; i < parts.length;){
        if (parts[i] === "..") {
            if (i > 0 && parts[i - 1] !== "..") parts.splice(--i, 2);
            else if (absolute) parts.splice(i, 1);
            else ++i;
        } else if (parts[i] === ".") parts.splice(i, 1);
        else ++i;
    }
    return prefix + parts.join("/");
};
/**
 * Resolves the specified include path against the specified origin path.
 * @param {string} originPath Path to the origin file
 * @param {string} includePath Include path relative to origin path
 * @param {boolean} [alreadyNormalized=false] `true` if both paths are already known to be normalized
 * @returns {string} Path to the include file
 */ path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
    if (!alreadyNormalized) includePath = normalize(includePath);
    if (isAbsolute(includePath)) return includePath;
    if (!alreadyNormalized) originPath = normalize(originPath);
    return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
};
}),
"[project]/devume-client3/node_modules/@grpc/grpc-js/node_modules/@grpc/proto-loader/build/src/util.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license
 * Copyright 2018 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addCommonProtos = exports.loadProtosWithOptionsSync = exports.loadProtosWithOptions = void 0;
const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const Protobuf = __turbopack_context__.r("[project]/devume-client3/node_modules/protobufjs/index.js [app-rsc] (ecmascript)");
function addIncludePathResolver(root, includePaths) {
    const originalResolvePath = root.resolvePath;
    root.resolvePath = (origin, target)=>{
        if (path.isAbsolute(target)) {
            return target;
        }
        for (const directory of includePaths){
            const fullPath = path.join(directory, target);
            try {
                fs.accessSync(fullPath, fs.constants.R_OK);
                return fullPath;
            } catch (err) {
                continue;
            }
        }
        process.emitWarning(`${target} not found in any of the include paths ${includePaths}`);
        return originalResolvePath(origin, target);
    };
}
async function loadProtosWithOptions(filename, options) {
    const root = new Protobuf.Root();
    options = options || {};
    if (!!options.includeDirs) {
        if (!Array.isArray(options.includeDirs)) {
            return Promise.reject(new Error('The includeDirs option must be an array'));
        }
        addIncludePathResolver(root, options.includeDirs);
    }
    const loadedRoot = await root.load(filename, options);
    loadedRoot.resolveAll();
    return loadedRoot;
}
exports.loadProtosWithOptions = loadProtosWithOptions;
function loadProtosWithOptionsSync(filename, options) {
    const root = new Protobuf.Root();
    options = options || {};
    if (!!options.includeDirs) {
        if (!Array.isArray(options.includeDirs)) {
            throw new Error('The includeDirs option must be an array');
        }
        addIncludePathResolver(root, options.includeDirs);
    }
    const loadedRoot = root.loadSync(filename, options);
    loadedRoot.resolveAll();
    return loadedRoot;
}
exports.loadProtosWithOptionsSync = loadProtosWithOptionsSync;
/**
 * Load Google's well-known proto files that aren't exposed by Protobuf.js.
 */ function addCommonProtos() {
    // Protobuf.js exposes: any, duration, empty, field_mask, struct, timestamp,
    // and wrappers. compiler/plugin is excluded in Protobuf.js and here.
    // Using constant strings for compatibility with tools like Webpack
    const apiDescriptor = __turbopack_context__.r("[project]/devume-client3/node_modules/protobufjs/google/protobuf/api.json (json)");
    const descriptorDescriptor = __turbopack_context__.r("[project]/devume-client3/node_modules/protobufjs/google/protobuf/descriptor.json (json)");
    const sourceContextDescriptor = __turbopack_context__.r("[project]/devume-client3/node_modules/protobufjs/google/protobuf/source_context.json (json)");
    const typeDescriptor = __turbopack_context__.r("[project]/devume-client3/node_modules/protobufjs/google/protobuf/type.json (json)");
    Protobuf.common('api', apiDescriptor.nested.google.nested.protobuf.nested);
    Protobuf.common('descriptor', descriptorDescriptor.nested.google.nested.protobuf.nested);
    Protobuf.common('source_context', sourceContextDescriptor.nested.google.nested.protobuf.nested);
    Protobuf.common('type', typeDescriptor.nested.google.nested.protobuf.nested);
}
exports.addCommonProtos = addCommonProtos; //# sourceMappingURL=util.js.map
}),
"[project]/devume-client3/node_modules/@grpc/grpc-js/node_modules/@grpc/proto-loader/build/src/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license
 * Copyright 2018 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadFileDescriptorSetFromObject = exports.loadFileDescriptorSetFromBuffer = exports.fromJSON = exports.loadSync = exports.load = exports.IdempotencyLevel = exports.isAnyExtension = exports.Long = void 0;
const camelCase = __turbopack_context__.r("[project]/devume-client3/node_modules/lodash.camelcase/index.js [app-rsc] (ecmascript)");
const Protobuf = __turbopack_context__.r("[project]/devume-client3/node_modules/protobufjs/index.js [app-rsc] (ecmascript)");
const descriptor = __turbopack_context__.r("[project]/devume-client3/node_modules/protobufjs/ext/descriptor/index.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_context__.r("[project]/devume-client3/node_modules/@grpc/grpc-js/node_modules/@grpc/proto-loader/build/src/util.js [app-rsc] (ecmascript)");
const Long = __turbopack_context__.r("[project]/devume-client3/node_modules/long/umd/index.js [app-rsc] (ecmascript)");
exports.Long = Long;
function isAnyExtension(obj) {
    return '@type' in obj && typeof obj['@type'] === 'string';
}
exports.isAnyExtension = isAnyExtension;
var IdempotencyLevel;
(function(IdempotencyLevel) {
    IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = "IDEMPOTENCY_UNKNOWN";
    IdempotencyLevel["NO_SIDE_EFFECTS"] = "NO_SIDE_EFFECTS";
    IdempotencyLevel["IDEMPOTENT"] = "IDEMPOTENT";
})(IdempotencyLevel = exports.IdempotencyLevel || (exports.IdempotencyLevel = {}));
const descriptorOptions = {
    longs: String,
    enums: String,
    bytes: String,
    defaults: true,
    oneofs: true,
    json: true
};
function joinName(baseName, name) {
    if (baseName === '') {
        return name;
    } else {
        return baseName + '.' + name;
    }
}
function isHandledReflectionObject(obj) {
    return obj instanceof Protobuf.Service || obj instanceof Protobuf.Type || obj instanceof Protobuf.Enum;
}
function isNamespaceBase(obj) {
    return obj instanceof Protobuf.Namespace || obj instanceof Protobuf.Root;
}
function getAllHandledReflectionObjects(obj, parentName) {
    const objName = joinName(parentName, obj.name);
    if (isHandledReflectionObject(obj)) {
        return [
            [
                objName,
                obj
            ]
        ];
    } else {
        if (isNamespaceBase(obj) && typeof obj.nested !== 'undefined') {
            return Object.keys(obj.nested).map((name)=>{
                return getAllHandledReflectionObjects(obj.nested[name], objName);
            }).reduce((accumulator, currentValue)=>accumulator.concat(currentValue), []);
        }
    }
    return [];
}
function createDeserializer(cls, options) {
    return function deserialize(argBuf) {
        return cls.toObject(cls.decode(argBuf), options);
    };
}
function createSerializer(cls) {
    return function serialize(arg) {
        if (Array.isArray(arg)) {
            throw new Error(`Failed to serialize message: expected object with ${cls.name} structure, got array instead`);
        }
        const message = cls.fromObject(arg);
        return cls.encode(message).finish();
    };
}
function mapMethodOptions(options) {
    return (options || []).reduce((obj, item)=>{
        for (const [key, value] of Object.entries(item)){
            switch(key){
                case 'uninterpreted_option':
                    obj.uninterpreted_option.push(item.uninterpreted_option);
                    break;
                default:
                    obj[key] = value;
            }
        }
        return obj;
    }, {
        deprecated: false,
        idempotency_level: IdempotencyLevel.IDEMPOTENCY_UNKNOWN,
        uninterpreted_option: []
    });
}
function createMethodDefinition(method, serviceName, options, fileDescriptors) {
    /* This is only ever called after the corresponding root.resolveAll(), so we
     * can assume that the resolved request and response types are non-null */ const requestType = method.resolvedRequestType;
    const responseType = method.resolvedResponseType;
    return {
        path: '/' + serviceName + '/' + method.name,
        requestStream: !!method.requestStream,
        responseStream: !!method.responseStream,
        requestSerialize: createSerializer(requestType),
        requestDeserialize: createDeserializer(requestType, options),
        responseSerialize: createSerializer(responseType),
        responseDeserialize: createDeserializer(responseType, options),
        // TODO(murgatroid99): Find a better way to handle this
        originalName: camelCase(method.name),
        requestType: createMessageDefinition(requestType, options, fileDescriptors),
        responseType: createMessageDefinition(responseType, options, fileDescriptors),
        options: mapMethodOptions(method.parsedOptions)
    };
}
function createServiceDefinition(service, name, options, fileDescriptors) {
    const def = {};
    for (const method of service.methodsArray){
        def[method.name] = createMethodDefinition(method, name, options, fileDescriptors);
    }
    return def;
}
function createMessageDefinition(message, options, fileDescriptors) {
    const messageDescriptor = message.toDescriptor('proto3');
    return {
        format: 'Protocol Buffer 3 DescriptorProto',
        type: messageDescriptor.$type.toObject(messageDescriptor, descriptorOptions),
        fileDescriptorProtos: fileDescriptors,
        serialize: createSerializer(message),
        deserialize: createDeserializer(message, options)
    };
}
function createEnumDefinition(enumType, fileDescriptors) {
    const enumDescriptor = enumType.toDescriptor('proto3');
    return {
        format: 'Protocol Buffer 3 EnumDescriptorProto',
        type: enumDescriptor.$type.toObject(enumDescriptor, descriptorOptions),
        fileDescriptorProtos: fileDescriptors
    };
}
/**
 * function createDefinition(obj: Protobuf.Service, name: string, options:
 * Options): ServiceDefinition; function createDefinition(obj: Protobuf.Type,
 * name: string, options: Options): MessageTypeDefinition; function
 * createDefinition(obj: Protobuf.Enum, name: string, options: Options):
 * EnumTypeDefinition;
 */ function createDefinition(obj, name, options, fileDescriptors) {
    if (obj instanceof Protobuf.Service) {
        return createServiceDefinition(obj, name, options, fileDescriptors);
    } else if (obj instanceof Protobuf.Type) {
        return createMessageDefinition(obj, options, fileDescriptors);
    } else if (obj instanceof Protobuf.Enum) {
        return createEnumDefinition(obj, fileDescriptors);
    } else {
        throw new Error('Type mismatch in reflection object handling');
    }
}
function createPackageDefinition(root, options) {
    const def = {};
    root.resolveAll();
    const descriptorList = root.toDescriptor('proto3').file;
    const bufferList = descriptorList.map((value)=>Buffer.from(descriptor.FileDescriptorProto.encode(value).finish()));
    for (const [name, obj] of getAllHandledReflectionObjects(root, '')){
        def[name] = createDefinition(obj, name, options, bufferList);
    }
    return def;
}
function createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options) {
    options = options || {};
    const root = Protobuf.Root.fromDescriptor(decodedDescriptorSet);
    root.resolveAll();
    return createPackageDefinition(root, options);
}
/**
 * Load a .proto file with the specified options.
 * @param filename One or multiple file paths to load. Can be an absolute path
 *     or relative to an include path.
 * @param options.keepCase Preserve field names. The default is to change them
 *     to camel case.
 * @param options.longs The type that should be used to represent `long` values.
 *     Valid options are `Number` and `String`. Defaults to a `Long` object type
 *     from a library.
 * @param options.enums The type that should be used to represent `enum` values.
 *     The only valid option is `String`. Defaults to the numeric value.
 * @param options.bytes The type that should be used to represent `bytes`
 *     values. Valid options are `Array` and `String`. The default is to use
 *     `Buffer`.
 * @param options.defaults Set default values on output objects. Defaults to
 *     `false`.
 * @param options.arrays Set empty arrays for missing array values even if
 *     `defaults` is `false`. Defaults to `false`.
 * @param options.objects Set empty objects for missing object values even if
 *     `defaults` is `false`. Defaults to `false`.
 * @param options.oneofs Set virtual oneof properties to the present field's
 *     name
 * @param options.json Represent Infinity and NaN as strings in float fields,
 *     and automatically decode google.protobuf.Any values.
 * @param options.includeDirs Paths to search for imported `.proto` files.
 */ function load(filename, options) {
    return (0, util_1.loadProtosWithOptions)(filename, options).then((loadedRoot)=>{
        return createPackageDefinition(loadedRoot, options);
    });
}
exports.load = load;
function loadSync(filename, options) {
    const loadedRoot = (0, util_1.loadProtosWithOptionsSync)(filename, options);
    return createPackageDefinition(loadedRoot, options);
}
exports.loadSync = loadSync;
function fromJSON(json, options) {
    options = options || {};
    const loadedRoot = Protobuf.Root.fromJSON(json);
    loadedRoot.resolveAll();
    return createPackageDefinition(loadedRoot, options);
}
exports.fromJSON = fromJSON;
function loadFileDescriptorSetFromBuffer(descriptorSet, options) {
    const decodedDescriptorSet = descriptor.FileDescriptorSet.decode(descriptorSet);
    return createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options);
}
exports.loadFileDescriptorSetFromBuffer = loadFileDescriptorSetFromBuffer;
function loadFileDescriptorSetFromObject(descriptorSet, options) {
    const decodedDescriptorSet = descriptor.FileDescriptorSet.fromObject(descriptorSet);
    return createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options);
}
exports.loadFileDescriptorSetFromObject = loadFileDescriptorSetFromObject;
(0, util_1.addCommonProtos)(); //# sourceMappingURL=index.js.map
}),
"[project]/devume-client3/node_modules/long/umd/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// GENERATED FILE. DO NOT EDIT.
(function(global, factory) {
    function preferDefault(exports1) {
        return exports1.default || exports1;
    }
    if (typeof define === "function" && define.amd) {
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            var exports1 = {};
            factory(exports1);
            return preferDefault(exports1);
        }());
    } else if ("TURBOPACK compile-time truthy", 1) {
        factory(exports);
        if ("TURBOPACK compile-time truthy", 1) module.exports = preferDefault(exports);
    } else //TURBOPACK unreachable
    ;
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : /*TURBOPACK member replacement*/ __turbopack_context__.e, function(_exports) {
    "use strict";
    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    /**
     * @license
     * Copyright 2009 The Closure Library Authors
     * Copyright 2020 Daniel Wirtz / The long.js Authors.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     *
     * SPDX-License-Identifier: Apache-2.0
     */ // WebAssembly optimizations to do native i64 multiplication and divide
    var wasm = null;
    try {
        wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
            // \0asm
            0,
            97,
            115,
            109,
            // version 1
            1,
            0,
            0,
            0,
            // section "type"
            1,
            13,
            2,
            // 0, () => i32
            96,
            0,
            1,
            127,
            // 1, (i32, i32, i32, i32) => i32
            96,
            4,
            127,
            127,
            127,
            127,
            1,
            127,
            // section "function"
            3,
            7,
            6,
            // 0, type 0
            0,
            // 1, type 1
            1,
            // 2, type 1
            1,
            // 3, type 1
            1,
            // 4, type 1
            1,
            // 5, type 1
            1,
            // section "global"
            6,
            6,
            1,
            // 0, "high", mutable i32
            127,
            1,
            65,
            0,
            11,
            // section "export"
            7,
            50,
            6,
            // 0, "mul"
            3,
            109,
            117,
            108,
            0,
            1,
            // 1, "div_s"
            5,
            100,
            105,
            118,
            95,
            115,
            0,
            2,
            // 2, "div_u"
            5,
            100,
            105,
            118,
            95,
            117,
            0,
            3,
            // 3, "rem_s"
            5,
            114,
            101,
            109,
            95,
            115,
            0,
            4,
            // 4, "rem_u"
            5,
            114,
            101,
            109,
            95,
            117,
            0,
            5,
            // 5, "get_high"
            8,
            103,
            101,
            116,
            95,
            104,
            105,
            103,
            104,
            0,
            0,
            // section "code"
            10,
            191,
            1,
            6,
            // 0, "get_high"
            4,
            0,
            35,
            0,
            11,
            // 1, "mul"
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            126,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            // 2, "div_s"
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            127,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            // 3, "div_u"
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            128,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            // 4, "rem_s"
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            129,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            // 5, "rem_u"
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            130,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11
        ])), {}).exports;
    } catch  {
    // no wasm support :(
    }
    /**
     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
     *  See the from* functions below for more convenient ways of constructing Longs.
     * @exports Long
     * @class A Long class for representing a 64 bit two's-complement integer value.
     * @param {number} low The low (signed) 32 bits of the long
     * @param {number} high The high (signed) 32 bits of the long
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @constructor
     */ function Long(low, high, unsigned) {
        /**
       * The low 32 bits as a signed value.
       * @type {number}
       */ this.low = low | 0;
        /**
       * The high 32 bits as a signed value.
       * @type {number}
       */ this.high = high | 0;
        /**
       * Whether unsigned or not.
       * @type {boolean}
       */ this.unsigned = !!unsigned;
    }
    // The internal representation of a long is the two given signed, 32-bit values.
    // We use 32-bit pieces because these are the size of integers on which
    // Javascript performs bit-operations.  For operations like addition and
    // multiplication, we split each number into 16 bit pieces, which can easily be
    // multiplied within Javascript's floating-point representation without overflow
    // or change in sign.
    //
    // In the algorithms below, we frequently reduce the negative case to the
    // positive case by negating the input(s) and then post-processing the result.
    // Note that we must ALWAYS check specially whether those values are MIN_VALUE
    // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
    // a positive number, it overflows back into a negative).  Not handling this
    // case would often result in infinite recursion.
    //
    // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
    // methods on which they depend.
    /**
     * An indicator used to reliably determine if an object is a Long or not.
     * @type {boolean}
     * @const
     * @private
     */ Long.prototype.__isLong__;
    Object.defineProperty(Long.prototype, "__isLong__", {
        value: true
    });
    /**
     * @function
     * @param {*} obj Object
     * @returns {boolean}
     * @inner
     */ function isLong(obj) {
        return (obj && obj["__isLong__"]) === true;
    }
    /**
     * @function
     * @param {*} value number
     * @returns {number}
     * @inner
     */ function ctz32(value) {
        var c = Math.clz32(value & -value);
        return value ? 31 - c : c;
    }
    /**
     * Tests if the specified object is a Long.
     * @function
     * @param {*} obj Object
     * @returns {boolean}
     */ Long.isLong = isLong;
    /**
     * A cache of the Long representations of small integer values.
     * @type {!Object}
     * @inner
     */ var INT_CACHE = {};
    /**
     * A cache of the Long representations of small unsigned integer values.
     * @type {!Object}
     * @inner
     */ var UINT_CACHE = {};
    /**
     * @param {number} value
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */ function fromInt(value, unsigned) {
        var obj, cachedObj, cache;
        if (unsigned) {
            value >>>= 0;
            if (cache = 0 <= value && value < 256) {
                cachedObj = UINT_CACHE[value];
                if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, 0, true);
            if (cache) UINT_CACHE[value] = obj;
            return obj;
        } else {
            value |= 0;
            if (cache = -128 <= value && value < 128) {
                cachedObj = INT_CACHE[value];
                if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, value < 0 ? -1 : 0, false);
            if (cache) INT_CACHE[value] = obj;
            return obj;
        }
    }
    /**
     * Returns a Long representing the given 32 bit integer value.
     * @function
     * @param {number} value The 32 bit integer in question
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */ Long.fromInt = fromInt;
    /**
     * @param {number} value
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */ function fromNumber(value, unsigned) {
        if (isNaN(value)) return unsigned ? UZERO : ZERO;
        if (unsigned) {
            if (value < 0) return UZERO;
            if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
        } else {
            if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
            if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
        }
        if (value < 0) return fromNumber(-value, unsigned).neg();
        return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
    }
    /**
     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
     * @function
     * @param {number} value The number in question
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */ Long.fromNumber = fromNumber;
    /**
     * @param {number} lowBits
     * @param {number} highBits
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */ function fromBits(lowBits, highBits, unsigned) {
        return new Long(lowBits, highBits, unsigned);
    }
    /**
     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
     *  assumed to use 32 bits.
     * @function
     * @param {number} lowBits The low 32 bits
     * @param {number} highBits The high 32 bits
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */ Long.fromBits = fromBits;
    /**
     * @function
     * @param {number} base
     * @param {number} exponent
     * @returns {number}
     * @inner
     */ var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)
    /**
     * @param {string} str
     * @param {(boolean|number)=} unsigned
     * @param {number=} radix
     * @returns {!Long}
     * @inner
     */ function fromString(str, unsigned, radix) {
        if (str.length === 0) throw Error("empty string");
        if (typeof unsigned === "number") {
            // For goog.math.long compatibility
            radix = unsigned;
            unsigned = false;
        } else {
            unsigned = !!unsigned;
        }
        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return unsigned ? UZERO : ZERO;
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError("radix");
        var p;
        if ((p = str.indexOf("-")) > 0) throw Error("interior hyphen");
        else if (p === 0) {
            return fromString(str.substring(1), unsigned, radix).neg();
        }
        // Do several (8) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        var radixToPower = fromNumber(pow_dbl(radix, 8));
        var result = ZERO;
        for(var i = 0; i < str.length; i += 8){
            var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
            if (size < 8) {
                var power = fromNumber(pow_dbl(radix, size));
                result = result.mul(power).add(fromNumber(value));
            } else {
                result = result.mul(radixToPower);
                result = result.add(fromNumber(value));
            }
        }
        result.unsigned = unsigned;
        return result;
    }
    /**
     * Returns a Long representation of the given string, written using the specified radix.
     * @function
     * @param {string} str The textual representation of the Long
     * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
     * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
     * @returns {!Long} The corresponding Long value
     */ Long.fromString = fromString;
    /**
     * @function
     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */ function fromValue(val, unsigned) {
        if (typeof val === "number") return fromNumber(val, unsigned);
        if (typeof val === "string") return fromString(val, unsigned);
        // Throws for non-objects, converts non-instanceof Long:
        return fromBits(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
    }
    /**
     * Converts the specified value to a Long using the appropriate from* function for its type.
     * @function
     * @param {!Long|number|bigint|string|!{low: number, high: number, unsigned: boolean}} val Value
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long}
     */ Long.fromValue = fromValue;
    // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
    // no runtime penalty for these.
    /**
     * @type {number}
     * @const
     * @inner
     */ var TWO_PWR_16_DBL = 1 << 16;
    /**
     * @type {number}
     * @const
     * @inner
     */ var TWO_PWR_24_DBL = 1 << 24;
    /**
     * @type {number}
     * @const
     * @inner
     */ var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
    /**
     * @type {number}
     * @const
     * @inner
     */ var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
    /**
     * @type {number}
     * @const
     * @inner
     */ var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
    /**
     * @type {!Long}
     * @const
     * @inner
     */ var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
    /**
     * @type {!Long}
     * @inner
     */ var ZERO = fromInt(0);
    /**
     * Signed zero.
     * @type {!Long}
     */ Long.ZERO = ZERO;
    /**
     * @type {!Long}
     * @inner
     */ var UZERO = fromInt(0, true);
    /**
     * Unsigned zero.
     * @type {!Long}
     */ Long.UZERO = UZERO;
    /**
     * @type {!Long}
     * @inner
     */ var ONE = fromInt(1);
    /**
     * Signed one.
     * @type {!Long}
     */ Long.ONE = ONE;
    /**
     * @type {!Long}
     * @inner
     */ var UONE = fromInt(1, true);
    /**
     * Unsigned one.
     * @type {!Long}
     */ Long.UONE = UONE;
    /**
     * @type {!Long}
     * @inner
     */ var NEG_ONE = fromInt(-1);
    /**
     * Signed negative one.
     * @type {!Long}
     */ Long.NEG_ONE = NEG_ONE;
    /**
     * @type {!Long}
     * @inner
     */ var MAX_VALUE = fromBits(0xffffffff | 0, 0x7fffffff | 0, false);
    /**
     * Maximum signed value.
     * @type {!Long}
     */ Long.MAX_VALUE = MAX_VALUE;
    /**
     * @type {!Long}
     * @inner
     */ var MAX_UNSIGNED_VALUE = fromBits(0xffffffff | 0, 0xffffffff | 0, true);
    /**
     * Maximum unsigned value.
     * @type {!Long}
     */ Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
    /**
     * @type {!Long}
     * @inner
     */ var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);
    /**
     * Minimum signed value.
     * @type {!Long}
     */ Long.MIN_VALUE = MIN_VALUE;
    /**
     * @alias Long.prototype
     * @inner
     */ var LongPrototype = Long.prototype;
    /**
     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
     * @this {!Long}
     * @returns {number}
     */ LongPrototype.toInt = function toInt() {
        return this.unsigned ? this.low >>> 0 : this.low;
    };
    /**
     * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
     * @this {!Long}
     * @returns {number}
     */ LongPrototype.toNumber = function toNumber() {
        if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    };
    /**
     * Converts the Long to a string written in the specified radix.
     * @this {!Long}
     * @param {number=} radix Radix (2-36), defaults to 10
     * @returns {string}
     * @override
     * @throws {RangeError} If `radix` is out of range
     */ LongPrototype.toString = function toString(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
            // Unsigned Longs are never negative
            if (this.eq(MIN_VALUE)) {
                // We need to change the Long value before it can be negated, so we remove
                // the bottom-most digit in this base and then recurse to do the rest.
                var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
                return div.toString(radix) + rem1.toInt().toString(radix);
            } else return "-" + this.neg().toString(radix);
        }
        // Do several (6) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
        var result = "";
        while(true){
            var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero()) return digits + result;
            else {
                while(digits.length < 6)digits = "0" + digits;
                result = "" + digits + result;
            }
        }
    };
    /**
     * Gets the high 32 bits as a signed integer.
     * @this {!Long}
     * @returns {number} Signed high bits
     */ LongPrototype.getHighBits = function getHighBits() {
        return this.high;
    };
    /**
     * Gets the high 32 bits as an unsigned integer.
     * @this {!Long}
     * @returns {number} Unsigned high bits
     */ LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
        return this.high >>> 0;
    };
    /**
     * Gets the low 32 bits as a signed integer.
     * @this {!Long}
     * @returns {number} Signed low bits
     */ LongPrototype.getLowBits = function getLowBits() {
        return this.low;
    };
    /**
     * Gets the low 32 bits as an unsigned integer.
     * @this {!Long}
     * @returns {number} Unsigned low bits
     */ LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
        return this.low >>> 0;
    };
    /**
     * Gets the number of bits needed to represent the absolute value of this Long.
     * @this {!Long}
     * @returns {number}
     */ LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
        if (this.isNegative()) // Unsigned Longs are never negative
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        var val = this.high != 0 ? this.high : this.low;
        for(var bit = 31; bit > 0; bit--)if ((val & 1 << bit) != 0) break;
        return this.high != 0 ? bit + 33 : bit + 1;
    };
    /**
     * Tests if this Long can be safely represented as a JavaScript number.
     * @this {!Long}
     * @returns {boolean}
     */ LongPrototype.isSafeInteger = function isSafeInteger() {
        // 2^53-1 is the maximum safe value
        var top11Bits = this.high >> 21;
        // [0, 2^53-1]
        if (!top11Bits) return true;
        // > 2^53-1
        if (this.unsigned) return false;
        // [-2^53, -1] except -2^53
        return top11Bits === -1 && !(this.low === 0 && this.high === -0x200000);
    };
    /**
     * Tests if this Long's value equals zero.
     * @this {!Long}
     * @returns {boolean}
     */ LongPrototype.isZero = function isZero() {
        return this.high === 0 && this.low === 0;
    };
    /**
     * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
     * @returns {boolean}
     */ LongPrototype.eqz = LongPrototype.isZero;
    /**
     * Tests if this Long's value is negative.
     * @this {!Long}
     * @returns {boolean}
     */ LongPrototype.isNegative = function isNegative() {
        return !this.unsigned && this.high < 0;
    };
    /**
     * Tests if this Long's value is positive or zero.
     * @this {!Long}
     * @returns {boolean}
     */ LongPrototype.isPositive = function isPositive() {
        return this.unsigned || this.high >= 0;
    };
    /**
     * Tests if this Long's value is odd.
     * @this {!Long}
     * @returns {boolean}
     */ LongPrototype.isOdd = function isOdd() {
        return (this.low & 1) === 1;
    };
    /**
     * Tests if this Long's value is even.
     * @this {!Long}
     * @returns {boolean}
     */ LongPrototype.isEven = function isEven() {
        return (this.low & 1) === 0;
    };
    /**
     * Tests if this Long's value equals the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.equals = function equals(other) {
        if (!isLong(other)) other = fromValue(other);
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
        return this.high === other.high && this.low === other.low;
    };
    /**
     * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.eq = LongPrototype.equals;
    /**
     * Tests if this Long's value differs from the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.notEquals = function notEquals(other) {
        return !this.eq(/* validates */ other);
    };
    /**
     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.neq = LongPrototype.notEquals;
    /**
     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.ne = LongPrototype.notEquals;
    /**
     * Tests if this Long's value is less than the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.lessThan = function lessThan(other) {
        return this.comp(/* validates */ other) < 0;
    };
    /**
     * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.lt = LongPrototype.lessThan;
    /**
     * Tests if this Long's value is less than or equal the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
        return this.comp(/* validates */ other) <= 0;
    };
    /**
     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.lte = LongPrototype.lessThanOrEqual;
    /**
     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.le = LongPrototype.lessThanOrEqual;
    /**
     * Tests if this Long's value is greater than the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.greaterThan = function greaterThan(other) {
        return this.comp(/* validates */ other) > 0;
    };
    /**
     * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.gt = LongPrototype.greaterThan;
    /**
     * Tests if this Long's value is greater than or equal the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
        return this.comp(/* validates */ other) >= 0;
    };
    /**
     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.gte = LongPrototype.greaterThanOrEqual;
    /**
     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */ LongPrototype.ge = LongPrototype.greaterThanOrEqual;
    /**
     * Compares this Long's value with the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
     *  if the given one is greater
     */ LongPrototype.compare = function compare(other) {
        if (!isLong(other)) other = fromValue(other);
        if (this.eq(other)) return 0;
        var thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg) return -1;
        if (!thisNeg && otherNeg) return 1;
        // At this point the sign bits are the same
        if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1;
        // Both are positive if at least one is unsigned
        return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
    };
    /**
     * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
     *  if the given one is greater
     */ LongPrototype.comp = LongPrototype.compare;
    /**
     * Negates this Long's value.
     * @this {!Long}
     * @returns {!Long} Negated Long
     */ LongPrototype.negate = function negate() {
        if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
        return this.not().add(ONE);
    };
    /**
     * Negates this Long's value. This is an alias of {@link Long#negate}.
     * @function
     * @returns {!Long} Negated Long
     */ LongPrototype.neg = LongPrototype.negate;
    /**
     * Returns the sum of this and the specified Long.
     * @this {!Long}
     * @param {!Long|number|bigint|string} addend Addend
     * @returns {!Long} Sum
     */ LongPrototype.add = function add(addend) {
        if (!isLong(addend)) addend = fromValue(addend);
        // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
        var a48 = this.high >>> 16;
        var a32 = this.high & 0xffff;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xffff;
        var b48 = addend.high >>> 16;
        var b32 = addend.high & 0xffff;
        var b16 = addend.low >>> 16;
        var b00 = addend.low & 0xffff;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 0xffff;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c48 += a48 + b48;
        c48 &= 0xffff;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    /**
     * Returns the difference of this and the specified Long.
     * @this {!Long}
     * @param {!Long|number|bigint|string} subtrahend Subtrahend
     * @returns {!Long} Difference
     */ LongPrototype.subtract = function subtract(subtrahend) {
        if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
        return this.add(subtrahend.neg());
    };
    /**
     * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
     * @function
     * @param {!Long|number|bigint|string} subtrahend Subtrahend
     * @returns {!Long} Difference
     */ LongPrototype.sub = LongPrototype.subtract;
    /**
     * Returns the product of this and the specified Long.
     * @this {!Long}
     * @param {!Long|number|bigint|string} multiplier Multiplier
     * @returns {!Long} Product
     */ LongPrototype.multiply = function multiply(multiplier) {
        if (this.isZero()) return this;
        if (!isLong(multiplier)) multiplier = fromValue(multiplier);
        // use wasm support if present
        if (wasm) {
            var low = wasm["mul"](this.low, this.high, multiplier.low, multiplier.high);
            return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        if (multiplier.isZero()) return this.unsigned ? UZERO : ZERO;
        if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
        if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;
        if (this.isNegative()) {
            if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());
            else return this.neg().mul(multiplier).neg();
        } else if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg();
        // If both longs are small, use float multiplication
        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
        // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
        // We can skip products that would overflow.
        var a48 = this.high >>> 16;
        var a32 = this.high & 0xffff;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xffff;
        var b48 = multiplier.high >>> 16;
        var b32 = multiplier.high & 0xffff;
        var b16 = multiplier.low >>> 16;
        var b00 = multiplier.low & 0xffff;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 0xffff;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 0xffff;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    /**
     * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
     * @function
     * @param {!Long|number|bigint|string} multiplier Multiplier
     * @returns {!Long} Product
     */ LongPrototype.mul = LongPrototype.multiply;
    /**
     * Returns this Long divided by the specified. The result is signed if this Long is signed or
     *  unsigned if this Long is unsigned.
     * @this {!Long}
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Quotient
     */ LongPrototype.divide = function divide(divisor) {
        if (!isLong(divisor)) divisor = fromValue(divisor);
        if (divisor.isZero()) throw Error("division by zero");
        // use wasm support if present
        if (wasm) {
            // guard against signed division overflow: the largest
            // negative number / -1 would be 1 larger than the largest
            // positive number, due to two's complement.
            if (!this.unsigned && this.high === -0x80000000 && divisor.low === -1 && divisor.high === -1) {
                // be consistent with non-wasm code path
                return this;
            }
            var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(this.low, this.high, divisor.low, divisor.high);
            return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        if (this.isZero()) return this.unsigned ? UZERO : ZERO;
        var approx, rem, res;
        if (!this.unsigned) {
            // This section is only relevant for signed longs and is derived from the
            // closure library as a whole.
            if (this.eq(MIN_VALUE)) {
                if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
                else if (divisor.eq(MIN_VALUE)) return ONE;
                else {
                    // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                    var halfThis = this.shr(1);
                    approx = halfThis.div(divisor).shl(1);
                    if (approx.eq(ZERO)) {
                        return divisor.isNegative() ? ONE : NEG_ONE;
                    } else {
                        rem = this.sub(divisor.mul(approx));
                        res = approx.add(rem.div(divisor));
                        return res;
                    }
                }
            } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
            if (this.isNegative()) {
                if (divisor.isNegative()) return this.neg().div(divisor.neg());
                return this.neg().div(divisor).neg();
            } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();
            res = ZERO;
        } else {
            // The algorithm below has not been made for unsigned longs. It's therefore
            // required to take special care of the MSB prior to running it.
            if (!divisor.unsigned) divisor = divisor.toUnsigned();
            if (divisor.gt(this)) return UZERO;
            if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
            res = UZERO;
        }
        // Repeat the following until the remainder is less than other:  find a
        // floating-point that approximates remainder / other *from below*, add this
        // into the result, and subtract it from the remainder.  It is critical that
        // the approximate value is less than or equal to the real value so that the
        // remainder never becomes negative.
        rem = this;
        while(rem.gte(divisor)){
            // Approximate the result of division. This may be a little greater or
            // smaller than the actual value.
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
            // We will tweak the approximate result by changing it in the 48-th digit or
            // the smallest non-fractional digit, whichever is larger.
            var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48), // Decrease the approximation until it is smaller than the remainder.  Note
            // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
            while(approxRem.isNegative() || approxRem.gt(rem)){
                approx -= delta;
                approxRes = fromNumber(approx, this.unsigned);
                approxRem = approxRes.mul(divisor);
            }
            // We know the answer can't be zero... and actually, zero would cause
            // infinite recursion since we would make no progress.
            if (approxRes.isZero()) approxRes = ONE;
            res = res.add(approxRes);
            rem = rem.sub(approxRem);
        }
        return res;
    };
    /**
     * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
     * @function
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Quotient
     */ LongPrototype.div = LongPrototype.divide;
    /**
     * Returns this Long modulo the specified.
     * @this {!Long}
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Remainder
     */ LongPrototype.modulo = function modulo(divisor) {
        if (!isLong(divisor)) divisor = fromValue(divisor);
        // use wasm support if present
        if (wasm) {
            var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(this.low, this.high, divisor.low, divisor.high);
            return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        return this.sub(this.div(divisor).mul(divisor));
    };
    /**
     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
     * @function
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Remainder
     */ LongPrototype.mod = LongPrototype.modulo;
    /**
     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
     * @function
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Remainder
     */ LongPrototype.rem = LongPrototype.modulo;
    /**
     * Returns the bitwise NOT of this Long.
     * @this {!Long}
     * @returns {!Long}
     */ LongPrototype.not = function not() {
        return fromBits(~this.low, ~this.high, this.unsigned);
    };
    /**
     * Returns count leading zeros of this Long.
     * @this {!Long}
     * @returns {!number}
     */ LongPrototype.countLeadingZeros = function countLeadingZeros() {
        return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
    };
    /**
     * Returns count leading zeros. This is an alias of {@link Long#countLeadingZeros}.
     * @function
     * @param {!Long}
     * @returns {!number}
     */ LongPrototype.clz = LongPrototype.countLeadingZeros;
    /**
     * Returns count trailing zeros of this Long.
     * @this {!Long}
     * @returns {!number}
     */ LongPrototype.countTrailingZeros = function countTrailingZeros() {
        return this.low ? ctz32(this.low) : ctz32(this.high) + 32;
    };
    /**
     * Returns count trailing zeros. This is an alias of {@link Long#countTrailingZeros}.
     * @function
     * @param {!Long}
     * @returns {!number}
     */ LongPrototype.ctz = LongPrototype.countTrailingZeros;
    /**
     * Returns the bitwise AND of this Long and the specified.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other Long
     * @returns {!Long}
     */ LongPrototype.and = function and(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    };
    /**
     * Returns the bitwise OR of this Long and the specified.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other Long
     * @returns {!Long}
     */ LongPrototype.or = function or(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    };
    /**
     * Returns the bitwise XOR of this Long and the given one.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other Long
     * @returns {!Long}
     */ LongPrototype.xor = function xor(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    };
    /**
     * Returns this Long with bits shifted to the left by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shiftLeft = function shiftLeft(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        else if (numBits < 32) return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);
        else return fromBits(0, this.low << numBits - 32, this.unsigned);
    };
    /**
     * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shl = LongPrototype.shiftLeft;
    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shiftRight = function shiftRight(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        else if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);
        else return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
    };
    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shr = LongPrototype.shiftRight;
    /**
     * Returns this Long with bits logically shifted to the right by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >>> numBits, this.unsigned);
        if (numBits === 32) return fromBits(this.high, 0, this.unsigned);
        return fromBits(this.high >>> numBits - 32, 0, this.unsigned);
    };
    /**
     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shru = LongPrototype.shiftRightUnsigned;
    /**
     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */ LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
    /**
     * Returns this Long with bits rotated to the left by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Rotated Long
     */ LongPrototype.rotateLeft = function rotateLeft(numBits) {
        var b;
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
        if (numBits < 32) {
            b = 32 - numBits;
            return fromBits(this.low << numBits | this.high >>> b, this.high << numBits | this.low >>> b, this.unsigned);
        }
        numBits -= 32;
        b = 32 - numBits;
        return fromBits(this.high << numBits | this.low >>> b, this.low << numBits | this.high >>> b, this.unsigned);
    };
    /**
     * Returns this Long with bits rotated to the left by the given amount. This is an alias of {@link Long#rotateLeft}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Rotated Long
     */ LongPrototype.rotl = LongPrototype.rotateLeft;
    /**
     * Returns this Long with bits rotated to the right by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Rotated Long
     */ LongPrototype.rotateRight = function rotateRight(numBits) {
        var b;
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
        if (numBits < 32) {
            b = 32 - numBits;
            return fromBits(this.high << b | this.low >>> numBits, this.low << b | this.high >>> numBits, this.unsigned);
        }
        numBits -= 32;
        b = 32 - numBits;
        return fromBits(this.low << b | this.high >>> numBits, this.high << b | this.low >>> numBits, this.unsigned);
    };
    /**
     * Returns this Long with bits rotated to the right by the given amount. This is an alias of {@link Long#rotateRight}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Rotated Long
     */ LongPrototype.rotr = LongPrototype.rotateRight;
    /**
     * Converts this Long to signed.
     * @this {!Long}
     * @returns {!Long} Signed long
     */ LongPrototype.toSigned = function toSigned() {
        if (!this.unsigned) return this;
        return fromBits(this.low, this.high, false);
    };
    /**
     * Converts this Long to unsigned.
     * @this {!Long}
     * @returns {!Long} Unsigned long
     */ LongPrototype.toUnsigned = function toUnsigned() {
        if (this.unsigned) return this;
        return fromBits(this.low, this.high, true);
    };
    /**
     * Converts this Long to its byte representation.
     * @param {boolean=} le Whether little or big endian, defaults to big endian
     * @this {!Long}
     * @returns {!Array.<number>} Byte representation
     */ LongPrototype.toBytes = function toBytes(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
    };
    /**
     * Converts this Long to its little endian byte representation.
     * @this {!Long}
     * @returns {!Array.<number>} Little endian byte representation
     */ LongPrototype.toBytesLE = function toBytesLE() {
        var hi = this.high, lo = this.low;
        return [
            lo & 0xff,
            lo >>> 8 & 0xff,
            lo >>> 16 & 0xff,
            lo >>> 24,
            hi & 0xff,
            hi >>> 8 & 0xff,
            hi >>> 16 & 0xff,
            hi >>> 24
        ];
    };
    /**
     * Converts this Long to its big endian byte representation.
     * @this {!Long}
     * @returns {!Array.<number>} Big endian byte representation
     */ LongPrototype.toBytesBE = function toBytesBE() {
        var hi = this.high, lo = this.low;
        return [
            hi >>> 24,
            hi >>> 16 & 0xff,
            hi >>> 8 & 0xff,
            hi & 0xff,
            lo >>> 24,
            lo >>> 16 & 0xff,
            lo >>> 8 & 0xff,
            lo & 0xff
        ];
    };
    /**
     * Creates a Long from its byte representation.
     * @param {!Array.<number>} bytes Byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @param {boolean=} le Whether little or big endian, defaults to big endian
     * @returns {Long} The corresponding Long value
     */ Long.fromBytes = function fromBytes(bytes, unsigned, le) {
        return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
    };
    /**
     * Creates a Long from its little endian byte representation.
     * @param {!Array.<number>} bytes Little endian byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {Long} The corresponding Long value
     */ Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
        return new Long(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
    };
    /**
     * Creates a Long from its big endian byte representation.
     * @param {!Array.<number>} bytes Big endian byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {Long} The corresponding Long value
     */ Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
        return new Long(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
    };
    // Support conversion to/from BigInt where available
    if (typeof BigInt === "function") {
        /**
       * Returns a Long representing the given big integer.
       * @function
       * @param {number} value The big integer value
       * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
       * @returns {!Long} The corresponding Long value
       */ Long.fromBigInt = function fromBigInt(value, unsigned) {
            var lowBits = Number(BigInt.asIntN(32, value));
            var highBits = Number(BigInt.asIntN(32, value >> BigInt(32)));
            return fromBits(lowBits, highBits, unsigned);
        };
        // Override
        Long.fromValue = function fromValueWithBigInt(value, unsigned) {
            if (typeof value === "bigint") return Long.fromBigInt(value, unsigned);
            return fromValue(value, unsigned);
        };
        /**
       * Converts the Long to its big integer representation.
       * @this {!Long}
       * @returns {bigint}
       */ LongPrototype.toBigInt = function toBigInt() {
            var lowBigInt = BigInt(this.low >>> 0);
            var highBigInt = BigInt(this.unsigned ? this.high >>> 0 : this.high);
            return highBigInt << BigInt(32) | lowBigInt;
        };
    }
    var _default = _exports.default = Long;
});
}),
];

//# sourceMappingURL=a0d80_b3dedef0._.js.map