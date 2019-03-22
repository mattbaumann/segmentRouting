---
title: NETCONF API
lang: en-us
---

# NETCONF API

The NETCONF API is the public standard born 2006 from the Cisco *IOS XR XML API* vendor specific API. It uses the following Stack:

| Technology | Action     | Data                                     |
| ---------- | ---------- | ---------------------------------------- |
| YANG       | Content    | YANG Data, `<data>`                      |
| NETCONF    | Operations | `<get>`, `<get-config>`, `<edit-config>` |
| NETCONF    | Messages   | RPC                                      |
| SSH        | Transport  | SSH - TLS - TCP                          |



## Enable NETCONF

See [Netconf Config Guide](https://www.cisco.com/c/en/us/td/docs/routers/asr9000/software/data-models/guide/b-data-models-config-guide-asr9000/b-data-odels-config-guide-asr9000_chapter_01.html)

## ncclient

*ncclient* is a python library for connecting to a router over the NETCONF protocol. 

```python
from device_info import ios_xe1
from ncclient import manager

with manager.connect(host=ios_xe1["address"], port=ios_xe1["port"], username=ios_xe1["username"], password=ios_xe1["password"], hostkey_verify=False) as m:
    print("NETCONF capabilities")
    for capability in m.server_capabilities:
        print(capability)
```

This code can be used to read the router's interface list:

```python
from device_info import ios_xe1
from ncclient import manager

# The filter to remove unwanted capabilites
netconf_filter = open('filter-ietf-interfaces.xml').read()

with manager.connect(host=ios_xe1["address"], port=ios_xe1["port"], username=ios_xe1["username"], password=ios_xe1["password"], hostkey_verify=False) as m:
    print("NETCONF capabilities")
    
    # Read device configuration and state info for the interfaces 
   	netconf_reply = m.get(netconf_filter)
       
    intf_details = xmltodict.parse(netconf_reply.xml)['rpc-reply']['data']
    intf_config = intf_details['interfaces']['interface']
    intf_info = intf_details['interfaces-state']['interface']
    
    print("...")
```

