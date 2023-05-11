	/* VARIABLES */

	/* ROOM */

	const roomName = "🏆 VHB Volleyball | 3v3 🏆";
	const botName = "VolleyBot";
	const maxPlayers = 15;
	const roomPublic = false;
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
    
        "spawnDistance" : 455,
    
        "bg" : { "type" : "grass", "width" : 487, "height" : 207, "kickOffRadius" : 0, "cornerRadius" : 0 },
    
        "vertexes" : [
            /* 0 */ { "x" : -350, "y" : -97, "trait" : "art" },
            /* 1 */ { "x" : 350, "y" : -97, "trait" : "art" },
            /* 2 */ { "x" : -351, "y" : -94, "trait" : "art" },
            /* 3 */ { "x" : 351, "y" : -94, "trait" : "art" },
            /* 4 */ { "x" : -352, "y" : -91, "trait" : "art" },
            /* 5 */ { "x" : 352, "y" : -91, "trait" : "art" },
            /* 6 */ { "x" : -353, "y" : -88, "trait" : "art" },
            /* 7 */ { "x" : 353, "y" : -88, "trait" : "art" },
            /* 8 */ { "x" : -354, "y" : -85, "trait" : "art" },
            /* 9 */ { "x" : 354, "y" : -85, "trait" : "art" },
            /* 10 */ { "x" : -355, "y" : -82, "trait" : "art" },
            /* 11 */ { "x" : 355, "y" : -82, "trait" : "art" },
            /* 12 */ { "x" : -356, "y" : -79, "trait" : "art" },
            /* 13 */ { "x" : 356, "y" : -79, "trait" : "art" },
            /* 14 */ { "x" : -357, "y" : -76, "trait" : "art" },
            /* 15 */ { "x" : 357, "y" : -76, "trait" : "art" },
            /* 16 */ { "x" : -358, "y" : -73, "trait" : "art" },
            /* 17 */ { "x" : 358, "y" : -73, "trait" : "art" },
            /* 18 */ { "x" : -359, "y" : -70, "trait" : "art" },
            /* 19 */ { "x" : 359, "y" : -70, "trait" : "art" },
            /* 20 */ { "x" : -360, "y" : -67, "trait" : "art" },
            /* 21 */ { "x" : 360, "y" : -67, "trait" : "art" },
            /* 22 */ { "x" : -361, "y" : -64, "trait" : "art" },
            /* 23 */ { "x" : 361, "y" : -64, "trait" : "art" },
            /* 24 */ { "x" : -362, "y" : -61, "trait" : "art" },
            /* 25 */ { "x" : 362, "y" : -61, "trait" : "art" },
            /* 26 */ { "x" : -363, "y" : -58, "trait" : "art" },
            /* 27 */ { "x" : 363, "y" : -58, "trait" : "art" },
            /* 28 */ { "x" : -364, "y" : -55, "trait" : "art" },
            /* 29 */ { "x" : 364, "y" : -55, "trait" : "art" },
            /* 30 */ { "x" : -365, "y" : -52, "trait" : "art" },
            /* 31 */ { "x" : 365, "y" : -52, "trait" : "art" },
            /* 32 */ { "x" : -366, "y" : -49, "trait" : "art" },
            /* 33 */ { "x" : 366, "y" : -49, "trait" : "art" },
            /* 34 */ { "x" : -367, "y" : -46, "trait" : "art" },
            /* 35 */ { "x" : 367, "y" : -46, "trait" : "art" },
            /* 36 */ { "x" : -368, "y" : -43, "trait" : "art" },
            /* 37 */ { "x" : 368, "y" : -43, "trait" : "art" },
            /* 38 */ { "x" : -369, "y" : -40, "trait" : "art" },
            /* 39 */ { "x" : 369, "y" : -40, "trait" : "art" },
            /* 40 */ { "x" : -370, "y" : -37, "trait" : "art" },
            /* 41 */ { "x" : 370, "y" : -37, "trait" : "art" },
            /* 42 */ { "x" : -371, "y" : -34, "trait" : "art" },
            /* 43 */ { "x" : 371, "y" : -34, "trait" : "art" },
            /* 44 */ { "x" : -372, "y" : -31, "trait" : "art" },
            /* 45 */ { "x" : 372, "y" : -31, "trait" : "art" },
            /* 46 */ { "x" : -373, "y" : -28, "trait" : "art" },
            /* 47 */ { "x" : 373, "y" : -28, "trait" : "art" },
            /* 48 */ { "x" : -374, "y" : -25, "trait" : "art" },
            /* 49 */ { "x" : 374, "y" : -25, "trait" : "art" },
            /* 50 */ { "x" : -375, "y" : -22, "trait" : "art" },
            /* 51 */ { "x" : 375, "y" : -22, "trait" : "art" },
            /* 52 */ { "x" : -376, "y" : -19, "trait" : "art" },
            /* 53 */ { "x" : 376, "y" : -19, "trait" : "art" },
            /* 54 */ { "x" : -377, "y" : -16, "trait" : "art" },
            /* 55 */ { "x" : 377, "y" : -16, "trait" : "art" },
            /* 56 */ { "x" : -378, "y" : -13, "trait" : "art" },
            /* 57 */ { "x" : 378, "y" : -13, "trait" : "art" },
            /* 58 */ { "x" : -379, "y" : -10, "trait" : "art" },
            /* 59 */ { "x" : 379, "y" : -10, "trait" : "art" },
            /* 60 */ { "x" : -380, "y" : -7, "trait" : "art" },
            /* 61 */ { "x" : 380, "y" : -7, "trait" : "art" },
            /* 62 */ { "x" : -381, "y" : -4, "trait" : "art" },
            /* 63 */ { "x" : 381, "y" : -4, "trait" : "art" },
            /* 64 */ { "x" : -382, "y" : -1, "trait" : "art" },
            /* 65 */ { "x" : 382, "y" : -1, "trait" : "art" },
            /* 66 */ { "x" : -383, "y" : 2, "trait" : "art" },
            /* 67 */ { "x" : 383, "y" : 2, "trait" : "art" },
            /* 68 */ { "x" : -384, "y" : 5, "trait" : "art" },
            /* 69 */ { "x" : 384, "y" : 5, "trait" : "art" },
            /* 70 */ { "x" : -385, "y" : 8, "trait" : "art" },
            /* 71 */ { "x" : 385, "y" : 8, "trait" : "art" },
            /* 72 */ { "x" : -386, "y" : 11, "trait" : "art" },
            /* 73 */ { "x" : 386, "y" : 11, "trait" : "art" },
            /* 74 */ { "x" : -387, "y" : 14, "trait" : "art" },
            /* 75 */ { "x" : 387, "y" : 14, "trait" : "art" },
            /* 76 */ { "x" : -388, "y" : 17, "trait" : "art" },
            /* 77 */ { "x" : 388, "y" : 17, "trait" : "art" },
            /* 78 */ { "x" : -389, "y" : 20, "trait" : "art" },
            /* 79 */ { "x" : 389, "y" : 20, "trait" : "art" },
            /* 80 */ { "x" : -390, "y" : 23, "trait" : "art" },
            /* 81 */ { "x" : 390, "y" : 23, "trait" : "art" },
            /* 82 */ { "x" : -391, "y" : 26, "trait" : "art" },
            /* 83 */ { "x" : 391, "y" : 26, "trait" : "art" },
            /* 84 */ { "x" : -392, "y" : 29, "trait" : "art" },
            /* 85 */ { "x" : 392, "y" : 29, "trait" : "art" },
            /* 86 */ { "x" : -393, "y" : 32, "trait" : "art" },
            /* 87 */ { "x" : 393, "y" : 32, "trait" : "art" },
            /* 88 */ { "x" : -394, "y" : 35, "trait" : "art" },
            /* 89 */ { "x" : 394, "y" : 35, "trait" : "art" },
            /* 90 */ { "x" : -395, "y" : 38, "trait" : "art" },
            /* 91 */ { "x" : 395, "y" : 38, "trait" : "art" },
            /* 92 */ { "x" : -396, "y" : 41, "trait" : "art" },
            /* 93 */ { "x" : 396, "y" : 41, "trait" : "art" },
            /* 94 */ { "x" : -397, "y" : 44, "trait" : "art" },
            /* 95 */ { "x" : 397, "y" : 44, "trait" : "art" },
            /* 96 */ { "x" : -398, "y" : 47, "trait" : "art" },
            /* 97 */ { "x" : 398, "y" : 47, "trait" : "art" },
            /* 98 */ { "x" : -399, "y" : 50, "trait" : "art" },
            /* 99 */ { "x" : 399, "y" : 50, "trait" : "art" },
            /* 100 */ { "x" : -400, "y" : 53, "trait" : "art" },
            /* 101 */ { "x" : 400, "y" : 53, "trait" : "art" },
            /* 102 */ { "x" : -401, "y" : 56, "trait" : "art" },
            /* 103 */ { "x" : 401, "y" : 56, "trait" : "art" },
            /* 104 */ { "x" : -402, "y" : 59, "trait" : "art" },
            /* 105 */ { "x" : 402, "y" : 59, "trait" : "art" },
            /* 106 */ { "x" : -403, "y" : 62, "trait" : "art" },
            /* 107 */ { "x" : 403, "y" : 62, "trait" : "art" },
            /* 108 */ { "x" : -404, "y" : 65, "trait" : "art" },
            /* 109 */ { "x" : 404, "y" : 65, "trait" : "art" },
            /* 110 */ { "x" : -405, "y" : 68, "trait" : "art" },
            /* 111 */ { "x" : 405, "y" : 68, "trait" : "art" },
            /* 112 */ { "x" : -406, "y" : 71, "trait" : "art" },
            /* 113 */ { "x" : 406, "y" : 71, "trait" : "art" },
            /* 114 */ { "x" : -407, "y" : 74, "trait" : "art" },
            /* 115 */ { "x" : 407, "y" : 74, "trait" : "art" },
            /* 116 */ { "x" : -408, "y" : 77, "trait" : "art" },
            /* 117 */ { "x" : 408, "y" : 77, "trait" : "art" },
            /* 118 */ { "x" : -409, "y" : 80, "trait" : "art" },
            /* 119 */ { "x" : 409, "y" : 80, "trait" : "art" },
            /* 120 */ { "x" : -410, "y" : 83, "trait" : "art" },
            /* 121 */ { "x" : 410, "y" : 83, "trait" : "art" },
            /* 122 */ { "x" : -411, "y" : 86, "trait" : "art" },
            /* 123 */ { "x" : 411, "y" : 86, "trait" : "art" },
            /* 124 */ { "x" : -412, "y" : 89, "trait" : "art" },
            /* 125 */ { "x" : 412, "y" : 89, "trait" : "art" },
            /* 126 */ { "x" : -413, "y" : 92, "trait" : "art" },
            /* 127 */ { "x" : 413, "y" : 92, "trait" : "art" },
            /* 128 */ { "x" : -414, "y" : 95, "trait" : "art" },
            /* 129 */ { "x" : 414, "y" : 95, "trait" : "art" },
            /* 130 */ { "x" : -415, "y" : 98, "trait" : "art" },
            /* 131 */ { "x" : 415, "y" : 98, "trait" : "art" },
            /* 132 */ { "x" : -416, "y" : 101, "trait" : "art" },
            /* 133 */ { "x" : 416, "y" : 101, "trait" : "art" },
            /* 134 */ { "x" : -417, "y" : 104, "trait" : "art" },
            /* 135 */ { "x" : 417, "y" : 104, "trait" : "art" },
            /* 136 */ { "x" : -418, "y" : 107, "trait" : "art" },
            /* 137 */ { "x" : 418, "y" : 107, "trait" : "art" },
            /* 138 */ { "x" : -419, "y" : 110, "trait" : "art" },
            /* 139 */ { "x" : 419, "y" : 110, "trait" : "art" },
            /* 140 */ { "x" : -420, "y" : 113, "trait" : "art" },
            /* 141 */ { "x" : 420, "y" : 113, "trait" : "art" },
            /* 142 */ { "x" : -421, "y" : 116, "trait" : "art" },
            /* 143 */ { "x" : 421, "y" : 116, "trait" : "art" },
            /* 144 */ { "x" : -422, "y" : 119, "trait" : "art" },
            /* 145 */ { "x" : 422, "y" : 119, "trait" : "art" },
            /* 146 */ { "x" : -423, "y" : 122, "trait" : "art" },
            /* 147 */ { "x" : 423, "y" : 122, "trait" : "art" },
            /* 148 */ { "x" : -424, "y" : 125, "trait" : "art" },
            /* 149 */ { "x" : 424, "y" : 125, "trait" : "art" },
            /* 150 */ { "x" : -425, "y" : 128, "trait" : "art" },
            /* 151 */ { "x" : 425, "y" : 128, "trait" : "art" },
            /* 152 */ { "x" : -426, "y" : 131, "trait" : "art" },
            /* 153 */ { "x" : 426, "y" : 131, "trait" : "art" },
            /* 154 */ { "x" : -427, "y" : 134, "trait" : "art" },
            /* 155 */ { "x" : 427, "y" : 134, "trait" : "art" },
            /* 156 */ { "x" : -428, "y" : 137, "trait" : "art" },
            /* 157 */ { "x" : 428, "y" : 137, "trait" : "art" },
            /* 158 */ { "x" : -429, "y" : 140, "trait" : "art" },
            /* 159 */ { "x" : 429, "y" : 140, "trait" : "art" },
            /* 160 */ { "x" : -430, "y" : 143, "trait" : "art" },
            /* 161 */ { "x" : 430, "y" : 143, "trait" : "art" },
            /* 162 */ { "x" : -431, "y" : 146, "trait" : "art" },
            /* 163 */ { "x" : 431, "y" : 146, "trait" : "art" },
            /* 164 */ { "x" : -432, "y" : 149, "trait" : "art" },
            /* 165 */ { "x" : 432, "y" : 149, "trait" : "art" },
            /* 166 */ { "x" : -433, "y" : 152, "trait" : "art" },
            /* 167 */ { "x" : 433, "y" : 152, "trait" : "art" },
            /* 168 */ { "x" : -434, "y" : 155, "trait" : "art" },
            /* 169 */ { "x" : 434, "y" : 155, "trait" : "art" },
            /* 170 */ { "x" : -434, "y" : 158, "trait" : "art" },
            /* 171 */ { "x" : 434, "y" : 158, "trait" : "art" },
            /* 172 */ { "x" : -349.5, "y" : -99.8, "trait" : "art" },
            /* 173 */ { "x" : 349.5, "y" : -99.8, "trait" : "art" },
            /* 174 */ { "x" : -436.5, "y" : 161, "trait" : "art" },
            /* 175 */ { "x" : 436.5, "y" : 161, "trait" : "art" },
            /* 176 */ { "x" : 441, "y" : 164, "trait" : "art" },
            /* 177 */ { "x" : -441, "y" : 164, "trait" : "art" },
            /* 178 */ { "x" : -351.3, "y" : -101.8, "trait" : "art" },
            /* 179 */ { "x" : 351.3, "y" : -101.8, "trait" : "art" },
            /* 180 */ { "x" : 445, "y" : 166, "trait" : "art" },
            /* 181 */ { "x" : -445, "y" : 166, "trait" : "art" },
            /* 182 */ { "x" : -448, "y" : 169, "trait" : "art" },
            /* 183 */ { "x" : 448, "y" : 169, "trait" : "art" },
            
            /* 184 */ { "x" : -1.5, "y" : 189.5, "bCoef" : 0, "trait" : "ballArea" },
            /* 185 */ { "x" : -0.5, "y" : 69, "bCoef" : 0.5, "trait" : "ballArea" },
            /* 186 */ { "x" : 1.5, "y" : 189.5, "bCoef" : 0, "trait" : "ballArea" },
            
            /* 187 */ { "x" : -2.2, "y" : -111, "trait" : "art" },
            /* 188 */ { "x" : -1, "y" : -195, "trait" : "art" },
            /* 189 */ { "x" : 0, "y" : 49, "trait" : "art" },
            /* 190 */ { "x" : 0, "y" : -66, "trait" : "art" },
            /* 191 */ { "x" : 2, "y" : -111.8, "trait" : "art" },
            /* 192 */ { "x" : 0, "y" : -181, "trait" : "art" },
            
            /* 193 */ { "x" : 3, "y" : 188, "bCoef" : 0, "trait" : "ballArea" },
            /* 194 */ { "x" : 2, "y" : 69, "bCoef" : 0.5, "trait" : "ballArea" },
            /* 195 */ { "x" : -3, "y" : 186, "bCoef" : 0, "trait" : "ballArea" },
            /* 196 */ { "x" : -2, "y" : 69, "bCoef" : 0.5, "trait" : "ballArea" },
            
            /* 197 */ { "x" : 88, "y" : -81.5, "trait" : "art" },
            /* 198 */ { "x" : 111, "y" : 196, "trait" : "art" },
            /* 199 */ { "x" : 56.5, "y" : 165, "trait" : "art" },
            /* 200 */ { "x" : 109, "y" : 169, "trait" : "art" },
            /* 201 */ { "x" : 108, "y" : 159, "trait" : "art" },
            /* 202 */ { "x" : 97, "y" : 28, "trait" : "art" },
            /* 203 */ { "x" : 45.5, "y" : -86.5, "trait" : "art" },
            /* 204 */ { "x" : 50.5, "y" : 24, "trait" : "art" },
            /* 205 */ { "x" : 85.5, "y" : -101.7, "trait" : "art" },
            /* 206 */ { "x" : 59, "y" : 162.5, "trait" : "art" },
            /* 207 */ { "x" : 47, "y" : -88, "trait" : "art" },
            /* 208 */ { "x" : 86.5, "y" : -83, "trait" : "art" },
            /* 209 */ { "x" : 106, "y" : 166, "trait" : "art" },
            /* 210 */ { "x" : 52.5, "y" : 23.5, "trait" : "art" },
            /* 211 */ { "x" : 95.5, "y" : 28, "trait" : "art" },
            
            /* 212 */ { "x" : 0, "y" : 218, "trait" : "playerArea" },
            
            /* 213 */ { "x" : 58.3, "y" : 191, "trait" : "art" },
            /* 214 */ { "x" : 57, "y" : 169.5, "trait" : "art" },
            /* 215 */ { "x" : 45, "y" : -107, "trait" : "art" },
            /* 216 */ { "x" : 45, "y" : -101.7, "trait" : "art" },
            
            /* 217 */ { "x" : -21.5, "y" : 45.5, "trait" : "kickoffBarrier" },
            /* 218 */ { "x" : 21.5, "y" : 45.5, "trait" : "kickoffBarrier" },
            
            /* 219 */ { "x" : 0, "y" : -178, "trait" : "art" },
            /* 220 */ { "x" : 1, "y" : -195, "trait" : "art" },
            /* 221 */ { "x" : -485, "y" : -189, "trait" : "art" },
            /* 222 */ { "x" : 485, "y" : -189, "trait" : "art" },
            /* 223 */ { "x" : -485, "y" : -192, "trait" : "art" },
            /* 224 */ { "x" : 485, "y" : -192, "trait" : "art" },
            /* 225 */ { "x" : -485, "y" : -195, "trait" : "art" },
            /* 226 */ { "x" : 485, "y" : -195, "trait" : "art" },
            /* 227 */ { "x" : -485, "y" : -198, "trait" : "art" },
            /* 228 */ { "x" : 485, "y" : -198, "trait" : "art" },
            /* 229 */ { "x" : -485, "y" : -201, "trait" : "art" },
            /* 230 */ { "x" : 485, "y" : -201, "trait" : "art" },
            /* 231 */ { "x" : -485, "y" : -204, "trait" : "art" },
            /* 232 */ { "x" : 485, "y" : -204, "trait" : "art" },
            /* 233 */ { "x" : -485, "y" : -181, "trait" : "art" },
            /* 234 */ { "x" : 485, "y" : -181, "trait" : "art" },
            /* 235 */ { "x" : -485, "y" : -183, "trait" : "art" },
            /* 236 */ { "x" : 485, "y" : -183, "trait" : "art" },
            /* 237 */ { "x" : -485, "y" : -186, "trait" : "art" },
            /* 238 */ { "x" : 485, "y" : -186, "trait" : "art" },
            /* 239 */ { "x" : -2150, "y" : 4000, "trait" : "art" },
            /* 240 */ { "x" : -426, "y" : -167, "trait" : "art" },
            /* 241 */ { "x" : 426, "y" : -167, "trait" : "art" },
            /* 242 */ { "x" : 2150, "y" : 4000, "trait" : "art" },
            /* 243 */ { "x" : -427.5, "y" : -169, "trait" : "art" },
            /* 244 */ { "x" : 427.5, "y" : -169, "trait" : "art" },
            /* 245 */ { "x" : -429.5, "y" : -171.1, "trait" : "art" },
            /* 246 */ { "x" : 429.5, "y" : -171.1, "trait" : "art" },
            /* 247 */ { "x" : -431.5, "y" : -173.2, "trait" : "art" },
            /* 248 */ { "x" : 431.5, "y" : -173.2, "trait" : "art" },
            /* 249 */ { "x" : -433.5, "y" : -175.3, "trait" : "art" },
            /* 250 */ { "x" : 433.5, "y" : -175.3, "trait" : "art" },
            /* 251 */ { "x" : -425.5, "y" : -165, "trait" : "art" },
            /* 252 */ { "x" : 425.5, "y" : -165, "trait" : "art" },
            /* 253 */ { "x" : -424, "y" : -163, "trait" : "art" },
            /* 254 */ { "x" : 424, "y" : -163, "trait" : "art" }
    
        ],
    
        "segments" : [
            { "v0" : 233, "v1" : 234, "color" : "9eba72", "trait" : "art" },
            { "v0" : 235, "v1" : 236, "color" : "c5c580", "trait" : "art" },
            { "v0" : 237, "v1" : 238, "color" : "c8b690", "trait" : "art" },
            { "v0" : 221, "v1" : 222, "color" : "a0aeb8", "trait" : "art" },
            { "v0" : 223, "v1" : 224, "color" : "70a0b4", "trait" : "art" },
            { "v0" : 225, "v1" : 226, "color" : "6090b0", "trait" : "art" },
            { "v0" : 227, "v1" : 228, "color" : "5080ac", "trait" : "art" },
            { "v0" : 229, "v1" : 230, "color" : "4070a4", "trait" : "art" },
            { "v0" : 231, "v1" : 232, "color" : "3060a0", "trait" : "art" },
            { "v0" : 212, "v1" : 219, "color" : "709868", "trait" : "art" },
            
            { "v0" : 188, "v1" : 212, "vis" : false, "trait" : "playerArea" },
            { "v0" : 194, "v1" : 192, "color" : "cfc999", "trait" : "playerArea" },
            
            { "v0" : 239, "v1" : 253, "color" : "618361", "trait" : "art" },
            { "v0" : 253, "v1" : 254, "color" : "5d7f5d", "trait" : "art" },
            { "v0" : 254, "v1" : 242, "color" : "618361", "trait" : "art" },
            { "v0" : 239, "v1" : 251, "color" : "3f613f", "trait" : "art" },
            { "v0" : 251, "v1" : 252, "color" : "3b5d3b", "trait" : "art" },
            { "v0" : 252, "v1" : 242, "color" : "3f613f", "trait" : "art" },
            { "v0" : 239, "v1" : 240, "color" : "433a3a", "trait" : "art" },
            { "v0" : 240, "v1" : 241, "color" : "433a3a", "trait" : "art" },
            { "v0" : 241, "v1" : 242, "color" : "433a3a", "trait" : "art" },
            { "v0" : 239, "v1" : 243, "color" : "895137", "trait" : "art" },
            { "v0" : 243, "v1" : 244, "color" : "8b5339", "trait" : "art" },
            { "v0" : 244, "v1" : 242, "color" : "895137", "trait" : "art" },
            { "v0" : 239, "v1" : 245, "color" : "693921", "trait" : "art" },
            { "v0" : 245, "v1" : 246, "color" : "693921", "trait" : "art" },
            { "v0" : 246, "v1" : 242, "color" : "693921", "trait" : "art" },
            { "v0" : 239, "v1" : 247, "color" : "5b321f", "trait" : "art" },
            { "v0" : 247, "v1" : 248, "color" : "5b321f", "trait" : "art" },
            { "v0" : 248, "v1" : 242, "color" : "5b321f", "trait" : "art" },
            { "v0" : 239, "v1" : 249, "color" : "4f2d1d", "trait" : "art" },
            { "v0" : 249, "v1" : 250, "color" : "4f2d1d", "trait" : "art" },
            { "v0" : 250, "v1" : 242, "color" : "4f2d1d", "trait" : "art" },
            { "v0" : 195, "v1" : 198, "color" : "556d55", "trait" : "art" },
            { "v0" : 193, "v1" : 198, "color" : "556d55", "trait" : "art" },
            { "v0" : 186, "v1" : 198, "color" : "556d55", "trait" : "art" },
            { "v0" : 198, "v1" : 200, "color" : "556d55", "trait" : "art" },
            { "v0" : 187, "v1" : 205, "color" : "5d755e", "trait" : "art" },
            { "v0" : 191, "v1" : 205, "color" : "5d755e", "trait" : "art" },
            { "v0" : 176, "v1" : 177, "color" : "eadaaa", "trait" : "art" },
            { "v0" : 180, "v1" : 181, "color" : "cfc28f", "trait" : "art" },
            { "v0" : 182, "v1" : 183, "color" : "9eaa62", "trait" : "art" },
            { "v0" : 0, "v1" : 1, "color" : "ad9f73", "trait" : "art" },
            { "v0" : 2, "v1" : 3, "color" : "b4a67a", "trait" : "art" },
            { "v0" : 4, "v1" : 5, "color" : "b6a97d", "trait" : "art" },
            { "v0" : 6, "v1" : 7, "color" : "bbac80", "trait" : "art" },
            { "v0" : 8, "v1" : 9, "color" : "beaf82", "trait" : "art" },
            { "v0" : 10, "v1" : 11, "color" : "c0b284", "trait" : "art" },
            { "v0" : 12, "v1" : 13, "color" : "c2b486", "trait" : "art" },
            { "v0" : 14, "v1" : 15, "color" : "c4b688", "trait" : "art" },
            { "v0" : 16, "v1" : 17, "color" : "c6b88a", "trait" : "art" },
            { "v0" : 18, "v1" : 19, "color" : "c8ba8c", "trait" : "art" },
            { "v0" : 20, "v1" : 21, "color" : "c9bc8d", "trait" : "art" },
            { "v0" : 22, "v1" : 23, "color" : "cabd8e", "trait" : "art" },
            { "v0" : 24, "v1" : 25, "color" : "cbbe8f", "trait" : "art" },
            { "v0" : 26, "v1" : 27, "color" : "ccbf90", "trait" : "art" },
            { "v0" : 28, "v1" : 29, "color" : "cdc091", "trait" : "art" },
            { "v0" : 30, "v1" : 31, "color" : "cec192", "trait" : "art" },
            { "v0" : 32, "v1" : 33, "color" : "cfc293", "trait" : "art" },
            { "v0" : 34, "v1" : 35, "color" : "d0c394", "trait" : "art" },
            { "v0" : 36, "v1" : 37, "color" : "d1c495", "trait" : "art" },
            { "v0" : 38, "v1" : 39, "color" : "d2c696", "trait" : "art" },
            { "v0" : 40, "v1" : 41, "color" : "d3c797", "trait" : "art" },
            { "v0" : 42, "v1" : 43, "color" : "d4c898", "trait" : "art" },
            { "v0" : 44, "v1" : 45, "color" : "d5c999", "trait" : "art" },
            { "v0" : 46, "v1" : 47, "color" : "d6ca9a", "trait" : "art" },
            { "v0" : 48, "v1" : 49, "color" : "d7cb9b", "trait" : "art" },
            { "v0" : 50, "v1" : 51, "color" : "d8cc9c", "trait" : "art" },
            { "v0" : 52, "v1" : 53, "color" : "d9cd9d", "trait" : "art" },
            { "v0" : 54, "v1" : 55, "color" : "dace9e", "trait" : "art" },
            { "v0" : 56, "v1" : 57, "color" : "dbd09f", "trait" : "art" },
            { "v0" : 58, "v1" : 59, "color" : "dcd1a0", "trait" : "art" },
            { "v0" : 60, "v1" : 61, "color" : "ddd2a1", "trait" : "art" },
            { "v0" : 62, "v1" : 63, "color" : "ded3a2", "trait" : "art" },
            { "v0" : 64, "v1" : 65, "color" : "dfd4a3", "trait" : "art" },
            { "v0" : 66, "v1" : 67, "color" : "e0d5a4", "trait" : "art" },
            { "v0" : 68, "v1" : 69, "color" : "e1d6a5", "trait" : "art" },
            { "v0" : 70, "v1" : 71, "color" : "e2d8a6", "trait" : "art" },
            { "v0" : 72, "v1" : 73, "color" : "e3d9a7", "trait" : "art" },
            { "v0" : 74, "v1" : 75, "color" : "e4daa8", "trait" : "art" },
            { "v0" : 76, "v1" : 77, "color" : "e5dba9", "trait" : "art" },
            { "v0" : 78, "v1" : 79, "color" : "e6dcaa", "trait" : "art" },
            { "v0" : 80, "v1" : 81, "color" : "e7ddab", "trait" : "art" },
            { "v0" : 82, "v1" : 83, "color" : "e8deac", "trait" : "art" },
            { "v0" : 84, "v1" : 85, "color" : "e9e0ad", "trait" : "art" },
            { "v0" : 86, "v1" : 87, "color" : "eae1ae", "trait" : "art" },
            { "v0" : 88, "v1" : 89, "color" : "ebe2af", "trait" : "art" },
            { "v0" : 90, "v1" : 91, "color" : "ece3b0", "trait" : "art" },
            { "v0" : 92, "v1" : 93, "color" : "ede4b1", "trait" : "art" },
            { "v0" : 94, "v1" : 95, "color" : "eee5b2", "trait" : "art" },
            { "v0" : 96, "v1" : 97, "color" : "efe6b3", "trait" : "art" },
            { "v0" : 98, "v1" : 99, "color" : "f0e8b4", "trait" : "art" },
            { "v0" : 100, "v1" : 101, "color" : "f1e9b5", "trait" : "art" },
            { "v0" : 102, "v1" : 103, "color" : "f2eab6", "trait" : "art" },
            { "v0" : 104, "v1" : 105, "color" : "f3ebb7", "trait" : "art" },
            { "v0" : 106, "v1" : 107, "color" : "f4ecb8", "trait" : "art" },
            { "v0" : 108, "v1" : 109, "color" : "f5edb9", "trait" : "art" },
            { "v0" : 110, "v1" : 111, "color" : "f5eeba", "trait" : "art" },
            { "v0" : 112, "v1" : 113, "color" : "f6efbb", "trait" : "art" },
            { "v0" : 114, "v1" : 115, "color" : "f6f0bc", "trait" : "art" },
            { "v0" : 116, "v1" : 117, "color" : "f7f1bd", "trait" : "art" },
            { "v0" : 118, "v1" : 119, "color" : "f7f2be", "trait" : "art" },
            { "v0" : 120, "v1" : 121, "color" : "f8f3bf", "trait" : "art" },
            { "v0" : 122, "v1" : 123, "color" : "f8f4c0", "trait" : "art" },
            { "v0" : 124, "v1" : 125, "color" : "f9f5c1", "trait" : "art" },
            { "v0" : 126, "v1" : 127, "color" : "f9f6c2", "trait" : "art" },
            { "v0" : 128, "v1" : 129, "color" : "faf7c3", "trait" : "art" },
            { "v0" : 130, "v1" : 131, "color" : "faf8c4", "trait" : "art" },
            { "v0" : 132, "v1" : 133, "color" : "faf9c5", "trait" : "art" },
            { "v0" : 134, "v1" : 135, "color" : "fbfac6", "trait" : "art" },
            { "v0" : 136, "v1" : 137, "color" : "fbfac7", "trait" : "art" },
            { "v0" : 138, "v1" : 139, "color" : "fbfbc8", "trait" : "art" },
            { "v0" : 140, "v1" : 141, "color" : "fcfbc9", "trait" : "art" },
            { "v0" : 142, "v1" : 143, "color" : "fcfcca", "trait" : "art" },
            { "v0" : 144, "v1" : 145, "color" : "fcfccb", "trait" : "art" },
            { "v0" : 146, "v1" : 147, "color" : "fdfdcc", "trait" : "art" },
            { "v0" : 148, "v1" : 149, "color" : "fdfdcd", "trait" : "art" },
            { "v0" : 150, "v1" : 151, "color" : "fdfdce", "trait" : "art" },
            { "v0" : 152, "v1" : 153, "color" : "fefecf", "trait" : "art" },
            { "v0" : 154, "v1" : 155, "color" : "fefed0", "trait" : "art" },
            { "v0" : 156, "v1" : 157, "color" : "fefed1", "trait" : "art" },
            { "v0" : 158, "v1" : 159, "color" : "ffffd2", "trait" : "art" },
            { "v0" : 160, "v1" : 161, "color" : "ffffd3", "trait" : "art" },
            { "v0" : 162, "v1" : 163, "color" : "ffffd4", "trait" : "art" },
            { "v0" : 164, "v1" : 165, "color" : "ffffd5", "trait" : "art" },
            { "v0" : 166, "v1" : 167, "color" : "ffffd6", "trait" : "art" },
            { "v0" : 168, "v1" : 169, "color" : "ffffd7", "trait" : "art" },
            { "v0" : 170, "v1" : 171, "color" : "faf0bc", "trait" : "art" },
            { "v0" : 0, "v1" : 170, "color" : "d2c498", "trait" : "art" },
            { "v0" : 1, "v1" : 171, "color" : "d2c498", "trait" : "art" },
            { "v0" : 185, "v1" : 189, "color" : "d4c494", "trait" : "art" },
            { "v0" : 187, "v1" : 188, "color" : "737373", "trait" : "art" },
            { "v0" : 191, "v1" : 220, "color" : "555555", "trait" : "art" },
            { "v0" : 213, "v1" : 214, "color" : "556d55", "trait" : "art" },
            { "v0" : 215, "v1" : 216, "color" : "5d755e", "trait" : "art" },
            { "v0" : 216, "v1" : 203, "color" : "b1a171", "trait" : "art" },
            { "v0" : 214, "v1" : 199, "color" : "a19161", "trait" : "art" },
            { "v0" : 200, "v1" : 201, "color" : "b1a171", "trait" : "art" },
            { "v0" : 201, "v1" : 202, "color" : "c1b181", "trait" : "art" },
            { "v0" : 202, "v1" : 197, "color" : "baaa7a", "trait" : "art" },
            { "v0" : 199, "v1" : 204, "color" : "c1b181", "trait" : "art" },
            { "v0" : 204, "v1" : 203, "color" : "baaa7a", "trait" : "art" },
            { "v0" : 205, "v1" : 197, "color" : "b1a171", "trait" : "art" },
            { "v0" : 199, "v1" : 200, "color" : "a99969", "trait" : "art" },
            { "v0" : 206, "v1" : 210, "color" : "c1b181", "trait" : "art" },
            { "v0" : 210, "v1" : 207, "color" : "baaa7a", "trait" : "art" },
            { "v0" : 208, "v1" : 211, "color" : "baaa7a", "trait" : "art" },
            { "v0" : 211, "v1" : 209, "color" : "baaa7a", "trait" : "art" },
            { "v0" : 209, "v1" : 206, "color" : "a99969", "trait" : "art" },
            { "v0" : 197, "v1" : 203, "color" : "b7a777", "trait" : "art" },
            { "v0" : 207, "v1" : 208, "color" : "b7a777", "trait" : "art" },
            { "v0" : 173, "v1" : 175, "color" : "435d91", "trait" : "art" },
            { "v0" : 175, "v1" : 174, "color" : "3a5e9c", "trait" : "art" },
            { "v0" : 174, "v1" : 172, "color" : "435d91", "trait" : "art" },
            { "v0" : 172, "v1" : 173, "color" : "4c6286", "trait" : "art" },
            { "v0" : 177, "v1" : 178, "color" : "eadaaa", "trait" : "art" },
            { "v0" : 181, "v1" : 178, "color" : "cfc28f", "trait" : "art" },
            { "v0" : 179, "v1" : 176, "color" : "eadaaa", "trait" : "art" },
            { "v0" : 179, "v1" : 180, "color" : "cfc28f", "trait" : "art" },
            { "v0" : 178, "v1" : 182, "color" : "a6aa6a", "trait" : "art" },
            { "v0" : 183, "v1" : 179, "color" : "a6aa6a", "trait" : "art" },
            { "v0" : 178, "v1" : 179, "color" : "98a060", "trait" : "art" },
            { "v0" : 216, "v1" : 205, "color" : "909658", "trait" : "art" },
            { "v0" : 189, "v1" : 190, "color" : "e1e1e1", "trait" : "art" },
            { "v0" : 190, "v1" : 192, "color" : "dcdcdc", "trait" : "art" },
            
            { "v0" : 195, "v1" : 196, "color" : "999999", "bCoef" : 0.65, "cMask" : ["ball" ] },
            { "v0" : 195, "v1" : 196, "vis" : false, "color" : "999999", "bCoef" : 0, "cMask" : ["red","blue" ] },
            { "v0" : 184, "v1" : 185, "color" : "797979", "bCoef" : 0.65, "cMask" : ["ball" ] },
            { "v0" : 186, "v1" : 185, "color" : "5c5c5c", "bCoef" : 0.65, "cMask" : ["ball" ] },
            { "v0" : 193, "v1" : 194, "color" : "757575", "bCoef" : 0.65, "cMask" : ["ball" ] },
            
            { "v0" : 194, "v1" : 196, "vis" : false, "bCoef" : 0.65, "trait" : "ballArea" },
            
            { "v0" : 188, "v1" : 212, "curve" : -244, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
            { "v0" : 212, "v1" : 188, "curve" : -244, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
            
            { "v0" : 217, "v1" : 218, "curve" : -180, "vis" : false, "trait" : "kickoffBarrier" },
            { "v0" : 218, "v1" : 217, "curve" : -180, "vis" : false, "trait" : "kickoffBarrier" },
            
            { "v0" : 212, "v1" : 186, "vis" : false, "trait" : "ballArea" }
    
        ],
    
        "goals" : [
            { "p0" : [-2,205 ], "p1" : [-535,205 ], "team" : "red" },
            { "p0" : [2,205 ], "p1" : [535,205 ], "team" : "blue" }
    
        ],
    
        "discs" : [
            { "radius" : 7.25, "invMass" : 0, "pos" : [-464,-94 ], "color" : "25488f", "trait" : "art" },
            { "radius" : 7.5, "invMass" : 0, "pos" : [-480,-54 ], "color" : "cf3333", "trait" : "art" },
            { "radius" : 5.5, "invMass" : 0, "pos" : [451,-190 ], "color" : "c00000", "trait" : "art" },
            { "radius" : 7.5, "invMass" : 0, "pos" : [465,-90 ], "color" : "441177", "trait" : "art" },
            { "radius" : 7.75, "invMass" : 0, "pos" : [472,-73 ], "color" : "587010", "trait" : "art" },
            { "radius" : 6.25, "invMass" : 0, "pos" : [-465,-102 ], "color" : "dfc7b4", "trait" : "art" },
            { "radius" : 6.5, "invMass" : 0, "pos" : [-481,-61.5 ], "color" : "6B5841", "trait" : "art" },
            { "radius" : 4.5, "invMass" : 0, "pos" : [451.5,-196.5 ], "color" : "dab7a4", "trait" : "art" },
            { "radius" : 3.75, "invMass" : 0, "pos" : [438.5,-197.5 ], "color" : "c9a27b", "trait" : "art" },
            { "radius" : 3.5, "invMass" : 0, "pos" : [423.5,-196 ], "color" : "ab8871", "trait" : "art" },
            { "radius" : 6.5, "invMass" : 0, "pos" : [466,-97.5 ], "color" : "c9a27b", "trait" : "art" },
            { "radius" : 6.75, "invMass" : 0, "pos" : [473,-80.5 ], "color" : "fae7d4", "trait" : "art" },
            { "radius" : 5, "invMass" : 0, "pos" : [-459,-186.5 ], "color" : "bb8871", "trait" : "art" },
            { "radius" : 4.25, "invMass" : 0, "pos" : [-461,-183 ], "color" : "dab7a4", "trait" : "art" },
            { "radius" : 3.25, "invMass" : 0, "pos" : [-447.5,-196.5 ], "color" : "d9b28b", "trait" : "art" },
            { "radius" : 5.5, "invMass" : 0, "pos" : [-474,-186 ], "color" : "333354", "trait" : "art" },
            { "radius" : 4.5, "invMass" : 0, "pos" : [-474.5,-191.5 ], "color" : "dab7a4", "trait" : "art" },
            
            { "radius" : 100000, "invMass" : 300, "pos" : [0,-100000 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["ball" ] }
    
        ],
    
        "planes" : [
            { "normal" : [0,1 ], "dist" : -178, "trait" : "playerArea" },
            { "normal" : [0,-1 ], "dist" : -230, "trait" : "playerArea" },
            { "normal" : [0.93,0.37 ], "dist" : -470, "trait" : "playerArea" },
            { "normal" : [-0.93,0.37 ], "dist" : -470, "trait" : "playerArea" },
            
            { "normal" : [0.986,0.165 ], "dist" : -482, "bCoef" : 0.2, "trait" : "ballArea" },
            { "normal" : [-0.986,0.165 ], "dist" : -482, "bCoef" : 0.2, "trait" : "ballArea" },
            { "normal" : [1,0 ], "dist" : -489, "bCoef" : 0.4, "cMask" : ["ball" ], "trait" : "ballArea" },
            { "normal" : [-1,0 ], "dist" : -489, "bCoef" : 0.4, "cMask" : ["ball" ], "trait" : "ballArea" },
            { "normal" : [0,1 ], "dist" : -1000, "trait" : "ballArea" },
            { "normal" : [0,-1 ], "dist" : -215, "trait" : "ballArea" },
            
            { "normal" : [1,0 ], "dist" : -510, "cMask" : ["red","blue" ], "trait" : "playerArea" },
            { "normal" : [-1,0 ], "dist" : -510, "cMask" : ["red","blue" ], "trait" : "playerArea" },
            
            { "normal" : [1,0 ], "dist" : -100000, "bCoef" : 0, "cGroup" : ["ball" ] },
            { "normal" : [-1,0 ], "dist" : -100000, "bCoef" : 0, "cGroup" : ["ball" ] },
            { "normal" : [0,1 ], "dist" : -199000, "bCoef" : 0, "cGroup" : ["ball" ] }
    
        ],
    
        "traits" : {
            "art" : { "cGroup" : ["" ], "cMask" : ["" ] },
            "ballArea" : { "bCoef" : 0.1, "cMask" : ["ball" ] },
            "playerArea" : { "bCoef" : 0.1, "cMask" : ["red","blue" ] },
            "goalNet" : { "bCoef" : 0.05, "cMask" : ["ball","red","blue" ] },
            "kickoffBarrier" : { "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] }
    
        },
    
        "ballPhysics" : {
            "radius" : 7.25,
            "bCoef" : 0.5,
            "invMass" : 1,
            "damping" : 0.99,
            "cMask" : [ "wall"
            ],
            "color" : "ffffff"
    
        },
    
        "playerPhysics" : {
            "bCoef" : 1,
            "invMass" : 0.1,
            "damping" : 0.97,
            "acceleration" : 0.09575,
            "kickingAcceleration" : 0.09575,
            "kickStrength" : 8.5,
            "kickingDamping" : 0.9
    
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
        if (teamB == 2 && teamR == 2) passbot_mode = 0;
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
		spamFilter(player,message)
		if (message.includes('@here') || message.includes('@everyone')) {
			room.kickPlayer(player.id,'Ngôn từ không hợp lệ',true)
			return
		}
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
						if (Red_Count < 3){
							room.setPlayerTeam(player.id,1)
							whisper('Bạn đã được di chuyển sang đội RED', player.id);
						}
						else if (Red_Count > 3) { // RedPlayer_Count
							
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
						if (Blue_Count < 3){
							room.setPlayerTeam(player.id,2)
							whisper('Bạn đã được di chuyển sang đội BLUE', player.id);
						}
						else if (Blue_Count >3 ) { // RedPlayer_Count
							
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
                else if (args[0] == "passbot") {
                    if (args[1] == "stop ") passbot_mode = 0
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
                }
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
		goalCheering = false;
		abusingTimeStamp = 0;
		potentialBugAbusing = false;
		abusingPosition = 0;
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
        loop_passbot();
        // if (inloop_passbot == false) 
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
		var teamCount = getPlayerCount(player.team);
		if (((lastPlayersTouched[0] != null && lastPlayersTouched[0].id == player.id) && teamCount != 1) && !blocked) {
			announce("❌ Phạm lỗi! " + player.name + " chạm bóng 2 lần!");
			givePenalty(player.team);
		}
		blocked = false;
		if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == player.team && (Date.now() - lastPlayersTouchedTime) > 200) {
			totalTouches = totalTouches + 1;
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
			if (lastPlayersTouched[0] != null && player.position.x >= -30 && player.position.x <= 30 && player.position.y <= 10){
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
	}

	room.onTeamGoal = function (team) {
		goalCheering = true
		const scores = room.getScores();
		if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
			if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			announce("🏐 " + getTime(scores) + " Điểm cho " + (team == Team.RED ? "🔴" : "🔵"));
			}
			else {
				announce("🏐 " + getTime(scores) + " Điểm cho " + (team == Team.RED ? "🔴" : "🔵"));
			}
		}
		else {
			announce("🏐 " + getTime(scores) + "Điểm cho " + (team == Team.RED ? "🔴" : "🔵"));
		}
		if (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true) {
			endGame(team);
			goldenGoal = false;
			setTimeout(() => { room.stopGame(); }, 1000);
		}
	}
	room.onTeamVictory = function (scores) {
		start_match();
		//RecSistem.sendDiscordWebhook(scores);
	}
	room.onPositionsReset = function () {
		//const scores = room.getScores();
		//RecSistem.sendDiscordWebhook(scores);
		goalCheering = false;
		lastPlayersTouched = [null, null];
		for(var i=0; i<players.length; i++){
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
	afkKick()

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

function SpikeBot() {
    let rand_xspeed = RandRangeInt(1,10);
    let rand_yspeed = RandRangeInt(1,4);
    let pos_x = RandRangeInt(-10,10);
    let pos_y = RandRangeInt(-150,-140);
    room.setDiscProperties(0,{x: pos_x, y: pos_y, xspeed: rand_xspeed, yspeed: rand_yspeed});
}

function PassBot(player) {
    if (passbot_mode == 1) {
        let rand_xspeed = RandRangeInt(2,4);
        let rand_yspeed = RandRangeInt(-13,-11);
        let pos_x = RandRangeInt(-250,-240);
        let pos_y = RandRangeInt(150,160);
        room.setDiscProperties(0,{x: pos_x, y: pos_y, xspeed: rand_xspeed, yspeed: rand_yspeed});
    }
    else if (passbot_mode == 2) {
        let rand_xspeed = RandRangeInt(-3,-1);
        let rand_yspeed = RandRangeInt(-13,-11);
        let pos_x = RandRangeInt(240,250);
        let pos_y = RandRangeInt(150,160);
        announce(rand_xspeed);
        announce(rand_yspeed);
        room.setDiscProperties(0,{x: pos_x, y: pos_y, xspeed: rand_xspeed, yspeed: rand_yspeed});
    }
}

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
    // announce(pos_x," ", pos_y);
    var players = room.getPlayerList().filter((player) => player.team == passbot_mode);
			players.forEach(function(player) {			
				room.setPlayerDiscProperties(player.id, {x: pos_x, y: pos_y});
                announce(pos_x," ", pos_y);
                pos_x , pos_y += 5;
			});
}
function loop_passbot() {
    if (passbot_mode != 0 ) setPositionPassBot();
    sleep(2000).then(() => {
        PassBot();    
    });
}