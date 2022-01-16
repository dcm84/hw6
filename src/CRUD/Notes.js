import React from 'react';
import NotesList from './NotesList.js';
import './Notes.css';
import NoteAdd from './NoteAdd.js';

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }

    //обработчик для добавления
    handleAdd = content => {
        console.log("sending to new note: " + content);
        fetch(process.env.REACT_APP_API_URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: 0,
                content: content
            })
        })
            .then(() => this.updateNotes())
    }

    //обработчик для удаления
    handleRemove = id => {
        console.log("deleting note with id=" + id);
        fetch(process.env.REACT_APP_API_URL + '/' + id, {
            method: "DELETE"
        })
            .then(() => this.updateNotes());
    }

    //загружает данные через API
    updateNotes = () => {
        console.log("updating data from " + process.env.REACT_APP_API_URL);
        fetch(process.env.REACT_APP_API_URL)
            .then(response => {
                return response.json()
            })
            .then(notes => {
                this.setState({ notes: notes });
            });
    }

    //предварительная загрузка данных
    componentDidMount() {
        this.updateNotes();
    }

    render() {
        return (
            <div className="notes">
                <h2>Notes <img src="reload.png" onClick={this.updateNotes} /></h2>
                <NotesList notes={this.state.notes} onRemove={this.handleRemove} />
                <NoteAdd onAdd={this.handleAdd} />
            </div>
        )
    }
}

export default Notes;