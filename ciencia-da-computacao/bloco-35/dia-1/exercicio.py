import random

def generate_100_numbers(n: int):
    result = []

    for i in range(100):
        number = 0

        for z in range(n):
            number += random.randint(1, n+1)
        
        result.append(round(number/n))

    return result

print(generate_100_numbers(3))