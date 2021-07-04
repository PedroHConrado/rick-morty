import styled from 'styled-components'

export const Container = styled.div`
    background: var(--black);
    color: #fff;

    height: 100%;
    width: 250px;
    position: fixed;

    h1 {
        display:flex;
        align-items: center;
        justify-content: center;

        margin-top: 2rem;
           
    }

    img {
        border: 3px solid #D3D3D3;
        border-radius: 50%;
        
        width: 100px;
        height: 100px;


        margin: 5rem 5rem 0;
    }

    .sub-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        line-height: 2rem;

       

        p {
            font-size: 1.1rem;
            font-weight: 500;
            color: #A9A9A9;
        }

        h2 {
            font-size: 1.2;
            font-weight: 700;
        }
    }

    .header-content {
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        
        margin-top: 10rem;

        
      

        button {
            height: 40px;
            border: none;
            background: transparent;
            color: gray;

            font-size: 1.2rem;
            font-weight: 500;

            display:flex;
            align-items: baseline;
            justify-content: center;

            padding-left: 4.5rem;

            transition: .3s;

            & + button {
                margin-top: 10px;
            }

            &:hover {
                color: #fff;
            }
        }


        
    }
`