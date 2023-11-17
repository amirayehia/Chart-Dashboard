"use client";
import { updateSelectedEra ,updateDataPeriod} from '../store-redux/slice'
import { ChangeEvent } from 'react';
import { useDispatch } from "react-redux";
import React from 'react';
import { AppDispatch } from '@/store-redux/store';
function SelectBox() {
    const dispatch = useDispatch<AppDispatch>();
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        
        dispatch(updateSelectedEra(event.currentTarget.value));
        dispatch(updateDataPeriod());
        
    }
    return (
        <div className='select__container'>
            {/* <label htmlFor="select-box" className='select__label'> Please select the period of time </label> */}
            <select id='select-box' onChange={onChangeHandler} className='select' defaultValue={''}>
                <option value="" className='option'>Please select the period of time</option>
                <option value="period1990-2000">1990 - 2000</option>
                <option value="period2000-2010" >2000 - 2010</option>
                <option value="period2010-2020">2010 - 2020</option>
            </select>
        </div>
    )
}

export default SelectBox;