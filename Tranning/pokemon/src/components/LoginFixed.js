import styled from 'styled-components'

const Div = styled.div`
    position: fixed;
    top: 180px;
    left:35px;
    width: 59px;
    border: 2px solid #232323;
    border-left: none;
    border-radius: 5px;
    cursor: pointer;
    .login{
        background-color: #54b564;
        height: 87px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        span{
            font-size: 10px;
            color: #ffffff;
            font-weight: 600;
        }
        img{
            height: 30px;
        }
        ::after{
            background: transparent url('https://assets.pokemon.com/static2/_ui/img/chrome/profile-navigation/profile-nav-bg.png') left 34px;
            content: " ";
            display: block;
            height: 17px;
            left: 0;
            position: absolute;
            top: -13px;
            width: 100%;
        }
        :hover{
            background-color:#369143;
            ::after{
                background: transparent url('https://assets.pokemon.com/static2/_ui/img/chrome/profile-navigation/profile-nav-bg.png') left 17px;
            }
        }
    }
    .search{
        background-color: #424242;
        height: 67px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        position: relative;
        i{
            font-size: 23px;
        }
        ::before{
            position: absolute;
            content: '';
            height: 6px;
            width: 30px;
            background-color: #424242;
            bottom: -6px;
            left: 0;
            border-bottom: 2px solid #232323;
        }
        ::after{
            position: absolute;
            content: '';
            border: 3px solid;
            border-color: #424242 transparent transparent #424242;
            bottom: -6px;
            right: 22px;
        }
        :hover{
            background-color: #30a7d7;
            ::before{
                background-color: #30a7d7;
            }
            ::after{
                border-color: #30a7d7 transparent transparent #30a7d7;
            }
        }
    }
`;

export default function LoginFixed() {
    return (
        <Div>
            <div className="login">
                <img src="https://assets.pokemon.com/static2/_ui/img/chrome/profile-navigation/profile-nav-signup.png" alt="" />
                <span>Log In</span>
            </div>
            <div className="search">
                <i className="fas fa-search"></i>
            </div>
        </Div>
    )
}