import styled from "styled-components";


const ListBy = styled.span`
    font-size: 12px;
    padding-left: 4px;

`
const StyledDrop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
    padding-inline: 10px;
    padding-block: 5px;
    background-color: transparent;
    border: 0;
    height: 100%;
    border-top: solid 1px var(--lines-color);

    @media(min-width: 768px) {
            border-left: solid 1px var(--lines-color);
            width: 50%;
        
    }
    
    
`

const StyledSelect = styled.select`
    border: 0 !important; 
    outline: none !important; ;
    box-shadow: inset 0 0 0 5px #fff !important; 
    font-weight: 700;
    font-size: 14px;

`

const DropDown = ({ title, options }) => {
    return (
        <StyledDrop>
            <ListBy>{title}:</ListBy>
            <StyledSelect>
                {options.map(option =>(
                    <option key={option} value={option}>{option}</option>
                ))}
            </StyledSelect>
        </StyledDrop>
    )
}

export default DropDown