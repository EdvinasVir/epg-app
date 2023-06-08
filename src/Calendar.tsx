import React from 'react'
import styled from 'styled-components'

interface CalendarProps {
    dates: Array<String>
}

const CalendarItem = styled.span`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledButton = styled.button`
    background: transparent;
    border: none !important;
    color: #8ecccc;
`

export const Calendar: React.FC<CalendarProps> = ({ dates }) => {
    const datesIterable = dates.map((item, index) => (
        <CalendarItem key={index}>
            <StyledButton>
                <h3>{item}</h3>
            </StyledButton>
        </CalendarItem>
    ))
    return <div>{datesIterable}</div>
}
