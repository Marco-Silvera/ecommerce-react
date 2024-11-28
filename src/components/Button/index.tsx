// import { ReactNode } from "react";

// interface IButton{
//     children: ReactNode;
//     handleclick: () => void;
// }

// function Button ({children, handleclick}: IButton){
//     return (
//         <button onClick={handleclick}>{children}</button>
//     )
// }

// export default Button;

interface IButton {
    label?: string;
    handleclick?: () => void;
}

function Button({ label, handleclick }: IButton) {
    return (
        <button onClick={handleclick}>{label}</button>
    )
}

export default Button;