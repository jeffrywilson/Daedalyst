import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: 10;
  transition: background-color .2s ease;

  .container {
    position: relative;
    display: flex;
    height: 76px;
    flex-direction: row;
    padding: 18px 44px;
    align-items: center;
    z-index: 9;
    .logo {
      position: relative;
      display: block;
      margin-top: 40px;
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
    .hamburger {
      position: absolute;
      display: none;
      width: 24px;
      height: 24px;
      right: 45px;
      top: 45px;
    }
    @media (max-width: 1700px) {
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
