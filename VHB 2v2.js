/* VARIABLES */

/* ROOM */

const roomName = "🏆 VHB Volleyball 🏆";
const botName = "_____𝔸𝔽𝕂 𝔹𝔼𝕃𝕆𝕎_____";
const maxPlayers = 20;
const roomPublic = false;
const geo = [{ "code": "IT", "lat": 41.9, "lon": 12.5 },{code: "VN", lat: 10.957413  , lon: 106.842687},];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[1],noPlayer:false });

const scoreLimit = 5;
const timeLimit = 0;
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);

var mapBGColor = "35605a";
var mapFieldColor = "2c6b96";

function getVolleyBallMap() {
var volleyMap = `{

"name" : "MAP",

"width" : 485,

"height" : 205,

"bg" : { "color" : "`+mapBGColor+`", "width" : 487, "height" : 207 },

"canBeStored" : false,

"vertexes" : [
    /* 0 */ { "x" : -350, "y" : -97, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 1 */ { "x" : 350, "y" : -97, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 2 */ { "x" : -351, "y" : -94, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 3 */ { "x" : 351, "y" : -94, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 4 */ { "x" : -352, "y" : -91, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 5 */ { "x" : 352, "y" : -91, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 6 */ { "x" : -353, "y" : -88, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 7 */ { "x" : 353, "y" : -88, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 8 */ { "x" : -354, "y" : -85, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 9 */ { "x" : 354, "y" : -85, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 10 */ { "x" : -355, "y" : -82, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 11 */ { "x" : 355, "y" : -82, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 12 */ { "x" : -356, "y" : -79, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 13 */ { "x" : 356, "y" : -79, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 14 */ { "x" : -357, "y" : -76, "cMask" : [ ], "cGroup" : [ ] },
    /* 15 */ { "x" : 357, "y" : -76, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 16 */ { "x" : -358, "y" : -73, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 17 */ { "x" : 358, "y" : -73, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 18 */ { "x" : -359, "y" : -70, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 19 */ { "x" : 359, "y" : -70, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 20 */ { "x" : -360, "y" : -67, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 21 */ { "x" : 360, "y" : -67, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 22 */ { "x" : -361, "y" : -64, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 23 */ { "x" : 361, "y" : -64, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 24 */ { "x" : -362, "y" : -61, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 25 */ { "x" : 362, "y" : -61, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 26 */ { "x" : -363, "y" : -58, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 27 */ { "x" : 363, "y" : -58, "cMask" : [ ], "cGroup" : [ ] },
    /* 28 */ { "x" : -364, "y" : -55, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 29 */ { "x" : 364, "y" : -55, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 30 */ { "x" : -365, "y" : -52, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 31 */ { "x" : 365, "y" : -52, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 32 */ { "x" : -366, "y" : -49, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 33 */ { "x" : 366, "y" : -49, "cMask" : [ ], "cGroup" : [ ] },
    /* 34 */ { "x" : -367, "y" : -46, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 35 */ { "x" : 367, "y" : -46, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 36 */ { "x" : -368, "y" : -43, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 37 */ { "x" : 368, "y" : -43, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 38 */ { "x" : -369, "y" : -40, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 39 */ { "x" : 369, "y" : -40, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 40 */ { "x" : -370, "y" : -37, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 41 */ { "x" : 370, "y" : -37, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 42 */ { "x" : -371, "y" : -34, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 43 */ { "x" : 371, "y" : -34, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 44 */ { "x" : -372, "y" : -31, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 45 */ { "x" : 372, "y" : -31, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 46 */ { "x" : -373, "y" : -28, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 47 */ { "x" : 373, "y" : -28, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 48 */ { "x" : -374, "y" : -25, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 49 */ { "x" : 374, "y" : -25, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 50 */ { "x" : -375, "y" : -22, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 51 */ { "x" : 375, "y" : -22, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 52 */ { "x" : -376, "y" : -19, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 53 */ { "x" : 376, "y" : -19, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 54 */ { "x" : -377, "y" : -16, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 55 */ { "x" : 377, "y" : -16, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 56 */ { "x" : -378, "y" : -13, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 57 */ { "x" : 378, "y" : -13, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 58 */ { "x" : -379, "y" : -10, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 59 */ { "x" : 379, "y" : -10, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 60 */ { "x" : -380, "y" : -7, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 61 */ { "x" : 380, "y" : -7, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 62 */ { "x" : -381, "y" : -4, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 63 */ { "x" : 381, "y" : -4, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 64 */ { "x" : -382, "y" : -1, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 65 */ { "x" : 382, "y" : -1, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 66 */ { "x" : -383, "y" : 2, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 67 */ { "x" : 383, "y" : 2, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 68 */ { "x" : -384, "y" : 5, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 69 */ { "x" : 384, "y" : 5, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 70 */ { "x" : -385, "y" : 8, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 71 */ { "x" : 385, "y" : 8, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 72 */ { "x" : -386, "y" : 11, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 73 */ { "x" : 386, "y" : 11, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 74 */ { "x" : -387, "y" : 14, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 75 */ { "x" : 387, "y" : 14, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 76 */ { "x" : -388, "y" : 17, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 77 */ { "x" : 388, "y" : 17, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 78 */ { "x" : -389, "y" : 20, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 79 */ { "x" : 389, "y" : 20, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 80 */ { "x" : -390, "y" : 23, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 81 */ { "x" : 390, "y" : 23, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 82 */ { "x" : -391, "y" : 26, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 83 */ { "x" : 391, "y" : 26, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 84 */ { "x" : -392, "y" : 29, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 85 */ { "x" : 392, "y" : 29, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 86 */ { "x" : -393, "y" : 32, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 87 */ { "x" : 393, "y" : 32, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 88 */ { "x" : -394, "y" : 35, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 89 */ { "x" : 394, "y" : 35, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 90 */ { "x" : -395, "y" : 38, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 91 */ { "x" : 395, "y" : 38, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 92 */ { "x" : -396, "y" : 41, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 93 */ { "x" : 396, "y" : 41, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 94 */ { "x" : -397, "y" : 44, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 95 */ { "x" : 397, "y" : 44, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 96 */ { "x" : -398, "y" : 47, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 97 */ { "x" : 398, "y" : 47, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 98 */ { "x" : -399, "y" : 50, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 99 */ { "x" : 399, "y" : 50, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 100 */ { "x" : -400, "y" : 53, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 101 */ { "x" : 400, "y" : 53, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 102 */ { "x" : -401, "y" : 56, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 103 */ { "x" : 401, "y" : 56, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 104 */ { "x" : -402, "y" : 59, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 105 */ { "x" : 402, "y" : 59, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 106 */ { "x" : -403, "y" : 62, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 107 */ { "x" : 403, "y" : 62, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 108 */ { "x" : -404, "y" : 65, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 109 */ { "x" : 404, "y" : 65, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 110 */ { "x" : -405, "y" : 68, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 111 */ { "x" : 405, "y" : 68, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 112 */ { "x" : -406, "y" : 71, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 113 */ { "x" : 406, "y" : 71, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 114 */ { "x" : -407, "y" : 74, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 115 */ { "x" : 407, "y" : 74, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 116 */ { "x" : -408, "y" : 77, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 117 */ { "x" : 408, "y" : 77, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 118 */ { "x" : -409, "y" : 80, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 119 */ { "x" : 409, "y" : 80, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 120 */ { "x" : -410, "y" : 83, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 121 */ { "x" : 410, "y" : 83, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 122 */ { "x" : -411, "y" : 86, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 123 */ { "x" : 411, "y" : 86, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 124 */ { "x" : -412, "y" : 89, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 125 */ { "x" : 412, "y" : 89, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 126 */ { "x" : -413, "y" : 92, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 127 */ { "x" : 413, "y" : 92, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 128 */ { "x" : -414, "y" : 95, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 129 */ { "x" : 414, "y" : 95, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 130 */ { "x" : -415, "y" : 98, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 131 */ { "x" : 415, "y" : 98, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 132 */ { "x" : -416, "y" : 101, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 133 */ { "x" : 416, "y" : 101, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 134 */ { "x" : -417, "y" : 104, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 135 */ { "x" : 417, "y" : 104, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 136 */ { "x" : -418, "y" : 107, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 137 */ { "x" : 418, "y" : 107, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 138 */ { "x" : -419, "y" : 110, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 139 */ { "x" : 419, "y" : 110, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 140 */ { "x" : -420, "y" : 113, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 141 */ { "x" : 420, "y" : 113, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 142 */ { "x" : -421, "y" : 116, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 143 */ { "x" : 421, "y" : 116, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 144 */ { "x" : -422, "y" : 119, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 145 */ { "x" : 422, "y" : 119, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 146 */ { "x" : -423, "y" : 122, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 147 */ { "x" : 423, "y" : 122, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 148 */ { "x" : -424, "y" : 125, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 149 */ { "x" : 424, "y" : 125, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 150 */ { "x" : -425, "y" : 128, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 151 */ { "x" : 425, "y" : 128, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 152 */ { "x" : -426, "y" : 131, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 153 */ { "x" : 426, "y" : 131, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 154 */ { "x" : -427, "y" : 134, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 155 */ { "x" : 427, "y" : 134, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 156 */ { "x" : -428, "y" : 137, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 157 */ { "x" : 428, "y" : 137, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 158 */ { "x" : -429, "y" : 140, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 159 */ { "x" : 429, "y" : 140, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 160 */ { "x" : -430, "y" : 143, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 161 */ { "x" : 430, "y" : 143, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 162 */ { "x" : -431, "y" : 146, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 163 */ { "x" : 431, "y" : 146, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 164 */ { "x" : -432, "y" : 149, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 165 */ { "x" : 432, "y" : 149, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 166 */ { "x" : -433, "y" : 152, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 167 */ { "x" : 433, "y" : 152, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 168 */ { "x" : -434, "y" : 155, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 169 */ { "x" : 434, "y" : 155, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 170 */ { "x" : -434, "y" : 158, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 171 */ { "x" : 434, "y" : 158, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 172 */ { "x" : -349.5, "y" : -99.8, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 173 */ { "x" : 349.5, "y" : -99.8, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 174 */ { "x" : -436.5, "y" : 161, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 175 */ { "x" : 436.5, "y" : 161, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 176 */ { "x" : 441, "y" : 164, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 177 */ { "x" : -441, "y" : 164, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 178 */ { "x" : -351.3, "y" : -101.8, "cMask" : [ ], "cGroup" : [ ], "color" : "fefdf8" },
    /* 179 */ { "x" : 351.3, "y" : -101.8, "cMask" : [ ], "cGroup" : [ ], "color" : "fefdf8" },
    /* 180 */ { "x" : 445, "y" : 166, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 181 */ { "x" : -445, "y" : 166, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 182 */ { "x" : -448, "y" : 169, "cMask" : [ ], "cGroup" : [ ], "color" : "fefdf8" },
    /* 183 */ { "x" : 448, "y" : 169, "cMask" : [ ], "cGroup" : [ ], "color" : "fefdf8" },
    /* 184 */ { "x" : 0, "y" : 69, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "`+mapFieldColor+`" },
    /* 185 */ { "x" : 0, "y" : -111, "cMask" : [ ], "cGroup" : [ ] },
    /* 186 */ { "x" : 0, "y" : 49, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 187 */ { "x" : 0, "y" : -66, "cMask" : [ ], "cGroup" : [ ], "color" : "`+mapFieldColor+`" },
    /* 188 */ { "x" : 2, "y" : 69, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "`+mapFieldColor+`" },
    /* 189 */ { "x" : -2, "y" : 69, "bCoef" : 0.5, "cMask" : ["ball" ] },
    /* 190 */ { "x" : 0, "y" : 150, "bCoef" : 0, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "color" : "e56e56", "vis" : false, "curve" : -65, "_selected" : "segment" },
    /* 191 */ { "x" : -21.5, "y" : 45.5, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "`+mapFieldColor+`", "curve" : 180 },
    /* 192 */ { "x" : 21.5, "y" : 45.5, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "`+mapFieldColor+`", "curve" : 180 },
    /* 193 */ { "x" : -2150, "y" : 4000, "cMask" : [ ], "cGroup" : [ ] },
    /* 194 */ { "x" : 2150, "y" : 4000, "cMask" : [ ], "cGroup" : [ ] },
    /* 195 */ { "x" : -149.333333, "y" : 169, "cMask" : ["wall" ], "color" : "fefdf8" },
    /* 196 */ { "x" : 149.333333, "y" : 169, "cMask" : ["wall" ] },
    /* 197 */ { "x" : -117.1, "y" : -101.8, "cMask" : ["wall" ], "cGroup" : [ ], "color" : "fefdf8" },
    /* 198 */ { "x" : 117.1, "y" : -101.8, "cMask" : ["wall" ], "cGroup" : [ ] },
    /* 199 */ { "x" : -355, "y" : -106.89, "cMask" : ["wall" ], "cGroup" : [ ], "color" : "ff9900" },
    /* 200 */ { "x" : -456.535, "y" : 175, "cMask" : ["wall" ], "cGroup" : [ ], "color" : "ff9900" },
    /* 201 */ { "x" : 50, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 202 */ { "x" : 50, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 203 */ { "x" : -50, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 204 */ { "x" : -50, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 205 */ { "x" : -25, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 206 */ { "x" : -25, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 207 */ { "x" : 25, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 208 */ { "x" : 25, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 209 */ { "x" : -25, "y" : -265, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 210 */ { "x" : 25, "y" : -265, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 211 */ { "x" : -25, "y" : -240, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 212 */ { "x" : 25, "y" : -240, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 213 */ { "x" : -200, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 214 */ { "x" : -180, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 215 */ { "x" : -225, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 216 */ { "x" : -190, "y" : -240, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 217 */ { "x" : -255, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 218 */ { "x" : -155, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 219 */ { "x" : -125, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 220 */ { "x" : 150, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 221 */ { "x" : 150, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 222 */ { "x" : 225, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
    /* 223 */ { "x" : 175, "y" : -285, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 224 */ { "x" : 226.2603392537662, "y" : -260, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
    /* 225 */ { "x" : 225, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
    /* 226 */ { "x" : 175, "y" : -270, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 227 */ { "x" : 175, "y" : -227.5, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 228 */ { "x" : 175, "y" : -245, "cMask" : ["wall" ], "color" : "f2aa0f" },
    /* 229 */ { "x" : 210, "y" : -285, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
    /* 230 */ { "x" : 210, "y" : -270, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
    /* 231 */ { "x" : 215, "y" : -245, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
    /* 232 */ { "x" : 215, "y" : -227.5, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
    /* 233 */ { "x" : 456.535, "y" : 175, "cMask" : ["wall" ], "cGroup" : [ ], "color" : "ff9900" },
    /* 234 */ { "x" : 355, "y" : -106.89, "cMask" : ["wall" ], "cGroup" : [ ], "color" : "ff9900" },
    /* 235 */ { "x" : -435, "y" : -180, "bCoef" : 0, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "color" : "e56e56", "curve" : -65, "vis" : false },
    /* 236 */ { "x" : -590, "y" : 255, "bCoef" : 0.1, "cMask" : ["red","blue" ], "color" : "2c524e" },
    /* 237 */ { "x" : 590, "y" : 255, "bCoef" : 0.1, "cMask" : ["red","blue" ], "color" : "2c524e" },
    /* 238 */ { "x" : 435, "y" : -180, "bCoef" : 0, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "color" : "5689e5", "curve" : -65, "vis" : false, "_selected" : "segment" },
    /* 239 */ { "x" : -485, "y" : -35, "bCoef" : 0.2, "cMask" : ["wall" ], "color" : "4a867d" },
    /* 240 */ { "x" : -485, "y" : 210, "bCoef" : 0.2, "cMask" : ["wall" ], "color" : "4a867d" },
    /* 241 */ { "x" : 485, "y" : 210, "bCoef" : 0.2, "cMask" : ["wall" ], "color" : "4a867d" },
    /* 242 */ { "x" : 485, "y" : -35, "bCoef" : 0.2, "cMask" : ["wall" ], "color" : "4a867d" },
    /* 243 */ { "x" : -3, "y" : 69, "bCoef" : 0.2, "cMask" : ["ball","red","blue" ], "color" : "`+mapFieldColor+`" },
    /* 244 */ { "x" : -3, "y" : 210, "bCoef" : 0.2, "cMask" : ["ball","red","blue" ] },
    /* 245 */ { "x" : 3, "y" : 69, "bCoef" : 0.2, "cMask" : ["ball","red","blue" ], "color" : "`+mapFieldColor+`" },
    /* 246 */ { "x" : 3, "y" : 210, "bCoef" : 0.2, "cMask" : ["ball","red","blue" ] },
    /* 247 */ { "x" : 0, "y" : 69, "bCoef" : 0, "cMask" : ["ball","red","blue" ], "color" : "797979" },
    /* 248 */ { "x" : 0, "y" : 210, "bCoef" : 0, "cMask" : ["ball","red","blue" ], "color" : "797979" },
    /* 249 */ { "x" : 1.5, "y" : 68, "bCoef" : 0, "cMask" : ["red","blue" ] },
    /* 250 */ { "x" : 1.5, "y" : -180, "bCoef" : 0, "cMask" : ["red","blue" ] },
    /* 251 */ { "x" : -1.5, "y" : 68, "bCoef" : 0, "cMask" : ["red","blue" ] },
    /* 252 */ { "x" : -1.5, "y" : -180, "bCoef" : 0, "cMask" : ["red","blue" ] }

],

"segments" : [
    { "v0" : 200, "v1" : 233, "color" : "ff9900", "cMask" : ["wall" ] },
    { "v0" : 233, "v1" : 234, "color" : "ff9900", "cMask" : ["wall" ] },
    { "v0" : 234, "v1" : 199, "color" : "ff9900", "cMask" : ["wall" ] },
    { "v0" : 235, "v1" : 238, "color" : "2c524e", "bCoef" : 0, "cMask" : ["red","blue" ] },
    { "v0" : 238, "v1" : 237, "color" : "2c524e", "bCoef" : 0.1, "cMask" : ["red","blue" ] },
    { "v0" : 237, "v1" : 236, "color" : "2c524e", "bCoef" : 0, "cMask" : ["red","blue" ] },
    { "v0" : 236, "v1" : 235, "color" : "2c524e", "bCoef" : 0.1, "cMask" : ["red","blue" ] },
    { "v0" : 176, "v1" : 177, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 180, "v1" : 181, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 182, "v1" : 183, "color" : "fefdf8", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 0, "v1" : 1, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 2, "v1" : 3, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 4, "v1" : 5, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 6, "v1" : 7, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 8, "v1" : 9, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 10, "v1" : 11, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 12, "v1" : 13, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 14, "v1" : 15, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 16, "v1" : 17, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 18, "v1" : 19, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 20, "v1" : 21, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 22, "v1" : 23, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 24, "v1" : 25, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 26, "v1" : 27, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 28, "v1" : 29, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 30, "v1" : 31, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 32, "v1" : 33, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 34, "v1" : 35, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 36, "v1" : 37, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 38, "v1" : 39, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 40, "v1" : 41, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 42, "v1" : 43, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 44, "v1" : 45, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 46, "v1" : 47, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 48, "v1" : 49, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 50, "v1" : 51, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 52, "v1" : 53, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 54, "v1" : 55, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 56, "v1" : 57, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 58, "v1" : 59, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 60, "v1" : 61, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 62, "v1" : 63, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 64, "v1" : 65, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 66, "v1" : 67, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 68, "v1" : 69, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 70, "v1" : 71, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 72, "v1" : 73, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 74, "v1" : 75, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 76, "v1" : 77, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 78, "v1" : 79, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 80, "v1" : 81, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 82, "v1" : 83, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 84, "v1" : 85, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 86, "v1" : 87, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 88, "v1" : 89, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 90, "v1" : 91, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 92, "v1" : 93, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 94, "v1" : 95, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 96, "v1" : 97, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 98, "v1" : 99, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 100, "v1" : 101, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 102, "v1" : 103, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 104, "v1" : 105, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 106, "v1" : 107, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 108, "v1" : 109, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 110, "v1" : 111, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 112, "v1" : 113, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 114, "v1" : 115, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 116, "v1" : 117, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 118, "v1" : 119, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 120, "v1" : 121, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 122, "v1" : 123, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 124, "v1" : 125, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 126, "v1" : 127, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 128, "v1" : 129, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 130, "v1" : 131, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 132, "v1" : 133, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 134, "v1" : 135, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 136, "v1" : 137, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 138, "v1" : 139, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 140, "v1" : 141, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 142, "v1" : 143, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 144, "v1" : 145, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 146, "v1" : 147, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 148, "v1" : 149, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 150, "v1" : 151, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 152, "v1" : 153, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 154, "v1" : 155, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 156, "v1" : 157, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 158, "v1" : 159, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 160, "v1" : 161, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 162, "v1" : 163, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 164, "v1" : 165, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 166, "v1" : 167, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 168, "v1" : 169, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 170, "v1" : 171, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 0, "v1" : 170, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 1, "v1" : 171, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 173, "v1" : 175, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 175, "v1" : 174, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 174, "v1" : 172, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 172, "v1" : 173, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 177, "v1" : 178, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 181, "v1" : 178, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 179, "v1" : 176, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 179, "v1" : 180, "color" : "`+mapFieldColor+`", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 178, "v1" : 182, "color" : "fefdf8", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 183, "v1" : 179, "color" : "fefdf8", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 178, "v1" : 179, "color" : "fefdf8", "cMask" : [ ], "cGroup" : [ ] },
    { "v0" : 188, "v1" : 189, "vis" : false, "color" : "`+mapFieldColor+`", "bCoef" : 0.65, "cMask" : ["ball" ] },
    { "v0" : 192, "v1" : 191, "curve" : 180, "vis" : false, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 191, "v1" : 192, "curve" : 180, "vis" : false, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 197, "v1" : 195, "color" : "fefdf8", "cMask" : ["wall" ] },
    { "v0" : 198, "v1" : 196, "color" : "fefdf8", "cMask" : ["wall" ] },
    { "v0" : 199, "v1" : 200, "color" : "ff9900", "cMask" : ["wall" ] },
    { "v0" : 201, "v1" : 202, "color" : "f2aa0f", "cMask" : ["wall" ], "x" : 50 },
    { "v0" : 203, "v1" : 204, "color" : "f2aa0f", "cMask" : ["wall" ], "x" : -50 },
    { "v0" : 205, "v1" : 209, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 207, "v1" : 210, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 211, "v1" : 206, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 212, "v1" : 208, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 203, "v1" : 205, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 207, "v1" : 201, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 203, "v1" : 204, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 204, "v1" : 206, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 208, "v1" : 202, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 202, "v1" : 201, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 209, "v1" : 210, "color" : "f2aa0f", "cMask" : ["wall" ], "y" : -265 },
    { "v0" : 211, "v1" : 212, "color" : "f2aa0f", "cMask" : ["wall" ], "y" : -240 },
    { "v0" : 215, "v1" : 216, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 217, "v1" : 213, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 217, "v1" : 215, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 213, "v1" : 214, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 216, "v1" : 218, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 218, "v1" : 219, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 219, "v1" : 214, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 220, "v1" : 221, "color" : "f2aa0f", "cMask" : ["wall" ], "x" : 150 },
    { "v0" : 222, "v1" : 224, "curve" : 180, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 224, "v1" : 225, "curve" : 180, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 223, "v1" : 226, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 223, "v1" : 229, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 226, "v1" : 230, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 228, "v1" : 231, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 227, "v1" : 232, "color" : "f2aa0f", "cMask" : ["wall" ], "y" : -227.5 },
    { "v0" : 231, "v1" : 232, "curve" : 180, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 220, "v1" : 222, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 221, "v1" : 225, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 228, "v1" : 227, "color" : "f2aa0f", "cMask" : ["wall" ] },
    { "v0" : 239, "v1" : 240, "color" : "4a867d", "bCoef" : 0.2, "cMask" : ["wall" ] },
    { "v0" : 240, "v1" : 241, "color" : "4a867d", "bCoef" : 0, "cMask" : ["wall" ] },
    { "v0" : 241, "v1" : 242, "color" : "4a867d", "bCoef" : 0.2, "cMask" : ["wall" ] },
    { "v0" : 244, "v1" : 243, "color" : "5C5C5C", "bCoef" : 0.2, "cMask" : ["ball","red","blue" ], "x" : -3 },
    { "v0" : 246, "v1" : 245, "color" : "5C5C5C", "bCoef" : 0.2, "cMask" : ["ball","red","blue" ], "x" : 3 },
    { "v0" : 248, "v1" : 247, "color" : "797979", "bCoef" : 0, "cMask" : ["ball","red","blue" ], "x" : 0 },
    { "v0" : 249, "v1" : 250, "color" : "ffffff", "bCoef" : 0, "cMask" : ["red","blue" ], "x" : 1.5 },
    { "v0" : 251, "v1" : 252, "color" : "ffffff", "bCoef" : 0, "cMask" : ["red","blue" ], "x" : -1.5 },
    { "v0" : 235, "v1" : 190, "curve" : -65, "vis" : false, "color" : "e56e56", "bCoef" : 0, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
    { "v0" : 190, "v1" : 238, "curve" : -65, "vis" : false, "color" : "5689e5", "bCoef" : 0, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "_selected" : true },
    { "v0" : 229, "v1" : 230, "curve" : 180, "color" : "f2aa0f", "cMask" : ["wall" ] }

],

"planes" : [
    { "normal" : [0,1 ], "dist" : -178, "bCoef" : 0.1, "cMask" : ["red","blue" ] },
    { "normal" : [0,-1 ], "dist" : -230, "bCoef" : 0.1, "cMask" : ["red","blue" ] },
    { "normal" : [0.9291641282577402,0.36966744887673536 ], "dist" : -470, "bCoef" : 0.1, "cMask" : ["red","blue" ] },
    { "normal" : [-0.9291641282577402,0.36966744887673536 ], "dist" : -470, "bCoef" : 0.1, "cMask" : ["red","blue" ] },
    { "normal" : [0.9862855710151985,0.16504778825305047 ], "dist" : -482, "bCoef" : 0.2, "cMask" : ["ball" ] },
    { "normal" : [-0.9862855710151985,0.16504778825305047 ], "dist" : -482, "bCoef" : 0.2, "cMask" : ["ball" ] },
    { "normal" : [1,0 ], "dist" : -489, "bCoef" : 0.4, "cMask" : ["ball" ] },
    { "normal" : [-1,0 ], "dist" : -489, "bCoef" : 0.4, "cMask" : ["ball" ] },
    { "normal" : [0,1 ], "dist" : -1000, "bCoef" : 0.1, "cMask" : ["ball" ] },
    { "normal" : [0,-1 ], "dist" : -215, "bCoef" : 0.1, "cMask" : ["ball" ] },
    { "normal" : [1,0 ], "dist" : -505, "bCoef" : 0.1, "cMask" : ["red","blue" ] },
    { "normal" : [-1,0 ], "dist" : -505, "bCoef" : 0.1, "cMask" : ["red","blue" ] },
    { "normal" : [1,0 ], "dist" : -100000, "bCoef" : 0, "cGroup" : ["ball" ] },
    { "normal" : [-1,0 ], "dist" : -100000, "bCoef" : 0, "cGroup" : ["ball" ] },
    { "normal" : [0,1 ], "dist" : -199000, "bCoef" : 0, "cGroup" : ["ball" ] }

],

"goals" : [
    { "p0" : [-2,205 ], "p1" : [-535,205 ], "team" : "red" },
    { "p0" : [2,205 ], "p1" : [535,205 ], "team" : "blue" }

],

"discs" : [
    { "radius" : 7.25, "pos" : [0,0 ], "cMask" : ["wall" ], "cGroup" : ["ball","kick","score" ] },
    { "radius" : 100000, "invMass" : 300, "pos" : [0,-100000 ], "color" : "transparent", "bCoef" : 0, "cMask" : ["ball" ] }


],

"playerPhysics" : {
    "bCoef" : 1,
    "invMass" : 0.1,
    "damping" : 0.97,
    "acceleration" : 0.09575,
    "kickingAcceleration" : 0.09575,
    "kickingDamping" : 0.9,
    "kickStrength" : 8.5

},

"ballPhysics" : "disc0",

"spawnDistance" : 455,

"traits" : {
    

},

"joints" : [
    

],

"redSpawnPoints" : [
    

],

"blueSpawnPoints" : [
    

]
}`;
return volleyMap;
}
room.setCustomStadium(getVolleyBallMap());

