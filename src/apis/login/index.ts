// import http from "@/modules/http";
import http from "@/modules/http";

export async function apiLogin(username: string, password: string) {
    // let res = await http.post("login", {
    //     username,
    //     password
    // })
    // return res
    return {status: 200, meta: {msg: "登录成功"}, success: true}
}

export async function apiRegister(username: string, password: string) {
    let res = await http.post("register", {
        username,
        password
    })
    return res
}