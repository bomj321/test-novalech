import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';

import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

import Spinner from './Spinner';

// Services
import EmployeeService from '../services/EmployeeService';

const { Column } = Table;

const TableEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    setLoading(true);
    EmployeeService.GetEmployees()
      .then((response) => {
        setDataSource([]);
        setDataSource(response.data);
        setLoading(false);
      })
      .catch((e) => {
        toastr.error('Hubo un error al obtener los empleados.');
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <Spinner />}

      {!loading && (
        <>
          <Button type="primary">Empleados</Button>

          <Table className="mt-1 table-movie" dataSource={dataSource}>
            <Column title="Email" dataIndex="email" key="email" />
            <Column title="Rol" dataIndex="role" key="role" />
          </Table>
        </>
      )}
    </>
  );
};

export default TableEmployee;
