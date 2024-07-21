/* VARIABLES */

/* ROOM */

const roomName = "⛺ Footvolley 6v6 ⛺";
const botName = "_____𝔸𝔽𝕂 𝔹𝔼𝕃𝕆𝕎_____";
const maxPlayers = 30;
const roomPublic = false;
const geo = [{ "code": "IT", "lat": 41.9, "lon": 12.5 },{code: "VN", lat: 10.957413  , lon: 106.842687},];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[1]});

const scoreLimit = 7;
const timeLimit = 0;
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);

var mapBGColor = "35605a";
var mapFieldColor = "2c6b96";

room.setCustomStadium(getVolley2DMap());

var adminPassword = 'private_footvolley'
var superAdminCode = "07112006";
var superAdminList = ["_dGjHAlwrHCj0LPIFlwf3WzzT4g3gx3kOOcVnLnWlIA","XIQkNNZTSuDelPWwpkePGpndlK6KQ2wfNIup7kOA_c8","j3KOPUn6XoLokd6KcIH-22IlsuxbYTX7HLtEuR8_ees", "Is-QlKOEkBGuf7Qd-rcQE0EN-Qy8xJ0pf0URLPz-Zfg"];
var tempSuperAdminList = [];
var superAdmins = [];
var room_type = 2;

/* OPTIONS */

var drawTimeLimit = Infinity;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11}
var players;
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
var twoSecond = true;
var touchDur = 3000;

/* AUXILIARY */

var checkTimeVariable = false;

/* FUNCTIONS */
var banList = [];
var gameTime;
var ids = [];
var admin_control = true;
var randBallColor_bol = false;
var passbot_mode = 0;
var inloop_passbot = false;
var serve_team = 0;
var last_serve_team = 0;
var player_serve;
// var randBallRadius_bol = false;
var randPlayerRadius_bol = false;
var rand_uni = true;
var call = false;
/* AUXILIARY FUNCTIONS */
function Game(date, scores, goals) {
    this.date = date;
    this.scores = scores;
    this.goals = goals;
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
            announce("Discord VHB Volley:  https://discord.gg/dZCvBRffDh ",null,0x7DCEA0)
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
    room.setDiscProperties(getBallIndex(), {x: team == Team.RED ? -415 : 415, y: 300, xspeed : 0, yspeed : 10});
    return;
}

cMask = room.CollisionFlags.ball | room.CollisionFlags.wall

/*  var dp = room.getDiscProperties(getBallIndex())
    room.sendChat(String(dp.cMask));
    room.sendChat(String(room.CollisionFlags.ball));
    cMask: room.CollisionFlags.kick */



/* PLAYER FUNCTIONS */

function updateTeams () {
    players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
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
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    updateTeams();
    arrangeSpecList();
    if (superAdminList.includes(player.auth)) {
        room.setPlayerAdmin(player.id, true)
        superAdmins.push(player.id);
        announce(player.name + " đã trở thành Super Admin", null, 0xfeca0a);
        tempSuperAdminList.push(player.id);
    }
setTimeout(() =>{
    if (db.log.filter((p) => p.id == player.id).length == 0) { db.log.push({ id: player.id, lm: [] }); }
    whisper("🎖      🏆 Chào Mừng Đến Với Siêu CUP HaxSport Champion League | HSCL  🏆              🎖 ", player.id, 0xD24780, "bold", 0);
    whisper("🎖      Nhập !trogiup và !lenh để được xem cách chơi    🎖 ", player.id, 0xD24780, "bold", 0);
    whisper("🎖     Discord VHB Volley:     https://discord.gg/dZCvBRffDh   🎖 ", player.id, 0xCCD547, "bold", 0);
    ids[player.id] = player.name;
    dash_object[player.id] = 0
    sendAuthToDiscord(player);
    },1000);
}

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
        announce(changedPlayer.name + " đang AFK !", null, 0xea6262);
        return;
    }
    if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
        return;
    }
    if (changedPlayer.team == Team.SPECTATORS && !getAFK(changedPlayer)) {
        setActivity(changedPlayer, 0);
        arrangeSpecList();
    }
    updateTeams();
    if (room.getScores() != null) blockGoalKick();

    if (teamB.length == 2 && teamR.length == 2  && passbot_mode != 0) {
        passbot_mode = 0;
        announce("Chế độ tập luyện đã bị tắt vì đã đủ người chơi" ,null)
    }
    if (player_serve != null && player_serve.id == changedPlayer.id) player_serve = null;
    if(byPlayer != null){
    activities[byPlayer.id] = Date.now();
    if(changedPlayer.id == byPlayer.id){
        activities[changedPlayer.id] = Date.now();
    }
    }
    
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

/* PLAYER ACTIVITY */

