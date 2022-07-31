#Hey There this is aman 
def twosum(arr, target):
	# print(arr,target)
	d = {}
	for i, v in enumerate(arr):
		if v in d:
			print(d[v], i)
			return d[v], i
		
		d[target - v] = i

