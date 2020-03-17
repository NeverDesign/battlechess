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
			alertGame: null,
			boardSize: boardSize,
			gridSize: gridSize,
			tileData: GameData.tiles,
			pieceData: GameData.pieces,
			sourceTile: null,
			sourcePiece: null,
			destinationTile: null,
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
				'size': this.state.gridSize,
				'handleclick': this.handleClick
			};
			let state = {
				'active': tileData.active,
				'occupied': tileData.occupied,
				'occupant': tileData.occupant
			}
			return new Tile( props, state, tileData );
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
			let key = pieceData.team + pieceData.type + pieceData.id;
			let refName = pieceData.team + pieceData.type + pieceData.id;
			let props = {
				'key': key,
				'ref': refName,
				'label': refName,
				'team': pieceData.team,
				'size': this.state.gridSize,
			};
			let state = {
				'col': pieceData.col,
				'row': pieceData.row,
				'x': pieceData.x,
				'y': pieceData.y,
			}

			// 2. Update the tile data occupied and occupant information
			this.updateTileOccupants( refName, pieceData.col + pieceData.row );

			return new Piece( props, state, pieceData);
		});

		// 3. Update the board Tiles refs to include a handle to each tile
		return pieces;
	};

	/**
	 * @function updateTileOccupantInfo
	 * @purpose ensure the tile is updated to include the occupant handle
	 * 
	 * @param  {[type]} tileRef  [description]
	 * @param  {[type]} pieceRef [description]
	 */
	updateTileOccupants( pieceRef, tileRef ){
		// console.log('updateTileOccupants: ', tileRef, pieceRef );
		let tileOptions = null;

		// If the piece reference is specified the tile is occupied - populate the occupied state
		if ( pieceRef ){
			tileOptions = { occupied: true, occupant: pieceRef }
		}
		// Else tile is no longer occupied - clear it out
		else {
			tileOptions = { occupied: false, occupant: '' }
		}

		this.updateTileData( tileRef, tileOptions );
	};

	/**
	 * @function updateTileData
	 * @purpose update the tile data for a specific tile with new data passed in
	 *
	 * @param  {string} tileRef - The handle to the tile
	 * @param  {object} options - An object containing the options that align with the tile data but contain new values
	 */
	updateTileData ( tileRef, options ){
		let tileData = this.state.tileData;

		// Loop through the tile data and update the tile options 
		tileData.map((data) => {
			let refName = data.col + data.row;

			// If the tile matches the passed in reference
			if( tileRef === refName ){
				// Update the data with the passed in values
				Object.assign( data, options );
			}

			return data;
		});
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

			return null;
		});

		// Update the tile occupant state
		this.updateTileOccupants( pieceRef, tileRef );

		// Update the piece data
		this.setState({'pieceData': pieceData});
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

			return null;
		});
		this.setState({pieceData: pieceData});
	}

	/**
	 * @function handleClick
	 * @purpose handle the click event of a tile including moving etc.
	 * TODO: Update this to handle messaging, setting active piece for spell casting etc.
	 * 
	 * @param  {object} element - a tile element
	 */
	handleClick = ( element ) => {
		console.log( 'tile clicked', element );
		let { sourceTile, sourcePiece, destinationTile } = this.state;

		// If the source tile is set
		if ( sourceTile ){
			// Ensure that the destination tile is not the same as the source tile
			if ( element.props.key !== sourceTile.props.key ){
				destinationTile = element.props.key;

				// Check if the destination tile is occupied
				if( element.isOccupied() ){
					// Handle occupied case
				}
				else {
					// Disable the active state of the tile
					this.updateTileData( sourceTile.props.key, {active: false });

					// Move the piece and update the tiles state
					this.movePiece( sourcePiece, destinationTile );
					this.updateTileOccupants( null, sourceTile.props.key );

					// End the player's turn by resetting the board state
					this.setState({sourceTile: null, sourcePiece: null});
				}
			}
			else {
				// Destination tile is the same as the source tile, do nothing
			}
		}
		else {
			// If the selected tile has an occupant
			if( element.isOccupied() ){
				console.log( 'occupied: ' );
				// And the occupant is the current player's piece
				// Set the source tile
				sourceTile = element;
				sourcePiece = element.getOccupant();

				// Toggle the Active state of the tile
				this.updateTileData( sourceTile.props.key, {active: true });

				// Update the State
				this.setState({ sourceTile: sourceTile, sourcePiece: sourcePiece });
			}
		}
	};

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

		// Render the game
		return (
			<div className={'game'}>
				<header className={'header'}>
					<h1>Battle Chess</h1>
				</header>

				<main role={'main'}>
					{this.state.alertGame && <div className="{'alert alert-game'}">{this.state.alertGame}</div>}
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

						{/*<div className="container-graveyard container-graveyard-player"></div>*/}
					</div>

					{/* Render the tile data */}
					{/*<div><pre>{JSON.stringify(this.state.tileData, null, 2) }</pre></div>*/}
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