webpackJsonp([0,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(11);
/* harmony export (immutable) */ __webpack_exports__["c"] = type;
/* unused harmony export isNullOrUndefined */
/* harmony export (immutable) */ __webpack_exports__["b"] = safeAction;
/* harmony export (immutable) */ __webpack_exports__["a"] = getOptions;

var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[label] = true;
    return label;
}
function isNullOrUndefined(param) {
    return (param !== null || typeof param !== 'undefined');
}
function safeAction(action, state, func) {
    return func(action.payload, Object.assign({}, state));
}
function getOptions() {
    var options = {};
    options.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        provider: localStorage.getItem('provider')
    });
    return options;
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__(231);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__shared_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_shared_effects__ = __webpack_require__(232);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__store_shared_effects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(137);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["c"]; });




//# sourceMappingURL=index.js.map

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_module__ = __webpack_require__(196);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_routes__ = __webpack_require__(197);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_routes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_login_service__ = __webpack_require__(124);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__providers_provider_login_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(68);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__store__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__store__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__store__["c"]; });




//# sourceMappingURL=index.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_module__ = __webpack_require__(235);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_routes__ = __webpack_require__(236);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__user_routes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(76);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["c"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_module__ = __webpack_require__(202);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__event_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_routes__ = __webpack_require__(203);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__event_routes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(70);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["c"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_module__ = __webpack_require__(206);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__feed_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feed_routes__ = __webpack_require__(207);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__feed_routes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(129);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["c"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_module__ = __webpack_require__(210);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__group_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group_routes__ = __webpack_require__(211);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__group_routes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(73);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["c"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_module__ = __webpack_require__(214);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__nav_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(133);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__store__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__store__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__store__["c"]; });


//# sourceMappingURL=index.js.map

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__provider_module__ = __webpack_require__(219);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__provider_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_routes__ = __webpack_require__(220);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__provider_routes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(135);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["c"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facebook_facebook_service__ = __webpack_require__(198);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__facebook_facebook_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__facebook_facebook_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_google_service__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__google_google_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__google_google_service__["b"]; });


//# sourceMappingURL=index.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* unused harmony export AuthSuccessAction */
/* unused harmony export AuthFailAction */
/* unused harmony export LoadUserDataAction */
/* unused harmony export SaveUserAction */
/* unused harmony export LoadUserAction */
/* unused harmony export ToggleActionAction */
/* unused harmony export RegisterAction */
/* unused harmony export LoginAction */
/* unused harmony export LogoutAction */

var ActionTypes = {
    AUTH_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Auth Success'),
    AUTH_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Auth Fail'),
    LOAD_USER_DATA: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Load User Data'),
    SAVE_USER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Save User'),
    LOAD_USER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Load User'),
    TOGGLE_ACTION: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Toggle Action'),
    REGISTER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Register'),
    LOGIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Login'),
    LOGOUT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Logout')
};
var AuthSuccessAction = (function () {
    function AuthSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.AUTH_SUCCESS;
    }
    return AuthSuccessAction;
}());

var AuthFailAction = (function () {
    function AuthFailAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.AUTH_FAIL;
    }
    return AuthFailAction;
}());

var LoadUserDataAction = (function () {
    function LoadUserDataAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_USER_DATA;
    }
    return LoadUserDataAction;
}());

var SaveUserAction = (function () {
    function SaveUserAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.SAVE_USER;
    }
    return SaveUserAction;
}());

var LoadUserAction = (function () {
    function LoadUserAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_USER;
    }
    return LoadUserAction;
}());

var ToggleActionAction = (function () {
    function ToggleActionAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.TOGGLE_ACTION;
    }
    return ToggleActionAction;
}());

var RegisterAction = (function () {
    function RegisterAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.REGISTER;
    }
    return RegisterAction;
}());

var LoginAction = (function () {
    function LoginAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOGIN;
    }
    return LoginAction;
}());

var LogoutAction = (function () {
    function LogoutAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOGOUT;
    }
    return LogoutAction;
}());

//# sourceMappingURL=auth.actions.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_actions__ = __webpack_require__(67);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_store__ = __webpack_require__(201);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_effects__ = __webpack_require__(200);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_effects__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* unused harmony export S_GetEventAction */
/* unused harmony export S_AddMemberAction */
/* unused harmony export S_AddAdminAction */
/* unused harmony export S_RemoveMemberAction */
/* unused harmony export S_RemoveAdminAction */
/* unused harmony export S_EditEventAction */
/* unused harmony export S_NewEventAction */
/* unused harmony export L_GetEventAction */
/* unused harmony export L_AddMemberAction */
/* unused harmony export L_AddAdminAction */
/* unused harmony export L_RemoveMemberAction */
/* unused harmony export L_RemoveAdminAction */
/* unused harmony export L_EditEventAction */

var ActionTypes = {
    S_GET_EVENT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared__["c" /* type */])('S Get Event'),
    S_ADD_MEMBER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared__["c" /* type */])('S Add Event Member'),
    S_ADD_ADMIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared__["c" /* type */])('S Add Event Admin'),
    S_REMOVE_MEMBER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared__["c" /* type */])('S Remove Event Member'),
    S_REMOVE_ADMIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared__["c" /* type */])('S Remove Event Admin'),
    S_EDIT_EVENT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared__["c" /* type */])('S Edit Event'),
    S_NEW_EVENT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared__["c" /* type */])('S New Event'),
    L_GET_EVENT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared__["c" /* type */])('L Get Event'),
    L_ADD_MEMBER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared__["c" /* type */])('L Add Event Member'),
    L_ADD_ADMIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared__["c" /* type */])('L Add Event Admin'),
    L_REMOVE_MEMBER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared__["c" /* type */])('L Remove Event Member'),
    L_REMOVE_ADMIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared__["c" /* type */])('L Remove Event Admin'),
    L_EDIT_EVENT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared__["c" /* type */])('L Edit Event')
};
var S_GetEventAction = (function () {
    function S_GetEventAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_GET_EVENT;
    }
    return S_GetEventAction;
}());

var S_AddMemberAction = (function () {
    function S_AddMemberAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_ADD_MEMBER;
    }
    return S_AddMemberAction;
}());

var S_AddAdminAction = (function () {
    function S_AddAdminAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_ADD_ADMIN;
    }
    return S_AddAdminAction;
}());

var S_RemoveMemberAction = (function () {
    function S_RemoveMemberAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_REMOVE_MEMBER;
    }
    return S_RemoveMemberAction;
}());

var S_RemoveAdminAction = (function () {
    function S_RemoveAdminAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_REMOVE_ADMIN;
    }
    return S_RemoveAdminAction;
}());

var S_EditEventAction = (function () {
    function S_EditEventAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_EDIT_EVENT;
    }
    return S_EditEventAction;
}());

var S_NewEventAction = (function () {
    function S_NewEventAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_NEW_EVENT;
    }
    return S_NewEventAction;
}());

var L_GetEventAction = (function () {
    function L_GetEventAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_GET_EVENT;
    }
    return L_GetEventAction;
}());

var L_AddMemberAction = (function () {
    function L_AddMemberAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_ADD_MEMBER;
    }
    return L_AddMemberAction;
}());

var L_AddAdminAction = (function () {
    function L_AddAdminAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_ADD_ADMIN;
    }
    return L_AddAdminAction;
}());

var L_RemoveMemberAction = (function () {
    function L_RemoveMemberAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_REMOVE_MEMBER;
    }
    return L_RemoveMemberAction;
}());

var L_RemoveAdminAction = (function () {
    function L_RemoveAdminAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_REMOVE_ADMIN;
    }
    return L_RemoveAdminAction;
}());

var L_EditEventAction = (function () {
    function L_EditEventAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_EDIT_EVENT;
    }
    return L_EditEventAction;
}());

//# sourceMappingURL=event.actions.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_actions__ = __webpack_require__(69);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__event_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_store__ = __webpack_require__(205);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__event_store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_effects__ = __webpack_require__(204);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__event_effects__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* unused harmony export S_GetFeedAction */
/* unused harmony export S_LikePostAction */
/* unused harmony export S_LikeCommentAction */
/* unused harmony export S_LikeSubCommentAction */
/* unused harmony export S_PostCommentAction */
/* unused harmony export L_GetFeedAction */
/* unused harmony export L_LikePostAction */
/* unused harmony export L_LikeCommentAction */
/* unused harmony export L_LikeSubCommentAction */
/* unused harmony export L_PostCommentAction */

var ActionTypes = {
    S_GET_FEED: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Get Feed'),
    S_LIKE_POST: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Like Post'),
    S_LIKE_COMMENT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Like Comment'),
    S_LIKE_SUBCOMMENT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Like SubComment'),
    S_POST_COMMENT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Post Comment'),
    L_GET_FEED: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Get Feed'),
    L_LIKE_POST: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Like Post'),
    L_LIKE_COMMENT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Like Comment'),
    L_LIKE_SUBCOMMENT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Like SubComment'),
    L_POST_COMMENT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Post Comment')
};
var S_GetFeedAction = (function () {
    function S_GetFeedAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_GET_FEED;
    }
    return S_GetFeedAction;
}());

var S_LikePostAction = (function () {
    function S_LikePostAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_LIKE_POST;
    }
    return S_LikePostAction;
}());

var S_LikeCommentAction = (function () {
    function S_LikeCommentAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_LIKE_COMMENT;
    }
    return S_LikeCommentAction;
}());

var S_LikeSubCommentAction = (function () {
    function S_LikeSubCommentAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_LIKE_SUBCOMMENT;
    }
    return S_LikeSubCommentAction;
}());

var S_PostCommentAction = (function () {
    function S_PostCommentAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_POST_COMMENT;
    }
    return S_PostCommentAction;
}());

var L_GetFeedAction = (function () {
    function L_GetFeedAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_GET_FEED;
    }
    return L_GetFeedAction;
}());

var L_LikePostAction = (function () {
    function L_LikePostAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_LIKE_POST;
    }
    return L_LikePostAction;
}());

var L_LikeCommentAction = (function () {
    function L_LikeCommentAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_LIKE_COMMENT;
    }
    return L_LikeCommentAction;
}());

var L_LikeSubCommentAction = (function () {
    function L_LikeSubCommentAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_LIKE_SUBCOMMENT;
    }
    return L_LikeSubCommentAction;
}());

var L_PostCommentAction = (function () {
    function L_PostCommentAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_POST_COMMENT;
    }
    return L_PostCommentAction;
}());

//# sourceMappingURL=feed.actions.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* unused harmony export S_GetGroupAction */
/* unused harmony export S_AddMemberAction */
/* unused harmony export S_AddAdminAction */
/* unused harmony export S_RemoveMemberAction */
/* unused harmony export S_RemoveAdminAction */
/* unused harmony export S_UpdateGroupAction */
/* unused harmony export S_NewGroupAction */
/* unused harmony export L_GetGroupAction */
/* unused harmony export L_AddMemberAction */
/* unused harmony export L_AddAdminAction */
/* unused harmony export L_RemoveMemberAction */
/* unused harmony export L_RemoveAdminAction */
/* unused harmony export L_UpdateGroupAction */

var ActionTypes = {
    S_GET_GROUP: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Get Group'),
    S_ADD_MEMBER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Add Group Member'),
    S_ADD_ADMIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Add Group Admin'),
    S_REMOVE_MEMBER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Remove Group Member'),
    S_REMOVE_ADMIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Remove Group Admin'),
    S_UPDATE_GROUP: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Update Group'),
    S_NEW_GROUP: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S New Group'),
    L_GET_GROUP: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Get Group'),
    L_ADD_MEMBER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Add Group Member'),
    L_ADD_ADMIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Add Group Admin'),
    L_REMOVE_MEMBER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Remove Group Member'),
    L_REMOVE_ADMIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Remove Group Admin'),
    L_UPDATE_GROUP: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Change Group Name')
};
var S_GetGroupAction = (function () {
    function S_GetGroupAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_GET_GROUP;
    }
    return S_GetGroupAction;
}());

var S_AddMemberAction = (function () {
    function S_AddMemberAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_ADD_MEMBER;
    }
    return S_AddMemberAction;
}());

var S_AddAdminAction = (function () {
    function S_AddAdminAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_ADD_ADMIN;
    }
    return S_AddAdminAction;
}());

var S_RemoveMemberAction = (function () {
    function S_RemoveMemberAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_REMOVE_MEMBER;
    }
    return S_RemoveMemberAction;
}());

var S_RemoveAdminAction = (function () {
    function S_RemoveAdminAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_REMOVE_ADMIN;
    }
    return S_RemoveAdminAction;
}());

var S_UpdateGroupAction = (function () {
    function S_UpdateGroupAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_UPDATE_GROUP;
    }
    return S_UpdateGroupAction;
}());

var S_NewGroupAction = (function () {
    function S_NewGroupAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_NEW_GROUP;
    }
    return S_NewGroupAction;
}());

var L_GetGroupAction = (function () {
    function L_GetGroupAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_GET_GROUP;
    }
    return L_GetGroupAction;
}());

var L_AddMemberAction = (function () {
    function L_AddMemberAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_ADD_MEMBER;
    }
    return L_AddMemberAction;
}());

var L_AddAdminAction = (function () {
    function L_AddAdminAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_ADD_ADMIN;
    }
    return L_AddAdminAction;
}());

var L_RemoveMemberAction = (function () {
    function L_RemoveMemberAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_REMOVE_MEMBER;
    }
    return L_RemoveMemberAction;
}());

var L_RemoveAdminAction = (function () {
    function L_RemoveAdminAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_REMOVE_ADMIN;
    }
    return L_RemoveAdminAction;
}());

var L_UpdateGroupAction = (function () {
    function L_UpdateGroupAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_UPDATE_GROUP;
    }
    return L_UpdateGroupAction;
}());

//# sourceMappingURL=group.actions.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_actions__ = __webpack_require__(72);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__group_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group_store__ = __webpack_require__(213);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__group_store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_effects__ = __webpack_require__(212);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__group_effects__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* unused harmony export GetResultsAction */
/* unused harmony export ConfigPagesAction */
/* unused harmony export UpdatePagesAction */
/* unused harmony export UpdateResultsAction */
/* unused harmony export ClearResultsAction */

var ActionTypes = {
    // Remote Actions => Effect
    GET_RESULTS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Get Results'),
    // Local Actions => Reducer
    CONFIG_PAGES: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Configure Pages'),
    UPDATE_PAGES: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Update Pages'),
    UPDATE_RESULTS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Update Results'),
    CLEAR_RESULTS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Clear Results')
};
var GetResultsAction = (function () {
    function GetResultsAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_RESULTS;
    }
    return GetResultsAction;
}());

var ConfigPagesAction = (function () {
    function ConfigPagesAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.CONFIG_PAGES;
    }
    return ConfigPagesAction;
}());

