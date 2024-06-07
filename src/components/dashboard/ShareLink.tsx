import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const ShareLink = ({url}: {url: string}) => {
  return (
    <div className="mt-8">
      <div className="flex gap-2 mt-2">
        <FacebookShareButton url={url} children={<FacebookIcon round={true} size={40} />} />
        <TwitterShareButton url={url} children={<TwitterIcon round={true} size={40} />} />
        <WhatsappShareButton url={url} children={<WhatsappIcon round={true} size={40} />} />
      </div>
    </div>
  );
};

export default ShareLink;