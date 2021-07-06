import { Container } from './styles'
import { FaHeart } from "react-icons/fa";
import { ImHome, ImHeart } from "react-icons/im";

import yodaImg from '../../assets/yodabrabo.jpg'
import { Link } from 'react-router-dom';


export function Sidebar() {
    return (
        <Container>
            <h1>I<FaHeart style={{ margin: 5, fontSize: 25 }} /> <span>R&amp;M</span></h1>

            <img src={yodaImg} alt="Morty" />

            <div className="sub-title">
                <p>Welcome,</p>
                <h2>Young Padawan</h2>
            </div>

            <section className="header-content">

                <Link to="/" className="button"><ImHome style={{ marginRight: 10 }} />Home</Link>
                <Link to="/favorites" className="button"><ImHeart style={{ marginRight: 10 }} />Favorites</Link>

            </section>


        </Container>

    )
}