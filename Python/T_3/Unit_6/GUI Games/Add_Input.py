import SimpleGUICS2Pygame.simpleguics2pygame as simple

clolors = "White"


def input_handler(inp):
    global clolors
    clolors = inp


def draw_handler(canvas):
    frames.set_canvas_background(clolors)


frames = simple.create_frame("Input", 500, 500, 200)
inp = frames.add_input("Enter a Color Name ", input_handler, 100)
frames.set_draw_handler(draw_handler)
frames.start()
