row=4
column=1
for i in range(1,row+1):#1 2 3 
    for j in range(1,column+1):#1 3 5 
        print("*",end=" ")#*
        #*
        #* * *
        #* * * * *
    column+=2#3 5
    print("\n",end="")    
