import styled from 'styled-components'

export const Container = styled.main`
    border-radius: 1rem; 
    width: 1500px;
    height: 100%;
    
    margin: 0 0 0 22rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
   
    li {
        display: flex;
        flex-direction: column;
        margin-top: 5rem;
        
        position: relative;

        background: var(--gray);

        border-radius: 1rem;

        padding: 20px;
        
        width: 300px;
        height: 300px;


        #response-character {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
                width: 150px;
                border-radius: 25%;
            }

            h1 {
                padding-top: 1rem;     
                font-weight: 700;
            }
        }

        h3 {
            position: absolute;
            top: 15px;
            left: 15px;

            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 1rem;

            width: 40px;
            height: 40px;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        p {
            position: absolute;
            top: 15px;
            right: 15px;

            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 1rem;

            border: 1px solid #DCDCDC;
            border-radius: 50%;

            width: 40px;
            height: 40px;

            display: flex;
            justify-content: center;
            align-items: center;

        }

        button {
            border: none;
            background: transparent;
            color: #778899;

            margin-top: 2rem;

            transition: .3s;

            &:hover {
                color: var(--black);
            }
        }
    }

    
`