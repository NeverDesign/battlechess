// Imports
import React from 'react';
import './style.scss';

class PlayerInfo extends React.Component {
    constructor(props,) {
        super(props);
    }

    /**
     * @function renderWeb
     * @purpose render the player info tile for a web implementation
     */
    renderWeb = () => {
        return (
            <div className={'container-player-info'}>
                <div className={'inner'}>
                    <div className={'profileContainer'}>

                    </div>
                    <div className={'player-info'}>
                        <span className={'player-type'}>Opponent</span>
                        <span className={'player-name'}>{this.opponent.userName}</span>
                    </div>
                    <div className={'turn-marker'}>
                        <span className={'turn-text'}>Player Turn</span>
                    </div>
                </div>
            </div>
        );
    };

    /**
     * @function render
     * @purpose render the Component
     */
    render() {

    }
}

export default PlayerInfo;