/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
    id: string;
}

declare type ObjectId = any;

declare type DataClass = {
    _id: ObjectId
}

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
    type?: string,
    child: any
}

declare type GenericAction = {
    action: string,
    data: any
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

declare type Customer = {
    user: User,
    confirmed: Boolean
}

declare type Field = {
    name: String,
    description: String,
    customers: Array<Customer>
}

declare type CommentRef = {
    commentId: ObjectId,
    subCommentId: ObjectId
}

declare type User = {
    _id?: ObjectId
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
    followers?: Array<User>,
    posts?: Array<Post>,
    isProvider?: Boolean
}

declare type Provider = {
    _id?: ObjectId,
    bio?: String,
    rank?: Number,
    fields?: Array<Field>,
    reviews?: Array<Review>,
    businessAddress?: Address,
    user?: User
}

declare type Post = {
    _id?: ObjectId,
    user?: User,
    body?: String,
    title: String,
    source?: String,
    hyperlink?: String,
    rtl?: Boolean,
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