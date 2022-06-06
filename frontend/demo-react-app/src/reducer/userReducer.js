import { TYPES } from '../actions/userActions'

export const userInitialState = {
  db: [],
}

export const userReducer = (state, action) => {
  switch (action.type) {
    case TYPES.READ_ALL_USER: {
      return {
        ...state,
        db: action.payload.map((user) => user),
      }
    }
    // case TYPES.READ_ONE_USER: {
    //   break
    // }
    case TYPES.CREATE_USER: {
      return {
        ...state,
        db: [...state.db, action.payload],
      }
    }
    case TYPES.UPDATE_USER: {
      let newData = state.db.map((user) =>
        user.id_user === action.payload.id_user ? action.payload : user
      )
      return {
        ...state,
        db: newData,
      }
    }
    case TYPES.DELETE_USER: {
      let newData = state.db.filter((user) => user.id_user !== action.payload)
      return {
        ...state,
        db: newData,
      }
    }
    case TYPES.NO_DATA: {
    }
    default:
      return state
  }
}
