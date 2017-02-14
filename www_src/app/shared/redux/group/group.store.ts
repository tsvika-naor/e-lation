import '@ngrx/core/src/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Actions, ActionTypes } from './group.actions';


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
  groupType: Array<String>;
  address: Address;
  posts: Array<Post>;
};

const initialState: State = {
  _id: null,
  owner: null,
  provider: null,
  admins: [],
  members: [],
  name: null,
  description: null,
  avatar: {
    mimeType: null,
    data: null
  },
  groupType: [],
  address: null,
  posts: []
};

export function groupReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.L_GET_GROUP: {
      return action.payload;
    }

    case ActionTypes.L_ADD_MEMBER: {
      let newState = { ...state, members: [...state.members, action.payload] };
      return newState;
    }

    case ActionTypes.L_ADD_ADMIN: {
      let newState = { ...state, members: [...state.members, action.payload] };
      return newState;
    }

    case ActionTypes.L_REMOVE_MEMBER: {
      let tempArr = [...state.members];
      let index = tempArr.findIndex(member => member._id === action.payload);
      tempArr.splice(index, 1);

      return { ...state, members: tempArr };
    }

    case ActionTypes.L_REMOVE_MEMBER: {
      let tempArr = [...state.admins];
      let index = tempArr.findIndex(admin => admin._id === action.payload);
      tempArr.splice(index, 1);

      return { ...state, admins: tempArr };
    }

    case ActionTypes.L_UPDATE_GROUP: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}