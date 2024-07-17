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
var throwinDistance = 350; // distance players can move the ball during throw in
var mapBGColor = "86A578"; // default 718C5A


var allowPublicAdmin = true; // if true then !admin command is enabled
var powerShotMode = true;

// setting room
var room_type = 1

/*-------------------------------- STADIUMS ---------------------------------*/
function getRealSoccerMap() {
	var realSoccerMap = `{"name":"MAP","width":1300,"height":670,"spawnDistance":560,"bg":{"type":"grass","width":1150,"height":600,"kickOffRadius":180,"cornerRadius":0},"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.96,"acceleration":0.12,"kickingAcceleration":0.07,"kickingDamping":0.95,"kickStrength":5.65},"ballPhysics":{"radius":8.5,"bCoef":0.5,"invMass":1.05,"damping":0.9857,"color":"FFFFFF","cMask":["all"],"cGroup":["ball"]},"vertexes":[{"x":0,"y":675,"trait":"kickOffBarrier"},{"x":0,"y":180,"trait":"kickOffBarrier"},{"x":0,"y":-180,"trait":"kickOffBarrier"},{"x":0,"y":-675,"trait":"kickOffBarrier"},{"x":1150,"y":320,"trait":"line"},{"x":840,"y":320,"trait":"line"},{"x":1150,"y":-320,"trait":"line"},{"x":840,"y":-320,"trait":"line"},{"x":1150,"y":180,"trait":"line"},{"x":1030,"y":180,"trait":"line"},{"x":1150,"y":-180,"trait":"line"},{"x":1030,"y":-180,"trait":"line"},{"x":840,"y":-130,"trait":"line","curve":-130},{"x":840,"y":130,"trait":"line","curve":-130},{"x":-1150,"y":-320,"trait":"line"},{"x":-840,"y":-320,"trait":"line"},{"x":-1150,"y":320,"trait":"line"},{"x":-840,"y":320,"trait":"line"},{"x":-1150,"y":-175,"trait":"line"},{"x":-1030,"y":-175,"trait":"line"},{"x":-1150,"y":175,"trait":"line"},{"x":-1030,"y":175,"trait":"line"},{"x":-840,"y":130,"trait":"line","curve":-130},{"x":-840,"y":-130,"trait":"line","curve":-130},{"x":935,"y":3,"trait":"line"},{"x":935,"y":-3,"trait":"line"},{"x":-935,"y":3,"trait":"line"},{"x":-935,"y":-3,"trait":"line"},{"x":-1150,"y":570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":-600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1150,"y":-570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":-570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":-600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":-180},{"x":0,"y":-180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":-1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":-1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":-40,"trait":"line","color":"576C46"},{"x":1030,"y":40,"trait":"line","color":"576C46"},{"x":-1030,"y":-40,"trait":"line","color":"576C46"},{"x":-1030,"y":40,"trait":"line","color":"576C46"},{"x":0,"y":3,"trait":"line"},{"x":0,"y":-3,"trait":"line"},{"x":-1157,"y":605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":-655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":-605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":-655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":-605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1300,"y":-485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":-485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1300,"y":485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-419,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-419,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":419,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":419,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1150,"y":-124,"bCoef":0,"cMask":["ball","red","blue"]},{"x":-1210,"y":-124,"bCoef":0,"cMask":["ball"],"bias":0,"curve":5},{"x":-1150,"y":124,"bCoef":0,"cMask":["ball","red","blue"]},{"x":-1210,"y":124,"bCoef":0,"cMask":["ball"],"bias":0,"curve":5},{"x":-1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":-1250,"y":158,"bCoef":0,"cMask":["ball"]},{"x":1150,"y":124,"bCoef":0,"cMask":["ball","red","blue"]},{"x":1210,"y":124,"bCoef":0,"cMask":["ball"],"curve":-5},{"x":1150,"y":-124,"bCoef":0,"cMask":["ball","red","blue"]},{"x":1210,"y":-124,"bCoef":0,"cMask":["ball"],"curve":-5},{"x":1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":1250,"y":158,"bCoef":0,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"trait":"kickOffBarrier"},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"line","y":320},{"v0":5,"v1":7,"trait":"line","x":840},{"v0":6,"v1":7,"trait":"line","y":-320},{"v0":8,"v1":9,"trait":"line","y":180},{"v0":9,"v1":11,"trait":"line","x":1030},{"v0":10,"v1":11,"trait":"line","y":-180},{"v0":12,"v1":13,"curve":-130,"trait":"line","x":840},{"v0":14,"v1":15,"trait":"line","y":-320},{"v0":15,"v1":17,"trait":"line","x":-840},{"v0":16,"v1":17,"trait":"line","y":320},{"v0":18,"v1":19,"trait":"line","y":-175},{"v0":19,"v1":21,"trait":"line","x":-1030},{"v0":20,"v1":21,"trait":"line","y":175},{"v0":22,"v1":23,"curve":-130,"trait":"line","x":-840},{"v0":24,"v1":25,"curve":-180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":90,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":-90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-90,"trait":"line","x":-935},{"v0":24,"v1":25,"trait":"line","x":935},{"v0":26,"v1":27,"trait":"line","x":-935},{"v0":28,"v1":29,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":30,"v1":31,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":32,"v1":33,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":34,"v1":35,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":37,"v1":36,"curve":-180,"vis":false,"bCoef":0.1,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":39,"v1":40,"curve":70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":-1030},{"v0":41,"v1":42,"curve":-70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":1030},{"v0":37,"v1":38,"curve":180,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":43,"v1":44,"vis":true,"color":"576C46","trait":"line","x":1030},{"v0":45,"v1":46,"vis":true,"color":"576C46","trait":"line","x":-1030},{"v0":47,"v1":48,"curve":-180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":90,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":-90,"trait":"line","x":-935},{"v0":47,"v1":48,"trait":"line","x":-935},{"v0":49,"v1":50,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-1157},{"v0":51,"v1":52,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-1157},{"v0":53,"v1":54,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":1157},{"v0":55,"v1":56,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":1157},{"v0":57,"v1":58,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":-485},{"v0":59,"v1":60,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":485},{"v0":61,"v1":62,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":62,"v1":63,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"],"x":-419},{"v0":63,"v1":64,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":65,"v1":66,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":66,"v1":67,"vis":false,"cMask":["c0"],"cGroup":["red","blue"],"x":419},{"v0":67,"v1":68,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":69,"v1":70,"color":"FFFFFF","bCoef":0,"cMask":["ball","red","blue"],"y":-124},{"v0":71,"v1":72,"color":"FFFFFF","bCoef":0,"cMask":["ball","red","blue"],"y":124},{"v0":72,"v1":70,"curve":5,"color":"FFFFFF","bCoef":0,"cMask":["ball","red","blue"],"bias":0},{"v0":70,"v1":73,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":72,"v1":74,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":75,"v1":76,"color":"FFFFFF","bCoef":0,"cMask":["ball","red","blue"],"y":124},{"v0":77,"v1":78,"color":"FFFFFF","bCoef":0,"cMask":["ball","red","blue"],"y":-124},{"v0":76,"v1":78,"curve":-5,"color":"FFFFFF","bCoef":0,"cMask":["ball","red","blue"]},{"v0":78,"v1":79,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":76,"v1":80,"color":"FFFFFF","bCoef":0,"cMask":["ball"]}],"goals":[{"p0":[-1162.45,-124],"p1":[-1162.45,124],"team":"red"},{"p0":[1162.45,124],"p1":[1162.45,-124],"team":"blue","radius":0,"invMass":1}],"discs":[{"radius":0,"invMass":0,"pos":[-1311,-19],"color":"ffffffff","bCoef":0,"cMask":["red"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1310,29],"color":"ffffffff","bCoef":0,"cMask":["blue"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1308,62],"color":"ffffffff","bCoef":0,"cMask":["red","blue"],"cGroup":["ball"]},{"radius":2.7,"pos":[-1150,600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":5,"invMass":0,"pos":[-1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[-1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2.7,"pos":[-1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":0,"pos":[-1149,-485],"cMask":["none"]},{"radius":0,"pos":[1149,-485],"cMask":["none"]},{"radius":0,"pos":[-1149,-485],"cMask":["none"]},{"radius":0,"pos":[1149,-485],"cMask":["none"]},{"radius":0,"pos":[-1149,485],"cMask":["none"]},{"radius":0,"pos":[1149,485],"cMask":["none"]},{"radius":0,"pos":[-1149,485],"cMask":["none"]},{"radius":0,"pos":[1149,485],"cMask":["none"]}],"planes":[{"normal":[0,1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-627,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,-627],"b":[1300,-627]}}},{"normal":[0,-1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-627,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,627],"b":[1300,627]}}},{"normal":[0,1],"dist":-670,"bCoef":0,"_data":{"extremes":{"normal":[0,1],"dist":-670,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,-670],"b":[1300,-670]}}},{"normal":[0,-1],"dist":-670,"bCoef":0,"_data":{"extremes":{"normal":[0,-1],"dist":-670,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,670],"b":[1300,670]}}},{"normal":[1,0],"dist":-1300,"bCoef":0,"_data":{"extremes":{"normal":[1,0],"dist":-1300,"canvas_rect":[-1311,-675,1300,675],"a":[-1300,-675],"b":[-1300,675]}}},{"normal":[-1,0],"dist":-1300,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-1300,"canvas_rect":[-1311,-675,1300,675],"a":[1300,-675],"b":[1300,675]}}},{"normal":[1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-1230,"canvas_rect":[-1311,-675,1300,675],"a":[-1230,-675],"b":[-1230,675]}}},{"normal":[-1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-1230,"canvas_rect":[-1311,-675,1300,675],"a":[1230,-675],"b":[1230,675]}}}],"traits":{"ballArea":{"vis":false,"bCoef":0,"cMask":["ball"],"cGroup":["ball"]},"goalPost":{"radius":5,"invMass":0,"bCoef":1,"cGroup":["ball"]},"rightNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c3"]},"leftNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c2"]},"stanchion":{"radius":3,"invMass":0,"bCoef":3,"cMask":["none"]},"cornerflag":{"radius":3,"invMass":0,"bCoef":0.2,"color":"FFFF00","cMask":["ball"]},"reargoalNetleft":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":10,"color":"C7E6BD"},"reargoalNetright":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-10,"color":"C7E6BD"},"sidegoalNet":{"vis":true,"bCoef":1,"cMask":["ball","red","blue"],"color":"C7E6BD"},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"cMask":[],"color":"C7E6BD"}},"joints":[{"d0":16,"d1":17,"strength":"rigid","color":"ec7458","length":null},{"d0":18,"d1":19,"strength":"rigid","color":"48bef9","length":null},{"d0":20,"d1":21,"strength":"rigid","color":"ec7458","length":null},{"d0":22,"d1":23,"strength":"rigid","color":"48bef9","length":null}],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}`;
	// {"name":"MAP","width":1300,"height":670,"spawnDistance":560,"bg":{"type":"grass","width":1150,"height":600,"kickOffRadius":180,"cornerRadius":0},"playerPhysics":{"bCoef":0.3,"invMass":1.05,"damping":0.96,"acceleration":0.12,"kickingAcceleration":0.07,"kickingDamping":0.96,"kickStrength":5.65},"ballPhysics":{"radius":9,"bCoef":0.5,"invMass":1.05,"damping":0.99,"color":"FFFFFF","cMask":["all"],"cGroup":["ball"]},"vertexes":[{"x":0,"y":675,"trait":"kickOffBarrier"},{"x":0,"y":180,"trait":"kickOffBarrier"},{"x":0,"y":-180,"trait":"kickOffBarrier"},{"x":0,"y":-675,"trait":"kickOffBarrier"},{"x":1150,"y":320,"trait":"line"},{"x":840,"y":320,"trait":"line"},{"x":1150,"y":-320,"trait":"line"},{"x":840,"y":-320,"trait":"line"},{"x":1150,"y":180,"trait":"line"},{"x":1030,"y":180,"trait":"line"},{"x":1150,"y":-180,"trait":"line"},{"x":1030,"y":-180,"trait":"line"},{"x":840,"y":-130,"trait":"line","curve":-130},{"x":840,"y":130,"trait":"line","curve":-130},{"x":-1150,"y":-320,"trait":"line"},{"x":-840,"y":-320,"trait":"line"},{"x":-1150,"y":320,"trait":"line"},{"x":-840,"y":320,"trait":"line"},{"x":-1150,"y":-175,"trait":"line"},{"x":-1030,"y":-175,"trait":"line"},{"x":-1150,"y":175,"trait":"line"},{"x":-1030,"y":175,"trait":"line"},{"x":-840,"y":130,"trait":"line","curve":-130},{"x":-840,"y":-130,"trait":"line","curve":-130},{"x":935,"y":3,"trait":"line"},{"x":935,"y":-3,"trait":"line"},{"x":-935,"y":3,"trait":"line"},{"x":-935,"y":-3,"trait":"line"},{"x":-1150,"y":570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":-600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1150,"y":-570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":-570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":-600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":-180},{"x":0,"y":-180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":-1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":-1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":-40,"trait":"line","color":"576C46"},{"x":1030,"y":40,"trait":"line","color":"576C46"},{"x":-1030,"y":-40,"trait":"line","color":"576C46"},{"x":-1030,"y":40,"trait":"line","color":"576C46"},{"x":0,"y":3,"trait":"line"},{"x":0,"y":-3,"trait":"line"},{"x":-1157,"y":605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":-655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":-605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":-655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":-605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1300,"y":-485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":-485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1300,"y":485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-419,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-419,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":419,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":419,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1150,"y":-124,"bCoef":0,"cMask":["ball","red","blue"]},{"x":-1210,"y":-124,"bCoef":0,"cMask":["ball"],"bias":0,"curve":5},{"x":-1150,"y":124,"bCoef":0,"cMask":["ball","red","blue"]},{"x":-1210,"y":124,"bCoef":0,"cMask":["ball"],"bias":0,"curve":5},{"x":-1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":-1250,"y":158,"bCoef":0,"cMask":["ball"]},{"x":1150,"y":124,"bCoef":0,"cMask":["ball","red","blue"]},{"x":1210,"y":124,"bCoef":0,"cMask":["ball"],"curve":-5},{"x":1150,"y":-124,"bCoef":0,"cMask":["ball","red","blue"]},{"x":1210,"y":-124,"bCoef":0,"cMask":["ball"],"curve":-5},{"x":1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":1250,"y":158,"bCoef":0,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"trait":"kickOffBarrier"},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"line","y":320},{"v0":5,"v1":7,"trait":"line","x":840},{"v0":6,"v1":7,"trait":"line","y":-320},{"v0":8,"v1":9,"trait":"line","y":180},{"v0":9,"v1":11,"trait":"line","x":1030},{"v0":10,"v1":11,"trait":"line","y":-180},{"v0":12,"v1":13,"curve":-130,"trait":"line","x":840},{"v0":14,"v1":15,"trait":"line","y":-320},{"v0":15,"v1":17,"trait":"line","x":-840},{"v0":16,"v1":17,"trait":"line","y":320},{"v0":18,"v1":19,"trait":"line","y":-175},{"v0":19,"v1":21,"trait":"line","x":-1030},{"v0":20,"v1":21,"trait":"line","y":175},{"v0":22,"v1":23,"curve":-130,"trait":"line","x":-840},{"v0":24,"v1":25,"curve":-180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":90,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":-90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-90,"trait":"line","x":-935},{"v0":24,"v1":25,"trait":"line","x":935},{"v0":26,"v1":27,"trait":"line","x":-935},{"v0":28,"v1":29,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":30,"v1":31,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":32,"v1":33,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":34,"v1":35,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":37,"v1":36,"curve":-180,"vis":false,"bCoef":0.1,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":39,"v1":40,"curve":70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":-1030},{"v0":41,"v1":42,"curve":-70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":1030},{"v0":37,"v1":38,"curve":180,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":43,"v1":44,"vis":true,"color":"576C46","trait":"line","x":1030},{"v0":45,"v1":46,"vis":true,"color":"576C46","trait":"line","x":-1030},{"v0":47,"v1":48,"curve":-180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":90,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":-90,"trait":"line","x":-935},{"v0":47,"v1":48,"trait":"line","x":-935},{"v0":49,"v1":50,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-1157},{"v0":51,"v1":52,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-1157},{"v0":53,"v1":54,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":1157},{"v0":55,"v1":56,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":1157},{"v0":57,"v1":58,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":-485},{"v0":59,"v1":60,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":485},{"v0":61,"v1":62,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":62,"v1":63,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"],"x":-419},{"v0":63,"v1":64,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":65,"v1":66,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":66,"v1":67,"vis":false,"cMask":["c0"],"cGroup":["red","blue"],"x":419},{"v0":67,"v1":68,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":69,"v1":70,"color":"FFFFFF","bCoef":0,"cMask":["ball","red","blue"],"y":-124},{"v0":71,"v1":72,"color":"FFFFFF","bCoef":0,"cMask":["ball","red","blue"],"y":124},{"v0":72,"v1":70,"curve":5,"color":"FFFFFF","bCoef":0,"cMask":["ball","red","blue"],"bias":0},{"v0":70,"v1":73,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":72,"v1":74,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":75,"v1":76,"color":"FFFFFF","bCoef":0,"cMask":["ball","red","blue"],"y":124},{"v0":77,"v1":78,"color":"FFFFFF","bCoef":0,"cMask":["ball","red","blue"],"y":-124},{"v0":76,"v1":78,"curve":-5,"color":"FFFFFF","bCoef":0,"cMask":["ball","red","blue"]},{"v0":78,"v1":79,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":76,"v1":80,"color":"FFFFFF","bCoef":0,"cMask":["ball"]}],"goals":[{"p0":[-1162.45,124],"p1":[-1162.45,-124],"team":"red"},{"p0":[1162.45,124],"p1":[1162.45,-124],"team":"blue","radius":0,"invMass":1}],"discs":[{"radius":0,"invMass":0,"pos":[-1311,-19],"color":"ffffffff","bCoef":0,"cMask":["red"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1310,29],"color":"ffffffff","bCoef":0,"cMask":["blue"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1308,62],"color":"ffffffff","bCoef":0,"cMask":["red","blue"],"cGroup":["ball"]},{"radius":2.7,"pos":[-1150,600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":5,"invMass":0,"pos":[-1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[-1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2.7,"pos":[-1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":0,"pos":[-1149,-485],"cMask":["none"]},{"radius":0,"pos":[1149,-485],"cMask":["none"]},{"radius":0,"pos":[-1149,-485],"cMask":["none"]},{"radius":0,"pos":[1149,-485],"cMask":["none"]},{"radius":0,"pos":[-1149,485],"cMask":["none"]},{"radius":0,"pos":[1149,485],"cMask":["none"]},{"radius":0,"pos":[-1149,485],"cMask":["none"]},{"radius":0,"pos":[1149,485],"cMask":["none"]}],"planes":[{"normal":[0,1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-627,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,-627],"b":[1300,-627]}}},{"normal":[0,-1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-627,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,627],"b":[1300,627]}}},{"normal":[0,1],"dist":-670,"bCoef":0,"_data":{"extremes":{"normal":[0,1],"dist":-670,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,-670],"b":[1300,-670]}}},{"normal":[0,-1],"dist":-670,"bCoef":0,"_data":{"extremes":{"normal":[0,-1],"dist":-670,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,670],"b":[1300,670]}}},{"normal":[1,0],"dist":-1300,"bCoef":0,"_data":{"extremes":{"normal":[1,0],"dist":-1300,"canvas_rect":[-1311,-675,1300,675],"a":[-1300,-675],"b":[-1300,675]}}},{"normal":[-1,0],"dist":-1300,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-1300,"canvas_rect":[-1311,-675,1300,675],"a":[1300,-675],"b":[1300,675]}}},{"normal":[1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-1230,"canvas_rect":[-1311,-675,1300,675],"a":[-1230,-675],"b":[-1230,675]}}},{"normal":[-1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-1230,"canvas_rect":[-1311,-675,1300,675],"a":[1230,-675],"b":[1230,675]}}}],"traits":{"ballArea":{"vis":false,"bCoef":0,"cMask":["ball"],"cGroup":["ball"]},"goalPost":{"radius":5,"invMass":0,"bCoef":1,"cGroup":["ball"]},"rightNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c3"]},"leftNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c2"]},"stanchion":{"radius":3,"invMass":0,"bCoef":3,"cMask":["none"]},"cornerflag":{"radius":3,"invMass":0,"bCoef":0.2,"color":"FFFF00","cMask":["ball"]},"reargoalNetleft":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":10,"color":"C7E6BD"},"reargoalNetright":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-10,"color":"C7E6BD"},"sidegoalNet":{"vis":true,"bCoef":1,"cMask":["ball","red","blue"],"color":"C7E6BD"},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"cMask":[],"color":"C7E6BD"}},"joints":[{"d0":16,"d1":17,"strength":"rigid","color":"ec7458","length":null},{"d0":18,"d1":19,"strength":"rigid","color":"48bef9","length":null},{"d0":20,"d1":21,"strength":"rigid","color":"ec7458","length":null},{"d0":22,"d1":23,"strength":"rigid","color":"48bef9","length":null}],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}
	return realSoccerMap;
}

