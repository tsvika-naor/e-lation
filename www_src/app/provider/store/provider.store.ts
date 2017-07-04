import { Actions, ActionTypes } from './provider.actions';
import { safeAction } from '../../shared/utils';

export interface State {
    _id: ObjectId;
    bio: String;
    rank: Number;
    fields: Array<Field>;
    reviews: Array<Review>;
    businessAddress: Address;
    user: User;
};

const initialState: State = {
    _id: null,
    bio: '',
    rank: 0,
    fields: [],
    reviews: [],
    businessAddress: null,
    user: null
};

function reducer(state = initialState, action: Actions): State {
    switch (action.type) {

        case ActionTypes.L_GET_PROVIDER: {
            return action.payload;
        }

        case ActionTypes.L_ADD_REVIEW: {
            return safeAction(action, state, (payload: Provider, newState) => {
                return Object.assign(newState, { rank: payload.rank, reviews: payload.reviews });
            });
        }

        case ActionTypes.L_EDIT_REVIEW: {
            return safeAction(action, state, (payload: Provider, newState) => {
                return Object.assign(newState, { rank: payload.rank, reviews: payload.reviews });
            });
        }

        case ActionTypes.L_DELETE_REVIEW: {
            return safeAction(action, state, (payload: Provider, newState) => {
                return Object.assign(newState, { rank: payload.rank, reviews: payload.reviews });
            });
        }

        case ActionTypes.L_NEW_POST: {
            return safeAction(action, state, (payload: Post, newState) => {
                newState.user.posts.unshift(payload);
                return newState;
            });
        }

        case ActionTypes.L_LIKE_POST: {
            return safeAction(action, state, (payload: Post, newState) => {
                const index = newState.user.posts.findIndex(post => post._id === payload._id);
                newState.user.posts[index].likes = payload.likes.slice();
                return newState;
            });
        }

        case ActionTypes.L_LIKE_COMMENT: {
            return safeAction(action, state, (payload: UserComment, newState) => {
                const postIndex = newState.user.posts.findIndex(post => post._id === payload.subject);
                const commentIndex = newState.user.posts[postIndex].comments.findIndex(comment => comment._id === payload._id);
                newState.user.posts[postIndex].comments[commentIndex].likes = payload.likes.slice();
                return newState;
            });
        }

        case ActionTypes.L_LIKE_SUBCOMMENT: {
            return safeAction(action, state, (payload: UserComment, newState) => {
                const postIndex = newState.user.posts.findIndex(post => post._id === payload.subject);
                const commentIndex = newState.user.posts[postIndex].comments.findIndex(comment => comment._id === payload.parent);
                const subCommentIndex = newState.user.posts[postIndex]
                    .comments[commentIndex].comments.findIndex(comment => comment._id === payload._id);
                newState.user.posts[postIndex].comments[commentIndex].comments[subCommentIndex].likes = payload.likes.slice();
                return newState;
            });
        }

        case ActionTypes.L_POST_COMMENT: {
            return safeAction(action, state, (payload: UserComment, newState) => {
                const postIndex = newState.user.posts.findIndex(post => post._id === payload.subject);
                if (payload.parent === null || typeof payload.parent === 'undefined') {
                    newState.user.posts[postIndex].comments.push(payload);
                } else {
                    const commentIndex = newState.user.posts[postIndex].comments.findIndex(comment => comment._id === payload.parent);
                    newState.user.posts[postIndex].comments[commentIndex].comments.push(payload);
                }

                return newState;
            });
        }

        default: {
            return state;
        }
    }
}

export const providerReducer = { provider: reducer };
