# Number Guessing Game

import random


def num_guess_gane():
    num = random.randint(1, 100)
    attame = 0
    print("I'm thinking of a number between 1 and 100; what do you think it is?")
    while True:
        if attame == 7:
            break

        guess = int(input("Enter your guess: "))
        attame += 1

        if guess == num:
            print(f"You got it! It took you {attame} attempts.")
            break
        elif guess > num:
            print("Too high!")
        else:
            print("Too low!")
    return attame


def play_again():
    return (
        input("Do you want to play again? (Y for yes, N for no): ").strip().upper()
        == "Y"
    )


def main():
    print("Welcome to the Number Guessing Game!")
    attame = num_guess_gane()
    while play_again():
        attame += num_guess_gane()
    print(f"Your number of guesses was {attame}.")


main()
