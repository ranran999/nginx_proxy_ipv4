function FindProxyForURL(url, host) {

    if (isPlainHostName(host))
      return "DIRECT";

    else if (shExpMatch(host, "*.google.com") || 
    shExpMatch(host, "*.googleapis.com") || 
    shExpMatch(host, "*.apple.com") || 
    shExpMatch(host, "*.smartnews-ads.com") || 
    shExpMatch(host, "*.smartnews.com") || 
    shExpMatch(host, "*.icloud.com") || 
    shExpMatch(host, "*.doubleclick.net") || 
    shExpMatch(host, "app-measurement.com") || 
    shExpMatch(host, "*.smartnews.be") || 
    shExpMatch(host, "*.facebook.com") || 
    shExpMatch(host, "*.google-analytics.com") || 
    shExpMatch(host, "*.twitter.com") || 
    shExpMatch(host, "*.fril.jp"))
      return "DIRECT";

      else
        return "PROXY 192.168.0.13:3128; " +
        "PROXY 192.168.0.2:3128";

  }