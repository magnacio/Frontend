num = int(  input("enter a number") ) # 153
s = 0 # s = 0
temp = num # temp=153


while num > 0:  # 153>0 15>0 1>0
  r = num % 10   #3 5 1
  s=s+(r**3)     #27 152 153
  num=num // 10 #15 1 0


if s  ==  temp:
	print("true")#true
else:
 print("false")