---
title: Challenge Project Segment Routing
lang: en-US
---

# Challenge Project Segment Routing

This documentation can be viewed with [VuePress](https://vuepress.vuejs.org) or under the [public website](https://mattbaumann.github.io/segmentRouting/).

## Open Questions
* [ ] Where can we test our routes?
* [ ] At which address are the routers?
* [ ] Is there a space in the lab for ous?
* [ ] We logged in server (sr-000035) and it was an empty ubuntu server? What do we need to do with it? I expected cisco software in order to have a web-gui to manage the network?

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

Die erste Aufgabenstellung ist diesen Command aus Aufgabenstellung 10 zum laufen zu bringen:

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
