		// ===============================|  RSR  |===============================
		//		Version: 1.1.5
		//		Build Date: 20-April-21
		//		Author: Kuma @ hbanz
		//		Website: hbanz.org/realsoccer
		//		* Real Soccer Revolution (RSR)
		//      Changelog:
		//		1.0 Official Release
		//		1.1 Powershot mode added with toggle (credit to Winky)
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
		var superAdminCode = "ducdaydz"; // !admin 505050
		var allowPublicAdmin = false; // if true then !admin command is enabled
		var powerShotMode = true;
		var bikick = [];
		var votekickdangdienra = false;
		var kick_count = 0;
		var nonkick_count = 0;
		var davote = [];
		var ids = [];
		var admincontrol = false;
		var logged = [];

		/*-------------------------------- STADIUMS ---------------------------------*/
		function getRealSoccerMap() {
			var realSoccerMap = `{

			"name" : "Futsal | 8v8",

			"width" : 1500,

			"height" : 1100,

			"spawnDistance" : 310,

			"bg" : { "type" : "grass", "width" : 1200, "height" : 600, "kickOffRadius" : 150, "cornerRadius" : 0 },

			"vertexes" : [
				/* 0 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 1 */ { "x" : -1200, "y" : 150, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 2 */ { "x" : -1200, "y" : -150, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 3 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 4 */ { "x" : 1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 5 */ { "x" : 1200, "y" : 150, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 6 */ { "x" : 1200, "y" : -150, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 7 */ { "x" : 1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
				
				/* 8 */ { "x" : 0, "y" : 616, "trait" : "kickOffBarrier" },
				/* 9 */ { "x" : 0, "y" : 150, "trait" : "kickOffBarrier" },
				
				/* 10 */ { "x" : 0, "y" : -150, "trait" : "line" },
				
				/* 11 */ { "x" : 0, "y" : -616, "trait" : "kickOffBarrier" },
				
				/* 12 */ { "x" : -1250, "y" : -150, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },
				/* 13 */ { "x" : 1250, "y" : -150, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },
				/* 14 */ { "x" : -1250, "y" : 150, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },
				/* 15 */ { "x" : 1250, "y" : 150, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },
				
				/* 16 */ { "x" : -1200, "y" : -400, "trait" : "line" },
				/* 17 */ { "x" : -1200, "y" : 400, "trait" : "line", "curve" : 0 },
				
				/* 18 */ { "x" : 1200, "y" : 600, "bCoef" : 1, "trait" : "ballArea" },
				/* 19 */ { "x" : 1200, "y" : -600, "bCoef" : 1, "trait" : "ballArea" },
				
				/* 20 */ { "x" : 0, "y" : 600, "bCoef" : 0, "trait" : "line" },
				/* 21 */ { "x" : 0, "y" : -600, "bCoef" : 0, "trait" : "line" },
				
				/* 22 */ { "x" : 0, "y" : 150, "trait" : "kickOffBarrier" },
				/* 23 */ { "x" : 0, "y" : -150, "trait" : "kickOffBarrier" },
				
				/* 24 */ { "x" : 1209, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 25 */ { "x" : -1209, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
				/* 26 */ { "x" : -1209, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF", "vis" : false },
				/* 27 */ { "x" : 1209, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
				
				/* 28 */ { "x" : -1209, "y" : 150, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "color" : "FFFFFF", "vis" : false },
				
				/* 29 */ { "x" : -1209, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF", "vis" : false },
				
				/* 30 */ { "x" : -1209, "y" : 150, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "color" : "FFFFFF", "vis" : false },
				
				/* 31 */ { "x" : -1209, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF", "vis" : false },
				
				/* 32 */ { "x" : -1209, "y" : 150, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "color" : "FFFFFF", "vis" : false },
				
				/* 33 */ { "x" : -1209, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF", "vis" : false },
				
				/* 34 */ { "x" : -1209, "y" : 150, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "color" : "FFFFFF", "vis" : false },
				
				/* 35 */ { "x" : -1209, "y" : -151, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF", "vis" : false },
				
				/* 36 */ { "x" : -1209, "y" : -601, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "color" : "FFFFFF", "vis" : false },
				
				/* 37 */ { "x" : 1209, "y" : 602, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF", "vis" : false },
				
				/* 38 */ { "x" : 1209, "y" : 152, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "color" : "FFFFFF", "vis" : false },
				
				/* 39 */ { "x" : 1209, "y" : 602, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF", "vis" : false },
				
				/* 40 */ { "x" : 1209, "y" : 152, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "color" : "FFFFFF", "vis" : false },
				
				/* 41 */ { "x" : 1209, "y" : -152, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF", "vis" : false },
				
				/* 42 */ { "x" : 1209, "y" : -602, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "color" : "FFFFFF", "vis" : false },
				/* 43 */ { "x" : -750, "y" : 400, "trait" : "line", "curve" : 0 },
				/* 44 */ { "x" : -750, "y" : -400, "trait" : "line" },
				/* 45 */ { "x" : -1200, "y" : -250, "trait" : "line" },
				/* 46 */ { "x" : -1000, "y" : -250, "trait" : "line" },
				/* 47 */ { "x" : -1200, "y" : -250, "trait" : "line" },
				/* 48 */ { "x" : -1000, "y" : -250, "trait" : "line" },
				/* 49 */ { "x" : -1200, "y" : 252, "trait" : "line", "vis" : true },
				/* 50 */ { "x" : -997, "y" : 250, "trait" : "line", "vis" : true },
				/* 51 */ { "x" : -1200, "y" : -400, "trait" : "line" },
				/* 52 */ { "x" : -1200, "y" : 400, "trait" : "line", "curve" : 0 },
				/* 53 */ { "x" : -750, "y" : 400, "trait" : "line", "curve" : 0 },
				/* 54 */ { "x" : -750, "y" : -400, "trait" : "line" },
				/* 55 */ { "x" : -1200, "y" : -250, "trait" : "line" },
				/* 56 */ { "x" : -1000, "y" : -250, "trait" : "line" },
				/* 57 */ { "x" : -1200, "y" : -250, "trait" : "line" },
				/* 58 */ { "x" : -1000, "y" : -250, "trait" : "line" },
				/* 59 */ { "x" : -1200, "y" : 252, "trait" : "line", "vis" : true },
				/* 60 */ { "x" : -997, "y" : 250, "trait" : "line", "vis" : true },
				/* 61 */ { "x" : 1197.3164233813563, "y" : 400, "trait" : "line" },
				/* 62 */ { "x" : 1197.9568115238865, "y" : -400, "trait" : "line", "curve" : 0 },
				/* 63 */ { "x" : 750, "y" : -400, "trait" : "line", "curve" : 0 },
				/* 64 */ { "x" : 750, "y" : 400, "trait" : "line" },
				/* 65 */ { "x" : -998, "y" : 38, "trait" : "line", "vis" : true, "color" : "b6d7a8" },
				/* 66 */ { "x" : -998, "y" : -32, "trait" : "line", "vis" : true, "color" : "b6d7a8" },
				/* 67 */ { "x" : 1197.4137330849967, "y" : 250, "trait" : "line" },
				/* 68 */ { "x" : 997.4143773164138, "y" : 250, "trait" : "line" },
				/* 69 */ { "x" : 1197.4137330849967, "y" : 250, "trait" : "line" },
				/* 70 */ { "x" : 997.4143773164138, "y" : 250, "trait" : "line" },
				/* 71 */ { "x" : 1198.6878941130396, "y" : -250, "trait" : "line", "vis" : true },
				/* 72 */ { "x" : 995.6834716691703, "y" : -250, "trait" : "line", "vis" : true },
				/* 73 */ { "x" : 996.1453765397562, "y" : -43.12807582462415, "trait" : "line", "vis" : true, "color" : "b6d7a8" },
				/* 74 */ { "x" : 995.9677046832566, "y" : 26.871698694379894, "trait" : "line", "vis" : true, "color" : "b6d7a8" },
				
				/* 75 */ { "x" : -869, "y" : 1, "trait" : "kickOffBarrier" },
				
				/* 76 */ { "x" : -869, "y" : -9, "trait" : "line" },
				
				/* 77 */ { "x" : -868, "y" : 1, "trait" : "kickOffBarrier" },
				/* 78 */ { "x" : -869, "y" : -9, "trait" : "kickOffBarrier" },
				/* 79 */ { "x" : 861, "y" : -3, "trait" : "kickOffBarrier" },
				
				/* 80 */ { "x" : 861, "y" : -13, "trait" : "line" },
				
				/* 81 */ { "x" : 862, "y" : -3, "trait" : "kickOffBarrier" },
				/* 82 */ { "x" : 861, "y" : -13, "trait" : "kickOffBarrier" }

			],

			"segments" : [
				{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },
				{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },
				{ "v0" : 4, "v1" : 5, "trait" : "ballArea" },
				{ "v0" : 6, "v1" : 7, "trait" : "ballArea" },
				
				{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier" },
				{ "v0" : 9, "v1" : 10, "curve" : 180, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
				{ "v0" : 9, "v1" : 10, "curve" : -180, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
				{ "v0" : 10, "v1" : 11, "trait" : "kickOffBarrier" },
				
				{ "v0" : 2, "v1" : 12, "curve" : -35, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },
				{ "v0" : 6, "v1" : 13, "curve" : 35, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },
				{ "v0" : 1, "v1" : 14, "curve" : 35, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },
				{ "v0" : 5, "v1" : 15, "curve" : -35, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet" },
				{ "v0" : 12, "v1" : 14, "curve" : -35, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : -585 },
				{ "v0" : 13, "v1" : 15, "curve" : 35, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "x" : 585 },
				
				{ "v0" : 1, "v1" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
				{ "v0" : 5, "v1" : 4, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
				{ "v0" : 2, "v1" : 3, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
				{ "v0" : 6, "v1" : 7, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
				{ "v0" : 0, "v1" : 18, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "y" : 600 },
				{ "v0" : 3, "v1" : 19, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "y" : -600 },
				
				{ "v0" : 20, "v1" : 21, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 10, "v1" : 9, "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 23, "v1" : 22, "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 2, "v1" : 1, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 6, "v1" : 5, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 26, "v1" : 28, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line" },
				{ "v0" : 29, "v1" : 30, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line" },
				{ "v0" : 31, "v1" : 32, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line" },
				{ "v0" : 33, "v1" : 34, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line" },
				{ "v0" : 35, "v1" : 36, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line" },
				{ "v0" : 37, "v1" : 38, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "x" : 1209 },
				{ "v0" : 39, "v1" : 40, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "x" : 1209 },
				{ "v0" : 41, "v1" : 42, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line", "x" : 1209 },
				{ "v0" : 17, "v1" : 43, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 16, "v1" : 44, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 44, "v1" : 43, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 45, "v1" : 46, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 50, "v1" : 49, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 52, "v1" : 53, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 51, "v1" : 54, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 54, "v1" : 53, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 55, "v1" : 56, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 60, "v1" : 59, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 62, "v1" : 63, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "y" : -400 },
				{ "v0" : 61, "v1" : 64, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 64, "v1" : 63, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "x" : 750 },
				{ "v0" : 60, "v1" : 65, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 58, "v1" : 66, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 66, "v1" : 65, "curve" : 0, "vis" : true, "color" : "b6d7a8", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 67, "v1" : 68, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "y" : 250 },
				{ "v0" : 72, "v1" : 71, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "y" : -250 },
				{ "v0" : 72, "v1" : 73, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 70, "v1" : 74, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 74, "v1" : 73, "curve" : 0, "vis" : true, "color" : "b6d7a8", "bCoef" : 0, "trait" : "line" },
				
				{ "v0" : 75, "v1" : 76, "curve" : 180, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
				{ "v0" : 75, "v1" : 76, "curve" : -180, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
				
				{ "v0" : 76, "v1" : 75, "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 78, "v1" : 77, "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				
				{ "v0" : 79, "v1" : 80, "curve" : 180, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
				{ "v0" : 79, "v1" : 80, "curve" : -180, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
				
				{ "v0" : 80, "v1" : 79, "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
				{ "v0" : 82, "v1" : 81, "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" }

			],

			"goals" : [
				{ "p0" : [-1209,-150 ], "p1" : [-1209,150 ], "team" : "red" },
				{ "p0" : [1209,150 ], "p1" : [1209,-150 ], "team" : "blue" }

			],

			"discs" : [
				{ "radius" : 5, "pos" : [-1200,150 ], "color" : "FFFFFF", "trait" : "goalPost" },
				{ "radius" : 5, "pos" : [-1200,-150 ], "color" : "FFFFFF", "trait" : "goalPost" },
				{ "radius" : 5, "pos" : [1200,150 ], "color" : "FFFFFF", "trait" : "goalPost" },
				{ "radius" : 5, "pos" : [1200,-150 ], "color" : "FFFFFF", "trait" : "goalPost" }

			],

			"planes" : [
				{ "normal" : [0,1 ], "dist" : -600, "trait" : "ballArea" },
				{ "normal" : [0,-1 ], "dist" : -600, "trait" : "ballArea" },
				
				{ "normal" : [0,1 ], "dist" : -1000, "bCoef" : 0.2, "cMask" : ["all" ] },
				{ "normal" : [0,-1 ], "dist" : -1000, "bCoef" : 0.2, "cMask" : ["all" ] },
				{ "normal" : [1,0 ], "dist" : -1400, "bCoef" : 0.2, "cMask" : ["all" ] },
				{ "normal" : [-1,0 ], "dist" : -1400, "bCoef" : 0.2, "cMask" : ["all" ] }

			],

			"traits" : {
				"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
				"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 1 },
				"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["all" ] },
				"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
				"line" : { "vis" : true, "bCoef" : 0, "cMask" : ["" ] },
				"arco" : { "radius" : 2, "cMask" : ["n/d" ], "color" : "cccccc" }

			},

			"playerPhysics" : {
				"acceleration" : 0.13,
				"kickingAcceleration" : 0.1,
				"kickStrength" : 7

			},

			"ballPhysics" : {
				"radius" : 6.7,
				"color" : "9CF0E5",
				"invMass" : 1.05

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
		var roomName = "?????????? HaxViet Futsal Powershot ";
		var roomPassword = null;
		var maxPlayers = 30;
		var roomPublic = false;
		var token = "";
		var roomLink = "";
		var gameTime = 5; //default game time if 0 is selected
		var map = "RSR";
		var superAdmins = [];

		var room = HBInit({
			roomName: roomName,
			password: roomPassword,
			maxPlayers: maxPlayers,
			public: roomPublic,
			geo: {code: "VN", lat: 10.8142, lon: 106.6438},
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
				this.powershotCounter = 0;
				this.powershotID = 0;
				this.powershotTrigger = false;
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
		room.setScoreLimit(5);
		room.setTimeLimit(5);

		room.setTeamsLock(true);
		room.onRoomLink = function(url) {
			roomLink = url;
			console.log(roomLink);
			playtaixiu(3);
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
			whisper("???      ???????????????????? ?????? ??????????????????????????? ???????????????????????? ???????????????????????????????????                 ???", player.id, 0x61ddff, "bold", 0);
			whisper("???      Type !help for available commands     ???", player.id, 0x61e7ff, "bold", 0); 
			announce("???     Nh???p !teamred ho???c !teamblue ????? ch???n team     ???", player.pm, 0xfff900, "bold", 1); 
			announce("???     Map Futsal Powershot ???????c l???y ?? t?????ng t??? NCN Team!     ???", player.pm, 0x61e7ff, "bold",0 ); 
			whisper(" Nh???p !shop ????? d??ng m??? c???a h??ng c???a Room!",player.id,0x61ddff,'bold',0);
			if (ids[player.id] == undefined) {ids[player.id] = player.name; } 	
			dash_object[player.id] = 0; 
			addValue(player.name);
			var playerData = localStorage.getItem(player.name);
			if (playerData) {
				whisper("??????: T??i kho???n ???? t???n t???i. !dangnhap matkhau ????? ????ng nh???p",player.id, 0xFF4C4C, 'bold',1);
			}
			else {
				whisper("??????: T??i kho???n KH??NG t???n t???i. !dangky matkhau ????? ????ng k??",player.id, 0xFF4C4C, 'bold',1);
			}	
			displayAdminMessage();
		}

		room.onPlayerLeave = function(player) {
			displayAdminMessage();
			console.log(player.name + " left the room");
			delete dash_object[player.id];
			ids[player.id] = undefined;
			if (logged.includes(player.name)) {
				let vitri = logged.indexOf(player.name);
				logged.splice(vitri,1);
				console.log(logged);
			}
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
				room.setDiscProperties(0, {invMass: 1.05});
					game = new Game();	
					announce("Game length set to " + gameTime + " minutes");
			}
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
		room.onTeamVictory = function () {
			endGame();
		}
		room.onGameStop = function(byPlayer) {
			if (map == "RSR") {
				if (byPlayer == null) {
					announce("Tr???n ?????u s??? b???t ?????u sau 10 gi??y!");
					sleep(10000).then(() => {
						room.startGame();
					});
				}
			}
		}
			

		room.onPlayerBallKick = function(player) {	
			if (map == "RSR") {
				game.rsTouchTeam = player.team;
				game.updateLastKicker(player.id, player.name, player.team);
				
				//=========== POWERSHOT CODE ===========
				if (powerShotMode == true) {
					if (game.powershotCounter > 90) {
						room.setDiscProperties(0, {xgravity: 0 , ygravity: room.getPlayerDiscProperties(player.id).yspeed/22*-1});
							game.rsSwingTimer = 1000000;
							room.sendAnnouncement( player.name + " ???? th???c hi???n m???t c?? s??t m???nh!", player.pm, 0x33dddd, "bold", 1);
							sleep(875).then(() => {
								room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
								});	
					
					}
					game.powershotCounter = 0;
					game.powershotID = 0;
					game.powershotTrigger = false;
					if (parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) != 1.05) {
						room.setDiscProperties(0, {invMass: 1.05, color: '0x9CF0E5'});
					}
				}
				//=========== POWERSHOT CODE ===========
				
				
			}
		}

		room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {	
			if (superAdmins.indexOf(kickedPlayer.id) > -1 && byPlayer != null) {
				room.kickPlayer(byPlayer.id, "You cannot kick/ban a Super Admin", false);
				room.clearBans();
			}
		}

		room.onPlayerChat = function(player, message) {
			console.log(player.name + ": " + message);
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
							announce("???? Teams have been swapped");
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
				else if ((args[0] == "powershot" || args[0] == "ps") && player.admin) {
					if (powerShotMode == false) {
						powerShotMode = true;
						announce("POWERSHOT MODE ACTIVATED BY " + player.name, null, 0x00FF00);
					}
					else {
						powerShotMode = false;
						announce("POWERSHOT MODE DEACTIVATED BY " + player.name, null, 0xFF0000);
					}
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
				else if (args[0] == "spec" ) { // team mode

						room.setPlayerTeam(player.id,0)
						whisper('B???n ???? ???????c di chuy???n sang Spectators', player.id);
				   
				}
				
				else if (args[0] == "teamred" && admincontrol == false) { // team mode
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
					if (Red_Count < 6){
						room.setPlayerTeam(player.id,1)
						whisper('B???n ???? ???????c di chuy???n sang ?????i RED', player.id);
					}
					else if (Red_Count >= 6) { // RedPlayer_Count
						whisper('?????i RED ???? c?? ????? ng?????i ch??i', player.id);
					}	
				}
				else if (args[0] == "teamblue" && admincontrol == false) { // team mode

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
					if (Blue_Count < 8){
						room.setPlayerTeam(player.id,2)
						whisper('B???n ???? ???????c di chuy???n sang ?????i BLUE', player.id);
					}
					else if (Blue_Count >= 8) { // RedPlayer_Count
						whisper('?????i BLUE ???? c?? ????? ng?????i ch??i', player.id); 
					}
				}	
				else if (args[0] == "ids") {
					for (var i = 0; i < ids.length; i++) {
						if (ids[i] != undefined) {
						whisper("ID: " + i + " T??n: " + ids[i],player.id);
					}
					}		
				}
				else if (args[0] ==  "votekick" || args[0] == "kickno" || args[0] == "dungkickno"  || args[0] == "huyvotekick") {
					if (args[0] == "votekick") {
						if (votekickdangdienra == false) {
						var ID = parseInt(args[1].toLowerCase());
						if(isNaN(ID)){
						room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i n??y, nh???p !ids ????? bi???t ID c???a ng?????i ch??i ",player.id, 0xd12411, 'bold', 1);
						return false;
						}
						else {
						var p = room.getPlayerList().find(x => x.id == ID);
						}
						if(!p){
							room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i n??y",player.id, 0xd12411,'bold',1);
							return false;
						}
						else {
							bikick[0] = p.id;
							bikick[1] =  p.name;
							announce("????: " + player.name + " ???? m??? votekick ????? kick " + p.name,null, 0x28fa0c, 'bold');
							announce("????: Nh???p !kickno ????? ?????ng ?? kick ho???c !dungkickno ????? kh??ng ?????ng ?? kick",null, 0x28fa0c, 'bold');
							announce("????: ?????m ng?????c 30s x??? l??",null, 0x28fa0c, 'bold');
							votekickdangdienra = true;
							setTimeout(function() {
							if (p.admin) {
							announce ("????: X??? L?? Votekick",null, 0x28fa0c, 'bold');
							announce("????: ????i kick Admin ?? nh??c ?!",player.pm,0x28fa0c);
							kick_count = 0;
							nonkick_count = 0;
							votekickdangdienra = false;
							davote = [];
							}					
							else if (bikick[0] == "Khongco") {
								announce ("????: X??? L?? Votekick",null, 0x28fa0c, 'bold');
								announce("????: Admin ???? h???y votekick",player.pm,0x28fa0c);
								kick_count = 0;
								nonkick_count = 0;
								votekickdangdienra = false;
								davote = [];
							}
							else if (kick_count > nonkick_count && bikick[0] != undefined) {
								announce ("????: X??? L?? Votekick",null, 0x28fa0c, 'bold');
								announce ("????: S??? phi???u ?????ng ?? kick:        " + kick_count);
								announce ("????: S??? phi???u kh??ng ?????ng ?? kick:  " + nonkick_count);
								announce ("????: M???i " + bikick[1] + " tr??n tr???i trong 5s", null, 0x13FFFF, 'bold');
								sleep(5000).then(() => {
								room.kickPlayer(p.id,"B??? votekick");
								announce ("Ng?????i ch??i ???? b??? kick do s??? phi???u kick nhi???u h??n",null, 0x28fa0c, 'bold');
								});
								kick_count = 0;
								nonkick_count = 0;
								votekickdangdienra = false;
								davote = [];
							}
							else if (kick_count <= nonkick_count && bikick[0] != undefined) {
								announce ("????: X??? L?? Votekick",null, 0x28fa0c, 'bold');
								announce ("????: S??? phi???u ?????ng ?? kick:        " + kick_count);
								announce ("????: S??? phi???u kh??ng ?????ng ?? kick:  " + nonkick_count);
								announce ("????: Ng?????i ch??i kh??ng b??? kick do s??? phi???u b???ng nhau ho???c s??? phi???u kick ??t h??n",null, 0x28fa0c, 'bold');
								kick_count = 0;
								nonkick_count = 0;
								votekickdangdienra = false;
								davote = [];
								}
							},30000); 
							return false;			
						}			
						return false;
					}
					else {whisper("??ang c?? votekick kh??c ??ang di???n ra",player.id);}
					return false;
					}
					if (args[0] == "huyvotekick" && player.admin) {
					bikick[0]= "Khongco";
					whisper("B???n ???? h???y votekick, votekick s??? t??? ?????ng b??? h???y khi th???i gian h???t",player.id);
					}
					else if (args[0] == "kickno") {
						if (votekickdangdienra == true) {
							if (davote.includes(player.id) == false) {
							kick_count +=1;
							announce("????: " + player.name + " ???? ?????ng ?? kick " + bikick[1], null, 0x28fa0c, 'bold');
							davote.push(player.id);
							return false;
						}
						else {whisper("B???n ???? vote r???i!",player.id); }
						}
						else {	whisper("Kh??ng c?? cu???c votekick n??o ??ang di???n ra c???. Nh???p !votekick id ????? m??? votekick",player.id);}
					}
					else if (args[0] == "dungkickno") {
						if (votekickdangdienra == true) {
							if (davote.includes(player.id) == false) {
							nonkick_count +=1;
							announce("????: " + player.name + " ???? kh??ng ?????ng ?? kick " + bikick[1], null, 0x28fa0c, 'bold');
							davote.push(player.id);
							return false;
						}
						else {whisper("B???n ???? vote r???i!",player.id); }
						}
						else { whisper("Kh??ng c?? cu???c votekick n??o ??ang di???n ra c???. Nh???p !votekick id ????? m??? votekick",player.id);}
					}
					
				}	
				else if (args[0] == "admin_takecontrol") {
					if (player.admin) {
						if (admincontrol == false ) {
							admincontrol = true;
							announce("Admin ???? gi??nh quy???n ??i???u khi???n", player.pm, 0xFFFFFF, 'bold',1 );
						} 
						else { 
							admincontrol = false;
							announce("Admin ???? h???t gi??nh quy???n ??i???u khi???n", player.pm, 0xFFFFFF, 'bold',1 );
						}
					}			
				}
				else if (args[0] == "dangky") {
					var playerData = localStorage.getItem(player.name);
					if (playerData) { whisper("T??i kho???n ???? t???n t???i. Nh???p !dangnhap matkhau ????? ????ng nh???p!",player.id); }
					else {
						var dataForm = {
							'playerName' : player.name,
							'pass' : args[1],
							'games' : 0,
							'win' : 0,
							'lose' : 0,
							'draw' : 0,
							'goals' : 0,
							'assists' : 0,
							'owngoals' : 0,
							'points' : 0,
							'money' : 0,
							'level' : 'E',
						}
						localStorage.setItem(player.name, JSON.stringify(dataForm));
						addValue(player.name);
						whisper("????ng k?? th??nh c??ng! Nh???p !dangnhap matkhau ????? ????ng nh???p", player.id, null, 'bold');
					}			
				}
				else if (args[0] == "dangnhap") {
					var playerData = localStorage.getItem(player.name);
					if (playerData) {
						var data = JSON.parse(localStorage.getItem(player.name));
						if (args[1] == data.pass) {
							if (!logged.includes(player.name)) {
								announce("???? Ng?????i ch??i " + player.name + " [Rank " + data.level + "]" + " ???? ????ng nh???p",null,0xead1dc);
								updateRank();
								addValue(player.name);
								logged.push(player.name);
								console.log(logged);
							}
							else {
								whisper("B???n ???? ????ng nh???p r???i!",player.id, null, 'bold');
							}
						}
						else {
							whisper("Sai m???t kh???u!",player.id, null, 'bold');
						}
					}
					else {
						whisper("T??i kho???n kh??ng t???n t???i",player.id, null, 'bold');
					}
				}
				else if (args[0] == "stats") {
					var playerData = localStorage.getItem(player.name);
					if (playerData ) {
						if (logged.includes(player.name)) {
							updateRank();
							var data = JSON.parse(localStorage.getItem(player.name));
							whisper("Games: " + data.games, player.id, 0xead1dc, 'bold', 0);
							whisper("B??n th???ng: " + data.goals + " | Ki???n t???o: " + data.assists + " | Ph???n l?????i: " + data.owngoals, player.id, 0xead1dc, 'bold', 0);
							whisper("Tr???n th???ng: " + data.win + " | Tr???n thua: " + data.lose + " | Tr???n h??a: " + data.draw,player.id, 0xead1dc, 'bold', 0); 
							whisper("S??? ti???n hi???n c??: " + numberWithCommas(data.money)+"??" ,player.id, 0xead1dc, 'bold', 0); 
						}
						else {
							whisper("B???n ch??a ????ng nh???p!", player.id, 0xead1dc, 'bold', 2);
						}
					}
					else {
						whisper("B???n ch??a c?? t??i kho???n. !dangky matkhau ????? ????ng k??", player.id, 0xead1dc, 'bold', 2);
					}
				}
				else if (args[0] == "rank") {
					var playerData = localStorage.getItem(player.name);
					if (playerData ) {
						updateRank();
						if (logged.includes(player.name)) {
							var data = JSON.parse(localStorage.getItem(player.name));
							whisper("Rank: " + data.level, player.id, 0xead1dc, 'bold', 0);
							whisper("??i???m: " + data.points, player.id, 0xead1dc, 'bold',0);
						}
						else {
							whisper("B???n ch??a ????ng nh???p!", player.id, 0xead1dc, 'bold', 2);
						}
					}
					else {
						whisper("B???n ch??a c?? t??i kho???n. !dangky matkhau ????? ????ng k??", player.id, 0xead1dc, 'bold', 2);
					}
				}
				else if (args[0] == "tai") {
					var money = parseInt(args[1]);
					if (taixiudangdienra) {
						if (logged.includes(player.name)) {
							var data = JSON.parse(localStorage.getItem(player.name));
							if (money > 1000) {
								if (data.money >= money) {
									if (!datcuoc_player.includes(player.id)) {
										taiPlayer[player.id] = money;
										announce("????: Ng?????i ch??i " + player.name + " ???? ?????t " + numberWithCommas(money) + "?? v??o T??i!!!",null,0xFFCFCB);
										datcuoc_player.push(player.id);
										data.money -= money;
										localStorage.setItem(player.name, JSON.stringify(data));
									}
									else {
										whisper("B???n ???? ?????t c?????c r???i!", player.id, null, 'bold',2);
									}
								}
								else {
									whisper("T??i kho???n kh??ng ????? ti???n", player.id, null, 'bold',2);
								}
							}
							else {
								whisper("M???c c?????c b???n c???n ?????t ph???i l???n h??n 1,000??", player.id, null, 'bold',2);
							}
						}
						else {
							whisper("B???n ch??a ????ng nh???p!", player.id, null, 'bold',2);
						}
					}
					else {
						whisper("T??i x???u ch??a di???n ra", player.id, null, 'bold',2);
					}
				}
				else if (args[0] == "xiu") {
					var money = parseInt(args[1]);
					if (taixiudangdienra) {
						if (logged.includes(player.name)) {
							var data = JSON.parse(localStorage.getItem(player.name));
							if (money > 1000) {
								if (data.money > money) {
									if (!datcuoc_player.includes(player.id)) {
										xiuPlayer[player.id] = money;
										announce("????: Ng?????i ch??i " + player.name + " ???? ?????t " + numberWithCommas(money) + "?? v??o X???u!!!",null,0xFFCFCB);
										datcuoc_player.push(player.id);
										data.money -= money;
										localStorage.setItem(player.name, JSON.stringify(data));
									}
									else {
										whisper("B???n ???? ?????t c?????c r???i",player.id);
									}
								}
								else {
									whisper("T??i kho???n kh??ng ????? ti???n", player.id, null, 'bold',2);
								}
							}
							else {
								whisper("M???c c?????c b???n c???n ?????t ph???i l???n h??n 1,000??", player.id, null, 'bold',2);
							}
						}
						else {
							whisper("B???n ch??a ????ng nh???p!", player.id, null, 'bold',2);
						}
					}
					else {
						whisper("T??i x???u ch??a di???n ra", player.id, null, 'bold',2);
					}
				}
				else if (args[0] == "shop") {
					if (logged.includes(player.name)) {
						if (args[1] == undefined) {
							whisper('-----------C??ch Mua-----------------------------' ,player.id,0xD7BDE2,'bold')
						whisper('!shop [id v???t ph???m] ????? mua' ,player.id,0xD4EFDF)
						whisper('----------------------Hi???n c??----------------------' ,player.id,0xE6B0AA,'bold')
						whisper('M??u b??ng: T??m Quy???n L???c(Gi??: 10,000,000?? | ID: maubong_tim)' ,player.id,0xF2D7D5)
						whisper('M??u b??ng: Xanh ?????m (Gi??: 1,000,000?? | ID: maubong_xanhdam)' ,player.id,0xF2D7D5)
						whisper('M??u b??ng: M??u H???ng Nam T??nh (Gi??: 3,000,000?? | ID: maubong_hong)' ,player.id,0xF2D7D5)
						whisper('M??u b??ng: Xanh N?????c S??ng Ch??i (Gi??: 2,000,000?? | ID: maubong_xanhsang)' ,player.id,0xF2D7D5)
						whisper('M??u b??ng: ?????  (Gi??: 1,000,000?? | ID: maubong_do)' ,player.id,0xF2D7D5)				
						whisper('M??u b??ng: Xanh L?? V??ng (Gi??: 300,000?? | ID: maubong_xanhlavang)' ,player.id,0xF2D7D5)
						whisper('M??u b??ng: Cam (Gi??: 1,000,000?? | ID: maubong_cam)' ,player.id,0xF2D7D5) 
						whisper('?????t bi???t danh cho ri??ng m??nh(Gi??: 2,500,000??)' ,player.id,0xF2D7D5)
						//whisper('???? thu???c t??ng h??nh c??? (Gi??: 550,000?? | ID: thuoctanghinh)' ,player.id)
						whisper('----------------------C??ch s??? d???ng----------------------' ,player.id,0xA3E4D7 ,'bold')
						whisper('Nh???p !maubong ????? xem id m??u b??ng' ,player.id,0xD1F2EB)
						whisper('!sudungmaubong [id maubong] | VD: !sudungmaubong tim' ,player.id,0xD1F2EB)					
						whisper('Nh???p !datbietdanh id(t??? ch???n) [Bi???t Danh] | VD: !datbietdanh deptrai ?????p trai Nh???t Th??? Gi???i' ,player.id,0xD1F2EB)
						whisper('Nh???p !bietdanh ????? xem id bi???t danh c???a m??nh' ,player.id,0xD1F2EB)
						whisper('Nh???p !laybietdanh id ????? s??? d???ng bi???t danh' ,player.id,0xD1F2EB)
						whisper('Nh???p !laybietdanh none ????? h???y s??? d???ng bi???t danh',player.id,0xD1F2EB );
						}
						switch(args[1]) {
							case 'maubong_tim': 
							var data = JSON.parse(localStorage.getItem(player.name));
							if (data.money < 10000000) {
								whisper("T??i kho???n kh??ng ????? ti???n!", player.id, null, 'bold', 2);
								return false;
								break;
							}
							if (!data['tuido']['list_maubong'].includes('tim')) {
								data.money -= 10000000;
								data['tuido']['list_maubong'].push('tim');
								whisper('???? mua m??u b??ng : T??m !' ,player.id,0xAED6F1 ,'bold');
								whisper('Nh??y nh???p !maubong ????? xem id v?? !sudungmaubong ????? s??? d???ng' ,player.id,0xAED6F1 ,'bold');
								localStorage.setItem(player.name,JSON.stringify(data));
								break;
							}
							else {
								whisper("B???n ???? s??? h???u m??u b??ng n??y r???i!",player.id);
								break;
							}
							case 'maubong_xanhdam' : 
							var data = JSON.parse(localStorage.getItem(player.name));
							if (data.money < 1000000) {
								whisper("T??i kho???n kh??ng ????? ti???n!", player.id, null, 'bold', 2);
								return false;
								break;
							}
							if (!data['tuido']['list_maubong'].includes('xanhdam')) {
								data.money -= 1000000;
								data['tuido']['list_maubong'].push('xanhdam');
								whisper('???? mua m??u b??ng : Xanh ?????m !' ,player.id,0xAED6F1 ,'bold');
								whisper('Nh??y nh???p !maubong ????? xem id v?? !sudungmaubong ????? s??? d???ng' ,player.id,0xAED6F1 ,'bold');
								localStorage.setItem(player.name,JSON.stringify(data));
								break;
							}
							else {
								whisper("B???n ???? s??? h???u m??u b??ng n??y r???i!",player.id);
								break;
							}
							case 'maubong_do': 
							var data = JSON.parse(localStorage.getItem(player.name));
							if (data.money < 1000000) {
								whisper("T??i kho???n kh??ng ????? ti???n!", player.id, null, 'bold', 2);
								return false;
								break;
							}
							if (!data['tuido']['list_maubong'].includes('do')) {
								data.money -= 1000000;
								data['tuido']['list_maubong'].push('do');
								whisper('???? mua m??u b??ng : ????? !' ,player.id,0xAED6F1 ,'bold');
								whisper('Nh??y nh???p !maubong ????? xem id v?? !sudungmaubong ????? s??? d???ng' ,player.id,0xAED6F1 ,'bold');
								localStorage.setItem(player.name,JSON.stringify(data));
								break;
							}
							else {
								whisper("B???n ???? s??? h???u m??u b??ng n??y r???i!",player.id);
								break;
							}
							case 'maubong_hong' :
							var data = JSON.parse(localStorage.getItem(player.name));
							if (data.money < 3000000) {
								whisper("T??i kho???n kh??ng ????? ti???n!", player.id, null, 'bold', 2);
								return false;
								break;
							}
							if (!data['tuido']['list_maubong'].includes('hong')) {
								data.money -= 3000000;
								data['tuido']['list_maubong'].push('hong');
								whisper('???? mua m??u b??ng : H???ng Nam T??nh !' ,player.id,0xAED6F1 ,'bold');
								whisper('Nh??y nh???p !maubong ????? xem id v?? !sudungmaubong ????? s??? d???ng' ,player.id,0xAED6F1 ,'bold');
								localStorage.setItem(player.name,JSON.stringify(data));
								break;
							}
							else {
								whisper("B???n ???? s??? h???u m??u b??ng n??y r???i!",player.id);
								break;
							}
							case 'maubong_xanhsang': 
							var data = JSON.parse(localStorage.getItem(player.name));
							if (data.money < 2000000) {
								whisper("T??i kho???n kh??ng ????? ti???n!", player.id, null, 'bold', 2);
								return false;
								break;
							}
							if (!data['tuido']['list_maubong'].includes('xanhsang')) {
								data.money -= 2000000;
								data['tuido']['list_maubong'].push('xanhsang');
								whisper('???? mua m??u b??ng : Xanh S??ng Ch??i !' ,player.id,0xAED6F1 ,'bold');
								whisper('Nh??y nh???p !maubong ????? xem id v?? !sudungmaubong ????? s??? d???ng' ,player.id,0xAED6F1 ,'bold');
								localStorage.setItem(player.name,JSON.stringify(data));
								break;
							}
							else {
								whisper("B???n ???? s??? h???u m??u b??ng n??y r???i!",player.id);
								break;
							}
							case 'maubong_xanhlavang' :
							var data = JSON.parse(localStorage.getItem(player.name));
							if (data.money < 300000) {
								whisper("T??i kho???n kh??ng ????? ti???n!", player.id, null, 'bold', 2);
								return false;
								break;
							}
							if (!data['tuido']['list_maubong'].includes('xanhlavang')) {
								data.money -= 300000;
								data['tuido']['list_maubong'].push('xanhlavang');
								whisper('???? mua m??u b??ng : Xanh L?? V??ng !' ,player.id,0xAED6F1 ,'bold');
								whisper('Nh??y nh???p !maubong ????? xem id v?? !sudungmaubong ????? s??? d???ng' ,player.id,0xAED6F1 ,'bold');
								localStorage.setItem(player.name,JSON.stringify(data));
								break;
							}
							else {
								whisper("B???n ???? s??? h???u m??u b??ng n??y r???i!",player.id);
								break;
							}
							case 'maubong_cam' : 
							var data = JSON.parse(localStorage.getItem(player.name));
							if (data.money < 1000000) {
								whisper("T??i kho???n kh??ng ????? ti???n!", player.id, null, 'bold', 2);
								return false;
								break;
							}
							if (!data['tuido']['list_maubong'].includes('cam')) {
								data.money -= 1000000;
								data['tuido']['list_maubong'].push('cam');
								whisper('???? mua m??u b??ng : Cam !' ,player.id,0xAED6F1 ,'bold');
								whisper('Nh??y nh???p !maubong ????? xem id v?? !sudungmaubong ????? s??? d???ng' ,player.id,0xAED6F1 ,'bold');
								localStorage.setItem(player.name,JSON.stringify(data));
								break;
							}
							else {
								whisper("B???n ???? s??? h???u m??u b??ng n??y r???i!",player.id);
								break;
							}
						}
					}
				}
				else if (args[0] == "maubong") {
					if (logged.includes(player.name)) {
						var tt_string = '';
						var data = JSON.parse(localStorage.getItem(player.name))
							if (data['tuido']['list_maubong'].length <= 0) { 
							whisper('B???n kh??ng s??? h???u m??u b??ng n??o',player.id ,0xD7BDE2)
							return false;
								}
							for (m in data['tuido']['list_maubong']) {
								let mau = "'" + data['tuido']['list_maubong'][m] + "'";
								console.log(mau);
								tt_string += ball_color[data['tuido']['list_maubong'][m]][0] + " (ID: " + data['tuido']['list_maubong'][m] + "), "
							}
							whisper('M??u b??ng ??ang c??: ' + tt_string,player.id,0xD7BDE2,'bold' )
					}
				}
				else if (args[0] == "sudungmaubong") {
					if (logged.includes(player.name)){ 
					var data = JSON.parse(localStorage.getItem(player.name));
						if (args[1] == undefined) {
							whisper('Vui l??ng nh???p id c???a m??u b??ng VD: !sudungmaubong tim',player.id,0xD7BDE2 )
							whisper('????? s??? d???ng m??u m???c ?????nh h??y nh???p: !sudungmaubong none',player.id ,0xD7BDE2)
							return false;
							}
						if (data['tuido']['list_maubong'] <= 0) {
							whisper('Kh??ng c?? m??u b??ng n??o!',player.id )
							return false;
							}
						if (args[1] == 'none') {
							data['cur_maubong'] = 'none'
							whisper('B???n kh??ng c??n s??? d???ng m??u b??ng! ' ,player.id,0xD7BDE2 )
							
							
							return false;
						}
						if (data['tuido']['list_maubong'].includes(args[1])) {
							data['cur_maubong'] = args[1]
							whisper('B???n ???? s??? d???ng m??u b??ng: ' + ball_color[args[1]][0]  ,player.id,0xD7BDE2 )
							
							
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
					if (logged.includes(player.name)) {
						var data = JSON.parse(localStorage.getItem(player.name));
						if (data.money > 2500000) {
							if (!data['tuido']['list_bietdanh'].includes(id_bietdanh)) {
								data['tuido']['list_bietdanh'].push(id_bietdanh);
								data['cac_bietdanh'].push(bietdanh);
								data.money -= 2500000;
								localStorage.setItem(player.name,JSON.stringify(data));
								whisper("B???n ???? ?????t bi???t danh: " + bietdanh + " (ID: " + id_bietdanh + ")",player.id);
							} 
							else {
							whisper("B???n ???? t???o bi???t danh b???ng ID n??y r???i",player.id);
							}
						}
						else {
							whisper("T??i kho???n kh??ng ????? ti???n!",player.id);
						}					
					}
					else {
						whisper("B???n ch??a ????ng nh???p!",player.id);
					}
				}
				else if (args[0] == "laybietdanh") {
					if (logged.includes(player.name)) {
						var data = JSON.parse(localStorage.getItem(player.name));
						if (args[1] == 'none') {
							data.cur_biet_danh = '';
							whisper("B???n kh??ng c??n s??? d???ng bi???t danh!",player.id);
							localStorage.setItem(player.name, JSON.stringify(data));
						}
						else {
							for (var i = 0; i < data.cac_bietdanh.length; i++) {
								if (data['tuido']['list_bietdanh'][i] == args[1]) {
									data.cur_biet_danh = data['cac_bietdanh'][i];
									whisper("S??? d???ng th??nh c??ng bi???t danh: " + data['cac_bietdanh'][i] + " (ID: " + data['tuido']['list_bietdanh'][i] + ")",player.id);
									localStorage.setItem(player.name, JSON.stringify(data));						
								}
							}
						}
					}
					else {
						whisper("B???n ch??a ????ng nh???p!", player.id);
					}
				}
				else if (args[0] == "bietdanh") {
					var tt_string = '';
					if (logged.includes(player.name)) {
						var data = JSON.parse(localStorage.getItem(player.name));
						if (data['cac_bietdanh'].length > 0) {
							for ( var i = 0; i < data.cac_bietdanh.length; i++) {
								tt_string += data['cac_bietdanh'][i] + " (ID: " + data['tuido']['list_bietdanh'][i] + "), "
							}
							whisper('C??c bi???t danh ??ang c??: ' + tt_string,player.id,0xD7BDE2,'bold' );
							whisper('Nh???p !laybietdanh none ????? h???y s??? d???ng bi???t danh',player.id,0xD7BDE2,'bold' );
						}
						else {
							whisper('B???n kh??ng s??? h???u bi???t danh n??o c???!' ,player.id,0xD7BDE2,'bold' );
						}
					}
					else {
						whisper("B???n ch??a ????ng nh???p!",player.id);
					}
				}
				else if (args[0] == "rank_help") {
					whisper("Rank E<100, 100 <= Rank D < 300, 300 <= Rank C < 500, 500 <= Rank B < 800, 800 <= Rank A < 1000, 1000<= Rank S",player.id);
					whisper("Ghi b??n: 5 ??i???m, Ki???n t???o: 3 ??i???m, Ph???n l?????i: -4 ??i???m, Th???ng: 3 ??i???m, H??a: 1 ??i???m, Thua: -5 ??i???m",player.id);
				}
				else if (args[0] == "Server_Set_Data") { // l??u ?? ch??? s???a c??c data: goals, win, lose, draw, money
					//Storage(player, "money",1000000);
					var ID = parseInt(args[1]);
					if(isNaN(ID)){
					room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i n??y, nh???p !ids ????? bi???t ID c???a ng?????i ch??i ",player.id, 0xd12411, 'bold', 1);
					return false;
					}
					else {
					var p = room.getPlayerList().find(x => x.id == ID);
					}
					if(!p){
						room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i n??y",player.id, 0xd12411,'bold',1);
						return false;
					}
					if (!isNaN(Number(args[3]))) {
						var current_value = Number(args[3]);
						if (isString(args[2])) {
							 var current_key = args[2];
							if (logged.includes(p.name)) {
								SetStorage(p, current_key, current_value);
							}
							else {
								whisper("Ng?????i ch??i ch??a ????ng nh???p!", p.id, null, 'bold',2);
							}
						}
					}
					else {
						whisper("Value kh??ng h???p l???", player.id, null, 'bold',2);	
					}
				}
				else if (args[0] == "chuyentien") {
					var ID = parseInt(args[1]);
					if(isNaN(ID)){
					room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i n??y, nh???p !ids ????? bi???t ID c???a ng?????i ch??i ",player.id, 0xd12411, 'bold', 1);
					return false;
					}
					else {
					var p = room.getPlayerList().find(x => x.id == ID);
					}
					if(!p){
						room.sendAnnouncement("Kh??ng t??m th???y ng?????i ch??i n??y",player.id, 0xd12411,'bold',1);
						return false;
					}
					if (!isNaN(Number(args[2]))) {
						var money = Number(args[2]);
						if (logged.includes(player.name)) {
							if (getData(player, "money") >= money) {
								if (logged.includes(p.name)) {
									Storage(p, "money", money);
									Storage(player, "money", -money);
                                    whisper(player.name + " ???? chuy???n cho b???n " + numberWithCommas(money) + "??",p.id);
                                    whisper("B???n ???? chuy???n cho " + p.name + numberWithCommas(money) + "??",player.id);
								}
								else {
									whisper("?????i ph????ng ch??a ????ng nh???p", player.id, null, 'bold',2);	
								}
							}
							else {
								whisper("T??i kho???n kh??ng ????? ti???n", player.id, null, 'bold',2);
							}
						}
						else {
							whisper("B???n ch??a ????ng nh???p!", player.id, null, 'bold',2);
						}
					}
					else {
						whisper("S??? ti???n kh??ng h???p l???", player.id, null, 'bold',2);	
					}
				}
				else if (args[0] == "laybong") {
					teleportBalltoPlayer(player);
				}
				else if (args[0] == "dung") {
					stopTheBall();
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
			else {
					message = message.substr(0);			
					var players = room.getPlayerList();
					players.forEach(function(Chat) {		
						if (logged.includes(player.name)) {
							var data = JSON.parse(localStorage.getItem(player.name));
							var tt_text = ' '
							if (data.cur_biet_danh== '' || data.cur_biet_danh == undefined) tt_text = '' + player.name
							else  tt_text = '['+ data.cur_biet_danh +'] ' + player.name; 						
							if (data.level != 'B' && data.level != 'A' && data.level != 'S') {
								var name = player.name;
								if (player.team == 1) {
									announce("[ID: " + player.id + "] " + "[Rank: " + data.level + "] " + tt_text  + ": " + message, Chat.id, 0xFF0000, 'normal',0);
									return false;
								}
								else if (player.team ==2) {
									announce("[ID: " + player.id + "] " + "[Rank: " + data.level + "] " + tt_text +  ": " + message, Chat.id, 0x3dacff, 'normal',0);
									return false;
								}
								else if (player.team == 0) {
									announce("[ID: " + player.id + "] " + "[Rank: " + data.level + "] " + tt_text + ": " + message, Chat.id, 0xFFFFFF, 'normal',0);
									return false;
								}
								return false;
							}
							else if (data.level == 'S') {
								announce("[ID: " + player.id + "] " + "[Rank: " + data.level + "] " + tt_text + ": " + message, Chat.id, 0xff8000, 'normal',1);
							}
							else if (data.level == 'A') {
								announce("[ID: " + player.id + "] " + "[Rank: " + data.level + "] " + tt_text + ": " + message, Chat.id, 0x9849e4, 'normal',1);
							}
							else if (data.level == 'B') {
								announce("[ID: " + player.id + "] " + "[Rank: " + data.level + "] " + tt_text + ": " + message, Chat.id, 0x00ff00, 'normal',1);
							}
							return false;
						}		
					else {
						if (player.team == 1) {
							announce("[ID: " + player.id + "] " + player.name + ": " + message, Chat.id, 0xff8c69 , 'normal',0);
						}
						if (player.team == 2) {
							announce("[ID: " + player.id + "] " + player.name + ": " + message,Chat.id, 0x03f8fc, 'normal',0);
						}
						if (player.team == 0) {
							announce("[ID: " + player.id + "] " + player.name + ": " + message, Chat.id, 0xe4ebe4, 'normfal',0);
						} 
						return false;
					}	
				   });
				   return false;
				}
		}

		function displayHelp(id, selection) {
			if (selection == null) {
				whisper("!votekick ????? m??? votekick", id, null, "small");
				whisper("!ids ????? bi???t danh s??ch ID ng?????i ch??i", id, null, "small");
				whisper("Commands: !rs, !rr, !bb, !powershot, !ps, !admin, !setpassword, !clearpassword, !super, !clearbans, !swap, t [team chat msg], !court, !court [hexcolor], !court reset", id, null, "small");
			}
		}


		room.onTeamGoal = function(team) {
			if (map == "RSR") {
				game.rsActive = false;
				
				let goalTime = secondsToMinutes(Math.floor(room.getScores().time));
				let scorer;
				let assister = "";
				let goalType;
				if (team == 1) {
					if (game.lastKickerTeam == 1) { //if goal type is goal
						goalType = "GOAL!";
						scorer = "???" + game.lastKickerName;
						avatarCelebration(game.lastKickerId, "???");
						if (logged.includes(game.lastKickerName)) {
							var data = JSON.parse(localStorage.getItem(game.lastKickerName));
							data.goals += 1;
							data.points += 5;
							data.money += 10000;
							updateRank();
							localStorage.setItem(game.lastKickerName, JSON.stringify(data));
							announce("Ng?????i ch??i " + game.lastKickerName + " nh???n ???????c 10,000?? t??? vi???c ghi b??n!",null, 0xE7F9F0);
							console.log(data);
						}
						if (game.secondLastKickerTeam == 1 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
							assister = " (Assist: " + game.secondLastKickerName + ")";
							avatarCelebration(game.secondLastKickerId, "???????");
							if (logged.includes(game.secondLastKickerName)) {
								var data = JSON.parse(localStorage.getItem(game.secondLastKickerName));
								data.assists += 1;
								data.points += 3;
								data.money += 5000;
								updateRank();
								localStorage.setItem(game.secondLastKickerName, JSON.stringify(data));
								announce("Ng?????i ch??i " + game.secondLastKickerName + " nh???n ???????c 5,000?? t??? vi???c ki???n t???o!",null, 0xE7F9F0);
								console.log(data);
							}
						}
					}		
					if (game.lastKickerTeam == 2) { //if goal type is owngoal
						goalType = "OWN GOAL!";
						scorer = "????" + game.lastKickerName;
						avatarCelebration(game.lastKickerId, "????");
						if (logged.includes(game.lastKickerName)) {
							var data = JSON.parse(localStorage.getItem(game.lastKickerName));
							data.owngoals += 1;
							data.points -= 4;
							updateRank();
							localStorage.setItem(game.lastKickerName, JSON.stringify(data));
							console.log(data);
						}
						if (game.secondLastKickerTeam == 1) { // if owngoal was assisted
							assister = " (Assist: " + game.secondLastKickerName + ")";
							avatarCelebration(game.secondLastKickerId, "???????");
							if (logged.includes(game.secondLastKickerName)) {
								var data = JSON.parse(localStorage.getItem(game.secondLastKickerName));
								data.assists += 1;
								data.points += 3;
								data.money += 5000;
								updateRank();
								localStorage.setItem(game.secondLastKickerName, JSON.stringify(data));
								announce("Ng?????i ch??i " + game.secondLastKickerName + " nh???n ???????c 5,000?? t??? vi???c ki???n t???o!",null, 0xE7F9F0);
								console.log(data);
							}
						}
					}
					game.redScore++;
				}
				if (team == 2) {
					if (game.lastKickerTeam == 2) { //if goal type is goal
						goalType = "GOAL!";
						scorer = "???" + game.lastKickerName;
						avatarCelebration(game.lastKickerId, "???");
						if (logged.includes(game.lastKickerName)) {
							var data = JSON.parse(localStorage.getItem(game.lastKickerName));
							data.goals += 1;
							data.points += 5;
							data.money += 10000;
							updateRank();
							localStorage.setItem(game.lastKickerName, JSON.stringify(data));
							announce("Ng?????i ch??i " + game.lastKickerName + " nh???n ???????c 10,000?? t??? vi???c ghi b??n!",null, 0xE7F9F0);
							console.log(data);
						}
						if (game.secondLastKickerTeam == 2 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
							assister = " (Assist: " + game.secondLastKickerName + ")";
							avatarCelebration(game.secondLastKickerId, "???????");
							if (logged.includes(game.secondLastKickerName)) {
								var data = JSON.parse(localStorage.getItem(game.secondLastKickerName));
								data.assists += 1;
								data.points += 3;
								data.money += 5000;
								updateRank();
								localStorage.setItem(game.secondLastKickerName, JSON.stringify(data));
								announce("Ng?????i ch??i " + game.secondLastKickerName + " nh???n ???????c 5,000?? t??? vi???c ki???n t???o!",null, 0xE7F9F0);
								console.log(data);
							}
						}
					}		
					if (game.lastKickerTeam == 1) { //if goal type is owngoal
						goalType = "OWN GOAL!";
						scorer = "????" + game.lastKickerName;
						avatarCelebration(game.lastKickerId, "????");
						if (logged.includes(game.lastKickerName)) {
							var data = JSON.parse(localStorage.getItem(game.lastKickerName));
							data.owngoals += 1;
							data.points -= 4;
							updateRank();
							localStorage.setItem(game.lastKickerName, JSON.stringify(data));
							console.log(data);
						}
						if (game.secondLastKickerTeam == 2) { // if owngoal was assisted
							assister = " (Assist: " + game.secondLastKickerName + ")";
							avatarCelebration(game.secondLastKickerId, "???????");
							if (logged.includes(game.secondLastKickerName)) {
								var data = JSON.parse(localStorage.getItem(game.secondLastKickerName));
								data.assists += 1;
								data.points += 3;
								data.money += 5000;
								updateRank();	
								localStorage.setItem(game.secondLastKickerName, JSON.stringify(data));
								announce("Ng?????i ch??i " + game.secondLastKickerName + " nh???n ???????c 5,000?? t??? vi???c ki???n t???o!",null, 0xE7F9F0);
								console.log(data);
							}
						}
					}
					game.blueScore++;
				}
				announce(goalType + " ???? " + game.redScore + " - " + game.blueScore + " ???????????" + goalTime + "???" + scorer + assister);
				game.lastKicker = undefined;
				game.secondLastKicker = undefined;
				game.lastKickerTeam = undefined;
				game.secondLastKickerTeam = undefined;
			}
		}

		room.onPositionsReset = function() {
			if (map == "RSR") {
				if (game.lastPlayAnnounced == true) {
					room.stopGame(true);
					game.lastPlayAnnounced = false;
					endGame();
					announce("END");
				}
			}
		}

		room.onGameTick = function() {
			if (map == "RSR") {
				updateGameStatus();
				handleBallTouch();
				handlePlayerPosition();
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
					is_touch = player.id;
					var playerData = localStorage.getItem(player.name);
					if (playerData) {
						var data = JSON.parse(localStorage.getItem(player.name))
						if (game.powershotTrigger == false){
							if ( ball_color.hasOwnProperty(data.cur_maubong)){
								room.setDiscProperties(0, {color: ball_color[data.cur_maubong][1] });
							}
							
							else {
								room.setDiscProperties(0, {color: "0x9CF0E5"});
							}
						}
					}
					else if (playerData && game.powershotTrigger == false){
						room.setDiscProperties(0, {color: "0x9CF0E5"});
					}
					
					
					//=========== POWERSHOT CODE ===========
					if (game.rsCorner == false && game.rsGoalKick == false && game.outStatus != "blueThrow" && game.outStatus != "redThrow" && powerShotMode == true) {
						if (game.powershotID != player.id) {
							game.powershotID = player.id;
							game.powershotTrigger = false;
							game.powershotCounter = 0;
						} else {
							game.powershotCounter++;
							//room.sendAnnouncement("Powershot counter: " + game.powershotCounter, null, 0x333333, "small-bold", 0);
							if (game.powershotCounter > 90 && game.powershotTrigger == false && Math.round(room.getDiscProperties(0).invMass) != 2) {
								room.setDiscProperties(0, {invMass: 1.65});
								room.sendAnnouncement("POWERSHOT ACTIVATED!", game.powershotID, 0x33dd33, "bold", 1);
								game.powershotTrigger = true;
							}
						}
					}
					//=========== POWERSHOT CODE ===========
					
					if (game.rsCorner == false && room.getDiscProperties(0).xgravity != 0) {
						room.setDiscProperties(0, {xgravity: 0, ygravity:0});
						game.rsSwingTimer = 10000;
					}
				} 
				//=========== POWERSHOT CODE ===========
				if ( distanceToBall > triggerDistance +3 && player.id == game.powershotID && powerShotMode == true) {
					if (game.powershotTrigger == true ) {
						game.powershotTrigger = false;
						game.powershotCounter = 0;
						game.powershotid = 0;
						if (parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) != 1.05) {
							room.setDiscProperties(0, {invMass: 1.05, color: '0x9CF0E5'});
							room.sendAnnouncement("POWERSHOT CANCELLED!", game.powershotID, 0xdd3333, "bold", 2);
							is_touch = undefined;
						}
					}
					else {
							room.setDiscProperties(0, {invMass: 1.05, color: '0x9CF0E5'});
					}
				}
				//=========== POWERSHOT CODE ===========
			}
		}

		function updateGameStatus() {
			game.time = Math.floor(room.getScores().time);
			game.ballRadius = room.getDiscProperties(0).radius;
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
				announce("No admin present: Type !admin to take control");
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
		var is_touch = undefined;
		var has_dash = [];
		var dash_object = {};
		function handlePlayerPosition() {
		var players = room.getPlayerList();
		for (var i = 0; i < players.length; i++) {
		var player = players[i];
		if (player.position == null) continue;
		var dash = (room.getPlayerDiscProperties(player.id).xspeed + room.getPlayerDiscProperties(player.id).yspeed)/2 *5;
			tofixdash = dash.toFixed(0);
		if ( is_touch != player.id && (tofixdash == -3 || tofixdash == 3 || tofixdash == 5 || tofixdash ==-5) && !has_dash.includes(player.id)) {
		 var sth = 22;
			dash_object[player.id] += 1;
			if (dash_object[player.id] >= sth && !has_dash.includes(player.id) ) {
			room.setPlayerDiscProperties(player.id, {xspeed: room.getPlayerDiscProperties(player.id).xspeed *5, yspeed: room.getPlayerDiscProperties(player.id).yspeed * 5});
			has_dash.push(player.id);	
			console.log(has_dash);
			whisper("B???n v???a s??? d???ng dash!",player.id);
			whisper("Cooldown 30s!",player.id);
			sleep(30000).then(() => {
				whisper("K?? n??ng dash ???? c?? th??? s??? d???ng!",has_dash[0x0]);
				has_dash.shift();
				dash_object[player.id] = 0;
			}); }
		} else dash_object[player.id] = 0;
		} 
		}
		function endGame() {
			if (game.redScore > game.blueScore) {
				var players = room.getPlayerList().filter((player) => player.team != 0);
				players.forEach(function(player) {
					if (logged.includes(player.name)) {
						if (player.team == 1) {
							var data = JSON.parse(localStorage.getItem(player.name));
							data.win += 1;
							data.games +=1
							data.points += 3;
							localStorage.setItem(player.name,JSON.stringify(data));
						}
						else if (player.team == 2) {
							var data = JSON.parse(localStorage.getItem(player.name));
							data.lose += 1;
							data.games += 1;
							data.points -= 5;
							localStorage.setItem(player.name,JSON.stringify(data));
						}
					}
				});
			}
			else if (game.redScore < game.blueScore) {
				var players = room.getPlayerList().filter((player) => player.team != 0);
				players.forEach(function(player) {
					if (logged.includes(player.name)) {
						if (player.team == 2) {
							var data = JSON.parse(localStorage.getItem(player.name));
							data.win += 1;
							data.games += 1;
							data.points += 3;
							localStorage.setItem(player.name,JSON.stringify(data));
						}
						else if (player.team == 1) {
							var data = JSON.parse(localStorage.getItem(player.name));
							data.lose += 1;
							data.games += 1;
							data.points -= 5;
							localStorage.setItem(player.name,JSON.stringify(data));
						}
					}
				});
			}
			else if (game.redScore == game.blueScore) {
				var players = room.getPlayerList().filter((player) => player.team != 0);
				players.forEach(function(player) {
					if (logged.includes(player.name)) {
						if (player.team == 2) {
							var data = JSON.parse(localStorage.getItem(player.name));
							data.draw += 1;
							data.games += 1;
							data.points += 1;
							localStorage.setItem(player.name,JSON.stringify(data));
						}
						else if (player.team == 1) {
							var data = JSON.parse(localStorage.getItem(player.name));
							data.draw += 1;
							data.games += 1;
							data.points += 1;
							localStorage.setItem(player.name,JSON.stringify(data));
						}
					}
				});
			}
		}
		// Rank E<100, 100 <= Rank D < 300, 300 <= Rank C < 500, 500 <= Rank B < 800, 800 <= Rank A < 1000, 1000<= Rank S
		function updateRank() {
			var players = room.getPlayerList();
			players.forEach(function(player) {
				if (logged.includes(player.name)) {
					var data = JSON.parse(localStorage.getItem(player.name));
					console.log(data.points + "   BEFORE");
					data.points = (data.goals * 5) + (data.assists * 3) + (data.win * 3) + (data.lose * -5) + (data.owngoals * -4) + (data.draw * 1);
					console.log(data.points);
					if (data.points >= 0 && data.points < 100) {
						data.level = 'E';
						localStorage.setItem(player.name, JSON.stringify(data));
					}
					else if (data.points >= 100 && data.points < 300) {
						data.level = 'D';
						localStorage.setItem(player.name, JSON.stringify(data));
					}
					else if (data.points >= 300 && data.points < 500) {
						data.level = 'C';
						localStorage.setItem(player.name, JSON.stringify(data));
					}
					else if (data.points >= 500 && data.points < 800) {
						data.level = 'B';
						localStorage.setItem(player.name, JSON.stringify(data));
					}
					else if (data.points >= 800 && data.points < 1000) {
						data.level = 'A';
						localStorage.setItem(player.name, JSON.stringify(data));
					}
					else if (data.points >= 1000) {
						data.level = 'S';
						localStorage.setItem(player.name, JSON.stringify(data));
					}
				}
			});
		}
		function getRandomInt(max) {
		  return Math.floor(Math.random() * max);
		}
		function playtaixiu(w) {
			taixiudangdienra = true;
			phien_taixiu +=1;
			announce("????: T??i x???u phi??n th??? " + phien_taixiu + " ??ang di???n ra! 70s ?????m ng?????c",null,0xFFCFCB);
			announce("????: Nh???p !tai [m???c m?????c] ho???c !xiu [m???c c?????c] ????? ?????t ti???n!",null,0xFFCFCB);
			setTimeout(taixiucore,70000);
		}
		var kq_taixiu;
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
				kq_taixiu= 'xiu';
			}
		if (kq_taixiu == 'tai') {
			announce("????: T??i x???u phi??n th??? " + phien_taixiu + " ra T??i!!!",null,0xAADDEE);
			for (var i = 0; i < ids.length; i++) {
				if (taiPlayer[i] != null) {
					var p = room.getPlayerList().find(x => x.id == i);
					var data = JSON.parse(localStorage.getItem(p.name));
					data.money += (taiPlayer[i]*2);
					localStorage.setItem(p.name,JSON.stringify(data));
					whisper("B???n ???? nh???n ???????c " + numberWithCommas(taiPlayer[i]) + "?? khi ch??i t??i x???u",p.id);
				} 
				else if (xiuPlayer[i] != null) {
					var p = room.getPlayerList().find(x => x.id == i);
					whisper("B???n ???? m???t " + numberWithCommas(xiuPlayer[i]) + "?? khi ch??i t??i x???u",p.id);
				}
			}
		}
		else if (kq_taixiu == 'xiu') {
			announce("????: T??i x???u phi??n th??? " + phien_taixiu + " ra X???u!!!",null,0xAADDEE);
			for (var i = 0; i < ids.length; i++) {
				if (xiuPlayer[i] != null) {
					var p = room.getPlayerList().find(x => x.id == i);
					var data = JSON.parse(localStorage.getItem(p.name));
					data.money += (xiuPlayer[i]*2);
					localStorage.setItem(p.name,JSON.stringify(data));
					whisper("B???n ???? nh???n ???????c " + numberWithCommas(xiuPlayer[i]) + "?? khi ch??i t??i x???u",p.id);
				} 
				else if (taiPlayer[i] != null) {
					var p = room.getPlayerList().find(x => x.id == i);
					whisper("B???n ???? m???t " + numberWithCommas(taiPlayer[i]) + "?? khi ch??i t??i x???u",p.id);
				}
			}
		}
		xiuPlayer = [];
		taixiudangdienra = false;
		taiPlayer = [];
		datcuoc_player = [];
		setTimeout(playtaixiu, 5000);
		}
		function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
		function addValue(target) {
			var playerData = localStorage.getItem(target);
			var data = JSON.parse(localStorage.getItem(target));
			if (playerData) {
				if (data.tuido == undefined) {
					let tuido = {
						'list_bietdanh' : [],
						'list_maubong' : [],
					}
					data.tuido = tuido;
				}
				if (data.cur_biet_danh == undefined) {
					let cur_biet_danh = '';
					let sth = JSON.parse(localStorage.getItem(target));
					data.cur_biet_danh = cur_biet_danh;
				}
				if (data.cur_mau_bong == undefined) {
					let cur_mau_bong = '';
					let sth = JSON.parse(localStorage.getItem(target));
					data.cur_mau_bong = cur_mau_bong;
				}
				if (data.cac_bietdanh == undefined) {
					let cac_bietdanh = [];
					data.cac_bietdanh = cac_bietdanh;
				}
				localStorage.setItem(target,JSON.stringify(data));
			}
		}
		var ball_color = {
			'tim': ['M??u T??m M???ng M??','0x9B59B6'],
			'xanhla': ['M??u xanh l??','0x28B463'],
			'xanhdam': ['M??u Xanh N??c ?????m','0x00A2FF'],
			'hong':['M??u H???ng M???nh M??e','0xff33ff'],
			'xanhsang':['M??u Xanh M?? M???t','0x00ffff'],
			'do':['M??u ????? Gao ???','0xff0000'],
			'xanhnhat':['M??u xanh n?????c nh???t','0x85C1E9'],
			'xanhlanuoc':['M??u k???t h???p xanh l?? + n?????c','0x76D7C4'],
			'xanhlavang':['M??u Xanh L?? V??ng','0x58D68D'],
			'cam':['M??u Cam Sh???t','0xE67E22'],
		}
		function Storage(target, key, value) {
			if (logged.includes(target.name)) {
				if (isString(key)) { 
					var key_do = key; 
					if (!isNaN(Number(value))) {
						var value_do = Number(value);
						var data = JSON.parse(localStorage.getItem(target.name));
						if (data[key_do] != undefined) {
							data[key_do] += value_do;
							localStorage.setItem(target.name, JSON.stringify(data));
						}
						else {
							whisper("Kh??ng c?? key n??y",target.id);
						}
					}
					else {
						whisper("Vui l??ng nh???p s???",target.id);
					}
				}
			}
			else {
				announce("Vui l??ng ????ng nh???p");
			}
		}
		function SetStorage(target, key, value) {
			if (logged.includes(target.name)) {
				if (isString(key)) { 
					var key_do = key; 
					if (!isNaN(Number(value))) {
						var value_do = Number(value);
						var data = JSON.parse(localStorage.getItem(target.name));
						if (data[key_do] != undefined) {
							data[key_do] = value_do;
							localStorage.setItem(target.name, JSON.stringify(data));
						}
						else {
							whisper("Kh??ng c?? key n??y",target.id);
						}
					}
					else {
						whisper("Vui l??ng nh???p s???",target.id);
					}
				}
			}
			else {
				announce("Vui l??ng ????ng nh???p");
			}
		}
		function getData(target, key) {
			if (isString(key)) { 
				var key_do = key; 
				var data = JSON.parse(localStorage.getItem(target.name));
				if (data[key_do] != undefined) {
					return data[key_do];
				}
				else {
						announce("Kh??ng c?? key n??y");
				}
			}
		}
const isString = value => typeof value === 'string' || value instanceof String;
function teleportBalltoPlayer(target) {
	var x_pos = target.position.x;
	var y_pos = target.position.y;
	room.setDiscProperties(0,{x: x_pos,y: y_pos});
}
function stopTheBall() {
	room.setDiscProperties(0, {xspeed:0, yspeed: 0, xgravity: 0, yspeed: 0});
}