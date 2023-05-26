	/* VARIABLES */

	/* ROOM */

	const roomName = "🏆 VHB Volleyball 🏆";
	const botName = "VolleyBot";
	const maxPlayers = 15;
	const roomPublic = true;
	const geo = [{ "code": "IT", "lat": 41.9, "lon": 12.5 },{code: "VN", lat: 10.957413  , lon: 106.842687},];

	const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[1],noPlayer:true });

	const scoreLimit = 14;
	const timeLimit = 0;
	room.setScoreLimit(scoreLimit);
	room.setTimeLimit(timeLimit);
	room.setTeamsLock(false);


	var volleyMap = `{

        "name" : "MAP",
    
        "width" : 485,
    
        "height" : 205,
    
        "bg" : { "color" : "35605a", "width" : 487, "height" : 207 },
    
        "canBeStored" : false,
    
        "vertexes" : [
    /* 0 */ { "x" : -350, "y" : -97, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 1 */ { "x" : 350, "y" : -97, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 2 */ { "x" : -351, "y" : -94, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 3 */ { "x" : 351, "y" : -94, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 4 */ { "x" : -352, "y" : -91, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 5 */ { "x" : 352, "y" : -91, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 6 */ { "x" : -353, "y" : -88, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 7 */ { "x" : 353, "y" : -88, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 8 */ { "x" : -354, "y" : -85, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 9 */ { "x" : 354, "y" : -85, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 10 */ { "x" : -355, "y" : -82, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 11 */ { "x" : 355, "y" : -82, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 12 */ { "x" : -356, "y" : -79, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 13 */ { "x" : 356, "y" : -79, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 14 */ { "x" : -357, "y" : -76, "cMask" : [ ], "cGroup" : [ ] },
            /* 15 */ { "x" : 357, "y" : -76, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 16 */ { "x" : -358, "y" : -73, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 17 */ { "x" : 358, "y" : -73, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 18 */ { "x" : -359, "y" : -70, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 19 */ { "x" : 359, "y" : -70, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 20 */ { "x" : -360, "y" : -67, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 21 */ { "x" : 360, "y" : -67, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 22 */ { "x" : -361, "y" : -64, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 23 */ { "x" : 361, "y" : -64, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 24 */ { "x" : -362, "y" : -61, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 25 */ { "x" : 362, "y" : -61, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 26 */ { "x" : -363, "y" : -58, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 27 */ { "x" : 363, "y" : -58, "cMask" : [ ], "cGroup" : [ ] },
            /* 28 */ { "x" : -364, "y" : -55, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 29 */ { "x" : 364, "y" : -55, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 30 */ { "x" : -365, "y" : -52, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 31 */ { "x" : 365, "y" : -52, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 32 */ { "x" : -366, "y" : -49, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 33 */ { "x" : 366, "y" : -49, "cMask" : [ ], "cGroup" : [ ] },
            /* 34 */ { "x" : -367, "y" : -46, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 35 */ { "x" : 367, "y" : -46, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 36 */ { "x" : -368, "y" : -43, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 37 */ { "x" : 368, "y" : -43, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 38 */ { "x" : -369, "y" : -40, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 39 */ { "x" : 369, "y" : -40, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 40 */ { "x" : -370, "y" : -37, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 41 */ { "x" : 370, "y" : -37, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 42 */ { "x" : -371, "y" : -34, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 43 */ { "x" : 371, "y" : -34, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 44 */ { "x" : -372, "y" : -31, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 45 */ { "x" : 372, "y" : -31, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 46 */ { "x" : -373, "y" : -28, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 47 */ { "x" : 373, "y" : -28, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 48 */ { "x" : -374, "y" : -25, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 49 */ { "x" : 374, "y" : -25, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 50 */ { "x" : -375, "y" : -22, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 51 */ { "x" : 375, "y" : -22, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 52 */ { "x" : -376, "y" : -19, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 53 */ { "x" : 376, "y" : -19, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 54 */ { "x" : -377, "y" : -16, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 55 */ { "x" : 377, "y" : -16, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 56 */ { "x" : -378, "y" : -13, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 57 */ { "x" : 378, "y" : -13, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 58 */ { "x" : -379, "y" : -10, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 59 */ { "x" : 379, "y" : -10, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 60 */ { "x" : -380, "y" : -7, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 61 */ { "x" : 380, "y" : -7, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 62 */ { "x" : -381, "y" : -4, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 63 */ { "x" : 381, "y" : -4, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 64 */ { "x" : -382, "y" : -1, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 65 */ { "x" : 382, "y" : -1, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 66 */ { "x" : -383, "y" : 2, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 67 */ { "x" : 383, "y" : 2, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 68 */ { "x" : -384, "y" : 5, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 69 */ { "x" : 384, "y" : 5, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 70 */ { "x" : -385, "y" : 8, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 71 */ { "x" : 385, "y" : 8, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 72 */ { "x" : -386, "y" : 11, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 73 */ { "x" : 386, "y" : 11, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 74 */ { "x" : -387, "y" : 14, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 75 */ { "x" : 387, "y" : 14, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 76 */ { "x" : -388, "y" : 17, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 77 */ { "x" : 388, "y" : 17, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 78 */ { "x" : -389, "y" : 20, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 79 */ { "x" : 389, "y" : 20, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 80 */ { "x" : -390, "y" : 23, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 81 */ { "x" : 390, "y" : 23, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 82 */ { "x" : -391, "y" : 26, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 83 */ { "x" : 391, "y" : 26, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 84 */ { "x" : -392, "y" : 29, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 85 */ { "x" : 392, "y" : 29, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 86 */ { "x" : -393, "y" : 32, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 87 */ { "x" : 393, "y" : 32, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 88 */ { "x" : -394, "y" : 35, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 89 */ { "x" : 394, "y" : 35, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 90 */ { "x" : -395, "y" : 38, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 91 */ { "x" : 395, "y" : 38, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 92 */ { "x" : -396, "y" : 41, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 93 */ { "x" : 396, "y" : 41, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 94 */ { "x" : -397, "y" : 44, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 95 */ { "x" : 397, "y" : 44, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 96 */ { "x" : -398, "y" : 47, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 97 */ { "x" : 398, "y" : 47, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 98 */ { "x" : -399, "y" : 50, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 99 */ { "x" : 399, "y" : 50, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 100 */ { "x" : -400, "y" : 53, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 101 */ { "x" : 400, "y" : 53, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 102 */ { "x" : -401, "y" : 56, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 103 */ { "x" : 401, "y" : 56, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 104 */ { "x" : -402, "y" : 59, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 105 */ { "x" : 402, "y" : 59, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 106 */ { "x" : -403, "y" : 62, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 107 */ { "x" : 403, "y" : 62, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 108 */ { "x" : -404, "y" : 65, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 109 */ { "x" : 404, "y" : 65, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 110 */ { "x" : -405, "y" : 68, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 111 */ { "x" : 405, "y" : 68, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 112 */ { "x" : -406, "y" : 71, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 113 */ { "x" : 406, "y" : 71, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 114 */ { "x" : -407, "y" : 74, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 115 */ { "x" : 407, "y" : 74, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 116 */ { "x" : -408, "y" : 77, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 117 */ { "x" : 408, "y" : 77, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 118 */ { "x" : -409, "y" : 80, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 119 */ { "x" : 409, "y" : 80, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 120 */ { "x" : -410, "y" : 83, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 121 */ { "x" : 410, "y" : 83, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 122 */ { "x" : -411, "y" : 86, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 123 */ { "x" : 411, "y" : 86, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 124 */ { "x" : -412, "y" : 89, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 125 */ { "x" : 412, "y" : 89, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 126 */ { "x" : -413, "y" : 92, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 127 */ { "x" : 413, "y" : 92, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 128 */ { "x" : -414, "y" : 95, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 129 */ { "x" : 414, "y" : 95, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 130 */ { "x" : -415, "y" : 98, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 131 */ { "x" : 415, "y" : 98, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 132 */ { "x" : -416, "y" : 101, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 133 */ { "x" : 416, "y" : 101, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 134 */ { "x" : -417, "y" : 104, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 135 */ { "x" : 417, "y" : 104, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 136 */ { "x" : -418, "y" : 107, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 137 */ { "x" : 418, "y" : 107, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 138 */ { "x" : -419, "y" : 110, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 139 */ { "x" : 419, "y" : 110, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 140 */ { "x" : -420, "y" : 113, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 141 */ { "x" : 420, "y" : 113, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 142 */ { "x" : -421, "y" : 116, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 143 */ { "x" : 421, "y" : 116, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 144 */ { "x" : -422, "y" : 119, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 145 */ { "x" : 422, "y" : 119, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 146 */ { "x" : -423, "y" : 122, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 147 */ { "x" : 423, "y" : 122, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 148 */ { "x" : -424, "y" : 125, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 149 */ { "x" : 424, "y" : 125, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 150 */ { "x" : -425, "y" : 128, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 151 */ { "x" : 425, "y" : 128, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 152 */ { "x" : -426, "y" : 131, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 153 */ { "x" : 426, "y" : 131, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 154 */ { "x" : -427, "y" : 134, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 155 */ { "x" : 427, "y" : 134, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 156 */ { "x" : -428, "y" : 137, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 157 */ { "x" : 428, "y" : 137, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 158 */ { "x" : -429, "y" : 140, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 159 */ { "x" : 429, "y" : 140, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 160 */ { "x" : -430, "y" : 143, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 161 */ { "x" : 430, "y" : 143, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 162 */ { "x" : -431, "y" : 146, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 163 */ { "x" : 431, "y" : 146, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 164 */ { "x" : -432, "y" : 149, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 165 */ { "x" : 432, "y" : 149, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 166 */ { "x" : -433, "y" : 152, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 167 */ { "x" : 433, "y" : 152, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 168 */ { "x" : -434, "y" : 155, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 169 */ { "x" : 434, "y" : 155, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 170 */ { "x" : -434, "y" : 158, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 171 */ { "x" : 434, "y" : 158, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 172 */ { "x" : -349.5, "y" : -99.8, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 173 */ { "x" : 349.5, "y" : -99.8, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 174 */ { "x" : -436.5, "y" : 161, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 175 */ { "x" : 436.5, "y" : 161, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 176 */ { "x" : 441, "y" : 164, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 177 */ { "x" : -441, "y" : 164, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 178 */ { "x" : -351.3, "y" : -101.8, "cMask" : [ ], "cGroup" : [ ], "color" : "fefdf8" },
            /* 179 */ { "x" : 351.3, "y" : -101.8, "cMask" : [ ], "cGroup" : [ ], "color" : "fefdf8" },
            /* 180 */ { "x" : 445, "y" : 166, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 181 */ { "x" : -445, "y" : 166, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 182 */ { "x" : -448, "y" : 169, "cMask" : [ ], "cGroup" : [ ], "color" : "fefdf8" },
            /* 183 */ { "x" : 448, "y" : 169, "cMask" : [ ], "cGroup" : [ ], "color" : "fefdf8" },
            /* 184 */ { "x" : 0, "y" : 69, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "2c6b96" },
            /* 185 */ { "x" : 0, "y" : -111, "cMask" : [ ], "cGroup" : [ ] },
            /* 186 */ { "x" : 0, "y" : -195, "cMask" : ["wall" ], "cGroup" : [ ] },
            /* 187 */ { "x" : 0, "y" : 49, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 188 */ { "x" : 0, "y" : -66, "cMask" : [ ], "cGroup" : [ ], "color" : "2c6b96" },
            /* 189 */ { "x" : 2, "y" : 69, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "2c6b96" },
            /* 190 */ { "x" : -2, "y" : 69, "bCoef" : 0.5, "cMask" : ["ball" ] },
            /* 191 */ { "x" : 0, "y" : 218, "bCoef" : 0, "cMask" : ["red","blue" ], "color" : "4a867d", "vis" : false },
            /* 192 */ { "x" : -21.5, "y" : 45.5, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "2c6b96", "curve" : 180 },
            /* 193 */ { "x" : 21.5, "y" : 45.5, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "2c6b96", "curve" : 180 },
            /* 194 */ { "x" : -2150, "y" : 4000, "cMask" : [ ], "cGroup" : [ ] },
            /* 195 */ { "x" : 2150, "y" : 4000, "cMask" : [ ], "cGroup" : [ ] },
            /* 196 */ { "x" : -149.333333, "y" : 169, "cMask" : ["wall" ], "color" : "fefdf8" },
            /* 197 */ { "x" : 149.333333, "y" : 169, "cMask" : ["wall" ] },
            /* 198 */ { "x" : -117.1, "y" : -101.8, "cMask" : ["wall" ], "cGroup" : [ ], "color" : "fefdf8" },
            /* 199 */ { "x" : 117.1, "y" : -101.8, "cMask" : ["wall" ], "cGroup" : [ ] },
            /* 200 */ { "x" : -355, "y" : -106.89, "cMask" : ["wall" ], "cGroup" : [ ], "color" : "ff9900" },
            /* 201 */ { "x" : -456.535, "y" : 175, "cMask" : ["wall" ], "cGroup" : [ ], "color" : "ff9900" },
            /* 202 */ { "x" : 50, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 203 */ { "x" : 50, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 204 */ { "x" : -50, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 205 */ { "x" : -50, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 206 */ { "x" : -25, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 207 */ { "x" : -25, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 208 */ { "x" : 25, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 209 */ { "x" : 25, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 210 */ { "x" : -25, "y" : -265, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 211 */ { "x" : 25, "y" : -265, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 212 */ { "x" : -25, "y" : -240, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 213 */ { "x" : 25, "y" : -240, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 214 */ { "x" : -200, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 215 */ { "x" : -180, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 216 */ { "x" : -225, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 217 */ { "x" : -190, "y" : -240, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 218 */ { "x" : -255, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 219 */ { "x" : -155, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 220 */ { "x" : -125, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 221 */ { "x" : 150, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 222 */ { "x" : 150, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 223 */ { "x" : 225, "y" : -300, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
            /* 224 */ { "x" : 175, "y" : -285, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 225 */ { "x" : 225, "y" : -255, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
            /* 226 */ { "x" : 225, "y" : -210, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
            /* 227 */ { "x" : 175, "y" : -270, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 228 */ { "x" : 175, "y" : -225, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 229 */ { "x" : 175, "y" : -240, "cMask" : ["wall" ], "color" : "f2aa0f" },
            /* 230 */ { "x" : 215, "y" : -285, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
            /* 231 */ { "x" : 215, "y" : -270, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
            /* 232 */ { "x" : 215, "y" : -240, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
            /* 233 */ { "x" : 215, "y" : -225, "cMask" : ["wall" ], "color" : "f2aa0f", "curve" : 180 },
            /* 234 */ { "x" : 456.535, "y" : 175, "cMask" : ["wall" ], "cGroup" : [ ], "color" : "ff9900" },
            /* 235 */ { "x" : 355, "y" : -106.89, "cMask" : ["wall" ], "cGroup" : [ ], "color" : "ff9900" },
            /* 236 */ { "x" : -435, "y" : -180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "color" : "2c524e" },
            /* 237 */ { "x" : -590, "y" : 255, "bCoef" : 0.1, "cMask" : ["red","blue" ], "color" : "2c524e" },
            /* 238 */ { "x" : 590, "y" : 255, "bCoef" : 0.1, "cMask" : ["red","blue" ], "color" : "2c524e" },
            /* 239 */ { "x" : 435, "y" : -180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "color" : "2c524e" },
            /* 240 */ { "x" : -485, "y" : -35, "bCoef" : 0.2, "cMask" : ["wall" ], "color" : "4a867d" },
            /* 241 */ { "x" : -485, "y" : 210, "bCoef" : 0.2, "cMask" : ["wall" ], "color" : "4a867d" },
            /* 242 */ { "x" : 485, "y" : 210, "bCoef" : 0.2, "cMask" : ["wall" ], "color" : "4a867d" },
            /* 243 */ { "x" : 485, "y" : -35, "bCoef" : 0.2, "cMask" : ["wall" ], "color" : "4a867d" },
            /* 244 */ { "x" : -3, "y" : 69, "bCoef" : 0.2, "cMask" : ["ball","red","blue" ], "color" : "2c6b96" },
            /* 245 */ { "x" : -3, "y" : 210, "bCoef" : 0.2, "cMask" : ["ball","red","blue" ] },
            /* 246 */ { "x" : 3, "y" : 69, "bCoef" : 0.2, "cMask" : ["ball","red","blue" ], "color" : "2c6b96" },
            /* 247 */ { "x" : 3, "y" : 210, "bCoef" : 0.2, "cMask" : ["ball","red","blue" ] },
            /* 248 */ { "x" : 0, "y" : 69, "bCoef" : 0, "cMask" : ["ball","red","blue" ], "color" : "797979" },
            /* 249 */ { "x" : 0, "y" : 210, "bCoef" : 0, "cMask" : ["ball","red","blue" ], "color" : "797979" },
            /* 250 */ { "x" : 1.5, "y" : 68, "bCoef" : 0, "cMask" : ["red","blue" ] },
            /* 251 */ { "x" : 1.5, "y" : -176.08763643027356, "bCoef" : 0, "cMask" : ["red","blue" ] },
            /* 252 */ { "x" : -1.5, "y" : 68, "bCoef" : 0, "cMask" : ["red","blue" ] },
            /* 253 */ { "x" : -1.5, "y" : -176.08763643027356, "bCoef" : 0, "cMask" : ["red","blue" ] }
    
        ],
    
        "segments" : [
            { "v0" : 201, "v1" : 234, "color" : "ff9900", "cMask" : ["wall" ] },
            { "v0" : 234, "v1" : 235, "color" : "ff9900", "cMask" : ["wall" ] },
            { "v0" : 235, "v1" : 200, "color" : "ff9900", "cMask" : ["wall" ] },
            { "v0" : 236, "v1" : 239, "color" : "2c524e", "bCoef" : 0, "cMask" : ["red","blue" ] },
            { "v0" : 239, "v1" : 238, "color" : "2c524e", "bCoef" : 0.1, "cMask" : ["red","blue" ] },
            { "v0" : 238, "v1" : 237, "color" : "2c524e", "bCoef" : 0, "cMask" : ["red","blue" ] },
            { "v0" : 237, "v1" : 236, "color" : "2c524e", "bCoef" : 0.1, "cMask" : ["red","blue" ] },
            { "v0" : 176, "v1" : 177, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 180, "v1" : 181, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 182, "v1" : 183, "color" : "fefdf8", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 0, "v1" : 1, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 2, "v1" : 3, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 4, "v1" : 5, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 6, "v1" : 7, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 8, "v1" : 9, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 10, "v1" : 11, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 12, "v1" : 13, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 14, "v1" : 15, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 16, "v1" : 17, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 18, "v1" : 19, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 20, "v1" : 21, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 22, "v1" : 23, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 24, "v1" : 25, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 26, "v1" : 27, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 28, "v1" : 29, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 30, "v1" : 31, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 32, "v1" : 33, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 34, "v1" : 35, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 36, "v1" : 37, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 38, "v1" : 39, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 40, "v1" : 41, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 42, "v1" : 43, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 44, "v1" : 45, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 46, "v1" : 47, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 48, "v1" : 49, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 50, "v1" : 51, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 52, "v1" : 53, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 54, "v1" : 55, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 56, "v1" : 57, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 58, "v1" : 59, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 60, "v1" : 61, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 62, "v1" : 63, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 64, "v1" : 65, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 66, "v1" : 67, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 68, "v1" : 69, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 70, "v1" : 71, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 72, "v1" : 73, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 74, "v1" : 75, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 76, "v1" : 77, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 78, "v1" : 79, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 80, "v1" : 81, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 82, "v1" : 83, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 84, "v1" : 85, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 86, "v1" : 87, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 88, "v1" : 89, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 90, "v1" : 91, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 92, "v1" : 93, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 94, "v1" : 95, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 96, "v1" : 97, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 98, "v1" : 99, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 100, "v1" : 101, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 102, "v1" : 103, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 104, "v1" : 105, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 106, "v1" : 107, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 108, "v1" : 109, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 110, "v1" : 111, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 112, "v1" : 113, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 114, "v1" : 115, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 116, "v1" : 117, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 118, "v1" : 119, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 120, "v1" : 121, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 122, "v1" : 123, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 124, "v1" : 125, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 126, "v1" : 127, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 128, "v1" : 129, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 130, "v1" : 131, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 132, "v1" : 133, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 134, "v1" : 135, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 136, "v1" : 137, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 138, "v1" : 139, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 140, "v1" : 141, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 142, "v1" : 143, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 144, "v1" : 145, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 146, "v1" : 147, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 148, "v1" : 149, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 150, "v1" : 151, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 152, "v1" : 153, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 154, "v1" : 155, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 156, "v1" : 157, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 158, "v1" : 159, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 160, "v1" : 161, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 162, "v1" : 163, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 164, "v1" : 165, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 166, "v1" : 167, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 168, "v1" : 169, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 170, "v1" : 171, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 0, "v1" : 170, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 1, "v1" : 171, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 185, "v1" : 186, "color" : "737373", "cMask" : [ ], "cGroup" : [ ], "x" : 0 },
            { "v0" : 173, "v1" : 175, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 175, "v1" : 174, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 174, "v1" : 172, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 172, "v1" : 173, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 177, "v1" : 178, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 181, "v1" : 178, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 179, "v1" : 176, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 179, "v1" : 180, "color" : "2c6b96", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 178, "v1" : 182, "color" : "fefdf8", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 183, "v1" : 179, "color" : "fefdf8", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 178, "v1" : 179, "color" : "fefdf8", "cMask" : [ ], "cGroup" : [ ] },
            { "v0" : 189, "v1" : 190, "vis" : false, "color" : "2c6b96", "bCoef" : 0.65, "cMask" : ["ball" ] },
            { "v0" : 191, "v1" : 186, "curve" : -116.00000000000004, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curveF" : -0.6248693519093272 },
            { "v0" : 186, "v1" : 191, "curve" : -116.00000000000004, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curveF" : -0.6248693519093272 },
            { "v0" : 193, "v1" : 192, "curve" : 180, "vis" : false, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 192, "v1" : 193, "curve" : 180, "vis" : false, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 198, "v1" : 196, "color" : "fefdf8", "cMask" : ["wall" ] },
            { "v0" : 199, "v1" : 197, "color" : "fefdf8", "cMask" : ["wall" ] },
            { "v0" : 200, "v1" : 201, "color" : "ff9900", "cMask" : ["wall" ] },
            { "v0" : 202, "v1" : 203, "color" : "f2aa0f", "cMask" : ["wall" ], "x" : 50 },
            { "v0" : 204, "v1" : 205, "color" : "f2aa0f", "cMask" : ["wall" ], "x" : -50 },
            { "v0" : 206, "v1" : 210, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 208, "v1" : 211, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 212, "v1" : 207, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 213, "v1" : 209, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 204, "v1" : 206, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 208, "v1" : 202, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 204, "v1" : 205, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 205, "v1" : 207, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 209, "v1" : 203, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 203, "v1" : 202, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 210, "v1" : 211, "color" : "f2aa0f", "cMask" : ["wall" ], "y" : -265 },
            { "v0" : 212, "v1" : 213, "color" : "f2aa0f", "cMask" : ["wall" ], "y" : -240 },
            { "v0" : 216, "v1" : 217, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 218, "v1" : 214, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 218, "v1" : 216, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 214, "v1" : 215, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 217, "v1" : 219, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 219, "v1" : 220, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 220, "v1" : 215, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 221, "v1" : 222, "color" : "f2aa0f", "cMask" : ["wall" ], "x" : 150 },
            { "v0" : 223, "v1" : 225, "curve" : 180, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 225, "v1" : 226, "curve" : 180, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 224, "v1" : 227, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 224, "v1" : 230, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 227, "v1" : 231, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 230, "v1" : 231, "curve" : 180, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 229, "v1" : 232, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 228, "v1" : 233, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 232, "v1" : 233, "curve" : 180, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 221, "v1" : 223, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 222, "v1" : 226, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 229, "v1" : 228, "color" : "f2aa0f", "cMask" : ["wall" ] },
            { "v0" : 240, "v1" : 241, "color" : "4a867d", "bCoef" : 0.2, "cMask" : ["wall" ] },
            { "v0" : 241, "v1" : 242, "color" : "4a867d", "bCoef" : 0, "cMask" : ["wall" ] },
            { "v0" : 242, "v1" : 243, "color" : "4a867d", "bCoef" : 0.2, "cMask" : ["wall" ] },
            { "v0" : 245, "v1" : 244, "color" : "5C5C5C", "bCoef" : 0.2, "cMask" : ["ball","red","blue" ], "x" : -3 },
            { "v0" : 247, "v1" : 246, "color" : "5C5C5C", "bCoef" : 0.2, "cMask" : ["ball","red","blue" ], "x" : 3 },
            { "v0" : 249, "v1" : 248, "color" : "797979", "bCoef" : 0, "cMask" : ["ball","red","blue" ], "x" : 0 },
            { "v0" : 250, "v1" : 251, "color" : "ffffff", "bCoef" : 0, "cMask" : ["red","blue" ], "x" : 1.5 },
            { "v0" : 252, "v1" : 253, "color" : "ffffff", "bCoef" : 0, "cMask" : ["red","blue" ], "x" : -1.5 }
    
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
	room.setCustomStadium(volleyMap);

	var adminPassword = 'ad'
	var room_type = 1;

	/* OPTIONS */

	var drawTimeLimit = Infinity;

	/* PLAYERS */

	const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
	var players;
	var teamR;
	var teamB;
	var teamS;

	/* GAME */

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

	/* AUXILIARY */

	var checkTimeVariable = false;

	/* FUNCTIONS */
	var banList = [];
	var gameTime;
	var ids = [];
    var admin_control = false;
    var randBallColor_bol = true;
    var passbot_mode = 0;
    var inloop_passbot = false;
    var serve_team = 0;
    var last_serve_team = 0;
   // var randBallRadius_bol = false;
    var randPlayerRadius_bol = false;
    var rand_uni = true;
	/* AUXILIARY FUNCTIONS */
    
    function RandRangeInt(min,max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

	function getRandomInt (max) { // return random number from 0 to max-1
		return Math.floor(Math.random() * Math.floor(max));
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
				announce("Discord VHB Voley:  https://discord.gg/QAKxdsak ",null,0x7DCEA0)
				dis_loop = false
				
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
		players = room.getPlayerList().filter((player) => player.id != 0);
		teamR = players.filter(p => p.team === Team.RED);
		teamB = players.filter(p => p.team === Team.BLUE);
		teamS = players.filter(p => p.team === Team.SPECTATORS);
	}


	var db = { p: { N: 4, kt: 1 }, log: [] }; 
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
				room.kickPlayer(player.id, "Anti Spam", false); }
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
	setTimeout(() =>{
		if (db.log.filter((p) => p.id == player.id).length == 0) { db.log.push({ id: player.id, lm: [] }); }
		whisper("🎖      🏆 Chào Mừng Đến Với Siêu CUP Thế Vận Hội  🏆              🎖 ", player.id, 0xD24780, "bold", 0);
		whisper("🎖      Nhập !trogiup và !lenh để được xem cách chơi    🎖 ", player.id, 0xD24780, "bold", 0);
		whisper("🎖     Discord VHB Voley:     https://discord.gg/QAKxdsak   🎖 ", player.id, 0xCCD547, "bold", 0);
		ids[player.id] = player.name;
	announce("Nhập !teamred or !teamblue để chọn team hoặc !spec để xem",player.id);
		updateTeams();
		resetTeamCount()
        getAuth(player)
		},1000);
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
				start_match()
		
	}

	room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
		if (changedPlayer.id == 0) {
			room.setPlayerTeam(0, Team.SPECTATORS);
			return;
		}
		start_match()
		updateTeams();
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
	}

	room.onPlayerLeave = function (player) {
		db.log.splice(f(db.log, 'id', player.id), 1);
		ids[player.id] = undefined;
		updateTeams();
		resetTeamCount()
		afkPlayerIDs.delete(player.id);
		delete activities[player.id];
	}

	room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
			if(byPlayer != null){
		activities[byPlayer.id] = Date.now();
		}
		if(ban == 0){
			console.log(kickedPlayer.name + " [" + kickedPlayer.id + "] was kicked (" + reason + ")");
			return false;
			}
		if(ban == 1){
			console.log(kickedPlayer.name + " [" + kickedPlayer.id + "] was banned (" + reason + ")");
			banList[kickedPlayer.id] = kickedPlayer.name;
			if (banList[kickedPlayer.id] == "NewPlayer") {room.clearBan(kickedPlayer.id);}
			}
	}

	/* PLAYER ACTIVITY */

	room.onPlayerChat = function(player, message) {
		activities[player.id] = Date.now();
		// spamFilter(player,message)
		if (message.includes('@here') || message.includes('@everyone')) {
			room.kickPlayer(player.id,'Ngôn từ không hợp lệ',true)
			return
		}
     /*    let arg = message.split(" ");
        console.log(message.trim())
        console.log(arg) */
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
                    if (randBallColor_bol == false) {
                        randBallColor_bol = true;
                        announce("RandBallColor Mode is ON",null,"0x4bff07",null,1);
                    }
                    else {
                        randBallColor_bol = false;
                        announce("RandBallColor Mode is OFF",null,"0xf44336",null,1);
                    }
                }
                /* else if (args[0] == "randBallRadius" && player.admin){
                    if (randBallRadius_bol == false) {
                        randBallRadius_bol = true;
                        announce("RandBallRadius Mode is ON",null,"4bff07",null,1);
                    }
                    else {
                        randBallRadius_bol = false;
                        announce("RandBallRadius Mode is ON",null,"f44336",null,1);
                    }
                } */
                else if (args[0] == "randPlayerRadius" && player.admin){
                    if (randPlayerRadius_bol == false) {
                        randPlayerRadius_bol = true;
                        announce("RandPlayerRadius Mode is ON",null,"0x4bff07",null,1);
                    }
                    else {
                        randPlayerRadius_bol = false;
                        announce("RandPlayerRadius Mode is OFF",null,"0xf44336",null,1);
                    }
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
                else if (args[0] == "rr" && player.admin) {
					room.stopGame();
					room.startGame();
				}
				else if (args[0] == "bb") {
					room.kickPlayer(player.id, "Bye", false);
				}	
                else if (args[0] == "move" && player.name == "suy.") {
                    var z = parseInt(args[1]);
                    var x = parseInt(args[2]);
                    var y = parseInt(args[3]);
                    move(z,x,y);
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
                else if (args[0] == "pri") {
                   announce(totalTouches)
                }
            return false;
	    }
        else if (message.startsWith("'")) SpikeBot()
        else if (message == "a" && goalCheering == false) {
            if (serve_team == 0) whisper("Đã giao bóng!", player.id)
            else if (serve_team != player.team) whisper("Không phải lượt của đội bạn!", player.id)
            else JumpSpinServe();
            return false;
        }
        else if (message == "q" && goalCheering == false) {
            if (serve_team == 0) whisper("Đã giao bóng!", player.id)
            else if (serve_team != player.team) whisper("Không phải lượt của đội bạn!", player.id)
            else JumpFloatServe();
            return false;
        }
        else if (message == "z" && goalCheering == false) {
            if (serve_team == 0) whisper("Đã giao bóng!", player.id)
            else if (serve_team != player.team) whisper("Không phải lượt của đội bạn!", player.id)
            else FloatServe();
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
		goldenGoal = false;
		totalTouches = 0;
        touches = 0;
		goalCheering = false;
		abusingTimeStamp = 0;
		potentialBugAbusing = false;
		abusingPosition = 0;
        last_serve_team  = 2;
        serve_team = 2;
		lastPlayersTouched = [null, null];
		lastPlayersTouchedTime = Date.now();
		abusingPlayer = null;
		if(byPlayer != null){
		activities[byPlayer.id] = Date.now();
		}
		on_match = true
			announce("Trận đấu đang được ghi lại và đăng tải tự động lên discord: https://discord.gg/dZCvBRffDh");
			room.startRecording();	
        random_uni();
        // loop_passbot();
        // recogBlock();
	}

	room.onGameStop = function (byPlayer) {
		gameTime = 0;
		on_match = false
	start_match()
		if(byPlayer != null){
		activities[byPlayer.id] = Date.now();
		}
	}



	room.onPlayerBallKick = function (player) {
        if (randBallColor_bol == true) {
            randBallColor();
        }
        // announce(ballSpeed)
       /*  if (randBallRadius_bol == true) {
            randBallRadius();
        }
 */
        if (randPlayerRadius_bol == true) {
            randPlayerRadius(player);
        }

		if (goalCheering) {
			return;
		}

        
       /*  announce(room.getDiscProperties(0).x + " " + room.getDiscProperties(0).y);   
        announce(Date.now() - lastPlayersTouchedTime,player.pm, "0xffffff"); */

		var teamCount = getPlayerCount(player.team);
		if (((lastPlayersTouched[0] != null && lastPlayersTouched[0].id == player.id) && teamCount != 1) && !blocked) {
			announce("❌ Phạm lỗi! " + player.name + " chạm bóng 2 lần!");
			givePenalty(player.team);
		}
		blocked = false;

        if (last_serve_team == player.team && totalTouches == 1) givePenalty(player.team)
        else if (last_serve_team != player.team) last_serve_team  = 0;

		if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == player.team && (Date.now() - lastPlayersTouchedTime) > 1000) {
			totalTouches = totalTouches + 1;
            // announce(totalTouches)
			if (teamCount != 1) {
				if (totalTouches > 3) {
					announce("❌ Phạm lỗi! Hơn 3 chạm");
					givePenalty(player.team);
				}
			} else if (totalTouches > 3 ) {
				announce("❌ Phạm lỗi! " + player.name + " chạm bóng 4 lần!");
					givePenalty(player.team);
			}
		} else { 
			if (lastPlayersTouched[0] != null && player.position.x >= -30 && player.position.x <= 30 && player.position.y <= 70 /* && ballSpeed >= 25 */){
				totalTouches = 0;
				blocked = true;
				announce("🏐 Một pha chắn bóng bởi " + player.name + "!");
			} else {
				totalTouches = 1
			}
		}
		if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
			lastPlayersTouched[1] = lastPlayersTouched[0];
			lastPlayersTouched[0] = player;
		}
		lastPlayersTouchedTime = Date.now();
        if (serve_team == player.team && goalCheering == false) serve_team = 0;
	}

	room.onTeamGoal = function (team) {
		goalCheering = true
		const scores = room.getScores();
		if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
			if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			announce("🏐 " + getTime(scores) + " Điểm cho " + (team == Team.RED ? "🔴" : "🔵"));
            serve_team = team
            last_serve_team = team
			}
			else {
				announce("🏐 " + getTime(scores) + " Điểm cho " + (team == Team.RED ? "🔴" : "🔵"));
                serve_team = team
                last_serve_team = team
			}
		}
		else {
			announce("🏐 " + getTime(scores) + "Điểm cho " + (team == Team.RED ? "🔴" : "🔵"));
            serve_team = team
            last_serve_team = team
		}
		if (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true) {
			endGame(team);
			goldenGoal = false;
			setTimeout(() => { room.stopGame(); }, 1000);
		}
        // setTimeout(() => { removeBlock(); }, 1000);
	}
	room.onTeamVictory = function (scores) {
		start_match();
		//RecSistem.sendDiscordWebhook(scores);
	}
	room.onPositionsReset = function () {
		//const scores = room.getScores();
		//RecSistem.sendDiscordWebhook(scores);
		goalCheering = false;
        totalTouches = 0;
		lastPlayersTouched = [null, null];
		for (var i=0; i<players.length; i++){
		    activities[players[i].id] = Date.now();
		}
        loop_passbot();
	}

	/* MISCELLANEOUS */

	room.onRoomLink = function (url) {
	}



	room.onStadiumChange = function (newStadiumName, byPlayer) {
		if (newStadiumName != "MAP") {
			room.setCustomStadium(volleyMap);
		}
		if(byPlayer != null){
		activities[byPlayer.id] = Date.now();
		}
	}
	room.onGameTick = function () {
		updateGameStatus();
	// afkKick()

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
	}

	room.onPlayerAdminChange = function(changedPlayer,byPlayer){
		if(byPlayer != null){
		activities[byPlayer.id] = Date.now();
		if(changedPlayer.id == byPlayer.id){
			activities[changedPlayer.id] = Date.now();
		}
		}
	}

	room.onGameUnpause = function(byPlayer){
		if(byPlayer != null){
		activities[byPlayer.id] = Date.now();
		}
	}

	room.onKickRateLimitSet = function(min,rate,burst,byPlayer){
		if(byPlayer != null){
		activities[byPlayer.id] = Date.now();
		}
	}


	/* oom.onPlayerChat = function(player,message){
		
		if(message.toLowerCase() == "!afk"){
		if(afkPlayerIDs.has(player.id) == false){
			afkPlayerIDs.add(player.id);
			setTimeout(function(){
			if(afkPlayerIDs.has(player.id) == true){
				room.kickPlayer(player.id,"AFK",false);
			}
			},LobbyAFKTimeout);
			room.sendAnnouncement(`${player.name} đang AFK!`,null,0x00FF00,"normal",1);
		}
		else{
			room.sendAnnouncement("You are already AFK!",player.id,0xFF0000,"bold",2);
	}
		return false;
		}
		else if(message.toLowerCase() == "!back"){
		if(afkPlayerIDs.has(player.id) == true){
			afkPlayerIDs.delete(player.id);
			room.sendAnnouncement(`${player.name} đã quay trở lại!`,null,0x00FF00,"normal",1);
		}
		else{
			room.sendAnnouncement("Bạn đã quay trở lại rồi!",player.id,0xFF0000,"bold",2);
		}
		return false;
		}
	} */
	let webhookURL = `https://discord.com/api/webhooks/1015279584024989796/zd0tnjjJWxxduMC3lF-JA7sgPIcYXhhdpy92EorAhz7jGLiSuJYJlj24H2gOrY26mRCc`;

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
			"username": "Statistics TVH Volleyball | Room: " + room_type,
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
function randBallColor() {
    var listColor = ["ff9768","507af8","0b421a","a2c4c9","c78d71","91146e","5ec8d8","e9a296","937342",
"386e6b","95e1e9","aa8a00","ffd700","fdd298","defcba","cbadef","ff9768","abcfed","1b7e48","d0e0e3","2676bd","000000","ffffff","999999","03ffd4"];
    let randNumber = getRandomInt(listColor.length-1);
    let res = "0x"+ listColor[randNumber];
    room.setDiscProperties(0,{color: res});
}

/* function randBallRadius() {
    let randNumber = RandRangeInt(1,15);
    room.setDiscProperties(0,{radius: randNumber});
}
 */
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

function removeBlock() {
    for (var i = 19; i < 29; i++) {
        room.setDiscProperties(i,{x: pos_x[i], y: pos_y[i]})
    }
}

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

function getAuth(player) {
    console.log(player.auth)
}

function console_pos(player) {
    let pos_x = room.getDiscProperties(player.id).x;
    let pos_y = room.getDiscProperties(player.id).y;
    console.log(pos_x + ','+ pos_y)
    whisper(pos_x + ','+ pos_y, player.id)
}
