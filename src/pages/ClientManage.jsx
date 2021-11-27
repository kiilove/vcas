import React, { useMemo } from "react";
import { Grid } from "@mui/material";
import faker from "faker/locale/ko";

import ComponentHeader from "../components/ComponentHeader";
import ClientTable from "../components/table/ClientTable";
import moment from "moment";

faker.seed(10);

const ClientManage = () => {
  const columns = useMemo(() => [
    { accessor: "phone", Header: "전화번호" },
    { accessor: "date", Header: "추가일자" },
    { accessor: "project", Header: "추가된 프로젝트" },
  ]);

  const data = useMemo(() =>
    Array(10)
      .fill()
      .map(() => ({
        // name: faker.name.lastName() + faker.name.firstName(),
        phone: faker.phone.phoneNumber(),
        date: moment(faker.date.soon(5, new Date()).toUTCString()).format(
          "YYYY-MM-DD"
        ),
        project: faker.random.words(),
      }))
  );

  return (
    <Grid container spacing={2} padding={2}>
      <Grid item xs={12}>
        <ComponentHeader title={"고객데이터"} />
      </Grid>
      <Grid item xs={12}>
        <ClientTable columns={columns} data={data} />
      </Grid>
    </Grid>
  );
};

export default ClientManage;
