---
title: Challenge Project Segment Routing
lang: en-US
---

# Challenge Project Segment Routing

This documentation can be viewed with [VuePress](https://vuepress.vuejs.org) or under the [public website](https://mattbaumann.github.io/segmentRouting/).



## MPLS

The *Multi-Protocol Label Switching* protocol allows router to leverage the efficiency of switching with the feature-set of routing. MPLS is the *data plane* and uses BGP for the *control plane*(label and route distribution).

Underneath the MPLS overlay network needs to be a traditional network infrastructure. There needs to be a routing protocol and a transport protocol. This allows router that are not participating in MPLS to receive route updates. Obviously, route updates need to be transported via BGP and the traditional routing protocol.

## Segment Routing

![Segment Routing Example](./images/SegmentRouting.png)

*Segment Routing* enhances MPLS with a route controller. The controller may define MPLS routes for individual endpoints, applications, failures or priorities. Those rules are stored in the controller as *sr policy*. The controller sends BGP updates, to control the packet flows according to the policy, in real time. 

Our application is able to message with the controller over a RESTful HTTP protocol. The controller solves the real-time constraints of BGP and allows our application to focus on rule definition and analysis.

## Network

![Segment Routing Example](./images/SegmentRouting.png)

We control the *AS64002* with the XTC-C controller. 

*ISIS* is used as a routing protocol over the entire network. *AS64002* is separated in two ISIS routing areas. 

Over ISIS is an MPLS network overlay (data plane) with an BGP (control plane)  for label distribution. 

## REST Command

The first assignment is to get the following command from the document 10 running:

``` js
{
	"source": "10.10.10.10",
	"end-point": "5.5.5.5",
	"binding-sid": 902000,
	"color": 10,
	"preference": 100,
	"route-distinguisher": 2,
	"path-list": [{"label-stack": [16006, 16005], "weight": 1}]
}

```

## IOS XR 8 API

YANG-Models describe the API of a network device. This model can be used to validate a REST command against the specification.

::: warning
Even though a command is valid acording to the YANG model, does not mean that it is implemented in the software of a network controller.
:::

The [pyang python library](https://github.com/mbj4668/pyang) can be used to generate the backend-code from a YANG model.

To get the library use the following command:

```bash
pip install pyang
```

### IOS XR 8 Configuration

See the following [cisco XTC configuration guide](./guides/XTCConfiguration.pdf).

### Commands
``` bash
show segment-routing traffic-engineering policy
show isis neighbors
show pce association
show mpls forwarding-table
show cdp neighbors
```

Connection IP-Addresses: 
- 99.1.2.0/24
- 99.1.3.0/24

The *local label* is the label of the next router.

### PCEP

| Abbreviation | Meaning                        |
| ------------ | ------------------------------ |
| PCEP         | Path Computing Engine Protocol |
| PCC          | Path Computing Client          |
| PCE          | Path Computing Engine          |

PCEP uses the client server pattern.


