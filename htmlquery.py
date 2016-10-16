import PyQuery as pq
import sys

def getOptionsSelected():
	dir = pq('<div id = "OptionSelector">')
	print(dir.children())
	#dir.val()#gets the value of whatever is in our declared directory
