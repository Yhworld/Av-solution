// data.js
import service1 from '../../assets/Services/service1.png'
import service3 from '../../assets/Services/service3.jpg'
import service4 from '../../assets/Services/service4.jpg'
import service5 from '../../assets/Services/service5.jpg'
import { SiAudiomack } from "react-icons/si";


const data = [
    {
      image: <SiAudiomack /> ,
      title: 'Audio Systems',
      service: 'Service 1',
      description: 'We provide expert audio system consultation and installation services for homes, businesses, and events, we ensure a top-quality listening experience..',
      link: 'service1',
    },
    {
      image: service3,
      title: 'Video Production',
      service: 'Service 2',
      description: 'We specialize in video production services, serving a diverse range of clients and projects with game changing cutting-edge technology,',
      link: 'service3',
    },
    {
      image: service4,
      title: 'Videography & Editing',
      service: 'S',
      description: 'we\'re experts at creating captivating visual content that sets your brand apart. Whether it\'s promotional videos or product showcases',
      link: 'service3',
    },
    {
      image: service5,
      title: 'Networking',
      service: 'Service 4',
      description: 'We specialize in providing top-tier networking consultation and installation services.Whether you need to enhance your home network.',
      link: 'service3',
    }
    ,
    // Add more data as needed
  ];
  
  export default data;
  