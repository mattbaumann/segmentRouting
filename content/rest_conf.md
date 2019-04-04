---
title: RESTCONF API
lang: en-us

---

# RESTCONF API

## Overview
RESTCONF is a REST like protocol running over HTTP for accessing data defined in YANG using datastores defined in NETCONF. It describes how to map a YANG specification to a RESTful interface.
The RESTCONF protocol operates on a conceptual datastore defined with the YANG data modeling language. The server lists each YANG module it supports under “/restconf/modules” in the top-level API resource type, using a structure based on the YANG module capability URI format.

## RESTCONF Root Resource

* A RESTCONF device determines the root of the RESTCONF API through the link element: ```/.well-known/host-meta``` resource that contains the RESTCONF attribute.
* The RESTCONF device uses the restconf api root resource as the initial part of the path in the request URI.

### Example
Example returning /restconf:

```
   The client might send the following:

      GET /.well-known/host-meta HTTP/1.1
      Host: example.com
      Accept: application/xrd+xml

   The server might respond as follows:

      HTTP/1.1 200 OK
      Content-Type: application/xrd+xml
      Content-Length: nnn

      <XRD xmlns='http://docs.oasis-open.org/ns/xri/xrd-1.0'>
          <Link rel='restconf' href='/restconf'/>
      </XRD>
```

Example of URIs:
* GigabitEthernet0/0/2 - http://10.104.50.97/restconf/data/Cisco-IOS-XE-native:native/interface/GigabitEthernet=0%2F0%2F2
* fields=name – http://10.104.50.97/restconf/data/Cisco-IOS-XE-native:native/interface/GigabitEthernet=0%2F0%2F2?fields=name
* depth=1 - https://10.85.116.59:443/restconf/data/Cisco-IOS-XE-native:native/interface/GigabitEthernet?depth=1
* Name and IP - https://10.85.116.59:443/restconf/data/Cisco-IOS-XE-native:native/interface?fields=GigabitEthernet/ip/address/primary;name
* MTU (fields) - https://10.104.50.97/restconf/data/Cisco-IOS-XE-native:native/interface?fields=GigabitEthernet(mtu)
* MTU - https://10.85.116.59:443/restconf/data/Cisco-IOS-XE-native:native/interface/GigabitEthernet=3/mtu
* Port-Channel - https://10.85.116.59:443/restconf/data/Cisco-IOS-XE-native:native/interface/Port-channel

See [RESTCONF DOKU](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/prog/configuration/166/b_166_programmability_cg/restconf_prog_int.html)

And under [Restconf Guide](/segmentRouting/guides/restconf_programmable_interface.pdf) is a complete guide over RESTCONF.