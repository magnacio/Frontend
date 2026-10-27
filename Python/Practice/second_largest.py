n=int(input("Enter a number"))#153
temp=n
while(n>0):
    if(n<999):#121<999
        b=n%10
        a=n//10
        c=a//10
        d=n%10
        e=(c**3)+(d**3)+(b**3)
        print(e)
        if(e==n):
            print("armstrong number")
        else:
            print("Not an armstrong number")