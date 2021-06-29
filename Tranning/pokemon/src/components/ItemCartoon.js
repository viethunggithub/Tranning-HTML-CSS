import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CALLAPI from '../api/callapi'
import Constant from '../exam/constant'

export default function ItemCartoon(props) {
    const { item } = props
    const [product, setProduct] = useState(null)

    useEffect(() => {
        CALLAPI('get', `${item.url}`, null).then(res => setProduct(res.data))
    }, [])
    return (
        <div className="col l-3 m-4 c-6">
            {
                product != null &&
                <div className="cartoon-item">
                    <Link to={`/details/${product.id}`}>
                        <img src={`${product['sprites']['other']['official-artwork']['front_default']}`} alt="" />
                    </Link>
                    <div className="details">
                        <p>
                            {`${product.id}`.length >= 2 ? `#0${product.id}` : `#00${product.id}`}
                        </p>
                        <h5>
                            {Constant.toUppercaseChart(item.name)}
                        </h5>
                        <div className="options">
                            {
                                product.types.map((item, index) => {
                                    return <span style={Constant.toChangeBg(item.type.name)} key={index}>{Constant.toUppercaseChart(item.type.name)}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}