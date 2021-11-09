# 背景
DS-Liteでipv6使えるようにしたところiphoneでipv4向けサイトのタイムアウトが頻発する。

# やりたいこと
raspberrypiが常時稼働しているのでipv4用のHttpプロキシサーバを作る。
ARMv6向けのhttp proxyがdockerhubでみあたらなかったのでpushする。

# Build
docker build -t ranran9/nginx_proxy ./

# Run
docker run --rm -p 3128:3128 ranran9/nginx_proxy