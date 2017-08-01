;(function(win, doc) {

  var changeImgSrc = {
    changeFs: function(imgurls, newimgurl) {
      if(typeof imgurls == "string") {
        imgurls = imgurls.replace("fs:/", newimgurl + "/");
      }
      return imgurls;
    }
  }

  //兼容amd、cmd和window
  if(typeof exports == "object") {
    module.exports = changeImgSrc;
  } else if(typeof define == "function" && define.amd) {
    define([], function() {
      return changeImgSrc;
    });
  } else {
    win.changeImgSrc = changeImgSrc;
  }
})(window, document);
