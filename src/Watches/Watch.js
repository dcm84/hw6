import React from 'react';
import PropTypes from 'prop-types';
import WatchModel from './WatchModel.js';

class Watch extends React.Component {
    constructor(props) {
        super(props);
    }

    //запускает часы в нужной временной зоне
    startClock = (id, timeZone = 0) => {
        var date = new Date();
        var timestamp = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
        var d = new Date(timestamp + timeZone * 3600 * 1000);
        var s = d.getSeconds();
        var m = d.getMinutes() + s / 60;
        var h = (d.getHours() % 12) + m / 60 + s / 3600;

        //это параметры svg-анимации
        document.querySelector('#' + id + ' #st').setAttribute('from', s * 6);
        document.querySelector('#' + id + ' #mt').setAttribute('from', m * 6);
        document.querySelector('#' + id + ' #ht').setAttribute('from', h * 30);
        document.querySelector('#' + id + ' #st').setAttribute('to', 360 + s * 6);
        document.querySelector('#' + id + ' #mt').setAttribute('to', 360 + m * 6);
        document.querySelector('#' + id + ' #ht').setAttribute('to', 360 + h * 30);
    }

    componentDidMount() {
        //этот скрипт не придется отключать при удалении часов.
        this.startClock('clock_' + this.props.watch.id, this.props.watch.timeZone);
    }

    render() {
        return (
            <div className="clock">
                <div className="clockDelete" onClick={() => this.props.onRemove(this.props.watch.id)} >X</div>
                <p>{this.props.watch.name}</p>
                <svg viewBox="0 0 400 400" width="100" height="100" version="1.0" id={'clock_' + this.props.watch.id}>
                    <g transform="translate(200 200)">
                        <circle cx="0" cy="0" r="200" fill="#cecedd" />
                        <circle cx="0" cy="0" r="196" stroke="url(#a)" strokeWidth="5" fill="url(#b)" />
                        <circle cx="0" cy="0" r="170" stroke="url(#c)" strokeWidth="4" fill="url(#d)" />
                        <circle cx="0" cy="0" r="172" stroke="#ffffff" strokeWidth="0.5" fill="none" />
                        <circle cx="0" cy="0" r="193.5" stroke="#ffffff" strokeWidth="0.5" fill="none" />
                        <g id="O">
                            <polygon points="4,155 4,130 -4,130 -4,155"
                                style={{ fill: '#777799' }, { stroke: '#313155' }, { strokeWidth: 1 }} />
                            <polygon points="4,-155 4,-130 -4,-130 -4,-155"
                                style={{ fill: '#777799' }, { stroke: '#313155' }, { strokeWidth: 1 }} />
                        </g>
                        <g transform="rotate(30)"><use xlinkHref="#O" /></g>
                        <g transform="rotate(60)"><use xlinkHref="#O" /></g>
                        <g transform="rotate(90)"><use xlinkHref="#O" /></g>
                        <g transform="rotate(120)"><use xlinkHref="#O" /></g>
                        <g transform="rotate(150)"><use xlinkHref="#O" /></g>
                        <polygon id="h" points="6,-80 6,18 -6,18 -6,-80" style={{ fill: '#232344' }}>
                            <animateTransform id="ht" attributeType="xml" attributeName="transform" type="rotate" from="000"
                                to="000" begin="0" dur="86400s" repeatCount="indefinite" />
                        </polygon>
                        <polygon id="m" points="3.5,-140 3.5,23 -3.5,23 -3.5,-140" style={{ fill: '#232344' }}>
                            <animateTransform id="mt" attributeType="xml" attributeName="transform" type="rotate" from="000"
                                to="000" begin="0" dur="3600s" repeatCount="indefinite" />
                        </polygon>
                        <polygon id="s" points="2,-143 2,25 -2,25 -2,-143" style={{ fill: '#232344' }}>
                            <animateTransform id="st" attributeType="xml" attributeName="transform" type="rotate" from="000"
                                to="000" begin="0" dur="60s" repeatCount="indefinite" />
                        </polygon>
                    </g>
                </svg>
            </div>
        );
    }
}

Watch.propTypes = {
    watch: PropTypes.instanceOf(WatchModel).isRequired,
    onRemove: PropTypes.func.isRequired
}

export default Watch