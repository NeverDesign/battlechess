// Imports
import React from 'react'
import './style.css';

class Piece extends React.Component {
	constructor(props, state, data){
		super(props);

		// Member Variables
		this.type = data.type;
		this.team = data.team

		// State Variables
		if( state ){
			this.state = state;
		}

		// Reference
		this.ref = React.createRef();

		// Piece Team
		switch (data.team){
			case 'd':
				this.isDark = true;
				break;
			case 'l':
			default:
				this.isDark = false;
				break;
		}
	}

	/**
	 * @function componentDidMount
	 * @purpose run when the component is mounted and ready for use
	 */
	componentDidMount() {

	};

	/**
	 * @function updatePosition
	 * @purpose updates the position of the piece by setting the x, y, row and col
	 * 
	 * @param  {number} x   The X co-ordinate to move the piece to
	 * @param  {number} y   The Y co-ordinate to move the piece to
	 * @param  {string} row Row identifier
	 * @param  {string} col Col identifier
	 */
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

		// TODO: Remove this once piece types start inheriting the base piece
		const pieceText = this.isDark ? '\u265F' : '\u2659';

		return (
			<div id={label} key={key} ref={this.ref} className={'piece ' + classType + classColour + classActive} style={style} {...rest} >
				<div className="inner">
					<span>{ pieceText }</span>
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