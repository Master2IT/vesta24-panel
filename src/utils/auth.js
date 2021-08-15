const TokenKey = 'accesstoken';
var domain = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod' ? '.frotel.com' : 'localhost'

// var at = '123'
var env = process.env.NODE_ENV;

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function getToken(key) {
  // return env == 'development' ? at : getCookie(key || TokenKey)
  return getCookie(key || TokenKey)
}

export function setToken(token) {
  return document.cookie = `${TokenKey}=${env == 'development' ? at : token}; path=/;domain=${domain}`;
  // return document.cookie = `${TokenKey}=${token}; path=/;domain=${domain}`;
}

export function removeToken() {
  return document.cookie = `${TokenKey}= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${domain}`;
}