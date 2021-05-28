import './../../grid.css'
import './../../App.css'
import './style.css'

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="grid wide row navbar_main">
                    <div className="col l-1 m-1 navbar_main-item">
                        <a href="/">Trang Chủ</a>
                    </div>
                    <div className="col l-1 m-1 navbar_main-item navbar_arrow">
                        <a href="/">Thể Loại</a>
                        <div className="navbar_genre">
                            <div className="navbar_genre-item">
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                            </div>
                            <div className="navbar_genre-item">
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                            </div>
                            <div className="navbar_genre-item">
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                            </div>
                            <div className="navbar_genre-item">
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                            </div>
                            <div className="navbar_genre-item">
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                            </div>
                            <div className="navbar_genre-item">
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                            </div>
                            <div className="navbar_genre-item">
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                                <a href="/">tetx</a>
                            </div>
                        </div>
                    </div>
                    <div className="col l-1 m-1 navbar_main-item navbar_arrow">
                        <a href="/">Sắp Xếp</a>
                        <div className="navbar_sort">
                            <div className="navbar_sort-item">
                                <a href="/">text</a>
                                <a href="/">text</a>
                            </div>
                            <div className="navbar_sort-item">
                                <a href="/">text</a>
                                <a href="/">text</a>
                            </div>
                            <div className="navbar_sort-item">
                                <a href="/">text</a>
                                <a href="/">text</a>
                            </div>
                            <div className="navbar_sort-item">
                                <a href="/">text</a>
                                <a href="/">text</a>
                            </div>
                        </div>
                    </div>
                    <div className="col l-1 m-1 navbar_main-item">
                        <a href="/">Con Gái</a>
                    </div>
                    <div className="col l-1 m-1 navbar_main-item">
                        <a href="/">Con Trai</a>
                    </div>
                    <div className="col l-1 m-1 navbar_main-item">
                        <a href="/">Tìm Truyện</a>
                    </div>
                    <div className="col l-1 m-1 navbar_main-item">
                        <a href="/">Lịch Sử</a>
                    </div>
                    <div className="col l-1 m-1 navbar_main-item">
                        <a href="/">Theo Dõi</a>
                    </div>
                    <div className="col l-1 m-1 navbar_main-item">
                        <a href="/">Thảo Luận</a>
                    </div>
                    <div className="col l-1 m-1 navbar_main-item">
                        <a href="/">Fanpage</a>
                    </div>
                    <div className="col l-2 navbar_main-item">
                        <a href="/">Tuyển Nhân Sự</a>
                    </div>
                </div>

                {/* Breakpoint < 1024px */}
                <div className="grid wide row">
                    <label htmlFor="navbar_main-list" className="navbar_main-list-icon">
                        <i className="fas fa-tasks"></i>
                    </label>
                    <input type="checkbox" id="navbar_main-list" />
                    <div className="navbar_main-list">
                        <div className="navbar_main-item">
                            <a href="/">Trang Chủ</a>
                        </div>
                        <div className="navbar_main-item navbar_arrow">
                            <a href="/">Thể Loại</a>
                            <div className="navbar_genre">
                                <div className="navbar_genre-item">
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                </div>
                                <div className="navbar_genre-item">
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                </div>
                                <div className="navbar_genre-item">
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                </div>
                                <div className="navbar_genre-item">
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                </div>
                                <div className="navbar_genre-item">
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                </div>
                                <div className="navbar_genre-item">
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                </div>
                                <div className="navbar_genre-item">
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                    <a href="/">tetx</a>
                                </div>
                            </div>
                        </div>
                        <div className="navbar_main-item navbar_arrow">
                            <a href="/">Sắp Xếp</a>
                            <div className="navbar_sort">
                                <div className="navbar_sort-item">
                                    <a href="/">text</a>
                                    <a href="/">text</a>
                                </div>
                                <div className="navbar_sort-item">
                                    <a href="/">text</a>
                                    <a href="/">text</a>
                                </div>
                                <div className="navbar_sort-item">
                                    <a href="/">text</a>
                                    <a href="/">text</a>
                                </div>
                                <div className="navbar_sort-item">
                                    <a href="/">text</a>
                                    <a href="/">text</a>
                                </div>
                            </div>
                        </div>
                        <div className="navbar_main-item">
                            <a href="/">Con Gái</a>
                        </div>
                        <div className="navbar_main-item">
                            <a href="/">Con Trai</a>
                        </div>
                        <div className="navbar_main-item">
                            <a href="/">Tìm Truyện</a>
                        </div>
                        <div className="navbar_main-item">
                            <a href="/">Lịch Sử</a>
                        </div>
                        <div className="navbar_main-item">
                            <a href="/">Theo Dõi</a>
                        </div>
                        <div className="navbar_main-item">
                            <a href="/">Thảo Luận</a>
                        </div>
                        <div className="navbar_main-item">
                            <a href="/">Fanpage</a>
                        </div>
                        <div className="navbar_main-item">
                            <a href="/">Tuyển Nhân Sự</a>
                        </div>
                        <div className="navbar_main-item">
                            <a href="/">
                                <i className="fas fa-mobile-alt"></i>
                                Tải App</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Navbar;