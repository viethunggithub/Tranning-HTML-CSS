





function Header() {
    return (
        <Div className="grid header">
            <div className="row header__">
                <div className="header__left">
                    <div className="header__left-char">
                        <svg viewBox="0 0 24 24" width="24px" color="textSubtle" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM cSawQi">
                            <path d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z"></path>
                        </svg>
                    </div>
                    <div className="header__left-icon">
                        <img src="Bread_gau.png" />
                        <strong>PancakeSwap</strong>
                    </div>
                </div>
                <div className="header__right">
                    <button>Connect</button>
                    <div className="header__right-user">
                        <svg viewBox="0 0 32 32" width="32px" height="32px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM kDWlca">
                            <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z" fill="#e9eaeb"></path>
                            <mask id="A" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                                <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z" fill="#c4c4c4"></path>
                            </mask>
                            <g mask="url(#A)">
                                <path d="M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z" fill="#bdc2c4"></path>
                                <path fillRule="evenodd" d="M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z" fill="#bdc2c4"></path>
                                <ellipse cx="12.308" cy="14.846" rx="1.026" ry="1.538" fill="#e9eaeb"></ellipse>
                                <ellipse cx="19.385" cy="14.846" rx="1.026" ry="1.538" fill="#e9eaeb"></ellipse>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </Div>
    )
}
export default Header;