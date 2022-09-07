export interface ActionError {
    error: Error,
    queryType: string
}

export interface AuthState {
    loadingStatus: string,
    uploadStatus?: string
    error: Error | null,
    queryType: string,
    user: any
}

export interface AuthResponse{
    "access_token": string
    "refresh_token": string
    "user": {
        "id": number,
        "fullname":string
    },
    "party": {
        "id": number,
        "fullname": string
    },
    "permission": string,
    "message": string
}