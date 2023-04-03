import './ServiceCard.scss'

function ServiceCard({ data }) {
    console.log(data);
    return (
        <div className="service-card">
            <div className="content">
                <h3>{data.title}</h3>
                <p className="big">{data.description}</p>
            </div>
            <img src={data.imgUrl} alt="data.title" />
            <div className="overlay"></div>
        </div>
    )
}

export default ServiceCard