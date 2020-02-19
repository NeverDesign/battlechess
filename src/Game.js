// Imports
import React from 'react';
import './Game.css';

import Tile from "./components/tile/Tile";

/**
 * @class Game
 */
class Game extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			tileSize: 0,
			tiles: []
		};
	}

	/**
	 * @function generateTiles
	 * @purpose generates the tiles required to create the board
	 * 
	 * @return {*}
	 */
	generateTiles = () => {
		let tiles = [];
		let isDark = true;
		let rowCount = 8;
		let colNames = ['a','b','c','d','e','f','g','h'];

		// 1. Generate the tiles for the board
		tiles = Array(64).fill(0).map( ( current, index ) => {
			// Alternate the dark tile flag between light and dark
			if( index % 2 >= 0 ){
				isDark = !isDark;
			}

			// For new rows
			if ( index !== 0 && index % 8 === 0 ) {
				// Reverse the isDark flag so that starting tiles alternate
				isDark = !isDark;

				// Increment the row count
				rowCount--;
			}

			// Generate the tile name used for referencing each tile in the grid
			let tileName = colNames[index % 8] + rowCount;
			let tile = <Tile key={''+index} ref={tileName} label={tileName} isDark={ isDark } size={this.state.tileSize} />;

			// Render the result
			return tile;
		});

		// 2. Return the result
		return (<>{tiles}</>);
	};

	/**
	 * @function setTileSize
	 * @purpose Determine the size each tile needs to be when the game component mounts
	 */
	setTileSize = () => {
		let size = 0;
		let boardWidth = document.getElementsByClassName('board')[0].offsetWidth;
		size = boardWidth / 8;

		this.setState({ tileSize: size });
	};

	/**
	 * @function componentDidMount
	 * @purpose run when the component is mounted and ready for use
	 */
	componentDidMount() {
		this.setTileSize();
	}

	/**
	 * @function rederWeb
	 * @purpose render the game board for web
	 */
	renderWeb = () => {
		let tiles = this.generateTiles();

		return (
			<div className={'game'}>
				<header className={'header'}>
					<h1>Battle Chess</h1>
				</header>

				<main role={'main'}>
					<div className={'container-board'}>
						{/*<div className="container-graveyard container-graveyard-opponent"></div>*/}

						<div className={'board'}>
							{tiles}
						</div>

						{/*<a onClick={tiles[0].toggleActiveState}>ToggleActive</a>*/}

						{/*<div className="container-graveyard container-graveyard-player"></div>*/}
					</div>
				</main>
			</div>
		);
	}

	/**
	 * @function Render
	 * @purpose render the component
	 * 
	 * TODO: Switch out the render method per platform
	 */
	render() {
		return this.renderWeb();
	}
}

export default Game;