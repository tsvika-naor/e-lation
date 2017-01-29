import '@ngrx/core/src/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Actions, ActionTypes } from './feed.actions';


export interface State {
  posts: Array<Post>;
  filters: Array<string>;
};

const initialState: State = {
  posts: [],
  filters: []
};

export function feedReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.L_GET_FEED: {
      return { ...state, posts: [...action.payload] };
    }

    case ActionTypes.L_LIKE_POST: {
      let tempArr = [...state.posts];
      let index = tempArr.findIndex(post => post._id === action.payload._id);
      tempArr[index].likes = action.payload.likes;

      return { ...state, posts: tempArr };
    }

    case ActionTypes.L_LIKE_COMMENT: {
      let tempArr = [...state.posts];
      let postIndex = tempArr.findIndex(post => post._id === action.payload.subject);
      let commentIndex = tempArr[postIndex].comments.findIndex(comment => comment._id === action.payload._id);
      tempArr[postIndex].comments[commentIndex].likes = action.payload.likes;

      return { ...state, posts: tempArr };
    }

    case ActionTypes.L_LIKE_SUBCOMMENT: {
      let tempArr = [...state.posts];
      let postIndex = tempArr.findIndex(post => post._id === action.payload.subject);
      let commentIndex = tempArr[postIndex].comments.findIndex(comment => comment._id === action.payload.parent);
      let subCommentIndex = tempArr[postIndex].comments[commentIndex].comments.findIndex(comment => comment._id === action.payload._id);
      tempArr[postIndex].comments[commentIndex].comments[subCommentIndex].likes = action.payload.likes;

      return { ...state, posts: tempArr };
    }

    case ActionTypes.L_POST_COMMENT: {
      let tempArr = [...state.posts];
      let postIndex = tempArr.findIndex(post => post._id === action.payload.subject);

      if (action.payload.parent === null || typeof action.payload.parent === "undefined") {
        let commentIndex = tempArr[postIndex].comments.findIndex(comment => comment._id === action.payload._id);
        tempArr[postIndex].comments[commentIndex].comments.push(action.payload);
      } else {
        let commentIndex = tempArr[postIndex].comments.findIndex(comment => comment._id === action.payload.parent);
        let subCommentIndex = tempArr[postIndex].comments[commentIndex].comments.findIndex(comment => comment._id === action.payload._id);
        tempArr[postIndex].comments[commentIndex].comments[subCommentIndex].comments.push(action.payload);
      }

      return { ...state, posts: tempArr };
    }

    default: {
      return state;
    }
  }
}