import './ProductCard.scss'

function ProductCard({ data }) {
    return (
        <div className="product-card">
            <img src={data.imageUrl} />
            <div className="content">
                <h4>{data.title}</h4>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default ProductCard