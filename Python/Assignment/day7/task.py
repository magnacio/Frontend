row=4
column=9
space=0
for i in range(1,row+1):#4
    for z in range(1,space+1):#3 2
        print("  ",end=" ")
    for j in range(1,column-1):#7
        print(" * ",end="")
    column-=2#6
    space+=1 #3
    print("\n",end="")             