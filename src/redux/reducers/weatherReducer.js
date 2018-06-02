import {
  SHOW_DAY
} from '../actions/actionTypes';

const initState = {
  current_city: 0,
  data: {
    boksburg: {
      id: 0,
      name: 'Boksburg',
      country: 'ZA',
      list: [
        {
          date: 1528063200000,
          temp: 23,
          temp_min: 8,
          temp_max: 29,
          weather: 5
        },
        {
          date: 1528149600000,
          temp: 24,
          temp_min: 11,
          temp_max: 28,
          weather: 1
        },
        {
          date: 1528236000000,
          temp: 26,
          temp_min: 12,
          temp_max: 26,
          weather: 4
        },
        {
          date: 1528322400000,
          temp: 25,
          temp_min: 8,
          temp_max: 26,
          weather: 2
        },
        {
          date: 1528408800000,
          temp: 28,
          temp_min: 13,
          temp_max: 30,
          weather: 3
        },
        {
          date: 1528495200000,
          temp: 18,
          temp_min: 8,
          temp_max: 23,
          weather: 4
        },
        {
          date: 1528581600000,
          temp: 17,
          temp_min: 9,
          temp_max: 24,
          weather: 5
        }
      ]
    },
    sandton: {
      id: 1,
      name: 'Sandton',
      country: 'ZA',
      list: [
        {
          date: 1528063200000,
          temp: 24,
          temp_min: 9,
          temp_max: 27,
          weather: 4
        },
        {
          date: 1528149600000,
          temp: 23,
          temp_min: 12,
          temp_max: 29,
          weather: 2
        },
        {
          date: 1528236000000,
          temp: 25,
          temp_min: 12,
          temp_max: 26,
          weather: 3
        },
        {
          date: 1528322400000,
          temp: 25,
          temp_min: 9,
          temp_max: 27,
          weather: 2
        },
        {
          date: 1528408800000,
          temp: 28,
          temp_min: 14,
          temp_max: 31,
          weather: 4
        },
        {
          date: 1528495200000,
          temp: 18,
          temp_min: 8,
          temp_max: 23,
          weather: 4
        },
        {
          date: 1528581600000,
          temp: 17,
          temp_min: 9,
          temp_max: 24,
          weather: 5
        }
      ]
    },
    dbn: {
      id: 2,
      name: 'Durban',
      country: 'ZA',
      list: [
        {
          date: 1528063200000,
          temp: 30,
          temp_min: 12,
          temp_max: 33,
          weather: 2
        },
        {
          date: 1528149600000,
          temp: 31,
          temp_min: 15,
          temp_max: 32,
          weather: 2
        },
        {
          date: 1528236000000,
          temp: 23,
          temp_min: 16,
          temp_max: 28,
          weather: 3
        },
        {
          date: 1528322400000,
          temp: 25,
          temp_min: 13,
          temp_max: 29,
          weather: 2
        },
        {
          date: 1528408800000,
          temp: 28,
          temp_min: 15,
          temp_max: 31,
          weather: 3
        },
        {
          date: 1528495200000,
          temp: 18,
          temp_min: 14,
          temp_max: 28,
          weather: 4
        },
        {
          date: 1528581600000,
          temp: 17,
          temp_min: 9,
          temp_max: 24,
          weather: 5
        }
      ]
    }
  },
  weather_ids: {
    0: {
      name: 'Cloudy',
    },
    1: {
      name: 'Rainy'
    },
    2: {
      name: 'Partly cloudy'
    },
    3: {
      name: 'Sunny'
    },
    4: {
      name: 'Overcast'
    },
    5: {
      name: 'Thunderstorms'
    }
  }
}

export default function weatherReducer(state = initState, action) {
  switch (action.type) {

    case SHOW_DAY:
      return {
        ...state,
        current_day: action.day
      }

    default:
      return state;

  }
}
