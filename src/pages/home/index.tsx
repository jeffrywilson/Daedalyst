import React from "react";
import styled from "styled-components";
import DiscordIconSrc from "../../assets/social/discord.svg";
import TwitterIconSrc from "../../assets/social/twitter.svg";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  const Box = styled.div`
    display: flex;
    width: 680px;
    height: 100vh;
    @media (max-width: 630px) {
      width: 100%;
    }
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 150px;
    .ttl {
      color: var(--c-primary);
      font-size: 36px;
      line-height: 46px;
      text-align: center;
    }
    .sub-ttl {
      width: 250px;
      margin-top: 35px;
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
        <div className="ttl">High Impact Analytics on Solana</div>
        <div className="btn primary sub-ttl" onClick={()=> {
          navigate('/statistics');
        }}>Enter Demo App</div>

        <div className="social">
         
          <a href="https://twitter.com/daedalyst" target="_blank" rel="noopener noreferrer" aria-label="twitter">
            <img src={TwitterIconSrc} alt="social"/>
          </a>
          
          <a href="https://discord.gg/VXccUbueCh" target="_blank" rel="noopener noreferrer" aria-label="medium">
            <img src={DiscordIconSrc} alt="social"/>
          </a>
        
        </div>
      </Box>

    </>
  );
};

export default Home;