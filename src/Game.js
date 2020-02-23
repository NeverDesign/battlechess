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

		// TODO: Clean this up once the generateTiles/generatePiece data functions have become less volatile
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

		// 1. Generate an array of tile classes based on the retrieved tile data
		tiles = this.state.tileData.map((tileData) => {
			let refName = tileData.col + tileData.row;
			let props = {
				'key': refName,
				'label': refName,
				'ref': refName,
				'isDark': tileData.isDark,
				'size': this.state.gridSize
			};
			return new Tile( props, tileData );
		});

	 	// 2. Update the board Tiles refs to include a handle to each tile
		this.tiles = tiles;

		// 3. Create an array of rendered tile nodes
		let tileNodes = this.tiles.map((tile) => { return tile.render() });

		// 4. Return the result
		return (<div className="container container-tiles" ref={ this.tileContainer }>{tileNodes}</div>);
	};

	/**
	 * @function generatePieces
	 * @purpose generate the pieces required to play the game
	 *
	 * @returns {*}
	 *
	 * TODO: Update this to generate pieces for each player
	 */
	generatePieces = () => {
		let pieces = [];

		// 1. Generate an array of piece classes based on the retrieved piece data
		pieces = this.state.pieceData.map( (pieceData) => {
			let key = pieceData.team + pieceData.type + pieceData.id + '-' + pieceData.row + pieceData.col;
			let refName = pieceData.team + pieceData.type + pieceData.id;
			let props = {
				'key': key,
				'ref': refName,
				'label': refName,
				'team': pieceData.team,
				'col': pieceData.col,
				'row': pieceData.row,
				'x': pieceData.x,
				'y': pieceData.y,
				'size': this.state.gridSize,
			};

			return new Piece( props, pieceData);
		});

		// 2. Update the board Tiles refs to include a handle to each tile
		this.pieces = pieces;

		// 3. Create an array of rendered tile nodes
		let pieceNodes = this.pieces.map((piece) => { return piece.render() });

		return (<div className="container container-pieces" ref={ this.pieceContainer }>{pieceNodes}</div>);
	};

	/**
	 * @function setGridSize
	 * @purpose Determine the size each tile needs to be when the game component mounts
	 */
	setGridSize = () => {
		let size = 0;
		let boardWidth = this.board.current.offsetWidth;
		size = boardWidth / 8;

		this.setState({ gridSize: size });
	};

	// TODO: Update this so that the piece name and destination tile name can be passed in
	/**
	 * @function MovePiece
	 * @purpose move a piece by reference to a new tile by reference
	 *
	 * @param pieceRef
	 * @param tileRef
	 */
	movePiece = ( pieceRef, tileRef ) => {
		console.log('movePiece: ', pieceRef, tileRef );
		// Initialize variables
		let x, y, row, col;

		// Loop through the list of Tile classes to find the one that matches the tileRef and get it's HTML Node
		let destinationTileNode = null;
		for( let i = 0; i < this.tiles.length; i++ ){
			// If the class key prop matches the tile ref get the HTML node from the tileContainer ref
			if( this.tiles[i].props.key === tileRef ){
				destinationTileNode = this.tileContainer.current.children[i];

				// Get the position and row/col data
				x = destinationTileNode.offsetLeft;
				y = destinationTileNode.offsetTop;
				col = this.tiles[i].props.ref[0];
				row = parseInt(this.tiles[i].props.ref[1]);
			}
		}

		// Loop through the piece data and find the piece to move by reference and update the x,y data and tile handle
		let pieceData = this.state.pieceData;
		this.state.pieceData.find(( data, index ) => {
			let refName = data.team + data.type + data.id;
			if( pieceRef === refName ){
				data.x = x;
				data.y = y;
				data.row = row;
				data.col = col;
			}
			pieceData[index] = data;
		});
		this.setState({'pieceData': pieceData});
		// pieceToMove.updatePosition( destinationTile.offsetLeft, destinationTile.offsetTop );
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

						<button onClick={() => this.movePiece('lpawn1','c6')}>Move Light Pawn</button>
						<button onClick={() => this.movePiece('dpawn2','c7')}>Move Dark Pawn</button>

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