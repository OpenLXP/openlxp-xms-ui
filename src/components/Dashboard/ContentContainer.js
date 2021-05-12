import { Route, Switch } from "react-router";
import CatalogsContainer from "./Catalogs/CatalogsContainer";
import Courses from "./Courses/Courses";
import CourseData from "./CourseData/CourseData";

const ContentContainer = (props) => {
  // Routes must be added in reverse order
  const pathToComponents = [
    { path: "/dashboard/", component: CatalogsContainer, isExact: true },
    { path: "/dashboard/courses", component: Courses, isExact: false },
    { path: "/dashboard/course", component: CourseData, isExact: true },
  ];

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Replace with your content */}
          <div className="py-4">
            <Switch>
              {pathToComponents.map((route) => (
                <Route
                  path={route.path}
                  component={route.component}
                  exact={route.isExact}
                />
              ))}
            </Switch>
          </div>
          {/* /End replace */}
        </div>
      </div>
    </main>
  );
};
export default ContentContainer;
