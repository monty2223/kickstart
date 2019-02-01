import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
JSON.parse(CampaignFactory.interface),
'0x9550b43948586f803e91afF4Dc222F9BF2bE8f90'
);

export default instance;