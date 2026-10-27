rows=4
column=8
space=0
for i in range(1,rows+1):#(1,5)=4
    for z in range(1,space+1):#1
        print("  ",end="")#1 space
    for j in range(1,column):#(1,8)=7 (1,6)=5 
        print(" * ",end=" ")
            
    space+=2#2
    column-=2
    print("\n",end="")
    
