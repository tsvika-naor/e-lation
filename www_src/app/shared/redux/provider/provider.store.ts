import '@ngrx/core/src/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Actions, ActionTypes } from './provider.actions';


export interface State {
  _id: ObjectId,
  bio: String,
  rank: Number,
  reviews: Array<Review>,
  businessAddress: Address,
  user: User,
  showContact: boolean
};

const initialState: State = {
  _id: null,
  bio: "",
  rank: 0,
  reviews: [],
  businessAddress: null,
  user: {firstName: "", lastName: "", avatar: {data: ""}},
  showContact: false
};

export function providerReducer(state = initialState, action: Actions): State {
  switch (action.type) {

    case ActionTypes.TOGGLE_CONTACT: {
      return { ...state, showContact: !state.showContact };
    }

    case ActionTypes.L_GET_PROVIDER: {
      return { ...action.payload, showContact: state.showContact };
    }

    case ActionTypes.L_ADD_REVIEW: {
      return { ...state, reviews: [...state.reviews, action.payload] };
    }

    case ActionTypes.L_EDIT_REVIEW: {
      let tempArr = [...state.reviews];
      let index = tempArr.findIndex(review => review._id === action.payload._id);
      tempArr[index] = action.payload;

      return { ...state, reviews: tempArr };
    }

    case ActionTypes.L_DELETE_REVIEW: {
      let tempArr = [...state.reviews];
      let index = tempArr.findIndex(review => review._id === action.payload);
      tempArr.splice(index, 1);

      return { ...state, reviews: tempArr };
    }

    default: {
      return state;
    }
  }
}