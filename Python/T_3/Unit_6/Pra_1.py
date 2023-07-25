import SimpleGUICS2Pygame.simpleguics2pygame as simple


def draw_handler(canvas):
    canvas.draw_polyline([(50, 50), (450, 450)], 5, "Red")
    canvas.draw_polyline([(450, 50), (50, 450)], 5, "Red")

    canvas.draw_circle((50, 50), 50, 5, "yellow")
    canvas.draw_circle((450, 450), 50, 5, "yellow")
    canvas.draw_circle((450, 50), 50, 5, "yellow")
    canvas.draw_circle((50, 450), 50, 5, "yellow")

    canvas.draw_polygon([(150, 150), (250, 155)], 5, "orange")
    # canvas.draw_polygon([(145, 145), (350, 145)], 5, "orange")
    # canvas.draw_polygon([(145, 145), (350, 145)], 5, "orange")
    # canvas.draw_polygon([(145, 145), (350, 145)], 5, "orange")


frame = simple.create_frame("Polyline Frame", 500, 500, 200)
frame.set_draw_handler(draw_handler)
frame.start()
