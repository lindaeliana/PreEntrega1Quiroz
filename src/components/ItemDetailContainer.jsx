import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const itemData = {
            id: itemId,
            name: 'Nombre del ítem',
            description: 'Descripción del ítem',
          };
          resolve(itemData);
        }, 1000);
      });
    };

    fetchData()
      .then((data) => {
        setItemData(data);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del ítem', error);
      });
  }, [itemId]);

  return (
    <div>
      <h2>Detalles del ítem {itemId}</h2>
      {itemData ? (
        <div>
          <p>Nombre: {itemData.name}</p>
          <p>Descripción: {itemData.description}</p>
          {}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;