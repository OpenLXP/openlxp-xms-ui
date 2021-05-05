import { Route, Switch } from "react-router";
import Catalogs from "./Catalogs/Catalogs";

const ContentContainer = (props) => {
  const pathToComponents = [
    { path: "/dashboard/", component: Catalogs },
  ];

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Replace with your content */}
          <div className="py-4">
            <Switch>
              {pathToComponents.map((route) => (
                <Route path={route.path} component={route.component} />
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
