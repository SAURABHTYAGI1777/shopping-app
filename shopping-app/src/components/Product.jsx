export const Product =({product})=>{
    return (<>
    <div className="card me-5" style={{width: '18rem'}}>
     <img src={product.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <a href="#" className="btn btn-primary">Add to Cart</a>
  </div>
</div>
    </>)
}