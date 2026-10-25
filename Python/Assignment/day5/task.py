a=int(input("enter a digit:"))
rev=0
temp=a
while(temp>0):

    b=temp%10

    temp=temp//10
    rev=(rev*10)+b

if(rev==a):
    print("Palindrome")
else:
    print("Not Palindrome")    