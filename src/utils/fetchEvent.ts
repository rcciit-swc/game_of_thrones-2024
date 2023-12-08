import events from "./events"


const fetchEvent = (eventdata:any) => {
    const eventObj =  events.find((event)=>event.title.toLowerCase()===eventdata.toLowerCase())
    return eventObj;
}

export default fetchEvent;