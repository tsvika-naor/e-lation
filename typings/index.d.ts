declare type ObjectId = any;

declare enum MediaType {
    Image,
    Video
}

declare enum Gender {
    Male,
    Female
}

declare type HttpPayload = {
    parent: ObjectId,
    child: any
}

declare type SearchResult = {
    providers?: Array<Provider>,
    users?: Array<User>,
    groups?: Array<Group>,
    events?: Array<GeoEvent>,
    posts?: Array<Post>
}

declare type MediaObject = {
    mediaType?: MediaType,
    mimeType?: String,
    data: String
}

declare type Address = {
    street: String,
    buildingNum: String,
    city: String,
    country: String
}

declare type User = {
    _id?: ObjectId,
    firstName: String,
    lastName: String,
    email?: String,
    phone?: String,
    gender?: Gender,
    interests?: Array<String>,
    birthday?: Date,
    avatar?: MediaObject,
    address?: Address,
    friends?: Array<User>,
    isProvider?: Boolean
}

declare type Provider = {
    _id?: ObjectId,
    bio?: String,
    rank?: Number,
    fields?: Array<String>,
    reviews?: Array<Review>,
    businessAddress?: Address,
    user?: User
}

declare type Post = {
    _id?: ObjectId,
    user?: User,
    body?: String,
    title: String,
    media?: Array<MediaObject>,
    date: Date,
    tags?: Array<String>,
    likes?: Array<ObjectId>, //ref: User
    comments?: Array<UserComment>
}

declare type Review = {
    _id?: ObjectId,
    user?: User,
    text: String,
    date: Date,
    rating?: Number
}

declare type UserComment = {
    _id?: ObjectId,
    user?: User,
    parent?: ObjectId, //ref: Comment
    subject: ObjectId, //ref: Post
    text: String,
    date: Date,
    likes: Array<ObjectId>, //ref: User
    showChildren?: Boolean,
    comments: Array<UserComment>
}

declare type Group = {
    _id?: ObjectId,
    owner?: User,
    provider?: Provider,
    admins?: Array<User>,
    members?: Array<User>,
    name?: String,
    description?: String,
    avatar?: MediaObject,
    groupType?: Array<String>,
    address?: Address,
    posts?: Array<Post>
}

declare type GeoEvent = {
    _id?: ObjectId,
    owner?: User,
    provider?: Provider,
    admins?: Array<User>,
    members?: Array<User>,
    name?: String,
    description?: String,
    avatar?: MediaObject,
    startDate?: Date,
    endDate?: Date,
    media?: Array<MediaObject>,
    private?: Boolean,
    address?: Address,
    posts?: Array<Post>
}
