import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID v7JAR9ckVpf_Fy0YZU-yqq8nxo9fjHAbnSZtwxWAbN0",
      },
});