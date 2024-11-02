const fs = require('fs')
self = global;
const uuid = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, ue => {
        const Yi = Math.random() * 16 | 0;
        return (ue === "x" ? Yi : Yi & 3 | 8).toString(16)
    }
)


"use strict";
const v = globalThis || void 0 || self;
let _;
const g = new Array(128).fill(void 0);
g.push(void 0, null, !0, !1);
function c(e) {
    return g[e]
}
let m = g.length;
function M(e) {
    e < 132 || (g[e] = m,
    m = e)
}
function w(e) {
    const n = c(e);
    return M(e),
    n
}
let d = 0
  , p = null;
function S() {
    return (p === null || p.byteLength === 0) && (p = new Uint8Array(_.memory.buffer)),
    p
}
const O = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
        throw Error("TextEncoder not available")
    }
}
  , W = typeof O.encodeInto == "function" ? function(e, n) {
    return O.encodeInto(e, n)
}
: function(e, n) {
    const t = O.encode(e);
    return n.set(t),
    {
        read: e.length,
        written: t.length
    }
}
;
function h(e, n, t) {
    if (t === void 0) {
        const a = O.encode(e)
          , y = n(a.length, 1) >>> 0;
        return S().subarray(y, y + a.length).set(a),
        d = a.length,
        y
    }
    let r = e.length
      , o = n(r, 1) >>> 0;
    const f = S();
    let s = 0;
    for (; s < r; s++) {
        const a = e.charCodeAt(s);
        if (a > 127)
            break;
        f[o + s] = a
    }
    if (s !== r) {
        s !== 0 && (e = e.slice(s)),
        o = t(o, r, r = s + e.length * 3, 1) >>> 0;
        const a = S().subarray(o + s, o + r)
          , y = W(e, a);
        s += y.written,
        o = t(o, r, s, 1) >>> 0
    }
    return d = s,
    o
}
function I(e) {
    return e == null
}
let l = null;
function u() {
    return (l === null || l.buffer.detached === !0 || l.buffer.detached === void 0 && l.buffer !== _.memory.buffer) && (l = new DataView(_.memory.buffer)),
    l
}
function i(e) {
    m === g.length && g.push(g.length + 1);
    const n = m;
    return m = g[n],
    g[n] = e,
    n
}
const E = typeof TextDecoder < "u" ? new TextDecoder("utf-8",{
    ignoreBOM: !0,
    fatal: !0
}) : {
    decode: () => {
        throw Error("TextDecoder not available")
    }
};
typeof TextDecoder < "u" && E.decode();
function A(e, n) {
    return e = e >>> 0,
    E.decode(S().subarray(e, e + n))
}
function T(e) {
    const n = typeof e;
    if (n == "number" || n == "boolean" || e == null)
        return `${e}`;
    if (n == "string")
        return `"${e}"`;
    if (n == "symbol") {
        const o = e.description;
        return o == null ? "Symbol" : `Symbol(${o})`
    }
    if (n == "function") {
        const o = e.name;
        return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function"
    }
    if (Array.isArray(e)) {
        const o = e.length;
        let f = "[";
        o > 0 && (f += T(e[0]));
        for (let s = 1; s < o; s++)
            f += ", " + T(e[s]);
        return f += "]",
        f
    }
    const t = /\[object ([^\]]+)\]/.exec(toString.call(e));
    let r;
    if (t.length > 1)
        r = t[1];
    else
        return toString.call(e);
    if (r == "Object")
        try {
            return "Object(" + JSON.stringify(e) + ")"
        } catch {
            return "Object"
        }
    return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r
}
function F(e) {
    try {
        const o = _.__wbindgen_add_to_stack_pointer(-16)
          , f = h(e, _.__wbindgen_malloc, _.__wbindgen_realloc)
          , s = d;
        _.proof(o, f, s);
        var n = u().getInt32(o + 4 * 0, !0)
          , t = u().getInt32(o + 4 * 1, !0)
          , r = u().getInt32(o + 4 * 2, !0);
        if (r)
            throw w(t);
        return w(n)
    } finally {
        _.__wbindgen_add_to_stack_pointer(16)
    }
}
function B(e, n, t) {
    let r, o;
    try {
        const j = _.__wbindgen_add_to_stack_pointer(-16)
          , q = h(e, _.__wbindgen_malloc, _.__wbindgen_realloc)
          , N = d;
        _.pack(j, q, N, i(n), i(t));
        var f = u().getInt32(j + 4 * 0, !0)
          , s = u().getInt32(j + 4 * 1, !0)
          , a = u().getInt32(j + 4 * 2, !0)
          , y = u().getInt32(j + 4 * 3, !0)
          , k = f
          , U = s;
        if (y)
            throw k = 0,
            U = 0,
            w(a);
        return r = k,
        o = U,
        A(k, U)
    } finally {
        _.__wbindgen_add_to_stack_pointer(16),
        _.__wbindgen_free(r, o, 1)
    }
}
function b(e, n) {
    try {
        return e.apply(this, n)
    } catch (t) {
        _.__wbindgen_exn_store(i(t))
    }
}
async function D(e, n) {
    if (typeof Response == "function" && e instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming == "function")
            try {
                return await WebAssembly.instantiateStreaming(e, n)
            } catch (r) {
                if (e.headers.get("Content-Type") != "application/wasm")
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
                else
                    throw r
            }
        const t = await e.arrayBuffer();
        return await WebAssembly.instantiate(t, n)
    } else {
        const t = await WebAssembly.instantiate(e, n);
        return t instanceof WebAssembly.Instance ? {
            instance: t,
            module: e
        } : t
    }
}
function $() {
    const e = {};
    return e.wbg = {},
    e.wbg.__wbindgen_object_drop_ref = function(n) {
        w(n)
    }
    ,
    e.wbg.__wbindgen_string_get = function(n, t) {
        const r = c(t)
          , o = typeof r == "string" ? r : void 0;
        var f = I(o) ? 0 : h(o, _.__wbindgen_malloc, _.__wbindgen_realloc)
          , s = d;
        u().setInt32(n + 4 * 1, s, !0),
        u().setInt32(n + 4 * 0, f, !0)
    }
    ,
    e.wbg.__wbindgen_is_object = function(n) {
        const t = c(n);
        return typeof t == "object" && t !== null
    }
    ,
    e.wbg.__wbindgen_is_undefined = function(n) {
        return c(n) === void 0
    }
    ,
    e.wbg.__wbindgen_in = function(n, t) {
        return c(n)in c(t)
    }
    ,
    e.wbg.__wbindgen_is_bigint = function(n) {
        return typeof c(n) == "bigint"
    }
    ,
    e.wbg.__wbindgen_bigint_from_u64 = function(n) {
        const t = BigInt.asUintN(64, n);
        return i(t)
    }
    ,
    e.wbg.__wbindgen_jsval_eq = function(n, t) {
        return c(n) === c(t)
    }
    ,
    e.wbg.__wbindgen_error_new = function(n, t) {
        const r = new Error(A(n, t));
        return i(r)
    }
    ,
    e.wbg.__wbg_crypto_1d1f22824a6a080c = function(n) {
        const t = c(n).crypto;
        return i(t)
    }
    ,
    e.wbg.__wbg_process_4a72847cc503995b = function(n) {
        const t = c(n).process;
        return i(t)
    }
    ,
    e.wbg.__wbg_versions_f686565e586dd935 = function(n) {
        const t = c(n).versions;
        return i(t)
    }
    ,
    e.wbg.__wbg_node_104a2ff8d6ea03a2 = function(n) {
        const t = c(n).node;
        return i(t)
    }
    ,
    e.wbg.__wbindgen_is_string = function(n) {
        return typeof c(n) == "string"
    }
    ,
    e.wbg.__wbg_require_cca90b1a94a0255b = function() {
        return b(function() {
            const n = module.require;
            return i(n)
        }, arguments)
    }
    ,
    e.wbg.__wbindgen_is_function = function(n) {
        return typeof c(n) == "function"
    }
    ,
    e.wbg.__wbindgen_string_new = function(n, t) {
        const r = A(n, t);
        return i(r)
    }
    ,
    e.wbg.__wbg_msCrypto_eb05e62b530a1508 = function(n) {
        const t = c(n).msCrypto;
        return i(t)
    }
    ,
    e.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function() {
        return b(function(n, t) {
            c(n).randomFillSync(w(t))
        }, arguments)
    }
    ,
    e.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function() {
        return b(function(n, t) {
            c(n).getRandomValues(c(t))
        }, arguments)
    }
    ,
    e.wbg.__wbindgen_jsval_loose_eq = function(n, t) {
        return c(n) == c(t)
    }
    ,
    e.wbg.__wbindgen_boolean_get = function(n) {
        const t = c(n);
        return typeof t == "boolean" ? t ? 1 : 0 : 2
    }
    ,
    e.wbg.__wbindgen_number_get = function(n, t) {
        const r = c(t)
          , o = typeof r == "number" ? r : void 0;
        u().setFloat64(n + 8 * 1, I(o) ? 0 : o, !0),
        u().setInt32(n + 4 * 0, !I(o), !0)
    }
    ,
    e.wbg.__wbindgen_as_number = function(n) {
        return +c(n)
    }
    ,
    e.wbg.__wbg_String_b9412f8799faab3e = function(n, t) {
        const r = String(c(t))
          , o = h(r, _.__wbindgen_malloc, _.__wbindgen_realloc)
          , f = d;
        u().setInt32(n + 4 * 1, f, !0),
        u().setInt32(n + 4 * 0, o, !0)
    }
    ,
    e.wbg.__wbindgen_number_new = function(n) {
        return i(n)
    }
    ,
    e.wbg.__wbindgen_object_clone_ref = function(n) {
        const t = c(n);
        return i(t)
    }
    ,
    e.wbg.__wbg_getwithrefkey_edc2c8960f0f1191 = function(n, t) {
        const r = c(n)[c(t)];
        return i(r)
    }
    ,
    e.wbg.__wbg_set_f975102236d3c502 = function(n, t, r) {
        c(n)[w(t)] = w(r)
    }
    ,
    e.wbg.__wbg_get_3baa728f9d58d3f6 = function(n, t) {
        const r = c(n)[t >>> 0];
        return i(r)
    }
    ,
    e.wbg.__wbg_length_ae22078168b726f5 = function(n) {
        return c(n).length
    }
    ,
    e.wbg.__wbg_newnoargs_76313bd6ff35d0f2 = function(n, t) {
        const r = new Function(A(n, t));
        return i(r)
    }
    ,
    e.wbg.__wbg_next_de3e9db4440638b2 = function(n) {
        const t = c(n).next;
        return i(t)
    }
    ,
    e.wbg.__wbg_next_f9cb570345655b9a = function() {
        return b(function(n) {
            const t = c(n).next();
            return i(t)
        }, arguments)
    }
    ,
    e.wbg.__wbg_done_bfda7aa8f252b39f = function(n) {
        return c(n).done
    }
    ,
    e.wbg.__wbg_value_6d39332ab4788d86 = function(n) {
        const t = c(n).value;
        return i(t)
    }
    ,
    e.wbg.__wbg_iterator_888179a48810a9fe = function() {
        return i(Symbol.iterator)
    }
    ,
    e.wbg.__wbg_get_224d16597dbbfd96 = function() {
        return b(function(n, t) {
            const r = Reflect.get(c(n), c(t));
            return i(r)
        }, arguments)
    }
    ,
    e.wbg.__wbg_call_1084a111329e68ce = function() {
        return b(function(n, t) {
            const r = c(n).call(c(t));
            return i(r)
        }, arguments)
    }
    ,
    e.wbg.__wbg_new_525245e2b9901204 = function() {
        const n = new Object;
        return i(n)
    }
    ,
    e.wbg.__wbg_self_3093d5d1f7bcb682 = function() {
        return b(function() {
            const n = self.self;
            return i(n)
        }, arguments)
    }
    ,
    e.wbg.__wbg_window_3bcfc4d31bc012f8 = function() {
        return b(function() {
            const n = window.window;
            return i(n)
        }, arguments)
    }
    ,
    e.wbg.__wbg_globalThis_86b222e13bdf32ed = function() {
        return b(function() {
            const n = globalThis.globalThis;
            return i(n)
        }, arguments)
    }
    ,
    e.wbg.__wbg_global_e5a3fe56f8be9485 = function() {
        return b(function() {
            const n = v.global;
            return i(n)
        }, arguments)
    }
    ,
    e.wbg.__wbg_instanceof_ArrayBuffer_61dfc3198373c902 = function(n) {
        let t;
        try {
            t = c(n)instanceof ArrayBuffer
        } catch {
            t = !1
        }
        return t
    }
    ,
    e.wbg.__wbg_call_89af060b4e1523f2 = function() {
        return b(function(n, t, r) {
            const o = c(n).call(c(t), c(r));
            return i(o)
        }, arguments)
    }
    ,
    e.wbg.__wbg_isSafeInteger_7f1ed56200d90674 = function(n) {
        return Number.isSafeInteger(c(n))
    }
    ,
    e.wbg.__wbg_entries_7a0e06255456ebcd = function(n) {
        const t = Object.entries(c(n));
        return i(t)
    }
    ,
    e.wbg.__wbg_buffer_b7b08af79b0b0974 = function(n) {
        const t = c(n).buffer;
        return i(t)
    }
    ,
    e.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9 = function(n, t, r) {
        const o = new Uint8Array(c(n),t >>> 0,r >>> 0);
        return i(o)
    }
    ,
    e.wbg.__wbg_new_ea1883e1e5e86686 = function(n) {
        const t = new Uint8Array(c(n));
        return i(t)
    }
    ,
    e.wbg.__wbg_set_d1e79e2388520f18 = function(n, t, r) {
        c(n).set(c(t), r >>> 0)
    }
    ,
    e.wbg.__wbg_length_8339fcf5d8ecd12e = function(n) {
        return c(n).length
    }
    ,
    e.wbg.__wbg_instanceof_Uint8Array_247a91427532499e = function(n) {
        let t;
        try {
            t = c(n)instanceof Uint8Array
        } catch {
            t = !1
        }
        return t
    }
    ,
    e.wbg.__wbg_newwithlength_ec548f448387c968 = function(n) {
        const t = new Uint8Array(n >>> 0);
        return i(t)
    }
    ,
    e.wbg.__wbg_subarray_7c2e3576afe181d1 = function(n, t, r) {
        const o = c(n).subarray(t >>> 0, r >>> 0);
        return i(o)
    }
    ,
    e.wbg.__wbindgen_bigint_get_as_i64 = function(n, t) {
        const r = c(t)
          , o = typeof r == "bigint" ? r : void 0;
        u().setBigInt64(n + 8 * 1, I(o) ? BigInt(0) : o, !0),
        u().setInt32(n + 4 * 0, !I(o), !0)
    }
    ,
    e.wbg.__wbindgen_debug_string = function(n, t) {
        const r = T(c(t))
          , o = h(r, _.__wbindgen_malloc, _.__wbindgen_realloc)
          , f = d;
        u().setInt32(n + 4 * 1, f, !0),
        u().setInt32(n + 4 * 0, o, !0)
    }
    ,
    e.wbg.__wbindgen_throw = function(n, t) {
        throw new Error(A(n, t))
    }
    ,
    e.wbg.__wbindgen_memory = function() {
        const n = _.memory;
        return i(n)
    }
    ,
    e
}
function L(e, n) {
    return _ = e.exports,
    R.__wbindgen_wasm_module = n,
    l = null,
    p = null,
    _
}
async function R(e) {
    if (_ !== void 0)
        return _;
    e = fetch("https://telegram.blum.codes/_dist/game_wasm_bg-BnV071fP.wasm")
    console.log(e)
    const n = $();
    const {instance: t, module: r} = await D(await e, n);
    return L(t, r)
}
function initWasmSync() {
    const go = new $();
    const wasmFile = 'game_wasm_bg-BnV071fP.wasm';
    const wasmBuffer = fs.readFileSync(wasmFile);
    const wasmModule = new WebAssembly.Module(wasmBuffer);
    const wasmInstance = new WebAssembly.Instance(wasmModule, go);
    L(wasmInstance,wasmModule);
}
initWasmSync()

