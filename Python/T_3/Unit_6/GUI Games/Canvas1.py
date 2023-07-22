import SimpleGUICS2Pygame.simpleguics2pygame as simple

# --------------------------------------------------------

"""The code is creating a simple graphical user interface (GUI) using the SimpleGUICS2Pygame library inPython.
The code is creating a frame with a title of “My Frame” and a size of 200 pixels by 200 pixels.
canvas.draw_text :- It use for Font size, Font color, Font style, Font position.
frame.set_canvas_background :- It use for background color.
canvas.draw_line :- It use for draw line.
canvas.draw_polyline :- It use for draw line with multiple points.
canvas.draw_polygon :- It use for draw polygon with multiple points. ( It connect the last point to first point)
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


# def draw_handler(canvas):
#     canvas.draw_line((10, 20), (60, 60), 12, "Red")
#     canvas.draw_line([50, 50], [150, 150], 15, "Green")


# frame = simple.create_frame("Line Frame", 500, 500, 200)
# frame.set_draw_handler(draw_handler)
# frame.start()

# --------------------------------------------------------


# def draw_handler(canvas):
#     canvas.draw_polyline([(50, 100), (42, 446), (678, 800), (200, 250)], 5, "Red")


# frame = simple.create_frame("ConntectLine Frame", 500, 500, 200)
# frame.set_draw_handler(draw_handler)
# frame.start()

# --------------------------------------------------------


# def draw_handler(canvas):
#     canvas.draw_polygon([(50, 100), (42, 446), (678, 800), (200, 250)], 5, "Red")


# frame = simple.create_frame("ConntectLine Frame", 500, 500, 200)
# frame.set_draw_handler(draw_handler)
# frame.start()

# --------------------------------------------------------
