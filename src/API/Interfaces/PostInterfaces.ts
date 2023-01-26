export interface PostObj {
    "id": number,
    "postName": string,
    "url": string,
    "description": string,
    "userName": string,
    "subredditName": string,
    "voteCount": number,
    "commentCount": number,
    "duration": string,
    "upVote": boolean,
    "downVote": boolean
}
export interface PostCreateObj {
    "subredditName": string | undefined,
    "postName": string | undefined,
    "url": string | undefined,
    "description": string | undefined
}