'use strick';

const initialState = {
  count: 0
};

export default function count(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_COUNT':
      return Object.assign(
        {},
        state,
        { count: action.count }
      );
    default:
      return state;
  }
}
