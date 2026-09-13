import type { Technology } from "../types/technology";
import StackItem from "./StackItem";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {stack.length}{" "}
            {stack.length === 1
              ? "Technology Selected"
              : "Technologies Selected"}
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-sm font-medium text-red-500 hover:text-red-700"
          >
            Remove All
          </button>
        )}

      </div>

      {/* Stack Items */}
      <div className="mt-5 space-y-3">

        {stack.length === 0 ? (

          <div className="rounded-xl bg-gray-50 px-5 py-8 text-center">

            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm">
              +
            </div>

            <p className="font-medium text-gray-700">
              Your stack is empty
            </p>

            <p className="mt-1 text-sm leading-5 text-gray-400">
              Add technologies from the list to build your stack.
            </p>

          </div>

        ) : (

          stack.map((technology) => (
            <StackItem
              key={technology.id}
              technology={technology}
              onRemove={onRemove}
            />
          ))

        )}

      </div>

    </aside>
  );
};

export default YourStack;