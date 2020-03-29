import React from 'react';
import './BearCard.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { bearActions } from '../redux/store'
import { bindActionCreators } from 'redux';
const BearCard = props => {
    const form = useSelector(state => state.form)
    const actions = bindActionCreators(bearActions, useDispatch());
    const deleteBear = async () => {
        const result = await axios.delete(`http://localhost/api/bears/${props.id}`)
        actions.deleteBear(props.id)
    }
    const updateBear = async () => {
        const result = await axios.put(`http://localhost/api/bears/${props.id}`, form)
        actions.updateBear(props.id, form)
    }
    return (
        <div className='bearcard-container'>
            <div className='bearcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='bearcard-weight'>{props.weight}</p>
                <p className='bearcard-name'>{props.name}</p>
            </div>
            <div className='bearcard-actions'>
                <div onClick={updateBear}>Update</div>
                <div onClick={deleteBear}>Delete</div>
            </div>
        </div>

    )
}

export default BearCard;