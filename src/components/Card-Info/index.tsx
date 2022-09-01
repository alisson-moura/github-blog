import { CardInfoContainer } from "./style";

export function CardInfo({ children }: React.PropsWithChildren) {
    return (
        <CardInfoContainer>
            {children}
        </CardInfoContainer>
    )
}