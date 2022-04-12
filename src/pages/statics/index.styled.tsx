import styled from "styled-components";
import ArrowDownImg from "../../assets/arrow-down.svg";
import SwampSymbolImg from "../../assets/swamp.svg";

export const StaticsContainer = styled.div`
  padding: 190px 0;
  position: relative;
  width: var(--content-width);
  margin: 0 auto;
  padding-top: 200px;
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
      .stat:not(:first-of-type) {
        margin-top: 20px;
      }
      .stat {
        position: relative;
        padding: 31px 30px;
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

      .toolbar {
        display: flex;
        width: 100%;
        height: 50px;
        flex-direction: row;

        .options {
          --option-width: 75px;
          position: relative;
          display: flex;
          padding: 4px;
          flex-direction: row;
          border-radius: 15px;
          background-color: var(--c-background-4);
          &::before {
            content: '';
            position: absolute;
            background-color: var(--c-background-2);
            width: var(--option-width);
            height: calc(100% - 8px);
            left: 4px;
            top: 4px;
            border-radius: 12px;
            z-index: 1;
            transition: all .2s ease;
          }
          &.index-1 {
            color: var(--c-txt);
          }
          &.index-1::before {
            transform: translateX(var(--option-width));
          }
          .option {
            width: var(--option-width);
            padding: 10px 16px;
            font-size: 15px;
            color: var(--c-txt-2);
            cursor: pointer;
            transition: all .2s ease;
            z-index: 2;
            text-align: center;
            &.selected {
              color: var(--c-txt);
            }
            &:nth-child(2) {
              color: var(--c-txt);
            }
          }
        }

        .time-dropdown {
          min-width: 120px;
          margin-left: auto;
        }

        .dropdown-wrapper {
          position: relative;
          min-width: 175px;
          height: 50px;
          padding: 0 23px;
          color: var(--c-txt);
          font-size: 16px;
          background: 0 0;
          appearance: none;
          border: var(--c-txt-2) solid 2px;
          border-radius: var(--r-border);
          outline: none;
          transition: border .2s ease;
          cursor: pointer;
          &.opened {
            border-color: var(--c-primary);
            .dropdown {
              display: block;
              animation: dropdown-fly-in .2s ease;
              pointer-events: auto;
              z-index: 10;
              user-select: none;
            }
            &::after {
              transform: rotateZ(180deg);
            }
          }
          &::before {
            content: attr(data-name);
            position: absolute;
            top: 10px;
            font-size: 15px;
          }

          &::after {
            content: '';
            position: absolute;
            display: block;
            width: 17px;
            height: 11px;
            right: 23px;
            top: calc(50% - 5px);
            background: url(${ArrowDownImg}) no-repeat;
            background-size: 15px 10px;
            transition: transform .2s ease;
          }

          .dropdown {
            position: absolute;
            display: none;
            width: 100%;
            top: calc(100% + 14px);
            left: 0;
            border-radius: var(--r-border);
            background-color: var(--c-background-4);
            box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
            pointer-events: none;
            .itm {
              font-size: 15px;
              padding: 15px 24px;
              transition: background-color .2s ease;
              &:hover {
                background-color: var(--c-txt-2);
              }
              &:first-of-type {
                border-radius: var(--r-border) var(--r-border) 0 0;
              }
              &:last-of-type {
                border-radius: 0 0 var(--r-border) var(--r-border);
              }
            }
          }
        }
      }

      .chart-wrapper {
        max-height: calc(100%-50px);
        padding-left: 5px;
        margin-top: 20px;
      }

      #chart {
        display: block;
        box-sizing: border-box;
        height: 268px;
        width: 755px;
      }
    }
  }

  .wallet-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    border-radius: var(--r-border-3);
    background-color: var(--c-background-4);
    margin: 20px 0;
    height: 516px;
    padding: 30px;
    .info-strip {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 20px;
      .wallet-ttl {
        font-size: 20px;
        margin-left: 20px;
      }
      .harvest-amount {
        display: flex;
        flex-direction: row;
        margin-left: auto;
        .swamp-amount {
          position: relative;
          color: var(--c-primary);
          font-size: 18px;
          &::before {
            content: '';
            position: absolute;
            display: block;
            width: 35px;
            height: 35px;
            background: url(${SwampSymbolImg}) no-repeat;
            left: -45px;
            top: -3px;
          }
          &::after {
            content: 'SWAMP';
            position: absolute;
            display: block;
            font-size: 18px;
            color: var(--c-primary);
            right: 0;
            top: 0;
          }
          visibility: hidden;
        }
        .swamp-value {
          font-size: 18px;
          color: var(--c-txt-2);
          margin-left: 5px;
          visibility: hidden;
        }
      }
      .txt.loading {
        width: 30px;
        height: fit-content;
        &::after {
          content: '';
          position: absolute;
          display: block;
          width: 16px;
          height: 16px;
          border: 3px solid var(--c-background-3);
          border-top: 3px solid var(--c-primary);
          border-radius: 50%;
          animation: rotate 1s linear infinite;
          left: calc(50% - 10px);
          top: 2px;
        }
      }

      .btn.harvest-all {
        width: 240px;
        margin-left: 20px;
      }
    }
    .seperator {
      width: 100%;
      height: 2px;
      margin: 30px 0;
      background-color: var(--c-background-3);
    }
    .bottom-container {
      display: flex;
      flex-direction: row;
      height: 100%;
      .box {
        display: flex;
        width: calc(50% - 20px);
        flex-direction: column;
        .head {
          display: flex;
          flex-direction: row;
          font-size: 18px;
          .deposit-container {
            display: flex;
            flex-direction: row;
            margin-left: auto;
            align-items: center;
            .ttl {
              font-size: 16px;
              color: var(--c-txt-2);
              margin-right: 10px;
            }
          }
        }

        .list-container {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          max-height: 290px;
          overflow-y: auto;
          margin-top: 30px;
          .scroll-container {
            display: flex;
            flex-direction: column;
            .itm {
              display: flex;
              width: 100%;
              height: 90px;
              background-color: var(--c-background-3);
              border-radius: var(--r-border-3);
              padding: 0 30px;
              align-items: center;
              font-size: 18px;
              &.template{
                display: none;
              }
              .symbols {
                display: flex;
                flex-direction: row;
                img {
                  width: 40px;
                  height: 40px;
                }
              }
              .vaules {
                display: flex;
                width: 100%;
                flex-direction: row;
                margin-left: 20px;
                .amount {
                  margin-left: auto;
                  color: var(--c-txt);
                  .estimate {
                    color: var(--c-txt-2);
                  }
                }
              }
            }

            .btn.deposit {
              position: relative;
              margin: 20px auto 0;
              width: 200px;
            }
          }
        }
      }

      .box:nth-of-type(2) {
        margin-left: 40px;
      }
    }
  }
`;
