'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
})(function ($) {

    var pluses = /\+/g;

    function raw(s) {
        return s;
    }

    function decoded(s) {
        return decodeURIComponent(s.replace(pluses, ' '));
    }

    function converted(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            return config.json ? JSON.parse(s) : s;
        } catch (er) {}
    }

    var config = $.cookie = function (key, value, options) {

        // write
        if (value !== undefined) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = config.json ? JSON.stringify(value) : String(value);

            return document.cookie = [config.raw ? key : encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
        }

        // read
        var decode = config.raw ? raw : decoded;
        var cookies = document.cookie.split('; ');
        var result = key ? undefined : {};
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = decode(parts.join('='));

            if (key && key === name) {
                result = converted(cookie);
                break;
            }

            if (!key) {
                result[name] = converted(cookie);
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) !== undefined) {
            // Must not alter options, thus extending a fresh object...
            $.cookie(key, '', $.extend({}, options, { expires: -1 }));
            return true;
        }
        return false;
    };
});

/* jshint strict : false */

/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : undefined || window;(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var s = function s(t) {
            var e,
                i = [],
                s = t.length;for (e = 0; e !== s; i.push(t[e++])) {}return i;
        },
            r = function r(t, e, s) {
            i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render;
        },
            n = 1e-10,
            a = i._internals,
            o = a.isSelector,
            h = a.isArray,
            l = r.prototype = i.to({}, .1, {}),
            _ = [];r.version = "1.17.0", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, l.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this);
        }, l.updateTo = function (t, e) {
            var s,
                r = this.ratio,
                n = this.vars.immediateRender || t.immediateRender;e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));for (s in t) {
                this.vars[s] = t[s];
            }if (this._initted || n) if (e) this._initted = !1, n && this.render(0, !0, !0);else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var a = this._time;this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1);
            } else if (this._time > 0 || n) {
                this._initted = !1, this._init();for (var o, h = 1 / (1 - r), l = this._firstPT; l;) {
                    o = l.s + l.c, l.c *= h, l.s = o - l.c, l = l._next;
                }
            }return this;
        }, l.render = function (t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();var s,
                r,
                o,
                h,
                l,
                _,
                u,
                c,
                f = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._time,
                m = this._totalTime,
                d = this._cycle,
                g = this._duration,
                v = this._rawPrevTime;if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > v || v === n) && v !== t && (i = !0, v > n && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || v === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && v > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = c = !e || t || v === t ? t : n)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = g + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / g, _ = this._easeType, u = this._easePower, (1 === _ || 3 === _ && l >= .5) && (l = 1 - l), 3 === _ && (l *= 2), 1 === u ? l *= l : 2 === u ? l *= l * l : 3 === u ? l *= l * l * l : 4 === u && (l *= l * l * l * l), this.ratio = 1 === _ ? 1 - l : 2 === _ ? l : .5 > this._time / g ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && d === this._cycle) return m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")), void 0;if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = m, this._rawPrevTime = v, this._cycle = d, a.lazyTweens.push(this), this._lazy = [t, e], void 0;this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), o = this._firstPT; o;) {
                o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
            }this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || s) && this._callback("onUpdate")), this._cycle !== d && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0));
        }, r.to = function (t, e, i) {
            return new r(t, e, i);
        }, r.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i);
        }, r.fromTo = function (t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s);
        }, r.staggerTo = r.allTo = function (t, e, n, a, l, u, c) {
            a = a || 0;var f,
                p,
                m,
                d,
                g = n.delay || 0,
                v = [],
                y = function y() {
                n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), l.apply(c || n.callbackScope || this, u || _);
            };for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), t = t || [], 0 > a && (t = s(t), t.reverse(), a *= -1), f = t.length - 1, m = 0; f >= m; m++) {
                p = {};for (d in n) {
                    p[d] = n[d];
                }p.delay = g, m === f && l && (p.onComplete = y), v[m] = new r(t[m], e, p), g += a;
            }return v;
        }, r.staggerFrom = r.allFrom = function (t, e, i, s, n, a, o) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o);
        }, r.staggerFromTo = r.allFromTo = function (t, e, i, s, n, a, o, h) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h);
        }, r.delayedCall = function (t, e, i, s, n) {
            return new r(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: s, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: n, overwrite: 0 });
        }, r.set = function (t, e) {
            return new r(t, 0, e);
        }, r.isTweening = function (t) {
            return i.getTweensOf(t, !0).length > 0;
        };var u = function u(t, e) {
            for (var s = [], r = 0, n = t._first; n;) {
                n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(u(n, e)), r = s.length), n = n._next;
            }return s;
        },
            c = r.getAllTweens = function (e) {
            return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e));
        };r.killAll = function (t, i, s, r) {
            null == i && (i = !0), null == s && (s = !0);var n,
                a,
                o,
                h = c(0 != r),
                l = h.length,
                _ = i && s && r;for (o = 0; l > o; o++) {
                a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1));
            }
        }, r.killChildTweensOf = function (t, e) {
            if (null != t) {
                var n,
                    l,
                    _,
                    u,
                    c,
                    f = a.tweenLookup;if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), h(t)) for (u = t.length; --u > -1;) {
                    r.killChildTweensOf(t[u], e);
                } else {
                    n = [];for (_ in f) {
                        for (l = f[_].target.parentNode; l;) {
                            l === t && (n = n.concat(f[_].tweens)), l = l.parentNode;
                        }
                    }for (c = n.length, u = 0; c > u; u++) {
                        e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1);
                    }
                }
            }
        };var f = function f(t, i, s, r) {
            i = i !== !1, s = s !== !1, r = r !== !1;for (var n, a, o = c(r), h = i && s && r, l = o.length; --l > -1;) {
                a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t);
            }
        };return r.pauseAll = function (t, e, i) {
            f(!0, t, e, i);
        }, r.resumeAll = function (t, e, i) {
            f(!1, t, e, i);
        }, r.globalTimeScale = function (e) {
            var s = t._rootTimeline,
                r = i.ticker.time;return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale;
        }, l.progress = function (t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration();
        }, l.totalProgress = function (t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration();
        }, l.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time;
        }, l.duration = function (e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration;
        }, l.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration);
        }, l.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat;
        }, l.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay;
        }, l.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo;
        }, r;
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var s = function s(t) {
            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;var i,
                s,
                r = this.vars;for (s in r) {
                i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
            }h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
        },
            r = 1e-10,
            n = i._internals,
            a = s._internals = {},
            o = n.isSelector,
            h = n.isArray,
            l = n.lazyTweens,
            _ = n.lazyRender,
            u = [],
            c = _gsScope._gsDefine.globals,
            f = function f(t) {
            var e,
                i = {};for (e in t) {
                i[e] = t[e];
            }return i;
        },
            p = a.pauseCallback = function (t, e, i, s) {
            var n,
                a = t._timeline,
                o = a._totalTime,
                h = t._startTime,
                l = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
                _ = l ? 0 : r,
                c = l ? r : 0;if (e || !this._forcingPlayhead) {
                for (a.pause(h), n = t._prev; n && n._startTime === h;) {
                    n._rawPrevTime = c, n = n._prev;
                }for (n = t._next; n && n._startTime === h;) {
                    n._rawPrevTime = _, n = n._next;
                }e && e.apply(s || a.vars.callbackScope || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o);
            }
        },
            m = function m(t) {
            var e,
                i = [],
                s = t.length;for (e = 0; e !== s; i.push(t[e++])) {}return i;
        },
            d = s.prototype = new e();return s.version = "1.17.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function (t, e, s, r) {
            var n = s.repeat && c.TweenMax || i;return e ? this.add(new n(t, e, s), r) : this.set(t, s, r);
        }, d.from = function (t, e, s, r) {
            return this.add((s.repeat && c.TweenMax || i).from(t, e, s), r);
        }, d.fromTo = function (t, e, s, r, n) {
            var a = r.repeat && c.TweenMax || i;return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n);
        }, d.staggerTo = function (t, e, r, n, a, h, l, _) {
            var u,
                c = new s({ onComplete: h, onCompleteParams: l, callbackScope: _, smoothChildTiming: this.smoothChildTiming });for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) {
                r.startAt && (r.startAt = f(r.startAt)), c.to(t[u], e, f(r), u * n);
            }return this.add(c, a);
        }, d.staggerFrom = function (t, e, i, s, r, n, a, o) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o);
        }, d.staggerFromTo = function (t, e, i, s, r, n, a, o, h) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h);
        }, d.call = function (t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r);
        }, d.set = function (t, e, s) {
            return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s);
        }, s.exportRoot = function (t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);var r,
                n,
                a = new s(t),
                o = a._timeline;for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) {
                n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
            }return o.add(a, 0), a;
        }, d.add = function (r, n, a, o) {
            var l, _, u, c, f, p;if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array || r && r.push && h(r)) {
                    for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) {
                        h(c = r[u]) && (c = new s({ tweens: c })), this.add(c, l), "string" != typeof c && "function" != typeof c && ("sequence" === a ? l = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())), l += o;
                    }return this._uncache(!0);
                }if ("string" == typeof r) return this.addLabel(r, n);if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";r = i.delayedCall(0, r);
            }if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (f = this, p = f.rawTime() > r._startTime; f._timeline;) {
                p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
            }return this;
        }, d.remove = function (e) {
            if (e instanceof t) return this._remove(e, !1);if (e instanceof Array || e && e.push && h(e)) {
                for (var i = e.length; --i > -1;) {
                    this.remove(e[i]);
                }return this;
            }return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e);
        }, d._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);var s = this._last;return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
        }, d.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
        }, d.insert = d.insertMultiple = function (t, e, i, s) {
            return this.add(t, e || 0, i, s);
        }, d.appendMultiple = function (t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
        }, d.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this;
        }, d.addPause = function (t, e, s, r) {
            var n = i.delayedCall(0, p, ["{self}", e, s, r], this);return n.data = "isPause", this.add(n, t);
        }, d.removeLabel = function (t) {
            return delete this._labels[t], this;
        }, d.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1;
        }, d._parseTimeOrLabel = function (e, i, s, r) {
            var n;if (r instanceof t && r.timeline === this) this.remove(r);else if (r && (r instanceof Array || r.push && h(r))) for (n = r.length; --n > -1;) {
                r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
            }if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());else {
                if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration();
            }return Number(e) + i;
        }, d.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1);
        }, d.stop = function () {
            return this.paused(!0);
        }, d.gotoAndPlay = function (t, e) {
            return this.play(t, e);
        }, d.gotoAndStop = function (t, e) {
            return this.pause(t, e);
        }, d.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);var s,
                n,
                a,
                o,
                h,
                u = this._dirty ? this.totalDuration() : this._totalDuration,
                c = this._time,
                f = this._startTime,
                p = this._timeScale,
                m = this._paused;if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = u + 1e-4;else if (1e-7 > t) {
                if (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n) for (s = this._first; s && 0 === s._startTime;) {
                        s._duration || (n = !1), s = s._next;
                    }t = 0, this._initted || (h = !0);
                }
            } else this._totalTime = this._time = this._rawPrevTime = t;if (this._time !== c && this._first || i || h) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= c) for (s = this._first; s && (a = s._next, !this._paused || m);) {
                    (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                } else for (s = this._last; s && (a = s._prev, !this._paused || m);) {
                    (s._active || c >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                }this._onUpdate && (e || (l.length && _(), this._callback("onUpdate"))), o && (this._gc || (f === this._startTime || p !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)));
            }
        }, d._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof s && t._hasPausedChild()) return !0;t = t._next;
            }return !1;
        }, d.getChildren = function (t, e, s, r) {
            r = r || -9999999999;for (var n = [], a = this._first, o = 0; a;) {
                r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
            }return n;
        }, d.getTweensOf = function (t, e) {
            var s,
                r,
                n = this._gc,
                a = [],
                o = 0;for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;) {
                (s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
            }return n && this._enabled(!1, !0), a;
        }, d.recent = function () {
            return this._recent;
        }, d._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;e = e.timeline;
            }return !1;
        }, d.shiftChildren = function (t, e, i) {
            i = i || 0;for (var s, r = this._first, n = this._labels; r;) {
                r._startTime >= i && (r._startTime += t), r = r._next;
            }if (e) for (s in n) {
                n[s] >= i && (n[s] += t);
            }return this._uncache(!0);
        }, d._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) {
                i[s]._kill(t, e) && (r = !0);
            }return r;
        }, d.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
                i = e.length;for (this._time = this._totalTime = 0; --i > -1;) {
                e[i]._enabled(!1, !1);
            }return t !== !1 && (this._labels = {}), this._uncache(!0);
        }, d.invalidate = function () {
            for (var e = this._first; e;) {
                e.invalidate(), e = e._next;
            }return t.prototype.invalidate.call(this);
        }, d._enabled = function (t, i) {
            if (t === this._gc) for (var s = this._first; s;) {
                s._enabled(t, !0), s = s._next;
            }return e.prototype._enabled.call(this, t, i);
        }, d.totalTime = function () {
            this._forcingPlayhead = !0;var e = t.prototype.totalTime.apply(this, arguments);return this._forcingPlayhead = !1, e;
        }, d.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
        }, d.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, s = 0, r = this._last, n = 999999999999; r;) {
                        e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                    }this._duration = this._totalDuration = s, this._dirty = !1;
                }return this._totalDuration;
            }return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this;
        }, d.paused = function (e) {
            if (!e) for (var i = this._first, s = this._time; i;) {
                i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
            }return t.prototype.paused.apply(this, arguments);
        }, d.usesFrames = function () {
            for (var e = this._timeline; e._timeline;) {
                e = e._timeline;
            }return e === t._rootFramesTimeline;
        }, d.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
        }, s;
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
        var s = function s(e) {
            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0;
        },
            r = 1e-10,
            n = e._internals,
            a = n.lazyTweens,
            o = n.lazyRender,
            h = new i(null, null, 1, 0),
            l = s.prototype = new t();return l.constructor = s, l.kill()._gc = !1, s.version = "1.17.0", l.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this);
        }, l.addCallback = function (t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i);
        }, l.removeCallback = function (t, e) {
            if (t) if (null == e) this._kill(null, t);else for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) {
                i[s]._startTime === r && i[s]._enabled(!1, !1);
            }return this;
        }, l.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e);
        }, l.tweenTo = function (t, i) {
            i = i || {};var s,
                r,
                n,
                a = { ease: h, useFrames: this.usesFrames(), immediateRender: !1 };for (r in i) {
                a[r] = i[r];
            }return a.time = this._parseTimeOrLabel(t), s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, n = new e(this, s, a), a.onStart = function () {
                n.target.paused(!0), n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), i.onStart && n._callback("onStart");
            }, n;
        }, l.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }, i.immediateRender = i.immediateRender !== !1;var s = this.tweenTo(e, i);return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001);
        }, l.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);var s,
                n,
                h,
                l,
                _,
                u,
                c = this._dirty ? this.totalDuration() : this._totalDuration,
                f = this._duration,
                p = this._time,
                m = this._totalTime,
                d = this._startTime,
                g = this._timeScale,
                v = this._rawPrevTime,
                y = this._paused,
                T = this._cycle;if (t >= c) this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, l = "onComplete", _ = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > v || v === r) && v !== t && this._first && (_ = !0, v > r && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4);else if (1e-7 > t) {
                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === f && v !== r && (v > 0 || 0 > t && v >= 0) && !this._locked) && (l = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (_ = n = !0, l = "onReverseComplete") : v >= 0 && this._first && (_ = !0), this._rawPrevTime = t;else {
                    if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n) for (s = this._first; s && 0 === s._startTime;) {
                        s._duration || (n = !1), s = s._next;
                    }t = 0, this._initted || (_ = !0);
                }
            } else 0 === f && 0 > v && (_ = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = f + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time));if (this._cycle !== T && !this._locked) {
                var x = this._yoyo && 0 !== (1 & T),
                    w = x === (this._yoyo && 0 !== (1 & this._cycle)),
                    b = this._totalTime,
                    P = this._cycle,
                    k = this._rawPrevTime,
                    S = this._time;if (this._totalTime = T * f, T > this._cycle ? x = !x : this._totalTime += f, this._time = p, this._rawPrevTime = 0 === f ? v - 1e-4 : v, this._cycle = T, this._locked = !0, p = x ? 0 : f, this.render(p, e, 0 === f), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), w && (p = x ? f + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !y) return;this._time = S, this._totalTime = b, this._cycle = P, this._rawPrevTime = k;
            }if (!(this._time !== p && this._first || i || _)) return m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")), void 0;if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= p) for (s = this._first; s && (h = s._next, !this._paused || y);) {
                (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = h;
            } else for (s = this._last; s && (h = s._prev, !this._paused || y);) {
                (s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = h;
            }this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), l && (this._locked || this._gc || (d === this._startTime || g !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)));
        }, l.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);var s,
                r,
                n = [],
                a = this.getChildren(t, e, i),
                o = 0,
                h = a.length;for (s = 0; h > s; s++) {
                r = a[s], r.isActive() && (n[o++] = r);
            }return n;
        }, l.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);var e,
                i = this.getLabelsArray(),
                s = i.length;for (e = 0; s > e; e++) {
                if (i[e].time > t) return i[e].name;
            }return null;
        }, l.getLabelBefore = function (t) {
            null == t && (t = this._time);for (var e = this.getLabelsArray(), i = e.length; --i > -1;) {
                if (t > e[i].time) return e[i].name;
            }return null;
        }, l.getLabelsArray = function () {
            var t,
                e = [],
                i = 0;for (t in this._labels) {
                e[i++] = { time: this._labels[t], name: t };
            }return e.sort(function (t, e) {
                return t.time - e.time;
            }), e;
        }, l.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration();
        }, l.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration();
        }, l.totalDuration = function (e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
        }, l.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time;
        }, l.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat;
        }, l.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay;
        }, l.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo;
        }, l.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8);
        }, s;
    }, !0), function () {
        var t = 180 / Math.PI,
            e = [],
            i = [],
            s = [],
            r = {},
            n = _gsScope._gsDefine.globals,
            a = function a(t, e, i, s) {
            this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t;
        },
            o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            h = function h(t, e, i, s) {
            var r = { a: t },
                n = {},
                a = {},
                o = { c: s },
                h = (t + e) / 2,
                l = (e + i) / 2,
                _ = (i + s) / 2,
                u = (h + l) / 2,
                c = (l + _) / 2,
                f = (c - u) / 8;return r.b = h + (t - h) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + c) / 2, a.b = c - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o];
        },
            l = function l(t, r, n, a, o) {
            var l,
                _,
                u,
                c,
                f,
                p,
                m,
                d,
                g,
                v,
                y,
                T,
                x,
                w = t.length - 1,
                b = 0,
                P = t[0].a;for (l = 0; w > l; l++) {
                f = t[b], _ = f.a, u = f.d, c = t[b + 1].d, o ? (y = e[l], T = i[l], x = .25 * (T + y) * r / (a ? .5 : s[l] || .5), p = u - (u - _) * (a ? .5 * r : 0 !== y ? x / y : 0), m = u + (c - u) * (a ? .5 * r : 0 !== T ? x / T : 0), d = u - (p + ((m - p) * (3 * y / (y + T) + .5) / 4 || 0))) : (p = u - .5 * (u - _) * r, m = u + .5 * (c - u) * r, d = u - (p + m) / 2), p += d, m += d, f.c = g = p, f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
            }f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = h(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]));
        },
            _ = function _(t, s, r, n) {
            var o,
                h,
                l,
                _,
                u,
                c,
                f = [];if (n) for (t = [n].concat(t), h = t.length; --h > -1;) {
                "string" == typeof (c = t[h][s]) && "=" === c.charAt(1) && (t[h][s] = n[s] + Number(c.charAt(0) + c.substr(2)));
            }if (o = t.length - 2, 0 > o) return f[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), f;for (h = 0; o > h; h++) {
                l = t[h][s], _ = t[h + 1][s], f[h] = new a(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
            }return f[h] = new a(t[h][s], 0, 0, t[h + 1][s]), f;
        },
            u = function u(t, n, a, h, _u, c) {
            var f,
                p,
                m,
                d,
                g,
                v,
                y,
                T,
                x = {},
                w = [],
                b = c || t[0];_u = "string" == typeof _u ? "," + _u + "," : o, null == n && (n = 1);for (p in t[0]) {
                w.push(p);
            }if (t.length > 1) {
                for (T = t[t.length - 1], y = !0, f = w.length; --f > -1;) {
                    if (p = w[f], Math.abs(b[p] - T[p]) > .05) {
                        y = !1;break;
                    }
                }y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3]);
            }for (e.length = i.length = s.length = 0, f = w.length; --f > -1;) {
                p = w[f], r[p] = -1 !== _u.indexOf("," + p + ","), x[p] = _(t, p, r[p], c);
            }for (f = e.length; --f > -1;) {
                e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
            }if (!h) {
                for (f = w.length; --f > -1;) {
                    if (r[p]) for (m = x[w[f]], v = m.length - 1, d = 0; v > d; d++) {
                        g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                    }
                }for (f = s.length; --f > -1;) {
                    s[f] = Math.sqrt(s[f]);
                }
            }for (f = w.length, d = a ? 4 : 1; --f > -1;) {
                p = w[f], m = x[p], l(m, n, a, h, r[p]), y && (m.splice(0, d), m.splice(m.length - d, d));
            }return x;
        },
            c = function c(t, e, i) {
            e = e || "soft";var s,
                r,
                n,
                o,
                h,
                l,
                _,
                u,
                c,
                f,
                p,
                m = {},
                d = "cubic" === e ? 3 : 2,
                g = "soft" === e,
                v = [];if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";for (c in t[0]) {
                v.push(c);
            }for (l = v.length; --l > -1;) {
                for (c = v[l], m[c] = h = [], f = 0, u = t.length, _ = 0; u > _; _++) {
                    s = null == i ? t[_][c] : "string" == typeof (p = t[_][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2), h[f++] = s;
                }for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d) {
                    s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[f++] = p = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                }h.length = f;
            }return m;
        },
            f = function f(t, e, i) {
            for (var s, r, n, a, o, h, l, _, u, c, f, p = 1 / i, m = t.length; --m > -1;) {
                for (c = t[m], n = c.a, a = c.d - n, o = c.c - n, h = c.b - n, s = r = 0, _ = 1; i >= _; _++) {
                    l = p * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s;
                }
            }
        },
            p = function p(t, e) {
            e = e >> 0 || 6;var i,
                s,
                r,
                n,
                a = [],
                o = [],
                h = 0,
                l = 0,
                _ = e - 1,
                u = [],
                c = [];for (i in t) {
                f(t[i], a, e);
            }for (r = a.length, s = 0; r > s; s++) {
                h += Math.sqrt(a[s]), n = s % e, c[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = c, o[n] = l, h = 0, c = []);
            }return { length: l, lengths: o, segments: u };
        },
            m = _gsScope._gsDefine.plugin({ propName: "bezier", priority: -1, version: "1.3.4", API: 2, global: !0, init: function init(t, e, i) {
                this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);var s,
                    r,
                    n,
                    a,
                    o,
                    h = e.values || [],
                    l = {},
                    _ = h[0],
                    f = e.autoRotate || i.vars.orientToBezier;this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]] : null;for (s in _) {
                    this._props.push(s);
                }for (n = this._props.length; --n > -1;) {
                    s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                }if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                    var m = p(this._beziers, this._timeRes);this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
                }if (f = this._autoRotate) for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                    for (a = 0; 3 > a; a++) {
                        s = f[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                    }s = f[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s];
                }return this._startRatio = i.vars.runBackwards ? 1 : 0, !0;
            }, set: function set(e) {
                var i,
                    s,
                    r,
                    n,
                    a,
                    o,
                    h,
                    l,
                    _,
                    u,
                    c = this._segCount,
                    f = this._func,
                    p = this._target,
                    m = e !== this._startRatio;if (this._timeRes) {
                    if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && c - 1 > r) {
                        for (l = c - 1; l > r && e >= (this._l2 = _[++r]);) {}this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0];
                    } else if (this._l1 > e && r > 0) {
                        for (; r > 0 && (this._l1 = _[--r]) >= e;) {}0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si];
                    }if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                        for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]);) {}this._s1 = u[r - 1], this._si = r;
                    } else if (this._s1 > e && r > 0) {
                        for (; r > 0 && (this._s1 = u[--r]) >= e;) {}0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r;
                    }o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
                } else i = 0 > e ? 0 : e >= 1 ? c - 1 : c * e >> 0, o = (e - i * (1 / c)) * c;for (s = 1 - o, r = this._props.length; --r > -1;) {
                    n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = Math.round(h)), f[n] ? p[n](h) : p[n] = h;
                }if (this._autoRotate) {
                    var d,
                        g,
                        v,
                        y,
                        T,
                        x,
                        w,
                        b = this._autoRotate;for (r = b.length; --r > -1;) {
                        n = b[r][2], x = b[r][3] || 0, w = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[r], f[n] ? p[n](h) : p[n] = h);
                    }
                }
            } }),
            d = m.prototype;m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
            return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
        }, m._cssRegister = function () {
            var t = n.CSSPlugin;if (t) {
                var e = t._internals,
                    i = e._parseToProxy,
                    s = e._setPluginRatio,
                    r = e.CSSPropTween;e._registerComplexSpecialProp("bezier", { parser: function parser(t, e, n, a, o, h) {
                        e instanceof Array && (e = { values: e }), h = new m();var l,
                            _,
                            u,
                            c = e.values,
                            f = c.length - 1,
                            p = [],
                            d = {};if (0 > f) return o;for (l = 0; f >= l; l++) {
                            u = i(t, c[l], a, o, h, f !== l), p[l] = u.end;
                        }for (_ in e) {
                            d[_] = e[_];
                        }return d.values = p, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [["left", "top", "rotation", l, !1]] : null != u.end.x ? [["x", "y", "rotation", l, !1]] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o;
                    } });
            }
        }, d._roundProps = function (t, e) {
            for (var i = this._overwriteProps, s = i.length; --s > -1;) {
                (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e);
            }
        }, d._kill = function (t) {
            var e,
                i,
                s = this._props;for (e in this._beziers) {
                if (e in t) for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) {
                    s[i] === e && s.splice(i, 1);
                }
            }return this._super._kill.call(this, t);
        };
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
        var i,
            s,
            r,
            n,
            a = function a() {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio;
        },
            o = _gsScope._gsDefine.globals,
            h = {},
            l = a.prototype = new t("css");l.constructor = a, a.version = "1.17.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, l = "px", a.suffixMap = { top: l, right: l, bottom: l, left: l, width: l, height: l, fontSize: l, padding: l, margin: l, perspective: l, lineHeight: "" };var _,
            u,
            c,
            f,
            p,
            m,
            d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            T = /(?:\d|\-|\+|=|#|\.)*/g,
            x = /opacity *= *([^)]*)/i,
            w = /opacity:([^;]*)/i,
            b = /alpha\(opacity *=.+?\)/i,
            P = /^(rgb|hsl)/,
            k = /([A-Z])/g,
            S = /-([a-z])/gi,
            R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            O = function O(t, e) {
            return e.toUpperCase();
        },
            A = /(?:Left|Right|Width)/i,
            C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            M = /,(?=[^\)]*(?:\(|$))/gi,
            z = Math.PI / 180,
            I = 180 / Math.PI,
            F = {},
            N = document,
            E = function E(t) {
            return N.createElementNS ? N.createElementNS("http://www.w3.org/1999/xhtml", t) : N.createElement(t);
        },
            L = E("div"),
            X = E("img"),
            B = a._internals = { _specialProps: h },
            Y = navigator.userAgent,
            j = function () {
            var t = Y.indexOf("Android"),
                e = E("a");return c = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), p = c && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), f = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1;
        }(),
            U = function U(t) {
            return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
        },
            q = function q(t) {
            window.console && console.log(t);
        },
            V = "",
            G = "",
            W = function W(t, e) {
            e = e || L;var i,
                s,
                r = e.style;if (void 0 !== r[t]) return t;for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];) {}return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null;
        },
            Z = N.defaultView ? N.defaultView.getComputedStyle : function () {},
            Q = a.getStyle = function (t, e, i, s, r) {
            var n;return j || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : U(t);
        },
            $ = B.convertToPixels = function (t, i, s, r, n) {
            if ("px" === r || !r) return s;if ("auto" === r || !s) return 0;var o,
                h,
                l,
                _ = A.test(i),
                u = t,
                c = L.style,
                f = 0 > s;if (f && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);else {
                if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) c[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;else {
                    if (u = t.parentNode || N.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;c[_ ? "width" : "height"] = s + r;
                }u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0));
            }return f ? -o : o;
        },
            H = B.calculateOffset = function (t, e, i) {
            if ("absolute" !== Q(t, "position", i)) return 0;var s = "left" === e ? "Left" : "Top",
                r = Q(t, "margin" + s, i);return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0);
        },
            K = function K(t, e) {
            var i,
                s,
                r,
                n = {};if (e = e || Z(t, null)) {
                if (i = e.length) for (; --i > -1;) {
                    r = e[i], (-1 === r.indexOf("-transform") || Pe === r) && (n[r.replace(S, O)] = e.getPropertyValue(r));
                } else for (i in e) {
                    (-1 === i.indexOf("Transform") || be === i) && (n[i] = e[i]);
                }
            } else if (e = t.currentStyle || t.style) for (i in e) {
                "string" == typeof i && void 0 === n[i] && (n[i.replace(S, O)] = e[i]);
            }return j || (n.opacity = U(t)), s = Ne(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Se && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n;
        },
            J = function J(t, e, i, s, r) {
            var n,
                a,
                o,
                h = {},
                l = t.style;for (a in i) {
                "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== l[a] && (o = new fe(l, a, l[a], o)));
            }if (s) for (a in s) {
                "className" !== a && (h[a] = s[a]);
            }return { difs: h, firstMPT: o };
        },
            te = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
            ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            ie = function ie(t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                r = te[e],
                n = r.length;for (i = i || Z(t, null); --n > -1;) {
                s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
            }return s;
        },
            se = function se(t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");var i = t.split(" "),
                s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t;
        },
            re = function re(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e);
        },
            ne = function ne(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t);
        },
            ae = function ae(t, e, i, s) {
            var r,
                n,
                a,
                o,
                h,
                l = 1e-6;return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), h = "=" === t.charAt(1), a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (h ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), l > o && o > -l && (o = 0), o;
        },
            oe = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
            he = function he(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5;
        },
            le = a.parseColor = function (t) {
            var e, i, s, r, n, a;return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = he(r + 1 / 3, e, i), t[1] = he(r, e, i), t[2] = he(r - 1 / 3, e, i), t) : (t = t.match(d) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black;
        },
            _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for (l in oe) {
            _e += "|" + l + "\\b";
        }_e = RegExp(_e + ")", "gi");var ue = function ue(t, e, i, s) {
            if (null == t) return function (t) {
                return t;
            };var r,
                n = e ? (t.match(_e) || [""])[0] : "",
                a = t.split(n).join("").match(v) || [],
                o = t.substr(0, t.indexOf(a[0])),
                h = ")" === t.charAt(t.length - 1) ? ")" : "",
                l = -1 !== t.indexOf(" ") ? " " : ",",
                _ = a.length,
                u = _ > 0 ? a[0].replace(d, "") : "";return _ ? r = e ? function (t) {
                var e, c, f, p;if ("number" == typeof t) t += u;else if (s && M.test(t)) {
                    for (p = t.replace(M, "|").split("|"), f = 0; p.length > f; f++) {
                        p[f] = r(p[f]);
                    }return p.join(",");
                }if (e = (t.match(_e) || [n])[0], c = t.split(e).join("").match(v) || [], f = c.length, _ > f--) for (; _ > ++f;) {
                    c[f] = i ? c[0 | (f - 1) / 2] : a[f];
                }return o + c.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "");
            } : function (t) {
                var e, n, c;if ("number" == typeof t) t += u;else if (s && M.test(t)) {
                    for (n = t.replace(M, "|").split("|"), c = 0; n.length > c; c++) {
                        n[c] = r(n[c]);
                    }return n.join(",");
                }if (e = t.match(v) || [], c = e.length, _ > c--) for (; _ > ++c;) {
                    e[c] = i ? e[0 | (c - 1) / 2] : a[c];
                }return o + e.join(l) + h;
            } : function (t) {
                return t;
            };
        },
            ce = function ce(t) {
            return t = t.split(","), function (e, i, s, r, n, a, o) {
                var h,
                    l = (i + "").split(" ");for (o = {}, h = 0; 4 > h; h++) {
                    o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                }return r.parse(e, o, n, a);
            };
        },
            fe = (B._setPluginRatio = function (t) {
            this.plugin.setRatio(t);for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) {
                e = a[o.v], o.r ? e = Math.round(e) : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
            }if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t) for (o = n.firstMPT; o;) {
                if (i = o.t, i.type) {
                    if (1 === i.type) {
                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) {
                            r += i["xn" + s] + i["xs" + (s + 1)];
                        }i.e = r;
                    }
                } else i.e = i.s + i.xs0;o = o._next;
            }
        }, function (t, e, i, s, r) {
            this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s);
        }),
            pe = (B._parseToProxy = function (t, e, i, s, r, n) {
            var a,
                o,
                h,
                l,
                _,
                u = s,
                c = {},
                f = {},
                p = i._transform,
                m = F;for (i._transform = null, F = e, s = _ = i.parse(t, e, s, r), F = m, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, c[o] = s.s, n || (l = new fe(s, "s", o, l, s.r), s.c = 0), 1 === s.type)) for (a = s.l; --a > 0;) {
                    h = "xn" + a, o = s.p + "_" + h, f[o] = s.data[h], c[o] = s[h], n || (l = new fe(s, h, o, l, s.rxp[h]));
                }s = s._next;
            }return { proxy: c, end: f, firstMPT: l, pt: _ };
        }, B.CSSPropTween = function (t, e, s, r, a, o, h, l, _, u, c) {
            this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof pe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === c ? s + r : c, a && (this._next = a, a._prev = this);
        }),
            me = function me(t, e, i, s, r, n) {
            var a = new pe(t, e, i, s - i, r, -1, n);return a.b = i, a.e = a.xs0 = s, a;
        },
            de = a.parseComplex = function (t, e, i, s, r, n, a, o, h, l) {
            i = i || n || "", a = new pe(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, s), s += "";var u,
                c,
                f,
                p,
                m,
                v,
                y,
                T,
                x,
                w,
                b,
                k,
                S = i.split(", ").join(",").split(" "),
                R = s.split(", ").join(",").split(" "),
                O = S.length,
                A = _ !== !1;for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), O = S.length), O !== R.length && (S = (n || "").split(" "), O = S.length), a.plugin = h, a.setRatio = l, u = 0; O > u; u++) {
                if (p = S[u], m = R[u], T = parseFloat(p), T || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), A && -1 !== m.indexOf("px"), !0);else if (r && ("#" === p.charAt(0) || oe[p] || P.test(p))) k = "," === m.charAt(m.length - 1) ? ")," : ")", p = le(p), m = le(m), x = p.length + m.length > 6, x && !j && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (j || (x = !1), a.appendXtra(x ? "rgba(" : "rgb(", p[0], m[0] - p[0], ",", !0, !0).appendXtra("", p[1], m[1] - p[1], ",", !0).appendXtra("", p[2], m[2] - p[2], x ? "," : k, !0), x && (p = 4 > p.length ? 1 : p[3], a.appendXtra("", p, (4 > m.length ? 1 : m[3]) - p, k, !1)));else if (v = p.match(d)) {
                    if (y = m.match(g), !y || y.length !== v.length) return a;for (f = 0, c = 0; v.length > c; c++) {
                        b = v[c], w = p.indexOf(b, f), a.appendXtra(p.substr(f, w - f), Number(b), re(y[c], b), "", A && "px" === p.substr(w + b.length, 2), 0 === c), f = w + b.length;
                    }a["xs" + a.l] += p.substr(f);
                } else a["xs" + a.l] += a.l ? " " + p : p;
            }if (-1 !== s.indexOf("=") && a.data) {
                for (k = a.xs0 + a.data.s, u = 1; a.l > u; u++) {
                    k += a["xs" + u] + a.data["xn" + u];
                }a.e = k + a["xs" + u];
            }return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a;
        },
            ge = 9;for (l = pe.prototype, l.l = l.pr = 0; --ge > 0;) {
            l["xn" + ge] = 0, l["xs" + ge] = "";
        }l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function (t, e, i, s, r, n) {
            var a = this,
                o = a.l;return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = { s: e + i }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a);
        };var ve = function ve(t, e) {
            e = e || {}, this.p = e.prefix ? W(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0;
        },
            ye = B._registerComplexSpecialProp = function (t, e, i) {
            "object" != (typeof e === 'undefined' ? 'undefined' : _typeof(e)) && (e = { parser: i });var s,
                r,
                n = t.split(","),
                a = e.defaultValue;for (i = i || [a], s = 0; n.length > s; s++) {
                e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ve(n[s], e);
            }
        },
            Te = function Te(t) {
            if (!h[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";ye(t, { parser: function parser(t, i, s, r, n, a, l) {
                        var _ = o.com.greensock.plugins[e];return _ ? (_._cssRegister(), h[s].parse(t, i, s, r, n, a, l)) : (q("Error: " + e + " js file not loaded."), n);
                    } });
            }
        };l = ve.prototype, l.parseComplex = function (t, e, i, s, r, n) {
            var a,
                o,
                h,
                l,
                _,
                u,
                c = this.keyword;if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), h = i.replace(M, "|").split("|")) : c && (o = [e], h = [i])), h) {
                for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) {
                    e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, c && (_ = e.indexOf(c), u = i.indexOf(c), _ !== u && (-1 === u ? o[a] = o[a].split(c).join("") : -1 === _ && (o[a] += " " + c)));
                }e = o.join(", "), i = h.join(", ");
            }return de(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n);
        }, l.parse = function (t, e, i, s, n, a) {
            return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a);
        }, a.registerSpecialProp = function (t, e, i) {
            ye(t, { parser: function parser(t, s, r, n, a, o) {
                    var h = new pe(t, r, 0, 0, a, 2, r, !1, i);return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h;
                }, priority: i });
        }, a.useSVGTransformAttr = c || f;var xe,
            we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            be = W("transform"),
            Pe = V + "transform",
            ke = W("transformOrigin"),
            Se = null !== W("perspective"),
            Re = B.Transform = function () {
            this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1;
        },
            Oe = window.SVGElement,
            Ae = function Ae(t, e, i) {
            var s,
                r = N.createElementNS("http://www.w3.org/2000/svg", t),
                n = /([a-z])([A-Z])/g;for (s in i) {
                r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
            }return e.appendChild(r), r;
        },
            Ce = N.documentElement,
            De = function () {
            var t,
                e,
                i,
                s = m || /Android/i.test(Y) && !window.chrome;return N.createElementNS && !s && (t = Ae("svg", Ce), e = Ae("rect", t, { width: 100, height: 50, x: 100 }), i = e.getBoundingClientRect().width, e.style[ke] = "50% 50%", e.style[be] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(f && Se), Ce.removeChild(t)), s;
        }(),
            Me = function Me(t, e, i, s, r) {
            var n,
                o,
                h,
                l,
                _,
                u,
                c,
                f,
                p,
                m,
                d,
                g,
                v,
                y,
                T = t._gsTransform,
                x = Fe(t, !0);T && (v = T.xOrigin, y = T.yOrigin), (!s || 2 > (n = s.split(" ")).length) && (c = t.getBBox(), e = se(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = l = parseFloat(n[0]), i.yOrigin = _ = parseFloat(n[1]), s && x !== Ie && (u = x[0], c = x[1], f = x[2], p = x[3], m = x[4], d = x[5], g = u * p - c * f, o = l * (p / g) + _ * (-f / g) + (f * d - p * m) / g, h = l * (-c / g) + _ * (u / g) - (u * d - c * m) / g, l = i.xOrigin = n[0] = o, _ = i.yOrigin = n[1] = h), T && (r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (o = l - v, h = _ - y, T.xOffset += o * x[0] + h * x[2] - o, T.yOffset += o * x[1] + h * x[3] - h) : T.xOffset = T.yOffset = 0), t.setAttribute("data-svg-origin", n.join(" "));
        },
            ze = function ze(t) {
            return !!(Oe && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM));
        },
            Ie = [1, 0, 0, 1, 0, 0],
            Fe = function Fe(t, e) {
            var i,
                s,
                r,
                n,
                a,
                o = t._gsTransform || new Re(),
                h = 1e5;if (be ? s = Q(t, Pe, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(C), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, (o.svg || t.getBBox && ze(t)) && (i && -1 !== (t.style[be] + "").indexOf("matrix") && (s = t.style[be], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Ie;for (r = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ge = r.length; --ge > -1;) {
                n = Number(r[ge]), r[ge] = (a = n - (n |= 0)) ? (0 | a * h + (0 > a ? -.5 : .5)) / h + n : n;
            }return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r;
        },
            Ne = B.getTransform = function (t, i, s, n) {
            if (t._gsTransform && s && !n) return t._gsTransform;var o,
                h,
                l,
                _,
                u,
                c,
                f = s ? t._gsTransform || new Re() : new Re(),
                p = 0 > f.scaleX,
                m = 2e-5,
                d = 1e5,
                g = Se ? parseFloat(Q(t, ke, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                v = parseFloat(a.defaultTransformPerspective) || 0;if (f.svg = !(!t.getBBox || !ze(t)), f.svg && (Me(t, Q(t, ke, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), xe = a.useSVGTransformAttr || De), o = Fe(t), o !== Ie) {
                if (16 === o.length) {
                    var y,
                        T,
                        x,
                        w,
                        b,
                        P = o[0],
                        k = o[1],
                        S = o[2],
                        R = o[3],
                        O = o[4],
                        A = o[5],
                        C = o[6],
                        D = o[7],
                        M = o[8],
                        z = o[9],
                        F = o[10],
                        N = o[12],
                        E = o[13],
                        L = o[14],
                        X = o[11],
                        B = Math.atan2(C, F);f.zOrigin && (L = -f.zOrigin, N = M * L - o[12], E = z * L - o[13], L = F * L + f.zOrigin - o[14]), f.rotationX = B * I, B && (w = Math.cos(-B), b = Math.sin(-B), y = O * w + M * b, T = A * w + z * b, x = C * w + F * b, M = O * -b + M * w, z = A * -b + z * w, F = C * -b + F * w, X = D * -b + X * w, O = y, A = T, C = x), B = Math.atan2(M, F), f.rotationY = B * I, B && (w = Math.cos(-B), b = Math.sin(-B), y = P * w - M * b, T = k * w - z * b, x = S * w - F * b, z = k * b + z * w, F = S * b + F * w, X = R * b + X * w, P = y, k = T, S = x), B = Math.atan2(k, P), f.rotation = B * I, B && (w = Math.cos(-B), b = Math.sin(-B), P = P * w + O * b, T = k * w + A * b, A = k * -b + A * w, C = S * -b + C * w, k = T), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY += 180), f.scaleX = (0 | Math.sqrt(P * P + k * k) * d + .5) / d, f.scaleY = (0 | Math.sqrt(A * A + z * z) * d + .5) / d, f.scaleZ = (0 | Math.sqrt(C * C + F * F) * d + .5) / d, f.skewX = 0, f.perspective = X ? 1 / (0 > X ? -X : X) : 0, f.x = N, f.y = E, f.z = L, f.svg && (f.x -= f.xOrigin - (f.xOrigin * P - f.yOrigin * O), f.y -= f.yOrigin - (f.yOrigin * k - f.xOrigin * A));
                } else if (!(Se && !n && o.length && f.x === o[4] && f.y === o[5] && (f.rotationX || f.rotationY) || void 0 !== f.x && "none" === Q(t, "display", i))) {
                    var Y = o.length >= 6,
                        j = Y ? o[0] : 1,
                        U = o[1] || 0,
                        q = o[2] || 0,
                        V = Y ? o[3] : 1;f.x = o[4] || 0, f.y = o[5] || 0, l = Math.sqrt(j * j + U * U), _ = Math.sqrt(V * V + q * q), u = j || U ? Math.atan2(U, j) * I : f.rotation || 0, c = q || V ? Math.atan2(q, V) * I + u : f.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (p ? (l *= -1, c += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (_ *= -1, c += 0 >= c ? 180 : -180)), f.scaleX = l, f.scaleY = _, f.rotation = u, f.skewX = c, Se && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * j + f.yOrigin * q), f.y -= f.yOrigin - (f.xOrigin * U + f.yOrigin * V));
                }f.zOrigin = g;for (h in f) {
                    m > f[h] && f[h] > -m && (f[h] = 0);
                }
            }return s && (t._gsTransform = f, f.svg && (xe && t.style[be] ? e.delayedCall(.001, function () {
                Be(t.style, be);
            }) : !xe && t.getAttribute("transform") && e.delayedCall(.001, function () {
                t.removeAttribute("transform");
            }))), f;
        },
            Ee = function Ee(t) {
            var e,
                i,
                s = this.data,
                r = -s.rotation * z,
                n = r + s.skewX * z,
                a = 1e5,
                o = (0 | Math.cos(r) * s.scaleX * a) / a,
                h = (0 | Math.sin(r) * s.scaleX * a) / a,
                l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                u = this.t.style,
                c = this.t.currentStyle;if (c) {
                i = h, h = -l, l = -i, e = c.filter, u.filter = "";var f,
                    p,
                    d = this.t.offsetWidth,
                    g = this.t.offsetHeight,
                    v = "absolute" !== c.position,
                    y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                    w = s.x + d * s.xPercent / 100,
                    b = s.y + g * s.yPercent / 100;if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, p = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, w += f - (f * o + p * h), b += p - (f * l + p * _)), v ? (f = d / 2, p = g / 2, y += ", Dx=" + (f - (f * o + p * h) + w) + ", Dy=" + (p - (f * l + p * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                    var P,
                        k,
                        S,
                        R = 8 > m ? 1 : -1;for (f = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), ge = 0; 4 > ge; ge++) {
                        k = ee[ge], P = c[k], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, k, parseFloat(P), P.replace(T, "")) || 0, S = i !== s[k] ? 2 > ge ? -s.ieOffsetX : -s.ieOffsetY : 2 > ge ? f - s.ieOffsetX : p - s.ieOffsetY, u[k] = (s[k] = Math.round(i - S * (0 === ge || 2 === ge ? 1 : R))) + "px";
                    }
                }
            }
        },
            Le = B.set3DTransformRatio = B.setTransformRatio = function (t) {
            var e,
                i,
                s,
                r,
                n,
                a,
                o,
                h,
                l,
                _,
                u,
                c,
                p,
                m,
                d,
                g,
                v,
                y,
                T,
                x,
                w,
                b,
                P,
                k = this.data,
                S = this.t.style,
                R = k.rotation,
                O = k.rotationX,
                A = k.rotationY,
                C = k.scaleX,
                D = k.scaleY,
                M = k.scaleZ,
                I = k.x,
                F = k.y,
                N = k.z,
                E = k.svg,
                L = k.perspective,
                X = k.force3D;if (!(((1 !== t && 0 !== t || "auto" !== X || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && X || N || L || A || O) && (!xe || !E) && Se)) return R || k.skewX || E ? (R *= z, b = k.skewX * z, P = 1e5, e = Math.cos(R) * C, r = Math.sin(R) * C, i = Math.sin(R - b) * -D, n = Math.cos(R - b) * D, b && "simple" === k.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, n *= v, k.skewY && (e *= v, r *= v)), E && (I += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, F += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset, xe && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), I += .01 * k.xPercent * m.width, F += .01 * k.yPercent * m.height), m = 1e-6, m > I && I > -m && (I = 0), m > F && F > -m && (F = 0)), T = (0 | e * P) / P + "," + (0 | r * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + I + "," + F + ")", E && xe ? this.t.setAttribute("transform", "matrix(" + T) : S[be] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + T) : S[be] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + D + "," + I + "," + F + ")", void 0;if (f && (m = 1e-4, m > C && C > -m && (C = M = 2e-5), m > D && D > -m && (D = M = 2e-5), !L || k.z || k.rotationX || k.rotationY || (L = 0)), R || k.skewX) R *= z, d = e = Math.cos(R), g = r = Math.sin(R), k.skewX && (R -= k.skewX * z, d = Math.cos(R), g = Math.sin(R), "simple" === k.skewType && (v = Math.tan(k.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v, k.skewY && (e *= v, r *= v))), i = -g, n = d;else {
                if (!(A || O || 1 !== M || L || E)) return S[be] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + F + "px," + N + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""), void 0;e = n = 1, i = r = 0;
            }l = 1, s = a = o = h = _ = u = 0, c = L ? -1 / L : 0, p = k.zOrigin, m = 1e-6, x = ",", w = "0", R = A * z, R && (d = Math.cos(R), g = Math.sin(R), o = -g, _ = c * -g, s = e * g, a = r * g, l = d, c *= d, e *= d, r *= d), R = O * z, R && (d = Math.cos(R), g = Math.sin(R), v = i * d + s * g, y = n * d + a * g, h = l * g, u = c * g, s = i * -g + s * d, a = n * -g + a * d, l *= d, c *= d, i = v, n = y), 1 !== M && (s *= M, a *= M, l *= M, c *= M), 1 !== D && (i *= D, n *= D, h *= D, u *= D), 1 !== C && (e *= C, r *= C, o *= C, _ *= C), (p || E) && (p && (I += s * -p, F += a * -p, N += l * -p + p), E && (I += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, F += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset), m > I && I > -m && (I = w), m > F && F > -m && (F = w), m > N && N > -m && (N = 0)), T = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > e && e > -m ? w : e) + x + (m > r && r > -m ? w : r) + x + (m > o && o > -m ? w : o), T += x + (m > _ && _ > -m ? w : _) + x + (m > i && i > -m ? w : i) + x + (m > n && n > -m ? w : n), O || A ? (T += x + (m > h && h > -m ? w : h) + x + (m > u && u > -m ? w : u) + x + (m > s && s > -m ? w : s), T += x + (m > a && a > -m ? w : a) + x + (m > l && l > -m ? w : l) + x + (m > c && c > -m ? w : c) + x) : T += ",0,0,0,0,1,0,", T += I + x + F + x + N + x + (L ? 1 + -N / L : 1) + ")", S[be] = T;
        };l = Re.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function parser(t, e, i, s, n, o, h) {
                if (s._lastParsedTransform === h) return n;s._lastParsedTransform = h;var l,
                    _,
                    u,
                    c,
                    f,
                    p,
                    m,
                    d,
                    g,
                    v = t._gsTransform,
                    y = s._transform = Ne(t, r, !0, h.parseTransform),
                    T = t.style,
                    x = 1e-6,
                    w = we.length,
                    b = h,
                    P = {},
                    k = "transformOrigin";if ("string" == typeof b.transform && be) u = L.style, u[be] = b.transform, u.display = "block", u.position = "absolute", N.body.appendChild(L), l = Ne(L, null, !1), N.body.removeChild(L), null != b.xPercent && (l.xPercent = ne(b.xPercent, y.xPercent)), null != b.yPercent && (l.yPercent = ne(b.yPercent, y.yPercent));else if ("object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b))) {
                    if (l = { scaleX: ne(null != b.scaleX ? b.scaleX : b.scale, y.scaleX), scaleY: ne(null != b.scaleY ? b.scaleY : b.scale, y.scaleY), scaleZ: ne(b.scaleZ, y.scaleZ), x: ne(b.x, y.x), y: ne(b.y, y.y), z: ne(b.z, y.z), xPercent: ne(b.xPercent, y.xPercent), yPercent: ne(b.yPercent, y.yPercent), perspective: ne(b.transformPerspective, y.perspective) }, m = b.directionalRotation, null != m) if ("object" == (typeof m === 'undefined' ? 'undefined' : _typeof(m))) for (u in m) {
                        b[u] = m[u];
                    } else b.rotation = m;"string" == typeof b.x && -1 !== b.x.indexOf("%") && (l.x = 0, l.xPercent = ne(b.x, y.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (l.y = 0, l.yPercent = ne(b.y, y.yPercent)), l.rotation = ae("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : y.rotation, y.rotation, "rotation", P), Se && (l.rotationX = ae("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : y.rotationX || 0, y.rotationX, "rotationX", P), l.rotationY = ae("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : y.rotationY || 0, y.rotationY, "rotationY", P)), l.skewX = null == b.skewX ? y.skewX : ae(b.skewX, y.skewX), l.skewY = null == b.skewY ? y.skewY : ae(b.skewY, y.skewY), (_ = l.skewY - y.skewY) && (l.skewX += _, l.rotation += _);
                }for (Se && null != b.force3D && (y.force3D = b.force3D, p = !0), y.skewType = b.skewType || y.skewType || a.defaultSkewType, f = y.force3D || y.z || y.rotationX || y.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, f || null == b.scale || (l.scaleZ = 1); --w > -1;) {
                    i = we[w], c = l[i] - y[i], (c > x || -x > c || null != b[i] || null != F[i]) && (p = !0, n = new pe(y, i, y[i], c, n), i in P && (n.e = P[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                }return c = b.transformOrigin, y.svg && (c || b.svgOrigin) && (d = y.xOffset, g = y.yOffset, Me(t, se(c), l, b.svgOrigin, b.smoothOrigin), n = me(y, "xOrigin", (v ? y : l).xOrigin, l.xOrigin, n, k), n = me(y, "yOrigin", (v ? y : l).yOrigin, l.yOrigin, n, k), (d !== y.xOffset || g !== y.yOffset) && (n = me(y, "xOffset", v ? d : y.xOffset, y.xOffset, n, k), n = me(y, "yOffset", v ? g : y.yOffset, y.yOffset, n, k)), c = xe ? null : "0px 0px"), (c || Se && f && y.zOrigin) && (be ? (p = !0, i = ke, c = (c || Q(t, i, r, !1, "50% 50%")) + "", n = new pe(T, i, 0, 0, n, -1, k), n.b = T[i], n.plugin = o, Se ? (u = y.zOrigin, c = c.split(" "), y.zOrigin = (c.length > 2 && (0 === u || "0px" !== c[2]) ? parseFloat(c[2]) : u) || 0, n.xs0 = n.e = c[0] + " " + (c[1] || "50%") + " 0px", n = new pe(y, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = y.zOrigin) : n.xs0 = n.e = c) : se(c + "", y)), p && (s._transformType = y.svg && xe || !f && 3 !== this._transformType ? 2 : 3), n;
            }, prefix: !0 }), ye("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), ye("borderRadius", { defaultValue: "0px", parser: function parser(t, e, i, n, a) {
                e = this.format(e);var o,
                    h,
                    l,
                    _,
                    u,
                    c,
                    f,
                    p,
                    m,
                    d,
                    g,
                    v,
                    y,
                    T,
                    x,
                    w,
                    b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    P = t.style;for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) {
                    this.p.indexOf("border") && (b[h] = W(b[h])), u = _ = Q(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), c = l = o[h], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === c.charAt(1), y ? (p = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), p *= parseFloat(c), g = c.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(c), g = c.substr((p + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", f, v), x = $(t, "borderTop", f, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (x / d) + "%") : "em" === g ? (w = $(t, "borderLeft", 1, "em"), u = T / w + "em", _ = x / w + "em") : (u = T + "px", _ = x + "px"), y && (c = parseFloat(u) + p + g, l = parseFloat(_) + p + g)), a = de(P, b[h], u + " " + _, c + " " + l, !1, "0px", a);
                }return a;
            }, prefix: !0, formatter: ue("0px 0px 0px 0px", !1, !0) }), ye("backgroundPosition", { defaultValue: "0 0", parser: function parser(t, e, i, s, n, a) {
                var o,
                    h,
                    l,
                    _,
                    u,
                    c,
                    f = "background-position",
                    p = r || Z(t, null),
                    d = this.format((p ? m ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    g = this.format(e);if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (c = Q(t, "backgroundImage").replace(R, ""), c && "none" !== c)) {
                    for (o = d.split(" "), h = g.split(" "), X.setAttribute("src", c), l = 2; --l > -1;) {
                        d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                    }d = o.join(" ");
                }return this.parseComplex(t.style, d, g, n, a);
            }, formatter: se }), ye("backgroundSize", { defaultValue: "0 0", formatter: se }), ye("perspective", { defaultValue: "0px", prefix: !0 }), ye("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), ye("transformStyle", { prefix: !0 }), ye("backfaceVisibility", { prefix: !0 }), ye("userSelect", { prefix: !0 }), ye("margin", { parser: ce("marginTop,marginRight,marginBottom,marginLeft") }), ye("padding", { parser: ce("paddingTop,paddingRight,paddingBottom,paddingLeft") }), ye("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function parser(t, e, i, s, n, a) {
                var o, h, l;return 9 > m ? (h = t.currentStyle, l = 8 > m ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a);
            } }), ye("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), ye("autoRound,strictUnits", { parser: function parser(t, e, i, s, r) {
                return r;
            } }), ye("border", { defaultValue: "0px solid #000", parser: function parser(t, e, i, s, n, a) {
                return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a);
            }, color: !0, formatter: function formatter(t) {
                var e = t.split(" ");return e[0] + " " + (e[1] || "solid") + " " + (t.match(_e) || ["#000"])[0];
            } }), ye("borderWidth", { parser: ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), ye("float,cssFloat,styleFloat", { parser: function parser(t, e, i, s, r) {
                var n = t.style,
                    a = "cssFloat" in n ? "cssFloat" : "styleFloat";return new pe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e);
            } });var Xe = function Xe(t) {
            var e,
                i = this.t,
                s = i.filter || Q(this.data, "filter") || "",
                r = 0 | this.s + this.c * t;100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(x, "opacity=" + r));
        };ye("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function parser(t, e, i, s, n, a) {
                var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                    h = t.style,
                    l = "autoAlpha" === i;return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), j ? n = new pe(h, "opacity", o, e - o, n) : (n = new pe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Xe), l && (n = new pe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n;
            } });var Be = function Be(t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e));
        },
            Ye = function Ye(t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);for (var e = this.data, i = this.t.style; e;) {
                    e.v ? i[e.p] = e.v : Be(i, e.p), e = e._next;
                }1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
        };ye("className", { parser: function parser(t, e, s, n, a, o, h) {
                var l,
                    _,
                    u,
                    c,
                    f,
                    p = t.getAttribute("class") || "",
                    m = t.style.cssText;if (a = n._classNamePT = new pe(t, s, 0, 0, a, 2), a.setRatio = Ye, a.pr = -11, i = !0, a.b = p, _ = K(t, r), u = t._gsClassPT) {
                    for (c = {}, f = u.data; f;) {
                        c[f.p] = 1, f = f._next;
                    }u.setRatio(1);
                }return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), l = J(t, _, K(t), h, c), t.setAttribute("class", p), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o);
            } });var je = function je(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e,
                    i,
                    s,
                    r,
                    n,
                    a = this.t.style,
                    o = h.transform.parse;if ("all" === this.e) a.cssText = "", r = !0;else for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) {
                    i = e[s], h[i] && (h[i].parse === o ? r = !0 : i = "transformOrigin" === i ? ke : h[i].p), Be(a, i);
                }r && (Be(a, be), n = this.t._gsTransform, n && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform));
            }
        };for (ye("clearProps", { parser: function parser(t, e, s, r, n) {
                return n = new pe(t, s, 0, 0, n, 2), n.setRatio = je, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n;
            } }), l = "bezier,throwProps,physicsProps,physics2D".split(","), ge = l.length; ge--;) {
            Te(l[ge]);
        }l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function (t, e, o) {
            if (!t.nodeType) return !1;this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;var l,
                f,
                m,
                d,
                g,
                v,
                y,
                T,
                x,
                b = t.style;if (u && "" === b.zIndex && (l = Q(t, "zIndex", r), ("auto" === l || "" === l) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (d = b.cssText, l = K(t, r), b.cssText = d + ";" + e, l = J(t, l, K(t)).difs, !j && w.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, b.cssText = d), this._firstPT = f = e.className ? h.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                for (x = 3 === this._transformType, be ? c && (u = !0, "" === b.zIndex && (y = Q(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : b.zoom = 1, m = f; m && m._next;) {
                    m = m._next;
                }T = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, m), T.setRatio = be ? Le : Ee, T.data = this._transform || Ne(t, r, !0), T.tween = o, T.pr = -1, n.pop();
            }if (i) {
                for (; f;) {
                    for (v = f._next, m = d; m && m.pr > f.pr;) {
                        m = m._next;
                    }(f._prev = m ? m._prev : g) ? f._prev._next = f : d = f, (f._next = m) ? m._prev = f : g = f, f = v;
                }this._firstPT = d;
            }return !0;
        }, l.parse = function (t, e, i, n) {
            var a,
                o,
                l,
                u,
                c,
                f,
                p,
                m,
                d,
                g,
                v = t.style;for (a in e) {
                f = e[a], o = h[a], o ? i = o.parse(t, f, a, this, i, n, e) : (c = Q(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(f) ? (d || (f = le(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = de(v, a, c, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (l = parseFloat(c), p = l || 0 === l ? c.substr((l + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (l = ie(t, a, r), p = "px") : "left" === a || "top" === a ? (l = H(t, a, r), p = "px") : (l = "opacity" !== a ? 0 : 1, p = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(T, "")) : (u = parseFloat(f), m = d ? f.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : p), f = u || 0 === u ? (g ? u + l : u) + m : e[a], p !== m && "" !== m && (u || 0 === u) && l && (l = $(t, a, l, p), "%" === m ? (l /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = l + "%")) : "em" === m ? l /= $(t, a, 1, "em") : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + l + m)), g && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pe(v, a, u || l || 0, 0, i, -1, a, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : c) : q("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, l, u - l, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, c, f), i.xs0 = m)) : i = de(v, a, c, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
            }return i;
        }, l.setRatio = function (t) {
            var e,
                i,
                s,
                r = this._firstPT,
                n = 1e-6;if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; r;) {
                    if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type) {
                        if (1 === r.type) {
                            if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;else {
                                for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) {
                                    i += r["xn" + s] + r["xs" + (s + 1)];
                                }r.t[r.p] = i;
                            }
                        } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                    } else r.t[r.p] = e + r.xs0;r = r._next;
                } else for (; r;) {
                    2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                }
            } else for (; r;) {
                if (2 !== r.type) {
                    if (r.r && -1 !== r.type) {
                        if (e = Math.round(r.s + r.c), r.type) {
                            if (1 === r.type) {
                                for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) {
                                    i += r["xn" + s] + r["xs" + (s + 1)];
                                }r.t[r.p] = i;
                            }
                        } else r.t[r.p] = e + r.xs0;
                    } else r.t[r.p] = r.e;
                } else r.setRatio(t);r = r._next;
            }
        }, l._enableTransforms = function (t) {
            this._transform = this._transform || Ne(this._target, r, !0), this._transformType = this._transform.svg && xe || !t && 3 !== this._transformType ? 2 : 3;
        };var Ue = function Ue() {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
        };l._addLazySet = function (t, e, i) {
            var s = this._firstPT = new pe(t, e, 0, 0, this._firstPT, 2);s.e = i, s.setRatio = Ue, s.data = this;
        }, l._linkCSSP = function (t, e, i, s) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t;
        }, l._kill = function (e) {
            var i,
                s,
                r,
                n = e;if (e.autoAlpha || e.alpha) {
                n = {};for (s in e) {
                    n[s] = e[s];
                }n.opacity = 1, n.autoAlpha && (n.visibility = 1);
            }return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n);
        };var qe = function qe(t, e, i) {
            var s, r, n, a;if (t.slice) for (r = t.length; --r > -1;) {
                qe(t[r], e, i);
            } else for (s = t.childNodes, r = s.length; --r > -1;) {
                n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || qe(n, e, i);
            }
        };return a.cascadeTo = function (t, i, s) {
            var r,
                n,
                a,
                o,
                h = e.to(t, i, s),
                l = [h],
                _ = [],
                u = [],
                c = [],
                f = e._internals.reservedProps;for (t = h._targets || h.target, qe(t, _, c), h.render(i, !0, !0), qe(t, u), h.render(0, !0, !0), h._enabled(!0), r = c.length; --r > -1;) {
                if (n = J(c[r], _[r], u[r]), n.firstMPT) {
                    n = n.difs;for (a in s) {
                        f[a] && (n[a] = s[a]);
                    }o = {};for (a in n) {
                        o[a] = _[r][a];
                    }l.push(e.fromTo(c[r], i, o, n));
                }
            }return l;
        }, t.activate([a]), a;
    }, !0), function () {
        var t = _gsScope._gsDefine.plugin({ propName: "roundProps", priority: -1, API: 2, init: function init(t, e, i) {
                return this._tween = i, !0;
            } }),
            e = t.prototype;e._onInitAllProps = function () {
            for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) {
                a[r[n]] = 1;
            }for (n = r.length; --n > -1;) {
                for (t = r[n], e = s._firstPT; e;) {
                    i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
                }
            }return !1;
        }, e._add = function (t, e, i, s) {
            this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e);
        };
    }(), function () {
        var t = /(?:\d|\-|\+|=|#|\.)*/g,
            e = /[A-Za-z%]/g;_gsScope._gsDefine.plugin({ propName: "attr", API: 2, version: "0.4.0", init: function init(i, s) {
                var r, n, a, o, h;if ("function" != typeof i.setAttribute) return !1;this._target = i, this._proxy = {}, this._start = {}, this._end = {}, this._suffix = {};for (r in s) {
                    this._start[r] = this._proxy[r] = n = i.getAttribute(r) + "", this._end[r] = a = s[r] + "", this._suffix[r] = o = e.test(a) ? a.replace(t, "") : e.test(n) ? n.replace(t, "") : "", o && (h = a.indexOf(o), -1 !== h && (a = a.substr(0, h))), this._addTween(this._proxy, r, parseFloat(n), a, r) || (this._suffix[r] = ""), "=" === a.charAt(1) && (this._end[r] = this._firstPT.s + this._firstPT.c + o), this._overwriteProps.push(r);
                }return !0;
            }, set: function set(t) {
                this._super.setRatio.call(this, t);for (var e, i = this._overwriteProps, s = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start, n = r === this._proxy; --s > -1;) {
                    e = i[s], this._target.setAttribute(e, r[e] + (n ? this._suffix[e] : ""));
                }
            } });
    }(), _gsScope._gsDefine.plugin({ propName: "directionalRotation", version: "0.2.1", API: 2, init: function init(t, e) {
            "object" != (typeof e === 'undefined' ? 'undefined' : _typeof(e)) && (e = { rotation: e }), this.finals = {};var i,
                s,
                r,
                n,
                a,
                o,
                h = e.useRadians === !0 ? 2 * Math.PI : 360,
                l = 1e-6;for (i in e) {
                "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
            }return !0;
        }, set: function set(t) {
            var e;if (1 !== t) this._super.setRatio.call(this, t);else for (e = this._firstPT; e;) {
                e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next;
            }
        } })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var e,
            i,
            s,
            r = _gsScope.GreenSockGlobals || _gsScope,
            n = r.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            h = n._class,
            l = function l(e, i) {
            var s = h("easing." + e, function () {}, !0),
                r = s.prototype = new t();return r.constructor = s, r.getRatio = i, s;
        },
            _ = t.register || function () {},
            u = function u(t, e, i, s) {
            var r = h("easing." + t, { easeOut: new e(), easeIn: new i(), easeInOut: new s() }, !0);return _(r, t), r;
        },
            c = function c(t, e, i) {
            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t);
        },
            f = function f(e, i) {
            var s = h("easing." + e, function (t) {
                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1;
            }, !0),
                r = s.prototype = new t();return r.constructor = s, r.getRatio = i, r.config = function (t) {
                return new s(t);
            }, s;
        },
            p = u("Back", f("BackOut", function (t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
        }), f("BackIn", function (t) {
            return t * t * ((this._p1 + 1) * t - this._p1);
        }), f("BackInOut", function (t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
        })),
            m = h("easing.SlowMo", function (t, e, i) {
            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0;
        }, !0),
            d = m.prototype = new t();return d.constructor = m, d.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e;
        }, m.ease = new m(.7, .7), d.config = m.config = function (t, e, i) {
            return new m(t, e, i);
        }, e = h("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1;
        }, !0), d = e.prototype = new t(), d.constructor = e, d.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1;
        }, d.config = e.config = function (t) {
            return new e(t);
        }, i = h("easing.RoughEase", function (e) {
            e = e || {};for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) {
                i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), p ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = { x: i, y: s };
            }for (l.sort(function (t, e) {
                return t.x - e.x;
            }), o = new c(1, 1, null), f = u; --f > -1;) {
                a = l[f], o = new c(a.x, a.y, o);
            }this._prev = new c(0, 0, 0 !== o.t ? o : o.next);
        }, !0), d = i.prototype = new t(), d.constructor = i, d.getRatio = function (t) {
            var e = this._prev;if (t > e.t) {
                for (; e.next && t >= e.t;) {
                    e = e.next;
                }e = e.prev;
            } else for (; e.prev && e.t >= t;) {
                e = e.prev;
            }return this._prev = e, e.v + (t - e.t) / e.gap * e.c;
        }, d.config = function (t) {
            return new i(t);
        }, i.ease = new i(), u("Bounce", l("BounceOut", function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        }), l("BounceIn", function (t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
        }), l("BounceInOut", function (t) {
            var e = .5 > t;return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5;
        })), u("Circ", l("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t);
        }), l("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1);
        }), l("CircInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        })), s = function s(e, i, _s) {
            var r = h("easing." + e, function (t, e) {
                this._p1 = t >= 1 ? t : 1, this._p2 = (e || _s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2;
            }, !0),
                n = r.prototype = new t();return n.constructor = r, n.getRatio = i, n.config = function (t, e) {
                return new r(t, e);
            }, r;
        }, u("Elastic", s("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1;
        }, .3), s("ElasticIn", function (t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2));
        }, .3), s("ElasticInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1;
        }, .45)), u("Expo", l("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t);
        }), l("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001;
        }), l("ExpoInOut", function (t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
        })), u("Sine", l("SineOut", function (t) {
            return Math.sin(t * o);
        }), l("SineIn", function (t) {
            return -Math.cos(t * o) + 1;
        }), l("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1);
        })), h("easing.EaseLookup", { find: function find(e) {
                return t.map[e];
            } }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p;
    }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;if (!i.TweenLite) {
        var s,
            r,
            n,
            a,
            o,
            h = function h(t) {
            var e,
                s = t.split("."),
                r = i;for (e = 0; s.length > e; e++) {
                r[s[e]] = r = r[s[e]] || {};
            }return r;
        },
            l = h("com.greensock"),
            _ = 1e-10,
            u = function u(t) {
            var e,
                i = [],
                s = t.length;for (e = 0; e !== s; i.push(t[e++])) {}return i;
        },
            c = function c() {},
            f = function () {
            var t = Object.prototype.toString,
                e = t.call([]);return function (i) {
                return null != i && (i instanceof Array || "object" == (typeof i === 'undefined' ? 'undefined' : _typeof(i)) && !!i.push && t.call(i) === e);
            };
        }(),
            p = {},
            m = function m(s, r, n, a) {
            this.sc = p[s] ? p[s].sc : [], p[s] = this, this.gsClass = null, this.func = n;var o = [];this.check = function (l) {
                for (var _, u, c, f, d = r.length, g = d; --d > -1;) {
                    (_ = p[r[d]] || new m(r[d], [])).gsClass ? (o[d] = _.gsClass, g--) : l && _.sc.push(this);
                }if (0 === g && n) for (u = ("com.greensock." + s).split("."), c = u.pop(), f = h(u.join("."))[c] = this.gsClass = n.apply(n, o), a && (i[c] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function () {
                    return f;
                }) : s === e && "undefined" != typeof module && module.exports && (module.exports = f)), d = 0; this.sc.length > d; d++) {
                    this.sc[d].check();
                }
            }, this.check(!0);
        },
            d = t._gsDefine = function (t, e, i, s) {
            return new m(t, e, i, s);
        },
            g = l._class = function (t, e, i) {
            return e = e || function () {}, d(t, [], function () {
                return e;
            }, i), e;
        };d.globals = i;var v = [0, 0, 1, 1],
            y = [],
            T = g("easing.Ease", function (t, e, i, s) {
            this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v;
        }, !0),
            x = T.map = {},
            w = T.register = function (t, e, i, s) {
            for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;) {
                for (n = h[_], r = s ? g("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) {
                    o = u[a], x[n + "." + o] = x[o + n] = r[o] = t.getRatio ? t : t[o] || new t();
                }
            }
        };for (n = T.prototype, n._calcEnd = !1, n.getRatio = function (t) {
            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);var e = this._type,
                i = this._power,
                s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2;
        }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) {
            n = s[r] + ",Power" + r, w(new T(null, null, 1, r), n, "easeOut", !0), w(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), w(new T(null, null, 3, r), n, "easeInOut");
        }x.linear = l.easing.Linear.easeIn, x.swing = l.easing.Quad.easeInOut;var b = g("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this;
        });n = b.prototype, n.addEventListener = function (t, e, i, s, r) {
            r = r || 0;var n,
                h,
                l = this._listeners[t],
                _ = 0;for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) {
                n = l[h], n.c === e && n.s === i ? l.splice(h, 1) : 0 === _ && r > n.pr && (_ = h + 1);
            }l.splice(_, 0, { c: e, s: i, up: s, pr: r }), this !== a || o || a.wake();
        }, n.removeEventListener = function (t, e) {
            var i,
                s = this._listeners[t];if (s) for (i = s.length; --i > -1;) {
                if (s[i].c === e) return s.splice(i, 1), void 0;
            }
        }, n.dispatchEvent = function (t) {
            var e,
                i,
                s,
                r = this._listeners[t];if (r) for (e = r.length, i = this._eventTarget; --e > -1;) {
                s = r[e], s && (s.up ? s.c.call(s.s || i, { type: t, target: i }) : s.c.call(s.s || i));
            }
        };var P = t.requestAnimationFrame,
            k = t.cancelAnimationFrame,
            S = Date.now || function () {
            return new Date().getTime();
        },
            R = S();for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) {
            P = t[s[r] + "RequestAnimationFrame"], k = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
        }g("Ticker", function (t, e) {
            var i,
                s,
                r,
                n,
                h,
                l = this,
                u = S(),
                f = e !== !1 && P,
                p = 500,
                m = 33,
                d = "tick",
                g = function g(t) {
                var e,
                    a,
                    o = S() - R;o > p && (u += o - m), R += o, l.time = (R - u) / 1e3, e = l.time - h, (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && l.dispatchEvent(d);
            };b.call(l), l.time = l.frame = 0, l.tick = function () {
                g(!0);
            }, l.lagSmoothing = function (t, e) {
                p = t || 1 / _, m = Math.min(e, p, 0);
            }, l.sleep = function () {
                null != r && (f && k ? k(r) : clearTimeout(r), s = c, r = null, l === a && (o = !1));
            }, l.wake = function () {
                null !== r ? l.sleep() : l.frame > 10 && (R = S() - p + 5), s = 0 === i ? c : f && P ? P : function (t) {
                    return setTimeout(t, 0 | 1e3 * (h - l.time) + 1);
                }, l === a && (o = !0), g(2);
            }, l.fps = function (t) {
                return arguments.length ? (i = t, n = 1 / (i || 60), h = this.time + n, l.wake(), void 0) : i;
            }, l.useRAF = function (t) {
                return arguments.length ? (l.sleep(), f = t, l.fps(i), void 0) : f;
            }, l.fps(t), setTimeout(function () {
                f && 5 > l.frame && l.useRAF(!1);
            }, 1500);
        }), n = l.Ticker.prototype = new l.events.EventDispatcher(), n.constructor = l.Ticker;var O = g("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, U) {
                o || a.wake();var i = this.vars.useFrames ? j : U;i.add(this, i._time), this.vars.paused && this.paused(!0);
            }
        });a = O.ticker = new l.Ticker(), n = O.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;var A = function A() {
            o && S() - R > 2e3 && a.wake(), setTimeout(A, 2e3);
        };A(), n.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }, n.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
        }, n.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1);
        }, n.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1);
        }, n.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0);
        }, n.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
        }, n.render = function () {}, n.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
        }, n.isActive = function () {
            var t,
                e = this._timeline,
                i = this._startTime;return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t;
        }, n._enabled = function (t, e) {
            return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1;
        }, n._kill = function () {
            return this._enabled(!1, !1);
        }, n.kill = function (t, e) {
            return this._kill(t, e), this;
        }, n._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) {
                e._dirty = !0, e = e.timeline;
            }return this;
        }, n._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;) {
                "{self}" === t[e] && (i[e] = this);
            }return i;
        }, n._callback = function (t) {
            var e = this.vars;e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y);
        }, n.eventCallback = function (t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;if (1 === arguments.length) return r[t];null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e);
            }return this;
        }, n.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay;
        }, n.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration);
        }, n.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration;
        }, n.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
        }, n.totalTime = function (t, e, i) {
            if (o || a.wake(), !arguments.length) return this._totalTime;if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();var s = this._totalDuration,
                        r = this._timeline;if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) {
                        r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline;
                    }
                }this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && V());
            }return this;
        }, n.progress = n.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration();
        }, n.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
        }, n.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
        }, n.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();this._startTime = i - (i - this._startTime) * this._timeScale / t;
            }return this._timeScale = t, this._uncache(!1);
        }, n.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
        }, n.paused = function (t) {
            if (!arguments.length) return this._paused;var e,
                i,
                s = this._timeline;return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this;
        };var C = g("core.SimpleTimeline", function (t) {
            O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0;
        });n = C.prototype = new O(), n.constructor = C, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function (t, e) {
            var i, s;if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren) for (s = t._startTime; i && i._startTime > s;) {
                i = i._prev;
            }return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this;
        }, n._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
        }, n.render = function (t, e, i) {
            var s,
                r = this._first;for (this._totalTime = this._time = this._rawPrevTime = t; r;) {
                s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s;
            }
        }, n.rawTime = function () {
            return o || a.wake(), this._totalTime;
        };var D = g("TweenLite", function (e, i, s) {
            if (O.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";this.target = e = "string" != typeof e ? e : D.selector(e) || e;var r,
                n,
                a,
                o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                h = this.vars.overwrite;if (this._overwrite = h = null == h ? Y[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : Y[h], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0]) for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) {
                n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = G(n, this, !1), 1 === h && this._siblings[r].length > 1 && Z(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
            } else this._propLookup = {}, this._siblings = G(e, this, !1), 1 === h && this._siblings.length > 1 && Z(e, this, null, 1, this._siblings);(this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay));
        }, !0),
            M = function M(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType);
        },
            z = function z(t, e) {
            var i,
                s = {};for (i in t) {
                B[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!E[i] || E[i] && E[i]._autoCSS) || (s[i] = t[i], delete t[i]);
            }t.css = s;
        };n = D.prototype = new O(), n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.17.0", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = 120, D.lagSmoothing = function (t, e) {
            a.lagSmoothing(t, e);
        }, D.selector = t.$ || t.jQuery || function (e) {
            var i = t.$ || t.jQuery;return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
        };var I = [],
            F = {},
            N = D._internals = { isArray: f, isSelector: M, lazyTweens: I },
            E = D._plugins = {},
            L = N.tweenLookup = {},
            X = 0,
            B = N.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1 },
            Y = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
            j = O._rootFramesTimeline = new C(),
            U = O._rootTimeline = new C(),
            q = 30,
            V = N.lazyRender = function () {
            var t,
                e = I.length;for (F = {}; --e > -1;) {
                t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            }I.length = 0;
        };U._startTime = a.time, j._startTime = a.frame, U._active = j._active = !0, setTimeout(V, 1), O._updateRoot = D.render = function () {
            var t, e, i;if (I.length && V(), U.render((a.time - U._startTime) * U._timeScale, !1, !1), j.render((a.frame - j._startTime) * j._timeScale, !1, !1), I.length && V(), a.frame >= q) {
                q = a.frame + (parseInt(D.autoSleep, 10) || 120);for (i in L) {
                    for (e = L[i].tweens, t = e.length; --t > -1;) {
                        e[t]._gc && e.splice(t, 1);
                    }0 === e.length && delete L[i];
                }if (i = U._first, (!i || i._paused) && D.autoSleep && !j._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;) {
                        i = i._next;
                    }i || a.sleep();
                }
            }
        }, a.addEventListener("tick", O._updateRoot);var G = function G(t, e, i) {
            var s,
                r,
                n = t._gsTweenID;if (L[n || (t._gsTweenID = n = "t" + X++)] || (L[n] = { target: t, tweens: [] }), e && (s = L[n].tweens, s[r = s.length] = e, i)) for (; --r > -1;) {
                s[r] === e && s.splice(r, 1);
            }return L[n].tweens;
        },
            W = function W(t, e, i, s) {
            var r,
                n,
                a = t.vars.onOverwrite;return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1;
        },
            Z = function Z(t, e, i, s, r) {
            var n, a, o, h;if (1 === s || s >= 4) {
                for (h = r.length, n = 0; h > n; n++) {
                    if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);else if (5 === s) break;
                }return a;
            }var l,
                u = e._startTime + _,
                c = [],
                f = 0,
                p = 0 === e._duration;for (n = r.length; --n > -1;) {
                (o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || Q(e, 0, p), 0 === Q(o, l, p) && (c[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (c[f++] = o)));
            }for (n = f; --n > -1;) {
                if (o = c[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                    if (2 !== s && !W(o, e)) continue;o._enabled(!1, !1) && (a = !0);
                }
            }return a;
        },
            Q = function Q(t, e, i) {
            for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                if (n += s._startTime, r *= s._timeScale, s._paused) return -100;s = s._timeline;
            }return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _;
        };n._init = function () {
            var t,
                e,
                i,
                s,
                r,
                n = this.vars,
                a = this._overwrittenProps,
                o = this._duration,
                h = !!n.immediateRender,
                l = n.ease;if (n.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};for (s in n.startAt) {
                    r[s] = n.startAt[s];
                }if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h) if (this._time > 0) this._startAt = null;else if (0 !== o) return;
            } else if (n.runBackwards && 0 !== o) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;else {
                0 !== this._time && (h = !1), i = {};for (s in n) {
                    B[s] && "autoCSS" !== s || (i[s] = n[s]);
                }if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && n.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                    if (0 === this._time) return;
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
            }if (this._ease = l = l ? l instanceof T ? l : "function" == typeof l ? new T(l, n.easeParams) : x[l] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) {
                this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
            } else e = this._initProps(this.target, this._propLookup, this._siblings, a);if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards) for (i = this._firstPT; i;) {
                i.s += i.c, i.c = -i.c, i = i._next;
            }this._onUpdate = n.onUpdate, this._initted = !0;
        }, n._initProps = function (e, i, s, r) {
            var n, a, o, h, l, _;if (null == e) return !1;F[e._gsTweenID] && V(), this.vars.css || e.style && e !== t && e.nodeType && E.css && this.vars.autoCSS !== !1 && z(this.vars, e);for (n in this.vars) {
                if (_ = this.vars[n], B[n]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));else if (E[n] && (h = new E[n]())._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = l = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: !0, n: n, pg: !0, pr: h._priority }, a = h._overwriteProps.length; --a > -1;) {
                        i[h._overwriteProps[a]] = this._firstPT;
                    }(h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0);
                } else this._firstPT = i[n] = l = { _next: this._firstPT, t: e, p: n, f: "function" == typeof e[n], n: n, pg: !1, pr: 0 }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;l && l._next && (l._next._prev = l);
            }return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && Z(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), o);
        }, n.render = function (t, e, i) {
            var s,
                r,
                n,
                a,
                o = this._time,
                h = this._duration,
                l = this._rawPrevTime;if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === _ && "isPause" !== this.data) && l !== t && (i = !0, l > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : _);else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : _)), this._initted || (i = !0);else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / h,
                    c = this._easeType,
                    f = this._easePower;(1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > t / h ? u / 2 : 1 - u / 2;
            } else this.ratio = this._ease.getRatio(t / h);if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, I.push(this), this._lazy = [t, e], void 0;this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                }for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this._callback("onStart"))), n = this._firstPT; n;) {
                    n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                }this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0));
            }
        }, n._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;var s,
                r,
                n,
                a,
                o,
                h,
                l,
                _,
                u,
                c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;if ((f(e) || M(e)) && "number" != typeof e[0]) for (s = e.length; --s > -1;) {
                this._kill(t, e[s], i) && (h = !0);
            } else {
                if (this._targets) {
                    for (s = this._targets.length; --s > -1;) {
                        if (e === this._targets[s]) {
                            o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";break;
                        }
                    }
                } else {
                    if (e !== this.target) return !1;o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all";
                }if (o) {
                    if (l = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != (typeof t === 'undefined' ? 'undefined' : _typeof(t)) || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                        for (n in l) {
                            o[n] && (u || (u = []), u.push(n));
                        }if ((u || !t) && !W(this, i, e, u)) return !1;
                    }for (n in l) {
                        (a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, h = !0), a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                    }!this._firstPT && this._initted && this._enabled(!1, !1);
                }
            }return h;
        }, n.invalidate = function () {
            return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this;
        }, n._enabled = function (t, e) {
            if (o || a.wake(), t && this._gc) {
                var i,
                    s = this._targets;if (s) for (i = s.length; --i > -1;) {
                    this._siblings[i] = G(s[i], this, !0);
                } else this._siblings = G(this.target, this, !0);
            }return O.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1;
        }, D.to = function (t, e, i) {
            return new D(t, e, i);
        }, D.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i);
        }, D.fromTo = function (t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s);
        }, D.delayedCall = function (t, e, i, s, r) {
            return new D(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: s, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 });
        }, D.set = function (t, e) {
            return new D(t, 0, e);
        }, D.getTweensOf = function (t, e) {
            if (null == t) return [];t = "string" != typeof t ? t : D.selector(t) || t;var i, s, r, n;if ((f(t) || M(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;) {
                    s = s.concat(D.getTweensOf(t[i], e));
                }for (i = s.length; --i > -1;) {
                    for (n = s[i], r = i; --r > -1;) {
                        n === s[r] && s.splice(i, 1);
                    }
                }
            } else for (s = G(t).concat(), i = s.length; --i > -1;) {
                (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            }return s;
        }, D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
            "object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) && (i = e, e = !1);for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) {
                s[r]._kill(i, t);
            }
        };var $ = g("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = $.prototype;
        }, !0);if (n = $.prototype, $.version = "1.10.1", $.API = 2, n._firstPT = null, n._addTween = function (t, e, i, s, r, n) {
            var a, o;return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - Number(i) : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = { _next: this._firstPT, t: t, p: e, s: i, c: a, f: "function" == typeof t[e], n: r || e, r: n }, o._next && (o._next._prev = o), o) : void 0;
        }, n.setRatio = function (t) {
            for (var e, i = this._firstPT, s = 1e-6; i;) {
                e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next;
            }
        }, n._kill = function (t) {
            var e,
                i = this._overwriteProps,
                s = this._firstPT;if (null != t[this._propName]) this._overwriteProps = [];else for (e = i.length; --e > -1;) {
                null != t[i[e]] && i.splice(e, 1);
            }for (; s;) {
                null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
            }return !1;
        }, n._roundProps = function (t, e) {
            for (var i = this._firstPT; i;) {
                (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next;
            }
        }, D._onPluginEvent = function (t, e) {
            var i,
                s,
                r,
                n,
                a,
                o = e._firstPT;if ("_onInitAllProps" === t) {
                for (; o;) {
                    for (a = o._next, s = r; s && s.pr > o.pr;) {
                        s = s._next;
                    }(o._prev = s ? s._prev : n) ? o._prev._next = o : r = o, (o._next = s) ? s._prev = o : n = o, o = a;
                }o = e._firstPT = r;
            }for (; o;) {
                o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
            }return i;
        }, $.activate = function (t) {
            for (var e = t.length; --e > -1;) {
                t[e].API === $.API && (E[new t[e]()._propName] = t[e]);
            }return !0;
        }, d.plugin = function (t) {
            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";var e,
                i = t.propName,
                s = t.priority || 0,
                r = t.overwriteProps,
                n = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
                a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                $.call(this, i, s), this._overwriteProps = r || [];
            }, t.global === !0),
                o = a.prototype = new $(i);o.constructor = a, a.API = t.API;for (e in n) {
                "function" == typeof t[e] && (o[n[e]] = t[e]);
            }return a.version = t.version, $.activate([a]), a;
        }, s = t._gsQueue) {
            for (r = 0; s.length > r; r++) {
                s[r]();
            }for (n in p) {
                p[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n);
            }
        }o = !1;
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : undefined || window, "TweenMax");

