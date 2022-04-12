import React, { useState, useEffect } from "react";
import SwampImg from "../../assets/swamp.svg";
import CopyImg from "../../assets/copy.svg";
import MetaMaskImg from "../../assets/metamask.svg";
import WalletIconImg from "../../assets/wallet.svg";
import {
  StaticsContainer,
} from "./index.styled";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  TimeSeriesScale
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  TimeSeriesScale
);

const Statics = () => {
  const [isdropdown, SetIsDropDown] = useState<boolean>(false);
  const [dataVal, SetDataVal] = useState("Week");
  const [_token, setToken] = useState("SOL");
  const [_day, setDay] = useState(7);
  const [_times, setTimes] = useState();
  const [_prices, setPrices] = useState<Array<Number>>([]);

  useEffect(() => {
    setPrices([]);    
    const solData = async () => {
      const response = await fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${_token}&tsym=USD&limit=${_day}&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146`);
      
      const json = await response.json();
      const data = json.Data.Data
      const times = data.map((obj: { time: any; }) => moment(new Date(obj.time * 1000)).format("MMM D"))
      const prices = data.map((obj: { high: any; }) => obj.high)
      setTimes(times);
      setPrices(prices);
    }
    // call the function
    solData()
      // make suer to catch any error
      .catch(console.error);
  }, [_token, _day]);
  
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
      tooltip: {
        intersect: false,
        displayColors: false,
        callbacks: {
          label: (tooltipItem: any) => {
            return tooltipItem.raw;
          }
        }
      },
    },
    
    scales: {
      x: {
        grid: {
          // display: false
          color: "#16242E"
        },
      },
      y: {
        ticks: {
          callback: function (value: any, index: any, values: any) {
            return `$${value}`;
          },
        },
        grid: {
          color: "#1d2f3b"
        }
      },
    },
  };

  
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

      <div className="farm-stats-container">
        <div className="farm-stats">
          <div className="stat tvl">
            <div className="ttl">Total Value Locked (TVL)</div>
            <div className="val">$2,854,549</div>
          </div>
          <div className="stat tvl">
            <div className="ttl">Total Liquidity</div>
            <div className="val">$4,898</div>
          </div>
          <div className="stat tvl">
            <div className="ttl">Trading Volume (24h)</div>
            <div className="val">$0</div>
          </div>
        </div>
        <div className="chart-container">
          <div className="toolbar">
            <div className="options index-1">
              <div className="option price" data-value="price" data-index="0">Price</div>
              <div className="option tvl selected" data-value="tvl" data-index="1">TVL</div>
            </div>
            <div className={ isdropdown? "dropdown-wrapper time-dropdown opened" : "dropdown-wrapper time-dropdown"} data-value={dataVal} data-name={dataVal} onClick={()=>{
              if (isdropdown) {
                SetIsDropDown(false);
              } else {
                SetIsDropDown(true);
              }
            }}>
              <div className="dropdown">
                <div className="itm" data-value="Week" data-name="Week" onClick={()=>{
                  SetDataVal("Week");
                  setDay(7);
                }}>Week</div>
                <div className="itm" data-value="month" data-name="Month" onClick={() => {
                  SetDataVal("Month");
                  setDay(31);
                }}>Month</div>
                <div className="itm" data-value="all" data-name="All" onClick={()=>{
                  SetDataVal("All");
                  setDay(600);
                }}>All</div>
              </div>
            </div>
          </div>
          <div className="chart-wrapper">
            <Line options={options} height="100" data={{
              labels: _times,
              datasets: [{
                label: 'DataSet',
                data: _prices,
                fill: false,
                borderColor: '#c36503',
                borderWidth: 4,
                tension: 0.3,
                pointRadius: 0
              }]
            }}  />
          </div>
        </div>
      </div>
      
      <div className="wallet-container">
        <div className="info-strip">
          <img width="24" height="24" src={WalletIconImg} alt="wallet" />
          <div className="wallet-ttl">My wallet</div>
          <div className="txt loading harvest-amount">
            <div className="swamp-amount">0.00</div>
            <div className="swamp-value">$(0.00)</div>
          </div>
          <div className="btn primary harvest-all disabled alt">Harvest All</div>
        </div>

        <div className="seperator"></div>

        <div className="bottom-container">
          <div className="box">
            <div className="head">
              <div className="ttl">Deposits in Vaults</div>
              <div className="deposit-container">
                <div className="ttl">My total deposit:</div>
                <div className="value">$0.00</div>
              </div>
            </div>

            <div className="list-container deposit-vaults no-deposits">
              <div className="scroll-container">
                <div className="itm template" data-symbols-url="/static/frontend/img/symbols/" data-symbols-custom-url="/static/frontend/img/symbols/custom/">
                  <div className="symbols">
                    <img src="/static/frontend/img/symbols/swamp.svg" alt="swamp"/>
                    <img src="/static/frontend/img/symbols/swamp.svg" alt="swamp"/>
                  </div>
                  <div className="values">
                    <div className="ttl">Swamp</div>
                    <div className="amount">0 <span className="estimate">($0.00)</span></div>
                  </div>
                </div>
                <a className="btn secondary deposit" href="/app/">Deposit to Vaults</a>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="head">
              <div className="ttl">Top 3 Earning Vaults</div>
                <div className="deposit-container">
                  <div className="ttl">(Yearly)</div>
                </div>
              </div>
              <div className="list-container">
            </div>
          </div>
        
        </div>
      </div>
    </StaticsContainer>
  );
};

export default Statics;
