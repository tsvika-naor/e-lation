import '@ngrx/core/src/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Actions, ActionTypes } from './event.actions';


export interface State {
  _id: ObjectId;
  owner: User;
  provider: Provider;
  admins: Array<User>;
  members: Array<User>;
  name: String;
  description: String;
  avatar: {
    mimeType: String,
    data: String
  };
  startDate: Date;
  endDate: Date;
  media: Array<MediaObject>;
  private: Boolean;
  address: Address;
  posts: Array<Post>;
};

const initialState: State = {
  _id: null,
  owner: null,
  provider: null,
  admins: [],
  members: [],
  name: "",
  description: "",
  avatar: {
    mimeType: null,
    data: null
  },
  startDate: null,
  endDate: null,
  media: [],
  private: false,
  address: null,
  posts: []
};

export function eventReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.L_GET_EVENT: {
      return action.payload;
    }

    case ActionTypes.L_ADD_MEMBER: {
      return { ...state, members: [...state.members, action.payload] };
    }

    case ActionTypes.L_ADD_ADMIN: {
      return { ...state, admins: [...state.admins, action.payload] };
    }

    case ActionTypes.L_REMOVE_MEMBER: {
      let tempArr = [...state.members];
      let index = tempArr.findIndex(member => member._id === action.payload);
      tempArr.splice(index, 1);

      return { ...state, members: tempArr };
    }
    case ActionTypes.L_REMOVE_ADMIN: {
      let tempArr = [...state.admins];
      let index = tempArr.findIndex(admin => admin._id === action.payload);
      tempArr.splice(index, 1);

      return { ...state, admins: tempArr };
    }

    case ActionTypes.L_EDIT_EVENT: {
      return action.payload;
    }

    // update,

    default: {
      return state;
    }
  }
}