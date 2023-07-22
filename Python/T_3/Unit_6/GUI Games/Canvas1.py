import SimpleGUICS2Pygame.simpleguics2pygame as simple

# --------------------------------------------------------

"""The code is creating a simple graphical user interface (GUI) using the SimpleGUICS2Pygame library inPython.
The code is creating a frame with a title of “My Frame” and a size of 200 pixels by 200 pixels.
draw_text :- It use for Font size, Font color, Font style, Font position.
set_canvas_background :- It use for background color.
"""
# --------------------------------------------------------

mycoloes = ["Red", "Green", "Blue", "Yellow"]
t = 0


def timer_handler():
    global t
    t += 1
    if t == 4:
        t = 0


def draw_handler(canvas):
    frame.set_canvas_background(mycoloes[t])
    canvas.draw_text(mycoloes[t], (50, 50), 50, "Black")


timers = simple.create_timer(500, timer_handler)
frame = simple.create_frame("First Frame", 200, 200, 100)
frame.set_draw_handler(draw_handler)
timers.start()
frame.start()
