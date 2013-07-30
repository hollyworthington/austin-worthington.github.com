function extractTweets(parentEle, callback) {
  var iframe, iframeDoc, tweets, tweetData = [];
  var pollTries = 0;

  function tryToFindIFrame() {
    iframe = $(parentEle, "iframe")[0];
    if (iframe) {
      iframeDoc = getDocFromIFrame(iframe);
      pollTries = 0;
      tryToFindTweets();
    } else {
      if (pollTries++ < 100) {
        setTimeout(tryToFindIFrame, 100);
      }
    }
  }

  function tryToFindTweets() {
    tweets = $(iframeDoc, ".tweet");
    if (tweets && tweets.length > 0) {
      for (var t=0; t<tweets.length; ++t) {
        tweetData[t] = parseTweet(tweets[t]);
      }
      if (typeof callback === "function") {
        callback(tweetData);
      }
    } else {
      if (pollTries++ < 100) {
        setTimeout(tryToFindTweets, 100);
      }
    }
  }

  function parseTweet(tweet) {
    var tData = {};
    var timeNodes = $(tweet, "time")[0].childNodes;
    var time = timeNodes[0].nodeValue;
    tData.fullName = $(tweet, ".full-name .p-name")[0].innerHTML;
    tData.nickName = "@" + $(tweet, ".header .p-nickname b")[0].innerHTML;
    tData.datetime = $(tweet, "time")[0].getAttribute("datetime");
    tData.time = timeNodes.length > 1 ? time + timeNodes[1].innerHTML : time;
    tData.timeEl = $(tweet, ".permalink")[0];
    tData.bodyEl = $(tweet, ".e-entry-title")[0];
    tData.body = tData.bodyEl.innerHTML;
    tData.profileEl = $(tweet, ".profile")[0];
    tData.profile = tData.profileEl.href;
    tData.photo = $(tweet, ".avatar")[0].src;
    tData.tweetURL = $(tweet, ".permalink")[0].href;
    tData.replyURL = $(tweet, ".reply-action")[0].href;
    tData.retweetURL = $(tweet, ".retweet-action")[0].href;
    tData.favoriteURL = $(tweet, ".favorite-action")[0].href;
    tData.tweetEl = tweet;
    return tData;
  }

  function $(el, query) {
    if (typeof el === "string") {
      query = el;
      el = document;
    }
    return el.querySelectorAll(query);
  }

  function getDocFromIFrame(x) {
    return x.document || x.contentDocument || x.contentWindow.document;
  }

  tryToFindIFrame();
}

