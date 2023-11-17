"use client";
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchMacData } from "@/store-redux/slice";
import { AppDispatch, RootState } from '@/store-redux/store';
import SelectBox from '@/component/Select';
import Chart from '@/component/Chart';
import Header from '../component/Header';

export default function Home() {
  const userRef = useRef(false)
  const dispatch = useDispatch<AppDispatch>();
  const { macdata, loading, selectEdera } = useSelector((state: RootState) => state.macData);

  useEffect(() => {
    if (!userRef.current) {
      userRef.current = true
      dispatch(fetchMacData());
      console.log(macdata)
    }
  }, []);
  
  return (
    <main >
      <Header />
      <SelectBox />
      {
        loading && <p>Loading</p>
      }
      {
        macdata.length && selectEdera ? <div className='chart_container'>
          <Chart dataMac={macdata[0]['Canada']} area='Canada' />
          <Chart dataMac={macdata[0]['USA']} area='USA' />
          <Chart dataMac={macdata[0]['South-Africa']} area='South-Africa' />
        </div> : ''
      }



    </main>
  )
}
