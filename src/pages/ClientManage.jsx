import React, { useMemo } from "react";
import { Grid } from "@mui/material";
import faker from "faker/locale/ko";

import ComponentHeader from "../components/ComponentHeader";
import ClientTable from "../components/table/ClientTable";

faker.seed(10);

const ClientManage = () => {
  const columns = useMemo(() => [
    { accessor: "name", Header: "이름" },
    { accessor: "email", Header: "이메일" },
    { accessor: "phone", Header: "전화번호" },
  ]);

  const data = useMemo(() =>
    Array(10)
      .fill()
      .map(() => ({
        name: faker.name.lastName() + faker.name.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
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
