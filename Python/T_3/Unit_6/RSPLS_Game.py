# Rock,Paper,Scissors,Lizard,Spock Games

import random

def get_user_choice():
    while True:
        user_choice = (
            input(
                "Enter R for Rock, P for Paper, S for Scissors, L for Lizard, V for Spock: "
            )
            .strip()
            .upper()
        )
        if user_choice in ("R", "P", "S", "L", "V"):
            return user_choice
        print("Invalid choice. Please try again.")


def get_computer_choice():
    choices = ["R", "P", "S", "L", "V"]
    return random.choice(choices)


def get_rock_paper_scissors_result(computer_choice, user_choice):
    choices = ["R", "P", "S", "L", "V"]
    difference = (choices.index(computer_choice) - choices.index(user_choice)) % 5

    if difference == 1 or difference == 2:
        return "Computer"
    elif difference == 3 or difference == 4:
        return "User"
    else:
        return "Tie"


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
            print("You win!")
        elif result == "Computer":
            computer_wins += 1
            print("Computer wins!")
        else:
            ties_wins += 1
            print("Tie!")

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
