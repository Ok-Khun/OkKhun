import Image from "next/image"

type ContactInfoItemProps = {
    icon: any;
    iconAlt: string;
    content: any;
  };
  
  const ContactInfoItem = ({ icon, iconAlt, content }: ContactInfoItemProps) => {
    return (
      <li>
        <i>
          <Image
            src={icon}
            width="20"
            height="20"
            alt={iconAlt}
          />
        </i>
        <span>{content}</span>
      </li>
    );
  };

export default ContactInfoItem