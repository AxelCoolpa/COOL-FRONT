

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block font-extralight text-center text-xl  text-gray-900 shadow-2xl border-r-8 hover:scale-110 sm:text-3xl">
          Do you have tourism or similar services? 
          <br/>
          Apply to become a Provider! 
          </strong>
          <form className="mt-6 ">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="your-email.com"
              />
              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-orange-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-700">
                Apply
              </button>
            </div>
          </form>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
