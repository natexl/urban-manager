export interface IAuthTokenStorage {
    getAuthToken: () => string | null;
    getRefreshToken: () => string | null;
    setAuthToken: (token: string) => void;
    setRefreshToken: (token: string) => void;
    removeAuthToken: () => void;
}