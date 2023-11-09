import { Carousel, Typography } from "@material-tailwind/react";

const HomeCarousel = () => {
  return (
    <Carousel className="w-full h-48 md:h-64 lg:h-96" autoplay={false}>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-4/5 ms-4 md:w-2/4 lg:w-1/3">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-lg md:text-xl lg:text-2xl"
            >
              CHÚNG TÔI HÂN HẠNH MANG ĐẾN GIẢI PHÁP IN ẤN THÔNG MINH
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-4/5 ms-4 md:w-2/4 lg:w-1/3">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-lg md:text-xl lg:text-2xl"
            >
              CHÚNG TÔI HÂN HẠNH MANG ĐẾN GIẢI PHÁP IN ẤN THÔNG MINH
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-4/5 ms-4 md:w-2/4 lg:w-1/3">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-lg md:text-xl lg:text-2xl"
            >
              CHÚNG TÔI HÂN HẠNH MANG ĐẾN GIẢI PHÁP IN ẤN THÔNG MINH
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
