import { ref } from "vue";
import axios from "axios";

export const characters = ref([]);

export const images = ref([]);

export const loading = ref(false);

const bbAPI = axios.create({
  baseURL: "https://www.breakingbadapi.com/api/",
});

export const getCharacters = async () => {
  loading.value = true;
  const resource = "characters";
  const response = await bbAPI(resource);
  console.log(response);
  loading.value = false;
  characters.value = response.data;
};

export const getDetails = async (name) => {
  const resource = "characters";
  const response = await bbAPI(resource, {
    params: {
      name: name,
    },
  });
  images.value = response.data;
};
