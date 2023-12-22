/* eslint-disable react/display-name */
import { useState } from "react";
import PropTypes from "prop-types";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import UpdateModal from "./UpdateModal";
import Swal from "sweetalert2";
import { axiosPublic } from "../shared/useAxios";
import useAuth from "../shared/useAuth";

const TaskCard = ({ task, refetch }) => {
  const { handleAlert } = useAuth();
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleEdit = () => {
    setSelectedRowData(task);
  };

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

  return (
    <div>
      <p className="text-lg mb-2">{task?.taskName}</p>
      <p className="text-sm">{task?.description}</p>
      <p className="text-lg mb-2">
        Created by <span className="text-teal-500">{task?.hostName}</span>
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
          onClick={() => handleEdit(task?._id)}
        >
          <MdEdit className="text-2xl" />
          Edit
        </button>
      </div>
      {selectedRowData && (
        <UpdateModal
          setSelectedRowData={setSelectedRowData}
          rowData={selectedRowData}
          open={true}
          refetch={refetch}
        ></UpdateModal>
      )}
    </div>
  );
};

TaskCard.propTypes = {
  refetch: PropTypes.func,
  task: PropTypes.object,
  index: PropTypes.number,
};

export default TaskCard;
