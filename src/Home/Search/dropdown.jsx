import styled from "styled-components";
import { useDarkMode } from "../../Dark Mode/darkModeProvider";


const ListBy = styled.span`
    font-size: 12px;
    padding-left: 4px;

`
const StyledDrop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 50%;
    padding-inline: 10px;
    padding-block: 5px;
    background-color: transparent;
    border: 0;
    height: 100%;
    ${({ $dark }) => $dark && `
    color: var(--bg-body);
    background-color: #1A1A1A;
    box-shadow: inset 0 0 0 1px #1A1A1A;; 
`};

    @media(min-width: 768px) {
        border-left: ${({ $dark }) => $dark ? `solid 1px black` : `solid 1px var(--lines-color)`};
        
    }
    
    
`

const StyledSelect = styled.select`
    border: 0 !important; 
    outline: none !important; ;
    box-shadow: inset 0 0 0 5px #fff; 
    font-weight: 700;
    font-size: 14px;
    ${({ $dark }) => $dark && `
    color: var(--bg-body);
    background-color: #1A1A1A;
    box-shadow: inset 0 0 0 5px #1A1A1A; 
`};

    
`

const DropDown = ({ title, options, handleDropDownChange }) => {
    const { darkMode } = useDarkMode()
    const handleChange = (event) => {

        handleDropDownChange(event.target.value)
    }

    return (
        <StyledDrop $dark={darkMode}>
            <ListBy>{title}:</ListBy>
            <StyledSelect $dark={darkMode} onChange={handleChange} id={title}>
                {options?.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </StyledSelect>
        </StyledDrop>
    )
}

export default DropDown