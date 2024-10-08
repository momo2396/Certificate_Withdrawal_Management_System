const CommonPage = () => {
  return (
    <div>
      <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

        <div class="w-full h-64 lg:w-1/2 lg:h-auto">
          <img className="h-[500px] w-full object-cover" src="/csee.jpg" alt="Winding mountain road" />
        </div>

        <div
          class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">

          <div class="flex flex-col p-12 md:px-16">
            <h2 class="text-2xl font-bold uppercase text-black lg:text-4xl">University Of Chittagong</h2>
            <p class="mt-4">
              The Certificate Withdrawal Management System for the University of Chittagong streamlines the certificate application and withdrawal process by offering an efficient, user-friendly online platform. It enhances transparency, speeds up processing, and simplifies communication between students and university administration.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CommonPage;
