import '@ngrx/core/src/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Actions, ActionTypes } from './user.actions';


export interface State {
    _id: ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    gender: Gender,
    birthday: Date,
    avatar: {
        mimeType: String,
        data: String
    },
    address: Address,
    isProvider: Boolean,
    provider?: Provider
};

const initialState: State = {
   _id: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    gender: null,
    birthday: null,
    avatar: null,
    address: null,
    isProvider: false,
    provider: null
};

export function userReducer (state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.L_USER_UPDATE: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}