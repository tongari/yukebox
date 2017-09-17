// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require_tree .


var logout = document.querySelector('.js-logout');
logout.addEventListener('click', function (e) {
  e.preventDefault();

  var isLogout = confirm('ログアウトしちゃう？');
  if(!isLogout) return;

  var csrf_token = document.querySelector("meta[name='csrf-token']").content;
  var xhr = new XMLHttpRequest();
  xhr.open('delete', '/users/sign_out', true);
  xhr.setRequestHeader('X-CSRF-Token', csrf_token);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status < 400 ){
      location.href= '/users/sign_in'
    }
    else if (xhr.readyState === 4 && xhr.status >= 400 ){
      alert('error');
    }
  };
  xhr.onerror =function () {
   alert('error');
  };
  xhr.send(null);
});


function setTrackParams() {
  return {
    track_id: document.querySelector("input[name='track_id']").value,
    user_id: document.querySelector("input[name='user_id']").value,
    video_id: document.querySelector("input[name='video_id']").value,
    track_num: document.querySelector("input[name='track_num']").value,
    track_title: document.querySelector("input[name='track_title']").value
  };
}

function setAlbumParams() {
  return {
    title: document.querySelector("input[name='track_lists_title']").value,
    user_id: document.querySelector("input[name='track_lists_user_id']").value
  };
}

function connectTrack(method, url, params) {
  var csrf_token = document.querySelector("meta[name='csrf-token']").content;
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('X-CSRF-Token', csrf_token);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status < 400 ){
      var res = JSON.parse(xhr.response);
      if (res.success){
        alert(res.success);
      } else {
        alert(res.message);
      }
    }
    else if (xhr.readyState === 4 && xhr.status >= 400 ){
      alert('error');
    }
  };
  xhr.onerror =function () {
    alert('error');
  };
  xhr.send(JSON.stringify(params));
}

var addTrack = document.querySelector('.js-addTrack');
addTrack.addEventListener('click', function (e) {
  e.preventDefault();
  connectTrack('post', '/tracks', setTrackParams());
});

var editTrack = document.querySelector('.js-editTrack');
editTrack.addEventListener('click', function (e) {
  e.preventDefault();
  var edit_delete_id = document.querySelector("input[name='edit_delete_id']").value;
  connectTrack('put', '/tracks/'+edit_delete_id, setTrackParams());
});

var deleteTrack = document.querySelector('.js-deleteTrack');
deleteTrack.addEventListener('click', function (e) {
  e.preventDefault();
  var edit_delete_id = document.querySelector("input[name='edit_delete_id']").value;
  connectTrack('delete', '/tracks/'+edit_delete_id, setTrackParams());
});



var addAlbum = document.querySelector('.js-addAlbum');
addAlbum.addEventListener('click', function (e) {
  e.preventDefault();
  connectTrack('post', '/track_lists', setAlbumParams());
});