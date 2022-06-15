import { AuthActionCreators } from "./auth/AuthActionCreators";
import { EventActionCreators } from "./event/EventActionCreators";

export const AllActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators
}