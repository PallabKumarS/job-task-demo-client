import CustomContainer from "../shared/CustomContainer";
import CustomSpinner from "../shared/CustomSpinner";
import Loader from "../shared/Loader";
import useAuth from "../shared/useAuth";

const Profile = () => {
  const { user, userData, loading, roleLoading } = useAuth();

  const { isLoading, data: tasks, refetch } = Loader("/tasks", "tasks");

  if (loading) {
    if (roleLoading) {
      if (isLoading) {
        return <CustomSpinner></CustomSpinner>;
      }
    }
  }

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
        </div>
      </div>
    </CustomContainer>
  );
};

export default Profile;
