import moment from "moment";
import { Moment } from "moment";

export const rules = {
    required: (message: string = "Required field") => ({
        required: true,
        message
    }),
    isDateAfter: (message: string) => () => ({
        validator(_: any, value: Moment) {
            console.log(value.format('YYYY-MM-DD'), moment().format('YYYY-MM-DD'))
            if (value.isSameOrAfter(moment(), 'date')) {
                return Promise.resolve()
            }
            return Promise.reject(new Error(message))
        }
    })
}
