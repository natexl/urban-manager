import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import config from "@/config/http";
import {IAuthTokenStorage} from "../interfaces"
import { JaResponse } from "../interfaces/http";

export class Http {
  private axiosInstance: AxiosInstance;
  private tokenStorage: IAuthTokenStorage;

  constructor(tokenStorage: IAuthTokenStorage) {
    this.tokenStorage = tokenStorage;
    this.axiosInstance = axios.create({
      ...config
    });
    
    this.setupInterceptors();
  }

  private setupInterceptors() {
    // 请求拦截
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = this.tokenStorage.getAuthToken();
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        const reqUrl = response.config.url
        switch (reqUrl) {
            case "login":
                const {token, refreshToken} = response.data
                this.tokenStorage.setAuthToken(token);
                this.tokenStorage.setRefreshToken(refreshToken);
                break;
        
            default:
                break;
        }
        return response;
      },
      async (error) => {
        // 刷新 token 逻辑
        if (error.response.status === 401) {
          try {
            const newToken = await this.refreshToken();
            if(!newToken) {
                // 跳转至登录页面或其他逻辑
            }
            if (newToken) {
              // 重试失败的请求
              error.config.headers[
                "Authorization"
              ] = `Bearer ${newToken}`;
              return this.axiosInstance.request(error.config);
            }
          } catch (refreshTokenError) {
            this.tokenStorage.removeAuthToken();
            // 跳转至登录页面或其他逻辑
          }
        }
        return Promise.reject(error);
      }
    );
  }

  private async refreshToken(): Promise<string | null> {
    // 实现刷新 token 的逻辑
    // 这里可以发起一个 POST 请求来获取新的 token
    // 如果成功，使用 `this.tokenStorage.setAuthToken(newToken)` 保存新的 token
    // 返回新的 token 或 null
    const refreshToken = this.tokenStorage.getRefreshToken()
    if(!refreshToken) return null
    const response = await this.axiosInstance.post("refresh", {refreshToken});
    if (response.status === 200) {
      const newToken = response.data.token;
      this.tokenStorage.setAuthToken(newToken);
      return newToken;
    }

    return null;
  }

  public async get<T = JaResponse>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
    let res = await this.axiosInstance.get<T>(url, config)
    return res.data
  }

  public async post<T = JaResponse>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<T> {
    let res = await this.axiosInstance.post<T>(url, data, config)
    return res.data
  }

  // 以下类似实现 put, delete, patch, head 等其他方法
}