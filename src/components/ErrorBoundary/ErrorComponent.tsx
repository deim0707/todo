import React, {FC} from 'react';

interface ErrorComponentProps {
    message: Error
}

const ErrorComponent: FC<ErrorComponentProps> = ({message}) => {
    return (
        <div>
            Произошла ошибка:
            <p>{String(message.message)}</p>
        </div>
    );
};

export default ErrorComponent;