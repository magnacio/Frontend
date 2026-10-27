s=abs(int(input("Enter the Numbers")))#35
even=odd=0#even 
if(s==0):
    even=1
while(s>0):#3
    digit=s%10#5 1
    if(s%2==0):    
        even+=1
    else:
        odd+=1#1 1
    s=s//10 #3 0
print("even",even)
print("odd",odd)


            