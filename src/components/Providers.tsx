import { type FC } from 'react';
import { Toaster } from 'react-hot-toast';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({children}) => {
  return (
<> 
<Toaster position='bottom-right' />
{children}
</>
)
}

export default Providers