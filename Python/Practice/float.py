score1=float(input("Enter your mark: "))
if score1>=9.0:
    print("You have passed with distinction in level1")
    score2=float(input("Enter your mark: "))
    if score2>=9.0:
        print("You have passed with distinction in level2")
    else:
        print("You have failed in level2")
else:
    print("You have failed in level1")        