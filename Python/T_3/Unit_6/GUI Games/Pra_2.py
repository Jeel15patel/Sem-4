"""
This is a simple calculator program that takes two numbers as input and performs addition,
subtraction, multiplication, and division operations on them.

:param inp: The parameter "inp" is used as the input value for the number entered by the user. It is
passed to the input handler functions "InputHandlerNum1" and "InputHandlerNum2" when the user enters
a number in the input fields
"""

import SimpleGUICS2Pygame.simpleguics2pygame as simple

num1 = 0
num2 = 0
ans = 0


def InputHandlerNum1(inp):
    global num1
    num1 = int(inp)


def InputHandlerNum2(inp):
    global num2
    num2 = int(inp)


def add():
    global num1, num2, ans
    ans = num1 + num2


def sub():
    global num1, num2, ans
    ans = num1 - num2


def mul():
    global num1, num2, ans
    ans = num1 * num2


def div():
    global num1, num2, ans
    ans = num1 / num2


def draw_handler(canvas):
    canvas.draw_text(str(ans), (250, 250), 50, "Red")


frames = simple.create_frame("Calculator Pra_2", 500, 500, 200)
frames.add_input("Enter a Number 1 ", InputHandlerNum1, 100)
frames.add_input("Enter a Number 2 ", InputHandlerNum2, 100)
frames.add_button("Add", add, 100)
frames.add_button("Sub", sub, 100)
frames.add_button("Mul", mul, 100)
frames.add_button("Div", div, 100)
frames.set_draw_handler(draw_handler)
frames.start()