var UpdatePagesAction = (function () {
    function UpdatePagesAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_PAGES;
    }
    return UpdatePagesAction;
}());

var UpdateResultsAction = (function () {
    function UpdateResultsAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.UPDATE_RESULTS;
    }
    return UpdateResultsAction;
}());

var ClearResultsAction = (function () {
    function ClearResultsAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.CLEAR_RESULTS;
    }
    return ClearResultsAction;
}());

//# sourceMappingURL=nav.actions.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* unused harmony export ToggleContactAction */
/* unused harmony export S_GetProviderAction */
/* unused harmony export S_AddReviewAction */
/* unused harmony export S_EditReviewAction */
/* unused harmony export S_DeleteReviewAction */
/* unused harmony export L_GetProviderAction */
/* unused harmony export L_AddReviewAction */
/* unused harmony export L_EditReviewAction */
/* unused harmony export L_DeleteReviewAction */

var ActionTypes = {
    TOGGLE_CONTACT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('Toggle Contact'),
    S_GET_PROVIDER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Get Provider'),
    S_ADD_REVIEW: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Add Review'),
    S_EDIT_REVIEW: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Edit Review'),
    S_DELETE_REVIEW: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Delete Review'),
    L_GET_PROVIDER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Get Provider'),
    L_ADD_REVIEW: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Add Review'),
    L_EDIT_REVIEW: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Edit Review'),
    L_DELETE_REVIEW: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Delete Review')
};
var ToggleContactAction = (function () {
    function ToggleContactAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.TOGGLE_CONTACT;
    }
    return ToggleContactAction;
}());

var S_GetProviderAction = (function () {
    function S_GetProviderAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_GET_PROVIDER;
    }
    return S_GetProviderAction;
}());

var S_AddReviewAction = (function () {
    function S_AddReviewAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_ADD_REVIEW;
    }
    return S_AddReviewAction;
}());

var S_EditReviewAction = (function () {
    function S_EditReviewAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_EDIT_REVIEW;
    }
    return S_EditReviewAction;
}());

var S_DeleteReviewAction = (function () {
    function S_DeleteReviewAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_DELETE_REVIEW;
    }
    return S_DeleteReviewAction;
}());

var L_GetProviderAction = (function () {
    function L_GetProviderAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_GET_PROVIDER;
    }
    return L_GetProviderAction;
}());

var L_AddReviewAction = (function () {
    function L_AddReviewAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_ADD_REVIEW;
    }
    return L_AddReviewAction;
}());

var L_EditReviewAction = (function () {
    function L_EditReviewAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_EDIT_REVIEW;
    }
    return L_EditReviewAction;
}());

var L_DeleteReviewAction = (function () {
    function L_DeleteReviewAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_DELETE_REVIEW;
    }
    return L_DeleteReviewAction;
}());

//# sourceMappingURL=provider.actions.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_actions__ = __webpack_require__(77);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_store__ = __webpack_require__(234);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__user_store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_effects__ = __webpack_require__(233);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__user_effects__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* unused harmony export S_GetUserAction */
/* unused harmony export S_UserUpdateAction */
/* unused harmony export S_NewUserAction */
/* unused harmony export L_GetUserAction */
/* unused harmony export L_UserUpdateAction */

var ActionTypes = {
    S_GET_USER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S Get User'),
    S_USER_UPDATE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S User Update'),
    S_NEW_USER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('S New User'),
    L_GET_USER: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L Get User'),
    L_USER_UPDATE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["c" /* type */])('L User Update')
};
var S_GetUserAction = (function () {
    function S_GetUserAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_GET_USER;
    }
    return S_GetUserAction;
}());

var S_UserUpdateAction = (function () {
    function S_UserUpdateAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_USER_UPDATE;
    }
    return S_UserUpdateAction;
}());

var S_NewUserAction = (function () {
    function S_NewUserAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.S_NEW_USER;
    }
    return S_NewUserAction;
}());

var L_GetUserAction = (function () {
    function L_GetUserAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_GET_USER;
    }
    return L_GetUserAction;
}());

var L_UserUpdateAction = (function () {
    function L_UserUpdateAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.L_USER_UPDATE;
    }
    return L_UserUpdateAction;
}());

//# sourceMappingURL=user.actions.js.map

/***/ }),
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sources__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(store$, fbapi, gapi) {
        this.store$ = store$;
        this.fbapi = fbapi;
        this.gapi = gapi;
        this.error = store$.select(function (state) { return (state.auth.err !== null) ? state.auth.err.message : ''; });
        this.isNewUser = store$.select(function (state) { return state.auth.newUser; });
    }
    LoginComponent.prototype.toggleAction = function () {
        this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* ActionTypes */].TOGGLE_ACTION });
    };
    LoginComponent.prototype.fregister = function () {
        var _this = this;
        this.fbapi.login(function (response) {
            _this.storeToken('facebook', response.authResponse.accessToken);
            _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* ActionTypes */].REGISTER });
        });
    };
    LoginComponent.prototype.gregister = function () {
        var _this = this;
        this.gapi.signin({
            'scope': 'profile email https://www.googleapis.com/auth/contacts ' +
                'https://www.googleapis.com/auth/contacts.readonly ' +
                'https://www.googleapis.com/auth/plus.login ' +
                'https://www.googleapis.com/auth/user.addresses.read ' +
                'https://www.googleapis.com/auth/user.birthday.read ' +
                'https://www.googleapis.com/auth/user.emails.read ' +
                'https://www.googleapis.com/auth/user.phonenumbers.read ' +
                'https://www.googleapis.com/auth/userinfo.email ' +
                'https://www.googleapis.com/auth/userinfo.profile'
        })
            .then(function (googleUser) {
            _this.storeToken('google', googleUser.getAuthResponse().id_token);
            _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* ActionTypes */].REGISTER, payload: googleUser.getAuthResponse().access_token });
        });
    };
    LoginComponent.prototype.flogin = function () {
        var _this = this;
        this.fbapi.login(function (response) {
            console.log(response);
            _this.storeToken('facebook', response.authResponse.accessToken);
            _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* ActionTypes */].LOGIN });
        });
    };
    LoginComponent.prototype.glogin = function () {
        var _this = this;
        this.gapi.signin({
            'scope': 'profile email https://www.googleapis.com/auth/contacts ' +
                'https://www.googleapis.com/auth/contacts.readonly ' +
                'https://www.googleapis.com/auth/plus.login ' +
                'https://www.googleapis.com/auth/user.addresses.read ' +
                'https://www.googleapis.com/auth/user.birthday.read ' +
                'https://www.googleapis.com/auth/user.emails.read ' +
                'https://www.googleapis.com/auth/user.phonenumbers.read ' +
                'https://www.googleapis.com/auth/userinfo.email ' +
                'https://www.googleapis.com/auth/userinfo.profile'
        })
            .then(function (googleUser) {
            _this.storeToken('google', googleUser.getAuthResponse().id_token);
            _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* ActionTypes */].LOGIN });
        });
    };
    LoginComponent.prototype.storeToken = function (provider, token) {
        localStorage.setItem('token', token);
        localStorage.setItem('provider', provider);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-login',
        template: __webpack_require__(312),
        styles: [__webpack_require__(294)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_sources__["c" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_sources__["c" /* FacebookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_sources__["d" /* GoogleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_sources__["d" /* GoogleService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderLoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProviderLoginService = (function () {
    function ProviderLoginService() {
    }
    ProviderLoginService.prototype.login = function (data) {
        //
    };
    ProviderLoginService.prototype.logout = function () {
        //
    };
    return ProviderLoginService;
}());
ProviderLoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ProviderLoginService);

//# sourceMappingURL=provider-login.service.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(store$) {
        this.store$ = store$;
        this._id = store$.select(function (state) { return state.user._id; });
        this.firstName = store$.select(function (state) { return state.user.firstName; });
        this.lastName = store$.select(function (state) { return state.user.lastName; });
        this.email = store$.select(function (state) { return state.user.email; });
        this.phone = store$.select(function (state) { return state.user.phone; });
        this.gender = store$.select(function (state) { return state.user.gender; });
        // this.interests = store$.select(state => state.user.interests);
        this.birthday = store$.select(function (state) { return state.user.birthday; });
        // this.avatar = store$.select(state => state.user.avatar);
        this.address = store$.select(function (state) { return state.user.address; });
        // this.friends = store$.select(state => state.user.friends);
        // this.isProvider = store$.select(state => state.user.isProvider);
    }
    RegisterComponent.prototype.register = function (form) {
        this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* ActionTypes */].SAVE_USER, payload: { user: form.value } });
        console.log(form.value);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-register',
        template: __webpack_require__(313),
        styles: [__webpack_require__(295)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _a || Object])
], RegisterComponent);

var _a;
//# sourceMappingURL=register.component.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = (function () {
    function EditComponent(store$, route) {
        this.store$ = store$;
        this.route = route;
        this._id = store$.select(function (state) { return state.event._id; });
        /*this.owner = store$.select(state => state.event.owner);
        this.provider = store$.select(state => state.event.provider);
        this.admins = store$.select(state => state.event.admins);
        this.members = store$.select(state => state.event.members);*/
        this.name = store$.select(function (state) { return state.event.name; });
        this.description = store$.select(function (state) { return state.event.description; });
        this.startDate = store$.select(function (state) { return state.event.startDate; });
        this.endDate = store$.select(function (state) { return state.event.endDate; });
        this.address = store$.select(function (state) { return state.event.address; });
        /*this.media = store$.select(state => state.event.media);
        this.posts = store$.select(state => state.event.posts);*/
        this.private = store$.select(function (state) { return state.event.private; });
    }
    EditComponent.prototype.cancel = function (form) {
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["a" /* go */])('/event/' + form.value._id));
    };
    EditComponent.prototype.save = function (form) {
        if (this.isNew) {
            this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_NEW_EVENT, payload: form.value });
        }
        else {
            this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_EDIT_EVENT, payload: form.value });
        }
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params
            .switchMap(function (params) { return _this.store$
            .select(function (state) { return state.event._id; })
            .map(function (id) { return ({ paramId: params['id'], storeId: id }); }); })
            .subscribe(function (data) {
            if (data.storeId !== data.paramId) {
                _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_GET_EVENT, payload: data.paramId });
            }
            _this.isNew = (typeof data.paramId === 'undefined' || data.paramId === null);
        });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-edit',
        template: __webpack_require__(314),
        styles: [__webpack_require__(296)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], EditComponent);

var _a, _b;
//# sourceMappingURL=edit.component.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewComponent = (function () {
    function ViewComponent(store$, route) {
        this.store$ = store$;
        this.route = route;
        this._id = store$.select(function (state) { return state.event._id; });
        this.owner = store$.select(function (state) { return state.event.owner; });
        this.provider = store$.select(function (state) { return state.event.provider; });
        this.admins = store$.select(function (state) { return state.event.admins; });
        this.members = store$.select(function (state) { return state.event.members; });
        this.name = store$.select(function (state) { return state.event.name; });
        this.description = store$.select(function (state) { return state.event.description; });
        this.startDate = store$.select(function (state) { return state.event.startDate; });
        this.endDate = store$.select(function (state) { return state.event.endDate; });
        this.address = store$.select(function (state) { return state.event.address; });
        this.media = store$.select(function (state) { return state.event.media; });
        this.posts = store$.select(function (state) { return state.event.posts; });
        this.private = store$.select(function (state) { return state.event.private; });
    }
    ViewComponent.prototype.addMember = function (user) {
        this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_ADD_MEMBER, payload: user });
    };
    ViewComponent.prototype.addAdmin = function (user) {
        this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_ADD_ADMIN, payload: user });
    };
    ViewComponent.prototype.edit = function ($event) {
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["a" /* go */])('/event/' + $event + '/edit'));
    };
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rSub = this.route.params.subscribe(function (params) {
            _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_GET_EVENT, payload: params['id'] });
        });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        this.rSub.unsubscribe();
    };
    return ViewComponent;
}());
ViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-view',
        template: __webpack_require__(315),
        styles: [__webpack_require__(297)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ViewComponent);

var _a, _b;
//# sourceMappingURL=view.component.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedComponent = (function () {
    function FeedComponent(store$, route) {
        this.store$ = store$;
        this.route = route;
        this.posts = store$.select(function (state) { return state.feed.posts; });
    }
    FeedComponent.prototype.likePost = function (id) {
        this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_LIKE_POST, payload: { parent: id, child: this.userId } });
    };
    FeedComponent.prototype.sharePost = function (id) {
        // Do something
    };
    FeedComponent.prototype.likeComment = function (id) {
        this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_LIKE_COMMENT, payload: { parent: id, child: this.userId } });
    };
    FeedComponent.prototype.likeSubComment = function (refs) {
        this.store$.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_LIKE_SUBCOMMENT, payload: {
                parent: refs.subCommentId,
                child: {
                    parentId: refs.commentId,
                    userId: this.userId
                }
            }
        });
    };
    FeedComponent.prototype.postComment = function (comment) {
        this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].L_POST_COMMENT, payload: comment });
    };
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.store$.select(function (state) { return state.user._id; }).subscribe(function (id) {
            _this.userId = id || '588dabd60e4ae2358cb66263';
            _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_GET_FEED, payload: _this.userId });
        });
    };
    FeedComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return FeedComponent;
}());
FeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-feed',
        template: __webpack_require__(316),
        styles: [__webpack_require__(298)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], FeedComponent);

var _a, _b;
//# sourceMappingURL=feed.component.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_actions__ = __webpack_require__(71);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__feed_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feed_store__ = __webpack_require__(209);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__feed_store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_effects__ = __webpack_require__(208);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__feed_effects__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = (function () {
    function EditComponent(store$, route) {
        this.store$ = store$;
        this.route = route;
        this._id = store$.select(function (state) { return state.group._id; });
        this.name = store$.select(function (state) { return state.group.name; });
        /*this.admins = store$.select(state => state.group.admins);
        this.members = store$.select(state => state.group.members);
        this.provider = store$.select(state => state.group.provider);*/
        this.address = store$.select(function (state) { return state.group.address; });
        this.description = store$.select(function (state) { return state.group.description; });
        // this.owner = store$.select(state => state.group.owner);
        this.groupType = store$.select(function (state) { return state.group.groupType; });
        // this.posts = store$.select(state => state.group.posts);
    }
    EditComponent.prototype.cancel = function (form) {
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["a" /* go */])('/group/' + form.value._id));
    };
    EditComponent.prototype.save = function (form) {
        form.value.groupType = (form.value.groupType || '').split(', ');
        if (this.isNew) {
            this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_NEW_GROUP, payload: form.value });
        }
        else {
            this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_UPDATE_GROUP, payload: form.value });
        }
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params
            .switchMap(function (params) { return _this.store$
            .select(function (state) { return state.group._id; })
            .map(function (id) { return ({ paramId: params['id'], storeId: id }); }); })
            .subscribe(function (data) {
            if (data.storeId !== data.paramId) {
                _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_GET_GROUP, payload: data.paramId });
            }
            _this.isNew = (typeof data.paramId === 'undefined' || data.paramId === null);
        });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-edit',
        template: __webpack_require__(317),
        styles: [__webpack_require__(299)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], EditComponent);

