// reducer.js
import { FETCH_WEATHER_START, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAIL } from './Actions';

// Initial state
const initialState = {
  data: {},
  loading: false,
  error: null,
};

// Reducer function to handle actions and update state
export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_START:
      return { ...state, loading: true, error: null };
    case FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, data: { ...state.data, [action.payload.city]: action.payload.data }, error: null };
    case FETCH_WEATHER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
