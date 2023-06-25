// import http from "@/modules/http";
import http from "src/modules/http";

export async function login(username: string, password: string) {
    let res = await http.post("login", {
        username,
        password
    })
    return res
}

export async function register(username: string, password: string) {
    let res = await http.post("register", {
        username,
        password
    })
    return res
}