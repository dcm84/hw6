import PropTypes from 'prop-types';

function NotesList(props) {
    const { notes, onRemove } = props;

    return (
        notes.length > 0 &&
        notes.map(o =>
            <div key={o.id}>
                <img src="delete.png" onClick={() => onRemove(o.id)} />
                {o.content}
            </div>
        )
    )
}

NotesList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            content: PropTypes.string
        })
    ),
    onRemove: PropTypes.func.isRequired
}

export default NotesList;