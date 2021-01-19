import { Chat, Example } from './lib';

const ACTIVE_COMPONENT = process.env.REACT_APP_COMPONENT;

// REACT_APP_COMPONENT keys
const CHAT = 'CHAT';
const EXAMPLE = 'EXAMPLE';

// join new component here
const components = {
  [CHAT]: Chat,
  [EXAMPLE]: Example,
};

// set initial props for the your component
const initialProps = {
  [CHAT]: {
    debug: true,
    portal: 'nurse', // admin, nurse
    mode: 'green', // green, orange
    apiUrl: 'http://localhost:3001',
    socketUrl: 'ws://localhost:3005',
    token: 'eyJraWQiOiJLK2k5Y1prQmpFTm5Ta3VyamNqZnAzWVNYV1IzK2FoTVlqdUUrcXcrZ2NrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwODQ2NDc0MS05NTEzLTRmMWEtYTM0My0yZjU1ZjUxM2ZhNTAiLCJhdWQiOiI2YmxmbTVhbWE0anM5amFpcGN2ZTlvYXQ3MiIsImV2ZW50X2lkIjoiMDVjMTExMDQtNzdlYi00NTA5LThjNzMtYjdiODJiZjQ5N2U0IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MDkyNjQ1NDQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2JTaElaejM2WiIsImNvZ25pdG86dXNlcm5hbWUiOiIwODQ2NDc0MS05NTEzLTRmMWEtYTM0My0yZjU1ZjUxM2ZhNTAiLCJleHAiOjE2MDkyNjgxNDQsImlhdCI6MTYwOTI2NDU0NH0.SqdK1II3E4ZtLSkqPL6ymm-YtexR-hDiJGHdmLyn5-RM__c6KpUcL_foj4je_Q1QHRbz9MuSAxIik6zFTjoNQ4PmlubzFhZdtVhIA-ifs2vrt4Oyb0RGoH2TU9IHS3IRKkdmAjOodNd2eDVnmIluV7vjy7-YWR5FGgPLd1csnBvlT8k7RGfMX3iqY3AXOaMHGvGw7MZaBUYZVaFnHKF2_GU2xWLdDcUji9oHpw-5K1RUx2LEl9eNe6aa-3MM7Py2GuIm_IoAFZ4nbqUyyE8qfOSbPATTRZ3cXNhL7ZHc89RXeuIdQM1vcMzfZgKhq3bFr2_OrA0SAY-Jy2nt261Bsg'
    // token: 'eyJraWQiOiJsbFhHWTR2bWJMVXBYZ0Zleit5R1I3N1dEb1Y4K1ZFRlhOTWFcL3g1TXV6OD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2ZDRiNzk0Ny00NWNmLTRiNTQtYTc3OS02ZTRkNTAyZWU4NjgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9nblhURjdPdVIiLCJjb2duaXRvOnVzZXJuYW1lIjoiNmQ0Yjc5NDctNDVjZi00YjU0LWE3NzktNmU0ZDUwMmVlODY4IiwiY3VzdG9tOnRlbmFudF9pZCI6ImNmMmIxZjY1LWZmYzEtNGYzNy1hZjJkLTczZGZmNzYwNzQ4ZCIsImdpdmVuX25hbWUiOiJRQSIsImF1ZCI6IjRkNGo0aTNxaGFlaHZlb2d0bjRuZGloc25wIiwiZXZlbnRfaWQiOiI5YmI4Y2VkNC1hMWUzLTQ3M2YtOWRmMC1iNzk2OTU0NmMyZTMiLCJ0b2tlbl91c2UiOiJpZCIsImN1c3RvbTpyZXN0cmljdGlvbnMiOiJlbXBsb3llZSIsImF1dGhfdGltZSI6MTYwODU2MjM3MywiZXhwIjoxNjA4NTY1OTc0LCJpYXQiOjE2MDg1NjIzNzQsImZhbWlseV9uYW1lIjoiTnVyc2UiLCJlbWFpbCI6Iml2YW5laWNoeWsuaXZhbisyMTBAZ21haWwuY29tIn0.ZILT_erV8J-ocBSh-22bfd70sJiwkjV5s2cQCJHMFvy9wNczYm-p7SVFJRzzKabpKCmksKYQEMj4x90IE9HIr-Ojmmx19Pze0bm1NLEXHjMFDYbYDIffiosi1f1cc6nSVxBFhXXNpaXTbPLvRrWsMMKV-XpNQdrPJ75QkjrRHaHw7Ex1AWjxid_ZY00yl3cXauGVHVnI9qd8U0OrwA7pizLpORPcwYhrmTVHOGFIOByK_jBWQJvdcNou6Kcq8Dl7ntKUMd4LIgQxREJEhDxnqB1qktg2_8HiWJbeyY8t_xDaivaKbYNhP0-ad6enrHyiejx9KXb7ZCh08VGslTjCdw'
  },
  [EXAMPLE]: {

  },
};

export const getInitialProps = () => initialProps[ACTIVE_COMPONENT];
export const getComponent = () => components[ACTIVE_COMPONENT];
