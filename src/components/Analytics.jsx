import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const Analytics = () => {
    const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api/feedback/analytics')
      .then(response => {
        setData({
          labels: response.data.labels,
          datasets: [
            {
              label: 'Feedback Count',
              data: response.data.counts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }
          ]
        });
      });
  }, []);
  return (
    <div>
      <Bar data={data} />
    </div>
  )
}

export default Analytics
