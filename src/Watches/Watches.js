import React, {useState} from 'react';
import WatchModel from './WatchModel.js';
import WatchesList from './WatchesList.js';
import './Watches.css';
import WatchesAdd from './WatchesAdd.js';
import {v4 as uuidv4} from 'uuid';

function Watches() {
    const [Watches, setWatches] = useState([
        //демо данные
        new WatchModel(uuidv4(), 'Москва', 3),
        new WatchModel(uuidv4(), 'Екатеринбург', 5),
        new WatchModel(uuidv4(), 'Владивосток', 10),
    ]);

    //обработчик для добавления
    const handleAdd = Watch => {
        let newWatches = new WatchModel(uuidv4(), Watch.name, Watch.timeZone);
        setWatches(prevWatches => [ ...prevWatches, newWatches]);
    }
    
    //обработчик для удаления
    const handleRemove = id => {
        setWatches(Watches.filter(o => o.id !== id));
    }

    return (
        <div className="worldClock">
            <WatchesAdd onAdd={handleAdd} />
            <WatchesList Watches={Watches} onRemove={handleRemove} />
        </div>
    )

}

export default Watches;