import axios from 'axios';

const api = axios.create({
  baseURL: 'mm-travel-back.netlify.app/api', 
});

export const fetchpackages = async () =>{

    try{
        const resp = await api.get('/Catalog/TravelPackages');

        return resp.data;
    }catch(error)
    {
        console.error(error);
        throw error;
    }

};

export const SearchPack = async (searchQuery) => {
  try {
    const result = await api.get(`/Catalog/Search`, {
      params: {
        name: searchQuery, 
      },
    });
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};