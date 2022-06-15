import { IEvent } from "../../../models/IEvent"
import { IUser } from "../../../models/IUser"
import {EventAction, EventActionEnum, EventState } from "./types"

const initialState: EventState = {
    guests: [],
    events: []
}

export default function EventReducer(state = initialState, action: EventAction): EventState {
    switch (action.type) {
        case EventActionEnum.SET_GUEST:
            return {...state, guests: action.payload}
        case EventActionEnum.SET_EVENT:
            return {...state, events: action.payload}
        default:
            return state
    }
}