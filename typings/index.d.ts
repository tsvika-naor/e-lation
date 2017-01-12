declare type ObjectId = any;

declare enum MediaType {
    Image,
    Video
}

declare enum Gender {
    Male,
    Female
}

declare type MediaObject = {
    mediaType: MediaType,
    mimeType: String,
    name: String,
    data: String
}

declare type Address = {
    street: String,
    buildingNum: String,
    city: String,
    country: String
}

declare type User = {
    _id: ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    gender: Gender,
    birthday: Date,
    avatar: {
        mimeType: String,
        data: String
    },
    address: Address,
    isProvider: Boolean,
    provider?: Provider
}

declare type Provider = {
    _id: ObjectId,
    bio: String,
    rank: Number,
    reviews: Array<Review>,
    businessAddress: Address,
    user: User
}

declare type Post = {
    _id: ObjectId,
    user: User,
    body: String,
    title: String,
    media: Array<MediaObject>,
    date: Date,
    tags: Array<String>,
    likes: Number,
    comments: Array<UserComment>
}

declare type Review = {
    _id: ObjectId,
    user: User,
    text: String,
    date: Date,
    rating: Number
}

declare type UserComment = {
    _id: ObjectId,
    user: User,
    parent?: UserComment,
    subject: Post,
    text: String,
    date: Date,
    likes: Number,
    comments?: Array<UserComment>
}

declare type Group = {
    _id: ObjectId,
    owner: User,
    provider: Provider,
    admins: Array<User>,
    members: Array<User>,
    name: String,
    description: String,
    groupType: [String],
    address: Address,
}

declare type GeoEvent = {
    _id: ObjectId,
    owner: User,
    provider: Provider,
    admins: Array<User>,
    members: Array<User>,
    name: String,
    description: String,
    startDate: Date,
    endDate: Date,
    media: Array<MediaObject>,
    private: Boolean,
    address: Address,
    posts?: Array<Post>
}
