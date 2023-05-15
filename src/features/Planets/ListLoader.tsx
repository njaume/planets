const ListLoader = () => (
  <>
    <ListLoaderCard />
    <ListLoaderCard />
  </>
);

const ListLoaderCard = () => (
  <div className="col-span-full lg:col-span-3 xl:col-span-2 2xl:col-span-1 w-full h-full bg-gray-100 border border-gray-200 p-4 rounded-lg shadow-md">
    <h3 className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-[40%]"></h3>
    <ul className="mt-5 space-y-3">
      <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
      <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
      <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
      <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
    </ul>
  </div>
);

export default ListLoader;
