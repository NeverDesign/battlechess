// Imports
import React from 'react';
import './style.css';

/**
 * @class Tile
 */
class Tile extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			active: false
		};

		this.ref = React.createRef();
	}

	/**
	 * @function toggleActiveState
	 * @purpose toggles whether this tile is active or not
	 */
	toggleActiveState = () => {
		this.setState({ active: !this.state.active });
	};

	/**
	 * @function renderWeb
	 * @purpose render a tile for a web implementation
	 *
	 * @return {*}
	 */
	renderWeb = ( classColour, classActive, style ) => {
		return (
			<div id={this.props.label} ref={this.ref} className={'tile ' + classColour + classActive} style={style.tileSize} onClick={this.toggleActiveState} >
				<div className="inner">
					<span>{this.props.label}</span>
					{this.props.children}
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
		const classColour = this.props.isDark ? 'dark ' : 'light ';
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