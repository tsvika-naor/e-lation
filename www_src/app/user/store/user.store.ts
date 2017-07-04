import { Actions, ActionTypes } from './user.actions';
import { ActionTypes as authActions } from '../../auth';
import { safeAction } from '../../shared/utils';


export interface State {
    _id: ObjectId;
    firstName: String;
    lastName: String;
    email: String;
    phone: String;
    gender: Gender;
    interests: Array<String>;
    birthday: Date;
    avatar: MediaObject;
    address: Address;
    friends: Array<User>;
    followers: Array<User>;
    posts: Array<Post>;
    isProvider: Boolean;
};

const initialState: State = {
    _id: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    gender: null,
    interests: [],
    birthday: null,
    avatar: {
        mimeType: null,
        data: null
    },
    address: null,
    friends: [],
    followers: [],
    posts: [],
    isProvider: false
};

function reducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.L_GET_USER: {
            return safeAction(action, state, (payload: User, newState) => {
                return Object.assign(newState, payload);
            });
        }

        case ActionTypes.L_USER_UPDATE: {
            return safeAction(action, state, (payload: User, newState) => {
                return Object.assign(newState, payload);
            });
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

export const userReducer = { user: reducer };
