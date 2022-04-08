import styled from "styled-components";

export const StaticsContainer = styled.div`
  padding: 190px 0;
  position: relative;
  width: var(--content-width);
  margin: 0 auto;
  padding-top: 100px;
  z-index: 5;
  @media (max-width: 800px) {
    width: 100%;
    padding: 130px 20px;
  }
  .info-strip {
    @media (max-width: 1240px) {
      flex-flow: wrap;
      justify-content: center; 
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    .ttl {
      margin-left: 10px;
      font-size: 28px;
      color: var(--c-primary);
      text-shadow: var(--t-shadow-1);
    }
    .price {
      margin-left: 20px;
      font-size: 24px;
      color: var(--c-primary);
      text-shadow: var(--t-shadow-1);
      @media (max-width: 1240px) {
        flex: 0 0 100%;
        margin: 30px 0 40px;
        text-align: center;
      }
    }
    .address-container {
      display: flex;
      height: 50px;
      padding: 4px;
      margin-left: auto;
      background-color: var(--c-background-4);
      flex-direction: row;
      border-radius: var(--r-border-4);
      align-items: center;
      @media (max-width: 1240px) {
        margin: 0;
      }
      .address-txt {
        font-size: 17px;
        padding-left: 16px;
        margin-right: 10px;
      }
      .copy {
        transition: filter .2s ease;
        cursor: pointer;
      }
      .metamask {
        display: flex;
        min-width: 42px;
        min-height: 42px;
        background-color: var(--c-background-2);
        border-radius: var(--r-border-4);
        margin-left: 20px;
        transition: background-color .2s ease;
        cursor: pointer;
        img {
          width: 19px;
          height: 18px;
          margin: auto;
        }
      }
    }
    .btn.buy-swamp {
      width: 200px;
      margin-left: 10px;
      @media (max-width: 1240px) {
        margin: 0 0 0 20px;
      }
    }
  }

  .farm-stats-container {
    display: flex;
    height: 378px;
    flex-direction: row;
    margin-top: 50px;
    .farm-stats {
      display: flex;
      min-width: 360px;
      flex-direction: column;
      .stat {
        position: relative;
        padding: 25px 30px;
        border: var(--c-txt-2) 2px solid;
        border-radius: var(--r-border-3);
        .ttl {
          color: var(--c-txt-2);
          font-size: 15px;
        }
        .val {
          position: relative;
          top: 3px;
          color: var(--c-txt);
          font-size: 24px;
        }
      }
    }
    .chart-container {
      display: flex;
      width: 820px;
      flex-direction: column;
      border-radius: var(--r-border-3);
      background-color: var(--c-background-3);
      margin-left: 20px;
      padding: 30px;
    }
  }
`;
