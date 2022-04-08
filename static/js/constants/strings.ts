export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['WINNER','POGGERS']
export const GAME_COPIED_MESSAGE = 'Copied results to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters.'
export const WORD_NOT_FOUND_MESSAGE = 'Word not found'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard mode can only be activated at the beginning of a wordle.'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'High Contrast Mode'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `You should use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `The word must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Statistics '
export const GUESS_DISTRIBUTION_TEXT = 'GUESS DISTRIBUTION'
export const NEW_WORD_TEXT = 'Next Wordle:'
export const SHARE_TEXT = 'Share on twitter'
export const TOTAL_TRIES_TEXT = 'Played' 
export const SUCCESS_RATE_TEXT = 'Win %'
export const CURRENT_STREAK_TEXT = 'Current Streak'
export const BEST_STREAK_TEXT = 'Best Streak'
