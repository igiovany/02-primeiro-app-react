import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransacrionModal: () => void;
}

export function Header({onOpenNewTransacrionModal}: HeaderProps ) {

    

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransacrionModal} >
                    Nova Transação
                </button>

                
            </Content>
        </Container>
    )
}