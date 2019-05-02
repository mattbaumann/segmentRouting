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

## Enable Cisco Telemtry
Model Driven Telemetry helps to gain real-time information of what is going on in the network.
1. Enable telemetry:  
	```RP/0/RP0/CPU0:XTC-A(config)#telemetry model-driven```
2. Create a destination-group:  
	```RP/0/RP0/CPU0:XTC-A(config-model-driven)#destination-group challpDestination```
3. Add IP address, encoding and protocol to the destination-group:  
	```RP/0/RP0/CPU0:XTC-A(config-model-driven-dest)#address-family ipv4 152.96.9.106 port 5432```  
	```RP/0/RP0/CPU0:XTC-A(config-model-driven-dest)#encoding json```  
	```RP/0/RP0/CPU0:XTC-A(config-model-driven-dest)#protocol udp```
4. Create a sensor-group:  
	```RP/0/RP0/CPU0:XTC-A(config-model-driven)#sensor-group challpSource```
5. Add a sensor-path (path to the yang model):  
	```RP/0/RP0/CPU0:XTC-A(config-model-driven-snsr-grp)#sensor-path Cisco-IOS-XR-segment-routing-ms-oper:srms```
6. Add a subscription:  
	```RP/0/RP0/CPU0:XTC-A(config-model-driven)#subscription challpSubscription```
6. Create a sensor-group:  
	```RP/0/RP0/CPU0:XTC-A(config-model-driven-subs)#sensor-group-id challpSource sample-interval 30000```
	```RP/0/RP0/CPU0:XTC-A(config-model-driven-subs)#destination-id challpDestination```

`sh telemetry model-driven sensor-group InternalDataAquisitionSensorGroup` should now return all sensors and whether they are resolved.

::: tip

You must wait at least the duration of `sample-interval` until the sensor-paths are resolved. Obviously, the sensors are accessed after the first sample interval terminated. After the first access, the router software knows whether the sensors actually exist.

:::

