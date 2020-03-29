import React from 'react';
import BearCard from './BearCard';
import { useEffect } from 'react'
import './BearList.css';
import { useSelector, useDispatch } from 'react-redux';
import { bearActions } from '../redux/store'
import { bindActionCreators } from 'redux';
const BearList = props => {

    const bears = useSelector(state => state.bear) // connect bears Obj
    const actionsBear = bindActionCreators(bearActions, useDispatch());

    useEffect(() => {
        actionsBear.getBears()
    }, [])

    if (!bears || !bears.length)
        return (<h2>No bears</h2>)

    return (
        <div className='bearlist-container'>
            {
                bears.map((bear, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <BearCard  {...bear}/>
                    </div>
                ))
            }
        </div>

    )
}

export default BearList;