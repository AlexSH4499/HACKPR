#We assign value gained from jscript
import sys

json_string = '["a","b",null,null,"e"]'  # passed from JavaScript

try:
	import simplejson as json
except(ImportError):
	import json

result = json.loads(json_string)
#prints resulting string
print repr(result)