var SimpleAnimation = function SimpleAnimation() {
    this.animation_supported = this.isAnimationAvailable();
    this.init();
};

/**
 * detect if animation interfaz is available for this browser,
 * i copied from internet, so, in god we trust!!
 * @return {Boolean} true if css3 animations are supported
 */
SimpleAnimation.prototype.isAnimationAvailable = function () {
    var animation = false,
        animationstring = 'animation',
        keyframeprefix = '',
        domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
        pfx = '',
        elm = document.createElement('div');

    if (elm.style.animationName !== undefined) {
        animation = true;
    }

    if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
            if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                pfx = domPrefixes[i];
                animationstring = pfx + 'Animation';
                keyframeprefix = '-' + pfx.toLowerCase() + '-';
                break;
            }
        }
    }

    return animation;
};

SimpleAnimation.prototype.init = function () {
    var self = this;
    var cart_animation_working = false;
    var original_color = $('.shopping-cart-animation').css('color');

    function addToCartAnimationClick() {
        try {
            var initThirdAnimation = function initThirdAnimation() {
                // reset values
                $tthis.data('clone').remove();

                $tthis.fadeIn(200, function () {
                    $tthis.data('working', false);
                    $tthis.css('opacity', 1);
                });

                // animation 3
                if (!cart_animation_working) {
                    cart_animation_working = true;
                    TweenMax.to($('.shopping-cart-animation'), '0.5', {
                        'color': 'red',
                        onComplete: function onComplete() {
                            TweenMax.to($('.shopping-cart-animation'), '0.5', {
                                'color': original_color
                            });
                            cart_animation_working = false;
                        }
                    });
                }
            };

            var initSecondAnimation = function initSecondAnimation() {
                // animation 2
                TweenMax.to($tthis.data('clone_html'), '0.7', {
                    'ease': Power1.easeIn,
                    x: go_to.left - (imin.left + (outer_width - outer_height) * 0.5),
                    y: go_to.top - imin.top,
                    onComplete: initThirdAnimation
                });
            };

            // animation 1


            var $tthis = $(this);
            var $clone = $('<div></div>');
            var $clone_html = $('<div></div>');

            var go_to = $('.shopping-cart-animation').offset();
            var imin = $(this).offset();
            var out_of_stock = $tthis.html().indexOf('Agotado') !== -1;
            var outer_height = $tthis.outerHeight();
            var outer_width = $tthis.outerWidth();
            var hwidth = $tthis.width() * 0.5 - outer_height * 0.5;

            if ($tthis.data('working') || out_of_stock || !self.animation_supported) {
                return;
            }

            // initial config
            $clone.css('width', $tthis.outerWidth());
            $clone.css('height', outer_height);
            $clone.insertAfter($tthis);

            $clone.html($clone_html);

            $clone_html.css('width', '100%');
            $clone_html.css('height', '100%');
            $clone_html.css('border', $tthis.css('border'));
            $clone_html.css('margin-left', 'auto');
            $clone_html.css('margin-right', 'auto');
            $clone_html.css('position', 'relative');
            $clone_html.css('z-index', 99);

            $tthis.css('display', 'none');
            $tthis.data('clone', $clone);
            $tthis.data('clone_html', $clone_html);

            TweenMax.to($clone_html, '0.3', {
                'ease': Power1.easeIn,
                'width': outer_height + 'px',
                'border-radius': outer_height * 0.5 + 'px',
                'background': $tthis.css('background'),
                onComplete: initSecondAnimation
            });
        } catch (ex) {
            // nothing here...
        }
    }

    $(document).on('click', '.add-to-cart-animation', addToCartAnimationClick);
};

