# TIC TAC TOE GAMES

import SimpleGUICS2Pygame.simpleguics2pygame as simplegui

# Globals
width = 300
height = 300
turn = "X"
won = False
grid = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
x_score = 0
y_score = 0

# Helper Function


def switch_turn():
    global turn, info
    if turn == "X":
        turn = "O"
    else:
        turn = "X"
    info.set_text("Player Turn: " + turn)


# Returns 'True' if a player has won,false otherwise
def check_win():
    for a in range(0, 3):
        if grid[a][0] != " " and grid[a][0] == grid[a][1] == grid[a][2]:
            return True

    for b in range(0, 3):
        if grid[0][b] != " " and grid[0][b] == grid[1][b] == grid[2][b]:
            return True
    if grid[0][0] == grid[1][1] == grid[2][2] and grid[0][0] != " ":
        return True
    if grid[0][2] == grid[1][1] == grid[2][0] and grid[0][2] != " ":
        return True
    else:
        return False


# Event Handlers
def draw_handler(canvas):
    canvas.draw_line((0, height // 3), (width, height // 3), 2, "White")
    canvas.draw_line((0, height // 3 * 2), (width, height // 3 * 2), 2, "White")
    canvas.draw_line((width // 3, 0), (width // 3, height), 2, "White")
    canvas.draw_line((width // 3 * 2, 0), (width // 3 * 2, height), 2, "White")

    for r in range(0, 3):
        for c in range(0, 3):
            canvas.draw_text(
                grid[r][c], [c * width // 3 + 20, r * height // 3 + 80], 80, "White"
            )


def click(pos):
    global won, info, x, y, x_score, y_score
    if not won:
        # Check to see if the click was on a grid line
        if pos[0] % (width // 3) != 0 and pos[1] % (height // 3) != 0:
            r = pos[1] // (height // 3)
            c = pos[0] // (width // 3)

            # check to see if a square is already taken
            if grid[r][c] == " ":
                grid[r][c] = turn

                if check_win():
                    global x_score, y_score
                    won = True
                    info.set_text("Player " + turn + " Wins!")

                    if turn == "X":
                        x_score += 1
                    else:
                        y_score += 1
                    x.set_text("X Score: " + str(x_score))
                    y.set_text("O Score: " + str(y_score))
                else:
                    switch_turn()
    else:
        reset()


def reset():
    global grid, turn, won, info, x, y, x_score, y_score
    grid = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
    turn = "X"
    won = False
    info.set_text("Player turn:" + turn)


def restart():
    global grid, turn, won, info, x, y, x_score, y_score
    grid = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
    turn = "X"
    won = False
    info.set_text("Player turn:" + turn)
    x_score = 0
    y_score = 0
    x.set_text("X Score: " + str(x_score))
    y.set_text("O Score: " + str(y_score))


# Frame
frame = simplegui.create_frame("Tic Tac Toe", width, height)

# Register Event Handler
frame.set_draw_handler(draw_handler)
frame.set_mouseclick_handler(click)
frame.add_button("Reset", reset)
frame.add_button("Restart", restart)
info = frame.add_label("Player Turn")
x = frame.add_label("X Score: ")
y = frame.add_label("O Score: ")
frame.start()
