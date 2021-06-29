import styled from 'styled-components'

const Div = styled.div`
    background-color:#1f1f1f;
    padding: 20px 0;
    .footer-item{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: #ffffff;
        ul{
            margin-top: 20px;
            list-style: none;
            padding-left: 15px;
            li{
                position: relative;
                margin: 2px 0;
                :before{
                    content: '';
                    position: absolute;
                    border:5px solid;
                    top: 6px;
                    left: -10px;
                    border-color: transparent transparent transparent #616161;
                }
            }
            a{
                text-decoration: none;
                color: #616161;
                font-weight: 600;
            }
        }
        
    }
    .footer-img{
        border-left: 2px solid #000000;
        border-right: 2px solid #000000;
        height: 100%;
        text-align: center;
        a{
            background-image: url('https://assets.pokemon.com/static2/_ui/img/footer/social-icons.png');
            height: 34px;
            width: 35px;
            display: inline-block;
            margin: 0 0.4em 0.5em 0;
            :hover{
                opacity: 0.8;
            }
            :nth-child(2){
                background-position: -175px 0px;
            };
            :nth-child(3){
                background-position: -70px 0px;
            };
            :nth-child(4){
                background-position: -210px 0px;
            };
            :nth-child(5){
                background-position: -245px 0px;
            };
        }
    }
    .footer-caru{
        display: flex;
        flex-direction: column;
        font-size: 11px;
        color: #616161;
        padding-top: 30px;
        .image-text{
            display: flex;
            img{
                margin: 40px 20px;
                cursor: pointer;
            }
            ul{
                list-style: none;
                padding-top: 30px;
                li{
                    margin: 4px 0;
                }
                a{
                    color:#616161;
                }
            }
        }
        span{
            padding-left: 25px;
        }
    }
    
`;

export default function Footer() {
    return (
        <Div className='footer'>
            <div className="grid wide">
                <div className="row footer-mobile">
                    <div className="col l-4 m-4 c-12">
                        <div className="footer-item">
                            <h2>The Pokémon Company</h2>
                            <ul>
                                <li><a href="#">What's New</a></li>
                                <li><a href="#">Pokémon Parents Guide</a></li>
                                <li><a href="#">Customer Service</a></li>
                                <li><a href="#">About Our Company</a></li>
                                <li><a href="#">Pokémon Careers</a></li>
                                <li><a href="#">Select a Country/Region</a></li>
                                <li><a href="#">Pokémon Press Site</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col l-4 m-4 c-12">
                        <div className="footer-img l-12 m-12 c-12">
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                        </div>
                    </div>
                    <div className="col l-4 m-4 c-12">
                        <div className="footer-caru">
                            <div className="image-text">
                                <img src="https://assets.pokemon.com/static2/_ui/img/footer/thepokemoncompanyinternational-seal-1596150491.png" alt="" />
                                <ul>
                                    <li><a href="#">Terms of Use</a></li>
                                    <li><a href="#">Privacy Notice</a></li>
                                    <li><a href="#">Cookie Page</a></li>
                                    <li><a href="#">Legal Info</a></li>
                                    <li><a href="#">Security</a></li>
                                </ul>
                            </div>
                            <span>©2021 Pokémon. TM, ®Nintendo.</span>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}