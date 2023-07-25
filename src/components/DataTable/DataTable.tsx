import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef,} from '@mui/x-data-grid';


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'make',
        headerName: 'Make',
        width: 150,
        editable: true
    },
    {
        field: 'model',
        headerName: 'Model',
        width: 150
    },
    {
        field: 'year',
        headerName: 'Year',
        width: 110
    },
    {
        field: 'color',
        headerName: 'Color',
        width: 150
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 150
    },
];

const rows = [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2022, color: 'Blue', price: 25000 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2021, color: 'Red', price: 23000 },
    { id: 3, make: 'Ford', model: 'Focus', year: 2023, color: 'White', price: 26000 },
    { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2022, color: 'Silver', price: 27000 },
    { id: 5, make: 'BMW', model: 'X5', year: 2021, color: 'Black', price: 45000 },
    { id: 6, make: 'Mercedes-Benz', model: 'C-Class', year: 2023, color: 'Gray', price: 40000 },
    { id: 7, make: 'Audi', model: 'A4', year: 2022, color: 'White', price: 38000 },
    { id: 8, make: 'Nissan', model: 'Altima', year: 2023, color: 'Blue', price: 24000 },
    { id: 9, make: 'Kia', model: 'Sorento', year: 2022, color: 'Red', price: 28000 },
    { id: 10, make: 'Hyundai', model: 'Tucson', year: 2021, color: 'Black', price: 26000 },
];

export const DataTable = () => {
    return (
        <Box sx={{height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                />
        </Box>
    )
}