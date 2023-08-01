# Ball Position Control

import SimpleGUICS2Pygame.simpleguics2pygame as simple

width = 500
height = 500
position = [int(width / 2), int(height / 2)]

radiu = 20
velocity = 5

def keydown(key):
    global position, velocity
    if key == simple.KEY_MAP["left"]:
        position[0] -= velocity
    elif key == simple.KEY_MAP["right"]:
        position[0] += velocity
    elif key == simple.KEY_MAP["up"]:
        position[1] -= velocity
    elif key == simple.KEY_MAP["down"]:
        position[1] += velocity


def draw(canvas):
    canvas.draw_circle(position, radiu, 5, "red", "white")


frame = simple.create_frame("Ball Position Control", width, height)
frame.set_draw_handler(draw)
frame.set_keydown_handler(keydown)
frame.start()
