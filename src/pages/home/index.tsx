import React from "react";
import styled from "styled-components";
import LauchIconSrc from "../../assets/launch.svg";
import TelegramIconSrc from "../../assets/social/telegram.svg";
import DiscordIconSrc from "../../assets/social/discord.svg";
import TwitterIconSrc from "../../assets/social/twitter.svg";
import MediumIconSrc from "../../assets/social/medium.svg";
import GithubIconSrc from "../../assets/social/github.svg";
import BooksIconSrc from "../../assets/social/books.svg";

const Home = () => {
  const Box = styled.div`
    display: flex;
    width: 680px;
    @media (max-width: 630px) {
      width: 100%;
    }
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    .ttl {
      color: var(--c-primary);
      font-size: 36px;
      line-height: 46px;
      text-align: center;
    }
    .sub-ttl {
      color: var(--c-txt-4);
      font-size: 24px;
      margin: 20px 0;
    }
    .networks {
      position: relative;
      .network:not(:last-of-type) {
        margin-right: 20px;
      }
      .network {
        width: 48px;
        height: 48px;
        transition: opacity .2s ease;
        cursor: pointer;
        img {
          height: 60px;
          width: 60px;
        }
        &:hover {
          
        }
      }
    }
    .social {
      @media (max-height: 1000px) {
        position: static;
        margin-top: 150px;
        margin-bottom: 100px;
      }
      position: fixed;
      bottom: 230px;
      a:not(:last-of-type) {
        margin-right: 40px;
        @media (max-width: 630px) {
          margin-right: 20px;
        }
      }
      a {
        display: inline-block;
        width: 40px;
        height: 40px;
        transition: filter .1s ease;
        text-decoration: none;
      
        @media (max-width: 630px) {
          width: 30px;
          height: 30px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }`;
  return (
    <>
      <Box>
        <div className="ttl">Multichain Yield farming optimizer.</div>
        <div className="sub-ttl">Launch app:</div>
        <div className="networks">
          <a className="network" href="/app/" target="_blank" rel="noopener noreferrer">
            <img src={LauchIconSrc} alt="social"/>
          </a>
        </div>

        <div className="social">
          <a href="https://github.com/daedalyst.finance/" target="_blank" rel="noopener noreferrer" aria-label="github">
            <img src={GithubIconSrc} alt="social"/>
          </a>
          <a href="https://twitter.com/daedalyst.finance" target="_blank" rel="noopener noreferrer" aria-label="twitter">
            <img src={TwitterIconSrc} alt="social"/>
          </a>
          <a href="https://t.me/daedalyst.finance" target="_blank" rel="noopener noreferrer" aria-label="telegram">
            <img src={TelegramIconSrc} alt="social"/>
          </a>
          <a href="https://daedalyst.finance.medium.com" target="_blank" rel="noopener noreferrer" aria-label="medium">
            <img src={MediumIconSrc} alt="social"/>
          </a>
          <a href="https://discord.gg/daedalyst.finance" target="_blank" rel="noopener noreferrer" aria-label="medium">
            <img src={DiscordIconSrc} alt="social"/>
          </a>
          <a href="https://docs.daedalyst.finance" target="_blank" rel="noopener noreferrer" aria-label="github books">
            <img src={BooksIconSrc} alt="social"/>
          </a>
        </div>
      </Box>

    </>
  );
};

export default Home;