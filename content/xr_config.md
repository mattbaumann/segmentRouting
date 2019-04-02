# XR Installation Guide
To install a package on a Cisco IOS-XR Router, you have to run a TFTP Server. Add the desired package to the TFTP Server. To install the package on the Router, run the following command:

```install update source tftp://[IP]/ [Package to install]```

For example:
```install update source tftp://152.96.9.93/ xrv9k-k9sec-3.1.0.0-r651.x86_64.rpm```

Do not try to install PIE packages. You have to RPM install the package.