function encrypt(play_e,id,amount){
    var n = {
        "id": id,
         ...F(play_e)
    }
    return B(play_e, n, {"CLOVER": {"amount": amount}})
}

console.log(encrypt("c0444b6f-6ff3-4ae3-8014-ddeff48ec065","c0444b6f-6ff3-4ae3-8014-ddeff48ec065","100"))

var Fn = {}
;;(function(Yi) {
    var ea = function(Ha) {
        var Fa, Ya = new Float64Array(16);
        if (Ha)
            for (Fa = 0; Fa < Ha.length; Fa++)
                Ya[Fa] = Ha[Fa];
        return Ya
    }
      , ta = function() {
        throw new Error("no PRNG")
    }
      , na = new Uint8Array(16)
      , ra = new Uint8Array(32);
    ra[0] = 9;
    var ia = ea()
      , aa = ea([1])
      , oa = ea([56129, 1])
      , la = ea([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995])
      , sa = ea([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])
      , ca = ea([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
      , ua = ea([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214])
      , da = ea([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
    function ha(Ha, Fa, Ya, $a) {
        Ha[Fa] = Ya >> 24 & 255,
        Ha[Fa + 1] = Ya >> 16 & 255,
        Ha[Fa + 2] = Ya >> 8 & 255,
        Ha[Fa + 3] = Ya & 255,
        Ha[Fa + 4] = $a >> 24 & 255,
        Ha[Fa + 5] = $a >> 16 & 255,
        Ha[Fa + 6] = $a >> 8 & 255,
        Ha[Fa + 7] = $a & 255
    }
    function pa(Ha, Fa, Ya, $a, no) {
        var Co, co = 0;
        for (Co = 0; Co < no; Co++)
            co |= Ha[Fa + Co] ^ Ya[$a + Co];
        return (1 & co - 1 >>> 8) - 1
    }
    function va(Ha, Fa, Ya, $a) {
        return pa(Ha, Fa, Ya, $a, 16)
    }
    function ba(Ha, Fa, Ya, $a) {
        return pa(Ha, Fa, Ya, $a, 32)
    }
    function Ea(Ha, Fa, Ya, $a) {
        for (var no = $a[0] & 255 | ($a[1] & 255) << 8 | ($a[2] & 255) << 16 | ($a[3] & 255) << 24, Co = Ya[0] & 255 | (Ya[1] & 255) << 8 | (Ya[2] & 255) << 16 | (Ya[3] & 255) << 24, co = Ya[4] & 255 | (Ya[5] & 255) << 8 | (Ya[6] & 255) << 16 | (Ya[7] & 255) << 24, mo = Ya[8] & 255 | (Ya[9] & 255) << 8 | (Ya[10] & 255) << 16 | (Ya[11] & 255) << 24, xo = Ya[12] & 255 | (Ya[13] & 255) << 8 | (Ya[14] & 255) << 16 | (Ya[15] & 255) << 24, ko = $a[4] & 255 | ($a[5] & 255) << 8 | ($a[6] & 255) << 16 | ($a[7] & 255) << 24, $o = Fa[0] & 255 | (Fa[1] & 255) << 8 | (Fa[2] & 255) << 16 | (Fa[3] & 255) << 24, Ss = Fa[4] & 255 | (Fa[5] & 255) << 8 | (Fa[6] & 255) << 16 | (Fa[7] & 255) << 24, Xo = Fa[8] & 255 | (Fa[9] & 255) << 8 | (Fa[10] & 255) << 16 | (Fa[11] & 255) << 24, ms = Fa[12] & 255 | (Fa[13] & 255) << 8 | (Fa[14] & 255) << 16 | (Fa[15] & 255) << 24, gs = $a[8] & 255 | ($a[9] & 255) << 8 | ($a[10] & 255) << 16 | ($a[11] & 255) << 24, ys = Ya[16] & 255 | (Ya[17] & 255) << 8 | (Ya[18] & 255) << 16 | (Ya[19] & 255) << 24, Vo = Ya[20] & 255 | (Ya[21] & 255) << 8 | (Ya[22] & 255) << 16 | (Ya[23] & 255) << 24, cs = Ya[24] & 255 | (Ya[25] & 255) << 8 | (Ya[26] & 255) << 16 | (Ya[27] & 255) << 24, Zo = Ya[28] & 255 | (Ya[29] & 255) << 8 | (Ya[30] & 255) << 16 | (Ya[31] & 255) << 24, us = $a[12] & 255 | ($a[13] & 255) << 8 | ($a[14] & 255) << 16 | ($a[15] & 255) << 24, Jo = no, hs = Co, Qo = co, fs = mo, ds = xo, Yo = ko, Bo = $o, Mo = Ss, Uo = Xo, Do = ms, qo = gs, zo = ys, _s = Vo, Ts = cs, Ls = Zo, Cs = us, To, xs = 0; xs < 20; xs += 2)
            To = Jo + _s | 0,
            ds ^= To << 7 | To >>> 25,
            To = ds + Jo | 0,
            Uo ^= To << 9 | To >>> 23,
            To = Uo + ds | 0,
            _s ^= To << 13 | To >>> 19,
            To = _s + Uo | 0,
            Jo ^= To << 18 | To >>> 14,
            To = Yo + hs | 0,
            Do ^= To << 7 | To >>> 25,
            To = Do + Yo | 0,
            Ts ^= To << 9 | To >>> 23,
            To = Ts + Do | 0,
            hs ^= To << 13 | To >>> 19,
            To = hs + Ts | 0,
            Yo ^= To << 18 | To >>> 14,
            To = qo + Bo | 0,
            Ls ^= To << 7 | To >>> 25,
            To = Ls + qo | 0,
            Qo ^= To << 9 | To >>> 23,
            To = Qo + Ls | 0,
            Bo ^= To << 13 | To >>> 19,
            To = Bo + Qo | 0,
            qo ^= To << 18 | To >>> 14,
            To = Cs + zo | 0,
            fs ^= To << 7 | To >>> 25,
            To = fs + Cs | 0,
            Mo ^= To << 9 | To >>> 23,
            To = Mo + fs | 0,
            zo ^= To << 13 | To >>> 19,
            To = zo + Mo | 0,
            Cs ^= To << 18 | To >>> 14,
            To = Jo + fs | 0,
            hs ^= To << 7 | To >>> 25,
            To = hs + Jo | 0,
            Qo ^= To << 9 | To >>> 23,
            To = Qo + hs | 0,
            fs ^= To << 13 | To >>> 19,
            To = fs + Qo | 0,
            Jo ^= To << 18 | To >>> 14,
            To = Yo + ds | 0,
            Bo ^= To << 7 | To >>> 25,
            To = Bo + Yo | 0,
            Mo ^= To << 9 | To >>> 23,
            To = Mo + Bo | 0,
            ds ^= To << 13 | To >>> 19,
            To = ds + Mo | 0,
            Yo ^= To << 18 | To >>> 14,
            To = qo + Do | 0,
            zo ^= To << 7 | To >>> 25,
            To = zo + qo | 0,
            Uo ^= To << 9 | To >>> 23,
            To = Uo + zo | 0,
            Do ^= To << 13 | To >>> 19,
            To = Do + Uo | 0,
            qo ^= To << 18 | To >>> 14,
            To = Cs + Ls | 0,
            _s ^= To << 7 | To >>> 25,
            To = _s + Cs | 0,
            Ts ^= To << 9 | To >>> 23,
            To = Ts + _s | 0,
            Ls ^= To << 13 | To >>> 19,
            To = Ls + Ts | 0,
            Cs ^= To << 18 | To >>> 14;
        Jo = Jo + no | 0,
        hs = hs + Co | 0,
        Qo = Qo + co | 0,
        fs = fs + mo | 0,
        ds = ds + xo | 0,
        Yo = Yo + ko | 0,
        Bo = Bo + $o | 0,
        Mo = Mo + Ss | 0,
        Uo = Uo + Xo | 0,
        Do = Do + ms | 0,
        qo = qo + gs | 0,
        zo = zo + ys | 0,
        _s = _s + Vo | 0,
        Ts = Ts + cs | 0,
        Ls = Ls + Zo | 0,
        Cs = Cs + us | 0,
        Ha[0] = Jo >>> 0 & 255,
        Ha[1] = Jo >>> 8 & 255,
        Ha[2] = Jo >>> 16 & 255,
        Ha[3] = Jo >>> 24 & 255,
        Ha[4] = hs >>> 0 & 255,
        Ha[5] = hs >>> 8 & 255,
        Ha[6] = hs >>> 16 & 255,
        Ha[7] = hs >>> 24 & 255,
        Ha[8] = Qo >>> 0 & 255,
        Ha[9] = Qo >>> 8 & 255,
        Ha[10] = Qo >>> 16 & 255,
        Ha[11] = Qo >>> 24 & 255,
        Ha[12] = fs >>> 0 & 255,
        Ha[13] = fs >>> 8 & 255,
        Ha[14] = fs >>> 16 & 255,
        Ha[15] = fs >>> 24 & 255,
        Ha[16] = ds >>> 0 & 255,
        Ha[17] = ds >>> 8 & 255,
        Ha[18] = ds >>> 16 & 255,
        Ha[19] = ds >>> 24 & 255,
        Ha[20] = Yo >>> 0 & 255,
        Ha[21] = Yo >>> 8 & 255,
        Ha[22] = Yo >>> 16 & 255,
        Ha[23] = Yo >>> 24 & 255,
        Ha[24] = Bo >>> 0 & 255,
        Ha[25] = Bo >>> 8 & 255,
        Ha[26] = Bo >>> 16 & 255,
        Ha[27] = Bo >>> 24 & 255,
        Ha[28] = Mo >>> 0 & 255,
        Ha[29] = Mo >>> 8 & 255,
        Ha[30] = Mo >>> 16 & 255,
        Ha[31] = Mo >>> 24 & 255,
        Ha[32] = Uo >>> 0 & 255,
        Ha[33] = Uo >>> 8 & 255,
        Ha[34] = Uo >>> 16 & 255,
        Ha[35] = Uo >>> 24 & 255,
        Ha[36] = Do >>> 0 & 255,
        Ha[37] = Do >>> 8 & 255,
        Ha[38] = Do >>> 16 & 255,
        Ha[39] = Do >>> 24 & 255,
        Ha[40] = qo >>> 0 & 255,
        Ha[41] = qo >>> 8 & 255,
        Ha[42] = qo >>> 16 & 255,
        Ha[43] = qo >>> 24 & 255,
        Ha[44] = zo >>> 0 & 255,
        Ha[45] = zo >>> 8 & 255,
        Ha[46] = zo >>> 16 & 255,
        Ha[47] = zo >>> 24 & 255,
        Ha[48] = _s >>> 0 & 255,
        Ha[49] = _s >>> 8 & 255,
        Ha[50] = _s >>> 16 & 255,
        Ha[51] = _s >>> 24 & 255,
        Ha[52] = Ts >>> 0 & 255,
        Ha[53] = Ts >>> 8 & 255,
        Ha[54] = Ts >>> 16 & 255,
        Ha[55] = Ts >>> 24 & 255,
        Ha[56] = Ls >>> 0 & 255,
        Ha[57] = Ls >>> 8 & 255,
        Ha[58] = Ls >>> 16 & 255,
        Ha[59] = Ls >>> 24 & 255,
        Ha[60] = Cs >>> 0 & 255,
        Ha[61] = Cs >>> 8 & 255,
        Ha[62] = Cs >>> 16 & 255,
        Ha[63] = Cs >>> 24 & 255
    }
    function Sa(Ha, Fa, Ya, $a) {
        for (var no = $a[0] & 255 | ($a[1] & 255) << 8 | ($a[2] & 255) << 16 | ($a[3] & 255) << 24, Co = Ya[0] & 255 | (Ya[1] & 255) << 8 | (Ya[2] & 255) << 16 | (Ya[3] & 255) << 24, co = Ya[4] & 255 | (Ya[5] & 255) << 8 | (Ya[6] & 255) << 16 | (Ya[7] & 255) << 24, mo = Ya[8] & 255 | (Ya[9] & 255) << 8 | (Ya[10] & 255) << 16 | (Ya[11] & 255) << 24, xo = Ya[12] & 255 | (Ya[13] & 255) << 8 | (Ya[14] & 255) << 16 | (Ya[15] & 255) << 24, ko = $a[4] & 255 | ($a[5] & 255) << 8 | ($a[6] & 255) << 16 | ($a[7] & 255) << 24, $o = Fa[0] & 255 | (Fa[1] & 255) << 8 | (Fa[2] & 255) << 16 | (Fa[3] & 255) << 24, Ss = Fa[4] & 255 | (Fa[5] & 255) << 8 | (Fa[6] & 255) << 16 | (Fa[7] & 255) << 24, Xo = Fa[8] & 255 | (Fa[9] & 255) << 8 | (Fa[10] & 255) << 16 | (Fa[11] & 255) << 24, ms = Fa[12] & 255 | (Fa[13] & 255) << 8 | (Fa[14] & 255) << 16 | (Fa[15] & 255) << 24, gs = $a[8] & 255 | ($a[9] & 255) << 8 | ($a[10] & 255) << 16 | ($a[11] & 255) << 24, ys = Ya[16] & 255 | (Ya[17] & 255) << 8 | (Ya[18] & 255) << 16 | (Ya[19] & 255) << 24, Vo = Ya[20] & 255 | (Ya[21] & 255) << 8 | (Ya[22] & 255) << 16 | (Ya[23] & 255) << 24, cs = Ya[24] & 255 | (Ya[25] & 255) << 8 | (Ya[26] & 255) << 16 | (Ya[27] & 255) << 24, Zo = Ya[28] & 255 | (Ya[29] & 255) << 8 | (Ya[30] & 255) << 16 | (Ya[31] & 255) << 24, us = $a[12] & 255 | ($a[13] & 255) << 8 | ($a[14] & 255) << 16 | ($a[15] & 255) << 24, Jo = no, hs = Co, Qo = co, fs = mo, ds = xo, Yo = ko, Bo = $o, Mo = Ss, Uo = Xo, Do = ms, qo = gs, zo = ys, _s = Vo, Ts = cs, Ls = Zo, Cs = us, To, xs = 0; xs < 20; xs += 2)
            To = Jo + _s | 0,
            ds ^= To << 7 | To >>> 25,
            To = ds + Jo | 0,
            Uo ^= To << 9 | To >>> 23,
            To = Uo + ds | 0,
            _s ^= To << 13 | To >>> 19,
            To = _s + Uo | 0,
            Jo ^= To << 18 | To >>> 14,
            To = Yo + hs | 0,
            Do ^= To << 7 | To >>> 25,
            To = Do + Yo | 0,
            Ts ^= To << 9 | To >>> 23,
            To = Ts + Do | 0,
            hs ^= To << 13 | To >>> 19,
            To = hs + Ts | 0,
            Yo ^= To << 18 | To >>> 14,
            To = qo + Bo | 0,
            Ls ^= To << 7 | To >>> 25,
            To = Ls + qo | 0,
            Qo ^= To << 9 | To >>> 23,
            To = Qo + Ls | 0,
            Bo ^= To << 13 | To >>> 19,
            To = Bo + Qo | 0,
            qo ^= To << 18 | To >>> 14,
            To = Cs + zo | 0,
            fs ^= To << 7 | To >>> 25,
            To = fs + Cs | 0,
            Mo ^= To << 9 | To >>> 23,
            To = Mo + fs | 0,
            zo ^= To << 13 | To >>> 19,
            To = zo + Mo | 0,
            Cs ^= To << 18 | To >>> 14,
            To = Jo + fs | 0,
            hs ^= To << 7 | To >>> 25,
            To = hs + Jo | 0,
            Qo ^= To << 9 | To >>> 23,
            To = Qo + hs | 0,
            fs ^= To << 13 | To >>> 19,
            To = fs + Qo | 0,
            Jo ^= To << 18 | To >>> 14,
            To = Yo + ds | 0,
            Bo ^= To << 7 | To >>> 25,
            To = Bo + Yo | 0,
            Mo ^= To << 9 | To >>> 23,
            To = Mo + Bo | 0,
            ds ^= To << 13 | To >>> 19,
            To = ds + Mo | 0,
            Yo ^= To << 18 | To >>> 14,
            To = qo + Do | 0,
            zo ^= To << 7 | To >>> 25,
            To = zo + qo | 0,
            Uo ^= To << 9 | To >>> 23,
            To = Uo + zo | 0,
            Do ^= To << 13 | To >>> 19,
            To = Do + Uo | 0,
            qo ^= To << 18 | To >>> 14,
            To = Cs + Ls | 0,
            _s ^= To << 7 | To >>> 25,
            To = _s + Cs | 0,
            Ts ^= To << 9 | To >>> 23,
            To = Ts + _s | 0,
            Ls ^= To << 13 | To >>> 19,
            To = Ls + Ts | 0,
            Cs ^= To << 18 | To >>> 14;
        Ha[0] = Jo >>> 0 & 255,
        Ha[1] = Jo >>> 8 & 255,
        Ha[2] = Jo >>> 16 & 255,
        Ha[3] = Jo >>> 24 & 255,
        Ha[4] = Yo >>> 0 & 255,
        Ha[5] = Yo >>> 8 & 255,
        Ha[6] = Yo >>> 16 & 255,
        Ha[7] = Yo >>> 24 & 255,
        Ha[8] = qo >>> 0 & 255,
        Ha[9] = qo >>> 8 & 255,
        Ha[10] = qo >>> 16 & 255,
        Ha[11] = qo >>> 24 & 255,
        Ha[12] = Cs >>> 0 & 255,
        Ha[13] = Cs >>> 8 & 255,
        Ha[14] = Cs >>> 16 & 255,
        Ha[15] = Cs >>> 24 & 255,
        Ha[16] = Bo >>> 0 & 255,
        Ha[17] = Bo >>> 8 & 255,
        Ha[18] = Bo >>> 16 & 255,
        Ha[19] = Bo >>> 24 & 255,
        Ha[20] = Mo >>> 0 & 255,
        Ha[21] = Mo >>> 8 & 255,
        Ha[22] = Mo >>> 16 & 255,
        Ha[23] = Mo >>> 24 & 255,
        Ha[24] = Uo >>> 0 & 255,
        Ha[25] = Uo >>> 8 & 255,
        Ha[26] = Uo >>> 16 & 255,
        Ha[27] = Uo >>> 24 & 255,
        Ha[28] = Do >>> 0 & 255,
        Ha[29] = Do >>> 8 & 255,
        Ha[30] = Do >>> 16 & 255,
        Ha[31] = Do >>> 24 & 255
    }
    function Ca(Ha, Fa, Ya, $a) {
        Ea(Ha, Fa, Ya, $a)
    }
    function ka(Ha, Fa, Ya, $a) {
        Sa(Ha, Fa, Ya, $a)
    }
    var Pa = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
    function ja(Ha, Fa, Ya, $a, no, Co, co) {
        var mo = new Uint8Array(16), xo = new Uint8Array(64), ko, $o;
        for ($o = 0; $o < 16; $o++)
            mo[$o] = 0;
        for ($o = 0; $o < 8; $o++)
            mo[$o] = Co[$o];
        for (; no >= 64; ) {
            for (Ca(xo, mo, co, Pa),
            $o = 0; $o < 64; $o++)
                Ha[Fa + $o] = Ya[$a + $o] ^ xo[$o];
            for (ko = 1,
            $o = 8; $o < 16; $o++)
                ko = ko + (mo[$o] & 255) | 0,
                mo[$o] = ko & 255,
                ko >>>= 8;
            no -= 64,
            Fa += 64,
            $a += 64
        }
        if (no > 0)
            for (Ca(xo, mo, co, Pa),
            $o = 0; $o < no; $o++)
                Ha[Fa + $o] = Ya[$a + $o] ^ xo[$o];
        return 0
    }
    function Za(Ha, Fa, Ya, $a, no) {
        var Co = new Uint8Array(16), co = new Uint8Array(64), mo, xo;
        for (xo = 0; xo < 16; xo++)
            Co[xo] = 0;
        for (xo = 0; xo < 8; xo++)
            Co[xo] = $a[xo];
        for (; Ya >= 64; ) {
            for (Ca(co, Co, no, Pa),
            xo = 0; xo < 64; xo++)
                Ha[Fa + xo] = co[xo];
            for (mo = 1,
            xo = 8; xo < 16; xo++)
                mo = mo + (Co[xo] & 255) | 0,
                Co[xo] = mo & 255,
                mo >>>= 8;
            Ya -= 64,
            Fa += 64
        }
        if (Ya > 0)
            for (Ca(co, Co, no, Pa),
            xo = 0; xo < Ya; xo++)
                Ha[Fa + xo] = co[xo];
        return 0
    }
    function Ga(Ha, Fa, Ya, $a, no) {
        var Co = new Uint8Array(32);
        ka(Co, $a, no, Pa);
        for (var co = new Uint8Array(8), mo = 0; mo < 8; mo++)
            co[mo] = $a[mo + 16];
        return Za(Ha, Fa, Ya, co, Co)
    }
    function Ja(Ha, Fa, Ya, $a, no, Co, co) {
        var mo = new Uint8Array(32);
        ka(mo, Co, co, Pa);
        for (var xo = new Uint8Array(8), ko = 0; ko < 8; ko++)
            xo[ko] = Co[ko + 16];
        return ja(Ha, Fa, Ya, $a, no, xo, mo)
    }
    var Ua = function(Ha) {
        this.buffer = new Uint8Array(16),
        this.r = new Uint16Array(10),
        this.h = new Uint16Array(10),
        this.pad = new Uint16Array(8),
        this.leftover = 0,
        this.fin = 0;
        var Fa, Ya, $a, no, Co, co, mo, xo;
        Fa = Ha[0] & 255 | (Ha[1] & 255) << 8,
        this.r[0] = Fa & 8191,
        Ya = Ha[2] & 255 | (Ha[3] & 255) << 8,
        this.r[1] = (Fa >>> 13 | Ya << 3) & 8191,
        $a = Ha[4] & 255 | (Ha[5] & 255) << 8,
        this.r[2] = (Ya >>> 10 | $a << 6) & 7939,
        no = Ha[6] & 255 | (Ha[7] & 255) << 8,
        this.r[3] = ($a >>> 7 | no << 9) & 8191,
        Co = Ha[8] & 255 | (Ha[9] & 255) << 8,
        this.r[4] = (no >>> 4 | Co << 12) & 255,
        this.r[5] = Co >>> 1 & 8190,
        co = Ha[10] & 255 | (Ha[11] & 255) << 8,
        this.r[6] = (Co >>> 14 | co << 2) & 8191,
        mo = Ha[12] & 255 | (Ha[13] & 255) << 8,
        this.r[7] = (co >>> 11 | mo << 5) & 8065,
        xo = Ha[14] & 255 | (Ha[15] & 255) << 8,
        this.r[8] = (mo >>> 8 | xo << 8) & 8191,
        this.r[9] = xo >>> 5 & 127,
        this.pad[0] = Ha[16] & 255 | (Ha[17] & 255) << 8,
        this.pad[1] = Ha[18] & 255 | (Ha[19] & 255) << 8,
        this.pad[2] = Ha[20] & 255 | (Ha[21] & 255) << 8,
        this.pad[3] = Ha[22] & 255 | (Ha[23] & 255) << 8,
        this.pad[4] = Ha[24] & 255 | (Ha[25] & 255) << 8,
        this.pad[5] = Ha[26] & 255 | (Ha[27] & 255) << 8,
        this.pad[6] = Ha[28] & 255 | (Ha[29] & 255) << 8,
        this.pad[7] = Ha[30] & 255 | (Ha[31] & 255) << 8
    };
    Ua.prototype.blocks = function(Ha, Fa, Ya) {
        for (var $a = this.fin ? 0 : 2048, no, Co, co, mo, xo, ko, $o, Ss, Xo, ms, gs, ys, Vo, cs, Zo, us, Jo, hs, Qo, fs = this.h[0], ds = this.h[1], Yo = this.h[2], Bo = this.h[3], Mo = this.h[4], Uo = this.h[5], Do = this.h[6], qo = this.h[7], zo = this.h[8], _s = this.h[9], Ts = this.r[0], Ls = this.r[1], Cs = this.r[2], To = this.r[3], xs = this.r[4], Rs = this.r[5], ks = this.r[6], Ms = this.r[7], As = this.r[8], Is = this.r[9]; Ya >= 16; )
            no = Ha[Fa + 0] & 255 | (Ha[Fa + 1] & 255) << 8,
            fs += no & 8191,
            Co = Ha[Fa + 2] & 255 | (Ha[Fa + 3] & 255) << 8,
            ds += (no >>> 13 | Co << 3) & 8191,
            co = Ha[Fa + 4] & 255 | (Ha[Fa + 5] & 255) << 8,
            Yo += (Co >>> 10 | co << 6) & 8191,
            mo = Ha[Fa + 6] & 255 | (Ha[Fa + 7] & 255) << 8,
            Bo += (co >>> 7 | mo << 9) & 8191,
            xo = Ha[Fa + 8] & 255 | (Ha[Fa + 9] & 255) << 8,
            Mo += (mo >>> 4 | xo << 12) & 8191,
            Uo += xo >>> 1 & 8191,
            ko = Ha[Fa + 10] & 255 | (Ha[Fa + 11] & 255) << 8,
            Do += (xo >>> 14 | ko << 2) & 8191,
            $o = Ha[Fa + 12] & 255 | (Ha[Fa + 13] & 255) << 8,
            qo += (ko >>> 11 | $o << 5) & 8191,
            Ss = Ha[Fa + 14] & 255 | (Ha[Fa + 15] & 255) << 8,
            zo += ($o >>> 8 | Ss << 8) & 8191,
            _s += Ss >>> 5 | $a,
            Xo = 0,
            ms = Xo,
            ms += fs * Ts,
            ms += ds * (5 * Is),
            ms += Yo * (5 * As),
            ms += Bo * (5 * Ms),
            ms += Mo * (5 * ks),
            Xo = ms >>> 13,
            ms &= 8191,
            ms += Uo * (5 * Rs),
            ms += Do * (5 * xs),
            ms += qo * (5 * To),
            ms += zo * (5 * Cs),
            ms += _s * (5 * Ls),
            Xo += ms >>> 13,
            ms &= 8191,
            gs = Xo,
            gs += fs * Ls,
            gs += ds * Ts,
            gs += Yo * (5 * Is),
            gs += Bo * (5 * As),
            gs += Mo * (5 * Ms),
            Xo = gs >>> 13,
            gs &= 8191,
            gs += Uo * (5 * ks),
            gs += Do * (5 * Rs),
            gs += qo * (5 * xs),
            gs += zo * (5 * To),
            gs += _s * (5 * Cs),
            Xo += gs >>> 13,
            gs &= 8191,
            ys = Xo,
            ys += fs * Cs,
            ys += ds * Ls,
            ys += Yo * Ts,
            ys += Bo * (5 * Is),
            ys += Mo * (5 * As),
            Xo = ys >>> 13,
            ys &= 8191,
            ys += Uo * (5 * Ms),
            ys += Do * (5 * ks),
            ys += qo * (5 * Rs),
            ys += zo * (5 * xs),
            ys += _s * (5 * To),
            Xo += ys >>> 13,
            ys &= 8191,
            Vo = Xo,
            Vo += fs * To,
            Vo += ds * Cs,
            Vo += Yo * Ls,
            Vo += Bo * Ts,
            Vo += Mo * (5 * Is),
            Xo = Vo >>> 13,
            Vo &= 8191,
            Vo += Uo * (5 * As),
            Vo += Do * (5 * Ms),
            Vo += qo * (5 * ks),
            Vo += zo * (5 * Rs),
            Vo += _s * (5 * xs),
            Xo += Vo >>> 13,
            Vo &= 8191,
            cs = Xo,
            cs += fs * xs,
            cs += ds * To,
            cs += Yo * Cs,
            cs += Bo * Ls,
            cs += Mo * Ts,
            Xo = cs >>> 13,
            cs &= 8191,
            cs += Uo * (5 * Is),
            cs += Do * (5 * As),
            cs += qo * (5 * Ms),
            cs += zo * (5 * ks),
            cs += _s * (5 * Rs),
            Xo += cs >>> 13,
            cs &= 8191,
            Zo = Xo,
            Zo += fs * Rs,
            Zo += ds * xs,
            Zo += Yo * To,
            Zo += Bo * Cs,
            Zo += Mo * Ls,
            Xo = Zo >>> 13,
            Zo &= 8191,
            Zo += Uo * Ts,
            Zo += Do * (5 * Is),
            Zo += qo * (5 * As),
            Zo += zo * (5 * Ms),
            Zo += _s * (5 * ks),
            Xo += Zo >>> 13,
            Zo &= 8191,
            us = Xo,
            us += fs * ks,
            us += ds * Rs,
            us += Yo * xs,
            us += Bo * To,
            us += Mo * Cs,
            Xo = us >>> 13,
            us &= 8191,
            us += Uo * Ls,
            us += Do * Ts,
            us += qo * (5 * Is),
            us += zo * (5 * As),
            us += _s * (5 * Ms),
            Xo += us >>> 13,
            us &= 8191,
            Jo = Xo,
            Jo += fs * Ms,
            Jo += ds * ks,
            Jo += Yo * Rs,
            Jo += Bo * xs,
            Jo += Mo * To,
            Xo = Jo >>> 13,
            Jo &= 8191,
            Jo += Uo * Cs,
            Jo += Do * Ls,
            Jo += qo * Ts,
            Jo += zo * (5 * Is),
            Jo += _s * (5 * As),
            Xo += Jo >>> 13,
            Jo &= 8191,
            hs = Xo,
            hs += fs * As,
            hs += ds * Ms,
            hs += Yo * ks,
            hs += Bo * Rs,
            hs += Mo * xs,
            Xo = hs >>> 13,
            hs &= 8191,
            hs += Uo * To,
            hs += Do * Cs,
            hs += qo * Ls,
            hs += zo * Ts,
            hs += _s * (5 * Is),
            Xo += hs >>> 13,
            hs &= 8191,
            Qo = Xo,
            Qo += fs * Is,
            Qo += ds * As,
            Qo += Yo * Ms,
            Qo += Bo * ks,
            Qo += Mo * Rs,
            Xo = Qo >>> 13,
            Qo &= 8191,
            Qo += Uo * xs,
            Qo += Do * To,
            Qo += qo * Cs,
            Qo += zo * Ls,
            Qo += _s * Ts,
            Xo += Qo >>> 13,
            Qo &= 8191,
            Xo = (Xo << 2) + Xo | 0,
            Xo = Xo + ms | 0,
            ms = Xo & 8191,
            Xo = Xo >>> 13,
            gs += Xo,
            fs = ms,
            ds = gs,
            Yo = ys,
            Bo = Vo,
            Mo = cs,
            Uo = Zo,
            Do = us,
            qo = Jo,
            zo = hs,
            _s = Qo,
            Fa += 16,
            Ya -= 16;
        this.h[0] = fs,
        this.h[1] = ds,
        this.h[2] = Yo,
        this.h[3] = Bo,
        this.h[4] = Mo,
        this.h[5] = Uo,
        this.h[6] = Do,
        this.h[7] = qo,
        this.h[8] = zo,
        this.h[9] = _s
    }
    ,
    Ua.prototype.finish = function(Ha, Fa) {
        var Ya = new Uint16Array(10), $a, no, Co, co;
        if (this.leftover) {
            for (co = this.leftover,
            this.buffer[co++] = 1; co < 16; co++)
                this.buffer[co] = 0;
            this.fin = 1,
            this.blocks(this.buffer, 0, 16)
        }
        for ($a = this.h[1] >>> 13,
        this.h[1] &= 8191,
        co = 2; co < 10; co++)
            this.h[co] += $a,
            $a = this.h[co] >>> 13,
            this.h[co] &= 8191;
        for (this.h[0] += $a * 5,
        $a = this.h[0] >>> 13,
        this.h[0] &= 8191,
        this.h[1] += $a,
        $a = this.h[1] >>> 13,
        this.h[1] &= 8191,
        this.h[2] += $a,
        Ya[0] = this.h[0] + 5,
        $a = Ya[0] >>> 13,
        Ya[0] &= 8191,
        co = 1; co < 10; co++)
            Ya[co] = this.h[co] + $a,
            $a = Ya[co] >>> 13,
            Ya[co] &= 8191;
        for (Ya[9] -= 8192,
        no = ($a ^ 1) - 1,
        co = 0; co < 10; co++)
            Ya[co] &= no;
        for (no = ~no,
        co = 0; co < 10; co++)
            this.h[co] = this.h[co] & no | Ya[co];
        for (this.h[0] = (this.h[0] | this.h[1] << 13) & 65535,
        this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535,
        this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535,
        this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535,
        this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535,
        this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535,
        this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535,
        this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535,
        Co = this.h[0] + this.pad[0],
        this.h[0] = Co & 65535,
        co = 1; co < 8; co++)
            Co = (this.h[co] + this.pad[co] | 0) + (Co >>> 16) | 0,
            this.h[co] = Co & 65535;
        Ha[Fa + 0] = this.h[0] >>> 0 & 255,
        Ha[Fa + 1] = this.h[0] >>> 8 & 255,
        Ha[Fa + 2] = this.h[1] >>> 0 & 255,
        Ha[Fa + 3] = this.h[1] >>> 8 & 255,
        Ha[Fa + 4] = this.h[2] >>> 0 & 255,
        Ha[Fa + 5] = this.h[2] >>> 8 & 255,
        Ha[Fa + 6] = this.h[3] >>> 0 & 255,
        Ha[Fa + 7] = this.h[3] >>> 8 & 255,
        Ha[Fa + 8] = this.h[4] >>> 0 & 255,
        Ha[Fa + 9] = this.h[4] >>> 8 & 255,
        Ha[Fa + 10] = this.h[5] >>> 0 & 255,
        Ha[Fa + 11] = this.h[5] >>> 8 & 255,
        Ha[Fa + 12] = this.h[6] >>> 0 & 255,
        Ha[Fa + 13] = this.h[6] >>> 8 & 255,
        Ha[Fa + 14] = this.h[7] >>> 0 & 255,
        Ha[Fa + 15] = this.h[7] >>> 8 & 255
    }
    ,
    Ua.prototype.update = function(Ha, Fa, Ya) {
        var $a, no;
        if (this.leftover) {
            for (no = 16 - this.leftover,
            no > Ya && (no = Ya),
            $a = 0; $a < no; $a++)
                this.buffer[this.leftover + $a] = Ha[Fa + $a];
            if (Ya -= no,
            Fa += no,
            this.leftover += no,
            this.leftover < 16)
                return;
            this.blocks(this.buffer, 0, 16),
            this.leftover = 0
        }
        if (Ya >= 16 && (no = Ya - Ya % 16,
        this.blocks(Ha, Fa, no),
        Fa += no,
        Ya -= no),
        Ya) {
            for ($a = 0; $a < Ya; $a++)
                this.buffer[this.leftover + $a] = Ha[Fa + $a];
            this.leftover += Ya
        }
    }
    ;
    function xa(Ha, Fa, Ya, $a, no, Co) {
        var co = new Ua(Co);
        return co.update(Ya, $a, no),
        co.finish(Ha, Fa),
        0
    }
    function ma(Ha, Fa, Ya, $a, no, Co) {
        var co = new Uint8Array(16);
        return xa(co, 0, Ya, $a, no, Co),
        va(Ha, Fa, co, 0)
    }
    function fa(Ha, Fa, Ya, $a, no) {
        var Co;
        if (Ya < 32)
            return -1;
        for (Ja(Ha, 0, Fa, 0, Ya, $a, no),
        xa(Ha, 16, Ha, 32, Ya - 32, Ha),
        Co = 0; Co < 16; Co++)
            Ha[Co] = 0;
        return 0
    }
    function ga(Ha, Fa, Ya, $a, no) {
        var Co, co = new Uint8Array(32);
        if (Ya < 32 || (Ga(co, 0, 32, $a, no),
        ma(Fa, 16, Fa, 32, Ya - 32, co) !== 0))
            return -1;
        for (Ja(Ha, 0, Fa, 0, Ya, $a, no),
        Co = 0; Co < 32; Co++)
            Ha[Co] = 0;
        return 0
    }
    function wa(Ha, Fa) {
        var Ya;
        for (Ya = 0; Ya < 16; Ya++)
            Ha[Ya] = Fa[Ya] | 0
    }
    function Ma(Ha) {
        var Fa, Ya, $a = 1;
        for (Fa = 0; Fa < 16; Fa++)
            Ya = Ha[Fa] + $a + 65535,
            $a = Math.floor(Ya / 65536),
            Ha[Fa] = Ya - $a * 65536;
        Ha[0] += $a - 1 + 37 * ($a - 1)
    }
    function Aa(Ha, Fa, Ya) {
        for (var $a, no = ~(Ya - 1), Co = 0; Co < 16; Co++)
            $a = no & (Ha[Co] ^ Fa[Co]),
            Ha[Co] ^= $a,
            Fa[Co] ^= $a
    }
    function Ra(Ha, Fa) {
        var Ya, $a, no, Co = ea(), co = ea();
        for (Ya = 0; Ya < 16; Ya++)
            co[Ya] = Fa[Ya];
        for (Ma(co),
        Ma(co),
        Ma(co),
        $a = 0; $a < 2; $a++) {
            for (Co[0] = co[0] - 65517,
            Ya = 1; Ya < 15; Ya++)
                Co[Ya] = co[Ya] - 65535 - (Co[Ya - 1] >> 16 & 1),
                Co[Ya - 1] &= 65535;
            Co[15] = co[15] - 32767 - (Co[14] >> 16 & 1),
            no = Co[15] >> 16 & 1,
            Co[14] &= 65535,
            Aa(co, Co, 1 - no)
        }
        for (Ya = 0; Ya < 16; Ya++)
            Ha[2 * Ya] = co[Ya] & 255,
            Ha[2 * Ya + 1] = co[Ya] >> 8
    }
    function Ta(Ha, Fa) {
        var Ya = new Uint8Array(32)
          , $a = new Uint8Array(32);
        return Ra(Ya, Ha),
        Ra($a, Fa),
        ba(Ya, 0, $a, 0)
    }
    function La(Ha) {
        var Fa = new Uint8Array(32);
        return Ra(Fa, Ha),
        Fa[0] & 1
    }
    function ya(Ha, Fa) {
        var Ya;
        for (Ya = 0; Ya < 16; Ya++)
            Ha[Ya] = Fa[2 * Ya] + (Fa[2 * Ya + 1] << 8);
        Ha[15] &= 32767
    }
    function Ba(Ha, Fa, Ya) {
        for (var $a = 0; $a < 16; $a++)
            Ha[$a] = Fa[$a] + Ya[$a]
    }
    function io(Ha, Fa, Ya) {
        for (var $a = 0; $a < 16; $a++)
            Ha[$a] = Fa[$a] - Ya[$a]
    }
    function oo(Ha, Fa, Ya) {
        var $a, no, Co = 0, co = 0, mo = 0, xo = 0, ko = 0, $o = 0, Ss = 0, Xo = 0, ms = 0, gs = 0, ys = 0, Vo = 0, cs = 0, Zo = 0, us = 0, Jo = 0, hs = 0, Qo = 0, fs = 0, ds = 0, Yo = 0, Bo = 0, Mo = 0, Uo = 0, Do = 0, qo = 0, zo = 0, _s = 0, Ts = 0, Ls = 0, Cs = 0, To = Ya[0], xs = Ya[1], Rs = Ya[2], ks = Ya[3], Ms = Ya[4], As = Ya[5], Is = Ya[6], Ns = Ya[7], Bs = Ya[8], Os = Ya[9], $s = Ya[10], Ps = Ya[11], Ds = Ya[12], Hs = Ya[13], Us = Ya[14], Fs = Ya[15];
        $a = Fa[0],
        Co += $a * To,
        co += $a * xs,
        mo += $a * Rs,
        xo += $a * ks,
        ko += $a * Ms,
        $o += $a * As,
        Ss += $a * Is,
        Xo += $a * Ns,
        ms += $a * Bs,
        gs += $a * Os,
        ys += $a * $s,
        Vo += $a * Ps,
        cs += $a * Ds,
        Zo += $a * Hs,
        us += $a * Us,
        Jo += $a * Fs,
        $a = Fa[1],
        co += $a * To,
        mo += $a * xs,
        xo += $a * Rs,
        ko += $a * ks,
        $o += $a * Ms,
        Ss += $a * As,
        Xo += $a * Is,
        ms += $a * Ns,
        gs += $a * Bs,
        ys += $a * Os,
        Vo += $a * $s,
        cs += $a * Ps,
        Zo += $a * Ds,
        us += $a * Hs,
        Jo += $a * Us,
        hs += $a * Fs,
        $a = Fa[2],
        mo += $a * To,
        xo += $a * xs,
        ko += $a * Rs,
        $o += $a * ks,
        Ss += $a * Ms,
        Xo += $a * As,
        ms += $a * Is,
        gs += $a * Ns,
        ys += $a * Bs,
        Vo += $a * Os,
        cs += $a * $s,
        Zo += $a * Ps,
        us += $a * Ds,
        Jo += $a * Hs,
        hs += $a * Us,
        Qo += $a * Fs,
        $a = Fa[3],
        xo += $a * To,
        ko += $a * xs,
        $o += $a * Rs,
        Ss += $a * ks,
        Xo += $a * Ms,
        ms += $a * As,
        gs += $a * Is,
        ys += $a * Ns,
        Vo += $a * Bs,
        cs += $a * Os,
        Zo += $a * $s,
        us += $a * Ps,
        Jo += $a * Ds,
        hs += $a * Hs,
        Qo += $a * Us,
        fs += $a * Fs,
        $a = Fa[4],
        ko += $a * To,
        $o += $a * xs,
        Ss += $a * Rs,
        Xo += $a * ks,
        ms += $a * Ms,
        gs += $a * As,
        ys += $a * Is,
        Vo += $a * Ns,
        cs += $a * Bs,
        Zo += $a * Os,
        us += $a * $s,
        Jo += $a * Ps,
        hs += $a * Ds,
        Qo += $a * Hs,
        fs += $a * Us,
        ds += $a * Fs,
        $a = Fa[5],
        $o += $a * To,
        Ss += $a * xs,
        Xo += $a * Rs,
        ms += $a * ks,
        gs += $a * Ms,
        ys += $a * As,
        Vo += $a * Is,
        cs += $a * Ns,
        Zo += $a * Bs,
        us += $a * Os,
        Jo += $a * $s,
        hs += $a * Ps,
        Qo += $a * Ds,
        fs += $a * Hs,
        ds += $a * Us,
        Yo += $a * Fs,
        $a = Fa[6],
        Ss += $a * To,
        Xo += $a * xs,
        ms += $a * Rs,
        gs += $a * ks,
        ys += $a * Ms,
        Vo += $a * As,
        cs += $a * Is,
        Zo += $a * Ns,
        us += $a * Bs,
        Jo += $a * Os,
        hs += $a * $s,
        Qo += $a * Ps,
        fs += $a * Ds,
        ds += $a * Hs,
        Yo += $a * Us,
        Bo += $a * Fs,
        $a = Fa[7],
        Xo += $a * To,
        ms += $a * xs,
        gs += $a * Rs,
        ys += $a * ks,
        Vo += $a * Ms,
        cs += $a * As,
        Zo += $a * Is,
        us += $a * Ns,
        Jo += $a * Bs,
        hs += $a * Os,
        Qo += $a * $s,
        fs += $a * Ps,
        ds += $a * Ds,
        Yo += $a * Hs,
        Bo += $a * Us,
        Mo += $a * Fs,
        $a = Fa[8],
        ms += $a * To,
        gs += $a * xs,
        ys += $a * Rs,
        Vo += $a * ks,
        cs += $a * Ms,
        Zo += $a * As,
        us += $a * Is,
        Jo += $a * Ns,
        hs += $a * Bs,
        Qo += $a * Os,
        fs += $a * $s,
        ds += $a * Ps,
        Yo += $a * Ds,
        Bo += $a * Hs,
        Mo += $a * Us,
        Uo += $a * Fs,
        $a = Fa[9],
        gs += $a * To,
        ys += $a * xs,
        Vo += $a * Rs,
        cs += $a * ks,
        Zo += $a * Ms,
        us += $a * As,
        Jo += $a * Is,
        hs += $a * Ns,
        Qo += $a * Bs,
        fs += $a * Os,
        ds += $a * $s,
        Yo += $a * Ps,
        Bo += $a * Ds,
        Mo += $a * Hs,
        Uo += $a * Us,
        Do += $a * Fs,
        $a = Fa[10],
        ys += $a * To,
        Vo += $a * xs,
        cs += $a * Rs,
        Zo += $a * ks,
        us += $a * Ms,
        Jo += $a * As,
        hs += $a * Is,
        Qo += $a * Ns,
        fs += $a * Bs,
        ds += $a * Os,
        Yo += $a * $s,
        Bo += $a * Ps,
        Mo += $a * Ds,
        Uo += $a * Hs,
        Do += $a * Us,
        qo += $a * Fs,
        $a = Fa[11],
        Vo += $a * To,
        cs += $a * xs,
        Zo += $a * Rs,
        us += $a * ks,
        Jo += $a * Ms,
        hs += $a * As,
        Qo += $a * Is,
        fs += $a * Ns,
        ds += $a * Bs,
        Yo += $a * Os,
        Bo += $a * $s,
        Mo += $a * Ps,
        Uo += $a * Ds,
        Do += $a * Hs,
        qo += $a * Us,
        zo += $a * Fs,
        $a = Fa[12],
        cs += $a * To,
        Zo += $a * xs,
        us += $a * Rs,
        Jo += $a * ks,
        hs += $a * Ms,
        Qo += $a * As,
        fs += $a * Is,
        ds += $a * Ns,
        Yo += $a * Bs,
        Bo += $a * Os,
        Mo += $a * $s,
        Uo += $a * Ps,
        Do += $a * Ds,
        qo += $a * Hs,
        zo += $a * Us,
        _s += $a * Fs,
        $a = Fa[13],
        Zo += $a * To,
        us += $a * xs,
        Jo += $a * Rs,
        hs += $a * ks,
        Qo += $a * Ms,
        fs += $a * As,
        ds += $a * Is,
        Yo += $a * Ns,
        Bo += $a * Bs,
        Mo += $a * Os,
        Uo += $a * $s,
        Do += $a * Ps,
        qo += $a * Ds,
        zo += $a * Hs,
        _s += $a * Us,
        Ts += $a * Fs,
        $a = Fa[14],
        us += $a * To,
        Jo += $a * xs,
        hs += $a * Rs,
        Qo += $a * ks,
        fs += $a * Ms,
        ds += $a * As,
        Yo += $a * Is,
        Bo += $a * Ns,
        Mo += $a * Bs,
        Uo += $a * Os,
        Do += $a * $s,
        qo += $a * Ps,
        zo += $a * Ds,
        _s += $a * Hs,
        Ts += $a * Us,
        Ls += $a * Fs,
        $a = Fa[15],
        Jo += $a * To,
        hs += $a * xs,
        Qo += $a * Rs,
        fs += $a * ks,
        ds += $a * Ms,
        Yo += $a * As,
        Bo += $a * Is,
        Mo += $a * Ns,
        Uo += $a * Bs,
        Do += $a * Os,
        qo += $a * $s,
        zo += $a * Ps,
        _s += $a * Ds,
        Ts += $a * Hs,
        Ls += $a * Us,
        Cs += $a * Fs,
        Co += 38 * hs,
        co += 38 * Qo,
        mo += 38 * fs,
        xo += 38 * ds,
        ko += 38 * Yo,
        $o += 38 * Bo,
        Ss += 38 * Mo,
        Xo += 38 * Uo,
        ms += 38 * Do,
        gs += 38 * qo,
        ys += 38 * zo,
        Vo += 38 * _s,
        cs += 38 * Ts,
        Zo += 38 * Ls,
        us += 38 * Cs,
        no = 1,
        $a = Co + no + 65535,
        no = Math.floor($a / 65536),
        Co = $a - no * 65536,
        $a = co + no + 65535,
        no = Math.floor($a / 65536),
        co = $a - no * 65536,
        $a = mo + no + 65535,
        no = Math.floor($a / 65536),
        mo = $a - no * 65536,
        $a = xo + no + 65535,
        no = Math.floor($a / 65536),
        xo = $a - no * 65536,
        $a = ko + no + 65535,
        no = Math.floor($a / 65536),
        ko = $a - no * 65536,
        $a = $o + no + 65535,
        no = Math.floor($a / 65536),
        $o = $a - no * 65536,
        $a = Ss + no + 65535,
        no = Math.floor($a / 65536),
        Ss = $a - no * 65536,
        $a = Xo + no + 65535,
        no = Math.floor($a / 65536),
        Xo = $a - no * 65536,
        $a = ms + no + 65535,
        no = Math.floor($a / 65536),
        ms = $a - no * 65536,
        $a = gs + no + 65535,
        no = Math.floor($a / 65536),
        gs = $a - no * 65536,
        $a = ys + no + 65535,
        no = Math.floor($a / 65536),
        ys = $a - no * 65536,
        $a = Vo + no + 65535,
        no = Math.floor($a / 65536),
        Vo = $a - no * 65536,
        $a = cs + no + 65535,
        no = Math.floor($a / 65536),
        cs = $a - no * 65536,
        $a = Zo + no + 65535,
        no = Math.floor($a / 65536),
        Zo = $a - no * 65536,
        $a = us + no + 65535,
        no = Math.floor($a / 65536),
        us = $a - no * 65536,
        $a = Jo + no + 65535,
        no = Math.floor($a / 65536),
        Jo = $a - no * 65536,
        Co += no - 1 + 37 * (no - 1),
        no = 1,
        $a = Co + no + 65535,
        no = Math.floor($a / 65536),
        Co = $a - no * 65536,
        $a = co + no + 65535,
        no = Math.floor($a / 65536),
        co = $a - no * 65536,
        $a = mo + no + 65535,
        no = Math.floor($a / 65536),
        mo = $a - no * 65536,
        $a = xo + no + 65535,
        no = Math.floor($a / 65536),
        xo = $a - no * 65536,
        $a = ko + no + 65535,
        no = Math.floor($a / 65536),
        ko = $a - no * 65536,
        $a = $o + no + 65535,
        no = Math.floor($a / 65536),
        $o = $a - no * 65536,
        $a = Ss + no + 65535,
        no = Math.floor($a / 65536),
        Ss = $a - no * 65536,
        $a = Xo + no + 65535,
        no = Math.floor($a / 65536),
        Xo = $a - no * 65536,
        $a = ms + no + 65535,
        no = Math.floor($a / 65536),
        ms = $a - no * 65536,
        $a = gs + no + 65535,
        no = Math.floor($a / 65536),
        gs = $a - no * 65536,
        $a = ys + no + 65535,
        no = Math.floor($a / 65536),
        ys = $a - no * 65536,
        $a = Vo + no + 65535,
        no = Math.floor($a / 65536),
        Vo = $a - no * 65536,
        $a = cs + no + 65535,
        no = Math.floor($a / 65536),
        cs = $a - no * 65536,
        $a = Zo + no + 65535,
        no = Math.floor($a / 65536),
        Zo = $a - no * 65536,
        $a = us + no + 65535,
        no = Math.floor($a / 65536),
        us = $a - no * 65536,
        $a = Jo + no + 65535,
        no = Math.floor($a / 65536),
        Jo = $a - no * 65536,
        Co += no - 1 + 37 * (no - 1),
        Ha[0] = Co,
        Ha[1] = co,
        Ha[2] = mo,
        Ha[3] = xo,
        Ha[4] = ko,
        Ha[5] = $o,
        Ha[6] = Ss,
        Ha[7] = Xo,
        Ha[8] = ms,
        Ha[9] = gs,
        Ha[10] = ys,
        Ha[11] = Vo,
        Ha[12] = cs,
        Ha[13] = Zo,
        Ha[14] = us,
        Ha[15] = Jo
    }
    function ao(Ha, Fa) {
        oo(Ha, Fa, Fa)
    }
    function Ia(Ha, Fa) {
        var Ya = ea(), $a;
        for ($a = 0; $a < 16; $a++)
            Ya[$a] = Fa[$a];
        for ($a = 253; $a >= 0; $a--)
            ao(Ya, Ya),
            $a !== 2 && $a !== 4 && oo(Ya, Ya, Fa);
        for ($a = 0; $a < 16; $a++)
            Ha[$a] = Ya[$a]
    }
    function Na(Ha, Fa) {
        var Ya = ea(), $a;
        for ($a = 0; $a < 16; $a++)
            Ya[$a] = Fa[$a];
        for ($a = 250; $a >= 0; $a--)
            ao(Ya, Ya),
            $a !== 1 && oo(Ya, Ya, Fa);
        for ($a = 0; $a < 16; $a++)
            Ha[$a] = Ya[$a]
    }
    function za(Ha, Fa, Ya) {
        var $a = new Uint8Array(32), no = new Float64Array(80), Co, co, mo = ea(), xo = ea(), ko = ea(), $o = ea(), Ss = ea(), Xo = ea();
        for (co = 0; co < 31; co++)
            $a[co] = Fa[co];
        for ($a[31] = Fa[31] & 127 | 64,
        $a[0] &= 248,
        ya(no, Ya),
        co = 0; co < 16; co++)
            xo[co] = no[co],
            $o[co] = mo[co] = ko[co] = 0;
        for (mo[0] = $o[0] = 1,
        co = 254; co >= 0; --co)
            Co = $a[co >>> 3] >>> (co & 7) & 1,
            Aa(mo, xo, Co),
            Aa(ko, $o, Co),
            Ba(Ss, mo, ko),
            io(mo, mo, ko),
            Ba(ko, xo, $o),
            io(xo, xo, $o),
            ao($o, Ss),
            ao(Xo, mo),
            oo(mo, ko, mo),
            oo(ko, xo, Ss),
            Ba(Ss, mo, ko),
            io(mo, mo, ko),
            ao(xo, mo),
            io(ko, $o, Xo),
            oo(mo, ko, oa),
            Ba(mo, mo, $o),
            oo(ko, ko, mo),
            oo(mo, $o, Xo),
            oo($o, xo, no),
            ao(xo, Ss),
            Aa(mo, xo, Co),
            Aa(ko, $o, Co);
        for (co = 0; co < 16; co++)
            no[co + 16] = mo[co],
            no[co + 32] = ko[co],
            no[co + 48] = xo[co],
            no[co + 64] = $o[co];
        var ms = no.subarray(32)
          , gs = no.subarray(16);
        return Ia(ms, ms),
        oo(gs, gs, ms),
        Ra(Ha, gs),
        0
    }
    function ro(Ha, Fa) {
        return za(Ha, Fa, ra)
    }
    function Va(Ha, Fa) {
        return ta(Fa, 32),
        ro(Ha, Fa)
    }
    function Wa(Ha, Fa, Ya) {
        var $a = new Uint8Array(32);
        return za($a, Ya, Fa),
        ka(Ha, na, $a, Pa)
    }
    var qa = fa
      , Ka = ga;
    function lo(Ha, Fa, Ya, $a, no, Co) {
        var co = new Uint8Array(32);
        return Wa(co, no, Co),
        qa(Ha, Fa, Ya, $a, co)
    }
    function yo(Ha, Fa, Ya, $a, no, Co) {
        var co = new Uint8Array(32);
        return Wa(co, no, Co),
        Ka(Ha, Fa, Ya, $a, co)
    }
    var fo = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
    function vo(Ha, Fa, Ya, $a) {
        for (var no = new Int32Array(16), Co = new Int32Array(16), co, mo, xo, ko, $o, Ss, Xo, ms, gs, ys, Vo, cs, Zo, us, Jo, hs, Qo, fs, ds, Yo, Bo, Mo, Uo, Do, qo, zo, _s = Ha[0], Ts = Ha[1], Ls = Ha[2], Cs = Ha[3], To = Ha[4], xs = Ha[5], Rs = Ha[6], ks = Ha[7], Ms = Fa[0], As = Fa[1], Is = Fa[2], Ns = Fa[3], Bs = Fa[4], Os = Fa[5], $s = Fa[6], Ps = Fa[7], Ds = 0; $a >= 128; ) {
            for (ds = 0; ds < 16; ds++)
                Yo = 8 * ds + Ds,
                no[ds] = Ya[Yo + 0] << 24 | Ya[Yo + 1] << 16 | Ya[Yo + 2] << 8 | Ya[Yo + 3],
                Co[ds] = Ya[Yo + 4] << 24 | Ya[Yo + 5] << 16 | Ya[Yo + 6] << 8 | Ya[Yo + 7];
            for (ds = 0; ds < 80; ds++)
                if (co = _s,
                mo = Ts,
                xo = Ls,
                ko = Cs,
                $o = To,
                Ss = xs,
                Xo = Rs,
                ms = ks,
                gs = Ms,
                ys = As,
                Vo = Is,
                cs = Ns,
                Zo = Bs,
                us = Os,
                Jo = $s,
                hs = Ps,
                Bo = ks,
                Mo = Ps,
                Uo = Mo & 65535,
                Do = Mo >>> 16,
                qo = Bo & 65535,
                zo = Bo >>> 16,
                Bo = (To >>> 14 | Bs << 18) ^ (To >>> 18 | Bs << 14) ^ (Bs >>> 9 | To << 23),
                Mo = (Bs >>> 14 | To << 18) ^ (Bs >>> 18 | To << 14) ^ (To >>> 9 | Bs << 23),
                Uo += Mo & 65535,
                Do += Mo >>> 16,
                qo += Bo & 65535,
                zo += Bo >>> 16,
                Bo = To & xs ^ ~To & Rs,
                Mo = Bs & Os ^ ~Bs & $s,
                Uo += Mo & 65535,
                Do += Mo >>> 16,
                qo += Bo & 65535,
                zo += Bo >>> 16,
                Bo = fo[ds * 2],
                Mo = fo[ds * 2 + 1],
                Uo += Mo & 65535,
                Do += Mo >>> 16,
                qo += Bo & 65535,
                zo += Bo >>> 16,
                Bo = no[ds % 16],
                Mo = Co[ds % 16],
                Uo += Mo & 65535,
                Do += Mo >>> 16,
                qo += Bo & 65535,
                zo += Bo >>> 16,
                Do += Uo >>> 16,
                qo += Do >>> 16,
                zo += qo >>> 16,
                Qo = qo & 65535 | zo << 16,
                fs = Uo & 65535 | Do << 16,
                Bo = Qo,
                Mo = fs,
                Uo = Mo & 65535,
                Do = Mo >>> 16,
                qo = Bo & 65535,
                zo = Bo >>> 16,
                Bo = (_s >>> 28 | Ms << 4) ^ (Ms >>> 2 | _s << 30) ^ (Ms >>> 7 | _s << 25),
                Mo = (Ms >>> 28 | _s << 4) ^ (_s >>> 2 | Ms << 30) ^ (_s >>> 7 | Ms << 25),
                Uo += Mo & 65535,
                Do += Mo >>> 16,
                qo += Bo & 65535,
                zo += Bo >>> 16,
                Bo = _s & Ts ^ _s & Ls ^ Ts & Ls,
                Mo = Ms & As ^ Ms & Is ^ As & Is,
                Uo += Mo & 65535,
                Do += Mo >>> 16,
                qo += Bo & 65535,
                zo += Bo >>> 16,
                Do += Uo >>> 16,
                qo += Do >>> 16,
                zo += qo >>> 16,
                ms = qo & 65535 | zo << 16,
                hs = Uo & 65535 | Do << 16,
                Bo = ko,
                Mo = cs,
                Uo = Mo & 65535,
                Do = Mo >>> 16,
                qo = Bo & 65535,
                zo = Bo >>> 16,
                Bo = Qo,
                Mo = fs,
                Uo += Mo & 65535,
                Do += Mo >>> 16,
                qo += Bo & 65535,
                zo += Bo >>> 16,
                Do += Uo >>> 16,
                qo += Do >>> 16,
                zo += qo >>> 16,
                ko = qo & 65535 | zo << 16,
                cs = Uo & 65535 | Do << 16,
                Ts = co,
                Ls = mo,
                Cs = xo,
                To = ko,
                xs = $o,
                Rs = Ss,
                ks = Xo,
                _s = ms,
                As = gs,
                Is = ys,
                Ns = Vo,
                Bs = cs,
                Os = Zo,
                $s = us,
                Ps = Jo,
                Ms = hs,
                ds % 16 === 15)
                    for (Yo = 0; Yo < 16; Yo++)
                        Bo = no[Yo],
                        Mo = Co[Yo],
                        Uo = Mo & 65535,
                        Do = Mo >>> 16,
                        qo = Bo & 65535,
                        zo = Bo >>> 16,
                        Bo = no[(Yo + 9) % 16],
                        Mo = Co[(Yo + 9) % 16],
                        Uo += Mo & 65535,
                        Do += Mo >>> 16,
                        qo += Bo & 65535,
                        zo += Bo >>> 16,
                        Qo = no[(Yo + 1) % 16],
                        fs = Co[(Yo + 1) % 16],
                        Bo = (Qo >>> 1 | fs << 31) ^ (Qo >>> 8 | fs << 24) ^ Qo >>> 7,
                        Mo = (fs >>> 1 | Qo << 31) ^ (fs >>> 8 | Qo << 24) ^ (fs >>> 7 | Qo << 25),
                        Uo += Mo & 65535,
                        Do += Mo >>> 16,
                        qo += Bo & 65535,
                        zo += Bo >>> 16,
                        Qo = no[(Yo + 14) % 16],
                        fs = Co[(Yo + 14) % 16],
                        Bo = (Qo >>> 19 | fs << 13) ^ (fs >>> 29 | Qo << 3) ^ Qo >>> 6,
                        Mo = (fs >>> 19 | Qo << 13) ^ (Qo >>> 29 | fs << 3) ^ (fs >>> 6 | Qo << 26),
                        Uo += Mo & 65535,
                        Do += Mo >>> 16,
                        qo += Bo & 65535,
                        zo += Bo >>> 16,
                        Do += Uo >>> 16,
                        qo += Do >>> 16,
                        zo += qo >>> 16,
                        no[Yo] = qo & 65535 | zo << 16,
                        Co[Yo] = Uo & 65535 | Do << 16;
            Bo = _s,
            Mo = Ms,
            Uo = Mo & 65535,
            Do = Mo >>> 16,
            qo = Bo & 65535,
            zo = Bo >>> 16,
            Bo = Ha[0],
            Mo = Fa[0],
            Uo += Mo & 65535,
            Do += Mo >>> 16,
            qo += Bo & 65535,
            zo += Bo >>> 16,
            Do += Uo >>> 16,
            qo += Do >>> 16,
            zo += qo >>> 16,
            Ha[0] = _s = qo & 65535 | zo << 16,
            Fa[0] = Ms = Uo & 65535 | Do << 16,
            Bo = Ts,
            Mo = As,
            Uo = Mo & 65535,
            Do = Mo >>> 16,
            qo = Bo & 65535,
            zo = Bo >>> 16,
            Bo = Ha[1],
            Mo = Fa[1],
            Uo += Mo & 65535,
            Do += Mo >>> 16,
            qo += Bo & 65535,
            zo += Bo >>> 16,
            Do += Uo >>> 16,
            qo += Do >>> 16,
            zo += qo >>> 16,
            Ha[1] = Ts = qo & 65535 | zo << 16,
            Fa[1] = As = Uo & 65535 | Do << 16,
            Bo = Ls,
            Mo = Is,
            Uo = Mo & 65535,
            Do = Mo >>> 16,
            qo = Bo & 65535,
            zo = Bo >>> 16,
            Bo = Ha[2],
            Mo = Fa[2],
            Uo += Mo & 65535,
            Do += Mo >>> 16,
            qo += Bo & 65535,
            zo += Bo >>> 16,
            Do += Uo >>> 16,
            qo += Do >>> 16,
            zo += qo >>> 16,
            Ha[2] = Ls = qo & 65535 | zo << 16,
            Fa[2] = Is = Uo & 65535 | Do << 16,
            Bo = Cs,
            Mo = Ns,
            Uo = Mo & 65535,
            Do = Mo >>> 16,
            qo = Bo & 65535,
            zo = Bo >>> 16,
            Bo = Ha[3],
            Mo = Fa[3],
            Uo += Mo & 65535,
            Do += Mo >>> 16,
            qo += Bo & 65535,
            zo += Bo >>> 16,
            Do += Uo >>> 16,
            qo += Do >>> 16,
            zo += qo >>> 16,
            Ha[3] = Cs = qo & 65535 | zo << 16,
            Fa[3] = Ns = Uo & 65535 | Do << 16,
            Bo = To,
            Mo = Bs,
            Uo = Mo & 65535,
            Do = Mo >>> 16,
            qo = Bo & 65535,
            zo = Bo >>> 16,
            Bo = Ha[4],
            Mo = Fa[4],
            Uo += Mo & 65535,
            Do += Mo >>> 16,
            qo += Bo & 65535,
            zo += Bo >>> 16,
            Do += Uo >>> 16,
            qo += Do >>> 16,
            zo += qo >>> 16,
            Ha[4] = To = qo & 65535 | zo << 16,
            Fa[4] = Bs = Uo & 65535 | Do << 16,
            Bo = xs,
            Mo = Os,
            Uo = Mo & 65535,
            Do = Mo >>> 16,
            qo = Bo & 65535,
            zo = Bo >>> 16,
            Bo = Ha[5],
            Mo = Fa[5],
            Uo += Mo & 65535,
            Do += Mo >>> 16,
            qo += Bo & 65535,
            zo += Bo >>> 16,
            Do += Uo >>> 16,
            qo += Do >>> 16,
            zo += qo >>> 16,
            Ha[5] = xs = qo & 65535 | zo << 16,
            Fa[5] = Os = Uo & 65535 | Do << 16,
            Bo = Rs,
            Mo = $s,
            Uo = Mo & 65535,
            Do = Mo >>> 16,
            qo = Bo & 65535,
            zo = Bo >>> 16,
            Bo = Ha[6],
            Mo = Fa[6],
            Uo += Mo & 65535,
            Do += Mo >>> 16,
            qo += Bo & 65535,
            zo += Bo >>> 16,
            Do += Uo >>> 16,
            qo += Do >>> 16,
            zo += qo >>> 16,
            Ha[6] = Rs = qo & 65535 | zo << 16,
            Fa[6] = $s = Uo & 65535 | Do << 16,
            Bo = ks,
            Mo = Ps,
            Uo = Mo & 65535,
            Do = Mo >>> 16,
            qo = Bo & 65535,
            zo = Bo >>> 16,
            Bo = Ha[7],
            Mo = Fa[7],
            Uo += Mo & 65535,
            Do += Mo >>> 16,
            qo += Bo & 65535,
            zo += Bo >>> 16,
            Do += Uo >>> 16,
            qo += Do >>> 16,
            zo += qo >>> 16,
            Ha[7] = ks = qo & 65535 | zo << 16,
            Fa[7] = Ps = Uo & 65535 | Do << 16,
            Ds += 128,
            $a -= 128
        }
        return $a
    }
    function so(Ha, Fa, Ya) {
        var $a = new Int32Array(8), no = new Int32Array(8), Co = new Uint8Array(256), co, mo = Ya;
        for ($a[0] = 1779033703,
        $a[1] = 3144134277,
        $a[2] = 1013904242,
        $a[3] = 2773480762,
        $a[4] = 1359893119,
        $a[5] = 2600822924,
        $a[6] = 528734635,
        $a[7] = 1541459225,
        no[0] = 4089235720,
        no[1] = 2227873595,
        no[2] = 4271175723,
        no[3] = 1595750129,
        no[4] = 2917565137,
        no[5] = 725511199,
        no[6] = 4215389547,
        no[7] = 327033209,
        vo($a, no, Fa, Ya),
        Ya %= 128,
        co = 0; co < Ya; co++)
            Co[co] = Fa[mo - Ya + co];
        for (Co[Ya] = 128,
        Ya = 256 - 128 * (Ya < 112 ? 1 : 0),
        Co[Ya - 9] = 0,
        ha(Co, Ya - 8, mo / 536870912 | 0, mo << 3),
        vo($a, no, Co, Ya),
        co = 0; co < 8; co++)
            ha(Ha, 8 * co, $a[co], no[co]);
        return 0
    }
    function Xa(Ha, Fa) {
        var Ya = ea()
          , $a = ea()
          , no = ea()
          , Co = ea()
          , co = ea()
          , mo = ea()
          , xo = ea()
          , ko = ea()
          , $o = ea();
        io(Ya, Ha[1], Ha[0]),
        io($o, Fa[1], Fa[0]),
        oo(Ya, Ya, $o),
        Ba($a, Ha[0], Ha[1]),
        Ba($o, Fa[0], Fa[1]),
        oo($a, $a, $o),
        oo(no, Ha[3], Fa[3]),
        oo(no, no, sa),
        oo(Co, Ha[2], Fa[2]),
        Ba(Co, Co, Co),
        io(co, $a, Ya),
        io(mo, Co, no),
        Ba(xo, Co, no),
        Ba(ko, $a, Ya),
        oo(Ha[0], co, mo),
        oo(Ha[1], ko, xo),
        oo(Ha[2], xo, mo),
        oo(Ha[3], co, ko)
    }
    function to(Ha, Fa, Ya) {
        var $a;
        for ($a = 0; $a < 4; $a++)
            Aa(Ha[$a], Fa[$a], Ya)
    }
    function ho(Ha, Fa) {
        var Ya = ea()
          , $a = ea()
          , no = ea();
        Ia(no, Fa[2]),
        oo(Ya, Fa[0], no),
        oo($a, Fa[1], no),
        Ra(Ha, $a),
        Ha[31] ^= La(Ya) << 7
    }
    function Eo(Ha, Fa, Ya) {
        var $a, no;
        for (wa(Ha[0], ia),
        wa(Ha[1], aa),
        wa(Ha[2], aa),
        wa(Ha[3], ia),
        no = 255; no >= 0; --no)
            $a = Ya[no / 8 | 0] >> (no & 7) & 1,
            to(Ha, Fa, $a),
            Xa(Fa, Ha),
            Xa(Ha, Ha),
            to(Ha, Fa, $a)
    }
    function wo(Ha, Fa) {
        var Ya = [ea(), ea(), ea(), ea()];
        wa(Ya[0], ca),
        wa(Ya[1], ua),
        wa(Ya[2], aa),
        oo(Ya[3], ca, ua),
        Eo(Ha, Ya, Fa)
    }
    function Ao(Ha, Fa, Ya) {
        var $a = new Uint8Array(64), no = [ea(), ea(), ea(), ea()], Co;
        for (Ya || ta(Fa, 32),
        so($a, Fa, 32),
        $a[0] &= 248,
        $a[31] &= 127,
        $a[31] |= 64,
        wo(no, $a),
        ho(Ha, no),
        Co = 0; Co < 32; Co++)
            Fa[Co + 32] = Ha[Co];
        return 0
    }
    var _o = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
    function Lo(Ha, Fa) {
        var Ya, $a, no, Co;
        for ($a = 63; $a >= 32; --$a) {
            for (Ya = 0,
            no = $a - 32,
            Co = $a - 12; no < Co; ++no)
                Fa[no] += Ya - 16 * Fa[$a] * _o[no - ($a - 32)],
                Ya = Math.floor((Fa[no] + 128) / 256),
                Fa[no] -= Ya * 256;
            Fa[no] += Ya,
            Fa[$a] = 0
        }
        for (Ya = 0,
        no = 0; no < 32; no++)
            Fa[no] += Ya - (Fa[31] >> 4) * _o[no],
            Ya = Fa[no] >> 8,
            Fa[no] &= 255;
        for (no = 0; no < 32; no++)
            Fa[no] -= Ya * _o[no];
        for ($a = 0; $a < 32; $a++)
            Fa[$a + 1] += Fa[$a] >> 8,
            Ha[$a] = Fa[$a] & 255
    }
    function Fo(Ha) {
        var Fa = new Float64Array(64), Ya;
        for (Ya = 0; Ya < 64; Ya++)
            Fa[Ya] = Ha[Ya];
        for (Ya = 0; Ya < 64; Ya++)
            Ha[Ya] = 0;
        Lo(Ha, Fa)
    }
    function jo(Ha, Fa, Ya, $a) {
        var no = new Uint8Array(64), Co = new Uint8Array(64), co = new Uint8Array(64), mo, xo, ko = new Float64Array(64), $o = [ea(), ea(), ea(), ea()];
        so(no, $a, 32),
        no[0] &= 248,
        no[31] &= 127,
        no[31] |= 64;
        var Ss = Ya + 64;
        for (mo = 0; mo < Ya; mo++)
            Ha[64 + mo] = Fa[mo];
        for (mo = 0; mo < 32; mo++)
            Ha[32 + mo] = no[32 + mo];
        for (so(co, Ha.subarray(32), Ya + 32),
        Fo(co),
        wo($o, co),
        ho(Ha, $o),
        mo = 32; mo < 64; mo++)
            Ha[mo] = $a[mo];
        for (so(Co, Ha, Ya + 64),
        Fo(Co),
        mo = 0; mo < 64; mo++)
            ko[mo] = 0;
        for (mo = 0; mo < 32; mo++)
            ko[mo] = co[mo];
        for (mo = 0; mo < 32; mo++)
            for (xo = 0; xo < 32; xo++)
                ko[mo + xo] += Co[mo] * no[xo];
        return Lo(Ha.subarray(32), ko),
        Ss
    }
    function eo(Ha, Fa) {
        var Ya = ea()
          , $a = ea()
          , no = ea()
          , Co = ea()
          , co = ea()
          , mo = ea()
          , xo = ea();
        return wa(Ha[2], aa),
        ya(Ha[1], Fa),
        ao(no, Ha[1]),
        oo(Co, no, la),
        io(no, no, Ha[2]),
        Ba(Co, Ha[2], Co),
        ao(co, Co),
        ao(mo, co),
        oo(xo, mo, co),
        oo(Ya, xo, no),
        oo(Ya, Ya, Co),
        Na(Ya, Ya),
        oo(Ya, Ya, no),
        oo(Ya, Ya, Co),
        oo(Ya, Ya, Co),
        oo(Ha[0], Ya, Co),
        ao($a, Ha[0]),
        oo($a, $a, Co),
        Ta($a, no) && oo(Ha[0], Ha[0], da),
        ao($a, Ha[0]),
        oo($a, $a, Co),
        Ta($a, no) ? -1 : (La(Ha[0]) === Fa[31] >> 7 && io(Ha[0], ia, Ha[0]),
        oo(Ha[3], Ha[0], Ha[1]),
        0)
    }
    function Oa(Ha, Fa, Ya, $a) {
        var no, Co = new Uint8Array(32), co = new Uint8Array(64), mo = [ea(), ea(), ea(), ea()], xo = [ea(), ea(), ea(), ea()];
        if (Ya < 64 || eo(xo, $a))
            return -1;
        for (no = 0; no < Ya; no++)
            Ha[no] = Fa[no];
        for (no = 0; no < 32; no++)
            Ha[no + 32] = $a[no];
        if (so(co, Ha, Ya),
        Fo(co),
        Eo(mo, xo, co),
        wo(xo, Fa.subarray(32)),
        Xa(mo, xo),
        ho(Co, mo),
        Ya -= 64,
        ba(Fa, 0, Co, 0)) {
            for (no = 0; no < Ya; no++)
                Ha[no] = 0;
            return -1
        }
        for (no = 0; no < Ya; no++)
            Ha[no] = Fa[no + 64];
        return Ya
    }
    var Da = 32
      , Qa = 24
      , uo = 32
      , bo = 16
      , So = 32
      , Wo = 32
      , Po = 32
      , Ro = 32
      , Ho = 32
      , Oo = Qa
      , No = uo
      , ps = bo
      , Ko = 64
      , Go = 32
      , bs = 64
      , vs = 32
      , ls = 64;
    Yi.lowlevel = {
        crypto_core_hsalsa20: ka,
        crypto_stream_xor: Ja,
        crypto_stream: Ga,
        crypto_stream_salsa20_xor: ja,
        crypto_stream_salsa20: Za,
        crypto_onetimeauth: xa,
        crypto_onetimeauth_verify: ma,
        crypto_verify_16: va,
        crypto_verify_32: ba,
        crypto_secretbox: fa,
        crypto_secretbox_open: ga,
        crypto_scalarmult: za,
        crypto_scalarmult_base: ro,
        crypto_box_beforenm: Wa,
        crypto_box_afternm: qa,
        crypto_box: lo,
        crypto_box_open: yo,
        crypto_box_keypair: Va,
        crypto_hash: so,
        crypto_sign: jo,
        crypto_sign_keypair: Ao,
        crypto_sign_open: Oa,
        crypto_secretbox_KEYBYTES: Da,
        crypto_secretbox_NONCEBYTES: Qa,
        crypto_secretbox_ZEROBYTES: uo,
        crypto_secretbox_BOXZEROBYTES: bo,
        crypto_scalarmult_BYTES: So,
        crypto_scalarmult_SCALARBYTES: Wo,
        crypto_box_PUBLICKEYBYTES: Po,
        crypto_box_SECRETKEYBYTES: Ro,
        crypto_box_BEFORENMBYTES: Ho,
        crypto_box_NONCEBYTES: Oo,
        crypto_box_ZEROBYTES: No,
        crypto_box_BOXZEROBYTES: ps,
        crypto_sign_BYTES: Ko,
        crypto_sign_PUBLICKEYBYTES: Go,
        crypto_sign_SECRETKEYBYTES: bs,
        crypto_sign_SEEDBYTES: vs,
        crypto_hash_BYTES: ls,
        gf: ea,
        D: la,
        L: _o,
        pack25519: Ra,
        unpack25519: ya,
        M: oo,
        A: Ba,
        S: ao,
        Z: io,
        pow2523: Na,
        add: Xa,
        set25519: wa,
        modL: Lo,
        scalarmult: Eo,
        scalarbase: wo
    };
    function Es(Ha, Fa) {
        if (Ha.length !== Da)
            throw new Error("bad key size");
        if (Fa.length !== Qa)
            throw new Error("bad nonce size")
    }
    function ws(Ha, Fa) {
        if (Ha.length !== Po)
            throw new Error("bad public key size");
        if (Fa.length !== Ro)
            throw new Error("bad secret key size")
    }
    function as() {
        for (var Ha = 0; Ha < arguments.length; Ha++)
            if (!(arguments[Ha]instanceof Uint8Array))
                throw new TypeError("unexpected type, use Uint8Array")
    }
    function go(Ha) {
        for (var Fa = 0; Fa < Ha.length; Fa++)
            Ha[Fa] = 0
    }
    Yi.randomBytes = function(Ha) {
        var Fa = new Uint8Array(Ha);
        return ta(Fa, Ha),
        Fa
    }
    ,
    Yi.secretbox = function(Ha, Fa, Ya) {
        as(Ha, Fa, Ya),
        Es(Ya, Fa);
        for (var $a = new Uint8Array(uo + Ha.length), no = new Uint8Array($a.length), Co = 0; Co < Ha.length; Co++)
            $a[Co + uo] = Ha[Co];
        return fa(no, $a, $a.length, Fa, Ya),
        no.subarray(bo)
    }
    ,
    Yi.secretbox.open = function(Ha, Fa, Ya) {
        as(Ha, Fa, Ya),
        Es(Ya, Fa);
        for (var $a = new Uint8Array(bo + Ha.length), no = new Uint8Array($a.length), Co = 0; Co < Ha.length; Co++)
            $a[Co + bo] = Ha[Co];
        return $a.length < 32 || ga(no, $a, $a.length, Fa, Ya) !== 0 ? null : no.subarray(uo)
    }
    ,
    Yi.secretbox.keyLength = Da,
    Yi.secretbox.nonceLength = Qa,
    Yi.secretbox.overheadLength = bo,
    Yi.scalarMult = function(Ha, Fa) {
        if (as(Ha, Fa),
        Ha.length !== Wo)
            throw new Error("bad n size");
        if (Fa.length !== So)
            throw new Error("bad p size");
        var Ya = new Uint8Array(So);
        return za(Ya, Ha, Fa),
        Ya
    }
    ,
    Yi.scalarMult.base = function(Ha) {
        if (as(Ha),
        Ha.length !== Wo)
            throw new Error("bad n size");
        var Fa = new Uint8Array(So);
        return ro(Fa, Ha),
        Fa
    }
    ,
    Yi.scalarMult.scalarLength = Wo,
    Yi.scalarMult.groupElementLength = So,
    Yi.box = function(Ha, Fa, Ya, $a) {
        var no = Yi.box.before(Ya, $a);
        return Yi.secretbox(Ha, Fa, no)
    }
    ,
    Yi.box.before = function(Ha, Fa) {
        as(Ha, Fa),
        ws(Ha, Fa);
        var Ya = new Uint8Array(Ho);
        return Wa(Ya, Ha, Fa),
        Ya
    }
    ,
    Yi.box.after = Yi.secretbox,
    Yi.box.open = function(Ha, Fa, Ya, $a) {
        var no = Yi.box.before(Ya, $a);
        return Yi.secretbox.open(Ha, Fa, no)
    }
    ,
    Yi.box.open.after = Yi.secretbox.open,
    Yi.box.keyPair = function() {
        var Ha = new Uint8Array(Po)
          , Fa = new Uint8Array(Ro);
        return Va(Ha, Fa),
        {
            publicKey: Ha,
            secretKey: Fa
        }
    }
    ,
    Yi.box.keyPair.fromSecretKey = function(Ha) {
        if (as(Ha),
        Ha.length !== Ro)
            throw new Error("bad secret key size");
        var Fa = new Uint8Array(Po);
        return ro(Fa, Ha),
        {
            publicKey: Fa,
            secretKey: new Uint8Array(Ha)
        }
    }
    ,
    Yi.box.publicKeyLength = Po,
    Yi.box.secretKeyLength = Ro,
    Yi.box.sharedKeyLength = Ho,
    Yi.box.nonceLength = Oo,
    Yi.box.overheadLength = Yi.secretbox.overheadLength,
    Yi.sign = function(Ha, Fa) {
        if (as(Ha, Fa),
        Fa.length !== bs)
            throw new Error("bad secret key size");
        var Ya = new Uint8Array(Ko + Ha.length);
        return jo(Ya, Ha, Ha.length, Fa),
        Ya
    }
    ,
    Yi.sign.open = function(Ha, Fa) {
        if (as(Ha, Fa),
        Fa.length !== Go)
            throw new Error("bad public key size");
        var Ya = new Uint8Array(Ha.length)
          , $a = Oa(Ya, Ha, Ha.length, Fa);
        if ($a < 0)
            return null;
        for (var no = new Uint8Array($a), Co = 0; Co < no.length; Co++)
            no[Co] = Ya[Co];
        return no
    }
    ,
    Yi.sign.detached = function(Ha, Fa) {
        for (var Ya = Yi.sign(Ha, Fa), $a = new Uint8Array(Ko), no = 0; no < $a.length; no++)
            $a[no] = Ya[no];
        return $a
    }
    ,
    Yi.sign.detached.verify = function(Ha, Fa, Ya) {
        if (as(Ha, Fa, Ya),
        Fa.length !== Ko)
            throw new Error("bad signature size");
        if (Ya.length !== Go)
            throw new Error("bad public key size");
        var $a = new Uint8Array(Ko + Ha.length), no = new Uint8Array(Ko + Ha.length), Co;
        for (Co = 0; Co < Ko; Co++)
            $a[Co] = Fa[Co];
        for (Co = 0; Co < Ha.length; Co++)
            $a[Co + Ko] = Ha[Co];
        return Oa(no, $a, $a.length, Ya) >= 0
    }
    ,
    Yi.sign.keyPair = function() {
        var Ha = new Uint8Array(Go)
          , Fa = new Uint8Array(bs);
        return Ao(Ha, Fa),
        {
            publicKey: Ha,
            secretKey: Fa
        }
    }
    ,
    Yi.sign.keyPair.fromSecretKey = function(Ha) {
        if (as(Ha),
        Ha.length !== bs)
            throw new Error("bad secret key size");
        for (var Fa = new Uint8Array(Go), Ya = 0; Ya < Fa.length; Ya++)
            Fa[Ya] = Ha[32 + Ya];
        return {
            publicKey: Fa,
            secretKey: new Uint8Array(Ha)
        }
    }
    ,
    Yi.sign.keyPair.fromSeed = function(Ha) {
        if (as(Ha),
        Ha.length !== vs)
            throw new Error("bad seed size");
        for (var Fa = new Uint8Array(Go), Ya = new Uint8Array(bs), $a = 0; $a < 32; $a++)
            Ya[$a] = Ha[$a];
        return Ao(Fa, Ya, !0),
        {
            publicKey: Fa,
            secretKey: Ya
        }
    }
    ,
    Yi.sign.publicKeyLength = Go,
    Yi.sign.secretKeyLength = bs,
    Yi.sign.seedLength = vs,
    Yi.sign.signatureLength = Ko,
    Yi.hash = function(Ha) {
        as(Ha);
        var Fa = new Uint8Array(ls);
        return so(Fa, Ha, Ha.length),
        Fa
    }
    ,
    Yi.hash.hashLength = ls,
    Yi.verify = function(Ha, Fa) {
        return as(Ha, Fa),
        Ha.length === 0 || Fa.length === 0 || Ha.length !== Fa.length ? !1 : pa(Ha, 0, Fa, 0, Ha.length) === 0
    }
    ,
    Yi.setPRNG = function(Ha) {
        ta = Ha
    }
    ,
    function() {
        var Ha = typeof self < "u" ? self.crypto || self.msCrypto : null;
        if (Ha && Ha.getRandomValues) {
            var Fa = 65536;
            Yi.setPRNG(function(Ya, $a) {
                var no, Co = new Uint8Array($a);
                for (no = 0; no < $a; no += Fa)
                    Ha.getRandomValues(Co.subarray(no, no + Math.min($a - no, Fa)));
                for (no = 0; no < $a; no++)
                    Ya[no] = Co[no];
                go(Co)
            })
        } else
            typeof commonjsRequire < "u" && (Ha = requireCryptoBrowserify(),
            Ha && Ha.randomBytes && Yi.setPRNG(function(Ya, $a) {
                var no, Co = Ha.randomBytes($a);
                for (no = 0; no < $a; no++)
                    Ya[no] = Co[no];
                go(Co)
            }))
    }()
}
)(Fn)

var En = function() {
        var t = {};
        function n(r) {
            if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(r))
                throw new TypeError("invalid encoding")
        }
        return t.decodeUTF8 = function(r) {
            if (typeof r != "string")
                throw new TypeError("expected string");
            var o, i = unescape(encodeURIComponent(r)), s = new Uint8Array(i.length);
            for (o = 0; o < i.length; o++)
                s[o] = i.charCodeAt(o);
            return s
        }
        ,
        t.encodeUTF8 = function(r) {
            var o, i = [];
            for (o = 0; o < r.length; o++)
                i.push(String.fromCharCode(r[o]));
            return decodeURIComponent(escape(i.join("")))
        }
        ,
        typeof atob > "u" ? typeof dn.from < "u" ? (t.encodeBase64 = function(r) {
            return dn.from(r).toString("base64")
        }
        ,
        t.decodeBase64 = function(r) {
            return n(r),
            new Uint8Array(Array.prototype.slice.call(dn.from(r, "base64"), 0))
        }
        ) : (t.encodeBase64 = function(r) {
            return new dn(r).toString("base64")
        }
        ,
        t.decodeBase64 = function(r) {
            return n(r),
            new Uint8Array(Array.prototype.slice.call(new dn(r,"base64"), 0))
        }
        ) : (t.encodeBase64 = function(r) {
            var o, i = [], s = r.length;
            for (o = 0; o < s; o++)
                i.push(String.fromCharCode(r[o]));
            return btoa(i.join(""))
        }
        ,
        t.decodeBase64 = function(r) {
            n(r);
            var o, i = atob(r), s = new Uint8Array(i.length);
            for (o = 0; o < i.length; o++)
                s[o] = i.charCodeAt(o);
            return s
        }
        ),
        t
    }()
function La(e, t=!1) {
    let n;
    return e instanceof Uint8Array ? n = e : (typeof e != "string" && (e = JSON.stringify(e)),
    n = En.decodeUTF8(e)),
    _a(n, t)
}
function Aa(e, t) {
    return t && (e = decodeURIComponent(e)),
    En.decodeBase64(e)
}
function Ta(e, t=!1) {
    const n = Aa(e, t);
    return {
        toString() {
            return En.encodeUTF8(n)
        },
        toObject() {
            try {
                return JSON.parse(En.encodeUTF8(n))
            } catch {
                return null
            }
        },
        toUint8Array() {
            return n
        }
    }
}
const vo = {
    encode: La,
    decode: Ta
};
function Ma(e, t) {
    if (t >= e.length)
        throw new Error("Index is out of buffer");
    const n = e.slice(0, t)
      , r = e.slice(t);
    return [n, r]
}
function Ur(e) {
    let t = "";
    return e.forEach(n => {
        t += ("0" + (n & 255).toString(16)).slice(-2)
    }
    ),
    t
}
function tr(e) {
    if (e.length % 2 !== 0)
        throw new Error(`Cannot convert ${e} to bytesArray`);
    const t = new Uint8Array(e.length / 2);
    for (let n = 0; n < e.length; n += 2)
        t[n / 2] = parseInt(e.slice(n, n + 2), 16);
    return t
}
class Jr {
    constructor(t) {
        this.nonceLength = 24,
        this.keyPair = t ? this.createKeypairFromString(t) : this.createKeypair(),
        this.sessionId = Ur(this.keyPair.publicKey)
    }
    createKeypair() {
        return Fn.box.keyPair()
    }
    createKeypairFromString(t) {
        return {
            publicKey: tr(t.publicKey),
            secretKey: tr(t.secretKey)
        }
    }
    createNonce() {
        return Fn.randomBytes(this.nonceLength)
    }
    encrypt(t, n) {
        const r = new TextEncoder().encode(t)
          , o = this.createNonce()
          , i = Fn.box(r, o, n, this.keyPair.secretKey);
        return $a(o, i)
    }
    decrypt(t, n) {
        const [r,o] = Ma(t, this.nonceLength)
          , i = Fn.box.open(o, r, n, this.keyPair.secretKey);
        if (!i)
            throw new Error(`Decryption error: 
             keypair pubkey: ${this.keyPair.publicKey.toString()} 
             keypair secretkey: ${this.keyPair.secretKey.toString()}`);
        return new TextDecoder().decode(i)
    }
    stringifyKeypair() {
        return {
            publicKey: Ur(this.keyPair.publicKey),
            secretKey: Ur(this.keyPair.secretKey)
        }
    }
}

var enc = new Jr()

console.log(enc)


