if __name__ == '__main__':
    print('__main__ - start')

from webui import webui
#program starts#

'''
License : MIT License
Create by : totalpain (종합적고통)

던파 커스텀 에픽 유효 계산기

2024-01-20 최초 작성
심심해서 만듬 수구ㅋㅋ

본캐 디레지에 심리적고통
인파이터 짱재밌음
'''


#definitions of functions#

def button_event_isuhyo(e : webui.event):
    response = e.window.script("return event_check_customisgood();")

    data = int(response.data)
    if data == 4:
        e.window.run("alert('오! 4유효네요! 축하드려요!')")
    elif data > 3.5:
        e.window.run("alert('3.5유효! 거의 종결입니다')")
    elif data > 3:
        e.window.run("alert('아쉽지만 쓸 수는 있습니다')")
    elif data > 2:
        e.window.run("alert('애매하네요... 2유효입니다')")
    else:
        e.window.run("alert('못써요...')")
    return

# call webui insatance #
dnf_window = webui.window()
webui.wait()
dnf_window.bind("BTN000", button_event_isuhyo)
dnf_window.show('index.html')
webui.wait()
