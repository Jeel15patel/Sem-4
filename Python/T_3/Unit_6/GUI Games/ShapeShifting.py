import SimpleGUICS2Pygame.simpleguics2pygame as simple
import random

shapes = ["circle", "square", "triangle"]
colors = ["red", "green", "blue", "yellow", "white", "black", "purple"]
fill = False
canvas_size = 100
canvas_height = 500
canvas_width = 500
color_index = len(colors) // 2
shapes_index = len(shapes) // 2


def DrawHandler(canvas):
    if shapes[shapes_index] == "square":
        x = canvas_width // 2 - canvas_size // 2
        y = canvas_height // 2 - canvas_size // 2

        if fill:
            canvas.draw_polygon([
                (x, y),
                (x + canvas_size, y),
                (x + canvas_size, y + canvas_size),
                (x, y + canvas_size)], 5,
                colors[color_index],
                colors[color_index]
            )
        else:
            canvas.draw_polygon([
                (x, y),
                (x + canvas_size, y),
                (x + canvas_size, y + canvas_size),
                (x, y + canvas_size)], 5,
                colors[color_index]
            )

    elif shapes[shapes_index] == "circle":
        if fill:
            canvas.draw_circle(
                (canvas_width / 2, canvas_height / 2),
                canvas_size / 2, 5,
                colors[color_index],
                colors[color_index]
            )
        else:
            canvas.draw_circle(
                (canvas_width / 2, canvas_height / 2),
                canvas_size / 2, 5,
                colors[color_index]
            )

    elif shapes[shapes_index] == "triangle":
        x = canvas_width // 2 - canvas_size // 2
        y = canvas_height // 2 - canvas_size // 2

        if fill:
            canvas.draw_polygon([
                (x, y + canvas_size),
                (x + canvas_size, y + canvas_size),
                (x + canvas_size / 2, y)], 5,
                colors[color_index],
                colors[color_index]
            )
        else:
            canvas.draw_polygon([
                (x, y + canvas_size),
                (x + canvas_size, y + canvas_size),
                (x + canvas_size / 2, y)], 5,
                colors[color_index]
            )


def KeyHandler(key):
    global canvas_size, color_index, shapes_index, fill
    if key == simple.KEY_MAP["f"]:
        fill = not fill

    elif key == simple.KEY_MAP["s"]:
        if shapes_index > 0:
            shapes_index -= 1

    elif key == simple.KEY_MAP["d"]:
        if shapes_index < len(shapes) - 1:
            shapes_index += 1

    elif key == simple.KEY_MAP["z"]:
        if canvas_size > 10:
            canvas_size -= 10

    elif key == simple.KEY_MAP["x"]:
        if canvas_size < 200:
            canvas_size += 10

    elif key == simple.KEY_MAP["c"]:
        if color_index > 0:
            color_index -= 1

    elif key == simple.KEY_MAP["v"]:
        if color_index < len(colors) - 1:
            color_index += 1


frames = simple.create_frame("Shape Selection", 500, 500)
frames.set_keydown_handler(KeyHandler)
frames.set_draw_handler(DrawHandler)
frames.add_label("Shape: s and d")
frames.add_label("Fill: f")
frames.add_label("Size: z and x")
frames.add_label("Color: c and v")
frames.start()
