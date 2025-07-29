'use client';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function News() {
  const { data, error, isLoading } = useSWR('/api/news', fetcher);

  if (error) return <div>⚠️ Failed to load news</div>;
  if (isLoading) return <div>⏳ Loading...</div>;

  if (!Array.isArray(data)) {
    return <div>❗ Unexpected response format</div>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover mb-3 rounded-md"
            />
          )}
          <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{item.description}</p>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-auto text-blue-600 hover:underline"
          >
            Read more →
          </a>
        </div>
      ))}
    </div>
  );
}