var _a, _b;
//# sourceMappingURL=edit.component.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewComponent = (function () {
    function ViewComponent(store$, route) {
        this.store$ = store$;
        this.route = route;
        this._id = store$.select(function (state) { return state.group._id; });
        this.name = store$.select(function (state) { return state.group.name; });
        this.admins = store$.select(function (state) { return state.group.admins; });
        this.members = store$.select(function (state) { return state.group.members; });
        this.provider = store$.select(function (state) { return state.group.provider; });
        this.address = store$.select(function (state) { return state.group.address; });
        this.description = store$.select(function (state) { return state.group.description; });
        this.owner = store$.select(function (state) { return state.group.owner; });
        this.groupType = store$.select(function (state) { return state.group.groupType; });
        this.posts = store$.select(function (state) { return state.group.posts; });
    }
    ViewComponent.prototype.edit = function ($event) {
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["a" /* go */])('/group/' + $event + '/edit'));
    };
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_GET_GROUP, payload: params['id'] });
        });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ViewComponent;
}());
ViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-view',
        template: __webpack_require__(318),
        styles: [__webpack_require__(300)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ViewComponent);

var _a, _b;
//# sourceMappingURL=view.component.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var LoginService = (function () {
    function LoginService() {
    }
    LoginService.prototype.login = function (data) {
        throw new Error('Method not implemented.');
    };
    LoginService.prototype.logout = function () {
        throw new Error('Method not implemented.');
    };
    return LoginService;
}());

//# sourceMappingURL=login-service.token.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_actions__ = __webpack_require__(74);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__nav_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_store__ = __webpack_require__(217);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__nav_store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_effects__ = __webpack_require__(216);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__nav_effects__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = (function () {
    function EditComponent(store$, route) {
        this.store$ = store$;
        this.route = route;
        this._id = store$.select(function (state) { return state.user._id; });
        this.bio = store$.select(function (state) { return state.provider.bio; });
        this.businessAddress = store$.select(function (state) { return state.provider.businessAddress; });
    }
    EditComponent.prototype.cancel = function (form) {
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["a" /* go */])('/provider/' + form.value._id));
    };
    EditComponent.prototype.save = function (form) {
        // this.store$.dispatch({ type: actions.S_PROVIDER_UPDATE, payload: form.value });
    };
    EditComponent.prototype.ngOnInit = function () {
        /*this.sub = this.route.params
            .switchMap(params => this.store$
                .select(state => state.provider._id)
                .map(id => ({ paramId: params['id'], storeId: id })))
            .subscribe(data => {
                if (data.storeId !== data.paramId) {
                    this.store$.dispatch({ type: actions.S_GET_PROVIDER, payload: data.paramId });
                }

                this.isNew = (typeof data.paramId === 'undefined' || data.paramId === null);
            });*/
    };
    EditComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-edit',
        template: __webpack_require__(321),
        styles: [__webpack_require__(303)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], EditComponent);

var _a, _b;
//# sourceMappingURL=edit.component.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__provider_actions__ = __webpack_require__(75);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__provider_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_store__ = __webpack_require__(222);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__provider_store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_effects__ = __webpack_require__(221);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_effects__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { trigger, state, style, animate, transition } from '@angular/animations';


var ViewComponent = (function () {
    function ViewComponent(store$, route) {
        this.store$ = store$;
        this.route = route;
        this.bio = store$.select(function (state) { return state.provider.bio; });
        this.rank = store$.select(function (state) { return state.provider.rank; });
        this.businessAddress = store$.select(function (state) { return state.provider.businessAddress; });
        this.reviews = store$.select(function (state) { return state.provider.reviews; });
        this.user = store$.select(function (state) { return state.provider.user; });
        this.showContact = store$.select(function (state) { return state.provider.showContact; });
    }
    ViewComponent.prototype.toggleContact = function () {
        this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].TOGGLE_CONTACT });
    };
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_GET_PROVIDER, payload: params['id'] });
        });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ViewComponent;
}());
ViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-view',
        template: __webpack_require__(322),
        styles: [__webpack_require__(304)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ViewComponent);

var _a, _b;
//# sourceMappingURL=view.component.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(authHttp) {
        this.authHttp = authHttp;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
    }
    HttpService.prototype.get = function (url, options) {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }
        return this.authHttp.get(url, options);
    };
    HttpService.prototype.post = function (url, body, options) {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }
        return this.authHttp.post(url, body, options);
    };
    HttpService.prototype.put = function (url, body, options) {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }
        return this.authHttp.put(url, body, options);
    };
    HttpService.prototype.delete = function (url, options) {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }
        return this.authHttp.delete(url, options);
    };
    HttpService.prototype.patch = function (url, body, options) {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }
        return this.authHttp.patch(url, body, options);
    };
    HttpService.prototype.head = function (url, options) {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }
        return this.authHttp.head(url, options);
    };
    HttpService.prototype.options = function (url, options) {
        if (options) {
            options.headers = this.appendProvider(options.headers);
        }
        return this.authHttp.options(url, options);
    };
    HttpService.prototype.tokenSubscription = function () {
        return this.authHttp.tokenStream;
    };
    HttpService.prototype.decodeToken = function (token) {
        token = token || localStorage.getItem('token');
        return this.jwtHelper.decodeToken(token);
    };
    HttpService.prototype.getTokenExpirationDate = function (token) {
        token = token || localStorage.getItem('token');
        return this.jwtHelper.getTokenExpirationDate(token);
    };
    HttpService.prototype.isTokenExpired = function (token) {
        token = token || localStorage.getItem('token');
        return this.jwtHelper.isTokenExpired(token);
    };
    HttpService.prototype.appendProvider = function (headers) {
        var provider = localStorage.getItem('provider');
        headers = headers || new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('provider', provider);
        return headers;
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = (function () {
    function EditComponent(store$, route) {
        this.store$ = store$;
        this.route = route;
        this._id = store$.select(function (state) { return state.user._id; });
        this.firstName = store$.select(function (state) { return state.user.firstName; });
        this.lastName = store$.select(function (state) { return state.user.lastName; });
        this.email = store$.select(function (state) { return state.user.email; });
        this.phone = store$.select(function (state) { return state.user.phone; });
        this.gender = store$.select(function (state) { return state.user.gender; });
        // this.interests = store$.select(state => state.user.interests);
        this.birthday = store$.select(function (state) { return state.user.birthday; });
        // this.avatar = store$.select(state => state.user.avatar);
        this.address = store$.select(function (state) { return state.user.address; });
        // this.friends = store$.select(state => state.user.friends);
        // this.isProvider = store$.select(state => state.user.isProvider);
    }
    EditComponent.prototype.cancel = function (form) {
        console.log(form.value);
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["a" /* go */])('/user/' + form.value._id));
    };
    EditComponent.prototype.save = function (form) {
        console.log(form.value);
        this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_USER_UPDATE, payload: form.value });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params
            .switchMap(function (params) { return _this.store$
            .select(function (state) { return state.user._id; })
            .map(function (id) { return ({ paramId: params['id'], storeId: id }); }); })
            .subscribe(function (data) {
            if (data.storeId !== data.paramId) {
                _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* ActionTypes */].S_GET_USER, payload: data.paramId });
            }
            _this.isNew = (typeof data.paramId === 'undefined' || data.paramId === null);
        });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-edit',
        template: __webpack_require__(325),
        styles: [__webpack_require__(307)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], EditComponent);

var _a, _b;
//# sourceMappingURL=edit.component.js.map

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewComponent = (function () {
    function ViewComponent(store$, route) {
        this.store$ = store$;
        this.route = route;
        this._id = store$.select(function (state) { return state.user._id; });
        this.firstName = store$.select(function (state) { return state.user.firstName; });
        this.lastName = store$.select(function (state) { return state.user.lastName; });
        this.email = store$.select(function (state) { return state.user.email; });
        this.phone = store$.select(function (state) { return state.user.phone; });
        this.gender = store$.select(function (state) { return state.user.gender; });
        this.interests = store$.select(function (state) { return state.user.interests; });
        this.birthday = store$.select(function (state) { return state.user.birthday; });
        this.avatar = store$.select(function (state) { return state.user.avatar; });
        this.address = store$.select(function (state) { return state.user.address; });
        this.friends = store$.select(function (state) { return state.user.friends; });
        this.isProvider = store$.select(function (state) { return state.user.isProvider; });
    }
    ViewComponent.prototype.edit = function ($event) {
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__["a" /* go */])('/user/' + $event + '/edit'));
    };
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params
            .switchMap(function (params) { return _this.store$
            .select(function (state) { return state.user._id; })
            .map(function (id) { return ({ paramId: params['id'], storeId: id }); }); })
            .subscribe(function (data) {
            if (data.storeId !== data.paramId) {
                _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__store__["a" /* ActionTypes */].S_GET_USER, payload: data.paramId });
            }
        });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ViewComponent;
}());
ViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-view',
        template: __webpack_require__(326),
        styles: [__webpack_require__(308)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ViewComponent);

var _a, _b;
//# sourceMappingURL=view.component.js.map

/***/ }),
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 171;


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(237);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__provider__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var baseRoute = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var routes = baseRoute;
routes = [].concat(__WEBPACK_IMPORTED_MODULE_2__auth__["f" /* authRoutes */], __WEBPACK_IMPORTED_MODULE_3__event__["d" /* eventRoutes */], __WEBPACK_IMPORTED_MODULE_4__feed__["d" /* feedRoutes */], __WEBPACK_IMPORTED_MODULE_5__group__["d" /* groupRoutes */], __WEBPACK_IMPORTED_MODULE_6__provider__["d" /* providerRoutes */], __WEBPACK_IMPORTED_MODULE_7__user__["e" /* userRoutes */], baseRoute);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store_devtools__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feed__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__group__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__provider__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_store_reducers__ = __webpack_require__(193);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppStoreModule = (function () {
    function AppStoreModule() {
    }
    return AppStoreModule;
}());
AppStoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_13__app_store_reducers__["a" /* reducer */]),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["b" /* RouterStoreModule */].connectRouter(),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_5__auth__["d" /* AuthEffects */]),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_6__event__["b" /* EventEffects */]),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_7__feed__["b" /* FeedEffects */]),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_8__group__["b" /* GroupEffects */]),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_9__nav__["c" /* NavEffects */]),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_10__provider__["b" /* ProviderEffects */]),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_11__user__["c" /* UserEffects */]),
            __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_12__shared__["d" /* SharedEffects */]),
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* StoreModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["b" /* RouterStoreModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store_devtools__["a" /* StoreDevtoolsModule */]
        ]
    })
], AppStoreModule);

//# sourceMappingURL=app-store.module.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_core__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__feed__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__group__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__provider__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user__ = __webpack_require__(35);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;











var reducers = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__auth__["e" /* authReducer */], __WEBPACK_IMPORTED_MODULE_5__event__["c" /* eventReducer */], __WEBPACK_IMPORTED_MODULE_6__feed__["c" /* feedReducer */], __WEBPACK_IMPORTED_MODULE_7__group__["c" /* groupReducer */], __WEBPACK_IMPORTED_MODULE_8__nav__["d" /* navReducer */], __WEBPACK_IMPORTED_MODULE_9__provider__["c" /* providerReducer */], __WEBPACK_IMPORTED_MODULE_10__user__["d" /* userReducer */]);
var developmentReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_core__["b" /* compose */])(__WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* combineReducers */])(reducers);
var productionReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* combineReducers */])(reducers);
function reducer(state, action) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
        return developmentReducer(state, action);
    }
    else {
        return productionReducer(state, action);
    }
}
//# sourceMappingURL=app-store.reducers.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-root',
        template: __webpack_require__(311),
        styles: [__webpack_require__(293)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_store_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_service_token__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__event__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__feed__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__group__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nav__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__provider__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_providers_sources__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var fbParams = {
    appId: '1246381665456070',
    cookie: true,
    xfbml: false,
    version: 'v2.8'
};
var googId = '142084885382-lr0fajuthv25m2oc98107ete22lqe5h2';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_store_module__["a" /* AppStoreModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_10__auth__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_11__event__["a" /* EventModule */],
            __WEBPACK_IMPORTED_MODULE_12__feed__["a" /* FeedModule */],
            __WEBPACK_IMPORTED_MODULE_13__group__["a" /* GroupModule */],
            __WEBPACK_IMPORTED_MODULE_14__nav__["a" /* NavModule */],
            __WEBPACK_IMPORTED_MODULE_15__provider__["a" /* ProviderModule */],
            __WEBPACK_IMPORTED_MODULE_16__user__["a" /* UserModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_17__auth_providers_sources__["a" /* GOOG_ID */], useValue: googId },
            { provide: __WEBPACK_IMPORTED_MODULE_17__auth_providers_sources__["b" /* INIT_PARAMS */], useValue: fbParams },
            { provide: __WEBPACK_IMPORTED_MODULE_8__login_service_token__["a" /* LoginService */], useExisting: __WEBPACK_IMPORTED_MODULE_10__auth__["b" /* ProviderLoginService */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_provider_login_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sources__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared__["a" /* SharedModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_provider_login_service__["a" /* ProviderLoginService */], __WEBPACK_IMPORTED_MODULE_5__providers_sources__["c" /* FacebookService */], __WEBPACK_IMPORTED_MODULE_5__providers_sources__["d" /* GoogleService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */]]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authRoutes; });


var authRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterComponent */]
    }
];
//# sourceMappingURL=auth.routes.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INIT_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FacebookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/// <reference path="./facebook.service.d.ts" />

var INIT_PARAMS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('FB.InitParams');
var FacebookService = (function () {
    function FacebookService(params) {
        if (params !== null && typeof params !== 'undefined') {
            this.init(params);
        }
    }
    FacebookService.prototype.init = function (params) {
        FB.init(params);
    };
    FacebookService.prototype.api = function (path, method, params, callback) {
        if (method === void 0) { method = 'get'; }
        if (params === void 0) { params = {}; }
        if (callback === void 0) { callback = function () { }; }
        FB.api(path, method, params, callback);
    };
    FacebookService.prototype.ui = function (params, callback) {
        FB.ui(params, callback);
    };
    FacebookService.prototype.getLoginStatus = function (callback) {
        FB.getLoginStatus(callback);
    };
    FacebookService.prototype.login = function (callback) {
        FB.login(callback);
    };
    FacebookService.prototype.logout = function (callback) {
        FB.logout(callback);
    };
    FacebookService.prototype.deauthorize = function (callback) {
        this.api('/me/permissions', 'delete', callback);
    };
    FacebookService.prototype.getAuthResponse = function () {
        return FB.getAuthResponse();
    };
    ;
    return FacebookService;
}());
FacebookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(INIT_PARAMS)),
    __metadata("design:paramtypes", [Object])
], FacebookService);

