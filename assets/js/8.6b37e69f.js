(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{175:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("RESTCONF is a REST like protocol running over HTTP for accessing data defined in YANG using datastores defined in NETCONF. It describes how to map a YANG specification to a RESTful interface.\nThe RESTCONF protocol operates on a conceptual datastore defined with the YANG data modeling language. The server lists each YANG module it supports under “/restconf/modules” in the top-level API resource type, using a structure based on the YANG module capability URI format.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("Example returning /restconf:")]),e._v(" "),e._m(5),n("p",[e._v("Example of URIs:")]),e._v(" "),e._m(6),e._v(" "),n("p",[e._v("See "),n("a",{attrs:{href:"https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/prog/configuration/166/b_166_programmability_cg/restconf_prog_int.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("RESTCONF DOKU"),n("OutboundLink")],1)]),e._v(" "),e._m(7)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"restconf-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restconf-api","aria-hidden":"true"}},[this._v("#")]),this._v(" RESTCONF API")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"restconf-root-resource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restconf-root-resource","aria-hidden":"true"}},[this._v("#")]),this._v(" RESTCONF Root Resource")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("A RESTCONF device determines the root of the RESTCONF API through the link element: "),t("code",[this._v("/.well-known/host-meta")]),this._v(" resource that contains the RESTCONF attribute.")]),this._v(" "),t("li",[this._v("The RESTCONF device uses the restconf api root resource as the initial part of the path in the request URI.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("   The client might send the following:\n\n      GET /.well-known/host-meta HTTP/1.1\n      Host: example.com\n      Accept: application/xrd+xml\n\n   The server might respond as follows:\n\n      HTTP/1.1 200 OK\n      Content-Type: application/xrd+xml\n      Content-Length: nnn\n\n      <XRD xmlns='http://docs.oasis-open.org/ns/xri/xrd-1.0'>\n          <Link rel='restconf' href='/restconf'/>\n      </XRD>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("GigabitEthernet0/0/2 - http://10.104.50.97/restconf/data/Cisco-IOS-XE-native:native/interface/GigabitEthernet=0%2F0%2F2")]),e._v(" "),n("li",[e._v("fields=name – http://10.104.50.97/restconf/data/Cisco-IOS-XE-native:native/interface/GigabitEthernet=0%2F0%2F2?fields=name")]),e._v(" "),n("li",[e._v("depth=1 - https://10.85.116.59:443/restconf/data/Cisco-IOS-XE-native:native/interface/GigabitEthernet?depth=1")]),e._v(" "),n("li",[e._v("Name and IP - https://10.85.116.59:443/restconf/data/Cisco-IOS-XE-native:native/interface?fields=GigabitEthernet/ip/address/primary;name")]),e._v(" "),n("li",[e._v("MTU (fields) - https://10.104.50.97/restconf/data/Cisco-IOS-XE-native:native/interface?fields=GigabitEthernet(mtu)")]),e._v(" "),n("li",[e._v("MTU - https://10.85.116.59:443/restconf/data/Cisco-IOS-XE-native:native/interface/GigabitEthernet=3/mtu")]),e._v(" "),n("li",[e._v("Port-Channel - https://10.85.116.59:443/restconf/data/Cisco-IOS-XE-native:native/interface/Port-channel")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("And under "),t("a",{attrs:{href:"/segmentRouting/guides/restconf_programmable_interface.pdf"}},[this._v("Restconf Guide")]),this._v(" is a complete guide over RESTCONF.")])}],!1,null,null,null);t.default=a.exports}}]);