import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  createEmptyBoard,
  getRandomTetromino,
  rotateTetromino,
  checkCollision,
  mergeTetromino,
  clearLines,
  calculateScore,
  calculateLevel,
  getDropSpeed,
  TETROMINOES
} from './tetris';

describe('createEmptyBoard', () => {
  test('creates a board with correct dimensions', () => {
    const board = createEmptyBoard();
    expect(board.length).toBe(BOARD_HEIGHT);
    expect(board[0].length).toBe(BOARD_WIDTH);
  });

  test('all cells are empty', () => {
    const board = createEmptyBoard();
    board.forEach(row =>
      row.forEach(cell => {
        expect(cell.filled).toBe(false);
        expect(cell.color).toBe('');
      })
    );
  });
});

describe('getRandomTetromino', () => {
  test('returns a valid tetromino type', () => {
    const tet = getRandomTetromino();
    expect(Object.keys(TETROMINOES)).toContain(tet.type);
  });

  test('tetromino starts at top center', () => {
    const tet = getRandomTetromino();
    expect(tet.position.y).toBe(0);
  });
});

describe('rotateTetromino', () => {
  test('rotates a 3x3 matrix correctly', () => {
    const tet = {
      type: 'T',
      shape: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
      ],
      color: '',
      position: { x: 0, y: 0 }
    };

    const rotated = rotateTetromino(tet);

    expect(rotated).toEqual([
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0]
    ]);
  });
});

describe('checkCollision', () => {
  test('detects collision with left wall', () => {
    const board = createEmptyBoard();
    const tet = getRandomTetromino();
    tet.position.x = -1;

    expect(checkCollision(board, tet)).toBe(true);
  });

  test('detects collision with filled cell', () => {
    const board = createEmptyBoard();
    board[1][1].filled = true;

    const tet = getRandomTetromino();
    tet.position = { x: 1, y: 0 };

    expect(checkCollision(board, tet, 0, 1)).toBe(true);
  });
});

describe('mergeTetromino', () => {
  test('merges tetromino into board', () => {
    const board = createEmptyBoard();
    const tet = getRandomTetromino();
    tet.position = { x: 0, y: 0 };

    const merged = mergeTetromino(board, tet);

    let filledCount = 0;
    merged.forEach(row =>
      row.forEach(cell => {
        if (cell.filled) filledCount++;
      })
    );

    const originalFilled = tet.shape.flat().filter(v => v === 1).length;
    expect(filledCount).toBe(originalFilled);
  });
});

describe('clearLines', () => {
  test('clears a full line', () => {
    const board = createEmptyBoard();
    board[19] = board[19].map(() => ({ filled: true, color: 'red' }));

    const { newBoard, linesCleared } = clearLines(board);

    expect(linesCleared).toBe(1);
    expect(newBoard[0].every(c => !c.filled)).toBe(true);
  });
});

describe('calculateScore', () => {
  test('calculates correct score', () => {
    expect(calculateScore(1, 2)).toBe(200);
    expect(calculateScore(4, 1)).toBe(800);
  });
});

describe('calculateLevel', () => {
  test('level increases every 10 lines', () => {
    expect(calculateLevel(0)).toBe(1);
    expect(calculateLevel(10)).toBe(2);
    expect(calculateLevel(25)).toBe(3);
  });
});

describe('getDropSpeed', () => {
  test('speed decreases with level but not below 100', () => {
    expect(getDropSpeed(1)).toBe(1000);
    expect(getDropSpeed(5)).toBe(600);
    expect(getDropSpeed(20)).toBe(100);
  });
});