//# sourceMappingURL=facebook.service.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GOOG_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GoogleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/// <reference path="./google.service.d.ts" />

var GOOG_ID = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('GOOG.ID');
var GoogleService = (function () {
    function GoogleService(client_id) {
        var _this = this;
        this._client_id = client_id + (client_id.endsWith('.apps.googleusercontent.com') ? '' : '.apps.googleusercontent.com');
        gapi.load('auth2', function () {
            _this.GoogleAuth = gapi.auth2.init({ client_id: _this._client_id });
        });
    }
    GoogleService.prototype.initCustomLogin = function (buttonID, onSuccess, onFailure) {
        var btn = document.getElementById(buttonID);
        this.GoogleAuth.attachClickHandler(btn, {}, onSuccess, onFailure);
    };
    GoogleService.prototype.initLogin = function (buttonID, onSuccess, onFailure) {
        gapi.signin2.render(buttonID, {
            'scope': 'profile email',
            'longtitle': true,
            'onsuccess': onSuccess,
            'onfailure': onFailure
        });
    };
    GoogleService.prototype.getIdToken = function (user) {
        user = user || this.GoogleAuth.currentUser.get();
        return user.getAuthResponse().id_token;
    };
    GoogleService.prototype.signin = function (options) {
        return this.GoogleAuth.signIn(options);
    };
    GoogleService.prototype.signout = function () {
        return this.GoogleAuth.signOut();
    };
    return GoogleService;
}());
GoogleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(GOOG_ID)),
    __metadata("design:paramtypes", [String])
], GoogleService);

//# sourceMappingURL=google.service.js.map

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_actions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AuthEffects = (function () {
    function AuthEffects(actions$, http$, router) {
        var _this = this;
        this.actions$ = actions$;
        this.http$ = http$;
        this.router = router;
        this.login$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__auth_actions__["a" /* ActionTypes */].LOGIN)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/auth/login', null, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__shared__["b" /* getOptions */])()); })
            .mergeMap(function (res) {
            _this.router.navigate(['/feed']);
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].from([
                { type: __WEBPACK_IMPORTED_MODULE_9__auth_actions__["a" /* ActionTypes */].AUTH_SUCCESS, payload: res.json().token },
                { type: __WEBPACK_IMPORTED_MODULE_9__auth_actions__["a" /* ActionTypes */].LOAD_USER_DATA, payload: res.json().userData }
            ]);
        })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_9__auth_actions__["a" /* ActionTypes */].AUTH_FAIL, payload: err }); });
        this.register$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__auth_actions__["a" /* ActionTypes */].REGISTER)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/auth/register', { access_token: payload }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__shared__["b" /* getOptions */])()); })
            .map(function (res) {
            _this.router.navigate(['/register']);
            return { type: __WEBPACK_IMPORTED_MODULE_9__auth_actions__["a" /* ActionTypes */].LOAD_USER, payload: res.json() };
        })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_9__auth_actions__["a" /* ActionTypes */].AUTH_FAIL, payload: err }); });
    }
    return AuthEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "login$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "register$", void 0);
AuthEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_12__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AuthEffects);

var _a, _b, _c;
//# sourceMappingURL=auth.effects.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_actions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_utils__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authReducer; });


;
var initialState = {
    authenticated: false,
    newUser: false,
    err: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* ActionTypes */].AUTH_SUCCESS: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                newState.authenticated = true;
                newState.err = null;
                return newState;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* ActionTypes */].AUTH_FAIL: {
            localStorage.removeItem('token');
            localStorage.removeItem('provider');
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                newState.authenticated = false;
                newState.err = payload;
                return newState;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* ActionTypes */].TOGGLE_ACTION: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                newState.newUser = !newState.newUser;
                return newState;
            });
        }
        default: {
            return state;
        }
    }
}
var authReducer = { auth: reducer };
//# sourceMappingURL=auth.store.js.map

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_view_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EventModule = (function () {
    function EventModule() {
    }
    return EventModule;
}());
EventModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_3__view_view_component__["a" /* ViewComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_3__view_view_component__["a" /* ViewComponent */]]
    })
], EventModule);

//# sourceMappingURL=event.module.js.map

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_view_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_edit_component__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eventRoutes; });


var eventRoutes = [
    {
        path: 'event/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__view_view_component__["a" /* ViewComponent */]
    },
    {
        path: 'event/:id/edit',
        component: __WEBPACK_IMPORTED_MODULE_1__edit_edit_component__["a" /* EditComponent */]
    },
    {
        path: 'event/new',
        component: __WEBPACK_IMPORTED_MODULE_1__edit_edit_component__["a" /* EditComponent */]
    }
];
//# sourceMappingURL=event.routes.js.map

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_actions__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_router_store__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EventEffects = (function () {
    function EventEffects(actions$, http$) {
        var _this = this;
        this.actions$ = actions$;
        this.http$ = http$;
        this.getEvent$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].S_GET_EVENT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.get('/api/event/' + payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].L_GET_EVENT, payload: res.json() }); });
        this.addMember$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].S_ADD_MEMBER)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/event/member/add', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].L_ADD_MEMBER, payload: res.json() }); });
        this.addAdmin$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].S_ADD_ADMIN)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/event/admin/add', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].L_ADD_ADMIN, payload: res.json() }); });
        this.removeMember$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].S_REMOVE_MEMBER)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/event/member/remove', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].L_REMOVE_MEMBER, payload: res.json() }); });
        this.removeAdmin$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].S_REMOVE_ADMIN)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/event/admin/remove', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].L_REMOVE_ADMIN, payload: res.json() }); });
        this.editEvent$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].S_EDIT_EVENT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/event/update', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].L_EDIT_EVENT, payload: res.json() }); });
        this.saveEvent$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].S_NEW_EVENT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/event/new', payload); })
            .mergeMap(function (res) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].from([
            { type: __WEBPACK_IMPORTED_MODULE_5__event_actions__["a" /* ActionTypes */].L_GET_EVENT, payload: res.json() },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_router_store__["a" /* go */])('/event/' + res.json()._id)
        ]); });
    }
    return EventEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], EventEffects.prototype, "getEvent$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], EventEffects.prototype, "addMember$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], EventEffects.prototype, "addAdmin$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], EventEffects.prototype, "removeMember$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], EventEffects.prototype, "removeAdmin$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], EventEffects.prototype, "editEvent$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], EventEffects.prototype, "saveEvent$", void 0);
EventEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _b || Object])
], EventEffects);

var _a, _b;
//# sourceMappingURL=event.effects.js.map

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_actions__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_utils__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eventReducer; });


;
var initialState = {
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
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__event_actions__["a" /* ActionTypes */].L_GET_EVENT: {
            return action.payload;
        }
        case __WEBPACK_IMPORTED_MODULE_0__event_actions__["a" /* ActionTypes */].L_ADD_MEMBER: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                newState.members.push(payload);
                return newState;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__event_actions__["a" /* ActionTypes */].L_ADD_ADMIN: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                newState.admins.push(payload);
                return newState;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__event_actions__["a" /* ActionTypes */].L_REMOVE_MEMBER: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                var index = newState.members.findIndex(function (member) { return member._id === payload; });
                newState.members.splice(index, 1);
                return newState;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__event_actions__["a" /* ActionTypes */].L_REMOVE_ADMIN: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                var index = newState.admins.findIndex(function (admin) { return admin._id === payload; });
                newState.admins.splice(index, 1);
                return newState;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__event_actions__["a" /* ActionTypes */].L_EDIT_EVENT: {
            return action.payload;
        }
        // update,
        default: {
            return state;
        }
    }
}
var eventReducer = { event: reducer };
//# sourceMappingURL=event.store.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FeedModule = (function () {
    function FeedModule() {
    }
    return FeedModule;
}());
FeedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__feed_feed_component__["a" /* FeedComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__feed_feed_component__["a" /* FeedComponent */]]
    })
], FeedModule);

//# sourceMappingURL=feed.module.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_feed_component__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return feedRoutes; });

var feedRoutes = [
    {
        path: 'feed',
        component: __WEBPACK_IMPORTED_MODULE_0__feed_feed_component__["a" /* FeedComponent */]
    }
];
//# sourceMappingURL=feed.routes.js.map

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_actions__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeedEffects = (function () {
    function FeedEffects(actions$, http$) {
        var _this = this;
        this.actions$ = actions$;
        this.http$ = http$;
        this.getFeed$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__feed_actions__["a" /* ActionTypes */].S_GET_FEED)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/feed/get', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__feed_actions__["a" /* ActionTypes */].L_GET_FEED, payload: res.json() }); });
        this.likePost$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__feed_actions__["a" /* ActionTypes */].S_LIKE_POST)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/feed/post/like', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__feed_actions__["a" /* ActionTypes */].L_LIKE_POST, payload: res.json() }); });
        this.likeComment$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__feed_actions__["a" /* ActionTypes */].S_LIKE_COMMENT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/feed/comment/like', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__feed_actions__["a" /* ActionTypes */].L_LIKE_COMMENT, payload: res.json() }); });
        this.likeSubComment$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__feed_actions__["a" /* ActionTypes */].S_LIKE_SUBCOMMENT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/feed/comment/like', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__feed_actions__["a" /* ActionTypes */].L_LIKE_SUBCOMMENT, payload: res.json() }); });
        this.postComment$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__feed_actions__["a" /* ActionTypes */].S_POST_COMMENT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/feed/comment/post', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__feed_actions__["a" /* ActionTypes */].L_POST_COMMENT, payload: res.json() }); });
    }
    return FeedEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], FeedEffects.prototype, "getFeed$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], FeedEffects.prototype, "likePost$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], FeedEffects.prototype, "likeComment$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], FeedEffects.prototype, "likeSubComment$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], FeedEffects.prototype, "postComment$", void 0);
FeedEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]) === "function" && _b || Object])
], FeedEffects);

var _a, _b;
//# sourceMappingURL=feed.effects.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_actions__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_utils__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return feedReducer; });


;
var initialState = {
    posts: [],
    filters: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__feed_actions__["a" /* ActionTypes */].L_GET_FEED: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                newState.posts = payload.slice();
                return newState;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__feed_actions__["a" /* ActionTypes */].L_LIKE_POST: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                var index = newState.posts.findIndex(function (post) { return post._id === payload._id; });
                newState.posts[index].likes = payload.likes.slice();
                return newState;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__feed_actions__["a" /* ActionTypes */].L_LIKE_COMMENT: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                var postIndex = newState.posts.findIndex(function (post) { return post._id === payload.subject; });
                var commentIndex = newState.posts[postIndex].comments.findIndex(function (comment) { return comment._id === payload._id; });
                newState.posts[postIndex].comments[commentIndex].likes = payload.likes.slice();
                return newState;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__feed_actions__["a" /* ActionTypes */].L_LIKE_SUBCOMMENT: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                var postIndex = newState.posts.findIndex(function (post) { return post._id === payload.subject; });
                var commentIndex = newState.posts[postIndex].comments.findIndex(function (comment) { return comment._id === payload.parent; });
                var subCommentIndex = newState.posts[postIndex]
                    .comments[commentIndex].comments.findIndex(function (comment) { return comment._id === payload._id; });
                newState.posts[postIndex].comments[commentIndex].comments[subCommentIndex].likes = payload.likes.slice();
                return newState;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__feed_actions__["a" /* ActionTypes */].L_POST_COMMENT: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                var postIndex = newState.posts.findIndex(function (post) { return post._id === payload.subject; });
                if (payload.parent === null || typeof payload.parent === 'undefined') {
                    newState.posts[postIndex].comments.push(payload);
                }
                else {
                    var commentIndex = newState.posts[postIndex].comments.findIndex(function (comment) { return comment._id === payload.parent; });
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
var feedReducer = { feed: reducer };
//# sourceMappingURL=feed.store.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_edit_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_view_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GroupModule = (function () {
    function GroupModule() {
    }
    return GroupModule;
}());
GroupModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_5__view_view_component__["a" /* ViewComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_5__view_view_component__["a" /* ViewComponent */]]
    })
], GroupModule);

//# sourceMappingURL=group.module.js.map

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_view_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_edit_component__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return groupRoutes; });


var groupRoutes = [
    {
        path: 'group/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__view_view_component__["a" /* ViewComponent */]
    },
    {
        path: 'group/:id/edit',
        component: __WEBPACK_IMPORTED_MODULE_1__edit_edit_component__["a" /* EditComponent */]
    },
    {
        path: 'group/new',
        component: __WEBPACK_IMPORTED_MODULE_1__edit_edit_component__["a" /* EditComponent */]
    }
];
//# sourceMappingURL=group.routes.js.map

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group_actions__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_router_store__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GroupEffects = (function () {
    function GroupEffects(actions$, http$) {
        var _this = this;
        this.actions$ = actions$;
        this.http$ = http$;
        this.getGroup$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].S_GET_GROUP)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.get('/api/group/' + payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].L_GET_GROUP, payload: res.json() }); });
        this.addMember$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].S_ADD_MEMBER)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/group/member/add', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].L_ADD_MEMBER, payload: res.json() }); });
        this.addAdmin$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].S_ADD_ADMIN)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/group/admin/add', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].L_ADD_ADMIN, payload: res.json() }); });
        this.removeMember$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].S_ADD_MEMBER)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/group/member/remove', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].L_REMOVE_MEMBER, payload: res.json() }); });
        this.removeAdmin$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].S_REMOVE_ADMIN)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/group/admin/remove', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].L_REMOVE_ADMIN, payload: res.json() }); });
        this.updateGroup$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].S_UPDATE_GROUP)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/group/update', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].L_UPDATE_GROUP, payload: res.json() }); });
        this.saveGroup$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].S_NEW_GROUP)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/group/new', payload); })
            .mergeMap(function (res) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].from([
            { type: __WEBPACK_IMPORTED_MODULE_5__group_actions__["a" /* ActionTypes */].L_GET_GROUP, payload: res.json() },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_router_store__["a" /* go */])('/group/' + res.json()._id)
        ]); });
    }
    return GroupEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], GroupEffects.prototype, "getGroup$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], GroupEffects.prototype, "addMember$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], GroupEffects.prototype, "addAdmin$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], GroupEffects.prototype, "removeMember$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], GroupEffects.prototype, "removeAdmin$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], GroupEffects.prototype, "updateGroup$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], GroupEffects.prototype, "saveGroup$", void 0);
GroupEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _b || Object])
], GroupEffects);

var _a, _b;
//# sourceMappingURL=group.effects.js.map

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_actions__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return groupReducer; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

;
var initialState = {
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
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__group_actions__["a" /* ActionTypes */].L_GET_GROUP: {
            console.log(action.payload);
            return action.payload;
        }
        case __WEBPACK_IMPORTED_MODULE_0__group_actions__["a" /* ActionTypes */].L_ADD_MEMBER: {
            var newState = __assign({}, state, { members: state.members.concat([action.payload]) });
            return newState;
        }
        case __WEBPACK_IMPORTED_MODULE_0__group_actions__["a" /* ActionTypes */].L_ADD_ADMIN: {
            var newState = __assign({}, state, { members: state.members.concat([action.payload]) });
            return newState;
        }
        case __WEBPACK_IMPORTED_MODULE_0__group_actions__["a" /* ActionTypes */].L_REMOVE_MEMBER: {
            var tempArr = state.members.slice();
            var index = tempArr.findIndex(function (member) { return member._id === action.payload; });
            tempArr.splice(index, 1);
            return __assign({}, state, { members: tempArr });
        }
        case __WEBPACK_IMPORTED_MODULE_0__group_actions__["a" /* ActionTypes */].L_REMOVE_MEMBER: {
            var tempArr = state.admins.slice();
            var index = tempArr.findIndex(function (admin) { return admin._id === action.payload; });
            tempArr.splice(index, 1);
            return __assign({}, state, { admins: tempArr });
        }
        case __WEBPACK_IMPORTED_MODULE_0__group_actions__["a" /* ActionTypes */].L_UPDATE_GROUP: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
var groupReducer = { group: reducer };
//# sourceMappingURL=group.store.js.map

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__titlebar_titlebar_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NavModule = (function () {
    function NavModule() {
    }
    return NavModule;
}());
NavModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["a" /* SharedModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__titlebar_titlebar_component__["a" /* TitlebarComponent */], __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__titlebar_titlebar_component__["a" /* TitlebarComponent */], __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */]]
    })
], NavModule);

//# sourceMappingURL=nav.module.js.map

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = (function () {
    function SidebarComponent(store$) {
        this.store$ = store$;
        this.userLinks = store$.select(function (state) { return state.nav.userPages.userLinks; });
        this.providers = store$.select(function (state) { return state.nav.userPages.providers; });
        this.groups = store$.select(function (state) { return state.nav.userPages.groups; });
        this.events = store$.select(function (state) { return state.nav.userPages.events; });
        this.isAuthenticated = store$.select(function (state) { return state.auth.authenticated; });
    }
    SidebarComponent.prototype.goTo = function (page, param) {
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__["a" /* go */])('/' + page + (param ? '/' + param : '')));
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.store$.select(function (state) { return state.user._id; }).subscribe(function (id) {
            _this.userId = id;
        });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-nav-sidebar',
        template: __webpack_require__(319),
        styles: [__webpack_require__(301)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_actions__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavEffects = (function () {
    function NavEffects(actions$, http$) {
        var _this = this;
        this.actions$ = actions$;
        this.http$ = http$;
        this.getResults$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__nav_actions__["a" /* ActionTypes */].GET_RESULTS)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/search/all', { query: payload }); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__nav_actions__["a" /* ActionTypes */].UPDATE_RESULTS, payload: res.json() }); });
    }
    return NavEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], NavEffects.prototype, "getResults$", void 0);
NavEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _b || Object])
], NavEffects);

var _a, _b;
//# sourceMappingURL=nav.effects.js.map

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_actions__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_utils__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navReducer; });


;
var initialState = {
    searchResults: {
        providers: [],
        users: [],
        groups: [],
        events: [],
        posts: []
    },
    userPages: {
        userLinks: [],
        providers: [{ _id: '590f477cf36d281fc3b97434', user: { firstName: 'Taylor', lastName: 'Macdonald' } }],
        groups: [{ _id: '588e2a3f6bb702290088e092', name: 'AngularIL' }],
        events: [{ _id: '588e2a2630f67d154423b9dd', name: 'AngularUP' }]
    }
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__nav_actions__["a" /* ActionTypes */].CONFIG_PAGES: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                newState.userPages = payload;
                return newState;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__nav_actions__["a" /* ActionTypes */].UPDATE_PAGES: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                newState.userPages = Object.assign({}, payload);
                return newState;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__nav_actions__["a" /* ActionTypes */].UPDATE_RESULTS: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                newState.searchResults = Object.assign({}, payload);
                return newState;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__nav_actions__["a" /* ActionTypes */].CLEAR_RESULTS: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                newState.searchResults = Object.assign({}, initialState.searchResults);
                return newState;
            });
        }
        default: {
            return state;
        }
    }
}
var navReducer = { nav: reducer };
//# sourceMappingURL=nav.store.js.map

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_debounceTime__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_service_token__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitlebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TitlebarComponent = (function () {
    function TitlebarComponent(store$, LoginService, iconRegistry, sanitizer) {
        this.store$ = store$;
        this.LoginService = LoginService;
        this.authenticated = store$.select(function (state) { return state.auth.authenticated; });
        this.results = store$.select(function (state) { return state.nav.searchResults; });
        this.searchBar = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* FormControl */]();
        iconRegistry.addSvgIcon('e-logo', sanitizer.bypassSecurityTrustResourceUrl('assets/e-logo.svg'));
    }
    TitlebarComponent.prototype.goTo = function (page, object) {
        console.log('/' + page + (object ? '/' + object._id : ''));
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__["a" /* go */])('/' + page + (object ? '/' + object._id : '')));
    };
    TitlebarComponent.prototype.goToProvider = function (provider) {
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__["a" /* go */])('/provider/' + provider._id));
    };
    TitlebarComponent.prototype.goToUser = function (user) {
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__["a" /* go */])('/user/' + user._id));
    };
    TitlebarComponent.prototype.goToGroup = function (group) {
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__["a" /* go */])('/group/' + group._id));
    };
    TitlebarComponent.prototype.goToEvent = function (event) {
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__["a" /* go */])('/event/' + event._id));
    };
    TitlebarComponent.prototype.goToPost = function (post) {
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__["a" /* go */])('/post/' + post._id));
    };
    TitlebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.searchBar.valueChanges
            .debounceTime(500)
            .subscribe(function (val) {
            if (val !== '') {
                _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_8__store__["a" /* ActionTypes */].GET_RESULTS, payload: val });
            }
            else {
                _this.store$.dispatch({ type: __WEBPACK_IMPORTED_MODULE_8__store__["a" /* ActionTypes */].CLEAR_RESULTS });
            }
        });
    };
    TitlebarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return TitlebarComponent;
}());
TitlebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'el-nav-titlebar',
        template: __webpack_require__(320),
        styles: [__webpack_require__(302)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__login_service_token__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__login_service_token__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MdIconRegistry */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */]) === "function" && _d || Object])
], TitlebarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=titlebar.component.js.map

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__view_view_component__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProviderModule = (function () {
    function ProviderModule() {
    }
    return ProviderModule;
}());
ProviderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_7__view_view_component__["a" /* ViewComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_7__view_view_component__["a" /* ViewComponent */]]
    })
], ProviderModule);

//# sourceMappingURL=provider.module.js.map

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_view_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_edit_component__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return providerRoutes; });


var providerRoutes = [
    {
        path: 'provider/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__view_view_component__["a" /* ViewComponent */]
    },
    {
        path: 'provider/:id/edit',
        component: __WEBPACK_IMPORTED_MODULE_1__edit_edit_component__["a" /* EditComponent */]
    },
    {
        path: 'provider/new',
        component: __WEBPACK_IMPORTED_MODULE_1__edit_edit_component__["a" /* EditComponent */]
    }
];
//# sourceMappingURL=provider.routes.js.map

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_actions__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProviderEffects = (function () {
    function ProviderEffects(actions$, http$) {
        var _this = this;
        this.actions$ = actions$;
        this.http$ = http$;
        this.get$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__provider_actions__["a" /* ActionTypes */].S_GET_PROVIDER)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.get('/api/provider/' + payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__provider_actions__["a" /* ActionTypes */].L_GET_PROVIDER, payload: res.json() }); });
        this.add$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__provider_actions__["a" /* ActionTypes */].S_ADD_REVIEW)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/provider/review/new', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__provider_actions__["a" /* ActionTypes */].L_ADD_REVIEW, payload: res.json() }); });
        this.edit$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__provider_actions__["a" /* ActionTypes */].S_EDIT_REVIEW)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/provider/review/edit', payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__provider_actions__["a" /* ActionTypes */].L_EDIT_REVIEW, payload: res.json() }); });
        this.delete$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__provider_actions__["a" /* ActionTypes */].S_DELETE_REVIEW)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.delete('/api/provider/review/' + payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__provider_actions__["a" /* ActionTypes */].L_DELETE_REVIEW, payload: res.json() }); });
    }
    return ProviderEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], ProviderEffects.prototype, "get$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], ProviderEffects.prototype, "add$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], ProviderEffects.prototype, "edit$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], ProviderEffects.prototype, "delete$", void 0);
ProviderEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]) === "function" && _b || Object])
], ProviderEffects);

var _a, _b;
//# sourceMappingURL=provider.effects.js.map

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__provider_actions__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return providerReducer; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

;
var initialState = {
    _id: null,
    bio: '',
    rank: 0,
    fields: [],
    reviews: [],
    businessAddress: null,
    user: { firstName: '', lastName: '', avatar: { data: '' } },
    showContact: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__provider_actions__["a" /* ActionTypes */].TOGGLE_CONTACT: {
            return __assign({}, state, { showContact: !state.showContact });
        }
        case __WEBPACK_IMPORTED_MODULE_0__provider_actions__["a" /* ActionTypes */].L_GET_PROVIDER: {
            return __assign({}, action.payload, { showContact: state.showContact });
        }
        case __WEBPACK_IMPORTED_MODULE_0__provider_actions__["a" /* ActionTypes */].L_ADD_REVIEW: {
            return __assign({}, state, { reviews: state.reviews.concat([action.payload]) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__provider_actions__["a" /* ActionTypes */].L_EDIT_REVIEW: {
            var tempArr = state.reviews.slice();
            var index = tempArr.findIndex(function (review) { return review._id === action.payload._id; });
            tempArr[index] = action.payload;
            return __assign({}, state, { reviews: tempArr });
        }
        case __WEBPACK_IMPORTED_MODULE_0__provider_actions__["a" /* ActionTypes */].L_DELETE_REVIEW: {
            var tempArr = state.reviews.slice();
            var index = tempArr.findIndex(function (review) { return review._id === action.payload; });
            tempArr.splice(index, 1);
            return __assign({}, state, { reviews: tempArr });
        }
        default: {
            return state;
        }
    }
}
var providerReducer = { provider: reducer };
//# sourceMappingURL=provider.store.js.map

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValueDirective = (function () {
    function ValueDirective() {
    }
    return ValueDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ValueDirective.prototype, "value", void 0);
ValueDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[value]'
    }),
    __metadata("design:paramtypes", [])
], ValueDirective);

//# sourceMappingURL=value.directive.js.map

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeopleListComponent = (function () {
    function PeopleListComponent(store$) {
        this.store$ = store$;
    }
    PeopleListComponent.prototype.navigate = function (id) {
        this.store$.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__["a" /* go */])('/user/' + id));
    };
    return PeopleListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeopleListComponent.prototype, "members", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeopleListComponent.prototype, "admins", void 0);
PeopleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-people-list',
        template: __webpack_require__(323),
        styles: [__webpack_require__(305)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _a || Object])
], PeopleListComponent);

var _a;
//# sourceMappingURL=people-list.component.js.map

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddressPipe = (function () {
    function AddressPipe() {
    }
    AddressPipe.prototype.transform = function (address) {
        if (address === null || typeof address === 'undefined') {
            return '';
        }
        return address.street + ' ' + address.buildingNum + ' - ' + address.city + ', ' + address.country;
    };
    return AddressPipe;
}());
AddressPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'address' })
], AddressPipe);

//# sourceMappingURL=address.pipe.js.map

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateOnlyPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateOnlyPipe = (function () {
    function DateOnlyPipe() {
    }
    DateOnlyPipe.prototype.transform = function (date) {
        if (date !== null && date.indexOf('T') > -1) {
            return date.split('T')[0];
        }
        return date;
    };
    return DateOnlyPipe;
}());
DateOnlyPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'dateOnly'
    })
], DateOnlyPipe);

//# sourceMappingURL=date-only.pipe.js.map

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenderPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GenderPipe = (function () {
    function GenderPipe() {
    }
    GenderPipe.prototype.transform = function (gender) {
        switch (gender) {
            case 0: {
                return 'Male';
            }
            case 1: {
                return 'Female';
            }
            default: {
                return '';
            }
        }
    };
    return GenderPipe;
}());
GenderPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'gender' })
], GenderPipe);

//# sourceMappingURL=gender.pipe.js.map

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfTrimPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IfTrimPipe = (function () {
    function IfTrimPipe() {
    }
    IfTrimPipe.prototype.transform = function (array, trim, startNum, endNum) {
        if (!trim) {
            return array;
        }
        if (endNum === null || typeof endNum === "undefined") {
            endNum = startNum;
            startNum = 0;
        }
        return array.slice(startNum, endNum);
    };
    return IfTrimPipe;
}());
IfTrimPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ifTrim' })
], IfTrimPipe);

//# sourceMappingURL=if-trim.pipe.js.map

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpreadPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpreadPipe = (function () {
    function SpreadPipe() {
    }
    SpreadPipe.prototype.transform = function (value, args) {
        return null;
    };
    return SpreadPipe;
}());
SpreadPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'spread'
    })
], SpreadPipe);

//# sourceMappingURL=spread.pipe.js.map

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = (function () {
    function PostComponent() {
        this.newComment = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.postLiked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.postShared = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.commentLiked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.subCommentLiked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.max = this.max || 0;
        this.trim = (this.max > 0);
        this.hideComments = this.hideComments || false;
        this.comment = {
            subject: this.post,
            text: '',
            date: null,
            likes: [],
            comments: []
        };
        this.likes = 0;
    }
    PostComponent.prototype.showComments = function (id) {
        this.hideComments = false;
        this.addComment = true;
    };
    PostComponent.prototype.showChildren = function (id) {
        var index = this.post.comments.findIndex(function (comment) { return comment._id === id; });
        this.post.comments[index].showChildren = true;
    };
    PostComponent.prototype.likePost = function (id) {
        // this.postLiked.emit(id);
        this.likes++;
    };
    PostComponent.prototype.sharePost = function (id) {
        this.postShared.emit(id);
    };
    PostComponent.prototype.likeComment = function (id) {
        this.commentLiked.emit(id);
    };
    PostComponent.prototype.likeSubComment = function (id, sub_id) {
        this.subCommentLiked.emit({ commentId: id, subCommentId: sub_id });
    };
    PostComponent.prototype.postComment = function () {
        this.comment.date = new Date(Date.now());
        this.newComment.emit(this.comment);
        this.comment.text = '';
    };
    return PostComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PostComponent.prototype, "post", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PostComponent.prototype, "max", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PostComponent.prototype, "hideComments", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PostComponent.prototype, "newComment", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PostComponent.prototype, "postLiked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PostComponent.prototype, "postShared", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PostComponent.prototype, "commentLiked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PostComponent.prototype, "subCommentLiked", void 0);
PostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'el-post',
        template: __webpack_require__(324),
        styles: [__webpack_require__(306)]
    }),
    __metadata("design:paramtypes", [])
], PostComponent);

