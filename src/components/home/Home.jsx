import banner from "../../assets/homeBanner.png";
import dev from "../../assets/devIcon.png";
import banker from "../../assets/bankerIcon.png";
import prop from "../../assets/professionalIcon.png";

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="bg-blue-500 text-white py-10">
        <div className="container mx-auto text-center">
          <img
            src={banner}
            alt="Inspiring Workspace or Collaborative Setting"
            className="w-full h-auto max-w-screen-lg mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">
            Unlock Productivity with{" "}
            <span className="text-red-400">Task Manager</span>
          </h1>
          <p className="text-lg mb-8">Simplify Your Workflow, Achieve More!</p>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Discover Who Benefits from{" "}
            <span className="text-red-400">Task Manager</span>
          </h2>

          <div className="flex flex-wrap gap-10 justify-center items-center">
            {/* Developer */}
            <div className="mb-6 text-center w-72">
              <img
                src={dev}
                alt="Developer Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-lg font-semibold">Developers</p>
              <p className="text-gray-600">
                Streamline your coding projects and boost collaboration with our
                powerful task management tools.
              </p>
            </div>

            {/* Corporate Professional */}
            <div className="mb-6 text-center w-72">
              <img
                src={prop}
                alt="Corporate Professional Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-lg font-semibold">Corporate Professionals</p>
              <p className="text-gray-600">
                Stay organized and enhance team efficiency with our intuitive
                project management features.
              </p>
            </div>

            {/* Banker */}
            <div className="mb-6 text-center w-72">
              <img
                src={banker}
                alt="Banker Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-lg font-semibold">Bankers</p>
              <p className="text-gray-600">
                Manage financial tasks seamlessly and ensure timely project
                completion with our tailored tools.
              </p>
            </div>

            {/* Add more sections for other target audiences */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
