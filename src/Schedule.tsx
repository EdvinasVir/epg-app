import React from 'react'
import styled from 'styled-components'
import { EPG, StationsProps } from './ProgramGuidePage'

export const getUniqueDates = (epgData: EPG[]) => {
    let dateSet = new Set<String>()
    let options = {
        weekday: 'long' as const,
        month: 'long' as const,
        day: 'numeric' as const,
    }
    for (let channel of epgData) {
        for (let program of channel.schedules) {
            let startDate = new Date(program.start)
            let formattedDate = startDate.toLocaleDateString(undefined, options)
            dateSet.add(formattedDate)
        }
    }
    return Array.from(dateSet)
}
export const Schedule = styled.div<{ left: number; width: number }>`
    position: absolute;
    border: 1px solid rgb(58, 64, 66);
    border-radius: 5px;
    height: 20vh;
    background-color: #294a66;
    left: ${(props) => props.left}vw;
    width: ${(props) => props.width}vw;
    word-wrap: break-word;
    text-align: center;
`
const Station = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 8vw;
    background-color: #3a4042;
    border-bottom: 1px solid rgb(41, 74, 102);
    border-right: 1px solid rgb(41, 74, 102);
`
const SchedulesContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const StationRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #8ecccc;
`
const format24Hour = (date: Date) => {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let minutesStr = minutes < 10 ? '0' + minutes : '' + minutes
    let timeStr = hours + ':' + minutesStr
    return timeStr
}
const getLeftVw = (startDate: Date) => {
    let totalMinutes = startDate.getHours() * 60 + startDate.getMinutes()
    return (totalMinutes / 60) * 4.16667 * 10
}
const getWidthVw = (startDate: Date, endDate: Date) => {
    let totalStartMinutes = startDate.getHours() * 60 + startDate.getMinutes()
    let totalEndMinutes = endDate.getHours() * 60 + endDate.getMinutes()
    return ((totalEndMinutes - totalStartMinutes) / 60) * 4.16667 * 10
}
export const EpgTimetable: React.FC<StationsProps> = ({
    stationsSchedules,
}) => {
    const stationsIterable = stationsSchedules.map((item, index) => (
        <StationRow key={index}>
            <Station>
                <h3>{item.title}</h3>
            </Station>
            <SchedulesContainer>
                {item.schedules.map((schedule, scheduleIndex) => (
                    <Schedule
                        left={getLeftVw(new Date(schedule.start))}
                        width={getWidthVw(
                            new Date(schedule.start),
                            new Date(schedule.end)
                        )}
                        key={scheduleIndex}
                    >
                        {schedule.title} <span />
                        {format24Hour(new Date(schedule.start))} -
                        {format24Hour(new Date(schedule.end))}
                    </Schedule>
                ))}
            </SchedulesContainer>
        </StationRow>
    ))

    return <div>{stationsIterable}</div>
}
