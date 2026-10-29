row=4
column=1
space=row-1
for i in range(1,row+1):#4
    for z in range(1,space+1):#3
        print(" ",end="")
    if(column<=2 or i==row):    
        for  k in range(1,column+1):
            print("* ",end="")
            
    elif(column>=2):
        print("* ",end="")
        for x in range(1,column-1):
            print("  ",end="")
        print("* ",end="")

    column+=1
    space-=1
    print("\n",end="")