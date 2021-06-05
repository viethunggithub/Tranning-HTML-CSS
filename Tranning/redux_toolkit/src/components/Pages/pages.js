import HomePage from './HomePage'
import NotFoundPage from './NotFoundPage'
import FormProductPage from './FormProductPage'
import DetailsProductPage from './DetailsProductPage'

export const pages = [
    {
        path:"/",
        exact:true,
        main:() => <HomePage />
    },
    {
        path:"/detailsProduct",
        exact:false,
        main:() => <DetailsProductPage />
    },
    {
        path:"/formProduct", 
        exact:false,
        main:() => <FormProductPage />
    },
    {
        path:"/", 
        exact:false,
        main:() => <NotFoundPage />
    }
]