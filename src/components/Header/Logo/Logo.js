import { NavLink } from "react-router-dom";

/**
 * Expects a logo object to be passed in with
 * `logo = { title:string, subtitle:string, logo:url}`
 * @param logo
 */
const HeaderLogo = (props) => {
  const { title, subtitle, img } = { ...props.logo };

  return (
    <div>
      <NavLink className="flex flex-row items-center text-white" to="/">
        <img src={img} alt="This is the dod Logo" className={"pl-3"} />
        <div className="flex flex-col align-baseline pl-2">
          <div className="lg:text-xl sm:text-lg">{title}</div>
          <div className="lg:text-lg sm:text-base">{subtitle}</div>
        </div>
      </NavLink>
    </div>
  );
};
export default HeaderLogo;
