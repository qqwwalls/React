type ButtonProp = {
    text: string;
    handler?: () => void;
};

const Button = ({ text, handler }: ButtonProp) => {
    return (
        <button
            onClick={handler}
            className="bg-blue-300 w-1/6 m-4 rounded-lg text-white"
        >
            {text}
        </button>
    );
};

export default Button;