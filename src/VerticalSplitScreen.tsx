import styled from 'styled-components'
import { ReactNode } from 'react'

interface TopSectionProps {
    weight: number
}

interface VerticalSplitScreenProps {
    headerWeight: number
    pageWrapperWeight: number
    navigationMenuWeight: number
    children: Array<ReactNode>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    height: 100wh;
    overflow: hidden;
`

const Section = styled.div<TopSectionProps>`
    flex: ${(props) => props.weight};
    display: flex;
    justify-content: center;
    align-items: center;
`
const PageSection = styled.div<TopSectionProps>`
    flex: ${(props) => props.weight};
    display: flex;
    overflow: hidden;
`

export const VerticalSplitScreen: React.FC<VerticalSplitScreenProps> = ({
    children,
    headerWeight = 1,
    pageWrapperWeight = 1,
    navigationMenuWeight = 1,
}) => {
    const [header, pageWrapper, navigationMenu] = children
    return (
        <Container>
            <Section weight={headerWeight}>{header}</Section>
            <PageSection weight={pageWrapperWeight}>{pageWrapper}</PageSection>
            <Section weight={navigationMenuWeight}>{navigationMenu}</Section>
        </Container>
    )
}
