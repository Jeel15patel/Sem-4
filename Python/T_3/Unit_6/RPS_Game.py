# Rock, Paper, Scissors Game
# A program that plays the game of Rock, Paper, Scissors with you.

import random

user_wins = 0
computer_wins = 0
ties_wins = 0


def get_user_choice():
    global user_wins, computer_wins, ties_wins
    print("User Wins:", user_wins)
    print("Computer Wins:", computer_wins)
    print("Ties:", ties_wins)
    print("Enter R for Rock, P for Paper, S for Scissors")
    user_choice = input("Your choice: ").strip().upper()
    while user_choice not in ("R", "P", "S"):
        print("I don't understand that!")
        user_choice = input("Your choice: ").strip().upper()
    return user_choice


def get_computer_choice():
    computer_choice_number = random.randrange(3)
    if computer_choice_number == 0:
        computer_choice = "R"
    elif computer_choice_number == 1:
        computer_choice = "P"
    else:
        computer_choice = "S"
    return computer_choice


def get_rock_paper_scissors_result(computer_choice, user_choice):
    global user_wins, computer_wins, ties_wins
    print("Computer's choice:", computer_choice)
    if computer_choice == user_choice:
        print("Tie!")
        ties_wins += 1
    elif (
        (computer_choice == "R" and user_choice == "S")
        or (computer_choice == "S" and user_choice == "P")
        or (computer_choice == "P" and user_choice == "R")
    ):
        print("Computer wins!")
        computer_wins += 1
    else:
        print("You win!")
        user_wins += 1


def play_again():
    print(f"Score - You: {user_wins}, Computer: {computer_wins}, Ties: {ties_wins}")
    print("Do you want to play again?")
    answer = input("Y for yes, N for no: ").strip().upper()
    while answer not in ("Y", "N"):
        print("I don't understand that!")
        answer = input("Y for yes, N for no: ").strip().upper()
    return answer


def play_rock_paper_scissors(rounds=3):
    global user_wins, computer_wins, ties_wins
    user_wins = 0 ; computer_wins = 0 ; ties_wins = 0
    for round_games in range(1, rounds + 1):
        print(f"\nRound {round_games}:")
        user_choice = get_user_choice()
        computer_choice = get_computer_choice()
        get_rock_paper_scissors_result(computer_choice, user_choice)
        
    if user_wins > computer_wins:
        print("Congratulations! You are the overall winner!")
    elif user_wins < computer_wins:
        print("Computer is the overall winner!")
    else:
        print("It's a tie!")
        
    answer = play_again()
    if answer == "Y":
        play_rock_paper_scissors()
    else:
        print("Thanks for playing!")


play_rock_paper_scissors()