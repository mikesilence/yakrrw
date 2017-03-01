'use strick';

const UPDATE_COUNT = 'UPDATE_COUNT';

export default function updateCount(count) {
  return {
    type: UPDATE_COUNT,
    count
  };
}
