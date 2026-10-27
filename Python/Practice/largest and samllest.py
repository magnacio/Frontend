n=int(input("Enter the no of digits"))#5
if(n<=0):#5<=0
    print("It is less than 0")
else:#5>0
    print(f"enter the{n}numbers")#enter the 5 numbers
    first=int(input('enter a digit'))#1 
    largest=smallest=first#1 == largest,smallest

    for _ in range(n-1): #4
        num=int(input())#2 3 4 5
        if num>largest:#2>1,3>2,4>3
            largest=num
        else:
            smallest=num
    print("largest no is",largest)
    print("smallest no is",smallest)            