var adminPassword = 'vhb_admin_'
var superAdminCode = "volibul";
var superAdminList = ["_dGjHAlwrHCj0LPIFlwf3WzzT4g3gx3kOOcVnLnWlIA","XIQkNNZTSuDelPWwpkePGpndlK6KQ2wfNIup7kOA_c8","j3KOPUn6XoLokd6KcIH-22IlsuxbYTX7HLtEuR8_ees", "Is-QlKOEkBGuf7Qd-rcQE0EN-Qy8xJ0pf0URLPz-Zfg" ];
var tempSuperAdminList = [];
var superAdmins = [];
var room_type = 1;

/* OPTIONS */

var drawTimeLimit = Infinity;

/* PLAYERS */

var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11}
const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var players;
var teamR;
var teamB;
var teamS;

/* GAME */
var lastWinner = Team.SPECTATORS;
var streak = 0;
var lastPlayersTouched;
var totalTouches;
var touches;
var goalCheering;
var potentialBugAbusing;
var abusingPosition;
var abusingTimeStamp;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }];
var ballSpeed;
var goldenGoal = false;
var abusingPlayer;
var oldX = 0;
var oldY = 0;
var blocked = false;
var call = false;
var redTeam;
var blueTeam;
/* OBJECTS */
function Game(date, scores, goals) {
    this.date = date;
    this.scores = scores;
    this.goals = goals;
}
/* AUXILIARY */
// var checkTimeVariable = false;

/* FUNCTIONS */
var banList = [];
var mute_list = [];
var gameTime;
var ids = [];
var id_list = [];
var admin_control = false;
var randBallColor_bol = false;
var passbot_mode = 0;
var inloop_passbot = false;
var serve_team = 0;
var last_serve_team = 0;
var randBallRadius_bol = false;
var randPlayerRadius_bol = false;
var rand_uni = true;
/* AUXILIARY FUNCTIONS */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
  
function convertMsToHM(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    // 👇️ if seconds are greater than 30, round minutes up (optional)
    minutes = seconds >= 30 ? minutes + 1 : minutes;

    minutes = minutes % 60;

    // 👇️ If you don't want to roll hours over, e.g. 24 to 00
    // 👇️ comment (or remove) the line below
    // commenting next line gets you `24:00:00` instead of `00:00:00`
    // or `36:15:31` instead of `12:15:31`, etc.
    hours = hours % 24;

    return `${padTo2Digits(hours) + ' giờ và '}` +  `${padTo2Digits(minutes)+' phút '}` + `${padTo2Digits(seconds)+' giây '}`;
}

function getDateNow() {
    var curDate = new Date();
    
    // Lấy ngày hiện tại
    var curDay = curDate.getDate();
    // console.log(curDay);
    
    // Lấy tháng hiện tại
    var curMonth = curDate.getMonth() + 1;
    // console.log(curMonth);
    
    // Lấy năm hiện tại
    var curYear = curDate.getFullYear();
    // console.log(curYear);
    // Lấy giờ hiện tại
    var hours = String(curDate.getHours());
    if (hours.length == 0) hours = "0" + hours;
    // console.log(hours);
    
    // Lấy phút hiện tại
    var minutes = String(curDate.getMinutes());
    if (minutes.length == 1) minutes = "0"+ minutes;
    
    return curDay + "/" + curMonth + "/" + curYear + " lúc " + hours + ":" + minutes; 
}

function RandRangeInt(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomInt (max) { // return random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function arrayMin (arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

function getTime (scores) {
    return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
}

var dis_loop = false;
var created = false
var new_update = false;
function updateGameStatus() {
    gameTime = Math.floor(room.getScores().time);
    

    if (created == false){
        created = true
        sleep(290000).then(() => {
            announce("Map được tạo bởi tổ chức VHB Volleyball",null,0xE6B0AA)
            created = false
            
        });
    if (dis_loop == false){
        dis_loop = true
        sleep(120000).then(() => {
            announce("Discord VHB Volley:  https://discord.gg/dZCvBRffDh ",null,0x7DCEA0)
            dis_loop = false
            
        });
    }
    if (taixiu == false) {
        playtaixiu(3);
        taixiu = true;
    }
    if (new_update == false){
        new_update = true
        sleep(60000).then(() => {
            announce("New Update: Đặt biệt danh, Tài xỉu, Chuyển tiền!",null,0xF5A9C1)
            new_update = false
            
        });
    }
}
}

function pointDistance (p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}
function announce(msg, targetId, color, style, sound) {
    if (color == null) {
        color = 0xFFFD82;
    }
    if (style == null) {
        style = "bold";
    }
    if (sound == null) {
        sound = 0;
    }
    room.sendAnnouncement( "📢: "+msg, targetId, color, style, sound);
    
}

function announce_noloa(msg, targetId, color, style, sound) {
    if (color == null) {
        color = 0xe4a6fc;
    }
    if (style == null) {
        style = "bold";
    }
    if (sound == null) {
        sound = 0;
    }
    room.sendAnnouncement(msg, targetId, color, style, sound);
    
}

function whisper(msg, targetId, color, style, sound) {
    if (color == null) {
        color = 0x66C7FF;
    }
    if (style == null) {
        style = "normal";
    }
    if (sound == null) {
        sound = 0;
    }
    room.sendAnnouncement(msg, targetId, color, style, sound);

}

/* GAME FUNCTIONS */

var chat_color = {
    'tim': ['Màu Tím Mộng Mơ','0x9B59B6'],
    'xanhla': ['Màu xanh lá','0x28B463'],
    'xanhdam': ['Màu Xanh Nác Đậm','0x00A2FF'],
    'hong':['Màu Hồng Mạnh Mõe','0xff33ff'],
    'xanhsang':['Màu Xanh Mù Mắt','0x00ffff'],
    'do':['Màu Đỏ Gao Ồ','0xff0000'],
    'xanhnhat':['Màu xanh nước nhạt','0x85C1E9'],
    'xanhlanuoc':['Màu kết hợp xanh lá + nước','0x76D7C4'],
    'xanhlavang':['Màu Xanh Lá Vèng','0x58D68D'],
    'cam':['Màu Cam Shịt','0xE67E22'],
}

function whichTeam(){ // gives the players in the red or blue team
	var players = room.getPlayerList();
	var redTeam = players.filter(player => player.team == 1);
	var blueTeam = players.filter(player => player.team == 2);
	return [redTeam, blueTeam]
}

function getPlayerCount (team) {
    var playerCount = 0
    var players = room.getPlayerList();
    for(var i = 0; i < players.length; i++) {
        if (players[i].team == team) {
            playerCount = playerCount + 1;
        }
    }
    return playerCount;
}

function getBallIndex () {
    for (var i = 0; i < room.getDiscCount(); i++) {
        if ((room.getDiscProperties(i).cGroup & room.CollisionFlags.ball) != 0) {
            return i;
        }
    }
    throw "Ball index not found!";
    return -1;
}

function givePenalty (team) {
    room.setDiscProperties(getBallIndex(), {x: team == Team.RED ? -415 : 415, y: 110, xspeed : 0, yspeed : 10});
    return;
}

cMask = room.CollisionFlags.ball | room.CollisionFlags.wall

/*  var dp = room.getDiscProperties(getBallIndex())
    room.sendChat(String(dp.cMask));
    room.sendChat(String(room.CollisionFlags.ball));
    cMask: room.CollisionFlags.kick */



function endGame (winner) { // no stopGame() function in it
    const scores = room.getScores();
    if (winner == Team.RED) {
        announce("🔴 Thắng " + scores.red + "-" + scores.blue + "!");
    }
    else if (winner == Team.BLUE) {
        announce("🔵 Thắng " + scores.blue + "-" + scores.red + "!");
    }
    if (room_type <=2) RecSistem.sendDiscordWebhook(scores);

}

/* PLAYER FUNCTIONS */

function updateTeams () {
    players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
    teamR = players.filter(p => p.team === Team.RED);
    teamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
}


var db = { p: { N: 7, kt: 1 }, log: [] }; 
function f(a, b, c) { 
for (var i = 0; i < a.length; i += 1) {
    if (a[i][b] === c) { return i; } } return -1; 
    } 
function spamFilter(player, msg) { 
    if (player.id == 0) { return; } 
    var ind = f(db.log, 'id', player.id); 
    db.log[ind].lm.push({ ts: Date.now() });
    if (db.log[ind].lm.length >= db.p.N) { 
        db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); 
        if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 1000) > db.p.kt) { 
            db.log.splice(f(db.log, 'id', player.id), 1);
            announce("Cầu thủ " + player.name + " đã bị mute trong 5 phút (Spam)!", null,0xF1948A, "italic");
            mute_list.push(player.name);
            setTimeout(() => {
                let index = mute_list.indexOf(player.name);
                if (index > -1) {
                    mute_list.splice(index, 1); 
                    whisper("Bạn đã được unmute",player.id,null, "normal", 1);
                    announce("Cầu thủ: " + player.name + ' đã không còn bị mute!',null, 0xF1948A, "italic");
                    if (db.log.filter((p) => p.id == player.id).length == 0) { db.log.push({ id: player.id, lm: [] }); }
                }
            }, 300000);
        }
    } 

}
/* STATS FUNCTIONS */

function getStats () {
    const ballPosition = room.getBallPosition();
    point[1] = point[0];
    point[0] = ballPosition;
    ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
}

/* EVENTS */

/* PLAYER MOVEMENT */
var on_match = false
var has_player = false
room.onPlayerJoin = function (player) {
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    if(playerList[player.name] == undefined){
        playerList[player.name] = {name: player.name, messageDates: [], muted: false, spamInMute: 0};
    }
    updateRoleOnPlayerIn();
    // updateTeams();
    arrangeSpecList();
    if (db.log.filter((p) => p.id == player.id).length == 0) { db.log.push({ id: player.id, lm: [] }); }
setTimeout(() =>{
    
    whisper("🎖      🏆 Chào Mừng Đến Với Siêu CUP VHB Volleyball  🏆              🎖 ", player.id, 0x58D68D, "bold", 0);
    whisper("🎖      Nhập !trogiup & !help và !lenh & !cmd để được xem cách chơi    🎖 ", player.id, 0x58D68D, "bold", 0);
	whisper("🎖     !shop để mua đồ | !rank và !stats để xem thông tin của mình       🎖 ", player.id, 0x58D68D, "bold", 0);
    whisper("🎖     Discord VHB Volley:     https://discord.gg/dZCvBRffDh   🎖 ", player.id, 0xE59866, "bold", 0);
    announce("🎖      !dangnhap matkhau để đăng nhập    🎖 ", null, 0x26BEDC, "bold", 1);
    ids[player.id] = player.name;
    id_list.push(player.id);
    updateTeams();
    resetTeamCount()
    if (superAdminList.includes(player.auth)) {
        room.setPlayerAdmin(player.id, true)
        superAdmins.push(player.id);
        announce(player.name + " đã trở thành Super Admin", null, 0x26BED, null, 2);
        tempSuperAdminList.push(player.id);
    }
    sendAuthToDiscord(player);
    },1000);
}

var authList = [];

function dangkytaikhoan(player, pass) {
	if (player.name in authList){
		whisper("Bạn đã đăng nhập ", player.id, 0xDCBE26, "bold", 0); // warning
		return false;
	}
	else {
        var playerData = localStorage.getItem(player.name);
        if (playerData) {
            whisper("Tài khoản đã tồn tại. Nhập !dangnhap matkhau để đăng nhập!",player.id, 0xDCBE26, "italic", 2);
        } 
        else {
            var dangky_data = {
            'playerName' : player.name,
            'matkhau' : pass,
            'games' : 0,
            'wins' : 0,
            'winrate' : '0.00%',
            'playtime' : 0,
            'goals' : 0,
            'assists' : 0,
            'ownGoals': 0,
            'level' : "🟤 Đồng",
            'sao' : "⭐",
            'rankpoint' : 0,
            'lose' : 0,
            'ace' : 0,
            'no_touch_ace' : 0,
            'monster_block' : 0,
            'receive' : 0,
            'dig' : 0,
            'block_out' : 0,
            'money' : 0,
            'tuido': {
                'list_maubong': [],
                'list_biet_danh' : [],
                'list_mauchat' : []
            },
            'thanhtuu' : [],
            'cur_thanhtuu' : "",
            'cur_bietdanh' : "",
            'cur_mauchat' : "",
            "cac_bietdanh" : [],
            'win_taixiu' : 0,
            'first_entergame' : 0,
            'last_entergame' : 0,
            'admin_level': 0,
            'id':0,
            'cur_maubong':'',
            'discord_money':0,
            'discord_id' :undefined
            }
            localStorage.setItem(player.name, JSON.stringify(dangky_data));
            var data = JSON.parse(localStorage.getItem("list_player"));
            data.push(player.name);
            localStorage.setItem("list_player",JSON.stringify(data))
            whisper("Đăng ký thành công ! Mật Khẩu của bạn là: " + pass, player.id, 0x26BEDC, "bold", 0); // success
        }
		
	}

}

