# Ball Control with Velocity

import SimpleGUICS2Pygame.simpleguics2pygame as simple

width = 600
height = 400
radius = 20
position = [width / 2, height / 2]

velocity = [0, 0]


def DrawHandler(canvas):
    position[0] += velocity[0]
    position[1] += velocity[1]
    
    if position[0] - radius <= 0:
        velocity[0] = -velocity[0]
        
    if position[0] >= (width - radius):
        velocity[0] = -velocity[0]
        
    if position[1] - radius <= 0:
        velocity[1] = -velocity[1]
        
    if position[1] >= (height - radius):
        velocity[1] = -velocity[1]
    
    canvas.draw_circle(position, radius, 5, "red", "white")


def KeyDownHandler(key):
    global velocity
    if key == simple.KEY_MAP["left"]:
        velocity[0] -= 1
    elif key == simple.KEY_MAP["right"]:
        velocity[0] += 1
    elif key == simple.KEY_MAP["up"]:
        velocity[1] -= 1
    elif key == simple.KEY_MAP["down"]:
        velocity[1] += 1


frame = simple.create_frame("Ball Velocity Control", width, height)
frame.set_draw_handler(DrawHandler)
frame.set_keydown_handler(KeyDownHandler)
frame.start()
