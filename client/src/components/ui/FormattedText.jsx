const FormattedText = ({ text, className = "" }) => {
    if (!text) return null;

    const parts = text.split(/(\*\*.*?\*\*)/g);

    return (
        <span className={className}>
            {parts.map((part, index) => {
                if (
                    part.startsWith("**") &&
                    part.endsWith("**") &&
                    part.length > 4
                ) {
                    return (
                        <strong
                            key={index}
                            className="font-semibold text-zinc-800 dark:text-zinc-200"
                        >
                            {part.slice(2, -2)}
                        </strong>
                    );
                }

                return <span key={index}>{part}</span>;
            })}
        </span>
    );
};

export default FormattedText;