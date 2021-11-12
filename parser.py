# coding=utf-8
# nginxのエラーログ　docker logs nginx > out.log
test_data = open("out.log", "r")
score = {}
for line in test_data:
    try:
        host = line.split("CONNECT ")[1].split(":")[0]
        domain = host.split(".")[-2] + "." + host.split(".")[-1] 
        if domain in score:
            score[domain] += 1
        else:
            score[domain] = 1
    except:
        None
# ログのホスト名の上位をproxy.pacに転記するための文字起こし
score_sorted = sorted(score.items(), key=lambda x:x[1],reverse=True)
for item in score_sorted:
    if item[1] > 50:
        #print(item[0],item[1])
        print('shExpMatch(host, "*.{0}") || '.format(item[0]))
#print(score_sorted)
