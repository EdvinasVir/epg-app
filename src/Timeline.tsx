import React from 'react'
import styled from 'styled-components'

const TimelineContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: #8ecccc;
    background-color: #3a4042;
    padding-top: 3vh;
    border-top: 1px solid rgb(41, 74, 102);
    padding-right: 5vw;
`
const EmptySpace = styled.div`
    display: flex;
    flex: 1;
    box-sizing: border-box;
    width: 8vw;
`

const HourContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
`
const HourMarker = styled.div`
    position: sticky;
    width: ${4.16667 * 10}vw;
`
export const Timeline: React.FC = () => {
    const hours = Array.from({ length: 24 }, (_, i) => i)

    return (
        <TimelineContainer>
            <EmptySpace />
            {hours.map((hour) => (
                <HourContainer key={hour}>
                    <HourMarker>{hour < 10 ? '0' + hour : hour}:00</HourMarker>
                </HourContainer>
            ))}
        </TimelineContainer>
    )
}
