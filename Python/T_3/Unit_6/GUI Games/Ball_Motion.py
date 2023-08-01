# Ball Motion (2D)

import SimpleGUICS2Pygame.simpleguics2pygame as simple


width = 500
height = 500
radiu = 30
position = [int(width / 2), int(height / 2)]
velocity = [0,1]

def draw(canvas):
    global position, velocity
    position[0] += velocity[0]
    position[1] += velocity[1]
    canvas.draw_circle(position, radiu, 5, "red", "white")
    
frame = simple.create_frame("Ball Motion", width, height)
frame.set_draw_handler(draw)
frame.start()