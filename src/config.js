import { Chat, Example } from './lib';

const ACTIVE_COMPONENT = process.env.REACT_APP_COMPONENT;
const ACTIVE_TOKEN = process.env.REACT_APP_ACTIVE_TOKEN;

// REACT_APP_COMPONENT keys
const CHAT = 'CHAT';
const EXAMPLE = 'EXAMPLE';

// join new component here
const components = {
  [CHAT]: Chat,
  [EXAMPLE]: Example,
};

const token = 'eyJraWQiOiJsbFhHWTR2bWJMVXBYZ0Zleit5R1I3N1dEb1Y4K1ZFRlhOTWFcL3g1TXV6OD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1NjliYzA2ZC1lY2IyLTQ3NzUtYWNjNC04ZmE2NGE4NzVkMTEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfZ25YVEY3T3VSIiwiY29nbml0bzp1c2VybmFtZSI6IjU2OWJjMDZkLWVjYjItNDc3NS1hY2M0LThmYTY0YTg3NWQxMSIsImN1c3RvbTp0ZW5hbnRfaWQiOiJjZjJiMWY2NS1mZmMxLTRmMzctYWYyZC03M2RmZjc2MDc0OGQiLCJnaXZlbl9uYW1lIjoiSXZhbiIsImF1ZCI6IjRkNGo0aTNxaGFlaHZlb2d0bjRuZGloc25wIiwiZXZlbnRfaWQiOiJkMWNlY2UyNy0zNDE5LTRmYTQtOWViZi04ZWVlOTg4NmFmNzMiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYxMTA4ODg1OCwiZXhwIjoxNjExMDkyNDU5LCJpYXQiOjE2MTEwODg4NTksImZhbWlseV9uYW1lIjoiSXZhbmVpY2h5ayIsImVtYWlsIjoiaXZhbmVpY2h5ay5pdmFuKzIwMEBnbWFpbC5jb20ifQ.h6BlpIC8kguiPUumtW-zmmDT716WuwQ0BQOo9x_LW5IIAv1jHvGPyoa-lwze4JdIq4YrVJqmKpdUEhVJisU5GXB04hJdS7xINT1gCOxCQWHEflkgP_lsxCY_HzkOG9Q_bK-pbW6nNmfD6xnP9zHOYN0h-KPCIj9k8jj15ZejOQftQE9YECkO-8AqJyZO_LUPwNbTnQmWL2nqUoW2Lou39UxZ1V7MCCdoGtjrRy7gfClhU-8Cs3-YEzvbWWA63n75N2s5mZvHCe8-E8qO85g78Vi2XDzO5dAhEmkdi44eAOENz_cq_QABBk4I9SvDvvNRwjmPYvpIDLxuPLs5IkfhYw';
const token1 = 'eyJraWQiOiJjUXpJZ1Npa1kzYVdlK05GZndCZEMybXlRMGMrekRsUlwvaVU0K05XUUpLND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1NjliYzA2ZC1lY2IyLTQ3NzUtYWNjNC04ZmE2NGE4NzVkMTEiLCJldmVudF9pZCI6ImMyOTE1NWU4LTg2ZmUtNDc1OS1iZDk1LTY3NWVmMjI5YmUwMiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTEyMTk5MjcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2duWFRGN091UiIsImV4cCI6MTYxMTIyMTEyNywiaWF0IjoxNjExMjE5OTI3LCJqdGkiOiIwMjJiNWMxOC04NjMzLTQyZTktYTgyNC04MjJmOTk5OTMwNTgiLCJjbGllbnRfaWQiOiI0ZDRqNGkzcWhhZWh2ZW9ndG40bmRpaHNucCIsInVzZXJuYW1lIjoiNTY5YmMwNmQtZWNiMi00Nzc1LWFjYzQtOGZhNjRhODc1ZDExIn0.GalygGWCAa4GNr8M5vNup1Qr-0nMo-a5JrH2mhDnE6RbRF-7z9RIZyYx6mmMepfw_D13uiaXenJFyyi_glIT2x06pQJbCDP7tR6E1TArNEo4cJKHhfSKMS9Jk8vc4icuosW4B55uzlPcEVjyRtsiYA_1DQfsODeelHK_KA9KeRS90Ue5fHCtMnP9xePV9riOyfQZHb9ftv-QFP0jovPtcVdnyTmkAVqrl8Px5bz-CqG99hx0kqRDbc10K9XCbNzGchnQVGlhFjhRThNhZVK_q5ymRbRVu_7nwjrJjTkQG_UZ0Hl1BvwV7stL-PpucGk3YT_Gy6VwZaglNVnHLfTFBA';
const token2 = 'eyJraWQiOiJjUXpJZ1Npa1kzYVdlK05GZndCZEMybXlRMGMrekRsUlwvaVU0K05XUUpLND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2ZDRiNzk0Ny00NWNmLTRiNTQtYTc3OS02ZTRkNTAyZWU4NjgiLCJldmVudF9pZCI6IjU3NTc4Y2IzLTYwZWUtNDBiNi04ZjY5LWYxNTRkZTRhM2Q0OCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTEyMTkwNDcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2duWFRGN091UiIsImV4cCI6MTYxMTIyMDI0OCwiaWF0IjoxNjExMjE5MDQ4LCJqdGkiOiI4YmY1MjQ5Mi1hNDFmLTQ1YzMtOGRhYi1jMjg4NGRjOGRmZjYiLCJjbGllbnRfaWQiOiI0ZDRqNGkzcWhhZWh2ZW9ndG40bmRpaHNucCIsInVzZXJuYW1lIjoiNmQ0Yjc5NDctNDVjZi00YjU0LWE3NzktNmU0ZDUwMmVlODY4In0.kiUu5kQCFrg1z0HDwR6KO4olyR-_AjgurMM06uvtNNg9ec_1Qd4hrL2SWQ1KY0wwAX8nbFcwCraMuQeTQ6CgrY1ttqnijtM9psgVEsi29_CGAbZpgGdQpybenpK4GR_rUdJc6sYFmOwkp6KS06KBaqHGF3BYRm9VS_BHSJu63nH6EJky8_uOy-AGeNzct80J5OPUqOGDZDVuadXzDr2fUUehXLaaLswOu0ELEfTVohPIi3Kq9T0w2taGNM-WcAEmNWaufyXJjBMRZG_Af4A4O2C-syPfAejReAPECT_jRZsqUXLTjxPfMb6xLCiC6dkgxK6gmRdciHjJdreZjsLBaA';

// set initial props for the your component
const initialProps = {
  [CHAT]: {
    debug: true,
    portal: 'nurse', // admin, nurse
    mode: 'green', // green, orange
    apiUrl: 'http://localhost:3001',
    socketUrl: 'ws://localhost:3005',
    getToken: () => token,
    token: ACTIVE_TOKEN == 1 ? token1 : token2,
  },
  [EXAMPLE]: {

  },
};

export const getInitialProps = () => initialProps[ACTIVE_COMPONENT];
export const getComponent = () => components[ACTIVE_COMPONENT];
