

const ProductData = ({image,title}) => {
    return <div className="product-card">
      <img className="image" src={image} alt={title}></img>
      <span className="title">{title}</span>
    </div>
}

export default  ProductData;