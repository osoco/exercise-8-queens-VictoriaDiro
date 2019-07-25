# Exercise: 8 queens

Let's try to find a solution to this problem on paper, in an OOP style.

# Context

We want to place the maximum number of queens in a chess board, so they don't threat each other.

The provided API is as follows:

## Board

Represents a chess board with pieces in it. In our context, it will only contain Queens.

```
withQueen(Queen): Board
```

You can place a new Queen, and you'll get a new board.

```
threats(): boolean
```

You can use this method to check if the Board contains any threat.

```
empty(Position): boolean
```

This method can be used to check whether you can place a new Queen in given position.

## Queen

In our model, a Queen represents the piece in a certain position.

```
position(): Position
```

You can ask the Queen her position, if you need to.

```
board(): Board
```

You can get the information about the Board.

## Position

Represents a position in the chess board.

```
row(): Number
```

A number ranging from 1 to 8.

```
column(): Number
```

A number ranging from 1 to 8. We won't use standard chess notation.

```
threats(Position): boolean
```

You can use this method to check whether this position threats another position, according to Queen rules.

# Assignment 1

## QueenSolver

Write an "algorithm" (think of it as a sequence of actions or recipe) resembling the following API:

```
solve(): void
result(): Solution
```

## Solution

Solution, on the other hand, can be inspected to find the solution.

```
success(): boolean
```

It returns whether it could find a solution.

```
solutions(): List<Queen>
```

It returns a list or an array of Queen instances. If its size is not 8, it's considered not successful.

# Assignment 2

Try to generalize the previous solution to allow an arbitrary board size, not only 8.
