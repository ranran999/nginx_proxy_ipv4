# 背景
DS-Liteでipv6使えるようにしたところiphoneで一部サイトでタイムアウトが頻発する。

# やりたいこと
raspberrypiが常時稼働しているのでipv4用のHttpプロキシサーバを作る。

ARMv6向けのhttp proxyがdockerhubでみあたらなかったのでpushする。

とりあえずProxy経由でサイトが見られるようになったのでproxy.pacで冗長化。

あからさまに遅くなった一部サイトだけプロキシ経由にしてその他はDIRECT接続にしておく。

# Build
docker build -t ranran9/nginx_proxy ./

# Run
docker run -d --name nginx -p 3128:3128 ranran9/nginx_proxy

or 

docker run -d --rm --name nginx -p 3128:3128 ranran9/nginx_proxy