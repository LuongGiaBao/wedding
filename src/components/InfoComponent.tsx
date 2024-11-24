import { Card } from "antd";
import React from "react";

export const InfoComponent: React.FC = () => {
  // Khai báo kiểu dữ liệu
  interface SocialLink {
    name: string;
    url: string;
    icon: string;
  }

  interface Person {
    image: string;
    name: string;
    parents: {
      father: string;
      mother: string;
    };
    description: string;
    quote: string;
    socialLinks: SocialLink[];
  }

  // Dữ liệu chú rể
  const groom: Person = {
    image: "/assests/ngua.jpg",
    name: "Lương Trần Gia Bảo",
    parents: { father: "Lương Ngọc Đức", mother: "Trần Thị Quỳnh Như" },
    description: "Là một lập trình viên yêu code như yêu vợ",
    quote: "Gia đình là điểm tựa vững chắc...",
    socialLinks: [
      { name: "Facebook", url: "#", icon: "/icons/facebook.svg" },
      { name: "Twitter", url: "#", icon: "/icons/twitter.svg" },
    ],
  };

  // Dữ liệu cô dâu
  const bride: Person = {
    image: "/assests/rong.jpg",
    name: "Hoàng Kim Ngân",
    parents: { father: "Hoàng Tuấn Khanh", mother: "Nguyễn Thị Bé Hai" },
    description:
      "Là 1 cô gái hồn nhiên xinh đẹp, hiện đang sinh sống và làm việc tại Sài Gòn...",
    quote: "Ngoài ra còn rất thích vẽ và nuôi mèo...",
    socialLinks: [
      { name: "Facebook", url: "#", icon: "/icons/facebook.svg" },
      { name: "LinkedIn", url: "#", icon: "/icons/linkedin.svg" },
    ],
  };

  // Hàm render thẻ thông tin
  const renderCard = ({
    image,
    name,
    parents,
    description,
    quote,
    socialLinks,
  }: Person) => (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt={name} src={image} />}
      className="flex flex-col items-center"
    >
      <h2 className="text-lg font-semibold text-center">{name}</h2>
      <p className="text-sm italic text-center flex flex-col">
        Con ông: {parents.father}
        Con bà: {parents.mother}
      </p>
      <p className="text-gray-600 text-sm">{description}</p>
      <blockquote className="text-blue-600 italic text-center my-2">{`"${quote}"`}</blockquote>
      <div className="flex justify-center gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link.icon} alt={link.name} className="w-5 h-5" />
          </a>
        ))}
      </div>
    </Card>
  );

  // Giao diện chính
  return (
    <div className="max-w-4xl min-w-[360px] mx-auto p-6">
      <h1 className="text-center text-2xl font-bold mb-8">Cô dâu & Chú rể</h1>
      <p className="text-center italic text-gray-500 mb-8">
        Tình yêu là điều kiện trọng yếu của hạnh phúc...
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {renderCard(groom)}
        {renderCard(bride)}
      </div>
    </div>
  );
};