/*------------------------------ END OF STADIUMS ----------------------------*/

// ------------------------------------------------
// Global Variables
// ------------------------------------------------
var roomName = "🏆 TVH " + room_type + " - Bóng Đá - ⚽ 🏆";
var roomPassword = null;
var maxPlayers = 30;

var token = "";
var roomLink = "";
var gameTime = 10; //default game time if 0 is selected
var map = "RSR";





var room = HBInit({
	roomName: roomName,
	password: roomPassword,
	maxPlayers: maxPlayers,
	public: true,
	geo: {code: "VN", lat: 11.9362, lon: 108.4172},
	noPlayer: true,
	token: token
});

// Custom m
var created = false
var is_voting = false
var dongykick = 0
var khongdongykick = 0
var kick_timer_run = false
var nguoibikick = null
var voteban = false
var voted_player = []
var admin_cancel_votekick = false
var vote_ban_but_out = []
// powershot_custom

var powershot_level = 0
// admin list_gk
var admin_list = {
	1:'Sơ Cấp',
	2: 'Trung Cấp',
	3:'Siêu Cấp'
}
// Play game without admin
var RedPlayer_Count = 0
var BluePlayer_Count = 0
var Begin_match = false
var list_waiting = {}
var on_match = false
var has_player = false

var need_register = []
var need_login = []
var ids = []
// Database
var authList = []
var temp_players = []
// Play game with admin
var admin_control = false
// muted
var mute_list = []
// ban temp list
var ban_list = []
var list_voted = []
// taixiu
var tx_dangdienra = false
var login = true
var taixiu = false
var phien_taixiu = 0
var xiu_players = []
var tai_players = []
var datcuoc_players = []
// quest

// shop
var players_using = []
// thành tựu
var thanhtuu_list = {
	'vuacobac': ['🎰'], //  tai xxiu win > 200
	'kephaluoi': ['⚽🥅'], // goal > 200
	'kedotluoi': ['🔥🥅'], // goal > 500
	'nghiencobac': ['🃏'], // taixiu win > 20
	'trumphanluoi':['🐸'], // owngoal > 20
	'noobchuyenhai':['🥉⚽'], // assits > 50
	'juniorchuyenhai':['🥈⚽'], // assits > 220
	'seniorchuyenhai':['🥇⚽'], // assits > 500
	'pele':['👑⚽'], // assits > 500 ,goals > 500 ,wins > 200
}
var ball_color = {
	'tim': ['Màu tím','0x9B59B6'],
	'xanhla': ['Màu xanh lá','0x28B463'],
	'xanhdam': ['Màu xanh nước đậm','0x00A2FF'],
	'hong':['Màu hồng cánh sen','0xff33ff'],
	'xanhsang':['Màu xanh nước sáng','0x00ffff'],
	'maudo':['Màu đỏ','0xff0000'],
	'xanhnhat':['Màu xanh nước nhạt','0x85C1E9'],
	'xanh_lanuoc':['Màu kết hợp xanh lá + nước','0x76D7C4'],
	'xanh_lavang':['Màu xanh lá vàng','0x58D68D'],
	'cam':['Màu cam','0xE67E22'],
}

// Request DB
var  PlayerObject = new Map()

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
		this.kickPosition;
		this.secondLastKickerTeam;
		this.redScore = 0;
		this.blueScore = 0;
		this.powershotCounter = 0;
		this.powershotID = 0;
		this.powershotTrigger = false;
		this.rsOffSide = false;
		this.lastIsThrowIn = false;
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
room.setTimeLimit(12);

room.onRoomLink = function(url) {
	roomLink = url;
	
}

room.onStadiumChange = function(newStadiumName, byPlayer) {
	if (byPlayer != null) {
		map = "custom";
	}
	else {
		map = "RSR";
	}
}

// google translate
var language_data = {
	"vi": [], // vn
	"en":[], // en 
	"ko":[], // korea
	"lo":[],// lao
	"ms":[],// malay
	"th":[],// thailand
	"id":[],// indo
	"ja":[],// japan
	"my":[],//myanma
	"km":[],//Khmer
	"hi":[], // Hindi
	"zh-CN":[],//Chinese (Simplified),
	"zh-TW":[] // Chinese (Traditional)
}
function Translate( msg,player,lang,type,color,style,sound){ // 'xin chao',en,announce
	var payload = {  "message":msg,
	"lang":lang
  }
   fetch('http://localhost:3003/translate', {
  method: 'POST',
  body: JSON.stringify(payload),
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.text())
.then(data => handle_translate(data,player,lang,type,color,style,sound))
}
function handle_translate(data,player,lang,type,color,style,sound) {
	// console.log(player)
	var player = room.getPlayer(player.id)
	if (player){
		if (type == "whi"){
	// send for one person
		var check = room.getPlayer(player.id)
		if (player['id']&& check != null)	room.sendAnnouncement(data, player.id, color, style, sound);
		
		
		}
		else if (type =='ann'){
			var check = room.getPlayer(player.id)
			if (player['id'] && check != null)room.sendAnnouncement("📢: "+data, player.id, color, style, sound);
			
		}
	}
}
// Mongo

var nplayer_data = []
function RequestNewPlayer( pl_data,pl){
    fetch('http://localhost:3003/dangkyPlayer', {
  method: 'POST',
  body: JSON.stringify({  pl_data }),
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.text())
.then(data => dangky_handle(data,pl))
}
function dangky_handle(data,pl){
	whisper(data,pl.id,0x26BEDC, "bold", 0)
	if (data.includes("Đăng ký tài khoản thành công") ){
	GetPlayer(pl)
	
	}
/* 	else { // else falied
		
	} */
}
// update player
function UpdatePlayer( key,player_name){  // update player
	if (!player_name in authList) {
		whisper('Chưa đăng nhập thì sao mà lưu ??', PlayerObject[player_name]["id"])
		return false;
	}
	
	var send_data = {"playerName":player_name,
	"data":PlayerObject[player_name], // [0] = key, [1] = data
	"_id": PlayerObject[player_name]["_id"]
	}
  fetch('http://localhost:3003/updatePlayer', {
  method: 'POST',
  body: JSON.stringify({  send_data }),
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.text())
// .then(data => whisper(data,PlayerObject[player_name].id))
}

// get total data
//
async function GetPlayer( player){
    const d = await  fetch('http://localhost:3003/getPlayer', { // get total data
  method: 'POST',
  body: JSON.stringify({  player }),
  headers: { 'Content-Type': 'application/json' }
})
.then(response => response.text())
.then(data => playerDataHandle(player,data))
/*   .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err)) */
}

function playerDataHandle(player,player_data) {
	
	if (!player_data.includes("Tài khoản KHÔNG") ){
		var temp = JSON.parse(player_data) 
		PlayerObject[player.name] = temp["data"]
		whisper(temp["text"],player.id,0xE74C3C,'bold')
		PlayerObject[player.name].id = player.id
	}
	else whisper(player_data,player.id,0xE74C3C,'bold')
}
// get custom data

async function GetPlayerData( playername,key){ // get custom data

	var payload = {
		'playername':playername,
		'key':key
	}
   const response = await fetch('http://localhost:3003/getPlayerCustomData', {
  method: 'POST',
  body: JSON.stringify({  payload }),
  headers: { 'Content-Type': 'application/json' }
})


return await response.json()
}

function UpdatePlayerCustomData(player,key,data)
{
	
	PlayerObject[player.name][key] = data
	return true
}
function HasGetData(playername,key,data){
	for (data in nplayer_data) {
		if (nplayer_data[data][0] == playername && nplayer_data[data][1] == key && nplayer_data[data][2] == data) return true
		else return false
	}
}
// another function
function cleardata(){
    fetch('http://localhost:3003/cleardata', {
  method: 'POST',
  body: JSON.stringify({}),
  headers: { 'Content-Type': 'application/json' }
})

}
function updateBXH(){
    fetch('http://localhost:3003/updateBXH', {
  method: 'POST',
  body: JSON.stringify({}),
  headers: { 'Content-Type': 'application/json' }
})
/*   .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err)) */
}
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
// end
var dash_object = {}
// for banning
var player_conn = {}
var player_conn_name = []
var player_same_acc_check = {}
room.onPlayerJoin = function(player) {
	
	
if(player.name.indexOf("@") !== -1) {
	room.kickPlayer(player.id,'Chứa ký tự cấm',true)
}
if (db.log.filter((p) => p.id == player.id).length == 0) { db.log.push({ id: player.id, lm: [] }); }
	sleep(500).then(() => {
		room.sendAnnouncement("",player.id,0x000000,'normal',0)
		room.sendAnnouncement("",player.id,0x000000,'normal',0)
		room.sendAnnouncement("",player.id,0x000000,'normal',0)
		room.sendAnnouncement("",player.id,0x000000,'normal',0)
		room.sendAnnouncement("",player.id,0x000000,'normal',0)
		room.sendAnnouncement("",player.id,0x000000,'normal',0)
		room.sendAnnouncement("",player.id,0x000000,'normal',0)
		room.sendAnnouncement("",player.id,0x000000,'normal',0)
		room.sendAnnouncement("",player.id,0x000000,'normal',0)
		room.sendAnnouncement("",player.id,0x000000,'normal',0)
		let checkpl = false
		for (lang in language_data){
			if (language_data[lang].includes(player.name)) {
				checkpl = true
				break;
			}
		}
		if (checkpl == false) language_data['vi'].push(player.name)
			// console.log(language_data)
	})
	sleep(1000).then(() => {
	for (key in player_same_acc_check) {
		if (player_same_acc_check[key]  == player.auth) room.kickPlayer(player.id,'1 Acc Only',false)
			
	}
	
	player_same_acc_check[player.id] = player.auth
	if (vote_ban_but_out.includes(player.conn)) {
		
		room.kickPlayer(player.id,"Bị voteban nhưng out",true)
		delete player_ban_name[player.name]
		delete vote_ban_but_out[player.conn]
	}
	
	let lis = room.getPlayerList()
	for (pl in lis) {
		if (player.name == lis[pl].name && player.id != lis[pl].id){
			room.kickPlayer(player.id ,'Trùng tên')
		}
	}
	ps_object[player.id] = []
	dash_object[player.id] = 0
	whisper("🎖      🏆 Chào Mừng Đến Với Siêu CUP Thế Vận Hội  🏆              🎖 ", player.id, 0x58D68D, "bold", 0);
	whisper("🎖      Nhập !trogiup & !help và !lenh & !cmd để được xem cách chơi    🎖 ", player.id, 0x58D68D, "bold", 0);
	whisper("🎖     !shop để mua đồ | !rank và !stats để xem thông tin của mình       🎖 ", player.id, 0x58D68D, "bold", 0);
	whisper("🎖     Discord:     https://discord.gg/thevanhoi   🎖 ", player.id, 0xE59866, "bold", 0);

	GetPlayer(player)

	whisper("Language Support: Vietnam, English, Korea, Lao, Malay, Thailand, Indo, Japan, Myanmar, Khmer, Hindi, Chinese (Simplified & Traditional). Please Type: !lang_help to use", player.id, 0xA2D9CE, "bold", 0);
	announce("Hãy nhập !teamred | !teamblue để chọn team hoặc !spec để theo dõi",player.id);
	
	need_login.push(player.id)
	player_conn[player.id] = player.conn
	player_conn_name[player.conn] = [player.id,player.name]
	temp_players[player.id] = player.name
	ids[player.id] = player.name
	room.setTeamsLock(true)
	});
}



function dangnhaptaikhoan(player,pass) {
	if (player.name in authList){
		
		whisper("Bạn đã đăng nhập ", player.id, 0xDF2C2C, "bold", 0);
		return false;
	}
	else {
	if (PlayerObject[player.name]) {
		// console.log(PlayerObject[player.name])
		if (PlayerObject[player.name].matkhau == pass){ 
			delete temp_players[player.id]
			
			authList[player.name] = player.name
			if (PlayerObject[player.name].goals == undefined)  PlayerObject[player.name].goals = 0
			if (PlayerObject[player.name].wins == undefined)  PlayerObject[player.name].wins = 0
			if (PlayerObject[player.name].assists == undefined)  PlayerObject[player.name].assists = 0
			if (PlayerObject[player.name].ownGoals == undefined)  PlayerObject[player.name].ownGoals = 0
			if (PlayerObject[player.name].lose == undefined)  PlayerObject[player.name].lose = 0
			if (PlayerObject[player.name].khongthungluoi == undefined)  PlayerObject[player.name].khongthungluoi = 0
			if (PlayerObject[player.name].admin_level == 0 ||PlayerObject[player.name].admin_level == undefined ){
				if (PlayerObject[player.name].admin_level == undefined) PlayerObject[player.name].admin_level == 0
			announce('Cầu thủ ' + PlayerObject[player.name].level + ' [ ' + player.name +' ] đã đăng nhập !',null,0xF1948A)
			whisper("Đăng nhập thành công", player.id, 0x26BEDC, "bold", 0); // Login success
			
			}
			else if  (PlayerObject[player.name].admin_level >= 1){
				announce('Admin ' + admin_list[PlayerObject[player.name].admin_level] + ' [ ' + player.name +' ] đã đăng nhập !',null,0xF1948A)
				room.setPlayerAdmin(player.id,true)
				whisper("Đăng nhập thành công vào tài khoản Admin", player.id, 0x26BEDC, "bold", 0); // Login success
				
			}
			
			PlayerObject[player.name].first_entergame = Date.now()
			ranking(player)
			delete need_login[player.id]

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
function dangkytaikhoan(player,pass) {
	if (player.name in authList){
		whisper("Bạn đã đăng nhập ", player.id, 0xDCBE26, "bold", 0); // warning
		return false;
	}
	else {
		var dangky_data = {
        'playerName' : player.name,
		'matkhau' : pass,
        'games' : 0,
        'wins' : 0,
        'winrate' : '0.00%',
       ' playtime' : 0,
        'goals' : 0,
        'assists' : 0,
        'ownGoals ': 0,
		'level' : "⭐",
		'rankpoint' : 0,
		'lose' : 0,
		'khongthungluoi' : 0,
		'money' : 0,
		'tuido': {
			'nuoctangluc' : 0,
			'thuocgiam' : 0,
			'thuoctang' : 0,
			'nuoctanghinh' : 0,
			'thuoctanghinh' : 0,
			'list_mau_bong': []
		},
		'thanhtuu' : [],
		'cur_thanhtuu' : "",
		'win_taixiu' : 0,
		'first_entergame' : 0,
		'last_entergame' : 0,
		'admin_level':0,
		'id':0,
		'cur_maubong':'',
		'discord_money':0,
		'discord_id':undefined
		}

		//whisper("Đăng ký thành công ! Mật Khẩu của bạn là: " + PlayerObject[player.name].matkhau, player.id, 0x26BEDC, "bold", 0); // success
		
		RequestNewPlayer( dangky_data,player)
	}

}
function initPlayerStats(player){
	if (stats.get(player.name)) return;
	stats.set(player.name, [0, 0, 0, 0, 0, 0]) // goals, assists, wins, loses, og, cs
}
room.onPlayerLeave = function(player) {
	if (PlayerObject[player.name]){ PlayerObject[player.name].last_entergame =  Date.now()
		UpdatePlayer('last_entergame',player.name)
	}
db.log.splice(f(db.log, 'id', player.id), 1);

	for (lang in language_data) {
		const index = language_data[lang].indexOf(player.name);
		if (index > -1) { // only splice array when item is found
			language_data[lang].splice(index, 1); // 2nd parameter means remove one item only
		}
	}
	
	delete player_same_acc_check[player.id]
	// console.log(player_same_acc_check)
	resetTeamCount()
	
	delete player_conn_name[player.name]
	delete player_conn[player.id]
	delete dash_object[player.id]
	delete PlayerObject[player.name]
	delete authList[player.name]
	delete ids[player.id]
	delete need_login[player.id]
	delete list_waiting[player.id]
	
}
// time online caculator


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



room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
	if (byPlayer != null) {
		
			if (PlayerObject[changedPlayer.name].admin_level == undefined) room.setPlayerAdmin(changedPlayer.id,false)
		if (changedPlayer.id != byPlayer.id) {
				
			room.setPlayerAdmin(changedPlayer.id,false)
			room.setPlayerAdmin(byPlayer.id,false)
		}
		else {
			room.setPlayerAdmin(changedPlayer.id,true)
		}
	}
}
function remove_admin(changedPlayer){
		if (PlayerObject[changedPlayer.name].admin_level > 0) {
				room.setPlayerAdmin(changedPlayer.id,true)
			}	
}
function cannot_remove(changedPlayer){
			if (PlayerObject[changedPlayer.name].admin_level > 0) {
				room.kickPlayer(byPlayer.id, "Admin là cố định không thể remove", false);
				room.setPlayerAdmin(changedPlayer.id, true);
			}
}
room.onGameStart = function(byPlayer) {
	if (map == "RSR") {
	
		    gameState = 'running';
		[redTeam,blueTeam] = whichTeam();
		ballCarrying = initBallCarrying(redTeam, blueTeam);
		room.setDiscProperties(0, {invMass: 1.05});

		if (byPlayer == null) {
			game = new Game();	
			announce("Trận đấu sẽ kéo dài trong " + gameTime + " phút");
			announce("Trận đấu đang được ghi lại và đăng tải tự động lên discord: https://discord.gg/thevanhoi");
			room.startRecording();
			dash_object = []
		}
		else {
			if (room.getScores().timeLimit != 0) {
				gameTime = room.getScores().timeLimit / 60;
			}
			else {
				gameTime = 12;
			}
			room.stopGame();
			room.setTimeLimit(0);			
			room.startGame();
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
}
		rand = getRandomInt(15)
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
}	
		
		
		on_match = true
	}
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
room.onGameStop = function(byPlayer) {
	if (map == "RSR") {
		scorers = undefined;
		whoTouchedBall = [init, init];
		whoTouchedLast = undefined;
		gk = [init, init];
		kickOff = false;
		hasFinished = false;
		if (byPlayer != null) {
			room.setTimeLimit(gameTime);
		}
		dash_object = []
		isOvertime()
		on_match = false
		start_match()
		gameState = null;
		game_start = false
	}
		
}

room.onPlayerBallKick = function(player) {	
	if (map == "RSR") {
		whoTouchedLast = player;
		game.rsTouchTeam = player.team;
		game.updateLastKicker(player.id, player.name, player.team);
		game.kickPosition = player.position
		if (toggle_offside == false) {
			toggle_offside = true
		}
		//=========== POWERSHOT CODE ===========
		if (powerShotMode == true) {
			if (game.powershotCounter > 0 && game.powershotCounter < 75) {
				room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed * 0.0001});

			}
			else if (game.powershotCounter > 85 && game.powershotCounter < 150) {
				room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed * 0.007,ygravity: room.getPlayerDiscProperties(player.id).yspeed * 0.03});
			
				room.sendAnnouncement(player.name +" đã thực hiện 1 cú sút mạnh, đánh giá: C !", player.pm, 0x33dddd, "bold", 0);
			}
			else if (game.powershotCounter >150 && game.powershotCounter < 250) {
				room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed * 0.01,ygravity: room.getPlayerDiscProperties(player.id).yspeed * 0.03});
					
				room.sendAnnouncement(player.name +" đã thực hiện 1 cú sút mạnh, đánh giá: B  !", player.pm, 0x33dddd, "bold", 0);

			}
			else if (game.powershotCounter > 250&& game.powershotCounter < 350) {
				room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed * 0.05,ygravity: room.getPlayerDiscProperties(player.id).yspeed * 0.03});
					
				room.sendAnnouncement(player.name +" đã thực hiện 1 cú sút mạnh, đánh giá: A  !", player.pm, 0x33dddd, "bold", 0);
			}
			else if (game.powershotCounter > 350) {
				room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed * 0.1,ygravity: room.getPlayerDiscProperties(player.id).yspeed * 0.03});
					
				room.sendAnnouncement(player.name +" đã thực hiện 1 cú sút  mạnh, đánh giá: S  !", player.pm, 0x33dddd, "bold", 0);
			}
			
			game.powershotCounter = 0;
			game.powershotID = 0;
			game.powershotTrigger = false;
			
			if (parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) != 1.05) {
				room.setDiscProperties(0, {invMass: 1.05});
	
			}
			sleep(600).then(() => {
				room.setDiscProperties(0, {xgravity: 0,ygravity: 0});
				
					});
			room.setDiscProperties(0, {color: "0xFFFFFF"});
		}
		//=========== POWERSHOT CODE ===========
		game.lastIsThrowIn = false
		if (game.rsOffSide == true) {
			room.setDiscProperties(1, {radius:0});
			room.setDiscProperties(2, {radius:0});
			game.rsOffSide = false
		}
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
			room.setDiscProperties(0, {color: "0xFFFFFF"});
			
			game.rsTimer = 1000000;
			game.warningCount++;	
			
			// set gravity for real soccer corners/goalkicks
			if (game.rsCorner == true) {
				room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/16*-1, ygravity: (room.getPlayerDiscProperties(player.id).yspeed * 0.1)});
			}	
			if (game.rsGoalKick == true) {		
				room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/16,ygravity: room.getPlayerDiscProperties(player.id).yspeed * 0.03});			
				//room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed * 0.008, ygravity: (room.getPlayerDiscProperties(player.id).yspeed * 0.1)});	
			}
			
			game.rsCorner = false;
			game.rsGoalKick = false;
			game.outStatus = "";		
		}		
		
		if (game.rsActive == false && (game.outStatus == "redThrow" || game.outStatus == "blueThrow")) { 		
			game.outStatus = "";
			game.rsActive = true;
			game.rsReady = false;
			game.lastIsThrowIn = true
			room.setDiscProperties(0, {color: "0xFB9C00"});
			game.rsTimer = 1000000;
			game.warningCount++;			
		}	
	}
}



