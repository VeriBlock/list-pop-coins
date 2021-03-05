---
title: vBitcoin
date: 2021-03-05T11:43:30.941Z
symbol: vBTC
network: Testnet
docs: https://wiki.veriblock.org/index.php/HowTo_PoP_vBTC
github: https://github.com/VeriBlock/vbk-ri-btc
altchainid: 3860170
version: f8ebbb26ce4873a4997e727b0af5a916f4d80552
win-artifacts: https://mirror.veriblock.org/artifacts/vbtc/vBitcoin-develop-f8ebbb2-win64-qt.zip
linux-artifacts: https://mirror.veriblock.org/artifacts/vbtc/vBitcoin-develop-f8ebbb2-linux-x64.tar.gz
mac-artifacts: https://mirror.veriblock.org/artifacts/vbtc/vBitcoin-develop-f8ebbb2-macos-qt.zip
configname: vbitcoin.conf
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
    btc: {
      // this can be set to [1,2,4]
      autoMineRounds: [1,2,4]
      payoutAddress: "<EXECUTE getnewaddress AND PASTE IT HERE>"
      family: btc
      id: 3860170
      name: "vBitcoin"
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