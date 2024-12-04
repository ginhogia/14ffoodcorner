import { useState, useEffect, useRef } from 'react';
import './ShoppingCart.css';

export const ShoppingCart = function({ cart, updateCart }){
    const [total, setTotal] = useState(0);
    const cartRef = useRef(null);

    // 計算總金額
    useEffect(() => {
        const newTotal = cart.reduce((sum, item) => {
            return sum + (item.product.fields.Price * item.count);
        }, 0);
        setTotal(newTotal);
    }, [cart]);

    // 更新商品數量
    const updateQuantity = (itemId, change) => {
        const newCart = cart.map(item => {
            if(item.id === itemId) {
                const newCount = item.count + change;
                if(newCount <= 0) {
                    return null; // 將被過濾掉
                }
                return {...item, count: newCount};
            }
            return item;
        }).filter(Boolean); // 過濾掉數量為0的商品

        updateCart(newCart);
    };

    const scrollToCart = () => {
        cartRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
            {cart.length > 0 && (
                <button className="float-cart-button" onClick={scrollToCart}>
                    🛒 ({cart.length})
                </button>
            )}
            <div className="shopping-cart" ref={cartRef}>
                <h2>購物車</h2>
                {cart.length === 0 ? (
                    <p>購物車是空的</p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.product.fields.ImgUrl} alt={item.product.fields.Name} />
                                    <div className="item-details">
                                        <h3>{item.product.fields.Name}</h3>
                                        <p>單價: ${item.product.fields.Price}</p>
                                        <div className="quantity-controls">
                                            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                            <span>{item.count}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                        </div>
                                        <p>小計: ${item.product.fields.Price * item.count}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-total">
                            <h3>總計: ${total}</h3>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}