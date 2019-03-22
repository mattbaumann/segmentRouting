(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{172:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("This API was the first automation concept introduced back in 2005. As it is the first attempt to a complex problem, it has a few drawbacks:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("A sample request may look like: (Content from Cisco XML API Overview Document)")]),t._v(" "),t._m(6),a("p",[t._v("And a response:")]),t._v(" "),t._m(7),a("p",[t._v("The operation tag contains the actual operation command.")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Activate the XML API on the target device:")]),t._v(" "),t._m(9),a("p",[t._v("Then you can use "),a("a",{attrs:{href:"https://github.com/fooelisa/pyiosxr",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyiosxr"),a("OutboundLink")],1),t._v(" to configure the router by connecting to it and unlocking it's "),a("em",[t._v("running configuration")]),t._v(":")]),t._v(" "),t._m(10),a("p",[t._v("The device object can be used to upload a newer configuration:")]),t._v(" "),t._m(11),a("p",[t._v("Or print a diff of a local and running configuration after the local configuration was loaded above:")]),t._v(" "),t._m(12),a("p",[t._v("The following command prints the running configuration of the router:")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"legacy-xml-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacy-xml-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Legacy XML API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Cisco introduced the legacy  "),s("em",[this._v("IOS XR XML API")]),this._v(" upon customer demand. Larger customers automated configuration tasks with sell scripts. Unfortunately, the API contains many vendor-specific, undocumented commands and queries.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Vendor-specific")]),this._v(" "),s("li",[this._v("Undocumented and complicated API")]),this._v(" "),s("li",[this._v("Customer-specific, no generality")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("a",{attrs:{href:"/guides/XRXMLAPIGuide.pdf"}},[this._v("Cisco IOS XR XML API Guide")]),this._v(" explains the details of the API Standard.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The requests and responses are written in custom XML standard. It is "),s("em",[this._v("no industry standard")]),this._v(" like SOAP (Simple Object Access Protocol). As transport protocols the router supports either XML over "),s("em",[this._v("Telnet/SSH")]),this._v(" or "),s("em",[this._v("CORBA")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Request")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("MajorVersion")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("”1”")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("MinorVersion")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("”0”")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n.\n.\n.\nOperation-specific content goes here\n.\n.\n.\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Response")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("MajorVersion")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("”1”")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("MinorVersion")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("”0”")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n.\n.\n.\nOperation response data returned here\n.\n.\n.\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"pyiosxr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pyiosxr","aria-hidden":"true"}},[this._v("#")]),this._v(" pyiosxr")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[this._v("xml agent "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("tty")]),this._v(" iteration off\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyIOSXR "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" IOSXR\ndevice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" IOSXR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hostname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lab001'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ejasinska'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'passwd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndevice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_candidate_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unit/test/config.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[this._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),this._v("compare_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_candidate_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("merge"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" formal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("PyIOSXR allows also to read out show commands by calling "),s("code",[this._v("device.show_...")]),this._v(" commands:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[this._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),this._v("show_interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);