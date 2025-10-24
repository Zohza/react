
function ProductCard({name, price, image, inStock}){
    return(
        <div className={`image-status ${!inStock? 'instock':'not-instock'}`}>
            <img src={image} alt={name}/>
            <p>Name: {name}</p>
            <p>Price : {price}</p>

       <p className={`stock-status ${inStock ? 'instock':'not-instock'}`}>
        {inStock? 'product in stock \u2713' : 'product not in stock'}
       </p>
        </div>
    );
};
export default ProductCard
