import { Route, Switch } from "react-router";
import CatalogsContainer from "./Catalogs/CatalogsContainer";
import CoursesContainer from "./Courses/CoursesContainer";
import CourseDataContainer from "./CourseData/CourseDataContainer";
import Login from "../../pages/Login";

const ContentContainer = (props) => {
  // Routes must be added in reverse order
  const pathToComponents = [
    { path: "/dashboard/", component: CatalogsContainer, isExact: true },
    {
      path: "/dashboard/:catalog/courses",
      component: CoursesContainer,
      isExact: false,
    },
    {
      path: "/dashboard/:catalog/course/:id",
      component: CourseDataContainer,
      isExact: true,
    },
    {
      path: "/dashboard/login",
      component: Login,
      isExact: true,
    }
  ];

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="w-10/12 mx-auto px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <Switch>
          {pathToComponents.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              exact={route.isExact}
            />
          ))}
        </Switch>
      </div>
    </main>
  );
};
export default ContentContainer;
