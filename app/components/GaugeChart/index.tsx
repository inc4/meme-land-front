import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useInView } from 'react-intersection-observer';

const DonutChart = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only once
    threshold: 0.3,    // percentage of chart visible before triggering
  });

  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      animation: true,
    },
    title: { text: '' },
    plotOptions: {
      pie: {
        innerSize: '80%',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#121416',
        dataLabels: { enabled: false },
        animation: {
          duration: 1000,
        },
      },
      series: {
        states: {
          hover: {
            enabled: false,
          }
        }
      }
    },
    series: [
      {
        name: 'Distribution',
        data: [
          { name: 'Team', y: 8, color: '#FF00FF' },
          { name: 'Investor B', y: 2, color: '#A8FF44' },
          { name: 'Investor A', y: 2, color: '#0D86FC' },
          { name: 'Big Holder', y: 90, color: '#FFD700' },
        ],
      },
    ],
    credits: { enabled: false },
    tooltip: { enabled: false },
  };

  return (
    <div ref={ref} style={{ width: '100%', maxWidth: '310px', margin: '0 auto', borderRadius: '50%', overflow: 'hidden', pointerEvents: 'none' }}>
      {isVisible && <HighchartsReact highcharts={Highcharts} options={options} />}
    </div>
  );
};

export default DonutChart;