//# sourceMappingURL=post.component.js.map

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_value_directive__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_post_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__people_list_people_list_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_if_trim_pipe__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_address_pipe__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_gender_pipe__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_http_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_date_only_pipe__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_spread_pipe__ = __webpack_require__(229);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthConfig"](), http, options);
}









var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdIconModule */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]]
            },
            __WEBPACK_IMPORTED_MODULE_12__providers_http_service__["a" /* HttpService */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_6__directives_value_directive__["a" /* ValueDirective */], __WEBPACK_IMPORTED_MODULE_7__post_post_component__["a" /* PostComponent */], __WEBPACK_IMPORTED_MODULE_8__people_list_people_list_component__["a" /* PeopleListComponent */], __WEBPACK_IMPORTED_MODULE_9__pipes_if_trim_pipe__["a" /* IfTrimPipe */], __WEBPACK_IMPORTED_MODULE_10__pipes_address_pipe__["a" /* AddressPipe */], __WEBPACK_IMPORTED_MODULE_11__pipes_gender_pipe__["a" /* GenderPipe */], __WEBPACK_IMPORTED_MODULE_13__pipes_date_only_pipe__["a" /* DateOnlyPipe */], __WEBPACK_IMPORTED_MODULE_14__pipes_spread_pipe__["a" /* SpreadPipe */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__directives_value_directive__["a" /* ValueDirective */], __WEBPACK_IMPORTED_MODULE_7__post_post_component__["a" /* PostComponent */], __WEBPACK_IMPORTED_MODULE_8__people_list_people_list_component__["a" /* PeopleListComponent */], __WEBPACK_IMPORTED_MODULE_9__pipes_if_trim_pipe__["a" /* IfTrimPipe */], __WEBPACK_IMPORTED_MODULE_10__pipes_address_pipe__["a" /* AddressPipe */], __WEBPACK_IMPORTED_MODULE_11__pipes_gender_pipe__["a" /* GenderPipe */], __WEBPACK_IMPORTED_MODULE_13__pipes_date_only_pipe__["a" /* DateOnlyPipe */], __WEBPACK_IMPORTED_MODULE_14__pipes_spread_pipe__["a" /* SpreadPipe */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_router_store__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SharedEffects = (function () {
    function SharedEffects(actions$, http$, store$) {
        this.actions$ = actions$;
        this.http$ = http$;
        this.store$ = store$;
        this.loadUserData$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__auth__["c" /* ActionTypes */].LOAD_USER_DATA)
            .map(function (action) { return action.payload; })
            .mergeMap(function (data) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].from([
            { type: __WEBPACK_IMPORTED_MODULE_10__nav__["b" /* ActionTypes */].CONFIG_PAGES, payload: data.links },
            { type: __WEBPACK_IMPORTED_MODULE_11__user__["b" /* ActionTypes */].L_GET_USER, payload: data.user }
        ]); });
        this.getUser$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__auth__["c" /* ActionTypes */].LOAD_USER)
            .map(function (action) { return action.payload; })
            .map(function (user) { return ({ type: __WEBPACK_IMPORTED_MODULE_11__user__["b" /* ActionTypes */].L_GET_USER, payload: user }); });
        this.saveUser$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__auth__["c" /* ActionTypes */].SAVE_USER)
            .map(function (action) { return action.payload; })
            .mergeMap(function (user) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].from([
                { type: __WEBPACK_IMPORTED_MODULE_9__auth__["c" /* ActionTypes */].AUTH_SUCCESS, payload: localStorage.getItem('token') },
                { type: __WEBPACK_IMPORTED_MODULE_11__user__["b" /* ActionTypes */].S_NEW_USER, payload: user },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__ngrx_router_store__["a" /* go */])('/feed')
            ]);
        });
    }
    return SharedEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], SharedEffects.prototype, "loadUserData$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], SharedEffects.prototype, "getUser$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], SharedEffects.prototype, "saveUser$", void 0);
SharedEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["a" /* Store */]) === "function" && _c || Object])
], SharedEffects);

var _a, _b, _c;
//# sourceMappingURL=shared.effects.js.map

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_actions__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_router_store__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserEffects = (function () {
    function UserEffects(actions$, http$) {
        var _this = this;
        this.actions$ = actions$;
        this.http$ = http$;
        this.getUser$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__user_actions__["a" /* ActionTypes */].S_GET_USER)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.get('/api/user/' + payload); })
            .map(function (res) { return ({ type: __WEBPACK_IMPORTED_MODULE_5__user_actions__["a" /* ActionTypes */].L_GET_USER, payload: res.json() }); });
        this.userUpdate$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__user_actions__["a" /* ActionTypes */].S_USER_UPDATE)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/user/update', payload); })
            .mergeMap(function (res) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].from([
            { type: __WEBPACK_IMPORTED_MODULE_5__user_actions__["a" /* ActionTypes */].L_USER_UPDATE, payload: res.json() },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_router_store__["a" /* go */])('/user/' + res.json()._id)
        ]); });
        this.saveUser$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__user_actions__["a" /* ActionTypes */].S_NEW_USER)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.http$.post('/api/user/new', payload); })
            .mergeMap(function (res) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].from([
            { type: __WEBPACK_IMPORTED_MODULE_5__user_actions__["a" /* ActionTypes */].L_GET_USER, payload: res.json() },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_router_store__["a" /* go */])('/user/' + res.json()._id)
        ]); });
    }
    return UserEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], UserEffects.prototype, "getUser$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], UserEffects.prototype, "userUpdate$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], UserEffects.prototype, "saveUser$", void 0);
UserEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _b || Object])
], UserEffects);

var _a, _b;
//# sourceMappingURL=user.effects.js.map

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_actions__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_utils__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userReducer; });


;
var initialState = {
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
    isProvider: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__user_actions__["a" /* ActionTypes */].L_GET_USER: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                return Object.assign({}, newState, payload);
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__user_actions__["a" /* ActionTypes */].L_USER_UPDATE: {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["b" /* safeAction */])(action, state, function (payload, newState) {
                return Object.assign({}, newState, payload);
            });
        }
        default: {
            return state;
        }
    }
}
var userReducer = { user: reducer };
//# sourceMappingURL=user.store.js.map

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_view_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_edit_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__view_view_component__["a" /* ViewComponent */], __WEBPACK_IMPORTED_MODULE_5__edit_edit_component__["a" /* EditComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__view_view_component__["a" /* ViewComponent */], __WEBPACK_IMPORTED_MODULE_5__edit_edit_component__["a" /* EditComponent */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_edit_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_view_component__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRoutes; });


