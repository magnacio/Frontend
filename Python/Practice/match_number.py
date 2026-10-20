num=int(input("Enter a number: "))
match num:
    case 100:
        print("Hundred")
    case 1001:
        print("Thousand and one")
    case _:
        print("Invalid Number")        