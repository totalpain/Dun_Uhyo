from webui import webui
import pandas as pd
import json
import os
#program starts#

'''
License : MIT License
Create by : totalpain (종합적고통) all rights reserved
2024 01 21

던파 커스텀 에픽 유효 계산기

2024-01-20 최초 작성
심심해서 만듬 수구ㅋㅋ

본캐 디레지에 심리적고통
인파이터 짱재밌음
'''

#definitions of variables#


#definitions of functions#


def event_read_csv():

    json_path = "./js/custom_opt.json"
    csv_path = "./custom_opt.csv"
   
    custom_opt_raw_data = pd.read_csv(csv_path)

    custom_opt_raw_data = pd.DataFrame(custom_opt_raw_data)

    print(custom_opt_raw_data)
  
    custom_opt_raw_data.columns = ['custom_where','custom_type','custom_value','custom_opt']

    custom_opt_json_data = {
        "custom_where" : custom_opt_raw_data['custom_where'].tolist(),
        "custom_type" : custom_opt_raw_data['custom_type'].tolist(),
        "custom_value" : custom_opt_raw_data['custom_value'].tolist(),
        "custom_opt" : custom_opt_raw_data['custom_opt'].tolist(),
        "length" : len(custom_opt_raw_data['custom_where'].tolist())
    }

    with open(json_path, 'w') as jsf:
        json.dump(custom_opt_json_data, jsf, indent=4)
    


'''
    if os.path.exists(file_path):
        with open(file_path, 'r') as jsf:
            existing_data = json.load(jsf)

        if len(existing_data["custom_opt"]) < len(custom_opt_json_data["custom_opt"]):
            existing_data.update(custom_opt_json_data)

            with open (file_path, 'w') as jsf:
                json.dump(existing_data, jsf)
'''
#    else:

def button_event_checktype(e : webui.event):
    response = e.window.script("return get_options_from_json();")
    response = e.window.script("return set_custom_options_list_each();")

    data = response.data

    e.window.run("alert(\'"+ data +"\')")

def button_event_isuhyo(e : webui.event):
    response = e.window.script("return event_check_customisgood();")

    data = float(response.data)
    if data == 4:
        e.window.run("alert('오! 4유효네요! 축하드려요!')")
    elif data >= 3.5:
        e.window.run("alert('3.5유효! 거의 종결입니다')")
    elif data >= 3:
        e.window.run("alert('아쉽지만 쓸 수는 있습니다')")
    elif data >= 2:
        e.window.run("alert('애매하네요... 2유효입니다')")
    else:
        e.window.run("alert('못써요...')")
    return


# call webui insatance #
dnf_window = webui.window()
event_read_csv()
webui.wait()
dnf_window.bind("BTN000", button_event_checktype)
dnf_window.bind("BTN001", button_event_isuhyo)
dnf_window.show('index.html')
webui.wait()
