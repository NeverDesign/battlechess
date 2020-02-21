// Imports
import React from 'react';
import './Game.css';
import Tile from "./components/tile/Tile";

// Data
import GameData from "./data/data";
import Piece from "./components/piece/Piece";

/**
 * @class Game
 */
class Game extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			gridSize: 0,
			tileData: [],
			pieceData: [],
		};

		this.board = React.createRef();
		this.tileContainer = React.createRef();
		this.tiles = React.createRef();
		this.pieceContainer = React.createRef();
		this.pieces = React.createRef();
	}

	/**
	 * @function generateTiles
	 * @purpose generates the tiles required to create the board
	 * 
	 * @return {*}
	 */
	generateTiles = () => {
		let tiles = [];

		// 1. Generate the tiles for the board
	 	tiles = this.state.tileData.map( (tile, index) => {
			let refName = tile.col + tile.row;
			let tileComponent = <Tile key={''+index} ref={refName} label={tile.col + tile.row}
						 size={this.state.gridSize} isDark={tile.isDark}
						 occupied={tile.occupied} occupant={tile.occupant}
			/>;
			return tileComponent;
		});

	 	// 2. Update the board Tiles refs to include a handle to each tile
		this.tiles = tiles;

		// 3. Return the result
		return (<div className="container container-tiles" ref={ this.tileContainer }>{tiles}</div>);
	};

	generatePieces = () => {
		let pieces = [];

		pieces = this.state.pieceData.map( (piece, index) => {
			return <Piece ref={'lp1'} key={''+index} team={piece.team} col={piece.col} row={piece.row} size={this.state.gridSize} />
		});

		// 2. Update the board Tiles refs to include a handle to each tile
		this.pieces = pieces;

		return (<div className="container container-pieces" ref={ this.pieceContainer }>{pieces}</div>);
	};

	/**
	 * @function setGridSize
	 * @purpose Determine the size each tile needs to be when the game component mounts
	 */
	setGridSize = () => {
		let size = 0;
		let boardWidth = document.getElementsByClassName('board')[0].offsetWidth;
		size = boardWidth / 8;

		this.setState({ gridSize: size });
	};

	movePiece = () => {
		console.log('movePiece: ', this.tileContainer.current.children.f5 );

		// Find a tile class by ref
		// let destinationTile = this.tiles.find( ( tile ) => {
		// 	return tile.ref === 'd8';
		// });

		// Find a tile div by ref
		let destinationTile = this.tileContainer.current.children.f5;

		let piece = this.pieces.find( (piece)=>{
			return piece.ref === 'lp1';
		} );
		console.log('piece: ', piece);
		// piece.movePiece( destinationTile.offsetTop, destinationTile.offsetLeft );

		console.log('movePiece: Dest: ', destinationTile.offsetLeft, destinationTile.offsetTop );
		// console.log('movePiece: Dest: ', destinationTile, );
	};

	/**
	 * @function componentDidMount
	 * @purpose run when the component is mounted and ready for use
	 */
	componentDidMount() {
		// Set the grid size
		this.setGridSize();

		// Retrieve the Data
		this.setState({'tileData': GameData.tiles, 'pieceData': GameData.pieces });
	}

	/**
	 * @function renderWeb
	 * @purpose render the game board for web
	 */
	renderWeb = () => {
		let tilesContainer = this.generateTiles();
		let piecesContainer = this.generatePieces();

		return (
			<div className={'game'}>
				<header className={'header'}>
					<h1>Battle Chess</h1>
				</header>

				<main role={'main'}>
					<div className={'container-board'}>
						{/*<div className="container-graveyard container-graveyard-opponent"></div>*/}

						<div className={'board player-1'} ref={this.board}>
							{tilesContainer}
							{piecesContainer}
						</div>

						<a onClick={this.movePiece}>Test</a>

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