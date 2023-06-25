import {IAuthTokenStorage} from "../interfaces";
import defaultConfig, {TokenStorageConfig} from "src/config/localStorage";

class TokenStorage implements IAuthTokenStorage {
    private refreshTokenName: string;
    private tokenName: string;

    constructor(config: TokenStorageConfig = defaultConfig) {
        this.refreshTokenName = config.refreshToken
        this.tokenName = config.token
    }

    getAuthToken(): string | null {
        return window.localStorage.getItem(this.tokenName)
    }

    getRefreshToken():string | null  {
        return window.localStorage.getItem(this.refreshTokenName)
    }

    setAuthToken(token: string):void {
        window.localStorage.setItem(this.tokenName, token)
    }

    setRefreshToken(token: string):void {
        window.localStorage.setItem(this.refreshTokenName, token)
    }

    removeAuthToken():void {
        window.localStorage.removeItem(this.tokenName)
    }
}

const tokenStorage = new TokenStorage()

export default tokenStorage