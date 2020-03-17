const Tiles = [
	{ 'col': 'a', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'b', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'c', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'd', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'e', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'f', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'g', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'h', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },

	{ 'col': 'a', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'b', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'c', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'd', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'e', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'f', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'g', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'h', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },

	{ 'col': 'a', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'b', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'c', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'd', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'e', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'f', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'g', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'h', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },

	{ 'col': 'a', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'b', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'c', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'd', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'e', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'f', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'g', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'h', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },

	{ 'col': 'a', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'b', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'c', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'd', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'e', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'f', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'g', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'h', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },

	{ 'col': 'a', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'b', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'c', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'd', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'e', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'f', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'g', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'h', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },

	{ 'col': 'a', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'b', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'c', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'd', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'e', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'f', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'g', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'h', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },

	{ 'col': 'a', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'b', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'c', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'd', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'e', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'f', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'col': 'g', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'col': 'h', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
];

const Pieces = [
	{ 'id': 1, 'type': 'pawn', 'team': 'l', 'col': 'a', 'row': 1, 'x': 0, 'y': 0 },
	{ 'id': 2, 'type': 'pawn', 'team': 'd', 'col': 'd', 'row': 7, 'x': 0, 'y': 0 }
];

const GameData = {
	'tiles': Tiles,
	'pieces': Pieces
};

export default  GameData;
