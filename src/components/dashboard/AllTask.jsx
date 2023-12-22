// AllTask.jsx
import CustomContainer from "../shared/CustomContainer";
import CustomSpinner from "../shared/CustomSpinner";
import Loader from "../shared/Loader";
import useAuth from "../shared/useAuth";
import { axiosPublic } from "../shared/useAxios";
import TaskCard from "./TaskCard";

const AllTask = () => {
  const { user, handleAlert } = useAuth();

  const { isLoading, data: tasks, refetch } = Loader("/tasks", "tasks");

  if (isLoading) {
    return <CustomSpinner></CustomSpinner>;
  }

  const filteredTasks = tasks?.filter(
    (task) => task?.hostEmail === user?.email
  );

  const todoTasks = filteredTasks?.filter((task) => task?.status === "todo");
  const ongoingTasks = filteredTasks?.filter(
    (task) => task?.status === "ongoing"
  );
  const completedTasks = filteredTasks?.filter(
    (task) => task?.status === "completed"
  );

  return (
    <CustomContainer className={`mt-10`}>
      <h1 className="text-4xl font-bold text-center mb-20">Manage All Tasks</h1>

      {/* To Do section */}
      <h1 className="text-2xl font-semibold text-center mb-5">To Do</h1>

      <hr className="border-b-2 border-gray-500 mx-5"></hr>

      <section className="mb-20 py-10 text-center flex flex-wrap gap-10 justify-around items-center">
        {todoTasks &&
          todoTasks?.map((task, index) => (
            <TaskCard
              key={task?._id}
              task={task}
              index={index}
              refetch={refetch}
            ></TaskCard>
          ))}
      </section>

      {/* Ongoing section */}
      <h1 className="text-2xl font-semibold text-center mb-5">Ongoing</h1>

      <hr className="border-b-2 border-gray-500 mx-5"></hr>

      <section className="mb-20 py-20 text-center flex flex-wrap gap-10 justify-around items-center">
        {ongoingTasks &&
          ongoingTasks?.map((task, index) => (
            <TaskCard
              key={task?._id}
              task={task}
              index={index}
              refetch={refetch}
            ></TaskCard>
          ))}
      </section>

      {/* Completed section */}
      <h1 className="text-2xl font-semibold text-center mb-5">Completed</h1>

      <hr className="border-b-2 border-gray-500 mx-5"></hr>

      <section className="mb-20 py-20 text-center flex flex-wrap gap-10 justify-around items-center">
        {completedTasks &&
          completedTasks?.map((task, index) => (
            <TaskCard
              key={task?._id}
              task={task}
              index={index}
              refetch={refetch}
            ></TaskCard>
          ))}
      </section>
    </CustomContainer>
  );
};

export default AllTask;
