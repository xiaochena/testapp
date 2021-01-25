import request from 'umi-request';

export const getEcharts_DB: iGet00_DB = () => {
  return request.get('/api/00-echarts');
};
