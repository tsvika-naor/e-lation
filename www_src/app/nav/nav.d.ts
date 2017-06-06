declare type SearchResult = {
    providers?: Array<Provider>,
    users?: Array<User>,
    groups?: Array<Group>,
    events?: Array<GeoEvent>,
    posts?: Array<Post>
}

declare type Link = {
    _id: ObjectId,
    type: String,
    name: String
}

declare type UserPages = {
    userLinks?: Array<Link>,
    providers?: Array<Provider>,
    groups?: Array<Group>,
    events?: Array<GeoEvent>
}

// userLinks: [],
// isProvider: false,