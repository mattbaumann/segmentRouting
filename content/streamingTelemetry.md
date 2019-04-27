---
title: Streaming Telemetry
lang: en-us


---

# Streaming Telemetry

Cisco IOS XR Routers use *streaming telemetry* to capture, process and make operational data available to API Clients.

The streaming telemetry software only captures only the configured data sources based on the *operational* YANG Models. Those models are defined in the [YANG Model Repository](https://github.com/YangModels/yang) with the suffix *oper* in the filename.

::: danger

The streaming telemetry server needs a lot of router memory. Our measurements have shown that the free memory *before* the activation must be at least 10 GB. Otherwise, you may render your router unoperational. Our testing has shown that the router will not be configurable (use `commit force` to override and resolve situation if memory depletion occures).

:::

## Configuring Streaming Telemetry

```
telemetry model-driven
	destination-group StreamingReceiverGroup ! Any name
		vrf TEST-VRF
		address-family ipv4 10.20.0.10 port 5432
		encoding json ! or gson
		protocol udp ! or tcp, grpc
		!
	!
sensor-group InternalDataAquisitionSensorGroup ! Any name
	sensor-path: Cisco-IOS-XR-segment-routing-ms-oper:srms ! YANG path
	!
subscription Subscription1
	sensor-group-id InternalDataAquisitionSensorGroup sample-interval 300000 ! ms
	destination-id StreamingReceiverGroup
	!
```

`sh telemetry model-driven sensor-group InternalDataAquisitionSensorGroup` should now return all sensors and whether they are resolved.

::: info

You must wait at least the duration of `sample-interval` until the sensor-paths are resolved. Obviously, the sensors are accessed after the first sample interval terminated. After the first access, the router software knows whether the sensors actually exist.

:::

