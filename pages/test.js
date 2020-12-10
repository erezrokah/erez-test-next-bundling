const TestPage = (props) => (
  <>
    <h1>getServerSideProps test:</h1>
    <pre>props: {JSON.stringify(props, null, 2)}</pre>
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
