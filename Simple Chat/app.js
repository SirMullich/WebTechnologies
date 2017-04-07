
/*
	Chat design and CSS was taken from https://code.tutsplus.com/tutorials/how-to-create-a-simple-web-based-chat-application--net-593 
  Note: JS was written by me (Daulet), Farhat's initial code was used as basis for this project
*/
    
var stat = {
  userLength: 0
};

var Name = '';

var getUserList = function(){
  return space.get('users');
};

var getUserNameHolder = function(){
  // return $('.user-name span');
  return $('.welcome span');
};

var run = function(name){
  getUserNameHolder().text(name);

  if(!space.get('users'))
    space.set('users', []);

  var tmp = space.get('users');
  tmp.push({
    name: Name,
    time: (+ new Date())
  });

  space.set('users', tmp);

  showOtherUsers(name);
  updateUserList();
};

var renderUserNameInSpan = function(name, t, msg){
	var temp = new Date(t);
	// convert time to printable format
	var timeString = temp.toTimeString().split(' ')[0];
  return '<div><span class="msgln">' + timeString + ' <b>' + name + ':</b>&nbsp' + msg + '</span></div>';
};

var getUserNamesDiv = function(){
  // return $('.other-users');
  return $('#chatbox');
};

var clearOtherUsers = function(){
  getUserNamesDiv().html('');
};

var showOtherUsers = function(){
  var users = space.get('users');

  stat.userLength = users.length;

  var div = getUserNamesDiv();
  for(var i = 0; i < users.length; i++){
    div.append(renderUserNameInSpan(users[i].name, users[i].time, users[i].message));
  }
};

var updateUserList = function(){
  setInterval(function(){
    console.log('Tick');
    clearOtherUsers();
    showOtherUsers();
  }, 2000);
};

var space = {
  get: function(key){
    return JSON.parse(localStorage.getItem(key));
  },

  set: function(key, val){
    var tmp = JSON.stringify(val);
    localStorage.setItem(key, tmp);
  },

  remove: function(key){
    localStorage.removeItem(key);
  },

  clear: function(){
    localStorage.clear();
  }
};

$(document).ready(function(){
  Name = prompt('Please enter your name');
  getUserNameHolder().text(Name);
  showOtherUsers();
  updateUserList();

  $('#usermsg').keypress(function(e){
      if(e.keyCode==13)
      $('#sendbtn').click();
    });

  // run(name);
});

function sendMessage() {

	var msg = $('#usermsg').val();
	$('#usermsg').val('');

  if(!space.get('users'))
    space.set('users', []);

  var tmp = space.get('users');
  tmp.push({
    name: Name,
    time: (+ new Date()), 
    message: msg
  });

  space.set('users', tmp);

  clearOtherUsers();
  showOtherUsers();

	// return $('.debug').html(t);
}