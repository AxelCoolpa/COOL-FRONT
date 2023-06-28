
import logo from '../../assets/cool.png';

const GreenSidebar = () => {
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 bg-green-600/80 w-1/4 min-h-screen flex flex-col justify-between">
        <img src={logo} alt="LOGO-COOL" className="w-60 p-8" />
        <div className="p-6">
          <div className="bg-white rounded-lg p-6 ">
            <span className="font-thin p-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Quasi reiciendis, minima eaque voluptatibus commodi enim soluta laboriosam veniam, 
              ratione voluptatem delectus odit sequi tempora rerum explicabo esse dolorem repudiandae quisquam.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenSidebar;
