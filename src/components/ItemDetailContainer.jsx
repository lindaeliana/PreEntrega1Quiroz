const Detail = ({ match }) => {
    
    return (
      <div>
        <h2>Detalle del Elemento {match.params.id}</h2>
        {}
      </div>
    );
  };

  export default Detail;