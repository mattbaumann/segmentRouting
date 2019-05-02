# XR Installation Guide
To install a package on a Cisco IOS-XR Router, you have to run a TFTP Server. Add the desired package to the TFTP Server. To install the package on the Router, run the following command:

```install update source tftp://[IP]/ [Package to install]```

For example:
```install update source tftp://152.96.9.93/ xrv9k-k9sec-3.1.0.0-r651.x86_64.rpm```

Do not try to install PIE packages. You have to RPM install the package.

## Configure SSH

1. Verify that the k9sec PIE is installed:  
	```RP/0/RP0/CPU0:XTC-A# show install active | include k9```
2. Generate the key pairs:  
	```RP/0/RP0/CPU0:XTC-A# crypto key generate dsa```
3. Enable SSHv2 on the Router. Be sure to use config mode:  
	```RP/0/RP0/CPU0:XTC-A(config)#ssh server v2```
4. Commit changes:  
	```RP/0/RP0/CPU0:XTC-A(config)#commit```

::: danger STOP
Do not try to reload the IOS XR Router, it will lose the k9sec package and you have to install it again...
:::

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