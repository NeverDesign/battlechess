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
		console.log('Game: Constructor: ');
		super(props);

		// Member Variables
		// TODO: Clean this up once the generateTiles/generatePiece data functions have become less volatile
		const boardSize = 500;
		const gridSize = boardSize/8;
		this.board = React.createRef();

		// Tile Variables
		this.tiles = [];
		this.tileContainer = React.createRef();

		// Piece Variables
		this.pieces = [];
		this.pieceContainer = React.createRef();

		// State Variables
		this.state = {
			boardSize: boardSize,
			gridSize: gridSize,
			tileData: GameData.tiles,
			pieceData: GameData.pieces,
			sourceTile: null,
			destinationTile: null
		};
	}

	/**
	 * @function generateTiles
	 * @purpose generates the tileClasses required to create the board
	 * 
	 * @return {*}
	 */
	generateTiles = () => {
		console.log('generateTiles: ');
		let tiles = [];

		// 1. Generate an array of tile classes based on the retrieved tile data
		tiles = this.state.tileData.map((tileData) => {
			let refName = tileData.col + tileData.row;
			let props = {
				'key': refName,
				'label': refName,
				'ref': refName,
				'size': this.state.gridSize
			};
			return new Tile( props, tileData );
		});

	 	// 2. Update the board Tiles refs to include a handle to each tile
		return tiles;
	};

	/**
	 * @function generatePieces
	 * @purpose generate the pieceClasses required to play the game
	 *
	 * @returns {*}
	 *
	 * TODO: Update this to generate pieceClasses for each player
	 */
	generatePieces = () => {
		console.log('generatePieces: ');
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
		return pieces;
	};

	/**
	 * @function getTilePosition
	 * @purpose get the x, y, row and col info for a specific tile
	 *
	 * @param tileRef
	 * @returns {{col: *, x: number, y: number, row: number}}
	 */
	getTilePosition = ( tileRef ) => {
		let x, y, row, col;
		let destinationTileNode = null;
		const tileClasses = this.tiles;

		// Loop through the tiles to find the one that matches and grab it's position info
		for(let i = 0; i < tileClasses.length; i++ ){
			if( tileClasses[i].props.key === tileRef ){
				// Set the destinationTileNode to the current class
				destinationTileNode = this.tileContainer.current.children[i];

				// Get the position and row/col data
				x = destinationTileNode.offsetLeft;
				y = destinationTileNode.offsetTop;
				col = tileClasses[i].props.ref[0];
				row = parseInt(tileClasses[i].props.ref[1]);
			}
		}

		// Return an object containing the position info
		return { x, y, row, col };
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

		// Loop through the list of Tile classes to find the one that matches the tileRef and get it's HTML Node
		let destinationInfo = this.getTilePosition( tileRef );

		// Loop through the piece data and find the piece to move by reference and update the x,y data and tile handle
		let pieceData = this.state.pieceData;
		pieceData.find(( data, index ) => {
			let refName = data.team + data.type + data.id;
			if( pieceRef === refName ){
				data.x = destinationInfo.x;
				data.y = destinationInfo.y;
				data.row = destinationInfo.row;
				data.col = destinationInfo.col;
			}
			pieceData[index] = data;
		});
		this.setState({'pieceData': pieceData}, ()=>{ console.log('pieceData: new: ', pieceData ); });
		// pieceToMove.updatePosition( destinationTile.offsetLeft, destinationTile.offsetTop );
	};

	/**
	 * @function componentDidMount
	 * @purpose run when the component is mounted and ready for use, after initial render
	 */
	componentDidMount() {
		console.log('Game: componentDidMount: ');

		// Update the Piece Data with x and y info from the rendered tiles
		let pieceData = this.state.pieceData;
		this.state.pieceData.find(( piece, index ) => {
			const tileRef = piece.col + piece.row;
			const tilePositionInfo = this.getTilePosition( tileRef );

			piece.x = tilePositionInfo.x;
			piece.y = tilePositionInfo.y;
			piece.row = tilePositionInfo.row;
			piece.col = tilePositionInfo.col;

			pieceData[index] = piece;
		});
		this.setState({pieceData: pieceData});
	}

	// handleClick = ( element ) => {
	// 	console.log( 'tile clicked', element );
	// };

	/**
	 * @function renderWeb
	 * @purpose render the game board for web
	 */
	renderWeb = () => {
		console.log('Game: renderWeb: ');
		const boardStyle = {
			width: this.state.boardSize + 'px'
		};

		// Render each of the tiles
		this.tiles = this.generateTiles();
		const tileNodes = this.tiles.map((tile) => { return tile.render(); });

		this.pieces = this.generatePieces();
		const pieceNodes = this.pieces.map((piece) => { return piece.render() });

		return (
			<div className={'game'}>
				<header className={'header'}>
					<h1>Battle Chess</h1>
				</header>

				<main role={'main'}>
					<div className={'container-board'} style={boardStyle}>
						{/*<div className="container-graveyard container-graveyard-opponent"></div>*/}

						<div className={'board player-1'} ref={this.board}>
							<div className="container container-tiles" ref={ this.tileContainer }>
								{tileNodes}
							</div>
							<div className="container container-pieces" ref={ this.pieceContainer }>
								{pieceNodes}
							</div>
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