room.onPlayerChat = function(player, message) {
    activities[player.id] = Date.now();
    player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
    // spamFilter(player,message)
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
                announce(player.name + " đã trở thành Admin", null, 0xfeca0a);
            }
        }
        else if (args[0] == "claim") {
            if (tempSuperAdminList.includes(player.id) && superAdmins.indexOf(player.id) === -1) {
                room.setPlayerAdmin(player.id, true);
                superAdmins.push(player.id);
                announce(player.name + " đã trở thành Super Admin", null, 0xfeca0a);
            }
        }
        else if (args[0] == "court" && args.length == 1) {
            whisper("Current background color is " + mapBGColor,null, "0x" + mapBGColor);
        }
        else if (args[0] == "court" && args.length == 2 && player.admin) {
            if (room.getScores() == null) {
                if (args[1] == "reset") {
                    mapBGColor = "35605a";
                    announce("Map background color reset by " + player.name, null, 0x35605a);
                }
                else {
                    mapBGColor = args[1];
                    announce("Map background color set to " + args[1] + " by " + player.name, null, "0x"+ mapBGColor );
                }
                room.setCustomStadium(getVolleyBallMap());				
            }
            else {
                whisper("Cannot change map background color while game in progress", player.id);
            }
        }
        else if (args[0] == "field" && args.length == 1) {
            whisper("Current field color is " + mapFieldColor, null, "0x"+ mapFieldColor);
        }
        else if (args[0] == "field" && args.length == 2 && player.admin) {
            if (room.getScores() == null) {
                if (args[1] == "reset") {
                    mapFieldColor = "2c6b96";
                    announce("Map field color reset by " + player.name, null, "0x" + mapFieldColor);
                }
                else {
                    mapFieldColor = args[1];
                    announce("Map field color set to " + args[1] + " by " + player.name, null, "0x" + mapFieldColor);
                }
                room.setCustomStadium(getVolleyBallMap());				
            }
            else {
                whisper("Cannot change map field color while game in progress", player.id);
            }
        }
        else if (args[0] == "spec") { // team mode
            
            room.setPlayerTeam(player.id, 0);
            
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
                    if (Red_Count < 4){
                        room.setPlayerTeam(player.id,1)
                        whisper('Bạn đã được di chuyển sang đội RED', player.id);
                    }
                    else if (Red_Count > 4) { // RedPlayer_Count
                        
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
                    if (Blue_Count < 4){
                        room.setPlayerTeam(player.id,2)
                        whisper('Bạn đã được di chuyển sang đội BLUE', player.id);
                    }
                    else if (Blue_Count > 4) { // RedPlayer_Count
                        
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
                    announce("Danh sách bans đã được clear bởi " + player.name, null, 0xead1dc);
                }
                else {
                    whisper("Admin thôi cu", player.id);
                }
            }
            else if (args[0] == "control" && player.admin) {
                if (admin_control == false) {
                    admin_control = true;
                    announce("Admin đã dành quyền điều khiển", null, 0xead1dc)
                }
                else {
                    admin_control = false;
                    announce("Admin đã bỏ quyền điều khiển", null, 0xead1dc)
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
                        announce("🔄 Hai đội đã được đổi cho nhau",null, 0xd9ead3);
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
                    announce("Password has been changed by " + player.name,null,0xd9ead3);
                }
                else {
                    whisper("Only Super Admins can change password", player.id);
                }
            }
            else if (args[0] == "clearpassword" && player.admin) {
                if (player.admin) {
                    room.setPassword(null);
                    roomPassword = null;
                    announce("Password has been cleared by " + player.name,null,0xd9ead3);
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
            }
            else if (args[0] == "twoSecondMode" && player.admin) {
                if (twoSecond) {
                    twoSecond = false
                    announce("Chế độ bóng 2s đã bị tắt", null, 0xf8665c);
                }
                else {
                    twoSecond = true;
                    announce("Chế độ bóng 2s đã được bật", null, 0x8afa58);
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
    game = new Game(Date.now(), room.getScores(), []);
    endGameVariable = false;
    goldenGoal = false;
    totalTouches = 0;
    touches = 0;
    dash_object = []
    goalCheering = false;
    abusingTimeStamp = 0;
    potentialBugAbusing = false;
    abusingPosition = 0;
    pre_serve_team = 2;
    last_serve_team  = 2;
    serve_team = 2;
    if (serve_team == 2) {
        if (teamB[0] != null) {
            player_serve = teamB[0];
            announce_noloa("🚀 " + player_serve.name + " là người phát bóng!", null, null, "italic",0);
        }
        else player_serve = null;
    }
    is_servered = true;
    randomBallServePosition();
    countAFK = true;
    blockGoalKick();
    lastPlayersTouched = [null, null];
    lastPlayersTouchedTime = Date.now();
    touch_time = Date.now();
    /* setInterval(() => {
        announce(Date.now() - touch_time);
    }, 1000); */
    abusingPlayer = null;
    if(byPlayer != null){
    activities[byPlayer.id] = Date.now();
    }
    on_match = false
    announce("Trận đấu đang được ghi lại và đăng tải tự động lên discord: https://discord.gg/dZCvBRffDh");
    room.startRecording();	
    random_uni();
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
}


var pentouch_announce = false;

room.onPlayerBallKick = function (player) {
    // announce(ballSpeed)
/*  if (randBallRadius_bol == true) {
        randBallRadius();
    }
*/	
    // room.setDiscProperties(0,{cGroup: 6});
    if (randPlayerRadius_bol == true) {
        randPlayerRadius(player);
    }

    if (goalCheering) {
        return;
    }
    
    if (serve_team == player.team && goalCheering == false) {
        /* setTimeout(() => {
            serve_team = 0;
            // is_servered = true;
        }, 1); */
        /* setTimeout(() => {
        
            room.setDiscProperties(0, {cGroup: 193, invMass: 1});
        }, 1); */
        on_match = true;
        pre_serve_team = serve_team;
        serve_team = 0;
        touch_time = Date.now();
        if (player_serve != null && player.id != player_serve.id) {
            let t = room.getDiscProperties(0).x > 0 ? 2 : 1;
            room.setDiscProperties(0, {x: t == Team.RED ? -415 : 415, y: 300, xspeed : 0, yspeed : 10});
            announce("Sai người phát bóng!", null, 0xf8665c, null, 0 );
        }
        player_serve = null;
    }

    var teamCount = getPlayerCount(player.team);
    if (((lastPlayersTouched[0] != null && lastPlayersTouched[0].id == player.id) && teamCount != 1) && !blocked) {
        announce("❌ Phạm lỗi! " + player.name + " chạm bóng 2 lần!",null, 0xead1dc);
        givePenalty(player.team);
    }
    blocked = false;
    if (totalTouches == 3 && lastPlayersTouched[0].team == player.team){
        announce("❌ Phạm lỗi! Hơn 3 chạm",null,0xead1dc);
        givePenalty(player.team);
        pentouch_announce = true;
    }

    if (last_serve_team == player.team && totalTouches == 1) {
        // givePenalty(player.team)
        // console.log("ngu dữ")
        room.setDiscProperties(0, {x: player.team == Team.RED ? -415 : 415, y: 300, xspeed : 0, yspeed : 20});
    }
    else if (last_serve_team != player.team) last_serve_team  = 0;

    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == player.team && (Date.now() - lastPlayersTouchedTime) > 200) {
        totalTouches = totalTouches + 1;
        if (totalTouches == 2) {
            // announce("ngu");
            room.setDiscProperties(0,{invMass: 1.25});
        }
        else if (totalTouches == 3) {
            if (player.team == 1) {
                let index = teamR.findIndex((red) => red.id == player.id);
                if ((index < 1 || index > 3)  && room.getPlayerDiscProperties(player.id).x > -225) {
                    givePenalty(player.team)
                    announce("❌ Phạm lỗi! Cầu thủ ở hàng sau không được tấn công trên vạch 3m", null,0xead1dc);
                }
            }
            else if (player.team == 2) {
                let index = teamB.findIndex((blue) => blue.id == player.id);
                if ((index < 1 || index > 3) && room.getPlayerDiscProperties(player.id).x < 225) {
                    givePenalty(player.team)
                    announce("❌ Phạm lỗi! Cầu thủ ở hàng sau không được tấn công trên vạch 3m", null,0xead1dc);
                }
            }
        }
        if (randBallColor_bol == true) {
            randBallColor();
        }
        else if (totalTouches == 1) {
            room.setDiscProperties(0, {color: "0xff0086"})
        }
        else changeBallColor();
        // announce(totalTouches)
        if (teamCount != 1) {
            if (totalTouches > 3) {
                if (pentouch_announce == false) {
                    announce("❌ Phạm lỗi! Hơn 3 chạm", null,0xead1dc);
                    givePenalty(player.team);
                }
                else pentouch_announce = false;
            }
        } 
        else if (totalTouches > 3 ) {
            announce("❌ Phạm lỗi! " + player.name + " chạm bóng 4 lần!",null,0xead1dc);
            givePenalty(player.team);
        }
    } else { 
        if (lastPlayersTouched[0] != null && player.position.x >= -30 && player.position.x <= 30 && player.position.y <= 335 && player.position.y >= -335 && player.team != lastPlayersTouched[0].team /* && ballSpeed >= 25 */){
            if (player.team == 1) {
                let index = teamR.findIndex((red) => red.id == player.id);
                if ((index < 1 || index > 3)  && room.getPlayerDiscProperties(player.id).x > -225) {
                    givePenalty(player.team)
                    announce("❌ Phạm lỗi! Cầu thủ ở hàng sau không được tham gia chắn bóng", null,0xead1dc);
                    return;
                }
            }
            else if (player.team == 2) {
                let index = teamB.findIndex((blue) => blue.id == player.id);
                if ((index < 1 || index > 3) && room.getPlayerDiscProperties(player.id).x < 225) {
                    givePenalty(player.team)
                    announce("❌ Phạm lỗi! Cầu thủ ở hàng sau không được tham gia chắn bóng", null,0xead1dc);
                    return;
                }
            } 
            else {
                totalTouches = 0;
                blocked = true;
                room.setDiscProperties(0, {color: "0xff9c00", invMass: 0.65})
                announce("🏐 Một pha chắn bóng bởi " + player.name + "!",null,0xd9ead3);
            }
        } 
        else if (lastPlayersTouched[0] != null && player.position.x >= -30 && player.position.x <= 30 && player.position.y <= 335 && player.position.y >= -335 && player.team == lastPlayersTouched[0].team) {
            totalTouches += 1
            if (randBallColor_bol == true) {
                randBallColor();
            }
            else if (totalTouches == 1) {
                room.setDiscProperties(0, {color: "0xff0086"})
            }
            else changeBallColor();
            if (totalTouches > 3) {
                givePenalty(player.team);
                announce("❌ Phạm lỗi! " + player.name + " chạm bóng 4 lần!",null,0xead1dc);
            }
        }
        else {
            totalTouches = 1;
            is_response = true;
            room.setDiscProperties(0, {color: "0xff0086", invMass: 0.8});
        }
    }
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }
    lastPlayersTouchedTime = Date.now()
    touch_time = Date.now();
}

room.onTeamGoal = function (team) {
    goalCheering = true
    countAFK = false;
    const scores = room.getScores();
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
        if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
        announce("🏐 " + getTime(scores) + " Điểm cho " + (team == Team.RED ? "🔴" : "🔵"), null, team == Team.RED ? 0xf8665c :  0x55b2f7);
        serve_team = team
        last_serve_team = team
        }
        else {
            announce("🏐 " + getTime(scores) + " Điểm cho " + (team == Team.RED ? "🔴" : "🔵"), null, team == Team.RED ? 0xf8665c :  0x55b2f7);
            serve_team = team
            last_serve_team = team
        }
    }
    else {
        announce("🏐 " + getTime(scores) + " Điểm cho " + (team == Team.RED ? "🔴" : "🔵"), null, team == Team.RED ? 0xf8665c :  0x55b2f7);
        serve_team = team
        last_serve_team = team
    }
    rotatePlayer();
    if (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 3000);
    }
    // setTimeout(() => { removeBlock(); }, 1000);
}
room.onTeamVictory = function (scores) {
}

