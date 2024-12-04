import { Link, useNavigate } from "react-router-dom";

export const Header = ()=>{
  const navigate = useNavigate();
  const moveToCart = ()=>{
      navigate('/total-cart',{
        state:{
            discount:20,
            offers:2
        }
      });

  }
    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Shopping App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
          &nbsp;
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        {/* <li className="nav-item">
        <Link to="/shoes/sports/3000">Shoes</Link>
        &nbsp;
          {/* <a className="nav-link" href="#">Shoes</a> */}
        {/* </li> */} 
        
        
        <li className="nav-item">
        <Link to="/shirts?brand=UCB&price=3999">Shirts</Link>
        &nbsp;
          {/* <a className="nav-link" href="#">Shirts</a> */}
        </li>
        <li className="nav-item">
        <Link to="/capping">Capping</Link>
        </li>
        &nbsp;
        
        <li className="nav-item">
        <Link to="/caps">Caps</Link>
        &nbsp;
          {/* <a className="nav-link" href="#">Caps</a> */}
        </li>
       
        
      </ul>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <button onClick={moveToCart} type="button" class="btn btn-primary position-relative">
  Total Items in Cart
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0
  
  </span>

</button>
&nbsp;
&nbsp;
            <button className = 'btn btn-danger'>Logout</button>
        </li>
        
      </ul>
    </div>
    </div>
  </div>
</nav>
    );
}