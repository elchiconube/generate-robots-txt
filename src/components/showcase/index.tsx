import { Heading, Text } from '@radix-ui/themes';
import styles from './showcase.module.css';

const websites = [
 { 
   name: "Tinybird",
   robots: "Best data solution infrastructure for software teams",
   color: "var(--grass-9)",
   url: "https://www.tinybird.co/"
 },
 { 
   name: "Topdelmes",
   robots: "TV shows and movies reviews and rankings site", 
   color: "var(--amber-9)",
   url: "https://www.topdelmes.com"
 },
 {
   name: "Marketgoo",
   robots: "Empower web hosts, agencies, & SMB providers",
   color: "var(--blue-9)",
   url: "https://www.marketgoo.com/"
 },
 {
  name: "Faedo Digital",
  robots: "Digital solutions for small and rural businesses",
  color: "var(--grass-9)",
  url: "https://faedodigital.com/"
 }
];

interface ShowcaseCardProps {
  name: string;
  robots: string;
  color: string;
  url: string;
  onClick: (url: string) => void;
}

interface ShowcaseProps {
  onClickWebsite: (url: string) => void;
}


const ShowcaseCard = ({ name, robots, color, url, onClick }: ShowcaseCardProps) => (
 <div 
   className={styles.card}
   onClick={() => onClick(url)}
 >
   <div className={styles.cardContent} style={{'--card-color': color} as any}>
     <div className={styles.cardGlow} />
     <div className={styles.cardDots} />
     <Heading size="4">{name}</Heading>
     <Text size="2">{robots}</Text>
   </div>
 </div>
);


const Showcase = ({ onClickWebsite } : ShowcaseProps) => (
 <div className={styles.container}>
   <div className={styles.wrapper}>
     <div className={styles.track}>
       {[...websites, ...websites, ...websites].map((site, i) => (
         <ShowcaseCard key={site.name+i} {...site} onClick={(url) => onClickWebsite(url)} />
       ))}
     </div>
   </div>
 </div>
);

export default Showcase;