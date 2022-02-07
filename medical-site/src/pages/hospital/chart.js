import { Chart as chartJS, LineController, BarElement, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

chartJS.register(LineController, LineElement, BarElement, PointElement, LinearScale, Title, CategoryScale, Filler);

// For ECG
const xValues_ecg = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const true_ecg_values = [-0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2, -0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2, -0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2, -0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2];
const predicted_ecg_values = [-0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2, -0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2,-0.2,0,0.1,1.5,0,-0.7,-0.2,-0.3,-0.2, -0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2, -0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2,-0.2,0,0.1,0,1.1,0,-0.2,-0.3,-0.2];

// for spo2
const xValues_spo2 = [1,2,3,4,5,6,7,8,9,10]
const spo2_values = [98, 98, 97.5, 98.2, 98, 98, 98, 97.5, 98.2, 98]

// for temperature
const xValues_temp = [1,2,3,4,5,6,7,8,9,10]
const temp_values = [36.5, 36.5, 36.2, 36.7, 35, 36.7, 36.5, 36.5, 36.2, 36.7, 35]

const ecg_data = {
    labels: xValues_ecg,
    datasets: [{
      fill: true,
      backgroundColor: "rgba(3, 181, 117, 0.7)",
      borderColor: "rgba(3, 181, 117, 1)",
      data: true_ecg_values,
    },
    {
        fill: true,
        backgroundColor: "rgba(239, 173, 10, 0.5)",
        borderColor: "rgba(239, 173, 10, 0.7)",
        data: predicted_ecg_values
      }]
  }

  const spo2_data = {
    labels: xValues_spo2,
    datasets: [{
      fill: true,
      backgroundColor: "rgba(85, 142, 255, 0.5)",
      borderColor: "rgba(85, 142, 255, 0.7)",
      data: spo2_values,
    }]
  }

  const temp_data = {
    labels: xValues_temp,
    datasets: [{
      fill: true,
      backgroundColor: "rgba(231, 79, 72, 0.8)",
      borderColor: "rgba(231, 79, 72, 1)",
      data: temp_values,
    }]
  }

  const options_spo2_temp = {
    responsive: true,
      scales:{
        y: {
            min: 0,
        },
        x: {
            grid: {
              display: false
            },
          },
      },
  };

  const options_ecg = {
    responsive: true,
      scales:{
        x: {
            grid: {
              display: false
            },
          },
      },
  };

export default function Chart({type, chart_name, width, height}){
    var data, options;
    if(chart_name === "ECG"){
        data = ecg_data;
        options = options_ecg;
    }else if(chart_name === "SPO2"){
        data = spo2_data;
        options = options_spo2_temp;
    }
    else if(chart_name === "TEMP"){
        data = temp_data;
        options = options_spo2_temp;
    }
return(
    <div>
        <Line
          data={data}
          width={width}
          height={height}
          options = {options}
        />
    </div>
);}
