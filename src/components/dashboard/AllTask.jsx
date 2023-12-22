import Swal from "sweetalert2";
import CustomContainer from "../shared/CustomContainer";
import CustomSpinner from "../shared/CustomSpinner";
import Loader from "../shared/Loader";
import useAuth from "../shared/useAuth";
import { axiosPublic } from "../shared/useAxios";
import { MdDeleteForever, MdEdit } from "react-icons/md";

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/${id}`).then((res) => {
          if (res.status === 201) {
            handleAlert("success", "Task deleted successfully");
            refetch();
          }
        });
      }
    });
  };

  const handleEdit = (id) => {};

  return (
    <CustomContainer className={`mt-10`}>
      <h1 className="text-4xl font-bold text-center mb-20">Manage All Tasks</h1>

      {/* to do section  */}
      <h1 className="text-2xl text-center font-semibold mb-3">To Do</h1>

      <hr className=" bg-base-300 w-3/4 mx-auto" />

      <section className="mb-20 py-20">
        <div className="text-center flex flex-wrap gap-10 justify-around items-center">
          {todoTasks &&
            todoTasks?.map((task) => (
              <div key={task?._id}>
                <p className="text-lg mb-2">{task?.taskName}</p>
                <p className="text-sm">{task?.description}</p>
                <p className="text-lg mb-2">
                  Created by{" "}
                  <span className="text-teal-500">{task?.hostName}</span>
                </p>
                <div className="flex gap-5">
                  <button
                    className="btn bg-violet-500 hover:bg-violet-900 text-lime-500"
                    onClick={() => handleDelete(task?._id)}
                  >
                    <MdDeleteForever className="text-2xl" />
                    Delete
                  </button>
                  <button
                    className="btn bg-emerald-600 hover:bg-emerald-900 text-lime-500"
                    onClick={() => handleDelete(task?._id)}
                  >
                    <MdEdit className="text-2xl" />
                    Edit
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* ongoing section  */}
      <h1 className="text-2xl text-center font-semibold mb-3">Ongoing</h1>

      <hr className=" bg-base-300 w-3/4 mx-auto" />

      <section className="mb-20"></section>

      {/* completed section  */}
      <h1 className="text-2xl text-center font-semibold mb-3">Completed</h1>

      <hr className=" bg-base-300 w-3/4 mx-auto" />

      <section className="mb-20"></section>
    </CustomContainer>
  );
};

export default AllTask;
