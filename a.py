
string = input("String: ").lower()

half = len(string) // 2

print(string[0:half:] + string[half::].upper())