var userRoutes = [
    {
        path: 'user/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__view_view_component__["a" /* ViewComponent */]
    },
    {
        path: 'user/:id/edit',
        component: __WEBPACK_IMPORTED_MODULE_0__edit_edit_component__["a" /* EditComponent */]
    },
    {
        path: 'user/new',
        component: __WEBPACK_IMPORTED_MODULE_0__edit_edit_component__["a" /* EditComponent */]
    }
];
//# sourceMappingURL=user.routes.js.map

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".app-content {\r\n  padding: 20px;\r\n}\r\n\r\n.app-content md-card {\r\n  margin: 20px 20px 20px 28%;\r\n  width: 40%\r\n}\r\n\r\n.app-content md-checkbox {\r\n  margin: 10px;\r\n}\r\n\r\n.mat-sidenav-container[fullscreen] {\r\n  top: 64px;\r\n}\r\n\r\n@media (max-width:600px) and (orientation:portrait) {\r\n  .mat-sidenav-container[fullscreen] {\r\n    top: 56px;\r\n  }\r\n}\r\n\r\n@media (max-width:960px) and (orientation:landscape) {\r\n  .mat-sidenav-container[fullscreen] {\r\n    top: 48px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".login-card {\r\n  width: 400px;\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n  top: 25%;\r\n}\r\n\r\n.background {\r\n  position: absolute;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  right: 0px;\r\n  background-image: url(\"/assets/background.jpg\");\r\n  background-color: #cccccc;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n\r\nmd-card-actions > p {\r\n  margin: 0px 0.5em 0.5em 1em;\r\n}\r\n\r\nmd-card-actions > p > span {\r\n  color: #673ab7;\r\n  cursor: pointer;\r\n    -ms-touch-action: manipulation;\r\n        touch-action: manipulation;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n    padding: 6px 12px;\r\n    margin-bottom: 0;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    line-height: 1.42857143;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    -ms-touch-action: manipulation;\r\n        touch-action: manipulation;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.btn.wide {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.btn.wide + .btn.wide {\r\n    margin-top: 10px;\r\n}\r\n\r\n.btn-social {\r\n    position: relative;\r\n    padding-left: 44px;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.btn-social>:first-child {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 32px;\r\n    height: auto;\r\n    line-height: 34px;\r\n    font-size: 1.6em;\r\n    text-align: center;\r\n    border-right: 1px solid rgba(0,0,0,0.2);\r\n}\r\n\r\n.facebook {\r\n    color: #fff;\r\n    background-color: #3b5998;\r\n    border-color: rgba(0,0,0,0.2);\r\n}\r\n\r\n.google {\r\n    color: #fff;\r\n    background-color: #dd4b39;\r\n    border-color: rgba(0,0,0,0.2);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".background {\r\n  position: absolute;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  right: 0px;\r\n  background-image: url(\"/assets/background.jpg\");\r\n  background-color: #cccccc;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n\r\n.registration-card {\r\n  width: 500px;\r\n  padding: 24px 48px;\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.mat-radio-button {\r\n  margin: 0 0 0 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".app-sidenav {\r\n  padding: 10px;\r\n  min-width: 100px;\r\n  box-shadow: 0 1px 5px 1px rgba(0,0,0,.14);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "md-toolbar, md-toolbar > :not([md-button]) {\r\n  -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  cursor: default;\r\n}\r\n\r\nmd-toolbar {\r\n  padding-right: 0px;\r\n}\r\n\r\n.hidden-block {\r\n  visibility: hidden;\r\n}\r\n\r\n.app-search-bar > .mat-input-wrapper > .mat-input-table > .mat-input-infix {\r\n  padding-right: 10px!important; \r\n}\r\n\r\n.app-search-bar > .mat-input-wrapper > .mat-input-table > .mat-input-infix > input {\r\n  padding-top: 5px!important;\r\n  padding-left: 5px!important;\r\n  padding-right: 5px!important; \r\n}\r\n\r\n.app-toolbar-menu {\r\n  padding: 6px 10px 0 14px;\r\n  color: white;\r\n}\r\n\r\n.app-icon-button {\r\n  box-shadow: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  -webkit-filter: none;\r\n          filter: none;\r\n  font-weight: normal;\r\n  height: auto;\r\n  line-height: inherit;\r\n  margin: 0 10px 0 0;\r\n  min-width: 0;\r\n  padding: 0;\r\n  text-align: left;\r\n  text-decoration: none;\r\n}\r\nspan[mdSuffix] {\r\n    box-shadow: 0 -7px 8px 3px rgba(0,0,0,.14);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".app-frame {\r\n    border: 1px solid black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "md-icon[md-list-avatar] {\r\n  -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  cursor: default;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "md-card-title-group.app-hypercard {\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-color: #F5F1FB;\r\n  background-color: #F5F1FB;\r\n  padding: 15px 10px 5px 10px;\r\n  cursor: pointer;\r\n}\r\n\r\nmd-card-title-group.app-hypercard:hover {\r\n  border-color: #673AB7; \r\n}\r\n\r\nmd-card-title-group.app-hypercard.rtl img {\r\n  min-width: 112px;\r\n}\r\n\r\na.app-hypercard-wrapper {\r\n  text-decoration: none;\r\n  color: black!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 309 */,
/* 310 */,
/* 311 */
/***/ (function(module, exports) {

module.exports = "<el-nav-titlebar></el-nav-titlebar>\n<md-sidenav-container fullscreen>\n    <el-nav-sidebar></el-nav-sidebar>\n    <div class=\"app-content\">\n        <router-outlet></router-outlet>\n    </div>\n</md-sidenav-container>"

/***/ }),
/* 312 */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n    <md-card *ngIf=\"(isNewUser | async)\" class=\"login-card\">\n        <md-card-title>Sign up</md-card-title>\n        <md-card-content>\n            <p *ngIf=\"error | async\">{{ error | async }}</p>\n            <p></p>\n            <button (click)=\"fregister()\" class=\"btn wide btn-social facebook\"><md-icon fontSet=\"fa\" fontIcon=\"fa-facebook\"></md-icon>Login via Facebook</button>\n            <button (click)=\"gregister()\" class=\"btn wide btn-social google\"><md-icon fontSet=\"fa\" fontIcon=\"fa-google\"></md-icon>Login via Google</button>\n        </md-card-content>\n        <md-card-actions>\n            <p>Already a user? <span (click)=\"toggleAction()\">Sign in</span></p>\n        </md-card-actions>\n    </md-card>\n    <md-card *ngIf=\"!(isNewUser | async)\" class=\"login-card\">\n        <md-card-title>Sign in</md-card-title>\n        <md-card-content>\n            <p *ngIf=\"error | async\">{{ error | async }}</p>\n            <p></p>\n            <button (click)=\"flogin()\" class=\"btn wide btn-social facebook\"><md-icon fontSet=\"fa\" fontIcon=\"fa-facebook\"></md-icon>Login via Facebook</button>\n            <button (click)=\"glogin()\" class=\"btn wide btn-social google\"><md-icon fontSet=\"fa\" fontIcon=\"fa-google\"></md-icon>Login via Google</button>\n        </md-card-content>\n        <md-card-actions>\n            <p>Not a user yet? <span (click)=\"toggleAction()\">Sign up</span></p>\n        </md-card-actions>\n    </md-card>\n</div>"

/***/ }),
/* 313 */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <md-card class=\"registration-card\">\n    <md-card-header>\n      <md-card-title>\n        <h1>Registration</h1>\n      </md-card-title>\n    </md-card-header>\n    <md-card-content>\n      <p>Please verify your information and click register below...</p>\n      <form #form=\"ngForm\">\n        <div>\n          <md-input-container floatPlaceholder=\"always\">\n            <input type=\"text\" mdInput placeholder=\"First Name\" [ngModel]=\"firstName | async\" name=\"firstName\">\n          </md-input-container>\n          <md-input-container floatPlaceholder=\"always\">\n            <input type=\"text\" mdInput placeholder=\"Last Name\" [ngModel]=\"lastName | async\" name=\"lastName\">\n          </md-input-container>\n        </div>\n        <div>\n          <md-input-container floatPlaceholder=\"always\">\n            <input type=\"email\" mdInput placeholder=\"E-Mail\" [ngModel]=\"email | async\" name=\"email\">\n          </md-input-container>\n          <md-input-container floatPlaceholder=\"always\">\n            <input type=\"tel\" mdInput placeholder=\"Phone\" [ngModel]=\"phone | async\" name=\"phone\">\n          </md-input-container>\n        </div>\n        <div>\n          <md-select floatPlaceholder=\"always\" placeholder=\"Gender\" [ngModel]=\"gender | async\"  name=\"gender\">\n            <md-option value=\"0\">Male</md-option>\n            <md-option value=\"1\">Female</md-option>\n          </md-select>\n          <md-input-container floatPlaceholder=\"always\">\n            <input type=\"date\" mdInput placeholder=\"Birthday\" [ngModel]=\"birthday | async | dateOnly\" name=\"birthday\">\n          </md-input-container>\n        </div>\n        <fieldset ngModelGroup=\"address\">\n          <p>Address:</p>\n          <div>\n            <md-input-container floatPlaceholder=\"always\">\n              <input type=\"text\" mdInput placeholder=\"Street\" [ngModel]=\"(address | async)?.street\" name=\"street\">\n            </md-input-container>\n            <md-input-container floatPlaceholder=\"always\">\n              <input type=\"text\" mdInput placeholder=\"Building Number\" [ngModel]=\"(address | async)?.buildingNum\" name=\"buildingNum\">\n            </md-input-container>\n          </div>\n          <div>\n            <md-input-container floatPlaceholder=\"always\">\n              <input type=\"text\" mdInput placeholder=\"City\" [ngModel]=\"(address | async)?.city\" name=\"city\">\n            </md-input-container>\n            <md-input-container floatPlaceholder=\"always\">\n              <input type=\"text\" mdInput placeholder=\"Country\" [ngModel]=\"(address | async)?.country\" name=\"country\">\n            </md-input-container>\n          </div>\n        </fieldset>\n      </form>\n    </md-card-content>\n    <md-card-actions>\n      <span class=\"app-filler\"></span>\n      <button md-raised-button color=\"primary\" (click)=\"register(form)\">Register</button>\n    </md-card-actions>\n  </md-card>\n</div>"

/***/ }),
/* 314 */
/***/ (function(module, exports) {

module.exports = "  <md-card>\n    <md-card-header>\n      <md-card-title>\n        <h1 *ngIf=\"isNew\">New Event</h1>\n        <h1 *ngIf=\"!isNew\">Edit Event</h1>\n      </md-card-title>\n    </md-card-header>\n    <md-card-content>\n      <form #form=\"ngForm\">\n        <input type=\"hidden\" [ngModel]=\"_id | async\"  name=\"_id\">\n        <div>\n          <md-input-container>\n            <input type=\"text\" mdInput placeholder=\"Name\" [ngModel]=\"name | async\" name=\"name\">\n          </md-input-container>\n          <md-checkbox [ngModel]=\"private | async\" name=\"private\">Make Event Private?</md-checkbox>\n        </div>\n        <div>\n          <md-input-container>\n            <input type=\"date\" mdInput placeholder=\"Start Time\" [ngModel]=\"startDate | async | dateOnly\" name=\"startDate\">\n          </md-input-container>\n          <md-input-container>\n            <input type=\"date\" mdInput placeholder=\"End Time\" [ngModel]=\"endDate | async | dateOnly\" name=\"endDate\">\n          </md-input-container>\n        </div>\n        <div>\n          <md-input-container>\n            <textarea rows=\"4\" cols=\"50\" mdInput placeholder=\"Description\" [ngModel]=\"description | async\" name=\"description\"></textarea>\n          </md-input-container>\n        </div>\n        <fieldset ngModelGroup=\"address\">\n          <p>Address:</p>\n          <div>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"Street\" [ngModel]=\"(address | async)?.street\" name=\"street\">\n            </md-input-container>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"Building Number\" [ngModel]=\"(address | async)?.buildingNum\" name=\"buildingNum\">\n            </md-input-container>\n          </div>\n          <div>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"City\" [ngModel]=\"(address | async)?.city\" name=\"city\">\n            </md-input-container>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"Country\" [ngModel]=\"(address | async)?.country\" name=\"country\">\n            </md-input-container>\n          </div>\n        </fieldset>\n      </form>\n    </md-card-content>\n    <md-card-actions>\n      <span class=\"app-filler\"></span>\n      <button md-raised-button (click)=\"cancel(form)\">Cancel</button>\n      <button md-raised-button color=\"primary\" (click)=\"save(form)\">Save</button>\n    </md-card-actions>\n  </md-card>\n"

/***/ }),
/* 315 */
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <img md-card-md-image src=\"https://img.clipartfest.com/377cb8d0d8ddbb3467fb9ea2c6dd323a_soccer-team-clipart-soccer-team-clipart_1500-1107.jpeg\">\n    <input type=\"hidden\" #id [ngModel]=\"_id | async\"  name=\"_id\">\n    <md-card-title>\n      <h1>{{name | async}}</h1>\n      <button md-icon-button (click)=\"edit(id.value)\"><md-icon>mode_edit</md-icon></button>\n    </md-card-title>\n    <md-card-subtitle>\n      <p><b>Location: </b>{{ address | async | address }}</p>\n    </md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n    <p><b>Starts: </b><span class=\"line-2\">{{startDate | async | date:'yMMMdjm'}}</span></p>\n    <p><b>Ends: </b><span class=\"line-2\">{{endDate | async | date:'yMMMdjm'}}</span></p>\n    <br>\n    <p><b>Created by: </b><a class=\"app-link\" routerLink=\"/user/{{(owner | async)?._id}}\">{{(owner | async)?.firstName}} {{(owner | async)?.lastName}}</a></p>\n    <p><b>Provider: </b><a class=\"app-link\" routerLink=\"/provider/{{(provider | async)?._id}}\">{{(provider | async)?.user.firstName}} {{(provider | async)?.user.lastName}}</a></p>\n    <br>\n    <p>\n      <b>Description:</b>\n    </p>\n    <p>{{description | async}}</p>\n  </md-card-content>\n</md-card>\n<md-card>\n  <md-card-title>Participants</md-card-title>\n  <md-card-content>\n    <el-people-list [members]=\"members | async\" [admins]=\"admins | async\"></el-people-list>\n  </md-card-content>\n</md-card>\n<el-post [post]=\"post\" max=2 *ngFor=\"let post of posts | async\"></el-post>"

/***/ }),
/* 316 */
/***/ (function(module, exports) {

module.exports = "<el-post [post]=\"post\" max=3 (newComment)=\"postComment($event)\" (postLiked)=\"likePost($event)\" (postShared)=\"sharePost($event)\"\n    (commentLiked)=\"likeComment($event)\" (subCommentLiked)=\"likeSubComment($event)\" *ngFor=\"let post of posts | async\"></el-post>"

/***/ }),
/* 317 */
/***/ (function(module, exports) {

module.exports = "  <md-card>\n    <md-card-header>\n      <md-card-title>\n        <h1 *ngIf=\"isNew\">New Group</h1>\n        <h1 *ngIf=\"!isNew\">Edit Group</h1>\n      </md-card-title>\n    </md-card-header>\n    <md-card-content>\n      <form #form=\"ngForm\">\n        <input type=\"hidden\" [ngModel]=\"_id | async\"  name=\"_id\">\n        <div>\n          <md-input-container>\n            <input type=\"text\" mdInput placeholder=\"Name\" [ngModel]=\"name | async\" name=\"name\">\n          </md-input-container>\n        </div>\n        <div>\n          <md-input-container>\n            <textarea rows=\"4\" cols=\"50\" mdInput placeholder=\"Description\" [ngModel]=\"email | async\" name=\"description\"></textarea>\n          </md-input-container>\n        </div>\n        <div>\n          <p>List the things the group is about in a comma seperated list</p>\n          <md-input-container>\n            <textarea rows=\"4\" cols=\"50\" mdInput placeholder=\"Group Type\" [ngModel]=\"groupType | async | spread\" name=\"groupType\"></textarea>\n          </md-input-container>\n        </div>\n        <fieldset ngModelGroup=\"address\">\n          <p>Address:</p>\n          <div>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"Street\" [ngModel]=\"(address | async)?.street\" name=\"street\">\n            </md-input-container>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"Building Number\" [ngModel]=\"(address | async)?.buildingNum\" name=\"buildingNum\">\n            </md-input-container>\n          </div>\n          <div>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"City\" [ngModel]=\"(address | async)?.city\" name=\"city\">\n            </md-input-container>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"Country\" [ngModel]=\"(address | async)?.country\" name=\"country\">\n            </md-input-container>\n          </div>\n        </fieldset>\n      </form>\n    </md-card-content>\n    <md-card-actions>\n      <span class=\"app-filler\"></span>\n      <button md-raised-button (click)=\"cancel(form)\">Cancel</button>\n      <button md-raised-button color=\"primary\" (click)=\"save(form)\">Save</button>\n    </md-card-actions>\n  </md-card>"

/***/ }),
/* 318 */
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <img md-card-md-image src=\"https://img.clipartfest.com/377cb8d0d8ddbb3467fb9ea2c6dd323a_soccer-team-clipart-soccer-team-clipart_1500-1107.jpeg\">\n    <input type=\"hidden\" #id [ngModel]=\"_id | async\"  name=\"_id\">\n    <md-card-title>\n      <h1>{{name | async}}</h1>\n      <button md-icon-button (click)=\"edit(id.value)\"><md-icon>mode_edit</md-icon></button>\n    </md-card-title>\n    <md-card-subtitle>\n      <p><b>Location:</b> {{ address | async | address }}</p>\n      <p>\n        <span>\n          <b>Topics: </b>\n        </span>\n        <md-chip-list>\n          <md-chip *ngFor=\"let type of groupType | async\">{{ type }}</md-chip>\n        </md-chip-list>\n      </p>\n    </md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n    <p>\n      <b>Created by: </b>\n      <a class=\"app-link\" routerLink=\"/user/{{(owner | async)?._id}}\">{{(owner | async)?.firstName}} {{(owner | async)?.lastName}}</a>\n    </p>\n    <p>\n      <b>Provider: </b>\n      <a class=\"app-link\" routerLink=\"/provider/{{(provider | async)?._id}}\">{{(provider | async)?.user.firstName}} {{(provider | async)?.user.lastName}}</a>\n    </p>\n    <br>\n    <p>\n      <b>Description:</b>\n    </p>\n    <p>{{description | async}}</p>\n  </md-card-content>\n</md-card>\n<md-card>\n  <md-card-title>Participants</md-card-title>\n  <md-card-content>\n    <el-people-list [members]=\"members | async\" [admins]=\"admins | async\"></el-people-list>\n  </md-card-content>\n</md-card>\n<el-post [post]=\"post\" max=2 *ngFor=\"let post of posts | async\"></el-post>"

/***/ }),
/* 319 */
/***/ (function(module, exports) {

module.exports = "<md-sidenav mode=\"side\" [opened]=\"isAuthenticated | async\" class=\"app-sidenav\">\n    <md-list>\n        <h3 md-subheader>User</h3>\n        <md-list-item class=\"app-list-button\" (click)=\"goTo('feed')\">\n            <md-icon md-list-icon>person</md-icon>\n            <p md-line>My Feed</p>\n            <div class=\"app-list-item-focus-overlay\"></div>\n        </md-list-item>\n        <md-list-item class=\"app-list-button\" (click)=\"goTo('user', userId)\">\n            <md-icon md-list-icon>person</md-icon>\n            <p md-line>Profile</p>\n            <div class=\"app-list-item-focus-overlay\"></div>\n        </md-list-item>\n        <!--<md-list-item *ngFor=\"let link of userLinks | async\" class=\"app-list-button\" (click)=\"goTo(link?.type, link?._id)\">\n            <md-icon md-list-icon>person</md-icon>\n            <p md-line>{{link.name}}</p>\n            <div class=\"app-list-item-focus-overlay\"></div>\n        </md-list-item>-->\n        <md-divider></md-divider>\n        <h3 md-subheader>Providers</h3>\n        <md-list-item *ngFor=\"let provider of providers | async\" class=\"app-list-button\" (click)=\"goTo('provider', provider._id)\">\n            <md-icon md-list-icon>person_outline</md-icon>\n            <p md-line>{{provider?.user.firstName}} {{provider?.user.lastName}}</p>\n            <div class=\"app-list-item-focus-overlay\"></div>\n        </md-list-item>\n        <md-list-item *ngIf=\"(providers | async)?.length == 0\">\n            <p><!-- Empty item for conditional spacing --></p>\n        </md-list-item>\n        <md-divider></md-divider>\n        <h3 md-subheader>Groups</h3>\n        <md-list-item (click)=\"goTo('group', 'new')\">\n            <md-icon md-list-icon>add</md-icon>\n            <p md-line>New Group</p>\n            <div class=\"app-list-item-focus-overlay\"></div>\n        </md-list-item>\n        <md-list-item *ngFor=\"let group of groups | async\" class=\"app-list-button\" (click)=\"goTo('group', group._id)\">\n            <md-icon md-list-icon>group</md-icon>\n            <p md-line>{{group?.name}}</p>\n            <div class=\"app-list-item-focus-overlay\"></div>\n        </md-list-item>\n        <md-list-item *ngIf=\"(groups | async)?.length == 0\">\n            <p><!-- Empty item for conditional spacing --></p>\n        </md-list-item>\n        <md-divider></md-divider>\n        <h3 md-subheader>Events</h3>\n        <md-list-item (click)=\"goTo('event', 'new')\">\n            <md-icon md-list-icon>add</md-icon>\n            <p md-line>New Event</p>\n            <div class=\"app-list-item-focus-overlay\"></div>\n        </md-list-item>\n        <md-list-item *ngFor=\"let event of events | async\" class=\"app-list-button\" (click)=\"goTo('event', event._id)\">\n            <md-icon md-list-icon>event</md-icon>\n            <p md-line>{{event?.name}}</p>\n            <div class=\"app-list-item-focus-overlay\"></div>\n        </md-list-item>\n    </md-list>\n</md-sidenav>"

/***/ }),
/* 320 */
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n    <button [ngClass]=\"{'hidden-block': !(authenticated | async), 'app-icon-button': true}\">\n      <i class=\"material-icons app-toolbar-menu\">menu</i>\n    </button>\n\n    <!--<md-icon svgIcon=\"e-logo\"></md-icon>-->\n    <img src=\"assets/e-logo.png\" style=\"height: 36px; width: 36px\">\n    <span class=\"app-button\" (click)=\"goTo('feed')\">lation</span>\n\n    <span class=\"app-filler\"></span>\n    <div *ngIf=\"authenticated | async\">\n        <md-input-container class=\"app-search-bar\">\n            <input type=\"text\" mdInput [formControl]=\"searchBar\" [mdAutocomplete]=\"auto\">\n            <span mdSuffix> <md-icon fontSet=\"glyphicon\" fontIcon=\"glyphicon-search\"></md-icon></span>\n        </md-input-container>\n        <button md-button (click)=\"LoginService.logout()\">Logout</button>\n    </div>\n</md-toolbar>\n\n<md-autocomplete #auto=\"mdAutocomplete\">\n    <p md-subheader *ngIf=\"(results | async)?.providers.length > 0\">Providers</p>\n    <md-option *ngFor=\"let result of (results | async)?.providers\" (onSelect)=\"goToProvider(result)\" value=\"\">\n        <span>{{ result.user.firstName }} {{ result.user.lastName }}</span>\n    </md-option>\n    <p md-subheader *ngIf=\"(results | async)?.users.length > 0\">Users</p>\n    <md-option *ngFor=\"let result of (results | async)?.users\" (onSelect)=\"goToUser(result)\" value=\"\">\n        <span>{{ result.firstName }} {{ result.lastName }}</span>\n    </md-option>\n    <p md-subheader *ngIf=\"(results | async)?.groups.length > 0\">Groups</p>\n    <md-option *ngFor=\"let result of (results | async)?.groups\" (onSelect)=\"goToGroup(result)\" value=\"\">\n        <span>{{ result.name }}</span>\n    </md-option>\n    <p md-subheader *ngIf=\"(results | async)?.events.length > 0\">Events</p>\n    <md-option *ngFor=\"let result of (results | async)?.events\" (onSelect)=\"goToEvent(result)\" value=\"\">\n        <span>{{ result.name }}</span>\n    </md-option>\n    <!--<p md-subheader *ngIf=\"(results | async)?.posts.length > 0\">Posts</p>\n    <md-option *ngFor=\"let result of (results | async)?.posts\" (onSelect)=\"goTo('provider', result)\" [value]=\"result\">\n        <span>{{ result.title }}</span>\n    </md-option>-->\n</md-autocomplete>"

