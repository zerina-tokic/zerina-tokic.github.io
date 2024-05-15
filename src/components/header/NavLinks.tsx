function NavLinks() {
  return (
    <div className="navlinks flex flex-grow items-center justify-center barlow-regular text-[20px] text-[#808080]">
      <nav className="hidden lg:flex gap-x-10">
        <a href="/" className="active-link">
          Home
        </a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/price">Price</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
}

export default NavLinks;
