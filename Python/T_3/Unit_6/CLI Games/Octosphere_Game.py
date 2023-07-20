# Mystical Octosphere Games
# A program that can answer any yes or no question with a random response


import random


def num_to_fortone(number):
    if number == 1:
        return "Yes, for sure!"
    elif number == 2:
        return "Probably yes."
    elif number == 3:
        return "Seems like yes..."
    elif number == 4:
        return "Definitely not!"
    elif number == 5:
        return "Probably not."
    elif number == 6:
        return "I really doubt it..."
    elif number == 7:
        return "Not sure, check back later!"
    elif number == 8:
        return "I really can't tell"
    elif number == 9:
        return "No."
    else:
        return "Error: Number must be between 1 and 9"


def get_question(question):
    print(
        "Ask the magical octosphere a yes or no question, then press 'Enter' to shake it."
    )
    question = input("Question: ")
    print("You shake the mystical octosphere.")
    print("The cloudy liquid swirls, and a reply comes into view...")
    print("The mystical octosphere says...", end=" ")
    answer_number = random.randrange(1, 9)
    answer_fortune = num_to_fortone(answer_number)
    print(answer_fortune)


get_question("question")
