// Imports
import React from 'react'
import './style.css';

class Piece extends React.Component {
	constructor(props, data){
		super(props);

		this.state = {
			'col': this.props.col,
			'row': this.props.row,
			'x': data.x,
			'y': data.y,
		};

		this.ref = React.createRef();
	}

	/**
	 * @function componentDidMount
	 * @purpose run when the component is mounted and ready for use
	 */
	componentDidMount() {
		const { col, row, x, y } = this.props;
		this.setState({'col': col, 'row': row, 'x': x, 'y': y });
	};

	/**
	 * @function renderWeb
	 * @purpose render a tile for a web implementation
	 *
	 * @return {*}
	 */
	renderWeb = ( classColour, classActive, size ) => {
		const style = {
			width: size,
			height: size,
			fontSize: size,
			top: this.state.y + 'px',
			left: this.state.x + 'px'
		};

		return (
			<div id={this.props.label} key={this.props.key} ref={this.ref} className={'piece ' + classColour + classActive} style={style} >
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
		const classActive = this.state.active ? 'active ' : '';
		const size = this.props.size;

		return this.renderWeb( classColour, classActive, size );
	}
}

export default Piece;