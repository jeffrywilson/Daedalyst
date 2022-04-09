import styled from "styled-components";
import WalletIcon from "../../../assets/wallet.svg";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: 10;
  transition: background-color .2s ease;
  background-color: var(--c-background);
  .container {
    position: relative;
    display: flex;
    height: 120px;
    flex-direction: row;
    padding: 18px 44px;
    align-items: center;
    z-index: 9;
    .logo {
      position: relative;
      display: block;
      img {
        height: 60px;
        @media (max-width: 630px) {
          height: 40px;
        }
      }
    }
    a {
      text-decoration: none;
    }
    header .logo>a {
      display: block;
      min-height: 36px;
    }

    menu {
      @media (max-width: 1200px) {
        display: none;
      }
      position: absolute;
      width: fit-content;
      left: calc(100% - 600px);
      ul {
        position: relative;
        display: flex;
        flex-direction: row;
        color: var(--c-txt-2);
        font-size: 20px;
        pointer-events: none;
        list-style: none;
        li {
          pointer-events: auto;
          transition: color .2s ease;
          &.selected {
            color: var(--c-primary);
            text-shadow: var(--t-shadow-1);
          }

          a {
            color: inherit;
          }
        }
      }
    }

    .wallet {
      display: flex;
      flex-direction: row;
      margin-left: auto;
      align-items: center;
      @media (max-width: 1200px) {
        margin-right: 50px;
      }
      @media (max-width: 800px) {
        display: none;
      }
      .swamp-price {
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          width: 35px;
          height: 35px;
        }
        .price {
          text-shadow: var(--t-shadow-1);
          color: var(--c-primary);
        }
      }
      .btn-wallet {
        position: relative;
        padding: 0 30px 0 70px;
        &::before{
          position: absolute;
          content: '';
          width: 20px;
          height: 20px;
          background-image: url(${WalletIcon});
          left: 30px;
          top: 9px;
        }
      }
      .balance {
        display: flex;
        position: relative;
        width: fit-content;
        background-color: var(--c-txt-2);
        color: var(--c-txt);
        border-radius: var(--r-border);
        padding: 0 0 0 20px;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
      }
      .balance.hidden {
        display: none;
      }
    }

    .hamburger {
      position: absolute;
      display: none;
      width: 24px;
      height: 24px;
      right: 45px;
      top: 45px;
    }
    @media (max-width: 1200px) {
      .hamburger {
        display: block;
      }
    }
  }

  .mobile-menu {
    position: fixed;
    display: none;
    width: 100vw;
    height: 100vh;
    top: 100%;
    left: 0;
    background-color: var(--c-background);
    padding: 150px 0;
    z-index: 8;
    align-items: center;
    justify-content: center;
    animation: menu-visible .5s ease;
    .menu {
      display: flex;
      justify-content: center;
      ul {
        width: 400px;
        text-align: center;
        list-style: none;
        li {
          color: var(--c-txt-2);
          font-size: 18px;
          margin-bottom: 20px;
          a {
            color: var(--c-txt-2);
            text-decoration: none;
          }
        }
      }
    }
    &.visible {
      display: block;
      top: 0;
    }
  }
}
`;
