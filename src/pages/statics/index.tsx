import React from "react";
import SwampImg from "../../assets/swamp.svg";
import CopyImg from "../../assets/copy.svg";
import MetaMaskImg from "../../assets/metamask.svg";
import {
  StaticsContainer,
} from "./index.styled";

const Statics = () => {
  return (
    <StaticsContainer>
      <div className="info-strip">
        <img width="40" height="40" className="swamp-icon" src={SwampImg} alt="swamp" />
        <div className="ttl">Swamp (SWAMP)</div>
        <div className="price">$0.01</div>

        <div className="address-container">
            <span className="address-txt">...</span>
            <img className="copy" src={CopyImg} alt="copy" />
            <div className="metamask">
                <img src={MetaMaskImg} alt="metamask" />
            </div>
        </div>
        <div className="btn primary buy-swamp">Buy SWAMP</div>
    </div>
    </StaticsContainer>
  );
};

export default Statics;
