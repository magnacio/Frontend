row=7
column=1
space=row-1
for i in range(1,row-1):#6
    for z in range(1,space+1):#6
        print(" ",end="")#6 spaces 
    for j in range(1,column+1):#1 2
        print("* ",end="")
    column+=1#
    space-=1
    print("\n",end="") 
column=row-1
space=1
for x in range(1,row):#6
    for y in range(1,space+1):#1

        print(" ",end="") 
    for k in range(1,column+1):#6
        print("* ",end="")
    column-=1#6 5 4 3 2 1
    space+=1#2 3 4 5 6 


    print("\n",end="")            
  
    
     
            