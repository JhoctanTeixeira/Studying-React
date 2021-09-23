import styled from 'styled-components';

const alteraMenu = () => {
    const minutos = new Date().getMinutes()

    if (minutos >= 55){
        return '#202020'
    }else if (minutos < 51){
        return '#fff0000'
    }

}

const paleta = [alteraMenu,'#19191919', '#202020','#1c1c1c1c', '#FFFFFFF' ]

export const ElHtml = styled.html `
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Asap&family=Nunito:wght@200&display=swap');
    font-size: 16px; 
`
export const BodyAll = styled.body `
    font-family: 'Nunito', sans-serif; 
`
export const TitulosFont = styled.h1 `
    font-family: 'Asap', sans-serif;
`

export const Botao = styled.div `
a{
    display: inline-block;
    color: #FFFFFF;
    text-decoration: none;
    padding: 1vh 3vh;
    background-color: #191970;
    font-size: 0.9em;
    border-radius: 3px;
}
`

export const Navbar = styled.nav`
display: flex;
flex-direction: column;
background-color: ${paleta[0]};
ul{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    li{
        padding: 2%;
        
        a{
            color:${paleta[3]} ;
            text-decoration: none;
        }
    }
    li:hover{
        color: ${paleta[4]}
        background-color:${paleta[0]} ;
    }
}
`
