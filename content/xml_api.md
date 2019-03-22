---
title: Legacy XML API
lang: en-US
---

# Legacy XML API

Cisco introduced the legacy  *IOS XR XML API* upon customer demand. Larger customers automated configuration tasks with sell scripts. Unfortunately, the API contains many vendor-specific, undocumented commands and queries.

This API was the first automation concept introduced back in 2005. As it is the first attempt to a complex problem, it has a few drawbacks:

* Vendor-specific
* Undocumented and complicated API
* Customer-specific, no generality

The [Cisco IOS XR XML API Guide](/guides/XRXMLAPIGuide.pdf) explains the details of the API Standard.

## API

The requests and responses are written in custom XML standard. It is *no industry standard* like SOAP (Simple Object Access Protocol). As transport protocols the router supports either XML over *Telnet/SSH* or *CORBA*. 

A sample request may look like: (Content from Cisco XML API Overview Document)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Request MajorVersion=”1” MinorVersion=”0”>
<Operation>
.
.
.
Operation-specific content goes here
.
.
.
</Operation>
</Request>
```

And a response:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response MajorVersion=”1” MinorVersion=”0”>
<Operation>
.
.
.
Operation response data returned here
.
.
.
</Operation>
</Response>
```

The operation tag contains the actual operation command.

## pyiosxr

Activate the XML API on the target device:

```shell
xml agent tty iteration off
```

Then you can use [pyiosxr](https://github.com/fooelisa/pyiosxr) to configure the router by connecting to it and unlocking it's *running configuration*:

```python
from pyIOSXR import IOSXR
device = IOSXR(hostname='lab001', username='ejasinska', password='passwd', port=22, timeout=120)
device.open()
```

 The device object can be used to upload a newer configuration:

```python
device.load_candidate_config(filename='unit/test/config.txt')
```

Or print a diff of a local and running configuration after the local configuration was loaded above:

```python
device.compare_config()
```

The following command prints the running configuration of the router:

```python
device.get_candidate_config(merge=False, formal=False)
```

PyIOSXR allows also to read out show commands by calling `device.show_...` commands:

```python
device.show_interfaces()
```

