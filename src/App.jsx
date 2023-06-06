import { AboutPage } from './components/AboutPage/aboutPage';
import { MyButton } from './components/MyButton';
import './public.css';

export function App() {
  return (
    <main className='container'>
      <h2 className='title'>Welcome to my app</h2>
       <MyButton/>
       <AboutPage />
    </main>
  )
}

