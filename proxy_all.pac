function FindProxyForURL(url, host) {

  if (isPlainHostName(host))
    return "DIRECT";

  else
    return "PROXY 192.168.0.13:3128; " +
    "PROXY 192.168.0.2:3128";

}