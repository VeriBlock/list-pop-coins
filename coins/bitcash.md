---
title: BitCash
date: 2021-03-05T11:43:30.941Z
symbol: BITC
network: Testnet
docs: "#"
github: https://github.com/VeriBlock/pop-bitc
altchainid: 6076
version: 8b26e5e694b22667191a4169592fd3c2bbdbde31
win-artifacts: https://mirror1.veriblock.org/artifacts/bitc/Bitcash-master-8b26e5e-win64-qt.zip
linux-artifacts: https://mirror1.veriblock.org/artifacts/bitc/Bitcash-master-8b26e5e-linux-x64.tar.gz
mac-artifacts: "#"
configname: bitcash.conf
config: |-
  ```
  testnet=1
  txindex=1
  server=1
  reindex=0
  rpcuser=vbtc
  rpcpassword=vbtc
  ```
apm-artifact: https://mirror.veriblock.org/artifacts/apm/altchain-pop-miner-0.4.12-dev.21.zip
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
