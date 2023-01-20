import random
import json

with open("books.json", mode="r") as file_books:
    books = json.load(file_books)

percentual = {"Open Source": 0}

for book in books:
    for category in book["categories"]:
        percentual[category] = 0

for book in books:
    for category in book["categories"]:
        percentual[category] += 1

for category in percentual:
    percentual[category] = round((percentual[category] * 100) / len(books), 2)


with open("percentual_books.json", mode="w") as file_percentual:
    json.dump(percentual, file_percentual)

def genrate_game():
    word = random.choice(["macaco", "tigre", "leão"])
    scrambled_word = "".join(random.sample(word, len(word)))

    answer = input(f"A palavra embaralhada é: {scrambled_word}")

    if answer == word:
        print("Parabéns, você acertou!")
    else:
        print(f"Errado! A palavra correta é {word}")


# genrate_game()

with open("animals.txt", mode="r") as file:
    animals = file.read().split("\n")
    word = random.choice(animals)
    scrambled_word = "".join(random.sample(word, len(word)))

    answer = input(f"A palavra embaralhada é: {scrambled_word}")

    if answer == word:
        print("Parabéns, você acertou!")
    else:
        print(f"Errado! A palavra correta é {word}")