// GHOST Animation
var GhostAnimation = function GhostAnimation() {
    this.animation_supported = this.isAnimationAvailable();
    this.init();
};

/**
 * detect if animation interfaz is available for this browser,
 * i copied from internet, so, in god we trust!!
 * @return {Boolean} true if css3 animations are supported
 */
GhostAnimation.prototype.isAnimationAvailable = function () {
    var animation = false,
        animationstring = 'animation',
        keyframeprefix = '',
        domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
        pfx = '',
        elm = document.createElement('div');

    if (elm.style.animationName !== undefined) {
        animation = true;
    }

    if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
            if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                pfx = domPrefixes[i];
                animationstring = pfx + 'Animation';
                keyframeprefix = '-' + pfx.toLowerCase() + '-';
                break;
            }
        }
    }

    return animation;
};

GhostAnimation.prototype.init = function () {

    var self = this;
    var cart_animation_working = false;
    var original_color = $('.shopping-cart-animation').css('color');

    function addToCartAnimationClick() {
        try {
            var $tthis = $(this);
            var out_of_stock = $tthis.html().indexOf('Agotado') !== -1;

            if ($tthis.data('working') || out_of_stock || !self.animation_supported) {
                return;
            }

            $tthis.data('working', true);

            var $clone = $tthis.clone();
            var old_display = $tthis.css('display');

            $tthis.css('display', 'none');
            $clone.css('position', 'relative');
            $clone.insertBefore($tthis);

            // animation 1
            TweenMax.to($clone, '0.3', {
                'ease': Power1.easeOut,
                'top': '-30px',
                'opacity': 0.0,
                onComplete: function onComplete() {
                    $clone.css('display', 'none');
                    $tthis.css('display', old_display);
                    $tthis.css('opacity', 0);

                    TweenMax.to($tthis, '0.1', {
                        'opacity': 1,
                        onComplete: function onComplete() {
                            $clone.remove();
                            $tthis.data('working', false);
                        }
                    });
                }
            });

            // console.log($tthis.html());
        } catch (ex) {
            // nothing here...
        }
    }

    $(document).on('click', '.add-to-cart-animation', addToCartAnimationClick);
};