function dangnhaptaikhoan(player, pass) {
	if (player.name in authList){
		
		whisper("Bạn đã đăng nhập ", player.id, 0xDF2C2C, "bold", 0);
		return false;
	}
	else {
    var playerData = localStorage.getItem(player.name);
	if (playerData) {
        var data = JSON.parse(localStorage.getItem(player.name));
		if (data.matkhau == pass){		
			authList[player.name] = player.name
			if (data.goals == undefined)  data.goals = 0
			if (data.wins == undefined)  data.wins = 0
			if (data.assists == undefined)  data.assists = 0
			if (data.ownGoals == undefined)  data.ownGoals = 0
			if (data.lose == undefined)  data.lose = 0
            if (data.ace == undefined) data.ace = 0
            if (data.monster_block == undefined) data.monster_block = 0
            if (data.receive == undefined) data.receive = 0
            if (data.block_out == undefined) data.block_out = 0
            if (data.dig == undefined) data.dig = 0
            if (data.no_touch_ace == undefined) data.no_touch_ace = 0
            if (data.cur_bietdanh == undefined) data.cur_bietdanh = ""
            if (data.tuido.list_mauchat == undefined) data.tuido.list_mauchat = []
            if (data.cur_mauchat == undefined) data.cur_mauchat = ""
            if (data.cac_bietdanh == undefined) data.cac_bietdanh = []
			if (data.admin_level == 0 || data.admin_level == undefined ){
				if (data.admin_level == undefined) data.admin_level == 0
			announce('💫 Cầu thủ ' + data.level + ' [ ' + player.name +' ] đã đăng nhập !',null ,0xF1948A)
			whisper("Đăng nhập thành công", player.id, 0x26BEDC, "bold", 0); // Login success
			localStorage.setItem(player.name, JSON.stringify(data))
			}
			else if  (data.admin_level >= 1){
				announce('Admin ' + admin_list[data.admin_level] + ' [ ' + player.name +' ] đã đăng nhập !',null,0xF1948A)
				room.setPlayerAdmin(player.id,true)
				whisper("Đăng nhập thành công vào tài khoản Admin", player.id, 0x26BEDC, "bold", 0); // Login success
				
			}
			
			data.first_entergame = Date.now()
			ranking(player)

		}
		else {
			whisper("Sai mật khẩu", player.id, 0xDCBE26, "bold", 0);
		}
    }
	else{
		whisper("Tài khoản không tồn tại hãy !dangky matkhau. VD: !dangky 12345", player.id, 0xDCBE26, "bold", 0);
	}
	}

}



function start_match(){
    if (on_match == false && has_player == true) {
            announce("Trận đấu sẽ bắt đầu sau 10 giây",null,0xdb1a64)
            on_match = true
            sleep(10000).then(() => {
                room.startGame()
                
            });	
        
        }
}
var RedPlayer_Count = 0
var BluePlayer_Count= 0
function resetTeamCount() {
    

    
            RedPlayer_Count = 0
            BluePlayer_Count = 0
            room.getPlayerList().forEach(function(player) {
                if (player.team == 1) {
                    RedPlayer_Count += 1
                }
                else if (player.team == 2){
                    BluePlayer_Count += 1
                }
            });

            // check if reached max
            // codition
            if (BluePlayer_Count > 0 && RedPlayer_Count > 0){
                has_player = true
            }


            // start match
            // start_match()
    
}

var allReds = []
var allBlues = []

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        afkToLast();
        return;
    }
    if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
        room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
        let arr = [changedPlayer.id];
        room.reorderPlayers(arr,false);
        announce(changedPlayer.name + " đang AFK !", null, 0xF1948A, "italic");
        return;
    }
    if (room.getScores() != null) {
        var scores = room.getScores();
        if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3 / 4) * scores.timeLimit && Math.abs(scores.blue - scores.red) < 2) {
            (changedPlayer.team == Team.RED) ? allReds.push(changedPlayer.name): allBlues.push(changedPlayer.name);
            // console.log(allBlues, allReds);
        }
    }
    if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
        return;
    }
    // announce("check");
    if (changedPlayer.team == Team.SPECTATORS && !getAFK(changedPlayer)) {
        setActivity(changedPlayer, 0);
        arrangeSpecList();
    }
    // start_match()
    updateTeams();
    if (room.getScores() != null) blockGoalKick();

    if (teamB.length == 2 && teamR.length == 2  && passbot_mode != 0) {
        passbot_mode = 0;
        announce("Chế độ tập luyện đã bị tắt vì đã đủ người chơi")
    }
    resetTeamCount()
    if(byPlayer != null){
    activities[byPlayer.id] = Date.now();
    if(changedPlayer.id == byPlayer.id){
        activities[changedPlayer.id] = Date.now();
    }
    }
    if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
        if (Math.abs(teamR.length - teamB.length) == teamS.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (teamR.length > teamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => {
                        room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    }, 200 * i);
                }
            } else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => {
                        room.setPlayerTeam(teamS[0].id, Team.RED);
                    }, 200 * i);
                }
            }
            return;
        } else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)) {
            deactivateChooseMode();
            resumeGame();
        } else if (teamR.length <= teamB.length && redCaptainChoice != "") { // escolha lembrada
            redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
            return;
        } else if (teamB.length < teamR.length && blueCaptainChoice != "") {
            blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
            return;
        } else {
            choosePlayer();
        }
    }
}

room.onPlayerLeave = function (player) {
    db.log.splice(f(db.log, 'id', player.id), 1);
    ids[player.id] = undefined;
    updateTeams();
    resetTeamCount()
    afkPlayerIDs.delete(player.id);
    delete activities[player.id];
    removeElement(id_list, player.id);
    removeElement(superAdmins, player.id);
    removeElement(tempSuperAdminList, player.id);
    if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
        choosePlayer();
        capLeft = true;
        setTimeout(() => {
            capLeft = false;
        }, 10);
    }
    if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
        choosePlayer();
        capLeft = true;
        setTimeout(() => {
            capLeft = false;
        }, 10);
    }
    setActivity(player, 0);
    updateRoleOnPlayerOut();
    delete authList[player.name];
    // if (rec_list[player.name] != null && rec_list[player.name] != undefined) delete rec_list[player.name];
    
}

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    if (byPlayer != null) {
        activities[byPlayer.id] = Date.now();
    }
    if (superAdmins.indexOf(kickedPlayer.id) > -1 && byPlayer != null) {
        room.kickPlayer(byPlayer.id, "Bạn không thể kick/ban Super Admin", false);
        room.clearBans();
    }
    if (ban == 0) {
        console.log(kickedPlayer.name + " [" + kickedPlayer.id + "] was kicked (" + reason + ")");
        return false;
    }
    if (ban == 1) {
        console.log(kickedPlayer.name + " [" + kickedPlayer.id + "] was banned (" + reason + ")");
        banList[kickedPlayer.id] = kickedPlayer.name;
        if (banList[kickedPlayer.id] == "NewPlayer") room.clearBan(kickedPlayer.id);
    }
}

/* SPAM MUTE SYSTEM */
var playerList = {};
var minMessageLength = 4;
var bound = 6; //You can either decrease or increase this, min = 2;
var spamBanLimit = 3;
var spamTimer = 7500; //In milliseconds
var removal = 3 * 60000; //In milliseconds

/* PLAYER ACTIVITY */

