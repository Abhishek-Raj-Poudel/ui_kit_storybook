#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>
#include <unistd.h>

#define WIDTH 80
#define HEIGHT 25

// ball position and direction
int ball_x, ball_y, dx, dy;

// player scores
int player1, player2;

// player paddles
int paddle1_y, paddle2_y;

// game board
char board[HEIGHT][WIDTH];

void init() {
  // initialize random number generator
  srand(time(0));

  // start ball in center of board
  ball_x = WIDTH / 2;
  ball_y = HEIGHT / 2;

  // give ball a random direction
  dx = rand() % 2 ? 1 : -1;
  dy = rand() % 2 ? 1 : -1;

  // initialize scores
  player1 = 0;
  player2 = 0;

  // initialize paddles in center of board
  paddle1_y = paddle2_y = HEIGHT / 2;
}

void draw() {
  // clear the board
  for (int i = 0; i < HEIGHT; i++) {
    for (int j = 0; j < WIDTH; j++) {
      board[i][j] = ' ';
    }
  }

  // draw ball
  board[ball_y][ball_x] = 'O';

  // draw paddles
  for (int i = 0; i < 5; i++) {
    board[paddle1_y + i][0] = '|';
    board[paddle2_y + i][WIDTH - 1] = '|';
  }

  // draw scores
  char str[WIDTH];
  sprintf(str, "%d | %d", player1, player2);
  int str_len = strlen(str);
  for (int i = 0; i < str_len; i++) {
    board[0][(WIDTH - str_len) / 2 + i] = str[i];
  }

  // print the board
  for (int i = 0; i < HEIGHT; i++) {
    for (int j = 0; j < WIDTH; j++) {
      putchar(board[i][j]);
    }
    putchar('\n');
  }
}

void update() {
  // update ball position
  ball_x += dx;
  ball_y += dy;

  // check for collisions with walls
  if (ball_x <= 0) {
    // ball hit left wall
    player2++;
    ball_x = WIDTH / 2;
    ball_y = HEIGHT / 2;
    dx = 1;
    dy = rand() % 2 ? 1 : -1;
  }
}