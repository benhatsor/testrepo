(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  [8102, 2840], {
    900993: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = t.InviteResolvingHeader = void 0;
      var n, r = function(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var a = S(t);
          if (a && a.has(e)) return a.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, l) : null;
              i && (i.get || i.set) ? Object.defineProperty(n, l, i) : n[l] = e[l]
            } n.default = e;
          a && a.set(e, n);
          return n
        }(a(667294)),
        l = a(536211),
        i = g(a(915574)),
        o = g(a(331119)),
        u = g(a(567186)),
        s = g(a(539563)),
        d = g(a(759027)),
        f = g(a(728429)),
        c = g(a(562475)),
        p = g(a(189950)),
        v = g(a(730977)),
        _ = a(72840),
        m = g(a(272544)),
        E = g(a(776360)),
        N = a(770348),
        I = a(485280),
        O = a(738681),
        y = g(a(247001)),
        T = g(a(110722));

      function g(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function S(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          a = new WeakMap;
        return (S = function(e) {
          return e ? a : t
        })(e)
      }

      function h(e, t, a, r) {
        n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var l = e && e.defaultProps,
          i = arguments.length - 3;
        if (t || 0 === i || (t = {
            children: void 0
          }), 1 === i) t.children = r;
        else if (i > 1) {
          for (var o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u + 3];
          t.children = o
        }
        if (t && l)
          for (var s in l) void 0 === t[s] && (t[s] = l[s]);
        else t || (t = l || {});
        return {
          $$typeof: n,
          type: e,
          key: void 0 === a ? null : "" + a,
          ref: null,
          props: t,
          _owner: null
        }
      }
      var A = function() {
        return h(r.Fragment, {}, void 0, h(_.Avatar, {
          src: null,
          size: _.Avatar.Sizes.DEPRECATED_SIZE_100,
          className: T.default.avatar
        }), h(_.SubTitle, {}, void 0, y.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN), h(_.Title, {
          className: T.default.inviteResolvingGuildName
        }, void 0, y.default.Messages.LOADING))
      };
      t.InviteResolvingHeader = A;
      A.displayName = "InviteResolvingHeader";
      var b = function(e) {
          var t = e.guild,
            a = e.user,
            n = e.application,
            r = e.compact;
          return null != n ? h(c.default, {
            className: T.default.appIcon,
            game: n,
            size: T.default.appIconSize
          }) : null != a ? h(_.Avatar, {
            src: null != a ? a.getAvatarURL(void 0, 80) : null,
            size: _.Avatar.Sizes.SIZE_80,
            className: r ? T.default.compactAvatar : T.default.avatar
          }) : null != t ? h(m.default, {
            mask: m.default.Masks.SQUIRCLE,
            width: 64,
            height: 64,
            className: T.default.guildIcon
          }, void 0, h(_.GuildIcon, {
            guild: t,
            size: _.GuildIcon.Sizes.LARGER,
            animate: !0
          })) : null
        },
        C = function(e) {
          var t, a = e.invite,
            n = e.disableUser,
            c = void 0 !== n && n,
            m = e.error,
            g = e.flatActivityCount,
            S = void 0 !== g && g,
            A = e.isRegister,
            C = void 0 !== A && A,
            R = (0, l.useStateFromStoresObject)([i.default, f.default], (function() {
              return {
                currentUser: f.default.getCurrentUser(),
                multiAccounts: i.default.getUsers()
              }
            })),
            M = R.currentUser,
            P = R.multiAccounts;
          if (null == a) return null;
          var D, w, L, U = null != a.guild ? new s.default(a.guild) : null,
            H = null != a.channel ? new u.default(a.channel) : null,
            z = null != a.target_application ? new o.default(a.target_application) : null,
            j = c || null == a.inviter ? null : new d.default(a.inviter),
            k = !(null != a.approximate_member_count && a.approximate_member_count > 100 || null != U && U.hasFeature(N.GuildFeatures.COMMUNITY)) && null != j,
            V = null,
            F = !1;
          if (null != U) {
            V = null == j ? y.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : y.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
              username: j.username
            });
            a.target_type === O.InviteTargetTypes.STREAM && null != a.target_user && (V = y.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
              username: a.target_user.username
            }));
            a.target_type === O.InviteTargetTypes.EMBEDDED_APPLICATION && null != a.target_application && (V = null != j ? y.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
              username: j.username
            }) : y.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY);
            k && null == z && (D = h(_.GuildIcon, {
              guild: U,
              size: _.GuildIcon.Sizes.SMALL
            }));
            w = U.name;
            if (null != z) {
              w = z.name;
              L = h("div", {}, void 0, h(_.SubTitle, {
                className: T.default.appIn
              }, void 0, y.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN), h("div", {
                className: T.default.guildContainer
              }, void 0, h(_.GuildIcon, {
                guild: U,
                size: _.GuildIcon.Sizes.SMALL
              }), h(E.default, {
                className: T.default.appGuildName,
                color: E.default.Colors.CUSTOM,
                tag: "span",
                size: E.default.Sizes.SIZE_24
              }, void 0, U.name)))
            }
          } else if (null != H) {
            if (null == j) throw new Error("no inviter in group DM invite");
            var x = j.username;
            if (null != H.name && "" !== H.name) {
              V = y.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: x
              });
              w = H.name;
              null != H.icon && (D = h(_.ChannelIcon, {
                channel: H,
                size: _.Avatar.Sizes.SIZE_32
              }))
            } else {
              V = y.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM;
              w = x
            }
          } else if (null != j) {
            w = y.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
              username: j.username
            });
            F = !0;
            L = m ? null : h(_.SubTitle, {
              className: T.default.directInviteSubTitle
            }, void 0, C ? y.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
              username: j.username + "#" + j.discriminator
            }) : y.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
              username: j.username + "#" + j.discriminator
            }))
          }
          return h("div", {
            className: T.default.container
          }, void 0, h(b, {
            application: z,
            guild: U,
            user: k ? j : null,
            compact: F
          }), m ? r.createElement(r.Fragment, null, h(_.SubTitle, {}, void 0, y.default.Messages.INVITE_MODAL_ERROR_TITLE), h(_.Title, {}, void 0, m)) : r.createElement(r.Fragment, null, h(_.SubTitle, {}, void 0, V), h(_.Title, {
            className: T.default.title
          }, void 0, null != U ? h(p.default, {
            guild: U,
            className: T.default.guildBadge,
            tooltipPosition: v.default.Positions.LEFT
          }) : null, D, w)), L, null != z || F || (null == a || null === (t = a.guild) || void 0 === t ? void 0 : t.id) === I.INVITE_ROUTING_HUB_GUILD_ID ? null : h(_.ActivityCount, {
            className: T.default.activityCount,
            online: a.approximate_presence_count,
            total: a.approximate_member_count,
            flat: S
          }), P.length > 1 ? h(_.JoiningAs, {
            user: M
          }) : null)
        };
      C.displayName = "InviteHeader";
      var R = C;
      t.default = R
    },
    538930: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = t.Sizes = void 0;
      var n = function(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var a = s(t);
          if (a && a.has(e)) return a.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, l) : null;
              i && (i.get || i.set) ? Object.defineProperty(n, l, i) : n[l] = e[l]
            } n.default = e;
          a && a.set(e, n);
          return n
        }(a(667294)),
        r = u(a(252566)),
        l = u(a(628551)),
        i = a(942675),
        o = ["user", "size", "animate", "aria-hidden"];

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          a = new WeakMap;
        return (s = function(e) {
          return e ? a : t
        })(e)
      }

      function d() {
        d = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
          }
          return e
        };
        return d.apply(this, arguments)
      }

      function f(e, t, a, n) {
        return e.getAvatarURL(n, t, a)
      }
      var c = n.memo((function(e) {
        var t = e.user,
          a = e.size,
          u = void 0 === a ? l.default.Sizes.SIZE_32 : a,
          s = e.animate,
          c = void 0 !== s && s,
          p = e["aria-hidden"],
          v = void 0 !== p && p,
          _ = function(e, t) {
            if (null == e) return {};
            var a, n, r = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) {
              a = l[n];
              t.indexOf(a) >= 0 || (r[a] = e[a])
            }
            return r
          }(e, o),
          m = n.useContext(r.default);
        return n.createElement(l.default, d({
          src: f(t, i.SizeSpecs[u].size, c, m),
          size: u,
          "aria-label": v ? void 0 : t.username,
          "aria-hidden": v
        }, _))
      }));
      t.default = c;
      var p = l.default.Sizes;
      t.Sizes = p
    },
    485280: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.INVITE_ROUTING_HUB_GUILD_ID = t.HubEmailConnectionSteps = void 0;
      var a;
      t.HubEmailConnectionSteps = a;
      ! function(e) {
        e[e.STUDENT_PROMPT = 0] = "STUDENT_PROMPT";
        e[e.VALUE_PROPOSITION = 1] = "VALUE_PROPOSITION";
        e[e.VERIFY_EMAIL = 2] = "VERIFY_EMAIL";
        e[e.VERIFY_PIN = 3] = "VERIFY_PIN";
        e[e.SELECT_SCHOOL = 4] = "SELECT_SCHOOL";
        e[e.SELECT_SCHOOL_SEARCH = 5] = "SELECT_SCHOOL_SEARCH";
        e[e.SUBMIT_SCHOOL = 6] = "SUBMIT_SCHOOL";
        e[e.EMAIL_CONFIRMATION = 7] = "EMAIL_CONFIRMATION";
        e[e.EMAIL_WAITLIST = 8] = "EMAIL_WAITLIST"
      }(a || (t.HubEmailConnectionSteps = a = {}));
      t.INVITE_ROUTING_HUB_GUILD_ID = "884924873015689226"
    },
    947472: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = t.ChangePhoneReason = void 0;
      var n, r = a(47354),
        l = f(a(118915)),
        i = f(a(636602)),
        o = f(a(423046)),
        u = f(a(351772)),
        s = a(52656),
        d = a(770348);

      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function c(e, t, a, n, r, l, i) {
        try {
          var o = e[l](i),
            u = o.value
        } catch (e) {
          a(e);
          return
        }
        o.done ? t(u) : Promise.resolve(u).then(n, r)
      }
      t.ChangePhoneReason = n;
      ! function(e) {
        e.USER_ACTION_REQUIRED = "user_action_required";
        e.USER_SETTINGS_UPDATE = "user_settings_update";
        e.GUILD_PHONE_REQUIRED = "guild_phone_required";
        e.MFA_PHONE_UPDATE = "mfa_phone_update";
        e.CONTACT_SYNC = "contact_sync"
      }(n || (t.ChangePhoneReason = n = {}));
      var p = {
        setCountryCode: function(e) {
          i.default.dispatch({
            type: d.ActionTypes.PHONE_SET_COUNTRY_CODE,
            countryCode: e
          })
        },
        removePhone: function(e, t) {
          return l.default.delete({
            url: d.Endpoints.PHONE,
            body: {
              password: e,
              change_phone_reason: t
            },
            oldFormErrors: !0
          })
        },
        resendCode: function(e) {
          var t = {},
            a = o.default.getFingerprint();
          a && (t["X-Fingerprint"] = a);
          return l.default.post({
            url: d.Endpoints.RESEND_PHONE,
            headers: t,
            body: {
              phone: e
            }
          })
        },
        beginAddPhone: function(e, t, a) {
          return l.default.post({
            url: d.Endpoints.PHONE,
            body: {
              phone: e,
              captcha_key: a,
              change_phone_reason: t
            }
          })
        },
        addPhone: function(e, t, a) {
          return l.default.post({
            url: d.Endpoints.PHONE,
            body: {
              phone_token: e,
              password: t,
              change_phone_reason: a
            },
            oldFormErrors: !0
          })
        },
        addPhoneWithoutPassword: function(e) {
          return l.default.post({
            url: d.Endpoints.PHONE_VERIFY_NO_PASSWORD,
            body: {
              code: e
            }
          })
        },
        validatePhoneForSupport: function(e) {
          return l.default.post({
            url: d.Endpoints.VERIFY_PHONE_FOR_TICKET,
            body: {
              token: e
            },
            oldFormErrors: !0
          })
        },
        verifyPhone: function(e, t, a) {
          return (n = regeneratorRuntime.mark((function n() {
            var l, f, c;
            return regeneratorRuntime.wrap((function(n) {
              for (;;) switch (n.prev = n.next) {
                case 0:
                  void 0 === a && (a = !0);
                  l = {};
                  (f = o.default.getFingerprint()) && (l["X-Fingerprint"] = f);
                  n.next = 6;
                  return u.default.post({
                    url: d.Endpoints.VERIFY_PHONE,
                    headers: l,
                    body: {
                      phone: e,
                      code: t
                    },
                    oldFormErrors: !0,
                    trackedActionData: {
                      event: r.NetworkActionNames.USER_VERIFY_PHONE
                    }
                  });
                case 6:
                  c = n.sent;
                  a && i.default.dispatch({
                    type: d.ActionTypes.MODAL_POP,
                    key: s.PHONE_VERIFICATION_MODAL_KEY
                  });
                  return n.abrupt("return", c.body);
                case 9:
                case "end":
                  return n.stop()
              }
            }), n)
          })), function() {
            var e = this,
              t = arguments;
            return new Promise((function(a, r) {
              var l = n.apply(e, t);

              function i(e) {
                c(l, a, r, i, o, "next", e)
              }

              function o(e) {
                c(l, a, r, i, o, "throw", e)
              }
              i(void 0)
            }))
          })();
          var n
        }
      };
      t.default = p
    },
    52656: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.PHONE_VERIFICATION_MODAL_KEY = t.PHONE_VERIFICATION_CODE_NUM_DIGITS = t.PHONE_DEFAULT_COUNTRY_CODE_NAME = void 0;
      t.PHONE_DEFAULT_COUNTRY_CODE_NAME = "United States";
      t.PHONE_VERIFICATION_MODAL_KEY = "PHONE_VERIFICATION_MODAL_KEY";
      t.PHONE_VERIFICATION_CODE_NUM_DIGITS = 6
    },
    72840: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.ActivityCount = void 0;
      t.AuthBoxFooter = G;
      t.default = t.Title = t.SubTitle = t.SubText = t.JoiningAs = t.Input = t.IncompatibleBrowser = t.Image = t.GuildIcon = t.ChannelIcon = t.Button = t.Block = t.Avatar = t.AuthSpinner = void 0;
      var n, r = function(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var a = h(t);
          if (a && a.has(e)) return a.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, l) : null;
              i && (i.get || i.set) ? Object.defineProperty(n, l, i) : n[l] = e[l]
            } n.default = e;
          a && a.set(e, n);
          return n
        }(a(667294)),
        l = S(a(294184)),
        i = a(460784),
        o = S(a(956117)),
        u = S(a(530250)),
        s = S(a(380439)),
        d = S(a(279950)),
        f = S(a(510596)),
        c = S(a(37241)),
        p = S(a(962314)),
        v = S(a(628551)),
        _ = S(a(971639)),
        m = S(a(776360)),
        E = a(642901),
        N = S(a(550270)),
        I = a(518802),
        O = a(770348),
        y = S(a(247001)),
        T = S(a(725485)),
        g = ["className"];

      function S(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          a = new WeakMap;
        return (h = function(e) {
          return e ? a : t
        })(e)
      }

      function A() {
        A = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
          }
          return e
        };
        return A.apply(this, arguments)
      }

      function b(e, t, a, r) {
        n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var l = e && e.defaultProps,
          i = arguments.length - 3;
        if (t || 0 === i || (t = {
            children: void 0
          }), 1 === i) t.children = r;
        else if (i > 1) {
          for (var o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u + 3];
          t.children = o
        }
        if (t && l)
          for (var s in l) void 0 === t[s] && (t[s] = l[s]);
        else t || (t = l || {});
        return {
          $$typeof: n,
          type: e,
          key: void 0 === a ? null : "" + a,
          ref: null,
          props: t,
          _owner: null
        }
      }
      var C = v.default;
      null == C && (C = function() {
        return null
      });
      var R = function(e) {
        var t = e.className,
          a = e.id,
          n = e.children;
        return b(_.default, {
          size: m.default.Sizes.SIZE_24,
          color: m.default.Colors.HEADER_PRIMARY,
          className: (0, l.default)(T.default.title, t),
          id: a
        }, void 0, n)
      };
      t.Title = R;
      R.displayName = "Title";
      var M = function(e) {
        var t = e.className,
          a = e.children;
        return b(m.default, {
          size: m.default.Sizes.SIZE_16,
          color: m.default.Colors.HEADER_SECONDARY,
          className: t
        }, void 0, a)
      };
      t.SubTitle = M;
      M.displayName = "SubTitle";
      var P = function(e) {
        var t = e.className;
        return b("img", {
          alt: "",
          src: e.src,
          className: (0, l.default)(T.default.image, t)
        })
      };
      t.Image = P;
      P.displayName = "Image";
      var D = function(e) {
        var t, a = e.className,
          n = function(e, t) {
            if (null == e) return {};
            var a, n, r = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) {
              a = l[n];
              t.indexOf(a) >= 0 || (r[a] = e[a])
            }
            return r
          }(e, g),
          i = n.look === o.default.Looks.LINK;
        return r.createElement(o.default, A({
          size: i ? o.default.Sizes.MIN : o.default.Sizes.LARGE,
          fullWidth: !i,
          className: (0, l.default)(a, (t = {}, t[T.default.button] = !i, t[T.default.linkButton] = i, t))
        }, n))
      };
      t.Button = D;
      D.displayName = "Button";
      D.Looks = o.default.Looks;
      D.Colors = o.default.Colors;
      D.Sizes = o.default.Sizes;
      var w = function(e) {
        var t = e.className,
          a = e.src,
          n = e.size;
        return b(C, {
          src: a,
          size: n,
          className: (0, l.default)(T.default.inviteLargeIcon, t),
          "aria-hidden": !0
        })
      };
      t.Avatar = w;
      w.displayName = "Avatar";
      w.Sizes = C.Sizes;
      var L = function(e) {
        var t = e.guild,
          a = e.size,
          n = e.animate,
          r = void 0 !== n && n;
        return b(s.default, {
          active: !0,
          guild: t,
          size: a,
          animate: r
        })
      };
      t.GuildIcon = L;
      L.displayName = "GuildIcon";
      L.Sizes = s.default.Sizes;
      var U = function(e) {
        var t = e.className,
          a = e.channel,
          n = e.size;
        return b(C, {
          src: (0, i.getChannelIconURL)(a),
          size: n,
          className: (0, l.default)(T.default.inviteIcon, t),
          "aria-hidden": !0
        })
      };
      t.ChannelIcon = U;
      U.displayName = "ChannelIcon";
      U.Sizes = C.Sizes;
      var H = function(e) {
        var t, a = e.label,
          n = e.error,
          r = e.placeholder,
          i = e.value,
          o = e.className,
          u = e.inputClassName,
          s = e.setRef,
          p = e.type,
          v = void 0 === p ? "text" : p,
          _ = e.onChange,
          m = e.autoComplete,
          E = e.autoFocus,
          N = e.maxLength,
          I = e.spellCheck,
          O = e.name,
          y = e.description,
          g = e.required;
        return b(f.default, {
          title: a,
          error: n,
          className: o,
          required: g
        }, void 0, b(d.default, {
          name: O,
          type: v,
          value: i,
          inputRef: s,
          placeholder: r,
          className: T.default.input,
          inputClassName: (0, l.default)(u, (t = {}, t[T.default.inputError] = null != n, t)),
          "aria-label": a,
          onChange: _,
          autoComplete: m,
          autoFocus: E,
          maxLength: N,
          spellCheck: I
        }), null != y ? b(c.default, {
          type: c.default.Types.DESCRIPTION,
          className: T.default.description
        }, void 0, y) : null)
      };
      t.Input = H;
      H.displayName = "Input";
      var z = function(e) {
        var t = e.className,
          a = e.children;
        return b("div", {
          className: (0, l.default)(T.default.block, t)
        }, void 0, a)
      };
      t.Block = z;
      z.displayName = "Block";
      var j = function(e) {
        var t = e.className,
          a = e.children;
        return b(m.default, {
          size: m.default.Sizes.SIZE_12,
          className: (0, l.default)(T.default.subText, t)
        }, void 0, a)
      };
      t.SubText = j;
      j.displayName = "SubText";
      var k = function(e) {
        var t = e.className;
        return b(u.default, {
          direction: u.default.Direction.VERTICAL,
          align: u.default.Align.CENTER,
          className: t
        }, void 0, b(p.default, {
          className: T.default.spinnerVideo
        }))
      };
      t.AuthSpinner = k;
      k.displayName = "AuthSpinner";
      var V = function(e) {
        var t, a = e.online,
          n = e.total,
          r = e.className,
          i = e.flat,
          o = e.textClassName;
        if (null == n) return null;
        null != a && a > 0 && (t = b("div", {
          className: (0, l.default)(T.default.pill, T.default.pillOnline, i && T.default.pillFlat)
        }, void 0, b("i", {
          className: T.default.pillIconOnline
        }), b(m.default, {
          tag: "span",
          className: (0, l.default)(T.default.pillMessage, o)
        }, void 0, y.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: a
        }))));
        return b(u.default, {
          justify: u.default.Justify.CENTER,
          className: r
        }, void 0, t, b("div", {
          className: (0, l.default)(T.default.pill, i && T.default.pillFlat)
        }, void 0, b("i", {
          className: T.default.pillIconTotal
        }), b(m.default, {
          tag: "span",
          className: (0, l.default)(T.default.pillMessage, o)
        }, void 0, y.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
          count: n
        }))))
      };
      t.ActivityCount = V;
      V.displayName = "ActivityCount";
      var F = function(e) {
        var t = e.user;
        return null == t ? null : b("div", {
          className: T.default.joiningAs
        }, void 0, b(m.default, {
          tag: "span",
          size: m.default.Sizes.SIZE_16,
          color: m.default.Colors.HEADER_SECONDARY
        }, void 0, y.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS), b(w, {
          className: T.default.joiningAsAvatar,
          src: t.getAvatarURL(void 0, 24),
          size: w.Sizes.SIZE_24,
          "aria-label": t.username
        }), b(m.default, {
          className: T.default.joiningAsUsername,
          tag: "span",
          size: m.default.Sizes.SIZE_16,
          color: m.default.Colors.HEADER_PRIMARY,
          strong: !0
        }, void 0, t.username))
      };
      t.JoiningAs = F;
      F.displayName = "JoiningAs";
      var x = function(e) {
        var t = e.className;
        return b(z, {
          className: t
        }, void 0, b(D, {
          onClick: function() {
            return window.open((0, E.getCurrentPlatformDownloadURL)())
          }
        }, void 0, y.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
          platform: (0, E.getPlatformReadableName)()
        })), b(j, {
          className: T.default.downloadButtonSubtext
        }, void 0, y.default.Messages.INCOMPATIBLE_BROWSER.format({
          supportedBrowserURL: N.default.getArticleURL(O.HelpdeskArticles.SUPPORTED_BROWSERS)
        })))
      };
      t.IncompatibleBrowser = x;
      x.displayName = "IncompatibleBrowser";
      var B = function(e) {
        var t = e.className,
          a = e.contentClassName,
          n = e.tag,
          r = void 0 === n ? "section" : n,
          i = e.onSubmit,
          o = e.children,
          u = e.expanded,
          s = void 0 !== u && u,
          d = e.theme,
          f = void 0 === d ? O.ThemeTypes.DARK : d,
          c = e.mobileBanner,
          p = e.style;
        return null != c ? b(r, {
          onSubmit: i,
          className: (0, l.default)(T.default.authBoxWithMobileBanner, (0, I.getThemeClass)(f), t),
          style: p
        }, void 0, b("div", {
          className: T.default.mobileBannerLogo
        }), b("div", {
          className: T.default.mobileBanner
        }, void 0, b("img", {
          src: c,
          alt: ""
        })), o) : b(r, {
          onSubmit: i,
          style: p,
          className: (0, l.default)(s ? T.default.authBoxExpanded : T.default.authBox, (0, I.getThemeClass)(f), t)
        }, void 0, b("div", {
          className: (0, l.default)(T.default.centeringWrapper, a)
        }, void 0, o))
      };
      B.displayName = "AuthBox";

      function G(e) {
        var t, a, n, r;
        return b(u.default, {
          grow: 0,
          shrink: 0,
          direction: null !== (t = e.direction) && void 0 !== t ? t : u.default.Direction.HORIZONTAL_REVERSE,
          justify: null !== (a = e.justify) && void 0 !== a ? a : u.default.Justify.START,
          align: null !== (n = e.align) && void 0 !== n ? n : u.default.Align.STRETCH,
          wrap: null !== (r = e.wrap) && void 0 !== r ? r : u.default.Wrap.NO_WRAP,
          className: (0, l.default)(T.default.footer, e.className)
        }, void 0, e.children)
      }
      G.displayName = "AuthBoxFooter";
      var Y = B;
      t.default = Y
    },
    775803: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = f;
      var n, r, l = function(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var a = u(t);
          if (a && a.has(e)) return a.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, l) : null;
              i && (i.get || i.set) ? Object.defineProperty(n, l, i) : n[l] = e[l]
            } n.default = e;
          a && a.set(e, n);
          return n
        }(a(667294)),
        i = (n = a(468205)) && n.__esModule ? n : {
          default: n
        },
        o = ["width", "height", "color", "foreground"];

      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          a = new WeakMap;
        return (u = function(e) {
          return e ? a : t
        })(e)
      }

      function s() {
        s = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
          }
          return e
        };
        return s.apply(this, arguments)
      }

      function d(e, t, a, n) {
        r || (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var l = e && e.defaultProps,
          i = arguments.length - 3;
        if (t || 0 === i || (t = {
            children: void 0
          }), 1 === i) t.children = n;
        else if (i > 1) {
          for (var o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u + 3];
          t.children = o
        }
        if (t && l)
          for (var s in l) void 0 === t[s] && (t[s] = l[s]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === a ? null : "" + a,
          ref: null,
          props: t,
          _owner: null
        }
      }

      function f(e) {
        var t = e.width,
          a = void 0 === t ? 24 : t,
          n = e.height,
          r = void 0 === n ? 24 : n,
          u = e.color,
          f = void 0 === u ? "currentColor" : u,
          c = e.foreground,
          p = function(e, t) {
            if (null == e) return {};
            var a, n, r = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) {
              a = l[n];
              t.indexOf(a) >= 0 || (r[a] = e[a])
            }
            return r
          }(e, o);
        return l.createElement("svg", s({}, (0, i.default)(p), {
          width: a,
          height: r,
          viewBox: "0 0 24 24"
        }), d("path", {
          fill: f,
          className: c,
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
        }))
      }
      f.displayName = "OverflowMenuHorizontal"
    },
    962314: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.default = void 0;
      var n, r = function(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var a = I(t);
          if (a && a.has(e)) return a.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, l) : null;
              i && (i.get || i.set) ? Object.defineProperty(n, l, i) : n[l] = e[l]
            } n.default = e;
          a && a.set(e, n);
          return n
        }(a(667294)),
        l = a(836233),
        i = N(a(594050)),
        o = a(225630),
        u = N(a(745920)),
        s = N(a(894919)),
        d = N(a(865725)),
        f = a(770348),
        c = N(a(161693)),
        p = N(a(28743)),
        v = N(a(106632)),
        _ = N(a(858739)),
        m = N(a(172129)),
        E = N(a(243874));

      function N(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function I(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          a = new WeakMap;
        return (I = function(e) {
          return e ? a : t
        })(e)
      }

      function O(e, t, a, r) {
        n || (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
        var l = e && e.defaultProps,
          i = arguments.length - 3;
        if (t || 0 === i || (t = {
            children: void 0
          }), 1 === i) t.children = r;
        else if (i > 1) {
          for (var o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u + 3];
          t.children = o
        }
        if (t && l)
          for (var s in l) void 0 === t[s] && (t[s] = l[s]);
        else t || (t = l || {});
        return {
          $$typeof: n,
          type: e,
          key: void 0 === a ? null : "" + a,
          ref: null,
          props: t,
          _owner: null
        }
      }
      var y = O("source", {
          src: u.default,
          type: "video/mp4"
        }, "hevc"),
        T = O("source", {
          src: s.default,
          type: "video/mp4"
        }, "hevc"),
        g = function() {
          var e, t, a, n, r, l = (0, o.getChromeVersion)(),
            i = c.default,
            u = _.default,
            s = p.default,
            d = m.default,
            N = [O("source", {
              src: i,
              type: "video/mp4"
            }, "mp4"), O("img", {
              alt: "",
              src: s
            }, "png")],
            I = [O("source", {
              src: u,
              type: "video/mp4"
            }, "mp4"), O("img", {
              alt: "",
              src: d
            }, "png")];
          if (a = window.navigator, n = a.userAgent.toLowerCase(), r = null != (null === (t = a.mediaCapabilities) || void 0 === t ? void 0 : t.decodingInfo), -1 !== n.indexOf("safari") && -1 === n.indexOf("chrome") && -1 !== n.indexOf("version/") && r) {
            N.unshift(y);
            I.unshift(T)
          }
          if (l > 52 || -1 === l) {
            var g = v.default,
              S = E.default;
            N.unshift(O("source", {
              src: g,
              type: "video/webm"
            }, "webm"));
            I.unshift(O("source", {
              src: S,
              type: "video/webm"
            }, "webm"))
          }
          return (e = {})[f.ThemeTypes.DARK] = N, e[f.ThemeTypes.LIGHT] = I, e
        }(),
        S = function(e) {
          var t, a = e.loop,
            n = void 0 === a || a,
            o = e.autoPlay,
            u = void 0 === o || o,
            s = e.setRef,
            c = e.className,
            p = e.onReady,
            v = r.useContext(i.default),
            _ = r.useContext(l.AccessibilityPreferencesContext).reducedMotion;
          return r.createElement(d.default, {
            key: v,
            ref: s,
            onLoadedData: p,
            className: c,
            loop: !_.enabled && n,
            autoPlay: !_.enabled && u,
            playsInline: !0
          }, null !== (t = g[v]) && void 0 !== t ? t : g[f.ThemeTypes.DARK])
        };
      S.displayName = "AppSpinner";
      var h = S;
      t.default = h
    },
    745920: (e, t, a) => {
      e.exports = a.p + "2d889bf9114df188325d15f9e517c325.mov"
    },
    161693: (e, t, a) => {
      e.exports = a.p + "6d5b64b094944af6d52d895c8c2b8a59.mp4"
    },
    28743: (e, t, a) => {
      e.exports = a.p + "dff87c953f43b561d71fbcfe8a93a79a.png"
    },
    106632: (e, t, a) => {
      e.exports = a.p + "3b0d96ed8113994f3d139088726cfecd.webm"
    },
    894919: (e, t, a) => {
      e.exports = a.p + "d44a33e33f751afe9a0e5e42e2156d8f.mov"
    },
    858739: (e, t, a) => {
      e.exports = a.p + "90c2f45413660019fa25f4f9f40ecb5d.mp4"
    },
    172129: (e, t, a) => {
      e.exports = a.p + "61c5375ee8d8dbf35c109b06044394d8.png"
    },
    243874: (e, t, a) => {
      e.exports = a.p + "1eae6aab9a6b4e7da646db415479560b.webm"
    }
  }
]);
//# sourceMappingURL=0e50711d09d27f758728.js.map
