import React, { useEffect, useState } from "react";
import accountApi from "../../api/accountApi";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Account(){
    const initValues = [];
    const initParams= {
        _limit : '5',
        _page : '0',
        _field : 'id',
        _known : 'up',
    };
    const [ params, setParams] = useState(initParams);
    const [ account, setAccount] = useState(initValues);
    const [ page, setPage] = useState(0);
    const [ count, setcount] = useState(0);

    useEffect(() => {
        const fetchListAccount = async () =>{
          try{
            const response = await accountApi.getAll(params);
            setAccount(response.content);
            console.log(response);
            setcount(response.totalPages);
            console.log(response.totalPages);
          }catch (error){
            console.log(error);
          }
        }
        fetchListAccount();
      }, [params]);

      const handleChange = (event, value) => {
        setPage(value);
        setParams(
            {
                _limit : '5',
                _page : value-1,
                _field : 'id',
                _known : 'up',
            }
        );
      };
    return(
        <React.Fragment>
            <h3>Demo phan trang</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={{background : "blue"}}>
                    <TableRow>
                        <TableCell>Full Name</TableCell>
                        <TableCell align="right">User name</TableCell>
                        <TableCell align="right">Email</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {account.map((row) => (
                        <TableRow
                        key={row.username}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.fullname}
                        </TableCell>
                        <TableCell align="right">{row.username}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <Stack spacing={2}>
                <Pagination count={count}  page={page} onChange={handleChange} color="secondary" />
                </Stack>
        </React.Fragment>
    )
}
export default Account;