	// ===============================|  RSR |===============================
	//		Version: 1.1.5
	//		Build Date: 20-April-21
	//		Author: Kuma @ hbanz
	//		Website: hbanz.org/realsoccer
	//		* Real Soccer Revolution (RSR)
	//             Official Map for Vietnam Pro Haxball League
	//             Discord: https://discord.gg/nkxjFunJV7 
	//           
	// =========================================================================

	// =========================================================================
	// Usefull Links
	// ------------------------------------------------
	// https://www.haxball.com/headless
	// https://github.com/haxball/haxball-issues/wiki/Headless-Host
	// https://www.haxball.com/headlesstoken
	// https://www.haxball.com/playerauth
	// =========================================================================


	//Real Soccer Variables
	var throwTimeOut = 420; // 7 seconds (var is in game ticks)
	var gkTimeOut = 600; // 10 seconds (var is in game ticks)
	var ckTimeOut = 600; // 10 seconds (var is in game ticks)
	var throwinDistance = 270; // distance players can move the ball during throw in
	var mapBGColor = "86A578"; // default 718C5A
	var superAdminCode = "vnrs"; // !admin vnrs
	var allowPublicAdmin =true; // if true then !admin command is enabled


	/*-------------------------------- STADIUMS ---------------------------------*/
	function getRealSoccerMap() {
		var realSoccerMap = `{

			"name" : "VPL",
		
			"width" : 1300,
		
			"height" : 670,
		
			"spawnDistance" : 560,
		
			"bg" : { "type" : "grass", "width" : 1150, "height" : 600, "kickOffRadius" : 180, "cornerRadius" : 0, "color" : "`+mapBGColor+`" },
		
			"playerPhysics" : {
				"bCoef" : 0.3,
				"invMass" : 0.5,
				"damping" : 0.96,
				"acceleration" : 0.12,
				"kickingAcceleration" : 0.07,
				"kickingDamping" : 0.96,
				"kickStrength" : 5.65
		
			},
		
			"ballPhysics" : {
				"radius" : 9,
				"bCoef" : 0.5,
				"invMass" : 1.05,
				"damping" : 0.99,
				"color" : "FFFFFF",
				"cMask" : [ "all"
				],
				"cGroup" : [ "ball"
				]
		
			},
		
			"vertexes" : [
				/* 0 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier" },
				/* 1 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier" },
				/* 2 */ { "x" : 0, "y" : -675, "trait" : "kickOffBarrier" },
				
				/* 3 */ { "x" : 1150, "y" : 320, "trait" : "line" },
				/* 4 */ { "x" : 840, "y" : 320, "trait" : "line" },
				/* 5 */ { "x" : 1150, "y" : -320, "trait" : "line" },
				/* 6 */ { "x" : 840, "y" : -320, "trait" : "line" },
				/* 7 */ { "x" : 1150, "y" : 180, "trait" : "line" },
				/* 8 */ { "x" : 1030, "y" : 180, "trait" : "line" },
				/* 9 */ { "x" : 1150, "y" : -180, "trait" : "line" },
				/* 10 */ { "x" : 1030, "y" : -180, "trait" : "line" },
				/* 11 */ { "x" : 840, "y" : -130, "trait" : "line", "curve" : -130 },
				/* 12 */ { "x" : 840, "y" : 130, "trait" : "line", "curve" : -130 },
				/* 13 */ { "x" : -1150, "y" : -320, "trait" : "line" },
				/* 14 */ { "x" : -840, "y" : -320, "trait" : "line" },
				/* 15 */ { "x" : -1150, "y" : 320, "trait" : "line" },
				/* 16 */ { "x" : -840, "y" : 320, "trait" : "line" },
				/* 17 */ { "x" : -1150, "y" : -175, "trait" : "line" },
				/* 18 */ { "x" : -1030, "y" : -175, "trait" : "line" },
				/* 19 */ { "x" : -1150, "y" : 175, "trait" : "line" },
				/* 20 */ { "x" : -1030, "y" : 175, "trait" : "line" },
				/* 21 */ { "x" : -840, "y" : 130, "trait" : "line", "curve" : -130 },
				/* 22 */ { "x" : -840, "y" : -130, "trait" : "line", "curve" : -130 },
				/* 23 */ { "x" : 935, "y" : 3, "trait" : "line" },
				/* 24 */ { "x" : 935, "y" : -3, "trait" : "line" },
				/* 25 */ { "x" : -935, "y" : 3, "trait" : "line" },
				/* 26 */ { "x" : -935, "y" : -3, "trait" : "line" },
				/* 27 */ { "x" : -1150, "y" : 570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
				/* 28 */ { "x" : -1120, "y" : 600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
				/* 29 */ { "x" : -1120, "y" : -600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
				/* 30 */ { "x" : -1150, "y" : -570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
				/* 31 */ { "x" : 1120, "y" : 600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
				/* 32 */ { "x" : 1150, "y" : 570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
				/* 33 */ { "x" : 1150, "y" : -570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "C7E6BD" },
				/* 34 */ { "x" : 1120, "y" : -600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "C7E6BD" },
				
				/* 35 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "curve" : -180, "color" : "333333" },
				/* 36 */ { "x" : 0, "y" : -180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 180, "color" : "333333" },
				/* 37 */ { "x" : 0, "y" : 178, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 180, "color" : "c90076" },
				
				/* 38 */ { "x" : -1030, "y" : -40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : 70, "color" : "576C46", "vis" : false },
				/* 39 */ { "x" : -1030, "y" : 40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : 70, "color" : "576C46", "vis" : false },
				/* 40 */ { "x" : 1030, "y" : -40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : -70, "color" : "576C46", "vis" : false },
				/* 41 */ { "x" : 1030, "y" : 40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : -70, "color" : "576C46", "vis" : false },
				/* 42 */ { "x" : 1030, "y" : -40, "trait" : "line", "color" : "576C46" },
				/* 43 */ { "x" : 1030, "y" : 40, "trait" : "line", "color" : "576C46" },
				/* 44 */ { "x" : -1030, "y" : -40, "trait" : "line", "color" : "576C46" },
				/* 45 */ { "x" : -1030, "y" : 40, "trait" : "line", "color" : "576C46" },
				
				/* 46 */ { "x" : -1157, "y" : 605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 47 */ { "x" : -1157, "y" : 655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 48 */ { "x" : -1157, "y" : -655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 49 */ { "x" : -1157, "y" : -605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 50 */ { "x" : 1157, "y" : 605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 51 */ { "x" : 1157, "y" : 655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 52 */ { "x" : 1157, "y" : -655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 53 */ { "x" : 1157, "y" : -605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
				
				/* 54 */ { "x" : -1600, "y" : -485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
				/* 55 */ { "x" : 1300, "y" : -485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
				/* 56 */ { "x" : -1300, "y" : 485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
				/* 57 */ { "x" : 1300, "y" : 485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
				/* 58 */ { "x" : -1295, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				/* 59 */ { "x" : -840, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				/* 60 */ { "x" : -840, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				/* 61 */ { "x" : -1295, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				/* 62 */ { "x" : 1295, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				/* 63 */ { "x" : 840, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				/* 64 */ { "x" : 840, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				/* 65 */ { "x" : 1295, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				/* 66 */ { "x" : -1150, "y" : -124, "bCoef" : 0, "cMask" : ["ball","red","blue" ] },
				/* 67 */ { "x" : -1210, "y" : -124, "bCoef" : 0, "cMask" : ["ball" ], "bias" : 0, "curve" : 5 },
				/* 68 */ { "x" : -1150, "y" : 124, "bCoef" : 0, "cMask" : ["ball","red","blue" ] },
				/* 69 */ { "x" : -1210, "y" : 124, "bCoef" : 0, "cMask" : ["ball" ], "bias" : 0, "curve" : 5 },
				/* 70 */ { "x" : -1250, "y" : -158, "bCoef" : 0, "cMask" : ["ball" ] },
				/* 71 */ { "x" : -1250, "y" : 158, "bCoef" : 0, "cMask" : ["ball" ] },
				/* 72 */ { "x" : 1150, "y" : 124, "bCoef" : 0, "cMask" : ["ball","red","blue" ] },
				/* 73 */ { "x" : 1210, "y" : 124, "bCoef" : 0, "cMask" : ["ball" ], "curve" : -5 },
				/* 74 */ { "x" : 1150, "y" : -124, "bCoef" : 0, "cMask" : ["ball","red","blue" ] },
				/* 75 */ { "x" : 1210, "y" : -124, "bCoef" : 0, "cMask" : ["ball" ], "curve" : -5 },
				/* 76 */ { "x" : 1250, "y" : -158, "bCoef" : 0, "cMask" : ["ball" ] },
				/* 77 */ { "x" : 1250, "y" : 158, "bCoef" : 0, "cMask" : ["ball" ] },
				
				/* 78 */ { "x" : 0, "y" : -178, "trait" : "line", "color" : "c90076", "curve" : 180 },
				/* 79 */ { "x" : 0, "y" : -178, "trait" : "line", "color" : "333daa" },
				/* 80 */ { "x" : 0, "y" : 178, "trait" : "line", "color" : "333daa" },
				/* 81 */ { "x" : 0, "y" : -181, "trait" : "line", "color" : "c90076" },
				/* 82 */ { "x" : 0, "y" : 181, "trait" : "line", "color" : "c90076" },
				/* 83 */ { "x" : 0, "y" : -180, "trait" : "line", "curve" : -180, "color" : "333daa" },
				/* 84 */ { "x" : 0, "y" : 181, "trait" : "line", "curve" : -180, "color" : "333daa" },
				
				/* 85 */ { "x" : 0, "y" : 178, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 180, "color" : "c90076" },
				
				/* 86 */ { "x" : 0, "y" : -178, "trait" : "line", "color" : "c90076", "curve" : 180 },
				/* 87 */ { "x" : -83, "y" : -3, "trait" : "line", "color" : "333daa" },
				/* 88 */ { "x" : -62, "y" : 33, "trait" : "line", "color" : "c90076" },
				/* 89 */ { "x" : -29, "y" : -40, "trait" : "line", "color" : "c90076" },
				/* 90 */ { "x" : -81, "y" : -3, "trait" : "line", "color" : "333daa" },
				/* 91 */ { "x" : -60, "y" : 33, "trait" : "line", "color" : "c90076" },
				/* 92 */ { "x" : -79, "y" : -3, "trait" : "line", "color" : "333daa" },
				/* 93 */ { "x" : -58, "y" : 33, "trait" : "line", "color" : "c90076" },
				/* 94 */ { "x" : -77, "y" : -3, "trait" : "line", "color" : "333daa" },
				/* 95 */ { "x" : -56, "y" : 33, "trait" : "line", "color" : "c90076" },
				/* 96 */ { "x" : -75, "y" : -3, "trait" : "line", "color" : "333daa" },
				/* 97 */ { "x" : -54, "y" : 33, "trait" : "line", "color" : "c90076" },
				/* 98 */ { "x" : -60, "y" : 33, "trait" : "line", "color" : "c90076" },
				/* 99 */ { "x" : -27, "y" : -40, "trait" : "line", "color" : "c90076" },
				/* 100 */ { "x" : -58, "y" : 33, "trait" : "line", "color" : "c90076" },
				/* 101 */ { "x" : -25, "y" : -41, "trait" : "line", "color" : "c90076" },
				/* 102 */ { "x" : -56, "y" : 33, "trait" : "line", "color" : "c90076" },
				/* 103 */ { "x" : -23, "y" : -42, "trait" : "line", "color" : "c90076" },
				/* 104 */ { "x" : -54, "y" : 33, "trait" : "line", "color" : "c90076" },
				/* 105 */ { "x" : -21, "y" : -43, "trait" : "line", "color" : "c90076" },
				/* 106 */ { "x" : -52, "y" : 33, "trait" : "line", "color" : "c90076" },
				/* 107 */ { "x" : -19, "y" : -44, "trait" : "line", "color" : "c90076" },
				/* 108 */ { "x" : -29, "y" : -23, "trait" : "line" },
				/* 109 */ { "x" : 8, "y" : -23, "trait" : "line" },
				/* 110 */ { "x" : -29, "y" : -21, "trait" : "line" },
				/* 111 */ { "x" : 8, "y" : -21, "trait" : "line" },
				/* 112 */ { "x" : -29, "y" : -19, "trait" : "line" },
				/* 113 */ { "x" : 8, "y" : -19, "trait" : "line" },
				/* 114 */ { "x" : -29, "y" : -17, "trait" : "line" },
				/* 115 */ { "x" : 8, "y" : -17, "trait" : "line" },
				/* 116 */ { "x" : -29, "y" : 33, "trait" : "line" },
				/* 117 */ { "x" : -27, "y" : -17, "trait" : "line" },
				/* 118 */ { "x" : -27, "y" : 33, "trait" : "line" },
				/* 119 */ { "x" : -25, "y" : -17, "trait" : "line" },
				/* 120 */ { "x" : -25, "y" : 33, "trait" : "line" },
				/* 121 */ { "x" : -23, "y" : -17, "trait" : "line" },
				/* 122 */ { "x" : -23, "y" : 33, "trait" : "line" },
				/* 123 */ { "x" : -29, "y" : -1, "trait" : "line" },
				/* 124 */ { "x" : 8, "y" : -1, "trait" : "line" },
				/* 125 */ { "x" : -29, "y" : 1, "trait" : "line" },
				/* 126 */ { "x" : 8, "y" : 1, "trait" : "line" },
				/* 127 */ { "x" : -29, "y" : 3, "trait" : "line" },
				/* 128 */ { "x" : 8, "y" : 3, "trait" : "line" },
				/* 129 */ { "x" : -29, "y" : 5, "trait" : "line" },
				/* 130 */ { "x" : 8, "y" : 5, "trait" : "line" },
				/* 131 */ { "x" : 6, "y" : -23, "trait" : "line" },
				/* 132 */ { "x" : 6, "y" : 5, "trait" : "line" },
				/* 133 */ { "x" : 4, "y" : -23, "trait" : "line" },
				/* 134 */ { "x" : 4, "y" : 5, "trait" : "line" },
				/* 135 */ { "x" : 2, "y" : -23, "trait" : "line" },
				/* 136 */ { "x" : 2, "y" : 5, "trait" : "line" },
				/* 137 */ { "x" : 0, "y" : -23, "trait" : "line" },
				/* 138 */ { "x" : 0, "y" : 5, "trait" : "line" },
				/* 139 */ { "x" : 19, "y" : 33, "trait" : "line" },
				/* 140 */ { "x" : 22, "y" : -72, "trait" : "line" },
				/* 141 */ { "x" : 22, "y" : 33, "trait" : "line" },
				/* 142 */ { "x" : 24, "y" : -72, "trait" : "line" },
				/* 143 */ { "x" : 24, "y" : 33, "trait" : "line" },
				/* 144 */ { "x" : 26, "y" : -72, "trait" : "line" },
				/* 145 */ { "x" : 26, "y" : 33, "trait" : "line" },
				/* 146 */ { "x" : 28, "y" : -72, "trait" : "line" },
				/* 147 */ { "x" : 28, "y" : 33, "trait" : "line" },
				/* 148 */ { "x" : 30, "y" : -72, "trait" : "line" },
				/* 149 */ { "x" : 30, "y" : 33, "trait" : "line" },
				/* 150 */ { "x" : 32, "y" : -72, "trait" : "line" },
				/* 151 */ { "x" : 83, "y" : 33, "trait" : "line" },
				/* 152 */ { "x" : 19, "y" : 31, "trait" : "line" },
				/* 153 */ { "x" : 83, "y" : 31, "trait" : "line" },
				/* 154 */ { "x" : 19, "y" : 29, "trait" : "line" },
				/* 155 */ { "x" : 83, "y" : 29, "trait" : "line" },
				/* 156 */ { "x" : 19, "y" : 27, "trait" : "line" },
				/* 157 */ { "x" : 83, "y" : 27, "trait" : "line" },
				/* 158 */ { "x" : 19, "y" : 25, "trait" : "line" },
				/* 159 */ { "x" : 83, "y" : 25, "trait" : "line" },
				/* 160 */ { "x" : 107.4000244140625, "y" : 0.600006103515625, "trait" : "line", "color" : "333daa" },
				/* 161 */ { "x" : 49.4000244140625, "y" : 61.600006103515625, "trait" : "line", "color" : "333daa" },
				/* 162 */ { "x" : 109, "y" : 0, "trait" : "line", "color" : "333daa" },
				/* 163 */ { "x" : 51, "y" : 61, "trait" : "line", "color" : "333daa" },
				/* 164 */ { "x" : 111, "y" : 0, "trait" : "line", "color" : "333daa" },
				/* 165 */ { "x" : 53, "y" : 61, "trait" : "line", "color" : "333daa" },
				/* 166 */ { "x" : -57, "y" : -65, "trait" : "line", "curve" : 0 },
				/* 167 */ { "x" : -88, "y" : -65, "trait" : "line", "curve" : 0 },
				/* 168 */ { "x" : -88, "y" : -36, "trait" : "line", "curve" : 0 },
				/* 169 */ { "x" : -86, "y" : -65, "trait" : "line", "curve" : 0 },
				/* 170 */ { "x" : -86, "y" : -36, "trait" : "line", "curve" : 0 },
				/* 171 */ { "x" : -84, "y" : -65, "trait" : "line", "curve" : 0 },
				/* 172 */ { "x" : -84, "y" : -36, "trait" : "line", "curve" : 0 },
				/* 173 */ { "x" : -57, "y" : -63, "trait" : "line", "curve" : 0 },
				/* 174 */ { "x" : -88, "y" : -63, "trait" : "line", "curve" : 0 },
				/* 175 */ { "x" : -57, "y" : -61, "trait" : "line", "curve" : 0 },
				/* 176 */ { "x" : -88, "y" : -61, "trait" : "line", "curve" : 0 },
				/* 177 */ { "x" : 0, "y" : 181, "trait" : "line" },
				/* 178 */ { "x" : 0, "y" : -181, "trait" : "line" },
				/* 179 */ { "x" : 0, "y" : -181, "trait" : "line", "color" : "c90076" },
				/* 180 */ { "x" : 0, "y" : 181, "trait" : "line", "color" : "c90076" },
				
				/* 181 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier" },
				/* 182 */ { "x" : 0, "y" : -675, "trait" : "kickOffBarrier" },
				/* 183 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
				/* 184 */ { "x" : 0, "y" : 675, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }
		
			],
		
			"segments" : [
				{ "v0" : 1, "v1" : 2, "trait" : "kickOffBarrier" },
				
				{ "v0" : 3, "v1" : 4, "trait" : "line", "y" : 320 },
				{ "v0" : 4, "v1" : 6, "trait" : "line", "x" : 840 },
				{ "v0" : 5, "v1" : 6, "trait" : "line", "y" : -320 },
				{ "v0" : 7, "v1" : 8, "trait" : "line", "y" : 180 },
				{ "v0" : 8, "v1" : 10, "trait" : "line", "x" : 1030 },
				{ "v0" : 9, "v1" : 10, "trait" : "line", "y" : -180 },
				{ "v0" : 11, "v1" : 12, "curve" : -130, "trait" : "line", "x" : 840 },
				{ "v0" : 13, "v1" : 14, "trait" : "line", "y" : -320 },
				{ "v0" : 14, "v1" : 16, "trait" : "line", "x" : -840 },
				{ "v0" : 15, "v1" : 16, "trait" : "line", "y" : 320 },
				{ "v0" : 17, "v1" : 18, "trait" : "line", "y" : -175 },
				{ "v0" : 18, "v1" : 20, "trait" : "line", "x" : -1030 },
				{ "v0" : 19, "v1" : 20, "trait" : "line", "y" : 175 },
				{ "v0" : 21, "v1" : 22, "curve" : -130, "trait" : "line", "x" : -840 },
				{ "v0" : 23, "v1" : 24, "curve" : -180, "trait" : "line", "x" : 935 },
				{ "v0" : 25, "v1" : 26, "curve" : -180, "trait" : "line", "x" : -935 },
				{ "v0" : 23, "v1" : 24, "curve" : 180, "trait" : "line", "x" : 935 },
				{ "v0" : 25, "v1" : 26, "curve" : 180, "trait" : "line", "x" : -935 },
				{ "v0" : 23, "v1" : 24, "curve" : 90, "trait" : "line", "x" : 935 },
				{ "v0" : 25, "v1" : 26, "curve" : 90, "trait" : "line", "x" : -935 },
				{ "v0" : 23, "v1" : 24, "curve" : -90, "trait" : "line", "x" : 935 },
				{ "v0" : 25, "v1" : 26, "curve" : -90, "trait" : "line", "x" : -935 },
				{ "v0" : 23, "v1" : 24, "trait" : "line", "x" : 935 },
				{ "v0" : 25, "v1" : 26, "trait" : "line", "x" : -935 },
				{ "v0" : 27, "v1" : 28, "curve" : 90, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
				{ "v0" : 29, "v1" : 30, "curve" : 90, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
				{ "v0" : 31, "v1" : 32, "curve" : 90, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
				{ "v0" : 33, "v1" : 34, "curve" : 90, "color" : "C7E6BD", "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
				
				{ "v0" : 36, "v1" : 35, "curve" : -180, "vis" : false, "color" : "333333", "bCoef" : 0.1, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
				
				{ "v0" : 38, "v1" : 39, "curve" : 70, "vis" : false, "color" : "576C46", "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "x" : -1030 },
				{ "v0" : 40, "v1" : 41, "curve" : -70, "vis" : false, "color" : "576C46", "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "x" : 1030 },
				
				{ "v0" : 36, "v1" : 37, "curve" : 180, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
				
				{ "v0" : 42, "v1" : 43, "vis" : true, "color" : "576C46", "trait" : "line", "x" : 1030 },
				{ "v0" : 44, "v1" : 45, "vis" : true, "color" : "576C46", "trait" : "line", "x" : -1030 },
				
				{ "v0" : 46, "v1" : 47, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1157 },
				{ "v0" : 48, "v1" : 49, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1157 },
				{ "v0" : 50, "v1" : 51, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1157 },
				{ "v0" : 52, "v1" : 53, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1157 },
				
				{ "v0" : 54, "v1" : 55, "vis" : false, "color" : "ec644b", "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "y" : -485 },
				{ "v0" : 56, "v1" : 57, "vis" : false, "color" : "ec644b", "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "y" : 485 },
				{ "v0" : 58, "v1" : 59, "vis" : false, "color" : "ec644b", "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				{ "v0" : 59, "v1" : 60, "vis" : false, "color" : "ec644b", "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				{ "v0" : 60, "v1" : 61, "vis" : false, "color" : "ec644b", "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				{ "v0" : 62, "v1" : 63, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				{ "v0" : 63, "v1" : 64, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				{ "v0" : 64, "v1" : 65, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
				{ "v0" : 66, "v1" : 67, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball","red","blue" ], "y" : -124 },
				{ "v0" : 68, "v1" : 69, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball","red","blue" ], "y" : 124 },
				{ "v0" : 69, "v1" : 67, "curve" : 5, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball","red","blue" ], "bias" : 0 },
				{ "v0" : 67, "v1" : 70, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ] },
				{ "v0" : 69, "v1" : 71, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ] },
				{ "v0" : 72, "v1" : 73, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball","red","blue" ], "y" : 124 },
				{ "v0" : 74, "v1" : 75, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball","red","blue" ], "y" : -124 },
				{ "v0" : 73, "v1" : 75, "curve" : -5, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball","red","blue" ] },
				{ "v0" : 75, "v1" : 76, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ] },
				{ "v0" : 73, "v1" : 77, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ] },
				
				{ "v0" : 37, "v1" : 78, "curve" : 180, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 79, "v1" : 80, "curve" : 180, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 89, "v1" : 88, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 87, "v1" : 88, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 90, "v1" : 91, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 92, "v1" : 93, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 94, "v1" : 95, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 96, "v1" : 97, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 99, "v1" : 98, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 101, "v1" : 100, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 103, "v1" : 102, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 105, "v1" : 104, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 107, "v1" : 106, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 109, "v1" : 108, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 111, "v1" : 110, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 113, "v1" : 112, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 115, "v1" : 114, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 114, "v1" : 116, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 117, "v1" : 118, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 119, "v1" : 120, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 121, "v1" : 122, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 124, "v1" : 123, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 126, "v1" : 125, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 128, "v1" : 127, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 130, "v1" : 129, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 109, "v1" : 130, "curve" : 143.6219086006974, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 131, "v1" : 132, "curve" : 143.6219086006974, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 133, "v1" : 134, "curve" : 143.6219086006974, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 135, "v1" : 136, "curve" : 143.6219086006974, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 140, "v1" : 139, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 142, "v1" : 141, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 144, "v1" : 143, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 146, "v1" : 145, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 148, "v1" : 147, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 151, "v1" : 139, "curve" : -22.191866226358556, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 151, "v1" : 151, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 153, "v1" : 152, "curve" : -22.191866226358556, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 155, "v1" : 154, "curve" : -22.191866226358556, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 157, "v1" : 156, "curve" : -22.191866226358556, "vis" : true, "color" : "c90076", "trait" : "line" },
				{ "v0" : 160, "v1" : 161, "curve" : 113.30451537476709, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 162, "v1" : 163, "curve" : 113.30451537476709, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 164, "v1" : 165, "curve" : 113.30451537476709, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 166, "v1" : 167, "curve" : 0, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 167, "v1" : 168, "curve" : 0, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 169, "v1" : 170, "curve" : 0, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 171, "v1" : 172, "curve" : 0, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 173, "v1" : 174, "curve" : 0, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 175, "v1" : 176, "curve" : 0, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 177, "v1" : 178, "curve" : 180, "vis" : true, "color" : "333daa", "trait" : "line" },
				{ "v0" : 179, "v1" : 180, "curve" : 180, "vis" : true, "color" : "c90076", "trait" : "line" },
				
				{ "v0" : 183, "v1" : 184, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }
		
			],
		
			"goals" : [
				{ "p0" : [-1162.45,124 ], "p1" : [-1162.45,-124 ], "team" : "red" },
				{ "p0" : [1162.45,124 ], "p1" : [1162.45,-124 ], "team" : "blue", "radius" : 0, "invMass" : 1 }
		
			],
		
			"discs" : [
				{ "radius" : 4, "invMass" : 0, "pos" : [-1311,-19 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["ball" ] },
				{ "radius" : 4, "invMass" : 0, "pos" : [-1310,29 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["ball" ] },
				{ "radius" : 0, "invMass" : 0, "pos" : [-1308,62 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["ball" ] },
				
				{ "radius" : 2.7, "pos" : [-1150,600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" },
				{ "radius" : 2.7, "pos" : [1150,-600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" },
				{ "radius" : 2.7, "pos" : [1150,600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" },
				
				{ "radius" : 5, "invMass" : 0, "pos" : [-1150,-124 ], "bCoef" : 0.5, "trait" : "goalPost" },
				{ "radius" : 5, "invMass" : 0, "pos" : [-1150,124 ], "bCoef" : 0.5, "trait" : "goalPost" },
				{ "radius" : 2, "invMass" : 0, "pos" : [-1250,-158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" },
				{ "radius" : 2, "invMass" : 0, "pos" : [-1250,158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" },
				{ "radius" : 5, "invMass" : 0, "pos" : [1150,-124 ], "bCoef" : 0.5, "trait" : "goalPost" },
				{ "radius" : 5, "invMass" : 0, "pos" : [1150,124 ], "bCoef" : 0.5, "trait" : "goalPost" },
				{ "radius" : 2, "invMass" : 0, "pos" : [1250,-158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" },
				{ "radius" : 2, "invMass" : 0, "pos" : [1250,158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" },
				
				{ "radius" : 2.7, "pos" : [-1150,-600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" },
				
				{ "radius" : 0, "pos" : [-1149,-485 ], "cMask" : ["none" ] },
				{ "radius" : 0, "pos" : [1149,-485 ], "cMask" : ["none" ] },
				{ "radius" : 0, "pos" : [-1149,-485 ], "cMask" : ["none" ] },
				{ "radius" : 0, "pos" : [1149,-485 ], "cMask" : ["none" ] },
				{ "radius" : 0, "pos" : [-1149,485 ], "cMask" : ["none" ] },
				{ "radius" : 0, "pos" : [1149,485 ], "cMask" : ["none" ] },
				{ "radius" : 0, "pos" : [-1149,485 ], "cMask" : ["none" ] },
				{ "radius" : 0, "pos" : [1149,485 ], "cMask" : ["none" ] },
				{ "radius" : 0, "pos" : [-1571.3381528950442,-350.0256462378384 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1526.0110907923024,-337.43479565374344 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1548.6746218436733,-284.55322320054483 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1500.8224810641216,-265.12635250508544 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1548.6746218436733,-209.00811969597544 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1508.3838999745697,-196.41726911188053 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1533.5656011427595,-85.61778397184536 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1514.5014298468418,7.557964630452545 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1469.1743677441,20.148815214547483 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1491.837898795471,73.03038766774608 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1452.6214580050103,83.82155837411435 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1491.837898795471,148.57549117231548 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1451.5471769263672,161.1663417564104 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1468.093178105466,256.85335191553605 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1514.5014298468418,7.557964630452545 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1469.1743677441,20.148815214547483 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1491.837898795471,73.03038766774608 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1452.6214580050103,83.82155837411435 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1491.837898795471,148.57549117231548 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1451.5471769263672,161.1663417564104 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1460.528304915022,-439.33950980501464 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1415.2012428122803,-426.7486592209197 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1437.8647738636512,-373.8670867677211 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1398.6483330731905,-363.0759160613528 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1437.8647738636512,-298.3219832631517 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1397.5740519945475,-285.7311326790568 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1488.5943298795682,-424.2270348241051 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1447.585117771372,-400.84155925364627 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1476.7254238145613,-339.3242868113565 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1340.3573581468252,-417.0490409931725 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1407.639823901832,-324.22908323042515 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1356.5544770463646,-298.68468266269355 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1447.5747549313855,-255.8308850368276 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1402.2476928286437,-243.24003445273266 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1424.9112238800146,-190.35846199953406 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1385.694783089554,-179.56729129316577 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1424.9112238800146,-114.81335849496466 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1384.620502010911,-102.22250791086978 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1464.8461549095678,-219.1291600831902 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1363.3870428777334,-232.44540946636872 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1455.1361738418339,-162.29243703498778 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1504.4356579395574,-147.18341633407394 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1476.7254238145615,-112.65443349769187 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1365.1901770354557,-121.65283288632487 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1430.3033549532033,-37.779460312275944 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1384.9762928504615,-25.188609728181007 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1407.6398239018324,27.692962725017594 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1368.4233831113718,38.484133431385885 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1407.6398239018324,103.23806622958699 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1367.3491020327288,115.82891681368187 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1488.5943298795687,-35.62053531500315 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1350.4334928940968,-31.665384719999373 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1435.7058488663788,6.103712752289709 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1379.573798937286,70.85419127049516 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1347.9187770572737,76.96826686277167 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1415.190879972294,154.36486444500224 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1369.8638178695521,166.95571502909718 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1392.527348920923,219.83728748229578 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1353.3109081304624,230.62845818866407 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1392.527348920923,295.3823909868652 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1352.2366270518194,307.97324157096006 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1415.190879972294,154.36486444500224 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1369.8638178695521,166.95571502909718 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1392.527348920923,219.83728748229578 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1353.3109081304624,230.62845818866407 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1392.527348920923,295.3823909868652 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1352.2366270518194,307.97324157096006 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1415.190879972294,154.36486444500224 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1404.4066178259168,190.70388999909784 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1422.752298882742,224.15513747684136 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1353.3109081304624,230.62845818866407 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1392.527348920923,295.3823909868652 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1352.2366270518194,307.97324157096006 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1415.190879972294,154.36486444500224 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1346.1156428995516,147.52539005364207 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1411.957673896378,258.697937433206 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1428.8732830350102,297.55513310412056 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1396.8451989154685,327.766265945957 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true },
				{ "radius" : 0, "pos" : [-1369.5080270300018,353.31066651368866 ], "color" : "FFFF00", "bCoef" : 1, "cMask" : ["wall","red","blue" ], "cGroup" : ["c3","kick" ], "gravity" : [0,0 ], "_selected" : true }
		
			],
		
			"planes" : [
				{ "normal" : [0,1 ], "dist" : -627, "bCoef" : 0, "cGroup" : ["ball" ], "trait" : "ballArea" },
				{ "normal" : [0,-1 ], "dist" : -627, "bCoef" : 0, "cGroup" : ["ball" ], "trait" : "ballArea" },
				
				{ "normal" : [0,1 ], "dist" : -670, "bCoef" : 0 },
				{ "normal" : [0,-1 ], "dist" : -669, "bCoef" : 0 },
				{ "normal" : [1,0 ], "dist" : -1300, "bCoef" : 0 },
				{ "normal" : [-1,0 ], "dist" : -1300, "bCoef" : 0.1 },
				{ "normal" : [1,0 ], "dist" : -1230, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] },
				{ "normal" : [-1,0 ], "dist" : -1230, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] }
		
			],
		
			"traits" : {
				"ballArea" : { "vis" : false, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] },
				"goalPost" : { "radius" : 5, "invMass" : 0, "bCoef" : 1, "cGroup" : ["ball" ] },
				"rightNet" : { "radius" : 0, "invMass" : 1, "bCoef" : 0, "cGroup" : ["ball","c3" ] },
				"leftNet" : { "radius" : 0, "invMass" : 1, "bCoef" : 0, "cGroup" : ["ball","c2" ] },
				"stanchion" : { "radius" : 3, "invMass" : 0, "bCoef" : 3, "cMask" : ["none" ] },
				"cornerflag" : { "radius" : 3, "invMass" : 0, "bCoef" : 0.2, "color" : "FFFF00", "cMask" : ["ball" ] },
				"reargoalNetleft" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : 10, "color" : "C7E6BD" },
				"reargoalNetright" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : -10, "color" : "C7E6BD" },
				"sidegoalNet" : { "vis" : true, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "color" : "C7E6BD" },
				"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
				"line" : { "vis" : true, "cMask" : [ ], "color" : "C7E6BD" }
		
			},
		
			"joints" : [
				
		
			],
		
			"redSpawnPoints" : [
				
		
			],
		
			"blueSpawnPoints" : [
				
		
			],
		
			"canBeStored" : false
		}`;
		
		return realSoccerMap;
	}

	/*------------------------------ END OF STADIUMS ----------------------------*/

	// ------------------------------------------------
	// Global Variables
	// ------------------------------------------------
	var roomName = "[🏟️ League Room] Vietnam Pro Haxball League";
	var roomPassword = null;
	var maxPlayers = 30;
	var roomPublic = false;
	var token = "";
	var roomLink = "";
	var gameTime = 10; //default game time if 0 is selected
	var map = "RSR";
	var superAdmins = [];

	var room = HBInit({
		roomName: roomName,
		password: roomPassword,
		maxPlayers: maxPlayers,
		public: roomPublic,
		geo: {code: "VN", lat: 25.02888, lon: 105.85464},
		noPlayer: true,
		token: token
	});


	// -------------------------------------------------
	// Classes
	// -------------------------------------------------
	class Game {
		constructor() {
			this.time = 0;
			this.paused = false;
			this.ballRadius;
			this.rsTouchTeam = 0;
			this.rsActive = true;
			this.rsReady = false;
			this.rsCorner = false;
			this.rsGoalKick = false;
			this.rsSwingTimer = 1000;
			this.rsTimer;
			this.ballOutPositionX;
			this.ballOutPositionY;
			this.throwInPosY;
			this.outStatus = "";
			this.warningCount = 0;
			this.bringThrowBack = false;
			this.extraTime = false;
			this.extraTimeCount = 0;
			this.extraTimeEnd;
			this.extraTimeAnnounced = false;
			this.lastPlayAnnounced = false;
			this.boosterState;
			this.throwinKicked = false;
			this.pushedOut;
			this.lastKickerId;
			this.lastKickerName;
			this.lastKickerTeam;
			this.secondLastKickerId;
			this.secondLastKickerName;
			this.secondLastKickerTeam;
			this.redScore = 0;
			this.blueScore = 0;
		}
		
		updateLastKicker(id, name, team) {
			this.secondLastKickerId = this.lastKickerId;
			this.secondLastKickerName = this.lastKickerName;
			this.secondLastKickerTeam = this.lastKickerTeam;
			
			this.lastKickerId = id;
			this.lastKickerName = name;
			this.lastKickerTeam = team;
		}
	}

	room.setCustomStadium(getRealSoccerMap());
	room.setScoreLimit(0);
	room.setTimeLimit(10);

	room.onRoomLink = function(url) {
		roomLink = url;
		console.log(roomLink);
	}

	room.onStadiumChange = function(newStadiumName, byPlayer) {
		if (byPlayer != null) {
			map = "custom";
		}
		else {
			map = "RSR";
		}
	}


	room.onPlayerJoin = function(player) {	
		console.log(player.name + " joined the room");
		whisper("⚽      Wᴇʟᴄᴏᴍᴇ ᴛᴏ Vietnam Pro Haxball League     ⚽", player.id, 0x61ddff, "bold", 0);
		whisper("⚽      Type !help for available commands     ⚽", player.id, 0x61e7ff, "bold", 0);
								
		displayAdminMessage();
	}

	room.onPlayerLeave = function(player) {
		displayAdminMessage();
		console.log(player.name + " left the room");

		let index = superAdmins.indexOf(player.id);
		if (index > -1) {
			sleep(100).then(() => {
				superAdmins.splice(index, 1);
			});
		}
	}

	room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
		if (byPlayer != null) {
			if (changedPlayer.id != byPlayer.id) {
				if (superAdmins.indexOf(changedPlayer.id) > -1) {
					room.kickPlayer(byPlayer.id, "You cannot remove a Super Admin", false);
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

	room.onGameStart = function(byPlayer) {
		if (map == "RSR") {
			if (byPlayer == null) {
				game = new Game();	
				announce("Game length set to " + gameTime + " minutes");
			}
			else {
				if (room.getScores().timeLimit != 0) {
					gameTime = room.getScores().timeLimit / 60;
				}
				else {
					gameTime = 10;
				}
				room.stopGame();
				room.setTimeLimit(0);			
				room.startGame();
			}
		}
	}

	room.onGameStop = function(byPlayer) {
		if (map == "RSR") {
			if (byPlayer != null) {
				room.setTimeLimit(gameTime);
			}
		}
	}

	room.onPlayerBallKick = function(player) {	
		if (map == "RSR") {
			game.rsTouchTeam = player.team;
			game.updateLastKicker(player.id, player.name, player.team);
			
			if (game.rsReady == true) {
				var players = room.getPlayerList().filter((player) => player.team != 0);
				players.forEach(function(player) {			
					if (room.getPlayerDiscProperties(player.id).invMass.toFixed(1) != 0.3) {
						room.setPlayerDiscProperties(player.id, {invMass: 0.3});
					}
				});
			}
				
			if (game.rsActive == false && game.rsReady == true && (game.rsCorner == true || game.rsGoalKick == true)) { // make game active on kick from CK/GK
				game.boosterState = true;
				
				game.rsActive = true;
				game.rsReady = false;
				room.setDiscProperties(1, {x: 2000, y: 2000 });
				room.setDiscProperties(2, {x: 2000, y: 2000 });
				room.setDiscProperties(0, {color: "0xffffff"});
				game.rsTimer = 1000000;
				game.warningCount++;	
				
				// set gravity for real soccer corners/goalkicks
				if (game.rsCorner == true) {
					if (room.getDiscProperties(0).y < 0) { //top corner
						room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/35*-1, ygravity: 0.05});
						//room.setDiscProperties(0, {xgravity: -0.08, ygravity: 0.05});
					}
					else { //bottom corner
						room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/35*-1, ygravity: -0.05});
						//room.setDiscProperties(0, {xgravity: -0.08, ygravity: -0.05});
					}
				}	
				if (game.rsGoalKick == true) {			
					room.setDiscProperties(0, {xgravity: 0, ygravity: room.getPlayerDiscProperties(player.id).yspeed/40*-1});		
				}
				
				game.rsCorner = false;
				game.rsGoalKick = false;
				game.outStatus = "";		
			}		

			if (game.outStatus == "redThrow" || game.outStatus == "blueThrow") {
				game.throwinKicked = true;
			}
		}
	}

	room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {	
		if (superAdmins.indexOf(kickedPlayer.id) > -1 && byPlayer != null) {
			room.kickPlayer(byPlayer.id, "You cannot kick/ban a Super Admin", false);
			room.clearBans();
		}
	}

	room.onPlayerChat = function(player, message) {
		if (message.startsWith("!")) {
			message = message.substr(1);
			let args = message.split(" ");
			
			if (args[0] == "admin" && args.length == 1 && allowPublicAdmin == true) {
				if (isAdminPresent() == false) {
					room.setPlayerAdmin(player.id, true);
				}
				else {
					whisper("Admin is already present or !admin command is not allowed", player.id);
				}
			}
			else if (args[0] == "admin" && args.length == 2) {
				if (args[1] == superAdminCode) {
					room.setPlayerAdmin(player.id, true);
					if (superAdmins.indexOf(player.id) === -1) {
						superAdmins.push(player.id);
					}
					announce(player.name + " has gained Super Admin");
				}
			}
			else if (args[0] == "clearbans") {
				if (player.admin) {
					room.clearBans();
					announce("Bans have been cleared by " + player.name);
				}
				else {
					whisper("Admin only command", player.id);
				}
			}
			else if (args[0] == "court" && args.length == 1) {
				whisper("Current background color is " + mapBGColor);
			}
			else if (args[0] == "court" && args.length == 2 && player.admin) {
				if (room.getScores() == null) {
					if (args[1] == "reset") {
						mapBGColor = "86A578";
						announce("Map background color reset by " + player.name);
					}
					else {
						mapBGColor = args[1];
						announce("Map background color set to " + args[1] + " by " + player.name);
					}
					room.setCustomStadium(getRealSoccerMap());				
				}
				else {
					whisper("Cannot change map background color while game in progress", player.id);
				}
			}
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
						announce("ðŸ”„ Teams have been swapped");
					}
				}
				else {
					whisper("Admin only command", player.id);
				}
			}
			else if (args[0] == "setpassword" && player.admin) {
				if (superAdmins.indexOf(player.id) > -1) {
					room.setPassword(args[1]);
					roomPassword = args[1];
					announce("Password has been changed by " + player.name);
				}
				else {
					whisper("Only Super Admins can change password", player.id);
				}
			}
			else if (args[0] == "clearpassword" && player.admin) {
				if (superAdmins.indexOf(player.id) > -1) {
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
					room.setCustomStadium(getRealSoccerMap());
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
			else if (args[0] == "help") {
				displayHelp(player.id, args[1]);
			}
			else if (args[0] == "super") {
				let superMsg = "Super Admins: ";
				superAdmins.forEach(function(id) {
					if (room.getPlayer(id) != null || room.getPlayer(id) != undefined) {
						superMsg = superMsg + room.getPlayer(id).name + ", ";
					}
				});
				if (superAdmins.length > 0) {
					superMsg = superMsg.slice(0, -2); 
				}
				else {
					superMsg = "There are no super admins present";
				}
				whisper(superMsg, player.id);
			}
			else if (args[0] == "ngu") {
				console.log(player.position)
			}
			return false;
		}
		if (message.startsWith("t ")) {
			teamMsg = message.substring(1).trim();
			if (player.team == 1) {
				var players = room.getPlayerList().filter((player) => player.team == 1);
				players.forEach(function(teamPlayer) {
					room.sendAnnouncement("[Team] " + player.name + ": " + teamMsg, teamPlayer.id, 0xED6A5A, "normal", 1);
				});
			}
			if (player.team == 2) {
				var players = room.getPlayerList().filter((player) => player.team == 2);
				players.forEach(function(teamPlayer) {
					room.sendAnnouncement("[Team] " + player.name + ": " + teamMsg, teamPlayer.id, 0x5995ED, "normal", 1);
				});
			}
			if (player.team == 0) {
				var players = room.getPlayerList().filter((player) => player.team == 0);
				players.forEach(function(teamPlayer) {
					room.sendAnnouncement("[Spec] " + player.name + ": " + teamMsg, teamPlayer.id, 0xdee7fa, "normal", 1);
				});
			}
			return false;
		}
		if (message.startsWith("@@")) {
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
						whisper("Cannot find user '" + args[0] + "'", player.id, 0xff20ff, "normal", 1);
					}
					return false;
				}
			}			
		}

	if (player.admin) {
					var players = room.getPlayerList().filter((player) => player.team == 1); // [ðŸ”´]
					room.sendAnnouncement(player.name + ": " + message,null, 0xF5EE20, "bold", 0);
				} 

	else if (player.team == 1) {
					var players = room.getPlayerList().filter((player) => player.team == 1); // [ðŸ”´]
					room.sendAnnouncement(player.name + ": " + message,null, 0xF73E44, "normal", 0);
				} 
				else if (player.team == 2) {
					var players = room.getPlayerList().filter((player) => player.team == 2); // [ðŸ”µ]
					room.sendAnnouncement(player.name + ": " + message,null, 0x1EA0F7, "normal", 0);
				}
				else if (player.team == 0) {
					var players = room.getPlayerList().filter((player) => player.team == 0);
					room.sendAnnouncement(player.name + ": " + message,null, 0xfafcff, "normal", 0);
				}
				return false;
	}
	function displayHelp(id, selection) {
		if (selection == null) {
			whisper("Commands: !rs, !rr, !bb, !admin, !setpassword, !clearpassword, !super, !clearbans, !swap, @@[player] [pm msg] , t [team chat msg], !court, !court [hexcolor], !court reset", id, null, "small");
		}
	}

	room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
		if (map == "RSR") {
			if (room.getScores() != null) {
				if (game.rsActive == false) {
					room.getPlayerList().forEach(function(player) {
						if (player != undefined) {
							if (game.rsGoalKick == true || game.rsCorner == true) {
								room.setPlayerDiscProperties(player.id, {invMass: 9999999});
							}
						}
					});
				}
			}
		}
	}

	var goalCheering = false

	room.onTeamGoal = function(team) {
		if (map == "RSR") {
			game.rsActive = false;
			let goalTime = secondsToMinutes(Math.floor(room.getScores().time));
			let scorer;
			let assister = "";
			let goalType;
			if (team == 1) {
				if (game.lastKickerTeam == 1) { //if goal type is goal
					goalType = "GOALLLLLL!";
					scorer = "⚽" + game.lastKickerName;
					avatarCelebration(game.lastKickerId, "⚽");
					goalCheering = true
					// goalCelebration(game.lastKickerId)
					
					if (game.secondLastKickerTeam == 1 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
						assister = " (Assist: " + game.secondLastKickerName + ")";
						avatarCelebration(game.secondLastKickerId, "🅰️");
						goalCelebrationAssistant(game.secondLastKickerId);
					}
				}		
				if (game.lastKickerTeam == 2) { //if goal type is owngoal
					goalType = "OWN GOALLLLLL!";
					scorer = "🐸" + game.lastKickerName;
					avatarCelebration(game.lastKickerId, "🐸");
					if (game.secondLastKickerTeam == 1) { // if owngoal was assisted
						assister = " (Assist: " + game.secondLastKickerName + ")";
						avatarCelebration(game.secondLastKickerId, "🅰️");
						goalCelebration(game.secondLastKickerId);
					}
				}
				game.redScore++;
			}
			if (team == 2) {
				if (game.lastKickerTeam == 2) { //if goal type is goal
					goalType = "GOALLLLLL!";
					scorer = "⚽" + game.lastKickerName;
					avatarCelebration(game.lastKickerId, "⚽");
					goalCelebration(game.lastKickerId);
					if (game.secondLastKickerTeam == 2 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
						assister = " (Assist: " + game.secondLastKickerName + ")";
						avatarCelebration(game.secondLastKickerId, "🅰️");
						goalCelebrationAssistant(game.secondLastKickerId);
					}
				}		
				if (game.lastKickerTeam == 1) { //if goal type is owngoal
					goalType = "OWN GOALLLLLL!";
					scorer = "🐸" + game.lastKickerName;
					avatarCelebration(game.lastKickerId, "🐸");
					if (game.secondLastKickerTeam == 2) { // if owngoal was assisted
						assister = " (Assist: " + game.secondLastKickerName + ")";
						avatarCelebration(game.secondLastKickerId, "🅰️");
						goalCelebration(game.secondLastKickerId);
					}
				}
				game.blueScore++;
			}
			announce(goalType + " 🟥 " + game.redScore + " - " + game.blueScore + " 🟦 🕒" + goalTime + " " + scorer + assister);
			
			game.lastKicker = undefined;
			game.secondLastKicker = undefined;
			game.lastKickerTeam = undefined;
			game.secondLastKickerTeam = undefined;
		}
	}

	room.onPositionsReset = function() {
		if (map == "RSR") {
			if (game.lastPlayAnnounced == true) {
				room.pauseGame(true);
				game.lastPlayAnnounced = false;
				announce("END");
			}
		}
	}

	room.onGameTick = function() {
		if (map == "RSR") {
			updateGameStatus();
			handleBallTouch();
			realSoccerRef();
			if (goalCheering == true) {
				while (disc_index < 50) {
					pos_x = room.getPlayerDiscProperties(playerID).x;
					pos_y = room.getPlayerDiscProperties(playerID).y;
					room.setDiscProperties(disc_index, {
						radius: 4,
						x: pos_x,
						y: pos_y,
						xspeed: randSth() * Math.random() * 1.5,
						yspeed: randSth() * Math.random() * 1.5
					})	
				}
				goalCheering = false
			}
		}	
	}

	function realSoccerRef() {
		blockThrowIn();
		blockGoalKick();
		removeBlock();
		if (game.time == gameTime * 60 && game.extraTimeAnnounced == false) {
			extraTime();
			game.extraTimeAnnounced = true;
		}
		
		if (game.time == game.extraTimeEnd && game.lastPlayAnnounced == false) {
			announce("Last play", null, null, null, 1);
			game.lastPlayAnnounced = true;
		}
		
		if (game.rsCorner == true || game.rsGoalKick == true) { //add extra time
			game.extraTimeCount++;
		}
		
		if (game.rsTimer < 99999 && game.paused == false && game.rsActive == false && game.rsReady == true) {
			game.rsTimer++;
		}
		
		if (game.rsSwingTimer < 150 && game.rsCorner == false && game.rsGoalKick == false) {
			game.rsSwingTimer++;
			if (game.rsSwingTimer > 5) {
				room.setDiscProperties(0, {xgravity: room.getDiscProperties(0).xgravity * 0.97, ygravity: room.getDiscProperties(0).ygravity * 0.97});
			}		
			if (game.rsSwingTimer == 150) {
				room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			}
		}
		
		
		if (game.boosterState == true) {
			game.boosterCount++;
		}
		
		if (game.boosterCount > 30) {
			game.boosterState = false;
			game.boosterCount = 0;
			room.setDiscProperties(0, {cMask: 63});
		}
		
		
		if (room.getBallPosition().x == 0 && room.getBallPosition().y == 0) {	
			game.rsActive = true;
			game.outStatus = "";
		}
		
		if (game.rsActive == false && game.rsReady == true) { //expire barrier time
			if (game.outStatus == "redThrow") {
				if (game.rsTimer == throwTimeOut - 120) { // warning indicator
					ballWarning("0xff3f34", ++game.warningCount);
				}
				if (game.rsTimer == throwTimeOut && game.bringThrowBack == false) { // switch to blue throw
					game.outStatus = "blueThrow";
					game.rsTimer = 0;				
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					sleep(100).then(() => {
						room.setDiscProperties(0, {color: "0x0fbcf9", xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY});
					});
				}
			}
			else if (game.outStatus == "blueThrow") {
				if (game.rsTimer == throwTimeOut - 120) { // warning indicator
					ballWarning("0x0fbcf9", ++game.warningCount);
				}
				if (game.rsTimer == throwTimeOut && game.bringThrowBack == false) { // switch to red throw
					game.outStatus = "redThrow";
					game.rsTimer = 0;						
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					sleep(100).then(() => {
						room.setDiscProperties(0, {color: "0xff3f34", xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY});
					});
				}
			}
			else if (game.outStatus == "blueGK" || game.outStatus == "redGK") {
				if (game.rsTimer == gkTimeOut - 120) { // warning indicator
					if (game.outStatus == "blueGK") {
						ballWarning("0x0fbcf9", ++game.warningCount);
					}
					if (game.outStatus == "redGK") {
						ballWarning("0xff3f34", ++game.warningCount);
					}
				}
				if (game.rsTimer == gkTimeOut) {
					game.outStatus = "";
					room.setDiscProperties(0, {color: "0xffffff"});
					game.rsTimer = 1000000;							
				}
			}
			else if (game.outStatus == "blueCK" || game.outStatus == "redCK") {
				if (game.rsTimer == ckTimeOut - 120) {
					if (game.outStatus == "blueCK") {
						ballWarning("0x0fbcf9", ++game.warningCount);
					}
					if (game.outStatus == "redCK") {
						ballWarning("0xff3f34", ++game.warningCount);
					}
				}
				if (game.rsTimer == ckTimeOut) {
					game.outStatus = "";
					room.setDiscProperties(1, {x: 0, y: 2000, radius: 0});
					room.setDiscProperties(2, {x: 0, y: 2000, radius: 0});
					room.setDiscProperties(0, {color: "0xffffff"});
					game.rsTimer = 1000000;							
				}
			}
		}
		
		if (game.rsActive == true) {
			if ((room.getBallPosition().y > 611.45 || room.getBallPosition().y < -611.45)) {
				game.rsActive = false;
				if (game.lastPlayAnnounced == true) {
					room.pauseGame(true);
					game.lastPlayAnnounced = false;
					announce("END");
				}
				
				room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
				
				game.ballOutPositionX = Math.round(room.getBallPosition().x * 10) / 10;
				if (room.getBallPosition().y > 611.45) {
					game.ballOutPositionY = 400485;
					game.throwInPosY = 618;
				}
				if (room.getBallPosition().y < -611.45) {
					game.ballOutPositionY = -400485;
					game.throwInPosY = -618;
				}
				if (room.getBallPosition().x > 1130) {
					game.ballOutPositionX = 1130;
				}
				if (room.getBallPosition().x < -1130) {
					game.ballOutPositionX = -1130;
				}
				
				
				if (game.rsTouchTeam == 1) {				
					room.setDiscProperties(3, {x: game.ballOutPositionX, y: game.throwInPosY, radius: 18 });
					sleep(100).then(() => {
						game.outStatus = "blueThrow";
						game.throwinKicked = false;
						game.rsTimer = 0;
						game.rsReady = true;
						room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY, xgravity: 0, ygravity: 0});
						//announce("ðŸ–ï¸ Throw In: ðŸ”µ Blue");
						room.setDiscProperties(0, {color: "0x0fbcf9"});				
					});	
					sleep(100).then(() => {
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});
				}
				else {				
					room.setDiscProperties(3, {x: game.ballOutPositionX, y: game.throwInPosY, radius: 18 });
					sleep(100).then(() => {
						game.outStatus = "redThrow";
						game.throwinKicked = false;
						game.rsTimer = 0;
						game.rsReady = true;
						room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY, xgravity: 0, ygravity: 0});
						//announce("ðŸ–ï¸ Throw In: ðŸ”´ Red");
						room.setDiscProperties(0, {color: "0xff3f34"});				
					});	
					sleep(100).then(() => {
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});
				}
			}
		
			if (room.getBallPosition().x > 1162.45 && (room.getBallPosition().y > 124 || room.getBallPosition().y < -124)) {
				game.rsActive = false;	
				if (game.lastPlayAnnounced == true) {
					room.pauseGame(true);
					game.lastPlayAnnounced = false;
					announce("END");
				}
				room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
				room.getPlayerList().forEach(function(player) {
					room.setPlayerDiscProperties(player.id, {invMass: 100000});
				});
				
				if (game.rsTouchTeam == 1) {				
					room.setDiscProperties(3, {x: 1060, y: 0, radius: 18 });
					sleep(100).then(() => {					
						game.outStatus = "blueGK";
						game.rsTimer = 0;
						game.rsReady = true;
						//announce("ðŸ¥… Goal Kick: ðŸ”µ Blue");
						game.rsGoalKick = true;
						game.rsSwingTimer = 0;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: 1060, y: 0, color: "0x0fbcf9", cMask: 268435519, xgravity: 0, ygravity: 0});
					});
					sleep(3000).then(() => {
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});
				}
				else {	
					//announce("ðŸš© Corner Kick: ðŸ”´ Red");							
					game.rsSwingTimer = 0;
					if (room.getBallPosition().y < -124) {					
						room.setDiscProperties(3, {x: 1140, y: -590, radius: 18 });
						sleep(100).then(() => {
							game.rsCorner = true;
							game.outStatus = "redCK";
							game.rsTimer = 0;
							game.rsReady = true;
							game.boosterCount = 0;
							game.boosterState = false;
							room.setDiscProperties(0, {x: 1140, y: -590, xspeed: 0, yspeed: 0, color: "0xff3f34", cMask: 268435519, xgravity: 0, ygravity: 0});
							room.setDiscProperties(2, {x: 1150, y: -670, radius: 420 });
							room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
						});
					}
					if (room.getBallPosition().y > 124) {
						room.setDiscProperties(3, {x: 1140, y: 590, radius: 18 });
						sleep(100).then(() => {
							game.rsCorner = true;
							game.outStatus = "redCK";
							game.rsTimer = 0;
							game.rsReady = true;
							game.boosterCount = 0;
							game.boosterState = false;
							room.setDiscProperties(0, {x: 1140, y: 590, xspeed: 0, yspeed: 0, color: "0xff3f34", cMask: 268435519, xgravity: 0, ygravity: 0});
							room.setDiscProperties(2, {x: 1150, y: 670, radius: 420 });
							room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
						});
					}
				}
			}
			if (room.getBallPosition().x < -1162.45 && (room.getBallPosition().y > 124 || room.getBallPosition().y < -124)) {
				game.rsActive = false;
				if (game.lastPlayAnnounced == true) {
					room.pauseGame(true);
					game.lastPlayAnnounced = false;
					announce("END");
				}
				room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
				room.getPlayerList().forEach(function(player) {
					room.setPlayerDiscProperties(player.id, {invMass: 100000});
				});
				
				if (game.rsTouchTeam == 1) {				
					//announce("ðŸš© Corner Kick: ðŸ”µ Blue");				
					game.rsSwingTimer = 0;
					if (room.getBallPosition().y < -124) {
						room.setDiscProperties(3, {x: -1140, y: -590, radius: 18 });
						sleep(100).then(() => {
							game.rsCorner = true;
							game.outStatus = "blueCK";
							game.rsTimer = 0;
							game.rsReady = true;
							game.boosterCount = 0;
							game.boosterState = false;
							room.setDiscProperties(0, {x: -1140, y: -590, xspeed: 0, yspeed: 0, color: "0x0fbcf9", cMask: 268435519, xgravity: 0, ygravity: 0});
							room.setDiscProperties(1, {x: -1150, y: -670, radius: 420 });
							room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
						});	
					}
					if (room.getBallPosition().y > 124) {
						room.setDiscProperties(3, {x: -1140, y: 590, radius: 18 });
						sleep(100).then(() => {
							game.rsCorner = true;
							game.outStatus = "blueCK";
							game.rsTimer = 0;
							game.rsReady = true;
							game.boosterCount = 0;
							game.boosterState = false;
							room.setDiscProperties(0, {x: -1140, y: 590, xspeed: 0, yspeed: 0, color: "0x0fbcf9", cMask: 268435519, xgravity: 0, ygravity: 0});
							room.setDiscProperties(1, {x: -1150, y: 670, radius: 420 });
							room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
						});		
					}				
				}
				else {				
					room.setDiscProperties(3, {x: -1060, y: 0, radius: 18 });
					sleep(100).then(() => {
						game.outStatus = "redGK";
						game.rsTimer = 0;
						game.rsReady = true;
						//announce("ðŸ¥… Goal Kick: ðŸ”´ Red");
						game.rsGoalKick = true;
						game.rsSwingTimer = 0;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: -1060, y: 0, color: "0xff3f34", cMask: 268435519, xgravity: 0, ygravity: 0});
					});
					sleep(3000).then(() => {
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});
				}
			}
		}
		
		if (game.rsActive == false && (game.outStatus == "redThrow" || game.outStatus == "blueThrow")) { 
			if ((room.getBallPosition().y > 611.45 || room.getBallPosition().y < -611.45) && (room.getBallPosition().x < game.ballOutPositionX - throwinDistance || room.getBallPosition().x > game.ballOutPositionX + throwinDistance) && game.bringThrowBack == false) { //if bad throw from run too far
				game.bringThrowBack	= true;
				if (game.outStatus == "redThrow") { //switch to blue throw
					game.rsTimer = 0;
					game.warningCount++;
					game.outStatus = "blueThrow";								
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					sleep(100).then(() => {
						room.setDiscProperties(0, {xspeed: 0, yspeed: 0, color: "0x0fbcf9", x: game.ballOutPositionX, y: game.throwInPosY});	
					});			
				}
				else if (game.outStatus == "blueThrow") { //switch to red throw
					game.rsTimer = 0;
					game.warningCount++;
					game.outStatus = "redThrow";										
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});	
					sleep(100).then(() => {
						room.setDiscProperties(0, {xspeed: 0, yspeed: 0, color: "0xff3f34", x: game.ballOutPositionX, y: game.throwInPosY});
					});
				}
					
			}
			
			if (room.getBallPosition().y < 611.45 && room.getBallPosition().y > -611.45 && game.throwinKicked == false && game.pushedOut == false) { //if bad throw from push ball back into active without kick		
				if (game.outStatus == "redThrow") { //switch to blue throw
					game.rsTimer = 0;
					game.warningCount++;
					game.outStatus = "blueThrow";								
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					sleep(100).then(() => {
						room.setDiscProperties(0, {xspeed: 0, yspeed: 0, color: "0x0fbcf9", x: game.ballOutPositionX, y: game.throwInPosY});
					});					
				}
				else if (game.outStatus == "blueThrow") { //switch to red throw
					game.rsTimer = 0;
					game.warningCount++;
					game.outStatus = "redThrow";										
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});	
					sleep(100).then(() => {
						room.setDiscProperties(0, {xspeed: 0, yspeed: 0, color: "0xff3f34", x: game.ballOutPositionX, y: game.throwInPosY});
					});
				}
				game.pushedOut = true;
			}
			
			if (room.getBallPosition().y < 611.45 && room.getBallPosition().y > -611.45 && game.throwinKicked == true) { // if throw is good
				game.outStatus = "";
				game.rsActive = true;
				game.rsReady = false;
				room.setDiscProperties(0, {color: "0xffffff"});
				game.rsTimer = 1000000;
				game.warningCount++;
			}
			
			if (room.getBallPosition().y.toFixed(1) == game.throwInPosY.toFixed(1) && room.getBallPosition().x.toFixed(1) == game.ballOutPositionX.toFixed(1)) {
				game.bringThrowBack	= false;
				game.pushedOut = false;
			}
		}
	}


	function handleBallTouch() {
		var players = room.getPlayerList();
		var ballPosition = room.getBallPosition();
		var ballRadius = game.ballRadius;
		var playerRadius = 15;
		var triggerDistance = ballRadius + playerRadius + 0.01;
		
		for (var i = 0; i < players.length; i++) { // Iterate over all the players
			var player = players[i];
			if ( player.position == null ) continue;
			var distanceToBall = pointDistance(player.position, ballPosition);
			if ( distanceToBall < triggerDistance ) {				
				game.rsTouchTeam = player.team;
				game.throwinKicked = false;
				
				if (game.rsCorner == false && room.getDiscProperties(0).xgravity != 0) {
					room.setDiscProperties(0, {xgravity: 0, ygravity:0});
					game.rsSwingTimer = 10000;
				}
			}		
		}
	}

	var created = false;
	var dis_loop = false;
	function updateGameStatus() {
		game.time = Math.floor(room.getScores().time);
		game.ballRadius = room.getDiscProperties(0).radius;
		if (created == false) {
			created = true
			sleep(30000).then(() => {
				announce("📢 Vietnam Pro Haxball League: https://discord.gg/nkxjFunJV7",null,0x333DAA)
				created = false
			});
		}
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
		room.sendAnnouncement(msg, targetId, color, style, sound);
		console.log("Announce: " + msg);
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
		if (room.getPlayer(targetId) != null) {
			console.log("Whisper -> " + room.getPlayer(targetId).name + ": " + msg);
		}
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

	function displayAdminMessage() {
		if (isAdminPresent() == false && allowPublicAdmin == true) {
			announce("Hiện không có admin, hãy ghi !admin để nắm quyền điều khiển!");
		}
	}

	function pointDistance(p1, p2) {
		var d1 = p1.x - p2.x;
		var d2 = p1.y - p2.y;
		return Math.sqrt(d1 * d1 + d2 * d2);
	}

	function sleep (time) {
	return new Promise((resolve) => setTimeout(resolve, time));
	}

	function ballWarning(origColour, warningCount) {
		sleep(200).then(() => {
			if (game.warningCount == warningCount) {
				room.setDiscProperties(0, {color: "0xffffff"});
			}
		});
		sleep(400).then(() => {
			if (game.warningCount == warningCount) {
				room.setDiscProperties(0, {color: origColour});
			}
		});
		sleep(600).then(() => {
			if (game.warningCount == warningCount) {
				room.setDiscProperties(0, {color: "0xffffff"});
			}
		});
		sleep(800).then(() => {
			if (game.warningCount == warningCount) {
				room.setDiscProperties(0, {color: origColour});
			}
		});
		sleep(1000).then(() => {
			if (game.warningCount == warningCount) {
				room.setDiscProperties(0, {color: "0xffffff"});
			}
		});
		sleep(1200).then(() => {
			if (game.warningCount == warningCount) {
				room.setDiscProperties(0, {color: origColour});
			}
		});
		sleep(1400).then(() => {
			if (game.warningCount == warningCount) {
				room.setDiscProperties(0, {color: "0xffffff"});
			}
		});
		sleep(1600).then(() => {
			if (game.warningCount == warningCount) {
				room.setDiscProperties(0, {color: origColour});
			}
		});
		sleep(1675).then(() => {
			if (game.warningCount == warningCount) {
				room.setDiscProperties(0, {color: "0xffffff"});
			}
		});
		sleep(1750).then(() => {
			if (game.warningCount == warningCount) {
				room.setDiscProperties(0, {color: origColour});
			}
		});
	}

	function extraTime() {
		var extraSeconds = Math.ceil(game.extraTimeCount / 60);
		game.extraTimeEnd = (gameTime * 60) + extraSeconds;
		announce("Extra time: " + extraSeconds + " Seconds", null, null, null, 1);
	}

	function avatarCelebration(playerId, avatar) {
		room.setPlayerAvatar(playerId, avatar);
		sleep(250).then(() => {
			room.setPlayerAvatar(playerId, null);
		});
		sleep(500).then(() => {
			room.setPlayerAvatar(playerId, avatar);
		});
		sleep(750).then(() => {
			room.setPlayerAvatar(playerId, null);
		});
		sleep(1000).then(() => {
			room.setPlayerAvatar(playerId, avatar);
		});
		sleep(1250).then(() => {
			room.setPlayerAvatar(playerId, null);
		});
		sleep(1500).then(() => {
			room.setPlayerAvatar(playerId, avatar);
		});
		sleep(1750).then(() => {
			room.setPlayerAvatar(playerId, null);
		});
		sleep(2000).then(() => {
			room.setPlayerAvatar(playerId, avatar);
		});
		sleep(2250).then(() => {
			room.setPlayerAvatar(playerId, null);
		});
		sleep(2500).then(() => {
			room.setPlayerAvatar(playerId, avatar);
		});
		sleep(2750).then(() => {
			room.setPlayerAvatar(playerId, null);
		});
		sleep(3000).then(() => {
			room.setPlayerAvatar(playerId, avatar);
		});
		sleep(3250).then(() => {
			room.setPlayerAvatar(playerId, null);
		});
	}

	function secondsToMinutes(time) {
		// Hours, minutes and seconds
		var hrs = ~~(time / 3600);
		var mins = ~~((time % 3600) / 60);
		var secs = ~~time % 60;

		// Output like "1:01" or "4:03:59" or "123:03:59"
		var ret = "";
		if (hrs > 0) {
			ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
		}
		ret += "" + mins + ":" + (secs < 10 ? "0" : "");
		ret += "" + secs;
		return ret;
	}

	function blockThrowIn() {
		var players = room.getPlayerList().filter((player) => player.team != 0);
		if (room.getBallPosition().y < 0) { // top throw line
			if (game.outStatus == "redThrow") {
				players.forEach(function(player) {
					if (player.team == 2 && room.getPlayerDiscProperties(player.id).y < 0) {
						if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
							room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
						}
						if (player.position.y < -485) {
							room.setPlayerDiscProperties(player.id, {y: -470});
						}
					}
					if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
						room.setPlayerDiscProperties(player.id, {cGroup: 2});
					}
					if (room.getDiscProperties(17).x != 1149) { // show top red line
						room.setDiscProperties(17, {x: 1149});
					}
					if (room.getDiscProperties(19).x != -1149) { // hide top blue line
						room.setDiscProperties(19, {x: -1149});
					}
				});
			}
			if (game.outStatus == "blueThrow") {
				players.forEach(function(player) {
					if (player.team == 1 && room.getPlayerDiscProperties(player.id).y < 0) {
						if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
							room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
						}
						if (player.position.y < -485) {
							room.setPlayerDiscProperties(player.id, {y: -470});
						}
					}
					if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
						room.setPlayerDiscProperties(player.id, {cGroup: 2});
					}
					if (room.getDiscProperties(19).x != 1149) { // show top blue line
						room.setDiscProperties(19, {x: 1149});
					}
					if (room.getDiscProperties(17).x != -1149) { // hide top red line
						room.setDiscProperties(17, {x: -1149});
					}
				});
			}
		}
		if (room.getBallPosition().y > 0) { // bottom throw line
			if (game.outStatus == "redThrow") {
				players.forEach(function(player) {
					if (player.team == 2 && room.getPlayerDiscProperties(player.id).y > 0) {
						if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
							room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
						}
						if (player.position.y > 485) {
							room.setPlayerDiscProperties(player.id, {y: 470});
						}
					}
					if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
						room.setPlayerDiscProperties(player.id, {cGroup: 2});
					}
					if (room.getDiscProperties(21).x != 1149) { // show bottom red line
						room.setDiscProperties(21, {x: 1149});
					}
					if (room.getDiscProperties(23).x != -1149) { // hide bottom blue line
						room.setDiscProperties(23, {x: -1149});
					}
				});
			}
			if (game.outStatus == "blueThrow") {
				players.forEach(function(player) {
					if (player.team == 1 && room.getPlayerDiscProperties(player.id).y > 0) {
						if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
							room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
						}
						if (player.position.y > 485) {
							room.setPlayerDiscProperties(player.id, {y: 470});
						}
					}
					if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
						room.setPlayerDiscProperties(player.id, {cGroup: 2});
					}
					if (room.getDiscProperties(23).x != 1149) { // show bottom blue line
						room.setDiscProperties(23, {x: 1149});
					}
					if (room.getDiscProperties(21).x != -1149) { // hide bottom red line
						room.setDiscProperties(21, {x: -1149});
					}
				});
			}		
		}	
	}


	function blockGoalKick() {
		var players = room.getPlayerList().filter((player) => player.team != 0);
		if (room.getBallPosition().x < 0) { // left side red goal kick
			if (game.outStatus == "redGK") {
				players.forEach(function(player) {
					if (player.team == 2 && room.getPlayerDiscProperties(player.id).x < 0) {
						if (room.getPlayerDiscProperties(player.id).cGroup != 268435462) {
							room.setPlayerDiscProperties(player.id, {cGroup: 268435462});
						}
						if (player.position.x < -840 && player.position.y > -320 && player.position.y < 320) {
							room.setPlayerDiscProperties(player.id, {x: -825});
						}
					}
					if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
						room.setPlayerDiscProperties(player.id, {cGroup: 2});
					}
				});
			}
		}
		if (room.getBallPosition().x > 0) { // right side blue goal kick
			if (game.outStatus == "blueGK") {
				players.forEach(function(player) {
					if (player.team == 1 && room.getPlayerDiscProperties(player.id).x > 0) {
						if (room.getPlayerDiscProperties(player.id).cGroup != 268435462) {
							room.setPlayerDiscProperties(player.id, {cGroup: 268435462});
						}
						if (player.position.x > 840 && player.position.y > -320 && player.position.y < 320) {
							room.setPlayerDiscProperties(player.id, {x: 825});
						}
					}
					if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
						room.setPlayerDiscProperties(player.id, {cGroup: 2});
					}
				});
			}		
		}	
	}



	function removeBlock() {
		var players = room.getPlayerList().filter((player) => player.team != 0);
		if (game.outStatus == "") {
			players.forEach(function(player) {
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 4) {
					room.setPlayerDiscProperties(player.id, {cGroup: 4});
				}
			});
			if (room.getDiscProperties(17).x != -1149) { // hide top red line
				room.setDiscProperties(17, {x: -1149});
			}
			if (room.getDiscProperties(19).x != -1149) { // hide top blue line
				room.setDiscProperties(19, {x: -1149});
			}
			if (room.getDiscProperties(21).x != -1149) { // hide bottom red line
				room.setDiscProperties(21, {x: -1149});
			}
			if (room.getDiscProperties(23).x != -1149) { // hide bottom blue line
				room.setDiscProperties(23, {x: -1149});
			}		
		}
	}

	var celebrate_color = [0xff0000, 0xf1c232, 0xffe084, 0xcefc67, 0x5dea45, 0x5deaf8, 0x1d97f4, 0x003df8, 0xd500f8]

	function goalCelebrationCircle(playerID) {
		let pos_x = room.getPlayerDiscProperties(playerID).x;
		let pos_y = room.getPlayerDiscProperties(playerID).y;
		let cnt = -1
		let value = 0 * Math.PI / 180.0;
		setTimeout(() => {
			for (let i = 25; i <= 46; i++) {    
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
		}, 5);
		setTimeout(() => {
			value = 5 * Math.PI / 180.0;
		for (let i = 47; i <= 57; i++) {    
			value += 36 * Math.PI / 180.0
			cnt = (cnt + 1) % celebrate_color.length
			pos_x = room.getPlayerDiscProperties(playerID).x;
			pos_y = room.getPlayerDiscProperties(playerID).y;
			room.setDiscProperties(i, {
			radius: 4, 
			x: pos_x + Math.cos(value), 
			y: pos_y + Math.sin(value),
			xspeed: 1.1 * Math.cos(value),
			yspeed: 1.1 * Math.sin(value),
			color: celebrate_color[cnt].toString(),
			})
		}
		}, 4);
		setTimeout(() => {
			value = 20 * Math.PI / 180.0;
		for (let i = 58; i <= 63; i++) {    
			value += 72 * Math.PI / 180.0
			cnt = (cnt + 1) % celebrate_color.length
			pos_x = room.getPlayerDiscProperties(playerID).x;
			pos_y = room.getPlayerDiscProperties(playerID).y;
			room.setDiscProperties(i, {
			radius: 4, 
			x: pos_x + Math.cos(value), 
			y: pos_y + Math.sin(value),
			xspeed: 0.7 * Math.cos(value),
			yspeed: 0.7 * Math.sin(value),
			color: celebrate_color[cnt].toString(),
			})
		}
		}, 3);
		setTimeout(() => {
			for (let i = 25; i <= 63; i++) {
				room.setDiscProperties(i, { radius: 0, x: -1488, y: -500  })
			}
		}, 1850);
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

	var disc_index = 24

	function goalCelebration(playerID) {
		let pos_x;
		let pos_y;
			for (let i = 24; i <= 50; i++) {
				sleep(1).then(() => {
				
				});
			}
		
	}

	function randSth() {
		let rand = Math.random()
		if (rand > 0.5) {
			return 1
		}
		else {
			return -1
		}
	}