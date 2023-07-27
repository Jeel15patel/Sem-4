import SimpleGUICS2Pygame.simpleguics2pygame as simple
import random


x = 0
y = 0
message = "Hello World"


def timer_handler():
    global x, y
    x = random.randint(0, 400)  # Change the random range as needed
    y = random.randint(0, 400)  # Change the random range as needed


def draw_handler(canvas):
    global x, y
    canvas.draw_text(message, (x, y), 30, "Red")


def start():
    timers.start()


def stop():
    timers.stop()


timers = simple.create_timer(
    200, timer_handler
)  # Change the timer interval as needed (in milliseconds)
frame = simple.create_frame("Hello and Goodbye", 500, 500)
button1 = frame.add_button("Start", start, 100)
button2 = frame.add_button("Stop", stop, 100)
frame.set_draw_handler(draw_handler)
timers.start()
frame.start()


# ---------------------------------------------------

# x = 0
# y = 0
# message = "Hello World"


# def timer_handler():
#     global y , x
#     y += 10

#     if y == 500:
#         y = 0


# def draw_handler(canvas):
#     global y
#     canvas.draw_text(message, (50, y), 30, "Red")


# def start():
#     timers.start()


# def stop():
#     timers.stop()


# timers = simple.create_timer(200, timer_handler)
# frame = simple.create_frame("Hello and Goodbye", 500, 500)
# button1 = frame.add_button("Start", start, 100)
# button2 = frame.add_button("Stop", stop, 100)
# frame.set_draw_handler(draw_handler)
# timers.start()
# frame.start()
