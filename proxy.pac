function FindProxyForURL(url, host) {

  if (isPlainHostName(host))
    return "DIRECT";

  else if (shExpMatch(host, "misc-sni.blogspot.com") ||
    shExpMatch(host, "blogspot.com") ||
    shExpMatch(host, "*.blogspot.com") ||
    shExpMatch(host, "blogspot.jp") ||
    shExpMatch(host, "*.blogspot.jp") ||
    shExpMatch(host, "bp.blogspot.com") ||
    shExpMatch(host, "*.bp.blogspot.com") ||

    shExpMatch(host, "youtu.be") ||
    shExpMatch(host, "*.youtube.com") ||
    shExpMatch(host, "*.googlevideo.com") ||
    shExpMatch(host, "apis.google.com") ||
    shExpMatch(host, "*.googleusercontent.com") ||
    shExpMatch(host, "*.gstatic.com") ||

    shExpMatch(host, "*.youtube.com")
    )
    return "PROXY 192.168.0.13:3128; " +
    "PROXY 192.168.0.2:3128";

  else
    return "DIRECT";

}