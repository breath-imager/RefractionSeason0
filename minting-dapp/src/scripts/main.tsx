import '../styles/main.scss';

import ReactDOM from 'react-dom';
// import Dapp from './react/Dapp';
import DappEOS from './react/DappEOS';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';

if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}

document.addEventListener('DOMContentLoaded', async () => {
  //ReactDOM.render(<Dapp />, document.getElementById('minting-dapp'));
  ReactDOM.render(<DappEOS />, document.getElementById('minting-dapp'));
});