/* global jQuery */
/* global Utils */
/* global Cart */
/* global Tag */
/* global Product */

'use strict';

var BodegasClient = function BodegasClient() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this.app_public = '1000';
    this.site_name = options.site_name === undefined ? '' : options.site_name;
    this.tag = null;
    this.checkout_url = options.checkout_url === undefined ? '' : options.checkout_url;

    this.tag = new Tag();
    this.product = new Product();
    this.cart = new Cart(this.checkout_url, this.site_name);
};

BodegasClient.prototype.authenticate = function (app_public, callback) {
    var self = this;
    jQuery.get(Utils.getURL('authenticate', [app_public]), function (data) {
        if (data.success) {
            self.init(self.site_name);
            callback(self);
        }
    });
};

BodegasClient.prototype.init = function (site_name) {
    this.site_name = site_name;
    this.tag.site_name = site_name;
    this.product.site_name = site_name;

    this.cart.site_name = site_name;
    this.cart.checkout_url = this.checkout_url;
    this.cart.loadCart();
};

BodegasClient.prototype.enableGA = function () {
    this.cart.enableGA();
};

BodegasClient.prototype.destroy = function () {
    this.product.destroy();
};

/* global $ */
/* global Utils */

'use strict';

var ExtraInfo = function ExtraInfo(cart_id) {
    this.model = {};
    this.cart_id = cart_id;
};

