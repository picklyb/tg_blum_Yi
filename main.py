import execjs

play_e = '513571d1-1b4f-4575-baf4-140f03ac5d5b'

id = "046f341b-5db4-4ce9-972d-2e2300d0b8ba"

check = execjs.compile(open("./main.js",'r',encoding='utf-8').read()).call("encrypt",play_e,id,'100')
print(f"""Yi='{check}'""")