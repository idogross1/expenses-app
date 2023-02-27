import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = ({ dataPoints }) => {
    const totalMaximum = dataPoints.reduce((max, data) => {
        if (data.value > max) {
            max = data.value;
        };
        return max;
    }, 0);

    return <div className="chart">
        {dataPoints.map(data => <ChartBar value={data.value} maxValue={totalMaximum} label={data.label} key={data.label} />)}
    </div>
}

export default Chart;