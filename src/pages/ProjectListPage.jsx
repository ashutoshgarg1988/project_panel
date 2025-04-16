/**
 * ProjectListPage.jsx
 * 
 * Author: Ashutosh Garg
 * Created: 15/Apr/2025
 * Last Updated: 15/Apr/2025
 * 
 * Description: To handle route for project listing page.
 * */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useProjects } from '../store/ProjectContext';
import { Button } from '@mui/material';
import ActionButtons from '../components/ui/ActionButtons';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/constants';
import { formatDate } from '../utils/utility';

export default function ProjectListPage() {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { projects, toggleFavorite } = useProjects();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  /** Handle Edit click */
  const handleEditClick = (rowData) => {
    navigate(`/projects/${rowData.projectID}/edit`, {
      state: rowData,
    });
  }

  /** Handle Delete click */
  const handleDeleteClick = (rowData) => {
    console.log("Delete clicked", rowData);
  }

  /** Handle Favorite click */
  const handleFavoriteClick = (rowData) => {
    toggleFavorite(rowData.projectID);
  }

  /** Setting Table data  */
  const columns = [
    { id: 'projectID', label: 'project ID', align: 'center', },
    { id: 'projectName', label: 'Project Name', align: 'center', },
    {
      id: 'startDate',
      label: 'Start Date',
      align: 'center',
      format: (value) => formatDate(value),
    },
    {
      id: 'endDate',
      label: 'End Date',
      align: 'center',
      format: (value) => formatDate(value),
    },
    {
      id: 'manager',
      label: 'Project Manager',
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'action',
      label: 'Actions',
      align: 'center',
      renderCell: (row) => {
        return (
          <ActionButtons 
            rowData={row} 
            onEditClickCallBack={()=>handleEditClick(row)}
            onDeleteClickCallBack={()=>handleDeleteClick(row)}
            onFavoriteClickCallBack={()=>handleFavoriteClick(row)}
          />
        )
      }
    }
  ];

  return (
    <div className='flex flex-col p-4'>
      <Button className="self-end" size='medium' variant='contained' sx={{width: '200px', margin: '10px', align:'right'}} onClick={()=>navigate(ROUTES.CREATE_PROJECT)}>Create Project</Button>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    sx={{
                      backgroundColor: '#000',
                      color: '#fff',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}
                    key={`${column.id}-${index}`}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.renderCell
                              ? column.renderCell(row)
                              : column.format
                              ? column.format(value)
                              : value
                            }
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={projects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}