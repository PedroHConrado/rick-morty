import styled from 'styled-components'


export const Container = styled.div`
    list-style: none;
    display: flex;
    gap: 5rem;

    .spinner {
        position: absolute;
        top: 25%;
        transform: translateX(50%);
        right: 50%;
    }
   
    li {
        display: flex;
        flex-direction: column;

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

        .alive {
            color: green;
        }

        .dead {
            color: red;
        }

        p {
            position: absolute;
            top: 5px;
            right: 5px;

            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 1rem;

            border: 1px solid #DCDCDC;
            border-radius: 50%;

            width: 60px;
            height: 60px;

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
    }
`