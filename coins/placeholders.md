---
title: Placeholders
date: 2021-03-05T11:43:30.941Z
symbol: PHL
network: Testnet
docs: #
github: https://github.com/VeriBlock/pop-bitc
altchainid: 4276994270
version: a9c491ef382ff13fbc127b7e7a5d28151154fe07
win-artifacts: https://mirror1.veriblock.org/artifacts/bitc/Bitcash-master-8b26e5e-win64-qt.zip
linux-artifacts: https://mirror1.veriblock.org/artifacts/bitc/Bitcash-master-8b26e5e-linux-x64.tar.gz
mac-artifacts: #
configname: placeh.conf
config: |-
  ```
  testnet=1

  fallbackfee=0.0001

  rpcworkqueue=256

  server=1
  txindex=1
  listen=1
  rpcallowip=0.0.0.0/0

  rpcuser=phl
  rpcpassword=phl

  popbtcnetwork=test
  popvbknetwork=test

  [test]
  addnode=95.217.65.109
  addnode=95.217.65.110
  ```
apm-artifact: https://mirror.veriblock.org/artifacts/apm/altchain-pop-miner-0.4.12-dev.13.zip
apmconfig: |-
  ```
  miner {
    feePerByte: 1000
    maxFee: 10000000
    api {
      port: 8080
    }
  }

  securityInheriting {
    phl: {
      // this can be set to [1,2,4]
      autoMineRounds: [1,2,4]
      payoutAddress: "<EXECUTE getnewaddress AND PASTE IT HERE>"
      family: btc
      id: 4276994270
      name: "Placeholders"
      host: "http://localhost:18332"
      auth: {
          username: "phl"
          password: "phl"
      }
      network: "testnet"
      payoutDelay: 50
    }
  }
  ```
---
