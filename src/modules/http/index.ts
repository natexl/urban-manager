import { Http } from "./request";
import tokenStorage from "../storage"

const http = new Http(tokenStorage)
export default http