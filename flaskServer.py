from flask import Flask
from flask import jsonify
import json

app = Flask(__name__)

#@app.route("/",methods = ['GET'])
#def hello_world():
#    print ("Running Successfully")
#    return "Hello,World!"


@app.route('/_array2python',methods =['GET'])
def array2python():
    dll_state = json.loads(request.args.get('dll_state'))
    return jsonify(result=dll_state)
app.run(port= 8080)
