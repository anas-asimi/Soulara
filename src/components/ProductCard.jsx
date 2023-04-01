import './ProductCard.scss'

function ProductCard({ data }) {
    return (
        <div className="product-card">
            <img src={data.imageUrl} />
            <div className="content">
                <h3>{data.title}</h3>
                <p className="big">{data.description}</p>
            </div>
        </div>
    )
}

export default ProductCard