import React from 'react';
import './BearCard.css';
import axios from 'axios'
import { Button } from 'react-bootstrap';
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
                <Button onClick={updateBear}>Update</Button>
                <Button style={{ marginLeft: '0.4rem' }} onClick={deleteBear}>Delete</Button>
            </div>
        </div>

    )
}

export default BearCard;