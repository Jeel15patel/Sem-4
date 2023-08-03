# Drawing Line Using Mouse Clicks

import SimpleGUICS2Pygame.simpleguics2pygame as simple

# Using set_mousedrag_handler()

WIDTH = 600
HEIGHT = 400
points = [(WIDTH / 2, HEIGHT / 2)]


def DrawHandler(canvas):
    canvas.draw_polyline(points, 5, "Red")


def MouseClick(pos):
    if pos != points[-1]:
        points.append(pos)


def DragHandler(pos):
    if pos != points[-1]:
        points.append(pos)


def RestartHandler():
    global points
    p = points[-1]
    points = [p]


frame = simple.create_frame("Drawing Line Using Mouse Clicks", WIDTH, HEIGHT)
frame.add_button("Restart", RestartHandler, 100)
# frame.set_mouseclick_handler(MouseClick)
frame.set_mousedrag_handler(DragHandler)
frame.set_draw_handler(DrawHandler)
frame.start()


# --------------------------------------------------------------------------------

# Using set_mouseclick_handler()

# import SimpleGUICS2Pygame.simpleguics2pygame as simple

# # Global Variables
# WIDTH = 600
# HEIGHT = 400
# points = [(WIDTH / 2, HEIGHT / 2)]


# def DrawHandler(canvas):
#     canvas.draw_polyline(points, 5, "Red")


# def MouseClick(pos):
#     if pos != points[-1]:
#         points.append(pos)

# def RestartHandler():
#     global points
#     p = points[-1]
#     points = [p]


# frame = simple.create_frame("Drawing Line Using Mouse Clicks", WIDTH, HEIGHT)
# frame.add_button("Restart", RestartHandler, 100)
# frame.set_mouseclick_handler(MouseClick)
# frame.set_draw_handler(DrawHandler)
# frame.start()
