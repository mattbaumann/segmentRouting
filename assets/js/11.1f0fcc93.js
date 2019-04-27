(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{178:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"xr-installation-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xr-installation-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" XR Installation Guide")]),e._v(" "),a("p",[e._v("To install a package on a Cisco IOS-XR Router, you have to run a TFTP Server. Add the desired package to the TFTP Server. To install the package on the Router, run the following command:")]),e._v(" "),a("p",[a("code",[e._v("install update source tftp://[IP]/ [Package to install]")])]),e._v(" "),a("p",[e._v("For example:\n"),a("code",[e._v("install update source tftp://152.96.9.93/ xrv9k-k9sec-3.1.0.0-r651.x86_64.rpm")])]),e._v(" "),a("p",[e._v("Do not try to install PIE packages. You have to RPM install the package.")]),e._v(" "),a("h2",{attrs:{id:"configure-ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-ssh","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure SSH")]),e._v(" "),a("ol",[a("li",[e._v("Verify that the k9sec PIE is installed\n"),a("code",[e._v("RP/0/RP0/CPU0:XTC-A# show install active | include k9")])]),e._v(" "),a("li",[e._v("Generate the key pairs\n"),a("code",[e._v("RP/0/RP0/CPU0:XTC-A# crypto key generate dsa")])]),e._v(" "),a("li",[e._v("Enable SSHv2 on the Router. Be sure to use config mode\n"),a("code",[e._v("RP/0/RP0/CPU0:XTC-A(config)#ssh server v2")])]),e._v(" "),a("li",[e._v("Commit changes\n"),a("code",[e._v("RP/0/RP0/CPU0:XTC-A(config)#commit")])])]),e._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("STOP")]),e._v(" "),a("p",[e._v("Do not try to reload the IOS XR Router, it will lose the k9sec package and you have to install it again...")])])])}],!1,null,null,null);t.default=s.exports}}]);