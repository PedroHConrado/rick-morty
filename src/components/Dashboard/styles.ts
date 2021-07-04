import styled from 'styled-components'

export const Container = styled.main`
    margin-left: 250px;
    position: relative;
    border: none;
    border-radius: 1rem;
    background: var(--gray);

    width: 40vw;
    height: 70vh;
    margin: 5rem auto;

    #response-character {
        padding-top: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 400px;
            border-radius: 25%;
        }

        h1 {
            padding-top: 2rem;     
            font-weight: 700;
        }
    }

    p {
        position: absolute;
        top: 50px;
        right: 50px;

        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1.2rem;

        border: 1px solid #DCDCDC;
        border-radius: 50%;

        width: 70px;
        height: 70px;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    button {
        border: none;
        background: transparent;
        color: #778899;

        transition: .3s;

        &:hover {
            color: var(--black);
        }
    }
`