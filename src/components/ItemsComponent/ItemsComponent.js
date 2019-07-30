import  React  from 'react';
import styles from './ItemComponent.module.css';


let ItemsComponent = (props) => {
  
    let itemsValue = props.items.map((elem) => 
        <tr  key={elem.id}> <td>{elem.name}</td> <td>{elem.level}</td> <td>{elem.cost}</td> <td>{elem.chance}</td> </tr>
        )
        
        return (
          <table className={styles.header}>
            <thead>
              <tr>
                <th>Items</th>
                <th>Level</th>
                <th>Cost</th>
                <th>Chance</th>
              </tr>
            </thead>
            <tbody>{itemsValue}</tbody>
          </table>
        );
    }
    

    export default ItemsComponent