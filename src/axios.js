import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.petfinder.com/v2/animals',
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJCbngxaWxrNFpkYXVCZTFWb01ydHhhTlBlRDZUOHA0SmhsVFdkMnhLSjNBNklKQkp3TiIsImp0aSI6IjY5YjM4ZTJhYTI4MGFjNzAwYmMyNmM2M2ExMzBjNDYyYTM5MmI3MGQ1ZWM3NGY0MmUwNTNmYWFhODk0NmUzNmQzY2M1M2Y2ZmExNTg5MTc5IiwiaWF0IjoxNjgyOTg0MzU1LCJuYmYiOjE2ODI5ODQzNTUsImV4cCI6MTY4Mjk4Nzk1NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.dIN42F2V8aPjY0Wn8-Ogf4q8w_4I3IEZdwq4F6QmQJECLyX-Q06MrLWoxaMZkBBNFBhJgEPkfQ2cSrvO3EUm1-s-KY31NILa7R8P9_-6jr2fYENqgnbZecpX0aCCCJgjulPRT3UZn8oJaMlQw4eEvefD_oLd4IM8FMlDcx6rx_DFBKkbYarLt-mnzznBj2bi7htCavavkmCgtzAIsv5r-IUJWwuCzgpoWwjCQg1YRr0FUUFG4aSvmCeIvQcyrVgFLIGznRPVeROfe34CSIJAdNT_-Hp-lc-E-I5XczdJ-bF_RLuYOhZb-R2UvkWV7Byl7RmmvTY36onmcnM2LLz1Hw',
  },
});

export default instance;
