import { IconType } from "react-icons";

interface CategoryInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: IconType;
  label: string;
  id: string;
  name: string;
  value: string;
  iconColor?: string;
  bgColor?: string;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  handleChange,
  id,
  name,
  value,
  bgColor,
  iconColor,
}) => {
  return (
    <>
      <li>
        <input
          onChange={handleChange}
          type="checkbox"
          id={id}
          name={name}
          value={value}
          className="hidden peer"
        />
        <label
          htmlFor={id}
          className="flex flex-col items-center justify-center w-28 h-34 p-5 border border-[#F3F3F3] hover:border-[#28B446] hover:border-4 rounded-[20px] cursor-pointer peer-checked:border-[#28B446] peer-checked:border-[4px] peer-checked:shadow-xl peer-checked:shadow-black/20"
        >
          <Icon size={36} color={iconColor} />

          <div
            style={{
              fontSize: "0.5em",
            }}
          >
            {label}
          </div>
        </label>
      </li>
    </>
  );
};

export default CategoryInput;
