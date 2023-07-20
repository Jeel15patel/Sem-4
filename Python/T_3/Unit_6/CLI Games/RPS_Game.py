# Rock, Paper, Scissors Game
# A program that plays the game of Rock, Paper, Scissors with you.

import random


def get_user_choice():
    while True:
        user_choice = (
            input("Enter R for Rock, P for Paper, S for Scissors: ").strip().upper()
        )
        if user_choice in ("R", "P", "S"):
            return user_choice
        print("I don't understand that!")


def get_computer_choice():
    choices = {"R": "Rock", "P": "Paper", "S": "Scissors"}
    return random.choice(list(choices.keys()))


def get_rock_paper_scissors_result(computer_choice, user_choice):
    print(f"Computer's choice: {computer_choice}")
    if computer_choice == user_choice:
        print("Tie!")
        return "Tie"
    if (
        (computer_choice == "R" and user_choice == "S")
        or (computer_choice == "S" and user_choice == "P")
        or (computer_choice == "P" and user_choice == "R")
    ):
        print("Computer wins!")
        return "Computer"
    print("You win!")
    return "User"


def play_again():
    return (
        input("Do you want to play again? (Y for yes, N for no): ").strip().upper()
        == "Y"
    )


def play_rock_paper_scissors(rounds=3):
    user_wins = 0
    computer_wins = 0
    ties_wins = 0

    for round_games in range(1, rounds + 1):
        print(f"\nRound {round_games}:")
        user_choice = get_user_choice()
        computer_choice = get_computer_choice()
        result = get_rock_paper_scissors_result(computer_choice, user_choice)

        if result == "User":
            user_wins += 1
        elif result == "Computer":
            computer_wins += 1
        else:
            ties_wins += 1

    print(f"Score - You: {user_wins}, Computer: {computer_wins}, Ties: {ties_wins}")

    if user_wins > computer_wins:
        print("Congratulations! You are the overall winner!")
    elif user_wins < computer_wins:
        print("Computer is the overall winner!")
    else:
        print("It's a tie!")

    if play_again():
        play_rock_paper_scissors()
    else:
        print("Thanks for playing!")


play_rock_paper_scissors()