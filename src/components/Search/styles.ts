import styled from 'styled-components'

export const Container = styled.nav`
    margin-left: 250px;
    margin-bottom: 5rem;
    

    form {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .search {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;


            input {
                width: 30rem;
                border: none;
                border-bottom: 1px solid gray;
                outline: 0 ;
                padding: 1rem 3rem;
                color: #A9A9A9;
                font-size: 1rem;
                font-weight: 300;
                letter-spacing: .095em;
                background-color: transparent;
            }

        }

        button {
            width: 10rem;
            height: 50px;

            margin: 2rem 0 0 -30rem;
            

            background: var(--black);
            color: #fff;

            border: none;
            border-radius: 0.7rem;

            font-size: 1.2rem;
            font-weight: 500;
            font-family: 'Roboto';

            transition: filter .2s;

            &:hover {
                filter: brightness(0.8)
            }
        }
        
    }
`