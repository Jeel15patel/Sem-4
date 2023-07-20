# WAP to shuffle a given deck of card random module.

import random


def Shuffle_Deck(deck):
    random.shuffle(deck)
    return deck
    suite = ["Hearts", "Diamonds", "Spades", "Clubs"]
    ranks = [
        "Ace",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "Jack",
        "Queen",
        "King",
    ]
    deck = [(rank, suite) for rank in ranks for suite in suite]
    print(deck)
    print()

    Shuffle_Deck = random.shuffle(deck)
    print(Shuffle_Deck)

    print("Shuffle_Deck")

    for card in Shuffle_Deck:
        print(card[0], "of", card[1])
