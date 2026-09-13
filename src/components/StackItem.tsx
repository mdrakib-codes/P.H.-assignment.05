import type { Technology } from "../types/technology";

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

const StackItem = ({
  technology,
  onRemove,
}: StackItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3">

      <div className="flex min-w-0 items-center gap-3">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-7 w-7 object-contain"
          />
        </div>

        <div className="min-w-0">
          <h4 className="truncate font-semibold text-gray-900">
            {technology.name}
          </h4>

          <p className="text-sm text-gray-500">
            {technology.category}
          </p>
        </div>

      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
        aria-label={`Remove ${technology.name}`}
      >
        ✕
      </button>

    </div>
  );
};

export default StackItem;