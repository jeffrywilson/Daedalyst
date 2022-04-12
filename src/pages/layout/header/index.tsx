import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import LogoImg from "../../../assets/background/logo.png";
import { setToken } from "../../../redux/actionCreators/setToken";
import SwampImg from "../../../assets/swamp.svg";
import { HeaderContainer } from "./index.styled";
import { useLocation } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');


const Header = () => {
  const [ismenu, SetIsMenu] = useState<boolean>(false);
  const location = useLocation();
  const options = ['SOL', 'USDC', 'ATLAS'];
  const defaultOption = options[0];
  const dispatch = useDispatch();

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <HeaderContainer>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={LogoImg} alt="Logo"/>
          </a>
        </div>
        <menu>
          <ul>
            <div className="dropdown-container earn">
              <li className="selected"><a href="/statistics/">Demo App</a></li>
            </div>
          </ul>
        </menu>

        {
          location.pathname === "/" ? <></> :
          <div className="wallet">
            <div className="swamp-price">
              {/* <img src={SwampImg} alt="swamp" /> */}
              {/* <div className="txt ml-10 price">$0.01</div> */}

              <Dropdown 
                options={options} value={defaultOption} onChange={(selected)=>{
                  dispatch(setToken(selected.value));
                }} placeholder="Select an option"
              />
            </div>


            

            <a className="btn small ml-20 primary buy-swamp hidden" href="#">Buy </a>
            {/* <a className="btn small ml-10 btn-wallet" id="btn-wallet-unlock" href="#"></a> */}

            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>
                        <WalletMultiButton className="btn small ml-20 btn-wallet" />
                        {/* <WalletDisconnectButton /> */}
                        { /* Your app's components go here, nested within the context providers. */ }
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>

            <div className="balance ml-10 hidden">
            <span className="swamp-balance">0.00 </span>
              <div className="wallet-info">
                <span className="wallet-address">...</span>
                <span className="icon ml-10"></span>
                <div className="mini-tag testnet">TESTNET</div>
              </div>
            </div>
          </div>          
        }


        <div className="hamburger" onClick={()=> {
          if (ismenu) {
            SetIsMenu(false);
            document.querySelector("#mobilemenu")?.classList.remove("visible");
          } else {
            SetIsMenu(true);
            document.querySelector("#mobilemenu")?.classList.add("visible");
          }
          
        }}>
          <svg viewBox="0 0 18 15">
            <path fill="#3C4E5A" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"></path>
            <path fill="#3C4E5A" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"></path>
            <path fill="#3C4E5A" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"></path>
          </svg>
        </div>
      </div>

      <div className="mobile-menu" id="mobilemenu">
        <div className="menu">
          <ul>
            <li><a href="/statistics/">Demo App</a></li>
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
