import CustomContainer from "../shared/CustomContainer";

const AllTask = () => {
  return (
    <CustomContainer className={`mt-10`}>
      <h1 className="text-4xl font-bold text-center mb-20">Manage All Tasks</h1>
      <section>
        <h1 className="text-2xl text-center font-semibold mb-20">To Do</h1>
      </section>
      <section>
        <h1 className="text-2xl text-center font-semibold mb-20">Ongoing</h1>
      </section>
      <section>
        <h1 className="text-2xl text-center font-semibold mb-20">Completed</h1>
      </section>
    </CustomContainer>
  );
};

export default AllTask;
