import { GetServerSideProps } from "next";

export default function Task() {
  return (
    <div>
      <h1>paginas detalhes</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
