import Button from "./components/Button/Button"
import { Mulish } from 'next/font/google';

const mulish = Mulish({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-mulish',
});


const app = () => {
  return (
    <div className={mulish.className}>
      <h1 className="text-example bg-example2">App</h1>
      <Button>Button</Button>
    </div>
  )
}

export default app
