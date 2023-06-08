import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Calendar } from './Calendar'
import { Timeline } from './Timeline'
import { Schedule, getUniqueDates, EpgTimetable } from './Schedule'

interface Image {
    LOGO: string
}
export interface EPG {
    id: string
    title: string
    images: Image
    schedules: Schedule[]
}
interface Schedule {
    id: string
    title: string
    start: number
    end: number
}
export interface StationsProps {
    stationsSchedules: EPG[]
}
const Grid = styled.div`
    display: grid;
    background-color: #50717b;
`
const TimelineContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`
const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #8ecccc;
    justify-content: center;
    height: 12vh;
    background-color: #3a4042;
`

const ScrollableContainer = styled.div`
    grid-template-areas:
        'TimelineContainer'
        'StationsSchedulesContainer';
    overflow: auto;
`
export const ProgramGuidePage: React.FC = () => {
    const [stationsSchedules, setData] = useState<EPG[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get<EPG[]>('http://localhost:1337/epg')
            setData(result.data)
        }
        fetchData()
    }, [])

    let dates = getUniqueDates(stationsSchedules)
    return (
        <Grid>
            <CalendarContainer>
                <Calendar dates={dates} />
            </CalendarContainer>
            <ScrollableContainer>
                <TimelineContainer>
                    <Timeline />
                </TimelineContainer>
                {stationsSchedules && (
                    <EpgTimetable stationsSchedules={stationsSchedules} />
                )}
            </ScrollableContainer>
        </Grid>
    )
}
