---
title: YANG
lang: en-us

---

# YANG Data models

Capabilities are sent to the client on connecting to the router. The capabilities shows the following information to determine the possible commands.

| String                                             | Model                                |
| -------------------------------------------------- | ------------------------------------ |
| `urn:ietf:params:xml:ns:yang:ietf-interfaces`      | Model URI                            |
| `? module=ietf-interfaces`                         | Module Name                          |
| `revision=2014-05-08`                              | Revision Date                        |
| `features=pre-provisioning,if-mib,arbitrary-names` | Protocol Features                    |
| `deviations=ietf-ip-devs`                          | Another model that modifies this one |

# YANG Development Kit

The *YANG Development Kit*, short YDK, allows us to generate Python, C++ and Go Backends which are able to communicate to Cisco network devices, like routers and switches. 

Cisco provides quite a few alternatives to automatically install YDK. Unfortunately did none of them work on my Debian 10 operating system. Therefore, I had to compile and generate the YDK locally with the sources provided in *github* repositories. Following are the steps to generate YDK on your own *Linux* machine. 

## Installation

The local installation of [YANG SDK](https://yang.io) aborts under [Debian 10 Sid](https://www.debian.org/) and Mac OS X unsuccessfully.

```bash
CMake Error: The following variables are used in this project, but they are set to NOTFOUND. 
   Please set them or make sure they are set and tested correctly in the CMake files: 
   ssh_threads_location 
       linked by target "ydk_" in directory /tmp/pip-install-279y6ct0/ydk 
```

The library *LibSSH-Threads* is unknown and has to be installed before. See below

The installation of [YDK_GEN](https://github.com/CiscoDevNet/ydk-gen/blob/master/README.md#system-requirements) is successful with the following commands:

```bash
# Requirements
sudo apt-get install gdebi-core python3-dev python-dev libtool-bin
sudo apt-get install libcurl4-openssl-dev libpcre3-dev libssh-dev libxml2-dev libxslt1-dev cmake
sudo apt-get install libssh2-1-dev

# Folder for compilation (easy cleanup)
mkdir ydk
cd ydk

# Installation LibSSH - Threading
wget https://git.libssh.org/projects/libssh.git/snapshot/libssh-0.7.6.tar.gz
tar zxf libssh-0.7.6.tar.gz && rm -f libssh-0.7.6.tar.gz
mkdir libssh-0.7.6/build && cd libssh-0.7.6/build
cmake ..
sudo make install

# Installation gNMI (optional)
# ----------------------------

# Installation Protobuff Library
wget https://github.com/google/protobuf/releases/download/v3.5.0/protobuf-cpp-3.5.0.zip
unzip protobuf-cpp-3.5.0.zip
cd protobuf-3.5.0
./configure
make
sudo make install
sudo ldconfig


# Installation gRPC Library
git clone -b v1.9.1 https://github.com/grpc/grpc
cd grpc
git submodule update --init
make
sudo make install
sudo ldconfig

# Installation of prerequisits
virtualenv .
source ./bin/activate # Activate Virtual Env
git clone https://github.com/CiscoDevNet/ydk-gen.git
cd ydk-gen
sudo pip2 install -r requirements.txt

# Installation of YDK C++
python2 generate.py --cpp --core
cd gen-api/cpp/ydk/build/
make
sudo make install

# Installation of YDK libydk_gnmi
python2 generate.py -cpp --service profiles/services/gnmi-0.4.0.json
make
sudo make install

# Building all APIs
./generate_bundles.sh 
```

On the development machine was *Clang* C++ Compiler activated.

## Docker

Alternatively, a Docker container can be used with all dependencies installed.

```bash
 docker run -it ydkdev/ydk-gen
```

## Installing Core

```bash
python2 ./generate.py --libydk
cd gen-api/cpp/ydk/build
make
[sudo] make install
```

::: warning

A bit odd is the fact that the command `./generate.py --libydk` compiles into the same directory as `python2 generate.py --cpp --core`, namely `gen-api/cpp/ydk/build`.

:::

```bash
python2 generate.py --python --core
pip install gen-api/python/ydk/dist/ydk*.tar.gz
```

## Install YDK Bundles

The simple way is to generate all bundles by calling the following shell script:

```bash
./generate_bundles.sh
```

Alternatively generate each bundle separately:

```bash
./generate.py --python --bundle profiles/bundles/<name-of-profile>.json
```

And then install each bundle with `pip`.

```bash
[sudo] pip install gen-api/python/<name-of-bundle>-bundle/dist/ydk*.tar.gz
```

## Writing first YDK Application

First you need to download the current YANG models from the public [yang-model repository](https://github.com/YangModels/yang) for your current router software version.

In our case, we will use the XR 651 models, which fit to our Cisco IOS XR 6.5.1 operating system.

