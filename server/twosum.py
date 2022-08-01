#Hey There this is aman 
def twosum(arr, target):
	temp = {}

	for i, v in enumerate(arr):
		if v in temp:
			return temp[v], i
		temp[target - v] = i
		print(v, i)