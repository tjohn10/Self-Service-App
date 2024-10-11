import { registerInDevtools, Store} from "pullstate";

export const AuthStore = new Store({
    token: '',
    message: '',
    abssin: ''
})