room.onPlayerChat = function(player, message) {
    activities[player.id] = Date.now();
    player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
    playerList[player.name].messageDates.push(Date.now());

    if (playerList[player.name].messageDates.length == bound){
	    playerList[player.name].messageDates.shift();
    }
    if (minMessageLength < playerList[player.name].messageDates.length && playerList[player.name].messageDates.length <= bound-1 && playerList[player.name].messageDates[playerList[player.name].messageDates.length-1] - playerList[player.name].messageDates[0] < spamTimer){
        if (mute_list.includes(player.name) == false){
            var name = player.name;
            // room.sendAnnouncement(`${player.name} was muted by the reason of spamming!`,null,0x00FF00,"bold",1);
            announce_noloa(`🔇 ${player.name} đã bị mute trong 3 phút (Spam)!`, null, null, "italic", 0);
            mute_list.push(player.name);

            setTimeout(function(){
            if (mute_list.includes(name) == true){
                let index = mute_list.indexOf(name);
                if (index > -1) {
                    mute_list.splice(index, 1); 
                    playerList[player.name].spamInMute = 0;
                    announce_noloa("🔊 " + name + ' đã không còn bị mute!',null, 0xF1948A, "italic");
                }
            }
            },removal);
        }
        else {
            // room.sendAnnouncement(`You will be banned if continuing to spam in muted mode!`,player.id,0xFF8000,"bold",2);
            announce_noloa("Bạn sẽ bị ban nếu tiếp tục spam trong khi bị mute!", player.id, null, "italic-bold", 2)

            if (playerList[player.name].spamInMute < spamBanLimit){
                playerList[player.name].spamInMute++;
            }
            else{
                room.kickPlayer(player.id,"Spam",true);
            }

            return false;
        }
    }
    if (message.includes('@here') || message.includes('@everyone')) {
        room.kickPlayer(player.id,'Ngôn từ không hợp lệ',true)
        return
    }
    /*    let arg = message.split(" ");
    console.log(message.trim())
    console.log(arg) */
    let inc = player.name in authList
    if (message.startsWith("!")) {

        message = message.substr(1);
        let args = message.split(" ");
        var tb_message = message.substr(7)
        var report_message = message.substr(7)
        
        if (args[0] == "admin" && args.length == 2) {
            if (args[1] == adminPassword) {
                room.setPlayerAdmin(player.id, true);
                announce(player.name + " đã trở thành Admin");
            }
            /* else if (args[1] == superAdminCode) {
                    room.setPlayerAdmin(player.id, true);
                    if (superAdmins.indexOf(player.id) === -1) {
                        superAdmins.push(player.id);
                    }
                    announce(player.name + " đã trở thành Super Admin");
            } */
        }
        else if (args[0] == "claim") {
            if (tempSuperAdminList.includes(player.id) && superAdmins.indexOf(player.id) === -1) {
                room.setPlayerAdmin(player.id, true);
                superAdmins.push(player.id);
                announce(player.name + " đã trở thành Super Admin");
            }
        }
        else if (args[0] == "court" && args.length == 1) {
            whisper("Current background color is " + mapBGColor);
        }
        else if (args[0] == "court" && args.length == 2 && player.admin) {
            if (room.getScores() == null) {
                if (args[1] == "reset") {
                    mapBGColor = "35605a";
                    announce("Map background color reset by " + player.name);
                }
                else {
                    mapBGColor = args[1];
                    announce("Map background color set to " + args[1] + " by " + player.name);
                }
                room.setCustomStadium(getVolleyBallMap());				
            }
            else {
                whisper("Cannot change map background color while game in progress", player.id);
            }
        }
        else if (args[0] == "court" && args.length == 1) {
            whisper("Current field color is " + mapFieldColor);
        }
        else if (args[0] == "field" && args.length == 2 && player.admin) {
            if (room.getScores() == null) {
                if (args[1] == "reset") {
                    mapFieldColor = "2c6b96";
                    announce("Map field color reset by " + player.name);
                }
                else {
                    mapFieldColor = args[1];
                    announce("Map field color set to " + args[1] + " by " + player.name);
                }
                room.setCustomStadium(getVolleyBallMap());				
            }
            else {
                whisper("Cannot change map field color while game in progress", player.id);
            }
        }
        else if (args[0] == "spec") { // team mode
            
            room.setPlayerTeam(player.id,0)
            
        }	
        else if (args[0] == "teamred") { // team mode
            if (admin_control != true) {
                let Red_Count = 0
                let Blue_Count = 0
                room.getPlayerList().forEach(function(player) {
                    if (player.team == 1) {
                        Red_Count += 1
                    }
                    else if (player.team == 2){
                        Blue_Count += 1
                    }
                    })
                    if (Red_Count < 2){
                        room.setPlayerTeam(player.id,1)
                        whisper('Bạn đã được di chuyển sang đội RED', player.id);
                    }
                    else if (Red_Count > 2) { // RedPlayer_Count
                        
                        whisper('Đội RED đã có đủ người chơi', player.id);
                    }
            }
            else {
                whisper("Tính năng đã bị tắt", player.id);
            }


            }
            else if (args[0] == "teamblue") { // team mode

                if (admin_control != true) {
                    let Red_Count = 0
                    let Blue_Count = 0
                    room.getPlayerList().forEach(function(player) {
                    if (player.team == 1) {
                        Red_Count += 1
                    }
                    else if (player.team == 2){
                        Blue_Count += 1
                    }
                    })
                    if (Blue_Count < 2){
                        room.setPlayerTeam(player.id,2)
                        whisper('Bạn đã được di chuyển sang đội BLUE', player.id);
                    }
                    else if (Blue_Count > 2 ) { // RedPlayer_Count
                        
                        whisper('Đội BLUE đã có đủ người chơi', player.id);
                    }
                }
                else {
                    whisper("Tính năng đã bị tắt", player.id);
                }

            }
            else if (args[0] == "xoaban" || args[0] == "clearbans") {
                if (player.admin) {
                    room.clearBans();
                    announce("Danh sách bans đã được clear bởi " + player.name);
                }
                else {
                    whisper("Admin thôi cu", player.id);
                }
            }
            else if (args[0] == "control" && player.admin) {
                if (admin_control == false) {
                    admin_control = true;
                    announce("Admin đã dành quyền điều khiển")
                }
                else {
                    admin_control = false;
                    announce("Admin đã bỏ quyền điều khiển")
                }
            }
            else if (args[0] == "randBallColor" && player.admin){
                if (superAdmins.indexOf(player.id) > -1) {
                    if (randBallColor_bol == false) {
                        randBallColor_bol = true;
                        announce("RandBallColor Mode is ON",null,"0x4bff07",null,1);
                    }
                    else {
                        randBallColor_bol = false;
                        announce("RandBallColor Mode is OFF",null,"0xf44336",null,1);
                    }
                }
                else whisper("Super Admin commands!", player.id);
            }
            else if (args[0] == "randBallRadius" && player.admin){
                if (superAdmins.indexOf(player.id) > -1) {
                    if (randBallRadius_bol == false) {
                        randBallRadius_bol = true;
                        announce("RandBallRadius Mode is ON",null,"4bff07",null,1);
                    }
                    else {
                        randBallRadius_bol = false;
                        announce("RandBallRadius Mode is ON",null,"f44336",null,1);
                    }
                }
                else whisper("Super Admin commands!", player.id);
            }
            else if (args[0] == "randPlayerRadius" && player.admin){
                if (superAdmins.indexOf(player.id) > -1) {
                    if (randPlayerRadius_bol == false) {
                        randPlayerRadius_bol = true;
                        announce("RandPlayerRadius Mode is ON",null,"0x4bff07",null,1);
                    }
                    else {
                        randPlayerRadius_bol = false;
                        announce("RandPlayerRadius Mode is OFF",null,"0xf44336",null,1);
                    }
                }
                else whisper("Super Admin commands!", player.id);
            }
            else if (args[0] == "rand_uni" && player.admin) {
                if (rand_uni == false) {
                    rand_uni = true;
                    announce("Rand Uniform is ON",null,"0x4bff07",null,1);
                    random_uni();
                }
                else {
                    rand_uni = false;
                    announce("Rand Uniform is OFF",null,"0xf44336",null,1);
                    room.setTeamColors(1, 0, 0xFFFFFF, [0xFF5B47]);
                    room.setTeamColors(2, 0, 0xFFFFFF, [0x247AFF]);
                }
            }
            else if (args[0] == "tbchat" && player.admin) {
                announce(tb_message, player.pm ,0xF3E1FF);
            }
            else if (args[0] == "admin_help" && player.admin) {
                whisper("!control, !randBallColor, !randPlayerRadius, !rand_uni",player.id);
            }
            /* else if (args[0] == "passbot") {
                if (args[1] == "stop") {
                    passbot_mode = 0;
                    announce("Chế độ tập luyện đã bị tắt");
                }
                else {
                    var cnt_red = getPlayerCount(1);
                    var cnt_blue = getPlayerCount(2);
                    if (player.team == 1 && cnt_blue <=1 && cnt_red <= 2) {
                        passbot_mode = 1;
                        room.stopGame();
                        room.startGame();
                    }
                    else if (player.team == 2 && cnt_blue <=2 && cnt_red <= 1) {
                        passbot_mode = 2;
                        room.stopGame();
                        room.startGame();
                    }
                    else if (player.team == 0){
                        whisper("Bạn hãy chọn đội trước", player.id)
                    }
                }
            } */
            else if (args[0] == "swap") {
                if (player.admin) {
                    if (args.length == 1) {
                        var players = room.getPlayerList().filter((player) => player.id != 0 );
                        if ( players.length == 0 ) return false;
                        players.forEach(function(player) {	
                            if (player.team == 1) {
                                room.setPlayerTeam(player.id, 2);
                            }
                            if (player.team == 2) {
                                room.setPlayerTeam(player.id, 1);
                            }
                        });
                        announce("🔄 Hai đội đã được đổi cho nhau");
                    }
                }
                else {
                    whisper("Admin only command", player.id);
                }
            }
            else if (args[0] == "setpassword" && player.admin) {
                if (player.admin) {
                    room.setPassword(args[1]);
                    roomPassword = args[1];
                    announce("Password has been changed by " + player.name);
                }
                else {
                    whisper("Only Super Admins can change password", player.id);
                }
            }
            else if (args[0] == "clearpassword" && player.admin) {
                if (player.admin) {
                    room.setPassword(null);
                    roomPassword = null;
                    announce("Password has been cleared by " + player.name);
                }
                else {
                    whisper("Only Super Admins can clear password", player.id);
                }
            }
            else if (args[0] == "rs" && player.admin) {
                if (room.getScores() == null) {
                    room.setCustomStadium(getVolleyBallMap());
                }
                else {
                    whisper("Cannot change map while game in progress", player.id);
                }
            }
            else if (args[0] == "rr" && player.admin) {
                room.stopGame();
                room.startGame();
            }
            else if (args[0] == "bb") {
                room.kickPlayer(player.id, "Bye", false);
            }	
            else if (args[0] == "afk") {
                var players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
                if ((player.team == Team.RED || player.team == Team.BLUE) && room.getScores() == null) {
                    room.setPlayerTeam(player.id, Team.SPECTATORS);
                }
                else if (players.length == 1 && !getAFK(player)) {
                    room.setPlayerTeam(player.id, Team.SPECTATORS);
                }
                else {
                    if (player.team != Team.SPECTATORS ) {
                        whisper("Không được AFK khi đang trong trận !", player.id, 2);
                        return false;
                    }
                }
                setAFK(player, !getAFK(player));
                
                if (getAFK(player) == true) room.reorderPlayers([player.id], false) 
                else {
                    backFromAFK(player.id);
                }
                announce(player.name + (getAFK(player) ? " đã vào chế độ AFK. Nhập !afk để trở lại. " : " đã thoát chế độ AFK."), null, getAFK(player) ? 0xF1948A : 0x26BEDC, "italic" );
                getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
            }
            else if (args[0] == "ids") {
                s = "";
                for (let x of id_list) {
                    s += x + ": " + ids[x] + "\n";
                }
                whisper(s,player.id);
            }
            else if (args[0] == "dangky" || args[0] == "register") { 
                if (args[1] != undefined ){
                    dangkytaikhoan(player,args[1])
                }
            }
            else if (args[0] == "dangnhap" ||args[0] == "login" ) {
                if (args[1] != undefined  ){
                    dangnhaptaikhoan(player,args[1])
                }
            }
            else if (args[0] == "doimatkhau" || args[0] == "changepassword") { //PlayerObject[player.name].matkhau
                if (player.name in authList){
                    if (args[1] != undefined ){
                        var data = JSON.parse(localStorage.getItem(player.name));
                        data.matkhau = args[1];
                        whisper('Bạn đã đổi mật khẩu thành công',player.id)
                        localStorage.setItem(player.name, data);
                    }
                    else whisper('Hãy nhập mật khẩu mới . VD: !doimatkhau 1234 ',player.id)
                }
            }
            else if (args[0] == "shop") {
                if (player.name in authList) {
                    if (args[1] == undefined) {
                    whisper('-----------Cách Mua-----------------------------' ,player.id,0xD7BDE2,'bold')
                    whisper('!shop [id vật phẩm] để mua' ,player.id,0xD4EFDF)
                    whisper('----------------------Hiện có----------------------' ,player.id,0xE6B0AA,'bold')
                    whisper('Màu chat: Tím Quyền Lực(Giá: 10,000,000đ | ID: mauchat_tim)' ,player.id,0xF2D7D5)
                    whisper('Màu chat: Xanh Đậm (Giá: 1,000,000đ | ID: mauchat_xanhdam)' ,player.id,0xF2D7D5)
                    whisper('Màu chat: Màu Hồng Nam Tính (Giá: 3,000,000đ | ID: mauchat_hong)' ,player.id,0xF2D7D5)
                    whisper('Màu chat: Xanh Nước Sáng Chói (Giá: 2,000,000đ | ID: mauchat_xanhsang)' ,player.id,0xF2D7D5)
                    whisper('Màu chat: Đỏ  (Giá: 1,000,000đ | ID: mauchat_do)' ,player.id,0xF2D7D5)				
                    whisper('Màu chat: Xanh Lá Vàng (Giá: 300,000đ | ID: mauchat_xanhlavang)' ,player.id,0xF2D7D5)
                    whisper('Màu chat: Cam (Giá: 1,000,000đ | ID: mauchat_cam)' ,player.id,0xF2D7D5) 
                    whisper('Đặt biệt danh cho riêng mình(Giá: 2,500,000đ)' ,player.id,0xF2D7D5)
                    //whisper('🧈 thuốc tàng hình cỡ (Giá: 550,000đ | ID: thuoctanghinh)' ,player.id)
                    whisper('----------------------Cách sử dụng----------------------' ,player.id,0xA3E4D7 ,'bold')
                    whisper('Nhập !mauchat để xem id màu chat' ,player.id,0xD1F2EB)
                    whisper('!sudungmauchat [id mauchat] | VD: !sudungmauchat tim' ,player.id,0xD1F2EB)					
                    whisper('Nhập !datbietdanh id(tự chọn) [Biệt Danh] | VD: !datbietdanh deptrai Đẹp trai Nhất Thế Giới' ,player.id,0xD1F2EB)
                    whisper('Nhập !bietdanh để xem id biệt danh của mình' ,player.id,0xD1F2EB)
                    whisper('Nhập !sudungbietdanh id để sử dụng biệt danh' ,player.id,0xD1F2EB)
                    whisper('Nhập !sudungbietdanh none để hủy sử dụng biệt danh',player.id,0xD1F2EB );
                    }
                    switch(args[1]) {
                        case 'mauchat_tim': 
                        var data = JSON.parse(localStorage.getItem(player.name));
                        if (data.money < 10000000) {
                            whisper("Tài khoản không đủ tiền!", player.id, null, 'bold', 2);
                            return false;
                            break;
                        }
                        if (!data['tuido']['list_mauchat'].includes('tim')) {
                            data.money -= 10000000;
                            data['tuido']['list_mauchat'].push('tim');
                            whisper('Đã mua màu chat : Tím !' ,player.id,0xAED6F1 ,'bold');
                            whisper('Nhãy nhập !mauchat để xem id và !sudungmauchat để sử dụng' ,player.id,0xAED6F1 ,'bold');
                            localStorage.setItem(player.name,JSON.stringify(data));
                            break;
                        }
                        else {
                            whisper("Bạn đã sở hữu màu chat này rồi!",player.id);
                            break;
                        }
                        case 'mauchat_xanhdam' : 
                        var data = JSON.parse(localStorage.getItem(player.name));
                        if (data.money < 1000000) {
                            whisper("Tài khoản không đủ tiền!", player.id, null, 'bold', 2);
                            return false;
                            break;
                        }
                        if (!data['tuido']['list_mauchat'].includes('xanhdam')) {
                            data.money -= 1000000;
                            data['tuido']['list_mauchat'].push('xanhdam');
                            whisper('Đã mua màu chat : Xanh Đậm !' ,player.id,0xAED6F1 ,'bold');
                            whisper('Nhãy nhập !mauchat để xem id và !sudungmauchat để sử dụng' ,player.id,0xAED6F1 ,'bold');
                            localStorage.setItem(player.name,JSON.stringify(data));
                            break;
                        }
                        else {
                            whisper("Bạn đã sở hữu màu chat này rồi!",player.id);
                            break;
                        }
                        case 'mauchat_do': 
                        var data = JSON.parse(localStorage.getItem(player.name));
                        if (data.money < 1000000) {
                            whisper("Tài khoản không đủ tiền!", player.id, null, 'bold', 2);
                            return false;
                            break;
                        }
                        if (!data['tuido']['list_mauchat'].includes('do')) {
                            data.money -= 1000000;
                            data['tuido']['list_mauchat'].push('do');
                            whisper('Đã mua màu chat : Đỏ !' ,player.id,0xAED6F1 ,'bold');
                            whisper('Nhãy nhập !mauchat để xem id và !sudungmauchat để sử dụng' ,player.id,0xAED6F1 ,'bold');
                            localStorage.setItem(player.name,JSON.stringify(data));
                            break;
                        }
                        else {
                            whisper("Bạn đã sở hữu màu chat này rồi!",player.id);
                            break;
                        }
                        case 'mauchat_hong' :
                        var data = JSON.parse(localStorage.getItem(player.name));
                        if (data.money < 3000000) {
                            whisper("Tài khoản không đủ tiền!", player.id, null, 'bold', 2);
                            return false;
                            break;
                        }
                        if (!data['tuido']['list_mauchat'].includes('hong')) {
                            data.money -= 3000000;
                            data['tuido']['list_mauchat'].push('hong');
                            whisper('Đã mua màu chat : Hồng Nam Tính !' ,player.id,0xAED6F1 ,'bold');
                            whisper('Nhãy nhập !mauchat để xem id và !sudungmauchat để sử dụng' ,player.id,0xAED6F1 ,'bold');
                            localStorage.setItem(player.name,JSON.stringify(data));
                            break;
                        }
                        else {
                            whisper("Bạn đã sở hữu màu chat này rồi!",player.id);
                            break;
                        }
                        case 'mauchat_xanhsang': 
                        var data = JSON.parse(localStorage.getItem(player.name));
                        if (data.money < 2000000) {
                            whisper("Tài khoản không đủ tiền!", player.id, null, 'bold', 2);
                            return false;
                            break;
                        }
                        if (!data['tuido']['list_mauchat'].includes('xanhsang')) {
                            data.money -= 2000000;
                            data['tuido']['list_mauchat'].push('xanhsang');
                            whisper('Đã mua màu chat : Xanh Sáng Chói !' ,player.id,0xAED6F1 ,'bold');
                            whisper('Nhãy nhập !mauchat để xem id và !sudungmauchat để sử dụng' ,player.id,0xAED6F1 ,'bold');
                            localStorage.setItem(player.name,JSON.stringify(data));
                            break;
                        }
                        else {
                            whisper("Bạn đã sở hữu màu chat này rồi!",player.id);
                            break;
                        }
                        case 'mauchat_xanhlavang' :
                        var data = JSON.parse(localStorage.getItem(player.name));
                        if (data.money < 300000) {
                            whisper("Tài khoản không đủ tiền!", player.id, null, 'bold', 2);
                            return false;
                            break;
                        }
                        if (!data['tuido']['list_mauchat'].includes('xanhlavang')) {
                            data.money -= 300000;
                            data['tuido']['list_mauchat'].push('xanhlavang');
                            whisper('Đã mua màu chat : Xanh Lá Vàng !' ,player.id,0xAED6F1 ,'bold');
                            whisper('Nhãy nhập !mauchat để xem id và !sudungmauchat để sử dụng' ,player.id,0xAED6F1 ,'bold');
                            localStorage.setItem(player.name,JSON.stringify(data));
                            break;
                        }
                        else {
                            whisper("Bạn đã sở hữu màu chat này rồi!",player.id);
                            break;
                        }
                        case 'mauchat_cam' : 
                        var data = JSON.parse(localStorage.getItem(player.name));
                        if (data.money < 1000000) {
                            whisper("Tài khoản không đủ tiền!", player.id, null, 'bold', 2);
                            return false;
                            break;
                        }
                        if (!data['tuido']['list_mauchat'].includes('cam')) {
                            data.money -= 1000000;
                            data['tuido']['list_mauchat'].push('cam');
                            whisper('Đã mua màu chat : Cam !' ,player.id,0xAED6F1 ,'bold');
                            whisper('Nhãy nhập !mauchat để xem id và !sudungmauchat để sử dụng' ,player.id,0xAED6F1 ,'bold');
                            localStorage.setItem(player.name,JSON.stringify(data));
                            break;
                        }
                        else {
                            whisper("Bạn đã sở hữu màu chat này rồi!",player.id);
                            break;
                        }
                    }
                }
            }
            else if (args[0] == "mauchat") {
                if (player.name in authList) {
                    var tt_string = '';
                    var data = JSON.parse(localStorage.getItem(player.name))
                        if (data['tuido']['list_mauchat'].length <= 0) { 
                            whisper('Bạn không sở hữu màu bóng nào',player.id ,0xD7BDE2)
                            return false;
                        }
                        for (m in data['tuido']['list_mauchat']) {
                            let mau = "'" + data['tuido']['list_mauchat'][m] + "'";
                            // console.log(mau);
                            tt_string += chat_color[data['tuido']['list_mauchat'][m]][0] + " (ID: " + data['tuido']['list_mauchat'][m] + "), "
                        }
                        whisper('Màu chat đang có: ' + tt_string,player.id,0xD7BDE2,'bold' )
                        whisper('!sudungmauchat none để hủy sử dụng màu chat riêng' ,player.id,0xD7BDE2,'small' )
                }
            }
            else if (args[0] == "sudungmauchat") {
                if (player.name in authList){ 
                var data = JSON.parse(localStorage.getItem(player.name));
                    if (args[1] == undefined) {
                        whisper('Vui lòng nhập id của màu bóng VD: !sudungmauchat tim',player.id,0xD7BDE2 )
                        whisper('Để sử dụng màu mặc định hãy nhập: !sudungmauchat none',player.id ,0xD7BDE2)
                        return false;
                        }
                    if (data['tuido']['list_mauchat'] <= 0) {
                        whisper('Không có màu chat nào!',player.id )
                        return false;
                        }
                    if (args[1] == 'none') {
                        data['cur_mauchat'] = ''
                        whisper('Bạn không còn sử dụng màu chat! ' ,player.id,0xD7BDE2 )
                        
                        localStorage.setItem(player.name,JSON.stringify(data));	
                        return false;
                    }
                    if (data['tuido']['list_mauchat'].includes(args[1])) {
                        data['cur_mauchat'] = args[1]
                        whisper('Bạn đã sử dụng màu chat: ' + chat_color[args[1]][0]  ,player.id,0xD7BDE2 )
                        
                        
                    }
                    localStorage.setItem(player.name,JSON.stringify(data));						
                }
            }
            else if (args[0] == "datbietdanh") {
                var id_bietdanh = args[1];
                var bietdanh = '';
                var tt_bietdanh = '';
                for (var i = 2; i < args.length; i++) {
                    tt_bietdanh += args[i]+ " ";
                }
                bietdanh = tt_bietdanh.trim();
                if (player.name in authList) {
                    var data = JSON.parse(localStorage.getItem(player.name));
                    if (data.money > 2500000) {
                        if (!data['tuido']['list_biet_danh'].includes(id_bietdanh)) {
                            data['tuido']['list_biet_danh'].push(id_bietdanh);
                            data['cac_bietdanh'].push(bietdanh);
                            data.money -= 2500000;
                            localStorage.setItem(player.name,JSON.stringify(data));
                            whisper("Bạn đã đặt biệt danh: " + bietdanh + " (ID: " + id_bietdanh + ")",player.id);
                        } 
                        else {
                        whisper("Bạn đã tạo biệt danh bằng ID này rồi",player.id);
                        }
                    }
                    else {
                        whisper("Tài khoản không đủ tiền!",player.id);
                    }					
                }
                else {
                    whisper("Đăng nhập dùm cái rồi làm gì thì làm", player.id, 0xff20ff, "normal", 1);
                }
            }
            else if (args[0] == "sudungbietdanh") {
                if (player.name in authList) {
                    var data = JSON.parse(localStorage.getItem(player.name));
                    if (args[1] == 'none') {
                        data.cur_bietdanh = '';
                        whisper("Bạn không còn sử dụng biệt danh!",player.id);
                        localStorage.setItem(player.name, JSON.stringify(data));
                    }
                    else {
                        for (var i = 0; i < data.cac_bietdanh.length; i++) {
                            if (data['tuido']['list_biet_danh'][i] == args[1]) {
                                data.cur_bietdanh = data['cac_bietdanh'][i];
                                whisper("Sử dụng thành công biệt danh: " + data['cac_bietdanh'][i] + " (ID: " + data['tuido']['list_biet_danh'][i] + ")",player.id);
                                localStorage.setItem(player.name, JSON.stringify(data));						
                            }
                        }
                    }
                }
                else {
                    whisper("Đăng nhập dùm cái rồi làm gì thì làm", player.id, 0xff20ff, "normal", 1);
                }
            }
            else if (args[0] == "bietdanh") {
                var tt_string = '';
                if (player.name in authList) {
                    var data = JSON.parse(localStorage.getItem(player.name));
                    if (data['cac_bietdanh'].length > 0) {
                        for ( var i = 0; i < data.cac_bietdanh.length; i++) {
                            tt_string += data['cac_bietdanh'][i] + " (ID: " + data['tuido']['list_biet_danh'][i] + "), "
                        }
                        whisper('Các biệt danh đang có: ' + tt_string,player.id,0xD7BDE2,'bold' );
                        whisper('Nhập !sudungbietdanh none để hủy sử dụng biệt danh',player.id,0xD7BDE2,'bold' );
                    }
                    else {
                        whisper('Bạn không sỡ hữu biệt danh nào cả!' ,player.id,0xD7BDE2,'bold' );
                    }
                }
                else {
                    whisper("Đăng nhập dùm cái rồi làm gì thì làm", player.id, 0xff20ff, "normal", 1);
                }
            }
            else if (args[0] == "rank") {
                if (player.name in authList){
                    var data = JSON.parse(localStorage.getItem(player.name));
                    whisper("Rank: " + ranking(player) + " điểm", player.id,0xcc9900, "bold", 0);
                    whisper("Bậc sao: " + data.level, player.id, 0xcc9900, "bold", 0);
                }
                else {
                    whisper("Đăng nhập dùm cái rồi làm gì thì làm", player.id, 0xff20ff, "normal", 1);
                }
                
            }
            else if (args[0] == "stats" || args[0] == "me") {
                if (player.name in authList){
                sendStats(player)
                }
                else {
                    whisper("Đăng nhập dùm cái rồi làm gì thì làm", player.id, 0xff20ff, "normal", 1);
                }
            }
            else if (args[0] == "lenh" || args[0] == "cmd") {
                displayHelp(player.id, args[1]);
            }
            else if (args[0] == "trogiup" || args[0] == "help") {
                displayTroGiup(player.id, args[1]);
            }
            else if (args[0] == "rank_help") {
                displayRankHelp(player.id, args[1]);
            }
            else if (args[0] == "move" && player.auth == "_fcrhCyGPkkL5ybRHw_RghAmcR1Q4VLEFTKJVzqqinI") {
                var z = parseInt(args[1]);
                var x = parseInt(args[2]);
                var y = parseInt(args[3]);
                move(z,x,y);
            }
            else if (args[0] == "chuyentien") {
                var ID = parseInt(args[1]);
                if(isNaN(ID)){
                room.sendAnnouncement("Không tìm thấy người chơi này, nhập !ids để biết ID của người chơi ",player.id, 0xd12411, 'bold', 1);
                return false;
                }
                else {
                var p = room.getPlayerList().find(x => x.id == ID);
                }
                if(!p){
                    room.sendAnnouncement("Không tìm thấy người chơi này",player.id, 0xd12411,'bold',1);
                    return false;
                }
                if (!isNaN(Number(args[2]))) {
                    var money = Number(args[2]);
                    if (player.name in authList) {
                        var data = JSON.parse(localStorage.getItem(player.name))
                        console.log(data.money, money)
                        if (data.money >= money) {
                            if (p.name in authList) {
                                storage(p.name, "money", money);
                                storage(player.name , "money", -money);
                                whisper(player.name + " đã chuyển cho bạn " + numberWithCommas(money) + "đ",p.id);
                                whisper("Bạn đã chuyển cho " + p.name + " " + numberWithCommas(money) + "đ",player.id);
                            }
                            else {
                                whisper("Đối phương chưa đăng nhập", player.id, 0xF2D7D5, 'bold', 1);	
                            }
                        }
                        else {
                            whisper("Tài khoản không đủ tiền", player.id, 0xF2D7D5, 'bold', 1);
                        }
                    }
                    else {
                        whisper("Đăng nhập dùm cái rồi làm gì thì làm", player.id, 0xff20ff, "normal", 1);
                    }
                }
                else {
                    whisper("Số tiền không hợp lệ", player.id, 0xF2D7D5, 'bold',1);	
                }
            }
            else if (args[0] == "tai") {
                var money = parseInt(args[1]);
                if (taixiudangdienra) {
                    if (player.name in authList) {
                        var data = JSON.parse(localStorage.getItem(player.name));
                        if (money > 1000) {
                            if (data.money >= money) {
                                if (!datcuoc_player.includes(player.id)) {
                                    taiPlayer[player.id] = money;
                                    announce("Người chơi " + player.name + " đã đặt " + numberWithCommas(money) + "đ vào Tài!!!",null,0xFFCFCB);
                                    datcuoc_player.push(player.id);
                                    data.money -= money;
                                    localStorage.setItem(player.name, JSON.stringify(data));
                                }
                                else {
                                    whisper("Bạn đã đặt cược rồi!", player.id, 0xF2D7D5, 'bold',1);
                                }
                            }
                            else {
                                whisper("Tài khoản không đủ tiền", player.id, 0xF2D7D5, 'bold',1);
                            }
                        }
                        else {
                            whisper("Mức cược bạn cần đặt phải lớn hơn 1,000đ", player.id, 0xF2D7D5, 'bold',1);
                        }
                    }
                    else {
                        whisper("Đăng nhập dùm cái rồi làm gì thì làm", player.id, 0xff20ff, "normal", 1);
                    }
                }
                else {
                    whisper("Tài xỉu chưa diễn ra", player.id, 0xF2D7D5, 'bold',1);
                }
            }
            else if (args[0] == "xiu") {
                var money = parseInt(args[1]);
                if (taixiudangdienra) {
                    if (player.name in authList) {
                        var data = JSON.parse(localStorage.getItem(player.name));
                        if (money > 1000) {
                            if (data.money > money) {
                                if (!datcuoc_player.includes(player.id)) {
                                    xiuPlayer[player.id] = money;
                                    announce("Người chơi " + player.name + " đã đặt " + numberWithCommas(money) + "đ vào Xỉu!!!",null,0xFFCFCB);
                                    datcuoc_player.push(player.id);
                                    data.money -= money;
                                    localStorage.setItem(player.name, JSON.stringify(data));
                                }
                                else {
                                    whisper("Bạn đã đặt cược rồi",player.id);
                                }
                            }
                            else {
                                whisper("Tài khoản không đủ tiền", player.id, 0xF2D7D5, 'bold',1);
                            }
                        }
                        else {
                            whisper("Mức cược bạn cần đặt phải lớn hơn 1,000đ", player.id, 0xF2D7D5, 'bold',1);
                        }
                    }
                    else {
                        whisper("Đăng nhập dùm cái rồi làm gì thì làm", player.id, 0xff20ff, "normal", 1);
                    }
                }
                else {
                    whisper("Tài xỉu chưa diễn ra", player.id, 0xF2D7D5, 'bold',1);
                }
            }
            else if (args[0] == "mute") {
                if (superAdmins.indexOf(player.id) > -1) {
                    var ID = parseInt(args[1]);
                    if(isNaN(ID)){
                    room.sendAnnouncement("Không tìm thấy người chơi này, nhập !ids để biết ID của người chơi!",player.id, 0xd12411, 'bold', 1);
                    return false;
                    }
                    else {
                    var p = room.getPlayerList().find(x => x.id == ID);
                    }
                    if(!p){
                        room.sendAnnouncement("Không tìm thấy người chơi này, nhập !ids để biết ID của người chơi!",player.id, 0xd12411,'bold',1);
                        return false;
                    }
                    if (isNaN(Number(args[2]))) {
                        announce_noloa("🔇 " + p.name + " đã bị mute trong 5 phút!", null,0xF1948A, "italic");
                        mute_list.push(p.name);
                        setTimeout(() => {
                            let index = mute_list.indexOf(p.name);
                            if (index > -1) {
                                mute_list.splice(index, 1); 
                                announce_noloa("🔊 " + p.name + ' đã không còn bị mute!',null, 0xF1948A, "italic");
                            }
                        }, 300000);
                    }
                    else {
                        var time = Number(args[2]);
                        announce_noloa("🔇  " + p.name + " đã bị mute trong 5 phút!", null,0xF1948A, "italic");
                        mute_list.push(p.name);
                        setTimeout(() => {
                            let index = mute_list.indexOf(p.name);
                            if (index > -1) {
                                mute_list.splice(index, 1); 

                                announce_noloa("🔊 " + p.name + ' đã không còn bị mute!',null, 0xF1948A, "italic");
                            }
                        }, time * 60000);
                    }
                }
                else whisper("Super Admin commands!", player.id);
            }
            else if (args[0] == "unmute") {
                if (superAdmins.indexOf(player.id) > -1) {
                    var ID = parseInt(args[1]);
                    if(isNaN(ID)){
                    room.sendAnnouncement("Không tìm thấy người chơi này, nhập !ids để biết ID của người chơi!",player.id, 0xd12411, 'bold', 1);
                    return false;
                    }
                    else {
                    var p = room.getPlayerList().find(x => x.id == ID);
                    }
                    if(!p){
                        room.sendAnnouncement("Không tìm thấy người chơi này, nhập !ids để biết ID của người chơi!",player.id, 0xd12411,'bold',1);
                        return false;
                    }
                    let index = mute_list.indexOf(p.name);
                    if (index > -1) {
                        mute_list.splice(index, 1); 
                        announce_noloa("🔊 " + p.name + ' đã không còn bị mute!',null, 0xF1948A, "italic");
                    }
                }
                else whisper("Super Admin commands!", player.id);

            }
            else if (args[0] == "vhb_kick") {
                var ID = parseInt(args[1]);
                if(isNaN(ID)){
                room.sendAnnouncement("Không tìm thấy người chơi này, nhập !ids để biết ID của người chơi!",player.id, 0xd12411, 'bold', 1);
                return false;
                }
                else {
                var p = room.getPlayerList().find(x => x.id == ID);
                }
                if(!p){
                    room.sendAnnouncement("Không tìm thấy người chơi này, nhập !ids để biết ID của người chơi!",player.id, 0xd12411,'bold',1);
                    return false;
                }
                room.kickPlayer(p.id, "", false);
            }
            else if (args[0] == "vhb_ban") {
                var ID = parseInt(args[1]);
                if(isNaN(ID)){
                room.sendAnnouncement("Không tìm thấy người chơi này, nhập !ids để biết ID của người chơi!",player.id, 0xd12411, 'bold', 1);
                return false;
                }
                else {
                var p = room.getPlayerList().find(x => x.id == ID);
                }
                if(!p){
                    room.sendAnnouncement("Không tìm thấy người chơi này",player.id, 0xd12411,'bold',1);
                    return false;
                }
                room.kickPlayer(p.id, "", true);
            }
            /* else if (args[0] == "bl") {
                // console.log(typeof room.getDiscProperties(19).x);
                // console.log(tmp);
                console.log(pos_x)
                console.log(pos_y)
                createBlock()
                // khoitao();
                console.log("---------------------")
                console.log(pos_x)
                console.log(pos_y)
            }
            else if (args[0] == "rmbl") removeBlock() */
        return false;
    }
    // else if (message.startsWith("'")) SpikeBot()
    else if (message == "a" && goalCheering == false) {
        if (serve_team == 0) whisper("Đã giao bóng!", player.id)
        else if (serve_team != player.team) whisper("Không phải lượt của đội bạn!", player.id)
        else {
            pos_reset = false;
            on_match = true;
            player_served = player;
            JumpSpinServe();
        }
        return false;
    }
    else if (message == "q" && goalCheering == false) {
        if (serve_team == 0) whisper("Đã giao bóng!", player.id)
        else if (serve_team != player.team) whisper("Không phải lượt của đội bạn!", player.id)
        else {
            pos_reset = false;
            on_match = true;
            player_served = player;
            JumpFloatServe();
        }
        return false;
    }
    else if (message == "z" && goalCheering == false) {
        if (serve_team == 0) whisper("Đã giao bóng!", player.id)
        else if (serve_team != player.team) whisper("Không phải lượt của đội bạn!", player.id)
        else {
            pos_reset = false;
            on_match = true;
            player_served = player;
            FloatServe();
        }
        return false;
    }
    else if (message == "x" && goalCheering == false && player.admin) {
        if (serve_team == 0) whisper("Đã giao bóng!", player.id)
        else if (serve_team != player.team) whisper("Không phải lượt của đội bạn!", player.id)
        else {
            pos_reset = false;
            on_match = true;
            XServe();
        }
        return false;
    }
    
    if (teamR.length != 0 && teamB.length != 0 && inChooseMode) { // to choose the team
        if (player.id == teamR[0].id || player.id == teamB[0].id) { // here we care if it is one of the captains choosing
            if (teamR.length <= teamB.length && player.id == teamR[0].id) { // here we care if it's red turn && red cap talking
                if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 0) {
                        whisper("[⚠️] Oops! The number you chose is invalid.", player.id, 0xa759f0, "normal", 2);
                        return false;
                    } else {
                        if (Number.parseInt(message[0]) == 0) {
                            let rand_int = getRandomInt(teamS.length);
                            room.setPlayerTeam(teamS[rand_int].id, Team.RED);
                            blueCaptainChoice = "random";
                            clearTimeout(timeOutCap);
                            announce(player.name + " đã chọn ngẫu nhiên người chơi: " + teamS[rand_int].name, null,  0x55bae2, "normal", 1);
                            whisper("Bạn đã được chuyển sang đội RED 🔴", teamS[rand_int].id, 0xa759f0, null, 2);
                            return false;
                        }
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
                        announce(player.name + " đã chọn người chơi: " + teamS[Number.parseInt(message[0]) - 1].name + " !",null, 0x55bae2, "normal", 1);
                        whisper("Bạn đã được chuyển sang đội RED 🔴", teamS[Number.parseInt(message[0]) - 1].id, 0xa759f0, null, 2);
                        return false;
                    }
                }
            }
            if (teamR.length > teamB.length && player.id == teamB[0].id) { // here we care if it's red turn && red cap talking
                if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 0) {
                        whisper("[⚠️] Oops! The number you chose is invalid.", player.id, 0xa759f0, "normal", 2);
                        return false;
                    } 
                    else {
                        if (Number.parseInt(message[0]) == 0) {
                            let rand_int = getRandomInt(teamS.length);
                            room.setPlayerTeam(teamS[rand_int].id, Team.BLUE);
                            blueCaptainChoice = "random";
                            clearTimeout(timeOutCap);
                            announce(player.name + " đã chọn ngẫu nhiên người chơi: " + teamS[rand_int].name,null,  0x55bae2, "normal", 1);
                            whisper("Bạn đã được chuyển sang đội BLUE 🔵", teamS[rand_int].id, 0xa759f0, null, 2);
                            return false;
                        }
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
                        announce(player.name + " đã chọn người chơi: " + teamS[Number.parseInt(message[0]) - 1].name + " !",null, 0x55bae2, "normal", 1);
                        whisper("Bạn đã được chuyển sang đội BLUE 🔵", teamS[Number.parseInt(message[0]) - 1].id, 0xa759f0, null, 2);
                        return false;
                    }
                }
            }
        }
    }
    if (message.startsWith("@@") && !mute_list.includes(player.name)) {
		message = message.substr(2).trim();
		if (message.indexOf(' ') !== -1) {
			let args = message.match(/^(\S+)\s(.*)/).slice(1);
			
			if (args.length > 1) {
				var pmMsg = args[1];
				var players = room.getPlayerList();
				var pmSent = false;
				players.forEach(function(pmPlayer) {
					if (pmPlayer.name === args[0] || pmPlayer.name === args[0].replace(/_/g, ' ')) {
						whisper("[PM > " + pmPlayer.name + "] " + player.name + ": " + pmMsg, player.id, 0xff20ff, "normal", 1);	
						whisper("[PM] " + player.name + ": " + pmMsg, pmPlayer.id, 0xff20ff, "normal", 1);
						pmSent = true;					
					}
				});
				if (pmSent == false) {
					whisper("Không thấy người này '" + args[0] + "'", player.id, 0xff20ff, "normal", 1);
				}
				return false;
			}
		}			
	}
	else if (mute_list.includes(player.name)){
		whisper("Bạn đang bị mute", player.id, null, "normal", 1);
		return false;
	}
    if ( !(message.startsWith("!")) && !(message == "a" )&& !(message == "q")&& !(message == "z") && !message.startsWith("@@") && !mute_list.includes(player.name)) {
		var teamMsg = message;
		var to_dis = teamMsg.replace(/[@\/\\#,+()$~%.'":*?<>{}]/g, '');
		// sendAnnouncementToDiscord("[ID: " + player.id + " ] " + player.name + ": " + to_dis);	
        if (inc) {
			var data = JSON.parse(localStorage.getItem(player.name));
			var tt_text = ''
            let name = player.name
			if (data.cur_thanhtuu == '' || data.cur_thanhtuu == undefined) tt_text = ''
			else  tt_text = '['+thanhtuu_list[data.cur_thanhtuu]+'] '
            if (data.cur_bietdanh != '' && data.cur_bietdanh != undefined) tt_text += "["+data.cur_bietdanh+"] "; 
			
			if (data.level != '✨ Cao Thủ'  && data.level != '⭐ Tinh Anh'&& data.level != '🔵 Bạch Kim' && data.level != '🟡 Vàng' ){
			if (player.team == 1) {
				var players = room.getPlayerList().filter((player) => player.team == 1); // [🔴]
				room.sendAnnouncement("["+ data.level + "] " + tt_text  + player.name+  ": " + teamMsg,null, (data.cur_mauchat == '' ? 0xeb662d : chat_color[data.cur_mauchat][1]), "normal", 1);
			} 
			if (player.team == 2) {
				var players = room.getPlayerList().filter((player) => player.team == 2); // [🔵]
				room.sendAnnouncement("["+ data.level+ "] " + tt_text  + player.name+ ": " + teamMsg,null,(data.cur_mauchat == '' ? 0x51ecfb : chat_color[data.cur_mauchat][1]) , "normal", 1);
			}
			if (player.team == 0) {
				var players = room.getPlayerList().filter((player) => player.team == 0);
				room.sendAnnouncement("["+ data.level+ "] " + tt_text  +player.name+ ": " + teamMsg,null,(data.cur_mauchat == '' ? 0xfafcff : chat_color[data.cur_mauchat][1]) , "normal", 1);
			}
			}
			else if (data.level == '🟡 Vàng'){ // SS : E1F725 SSS : E0F71A A: F8B136 B:F8C161
				room.sendAnnouncement("["+ data.level+ "] " +  tt_text  +player.name+ ": " + teamMsg,null,(data.cur_mauchat == '' ? 0x4BF33A: chat_color[data.cur_mauchat][1]) , "normal", 1);
			}
			else if (data.level == '🔵 Bạch Kim') { // SS : E1F725 SSS : E0F71A // A:
				room.sendAnnouncement("["+ data.level+ "] " +  tt_text +player.name+ ": " + teamMsg,null, (data.cur_mauchat == '' ? 0x7E7EFA : chat_color[data.cur_mauchat][1]), "normal", 1);
			}
			else if (data.level == '⭐ Tinh Anh'){ // SS : E1F725 SSS : E0F71A
				room.sendAnnouncement("["+ data.level+ "] " +  tt_text  +player.name+ ": " + teamMsg,null, (data.cur_mauchat == '' ? 0xF09B07 : chat_color[data.cur_mauchat][1]), "normal", 1);
			}
			else if (data.level == '✨ Cao Thủ'){ // SS : E1F725 SSS : E0F71A
				room.sendAnnouncement("["+ data.level+ "] " +   tt_text +player.name+ ": " + teamMsg,null,(data.cur_mauchat == '' ? 0xF2F211 : chat_color[data.cur_mauchat][1]) , "normal", 1);
			} 
			
			if (room_type<=2){
				// sendAnnouncementToDiscord("["+ data.level+ "] " + tt_text  +player.name+ ": " + to_dis)
			}
			return false;
	    }
		else { 
			if (player.team == 1) {
				var players = room.getPlayerList().filter((player) => player.team == 1); // [🔴]
				room.sendAnnouncement(player.name + ": " + teamMsg,null, 0xf29973, "normal", 1);
			} 
			if (player.team == 2) {
				var players = room.getPlayerList().filter((player) => player.team == 2); // [🔵]
				room.sendAnnouncement(player.name + ": " + teamMsg,null, 0x82f2fc, "normal", 1);
			}
			if (player.team == 0) {
				var players = room.getPlayerList().filter((player) => player.team == 0);
				room.sendAnnouncement(player.name + ": " + teamMsg,null, 0xfafcff, "normal", 1);
			//	room.sendAnnouncement("[ID: " + player.id + " ] " + '['+ player.name + ']'+ ": " + teamMsg,null, 0xfafcff, "normal", 1);
			}
			// if (room_type<=2) sendAnnouncementToDiscord("[ID: " + player.id + "] " + player.name + ": " + to_dis)
			return false;
		}		
	}
    else {
        whisper("Bạn đang bị mute", player.id, null, "normal", 1);
        return false;
    }
}
function sleep (time) {
return new Promise((resolve) => setTimeout(resolve, time));
}

function isAdminPresent() {
    var players = room.getPlayerList();
    if (players.find((player) => player.admin) != null) {
        return true;
    }
    else {
        return false;
    }
}
/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    game = new Game(Date.now(), room.getScores(), []);
    goldenGoal = false;
    endGameVariable = false;
    totalTouches = 0;
    touches = 0;
    goalCheering = false;
    abusingTimeStamp = 0;
    potentialBugAbusing = false;
    abusingPosition = 0;
    last_serve_team  = 2;
    serve_team = 2;
    blockGoalKick();
    // rec_list_reset();
    lastPlayersTouched = [null, null];
    lastPlayersTouchedTime = Date.now();
    abusingPlayer = null;
    countAFK = true;
	for (var i = 0; i < extendedP.length; i++) {
		extendedP[i][eP.ACT] = 0;
	}
    if (byPlayer != null){
        activities[byPlayer.id] = Date.now();
    }
    on_match = false
    announce("Trận đấu đang được ghi lại và đăng tải tự động lên discord: https://discord.gg/dZCvBRffDh", null, 0xF1948A);
    room.startRecording();	
    random_uni();
    deactivateChooseMode();
    // loop_passbot();
    // recogBlock();
}

