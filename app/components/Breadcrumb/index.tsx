"use client";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const filteredItems = items.filter((item) => item.label.trim() !== "");

  return (
    <nav className="py-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400">
          {filteredItems.map((item, idx) => (
            <li key={idx} className="flex items-center">
              {/* Divider (›) for all except the first item */}
              {idx > 0 && (
                <span className="mx-2 text-gray-400 dark:text-gray-500">›</span>
              )}

              {item.href && idx !== filteredItems.length - 1 ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {/* 🏠 Show Home Icon only for the first breadcrumb */}
                  {idx === 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.6}
                      stroke="currentColor"
                      className="w-3.7 h-3 -mt-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 9.75L12 3l9 6.75M4.5 10.5v10.5h15V10.5M9 21V12h6v9"
                      />
                    </svg>

                  )}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span className="text-gray-900 dark:text-white font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
