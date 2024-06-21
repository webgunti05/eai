export const PipeColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'pipelineName', headerName: 'Pipeline Name', width: 200 },
    {
      field: 'source',
      headerName: 'Source',
      width: 150,
      editable: true,
    },
    {
      field: 'version',
      headerName: 'Version',
      width: 150,
      editable: true,
    },
    {
      field: 'lastRun',
      headerName: 'Last Run',
      width: 110,
      editable: true,
    },
    {
      field: 'lastUpdated',
      headerName: 'Last updated',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.source || ''} ${row.version || ''}`,
    },
]