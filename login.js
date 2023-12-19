import { ethers, getDefaultProvider } from "./libs/ethers-5.6.2.esm.min.js";

window.provider = window.passport.connectEvm();

const connectPassport = async function(){
    window.accounts = await window.provider.request({ method: "eth_requestAccounts" });
    console.log(window.accounts)
    if (window.accounts){
        getUserInfo();
    }
}

const config = {
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
  };
  
  const client = new window.immutable.blockchainData.BlockchainData(config);
  
  const getUserInfo = async function(){
      window.userProfile = await window.passport.getUserInfo();
  }
  
  