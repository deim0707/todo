import React, {FC} from 'react';

interface TodoFooterProps {
    totalCount: number
}

export const TodoFooter: FC<TodoFooterProps> = ({totalCount}) => {
    return (
        <p>
            Total count: {totalCount}
        </p>
    );
};
