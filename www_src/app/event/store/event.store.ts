import { Actions, ActionTypes } from './event.actions';
import { safeAction } from '../../shared/utils';

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
  name: '',
  description: '',
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

function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.L_GET_EVENT: {
      return action.payload;
    }

    case ActionTypes.L_ADD_MEMBER: {
      return safeAction(action, state, (payload: User, newState) => {
        newState.members.push(payload);
        return newState;
      });
    }

    case ActionTypes.L_ADD_ADMIN: {
      return safeAction(action, state, (payload: User, newState) => {
        newState.admins.push(payload);
        return newState;
      });
    }

    case ActionTypes.L_REMOVE_MEMBER: {
      return safeAction(action, state, (payload: User, newState) => {
        const index = newState.members.findIndex(member => member._id === payload);
        newState.members.splice(index, 1);
        return newState;
      });
    }
    case ActionTypes.L_REMOVE_ADMIN: {
      return safeAction(action, state, (payload: User, newState) => {
        const index = newState.admins.findIndex(admin => admin._id === payload);
        newState.admins.splice(index, 1);
        return newState;
      });
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

export const eventReducer = { event: reducer };