ExtraInfo.prototype.set_data = function (index, data) {
    if (this._isValidIndex(index)) {
        this.model[index] = data;

        this.synchronize();
        return true;
    }

    return false;
};

ExtraInfo.prototype.get_data = function (index) {
    try {
        return this.model[index];
    } catch (ex) {
        // nothing here
    }

    return false;
};

/******* private methods *********/

/**
 * only string and numbers are valid
 * @param  {object}  index this value will be validated
 * @return {Boolean}       true if is string or number
 */
ExtraInfo.prototype._isValidIndex = function (index) {
    if (typeof index === 'string') return true;

    if (!isNaN(parseInt(index))) return true;

    return false;
};

ExtraInfo.prototype.synchronize = function () {
    var json_string = JSON.stringify(this.model);
    console.log(this.model);
    $.post(Utils.getURLWithoutParam('v1/cart/' + this.cart_id + '/extrainfo'), { 'data': json_string }, function () {
        // nothing here...
    });
};

/* global BodegasClient */
/* global ProductListView */
/* global Utils */
/* global ProductDetailView */
/* global SimpleAnimation*/
/* global ProductBox*/
/* global window*/

(function ($, window, document, undefined) {
    'use strict';

    // test

    Function.prototype.clone = function () {
        var that = this;
        var temp = function temporary() {
            return that.apply(this, arguments);
        };
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                temp[key] = this[key];
            }
        }
        return temp;
    };

    // Create the defaults once
    var pluginName = 'ecommerce';
    var page = 1;

    var methods = {
        main: function main(options) {
            var f = methods.init_facade.call(this, options);
            f.showProductList(page);
            page++;
            return f;
        },
        /** just override main method */
        product_list: function product_list(options) {
            return methods.main.call(this, options);
        },
        product_detail: function product_detail(options) {
            var f = methods.init_facade.call(this, options);
            f.showProductDetail();
            return f;
        },
        load_more: function load_more() {
            var f = methods.init_facade.call(this);
            f.showProductList(page);
            page++;

            return f;
        },
        set_data: function set_data(data) {
            var f = methods.init_facade.call(this);
            f.setData(data);

            return f;
        },
        set_shipping_cost: function set_shipping_cost(data) {
            var f = methods.init_facade.call(this);
            f.setShippingCost(data);
            return f;
        },
        product_box: function product_box(options) {
            $(this).each(function () {
                var data = $.data(this, 'product_box');

                if (!data || data === undefined) {
                    var product_box = new ProductBox($(this), options);
                    product_box.view.render();

                    $.data(this, 'product_box', product_box);
                }
            });

            return $(this);
        },
        load_variants: function load_variants(options) {
            var f = methods.init_facade.call(this, options);
            f.loadVariants();
            return f;
        },
        init_facade: function init_facade(options) {
            var f = this.data(pluginName);
            if (f === undefined || f === '') {
                f = new EcommerceFacade(options);
                this.data(pluginName, f);
            } else {
                f.changeOptions(options);
            }

            return f;
        },
        destroy: function destroy(options) {
            var f = methods.init_facade.call(this, options);
            if (f !== undefined) {
                $(this).data(pluginName, '');
                f.destroy();
                f = undefined;
            }
            page = 1;
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options_or_method, options) {
        var method = 'main';

        if (typeof options_or_method === 'string') {
            method = options_or_method;
        } else {
            options = options_or_method;
        }

        if (method !== 'set_data' && method !== 'set_shipping_cost') {
            options = $.extend(true, {}, $.fn[pluginName].defaults, options);
            options.onLoad = options.onLoad === undefined ? $.noop : options.onLoad.clone();

            // TODO: remove this fix once all is site name for ever
            if (options.site_name === "") {
                options.site_name = options.app_public;
            }

            Utils.base_url = options.base_url;
        }

        if (this[0] instanceof Document) {
            // @deprecated: old code
            return methods[method].call(this, options);
        } else {
            // new version
            return $(this).each(function () {
                options.container = $(this);
                methods[method].call($(this), options);
            });
        }
    };

    $.fn[pluginName].defaults = {
        /********* COMMON **********/
        'app_public': 0,
        'base_url': 'https://apibodegas.loadingplay.com/',
        //'base_url'              : 'http://apibodegas.onev.today/',

        /********* PRODUCTBOX **********/
        'tag': '',
        'maxProducts': 2,
        'templateOrigin': '.product_template',
        'onLoad': $.noop,

        /********* OTHER **********/
        'checkout_url': 'https://pay.loadingplay.com',
        'products_per_page': 12,
        'animation': 'none', // none|basic|ghost
        'ignore_stock': false, // if true, shows all products
        'product_id': null,
        'infinite_scroll': true,
        'analytics': '', // analytics code
        'container': null, // @deprecated: use $([target]).ecommerce instead
        'user': '',
        'operator': 'or', // solo se puede pasar mas de 1 tag con operator and, or solo funciona con 1 tag
        'column': 'main_price', // columna de la tabla por la cual se quiere ordenar "main_price, name, sku, etc". Por defecto se ordena por "main_price"
        'direction': 'asc', // orientación del orden, asc (ascendiente) o desc (descendiente). Por defecto es asc

        /******* TEMPLATES *******/
        'no_products_template': '<span class="fuentes2" >No tenemos productos en esta sección por el momento</span>',

        /******* VARIABLES ********/
        'product_sku': '', // use this instead of product_id
        'site_name': '', // use this instead of app_public

        /***** PRODUCT VARIANTS *******/
        'variants': {
            'product_sku': '',
            'container': '', // variants warpper
            'variant_template': '', // ''  for use default
            'value_template': '', // '' for use default
            'active_class': 'value-active' // this class is added when a value is selected
        },

        /**** CART ****/
        'afterModelUpdate': $.noop,
        'afterModelSave': $.noop
    };
})(jQuery, window, document); // jshint ignore: line


var EcommerceFacade = function EcommerceFacade(options) {
    var self = this;

    this.page = 1;
    this.options = options;
    this.ecommerce = new BodegasClient(this.options);
    this.view = new ProductListView(this.options.container);
    this.view.no_products_template = this.options.no_products_template;
    this.product_view = new ProductDetailView(this.options.container);

    // variants init
    this.variants = new Variants(options);
    this.variants_view = new VariantsView(this.options.variants.container);
    this.variants_view.active_class = this.options.variants.active_class;
    this.variants_view.setTemplates(this.options.variants.variant_template, this.options.variants.value_template);

    this.ecommerce.cart.getCurrentCombination = function () {
        return self.variants_view.getSelectedCombination();
    };

    this.ecommerce.cart.afterModelUpdate = this.options.afterModelUpdate;
    this.ecommerce.cart.afterModelSave = this.options.afterModelSave;

    this.animation = null;

    // initialize animation
    if (options.animation === 'basic') {
        // init simmple animations (the only one for now)
        this.animation = new SimpleAnimation();
    }

    // initialize ghost animation
    if (options.animation === 'ghost') {
        this.animation = new GhostAnimation();
    }

    // initialize analytics
    if (options.analytics !== '' && window.ga !== undefined) {
        this.ecommerce.enableGA();
        this.product_view.enableGA();
    }

    // infinite scroll
    if (options.infinite_scroll) {
        this.view.onScrollEnd(function () {
            self.page++;
            self.showProductList(self.page);
        });
    } else {
        this.view.onClickEnd(function () {
            self.page++;
            self.showProductList(self.page);
        });
    }
};

EcommerceFacade.prototype.showProductList = function (page) {
    var self = this;

    if (this.options === undefined || !this.options.hasOwnProperty('app_public')) {
        console.error('you must select an app id or name');
        return;
    }

    this.ecommerce.authenticate(this.options.app_public, function () {
        self.ecommerce.tag.listAll(function (tags) {
            self.view.renderTags(tags);
        });

        var tag = '';
        if (self.options.tag !== '') {
            tag = self.options.tag;
        } else {
            tag = Utils.getUrlParameter('tag');
        }

        self.ecommerce.product._list(page, self.options.products_per_page, self.options.ignore_stock, tag, Utils.getUrlParameter('search_query'), self.options.user, self.options.operator, self.options.column, self.options.direction, function (products) {
            self.view.renderProducts(products, page, function (products) {
                if (self.options !== undefined) {
                    self.options.onLoad.call(this, products);
                }

                self.triggerProductsLoaded(products);
            });
        });
    });
};

EcommerceFacade.prototype.showProductDetail = function () {
    var product_id = this.options.product_id || Utils.getUrlParameter('id');
    var self = this;
    self.ecommerce.product.get(product_id, self.options.user, function (product) {
        self.product_view.render(product, function (products) {
            self.options.onLoad.call(this, products);
            self.triggerProductsLoaded(products);
        });
    });
};

