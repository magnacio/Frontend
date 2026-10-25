i=int(input("No"))
temp=i
rev_num=0
while(temp>0):#121 12 1
    j=temp%10#1 #2 1
    rev_num=(rev_num*10)+j#1 #12 121
    temp=temp//10#12 1 0
if(rev_num==i):
        print("Palindrome")
else:
        print("Not palindrome")

    


    