import { AiOutlineInfoCircle } from 'react-icons/ai';

const CardIcon = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-32 h-32 flex justify-center items-center">
        <AiOutlineInfoCircle className="w-20 h-20 text-white animate-bounce" />
      </div>
    </div>
  );
};

export default CardIcon;
