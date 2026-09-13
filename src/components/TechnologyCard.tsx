import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      {/* Top */}
      <div className="flex items-start justify-between gap-3">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-9 w-9 object-contain"
            />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              {technology.name}
            </h3>

            <p className="text-sm text-gray-500">
              {technology.category}
            </p>
          </div>

        </div>

        {/* Badge */}
        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
          {technology.badge}
        </span>

      </div>

      {/* Description */}
      <p className="mt-5 flex-1 text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      {/* Info */}
      <div className="mt-5 flex items-center justify-between">

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {technology.difficulty}
        </span>

        <span className="text-sm font-semibold text-gray-700">
          ⭐ {technology.rating}
        </span>

      </div>

      {/* Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-full px-4 py-3 font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "brand-gradient text-white hover:opacity-90"
        }`}
      >
        {isAdded
          ? "✓ Added to Stack"
          : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;