import './memory-card.css';
import jsBadgeSvg from './jsBadge.svg';

const MemoryCard = ({ index, onClick, framework, frontSrc, disable }) => (
    <div
        className={disable ? "memory-card flip" : "memory-card"}
        onClick={() => {
            if (!disable) onClick(index);
        }}
    >
        <img className="front-face" src={frontSrc} alt={framework}/>
        <img className="back-face" src={jsBadgeSvg} alt="Memory Card"/>
    </div>
);

export default MemoryCard;