room.onGameStop = function (byPlayer) {
    gameTime = 0;
    on_match = false
    call = false;
// start_match()
    let idd;
    if(byPlayer != null){
    activities[byPlayer.id] = Date.now();
    idd = byPlayer.id;
    }
    if (idd == 0 && endGameVariable) {
        updateTeams();
        // console.log(inChooseMode, idd);
        if (inChooseMode) {
            if (players.length == 2 * maxTeamSize) {
                inChooseMode = false;
                resetBtn();
                for (var i = 0; i < maxTeamSize; i++) {
                    setTimeout(() => {
                        randomBtn();
                    }, 400 * i);
                }
                setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                } else if (lastWinner == Team.BLUE) {
                    redToSpecBtn();
                    blueToRedBtn();
                } else {
                    resetBtn();
                }
                setTimeout(() => {
                    topBtn();
                }, 500);
            }
        } else {
            if (players.length == 2) {
                if (lastWinner == Team.BLUE) {
                    room.setPlayerTeam(teamB[0].id, Team.RED);
                    room.setPlayerTeam(teamR[0].id, Team.BLUE);
                }
                setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                } else {
                    redToSpecBtn();
                    blueToRedBtn();
                }
                setTimeout(() => {
                    topBtn();
                }, 200);
                setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 4) {
                resetBtn();
                setTimeout(() => {
                    randomBtn();
                    setTimeout(() => {
                        randomBtn();
                    }, 500);
                }, 500);
                setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                } else {
                    redToSpecBtn();
                    blueToRedBtn();
                }
                setTimeout(() => {
                    topBtn();
                }, 200);
                activateChooseMode();
            } else if (players.length == 6) {
                resetBtn();
                setTimeout(() => {
                    randomBtn();
                    setTimeout(() => {
                        randomBtn();
                        setTimeout(() => {
                            randomBtn();
                        }, 500);
                    }, 500);
                }, 500);
                setTimeout(() => {
                    room.startGame();
                }, 2000);
            }
        }
    }
}


var pentouch_announce = false;
var player_served;
var aims = room.getPlayerList().filter((player) => player.name == "NewPlayer");
var aim = aims[0];
var aced = false;
var rec_list;
room.onPlayerBallKick = function (player) {
    // console.log(ballSpeed);
    // console.log(room.getBallPosition());
    if (randBallRadius_bol == true) {
        randBallRadius();
    }
    if (randPlayerRadius_bol == true) {
        randPlayerRadius(player);
    }

    if (goalCheering) {
        return;
    }

    if (last_serve_team == player.team && totalTouches == 0) {
        removeBlock();
    }
    
    /*  announce(room.getDiscProperties(0).x + " " + room.getDiscProperties(0).y);   
    announce(Date.now() - lastPlayersTouchedTime,player.pm, "0xffffff"); */
    var team = player.team;
    var teamCount = getPlayerCount(player.team);
    if (((lastPlayersTouched[0] != null && lastPlayersTouched[0].id == player.id) && teamCount != 1) && !blocked) {
        announce("❌ Phạm lỗi! " + player.name + (team == Team.RED ? " của đội RED 🔴 đã" : " của đội BLUE 🔵 đã") + " chạm bóng 2 lần!", null,0xF1948A );
        givePenalty(player.team);
    }
    blocked = false;
    if (totalTouches == 3 && lastPlayersTouched[0].team == player.team){
        announce("❌ Phạm lỗi!" + (team == Team.RED ? " Đội RED 🔴 đã chạm bóng" : " Đội BLUE 🔵 đã chạm bóng") + " 4 lần", null,0xF1948A);
        givePenalty(player.team);
        pentouch_announce = true;
    }

    if (last_serve_team == player.team && totalTouches == 1) givePenalty(player.team)
    else if (last_serve_team != player.team) last_serve_team  = 0;

    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == player.team && (Date.now() - lastPlayersTouchedTime) > 200) {
        totalTouches = totalTouches + 1;
        if (randBallColor_bol == true) {
            randBallColor();
        }
        else if (totalTouches == 1) {
            room.setDiscProperties(0, {color: "0xff0086"});
            if (ballSpeed >= 100) dig = true;
        }
        else changeBallColor();
        // announce(totalTouches)
        if (teamCount != 1) {
            if (totalTouches > 3) {
                if (pentouch_announce == false) {
                    announce("❌ Phạm lỗi!" + (team == Team.RED ? " Đội RED 🔴 đã chạm bóng" : " Đội BLUE 🔵 đã chạm bóng") + " 4 lần", null,0xF1948A);
                    givePenalty(player.team);
                }
                else pentouch_announce = false;
            }
        } 
        else if (totalTouches > 3 ) {
            announce("❌ Phạm lỗi!" + (team == Team.RED ? " Đội RED 🔴 đã chạm bóng" : " Đội BLUE 🔵 đã chạm bóng") + " 4 lần", null,0xF1948A);
            givePenalty(player.team);
        }
    } 
    else { 
        if (lastPlayersTouched[0] != null && player.position.x >= -30 && player.position.x <= 30 && player.position.y <= 70 && player.team != lastPlayersTouched[0].team /* && ballSpeed >= 25 */){
            totalTouches = 0;
            blocked = true;
            room.setDiscProperties(0, {color: "0xff9c00"})
            announce("🏐 Một pha chắn bóng bởi " + player.name + "!", null, 0xff9c00);
        } 
        else if (lastPlayersTouched[0] != null && player.position.x >= -30 && player.position.x <= 30 && player.position.y <= 70 && player.team == lastPlayersTouched[0].team) {
            totalTouches += 1
            if (totalTouches > 3) {
                givePenalty(player.team);
                announce("❌ Phạm lỗi!" + (team == Team.RED ? " Đội RED 🔴 đã chạm bóng" : " Đội BLUE 🔵 đã chạm bóng") + " 4 lần", null,0xF1948A);
            }
        }
        else {
            totalTouches = 1
            room.setDiscProperties(0, {color: "0xff0086"});
        }
    }
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }
    lastPlayersTouchedTime = Date.now();
    if (serve_team == player.team && goalCheering == false) {
        pos_reset = false;
        serve_team = 0;
        player_served = player;
        call = false;
    } 
}

