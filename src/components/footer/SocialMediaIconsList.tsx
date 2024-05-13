import FacebookIcon from "../../assets/social-media-icons/FacebookIcon";
import InstagramIcon from "../../assets/social-media-icons/InstagramIcon";
import YouTubeIcon from "../../assets/social-media-icons/YouTubeIcon";

function SocialMediaIconsList() {
  return (
    <div className="flex flex-row gap-3 items-center">
      <a href="https://www.facebook.com/">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/">
        <InstagramIcon />
      </a>
      <a href="https://www.youtube.com/?app">
        <YouTubeIcon />
      </a>
    </div>
  );
}

export default SocialMediaIconsList;
