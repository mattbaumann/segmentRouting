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