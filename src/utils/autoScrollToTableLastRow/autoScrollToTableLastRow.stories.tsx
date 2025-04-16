import React, { Component, useState } from 'react';
import { autoScrollToTableLastRow } from './autoScrollToTableLastRow';
import Table from '../../components/Table/Table';
import Button from '../../components/Button';

export default {
  title: 'Utils/autoScrollToTableLastRow',
  component: autoScrollToTableLastRow,
};

export const AutoScrollToTableLastRow = () => {
  const SampleData = [
    {
      defectId: '3PA10002',
      summary: 'Def',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10005',
      summary: 'gfdhj',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10027',
      summary: 'defect1',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10028',
      summary: 'def1',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10029',
      summary: 'def12oi3uy',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10030',
      summary: 'def789',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10031',
      summary: 'def',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10032',
      summary: 'def1',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10033',
      summary: 'def4567890[',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10037',
      summary: 'def567',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10038',
      summary: 'def657890',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10023',
      summary: 'def11111',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10024',
      summary: 'def2',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10025',
      summary: 'qwsedf',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10026',
      summary: 'swdefrgt',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10012',
      summary: 'Def',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10039',
      summary: 'javascript:/*/scriptimg/',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10040',
      summary: 'hgiuyiu',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10046',
      summary: 'unable to login',
      createdBy: 'Sanjay',
    },
    {
      defectId: '3PA10048',
      summary: 'kiuytfr',
      createdBy: 'Sanjay',
    },
  ];

  const columnsData = [
    {
      header: 'Bug ID',
      accessor: 'defectId',
      width: '20%',
    },
    {
      header: 'Bug Summary',
      accessor: 'summary',
      width: '60%',
    },
    {
      header: 'Created By',
      accessor: 'createdBy',
      width: '20%',
    },
  ];

  const tableRef = React.useRef<HTMLTableSectionElement>(null);

  return (
    <div>
      <Button
        variant="primary"
        label="Click To Scroll"
        onClick={() => {
          autoScrollToTableLastRow(tableRef, 0);
        }}
      />

      <h1>AutoScrollToTableLastRow Utils</h1>

      <Table
        tableRef={tableRef}
        data={SampleData || []}
        columns={columnsData}
        headerType="secondary"
        withFixedHeader
        height={'256px'}
      />
    </div>
  );
};
