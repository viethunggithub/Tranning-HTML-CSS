import { Link, useParams } from 'react-router-dom'
import Constant from '../exam/constant'
import { useSelector } from 'react-redux'


export default function ArrowSection() {
    const params = useParams()
    const nextCartoon = useSelector(state => state.nextCartoon)
    const prevCartoon = useSelector(state => state.prevCartoon)
    const idNext = Number(params.id) + 1 > 898 ? 1 : Number(params.id) + 1
    const idPrev = Number(params.id) - 1 < 1 ? 898 : Number(params.id) - 1
    return (
        <div className="row">
            <div className="col l-6 m-6 c-6">
                < div className="pagination">
                    <Link to={`/details/${idPrev}`} className="prevCartoon">
                        <i className="fas fa-angle-left"></i>
                        <span>
                            {
                                Constant.toChangeID(prevCartoon.result.id)
                            }
                        </span>
                        <span>
                            {
                                Constant.toUppercaseChart(prevCartoon.result.name)
                            }
                        </span>
                    </Link>
                </div>
            </div>
            <div className="col l-6 m-6 c-6">
                <div className="pagination">
                    <Link to={`/details/${idNext}`} className="nextCartoon">
                        <span>
                            {
                                Constant.toUppercaseChart(nextCartoon.result.name)
                            }
                        </span>
                        <span>
                            {
                                Constant.toChangeID(nextCartoon.result.id)
                            }
                        </span>
                        <i className="fas fa-angle-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}