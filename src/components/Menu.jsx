// // src/components/Menu.js
// import React, { useEffect, useState } from 'react';
// import { fetchMenuItems } from '../utils/api'; // API call

// const Menu = () => {
//     const [menuItems, setMenuItems] = useState([]);

//     useEffect(() => {
//         fetchMenuItems().then(items => setMenuItems(items));
//     }, []);

//     return (
//         <div>
//             <h2>Menu</h2>
//             <div className="menu-items">
//                 {menuItems.map(item => (
//                     <div key={item.name} className="menu-item">
//                         <h3>{item.title}</h3>
//                         <p>{item.description}</p>
//                         <p>Price: ${item.price}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Menu;
import React, { useEffect, useState } from 'react';
import { fetchMenuItems } from '../utils/api'; // API call

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);  // Menu items from API
    const [orderList, setOrderList] = useState([]);  // User's order list

    useEffect(() => {
        fetchMenuItems().then(items => setMenuItems(items));
    }, []);

    // Function to add item to the order list
    const addToOrder = (item) => {
        setOrderList([...orderList, item]);
    };

    // Function to remove item from order list
    const removeFromOrder = (index) => {
        const newOrderList = [...orderList];
        newOrderList.splice(index, 1);  // Remove the item by index
        setOrderList(newOrderList);
    };

    return (
        <div>
            <h2>Menu</h2>
            <div className="menu-items">
                {menuItems.map(item => (
                    <div key={item.name} className="menu-item">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => addToOrder(item)}>Add to Order</button>
                    </div>
                ))}
            </div>

            <h2>Your Order</h2>
            <div className="order-list">
                {orderList.length === 0 ? (
                    <p>No items in your order yet.</p>
                ) : (
                    <ul>
                        {orderList.map((item, index) => (
                            <li key={index}>
                                {item.title} - ${item.price}
                                <button onClick={() => removeFromOrder(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Menu;
