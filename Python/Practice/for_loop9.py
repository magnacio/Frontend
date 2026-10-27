row=5
column=1
space=row-1
for i in range(1,row+1):#4
    for z in range(1,space+1):#5  
        print("   ",end="")#5 spaces 
    for j in range(1,column+1):#1 3 5 7 
        print(" * ",end="")
        #*
        #* * *
    space-=1
    column+=2
    print("\n",end="") 
           
