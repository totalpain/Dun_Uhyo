from webui import webui


def button_event_isuhyo(e : webui.event):
    e.window.run('alert(\"무효입니다!!!\")')
    return

# call webui insatance #
dnf_window = webui.window()
dnf_window.show('index.html')
dnf_window.bind("BTN000", button_event_isuhyo)
webui.wait()


#definitions of functions#


