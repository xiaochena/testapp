import { DB_01, DB_02 } from './DB';

export default {
  'GET /api/00-echarts': {
    data: { DB_01, DB_02 },
    code: 1,
    message: 'success',
  },
};