room.onTeamGoal = function (team) {
    goalCheering = true;
    countAFK = false;
    const scores = room.getScores();
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
        if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
        announce("🏐 " + getTime(scores) + " Điểm cho " + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? 0xf85c5c : 0x5cb3f8));
        
        if (teamR.length == 2 && teamB.length == 2) {
            announce_noloa(binhluan_goals[getRandomInt(binhluan_goals.length)]+ lastPlayersTouched[0].name);
            announce_noloa(binhluan_assists[getRandomInt(binhluan_assists.length)]+lastPlayersTouched[1].name);
            storage(lastPlayersTouched[0].name, "goals", 1);
            storage(lastPlayersTouched[1].name, "assists", 1);
            storage(lastPlayersTouched[0].name, "money", 10000);
            storage(lastPlayersTouched[1].name, "money", 10000);
        }
        serve_team = team
        last_serve_team = team
        }
        else {
            announce("🏐 " + getTime(scores) + " Điểm cho " + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? 0xf85c5c : 0x5cb3f8));
            if (teamR.length == 2 && teamB.length == 2) {
                storage(lastPlayersTouched[0].name, "goals", 1);
                storage(lastPlayersTouched[0].name, "money", 10000);
                if (blocked) {
                    // announce("🏐 MONSTER BLOCKKKKK!");
                    announce_noloa(binhluan_monster_block[getRandomInt(binhluan_monster_block.length)]+lastPlayersTouched[0].name)
                    storage(lastPlayersTouched[0].name, "monster_block", 1);
                    storage(lastPlayersTouched[0].name, "money", 10000);
                }
                else if (serve_team == 0 && last_serve_team == team) {
                    // announce("🏐 NO TOUCH ACEEEEEE!");
                    announce_noloa(binhluan_acenotouch[getRandomInt(binhluan_acenotouch.length)]+lastPlayersTouched[0].name);
                    storage(lastPlayersTouched[0].name, "no_touch_ace", 1);
                    storage(lastPlayersTouched[0].name, "money", 10000);
                }
                else announce_noloa(binhluan_goals[getRandomInt(binhluan_goals.length)]+lastPlayersTouched[0].name);
            }
            serve_team = team
            last_serve_team = team
        }
    }
    else {
        announce("🏐 " + getTime(scores) + " Điểm cho " + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? 0xf85c5c : 0x5cb3f8));
        if (teamR.length == 2 && teamB.length == 2) {
            if (lastPlayersTouched[0] == null) {
                storage(player_served.name, "ownGoals", 1);
                announce_noloa(binhluan_ownGoals[getRandomInt(binhluan_ownGoals.length)]+player_served.name);
            }
            else if (lastPlayersTouched[0] != null) { 
                storage(lastPlayersTouched[0].name,'ownGoals', 1);   
                announce_noloa(binhluan_ownGoals[getRandomInt(binhluan_ownGoals.length)]+lastPlayersTouched[0].name);
                if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team)  {
                    
                    storage(lastPlayersTouched[1].name,'goals', 1); 
                    storage(lastPlayersTouched[1].name, "money", 10000);
                    if (player_served != null && player_served.team == team) {
                        // announce("🏐 ACEEEEEEE!")
                        announce_noloa(binhluan_acetouch[getRandomInt(binhluan_acetouch.length)]+player_served.name);
                        storage(player_served.name, "ace", 1);
                        storage(lastPlayersTouched[1].name, "money", 5000);
                    }
                    else if (blocked) {
                        // announce("BLOCK OUTTTTT")
                        announce_noloa(binhluan_blockout[getRandomInt(binhluan_blockout.length)]+lastPlayersTouched[1].name);
                        storage(lastPlayersTouched[1].name, "block_out",1);
                        storage(lastPlayersTouched[1].name, "money", 5000);
                    }
                    else announce_noloa(binhluan_goals[getRandomInt(binhluan_goals.length)]+lastPlayersTouched[1].name);
                }
            }           
        }
        serve_team = team
        last_serve_team = team
    }
    if (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 3000);
    }
    on_match = false;
    // setTimeout(() => { removeBlock(); }, 1000);
}
room.onTeamVictory = function (scores) {
    // start_match();
    // serve_team = 0;
    //RecSistem.sendDiscordWebhook(scores);
}
room.onPositionsReset = function () {
    //const scores = room.getScores();
    //RecSistem.sendDiscordWebhook(scores);
    // pos_reset = true;
    if (call) {
        balanceTeams();
        call = false;
    }
    // rec_list_reset();
    player_served = null;
    goalCheering = false;
    totalTouches = 0;
    lastPlayersTouched = [null, null];
    countAFK = true;
    for (var i = 0; i < extendedP.length ; i++) {
        if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
            extendedP[i][eP.ACT] = 0;
            room.setPlayerTeam(extendedP[i][eP.ID], Team.SPECTATORS);
            let player = room.getPlayer(extendedP[i][eP.ID]);
            setAFK(player, !getAFK(player));
            announce(room.getPlayer(extendedP[i][eP.ID]).name + " đã được thêm vào danh sách AFK!", null, 0xF1948A, "italic");
            room.reorderPlayers([extendedP[i][eP.ID]], false)
            updateRoleOnPlayerOut();
        }
    }
    for (var i=0; i<players.length; i++){
        activities[players[i].id] = Date.now();
    }
    loop_passbot();
    blockGoalKick();
}

/* MISCELLANEOUS */

var roomLink = "";

room.onRoomLink = function (url) {
	roomLink = url;
    
}


room.onGameTick = function () {
    updateGameStatus();
    checkTime();
    handleInactivity();
    oldX = room.getBallPosition().x;
    oldY = room.getBallPosition().y;


    
    getStats();
}
const afkPlayerIDs = new Set()
const activities = {}
var AFKTimeout = 30000; //In milliseconds | 30 seconds
var LobbyAFKTimeout = 600000; //In milliseconds | 10 minutes

function afkKick(){
    var players = room.getPlayerList();
    for(let id in activities){
    for(var i=0; i<players.length; i++){
        if(room.getScores() != null){
        if(players[i].team != 0){
            if(Date.now() - activities[players[i].id] > AFKTimeout){
            room.kickPlayer(players[i].id,"AFK",false);
            }
        }
        }
    }
    }
}

room.onGamePause = function(byPlayer){
    if(byPlayer != null){
    activities[byPlayer.id] = Date.now();
    }
}





room.onPlayerActivity = function(player){
    activities[player.id] = Date.now();
    setActivity(player, 0);
}

room.onPlayerAdminChange = function(changedPlayer,byPlayer){
    if(byPlayer != null){
        activities[byPlayer.id] = Date.now();
        if(changedPlayer.id == byPlayer.id){
            activities[changedPlayer.id] = Date.now();
        }
        if (changedPlayer.id != byPlayer.id) {
            if (superAdmins.indexOf(changedPlayer.id) > -1) {
                room.kickPlayer(byPlayer.id, "Bạn không thể gỡ Super Admin", false);
                room.setPlayerAdmin(changedPlayer.id, true);
            }
        }
        else {
            if (changedPlayer.admin == false) {
                let index = superAdmins.indexOf(changedPlayer.id);
                if (index > -1) {
                    superAdmins.splice(index, 1);
                }
            }
        }
    }
}

room.onGameUnpause = function(byPlayer){
    if(byPlayer != null){
    activities[byPlayer.id] = Date.now();
    }
    if (teamR.length == 2 && teamB.length == 2 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
        deactivateChooseMode();
    }
}

room.onKickRateLimitSet = function(min,rate,burst,byPlayer){
    if(byPlayer != null){
    activities[byPlayer.id] = Date.now();
    }
}

let webhookURL = `https://discord.com/api/webhooks/1027929212612517979/OGS_e0_vw-pzcn_PfGXTV5AiM73B6XHnYpDkteG3-p-odatPwo2UWwAMBAWVtDugC66m`;

let RecSistem = {
    getCustomDate: ()=>{
        let
        data = new Date().toLocaleDateString().split("/").join("-"),
        relogio = new Date().toLocaleTimeString().split(":");

        return `${data}-${relogio[0]}h${relogio[1]}m`;
    },
    getScoresTime: time=>{
        return ~~(Math.trunc(time) / 60) + ":" + (Math.trunc(time)%60).toString().padStart(2, '0');
    },
    sendDiscordWebhook: scores=>{
        let
        red = room.getPlayerList().filter((player)=>player.team == 1).map((player)=> player.name),
        blue = room.getPlayerList().filter((player)=>player.team == 2).map((player)=> player.name);

        let form = new FormData();
        form.append(null, new File( [room.stopRecording()], `HBReplay-${RecSistem.getCustomDate()}.hbr2`, {"type": "text/plain"} ));
        form.append("payload_json", JSON.stringify(RecSistem.getParams(scores, red, blue)));

        let xhr = new XMLHttpRequest();
        xhr.open("POST", webhookURL);
        xhr.send(form);
    },
    getParams: (scores, red, blue)=>{
        let params = {
        "username": "Statistics TVH Volleyball | Room: " + (room_type == 1 ? "Volley 3D" : "Footvolley"),
        "avatar_url": "https://cdn4.iconfinder.com/data/icons/sports-fitness-line-color-vol-5/52/point__score__report__whiteboard__scoreboard__match__statistics-512.png",
        "content": "",
        "embeds": [{
            "title": "",
            "color": 2078513,
            "description": "",
            "timestamp": null,
            "author": { "name": 'Thế Vận Hội Volleyball' },
            "image": {},
            "thumbnail": {},
            "footer": {
                "text": `HBReplay-${RecSistem.getCustomDate()}`,
                "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ORCID_iD.svg/2048px-ORCID_iD.svg.png"
            },
            "fields": [
            { "name": "🔴", "value": `${red.join("\n")}\n**Bàn Thắng**\n${scores.red}`, "inline": true },
            { "name": "🔵", "value": `${blue.join("\n")}\n**Bàn Thắng**\n${scores.blue}`, "inline": true },
            { "name": "Thời Gian Trận Đấu", "value": gameTime+ 's'},
        // { "name": "Thời Gian Tối Đa", "value": RecSistem.getScoresTime(scores.timeLimit) },
        // { "name": "Bàn Thắng Tối Đa", "value": scores.scoreLimit }
            ]
        }],
        "components": []
    };
    return params;
}
};

// send chat to discord // 
var discord_hook = ""
function sendAnnouncementToDiscord(message) {
discord_hook = "https://discord.com/api/webhooks/1125045176176496751/KoJdiDkOUD647kjHAMMSzGGpt1DKiB2nXx0urCYPERWBG3G5eXXyUeWaDI288NfRAn5c";

var request = new XMLHttpRequest();
request.open("POST", discord_hook);

request.setRequestHeader('Content-type', 'application/json');

var chat_params = {
avatar_url: 'https://e7.pngegg.com/pngimages/611/517/png-clipart-computer-icons-online-chat-voice-chat-in-online-gaming-livechat-take-a-message-miscellaneous-blue-thumbnail.png',
username: 'Haxball Chat Room',
content: message
};	

request.send(JSON.stringify(chat_params));
}

// send auth && conn to discord

var auth_hook = "https://discord.com/api/webhooks/1126017876395044955/_seP8s15S9oMTEO9jVXqywL_OXhsJuPgGnH261sHLMkrXCW09JZnUCeTerSKF5yNa4ZM"
function sendAuthToDiscord(player) {
// auth_hook = "https://discord.com/api/webhooks/1125045176176496751/KoJdiDkOUD647kjHAMMSzGGpt1DKiB2nXx0urCYPERWBG3G5eXXyUeWaDI288NfRAn5c";
var request = new XMLHttpRequest();
request.open("POST", auth_hook);

request.setRequestHeader('Content-type', 'application/json');

let params = {
	"username": "Statistics TVH Volleyball | Room: " + (room_type == 1 ? "Volley 3D" : "Footvolley"),
	"avatar_url": "https://cdn4.iconfinder.com/data/icons/sports-fitness-line-color-vol-5/52/point__score__report__whiteboard__scoreboard__match__statistics-512.png",
	"content": "",
	"embeds": [{
		"title": "",
		"color": 2078513,
		"description": "",
		"timestamp": null,
		"author": {},
		"image": {},
		"thumbnail": {},
		"footer": {
			"text": getDateNow(),
		},
		"fields": [
			{ "name": "", "value": "Room Link: " + roomLink , "inline": false },
			{ "name": player.name, "value":  "``` Auth: " + getAuth(player) + "\n Conn: " + getConn(player) + "```", "inline": true },
		]
	}],
	"components": []
};

request.send(JSON.stringify(params));
}

function randBallColor() {
    var listColor = ["ff9768","507af8","0b421a","a2c4c9","c78d71","91146e","5ec8d8","e9a296","937342",
"386e6b","95e1e9","aa8a00","ffd700","fdd298","defcba","cbadef","ff9768","abcfed","1b7e48","d0e0e3","2676bd","000000","ffffff","999999","03ffd4"];
    let randNumber = getRandomInt(listColor.length-1);
    let res = "0x"+ listColor[randNumber];
    room.setDiscProperties(0,{color: res});
}

function randBallRadius() {
    let randNumber = RandRangeInt(1,15);
    room.setDiscProperties(0,{radius: randNumber});
}

function randPlayerRadius(player) {
    let randNumber = RandRangeInt(1,50);
    room.setPlayerDiscProperties(player.id, {radius: randNumber});
}

function random_uni() {
    if (rand_uni == true) {
        let rand = getRandomInt(15)
            switch(rand) {
            case 0:
                room.setTeamColors(1,5,0xFFFFFF,[0x6BBABF,0x2F4E7D,0x6BBABF])
                break;
            case 1:
                room.setTeamColors(1,40,0x000000,[0xFF9F40,0xFFD154,0xFF9F40])
                break;
            case 2:
                room.setTeamColors(1,60,0x000000,[0x9BFF7D,0x60CC50,0x9BFF7D])
                break;
            case 3:
                room.setTeamColors(1,0 ,0xFFFFFF ,[0xFF0000 ,0x000000  ,0xFF0000 ])
                break;
            case 4:
                room.setTeamColors(1,0,0xFFFFFF ,[0xFF0000 ,0xC40000,0x8F0000])
                break;
            case 5:
                room.setTeamColors(1,180 ,0xFFFFFF ,[0x003F70  ,0xFF010C  ,0x003F70  ])
                break;
            case 6:
                room.setTeamColors(1,180,0x000000  ,[0xFFFFFF  ,0xF7B3FF ,0xFFFFFF ])
                break;
            case 7:
                room.setTeamColors(1,0 ,0xFFEA29  ,[0x1100FF   ,0x1100FF   ,0xFF0000  ])
                break;
            case 8:
                room.setTeamColors(1,0 , 0xFFFFFF ,[0x455E5D,0xC6D881   ,0xA3C2C1  ])
                break;
            case 9:
                room.setTeamColors(1,0 , 0x000000 ,[0xFDFF29  ])
                break;
            case 10:
                room.setTeamColors(1,0 , 0xFFFFFF ,[0x333333  ])
                break;
            case 11:
                room.setTeamColors(1,0 , 0x000000 ,[0x455E5D,0x000000,0x455E5D  ])
                break;
            case 12:
                room.setTeamColors(1,0 , 0xFFFFFF ,[0xE7A3FF,0x8C05FF,0xE7A3FF  ])
                break;
            case 13:
                room.setTeamColors(1,0 , 0xFFFFFF ,[0x8C05FF,0xE7A3FF,0x8C05FF  ])
                break;
            case 14:
                room.setTeamColors(1,0 , 0x000000 ,[0x089AFF,0x05FF84,0x1BC2AD  ])
                break;
            case 15:
                room.setTeamColors(1,0 , 0x000000 ,[0xD3ABFF,0xE7FFB0,0x7CC27F  ])
                break;
            case 16:
                room.setTeamColors(1, 90, 0xFFFFFF, [0xFF0000, 0x7A0000, 0x470000])
                break;
            case 17:
                room.setTeamColors(1, 138, 0xFFFFFF, [0xFF0000])
                break;
            case 18:
                room.setTeamColors(1, 138, 0xFFFFFF, [0xFF0000, 0x1D09B2])
                break;
            case 19:
                room.setTeamColors(1, 244, 0xFFFFFF, [0xF5FF3E, 0xB2B2B2])
                break;
            case 20:
                room.setTeamColors(1, 244, 0x000000, [0xFFFFFF])
                break;
        }
            rand = getRandomInt(20)
            switch(rand) {
            case 0:
                room.setTeamColors(2,-25,0xFFFFFF,[0xE8598D,0x9C2862,0xE8598D])
                break;
            case 1:
                room.setTeamColors(2,-40,0x000000,[0xF0EB54,0x9C955A,0xF0EB54])
                break;
            case 2:
                room.setTeamColors(2,60,0xFFFFFF,[0x18EDD0,0x109C89,0x18EDD0])
                break;
            case 3:
                room.setTeamColors(2,0,0xFFFFFF ,[0x002AFF ,0x000000 ,0x001AFF ])
                break;
            case 4:
                room.setTeamColors(2,0,0xFFFFFF,[0x004D99 ,0x004077 ,0x004785 ])
                break;
            case 5:
                room.setTeamColors(2,0,0xFF0000 ,[0x0569FF ,0xFFFFFF ,0x004DFF])
                break;
            case 6:
                room.setTeamColors(2,0,0x858585   ,[0xFFFFFF     ,0x000000  ,0xFFFFFF  ])
                break;
            case 7:
                room.setTeamColors(2,45  ,0xA3932E   ,[0xFFFFFF ])
                break;
            case 8:
                room.setTeamColors(2,0 , 0xFFFFFF ,[0xC2C983,0x66D8A4   ,0x9DC255  ])
                break;
            case 9:
                room.setTeamColors(2,0 , 0x000000 ,[0xC9758E,0xFFFFFF   ,0xC26F87  ])
                break;
            case 10:
                room.setTeamColors(2,0 , 0x000000 ,[0x44E390  ])
                break;
            case 11:
                room.setTeamColors(2,0 , 0x000000 ,[0xA57BE3,0xDCDE2A  ])
                break;
            case 12:
                room.setTeamColors(2,0 , 0x000000 ,[0xE3743B,0xE7FFB0,0xE3743B	  ])
                break;
            case 13:
                room.setTeamColors(2,0 , 0x000000 ,[0xE356B3,0xB500FF  ])
                break;
            case 14:
                room.setTeamColors(2,0 , 0xFFFFFF ,[0xE3743B,0xE3070C,0xE3743B  ])
                break;
            case 15:
                room.setTeamColors(2,0 , 0xFF007D ,[0xFFFFFF,0x000000  ])
                break;
            case 16:
                room.setTeamColors(2, 90, 0xFFFFFF, [0x320EFF, 0x170FB2, 0x000847])
                break;
            case 17:
                room.setTeamColors(2, 53, 0xFFFFFF, [0x10FFFB, 0x1139B2, 0x25027F])
                break;
            case 18:
                room.setTeamColors(2, 146, 0xFFFFFF, [0xE6FF2A, 0xFF0101, 0x16117F])
                break;
            case 19:
                room.setTeamColors(2, 138, 0xFFFFFF, [0xCBCBCB, 0x37373C, 0x000000])
                break;
            case 20:
                room.setTeamColors(2, 138, 0xFFFFFF, [0x7E8412, 0xACB248, 0xFFFB1A])
                break;
        }	
    }
}

/* PASSBOT MODE AND SPIKE MODE */

function SpikeBot() {
    let rand_xspeed = RandRangeInt(1,10);
    let rand_yspeed = RandRangeInt(1,4);
    let pos_x = RandRangeInt(-10,10);
    let pos_y = RandRangeInt(-150,-140);
    room.setDiscProperties(0,{x: pos_x, y: pos_y, xspeed: rand_xspeed, yspeed: rand_yspeed});
}

var rand_xspeed_list_red = [2.1, 2.2, 2.3, 2.4, 2.5]
var rand_xspeed_list_blue = [-2.1, -2.2, -2.3, -2.4, -2.5]

function PassBot() {
    if (passbot_mode == 1) {
        let rand_xspeed = 2.6;
        let rand_yspeed = -11.895;
        let pos_x = -200;
        let pos_y = 185;
           /*  console.log(pos_y)
            console.log(pos_x)
            console.log(rand_xspeed)
            console.log(rand_yspeed)
            console.log('___________________________') */
        room.setDiscProperties(0,{x: pos_x, y: pos_y, xspeed: rand_xspeed, yspeed: rand_yspeed});
    }
    else if (passbot_mode == 2) {
        let rand_xspeed = rand_xspeed_list_blue[getRandomInt(rand_xspeed_list_blue.length-1)];
        let rand_yspeed = RandRangeInt(-13,-11);
        let pos_x = RandRangeInt(240,250);
        let pos_y = RandRangeInt(150,160);
        room.setDiscProperties(0,{x: pos_x, y: pos_y, xspeed: rand_xspeed, yspeed: rand_yspeed});
    }
}

/* function PassBot() {
    if (passbot_mode == 1) {
        let rand_xspeed = rand_xspeed_list_red[getRandomInt(rand_xspeed_list_red.length-1)];
        let rand_yspeed = RandRangeInt(-13,-11);
        let pos_x = RandRangeInt(-250,-240);
        let pos_y = RandRangeInt(150,160);
        room.setDiscProperties(0,{x: pos_x, y: pos_y, xspeed: rand_xspeed, yspeed: rand_yspeed});
    }
    else if (passbot_mode == 2) {
        let rand_xspeed = rand_xspeed_list_blue[getRandomInt(rand_xspeed_list_blue.length-1)];
        let rand_yspeed = RandRangeInt(-13,-11);
        let pos_x = RandRangeInt(240,250);
        let pos_y = RandRangeInt(150,160);
        room.setDiscProperties(0,{x: pos_x, y: pos_y, xspeed: rand_xspeed, yspeed: rand_yspeed});
    }
}
 */
function setPositionPassBot() {
    var pos_x = 0;
    var pos_y = 0;
    if (passbot_mode == 1) {
        pos_x = -190;
        pos_y = -40;
    }
    else if (passbot_mode == 2) {
        pos_x = 190;
        pos_y = -40;
    }
    var players = room.getPlayerList().filter((player) => player.team == passbot_mode);
			players.forEach(function(player) {			
				room.setPlayerDiscProperties(player.id, {x: pos_x, y: pos_y});
                pos_x , pos_y += 5;
			});
    createBlock();
}

function loop_passbot() {
    if (passbot_mode != 0 ) {
        announce(passbot_mode);
        setPositionPassBot();
        sleep(2000).then(() => {
           PassBot();    
        });
    }
}

function print(x) {
	console.log(typeof room.getDiscProperties(x).x);
}

function move(disc,pos_x,pos_y) {
    room.setDiscProperties(disc,{x: pos_x, y: pos_y})
}

var randBlockCount = 0;
var pos_x = [];
var pos_y = [];

function recogBlock() { 
    for (var i = 19; i < 29; i++) {
       pos_x[i] = (room.getDiscProperties(i).x)
       pos_y[i] = (room.getDiscProperties(i).y)
    }
}