/**
 * load variants from api and render them in jquery target
 */
EcommerceFacade.prototype.loadVariants = function () {
    var product_sku = this.options.variants.product_sku || Utils.getUrlParameter('sku');
    var self = this;

    // ensure templates and target
    this.variants_view.$target = this.options.variants.container;
    this.variants_view.setTemplates(this.options.variants.variant_template, this.options.variants.value_template);
    this.variants_view.product_sku = product_sku;

    self.variants.getCombination(product_sku, function (variants) {
        var sku_list = [];

        for (var i = 0; i < variants.length; i++) {
            sku_list.push(variants[i].sku);
        }

        var cellar_id = 0;

        jQuery.get(Utils.getURL('v1', ['cellar', self.variants.site_name]), {}, function (response) {
            cellar_id = response.cellar.id;

            jQuery.get(Utils.getURL('v1', ['cellar', cellar_id, 'product/']), {
                'sku_list': sku_list.join(",")
            }, function (response) {
                for (var i = 0; i < response.products.length; i++) {
                    var sku = response.products[i].product_sku;
                    var stock = response.products[i].balance_units;
                    self.variants_view.productStock[sku] = stock;
                }

                // trigger variant stock loaded
                self.triggerVarianStockLoaded(self.variants_view.productStock);
            });
        });
    });

    // load variants from database
    self.variants.get(product_sku, function (variants) {
        var vs = [];

        for (var i = 0; i < variants.length; i++) {
            vs.push(variants[i].name);
        }

        self.variants.getValues(product_sku, vs.join(","), function (variants) {
            self.variants_view.render(variants);
            self.options.onLoad.call(this, variants);
            self.triggerVariantsLoaded(variants);
        });
    });
};

EcommerceFacade.prototype.setData = function (data) {
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
        for (var k in data) {
            this.ecommerce.cart.extra_info.set_data(k, data[k]);
        }
    } else if (typeof data === 'string') {
        this.ecommerce.cart.extra_info.set_data('extra', data);
    } else {
        this.ecommerce.cart.extra_info.set_data('extra', '' + data);
    }
};

EcommerceFacade.prototype.setShippingCost = function (data) {
    this.ecommerce.cart.setShippingCost(data);
};

EcommerceFacade.prototype.destroy = function () {
    this.ecommerce.destroy();
    this.view.destroy();
};

/**
 * trigger event when products are loaded
 * @param  {string} event event to trigger
 */
EcommerceFacade.prototype.triggerProductsLoaded = function (products) {
    $(this.options.container).trigger('products.loaded', [products]);
};

/**
 * this event get triggered when all variants are loaded
 * @param  {list} variants variants list
 */
EcommerceFacade.prototype.triggerVariantsLoaded = function (variants) {
    $(this.options.container).trigger('variants.loaded', [variants]);
};

/**
 * this method is executed once all variants are loaded within skus inside
 * @param  {string} variants    dictionary with variants and stock
 */
EcommerceFacade.prototype.triggerVarianStockLoaded = function (variants) {
    $(this.options.container).trigger('variants_stock_loaded', [variants]);
};

/**
 * change options
 * @param  {object} options json object with options
 */
EcommerceFacade.prototype.changeOptions = function (options) {
    this.options = options;

    // @todo: change other options
};

/*jshint esversion: 6 */

/**
 * Interface for model actions
 */

var ModelProvider = function () {
    function ModelProvider() {
        _classCallCheck(this, ModelProvider);
    }
    // nothing here...


    /**
     * this method is called once an ajax request is performed
     * @param  {object} data json data with request info
     */


    _createClass(ModelProvider, [{
        key: 'onAjaxRespond',
        value: function onAjaxRespond(endpoint, data, method) {
            // nothing here...
        }
    }, {
        key: 'onModelUpdate',
        value: function onModelUpdate(model) {
            // nothing here...
        }
    }], [{
        key: 'Empty',
        value: function Empty() {
            return new ModelProvider();
        }
    }]);

    return ModelProvider;
}();

var LPObject = function LPObject() {
    _classCallCheck(this, LPObject);

    this.id = Utils.createUUID();
};

/**
 * connect to API and retrieve some data
 */


var Model = function (_LPObject) {
    _inherits(Model, _LPObject);

    /**
     * default constructor
     * @param  {ModelProvider} model_provider model provider interface
     */
    function Model() {
        var model_provider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ModelProvider.Empty();

        _classCallCheck(this, Model);

        var _this = _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this));

        _this.setModelProvider(model_provider);
        return _this;
    }

    /**
     * change current model_provider
     * @param {ModelProvider} model_provider model provider interface
     */


    _createClass(Model, [{
        key: 'setModelProvider',
        value: function setModelProvider(model_provider) {
            if (model_provider instanceof ModelProvider) {
                this.model_provider = model_provider;
            } else {
                console.error("model provider should be ModelProvider instance");
            }
        }

        /**
         * load data from API
         * @param  {strign} endpoint   the actual API endpoint
         * @param  {object} parameters JSON object with data to send throw post
         * @return {Promise} async callback when is already loaded
         */

    }, {
        key: 'get',
        value: function get(endpoint, parameters) {
            var _this2 = this;

            var p = new Promise(function (resolve, reject) {
                jQuery.get(Utils.getURLWithoutParam(endpoint), parameters).done(function (data) {
                    resolve(data);
                }).fail(function () {
                    reject();
                });
            });
            Promise.all([p]).then(function (data) {
                _this2.onAjaxRespond(endpoint, data, 'get');
            });

            return p;
        }
    }, {
        key: 'onAjaxRespond',
        value: function onAjaxRespond(endpoint, data, method) {
            this.model_provider.onAjaxRespond(endpoint, data, method);
        }
    }, {
        key: 'modelUpdate',
        value: function modelUpdate() {
            this.model_provider.onModelUpdate(this);
        }
    }, {
        key: 'modelSaved',
        value: function modelSaved() {
            this.model_provider.onModelSaved(this);
        }

        /**
         *  post data to API
         * @param  {strign} endpoint   the actual API endpoint
         * @param  {object} parameters JSON object with data to send throw post
         * @return {Promise}           JS Promise for async Ajax
         */

    }, {
        key: 'post',
        value: function post(endpoint, parameters) {
            var _this3 = this;

            var p = new Promise(function (resolve, reject) {
                jQuery.post(Utils.getURLWithoutParam(endpoint), parameters).done(function (data) {
                    resolve(data);
                    _this3.model_provider.onAjaxRespond(endpoint, data, 'post');
                }).fail(function () {
                    reject();
                });
            });
            return p;
        }
    }]);

    return Model;
}(LPObject);

/**
 * Interface for views
 */


var ViewDataProvider = function () {
    function ViewDataProvider() {
        _classCallCheck(this, ViewDataProvider);
    }
    // nothing here...


    /**
     * this method is executed every time data is required
     */


    _createClass(ViewDataProvider, [{
        key: 'getData',
        value: function getData(view) {
            console.warn("you must implement this method");
        }

        /**
         * this method is called when user perform some action
         * @param  {string} tag_name action identifier
         * @param  {string} data     data contained in HTML tag [tag_name]
         * @param  {jQuery} $element jquery element from the event
         */

    }, {
        key: 'performAction',
        value: function performAction(tag_name, data, $element) {
            console.warn("you must implement this method");
        }
    }], [{
        key: 'Empty',
        value: function Empty() {
            return new ViewDataProvider();
        }
    }]);

    return ViewDataProvider;
}();

/**
 * grab a template and render with some data
 */


var View = function (_LPObject2) {
    _inherits(View, _LPObject2);

    /**
     * default constructor
     * @param  {jQuery} $target             jquery object with targeted div
     * @param  {ViewDataProvider} view_data_provider
     *                                      where views get the data from
     */
    function View($target) {
        var view_data_provider = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ViewDataProvider.Empty();

        _classCallCheck(this, View);

        var _this4 = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));

        _this4.$target = $target;
        _this4.template = '';
        _this4.click_actions = [];
        _this4.append = false; // render method
        _this4.setDataProvider(view_data_provider);
        return _this4;
    }

    /**
     * perform drawing operations in $target
     */


    _createClass(View, [{
        key: 'render',
        value: function render() {
            var html_builder = [];
            var data = this.view_data_provider.getData(this);

            // both are common cases
            if ($.isArray(data)) {
                for (var i = 0; i < data.length; i++) {
                    html_builder.push(Utils.render(this.template, data[i]));
                }
            } else {
                html_builder.push(Utils.render(this.template, data));
            }

            if (this.append) {
                this.$target.append(html_builder.join(''));
            } else {
                this.$target.html(html_builder.join(''));
            }
        }
    }, {
        key: 'setClickAction',
        value: function setClickAction(action_tag) {
            var _this5 = this;

            $(document).on('click', '[' + action_tag + ']', function (e) {
                e.preventDefault();
                var $el = $(e.currentTarget);
                var data = $el.attr(action_tag);
                _this5.view_data_provider.performAction(action_tag, data, $el);
            });
        }
    }, {
        key: 'setEnterAction',
        value: function setEnterAction(action_tag) {
            var _this6 = this;

            $(document).on('keypress', '[' + action_tag + ']', function (e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    var $el = $(e.currentTarget);
                    var data = $el.val();
                    _this6.view_data_provider.performAction(action_tag, data, $el);
                }
            });
        }

        /**
         * change current template
         * @param {string} template html template
         */

    }, {
        key: 'setTemplate',
        value: function setTemplate(template) {
            this.template = template;
        }

        /**
         * change data provider
         * @param {ViewDataProvider} view_data_provider
         *                                 where views get the data from
         */

    }, {
        key: 'setDataProvider',
        value: function setDataProvider(view_data_provider) {
            if (view_data_provider instanceof ViewDataProvider) {
                this.view_data_provider = view_data_provider;
            } else {
                console.error("error setting view_data_provider");
            }
        }
    }]);

    return View;
}(LPObject);

/**
 * checkout module class definition
 * define life cycle of a module
 * LifeCycle
 * onInit() -> onModelLoaded(model) -> (optional) onViewRendered -> onDestroy
 */


var Module = function () {
    /**
     * init some properties
     * @return {[type]} [description]
     */
    function Module() {
        var _this7 = this;

        _classCallCheck(this, Module);

        this.views = {}; // load all views here
        this.models = {}; // load all models here

        // add model and view providers
        this.model_provider = new ModelProvider();
        this.view_data_provider = new ViewDataProvider();

        this.model_provider.onAjaxRespond = function (endpoint, data, method) {
            _this7.onModelLoaded(endpoint, data, method);
        };
        this.model_provider.onModelUpdate = function (model) {
            _this7.onModelUpdate(model);
        };
        this.model_provider.onModelSaved = function (model) {
            _this7.onModelSaved(model);
        };
        this.view_data_provider.getData = function (view) {
            return _this7.onViewRequestData(view);
        };
        this.view_data_provider.performAction = function (tag_name, data, $element) {
            _this7.onActionPerformed(tag_name, data, $element);
        };

        this.init();
    }

    /**
     * initialize module
     */


    _createClass(Module, [{
        key: 'init',
        value: function init(imodule) {
            if (!this.onInit()) {
                return;
            }
        }

        /**
         * add a new model saved on key
         * @param {string} key   key to access model later
         * @param {Model} model  model object to be loaded
         */

    }, {
        key: 'addModel',
        value: function addModel(key, model) {
            if (model instanceof Model) {
                model.setModelProvider(this.model_provider);
                this.models[key] = model;
            }
        }
    }, {
        key: 'addView',
        value: function addView(key, view) {
            if (view instanceof View) {
                view.setDataProvider(this.view_data_provider);
                this.views[key] = view;
            }
        }

        /** LYFECYCLE **/

        /**
         * method called before initialization
         * add models and views here
         * @return {boolean}    true if must continue lifecycle
         */

    }, {
        key: 'onInit',
        value: function onInit() {
            console.warn("method must be implemented");
        }

        /**
         * render start rendering here
         * @param {string} key   key to access model later
         * @param {Model} model  model object to be loaded
         * @param {string} method http method of request post|get|put|delete
         */

    }, {
        key: 'onModelLoaded',
        value: function onModelLoaded(endpoint, data, method) {
            console.warn("method must be implemented");
        }
    }, {
        key: 'onModelUpdate',
        value: function onModelUpdate(model) {
            console.warn("method must be implemented");
        }
    }, {
        key: 'onModelSaved',
        value: function onModelSaved(model) {
            console.warn("method must be implemented");
        }
    }, {
        key: 'onViewRequestData',
        value: function onViewRequestData(view) {
            console.warn("method must be implemented");
        }
    }, {
        key: 'onActionPerformed',
        value: function onActionPerformed(tag_name, data, $element) {
            console.warn("method must be implemented");
        }
    }]);

    return Module;
}();

/* globals jQuery */
/* globals Utils */

'use strict';

var Product = function Product(site_name) {
    this.site_name = site_name === undefined ? 0 : site_name;
};

Product.prototype.list = function (page, items_per_page, callback_or_tags, search_query, user, operator, column, direction, callback) {
    this._list(page, items_per_page, false, callback_or_tags, search_query, user, operator, column, direction, callback);
};

Product.prototype.listIgnoringStock = function (page, items_per_page, callback_or_tags, search_query, user, operator, column, direction, callback) {
    this._list(page, items_per_page, true, callback_or_tags, search_query, user, operator, column, direction, callback);
};

Product.prototype.get = function (product_id, user_or_callback, callback) {
    var user = typeof user_or_callback === 'function' ? '' : user_or_callback;
    callback = typeof user_or_callback === 'function' ? user_or_callback : callback;
    callback = callback === undefined ? jQuery.noop : callback;

    jQuery.get(Utils.getURL('product', ['get', product_id]), { 'user': user }, function (product) {
        callback(product);
    });
};

var random_seed; // random seed for random sorting of products

Product.prototype._list = function (page, items_per_page, ignore_stock, callback_or_tags, search_query, user, operator, column, direction, callback) {
    var tags = 'false';
    var product_list = [];
    var term = '';

    if (typeof callback_or_tags === 'function') {
        callback = callback_or_tags;
    } else {
        tags = callback_or_tags;
    }

    if (tags === undefined || tags === '') {
        tags = 'false';
    }

    if (typeof search_query === 'function') {
        callback = search_query;
    } else if (search_query !== undefined) {
        term = search_query;
    }

    if (column === "random") // Check for random in sorting column
        {
            if (page === 1) random_seed = Math.random();
            //The column param must be sent as random(some_random_number_or_string) or else API won't recognize it
            column = "random(" + random_seed + ")";
        }

    jQuery.post(Utils.getURLWithoutParam('product/search'), {
        "site_name": this.site_name,
        "page": page,
        "items_per_page": items_per_page,
        "tags": tags,
        "ignore_stock": ignore_stock,
        "search_query": decodeURIComponent(term),
        "search": true,
        "user": user,
        "operator": operator,
        "column": column,
        "direction": direction
    }, function (data) {
        if (data.products !== undefined) {
            product_list = data.products;

            if (page === 1) $('.products').empty();
        }

        callback(product_list);
    });
};

Product.prototype.destroy = function () {
    // nothing here....
};

/*global $*/
/*global ProductBoxView*/

'use strict';

var ProductBox = function ProductBox($div, options) {
    options = options || {};

    this.max_products = options.maxProducts || 10;
    this.template_origin = options.templateOrigin || '';
    this.app_public = options.app_public || 1;
    this.base_url = options.base_url || 'http://apibodegas.ondev.today/';
    this.tag = options.tag || '';
    this.onLoad = options.onLoad || $.noop;
    this.$container = $div || $('<div></div>');
    this.ignore_stock = options.ignore_stock ? 'true' : 'false';
    this.column = options.column;

    this.view = new ProductBoxView(this);
};

ProductBox.prototype.getURL = function () {
    var len = this.base_url.length;
    var base_url_limit = this.base_url.slice(len - 1, len) === '/' ? 1 : 0;
    var base_url = this.base_url.substr(0, len - base_url_limit);

    var url = [base_url, 'product/list', this.app_public, 1, this.max_products, this.tag === '' ? 'false' : this.tag, this.ignore_stock].join('/');

    return url;
};

ProductBox.prototype.loadProducts = function (callback) {
    callback = callback || $.noop;

    var data = {
        'column': this.column
    };

    $.get(this.getURL(), data, function (json) {
        callback(json.products);
    });
};

/* globals $*/
/* globals Utils */

'use strict';

var Tag = function Tag(site_name) {
    this.site_name = site_name === undefined ? 0 : site_name;
};

Tag.prototype.listAll = function (callback) {
    $.get(Utils.getURL('tag', ['list_all', this.site_name]), function (data) {
        callback(data.tags);
    });
};

/**
 * Set of utilities for rendering html templates
 * @see http://gogs.ondev.today/loadingplay/bodegas.cliente.js
 * @author Ricardo Silva
 */

/*global $*/
'use strict';

var Utils = { //jshint ignore: line
    base_url: 'http://apibodegas.ondev.today/',
    strEndsWith: function strEndsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    },
    getURL: function getURL(module, args) {
        if (!Utils.strEndsWith(Utils.base_url, '/')) {
            Utils.base_url += '/';
        }

        var url = Utils.base_url + module + '/';

        if (args) {
            url += args.join('/');
        }

        return url;
    },
    getURLWithoutParam: function getURLWithoutParam(module) {
        if (!Utils.strEndsWith(Utils.base_url, '/')) {
            Utils.base_url += '/';
        }

        var url = Utils.base_url + module;

        return url;
    },
    friendly: function friendly(t) {
        return Utils.URLBeautify(t);
    },
    hide_if_empty: function hide_if_empty(t) {
        if ($.trim(t) === '') return 'hidden';

        return '';
    },
    hide_if_not_empty: function hide_if_not_empty(t) {
        if ($.trim(t) !== '') return 'hidden';

        return '';
    },
    extract_data: function extract_data(name, data) {
        name = $.trim(name);
        var splitted = [name];
        var fn = function fn(t) {
            return t;
        };
        var d = '';
        var index = name.indexOf('|');

        if (index !== -1 && name[index + 1] !== '|') // detect | and ||
            {
                splitted = name.split('|');
                name = splitted[0];
                fn = Utils[splitted[1]];
            }

        try {
            d = eval('data.' + $.trim(name)); // jshint ignore: line
        } catch (e) {
            try {
                d = eval($.trim(name));
            } catch (e) {
                // nothing here
            }
        }

        d = d === undefined ? '' : d;
        return fn(d);
    },
    // formatMoney Alias
    money: function money(n) {
        return Utils.formatMoney(n);
    },
    render: function render(template, data) {
        if (template === undefined) return '';
        var builder = '';

        var splitted_template = template.split('{{');

        for (var i = 0; i < splitted_template.length; i++) {
            var name = splitted_template[i].split('}}')[0];
            var html = splitted_template[i].split('}}')[1];
            html = html === undefined ? name : html;

            var d = Utils.extract_data(name, data);

            builder += d;
            builder += html;
        }

        return builder;
    },
    getUrlParameter: function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    },
    createUUID: function createUUID() {
        // http://www.ietf.org/rfc/rfc4122.txt
        var s = [];
        var hexDigits = '0123456789abcdef';
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = '-';

        var uuid = s.join('');
        return uuid;
    },
    /**
     * return an string with number formatted as price I.E $2.000
     * @param  {Number} n number to convert
     * @param  {Number} c decimal counter, by default 0
     * @param  {String} d decimal separator, by defailt ","
     * @param  {String} t unit separator, by default "."
     * @return {String}   string with price formatted number.
     */
    formatMoney: function formatMoney(n, c, d, t) {
        c = isNaN(c = Math.abs(c)) ? 0 : c;
        d = d === undefined ? ',' : d;
        t = t === undefined ? '.' : t;
        var s = n < 0 ? '-' : '';
        var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + '';
        var j = (j = i.length) > 3 ? j % 3 : 0;

        return '$' + s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
    },
    processPrice: function processPrice($tag) {
        $('.money', $tag).each(function () {
            var html = $(this).html();
            $(this).html(Utils.formatMoney(html));
        });
    },
    URLBeautify: function URLBeautify(text) {
        text = text.toLowerCase();

        var splitted = text.split(' ');
        text = splitted.join('_');

        text = text.split('ñ').join('n');
        text = text.split('á').join('a');
        text = text.split('é').join('e');
        text = text.split('í').join('i');
        text = text.split('ó').join('o');
        text = text.split('ú').join('u');

        text = text.split('?').join('');
        text = text.split('%').join('');
        text = text.split('$').join('');
        text = text.split('&').join('');
        text = text.split(',').join('');
        text = text.split('.').join('');

        text = text.split('/').join('');
        text = text.split('"').join('');
        text = text.split('\'').join('');

        text = text.split('@').join('');
        text = text.split('®').join('');

        return text;
    }
};

/* globals jQuery */
/* globals Utils */

/**
 * Variant class definition
 * @param  {object} options options comming from facade
 */
