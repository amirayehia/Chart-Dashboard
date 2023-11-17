import { TiltNeon } from '../component/Fonts/fonts';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ourData } from './types/index';

const Chart = ({ dataMac, area }: ourData) => {
  return (

    <div className='chart__item'>
      <h2 className={`chart__description ${TiltNeon.className}`}>the Net Income Of {area} In Dollars</h2>
      <LineChart
        width={500}
        height={300}
        data={dataMac}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis dataKey="money" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="money" stroke="#900C3F" activeDot={{ r: 8 }} strokeWidth={2} />
      </LineChart>

    </div>
  )

}

export default Chart