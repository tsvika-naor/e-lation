import '@ngrx/core/src/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Actions, ActionTypes } from './group.actions';


export interface State {
  _id: ObjectId,
  owner: User,
  provider: Provider,
  admins: Array<User>,
  members: Array<User>,
  name: String,
  description: String,
  groupType: Array<String>,
  address: Address
};

const initialState: State = {
  _id: null,
  owner: {firstName: "", lastName: ""},
  provider: {user: {firstName: "", lastName: ""}},
  admins: [],
  members: [],
  name: null,
  description: null,
  groupType: [],
  address: null
};

export function groupReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.L_ADD_MEMBER: {

      let newState = { ...state, members: [...state.members, action.payload as User] };
      return newState;
    }


    case ActionTypes.L_ADD_ADMIN: {

      let newState = { ...state, members: [...state.members, action.payload as User] };
      return newState;
    }


    case ActionTypes.L_REMOVE_MEMBER: {

      return { ...state, members: [...state.members, action.payload] };
    }

    case ActionTypes.L_REMOVE_MEMBER: {

      return { ...state, members: [...state.members, action.payload] };
    }

    case ActionTypes.S_ADD_MEMBER: {

      let newState = { ...state, members: [...state.members, action.payload as User] };
      return newState;
    }


    case ActionTypes.S_ADD_ADMIN: {

      let newState = { ...state, members: [...state.members, action.payload as User] };
      return newState;
    }


    case ActionTypes.S_REMOVE_MEMBER: {

      return { ...state, members: [...state.members, action.payload] };
    }

    case ActionTypes.S_REMOVE_ADMIN: {

      return { ...state, members: [...state.members, action.payload] };
    }

    default: {
      return state;
    }
  }
}