function createBlock() {
    randBlockCount = RandRangeInt(6,11)
    if (passbot_mode == 1) {
        let x_pos = RandRangeInt(4,6)
        let y_pos = RandRangeInt(-170,-165);
        for (var i = 19; i < 19 + randBlockCount; i++) {
            room.setDiscProperties(i,{x: x_pos, y: y_pos})
            y_pos += 22
        }
    }
    else if (passbot_mode == 2) {
        let x_pos = RandRangeInt(-6,-4)
        let y_pos = RandRangeInt(-170,-165);
        for (var i = 19; i < 19 + randBlockCount; i++) {
            room.setDiscProperties(i,{x: x_pos, y: y_pos})
            y_pos += 22
        }
    }
}

/* function removeBlock() {
    for (var i = 19; i < 29; i++) {
        room.setDiscProperties(i,{x: pos_x[i], y: pos_y[i]})
    }
}
 */
function JumpSpinServe() {
    if (serve_team == 1) {
        let x_gra = 0.002;
        let x_pos = -350;
        let y_pos = 200;
        let x_speed = 1.2;
        let y_speed = -16;
        room.setDiscProperties(0,{x:x_pos, y: y_pos, xgravity: x_gra, xspeed: x_speed, yspeed: y_speed})
    }
    else if (serve_team == 2) {
        let x_gra = -0.002;
        let x_pos = 350;
        let y_pos = 200;
        let x_speed = -1.2;
        let y_speed = -16;
        room.setDiscProperties(0,{x:x_pos, y: y_pos, xgravity: x_gra, xspeed: x_speed, yspeed: y_speed})
    }
    serve_team = 0;
}

function JumpFloatServe() {
    if (serve_team == 1) {
        let x_gra = -0.0001;
        let x_pos = -350;
        let y_pos = 200;
        let x_speed = 1.2;
        let y_speed = -13.5;
        room.setDiscProperties(0,{x:x_pos, y: y_pos, xgravity: x_gra, xspeed: x_speed, yspeed: y_speed})
    }
    else if (serve_team == 2) {
        let x_gra = 0.0001;
        let x_pos = 350;
        let y_pos = 200;
        let x_speed = -1.2;
        let y_speed = -13.5;
        room.setDiscProperties(0,{x:x_pos, y: y_pos, xgravity: x_gra, xspeed: x_speed, yspeed: y_speed})
    }
    serve_team = 0;
}

function FloatServe() {
    if (serve_team == 1) {
        let x_gra = -0.0000001;
        let x_pos = -350;
        let y_pos = 200;
        let x_speed = 1.2;
        let y_speed = -11;
        room.setDiscProperties(0,{x:x_pos, y: y_pos, xgravity: x_gra, xspeed: x_speed, yspeed: y_speed})
    }
    else if (serve_team == 2) {
        let x_gra = 0.0000001;
        let x_pos = 350;
        let y_pos = 200;
        let x_speed = -1.2;
        let y_speed = -11;
        room.setDiscProperties(0,{x:x_pos, y: y_pos, xgravity: x_gra, xspeed: x_speed, yspeed: y_speed})
    }
    serve_team = 0;
}

function XServe() {
    if (serve_team == 1) {
        let x_gra = 0.02;
        let y_gra = 0.05;
        let x_pos = -400;
        let y_pos = 200;
        let x_speed = 0;
        let y_speed = -15;
        room.setDiscProperties(0,{x:x_pos, y: y_pos, xgravity: x_gra, ygravity: y_gra , xspeed: x_speed, yspeed: y_speed, invMass : 1.1})
    }
    else if (serve_team == 2) {
        let x_gra = -0.02;
        let y_gra = 0.04;
        let x_pos = 400;
        let y_pos = 200;
        let x_speed = 0;
        let y_speed = -15;
        room.setDiscProperties(0,{x:x_pos, y: y_pos, xgravity: x_gra, ygravity: y_gra , xspeed: x_speed, yspeed: y_speed, invMass : 1.1})
    }
    serve_team = 0;
}

function getballstats() {
    let x_gra = room.getDiscProperties(0).xgravity;
    let y_gra = room.getDiscProperties(0).ygravity;
    let x_pos = room.getDiscProperties(0).x;
    let y_pos = room.getDiscProperties(0).y;
    let x_speed = room.getDiscProperties(0).xspeed;
    let y_speed = room.getDiscProperties(0).yspeed;
    let invMass_ = room.getDiscProperties(0).invMass;
    console.log(x_gra, y_gra, x_speed, y_speed, invMass_);
}

function console_pos(player) {
    let pos_x = room.getDiscProperties(player.id).x;
    let pos_y = room.getDiscProperties(player.id).y;
    console.log(pos_x + ','+ pos_y)
    whisper(pos_x + ','+ pos_y, player.id)
}

function rec_list_reset() {
    if (teamR.length == 2 && teamB.length == 2) {
        for (let i = 0; i < teamR.length; i++) {
            rec_list[teamR[0].name] = 0;
        }
    }
}

function changeBallColor() {
    if (totalTouches == 2) {
        room.setDiscProperties(0, {color: "0x56ff00"})
       /*  if (lastPlayersTouched[0] != null && lastPlayersTouched[1] != null && lastPlayersTouched[0].team == lastPlayersTouched[1].team) {
            rec_list[lastPlayersTouched[1].name]++;
            if (dig) {
                announce_noloa("Một pha cứu bóng tuyệt vời của " + lastPlayersTouched[1].name );
                storage(lastPlayersTouched[1].name,"dig",1);
            }
            if (rec_list[lastPlayersTouched[1].name] == 3) {
                storage(lastPlayersTouched[1].name,"receive",1);
                rec_list[lastPlayersTouched[1].name] = 0;
            }
        } */
       if (player_served != null && lastPlayersTouched[0].team != player_served.team) player_served = null;
    }
    else if (totalTouches == 3) {
        room.setDiscProperties(0, {color: "0x00eaff"})
    }
}

function blockGoalKick() {
	var players = room.getPlayerList().filter((player) => player.team != 0);
	    if (serve_team == 2) {
            players.forEach(function(player) {
                if (player.team == 1) {
                    if (room.getPlayerDiscProperties(player.id).cGroup != 268435462) {
                        room.setPlayerDiscProperties(player.id, {cGroup: 268435462});
                    }
                }
            });
        }
        else if (serve_team == 1) {
            players.forEach(function(player) {
                if (player.team == 2) {
                    if (room.getPlayerDiscProperties(player.id).cGroup != 268435462) {
                        room.setPlayerDiscProperties(player.id, {cGroup: 268435462});
                    }
                }
            });
        }
}



function removeBlock() {
	var players = room.getPlayerList().filter((player) => player.team != 0);
	players.forEach(function(player) {
		if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
			room.setPlayerDiscProperties(player.id, {cGroup: 2});
		}
		if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 4) {
			room.setPlayerDiscProperties(player.id, {cGroup: 4});
		}
	});	
}
/* BALANCE & CHOOSE */

var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;
var afkLimit = 12;
var maxTeamSize = 2;
var slowMode = 0;

/* AUXILIARY */
var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;
/* AFK */
var countAFK = false;

function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
    if (countAFK && (teamR.length + teamB.length) > 1) {
        for (var i = 0; i < teamR.length ; i++) {
            setActivity(teamR[i], getActivity(teamR[i]) + 1);
        }
        for (var i = 0; i < teamB.length ; i++) {
            setActivity(teamB[i], getActivity(teamB[i]) + 1);
        }
    }
    for (var i = 0; i < extendedP.length ; i++) {
        if (extendedP[i][eP.ACT] == 60 * (2/3 * afkLimit)) {
            whisper("⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", nếu bạn không di chuyển trong " + Math.floor(afkLimit / 3) + " giây nữa, bạn sẽ được đưa ra dự bị!", extendedP[i][eP.ID], 0xffffff, "bold", 2);
            // console.log(room.getPlayer(extendedP[i][eP.ID]).team, serve_team);
        }
        if (extendedP[i][eP.ACT] >= 60 * afkLimit && room.getPlayer(extendedP[i][eP.ID]).team == serve_team) {
            extendedP[i][eP.ACT] = 0;
            room.setPlayerTeam(extendedP[i][eP.ID], Team.SPECTATORS);
            let player = room.getPlayer(extendedP[i][eP.ID]);
            setAFK(player, !getAFK(player));
            announce(player.name + " đã được thêm vào danh sách AFK!", null, 0xF1948A, "italic");
            room.reorderPlayers([extendedP[i][eP.ID]], false);
            updateRoleOnPlayerOut();
        }
    }
}

function getAuth(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function getConn(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.CONN] : null;
}

function getAFK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function arrangeSpecList() {
    var specs = room.getPlayerList().filter((player) => player.team == 0);
    // console.log(specs)
    let temp = [];
    for (let i = 0; i < specs.length; i++) {
        if (specs[i].id != 0) temp.push(specs[i].id)
        else break;
    }
    // console.log(specs);
    var arr = [specs[specs.length-1].id];
    room.reorderPlayers(arr, true);
    room.reorderPlayers(temp, true);
}

function backFromAFK(player_id) {
    var specs = room.getPlayerList().filter((player) => player.team == 0);
    // console.log(specs)
    let temp = [];
    for (let i = 0; i < specs.length; i++) {
        if (specs[i].id != 0) temp.push(specs[i].id)
        else break;
    }
    // console.log(specs);
    room.reorderPlayers([player_id], true);
    room.reorderPlayers(temp, true);
}

function afkToLast() {
    var afk = room.getPlayerList().filter((player) => player.id != 0 && getAFK(player) && player.team == 0 );
    var arr = [];
    afk.forEach(function(player) {
        arr.push(player.id);
    });
    room.reorderPlayers(arr,false);
}

function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        sleep(100).then(() => {
            array.splice(index, 1);
        });
    }
}

function centerText(string) {
    var space = parseInt((80 - string.length) * 0.8, 10);
    if (space <= 0) {
        return '';
    }
    return ' '.repeat(space) + string + ' '.repeat(space);
}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function updateRoleOnPlayerIn() {
    updateTeams();
    if (inChooseMode) {
        getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    }
    if (!on_match && !call) balanceTeams();
    else call = true;
}
var game;
//maxteamsize = 2;
function updateRoleOnPlayerOut() {
    updateTeams();
    if (room.getScores() != null) {
        // Out do thua quá nhiều
        var scores = room.getScores();
        if (players.length >= 2 * maxTeamSize && scores.time >= (5 / 6) * game.scores.timeLimit && teamR.length != teamB.length) {
            if (teamR.length < teamB.length) {
                if (scores.blue - scores.red == 2) {
                    endGame(Team.BLUE);
                    announce("Đội RED 🔴 đã thoát trận khi đang bị dẫn điểm quá xa nên trận đấu kết thúc", null, 0xf85c5c, "normal");
                    setTimeout(() => {
                        room.stopGame();
                    }, 1000);
                    return;
                }
            } else {
                if (scores.red - scores.blue == 2) {
                    endGame(Team.RED);
                    announce("Đội BLUE 🔵 đã thoát trận khi đang bị dẫn điểm quá xa nên trận đấu kết thúc", null, 0x5cb3f8, "normal");
                    setTimeout(() => {
                        room.stopGame();
                    }, 1000);
                    return;
                }
            }
        }
    }
    if (inChooseMode) {
        // không có người thì cho qua red, hơi cần thiết
        if (teamR.length == 0 || teamB.length == 0) {
            teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
            return;
        }
        // chuyển người vào vị trí thiếu nếu cần vừa đủ người trong speclist
        if (Math.abs(teamR.length - teamB.length) == teamS.length) {
            // room.sendChat("Sem alternativas, deixe me lidar com essa situação. ...");
            // room.sendAnnouncement("[Juiz] With no possibility of recruitment, let me decide...", null, 0xc0bdb1, "normal");
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (teamR.length > teamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => {
                        room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    }, 5 * i);
                }
            } else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => {
                        room.setPlayerTeam(teamS[0].id, Team.RED);
                    }, 5 * i);
                }
            }
            return;
        }
        if (room.getScores() == null) {
            if (streak == 0 && Math.abs(teamR.length - teamB.length) == 1) { // if someone leaves an already formed team, thus leaving 2 players, put the last one chosen back to the spectators so that it is fair
              // room.sendChat("🤖 Equilibrando equipes... 🤖");
                announce("Cân bằng đội...",null, 0xF1948A, "normal");
                teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
            }
        }
        if (teamR.length == teamB.length && teamS.length < 2) {
            deactivateChooseMode();
            resumeGame();
            return;
        }
        capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    }
    if (!on_match && !call) balanceTeams();
    else call = true;
}

function balanceTeams() {
    if (!inChooseMode) {
        if (players.length == 1 && teamR.length == 0) { // 1 player
            // thêm 3 map chesse làm
            quickRestart();
            room.setPlayerTeam(players[0].id, Team.RED);
        } else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) { // specific players provide necessary players
            const n = Math.abs(teamR.length - teamB.length);
            if (teamR.length > teamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.BLUE);
                }
            } else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.RED);
                }
            }
        } else if (Math.abs(teamR.length - teamB.length) > teamS.length) { // there are not enough players
            const n = Math.abs(teamR.length - teamB.length);
            if (players.length == 1) {
                quickRestart();
                room.setPlayerTeam(players[0].id, Team.RED);
                return;
            } else if (players.length == 4) {
                quickRestart();
            }
           /* cần cho phát triển database 
            if (players.length == maxTeamSize * 2 - 1) {
                allReds = [];
                allBlues = [];
            } */
            if (teamR.length > teamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
                }
            } else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
                }
            }
        } else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) { // recruitment mode
            room.pauseGame(true);
            activateChooseMode();
            choosePlayer();
        } else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) { // 1 in red, 1 in blue and 2 or more specifications
            if (teamR.length == 1) {
                room.pauseGame(true);
                activateChooseMode();
                choosePlayer();
            }
            // topBtn();
        }
    }
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    if (teamR.length <= teamB.length && teamR.length != 0) {
        whisper("Nhập số trong danh sách sau để pick.", teamR[0].id, 0x5db5db, "normal",2);
        announce(teamR[0].name + " sẽ pick", null, 0x5db5db);
        timeOutCap = setTimeout(function(player) {
            announce("Nhanh lên, @" + player.name + ", chỉ còn " + Number.parseInt(chooseTime / 2) + " giây để pick!", null, 0xf2a000, "normal", 2);
            timeOutCap = setTimeout(function(player) {
                room.kickPlayer(player.id, "Không chọn đúng thời gian", false);
            }, chooseTime * 500, teamR[0]);
        }, chooseTime * 1000, teamR[0]);
    } else if (teamB.length < teamR.length && teamB.length != 0) {
        room.sendAnnouncement("Nhập số trong danh sách sau để pick.", teamB[0].id, 0x5db5db, "normal");
        announce(teamB[0].name + " sẽ pick", null, 0x5db5db );
        timeOutCap = setTimeout(function(player) {
            announce("Nhanh lên, @" + player.name + ", chỉ còn " + Number.parseInt(chooseTime / 2) + " giây để pick!", null, 0xf2a000, "normal", 2);
            timeOutCap = setTimeout(function(player) {
                room.kickPlayer(player.id, "Không chọn đúng thời gian", false);
            }, chooseTime * 500, teamB[0]);
        }, chooseTime * 1000, teamB[0]);
    }
    if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}

function getSpecList(player) {
    var cstm = "Players: Random[0], ";
    for (var i = 0; i < teamS.length; i++) {
        if (140 - cstm.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
            room.sendChat(cstm, player.id);
            cstm = "... ";
        }
        cstm += teamS[i].name + "[" + (i + 1) + "], ";
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    announce(cstm, null, 0xE59866, "normal");
}

function quickRestart() {
    room.stopGame();
    setTimeout(() => {
        room.startGame();
    }, 2000);
}

function resumeGame() {
    setTimeout(() => {
        room.startGame();
    }, 2000);
    setTimeout(() => {
        room.pauseGame(false);
    }, 1000);
}

function activateChooseMode() {
    inChooseMode = true;
    slowMode = 2;
    // room.sendAnnouncement("Recruitment mode activated!", null, 0x55bae2, "normal");
}

function deactivateChooseMode() {
    inChooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != 0) {
        slowMode = 0;
        // room.sendAnnouncement("Recruitment mode closed.", null, 0xf2a000, "normal");
    }
    redCaptainChoice = "";
    blueCaptainChoice = "";
}

function topBtn() {
    if (teamS.length == 0) {
        return;
    } else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.RED);
                room.setPlayerTeam(teamS[1].id, Team.BLUE);
            }
            return;
        } else if (teamR.length < teamB.length) {
            room.setPlayerTeam(teamS[0].id, Team.RED);
        } else {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
        }
    }
}

function randomBtn() {
    if (teamS.length == 0) {
        return;
    } else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                var r = getRandomInt(teamS.length);
                room.setPlayerTeam(teamS[r].id, Team.RED);
                teamS = teamS.filter((spec) => spec.id != teamS[r].id);
                room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
            }
            return;
        } else if (teamR.length < teamB.length) {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
        } else {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
        }
    }
}

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => {
        resettingTeams = false;
    }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => {
        resettingTeams = false;
    }, 100);
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetBtn() {
    resettingTeams = true;
    setTimeout(() => {
        resettingTeams = false;
    }, 100);
    if (teamR.length <= teamB.length) {
        for (var i = 0; i < teamR.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamR.length; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
        }
    } else {
        for (var i = 0; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamB.length; i < teamR.length; i++) {
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
    }
}

function blueToRedBtn() {
    resettingTeams = true;
    setTimeout(() => {
        resettingTeams = false;
    }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[i].id, Team.RED);
    }
}

function checkTime() {
    const scores = room.getScores();
    game.scores = scores;
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (scores.red != scores.blue) {
            if (checkTimeVariable == false) {
                checkTimeVariable = true;
                setTimeout(() => {
                    checkTimeVariable = false;
                }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                setTimeout(() => {
                    room.stopGame();
                }, 2000);
            }
            return;
        }
        goldenGoal = true;
       // room.sendAnnouncement("⚽ Gol de Gold!", null, 0xF1AF09);
        room.sendAnnouncement(centerText("PROLONGATION"), null, Cor.Amarelo, "bold");
        room.sendAnnouncement(centerText("I'll give " + drawTimeLimit * 60 + " seconds!"), null, Cor.White, "normal");
        room.sendAnnouncement(centerText("⚽ First goal wins! ⚽"), null, Cor.White, "normal");
    }
    if (scores.time > scores.timeLimit + drawTimeLimit * 60 - 15 && scores.time <= scores.timeLimit + drawTimeLimit * 60) {
        if (checkTimeVariable == false && announced == false) {
            checkTimeVariable = true;
            announced = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            room.sendAnnouncement(centerText("⌛ 15 seconds to a tie!"), null, Cor.Amarelo, "bold");
        }
    }
    if (scores.time > (scores.timeLimit + drawTimeLimit * 60)) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
};

function endGame(winner) { // lida com o final de um jogo: nenhuma função stopGame dentro
    players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
    const scores = room.getScores();
    game.scores = scores;
    lastWinner = winner;
    endGameVariable = true;
    if (winner == Team.RED) {
        streak++;
        room.sendAnnouncement("🏆 Đội RED 🔴 đã thắng! | Win Streak(s): " + streak + " 🏆", null, 0xf85c5c);
        if (teamR.length > 0 && teamB.length > 0) {
            for (let i = 0; i < teamR.length; i++) {
                let name = teamR[teamR.length - i - 1]
                storage(name, "games", 1);
                storage(name, "wins", 1);
                storage(name, "money", 10000);
            }
            for (let i = 0; i < teamB.length; i++) {
                storage(teamB[teamB.length - i - 1].name, "games", 1);
                storage(teamB[teamB.length - i - 1].name, "lose", 1);
            }
        }
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement("🏆 Đội BLUE 🔵 đã thắng! | Win streak(s): " + streak + " 🏆", null, 0x5cb3f8);
        if (teamR.length > 0 && teamB.length > 0) {
            for (let i = 0; i < teamR.length; i++) {
                storage(teamR[teamR.length - i - 1].name, "games", 1);
                storage(teamR[teamR.length - i - 1].name, "lose", 1);
                
            }
            for (let i = 0; i < teamB.length; i++) {
                let name = teamB[teamB.length - i - 1].name;
                storage(name, "games", 1);
                storage(name, "wins", 1);
                storage(name, "money", 10000);
            }
        }
    }
    else {
        streak = 0;
        room.sendAnnouncement("💤 Limit reached");
    }
    if (room_type <=2) RecSistem.sendDiscordWebhook(scores);
    //sendDiscordWebhook(scores);
    //room.sendAnnouncement("A partida foi gravada e enviada em nosso discord. ID: " + `${getDate()}`, null, Cor.Amrelo, Negrito);
    
}

/* RANKING FUNCTIONS */

