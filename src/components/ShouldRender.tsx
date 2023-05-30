import { type FC } from 'react';

interface ShouldRenderProps {
    children : React.ReactNode;
    if : unknown;
}

const ShouldRender: FC<ShouldRenderProps> = ({if:condition, children}) => {
  return (
<> 
{condition ? children : null}
</>
)
}

export default ShouldRender