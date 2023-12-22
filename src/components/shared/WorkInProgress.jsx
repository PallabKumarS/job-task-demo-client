import wip from "../../assets/workInProgress.gif";

const WorkInProgress = () => {
  return (
    <div className={`bg-slate-400 py-10`}>
      <div className="">
        <h1 className="text-center text-4xl font-semibold mt-10 text-lime-500 mb-5">
          Work in progress
        </h1>
        <img src={wip} alt="" className="mx-auto mb-5 rounded-xl" />
      </div>
    </div>
  );
};

export default WorkInProgress;
