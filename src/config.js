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

const token = 'eyJraWQiOiJsbFhHWTR2bWJMVXBYZ0Zleit5R1I3N1dEb1Y4K1ZFRlhOTWFcL3g1TXV6OD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1NjliYzA2ZC1lY2IyLTQ3NzUtYWNjNC04ZmE2NGE4NzVkMTEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfZ25YVEY3T3VSIiwiY29nbml0bzp1c2VybmFtZSI6IjU2OWJjMDZkLWVjYjItNDc3NS1hY2M0LThmYTY0YTg3NWQxMSIsImN1c3RvbTp0ZW5hbnRfaWQiOiJjZjJiMWY2NS1mZmMxLTRmMzctYWYyZC03M2RmZjc2MDc0OGQiLCJnaXZlbl9uYW1lIjoiSXZhbiIsImF1ZCI6IjRkNGo0aTNxaGFlaHZlb2d0bjRuZGloc25wIiwiZXZlbnRfaWQiOiJkMWNlY2UyNy0zNDE5LTRmYTQtOWViZi04ZWVlOTg4NmFmNzMiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYxMTA4ODg1OCwiZXhwIjoxNjExMDkyNDU5LCJpYXQiOjE2MTEwODg4NTksImZhbWlseV9uYW1lIjoiSXZhbmVpY2h5ayIsImVtYWlsIjoiaXZhbmVpY2h5ay5pdmFuKzIwMEBnbWFpbC5jb20ifQ.h6BlpIC8kguiPUumtW-zmmDT716WuwQ0BQOo9x_LW5IIAv1jHvGPyoa-lwze4JdIq4YrVJqmKpdUEhVJisU5GXB04hJdS7xINT1gCOxCQWHEflkgP_lsxCY_HzkOG9Q_bK-pbW6nNmfD6xnP9zHOYN0h-KPCIj9k8jj15ZejOQftQE9YECkO-8AqJyZO_LUPwNbTnQmWL2nqUoW2Lou39UxZ1V7MCCdoGtjrRy7gfClhU-8Cs3-YEzvbWWA63n75N2s5mZvHCe8-E8qO85g78Vi2XDzO5dAhEmkdi44eAOENz_cq_QABBk4I9SvDvvNRwjmPYvpIDLxuPLs5IkfhYw';

// set initial props for the your component
const initialProps = {
  [CHAT]: {
    debug: true,
    portal: 'nurse', // admin, nurse
    mode: 'green', // green, orange
    apiUrl: 'http://localhost:3001',
    socketUrl: 'ws://localhost:3005',
    getToken: () => token
  },
  [EXAMPLE]: {

  },
};

export const getInitialProps = () => initialProps[ACTIVE_COMPONENT];
export const getComponent = () => components[ACTIVE_COMPONENT];
