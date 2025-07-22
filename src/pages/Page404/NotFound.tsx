
import pic from "@/assets/not-found.png"
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

  const navigate = useNavigate();

  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
      <img src={pic} alt="not-found" className='h-[720px] w-[720px]' />
      <div className='flex flex-col gap-2'>
        <h3>Page not found!</h3>
        <Button onClick={() => navigate('/dashboard')}>
          Back Home
        </Button>
      </div>
    </div>
  )
}
