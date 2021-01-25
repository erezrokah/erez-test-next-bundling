import Image from "next/image";

const TestPage = (props) => (
  <>
    <h1>getServerSideProps test:</h1>
    <pre>props: {JSON.stringify(props, null, 2)}</pre>
    <Image src="/assets/netlify.png" alt="Netlify Logo" width={500} height={500} />
  </>
);

export async function getServerSideProps(context) {
  return {
    props: {
      users: [{ name: "John Doe" }],
    },
  };
}

export default TestPage;
