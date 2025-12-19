import { Tooltip } from "@mui/material";
import React, { memo } from "react";

const ButtonCopy = memo(({ 
    children,
    className,
    value,
    placement = "top",
    onCopySuccess,
    onCopyError
}) => {

    const [copy, setCopy] = React.useState(false);

    const copyTextToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error("Failed to copy text: ", err);
            return false;
        }
    };

    const handleClick = async () => {
        setCopy(true);
        
        const success = await copyTextToClipboard(value);
        
        if (success && onCopySuccess) {
            onCopySuccess();
        } else if (!success && onCopyError) {
            onCopyError();
        }

        setTimeout(() => {
            setCopy(false);
        }, 3000);
    };
    
    return (
        <Tooltip
            title={`${!copy ? "Haga click para copiar" : "Copiado al portapapeles"}`}
            arrow
            placement={placement} 
            disableFocusListener 
            disableTouchListener
        >
            <span
                className={className}
                onClick={handleClick}
            >
                {children}
            </span>
        </Tooltip>
    );
});

ButtonCopy.displayName = "ButtonCopy";

export default ButtonCopy;