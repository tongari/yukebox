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
logout.addEventListener('click',function (e) {
  e.preventDefault();

  var isLogout = confirm('ログアウトしちゃう？');
  if(!isLogout) return;

  var csrf_token = document.querySelector("meta[name='csrf-token']").content;
  var xhr = new XMLHttpRequest();
  xhr.open('delete', '/users/sign_out', true);
  xhr.setRequestHeader('X-CSRF-Token', csrf_token);
  xhr.onload = function () {
    location.href= '/users/sign_in'
  };
  xhr.onerror =function () {
   alert('error');
  };
  xhr.send(null);

});