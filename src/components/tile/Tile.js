// Imports
import React from 'react';
import './style.css';

/**
 * @class Tile
 */
class Tile extends React.Component {
	constructor(props, data){
		super(props);

		// Member Variables
		this.isDark = data.isDark;
		// this.handleClick = this.handleClick.bind(this);

		// State Variables
		this.state = {
			active: false,
		};

		// Reference
		this.ref = React.createRef();
	}

	/**
	 * @function toggleActiveState
	 * @purpose toggles whether this tile is active or not
	 */
	toggleActiveState = () => {
		this.setState({ active: !this.state.active });
	};

	// handleClick() {
	// 	console.log('Tile: handleClick: ', this);
	// 	return this;
	// }

	/**
	 * @function renderWeb
	 * @purpose render a tile for a web implementation
	 *
	 * @return {*}
	 */
	renderWeb = ( classColour, classActive, style ) => {
		const { label, key, col, row, children, onClick, ...rest } = this.props;

		return (
			<div id={label} key={key} ref={this.ref} row={row} col={col} className={'tile ' + classColour + classActive} style={style.tileSize} onClick={this.handleClick} {...rest}>
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