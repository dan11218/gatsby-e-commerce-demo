window.lightningjs || function(c) {
    function g(b, d) {
        d && (d += (/\?/.test(d) ? "&" : "?") + "lv=1");
        c[b] || function() {
            var i = window,
                h = document,
                j = b,
                g = h.location.protocol,
                l = "load",
                k = 0;
            (function() {
                function b() {
                    a.P(l);
                    a.w = 1;
                    c[j]("_load")
                }
                c[j] = function() {
                    function m() {
                        m.id = e;
                        return c[j].apply(m, arguments)
                    }
                    var b, e = ++k;
                    b = this && this != i ? this.id || 0 : 0;
                    (a.s = a.s || []).push([e, b, arguments]);
                    m.then = function(b, c, h) {
                        var d = a.fh[e] = a.fh[e] || [],
                            j = a.eh[e] = a.eh[e] || [],
                            f = a.ph[e] = a.ph[e] || [];
                        b && d.push(b);
                        c && j.push(c);
                        h && f.push(h);
                        return m
                    };
                    return m
                };
                var a = c[j]._ = {};
                a.fh = {};
                a.eh = {};
                a.ph = {};
                a.l = d ? d.replace(/^\/\//, (g == "https:" ? g : "http:") + "//") : d;
                a.p = {
                    0: +new Date
                };
                a.P = function(b) {
                    a.p[b] = new Date - a.p[0]
                };
                a.w && b();
                i.addEventListener ? i.addEventListener(l, b, !1) : i.attachEvent("on" + l, b);
                var q = function() {
                    function b() {
                        return ["<head></head><", c, ' onload="var d=', n, ";d.getElementsByTagName('head')[0].", d, "(d.", g, "('script')).", i, "='", a.l, "'\"></", c, ">"].join("")
                    }
                    var c = "body",
                        e = h[c];
                    if (!e) return setTimeout(q, 100);
                    a.P(1);
                    var d = "appendChild",
                        g = "createElement",
                        i = "src",
                        k = h[g]("div"),
                        l = k[d](h[g]("div")),
                        f = h[g]("iframe"),
                        n = "document",
                        p;
                    k.style.display = "none";
                    e.insertBefore(k, e.firstChild).id = o + "-" + j;
                    f.frameBorder = "0";
                    f.id = o + "-frame-" + j;
                    /MSIE[ ]+6/.test(navigator.userAgent) && (f[i] = "javascript:false");
                    f.allowTransparency = "true";
                    l[d](f);
                    try {
                        f.contentWindow[n].open()
                    } catch (s) {
                        a.domain = h.domain, p = "javascript:var d=" + n + ".open();d.domain='" + h.domain + "';", f[i] = p + "void(0);"
                    }
                    try {
                        var r = f.contentWindow[n];
                        r.write(b());
                        r.close()
                    } catch (t) {
                        f[i] = p + 'd.write("' + b().replace(/"/g, String.fromCharCode(92) + '"') + '");d.close();'
                    }
                    a.P(2)
                };
                a.l && setTimeout(q, 0)
            })()
        }();
        c[b].lv = "1";
        return c[b]
    }
    var o = "lightningjs",
        k = window[o] = g(o);
    k.require = g;
    k.modules = c
}({});
window.usabilla_live = lightningjs.require("usabilla_live", "//w.usabilla.com/dfe1bdfaed92.js");