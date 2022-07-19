import Image from 'next/image'
import styles from '../styles/Cart.module.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect,useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import axios from 'axios';
import { useRouter } from 'next/router';


export default function Cart() {

    const [open,setOpen] = useState(false)
    const amount = "2";
    const currency = "USD";
    const style = {"layout":"vertical"};
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    const router = useRouter()

    const createOrder = aync (data)=>{
        try {
            const res= axios.post(`http://localhost:3000/api/orders`,data)
            res.status ===201 && router.push('/orders/'+res.data._id)
        } catch (error) {
            console.log(error)
        }
    }

    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    
        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);
    
    
        return (<>
                { (showSpinner && isPending) && <div className="spinner" /> }
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order in app
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            const shipping = details.purchase_units[0].shipping
                        });
                    }}
                />
            </>
        );
    }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.products.map(product=>(
                        
                        <tr className={styles.tr} key={product._id}>
                            <td className={styles.td}>
                                <div className={styles.imgContainer}>
                                    <Image src={product.img} alt='' objectFit='cover' layout='fill' />
                                </div>
                            </td>
                            <td className={styles.td}>
                                <span className={styles.name}>{product.title}</span>
                            </td>
                            <td className={styles.td}>
                                <span className={styles.extras}>
                                    {product.extras.map(extra=>(<span key={extra._id}>{extra.text}, </span>))}</span>
                            </td>
                            <td className={styles.td}>
                                <span className={styles.price}>${product.price}</span>
                            </td >
                            <td className={styles.td}>
                                <span className={styles.quantity}>{product.quantity}</span>
                            </td>
                            <td className={styles.td}>
                                <span className={styles.total}>${product.price*product.quantity}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal</b>${cart.total}
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total</b>${cart.total}
                </div>
                {open ? (
                    <div className={styles.paymentMethods}>
                        <button className={styles.payButton}>CASH ON DELIVERY</button>
                        <PayPalScriptProvider
                            options={{
                                "client-id": "test",
                                components: "buttons",
                                currency: "USD",
                                "disable-funding":"credit,card,p24"
                            }}
                        >
                            <ButtonWrapper
                                currency={currency}
                                showSpinner={false}
                            />
                        </PayPalScriptProvider>
                    </div>
                ):(
                    <button onClick={()=>setOpen(true)} className={styles.button}>CHECKOUT NOW!</button>
                )}
                
            </div>
        </div>
    </div>
  )
}
