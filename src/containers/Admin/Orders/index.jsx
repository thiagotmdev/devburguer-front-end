
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
import { Filter, FilterOption } from './styles';
import { orderStatusOptions } from './orderStatus';

export function Orders() {

    const [orders, setOrders] = useState([]); //Backup
    const [filteredOrders, setFilteredOrders] = useState([]); // Os Valores Na Tela.
    const [activeStatus, setActiveStatus] = useState(0);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('orders');
            setOrders(data);
        }
        loadOrders();
    }, []);

    function createData(orders) {
        return {
            name: orders.user.name,
            orderId: orders._id,
            date: orders.createdAt,
            status: orders.status,
            products: orders.products,
        };
    }

    // useEffect(() => {
    //     const newRows = orders.map((order) => createData(order));
    //     setRows(newRows);
    // }, [orders]);

    useEffect(() => {
        const newRows = filteredOrders.map((order) => createData(order));
        setRows(newRows);
    }, [filteredOrders]);

    function handleStatus(status){
        if(status.id === 0){
            setFilteredOrders(orders);
        }else{
            const newOrders = orders.filter((order) => order.status === status.value);
            setFilteredOrders(newOrders);
        }

        setActiveStatus(status.id);
    }

    useEffect(() => { //Esse effect faz com que os itens sumão da tela ao trocar o status da ordem.
        if(activeStatus === 0){
          setFilteredOrders(orders);
        }else{
          const statusIndex = orderStatusOptions.findIndex((item) => item.id === activeStatus);

          const newFilteredOrders = orders.filter(order => order.status === orderStatusOptions[statusIndex].value);

          setFilteredOrders(newFilteredOrders);
        }
      }, [orders])

    return (
      <>
        <Filter>
            {orderStatusOptions.map((status) => (
                <FilterOption key={status.id}
                onClick={() => handleStatus(status)}
                $isActiveStatus={activeStatus === status.id}
                >
                {status.label}</FilterOption>
            ))}
        </Filter>

        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Pedido</TableCell>
                        <TableCell>Cliente</TableCell>
                        <TableCell>Data do pedido</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.orderId}
                            row={row}
                            orders={orders}
                            setOrders={setOrders}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </>
    );
}
