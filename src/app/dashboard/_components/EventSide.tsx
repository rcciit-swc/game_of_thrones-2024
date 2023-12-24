import EventCard from '@/app/events/_components/EventCard'
import events from '@/utils/events'
import React from 'react'

const EventSide = () => {
  return (
    <div>
         <div className="flex flex-row flex-wrap gap-20 justify-center items-center">
        {events.map((event, index) => (
          <div key={index}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventSide