#Hey There this is aman \n
def twosum(s, target):
    temp = {}
    for i, v in enumerate(s):
        if v in temp:
            return temp[v], i
        else:
            temp[target - v] = i