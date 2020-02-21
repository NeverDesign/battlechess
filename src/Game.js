// Imports
import React from 'react';
import './Game.css';
import Tile from "./components/tile/Tile";
import Piece from "./components/piece/Piece";

// Data
import GameData from "./data/data";

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
			return <Tile key={refName} ref={refName} label={tile.col + tile.row}
						 size={this.state.gridSize} isDark={tile.isDark}
						 occupied={tile.occupied} occupant={tile.occupant}
			/>;
		});

	 	// 2. Update the board Tiles refs to include a handle to each tile
		this.tiles = tiles;

		// 3. Return the result
		return (<div className="container container-tiles" ref={ this.tileContainer }>{tiles}</div>);
	};

	generatePieces = () => {
		let pieces = [];

		pieces = this.state.pieceData.map( (piece) => {
			let key = piece.team + piece.type + piece.id + '-' + piece.row + piece.col;
			let refName = piece.team + piece.type + piece.id;
			return <Piece key={key} ref={refName} label={refName}
						  team={piece.team} col={piece.col} row={piece.row}
						  x={piece.x} y={piece.y} size={this.state.gridSize}
			/>;
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
		// TODO: Change this to use the board ref
		let boardWidth = document.getElementsByClassName('board')[0].offsetWidth;
		size = boardWidth / 8;

		this.setState({ gridSize: size });
	};

	// TODO: Update this so that the piece name and destination tile name can be passed in
	// TODO: Try understand what the hell this is actually doing now that it works
	movePiece = ( tileRef ) => {
		// console.log('movePiece: ', this.tileContainer.current.children.f5 );
		// console.log('movePiece: ', this.pieceContainer.current.children );

		// Extract the row and column data from the passed in tile reference
		let row = tileRef[0];
		let col = tileRef[1];

		// Find a tile class by ref
		let destinationTileData = this.state.tileData.find(( tile ) => {
			return tile.row === 'a' && tile.col === 1;
		});
		console.log('Destination Tile Data: ', destinationTileData);

		// Find a tile div by ref
		let destinationTile = this.tileContainer.current.children.e2;
		console.log('Destination Tile: ', destinationTile);

		let piece = this.pieces.find((piece) => {
			return piece.ref === 'lpawn1';
		});

		// Update the data
		let pieceDataArray = this.state.pieceData;
		console.log('Data: 1. ', this.state.pieceData);
		let pieceData = this.state.pieceData.find((piece, index) => {
			if( piece.id === 2 ){
				// Update the Piece object
				let updatedPiece = piece;
				updatedPiece.x = destinationTile.offsetTop;
				updatedPiece.y = destinationTile.offsetLeft;
				updatedPiece.row = 'f';
				updatedPiece.col = 9;

				// Update the piece in the data array
				pieceDataArray[index] = updatedPiece;

				// Update the Data in the state
				this.setState({'pieceData': pieceDataArray});
				console.log('Data: 2.', pieceDataArray);
			}

			return piece.id === 2;
		});

		console.log('piece: ', piece);
		// piece.movePiece( destinationTile.offsetTop, destinationTile.offsetLeft);


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
	};

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