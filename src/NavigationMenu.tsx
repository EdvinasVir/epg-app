import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faTelevision,
    faList,
    faUndo,
    faLevelUp,
} from '@fortawesome/free-solid-svg-icons'

interface NavigationMenuProps {
    setPage: (page: number) => void
}
const NavigationContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    background-color: #212121;
`

const StyledButton = styled.button`
    background: transparent;
    border: none !important;
    color: #8ecccc;
    font-size: 3vh; // adjust this as needed
`

export const NavigationMenu = ({ setPage }: NavigationMenuProps) => {
    return (
        <NavigationContainer>
            <StyledButton onClick={() => setPage(1)}>
                {' '}
                <FontAwesomeIcon icon={faHome} size="2x" />{' '}
            </StyledButton>
            <StyledButton onClick={() => setPage(2)}>
                {' '}
                <FontAwesomeIcon icon={faTelevision} size="2x" />{' '}
            </StyledButton>
            <StyledButton onClick={() => setPage(3)}>
                {' '}
                <FontAwesomeIcon icon={faList} size="2x" />{' '}
            </StyledButton>
            <StyledButton onClick={() => setPage(4)}>
                {' '}
                <FontAwesomeIcon icon={faUndo} size="2x" />{' '}
            </StyledButton>
            <StyledButton onClick={() => setPage(5)}>
                {' '}
                <FontAwesomeIcon icon={faLevelUp} size="2x" />{' '}
            </StyledButton>
        </NavigationContainer>
    )
}