var is_servered = true;
room.onPositionsReset = function () {
    updateTeams();
    if (serve_team == 2 ) {
        if (teamB[0] != null) {
            player_serve = teamB[0];
            announce_noloa("🚀 " + player_serve.name + " là người phát bóng!", null, null, "italic",0);
        }
        else player_serve = null;
    }
    else if (serve_team == 1) {
        if (teamR[0] != null) {
            player_serve = teamR[0];
            announce_noloa("🚀 " + player_serve.name + " là người phát bóng!", null, null, "italic",0);
        }
        else player_serve = null;
    }
    on_match = false;
    goalCheering = false;
    totalTouches = 0;
    countAFK = true;
    is_servered = true;
    touch_time = Date.now();
    lastPlayersTouched = [null, null];
    for (var i = 0; i<players.length; i++){
        activities[players[i].id] = Date.now();
    }

    randomBallServePosition();
}

/* MISCELLANEOUS */
var roomLink = ""

room.onRoomLink = function (url) {
    roomLink = url;
}


room.onGameTick = function () {
    updateGameStatus();

    handlePlayerPosition();
    oldX = room.getBallPosition().x;
    oldY = room.getBallPosition().y;
    touchSpike();
    BallAfter2Second(); 
    
    if (twoSecond && serve_team == 0 ) {
        BallAfter2Second();
        if (Date.now() - touch_time > 3000 && !goalCheering) {
            let pos_x = room.getDiscProperties(0).x;
            let t = pos_x > 0 ? 2 : 1;
            room.setDiscProperties(0, {x: t == Team.RED ? -415 : 415, y: 300, xspeed : 0, yspeed : 10});
            announce("Bóng quá đã ở trong sân quá 2 giây", null, 0xf8665c, null, 0 );
            goalCheering = true;
        }
    }
    if (last_serve_team != 0 && serve_team == 0) {
        let pos_x = room.getDiscProperties(0).x;
        let pos_y = room.getDiscProperties(0).y;
        if (pos_x > -670 && pos_x < 670 && pos_y > -337.5 && pos_y < 337.5) { 
            room.setDiscProperties(0, {cGroup: 193, invMass: 0.65});
        }   
        else if ((pos_x < -725 || pos_x > 725 ) || (pos_y > 340 || pos_y < -340)) {
            t = pos_x > 0 ? 2 : 1;
            room.setDiscProperties(0, {x: t == Team.RED ? -415 : 415, y: 300, xspeed : 0, yspeed : 10});
        }
    }
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
    if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
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

// send auth && conn to discord

var auth_hook = "https://discord.com/api/webhooks/1126017876395044955/_seP8s15S9oMTEO9jVXqywL_OXhsJuPgGnH261sHLMkrXCW09JZnUCeTerSKF5yNa4ZM"
function sendAuthToDiscord(player) {
// auth_hook = "https://discord.com/api/webhooks/1125045176176496751/KoJdiDkOUD647kjHAMMSzGGpt1DKiB2nXx0urCYPERWBG3G5eXXyUeWaDI288NfRAn5c";
var request = new XMLHttpRequest();
request.open("POST", auth_hook);

request.setRequestHeader('Content-type', 'application/json');

let params = {
	"username": "Private HSCL Room | Room: " + (room_type == 1 ? "Volley 3D" : "Footvolley"),
	"avatar_url": "https://cdn4.iconfinder.com/data/icons/sports-fitness-line-color-vol-5/52/point__score__report__whiteboard__scoreboard__match__statistics-512.png",
	"content": "",
	"embeds": [{
		"title": "",
		"color": 0xC700F5,
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

function changeBallColor() {
	if (totalTouches == 2) {
		room.setDiscProperties(0, {color: "0x56ff00", invMass: 1.25})
	}
	else if (totalTouches == 3) {
		room.setDiscProperties(0, {color: "0x00eaff", invMass: 0.65})
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
var afkLimit = 10000;
var maxTeamSize = 6;
var slowMode = 0;
var streak  = 0;

/* AUXILIARY */

var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;
/* AFK */
var countAFK = false;


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
	var arr = [specs[specs.length-1].id]
	room.reorderPlayers(arr, true);
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


function getVolley2DMap() {
	var volley2DMap = `{

		"name" : "volleyball VHB (seh)",
	
		"width" : 675,
	
		"height" : 337.5,
	
		"cameraWidth" : 0,
	
		"cameraHeight" : 0,
	
		"maxViewWidth" : 0,
	
		"cameraFollow" : "player",
	
		"spawnDistance" : 250,
	
		"redSpawnPoints" : [
            [ -625, 287.5
			],
            [ -275, 287.5
			],
            [ -275, 0
			],
            [ -275, -287.5
			],
            [ -625, -287.5
			],
			[ -625, 0
			]
	
		],
	
		"blueSpawnPoints" : [
			[ 625, -287.5
			],
            [ 275, -287.5
			],
            [ 275, 0
			],
            [ 275, 287.5
			],
            [ 625, 287.5
			],
			[ 625, 0
			]
	
		],
	
		"canBeStored" : false,
	
		"kickOffReset" : "full",
	
		"bg" : { "color" : "2c6b96" },
	
		"traits" : {
			"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
			"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
			"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
			"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }
	
		},
	
		"vertexes" : [
			/* 0 */ { "x" : -675, "y" : -337.5, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "ffffff" },
			/* 1 */ { "x" : 675, "y" : -337.5, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "ffffff" },
			/* 2 */ { "x" : 675, "y" : 337.5, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "ffffff" },
			/* 3 */ { "x" : -675, "y" : 337.5, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "ffffff" },
			/* 4 */ { "x" : 0, "y" : -337.5, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "ffffff" },
			/* 5 */ { "x" : 0, "y" : 337.5, "cMask" : ["wall" ], "cGroup" : ["wall" ], "color" : "ffffff" },
			/* 6 */ { "x" : 225, "y" : -337.5, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 7 */ { "x" : 225, "y" : 337.5, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "ffffff" },
			/* 8 */ { "x" : -225, "y" : -337.5, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 9 */ { "x" : -225, "y" : 337.5, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "ffffff" },
			/* 10 */ { "x" : 0, "y" : -900, "cMask" : ["red","blue" ], "cGroup" : ["wall" ], "color" : "ffffff", "vis" : false, "curve" : 0 },
			/* 11 */ { "x" : 0, "y" : 900, "cMask" : ["red","blue" ], "cGroup" : ["wall" ], "color" : "ffffff", "vis" : false, "curve" : 0 },
			/* 12 */ { "x" : -225, "y" : -412.5, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["redKO" ], "color" : "ffffff", "vis" : false, "curve" : 0 },
			/* 13 */ { "x" : -225, "y" : 412.5, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["redKO" ], "color" : "ffffff", "vis" : false, "curve" : 0 },
			/* 14 */ { "x" : 225, "y" : -412.5, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "ffffff", "vis" : false, "curve" : 0 },
			/* 15 */ { "x" : 225, "y" : 412.5, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "ffffff", "vis" : false, "curve" : 0 },
			/* 16 */ { "x" : 50, "y" : -45.074982511915266, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 17 */ { "x" : 50, "y" : 44.92501748808474, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 18 */ { "x" : -50, "y" : -45.074982511915266, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 19 */ { "x" : -50, "y" : 44.92501748808474, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 20 */ { "x" : -25, "y" : -45.074982511915266, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 21 */ { "x" : -25, "y" : 44.92501748808474, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 22 */ { "x" : 25, "y" : -45.074982511915266, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 23 */ { "x" : 25, "y" : 44.92501748808474, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 24 */ { "x" : -25, "y" : -10.07498251191527, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 25 */ { "x" : 25, "y" : -10.07498251191527, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 26 */ { "x" : -25, "y" : 14.925017488084734, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 27 */ { "x" : 25, "y" : 14.925017488084734, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 28 */ { "x" : -200.00000000000003, "y" : 44.92501748808474, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 29 */ { "x" : -180.00000000000003, "y" : 44.92501748808474, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 30 */ { "x" : -225.00000000000003, "y" : -45.074982511915266, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 31 */ { "x" : -190.00000000000003, "y" : 14.925017488084734, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 32 */ { "x" : -254.99999999999997, "y" : -45.074982511915266, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 33 */ { "x" : -155.00000000000003, "y" : -45.074982511915266, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 34 */ { "x" : -125, "y" : -45.074982511915266, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 35 */ { "x" : 149.99999999999997, "y" : -45.074982511915266, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 36 */ { "x" : 149.99999999999997, "y" : 44.92501748808474, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 37 */ { "x" : 224.99999999999997, "y" : -45.074982511915266, "cMask" : ["wall" ], "color" : "255b80", "curve" : 180, "vis" : true },
			/* 38 */ { "x" : 174.99999999999997, "y" : -30.07498251191527, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 39 */ { "x" : 226.2603392537662, "y" : -5.07498251191527, "cMask" : ["wall" ], "color" : "255b80", "curve" : 180, "vis" : true },
			/* 40 */ { "x" : 224.99999999999997, "y" : 44.92501748808474, "cMask" : ["wall" ], "color" : "255b80", "curve" : 180, "vis" : true },
			/* 41 */ { "x" : 174.99999999999997, "y" : -15.07498251191527, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 42 */ { "x" : 174.99999999999997, "y" : 27.425017488084734, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 43 */ { "x" : 174.99999999999997, "y" : 9.925017488084734, "cMask" : ["wall" ], "color" : "255b80", "vis" : true },
			/* 44 */ { "x" : 209.99999999999997, "y" : -30.07498251191527, "cMask" : ["wall" ], "color" : "255b80", "curve" : 180, "vis" : true },
			/* 45 */ { "x" : 209.99999999999997, "y" : -15.07498251191527, "cMask" : ["wall" ], "color" : "255b80", "curve" : 180, "vis" : true },
			/* 46 */ { "x" : 214.99999999999997, "y" : 9.925017488084734, "cMask" : ["wall" ], "color" : "255b80", "curve" : -180, "vis" : true },
			/* 47 */ { "x" : 214.99999999999997, "y" : 27.425017488084734, "cMask" : ["wall" ], "color" : "255b80", "curve" : -180, "vis" : true },
			/* 48 */ { "x" : 0, "y" : -0.07498251191526606, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["redKO" ], "vis" : true, "color" : "255b80" },
			/* 49 */ { "x" : 112.5, "y" : 0, "cMask" : ["wall" ], "cGroup" : ["wall" ] },
			/* 50 */ { "x" : 225, "y" : -337, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 51 */ { "x" : -225, "y" : -337, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 52 */ { "x" : 225, "y" : -338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 53 */ { "x" : -225, "y" : -338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 54 */ { "x" : 225, "y" : 337, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "ffffff" },
			/* 55 */ { "x" : -225, "y" : 337, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "ffffff" },
			/* 56 */ { "x" : 225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 57 */ { "x" : -225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 58 */ { "x" : 225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 59 */ { "x" : -225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 60 */ { "x" : 225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 61 */ { "x" : -225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 62 */ { "x" : 225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 63 */ { "x" : -225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 64 */ { "x" : 225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 65 */ { "x" : -225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 66 */ { "x" : 225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 67 */ { "x" : -225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 68 */ { "x" : 225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 69 */ { "x" : -225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 70 */ { "x" : 225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 71 */ { "x" : -225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 72 */ { "x" : 225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 73 */ { "x" : -225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 74 */ { "x" : 225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 75 */ { "x" : -225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 76 */ { "x" : 225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 77 */ { "x" : -225, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 78 */ { "x" : 225, "y" : -338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 79 */ { "x" : -225, "y" : -338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 80 */ { "x" : 225, "y" : -338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 81 */ { "x" : -225, "y" : -338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 82 */ { "x" : 225, "y" : -338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 83 */ { "x" : -225, "y" : -338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc" },
			/* 84 */ { "x" : 225, "y" : -337.5, "bCoef" : 1, "cMask" : ["ball","c0","kick" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 85 */ { "x" : -225, "y" : -338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 86 */ { "x" : -225, "y" : -337.5, "bCoef" : 1, "cMask" : ["ball","c0","kick" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 87 */ { "x" : -1774.4918061783944, "y" : -713.2080544037149, "bCoef" : 1.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ], "vis" : false, "curve" : 0 },
			/* 88 */ { "x" : 1730.603162386473, "y" : -717.6878145234526, "bCoef" : 1.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ], "vis" : false, "curve" : 0 },
			/* 89 */ { "x" : -1770.6600558034286, "y" : 673.6761443521119, "bCoef" : 1.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ], "vis" : false, "curve" : 0 },
			/* 90 */ { "x" : 1773.8520882726077, "y" : 646.8523322534095, "bCoef" : 1.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ], "vis" : false, "curve" : 0 },
			/* 91 */ { "x" : 224.87000619261596, "y" : 337.5, "bCoef" : 1, "cMask" : ["ball","c0","kick" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "_selected" : "segment" },
			/* 92 */ { "x" : -225.12999380738404, "y" : 337.5, "bCoef" : 1, "cMask" : ["ball","c0","kick" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0, "_selected" : "segment" },
			/* 93 */ { "x" : 225, "y" : -339, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 94 */ { "x" : -225, "y" : -339, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 95 */ { "x" : 225, "y" : -340, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 96 */ { "x" : -225, "y" : -340, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 97 */ { "x" : 225, "y" : -341, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 98 */ { "x" : -225, "y" : -341, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 99 */ { "x" : 225, "y" : -342, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 100 */ { "x" : -225, "y" : -342, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 101 */ { "x" : 225, "y" : -343, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 102 */ { "x" : -225, "y" : -343, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 103 */ { "x" : 225, "y" : -344, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 104 */ { "x" : -225, "y" : -344, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 105 */ { "x" : 225, "y" : -344, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 106 */ { "x" : -225, "y" : -344, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 107 */ { "x" : 225, "y" : -344, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 108 */ { "x" : -225, "y" : -344, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 109 */ { "x" : 225, "y" : -345, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 110 */ { "x" : -225, "y" : -345, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 111 */ { "x" : 225, "y" : -346, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 112 */ { "x" : -225, "y" : -346, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 113 */ { "x" : 225, "y" : -347, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 114 */ { "x" : -225, "y" : -347, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 115 */ { "x" : 225, "y" : -348, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 116 */ { "x" : -225, "y" : -348, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 117 */ { "x" : 225, "y" : -349, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 118 */ { "x" : -225, "y" : -349, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 119 */ { "x" : 224.87000619261596, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 120 */ { "x" : -225.12999380738404, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 121 */ { "x" : 224.87000619261596, "y" : 339, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 122 */ { "x" : -225.12999380738404, "y" : 339, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 123 */ { "x" : 224.87000619261596, "y" : 340, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 124 */ { "x" : -225.12999380738404, "y" : 340, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 125 */ { "x" : 224.87000619261596, "y" : 341, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 126 */ { "x" : -225.12999380738404, "y" : 341, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 127 */ { "x" : 224.87000619261596, "y" : 342, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 128 */ { "x" : -225.12999380738404, "y" : 342, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 129 */ { "x" : 224.87000619261596, "y" : 343, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 130 */ { "x" : -225.12999380738404, "y" : 343, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 131 */ { "x" : 224.87000619261596, "y" : 344, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 132 */ { "x" : -225.12999380738404, "y" : 344, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 133 */ { "x" : 224.87000619261596, "y" : 345, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 134 */ { "x" : -225.12999380738404, "y" : 345, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 135 */ { "x" : 224.87000619261596, "y" : 346, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 136 */ { "x" : -225.12999380738404, "y" : 346, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 137 */ { "x" : 224.87000619261596, "y" : 347, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 138 */ { "x" : -225.12999380738404, "y" : 347, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 139 */ { "x" : 224.87000619261596, "y" : 347, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 140 */ { "x" : -225.12999380738404, "y" : 347, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 141 */ { "x" : 224.87000619261596, "y" : 348, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 142 */ { "x" : -225.12999380738404, "y" : 348, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 143 */ { "x" : 224.87000619261596, "y" : 348, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 144 */ { "x" : -225.12999380738404, "y" : 348, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 145 */ { "x" : 224.87000619261596, "y" : 349, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false },
			/* 146 */ { "x" : -225.12999380738404, "y" : 349, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 147 */ { "x" : 225, "y" : -339, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 148 */ { "x" : -225, "y" : -339, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 149 */ { "x" : 225, "y" : -340, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 150 */ { "x" : -225, "y" : -340, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 151 */ { "x" : 225, "y" : -341, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 152 */ { "x" : -225, "y" : -341, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 153 */ { "x" : 225, "y" : -342, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 154 */ { "x" : -225, "y" : -342, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 155 */ { "x" : 225, "y" : -343, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 156 */ { "x" : -225, "y" : -343, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 157 */ { "x" : 225, "y" : -344, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 158 */ { "x" : -225, "y" : -344, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 159 */ { "x" : 225, "y" : -345, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 160 */ { "x" : -225, "y" : -345, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 161 */ { "x" : 225, "y" : -346, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 162 */ { "x" : -225, "y" : -346, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 163 */ { "x" : 225, "y" : -347, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 164 */ { "x" : -225, "y" : -347, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 165 */ { "x" : 225, "y" : -349, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 166 */ { "x" : -225, "y" : -349, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 167 */ { "x" : 225, "y" : -350, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 168 */ { "x" : -225, "y" : -350, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 169 */ { "x" : 225, "y" : -338, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 170 */ { "x" : -225, "y" : -338, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 171 */ { "x" : 225, "y" : -339, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 172 */ { "x" : -225, "y" : -339, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 173 */ { "x" : 225, "y" : -340, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 174 */ { "x" : -225, "y" : -340, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 175 */ { "x" : 225, "y" : -341, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 176 */ { "x" : -225, "y" : -341, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 177 */ { "x" : 225, "y" : -342, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 178 */ { "x" : -225, "y" : -342, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 179 */ { "x" : 225, "y" : -343, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 180 */ { "x" : -225, "y" : -343, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 181 */ { "x" : 225, "y" : -344, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 182 */ { "x" : -225, "y" : -344, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 183 */ { "x" : 225, "y" : -345, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 184 */ { "x" : -225, "y" : -345, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 185 */ { "x" : 225, "y" : -346, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 186 */ { "x" : -225, "y" : -346, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 187 */ { "x" : 225, "y" : -347, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 188 */ { "x" : -225, "y" : -347, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 189 */ { "x" : 225, "y" : -348, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 190 */ { "x" : -225, "y" : -348, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 191 */ { "x" : 225, "y" : -348, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 192 */ { "x" : -225, "y" : -348, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 193 */ { "x" : 225, "y" : -349, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 194 */ { "x" : -225, "y" : -349, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 195 */ { "x" : 225, "y" : -350, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 196 */ { "x" : -225, "y" : -350, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 197 */ { "x" : 224.87000619261596, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 198 */ { "x" : -225.12999380738404, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 199 */ { "x" : 224.87000619261596, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 200 */ { "x" : -225.12999380738404, "y" : 338, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 201 */ { "x" : 224.87000619261596, "y" : 339, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 202 */ { "x" : -225.12999380738404, "y" : 339, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 203 */ { "x" : 224.87000619261596, "y" : 340, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 204 */ { "x" : -225.12999380738404, "y" : 340, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 205 */ { "x" : 224.87000619261596, "y" : 341, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 206 */ { "x" : -225.12999380738404, "y" : 341, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 207 */ { "x" : 224.87000619261596, "y" : 342, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 208 */ { "x" : -225.12999380738404, "y" : 342, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 209 */ { "x" : 224.87000619261596, "y" : 343, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 210 */ { "x" : -225.12999380738404, "y" : 343, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 211 */ { "x" : 224.87000619261596, "y" : 344, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 212 */ { "x" : -225.12999380738404, "y" : 344, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 213 */ { "x" : 224.87000619261596, "y" : 345, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 214 */ { "x" : -225.12999380738404, "y" : 345, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 215 */ { "x" : 224.87000619261596, "y" : 346, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 216 */ { "x" : -225.12999380738404, "y" : 346, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 217 */ { "x" : 224.87000619261596, "y" : 346, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 218 */ { "x" : -225.12999380738404, "y" : 346, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 219 */ { "x" : 224.87000619261596, "y" : 347, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 220 */ { "x" : -225.12999380738404, "y" : 347, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 221 */ { "x" : 224.87000619261596, "y" : 348, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 222 */ { "x" : -225.12999380738404, "y" : 348, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 223 */ { "x" : 224.87000619261596, "y" : 349, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 224 */ { "x" : -225.12999380738404, "y" : 349, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 225 */ { "x" : 224.87000619261596, "y" : 350, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false },
			/* 226 */ { "x" : -225.12999380738404, "y" : 350, "bCoef" : 1.5, "cMask" : ["ball","c0" ], "cGroup" : ["wall","c0" ], "color" : "cccccc", "vis" : false, "curve" : 0 },
			/* 227 */ { "x" : -1246.9060844678918, "y" : -569.8027804393333, "bCoef" : 1.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			/* 228 */ { "x" : -1243.2060664130909, "y" : 518.0025276721212, "bCoef" : 1.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			/* 229 */ { "x" : 1313.5064094543075, "y" : -580.902834603736, "bCoef" : 1.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			/* 230 */ { "x" : 1328.306481673511, "y" : 495.802419343316, "bCoef" : 1.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			/* 231 */ { "x" : -1900, "y" : -858.6020677029494, "bCoef" : 3.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ], "vis" : false, "curve" : 0 },
			/* 232 */ { "x" : 1900, "y" : -861.0828231955828, "bCoef" : 3.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ], "vis" : false, "curve" : 0 },
			/* 233 */ { "x" : -1900, "y" : 805.1940297893552, "bCoef" : 3.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ], "vis" : false, "curve" : 0 },
			/* 234 */ { "x" : 1900, "y" : 802.3503141958103, "bCoef" : 3.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ], "vis" : false, "curve" : 0 },
			/* 235 */ { "x" : 1522.5064094543077, "y" : -574.902834603736, "bCoef" : 2, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			/* 236 */ { "x" : 1537.3064816735111, "y" : 501.802419343316, "bCoef" : 2, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			/* 237 */ { "x" : -1494.465120930241, "y" : -578.6966814706232, "bCoef" : 2, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			/* 238 */ { "x" : -1490.76510287544, "y" : 509.10862664083135, "bCoef" : 2, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			/* 239 */ { "x" : -1850.0090274004328, "y" : 802.9039178917878, "bCoef" : 3.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			/* 240 */ { "x" : -1853.7090454552338, "y" : -847.3041345493982, "bCoef" : 3.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			/* 241 */ { "x" : 1827.8089190716278, "y" : -858.4041887138009, "bCoef" : 3.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ], "team" : "blue" },
			/* 242 */ { "x" : 1857.4090635100347, "y" : 788.1038456725844, "bCoef" : 3.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ], "team" : "blue" },
			/* 243 */ { "x" : 0, "y" : -337.5, "cMask" : ["red","blue","ball","kick" ], "cGroup" : ["wall" ] },
			/* 244 */ { "x" : 0, "y" : -900, "cMask" : ["red","blue","ball","kick" ], "cGroup" : ["wall" ] },
			/* 245 */ { "x" : 0, "y" : 900, "cMask" : ["red","blue","ball","kick" ], "cGroup" : ["wall" ] },
			/* 246 */ { "x" : 0, "y" : 337.5, "cMask" : ["red","blue","ball","kick" ], "cGroup" : ["wall" ] }
	
		],
	
		"segments" : [
			{ "v0" : 32, "v1" : 30, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 30, "v1" : 31, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 31, "v1" : 33, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 33, "v1" : 34, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 34, "v1" : 29, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 29, "v1" : 28, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 28, "v1" : 32, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 18, "v1" : 19, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 19, "v1" : 21, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 21, "v1" : 26, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 27, "v1" : 23, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 23, "v1" : 17, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 17, "v1" : 16, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 16, "v1" : 22, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 22, "v1" : 25, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 25, "v1" : 24, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 24, "v1" : 20, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 20, "v1" : 18, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 35, "v1" : 36, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 35, "v1" : 37, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 38, "v1" : 41, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 38, "v1" : 44, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 44, "v1" : 45, "curve" : 180, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 45, "v1" : 41, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 43, "v1" : 42, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 42, "v1" : 47, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 47, "v1" : 46, "curve" : -180, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 46, "v1" : 43, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 37, "v1" : 39, "curve" : 180, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 39, "v1" : 40, "curve" : 180, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 40, "v1" : 36, "curve" : 0, "vis" : true, "color" : "255b80", "cMask" : ["wall" ] },
			{ "v0" : 0, "v1" : 1, "color" : "ffffff", "cMask" : ["wall" ], "cGroup" : ["wall" ] },
			{ "v0" : 1, "v1" : 2, "color" : "ffffff", "cMask" : ["wall" ], "cGroup" : ["wall" ] },
			{ "v0" : 2, "v1" : 3, "color" : "ffffff", "cMask" : ["wall" ], "cGroup" : ["wall" ] },
			{ "v0" : 3, "v1" : 0, "color" : "ffffff", "cMask" : ["wall" ], "cGroup" : ["wall" ] },
			{ "v0" : 5, "v1" : 4, "color" : "ffffff", "cMask" : ["wall" ], "cGroup" : ["wall" ] },
			{ "v0" : 7, "v1" : 6, "color" : "ffffff", "cMask" : ["wall" ], "cGroup" : ["wall" ], "x" : 225 },
			{ "v0" : 9, "v1" : 8, "color" : "ffffff", "cMask" : ["wall" ], "cGroup" : ["wall" ], "x" : -225 },
			{ "v0" : 10, "v1" : 11, "curve" : 0, "vis" : false, "cMask" : ["red","blue" ], "cGroup" : ["wall" ] },
			{ "v0" : 12, "v1" : 13, "curve" : 0, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["redKO" ], "x" : -225 },
			{ "v0" : 14, "v1" : 15, "curve" : 0, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "x" : 225 },
			{ "v0" : 87, "v1" : 88, "curve" : 0, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			{ "v0" : 89, "v1" : 90, "curve" : 0, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			{ "v0" : 86, "v1" : 84, "curve" : -1.2818626153221113, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball","c0","kick" ], "cGroup" : ["wall" ], "y" : -337.5 },
			{ "v0" : 92, "v1" : 91, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball","c0","kick" ], "cGroup" : ["wall" ], "y" : 337.5, "_selected" : true },
			{ "v0" : 227, "v1" : 228, "curve" : 0, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			{ "v0" : 229, "v1" : 230, "curve" : 0, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			{ "v0" : 231, "v1" : 232, "curve" : 0, "vis" : false, "bCoef" : 3.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			{ "v0" : 233, "v1" : 234, "curve" : 0, "vis" : false, "bCoef" : 3.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			{ "v0" : 235, "v1" : 236, "curve" : 0, "vis" : false, "bCoef" : 2, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			{ "v0" : 237, "v1" : 238, "curve" : 0, "vis" : false, "bCoef" : 2, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			{ "v0" : 239, "v1" : 240, "curve" : 0, "vis" : false, "bCoef" : 3.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ] },
			{ "v0" : 241, "v1" : 242, "curve" : 0, "vis" : false, "bCoef" : 3.5, "cMask" : ["ball","c0","red","blue","kick" ], "cGroup" : ["wall","c0" ], "team" : "blue" },
			{ "v0" : 243, "v1" : 244, "curve" : 0, "vis" : false, "cMask" : ["red","blue","ball","kick" ], "cGroup" : ["wall" ] },
			{ "v0" : 245, "v1" : 246, "curve" : 0, "vis" : false, "cMask" : ["red","blue","ball","kick" ], "cGroup" : ["wall" ] }
	
		],
	
		"goals" : [
			{ "p0" : [-210,-352.5 ], "p1" : [-692.0535241728003,-352.63873843200014 ], "team" : "red" },
			{ "p0" : [-690,-352.5 ], "p1" : [-690,352.5 ], "team" : "red" },
			{ "p0" : [-690,352.5 ], "p1" : [-210,352.5 ], "team" : "red" },
			{ "p0" : [210,352.5 ], "p1" : [690,352.5 ], "team" : "blue" },
			{ "p0" : [690,352.5 ], "p1" : [690,-352.5 ], "team" : "blue" },
			{ "p0" : [690,-352.5 ], "p1" : [210,-352.5 ], "team" : "blue" },
			{ "p0" : [711.1653770806887,-402.44539998658564 ], "p1" : [231.1653770806887,-402.44539998658564 ], "team" : "blue" },
			{ "p0" : [209.52981501542405,408.15814754918404 ], "p1" : [689.529815015424,408.15814754918404 ], "team" : "blue" },
			{ "p0" : [-1102.8811895808003,-352.5 ], "p1" : [-1102.8811895808003,352.5 ], "team" : "red" },
			{ "p0" : [-1182.9560433790161,410.7700251385037 ], "p1" : [-702.956043379016,410.7700251385037 ], "team" : "red" },
			{ "p0" : [684.0052375756802,408.15814754918404 ], "p1" : [1164.0052375756802,408.15814754918404 ], "team" : "blue" },
			{ "p0" : [1187.6085238013954,-404.5705420798722 ], "p1" : [707.6085238013956,-404.5705420798722 ], "team" : "blue" },
			{ "p0" : [1167.1143270388536,404.4625274319669 ], "p1" : [1161.9728542325151,-406.17635170074647 ], "team" : "blue" },
			{ "p0" : [-231.16537708068853,-407.3423766009446 ], "p1" : [-713.2189012534889,-407.48111503294473 ], "team" : "red" },
			{ "p0" : [-711.0361723389542,-409.0562008697241 ], "p1" : [-1193.0896965117545,-409.1949393017242 ], "team" : "red" },
			{ "p0" : [-703.0852481207501,410.7700251385037 ], "p1" : [-223.08524812075012,410.7700251385037 ], "team" : "red" },
			{ "p0" : [-1103.7028290940113,349.6201508310223 ], "p1" : [-1101.9890048252319,411.317824507085 ], "team" : "red" },
			{ "p0" : [-1105.416653362791,-351.33397509980176 ], "p1" : [-1103.7028290940113,-411.317824507085 ], "team" : "red" },
			{ "p0" : [698.6085238013954,-542.5705420798722 ], "p1" : [218.6085238013955,-542.5705420798722 ], "team" : "blue" },
			{ "p0" : [1163.6085238013957,-542.5705420798722 ], "p1" : [683.6085238013957,-542.5705420798722 ], "team" : "blue" },
			{ "p0" : [1637.5965822989506,-542.5705420798722 ], "p1" : [1157.5965822989506,-542.5705420798722 ], "team" : "blue" },
			{ "p0" : [688.7600486051762,483.0355571352507 ], "p1" : [208.76004860517622,483.0355571352507 ], "team" : "blue" },
			{ "p0" : [1153.7600486051765,483.0355571352507 ], "p1" : [673.7600486051764,483.0355571352507 ], "team" : "blue" },
			{ "p0" : [1608.911573408957,483.0355571352507 ], "p1" : [1128.911573408957,483.0355571352507 ], "team" : "blue" },
			{ "p0" : [-1131.3914761986048,-539.5705420798722 ], "p1" : [-1611.3914761986048,-539.5705420798722 ], "team" : "red" },
			{ "p0" : [-666.3914761986046,-539.5705420798722 ], "p1" : [-1146.3914761986046,-539.5705420798722 ], "team" : "red" },
			{ "p0" : [-204.39147619860455,-539.5705420798722 ], "p1" : [-684.3914761986046,-539.5705420798722 ], "team" : "red" },
			{ "p0" : [-1101.3914761986048,522.429457920128 ], "p1" : [-1581.3914761986048,522.429457920128 ], "team" : "red" },
			{ "p0" : [-636.3914761986046,522.429457920128 ], "p1" : [-1116.3914761986046,522.429457920128 ], "team" : "red" },
			{ "p0" : [-174.39147619860455,522.429457920128 ], "p1" : [-654.3914761986046,522.429457920128 ], "team" : "red" },
			{ "p0" : [-699.659305477416,486.1544036536505 ], "p1" : [-219.65930547741596,486.1544036536505 ], "team" : "red" },
			{ "p0" : [-1124.4761932508486,486.1544036536505 ], "p1" : [-644.4761932508487,486.1544036536505 ], "team" : "red" },
			{ "p0" : [-1583.545687276725,486.1544036536505 ], "p1" : [-1103.5456872767252,486.1544036536505 ], "team" : "red" },
			{ "p0" : [361.0211120967667,-652.7581531142246 ], "p1" : [-2.2467173667764087,-339.01226218201487 ], "team" : "blue" },
			{ "p0" : [3.162983561225701,-342.8828615467358 ], "p1" : [-390.9640778310032,-620.442726970567 ], "team" : "red" },
			{ "p0" : [396.84998466973025,615.6552311304214 ], "p1" : [2.722923277501323,338.09536570659014 ], "team" : "blue" },
			{ "p0" : [-0.38293244669813475,335.8567816369309 ], "p1" : [-363.6507619102412,649.6026725691406 ], "team" : "red" },
			{ "p0" : [-1457.7183172241716,-573.8406062207094 ], "p1" : [-1444.1201985933492,516.7285079712549 ], "team" : "red" },
			{ "p0" : [1460.4379409503363,-573.8406062207094 ], "p1" : [1474.0360595811587,497.6911418881034 ], "team" : "blue" },
			{ "p0" : [-1590.9798798062322,745.1769009690729 ], "p1" : [-8.158871178493499,734.2984060644148 ], "team" : "red" },
			{ "p0" : [-1604.5779984370547,-791.4105043138694 ], "p1" : [2.7196237261644995,-807.7282466708564 ], "team" : "red" },
			{ "p0" : [5.439247452328999,-815.8871178493498 ], "p1" : [1623.6153645202062,-813.1674941231854 ], "team" : "blue" },
			{ "p0" : [0,737.062427974264 ], "p1" : [1598.407799673974,737.062427974264 ], "team" : "blue" },
			{ "p0" : [-1776.0086663044156,-847.3041345493982 ], "p1" : [-1768.608630194814,788.1038456725844 ], "team" : "red" },
			{ "p0" : [1727.9084315920043,-865.8042248234026 ], "p1" : [1768.6086301948137,788.1038456725844 ], "team" : "blue" },
			{ "p0" : [696.3145589556331,591.3168721584669 ], "p1" : [216.31455895563312,591.3168721584669 ], "team" : "blue" },
			{ "p0" : [1161.3145589556334,591.3168721584669 ], "p1" : [681.3145589556333,591.3168721584669 ], "team" : "blue" },
			{ "p0" : [1158.3582537367313,591.7699774524606 ], "p1" : [1755.1645714228298,589.2518073356416 ], "team" : "blue" },
			{ "p0" : [-632.0577610287552,599.877289153337 ], "p1" : [-1112.057761028755,599.877289153337 ], "team" : "red" },
			{ "p0" : [-166.63181838542107,599.877289153337 ], "p1" : [-646.6318183854211,599.877289153337 ], "team" : "red" },
			{ "p0" : [-1116.251986814597,595.283102771404 ], "p1" : [-1755.8671964866182,592.764932654585 ], "team" : "red" },
			{ "p0" : [-1620.4708702970456,-657.7809875201539 ], "p1" : [-17.129713216670673,-664.6328728068221 ], "team" : "red" },
			{ "p0" : [17.129713216670673,-664.6328728068221 ], "p1" : [1634.174640870382,-661.206930163488 ], "team" : "blue" },
			{ "p0" : [3.9960194991849356,-759.2437048451377 ], "p1" : [1834.1729501258853,-763.2397243443227 ], "team" : "blue" },
			{ "p0" : [-3.9960194991849356,-755.2476853459528 ], "p1" : [-1874.1331451177348,-759.2437048451377 ], "team" : "red" },
			{ "p0" : [223.7770919543564,483.5183594013772 ], "p1" : [7.992038998369871,483.5183594013772 ], "team" : "blue" },
			{ "p0" : [135.86466297228782,603.3989443769252 ], "p1" : [143.85670197065767,595.4069053785554 ], "team" : "blue" },
			{ "p0" : [3.9960194991849356,575.4268078826307 ], "p1" : [219.78107245517145,595.4069053785554 ], "team" : "blue" },
			{ "p0" : [7.992038998369871,523.4785543932265 ], "p1" : [1738.268482145447,527.4745738924115 ], "team" : "blue" },
			{ "p0" : [1571.2176369040849,731.6356935202227 ], "p1" : [1767.1200903603194,741.6307166557449 ], "team" : "blue" },
			{ "p0" : [-1839.084256936079,731.6356935202227 ], "p1" : [-1569.2186322769805,741.6307166557449 ], "team" : "red" }
	
		],
	
		"discs" : [
			{ "radius" : 8, "invMass" : 1, "pos" : [0,0 ], "color" : "ffffff", "bCoef" : 0.5, "cMask" : ["wall" ], "cGroup" : ["ball","kick","score" ], "damping" : 0.99, "gravity" : [0,0 ] },
			{ "radius" : 5, "pos" : [0,340 ], "color" : "2b3439", "cMask" : ["wall" ], "cGroup" : ["wall" ] },
			{ "radius" : 5, "pos" : [0,-340 ], "color" : "2b3439", "cMask" : ["wall" ], "cGroup" : ["wall" ] }
	
		],
	
		"planes" : [
			
	
		],
	
		"joints" : [
			
	
		],
	
		"playerPhysics" : {
			"radius" : 14.5,
			"bCoef" : 0.5,
			"invMass" : 0.5,
			"damping" : 0.96,
			"cGroup" : [ "red", "blue"
			],
			"acceleration" : 0.1,
			"gravity" : [ 0, 0
			],
			"kickingAcceleration" : 0.07,
			"kickingDamping" : 0.96,
			"kickStrength" : 8.5,
			"kickback" : 0
	
		},
	
		"ballPhysics" : "disc0"
	}`
	return volley2DMap;
}

function randomBallServePosition() {
	if (serve_team == 2) {
		room.setDiscProperties(0,{ x: 725, y: -287.5, invMass: 1.85, cGroup: 64});	
	}
	else if (serve_team == 1) {
		room.setDiscProperties(0,{ x: -725, y: 287.5, invMass: 1.85, cGroup: 64});		
	}
}



function ballAvailable() {
	let pos_x0 = room.getDiscProperties(0).x;
	let pos_y0 = room.getDiscProperties(0).y;
		room.setDiscProperties(0, {cGroup: 193, invMass: 0.65});
		is_servered = false;
}

function touchSpike() {
	let pos_x = room.getDiscProperties(0).x;
	// let pos_y = room.getDiscProperties(0).y;
		if (pos_x > 0 && totalTouches == 2 && lastPlayersTouched[0].team == 1) {
			//check if ball is in blue Team
			room.setDiscProperties(0, {invMass: 0.65});
		}
		if (pos_x < 0 && totalTouches == 2 && lastPlayersTouched[0].team == 2) {
			room.setDiscProperties(0, {invMass: 0.65});
		}
}

var touch_time;
var is_response = true;

function BallAfter2Second() {
	let pos_x = room.getDiscProperties(0).x;
	if (pos_x > 0 && lastPlayersTouched[0] != null && lastPlayersTouched[0].team == 1 && is_response ) {
		touch_time = Date.now();
		is_response = false;
	}
	if (pos_x < 0 && lastPlayersTouched[0] != null && lastPlayersTouched[0].team == 2 && is_response) {
		touch_time = Date.now();
		is_response = false;
	}	

}
function backFromAFK(player_id) {
    var specs = room.getPlayerList().filter((player) => player.team == 0);
    // console.log(specs)
    let temp = [];
    for (let i = 0; i < specs.length; i++) {
        if (specs[i].id != 0) temp.push(specs[i].id)
        else break;
    }
    
    room.reorderPlayers([player_id], true);
    room.reorderPlayers(temp, true);
}

/* BALANCE & CHOOSE FUNCTIONS */

function endGame(winner) { // lida com o final de um jogo: nenhuma função stopGame dentro
    players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
    const scores = room.getScores();
    game.scores = scores;
    lastWinner = winner;
    endGameVariable = true;
    if (winner == Team.RED) {
        streak++;
        room.sendAnnouncement("🏆 Đội RED 🔴 đã thắng! | Win Streak(s): " + streak + " 🏆", null, 0xf85c5c,"italic",0);
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement("🏆 Đội BLUE 🔵 đã thắng! | Win streak(s): " + streak + " 🏆", null, 0x5cb3f8,"italic",0);
    }
    else {
        streak = 0;
        room.sendAnnouncement("💤 Limit reached");
    }
    if (room_type <=2) RecSistem.sendDiscordWebhook(scores);
}

var pre_serve_team = 2;

function rotatePlayer() {
    updateTeams();
    setTimeout(() => {
        if (serve_team == 2 && pre_serve_team != serve_team && teamB[0] != null) {
            room.reorderPlayers([teamB[0].id], false)
        }
        else if (serve_team == 1 && pre_serve_team != serve_team && teamR[0] != null ) {
            
            room.reorderPlayers([teamR[0].id], false)
        }
    }    
    , 500);
}

// DASH FUNCTIONS
var has_dash = []
var dash_object = {}
function handlePlayerPosition(){
	var players = room.getPlayerList();
	for (var i = 0; i < players.length; i++) { 
		var player = players[i];
		if ( player.position == null ) continue;
		var player_disc = room.getPlayerDiscProperties(player.id)
		var m = ( (player_disc.xspeed +player_disc.yspeed )/2 ) * 5
		var t = m.toFixed(0)

        var q = player_disc.yspeed.toFixed(1)
            if ((q == -1.3 || q == 1.3) && player_serve != null && player_serve.id == player.id) {
                if (player_disc.y > -287.5 && player_disc.y < 287.5) room.setDiscProperties(0, {y: player_disc.y});
                else if (player_disc.y < -287.5) room.setDiscProperties(0, {y: -287.5});
                else if (player_disc.y > 287.5) room.setDiscProperties(0, {y: 287.5});
                continue
            }
            // is_touch thành người serve
			if ( /* player_served != player.id && */ (t == -3 || t == 3 || t == 5|| t == -5 )  && !has_dash.includes(player.id) ) {
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