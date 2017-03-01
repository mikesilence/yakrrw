'use strick';

const UPDATE_COUNT = 'UPDATE_COUNT';

export function updateCount(count) {
  return {
    type: UPDATE_COUNT,
    count
  };
}
