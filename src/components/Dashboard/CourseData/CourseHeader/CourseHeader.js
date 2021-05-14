const CourseCardHeader = (props) => {
  const title = props.title || "";
  const courseStatus = props.status;

  const status =
    courseStatus === "Active" ? (
      <span className="px-2 mt-1 inline-flex text-xs leading-5 self-center font-semibold rounded-full bg-green-100 text-green-800">
        {courseStatus}
      </span>
    ) : courseStatus === undefined ? (
      <span className="px-2 mt-1 inline-flex text-xs leading-5 self-center font-semibold rounded-full bg-gray-100 text-gray-800">
        {"undefined"}
      </span>
    ) : (
      <span className="px-2 mt-1 inline-flex text-xs leading-5 self-center font-semibold rounded-full bg-red-100 text-red-800">
        {courseStatus}
      </span>
    );

  return (
    <div className="p-10">
      <h3 className="text-xl leading-6 font-medium text-gray-900">
        <div className="flex flex-wrap-reverse flex-row gap-3">
          {title}
          {status}
        </div>
      </h3>
    </div>
  );
};
export default CourseCardHeader;
