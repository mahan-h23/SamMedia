(function (t) {
    function e(e) {
        for (var i, r, s = e[0], l = e[1], c = e[2], d = 0, f = []; d < s.length; d++) r = s[d], Object.prototype.hasOwnProperty.call(o, r) && o[r] && f.push(o[r][0]), o[r] = 0;
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
        u && u(e);
        while (f.length) f.shift()();
        return a.push.apply(a, c || []), n()
    }

    function n() {
        for (var t, e = 0; e < a.length; e++) {
            for (var n = a[e], i = !0, s = 1; s < n.length; s++) {
                var l = n[s];
                0 !== o[l] && (i = !1)
            }
            i && (a.splice(e--, 1), t = r(r.s = n[0]))
        }
        return t
    }

    var i = {}, o = {app: 0}, a = [];

    function r(e) {
        if (i[e]) return i[e].exports;
        var n = i[e] = {i: e, l: !1, exports: {}};
        return t[e].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }

    r.m = t, r.c = i, r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, r.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i, function (e) {
            return t[e]
        }.bind(null, i));
        return n
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [], l = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var c = 0; c < s.length; c++) e(s[c]);
    var u = l;
    a.push(["037d", "chunk-vendors"]), n()
})({
    "037d": function (t, e, n) {
        "use strict";
        n.r(e);
        n("cadf"), n("551c"), n("f751"), n("097d");
        var i = n("2b0e"), o = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n(t.layout, {
                    tag: "component",
                    attrs: {id: "app"}
                }, [n("v-row", {attrs: {align: "center"}}, [n("v-col", [n("router-view")], 1)], 1), n("v-snackbar", {
                    staticClass: "mt-10",
                    attrs: {color: t.snackbar_color, top: !0, timeout: t.snackbar_timeout},
                    model: {
                        value: t.show_snackbar, callback: function (e) {
                            t.show_snackbar = e
                        }, expression: "show_snackbar"
                    }
                }, [n("v-icon", {
                    attrs: {
                        color: "white",
                        left: ""
                    }
                }, [t._v(t._s(t.snackbar_icon))]), n("v-container", t._l(t.snackbar_texts, (function (e, i) {
                    return n("v-row", {key: i}, [n("v-col", [t._v(t._s(e))])], 1)
                })), 1), n("v-btn", {
                    attrs: {dark: "", text: ""}, on: {
                        click: function (e) {
                            t.show_snackbar = !1
                        }
                    }
                }, [t._v("Close")])], 1)], 1)
            }, a = [], r = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-app", {attrs: {id: "inspire"}}, [t._t("default")], 2)
            }, s = [], l = {
                name: "NotLoggedInLayout", data: function () {
                    return {}
                }
            }, c = l, u = n("2877"), d = Object(u["a"])(c, r, s, !1, null, null, null), f = d.exports, p = function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return t.initialized ? i("v-app", {attrs: {id: "inspire"}}, [i("v-app-bar", {
                    attrs: {
                        app: "",
                        "clipped-right": "",
                        color: "blue",
                        dark: ""
                    }, on: {
                        click: function (e) {
                            e.stopPropagation(), t.mini = !0
                        }
                    }
                }, [i("v-toolbar-title", {
                    style: {cursor: "pointer"},
                    on: {click: t.goToHomePage}
                }, [i("v-row", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [i("v-col", [i("img", {
                    staticClass: "mt-2 toolbar-logo",
                    attrs: {src: n("f3e5")}
                })]), i("v-col", [i("span", {staticClass: "app-title"}, [t._v("DigiKala BCM Software")])])], 1)], 1), i("div", {staticClass: "flex-grow-1"}), i("v-tooltip", {
                    attrs: {bottom: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function (e) {
                            var n = e.on;
                            return [i("v-icon", t._g({staticClass: "mr-2"}, n), [t._v("mdi-account")])]
                        }
                    }], null, !1, 2921913006)
                }, [i("span", [t._v(t._s(t.user_profile.username))])]), i("v-btn", {
                    attrs: {icon: ""},
                    on: {click: t.logout}
                }, [i("v-icon", [t._v("mdi-logout")])], 1)], 1), i("v-content", [i("v-container", {
                    staticClass: "pa-0",
                    attrs: {align: "start", justify: "start", fluid: ""}
                }, [i("v-row", {
                    attrs: {
                        "no-gutters": "",
                        align: "start",
                        justify: "start"
                    }
                }, [i("v-col", {
                    attrs: {
                        xl: "auto",
                        lg: "auto",
                        md: "auto",
                        sm: "auto",
                        xs: "auto"
                    }
                }, [i("div", {class: t.mini ? "mini-drawer-shadow" : "drawer-shadow"}), i("v-navigation-drawer", {
                    staticClass: "drawer",
                    attrs: {"mini-variant": t.mini, permanent: "", fixed: ""},
                    model: {
                        value: t.drawer, callback: function (e) {
                            t.drawer = e
                        }, expression: "drawer"
                    }
                }, [i("v-list-item", {
                    attrs: {
                        jusitfy: "center",
                        align: "center"
                    }
                }, [i("v-list-item-title", [t._v("Menu")])], 1), i("v-divider"), i("v-list", {attrs: {dense: ""}}, t._l(t.items, (function (e) {
                    return i("v-list-item", {
                        key: e.title,
                        attrs: {disabled: e.disabled, id: e.id, link: ""},
                        on: {
                            click: function (n) {
                                return t.goTo(e)
                            }
                        }
                    }, [i("v-list-item-icon", [i("v-icon", {attrs: {disabled: e.disabled}}, [t._v(t._s(e.icon))])], 1), i("v-list-item-content", [i("v-list-item-title", [t._v(t._s(e.title))])], 1)], 1)
                })), 1), i("v-divider"), i("v-list", {attrs: {dense: ""}}, t._l(t.workflow_items, (function (e) {
                    return i("v-list-item", {
                        key: e.title, attrs: {id: e.id, link: ""}, on: {
                            click: function (n) {
                                return t.goTo(e)
                            }
                        }
                    }, [i("v-list-item-icon", [i("v-icon", [t._v(t._s(e.icon))])], 1), i("v-list-item-content", [i("v-list-item-title", [t._v(t._s(e.title))])], 1)], 1)
                })), 1), i("v-divider"), i("v-divider"), i("v-row", [i("div", {staticClass: "flex-grow-1"}), i("v-col", [i("v-btn", {
                    attrs: {icon: ""},
                    on: {
                        click: function (e) {
                            e.stopPropagation(), t.mini = !t.mini
                        }
                    }
                }, [t.mini ? i("v-icon", [t._v("mdi-chevron-double-right")]) : i("v-icon", [t._v("mdi-chevron-double-left")])], 1)], 1), i("div", {staticClass: "flex-grow-1"})], 1)], 1)], 1), i("v-col", [t._t("default")], 2)], 1)], 1)], 1)], 1) : t._e()
            }, _ = [], v = (n("55dd"), n("ac6a"), n("5df3"), n("7f7f"), new i["default"]), h = "SUCESS", m = "ERROR",
            g = "LOGOUT";

        function k(t, e) {
            v.$emit(h, t, e)
        }

        function w(t, e) {
            v.$emit(m, t, e)
        }

        function b() {
            v.$emit(g)
        }

        function y(t) {
            v.$on(h, t)
        }

        function j(t) {
            v.$on(m, t)
        }

        function x(t) {
            v.$on(g, t)
        }

        var O = n("d225"), C = n("b0b4"), S = (n("4f7f"), n("2f62"));
        i["default"].use(S["a"]);
        var D = new S["a"].Store({
            state: {user: {}}, mutations: {
                initialiseStore: function (t) {
                    localStorage.getItem("store") && this.replaceState(Object.assign(t, JSON.parse(localStorage.getItem("store"))))
                }, setAuthToken: function (t, e) {
                    t.user.token = e
                }, unSetAuthToken: function (t) {
                    t.user.token = null
                }
            }
        });
        D.subscribe((function (t, e) {
            localStorage.setItem("store", JSON.stringify(e))
        }));
        var P = D, E = n("bc3a"), $ = n.n(E), T = 1e4, H = function () {
                return {Authorization: "Token ".concat(P.state.user.token)}
            }, A = function () {
                function t() {
                    Object(O["a"])(this, t)
                }

                return Object(C["a"])(t, [{
                    key: "_request", value: function (t, e) {
                        var n = this;
                        return $()(t).then(e).catch((function (t) {
                            t.response ? 401 === t.response.status || 403 === t.response.status ? b() : n.handle_error(t.response) : console.error(t)
                        }))
                    }
                }, {
                    key: "get", value: function (t, e) {
                        return this._request({method: "get", url: t, headers: H()}, e)
                    }
                }, {
                    key: "post", value: function (t, e, n) {
                        return this._request({method: "post", url: t, data: e, headers: H()}, n)
                    }
                }, {
                    key: "put", value: function (t, e, n) {
                        return this._request({method: "put", url: t, data: e, headers: H()}, n)
                    }
                }, {
                    key: "delete", value: function (t, e) {
                        return this._request({method: "delete", url: t, headers: H()}, e)
                    }
                }, {
                    key: "handle_error", value: function (t) {
                        var e = this;
                        400 === t.status && t.data.forEach((function (t) {
                            switch (t.error_code) {
                                case T:
                                    w(e.build_protection_error_messages(t));
                                    break;
                                default:
                                    console.log("An unexpected error occured with the code ".concat(t.error_code))
                            }
                        }))
                    }
                }, {
                    key: "build_protection_error_messages", value: function (t) {
                        return new Set(t.detail.protected_errors.map((function (t) {
                            var e = "";
                            switch (t.object_type) {
                                case"workflow":
                                    e = "workflow";
                                    break;
                                case"state":
                                    e = "state";
                                    break;
                                case"transitionmeta":
                                    e = "transition meta";
                                    break;
                                case"transitionapprovalmeta":
                                    e = "transition approval meta";
                                    break;
                                case"transition":
                                    e = "transition";
                                    break;
                                case"transitionapproval":
                                    e = "transition approval";
                                    break;
                                case"ontransitionhook":
                                    e = "transition hook";
                                    break;
                                case"onapprovedhook":
                                    e = "approval hook";
                                    break;
                                default:
                                    return console.error("Unexpected protected object type ".concat(t.object_type)), null
                            }
                            return "Can not delete since there is a dependant ".concat(e, " object")
                        })))
                    }
                }]), t
            }(), W = new A, z = W, q = "add", L = "change", F = "delete", N = "view", I = "workflow", R = "state",
            M = "function", U = function () {
                function t() {
                    Object(O["a"])(this, t)
                }

                return Object(C["a"])(t, [{
                    key: "_has_permission", value: function (t, e, n) {
                        return z.get("/user/has_river_permission/".concat(t, "/").concat(e), (function (t) {
                            t.data ? n(!0) : n(!1)
                        }))
                    }
                }, {
                    key: "has_add_permission", value: function (t, e) {
                        return this._has_permission(q, t, e)
                    }
                }, {
                    key: "has_change_permission", value: function (t, e) {
                        return this._has_permission(L, t, e)
                    }
                }, {
                    key: "has_delete_permission", value: function (t, e) {
                        return this._has_permission(F, t, e)
                    }
                }, {
                    key: "has_view_permission", value: function (t, e) {
                        return this._has_permission(N, t, e)
                    }
                }]), t
            }(), V = new U, G = {
                name: "LoggedInLayout", data: function () {
                    return {
                        initialized: !1,
                        drawer: !1,
                        mini: !0,
                        items: [],
                        workflow_items: [],
                        user_profile: null,
                        raw_items: [{
                            id: "workflow-list",
                            title: "Workflows",
                            icon: "mdi-file-tree",
                            name: "list-workflows",
                            authorization_object_type: I
                        }, {
                            id: "state-list",
                            title: "States",
                            icon: "mdi-label-variant-outline",
                            name: "list-states",
                            authorization_object_type: R
                        }, {
                            id: "function-list",
                            title: "Functions",
                            icon: "mdi-function-variant",
                            name: "list-callback-functions",
                            authorization_object_type: M
                        }]
                    }
                }, mounted: function () {
                    var t = this;
                    if (!this.initialized) {
                        var e = z.get("/user/get/", (function (e) {
                            t.user_profile = e.data
                        })), n = V.has_view_permission(I, (function (e) {
                            if (e) return z.get("/workflow/metadata", (function (e) {
                                t.workflow_items = e.data.map((function (t) {
                                    return {
                                        id: t.id,
                                        title: t.name,
                                        icon: t.icon,
                                        name: "list-workflow-objects",
                                        params: {workflow_id: t.id}
                                    }
                                }))
                            }))
                        }));
                        Promise.all(this.raw_items.map((function (e, n) {
                            if (e.authorization_object_type) return V.has_view_permission(e.authorization_object_type, (function (i) {
                                t.items.push({id: e.id, title: e.title, icon: e.icon, name: e.name, index: n, disabled: !i})
                            }))
                        })).concat([e, n])).then((function () {
                            t.items = t.items.sort((function (t, e) {
                                return t.index - e.index
                            })), t.initialized = !0
                        }))
                    }
                }, methods: {
                    logout: function () {
                        b()
                    }, goToHomePage: function () {
                        this.$router.push({name: "home"})
                    }, goTo: function (t) {
                        this.$router.push({name: t.name, params: t.params || {}})
                    }
                }
            }, J = G, B = (n("5a6f"), Object(u["a"])(J, p, _, !1, null, null, null)), Q = B.exports, Y = "LoggedInLayout",
            K = {
                name: "app", components: {LoggedInLayout: Q, NotLoggedInLayout: f}, computed: {
                    layout: function () {
                        return this.$route.meta.layout || Y
                    }
                }, mounted: function () {
                    var t = this, e = this;
                    x((function () {
                        t.$store.commit("unSetAuthToken"), t.$router.push({name: "login"})
                    })), j((function (n, i) {
                        t.snackbar_timeout = i || t.default_snackbar_timeout, e.error(n)
                    })), y((function (n, i) {
                        t.snackbar_timeout = i || t.default_snackbar_timeout, e.success([n])
                    }))
                }, data: function () {
                    return {
                        show_snackbar: !1,
                        snackbar_icon: null,
                        snackbar_timeout: null,
                        snackbar_color: "grey",
                        snackbar_texts: null,
                        default_snackbar_timeout: 4e3
                    }
                }, methods: {
                    success: function (t) {
                        this.snackbar_icon = "mdi-check-all", this.snackbar_texts = t, this.snackbar_color = "success", this.show_snackbar = !0
                    }, error: function (t) {
                        this.snackbar_icon = "mdi-shield-half-full", this.snackbar_texts = t, this.snackbar_color = "error", this.show_snackbar = !0
                    }
                }
            }, X = K, Z = (n("e4a5"), Object(u["a"])(X, o, a, !1, null, null, null)), tt = Z.exports, et = n("ce5b"),
            nt = n.n(et);
        n("bf40"), n("5363");
        i["default"].use(nt.a, {iconfont: "mdi"});
        var it = {}, ot = new nt.a(it), at = n("8c4f"), rt = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-content", [n("v-container", {
                    staticClass: "fill-height",
                    attrs: {fluid: ""}
                }, [n("v-row", {attrs: {align: "center", justify: "center"}}, [n("v-col", {
                    attrs: {
                        cols: "12",
                        sm: "8",
                        md: "4"
                    }
                }, [n("v-card", {
                    staticClass: "elevation-12",
                    attrs: {"pa-5": ""}
                }, [n("v-toolbar", {
                    attrs: {
                        color: "primary",
                        dark: "",
                        flat: ""
                    }
                }, [n("v-toolbar-title", [t._v("River Admin sssss")]), n("div", {staticClass: "flex-grow-1"})], 1), n("v-card-text", [n("v-form", [n("v-text-field", {
                    attrs: {
                        label: "Login",
                        name: "login",
                        "prepend-icon": "mdi-account",
                        type: "text"
                    }, model: {
                        value: t.username, callback: function (e) {
                            t.username = e
                        }, expression: "username"
                    }
                }), n("v-text-field", {
                    attrs: {
                        id: "password",
                        label: "Password",
                        name: "password",
                        "prepend-icon": "mdi-lock",
                        type: "password"
                    }, model: {
                        value: t.password, callback: function (e) {
                            t.password = e
                        }, expression: "password"
                    }
                })], 1)], 1), n("v-card-actions", [n("div", {staticClass: "flex-grow-1"}), n("v-btn", {
                    attrs: {color: "primary"},
                    on: {click: t.login}
                }, [t._v("Login")])], 1)], 1)], 1)], 1)], 1)], 1)
            }, st = [], lt = {
                props: {source: String}, data: function () {
                    return {username: null, password: null}
                }, methods: {
                    login: function () {
                        var t = this;
                        this.error_message = null, this.alert = !1, $.a.post("/api-token-auth/", {
                            username: this.username,
                            password: this.password
                        }).then((function (e) {
                            t.$store.commit("setAuthToken", e.data.token), V.has_view_permission(I, (function (e) {
                                e ? t.$route.params.nextUrl ? t.$router.push({path: t.$route.params.nextUrl}) : t.$router.push({name: "home"}) : (t.$store.commit("unSetAuthToken"), w(["You must have the permission to view the workflows!"], 1e4))
                            }))
                        })).catch((function (t) {
                            w(["Authentication failed with given credentials!"], 1e4)
                        }))
                    }
                }
            }, ct = lt, ut = Object(u["a"])(ct, rt, st, !1, null, null, null), dt = ut.exports, ft = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.initialized ? n("v-container", {attrs: {fluid: ""}}, [0 == t.items.length ? n("v-container", {attrs: {fluid: ""}}, [n("EmptyState", {
                    attrs: {
                        label: "You don't seem to have any workflow",
                        description: "Why don't you create your first workflow?"
                    }, scopedSlots: t._u([{
                        key: "icon", fn: function () {
                            return [t._v("mdi-sitemap")]
                        }, proxy: !0
                    }, {
                        key: "content", fn: function () {
                            return [n("v-row", {
                                attrs: {
                                    justify: "center",
                                    align: "center"
                                }
                            }, [n("v-col", [n("v-btn", {
                                attrs: {block: "", color: "primary"},
                                on: {click: t.goToCreateWorkflowPage}
                            }, [t._v("Begin")])], 1)], 1)]
                        }, proxy: !0
                    }], null, !1, 2521590817)
                })], 1) : n("v-container", {attrs: {fluid: ""}}, [n("v-flex", [t.message ? n("v-alert", {
                    staticClass: "transition-swing",
                    attrs: {type: "success", transition: "scale-transition"},
                    model: {
                        value: t.messageAlert, callback: function (e) {
                            t.messageAlert = e
                        }, expression: "messageAlert"
                    }
                }, [t._v(t._s(t.message))]) : t._e()], 1), n("v-row", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("v-col", {attrs: {justify: "center", align: "center"}}, [n("h1", [n("v-icon", {
                    staticClass: "mb-2",
                    staticStyle: {"font-size": "35px"}
                }, [t._v("mdi-sitemap")]), t._v("??Workflows\n        ")], 1)])], 1), n("v-row", t._l(t.items, (function (e) {
                    return n("v-col", {key: e.id, attrs: {xl: "2", lg: "3", md: "4", sm: "12", xs: "12"}}, [n("v-hover", {
                        scopedSlots: t._u([{
                            key: "default", fn: function (i) {
                                var o = i.hover;
                                return [n("v-card", {
                                    attrs: {
                                        elevation: o ? 24 : 6,
                                        height: "300",
                                        "min-width": "200"
                                    }
                                }, [n("v-card-text", {staticClass: "card-text"}, [n("v-row", {staticClass: "fill-height"}, [e.admin_name ? n("v-col", [e.admin_icon ? n("v-row", {
                                    staticClass: "mt-5 mb-10",
                                    attrs: {align: "center", justify: "center"}
                                }, [n("v-icon", {
                                    attrs: {
                                        color: "primary",
                                        "x-large": ""
                                    }
                                }, [t._v(t._s(e.admin_icon))])], 1) : t._e(), n("v-row", {
                                    staticClass: "mt-5 mb-10",
                                    attrs: {align: "center", justify: "center"}
                                }, [n("H5Max", {
                                    attrs: {max: "16"}, model: {
                                        value: e.admin_name, callback: function (n) {
                                            t.$set(e, "admin_name", n)
                                        }, expression: "item.admin_name"
                                    }
                                })], 1)], 1) : n("v-col", [n("v-row", {
                                    staticClass: "mt-5 mb-10",
                                    attrs: {align: "center", justify: "center"}
                                }, [n("H5Max", {
                                    attrs: {max: "16"},
                                    model: {
                                        value: e.content_type.app_label, callback: function (n) {
                                            t.$set(e.content_type, "app_label", n)
                                        }, expression: "item.content_type.app_label"
                                    }
                                })], 1), n("v-row", {
                                    staticClass: "mb-10",
                                    attrs: {align: "center", justify: "center"}
                                }, [n("H5Max", {
                                    attrs: {max: "16"},
                                    model: {
                                        value: e.content_type.model, callback: function (n) {
                                            t.$set(e.content_type, "model", n)
                                        }, expression: "item.content_type.model"
                                    }
                                })], 1), n("v-row", {
                                    attrs: {
                                        align: "center",
                                        justify: "center"
                                    }
                                }, [n("H5Max", {
                                    attrs: {max: "16"}, model: {
                                        value: e.field_name, callback: function (n) {
                                            t.$set(e, "field_name", n)
                                        }, expression: "item.field_name"
                                    }
                                })], 1)], 1)], 1)], 1), n("v-divider"), n("v-card-actions", [n("div", {staticClass: "flex-grow-1"}), n("v-tooltip", {
                                    attrs: {top: ""},
                                    scopedSlots: t._u([{
                                        key: "activator", fn: function (i) {
                                            var o = i.on;
                                            return [n("v-btn", t._g({
                                                attrs: {icon: "", color: "primary"},
                                                on: {
                                                    click: function (n) {
                                                        return t.goToViewWorkflowPage(e.id)
                                                    }
                                                }
                                            }, o), [n("v-icon", [t._v("mdi-details")])], 1)]
                                        }
                                    }], null, !0)
                                }, [n("span", [t._v("View Workflow")])]), n("v-tooltip", {
                                    attrs: {top: ""},
                                    scopedSlots: t._u([{
                                        key: "activator", fn: function (i) {
                                            var o = i.on;
                                            return [n("v-btn", t._g({
                                                attrs: {
                                                    icon: "",
                                                    color: "primary",
                                                    disabled: !t.has_change_workflow_permission
                                                }, on: {
                                                    click: function (n) {
                                                        return t.goToEditWorkflowPage(e.id)
                                                    }
                                                }
                                            }, o), [n("v-icon", [t._v("mdi-pencil")])], 1)]
                                        }
                                    }], null, !0)
                                }, [n("span", [t._v("Edit Workflow")])]), n("v-tooltip", {
                                    attrs: {top: ""},
                                    scopedSlots: t._u([{
                                        key: "activator", fn: function (i) {
                                            var o = i.on;
                                            return [n("v-btn", t._g({
                                                attrs: {
                                                    icon: "",
                                                    color: "primary",
                                                    disabled: !t.has_change_workflow_permission
                                                }, on: {
                                                    click: function (n) {
                                                        return t.goToEditWorkflowRulePage(e.id)
                                                    }
                                                }
                                            }, o), [n("v-icon", [t._v("mdi-axis-arrow-lock")])], 1)]
                                        }
                                    }], null, !0)
                                }, [n("span", [t._v("Edit Workflow Rules")])]), n("v-tooltip", {
                                    attrs: {top: ""},
                                    scopedSlots: t._u([{
                                        key: "activator", fn: function (i) {
                                            var o = i.on;
                                            return [n("v-btn", t._g({
                                                attrs: {
                                                    icon: "",
                                                    color: "warning",
                                                    disabled: !t.has_delete_workflow_permission
                                                }, on: {
                                                    click: function (n) {
                                                        return t.showDeletingDialog(e)
                                                    }
                                                }
                                            }, o), [n("v-icon", [t._v("mdi-delete")])], 1)]
                                        }
                                    }], null, !0)
                                }, [n("span", [t._v("Delete Workflow")])]), n("div", {staticClass: "flex-grow-1"})], 1)], 1)]
                            }
                        }], null, !0)
                    })], 1)
                })), 1), t.has_add_workflow_permission ? n("div", {staticClass: "fab_container"}, [n("v-btn", {
                    attrs: {
                        large: "",
                        color: "primary",
                        dark: "",
                        fab: ""
                    }, on: {click: t.goToCreateWorkflowPage}
                }, [n("v-icon", [t._v("mdi-plus")])], 1)], 1) : t._e(), this.deletingWorkflow ? n("v-dialog", {
                    attrs: {"max-width": "50%"},
                    model: {
                        value: t.deleteDialog, callback: function (e) {
                            t.deleteDialog = e
                        }, expression: "deleteDialog"
                    }
                }, [n("v-card", [n("v-card-title", {staticClass: "headline"}, [t._v("\n          Delete workflow ??\n          "), n("v-chip", {attrs: {color: "primary"}}, [t._v(t._s(t.deletingWorkflow.identifier))]), t._v("?? ?\n        ")], 1), n("v-card-text", [t._v("Deleting the workflow will delete all transitions and approval meta data belongs to it.")]), n("v-card-actions", [n("div", {staticClass: "flex-grow-1"}), n("v-btn", {
                    attrs: {
                        large: "",
                        color: "primary"
                    }, on: {
                        click: function (e) {
                            t.deleteDialog = !1
                        }
                    }
                }, [t._v("Close")]), n("v-btn", {
                    attrs: {large: "", color: "warning"}, on: {
                        click: function (e) {
                            return t.deleteWorkflow()
                        }
                    }
                }, [t._v("Agree")])], 1)], 1)], 1) : t._e()], 1)], 1) : t._e()
            }, pt = [], _t = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-container", {attrs: {fluid: ""}}, [n("v-row", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("v-flex", {attrs: {xs12: "", sm6: "", md4: ""}}, [n("v-row", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("v-icon", {staticStyle: {"font-size": "150px"}}, [t._t("icon")], 2)], 1), t.label ? n("v-row", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("v-col", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("p", {staticClass: "subtitle-1"}, [t._v(t._s(t.label))])])], 1) : t._e(), t.description ? n("v-row", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("v-col", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("p", {staticClass: "subtitle-3"}, [t._v(t._s(t.description))])])], 1) : t._e(), n("v-row", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("v-col", {attrs: {justify: "center", align: "center"}}, [t._t("content")], 2)], 1)], 1)], 1)], 1)
            }, vt = [], ht = {name: "EmptyState", props: ["label", "description"]}, mt = ht,
            gt = Object(u["a"])(mt, _t, vt, !1, null, null, null), kt = gt.exports, wt = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.value.length <= t.max ? n("h5", [t._v(t._s(t.value))]) : n("v-tooltip", {
                    attrs: {top: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function (e) {
                            var i = e.on;
                            return [n("h5", t._g({}, i), [t._v(t._s(t.value.substring(0, t.max) + "..."))])]
                        }
                    }])
                }, [n("span", [t._v(t._s(t.value))])])
            }, bt = [], yt = {name: "H5Max", props: ["value", "max"]}, jt = yt,
            xt = Object(u["a"])(jt, wt, bt, !1, null, null, null), Ot = xt.exports, Ct = (n("6b54"), function () {
                function t(e, n, i, o) {
                    Object(O["a"])(this, t), this.id = e, this.content_type = n, this.initial_state = i, this.field_name = o, this.identifier = "".concat(this.content_type.app_label, ".").concat(this.content_type.model, ".").concat(this.field_name)
                }

                return Object(C["a"])(t, [{
                    key: "to_create_request", value: function () {
                        return {
                            content_type: this.content_type.id,
                            field_name: this.field_name,
                            initial_state: this.initial_state.id
                        }
                    }
                }], [{
                    key: "of", value: function (e, n, i, o) {
                        return new t(e, n, i, o)
                    }
                }, {
                    key: "create", value: function (e, n, i) {
                        var o = "_" + Math.random().toString(36).substr(2, 9);
                        return new t(o, e, n, i)
                    }
                }]), t
            }()), St = function () {
                function t(e, n, i) {
                    Object(O["a"])(this, t), this.id = e, this.name = n, this.body = i
                }

                return Object(C["a"])(t, null, [{
                    key: "of", value: function (e, n, i) {
                        return new t(e, n, i)
                    }
                }]), t
            }(), Dt = function () {
                function t(e, n, i) {
                    Object(O["a"])(this, t), this.id = e, this.label = n, this.is_new = i
                }

                return Object(C["a"])(t, [{
                    key: "of_description", value: function (t) {
                        return this.description = t, this
                    }
                }, {
                    key: "to_create_request", value: function () {
                        return {label: this.label}
                    }
                }], [{
                    key: "of", value: function (e, n) {
                        return new t(e, n, !1)
                    }
                }, {
                    key: "create", value: function (e) {
                        var n = "_" + Math.random().toString(36).substr(2, 9);
                        return new t(n, e, !0)
                    }
                }]), t
            }(), Pt = function () {
                function t(e, n, i, o, a) {
                    Object(O["a"])(this, t), this.id = e, this.workflow = n, this.source_state_id = i, this.destination_state_id = o, this.hooks = [], this.is_new = a
                }

                return Object(C["a"])(t, [{
                    key: "to_create_request", value: function () {
                        return {
                            workflow: this.workflow.id,
                            source_state: this.source_state_id,
                            destination_state: this.destination_state_id
                        }
                    }
                }], [{
                    key: "of", value: function (e, n, i, o) {
                        return new t(e, n, i, o, !1)
                    }
                }, {
                    key: "create", value: function (e, n, i) {
                        var o = n + "+" + i;
                        return new t(o, e, n, i, !0)
                    }
                }]), t
            }(), Et = function () {
                function t(e, n, i, o, a, r) {
                    Object(O["a"])(this, t), this.id = e, this.workflow = n, this.transition_id = i, this.permissions = o, this.groups = a || [], this.priority = r || [], this.hooks = []
                }

                return Object(C["a"])(t, [{
                    key: "to_create_request", value: function () {
                        return {
                            workflow: this.workflow.id,
                            transition_meta: this.transition_id,
                            source_state: this.source_state_id,
                            destination_state: this.destination_state_id,
                            permissions: this.permissions.map((function (t) {
                                return t.id
                            })),
                            groups: this.groups.map((function (t) {
                                return t.id
                            })),
                            priority: this.priority
                        }
                    }
                }], [{
                    key: "of", value: function (e, n, i, o, a, r) {
                        return new t(e, n, i, o, a, r)
                    }
                }, {
                    key: "create", value: function (e, n, i, o, a) {
                        var r = "_" + Math.random().toString(36).substr(2, 9);
                        return new t(r, n, e, i, o, a)
                    }
                }]), t
            }(), $t = function () {
                function t(e, n, i, o, a, r, s) {
                    Object(O["a"])(this, t), this.id = e, this.workflow = n, this.callback_function = i, this.workflow_object_id = r, this.transition_meta = o, this.transition = a, this.is_executed = s
                }

                return Object(C["a"])(t, [{
                    key: "is_from_upstream", value: function () {
                        return null == this.workflow_object_id
                    }
                }, {
                    key: "to_create_request", value: function () {
                        return {
                            workflow: this.workflow.id,
                            callback_function: this.callback_function.id,
                            transition_meta: this.transition_meta || null,
                            transition: this.transition || null,
                            object_id: parseInt(this.workflow_object_id) || null,
                            content_type: this.workflow_object_id ? this.workflow.content_type.id : null
                        }
                    }
                }], [{
                    key: "of", value: function (e, n, i, o, a, r, s) {
                        return new t(e, n, i, o, a, r, s)
                    }
                }, {
                    key: "create", value: function (e, n, i, o, a) {
                        var r = "_" + Math.random().toString(36).substr(2, 9);
                        return new t(r, e, n, i, o, a, !1)
                    }
                }]), t
            }(), Tt = function () {
                function t(e, n, i, o, a, r, s) {
                    Object(O["a"])(this, t), this.id = e, this.workflow = n, this.transition_approval_meta_id = o, this.callback_function = i, this.workflow_object_id = r, this.transition_approval_id = a, this.is_executed = s
                }

                return Object(C["a"])(t, [{
                    key: "is_from_upstream", value: function () {
                        return null == this.workflow_object_id
                    }
                }, {
                    key: "to_create_request", value: function () {
                        return {
                            workflow: this.workflow.id,
                            callback_function: this.callback_function.id,
                            transition_approval_meta: this.transition_approval_meta_id,
                            transition_approval: this.transition_approval_id || null,
                            object_id: parseInt(this.workflow_object_id) || null,
                            content_type: this.workflow_object_id ? this.workflow.content_type.id : null
                        }
                    }
                }], [{
                    key: "of", value: function (e, n, i, o, a, r, s) {
                        return new t(e, n, i, o, a, r, s)
                    }
                }, {
                    key: "create", value: function (e, n, i, o, a) {
                        var r = "_" + Math.random().toString(36).substr(2, 9);
                        return new t(r, e, n, i, o, a, !1)
                    }
                }]), t
            }(), Ht = function () {
                function t(e, n, i, o, a, r, s, l, c) {
                    Object(O["a"])(this, t), this.id = e, this.workflow = n, this.transition_meta = a, this.source_state_id = i, this.destination_state_id = o, this.object_id = r, this.iteration = s, this.approvals = [], this.hooks = [], this.is_cancelled = l, this.is_done = c
                }

                return Object(C["a"])(t, null, [{
                    key: "of", value: function (e, n, i, o, a, r, s, l, c) {
                        return new t(e, n, i, o, a, r, s, l, c)
                    }
                }]), t
            }(), At = function () {
                function t(e, n, i, o, a, r, s, l, c, u) {
                    Object(O["a"])(this, t), this.id = e, this.workflow = n, this.transition_meta = i, this.transition_approval_meta = o, this.object_id = a, this.permissions = r, this.groups = s, this.priority = l, this.hooks = [], this.status = c, this.transactioner = u, this.is_approved = "approved" == this.status
                }

                return Object(C["a"])(t, null, [{
                    key: "of", value: function (e, n, i, o, a, r, s, l, c, u) {
                        return new t(e, n, i, o, a, r, s, l, c, u)
                    }
                }]), t
            }(), Wt = {
                name: "ListWorkflowPage",
                components: {EmptyState: kt, H5Max: Ot},
                computed: {
                    deletingWorkflowDialogTitle: function () {
                        return "Delete workflow ".concat(this.deletingWorkflow.identifier, "?")
                    }
                },
                mounted: function () {
                    this.fetchWorkflows(), this.message = this.$route.query.message, this.$route.query.message && this.setAlertMessage(this.$route.query.message)
                },
                data: function () {
                    return {
                        initialized: !1,
                        messageAlert: !0,
                        message: null,
                        deletingWorkflow: null,
                        deleteDialog: !1,
                        has_add_workflow_permission: !1,
                        has_delete_workflow_permission: !1,
                        has_change_workflow_permission: !1,
                        items: []
                    }
                },
                methods: {
                    setAlertMessage: function (t) {
                        this.message = t, this.messageAlert = !0;
                        var e = this;
                        setTimeout((function () {
                            return e.messageAlert = !1
                        }), 3e3)
                    }, fetchWorkflows: function () {
                        var t = this, e = z.get("/workflow/list/", (function (e) {
                            t.items = e.data.map((function (t) {
                                var e = Ct.of(t.id, t.content_type, t.initial_state, t.field_name);
                                return e.admin_name = t.admin_name, e.admin_icon = t.admin_icon, e
                            }))
                        })), n = V.has_add_permission(I, (function (e) {
                            t.has_add_workflow_permission = e
                        })), i = V.has_change_permission(I, (function (e) {
                            t.has_change_workflow_permission = e
                        })), o = V.has_delete_permission(I, (function (e) {
                            t.has_delete_workflow_permission = e
                        }));
                        Promise.all([e, n, i, o]).then((function () {
                            return t.initialized = !0
                        }))
                    }, goToCreateWorkflowPage: function () {
                        this.$router.push({name: "create-workflow"})
                    }, goToViewWorkflowPage: function (t) {
                        this.$router.push({name: "view-workflow", params: {id: t}})
                    }, goToEditWorkflowPage: function (t) {
                        this.$router.push({name: "edit-workflow", params: {id: t}})
                    }, goToEditWorkflowRulePage: function (t) {
                        this.$router.push({name: "edit-workflow-rules", params: {id: t}})
                    }, showDeletingDialog: function (t) {
                        this.deletingWorkflow = t, this.deleteDialog = !0
                    }, deleteWorkflow: function () {
                        var t = this;
                        this.deletingWorkflow && z.delete("/workflow/delete/".concat(this.deletingWorkflow.id, "/"), (function () {
                            t.fetchWorkflows(), t.deleteDialog = !1, k("Workflow ".concat(t.deletingWorkflow.identifier, " is deleted."))
                        }))
                    }
                }
            }, zt = Wt, qt = (n("daf8"), Object(u["a"])(zt, ft, pt, !1, null, null, null)), Lt = qt.exports,
            Ft = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", [n("EmptyState", {
                    attrs: {
                        label: "BCM Software",
                        description: "Creating your initial state, you'll be able to start designing your workflow."
                    }, scopedSlots: t._u([{
                        key: "icon", fn: function () {
                            return [t._v("mdi-file-tree")]
                        }, proxy: !0
                    }, {
                        key: "content", fn: function () {
                            return [n("v-row", {
                                attrs: {
                                    justify: "center",
                                    align: "center"
                                }
                            }, [n("v-col", [n("WorkflowInput", {
                                model: {
                                    value: t.workflow, callback: function (e) {
                                        t.workflow = e
                                    }, expression: "workflow"
                                }
                            })], 1)], 1), n("v-row", {
                                attrs: {
                                    justify: "center",
                                    align: "center"
                                }
                            }, [n("v-col", [n("StateInput", {
                                attrs: {placeholder: "Search for initial state"},
                                model: {
                                    value: t.initial_state, callback: function (e) {
                                        t.initial_state = e
                                    }, expression: "initial_state"
                                }
                            })], 1)], 1), n("v-row", [n("v-btn", {
                                attrs: {
                                    block: "",
                                    color: "primary",
                                    disabled: !(t.workflow && t.initial_state)
                                }, on: {click: t.createWorkflow}
                            }, [t._v("Create")])], 1)]
                        }, proxy: !0
                    }])
                })], 1)
            }, Nt = [], It = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-autocomplete", {
                    attrs: {
                        items: t.items,
                        loading: t.loading,
                        "search-input": t.search,
                        "hide-selected": "",
                        "item-text": "identifier",
                        label: "Search for a workflow...",
                        clearable: "",
                        "return-object": ""
                    }, on: {
                        "update:searchInput": function (e) {
                            t.search = e
                        }, "update:search-input": function (e) {
                            t.search = e
                        }
                    }, scopedSlots: t._u([{
                        key: "no-data", fn: function () {
                            return [n("v-list-item", [n("v-list-item-title", [t._v("\n        Start typing to search for the\n        "), n("strong", [t._v("workflows")])])], 1)]
                        }, proxy: !0
                    }, {
                        key: "selection", fn: function (e) {
                            e.attr, e.on;
                            var n = e.item;
                            e.selected;
                            return [t._v(t._s(n.identifier))]
                        }
                    }, {
                        key: "item", fn: function (e) {
                            var i = e.item;
                            return [n("v-list-item-content", [n("v-list-item-title", {domProps: {textContent: t._s(i.identifier)}})], 1)]
                        }
                    }]), model: {
                        value: t.model, callback: function (e) {
                            t.model = e
                        }, expression: "model"
                    }
                })
            }, Rt = [], Mt = {
                name: "WorkflowInput", props: ["value"], data: function () {
                    return {loading: !1, items: [], search: null, model: null}
                }, watch: {
                    model: function (t) {
                        this.$emit("input", t)
                    }, search: function (t) {
                        var e = this;
                        this.items.length > 0 || (this.loading = !0, z.get("/workflow/state-field/list/", (function (t) {
                            e.items = t.data.map((function (t) {
                                return Ct.create(t.content_type, null, t.field_name)
                            }))
                        })).finally((function () {
                            return e.loading = !1
                        })))
                    }
                }
            }, Ut = Mt, Vt = Object(u["a"])(Ut, It, Rt, !1, null, null, null), Gt = Vt.exports, Jt = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.initialized ? n("v-autocomplete", {
                    attrs: {
                        items: t.items,
                        loading: t.loading,
                        "search-input": t.search,
                        "hide-selected": "",
                        "item-text": "final_label",
                        label: t.placeholder,
                        disabled: t.disabled,
                        clearable: "",
                        "return-object": ""
                    }, on: {
                        "update:searchInput": function (e) {
                            t.search = e
                        }, "update:search-input": function (e) {
                            t.search = e
                        }
                    }, scopedSlots: t._u([{
                        key: "no-data", fn: function () {
                            return [n("v-list-item", [n("v-list-item-title", [t._v("\n        Start typing to search for the\n        "), n("strong", [t._v("state")])])], 1)]
                        }, proxy: !0
                    }, {
                        key: "selection", fn: function (e) {
                            e.attr, e.on;
                            var n = e.item;
                            e.selected;
                            return [t._v(t._s(n.label) + " ( " + t._s(n.description) + " )")]
                        }
                    }, {
                        key: "item", fn: function (e) {
                            var i = e.item;
                            return [n("v-list-item-content", [i.description ? n("v-tooltip", {
                                attrs: {top: ""},
                                scopedSlots: t._u([{
                                    key: "activator", fn: function (e) {
                                        var o = e.on;
                                        return [n("v-list-item-title", t._g({domProps: {textContent: t._s(i.final_label)}}, o))]
                                    }
                                }], null, !0)
                            }, [n("span", [t._v(t._s(i.description))])]) : n("v-list-item-title", {domProps: {textContent: t._s(i.final_label)}})], 1)]
                        }
                    }], null, !1, 3778180486), model: {
                        value: t.model, callback: function (e) {
                            t.model = e
                        }, expression: "model"
                    }
                }) : t._e()
            }, Bt = [], Qt = (n("6762"), n("2fdb"), n("8615"), n("7514"), {
                name: "StateInput", props: ["value", "placeholder", "disabled"], data: function () {
                    return {
                        initialized: !1,
                        loading: !1,
                        items: [],
                        search: null,
                        model: null,
                        has_add_state_permission: !1
                    }
                }, mounted: function () {
                    var t = this;
                    V.has_add_permission(R, (function (e) {
                        t.has_add_state_permission = e
                    })).finally((function () {
                        return t.initialized = !0
                    }))
                }, watch: {
                    model: function (t) {
                        this.$emit("input", t)
                    }, value: function (t) {
                        null == t && (this.model = null)
                    }, search: function (t) {
                        var e = this;
                        !t || this.model && t === this.model.final_label || (this.loading = !0, this._getRemoteStates().then((function (n) {
                            var i = null;
                            e.has_add_state_permission && t && !n.find((function (e) {
                                return e.label == t
                            })) && (i = Dt.create(t));
                            var o = i ? [i].concat(n) : n, a = Object.values(o.reduce((function (t, e) {
                                return t[e.label] = e, t
                            }), {})).sort((function (t, e) {
                                return t.is_new || t.id < e.id ? -1 : 1
                            }));
                            e.items = a.filter((function (e) {
                                return e.label.includes(t)
                            })).map((function (t) {
                                return t.final_label = t.is_new ? "".concat(t.label, " (Create)") : "".concat(t.label), t
                            }))
                        })).finally((function () {
                            return e.loading = !1
                        })))
                    }
                }, methods: {
                    _getRemoteStates: function () {
                        return z.get("/state/list/", (function (t) {
                            return t.data.map((function (t) {
                                return Dt.of(t.id, t.label).of_description(t.description)
                            }))
                        }))
                    }
                }
            }), Yt = Qt, Kt = Object(u["a"])(Yt, Jt, Bt, !1, null, null, null), Xt = Kt.exports, Zt = {
                name: "CreateWorkflowPage",
                components: {WorkflowInput: Gt, StateInput: Xt, EmptyState: kt},
                data: function () {
                    return {workflow: null, initial_state: null}
                },
                methods: {
                    createWorkflow: function () {
                        var t = this;
                        if (this.workflow && this.initial_state) {
                            var e = Promise.resolve();
                            this.initial_state.is_new && (e = z.post("/state/create/", this.initial_state.to_create_request(), (function (e) {
                                t.initial_state.is_new = !1, t.initial_state.id = e.data.id, t.initial_state.final_label = t.initial_state.label
                            }))), e.then((function (e) {
                                t.workflow.initial_state = t.initial_state, z.post("/workflow/create/", t.workflow.to_create_request(), (function (e) {
                                    t.workflow.id = e.data.id, k("Workflow ".concat(t.workflow.identifier, " is created with initial state ").concat(t.initial_state.label)), t.$router.push({
                                        name: "edit-workflow",
                                        params: {id: t.workflow.id}
                                    })
                                }))
                            }))
                        }
                    }
                }
            }, te = Zt, ee = Object(u["a"])(te, Ft, Nt, !1, null, null, null), ne = ee.exports, ie = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", [t.initialized ? n("v-container", {attrs: {fluid: ""}}, [n("v-row", [n("v-col"), n("v-col", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("h1", [t._v("\n          Workflow for\n          "), n("v-chip", [t._v(t._s(t.workflow.identifier))])], 1)]), n("v-col", {
                    attrs: {
                        justify: "center",
                        align: "end"
                    }
                }, [n("v-btn", {
                    staticClass: "mr-5",
                    attrs: {disabled: 0 == t.transitions.length, color: "primary"},
                    on: {click: t.goToEditWorkflowRules}
                }, [t._v("Edit Workflow Rules")])], 1)], 1), n("v-row", [n("v-col", {attrs: {cols: "12"}}, [n("WorkflowIllustration", {
                    attrs: {
                        states: t.states,
                        transitions: t.transitions,
                        state_class_mapping: t.state_class_mapping,
                        editable: !0
                    }, on: {"on-transition-selected": t.onTransitionSelected, "on-state-clicked": t.onStateSelected}
                })], 1)], 1), n("v-row", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("v-col", {attrs: {cols: "6"}}, [n("StateInput", {
                    attrs: {
                        disabled: !t.selected_state,
                        placeholder: t.selected_state ? "New state from '" + t.selected_state.label + "':" : "Select a state to creat a transition"
                    }, model: {
                        value: t.new_transition_state, callback: function (e) {
                            t.new_transition_state = e
                        }, expression: "new_transition_state"
                    }
                })], 1), n("v-col", {attrs: {cols: "1"}}, [n("v-btn", {
                    attrs: {
                        disabled: !t.selected_state || !t.new_transition_state,
                        large: "",
                        color: "primary"
                    }, on: {click: t.createState}
                }, [t._v("Create")])], 1)], 1)], 1) : t._e()], 1)
            }, oe = [], ae = (n("8e6e"), n("456d"), n("bd86")), re = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-card", {
                    directives: [{
                        name: "resize",
                        rawName: "v-resize",
                        value: t.onResize,
                        expression: "onResize"
                    }], staticClass: "mx-auto pa-5", attrs: {elevation: 6}
                }, [n("v-card-text", [n("v-container", {attrs: {fluid: ""}}, [n("v-row", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("v-col", {
                    attrs: {
                        id: "svg-container",
                        justify: "center",
                        align: "center"
                    }
                }, [n("svg", {staticClass: "shadow", attrs: {width: "650", height: "270"}})])], 1)], 1)], 1)], 1)
            }, se = [], le = (n("c5f6"), n("5698")), ce = n("6a04"), ue = n("1226"), de = n.n(ue);
        le["tip"] = ce["a"];
        var fe = {
            name: "WorkflowIllustration",
            props: ["states", "transitions", "editable", "state_class_mapping"],
            computed: {},
            data: function () {
                return {svg: null, initialized: !1, selected_transition_id: null, windowSize: {x: 0, y: 0}}
            },
            mounted: function () {
                this._initialize()
            },
            watch: {
                state_class_mapping: {
                    deep: !0, handler: function (t) {
                        this._setClasses()
                    }
                }, states: function (t) {
                    this._renderSketch()
                }, transitions: function (t) {
                    this._renderSketch()
                }
            },
            methods: {
                onResize: function () {
                    if (this.svg && Math.abs(this.windowSize.x - window.innerWidth) > 50) {
                        this.windowSize = {x: window.innerWidth, y: window.innerHeight};
                        var t = le["select"]("#svg-container").node().getBoundingClientRect().width;
                        le["select"]("svg").attr("width", t - 24), this._reCenterSketch()
                    }
                }, _getChilds: function (t) {
                    var e = this;
                    return this.transitions.filter((function (e) {
                        return e.source_state_id == t
                    })).map((function (t) {
                        return e._get_state_by_id(t.destination_state_id)
                    }))
                }, _initialize: function () {
                    if (this.states && this.states.length > 0 || this.transitions && this.transitions.length > 0) {
                        var t = le["select"](this.$el);
                        this.svg = t.select("svg"), this.svgGroup = this.svg.append("g"), this.graph = (new de.a.graphlib.Graph).setGraph({}).setDefaultEdgeLabel((function () {
                            return {}
                        })), this._renderSketch(), this.initialized = !0
                    }
                }, _createNode: function (t, e) {
                    this.graph.setNode(t.id, {label: t.label, class: "node-default", id: "state_".concat(t.id)})
                }, _createEdge: function (t) {
                    this.graph.setEdge(t.source_state_id, t.destination_state_id, {
                        id: "transition_".concat(t.id),
                        label: "<<---",
                        curve: le["curveBasis"]
                    })
                }, _destroySketchComponents: function () {
                    var t = this.graph;
                    this.graph.nodes().forEach((function (e) {
                        t.removeNode(e)
                    })), this.graph.edges().forEach((function (e) {
                        t.removeEdge(e)
                    })), le["selectAll"](".clickable-edge").remove()
                }, _renderSketch: function () {
                    if (this.states.length > 0 || this.transitions.length > 0) {
                        this._destroySketchComponents();
                        var t = this;
                        this.states.forEach((function (e, n) {
                            t._createNode(e, n)
                        })), this.transitions.forEach((function (e) {
                            t._createEdge(e)
                        })), this._roundNodeCorners();
                        var e = new de.a.render, n = le["select"](this.$el), i = n.select("svg g");
                        e(i, this.graph), this._reCenterSketch(), this.editable && this._setNodeOnclicks(), this._setEdgeLabelDefaultClass(), this._setEdgeOnclicks(), this._setClasses(), this._setup_tooltips(i)
                    }
                }, _setNodeOnclicks: function () {
                    var t = this;
                    this.states.forEach((function (e) {
                        le["select"]("g#state_".concat(e.id, " rect")).on("click", (function () {
                            t.$emit("on-state-clicked", t._get_state_by_id(e.id))
                        }))
                    }))
                }, _setEdgeLabelDefaultClass: function () {
                    le["selectAll"]("g.edgeLabels > g.edgeLabel").classed("edge-label-UNSELECTED ", !0)
                }, _setEdgeOnclicks: function () {
                    var t = this;
                    le["select"]("g.edgePaths").selectAll("g.edgePath").nodes();
                    this.transitions.forEach((function (e, n) {
                        var i = le["select"]("g#transition_".concat(e.id));
                        i.attr("index", n), i.append("path").attr("d", i.select("path").attr("d")).classed("clickable-edge", !0).on("click", (function () {
                            e && (t._unselectEdge(), t.selected_transition_id = e.id, t._selectEdge())
                        }))
                    }))
                }, _setClasses: function () {
                    var t = this;
                    this.states.forEach((function (e) {
                        t.state_class_mapping && t.state_class_mapping[e.id] && (t.state_class_mapping[e.id].rect && Object.keys(t.state_class_mapping[e.id].rect).forEach((function (n) {
                            return le["select"]("g#state_".concat(e.id, " rect")).style(n, t.state_class_mapping[e.id].rect[n])
                        })), t.state_class_mapping[e.id].label && Object.keys(t.state_class_mapping[e.id].label).forEach((function (n) {
                            return le["select"]("g#state_".concat(e.id, " g.label")).style(n, t.state_class_mapping[e.id].label[n])
                        })))
                    }))
                }, _setup_tooltips: function (t) {
                    var e = this, n = le["tip"]().attr("class", "d3-tip").offset([-10, 0]).html((function (t) {
                        var n = e.states.find((function (e) {
                            return e.id == t
                        }));
                        if (n) {
                            var i = '<div class="label-tooltip"><strong>'.concat(n.label, "</strong></div>"), o = "";
                            o = n.description ? '<div class="description-tooltip">'.concat(n.description, "</div>") : '<div class="no-description-tooltip">No description found</div>'
                        }
                        return "<div>".concat(i).concat(o, "</div>")
                    }));
                    this.svg.call(n), t.selectAll("g.node").on("mouseover", n.show).on("mouseout", n.hide)
                }, _getTransitionBy: function (t, e) {
                    return this.transitions.find((function (n) {
                        return n.source_state_id == t.id && n.destination_state_id == e.id
                    }))
                }, _selectEdge: function () {
                    if (this.selected_transition_id) {
                        var t = le["select"]("g#transition_".concat(this.selected_transition_id));
                        t.classed("edge-SELECTED", !0).classed("edge-UNSELECTED", !1);
                        var e = new Number(t.attr("index")),
                            n = le["selectAll"]("g.edgeLabels > g.edgeLabel").nodes()[e];
                        le["select"](n).classed("edge-label-SELECTED", !0).classed("edge-label-UNSELECTED", !1), this.$emit("on-transition-selected", this.selected_transition_id)
                    }
                }, _unselectEdge: function () {
                    if (this.selected_transition_id) {
                        var t = le["select"]("g#transition_".concat(this.selected_transition_id));
                        t.classed("edge-SELECTED", !1).classed("edge-UNSELECTED", !0);
                        var e = new Number(t.attr("index")),
                            n = le["selectAll"]("g.edgeLabels > g.edgeLabel").nodes()[e];
                        le["select"](n).classed("edge-label-SELECTED", !1).classed("edge-label-UNSELECTED", !0), this.$emit("on-transition-unselected", this.selected_transition_id)
                    }
                }, _reCenterSketch: function () {
                    var t = (this.svg.attr("width") - this.graph.graph().width) / 2;
                    this.svgGroup.attr("transform", "translate(" + t + ", 20)"), this.svg.attr("height", this.graph.graph().height + 40)
                }, _roundNodeCorners: function () {
                    var t = this.graph;
                    this.graph.nodes().forEach((function (e) {
                        var n = t.node(e);
                        n.rx = n.ry = 5
                    }))
                }, _get_state_by_id: function (t) {
                    return this.states.find((function (e) {
                        return e.id == t
                    }))
                }, _get_transition_by_id: function (t) {
                    return this.transitions.find((function (e) {
                        return e.id == t
                    }))
                }
            }
        }, pe = fe, _e = (n("6d29"), Object(u["a"])(pe, re, se, !1, null, null, null)), ve = _e.exports;

        function he(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function me(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? he(Object(n), !0).forEach((function (e) {
                    Object(ae["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var ge = {
            name: "CreateWorkflowPage", components: {WorkflowIllustration: ve, StateInput: Xt}, data: function () {
                return {
                    workflow: null,
                    initialized: !1,
                    selected_transition: null,
                    states: [],
                    transitions: [],
                    transition_approvals: {},
                    selected_state: null,
                    new_transition_state: null,
                    state_class_mapping: {},
                    selected_state_class: {rect: {fill: "deepskyblue"}, label: {stroke: "white"}},
                    default_state_class: {rect: {fill: "#dddd"}, label: {stroke: "black"}}
                }
            }, mounted: function () {
                var t = this, e = this.$route.params.id;
                this.workflow = z.get("/workflow/get/".concat(e, "/"), (function (n) {
                    t.workflow = Ct.of(n.data.id, n.data.content_type, n.data.initial_state, n.data.field_name);
                    var i = z.get("/workflow/state/list/".concat(e, "/"), (function (e) {
                        t.states = e.data.map((function (t) {
                            return Dt.of(t.id, t.label).of_description(t.description)
                        }))
                    })), o = z.get("/workflow/transition-meta/list/".concat(e, "/"), (function (e) {
                        t.transitions = e.data.map((function (e) {
                            return Pt.of(e.id, t.workflow, e.source_state, e.destination_state)
                        }))
                    }));
                    Promise.all([i, o]).then((function () {
                        t.initialized = !0;
                        var e = JSON.parse(t.$route.query.selected_state || null);
                        e && t._selected_state(e)
                    }))
                }))
            }, methods: {
                onStateSelected: function (t) {
                    this._selected_state(t)
                }, _selected_state: function (t) {
                    this.selected_state && this.$set(this.state_class_mapping, this.selected_state.id, this.default_state_class), this.$set(this.state_class_mapping, t.id, this.selected_state_class), this.selected_state = t, this.updateQuery({selected_state: JSON.stringify(this.selected_state)})
                }, createState: function () {
                    var t = this;
                    if (this.new_transition_state) {
                        var e = Promise.resolve(), n = !1;
                        this.new_transition_state.is_new && (e = z.post("/state/create/", this.new_transition_state.to_create_request(), (function (e) {
                            n = !0, t.new_transition_state.is_new = !1, t.new_transition_state.id = e.data.id, t.new_transition_state.final_label = t.new_transition_state.label
                        }))), e.then((function (e) {
                            var i = t.states.find((function (e) {
                                return e.id == t.selected_state.id
                            })), o = Pt.create(t.workflow, i.id, t.new_transition_state.id);
                            z.post("/transition-meta/create/", o.to_create_request(), (function (e) {
                                t.states.find((function (e) {
                                    return e.id == t.new_transition_state.id
                                })) || t.states.push(t.new_transition_state);
                                var i = t.states.find((function (t) {
                                    return t.id == o.source_state_id
                                })), a = t.states.find((function (t) {
                                    return t.id == o.destination_state_id
                                }));
                                k("Transition meta ".concat(i.label, " -> ").concat(a.label).concat(n ? " ( New )" : "", " is created"), 2e3), o.is_new = !1, o.id = e.data.id, t.transitions.push(o), t._selected_state(t.new_transition_state), t.new_transition_state = null
                            }))
                        }))
                    }
                }, updateQuery: function (t) {
                    var e = me({}, this.$route.query, {}, t), n = this;
                    Object.keys(e).some((function (t) {
                        return n.$route.query[t] != e[t]
                    })) && this.$router.push({query: e})
                }, onTransitionSelected: function (t) {
                    this.selected_transition = this.transitions.find((function (e) {
                        return e.id == t
                    }))
                }, goToEditWorkflowRules: function () {
                    this.$router.push({name: "edit-workflow-rules", params: {id: this.workflow.id}})
                }
            }
        }, ke = ge, we = Object(u["a"])(ke, ie, oe, !1, null, null, null), be = we.exports, ye = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [t.initialized ? n("v-container", {attrs: {fluid: ""}}, [n("v-row", [n("v-col", {
                attrs: {
                    justify: "center",
                    align: "center"
                }
            }, [n("h1", [t._v("\n          Workflow for\n          "), n("v-chip", [t._v(t._s(t.workflow.identifier))])], 1)])], 1), n("v-row", [n("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    md6: ""
                }
            }, [n("v-container", [n("WorkflowIllustration", {
                attrs: {
                    states: t.states,
                    transitions: t.transitions,
                    editable: !0
                }, on: {"on-transition-selected": t.on_transition_selected}
            })], 1)], 1), n("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    md6: ""
                }
            }, [t.selected_transition ? n("v-container", [n("v-row", [n("v-col", [n("v-card", {
                staticClass: "pa-5",
                attrs: {elevation: 6}
            }, [n("v-card-title", [n("v-row", [n("v-col", {attrs: {cols: "9"}}, [t._v("\n                      Transition steps from\n                      "), n("v-chip", {
                staticClass: "white--text",
                attrs: {color: "primary"}
            }, [n("span", {domProps: {textContent: t._s(t.get_state_by(t.selected_transition.source_state_id).label)}})]), t._v("to\n                      "), n("v-chip", {
                staticClass: "white--text",
                attrs: {color: "primary"}
            }, [n("span", {domProps: {textContent: t._s(t.get_state_by(t.selected_transition.destination_state_id).label)}})])], 1), n("div", {staticClass: "flex-grow-1"}), t.readonly ? t._e() : n("v-col", [n("v-speed-dial", {
                attrs: {
                    bottom: !0,
                    right: !0,
                    direction: "left",
                    "open-on-hover": !0
                }, scopedSlots: t._u([{
                    key: "activator", fn: function () {
                        return [n("v-btn", {
                            attrs: {color: "primary", dark: "", fab: ""},
                            model: {
                                value: t.fab, callback: function (e) {
                                    t.fab = e
                                }, expression: "fab"
                            }
                        }, [t.fab ? n("v-icon", [t._v("mdi-close")]) : n("v-icon", [t._v("mdi-plus")])], 1)]
                    }, proxy: !0
                }], null, !1, 3988453149), model: {
                    value: t.fab, callback: function (e) {
                        t.fab = e
                    }, expression: "fab"
                }
            }, [n("v-tooltip", {
                attrs: {top: ""}, scopedSlots: t._u([{
                    key: "activator", fn: function (e) {
                        var i = e.on;
                        return [n("v-btn", t._g({
                            attrs: {fab: "", dark: "", small: "", color: "green"},
                            on: {
                                click: function (e) {
                                    t.newTransitionHookDialog = !0
                                }
                            }
                        }, i), [n("v-icon", [t._v("mdi-function-variant")])], 1)]
                    }
                }], null, !1, 585803449)
            }, [n("span", [t._v("Create Transition Hook")])]), n("v-tooltip", {
                attrs: {top: ""},
                scopedSlots: t._u([{
                    key: "activator", fn: function (e) {
                        var i = e.on;
                        return [n("v-btn", t._g({
                            attrs: {fab: "", dark: "", small: "", color: "green"},
                            on: {
                                click: function (e) {
                                    t.newApprovalDialog = !0
                                }
                            }
                        }, i), [n("v-icon", [t._v("mdi-account-multiple-check")])], 1)]
                    }
                }], null, !1, 476429629)
            }, [n("span", [t._v("Create Approval Step")])])], 1)], 1)], 1)], 1), n("v-card-text", [n("ApprovalList", {
                attrs: {
                    workflow: t.workflow,
                    approvals: t.selected_transition.approvals,
                    editable: !t.readonly
                },
                on: {
                    "on-delete": t.on_approval_deleted,
                    "on-order-change": t.on_approvals_order_change,
                    "on-hook-create": t.on_approval_hook_created,
                    "on-hook-delete": t.on_approval_hook_deleted
                }
            }), t.selected_transition.hooks.length > 0 ? n("div", [n("v-divider"), n("span", {staticClass: "title font-weight-light"}, [t._v("Right before the transition happens")]), t._l(t.selected_transition.hooks, (function (e, i) {
                return n("div", {key: e.id}, [n("HookDetail", {
                    attrs: {hook: e, editable: !t.readonly},
                    on: {"on-delete": t.on_transition_hook_deleted}
                })], 1)
            }))], 2) : t._e()], 1)], 1)], 1)], 1)], 1) : t.readonly ? t._e() : n("v-container", [n("EmptyState", {
                attrs: {
                    label: "Select a transition",
                    description: "Selecting a transition by clicking the arrow, you'll be able to create the rules."
                }, scopedSlots: t._u([{
                    key: "icon", fn: function () {
                        return [t._v("mdi-near-me")]
                    }, proxy: !0
                }], null, !1, 665517018)
            })], 1)], 1)], 1)], 1) : t._e(), !t.readonly && t.selected_transition ? n("v-dialog", {
                attrs: {"max-width": "800"},
                model: {
                    value: t.newApprovalDialog, callback: function (e) {
                        t.newApprovalDialog = e
                    }, expression: "newApprovalDialog"
                }
            }, [n("CreateApprovalForm", {
                attrs: {workflow: t.workflow, transition_id: t.selected_transition.id},
                on: {"on-create": t.on_approval_created}
            })], 1) : t._e(), !t.readonly && t.selected_transition ? n("v-dialog", {
                attrs: {"max-width": "800"},
                model: {
                    value: t.newTransitionHookDialog, callback: function (e) {
                        t.newTransitionHookDialog = e
                    }, expression: "newTransitionHookDialog"
                }
            }, [n("CreateTransitionHookForm", {
                attrs: {
                    workflow: t.workflow,
                    transition_meta: t.selected_transition.id,
                    excluded_function_ids: t.selected_transition.hooks.map((function (t) {
                        return t.callback_function.id
                    }))
                }, on: {"on-create": t.on_transition_hook_created}
            })], 1) : t._e()], 1)
        }, je = [], xe = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("v-card", {
                staticClass: "pa-5",
                attrs: {elevation: 6}
            }, [n("v-card-title", [t._v("New Approval Rule")]), n("v-card-text", [n("v-container", {attrs: {fluid: ""}}, [n("v-row", [n("v-col", [n("v-autocomplete", {
                attrs: {
                    items: t.permissions,
                    loading: t.permissions_loading,
                    "search-input": t.search_permissions,
                    "hide-selected": "",
                    "item-text": "identifier",
                    label: "Search permissions",
                    clearable: "",
                    chips: "",
                    multiple: "",
                    "return-object": ""
                }, on: {
                    "update:searchInput": function (e) {
                        t.search_permissions = e
                    }, "update:search-input": function (e) {
                        t.search_permissions = e
                    }
                }, scopedSlots: t._u([{
                    key: "no-data", fn: function () {
                        return [n("v-list-item", [n("v-list-item-title", [t._v("\n                  Start typing to search for the\n                  "), n("strong", [t._v("permissions")])])], 1)]
                    }, proxy: !0
                }, {
                    key: "selection", fn: function (e) {
                        var i = e.attr, o = e.on, a = e.item, r = e.selected;
                        return [n("v-chip", t._g(t._b({
                            staticClass: "white--text",
                            attrs: {"input-value": r, color: "primary"}
                        }, "v-chip", i, !1), o), [n("v-icon", {attrs: {left: ""}}, [t._v("mdi-lock")]), n("span", {domProps: {textContent: t._s(a.identifier)}})], 1)]
                    }
                }, {
                    key: "item", fn: function (e) {
                        var i = e.item;
                        return [n("v-list-item-content", [n("v-list-item-title", {domProps: {textContent: t._s(i.identifier)}})], 1)]
                    }
                }]), model: {
                    value: t.selected_permissions, callback: function (e) {
                        t.selected_permissions = e
                    }, expression: "selected_permissions"
                }
            })], 1)], 1), n("v-row", [n("v-col", [n("v-autocomplete", {
                attrs: {
                    items: t.groups,
                    loading: t.groups_loading,
                    "search-input": t.search_groups,
                    "hide-selected": "",
                    "item-text": "name",
                    label: "Search groups",
                    clearable: "",
                    chips: "",
                    multiple: "",
                    "return-object": ""
                }, on: {
                    "update:searchInput": function (e) {
                        t.search_groups = e
                    }, "update:search-input": function (e) {
                        t.search_groups = e
                    }
                }, scopedSlots: t._u([{
                    key: "no-data", fn: function () {
                        return [n("v-list-item", [n("v-list-item-title", [t._v("\n                  Start typing to search for the\n                  "), n("strong", [t._v("groups")])])], 1)]
                    }, proxy: !0
                }, {
                    key: "selection", fn: function (e) {
                        var i = e.attr, o = e.on, a = e.item, r = e.selected;
                        return [n("v-chip", t._g(t._b({
                            staticClass: "white--text",
                            attrs: {"input-value": r, color: "primary"}
                        }, "v-chip", i, !1), o), [n("v-icon", {attrs: {left: ""}}, [t._v("mdi-account-multiple")]), n("span", {domProps: {textContent: t._s(a.name)}})], 1)]
                    }
                }, {
                    key: "item", fn: function (e) {
                        var i = e.item;
                        return [n("v-list-item-content", [n("v-list-item-title", {domProps: {textContent: t._s(i.name)}})], 1)]
                    }
                }]), model: {
                    value: t.selected_groups, callback: function (e) {
                        t.selected_groups = e
                    }, expression: "selected_groups"
                }
            })], 1)], 1)], 1)], 1), n("v-card-actions", [n("v-row", [n("v-col", {
                attrs: {
                    justify: "center",
                    align: "right"
                }
            }, [n("v-btn", {
                attrs: {large: "", color: "primary"},
                on: {click: t.createApproval}
            }, [t._v("Create Approval")])], 1)], 1)], 1)], 1)
        }, Oe = [];

        function Ce(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Se(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ce(Object(n), !0).forEach((function (e) {
                    Object(ae["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var De = {
                name: "CreateApprovalForm", props: ["workflow", "transition_id"], data: function () {
                    return {
                        permissions_loading: !1,
                        groups_loading: !1,
                        selected_permissions: [],
                        selected_groups: [],
                        groups: [],
                        permissions: [],
                        search_permissions: null,
                        search_groups: null
                    }
                }, mounted: function () {
                }, watch: {
                    selected_permissions: function (t) {
                        this.search_permissions = null
                    }, search_permissions: function (t) {
                        var e = this;
                        !t || this.selected_permissions && this.selected_permissions.map((function (t) {
                            return t.identifier
                        })).includes(t) || (this.permissions_loading = !0, z.get("/permission/list/", (function (t) {
                            e.permissions = t.data.map((function (t) {
                                return Se({identifier: t.codename + "." + t.content_type.app_label + "." + t.content_type.model}, t)
                            }))
                        })).finally((function () {
                            return e.permissions_loading = !1
                        })))
                    }, selected_groups: function (t) {
                        this.search_groups = null
                    }, search_groups: function (t) {
                        var e = this;
                        !t || this.selected_groups && this.selected_groups.map((function (t) {
                            return t.name
                        })).includes(t) || (this.groups_loading = !0, z.get("/group/list/", (function (t) {
                            return e.groups = t.data
                        })).finally((function () {
                            return e.groups_loading = !1
                        })))
                    }
                }, methods: {
                    createApproval: function () {
                        this.$emit("on-create", Et.create(this.transition_id, this.workflow, this.selected_permissions, this.selected_groups, this.given_priority)), this.selected_permissions = [], this.selected_groups = [], this.given_priority = 0
                    }
                }
            }, Pe = De, Ee = Object(u["a"])(Pe, xe, Oe, !1, null, null, null), $e = Ee.exports, Te = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-card", {
                    staticClass: "pa-5",
                    attrs: {elevation: 6}
                }, [n("v-card-title", [t._v("New Hook")]), n("v-card-text", [n("v-container", {attrs: {fluid: ""}}, [n("v-row", [n("v-col", [n("v-autocomplete", {
                    attrs: {
                        items: t.functions,
                        loading: t.functions_loading,
                        "search-input": t.search_functions,
                        "hide-selected": "",
                        "item-text": "name",
                        label: "Search functions",
                        clearable: "",
                        chips: "",
                        "return-object": ""
                    }, on: {
                        "update:searchInput": function (e) {
                            t.search_functions = e
                        }, "update:search-input": function (e) {
                            t.search_functions = e
                        }
                    }, scopedSlots: t._u([{
                        key: "no-data", fn: function () {
                            return [n("v-list-item", [n("v-list-item-title", [t._v("\n                  Start typing to search for the\n                  "), n("strong", [t._v("callback functions")])])], 1)]
                        }, proxy: !0
                    }, {
                        key: "selection", fn: function (e) {
                            var i = e.attr, o = e.on, a = e.item, r = e.selected;
                            return [n("v-chip", t._g(t._b({
                                staticClass: "white--text",
                                attrs: {"input-value": r, color: "primary"}
                            }, "v-chip", i, !1), o), [n("v-icon", {attrs: {left: ""}}, [t._v("mdi-function-variant")]), n("span", {domProps: {textContent: t._s(a.name)}})], 1)]
                        }
                    }, {
                        key: "item", fn: function (e) {
                            var i = e.item;
                            return [n("v-list-item-content", [n("v-list-item-title", {domProps: {textContent: t._s(i.name)}})], 1)]
                        }
                    }]), model: {
                        value: t.selected_function, callback: function (e) {
                            t.selected_function = e
                        }, expression: "selected_function"
                    }
                })], 1)], 1)], 1)], 1), n("v-card-actions", [n("v-row", [n("v-col", {
                    attrs: {
                        justify: "center",
                        align: "right"
                    }
                }, [n("v-btn", {
                    attrs: {large: "", color: "primary"},
                    on: {click: t.createHook}
                }, [t._v("Create Hook")])], 1)], 1)], 1)], 1)
            }, He = [], Ae = {
                name: "CreateTransitionHookForm",
                props: ["workflow", "transition_meta", "transition", "object_id", "excluded_function_ids"],
                data: function () {
                    return {functions_loading: !1, selected_function: null, functions: [], search_functions: null}
                },
                mounted: function () {
                },
                watch: {
                    selected_function: function (t) {
                        this.search_functions = null
                    }, search_functions: function (t) {
                        var e = this;
                        !t || this.selected_function && this.selected_function.name.includes(t) || (this.functions_loading = !0, z.get("/function/list/", (function (t) {
                            return e.functions = t.data.map((function (t) {
                                return St.of(t.id, t.name, t.body)
                            })).filter((function (t) {
                                return !e.excluded_function_ids.includes(t.id)
                            }))
                        })).finally((function () {
                            return e.functions_loading = !1
                        })))
                    }
                },
                methods: {
                    createHook: function () {
                        var t = $t.create(this.workflow, this.selected_function, this.transition_meta, this.transition, this.object_id);
                        this.$emit("on-create", t), this.selected_function = null
                    }
                }
            }, We = Ae, ze = Object(u["a"])(We, Te, He, !1, null, null, null), qe = ze.exports, Le = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-card", [n("v-card-title", {class: t.hook.is_executed ? "executed" : t.editable ? "" : "not-editable"}, [n("v-icon", {staticClass: "mb-1 mr-3"}, [t._v("mdi-function-variant")]), t.hook.is_executed ? n("span", {staticClass: "title font-weight-light"}, [t._v("\n      Executed function\n      "), n("v-chip", {staticClass: "black--text"}, [t._v(t._s(t.hook.callback_function.name))])], 1) : n("span", {staticClass: "title font-weight-light"}, [t._v("\n      Execute function\n      "), n("v-chip", {
                    staticClass: "white--text",
                    attrs: {color: "primary"}
                }, [t._v(t._s(t.hook.callback_function.name))])], 1), n("div", {staticClass: "flex-grow-1"}), t.editable && !t.hook.is_executed ? n("v-btn", {
                    attrs: {
                        text: "",
                        icon: "",
                        color: "warning"
                    }, on: {
                        click: function (e) {
                            return t.deleteStep()
                        }
                    }
                }, [n("v-icon", [t._v("mdi-delete")])], 1) : t._e()], 1)], 1)
            }, Fe = [], Ne = {
                name: "HookDetail", props: ["hook", "editable"], methods: {
                    deleteStep: function () {
                        this.$emit("on-delete", this.hook)
                    }
                }
            }, Ie = Ne, Re = (n("d21c"), Object(u["a"])(Ie, Le, Fe, !1, null, null, null)), Me = Re.exports,
            Ue = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-container", {
                    staticClass: "py-4",
                    attrs: {fluid: ""}
                }, [0 == t.items.length ? n("v-row", [n("v-col", [t._v("No approval step")])], 1) : n("v-row", [n("v-col", [n("Container", {
                    attrs: {
                        "group-name": "column",
                        "drag-handle-selector": ".column-drag-handle",
                        "drag-class": "opacity-ghost",
                        "drop-class": "opacity-ghost-drop"
                    }, on: {
                        drop: function (e) {
                            return t.on_drop(e)
                        }
                    }
                }, t._l(t.items, (function (e) {
                    return n("Draggable", {key: e.priority}, [n("div", {staticClass: "draggable-item"}, [n("ApprovalDetail", {
                        attrs: {
                            workflow: t.workflow,
                            editable: t.editable,
                            approval: e
                        }, on: {
                            "on-delete": t.delete_approval, "on-hook-create": function (e) {
                                return t.on_hook_created(e)
                            }, "on-hook-delete": function (e) {
                                return t.on_hook_deleted(e)
                            }
                        }
                    })], 1)])
                })), 1)], 1)], 1)], 1)
            }, Ve = [], Ge = n("75fc"), Je = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-container", [n("v-card", [n("v-card-title", [t.editable ? n("v-icon", {staticClass: "column-drag-handle mb-1 mr-3"}, [t._v("mdi-menu")]) : t._e(), n("v-icon", {staticClass: "mb-1 mr-3"}, [t._v("mdi-account-multiple-check")]), n("span", {staticClass: "title font-weight-light"}, [t._v("Should be approved by the users who")]), n("div", {staticClass: "flex-grow-1"}), t.editable ? n("v-speed-dial", {
                    staticClass: "mt-5",
                    attrs: {bottom: !0, right: !0, direction: "left", "open-on-hover": !0},
                    scopedSlots: t._u([{
                        key: "activator", fn: function () {
                            return [n("v-btn", {
                                attrs: {small: "", color: "primary", dark: "", fab: ""},
                                model: {
                                    value: t.fab, callback: function (e) {
                                        t.fab = e
                                    }, expression: "fab"
                                }
                            }, [t.fab ? n("v-icon", [t._v("mdi-close")]) : n("v-icon", [t._v("mdi-settings")])], 1)]
                        }, proxy: !0
                    }], null, !1, 4126577419),
                    model: {
                        value: t.fab, callback: function (e) {
                            t.fab = e
                        }, expression: "fab"
                    }
                }, [n("v-tooltip", {
                    attrs: {top: ""}, scopedSlots: t._u([{
                        key: "activator", fn: function (e) {
                            var i = e.on;
                            return [n("v-btn", t._g({
                                attrs: {fab: "", dark: "", small: "", color: "green"},
                                on: {
                                    click: function (e) {
                                        t.newHookDialog = !0
                                    }
                                }
                            }, i), [n("v-icon", [t._v("mdi-function-variant")])], 1)]
                        }
                    }], null, !1, 3244165398)
                }, [n("span", [t._v("Create Approval Hook")])]), n("v-tooltip", {
                    attrs: {top: ""},
                    scopedSlots: t._u([{
                        key: "activator", fn: function (e) {
                            var i = e.on;
                            return [n("v-btn", t._g({
                                attrs: {fab: "", dark: "", small: "", color: "warning"},
                                on: {
                                    click: function (e) {
                                        return t.delete_approval()
                                    }
                                }
                            }, i), [n("v-icon", [t._v("mdi-delete")])], 1)]
                        }
                    }], null, !1, 2737557744)
                }, [n("span", [t._v("Delete Approval Step")])])], 1) : t._e()], 1), n("v-card-text", [n("v-row", [n("v-col", [t.approval.permissions.length > 0 ? n("v-row", {staticClass: "permissions-lane"}, [n("v-col", {attrs: {cols: "4"}}, [n("label", [t._v("have permissions:")])]), n("v-col", t._l(t.approval.permissions, (function (e, i) {
                    return n("span", {key: e.id}, [n("v-chip", {
                        staticClass: "white--text",
                        attrs: {color: "primary"}
                    }, [n("v-icon", {attrs: {left: ""}}, [t._v("mdi-lock")]), n("span", {domProps: {textContent: t._s(e.identifier)}})], 1), i != t.approval.permissions.length - 1 ? n("span", [t._v("or")]) : t._e()], 1)
                })), 0)], 1) : t._e(), t.approval.groups.length > 0 ? n("v-row", {staticClass: "groups-lane"}, [n("v-col", {attrs: {cols: "4"}}, [n("label", [t._v("are in groups:")])]), n("v-col", t._l(t.approval.groups, (function (e, i) {
                    return n("span", {key: e.id}, [n("v-chip", {
                        staticClass: "white--text",
                        attrs: {color: "primary"}
                    }, [n("v-icon", {attrs: {left: ""}}, [t._v("mdi-account-multiple")]), n("span", {domProps: {textContent: t._s(e.name)}})], 1), i != t.approval.groups.length - 1 ? n("span", [t._v("or")]) : t._e()], 1)
                })), 0)], 1) : t._e(), n("v-row", [t.approval.hooks.length > 0 ? n("v-container", {attrs: {fluid: ""}}, [n("v-divider"), n("span", {staticClass: "title font-weight-light"}, [t._v("Right after this is approved")]), t._l(t.approval.hooks, (function (e) {
                    return n("div", {key: e.id, staticClass: "my-2"}, [n("HookDetail", {
                        attrs: {
                            hook: e,
                            editable: t.editable
                        }, on: {
                            "on-delete": function () {
                                return t.on_hook_deleted(e)
                            }
                        }
                    })], 1)
                }))], 2) : t._e()], 1)], 1)], 1)], 1)], 1), n("v-dialog", {
                    attrs: {"max-width": "800"},
                    model: {
                        value: t.newHookDialog, callback: function (e) {
                            t.newHookDialog = e
                        }, expression: "newHookDialog"
                    }
                }, [n("CreateApprovalHookForm", {
                    attrs: {
                        workflow: t.workflow,
                        transition_approval_meta_id: t.approval.id,
                        excluded_function_ids: t.approval.hooks.map((function (t) {
                            return t.callback_function.id
                        }))
                    }, on: {"on-create": t.on_hook_created}
                })], 1)], 1)
            }, Be = [], Qe = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-card", {
                    staticClass: "pa-5",
                    attrs: {elevation: 6}
                }, [n("v-card-title", [t._v("New Hook")]), n("v-card-text", [n("v-container", {attrs: {fluid: ""}}, [n("v-row", [n("v-col", [n("v-autocomplete", {
                    attrs: {
                        items: t.functions,
                        loading: t.functions_loading,
                        "search-input": t.search_functions,
                        "hide-selected": "",
                        "item-text": "name",
                        label: "Search functions",
                        clearable: "",
                        chips: "",
                        "return-object": ""
                    }, on: {
                        "update:searchInput": function (e) {
                            t.search_functions = e
                        }, "update:search-input": function (e) {
                            t.search_functions = e
                        }
                    }, scopedSlots: t._u([{
                        key: "no-data", fn: function () {
                            return [n("v-list-item", [n("v-list-item-title", [t._v("\n                  Start typing to search for the\n                  "), n("strong", [t._v("callback functions")])])], 1)]
                        }, proxy: !0
                    }, {
                        key: "selection", fn: function (e) {
                            var i = e.attr, o = e.on, a = e.item, r = e.selected;
                            return [n("v-chip", t._g(t._b({
                                staticClass: "white--text",
                                attrs: {"input-value": r, color: "primary"}
                            }, "v-chip", i, !1), o), [n("v-icon", {attrs: {left: ""}}, [t._v("mdi-function-variant")]), n("span", {domProps: {textContent: t._s(a.name)}})], 1)]
                        }
                    }, {
                        key: "item", fn: function (e) {
                            var i = e.item;
                            return [n("v-list-item-content", [n("v-list-item-title", {domProps: {textContent: t._s(i.name)}})], 1)]
                        }
                    }]), model: {
                        value: t.selected_function, callback: function (e) {
                            t.selected_function = e
                        }, expression: "selected_function"
                    }
                })], 1)], 1)], 1)], 1), n("v-card-actions", [n("v-row", [n("v-col", {
                    attrs: {
                        justify: "center",
                        align: "right"
                    }
                }, [n("v-btn", {
                    attrs: {large: "", color: "primary"},
                    on: {click: t.createHook}
                }, [t._v("Create Hook")])], 1)], 1)], 1)], 1)
            }, Ye = [], Ke = {
                name: "CreateApprovalHookForm",
                props: ["workflow", "transition_approval_meta_id", "object_id", "transition_approval_id", "excluded_function_ids"],
                data: function () {
                    return {functions_loading: !1, selected_function: null, functions: [], search_functions: null}
                },
                mounted: function () {
                },
                watch: {
                    selected_function: function (t) {
                        this.search_functions = null
                    }, search_functions: function (t) {
                        var e = this;
                        !t || this.selected_function && this.selected_function.name.includes(t) || (this.functions_loading = !0, z.get("/function/list/", (function (t) {
                            return e.functions = t.data.map((function (t) {
                                return St.of(t.id, t.name, t.body)
                            })).filter((function (t) {
                                return !e.excluded_function_ids.includes(t.id)
                            }))
                        })).finally((function () {
                            return e.functions_loading = !1
                        })))
                    }
                },
                methods: {
                    createHook: function () {
                        var t = Tt.create(this.workflow, this.selected_function, this.transition_approval_meta_id, this.transition_approval_id, this.object_id);
                        this.$emit("on-create", t), this.selected_function = null
                    }
                }
            }, Xe = Ke, Ze = Object(u["a"])(Xe, Qe, Ye, !1, null, null, null), tn = Ze.exports, en = {
                name: "ApprovalDetail",
                components: {HookDetail: Me, CreateApprovalHookForm: tn},
                props: ["workflow", "approval", "editable"],
                data: function () {
                    return {fab: !1, newHookDialog: !1}
                },
                methods: {
                    delete_approval: function () {
                        this.$emit("on-delete", this.approval)
                    }, on_hook_created: function (t) {
                        this.$emit("on-hook-create", t), this.newHookDialog = !1
                    }, on_hook_deleted: function (t) {
                        this.$emit("on-hook-delete", t)
                    }
                }
            }, nn = en, on = Object(u["a"])(nn, Je, Be, !1, null, null, null), an = on.exports, rn = n("3f7d");

        function sn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function ln(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? sn(Object(n), !0).forEach((function (e) {
                    Object(ae["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : sn(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var cn = {
            name: "ApprovalList",
            components: {ApprovalDetail: an, HookDetail: Me, Container: rn["Container"], Draggable: rn["Draggable"]},
            props: ["workflow", "approvals", "editable"],
            data: function () {
                return {drag: !1, items: []}
            },
            computed: {
                dragOptions: function () {
                    return {animation: 200, group: "description", disabled: !1, ghostClass: "ghost"}
                }
            },
            watch: {
                approvals: function (t) {
                    t != this.items && this.update_items()
                }
            },
            mounted: function () {
                this.update_items()
            },
            methods: {
                on_move: function () {
                    this.items = this.items.map((function (t, e) {
                        return t.priority = e + 1, t
                    })), this.$emit("on-order-change", this.items)
                }, delete_approval: function (t) {
                    this.$emit("on-delete", t)
                }, update_items: function () {
                    this.items = this.approvals.map((function (t, e) {
                        return ln({}, t, {priority: e + 1})
                    }))
                }, on_hook_created: function (t) {
                    this.$emit("on-hook-create", t)
                }, on_hook_deleted: function (t) {
                    this.$emit("on-hook-delete", t)
                }, on_drop: function (t) {
                    this.items = this.apply_drag(this.items, t).map((function (t, e) {
                        return ln({}, t, {priority: e + 1})
                    })), this.$emit("on-order-change", this.items)
                }, apply_drag: function (t, e) {
                    var n = e.removedIndex, i = e.addedIndex, o = e.payload;
                    if (null === n && null === i) return t;
                    var a = Object(Ge["a"])(t), r = o;
                    return null !== n && (r = a.splice(n, 1)[0]), null !== i && a.splice(i, 0, r), a
                }
            }
        }, un = cn, dn = (n("2af9"), Object(u["a"])(un, Ue, Ve, !1, null, null, null)), fn = dn.exports;

        function pn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function _n(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? pn(Object(n), !0).forEach((function (e) {
                    Object(ae["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pn(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var vn = {
                name: "EditWorkflowRulesPage",
                components: {
                    EmptyState: kt,
                    CreateApprovalForm: $e,
                    CreateTransitionHookForm: qe,
                    WorkflowIllustration: ve,
                    ApprovalList: fn,
                    HookDetail: Me
                },
                props: ["readonly"],
                data: function () {
                    return {
                        newApprovalDialog: !1,
                        newTransitionHookDialog: !1,
                        fab: !1,
                        workflow: null,
                        initialized: !1,
                        selected_transition: null,
                        states: [],
                        transitions: [],
                        alert_timeout: 2e3
                    }
                },
                mounted: function () {
                    var t = this, e = this.$route.params.id;
                    this.workflow = z.get("/workflow/get/".concat(e, "/"), (function (n) {
                        t.workflow = Ct.of(n.data.id, n.data.content_type, n.data.initial_state, n.data.field_name);
                        var i = t.get_states(e).then((function (e) {
                            return t.states = e
                        })), o = t.get_transition_metas(e).then((function (e) {
                            return t.transitions = e
                        }));
                        Promise.all([i, o]).then((function () {
                            var e = t.$route.query.selected_transition_id;
                            e && t.on_transition_selected(e), t.initialized = !0
                        }))
                    }))
                },
                methods: {
                    get_states: function (t) {
                        return z.get("/workflow/state/list/".concat(t, "/"), (function (t) {
                            return t.data.map((function (t) {
                                return Dt.of(t.id, t.label).of_description(t.description)
                            }))
                        }))
                    }, get_transition_metas: function (t) {
                        var e = this, n = this;
                        return z.get("/workflow/transition-meta/list/".concat(t, "/"), (function (t) {
                            return Promise.all(t.data.map((function (t) {
                                var i = Pt.of(t.id, e.workflow, t.source_state, t.destination_state),
                                    o = n.get_transition_approval_metas(i.id).then((function (t) {
                                        i.approvals = t
                                    })), a = n.get_transition_hooks(i.id).then((function (t) {
                                        i.hooks = t
                                    }));
                                return Promise.all([o, a]).then((function () {
                                    return i
                                }))
                            })))
                        }))
                    }, get_transition_hooks: function (t) {
                        var e = this;
                        return z.get("/transition-meta/transition-hook/list/".concat(t, "/"), (function (t) {
                            return t.data.map((function (t) {
                                return $t.of(t.id, e.workflow, t.callback_function, t.transition_meta, t.transition, t.object_id, !1)
                            }))
                        }))
                    }, get_transition_approval_metas: function (t) {
                        var e = this, n = this;
                        return z.get("/transition-meta/transition-approval-meta/list/".concat(t, "/"), (function (t) {
                            return Promise.all(t.data.map((function (t) {
                                var i = Et.of(t.id, e.workflow, t.transition, t.permissions, t.groups);
                                return n.get_transition_approval_hooks(i.id).then((function (t) {
                                    i.hooks = t
                                })).then((function () {
                                    return i
                                }))
                            })))
                        }))
                    }, get_transition_approval_hooks: function (t) {
                        var e = this;
                        return z.get("/transition-approval-meta/approval-hook/list/".concat(t, "/"), (function (t) {
                            return t.data.map((function (t) {
                                return Tt.of(t.id, e.workflow, t.callback_function, t.transition_approval_meta, t.transition_approval, t.object_id, !1)
                            }))
                        }))
                    }, on_approval_created: function (t) {
                        var e = this;
                        if (this.selected_transition) {
                            var n = this.selected_transition.approvals.reduce((function (t, e) {
                                return Math.max(t, e.priority)
                            }), 0);
                            t.priority = n + 1, z.post("/transition-approval-meta/create/", t.to_create_request(), (function (n) {
                                t.id = n.data.id, e.selected_transition.approvals.push(t), e._update_transition(e.selected_transition), e.newApprovalDialog = !1, k("The transition approval meta is created", e.alert_timeout)
                            }))
                        }
                    }, on_approval_deleted: function (t) {
                        var e = this;
                        this.selected_transition && z.delete("/transition-approval-meta/delete/".concat(t.id, "/"), (function (n) {
                            e.selected_transition.approvals = e.selected_transition.approvals.filter((function (e) {
                                return e.id != t.id
                            })), e._update_transition(e.selected_transition), k("The transition approval meta is deleted", e.alert_timeout)
                        }))
                    }, on_approvals_order_change: function (t) {
                        var e = this;
                        z.post("/transition-approval-meta/re-prioritize/", t.map((function (t) {
                            return {transition_approval_meta_id: t.id, priority: t.priority}
                        }))).then((function (n) {
                            e.selected_transition.approvals = t, e._update_transition(e.selected_transition), k("Re-prioritization has been applied", e.alert_timeout)
                        }))
                    }, on_transition_hook_created: function (t) {
                        var e = this;
                        this.selected_transition && !this.selected_transition.hooks.find((function (e) {
                            return e.id == t.id
                        })) && z.post("/transition-hook/create/", t.to_create_request(), (function (n) {
                            t.id = n.data.id, e.selected_transition.hooks.push(t), e._update_transition(e.selected_transition), e.newTransitionHookDialog = !1, k("The transition hook is created", e.alert_timeout)
                        }))
                    }, on_transition_hook_deleted: function (t) {
                        var e = this;
                        this.selected_transition && z.delete("/transition-hook/delete/".concat(t.id, "/"), (function (n) {
                            e.selected_transition.hooks = e.selected_transition.hooks.filter((function (e) {
                                return e.id != t.id
                            })), e._update_transition(e.selected_transition), k("The transition hook is deleted", e.alert_timeout)
                        }))
                    }, on_approval_hook_created: function (t) {
                        var e = this;
                        if (this.selected_transition) {
                            var n = this.selected_transition.approvals.find((function (e) {
                                return e.id == t.transition_approval_meta_id
                            }));
                            n && !n.hooks.find((function (e) {
                                return e.id == t.id
                            })) && z.post("/approval-hook/create/", t.to_create_request(), (function (i) {
                                t.id = i.data.id, n.hooks.push(t), e._update_approval(e.selected_transition, n), e._update_transition(e.selected_transition), k("The approval hook is created", e.alert_timeout)
                            }))
                        }
                    }, on_approval_hook_deleted: function (t) {
                        var e = this;
                        if (this.selected_transition) {
                            var n = this.selected_transition.approvals.find((function (e) {
                                return e.id == t.transition_approval_meta_id
                            }));
                            n && z.delete("/approval-hook/delete/".concat(t.id, "/"), (function (i) {
                                n.hooks = n.hooks.filter((function (e) {
                                    return e.id != t.id
                                })), e._update_approval(e.selected_transition, n), e._update_transition(e.selected_transition), k("The approval hook is deleted", e.alert_timeout)
                            }))
                        }
                    }, on_transition_selected: function (t) {
                        this.selected_transition = this.transitions.find((function (e) {
                            return e.id == t
                        })), this._update_query({selected_transition_id: JSON.stringify(t)})
                    }, get_state_by: function (t) {
                        return this.states.find((function (e) {
                            return e.id == t
                        }))
                    }, _update_transition: function (t) {
                        this.transitions = this.transitions.map((function (e) {
                            return e.id == t.id ? t : e
                        }))
                    }, _update_approval: function (t, e) {
                        t.approvals = t.approvals.map((function (t) {
                            return t.id == e.id ? e : t
                        }))
                    }, _update_query: function (t) {
                        var e = _n({}, this.$route.query, {}, t), n = this;
                        Object.keys(e).some((function (t) {
                            return n.$route.query[t] != e[t]
                        })) && this.$router.push({query: e})
                    }, _repriotise_approvals: function (t) {
                        t.approvals = t.approvals.sort((function (t, e) {
                            return t.priority - e.priority
                        })).map((function (t, e) {
                            var n = _n({}, t, {priority: e + 1});
                            return n
                        }))
                    }
                }
            }, hn = vn, mn = (n("86de"), Object(u["a"])(hn, ye, je, !1, null, null, null)), gn = mn.exports,
            kn = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-container", {attrs: {fluid: ""}}, [n("v-row", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("v-col", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("h1", [n("v-icon", {
                    staticClass: "mb-2",
                    staticStyle: {"font-size": "35px"}
                }, [t._v("mdi-function-variant")]), t._v("??Functions\n      ")], 1)])], 1), n("v-row", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("v-col", [n("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {headers: t.headers, items: t.items, "items-per-page": 10},
                    scopedSlots: t._u([{
                        key: "item.action", fn: function (e) {
                            var i = e.item;
                            return [n("v-icon", {
                                staticClass: "mr-1",
                                attrs: {color: "primary"},
                                on: {
                                    click: function (e) {
                                        return t.goToViewFunctionPage(i.id)
                                    }
                                }
                            }, [t._v("mdi-details")]), n("v-icon", {
                                staticClass: "mr-1",
                                attrs: {color: "primary", disabled: !t.has_change_function_permission},
                                on: {
                                    click: function (e) {
                                        return t.goToEditFunctionPage(i.id)
                                    }
                                }
                            }, [t._v("mdi-pencil")]), n("v-icon", {
                                staticClass: "mr-1",
                                attrs: {color: "warning", disabled: !t.has_delete_function_permission},
                                on: {
                                    click: function (e) {
                                        return t.showDeletingDialog(i)
                                    }
                                }
                            }, [t._v("mdi-delete")])]
                        }
                    }])
                })], 1)], 1), t.has_add_function_permission ? n("div", {staticClass: "fab_container"}, [n("v-btn", {
                    attrs: {
                        large: "",
                        color: "primary",
                        dark: "",
                        fab: ""
                    }, on: {click: t.goToCreateFunctionPage}
                }, [n("v-icon", [t._v("mdi-plus")])], 1)], 1) : t._e(), this.deletingFunction ? n("v-dialog", {
                    attrs: {"max-width": "50%"},
                    model: {
                        value: t.deleteDialog, callback: function (e) {
                            t.deleteDialog = e
                        }, expression: "deleteDialog"
                    }
                }, [n("v-card", [n("v-card-title", {staticClass: "headline"}, [t._v("\n        Delete function\n        "), n("v-chip", {
                    staticClass: "white--text",
                    attrs: {color: "primary"}
                }, [n("v-icon", {attrs: {left: ""}}, [t._v("mdi-function-variant")]), t._v("\n          " + t._s(t.deletingFunction.name) + "\n        ")], 1), t._v("?\n      ")], 1), n("v-card-actions", [n("div", {staticClass: "flex-grow-1"}), n("v-btn", {
                    attrs: {
                        large: "",
                        color: "primary"
                    }, on: {
                        click: function (e) {
                            t.deleteDialog = !1
                        }
                    }
                }, [t._v("Close")]), n("v-btn", {
                    attrs: {large: "", color: "warning"}, on: {
                        click: function (e) {
                            return t.deleteFunction()
                        }
                    }
                }, [t._v("Agree")])], 1)], 1)], 1) : t._e()], 1)
            }, wn = [];

        function bn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function yn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? bn(Object(n), !0).forEach((function (e) {
                    Object(ae["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bn(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var jn = {
                name: "ListCallbackFunctionPage", data: function () {
                    return {
                        deletingFunction: null,
                        deleteDialog: !1,
                        headers: [{text: "Name", value: "name", align: "left"}, {
                            text: "Version",
                            value: "version",
                            align: "left"
                        }, {text: "Created At", value: "date_created", align: "left"}, {
                            text: "Last Updated At",
                            value: "date_updated",
                            align: "left"
                        }, {text: "Actions", value: "action", sortable: !1}],
                        items: [],
                        has_add_function_permission: !1,
                        has_delete_function_permission: !1,
                        has_change_function_permission: !1
                    }
                }, mounted: function () {
                    this.fetchFunctions()
                }, methods: {
                    setAlertMessage: function (t) {
                        this.message = t, this.messageAlert = !0;
                        var e = this;
                        setTimeout((function () {
                            return e.messageAlert = !1
                        }), 3e3)
                    }, fetchFunctions: function () {
                        var t = this, e = z.get("/function/list/", (function (e) {
                            t.items = e.data.map((function (t) {
                                return yn({}, t, {version: "v".concat(t.version)})
                            }))
                        })), n = V.has_add_permission(M, (function (e) {
                            t.has_add_function_permission = e
                        })), i = V.has_change_permission(M, (function (e) {
                            t.has_change_function_permission = e
                        })), o = V.has_delete_permission(M, (function (e) {
                            t.has_delete_function_permission = e
                        }));
                        Promise.all([e, n, i, o]).then((function () {
                            return t.initialized = !0
                        }))
                    }, goToCreateFunctionPage: function () {
                        this.$router.push({name: "create-callback-function"})
                    }, goToViewFunctionPage: function (t) {
                        this.$router.push({name: "view-callback-function", params: {id: t}})
                    }, goToEditFunctionPage: function (t) {
                        this.$router.push({name: "edit-callback-function", params: {id: t}})
                    }, showDeletingDialog: function (t) {
                        this.deletingFunction = t, this.deleteDialog = !0
                    }, deleteFunction: function () {
                        var t = this;
                        this.deletingFunction && z.delete("/function/delete/".concat(this.deletingFunction.id, "/"), (function () {
                            t.fetchFunctions(), t.deleteDialog = !1, k("Function '".concat(t.deletingFunction.name, "' is deleted"))
                        }))
                    }
                }
            }, xn = jn, On = (n("c391"), Object(u["a"])(xn, kn, wn, !1, null, null, null)), Cn = On.exports,
            Sn = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-container", {attrs: {fluid: ""}}, [n("v-form", {
                    ref: "form",
                    model: {
                        value: t.valid, callback: function (e) {
                            t.valid = e
                        }, expression: "valid"
                    }
                }, [n("v-row", {attrs: {justify: "center", align: "center"}}, [n("v-col", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("h1", [n("v-icon", {
                    staticClass: "mb-2",
                    staticStyle: {"font-size": "35px"}
                }, [t._v("mdi-function-variant")]), t._v("Create Callback Function\n        ")], 1)])], 1), n("v-row", {
                    attrs: {
                        justify: "center",
                        align: "center"
                    }
                }, [n("v-col", [n("v-row", [n("v-col", [n("v-text-field", {
                    attrs: {
                        label: "Callback function name",
                        "prepend-icon": "mdi-function-variant",
                        rules: t.functionNameRules,
                        required: ""
                    }, model: {
                        value: t.callback_function_name, callback: function (e) {
                            t.callback_function_name = e
                        }, expression: "callback_function_name"
                    }
                })], 1)], 1), n("v-row", [n("v-col", [n("CodeEditor", {
                    model: {
                        value: t.callback_function_body,
                        callback: function (e) {
                            t.callback_function_body = e
                        },
                        expression: "callback_function_body"
                    }
                })], 1)], 1)], 1)], 1), n("v-row", [n("v-col", {
                    attrs: {
                        justify: "center",
                        align: "right"
                    }
                }, [n("v-btn", {
                    attrs: {large: "", color: "primary"},
                    on: {click: t.publish}
                }, [n("v-icon", [t._v("mdi-content-save")]), t._v("Save\n        ")], 1)], 1)], 1)], 1)], 1)
            }, Dn = [], Pn = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("codemirror", {
                    attrs: {value: t.value, options: t.cmOptions},
                    on: {ready: t.onCmReady, input: t.onCmCodeChange}
                })
            }, En = [], $n = n("8f94"), Tn = (n("28a5"), n("56b3")), Hn = n.n(Tn);

        function An(t) {
            Hn.a.registerHelper("hint", "python", (function (e) {
                if ("python" == e.getMode().name) {
                    var n = "and del from not while as elif global or with assert else if pass yieldbreak except import print class exec in raise continue finally is return def for lambda try",
                        i = n.split(" "), o = n.toUpperCase().split(" "),
                        a = "abs divmod input open staticmethod all enumerate int ord str any eval isinstance pow sum basestring execfile issubclass print superbin file iter property tuple bool filter len range typebytearray float list raw_input unichr callable format locals reduce unicodechr frozenset long reload vars classmethod getattr map repr xrangecmp globals max reversed zip compile hasattr memoryview round __import__complex hash min set apply delattr help next setattr bufferdict hex object slice coerce dir id oct sorted intern " + t,
                        r = a.split(" ").join("() ").split(" "), s = a.toUpperCase().split(" ").join("() ").split(" ");
                    return d(e, o, (function (t, e) {
                        return t.getTokenAt(e)
                    }))
                }

                function l(t, e) {
                    for (var n = 0, i = t.length; n < i; ++n) e(t[n])
                }

                function c(t, e) {
                    if (!Array.prototype.indexOf) {
                        var n = t.length;
                        while (n) if (n--, t[n] === e) return !0;
                        return !1
                    }
                    return -1 != t.indexOf(e)
                }

                function u(t, e) {
                    var n = [], a = t.string;

                    function u(t) {
                        0 !== t.indexOf(a) || c(n, t) || n.push(t)
                    }

                    function d(t) {
                        l(r, u), l(s, u), l(i, u), l(o, u)
                    }

                    if (e) {
                        var f, p = e.pop();
                        "variable" == p.type ? f = p.string : "variable-3" == p.type && (f = ":" + p.string);
                        while (null != f && e.length) f = f[e.pop().string];
                        null != f && d(f)
                    }
                    return n
                }

                function d(t, e, n) {
                    var i = t.getCursor(), o = n(t, i), a = o;
                    if (/^[\w$_]*$/.test(o.string) || (o = a = {
                        start: i.ch,
                        end: i.ch,
                        string: "",
                        state: o.state,
                        className: ":" == o.string ? "python-type" : null
                    }), !r) var r = [];
                    r.push(a);
                    var s = u(o, r);
                    return s = s.sort(), 1 === s.length && s.push(" "), {
                        list: s,
                        from: Hn.a.Pos(i.line, o.start),
                        to: Hn.a.Pos(i.line, o.end)
                    }
                }
            }))
        }

        n("a7be"), n("db91"), n("8c2e"), n("31c5"), n("99488"), n("b933"), n("9b74"), n("f6b6"), n("9c7b"), n("715d"), n("23de"), n("4ba6"), n("8c33"), n("7289"), n("2aed"), n("d72f"), n("0b6c"), n("9a48");
        var Wn = {
            name: "CodeEditor",
            components: {codemirror: $n["codemirror"]},
            props: ["value", "read_only", "default_value", "extra_keywords"],
            mounted: function () {
                An(this.extra_keywords || [])
            },
            data: function () {
                return {
                    cmOptions: {
                        tabSize: 4,
                        styleActiveLine: !1,
                        lineNumbers: !0,
                        styleSelectedText: !1,
                        line: !0,
                        foldGutter: !0,
                        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                        mode: "text/x-python",
                        hintOptions: {completeSingle: !1},
                        keyMap: "sublime",
                        matchBrackets: !0,
                        showCursorWhenSelecting: !0,
                        extraKeys: {"Ctrl-Space": "autocomplete"},
                        readOnly: !!this.read_only && "nocursor"
                    }
                }
            },
            methods: {
                onCmCodeChange: function (t) {
                    this.$emit("input", t)
                }, onCmReady: function (t) {
                    t.on("keypress", (function () {
                        t.showHint()
                    }))
                }
            }
        }, zn = Wn, qn = Object(u["a"])(zn, Pn, En, !1, null, null, null), Ln = qn.exports, Fn = {
            name: "CreateCallbackFunctionPage", components: {CodeEditor: Ln}, data: function () {
                return {
                    valid: !0,
                    callback_function_name: null,
                    callback_function_body: null,
                    functionNameRules: [function (t) {
                        return !!t || "Function name is required"
                    }, function (t) {
                        return t && t.length <= 200 || "Name must be less than 200 characters"
                    }]
                }
            }, methods: {
                publish: function () {
                    var t = this;
                    this.$refs.form.validate() && z.post("/function/create/", {
                        name: this.callback_function_name,
                        body: this.callback_function_body
                    }, (function () {
                        k("Function '".concat(t.callback_function_name, "' is created")), t.$router.push({name: "list-callback-functions"})
                    }))
                }
            }
        }, Nn = Fn, In = Object(u["a"])(Nn, Sn, Dn, !1, null, null, null), Rn = In.exports, Mn = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.callback_function ? n("v-container", {attrs: {fluid: ""}}, [n("v-row", {
                attrs: {
                    justify: "center",
                    align: "center"
                }
            }, [n("v-col", {attrs: {justify: "center", align: "center"}}, [n("h1", [n("v-icon", {
                staticClass: "mb-2",
                staticStyle: {"font-size": "35px"}
            }, [t._v("mdi-function-variant")]), t._v("Callback Function Detail\n      ")], 1)])], 1), n("v-row", {
                attrs: {
                    justify: "center",
                    align: "center"
                }
            }, [n("v-col", [n("v-row", [n("v-col", {attrs: {cols: "auto"}}, [n("label", [n("h3", [t._v("Name:")])])]), n("v-col", [n("v-chip", {
                staticClass: "white--text",
                attrs: {color: "primary"}
            }, [n("v-icon", {attrs: {left: ""}}, [t._v("mdi-function-variant")]), n("span", {domProps: {textContent: t._s(t.callback_function.name)}})], 1)], 1)], 1), n("v-row", [n("v-col", [n("CodeEditor", {
                attrs: {read_only: !0},
                model: {
                    value: t.callback_function.body, callback: function (e) {
                        t.$set(t.callback_function, "body", e)
                    }, expression: "callback_function.body"
                }
            })], 1)], 1)], 1)], 1)], 1) : t._e()
        }, Un = [], Vn = {
            name: "CreateCallbackFunctionPage", components: {CodeEditor: Ln}, data: function () {
                return {callback_function: null}
            }, mounted: function () {
                var t = this, e = this.$route.params.id;
                z.get("/function/get/".concat(e, "/"), (function (e) {
                    return t.callback_function = e.data
                }))
            }, methods: {}
        }, Gn = Vn, Jn = Object(u["a"])(Gn, Mn, Un, !1, null, null, null), Bn = Jn.exports, Qn = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("v-container", {attrs: {fluid: ""}}, [n("v-form", {
                ref: "form",
                model: {
                    value: t.valid, callback: function (e) {
                        t.valid = e
                    }, expression: "valid"
                }
            }, [n("v-row", {attrs: {justify: "center", align: "center"}}, [n("v-col", {
                attrs: {
                    justify: "center",
                    align: "center"
                }
            }, [n("h1", [n("v-icon", {
                staticClass: "mb-2",
                staticStyle: {"font-size": "35px"}
            }, [t._v("mdi-function-variant")]), t._v("Edit Callback Function\n        ")], 1)])], 1), n("v-row", {
                attrs: {
                    justify: "center",
                    align: "center"
                }
            }, [n("v-col", [n("v-row", [n("v-col", [n("v-text-field", {
                attrs: {
                    label: "Callback function name",
                    "prepend-icon": "mdi-function-variant",
                    rules: t.functionNameRules,
                    required: ""
                }, model: {
                    value: t.callback_function_name, callback: function (e) {
                        t.callback_function_name = e
                    }, expression: "callback_function_name"
                }
            })], 1)], 1), n("v-row", [n("v-col", [n("CodeEditor", {
                model: {
                    value: t.callback_function_body,
                    callback: function (e) {
                        t.callback_function_body = e
                    },
                    expression: "callback_function_body"
                }
            })], 1)], 1)], 1)], 1), n("v-row", [n("v-col", {
                attrs: {
                    justify: "center",
                    align: "right"
                }
            }, [n("v-btn", {
                attrs: {large: "", color: "primary"},
                on: {click: t.publish}
            }, [n("v-icon", [t._v("mdi-content-save")]), t._v("Update\n        ")], 1)], 1)], 1)], 1)], 1)
        }, Yn = [], Kn = {
            name: "CreateCallbackFunctionPage", components: {CodeEditor: Ln}, data: function () {
                return {
                    valid: !0,
                    callback_function_name: null,
                    callback_function_body: null,
                    functionNameRules: [function (t) {
                        return !!t || "Function name is required"
                    }, function (t) {
                        return t && t.length <= 200 || "Name must be less than 200 characters"
                    }]
                }
            }, mounted: function () {
                var t = this, e = this.$route.params.id;
                z.get("/function/get/".concat(e, "/"), (function (e) {
                    console.log(e), t.callback_function_name = e.data.name, t.callback_function_body = e.data.body
                }))
            }, methods: {
                publish: function () {
                    var t = this;
                    if (this.$refs.form.validate()) {
                        var e = this.$route.params.id;
                        z.put("/function/update/".concat(e, "/"), {
                            name: this.callback_function_name,
                            body: this.callback_function_body
                        }, (function () {
                            k("Function '".concat(t.callback_function_name, "' is updated")), t.$router.push({name: "list-callback-functions"})
                        }))
                    }
                }
            }
        }, Xn = Kn, Zn = Object(u["a"])(Xn, Qn, Yn, !1, null, null, null), ti = Zn.exports, ei = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.initialized ? n("v-container", {attrs: {fluid: ""}}, [n("v-container", {attrs: {fluid: ""}}, [n("v-row", {
                attrs: {
                    justify: "center",
                    align: "center"
                }
            }, [n("v-col", {
                attrs: {
                    justify: "center",
                    align: "center"
                }
            }, [n("h1", [t._v("\n          Workflow objects of\n          "), n("v-chip", {
                staticClass: "white--text",
                attrs: {color: "primary"}
            }, [n("v-icon", {attrs: {left: ""}}, [t._v("mdi-sitemap")]), n("span", {domProps: {textContent: t._s(t.workflow.identifier)}})], 1)], 1)])], 1), n("v-row", {
                attrs: {
                    justify: "center",
                    align: "center"
                }
            }, [n("v-col", [n("v-data-table", {
                staticClass: "elevation-1",
                attrs: {headers: t.headers, items: t.workflow_objects, "items-per-page": 10},
                scopedSlots: t._u([{
                    key: "item.action", fn: function (e) {
                        var i = e.item;
                        return [t.has_change_workflow_permission ? n("v-tooltip", {
                            attrs: {top: ""},
                            scopedSlots: t._u([{
                                key: "activator", fn: function (e) {
                                    var o = e.on;
                                    return [n("v-icon", t._g({
                                        staticClass: "mr-1",
                                        attrs: {color: "primary"},
                                        on: {
                                            click: function (e) {
                                                return t.goToTimeline(i)
                                            }
                                        }
                                    }, o), [t._v("mdi-timeline-text")])]
                                }
                            }], null, !0)
                        }, [n("span", [t._v("View & Edit Timeline")])]) : n("v-tooltip", {
                            attrs: {top: ""},
                            scopedSlots: t._u([{
                                key: "activator", fn: function (e) {
                                    var o = e.on;
                                    return [n("v-icon", t._g({
                                        staticClass: "mr-1",
                                        attrs: {color: "primary"},
                                        on: {
                                            click: function (e) {
                                                return t.goToViewTimeline(i)
                                            }
                                        }
                                    }, o), [t._v("mdi-timeline-text")])]
                                }
                            }], null, !0)
                        }, [n("span", [t._v("View Timeline")])]), n("v-tooltip", {
                            attrs: {top: ""},
                            scopedSlots: t._u([{
                                key: "activator", fn: function (e) {
                                    var o = e.on;
                                    return [n("v-btn", t._g({
                                        attrs: {
                                            icon: "",
                                            color: "warning",
                                            disabled: !t.has_delete_workflow_permission
                                        }, on: {
                                            click: function (e) {
                                                return t.showDeletingDialog(i)
                                            }
                                        }
                                    }, o), [n("v-icon", [t._v("mdi-delete")])], 1)]
                                }
                            }], null, !0)
                        }, [n("span", [t._v("Delete Workflow Object")])])]
                    }
                }], null, !1, 1410425550)
            })], 1)], 1)], 1), this.deletingWorkflowObject ? n("v-dialog", {
                attrs: {"max-width": "50%"},
                model: {
                    value: t.deleteDialog, callback: function (e) {
                        t.deleteDialog = e
                    }, expression: "deleteDialog"
                }
            }, [n("v-card", [n("v-card-title", {staticClass: "headline"}, [t._v("\n        Delete workflow object ??\n        "), n("v-chip", {attrs: {color: "primary"}}, [t._v(t._s(t.deletingWorkflowObject.identifier))]), t._v("?? ?\n      ")], 1), n("v-card-actions", [n("div", {staticClass: "flex-grow-1"}), n("v-btn", {
                attrs: {
                    large: "",
                    color: "primary"
                }, on: {
                    click: function (e) {
                        t.deleteDialog = !1
                    }
                }
            }, [t._v("Close")]), n("v-btn", {
                attrs: {large: "", color: "warning"}, on: {
                    click: function (e) {
                        return t.deleteWorkflowObject()
                    }
                }
            }, [t._v("Agree")])], 1)], 1)], 1) : t._e()], 1) : t._e()
        }, ni = [];

        function ii(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function oi(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ii(Object(n), !0).forEach((function (e) {
                    Object(ae["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ii(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var ai = {
            name: "ListWorkflowObjectsPage", components: {EmptyState: kt, WorkflowIllustration: ve}, data: function () {
                return {
                    initialized: !1,
                    workflow_loading: !1,
                    workflow: null,
                    headers: null,
                    deletingWorkflowObject: null,
                    deleteDialog: !1,
                    workflow_objects: [],
                    has_delete_workflow_permission: !1,
                    has_change_workflow_permission: !1
                }
            }, watch: {
                $route: function (t, e) {
                    t.params.workflow_id != e.params.workflow_id && this.load()
                }
            }, mounted: function () {
                this.load()
            }, methods: {
                load: function () {
                    var t = this;
                    this.initialized = !1;
                    var e = this.$route.params.workflow_id, n = z.get("/workflow/get/".concat(e, "/"), (function (e) {
                        return t.workflow = Ct.of(e.data.id, e.data.content_type, e.data.initial_state, e.data.field_name)
                    })), i = V.has_change_permission(I, (function (e) {
                        t.has_change_workflow_permission = e
                    })), o = V.has_delete_permission(I, (function (e) {
                        t.has_delete_workflow_permission = e
                    }));
                    Promise.all([n, i, o]).then((function () {
                        return t.fetchWorkflowObjects()
                    })).then((function () {
                        return t.initialized = !0
                    })).finally((function () {
                        return t.workflow_loading = !1
                    }))
                }, goToCreateWorkflowPage: function () {
                    this.$router.push({name: "create-workflow"})
                }, fetchWorkflowObjects: function () {
                    var t = this;
                    return this.workflow_object_loading = !0, z.get("/workflow/object/list/".concat(this.workflow.id, "/"), (function (e) {
                        t.headers = e.data.headers.map((function (t) {
                            return {text: t, value: t, align: "left"}
                        })).concat([{
                            text: "Actions",
                            value: "action",
                            sortable: !1
                        }]), t.workflow_objects = e.data.workflow_objects.map((function (t) {
                            return oi({}, t, {identifier: t.__str})
                        }))
                    })).finally((function () {
                        return t.workflow_object_loading = !1
                    }))
                }, goToTimeline: function (t) {
                    this.$router.push({
                        name: "edit-workflow-object-timeline",
                        params: {workflow_id: this.workflow.id, object_id: t.pk}
                    })
                }, goToViewTimeline: function (t) {
                    this.$router.push({
                        name: "view-workflow-object-timeline",
                        params: {workflow_id: this.workflow.id, object_id: t.pk}
                    })
                }, showDeletingDialog: function (t) {
                    this.deletingWorkflowObject = t, this.deleteDialog = !0
                }, deleteWorkflowObject: function () {
                    var t = this;
                    this.deletingWorkflowObject && z.delete("/workflow-object/delete/".concat(this.workflow.id, "/").concat(this.deletingWorkflowObject.id, "/"), (function () {
                        t.fetchWorkflowObjects(), t.deleteDialog = !1, k("Workflow object ".concat(t.deletingWorkflowObject.identifier, " is deleted."))
                    }))
                }, _updateQuery: function (t) {
                    var e = oi({}, this.$route.query, {}, t), n = this;
                    Object.keys(e).some((function (t) {
                        return n.$route.query[t] != e[t]
                    })) && this.$router.push({query: e})
                }
            }
        }, ri = ai, si = Object(u["a"])(ri, ei, ni, !1, null, null, null), li = si.exports, ci = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.initialized ? n("div", [t.states && t.transitions ? n("v-container", {attrs: {fluid: ""}}, [n("v-row", {
                staticClass: "mb-6",
                attrs: {justify: "center", align: "center"}
            }, [n("h1", [t._v("\n        Active Workflow for\n        "), n("v-chip", [t._v(t._s(t.object_identifier))])], 1)]), n("v-row", [n("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    md6: ""
                }
            }, [n("v-container", [n("WorkflowIllustration", {
                attrs: {
                    states: t.states,
                    transitions: t.transitions,
                    editable: !1,
                    state_class_mapping: t.state_class_mapping
                }, on: {"on-transition-selected": t.on_transition_selected}
            })], 1)], 1), n("v-flex", {
                attrs: {
                    xs12: "",
                    sm12: "",
                    md6: ""
                }
            }, [t.selected_transition && !t.selected_transition.is_cancelled ? n("v-container", [n("v-row", [n("v-col", [n("v-card", {
                staticClass: "pa-5",
                attrs: {elevation: 6}
            }, [n("v-card-title", [n("v-row", [n("v-col", {attrs: {cols: "9"}}, [t._v("\n                      Transition steps from\n                      "), n("v-chip", {
                staticClass: "white--text",
                attrs: {color: "primary"}
            }, [n("span", {domProps: {textContent: t._s(t.get_state_by(t.selected_transition.source_state_id).label)}})]), t._v("to\n                      "), n("v-chip", {
                staticClass: "white--text",
                attrs: {color: "primary"}
            }, [n("span", {domProps: {textContent: t._s(t.get_state_by(t.selected_transition.destination_state_id).label)}})])], 1), n("div", {staticClass: "flex-grow-1"}), t.selected_transition.is_done || t.readonly ? t._e() : n("v-col", [n("v-speed-dial", {
                attrs: {
                    bottom: !0,
                    right: !0,
                    direction: "left",
                    "open-on-hover": !0
                }, scopedSlots: t._u([{
                    key: "activator", fn: function () {
                        return [n("v-btn", {
                            attrs: {color: "primary", dark: "", fab: ""},
                            model: {
                                value: t.fab, callback: function (e) {
                                    t.fab = e
                                }, expression: "fab"
                            }
                        }, [t.fab ? n("v-icon", [t._v("mdi-close")]) : n("v-icon", [t._v("mdi-plus")])], 1)]
                    }, proxy: !0
                }], null, !1, 3988453149), model: {
                    value: t.fab, callback: function (e) {
                        t.fab = e
                    }, expression: "fab"
                }
            }, [n("v-tooltip", {
                attrs: {top: ""}, scopedSlots: t._u([{
                    key: "activator", fn: function (e) {
                        var i = e.on;
                        return [n("v-btn", t._g({
                            attrs: {fab: "", dark: "", small: "", color: "green"},
                            on: {
                                click: function (e) {
                                    t.newTransitionHookDialog = !0
                                }
                            }
                        }, i), [n("v-icon", [t._v("mdi-function-variant")])], 1)]
                    }
                }], null, !1, 585803449)
            }, [n("span", [t._v("Create Transition Hook")])])], 1)], 1)], 1)], 1), n("v-card-text", [n("ObjectApprovalList", {
                attrs: {
                    workflow: t.workflow,
                    object_id: t.$route.params.object_id,
                    object_approvals: t.selected_transition.approvals,
                    editable: !t.readonly
                }, on: {"on-hook-create": t.on_approval_hook_created, "on-hook-delete": t.on_approval_hook_deleted}
            }), t.selected_transition.hooks.length > 0 ? n("div", [n("v-divider"), n("span", {staticClass: "title font-weight-light"}, [t._v("Right before the transition happens")]), t._l(t.selected_transition.hooks, (function (e) {
                return n("div", {key: e.id}, [n("HookDetail", {
                    staticClass: "my-1",
                    attrs: {hook: e, editable: !e.is_from_upstream() && !t.readonly},
                    on: {"on-delete": t.on_transition_hook_deleted}
                })], 1)
            }))], 2) : t._e()], 1)], 1)], 1)], 1)], 1) : n("v-container", [n("EmptyState", {
                attrs: {
                    label: "Select an uncancelled transition",
                    description: "Selecting a transition by clicking the arrow, you'll be able to create transition steps."
                }, scopedSlots: t._u([{
                    key: "icon", fn: function () {
                        return [t._v("mdi-near-me")]
                    }, proxy: !0
                }], null, !1, 665517018)
            })], 1)], 1)], 1)], 1) : t._e(), !t.readonly && t.selected_transition ? n("v-dialog", {
                attrs: {"max-width": "800"},
                model: {
                    value: t.newTransitionHookDialog, callback: function (e) {
                        t.newTransitionHookDialog = e
                    }, expression: "newTransitionHookDialog"
                }
            }, [n("CreateTransitionHookForm", {
                attrs: {
                    workflow: t.workflow,
                    transition_meta: t.selected_transition.transition_meta,
                    transition: t.selected_transition.id,
                    object_id: t.$route.params.object_id,
                    excluded_function_ids: t.selected_transition.hooks.map((function (t) {
                        return t.callback_function.id
                    }))
                }, on: {"on-create": t.on_transition_hook_created}
            })], 1) : t._e(), t.deletingApprovalHook ? n("v-dialog", {
                attrs: {"max-width": "50%"},
                model: {
                    value: t.deletingApprovalHookDialog, callback: function (e) {
                        t.deletingApprovalHookDialog = e
                    }, expression: "deletingApprovalHookDialog"
                }
            }, [n("v-card", [n("v-card-title", {staticClass: "headline"}, [t._v("Delete approval hook?")]), n("v-card-actions", [n("div", {staticClass: "flex-grow-1"}), n("v-btn", {
                attrs: {
                    large: "",
                    color: "primary"
                }, on: {
                    click: function (e) {
                        t.deletingApprovalHookDialog = !1
                    }
                }
            }, [t._v("Close")]), n("v-btn", {
                attrs: {large: "", color: "warning"}, on: {
                    click: function (e) {
                        return t.delete_approval_hook()
                    }
                }
            }, [t._v("Agree")])], 1)], 1)], 1) : t._e(), t.deletingTransitionHook ? n("v-dialog", {
                attrs: {"max-width": "50%"},
                model: {
                    value: t.deletingTransitionHookDialog, callback: function (e) {
                        t.deletingTransitionHookDialog = e
                    }, expression: "deletingTransitionHookDialog"
                }
            }, [n("v-card", [n("v-card-title", {staticClass: "headline"}, [t._v("Delete transition hook?")]), n("v-card-actions", [n("div", {staticClass: "flex-grow-1"}), n("v-btn", {
                attrs: {
                    large: "",
                    color: "primary"
                }, on: {
                    click: function (e) {
                        t.deletingTransitionHookDialog = !1
                    }
                }
            }, [t._v("Close")]), n("v-btn", {
                attrs: {large: "", color: "warning"}, on: {
                    click: function (e) {
                        return t.delete_transition_hook()
                    }
                }
            }, [t._v("Agree")])], 1)], 1)], 1) : t._e()], 1) : t._e()
        }, ui = [], di = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("v-container", {
                staticClass: "py-4",
                attrs: {fluid: ""}
            }, [0 == t.object_approvals.length ? n("v-row", [n("v-col", [t._v("No approval step")])], 1) : n("v-row", [n("v-col", t._l(t.items, (function (e) {
                return n("div", {key: e.priority}, [n("ObjectApprovalDetail", {
                    attrs: {
                        workflow: t.workflow,
                        object_id: t.object_id,
                        approval: e,
                        editable: t.editable
                    }, on: {
                        "on-hook-create": function (e) {
                            return t.on_hook_created(e)
                        }, "on-hook-delete": function (e) {
                            return t.on_hook_deleted(e)
                        }
                    }
                })], 1)
            })), 0)], 1)], 1)
        }, fi = [], pi = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("v-container", [n("v-card", ["approved" == t.approval.status ? n("v-card-title", {staticClass: "approved"}, [n("span", {staticClass: "title font-weight-light"}, [t._v("Approved by ??")]), n("v-chip", {staticClass: "black--text"}, [n("v-icon", {attrs: {left: ""}}, [t._v("mdi-account")]), n("span", {domProps: {textContent: t._s(t.approval.transactioner.username)}})], 1)], 1) : n("v-card-title", [n("v-icon", {staticClass: "mb-1 mr-3"}, [t._v("mdi-account-multiple-check")]), n("span", {staticClass: "title font-weight-light"}, [t._v("Should be approved by the users who")]), n("div", {staticClass: "flex-grow-1"}), t.editable ? n("v-speed-dial", {
                staticClass: "mt-5",
                attrs: {bottom: !0, right: !0, direction: "left", "open-on-hover": !0},
                scopedSlots: t._u([{
                    key: "activator", fn: function () {
                        return [n("v-btn", {
                            attrs: {small: "", color: "primary", dark: "", fab: ""},
                            model: {
                                value: t.fab, callback: function (e) {
                                    t.fab = e
                                }, expression: "fab"
                            }
                        }, [t.fab ? n("v-icon", [t._v("mdi-close")]) : n("v-icon", [t._v("mdi-settings")])], 1)]
                    }, proxy: !0
                }], null, !1, 4126577419),
                model: {
                    value: t.fab, callback: function (e) {
                        t.fab = e
                    }, expression: "fab"
                }
            }, [n("v-tooltip", {
                attrs: {top: ""}, scopedSlots: t._u([{
                    key: "activator", fn: function (e) {
                        var i = e.on;
                        return [n("v-btn", t._g({
                            attrs: {fab: "", dark: "", small: "", color: "green"},
                            on: {
                                click: function (e) {
                                    t.newHookDialog = !0
                                }
                            }
                        }, i), [n("v-icon", [t._v("mdi-function-variant")])], 1)]
                    }
                }], null, !1, 3244165398)
            }, [n("span", [t._v("Create Approval Hook")])])], 1) : t._e()], 1), "approved" == t.approval.status && t.approval.hooks.length > 0 ? n("v-card-text", [n("v-container", {attrs: {fluid: ""}}, [n("v-divider"), t._l(t.approval.hooks, (function (e) {
                return n("div", {key: e.id, staticClass: "approved my-2"}, [n("HookDetail", {
                    attrs: {
                        hook: e,
                        editable: t.editable
                    }, on: {
                        "on-delete": function () {
                            return t.on_hook_deleted(e)
                        }
                    }
                })], 1)
            }))], 2)], 1) : "approved" != t.approval.status ? n("v-card-text", [n("v-row", [n("v-col", [t.approval.permissions.length ? n("v-row", [n("v-col", {attrs: {cols: "4"}}, [n("label", [t._v("have permissions:")])]), n("v-col", t._l(t.approval.permissions, (function (e, i) {
                return n("span", {key: e.id}, [n("v-chip", {
                    staticClass: "white--text",
                    attrs: {color: "primary"}
                }, [n("v-icon", {attrs: {left: ""}}, [t._v("mdi-lock")]), n("span", {domProps: {textContent: t._s(e.identifier)}})], 1), i != t.approval.permissions.length - 1 ? n("span", [t._v("or")]) : t._e()], 1)
            })), 0)], 1) : t._e(), t.approval.groups.length ? n("v-row", [n("v-col", {attrs: {cols: "4"}}, [n("label", [t._v("are in groups:")])]), n("v-col", t._l(t.approval.groups, (function (e, i) {
                return n("span", {key: e.id}, [n("v-chip", {
                    staticClass: "white--text",
                    attrs: {color: "primary"}
                }, [n("v-icon", {attrs: {left: ""}}, [t._v("mdi-account-multiple")]), n("span", {domProps: {textContent: t._s(e.name)}})], 1), i != t.approval.groups.length - 1 ? n("span", [t._v("or")]) : t._e()], 1)
            })), 0)], 1) : t._e(), n("v-row", [t.approval.hooks.length > 0 ? n("v-container", {attrs: {fluid: ""}}, [n("v-divider"), n("span", {staticClass: "title font-weight-light"}, [t._v("Right after this is approved")]), t._l(t.approval.hooks, (function (e) {
                return n("div", {key: e.id, staticClass: "my-2"}, [n("HookDetail", {
                    attrs: {
                        hook: e,
                        editable: !e.is_from_upstream() && t.editable
                    }, on: {
                        "on-delete": function () {
                            return t.on_hook_deleted(e)
                        }
                    }
                })], 1)
            }))], 2) : t._e()], 1)], 1)], 1)], 1) : t._e()], 1), n("v-dialog", {
                attrs: {"max-width": "800"},
                model: {
                    value: t.newHookDialog, callback: function (e) {
                        t.newHookDialog = e
                    }, expression: "newHookDialog"
                }
            }, [n("CreateApprovalHookForm", {
                attrs: {
                    workflow: t.workflow,
                    transition_approval_meta_id: t.approval.transition_approval_meta,
                    transition_approval_id: t.approval.id,
                    object_id: t.object_id,
                    excluded_function_ids: t.approval.hooks.map((function (t) {
                        return t.callback_function.id
                    }))
                }, on: {"on-create": t.on_hook_created}
            })], 1)], 1)
        }, _i = [], vi = {
            name: "ObjectApprovalDetail",
            components: {HookDetail: Me, CreateApprovalHookForm: tn},
            props: ["workflow", "approval", "object_id", "editable"],
            data: function () {
                return {fab: !1, newHookDialog: !1}
            },
            methods: {
                on_hook_created: function (t) {
                    this.$emit("on-hook-create", t), this.newHookDialog = !1
                }, on_hook_deleted: function (t) {
                    this.$emit("on-hook-delete", t)
                }
            }
        }, hi = vi, mi = (n("5e69"), Object(u["a"])(hi, pi, _i, !1, null, null, null)), gi = mi.exports;

        function ki(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function wi(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ki(Object(n), !0).forEach((function (e) {
                    Object(ae["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ki(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var bi = {
            name: "ObjectApprovalList",
            components: {ObjectApprovalDetail: gi, HookDetail: Me},
            props: ["workflow", "object_id", "object_approvals", "editable"],
            data: function () {
                return {drag: !1, items: []}
            },
            computed: {},
            watch: {
                object_approvals: function (t) {
                    t != this.items && this.update_items()
                }
            },
            mounted: function () {
                this.update_items()
            },
            methods: {
                update_items: function () {
                    this.items = this.object_approvals.map((function (t, e) {
                        return wi({}, t, {priority: e + 1})
                    }))
                }, on_hook_created: function (t) {
                    this.$emit("on-hook-create", t)
                }, on_hook_deleted: function (t) {
                    this.$emit("on-hook-delete", t)
                }
            }
        }, yi = bi, ji = (n("ad44"), Object(u["a"])(yi, di, fi, !1, null, null, null)), xi = ji.exports;

        function Oi(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Ci(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Oi(Object(n), !0).forEach((function (e) {
                    Object(ae["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Oi(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Si = {
            name: "EditWorkflowObjectTimelinePage",
            components: {
                EmptyState: kt,
                CreateTransitionHookForm: qe,
                WorkflowIllustration: ve,
                ObjectApprovalList: xi,
                HookDetail: Me
            },
            props: ["readonly"],
            data: function () {
                return {
                    initialized: !1,
                    fab: null,
                    workflow: null,
                    object_identifier: null,
                    selected_transition: null,
                    transition_approvals: {},
                    transitions: null,
                    states: null,
                    current_state: null,
                    alert_timeout: 2e3,
                    current_iteration: null,
                    newTransitionHookDialog: !1,
                    state_class_mapping: {},
                    deletingTransitionHook: null,
                    deletingTransitionHookDialog: !1,
                    deletingApprovalHook: null,
                    deletingApprovalHookDialog: !1,
                    pending_state_class: {rect: {"stroke-dasharray": "10 5", fill: "white"}},
                    done_state_class: {rect: {fill: "#4caf50"}, label: {stroke: "white"}},
                    cancelled_state_class: {rect: {fill: "rgb(195, 189, 189)"}, label: {stroke: "white"}},
                    current_state_class: {rect: {fill: "deepskyblue"}, label: {stroke: "white"}}
                }
            },
            mounted: function () {
                var t = this, e = this.$route.params.workflow_id, n = this.$route.params.object_id;
                z.get("/workflow/get/".concat(e, "/"), (function (i) {
                    t.workflow = Ct.of(i.data.id, i.data.content_type, i.data.initial_state, i.data.field_name);
                    z.get("/workflow-object/identify/".concat(t.workflow.id, "/").concat(n, "/"), (function (e) {
                        t.object_identifier = e.data
                    }));
                    var o = z.get("/workflow-object/current-state/".concat(t.workflow.id, "/").concat(n, "/"), (function (e) {
                            t.current_state = Dt.of(e.data.id, e.data.label).of_description(e.data.description)
                        })),
                        a = z.get("/workflow-object/current-iteration/".concat(t.workflow.id, "/").concat(n, "/"), (function (e) {
                            t.current_iteration = e.data
                        })), r = t.get_states(e, n).then((function (e) {
                            return t.states = e
                        })), s = t.get_transitions(e, n).then((function (e) {
                            return t.transitions = e
                        })).then((function () {
                            var e = t;
                            t.transitions.forEach((function (t) {
                                t.is_done ? (e.state_class_mapping[t.source_state_id] = e.done_state_class, e.state_class_mapping[t.destination_state_id] = e.done_state_class) : t.is_cancelled ? e.state_class_mapping[t.destination_state_id] = e.cancelled_state_class : e.state_class_mapping[t.destination_state_id] = e.pending_state_class
                            }))
                        }));
                    Promise.all([r, s, o, a]).then((function () {
                        t.state_class_mapping[t.to_state_id(t.current_iteration - 1, t.current_state.id)] = t.current_state_class;
                        var e = t.$route.query.selected_transition_id;
                        e && t.on_transition_selected(e), t.initialized = !0
                    }))
                }))
            },
            methods: {
                to_state_id: function (t, e) {
                    return "".concat(t, "-").concat(e)
                }, get_states: function (t, e) {
                    var n = this;
                    return z.get("/workflow-object/state/list/".concat(t, "/").concat(e, "/"), (function (t) {
                        return t.data.map((function (t) {
                            return Dt.of(n.to_state_id(t.iteration, t.state.id), t.state.label).of_description(t.state.description)
                        }))
                    }))
                }, get_transitions: function (t, e) {
                    var n = this, i = this;
                    return z.get("/workflow-object/transition/list/".concat(t, "/").concat(e, "/"), (function (t) {
                        return Promise.all(t.data.map((function (t) {
                            t = Ht.of(t.id, n.workflow, n.to_state_id(t.iteration - 1, t.source_state), n.to_state_id(t.iteration, t.destination_state), t.meta, t.object_id, t.iteration, t.is_cancelled, t.is_done);
                            var e = i.get_transition_approvals(t.id).then((function (e) {
                                t.approvals = e
                            })), o = i.get_transition_hooks(t).then((function (e) {
                                t.hooks = e
                            }));
                            return Promise.all([e, o]).then((function () {
                                return t
                            }))
                        })))
                    }))
                }, get_transition_hooks: function (t) {
                    var e = this;
                    return z.get("/transition/transition-hook/list/".concat(t.id, "/"), (function (n) {
                        return n.data.map((function (n) {
                            return $t.of(n.id, e.workflow, n.callback_function, n.transition_meta, n.transition, n.object_id, t.is_done)
                        }))
                    }))
                }, get_transition_approvals: function (t) {
                    var e = this, n = this;
                    return z.get("/transition/transition-approval/list/".concat(t, "/"), (function (t) {
                        return Promise.all(t.data.map((function (t) {
                            var i = At.of(t.id, e.workflow, t.transition, t.meta, t.object_id, t.permissions, t.groups, t.priority, t.status, t.transactioner);
                            return n.get_transition_approval_hooks(i).then((function (t) {
                                i.hooks = t
                            })).then((function () {
                                return i
                            }))
                        })))
                    }))
                }, get_transition_approval_hooks: function (t) {
                    var e = this;
                    return z.get("/transition-approval/approval-hook/list/".concat(t.id, "/"), (function (n) {
                        return n.data.map((function (n) {
                            return Tt.of(n.id, e.workflow, n.callback_function, n.transition_approval_meta, n.transition_approval, n.object_id, t.is_approved)
                        }))
                    }))
                }, on_transition_hook_created: function (t) {
                    var e = this;
                    this.selected_transition && !this.selected_transition.hooks.find((function (e) {
                        return e.id == t.id
                    })) && (z.post("/transition-hook/create/", t.to_create_request(), (function (n) {
                        t.id = n.data.id, e.selected_transition.hooks.push(t), e._update_transition(e.selected_transition)
                    })), this.newTransitionHookDialog = !1, k("The transition hook is created", this.alert_timeout))
                }, on_transition_hook_deleted: function (t) {
                    this.deletingTransitionHook = t, this.deletingTransitionHookDialog = !0
                }, delete_transition_hook: function () {
                    var t = this;
                    this.selected_transition && z.delete("/transition-hook/delete/".concat(this.deletingTransitionHook.id, "/"), (function (e) {
                        t.selected_transition.hooks = t.selected_transition.hooks.filter((function (e) {
                            return e.id != t.deletingTransitionHook.id
                        })), t._update_transition(t.selected_transition), t.deletingTransitionHook = null, t.deletingTransitionHookDialog = !0, k("The transition hook is deleted", t.alert_timeout)
                    }))
                }, on_approval_hook_created: function (t) {
                    var e = this;
                    if (this.selected_transition) {
                        var n = this.selected_transition.approvals.find((function (e) {
                            return e.id == t.transition_approval_id
                        }));
                        n && !n.hooks.find((function (e) {
                            return e.id == t.id
                        })) && z.post("/approval-hook/create/", t.to_create_request(), (function (i) {
                            t.id = i.data.id, n.hooks.push(t), e._update_approval(e.selected_transition, n), e._update_transition(e.selected_transition), k("The approval hook is created", e.alert_timeout)
                        }))
                    }
                }, on_approval_hook_deleted: function (t) {
                    this.deletingApprovalHook = t, this.deletingApprovalHookDialog = !0
                }, delete_approval_hook: function () {
                    var t = this;
                    if (this.selected_transition) {
                        var e = this.selected_transition.approvals.find((function (e) {
                            return e.id == t.deletingApprovalHook.transition_approval_id
                        }));
                        e && z.delete("/approval-hook/delete/".concat(this.deletingApprovalHook.id), (function (n) {
                            e.hooks = e.hooks.filter((function (e) {
                                return e.id != t.deletingApprovalHook.id
                            })), t._update_approval(t.selected_transition, e), t._update_transition(t.selected_transition), t.deletingApprovalHook = null, t.deletingApprovalHookDialog = !0, k("The approval hook is deleted", t.alert_timeout)
                        }))
                    }
                }, on_transition_selected: function (t) {
                    this.selected_transition = this.transitions.find((function (e) {
                        return e.id == t
                    })), this._update_query({selected_transition_id: JSON.stringify(t)})
                }, get_state_by: function (t) {
                    return this.states.find((function (e) {
                        return e.id == t
                    }))
                }, _update_transition: function (t) {
                    this.transitions = this.transitions.map((function (e) {
                        return e.id == t.id ? t : e
                    }))
                }, _update_approval: function (t, e) {
                    t.approvals = t.approvals.map((function (t) {
                        return t.id == e.id ? e : t
                    }))
                }, _update_query: function (t) {
                    var e = Ci({}, this.$route.query, {}, t), n = this;
                    Object.keys(e).some((function (t) {
                        return n.$route.query[t] != e[t]
                    })) && this.$router.push({query: e})
                }
            }
        }, Di = Si, Pi = Object(u["a"])(Di, ci, ui, !1, null, null, null), Ei = Pi.exports, $i = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("v-container", {attrs: {fluid: ""}}, [n("v-row", {
                attrs: {
                    justify: "center",
                    align: "center"
                }
            }, [n("v-col", {attrs: {justify: "center", align: "center"}}, [n("h1", [n("v-icon", {
                staticClass: "mb-2",
                staticStyle: {"font-size": "35px"}
            }, [t._v("mdi-label-variant-outline")]), t._v("??States\n      ")], 1)])], 1), n("v-row", {
                attrs: {
                    justify: "center",
                    align: "center"
                }
            }, [n("v-col", [n("v-data-table", {
                staticClass: "elevation-1",
                attrs: {headers: t.headers, items: t.items, "items-per-page": 10},
                scopedSlots: t._u([{
                    key: "item.action", fn: function (e) {
                        var i = e.item;
                        return [n("v-icon", {
                            staticClass: "mr-1",
                            attrs: {color: "warning", disabled: !t.has_delete_state_permission},
                            on: {
                                click: function (e) {
                                    return t.showDeletingDialog(i)
                                }
                            }
                        }, [t._v("mdi-delete")])]
                    }
                }])
            })], 1)], 1), this.deletingState ? n("v-dialog", {
                attrs: {"max-width": "50%"},
                model: {
                    value: t.deleteDialog, callback: function (e) {
                        t.deleteDialog = e
                    }, expression: "deleteDialog"
                }
            }, [n("v-card", [n("v-card-title", {staticClass: "headline"}, [t._v("\n        Delete state\n        "), n("v-chip", {
                staticClass: "white--text",
                attrs: {color: "primary"}
            }, [n("v-icon", {attrs: {left: ""}}, [t._v("mdi-label-variant")]), t._v("\n          " + t._s(t.deletingState.label) + "\n        ")], 1), t._v("?\n      ")], 1), n("v-card-actions", [n("div", {staticClass: "flex-grow-1"}), n("v-btn", {
                attrs: {
                    large: "",
                    color: "primary"
                }, on: {
                    click: function (e) {
                        t.deleteDialog = !1
                    }
                }
            }, [t._v("Close")]), n("v-btn", {
                attrs: {large: "", color: "warning"}, on: {
                    click: function (e) {
                        return t.deleteState()
                    }
                }
            }, [t._v("Agree")])], 1)], 1)], 1) : t._e()], 1)
        }, Ti = [], Hi = {
            name: "ListStatePage", data: function () {
                return {
                    deletingState: null,
                    deleteDialog: !1,
                    headers: [{text: "Slug", value: "slug", align: "left"}, {
                        text: "Label",
                        value: "label",
                        align: "left"
                    }, {text: "Actions", value: "action", sortable: !1}],
                    items: [],
                    has_delete_state_permission: !1
                }
            }, mounted: function () {
                this.fetchStates()
            }, methods: {
                fetchStates: function () {
                    var t = this, e = z.get("/state/list/", (function (e) {
                        t.items = e.data
                    })), n = V.has_delete_permission(R, (function (e) {
                        t.has_delete_state_permission = e
                    }));
                    Promise.all([e, n]).then((function () {
                        return t.initialized = !0
                    }))
                }, showDeletingDialog: function (t) {
                    this.deletingState = t, this.deleteDialog = !0
                }, deleteState: function () {
                    var t = this;
                    this.deletingState && z.delete("/state/delete/".concat(this.deletingState.id, "/"), (function () {
                        t.fetchStates(), t.deleteDialog = !1, k("State '".concat(t.deletingState.label, "' is deleted"))
                    }))
                }
            }
        }, Ai = Hi, Wi = (n("e709"), Object(u["a"])(Ai, $i, Ti, !1, null, null, null)), zi = Wi.exports;
        P.commit("initialiseStore"), i["default"].use(at["a"]);
        var qi = new at["a"]({
            routes: [{
                path: "/login",
                name: "login",
                component: dt,
                meta: {layout: "NotLoggedInLayout", allowGuest: !0}
            }, {path: "/", name: "home", component: Lt}, {
                path: "/workflows",
                name: "list-workflows",
                component: Lt
            }, {
                path: "/workflow/view/:id",
                name: "view-workflow",
                component: gn,
                props: {readonly: !0}
            }, {path: "/workflows/create", name: "create-workflow", component: ne}, {
                path: "/workflow/edit/:id",
                name: "edit-workflow",
                component: be,
                props: {readonly: !1}
            }, {
                path: "/workflow/edit/rules/:id",
                name: "edit-workflow-rules",
                component: gn,
                props: {readonly: !1}
            }, {
                path: "/callback-functions",
                name: "list-callback-functions",
                component: Cn
            }, {
                path: "/callback-functions/create",
                name: "create-callback-function",
                component: Rn
            }, {
                path: "/callback-functions/view/:id",
                name: "view-callback-function",
                component: Bn
            }, {
                path: "/callback-functions/edit/:id",
                name: "edit-callback-function",
                component: ti
            }, {
                path: "/workflow-object/:workflow_id",
                name: "list-workflow-objects",
                component: li
            }, {
                path: "/workflow-object/timeline/edit/:workflow_id/:object_id",
                name: "edit-workflow-object-timeline",
                component: Ei
            }, {
                path: "/workflow-object/timeline/view/:workflow_id/:object_id",
                name: "view-workflow-object-timeline",
                component: Ei,
                props: {readonly: !0}
            }, {path: "/states", name: "list-states", component: zi}]
        });
        qi.beforeEach((function (t, e, n) {
            var i = P.state.user.token;
            t.matched.some((function (t) {
                return t.meta.allowGuest
            })) ? null != i && "login" == t.name ? n({name: "home"}) : n() : null != i ? V.has_view_permission(I, (function (t) {
                t ? n() : (w(["You must have the permission to view the workflows!"], 1e4), b())
            })) : n({name: "login", params: {nextUrl: t.fullPath}})
        }));
        var Li = qi;
        i["default"].config.productionTip = !1, new i["default"]({
            store: P,
            router: Li,
            vuetify: ot,
            render: function (t) {
                return t(tt)
            }
        }).$mount("#app")
    }, "2af9": function (t, e, n) {
        "use strict";
        var i = n("66f5"), o = n.n(i);
        o.a
    }, 4544: function (t, e, n) {
    }, "5a6f": function (t, e, n) {
        "use strict";
        var i = n("c7be"), o = n.n(i);
        o.a
    }, "5e44": function (t, e, n) {
    }, "5e69": function (t, e, n) {
        "use strict";
        var i = n("f8f4"), o = n.n(i);
        o.a
    }, "66f5": function (t, e, n) {
    }, "6d29": function (t, e, n) {
        "use strict";
        var i = n("beeb"), o = n.n(i);
        o.a
    }, 7262: function (t, e, n) {
    }, "7b33": function (t, e, n) {
    }, "86de": function (t, e, n) {
        "use strict";
        var i = n("5e44"), o = n.n(i);
        o.a
    }, "98dc": function (t, e, n) {
    }, a47f: function (t, e, n) {
    }, ad44: function (t, e, n) {
        "use strict";
        var i = n("98dc"), o = n.n(i);
        o.a
    }, b9fa: function (t, e, n) {
    }, beeb: function (t, e, n) {
    }, c391: function (t, e, n) {
        "use strict";
        var i = n("a47f"), o = n.n(i);
        o.a
    }, c7be: function (t, e, n) {
    }, d21c: function (t, e, n) {
        "use strict";
        var i = n("b9fa"), o = n.n(i);
        o.a
    }, daf8: function (t, e, n) {
        "use strict";
        var i = n("7262"), o = n.n(i);
        o.a
    }, e4a5: function (t, e, n) {
        "use strict";
        var i = n("7b33"), o = n.n(i);
        o.a
    }, e709: function (t, e, n) {
        "use strict";
        var i = n("4544"), o = n.n(i);
        o.a
    }, f3e5: function (t, e, n) {
        t.exports = n.p + "/static/img/Badge.png"
    }, f8f4: function (t, e, n) {
    }
});
//# sourceMappingURL=app.7fa0d485.js.map
