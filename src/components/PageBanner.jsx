import './PageBanner.scss'

function PageThumbnail({title}) {
    return (
        <div className='thumbnail'>
            <h1>{title??'title'}</h1>
        </div>
    )
}

export default PageThumbnail