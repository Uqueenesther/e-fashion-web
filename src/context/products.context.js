import {createContext, useState} from 'react';

import PRODUCTS from '../Shop-data.json';

export const ProductsContext = createContext({

     products:[],

});

export const ProductsProvider = ({children}) => {
    const [products, setProduts] = useState(PRODUCTS)
    const value = {products}
    return (
        <ProductsContext.Provider value={value}>
              {children}
        </ProductsContext.Provider>
    )
}