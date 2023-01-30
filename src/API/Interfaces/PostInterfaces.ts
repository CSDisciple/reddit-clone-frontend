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
export interface PostCreateBody {
    "subredditName": string | undefined,
    "postName": string | undefined,
    "url": string | undefined,
    "description": string | undefined
}
export interface LoginType {
    "username": string
    "password": string
}

export interface AuthenticationResponse {
    authenticationToken: string;
    refreshToken: string;
    expiresAt: number;
    username: string
}
export interface SubredditCreateBody {
    "name": string;
    "description": string;
}