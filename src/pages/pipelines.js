import React from 'react';
import Layout from '../components/layout';
import AppConstants from '../configs/appConstants';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { PipeColumns } from '../utils.js/columns';
import * as STYLE from './styles/pipelineStyles';


const rows = [
    { id:1, pipelineName: 'Pipeline-1', source: 'Snow', version: 'Jon', lastRun: 14, lastUpdated:'22/01/2024' },
    { id:2, pipelineName: 'Pipeline-2', source: 'Lannister', version: 'Cersei', lastRun: 31 , lastUpdated:'22/01/2024'},
    { id:3, pipelineName: 'Pipeline-3', source: 'Lannister', version: 'Jaime', lastRun: 31, lastUpdated:'22/01/2024' },
    { id:4, pipelineName: 'Pipeline-4', source: 'Stark', version: 'Arya', lastRun: 11, lastUpdated:'22/01/2024' },
    { id:5, pipelineName: 'Pipeline-5', source: 'Targaryen', version: 'Daenerys', lastRun: null, lastUpdated:'22/01/2024' },
    { id:6, pipelineName: 'Pipeline-6', source: 'Melisandre', version: null, lastRun: 150, lastUpdated:'22/01/2024' },
    { id:7,pipelineName: 'Pipeline-7', source: 'Clifford', version: 'Ferrara', lastRun: 44, lastUpdated:'22/01/2024' },
    { id:8,pipelineName: 'Pipeline-8', source: 'Frances', version: 'Rossini', lastRun: 36, lastUpdated:'22/01/2024' },
    { id:9, pipelineName: 'Pipeline-9', source: 'Roxie', version: 'Harvey', lastRun: 65, lastUpdated:'22/01/2024' },
  ];

const PipeLines = () => {
    return (
      <>
        <Layout>

          <STYLE.PipleLinesSeparater>
            <STYLE.PageTitle>
              {AppConstants.PipeLinesPage.pageTitle}
            </STYLE.PageTitle>
            <Stack direction="row" spacing={2}>
              <Button variant="contained"> {AppConstants.PipeLinesPage.addNewPipe}</Button>
            </Stack>
          </STYLE.PipleLinesSeparater>
          <Divider orientation="horizontal" />

          <Box sx={{ width: "100%", padding:'2%', boxSizing:'border-box', background:'#fff' }}>
            <DataGrid
              rows={rows}
              columns={PipeColumns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
          
        </Layout>
      </>
    );
}

export default PipeLines;