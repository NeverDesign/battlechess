const Tiles = [
	{ 'id': 1, 'col': 'a', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 2, 'col': 'b', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 3, 'col': 'c', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 4, 'col': 'd', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 5, 'col': 'e', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 6, 'col': 'f', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 7, 'col': 'g', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 8, 'col': 'h', 'row': '1', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },

	{ 'id': 9, 'col': 'a', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 10, 'col': 'b', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 11, 'col': 'c', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 12, 'col': 'd', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 13, 'col': 'e', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 14, 'col': 'f', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 15, 'col': 'g', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 16, 'col': 'h', 'row': '2', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },

	{ 'id': 17, 'col': 'a', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 18, 'col': 'b', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 19, 'col': 'c', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 20, 'col': 'd', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 21, 'col': 'e', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 22, 'col': 'f', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 23, 'col': 'g', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 24, 'col': 'h', 'row': '3', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },

	{ 'id': 25, 'col': 'a', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 26, 'col': 'b', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 27, 'col': 'c', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 28, 'col': 'd', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 29, 'col': 'e', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 30, 'col': 'f', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 31, 'col': 'g', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 32, 'col': 'h', 'row': '4', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },

	{ 'id': 33, 'col': 'a', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 34, 'col': 'b', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 35, 'col': 'c', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 36, 'col': 'd', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 37, 'col': 'e', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 38, 'col': 'f', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 39, 'col': 'g', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 40, 'col': 'h', 'row': '5', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },

	{ 'id': 41, 'col': 'a', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 42, 'col': 'b', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 43, 'col': 'c', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 44, 'col': 'd', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 45, 'col': 'e', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 46, 'col': 'f', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 47, 'col': 'g', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 48, 'col': 'h', 'row': '6', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },

	{ 'id': 49, 'col': 'a', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 50, 'col': 'b', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 51, 'col': 'c', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 52, 'col': 'd', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 53, 'col': 'e', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 54, 'col': 'f', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 55, 'col': 'g', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 56, 'col': 'h', 'row': '7', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },

	{ 'id': 57, 'col': 'a', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 58, 'col': 'b', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 59, 'col': 'c', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 60, 'col': 'd', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 61, 'col': 'e', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 62, 'col': 'f', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
	{ 'id': 63, 'col': 'g', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': true },
	{ 'id': 64, 'col': 'h', 'row': '8', 'active': false, 'occupied': false, 'occupant': null, 'isDark': false },
];

const Pieces = [
	{ 'id': 1, 'type': 'pawn', 'team': 'l', 'col': 'c', 'row': 1, 'x': 0, 'y': 0 },
	{ 'id': 2, 'type': 'pawn', 'team': 'l', 'col': 'd', 'row': 1, 'x': 0, 'y': 0 },
	{ 'id': 3, 'type': 'pawn', 'team': 'l', 'col': 'e', 'row': 1, 'x': 0, 'y': 0 },
	{ 'id': 4, 'type': 'pawn', 'team': 'l', 'col': 'f', 'row': 1, 'x': 0, 'y': 0 },
	{ 'id': 5, 'type': 'pawn', 'team': 'd', 'col': 'c', 'row': 8, 'x': 0, 'y': 0 },
	{ 'id': 6, 'type': 'pawn', 'team': 'd', 'col': 'd', 'row': 8, 'x': 0, 'y': 0 },
	{ 'id': 8, 'type': 'pawn', 'team': 'd', 'col': 'e', 'row': 8, 'x': 0, 'y': 0 },
	{ 'id': 9, 'type': 'pawn', 'team': 'd', 'col': 'f', 'row': 8, 'x': 0, 'y': 0 }
];

const Players = [
	{ 'id': 1, 'userName': 'Player1', 'team': 'l' },
	{ 'id': 2, 'userName': 'Player2', 'team': 'd' }
];

const GameData = {
	'tiles': Tiles,
	'pieces': Pieces,
	'players': Players
};

export default  GameData;
