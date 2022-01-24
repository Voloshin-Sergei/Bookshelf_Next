import axios from 'axios';
import { BlockList } from 'net';
import { InferGetServerSidePropsType } from 'next';
import { BookItemProps } from '../components/BookItem/BookItem';
import { BooksList } from '../components/BooksList';

export const getServerSideProps = async () => {
  const res = await axios.get('https://61b18d0e3c954f001722a9f3.mockapi.io/books');
  const data: BookItemProps[] = res.data;

  return {
    props: {
      data,
    },
  };
};

const Home = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <BooksList books={data} />;
};

export default Home;
