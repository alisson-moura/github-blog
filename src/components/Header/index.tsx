import { EffecRight, EffectLeft, HeaderContainer, Logo } from "./style";
import effectLeft from '../../assets/background.svg'
import effectRight from '../../assets/effect-right.svg'
import logo from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <EffectLeft src={effectLeft} alt="" />
            <Logo src={logo} alt="" />
            <EffecRight src={effectRight} alt="" />
        </HeaderContainer>
    )
}