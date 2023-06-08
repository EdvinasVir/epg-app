import { VerticalSplitScreen } from './VerticalSplitScreen'
import { useState } from 'react'
import { NavigationMenu } from './NavigationMenu'
import { ProgramGuidePage } from './ProgramGuidePage'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faCircle } from '@fortawesome/free-solid-svg-icons'

const StyledButton = styled.button`
    background: transparent;
    border: none !important;
    color: #8ecccc;
    font-size: 3vh; // adjust this as needed
`

const StyledLogo = styled.button`
    background: transparent;
    border: none !important;
    color: #8ecccc;
`

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    background-color: #212121;
`

const Header = () => {
    return (
        <HeaderContainer>
            <StyledButton>
                <FontAwesomeIcon icon={faUser} size="2x" />{' '}
            </StyledButton>
            <StyledLogo>
                <FontAwesomeIcon icon={faCircle} size="2x" />{' '}
            </StyledLogo>
            <StyledButton>
                <FontAwesomeIcon icon={faSearch} size="2x" />{' '}
            </StyledButton>
        </HeaderContainer>
    )
}

const HomePage = () => <div>HomePage</div>
const LivePage = () => <div>LivePage</div>
const CatchUpPage = () => <div>CatchUpPage</div>
const LearnMorePage = () => <div>LearnMorePage</div>

const pageComponents: { [key: number]: React.FC } = {
    1: HomePage,
    2: LivePage,
    3: ProgramGuidePage,
    4: CatchUpPage,
    5: LearnMorePage,
}

export const EpgApp = () => {
    const [page, setPage] = useState(3)
    const PageComponent = pageComponents[page]
    return (
        <VerticalSplitScreen
            headerWeight={1}
            pageWrapperWeight={12}
            navigationMenuWeight={1}
        >
            <Header />
            {PageComponent && <PageComponent />}
            <NavigationMenu setPage={setPage} />
        </VerticalSplitScreen>
    )
}
