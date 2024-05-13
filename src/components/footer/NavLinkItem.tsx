interface NavLinkProps {
  title: string;
  links: { title: string; href: string }[];
}

const NavLinksItem = ({ title, links }: NavLinkProps) => (
  <div className="text-[#112B3C] flex-1">
    <h2 className="text-lg font-bold mb-3">{title}</h2>
    <nav className="font-normal text-sm flex flex-col gap-5">
      {links.map((link, index) => (
        <a key={index} href={link.href}>
          {link.title}
        </a>
      ))}
    </nav>
  </div>
);

export default NavLinksItem;
