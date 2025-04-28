"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: [
    "5k",
    "10k",
    "15k",
    "20k",
    "25k",
    "30k",
    "35k",
    "40k",
    "45k",
    "50k",
    "55k",
    "60k",
  ],
  datasets: [
    {
      label: "Sales",
      data: [8, 20, 30, 25, 45, 35, 90, 65, 88, 50, 0, 40], // Fixed data length to match labels
      borderColor: '#FF8F6D',
      backgroundColor: "#FF8F6DCC",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Profit",
      data: [30, 35, 50, 65, 40, 60, 25, 70, 55, 80, 45, 0],
      borderColor: '#DBA5FF',
      backgroundColor: "#DBA5FFCC",
      fill: true,
      tension: 0.4,
    },
  ],
};

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false, // Added to respect fixed height
  plugins: {
    legend: {
      position: "top",
      labels: {
        usePointStyle: true,
      }
    },
    tooltip: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: (context) => {
          let label = context.dataset.label || '';
          if (label) label += ': ';
          if (context.parsed.y !== null) label += `$${context.parsed.y.toLocaleString()}`;
          return label;
        }
      }
    }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: '#666',
        font: {
          weight: 500,
        }
      }
    },
    y: {
      min: 0, // Changed from 20 to show all data points
      max: 100,
      ticks: {
        stepSize: 20,
        color: '#666',
        callback: (value) => `$${value}k`, // Added currency format
      },
      border: {
        dash: [4, 4],
      }
    },
  },
  elements: {
    point: {
      radius: 0, // Hide points for cleaner look
      hoverRadius: 6
    }
  },
  animation: {
    duration: 1000,
    easing: 'easeInOutQuart'
  }
};

export default function RevenueChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm" style={{ height: 471 }}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold">Sales Details</h3>
        </div>
        <select className="border rounded-md px-3 py-2 text-sm focus:outline-none">
          <option>October</option>
        </select>
      </div>
      <div className="relative h-[calc(100%-72px)]"> {/* Adjust height accounting for header */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
}