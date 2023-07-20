# WAP to genrate a random sententes using 

import random

def Gen_sent():
    articles = ["The" , "A" , "An"]
    nouns = ["cat","dog","car","apple","book"]
    verbs = ["sang","ran","jumped","saw","ate","walked"]
    adverbs=["loudly","quietly","well","badly"]
    senctence=random.choice(articles)+" "+random.choice(nouns)+" "+random.choice(verbs)+" "+random.choice(adverbs)
    print(senctence.title())
    
Gen_sent()