room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {	
	if (byPlayer != null){
	if (byPlayer ==kickedPlayer ) return false;
	
	if (PlayerObject[byPlayer.name]) {
				if (!'admin_level' in PlayerObject[byPlayer.name] ) {
					PlayerObject[byPlayer.name]['admin_level'] = 0
					room.kickPlayer(byPlayer.id, "Không đủ quyền hạn để ban/kick", false);
					return false;
				}
				if (PlayerObject[byPlayer.name].admin_level <2) {
					room.kickPlayer(byPlayer.id, "Không đủ quyền hạn để ban/kick", false);
					room.clearBan(kickedPlayer.id);
				}
				else if (PlayerObject[kickedPlayer.name] && PlayerObject[byPlayer.name].admin_level ==2 && PlayerObject[kickedPlayer.name].admin_level == 3) {
					room.kickPlayer(byPlayer.id, "Không đủ quyền hạn để ban/kick", false);
					room.clearBan(kickedPlayer.id);
				}
	
	}



	}
	resetTeamCount()
}
function check_player_using(player_name){
	for (us in players_using){
		if(player_name == players_using[us][0]){
			players_using.splice(us,1)
		}
	}
}
var db = { p: { N: 5, kt: 1 }, log: [] }; 
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
			room.kickPlayer(player.id, "Anti Spam", true); }
	 } 
 
}

