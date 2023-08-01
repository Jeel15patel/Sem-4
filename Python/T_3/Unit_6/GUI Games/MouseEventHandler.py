import SimpleGUICS2Pygame.simpleguics2pygame as Simple

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
ball_pos = [width/2, height/2]

def draw(canvas):
    canvas.draw_circle(ball_pos, radius, 2, 'red', 'white')

def mousemove(pos):
    global ball_pos
    ball_pos = list(pos)

def click(pos):
    global ball_pos
    ball_pos = list(pos)

frame = Simple.create_frame("HII", width, height)
frame.set_draw_handler(draw)
frame.set_mouseclick_handler(click)
frame.set_mousedrag_handler(mousemove)
frame.start()

