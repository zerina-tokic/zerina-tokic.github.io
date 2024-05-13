interface MainImageProps {
  image: string;
}

const MainImageOfPage = ({ image }: MainImageProps) => {
  return (
    <div className="main-image">
      <img src={image} className="w-full" alt="Main Image" />
    </div>
  );
};

export default MainImageOfPage;
