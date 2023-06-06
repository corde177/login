import '../styles/form.css';

export function Form() {
  return (
     <main className='main-container'>
        <form action="#" className='form-container'>
         <h3>Sign In</h3>
         <input 
            type="text" 
            placeholder='Seu Nome:'
            className='search' 
          />
         <input 
           type="password" 
           name="" 
           id=""
           placeholder='Password:'
           className='search' 
         />
         <button type='button'className='btn' >
          Enter
        </button>
     </form>
     </main>
  );
}