/***/ }),
/* 321 */
/***/ (function(module, exports) {

module.exports = "  <md-card>\n    <md-card-header>\n      <md-card-title>\n        <h1 *ngIf=\"isNew\">New Provider</h1>\n        <h1 *ngIf=\"!isNew\">Edit Profile</h1>\n      </md-card-title>\n    </md-card-header>\n    <md-card-content>\n      <form #form=\"ngForm\">\n        <input type=\"hidden\" [ngModel]=\"_id | async\"  name=\"_id\">\n        <div>\n          <md-input-container>\n            <textarea rows=\"4\" cols=\"50\" mdInput placeholder=\"Bio\" [ngModel]=\"bio | async\" name=\"bio\"></textarea>\n          </md-input-container>\n        </div>\n        <fieldset ngModelGroup=\"businessAddress\">\n          <p>Address:</p>\n          <div>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"Street\" [ngModel]=\"(businessAddress | async)?.street\" name=\"street\">\n            </md-input-container>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"Building Number\" [ngModel]=\"(businessAddress | async)?.buildingNum\" name=\"buildingNum\">\n            </md-input-container>\n          </div>\n          <div>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"City\" [ngModel]=\"(businessAddress | async)?.city\" name=\"city\">\n            </md-input-container>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"Country\" [ngModel]=\"(businessAddress | async)?.country\" name=\"country\">\n            </md-input-container>\n          </div>\n        </fieldset>\n      </form>\n    </md-card-content>\n    <md-card-actions>\n      <span class=\"app-filler\"></span>\n      <button md-raised-button (click)=\"cancel(form)\">Cancel</button>\n      <button md-raised-button color=\"primary\" (click)=\"save(form)\">Save</button>\n    </md-card-actions>\n  </md-card>"

/***/ }),
/* 322 */
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <img md-card-md-image src=\"{{(user | async).avatar?.data}}\">\n    <md-card-title>\n      <h1>{{(user | async)?.firstName }} {{(user | async)?.lastName}}</h1>\n      <md-chip-list>\n        <md-chip>Rank: {{ rank | async }}</md-chip>\n      </md-chip-list>\n    </md-card-title>\n    <md-card-subtitle>\n      <p><b>Address:</b> {{ businessAddress | async | address }}</p>\n    </md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n    <button md-raised-button (click)=\"toggleContact()\">{{(showContact | async) ? \"Hide\" : \"Show\"}} Contact Details</button>\n    <div *ngIf=\"showContact | async\" >\n      <p>\n        <b>Phone: </b>\n        <span class=\"line-2\">{{(user | async)?.phone}}</span>\n      </p>\n      <p>\n        <b>Email: </b>\n        <span class=\"line-2\">{{(user | async)?.email}}</span>\n      </p>\n    </div>\n    <br>\n    <p>\n      <b>About:</b>\n    </p>\n    <p>{{bio | async}}</p>\n  </md-card-content>\n</md-card>\n<md-card>\n  <md-card-title>Reviews</md-card-title>\n  <md-card-content>\n    <md-list>\n      <md-list-item *ngFor=\"let review of reviews | async\">\n        <p md-line>\n          <em><a routerLink=\"/user/{{review.user?._id}}\">{{review.user?.firstName}} {{review.user?.lastName}}</a></em>\n          <span class=\"app-filler\"></span>\n          <span class=\"line-2\">{{review.date | date:'mediumDate' }}</span>\n        </p>\n        <p md-line>{{review.text}}</p>\n        <p md-line><span class=\"app-filler\"></span><span class=\"line-2\">{{review.rating}}</span></p>\n      </md-list-item>\n    </md-list>\n  </md-card-content>\n</md-card>"

/***/ }),
/* 323 */
/***/ (function(module, exports) {

module.exports = "<md-list>\n   <h3 md-subheader>Admins</h3>\n   <md-list-item *ngFor=\"let admin of admins\" (click)=\"navigate(admin._id)\">\n      <md-icon md-list-avatar>person</md-icon>\n      <h4 md-line>{{admin?.firstName}} {{admin?.lastName}}</h4>\n   </md-list-item>\n   <md-divider></md-divider>\n   <h3 md-subheader>Members</h3>\n   <md-list-item *ngFor=\"let member of members\" (click)=\"navigate(member._id)\">\n      <md-icon md-list-avatar>person_outline</md-icon>\n      <h4 md-line>{{member?.firstName}} {{member?.lastName}}</h4>\n   </md-list-item>\n</md-list>"

/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <md-card-header>\n        <img *ngIf=\"!post.source\" md-card-avatar [src]=\"post.user?.avatar.data\">\n        <md-card-title *ngIf=\"!post.source\"><b>{{post.user?.firstName}} {{post.user?.lastName}}</b></md-card-title>\n        <md-card-title *ngIf=\"post.source\"><b>{{post.source}}</b></md-card-title>\n        <md-card-subtitle>{{post.date | date:'medium'}}</md-card-subtitle>\n    </md-card-header>\n    <img *ngIf=\"!post.source && post.media && post.media.length > 0\" md-card-image [src]=\"post.media[0].data\">\n    <md-card-content>\n        <h4 *ngIf=\"!post.source\" [ngClass]=\"{'rtl': post.rtl}\">{{post.title}}</h4>\n        <p *ngIf=\"!post.source\" [ngClass]=\"{'rtl': post.rtl}\">{{post.body}}</p>\n        <a href=\"{{post.hyperlink}}\" class=\"app-hypercard-wrapper\">\n            <md-card-title-group *ngIf=\"post.source\" [ngClass]=\"{'app-hypercard': true, 'rtl': post.rtl}\">\n                <md-card-title>{{post.title}}</md-card-title>\n                <md-card-subtitle>{{post.body}}</md-card-subtitle>\n                <img md-card-md-image [src]=\"post.media[0].data\"/>\n            </md-card-title-group>\n        </a>\n        <md-chip-list>\n            <md-chip *ngFor=\"let tag of post.tags\">\n                {{tag}}\n            </md-chip>\n        </md-chip-list>\n    </md-card-content>\n    <md-card-actions>\n        <button md-button (click)=\"showComments()\">Comment</button>\n        <button md-button (click)=\"likePost(post._id)\">Like</button>\n        <button md-button (click)=\"sharePost(post._id)\">Share</button>\n        <span class=\"app-filler\"></span>\n        <button md-button disabled>{{likes}} likes</button>\n    </md-card-actions>\n    <md-card-footer *ngIf=\"!hideComments && post.comments?.length > 0\">\n        <md-list>\n            <md-list-item *ngFor=\"let comment of post.comments | ifTrim:trim:max\">\n                <p md-line><em><a routerLink=\"/user/{{comment.user?._id}}\">{{comment.user?.firstName}} {{comment.user?.firstName}}</a></em></p>\n                <p md-line>{{comment?.text}}</p>\n                <p md-line>\n                    <span>{{comment?.date | date:'medium'}}</span>\n                    <span class=\"app-filler\"></span>\n                    <span md-button (click)=\"likeComment(comment._id)\">{{comment.likes?.length}} Likes</span>\n                    <span md-button (click)=\"showChildren(comment._id)\" *ngIf=\"(comment.comments?.length || 0) > 0\">{{comment.comments?.length || 0}} Comments</span>\n                </p>\n                <md-list *ngIf=\"comment.showChildren || !trim\">\n                    <md-list-item *ngFor=\"let subcomment of comment.comments | ifTrim:true:3\">\n                        <p md-line><em><a routerLink=\"/user/{{subcomment.user?._id}}\">{{subcomment.user?.firstName}} {{subcomment.user?.firstName}}</a></em></p>\n                        <p md-line>{{subcomment?.text}}</p>\n                        <p md-line>\n                            <span>{{subcomment?.date | date:'medium'}}</span>\n                            <span class=\"app-filler\"></span>\n                            <span md-button (click)=\"likeSubComment(comment._id, subcomment._id)\">{{subcomment.likes?.length}} Likes</span>\n                        </p>\n                    </md-list-item>\n                    <md-list-item>\n                        <p md-line *ngIf=\"comment.comments.length > max\">See more comments...</p>\n                    </md-list-item>\n                </md-list>\n            </md-list-item>\n        </md-list>\n    </md-card-footer>\n</md-card>"

/***/ }),
/* 325 */
/***/ (function(module, exports) {

module.exports = "  <md-card>\n    <md-card-header>\n      <md-card-title>\n        <h1 *ngIf=\"isNew\">New User</h1>\n        <h1 *ngIf=\"!isNew\">Edit Profile</h1>\n      </md-card-title>\n    </md-card-header>\n    <md-card-content>\n      <form #form=\"ngForm\">\n        <input type=\"hidden\" [ngModel]=\"_id | async\"  name=\"_id\">\n        <div>\n          <md-input-container>\n            <input type=\"text\" mdInput placeholder=\"First Name\" [ngModel]=\"firstName | async\" name=\"firstName\">\n          </md-input-container>\n          <md-input-container>\n            <input type=\"text\" mdInput placeholder=\"Last Name\" [ngModel]=\"lastName | async\" name=\"lastName\">\n          </md-input-container>\n        </div>\n        <div>\n          <md-input-container>\n            <input type=\"email\" mdInput placeholder=\"E-Mail\" [ngModel]=\"email | async\" name=\"email\">\n          </md-input-container>\n          <md-input-container>\n            <input type=\"tel\" mdInput placeholder=\"Phone\" [ngModel]=\"phone | async\" name=\"phone\">\n          </md-input-container>\n        </div>\n        <div>\n          <md-select placeholder=\"Gender\" [ngModel]=\"gender | async\"  name=\"gender\">\n            <md-option value=\"0\">Male</md-option>\n            <md-option value=\"1\">Female</md-option>\n          </md-select>\n          <md-input-container>\n            <input type=\"date\" mdInput placeholder=\"Birthday\" [ngModel]=\"birthday | async | dateOnly\" name=\"birthday\">\n          </md-input-container>\n        </div>\n        <fieldset ngModelGroup=\"address\">\n          <p>Address:</p>\n          <div>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"Street\" [ngModel]=\"(address | async)?.street\" name=\"street\">\n            </md-input-container>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"Building Number\" [ngModel]=\"(address | async)?.buildingNum\" name=\"buildingNum\">\n            </md-input-container>\n          </div>\n          <div>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"City\" [ngModel]=\"(address | async)?.city\" name=\"city\">\n            </md-input-container>\n            <md-input-container>\n              <input type=\"text\" mdInput placeholder=\"Country\" [ngModel]=\"(address | async)?.country\" name=\"country\">\n            </md-input-container>\n          </div>\n        </fieldset>\n      </form>\n    </md-card-content>\n    <md-card-actions>\n      <span class=\"app-filler\"></span>\n      <button md-raised-button (click)=\"cancel(form)\">Cancel</button>\n      <button md-raised-button color=\"primary\" (click)=\"save(form)\">Save</button>\n    </md-card-actions>\n  </md-card>"

/***/ }),
/* 326 */
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <img md-card-md-image src=\"{{(avatar | async)?.data}}\">\n    <input type=\"hidden\" #id [ngModel]=\"_id | async\"  name=\"_id\">\n    <md-card-title>\n      <h1>{{firstName | async}} {{lastName | async}}</h1>\n      <button md-icon-button (click)=\"edit(id.value)\"><md-icon>mode_edit</md-icon></button>\n    </md-card-title>\n    <md-card-subtitle>\n      <p><b>Address: </b>{{ address | async | address }}</p>\n    </md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n    <p>\n      <b>Email: </b>\n      <span class=\"line-2\">{{ email | async }}</span>\n    </p>\n    <p>\n      <b>Phone: </b>\n      <span class=\"line-2\">{{ phone | async }}</span>\n    </p>\n    <p>\n      <b>Gender: </b>\n      <span class=\"line-2\">{{ gender | async | gender }}</span>\n    </p>\n    <p>\n      <b>Date Of Birth: </b>\n      <span class=\"line-2\">{{ birthday | async | date:'mediumDate' }}</span>\n    </p>\n  </md-card-content>\n</md-card>"

/***/ }),
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(172);


/***/ })
],[382]);
//# sourceMappingURL=main.bundle.js.map