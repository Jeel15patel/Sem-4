import SimpleGUICS2Pygame.simpleguics2pygame as simple

# --------------------------------------------------------

"""The code is creating a simple graphical user interface (GUI) using the SimpleGUICS2Pygame library inPython.
The code is creating a frame with a title of “My Frame” and a size of 200 pixels by 200 pixels.
canvas.draw_text :- It use for Font size, Font color, Font style, Font position.
frame.set_canvas_background :- It use for background color.
canvas.draw_line :- It use for draw line.
canvas.draw_polyline :- It use for draw line with multiple points.
canvas.draw_polygon :- It use for draw polygon with multiple points. ( It connect the last point to first point)
canvas.draw_circle :- It use for draw circle with center point and radius.
frame.add_label :- It use for add lable in frame.
"""
# --------------------------------------------------------

# mycoloes = ["Red", "Green", "Blue", "Yellow"]
# t = 0


# def timer_handler():
#     global t
#     t += 1
#     if t == 4:
#         t = 0


# def draw_handler(canvas):
#     frame.set_canvas_background(mycoloes[t])
#     canvas.draw_text(mycoloes[t], (50, 50), 50, "Black")


# timers = simple.create_timer(500, timer_handler)
# frame = simple.create_frame("First Frame", 200, 200)
# frame.set_draw_handler(draw_handler)
# timers.start()
# frame.start()

# --------------------------------------------------------
# draw_line

# def draw_handler(canvas):
#     canvas.draw_line((10, 20), (60, 60), 12, "Red")
#     canvas.draw_line([50, 50], [150, 150], 15, "Green")


# frame = simple.create_frame("Line Frame", 500, 500, 200)
# frame.set_draw_handler(draw_handler)
# frame.start()

# --------------------------------------------------------
# draw_polyline

# def draw_handler(canvas):
#     canvas.draw_polyline([(50, 100), (42, 446), (678, 800), (200, 250)], 5, "Red")


# frame = simple.create_frame("Polyline Frame", 500, 500, 200)
# frame.set_draw_handler(draw_handler)
# frame.start()

# --------------------------------------------------------
# draw_polygon

# def draw_handler(canvas):
#     canvas.draw_polygon([(50, 100), (42, 446), (346, 467), (200, 250)], 5, "Red", "Green")


# frame = simple.create_frame("Polygon Frame", 500, 500, 200)
# frame.set_draw_handler(draw_handler)
# frame.start()

# --------------------------------------------------------
# draw_circle

# def draw_handler(canvas):
#     canvas.draw_circle((100, 100), 50, 2, "Red", "yellow")
#     canvas.draw_circle((250, 250), 200, 5, "Red", "yellow")


# frame = simple.create_frame("Circle Frame", 500, 500, 200)
# frame.set_draw_handler(draw_handler)
# frame.start()

# --------------------------------------------------------
# Frame with lable

# frame = simple.create_frame("ConntectLine Frame", 500, 500, 200)
# lable1 = frame.add_label("Hello")
# lable2 = frame.add_label("World",100)
# frame.start()

# --------------------------------------------------------


# def draw_handler(canvas):
#     pass


# def button_handler1():
#     frame.set_canvas_background("Red")


# def button_handler2():
#     frame.set_canvas_background("Green")


# def button_handler3():
#     frame.set_canvas_background("Blue")


# frame = simple.create_frame("Button Frame", 500, 500, 200)
# button1 = frame.add_button("Red", button_handler1)
# button2 = frame.add_button("Green", button_handler2, 50)
# button3 = frame.add_button("Blue", button_handler3, 100)
# frame.set_draw_handler(draw_handler)
# frame.start()

# --------------------------------------------------------


def timer_handler():
    print("Demo timer handler")


def start():
    frame.add_label("Start Times")
    timers.start()


def stop():
    frame.add_label("Stop Times")
    timers.stop()


timers = simple.create_timer(1000, timer_handler)
frame = simple.create_frame("Demo Frame", 500, 500, 200)
button1 = frame.add_button("Start", start, 100)
button2 = frame.add_button("Stop", stop, 100)
frame.start()
