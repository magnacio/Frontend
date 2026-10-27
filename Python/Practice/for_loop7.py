row=4
column=1
space=row-1
for i in range(1, row+1): #(1,5)=4 (1,6)=5 

    for z in range(1, space+1):#(1,4)=3 (1,5)=4
        print("   ", end=" ")# 3 spaces 4 spaces
        
    for j in range(1, column+1): #1 3
        print(" * ", end=" ") # 1 3

    column=column+2#3 5
    space=space-1#
    print("\n", end="")