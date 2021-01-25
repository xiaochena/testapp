interface iDB_01 {
  data?: any[];
  Increment?: any[];
  Total?: any[];
}
interface iDB_02 {
  dateList?: any[];
  yAxisData?: any[];
}

interface iGet00_DB {
  (): Promise<{
    data?: { DB_01: iDB_01; DB_02: iDB_02 };
    code?: number;
    message: string;
  }>;
}
