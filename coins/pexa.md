---
title: Pexa
date: 2021-03-05T11:43:30.941Z
symbol: PEXA
network: Testnet
docs: 
github: https://github.com/VeriBlock/pop-pexa
altchainid: 6076
version: 0591be3618aeabe961798d98ec47da5407322f5f
win-artifacts: "#"
linux-artifacts: "#"
mac-artifacts: "#"
configname: pexa.conf
config: |-
  ```
  testnet=1
  txindex=1
  server=1
  reindex=0
  rpcuser=vbtc
  rpcpassword=vbtc
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
    bitc: {
      // this can be set to [1,2,4]
      autoMineRounds: [1,2,4]
      payoutAddress: "<EXECUTE getnewaddress AND PASTE IT HERE>"
      family: btc
      id: 6076
      name: "Bitcash"
      host: "http://localhost:18332"
      auth: {
          username: "vbtc"
          password: "vbtc"
      }
      network: "testnet"
      payoutDelay: 50
    }
  }
  ```
---
