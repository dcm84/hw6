import PropTypes from 'prop-types';
import React, {useState} from 'react';
import WatchModel from './WatchModel.js';
import {v4 as uuidv4} from 'uuid';

function WatchesAdd(props) {
    const {onAdd} = props;
    const [form, setForm] = useState({name: 'Москва', timeZone: 3})
    
    //обработчик изменения состояния полей формы
    const handleChange = evt => {
        const {name, value} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    //обработчик отправки формы
    const handleSubmit = evt => {
        evt.preventDefault();

        //для простоты зоны только целые
        let timeZone = Number(form.timeZone);

        if(!isNaN(timeZone) && Number.isInteger(timeZone)) {
            //корректный диапазон зон от -12 до 14
            if(timeZone > -13 && timeZone < 15 && form.name) {
                const Watch = new WatchModel(uuidv4(), form.name, timeZone);
                onAdd(Watch);
            }
        }

        //установим форму в начальное состояние
        setForm({name: 'Москва', timeZone: 3});
    }

    return (
        <form>
            <table>
                <tbody>
                <tr>
                    <td>
                        <p>Название</p><input name="name" value={form.name}  onChange={handleChange}  />
                    </td>
                    <td>
                        <p>Временная зона</p><input name="timeZone" value={form.timeZone}  onChange={handleChange} />
                    </td>
                    <td><button onClick={handleSubmit}>Добавить</button></td>
                </tr>
                </tbody>
            </table>
        </form>
    );
}

WatchesAdd.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default WatchesAdd;