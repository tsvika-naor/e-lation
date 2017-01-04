declare type ObjectId = any;

declare type MediaObject = {
    mediatype: String,
    name: String,
    data: String
}

declare type Address = {
    Street: String,
    BuildingNum: String,
    City: String,
    Country: String
}

declare type User = {
    _id: ObjectId,
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    gender: String,
    birthday: Date,
    address: Address,
    isProvider: Boolean,
    providerId: ObjectId
}

declare type Provider = {
    _id: ObjectId,
    bio: String,
    rank: Number,
    reviews: Array<ObjectId>,
    businessAddress: Address,
    userId: ObjectId
}

declare type Post = {
    _id: ObjectId,
    userId: ObjectId,
    body: String,
    title: String,
    media: Array<MediaObject>,
    date: Date,
    tags: Array<String>,
    likes: Number,
    comments: Array<ObjectId>
}

declare type Review = {
    _id: ObjectId,
    userId: ObjectId,
    text: String,
    date: Date,
    rating: Number
}

declare type UserComment = {
    _id: ObjectId,
    userId: ObjectId,
    parentId: ObjectId,
    text: String,
    date: Date,
    likes: Number,
    comments: Array<ObjectId>
}

declare type Group = {
    _id: ObjectId,
    ownerId: ObjectId,
    providerId: ObjectId,
    admins: [ObjectId],
    members: [ObjectId],
    name: String,
    description: String,
    groupType: [String],
    address: Address,
}

declare type GeoEvent = {
    _id: ObjectId,
    ownerId: ObjectId,
    providerId: ObjectId,
    admins: Array<ObjectId>,
    members: Array<ObjectId>,
    name: String,
    description: String,
    startDate: Date,
    endDate: Date,
    media: Array<MediaObject>,
    private: Boolean,
    address: Address,
    comments: Array<ObjectId>
}
