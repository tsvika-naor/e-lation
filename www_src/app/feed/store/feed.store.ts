import { Observable } from 'rxjs/Observable';
import { Actions, ActionTypes } from './feed.actions';
import { safeAction } from '../../shared/utils';

export interface State {
    posts: Array<Post>;
    post: Post;
};

const initialState: State = {
    posts: [],
    post: null
};

function reducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.L_GET_FEED: {
            return safeAction(action, state, (payload: Array<Post>, newState) => {
                newState.posts = payload.slice();
                return newState;
            });
        }

        case ActionTypes.L_GET_POST: {
            return safeAction(action, state, (payload: Array<Post>, newState) => {
                newState.post = Object.assign(payload);
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

export const feedReducer = { feed: reducer };
