import moment from 'moment'

function s4() {
    return Math.random().toString(36).substring(7);
}

export const generateID = () => {
    return (s4() + s4() + "-" + s4() + s4()).toUpperCase();
}
export const generateTime = () => {
    return moment()
}