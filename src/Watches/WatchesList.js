import PropTypes from 'prop-types';
import WatchModel from './WatchModel.js';
import Watch from './Watch.js';

function WatchesList(props) {
    const { Watches, onRemove: handleRemove } = props;

    //если у нас есть активные часы, то подготовим текстуры для оформления циферблата
    return (
        Watches.length > 0 &&
        <>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="a" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#777799'}} />
                        <stop offset="100%" style={{stopColor:'#ffffff'}} />
                    </linearGradient>
                    <linearGradient id="b" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" style={{stopColor:'#ffffff'}} />
                        <stop offset="25%" style={{stopColor:'#b6b6cc'}} />
                        <stop offset="40%" style={{stopColor:'#515177'}} />
                        <stop offset="48%" style={{stopColor:'#ffffff'}} />
                        <stop offset="56%" style={{stopColor:'#ffffff'}} />
                        <stop offset="75%" style={{stopColor:'#8b8baa'}} />
                        <stop offset="98%" style={{stopColor:'#efeff4'}} />
                        <stop offset="100%" style={{stopColor:'#fbfbfc'}} />
                    </linearGradient>
                    <linearGradient id="c" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" style={{stopColor:'#ffffff'}} />
                        <stop offset="100%" style={{stopColor:'#777799'}} />
                    </linearGradient>
                    <radialGradient id="d" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" style={{stopColor:'#ffffff'}} />
                        <stop offset="40%" style={{stopColor:'#ffffff'}} />
                        <stop offset="70%" style={{stopColor:'#e6e6ee'}} />
                        <stop offset="92%" style={{stopColor:'#b6b6cc'}} />
                        <stop offset="100%" style={{stopColor:'#636388'}} />
                    </radialGradient>
                    <radialGradient id="e" cx="50%" cy="150%" r="200%" fx="50%" fy="150%">
                        <stop offset="0%" style={{stopColor:'#ffffff'},{stopOpacity:0}} />
                        <stop offset="59%" style={{stopColor:'#ffffff'},{stopOpacity:0}} />
                        <stop offset="60%" style={{stopColor:'#ffffff'},{stopOpacity:0.6}} />
                        <stop offset="70%" style={{stopColor:'#ffffff'},{stopOpacity:0.3}} />
                        <stop offset="100%" style={{stopColor:'#ffffff'},{stopOpacity:0.0}} />
                    </radialGradient>
                </defs>
            </svg>
            {Watches.map(o => <Watch key={o.id} watch={o} onRemove={handleRemove} />)}
        </>
    )
}

WatchesList.propTypes = {
    Watches: PropTypes.arrayOf(PropTypes.instanceOf(WatchModel)).isRequired,
    onRemove: PropTypes.func.isRequired
}

export default WatchesList;