var Variants = function Variants(options) {
    // options = options === undefined ? { 'site_name': 'xx' } : options;
    var opt = options === undefined ? { 'site_name': 'none' } : options;
    this.site_name = opt.site_name;
};

/**
 * load variants from API
 * @param  {string}   product_sku the product identifier
 * @param  {Function} cb         callback
 */
Variants.prototype.get = function (product_sku, cb) {
    var self = this;
    jQuery.get(Utils.getURL('v1', ['variant']), {
        'site_name': this.site_name,
        'sku': product_sku
    }, function (v) {

        cb(v.variants);
    });
};

/**
 * load values from API
 * @param  {string}   product_sku  the product sku
 * @param  {string}   variant_name the variant name or comma separated names
 * @param  {Function} cb           callback method
 */
Variants.prototype.getValues = function (product_sku, variant_name, cb) {
    jQuery.get(Utils.getURL('v1', ['variant', variant_name, 'value']), {
        'site_name': this.site_name,
        'sku': product_sku
    }, function (v) {
        cb(v.values);
    });
};

/**
 * load combination from API
 * @param  {string}   product_sku the product identifier
 * @param  {Function} cb         callback
 */
Variants.prototype.getCombination = function (product_sku, cb) {
    var self = this;
    jQuery.get(Utils.getURL('v1', ['variant', product_sku, 'combination']), {
        'site_name': this.site_name,
        'sku': product_sku
    }, function (v) {
        cb(v.combinations);
    });
};

/*jshint esversion: 6 */

var CartProduct = function () {
    _createClass(CartProduct, [{
        key: 'total',
        get: function get() {
            return this.quantity * this.price;
        }
    }, {
        key: 'upp_total',
        get: function get() {
            return this.quantity * this.upp;
        }
    }, {
        key: 'imges',
        get: function get() {
            return Array.isArray(this.images) ? this.images : [];
        }
    }]);

    function CartProduct(sku) {
        var combination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var price = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
        var upp = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
        var bullet1 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
        var bullet2 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "";
        var bullet3 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "";
        var im = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : "";
        var weight = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;

        _classCallCheck(this, CartProduct);

        this.id = Utils.createUUID();
        this.sku = sku;
        this.combination = combination;
        this.price = price;
        this.name = name;
        this.quantity = 0;
        this.upp = upp;
        this.bullet_1 = bullet1;
        this.bullet_2 = bullet2;
        this.bullet_3 = bullet3;
        this.images = im;
        this.weight = weight;
    }

    _createClass(CartProduct, null, [{
        key: 'FromArray',
        value: function FromArray(a) {
            var cp = new CartProduct();
            cp.id = a.id;
            cp.sku = a.sku;
            cp.combination = a.combination;
            cp.price = a.price;
            cp.name = a.name;
            cp.quantity = a.quantity;
            cp.upp = a.upp;
            cp.bullet_1 = a.bullet_1;
            cp.bullet_2 = a.bullet_2;
            cp.bullet_3 = a.bullet_3;
            cp.images = a.images;
            cp.weight = a.weight;

            return cp;
        }
    }]);

    return CartProduct;
}();

var CartProductListModel = function (_Model) {
    _inherits(CartProductListModel, _Model);

    function CartProductListModel(extra_info) {
        _classCallCheck(this, CartProductListModel);

        var _this8 = _possibleConstructorReturn(this, (CartProductListModel.__proto__ || Object.getPrototypeOf(CartProductListModel)).call(this));

        _this8.extra_info = extra_info;
        _this8.guid = _this8.generateGUID();
        _this8.products = [];
        _this8.percentage = 0;
        _this8.discount_code = "";
        return _this8;
    }

    _createClass(CartProductListModel, [{
        key: 'loadProducts',
        value: function loadProducts() {
            var _this9 = this;

            this.get('v1/cart/' + this.guid).then(function (cart_products) {
                if (cart_products.cart.expired) {
                    $.removeCookie('shopping-cart');
                    _this9.guid = _this9.generateGUID();
                    // onload([]);
                }
                _this9.createFromArray(cart_products.cart.items);
                // self.view.render();

                // onload(cart_products);
            });
        }
    }, {
        key: 'createFromArray',
        value: function createFromArray(l) {
            for (var i = 0; i < l.length; i++) {
                this.products.push(CartProduct.FromArray(l[i]));
            }
        }

        /**
         * check if product exists
         * @param  {string} id  product id
         * @return {boolean}    true if product exists, false otherwise
         */

    }, {
        key: 'productExist',
        value: function productExist(id) {
            return this.findProductIndex(id) !== -1;
        }
    }, {
        key: 'findProductIndex',
        value: function findProductIndex(id) {
            // get the product from model, if exist or create from database
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === id) {
                    return i;
                }
            }
            return -1;
        }

        /**
         * get a GUID from cookies or generate and return
         * @return {string} GUID
         */

    }, {
        key: 'generateGUID',
        value: function generateGUID() {
            var old_guid = $.cookie('shopping-cart');
            var guid = old_guid;

            if (old_guid === undefined || old_guid === '') {
                guid = Utils.createUUID(); // request a new guid
                $.cookie('shopping-cart', guid); // save to cookie
            }

            this.extra_info.cart_id = guid;
            return guid;
        }

        /**
         * add an element to the shopping cart
         * @param  {int}      id       product unique identifier
         * @param  {float}    price    product price
         * @param  {string}   name
         * @param  {int}      upp      units per product
         * @param  {string}   bullet1  some random text
         * @param  {string}   bullet2  some random text
         * @param  {string}   bullet3  some random text
         * @param  {object}   img      json with images
         * @param  {int}      weight   weight of the product in kg
         * @param  {Function} callback callback this method when loaded
         * @todo: use promisses
         */

    }, {
        key: 'addProduct',
        value: function addProduct(sku) {
            var combination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var price = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
            var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
            var upp = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
            var bullet1 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            var bullet2 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "";
            var bullet3 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "";
            var img = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : "";
            var weight = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
            var callback = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : $.noop;

            // get product images
            img = img === "" ? this.getProductImage(sku, combination) : img;

            var im = [];
            var images = {
                'url': img,
                'thumb_1': img,
                'thumb_200': img,
                'thumb_500': img
            };

            im.push(images);

            // doenst add quantity here, so dont cut the execution
            var cp = this.findProductBySKUCombination(sku, combination);

            if (!cp) {
                // create a new product and add to products
                cp = new CartProduct(sku, combination, price, name, upp, bullet1, bullet2, bullet3, im, weight);
                this.products.push(cp);
            }

            this.addOne(cp.id, callback);
        }
    }, {
        key: 'addOne',
        value: function addOne(id) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $.noop;

            var p = this.findProductByID(id);
            if (p) {
                p.quantity += 1;
                this.saveCart(callback);
            }
        }
    }, {
        key: 'getDiscount',
        value: function getDiscount(code, site_name) {
            var _this10 = this;

            if (isNaN(code)) {
                this.get('v1/discount/' + code, { "site_name": site_name }).then(function (response) {
                    // Se utiliza != 0 porque discount es json cuando tiene dato y es lista cuando no
                    if (response.status === "success" && response.discount.length != 0) {
                        if (response.discount["activate"] === true) {
                            _this10.percentage = response.discount["percentage"];
                            _this10.discount_code = response.discount["code"];
                            _this10.modelUpdate();
                            return;
                        }
                    }
                    _this10.percentage = 0;
                    _this10.discount_code = "";
                    _this10.modelUpdate();
                    $(".discount-message").html("Código inválido");
                });
            }
        }

        /**
         * send cart data throw post to API
         * @param  {Function} [callback=$.noop] callback function
         * @return {[type]}                   [description]
         */

    }, {
        key: 'saveCart',
        value: function saveCart() {
            var _this11 = this;

            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $.noop;

            this.post('v1/cart/' + this.guid, {
                'items': JSON.stringify(this.products)
            }).then(function () {
                callback();
                _this11.modelSaved();
            });
            this.modelUpdate();
        }
    }, {
        key: 'findProductByID',
        value: function findProductByID(id) {
            for (var i = 0; i < this.products.length; i++) {
                if (id === this.products[i].id) {
                    return this.products[i];
                }
            }
            return false;
        }
    }, {
        key: 'findProductBySKUCombination',
        value: function findProductBySKUCombination(sku, combination) {
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].sku === sku && this.products[i].combination === combination) {
                    return this.products[i];
                }
            }

            return false;
        }

        /**
         * remove element from shopping cart
         * @param  {string} id  product id
         */

    }, {
        key: 'removeProduct',
        value: function removeProduct(id) {
            var index = this.findProductIndex(id);
            this.products.splice(index, 1);
            this.saveCart();
        }
    }, {
        key: 'getProductID',
        value: function getProductID(sku, combination) {
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].sku === sku && this.products[i].combination === combination) {
                    return this.products[i].id;
                }
            }
        }

        /**
         * remove one product from the cart
         * @param  {int} id  product id
         */

    }, {
        key: 'removeOne',
        value: function removeOne(id) {
            var p = this.findProductByID(id);

            if (!p) {
                return false;
            }

            p.quantity -= 1;
            if (p.quantity <= 0) {
                this.removeProduct(id);
            }
            this.saveCart();
        }
    }, {
        key: 'getProductTotal',
        value: function getProductTotal() {
            var total = 0;
            for (var i = 0; i < this.products.length; i++) {
                total += this.products[i].total;
            }

            return total;
        }
    }, {
        key: 'getUPPTotal',
        value: function getUPPTotal() {
            var total = 0;
            for (var i = 0; i < this.products.length; i++) {
                total += this.products[i].upp_total;
            }

            return total;
        }
    }, {
        key: 'getUnitsTotal',
        value: function getUnitsTotal() {
            var units_total = 0;

            for (var i = 0; i < this.products.length; i++) {
                var product = this.products[i];
                units_total += product.quantity;
            }

            return units_total;
        }

        /**
         * get product image from id
         * @param  {int} id  product id
         * @return {string}    url with product image
         */

    }, {
        key: 'getProductImage',
        value: function getProductImage(sku, combination) {
            // implement this method outside
            return '';
        }
    }, {
        key: 'getDiscountCode',
        value: function getDiscountCode() {
            return this.discount_code;
        }
    }, {
        key: 'getPercentage',
        value: function getPercentage() {
            return this.percentage;
        }
    }]);

    return CartProductListModel;
}(Model);

/*jshint esversion: 6 */
/*global ShoppingCart*/
/*global document*/
/*global $*/
/*global Utils*/

var CartProductListView = function (_View) {
    _inherits(CartProductListView, _View);

    function CartProductListView() {
        _classCallCheck(this, CartProductListView);

        var _this12 = _possibleConstructorReturn(this, (CartProductListView.__proto__ || Object.getPrototypeOf(CartProductListView)).call(this, $('.shopping-cart')));

        _this12.setTemplate($('#shopping-cart-product').html());
        return _this12;
    }

    return CartProductListView;
}(View);

var CartTotalView = function (_View2) {
    _inherits(CartTotalView, _View2);

    function CartTotalView() {
        _classCallCheck(this, CartTotalView);

        var _this13 = _possibleConstructorReturn(this, (CartTotalView.__proto__ || Object.getPrototypeOf(CartTotalView)).call(this, $('.shopping-cart')));

        _this13.setTemplate($('#shopping-cart-total').html());
        _this13.append = true;
        return _this13;
    }

    return CartTotalView;
}(View);

var ExternalCartTotalView = function (_View3) {
    _inherits(ExternalCartTotalView, _View3);

    function ExternalCartTotalView() {
        _classCallCheck(this, ExternalCartTotalView);

        var _this14 = _possibleConstructorReturn(this, (ExternalCartTotalView.__proto__ || Object.getPrototypeOf(ExternalCartTotalView)).call(this, $('.total_cart')));

        _this14.setTemplate($('#total_cart_template').html());
        return _this14;
    }

    return ExternalCartTotalView;
}(View);

var UnitsTotalView = function (_View4) {
    _inherits(UnitsTotalView, _View4);

    function UnitsTotalView() {
        _classCallCheck(this, UnitsTotalView);

        var _this15 = _possibleConstructorReturn(this, (UnitsTotalView.__proto__ || Object.getPrototypeOf(UnitsTotalView)).call(this, $('.units-total')));

        _this15.setTemplate($('#shopping-cart-units-total').html());
        return _this15;
    }

    return UnitsTotalView;
}(View);

var CheckoutFormView = function (_View5) {
    _inherits(CheckoutFormView, _View5);

    function CheckoutFormView() {
        _classCallCheck(this, CheckoutFormView);

        var _this16 = _possibleConstructorReturn(this, (CheckoutFormView.__proto__ || Object.getPrototypeOf(CheckoutFormView)).call(this, $('.checkout-form')));

        _this16.setTemplate($('#shopping-cart-checkout-form').html());
        return _this16;
    }

    return CheckoutFormView;
}(View);

(function ($) {
    /** cookie functions */
    function createCookie(name, value, days) {
        var expires;

        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = encodeURIComponent(name) + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }
    /** /cookie functions */
    var s4 = function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };

    var uuid = function uuid() {
        return s4() + '-' + s4() + '-' + s4() + '-' + s4();
    };

    $.analytics = function (method, data, callback) {
        callback = callback === undefined ? $.noop : callback;
        method = method === undefined ? 'main' : method;

        if (window.ga === undefined) {
            return false;
        }

        // if (method === 'main')
        // {
        //     var ondev_url = 'https://www.google-analytics.com/analytics_debug.js';
        //     var prod_url = 'https://www.google-analytics.com/analytics.js';

        //     var analytics_url = is_prod ? prod_url:ondev_url;

        //     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        //     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        //     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        //     })(window,document,'script',analytics_url,'ga');

        //     ga('create', data.url_code, 'auto');
        //     ga('send', 'pageview');
        //     ga('require', 'ec');
        // }

        if (method === 'product-add') {
            ga('ec:addProduct', data);

            ga('ec:setAction', 'add');
            ga('send', 'event', 'UX', 'click', 'add to cart');
            // ga('send', 'pageview');
        }

        if (method === 'product-detail') {
            ga('ec:addProduct', data);

            ga('ec:setAction', 'detail');
            ga('send', 'pageview');
        }

        if (method === 'product-remove') {
            ga('ec:addProduct', data);

            ga('ec:setAction', 'remove');
            ga('send', 'event', 'UX', 'click', 'remove from cart');
            //ga('send', 'pageview');
        }

        if (method === 'product-add-cart') {
            ga('ec:addProduct', data);
        }

        if (method === 'send-checkout') {

            // console.log("the cookie", readCookie("shopping_cart"));
            var step = 1;
            var current_step = readCookie('analytics_step');

            try {
                step = parseInt(data);
                current_step = parseInt(current_step);
            } catch (ex) {
                console.error(data, 'cannot be parsed to int in checkout steps');
            }

            if (data === '1') {
                createCookie('analytics_id', uuid(), 1);
                createCookie('analytics_step', 0, 1);
            }

            if (step <= current_step) {
                console.error("el paso " + step + " ya fue ejecutado");
                return;
            }

            if (data === '5') {
                // alert(s4() + "-" + s4() + "-" + s4() + "-" + s4());
                ga('ec:setAction', 'purchase', {
                    'id': readCookie('analytics_id') === null ? uuid() : readCookie('analytics_id'),
                    'affiliation': 'Store - Online'
                });
            } else {
                ga('ec:setAction', 'checkout', {
                    'step': data
                });
            }

            // assure step dont repeat
            createCookie('analytics_step', step, 1);

            ga('send', 'pageview', {
                hitCallback: callback
            });
        }
    };
})(jQuery);

/* globals Utils */
/* globals $*/
'use strict';

var ProductDetailView = function ProductDetailView(container) {
    this.template = '';
    this.is_ga_enabled = false;
    this.container = container || '.container';

    this.initTemplates();
};

ProductDetailView.prototype.initTemplates = function () {
    this.template = $.trim($('#product_detail').html());

    if (this.template === '') {
        this.template = '<div>no product template</div>';
    }

    this.renderLoading();
};

ProductDetailView.prototype.render = function (product, callback) {
    callback = callback === undefined ? $.noop : callback;
    var $el = $(this.container);
    var $prod = $(Utils.render(this.template, product));
    var $images = $('.image', $prod);

    this.renderImages($images, product.id);

    this.removeLoading();
    $el.append($prod);
    Utils.processPrice($prod);

    callback.call($el, product);

    this.sendPageView(product);

    //SE IMPLEMENTA DICCIONARIO DE ANALYTICS

    var dict = {
        ga_id: product.id,
        ga_name: product.name,
        ga_tag: product.tags,
        ga_price: product.main_price
    };

    $.analytics("product-detail", dict);
};

ProductDetailView.prototype.renderImages = function ($images, product_id) {
    var self = this;
    var src = '';
    var $image = null;
    var url = Utils.getURL('product', ['images', product_id]);
    var counter = 0;

    $.get(url, function (data) {
        if (typeof data === 'string') {
            data = $.parseJSON(data);
        }

        $images.each(function () {
            if (data.images.length > counter) {
                src = data.images[counter].thumb_500;
                $image = $($images[counter]); // ensure jquery element

                self.loadImageToElement(src, $image);
            }

            counter++;
        });
    });
};

ProductDetailView.prototype.loadImageToElement = function (image_url, $el) {
    var $aux = $el.clone();
    $aux.load(function () {
        $el.replaceWith($aux);
    });
    $aux.fadeOut(function () {
        $aux.attr('src', image_url);
    });
    $aux.fadeIn();
};

ProductDetailView.prototype.enableGA = function () {
    this.is_ga_enabled = true;
};

ProductDetailView.prototype.sendPageView = function (product) {
    try {
        window.ga('ec:addImpression', {
            'id': product.id,
            'name': product.name,
            'price': product.main_price,
            'type': 'view'
        });

        window.ga('ec:setAction', 'detail');
        window.ga('send', 'pageview');
    } catch (e) {
        // nothing here...
    }
};

ProductDetailView.prototype.removeLoading = function () {
    var $container = $(this.container);
    $('.spinner', $container).remove();
};

ProductDetailView.prototype.renderLoading = function () {
    this.removeLoading();
    if (!this.allcontainerLoaded) {
        var $container = $(this.container);
        $container.append($('#product_loading').html());
    }
};

/* global Utils */
/* global $ */
/* global window */
/* global document */
/* global console */

'use strict';

var ProductListView = function ProductListView($target) {
    this.all_products_loaded = false;
    this.loading_products = false;
    this.tag_template = '';
    this.product_template = '';
    this.site_search_template = '';
    this.on_scroll_end = $.noop;
    this.on_click_end = $.noop;
    this.site_search = $('.site_search');
    this.no_products_template = '';
    this.$target = !$target ? $('.products') : $($target);

    // PRIVATE VARS
    var self = this;
    this._onScroll = function () {

        if (self.loading_products) return; // if this flag is enabled then don`t load

        var $products = self.$target;
        var $loading = $('.spinner', $products);

        // check if loading is in viewport
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 400) {
            self.loading_products = true;
            self.on_scroll_end();
        }
    };

    this._onClick = function () {
        var $products = self.$target;
        var $loading = $('.spinner', $products);

        // check if loading is in viewport
        self.loading_products = true;
        self.on_click_end();
    };

    // INNIT
    this.renderLoading();
    this.initTemplates();
    this.renderSiteSearch(this.site_search_template);
};

ProductListView.prototype.initTemplates = function () {
    this.tag_template = $.trim($('#tag_template').html());
    this.product_template = $.trim($('#product_template').html());
    this.site_search_template = $.trim($('#site_search_template').html());

    if (this.product_template === '') {
        this.product_template = '<div>no product template</div>';
    }

    this.init();
};

ProductListView.prototype.init = function () {
    $(document).on('scroll', this._onScroll);
    $(document).on('click', '.more-products', this._onClick);
};

ProductListView.prototype.onScrollEnd = function (callback) {
    this.on_scroll_end = callback;
};

ProductListView.prototype.onClickEnd = function (callback) {
    this.on_click_end = callback;
};

ProductListView.prototype.renderTags = function (tags) {
    // detect if tags are list
    if (tags === undefined) return;

    var $menu = $('.menu ul');
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        var rendered = Utils.render(this.tag_template, tag);

        $menu.append(rendered);
    }
};

/**
 * render error instead of product list
 * @param  {[type]}   $products_view [description]
 * @param  {[type]}   products       [description]
 * @param  {[type]}   page           [description]
 * @param  {Function} callback       [description]
 * @return {[type]}                  [description]
 */
ProductListView.prototype.renderEmpty = function (products, page, callback) {
    if (page === 1) {
        this.$target.html(this.no_products_template);
    }
    this.all_products_loaded = true;
    this.removeLoading();

    // finish rendering
    this.finishRendering(page, products, callback);
};

/**
 * finishes the product rendering
 * @param  {[type]}   page     [description]
 * @param  {[type]}   products [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
ProductListView.prototype.finishRendering = function (page, products, callback) {
    this.page = page;
    callback.call(this, products);
};

/**
 * render a single product and return the html
 * @param  {[type]} product [description]
 * @return {[type]}         [description]
 */
