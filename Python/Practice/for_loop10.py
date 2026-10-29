row=7
column=1
space=row-1
for i in range(1,row+1):#7 rows
    for z in range(1,space+1):#6
        print(" ",end="")#6 spaces 
    for j in range(1,column+1):#1 2
        print("* ",end="")
    column+=1#
    space-=1
    print("\n",end="") 

column=row-1#6 stars in first lower row
space=1
for x in range(1,row):#6 rows
    for y in range(1,space+1):
        print(" ",end="") 
    for k in range(1,column+1):
        print("* ",end="")
    column-=1
    space+=1
    print("\n",end="")
    