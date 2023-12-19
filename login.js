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
  
  const passportLogout = async function(){
    let logout = await window.passport.logout();
    console.log(logout, "logout");
    window.userProfile = {};
}

// Insert Contract Address
const CONTRACT_ADDRESS = '0x106574d5ec0c87d456a9cc4de2694e637047933f';
const PRIVATE_KEY = '065e98e5ef764d97cb1ff62897d669cff828853f4c9003f3860db84c214bb9a7';

const CONTRACT_ABI = [
  'function grantRole(bytes32 role, address account)',
  'function MINTER_ROLE() view returns (bytes32)',
  'function mint(address to, uint256 tokenId)',
  'function ownerOf(uint256 tokenId) view returns (address)',
  'function hasRole(bytes32 role, address account) view returns (bool)',
  'function totalSupply() view returns (uint256)'
];

async function getData(id) {
    try {
      let nft = document.getElementById("nft");
  
      const nftDetails = {
        '1': {
          image: 'https://bafkreigugjgtcvkwg7ym7uk5ic65wmtkmbngonaj3twzl3nttuj5w7zjku.ipfs.nftstorage.link/',
          name: 'Level 1 Badge',
          description: 'This NFT represents your first accomplishment on StackUp Invaders.'
        },
        '2': {
          image: 'https://bafkreifxbz53txersuyqok75dmdhyrnfkascznytyvum2i25bunii5dih4.ipfs.nftstorage.link/',
          name: 'Level 2 Badge',
          description: 'This NFT represents your second accomplishment on StackUp Invaders which grants you an upgraded spaceship.'
        }
      };

      const details = nftDetails[id.toString()];

      if (!details) {
        throw new Error("Invalid Token ID");
      }
  
      nft.innerHTML = `
      <div class="alert alert-success"> Great Score! Claim this NFT, then resume the game.</div>
      <div class="card" >
      <div class="card-body">
        <div class="media">
          <img src='${details.image}' class="mr-3 img-thumbnail" alt="nft" style="width: 30%;">
          <div class="media-body">
            <h5 class="card-title">${details.name}</h5>
            <p class="card-text">'${details.description}'</p>
          </div>
        </div>
      </div>
      <div class="card-body">
        <button id="claim-btn" class="btn btn-success"> Claim</button>
      </div>
    </div>
      `;

      const claimBtn = this.document.getElementById('claim-btn');
    claimBtn.onclick = async function(){
      if (id === '1') {
        await mintNft();
      } else if (id === '2') {
        await refreshNft();
      }
    }
    return details;
  } catch (error) {
    console.error(error);
    alert(error)
  }
}



window.getData = getData;