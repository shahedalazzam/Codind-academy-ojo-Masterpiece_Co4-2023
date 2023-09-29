import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../formStyle.css';
import DeleteBtn from './DeleteBtn';

const OrdersTable = (props) => {
    const role = localStorage.getItem('role');
    const token = sessionStorage.getItem('token');

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const requestData = {
                    param1: 'value1',
                    param2: 'value2'
                };

                const response = await axios.post('https://dream-wedding.onrender.com/user/order/create', requestData);

                if (response && response.data && response.data.data && response.data.data.Orders) {
                    setOrders(response.data.data.Orders);
                } else {
                    console.error('Invalid response data:', response.data);
                }
            } catch (error) {
                console.error('Error fetching order data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchOrderData();
    }, []);

    const handleOrderDelete = async (deletedOrderId) => {
        try {
            await axios.delete(`https://dream-wedding.onrender.com/user/order/${deletedOrderId}`);
            
            setOrders((prevOrders) => prevOrders.filter((order) => order._id !== deletedOrderId));
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    let navigate = useNavigate();
    return (
        <>
            <div id="wrapper" style={{ width: '100%' }}>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <div className="container-fluid">
                            <h1 style={{ margin: '2rem 0 2rem 0' }} className="h3 text-white">
                                Tables
                            </h1>
                            <div className="card shadow mb-4">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>User</th>
                                                    <th>Items</th>
                                                    <th>TotalPrice</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map((order, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{order._id}</td>
                                                            <td>{order.user} {/* Replace with actual user information */}</td>
                                                            <td>{/* Render order items here */}</td>
                                                            <td>{order.totalPrice}</td>
                                                            <td>
                                                                <DeleteBtn id={order._id} onDelete={handleOrderDelete} />
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrdersTable;
