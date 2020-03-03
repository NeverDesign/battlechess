// Imports
import React from 'react'
import './style.css';

class Piece extends React.Component {
	constructor(props, data){
		super(props);

		// Member Variables
		this.isDark = data.isDark;
		this.type = data.type;

		// State Variables
		this.state = {
			x: props.x,
			y: props.y,
			row: props.row,
			col: props.col,
		};

		// Reference
		this.ref = React.createRef();
	}

	/**
	 * @function componentDidMount
	 * @purpose run when the component is mounted and ready for use
	 */
	componentDidMount() {

	};

	updatePosition = ( x, y, row, col ) => {
		this.setState({
			col: col,
			row: row,
			x: x,
			y: y
		})
	};

	/**
	 * @function renderWeb
	 * @purpose render a tile for a web implementation
	 *
	 * @return {*}
	 */
	renderWeb = ( classType, classColour, classActive, size ) => {
		const { label, key, col, row, type, children, ...rest } = this.props;
		const style = {
			width: size,
			height: size,
			fontSize: size,
			top: this.state.y + 'px',
			left: this.state.x + 'px'
		};

		return (
			<div id={label} key={key} ref={this.ref} className={'piece ' + classType + classColour + classActive} style={style} {...rest} >
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
		const classColour = this.isDark ? 'dark ' : 'light ';
		const classActive = this.state.active ? 'active ' : '';
		const classType = this.type + ' ';
		const size = this.props.size;

		return this.renderWeb( classType, classColour, classActive, size );
	}
}

export default Piece;