// Imports
import React from 'react'

class Piece extends React.Component {
	constructor(props){
		super(props);

		this.state = {};
	}

	/**
	 * @function renderWeb
	 * @purpose render a tile for a web implementation
	 *
	 * @return {*}
	 */
	renderWeb = ( classColour ) => {
		return (
			<div ref={this.props.label} className={'piece ' + classColour } >
				<div className="inner">
					<span>&#9817;</span>
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

		return this.renderWeb( classColour, classActive, style);
	}
}

export default Piece;