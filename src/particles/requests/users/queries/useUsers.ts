import { useQuery } from "react-query";
import axios from "axios";

interface Users {
  info: {
    count: number;
    next: string;
    pages: string;
    prev: number | null;
  };
  results: {
    created: Date;
    episode: number[];
    gender: string;
    id: number;
    image: string;
    url: string;
    name: string;
    species: string;
    origin: { name: string; url: string };
  }[];
}

const getUsers = async () => {
  const { data }: { data: Users } = await axios.get(
    "https://rickandmortyapi.com/api/character"
  );
  return data;
};

export default function useUsers() {
  return useQuery("characters", getUsers);
}
