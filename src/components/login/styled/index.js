import styled from "styled-components";
// import { Theme } from "../../../Theme/Theme";

const LoginStyle = styled.div`

.container{

}
    .form-error{
        color:${({ theme }) => theme.Colors.red};
        font-size: ${({ theme }) => theme.font.fontSizeInput};
        gap:"2px"
        
        
    };
    
.forgotemail{
    width:100%;
    
}




`
export const data = {
    LoginStyle,
}
