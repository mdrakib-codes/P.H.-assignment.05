import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navber from "./components/Navber";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load technology data from JSON
  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch technologies");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load technologies.");
        setLoading(false);
      });
  }, []);

  // Add technology to stack
  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );

      return;
    }

    setStack([...stack, technology]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  // Remove one technology
  const handleRemove = (id: string) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack(
      stack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack!`
      );
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed!");
  };

  return (
    <>
      {/* Navbar */}
      <Navber />

      {/* Hero */}
      <Hero />

      {/* Technologies Section */}
      <main
        id="technologies"
        className="bg-gray-50 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Section Heading */}
          <div className="mb-10">

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Explore{" "}
              <span className="brand-gradient-text">
                Technologies
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
             Pick one technology per category to build your ideal stack.
            </p>

          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex min-h-60 items-center justify-center">

              <div className="text-center">

                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>

                <p className="mt-4 text-sm text-gray-500">
                  Loading technologies...
                </p>

              </div>

            </div>
          ) : (
            /* Technology Grid + Your Stack */
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">

              {/* Technology Cards */}
              <TechnologyGrid
                technologies={technologies}
                stack={stack}
                onAdd={handleAdd}
              />

              {/* Your Stack */}
              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />

            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;