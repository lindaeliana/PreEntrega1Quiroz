const Catalog = () => {
    return (
      <div>
        <h2>Catálogo</h2>
        {}
        <ul>
          <li>
            <Link to="/catalog/1">Elemento 1</Link>
          </li>
          <li>
            <Link to="/catalog/2">Elemento 2</Link>
          </li>
        </ul>
      </div>
    );
  };

  export default Catalog;