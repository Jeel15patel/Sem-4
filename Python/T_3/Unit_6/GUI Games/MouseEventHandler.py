import SimpleGUICS2Pygame.simpleguics2pygame as Simple
import math

# def click(pos):
#     print(pos)

# frames = Simple.create_frame("Mouse Click", 300, 300)
# # frames.set_mouseclick_handler(click)
# frames.set_mousedrag_handler(click)
# frames.start()


# ----------------------------------------------------

# Ball Control with Velocity by using mouse click


width = 300
height = 300
radius = 20
ball_pos = [width / 2, height / 2]
ball_color = "white"


def DrawHandler(canvas):
    canvas.draw_circle(ball_pos, radius, 2, "red", "white")


def distance(p, q):
    return math.sqrt((p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2)


def ClickMouse(pos):
    global ball_pos, ball_color
    if distance(pos, ball_pos) < radius:
        ball_color = "red" if ball_color == "white" else "white"
    else:
        ball_pos = list(pos)


def MoveMouse(pos):
    global ball_pos
    ball_pos = list(pos)


frame = Simple.create_frame("HII", width, height)
frame.set_draw_handler(DrawHandler)
frame.set_mouseclick_handler(ClickMouse)
frame.set_mousedrag_handler(MoveMouse)
frame.start()
