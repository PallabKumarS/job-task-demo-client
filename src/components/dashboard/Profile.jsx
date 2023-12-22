import CustomContainer from "../shared/CustomContainer";
import CustomSpinner from "../shared/CustomSpinner";
import Loader from "../shared/Loader";
import useAuth from "../shared/useAuth";

const Profile = () => {
  const { user, userData, loading, roleLoading } = useAuth();

  const { isLoading, data: tasks } = Loader("/tasks", "tasks");

  if (loading) {
    if (roleLoading) {
      if (isLoading) {
        return <CustomSpinner></CustomSpinner>;
      }
    }
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
    <CustomContainer>
      <div className="card w-96 bg-base-300 shadow-xl mx-auto mt-20">
        <figure className="px-10 pt-10">
          <img src={user?.photoURL} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Role : {userData?.role}</h2>
          <p>{userData?.name}</p>
          <p>{userData?.email}</p>

          <hr className=" bg-base-300 w-3/4" />

          {/* tasks here  */}
          <div className="flex justify-between gap-5">
            {/* todo tasks  */}
            <div>
              <h1 className="text-lg font-semibold mb-2">To Do</h1>
              <p>{todoTasks?.length}</p>
            </div>
            {/* ongoing tasks  */}
            <div>
              <h1 className="text-lg font-semibold mb-2">Ongoing</h1>
              <p>{ongoingTasks?.length}</p>
            </div>
            {/* completed tasks  */}
            <div>
              <h1 className="text-lg font-semibold mb-2">Completed</h1>
              <p>{completedTasks?.length}</p>
            </div>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default Profile;
