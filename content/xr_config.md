# XR Installation Guide
To install a package on a Cisco IOS-XR Router, you have to run a TFTP Server. Add the desired package to the TFTP Server. To install the package on the Router, run the following command:

```install update source tftp://[IP]/ [Package to install]```

For example:
```install update source tftp://152.96.9.93/ xrv9k-k9sec-3.1.0.0-r651.x86_64.rpm```

Do not try to install PIE packages. You have to RPM install the package.

## Configure SSH

1. Verify that the k9sec PIE is installed
	```RP/0/RP0/CPU0:XTC-A# show install active | include k9```
2. Generate the key pairs
	```RP/0/RP0/CPU0:XTC-A# crypto key generate dsa```
3. Enable SSHv2 on the Router. Be sure to use config mode
	```RP/0/RP0/CPU0:XTC-A(config)#ssh server v2```
4. Commit changes
	```RP/0/RP0/CPU0:XTC-A(config)#commit```

::: danger STOP
Do not try to reload the IOS XR Router, it will lose the k9sec package and you have to install it again...
:::