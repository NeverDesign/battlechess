// Imports
import React from 'react';
import './style.css';

/**
 * @class Tile
 */
class Tile extends React.Component {
	constructor(props, state, data){
		super(props);

		// Member Variables
		this.isDark = data.isDark;
		// this.handleClick = this.handleClick.bind(this);

		// State Variables
		if (state){
			this.state = state;
		}

		// Reference
		this.ref = React.createRef();
	}

	/**
	 * @function toggleActiveState
	 * @purpose toggles whether this tile is active or not
	 */
	toggleActiveState = ( activeState ) => {
		this.setState({ active: activeState });
	};

	/**
	 * @function onClick
	 * @purpose function that handles the click event for a tile and the callback passed in from the parent
	 */
	onClick = () => {
		const { handleclick } = this.props;

		if ( handleclick ){
			handleclick( this );
		} 
	};

	/**
	 * @function isOccupied
	 * @purpose returns whether or not the tile is occupied
	 * @return boolean
	 */
	isOccupied = () => {
		return this.state.occupied;
	};

	/**
	 * @function getOccupant
	 * @purpose returns the reference to the piece that is occupying the tile
	 * @return string
	 */
	getOccupant = () => {
		return this.state.occupant;
	};

	/**
	 * @function renderWeb
	 * @purpose render a tile for a web implementation
	 */
	renderWeb = ( classColour, classActive, style ) => {
		const { label, key, col, row, children, handleclick, ...rest } = this.props;

		return (
			<div id={label} key={key} row={row} col={col} className={'tile ' + classColour + classActive} style={style.tileSize} onClick={this.onClick} {...rest}>
				<div className="inner">
					<span>{label}</span>
					{children}
				</div>
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
		const classColour = this.isDark ? 'dark ' : 'light ';
		const classActive = this.state.active ? 'active ' : '';
		const hoverClass = '';

		const size = this.props.size;
		const style = {
			tileSize: {
				width: size,
				height: size
			}
		};

		return this.renderWeb( classColour, classActive, style );
	}
}

export default Tile;