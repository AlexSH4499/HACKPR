#We assign value gained from jscript
import sys
from flask import Flask

app=Flask(__name__,method['GET'])
@app.route('/coli')
def hello():
	return 'Hello World'
app.run(port = 8080)
#if __name__ == "__main__":
#	app.run(port = 8080)


json_string = '["a","b",null,null,"e"]'  # passed from JavaScript

try:
	import simplejson as json
except(ImportError):
	import json

result = json.loads(json_string)
#prints resulting string
#print repr(result)

def loadJSON():
	cgit.enable()
	input = sys.stdin.read()
	output = json.load(input)
	json.dump(output, sys.stdout)
	print repr(result)


