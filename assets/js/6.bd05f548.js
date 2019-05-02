(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{173:function(e,t,r){"use strict";r.r(t);var s=r(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("We received an Cisco IOS XR Router with no packages installed. In order to use NETCONF we need to install ssh on the target router.")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("The cisco XR Router console has four different input modes:")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("These input modes can be used over the following interfaces:")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("These modes are similar to XE routers. For more information see "),r("a",{attrs:{href:"https://www.cisco.com/c/en/us/td/docs/routers/crs/software/crs_r4-2/getting_started/configuration/guide/gs42crs/gs42pref.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cisco IOS XR Getting Started Guide for the Cisco CRS Router, Release 4.2.x"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://www.cisco.com/c/en/us/td/docs/routers/xr12000/software/xr12k_r3-9/system_management/command/reference/yr39xr12k_chapter5.html#wp1348203648",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuration Management Commands on Cisco IOS XR Software"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),r("p",[e._v("We followed the "),r("a",{attrs:{href:"https://www.cisco.com/c/en/us/td/docs/routers/crs/software/crs_r4-2/system_management/configuration/guide/b_sysman_cg42crs/b_sysman_cg42crs_chapter_010.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cisco Upgrading and Managing Cisco IOS XR Software Guide"),r("OutboundLink")],1),e._v(" in order to upgrade the missing components of the ssh system.")]),e._v(" "),r("p",[e._v("According to the guide we did initial preparations of the router operating system. The guide states, the next step in the process is to transfer the patch to the router filesystem with the "),r("code",[e._v("copy")]),e._v(" command. Unfortunately has the ftp client a software bug that prevented me from transfering the file onto the router. For more information see "),r("a",{attrs:{href:"https://webcache.googleusercontent.com/search?q=cache:HVHzl7wt89YJ:https://quickview.cloudapps.cisco.com/quickview/bug/CSCuy45191+&cd=1&hl=en&ct=clnk&gl=ch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cisco Bug CSCuy45191"),r("OutboundLink")],1),e._v(". The TFTP protocol seems not working over Cisco AnyConnect Software.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"package-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Package Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"cisco-xr-router-consoles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cisco-xr-router-consoles","aria-hidden":"true"}},[this._v("#")]),this._v(" Cisco XR Router Consoles")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("console (standard non-priviledged console)")]),this._v(" "),t("li",[this._v("enabled mode")]),this._v(" "),t("li",[this._v("admin mode, linux configuration")]),this._v(" "),t("li",[this._v("configuration terminal mode, router configuration")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("ssh (optional, missing at beginning)")]),this._v(" "),t("li",[this._v("telnet")]),this._v(" "),t("li",[this._v("console cable")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"console-and-enabled-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#console-and-enabled-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Console and enabled mode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"admin-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#admin-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" admin mode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"software-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#software-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Software installation")])}],!1,null,null,null);t.default=n.exports}}]);