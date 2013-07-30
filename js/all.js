$(function() {
  extractTweets($("#twitterWidget")[0], function(data) {
    // we only care about the first 2 tweets.
    var tweetsEl = $("#tweets");
    data.splice(2);
    for (var t=0; t<data.length; ++t) {
      var tweet = data[t];
      var container = $("<div class='tweet'></div>");
      $(tweet.timeEl).addClass("right");
      container.append(tweet.timeEl);
      container.append(tweet.profileEl);
      container.append(tweet.bodyEl);
      container.find("img").remove();
      tweetsEl.append(container);
    }
  });
});
