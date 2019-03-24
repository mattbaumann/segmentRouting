---
title: Package Installation
lang: en-us
---

# Package Installation

We received an Cisco IOS XR Router with no packages installed. In order to use NETCONF we need to install ssh on the target router.

## Cisco XR Router Consoles

The cisco XR Router console has four different input modes:

* console (standard non-priviledged console)
* enabled mode
* admin mode, linux configuration
* configuration terminal mode, router configuration

These input modes can be used over the following interfaces:

* ssh (optional, missing at beginning)
* telnet
* console cable

## Console and enabled mode

These modes are similar to XE routers. For more information see [Cisco IOS XR Getting Started Guide for the Cisco CRS Router, Release 4.2.x](https://www.cisco.com/c/en/us/td/docs/routers/crs/software/crs_r4-2/getting_started/configuration/guide/gs42crs/gs42pref.html) and [Configuration Management Commands on Cisco IOS XR Software](https://www.cisco.com/c/en/us/td/docs/routers/xr12000/software/xr12k_r3-9/system_management/command/reference/yr39xr12k_chapter5.html#wp1348203648).

## admin mode

## Software installation

We followed the [Cisco Upgrading and Managing Cisco IOS XR Software Guide](https://www.cisco.com/c/en/us/td/docs/routers/crs/software/crs_r4-2/system_management/configuration/guide/b_sysman_cg42crs/b_sysman_cg42crs_chapter_010.html) in order to upgrade the missing components of the ssh system. 

According to the guide we did initial preparations of the router operating system. The guide states, the next step in the process is to transfer the patch to the router filesystem with the `copy` command. Unfortunately has the ftp client a software bug that prevented me from transfering the file onto the router. For more information see [Cisco Bug CSCuy45191](https://webcache.googleusercontent.com/search?q=cache:HVHzl7wt89YJ:https://quickview.cloudapps.cisco.com/quickview/bug/CSCuy45191+&cd=1&hl=en&ct=clnk&gl=ch). The TFTP protocol seems not working over Cisco AnyConnect Software.

