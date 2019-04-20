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

```bash
ssh server v2
ssh server netconf
netconf agent tty
netconf-yang agent ssh
```

## ANX Advanced Netconf Explorer

To view the entire YANG structure the [Advanced NETCONF Explorer](https://github.com/cisco-ie/anx) generates the entire tree installed on the controller.

Address of the router: <IP>:830



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



## NETCONF Example

In this example, we will read the time from an IOS-XR Router.

```python
# import providers, services and models
from ydk.services import CRUDService
from ydk.providers import NetconfServiceProvider
from ydk.models.cisco_ios_xr import Cisco_IOS_XR_shellutil_oper as xr_shellutil_oper
from datetime import timedelta


if __name__ == "__main__":
   """Main execution path"""

   # create NETCONF session
   provider = NetconfServiceProvider(address="10.20.0.170",
                                     port=22,
                                     username="system",
                                     password="system",
                                     protocol="ssh")
   # create CRUD service
   crud = CRUDService()

   # create system time object
   system_time = xr_shellutil_oper.SystemTime()

   # read system time from device
   system_time = crud.read(provider, system_time)

   # print system uptime
   print("System uptime is " + str(timedelta(seconds=system_time.uptime.uptime)))
   print(str(system_time.clock.time_zone))

   exit()
```

If you want to get any information from a device using NETCONF/YANG, first visualize the YANG model using pyang. Then you just have to follow the tree to get the desired information. For example if you want t get the current uptime, execute `system_time.uptime.uptime`.