function rankingCalc(player){
	var playerData = localStorage.getItem(player.name);
    if (playerData) {
        var data = JSON.parse(localStorage.getItem(player.name));
        var point =  Number(data.goals) * 2 + Number( data.assists) * 2 +
			Number(data.wins) * 3  +Number(data.ace) * 1 + Number(data.monster_block) * 3 + 
            Number(data.no_touch_ace)*2 + Number(data.receive) + Number(data.block_out)*2
            + Number(data.dig)*4 - Number(data.lose) * 6 - Number(data.ownGoals) * 2;
            return point
    }
}

function bxh() {
    var data = JSON.parse(localStorage.getItem("list_player"));
    a = data
    for (let  i = 0; i < a.length - 1; i++) {
        for (let j = i + 1;  j < a.length; j++) {
            var playerData = localStorage.getItem(a[i])
            var playerData1 = localStorage.getItem(a[j])
            if (playerData && playerData1 && getData(a[i], "rankpoint") != null &&  getData(a[j], "rankpoint") != null && getData(a[i], "rankpoint") < getData(a[j], "rankpoint")) {
                let tam = a[i]
                a[i] = a[j]
                a[j] = tam
            }
        }
    }
    s = ''
    let i = 0;
    let j = -1;
    while (i < 10 && j <= a.length) {
        j++;
        var playerData = localStorage.getItem(a[j])
        if (playerData && getData(a[j], "rankpoint") != null)  {
            s += (i + 1) +". " + a[j] + ": " + getData(a[j], "rankpoint") + "\n";
            i += 1
        }

    }
    announce(s);
}

function ranking(player){ // 
    var playerData = localStorage.getItem(player.name);
	if (playerData) {
        var data = JSON.parse(localStorage.getItem(player.name));
	// 
	score = rankingCalc(player)
	data.rankpoint = score
		// Goal: 5 pts, assist: 3 pts, win: 3 pts, cs: 6 pts, lose: -7 pts, og: -4 pts
        //Goal: 2 pts, assist: 1 pts, win: 3 pts, ace: 1 points, monster_block: 2 pts, lose: -6 pts, og: -2pts
        // block_out: 2 pts, receive: 1 pts, dig: 4pts, no_touch_ace: 2 points
		if (score < 100 && data.level != '🟤 Đồng') { 
			data.level = '🟤 Đồng';
			whisper("Bậc sao của bạn đã được cập nhật là: 🟤 Đồng ", player.id, 0xDCBE26, "bold", 0);
		}  
		else if (score >= 100 && score < 220 && data.level != '⚪ Bạc'){
			data.level = '⚪ Bạc'
			whisper("Bậc sao của bạn đã được cập nhật là: ⚪ Bạc ", player.id, 0xDCBE26, "bold", 0);
		}
		else if (score >= 220 && score < 430 && data.level != '🟡 Vàng'){
			data.level = '🟡 Vàng' 
			whisper("Bậc sao của bạn đã được cập nhật là: 🟡 Vàng", player.id, 0xDCBE26, "bold", 0);
		}
		else if (score >= 430 && score < 920 && data.level != '🔵 Bạch Kim'){
			data.level = '🔵 Bạch Kim'
			whisper("Bậc sao của bạn đã được cập nhật là: 🔵 Bạch Kim ", player.id, 0xDCBE26, "bold", 0);
		}
		else if (score >= 920 && score < 1700 && data.level != '⭐ Tinh Anh'){
			data.level = '⭐ Tinh Anh'
			whisper("Bậc sao của bạn đã được cập nhật là: ⭐ Tinh Anh ", player.id, 0xDCBE26, "bold", 0);
		}
		else if (score >= 1700  && data.level != '✨ Cao Thủ'){
			data.level = '✨ Cao Thủ'
			whisper("Bậc sao của bạn đã được cập nhật là: ✨ Cao Thủ ", player.id, 0xDCBE26, "bold", 0);
		}
	localStorage.setItem(player.name, JSON.stringify(data));
	return score;
	}
}

function sendStats(player){
    var playerData = localStorage.getItem(player.name)
	if (playerData && player != undefined) {
    var data = JSON.parse(localStorage.getItem(player.name));
	data.last_entergame =  Date.now()
	var mili = Number(data.last_entergame) - Number(data.first_entergame)
	data.playtime = mili
	data.winrate = (Number(data.wins) / (Number(data.wins) + Number(data.lose)) ) * 100
	
	whisper("-------------------- Thông Tin Người Chơi --------------------", player.id,0xcc9900,'bold');
	whisper("Ghi bàn: " + data.goals + "| Hỗ trợ: " + data.assists, player.id,0xcc9900,'bold');
    whisper("Phản Lưới: " + data.ownGoals, player.id,0xcc9900,'bold');
    whisper("Ace : " + data.ace + " | Monster Block: " + data.monster_block, player.id,0xcc9900,'bold');
    whisper("No Touch Ace : " + data.no_touch_ace + " | Block Out: " + data.block_out, player.id,0xcc9900,'bold');
    whisper("Receive : " + data.receive+ " | Dig: " + data.dig, player.id,0xcc9900,'bold');
	whisper("Thắng: " + data.wins + "| Thua: " + data.lose, player.id,0xcc9900,'bold');
	whisper("Tổng giờ chơi: " + convertMsToHM(data.playtime ), player.id,0xcc9900,'bold');
	whisper("Tỉ lệ thắng: " + Math.round(data.winrate * 100) / 100  + '%', player.id,0xcc9900,'bold');
	whisper("Số tiền hiện có: " + numberWithCommas(data.money) + 'đ', player.id,0xcc9900,'bold');
	whisper("-------------------------------------------------------------", player.id,0xcc9900,'bold');
	localStorage.setItem(player.name, JSON.stringify(data));
	}
}

function updatePlayer(key, player_name) {
    var data = JSON.parse(localStorage.getItem(player_name));
    localStorage.setItem(player_name, JSON.stringify(data));
}

function getData(target_name, key) {
    if (isString(key)) { 
        var key_do = key; 
        var data = JSON.parse(localStorage.getItem(target_name));
        if (data[key_do] != undefined) {
            return data[key_do];
        }
    }
}

function storage(player_name, key, value) {
    if (player_name in authList) {
        if (isString(key)) { 
            var key_do = key; 
            if (!isNaN(Number(value))) {
                var value_do = Number(value);
                var data = JSON.parse(localStorage.getItem(player_name));
                if (data[key_do] != undefined) {
                    data[key_do] += value_do;
                    localStorage.setItem(player_name, JSON.stringify(data));
                }
            }
        }
    }
}

function displayHelp(id, selection) { // 
	if (selection == null) {
		whisper("Các lệnh: !cmd,!help,!login [pass], !register [pass], !changepassword [pass],!doimatkhau [matkhau moi]!dangnhap matkhau, !dangky matkhau !rank, !stats, !me,!trogiup, !bb ( vui vẻ ),!ids (xem id người chơi),!rank_help, !chuyentien id [số tiền], !shop", id, null, "small-bold");
	}
}

function displayRankHelp(id, selection) {
    if (selection == null) {
        whisper("Hệ thống tính điểm sẽ được tính như sau: ", id, 0xFFE599, "bold", 0);
        whisper("Goals: 2 điểm, Assists: 1 điểm, Phản lưới: -2 điểm, Thắng: 3 điểm, Thua: -6 điểm\nAce: 1 điểm, No Touch Ace: 2 điểm, Monster Block: 2 điểm, Block Out: 2 điểm\n Receive: 1 điểm, Dig: 4 điểm", id, 0xFFE599, "normal", 0);
        whisper("Goals: 10.000đ, Assists: 10.000đ, Monster Block: 20.0000đ, No Touch Ace: 20.000đ, Block Out: 15.000đ, Ace: 15.000đ", id, 0xFFE599, "normal", 0);
        whisper("Rank: Đồng < 100 điểm, Bạc < 220 điểm, Vàng < 430 , Bạch Kim < 920 , Tinh Anh < 1700, Master > 1700", id, 0xFFE599, "normal", 0);
        whisper("Nhập !rank_help more để biết rõ hơn",id, 0xFFE599, "normal", 0);
    //Goal: 2 pts, assist: 1 pts, win: 3 pts, ace: 1 points, monster_block: 3 pts, lose: -5 pts, og: -1pts
        // block_out: 2 pts, receive: 1 pts, dig: 4pts, no_touch_ace: 2 points
    }
    else if (selection == "more") {
        whisper("1. Goals được tính khi bạn đập bóng đập đất và đội đối thủ không chạm bóng, Assists được tính khi bạn chuyền cho người ghi Goals",id, 0xFFE599, "normal", 0);
        whisper("2. Ace No Touch được tính khi bạn phát bóng ăn điểm trực tiếp và không ai chạm vào bóng, Ace được tính khi bạn phát bóng ăn điểm và đội đối thủ có chạm bóng 1 lần",id, 0xFFE599, "normal", 0);
        whisper("3. Monster Block được tính khi bạn chặn bóng đội thủ và ăn điểm trực tiếp, banh chạm đất sau khi bạn chắn",id, 0xFFE599, "normal", 0);
        whisper("4. Block Out được tính khi bạn đập bóng chạm vào tay chắn đối thủ và ăn điểm trực tiếp",id, 0xFFE599, "normal", 0);
        whisper("5. Receive được tính khi bạn đỡ bóng được 3 lần liên tiếp trong 1 lượt bóng, Dig được tính khi bạn đỡ bóng khi bóng đi với vận tốc cao",id, 0xFFE599, "normal", 0);
    }
}

function displayTroGiup(id, selection) {
	
	if (selection == null) {
		whisper("Chào mừng bạn đến với VHB Volleyball được tổ chức bởi VHB", id, 0xFFE599, "normal", 0);
		whisper("Trong đây, luật chơi sẽ như bóng chuyền ngoài đời", id, 0xFFE599, "normal", 0);
		whisper("Bạn có thể sử dụng a, q, z là các kiểu phát bóng khác nhau", id, 0xFFE599, "normal", 0);
		whisper("a, q, z theo thứ tự là độ mạnh khi bóng được tung lên, a là mạnh nhất.", id, 0xFFE599, "normal", 0);
		whisper("Để sử dụng các kiểu phát bóng, các bạn có thể chat tên kiểu phát bóng khi tới lượt team bạn phát bóng", id, 0xFFE599, "normal", 0);
		whisper("Ví dụ: khi tới lượt team bạn phát bóng thì chỉ cần chat a thì bóng sẽ bay lên", id, 0xFFE599, "normal", 0);
		whisper("Đội của bạn có 3 chạm để xử lí bóng và đưa bóng qua lưới bên kia, đội nào để banh chạm đất ở phần sân của mình thì mất điểm", id, 0xFFE599, "normal", 0);
		whisper("Trong 3 lượt chạm thì 2 thành viên trong đội phải đánh xen kẻ nhau, không được 1 người đánh 2 chạm liên tiếp.", id, 0xFFE599, "normal", 0);
        whisper("Room đang trong quá trình phát triển nên nhiều thứ sẽ được update sau", id, 0xFFE599, "normal", 0);
	}
}

const isString = value => typeof value === 'string' || value instanceof String;

var binhluan_acenotouch = ["☄️ NO TOUCH ACEEEEE! Một cú phát bóng đầy kinh nghiệm của ",
                           "☄️ NO TOUCH ACEEEEE! Tôi đã bao giờ nghe tên cậu ấy đâu ",
                           "☄️ NO TOUCH ACEEEEE! Một cú phát bóng ăn điểm trực tiếp của ",
                           "☄️ NO TOUCH ACEEEEE! Thật là một điểm tuyệt vời khi không ai chạm vào bóng của ",
                           "☄️ NO TOUCH ACEEEEE! Cậu đến từ hành tinh nào vậy "
]

var binhluan_acetouch = ["⚡ ACEEEEE! Một cú phát bóng đầy uy lực và khiến đối thủ không thể đỡ bóng của ",
                         "⚡ ACEEEEE! Một cú phát bóng ăn điểm đầy cảm xúc của ",
                         "⚡ ACEEEEE! Cậu ấy đang mang đến áp lực kinh khủng gì vậy ",
]

var binhluan_monster_block = ["🛡 MONSTER BLOCKKK! Một cú chắn bóng ăn điểm trực tiếp của ",
                              "🛡 MONSTER BLOCKKK! Liệu tay đập có thể xuyên thủng bức tường của ",
                              "🛡 MONSTER BLOCKKK! Rào chắn tuyệt đối của cậu thật đặc biệt, "
]

var binhluan_goals = ["️🏐 GOALLL! Quả là một bàn thắng tuyệt vời của ",
                      "️🏐 GOALLL! Thế giới cần những tình huống tuyệt vời như của bạn, ",
                      "️🏐 GOALLL! Phát súng mạnh mẽ của thiên tài bóng chuyền ",
                      "️🏐 GOALLL! Không mỹ từ nào có thể diễn tả cú đánh vừa rồi của ",
                      "️🏐 GOALLL! Liệu lời khen nào có thể mô tả hết được sự xuất sắc của ",
                      "️🏐 GOALLL! Cú dứt điểm của gọn gàng và ngoạn mục của ",
                      "️🏐 GOALLL! Mọi người đã thấy được bản lĩnh của bạn, "
]

var binhluan_assists = ["🌟 Cú chuyền vừa rồi như thế nào vậy??? Anh ta có radar ở mắt ư ",
                        "🌟 Chuẩn xác, tuyệt vời quả là không thể xứng đáng hơn với đường chuyền của ",
                        "🌟 Đường chuyền như dâng tận miệng, không ăn điểm cũng khó của ",
                        "🌟 Setter vĩ đại nhất liệu có phải là anh ấy ",                    
]

var binhluan_ownGoals = ["💸 Tiền đâu? Tiền đâu? Tiền đây, tiền đây ",
                         "️🎉 CHÚC MỪNG!!! Đối thủ nợ bạn một lời cảm ơn! ",
                         "🐸 Một bàn phản lưới ngớ ngẩn của "
]

var binhluan_blockout = ["💥 Cú đập đã xuyên qua bức tường của "]

/* TÀI XỈU */
function playtaixiu(w) {
    taixiudangdienra = true;
    phien_taixiu +=1;
    announce("Tài xỉu phiên thứ " + phien_taixiu + " đang diễn ra! 120s đếm ngược",null,0xFFCFCB);
    announce("Nhập !tai [mức mược] hoặc !xiu [mức cược] để đặt tiền!",null,0xFFCFCB);
    setTimeout(taixiucore, 70000);
}
var kq_taixiu;
var taixiu = false;
var taixiudangdienra = false;
var taiPlayer = [];
var xiuPlayer = [];
var datcuoc_player = [];
var phien_taixiu = 0;

function taixiucore() {
    let x = getRandomInt(19);
    if (x >= 0  && x <10) {
        kq_taixiu = 'tai';
    }
    else {
        kq_taixiu = 'xiu';
    }
if (kq_taixiu == 'tai') {
    announce("Tài xỉu phiên thứ " + phien_taixiu + " ra Tài!!!",null,0xAADDEE);
    for (var i = 0; i < ids.length; i++) {
        if (taiPlayer[i] != null) {
            var p = room.getPlayerList().find(x => x.id == i);
            var data = JSON.parse(localStorage.getItem(p.name));
            data.money += (taiPlayer[i]*2);
            localStorage.setItem(p.name,JSON.stringify(data));
            if (p != null) whisper("Bạn đã nhận được " + numberWithCommas(taiPlayer[i]) + "đ khi chơi tài xỉu",p.id);
        } 
        else if (xiuPlayer[i] != null) {
            var p = room.getPlayerList().find(x => x.id == i);
            if (p != null) whisper("Bạn đã mất " + numberWithCommas(xiuPlayer[i]) + "đ khi chơi tài xỉu",p.id);
        }
    }
}
else if (kq_taixiu == 'xiu') {
    announce("Tài xỉu phiên thứ " + phien_taixiu + " ra Xỉu!!!",null,0xAADDEE);
    for (var i = 0; i < ids.length; i++) {
        if (xiuPlayer[i] != null) {
            var p = room.getPlayerList().find(x => x.id == i);
            var data = JSON.parse(localStorage.getItem(p.name));
            data.money += (xiuPlayer[i]*2);
            localStorage.setItem(p.name,JSON.stringify(data));
            if (p != null) whisper("Bạn đã nhận được " + numberWithCommas(xiuPlayer[i]) + "đ khi chơi tài xỉu",p.id);
        } 
        else if (taiPlayer[i] != null) {
            var p = room.getPlayerList().find(x => x.id == i);
            if (p != null) whisper("Bạn đã mất " + numberWithCommas(taiPlayer[i]) + "đ khi chơi tài xỉu",p.id);
        }
    }
}
xiuPlayer = [];
taixiudangdienra = false;
taiPlayer = [];
datcuoc_player = [];
setTimeout(playtaixiu, 5000);
}

/* /* /* GOAL CELEBRATION FUNCTIONS */

/* var celebrate_color = [0xff0000, 0xf1c232, 0xffe084, 0xcefc67, 0x5dea45, 0x5deaf8, 0x1d97f4, 0x003df8, 0xd500f8]

//430, -70

function goalCelebrationCircle(playerID) {
    let pos_x = room.getPlayerDiscProperties(playerID).x;
    let pos_y = room.getPlayerDiscProperties(playerID).y;
    let cnt = -1
    let value = 0 * Math.PI / 180.0;
    // setTimeout(() => {

    for (let i = 2; i <= 23; i++) {    
        value += 18 * Math.PI / 180.0
        cnt = (cnt + 1) % celebrate_color.length
        pos_x = room.getPlayerDiscProperties(playerID).x;
        pos_y = room.getPlayerDiscProperties(playerID).y;
        room.setDiscProperties(i, {
        radius: 4, 
        x: pos_x + Math.cos(value), 
        y: pos_y + Math.sin(value),
        xspeed: 1.5 * Math.cos(value),
        yspeed: 1.5 * Math.sin(value),
        color: celebrate_color[cnt].toString(),
        })
    }

    setTimeout(() => {
        for (let i = 2; i <= 23; i++) {
            room.setDiscProperties(i, { radius: 0, x: 430, y: -70 })
        }
    }, 1850);
}

function goalCelebrationBallLauncher() {
    for (let i = 2; i <= 23; i++) {
        room.setDiscProperties(i, {x: 0, y: 70, radius: 4})
    }
    let i = 1;
    let cnt = - 1;
    while (i < 23) {
        i++;
        cnt = (cnt + 1) % celebrate_color.length;
        room.setDiscProperties(i, {
            xspeed: getRandomArbitrary(1,2) * Math.cos(getRandomInt(-180,180)*Math.PI / 180.0), 
            yspeed: getRandomArbitrary(-2.5,-1),
            ygravity: 0.0199,
            color: celebrate_color[cnt].toString() 
        });
    }
    // for (let i = 2; i <= 23; i++) {
    //     room.setDiscProperties(i, { radius: 0, x: 430, y: -70 })
    // }
}

function goalCelebrationAssistant(playerID) {
    let pos_x = room.getPlayerDiscProperties(playerID).x;
    let pos_y = room.getPlayerDiscProperties(playerID).y;
    let value = 0 * Math.PI / 180.0;
    let cnt = -1;
    for (let i = 64; i <= 85; i++) {    
        value += 18 * Math.PI / 180.0
        cnt = (cnt + 1) % celebrate_color.length
        pos_x = room.getPlayerDiscProperties(playerID).x;
        pos_y = room.getPlayerDiscProperties(playerID).y;
        room.setDiscProperties(i, {
        radius: 4, 
        x: pos_x + Math.cos(value), 
        y: pos_y + Math.sin(value),
        xspeed: 1.0 * Math.cos(value),
        yspeed: 1.0 * Math.sin(value),
        color: celebrate_color[cnt].toString(),
        })
    }
    setTimeout(() => {
        for (let i = 64; i <= 85; i++) {
            room.setDiscProperties(i, { radius: 0, x: -1488, y: -500  })
        }
    }, 1850);
}

var dis_count = 1;
var cnt_d = 0;
var goal_cele = false;

function goalCele() {
    if (goal_cele) {
        if (cnt_d == 20) {
            dis_count+=1;
            room.setDiscProperties(dis_count, {
                x: 0,
                y: 70,
                radius:4,
                xspeed: getRandomArbitrary(1,2) * Math.cos(getRandomInt(-180,180)*Math.PI / 180.0), 
                yspeed: getRandomArbitrary(-2.5,-1),
                ygravity: 0.0199,
                color: celebrate_color[dis_count%celebrate_color.length].toString() 
            });
            if (dis_count == 23) {
                goal_cele = false;
                dis_count = 1;
            }
        }
        else {
            cnt_d+=1;
        }
    }
}

function drawLineCele(playerID, dis_count) {
    let id = playerID;
    let pos_x = room.getPlayerDiscProperties(id).x;
    let pos_y = room.getPlayerDiscProperties(id).y;
    sleep(1).then(() => {
        if (dis_count == 23) return;
        dis_count += 1;
        room.setDiscProperties(dis_count,{
            radius : 4,
            x: pos_x,
            y: pos_y,
            color: celebrate_color[dis_count % celebrate_color.length]
        })
        drawLineCele(id, dis_count + 1)
    });
}  */