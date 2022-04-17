import React, { useState, useEffect, useRef } from "react";
import SolTokenImg from "../../assets/token/sol.png";
import AtlasTokenImg from "../../assets/token/atlas.png";
import StepTokenImg from "../../assets/token/step.png";
import { setToken } from "../../redux/actionCreators/setToken";
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
import useOutsideClick from "../../hooks/useOutsideClick";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


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
  const [isTvl, setIsTvl] = useState<boolean>(false);
  const [dataVal, SetDataVal] = useState("Week");
  
  const [_day, setDay] = useState(7);
  const [_times, setTimes] = useState();
  const [_prices, setPrices] = useState<Array<Number>>([]);
  const { name } = useTypedSelector((state) => state.name);
  const [_price, setPrice] = useState(0);
  const [_volume, setVolume] = useState(0);
  const [_change, setChange] = useState(0);
  const [_volumeTo, setVolumeTo] = useState(0);
  const tokenOptions = ['SOL', 'STEP', 'ATLAS'];
  const defaultOption = tokenOptions[0];
  const dispatch = useDispatch();
  const API_KEY = "398574298c78948a9212cd6b66c1408111cdfcce6bcbb31020a64a6374dd89da";

  useEffect(() => {
    setPrices([]);
    setPrice(0);
    setVolume(0);
    setChange(0);
    setVolumeTo(0);
    const solData = async () => {
      const avg = await (await fetch(`https://min-api.cryptocompare.com/data/generateAvg?fsym=${name}&tsym=USD&e=Kraken`)).json();
      
      setPrice(avg.DISPLAY.PRICE);
      setChange(avg.DISPLAY.CHANGE24HOUR);
      setVolume(avg.DISPLAY.VOLUME24HOUR);
      setVolumeTo(avg.DISPLAY.VOLUME24HOURTO);

      const response = await fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${name}&tsym=USD&limit=${_day}&api_key=${API_KEY}`);
      console.log("log", response);
      const json = await response.json();
      const data = json.Data.Data;
      const times = data.map((obj: { time: any; }) => moment(new Date(obj.time * 1000)).format("MMM D"));
      const prices = data.map((obj: { high: any; }) => obj.high);
      setTimes(times);
      setPrices(prices);
    }
    // call the function
    solData()
      // make suer to catch any error
      .catch(console.error);
  }, [_day, name, isTvl]);
  
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

  const ref = useRef(null);
  useOutsideClick(ref, () => {
    SetIsDropDown(false);
  });

  return (
    <StaticsContainer >
      <div className="info-strip">
        { name === "SOL" ? <img width="40" height="40" className="swamp-icon" src={SolTokenImg} alt="sol" /> : <></> }
        { name === "STEP" ? <img width="40" height="40" className="swamp-icon" src={StepTokenImg} alt="step" /> : <></> }
        { name === "ATLAS" ? <img width="40" height="40" className="swamp-icon" src={AtlasTokenImg} alt="altlas" /> : <></> }
        <div className="ttl">{name} </div>
        <div className="price">
          <Dropdown 
            options={tokenOptions} value={defaultOption} onChange={(selected)=>{
              dispatch(setToken(selected.value));
            }} placeholder="Select an option"
          />
        </div>
      </div>

      <div className="farm-stats-container">
        <div className="farm-stats">
          <div className="stat tvl">
            <div className="ttl">{`Current Price`}</div>
            <div className="val">{`${_price}`}</div>
          </div>
          <div className="stat tvl">
            <div className="ttl">{`Change In Price (24H)`}</div>
            <div className="val">{`${_change}`}</div>
          </div>
          <div className="stat tvl">
            <div className="ttl">
              {`Prior 24H Volume`}
              
            </div>
            <div className="val">
              <div style={{display: "flex"}}>
                { isTvl === false? _volume : _volumeTo }

                <div style={{position:"absolute", right: "0"}}>
                  <div className={isTvl === false? "options index-0" : "options index-1"}>
                    <div className={isTvl === false? "option price selected" : "option price"} data-value="price" data-index="0" onClick={()=>{
                      setIsTvl(false);
                    }}>Vol</div>
                    <div className={isTvl === false? "option tvl " : "option tvl selected"} data-value="tvl" data-index="1" onClick={()=>{
                      setIsTvl(true);
                    }}>Price</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chart-container" >
          <div className="toolbar">
            {/* <div className={isTvl === false? "options index-0" : "options index-1"}>
              <div className={isTvl === false? "option price selected" : "option price"} data-value="price" data-index="0" onClick={()=>{
                setIsTvl(false);
              }}>Price</div>
              <div className={isTvl === false? "option tvl " : "option tvl selected"} data-value="tvl" data-index="1" onClick={()=>{
                setIsTvl(true);
              }}>TVL</div>
            </div> */}
            <div 
              ref={ref}
              className={ isdropdown? "dropdown-wrapper time-dropdown opened" : "dropdown-wrapper time-dropdown"}
              data-value={dataVal} data-name={dataVal} 
              onClick={()=>{
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
    </StaticsContainer>
  );
};

export default Statics;