ProductListView.prototype.renderProduct = function (product) {
    var $rendered = $(Utils.render(this.product_template, product));
    this.renderProductImage($('.product-image', $rendered), product.id, $('.product-image-href', $rendered));

    if (product.balance_units === 0) {
        this.showSoldOut($rendered);
    }

    return $rendered;
};

ProductListView.prototype.renderProducts = function (products, page, callback) {
    var rendered;
    var html_builder = [];

    // some validations
    products = products === null ? [] : products;
    page = isNaN(parseInt(page)) ? 1 : page;
    callback = typeof callback === 'function' ? callback : $.noop;

    // when product list is empty then show error
    if (products.length <= 0) {
        this.renderEmpty(products, page, callback);
        return;
    }

    // render product list
    for (var i = 0; i < products.length; i++) {
        html_builder.push(this.renderProduct(products[i]));
    }
    this.$target.append(html_builder);
    Utils.processPrice(this.$target);

    // finish renering process
    this.renderLoading();
    this.finishRendering(page, products, callback);
};

ProductListView.prototype.showSoldOut = function ($rendered) {
    $('.add-to-cart', $rendered).addClass('product-sold-out');
    $('.add-to-cart', $rendered).html('Agotado'); // @todo: add dictionary
    $('.add-to-cart', $rendered).val('Agotado');
};

ProductListView.prototype.removeLoading = function () {
    $('.spinner', this.$target).remove();
    $('.more-products').css('display', 'none');
};

ProductListView.prototype.renderLoading = function () {
    this.removeLoading();
    if (!this.all_products_loaded) {
        this.$target.append($('#product_loading').html());
        $('.more-products').css('display', 'block');
    }
    this.loading_products = false;
};

ProductListView.prototype.renderProductImage = function ($image, product_id, $imagehref) {
    var url = Utils.getURL('product', ['images', product_id]);
    $.get(url, function (data) {
        if (typeof data === 'string') {
            data = $.parseJSON(data);
        }

        if (data.images.length > 0) {
            var src = data.images[0].thumb_500;
            var $aux = $image.clone();

            $aux.load(function () {
                $image.replaceWith($aux);
            });
            $aux.fadeOut(function () {
                if ($imagehref.length > 0) {
                    $imagehref.attr('href', src);
                }
                $aux.attr('src', src);
            });
            $aux.fadeIn();
        }
    });
};

ProductListView.prototype.renderSiteSearch = function (template) {
    if (this.site_search.length) {
        var tag = Utils.getUrlParameter('tag');
        var search_query = Utils.getUrlParameter('search_query');

        if (search_query !== undefined) {
            search_query = decodeURIComponent(search_query).replace(/\+/g, ' ');
        }
        var rendered = Utils.render(template, {
            'tag': tag,
            'search_query': search_query
        });
        this.site_search.append(rendered);

        if (tag === undefined || tag === '') {
            if ($('input[name=tag]', this.site_search).length) {
                $('.tag-search', this.site_search).css('display', 'none');
            }
        }

        if ($("a.remove-tag", this.site_search).length) {
            $("a.remove-tag", this.site_search).on('click', function () {
                $("input[name=tag]", this.site_search).val('');
                $("input[name=search_query]", this.site_search).val($("input[name=search_query]", this.site_search).val());
                $(".btn-search", this.site_search).trigger("click");
            });
        }

        // if(tag !== undefined){
        //     $("#site_search input[name=tag]").tagsInput({
        //         'height':'45px',
        //         'width':'auto',
        //         'defaultText':''
        //     });
        // }
        // $("#site_search input[name=search_query]").tagEditor({ initialTags: tag.split(",") });
    }
};

ProductListView.prototype.destroy = function () {
    try {
        this.$target.html("");
        $(document).unbind('scroll', this._onScroll);
        $(document).unbind('click', this._onClick);
    } catch (ex) {
        console.log("method unbind not found in this jquery version : " + ex);
    }
};

/*global $*/
/*global Utils*/

'use strict';

var ProductBoxView = function ProductBoxView(controller) {
    this.controller = controller;
};

ProductBoxView.prototype.getTemplate = function () {
    return $(this.controller.template_origin).html();
};

ProductBoxView.prototype.productsLoaded = function (product_list) {
    var template = this.getTemplate();

    for (var i = 0; i < product_list.length; i++) {
        var product = product_list[i];
        var rendered = Utils.render(template, product);

        this.controller.$container.append(rendered);
    }
};

ProductBoxView.prototype.render = function (cb) {
    cb = cb || $.noop;
    var self = this;

    this.controller.loadProducts(function (products) {
        self.productsLoaded(products);

        self.controller.onLoad.call(self.controller.$container, products); // event
        cb();
    });
};

/* globals document */
/* globals jQuery */
/* globals $ */
/* globals Utils */

var VariantsView = function VariantsView($target) {
    this.$target = $target;
    this.variants = [];
    this.value_template = '<div class="variant-value" variant="{{ variant_name }}" value="{{ value }}" >{{ value }}</div>';
    this.variant_template = '<div class="variant" >\
            <div class="variant-head">{{ variant_name }}</div>\
            <div class="variant-values">{{ values }}</div>\
        </div>';

    this.active_class = 'value-active';

    this.selected_values = [];
    this.productStock = {};
    this.product_sku = "";

    // triggers
    this.initEvents();
};
/**
 * change default templates for a brand new template
 * @param {string} variant_template template for variant container
 * @param {string} value_template   template for value container
 */
VariantsView.prototype.setTemplates = function (variant_template, value_template) {
    this.variant_template = variant_template !== '' ? variant_template : this.variant_template;
    this.value_template = value_template !== '' ? value_template : this.value_template;
};

/**
 * get initialized all click events on the variants GUI
 */
VariantsView.prototype.initEvents = function () {
    var self = this;
    // $(document).on('click', $('.variant-value', $(this.$target)), function()
    var valueClick = function valueClick() {
        self.selectVariant($(this).attr('variant'), $(this).attr('value'));
        // ad active class
        $('.' + self.active_class, $(self.$target)).removeClass(self.active_class);
        $(this).addClass(self.active_class);

        if (self.isValidCombination()) {
            var sku = self.product_sku + "-" + self.getSelectedCombination();

            $(self.$target).trigger('combination:selected', [self.getSelectedCombination(), self.productStock[sku] > 0]);
        }
    };
    $(document).on('click', '.variant-value', valueClick);
    // $(this.$target).on('click', '.variant-value', valueClick);
};

VariantsView.prototype.selectVariant = function (variant, value) {
    var variant_value = { "variant": variant, "value": value };

    // check if the variant was already selected
    for (var i = 0; i < this.selected_values.length; i++) {
        if (this.selected_values[i].variant === variant) {
            this.selected_values[i].value = value;
            return;
        }
    }

    this.selected_values.push(variant_value);
};

/**
 * render a single value, and return the html
 * @param  {[type]} value json value to be rendered
 * @example:
 *     [{
            "site_name": "me_NBK-SACO-NEGRA-C168",
            "id": 1,
            "value": "1",
            "variant_name": "talla"
        }, ...]
    @return html string with values
 */
VariantsView.prototype.renderValues = function (values, name) {
    var values_builder = [];

    for (var i = 0; i < values.length; i++) {
        values_builder.push(Utils.render(this.value_template, {
            value: values[i],
            variant_name: name
        }));
    }

    return values_builder.join('');
};

/**
 * render a list of values
 * @param  {[type]} values  a list of variants wuthin values inside
 * @example:
 *     [{
            "values": [{
                "site_name": "me_NBK-SACO-NEGRA-C168",
                "id": 1,
                "value": "1",
                "variant_name": "talla"
            },...],
            "variant_name": "talla"
        },...];
 * @return {string}          html string with variants
 */
VariantsView.prototype.renderVariants = function (variants) {
    var variant_builder = [];
    for (var i = 0; i < variants.length; i++) {
        this.variants[i].order = i;
        var rendered = Utils.render(this.variant_template, {
            'variant_name': variants[i].variant_name,
            'values': this.renderValues(variants[i].values, variants[i].variant_name)
        });

        variant_builder.push(rendered);
    }

    return variant_builder.join('');
};

/**
 * render variants and place inside $target
 * @param  {[type]} variants list of variants
 */
VariantsView.prototype.render = function (variants) {
    this.variants = variants;
    $(this.$target).html(this.renderVariants(variants));
};

/**
 * return currently selected variant
 * @return {string} a string describing selected variant
 *                  i.e [sku]-[variant0]-...[variant n]
 */
VariantsView.prototype.getSelectedCombination = function () {
    var builder = [];

    // only join values
    for (var i = 0; i < this.selected_values.length; i++) {
        builder.push(this.selected_values[i].value);
    }
    return builder.join('-');
};

/**
 * check if all variants have a selected value
 */
VariantsView.prototype.isValidCombination = function () {
    var variant_list = this.variants;
    var selected_list = this.selected_values;

    if (variant_list.length === selected_list.length) {
        var aux_list = $.extend(true, {}, selected_list);

        for (var i = 0; i < variant_list.length; i++) {
            var variant_name = aux_list[i].variant;

            for (var j = 0; j < variant_list.length; j++) {
                if (variant_name === variant_list[j].variant_name) {
                    var position = variant_list[j].order;
                    selected_list.splice(position, 1, aux_list[i]);
                }
            }
        }

        return true;
    }

    return false;
};

/*jshint esversion: 6 */
/*global Utils*/
/*global $*/
/*global ShoppingCartView*/
/*global ExtraInfo*/
/*global window*/

var Cart = function (_Module) {
    _inherits(Cart, _Module);

    function Cart(checkout_url, site_name) {
        _classCallCheck(this, Cart);

        var _this17 = _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this));

        _this17.checkout_url = checkout_url === undefined ? '' : checkout_url;
        _this17.site_name = site_name === undefined ? "" : site_name;

        _this17.onLoadCart = $.noop;
        _this17.onSaveModel = $.noop;
        _this17.afterModelUpdate = $.noop;

        _this17.shipping_cost = 0;

        _this17.extra_info = new ExtraInfo(1);

        // models
        _this17.cart_model = new CartProductListModel(_this17.extra_info);

        // views
        _this17.product_view = new CartProductListView();
        _this17.total_view = new CartTotalView();
        _this17.total_extern_view = new ExternalCartTotalView();
        _this17.units_total_view = new UnitsTotalView();
        _this17.checkout_form_view = new CheckoutFormView();

        // google analytics
        _this17.is_ga_enabled = true;

        // add models and views
        _this17.addModel('product-list', _this17.cart_model);

        // Nota: se usa en checkout.html
        _this17.addView('product-list-view', _this17.product_view);
        // Nota: no se usa
        _this17.addView('total-view', _this17.total_view);
        // Nota: no se usa
        _this17.addView('total-extern-view', _this17.total_extern_view);
        // Nota: se usa en checkout.html
        _this17.addView('units-total-view', _this17.units_total_view);
        // Nota: no se usa
        _this17.addView('checkout-form-view', _this17.checkout_form_view);

        // add view actions
        _this17.product_view.setClickAction('lp-cart-add');
        _this17.total_view.setClickAction('lp-cart-add-one');
        _this17.total_view.setClickAction('lp-cart-remove-one');
        _this17.total_view.setClickAction('lp-cart-remove');
        _this17.total_view.setClickAction('lp-discount-button');

        _this17.total_view.setEnterAction('lp-discount-input');

        _this17.cart_model.loadProducts();

        return _this17;
    }

    _createClass(Cart, [{
        key: 'onInit',
        value: function onInit() {
            return true;
        }

        // Interface

    }, {
        key: 'onModelLoaded',
        value: function onModelLoaded(endpoint, data, method) {
            if (endpoint.indexOf('v1/cart') === 0 && method === 'get') {
                this.product_view.render();
                this.total_view.render();
                this.total_extern_view.render();
                this.units_total_view.render();
                this.checkout_form_view.render();

                this.onLoadCart(data.products);
            }
            if (endpoint.indexOf('v1/cart') === 0 && method === 'post') {
                this.onSaveModel();
            }
        }
    }, {
        key: 'onModelUpdate',
        value: function onModelUpdate(model) {
            // GUARDAR ESTADO DEL BOTON PAGAR FIJO
            var disabled = $(".lp-checkout-button").is(':disabled');

            this.product_view.render();
            this.total_view.render();
            this.total_extern_view.render();
            this.units_total_view.render();
            this.checkout_form_view.render();

            if (!disabled) $(".pagar-che").removeAttr('disabled');

            this.afterModelUpdate();
        }
    }, {
        key: 'onModelSaved',
        value: function onModelSaved(model) {
            this.afterModelSave();
        }
    }, {
        key: 'onActionPerformed',
        value: function onActionPerformed(tag_name, data, $element) {
            if (tag_name === 'lp-cart-add') {
                this.cart_model.addProduct($element.attr('product-sku'), $element.attr('product-combination'), $element.attr('product-price'), $element.attr('product-name'), $element.attr('product-upp'), $element.attr('product-bullet1'), $element.attr('product-bullet2'), $element.attr('product-bullet3'), $element.attr('product-img'), $element.attr('product-weight'));
            }

            if (tag_name === "lp-cart-add-one") {
                this.cart_model.addOne(data);
            }

            if (tag_name === "lp-cart-remove-one") {
                this.cart_model.removeOne(data);
            }

            if (tag_name === "lp-cart-remove") {
                this.cart_model.removeProduct(data);
            }

            if (tag_name === "lp-discount-button") {
                var list = $("[lp-discount-input]");

                for (var i = 0; i < list.length; i++) {
                    if ($(list[i]).val() != "") data = $(list[i]).val();
                }

                this.cart_model.getDiscount(data, this.site_name);
            }

            if (tag_name === "lp-discount-input") {
                this.cart_model.getDiscount(data, this.site_name);
            }
        }
    }, {
        key: 'onViewRequestData',
        value: function onViewRequestData(view) {
            if (view.id === this.product_view.id) {
                return this.getProducts();
            }
            if (view.id === this.total_view.id || view.id === this.total_extern_view.id || view.id === this.units_total_view.id || view.id === this.checkout_form_view.id) {
                return {
                    'subtotal': this.getSubTotal(),
                    'total': this.getTotal(),
                    'shipping_cost': this.shipping_cost,
                    'units_total': this.getUnitsTotal(),
                    'upp_total': this.getUPPTotal(),
                    'checkout_url': this.getCheckoutUrl(),
                    'site_name': this.getSiteId(),
                    'cart_id': this.getGUID(),
                    'discount_code': this.getDiscountCode(),
                    'percentage': this.getPercentage()
                };
            }
        }
    }, {
        key: 'getGUID',
        value: function getGUID() {
            return this.cart_model.guid;
        }
    }, {
        key: 'getCheckoutUrl',
        value: function getCheckoutUrl() {
            return this.checkout_url;
        }
    }, {
        key: 'getSiteId',
        value: function getSiteId() {
            return this.site_name;
        }
    }, {
        key: 'saveModel',
        value: function saveModel(callback) {
            this.onSaveModel = callback;
            this.cart_model.saveCart();
        }

        /**
         * return the currently selected combination
         * @return {string} current combination
         */

    }, {
        key: 'getCurrentCombination',
        value: function getCurrentCombination() {
            // implemented outside
            return "";
        }

        /**
         * add an element to the shopping cart
         * @param  {int}   id       product unique identifier
         * @param  {float}   price     product price
         * @param  {string}   name
         * @param  {int}   upp      units per product
         * @param  {string}   bullet1  some random text
         * @param  {string}   bullet2  some random text
         * @param  {string}   bullet3  some random text
         * @param  {object}   img      json with images
         * @param  {int}      weight   weight of the product in kg
         * @param  {Function} callback callback this method when loaded
         * @todo: use promisses
         */

    }, {
        key: 'addProduct',
        value: function addProduct(id, sku, combination, price, name, upp, bullet1, bullet2, bullet3, img, weight, callback) {
            // soft replacement of id by sku
            if (sku === '') {
                sku = id;
            }

            this.cart_model.addProduct(sku, combination, price, name, upp, bullet1, bullet2, bullet3, img, weight, callback);

            this.gaAddProduct({
                id: id, sku: sku, combination: combination, price: price, name: name, upp: upp,
                bullet1: bullet1, bullet2: bullet2, bullet3: bullet3, img: img, weight: weight
            }, this.cart_model.findProductIndex(id));
        }

        /**
         * remove element from shopping cart
         * @param  {int} id  product id
         */

    }, {
        key: 'removeProduct',
        value: function removeProduct(id) {
            this.cart_model.removeProduct(id);
        }

        /**
         * remove one product from the cart
         * @param  {int} id  product id
         */

    }, {
        key: 'removeOne',
        value: function removeOne(sku) {
            var combination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            var cp = this.cart_model.findProductBySKUCombination(sku, combination);
            this.cart_model.removeOne(cp.id);
        }

        /**
         * return a list of productos
         * @return {list}  a list which contains products
         */

    }, {
        key: 'getProducts',
        value: function getProducts() {
            return this.cart_model.products;
        }

        /**
         * @deprecated moved to model
         * check if product exists
         * @param  {int} id product id
         * @param  {string}  sku also unique identifier (optional)
         * @return {boolean}    true if product exists, false otherwise
         */
        // productExist(id, sku)
        // {
        //     var pid = parseInt(id);
        //     var final_sku = sku === undefined ? '':sku;
        //     // get the product from model, if exist or create from database
        //     for (var i = 0; i < this.model.length; i++)
        //     {
        //         if (parseInt(this.model[i].id) === pid &&
        //             final_sku === this.model[i].sku )
        //         {
        //             return true;
        //         }
        //     }
        //     return false;
        // }

    }, {
        key: 'getSubTotal',
        value: function getSubTotal() {
            var total = 0;

            total += this.cart_model.getProductTotal();

            return total;
        }
    }, {
        key: 'getTotal',
        value: function getTotal() {
            var total = 0;
            var percentage = 0;

            total += this.cart_model.getProductTotal();
            total += this.shipping_cost;

            percentage = this.getPercentage();

            if (percentage > 0) total = Math.floor(total * (100 - percentage) / 100);

            return total;
        }
    }, {
        key: 'getUnitsTotal',
        value: function getUnitsTotal() {
            return this.cart_model.getUnitsTotal();
        }

        /** upp == units per product */

    }, {
        key: 'getUPPTotal',
        value: function getUPPTotal() {
            return this.cart_model.getUPPTotal();
        }

        /**
         * @deprecated
         * load cart from a cookie
         * @param  {object} callback  callback executed when the cart is loaded
         */

    }, {
        key: 'loadCart',
        value: function loadCart() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $.noop;

            this.onLoadCart = callback;
        }
    }, {
        key: 'setShippingCost',
        value: function setShippingCost(shipping_cost) {
            this.shipping_cost = shipping_cost;
            this.product_view.render();
            this.total_view.render();
            this.total_extern_view.render();
            this.units_total_view.render();
            this.checkout_form_view.render();
        }

        /**
         * set google analytics enhanced for ecommerce enabled
         * @param  {function} ga google analytics function
         */

    }, {
        key: 'enableGA',
        value: function enableGA() {
            this.is_ga_enabled = true;

            window.ga('require', 'ec');
        }
    }, {
        key: 'gaAddProduct',
        value: function gaAddProduct(product, position) {
            try {
                if (this.is_ga_enabled) {
                    this.gaSetProduct(product, position);

                    window.ga('ec:setAction', 'add');
                    window.ga('send', 'event', 'UX', 'click', 'add to cart');
                    // window.ga( 'ec:setAction', 'add');
                    // window.ga( 'send', 'event', 'UX', 'click', 'add to cart');
                }
            } catch (e) {
                // nothing here...
            }
        }
    }, {
        key: 'gaRemoveProduct',
        value: function gaRemoveProduct(product) {
            try {
                if (this.is_ga_enabled) {
                    this.gaSetProduct(product, 0);

                    window.ga('ec:setAction', 'remove');
                    window.ga('send', 'event', 'UX', 'click', 'add to cart');
                }
            } catch (e) {
                // nothin here...
            }
        }
    }, {
        key: 'gaSetProduct',
        value: function gaSetProduct(product, position) {
            window.ga('ec:addProduct', {
                'id': product.id,
                'name': product.name,
                'price': product.main_price,
                'position': position
            });
        }
    }, {
        key: 'clearCart',
        value: function clearCart(callback) {
            this.model = [];
            this.cart_model.saveCart(callback);
            // this.saveModel(callback);
        }
    }, {
        key: 'getDiscountCode',
        value: function getDiscountCode() {
            return this.cart_model.getDiscountCode();
        }
    }, {
        key: 'getPercentage',
        value: function getPercentage() {
            return this.cart_model.getPercentage();
        }
    }, {
        key: 'guid',
        set: function set(guid) {
            this.cart_model.guid = guid;
            this.cart_model.loadProducts();
        },
        get: function get() {
            return this.cart_model.guid;
        }
    }]);

    return Cart;
}(Module);
//# sourceMappingURL=bodegas.client.es5.js.map
