
arr1=[10,70,30,60,50]
s=list(arr1)
arr2=[]
for i in s[::-1]:
    arr2.append(i)
    print(arr2[-2])
