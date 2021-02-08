import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com/", 
  headers: {
    Authorization: "Client-ID 9reIKslCDjFqFkkK5KV2viZ64L_GHdibAf7f7qS4mK8"
  }
})