room.onPlayerChat = function(player, message) {
	spamFilter(player,message)
	
	if (message.includes('@here') || message.includes('@everyone') || message.includes('<@') && message.includes('>') ) {
		room.kickPlayer(player.id,'Ngôn từ không hợp lệ',true)
		return
	}
	let list_players =  room.getPlayerList()
	let inc = player.name in authList
	if (message.startsWith("!")) {

		message = message.substr(1);
		let args = message.split(" ");
		var tb_message = message.substr(7)
		var report_message = message.substr(7)
		if (args[0] == "tbchat" && player.admin) {
			if (PlayerObject[player.name].admin_level > 1){
				announce(tb_message,null,0xf56f42);
			}
			else{
				whisper("Không đủ quyền hạn", player.id);
			}
		}
		else if (args[0] == "updatebxh_tvh") {
			if (player.admin  ){
				updateBXH()
			
			}
		}	
		else if (args[0] == "lang_help") {
			whisper("Vietnam: !vi", player.id, 0xE59866, "bold", 0,false);
			whisper("English: !en", player.id, 0xE59866, "bold", 0,false);
			whisper("Korean: !ko", player.id, 0xE59866, "bold", 0,false);
			whisper("Lao: !lo", player.id, 0xE59866, "bold", 0,false);
			whisper("Malaysia: !ms", player.id, 0xE59866, "bold", 0,false);
			whisper("Thailand: !th", player.id, 0xE59866, "bold", 0,false);
			whisper("Indonesia: !id", player.id, 0xE59866, "bold", 0,false);
			whisper("Japan: !ja", player.id, 0xE59866, "bold", 0,false);
			whisper("Myanmar: !my", player.id, 0xE59866, "bold", 0,false);
			whisper("Khmer: !km", player.id, 0xE59866, "bold", 0,false);
			whisper("Hindi: !hi", player.id, 0xE59866, "bold", 0,false);
			whisper("Chinese Simplified: !zh-CN", player.id, 0xE59866, "bold", 0,false);
			whisper("Chinese Traditional: !zh-TW ", player.id, 0xE59866, "bold", 0,false);
		}
		else if (language_data[args[0]]) {
			
			for (lang in language_data){
				if ( language_data[lang].includes(player.name) ) {
					
					const index = language_data[lang].indexOf(player.name);
					if (index > -1) { // only splice array when item is found
					  language_data[lang].splice(index, 1); // 2nd parameter means remove one item only
					}
				}
			}
			if (!language_data[args[0]].includes(player.name)) {
			language_data[args[0]].push(player.name)
			whisper("Ngôn Ngữ Mới: "+ args[0],player.id,0xA2D9CE,"bold",false)
			}
			
		}
		else if (args[0] == "discord_id") {
			if (args[1] != undefined  ){
				if (player.name in authList){
					if (PlayerObject[player.name]){
						if ( !PlayerObject[player.name]['discord_id']) PlayerObject[player.name]['discord_id'] = ""
						PlayerObject[player.name]['discord_id'] = args[1]
						whisper("Bạn đã cập nhật discord id của mình là: "+ args[1],player.id)
						UpdatePlayer("discord_id",player.name)
						
					}
				}
			}
		}
		else if (args[0] == "lamtrontien") {
			if (PlayerObject[player.name] && player.name in authList ){
				
				PlayerObject[player.name].money = parseInt(PlayerObject[player.name].money)
				whisper("Bạn đã làm tròn tiền, số tiền mới của bạn là: " + numberWithCommas(PlayerObject[player.name].money ) + "đ",player.id)
				UpdatePlayer('money',player.name)


				
			}
		}
		else if (args[0] == "dangnhap" ||args[0] == "login" ) {
			if (args[1] != undefined  ){
				dangnhaptaikhoan(player,args[1])
			
			}
		}
		// else if (args[0] == "cleardata_tvh") {
			// if (player.admin ){
				// cleardata()
			
			// }
		// }
		else if (args[0] == "rank") {
			if (player.name in authList){
			
			whisper("Rank: " + ranking(player) + " điểm", player.id,0xcc9900, "bold", 0);
			whisper("Bậc sao: " + PlayerObject[player.name].level, player.id,0xcc9900, "bold", 0);
			}
			else {
				whisper("Đăng nhập dùm cái rồi làm gì thì làm", player.id, 0xff20ff, "normal", 1);
			}
			
		}	
		else if (args[0] == 'mute' && player.admin == true) {
			
			if (PlayerObject[player.name].admin_level > 1){
				if (Number(args[1]) == player.id){
					whisper("Bạn không thể mute chính mình", player.id,null, "normal", 1);
					return false;
				}
				for (p in list_players){
					if (Number(args[1]) == list_players[p].id){
						whisper("Bạn đã bị mute", list_players[p].id,null, "normal", 1);
						announce("Cầu thủ: " + list_players[p].name + ' đã bị mute!');
						mute_list.push(list_players[p].name)
						
					}
				}
			}
			else{
				whisper("Bạn không đủ quyền hạn", player.id,null, "normal", 1);
			}

		} 
		else if (args[0] == "unmute"&& player.admin == true) {
			if (PlayerObject[player.name].admin_level > 1){
				for (p in list_players){
					if (Number(args[1]) == list_players[p].id){
						
						let index = mute_list.indexOf(list_players[p].name);
						if (index > -1) {
							mute_list.splice(index, 1); // 2nd parameter means remove one item only
							whisper("Bạn đã được unmute",list_players[p].id,null, "normal", 1);
							announce("Cầu thủ: " + list_players[p].name + ' đã không còn bị mute!');
							break;
						}
						
					}
				}
			}
			else{
				whisper("Bạn không đủ quyền hạn", player.id,null, "normal", 1);
			}

		}
		else if (args[0] == "poss") {
			
			teamPossFun(player,'whisper')
		}

		else if (args[0] == "tvh_setadmin") {
			
			if (args[1] != undefined ) {
				var makepl = room.getPlayer(Number(args[1]))
				if (makepl == undefined) return false;
				if (PlayerObject[makepl.name]) {
					if (Number(args[2]) > 3 || Number(args[2]) < 0) return false;
					if (!'admin_level' in PlayerObject[makepl.name])  PlayerObject[makepl.name]['admin_level'] = undefined
					PlayerObject[makepl.name].admin_level = Number(args[2])
					if (Number(args[2]) != 0)announce('Người chơi ' + makepl.name + ' đã được phong làm Admin ' + admin_list[Number(args[2])])
						else {
							announce('Người chơi ' + makepl.name + ' đã bị giáng chức !')
						room.setPlayerAdmin(Number(args[1]),false)
						return false;
					}
					room.setPlayerAdmin(Number(args[1]),true)
					UpdatePlayer('admin_level',makepl.name)
					
					
				}
			else whisper('Người chơi chơi chưa đăng nhập',player.id )
				
			}
		}
		else if (args[0] == "_qdsetgoals_" && player.admin && !args[1] == undefined) {
			
			if (PlayerObject[player.name]) {
				PlayerObject[player.name].goals += Number(args[1])
				
			}
		}
		else if (args[0] == "maubong") {
			if (player.name in authList){
				var tt_string = ''
				if (! PlayerObject[player.name]['tuido']['list_mau_bong']) PlayerObject[player.name]['tuido']['list_mau_bong'] = []
				if (PlayerObject[player.name]['tuido']['list_mau_bong'].length <= 0) { 
				whisper('Bạn không sở hữu màu bóng nào',player.id ,0xD7BDE2)
				return false;
					}
				for (m in PlayerObject[player.name]['tuido']['list_mau_bong']) {
					tt_string += ball_color[PlayerObject[player.name]['tuido']['list_mau_bong'][m]][0] + " (ID: " + PlayerObject[player.name]['tuido']['list_mau_bong'][m] + "), "
				}
				whisper('Màu bóng đang có: ' + tt_string,player.id,0xD7BDE2,'bold' )
			}
		}
		else if (args[0] == "sudungmaubong") {
			if (player.name in authList){ 
				if (args[1] == undefined) {
					whisper('Vui lòng nhập id của màu bóng VD: !sudungmaubong tim',player.id,0xD7BDE2 )
					whisper('Để sử dụng màu mặc định hãy nhập: !sudungmaubong none',player.id ,0xD7BDE2)
					return false;
					}
				if (PlayerObject[player.name]['tuido']['list_mau_bong'] <= 0) {
					whisper('Không có màu bóng nào!',player.id )
					return false;
					}
				if (args[1] == 'none') {
					PlayerObject[player.name]['cur_maubong'] = 'none'
					whisper('Bạn không còn sử dụng màu bóng! ' ,player.id,0xD7BDE2 )
					
					
					return false;
				}
				if  (!PlayerObject[player.name]['tuido']['list_mau_bong']) PlayerObject[player.name]['tuido']['list_mau_bong'] = []
				if (PlayerObject[player.name]['tuido']['list_mau_bong'].includes(args[1])) {
					PlayerObject[player.name]['cur_maubong'] = args[1]
					whisper('Bạn đã sử dụng màu bóng: ' + ball_color[args[1]][0]  ,player.id,0xD7BDE2 )
					
					
				}
				UpdatePlayer('cur_maubong',player.name)
							
			}
		}
		else if (args[0] == 'thanhtuu' || args[0] == 'tt'){

			if (player.name in authList){
				var tt_string = ''
				if (PlayerObject[player.name].thanhtuu == undefined) PlayerObject[player.name].thanhtuu = []
				if (PlayerObject[player.name].thanhtuu.length <= 0) { 
				
				whisper('Bạn không sở hữu thành tựu nào',player.id,0xD7BDE2 )
				return false;
					}
				for (tt in PlayerObject[player.name].thanhtuu) {
					tt_string += thanhtuu_list[PlayerObject[player.name].thanhtuu[tt]] + " (ID: " + PlayerObject[player.name].thanhtuu[tt] + "), "
				}
				whisper('Thành tựu đã sở hữu: ' + tt_string,player.id ,0xD7BDE2,'bold')
			}
			
		} 
		else if (args[0] == 'sudungtt') {
			if (player.name in authList){
				if (args[1] == undefined) {
					whisper('Vui lòng nhập id của thành tựu! VD: !sudungtt nghiencobac',player.id,0xD7BDE2 )
					whisper('Để tắt chức năng thành tựu hãy nhập !sudungtt none',player.id ,0xD7BDE2)
					return false;
					}
			
				if (PlayerObject[player.name].thanhtuu.length <= 0) {
					whisper('Không có thành tựu nào!',player.id,0xD7BDE2 )
					return false;
					}
				if (args[1] == 'none') {
					PlayerObject[player.name].cur_thanhtuu = ''
					whisper('Bạn không còn sử dụng thành tựu! ' ,player.id ,0xD7BDE2)
					
					
					return false;
				}
				if (PlayerObject[player.name].thanhtuu.includes(args[1])) {
					PlayerObject[player.name].cur_thanhtuu = args[1]
					whisper('Bạn đã sử dụng thành tựu: ' + thanhtuu_list[args[1]]  ,player.id,0xD7BDE2,'bold' )
					
					
				}
				UpdatePlayer('cur_thanhtuu',player.name)
				
				
			}
		}
		else if (args[0] == "qd_banadmin") {
			if (PlayerObject[player.name].admin_level > 2){
				for (p in list_players){
					if (Number(args[1]) == list_players[p].id && list_players[p].admin){
						announce("Admin " + list_players[p].name + ' đã bị banned bởi hệ thống!');
						room.kickPlayer(list_players[p].id , "Admin Banned", true);
					}
				}
			
		}
		}
		else if (args[0] == "qdban_admin_") {
				for (p in list_players){
					if (Number(args[1]) == list_players[p].id && list_players[p].admin){
						announce("Admin " + list_players[p].name + ' đã bị banned bởi hệ thống!');
						room.kickPlayer(list_players[p].id , "Admin Banned", true);
					}
				}
			
		}
		else if (args[0] == "_qdkick_") {
				for (p in list_players){
					if (Number(args[1]) == list_players[p].id){
						announce("Người chơi " + list_players[p].name + ' đã bị kick bởi hệ thống!');
						room.kickPlayer(list_players[p].id , "Kicked", false);
					}
				}
			
		}
		else if (args[0] == "_qdhuyvote_") {
			admin_cancel_votekick = true
			
		}
		else if (args[0] == "_qdtanghinh_" && player.admin) {
			room.setPlayerDiscProperties(player.id,{radius: 0})
			
		}
		else if (args[0] == "_qdbinhthuong_") {
			room.setPlayerDiscProperties(player.id,{radius: 15})
			
		}
		else if (args[0] == "_qdto_") {
			room.setPlayerDiscProperties(player.id,{radius: 18})
			
		}
		else if (args[0] == "_qdnho_") {
			room.setPlayerDiscProperties(player.id,{radius: 13})
			
		}
		else if (args[0] == "qd_ban") {
			if (PlayerObject[player.name].admin_level > 2){
				for (p in list_players){
					if (Number(args[1]) == list_players[p].id && !list_players[p].admin){
						announce("Người chơi " + list_players[p].name + ' đã bị banned bởi hệ thống!');
						room.kickPlayer(list_players[p].id , "Banned", true);
					}
				}
			
		}
		}
		else if (args[0] == "qd_kick") {
			if (PlayerObject[player.name].admin_level > 2){
				for (p in list_players){
					if (Number(args[1]) == list_players[p].id){
						announce("Người chơi " + list_players[p].name + ' đã bị kick bởi hệ thống!');
						room.kickPlayer(list_players[p].id , "Kicked", false);
					}
				}
			
		}
		}
		else if (args[0] == "poss") {
			
			teamPossFun(player,'whisper')
		}
		else if (args[0] == 'chuyentien'){
			if (player.name in authList) {
			if (args[1] != undefined && Number(args[1]) && args[2] != undefined && Number(args[2])){
				if (player.id == Number(args[1])) {
					 whisper('Không thể tự chuyển tiền cho mình' ,player.id)
					 return false;
				}
				if (Number(args[2]) > 0 ) {
					
					var target = room.getPlayer(Number(args[1]))
					if (target != null && target.name in authList) {
						if (PlayerObject[target.name]){

							
							if (PlayerObject[player.name].money > 0 && PlayerObject[player.name].money >= Number(args[2])){
							PlayerObject[player.name].money -= Number(args[2])
							PlayerObject[target.name].money += Number(args[2])
							whisper('Bạn đã nhận được: ' + numberWithCommas(Number(args[2])) + 'đ từ ' + player.name ,target.id)
							whisper('Bạn đã chuyển: ' + numberWithCommas(Number(args[2])) + 'đ cho ' + target.name ,player.id)
							UpdatePlayer('money',player.name)
							UpdatePlayer('money',target.name)
							sendChuyentienLog("Người chơi: [ " + player.name + " ] đã chuyển "+ numberWithCommas(Number(args[2]))+"đ cho [ " + target.name +" ]")
							
						}
						else whisper('Tài khoản không đủ tiền ' ,player.id)
						}
					}
					else whisper('Người chơi này chưa đăng nhập hoặc không tồn tại ID này' ,player.id)
				}
				else whisper('Chuyển tiền > 0' ,player.id)

			}
			else whisper('Nhập !chuyentien [id] [số tiền]| VD: !chuyentien 2 50000 ' ,player.id)
		}
		else whisper('Đăng nhập đi rồi hẵng chuyển !' ,player.id)
		}
		else if (args[0] == "shop") {
			if (player.name in authList){
			if (args[1] == undefined) {
				whisper('-----------Cách Mua-----------------------------' ,player.id,0xD7BDE2,'bold')
				whisper('!shop [id vật phẩm] để mua' ,player.id,0xD4EFDF)
				whisper('----------------------Hiện có----------------------' ,player.id,0xE6B0AA,'bold')
				whisper('🍸 nước tăng lực (Giá: 50,000đ | ID: nuoctangluc)' ,player.id,0xF2D7D5)
				whisper('🥛 nước tăng kích cỡ (Giá: 60,000đ | ID: thuocgiam)' ,player.id,0xF2D7D5)
				whisper('🥛 nước giảm kích cỡ (Giá: 60,000đ | ID: thuoctang)' ,player.id,0xF2D7D5)
				whisper('Màu bóng: Tím Quyền Lực(Giá: 10,000,000đ | ID: maubong_tim)' ,player.id,0xF2D7D5)
				whisper('Màu bóng: Xanh Đậm (Giá: 1,000,000đ | ID: maubong_xanhdam)' ,player.id,0xF2D7D5)
				whisper('Màu bóng: Màu Hồng Cánh Sen (Giá: 3,000,000đ | ID: maubong_hong)' ,player.id,0xF2D7D5)
				whisper('Màu bóng: Xanh Nước Sáng Chói (Giá: 2,000,000đ | ID: maubong_xanhsang)' ,player.id,0xF2D7D5)
				whisper('Màu bóng: Đỏ  (Giá: 1,000,000đ | ID: maubong_do)' ,player.id,0xF2D7D5)
				whisper('Màu bóng: Xanh Nước Nhạt (Giá: 1,000,000đ | ID: maubong_xanhnhat)' ,player.id,0xF2D7D5)
				whisper('Màu bóng: Xanh Lá Nước (Giá: 1,500,000đ | ID: maubong_xanhlanuoc)' ,player.id,0xF2D7D5)
				whisper('Màu bóng: Xanh Lá Vàng (Giá: 300,000đ | ID: maubong_xanhlavang)' ,player.id,0xF2D7D5)
				whisper('Màu bóng: Cam (Giá: 3,000,000đ | ID: maubong_cam)' ,player.id,0xF2D7D5) 
				//whisper('🧈 thuốc tàng hình cỡ (Giá: 550,000đ | ID: thuoctanghinh)' ,player.id)
				whisper('----------------------Cách sử dụng----------------------' ,player.id,0xA3E4D7 ,'bold')
				whisper('!sudung [id vật phẩm] | VD: !sudung nuoctangluc' ,player.id,0xD1F2EB)
				whisper('Nhập !maubong để xem id màu bóng' ,player.id,0xD1F2EB)
				whisper('!sudungmaubong [id maubong] | VD: !sudungmaubong tim' ,player.id,0xD1F2EB)
			}

			switch(args[1]) {
				case 'nuoctangluc':
					if (PlayerObject[player.name].money < 50000){
						whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id)
						return false;
						break;
					}
					if (PlayerObject[player.name]['tuido'].nuoctangluc == undefined) PlayerObject[player.name]['tuido'].nuoctangluc = 0
					PlayerObject[player.name].money -= 50000
					PlayerObject[player.name]['tuido'].nuoctangluc += 1
					whisper('Đã mua nước tăng lực !' ,player.id,0xAED6F1 ,'bold')
					UpdatePlayer('tuido',player.name)
					
					break;
				case 'thuocgiam':
					if (PlayerObject[player.name].money < 60000){
						whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id,0xAED6F1 ,'bold')
						return false;
						break;
					}
					if (PlayerObject[player.name]['tuido'].thuocgiam == undefined) PlayerObject[player.name]['tuido'].thuocgiam = 0
						PlayerObject[player.name].money -= 60000
						PlayerObject[player.name]['tuido'].thuocgiam += 1
						whisper('Đã mua nước giảm kích thước !' ,player.id,0xAED6F1 ,'bold')
						UpdatePlayer('tuido',player.name)
						break;
				case 'thuoctang':
					if (PlayerObject[player.name].money < 60000){
						whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id,0xAED6F1 ,'bold')
						return false;
						break;
					}
					if (PlayerObject[player.name]['tuido'].thuoctang== undefined) PlayerObject[player.name]['tuido'].thuoctang = 0
						PlayerObject[player.name].money -= 60000
						PlayerObject[player.name]['tuido'].thuoctang += 1
						whisper('Đã mua nước tăng kích thước !',player.id,0xAED6F1 ,'bold')
						UpdatePlayer('tuido',player.name)
						break;
				case 'maubong_tim':
					if (PlayerObject[player.name].money < 10000000){
						whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id)
						return false;
						break;
					}
					if (!PlayerObject[player.name]['tuido']['list_mau_bong']) PlayerObject[player.name]['tuido']['list_mau_bong']= []
					if (!PlayerObject[player.name]['tuido']['list_mau_bong'].includes('tim')){
						PlayerObject[player.name].money -= 10000000
						PlayerObject[player.name]['tuido']['list_mau_bong'].push('tim')
						whisper('Đã mua màu bóng : Tím !' ,player.id,0xAED6F1 ,'bold')
						whisper('Nhãy nhập !maubong để xem id và !sudungmaubong để sử dụng' ,player.id,0xAED6F1 ,'bold')
						UpdatePlayer('tuido',player.name)
						break;
					}
					else { whisper('Bạn đã sở hữu nó rồi!' ,player.id) 
					break;}
				case 'maubong_xanhla':
					if (PlayerObject[player.name].money < 5000000){
						whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id)
						return false;
						break;
					}
					if (!PlayerObject[player.name]['tuido']['list_mau_bong']) PlayerObject[player.name]['tuido']['list_mau_bong']= []
					if (!PlayerObject[player.name]['tuido']['list_mau_bong'].includes('xanhla')){
						PlayerObject[player.name].money -= 5000000
						PlayerObject[player.name]['tuido']['list_mau_bong'].push('xanhla')
						whisper('Đã mua màu bóng : Xanh Lá !' ,player.id,0xAED6F1 ,'bold')
						whisper('Nhãy nhập !maubong để xem id và !sudungmaubong để sử dụng' ,player.id,0xAED6F1 ,'bold')
						UpdatePlayer('tuido',player.name)
						break;
				}
					else { whisper('Bạn đã sở hữu nó rồi!' ,player.id) 
					break;}
				case 'maubong_hong':
					if (PlayerObject[player.name].money < 3000000){
						whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id)
						return false;
						break;
					}
					if (!PlayerObject[player.name]['tuido']['list_mau_bong']) PlayerObject[player.name]['tuido']['list_mau_bong']= []
					if (!PlayerObject[player.name]['tuido']['list_mau_bong'].includes('hong')){
						PlayerObject[player.name].money -= 3000000
						PlayerObject[player.name]['tuido']['list_mau_bong'].push('hong')
						whisper('Đã mua màu bóng : Hồng !' ,player.id,0xAED6F1 ,'bold')
						whisper('Nhãy nhập !maubong để xem id và !sudungmaubong để sử dụng' ,player.id,0xAED6F1 ,'bold')
						UpdatePlayer('tuido',player.name)
						break;
					}
					else { whisper('Bạn đã sở hữu nó rồi!' ,player.id) 
					break;}
				case 'maubong_xanhsang':
					if (PlayerObject[player.name].money < 2000000){
						whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id)
						return false;
						break;
					}
					if (!PlayerObject[player.name]['tuido']['list_mau_bong']) PlayerObject[player.name]['tuido']['list_mau_bong']= []
					if (!PlayerObject[player.name]['tuido']['list_mau_bong'].includes('xanhsang')){
						PlayerObject[player.name].money -= 2000000
						PlayerObject[player.name]['tuido']['list_mau_bong'].push('xanhsang')
						whisper('Đã mua màu bóng : Xanh Sáng !' ,player.id,0xAED6F1 ,'bold')
						whisper('Nhãy nhập !maubong để xem id và !sudungmaubong để sử dụng' ,player.id,0xAED6F1 ,'bold')
						UpdatePlayer('tuido',player.name)
						break;
					}
					else { whisper('Bạn đã sở hữu nó rồi!' ,player.id) 
					break;}
				case 'maubong_do':
					if (PlayerObject[player.name].money < 1000000){
						whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id)
						return false;
						break;
					}
					if (!PlayerObject[player.name]['tuido']['list_mau_bong']) PlayerObject[player.name]['tuido']['list_mau_bong']= []
					if (!PlayerObject[player.name]['tuido']['list_mau_bong'].includes('maudo')){
						PlayerObject[player.name].money -= 1000000
						PlayerObject[player.name]['tuido']['list_mau_bong'].push('maudo')
						whisper('Đã mua màu bóng : Đỏ !' ,player.id,0xAED6F1 ,'bold')
						whisper('Nhãy nhập !maubong để xem id và !sudungmaubong để sử dụng' ,player.id,0xAED6F1 ,'bold')
						UpdatePlayer('tuido',player.name)
						break;
					}
					else { whisper('Bạn đã sở hữu nó rồi!' ,player.id) 
					break;}
				case 'maubong_xanhnhat':
					if (PlayerObject[player.name].money < 1000000){
						whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id)
						return false;
						break;
					}
					if (!PlayerObject[player.name]['tuido']['list_mau_bong']) PlayerObject[player.name]['tuido']['list_mau_bong']= []
					if (!PlayerObject[player.name]['tuido']['list_mau_bong'].includes('xanhnhat')){
						PlayerObject[player.name].money -= 1000000
						PlayerObject[player.name]['tuido']['list_mau_bong'].push('xanhnhat')
						whisper('Đã mua màu bóng : Xanh Nhạt !' ,player.id,0xAED6F1 ,'bold')
						whisper('Nhãy nhập !maubong để xem id và !sudungmaubong để sử dụng' ,player.id,0xAED6F1 ,'bold')
						UpdatePlayer('tuido',player.name)
						break;
					}
					else { whisper('Bạn đã sở hữu nó rồi!' ,player.id) 
					break;}
				case 'maubong_xanhlanuoc':
					if (PlayerObject[player.name].money < 1500000){
						whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id)
						return false;
						break;
					}
					if (!PlayerObject[player.name]['tuido']['list_mau_bong']) PlayerObject[player.name]['tuido']['list_mau_bong']= []
					if (!PlayerObject[player.name]['tuido']['list_mau_bong'].includes('xanh_lanuoc')){
						PlayerObject[player.name].money -= 1500000
						PlayerObject[player.name]['tuido']['list_mau_bong'].push('xanh_lanuoc')
						whisper('Đã mua màu bóng : Xanh Lá Nước !',player.id,0xAED6F1 ,'bold')
						whisper('Nhãy nhập !maubong để xem id và !sudungmaubong để sử dụng' ,player.id,0xAED6F1 ,'bold')
						UpdatePlayer('tuido',player.name)
						break;
					}
					else { whisper('Bạn đã sở hữu nó rồi!' ,player.id) 
					break;}
				case 'maubong_xanhlavang':
					if (PlayerObject[player.name].money < 300000){
						whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id)
						return false;
						break;
					}
					if (!PlayerObject[player.name]['tuido']['list_mau_bong']) PlayerObject[player.name]['tuido']['list_mau_bong']= []
					if (!PlayerObject[player.name]['tuido']['list_mau_bong'].includes('xanh_lavang')){
						PlayerObject[player.name].money -= 300000
						PlayerObject[player.name]['tuido']['list_mau_bong'].push('xanh_lavang')
						whisper('Đã mua màu bóng : Xanh Lá Vàng !',player.id,0xAED6F1 ,'bold')
						whisper('Nhãy nhập !maubong để xem id và !sudungmaubong để sử dụng' ,player.id,0xAED6F1 ,'bold')
						UpdatePlayer('tuido',player.name)
						break;
					}
					else { whisper('Bạn đã sở hữu nó rồi!' ,player.id) 
					break;}
				case 'maubong_xanhdam':
					if (PlayerObject[player.name].money < 1000000){
						whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id)
						return false;
						break;
					}
					if (!PlayerObject[player.name]['tuido']['list_mau_bong']) PlayerObject[player.name]['tuido']['list_mau_bong']= []
					if (!PlayerObject[player.name]['tuido']['list_mau_bong'].includes('xanhdam')){
						PlayerObject[player.name].money -= 1000000
						PlayerObject[player.name]['tuido']['list_mau_bong'].push('xanhdam')
						whisper('Đã mua màu bóng : Xanh Đậm !' ,player.id,0xAED6F1 ,'bold')
						whisper('Nhãy nhập !maubong để xem id và !sudungmaubong để sử dụng' ,player.id,0xAED6F1 ,'bold')
						UpdatePlayer('tuido',player.name)
						break;
					}
					else { whisper('Bạn đã sở hữu nó rồi!' ,player.id) 
					break;}
				case 'maubong_cam':
					if (PlayerObject[player.name].money < 3000000){
						whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id)
						return false;
						break;
					}
					if (!PlayerObject[player.name]['tuido']['list_mau_bong']) PlayerObject[player.name]['tuido']['list_mau_bong']= []
					if (!PlayerObject[player.name]['tuido']['list_mau_bong'].includes('xanhdam')){
						PlayerObject[player.name].money -= 1000000
						PlayerObject[player.name]['tuido']['list_mau_bong'].push('cam')
						whisper('Đã mua màu bóng : Cam !' ,player.id,0xAED6F1 ,'bold')
						whisper('Nhãy nhập !maubong để xem id và !sudungmaubong để sử dụng' ,player.id,0xAED6F1 ,'bold')
						UpdatePlayer('tuido',player.name)
						break;
					}
					else { whisper('Bạn đã sở hữu nó rồi!' ,player.id) 
					break;}
					
			}
		}
		}
		else if (args[0] == "sudung") {
			if (player.name in authList){

			if (!room.getPlayerDiscProperties(player.id)) {
				whisper('Vui lòng sử dụng trong trận đấu',player.id)
				return false;
			}
			for (us in players_using) {
				if (players_using[us][1] == player.id) {
					whisper('Bạn đang sử dụng thuốc nên hãy chờ nó hết hiệu lực!',player.id)
					return false;
				}
			}

			
			switch(args[1]) {
			
/* 				case 'nuoctangluc':
					
					if (!stat.nuoctangluc > 0) {
						whisper('Không còn nước tăng lực'  ,player.id)
						return false;
					}
					stat.nuoctangluc -= 1
					whisper('Đã sử dụng nước tăng lực, bạn đã nhận được hiệu ứng trong 30s!',player.id)

					
					
				
					room.setPlayerDiscProperties(player.id, {invMass:  0.3,radius :14.5});
					players_using.push([player.name,player.id,'nuoctangluc'])
					sleep(30000).then(() => {
					check_player_using(player.name)
					room.setPlayerDiscProperties(player.id, {invMass:  1.05,radius :15});
					whisper('Nước tăng lực hết hiệu lực !',player.id)
					
					});
					break; */
				case 'nuoctanghinh':
					
					if (!PlayerObject[player.name]['tuido'].nuoctanghinh > 0) {
						whisper('Không còn nước tàng hình'  ,player.id)
						return false;
					}
					PlayerObject[player.name]['tuido'].nuoctanghinh -= 1
					whisper('Đã sử dụng nước tàng hình, bạn đã nhận được hiệu ứng trong 15s!',player.id)
					
					UpdatePlayer('tuido',player.name)
					let last_color = room.getPlayerDiscProperties(player.id).color
					room.setPlayerDiscProperties(player.id, {radius :2});
					players_using.push([player.name,player.id,'nuoctanghinh'])
					sleep(15000).then(() => {
						
					room.setPlayerDiscProperties(player.id, {radius :15});
					whisper('Nước tàng hình hết hiệu lực !',player.id)
					check_player_using(player.name)
					});
					break;
				case 'thuocgiam':
					
					if (!PlayerObject[player.name]['tuido'].thuocgiam > 0) {
						whisper('Không còn nước giảm kích thước'  ,player.id)
						return false;
					}
					PlayerObject[player.name]['tuido'].thuocgiam -= 1
					whisper('Đã sử dụng nước giảm kích thước, bạn đã nhận được hiệu ứng trong 60s!',player.id)

					UpdatePlayer('tuido',player.name)
					
					players_using.push([player.name,player.id,'thuocgiam'])
					room.setPlayerDiscProperties(player.id, {radius :13});
					sleep(60000).then(() => {
					check_player_using(player.name)
					room.setPlayerDiscProperties(player.id, {radius :15});
					whisper('Nước giảm kích thước hết hiệu lực !',player.id)

					});
					break;
				case 'thuoctang':
					
					if (!PlayerObject[player.name]['tuido'].thuoctang > 0) {
						whisper('Không còn nước tăng kích thước'  ,player.id)
						return false;
					}
					PlayerObject[player.name]['tuido'].thuoctang -= 1
					whisper('Đã sử dụng nước tăng kích thước, bạn đã nhận được hiệu ứng trong 60s!',player.id)
					UpdatePlayer('tuido',player.name)
					
					
					players_using.push([player.name,player.id,'thuoctang'])
					room.setPlayerDiscProperties(player.id, {radius :17});
					sleep(60000).then(() => {
					check_player_using(player.name)
					
					room.setPlayerDiscProperties(player.id, {radius :15});
					whisper('Nước tăng  kích thước lực hết hiệu lực !',player.id)

					});
					break;
	/* 			case 'thuoctanghinh':
					
					if (!stat.thuoctanghinh > 0) {
						whisper('Không còn thuốc tàng hình'  ,player.id)
						return false;
					}
					stat.thuoctanghinh -= 1
					whisper('Đã sử dụng thuốc tàng hình, bạn đã nhận được hiệu ứng trong 20s!',player.id)
		
					
					players_using.push([player.name,player.id,'thuoctanghinh'])
				
					room.setPlayerDiscProperties(player.id, {radius :0});
					sleep(20000).then(() => {
					check_player_using(player.name)
					room.setPlayerDiscProperties(player.id, {radius :15});
					whisper('Thuốc siêu tàng hình lực hết hiệu lực !',player.id)

					});
					break; */
			}
		}
		}
		else if (args[0] == 'xiu'){
			
			if (!datcuoc_players.includes(player.name)) {
				if (tx_dangdienra){
					if (player.name in authList){
						if (Number(args[1]) >= 10000){
							if (PlayerObject[player.name] ){
								let c = Number(args[1])
							if (Number.isInteger(c)){
								if (PlayerObject[player.name].money >= Number(args[1])) {
									var bet_money = Number(args[1]).toFixed()
									PlayerObject[player.name].money -= Number(bet_money)
									whisper('Bạn đã đặt cược: ' + numberWithCommas(bet_money) + 'đ vào Xỉu tại quầy Tài Xỉu ở sòng bài Thế Vận Hội !!' ,player.id,0xffa31a,'normal')
									announce(player.name + ' đã đặt cược: ' + numberWithCommas(bet_money) + 'đ vào Xỉu tại quầy Tài Xỉu',null,0xC2E333,'small-bold' )
									xiu_players.push([player,Number(bet_money)])
									UpdatePlayer('money',player.name)
									datcuoc_players.push(player.name)
								}
								else whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id)
								}
								else whisper('Bạn cần đặt một số nguyên dương!' ,player.id)
								}
						}
						else{
							whisper('Tiền cược lớn hơn 10000đ',player.id )
						}
					}
					else{
					whisper('Không có tài khoản hoặc chưa đăng nhập!',player.id )
					}
				}
					else whisper('Tài xỉu chưa diễn ra!' ,player.id)
			}
			else whisper('Bạn đặt cược rồi',player.id )
		}
		else if (args[0] == 'tai') {
			if (!datcuoc_players.includes(player.name)) {
				if (tx_dangdienra){
					if (player.name in authList){
						if (Number(args[1]) >= 10000){
							if (PlayerObject[player.name] ){
								let c = Number(args[1])
								if (Number.isInteger(c)){
									
									if (PlayerObject[player.name].money >= Number(args[1])) {
										var bet_money = Number(args[1]).toFixed()
										PlayerObject[player.name].money -= Number(bet_money)
										whisper('Bạn đã đặt cược: ' + numberWithCommas(bet_money) + 'đ vào Tài tại quầy Tài Xỉu ở sòng bài Thế Vận Hội !!' ,player.id,0xffa31a,'normal')
										announce(player.name + ' đã đặt cược: ' + numberWithCommas(bet_money) + 'đ vào Tài tại quầy Tài Xỉu',null,0xC2E333,'small-bold',0xC2E333 )
										tai_players.push([player,Number(bet_money)])
										UpdatePlayer('money',player.name)
										datcuoc_players.push(player.name)
									}
									else whisper('Tài khoản không đủ tiền bạn ơi!' ,player.id)
								}
								else whisper('Bạn cần đặt một số nguyên dương!' ,player.id)
								}
								
						}
						else{
							whisper('Tiền cược lớn hơn 10000đ',player.id )
						}
					}
					else{
						whisper('Không có tài khoản hoặc chưa đăng nhập!',player.id )
					}	
				}
				else whisper('Tài xỉu chưa diễn ra!',player.id )
			}
			else whisper('Bạn đặt cược rồi',player.id )
		
		
		}
		else if (args[0] == 'setmoney_tvh') {
			if (player.name in authList){
				if (Number(args[1]) > 0){
					if (PlayerObject[player.name] ){
						
						PlayerObject[player.name].money += Number(args[1])
						UpdatePlayer('money',player.name)
						
					}
				}

			}

		}
		else if (args[0] == 'aposs'){
			teamPossFun(undefined,'announce');
		}
		else if (args[0] == 'gk') {
			gkFun(player)
		}
		else if (args[0] == "dangky" || args[0] == "register") { 
			if (args[1] != undefined  ){
				dangkytaikhoan(player,args[1])
			}
		}
		else if (args[0] == "doimatkhau" || args[0] == "changepassword") { //PlayerObject[player.name].matkhau
		if (player.name in authList){
				if (args[1] != undefined  ){
					PlayerObject[player.name].matkhau = args[1]
					whisper('Bạn đã đổi mật khẩu thành công',player.id)
					UpdatePlayer('matkhau',player.name)
				}
				else whisper('Hãy nhập mật khẩu mới . VD: !doimatkhau 1234 ',player.id)
			}
		}
		else if (args[0] == 'gk_help'){
			whisper('Cầu thủ sau khi phát bóng ở thấp nhất sẽ là GK ! (nhập "!gk" nếu BOT chọn sai).',player.id)
		}
		else if (args[0] == 'rank_help') {
			whisper("!rank để xem điểm | Ghi bàn: 5đ, Hỗ trợ: 3đ, Thắng: 3đ, Không thủng lưới: 6đ, Thua: -7đ, Phản lưới: -4đ.",player.id)
		}
		else if (args[0] == "stats") {
			if (player.name in authList){
			sendStats(player)
			}
			else {
				whisper("Đăng nhập dùm cái rồi làm gì thì làm", player.id, 0xff20ff, "normal", 1);
			}
		}
		else if (args[0] == "tuido" || args[0] == "inventory" || args[0] == "inv") {
			if (player.name in authList){
				
	
				whisper("--------------------- Túi Đồ Người Chơi ---------------------", player.id,0xcc9900,'bold');
				whisper("Nước tăng lực: " + PlayerObject[player.name]['tuido'].nuoctangluc , player.id,0xcc9900,'bold');
				whisper("Thuốc tăng kích thước: " + PlayerObject[player.name]['tuido'].thuocgiam , player.id,0xcc9900,'bold');
				whisper("Thuốc giảm kích thước: " + PlayerObject[player.name]['tuido'].thuoctang , player.id,0xcc9900,'bold');
					/* whisper("Thuốc tàng hình: " + stat.thuoctanghinh , player.id,0xcc9900,'bold'); */
				whisper("-------------------------------------------------------------", player.id,0xcc9900,'bold');
				}
			else {
				whisper("Đăng nhập dùm cái rồi làm gì thì làm", player.id, 0xff20ff, "normal", 1);
			}
		}
		
		else if (args[0] == "xoaban" || args[0] == "clearban") {
			
			if (PlayerObject[player.name].admin_level > 0) {
				room.clearBans();
				announce("Danh sách bans đã được clear " + player.name);
				vote_ban_but_out = []
			}
			else {
				whisper("Admin thôi cu", player.id);
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
		else if (args[0] == "huyvotekick"&& player.admin) {  // admin cancel kick
		if (PlayerObject[player.name].admin_level > 1){
		if (is_voting == true){
			admin_cancel_votekick = true
			whisper("Bạn đã hủy kick, votekick sẽ bị hủy khi time hết", player.id);
		}
		else {
			whisper("Không có cuộc votekick nào đang diễn ra", player.id);
		}
		}
		else{
			whisper("Không đủ quyền hạn", player.id);
		}
		}
		else if (args[0] == "doiteam") {
			if (PlayerObject[player.name].admin_level > 1) {
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
					announce("🔄 2 Đội đã được đổi cho nhau");
				}
			}
			else {
				whisper("Admin thôi cu", player.id);
			}
		}
		else if (args[0] == "setpassword" && player.admin) {
			if (PlayerObject[player.name].admin_level > 2) {
				room.setPassword(args[1]);
				roomPassword = args[1];
				announce("Password has been changed by " + player.name);
			}
			else {
				whisper("Admin thôi cu", player.id);
			}
		}

		else if (args[0] == "clearpassword" && player.admin) {
			if (PlayerObject[player.name].admin_level > 2) {
				room.setPassword(null);
				roomPassword = null;
				announce("Password has been cleared by " + player.name);
			}
			else {
				whisper("Admin thôi cu", player.id);
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
		else if ((args[0] == "sutmanh" || args[0] == "sm" || args[0] == "powershot") && player.admin) {
			if (powerShotMode == false) {
				powerShotMode = true;
				announce("Kĩ năng Sút Mạnh đã được bật bởi " + player.name, null, 0x00FF00);
				announce("Giữ bóng 3 giây rồi sau đó sút để sử dụng!", null, 0x00FF00);
			}
			else {
				powerShotMode = false;
				announce("Kĩ năng Sút Mạnh đã được tắt bởi " + player.name, null, 0xFF0000);
			}
		}		
		else if (args[0] == "cach_sutmanh") {
			whisper("Dẫn bóng 3d để có thể sút mạnh, muốn sút curve hãy di chuyển lên và xuống. Di chuyển lên -> curve lên trên. Di chuyển xuống -> curve xuống", player.id);
			whisper("Khi dẫn bóng được 3s: sút level 1, 5s: level 2, 8s level 3", player.id);
			whisper("Sút mạnh hay không sẽ phụ thuộc vào thời gian dẫn bóng", player.id);
		}
		else if (args[0] == "lenh" || args[0] == "cmd") {
			displayHelp(player.id, args[1]);
		}
		else if (args[0] == "trogiup" || args[0] == "help") {
			displayTroGiup(player.id, args[1]);
		}
		// room.getPlayerList // room.getPlayer // kick room.kickPlayer(playerID : int, reason : string, ban : bool) : void
		// announce(msg, targetId, color, style, sound)
		else if (args[0] == "ids") {
			
			for (pl in ids ) {
				whisper('ID: ' + pl + ' ' + 'Tên: ' + ids[pl], player.id);
			}
			
		}
		else if (args[0] == "mute_list") {
			
			for (pl in mute_list ) {
				whisper('Tên: ' + mute_list[pl], player.id);
			}
			
		}
		else if (args[0] == "lenh_admin" && player.admin) {
			if (PlayerObject[player.name].admin_level < 3) whisper("!admin_takecontrol, !sutmanh, !tbchat, !mute, !unmute,!clearpassword,!huyvotekick,!doiteam,rs ( reset map), !rr (reset trận đấu),", player.id);
			else whisper("!qd_ban id, !qd_banadmin id_admin, !qd_kick,!admin_takecontrol, !sutmanh, !tbchat, !mute, !unmute,!clearpassword,!huyvotekick,!doiteam,rs ( reset map), !rr (reset trận đấu),", player.id);
			
		}
		else if (args[0] == "teamred") { // team mode
			if (admin_control == false){
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
						whisper('Bạn đã được di chuyển sang đội RED', player.id);
					}
					else if (Red_Count >= 6) { // RedPlayer_Count
						list_waiting[player.id] = 'red'
						whisper('Đội RED đã có đủ người chơi, bạn sẽ được thêm vào danh sách chờ', player.id);
					}
				else {
					whisper('Tính năng này đã được tắt do đang có admin điều khiển', player.id);
				}
			

		}
		}
		else if (args[0] == "teamblue") { // team mode
			if (admin_control == false){
				
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
					if (Blue_Count < 6){
						room.setPlayerTeam(player.id,2)
						whisper('Bạn đã được di chuyển sang đội BLUE', player.id);
					}
					else if (Blue_Count >= 6) { // RedPlayer_Count
						list_waiting[player.id] = 'blue'
						whisper('Đội BLUE đã có đủ người chơi, bạn sẽ được thêm vào danh sách chờ', player.id);
					}
				else {
					whisper('Tính năng này đã được tắt do đang có admin điều khiển', player.id);
				}
			
			
	
		}
		}
		else if (args[0] == "admin_takecontrol" && player.admin) {
			if (PlayerObject[player.name].admin_level > 1){
			if (admin_control == false){
				admin_control = true
				announce('Admin đã bật tính năng điều khiển, các tính năng tự động đã được tắt',null,0xCAF42E)
			}
			else if (admin_control == true){
				admin_control = false
				announce('Admin đã tắt tính năng điều khiển, các tính năng tự động đã được bật',null,0xCAF42E)
			}
			}
			else {
				whisper('Không đủ quyền hạn', player.id);
			}
		}
		else if (args[0] == "spec") { // team mode
			resetTeamCount()
			room.setPlayerTeam(player.id,0)
			delete list_waiting[player.id]
		}	
		else if (args[0] == "votekick") { // kick 
			if (is_voting == false) {
				for (pl in list_players ) {
					
					if (Number(args[1]) == list_players[pl].id ) {
						if (voteban == false){
							announce(player.name + ' đã thực hiện vote kick ' + list_players[pl].name + ' ra khỏi phòng',null,0x71eb34)
							nguoibikick = list_players[pl]
							is_voting = true
							kick_timer_run = true
							announce('Nhập !kickno để đồng ý và !dungkickno để từ chối',null,0x71eb34)
							announce('Đếm ngược 30s xử lý !',null,0x71eb34)
							
							sleep(30000).then(() => {

								announce('Xử lý votekick !',null,0x71eb34)
								if (admin_cancel_votekick == false){
									if (dongykick > khongdongykick){
										if (nguoibikick.admin == false){
										announce("Người chơi " + nguoibikick.name + ' đã bị kick do số phiếu kick nhiều hơn',null,0x71eb34)
										room.kickPlayer(Number(nguoibikick.id),'Bị vote kick')
										
										}
										else {
											
											announce("Đòi kick Admin à nhóc ??",null,0x71eb34)
										}
									}
									else if (dongykick < khongdongykick){
										
										announce("Người chơi " + nguoibikick.name + ' không bị kick do số phiếu kick ít hơn',null,0x71eb34)
									}
									else if (dongykick == khongdongykick){
										
										announce("Người chơi " + nguoibikick.name + ' không bị kick do số phiếu bằng nhau',null,0x71eb34)
									}
									
								}
								else {
									announce("Admin đã hủy vote kick",null,0x71eb34)
								}
								nguoibikick = null
								is_voting = false
								dongykick = 0
								khongdongykick = 0
								admin_cancel_votekick = false
								kick_timer_run = false
								voted_player = []
							});	
						
						}
					}

		}	
	}
		else {
			whisper('Đang có người chơi bị bỏ phiếu ban / bạn không thể votekick', player.id);
			
		}	
		}
		else if (args[0] == "voteban") {
			if (is_voting == false) {
				for (pl in list_players ) {
					
					if (Number(args[1]) == list_players[pl].id ) {
						if (!list_voted.includes(player.conn)){
							if (voteban == false){
								list_voted.push(player.conn )
								announce(player.name + ' đã thực hiện vote ban ' + list_players[pl].name+ ' ra khỏi phòng',null,0x71eb34)
								nguoibikick = list_players[pl]
								var conn = player_conn[nguoibikick.id]
								is_voting = true
								voteban = true
								kick_timer_run = true
								announce('Nhập !banno để đồng ý và !dungbanno để từ chối',null,0x71eb34)
								announce('Đếm ngược 30s xử lý !',null,0x71eb34)
								ban_list.push(list_players[pl].name)
								sleep(30000).then(() => {
									announce('Xử lý voteban !',null,0x71eb34)
									
									
									if (admin_cancel_votekick == false){
										if (dongykick > khongdongykick){
											if ( !nguoibikick.admin ){
												delete ban_list[list_players[pl].name]
												
												var check_out = room.getPlayer(nguoibikick.id)
												if (check_out == null){
													
													
													if (player_conn_name[conn]){
														room.kickPlayer(player_conn_name[conn][0],"Bị voteban thì làm sao mà thoát được!",true)
													}else{
														announce("Cầu thủ [ " +nguoibikick.name+" ] đã out khi bị voteban cho nên sẽ bị ban khi vào lại" ,null,0x71eb34)
														vote_ban_but_out.push(conn)
													}
													
													
												}else {
													room.kickPlayer(Number(nguoibikick.id),'Bị vote ban',true)
												}
											}
											else {
												delete ban_list[list_players[pl].name]
												announce("Đòi ban Admin à nhóc ??",null,0x71eb34)
											}
										}
										else if (dongykick < khongdongykick){
											delete ban_list[list_players[pl].name]
											announce("Người chơi " + nguoibikick.name + ' không bị ban do số phiếu ban ít hơn',null,0x71eb34)
										}
										else if (dongykick == khongdongykick){
											delete ban_list[list_players[pl].name]
											announce("Người chơi " +nguoibikick.name + ' không bị ban do số phiếu bằng nhau',null,0x71eb34)
										}
									}
									else {
										announce("Admin đã hủy vote ban",null,0x71eb34)
									}
									nguoibikick = null
									is_voting = false
									voteban = false
									dongykick = 0
									khongdongykick = 0
									admin_cancel_votekick = false
									kick_timer_run = false
									voted_player = []
								});	
							
							}
						}
						else whisper('Bạn đã vote ban rồi! Reset mỗi 2h', player.id);
					}

			}
		}
		else {
			whisper('Đang có người chơi bị bỏ phiếu ban / bạn không thể votekick', player.id);
			
		}		
	}
		else if (args[0] == "kickno") { // votekick
			if (voteban == false) {
			if(!(voted_player.includes(player.id))){
				var pl = room.getPlayerList()
				if (is_voting == true){
					announce(player.name + ' đã ĐỒNG Ý kick ' + nguoibikick.name + ' ra khỏi phòng',null,0x71eb34)
					dongykick = dongykick + 1
					voted_player.push(player.id)
				}
			}
			else{
				whisper('Bạn đã bỏ phiếu', player.id);
			}

			}
			else {
				whisper('Đang có 1 cuộc voteban diễn ra', player.id);
			}
		}
		else if (args[0] == "dungkickno") {
			if (voteban == false) {
				if(!(voted_player.includes(player.id))){
					if (is_voting == true){
						announce(player.name + ' đã KHÔNG ĐỒNG Ý kick ' + nguoibikick.name + ' ra khỏi phòng',null,0x71eb34)
						khongdongykick = khongdongykick + 1
						voted_player.push(player.id)
					}
				}
				else {
					whisper('Bạn đã bỏ phiếu', player.id);
				}
		
			}
			else {
				whisper('Đang có 1 cuộc voteban diễn ra', player.id);
			}
		}
		else if (args[0] == "banno") { // vote banned
			if (voteban == true) {
			if(!(voted_player.includes(player.id))){
				
				if (is_voting == true){
					announce(player.name + ' đã ĐỒNG Ý banned / cấm ' + nguoibikick.name + ' khỏi phòng',null,0x71eb34)
					dongykick = dongykick + 1
					voted_player.push(player.id)
				}
			}
			else{
				whisper('Bạn đã bỏ phiếu', player.id);
			}

			} 
			else {
				whisper('Không có cuộc voteban nào đang diễn ra', player.id);
			}

		}
		else if (args[0] == "dungbanno") {
			if (voteban == true) {
			if(!(voted_player.includes(player.id))){
				if (is_voting == true){
					announce(player.name + ' đã KHÔNG ĐỒNG Ý banned / cấm ' + nguoibikick.name + ' khỏi phòng',null,0x71eb34)
					khongdongykick = khongdongykick + 1
					voted_player.push(player.id)
				}
			}
			else {
				whisper('Bạn đã bỏ phiếu', player.id);
			}
			}
			else {
				whisper('Không có cuộc voteban nào đang diễn ra', player.id);
			}
		}

		return false;
		
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
	if ( !(message.startsWith("! ")) && !(message.startsWith("@@")) && !mute_list.includes(player.name)) {
		teamMsg = message;
		var to_dis = teamMsg.replace(/[@\/\\#,+()$~%.'":*?<>{}]/g, '');
		
		

	
		if (inc) {
			
			var tt_text = ' '
			if (PlayerObject[player.name].cur_thanhtuu == '' || PlayerObject[player.name].cur_thanhtuu == undefined) tt_text = ''
			else  tt_text = '['+thanhtuu_list[PlayerObject[player.name].cur_thanhtuu]+'] '
			
			if (PlayerObject[player.name].level != '✨✨✨'  && PlayerObject[player.name].level != '✨✨'&&PlayerObject[player.name].level != '✨' && PlayerObject[player.name].level != '⭐⭐⭐' ){
			if (player.team == 1) {
				var players = room.getPlayerList().filter((player) => player.team == 1); // [🔴]
				room.sendAnnouncement("[ID: " + player.id + " ]" + "["+ PlayerObject[player.name].level + "] " + tt_text  + player.name+  ": " + teamMsg,null, 0xeb662d, "normal", 0);
			} 
			if (player.team == 2) {
				var players = room.getPlayerList().filter((player) => player.team == 2); // [🔵]
				room.sendAnnouncement("[ID: " + player.id + " ]" + "["+ PlayerObject[player.name].level+ "] " + tt_text  + player.name+ ": " + teamMsg,null, 0x51ecfb, "normal", 0);
			}
			if (player.team == 0) {
				var players = room.getPlayerList().filter((player) => player.team == 0);
				room.sendAnnouncement("[ID: " + player.id + " ]" + "["+ PlayerObject[player.name].level+ "] " + tt_text  +player.name+ ": " + teamMsg,null, 0xfafcff, "normal", 0);
			}
			}
			else if (PlayerObject[player.name].level == '⭐⭐⭐'){ // SS : E1F725 SSS : E0F71A A: F8B136 B:F8C161
				room.sendAnnouncement("[ID: " + player.id + " ]" + "["+ PlayerObject[player.name].level+ "] " +  tt_text  +player.name+ ": " + teamMsg,null, 0x4BF33A, "normal", 1);
			}
			else if (PlayerObject[player.name].level == '✨') { // SS : E1F725 SSS : E0F71A // A:
				room.sendAnnouncement("[ID: " + player.id + " ]" + "["+ PlayerObject[player.name].level+ "] " +  tt_text +player.name+ ": " + teamMsg,null, 0x7E7EFA, "normal", 1);
			}
			else if (PlayerObject[player.name].level == '✨✨'){ // SS : E1F725 SSS : E0F71A
				room.sendAnnouncement("[ID: " + player.id + " ]" + "["+ PlayerObject[player.name].level+ "]" +  tt_text  +player.name+ ": " + teamMsg,null, 0xF09B07, "normal", 1);
			}
			else if (PlayerObject[player.name].level == '✨✨✨'){ // SS : E1F725 SSS : E0F71A
				room.sendAnnouncement("[ID: " + player.id + " ]" + "["+ PlayerObject[player.name].level+ "]" +   tt_text +player.name+ ": " + teamMsg,null, 0xF2F211, "normal", 1);
			} 
			
			if (room_type<=2){
				sendAnnouncementToDiscord("[ID: " + player.id + " ]" + "["+ PlayerObject[player.name].level+ "]" + tt_text  +player.name+ ": " + to_dis)
			}
			return false;
	}
		else { 
			if (player.team == 1) {
				var players = room.getPlayerList().filter((player) => player.team == 1); // [🔴]
				room.sendAnnouncement("[ID: " + player.id + " ] " + player.name + ": " + teamMsg,null, 0xf29973, "normal", 0);
			} 
			if (player.team == 2) {
				var players = room.getPlayerList().filter((player) => player.team == 2); // [🔵]
				room.sendAnnouncement("[ID: " + player.id + " ] " +  player.name + ": " + teamMsg,null, 0x82f2fc, "normal", 0);
			}
			if (player.team == 0) {
				var players = room.getPlayerList().filter((player) => player.team == 0);
				room.sendAnnouncement("[ID: " + player.id + " ] " +  player.name + ": " + teamMsg,null, 0xfafcff, "normal", 0);
			//	room.sendAnnouncement("[ID: " + player.id + " ] " + '['+ player.name + ']'+ ": " + teamMsg,null, 0xfafcff, "normal", 1);
			}
			if (room_type<=2) sendAnnouncementToDiscord("[ID: " + player.id + " ] " + player.name + ": " + to_dis)
			return false;
		}
		

}
	else if (mute_list.includes(player.name)){
		whisper("Bạn đang bị mute", player.id, null, "normal", 1);
		return false;
	}
}



function displayHelp(id, selection) { // 
	if (selection == null) {
		whisper("Các lệnh: !lang_help,!discord_id [id],!powershot,!cmd,!help,!login [pass], !register [pass], !changepassword [pass],!doimatkhau [matkhau moi],!thanhtuu or !tt  , !sudungtt [id tt] ,!chuyentien [id] [số tiền],!tuido,!dangnhap matkhau, !dangky matkhau ,!xiu [mức cược],!tai [mức cược]!rank,!stats,!trogiup,!cach_sutmanh, ! !bb ( vui vẻ ),!ids (xem id người chơi),!voteban [id người chơi], !votekick [id người chơi] (kick người chơi),!teamred,!teamblue,!spec, !gk_help,!rank_help", id, null, "small-bold");
	}
}
function displayTroGiup(id, selection) {
	
	if (selection == null) {
		whisper("Chào mừng bạn đến với thế vận hội 2022 được tổ chức bởi KSC", id, 0xFFE599, "normal");
		whisper("Trong đây, sẽ có biên / đá góc như ngoài đời", id, 0xFFE599, "normal");
		whisper("Bạn có thể giữ bóng 3 giây sau đó sút để thực hiện kĩ năng sút xa", id, 0xFFE599, "normal");
		whisper("Thời gian giữ bóng ở biên là 7s || Đá góc là 10s || Giữ bóng ở Gôn là 10s", id, 0xFFE599, "normal");
		whisper("Thời gian votekick là 10s", id, 0xFFE599, "normal");
		whisper("Nhập !ids -> !votekick [id] để votekick", id, 0xFFE599, "normal");
		whisper("Nhập !ids -> !voteban [id] để voteban", id, 0xFFE599, "normal");
		whisper("Đánh võng càng nhiều + góc sút -> sút càng xoáy", id, 0xFFE599, "normal");
		whisper("Để sử dụng sút xoáy, hãy dấn bóng -> đánh vóng -> sút", id, 0xFFE599, "normal");
		whisper("Hướng dẫn sút xoáy: Xem cách đá xoáy: https://youtu.be/iT-OkzuGgzo", id, 0xFFE599, "normal");
		whisper("Sút xoáy dựa vào phím bạn bấm. VD: bạn dãn bóng bấm di chuyển lên trên sẽ sút xoáy lên, di chuyển xuống xoáy xuống,ko bấm = ko xoáy", id, 0xFFE599, "normal");
		whisper("Nhập !teamred và !teamblue  để chuyển qua team đó", id, 0xFFE599, "normal");
		whisper("!gk_help và !rank_help để xem cách tính điểm GK và điểm Rank", id, 0xFFE599, "normal");
	}
}
function dict_reverse(obj) {
  new_obj= {}
  rev_obj = Object.keys(obj).reverse();
  rev_obj.forEach(function(i) { 
    new_obj[i] = obj[i];
  })
  return new_obj;
}
function resetTeamCount() {
	

	if (admin_control == false) {
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
			for (pl in list_waiting) {
				if (RedPlayer_Count == 6 && BluePlayer_Count ==6) break;
				if (( list_waiting[pl] == 'red' ) && (RedPlayer_Count <= 5)){
					RedPlayer_Count += 1
					room.setPlayerTeam(pl,1)
					delete list_waiting[pl]
					
				}
				if (( list_waiting[pl] == 'blue' ) && (BluePlayer_Count <= 5)){
				
					BluePlayer_Count += 1
					room.setPlayerTeam(pl,2)
					delete list_waiting[pl]
					
				}
				
			} 
			// check if reached max
			// codition
			if (BluePlayer_Count > 0 && RedPlayer_Count > 0){
				has_player = true
			}
			var daonguoc_list = dict_reverse(room.getPlayerList())
			// check
			if (RedPlayer_Count >= 7) {
				
				for (pl in daonguoc_list) {
				
				if (daonguoc_list[pl].team == 1) {
					room.setPlayerTeam(pl,0)
					RedPlayer_Count -= 1
					
					break;
				}
				}
			}
			
			if (BluePlayer_Count >=  7) {

				for (pl in daonguoc_list)  {
				if (daonguoc_list[pl] == 1 ) {
					room.setPlayerTeam(pl,0)

					BluePlayer_Count -= 1
					break;
				}
				}
			}

			// start match
			start_match()
	}
}
function start_match(){
	if (admin_control == false) {
		if (on_match == false && has_player == true) {
			announce("Trận đấu sẽ bắt đầu sau 10 giây",null,0xdb1a64)
			on_match = true
			sleep(10000).then(() => {
				room.startGame()
				
			});
		}
	}
}
room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
	if (map == "RSR") {

		if (room.getScores() != null) {
			if (1 <= changedPlayer.team <= 2) ballCarrying.set(changedPlayer.name, [0, changedPlayer.team]);
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
	if (changedPlayer in list_waiting){
		delete list_waiting[changedPlayer]
	}
	
                                                                
	start_match()
	resetTeamCount()


	
	}
	
}

room.onTeamVictory = function (scores) {
	
	if (game.redScore > game.blueScore) {
		announce("Team 🔴 đã chiến thắng với tỉ số là: " + scores.red,null,0xf44336 );
		updateWinLoseStats(redTeam, blueTeam);

	}
	else if (game.blueScore >game.redScore) {
		announce("Team 🔵 đã chiến thắng với tỉ số là: " + scores.blue ,null,0x1394eb);
		updateWinLoseStats(blueTeam, redTeam);
	}
	else {
		announce("Cả hai đội 🔴 và 🔵 đã hòa nhau với tỉ số là: " + scores.red + " và " + scores.blue ,null,0xb3de09);
	}
		
		if (scores.blue == 0 && gk[0].position != null && hasFinished == false) {
			
			if (PlayerObject[gk[0].name]) {PlayerObject[gk[0].name].khongthungluoi += 1;
			
			UpdatePlayer('khongthungluoi',gk[0].name)
		}
		
		if ( gk[1] != undefined &&scores.red == 0 && gk[1].position != null  && hasFinished == false) {
			
				if (PlayerObject[gk[0].name]){
					
				PlayerObject[gk[0].name].khongthungluoi += 1;
				UpdatePlayer('khongthungluoi',gk[0].name)}
		}

 

	teamPossFun(undefined,'announce');
	resetTeamCount()
	gamefinished()
	if (room_type<=2)   RecSistem.sendDiscordWebhook(scores);
   
   announce("Bản ghi lại trận đấu đã được cập nhật trên discord: https://discord.gg/thevanhoi" );
		
}
}
function gamefinished() {
			on_match = false
}
room.onTeamGoal = function(team) {
	if (map == "RSR") {
	var redTeam = room.getPlayerList().filter(p => p.team == 1);
	var blueTeam = room.getPlayerList().filter(p => p.team == 2);
		game.rsActive = false;
		
		let goalTime = secondsToMinutes(Math.floor(room.getScores().time));
		let scorer;
		let assister = "";
		let goalType;
		
		


		if (team == 1) {
			if (game.lastKickerTeam == 1) { //if goal type is goal
				goalType = "Ghi Bàn !!";
				scorer = "⚽" + game.lastKickerName;
				avatarCelebration(game.lastKickerId, "⚽");
				if (game.secondLastKickerTeam == 1 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
					assister = " (Kiến tạo: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "🅰️");
					if (redTeam.length > 3 && blueTeam.length > 3){
					if (PlayerObject[game.secondLastKickerName])PlayerObject[game.secondLastKickerName].assists += 1;
					if (PlayerObject[game.secondLastKickerName])announce(game.secondLastKickerTeam + ' đã kiếm được 20,000đ từ việc kiến tạo', null,null,'small-bold' );
					if (PlayerObject[game.secondLastKickerName])PlayerObject[game.secondLastKickerName].money += 20000;
					}
				}
				if (redTeam.length > 3 && blueTeam.length > 3){
				if (PlayerObject[game.lastKickerName])PlayerObject[game.lastKickerName].goals += 1
				if (PlayerObject[game.lastKickerName])PlayerObject[game.lastKickerName].money += 30000
				if (PlayerObject[game.lastKickerName]) announce(game.lastKickerName + ' đã kiếm được 30,000đ từ việc ghi bàn',null,null,'small-bold' );
			}	
			}			
			if (game.lastKickerTeam == 2) { //if goal type is owngoal
				goalType = "Phản Lưới Nhà !!";
				scorer = "🐸" + game.lastKickerName;
				avatarCelebration(game.lastKickerId, "🐸");
				if (game.secondLastKickerTeam == 1) { // if owngoal was assisted
					assister = " (Kiến tạo: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "🅰️");
					if (redTeam.length > 3 && blueTeam.length > 3){
					if (PlayerObject[game.secondLastKickerName] )PlayerObject[game.secondLastKickerName].assists += 1;
					if (PlayerObject[game.secondLastKickerName]  )PlayerObject[game.secondLastKickerName].money += 20000;
					if (PlayerObject[game.secondLastKickerName]  )announce(game.secondLastKickerName + ' đã kiếm được 20,000đ từ việc kiến tạo',null,null,'small-bold'  );
				}
				}
				if (redTeam.length > 3 && blueTeam.length > 3) if (PlayerObject[game.lastKickerName] )PlayerObject[game.lastKickerName].ownGoals += 1
				
			}
			game.redScore++;
		}
		if (team == 2) {
			if (game.lastKickerTeam == 2) { //if goal type is goal
				goalType = "Ghi Bàn !!";
				scorer = "⚽" + game.lastKickerName;
				avatarCelebration(game.lastKickerId, "⚽");
				if (game.secondLastKickerTeam == 2 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
					assister = " (Kiến tạo: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "🅰️");
					if (redTeam.length > 3 && blueTeam.length > 3){
					if (PlayerObject[game.secondLastKickerName])PlayerObject[game.secondLastKickerName].assists += 1;
					if (PlayerObject[game.secondLastKickerName])PlayerObject[game.secondLastKickerName].money += 20000;
					if (PlayerObject[game.secondLastKickerName])announce(game.secondLastKickerName + ' đã kiếm được 20,000đ từ việc kiến tạo',null,null,'small-bold'  );
				}
				}
				if (redTeam.length > 3 && blueTeam.length > 3){
				if (PlayerObject[game.lastKickerName] )PlayerObject[game.lastKickerName].goals += 1
				if (PlayerObject[game.lastKickerName])PlayerObject[game.lastKickerName].money += 30000
				if (PlayerObject[game.lastKickerName]) announce(game.lastKickerName + ' đã kiếm được 30,000đ từ việc ghi bàn',null,null,'small-bold'  );
				}
			}			
			if (game.lastKickerTeam == 1) { //if goal type is owngoal
				goalType = "Phản Lưới Nhà !!";
				scorer = "🐸" + game.lastKickerName;
				avatarCelebration(game.lastKickerId, "🐸");
				if (game.secondLastKickerTeam == 2) { // if owngoal was assisted
					assister = " (Kiến tạo: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "🅰️");
					if (redTeam.length > 3 && blueTeam.length > 3){
					if (PlayerObject[game.secondLastKickerName])PlayerObject[game.secondLastKickerName].assists += 1;
					if (PlayerObject[game.secondLastKickerName])PlayerObject[game.secondLastKickerName].money += 20000;
					if (PlayerObject[game.secondLastKickerName])announce(game.secondLastKickerName + ' đã kiếm được 20,000đ từ việc kiến tạo',null,null,'small-bold'  );
				}
				}
				if (redTeam.length > 3 && blueTeam.length > 3) if (PlayerObject[game.lastKickerName])PlayerObject[game.lastKickerName].ownGoals += 1;
				
			}
			game.blueScore++;
		}
		announce(goalType + " 🟥 " + game.redScore + " - " + game.blueScore + " 🟦 🕒" + goalTime + " " + scorer + assister);
		teamPossFun(undefined,'announce');
		game.lastKicker = undefined;
		game.secondLastKicker = undefined;
		game.lastKickerTeam = undefined;
		game.secondLastKickerTeam = undefined;
		goalScored = true;

		
		
		if (PlayerObject[game.lastKickerName]) {
			if (PlayerObject[game.lastKickerName].goals > 200) add_thanhtuu(game.lastKickerName,'kephaluoi')
			if (PlayerObject[game.lastKickerName].goals > 500) add_thanhtuu(game.lastKickerName,'kedotluoi')
			if (PlayerObject[game.lastKickerName].ownGoals > 20) add_thanhtuu(game.lastKickerName,'trumphanluoi')
			if (PlayerObject[game.lastKickerName].assists > 50) add_thanhtuu(game.lastKickerName,'noobchuyenhai')
			if (PlayerObject[game.lastKickerName].assists > 220) add_thanhtuu(game.lastKickerName,'juniorchuyenhai')
			if (PlayerObject[game.lastKickerName].assists > 500) add_thanhtuu(game.lastKickerName,'seniorchuyenhai')
			if (PlayerObject[game.lastKickerName].wins > 200 && PlayerObject[game.lastKickerName].goals > 500 && PlayerObject[game.lastKickerName].assists > 500) add_thanhtuu(game.lastKickerName,'pele')
		} 
		if (PlayerObject[game.secondLastKickerName]) {
			if (PlayerObject[game.secondLastKickerName].goals > 200) add_thanhtuu(game.secondLastKickerName,'kephaluoi')
			if (PlayerObject[game.secondLastKickerName].goals > 500) add_thanhtuu(game.secondLastKickerName,'kedotluoi')
			if (PlayerObject[game.secondLastKickerName].ownGoals > 20) add_thanhtuu(game.secondLastKickerName,'trumphanluoi')
			if (PlayerObject[game.secondLastKickerName].assists > 50) add_thanhtuu(game.secondLastKickerName,'noobchuyenhai')
			if (PlayerObject[game.secondLastKickerName].assists > 220) add_thanhtuu(game.secondLastKickerName,'juniorchuyenhai')
			if (PlayerObject[game.secondLastKickerName].assists > 500) add_thanhtuu(game.secondLastKickerName,'seniorchuyenhai')
			if (PlayerObject[game.secondLastKickerName].wins > 200 && PlayerObject[game.secondLastKickerName].goals > 500 && PlayerObject[game.secondLastKickerName].assists > 500) add_thanhtuu(game.secondLastKickerName,'pele')
		}
		
		whoTouchedBall = [init, init];
		whoTouchedLast = undefined;
		if (PlayerObject[game.secondLastKickerName]) UpdatePlayer('goals',game.secondLastKickerName)
		if (PlayerObject[game.secondLastKickerName]) UpdatePlayer('wins',game.secondLastKickerName)
		if (PlayerObject[game.secondLastKickerName]) UpdatePlayer('assists',game.secondLastKickerName)
		if (PlayerObject[game.secondLastKickerName]) UpdatePlayer('ownGoals',game.secondLastKickerName)
		if (PlayerObject[game.secondLastKickerName]) UpdatePlayer('money',game.secondLastKickerName)
			
		
		if (PlayerObject[game.lastKickerName]) UpdatePlayer('goals',game.lastKickerName)
		if (PlayerObject[game.lastKickerName]) UpdatePlayer('wins',game.lastKickerName)
		if (PlayerObject[game.lastKickerName]) UpdatePlayer('assists',game.lastKickerName)
		if (PlayerObject[game.lastKickerName]) UpdatePlayer('ownGoals',game.lastKickerName)
		if (PlayerObject[game.lastKickerName]) UpdatePlayer('money',game.lastKickerName)	
	}
}
function swapteam() {
	announce("Hai đổi đã được đổi cho nhau!")
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
}
room.onPositionsReset = function() {
	if (map == "RSR") {
	pos_reset = true
		goalScored = false;
		if (game.lastPlayAnnounced == true) {
			room.stopGame(true);
			game.lastPlayAnnounced = false;
			announce(" !! Trận Đấu Kết Thúc !!");
			var players = room.getPlayerList()
			if (game.redScore > game.blueScore) {
				announce("Team 🔴 đã chiến thắng với tỉ số là: " + game.redScore,null,0xf44336 );
				updateWinLoseStats(redTeam, blueTeam);
			}
			else if (game.blueScore >game.redScore) {
				announce("Team 🔵 đã chiến thắng với tỉ số là: " + game.blueScore ,null,0x1394eb);
				updateWinLoseStats(blueTeam, redTeam);
			}
			else {
				announce("Cả hai đội 🔴 và 🔵 đã hòa nhau với tỉ số là: " + game.blueScore + " và " + game.redScore ,null,0xb3de09);
			}
			let scores = {
				blue: game.blueScore,
				red:game.redScore
			}
			    RecSistem.sendDiscordWebhook(scores);
			announce("Bản ghi lại trận đấu đã được cập nhật trên discord: https://discord.gg/thevanhoi" );
			gamefinished()
		
		
		}

	}
}
var game_start = false
var pos_reset = false
var afk_on = false
room.onGameTick = function() {
	if (map == "RSR") {
		updateGameStatus();
		handleBallTouch();
		realSoccerRef();
		handlePlayerPosition();
		
		game_start = true
		
	
	if (pos_reset == true) {
		pos_reset  =false
			for (us in players_using) {
			switch (players_using[us][2]) {
					case 'nuoctangluc':
					room.setPlayerDiscProperties(players_using[us][1], {invMass:  0.3,radius :14.5});
					break;
					case 'nuoctanghinh':
					room.setPlayerDiscProperties(players_using[us][1], {radius :2});
					break;
					case 'thuocgiam':
					room.setPlayerDiscProperties(players_using[us][1], {radius :13});
					break;
					case 'thuoctang':
					room.setPlayerDiscProperties(players_using[us][1], {radius :17});
					break;
		/* 			case 'thuoctanghinh':
					room.setPlayerDiscProperties(players_using[us][1], {radius :0});
					break; */
				}
			
				}
	}
	if (kickOff == false) { // simplest comparison to not charge usulessly the tick thing
		if (room.getScores().time != 0){
			
			kickOff = true;
			gk = isGk();
			announce("🔴 GK: " + gk[0].name + ", 🔵 GK: " + gk[1].name)
			announce("Nếu chọn không đúng GK hãy !gk để trở thành GK")
		}

	}
	if (goalScored == false){
		whoTouchedLast = getLastTouchTheBall(whoTouchedLast);
	}
	if (whoTouchedLast != undefined) {
		
		if (ballCarrying.get(whoTouchedLast.name)) {
			
			ballCarrying.get(whoTouchedLast.name)[0] += 1/60;
		}
 
		if  ( whoTouchedLast.id != whoTouchedBall[0].id){
			whoTouchedBall[1] = whoTouchedBall[0];
			whoTouchedBall[0] = whoTouchedLast; // last player who touched the ball
		}
	}
	}	
}
function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}
var has_dash = []
function realSoccerRef() {
	blockThrowIn();
	blockGoalKick();
	removeBlock();
	if (game.time == gameTime * 60 && game.extraTimeAnnounced == false) {
		extraTime();
		game.extraTimeAnnounced = true;
	}
	
	if (game.time == game.extraTimeEnd && game.lastPlayAnnounced == false) {
		announce("Chuẩn Bị Hết Trận", null, null, null, 1);
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
				room.setDiscProperties(0, {color: "0xFB9C00"});
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
				room.setDiscProperties(0, {color: "0xFB9C00"});
				game.rsTimer = 1000000;							
			}
		}
	}
	
	if (game.rsActive == true) {
		if ((room.getBallPosition().y > 611.45 || room.getBallPosition().y < -611.45)) {
			game.rsActive = false;
			if (game.lastPlayAnnounced == true) {
				room.stopGame(true);
				game.lastPlayAnnounced = false;
				announce("Kết Thúc");
				var players = room.getPlayerList()
			if (game.redScore > game.blueScore) {
				
				announce("Team 🔴 đã chiến thắng với tỉ số là: " + game.redScore,null,0xf44336 );
				updateWinLoseStats(redTeam, blueTeam);
			}
			else if (game.blueScore >game.redScore) {
				announce("Team 🔵 đã chiến thắng với tỉ số là: " + game.blueScore ,null,0x1394eb);
				updateWinLoseStats(blueTeam, redTeam);
			}
			else {
				announce("Cả hai đội 🔴 và 🔵 đã hòa nhau với tỉ số là: " + game.blueScore + " và " + game.redScore ,null,0xb3de09);
			}
						let scores = {
				blue: game.blueScore,
				red:game.redScore
			}
			RecSistem.sendDiscordWebhook(scores);
			announce("Bản ghi lại trận đấu đã được cập nhật trên discord: https://discord.gg/thevanhoi" );
			gamefinished()
			
		}
			
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			
			game.ballOutPositionX = Math.round(room.getBallPosition().x * 10) / 10;
			if (room.getBallPosition().y > 611.45) {
				game.ballOutPositionY = 400485;
				game.throwInPosY = 610;
			}
			if (room.getBallPosition().y < -611.45) {
				game.ballOutPositionY = -400485;
				game.throwInPosY = -610;
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
					//announce("🖐️ Throw In: 🔵 Blue");
					//announce("🔵 sẽ là người ném biên !!!",null,null,'small');
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
					//announce("🔴 sẽ là người ném biên !!!",null,null,'small');
					//announce("🖐️ Throw In: 🔵 Red");
					room.setDiscProperties(0, {color: "0xff3f34"});				
				});	
				sleep(100).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				});
			}
		}
	
		if (room.getBallPosition().x > 1161.45 && (room.getBallPosition().y > 124 || room.getBallPosition().y < -124)) {
			game.rsActive = false;	
			if (game.lastPlayAnnounced == true) {
				room.stopGame(true);
				game.lastPlayAnnounced = false;
				announce("Kết Thúc");
				var players = room.getPlayerList()
			if (game.redScore > game.blueScore) {
				announce("Team 🔴 đã chiến thắng với tỉ số là: " + game.redScore,null,0xf44336 );
				updateWinLoseStats(redTeam, blueTeam);
			}
			else if (game.blueScore >game.redScore) {
				announce("Team 🔵 đã chiến thắng với tỉ số là: " + game.blueScore ,null,0x1394eb);
				updateWinLoseStats(blueTeam, redTeam);
			}
			else {
				announce("Cả hai đội 🔴 và 🔵 đã hòa nhau với tỉ số là: " + game.blueScore + " và " + game.redScore ,null,0xb3de09);
			}
						let scores = {
				blue: game.blueScore,
				red:game.redScore
			}
			 RecSistem.sendDiscordWebhook(scores);
			announce("Bản ghi lại trận đấu đã được cập nhật trên discord: https://discord.gg/thevanhoi" );
			gamefinished()
			
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
					//announce("Đá ra ngoài của đội 🔴 !!!",null,null,'small');
					//announce("🔵 đã cầm banh   !!!",null,null,'small');
					//announce("🥅 Goal Kick: 🔵 Blue");
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
				//announce("🚩 Corner Kick: 🔴  Red");		
				//announce("Đá góc của đội 🔴 !!!",null,null,'small');				
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
		if (room.getBallPosition().x < -1161.45 && (room.getBallPosition().y > 124 || room.getBallPosition().y < -124)) {
			game.rsActive = false;
			if (game.lastPlayAnnounced == true) {
				room.stopGame(true);
				game.lastPlayAnnounced = false;
				announce("Kết Thúc");
				var players = room.getPlayerList()
			if (game.redScore > game.blueScore) {
				announce("Team 🔴 đã chiến thắng với tỉ số là: " + game.redScore,null,0xf44336 );
				updateWinLoseStats(redTeam, blueTeam);
			}
			else if (game.blueScore >game.redScore) {
				announce("Team 🔵 đã chiến thắng với tỉ số là: " + game.blueScore ,null,0x1394eb);
				updateWinLoseStats(blueTeam, redTeam);
				}
			else {
				announce("Cả hai đội 🔴 và 🔵 đã hòa nhau với tỉ số là: " + game.blueScore + " và " + game.redScore ,null,0xb3de09);
			}
						let scores = {
				blue: game.blueScore,
				red:game.redScore
			}
			    RecSistem.sendDiscordWebhook(scores);
   announce("Bản ghi lại trận đấu đã được cập nhật trên discord: https://discord.gg/thevanhoi" );
			gamefinished()
		
		}
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			room.getPlayerList().forEach(function(player) {
				room.setPlayerDiscProperties(player.id, {invMass: 100000});
			});
			
			if (game.rsTouchTeam == 1) {	
				//announce("Đá góc của đội 🔵 !!!",null,null,'small');			
				//announce("🚩 Corner Kick: 🔵 Blue");				
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
					//announce("Đá ra ngoài của đội 🔵 !!!",null,null,'small');
					//announce("🔴 đã cầm banh   !!!",null,null,'small');
					//announce("🥅 Goal Kick: 🔴 Red");
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
}

function handlePlayerPosition(){
	
	
	var players = room.getPlayerList();
	for (var i = 0; i < players.length; i++) { 
		var player = players[i];
		if ( player.position == null ) continue;
		var player_disc = room.getPlayerDiscProperties(player.id)
		var m = ( (player_disc.xspeed +player_disc.yspeed )/2 ) * 5
		var t = m.toFixed(0)
		
		
			if ( is_touch != player.id && (t == -3 || t == 3 || t == 5|| t == -5 )  && !has_dash.includes(player.id) ) {
			var max_time = 35
			dash_object[player.id] += 1
			
			if (dash_object[player.id] >= max_time&& !has_dash.includes(player.id)) {
					room.setPlayerDiscProperties(player.id,{"xspeed":player_disc.xspeed * 5,"yspeed":player_disc.yspeed * 5 })
					
					has_dash.push(player.id)
					whisper('Bạn vừa sử dụng kĩ năng [ tackle ]!',player.id,0xAED6F1,'bold')
					whisper('Cooldown 60s!',player.id,0xAED6F1,'bold')
					sleep(60000).then(() => {
						whisper('Kĩ năng [ tackle - xoạc ] đã có thể sử dụng!',has_dash[0],0xAED6F1,'bold')
						has_dash.shift()
						dash_object[player.id] = 0
						
					});

			}
			
			
			
		}
		else dash_object[player.id] = 0
		}

}
var toggle_offside = false
var is_touch = undefined
function handleBallTouch() {
	
	var players = room.getPlayerList();
	var ballPosition = room.getBallPosition();
	var ballRadius = game.ballRadius;
	var playerRadius = 15;
	var triggerDistance = ballRadius + playerRadius + 0.01;
	// Offside
	var redTeam = room.getPlayerList().filter(p => p.team == 1);
	var blueTeam = room.getPlayerList().filter(p => p.team == 2);
	redTeam.sort((a, b) => (a.position.x < b.position.x) ? 1 : -1)
	blueTeam.sort((a, b) => (a.position.x > b.position.x) ? 1 : -1)
	
	//
	for (var i = 0; i < players.length; i++) { // Iterate over all the players
		var player = players[i];
		if ( player.position == null ) continue;
		var distanceToBall = pointDistance(player.position, ballPosition);
		// ball color
		
			
		if ( distanceToBall < triggerDistance ) {		
			game.rsTouchTeam = player.team;
			game.throwinKicked = false;
			is_touch = player.id
		if (PlayerObject[player.name]) {
			if (game.powershotTrigger == false){
			if ( ball_color.hasOwnProperty(PlayerObject[player.name].cur_maubong)){
				room.setDiscProperties(0, {color:ball_color[PlayerObject[player.name].cur_maubong][1] });
			}
			
			else{
				room.setDiscProperties(0, {color: "0xFFFFFF"});
			}
			}
		}
		else if (PlayerObject[player.name]&& game.powershotTrigger == false){
			room.setDiscProperties(0, {color: "0xFFFFFF"});
		}

		// Off side code // 23 - 25
		if (toggle_offside == true) {
			if (redTeam.length >=6 && blueTeam.length >= 6){
				var ballpos = room.getBallPosition()
				if (ballpos.x > -1150 && ballpos.x < 1150 && ballpos.y > -600 && ballpos.y < 600) {
					if ( game.lastIsThrowIn == false &&game.kickPosition != undefined&&game.rsCorner == false && game.rsGoalKick == false && game.outStatus != "blueThrow" && game.outStatus != "redThrow"  && game.rsOffSide == false) {
						if (	player.team == 1 ) { // red team attack
							if ( game.lastKickerTeam==1&& game.lastKickerId != player.id ) { // highest player position 
							
								if ( player.position.x > 0 && player.position.x > blueTeam[blueTeam.length-2].position.x && player.position.x < blueTeam[blueTeam.length-1].position.x){ // blueTeam[blueTeam.length-1 = gk, offside warning 
										
										if (game.kickPosition.x > 0 &&game.kickPosition.x < player.position.x) { // offside check
										
										let offside_check_pos = game.kickPosition.x + 100
											if (player.position.x > offside_check_pos){
											announce('OFFSIDE - Việt Vị !!!')
											

											room.setDiscProperties(1, {x: player.position.x, y: player.position.y, radius:300 });
											room.setDiscProperties(0, {x: player.position.x,y:player.position.y, xspeed: 0, yspeed: 0, color: "0x0fbcf9", xgravity: 0, ygravity: 0});
											sleep(100).then(() => {
											game.rsOffSide = true
											
											});	
											

											sleep(3500).then(() => {
												room.setDiscProperties(1, {radius: 0 });
											
											});	
										}
										else toggle_offside = false
									}
									else toggle_offside = false
								} 
								else toggle_offside = false
							}
							else toggle_offside = false
						}
						else { // red team attack
							if ( game.lastKickerTeam == 2 && game.lastKickerId != player.id) { // highest player position 
							
								if (player.position.x < 0 && player.position.x < redTeam[redTeam.length-2].position.x && player.position.x > redTeam[redTeam.length-1].position.x){ // blueTeam[blueTeam.length-1 = gk, offside warning 
									
									if ( game.kickPosition.x < 0 && game.kickPosition.x > player.position.x) { // offside check
										let offside_check_pos = game.kickPosition.x - 100
											if (player.position.x < offside_check_pos){
										announce('OFFSIDE - Việt Vị !!!')
											


											room.setDiscProperties(2, {x: player.position.x,y:player.position.y, radius: 300 });
											room.setDiscProperties(0, {x: player.position.x,y:player.position.y, xspeed: 0, yspeed: 0, color: "0xff3f34", xgravity: 0, ygravity: 0});	
											sleep(100).then(() => {
											game.rsOffSide = true
											
											});	

										
										sleep(3500).then(() => {
											room.setDiscProperties(2, {radius: 0 });
										
										});	
									}
									else toggle_offside = false
									}
									else toggle_offside = false
								}
								else toggle_offside = false
							}
							else toggle_offside = false
						}	
					}
				}
			}
		}
		// END
			//=========== POWERSHOT CODE ===========
			if (game.rsCorner == false && game.rsGoalKick == false && game.outStatus != "blueThrow" && game.outStatus != "redThrow" && powerShotMode == true) {
				if (game.powershotID != player.id) {
					game.powershotID = player.id;
					game.powershotTrigger = false;
					game.powershotCounter = 0;
				} else {
					
					game.powershotCounter++;
					//room.sendAnnouncement("Powershot counter: " + game.powershotCounter, null, 0x333333, "small-bold", 0);
					if (game.powershotCounter > 0 && game.powershotCounter < 75&& game.powershotTrigger == false && Math.round(room.getDiscProperties(0).invMass) != 2) {
						room.setDiscProperties(0, {invMass: 1.2});
						game.powershotTrigger = true;
						
					}
					else if (game.powershotCounter > 85 && game.powershotCounter < 150) {
						room.setDiscProperties(0, {invMass: 1.5});
						room.setDiscProperties(0, {color: "0xffcc99"});
					}
					else if (game.powershotCounter > 150 && game.powershotCounter < 250) {
						room.setDiscProperties(0, {invMass: 1.7});
						room.setDiscProperties(0, {color: "0xffb366"});	

					}
					else if (game.powershotCounter > 250&& game.powershotCounter < 350 ) {
						room.setDiscProperties(0, {invMass: 2});
						room.setDiscProperties(0, {color: "0xff8c1a"});

					}
					else if (game.powershotCounter > 350 ) {
						room.setDiscProperties(0, {invMass: 2});

						room.setDiscProperties(0, {color: "0xcc6600"});	

					}
					
				}
			}
			//=========== POWERSHOT CODE ===========
			
			if (game.rsCorner == false && room.getDiscProperties(0).xgravity != 0) {
				room.setDiscProperties(0, {xgravity: 0, });
				game.rsSwingTimer = 10000;
			}
		} 
		is_touch = undefined
		//=========== POWERSHOT CODE ===========
		if ( distanceToBall > triggerDistance +3 && player.id == game.powershotID && game.powershotTrigger == true && powerShotMode == true) {
			game.powershotCounter = 0;
			game.powershotTrigger = false;
			game.powershotid = 0;
			if (parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) != 1.05) {
				room.setDiscProperties(0, {invMass: 1.05});
				room.setDiscProperties(0, {color: "0xFFFFFF"});
				
			}
		}
		//=========== POWERSHOT CODE ===========
	}
}

function addscore(which) {
	
	if (which == "red"){
		game.redScore = game.redScore + 1;
	}
	else {
		game.blueScore = game.blueScore + 1;
	}
	
	
}
var dis_loop = false
var unban_loop = false
function updateGameStatus() {
	game.time = Math.floor(room.getScores().time);
	game.ballRadius = room.getDiscProperties(0).radius;
	

	if (created == false){
		created = true
		sleep(290000).then(() => {
			announce("Map được tạo bởi Weew",null,0xE6B0AA)
			created = false
			
		});
	if (dis_loop == false){
		dis_loop = true
		sleep(120000).then(() => {
			announce("Discord:  https://discord.gg/thevanhoi ",null,0x7DCEA0)
			dis_loop = false
			
		});
	}
	if (taixiu == false) {
		taixiu = true
		play_taixiu(3)
		
	}
	if (unban_loop == false){
		unban_loop = true
		setTimeout(uban_loop, 7200000);
	}
//	if (afk_on==false){		
	
	//	afk_on = true

	//	sleep(8000).then(() => {
	//		checkAFK()
			
	//	});
		
	//}

	
}
}
function uban_loop(){
	room.clearBans()
	list_voted = []
	vote_ban_but_out = []
	announce('Danh sách ban đã được clear tự động. Lần clear kế tiếp > 2h')
	announce('Danh sách vote ban đã được clear tự động. Lần clear kế tiếp > 2h')
	setTimeout(uban_loop, 7200000);
}
// tài xỉu
function play_taixiu(w){
		phien_taixiu += 1
		announce( '[ Phiên ' + phien_taixiu + '] :' +" bắt đầu!! 120s đếm ngược!",null,0x00ccff)
		announce( "Nhập !xiu [mức cược] hoặc !tai [mức cược]",null,0x5DADE2)
		tx_dangdienra = true
		setTimeout(taixiu_core, 70000);
	
}

function taixiu_core() {

	
			let tongtien = 0
			let diem_taixiu = Math.floor(Math.random() * 17) + 4
			diem_taixiu = Math.floor(Math.random() * 17) + 4
			diem_taixiu = Math.floor(Math.random() * 17) + 4
			diem_taixiu = Math.floor(Math.random() * 17) + 4
			diem_taixiu = Math.floor(Math.random() * 17) + 4
			diem_taixiu = Math.floor(Math.random() * 17) + 4
			diem_taixiu = Math.floor(Math.random() * 17) + 4
			
			if (diem_taixiu <= 10) {
				announce( '[ Phiên thứ ' + phien_taixiu + '] :' + diem_taixiu +" điểm ra Xỉu !!",null,0x5DADE2)
				if (xiu_players.length > 0) {
					// get total money of tai players
				var tai_money = 0
				for (tpl in tai_players){
					if (PlayerObject[tai_players[tpl][0].name] ){
						tai_money += tai_players[tpl][1]
					}
				}
				var temp_xiu_money = 0
				for (tpl in xiu_players){
					if (PlayerObject[xiu_players[tpl][0].name] ){
						temp_xiu_money += xiu_players[tpl][1]
					}
				}
				announce( "Tổng tiền đã được đặt ở Tài là: " + numberWithCommas(tai_money) + "đ",null,0xC2E333)
				announce( "Tổng tiền đã được đặt ở Xỉu là: " + numberWithCommas(temp_xiu_money) + "đ",null,0xC2E333)
				
				var xiu_not_full = []
				var total_xiu_players = xiu_players.length // get xiu player
				var each_one_get = tai_money/total_xiu_players
				for (pl in xiu_players){
					if (PlayerObject[xiu_players[pl][0].name] && tai_money > 0 ){
						var max_earn_money = xiu_players[pl][1] * 1.8 // max money can get
						var can_earn = each_one_get +  xiu_players[pl][1]
						if (can_earn >  max_earn_money) {
							tai_money -= max_earn_money
							let final_money =  max_earn_money
							PlayerObject[xiu_players[pl][0].name].money += final_money
							tai_money += can_earn - max_earn_money
							whisper('Bạn đã nhận được: ' + numberWithCommas( final_money ) + 'đ từ sòng bài Thế Vận Hội !' ,xiu_players[pl][0].id)
						}
						else if (can_earn <= max_earn_money){
							let final_money =  can_earn 
							PlayerObject[xiu_players[pl][0].name].money += final_money
							tai_money -= can_earn+ xiu_players[pl][1]
							xiu_not_full.push(xiu_players[pl]) // add to final process
							whisper('Bạn đã nhận được: ' + numberWithCommas( final_money ) + 'đ từ sòng bài Thế Vận Hội !!' ,xiu_players[pl][0].id)
						}
						
						if (PlayerObject[xiu_players[pl][0].name].win_taixiu == undefined ||PlayerObject[xiu_players[pl][0].name].win_taixiu == null  ) PlayerObject[xiu_players[pl][0].name].win_taixiu = 0
						PlayerObject[xiu_players[pl][0].name].win_taixiu += 1

						
						
						if (PlayerObject[xiu_players[pl][0].name].win_taixiu >= 200)  add_thanhtuu(xiu_players[pl][0].name,'vuacobac')
						if (PlayerObject[xiu_players[pl][0].name].win_taixiu >= 20)  add_thanhtuu(xiu_players[pl][0].name,'nghiencobac')
					UpdatePlayer('win_taixiu',xiu_players[pl][0].name)
					UpdatePlayer('money',xiu_players[pl][0].name)
					}
				}
				// if (tai_money > 0){
				// for (pl in xiu_not_full){ //last
					// if (PlayerObject[xiu_not_full[pl][0].name]) {
						// var total_xiu_players = xiu_not_full.length // get xiu player
						// var each_one_get = tai_money/total_xiu_players
						// var max_earn_money = xiu_not_full[pl][1] * 1.8 // max money can get
						// var can_earn = each_one_get
						// if (can_earn <= max_earn_money) {
							// PlayerObject[xiu_not_full[pl][0].name].money += can_earn
							// tai_money -= can_earn
							// whisper('Bạn đã nhận được: ' + numberWithCommas( can_earn ) + 'đ từ sòng bài thế vận hội!!' ,xiu_not_full[pl][0].id)
							// UpdatePlayer(PlayerObject[xiu_not_full[pl][0].name],xiu_players[pl][0].name)
							// delete xiu_not_full[pl]
						// }
					// }
				// } 
				// }
				for (pl in tai_players){
					whisper('Bạn đã mất: ' + numberWithCommas ( (tai_players[pl][1])  ) + 'đ khi chơi tài xỉu!',tai_players[pl][0].id )
				}
			}
			}
			else {
				announce( '[ Phiên ' + phien_taixiu + '] :' + diem_taixiu +" điểm ra Tài!! !!",null,0x5DADE2)
				
				if (tai_players.length > 0) {
				var xiu_money = 0
				for (tpl in xiu_players){
					if (PlayerObject[xiu_players[tpl][0].name] ){
						xiu_money += xiu_players[tpl][1]
					}
				}
				var temp_tai_money = 0
				for (tpl in tai_players){
					if (PlayerObject[tai_players[tpl][0].name] ){
						temp_tai_money += tai_players[tpl][1]
					}
				}
				announce( "Tổng tiền đã được đặt ở Tài là: " + numberWithCommas(temp_tai_money) + "đ",null,0xC2E333)
				announce( "Tổng tiền đã được đặt ở Xỉu là: " + numberWithCommas(xiu_money) + "đ",null,0xC2E333)
				
				var tai_not_full = []
				var total_tai_players = tai_players.length // get all tai player
				var each_one_get = xiu_money/total_tai_players
				for (pl in tai_players){

					if (PlayerObject[tai_players[pl][0].name] && xiu_money > 0){
						var max_earn_money = tai_players[pl][1] * 1.8 // max money can get
						var can_earn = each_one_get+ tai_players[pl][1]
						if (can_earn >  max_earn_money) {
							let final_money =  max_earn_money 
							xiu_money -= max_earn_money
							PlayerObject[tai_players[pl][0].name].money += final_money
							xiu_money += can_earn - max_earn_money
							whisper('Bạn đã nhận được: ' + numberWithCommas( final_money ) + 'đ từ sòng bài thế vận hội !' ,tai_players[pl][0].id)
						}
						else if (can_earn <= max_earn_money){
							let final_money =   can_earn 
							PlayerObject[tai_players[pl][0].name].money += final_money
							xiu_money -= can_earn
							tai_not_full.push(tai_players[pl]) // add to final process
							whisper('Bạn đã nhận được: ' + numberWithCommas( final_money ) + 'đ từ sòng bài thế vận hội !!' ,tai_players[pl][0].id)
						}
						PlayerObject[tai_players[pl][0].name].money += (tai_players[pl][1]) * 2
						
						if (PlayerObject[tai_players[pl][0].name].win_taixiu == undefined ||PlayerObject[tai_players[pl][0].name].win_taixiu == null  ) PlayerObject[tai_players[pl][0].name].win_taixiu = 0
						PlayerObject[tai_players[pl][0].name].win_taixiu += 1
						

						
						if (PlayerObject[tai_players[pl][0].name].win_taixiu >= 200) add_thanhtuu(tai_players[pl][0].name,'vuacobac')
						if (PlayerObject[tai_players[pl][0].name].win_taixiu >= 20)  add_thanhtuu(tai_players[pl][0].name,'nghiencobac')
							UpdatePlayer('win_taixiu',tai_players[pl][0].name)
						UpdatePlayer('money',tai_players[pl][0].name)
					}
				}
				// if (xiu_money > 0){
				// for (pl in tai_not_full){ //last
					// if (PlayerObject[tai_not_full[pl][0].name]) {
						// var total_tai_players = tai_not_full.length // get xiu player
						// var each_one_get = tai_money/total_tai_players
						// var max_earn_money = tai_not_full[pl][1] * 1.8 // max money can get
						// var can_earn = each_one_get
						// if (can_earn <= max_earn_money) {
							// PlayerObject[tai_not_full[pl][0].name].money += can_earn
							// tai_money -= can_earn
							// whisper('Bạn đã nhận được: ' + numberWithCommas( can_earn ) + 'đ từ sòng bài thế vận hội!!' ,tai_not_full[pl][0].id)
							// UpdatePlayer(PlayerObject[tai_not_full[pl][0].name],tai_players[pl][0].name)
							// delete tai_not_full[pl]
						// }
					// }
				// } 
				// }
				for (pl in xiu_players){
					whisper('Bạn đã mất: ' + numberWithCommas ( (xiu_players[pl][1])  ) + 'đ khi chơi tài xỉu!',xiu_players[pl][0].id )
				}
			}
			}
			xiu_players = []
			tai_players = []
			datcuoc_players = []
			//announce( '[ Phiên ' + phien_taixiu + '] :' + " tông tiền bên thắng đã nhận được là: " + tongtien ,null,0x00ccff)
			tx_dangdienra = false
			setTimeout(play_taixiu, 5000);
}


function add_thanhtuu(who,tt){
	if (PlayerObject[who]){
		var arr_thanhtuu = PlayerObject[who].thanhtuu;
		let check = false
		for (j in arr_thanhtuu){
			if (arr_thanhtuu[j] == tt) {
				check = true
			}

		}
		if (check == false) {
			if (arr_thanhtuu == undefined || arr_thanhtuu == null) arr_thanhtuu = []
			arr_thanhtuu.push(tt)
			announce('Cầu thủ ' + who + ' đã đạt được thành tựu ' + thanhtuu_list[tt] + ' Xin Chúc Mừng !!',null,0xF9BF0B)
			whisper('Bạn đã đạt được một thành tựu mới, hãy nhập !sudungtt ' + tt+' để sử dụng thành tựu này',PlayerObject[who].id ,0xF9BF0B)
		}

		PlayerObject[who].thanhtuu = arr_thanhtuu
		UpdatePlayer('thanhtuu',who)
		return;
	}
}
function GetPlayerByName(playername) {
	var list_pl = room.getPlayerList()
	var p = {}
	for( pl in list_pl) {

		if (list_pl[pl].name == playername ) {
			
			p = list_pl[pl]
			break;
		}
	}
	
	return p 
}
function announce(msg, targetId, color, style, sound,trans) {
	if (color == null) {
		color = 0xF7DC6F;
	}
	if (style == null) {
		style = "bold";
	}
	if (sound == null) {
		sound = 0;
	}
	if (trans == false) {
		room.sendAnnouncement( "📢: "+msg, targetId, color, style, sound);
	} else {
		if (targetId == null || targetId == undefined){
			
			for (lang in language_data) {
				for (i in language_data[lang]) {
					if (lang == 'vi') {
						
						var player = GetPlayerByName(language_data[lang][i])
						
						if (player) room.sendAnnouncement( "📢: "+msg, player.id, color, style, sound); // player speak vietnamese
					}
					else {
						var player = GetPlayerByName(language_data[lang][i])
						if (player)Translate(msg,player,GetPlayerLanguage(player.name),"ann",color,style,sound)
					}

				}
			}
		}
		else {
			var player = room.getPlayer(targetId)
			if (PlayerUseAnotherLanguage(player.name)) {
				Translate(msg,player,GetPlayerLanguage(player.name),"ann",color,style,sound)
			}
			else {
				room.sendAnnouncement( "📢: "+msg, targetId, color, style, sound); // player speak vietnamese
			}
		}
	}
	
	
}

function whisper(msg, targetId, color, style, sound,trans) {
	if (color == null) {
		color = 0x66C7FF;
	}
	if (style == null) {
		style = "normal";
	}
	if (sound == null) {
		sound = 0;
	}
	if (trans == false) {
		room.sendAnnouncement(msg, targetId, color, style, sound);
	} else {
	if (targetId != null && targetId != undefined){
		
		var player = room.getPlayer(targetId)
		if (player){
			if (PlayerUseAnotherLanguage(player.name)) { 
			
				Translate(msg,player,GetPlayerLanguage(player.name),"whi",color,style,sound)
				
			}else {
				room.sendAnnouncement(msg, targetId, color, style, sound); // player speak vietnamese
			}
		}
	}
	}
	

}
function PlayerUseAnotherLanguage(playername){
	if (!language_data['vi'].includes(playername)) return true
	else return false
}
function GetPlayerLanguage(playername){
	for (lang in language_data){
		if (language_data[lang].includes(playername)) {
			return lang
			
		}
	}
	return 'vi'
	
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
			room.setDiscProperties(0, {color: "0xFB9C00"});
		}
	});
	sleep(400).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(600).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xFB9C00"});
		}
	});
	sleep(800).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1000).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xFB9C00"});
		}
	});
	sleep(1200).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1400).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xFB9C00"});
		}
	});
	sleep(1600).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1675).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xFB9C00"});
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
	announce("Bù Giờ: " + extraSeconds + " giây", null, null, null, 1);
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
function AvatarPosition(list_gk, pos) {
	// GK 🥅
	//
	
	let avatar = '🧤'
	for (gk in list_gk){
	let playerId = gk
	
	room.setPlayerAvatar(playerId, avatar);
	sleep(250).then(() => {
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
	sleep(10000).then(() => {
	AvatarPosition(list_gk,'123')
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
				if (room.getPlayerDiscProperties(player.id).invMass != 9999999) {
					room.setPlayerDiscProperties(player.id, {invMass: 9999999});
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).y < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y < -485) {
						room.setPlayerDiscProperties(player.id, {y: -460});
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
				if (room.getPlayerDiscProperties(player.id).invMass != 9999999) {
					room.setPlayerDiscProperties(player.id, {invMass: 9999999});
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).y < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y < -485) {
						room.setPlayerDiscProperties(player.id, {y: -460});
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
				if (room.getPlayerDiscProperties(player.id).invMass != 9999999) {
					room.setPlayerDiscProperties(player.id, {invMass: 9999999});
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).y > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y > 485) {
						room.setPlayerDiscProperties(player.id, {y: 460});
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
				if (room.getPlayerDiscProperties(player.id).invMass != 9999999) {
					room.setPlayerDiscProperties(player.id, {invMass: 9999999});
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).y > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y > 485) {
						room.setPlayerDiscProperties(player.id, {y: 460});
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
					if (player.position.x < -419 && player.position.y > -320 && player.position.y < 320) {
						room.setPlayerDiscProperties(player.id, {x: -410});
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
					if (player.position.x > 419 && player.position.y > -320 && player.position.y < 320) {
						room.setPlayerDiscProperties(player.id, {x: 410});
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

// command


function statsFun(player, message){ // !stats Anddy
	if (stats.get(message.substr(7))){
		sendStats(message.substr(7));
	} else{ return false;}
}
 


function gkFun(player){ // !gk
 
	if (game_start){
		if (player.team == 1) {
			gk[0] = player;
			whisper('Bạn đang làm GK',player.id,null)
		}
		else if (player.team == 2){
			gk[1] = player;
			whisper('Bạn đang làm GK',player.id,null)
		}
	}
	return;
}



function rankingCalc(player){
	
	
	var point =  Number(PlayerObject[player.name].goals) * 5 +Number( PlayerObject[player.name].assists) * 3 +
			Number(PlayerObject[player.name].wins) * 3  + Number(PlayerObject[player.name].khongthungluoi) * 7 -
			Number(PlayerObject[player.name].lose) * 7 - Number(PlayerObject[player.name].ownGoals) * 4;

	return point
}
function ranking(pl){ // 
	if (PlayerObject[pl.name]) {

	// 
	score = rankingCalc(pl)
	PlayerObject[pl.name].rankpoint = score
		// Goal: 5 pts, assist: 3 pts, win: 3 pts, cs: 6 pts, lose: -7 pts, og: -4 pts
		if (score < 100 && PlayerObject[pl.name].level != '⭐') { 
			PlayerObject[pl.name].level = '⭐'
			whisper("Bậc sao của bạn đã được cập nhật là: ⭐ ", pl.id, 0xDCBE26, "bold", 0);
		}  
		else if (score >= 100 && score < 220 && PlayerObject[pl.name].level != '⭐⭐'){
			PlayerObject[pl.name].level = '⭐⭐'
			whisper("Bậc sao của bạn đã được cập nhật là: ⭐⭐ ", pl.id, 0xDCBE26, "bold", 0);
		}
		else if (score >= 220 && score < 430 && PlayerObject[pl.name].level != '⭐⭐⭐'){
			PlayerObject[pl.name].level = '⭐⭐⭐' 
			whisper("Bậc sao của bạn đã được cập nhật là: ⭐⭐⭐ ", pl.id, 0xDCBE26, "bold", 0);
		}
		else if (score >= 430 && score < 920 && PlayerObject[pl.name].level != '✨'){
			PlayerObject[pl.name].level = '✨'
			whisper("Bậc sao của bạn đã được cập nhật là: ✨ ", pl.id, 0xDCBE26, "bold", 0);
		}
		else if (score >= 920 && score < 1700 && PlayerObject[pl.name].level != '✨✨'){
			PlayerObject[pl.name].level = '✨✨'
			whisper("Bậc sao của bạn đã được cập nhật là: ✨✨ ", pl.id, 0xDCBE26, "bold", 0);
		}
		else if (score >= 1700  && PlayerObject[pl.name].level != '✨✨✨'){
			PlayerObject[pl.name].level = '✨✨✨'
			whisper("Bậc sao của bạn đã được cập nhật là: ✨✨✨ ", pl.id, 0xDCBE26, "bold", 0);
		}
	UpdatePlayer('rankpoint',pl.name)
	UpdatePlayer('level',pl.name)
	return score;
}
}
 
function sendStats(player){
	if (PlayerObject[player.name] && player != undefined) {

	PlayerObject[player.name].last_entergame =  Date.now()
	var mili = Number(PlayerObject[player.name].last_entergame) - Number(PlayerObject[player.name].first_entergame)
	PlayerObject[player.name].playtime = mili
	PlayerObject[player.name].winrate = (Number(PlayerObject[player.name].wins) / (Number(PlayerObject[player.name].wins) + Number(PlayerObject[player.name].lose)) ) * 100
	
	whisper("-------------------- Thông Tin Người Chơi --------------------", player.id,0xcc9900,'bold');
	whisper("Ghi bàn: " + PlayerObject[player.name].goals + "| Hỗ trợ: " + PlayerObject[player.name].assists, player.id,0xcc9900,'bold');
	whisper("Phản Lưới: " + PlayerObject[player.name].ownGoals + "| Không thủng lưới: " + PlayerObject[player.name].khongthungluoi, player.id,0xcc9900,'bold');
	whisper("Thắng: " + PlayerObject[player.name].wins + "| Thua: " + PlayerObject[player.name].lose, player.id,0xcc9900,'bold');
	whisper("Tổng giờ chơi: " + convertMsToHM(PlayerObject[player.name].playtime ), player.id,0xcc9900,'bold');
	whisper("Tỉ lệ thắng: " + Math.round(PlayerObject[player.name].winrate * 100) / 100  + '%', player.id,0xcc9900,'bold');
	whisper("Số tiền hiện có: " + numberWithCommas(PlayerObject[player.name].money) + 'đ', player.id,0xcc9900,'bold');

	whisper("-------------------------------------------------------------", player.id,0xcc9900,'bold');
	UpdatePlayer('playtime',player.name)
	UpdatePlayer('winrate',player.name)
	
	}
}
 
 
function whichTeam(){ // gives the players in the red or blue team
	var players = room.getPlayerList();
	var redTeam = players.filter(player => player.team == 1);
	var blueTeam = players.filter(player => player.team == 2);
	return [redTeam, blueTeam]
}
 

function isGk(){ // gives the mosts backward players before the first kickOff
	var players = room.getPlayerList();
	var min = players[0];
	min.position = {x: room.getBallPosition().x + 60}
	var max = min;
	
	for (var i = 0; i < players.length; i++) {
		if (players[i].position != null){
			if (min.position.x > players[i].position.x) min = players[i];
			if (max.position.x < players[i].position.x) max = players[i];
		}
	}
	
	return [min, max]
}
function updateWinLoseStats(winners, losers){

	for (var i = 0; i < winners.length; i++) {
		if (PlayerObject[winners[i].name]) {
			
			
			PlayerObject[winners[i].name].wins += 1;
			UpdatePlayer('wins',winners[i].name)
			
		}
	}
	

	for (var i = 0; i < losers.length; i++) {
		if (PlayerObject[losers[i].name]) {
			
			PlayerObject[losers[i].name].lose += 1;
			UpdatePlayer('lose',losers[i].name)
		}
	}
}
function initBallCarrying(redTeam, blueTeam){
	var ballCarrying = new Map();
	var playing = redTeam.concat(blueTeam);
	for (var i = 0; i < playing.length; i++) {
		ballCarrying.set(playing[i].name, [0, playing[i].team]); // secs, team, %
	}
	return ballCarrying;
}
 
 
 
function updateTeamPoss(value){
	if (value[1] == 1) redPoss += value[0];
	if (value[1] == 2) bluePoss += value[0];
}
 
var bluePoss;
var redPoss;
function teamPossFun(player,type){
	if (room.getScores() == null) return false;
	bluePoss = 0;
	redPoss = 0
	ballCarrying.forEach(updateTeamPoss);
	redPoss = Math.round((redPoss / room.getScores().time) * 100);
	bluePoss = Math.round((bluePoss / room.getScores().time) * 100);
	if (type == 'whisper') {
	whisper("Tỉ lệ kiểm soát bóng: 🔴 " + redPoss + "% - " + bluePoss + "% 🔵.",player.id,0xcc9900);
		}
	else{
		announce("Tỉ lệ kiểm soát bóng: 🔴 " + redPoss + "% - " + bluePoss + "% 🔵.");
	}
}


// etc
var stats = new Map(); // map where will be set all player stats

var init = "init"; // Smth to initialize smth
init.id = 0; // Faster than getting host's id with the method
init.name = "init";
var scorers ; // Map where will be set all scorers in the current game (undefined if reset or end)
var whoTouchedLast; // var representing the last player who touched the ball
var whoTouchedBall = [init, init]; // Array where will be set the 2 last players who touched the ball
var gk = [init, init];
var goalScored = false;
// events
var team_name = team => team == 1 ? "blue" : "red";
var isOwnGoal = (team, player) => team != player.team ? " (og)" : "";
var floor = s => s < 10 ? "0" + s : s;
var playerTouchedTwice = players => players[0].team == players[1].team ? " (" + players[1].name + ")" : "";

var redTeam;
var blueTeam;

var kickOff = false;
var hasFinished = false;

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}
function isOvertime(){

	scores = room.getScores();
	if (scores != null){
		if (scores.timeLimit != 0){
			if (scores.time > scores.timeLimit){
				if (scores.red == 0 && hasFinished == false){
					if (PlayerObject[gk[0].name] || PlayerObject[gk[0].name]) {
						
						if (PlayerObject[gk[0].name] != undefined )PlayerObject[gk[0].name].khongthungluoi += 1;

						hasFinished = true;
						if (gk[0].name != gk[1].name){
						
						UpdatePlayer('khongthungluoi',gk[0].name)
						whisper('Bạn đã không thủng lưới trái nào và được cộng thêm 7 điểm ! ',gk[0].id)
						
						}
						else {
						whisper('Bạn đã không thủng lưới trái nào và được cộng thêm 7 điểm ! ',gk[0].id)
						UpdatePlayer('khongthungluoi',gk[1].name)
						}
						
					}
				}
				else if (scores.blue == 0 && hasFinished == false) {
					if (PlayerObject[gk[0].name] || PlayerObject[gk[0].name]) {
						

						if (PlayerObject[gk[0].name] != undefined ) PlayerObject[gk[0].name].khongthungluoi += 1;
						hasFinished = true;
						if (gk[0].name != gk[1].name){
							UpdatePlayer('khongthungluoi',gk[0].name)
						whisper('Bạn đã không thủng lưới trái nào và được cộng thêm 7 điểm ! ',gk[1].id)
						}
						else {
						UpdatePlayer('khongthungluoi',gk[1].name)
						whisper('Bạn đã không thủng lưới trái nào và được cộng thêm 7 điểm ! ',gk[1].id)
						}
						
					}
				}
				
			}
		}
	}
}

var radiusBall = 8.5;
var triggerDistance = radiusBall + 15 + 0.1;
function getLastTouchTheBall(lastPlayerTouched, time) {
	var ballPosition = room.getBallPosition();
	var players = room.getPlayerList();
	for(var i = 0; i < players.length; i++) {
		if(players[i].position != null) {
			var distanceToBall = pointDistance(players[i].position, ballPosition);
			if(distanceToBall < triggerDistance) {
				lastPlayerTouched = players[i];
				return lastPlayerTouched;
			}
		}
	}
	return lastPlayerTouched;
 
}
const activities = {}

function afkKick(){
    var players = room.getPlayerList();
    for(let id in activities){
	for(var i=0; i<players.length; i++){
	    if(room.getScores() != null){
		if(players[i].team!=0){
		    if(Date.now() - activities[players[i].id] > 30000){
			room.kickPlayer(players[i].id,"AFK",false);
		    }
		}
	    }
	}
    }
}


function checkAFK() {
	var players = room.getPlayerList()
  for (var i = 0; i < players.length; i++) { // Iterate over all the players
    var player = players[i];
    if (player.position == null) continue; // Skip players that don't have a position
    var afkswitch = 1; // its for activate and deactivate the AFKicker


    if (gameState === 'running' && afkswitch == 1) { // Check if onGameStart event is called and afkswitch is 1
      for (var counter = 0; counter <= 60; counter++) { // Start counter
        if ( player.id in activities || gameState === 'paused' || gameState === null) { // Check if onPlayerActivity, room pause and room stop event is called
          break;
        } else if (counter === 60) {

          room.kickPlayer(player.id, "AFK", false); // Kick afk player
          announce(player.name + ' bị kick vì AFK!');

        }
      }
	  
    }
  }
 		sleep(1000).then(() => {
			for (var ac in activities) delete activities[ac];
			
		});
		sleep(30000).then(() => {
			checkAFK()
		});
	
}
var gameState


  room.onGamePause = byPlayer => {
	  game_start = false
    gameState = 'paused';
  }

  room.onGameUnpause = byPlayer => {
    gameState = 'running';
  }
  room.onGameReset = byPlayer => {
    gameState = null;
  }
var ps_object = {}
room.onPlayerActivity = function(player){
    activities[player.id] = Date.now();
/* 	ps_object[player.id].push(Date.now())
	if (ps_object[player.id].length >= 10) {
		
		console.log(ps_object[player.id][9])
		var dif = ps_object[player.id][9] - Date.now()
		var seconds_between_dif = dif / 1000
		var Seconds_Between_Final = Math.abs(seconds_between_dif);
		if (Seconds_Between_Final < 1.3){
			if (!PlayerObject[player.name]['shot_mode']) PlayerObject[player.name]['shot_mode'] = 0
			PlayerObject[player.name].shot_mode += 1
			if (PlayerObject[player.name].shot_mode >= 1) {
				PlayerObject[player.name].shot_mode = 0
				whisper('Đá Thường | Normal Shot')
			}
			if (PlayerObject[player.name].shot_mode ==0) whisper('Sút Mạnh | Power Shot')
		}
		ps_object[player.id] = []
	} */
 
 	sleep(1200).then(() => {
	delete activities[player.id];
			
	});
	//console.log(room.getPlayerDiscProperties(player.id))

}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let webhookURL = `https://discord.com/api/webhooks/996306232895885353/t-8A3maKK9AJrQAEoLzVVJsgaT29CJNxy-F3jS_-BgFjsmrGuLLLQ2In5O4HLevTYd3S`;

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
          "username": "Statistics TVH Real Soccer | Room: " + room_type,
          "avatar_url": "https://cdn4.iconfinder.com/data/icons/sports-fitness-line-color-vol-5/52/point__score__report__whiteboard__scoreboard__match__statistics-512.png",
          "content": "",
          "embeds": [{
            "title": "",
            "color": 2078513,
            "description": "",
            "timestamp": null,
            "author": { "name": 'Thế Vận Hội Real Soccer' },
            "image": {},
            "thumbnail": {},
            "footer": {
                "text": `HBReplay-${RecSistem.getCustomDate()}`,
                "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ORCID_iD.svg/2048px-ORCID_iD.svg.png"
            },
            "fields": [
            { "name": "🔴", "value": `${red.join("\n")}\n**Bàn Thắng**\n${scores.red}`, "inline": true },
            { "name": "🔵", "value": `${blue.join("\n")}\n**Bàn Thắng**\n${scores.blue}`, "inline": true },
			{ "name": "Thời Gian Trận Đấu", "value": game.time  + 's'},
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
	switch(room_type){
		case 1:
		discord_hook =  "https://discord.com/api/webhooks/1012031755101941882/UTT9I4WfHJaELoviFwuuzcaxBrYr17NbXqztR8XJvnRzSSLBO_Ew6uz5bLpcIrEINYjH"
		break;
		case 2:
		discord_hook = "https://discord.com/api/webhooks/1012031854066548796/zHt2-97hlwBrmp0gA-bTkPooretZyfroVosrrJGMHEq3MOnRHdBrPGpu6GXOPIw7AagH"
		break;
		
	}
	var request = new XMLHttpRequest();
	request.open("POST", discord_hook);

	request.setRequestHeader('Content-type', 'application/json');

	var chat_params = {
	avatar_url: 'https://e7.pngegg.com/pngimages/611/517/png-clipart-computer-icons-online-chat-voice-chat-in-online-gaming-livechat-take-a-message-miscellaneous-blue-thumbnail.png',
	username: 'Haxball Chat Room ' + room_type,
	content: message
	};

	request.send(JSON.stringify(chat_params));
}
var report_hook = "https://discord.com/api/webhooks/996012019520122920/SvVE3Cmzn5V6OK2TCxeAuBFNjXa3Bu7YHxZLIhldlsq4naaNwgJb8eiGx_Vf8UVaUlyK"

function sendReportToDiscord(message) {
	var request = new XMLHttpRequest();
	request.open("POST", report_hook);

	request.setRequestHeader('Content-type', 'application/json');

	var chat_params = {
	avatar_url: 'https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-report-icon-png-image_533333.jpg',
	username: 'Thế Vận Hội Report Room ' + room_type,
	content: message
	};

	request.send(JSON.stringify(chat_params));
}

function sendChuyentienLog(message) {
	
	var dis_hook = 'https://discord.com/api/webhooks/1005040927452176395/A1EPnXTdmt-Uo7L_lLG3pXF5LBWtrMnPi2ida-BPJRaHwZYbGDzvFklDQ5aXlZLzhbvT'
	var request = new XMLHttpRequest();
	request.open("POST", dis_hook);

	request.setRequestHeader('Content-type', 'application/json');

	var chat_params = {
	avatar_url: 'https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-transaction-icon-png-image_755654.jpg',
	username: 'Haxball Transaction Logs ',
	content: message
	};

	request.send(JSON.stringify(chat_params));
}



var bxh_webhook = 'https://discord.com/api/webhooks/1006842642576982066/7X4bBmXozEdnK9DrEXv_bMPMqFgwkQraxxnLOhWB6R5lM64BTuHBD9XN2qD7ONVyvV3f'


function sendBXH(message) {
	
	var dis_hook = 'https://discord.com/api/webhooks/1005040927452176395/A1EPnXTdmt-Uo7L_lLG3pXF5LBWtrMnPi2ida-BPJRaHwZYbGDzvFklDQ5aXlZLzhbvT'
	var request = new XMLHttpRequest();
	request.open("POST", dis_hook);

	request.setRequestHeader('Content-type', 'application/json');

	var chat_params = {
	avatar_url: 'https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-transaction-icon-png-image_755654.jpg',
	username: 'Haxball Transaction Logs ',
	content: message
	};

	request.send(JSON.stringify(chat_params));
}

// recvice custom data from nodejs server

let request = async () => {
    const response = await fetch('http://localhost:3003/api');
    const data = await response.json();
   
	
}

