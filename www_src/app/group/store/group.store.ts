import { Actions, ActionTypes } from './group.actions';
import { safeAction } from '../../shared/utils';

export interface State {
  _id: ObjectId;
  owner: User;
  provider: Provider;
  admins: Array<User>;
  members: Array<User>;
  name: String;
  description: String;
  avatar: MediaObject;
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

function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.L_GET_GROUP: {
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

    case ActionTypes.L_UPDATE_GROUP: {
      return action.payload;
    }

    case ActionTypes.L_NEW_POST: {
      return safeAction(action, state, (payload: Post, newState) => {
        newState.posts.unshift(payload);
        return newState;
      });
    }

    case ActionTypes.L_LIKE_POST: {
      return safeAction(action, state, (payload: Post, newState) => {
        const index = newState.posts.findIndex(post => post._id === payload._id);
        newState.posts[index].likes = payload.likes.slice();
        return newState;
      });
    }

    case ActionTypes.L_LIKE_COMMENT: {
      return safeAction(action, state, (payload: UserComment, newState) => {
        const postIndex = newState.posts.findIndex(post => post._id === payload.subject);
        const commentIndex = newState.posts[postIndex].comments.findIndex(comment => comment._id === payload._id);
        newState.posts[postIndex].comments[commentIndex].likes = payload.likes.slice();
        return newState;
      });
    }

    case ActionTypes.L_LIKE_SUBCOMMENT: {
      return safeAction(action, state, (payload: UserComment, newState) => {
        const postIndex = newState.posts.findIndex(post => post._id === payload.subject);
        const commentIndex = newState.posts[postIndex].comments.findIndex(comment => comment._id === payload.parent);
        const subCommentIndex = newState.posts[postIndex]
          .comments[commentIndex].comments.findIndex(comment => comment._id === payload._id);
        newState.posts[postIndex].comments[commentIndex].comments[subCommentIndex].likes = payload.likes.slice();
        return newState;
      });
    }

    case ActionTypes.L_POST_COMMENT: {
      return safeAction(action, state, (payload: UserComment, newState) => {
        const postIndex = newState.posts.findIndex(post => post._id === payload.subject);
        if (payload.parent === null || typeof payload.parent === 'undefined') {
          newState.posts[postIndex].comments.push(payload);
        } else {
          const commentIndex = newState.posts[postIndex].comments.findIndex(comment => comment._id === payload.parent);
          newState.posts[postIndex].comments[commentIndex].comments.push(payload);
        }

        return newState;
      });
    }

    default: {
      return state;
    }
  }
}

export const groupReducer = { group: reducer };
