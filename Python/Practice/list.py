value=[10,20,30,40,50]
value.append(60)
value.pop(2)
value.remove(40)
value.insert(2,25)
for values in value:
    if values%2==0:
        print(values)