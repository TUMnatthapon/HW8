import React from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { bearActions } from '../redux/store'
import { formActions } from '../redux/store'
import { bindActionCreators } from 'redux';
const InputForm = props => {

    const actionsBear = bindActionCreators(bearActions, useDispatch());
    const actionsForm = bindActionCreators(formActions, useDispatch());
    const form = useSelector(state => state.form)
    const bears = useSelector(state => state.bear)
    const addBear = async () => {
        await axios.post(`http://localhost/api/bears`, form)
        actionsBear.addBear(bears, form)
    }
    return (
        
        <div className='form-container' style={{ marginTop: '1rem' }} >
            <h2>ADD BEAR</h2>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input className='input' type="text" onChange={(e) => actionsForm.changeName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>
                            <input className='input' type="number" onChange={(e) => actionsForm.changeWeight(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            <input className='input' type="text" onChange={(e) => actionsForm.changeImg(e.target.value)} /> <br />
                        </td>
                    </tr>
                    <tr>
                            <Button  style={{ marginLeft: '0.3rem' }} onClick={addBear}>CREATE</Button>  
                    </tr>
                </tbody>
        </div>
    )
}

export default InputForm