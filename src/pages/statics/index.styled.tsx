import styled from "styled-components";
import ArrowDownImg from "../../assets/arrow-down.svg";

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
  }

  .farm-stats-container {
    display: flex;
    height: 378px;
    flex-direction: row;
    margin-top: 50px;
    @media (max-width: 1240px) {
      flex-direction: column;
      height: auto;
      margin-top: 20px;
    }
    .farm-stats {
      display: flex;
      min-width: 360px;
      flex-direction: column;
      @media (max-width: 1240px)
      {
        order: 2;
        margin-top: 20px;
        flex-direction: row;
        justify-content: space-between;
      }
      @media (max-width: 860px) {
        flex-direction: column;
      }
      .stat:not(:first-of-type) {
        margin-top: 20px;
        @media (max-width: 1240px){ 
          margin-top: 0;
        }
        @media (max-width: 860px){ 
          margin-top: 20px;
        }
      }
      .stat {
        position: relative;
        padding: 31px 30px;
        border: var(--c-txt-2) 2px solid;
        border-radius: var(--r-border-3);
        @media (max-width: 1240px){
          width: 32%;
          height: 124px;
        }
        @media (max-width: 860px) {
          width: 100%;
          text-align: center;
        }
        .ttl {
          color: var(--c-txt-2);
          font-size: 15px;
          @media (max-width: 1240px) {
            font-size: 13px;
          }
        }
        .val {
          position: relative;
          top: 3px;
          color: var(--c-txt);
          font-size: 24px;
          @media (max-width: 1240px) {
            font-size: 18px;
          }
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
      @media (max-width: 1240px)
      {
        order: 1;
        width: 100%;
        height: 400px;
        margin-left: 0;
        padding: 20px;
      }
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
`;
